import {Credentials} from '../credentials';
export class EC2MetadataCredentials extends Credentials {
		/**
		 * Creates credentials from the metadata service on an EC2 instance.
		 * @param {object} options - Override the default (1s) timeout period.
		 */
		constructor(options?: EC2MetadataCredentialsOptions);
	}
    interface EC2MetadataCredentialsOptions {
        httpOptions?: {
            /**
             * Timeout in milliseconds.
             */
            timeout?: number
        }
        maxRetries?: number
    }