# Docker Health Checks

<br/><br/>

## **One Paragraph Explainer**

Docker health checks are essential for production Node.js applications as they provide container orchestrators (Docker Swarm, Kubernetes, AWS ECS) with the ability to determine if a container is functioning correctly beyond just checking if the process is running. A properly implemented health check goes beyond simple HTTP 200 responses - it should verify database connections, external service availability, and application-specific readiness indicators. Without health checks, orchestrators cannot distinguish between a container that's starting up, temporarily overloaded, or completely broken, leading to traffic being routed to unhealthy instances and cascading failures. Health checks enable zero-downtime deployments, automatic recovery, and improved overall system reliability.

<br/><br/>

## ❌ **Code Example – Anti Pattern**

```dockerfile
# DON'T DO THIS - No health check defined
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
# ❌ Missing HEALTHCHECK instruction
CMD ["node", "server.js"]
```

```javascript
// ❌ Bad: Basic health check that doesn't verify dependencies
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' }); // Too simplistic
});

// ❌ Bad: Health check that can hang indefinitely
app.get('/health', async (req, res) => {
  try {
    // This could hang forever if database is unresponsive
    await db.query('SELECT 1');
    res.status(200).json({ status: 'OK' });
  } catch (error) {
    res.status(500).json({ status: 'ERROR' });
  }
});
```

<br/><br/>

## ✅ **Code Example – Correct Way**

### 1. Comprehensive Health Check Implementation

```javascript
// ✅ Good: Comprehensive health check with timeouts and detailed status
const express = require('express');
const app = express();

class HealthChecker {
  constructor() {
    this.checks = new Map();
    this.timeout = 5000; // 5 second timeout for health checks
  }

  // Register health check functions
  addCheck(name, checkFunction, critical = true) {
    this.checks.set(name, { fn: checkFunction, critical });
  }

  async runCheck(name, checkFunction) {
    const start = Date.now();
    try {
      const result = await Promise.race([
        checkFunction(),
        new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error('Health check timeout')),
            this.timeout
          )
        ),
      ]);

      return {
        status: 'healthy',
        responseTime: Date.now() - start,
        details: result,
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        responseTime: Date.now() - start,
        error: error.message,
      };
    }
  }

  async checkHealth() {
    const results = {};
    let overallStatus = 'healthy';
    let hasUnhealthyCritical = false;

    // Run all health checks in parallel
    const checkPromises = Array.from(this.checks.entries()).map(
      async ([name, { fn, critical }]) => {
        const result = await this.runCheck(name, fn);
        results[name] = { ...result, critical };

        if (result.status === 'unhealthy' && critical) {
          hasUnhealthyCritical = true;
        }
      }
    );

    await Promise.all(checkPromises);

    // Set overall status
    if (hasUnhealthyCritical) {
      overallStatus = 'unhealthy';
    } else if (Object.values(results).some((r) => r.status === 'unhealthy')) {
      overallStatus = 'degraded';
    }

    return {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      checks: results,
    };
  }
}

// Initialize health checker
const healthChecker = new HealthChecker();

// Database health check
healthChecker.addCheck(
  'database',
  async () => {
    const result = await db.query('SELECT 1 as health_check');
    return { connection: 'active', query_result: result.rows[0] };
  },
  true
); // Critical check

// Redis health check
healthChecker.addCheck(
  'redis',
  async () => {
    const result = await redisClient.ping();
    return { ping: result };
  },
  true
); // Critical check

// External API health check
healthChecker.addCheck(
  'external_api',
  async () => {
    const response = await fetch('https://api.example.com/health', {
      method: 'GET',
      timeout: 3000,
    });
    return { status: response.status, ok: response.ok };
  },
  false
); // Non-critical check

// Memory usage check
healthChecker.addCheck(
  'memory',
  async () => {
    const memUsage = process.memoryUsage();
    const totalMem = require('os').totalmem();
    const usedPercent = (memUsage.rss / totalMem) * 100;

    return {
      rss: memUsage.rss,
      heapUsed: memUsage.heapUsed,
      heapTotal: memUsage.heapTotal,
      usedPercent: Math.round(usedPercent * 100) / 100,
      warning: usedPercent > 80,
    };
  },
  false
); // Non-critical check

// Health endpoint
app.get('/health', async (req, res) => {
  try {
    const health = await healthChecker.checkHealth();
    const statusCode =
      health.status === 'healthy'
        ? 200
        : health.status === 'degraded'
        ? 200
        : 503;

    res.status(statusCode).json(health);
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

// Simple liveness probe (for Kubernetes)
app.get('/health/live', (req, res) => {
  res.status(200).json({
    status: 'alive',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Readiness probe (for Kubernetes)
app.get('/health/ready', async (req, res) => {
  try {
    // Check only critical dependencies for readiness
    const criticalChecks = ['database', 'redis'];
    const results = {};

    for (const checkName of criticalChecks) {
      const check = healthChecker.checks.get(checkName);
      if (check) {
        results[checkName] = await healthChecker.runCheck(checkName, check.fn);
      }
    }

    const allHealthy = Object.values(results).every(
      (r) => r.status === 'healthy'
    );

    res.status(allHealthy ? 200 : 503).json({
      status: allHealthy ? 'ready' : 'not_ready',
      checks: results,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(503).json({
      status: 'not_ready',
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});
```

