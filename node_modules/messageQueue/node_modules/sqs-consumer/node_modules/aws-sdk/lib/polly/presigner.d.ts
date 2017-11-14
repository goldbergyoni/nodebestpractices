import Polly = require('../../clients/polly');
import {AWSError} from '../error';
/**
 * A presigner object can be used to generate presigned urls for the Polly service.
 */
export class Presigner {
  /**
   * Creates a presigner object with a set of configuration options.
   */
  constructor(options?: Presigner.PresignerOptions)
  /**
   * Generate a signed URL.
   */
  getSynthesizeSpeechUrl(params: Polly.Types.SynthesizeSpeechInput, error: number, callback: (err: AWSError, url: string) => void): void;
  /**
   * Generate a signed URL.
   */
  getSynthesizeSpeechUrl(params: Polly.Types.SynthesizeSpeechInput, callback: (err: AWSError, url: string) => void): void;
  /**
   * Generate a signed URL.
   */
  getSynthesizeSpeechUrl(params: Polly.Types.SynthesizeSpeechInput, expires?: number): string;
}

export namespace Presigner {
  export import GetSynthesizeSpeechUrlInput = Polly.Types.SynthesizeSpeechInput;
  export interface PresignerOptions {
    /**
     * An optional map of parameters to bind to every request sent by this service object. 
     */
    params?: {[key: string]: any}
    /**
     * An optional pre-configured instance of the AWS.Polly service object to use for requests. The object may bound parameters used by the presigner.
     */
    service?: Polly;
  }
}