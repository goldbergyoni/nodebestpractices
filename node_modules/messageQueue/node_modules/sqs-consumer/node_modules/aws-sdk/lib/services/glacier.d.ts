import {Service} from '../service';

export class GlacierCustomizations extends Service {
    /**
     * Computes the SHA-256 linear and tree hash checksums for a given
     * block of Buffer data. Pass the tree hash of the computed checksums
     * as the checksum input to the {completeMultipartUpload} when performing
     * a multi-part upload.
     */
    computeChecksums(data: Buffer|string): GlacierComputeChecksumsOutput;
}

export interface GlacierComputeChecksumsOutput {
    linearHash: string;
    treeHash: string;
}