### 2. Dockerfile with Health Check

```dockerfile
# ✅ Good: Dockerfile with proper health check
FROM node:18-alpine

# Install curl for health checks (alternative to wget)
RUN apk add --no-cache curl

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copy package files
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy application code
COPY --chown=nodejs:nodejs . .

# Switch to non-root user
USER nodejs

EXPOSE 3000

# ✅ Configure health check
HEALTHCHECK --interval=30s \
            --timeout=10s \
            --start-period=60s \
            --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Alternative using wget if curl is not available
# HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
#   CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Alternative using Node.js built-in http module (no external dependencies)
# HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
#   CMD node -e "require('http').get('http://localhost:3000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) }).on('error', () => process.exit(1))"

CMD ["node", "server.js"]
```

### 3. Advanced Health Check with Graceful Shutdown

```javascript
// ✅ Advanced: Health check with graceful shutdown handling
class AdvancedHealthChecker extends HealthChecker {
  constructor() {
    super();
    this.isShuttingDown = false;
    this.setupGracefulShutdown();
  }

  setupGracefulShutdown() {
    const gracefulShutdown = (signal) => {
      console.log(`📢 Received ${signal}, starting graceful shutdown...`);
      this.isShuttingDown = true;

      // Give time for load balancers to detect unhealthy state
      setTimeout(() => {
        console.log('🔄 Closing server...');
        server.close(() => {
          console.log('✅ Server closed');
          process.exit(0);
        });
      }, 10000); // 10 second grace period
    };

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));
  }

  async checkHealth() {
    // Return unhealthy if shutting down
    if (this.isShuttingDown) {
      return {
        status: 'unhealthy',
        message: 'Service is shutting down',
        timestamp: new Date().toISOString(),
      };
    }

    return super.checkHealth();
  }
}

// Usage
const healthChecker = new AdvancedHealthChecker();

// Startup probe endpoint (for Kubernetes)
app.get('/health/startup', async (req, res) => {
  // Check if application has finished initializing
  const isInitialized = await checkApplicationInitialization();

  res.status(isInitialized ? 200 : 503).json({
    status: isInitialized ? 'initialized' : 'initializing',
    timestamp: new Date().toISOString(),
  });
});

async function checkApplicationInitialization() {
  // Check if database migrations are complete
  // Check if required configuration is loaded
  // Check if external dependencies are available
  return true; // Implement your initialization checks
}
```
