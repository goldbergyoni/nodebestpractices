import {Credentials} from '../credentials';
export class ECSCredentials extends Credentials {
		/**
		 * Represents credentials received from relative URI specified in the ECS container.
		 * @param {object} options - Override the default (1s) timeout period.
		 */
		constructor(options?: ECSCredentialsOptions);
	}
    interface ECSCredentialsOptions {
        httpOptions?: {
            /**
             * Timeout in milliseconds.
             */
            timeout?: number
        }
        maxRetries?: number
    }