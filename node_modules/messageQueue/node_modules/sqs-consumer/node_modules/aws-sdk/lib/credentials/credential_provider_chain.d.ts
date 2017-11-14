import {Credentials} from '../credentials';
import {AWSError} from '../error';
export class CredentialProviderChain extends Credentials {
    /**
     * Creates a new CredentialProviderChain with a default set of providers specified by defaultProviders.
     */
    constructor(providers: provider[])
    /**
     * Resolves the provider chain by searching for the first set of credentials in providers.
     */
    resolve(callback:(err: AWSError, credentials: Credentials) => void): CredentialProviderChain;
    /**
     * Return a Promise on resolve() function
     */
    resolvePromise(): Promise<Credentials>;
    /**
     * Returns a list of credentials objects or functions that return credentials objects. If the provider is a function, the function will be executed lazily when the provider needs to be checked for valid credentials. By default, this object will be set to the defaultProviders.
     */
    providers: Credentials[]|provider[];

    static defaultProviders: provider[]
}

type provider = () => Credentials;
