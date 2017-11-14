import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CognitoIdentityServiceProvider extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CognitoIdentityServiceProvider.Types.ClientConfiguration)
  config: Config & CognitoIdentityServiceProvider.Types.ClientConfiguration;
  /**
   * Adds additional user attributes to the user pool schema.
   */
  addCustomAttributes(params: CognitoIdentityServiceProvider.Types.AddCustomAttributesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AddCustomAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AddCustomAttributesResponse, AWSError>;
  /**
   * Adds additional user attributes to the user pool schema.
   */
  addCustomAttributes(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AddCustomAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AddCustomAttributesResponse, AWSError>;
  /**
   * Adds the specified user to the specified group. Requires developer credentials.
   */
  adminAddUserToGroup(params: CognitoIdentityServiceProvider.Types.AdminAddUserToGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds the specified user to the specified group. Requires developer credentials.
   */
  adminAddUserToGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Confirms user registration as an admin without using a confirmation code. Works on any user. Requires developer credentials.
   */
  adminConfirmSignUp(params: CognitoIdentityServiceProvider.Types.AdminConfirmSignUpRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminConfirmSignUpResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminConfirmSignUpResponse, AWSError>;
  /**
   * Confirms user registration as an admin without using a confirmation code. Works on any user. Requires developer credentials.
   */
  adminConfirmSignUp(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminConfirmSignUpResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminConfirmSignUpResponse, AWSError>;
  /**
   * Creates a new user in the specified user pool and sends a welcome message via email or phone (SMS). This message is based on a template that you configured in your call to CreateUserPool or UpdateUserPool. This template includes your custom sign-up instructions and placeholders for user name and temporary password. Requires developer credentials.
   */
  adminCreateUser(params: CognitoIdentityServiceProvider.Types.AdminCreateUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminCreateUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminCreateUserResponse, AWSError>;
  /**
   * Creates a new user in the specified user pool and sends a welcome message via email or phone (SMS). This message is based on a template that you configured in your call to CreateUserPool or UpdateUserPool. This template includes your custom sign-up instructions and placeholders for user name and temporary password. Requires developer credentials.
   */
  adminCreateUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminCreateUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminCreateUserResponse, AWSError>;
  /**
   * Deletes a user as an administrator. Works on any user. Requires developer credentials.
   */
  adminDeleteUser(params: CognitoIdentityServiceProvider.Types.AdminDeleteUserRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user as an administrator. Works on any user. Requires developer credentials.
   */
  adminDeleteUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the user attributes in a user pool as an administrator. Works on any user. Requires developer credentials.
   */
  adminDeleteUserAttributes(params: CognitoIdentityServiceProvider.Types.AdminDeleteUserAttributesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminDeleteUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminDeleteUserAttributesResponse, AWSError>;
  /**
   * Deletes the user attributes in a user pool as an administrator. Works on any user. Requires developer credentials.
   */
  adminDeleteUserAttributes(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminDeleteUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminDeleteUserAttributesResponse, AWSError>;
  /**
   * Disables the user from signing in with the specified external (SAML or social) identity provider. If the user to disable is a Cognito User Pools native username + password user, they are not permitted to use their password to sign-in. If the user to disable is a linked external IdP user, any link between that user and an existing user is removed. The next time the external user (no longer attached to the previously linked DestinationUser) signs in, they must create a new user account. See AdminLinkProviderForUser. This action is enabled only for admin access and requires developer credentials. The ProviderName must match the value specified when creating an IdP for the pool.  To disable a native username + password user, the ProviderName value must be Cognito and the ProviderAttributeName must be Cognito_Subject, with the ProviderAttributeValue being the name that is used in the user pool for the user. The ProviderAttributeName must always be Cognito_Subject for social identity providers. The ProviderAttributeValue must always be the exact subject that was used when the user was originally linked as a source user. For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign-in, the ProviderAttributeName and ProviderAttributeValue must be the same values that were used for the SourceUser when the identities were originally linked in the AdminLinkProviderForUser call. (If the linking was done with ProviderAttributeName set to Cognito_Subject, the same applies here). However, if the user has already signed in, the ProviderAttributeName must be Cognito_Subject and ProviderAttributeValue must be the subject of the SAML assertion.
   */
  adminDisableProviderForUser(params: CognitoIdentityServiceProvider.Types.AdminDisableProviderForUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminDisableProviderForUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminDisableProviderForUserResponse, AWSError>;
  /**
   * Disables the user from signing in with the specified external (SAML or social) identity provider. If the user to disable is a Cognito User Pools native username + password user, they are not permitted to use their password to sign-in. If the user to disable is a linked external IdP user, any link between that user and an existing user is removed. The next time the external user (no longer attached to the previously linked DestinationUser) signs in, they must create a new user account. See AdminLinkProviderForUser. This action is enabled only for admin access and requires developer credentials. The ProviderName must match the value specified when creating an IdP for the pool.  To disable a native username + password user, the ProviderName value must be Cognito and the ProviderAttributeName must be Cognito_Subject, with the ProviderAttributeValue being the name that is used in the user pool for the user. The ProviderAttributeName must always be Cognito_Subject for social identity providers. The ProviderAttributeValue must always be the exact subject that was used when the user was originally linked as a source user. For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign-in, the ProviderAttributeName and ProviderAttributeValue must be the same values that were used for the SourceUser when the identities were originally linked in the AdminLinkProviderForUser call. (If the linking was done with ProviderAttributeName set to Cognito_Subject, the same applies here). However, if the user has already signed in, the ProviderAttributeName must be Cognito_Subject and ProviderAttributeValue must be the subject of the SAML assertion.
   */
  adminDisableProviderForUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminDisableProviderForUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminDisableProviderForUserResponse, AWSError>;
  /**
   * Disables the specified user as an administrator. Works on any user. Requires developer credentials.
   */
  adminDisableUser(params: CognitoIdentityServiceProvider.Types.AdminDisableUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminDisableUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminDisableUserResponse, AWSError>;
  /**
   * Disables the specified user as an administrator. Works on any user. Requires developer credentials.
   */
  adminDisableUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminDisableUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminDisableUserResponse, AWSError>;
  /**
   * Enables the specified user as an administrator. Works on any user. Requires developer credentials.
   */
  adminEnableUser(params: CognitoIdentityServiceProvider.Types.AdminEnableUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminEnableUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminEnableUserResponse, AWSError>;
  /**
   * Enables the specified user as an administrator. Works on any user. Requires developer credentials.
   */
  adminEnableUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminEnableUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminEnableUserResponse, AWSError>;
  /**
   * Forgets the device, as an administrator. Requires developer credentials.
   */
  adminForgetDevice(params: CognitoIdentityServiceProvider.Types.AdminForgetDeviceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Forgets the device, as an administrator. Requires developer credentials.
   */
  adminForgetDevice(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets the device, as an administrator. Requires developer credentials.
   */
  adminGetDevice(params: CognitoIdentityServiceProvider.Types.AdminGetDeviceRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminGetDeviceResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminGetDeviceResponse, AWSError>;
  /**
   * Gets the device, as an administrator. Requires developer credentials.
   */
  adminGetDevice(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminGetDeviceResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminGetDeviceResponse, AWSError>;
  /**
   * Gets the specified user by user name in a user pool as an administrator. Works on any user. Requires developer credentials.
   */
  adminGetUser(params: CognitoIdentityServiceProvider.Types.AdminGetUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminGetUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminGetUserResponse, AWSError>;
  /**
   * Gets the specified user by user name in a user pool as an administrator. Works on any user. Requires developer credentials.
   */
  adminGetUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminGetUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminGetUserResponse, AWSError>;
  /**
   * Initiates the authentication flow, as an administrator. Requires developer credentials.
   */
  adminInitiateAuth(params: CognitoIdentityServiceProvider.Types.AdminInitiateAuthRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminInitiateAuthResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminInitiateAuthResponse, AWSError>;
  /**
   * Initiates the authentication flow, as an administrator. Requires developer credentials.
   */
  adminInitiateAuth(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminInitiateAuthResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminInitiateAuthResponse, AWSError>;
  /**
   * Links an existing user account in a user pool (DestinationUser) to an identity from an external identity provider (SourceUser) based on a specified attribute name and value from the external identity provider. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in, so that the federated user identity can be used to sign in as the existing user account.   For example, if there is an existing user with a username and password, this API links that user to a federated user identity, so that when the federated user identity is used, the user signs in as the existing user account.   Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external identity providers and provider attributes that have been trusted by the application owner.  See also AdminDisableProviderForUser. This action is enabled only for admin access and requires developer credentials.
   */
  adminLinkProviderForUser(params: CognitoIdentityServiceProvider.Types.AdminLinkProviderForUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminLinkProviderForUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminLinkProviderForUserResponse, AWSError>;
  /**
   * Links an existing user account in a user pool (DestinationUser) to an identity from an external identity provider (SourceUser) based on a specified attribute name and value from the external identity provider. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in, so that the federated user identity can be used to sign in as the existing user account.   For example, if there is an existing user with a username and password, this API links that user to a federated user identity, so that when the federated user identity is used, the user signs in as the existing user account.   Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external identity providers and provider attributes that have been trusted by the application owner.  See also AdminDisableProviderForUser. This action is enabled only for admin access and requires developer credentials.
   */
  adminLinkProviderForUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminLinkProviderForUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminLinkProviderForUserResponse, AWSError>;
  /**
   * Lists devices, as an administrator. Requires developer credentials.
   */
  adminListDevices(params: CognitoIdentityServiceProvider.Types.AdminListDevicesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminListDevicesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminListDevicesResponse, AWSError>;
  /**
   * Lists devices, as an administrator. Requires developer credentials.
   */
  adminListDevices(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminListDevicesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminListDevicesResponse, AWSError>;
  /**
   * Lists the groups that the user belongs to. Requires developer credentials.
   */
  adminListGroupsForUser(params: CognitoIdentityServiceProvider.Types.AdminListGroupsForUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminListGroupsForUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminListGroupsForUserResponse, AWSError>;
  /**
   * Lists the groups that the user belongs to. Requires developer credentials.
   */
  adminListGroupsForUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminListGroupsForUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminListGroupsForUserResponse, AWSError>;
  /**
   * Removes the specified user from the specified group. Requires developer credentials.
   */
  adminRemoveUserFromGroup(params: CognitoIdentityServiceProvider.Types.AdminRemoveUserFromGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified user from the specified group. Requires developer credentials.
   */
  adminRemoveUserFromGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Resets the specified user's password in a user pool as an administrator. Works on any user. When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password. Requires developer credentials.
   */
  adminResetUserPassword(params: CognitoIdentityServiceProvider.Types.AdminResetUserPasswordRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminResetUserPasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminResetUserPasswordResponse, AWSError>;
  /**
   * Resets the specified user's password in a user pool as an administrator. Works on any user. When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password. Requires developer credentials.
   */
  adminResetUserPassword(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminResetUserPasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminResetUserPasswordResponse, AWSError>;
  /**
   * Responds to an authentication challenge, as an administrator. Requires developer credentials.
   */
  adminRespondToAuthChallenge(params: CognitoIdentityServiceProvider.Types.AdminRespondToAuthChallengeRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminRespondToAuthChallengeResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminRespondToAuthChallengeResponse, AWSError>;
  /**
   * Responds to an authentication challenge, as an administrator. Requires developer credentials.
   */
  adminRespondToAuthChallenge(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminRespondToAuthChallengeResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminRespondToAuthChallengeResponse, AWSError>;
  /**
   * Sets all the user settings for a specified user name. Works on any user. Requires developer credentials.
   */
  adminSetUserSettings(params: CognitoIdentityServiceProvider.Types.AdminSetUserSettingsRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminSetUserSettingsResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminSetUserSettingsResponse, AWSError>;
  /**
   * Sets all the user settings for a specified user name. Works on any user. Requires developer credentials.
   */
  adminSetUserSettings(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminSetUserSettingsResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminSetUserSettingsResponse, AWSError>;
  /**
   * Updates the device status as an administrator. Requires developer credentials.
   */
  adminUpdateDeviceStatus(params: CognitoIdentityServiceProvider.Types.AdminUpdateDeviceStatusRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminUpdateDeviceStatusResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminUpdateDeviceStatusResponse, AWSError>;
  /**
   * Updates the device status as an administrator. Requires developer credentials.
   */
  adminUpdateDeviceStatus(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminUpdateDeviceStatusResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminUpdateDeviceStatusResponse, AWSError>;
  /**
   * Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user. For custom attributes, you must prepend the custom: prefix to the attribute name. In addition to updating user attributes, this API can also be used to mark phone and email as verified. Requires developer credentials.
   */
  adminUpdateUserAttributes(params: CognitoIdentityServiceProvider.Types.AdminUpdateUserAttributesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminUpdateUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminUpdateUserAttributesResponse, AWSError>;
  /**
   * Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user. For custom attributes, you must prepend the custom: prefix to the attribute name. In addition to updating user attributes, this API can also be used to mark phone and email as verified. Requires developer credentials.
   */
  adminUpdateUserAttributes(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminUpdateUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminUpdateUserAttributesResponse, AWSError>;
  /**
   * Signs out users from all devices, as an administrator. Requires developer credentials.
   */
  adminUserGlobalSignOut(params: CognitoIdentityServiceProvider.Types.AdminUserGlobalSignOutRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminUserGlobalSignOutResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminUserGlobalSignOutResponse, AWSError>;
  /**
   * Signs out users from all devices, as an administrator. Requires developer credentials.
   */
  adminUserGlobalSignOut(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminUserGlobalSignOutResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminUserGlobalSignOutResponse, AWSError>;
  /**
   * Changes the password for a specified user in a user pool.
   */
  changePassword(params: CognitoIdentityServiceProvider.Types.ChangePasswordRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ChangePasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.ChangePasswordResponse, AWSError>;
  /**
   * Changes the password for a specified user in a user pool.
   */
  changePassword(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ChangePasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.ChangePasswordResponse, AWSError>;
  /**
   * Confirms tracking of the device. This API call is the call that begins device tracking.
   */
  confirmDevice(params: CognitoIdentityServiceProvider.Types.ConfirmDeviceRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ConfirmDeviceResponse) => void): Request<CognitoIdentityServiceProvider.Types.ConfirmDeviceResponse, AWSError>;
  /**
   * Confirms tracking of the device. This API call is the call that begins device tracking.
   */
  confirmDevice(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ConfirmDeviceResponse) => void): Request<CognitoIdentityServiceProvider.Types.ConfirmDeviceResponse, AWSError>;
  /**
   * Allows a user to enter a confirmation code to reset a forgotten password.
   */
  confirmForgotPassword(params: CognitoIdentityServiceProvider.Types.ConfirmForgotPasswordRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ConfirmForgotPasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.ConfirmForgotPasswordResponse, AWSError>;
  /**
   * Allows a user to enter a confirmation code to reset a forgotten password.
   */
  confirmForgotPassword(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ConfirmForgotPasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.ConfirmForgotPasswordResponse, AWSError>;
  /**
   * Confirms registration of a user and handles the existing alias from a previous user.
   */
  confirmSignUp(params: CognitoIdentityServiceProvider.Types.ConfirmSignUpRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ConfirmSignUpResponse) => void): Request<CognitoIdentityServiceProvider.Types.ConfirmSignUpResponse, AWSError>;
  /**
   * Confirms registration of a user and handles the existing alias from a previous user.
   */
  confirmSignUp(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ConfirmSignUpResponse) => void): Request<CognitoIdentityServiceProvider.Types.ConfirmSignUpResponse, AWSError>;
  /**
   * Creates a new group in the specified user pool. Requires developer credentials.
   */
  createGroup(params: CognitoIdentityServiceProvider.Types.CreateGroupRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateGroupResponse, AWSError>;
  /**
   * Creates a new group in the specified user pool. Requires developer credentials.
   */
  createGroup(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateGroupResponse, AWSError>;
  /**
   * Creates an identity provider for a user pool.
   */
  createIdentityProvider(params: CognitoIdentityServiceProvider.Types.CreateIdentityProviderRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateIdentityProviderResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateIdentityProviderResponse, AWSError>;
  /**
   * Creates an identity provider for a user pool.
   */
  createIdentityProvider(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateIdentityProviderResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateIdentityProviderResponse, AWSError>;
  /**
   * Creates a new OAuth2.0 resource server and defines custom scopes in it.
   */
  createResourceServer(params: CognitoIdentityServiceProvider.Types.CreateResourceServerRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateResourceServerResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateResourceServerResponse, AWSError>;
  /**
   * Creates a new OAuth2.0 resource server and defines custom scopes in it.
   */
  createResourceServer(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateResourceServerResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateResourceServerResponse, AWSError>;
  /**
   * Creates the user import job.
   */
  createUserImportJob(params: CognitoIdentityServiceProvider.Types.CreateUserImportJobRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserImportJobResponse, AWSError>;
  /**
   * Creates the user import job.
   */
  createUserImportJob(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserImportJobResponse, AWSError>;
  /**
   * Creates a new Amazon Cognito user pool and sets the password policy for the pool.
   */
  createUserPool(params: CognitoIdentityServiceProvider.Types.CreateUserPoolRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserPoolResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserPoolResponse, AWSError>;
  /**
   * Creates a new Amazon Cognito user pool and sets the password policy for the pool.
   */
  createUserPool(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserPoolResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserPoolResponse, AWSError>;
  /**
   * Creates the user pool client.
   */
  createUserPoolClient(params: CognitoIdentityServiceProvider.Types.CreateUserPoolClientRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserPoolClientResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserPoolClientResponse, AWSError>;
  /**
   * Creates the user pool client.
   */
  createUserPoolClient(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserPoolClientResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserPoolClientResponse, AWSError>;
  /**
   * Creates a new domain for a user pool.
   */
  createUserPoolDomain(params: CognitoIdentityServiceProvider.Types.CreateUserPoolDomainRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserPoolDomainResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserPoolDomainResponse, AWSError>;
  /**
   * Creates a new domain for a user pool.
   */
  createUserPoolDomain(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserPoolDomainResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserPoolDomainResponse, AWSError>;
  /**
   * Deletes a group. Currently only groups with no members can be deleted. Requires developer credentials.
   */
  deleteGroup(params: CognitoIdentityServiceProvider.Types.DeleteGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a group. Currently only groups with no members can be deleted. Requires developer credentials.
   */
  deleteGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an identity provider for a user pool.
   */
  deleteIdentityProvider(params: CognitoIdentityServiceProvider.Types.DeleteIdentityProviderRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an identity provider for a user pool.
   */
  deleteIdentityProvider(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a resource server.
   */
  deleteResourceServer(params: CognitoIdentityServiceProvider.Types.DeleteResourceServerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a resource server.
   */
  deleteResourceServer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows a user to delete himself or herself.
   */
  deleteUser(params: CognitoIdentityServiceProvider.Types.DeleteUserRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows a user to delete himself or herself.
   */
  deleteUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the attributes for a user.
   */
  deleteUserAttributes(params: CognitoIdentityServiceProvider.Types.DeleteUserAttributesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DeleteUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.DeleteUserAttributesResponse, AWSError>;
  /**
   * Deletes the attributes for a user.
   */
  deleteUserAttributes(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DeleteUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.DeleteUserAttributesResponse, AWSError>;
  /**
   * Deletes the specified Amazon Cognito user pool.
   */
  deleteUserPool(params: CognitoIdentityServiceProvider.Types.DeleteUserPoolRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Amazon Cognito user pool.
   */
  deleteUserPool(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows the developer to delete the user pool client.
   */
  deleteUserPoolClient(params: CognitoIdentityServiceProvider.Types.DeleteUserPoolClientRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows the developer to delete the user pool client.
   */
  deleteUserPoolClient(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a domain for a user pool.
   */
  deleteUserPoolDomain(params: CognitoIdentityServiceProvider.Types.DeleteUserPoolDomainRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DeleteUserPoolDomainResponse) => void): Request<CognitoIdentityServiceProvider.Types.DeleteUserPoolDomainResponse, AWSError>;
  /**
   * Deletes a domain for a user pool.
   */
  deleteUserPoolDomain(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DeleteUserPoolDomainResponse) => void): Request<CognitoIdentityServiceProvider.Types.DeleteUserPoolDomainResponse, AWSError>;
  /**
   * Gets information about a specific identity provider.
   */
  describeIdentityProvider(params: CognitoIdentityServiceProvider.Types.DescribeIdentityProviderRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeIdentityProviderResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeIdentityProviderResponse, AWSError>;
  /**
   * Gets information about a specific identity provider.
   */
  describeIdentityProvider(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeIdentityProviderResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeIdentityProviderResponse, AWSError>;
  /**
   * Describes a resource server.
   */
  describeResourceServer(params: CognitoIdentityServiceProvider.Types.DescribeResourceServerRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeResourceServerResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeResourceServerResponse, AWSError>;
  /**
   * Describes a resource server.
   */
  describeResourceServer(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeResourceServerResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeResourceServerResponse, AWSError>;
  /**
   * Describes the user import job.
   */
  describeUserImportJob(params: CognitoIdentityServiceProvider.Types.DescribeUserImportJobRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserImportJobResponse, AWSError>;
  /**
   * Describes the user import job.
   */
  describeUserImportJob(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserImportJobResponse, AWSError>;
  /**
   * Returns the configuration information and metadata of the specified user pool.
   */
  describeUserPool(params: CognitoIdentityServiceProvider.Types.DescribeUserPoolRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserPoolResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserPoolResponse, AWSError>;
  /**
   * Returns the configuration information and metadata of the specified user pool.
   */
  describeUserPool(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserPoolResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserPoolResponse, AWSError>;
  /**
   * Client method for returning the configuration information and metadata of the specified user pool client.
   */
  describeUserPoolClient(params: CognitoIdentityServiceProvider.Types.DescribeUserPoolClientRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserPoolClientResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserPoolClientResponse, AWSError>;
  /**
   * Client method for returning the configuration information and metadata of the specified user pool client.
   */
  describeUserPoolClient(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserPoolClientResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserPoolClientResponse, AWSError>;
  /**
   * Gets information about a domain.
   */
  describeUserPoolDomain(params: CognitoIdentityServiceProvider.Types.DescribeUserPoolDomainRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserPoolDomainResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserPoolDomainResponse, AWSError>;
  /**
   * Gets information about a domain.
   */
  describeUserPoolDomain(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserPoolDomainResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserPoolDomainResponse, AWSError>;
  /**
   * Forgets the specified device.
   */
  forgetDevice(params: CognitoIdentityServiceProvider.Types.ForgetDeviceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Forgets the specified device.
   */
  forgetDevice(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the Username parameter, you can use the username or user alias. If a verified phone number exists for the user, the confirmation code is sent to the phone number. Otherwise, if a verified email exists, the confirmation code is sent to the email. If neither a verified phone number nor a verified email exists, InvalidParameterException is thrown. To use the confirmation code for resetting the password, call ConfirmForgotPassword.
   */
  forgotPassword(params: CognitoIdentityServiceProvider.Types.ForgotPasswordRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ForgotPasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.ForgotPasswordResponse, AWSError>;
  /**
   * Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the Username parameter, you can use the username or user alias. If a verified phone number exists for the user, the confirmation code is sent to the phone number. Otherwise, if a verified email exists, the confirmation code is sent to the email. If neither a verified phone number nor a verified email exists, InvalidParameterException is thrown. To use the confirmation code for resetting the password, call ConfirmForgotPassword.
   */
  forgotPassword(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ForgotPasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.ForgotPasswordResponse, AWSError>;
  /**
   * Gets the header information for the .csv file to be used as input for the user import job.
   */
  getCSVHeader(params: CognitoIdentityServiceProvider.Types.GetCSVHeaderRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetCSVHeaderResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetCSVHeaderResponse, AWSError>;
  /**
   * Gets the header information for the .csv file to be used as input for the user import job.
   */
  getCSVHeader(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetCSVHeaderResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetCSVHeaderResponse, AWSError>;
  /**
   * Gets the device.
   */
  getDevice(params: CognitoIdentityServiceProvider.Types.GetDeviceRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetDeviceResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetDeviceResponse, AWSError>;
  /**
   * Gets the device.
   */
  getDevice(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetDeviceResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetDeviceResponse, AWSError>;
  /**
   * Gets a group. Requires developer credentials.
   */
  getGroup(params: CognitoIdentityServiceProvider.Types.GetGroupRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetGroupResponse, AWSError>;
  /**
   * Gets a group. Requires developer credentials.
   */
  getGroup(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetGroupResponse, AWSError>;
  /**
   * Gets the specified identity provider.
   */
  getIdentityProviderByIdentifier(params: CognitoIdentityServiceProvider.Types.GetIdentityProviderByIdentifierRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetIdentityProviderByIdentifierResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetIdentityProviderByIdentifierResponse, AWSError>;
  /**
   * Gets the specified identity provider.
   */
  getIdentityProviderByIdentifier(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetIdentityProviderByIdentifierResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetIdentityProviderByIdentifierResponse, AWSError>;
  /**
   * Gets the UI Customization information for a particular app client's app UI, if there is something set. If nothing is set for the particular client, but there is an existing pool level customization (app clientId will be ALL), then that is returned. If nothing is present, then an empty shape is returned.
   */
  getUICustomization(params: CognitoIdentityServiceProvider.Types.GetUICustomizationRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetUICustomizationResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetUICustomizationResponse, AWSError>;
  /**
   * Gets the UI Customization information for a particular app client's app UI, if there is something set. If nothing is set for the particular client, but there is an existing pool level customization (app clientId will be ALL), then that is returned. If nothing is present, then an empty shape is returned.
   */
  getUICustomization(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetUICustomizationResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetUICustomizationResponse, AWSError>;
  /**
   * Gets the user attributes and metadata for a user.
   */
  getUser(params: CognitoIdentityServiceProvider.Types.GetUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetUserResponse, AWSError>;
  /**
   * Gets the user attributes and metadata for a user.
   */
  getUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetUserResponse, AWSError>;
  /**
   * Gets the user attribute verification code for the specified attribute name.
   */
  getUserAttributeVerificationCode(params: CognitoIdentityServiceProvider.Types.GetUserAttributeVerificationCodeRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetUserAttributeVerificationCodeResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetUserAttributeVerificationCodeResponse, AWSError>;
  /**
   * Gets the user attribute verification code for the specified attribute name.
   */
  getUserAttributeVerificationCode(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetUserAttributeVerificationCodeResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetUserAttributeVerificationCodeResponse, AWSError>;
  /**
   * Signs out users from all devices.
   */
  globalSignOut(params: CognitoIdentityServiceProvider.Types.GlobalSignOutRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GlobalSignOutResponse) => void): Request<CognitoIdentityServiceProvider.Types.GlobalSignOutResponse, AWSError>;
  /**
   * Signs out users from all devices.
   */
  globalSignOut(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GlobalSignOutResponse) => void): Request<CognitoIdentityServiceProvider.Types.GlobalSignOutResponse, AWSError>;
  /**
   * Initiates the authentication flow.
   */
  initiateAuth(params: CognitoIdentityServiceProvider.Types.InitiateAuthRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.InitiateAuthResponse) => void): Request<CognitoIdentityServiceProvider.Types.InitiateAuthResponse, AWSError>;
  /**
   * Initiates the authentication flow.
   */
  initiateAuth(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.InitiateAuthResponse) => void): Request<CognitoIdentityServiceProvider.Types.InitiateAuthResponse, AWSError>;
  /**
   * Lists the devices.
   */
  listDevices(params: CognitoIdentityServiceProvider.Types.ListDevicesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListDevicesResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListDevicesResponse, AWSError>;
  /**
   * Lists the devices.
   */
  listDevices(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListDevicesResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListDevicesResponse, AWSError>;
  /**
   * Lists the groups associated with a user pool. Requires developer credentials.
   */
  listGroups(params: CognitoIdentityServiceProvider.Types.ListGroupsRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListGroupsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists the groups associated with a user pool. Requires developer credentials.
   */
  listGroups(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListGroupsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists information about all identity providers for a user pool.
   */
  listIdentityProviders(params: CognitoIdentityServiceProvider.Types.ListIdentityProvidersRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListIdentityProvidersResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListIdentityProvidersResponse, AWSError>;
  /**
   * Lists information about all identity providers for a user pool.
   */
  listIdentityProviders(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListIdentityProvidersResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListIdentityProvidersResponse, AWSError>;
  /**
   * Lists the resource servers for a user pool.
   */
  listResourceServers(params: CognitoIdentityServiceProvider.Types.ListResourceServersRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListResourceServersResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListResourceServersResponse, AWSError>;
  /**
   * Lists the resource servers for a user pool.
   */
  listResourceServers(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListResourceServersResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListResourceServersResponse, AWSError>;
  /**
   * Lists the user import jobs.
   */
  listUserImportJobs(params: CognitoIdentityServiceProvider.Types.ListUserImportJobsRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUserImportJobsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUserImportJobsResponse, AWSError>;
  /**
   * Lists the user import jobs.
   */
  listUserImportJobs(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUserImportJobsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUserImportJobsResponse, AWSError>;
  /**
   * Lists the clients that have been created for the specified user pool.
   */
  listUserPoolClients(params: CognitoIdentityServiceProvider.Types.ListUserPoolClientsRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUserPoolClientsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUserPoolClientsResponse, AWSError>;
  /**
   * Lists the clients that have been created for the specified user pool.
   */
  listUserPoolClients(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUserPoolClientsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUserPoolClientsResponse, AWSError>;
  /**
   * Lists the user pools associated with an AWS account.
   */
  listUserPools(params: CognitoIdentityServiceProvider.Types.ListUserPoolsRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUserPoolsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUserPoolsResponse, AWSError>;
  /**
   * Lists the user pools associated with an AWS account.
   */
  listUserPools(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUserPoolsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUserPoolsResponse, AWSError>;
  /**
   * Lists the users in the Amazon Cognito user pool.
   */
  listUsers(params: CognitoIdentityServiceProvider.Types.ListUsersRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUsersResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUsersResponse, AWSError>;
  /**
   * Lists the users in the Amazon Cognito user pool.
   */
  listUsers(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUsersResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUsersResponse, AWSError>;
  /**
   * Lists the users in the specified group. Requires developer credentials.
   */
  listUsersInGroup(params: CognitoIdentityServiceProvider.Types.ListUsersInGroupRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUsersInGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUsersInGroupResponse, AWSError>;
  /**
   * Lists the users in the specified group. Requires developer credentials.
   */
  listUsersInGroup(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUsersInGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUsersInGroupResponse, AWSError>;
  /**
   * Resends the confirmation (for confirmation of registration) to a specific user in the user pool.
   */
  resendConfirmationCode(params: CognitoIdentityServiceProvider.Types.ResendConfirmationCodeRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ResendConfirmationCodeResponse) => void): Request<CognitoIdentityServiceProvider.Types.ResendConfirmationCodeResponse, AWSError>;
  /**
   * Resends the confirmation (for confirmation of registration) to a specific user in the user pool.
   */
  resendConfirmationCode(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ResendConfirmationCodeResponse) => void): Request<CognitoIdentityServiceProvider.Types.ResendConfirmationCodeResponse, AWSError>;
  /**
   * Responds to the authentication challenge.
   */
  respondToAuthChallenge(params: CognitoIdentityServiceProvider.Types.RespondToAuthChallengeRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.RespondToAuthChallengeResponse) => void): Request<CognitoIdentityServiceProvider.Types.RespondToAuthChallengeResponse, AWSError>;
  /**
   * Responds to the authentication challenge.
   */
  respondToAuthChallenge(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.RespondToAuthChallengeResponse) => void): Request<CognitoIdentityServiceProvider.Types.RespondToAuthChallengeResponse, AWSError>;
  /**
   * Sets the UI customization information for a user pool's built-in app UI. You can specify app UI customization settings for a single client (with a specific clientId) or for all clients (by setting the clientId to ALL). If you specify ALL, the default configuration will be used for every client that has no UI customization set previously. If you specify UI customization settings for a particular client, it will no longer fall back to the ALL configuration.   To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error. 
   */
  setUICustomization(params: CognitoIdentityServiceProvider.Types.SetUICustomizationRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.SetUICustomizationResponse) => void): Request<CognitoIdentityServiceProvider.Types.SetUICustomizationResponse, AWSError>;
  /**
   * Sets the UI customization information for a user pool's built-in app UI. You can specify app UI customization settings for a single client (with a specific clientId) or for all clients (by setting the clientId to ALL). If you specify ALL, the default configuration will be used for every client that has no UI customization set previously. If you specify UI customization settings for a particular client, it will no longer fall back to the ALL configuration.   To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error. 
   */
  setUICustomization(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.SetUICustomizationResponse) => void): Request<CognitoIdentityServiceProvider.Types.SetUICustomizationResponse, AWSError>;
  /**
   * Sets the user settings like multi-factor authentication (MFA). If MFA is to be removed for a particular attribute pass the attribute with code delivery as null. If null list is passed, all MFA options are removed.
   */
  setUserSettings(params: CognitoIdentityServiceProvider.Types.SetUserSettingsRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.SetUserSettingsResponse) => void): Request<CognitoIdentityServiceProvider.Types.SetUserSettingsResponse, AWSError>;
  /**
   * Sets the user settings like multi-factor authentication (MFA). If MFA is to be removed for a particular attribute pass the attribute with code delivery as null. If null list is passed, all MFA options are removed.
   */
  setUserSettings(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.SetUserSettingsResponse) => void): Request<CognitoIdentityServiceProvider.Types.SetUserSettingsResponse, AWSError>;
  /**
   * Registers the user in the specified user pool and creates a user name, password, and user attributes.
   */
  signUp(params: CognitoIdentityServiceProvider.Types.SignUpRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.SignUpResponse) => void): Request<CognitoIdentityServiceProvider.Types.SignUpResponse, AWSError>;
  /**
   * Registers the user in the specified user pool and creates a user name, password, and user attributes.
   */
  signUp(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.SignUpResponse) => void): Request<CognitoIdentityServiceProvider.Types.SignUpResponse, AWSError>;
  /**
   * Starts the user import.
   */
  startUserImportJob(params: CognitoIdentityServiceProvider.Types.StartUserImportJobRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.StartUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.StartUserImportJobResponse, AWSError>;
  /**
   * Starts the user import.
   */
  startUserImportJob(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.StartUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.StartUserImportJobResponse, AWSError>;
  /**
   * Stops the user import job.
   */
  stopUserImportJob(params: CognitoIdentityServiceProvider.Types.StopUserImportJobRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.StopUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.StopUserImportJobResponse, AWSError>;
  /**
   * Stops the user import job.
   */
  stopUserImportJob(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.StopUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.StopUserImportJobResponse, AWSError>;
  /**
   * Updates the device status.
   */
  updateDeviceStatus(params: CognitoIdentityServiceProvider.Types.UpdateDeviceStatusRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateDeviceStatusResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateDeviceStatusResponse, AWSError>;
  /**
   * Updates the device status.
   */
  updateDeviceStatus(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateDeviceStatusResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateDeviceStatusResponse, AWSError>;
  /**
   * Updates the specified group with the specified attributes. Requires developer credentials.
   */
  updateGroup(params: CognitoIdentityServiceProvider.Types.UpdateGroupRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateGroupResponse, AWSError>;
  /**
   * Updates the specified group with the specified attributes. Requires developer credentials.
   */
  updateGroup(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateGroupResponse, AWSError>;
  /**
   * Updates identity provider information for a user pool.
   */
  updateIdentityProvider(params: CognitoIdentityServiceProvider.Types.UpdateIdentityProviderRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateIdentityProviderResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateIdentityProviderResponse, AWSError>;
  /**
   * Updates identity provider information for a user pool.
   */
  updateIdentityProvider(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateIdentityProviderResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateIdentityProviderResponse, AWSError>;
  /**
   * Updates the name and scopes of resource server. All other fields are read-only.
   */
  updateResourceServer(params: CognitoIdentityServiceProvider.Types.UpdateResourceServerRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateResourceServerResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateResourceServerResponse, AWSError>;
  /**
   * Updates the name and scopes of resource server. All other fields are read-only.
   */
  updateResourceServer(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateResourceServerResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateResourceServerResponse, AWSError>;
  /**
   * Allows a user to update a specific attribute (one at a time).
   */
  updateUserAttributes(params: CognitoIdentityServiceProvider.Types.UpdateUserAttributesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateUserAttributesResponse, AWSError>;
  /**
   * Allows a user to update a specific attribute (one at a time).
   */
  updateUserAttributes(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateUserAttributesResponse, AWSError>;
  /**
   * Updates the specified user pool with the specified attributes.
   */
  updateUserPool(params: CognitoIdentityServiceProvider.Types.UpdateUserPoolRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateUserPoolResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateUserPoolResponse, AWSError>;
  /**
   * Updates the specified user pool with the specified attributes.
   */
  updateUserPool(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateUserPoolResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateUserPoolResponse, AWSError>;
  /**
   * Allows the developer to update the specified user pool client and password policy.
   */
  updateUserPoolClient(params: CognitoIdentityServiceProvider.Types.UpdateUserPoolClientRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateUserPoolClientResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateUserPoolClientResponse, AWSError>;
  /**
   * Allows the developer to update the specified user pool client and password policy.
   */
  updateUserPoolClient(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateUserPoolClientResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateUserPoolClientResponse, AWSError>;
  /**
   * Verifies the specified user attributes in the user pool.
   */
  verifyUserAttribute(params: CognitoIdentityServiceProvider.Types.VerifyUserAttributeRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.VerifyUserAttributeResponse) => void): Request<CognitoIdentityServiceProvider.Types.VerifyUserAttributeResponse, AWSError>;
  /**
   * Verifies the specified user attributes in the user pool.
   */
  verifyUserAttribute(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.VerifyUserAttributeResponse) => void): Request<CognitoIdentityServiceProvider.Types.VerifyUserAttributeResponse, AWSError>;
}
declare namespace CognitoIdentityServiceProvider {
  export type AWSAccountIdType = string;
  export interface AddCustomAttributesRequest {
    /**
     * The user pool ID for the user pool where you want to add custom attributes.
     */
    UserPoolId: UserPoolIdType;
    /**
     * An array of custom attributes, such as Mutable and Name.
     */
    CustomAttributes: CustomAttributesListType;
  }
  export interface AddCustomAttributesResponse {
  }
  export interface AdminAddUserToGroupRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The username for the user.
     */
    Username: UsernameType;
    /**
     * The group name.
     */
    GroupName: GroupNameType;
  }
  export interface AdminConfirmSignUpRequest {
    /**
     * The user pool ID for which you want to confirm user registration.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name for which you want to confirm user registration.
     */
    Username: UsernameType;
  }
  export interface AdminConfirmSignUpResponse {
  }
  export interface AdminCreateUserConfigType {
    /**
     * Set to True if only the administrator is allowed to create user profiles. Set to False if users can sign themselves up via an app.
     */
    AllowAdminCreateUserOnly?: BooleanType;
    /**
     * The user account expiration limit, in days, after which the account is no longer usable. To reset the account after that time limit, you must call AdminCreateUser again, specifying "RESEND" for the MessageAction parameter. The default value for this parameter is 7.
     */
    UnusedAccountValidityDays?: AdminCreateUserUnusedAccountValidityDaysType;
    /**
     * The message template to be used for the welcome message to new users.
     */
    InviteMessageTemplate?: MessageTemplateType;
  }
  export interface AdminCreateUserRequest {
    /**
     * The user pool ID for the user pool where the user will be created.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The username for the user. Must be unique within the user pool. Must be a UTF-8 string between 1 and 128 characters. After the user is created, the username cannot be changed.
     */
    Username: UsernameType;
    /**
     * An array of name-value pairs that contain user attributes and attribute values to be set for the user to be created. You can create a user without specifying any attributes other than Username. However, any attributes that you specify as required (in CreateUserPool or in the Attributes tab of the console) must be supplied either by you (in your call to AdminCreateUser) or by the user (when he or she signs up in response to your welcome message). For custom attributes, you must prepend the custom: prefix to the attribute name. To send a message inviting the user to sign up, you must specify the user's email address or phone number. This can be done in your call to AdminCreateUser or in the Users tab of the Amazon Cognito console for managing your user pools. In your call to AdminCreateUser, you can set the email_verified attribute to True, and you can set the phone_number_verified attribute to True. (You can also do this by calling AdminUpdateUserAttributes.)    email: The email address of the user to whom the message that contains the code and username will be sent. Required if the email_verified attribute is set to True, or if "EMAIL" is specified in the DesiredDeliveryMediums parameter.    phone_number: The phone number of the user to whom the message that contains the code and username will be sent. Required if the phone_number_verified attribute is set to True, or if "SMS" is specified in the DesiredDeliveryMediums parameter.  
     */
    UserAttributes?: AttributeListType;
    /**
     * The user's validation data. This is an array of name-value pairs that contain user attributes and attribute values that you can use for custom validation, such as restricting the types of user accounts that can be registered. For example, you might choose to allow or disallow user sign-up based on the user's domain. To configure custom validation, you must create a Pre Sign-up Lambda trigger for the user pool as described in the Amazon Cognito Developer Guide. The Lambda trigger receives the validation data and uses it in the validation process. The user's validation data is not persisted.
     */
    ValidationData?: AttributeListType;
    /**
     * The user's temporary password. This password must conform to the password policy that you specified when you created the user pool. The temporary password is valid only once. To complete the Admin Create User flow, the user must enter the temporary password in the sign-in page along with a new password to be used in all future sign-ins. This parameter is not required. If you do not specify a value, Amazon Cognito generates one for you. The temporary password can only be used until the user account expiration limit that you specified when you created the user pool. To reset the account after that time limit, you must call AdminCreateUser again, specifying "RESEND" for the MessageAction parameter.
     */
    TemporaryPassword?: PasswordType;
    /**
     * This parameter is only used if the phone_number_verified or email_verified attribute is set to True. Otherwise, it is ignored. If this parameter is set to True and the phone number or email address specified in the UserAttributes parameter already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user. The previous user will no longer be able to log in using that alias. If this parameter is set to False, the API throws an AliasExistsException error if the alias already exists. The default value is False.
     */
    ForceAliasCreation?: ForceAliasCreation;
    /**
     * Set to "RESEND" to resend the invitation message to a user that already exists and reset the expiration limit on the user's account. Set to "SUPPRESS" to suppress sending the message. Only one value can be specified.
     */
    MessageAction?: MessageActionType;
    /**
     * Specify "EMAIL" if email will be used to send the welcome message. Specify "SMS" if the phone number will be used. The default value is "SMS". More than one value can be specified.
     */
    DesiredDeliveryMediums?: DeliveryMediumListType;
  }
  export interface AdminCreateUserResponse {
    /**
     * The newly created user.
     */
    User?: UserType;
  }
  export type AdminCreateUserUnusedAccountValidityDaysType = number;
  export interface AdminDeleteUserAttributesRequest {
    /**
     * The user pool ID for the user pool where you want to delete user attributes.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user from which you would like to delete attributes.
     */
    Username: UsernameType;
    /**
     * An array of strings representing the user attribute names you wish to delete. For custom attributes, you must prepend the custom: prefix to the attribute name.
     */
    UserAttributeNames: AttributeNameListType;
  }
  export interface AdminDeleteUserAttributesResponse {
  }
  export interface AdminDeleteUserRequest {
    /**
     * The user pool ID for the user pool where you want to delete the user.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user you wish to delete.
     */
    Username: UsernameType;
  }
  export interface AdminDisableProviderForUserRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: StringType;
    /**
     * The user to be disabled.
     */
    User: ProviderUserIdentifierType;
  }
  export interface AdminDisableProviderForUserResponse {
  }
  export interface AdminDisableUserRequest {
    /**
     * The user pool ID for the user pool where you want to disable the user.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user you wish to disable.
     */
    Username: UsernameType;
  }
  export interface AdminDisableUserResponse {
  }
  export interface AdminEnableUserRequest {
    /**
     * The user pool ID for the user pool where you want to enable the user.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user you wish to enable.
     */
    Username: UsernameType;
  }
  export interface AdminEnableUserResponse {
  }
  export interface AdminForgetDeviceRequest {
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name.
     */
    Username: UsernameType;
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
  }
  export interface AdminGetDeviceRequest {
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name.
     */
    Username: UsernameType;
  }
  export interface AdminGetDeviceResponse {
    /**
     * The device.
     */
    Device: DeviceType;
  }
  export interface AdminGetUserRequest {
    /**
     * The user pool ID for the user pool where you want to get information about the user.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user you wish to retrieve.
     */
    Username: UsernameType;
  }
  export interface AdminGetUserResponse {
    /**
     * The user name of the user about whom you are receiving information.
     */
    Username: UsernameType;
    /**
     * An array of name-value pairs representing user attributes.
     */
    UserAttributes?: AttributeListType;
    /**
     * The date the user was created.
     */
    UserCreateDate?: DateType;
    /**
     * The date the user was last modified.
     */
    UserLastModifiedDate?: DateType;
    /**
     * Indicates that the status is enabled.
     */
    Enabled?: BooleanType;
    /**
     * The user status. Can be one of the following:   UNCONFIRMED - User has been created but not confirmed.   CONFIRMED - User has been confirmed.   ARCHIVED - User is no longer active.   COMPROMISED - User is disabled due to a potential security threat.   UNKNOWN - User status is not known.  
     */
    UserStatus?: UserStatusType;
    /**
     * Specifies the options for MFA (e.g., email or phone number).
     */
    MFAOptions?: MFAOptionListType;
  }
  export interface AdminInitiateAuthRequest {
    /**
     * The ID of the Amazon Cognito user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The app client ID.
     */
    ClientId: ClientIdType;
    /**
     * The authentication flow for this call to execute. The API action will depend on this value. For example:    REFRESH_TOKEN_AUTH will take in a valid refresh token and return new tokens.    USER_SRP_AUTH will take in USERNAME and SRP_A and return the SRP variables to be used for next challenge execution.   Valid values include:    USER_SRP_AUTH: Authentication flow for the Secure Remote Password (SRP) protocol.    REFRESH_TOKEN_AUTH/REFRESH_TOKEN: Authentication flow for refreshing the access token and ID token by supplying a valid refresh token.    CUSTOM_AUTH: Custom authentication flow.    ADMIN_NO_SRP_AUTH: Non-SRP authentication flow; you can pass in the USERNAME and PASSWORD directly if the flow is enabled for calling the app client.  
     */
    AuthFlow: AuthFlowType;
    /**
     * The authentication parameters. These are inputs corresponding to the AuthFlow that you are invoking. The required values depend on the value of AuthFlow:   For USER_SRP_AUTH: USERNAME (required), SRP_A (required), SECRET_HASH (required if the app client is configured with a client secret), DEVICE_KEY    For REFRESH_TOKEN_AUTH/REFRESH_TOKEN: USERNAME (required), SECRET_HASH (required if the app client is configured with a client secret), REFRESH_TOKEN (required), DEVICE_KEY    For ADMIN_NO_SRP_AUTH: USERNAME (required), SECRET_HASH (if app client is configured with client secret), PASSWORD (required), DEVICE_KEY    For CUSTOM_AUTH: USERNAME (required), SECRET_HASH (if app client is configured with client secret), DEVICE_KEY   
     */
    AuthParameters?: AuthParametersType;
    /**
     * This is a random key-value pair map which can contain any key and will be passed to your PreAuthentication Lambda trigger as-is. It can be used to implement additional validations around authentication.
     */
    ClientMetadata?: ClientMetadataType;
  }
  export interface AdminInitiateAuthResponse {
    /**
     * The name of the challenge which you are responding to with this call. This is returned to you in the AdminInitiateAuth response if you need to pass another challenge.    SMS_MFA: Next challenge is to supply an SMS_MFA_CODE, delivered via SMS.    PASSWORD_VERIFIER: Next challenge is to supply PASSWORD_CLAIM_SIGNATURE, PASSWORD_CLAIM_SECRET_BLOCK, and TIMESTAMP after the client-side SRP calculations.    CUSTOM_CHALLENGE: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued.    DEVICE_SRP_AUTH: If device tracking was enabled on your user pool and the previous challenges were passed, this challenge is returned so that Amazon Cognito can start tracking this device.    DEVICE_PASSWORD_VERIFIER: Similar to PASSWORD_VERIFIER, but for devices only.    ADMIN_NO_SRP_AUTH: This is returned if you need to authenticate with USERNAME and PASSWORD directly. An app client must be enabled to use this flow.    NEW_PASSWORD_REQUIRED: For users which are required to change their passwords after successful first login. This challenge should be passed with NEW_PASSWORD and any other required attributes.  
     */
    ChallengeName?: ChallengeNameType;
    /**
     * The session which should be passed both ways in challenge-response calls to the service. If AdminInitiateAuth or AdminRespondToAuthChallenge API call determines that the caller needs to go through another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next AdminRespondToAuthChallenge API call.
     */
    Session?: SessionType;
    /**
     * The challenge parameters. These are returned to you in the AdminInitiateAuth response if you need to pass another challenge. The responses in this parameter should be used to compute inputs to the next call (AdminRespondToAuthChallenge). All challenges require USERNAME and SECRET_HASH (if applicable). The value of the USER_IF_FOR_SRP attribute will be the user's actual username, not an alias (such as email address or phone number), even if you specified an alias in your call to AdminInitiateAuth. This is because, in the AdminRespondToAuthChallenge API ChallengeResponses, the USERNAME attribute cannot be an alias.
     */
    ChallengeParameters?: ChallengeParametersType;
    /**
     * The result of the authentication response. This is only returned if the caller does not need to pass another challenge. If the caller does need to pass another challenge before it gets tokens, ChallengeName, ChallengeParameters, and Session are returned.
     */
    AuthenticationResult?: AuthenticationResultType;
  }
  export interface AdminLinkProviderForUserRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: StringType;
    /**
     * The existing user in the user pool to be linked to the external identity provider user account. Can be a native (Username + Password) Cognito User Pools user or a federated user (for example, a SAML or Facebook user). If the user doesn't exist, an exception is thrown. This is the user that is returned when the new user (with the linked identity provider attribute) signs in. The ProviderAttributeValue for the DestinationUser must match the username for the user in the user pool. The ProviderAttributeName will always be ignored.
     */
    DestinationUser: ProviderUserIdentifierType;
    /**
     * An external identity provider account for a user who does not currently exist yet in the user pool. This user must be a federated user (for example, a SAML or Facebook user), not another native user. If the SourceUser is a federated social identity provider user (Facebook, Google, or Login with Amazon), you must set the ProviderAttributeName to Cognito_Subject. For social identity providers, the ProviderName will be Facebook, Google, or LoginWithAmazon, and Cognito will automatically parse the Facebook, Google, and Login with Amazon tokens for id, sub, and user_id, respectively. The ProviderAttributeValue for the user must be the same value as the id, sub, or user_id value found in the social identity provider token.  For SAML, the ProviderAttributeName can be any value that matches a claim in the SAML assertion. If you wish to link SAML users based on the subject of the SAML assertion, you should map the subject to a claim through the SAML identity provider and submit that claim name as the ProviderAttributeName. If you set ProviderAttributeName to Cognito_Subject, Cognito will automatically parse the default unique identifier found in the subject from the SAML token.
     */
    SourceUser: ProviderUserIdentifierType;
  }
  export interface AdminLinkProviderForUserResponse {
  }
  export interface AdminListDevicesRequest {
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name.
     */
    Username: UsernameType;
    /**
     * The limit of the devices request.
     */
    Limit?: QueryLimitType;
    /**
     * The pagination token.
     */
    PaginationToken?: SearchPaginationTokenType;
  }
  export interface AdminListDevicesResponse {
    /**
     * The devices in the list of devices response.
     */
    Devices?: DeviceListType;
    /**
     * The pagination token.
     */
    PaginationToken?: SearchPaginationTokenType;
  }
  export interface AdminListGroupsForUserRequest {
    /**
     * The username for the user.
     */
    Username: UsernameType;
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The limit of the request to list groups.
     */
    Limit?: QueryLimitType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface AdminListGroupsForUserResponse {
    /**
     * The groups that the user belongs to.
     */
    Groups?: GroupListType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface AdminRemoveUserFromGroupRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The username for the user.
     */
    Username: UsernameType;
    /**
     * The group name.
     */
    GroupName: GroupNameType;
  }
  export interface AdminResetUserPasswordRequest {
    /**
     * The user pool ID for the user pool where you want to reset the user's password.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user whose password you wish to reset.
     */
    Username: UsernameType;
  }
  export interface AdminResetUserPasswordResponse {
  }
  export interface AdminRespondToAuthChallengeRequest {
    /**
     * The ID of the Amazon Cognito user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The app client ID.
     */
    ClientId: ClientIdType;
    /**
     * The challenge name. For more information, see AdminInitiateAuth.
     */
    ChallengeName: ChallengeNameType;
    /**
     * The challenge responses. These are inputs corresponding to the value of ChallengeName, for example:    SMS_MFA: SMS_MFA_CODE, USERNAME, SECRET_HASH (if app client is configured with client secret).    PASSWORD_VERIFIER: PASSWORD_CLAIM_SIGNATURE, PASSWORD_CLAIM_SECRET_BLOCK, TIMESTAMP, USERNAME, SECRET_HASH (if app client is configured with client secret).    ADMIN_NO_SRP_AUTH: PASSWORD, USERNAME, SECRET_HASH (if app client is configured with client secret).     NEW_PASSWORD_REQUIRED: NEW_PASSWORD, any other required attributes, USERNAME, SECRET_HASH (if app client is configured with client secret).    The value of the USERNAME attribute must be the user's actual username, not an alias (such as email address or phone number). To make this easier, the AdminInitiateAuth response includes the actual username value in the USERNAMEUSER_ID_FOR_SRP attribute, even if you specified an alias in your call to AdminInitiateAuth.
     */
    ChallengeResponses?: ChallengeResponsesType;
    /**
     * The session which should be passed both ways in challenge-response calls to the service. If InitiateAuth or RespondToAuthChallenge API call determines that the caller needs to go through another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next RespondToAuthChallenge API call.
     */
    Session?: SessionType;
  }
  export interface AdminRespondToAuthChallengeResponse {
    /**
     * The name of the challenge. For more information, see AdminInitiateAuth.
     */
    ChallengeName?: ChallengeNameType;
    /**
     * The session which should be passed both ways in challenge-response calls to the service. If the InitiateAuth or RespondToAuthChallenge API call determines that the caller needs to go through another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next RespondToAuthChallenge API call.
     */
    Session?: SessionType;
    /**
     * The challenge parameters. For more information, see AdminInitiateAuth.
     */
    ChallengeParameters?: ChallengeParametersType;
    /**
     * The result returned by the server in response to the authentication request.
     */
    AuthenticationResult?: AuthenticationResultType;
  }
  export interface AdminSetUserSettingsRequest {
    /**
     * The user pool ID for the user pool where you want to set the user's settings, such as MFA options.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user for whom you wish to set user settings.
     */
    Username: UsernameType;
    /**
     * Specifies the options for MFA (e.g., email or phone number).
     */
    MFAOptions: MFAOptionListType;
  }
  export interface AdminSetUserSettingsResponse {
  }
  export interface AdminUpdateDeviceStatusRequest {
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name.
     */
    Username: UsernameType;
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
    /**
     * The status indicating whether a device has been remembered or not.
     */
    DeviceRememberedStatus?: DeviceRememberedStatusType;
  }
  export interface AdminUpdateDeviceStatusResponse {
  }
  export interface AdminUpdateUserAttributesRequest {
    /**
     * The user pool ID for the user pool where you want to update user attributes.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user for whom you want to update user attributes.
     */
    Username: UsernameType;
    /**
     * An array of name-value pairs representing user attributes. For custom attributes, you must prepend the custom: prefix to the attribute name.
     */
    UserAttributes: AttributeListType;
  }
  export interface AdminUpdateUserAttributesResponse {
  }
  export interface AdminUserGlobalSignOutRequest {
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name.
     */
    Username: UsernameType;
  }
  export interface AdminUserGlobalSignOutResponse {
  }
  export type AliasAttributeType = "phone_number"|"email"|"preferred_username"|string;
  export type AliasAttributesListType = AliasAttributeType[];
  export type ArnType = string;
  export type AttributeDataType = "String"|"Number"|"DateTime"|"Boolean"|string;
  export type AttributeListType = AttributeType[];
  export type AttributeMappingKeyType = string;
  export type AttributeMappingType = {[key: string]: StringType};
  export type AttributeNameListType = AttributeNameType[];
  export type AttributeNameType = string;
  export interface AttributeType {
    /**
     * The name of the attribute.
     */
    Name: AttributeNameType;
    /**
     * The value of the attribute.
     */
    Value?: AttributeValueType;
  }
  export type AttributeValueType = string;
  export type AuthFlowType = "USER_SRP_AUTH"|"REFRESH_TOKEN_AUTH"|"REFRESH_TOKEN"|"CUSTOM_AUTH"|"ADMIN_NO_SRP_AUTH"|string;
  export type AuthParametersType = {[key: string]: StringType};
  export interface AuthenticationResultType {
    /**
     * The access token of the authentication result.
     */
    AccessToken?: TokenModelType;
    /**
     * The expiration period of the authentication result.
     */
    ExpiresIn?: IntegerType;
    /**
     * The token type of the authentication result.
     */
    TokenType?: StringType;
    /**
     * The refresh token of the authentication result.
     */
    RefreshToken?: TokenModelType;
    /**
     * The ID token of the authentication result.
     */
    IdToken?: TokenModelType;
    /**
     * The new device metadata from an authentication result.
     */
    NewDeviceMetadata?: NewDeviceMetadataType;
  }
  export type BooleanType = boolean;
  export type CSSType = string;
  export type CSSVersionType = string;
  export type CallbackURLsListType = RedirectUrlType[];
  export type ChallengeNameType = "SMS_MFA"|"PASSWORD_VERIFIER"|"CUSTOM_CHALLENGE"|"DEVICE_SRP_AUTH"|"DEVICE_PASSWORD_VERIFIER"|"ADMIN_NO_SRP_AUTH"|"NEW_PASSWORD_REQUIRED"|string;
  export type ChallengeParametersType = {[key: string]: StringType};
  export type ChallengeResponsesType = {[key: string]: StringType};
  export interface ChangePasswordRequest {
    /**
     * The old password in the change password request.
     */
    PreviousPassword: PasswordType;
    /**
     * The new password in the change password request.
     */
    ProposedPassword: PasswordType;
    /**
     * The access token in the change password request.
     */
    AccessToken: TokenModelType;
  }
  export interface ChangePasswordResponse {
  }
  export type ClientIdType = string;
  export type ClientMetadataType = {[key: string]: StringType};
  export type ClientNameType = string;
  export type ClientPermissionListType = ClientPermissionType[];
  export type ClientPermissionType = string;
  export type ClientSecretType = string;
  export type CodeDeliveryDetailsListType = CodeDeliveryDetailsType[];
  export interface CodeDeliveryDetailsType {
    /**
     * The destination for the code delivery details.
     */
    Destination?: StringType;
    /**
     * The delivery medium (email message or phone number).
     */
    DeliveryMedium?: DeliveryMediumType;
    /**
     * The name of the attribute in the code delivery details type.
     */
    AttributeName?: AttributeNameType;
  }
  export type CompletionMessageType = string;
  export interface ConfirmDeviceRequest {
    /**
     * The access token.
     */
    AccessToken: TokenModelType;
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
    /**
     * The configuration of the device secret verifier.
     */
    DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;
    /**
     * The device name.
     */
    DeviceName?: DeviceNameType;
  }
  export interface ConfirmDeviceResponse {
    /**
     * Indicates whether the user confirmation is necessary to confirm the device response.
     */
    UserConfirmationNecessary?: BooleanType;
  }
  export interface ConfirmForgotPasswordRequest {
    /**
     * The app client ID of the app associated with the user pool.
     */
    ClientId: ClientIdType;
    /**
     * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.
     */
    SecretHash?: SecretHashType;
    /**
     * The user name of the user for whom you want to enter a code to retrieve a forgotten password.
     */
    Username: UsernameType;
    /**
     * The confirmation code sent by a user's request to retrieve a forgotten password. For more information, see ForgotPassword 
     */
    ConfirmationCode: ConfirmationCodeType;
    /**
     * The password sent by a user's request to retrieve a forgotten password.
     */
    Password: PasswordType;
  }
  export interface ConfirmForgotPasswordResponse {
  }
  export interface ConfirmSignUpRequest {
    /**
     * The ID of the app client associated with the user pool.
     */
    ClientId: ClientIdType;
    /**
     * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.
     */
    SecretHash?: SecretHashType;
    /**
     * The user name of the user whose registration you wish to confirm.
     */
    Username: UsernameType;
    /**
     * The confirmation code sent by a user's request to confirm registration.
     */
    ConfirmationCode: ConfirmationCodeType;
    /**
     * Boolean to be specified to force user confirmation irrespective of existing alias. By default set to False. If this parameter is set to True and the phone number/email used for sign up confirmation already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user being confirmed. If set to False, the API will throw an AliasExistsException error.
     */
    ForceAliasCreation?: ForceAliasCreation;
  }
  export interface ConfirmSignUpResponse {
  }
  export type ConfirmationCodeType = string;
  export interface CreateGroupRequest {
    /**
     * The name of the group. Must be unique.
     */
    GroupName: GroupNameType;
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * A string containing the description of the group.
     */
    Description?: DescriptionType;
    /**
     * The role ARN for the group.
     */
    RoleArn?: ArnType;
    /**
     * A nonnegative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. Zero is the highest precedence value. Groups with lower Precedence values take precedence over groups with higher or null Precedence values. If a user belongs to two or more groups, it is the group with the lowest precedence value whose role ARN will be used in the cognito:roles and cognito:preferred_role claims in the user's tokens. Two groups can have the same Precedence value. If this happens, neither group takes precedence over the other. If two groups with the same Precedence have the same role ARN, that role is used in the cognito:preferred_role claim in tokens for users in each group. If the two groups have different role ARNs, the cognito:preferred_role claim is not set in users' tokens. The default Precedence value is null.
     */
    Precedence?: PrecedenceType;
  }
  export interface CreateGroupResponse {
    /**
     * The group object for the group.
     */
    Group?: GroupType;
  }
  export interface CreateIdentityProviderRequest {
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The identity provider name.
     */
    ProviderName: ProviderNameTypeV1;
    /**
     * The identity provider type.
     */
    ProviderType: IdentityProviderTypeType;
    /**
     * The identity provider details, such as MetadataURL and MetadataFile.
     */
    ProviderDetails: ProviderDetailsType;
    /**
     * A mapping of identity provider attributes to standard and custom user pool attributes.
     */
    AttributeMapping?: AttributeMappingType;
    /**
     * A list of identity provider identifiers.
     */
    IdpIdentifiers?: IdpIdentifiersListType;
  }
  export interface CreateIdentityProviderResponse {
    /**
     * The newly created identity provider object.
     */
    IdentityProvider: IdentityProviderType;
  }
  export interface CreateResourceServerRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * A unique resource server identifier for the resource server. This could be an HTTPS endpoint where the resource server is located. For example, https://my-weather-api.example.com.
     */
    Identifier: ResourceServerIdentifierType;
    /**
     * A friendly name for the resource server.
     */
    Name: ResourceServerNameType;
    /**
     * A list of scopes. Each scope is map, where the keys are name and description.
     */
    Scopes?: ResourceServerScopeListType;
  }
  export interface CreateResourceServerResponse {
    /**
     * The newly created resource server.
     */
    ResourceServer: ResourceServerType;
  }
  export interface CreateUserImportJobRequest {
    /**
     * The job name for the user import job.
     */
    JobName: UserImportJobNameType;
    /**
     * The user pool ID for the user pool that the users are being imported into.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The role ARN for the Amazon CloudWatch Logging role for the user import job.
     */
    CloudWatchLogsRoleArn: ArnType;
  }
  export interface CreateUserImportJobResponse {
    /**
     * The job object that represents the user import job.
     */
    UserImportJob?: UserImportJobType;
  }
  export interface CreateUserPoolClientRequest {
    /**
     * The user pool ID for the user pool where you want to create a user pool client.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The client name for the user pool client you would like to create.
     */
    ClientName: ClientNameType;
    /**
     * Boolean to specify whether you want to generate a secret for the user pool client being created.
     */
    GenerateSecret?: GenerateSecret;
    /**
     * The time limit, in days, after which the refresh token is no longer valid and cannot be used.
     */
    RefreshTokenValidity?: RefreshTokenValidityType;
    /**
     * The read attributes.
     */
    ReadAttributes?: ClientPermissionListType;
    /**
     * The write attributes.
     */
    WriteAttributes?: ClientPermissionListType;
    /**
     * The explicit authentication flows.
     */
    ExplicitAuthFlows?: ExplicitAuthFlowsListType;
    /**
     * A list of provider names for the identity providers that are supported on this client.
     */
    SupportedIdentityProviders?: SupportedIdentityProvidersListType;
    /**
     * A list of allowed callback URLs for the identity providers.
     */
    CallbackURLs?: CallbackURLsListType;
    /**
     * A list of allowed logout URLs for the identity providers.
     */
    LogoutURLs?: LogoutURLsListType;
    /**
     * The default redirect URI. Must be in the CallbackURLs list.
     */
    DefaultRedirectURI?: RedirectUrlType;
    /**
     * Set to code to initiate a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the token endpoint. Set to token to specify that the client should get the access token (and, optionally, ID token, based on scopes) directly.
     */
    AllowedOAuthFlows?: OAuthFlowsType;
    /**
     * A list of allowed OAuth scopes. Currently supported values are "phone", "email", "openid", and "Cognito".
     */
    AllowedOAuthScopes?: ScopeListType;
    /**
     * Set to True if the client is allowed to follow the OAuth protocol when interacting with Cognito user pools.
     */
    AllowedOAuthFlowsUserPoolClient?: BooleanType;
  }
  export interface CreateUserPoolClientResponse {
    /**
     * The user pool client that was just created.
     */
    UserPoolClient?: UserPoolClientType;
  }
  export interface CreateUserPoolDomainRequest {
    /**
     * The domain string.
     */
    Domain: DomainType;
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
  }
  export interface CreateUserPoolDomainResponse {
  }
  export interface CreateUserPoolRequest {
    /**
     * A string used to name the user pool.
     */
    PoolName: UserPoolNameType;
    /**
     * The policies associated with the new user pool.
     */
    Policies?: UserPoolPolicyType;
    /**
     * The Lambda trigger configuration information for the new user pool.
     */
    LambdaConfig?: LambdaConfigType;
    /**
     * The attributes to be auto-verified. Possible values: email, phone_number.
     */
    AutoVerifiedAttributes?: VerifiedAttributesListType;
    /**
     * Attributes supported as an alias for this user pool. Possible values: phone_number, email, or preferred_username.
     */
    AliasAttributes?: AliasAttributesListType;
    /**
     * Specifies whether email addresses or phone numbers can be specified as usernames when a user signs up.
     */
    UsernameAttributes?: UsernameAttributesListType;
    /**
     * A string representing the SMS verification message.
     */
    SmsVerificationMessage?: SmsVerificationMessageType;
    /**
     * A string representing the email verification message.
     */
    EmailVerificationMessage?: EmailVerificationMessageType;
    /**
     * A string representing the email verification subject.
     */
    EmailVerificationSubject?: EmailVerificationSubjectType;
    /**
     * The template for the verification message that the user sees when the app requests permission to access the user's information.
     */
    VerificationMessageTemplate?: VerificationMessageTemplateType;
    /**
     * A string representing the SMS authentication message.
     */
    SmsAuthenticationMessage?: SmsVerificationMessageType;
    /**
     * Specifies MFA configuration details.
     */
    MfaConfiguration?: UserPoolMfaType;
    /**
     * The device configuration.
     */
    DeviceConfiguration?: DeviceConfigurationType;
    /**
     * The email configuration.
     */
    EmailConfiguration?: EmailConfigurationType;
    /**
     * The SMS configuration.
     */
    SmsConfiguration?: SmsConfigurationType;
    /**
     * The cost allocation tags for the user pool. For more information, see Adding Cost Allocation Tags to Your User Pool 
     */
    UserPoolTags?: UserPoolTagsType;
    /**
     * The configuration for AdminCreateUser requests.
     */
    AdminCreateUserConfig?: AdminCreateUserConfigType;
    /**
     * An array of schema attributes for the new user pool. These attributes can be standard or custom attributes.
     */
    Schema?: SchemaAttributesListType;
  }
  export interface CreateUserPoolResponse {
    /**
     * A container for the user pool details.
     */
    UserPool?: UserPoolType;
  }
  export type CustomAttributeNameType = string;
  export type CustomAttributesListType = SchemaAttributeType[];
  export type DateType = Date;
  export type DefaultEmailOptionType = "CONFIRM_WITH_LINK"|"CONFIRM_WITH_CODE"|string;
  export interface DeleteGroupRequest {
    /**
     * The name of the group.
     */
    GroupName: GroupNameType;
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
  }
  export interface DeleteIdentityProviderRequest {
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The identity provider name.
     */
    ProviderName: ProviderNameType;
  }
  export interface DeleteResourceServerRequest {
    /**
     * The user pool ID for the user pool that hosts the resource server.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The identifier for the resource server.
     */
    Identifier: ResourceServerIdentifierType;
  }
  export interface DeleteUserAttributesRequest {
    /**
     * An array of strings representing the user attribute names you wish to delete. For custom attributes, you must prepend the custom: prefix to the attribute name.
     */
    UserAttributeNames: AttributeNameListType;
    /**
     * The access token used in the request to delete user attributes.
     */
    AccessToken: TokenModelType;
  }
  export interface DeleteUserAttributesResponse {
  }
  export interface DeleteUserPoolClientRequest {
    /**
     * The user pool ID for the user pool where you want to delete the client.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The app client ID of the app associated with the user pool.
     */
    ClientId: ClientIdType;
  }
  export interface DeleteUserPoolDomainRequest {
    /**
     * The domain string.
     */
    Domain: DomainType;
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
  }
  export interface DeleteUserPoolDomainResponse {
  }
  export interface DeleteUserPoolRequest {
    /**
     * The user pool ID for the user pool you want to delete.
     */
    UserPoolId: UserPoolIdType;
  }
  export interface DeleteUserRequest {
    /**
     * The access token from a request to delete a user.
     */
    AccessToken: TokenModelType;
  }
  export type DeliveryMediumListType = DeliveryMediumType[];
  export type DeliveryMediumType = "SMS"|"EMAIL"|string;
  export interface DescribeIdentityProviderRequest {
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The identity provider name.
     */
    ProviderName: ProviderNameType;
  }
  export interface DescribeIdentityProviderResponse {
    /**
     * The identity provider that was deleted.
     */
    IdentityProvider: IdentityProviderType;
  }
  export interface DescribeResourceServerRequest {
    /**
     * The user pool ID for the user pool that hosts the resource server.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The identifier for the resource server
     */
    Identifier: ResourceServerIdentifierType;
  }
  export interface DescribeResourceServerResponse {
    /**
     * The resource server.
     */
    ResourceServer: ResourceServerType;
  }
  export interface DescribeUserImportJobRequest {
    /**
     * The user pool ID for the user pool that the users are being imported into.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The job ID for the user import job.
     */
    JobId: UserImportJobIdType;
  }
  export interface DescribeUserImportJobResponse {
    /**
     * The job object that represents the user import job.
     */
    UserImportJob?: UserImportJobType;
  }
  export interface DescribeUserPoolClientRequest {
    /**
     * The user pool ID for the user pool you want to describe.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The app client ID of the app associated with the user pool.
     */
    ClientId: ClientIdType;
  }
  export interface DescribeUserPoolClientResponse {
    /**
     * The user pool client from a server response to describe the user pool client.
     */
    UserPoolClient?: UserPoolClientType;
  }
  export interface DescribeUserPoolDomainRequest {
    /**
     * The domain string.
     */
    Domain: DomainType;
  }
  export interface DescribeUserPoolDomainResponse {
    /**
     * A domain description object containing information about the domain.
     */
    DomainDescription?: DomainDescriptionType;
  }
  export interface DescribeUserPoolRequest {
    /**
     * The user pool ID for the user pool you want to describe.
     */
    UserPoolId: UserPoolIdType;
  }
  export interface DescribeUserPoolResponse {
    /**
     * The container of metadata returned by the server to describe the pool.
     */
    UserPool?: UserPoolType;
  }
  export type DescriptionType = string;
  export interface DeviceConfigurationType {
    /**
     * Indicates whether a challenge is required on a new device. Only applicable to a new device.
     */
    ChallengeRequiredOnNewDevice?: BooleanType;
    /**
     * If true, a device is only remembered on user prompt.
     */
    DeviceOnlyRememberedOnUserPrompt?: BooleanType;
  }
  export type DeviceKeyType = string;
  export type DeviceListType = DeviceType[];
  export type DeviceNameType = string;
  export type DeviceRememberedStatusType = "remembered"|"not_remembered"|string;
  export interface DeviceSecretVerifierConfigType {
    /**
     * The password verifier.
     */
    PasswordVerifier?: StringType;
    /**
     * The salt.
     */
    Salt?: StringType;
  }
  export interface DeviceType {
    /**
     * The device key.
     */
    DeviceKey?: DeviceKeyType;
    /**
     * The device attributes.
     */
    DeviceAttributes?: AttributeListType;
    /**
     * The creation date of the device.
     */
    DeviceCreateDate?: DateType;
    /**
     * The last modified date of the device.
     */
    DeviceLastModifiedDate?: DateType;
    /**
     * The date in which the device was last authenticated.
     */
    DeviceLastAuthenticatedDate?: DateType;
  }
  export interface DomainDescriptionType {
    /**
     * The user pool ID.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * The AWS account ID for the user pool owner.
     */
    AWSAccountId?: AWSAccountIdType;
    /**
     * The domain string.
     */
    Domain?: DomainType;
    /**
     * The S3 bucket where the static files for this domain are stored.
     */
    S3Bucket?: S3BucketType;
    /**
     * The ARN of the CloudFront distribution.
     */
    CloudFrontDistribution?: ArnType;
    /**
     * The app version.
     */
    Version?: DomainVersionType;
    /**
     * The domain status.
     */
    Status?: DomainStatusType;
  }
  export type DomainStatusType = "CREATING"|"DELETING"|"UPDATING"|"ACTIVE"|"FAILED"|string;
  export type DomainType = string;
  export type DomainVersionType = string;
  export type EmailAddressType = string;
  export interface EmailConfigurationType {
    /**
     * The Amazon Resource Name (ARN) of the email source.
     */
    SourceArn?: ArnType;
    /**
     * The REPLY-TO email address.
     */
    ReplyToEmailAddress?: EmailAddressType;
  }
  export type EmailVerificationMessageByLinkType = string;
  export type EmailVerificationMessageType = string;
  export type EmailVerificationSubjectByLinkType = string;
  export type EmailVerificationSubjectType = string;
  export type ExplicitAuthFlowsListType = ExplicitAuthFlowsType[];
  export type ExplicitAuthFlowsType = "ADMIN_NO_SRP_AUTH"|"CUSTOM_AUTH_FLOW_ONLY"|string;
  export type ForceAliasCreation = boolean;
  export interface ForgetDeviceRequest {
    /**
     * The access token for the forgotten device request.
     */
    AccessToken?: TokenModelType;
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
  }
  export interface ForgotPasswordRequest {
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId: ClientIdType;
    /**
     * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.
     */
    SecretHash?: SecretHashType;
    /**
     * The user name of the user for whom you want to enter a code to reset a forgotten password.
     */
    Username: UsernameType;
  }
  export interface ForgotPasswordResponse {
    /**
     * The code delivery details returned by the server in response to the request to reset a password.
     */
    CodeDeliveryDetails?: CodeDeliveryDetailsType;
  }
  export type GenerateSecret = boolean;
  export interface GetCSVHeaderRequest {
    /**
     * The user pool ID for the user pool that the users are to be imported into.
     */
    UserPoolId: UserPoolIdType;
  }
  export interface GetCSVHeaderResponse {
    /**
     * The user pool ID for the user pool that the users are to be imported into.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * The header information for the .csv file for the user import job.
     */
    CSVHeader?: ListOfStringTypes;
  }
  export interface GetDeviceRequest {
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
    /**
     * The access token.
     */
    AccessToken?: TokenModelType;
  }
  export interface GetDeviceResponse {
    /**
     * The device.
     */
    Device: DeviceType;
  }
  export interface GetGroupRequest {
    /**
     * The name of the group.
     */
    GroupName: GroupNameType;
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
  }
  export interface GetGroupResponse {
    /**
     * The group object for the group.
     */
    Group?: GroupType;
  }
  export interface GetIdentityProviderByIdentifierRequest {
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The identity provider ID.
     */
    IdpIdentifier: IdpIdentifierType;
  }
  export interface GetIdentityProviderByIdentifierResponse {
    /**
     * The identity provider object.
     */
    IdentityProvider: IdentityProviderType;
  }
  export interface GetUICustomizationRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The client ID for the client app.
     */
    ClientId?: ClientIdType;
  }
  export interface GetUICustomizationResponse {
    /**
     * The UI customization information.
     */
    UICustomization: UICustomizationType;
  }
  export interface GetUserAttributeVerificationCodeRequest {
    /**
     * The access token returned by the server response to get the user attribute verification code.
     */
    AccessToken: TokenModelType;
    /**
     * The attribute name returned by the server response to get the user attribute verification code.
     */
    AttributeName: AttributeNameType;
  }
  export interface GetUserAttributeVerificationCodeResponse {
    /**
     * The code delivery details returned by the server in response to the request to get the user attribute verification code.
     */
    CodeDeliveryDetails?: CodeDeliveryDetailsType;
  }
  export interface GetUserRequest {
    /**
     * The access token returned by the server response to get information about the user.
     */
    AccessToken: TokenModelType;
  }
  export interface GetUserResponse {
    /**
     * The user name of the user you wish to retrieve from the get user request.
     */
    Username: UsernameType;
    /**
     * An array of name-value pairs representing user attributes. For custom attributes, you must prepend the custom: prefix to the attribute name.
     */
    UserAttributes: AttributeListType;
    /**
     * Specifies the options for MFA (e.g., email or phone number).
     */
    MFAOptions?: MFAOptionListType;
  }
  export interface GlobalSignOutRequest {
    /**
     * The access token.
     */
    AccessToken: TokenModelType;
  }
  export interface GlobalSignOutResponse {
  }
  export type GroupListType = GroupType[];
  export type GroupNameType = string;
  export interface GroupType {
    /**
     * The name of the group.
     */
    GroupName?: GroupNameType;
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * A string containing the description of the group.
     */
    Description?: DescriptionType;
    /**
     * The role ARN for the group.
     */
    RoleArn?: ArnType;
    /**
     * A nonnegative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. If a user belongs to two or more groups, it is the group with the highest precedence whose role ARN will be used in the cognito:roles and cognito:preferred_role claims in the user's tokens. Groups with higher Precedence values take precedence over groups with lower Precedence values or with null Precedence values. Two groups can have the same Precedence value. If this happens, neither group takes precedence over the other. If two groups with the same Precedence have the same role ARN, that role is used in the cognito:preferred_role claim in tokens for users in each group. If the two groups have different role ARNs, the cognito:preferred_role claim is not set in users' tokens. The default Precedence value is null.
     */
    Precedence?: PrecedenceType;
    /**
     * The date the group was last modified.
     */
    LastModifiedDate?: DateType;
    /**
     * The date the group was created.
     */
    CreationDate?: DateType;
  }
  export interface IdentityProviderType {
    /**
     * The user pool ID.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * The identity provider name.
     */
    ProviderName?: ProviderNameType;
    /**
     * The identity provider type.
     */
    ProviderType?: IdentityProviderTypeType;
    /**
     * The identity provider details, such as MetadataURL and MetadataFile.
     */
    ProviderDetails?: ProviderDetailsType;
    /**
     * A mapping of identity provider attributes to standard and custom user pool attributes.
     */
    AttributeMapping?: AttributeMappingType;
    /**
     * A list of identity provider identifiers.
     */
    IdpIdentifiers?: IdpIdentifiersListType;
    /**
     * The date the identity provider was last modified.
     */
    LastModifiedDate?: DateType;
    /**
     * The date the identity provider was created.
     */
    CreationDate?: DateType;
  }
  export type IdentityProviderTypeType = "SAML"|"Facebook"|"Google"|"LoginWithAmazon"|string;
  export type IdpIdentifierType = string;
  export type IdpIdentifiersListType = IdpIdentifierType[];
  export type ImageFileType = Buffer|Uint8Array|Blob|string;
  export type ImageUrlType = string;
  export interface InitiateAuthRequest {
    /**
     * The authentication flow for this call to execute. The API action will depend on this value. For example:     REFRESH_TOKEN_AUTH will take in a valid refresh token and return new tokens.    USER_SRP_AUTH will take in USERNAME and SRP_A and return the SRP variables to be used for next challenge execution.   Valid values include:    USER_SRP_AUTH: Authentication flow for the Secure Remote Password (SRP) protocol.    REFRESH_TOKEN_AUTH/REFRESH_TOKEN: Authentication flow for refreshing the access token and ID token by supplying a valid refresh token.    CUSTOM_AUTH: Custom authentication flow.    ADMIN_NO_SRP_AUTH is not a valid value.
     */
    AuthFlow: AuthFlowType;
    /**
     * The authentication parameters. These are inputs corresponding to the AuthFlow that you are invoking. The required values depend on the value of AuthFlow:   For USER_SRP_AUTH: USERNAME (required), SRP_A (required), SECRET_HASH (required if the app client is configured with a client secret), DEVICE_KEY    For REFRESH_TOKEN_AUTH/REFRESH_TOKEN: USERNAME (required), SECRET_HASH (required if the app client is configured with a client secret), REFRESH_TOKEN (required), DEVICE_KEY    For CUSTOM_AUTH: USERNAME (required), SECRET_HASH (if app client is configured with client secret), DEVICE_KEY   
     */
    AuthParameters?: AuthParametersType;
    /**
     * This is a random key-value pair map which can contain any key and will be passed to your PreAuthentication Lambda trigger as-is. It can be used to implement additional validations around authentication.
     */
    ClientMetadata?: ClientMetadataType;
    /**
     * The app client ID.
     */
    ClientId: ClientIdType;
  }
  export interface InitiateAuthResponse {
    /**
     * The name of the challenge which you are responding to with this call. This is returned to you in the AdminInitiateAuth response if you need to pass another challenge. Valid values include the following. Note that all of these challenges require USERNAME and SECRET_HASH (if applicable) in the parameters.    SMS_MFA: Next challenge is to supply an SMS_MFA_CODE, delivered via SMS.    PASSWORD_VERIFIER: Next challenge is to supply PASSWORD_CLAIM_SIGNATURE, PASSWORD_CLAIM_SECRET_BLOCK, and TIMESTAMP after the client-side SRP calculations.    CUSTOM_CHALLENGE: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued.    DEVICE_SRP_AUTH: If device tracking was enabled on your user pool and the previous challenges were passed, this challenge is returned so that Amazon Cognito can start tracking this device.    DEVICE_PASSWORD_VERIFIER: Similar to PASSWORD_VERIFIER, but for devices only.    NEW_PASSWORD_REQUIRED: For users which are required to change their passwords after successful first login. This challenge should be passed with NEW_PASSWORD and any other required attributes.  
     */
    ChallengeName?: ChallengeNameType;
    /**
     * The session which should be passed both ways in challenge-response calls to the service. If the InitiateAuth or RespondToAuthChallenge API call determines that the caller needs to go through another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next RespondToAuthChallenge API call.
     */
    Session?: SessionType;
    /**
     * The challenge parameters. These are returned to you in the InitiateAuth response if you need to pass another challenge. The responses in this parameter should be used to compute inputs to the next call (RespondToAuthChallenge).  All challenges require USERNAME and SECRET_HASH (if applicable).
     */
    ChallengeParameters?: ChallengeParametersType;
    /**
     * The result of the authentication response. This is only returned if the caller does not need to pass another challenge. If the caller does need to pass another challenge before it gets tokens, ChallengeName, ChallengeParameters, and Session are returned.
     */
    AuthenticationResult?: AuthenticationResultType;
  }
  export type IntegerType = number;
  export interface LambdaConfigType {
    /**
     * A pre-registration AWS Lambda trigger.
     */
    PreSignUp?: ArnType;
    /**
     * A custom Message AWS Lambda trigger.
     */
    CustomMessage?: ArnType;
    /**
     * A post-confirmation AWS Lambda trigger.
     */
    PostConfirmation?: ArnType;
    /**
     * A pre-authentication AWS Lambda trigger.
     */
    PreAuthentication?: ArnType;
    /**
     * A post-authentication AWS Lambda trigger.
     */
    PostAuthentication?: ArnType;
    /**
     * Defines the authentication challenge.
     */
    DefineAuthChallenge?: ArnType;
    /**
     * Creates an authentication challenge.
     */
    CreateAuthChallenge?: ArnType;
    /**
     * Verifies the authentication challenge response.
     */
    VerifyAuthChallengeResponse?: ArnType;
  }
  export interface ListDevicesRequest {
    /**
     * The access tokens for the request to list devices.
     */
    AccessToken: TokenModelType;
    /**
     * The limit of the device request.
     */
    Limit?: QueryLimitType;
    /**
     * The pagination token for the list request.
     */
    PaginationToken?: SearchPaginationTokenType;
  }
  export interface ListDevicesResponse {
    /**
     * The devices returned in the list devices response.
     */
    Devices?: DeviceListType;
    /**
     * The pagination token for the list device response.
     */
    PaginationToken?: SearchPaginationTokenType;
  }
  export interface ListGroupsRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The limit of the request to list groups.
     */
    Limit?: QueryLimitType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface ListGroupsResponse {
    /**
     * The group objects for the groups.
     */
    Groups?: GroupListType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface ListIdentityProvidersRequest {
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The maximum number of identity providers to return.
     */
    MaxResults?: ListProvidersLimitType;
    /**
     * A pagination token.
     */
    NextToken?: PaginationKeyType;
  }
  export interface ListIdentityProvidersResponse {
    /**
     * A list of identity provider objects.
     */
    Providers: ProvidersListType;
    /**
     * A pagination token.
     */
    NextToken?: PaginationKeyType;
  }
  export type ListOfStringTypes = StringType[];
  export type ListProvidersLimitType = number;
  export type ListResourceServersLimitType = number;
  export interface ListResourceServersRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The maximum number of resource servers to return.
     */
    MaxResults?: ListResourceServersLimitType;
    /**
     * A pagination token.
     */
    NextToken?: PaginationKeyType;
  }
  export interface ListResourceServersResponse {
    /**
     * The resource servers.
     */
    ResourceServers: ResourceServersListType;
    /**
     * A pagination token.
     */
    NextToken?: PaginationKeyType;
  }
  export interface ListUserImportJobsRequest {
    /**
     * The user pool ID for the user pool that the users are being imported into.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The maximum number of import jobs you want the request to return.
     */
    MaxResults: PoolQueryLimitType;
    /**
     * An identifier that was returned from the previous call to ListUserImportJobs, which can be used to return the next set of import jobs in the list.
     */
    PaginationToken?: PaginationKeyType;
  }
  export interface ListUserImportJobsResponse {
    /**
     * The user import jobs.
     */
    UserImportJobs?: UserImportJobsListType;
    /**
     * An identifier that can be used to return the next set of user import jobs in the list.
     */
    PaginationToken?: PaginationKeyType;
  }
  export interface ListUserPoolClientsRequest {
    /**
     * The user pool ID for the user pool where you want to list user pool clients.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The maximum number of results you want the request to return when listing the user pool clients.
     */
    MaxResults?: QueryLimit;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface ListUserPoolClientsResponse {
    /**
     * The user pool clients in the response that lists user pool clients.
     */
    UserPoolClients?: UserPoolClientListType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface ListUserPoolsRequest {
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKeyType;
    /**
     * The maximum number of results you want the request to return when listing the user pools.
     */
    MaxResults: PoolQueryLimitType;
  }
  export interface ListUserPoolsResponse {
    /**
     * The user pools from the response to list users.
     */
    UserPools?: UserPoolListType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKeyType;
  }
  export interface ListUsersInGroupRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The name of the group.
     */
    GroupName: GroupNameType;
    /**
     * The limit of the request to list users.
     */
    Limit?: QueryLimitType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface ListUsersInGroupResponse {
    /**
     * The users returned in the request to list users.
     */
    Users?: UsersListType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface ListUsersRequest {
    /**
     * The user pool ID for the user pool on which the search should be performed.
     */
    UserPoolId: UserPoolIdType;
    /**
     * An array of strings, where each string is the name of a user attribute to be returned for each user in the search results. If the array is empty, all attributes are returned.
     */
    AttributesToGet?: SearchedAttributeNamesListType;
    /**
     * Maximum number of users to be returned.
     */
    Limit?: QueryLimitType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    PaginationToken?: SearchPaginationTokenType;
    /**
     * A filter string of the form "AttributeName Filter-Type "AttributeValue"". Quotation marks within the filter string must be escaped using the backslash (\) character. For example, "family_name = \"Reddy\"".    AttributeName: The name of the attribute to search for. You can only search for one attribute at a time.    Filter-Type: For an exact match, use =, for example, "given_name = \"Jon\"". For a prefix ("starts with") match, use ^=, for example, "given_name ^= \"Jon\"".     AttributeValue: The attribute value that must be matched for each user.   If the filter string is empty, ListUsers returns all users in the user pool. You can only search for the following standard attributes:    username (case-sensitive)    email     phone_number     name     given_name     family_name     preferred_username     cognito:user_status (called Enabled in the Console) (case-sensitive)    status (case-insensitive)   Custom attributes are not searchable. For more information, see Searching for Users Using the ListUsers API and Examples of Using the ListUsers API in the Amazon Cognito Developer Guide.
     */
    Filter?: UserFilterType;
  }
  export interface ListUsersResponse {
    /**
     * The users returned in the request to list users.
     */
    Users?: UsersListType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    PaginationToken?: SearchPaginationTokenType;
  }
  export type LogoutURLsListType = RedirectUrlType[];
  export type LongType = number;
  export type MFAOptionListType = MFAOptionType[];
  export interface MFAOptionType {
    /**
     * The delivery medium (email message or SMS message) to send the MFA code.
     */
    DeliveryMedium?: DeliveryMediumType;
    /**
     * The attribute name of the MFA option type.
     */
    AttributeName?: AttributeNameType;
  }
  export type MessageActionType = "RESEND"|"SUPPRESS"|string;
  export interface MessageTemplateType {
    /**
     * The message template for SMS messages.
     */
    SMSMessage?: SmsVerificationMessageType;
    /**
     * The message template for email messages.
     */
    EmailMessage?: EmailVerificationMessageType;
    /**
     * The subject line for email messages.
     */
    EmailSubject?: EmailVerificationSubjectType;
  }
  export type MessageType = string;
  export interface NewDeviceMetadataType {
    /**
     * The device key.
     */
    DeviceKey?: DeviceKeyType;
    /**
     * The device group key.
     */
    DeviceGroupKey?: StringType;
  }
  export interface NumberAttributeConstraintsType {
    /**
     * The minimum value of an attribute that is of the number data type.
     */
    MinValue?: StringType;
    /**
     * The maximum value of an attribute that is of the number data type.
     */
    MaxValue?: StringType;
  }
  export type OAuthFlowType = "code"|"implicit"|"client_credentials"|string;
  export type OAuthFlowsType = OAuthFlowType[];
  export type PaginationKey = string;
  export type PaginationKeyType = string;
  export type PasswordPolicyMinLengthType = number;
  export interface PasswordPolicyType {
    /**
     * The minimum length of the password policy that you have set. Cannot be less than 6.
     */
    MinimumLength?: PasswordPolicyMinLengthType;
    /**
     * In the password policy that you have set, refers to whether you have required users to use at least one uppercase letter in their password.
     */
    RequireUppercase?: BooleanType;
    /**
     * In the password policy that you have set, refers to whether you have required users to use at least one lowercase letter in their password.
     */
    RequireLowercase?: BooleanType;
    /**
     * In the password policy that you have set, refers to whether you have required users to use at least one number in their password.
     */
    RequireNumbers?: BooleanType;
    /**
     * In the password policy that you have set, refers to whether you have required users to use at least one symbol in their password.
     */
    RequireSymbols?: BooleanType;
  }
  export type PasswordType = string;
  export type PoolQueryLimitType = number;
  export type PreSignedUrlType = string;
  export type PrecedenceType = number;
  export interface ProviderDescription {
    /**
     * The identity provider name.
     */
    ProviderName?: ProviderNameType;
    /**
     * The identity provider type.
     */
    ProviderType?: IdentityProviderTypeType;
    /**
     * The date the provider was last modified.
     */
    LastModifiedDate?: DateType;
    /**
     * The date the provider was added to the user pool.
     */
    CreationDate?: DateType;
  }
  export type ProviderDetailsType = {[key: string]: StringType};
  export type ProviderNameType = string;
  export type ProviderNameTypeV1 = string;
  export interface ProviderUserIdentifierType {
    /**
     * The name of the provider, for example, Facebook, Google, or Login with Amazon.
     */
    ProviderName?: ProviderNameType;
    /**
     * The name of the provider attribute to link to, for example, NameID.
     */
    ProviderAttributeName?: StringType;
    /**
     * The value of the provider attribute to link to, for example, xxxxx_account.
     */
    ProviderAttributeValue?: StringType;
  }
  export type ProvidersListType = ProviderDescription[];
  export type QueryLimit = number;
  export type QueryLimitType = number;
  export type RedirectUrlType = string;
  export type RefreshTokenValidityType = number;
  export interface ResendConfirmationCodeRequest {
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId: ClientIdType;
    /**
     * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.
     */
    SecretHash?: SecretHashType;
    /**
     * The user name of the user to whom you wish to resend a confirmation code.
     */
    Username: UsernameType;
  }
  export interface ResendConfirmationCodeResponse {
    /**
     * The code delivery details returned by the server in response to the request to resend the confirmation code.
     */
    CodeDeliveryDetails?: CodeDeliveryDetailsType;
  }
  export type ResourceServerIdentifierType = string;
  export type ResourceServerNameType = string;
  export type ResourceServerScopeDescriptionType = string;
  export type ResourceServerScopeListType = ResourceServerScopeType[];
  export type ResourceServerScopeNameType = string;
  export interface ResourceServerScopeType {
    /**
     * The name of the scope.
     */
    ScopeName: ResourceServerScopeNameType;
    /**
     * A description of the scope.
     */
    ScopeDescription: ResourceServerScopeDescriptionType;
  }
  export interface ResourceServerType {
    /**
     * The user pool ID for the user pool that hosts the resource server.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * The identifier for the resource server.
     */
    Identifier?: ResourceServerIdentifierType;
    /**
     * The name of the resource server.
     */
    Name?: ResourceServerNameType;
    /**
     * A list of scopes that are defined for the resource server.
     */
    Scopes?: ResourceServerScopeListType;
  }
  export type ResourceServersListType = ResourceServerType[];
  export interface RespondToAuthChallengeRequest {
    /**
     * The app client ID.
     */
    ClientId: ClientIdType;
    /**
     * The challenge name. For more information, see InitiateAuth.  ADMIN_NO_SRP_AUTH is not a valid value.
     */
    ChallengeName: ChallengeNameType;
    /**
     * The session which should be passed both ways in challenge-response calls to the service. If InitiateAuth or RespondToAuthChallenge API call determines that the caller needs to go through another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next RespondToAuthChallenge API call.
     */
    Session?: SessionType;
    /**
     * The challenge responses. These are inputs corresponding to the value of ChallengeName, for example:    SMS_MFA: SMS_MFA_CODE, USERNAME, SECRET_HASH (if app client is configured with client secret).    PASSWORD_VERIFIER: PASSWORD_CLAIM_SIGNATURE, PASSWORD_CLAIM_SECRET_BLOCK, TIMESTAMP, USERNAME, SECRET_HASH (if app client is configured with client secret).    NEW_PASSWORD_REQUIRED: NEW_PASSWORD, any other required attributes, USERNAME, SECRET_HASH (if app client is configured with client secret).   
     */
    ChallengeResponses?: ChallengeResponsesType;
  }
  export interface RespondToAuthChallengeResponse {
    /**
     * The challenge name. For more information, see InitiateAuth.
     */
    ChallengeName?: ChallengeNameType;
    /**
     * The session which should be passed both ways in challenge-response calls to the service. If the InitiateAuth or RespondToAuthChallenge API call determines that the caller needs to go through another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next RespondToAuthChallenge API call.
     */
    Session?: SessionType;
    /**
     * The challenge parameters. For more information, see InitiateAuth.
     */
    ChallengeParameters?: ChallengeParametersType;
    /**
     * The result returned by the server in response to the request to respond to the authentication challenge.
     */
    AuthenticationResult?: AuthenticationResultType;
  }
  export type S3BucketType = string;
  export interface SchemaAttributeType {
    /**
     * A schema attribute of the name type.
     */
    Name?: CustomAttributeNameType;
    /**
     * The attribute data type.
     */
    AttributeDataType?: AttributeDataType;
    /**
     * Specifies whether the attribute type is developer only.
     */
    DeveloperOnlyAttribute?: BooleanType;
    /**
     * Specifies whether the attribute can be changed once it has been created.
     */
    Mutable?: BooleanType;
    /**
     * Specifies whether a user pool attribute is required. If the attribute is required and the user does not provide a value, registration or sign-in will fail.
     */
    Required?: BooleanType;
    /**
     * Specifies the constraints for an attribute of the number type.
     */
    NumberAttributeConstraints?: NumberAttributeConstraintsType;
    /**
     * Specifies the constraints for an attribute of the string type.
     */
    StringAttributeConstraints?: StringAttributeConstraintsType;
  }
  export type SchemaAttributesListType = SchemaAttributeType[];
  export type ScopeListType = ScopeType[];
  export type ScopeType = string;
  export type SearchPaginationTokenType = string;
  export type SearchedAttributeNamesListType = AttributeNameType[];
  export type SecretHashType = string;
  export type SessionType = string;
  export interface SetUICustomizationRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The client ID for the client app.
     */
    ClientId?: ClientIdType;
    /**
     * The CSS values in the UI customization.
     */
    CSS?: CSSType;
    /**
     * The uploaded logo image for the UI customization.
     */
    ImageFile?: ImageFileType;
  }
  export interface SetUICustomizationResponse {
    /**
     * The UI customization information.
     */
    UICustomization: UICustomizationType;
  }
  export interface SetUserSettingsRequest {
    /**
     * The access token for the set user settings request.
     */
    AccessToken: TokenModelType;
    /**
     * Specifies the options for MFA (e.g., email or phone number).
     */
    MFAOptions: MFAOptionListType;
  }
  export interface SetUserSettingsResponse {
  }
  export interface SignUpRequest {
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId: ClientIdType;
    /**
     * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.
     */
    SecretHash?: SecretHashType;
    /**
     * The user name of the user you wish to register.
     */
    Username: UsernameType;
    /**
     * The password of the user you wish to register.
     */
    Password: PasswordType;
    /**
     * An array of name-value pairs representing user attributes. For custom attributes, you must prepend the custom: prefix to the attribute name.
     */
    UserAttributes?: AttributeListType;
    /**
     * The validation data in the request to register a user.
     */
    ValidationData?: AttributeListType;
  }
  export interface SignUpResponse {
    /**
     * A response from the server indicating that a user registration has been confirmed.
     */
    UserConfirmed: BooleanType;
    /**
     * The code delivery details returned by the server response to the user registration request.
     */
    CodeDeliveryDetails?: CodeDeliveryDetailsType;
    /**
     * The UUID of the authenticated user. This is not the same as username.
     */
    UserSub: StringType;
  }
  export interface SmsConfigurationType {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) caller.
     */
    SnsCallerArn: ArnType;
    /**
     * The external ID.
     */
    ExternalId?: StringType;
  }
  export type SmsVerificationMessageType = string;
  export interface StartUserImportJobRequest {
    /**
     * The user pool ID for the user pool that the users are being imported into.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The job ID for the user import job.
     */
    JobId: UserImportJobIdType;
  }
  export interface StartUserImportJobResponse {
    /**
     * The job object that represents the user import job.
     */
    UserImportJob?: UserImportJobType;
  }
  export type StatusType = "Enabled"|"Disabled"|string;
  export interface StopUserImportJobRequest {
    /**
     * The user pool ID for the user pool that the users are being imported into.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The job ID for the user import job.
     */
    JobId: UserImportJobIdType;
  }
  export interface StopUserImportJobResponse {
    /**
     * The job object that represents the user import job.
     */
    UserImportJob?: UserImportJobType;
  }
  export interface StringAttributeConstraintsType {
    /**
     * The minimum length of an attribute value of the string type.
     */
    MinLength?: StringType;
    /**
     * The maximum length of an attribute value of the string type.
     */
    MaxLength?: StringType;
  }
  export type StringType = string;
  export type SupportedIdentityProvidersListType = ProviderNameType[];
  export type TokenModelType = string;
  export interface UICustomizationType {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * The client ID for the client app.
     */
    ClientId?: ClientIdType;
    /**
     * The logo image for the UI customization.
     */
    ImageUrl?: ImageUrlType;
    /**
     * The CSS values in the UI customization.
     */
    CSS?: CSSType;
    /**
     * The CSS version number.
     */
    CSSVersion?: CSSVersionType;
    /**
     * The last-modified date for the UI customization.
     */
    LastModifiedDate?: DateType;
    /**
     * The creation date for the UI customization.
     */
    CreationDate?: DateType;
  }
  export interface UpdateDeviceStatusRequest {
    /**
     * The access token.
     */
    AccessToken: TokenModelType;
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
    /**
     * The status of whether a device is remembered.
     */
    DeviceRememberedStatus?: DeviceRememberedStatusType;
  }
  export interface UpdateDeviceStatusResponse {
  }
  export interface UpdateGroupRequest {
    /**
     * The name of the group.
     */
    GroupName: GroupNameType;
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * A string containing the new description of the group.
     */
    Description?: DescriptionType;
    /**
     * The new role ARN for the group. This is used for setting the cognito:roles and cognito:preferred_role claims in the token.
     */
    RoleArn?: ArnType;
    /**
     * The new precedence value for the group. For more information about this parameter, see CreateGroup.
     */
    Precedence?: PrecedenceType;
  }
  export interface UpdateGroupResponse {
    /**
     * The group object for the group.
     */
    Group?: GroupType;
  }
  export interface UpdateIdentityProviderRequest {
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The identity provider name.
     */
    ProviderName: ProviderNameType;
    /**
     * The identity provider details to be updated, such as MetadataURL and MetadataFile.
     */
    ProviderDetails?: ProviderDetailsType;
    /**
     * The identity provider attribute mapping to be changed.
     */
    AttributeMapping?: AttributeMappingType;
    /**
     * A list of identity provider identifiers.
     */
    IdpIdentifiers?: IdpIdentifiersListType;
  }
  export interface UpdateIdentityProviderResponse {
    /**
     * The identity provider object.
     */
    IdentityProvider: IdentityProviderType;
  }
  export interface UpdateResourceServerRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The identifier for the resource server.
     */
    Identifier: ResourceServerIdentifierType;
    /**
     * The name of the resource server.
     */
    Name: ResourceServerNameType;
    /**
     * The scope values to be set for the resource server.
     */
    Scopes?: ResourceServerScopeListType;
  }
  export interface UpdateResourceServerResponse {
    /**
     * The resource server.
     */
    ResourceServer: ResourceServerType;
  }
  export interface UpdateUserAttributesRequest {
    /**
     * An array of name-value pairs representing user attributes. For custom attributes, you must prepend the custom: prefix to the attribute name.
     */
    UserAttributes: AttributeListType;
    /**
     * The access token for the request to update user attributes.
     */
    AccessToken: TokenModelType;
  }
  export interface UpdateUserAttributesResponse {
    /**
     * The code delivery details list from the server for the request to update user attributes.
     */
    CodeDeliveryDetailsList?: CodeDeliveryDetailsListType;
  }
  export interface UpdateUserPoolClientRequest {
    /**
     * The user pool ID for the user pool where you want to update the user pool client.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId: ClientIdType;
    /**
     * The client name from the update user pool client request.
     */
    ClientName?: ClientNameType;
    /**
     * The time limit, in days, after which the refresh token is no longer valid and cannot be used.
     */
    RefreshTokenValidity?: RefreshTokenValidityType;
    /**
     * The read-only attributes of the user pool.
     */
    ReadAttributes?: ClientPermissionListType;
    /**
     * The writeable attributes of the user pool.
     */
    WriteAttributes?: ClientPermissionListType;
    /**
     * Explicit authentication flows.
     */
    ExplicitAuthFlows?: ExplicitAuthFlowsListType;
    /**
     * A list of provider names for the identity providers that are supported on this client.
     */
    SupportedIdentityProviders?: SupportedIdentityProvidersListType;
    /**
     * A list of allowed callback URLs for the identity providers.
     */
    CallbackURLs?: CallbackURLsListType;
    /**
     * A list of allowed logout URLs for the identity providers.
     */
    LogoutURLs?: LogoutURLsListType;
    /**
     * The default redirect URI. Must be in the CallbackURLs list.
     */
    DefaultRedirectURI?: RedirectUrlType;
    /**
     * Set to code to initiate a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the token endpoint. Set to token to specify that the client should get the access token (and, optionally, ID token, based on scopes) directly.
     */
    AllowedOAuthFlows?: OAuthFlowsType;
    /**
     * A list of allowed OAuth scopes. Currently supported values are "phone", "email", "openid", and "Cognito".
     */
    AllowedOAuthScopes?: ScopeListType;
    /**
     * Set to TRUE if the client is allowed to follow the OAuth protocol when interacting with Cognito user pools.
     */
    AllowedOAuthFlowsUserPoolClient?: BooleanType;
  }
  export interface UpdateUserPoolClientResponse {
    /**
     * The user pool client value from the response from the server when an update user pool client request is made.
     */
    UserPoolClient?: UserPoolClientType;
  }
  export interface UpdateUserPoolRequest {
    /**
     * The user pool ID for the user pool you want to update.
     */
    UserPoolId: UserPoolIdType;
    /**
     * A container with the policies you wish to update in a user pool.
     */
    Policies?: UserPoolPolicyType;
    /**
     * The AWS Lambda configuration information from the request to update the user pool.
     */
    LambdaConfig?: LambdaConfigType;
    /**
     * The attributes that are automatically verified when the Amazon Cognito service makes a request to update user pools.
     */
    AutoVerifiedAttributes?: VerifiedAttributesListType;
    /**
     * A container with information about the SMS verification message.
     */
    SmsVerificationMessage?: SmsVerificationMessageType;
    /**
     * The contents of the email verification message.
     */
    EmailVerificationMessage?: EmailVerificationMessageType;
    /**
     * The subject of the email verification message.
     */
    EmailVerificationSubject?: EmailVerificationSubjectType;
    /**
     * The template for verification messages.
     */
    VerificationMessageTemplate?: VerificationMessageTemplateType;
    /**
     * The contents of the SMS authentication message.
     */
    SmsAuthenticationMessage?: SmsVerificationMessageType;
    /**
     * Can be one of the following values:    OFF - MFA tokens are not required and cannot be specified during user registration.    ON - MFA tokens are required for all user registrations. You can only specify required when you are initially creating a user pool.    OPTIONAL - Users have the option when registering to create an MFA token.  
     */
    MfaConfiguration?: UserPoolMfaType;
    /**
     * Device configuration.
     */
    DeviceConfiguration?: DeviceConfigurationType;
    /**
     * Email configuration.
     */
    EmailConfiguration?: EmailConfigurationType;
    /**
     * SMS configuration.
     */
    SmsConfiguration?: SmsConfigurationType;
    /**
     * The cost allocation tags for the user pool. For more information, see Adding Cost Allocation Tags to Your User Pool 
     */
    UserPoolTags?: UserPoolTagsType;
    /**
     * The configuration for AdminCreateUser requests.
     */
    AdminCreateUserConfig?: AdminCreateUserConfigType;
  }
  export interface UpdateUserPoolResponse {
  }
  export type UserFilterType = string;
  export type UserImportJobIdType = string;
  export type UserImportJobNameType = string;
  export type UserImportJobStatusType = "Created"|"Pending"|"InProgress"|"Stopping"|"Expired"|"Stopped"|"Failed"|"Succeeded"|string;
  export interface UserImportJobType {
    /**
     * The job name for the user import job.
     */
    JobName?: UserImportJobNameType;
    /**
     * The job ID for the user import job.
     */
    JobId?: UserImportJobIdType;
    /**
     * The user pool ID for the user pool that the users are being imported into.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * The pre-signed URL to be used to upload the .csv file.
     */
    PreSignedUrl?: PreSignedUrlType;
    /**
     * The date the user import job was created.
     */
    CreationDate?: DateType;
    /**
     * The date when the user import job was started.
     */
    StartDate?: DateType;
    /**
     * The date when the user import job was completed.
     */
    CompletionDate?: DateType;
    /**
     * The status of the user import job. One of the following:    Created - The job was created but not started.    Pending - A transition state. You have started the job, but it has not begun importing users yet.    InProgress - The job has started, and users are being imported.    Stopping - You have stopped the job, but the job has not stopped importing users yet.    Stopped - You have stopped the job, and the job has stopped importing users.    Succeeded - The job has completed successfully.    Failed - The job has stopped due to an error.    Expired - You created a job, but did not start the job within 24-48 hours. All data associated with the job was deleted, and the job cannot be started.  
     */
    Status?: UserImportJobStatusType;
    /**
     * The role ARN for the Amazon CloudWatch Logging role for the user import job. For more information, see "Creating the CloudWatch Logs IAM Role" in the Amazon Cognito Developer Guide.
     */
    CloudWatchLogsRoleArn?: ArnType;
    /**
     * The number of users that were successfully imported.
     */
    ImportedUsers?: LongType;
    /**
     * The number of users that were skipped.
     */
    SkippedUsers?: LongType;
    /**
     * The number of users that could not be imported.
     */
    FailedUsers?: LongType;
    /**
     * The message returned when the user import job is completed.
     */
    CompletionMessage?: CompletionMessageType;
  }
  export type UserImportJobsListType = UserImportJobType[];
  export interface UserPoolClientDescription {
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId?: ClientIdType;
    /**
     * The user pool ID for the user pool where you want to describe the user pool client.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * The client name from the user pool client description.
     */
    ClientName?: ClientNameType;
  }
  export type UserPoolClientListType = UserPoolClientDescription[];
  export interface UserPoolClientType {
    /**
     * The user pool ID for the user pool client.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * The client name from the user pool request of the client type.
     */
    ClientName?: ClientNameType;
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId?: ClientIdType;
    /**
     * The client secret from the user pool request of the client type.
     */
    ClientSecret?: ClientSecretType;
    /**
     * The date the user pool client was last modified.
     */
    LastModifiedDate?: DateType;
    /**
     * The date the user pool client was created.
     */
    CreationDate?: DateType;
    /**
     * The time limit, in days, after which the refresh token is no longer valid and cannot be used.
     */
    RefreshTokenValidity?: RefreshTokenValidityType;
    /**
     * The Read-only attributes.
     */
    ReadAttributes?: ClientPermissionListType;
    /**
     * The writeable attributes.
     */
    WriteAttributes?: ClientPermissionListType;
    /**
     * The explicit authentication flows.
     */
    ExplicitAuthFlows?: ExplicitAuthFlowsListType;
    /**
     * A list of provider names for the identity providers that are supported on this client.
     */
    SupportedIdentityProviders?: SupportedIdentityProvidersListType;
    /**
     * A list of allowed callback URLs for the identity providers.
     */
    CallbackURLs?: CallbackURLsListType;
    /**
     * A list of allowed logout URLs for the identity providers.
     */
    LogoutURLs?: LogoutURLsListType;
    /**
     * The default redirect URI. Must be in the CallbackURLs list.
     */
    DefaultRedirectURI?: RedirectUrlType;
    /**
     * Set to code to initiate a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the token endpoint. Set to token to specify that the client should get the access token (and, optionally, ID token, based on scopes) directly.
     */
    AllowedOAuthFlows?: OAuthFlowsType;
    /**
     * A list of allowed OAuth scopes. Currently supported values are "phone", "email", "openid", and "Cognito".
     */
    AllowedOAuthScopes?: ScopeListType;
    /**
     * Set to TRUE if the client is allowed to follow the OAuth protocol when interacting with Cognito user pools.
     */
    AllowedOAuthFlowsUserPoolClient?: BooleanType;
  }
  export interface UserPoolDescriptionType {
    /**
     * The ID in a user pool description.
     */
    Id?: UserPoolIdType;
    /**
     * The name in a user pool description.
     */
    Name?: UserPoolNameType;
    /**
     * The AWS Lambda configuration information in a user pool description.
     */
    LambdaConfig?: LambdaConfigType;
    /**
     * The user pool status in a user pool description.
     */
    Status?: StatusType;
    /**
     * The date the user pool description was last modified.
     */
    LastModifiedDate?: DateType;
    /**
     * The date the user pool description was created.
     */
    CreationDate?: DateType;
  }
  export type UserPoolIdType = string;
  export type UserPoolListType = UserPoolDescriptionType[];
  export type UserPoolMfaType = "OFF"|"ON"|"OPTIONAL"|string;
  export type UserPoolNameType = string;
  export interface UserPoolPolicyType {
    /**
     * A container for information about the user pool password policy.
     */
    PasswordPolicy?: PasswordPolicyType;
  }
  export type UserPoolTagsType = {[key: string]: StringType};
  export interface UserPoolType {
    /**
     * The ID of the user pool.
     */
    Id?: UserPoolIdType;
    /**
     * The name of the user pool.
     */
    Name?: UserPoolNameType;
    /**
     * A container for the policies associated with a user pool.
     */
    Policies?: UserPoolPolicyType;
    /**
     * A container for the AWS Lambda triggers associated with a user pool.
     */
    LambdaConfig?: LambdaConfigType;
    /**
     * The status of a user pool.
     */
    Status?: StatusType;
    /**
     * The date the user pool was last modified.
     */
    LastModifiedDate?: DateType;
    /**
     * The date the user pool was created.
     */
    CreationDate?: DateType;
    /**
     * A container with the schema attributes of a user pool.
     */
    SchemaAttributes?: SchemaAttributesListType;
    /**
     * Specifies the attributes that are auto-verified in a user pool.
     */
    AutoVerifiedAttributes?: VerifiedAttributesListType;
    /**
     * Specifies the attributes that are aliased in a user pool.
     */
    AliasAttributes?: AliasAttributesListType;
    /**
     * Specifies whether email addresses or phone numbers can be specified as usernames when a user signs up.
     */
    UsernameAttributes?: UsernameAttributesListType;
    /**
     * The contents of the SMS verification message.
     */
    SmsVerificationMessage?: SmsVerificationMessageType;
    /**
     * The contents of the email verification message.
     */
    EmailVerificationMessage?: EmailVerificationMessageType;
    /**
     * The subject of the email verification message.
     */
    EmailVerificationSubject?: EmailVerificationSubjectType;
    /**
     * The template for verification messages.
     */
    VerificationMessageTemplate?: VerificationMessageTemplateType;
    /**
     * The contents of the SMS authentication message.
     */
    SmsAuthenticationMessage?: SmsVerificationMessageType;
    /**
     * Can be one of the following values:    OFF - MFA tokens are not required and cannot be specified during user registration.    ON - MFA tokens are required for all user registrations. You can only specify required when you are initially creating a user pool.    OPTIONAL - Users have the option when registering to create an MFA token.  
     */
    MfaConfiguration?: UserPoolMfaType;
    /**
     * The device configuration.
     */
    DeviceConfiguration?: DeviceConfigurationType;
    /**
     * A number estimating the size of the user pool.
     */
    EstimatedNumberOfUsers?: IntegerType;
    /**
     * The email configuration.
     */
    EmailConfiguration?: EmailConfigurationType;
    /**
     * The SMS configuration.
     */
    SmsConfiguration?: SmsConfigurationType;
    /**
     * The cost allocation tags for the user pool. For more information, see Adding Cost Allocation Tags to Your User Pool 
     */
    UserPoolTags?: UserPoolTagsType;
    /**
     * The reason why the SMS configuration cannot send the messages to your users.
     */
    SmsConfigurationFailure?: StringType;
    /**
     * The reason why the email configuration cannot send the messages to your users.
     */
    EmailConfigurationFailure?: StringType;
    /**
     * The configuration for AdminCreateUser requests.
     */
    AdminCreateUserConfig?: AdminCreateUserConfigType;
  }
  export type UserStatusType = "UNCONFIRMED"|"CONFIRMED"|"ARCHIVED"|"COMPROMISED"|"UNKNOWN"|"RESET_REQUIRED"|"FORCE_CHANGE_PASSWORD"|string;
  export interface UserType {
    /**
     * The user name of the user you wish to describe.
     */
    Username?: UsernameType;
    /**
     * A container with information about the user type attributes.
     */
    Attributes?: AttributeListType;
    /**
     * The creation date of the user.
     */
    UserCreateDate?: DateType;
    /**
     * The last modified date of the user.
     */
    UserLastModifiedDate?: DateType;
    /**
     * Specifies whether the user is enabled.
     */
    Enabled?: BooleanType;
    /**
     * The user status. Can be one of the following:   UNCONFIRMED - User has been created but not confirmed.   CONFIRMED - User has been confirmed.   ARCHIVED - User is no longer active.   COMPROMISED - User is disabled due to a potential security threat.   UNKNOWN - User status is not known.  
     */
    UserStatus?: UserStatusType;
    /**
     * The MFA options for the user.
     */
    MFAOptions?: MFAOptionListType;
  }
  export type UsernameAttributeType = "phone_number"|"email"|string;
  export type UsernameAttributesListType = UsernameAttributeType[];
  export type UsernameType = string;
  export type UsersListType = UserType[];
  export interface VerificationMessageTemplateType {
    /**
     * The SMS message template.
     */
    SmsMessage?: SmsVerificationMessageType;
    /**
     * The email message template.
     */
    EmailMessage?: EmailVerificationMessageType;
    /**
     * The subject line for the email message template.
     */
    EmailSubject?: EmailVerificationSubjectType;
    /**
     * The email message template for sending a confirmation link to the user.
     */
    EmailMessageByLink?: EmailVerificationMessageByLinkType;
    /**
     * The subject line for the email message template for sending a confirmation link to the user.
     */
    EmailSubjectByLink?: EmailVerificationSubjectByLinkType;
    /**
     * The default email option.
     */
    DefaultEmailOption?: DefaultEmailOptionType;
  }
  export type VerifiedAttributeType = "phone_number"|"email"|string;
  export type VerifiedAttributesListType = VerifiedAttributeType[];
  export interface VerifyUserAttributeRequest {
    /**
     * Represents the access token of the request to verify user attributes.
     */
    AccessToken: TokenModelType;
    /**
     * The attribute name in the request to verify user attributes.
     */
    AttributeName: AttributeNameType;
    /**
     * The verification code in the request to verify user attributes.
     */
    Code: ConfirmationCodeType;
  }
  export interface VerifyUserAttributeResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-04-18"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CognitoIdentityServiceProvider client.
   */
  export import Types = CognitoIdentityServiceProvider;
}
export = CognitoIdentityServiceProvider;
