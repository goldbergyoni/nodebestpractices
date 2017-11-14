import {AWSError} from '../error';
import S3 = require('../../clients/s3');
export class ManagedUpload {
    /**
     * Creates a managed upload object with a set of configuration options.
     */
    constructor(options: ManagedUpload.ManagedUploadOptions);
    /**
     * Aborts a managed upload, including all concurrent upload requests.
     */
    abort(): void;
    /**
     * Returns a 'thenable' promise.
     */
    promise(): Promise<ManagedUpload.SendData>;
    /**
     * Initiates the managed upload for the payload.
     */
    send(callback?: (err: AWSError, data: ManagedUpload.SendData) => void): void;
    /**
     * Adds a listener that is triggered when theuploader has uploaded more data.
     *
     * @param {string} event - httpUploadProgress: triggered when the uploader has uploaded more data.
     * @param {function} listener - Callback to run when the uploader has uploaded more data.
     */
    on(event: "httpUploadProgress", listener: (progress: ManagedUpload.Progress) => void): any;
    /**
     * Default value: 10000
     */
    static maxTotalParts: number
    /**
     * Returns the minimum number of bytes for an individual part upload.
     * Note: Minimum allowed size is 5 MB.
     * 1024 * 5
     */
    static minPartSize: number
}
export namespace ManagedUpload {
    export interface Progress {
        loaded: number;
        total: number;
    }
    export interface SendData {
        /**
         * URL of the uploaded object.
         */
        Location: string;
        /**
         * ETag of the uploaded object.
         */
        ETag: string;
        /**
         * Bucket to which the object was uploaded.
         */
        Bucket: string;
        /**
         * Key to which the object was uploaded.
         */
        Key: string;
    }
    export interface ManagedUploadOptions {
        /**
         * A map of parameters to pass to the upload requests.
         * The "Body" parameter is required to be specified either on the service or in the params option.
         */
        params?: S3.Types.PutObjectRequest;
        /**
         * The size of the concurrent queue manager to upload parts in parallel. Set to 1 for synchronous uploading of parts. Note that the uploader will buffer at most queueSize * partSize bytes into memory at any given time.
         * default: 4
         */
        queueSize?: number;
        /**
         * Default: 5 mb
         * The size in bytes for each individual part to be uploaded. Adjust the part size to ensure the number of parts does not exceed maxTotalParts. See minPartSize for the minimum allowed part size.
         */
        partSize?: number;
        /**
         * Default: false
         * Whether to abort the multipart upload if an error occurs. Set to true if you want to handle failures manually.
         */
        leavePartsOnError?: boolean;
        /**
         * An optional S3 service object to use for requests.
         * This object might have bound parameters used by the uploader.
         */
        service?: S3;
        /**
         * The tags to apply to the object.
         */
        tags?: Array<S3.Tag>;
    }
}
