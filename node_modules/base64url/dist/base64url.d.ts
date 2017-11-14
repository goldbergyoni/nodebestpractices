/// <reference path="../typings/index.d.ts" />
export interface Base64Url {
    (input: string | Buffer, encoding?: string): string;
    encode(input: string | Buffer, encoding?: string): string;
    decode(base64url: string, encoding?: string): string;
    toBase64(base64url: string | Buffer): string;
    fromBase64(base64: string): string;
    toBuffer(base64url: string): Buffer;
}
declare let base64url: Base64Url;
export default base64url;
