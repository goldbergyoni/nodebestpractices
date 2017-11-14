import {AWSError} from './error';
export class Credentials {
    /**
     * Creates a Credentials object with a given set of credential information as an options hash.
     *
     * @param {object} options - An option hash containing a set of credential information.
     */
    constructor(options: CredentialsOptions);
    /**
     * Creates a Credentials object with a given set of credential information as positional arguments.
     *          *
     * @param {string} accessKeyId - The AWS access key ID.
     * @param {string} secretAccessKey - The AWS secret access key.
     * @param {string} sessionToken - The optional AWS session token.
     */
    constructor(accessKeyId: string, secretAccessKey: string, sessionToken?: string);
    /**
     * Gets the existing credentials, refreshing them if they are not yet loaded or have expired.
     * Users should call this method before using refresh(), as this will not attempt to reload
     * credentials when they are already loaded into the object.
     *
     * @param {get} callback - Called when the instance metadata service responds. When called with no error, the credentials information has been loaded into the object.
     */
    get(callback: (err: AWSError) => void): void;
    /**
     * Gets the existing credentials, refreshing them if necessary, and returns
     * a promise that will be fulfilled immediately (if no refresh is necessary)
     * or when the refresh has completed.
     */
    getPromise(): Promise<void>;
    /**
     * Returns whether the credentials object should call refresh()
     */
    needsRefresh(): boolean;
    /**
     * Refreshes the credentials.
     * Users should call get() before attempting to forcibly refresh credentials.
     *
     * @param {function} callback - Called when the instance metadata service responds. When called with no error, the credentials information has been loaded into the object.
     */
    refresh(callback: (err: AWSError) => void): void;
    /**
     * Invokes a credential refresh and returns a promise that will be fulfilled
     * when the refresh has completed or rejected when the refresh has failed.
     * Users should call get() before attempting to forcibly refresh credentials.
     */
    refreshPromise(): Promise<void>;
    /**
     * AWS access key ID.
     */
    accessKeyId: string;
    /**
     * Whether the credentials have been expired and require a refresh.
     * Used in conjunction with expireTime.
     */
    expired: boolean;
    /**
     * Time when credentials should be considered expired.
     * Used in conjunction with expired.
     */
    expireTime: Date;
    static expiryWindow: number;
    /**
     * AWS secret access key.
     */
    secretAccessKey: string;
    /**
     * AWS session token.
     */
    sessionToken: string;
}

interface CredentialsOptions {
    /**
     * AWS access key ID.
     */
    accessKeyId: string
    /**
     * AWS secret access key.
     */
    secretAccessKey: string
    /**
     * AWS session token.
     */
    sessionToken?: string
}
