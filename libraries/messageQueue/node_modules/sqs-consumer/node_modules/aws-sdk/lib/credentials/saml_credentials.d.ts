import {Credentials} from '../credentials';
export class SAMLCredentials extends Credentials {
		/**
		 * Creates a new credentials object.
		 * @param {object} params - The map of params passed to AWS.STS.assumeRoleWithSAML().
		 */
		constructor(params: SAMLCredentialsParams);
		params: SAMLCredentialsParams
	}
    interface SAMLCredentialsParams {
        /**
         * The Amazon Resource Name (ARN) of the role that the caller is assuming.
         */
        RoleArn: string
        /**
         * The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.
         */
        PrincipalArn: string
        /**
         * The base-64 encoded SAML authentication response provided by the IdP.
         */
        SAMLAssertion: string
        /**
         * An IAM policy in JSON format.
         * The policy plain text must be 2048 bytes or shorter.
         */
        Policy?: string
        /**
         * The duration, in seconds, of the role session.
         * The minimum duration is 15 minutes.
         * The maximum duration is 1 hour.
         */
        DurationSeconds?: number
    }