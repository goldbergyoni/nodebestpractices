import {Service} from '../service';
import {ManagedUpload} from '../s3/managed_upload';
import S3 = require('../../clients/s3');

export class S3Customizations extends Service {
    /**
     * Get a pre-signed URL for a given operation name.
     */
    getSignedUrl(operation: string, params: any, callback: (err: Error, url: string) => void): void;
    /**
     * Get a pre-signed URL for a given operation name.
     */
    getSignedUrl(operation: string, params: any): string;

    /**
     * Get the form fields and target URL for direct POST uploading.
     */
    createPresignedPost(
        params: S3.PresignedPost.Params,
        callback: (err: Error, data: S3.PresignedPost) => void
    ): void;
    /**
     * Get the form fields and target URL for direct POST uploading.
     */
    createPresignedPost(params: S3.PresignedPost.Params): S3.PresignedPost;

    /**
     * Uploads an arbitrarily sized buffer, blob, or stream, using intelligent
     * concurrent handling of parts if the payload is large enough. You can
     * configure the concurrent queue size by setting `options`. Note that this
     * is the only operation for which the SDK can retry requests with stream
     * bodies.
     */
    upload(params: S3.Types.PutObjectRequest, options?: ManagedUpload.ManagedUploadOptions, callback?: (err: Error, data: ManagedUpload.SendData) => void): ManagedUpload;
    /**
     * Uploads an arbitrarily sized buffer, blob, or stream, using intelligent
     * concurrent handling of parts if the payload is large enough. You can
     * configure the concurrent queue size by setting `options`. Note that this
     * is the only operation for which the SDK can retry requests with stream
     * bodies.
     */
    upload(params: S3.Types.PutObjectRequest, callback?: (err: Error, data: ManagedUpload.SendData) => void): ManagedUpload;
    static ManagedUpload: typeof ManagedUpload;
}
