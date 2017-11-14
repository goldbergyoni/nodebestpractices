export class Endpoint {
    /**
     * Constructs a new endpoint given an endpoint URL.
     */
    constructor(url: string);

    /**
     * The host portion of the endpoint including the port, e.g., example.com:80.
     */
    host: string;
    /**
     * The host portion of the endpoint, e.g., example.com.
     */
    hostname: string;
    /**
     * The full URL of the endpoint.
     */
    href: string;
    /**
     * The port of the endpoint.
     */
    port: number;
    /**
     * The protocol (http or https) of the endpoint URL.
     */
    protocol: string;
}