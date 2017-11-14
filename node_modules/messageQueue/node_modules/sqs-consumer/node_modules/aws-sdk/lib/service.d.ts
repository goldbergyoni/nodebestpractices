import {Request} from './request';
import {AWSError} from './error';
import {ConfigurationOptions, ConfigBase} from './config';
import {Endpoint} from './endpoint';

interface WaiterConfiguration {
    /**
     * The number of seconds to wait between requests
     */
    delay?: number;

    /**
     * The maximum number of requests to send while waiting
     */
    maxAttempts?: number;
}

export class Service {
    /**
     * Creates a new service object with a configuration object.
     */
    constructor(config?: ServiceConfigurationOptions);

    /**
     * Defines a new Service class using a service identifier and list of versions including an optional set of features (functions) to apply to the class prototype.
     * 
     * @param {string} serviceIdentifier - the identifier for the service.
     * @param {string[]} versions - a list of versions that work with this service.
     * @param {Object} features - an object to attach to the prototype.
     */
    defineService(serviceIdentifier: string, versions: string[], features?: any): typeof Service;
    /**
     * Calls an operation on a service with the given input parameters.
     * 
     * @param {string} operation - the name of the operation to call on the service.
     * @param {map} params - a map of input options for the operation. 
     */
    makeRequest(operation: string, params?: {[key: string]: any}, callback?: (err: AWSError, data: any) => void): Request<any, AWSError>;
    /**
     * Calls an operation on a service with the given input parameters, without any authentication data.
     * 
     * @param {string} operation - the name of the operation to call on the service.
     * @param {map} params - a map of input options for the operation. 
     */
    makeUnauthenticatedRequest(operation: string, params?: {[key: string]: any}, callback?: (err: AWSError, data: any) => void): Request<any, AWSError>;
    /**
     * Override this method to setup any custom request listeners for each new request to the service.
     */
    setupRequestListeners(): void;
    /**
     * Waits for a given state.
     */
    waitFor(state: string, params?: {[key: string]: any, $waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: any) => void): Request<any, AWSError>;
    waitFor(state: string, callback?: (err: AWSError, data: any) => void): Request<any, AWSError>;

    /**
     * The list of API versions supported by this service.
     */
    apiVersions: string[];

    config: ConfigBase & ServiceConfigurationOptions;

    /**
     * An Endpoint object representing the endpoint URL for service requests.
     */
    endpoint: Endpoint;
}

export interface ServiceConfigurationOptions extends ConfigurationOptions {
    /**
     * The endpoint URI to send requests to. The default endpoint is built from the configured region. 
     * The endpoint should be a string like 'https://{service}.{region}.amazonaws.com'.
     */
    endpoint?: string;
    /**
     * An optional map of parameters to bind to every request sent by this service object. 
     * For more information on bound parameters, see "Working with Services" in the Getting Started Guide.
     */
    params?: {
        [key: string]: any;
    }
}

