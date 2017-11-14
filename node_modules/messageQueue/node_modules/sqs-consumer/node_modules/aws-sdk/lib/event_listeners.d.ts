/**
 * The namespace used to register global event listeners for request building and sending.
 */
export namespace EventListeners {
    /**
     * The namespace used to register global event listeners for request building and sending.
     */
    export namespace CORE {
        /**
         * Removes an event listener from all requests.
         */
        export function removeListener(eventName: string, eventListener: Function): void;
        /**
         * A request listener that reads data from the HTTP connection in order to build the response data. Handles the 'httpData' Request event. 
         * Remove this handler if you are overriding the 'httpData' event and do not want extra data processing and buffering overhead.
         */
        export function HTTP_DATA(): void;
        /**
         * A request listener that initiates the HTTP connection for a request being sent. Handles the 'send' Request event.
         */
        export function SEND(): void;
        /**
         * A request listener that validates whether the request is being sent with credentials. Handles the 'validate' Request event
         */
        export function VALIDATE_CREDENTIALS(): void;
        /**
         * A request listener that validates input parameters in a request. Handles the 'validate' Request event.
         */
        export function VALIDATE_PARAMETERS(): void;
        /**
         * A request listener that validates whether the region is set for a request. Handles the 'validate' Request event.
         */
        export function VALIDATE_REGION():void;
    }
}