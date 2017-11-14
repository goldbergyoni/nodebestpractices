
import {AWSError} from './error';
/**
 * Represents a metadata service available on EC2 instances. Using the request() method, you can receieve metadata about any available resource on the metadata service.
 */
export class MetadataService {
    /**
     * Creates a new MetadataService object with a given set of options.
     */
    constructor(options?: MetadataServiceOptions);
    /**
     * Sends a request to the instance metadata service for a given resource.
     */
    request(path: string, callback: (err: AWSError, data: string) => void): void;
    /**
     * 169.254.169.254
     */
    static host: string
    /**
     * A map of options to pass to the underlying HTTP request.
     */
    httpOptions: {
        /**
         * a timeout value in milliseconds to wait before aborting the connection. Set to 0 for no timeout.
         */
        timeout: number;
    }
}

interface MetadataServiceOptions {
    /**
     * the hostname of the instance metadata service.
     */
    host?: string;
    /**
     * a map of options to pass to the underlying HTTP request.
     */
    httpOptions?: {
        /**
         * a timeout value in milliseconds to wait before aborting the connection. Set to 0 for no timeout.
         */
        timeout?: number;
    }
    /**
     * the maximum number of retries to perform for timeout errors.
     */
    maxRetries?: number;
    /**
     * A set of options to configure the retry delay on retryable errors. See AWS.Config for details.
     */
    retryDelayOptions?: any
}