const chai = require('chai'),
  expect = chai.expect,
  configurationManager = require("configurationManager"),
  faker = require('faker'),
  testServices = require('testServices');
  const appReference = require('../../../app');

let request, authenticatedUser;

describe('Account Public API #hot #api #account #unit #onlythis', () => {

  before((done) => {
    request = testServices.API.getRequestExecutor();
    testServices.API.createAuthenticatedUser().then((res) => {
      authenticatedUser = res;
      done();
    });
  });

  describe('/auth/authenticate :POST #sanity', () => {
    
    it('Scenario: Login an existing user. Expactation: get valid authentication token', (done) => {
      const loginRequest = request.post("/auth/authenticate")
        .send({
          username: authenticatedUser.email, //"foo",
          password: authenticatedUser.password, //"foo2",
          clientSecret: "xZeyT9k3u/TdGM="
        });
      testServices.API.setCommonRequestProperties(loginRequest);
      testServices.API.assertCommonAPIExpactations(loginRequest);
      
      loginRequest.expect(200).then((response) => {
        testServices.API.assertCommonAPIExpactations(loginRequest);
        const authenticationCookieAge = testServices.API.getCookieProperty(response, 'auth-token', 'Max-Age');
        expect(isNaN(authenticationCookieAge)).to.equal(false);
        expect(parseInt(authenticationCookieAge)).to.be.above(0);
        done();
      });
    });

    it('Scenario: Login a non-existing user. Expactation: get unauthorized response', (done) => {
      const loginRequest = request.post("/auth/authenticate")
        .send({
          username: faker.name.findName(),
          password: faker.internet.password(),
          clientSecret: authenticatedUser.clientSecret
        });
      testServices.API.setCommonRequestProperties(loginRequest);
      loginRequest.expect(401).end(done);
    });
  });


  describe('/auth/logout :POST #sanity', () => {
    it('Scenario: logout an existing user. Expactation: get expired auth-token cookie', (done) => {
      const logoutRequest = request.post("/auth/logout");
      testServices.API.setCommonRequestProperties(logoutRequest);
      logoutRequest.expect(200).then((response) => {
        testServices.API.assertCommonAPIExpactations(logoutRequest);
        const authenticationCookieAge = testServices.API.getCookieProperty(response, 'auth-token', 'Max-Age');
        expect(authenticationCookieAge).to.be.equal("0");
        done();
      });
    });
  });

  describe('/auth/resetPassword :POST #sanity', () => {
    it('Scenario: Reset password for non-existing user. Expactation: Get an invalid input error', (done) => {
      const resetPasswordRequest = request.post("/auth/resetPassword")
        .send({
          sig: faker.name.findName(),
          newPassword: faker.name.findName()
        });

      testServices.API.setCommonRequestProperties(resetPasswordRequest);
      resetPasswordRequest.expect(400).end(done);
    });
  });



  describe('/users :POST #sanity', () => {
    describe('/users :POST #sanity', () => {
      it('Scenario: adds a new user. Expectation: Response with a valid user', (done) => {
        const testUser = testServices.API.factorBasicUserForSignup();
        const signupRequest = request.post("/auth/signup").send(testUser);
        testServices.API.setCommonRequestProperties(signupRequest);
        signupRequest.expect(200);
        signupRequest.end(done);
      });
    });
  });
});
