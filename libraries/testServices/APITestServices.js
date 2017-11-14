const chai = require('chai'),
  expect = chai.expect,
  superTestRequest = require('supertest'),
  cookie = require('cookie'),
  faker = require('faker'),
  config = require('configurationManager'),
  Workspace = require('../entityServices').Workspace;

class APITestServices {

  getRequestExecutor() {
    const processMode = config.testing.API.processMode;
    switch (processMode) {
      case APIProcessModeOptions.externalProcess:
        return superTestRequest(config.baseUrl);
      case APIProcessModeOptions.inProcess:
        return superTestRequest(require('../../app'));
      default:
        return superTestRequest(config.baseUrl);
    }

  }

  setCommonRequestProperties(request, userInContext) {
    request.set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('X-Strategy', 'cookie');


    if (userInContext) {
      request.set('Authorization', `Bearer ${userInContext.authenticationToken}`);
      request.set('Cookie', [`auth-token=${userInContext.authenticationToken}`]);
    }
  }

  assertCommonAPIExpactations(testCase, done) {
    testCase.expect('Content-Type', /json/);
  }

  factorTestWorkspace() {
    return new Workspace(999, 777, 64);
  }


  factorBasicUser() {
    return {
      displayName: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      imageUrl: faker.internet.url(),
      state: 1,
      salt: faker.random.number(),
      loginCount: 0,
      creaedOn: new Date(),
      clientSecret: config.auth.app.clientSecret,
      authenticationToken: ''
    };
  }

  factorBasicUserForSignup() {
    return {
      displayName: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      imageUrl: faker.internet.url(),
      clientSecret: config.auth.app.clientSecret
    };
  }

  factorDummyIntegration(organizationId) {
    return {
      type: 1,
      organizationId: organizationId,
      userName: faker.name.findName(),
      password: faker.internet.password(),
      securityToken: faker.internet.password(),
      externalOrganizationId: faker.random.number(),
      outboundUrl: faker.internet.url(),
    };
  }

  createAuthenticatedUser() {
    return new Promise((resolve, reject) => {
      let request = this.getRequestExecutor(),
        loginRequest, authenticatedUser;
      const userDetails = {
        email: "test_auth_user@test.com",
        password: "test_auth_user_password",
        clientSecret: config.auth.app.clientSecret
      };

      userDetails.username = userDetails.email;

      loginRequest = request.post("/auth/authenticate").send(userDetails);
      this.setCommonRequestProperties(loginRequest);
      loginRequest.then(response => {
        if (response.status == 401) {
          const signupRequest = request.post("/auth/signup").send(userDetails);
          this.setCommonRequestProperties(signupRequest);
          signupRequest.expect(200).then(response => {
            loginRequest = request.post("/auth/authenticate").send(userDetails);
            this.setCommonRequestProperties(loginRequest);
            loginRequest.then(response => {
              authenticatedUser = response.body.userInfo;
              authenticatedUser.authenticationToken = response.header.auth_token;
              authenticatedUser.password = userDetails.password;
              authenticatedUser.clientSecret = userDetails.clientSecret;
              resolve(authenticatedUser);
            });
          });
        }
        else {
          authenticatedUser = response.body.userInfo;
          authenticatedUser.authenticationToken = response.header.auth_token;
          authenticatedUser.password = userDetails.password;
          authenticatedUser.clientSecret = userDetails.clientSecret;

          resolve(authenticatedUser);
        }
      });
    });
  }

  getCookieProperty(superTestResponse, cookieName, cookieProperty) {
    let result = null;

    const cookieCollection = superTestResponse.header["set-cookie"];
    if (!cookieCollection)
      return null;

    cookieCollection.forEach((aCookie) => {
      const cookieProperties = cookie.parse(aCookie);
      if (cookieProperties.hasOwnProperty(cookieName)) {
        result = cookieProperties[cookieProperty];
      }

    });
    return result;
  }
}

const APIProcessModeOptions = {
  inProcess: "inProcess",
  externalProcess: "externalProcess"
};

module.exports = new APITestServices();

