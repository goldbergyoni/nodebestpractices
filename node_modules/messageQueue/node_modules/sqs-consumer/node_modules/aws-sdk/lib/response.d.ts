import {HttpResponse} from './http_response';
import {Request} from './request';
export class Response<D, E> {
		/**
		 * Whether more pages of data can be returned by further requests.
		 */
		hasNextPage(): boolean;
		/**
		 * Creates a new request for the next page of response data, calling the callback with the page data if a callback is provided.
		 */
		nextPage(callback: (err: E, data: D) => void): Request<D, E>|void;
		/**
		 * The de-serialized response data from the service.
		 * Can be null if an error occurred.
		 */
		data: D|void
		/**
		 * A structure containing information about a service or networking error.
		 */
		error: E|void
		/**
		 * Returns the unique request ID associated with the response.
		 * Log this value when debugging requests for AWS support.
		 */
		requestId: string
		/**
		 * The number of redirects that were followed before the request was completed.
		 */
		redirectCount: number
		/**
		 * The number of retries that were attempted before the request was completed.
		 */
		retryCount: number
		/**
		 * The raw HTTP response object containing the response headers and body information from the server.
		 */
		httpResponse: HttpResponse;
	}