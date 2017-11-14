# Test against this version of Node.js
environment:
  matrix:
    # node.js
    - nodejs_version: "0.10"
    - nodejs_version: "0.12"
    - nodejs_version: "4"
    - nodejs_version: "5"
    - nodejs_version: "6"

# Install scripts. (runs after repo cloning)
install:
  # Get the latest stable version of Node.js or io.js
  - ps: Install-Product node $env:nodejs_version
  # install modules
  - npm config set loglevel warn
  - npm install --silent

# Post-install test scripts.
test_script:
  # Output useful info for debugging.
  - node --version
  - npm --version
  # run tests
  - npm test

# Don't actually build.
build: off
