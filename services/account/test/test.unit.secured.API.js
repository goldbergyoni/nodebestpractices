const chai = require('chai'),
  expect = chai.expect,
  superTestRequest = require('supertest'),
  configurationManager = require("configurationManager"),
  faker = require('faker'),
  config = require('configurationManager'),
  testServices = require('testServices');

const request = testServices.API.getRequestExecutor();
let authenticatedUser;

describe('/api/users #hot #api #account #unit #onlythis', () => {
  before((done) => {
    testServices.API.createAuthenticatedUser().then((res) => {
      authenticatedUser = res;
      done();
    });
  });

  describe('/users/id :GET #sanity', () => {
    it('Scenario: Ask for existing user. Expectation: Get valid user back', (done) => {
      const getUserRequest = request.get(`/api/user/${authenticatedUser.id}`);
      testServices.API.setCommonRequestProperties(getUserRequest, authenticatedUser);
      getUserRequest.expect(200);
      getUserRequest.end(done);
    });
  });

  describe('/api/user/changePassword :POST #sanity', () => {
    it('Scenario: Change to a valid new password. Expactation: get valid response with new authentication token', async () => {
      const userToChangePasswordTo = await testServices.API.createAuthenticatedUser();
      const passwordChangeRequest = request.post("/api/user/changePassword")
        .send({password: userToChangePasswordTo.password , newPassword: userToChangePasswordTo.password});
      testServices.API.setCommonRequestProperties(passwordChangeRequest, userToChangePasswordTo);
      passwordChangeRequest.expect(200);
      testServices.API.assertCommonAPIExpactations(passwordChangeRequest);
    //  passwordChangeRequest.end(done);
    });
  });
});
