import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class DAX extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DAX.Types.ClientConfiguration)
  config: Config & DAX.Types.ClientConfiguration;
  /**
   * Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
   */
  createCluster(params: DAX.Types.CreateClusterRequest, callback?: (err: AWSError, data: DAX.Types.CreateClusterResponse) => void): Request<DAX.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
   */
  createCluster(callback?: (err: AWSError, data: DAX.Types.CreateClusterResponse) => void): Request<DAX.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.
   */
  createParameterGroup(params: DAX.Types.CreateParameterGroupRequest, callback?: (err: AWSError, data: DAX.Types.CreateParameterGroupResponse) => void): Request<DAX.Types.CreateParameterGroupResponse, AWSError>;
  /**
   * Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.
   */
  createParameterGroup(callback?: (err: AWSError, data: DAX.Types.CreateParameterGroupResponse) => void): Request<DAX.Types.CreateParameterGroupResponse, AWSError>;
  /**
   * Creates a new subnet group.
   */
  createSubnetGroup(params: DAX.Types.CreateSubnetGroupRequest, callback?: (err: AWSError, data: DAX.Types.CreateSubnetGroupResponse) => void): Request<DAX.Types.CreateSubnetGroupResponse, AWSError>;
  /**
   * Creates a new subnet group.
   */
  createSubnetGroup(callback?: (err: AWSError, data: DAX.Types.CreateSubnetGroupResponse) => void): Request<DAX.Types.CreateSubnetGroupResponse, AWSError>;
  /**
   * Removes one or more nodes from a DAX cluster.  You cannot use DecreaseReplicationFactor to remove the last node in a DAX cluster. If you need to do this, use DeleteCluster instead. 
   */
  decreaseReplicationFactor(params: DAX.Types.DecreaseReplicationFactorRequest, callback?: (err: AWSError, data: DAX.Types.DecreaseReplicationFactorResponse) => void): Request<DAX.Types.DecreaseReplicationFactorResponse, AWSError>;
  /**
   * Removes one or more nodes from a DAX cluster.  You cannot use DecreaseReplicationFactor to remove the last node in a DAX cluster. If you need to do this, use DeleteCluster instead. 
   */
  decreaseReplicationFactor(callback?: (err: AWSError, data: DAX.Types.DecreaseReplicationFactorResponse) => void): Request<DAX.Types.DecreaseReplicationFactorResponse, AWSError>;
  /**
   * Deletes a previously provisioned DAX cluster. DeleteCluster deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.
   */
  deleteCluster(params: DAX.Types.DeleteClusterRequest, callback?: (err: AWSError, data: DAX.Types.DeleteClusterResponse) => void): Request<DAX.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes a previously provisioned DAX cluster. DeleteCluster deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.
   */
  deleteCluster(callback?: (err: AWSError, data: DAX.Types.DeleteClusterResponse) => void): Request<DAX.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.
   */
  deleteParameterGroup(params: DAX.Types.DeleteParameterGroupRequest, callback?: (err: AWSError, data: DAX.Types.DeleteParameterGroupResponse) => void): Request<DAX.Types.DeleteParameterGroupResponse, AWSError>;
  /**
   * Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.
   */
  deleteParameterGroup(callback?: (err: AWSError, data: DAX.Types.DeleteParameterGroupResponse) => void): Request<DAX.Types.DeleteParameterGroupResponse, AWSError>;
  /**
   * Deletes a subnet group.  You cannot delete a subnet group if it is associated with any DAX clusters. 
   */
  deleteSubnetGroup(params: DAX.Types.DeleteSubnetGroupRequest, callback?: (err: AWSError, data: DAX.Types.DeleteSubnetGroupResponse) => void): Request<DAX.Types.DeleteSubnetGroupResponse, AWSError>;
  /**
   * Deletes a subnet group.  You cannot delete a subnet group if it is associated with any DAX clusters. 
   */
  deleteSubnetGroup(callback?: (err: AWSError, data: DAX.Types.DeleteSubnetGroupResponse) => void): Request<DAX.Types.DeleteSubnetGroupResponse, AWSError>;
  /**
   * Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied. If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned. If the cluster is in the DELETING state, only cluster level information will be displayed. If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is available, the cluster is ready for use. If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.
   */
  describeClusters(params: DAX.Types.DescribeClustersRequest, callback?: (err: AWSError, data: DAX.Types.DescribeClustersResponse) => void): Request<DAX.Types.DescribeClustersResponse, AWSError>;
  /**
   * Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied. If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned. If the cluster is in the DELETING state, only cluster level information will be displayed. If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is available, the cluster is ready for use. If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.
   */
  describeClusters(callback?: (err: AWSError, data: DAX.Types.DescribeClustersResponse) => void): Request<DAX.Types.DescribeClustersResponse, AWSError>;
  /**
   * Returns the default system parameter information for the DAX caching software.
   */
  describeDefaultParameters(params: DAX.Types.DescribeDefaultParametersRequest, callback?: (err: AWSError, data: DAX.Types.DescribeDefaultParametersResponse) => void): Request<DAX.Types.DescribeDefaultParametersResponse, AWSError>;
  /**
   * Returns the default system parameter information for the DAX caching software.
   */
  describeDefaultParameters(callback?: (err: AWSError, data: DAX.Types.DescribeDefaultParametersResponse) => void): Request<DAX.Types.DescribeDefaultParametersResponse, AWSError>;
  /**
   * Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
   */
  describeEvents(params: DAX.Types.DescribeEventsRequest, callback?: (err: AWSError, data: DAX.Types.DescribeEventsResponse) => void): Request<DAX.Types.DescribeEventsResponse, AWSError>;
  /**
   * Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
   */
  describeEvents(callback?: (err: AWSError, data: DAX.Types.DescribeEventsResponse) => void): Request<DAX.Types.DescribeEventsResponse, AWSError>;
  /**
   * Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.
   */
  describeParameterGroups(params: DAX.Types.DescribeParameterGroupsRequest, callback?: (err: AWSError, data: DAX.Types.DescribeParameterGroupsResponse) => void): Request<DAX.Types.DescribeParameterGroupsResponse, AWSError>;
  /**
   * Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.
   */
  describeParameterGroups(callback?: (err: AWSError, data: DAX.Types.DescribeParameterGroupsResponse) => void): Request<DAX.Types.DescribeParameterGroupsResponse, AWSError>;
  /**
   * Returns the detailed parameter list for a particular parameter group.
   */
  describeParameters(params: DAX.Types.DescribeParametersRequest, callback?: (err: AWSError, data: DAX.Types.DescribeParametersResponse) => void): Request<DAX.Types.DescribeParametersResponse, AWSError>;
  /**
   * Returns the detailed parameter list for a particular parameter group.
   */
  describeParameters(callback?: (err: AWSError, data: DAX.Types.DescribeParametersResponse) => void): Request<DAX.Types.DescribeParametersResponse, AWSError>;
  /**
   * Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.
   */
  describeSubnetGroups(params: DAX.Types.DescribeSubnetGroupsRequest, callback?: (err: AWSError, data: DAX.Types.DescribeSubnetGroupsResponse) => void): Request<DAX.Types.DescribeSubnetGroupsResponse, AWSError>;
  /**
   * Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.
   */
  describeSubnetGroups(callback?: (err: AWSError, data: DAX.Types.DescribeSubnetGroupsResponse) => void): Request<DAX.Types.DescribeSubnetGroupsResponse, AWSError>;
  /**
   * Adds one or more nodes to a DAX cluster.
   */
  increaseReplicationFactor(params: DAX.Types.IncreaseReplicationFactorRequest, callback?: (err: AWSError, data: DAX.Types.IncreaseReplicationFactorResponse) => void): Request<DAX.Types.IncreaseReplicationFactorResponse, AWSError>;
  /**
   * Adds one or more nodes to a DAX cluster.
   */
  increaseReplicationFactor(callback?: (err: AWSError, data: DAX.Types.IncreaseReplicationFactorResponse) => void): Request<DAX.Types.IncreaseReplicationFactorResponse, AWSError>;
  /**
   * List all of the tags for a DAX cluster. You can call ListTags up to 10 times per second, per account.
   */
  listTags(params: DAX.Types.ListTagsRequest, callback?: (err: AWSError, data: DAX.Types.ListTagsResponse) => void): Request<DAX.Types.ListTagsResponse, AWSError>;
  /**
   * List all of the tags for a DAX cluster. You can call ListTags up to 10 times per second, per account.
   */
  listTags(callback?: (err: AWSError, data: DAX.Types.ListTagsResponse) => void): Request<DAX.Types.ListTagsResponse, AWSError>;
  /**
   * Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.
   */
  rebootNode(params: DAX.Types.RebootNodeRequest, callback?: (err: AWSError, data: DAX.Types.RebootNodeResponse) => void): Request<DAX.Types.RebootNodeResponse, AWSError>;
  /**
   * Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.
   */
  rebootNode(callback?: (err: AWSError, data: DAX.Types.RebootNodeResponse) => void): Request<DAX.Types.RebootNodeResponse, AWSError>;
  /**
   * Associates a set of tags with a DAX resource. You can call TagResource up to 5 times per second, per account. 
   */
  tagResource(params: DAX.Types.TagResourceRequest, callback?: (err: AWSError, data: DAX.Types.TagResourceResponse) => void): Request<DAX.Types.TagResourceResponse, AWSError>;
  /**
   * Associates a set of tags with a DAX resource. You can call TagResource up to 5 times per second, per account. 
   */
  tagResource(callback?: (err: AWSError, data: DAX.Types.TagResourceResponse) => void): Request<DAX.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the association of tags from a DAX resource. You can call UntagResource up to 5 times per second, per account. 
   */
  untagResource(params: DAX.Types.UntagResourceRequest, callback?: (err: AWSError, data: DAX.Types.UntagResourceResponse) => void): Request<DAX.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the association of tags from a DAX resource. You can call UntagResource up to 5 times per second, per account. 
   */
  untagResource(callback?: (err: AWSError, data: DAX.Types.UntagResourceResponse) => void): Request<DAX.Types.UntagResourceResponse, AWSError>;
  /**
   * Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.
   */
  updateCluster(params: DAX.Types.UpdateClusterRequest, callback?: (err: AWSError, data: DAX.Types.UpdateClusterResponse) => void): Request<DAX.Types.UpdateClusterResponse, AWSError>;
  /**
   * Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.
   */
  updateCluster(callback?: (err: AWSError, data: DAX.Types.UpdateClusterResponse) => void): Request<DAX.Types.UpdateClusterResponse, AWSError>;
  /**
   * Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
   */
  updateParameterGroup(params: DAX.Types.UpdateParameterGroupRequest, callback?: (err: AWSError, data: DAX.Types.UpdateParameterGroupResponse) => void): Request<DAX.Types.UpdateParameterGroupResponse, AWSError>;
  /**
   * Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
   */
  updateParameterGroup(callback?: (err: AWSError, data: DAX.Types.UpdateParameterGroupResponse) => void): Request<DAX.Types.UpdateParameterGroupResponse, AWSError>;
  /**
   * Modifies an existing subnet group.
   */
  updateSubnetGroup(params: DAX.Types.UpdateSubnetGroupRequest, callback?: (err: AWSError, data: DAX.Types.UpdateSubnetGroupResponse) => void): Request<DAX.Types.UpdateSubnetGroupResponse, AWSError>;
  /**
   * Modifies an existing subnet group.
   */
  updateSubnetGroup(callback?: (err: AWSError, data: DAX.Types.UpdateSubnetGroupResponse) => void): Request<DAX.Types.UpdateSubnetGroupResponse, AWSError>;
}
declare namespace DAX {
  export type AvailabilityZoneList = String[];
  export type AwsQueryErrorMessage = string;
  export type ChangeType = "IMMEDIATE"|"REQUIRES_REBOOT"|string;
  export interface Cluster {
    /**
     * The name of the DAX cluster.
     */
    ClusterName?: String;
    /**
     * The description of the cluster.
     */
    Description?: String;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the cluster. 
     */
    ClusterArn?: String;
    /**
     * The total number of nodes in the cluster.
     */
    TotalNodes?: IntegerOptional;
    /**
     * The number of nodes in the cluster that are active (i.e., capable of serving requests).
     */
    ActiveNodes?: IntegerOptional;
    /**
     * The node type for the nodes in the cluster. (All nodes in a DAX cluster are of the same type.)
     */
    NodeType?: String;
    /**
     * The current status of the cluster.
     */
    Status?: String;
    /**
     * The configuration endpoint for this DAX cluster, consisting of a DNS name and a port number. Client applications can specify this endpoint, rather than an individual node endpoint, and allow the DAX client software to intelligently route requests and responses to nodes in the DAX cluster.
     */
    ClusterDiscoveryEndpoint?: Endpoint;
    /**
     * A list of nodes to be removed from the cluster.
     */
    NodeIdsToRemove?: NodeIdentifierList;
    /**
     * A list of nodes that are currently in the cluster.
     */
    Nodes?: NodeList;
    /**
     * A range of time when maintenance of DAX cluster software will be performed. For example: sun:01:00-sun:09:00. Cluster maintenance normally takes less than 30 minutes, and is performed automatically within the maintenance window.
     */
    PreferredMaintenanceWindow?: String;
    /**
     * Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).
     */
    NotificationConfiguration?: NotificationConfiguration;
    /**
     * The subnet group where the DAX cluster is running.
     */
    SubnetGroup?: String;
    /**
     * A list of security groups, and the status of each, for the nodes in the cluster.
     */
    SecurityGroups?: SecurityGroupMembershipList;
    /**
     * A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX will assume this role and use the role's permissions to access DynamoDB on your behalf.
     */
    IamRoleArn?: String;
    /**
     * The parameter group being used by nodes in the cluster.
     */
    ParameterGroup?: ParameterGroupStatus;
  }
  export type ClusterList = Cluster[];
  export type ClusterNameList = String[];
  export interface CreateClusterRequest {
    /**
     * The cluster identifier. This parameter is stored as a lowercase string.  Constraints:    A name must contain from 1 to 20 alphanumeric characters or hyphens.   The first character must be a letter.   A name cannot end with a hyphen or contain two consecutive hyphens.  
     */
    ClusterName: String;
    /**
     * The compute and memory capacity of the nodes in the cluster.
     */
    NodeType: String;
    /**
     * A description of the cluster.
     */
    Description?: String;
    /**
     * The number of nodes in the DAX cluster. A replication factor of 1 will create a single-node cluster, without any read replicas. For additional fault tolerance, you can create a multiple node cluster with one or more read replicas. To do this, set ReplicationFactor to 2 or more.  AWS recommends that you have at least two read replicas per cluster. 
     */
    ReplicationFactor: Integer;
    /**
     * The Availability Zones (AZs) in which the cluster nodes will be created. All nodes belonging to the cluster are placed in these Availability Zones. Use this parameter if you want to distribute the nodes across multiple AZs.
     */
    AvailabilityZones?: AvailabilityZoneList;
    /**
     * The name of the subnet group to be used for the replication group.  DAX clusters can only run in an Amazon VPC environment. All of the subnets that you specify in a subnet group must exist in the same VPC. 
     */
    SubnetGroupName?: String;
    /**
     * A list of security group IDs to be assigned to each node in the DAX cluster. (Each of the security group ID is system-generated.) If this parameter is not specified, DAX assigns the default VPC security group to each node.
     */
    SecurityGroupIds?: SecurityGroupIdentifierList;
    /**
     * Specifies the weekly time range during which maintenance on the DAX cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are:    sun     mon     tue     wed     thu     fri     sat    Example: sun:05:00-sun:09:00   If you don't specify a preferred maintenance window when you create or modify a cache cluster, DAX assigns a 60-minute maintenance window on a randomly selected day of the week. 
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications will be sent.  The Amazon SNS topic owner must be same as the DAX cluster owner. 
     */
    NotificationTopicArn?: String;
    /**
     * A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX will assume this role and use the role's permissions to access DynamoDB on your behalf.
     */
    IamRoleArn: String;
    /**
     * The parameter group to be associated with the DAX cluster.
     */
    ParameterGroupName?: String;
    /**
     * A set of tags to associate with the DAX cluster. 
     */
    Tags?: TagList;
  }
  export interface CreateClusterResponse {
    /**
     * A description of the DAX cluster that you have created.
     */
    Cluster?: Cluster;
  }
  export interface CreateParameterGroupRequest {
    /**
     * The name of the parameter group to apply to all of the clusters in this replication group.
     */
    ParameterGroupName: String;
    /**
     * A description of the parameter group.
     */
    Description?: String;
  }
  export interface CreateParameterGroupResponse {
    /**
     * Represents the output of a CreateParameterGroup action.
     */
    ParameterGroup?: ParameterGroup;
  }
  export interface CreateSubnetGroupRequest {
    /**
     * A name for the subnet group. This value is stored as a lowercase string. 
     */
    SubnetGroupName: String;
    /**
     * A description for the subnet group
     */
    Description?: String;
    /**
     * A list of VPC subnet IDs for the subnet group.
     */
    SubnetIds: SubnetIdentifierList;
  }
  export interface CreateSubnetGroupResponse {
    /**
     * Represents the output of a CreateSubnetGroup operation.
     */
    SubnetGroup?: SubnetGroup;
  }
  export interface DecreaseReplicationFactorRequest {
    /**
     * The name of the DAX cluster from which you want to remove nodes.
     */
    ClusterName: String;
    /**
     * The new number of nodes for the DAX cluster.
     */
    NewReplicationFactor: Integer;
    /**
     * The Availability Zone(s) from which to remove nodes.
     */
    AvailabilityZones?: AvailabilityZoneList;
    /**
     * The unique identifiers of the nodes to be removed from the cluster.
     */
    NodeIdsToRemove?: NodeIdentifierList;
  }
  export interface DecreaseReplicationFactorResponse {
    /**
     * A description of the DAX cluster, after you have decreased its replication factor.
     */
    Cluster?: Cluster;
  }
  export interface DeleteClusterRequest {
    /**
     * The name of the cluster to be deleted.
     */
    ClusterName: String;
  }
  export interface DeleteClusterResponse {
    /**
     * A description of the DAX cluster that is being deleted.
     */
    Cluster?: Cluster;
  }
  export interface DeleteParameterGroupRequest {
    /**
     * The name of the parameter group to delete.
     */
    ParameterGroupName: String;
  }
  export interface DeleteParameterGroupResponse {
    /**
     * A user-specified message for this action (i.e., a reason for deleting the parameter group).
     */
    DeletionMessage?: String;
  }
  export interface DeleteSubnetGroupRequest {
    /**
     * The name of the subnet group to delete.
     */
    SubnetGroupName: String;
  }
  export interface DeleteSubnetGroupResponse {
    /**
     * A user-specified message for this action (i.e., a reason for deleting the subnet group).
     */
    DeletionMessage?: String;
  }
  export interface DescribeClustersRequest {
    /**
     * The names of the DAX clusters being described.
     */
    ClusterNames?: ClusterNameList;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved. The value for MaxResults must be between 20 and 100.
     */
    MaxResults?: IntegerOptional;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: String;
  }
  export interface DescribeClustersResponse {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    NextToken?: String;
    /**
     * The descriptions of your DAX clusters, in response to a DescribeClusters request.
     */
    Clusters?: ClusterList;
  }
  export interface DescribeDefaultParametersRequest {
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved. The value for MaxResults must be between 20 and 100.
     */
    MaxResults?: IntegerOptional;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: String;
  }
  export interface DescribeDefaultParametersResponse {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    NextToken?: String;
    /**
     * A list of parameters. Each element in the list represents one parameter.
     */
    Parameters?: ParameterList;
  }
  export interface DescribeEventsRequest {
    /**
     * The identifier of the event source for which events will be returned. If not specified, then all sources are included in the response.
     */
    SourceName?: String;
    /**
     * The event source to retrieve events for. If no value is specified, all events are returned.
     */
    SourceType?: SourceType;
    /**
     * The beginning of the time interval to retrieve events for, specified in ISO 8601 format.
     */
    StartTime?: TStamp;
    /**
     * The end of the time interval for which to retrieve events, specified in ISO 8601 format.
     */
    EndTime?: TStamp;
    /**
     * The number of minutes' worth of events to retrieve.
     */
    Duration?: IntegerOptional;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved. The value for MaxResults must be between 20 and 100.
     */
    MaxResults?: IntegerOptional;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: String;
  }
  export interface DescribeEventsResponse {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    NextToken?: String;
    /**
     * An array of events. Each element in the array represents one event.
     */
    Events?: EventList;
  }
  export interface DescribeParameterGroupsRequest {
    /**
     * The names of the parameter groups.
     */
    ParameterGroupNames?: ParameterGroupNameList;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved. The value for MaxResults must be between 20 and 100.
     */
    MaxResults?: IntegerOptional;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: String;
  }
  export interface DescribeParameterGroupsResponse {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    NextToken?: String;
    /**
     * An array of parameter groups. Each element in the array represents one parameter group.
     */
    ParameterGroups?: ParameterGroupList;
  }
  export interface DescribeParametersRequest {
    /**
     * The name of the parameter group.
     */
    ParameterGroupName: String;
    /**
     * How the parameter is defined. For example, system denotes a system-defined parameter.
     */
    Source?: String;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved. The value for MaxResults must be between 20 and 100.
     */
    MaxResults?: IntegerOptional;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: String;
  }
  export interface DescribeParametersResponse {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    NextToken?: String;
    /**
     * A list of parameters within a parameter group. Each element in the list represents one parameter.
     */
    Parameters?: ParameterList;
  }
  export interface DescribeSubnetGroupsRequest {
    /**
     * The name of the subnet group.
     */
    SubnetGroupNames?: SubnetGroupNameList;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved. The value for MaxResults must be between 20 and 100.
     */
    MaxResults?: IntegerOptional;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: String;
  }
  export interface DescribeSubnetGroupsResponse {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    NextToken?: String;
    /**
     * An array of subnet groups. Each element in the array represents a single subnet group.
     */
    SubnetGroups?: SubnetGroupList;
  }
  export interface Endpoint {
    /**
     * The DNS hostname of the endpoint.
     */
    Address?: String;
    /**
     * The port number that applications should use to connect to the endpoint.
     */
    Port?: Integer;
  }
  export interface Event {
    /**
     * The source of the event. For example, if the event occurred at the node level, the source would be the node ID.
     */
    SourceName?: String;
    /**
     * Specifies the origin of this event - a cluster, a parameter group, a node ID, etc.
     */
    SourceType?: SourceType;
    /**
     * A user-defined message associated with the event.
     */
    Message?: String;
    /**
     * The date and time when the event occurred.
     */
    Date?: TStamp;
  }
  export type EventList = Event[];
  export interface IncreaseReplicationFactorRequest {
    /**
     * The name of the DAX cluster that will receive additional nodes.
     */
    ClusterName: String;
    /**
     * The new number of nodes for the DAX cluster.
     */
    NewReplicationFactor: Integer;
    /**
     * The Availability Zones (AZs) in which the cluster nodes will be created. All nodes belonging to the cluster are placed in these Availability Zones. Use this parameter if you want to distribute the nodes across multiple AZs.
     */
    AvailabilityZones?: AvailabilityZoneList;
  }
  export interface IncreaseReplicationFactorResponse {
    /**
     * A description of the DAX cluster. with its new replication factor.
     */
    Cluster?: Cluster;
  }
  export type Integer = number;
  export type IntegerOptional = number;
  export type IsModifiable = "TRUE"|"FALSE"|"CONDITIONAL"|string;
  export type KeyList = String[];
  export interface ListTagsRequest {
    /**
     * The name of the DAX resource to which the tags belong.
     */
    ResourceName: String;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token.
     */
    NextToken?: String;
  }
  export interface ListTagsResponse {
    /**
     * A list of tags currently associated with the DAX cluster.
     */
    Tags?: TagList;
    /**
     * If this value is present, there are additional results to be displayed. To retrieve them, call ListTags again, with NextToken set to this value.
     */
    NextToken?: String;
  }
  export interface Node {
    /**
     * A system-generated identifier for the node.
     */
    NodeId?: String;
    /**
     * The endpoint for the node, consisting of a DNS name and a port number. Client applications can connect directly to a node endpoint, if desired (as an alternative to allowing DAX client software to intelligently route requests and responses to nodes in the DAX cluster.
     */
    Endpoint?: Endpoint;
    /**
     * The date and time (in UNIX epoch format) when the node was launched.
     */
    NodeCreateTime?: TStamp;
    /**
     * The Availability Zone (AZ) in which the node has been deployed.
     */
    AvailabilityZone?: String;
    /**
     * The current status of the node. For example: available.
     */
    NodeStatus?: String;
    /**
     * The status of the parameter group associated with this node. For example, in-sync.
     */
    ParameterGroupStatus?: String;
  }
  export type NodeIdentifierList = String[];
  export type NodeList = Node[];
  export interface NodeTypeSpecificValue {
    /**
     * A node type to which the parameter value applies.
     */
    NodeType?: String;
    /**
     * The parameter value for this node type.
     */
    Value?: String;
  }
  export type NodeTypeSpecificValueList = NodeTypeSpecificValue[];
  export interface NotificationConfiguration {
    /**
     * The Amazon Resource Name (ARN) that identifies the topic. 
     */
    TopicArn?: String;
    /**
     * The current state of the topic.
     */
    TopicStatus?: String;
  }
  export interface Parameter {
    /**
     * The name of the parameter.
     */
    ParameterName?: String;
    /**
     * Determines whether the parameter can be applied to any nodes, or only nodes of a particular type.
     */
    ParameterType?: ParameterType;
    /**
     * The value for the parameter.
     */
    ParameterValue?: String;
    /**
     * A list of node types, and specific parameter values for each node.
     */
    NodeTypeSpecificValues?: NodeTypeSpecificValueList;
    /**
     * A description of the parameter
     */
    Description?: String;
    /**
     * How the parameter is defined. For example, system denotes a system-defined parameter.
     */
    Source?: String;
    /**
     * The data type of the parameter. For example, integer:
     */
    DataType?: String;
    /**
     * A range of values within which the parameter can be set.
     */
    AllowedValues?: String;
    /**
     * Whether the customer is allowed to modify the parameter.
     */
    IsModifiable?: IsModifiable;
    /**
     * The conditions under which changes to this parameter can be applied. For example, requires-reboot indicates that a new value for this parameter will only take effect if a node is rebooted.
     */
    ChangeType?: ChangeType;
  }
  export interface ParameterGroup {
    /**
     * The name of the parameter group.
     */
    ParameterGroupName?: String;
    /**
     * A description of the parameter group.
     */
    Description?: String;
  }
  export type ParameterGroupList = ParameterGroup[];
  export type ParameterGroupNameList = String[];
  export interface ParameterGroupStatus {
    /**
     * The name of the parameter group.
     */
    ParameterGroupName?: String;
    /**
     * The status of parameter updates. 
     */
    ParameterApplyStatus?: String;
    /**
     * The node IDs of one or more nodes to be rebooted.
     */
    NodeIdsToReboot?: NodeIdentifierList;
  }
  export type ParameterList = Parameter[];
  export interface ParameterNameValue {
    /**
     * The name of the parameter.
     */
    ParameterName?: String;
    /**
     * The value of the parameter.
     */
    ParameterValue?: String;
  }
  export type ParameterNameValueList = ParameterNameValue[];
  export type ParameterType = "DEFAULT"|"NODE_TYPE_SPECIFIC"|string;
  export interface RebootNodeRequest {
    /**
     * The name of the DAX cluster containing the node to be rebooted.
     */
    ClusterName: String;
    /**
     * The system-assigned ID of the node to be rebooted.
     */
    NodeId: String;
  }
  export interface RebootNodeResponse {
    /**
     * A description of the DAX cluster after a node has been rebooted.
     */
    Cluster?: Cluster;
  }
  export type SecurityGroupIdentifierList = String[];
  export interface SecurityGroupMembership {
    /**
     * The unique ID for this security group.
     */
    SecurityGroupIdentifier?: String;
    /**
     * The status of this security group.
     */
    Status?: String;
  }
  export type SecurityGroupMembershipList = SecurityGroupMembership[];
  export type SourceType = "CLUSTER"|"PARAMETER_GROUP"|"SUBNET_GROUP"|string;
  export type String = string;
  export interface Subnet {
    /**
     * The system-assigned identifier for the subnet.
     */
    SubnetIdentifier?: String;
    /**
     * The Availability Zone (AZ) for subnet subnet.
     */
    SubnetAvailabilityZone?: String;
  }
  export interface SubnetGroup {
    /**
     * The name of the subnet group.
     */
    SubnetGroupName?: String;
    /**
     * The description of the subnet group.
     */
    Description?: String;
    /**
     * The Amazon Virtual Private Cloud identifier (VPC ID) of the subnet group.
     */
    VpcId?: String;
    /**
     * A list of subnets associated with the subnet group. 
     */
    Subnets?: SubnetList;
  }
  export type SubnetGroupList = SubnetGroup[];
  export type SubnetGroupNameList = String[];
  export type SubnetIdentifierList = String[];
  export type SubnetList = Subnet[];
  export type TStamp = Date;
  export interface Tag {
    /**
     * The key for the tag. Tag keys are case sensitive. Every DAX cluster can only have one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
     */
    Key?: String;
    /**
     * The value of the tag. Tag values are case-sensitive and can be null. 
     */
    Value?: String;
  }
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The name of the DAX resource to which tags should be added.
     */
    ResourceName: String;
    /**
     * The tags to be assigned to the DAX resource. 
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
    /**
     * The list of tags that are associated with the DAX resource.
     */
    Tags?: TagList;
  }
  export interface UntagResourceRequest {
    /**
     * The name of the DAX resource from which the tags should be removed.
     */
    ResourceName: String;
    /**
     * A list of tag keys. If the DAX cluster has any tags with these keys, then the tags are removed from the cluster.
     */
    TagKeys: KeyList;
  }
  export interface UntagResourceResponse {
    /**
     * The tag keys that have been removed from the cluster.
     */
    Tags?: TagList;
  }
  export interface UpdateClusterRequest {
    /**
     * The name of the DAX cluster to be modified.
     */
    ClusterName: String;
    /**
     * A description of the changes being made to the cluster.
     */
    Description?: String;
    /**
     * A range of time when maintenance of DAX cluster software will be performed. For example: sun:01:00-sun:09:00. Cluster maintenance normally takes less than 30 minutes, and is performed automatically within the maintenance window.
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The Amazon Resource Name (ARN) that identifies the topic.
     */
    NotificationTopicArn?: String;
    /**
     * The current state of the topic.
     */
    NotificationTopicStatus?: String;
    /**
     * The name of a parameter group for this cluster.
     */
    ParameterGroupName?: String;
    /**
     * A list of user-specified security group IDs to be assigned to each node in the DAX cluster. If this parameter is not specified, DAX assigns the default VPC security group to each node.
     */
    SecurityGroupIds?: SecurityGroupIdentifierList;
  }
  export interface UpdateClusterResponse {
    /**
     * A description of the DAX cluster, after it has been modified.
     */
    Cluster?: Cluster;
  }
  export interface UpdateParameterGroupRequest {
    /**
     * The name of the parameter group.
     */
    ParameterGroupName: String;
    /**
     * An array of name-value pairs for the parameters in the group. Each element in the array represents a single parameter.
     */
    ParameterNameValues: ParameterNameValueList;
  }
  export interface UpdateParameterGroupResponse {
    /**
     * The parameter group that has been modified.
     */
    ParameterGroup?: ParameterGroup;
  }
  export interface UpdateSubnetGroupRequest {
    /**
     * The name of the subnet group.
     */
    SubnetGroupName: String;
    /**
     * A description of the subnet group.
     */
    Description?: String;
    /**
     * A list of subnet IDs in the subnet group.
     */
    SubnetIds?: SubnetIdentifierList;
  }
  export interface UpdateSubnetGroupResponse {
    /**
     * The subnet group that has been modified.
     */
    SubnetGroup?: SubnetGroup;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-04-19"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DAX client.
   */
  export import Types = DAX;
}
export = DAX;
