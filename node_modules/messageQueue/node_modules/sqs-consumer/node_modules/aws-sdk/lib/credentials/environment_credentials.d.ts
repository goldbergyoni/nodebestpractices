import {Credentials} from '../credentials';
export class EnvironmentCredentials extends Credentials {
    /**
     * Creates a new EnvironmentCredentials class with a given variable prefix envPrefix.
     * @param {string} envPrefix - The prefix for the environment variable names excluding the separating underscore.
     */
    constructor(envPrefix: string);
}