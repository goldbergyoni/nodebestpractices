machine:
  node:
    version: 8

test:
  override:
    - npm test
    - nvm use 6; npm test
    - npm run lint
    - nvm use 4; npm test
    - nvm use 0.12; npm test
