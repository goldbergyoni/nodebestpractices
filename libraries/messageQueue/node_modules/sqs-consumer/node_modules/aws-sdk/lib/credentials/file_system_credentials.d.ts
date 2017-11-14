import {Credentials} from '../credentials';
export class FileSystemCredentials extends Credentials {
    /**
     * Creates a new FileSystemCredentials object from a filename.
     * @param {string} filename - The path on disk to the JSON file to load.
     */
    constructor(filename: string);
    /**
     * The path to the JSON file on disk containing the credentials.
     */
    filename: string
}