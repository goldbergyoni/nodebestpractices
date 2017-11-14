import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class DynamoDBStreams extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DynamoDBStreams.Types.ClientConfiguration)
  config: Config & DynamoDBStreams.Types.ClientConfiguration;
  /**
   * Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table.  You can call DescribeStream at a maximum rate of 10 times per second.  Each shard in the stream has a SequenceNumberRange associated with it. If the SequenceNumberRange has a StartingSequenceNumber but no EndingSequenceNumber, then the shard is still open (able to receive more stream records). If both StartingSequenceNumber and EndingSequenceNumber are present, then that shard is closed and can no longer receive more data.
   */
  describeStream(params: DynamoDBStreams.Types.DescribeStreamInput, callback?: (err: AWSError, data: DynamoDBStreams.Types.DescribeStreamOutput) => void): Request<DynamoDBStreams.Types.DescribeStreamOutput, AWSError>;
  /**
   * Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table.  You can call DescribeStream at a maximum rate of 10 times per second.  Each shard in the stream has a SequenceNumberRange associated with it. If the SequenceNumberRange has a StartingSequenceNumber but no EndingSequenceNumber, then the shard is still open (able to receive more stream records). If both StartingSequenceNumber and EndingSequenceNumber are present, then that shard is closed and can no longer receive more data.
   */
  describeStream(callback?: (err: AWSError, data: DynamoDBStreams.Types.DescribeStreamOutput) => void): Request<DynamoDBStreams.Types.DescribeStreamOutput, AWSError>;
  /**
   * Retrieves the stream records from a given shard. Specify a shard iterator using the ShardIterator parameter. The shard iterator specifies the position in the shard from which you want to start reading stream records sequentially. If there are no stream records available in the portion of the shard that the iterator points to, GetRecords returns an empty list. Note that it might take multiple calls to get to a portion of the shard that contains stream records.   GetRecords can retrieve a maximum of 1 MB of data or 1000 stream records, whichever comes first. 
   */
  getRecords(params: DynamoDBStreams.Types.GetRecordsInput, callback?: (err: AWSError, data: DynamoDBStreams.Types.GetRecordsOutput) => void): Request<DynamoDBStreams.Types.GetRecordsOutput, AWSError>;
  /**
   * Retrieves the stream records from a given shard. Specify a shard iterator using the ShardIterator parameter. The shard iterator specifies the position in the shard from which you want to start reading stream records sequentially. If there are no stream records available in the portion of the shard that the iterator points to, GetRecords returns an empty list. Note that it might take multiple calls to get to a portion of the shard that contains stream records.   GetRecords can retrieve a maximum of 1 MB of data or 1000 stream records, whichever comes first. 
   */
  getRecords(callback?: (err: AWSError, data: DynamoDBStreams.Types.GetRecordsOutput) => void): Request<DynamoDBStreams.Types.GetRecordsOutput, AWSError>;
  /**
   * Returns a shard iterator. A shard iterator provides information about how to retrieve the stream records from within a shard. Use the shard iterator in a subsequent GetRecords request to read the stream records from the shard.  A shard iterator expires 15 minutes after it is returned to the requester. 
   */
  getShardIterator(params: DynamoDBStreams.Types.GetShardIteratorInput, callback?: (err: AWSError, data: DynamoDBStreams.Types.GetShardIteratorOutput) => void): Request<DynamoDBStreams.Types.GetShardIteratorOutput, AWSError>;
  /**
   * Returns a shard iterator. A shard iterator provides information about how to retrieve the stream records from within a shard. Use the shard iterator in a subsequent GetRecords request to read the stream records from the shard.  A shard iterator expires 15 minutes after it is returned to the requester. 
   */
  getShardIterator(callback?: (err: AWSError, data: DynamoDBStreams.Types.GetShardIteratorOutput) => void): Request<DynamoDBStreams.Types.GetShardIteratorOutput, AWSError>;
  /**
   * Returns an array of stream ARNs associated with the current account and endpoint. If the TableName parameter is present, then ListStreams will return only the streams ARNs for that table.  You can call ListStreams at a maximum rate of 5 times per second. 
   */
  listStreams(params: DynamoDBStreams.Types.ListStreamsInput, callback?: (err: AWSError, data: DynamoDBStreams.Types.ListStreamsOutput) => void): Request<DynamoDBStreams.Types.ListStreamsOutput, AWSError>;
  /**
   * Returns an array of stream ARNs associated with the current account and endpoint. If the TableName parameter is present, then ListStreams will return only the streams ARNs for that table.  You can call ListStreams at a maximum rate of 5 times per second. 
   */
  listStreams(callback?: (err: AWSError, data: DynamoDBStreams.Types.ListStreamsOutput) => void): Request<DynamoDBStreams.Types.ListStreamsOutput, AWSError>;
}
declare namespace DynamoDBStreams {
  export type AttributeMap = {[key: string]: AttributeValue};
  export type AttributeName = string;
  export interface AttributeValue {
    /**
     * A String data type.
     */
    S?: StringAttributeValue;
    /**
     * A Number data type.
     */
    N?: NumberAttributeValue;
    /**
     * A Binary data type.
     */
    B?: BinaryAttributeValue;
    /**
     * A String Set data type.
     */
    SS?: StringSetAttributeValue;
    /**
     * A Number Set data type.
     */
    NS?: NumberSetAttributeValue;
    /**
     * A Binary Set data type.
     */
    BS?: BinarySetAttributeValue;
    /**
     * A Map data type.
     */
    M?: MapAttributeValue;
    /**
     * A List data type.
     */
    L?: ListAttributeValue;
    /**
     * A Null data type.
     */
    NULL?: NullAttributeValue;
    /**
     * A Boolean data type.
     */
    BOOL?: BooleanAttributeValue;
  }
  export type BinaryAttributeValue = Buffer|Uint8Array|Blob|string;
  export type BinarySetAttributeValue = BinaryAttributeValue[];
  export type BooleanAttributeValue = boolean;
  export type _Date = Date;
  export interface DescribeStreamInput {
    /**
     * The Amazon Resource Name (ARN) for the stream.
     */
    StreamArn: StreamArn;
    /**
     * The maximum number of shard objects to return. The upper limit is 100.
     */
    Limit?: PositiveIntegerObject;
    /**
     * The shard ID of the first item that this operation will evaluate. Use the value that was returned for LastEvaluatedShardId in the previous operation. 
     */
    ExclusiveStartShardId?: ShardId;
  }
  export interface DescribeStreamOutput {
    /**
     * A complete description of the stream, including its creation date and time, the DynamoDB table associated with the stream, the shard IDs within the stream, and the beginning and ending sequence numbers of stream records within the shards.
     */
    StreamDescription?: StreamDescription;
  }
  export type ErrorMessage = string;
  export interface GetRecordsInput {
    /**
     * A shard iterator that was retrieved from a previous GetShardIterator operation. This iterator can be used to access the stream records in this shard.
     */
    ShardIterator: ShardIterator;
    /**
     * The maximum number of records to return from the shard. The upper limit is 1000.
     */
    Limit?: PositiveIntegerObject;
  }
  export interface GetRecordsOutput {
    /**
     * The stream records from the shard, which were retrieved using the shard iterator.
     */
    Records?: RecordList;
    /**
     * The next position in the shard from which to start sequentially reading stream records. If set to null, the shard has been closed and the requested iterator will not return any more data.
     */
    NextShardIterator?: ShardIterator;
  }
  export interface GetShardIteratorInput {
    /**
     * The Amazon Resource Name (ARN) for the stream.
     */
    StreamArn: StreamArn;
    /**
     * The identifier of the shard. The iterator will be returned for this shard ID.
     */
    ShardId: ShardId;
    /**
     * Determines how the shard iterator is used to start reading stream records from the shard:    AT_SEQUENCE_NUMBER - Start reading exactly from the position denoted by a specific sequence number.    AFTER_SEQUENCE_NUMBER - Start reading right after the position denoted by a specific sequence number.    TRIM_HORIZON - Start reading at the last (untrimmed) stream record, which is the oldest record in the shard. In DynamoDB Streams, there is a 24 hour limit on data retention. Stream records whose age exceeds this limit are subject to removal (trimming) from the stream.    LATEST - Start reading just after the most recent stream record in the shard, so that you always read the most recent data in the shard.  
     */
    ShardIteratorType: ShardIteratorType;
    /**
     * The sequence number of a stream record in the shard from which to start reading.
     */
    SequenceNumber?: SequenceNumber;
  }
  export interface GetShardIteratorOutput {
    /**
     * The position in the shard from which to start reading stream records sequentially. A shard iterator specifies this position using the sequence number of a stream record in a shard.
     */
    ShardIterator?: ShardIterator;
  }
  export interface Identity {
    /**
     * A unique identifier for the entity that made the call. For Time To Live, the principalId is "dynamodb.amazonaws.com".
     */
    PrincipalId?: String;
    /**
     * The type of the identity. For Time To Live, the type is "Service".
     */
    Type?: String;
  }
  export type KeySchema = KeySchemaElement[];
  export type KeySchemaAttributeName = string;
  export interface KeySchemaElement {
    /**
     * The name of a key attribute.
     */
    AttributeName: KeySchemaAttributeName;
    /**
     * The attribute data, consisting of the data type and the attribute value itself.
     */
    KeyType: KeyType;
  }
  export type KeyType = "HASH"|"RANGE"|string;
  export type ListAttributeValue = AttributeValue[];
  export interface ListStreamsInput {
    /**
     * If this parameter is provided, then only the streams associated with this table name are returned.
     */
    TableName?: TableName;
    /**
     * The maximum number of streams to return. The upper limit is 100.
     */
    Limit?: PositiveIntegerObject;
    /**
     * The ARN (Amazon Resource Name) of the first item that this operation will evaluate. Use the value that was returned for LastEvaluatedStreamArn in the previous operation. 
     */
    ExclusiveStartStreamArn?: StreamArn;
  }
  export interface ListStreamsOutput {
    /**
     * A list of stream descriptors associated with the current account and endpoint.
     */
    Streams?: StreamList;
    /**
     * The stream ARN of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request. If LastEvaluatedStreamArn is empty, then the "last page" of results has been processed and there is no more data to be retrieved. If LastEvaluatedStreamArn is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when LastEvaluatedStreamArn is empty.
     */
    LastEvaluatedStreamArn?: StreamArn;
  }
  export type MapAttributeValue = {[key: string]: AttributeValue};
  export type NullAttributeValue = boolean;
  export type NumberAttributeValue = string;
  export type NumberSetAttributeValue = NumberAttributeValue[];
  export type OperationType = "INSERT"|"MODIFY"|"REMOVE"|string;
  export type PositiveIntegerObject = number;
  export type PositiveLongObject = number;
  export interface Record {
    /**
     * A globally unique identifier for the event that was recorded in this stream record.
     */
    eventID?: String;
    /**
     * The type of data modification that was performed on the DynamoDB table:    INSERT - a new item was added to the table.    MODIFY - one or more of an existing item's attributes were modified.    REMOVE - the item was deleted from the table  
     */
    eventName?: OperationType;
    /**
     * The version number of the stream record format. This number is updated whenever the structure of Record is modified. Client applications must not assume that eventVersion will remain at a particular value, as this number is subject to change at any time. In general, eventVersion will only increase as the low-level DynamoDB Streams API evolves.
     */
    eventVersion?: String;
    /**
     * The AWS service from which the stream record originated. For DynamoDB Streams, this is aws:dynamodb.
     */
    eventSource?: String;
    /**
     * The region in which the GetRecords request was received.
     */
    awsRegion?: String;
    /**
     * The main body of the stream record, containing all of the DynamoDB-specific fields.
     */
    dynamodb?: StreamRecord;
    /**
     * Items that are deleted by the Time to Live process after expiration have the following fields:    Records[].userIdentity.type "Service"   Records[].userIdentity.principalId "dynamodb.amazonaws.com"  
     */
    userIdentity?: Identity;
  }
  export type RecordList = Record[];
  export type SequenceNumber = string;
  export interface SequenceNumberRange {
    /**
     * The first sequence number.
     */
    StartingSequenceNumber?: SequenceNumber;
    /**
     * The last sequence number.
     */
    EndingSequenceNumber?: SequenceNumber;
  }
  export interface Shard {
    /**
     * The system-generated identifier for this shard.
     */
    ShardId?: ShardId;
    /**
     * The range of possible sequence numbers for the shard.
     */
    SequenceNumberRange?: SequenceNumberRange;
    /**
     * The shard ID of the current shard's parent.
     */
    ParentShardId?: ShardId;
  }
  export type ShardDescriptionList = Shard[];
  export type ShardId = string;
  export type ShardIterator = string;
  export type ShardIteratorType = "TRIM_HORIZON"|"LATEST"|"AT_SEQUENCE_NUMBER"|"AFTER_SEQUENCE_NUMBER"|string;
  export interface Stream {
    /**
     * The Amazon Resource Name (ARN) for the stream.
     */
    StreamArn?: StreamArn;
    /**
     * The DynamoDB table with which the stream is associated.
     */
    TableName?: TableName;
    /**
     * A timestamp, in ISO 8601 format, for this stream. Note that LatestStreamLabel is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique:   the AWS customer ID.   the table name   the StreamLabel   
     */
    StreamLabel?: String;
  }
  export type StreamArn = string;
  export interface StreamDescription {
    /**
     * The Amazon Resource Name (ARN) for the stream.
     */
    StreamArn?: StreamArn;
    /**
     * A timestamp, in ISO 8601 format, for this stream. Note that LatestStreamLabel is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique:   the AWS customer ID.   the table name   the StreamLabel   
     */
    StreamLabel?: String;
    /**
     * Indicates the current status of the stream:    ENABLING - Streams is currently being enabled on the DynamoDB table.    ENABLED - the stream is enabled.    DISABLING - Streams is currently being disabled on the DynamoDB table.    DISABLED - the stream is disabled.  
     */
    StreamStatus?: StreamStatus;
    /**
     * Indicates the format of the records within this stream:    KEYS_ONLY - only the key attributes of items that were modified in the DynamoDB table.    NEW_IMAGE - entire items from the table, as they appeared after they were modified.    OLD_IMAGE - entire items from the table, as they appeared before they were modified.    NEW_AND_OLD_IMAGES - both the new and the old images of the items from the table.  
     */
    StreamViewType?: StreamViewType;
    /**
     * The date and time when the request to create this stream was issued.
     */
    CreationRequestDateTime?: _Date;
    /**
     * The DynamoDB table with which the stream is associated.
     */
    TableName?: TableName;
    /**
     * The key attribute(s) of the stream's DynamoDB table.
     */
    KeySchema?: KeySchema;
    /**
     * The shards that comprise the stream.
     */
    Shards?: ShardDescriptionList;
    /**
     * The shard ID of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request. If LastEvaluatedShardId is empty, then the "last page" of results has been processed and there is currently no more data to be retrieved. If LastEvaluatedShardId is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when LastEvaluatedShardId is empty.
     */
    LastEvaluatedShardId?: ShardId;
  }
  export type StreamList = Stream[];
  export interface StreamRecord {
    /**
     * The approximate date and time when the stream record was created, in UNIX epoch time format.
     */
    ApproximateCreationDateTime?: _Date;
    /**
     * The primary key attribute(s) for the DynamoDB item that was modified.
     */
    Keys?: AttributeMap;
    /**
     * The item in the DynamoDB table as it appeared after it was modified.
     */
    NewImage?: AttributeMap;
    /**
     * The item in the DynamoDB table as it appeared before it was modified.
     */
    OldImage?: AttributeMap;
    /**
     * The sequence number of the stream record.
     */
    SequenceNumber?: SequenceNumber;
    /**
     * The size of the stream record, in bytes.
     */
    SizeBytes?: PositiveLongObject;
    /**
     * The type of data from the modified DynamoDB item that was captured in this stream record:    KEYS_ONLY - only the key attributes of the modified item.    NEW_IMAGE - the entire item, as it appeared after it was modified.    OLD_IMAGE - the entire item, as it appeared before it was modified.    NEW_AND_OLD_IMAGES - both the new and the old item images of the item.  
     */
    StreamViewType?: StreamViewType;
  }
  export type StreamStatus = "ENABLING"|"ENABLED"|"DISABLING"|"DISABLED"|string;
  export type StreamViewType = "NEW_IMAGE"|"OLD_IMAGE"|"NEW_AND_OLD_IMAGES"|"KEYS_ONLY"|string;
  export type String = string;
  export type StringAttributeValue = string;
  export type StringSetAttributeValue = StringAttributeValue[];
  export type TableName = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2012-08-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DynamoDBStreams client.
   */
  export import Types = DynamoDBStreams;
}
export = DynamoDBStreams;
