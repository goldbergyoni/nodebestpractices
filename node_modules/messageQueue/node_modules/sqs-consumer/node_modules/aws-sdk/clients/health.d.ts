import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Health extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Health.Types.ClientConfiguration)
  config: Config & Health.Types.ClientConfiguration;
  /**
   * Returns a list of entities that have been affected by the specified events, based on the specified filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the AWS service. Events that have impact beyond that of the affected entities, or where the extent of impact is unknown, include at least one entity indicating this. At least one event ARN is required. Results are sorted by the lastUpdatedTime of the entity, starting with the most recent.
   */
  describeAffectedEntities(params: Health.Types.DescribeAffectedEntitiesRequest, callback?: (err: AWSError, data: Health.Types.DescribeAffectedEntitiesResponse) => void): Request<Health.Types.DescribeAffectedEntitiesResponse, AWSError>;
  /**
   * Returns a list of entities that have been affected by the specified events, based on the specified filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the AWS service. Events that have impact beyond that of the affected entities, or where the extent of impact is unknown, include at least one entity indicating this. At least one event ARN is required. Results are sorted by the lastUpdatedTime of the entity, starting with the most recent.
   */
  describeAffectedEntities(callback?: (err: AWSError, data: Health.Types.DescribeAffectedEntitiesResponse) => void): Request<Health.Types.DescribeAffectedEntitiesResponse, AWSError>;
  /**
   * Returns the number of entities that are affected by each of the specified events. If no events are specified, the counts of all affected entities are returned.
   */
  describeEntityAggregates(params: Health.Types.DescribeEntityAggregatesRequest, callback?: (err: AWSError, data: Health.Types.DescribeEntityAggregatesResponse) => void): Request<Health.Types.DescribeEntityAggregatesResponse, AWSError>;
  /**
   * Returns the number of entities that are affected by each of the specified events. If no events are specified, the counts of all affected entities are returned.
   */
  describeEntityAggregates(callback?: (err: AWSError, data: Health.Types.DescribeEntityAggregatesResponse) => void): Request<Health.Types.DescribeEntityAggregatesResponse, AWSError>;
  /**
   * Returns the number of events of each event type (issue, scheduled change, and account notification). If no filter is specified, the counts of all events in each category are returned.
   */
  describeEventAggregates(params: Health.Types.DescribeEventAggregatesRequest, callback?: (err: AWSError, data: Health.Types.DescribeEventAggregatesResponse) => void): Request<Health.Types.DescribeEventAggregatesResponse, AWSError>;
  /**
   * Returns the number of events of each event type (issue, scheduled change, and account notification). If no filter is specified, the counts of all events in each category are returned.
   */
  describeEventAggregates(callback?: (err: AWSError, data: Health.Types.DescribeEventAggregatesResponse) => void): Request<Health.Types.DescribeEventAggregatesResponse, AWSError>;
  /**
   * Returns detailed information about one or more specified events. Information includes standard event data (region, service, etc., as returned by DescribeEvents), a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included; to retrieve those, use the DescribeAffectedEntities operation. If a specified event cannot be retrieved, an error message is returned for that event.
   */
  describeEventDetails(params: Health.Types.DescribeEventDetailsRequest, callback?: (err: AWSError, data: Health.Types.DescribeEventDetailsResponse) => void): Request<Health.Types.DescribeEventDetailsResponse, AWSError>;
  /**
   * Returns detailed information about one or more specified events. Information includes standard event data (region, service, etc., as returned by DescribeEvents), a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included; to retrieve those, use the DescribeAffectedEntities operation. If a specified event cannot be retrieved, an error message is returned for that event.
   */
  describeEventDetails(callback?: (err: AWSError, data: Health.Types.DescribeEventDetailsResponse) => void): Request<Health.Types.DescribeEventDetailsResponse, AWSError>;
  /**
   * Returns the event types that meet the specified filter criteria. If no filter criteria are specified, all event types are returned, in no particular order.
   */
  describeEventTypes(params: Health.Types.DescribeEventTypesRequest, callback?: (err: AWSError, data: Health.Types.DescribeEventTypesResponse) => void): Request<Health.Types.DescribeEventTypesResponse, AWSError>;
  /**
   * Returns the event types that meet the specified filter criteria. If no filter criteria are specified, all event types are returned, in no particular order.
   */
  describeEventTypes(callback?: (err: AWSError, data: Health.Types.DescribeEventTypesResponse) => void): Request<Health.Types.DescribeEventTypesResponse, AWSError>;
  /**
   * Returns information about events that meet the specified filter criteria. Events are returned in a summary form and do not include the detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the DescribeEventDetails and DescribeAffectedEntities operations. If no filter criteria are specified, all events are returned. Results are sorted by lastModifiedTime, starting with the most recent.
   */
  describeEvents(params: Health.Types.DescribeEventsRequest, callback?: (err: AWSError, data: Health.Types.DescribeEventsResponse) => void): Request<Health.Types.DescribeEventsResponse, AWSError>;
  /**
   * Returns information about events that meet the specified filter criteria. Events are returned in a summary form and do not include the detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the DescribeEventDetails and DescribeAffectedEntities operations. If no filter criteria are specified, all events are returned. Results are sorted by lastModifiedTime, starting with the most recent.
   */
  describeEvents(callback?: (err: AWSError, data: Health.Types.DescribeEventsResponse) => void): Request<Health.Types.DescribeEventsResponse, AWSError>;
}
declare namespace Health {
  export interface AffectedEntity {
    /**
     * The unique identifier for the entity. Format: arn:aws:health:entity-region:aws-account:entity/entity-id . Example: arn:aws:health:us-east-1:111222333444:entity/AVh5GGT7ul1arKr1sE1K 
     */
    entityArn?: entityArn;
    /**
     * The unique identifier for the event. Format: arn:aws:health:event-region::event/EVENT_TYPE_PLUS_ID . Example: arn:aws:health:us-east-1::event/AWS_EC2_MAINTENANCE_5331 
     */
    eventArn?: eventArn;
    /**
     * The ID of the affected entity.
     */
    entityValue?: entityValue;
    /**
     * The 12-digit AWS account number that contains the affected entity.
     */
    awsAccountId?: accountId;
    /**
     * The most recent time that the entity was updated.
     */
    lastUpdatedTime?: timestamp;
    /**
     * The most recent status of the entity affected by the event. The possible values are IMPAIRED, UNIMPAIRED, and UNKNOWN.
     */
    statusCode?: entityStatusCode;
    /**
     * A map of entity tags attached to the affected entity.
     */
    tags?: tagSet;
  }
  export interface DateTimeRange {
    /**
     * The starting date and time of a time range.
     */
    from?: timestamp;
    /**
     * The ending date and time of a time range.
     */
    to?: timestamp;
  }
  export interface DescribeAffectedEntitiesRequest {
    /**
     * Values to narrow the results returned. At least one event ARN is required. 
     */
    filter: EntityFilter;
    /**
     * The locale (language) to return information in. English (en) is the default and the only supported value at this time.
     */
    locale?: locale;
    /**
     * If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
     */
    nextToken?: nextToken;
    /**
     * The maximum number of items to return in one batch, between 10 and 100, inclusive.
     */
    maxResults?: maxResults;
  }
  export interface DescribeAffectedEntitiesResponse {
    /**
     * The entities that match the filter criteria.
     */
    entities?: EntityList;
    /**
     * If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
     */
    nextToken?: nextToken;
  }
  export interface DescribeEntityAggregatesRequest {
    /**
     * A list of event ARNs (unique identifiers). For example: "arn:aws:health:us-east-1::event/AWS_EC2_MAINTENANCE_5331", "arn:aws:health:us-west-1::event/AWS_EBS_LOST_VOLUME_xyz" 
     */
    eventArns?: EventArnsList;
  }
  export interface DescribeEntityAggregatesResponse {
    /**
     * The number of entities that are affected by each of the specified events.
     */
    entityAggregates?: EntityAggregateList;
  }
  export interface DescribeEventAggregatesRequest {
    /**
     * Values to narrow the results returned.
     */
    filter?: EventFilter;
    /**
     * The only currently supported value is eventTypeCategory.
     */
    aggregateField: eventAggregateField;
    /**
     * The maximum number of items to return in one batch, between 10 and 100, inclusive.
     */
    maxResults?: maxResults;
    /**
     * If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
     */
    nextToken?: nextToken;
  }
  export interface DescribeEventAggregatesResponse {
    /**
     * The number of events in each category that meet the optional filter criteria.
     */
    eventAggregates?: EventAggregateList;
    /**
     * If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
     */
    nextToken?: nextToken;
  }
  export type DescribeEventDetailsFailedSet = EventDetailsErrorItem[];
  export interface DescribeEventDetailsRequest {
    /**
     * A list of event ARNs (unique identifiers). For example: "arn:aws:health:us-east-1::event/AWS_EC2_MAINTENANCE_5331", "arn:aws:health:us-west-1::event/AWS_EBS_LOST_VOLUME_xyz" 
     */
    eventArns: eventArnList;
    /**
     * The locale (language) to return information in. English (en) is the default and the only supported value at this time.
     */
    locale?: locale;
  }
  export interface DescribeEventDetailsResponse {
    /**
     * Information about the events that could be retrieved.
     */
    successfulSet?: DescribeEventDetailsSuccessfulSet;
    /**
     * Error messages for any events that could not be retrieved.
     */
    failedSet?: DescribeEventDetailsFailedSet;
  }
  export type DescribeEventDetailsSuccessfulSet = EventDetails[];
  export interface DescribeEventTypesRequest {
    /**
     * Values to narrow the results returned.
     */
    filter?: EventTypeFilter;
    /**
     * The locale (language) to return information in. English (en) is the default and the only supported value at this time.
     */
    locale?: locale;
    /**
     * If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
     */
    nextToken?: nextToken;
    /**
     * The maximum number of items to return in one batch, between 10 and 100, inclusive.
     */
    maxResults?: maxResults;
  }
  export interface DescribeEventTypesResponse {
    /**
     * A list of event types that match the filter criteria. Event types have a category (issue, accountNotification, or scheduledChange), a service (for example, EC2, RDS, DATAPIPELINE, BILLING), and a code (in the format AWS_SERVICE_DESCRIPTION ; for example, AWS_EC2_SYSTEM_MAINTENANCE_EVENT).
     */
    eventTypes?: EventTypeList;
    /**
     * If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
     */
    nextToken?: nextToken;
  }
  export interface DescribeEventsRequest {
    /**
     * Values to narrow the results returned.
     */
    filter?: EventFilter;
    /**
     * If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
     */
    nextToken?: nextToken;
    /**
     * The maximum number of items to return in one batch, between 10 and 100, inclusive.
     */
    maxResults?: maxResults;
    /**
     * The locale (language) to return information in. English (en) is the default and the only supported value at this time.
     */
    locale?: locale;
  }
  export interface DescribeEventsResponse {
    /**
     * The events that match the specified filter criteria.
     */
    events?: EventList;
    /**
     * If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
     */
    nextToken?: nextToken;
  }
  export interface EntityAggregate {
    /**
     * The unique identifier for the event. Format: arn:aws:health:event-region::event/EVENT_TYPE_PLUS_ID . Example: arn:aws:health:us-east-1::event/AWS_EC2_MAINTENANCE_5331 
     */
    eventArn?: eventArn;
    /**
     * The number entities that match the criteria for the specified events.
     */
    count?: count;
  }
  export type EntityAggregateList = EntityAggregate[];
  export interface EntityFilter {
    /**
     * A list of event ARNs (unique identifiers). For example: "arn:aws:health:us-east-1::event/AWS_EC2_MAINTENANCE_5331", "arn:aws:health:us-west-1::event/AWS_EBS_LOST_VOLUME_xyz" 
     */
    eventArns: eventArnList;
    /**
     * A list of entity ARNs (unique identifiers).
     */
    entityArns?: entityArnList;
    /**
     * A list of IDs for affected entities.
     */
    entityValues?: entityValueList;
    /**
     * A list of the most recent dates and times that the entity was updated.
     */
    lastUpdatedTimes?: dateTimeRangeList;
    /**
     * A map of entity tags attached to the affected entity.
     */
    tags?: tagFilter;
    /**
     * A list of entity status codes (IMPAIRED, UNIMPAIRED, or UNKNOWN).
     */
    statusCodes?: entityStatusCodeList;
  }
  export type EntityList = AffectedEntity[];
  export interface Event {
    /**
     * The unique identifier for the event. Format: arn:aws:health:event-region::event/EVENT_TYPE_PLUS_ID . Example: arn:aws:health:us-east-1::event/AWS_EC2_MAINTENANCE_5331 
     */
    arn?: eventArn;
    /**
     * The AWS service that is affected by the event. For example, EC2, RDS.
     */
    service?: service;
    /**
     * The unique identifier for the event type. The format is AWS_SERVICE_DESCRIPTION ; for example, AWS_EC2_SYSTEM_MAINTENANCE_EVENT.
     */
    eventTypeCode?: eventTypeCode;
    /**
     * The 
     */
    eventTypeCategory?: eventTypeCategory;
    /**
     * The AWS region name of the event.
     */
    region?: region;
    /**
     * The AWS Availability Zone of the event. For example, us-east-1a.
     */
    availabilityZone?: availabilityZone;
    /**
     * The date and time that the event began.
     */
    startTime?: timestamp;
    /**
     * The date and time that the event ended.
     */
    endTime?: timestamp;
    /**
     * The most recent date and time that the event was updated.
     */
    lastUpdatedTime?: timestamp;
    /**
     * The most recent status of the event. Possible values are open, closed, and upcoming.
     */
    statusCode?: eventStatusCode;
  }
  export interface EventAggregate {
    /**
     * The issue type for the associated count.
     */
    aggregateValue?: aggregateValue;
    /**
     * The number of events of the associated issue type.
     */
    count?: count;
  }
  export type EventAggregateList = EventAggregate[];
  export type EventArnsList = eventArn[];
  export interface EventDescription {
    /**
     * The most recent description of the event.
     */
    latestDescription?: eventDescription;
  }
  export interface EventDetails {
    /**
     * Summary information about the event.
     */
    event?: Event;
    /**
     * The most recent description of the event.
     */
    eventDescription?: EventDescription;
    /**
     * Additional metadata about the event.
     */
    eventMetadata?: eventMetadata;
  }
  export interface EventDetailsErrorItem {
    /**
     * The unique identifier for the event. Format: arn:aws:health:event-region::event/EVENT_TYPE_PLUS_ID . Example: arn:aws:health:us-east-1::event/AWS_EC2_MAINTENANCE_5331 
     */
    eventArn?: eventArn;
    /**
     * The name of the error.
     */
    errorName?: string;
    /**
     * A message that describes the error.
     */
    errorMessage?: string;
  }
  export interface EventFilter {
    /**
     * A list of event ARNs (unique identifiers). For example: "arn:aws:health:us-east-1::event/AWS_EC2_MAINTENANCE_5331", "arn:aws:health:us-west-1::event/AWS_EBS_LOST_VOLUME_xyz" 
     */
    eventArns?: eventArnList;
    /**
     * A list of unique identifiers for event types. For example, "AWS_EC2_SYSTEM_MAINTENANCE_EVENT","AWS_RDS_MAINTENANCE_SCHEDULED" 
     */
    eventTypeCodes?: eventTypeList;
    /**
     * The AWS services associated with the event. For example, EC2, RDS.
     */
    services?: serviceList;
    /**
     * A list of AWS regions.
     */
    regions?: regionList;
    /**
     * A list of AWS availability zones.
     */
    availabilityZones?: availabilityZones;
    /**
     * A list of dates and times that the event began.
     */
    startTimes?: dateTimeRangeList;
    /**
     * A list of dates and times that the event ended.
     */
    endTimes?: dateTimeRangeList;
    /**
     * A list of dates and times that the event was last updated.
     */
    lastUpdatedTimes?: dateTimeRangeList;
    /**
     * A list of entity ARNs (unique identifiers).
     */
    entityArns?: entityArnList;
    /**
     * A list of entity identifiers, such as EC2 instance IDs (i-34ab692e) or EBS volumes (vol-426ab23e).
     */
    entityValues?: entityValueList;
    /**
     * A list of event type category codes (issue, scheduledChange, or accountNotification).
     */
    eventTypeCategories?: eventTypeCategoryList;
    /**
     * A map of entity tags attached to the affected entity.
     */
    tags?: tagFilter;
    /**
     * A list of event status codes.
     */
    eventStatusCodes?: eventStatusCodeList;
  }
  export type EventList = Event[];
  export interface EventType {
    /**
     * The AWS service that is affected by the event. For example, EC2, RDS.
     */
    service?: service;
    /**
     * The unique identifier for the event type. The format is AWS_SERVICE_DESCRIPTION ; for example, AWS_EC2_SYSTEM_MAINTENANCE_EVENT.
     */
    code?: eventTypeCode;
    /**
     * A list of event type category codes (issue, scheduledChange, or accountNotification).
     */
    category?: eventTypeCategory;
  }
  export type EventTypeCategoryList = eventTypeCategory[];
  export type EventTypeCodeList = eventTypeCode[];
  export interface EventTypeFilter {
    /**
     * A list of event type codes.
     */
    eventTypeCodes?: EventTypeCodeList;
    /**
     * The AWS services associated with the event. For example, EC2, RDS.
     */
    services?: serviceList;
    /**
     * A list of event type category codes (issue, scheduledChange, or accountNotification).
     */
    eventTypeCategories?: EventTypeCategoryList;
  }
  export type EventTypeList = EventType[];
  export type accountId = string;
  export type aggregateValue = string;
  export type availabilityZone = string;
  export type availabilityZones = availabilityZone[];
  export type count = number;
  export type dateTimeRangeList = DateTimeRange[];
  export type entityArn = string;
  export type entityArnList = entityArn[];
  export type entityStatusCode = "IMPAIRED"|"UNIMPAIRED"|"UNKNOWN"|string;
  export type entityStatusCodeList = entityStatusCode[];
  export type entityValue = string;
  export type entityValueList = entityValue[];
  export type eventAggregateField = "eventTypeCategory"|string;
  export type eventArn = string;
  export type eventArnList = eventArn[];
  export type eventDescription = string;
  export type eventMetadata = {[key: string]: metadataValue};
  export type eventStatusCode = "open"|"closed"|"upcoming"|string;
  export type eventStatusCodeList = eventStatusCode[];
  export type eventType = string;
  export type eventTypeCategory = "issue"|"accountNotification"|"scheduledChange"|string;
  export type eventTypeCategoryList = eventTypeCategory[];
  export type eventTypeCode = string;
  export type eventTypeList = eventType[];
  export type locale = string;
  export type maxResults = number;
  export type metadataKey = string;
  export type metadataValue = string;
  export type nextToken = string;
  export type region = string;
  export type regionList = region[];
  export type service = string;
  export type serviceList = service[];
  export type tagFilter = tagSet[];
  export type tagKey = string;
  export type tagSet = {[key: string]: tagValue};
  export type tagValue = string;
  export type timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-08-04"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Health client.
   */
  export import Types = Health;
}
export = Health;
