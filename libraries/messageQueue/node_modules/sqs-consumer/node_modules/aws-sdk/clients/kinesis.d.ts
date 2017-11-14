import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Kinesis extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Kinesis.Types.ClientConfiguration)
  config: Config & Kinesis.Types.ClientConfiguration;
  /**
   * Adds or updates tags for the specified Amazon Kinesis stream. Each stream can have up to 10 tags. If tags have already been assigned to the stream, AddTagsToStream overwrites any existing tags that correspond to the specified tag keys.
   */
  addTagsToStream(params: Kinesis.Types.AddTagsToStreamInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or updates tags for the specified Amazon Kinesis stream. Each stream can have up to 10 tags. If tags have already been assigned to the stream, AddTagsToStream overwrites any existing tags that correspond to the specified tag keys.
   */
  addTagsToStream(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates an Amazon Kinesis stream. A stream captures and transports data records that are continuously emitted from different data sources or producers. Scale-out within a stream is explicitly supported by means of shards, which are uniquely identified groups of data records in a stream. You specify and control the number of shards that a stream is composed of. Each shard can support reads up to 5 transactions per second, up to a maximum data read total of 2 MB per second. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MB per second. You can add shards to a stream if the amount of data input increases and you can remove shards if the amount of data input decreases. The stream name identifies the stream. The name is scoped to the AWS account used by the application. It is also scoped by region. That is, two streams in two different accounts can have the same name, and two streams in the same account, but in two different regions, can have the same name.  CreateStream is an asynchronous operation. Upon receiving a CreateStream request, Amazon Kinesis immediately returns and sets the stream status to CREATING. After the stream is created, Amazon Kinesis sets the stream status to ACTIVE. You should perform read and write operations only on an ACTIVE stream.  You receive a LimitExceededException when making a CreateStream request if you try to do one of the following:   Have more than five streams in the CREATING state at any point in time.   Create more shards than are authorized for your account.   For the default shard limit for an AWS account, see Streams Limits in the Amazon Kinesis Streams Developer Guide. If you need to increase this limit, contact AWS Support. You can use DescribeStream to check the stream status, which is returned in StreamStatus.  CreateStream has a limit of 5 transactions per second per account.
   */
  createStream(params: Kinesis.Types.CreateStreamInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates an Amazon Kinesis stream. A stream captures and transports data records that are continuously emitted from different data sources or producers. Scale-out within a stream is explicitly supported by means of shards, which are uniquely identified groups of data records in a stream. You specify and control the number of shards that a stream is composed of. Each shard can support reads up to 5 transactions per second, up to a maximum data read total of 2 MB per second. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MB per second. You can add shards to a stream if the amount of data input increases and you can remove shards if the amount of data input decreases. The stream name identifies the stream. The name is scoped to the AWS account used by the application. It is also scoped by region. That is, two streams in two different accounts can have the same name, and two streams in the same account, but in two different regions, can have the same name.  CreateStream is an asynchronous operation. Upon receiving a CreateStream request, Amazon Kinesis immediately returns and sets the stream status to CREATING. After the stream is created, Amazon Kinesis sets the stream status to ACTIVE. You should perform read and write operations only on an ACTIVE stream.  You receive a LimitExceededException when making a CreateStream request if you try to do one of the following:   Have more than five streams in the CREATING state at any point in time.   Create more shards than are authorized for your account.   For the default shard limit for an AWS account, see Streams Limits in the Amazon Kinesis Streams Developer Guide. If you need to increase this limit, contact AWS Support. You can use DescribeStream to check the stream status, which is returned in StreamStatus.  CreateStream has a limit of 5 transactions per second per account.
   */
  createStream(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Decreases the Amazon Kinesis stream's retention period, which is the length of time data records are accessible after they are added to the stream. The minimum value of a stream's retention period is 24 hours. This operation may result in lost data. For example, if the stream's retention period is 48 hours and is decreased to 24 hours, any data already in the stream that is older than 24 hours is inaccessible.
   */
  decreaseStreamRetentionPeriod(params: Kinesis.Types.DecreaseStreamRetentionPeriodInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Decreases the Amazon Kinesis stream's retention period, which is the length of time data records are accessible after they are added to the stream. The minimum value of a stream's retention period is 24 hours. This operation may result in lost data. For example, if the stream's retention period is 48 hours and is decreased to 24 hours, any data already in the stream that is older than 24 hours is inaccessible.
   */
  decreaseStreamRetentionPeriod(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Amazon Kinesis stream and all its shards and data. You must shut down any applications that are operating on the stream before you delete the stream. If an application attempts to operate on a deleted stream, it will receive the exception ResourceNotFoundException. If the stream is in the ACTIVE state, you can delete it. After a DeleteStream request, the specified stream is in the DELETING state until Amazon Kinesis completes the deletion.  Note: Amazon Kinesis might continue to accept data read and write operations, such as PutRecord, PutRecords, and GetRecords, on a stream in the DELETING state until the stream deletion is complete. When you delete a stream, any shards in that stream are also deleted, and any tags are dissociated from the stream. You can use the DescribeStream operation to check the state of the stream, which is returned in StreamStatus.  DeleteStream has a limit of 5 transactions per second per account.
   */
  deleteStream(params: Kinesis.Types.DeleteStreamInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Amazon Kinesis stream and all its shards and data. You must shut down any applications that are operating on the stream before you delete the stream. If an application attempts to operate on a deleted stream, it will receive the exception ResourceNotFoundException. If the stream is in the ACTIVE state, you can delete it. After a DeleteStream request, the specified stream is in the DELETING state until Amazon Kinesis completes the deletion.  Note: Amazon Kinesis might continue to accept data read and write operations, such as PutRecord, PutRecords, and GetRecords, on a stream in the DELETING state until the stream deletion is complete. When you delete a stream, any shards in that stream are also deleted, and any tags are dissociated from the stream. You can use the DescribeStream operation to check the state of the stream, which is returned in StreamStatus.  DeleteStream has a limit of 5 transactions per second per account.
   */
  deleteStream(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Describes the shard limits and usage for the account. If you update your account limits, the old limits might be returned for a few minutes. This operation has a limit of 1 transaction per second per account.
   */
  describeLimits(params: Kinesis.Types.DescribeLimitsInput, callback?: (err: AWSError, data: Kinesis.Types.DescribeLimitsOutput) => void): Request<Kinesis.Types.DescribeLimitsOutput, AWSError>;
  /**
   * Describes the shard limits and usage for the account. If you update your account limits, the old limits might be returned for a few minutes. This operation has a limit of 1 transaction per second per account.
   */
  describeLimits(callback?: (err: AWSError, data: Kinesis.Types.DescribeLimitsOutput) => void): Request<Kinesis.Types.DescribeLimitsOutput, AWSError>;
  /**
   * Describes the specified Amazon Kinesis stream. The information returned includes the stream name, Amazon Resource Name (ARN), creation time, enhanced metric configuration, and shard map. The shard map is an array of shard objects. For each shard object, there is the hash key and sequence number ranges that the shard spans, and the IDs of any earlier shards that played in a role in creating the shard. Every record ingested in the stream is identified by a sequence number, which is assigned when the record is put into the stream. You can limit the number of shards returned by each call. For more information, see Retrieving Shards from a Stream in the Amazon Kinesis Streams Developer Guide. There are no guarantees about the chronological order shards returned. To process shards in chronological order, use the ID of the parent shard to track the lineage to the oldest shard. This operation has a limit of 10 transactions per second per account.
   */
  describeStream(params: Kinesis.Types.DescribeStreamInput, callback?: (err: AWSError, data: Kinesis.Types.DescribeStreamOutput) => void): Request<Kinesis.Types.DescribeStreamOutput, AWSError>;
  /**
   * Describes the specified Amazon Kinesis stream. The information returned includes the stream name, Amazon Resource Name (ARN), creation time, enhanced metric configuration, and shard map. The shard map is an array of shard objects. For each shard object, there is the hash key and sequence number ranges that the shard spans, and the IDs of any earlier shards that played in a role in creating the shard. Every record ingested in the stream is identified by a sequence number, which is assigned when the record is put into the stream. You can limit the number of shards returned by each call. For more information, see Retrieving Shards from a Stream in the Amazon Kinesis Streams Developer Guide. There are no guarantees about the chronological order shards returned. To process shards in chronological order, use the ID of the parent shard to track the lineage to the oldest shard. This operation has a limit of 10 transactions per second per account.
   */
  describeStream(callback?: (err: AWSError, data: Kinesis.Types.DescribeStreamOutput) => void): Request<Kinesis.Types.DescribeStreamOutput, AWSError>;
  /**
   * Disables enhanced monitoring.
   */
  disableEnhancedMonitoring(params: Kinesis.Types.DisableEnhancedMonitoringInput, callback?: (err: AWSError, data: Kinesis.Types.EnhancedMonitoringOutput) => void): Request<Kinesis.Types.EnhancedMonitoringOutput, AWSError>;
  /**
   * Disables enhanced monitoring.
   */
  disableEnhancedMonitoring(callback?: (err: AWSError, data: Kinesis.Types.EnhancedMonitoringOutput) => void): Request<Kinesis.Types.EnhancedMonitoringOutput, AWSError>;
  /**
   * Enables enhanced Amazon Kinesis stream monitoring for shard-level metrics.
   */
  enableEnhancedMonitoring(params: Kinesis.Types.EnableEnhancedMonitoringInput, callback?: (err: AWSError, data: Kinesis.Types.EnhancedMonitoringOutput) => void): Request<Kinesis.Types.EnhancedMonitoringOutput, AWSError>;
  /**
   * Enables enhanced Amazon Kinesis stream monitoring for shard-level metrics.
   */
  enableEnhancedMonitoring(callback?: (err: AWSError, data: Kinesis.Types.EnhancedMonitoringOutput) => void): Request<Kinesis.Types.EnhancedMonitoringOutput, AWSError>;
  /**
   * Gets data records from an Amazon Kinesis stream's shard. Specify a shard iterator using the ShardIterator parameter. The shard iterator specifies the position in the shard from which you want to start reading data records sequentially. If there are no records available in the portion of the shard that the iterator points to, GetRecords returns an empty list. Note that it might take multiple calls to get to a portion of the shard that contains records. You can scale by provisioning multiple shards per stream while considering service limits (for more information, see Streams Limits in the Amazon Kinesis Streams Developer Guide). Your application should have one thread per shard, each reading continuously from its stream. To read from a stream continually, call GetRecords in a loop. Use GetShardIterator to get the shard iterator to specify in the first GetRecords call. GetRecords returns a new shard iterator in NextShardIterator. Specify the shard iterator returned in NextShardIterator in subsequent calls to GetRecords. Note that if the shard has been closed, the shard iterator can't return more data and GetRecords returns null in NextShardIterator. You can terminate the loop when the shard is closed, or when the shard iterator reaches the record with the sequence number or other attribute that marks it as the last record to process. Each data record can be up to 1 MB in size, and each shard can read up to 2 MB per second. You can ensure that your calls don't exceed the maximum supported size or throughput by using the Limit parameter to specify the maximum number of records that GetRecords can return. Consider your average record size when determining this limit. The size of the data returned by GetRecords varies depending on the utilization of the shard. The maximum size of data that GetRecords can return is 10 MB. If a call returns this amount of data, subsequent calls made within the next 5 seconds throw ProvisionedThroughputExceededException. If there is insufficient provisioned throughput on the shard, subsequent calls made within the next 1 second throw ProvisionedThroughputExceededException. Note that GetRecords won't return any data when it throws an exception. For this reason, we recommend that you wait one second between calls to GetRecords; however, it's possible that the application will get exceptions for longer than 1 second. To detect whether the application is falling behind in processing, you can use the MillisBehindLatest response attribute. You can also monitor the stream using CloudWatch metrics and other mechanisms (see Monitoring in the Amazon Kinesis Streams Developer Guide). Each Amazon Kinesis record includes a value, ApproximateArrivalTimestamp, that is set when a stream successfully receives and stores a record. This is commonly referred to as a server-side timestamp, whereas a client-side timestamp is set when a data producer creates or sends the record to a stream (a data producer is any data source putting data records into a stream, for example with PutRecords). The timestamp has millisecond precision. There are no guarantees about the timestamp accuracy, or that the timestamp is always increasing. For example, records in a shard or across a stream might have timestamps that are out of order.
   */
  getRecords(params: Kinesis.Types.GetRecordsInput, callback?: (err: AWSError, data: Kinesis.Types.GetRecordsOutput) => void): Request<Kinesis.Types.GetRecordsOutput, AWSError>;
  /**
   * Gets data records from an Amazon Kinesis stream's shard. Specify a shard iterator using the ShardIterator parameter. The shard iterator specifies the position in the shard from which you want to start reading data records sequentially. If there are no records available in the portion of the shard that the iterator points to, GetRecords returns an empty list. Note that it might take multiple calls to get to a portion of the shard that contains records. You can scale by provisioning multiple shards per stream while considering service limits (for more information, see Streams Limits in the Amazon Kinesis Streams Developer Guide). Your application should have one thread per shard, each reading continuously from its stream. To read from a stream continually, call GetRecords in a loop. Use GetShardIterator to get the shard iterator to specify in the first GetRecords call. GetRecords returns a new shard iterator in NextShardIterator. Specify the shard iterator returned in NextShardIterator in subsequent calls to GetRecords. Note that if the shard has been closed, the shard iterator can't return more data and GetRecords returns null in NextShardIterator. You can terminate the loop when the shard is closed, or when the shard iterator reaches the record with the sequence number or other attribute that marks it as the last record to process. Each data record can be up to 1 MB in size, and each shard can read up to 2 MB per second. You can ensure that your calls don't exceed the maximum supported size or throughput by using the Limit parameter to specify the maximum number of records that GetRecords can return. Consider your average record size when determining this limit. The size of the data returned by GetRecords varies depending on the utilization of the shard. The maximum size of data that GetRecords can return is 10 MB. If a call returns this amount of data, subsequent calls made within the next 5 seconds throw ProvisionedThroughputExceededException. If there is insufficient provisioned throughput on the shard, subsequent calls made within the next 1 second throw ProvisionedThroughputExceededException. Note that GetRecords won't return any data when it throws an exception. For this reason, we recommend that you wait one second between calls to GetRecords; however, it's possible that the application will get exceptions for longer than 1 second. To detect whether the application is falling behind in processing, you can use the MillisBehindLatest response attribute. You can also monitor the stream using CloudWatch metrics and other mechanisms (see Monitoring in the Amazon Kinesis Streams Developer Guide). Each Amazon Kinesis record includes a value, ApproximateArrivalTimestamp, that is set when a stream successfully receives and stores a record. This is commonly referred to as a server-side timestamp, whereas a client-side timestamp is set when a data producer creates or sends the record to a stream (a data producer is any data source putting data records into a stream, for example with PutRecords). The timestamp has millisecond precision. There are no guarantees about the timestamp accuracy, or that the timestamp is always increasing. For example, records in a shard or across a stream might have timestamps that are out of order.
   */
  getRecords(callback?: (err: AWSError, data: Kinesis.Types.GetRecordsOutput) => void): Request<Kinesis.Types.GetRecordsOutput, AWSError>;
  /**
   * Gets an Amazon Kinesis shard iterator. A shard iterator expires five minutes after it is returned to the requester. A shard iterator specifies the shard position from which to start reading data records sequentially. The position is specified using the sequence number of a data record in a shard. A sequence number is the identifier associated with every record ingested in the stream, and is assigned when a record is put into the stream. Each stream has one or more shards. You must specify the shard iterator type. For example, you can set the ShardIteratorType parameter to read exactly from the position denoted by a specific sequence number by using the AT_SEQUENCE_NUMBER shard iterator type, or right after the sequence number by using the AFTER_SEQUENCE_NUMBER shard iterator type, using sequence numbers returned by earlier calls to PutRecord, PutRecords, GetRecords, or DescribeStream. In the request, you can specify the shard iterator type AT_TIMESTAMP to read records from an arbitrary point in time, TRIM_HORIZON to cause ShardIterator to point to the last untrimmed record in the shard in the system (the oldest data record in the shard), or LATEST so that you always read the most recent data in the shard.  When you read repeatedly from a stream, use a GetShardIterator request to get the first shard iterator for use in your first GetRecords request and for subsequent reads use the shard iterator returned by the GetRecords request in NextShardIterator. A new shard iterator is returned by every GetRecords request in NextShardIterator, which you use in the ShardIterator parameter of the next GetRecords request.  If a GetShardIterator request is made too often, you receive a ProvisionedThroughputExceededException. For more information about throughput limits, see GetRecords, and Streams Limits in the Amazon Kinesis Streams Developer Guide. If the shard is closed, GetShardIterator returns a valid iterator for the last sequence number of the shard. Note that a shard can be closed as a result of using SplitShard or MergeShards.  GetShardIterator has a limit of 5 transactions per second per account per open shard.
   */
  getShardIterator(params: Kinesis.Types.GetShardIteratorInput, callback?: (err: AWSError, data: Kinesis.Types.GetShardIteratorOutput) => void): Request<Kinesis.Types.GetShardIteratorOutput, AWSError>;
  /**
   * Gets an Amazon Kinesis shard iterator. A shard iterator expires five minutes after it is returned to the requester. A shard iterator specifies the shard position from which to start reading data records sequentially. The position is specified using the sequence number of a data record in a shard. A sequence number is the identifier associated with every record ingested in the stream, and is assigned when a record is put into the stream. Each stream has one or more shards. You must specify the shard iterator type. For example, you can set the ShardIteratorType parameter to read exactly from the position denoted by a specific sequence number by using the AT_SEQUENCE_NUMBER shard iterator type, or right after the sequence number by using the AFTER_SEQUENCE_NUMBER shard iterator type, using sequence numbers returned by earlier calls to PutRecord, PutRecords, GetRecords, or DescribeStream. In the request, you can specify the shard iterator type AT_TIMESTAMP to read records from an arbitrary point in time, TRIM_HORIZON to cause ShardIterator to point to the last untrimmed record in the shard in the system (the oldest data record in the shard), or LATEST so that you always read the most recent data in the shard.  When you read repeatedly from a stream, use a GetShardIterator request to get the first shard iterator for use in your first GetRecords request and for subsequent reads use the shard iterator returned by the GetRecords request in NextShardIterator. A new shard iterator is returned by every GetRecords request in NextShardIterator, which you use in the ShardIterator parameter of the next GetRecords request.  If a GetShardIterator request is made too often, you receive a ProvisionedThroughputExceededException. For more information about throughput limits, see GetRecords, and Streams Limits in the Amazon Kinesis Streams Developer Guide. If the shard is closed, GetShardIterator returns a valid iterator for the last sequence number of the shard. Note that a shard can be closed as a result of using SplitShard or MergeShards.  GetShardIterator has a limit of 5 transactions per second per account per open shard.
   */
  getShardIterator(callback?: (err: AWSError, data: Kinesis.Types.GetShardIteratorOutput) => void): Request<Kinesis.Types.GetShardIteratorOutput, AWSError>;
  /**
   * Increases the Amazon Kinesis stream's retention period, which is the length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 168 hours (7 days). Upon choosing a longer stream retention period, this operation will increase the time period records are accessible that have not yet expired. However, it will not make previous data that has expired (older than the stream's previous retention period) accessible after the operation has been called. For example, if a stream's retention period is set to 24 hours and is increased to 168 hours, any data that is older than 24 hours will remain inaccessible to consumer applications.
   */
  increaseStreamRetentionPeriod(params: Kinesis.Types.IncreaseStreamRetentionPeriodInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Increases the Amazon Kinesis stream's retention period, which is the length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 168 hours (7 days). Upon choosing a longer stream retention period, this operation will increase the time period records are accessible that have not yet expired. However, it will not make previous data that has expired (older than the stream's previous retention period) accessible after the operation has been called. For example, if a stream's retention period is set to 24 hours and is increased to 168 hours, any data that is older than 24 hours will remain inaccessible to consumer applications.
   */
  increaseStreamRetentionPeriod(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Lists your Amazon Kinesis streams. The number of streams may be too large to return from a single call to ListStreams. You can limit the number of returned streams using the Limit parameter. If you do not specify a value for the Limit parameter, Amazon Kinesis uses the default limit, which is currently 10. You can detect if there are more streams available to list by using the HasMoreStreams flag from the returned output. If there are more streams available, you can request more streams by using the name of the last stream returned by the ListStreams request in the ExclusiveStartStreamName parameter in a subsequent request to ListStreams. The group of stream names returned by the subsequent request is then added to the list. You can continue this process until all the stream names have been collected in the list.   ListStreams has a limit of 5 transactions per second per account.
   */
  listStreams(params: Kinesis.Types.ListStreamsInput, callback?: (err: AWSError, data: Kinesis.Types.ListStreamsOutput) => void): Request<Kinesis.Types.ListStreamsOutput, AWSError>;
  /**
   * Lists your Amazon Kinesis streams. The number of streams may be too large to return from a single call to ListStreams. You can limit the number of returned streams using the Limit parameter. If you do not specify a value for the Limit parameter, Amazon Kinesis uses the default limit, which is currently 10. You can detect if there are more streams available to list by using the HasMoreStreams flag from the returned output. If there are more streams available, you can request more streams by using the name of the last stream returned by the ListStreams request in the ExclusiveStartStreamName parameter in a subsequent request to ListStreams. The group of stream names returned by the subsequent request is then added to the list. You can continue this process until all the stream names have been collected in the list.   ListStreams has a limit of 5 transactions per second per account.
   */
  listStreams(callback?: (err: AWSError, data: Kinesis.Types.ListStreamsOutput) => void): Request<Kinesis.Types.ListStreamsOutput, AWSError>;
  /**
   * Lists the tags for the specified Amazon Kinesis stream.
   */
  listTagsForStream(params: Kinesis.Types.ListTagsForStreamInput, callback?: (err: AWSError, data: Kinesis.Types.ListTagsForStreamOutput) => void): Request<Kinesis.Types.ListTagsForStreamOutput, AWSError>;
  /**
   * Lists the tags for the specified Amazon Kinesis stream.
   */
  listTagsForStream(callback?: (err: AWSError, data: Kinesis.Types.ListTagsForStreamOutput) => void): Request<Kinesis.Types.ListTagsForStreamOutput, AWSError>;
  /**
   * Merges two adjacent shards in an Amazon Kinesis stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data. Two shards are considered adjacent if the union of the hash key ranges for the two shards form a contiguous set with no gaps. For example, if you have two shards, one with a hash key range of 276...381 and the other with a hash key range of 382...454, then you could merge these two shards into a single shard that would have a hash key range of 276...454. After the merge, the single child shard receives data for all hash key values covered by the two parent shards.  MergeShards is called when there is a need to reduce the overall capacity of a stream because of excess capacity that is not being used. You must specify the shard to be merged and the adjacent shard for a stream. For more information about merging shards, see Merge Two Shards in the Amazon Kinesis Streams Developer Guide. If the stream is in the ACTIVE state, you can call MergeShards. If a stream is in the CREATING, UPDATING, or DELETING state, MergeShards returns a ResourceInUseException. If the specified stream does not exist, MergeShards returns a ResourceNotFoundException.  You can use DescribeStream to check the state of the stream, which is returned in StreamStatus.  MergeShards is an asynchronous operation. Upon receiving a MergeShards request, Amazon Kinesis immediately returns a response and sets the StreamStatus to UPDATING. After the operation is completed, Amazon Kinesis sets the StreamStatus to ACTIVE. Read and write operations continue to work while the stream is in the UPDATING state.  You use DescribeStream to determine the shard IDs that are specified in the MergeShards request.  If you try to operate on too many streams in parallel using CreateStream, DeleteStream, MergeShards or SplitShard, you will receive a LimitExceededException.   MergeShards has limit of 5 transactions per second per account.
   */
  mergeShards(params: Kinesis.Types.MergeShardsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Merges two adjacent shards in an Amazon Kinesis stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data. Two shards are considered adjacent if the union of the hash key ranges for the two shards form a contiguous set with no gaps. For example, if you have two shards, one with a hash key range of 276...381 and the other with a hash key range of 382...454, then you could merge these two shards into a single shard that would have a hash key range of 276...454. After the merge, the single child shard receives data for all hash key values covered by the two parent shards.  MergeShards is called when there is a need to reduce the overall capacity of a stream because of excess capacity that is not being used. You must specify the shard to be merged and the adjacent shard for a stream. For more information about merging shards, see Merge Two Shards in the Amazon Kinesis Streams Developer Guide. If the stream is in the ACTIVE state, you can call MergeShards. If a stream is in the CREATING, UPDATING, or DELETING state, MergeShards returns a ResourceInUseException. If the specified stream does not exist, MergeShards returns a ResourceNotFoundException.  You can use DescribeStream to check the state of the stream, which is returned in StreamStatus.  MergeShards is an asynchronous operation. Upon receiving a MergeShards request, Amazon Kinesis immediately returns a response and sets the StreamStatus to UPDATING. After the operation is completed, Amazon Kinesis sets the StreamStatus to ACTIVE. Read and write operations continue to work while the stream is in the UPDATING state.  You use DescribeStream to determine the shard IDs that are specified in the MergeShards request.  If you try to operate on too many streams in parallel using CreateStream, DeleteStream, MergeShards or SplitShard, you will receive a LimitExceededException.   MergeShards has limit of 5 transactions per second per account.
   */
  mergeShards(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Writes a single data record into an Amazon Kinesis stream. Call PutRecord to send data into the stream for real-time ingestion and subsequent processing, one record at a time. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MB per second. You must specify the name of the stream that captures, stores, and transports the data; a partition key; and the data blob itself. The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on. The partition key is used by Amazon Kinesis to distribute data across shards. Amazon Kinesis segregates the data records that belong to a stream into multiple shards, using the partition key associated with each data record to determine which shard a given data record belongs to. Partition keys are Unicode strings, with a maximum length limit of 256 characters for each key. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards using the hash key ranges of the shards. You can override hashing the partition key to determine the shard by explicitly specifying a hash value using the ExplicitHashKey parameter. For more information, see Adding Data to a Stream in the Amazon Kinesis Streams Developer Guide.  PutRecord returns the shard ID of where the data record was placed and the sequence number that was assigned to the data record. Sequence numbers increase over time and are specific to a shard within a stream, not across all shards within a stream. To guarantee strictly increasing ordering, write serially to a shard and use the SequenceNumberForOrdering parameter. For more information, see Adding Data to a Stream in the Amazon Kinesis Streams Developer Guide. If a PutRecord request cannot be processed because of insufficient provisioned throughput on the shard involved in the request, PutRecord throws ProvisionedThroughputExceededException.  By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use IncreaseStreamRetentionPeriod or DecreaseStreamRetentionPeriod to modify this retention period.
   */
  putRecord(params: Kinesis.Types.PutRecordInput, callback?: (err: AWSError, data: Kinesis.Types.PutRecordOutput) => void): Request<Kinesis.Types.PutRecordOutput, AWSError>;
  /**
   * Writes a single data record into an Amazon Kinesis stream. Call PutRecord to send data into the stream for real-time ingestion and subsequent processing, one record at a time. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MB per second. You must specify the name of the stream that captures, stores, and transports the data; a partition key; and the data blob itself. The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on. The partition key is used by Amazon Kinesis to distribute data across shards. Amazon Kinesis segregates the data records that belong to a stream into multiple shards, using the partition key associated with each data record to determine which shard a given data record belongs to. Partition keys are Unicode strings, with a maximum length limit of 256 characters for each key. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards using the hash key ranges of the shards. You can override hashing the partition key to determine the shard by explicitly specifying a hash value using the ExplicitHashKey parameter. For more information, see Adding Data to a Stream in the Amazon Kinesis Streams Developer Guide.  PutRecord returns the shard ID of where the data record was placed and the sequence number that was assigned to the data record. Sequence numbers increase over time and are specific to a shard within a stream, not across all shards within a stream. To guarantee strictly increasing ordering, write serially to a shard and use the SequenceNumberForOrdering parameter. For more information, see Adding Data to a Stream in the Amazon Kinesis Streams Developer Guide. If a PutRecord request cannot be processed because of insufficient provisioned throughput on the shard involved in the request, PutRecord throws ProvisionedThroughputExceededException.  By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use IncreaseStreamRetentionPeriod or DecreaseStreamRetentionPeriod to modify this retention period.
   */
  putRecord(callback?: (err: AWSError, data: Kinesis.Types.PutRecordOutput) => void): Request<Kinesis.Types.PutRecordOutput, AWSError>;
  /**
   * Writes multiple data records into an Amazon Kinesis stream in a single call (also referred to as a PutRecords request). Use this operation to send data into the stream for data ingestion and processing.  Each PutRecords request can support up to 500 records. Each record in the request can be as large as 1 MB, up to a limit of 5 MB for the entire request, including partition keys. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MB per second. You must specify the name of the stream that captures, stores, and transports the data; and an array of request Records, with each record in the array requiring a partition key and data blob. The record size limit applies to the total size of the partition key and data blob. The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on. The partition key is used by Amazon Kinesis as input to a hash function that maps the partition key and associated data to a specific shard. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream. For more information, see Adding Data to a Stream in the Amazon Kinesis Streams Developer Guide. Each record in the Records array may include an optional parameter, ExplicitHashKey, which overrides the partition key to shard mapping. This parameter allows a data producer to determine explicitly the shard where the record is stored. For more information, see Adding Multiple Records with PutRecords in the Amazon Kinesis Streams Developer Guide. The PutRecords response includes an array of response Records. Each record in the response array directly correlates with a record in the request array using natural ordering, from the top to the bottom of the request and response. The response Records array always includes the same number of records as the request array. The response Records array includes both successfully and unsuccessfully processed records. Amazon Kinesis attempts to process all records in each PutRecords request. A single record failure does not stop the processing of subsequent records. A successfully-processed record includes ShardId and SequenceNumber values. The ShardId parameter identifies the shard in the stream where the record is stored. The SequenceNumber parameter is an identifier assigned to the put record, unique to all records in the stream. An unsuccessfully-processed record includes ErrorCode and ErrorMessage values. ErrorCode reflects the type of error and can be one of the following values: ProvisionedThroughputExceededException or InternalFailure. ErrorMessage provides more detailed information about the ProvisionedThroughputExceededException exception including the account ID, stream name, and shard ID of the record that was throttled. For more information about partially successful responses, see Adding Multiple Records with PutRecords in the Amazon Kinesis Streams Developer Guide. By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use IncreaseStreamRetentionPeriod or DecreaseStreamRetentionPeriod to modify this retention period.
   */
  putRecords(params: Kinesis.Types.PutRecordsInput, callback?: (err: AWSError, data: Kinesis.Types.PutRecordsOutput) => void): Request<Kinesis.Types.PutRecordsOutput, AWSError>;
  /**
   * Writes multiple data records into an Amazon Kinesis stream in a single call (also referred to as a PutRecords request). Use this operation to send data into the stream for data ingestion and processing.  Each PutRecords request can support up to 500 records. Each record in the request can be as large as 1 MB, up to a limit of 5 MB for the entire request, including partition keys. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MB per second. You must specify the name of the stream that captures, stores, and transports the data; and an array of request Records, with each record in the array requiring a partition key and data blob. The record size limit applies to the total size of the partition key and data blob. The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on. The partition key is used by Amazon Kinesis as input to a hash function that maps the partition key and associated data to a specific shard. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream. For more information, see Adding Data to a Stream in the Amazon Kinesis Streams Developer Guide. Each record in the Records array may include an optional parameter, ExplicitHashKey, which overrides the partition key to shard mapping. This parameter allows a data producer to determine explicitly the shard where the record is stored. For more information, see Adding Multiple Records with PutRecords in the Amazon Kinesis Streams Developer Guide. The PutRecords response includes an array of response Records. Each record in the response array directly correlates with a record in the request array using natural ordering, from the top to the bottom of the request and response. The response Records array always includes the same number of records as the request array. The response Records array includes both successfully and unsuccessfully processed records. Amazon Kinesis attempts to process all records in each PutRecords request. A single record failure does not stop the processing of subsequent records. A successfully-processed record includes ShardId and SequenceNumber values. The ShardId parameter identifies the shard in the stream where the record is stored. The SequenceNumber parameter is an identifier assigned to the put record, unique to all records in the stream. An unsuccessfully-processed record includes ErrorCode and ErrorMessage values. ErrorCode reflects the type of error and can be one of the following values: ProvisionedThroughputExceededException or InternalFailure. ErrorMessage provides more detailed information about the ProvisionedThroughputExceededException exception including the account ID, stream name, and shard ID of the record that was throttled. For more information about partially successful responses, see Adding Multiple Records with PutRecords in the Amazon Kinesis Streams Developer Guide. By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use IncreaseStreamRetentionPeriod or DecreaseStreamRetentionPeriod to modify this retention period.
   */
  putRecords(callback?: (err: AWSError, data: Kinesis.Types.PutRecordsOutput) => void): Request<Kinesis.Types.PutRecordsOutput, AWSError>;
  /**
   * Removes tags from the specified Amazon Kinesis stream. Removed tags are deleted and cannot be recovered after this operation successfully completes. If you specify a tag that does not exist, it is ignored.
   */
  removeTagsFromStream(params: Kinesis.Types.RemoveTagsFromStreamInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes tags from the specified Amazon Kinesis stream. Removed tags are deleted and cannot be recovered after this operation successfully completes. If you specify a tag that does not exist, it is ignored.
   */
  removeTagsFromStream(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Splits a shard into two new shards in the Amazon Kinesis stream to increase the stream's capacity to ingest and transport data. SplitShard is called when there is a need to increase the overall capacity of a stream because of an expected increase in the volume of data records being ingested.  You can also use SplitShard when a shard appears to be approaching its maximum utilization; for example, the producers sending data into the specific shard are suddenly sending more than previously anticipated. You can also call SplitShard to increase stream capacity, so that more Amazon Kinesis applications can simultaneously read data from the stream for real-time processing.  You must specify the shard to be split and the new hash key, which is the position in the shard where the shard gets split in two. In many cases, the new hash key might simply be the average of the beginning and ending hash key, but it can be any hash key value in the range being mapped into the shard. For more information about splitting shards, see Split a Shard in the Amazon Kinesis Streams Developer Guide. You can use DescribeStream to determine the shard ID and hash key values for the ShardToSplit and NewStartingHashKey parameters that are specified in the SplitShard request.  SplitShard is an asynchronous operation. Upon receiving a SplitShard request, Amazon Kinesis immediately returns a response and sets the stream status to UPDATING. After the operation is completed, Amazon Kinesis sets the stream status to ACTIVE. Read and write operations continue to work while the stream is in the UPDATING state.  You can use DescribeStream to check the status of the stream, which is returned in StreamStatus. If the stream is in the ACTIVE state, you can call SplitShard. If a stream is in CREATING or UPDATING or DELETING states, DescribeStream returns a ResourceInUseException. If the specified stream does not exist, DescribeStream returns a ResourceNotFoundException. If you try to create more shards than are authorized for your account, you receive a LimitExceededException.  For the default shard limit for an AWS account, see Streams Limits in the Amazon Kinesis Streams Developer Guide. If you need to increase this limit, contact AWS Support. If you try to operate on too many streams simultaneously using CreateStream, DeleteStream, MergeShards, and/or SplitShard, you receive a LimitExceededException.   SplitShard has limit of 5 transactions per second per account.
   */
  splitShard(params: Kinesis.Types.SplitShardInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Splits a shard into two new shards in the Amazon Kinesis stream to increase the stream's capacity to ingest and transport data. SplitShard is called when there is a need to increase the overall capacity of a stream because of an expected increase in the volume of data records being ingested.  You can also use SplitShard when a shard appears to be approaching its maximum utilization; for example, the producers sending data into the specific shard are suddenly sending more than previously anticipated. You can also call SplitShard to increase stream capacity, so that more Amazon Kinesis applications can simultaneously read data from the stream for real-time processing.  You must specify the shard to be split and the new hash key, which is the position in the shard where the shard gets split in two. In many cases, the new hash key might simply be the average of the beginning and ending hash key, but it can be any hash key value in the range being mapped into the shard. For more information about splitting shards, see Split a Shard in the Amazon Kinesis Streams Developer Guide. You can use DescribeStream to determine the shard ID and hash key values for the ShardToSplit and NewStartingHashKey parameters that are specified in the SplitShard request.  SplitShard is an asynchronous operation. Upon receiving a SplitShard request, Amazon Kinesis immediately returns a response and sets the stream status to UPDATING. After the operation is completed, Amazon Kinesis sets the stream status to ACTIVE. Read and write operations continue to work while the stream is in the UPDATING state.  You can use DescribeStream to check the status of the stream, which is returned in StreamStatus. If the stream is in the ACTIVE state, you can call SplitShard. If a stream is in CREATING or UPDATING or DELETING states, DescribeStream returns a ResourceInUseException. If the specified stream does not exist, DescribeStream returns a ResourceNotFoundException. If you try to create more shards than are authorized for your account, you receive a LimitExceededException.  For the default shard limit for an AWS account, see Streams Limits in the Amazon Kinesis Streams Developer Guide. If you need to increase this limit, contact AWS Support. If you try to operate on too many streams simultaneously using CreateStream, DeleteStream, MergeShards, and/or SplitShard, you receive a LimitExceededException.   SplitShard has limit of 5 transactions per second per account.
   */
  splitShard(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables or updates server-side encryption using an AWS KMS key for a specified stream.  Starting encryption is an asynchronous operation. Upon receiving the request, Amazon Kinesis returns immediately and sets the status of the stream to UPDATING. After the update is complete, Amazon Kinesis sets the status of the stream back to ACTIVE. Updating or applying encryption normally takes a few seconds to complete but it can take minutes. You can continue to read and write data to your stream while its status is UPDATING. Once the status of the stream is ACTIVE, records written to the stream will begin to be encrypted.  API Limits: You can successfully apply a new AWS KMS key for server-side encryption 25 times in a rolling 24 hour period. Note: It can take up to 5 seconds after the stream is in an ACTIVE status before all records written to the stream are encrypted. After you’ve enabled encryption, you can verify encryption was applied by inspecting the API response from PutRecord or PutRecords.
   */
  startStreamEncryption(params: Kinesis.Types.StartStreamEncryptionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables or updates server-side encryption using an AWS KMS key for a specified stream.  Starting encryption is an asynchronous operation. Upon receiving the request, Amazon Kinesis returns immediately and sets the status of the stream to UPDATING. After the update is complete, Amazon Kinesis sets the status of the stream back to ACTIVE. Updating or applying encryption normally takes a few seconds to complete but it can take minutes. You can continue to read and write data to your stream while its status is UPDATING. Once the status of the stream is ACTIVE, records written to the stream will begin to be encrypted.  API Limits: You can successfully apply a new AWS KMS key for server-side encryption 25 times in a rolling 24 hour period. Note: It can take up to 5 seconds after the stream is in an ACTIVE status before all records written to the stream are encrypted. After you’ve enabled encryption, you can verify encryption was applied by inspecting the API response from PutRecord or PutRecords.
   */
  startStreamEncryption(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables server-side encryption for a specified stream.  Stopping encryption is an asynchronous operation. Upon receiving the request, Amazon Kinesis returns immediately and sets the status of the stream to UPDATING. After the update is complete, Amazon Kinesis sets the status of the stream back to ACTIVE. Stopping encryption normally takes a few seconds to complete but it can take minutes. You can continue to read and write data to your stream while its status is UPDATING. Once the status of the stream is ACTIVE records written to the stream will no longer be encrypted by the Amazon Kinesis Streams service.  API Limits: You can successfully disable server-side encryption 25 times in a rolling 24 hour period.  Note: It can take up to 5 seconds after the stream is in an ACTIVE status before all records written to the stream are no longer subject to encryption. After you’ve disabled encryption, you can verify encryption was not applied by inspecting the API response from PutRecord or PutRecords.
   */
  stopStreamEncryption(params: Kinesis.Types.StopStreamEncryptionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables server-side encryption for a specified stream.  Stopping encryption is an asynchronous operation. Upon receiving the request, Amazon Kinesis returns immediately and sets the status of the stream to UPDATING. After the update is complete, Amazon Kinesis sets the status of the stream back to ACTIVE. Stopping encryption normally takes a few seconds to complete but it can take minutes. You can continue to read and write data to your stream while its status is UPDATING. Once the status of the stream is ACTIVE records written to the stream will no longer be encrypted by the Amazon Kinesis Streams service.  API Limits: You can successfully disable server-side encryption 25 times in a rolling 24 hour period.  Note: It can take up to 5 seconds after the stream is in an ACTIVE status before all records written to the stream are no longer subject to encryption. After you’ve disabled encryption, you can verify encryption was not applied by inspecting the API response from PutRecord or PutRecords.
   */
  stopStreamEncryption(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the shard count of the specified stream to the specified number of shards. Updating the shard count is an asynchronous operation. Upon receiving the request, Amazon Kinesis returns immediately and sets the status of the stream to UPDATING. After the update is complete, Amazon Kinesis sets the status of the stream back to ACTIVE. Depending on the size of the stream, the scaling action could take a few minutes to complete. You can continue to read and write data to your stream while its status is UPDATING. To update the shard count, Amazon Kinesis performs splits or merges on individual shards. This can cause short-lived shards to be created, in addition to the final shards. We recommend that you double or halve the shard count, as this results in the fewest number of splits or merges. This operation has the following limits, which are per region per account unless otherwise noted:   scale more than twice per rolling 24 hour period   scale up above double your current shard count   scale down below half your current shard count   scale up above 200 shards in a stream   scale a stream with more than 200 shards down unless the result is less than 200 shards   scale up above the shard limits for your account      For the default limits for an AWS account, see Streams Limits in the Amazon Kinesis Streams Developer Guide. If you need to increase a limit, contact AWS Support.
   */
  updateShardCount(params: Kinesis.Types.UpdateShardCountInput, callback?: (err: AWSError, data: Kinesis.Types.UpdateShardCountOutput) => void): Request<Kinesis.Types.UpdateShardCountOutput, AWSError>;
  /**
   * Updates the shard count of the specified stream to the specified number of shards. Updating the shard count is an asynchronous operation. Upon receiving the request, Amazon Kinesis returns immediately and sets the status of the stream to UPDATING. After the update is complete, Amazon Kinesis sets the status of the stream back to ACTIVE. Depending on the size of the stream, the scaling action could take a few minutes to complete. You can continue to read and write data to your stream while its status is UPDATING. To update the shard count, Amazon Kinesis performs splits or merges on individual shards. This can cause short-lived shards to be created, in addition to the final shards. We recommend that you double or halve the shard count, as this results in the fewest number of splits or merges. This operation has the following limits, which are per region per account unless otherwise noted:   scale more than twice per rolling 24 hour period   scale up above double your current shard count   scale down below half your current shard count   scale up above 200 shards in a stream   scale a stream with more than 200 shards down unless the result is less than 200 shards   scale up above the shard limits for your account      For the default limits for an AWS account, see Streams Limits in the Amazon Kinesis Streams Developer Guide. If you need to increase a limit, contact AWS Support.
   */
  updateShardCount(callback?: (err: AWSError, data: Kinesis.Types.UpdateShardCountOutput) => void): Request<Kinesis.Types.UpdateShardCountOutput, AWSError>;
  /**
   * Waits for the streamExists state by periodically calling the underlying Kinesis.describeStreamoperation every 10 seconds (at most 18 times).
   */
  waitFor(state: "streamExists", params: Kinesis.Types.DescribeStreamInput, callback?: (err: AWSError, data: Kinesis.Types.DescribeStreamOutput) => void): Request<Kinesis.Types.DescribeStreamOutput, AWSError>;
  /**
   * Waits for the streamExists state by periodically calling the underlying Kinesis.describeStreamoperation every 10 seconds (at most 18 times).
   */
  waitFor(state: "streamExists", callback?: (err: AWSError, data: Kinesis.Types.DescribeStreamOutput) => void): Request<Kinesis.Types.DescribeStreamOutput, AWSError>;
  /**
   * Waits for the streamNotExists state by periodically calling the underlying Kinesis.describeStreamoperation every 10 seconds (at most 18 times).
   */
  waitFor(state: "streamNotExists", params: Kinesis.Types.DescribeStreamInput, callback?: (err: AWSError, data: Kinesis.Types.DescribeStreamOutput) => void): Request<Kinesis.Types.DescribeStreamOutput, AWSError>;
  /**
   * Waits for the streamNotExists state by periodically calling the underlying Kinesis.describeStreamoperation every 10 seconds (at most 18 times).
   */
  waitFor(state: "streamNotExists", callback?: (err: AWSError, data: Kinesis.Types.DescribeStreamOutput) => void): Request<Kinesis.Types.DescribeStreamOutput, AWSError>;
}
declare namespace Kinesis {
  export interface AddTagsToStreamInput {
    /**
     * The name of the stream.
     */
    StreamName: StreamName;
    /**
     * The set of key-value pairs to use to create the tags.
     */
    Tags: TagMap;
  }
  export type BooleanObject = boolean;
  export interface CreateStreamInput {
    /**
     * A name to identify the stream. The stream name is scoped to the AWS account used by the application that creates the stream. It is also scoped by region. That is, two streams in two different AWS accounts can have the same name, and two streams in the same AWS account but in two different regions can have the same name.
     */
    StreamName: StreamName;
    /**
     * The number of shards that the stream will use. The throughput of the stream is a function of the number of shards; more shards are required for greater provisioned throughput. DefaultShardLimit;
     */
    ShardCount: PositiveIntegerObject;
  }
  export type Data = Buffer|Uint8Array|Blob|string;
  export interface DecreaseStreamRetentionPeriodInput {
    /**
     * The name of the stream to modify.
     */
    StreamName: StreamName;
    /**
     * The new retention period of the stream, in hours. Must be less than the current retention period.
     */
    RetentionPeriodHours: PositiveIntegerObject;
  }
  export interface DeleteStreamInput {
    /**
     * The name of the stream to delete.
     */
    StreamName: StreamName;
  }
  export interface DescribeLimitsInput {
  }
  export interface DescribeLimitsOutput {
    /**
     * The maximum number of shards.
     */
    ShardLimit: ShardCountObject;
    /**
     * The number of open shards.
     */
    OpenShardCount: ShardCountObject;
  }
  export interface DescribeStreamInput {
    /**
     * The name of the stream to describe.
     */
    StreamName: StreamName;
    /**
     * The maximum number of shards to return in a single call. The default value is 100. If you specify a value greater than 100, at most 100 shards are returned.
     */
    Limit?: DescribeStreamInputLimit;
    /**
     * The shard ID of the shard to start with.
     */
    ExclusiveStartShardId?: ShardId;
  }
  export type DescribeStreamInputLimit = number;
  export interface DescribeStreamOutput {
    /**
     * The current status of the stream, the stream ARN, an array of shard objects that comprise the stream, and whether there are more shards available.
     */
    StreamDescription: StreamDescription;
  }
  export interface DisableEnhancedMonitoringInput {
    /**
     * The name of the Amazon Kinesis stream for which to disable enhanced monitoring.
     */
    StreamName: StreamName;
    /**
     * List of shard-level metrics to disable. The following are the valid shard-level metrics. The value "ALL" disables every metric.    IncomingBytes     IncomingRecords     OutgoingBytes     OutgoingRecords     WriteProvisionedThroughputExceeded     ReadProvisionedThroughputExceeded     IteratorAgeMilliseconds     ALL    For more information, see Monitoring the Amazon Kinesis Streams Service with Amazon CloudWatch in the Amazon Kinesis Streams Developer Guide.
     */
    ShardLevelMetrics: MetricsNameList;
  }
  export interface EnableEnhancedMonitoringInput {
    /**
     * The name of the stream for which to enable enhanced monitoring.
     */
    StreamName: StreamName;
    /**
     * List of shard-level metrics to enable. The following are the valid shard-level metrics. The value "ALL" enables every metric.    IncomingBytes     IncomingRecords     OutgoingBytes     OutgoingRecords     WriteProvisionedThroughputExceeded     ReadProvisionedThroughputExceeded     IteratorAgeMilliseconds     ALL    For more information, see Monitoring the Amazon Kinesis Streams Service with Amazon CloudWatch in the Amazon Kinesis Streams Developer Guide.
     */
    ShardLevelMetrics: MetricsNameList;
  }
  export type EncryptionType = "NONE"|"KMS"|string;
  export interface EnhancedMetrics {
    /**
     * List of shard-level metrics. The following are the valid shard-level metrics. The value "ALL" enhances every metric.    IncomingBytes     IncomingRecords     OutgoingBytes     OutgoingRecords     WriteProvisionedThroughputExceeded     ReadProvisionedThroughputExceeded     IteratorAgeMilliseconds     ALL    For more information, see Monitoring the Amazon Kinesis Streams Service with Amazon CloudWatch in the Amazon Kinesis Streams Developer Guide.
     */
    ShardLevelMetrics?: MetricsNameList;
  }
  export type EnhancedMonitoringList = EnhancedMetrics[];
  export interface EnhancedMonitoringOutput {
    /**
     * The name of the Amazon Kinesis stream.
     */
    StreamName?: StreamName;
    /**
     * Represents the current state of the metrics that are in the enhanced state before the operation.
     */
    CurrentShardLevelMetrics?: MetricsNameList;
    /**
     * Represents the list of all the metrics that would be in the enhanced state after the operation.
     */
    DesiredShardLevelMetrics?: MetricsNameList;
  }
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export interface GetRecordsInput {
    /**
     * The position in the shard from which you want to start sequentially reading data records. A shard iterator specifies this position using the sequence number of a data record in the shard.
     */
    ShardIterator: ShardIterator;
    /**
     * The maximum number of records to return. Specify a value of up to 10,000. If you specify a value that is greater than 10,000, GetRecords throws InvalidArgumentException.
     */
    Limit?: GetRecordsInputLimit;
  }
  export type GetRecordsInputLimit = number;
  export interface GetRecordsOutput {
    /**
     * The data records retrieved from the shard.
     */
    Records: RecordList;
    /**
     * The next position in the shard from which to start sequentially reading data records. If set to null, the shard has been closed and the requested iterator will not return any more data. 
     */
    NextShardIterator?: ShardIterator;
    /**
     * The number of milliseconds the GetRecords response is from the tip of the stream, indicating how far behind current time the consumer is. A value of zero indicates record processing is caught up, and there are no new records to process at this moment.
     */
    MillisBehindLatest?: MillisBehindLatest;
  }
  export interface GetShardIteratorInput {
    /**
     * The name of the Amazon Kinesis stream.
     */
    StreamName: StreamName;
    /**
     * The shard ID of the Amazon Kinesis shard to get the iterator for.
     */
    ShardId: ShardId;
    /**
     * Determines how the shard iterator is used to start reading data records from the shard. The following are the valid Amazon Kinesis shard iterator types:   AT_SEQUENCE_NUMBER - Start reading from the position denoted by a specific sequence number, provided in the value StartingSequenceNumber.   AFTER_SEQUENCE_NUMBER - Start reading right after the position denoted by a specific sequence number, provided in the value StartingSequenceNumber.   AT_TIMESTAMP - Start reading from the position denoted by a specific timestamp, provided in the value Timestamp.   TRIM_HORIZON - Start reading at the last untrimmed record in the shard in the system, which is the oldest data record in the shard.   LATEST - Start reading just after the most recent record in the shard, so that you always read the most recent data in the shard.  
     */
    ShardIteratorType: ShardIteratorType;
    /**
     * The sequence number of the data record in the shard from which to start reading. Used with shard iterator type AT_SEQUENCE_NUMBER and AFTER_SEQUENCE_NUMBER.
     */
    StartingSequenceNumber?: SequenceNumber;
    /**
     * The timestamp of the data record from which to start reading. Used with shard iterator type AT_TIMESTAMP. A timestamp is the Unix epoch date with precision in milliseconds. For example, 2016-04-04T19:58:46.480-00:00 or 1459799926.480. If a record with this exact timestamp does not exist, the iterator returned is for the next (later) record. If the timestamp is older than the current trim horizon, the iterator returned is for the oldest untrimmed data record (TRIM_HORIZON).
     */
    Timestamp?: Timestamp;
  }
  export interface GetShardIteratorOutput {
    /**
     * The position in the shard from which to start reading data records sequentially. A shard iterator specifies this position using the sequence number of a data record in a shard.
     */
    ShardIterator?: ShardIterator;
  }
  export type HashKey = string;
  export interface HashKeyRange {
    /**
     * The starting hash key of the hash key range.
     */
    StartingHashKey: HashKey;
    /**
     * The ending hash key of the hash key range.
     */
    EndingHashKey: HashKey;
  }
  export interface IncreaseStreamRetentionPeriodInput {
    /**
     * The name of the stream to modify.
     */
    StreamName: StreamName;
    /**
     * The new retention period of the stream, in hours. Must be more than the current retention period.
     */
    RetentionPeriodHours: PositiveIntegerObject;
  }
  export type KeyId = string;
  export interface ListStreamsInput {
    /**
     * The maximum number of streams to list.
     */
    Limit?: ListStreamsInputLimit;
    /**
     * The name of the stream to start the list with.
     */
    ExclusiveStartStreamName?: StreamName;
  }
  export type ListStreamsInputLimit = number;
  export interface ListStreamsOutput {
    /**
     * The names of the streams that are associated with the AWS account making the ListStreams request.
     */
    StreamNames: StreamNameList;
    /**
     * If set to true, there are more streams available to list.
     */
    HasMoreStreams: BooleanObject;
  }
  export interface ListTagsForStreamInput {
    /**
     * The name of the stream.
     */
    StreamName: StreamName;
    /**
     * The key to use as the starting point for the list of tags. If this parameter is set, ListTagsForStream gets all tags that occur after ExclusiveStartTagKey. 
     */
    ExclusiveStartTagKey?: TagKey;
    /**
     * The number of tags to return. If this number is less than the total number of tags associated with the stream, HasMoreTags is set to true. To list additional tags, set ExclusiveStartTagKey to the last key in the response.
     */
    Limit?: ListTagsForStreamInputLimit;
  }
  export type ListTagsForStreamInputLimit = number;
  export interface ListTagsForStreamOutput {
    /**
     * A list of tags associated with StreamName, starting with the first tag after ExclusiveStartTagKey and up to the specified Limit. 
     */
    Tags: TagList;
    /**
     * If set to true, more tags are available. To request additional tags, set ExclusiveStartTagKey to the key of the last tag returned.
     */
    HasMoreTags: BooleanObject;
  }
  export interface MergeShardsInput {
    /**
     * The name of the stream for the merge.
     */
    StreamName: StreamName;
    /**
     * The shard ID of the shard to combine with the adjacent shard for the merge.
     */
    ShardToMerge: ShardId;
    /**
     * The shard ID of the adjacent shard for the merge.
     */
    AdjacentShardToMerge: ShardId;
  }
  export type MetricsName = "IncomingBytes"|"IncomingRecords"|"OutgoingBytes"|"OutgoingRecords"|"WriteProvisionedThroughputExceeded"|"ReadProvisionedThroughputExceeded"|"IteratorAgeMilliseconds"|"ALL"|string;
  export type MetricsNameList = MetricsName[];
  export type MillisBehindLatest = number;
  export type PartitionKey = string;
  export type PositiveIntegerObject = number;
  export interface PutRecordInput {
    /**
     * The name of the stream to put the data record into.
     */
    StreamName: StreamName;
    /**
     * The data blob to put into the record, which is base64-encoded when the blob is serialized. When the data blob (the payload before base64-encoding) is added to the partition key size, the total size must not exceed the maximum record size (1 MB).
     */
    Data: Data;
    /**
     * Determines which shard in the stream the data record is assigned to. Partition keys are Unicode strings with a maximum length limit of 256 characters for each key. Amazon Kinesis uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard. Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream.
     */
    PartitionKey: PartitionKey;
    /**
     * The hash value used to explicitly determine the shard the data record is assigned to by overriding the partition key hash.
     */
    ExplicitHashKey?: HashKey;
    /**
     * Guarantees strictly increasing sequence numbers, for puts from the same client and to the same partition key. Usage: set the SequenceNumberForOrdering of record n to the sequence number of record n-1 (as returned in the result when putting record n-1). If this parameter is not set, records will be coarsely ordered based on arrival time.
     */
    SequenceNumberForOrdering?: SequenceNumber;
  }
  export interface PutRecordOutput {
    /**
     * The shard ID of the shard where the data record was placed.
     */
    ShardId: ShardId;
    /**
     * The sequence number identifier that was assigned to the put data record. The sequence number for the record is unique across all records in the stream. A sequence number is the identifier associated with every record put into the stream.
     */
    SequenceNumber: SequenceNumber;
    /**
     * The encryption type to use on the record. This parameter can be one of the following values:    NONE: Do not encrypt the records in the stream.    KMS: Use server-side encryption on the records in the stream using a customer-managed KMS key.  
     */
    EncryptionType?: EncryptionType;
  }
  export interface PutRecordsInput {
    /**
     * The records associated with the request.
     */
    Records: PutRecordsRequestEntryList;
    /**
     * The stream name associated with the request.
     */
    StreamName: StreamName;
  }
  export interface PutRecordsOutput {
    /**
     * The number of unsuccessfully processed records in a PutRecords request.
     */
    FailedRecordCount?: PositiveIntegerObject;
    /**
     * An array of successfully and unsuccessfully processed record results, correlated with the request by natural ordering. A record that is successfully added to a stream includes SequenceNumber and ShardId in the result. A record that fails to be added to a stream includes ErrorCode and ErrorMessage in the result.
     */
    Records: PutRecordsResultEntryList;
    /**
     * The encryption type used on the records. This parameter can be one of the following values:    NONE: Do not encrypt the records.    KMS: Use server-side encryption on the records using a customer-managed KMS key.  
     */
    EncryptionType?: EncryptionType;
  }
  export interface PutRecordsRequestEntry {
    /**
     * The data blob to put into the record, which is base64-encoded when the blob is serialized. When the data blob (the payload before base64-encoding) is added to the partition key size, the total size must not exceed the maximum record size (1 MB).
     */
    Data: Data;
    /**
     * The hash value used to determine explicitly the shard that the data record is assigned to by overriding the partition key hash.
     */
    ExplicitHashKey?: HashKey;
    /**
     * Determines which shard in the stream the data record is assigned to. Partition keys are Unicode strings with a maximum length limit of 256 characters for each key. Amazon Kinesis uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard. Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream.
     */
    PartitionKey: PartitionKey;
  }
  export type PutRecordsRequestEntryList = PutRecordsRequestEntry[];
  export interface PutRecordsResultEntry {
    /**
     * The sequence number for an individual record result.
     */
    SequenceNumber?: SequenceNumber;
    /**
     * The shard ID for an individual record result.
     */
    ShardId?: ShardId;
    /**
     * The error code for an individual record result. ErrorCodes can be either ProvisionedThroughputExceededException or InternalFailure.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message for an individual record result. An ErrorCode value of ProvisionedThroughputExceededException has an error message that includes the account ID, stream name, and shard ID. An ErrorCode value of InternalFailure has the error message "Internal Service Failure".
     */
    ErrorMessage?: ErrorMessage;
  }
  export type PutRecordsResultEntryList = PutRecordsResultEntry[];
  export interface Record {
    /**
     * The unique identifier of the record within its shard.
     */
    SequenceNumber: SequenceNumber;
    /**
     * The approximate time that the record was inserted into the stream.
     */
    ApproximateArrivalTimestamp?: Timestamp;
    /**
     * The data blob. The data in the blob is both opaque and immutable to the Amazon Kinesis service, which does not inspect, interpret, or change the data in the blob in any way. When the data blob (the payload before base64-encoding) is added to the partition key size, the total size must not exceed the maximum record size (1 MB).
     */
    Data: Data;
    /**
     * Identifies which shard in the stream the data record is assigned to.
     */
    PartitionKey: PartitionKey;
    /**
     * The encryption type used on the record. This parameter can be one of the following values:    NONE: Do not encrypt the records in the stream.    KMS: Use server-side encryption on the records in the stream using a customer-managed KMS key.  
     */
    EncryptionType?: EncryptionType;
  }
  export type RecordList = Record[];
  export interface RemoveTagsFromStreamInput {
    /**
     * The name of the stream.
     */
    StreamName: StreamName;
    /**
     * A list of tag keys. Each corresponding tag is removed from the stream.
     */
    TagKeys: TagKeyList;
  }
  export type ScalingType = "UNIFORM_SCALING"|string;
  export type SequenceNumber = string;
  export interface SequenceNumberRange {
    /**
     * The starting sequence number for the range.
     */
    StartingSequenceNumber: SequenceNumber;
    /**
     * The ending sequence number for the range. Shards that are in the OPEN state have an ending sequence number of null.
     */
    EndingSequenceNumber?: SequenceNumber;
  }
  export interface Shard {
    /**
     * The unique identifier of the shard within the stream.
     */
    ShardId: ShardId;
    /**
     * The shard ID of the shard's parent.
     */
    ParentShardId?: ShardId;
    /**
     * The shard ID of the shard adjacent to the shard's parent.
     */
    AdjacentParentShardId?: ShardId;
    /**
     * The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
     */
    HashKeyRange: HashKeyRange;
    /**
     * The range of possible sequence numbers for the shard.
     */
    SequenceNumberRange: SequenceNumberRange;
  }
  export type ShardCountObject = number;
  export type ShardId = string;
  export type ShardIterator = string;
  export type ShardIteratorType = "AT_SEQUENCE_NUMBER"|"AFTER_SEQUENCE_NUMBER"|"TRIM_HORIZON"|"LATEST"|"AT_TIMESTAMP"|string;
  export type ShardList = Shard[];
  export interface SplitShardInput {
    /**
     * The name of the stream for the shard split.
     */
    StreamName: StreamName;
    /**
     * The shard ID of the shard to split.
     */
    ShardToSplit: ShardId;
    /**
     * A hash key value for the starting hash key of one of the child shards created by the split. The hash key range for a given shard constitutes a set of ordered contiguous positive integers. The value for NewStartingHashKey must be in the range of hash keys being mapped into the shard. The NewStartingHashKey hash key value and all higher hash key values in hash key range are distributed to one of the child shards. All the lower hash key values in the range are distributed to the other child shard.
     */
    NewStartingHashKey: HashKey;
  }
  export interface StartStreamEncryptionInput {
    /**
     * The name of the stream for which to start encrypting records.
     */
    StreamName: StreamName;
    /**
     * The encryption type to use. This parameter can be one of the following values:    NONE: Not valid for this operation. An InvalidOperationException will be thrown.    KMS: Use server-side encryption on the records in the stream using a customer-managed KMS key.  
     */
    EncryptionType: EncryptionType;
    /**
     * The GUID for the customer-managed KMS key to use for encryption. You can also use a Kinesis-owned master key by specifying the alias aws/kinesis.
     */
    KeyId: KeyId;
  }
  export interface StopStreamEncryptionInput {
    /**
     * The name of the stream on which to stop encrypting records.
     */
    StreamName: StreamName;
    /**
     * The encryption type. This parameter can be one of the following values:    NONE: Not valid for this operation. An InvalidOperationException will be thrown.    KMS: Use server-side encryption on the records in the stream using a customer-managed KMS key.  
     */
    EncryptionType: EncryptionType;
    /**
     * The GUID for the customer-managed key that was used for encryption.
     */
    KeyId: KeyId;
  }
  export type StreamARN = string;
  export interface StreamDescription {
    /**
     * The name of the stream being described.
     */
    StreamName: StreamName;
    /**
     * The Amazon Resource Name (ARN) for the stream being described.
     */
    StreamARN: StreamARN;
    /**
     * The current status of the stream being described. The stream status is one of the following states:    CREATING - The stream is being created. Amazon Kinesis immediately returns and sets StreamStatus to CREATING.    DELETING - The stream is being deleted. The specified stream is in the DELETING state until Amazon Kinesis completes the deletion.    ACTIVE - The stream exists and is ready for read and write operations or deletion. You should perform read and write operations only on an ACTIVE stream.    UPDATING - Shards in the stream are being merged or split. Read and write operations continue to work while the stream is in the UPDATING state.  
     */
    StreamStatus: StreamStatus;
    /**
     * The shards that comprise the stream.
     */
    Shards: ShardList;
    /**
     * If set to true, more shards in the stream are available to describe.
     */
    HasMoreShards: BooleanObject;
    /**
     * The current retention period, in hours.
     */
    RetentionPeriodHours: PositiveIntegerObject;
    /**
     * The approximate time that the stream was created.
     */
    StreamCreationTimestamp: Timestamp;
    /**
     * Represents the current enhanced monitoring settings of the stream.
     */
    EnhancedMonitoring: EnhancedMonitoringList;
    /**
     * The server-side encryption type used on the stream. This parameter can be one of the following values:    NONE: Do not encrypt the records in the stream.    KMS: Use server-side encryption on the records in the stream using a customer-managed KMS key.  
     */
    EncryptionType?: EncryptionType;
    /**
     * The GUID for the customer-managed KMS key used for encryption on the stream.
     */
    KeyId?: KeyId;
  }
  export type StreamName = string;
  export type StreamNameList = StreamName[];
  export type StreamStatus = "CREATING"|"DELETING"|"ACTIVE"|"UPDATING"|string;
  export interface Tag {
    /**
     * A unique identifier for the tag. Maximum length: 128 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - % @
     */
    Key: TagKey;
    /**
     * An optional string, typically used to describe or define the tag. Maximum length: 256 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - % @
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export type TagMap = {[key: string]: TagValue};
  export type TagValue = string;
  export type Timestamp = Date;
  export interface UpdateShardCountInput {
    /**
     * The name of the stream.
     */
    StreamName: StreamName;
    /**
     * The new number of shards.
     */
    TargetShardCount: PositiveIntegerObject;
    /**
     * The scaling type. Uniform scaling creates shards of equal size.
     */
    ScalingType: ScalingType;
  }
  export interface UpdateShardCountOutput {
    /**
     * The name of the stream.
     */
    StreamName?: StreamName;
    /**
     * The current number of shards.
     */
    CurrentShardCount?: PositiveIntegerObject;
    /**
     * The updated number of shards.
     */
    TargetShardCount?: PositiveIntegerObject;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2013-12-02"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Kinesis client.
   */
  export import Types = Kinesis;
}
export = Kinesis;
