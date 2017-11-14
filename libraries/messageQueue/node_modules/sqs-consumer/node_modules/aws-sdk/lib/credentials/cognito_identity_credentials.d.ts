import {Credentials} from '../credentials';
import {AWSError} from '../error';
import {ConfigurationOptions} from '../config';
import CognitoIdentity = require('../../clients/cognitoidentity');
import STS = require('../../clients/sts');

export class CognitoIdentityCredentials extends Credentials {
    /**
     * Creates a new credentials object with optional configuration.
     */
    constructor(options: CognitoIdentityCredentials.CognitoIdentityOptions, clientConfig?: ConfigurationOptions);
    /**
     * Creates a new credentials object.
     */
    constructor(options?: CognitoIdentityCredentials.CognitoIdentityOptions);
    /**
     * Refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity(), or AWS.STS.assumeRoleWithWebIdentity().
     */
    refresh(callback: (err: AWSError) => void): void;
    /**
     * Clears the cached Cognito ID associated with the currently configured identity pool ID.
     */
    clearCachedId(): void;
    /**
     * The raw data response from the call to AWS.CognitoIdentity.getCredentialsForIdentity(), or AWS.STS.assumeRoleWithWebIdentity().
     */
    data: CognitoIdentity.Types.GetCredentialsForIdentityResponse|STS.Types.AssumeRoleWithWebIdentityResponse;
    /**
     * The Cognito ID returned by the last call to AWS.CognitoIdentity.getOpenIdToken().
     */
    identityId: string;
    /**
     * The map of params passed to AWS.CognitoIdentity.getId(), AWS.CognitoIdentity.getOpenIdToken(), and AWS.STS.assumeRoleWithWebIdentity().
     */
    params: CognitoIdentity.Types.GetIdInput|CognitoIdentity.Types.GetOpenIdTokenInput|STS.Types.AssumeRoleWithWebIdentityRequest;
}

// Needed to expose interfaces on the class
declare namespace CognitoIdentityCredentials {
    export type CognitoIdentityCredentialsInputs = CognitoIdentity.GetIdInput|CognitoIdentity.GetCredentialsForIdentityInput|CognitoIdentity.GetOpenIdTokenInput|STS.AssumeRoleWithWebIdentityRequest;
    export type CognitoIdentityOptions = CognitoIdentityCredentialsInputs & {LoginId?: string};
    export type ClientConfiguration = ConfigurationOptions;
}