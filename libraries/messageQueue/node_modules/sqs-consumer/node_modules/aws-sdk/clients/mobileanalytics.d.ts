import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MobileAnalytics extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MobileAnalytics.Types.ClientConfiguration)
  config: Config & MobileAnalytics.Types.ClientConfiguration;
  /**
   * The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.
   */
  putEvents(params: MobileAnalytics.Types.PutEventsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.
   */
  putEvents(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace MobileAnalytics {
  export type Double = number;
  export interface Event {
    /**
     * A name signifying an event that occurred in your app. This is used for grouping and aggregating like events together for reporting purposes.
     */
    eventType: String50Chars;
    /**
     * The time the event occurred in ISO 8601 standard date time format. For example, 2014-06-30T19:07:47.885Z
     */
    timestamp: ISO8601Timestamp;
    /**
     * The session the event occured within. 
     */
    session?: Session;
    /**
     * The version of the event.
     */
    version?: String10Chars;
    /**
     * A collection of key-value pairs that give additional context to the event. The key-value pairs are specified by the developer. This collection can be empty or the attribute object can be omitted.
     */
    attributes?: MapOfStringToString;
    /**
     * A collection of key-value pairs that gives additional, measurable context to the event. The key-value pairs are specified by the developer. This collection can be empty or the attribute object can be omitted.
     */
    metrics?: MapOfStringToNumber;
  }
  export type EventListDefinition = Event[];
  export type ISO8601Timestamp = string;
  export type Long = number;
  export type MapOfStringToNumber = {[key: string]: Double};
  export type MapOfStringToString = {[key: string]: String0to1000Chars};
  export interface PutEventsInput {
    /**
     * An array of Event JSON objects
     */
    events: EventListDefinition;
    /**
     * The client context including the client ID, app title, app version and package name.
     */
    clientContext: String;
    /**
     * The encoding used for the client context.
     */
    clientContextEncoding?: String;
  }
  export interface Session {
    /**
     * A unique identifier for the session
     */
    id?: String50Chars;
    /**
     * The duration of the session.
     */
    duration?: Long;
    /**
     * The time the event started in ISO 8601 standard date time format. For example, 2014-06-30T19:07:47.885Z
     */
    startTimestamp?: ISO8601Timestamp;
    /**
     * The time the event terminated in ISO 8601 standard date time format. For example, 2014-06-30T19:07:47.885Z
     */
    stopTimestamp?: ISO8601Timestamp;
  }
  export type String = string;
  export type String0to1000Chars = string;
  export type String10Chars = string;
  export type String50Chars = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-06-05"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MobileAnalytics client.
   */
  export import Types = MobileAnalytics;
}
export = MobileAnalytics;
