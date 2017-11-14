const chai = require('chai'),
  expect = chai.expect,
  superTestRequest = require('supertest'),
  config = require('configurationManager'),
  testServices = require('testServices');

let request;

before(async () => {
  request = testServices.API.getRequestExecutor();
});

describe('Register new user scenario #hot #sanity #api #scenario', () => {
  it('Scenario: Add and login a new user. Expectation: Successful login', (done) => {
    const testUser = testServices.API.factorBasicUserForSignup();

    //sign up phase
    const signupRequest = request.post("/auth/signup")
      .send(testUser);
    testServices.API.setCommonRequestProperties(signupRequest);
    signupRequest.expect(200).then(response => {
      testServices.API.assertCommonAPIExpactations(signupRequest);

      //login phase
      const loginRequest = request.post("/auth/authenticate")
        .send({username: testUser.email, password: testUser.password, clientSecret: testUser.clientSecret})
        .set('Cookie', ['X-Strategy=cookie']);
      testServices.API.setCommonRequestProperties(loginRequest);
      loginRequest.expect(200);
      testServices.API.assertCommonAPIExpactations(loginRequest);
      loginRequest.then((response) => {
        const authenticationCookieAge = testServices.API.getCookieProperty(response, 'auth-token', 'Max-Age');
        expect(isNaN(authenticationCookieAge)).to.equal(false);
        expect(parseInt(authenticationCookieAge)).to.be.above(0);
        done();
      });
    });
  });
});
