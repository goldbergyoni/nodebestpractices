import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class IotData extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: IotData.Types.ClientConfiguration)
  config: Config & IotData.Types.ClientConfiguration;
  /**
   * Deletes the thing shadow for the specified thing. For more information, see DeleteThingShadow in the AWS IoT Developer Guide.
   */
  deleteThingShadow(params: IotData.Types.DeleteThingShadowRequest, callback?: (err: AWSError, data: IotData.Types.DeleteThingShadowResponse) => void): Request<IotData.Types.DeleteThingShadowResponse, AWSError>;
  /**
   * Deletes the thing shadow for the specified thing. For more information, see DeleteThingShadow in the AWS IoT Developer Guide.
   */
  deleteThingShadow(callback?: (err: AWSError, data: IotData.Types.DeleteThingShadowResponse) => void): Request<IotData.Types.DeleteThingShadowResponse, AWSError>;
  /**
   * Gets the thing shadow for the specified thing. For more information, see GetThingShadow in the AWS IoT Developer Guide.
   */
  getThingShadow(params: IotData.Types.GetThingShadowRequest, callback?: (err: AWSError, data: IotData.Types.GetThingShadowResponse) => void): Request<IotData.Types.GetThingShadowResponse, AWSError>;
  /**
   * Gets the thing shadow for the specified thing. For more information, see GetThingShadow in the AWS IoT Developer Guide.
   */
  getThingShadow(callback?: (err: AWSError, data: IotData.Types.GetThingShadowResponse) => void): Request<IotData.Types.GetThingShadowResponse, AWSError>;
  /**
   * Publishes state information. For more information, see HTTP Protocol in the AWS IoT Developer Guide.
   */
  publish(params: IotData.Types.PublishRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Publishes state information. For more information, see HTTP Protocol in the AWS IoT Developer Guide.
   */
  publish(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the thing shadow for the specified thing. For more information, see UpdateThingShadow in the AWS IoT Developer Guide.
   */
  updateThingShadow(params: IotData.Types.UpdateThingShadowRequest, callback?: (err: AWSError, data: IotData.Types.UpdateThingShadowResponse) => void): Request<IotData.Types.UpdateThingShadowResponse, AWSError>;
  /**
   * Updates the thing shadow for the specified thing. For more information, see UpdateThingShadow in the AWS IoT Developer Guide.
   */
  updateThingShadow(callback?: (err: AWSError, data: IotData.Types.UpdateThingShadowResponse) => void): Request<IotData.Types.UpdateThingShadowResponse, AWSError>;
}
declare namespace IotData {
  export interface DeleteThingShadowRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
  }
  export interface DeleteThingShadowResponse {
    /**
     * The state information, in JSON format.
     */
    payload: JsonDocument;
  }
  export type ErrorMessage = string;
  export interface GetThingShadowRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
  }
  export interface GetThingShadowResponse {
    /**
     * The state information, in JSON format.
     */
    payload?: JsonDocument;
  }
  export type JsonDocument = Buffer|Uint8Array|Blob|string;
  export type Payload = Buffer|Uint8Array|Blob|string;
  export interface PublishRequest {
    /**
     * The name of the MQTT topic.
     */
    topic: Topic;
    /**
     * The Quality of Service (QoS) level.
     */
    qos?: Qos;
    /**
     * The state information, in JSON format.
     */
    payload?: Payload;
  }
  export type Qos = number;
  export type ThingName = string;
  export type Topic = string;
  export interface UpdateThingShadowRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
    /**
     * The state information, in JSON format.
     */
    payload: JsonDocument;
  }
  export interface UpdateThingShadowResponse {
    /**
     * The state information, in JSON format.
     */
    payload?: JsonDocument;
  }
  export type errorMessage = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-05-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the IotData client.
   */
  export import Types = IotData;
}
export = IotData;
