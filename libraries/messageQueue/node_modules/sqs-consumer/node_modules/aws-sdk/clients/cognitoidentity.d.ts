import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CognitoIdentity extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CognitoIdentity.Types.ClientConfiguration)
  config: Config & CognitoIdentity.Types.ClientConfiguration;
  /**
   * Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The limit on identity pools is 60 per account. The keys for SupportedLoginProviders are as follows:   Facebook: graph.facebook.com    Google: accounts.google.com    Amazon: www.amazon.com    Twitter: api.twitter.com    Digits: www.digits.com    You must use AWS Developer credentials to call this API.
   */
  createIdentityPool(params: CognitoIdentity.Types.CreateIdentityPoolInput, callback?: (err: AWSError, data: CognitoIdentity.Types.IdentityPool) => void): Request<CognitoIdentity.Types.IdentityPool, AWSError>;
  /**
   * Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The limit on identity pools is 60 per account. The keys for SupportedLoginProviders are as follows:   Facebook: graph.facebook.com    Google: accounts.google.com    Amazon: www.amazon.com    Twitter: api.twitter.com    Digits: www.digits.com    You must use AWS Developer credentials to call this API.
   */
  createIdentityPool(callback?: (err: AWSError, data: CognitoIdentity.Types.IdentityPool) => void): Request<CognitoIdentity.Types.IdentityPool, AWSError>;
  /**
   * Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete. You must use AWS Developer credentials to call this API.
   */
  deleteIdentities(params: CognitoIdentity.Types.DeleteIdentitiesInput, callback?: (err: AWSError, data: CognitoIdentity.Types.DeleteIdentitiesResponse) => void): Request<CognitoIdentity.Types.DeleteIdentitiesResponse, AWSError>;
  /**
   * Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete. You must use AWS Developer credentials to call this API.
   */
  deleteIdentities(callback?: (err: AWSError, data: CognitoIdentity.Types.DeleteIdentitiesResponse) => void): Request<CognitoIdentity.Types.DeleteIdentitiesResponse, AWSError>;
  /**
   * Deletes a user pool. Once a pool is deleted, users will not be able to authenticate with the pool. You must use AWS Developer credentials to call this API.
   */
  deleteIdentityPool(params: CognitoIdentity.Types.DeleteIdentityPoolInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user pool. Once a pool is deleted, users will not be able to authenticate with the pool. You must use AWS Developer credentials to call this API.
   */
  deleteIdentityPool(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns metadata related to the given identity, including when the identity was created and any associated linked logins. You must use AWS Developer credentials to call this API.
   */
  describeIdentity(params: CognitoIdentity.Types.DescribeIdentityInput, callback?: (err: AWSError, data: CognitoIdentity.Types.IdentityDescription) => void): Request<CognitoIdentity.Types.IdentityDescription, AWSError>;
  /**
   * Returns metadata related to the given identity, including when the identity was created and any associated linked logins. You must use AWS Developer credentials to call this API.
   */
  describeIdentity(callback?: (err: AWSError, data: CognitoIdentity.Types.IdentityDescription) => void): Request<CognitoIdentity.Types.IdentityDescription, AWSError>;
  /**
   * Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users. You must use AWS Developer credentials to call this API.
   */
  describeIdentityPool(params: CognitoIdentity.Types.DescribeIdentityPoolInput, callback?: (err: AWSError, data: CognitoIdentity.Types.IdentityPool) => void): Request<CognitoIdentity.Types.IdentityPool, AWSError>;
  /**
   * Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users. You must use AWS Developer credentials to call this API.
   */
  describeIdentityPool(callback?: (err: AWSError, data: CognitoIdentity.Types.IdentityPool) => void): Request<CognitoIdentity.Types.IdentityPool, AWSError>;
  /**
   * Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token. This is a public API. You do not need any credentials to call this API.
   */
  getCredentialsForIdentity(params: CognitoIdentity.Types.GetCredentialsForIdentityInput, callback?: (err: AWSError, data: CognitoIdentity.Types.GetCredentialsForIdentityResponse) => void): Request<CognitoIdentity.Types.GetCredentialsForIdentityResponse, AWSError>;
  /**
   * Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token. This is a public API. You do not need any credentials to call this API.
   */
  getCredentialsForIdentity(callback?: (err: AWSError, data: CognitoIdentity.Types.GetCredentialsForIdentityResponse) => void): Request<CognitoIdentity.Types.GetCredentialsForIdentityResponse, AWSError>;
  /**
   * Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account. This is a public API. You do not need any credentials to call this API.
   */
  getId(params: CognitoIdentity.Types.GetIdInput, callback?: (err: AWSError, data: CognitoIdentity.Types.GetIdResponse) => void): Request<CognitoIdentity.Types.GetIdResponse, AWSError>;
  /**
   * Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account. This is a public API. You do not need any credentials to call this API.
   */
  getId(callback?: (err: AWSError, data: CognitoIdentity.Types.GetIdResponse) => void): Request<CognitoIdentity.Types.GetIdResponse, AWSError>;
  /**
   * Gets the roles for an identity pool. You must use AWS Developer credentials to call this API.
   */
  getIdentityPoolRoles(params: CognitoIdentity.Types.GetIdentityPoolRolesInput, callback?: (err: AWSError, data: CognitoIdentity.Types.GetIdentityPoolRolesResponse) => void): Request<CognitoIdentity.Types.GetIdentityPoolRolesResponse, AWSError>;
  /**
   * Gets the roles for an identity pool. You must use AWS Developer credentials to call this API.
   */
  getIdentityPoolRoles(callback?: (err: AWSError, data: CognitoIdentity.Types.GetIdentityPoolRolesResponse) => void): Request<CognitoIdentity.Types.GetIdentityPoolRolesResponse, AWSError>;
  /**
   * Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by GetId. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link. The OpenId token is valid for 15 minutes. This is a public API. You do not need any credentials to call this API.
   */
  getOpenIdToken(params: CognitoIdentity.Types.GetOpenIdTokenInput, callback?: (err: AWSError, data: CognitoIdentity.Types.GetOpenIdTokenResponse) => void): Request<CognitoIdentity.Types.GetOpenIdTokenResponse, AWSError>;
  /**
   * Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by GetId. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link. The OpenId token is valid for 15 minutes. This is a public API. You do not need any credentials to call this API.
   */
  getOpenIdToken(callback?: (err: AWSError, data: CognitoIdentity.Types.GetOpenIdTokenResponse) => void): Request<CognitoIdentity.Types.GetOpenIdTokenResponse, AWSError>;
  /**
   * Registers (or retrieves) a Cognito IdentityId and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the Logins map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users. You can use GetOpenIdTokenForDeveloperIdentity to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the IdentityId should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing IdentityId. This API will create the identity in the specified IdentityPoolId. You must use AWS Developer credentials to call this API.
   */
  getOpenIdTokenForDeveloperIdentity(params: CognitoIdentity.Types.GetOpenIdTokenForDeveloperIdentityInput, callback?: (err: AWSError, data: CognitoIdentity.Types.GetOpenIdTokenForDeveloperIdentityResponse) => void): Request<CognitoIdentity.Types.GetOpenIdTokenForDeveloperIdentityResponse, AWSError>;
  /**
   * Registers (or retrieves) a Cognito IdentityId and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the Logins map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users. You can use GetOpenIdTokenForDeveloperIdentity to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the IdentityId should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing IdentityId. This API will create the identity in the specified IdentityPoolId. You must use AWS Developer credentials to call this API.
   */
  getOpenIdTokenForDeveloperIdentity(callback?: (err: AWSError, data: CognitoIdentity.Types.GetOpenIdTokenForDeveloperIdentityResponse) => void): Request<CognitoIdentity.Types.GetOpenIdTokenForDeveloperIdentityResponse, AWSError>;
  /**
   * Lists the identities in a pool. You must use AWS Developer credentials to call this API.
   */
  listIdentities(params: CognitoIdentity.Types.ListIdentitiesInput, callback?: (err: AWSError, data: CognitoIdentity.Types.ListIdentitiesResponse) => void): Request<CognitoIdentity.Types.ListIdentitiesResponse, AWSError>;
  /**
   * Lists the identities in a pool. You must use AWS Developer credentials to call this API.
   */
  listIdentities(callback?: (err: AWSError, data: CognitoIdentity.Types.ListIdentitiesResponse) => void): Request<CognitoIdentity.Types.ListIdentitiesResponse, AWSError>;
  /**
   * Lists all of the Cognito identity pools registered for your account. You must use AWS Developer credentials to call this API.
   */
  listIdentityPools(params: CognitoIdentity.Types.ListIdentityPoolsInput, callback?: (err: AWSError, data: CognitoIdentity.Types.ListIdentityPoolsResponse) => void): Request<CognitoIdentity.Types.ListIdentityPoolsResponse, AWSError>;
  /**
   * Lists all of the Cognito identity pools registered for your account. You must use AWS Developer credentials to call this API.
   */
  listIdentityPools(callback?: (err: AWSError, data: CognitoIdentity.Types.ListIdentityPoolsResponse) => void): Request<CognitoIdentity.Types.ListIdentityPoolsResponse, AWSError>;
  /**
   * Retrieves the IdentityID associated with a DeveloperUserIdentifier or the list of DeveloperUserIdentifiers associated with an IdentityId for an existing identity. Either IdentityID or DeveloperUserIdentifier must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, DeveloperUserIdentifier will be matched against IdentityID. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a ResourceConflictException is thrown. You must use AWS Developer credentials to call this API.
   */
  lookupDeveloperIdentity(params: CognitoIdentity.Types.LookupDeveloperIdentityInput, callback?: (err: AWSError, data: CognitoIdentity.Types.LookupDeveloperIdentityResponse) => void): Request<CognitoIdentity.Types.LookupDeveloperIdentityResponse, AWSError>;
  /**
   * Retrieves the IdentityID associated with a DeveloperUserIdentifier or the list of DeveloperUserIdentifiers associated with an IdentityId for an existing identity. Either IdentityID or DeveloperUserIdentifier must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, DeveloperUserIdentifier will be matched against IdentityID. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a ResourceConflictException is thrown. You must use AWS Developer credentials to call this API.
   */
  lookupDeveloperIdentity(callback?: (err: AWSError, data: CognitoIdentity.Types.LookupDeveloperIdentityResponse) => void): Request<CognitoIdentity.Types.LookupDeveloperIdentityResponse, AWSError>;
  /**
   * Merges two users having different IdentityIds, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (SourceUserIdentifier) with the IdentityId of the DestinationUserIdentifier. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown. You must use AWS Developer credentials to call this API.
   */
  mergeDeveloperIdentities(params: CognitoIdentity.Types.MergeDeveloperIdentitiesInput, callback?: (err: AWSError, data: CognitoIdentity.Types.MergeDeveloperIdentitiesResponse) => void): Request<CognitoIdentity.Types.MergeDeveloperIdentitiesResponse, AWSError>;
  /**
   * Merges two users having different IdentityIds, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (SourceUserIdentifier) with the IdentityId of the DestinationUserIdentifier. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown. You must use AWS Developer credentials to call this API.
   */
  mergeDeveloperIdentities(callback?: (err: AWSError, data: CognitoIdentity.Types.MergeDeveloperIdentitiesResponse) => void): Request<CognitoIdentity.Types.MergeDeveloperIdentitiesResponse, AWSError>;
  /**
   * Sets the roles for an identity pool. These roles are used when making calls to GetCredentialsForIdentity action. You must use AWS Developer credentials to call this API.
   */
  setIdentityPoolRoles(params: CognitoIdentity.Types.SetIdentityPoolRolesInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the roles for an identity pool. These roles are used when making calls to GetCredentialsForIdentity action. You must use AWS Developer credentials to call this API.
   */
  setIdentityPoolRoles(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Unlinks a DeveloperUserIdentifier from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible. You must use AWS Developer credentials to call this API.
   */
  unlinkDeveloperIdentity(params: CognitoIdentity.Types.UnlinkDeveloperIdentityInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Unlinks a DeveloperUserIdentifier from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible. You must use AWS Developer credentials to call this API.
   */
  unlinkDeveloperIdentity(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible. This is a public API. You do not need any credentials to call this API.
   */
  unlinkIdentity(params: CognitoIdentity.Types.UnlinkIdentityInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible. This is a public API. You do not need any credentials to call this API.
   */
  unlinkIdentity(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a user pool. You must use AWS Developer credentials to call this API.
   */
  updateIdentityPool(params: CognitoIdentity.Types.IdentityPool, callback?: (err: AWSError, data: CognitoIdentity.Types.IdentityPool) => void): Request<CognitoIdentity.Types.IdentityPool, AWSError>;
  /**
   * Updates a user pool. You must use AWS Developer credentials to call this API.
   */
  updateIdentityPool(callback?: (err: AWSError, data: CognitoIdentity.Types.IdentityPool) => void): Request<CognitoIdentity.Types.IdentityPool, AWSError>;
}
declare namespace CognitoIdentity {
  export type ARNString = string;
  export type AccessKeyString = string;
  export type AccountId = string;
  export type AmbiguousRoleResolutionType = "AuthenticatedRole"|"Deny"|string;
  export type ClaimName = string;
  export type ClaimValue = string;
  export interface CognitoIdentityProvider {
    /**
     * The provider name for an Amazon Cognito Identity User Pool. For example, cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789.
     */
    ProviderName?: CognitoIdentityProviderName;
    /**
     * The client ID for the Amazon Cognito Identity User Pool.
     */
    ClientId?: CognitoIdentityProviderClientId;
    /**
     * TRUE if server-side token validation is enabled for the identity provider’s token.
     */
    ServerSideTokenCheck?: CognitoIdentityProviderTokenCheck;
  }
  export type CognitoIdentityProviderClientId = string;
  export type CognitoIdentityProviderList = CognitoIdentityProvider[];
  export type CognitoIdentityProviderName = string;
  export type CognitoIdentityProviderTokenCheck = boolean;
  export interface CreateIdentityPoolInput {
    /**
     * A string that you provide.
     */
    IdentityPoolName: IdentityPoolName;
    /**
     * TRUE if the identity pool supports unauthenticated logins.
     */
    AllowUnauthenticatedIdentities: IdentityPoolUnauthenticated;
    /**
     * Optional key:value pairs mapping provider names to provider app IDs.
     */
    SupportedLoginProviders?: IdentityProviders;
    /**
     * The "domain" by which Cognito will refer to your users. This name acts as a placeholder that allows your backend and the Cognito service to communicate about the developer provider. For the DeveloperProviderName, you can use letters as well as period (.), underscore (_), and dash (-). Once you have set a developer provider name, you cannot change it. Please take care in setting this parameter.
     */
    DeveloperProviderName?: DeveloperProviderName;
    /**
     * A list of OpendID Connect provider ARNs.
     */
    OpenIdConnectProviderARNs?: OIDCProviderList;
    /**
     * An array of Amazon Cognito Identity user pools and their client IDs.
     */
    CognitoIdentityProviders?: CognitoIdentityProviderList;
    /**
     * An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.
     */
    SamlProviderARNs?: SAMLProviderList;
  }
  export interface Credentials {
    /**
     * The Access Key portion of the credentials.
     */
    AccessKeyId?: AccessKeyString;
    /**
     * The Secret Access Key portion of the credentials
     */
    SecretKey?: SecretKeyString;
    /**
     * The Session Token portion of the credentials
     */
    SessionToken?: SessionTokenString;
    /**
     * The date at which these credentials will expire.
     */
    Expiration?: DateType;
  }
  export type DateType = Date;
  export interface DeleteIdentitiesInput {
    /**
     * A list of 1-60 identities that you want to delete.
     */
    IdentityIdsToDelete: IdentityIdList;
  }
  export interface DeleteIdentitiesResponse {
    /**
     * An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.
     */
    UnprocessedIdentityIds?: UnprocessedIdentityIdList;
  }
  export interface DeleteIdentityPoolInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
  }
  export interface DescribeIdentityInput {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId: IdentityId;
  }
  export interface DescribeIdentityPoolInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
  }
  export type DeveloperProviderName = string;
  export type DeveloperUserIdentifier = string;
  export type DeveloperUserIdentifierList = DeveloperUserIdentifier[];
  export type ErrorCode = "AccessDenied"|"InternalServerError"|string;
  export interface GetCredentialsForIdentityInput {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId: IdentityId;
    /**
     * A set of optional name-value pairs that map provider names to provider tokens.
     */
    Logins?: LoginsMap;
    /**
     * The Amazon Resource Name (ARN) of the role to be assumed when multiple roles were received in the token from the identity provider. For example, a SAML-based identity provider. This parameter is optional for identity providers that do not support role customization.
     */
    CustomRoleArn?: ARNString;
  }
  export interface GetCredentialsForIdentityResponse {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * Credentials for the provided identity ID.
     */
    Credentials?: Credentials;
  }
  export interface GetIdInput {
    /**
     * A standard AWS account ID (9+ digits).
     */
    AccountId?: AccountId;
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * A set of optional name-value pairs that map provider names to provider tokens. The available provider names for Logins are as follows:   Facebook: graph.facebook.com    Amazon Cognito Identity Provider: cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789    Google: accounts.google.com    Amazon: www.amazon.com    Twitter: api.twitter.com    Digits: www.digits.com   
     */
    Logins?: LoginsMap;
  }
  export interface GetIdResponse {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
  }
  export interface GetIdentityPoolRolesInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
  }
  export interface GetIdentityPoolRolesResponse {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * The map of roles associated with this pool. Currently only authenticated and unauthenticated roles are supported.
     */
    Roles?: RolesMap;
    /**
     * How users for a specific identity provider are to mapped to roles. This is a String-to-RoleMapping object map. The string identifies the identity provider, for example, "graph.facebook.com" or "cognito-idp-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id".
     */
    RoleMappings?: RoleMappingMap;
  }
  export interface GetOpenIdTokenForDeveloperIdentityInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * A set of optional name-value pairs that map provider names to provider tokens. Each name-value pair represents a user from a public provider or developer provider. If the user is from a developer provider, the name-value pair will follow the syntax "developer_provider_name": "developer_user_identifier". The developer provider is the "domain" by which Cognito will refer to your users; you provided this domain while creating/updating the identity pool. The developer user identifier is an identifier from your backend that uniquely identifies a user. When you create an identity pool, you can specify the supported logins.
     */
    Logins: LoginsMap;
    /**
     * The expiration time of the token, in seconds. You can specify a custom expiration time for the token so that you can cache it. If you don't provide an expiration time, the token is valid for 15 minutes. You can exchange the token with Amazon STS for temporary AWS credentials, which are valid for a maximum of one hour. The maximum token duration you can set is 24 hours. You should take care in setting the expiration time for a token, as there are significant security implications: an attacker could use a leaked token to access your AWS resources for the token's duration.
     */
    TokenDuration?: TokenDuration;
  }
  export interface GetOpenIdTokenForDeveloperIdentityResponse {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * An OpenID token.
     */
    Token?: OIDCToken;
  }
  export interface GetOpenIdTokenInput {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId: IdentityId;
    /**
     * A set of optional name-value pairs that map provider names to provider tokens. When using graph.facebook.com and www.amazon.com, supply the access_token returned from the provider's authflow. For accounts.google.com, an Amazon Cognito Identity Provider, or any other OpenId Connect provider, always include the id_token.
     */
    Logins?: LoginsMap;
  }
  export interface GetOpenIdTokenResponse {
    /**
     * A unique identifier in the format REGION:GUID. Note that the IdentityId returned may not match the one passed on input.
     */
    IdentityId?: IdentityId;
    /**
     * An OpenID token, valid for 15 minutes.
     */
    Token?: OIDCToken;
  }
  export type HideDisabled = boolean;
  export type IdentitiesList = IdentityDescription[];
  export interface IdentityDescription {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * A set of optional name-value pairs that map provider names to provider tokens.
     */
    Logins?: LoginsList;
    /**
     * Date on which the identity was created.
     */
    CreationDate?: DateType;
    /**
     * Date on which the identity was last modified.
     */
    LastModifiedDate?: DateType;
  }
  export type IdentityId = string;
  export type IdentityIdList = IdentityId[];
  export interface IdentityPool {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * A string that you provide.
     */
    IdentityPoolName: IdentityPoolName;
    /**
     * TRUE if the identity pool supports unauthenticated logins.
     */
    AllowUnauthenticatedIdentities: IdentityPoolUnauthenticated;
    /**
     * Optional key:value pairs mapping provider names to provider app IDs.
     */
    SupportedLoginProviders?: IdentityProviders;
    /**
     * The "domain" by which Cognito will refer to your users.
     */
    DeveloperProviderName?: DeveloperProviderName;
    /**
     * A list of OpendID Connect provider ARNs.
     */
    OpenIdConnectProviderARNs?: OIDCProviderList;
    /**
     * A list representing an Amazon Cognito Identity User Pool and its client ID.
     */
    CognitoIdentityProviders?: CognitoIdentityProviderList;
    /**
     * An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.
     */
    SamlProviderARNs?: SAMLProviderList;
  }
  export type IdentityPoolId = string;
  export type IdentityPoolName = string;
  export interface IdentityPoolShortDescription {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * A string that you provide.
     */
    IdentityPoolName?: IdentityPoolName;
  }
  export type IdentityPoolUnauthenticated = boolean;
  export type IdentityPoolsList = IdentityPoolShortDescription[];
  export type IdentityProviderId = string;
  export type IdentityProviderName = string;
  export type IdentityProviderToken = string;
  export type IdentityProviders = {[key: string]: IdentityProviderId};
  export interface ListIdentitiesInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * The maximum number of identities to return.
     */
    MaxResults: QueryLimit;
    /**
     * A pagination token.
     */
    NextToken?: PaginationKey;
    /**
     * An optional boolean parameter that allows you to hide disabled identities. If omitted, the ListIdentities API will include disabled identities in the response.
     */
    HideDisabled?: HideDisabled;
  }
  export interface ListIdentitiesResponse {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * An object containing a set of identities and associated mappings.
     */
    Identities?: IdentitiesList;
    /**
     * A pagination token.
     */
    NextToken?: PaginationKey;
  }
  export interface ListIdentityPoolsInput {
    /**
     * The maximum number of identities to return.
     */
    MaxResults: QueryLimit;
    /**
     * A pagination token.
     */
    NextToken?: PaginationKey;
  }
  export interface ListIdentityPoolsResponse {
    /**
     * The identity pools returned by the ListIdentityPools action.
     */
    IdentityPools?: IdentityPoolsList;
    /**
     * A pagination token.
     */
    NextToken?: PaginationKey;
  }
  export type LoginsList = IdentityProviderName[];
  export type LoginsMap = {[key: string]: IdentityProviderToken};
  export interface LookupDeveloperIdentityInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * A unique ID used by your backend authentication process to identify a user. Typically, a developer identity provider would issue many developer user identifiers, in keeping with the number of users.
     */
    DeveloperUserIdentifier?: DeveloperUserIdentifier;
    /**
     * The maximum number of identities to return.
     */
    MaxResults?: QueryLimit;
    /**
     * A pagination token. The first call you make will have NextToken set to null. After that the service will return NextToken values as needed. For example, let's say you make a request with MaxResults set to 10, and there are 20 matches in the database. The service will return a pagination token as a part of the response. This token can be used to call the API again and get results starting from the 11th match.
     */
    NextToken?: PaginationKey;
  }
  export interface LookupDeveloperIdentityResponse {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * This is the list of developer user identifiers associated with an identity ID. Cognito supports the association of multiple developer user identifiers with an identity ID.
     */
    DeveloperUserIdentifierList?: DeveloperUserIdentifierList;
    /**
     * A pagination token. The first call you make will have NextToken set to null. After that the service will return NextToken values as needed. For example, let's say you make a request with MaxResults set to 10, and there are 20 matches in the database. The service will return a pagination token as a part of the response. This token can be used to call the API again and get results starting from the 11th match.
     */
    NextToken?: PaginationKey;
  }
  export interface MappingRule {
    /**
     * The claim name that must be present in the token, for example, "isAdmin" or "paid".
     */
    Claim: ClaimName;
    /**
     * The match condition that specifies how closely the claim value in the IdP token must match Value.
     */
    MatchType: MappingRuleMatchType;
    /**
     * A brief string that the claim must match, for example, "paid" or "yes".
     */
    Value: ClaimValue;
    /**
     * The role ARN.
     */
    RoleARN: ARNString;
  }
  export type MappingRuleMatchType = "Equals"|"Contains"|"StartsWith"|"NotEqual"|string;
  export type MappingRulesList = MappingRule[];
  export interface MergeDeveloperIdentitiesInput {
    /**
     * User identifier for the source user. The value should be a DeveloperUserIdentifier.
     */
    SourceUserIdentifier: DeveloperUserIdentifier;
    /**
     * User identifier for the destination user. The value should be a DeveloperUserIdentifier.
     */
    DestinationUserIdentifier: DeveloperUserIdentifier;
    /**
     * The "domain" by which Cognito will refer to your users. This is a (pseudo) domain name that you provide while creating an identity pool. This name acts as a placeholder that allows your backend and the Cognito service to communicate about the developer provider. For the DeveloperProviderName, you can use letters as well as period (.), underscore (_), and dash (-).
     */
    DeveloperProviderName: DeveloperProviderName;
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
  }
  export interface MergeDeveloperIdentitiesResponse {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
  }
  export type OIDCProviderList = ARNString[];
  export type OIDCToken = string;
  export type PaginationKey = string;
  export type QueryLimit = number;
  export interface RoleMapping {
    /**
     * The role mapping type. Token will use cognito:roles and cognito:preferred_role claims from the Cognito identity provider token to map groups to roles. Rules will attempt to match claims from the token to map to a role.
     */
    Type: RoleMappingType;
    /**
     * If you specify Token or Rules as the Type, AmbiguousRoleResolution is required. Specifies the action to be taken if either no rules match the claim value for the Rules type, or there is no cognito:preferred_role claim and there are multiple cognito:roles matches for the Token type.
     */
    AmbiguousRoleResolution?: AmbiguousRoleResolutionType;
    /**
     * The rules to be used for mapping users to roles. If you specify Rules as the role mapping type, RulesConfiguration is required.
     */
    RulesConfiguration?: RulesConfigurationType;
  }
  export type RoleMappingMap = {[key: string]: RoleMapping};
  export type RoleMappingType = "Token"|"Rules"|string;
  export type RoleType = string;
  export type RolesMap = {[key: string]: ARNString};
  export interface RulesConfigurationType {
    /**
     * An array of rules. You can specify up to 25 rules per identity provider. Rules are evaluated in order. The first one to match specifies the role.
     */
    Rules: MappingRulesList;
  }
  export type SAMLProviderList = ARNString[];
  export type SecretKeyString = string;
  export type SessionTokenString = string;
  export interface SetIdentityPoolRolesInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * The map of roles associated with this pool. For a given role, the key will be either "authenticated" or "unauthenticated" and the value will be the Role ARN.
     */
    Roles: RolesMap;
    /**
     * How users for a specific identity provider are to mapped to roles. This is a string to RoleMapping object map. The string identifies the identity provider, for example, "graph.facebook.com" or "cognito-idp-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id". Up to 25 rules can be specified per identity provider.
     */
    RoleMappings?: RoleMappingMap;
  }
  export type String = string;
  export type TokenDuration = number;
  export interface UnlinkDeveloperIdentityInput {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId: IdentityId;
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * The "domain" by which Cognito will refer to your users.
     */
    DeveloperProviderName: DeveloperProviderName;
    /**
     * A unique ID used by your backend authentication process to identify a user.
     */
    DeveloperUserIdentifier: DeveloperUserIdentifier;
  }
  export interface UnlinkIdentityInput {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId: IdentityId;
    /**
     * A set of optional name-value pairs that map provider names to provider tokens.
     */
    Logins: LoginsMap;
    /**
     * Provider names to unlink from this identity.
     */
    LoginsToRemove: LoginsList;
  }
  export interface UnprocessedIdentityId {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * The error code indicating the type of error that occurred.
     */
    ErrorCode?: ErrorCode;
  }
  export type UnprocessedIdentityIdList = UnprocessedIdentityId[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-06-30"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CognitoIdentity client.
   */
  export import Types = CognitoIdentity;
}
export = CognitoIdentity;
