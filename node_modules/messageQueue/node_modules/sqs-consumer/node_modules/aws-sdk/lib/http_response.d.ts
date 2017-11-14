import * as stream from 'stream';
interface XMLHttpRequest {}
/**
 * The low level HTTP response object, encapsulating all HTTP header and body data returned from the request.
 */
export class HttpResponse {
    /**
     * Disables buffering on the HTTP response and returns the stream for reading.
     */
    createUnbufferedStream(): stream.Readable|XMLHttpRequest
    /**
     * The response body payload.
     */
    body: string|Buffer|Uint8Array;
    /**
     * A map of response header keys and their respective values.
     */
    headers: {
        [key: string]: string;
    }
    /**
     * The HTTP status code of the response (e.g., 200, 404).
     */
    statusCode: number;
    /**
     * The HTTP status message of the response (e.g., 'Bad Request', 'Not Found')
     */
    statusMessage: string;
    /**
     * Whether this response is being streamed at a low-level.
     */
    streaming: boolean;
}
