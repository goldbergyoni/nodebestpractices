import * as stream from 'stream';
import {Service} from './service';
import {Response} from './response';
import {HttpRequest} from './http_request';
import {AWSError} from './error';
export class Request<D, E> {
    /**
     * Creates a request for an operation on a given service with a set of input parameters.
     *
     * @param {AWS.Service} service - The service to perform the operation on.
     * @param {string} operation - The operation to perform on the service.
     * @param {object} params - Parameters to send to the operation.
     */
    constructor(service: Service, operation: string, params?: any);
    /**
     * Aborts a request, emitting the error and complete events.
     * This feature is not supported in the browser environment of the SDK.
     */
    abort(): void;
    /**
     * Converts the request object into a readable stream that can be read from or piped into a writable stream.
     * The data read from a readable stream contains only the raw HTTP body contents.
     * This feature is not supported in the browser environment of the SDK.
     */
    createReadStream(): stream.Readable;
    /**
     * Iterates over each page of results given a pageable request, calling the provided callback with each page of data.
     * After all pages have been retrieved, the callback is called with null data.
     *
     * @param {eachPage} callback - The callback that handles the response.
     */
    eachPage(callback: (err: E, data: D, doneCallback?: () => void) => boolean): void;
    /**
     * Returns whether the operation can return multiple pages of response data.
     */
    isPageable(): boolean;
    /**
     * Sends the request object.
     * If a callback is supplied, it is called when a response is returned from the service.
     */
    send(callback?: (err: E, data: D) => void): void;
    /**
     * Adds a listener that is triggered when a request emits the specified event.
     *
     * @param {string} event - 'Name of a request event.'
     * @param {function} listener - Callback to run when the event is triggered on the request.
     */
    on(event: string, listener: () => void): Request<D, E>;
    /**
     * Adds a listener that is triggered when a request is being validated.
     *
     * @param {string} event - validate: triggered when a request is being validated.
     * @param {function} listener - Callback to run when the request is being validated.
     */
    on(event: "validate", listener: (request: Request<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered when the request payload is being built.
     *
     * @param {string} event - build: triggered when the request payload is being built.
     * @param {function} listener - Callback to run when the request's payload is being built.
     */
    on(event: "build", listener: (request: Request<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered when a request is being signed.
     *
     * @param {string} event - sign: triggered when a request is being signed.
     * @param {function} listener - Callback to run when the request is being signed.
     */
    on(event: "sign", listener: (request: Request<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered when a request is ready to be sent.
     *
     * @param {string} event - send: triggered when a request is ready to be sent.
     * @param {function} listener - Callback to run when the request is ready to be sent.
     */
    on(event: "send", listener: (response: Response<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered when a request failed and might need to be retried or redirected.
     *
     * @param {string} event - retry: triggered when a request failed and might need to be retried or redirected.
     * @param {function} listener - Callback to run when the request failed and may be retried.
     */
    on(event: "retry", listener: (response: Response<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered on all non-2xx requests so that listeners can extract error details from the response body.
     *
     * @param {string} event - extractError: triggered on all non-2xx requests so that listeners can extract error details from the response body.
     * @param {function} listener - Callback to run when the request failed.
     */
    on(event: "extractError", listener: (response: Response<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered in successful requests to allow listeners to de-serialize the response body into response.data.
     *
     * @param {string} event - extractData: triggered in successful requests to allow listeners to de-serialize the response body into response.data.
     * @param {function} listener - Callback to run when the request succeeded.
     */
    on(event: "extractData", listener: (response: Response<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered when the request completed successfully.
     *
     * @param {string} event - success: triggered when the request completed successfully.
     * @param {function} listener - Callback to run when the request completed successfully.
     */
    on(event: "success", listener: (response: Response<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered when an error occurs at any point during the request.
     *
     * @param {string} event - error: triggered when an error occurs at any point during the request.
     * @param {function} listener - Callback to run when the request errors at any point.
     */
    on(event: "error", listener: (err: AWSError, response: Response<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered whenever a request cycle completes.
     *
     * @param {string} event - complete: triggered whenever a request cycle completes.
     * @param {function} listener - Callback to run when the request cycle completes.
     */
    on(event: "complete", listener: (response: Response<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered when headers are sent by the remote server.
     *
     * @param {string} event - httpHeaders: triggered when headers are sent by the remote server.
     * @param {function} listener - Callback to run when the headers are sent by the remote server.
     */
    on(event: "httpHeaders", listener: (statusCode: number, headers: {[key: string]: string}, response: Response<D, E>, statusMessage: string) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered when data is sent by the remote server.
     *
     * @param {string} event - httpData: triggered when data is sent by the remote server.
     * @param {function} listener - Callback to run when data is sent by the remote server.
     */
    on(event: "httpData", listener: (chunk: Buffer|Uint8Array, response: Response<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered when the HTTP request has uploaded more data.
     *
     * @param {string} event - httpUploadProgress: triggered when the HTTP request has uploaded more data.
     * @param {function} listener - Callback to run when the HTTP request has uploaded more data.
     */
    on(event: "httpUploadProgress", listener: (progress: Progress, response: Response<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered when the HTTP request has downloaded more data.
     *
     * @param {string} event - httpDownloadProgress: triggered when the HTTP request has downloaded more data.
     * @param {function} listener - Callback to run when the HTTP request has downloaded more data.
     */
    on(event: "httpDownloadProgress", listener: (progress: Progress, response: Response<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered when the HTTP request failed.
     *
     * @param {string} event - httpError: triggered when the HTTP request failed.
     * @param {function} listener - Callback to run when the HTTP request failed.
     */
    on(event: "httpError", listener: (err: Error, response: Response<D, E>) => void): Request<D, E>;
    /**
     * Adds a listener that is triggered when the server is finished sending data.
     *
     * @param {string} event - httpDone: triggered when the server is finished sending data.
     * @param {function} listener - Callback to run when the server is finished sending data.
     */
    on(event: "httpDone", listener: (response: Response<D, E>) => void): Request<D, E>;
    /**
     * Returns a 'thenable' promise.
     */
    promise(): Promise<PromiseResult<D, E>>
    /**
     * The time that the request started.
     */
    startTime: Date;
    /**
     * The raw HTTP request object containing request headers and body information sent by the service.
     */
    httpRequest: HttpRequest;

}

export type PromiseResult<D, E> = D & {$response: Response<D, E>};

export interface Progress {
    loaded: number;
    total: number;
}
