# This is a multistage Dockerfile.
# In the first stage we install system build dependencies, copy project files and build them
# In the second stage, we start fresh and only copy necessary files. We also purge node_modules devDependencies.

#### Build stage ####
FROM node:14.8.0-alpine AS build

# Install system build dependencies (if needed) at the top ✅ See bullet point #8.8 about caching
RUN apk add --update --no-cache bash make gcc g++ lcms2-dev libpng-dev autoconf automake

# Only copy node dependency information and install all dependencies first
COPY --chown=node:node package.json package-lock.json ./

# Install packages using the lockfiles as source of truth ✅ See bullet point #8.5 about npm ci
RUN npm ci

# Copy source code (and all other relevant files)
COPY --chown=node:node src ./src

# Build code
RUN npm run build

#### Run-time stage ####
# ✅ See bullet point #8.10 about smaller docker base images
FROM node:14.8.0-alpine as app

# Set non-root user and expose port 3000
USER node
EXPOSE 3000

WORKDIR /home/node/app

# Copy dependency information and build output from previous stage
COPY --chown=node:node --from=build package.json package-lock.json ./
COPY --chown=node:node --from=build node_modules ./node_modules
COPY --chown=node:node --from=build dist ./dist

# Clean dev dependencies ✅ See bullet point #8.5
RUN npm prune --production && npm cache clean --force

# ✅ See bullet point #8.2 about avoiding npm start
CMD [ "node", "dist/app.js" ]
