import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class DMS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DMS.Types.ClientConfiguration)
  config: Config & DMS.Types.ClientConfiguration;
  /**
   * Adds metadata tags to a DMS resource, including replication instance, endpoint, security group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS.
   */
  addTagsToResource(params: DMS.Types.AddTagsToResourceMessage, callback?: (err: AWSError, data: DMS.Types.AddTagsToResourceResponse) => void): Request<DMS.Types.AddTagsToResourceResponse, AWSError>;
  /**
   * Adds metadata tags to a DMS resource, including replication instance, endpoint, security group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS.
   */
  addTagsToResource(callback?: (err: AWSError, data: DMS.Types.AddTagsToResourceResponse) => void): Request<DMS.Types.AddTagsToResourceResponse, AWSError>;
  /**
   * Creates an endpoint using the provided settings.
   */
  createEndpoint(params: DMS.Types.CreateEndpointMessage, callback?: (err: AWSError, data: DMS.Types.CreateEndpointResponse) => void): Request<DMS.Types.CreateEndpointResponse, AWSError>;
  /**
   * Creates an endpoint using the provided settings.
   */
  createEndpoint(callback?: (err: AWSError, data: DMS.Types.CreateEndpointResponse) => void): Request<DMS.Types.CreateEndpointResponse, AWSError>;
  /**
   *  Creates an AWS DMS event notification subscription.  You can specify the type of source (SourceType) you want to be notified of, provide a list of AWS DMS source IDs (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. If you specify both the SourceType and SourceIds, such as SourceType = replication-instance and SourceIdentifier = my-replinstance, you will be notified of all the replication instance events for the specified source. If you specify a SourceType but don't specify a SourceIdentifier, you receive notice of the events for that source type for all your AWS DMS sources. If you don't specify either SourceType nor SourceIdentifier, you will be notified of events generated from all AWS DMS sources belonging to your customer account. For more information about AWS DMS events, see  Working with Events and Notifications  in the AWS Database MIgration Service User Guide.
   */
  createEventSubscription(params: DMS.Types.CreateEventSubscriptionMessage, callback?: (err: AWSError, data: DMS.Types.CreateEventSubscriptionResponse) => void): Request<DMS.Types.CreateEventSubscriptionResponse, AWSError>;
  /**
   *  Creates an AWS DMS event notification subscription.  You can specify the type of source (SourceType) you want to be notified of, provide a list of AWS DMS source IDs (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. If you specify both the SourceType and SourceIds, such as SourceType = replication-instance and SourceIdentifier = my-replinstance, you will be notified of all the replication instance events for the specified source. If you specify a SourceType but don't specify a SourceIdentifier, you receive notice of the events for that source type for all your AWS DMS sources. If you don't specify either SourceType nor SourceIdentifier, you will be notified of events generated from all AWS DMS sources belonging to your customer account. For more information about AWS DMS events, see  Working with Events and Notifications  in the AWS Database MIgration Service User Guide.
   */
  createEventSubscription(callback?: (err: AWSError, data: DMS.Types.CreateEventSubscriptionResponse) => void): Request<DMS.Types.CreateEventSubscriptionResponse, AWSError>;
  /**
   * Creates the replication instance using the specified parameters.
   */
  createReplicationInstance(params: DMS.Types.CreateReplicationInstanceMessage, callback?: (err: AWSError, data: DMS.Types.CreateReplicationInstanceResponse) => void): Request<DMS.Types.CreateReplicationInstanceResponse, AWSError>;
  /**
   * Creates the replication instance using the specified parameters.
   */
  createReplicationInstance(callback?: (err: AWSError, data: DMS.Types.CreateReplicationInstanceResponse) => void): Request<DMS.Types.CreateReplicationInstanceResponse, AWSError>;
  /**
   * Creates a replication subnet group given a list of the subnet IDs in a VPC.
   */
  createReplicationSubnetGroup(params: DMS.Types.CreateReplicationSubnetGroupMessage, callback?: (err: AWSError, data: DMS.Types.CreateReplicationSubnetGroupResponse) => void): Request<DMS.Types.CreateReplicationSubnetGroupResponse, AWSError>;
  /**
   * Creates a replication subnet group given a list of the subnet IDs in a VPC.
   */
  createReplicationSubnetGroup(callback?: (err: AWSError, data: DMS.Types.CreateReplicationSubnetGroupResponse) => void): Request<DMS.Types.CreateReplicationSubnetGroupResponse, AWSError>;
  /**
   * Creates a replication task using the specified parameters.
   */
  createReplicationTask(params: DMS.Types.CreateReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.CreateReplicationTaskResponse) => void): Request<DMS.Types.CreateReplicationTaskResponse, AWSError>;
  /**
   * Creates a replication task using the specified parameters.
   */
  createReplicationTask(callback?: (err: AWSError, data: DMS.Types.CreateReplicationTaskResponse) => void): Request<DMS.Types.CreateReplicationTaskResponse, AWSError>;
  /**
   * Deletes the specified certificate. 
   */
  deleteCertificate(params: DMS.Types.DeleteCertificateMessage, callback?: (err: AWSError, data: DMS.Types.DeleteCertificateResponse) => void): Request<DMS.Types.DeleteCertificateResponse, AWSError>;
  /**
   * Deletes the specified certificate. 
   */
  deleteCertificate(callback?: (err: AWSError, data: DMS.Types.DeleteCertificateResponse) => void): Request<DMS.Types.DeleteCertificateResponse, AWSError>;
  /**
   * Deletes the specified endpoint.  All tasks associated with the endpoint must be deleted before you can delete the endpoint.  
   */
  deleteEndpoint(params: DMS.Types.DeleteEndpointMessage, callback?: (err: AWSError, data: DMS.Types.DeleteEndpointResponse) => void): Request<DMS.Types.DeleteEndpointResponse, AWSError>;
  /**
   * Deletes the specified endpoint.  All tasks associated with the endpoint must be deleted before you can delete the endpoint.  
   */
  deleteEndpoint(callback?: (err: AWSError, data: DMS.Types.DeleteEndpointResponse) => void): Request<DMS.Types.DeleteEndpointResponse, AWSError>;
  /**
   *  Deletes an AWS DMS event subscription. 
   */
  deleteEventSubscription(params: DMS.Types.DeleteEventSubscriptionMessage, callback?: (err: AWSError, data: DMS.Types.DeleteEventSubscriptionResponse) => void): Request<DMS.Types.DeleteEventSubscriptionResponse, AWSError>;
  /**
   *  Deletes an AWS DMS event subscription. 
   */
  deleteEventSubscription(callback?: (err: AWSError, data: DMS.Types.DeleteEventSubscriptionResponse) => void): Request<DMS.Types.DeleteEventSubscriptionResponse, AWSError>;
  /**
   * Deletes the specified replication instance.  You must delete any migration tasks that are associated with the replication instance before you can delete it.  
   */
  deleteReplicationInstance(params: DMS.Types.DeleteReplicationInstanceMessage, callback?: (err: AWSError, data: DMS.Types.DeleteReplicationInstanceResponse) => void): Request<DMS.Types.DeleteReplicationInstanceResponse, AWSError>;
  /**
   * Deletes the specified replication instance.  You must delete any migration tasks that are associated with the replication instance before you can delete it.  
   */
  deleteReplicationInstance(callback?: (err: AWSError, data: DMS.Types.DeleteReplicationInstanceResponse) => void): Request<DMS.Types.DeleteReplicationInstanceResponse, AWSError>;
  /**
   * Deletes a subnet group.
   */
  deleteReplicationSubnetGroup(params: DMS.Types.DeleteReplicationSubnetGroupMessage, callback?: (err: AWSError, data: DMS.Types.DeleteReplicationSubnetGroupResponse) => void): Request<DMS.Types.DeleteReplicationSubnetGroupResponse, AWSError>;
  /**
   * Deletes a subnet group.
   */
  deleteReplicationSubnetGroup(callback?: (err: AWSError, data: DMS.Types.DeleteReplicationSubnetGroupResponse) => void): Request<DMS.Types.DeleteReplicationSubnetGroupResponse, AWSError>;
  /**
   * Deletes the specified replication task.
   */
  deleteReplicationTask(params: DMS.Types.DeleteReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.DeleteReplicationTaskResponse) => void): Request<DMS.Types.DeleteReplicationTaskResponse, AWSError>;
  /**
   * Deletes the specified replication task.
   */
  deleteReplicationTask(callback?: (err: AWSError, data: DMS.Types.DeleteReplicationTaskResponse) => void): Request<DMS.Types.DeleteReplicationTaskResponse, AWSError>;
  /**
   * Lists all of the AWS DMS attributes for a customer account. The attributes include AWS DMS quotas for the account, such as the number of replication instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value. This command does not take any parameters.
   */
  describeAccountAttributes(params: DMS.Types.DescribeAccountAttributesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeAccountAttributesResponse) => void): Request<DMS.Types.DescribeAccountAttributesResponse, AWSError>;
  /**
   * Lists all of the AWS DMS attributes for a customer account. The attributes include AWS DMS quotas for the account, such as the number of replication instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value. This command does not take any parameters.
   */
  describeAccountAttributes(callback?: (err: AWSError, data: DMS.Types.DescribeAccountAttributesResponse) => void): Request<DMS.Types.DescribeAccountAttributesResponse, AWSError>;
  /**
   * Provides a description of the certificate.
   */
  describeCertificates(params: DMS.Types.DescribeCertificatesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeCertificatesResponse) => void): Request<DMS.Types.DescribeCertificatesResponse, AWSError>;
  /**
   * Provides a description of the certificate.
   */
  describeCertificates(callback?: (err: AWSError, data: DMS.Types.DescribeCertificatesResponse) => void): Request<DMS.Types.DescribeCertificatesResponse, AWSError>;
  /**
   * Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
   */
  describeConnections(params: DMS.Types.DescribeConnectionsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeConnectionsResponse) => void): Request<DMS.Types.DescribeConnectionsResponse, AWSError>;
  /**
   * Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
   */
  describeConnections(callback?: (err: AWSError, data: DMS.Types.DescribeConnectionsResponse) => void): Request<DMS.Types.DescribeConnectionsResponse, AWSError>;
  /**
   * Returns information about the type of endpoints available.
   */
  describeEndpointTypes(params: DMS.Types.DescribeEndpointTypesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEndpointTypesResponse) => void): Request<DMS.Types.DescribeEndpointTypesResponse, AWSError>;
  /**
   * Returns information about the type of endpoints available.
   */
  describeEndpointTypes(callback?: (err: AWSError, data: DMS.Types.DescribeEndpointTypesResponse) => void): Request<DMS.Types.DescribeEndpointTypesResponse, AWSError>;
  /**
   * Returns information about the endpoints for your account in the current region.
   */
  describeEndpoints(params: DMS.Types.DescribeEndpointsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEndpointsResponse) => void): Request<DMS.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Returns information about the endpoints for your account in the current region.
   */
  describeEndpoints(callback?: (err: AWSError, data: DMS.Types.DescribeEndpointsResponse) => void): Request<DMS.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in  Working with Events and Notifications  in the AWS Database Migration Service User Guide. 
   */
  describeEventCategories(params: DMS.Types.DescribeEventCategoriesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEventCategoriesResponse) => void): Request<DMS.Types.DescribeEventCategoriesResponse, AWSError>;
  /**
   * Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in  Working with Events and Notifications  in the AWS Database Migration Service User Guide. 
   */
  describeEventCategories(callback?: (err: AWSError, data: DMS.Types.DescribeEventCategoriesResponse) => void): Request<DMS.Types.DescribeEventCategoriesResponse, AWSError>;
  /**
   * Lists all the event subscriptions for a customer account. The description of a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.  If you specify SubscriptionName, this action lists the description for that subscription.
   */
  describeEventSubscriptions(params: DMS.Types.DescribeEventSubscriptionsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEventSubscriptionsResponse) => void): Request<DMS.Types.DescribeEventSubscriptionsResponse, AWSError>;
  /**
   * Lists all the event subscriptions for a customer account. The description of a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.  If you specify SubscriptionName, this action lists the description for that subscription.
   */
  describeEventSubscriptions(callback?: (err: AWSError, data: DMS.Types.DescribeEventSubscriptionsResponse) => void): Request<DMS.Types.DescribeEventSubscriptionsResponse, AWSError>;
  /**
   *  Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on AWS DMS events, see  Working with Events and Notifications . 
   */
  describeEvents(params: DMS.Types.DescribeEventsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEventsResponse) => void): Request<DMS.Types.DescribeEventsResponse, AWSError>;
  /**
   *  Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on AWS DMS events, see  Working with Events and Notifications . 
   */
  describeEvents(callback?: (err: AWSError, data: DMS.Types.DescribeEventsResponse) => void): Request<DMS.Types.DescribeEventsResponse, AWSError>;
  /**
   * Returns information about the replication instance types that can be created in the specified region.
   */
  describeOrderableReplicationInstances(params: DMS.Types.DescribeOrderableReplicationInstancesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeOrderableReplicationInstancesResponse) => void): Request<DMS.Types.DescribeOrderableReplicationInstancesResponse, AWSError>;
  /**
   * Returns information about the replication instance types that can be created in the specified region.
   */
  describeOrderableReplicationInstances(callback?: (err: AWSError, data: DMS.Types.DescribeOrderableReplicationInstancesResponse) => void): Request<DMS.Types.DescribeOrderableReplicationInstancesResponse, AWSError>;
  /**
   * Returns the status of the RefreshSchemas operation.
   */
  describeRefreshSchemasStatus(params: DMS.Types.DescribeRefreshSchemasStatusMessage, callback?: (err: AWSError, data: DMS.Types.DescribeRefreshSchemasStatusResponse) => void): Request<DMS.Types.DescribeRefreshSchemasStatusResponse, AWSError>;
  /**
   * Returns the status of the RefreshSchemas operation.
   */
  describeRefreshSchemasStatus(callback?: (err: AWSError, data: DMS.Types.DescribeRefreshSchemasStatusResponse) => void): Request<DMS.Types.DescribeRefreshSchemasStatusResponse, AWSError>;
  /**
   * Returns information about replication instances for your account in the current region.
   */
  describeReplicationInstances(params: DMS.Types.DescribeReplicationInstancesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Returns information about replication instances for your account in the current region.
   */
  describeReplicationInstances(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Returns information about the replication subnet groups.
   */
  describeReplicationSubnetGroups(params: DMS.Types.DescribeReplicationSubnetGroupsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationSubnetGroupsResponse) => void): Request<DMS.Types.DescribeReplicationSubnetGroupsResponse, AWSError>;
  /**
   * Returns information about the replication subnet groups.
   */
  describeReplicationSubnetGroups(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationSubnetGroupsResponse) => void): Request<DMS.Types.DescribeReplicationSubnetGroupsResponse, AWSError>;
  /**
   * Returns information about replication tasks for your account in the current region.
   */
  describeReplicationTasks(params: DMS.Types.DescribeReplicationTasksMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Returns information about replication tasks for your account in the current region.
   */
  describeReplicationTasks(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Returns information about the schema for the specified endpoint. 
   */
  describeSchemas(params: DMS.Types.DescribeSchemasMessage, callback?: (err: AWSError, data: DMS.Types.DescribeSchemasResponse) => void): Request<DMS.Types.DescribeSchemasResponse, AWSError>;
  /**
   * Returns information about the schema for the specified endpoint. 
   */
  describeSchemas(callback?: (err: AWSError, data: DMS.Types.DescribeSchemasResponse) => void): Request<DMS.Types.DescribeSchemasResponse, AWSError>;
  /**
   * Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted. Note that the "last updated" column the DMS console only indicates the time that AWS DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.
   */
  describeTableStatistics(params: DMS.Types.DescribeTableStatisticsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeTableStatisticsResponse) => void): Request<DMS.Types.DescribeTableStatisticsResponse, AWSError>;
  /**
   * Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted. Note that the "last updated" column the DMS console only indicates the time that AWS DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.
   */
  describeTableStatistics(callback?: (err: AWSError, data: DMS.Types.DescribeTableStatisticsResponse) => void): Request<DMS.Types.DescribeTableStatisticsResponse, AWSError>;
  /**
   * Uploads the specified certificate.
   */
  importCertificate(params: DMS.Types.ImportCertificateMessage, callback?: (err: AWSError, data: DMS.Types.ImportCertificateResponse) => void): Request<DMS.Types.ImportCertificateResponse, AWSError>;
  /**
   * Uploads the specified certificate.
   */
  importCertificate(callback?: (err: AWSError, data: DMS.Types.ImportCertificateResponse) => void): Request<DMS.Types.ImportCertificateResponse, AWSError>;
  /**
   * Lists all tags for an AWS DMS resource.
   */
  listTagsForResource(params: DMS.Types.ListTagsForResourceMessage, callback?: (err: AWSError, data: DMS.Types.ListTagsForResourceResponse) => void): Request<DMS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all tags for an AWS DMS resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: DMS.Types.ListTagsForResourceResponse) => void): Request<DMS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Modifies the specified endpoint.
   */
  modifyEndpoint(params: DMS.Types.ModifyEndpointMessage, callback?: (err: AWSError, data: DMS.Types.ModifyEndpointResponse) => void): Request<DMS.Types.ModifyEndpointResponse, AWSError>;
  /**
   * Modifies the specified endpoint.
   */
  modifyEndpoint(callback?: (err: AWSError, data: DMS.Types.ModifyEndpointResponse) => void): Request<DMS.Types.ModifyEndpointResponse, AWSError>;
  /**
   * Modifies an existing AWS DMS event notification subscription. 
   */
  modifyEventSubscription(params: DMS.Types.ModifyEventSubscriptionMessage, callback?: (err: AWSError, data: DMS.Types.ModifyEventSubscriptionResponse) => void): Request<DMS.Types.ModifyEventSubscriptionResponse, AWSError>;
  /**
   * Modifies an existing AWS DMS event notification subscription. 
   */
  modifyEventSubscription(callback?: (err: AWSError, data: DMS.Types.ModifyEventSubscriptionResponse) => void): Request<DMS.Types.ModifyEventSubscriptionResponse, AWSError>;
  /**
   * Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request. Some settings are applied during the maintenance window. 
   */
  modifyReplicationInstance(params: DMS.Types.ModifyReplicationInstanceMessage, callback?: (err: AWSError, data: DMS.Types.ModifyReplicationInstanceResponse) => void): Request<DMS.Types.ModifyReplicationInstanceResponse, AWSError>;
  /**
   * Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request. Some settings are applied during the maintenance window. 
   */
  modifyReplicationInstance(callback?: (err: AWSError, data: DMS.Types.ModifyReplicationInstanceResponse) => void): Request<DMS.Types.ModifyReplicationInstanceResponse, AWSError>;
  /**
   * Modifies the settings for the specified replication subnet group.
   */
  modifyReplicationSubnetGroup(params: DMS.Types.ModifyReplicationSubnetGroupMessage, callback?: (err: AWSError, data: DMS.Types.ModifyReplicationSubnetGroupResponse) => void): Request<DMS.Types.ModifyReplicationSubnetGroupResponse, AWSError>;
  /**
   * Modifies the settings for the specified replication subnet group.
   */
  modifyReplicationSubnetGroup(callback?: (err: AWSError, data: DMS.Types.ModifyReplicationSubnetGroupResponse) => void): Request<DMS.Types.ModifyReplicationSubnetGroupResponse, AWSError>;
  /**
   * Modifies the specified replication task. You can't modify the task endpoints. The task must be stopped before you can modify it.  For more information about AWS DMS tasks, see the AWS DMS user guide at  Working with Migration Tasks  
   */
  modifyReplicationTask(params: DMS.Types.ModifyReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.ModifyReplicationTaskResponse) => void): Request<DMS.Types.ModifyReplicationTaskResponse, AWSError>;
  /**
   * Modifies the specified replication task. You can't modify the task endpoints. The task must be stopped before you can modify it.  For more information about AWS DMS tasks, see the AWS DMS user guide at  Working with Migration Tasks  
   */
  modifyReplicationTask(callback?: (err: AWSError, data: DMS.Types.ModifyReplicationTaskResponse) => void): Request<DMS.Types.ModifyReplicationTaskResponse, AWSError>;
  /**
   * Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
   */
  refreshSchemas(params: DMS.Types.RefreshSchemasMessage, callback?: (err: AWSError, data: DMS.Types.RefreshSchemasResponse) => void): Request<DMS.Types.RefreshSchemasResponse, AWSError>;
  /**
   * Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
   */
  refreshSchemas(callback?: (err: AWSError, data: DMS.Types.RefreshSchemasResponse) => void): Request<DMS.Types.RefreshSchemasResponse, AWSError>;
  /**
   * Reloads the target database table with the source data. 
   */
  reloadTables(params: DMS.Types.ReloadTablesMessage, callback?: (err: AWSError, data: DMS.Types.ReloadTablesResponse) => void): Request<DMS.Types.ReloadTablesResponse, AWSError>;
  /**
   * Reloads the target database table with the source data. 
   */
  reloadTables(callback?: (err: AWSError, data: DMS.Types.ReloadTablesResponse) => void): Request<DMS.Types.ReloadTablesResponse, AWSError>;
  /**
   * Removes metadata tags from a DMS resource.
   */
  removeTagsFromResource(params: DMS.Types.RemoveTagsFromResourceMessage, callback?: (err: AWSError, data: DMS.Types.RemoveTagsFromResourceResponse) => void): Request<DMS.Types.RemoveTagsFromResourceResponse, AWSError>;
  /**
   * Removes metadata tags from a DMS resource.
   */
  removeTagsFromResource(callback?: (err: AWSError, data: DMS.Types.RemoveTagsFromResourceResponse) => void): Request<DMS.Types.RemoveTagsFromResourceResponse, AWSError>;
  /**
   * Starts the replication task. For more information about AWS DMS tasks, see the AWS DMS user guide at  Working with Migration Tasks  
   */
  startReplicationTask(params: DMS.Types.StartReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.StartReplicationTaskResponse) => void): Request<DMS.Types.StartReplicationTaskResponse, AWSError>;
  /**
   * Starts the replication task. For more information about AWS DMS tasks, see the AWS DMS user guide at  Working with Migration Tasks  
   */
  startReplicationTask(callback?: (err: AWSError, data: DMS.Types.StartReplicationTaskResponse) => void): Request<DMS.Types.StartReplicationTaskResponse, AWSError>;
  /**
   * Stops the replication task. 
   */
  stopReplicationTask(params: DMS.Types.StopReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.StopReplicationTaskResponse) => void): Request<DMS.Types.StopReplicationTaskResponse, AWSError>;
  /**
   * Stops the replication task. 
   */
  stopReplicationTask(callback?: (err: AWSError, data: DMS.Types.StopReplicationTaskResponse) => void): Request<DMS.Types.StopReplicationTaskResponse, AWSError>;
  /**
   * Tests the connection between the replication instance and the endpoint.
   */
  testConnection(params: DMS.Types.TestConnectionMessage, callback?: (err: AWSError, data: DMS.Types.TestConnectionResponse) => void): Request<DMS.Types.TestConnectionResponse, AWSError>;
  /**
   * Tests the connection between the replication instance and the endpoint.
   */
  testConnection(callback?: (err: AWSError, data: DMS.Types.TestConnectionResponse) => void): Request<DMS.Types.TestConnectionResponse, AWSError>;
}
declare namespace DMS {
  export interface AccountQuota {
    /**
     * The name of the AWS DMS quota for this AWS account.
     */
    AccountQuotaName?: String;
    /**
     * The amount currently used toward the quota maximum.
     */
    Used?: Long;
    /**
     * The maximum allowed value for the quota.
     */
    Max?: Long;
  }
  export type AccountQuotaList = AccountQuota[];
  export interface AddTagsToResourceMessage {
    /**
     * The Amazon Resource Name (ARN) of the AWS DMS resource the tag is to be added to. AWS DMS resources include a replication instance, endpoint, and a replication task.
     */
    ResourceArn: String;
    /**
     * The tag to be assigned to the DMS resource.
     */
    Tags: TagList;
  }
  export interface AddTagsToResourceResponse {
  }
  export type AuthMechanismValue = "default"|"mongodb_cr"|"scram_sha_1"|string;
  export type AuthTypeValue = "no"|"password"|string;
  export interface AvailabilityZone {
    /**
     * The name of the availability zone.
     */
    Name?: String;
  }
  export type Boolean = boolean;
  export type BooleanOptional = boolean;
  export interface Certificate {
    /**
     * The customer-assigned name of the certificate. Valid characters are A-z and 0-9.
     */
    CertificateIdentifier?: String;
    /**
     * The date that the certificate was created.
     */
    CertificateCreationDate?: TStamp;
    /**
     * The contents of the .pem X.509 certificate file for the certificate.
     */
    CertificatePem?: String;
    /**
     * The location of the imported Oracle Wallet certificate for use with SSL.
     */
    CertificateWallet?: CertificateWallet;
    /**
     * The Amazon Resource Name (ARN) for the certificate.
     */
    CertificateArn?: String;
    /**
     * The owner of the certificate.
     */
    CertificateOwner?: String;
    /**
     * The beginning date that the certificate is valid.
     */
    ValidFromDate?: TStamp;
    /**
     * The final date that the certificate is valid.
     */
    ValidToDate?: TStamp;
    /**
     * The signing algorithm for the certificate.
     */
    SigningAlgorithm?: String;
    /**
     * The key length of the cryptographic algorithm being used.
     */
    KeyLength?: IntegerOptional;
  }
  export type CertificateList = Certificate[];
  export type CertificateWallet = Buffer|Uint8Array|Blob|string;
  export type CompressionTypeValue = "none"|"gzip"|string;
  export interface Connection {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn?: String;
    /**
     * The connection status.
     */
    Status?: String;
    /**
     * The error message when the connection last failed.
     */
    LastFailureMessage?: String;
    /**
     * The identifier of the endpoint. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.
     */
    EndpointIdentifier?: String;
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string.
     */
    ReplicationInstanceIdentifier?: String;
  }
  export type ConnectionList = Connection[];
  export interface CreateEndpointMessage {
    /**
     * The database endpoint identifier. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.
     */
    EndpointIdentifier: String;
    /**
     * The type of endpoint.
     */
    EndpointType: ReplicationEndpointTypeValue;
    /**
     * The type of engine for the endpoint. Valid values, depending on the EndPointType, include MYSQL, ORACLE, POSTGRES, MARIADB, AURORA, REDSHIFT, S3, SYBASE, DYNAMODB, MONGODB, and SQLSERVER.
     */
    EngineName: String;
    /**
     * The user name to be used to login to the endpoint database.
     */
    Username?: String;
    /**
     * The password to be used to login to the endpoint database.
     */
    Password?: SecretString;
    /**
     * The name of the server where the endpoint database resides.
     */
    ServerName?: String;
    /**
     * The port used by the endpoint database.
     */
    Port?: IntegerOptional;
    /**
     * The name of the endpoint database.
     */
    DatabaseName?: String;
    /**
     * Additional attributes associated with the connection.
     */
    ExtraConnectionAttributes?: String;
    /**
     * The KMS key identifier that will be used to encrypt the connection parameters. If you do not specify a value for the KmsKeyId parameter, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.
     */
    KmsKeyId?: String;
    /**
     * Tags to be added to the endpoint.
     */
    Tags?: TagList;
    /**
     * The Amazon Resource Number (ARN) for the certificate.
     */
    CertificateArn?: String;
    /**
     * The SSL mode to use for the SSL connection. SSL mode can be one of four values: none, require, verify-ca, verify-full.  The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     * Settings in JSON format for the target Amazon DynamoDB endpoint. For more information about the available settings, see the Using Object Mapping to Migrate Data to DynamoDB section at  Using an Amazon DynamoDB Database as a Target for AWS Database Migration Service. 
     */
    DynamoDbSettings?: DynamoDbSettings;
    /**
     * Settings in JSON format for the target S3 endpoint. For more information about the available settings, see the Extra Connection Attributes section at  Using Amazon S3 as a Target for AWS Database Migration Service. 
     */
    S3Settings?: S3Settings;
    /**
     * Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see the Configuration Properties When Using MongoDB as a Source for AWS Database Migration Service section at  Using Amazon S3 as a Target for AWS Database Migration Service. 
     */
    MongoDbSettings?: MongoDbSettings;
  }
  export interface CreateEndpointResponse {
    /**
     * The endpoint that was created.
     */
    Endpoint?: Endpoint;
  }
  export interface CreateEventSubscriptionMessage {
    /**
     * The name of the DMS event notification subscription.  Constraints: The name must be less than 255 characters. 
     */
    SubscriptionName: String;
    /**
     *  The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it. 
     */
    SnsTopicArn: String;
    /**
     *  The type of AWS DMS resource that generates the events. For example, if you want to be notified of events generated by a replication instance, you set this parameter to replication-instance. If this value is not specified, all events are returned.  Valid values: replication-instance | migration-task
     */
    SourceType?: String;
    /**
     *  A list of event categories for a source type that you want to subscribe to. You can see a list of the categories for a given source type by calling the DescribeEventCategories action or in the topic  Working with Events and Notifications in the AWS Database Migration Service User Guide. 
     */
    EventCategories?: EventCategoriesList;
    /**
     *  The list of identifiers of the event sources for which events will be returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it cannot end with a hyphen or contain two consecutive hyphens. 
     */
    SourceIds?: SourceIdsList;
    /**
     *  A Boolean value; set to true to activate the subscription, or set to false to create the subscription but not activate it. 
     */
    Enabled?: BooleanOptional;
    /**
     * A tag to be attached to the event subscription.
     */
    Tags?: TagList;
  }
  export interface CreateEventSubscriptionResponse {
    /**
     * The event subscription that was created.
     */
    EventSubscription?: EventSubscription;
  }
  export interface CreateReplicationInstanceMessage {
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: myrepinstance 
     */
    ReplicationInstanceIdentifier: String;
    /**
     * The amount of storage (in gigabytes) to be initially allocated for the replication instance.
     */
    AllocatedStorage?: IntegerOptional;
    /**
     * The compute and memory capacity of the replication instance as specified by the replication instance class.  Valid Values: dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge  
     */
    ReplicationInstanceClass: String;
    /**
     *  Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance. 
     */
    VpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * The EC2 Availability Zone that the replication instance will be created in. Default: A random, system-chosen Availability Zone in the endpoint's region.  Example: us-east-1d 
     */
    AvailabilityZone?: String;
    /**
     * A subnet group to associate with the replication instance.
     */
    ReplicationSubnetGroupIdentifier?: String;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).  Format: ddd:hh24:mi-ddd:hh24:mi  Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.
     */
    PreferredMaintenanceWindow?: String;
    /**
     *  Specifies if the replication instance is a Multi-AZ deployment. You cannot set the AvailabilityZone parameter if the Multi-AZ parameter is set to true. 
     */
    MultiAZ?: BooleanOptional;
    /**
     * The engine version number of the replication instance.
     */
    EngineVersion?: String;
    /**
     * Indicates that minor engine upgrades will be applied automatically to the replication instance during the maintenance window. Default: true 
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * Tags to be associated with the replication instance.
     */
    Tags?: TagList;
    /**
     * The KMS key identifier that will be used to encrypt the content on the replication instance. If you do not specify a value for the KmsKeyId parameter, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.
     */
    KmsKeyId?: String;
    /**
     *  Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address. The default value is true. 
     */
    PubliclyAccessible?: BooleanOptional;
  }
  export interface CreateReplicationInstanceResponse {
    /**
     * The replication instance that was created.
     */
    ReplicationInstance?: ReplicationInstance;
  }
  export interface CreateReplicationSubnetGroupMessage {
    /**
     * The name for the replication subnet group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters, periods, spaces, underscores, or hyphens. Must not be "default". Example: mySubnetgroup 
     */
    ReplicationSubnetGroupIdentifier: String;
    /**
     * The description for the subnet group.
     */
    ReplicationSubnetGroupDescription: String;
    /**
     * The EC2 subnet IDs for the subnet group.
     */
    SubnetIds: SubnetIdentifierList;
    /**
     * The tag to be assigned to the subnet group.
     */
    Tags?: TagList;
  }
  export interface CreateReplicationSubnetGroupResponse {
    /**
     * The replication subnet group that was created.
     */
    ReplicationSubnetGroup?: ReplicationSubnetGroup;
  }
  export interface CreateReplicationTaskMessage {
    /**
     * The replication task identifier. Constraints:   Must contain from 1 to 255 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.  
     */
    ReplicationTaskIdentifier: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    SourceEndpointArn: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    TargetEndpointArn: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
    /**
     * The migration type.
     */
    MigrationType: MigrationTypeValue;
    /**
     * When using the AWS CLI or boto3, provide the path of the JSON file that contains the table mappings. Precede the path with "file://". When working with the DMS API, provide the JSON as the parameter value. For example, --table-mappings file://mappingfile.json
     */
    TableMappings: String;
    /**
     * Settings for the task, such as target metadata settings. For a complete list of task settings, see Task Settings for AWS Database Migration Service Tasks.
     */
    ReplicationTaskSettings?: String;
    /**
     * The start time for the Change Data Capture (CDC) operation.
     */
    CdcStartTime?: TStamp;
    /**
     * Tags to be added to the replication instance.
     */
    Tags?: TagList;
  }
  export interface CreateReplicationTaskResponse {
    /**
     * The replication task that was created.
     */
    ReplicationTask?: ReplicationTask;
  }
  export interface DeleteCertificateMessage {
    /**
     * The Amazon Resource Name (ARN) of the deleted certificate.
     */
    CertificateArn: String;
  }
  export interface DeleteCertificateResponse {
    /**
     * The Secure Sockets Layer (SSL) certificate.
     */
    Certificate?: Certificate;
  }
  export interface DeleteEndpointMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
  }
  export interface DeleteEndpointResponse {
    /**
     * The endpoint that was deleted.
     */
    Endpoint?: Endpoint;
  }
  export interface DeleteEventSubscriptionMessage {
    /**
     * The name of the DMS event notification subscription to be deleted.
     */
    SubscriptionName: String;
  }
  export interface DeleteEventSubscriptionResponse {
    /**
     * The event subscription that was deleted.
     */
    EventSubscription?: EventSubscription;
  }
  export interface DeleteReplicationInstanceMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance to be deleted.
     */
    ReplicationInstanceArn: String;
  }
  export interface DeleteReplicationInstanceResponse {
    /**
     * The replication instance that was deleted.
     */
    ReplicationInstance?: ReplicationInstance;
  }
  export interface DeleteReplicationSubnetGroupMessage {
    /**
     * The subnet group name of the replication instance.
     */
    ReplicationSubnetGroupIdentifier: String;
  }
  export interface DeleteReplicationSubnetGroupResponse {
  }
  export interface DeleteReplicationTaskMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication task to be deleted.
     */
    ReplicationTaskArn: String;
  }
  export interface DeleteReplicationTaskResponse {
    /**
     * The deleted replication task.
     */
    ReplicationTask?: ReplicationTask;
  }
  export interface DescribeAccountAttributesMessage {
  }
  export interface DescribeAccountAttributesResponse {
    /**
     * Account quota information.
     */
    AccountQuotas?: AccountQuotaList;
  }
  export interface DescribeCertificatesMessage {
    /**
     * Filters applied to the certificate described in the form of key-value pairs.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 10
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeCertificatesResponse {
    /**
     * The pagination token.
     */
    Marker?: String;
    /**
     * The Secure Sockets Layer (SSL) certificates associated with the replication instance.
     */
    Certificates?: CertificateList;
  }
  export interface DescribeConnectionsMessage {
    /**
     * The filters applied to the connection. Valid filter names: endpoint-arn | replication-instance-arn
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeConnectionsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * A description of the connections.
     */
    Connections?: ConnectionList;
  }
  export interface DescribeEndpointTypesMessage {
    /**
     * Filters applied to the describe action. Valid filter names: engine-name | endpoint-type
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEndpointTypesResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * The type of endpoints that are supported.
     */
    SupportedEndpointTypes?: SupportedEndpointTypeList;
  }
  export interface DescribeEndpointsMessage {
    /**
     * Filters applied to the describe action. Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEndpointsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * Endpoint description.
     */
    Endpoints?: EndpointList;
  }
  export interface DescribeEventCategoriesMessage {
    /**
     *  The type of AWS DMS resource that generates events.  Valid values: replication-instance | migration-task
     */
    SourceType?: String;
    /**
     * Filters applied to the action.
     */
    Filters?: FilterList;
  }
  export interface DescribeEventCategoriesResponse {
    /**
     * A list of event categories.
     */
    EventCategoryGroupList?: EventCategoryGroupList;
  }
  export interface DescribeEventSubscriptionsMessage {
    /**
     * The name of the AWS DMS event subscription to be described.
     */
    SubscriptionName?: String;
    /**
     * Filters applied to the action.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEventSubscriptionsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * A list of event subscriptions.
     */
    EventSubscriptionsList?: EventSubscriptionsList;
  }
  export interface DescribeEventsMessage {
    /**
     *  The identifier of the event source. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens. It cannot end with a hyphen or contain two consecutive hyphens. 
     */
    SourceIdentifier?: String;
    /**
     * The type of AWS DMS resource that generates events. Valid values: replication-instance | migration-task
     */
    SourceType?: SourceType;
    /**
     * The start time for the events to be listed.
     */
    StartTime?: TStamp;
    /**
     * The end time for the events to be listed.
     */
    EndTime?: TStamp;
    /**
     * The duration of the events to be listed.
     */
    Duration?: IntegerOptional;
    /**
     * A list of event categories for a source type that you want to subscribe to.
     */
    EventCategories?: EventCategoriesList;
    /**
     * Filters applied to the action.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEventsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * The events described.
     */
    Events?: EventList;
  }
  export interface DescribeOrderableReplicationInstancesMessage {
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeOrderableReplicationInstancesResponse {
    /**
     * The order-able replication instances available.
     */
    OrderableReplicationInstances?: OrderableReplicationInstanceList;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeRefreshSchemasStatusMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
  }
  export interface DescribeRefreshSchemasStatusResponse {
    /**
     * The status of the schema.
     */
    RefreshSchemasStatus?: RefreshSchemasStatus;
  }
  export interface DescribeReplicationInstancesMessage {
    /**
     * Filters applied to the describe action. Valid filter names: replication-instance-arn | replication-instance-id | replication-instance-class | engine-version
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeReplicationInstancesResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * The replication instances described.
     */
    ReplicationInstances?: ReplicationInstanceList;
  }
  export interface DescribeReplicationSubnetGroupsMessage {
    /**
     * Filters applied to the describe action.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeReplicationSubnetGroupsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * A description of the replication subnet groups.
     */
    ReplicationSubnetGroups?: ReplicationSubnetGroups;
  }
  export interface DescribeReplicationTasksMessage {
    /**
     * Filters applied to the describe action. Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeReplicationTasksResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * A description of the replication tasks.
     */
    ReplicationTasks?: ReplicationTaskList;
  }
  export interface DescribeSchemasMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeSchemasResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * The described schema.
     */
    Schemas?: SchemaList;
  }
  export interface DescribeTableStatisticsMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn: String;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 500.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * Filters applied to the describe table statistics action. Valid filter names: schema-name | table-name | table-state A combination of filters creates an AND condition where each record matches all specified filters.
     */
    Filters?: FilterList;
  }
  export interface DescribeTableStatisticsResponse {
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn?: String;
    /**
     * The table statistics.
     */
    TableStatistics?: TableStatisticsList;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export type DmsSslModeValue = "none"|"require"|"verify-ca"|"verify-full"|string;
  export interface DynamoDbSettings {
    /**
     *  The Amazon Resource Name (ARN) used by the service access IAM role. 
     */
    ServiceAccessRoleArn: String;
  }
  export interface Endpoint {
    /**
     * The database endpoint identifier. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.
     */
    EndpointIdentifier?: String;
    /**
     * The type of endpoint.
     */
    EndpointType?: ReplicationEndpointTypeValue;
    /**
     * The database engine name. Valid values, depending on the EndPointType, include MYSQL, ORACLE, POSTGRES, MARIADB, AURORA, REDSHIFT, S3, SYBASE, DYNAMODB, MONGODB, and SQLSERVER.
     */
    EngineName?: String;
    /**
     * The user name used to connect to the endpoint.
     */
    Username?: String;
    /**
     * The name of the server at the endpoint.
     */
    ServerName?: String;
    /**
     * The port value used to access the endpoint.
     */
    Port?: IntegerOptional;
    /**
     * The name of the database at the endpoint.
     */
    DatabaseName?: String;
    /**
     * Additional connection attributes used to connect to the endpoint.
     */
    ExtraConnectionAttributes?: String;
    /**
     * The status of the endpoint.
     */
    Status?: String;
    /**
     * The KMS key identifier that will be used to encrypt the connection parameters. If you do not specify a value for the KmsKeyId parameter, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.
     */
    KmsKeyId?: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn?: String;
    /**
     * The Amazon Resource Name (ARN) used for SSL connection to the endpoint.
     */
    CertificateArn?: String;
    /**
     * The SSL mode used to connect to the endpoint. SSL mode can be one of four values: none, require, verify-ca, verify-full.  The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     *  Value returned by a call to CreateEndpoint that can be used for cross-account validation. Use it on a subsequent call to CreateEndpoint to create the endpoint with a cross-account. 
     */
    ExternalId?: String;
    /**
     * The settings for the target DynamoDB database. For more information, see the DynamoDBSettings structure.
     */
    DynamoDbSettings?: DynamoDbSettings;
    /**
     * The settings for the S3 target endpoint. For more information, see the S3Settings structure.
     */
    S3Settings?: S3Settings;
    /**
     * The settings for the MongoDB source endpoint. For more information, see the MongoDbSettings structure.
     */
    MongoDbSettings?: MongoDbSettings;
  }
  export type EndpointList = Endpoint[];
  export interface Event {
    /**
     *  The identifier of the event source. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it cannot end with a hyphen or contain two consecutive hyphens.  Constraints:replication instance, endpoint, migration task
     */
    SourceIdentifier?: String;
    /**
     *  The type of AWS DMS resource that generates events.  Valid values: replication-instance | endpoint | migration-task
     */
    SourceType?: SourceType;
    /**
     * The event message.
     */
    Message?: String;
    /**
     * The event categories available for the specified source type.
     */
    EventCategories?: EventCategoriesList;
    /**
     * The date of the event.
     */
    Date?: TStamp;
  }
  export type EventCategoriesList = String[];
  export interface EventCategoryGroup {
    /**
     *  The type of AWS DMS resource that generates events.  Valid values: replication-instance | replication-server | security-group | migration-task
     */
    SourceType?: String;
    /**
     *  A list of event categories for a SourceType that you want to subscribe to. 
     */
    EventCategories?: EventCategoriesList;
  }
  export type EventCategoryGroupList = EventCategoryGroup[];
  export type EventList = Event[];
  export interface EventSubscription {
    /**
     * The AWS customer account associated with the AWS DMS event notification subscription.
     */
    CustomerAwsId?: String;
    /**
     * The AWS DMS event notification subscription Id.
     */
    CustSubscriptionId?: String;
    /**
     * The topic ARN of the AWS DMS event notification subscription.
     */
    SnsTopicArn?: String;
    /**
     * The status of the AWS DMS event notification subscription. Constraints: Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist The status "no-permission" indicates that AWS DMS no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.
     */
    Status?: String;
    /**
     * The time the RDS event notification subscription was created.
     */
    SubscriptionCreationTime?: String;
    /**
     *  The type of AWS DMS resource that generates events.  Valid values: replication-instance | replication-server | security-group | migration-task
     */
    SourceType?: String;
    /**
     * A list of source Ids for the event subscription.
     */
    SourceIdsList?: SourceIdsList;
    /**
     * A lists of event categories.
     */
    EventCategoriesList?: EventCategoriesList;
    /**
     * Boolean value that indicates if the event subscription is enabled.
     */
    Enabled?: Boolean;
  }
  export type EventSubscriptionsList = EventSubscription[];
  export type ExceptionMessage = string;
  export interface Filter {
    /**
     * The name of the filter.
     */
    Name: String;
    /**
     * The filter value.
     */
    Values: FilterValueList;
  }
  export type FilterList = Filter[];
  export type FilterValueList = String[];
  export interface ImportCertificateMessage {
    /**
     * The customer-assigned name of the certificate. Valid characters are A-z and 0-9.
     */
    CertificateIdentifier: String;
    /**
     * The contents of the .pem X.509 certificate file for the certificate.
     */
    CertificatePem?: String;
    /**
     * The location of the imported Oracle Wallet certificate for use with SSL.
     */
    CertificateWallet?: CertificateWallet;
    /**
     * The tags associated with the certificate.
     */
    Tags?: TagList;
  }
  export interface ImportCertificateResponse {
    /**
     * The certificate to be uploaded.
     */
    Certificate?: Certificate;
  }
  export type Integer = number;
  export type IntegerOptional = number;
  export type KeyList = String[];
  export interface ListTagsForResourceMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the AWS DMS resource.
     */
    ResourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of tags for the resource.
     */
    TagList?: TagList;
  }
  export type Long = number;
  export type MigrationTypeValue = "full-load"|"cdc"|"full-load-and-cdc"|string;
  export interface ModifyEndpointMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
    /**
     * The database endpoint identifier. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.
     */
    EndpointIdentifier?: String;
    /**
     * The type of endpoint.
     */
    EndpointType?: ReplicationEndpointTypeValue;
    /**
     * The type of engine for the endpoint. Valid values, depending on the EndPointType, include MYSQL, ORACLE, POSTGRES, MARIADB, AURORA, REDSHIFT, S3, DYNAMODB, MONGODB, SYBASE, and SQLSERVER.
     */
    EngineName?: String;
    /**
     * The user name to be used to login to the endpoint database.
     */
    Username?: String;
    /**
     * The password to be used to login to the endpoint database.
     */
    Password?: SecretString;
    /**
     * The name of the server where the endpoint database resides.
     */
    ServerName?: String;
    /**
     * The port used by the endpoint database.
     */
    Port?: IntegerOptional;
    /**
     * The name of the endpoint database.
     */
    DatabaseName?: String;
    /**
     * Additional attributes associated with the connection. To reset this parameter, pass the empty string ("") as an argument.
     */
    ExtraConnectionAttributes?: String;
    /**
     * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
     */
    CertificateArn?: String;
    /**
     * The SSL mode to be used. SSL mode can be one of four values: none, require, verify-ca, verify-full.  The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     * Settings in JSON format for the target Amazon DynamoDB endpoint. For more information about the available settings, see the Using Object Mapping to Migrate Data to DynamoDB section at  Using an Amazon DynamoDB Database as a Target for AWS Database Migration Service. 
     */
    DynamoDbSettings?: DynamoDbSettings;
    /**
     * Settings in JSON format for the target S3 endpoint. For more information about the available settings, see the Extra Connection Attributes section at  Using Amazon S3 as a Target for AWS Database Migration Service. 
     */
    S3Settings?: S3Settings;
    /**
     * Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see the Configuration Properties When Using MongoDB as a Source for AWS Database Migration Service section at  Using Amazon S3 as a Target for AWS Database Migration Service. 
     */
    MongoDbSettings?: MongoDbSettings;
  }
  export interface ModifyEndpointResponse {
    /**
     * The modified endpoint.
     */
    Endpoint?: Endpoint;
  }
  export interface ModifyEventSubscriptionMessage {
    /**
     * The name of the AWS DMS event notification subscription to be modified.
     */
    SubscriptionName: String;
    /**
     *  The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
     */
    SnsTopicArn?: String;
    /**
     *  The type of AWS DMS resource that generates the events you want to subscribe to.  Valid values: replication-instance | migration-task
     */
    SourceType?: String;
    /**
     *  A list of event categories for a source type that you want to subscribe to. Use the DescribeEventCategories action to see a list of event categories. 
     */
    EventCategories?: EventCategoriesList;
    /**
     *  A Boolean value; set to true to activate the subscription. 
     */
    Enabled?: BooleanOptional;
  }
  export interface ModifyEventSubscriptionResponse {
    /**
     * The modified event subscription.
     */
    EventSubscription?: EventSubscription;
  }
  export interface ModifyReplicationInstanceMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
    /**
     * The amount of storage (in gigabytes) to be allocated for the replication instance.
     */
    AllocatedStorage?: IntegerOptional;
    /**
     * Indicates whether the changes should be applied immediately or during the next maintenance window.
     */
    ApplyImmediately?: Boolean;
    /**
     * The compute and memory capacity of the replication instance.  Valid Values: dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge  
     */
    ReplicationInstanceClass?: String;
    /**
     *  Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance. 
     */
    VpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter does not result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied. Default: Uses existing setting Format: ddd:hh24:mi-ddd:hh24:mi Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun Constraints: Must be at least 30 minutes
     */
    PreferredMaintenanceWindow?: String;
    /**
     *  Specifies if the replication instance is a Multi-AZ deployment. You cannot set the AvailabilityZone parameter if the Multi-AZ parameter is set to true. 
     */
    MultiAZ?: BooleanOptional;
    /**
     * The engine version number of the replication instance.
     */
    EngineVersion?: String;
    /**
     * Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage and the change is asynchronously applied as soon as possible. Constraints: This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the replication instance's current version.
     */
    AllowMajorVersionUpgrade?: Boolean;
    /**
     *  Indicates that minor version upgrades will be applied automatically to the replication instance during the maintenance window. Changing this parameter does not result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to true during the maintenance window, and a newer minor version is available, and AWS DMS has enabled auto patching for that engine version. 
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string.
     */
    ReplicationInstanceIdentifier?: String;
  }
  export interface ModifyReplicationInstanceResponse {
    /**
     * The modified replication instance.
     */
    ReplicationInstance?: ReplicationInstance;
  }
  export interface ModifyReplicationSubnetGroupMessage {
    /**
     * The name of the replication instance subnet group.
     */
    ReplicationSubnetGroupIdentifier: String;
    /**
     * The description of the replication instance subnet group.
     */
    ReplicationSubnetGroupDescription?: String;
    /**
     * A list of subnet IDs.
     */
    SubnetIds: SubnetIdentifierList;
  }
  export interface ModifyReplicationSubnetGroupResponse {
    /**
     * The modified replication subnet group.
     */
    ReplicationSubnetGroup?: ReplicationSubnetGroup;
  }
  export interface ModifyReplicationTaskMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn: String;
    /**
     * The replication task identifier. Constraints:   Must contain from 1 to 255 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.  
     */
    ReplicationTaskIdentifier?: String;
    /**
     * The migration type. Valid values: full-load | cdc | full-load-and-cdc
     */
    MigrationType?: MigrationTypeValue;
    /**
     * When using the AWS CLI or boto3, provide the path of the JSON file that contains the table mappings. Precede the path with "file://". When working with the DMS API, provide the JSON as the parameter value. For example, --table-mappings file://mappingfile.json
     */
    TableMappings?: String;
    /**
     * JSON file that contains settings for the task, such as target metadata settings.
     */
    ReplicationTaskSettings?: String;
    /**
     * The start time for the Change Data Capture (CDC) operation.
     */
    CdcStartTime?: TStamp;
  }
  export interface ModifyReplicationTaskResponse {
    /**
     * The replication task that was modified.
     */
    ReplicationTask?: ReplicationTask;
  }
  export interface MongoDbSettings {
    /**
     * The user name you use to access the MongoDB source endpoint. 
     */
    Username?: String;
    /**
     *  The password for the user account you use to access the MongoDB source endpoint. 
     */
    Password?: SecretString;
    /**
     *  The name of the server on the MongoDB source endpoint. 
     */
    ServerName?: String;
    /**
     *  The port value for the MongoDB source endpoint. 
     */
    Port?: IntegerOptional;
    /**
     *  The database name on the MongoDB source endpoint. 
     */
    DatabaseName?: String;
    /**
     *  The authentication type you use to access the MongoDB source endpoint. Valid values: NO, PASSWORD  When NO is selected, user name and password parameters are not used and can be empty. 
     */
    AuthType?: AuthTypeValue;
    /**
     *  The authentication mechanism you use to access the MongoDB source endpoint. Valid values: DEFAULT, MONGODB_CR, SCRAM_SHA_1  DEFAULT – For MongoDB version 2.x, use MONGODB_CR. For MongoDB version 3.x, use SCRAM_SHA_1. This attribute is not used when authType=No.
     */
    AuthMechanism?: AuthMechanismValue;
    /**
     *  Specifies either document or table mode.  Valid values: NONE, ONE Default value is NONE. Specify NONE to use document mode. Specify ONE to use table mode.
     */
    NestingLevel?: NestingLevelValue;
    /**
     *  Specifies the document ID. Use this attribute when NestingLevel is set to NONE.  Default value is false. 
     */
    ExtractDocId?: String;
    /**
     *  Indicates the number of documents to preview to determine the document organization. Use this attribute when NestingLevel is set to ONE.  Must be a positive value greater than 0. Default value is 1000.
     */
    DocsToInvestigate?: String;
    /**
     *  The MongoDB database name. This attribute is not used when authType=NO.  The default is admin.
     */
    AuthSource?: String;
  }
  export type NestingLevelValue = "none"|"one"|string;
  export interface OrderableReplicationInstance {
    /**
     * The version of the replication engine.
     */
    EngineVersion?: String;
    /**
     * The compute and memory capacity of the replication instance.  Valid Values: dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge  
     */
    ReplicationInstanceClass?: String;
    /**
     * The type of storage used by the replication instance.
     */
    StorageType?: String;
    /**
     * The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.
     */
    MinAllocatedStorage?: Integer;
    /**
     * The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.
     */
    MaxAllocatedStorage?: Integer;
    /**
     * The default amount of storage (in gigabytes) that is allocated for the replication instance.
     */
    DefaultAllocatedStorage?: Integer;
    /**
     * The amount of storage (in gigabytes) that is allocated for the replication instance.
     */
    IncludedAllocatedStorage?: Integer;
  }
  export type OrderableReplicationInstanceList = OrderableReplicationInstance[];
  export interface RefreshSchemasMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
  }
  export interface RefreshSchemasResponse {
    /**
     * The status of the refreshed schema.
     */
    RefreshSchemasStatus?: RefreshSchemasStatus;
  }
  export interface RefreshSchemasStatus {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * The status of the schema.
     */
    Status?: RefreshSchemasStatusTypeValue;
    /**
     * The date the schema was last refreshed.
     */
    LastRefreshDate?: TStamp;
    /**
     * The last failure message for the schema.
     */
    LastFailureMessage?: String;
  }
  export type RefreshSchemasStatusTypeValue = "successful"|"failed"|"refreshing"|string;
  export interface ReloadTablesMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance. 
     */
    ReplicationTaskArn: String;
    /**
     * The name and schema of the table to be reloaded. 
     */
    TablesToReload: TableListToReload;
  }
  export interface ReloadTablesResponse {
    /**
     * The Amazon Resource Name (ARN) of the replication task. 
     */
    ReplicationTaskArn?: String;
  }
  export interface RemoveTagsFromResourceMessage {
    /**
     * &gt;The Amazon Resource Name (ARN) of the AWS DMS resource the tag is to be removed from.
     */
    ResourceArn: String;
    /**
     * The tag key (name) of the tag to be removed.
     */
    TagKeys: KeyList;
  }
  export interface RemoveTagsFromResourceResponse {
  }
  export type ReplicationEndpointTypeValue = "source"|"target"|string;
  export interface ReplicationInstance {
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: myrepinstance 
     */
    ReplicationInstanceIdentifier?: String;
    /**
     * The compute and memory capacity of the replication instance.  Valid Values: dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge  
     */
    ReplicationInstanceClass?: String;
    /**
     * The status of the replication instance.
     */
    ReplicationInstanceStatus?: String;
    /**
     * The amount of storage (in gigabytes) that is allocated for the replication instance.
     */
    AllocatedStorage?: Integer;
    /**
     * The time the replication instance was created.
     */
    InstanceCreateTime?: TStamp;
    /**
     * The VPC security group for the instance.
     */
    VpcSecurityGroups?: VpcSecurityGroupMembershipList;
    /**
     * The Availability Zone for the instance.
     */
    AvailabilityZone?: String;
    /**
     * The subnet group for the replication instance.
     */
    ReplicationSubnetGroup?: ReplicationSubnetGroup;
    /**
     * The maintenance window times for the replication instance.
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The pending modification values.
     */
    PendingModifiedValues?: ReplicationPendingModifiedValues;
    /**
     *  Specifies if the replication instance is a Multi-AZ deployment. You cannot set the AvailabilityZone parameter if the Multi-AZ parameter is set to true. 
     */
    MultiAZ?: Boolean;
    /**
     * The engine version number of the replication instance.
     */
    EngineVersion?: String;
    /**
     * Boolean value indicating if minor version upgrades will be automatically applied to the instance.
     */
    AutoMinorVersionUpgrade?: Boolean;
    /**
     * The KMS key identifier that is used to encrypt the content on the replication instance. If you do not specify a value for the KmsKeyId parameter, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.
     */
    KmsKeyId?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * The public IP address of the replication instance.
     */
    ReplicationInstancePublicIpAddress?: String;
    /**
     * The private IP address of the replication instance.
     */
    ReplicationInstancePrivateIpAddress?: String;
    /**
     * The public IP address of the replication instance.
     */
    ReplicationInstancePublicIpAddresses?: ReplicationInstancePublicIpAddressList;
    /**
     * The private IP address of the replication instance.
     */
    ReplicationInstancePrivateIpAddresses?: ReplicationInstancePrivateIpAddressList;
    /**
     *  Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address. The default value is true. 
     */
    PubliclyAccessible?: Boolean;
    /**
     * The availability zone of the standby replication instance in a Multi-AZ deployment.
     */
    SecondaryAvailabilityZone?: String;
  }
  export type ReplicationInstanceList = ReplicationInstance[];
  export type ReplicationInstancePrivateIpAddressList = String[];
  export type ReplicationInstancePublicIpAddressList = String[];
  export interface ReplicationPendingModifiedValues {
    /**
     * The compute and memory capacity of the replication instance.  Valid Values: dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge  
     */
    ReplicationInstanceClass?: String;
    /**
     * The amount of storage (in gigabytes) that is allocated for the replication instance.
     */
    AllocatedStorage?: IntegerOptional;
    /**
     *  Specifies if the replication instance is a Multi-AZ deployment. You cannot set the AvailabilityZone parameter if the Multi-AZ parameter is set to true. 
     */
    MultiAZ?: BooleanOptional;
    /**
     * The engine version number of the replication instance.
     */
    EngineVersion?: String;
  }
  export interface ReplicationSubnetGroup {
    /**
     * The identifier of the replication instance subnet group.
     */
    ReplicationSubnetGroupIdentifier?: String;
    /**
     * The description of the replication subnet group.
     */
    ReplicationSubnetGroupDescription?: String;
    /**
     * The ID of the VPC.
     */
    VpcId?: String;
    /**
     * The status of the subnet group.
     */
    SubnetGroupStatus?: String;
    /**
     * The subnets that are in the subnet group.
     */
    Subnets?: SubnetList;
  }
  export type ReplicationSubnetGroups = ReplicationSubnetGroup[];
  export interface ReplicationTask {
    /**
     * The replication task identifier. Constraints:   Must contain from 1 to 255 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.  
     */
    ReplicationTaskIdentifier?: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    SourceEndpointArn?: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    TargetEndpointArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * The type of migration.
     */
    MigrationType?: MigrationTypeValue;
    /**
     * Table mappings specified in the task.
     */
    TableMappings?: String;
    /**
     * The settings for the replication task.
     */
    ReplicationTaskSettings?: String;
    /**
     * The status of the replication task.
     */
    Status?: String;
    /**
     * The last error (failure) message generated for the replication instance.
     */
    LastFailureMessage?: String;
    /**
     * The reason the replication task was stopped.
     */
    StopReason?: String;
    /**
     * The date the replication task was created.
     */
    ReplicationTaskCreationDate?: TStamp;
    /**
     * The date the replication task is scheduled to start.
     */
    ReplicationTaskStartDate?: TStamp;
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn?: String;
    /**
     * The statistics for the task, including elapsed time, tables loaded, and table errors.
     */
    ReplicationTaskStats?: ReplicationTaskStats;
  }
  export type ReplicationTaskList = ReplicationTask[];
  export interface ReplicationTaskStats {
    /**
     * The percent complete for the full load migration task.
     */
    FullLoadProgressPercent?: Integer;
    /**
     * The elapsed time of the task, in milliseconds.
     */
    ElapsedTimeMillis?: Long;
    /**
     * The number of tables loaded for this task.
     */
    TablesLoaded?: Integer;
    /**
     * The number of tables currently loading for this task.
     */
    TablesLoading?: Integer;
    /**
     * The number of tables queued for this task.
     */
    TablesQueued?: Integer;
    /**
     * The number of errors that have occurred during this task.
     */
    TablesErrored?: Integer;
  }
  export interface S3Settings {
    /**
     *  The Amazon Resource Name (ARN) used by the service access IAM role. 
     */
    ServiceAccessRoleArn?: String;
    /**
     *  
     */
    ExternalTableDefinition?: String;
    /**
     *  The delimiter used to separate rows in the source files. The default is a carriage return (\n). 
     */
    CsvRowDelimiter?: String;
    /**
     *  The delimiter used to separate columns in the source files. The default is a comma. 
     */
    CsvDelimiter?: String;
    /**
     *  An optional parameter to set a folder name in the S3 bucket. If provided, tables are created in the path &lt;bucketFolder&gt;/&lt;schema_name&gt;/&lt;table_name&gt;/. If this parameter is not specified, then the path used is &lt;schema_name&gt;/&lt;table_name&gt;/. 
     */
    BucketFolder?: String;
    /**
     *  The name of the S3 bucket. 
     */
    BucketName?: String;
    /**
     *  An optional parameter to use GZIP to compress the target files. Set to GZIP to compress the target files. Set to NONE (the default) or do not use to leave the files uncompressed. 
     */
    CompressionType?: CompressionTypeValue;
  }
  export type SchemaList = String[];
  export type SecretString = string;
  export type SourceIdsList = String[];
  export type SourceType = "replication-instance"|string;
  export interface StartReplicationTaskMessage {
    /**
     * The Amazon Resource Number (ARN) of the replication task to be started.
     */
    ReplicationTaskArn: String;
    /**
     * The type of replication task.
     */
    StartReplicationTaskType: StartReplicationTaskTypeValue;
    /**
     * The start time for the Change Data Capture (CDC) operation.
     */
    CdcStartTime?: TStamp;
  }
  export interface StartReplicationTaskResponse {
    /**
     * The replication task started.
     */
    ReplicationTask?: ReplicationTask;
  }
  export type StartReplicationTaskTypeValue = "start-replication"|"resume-processing"|"reload-target"|string;
  export interface StopReplicationTaskMessage {
    /**
     * The Amazon Resource Number(ARN) of the replication task to be stopped.
     */
    ReplicationTaskArn: String;
  }
  export interface StopReplicationTaskResponse {
    /**
     * The replication task stopped.
     */
    ReplicationTask?: ReplicationTask;
  }
  export type String = string;
  export interface Subnet {
    /**
     * The subnet identifier.
     */
    SubnetIdentifier?: String;
    /**
     * The Availability Zone of the subnet.
     */
    SubnetAvailabilityZone?: AvailabilityZone;
    /**
     * The status of the subnet.
     */
    SubnetStatus?: String;
  }
  export type SubnetIdentifierList = String[];
  export type SubnetList = Subnet[];
  export interface SupportedEndpointType {
    /**
     * The database engine name. Valid values, depending on the EndPointType, include MYSQL, ORACLE, POSTGRES, MARIADB, AURORA, REDSHIFT, S3, SYBASE, DYNAMODB, MONGODB, and SQLSERVER.
     */
    EngineName?: String;
    /**
     * Indicates if Change Data Capture (CDC) is supported.
     */
    SupportsCDC?: Boolean;
    /**
     * The type of endpoint.
     */
    EndpointType?: ReplicationEndpointTypeValue;
  }
  export type SupportedEndpointTypeList = SupportedEndpointType[];
  export type TStamp = Date;
  export type TableListToReload = TableToReload[];
  export interface TableStatistics {
    /**
     * The schema name.
     */
    SchemaName?: String;
    /**
     * The name of the table.
     */
    TableName?: String;
    /**
     * The number of insert actions performed on a table.
     */
    Inserts?: Long;
    /**
     * The number of delete actions performed on a table.
     */
    Deletes?: Long;
    /**
     * The number of update actions performed on a table.
     */
    Updates?: Long;
    /**
     * The Data Definition Language (DDL) used to build and modify the structure of your tables.
     */
    Ddls?: Long;
    /**
     * The number of rows added during the Full Load operation.
     */
    FullLoadRows?: Long;
    /**
     * The number of rows that failed conditional checks during the Full Load operation (valid only for DynamoDB as a target migrations).
     */
    FullLoadCondtnlChkFailedRows?: Long;
    /**
     * The number of rows that failed to load during the Full Load operation (valid only for DynamoDB as a target migrations).
     */
    FullLoadErrorRows?: Long;
    /**
     * The last time the table was updated.
     */
    LastUpdateTime?: TStamp;
    /**
     * The state of the tables described. Valid states: Table does not exist | Before load | Full load | Table completed | Table cancelled | Table error | Table all | Table updates | Table is being reloaded
     */
    TableState?: String;
  }
  export type TableStatisticsList = TableStatistics[];
  export interface TableToReload {
    /**
     * The schema name of the table to be reloaded.
     */
    SchemaName?: String;
    /**
     * The table name of the table to be reloaded.
     */
    TableName?: String;
  }
  export interface Tag {
    /**
     * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and cannot be prefixed with "aws:" or "dms:". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").
     */
    Key?: String;
    /**
     * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and cannot be prefixed with "aws:" or "dms:". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").
     */
    Value?: String;
  }
  export type TagList = Tag[];
  export interface TestConnectionMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
  }
  export interface TestConnectionResponse {
    /**
     * The connection tested.
     */
    Connection?: Connection;
  }
  export type VpcSecurityGroupIdList = String[];
  export interface VpcSecurityGroupMembership {
    /**
     * The VPC security group Id.
     */
    VpcSecurityGroupId?: String;
    /**
     * The status of the VPC security group.
     */
    Status?: String;
  }
  export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-01-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DMS client.
   */
  export import Types = DMS;
}
export = DMS;
