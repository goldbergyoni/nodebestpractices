FROM node:14.8.0-alpine AS build

# Copy dependency information and install all dependencies
COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

# Copy source code (and all other relevant files)
COPY --chown=node:node src ./src

# Build code
RUN npm run build

# Run-time stage
FROM node:14.8.0-alpine

# Set non-root user and expose port 3000
USER node
EXPOSE 3000

WORKDIR /home/node/app

# Copy dependency information and build results from previous stage
COPY --chown=node:node --from=build package.json package-lock.json ./
COPY --chown=node:node --from=build node_modules ./node_modules
COPY --chown=node:node --from=build dist ./dist

# Clean dev packages
RUN npm prune --production

CMD [ "node", "dist/app.js" ]
