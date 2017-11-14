/**
 * A structure containing information about a service or networking error.
 */
export class AWSError extends Error {
    /**
     * A unique short code representing the error that was emitted.
     */
    code: string;
    /**
     * A longer human readable error message.
     */
    message: string;
    /**
     * Whether the error message is retryable.
     */
    retryable: boolean;
    /**
     * In the case of a request that reached the service, this value contains the response status code.
     */
    statusCode: number;
    /**
     * The date time object when the error occurred.
     */
    time: Date;
    /**
     * Set when a networking error occurs to easily identify the endpoint of the request.
     */
    hostname: string;
    /**
     * Set when a networking error occurs to easily identify the region of the request.
     */
    region: string;
    /**
     * Amount of time (in seconds) that the request waited before being resent.
     */
    retryDelay: number;
    /**
     * The unique request ID associated with the response.
     */
    requestId: string;
    /**
     * Second request ID associated with the response from S3.
     */
    extendedRequstId: string;
    /**
     * CloudFront request ID associated with the response.
     */
    cfId: string;
}