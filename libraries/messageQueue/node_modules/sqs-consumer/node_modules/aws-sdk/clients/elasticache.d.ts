import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ElastiCache extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ElastiCache.Types.ClientConfiguration)
  config: Config & ElastiCache.Types.ClientConfiguration;
  /**
   * Adds up to 50 cost allocation tags to the named resource. A cost allocation tag is a key-value pair where the key and value are case-sensitive. You can use cost allocation tags to categorize and track your AWS costs.  When you apply tags to your ElastiCache resources, AWS generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see Using Cost Allocation Tags in Amazon ElastiCache in the ElastiCache User Guide.
   */
  addTagsToResource(params: ElastiCache.Types.AddTagsToResourceMessage, callback?: (err: AWSError, data: ElastiCache.Types.TagListMessage) => void): Request<ElastiCache.Types.TagListMessage, AWSError>;
  /**
   * Adds up to 50 cost allocation tags to the named resource. A cost allocation tag is a key-value pair where the key and value are case-sensitive. You can use cost allocation tags to categorize and track your AWS costs.  When you apply tags to your ElastiCache resources, AWS generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see Using Cost Allocation Tags in Amazon ElastiCache in the ElastiCache User Guide.
   */
  addTagsToResource(callback?: (err: AWSError, data: ElastiCache.Types.TagListMessage) => void): Request<ElastiCache.Types.TagListMessage, AWSError>;
  /**
   * Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.  You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region. 
   */
  authorizeCacheSecurityGroupIngress(params: ElastiCache.Types.AuthorizeCacheSecurityGroupIngressMessage, callback?: (err: AWSError, data: ElastiCache.Types.AuthorizeCacheSecurityGroupIngressResult) => void): Request<ElastiCache.Types.AuthorizeCacheSecurityGroupIngressResult, AWSError>;
  /**
   * Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.  You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region. 
   */
  authorizeCacheSecurityGroupIngress(callback?: (err: AWSError, data: ElastiCache.Types.AuthorizeCacheSecurityGroupIngressResult) => void): Request<ElastiCache.Types.AuthorizeCacheSecurityGroupIngressResult, AWSError>;
  /**
   * Makes a copy of an existing snapshot.  This operation is valid for Redis only.   Users or groups that have permissions to use the CopySnapshot operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the CopySnapshot operation. For more information about using IAM to control the use of ElastiCache operations, see Exporting Snapshots and Authentication &amp; Access Control.  You could receive the following error messages.  Error Messages     Error Message: The S3 bucket %s is outside of the region.  Solution: Create an Amazon S3 bucket in the same region as your snapshot. For more information, see Step 1: Create an Amazon S3 Bucket in the ElastiCache User Guide.    Error Message: The S3 bucket %s does not exist.  Solution: Create an Amazon S3 bucket in the same region as your snapshot. For more information, see Step 1: Create an Amazon S3 Bucket in the ElastiCache User Guide.    Error Message: The S3 bucket %s is not owned by the authenticated user.  Solution: Create an Amazon S3 bucket in the same region as your snapshot. For more information, see Step 1: Create an Amazon S3 Bucket in the ElastiCache User Guide.    Error Message: The authenticated user does not have sufficient permissions to perform the desired activity.  Solution: Contact your system administrator to get the needed permissions.    Error Message: The S3 bucket %s already contains an object with key %s.  Solution: Give the TargetSnapshotName a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for TargetSnapshotName.    Error Message:  ElastiCache has not been granted READ permissions %s on the S3 Bucket.  Solution: Add List and Read permissions on the bucket. For more information, see Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket in the ElastiCache User Guide.    Error Message:  ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.  Solution: Add Upload/Delete permissions on the bucket. For more information, see Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket in the ElastiCache User Guide.    Error Message:  ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.  Solution: Add View Permissions on the bucket. For more information, see Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket in the ElastiCache User Guide.  
   */
  copySnapshot(params: ElastiCache.Types.CopySnapshotMessage, callback?: (err: AWSError, data: ElastiCache.Types.CopySnapshotResult) => void): Request<ElastiCache.Types.CopySnapshotResult, AWSError>;
  /**
   * Makes a copy of an existing snapshot.  This operation is valid for Redis only.   Users or groups that have permissions to use the CopySnapshot operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the CopySnapshot operation. For more information about using IAM to control the use of ElastiCache operations, see Exporting Snapshots and Authentication &amp; Access Control.  You could receive the following error messages.  Error Messages     Error Message: The S3 bucket %s is outside of the region.  Solution: Create an Amazon S3 bucket in the same region as your snapshot. For more information, see Step 1: Create an Amazon S3 Bucket in the ElastiCache User Guide.    Error Message: The S3 bucket %s does not exist.  Solution: Create an Amazon S3 bucket in the same region as your snapshot. For more information, see Step 1: Create an Amazon S3 Bucket in the ElastiCache User Guide.    Error Message: The S3 bucket %s is not owned by the authenticated user.  Solution: Create an Amazon S3 bucket in the same region as your snapshot. For more information, see Step 1: Create an Amazon S3 Bucket in the ElastiCache User Guide.    Error Message: The authenticated user does not have sufficient permissions to perform the desired activity.  Solution: Contact your system administrator to get the needed permissions.    Error Message: The S3 bucket %s already contains an object with key %s.  Solution: Give the TargetSnapshotName a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for TargetSnapshotName.    Error Message:  ElastiCache has not been granted READ permissions %s on the S3 Bucket.  Solution: Add List and Read permissions on the bucket. For more information, see Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket in the ElastiCache User Guide.    Error Message:  ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.  Solution: Add Upload/Delete permissions on the bucket. For more information, see Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket in the ElastiCache User Guide.    Error Message:  ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.  Solution: Add View Permissions on the bucket. For more information, see Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket in the ElastiCache User Guide.  
   */
  copySnapshot(callback?: (err: AWSError, data: ElastiCache.Types.CopySnapshotResult) => void): Request<ElastiCache.Types.CopySnapshotResult, AWSError>;
  /**
   * Creates a cache cluster. All nodes in the cache cluster run the same protocol-compliant cache engine software, either Memcached or Redis.  Due to current limitations on Redis (cluster mode disabled), this operation or parameter is not supported on Redis (cluster mode enabled) replication groups. 
   */
  createCacheCluster(params: ElastiCache.Types.CreateCacheClusterMessage, callback?: (err: AWSError, data: ElastiCache.Types.CreateCacheClusterResult) => void): Request<ElastiCache.Types.CreateCacheClusterResult, AWSError>;
  /**
   * Creates a cache cluster. All nodes in the cache cluster run the same protocol-compliant cache engine software, either Memcached or Redis.  Due to current limitations on Redis (cluster mode disabled), this operation or parameter is not supported on Redis (cluster mode enabled) replication groups. 
   */
  createCacheCluster(callback?: (err: AWSError, data: ElastiCache.Types.CreateCacheClusterResult) => void): Request<ElastiCache.Types.CreateCacheClusterResult, AWSError>;
  /**
   * Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cache cluster or replication group using the CacheParameterGroup. A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:    ModifyCacheParameterGroup in the ElastiCache API Reference.    Parameters and Parameter Groups in the ElastiCache User Guide.  
   */
  createCacheParameterGroup(params: ElastiCache.Types.CreateCacheParameterGroupMessage, callback?: (err: AWSError, data: ElastiCache.Types.CreateCacheParameterGroupResult) => void): Request<ElastiCache.Types.CreateCacheParameterGroupResult, AWSError>;
  /**
   * Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cache cluster or replication group using the CacheParameterGroup. A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:    ModifyCacheParameterGroup in the ElastiCache API Reference.    Parameters and Parameter Groups in the ElastiCache User Guide.  
   */
  createCacheParameterGroup(callback?: (err: AWSError, data: ElastiCache.Types.CreateCacheParameterGroupResult) => void): Request<ElastiCache.Types.CreateCacheParameterGroupResult, AWSError>;
  /**
   * Creates a new cache security group. Use a cache security group to control access to one or more cache clusters. Cache security groups are only used when you are creating a cache cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cache cluster inside of a VPC, use a cache subnet group instead. For more information, see CreateCacheSubnetGroup.
   */
  createCacheSecurityGroup(params: ElastiCache.Types.CreateCacheSecurityGroupMessage, callback?: (err: AWSError, data: ElastiCache.Types.CreateCacheSecurityGroupResult) => void): Request<ElastiCache.Types.CreateCacheSecurityGroupResult, AWSError>;
  /**
   * Creates a new cache security group. Use a cache security group to control access to one or more cache clusters. Cache security groups are only used when you are creating a cache cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cache cluster inside of a VPC, use a cache subnet group instead. For more information, see CreateCacheSubnetGroup.
   */
  createCacheSecurityGroup(callback?: (err: AWSError, data: ElastiCache.Types.CreateCacheSecurityGroupResult) => void): Request<ElastiCache.Types.CreateCacheSecurityGroupResult, AWSError>;
  /**
   * Creates a new cache subnet group. Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).
   */
  createCacheSubnetGroup(params: ElastiCache.Types.CreateCacheSubnetGroupMessage, callback?: (err: AWSError, data: ElastiCache.Types.CreateCacheSubnetGroupResult) => void): Request<ElastiCache.Types.CreateCacheSubnetGroupResult, AWSError>;
  /**
   * Creates a new cache subnet group. Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).
   */
  createCacheSubnetGroup(callback?: (err: AWSError, data: ElastiCache.Types.CreateCacheSubnetGroupResult) => void): Request<ElastiCache.Types.CreateCacheSubnetGroupResult, AWSError>;
  /**
   * Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group. A Redis (cluster mode disabled) replication group is a collection of cache clusters, where one of the cache clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas. A Redis (cluster mode enabled) replication group is a collection of 1 to 15 node groups (shards). Each node group (shard) has one read/write primary node and up to 5 read-only replica nodes. Writes to the primary are asynchronously propagated to the replicas. Redis (cluster mode enabled) replication groups partition the data across node groups (shards). When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. You cannot alter a Redis (cluster mode enabled) replication group after it has been created. However, if you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' enhanced backup and restore. For more information, see Restoring From a Backup with Cluster Resizing in the ElastiCache User Guide.  This operation is valid for Redis only. 
   */
  createReplicationGroup(params: ElastiCache.Types.CreateReplicationGroupMessage, callback?: (err: AWSError, data: ElastiCache.Types.CreateReplicationGroupResult) => void): Request<ElastiCache.Types.CreateReplicationGroupResult, AWSError>;
  /**
   * Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group. A Redis (cluster mode disabled) replication group is a collection of cache clusters, where one of the cache clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas. A Redis (cluster mode enabled) replication group is a collection of 1 to 15 node groups (shards). Each node group (shard) has one read/write primary node and up to 5 read-only replica nodes. Writes to the primary are asynchronously propagated to the replicas. Redis (cluster mode enabled) replication groups partition the data across node groups (shards). When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. You cannot alter a Redis (cluster mode enabled) replication group after it has been created. However, if you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' enhanced backup and restore. For more information, see Restoring From a Backup with Cluster Resizing in the ElastiCache User Guide.  This operation is valid for Redis only. 
   */
  createReplicationGroup(callback?: (err: AWSError, data: ElastiCache.Types.CreateReplicationGroupResult) => void): Request<ElastiCache.Types.CreateReplicationGroupResult, AWSError>;
  /**
   * Creates a copy of an entire cache cluster or replication group at a specific moment in time.  This operation is valid for Redis only. 
   */
  createSnapshot(params: ElastiCache.Types.CreateSnapshotMessage, callback?: (err: AWSError, data: ElastiCache.Types.CreateSnapshotResult) => void): Request<ElastiCache.Types.CreateSnapshotResult, AWSError>;
  /**
   * Creates a copy of an entire cache cluster or replication group at a specific moment in time.  This operation is valid for Redis only. 
   */
  createSnapshot(callback?: (err: AWSError, data: ElastiCache.Types.CreateSnapshotResult) => void): Request<ElastiCache.Types.CreateSnapshotResult, AWSError>;
  /**
   * Deletes a previously provisioned cache cluster. DeleteCacheCluster deletes all associated cache nodes, node endpoints and the cache cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cache cluster; you cannot cancel or revert this operation. This operation cannot be used to delete a cache cluster that is the last read replica of a replication group or node group (shard) that has Multi-AZ mode enabled or a cache cluster from a Redis (cluster mode enabled) replication group.  Due to current limitations on Redis (cluster mode disabled), this operation or parameter is not supported on Redis (cluster mode enabled) replication groups. 
   */
  deleteCacheCluster(params: ElastiCache.Types.DeleteCacheClusterMessage, callback?: (err: AWSError, data: ElastiCache.Types.DeleteCacheClusterResult) => void): Request<ElastiCache.Types.DeleteCacheClusterResult, AWSError>;
  /**
   * Deletes a previously provisioned cache cluster. DeleteCacheCluster deletes all associated cache nodes, node endpoints and the cache cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cache cluster; you cannot cancel or revert this operation. This operation cannot be used to delete a cache cluster that is the last read replica of a replication group or node group (shard) that has Multi-AZ mode enabled or a cache cluster from a Redis (cluster mode enabled) replication group.  Due to current limitations on Redis (cluster mode disabled), this operation or parameter is not supported on Redis (cluster mode enabled) replication groups. 
   */
  deleteCacheCluster(callback?: (err: AWSError, data: ElastiCache.Types.DeleteCacheClusterResult) => void): Request<ElastiCache.Types.DeleteCacheClusterResult, AWSError>;
  /**
   * Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters.
   */
  deleteCacheParameterGroup(params: ElastiCache.Types.DeleteCacheParameterGroupMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters.
   */
  deleteCacheParameterGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a cache security group.  You cannot delete a cache security group if it is associated with any cache clusters. 
   */
  deleteCacheSecurityGroup(params: ElastiCache.Types.DeleteCacheSecurityGroupMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a cache security group.  You cannot delete a cache security group if it is associated with any cache clusters. 
   */
  deleteCacheSecurityGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a cache subnet group.  You cannot delete a cache subnet group if it is associated with any cache clusters. 
   */
  deleteCacheSubnetGroup(params: ElastiCache.Types.DeleteCacheSubnetGroupMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a cache subnet group.  You cannot delete a cache subnet group if it is associated with any cache clusters. 
   */
  deleteCacheSubnetGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting RetainPrimaryCluster=true. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.  This operation is valid for Redis only. 
   */
  deleteReplicationGroup(params: ElastiCache.Types.DeleteReplicationGroupMessage, callback?: (err: AWSError, data: ElastiCache.Types.DeleteReplicationGroupResult) => void): Request<ElastiCache.Types.DeleteReplicationGroupResult, AWSError>;
  /**
   * Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting RetainPrimaryCluster=true. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.  This operation is valid for Redis only. 
   */
  deleteReplicationGroup(callback?: (err: AWSError, data: ElastiCache.Types.DeleteReplicationGroupResult) => void): Request<ElastiCache.Types.DeleteReplicationGroupResult, AWSError>;
  /**
   * Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.  This operation is valid for Redis only. 
   */
  deleteSnapshot(params: ElastiCache.Types.DeleteSnapshotMessage, callback?: (err: AWSError, data: ElastiCache.Types.DeleteSnapshotResult) => void): Request<ElastiCache.Types.DeleteSnapshotResult, AWSError>;
  /**
   * Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.  This operation is valid for Redis only. 
   */
  deleteSnapshot(callback?: (err: AWSError, data: ElastiCache.Types.DeleteSnapshotResult) => void): Request<ElastiCache.Types.DeleteSnapshotResult, AWSError>;
  /**
   * Returns information about all provisioned cache clusters if no cache cluster identifier is specified, or about a specific cache cluster if a cache cluster identifier is supplied. By default, abbreviated information about the cache clusters is returned. You can use the optional ShowCacheNodeInfo flag to retrieve detailed information about the cache nodes associated with the cache clusters. These details include the DNS address and port for the cache node endpoint. If the cluster is in the creating state, only cluster-level information is displayed until all of the nodes are successfully provisioned. If the cluster is in the deleting state, only cluster-level information is displayed. If cache nodes are currently being added to the cache cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cache cluster state is available, the cluster is ready for use. If cache nodes are currently being removed from the cache cluster, no endpoint information for the removed nodes is displayed.
   */
  describeCacheClusters(params: ElastiCache.Types.DescribeCacheClustersMessage, callback?: (err: AWSError, data: ElastiCache.Types.CacheClusterMessage) => void): Request<ElastiCache.Types.CacheClusterMessage, AWSError>;
  /**
   * Returns information about all provisioned cache clusters if no cache cluster identifier is specified, or about a specific cache cluster if a cache cluster identifier is supplied. By default, abbreviated information about the cache clusters is returned. You can use the optional ShowCacheNodeInfo flag to retrieve detailed information about the cache nodes associated with the cache clusters. These details include the DNS address and port for the cache node endpoint. If the cluster is in the creating state, only cluster-level information is displayed until all of the nodes are successfully provisioned. If the cluster is in the deleting state, only cluster-level information is displayed. If cache nodes are currently being added to the cache cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cache cluster state is available, the cluster is ready for use. If cache nodes are currently being removed from the cache cluster, no endpoint information for the removed nodes is displayed.
   */
  describeCacheClusters(callback?: (err: AWSError, data: ElastiCache.Types.CacheClusterMessage) => void): Request<ElastiCache.Types.CacheClusterMessage, AWSError>;
  /**
   * Returns a list of the available cache engines and their versions.
   */
  describeCacheEngineVersions(params: ElastiCache.Types.DescribeCacheEngineVersionsMessage, callback?: (err: AWSError, data: ElastiCache.Types.CacheEngineVersionMessage) => void): Request<ElastiCache.Types.CacheEngineVersionMessage, AWSError>;
  /**
   * Returns a list of the available cache engines and their versions.
   */
  describeCacheEngineVersions(callback?: (err: AWSError, data: ElastiCache.Types.CacheEngineVersionMessage) => void): Request<ElastiCache.Types.CacheEngineVersionMessage, AWSError>;
  /**
   * Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
   */
  describeCacheParameterGroups(params: ElastiCache.Types.DescribeCacheParameterGroupsMessage, callback?: (err: AWSError, data: ElastiCache.Types.CacheParameterGroupsMessage) => void): Request<ElastiCache.Types.CacheParameterGroupsMessage, AWSError>;
  /**
   * Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
   */
  describeCacheParameterGroups(callback?: (err: AWSError, data: ElastiCache.Types.CacheParameterGroupsMessage) => void): Request<ElastiCache.Types.CacheParameterGroupsMessage, AWSError>;
  /**
   * Returns the detailed parameter list for a particular cache parameter group.
   */
  describeCacheParameters(params: ElastiCache.Types.DescribeCacheParametersMessage, callback?: (err: AWSError, data: ElastiCache.Types.CacheParameterGroupDetails) => void): Request<ElastiCache.Types.CacheParameterGroupDetails, AWSError>;
  /**
   * Returns the detailed parameter list for a particular cache parameter group.
   */
  describeCacheParameters(callback?: (err: AWSError, data: ElastiCache.Types.CacheParameterGroupDetails) => void): Request<ElastiCache.Types.CacheParameterGroupDetails, AWSError>;
  /**
   * Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group.
   */
  describeCacheSecurityGroups(params: ElastiCache.Types.DescribeCacheSecurityGroupsMessage, callback?: (err: AWSError, data: ElastiCache.Types.CacheSecurityGroupMessage) => void): Request<ElastiCache.Types.CacheSecurityGroupMessage, AWSError>;
  /**
   * Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group.
   */
  describeCacheSecurityGroups(callback?: (err: AWSError, data: ElastiCache.Types.CacheSecurityGroupMessage) => void): Request<ElastiCache.Types.CacheSecurityGroupMessage, AWSError>;
  /**
   * Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.
   */
  describeCacheSubnetGroups(params: ElastiCache.Types.DescribeCacheSubnetGroupsMessage, callback?: (err: AWSError, data: ElastiCache.Types.CacheSubnetGroupMessage) => void): Request<ElastiCache.Types.CacheSubnetGroupMessage, AWSError>;
  /**
   * Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.
   */
  describeCacheSubnetGroups(callback?: (err: AWSError, data: ElastiCache.Types.CacheSubnetGroupMessage) => void): Request<ElastiCache.Types.CacheSubnetGroupMessage, AWSError>;
  /**
   * Returns the default engine and system parameter information for the specified cache engine.
   */
  describeEngineDefaultParameters(params: ElastiCache.Types.DescribeEngineDefaultParametersMessage, callback?: (err: AWSError, data: ElastiCache.Types.DescribeEngineDefaultParametersResult) => void): Request<ElastiCache.Types.DescribeEngineDefaultParametersResult, AWSError>;
  /**
   * Returns the default engine and system parameter information for the specified cache engine.
   */
  describeEngineDefaultParameters(callback?: (err: AWSError, data: ElastiCache.Types.DescribeEngineDefaultParametersResult) => void): Request<ElastiCache.Types.DescribeEngineDefaultParametersResult, AWSError>;
  /**
   * Returns events related to cache clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cache cluster, cache security group, or cache parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
   */
  describeEvents(params: ElastiCache.Types.DescribeEventsMessage, callback?: (err: AWSError, data: ElastiCache.Types.EventsMessage) => void): Request<ElastiCache.Types.EventsMessage, AWSError>;
  /**
   * Returns events related to cache clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cache cluster, cache security group, or cache parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
   */
  describeEvents(callback?: (err: AWSError, data: ElastiCache.Types.EventsMessage) => void): Request<ElastiCache.Types.EventsMessage, AWSError>;
  /**
   * Returns information about a particular replication group. If no identifier is specified, DescribeReplicationGroups returns information about all replication groups.  This operation is valid for Redis only. 
   */
  describeReplicationGroups(params: ElastiCache.Types.DescribeReplicationGroupsMessage, callback?: (err: AWSError, data: ElastiCache.Types.ReplicationGroupMessage) => void): Request<ElastiCache.Types.ReplicationGroupMessage, AWSError>;
  /**
   * Returns information about a particular replication group. If no identifier is specified, DescribeReplicationGroups returns information about all replication groups.  This operation is valid for Redis only. 
   */
  describeReplicationGroups(callback?: (err: AWSError, data: ElastiCache.Types.ReplicationGroupMessage) => void): Request<ElastiCache.Types.ReplicationGroupMessage, AWSError>;
  /**
   * Returns information about reserved cache nodes for this account, or about a specified reserved cache node.
   */
  describeReservedCacheNodes(params: ElastiCache.Types.DescribeReservedCacheNodesMessage, callback?: (err: AWSError, data: ElastiCache.Types.ReservedCacheNodeMessage) => void): Request<ElastiCache.Types.ReservedCacheNodeMessage, AWSError>;
  /**
   * Returns information about reserved cache nodes for this account, or about a specified reserved cache node.
   */
  describeReservedCacheNodes(callback?: (err: AWSError, data: ElastiCache.Types.ReservedCacheNodeMessage) => void): Request<ElastiCache.Types.ReservedCacheNodeMessage, AWSError>;
  /**
   * Lists available reserved cache node offerings.
   */
  describeReservedCacheNodesOfferings(params: ElastiCache.Types.DescribeReservedCacheNodesOfferingsMessage, callback?: (err: AWSError, data: ElastiCache.Types.ReservedCacheNodesOfferingMessage) => void): Request<ElastiCache.Types.ReservedCacheNodesOfferingMessage, AWSError>;
  /**
   * Lists available reserved cache node offerings.
   */
  describeReservedCacheNodesOfferings(callback?: (err: AWSError, data: ElastiCache.Types.ReservedCacheNodesOfferingMessage) => void): Request<ElastiCache.Types.ReservedCacheNodesOfferingMessage, AWSError>;
  /**
   * Returns information about cache cluster or replication group snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.  This operation is valid for Redis only. 
   */
  describeSnapshots(params: ElastiCache.Types.DescribeSnapshotsMessage, callback?: (err: AWSError, data: ElastiCache.Types.DescribeSnapshotsListMessage) => void): Request<ElastiCache.Types.DescribeSnapshotsListMessage, AWSError>;
  /**
   * Returns information about cache cluster or replication group snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.  This operation is valid for Redis only. 
   */
  describeSnapshots(callback?: (err: AWSError, data: ElastiCache.Types.DescribeSnapshotsListMessage) => void): Request<ElastiCache.Types.DescribeSnapshotsListMessage, AWSError>;
  /**
   * Lists all available node types that you can scale your Redis cluster's or replication group's current node type up to. When you use the ModifyCacheCluster or ModifyReplicationGroup operations to scale up your cluster or replication group, the value of the CacheNodeType parameter must be one of the node types returned by this operation.
   */
  listAllowedNodeTypeModifications(params: ElastiCache.Types.ListAllowedNodeTypeModificationsMessage, callback?: (err: AWSError, data: ElastiCache.Types.AllowedNodeTypeModificationsMessage) => void): Request<ElastiCache.Types.AllowedNodeTypeModificationsMessage, AWSError>;
  /**
   * Lists all available node types that you can scale your Redis cluster's or replication group's current node type up to. When you use the ModifyCacheCluster or ModifyReplicationGroup operations to scale up your cluster or replication group, the value of the CacheNodeType parameter must be one of the node types returned by this operation.
   */
  listAllowedNodeTypeModifications(callback?: (err: AWSError, data: ElastiCache.Types.AllowedNodeTypeModificationsMessage) => void): Request<ElastiCache.Types.AllowedNodeTypeModificationsMessage, AWSError>;
  /**
   * Lists all cost allocation tags currently on the named resource. A cost allocation tag is a key-value pair where the key is case-sensitive and the value is optional. You can use cost allocation tags to categorize and track your AWS costs. You can have a maximum of 50 cost allocation tags on an ElastiCache resource. For more information, see Using Cost Allocation Tags in Amazon ElastiCache.
   */
  listTagsForResource(params: ElastiCache.Types.ListTagsForResourceMessage, callback?: (err: AWSError, data: ElastiCache.Types.TagListMessage) => void): Request<ElastiCache.Types.TagListMessage, AWSError>;
  /**
   * Lists all cost allocation tags currently on the named resource. A cost allocation tag is a key-value pair where the key is case-sensitive and the value is optional. You can use cost allocation tags to categorize and track your AWS costs. You can have a maximum of 50 cost allocation tags on an ElastiCache resource. For more information, see Using Cost Allocation Tags in Amazon ElastiCache.
   */
  listTagsForResource(callback?: (err: AWSError, data: ElastiCache.Types.TagListMessage) => void): Request<ElastiCache.Types.TagListMessage, AWSError>;
  /**
   * Modifies the settings for a cache cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.
   */
  modifyCacheCluster(params: ElastiCache.Types.ModifyCacheClusterMessage, callback?: (err: AWSError, data: ElastiCache.Types.ModifyCacheClusterResult) => void): Request<ElastiCache.Types.ModifyCacheClusterResult, AWSError>;
  /**
   * Modifies the settings for a cache cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.
   */
  modifyCacheCluster(callback?: (err: AWSError, data: ElastiCache.Types.ModifyCacheClusterResult) => void): Request<ElastiCache.Types.ModifyCacheClusterResult, AWSError>;
  /**
   * Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
   */
  modifyCacheParameterGroup(params: ElastiCache.Types.ModifyCacheParameterGroupMessage, callback?: (err: AWSError, data: ElastiCache.Types.CacheParameterGroupNameMessage) => void): Request<ElastiCache.Types.CacheParameterGroupNameMessage, AWSError>;
  /**
   * Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
   */
  modifyCacheParameterGroup(callback?: (err: AWSError, data: ElastiCache.Types.CacheParameterGroupNameMessage) => void): Request<ElastiCache.Types.CacheParameterGroupNameMessage, AWSError>;
  /**
   * Modifies an existing cache subnet group.
   */
  modifyCacheSubnetGroup(params: ElastiCache.Types.ModifyCacheSubnetGroupMessage, callback?: (err: AWSError, data: ElastiCache.Types.ModifyCacheSubnetGroupResult) => void): Request<ElastiCache.Types.ModifyCacheSubnetGroupResult, AWSError>;
  /**
   * Modifies an existing cache subnet group.
   */
  modifyCacheSubnetGroup(callback?: (err: AWSError, data: ElastiCache.Types.ModifyCacheSubnetGroupResult) => void): Request<ElastiCache.Types.ModifyCacheSubnetGroupResult, AWSError>;
  /**
   * Modifies the settings for a replication group.  Due to current limitations on Redis (cluster mode disabled), this operation or parameter is not supported on Redis (cluster mode enabled) replication groups.   This operation is valid for Redis only. 
   */
  modifyReplicationGroup(params: ElastiCache.Types.ModifyReplicationGroupMessage, callback?: (err: AWSError, data: ElastiCache.Types.ModifyReplicationGroupResult) => void): Request<ElastiCache.Types.ModifyReplicationGroupResult, AWSError>;
  /**
   * Modifies the settings for a replication group.  Due to current limitations on Redis (cluster mode disabled), this operation or parameter is not supported on Redis (cluster mode enabled) replication groups.   This operation is valid for Redis only. 
   */
  modifyReplicationGroup(callback?: (err: AWSError, data: ElastiCache.Types.ModifyReplicationGroupResult) => void): Request<ElastiCache.Types.ModifyReplicationGroupResult, AWSError>;
  /**
   * Allows you to purchase a reserved cache node offering.
   */
  purchaseReservedCacheNodesOffering(params: ElastiCache.Types.PurchaseReservedCacheNodesOfferingMessage, callback?: (err: AWSError, data: ElastiCache.Types.PurchaseReservedCacheNodesOfferingResult) => void): Request<ElastiCache.Types.PurchaseReservedCacheNodesOfferingResult, AWSError>;
  /**
   * Allows you to purchase a reserved cache node offering.
   */
  purchaseReservedCacheNodesOffering(callback?: (err: AWSError, data: ElastiCache.Types.PurchaseReservedCacheNodesOfferingResult) => void): Request<ElastiCache.Types.PurchaseReservedCacheNodesOfferingResult, AWSError>;
  /**
   * Reboots some, or all, of the cache nodes within a provisioned cache cluster. This operation applies any modified cache parameter groups to the cache cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cache cluster. During the reboot, the cache cluster status is set to REBOOTING. The reboot causes the contents of the cache (for each cache node being rebooted) to be lost. When the reboot is complete, a cache cluster event is created. Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters. If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see Rebooting a Cluster for an alternate process.
   */
  rebootCacheCluster(params: ElastiCache.Types.RebootCacheClusterMessage, callback?: (err: AWSError, data: ElastiCache.Types.RebootCacheClusterResult) => void): Request<ElastiCache.Types.RebootCacheClusterResult, AWSError>;
  /**
   * Reboots some, or all, of the cache nodes within a provisioned cache cluster. This operation applies any modified cache parameter groups to the cache cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cache cluster. During the reboot, the cache cluster status is set to REBOOTING. The reboot causes the contents of the cache (for each cache node being rebooted) to be lost. When the reboot is complete, a cache cluster event is created. Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters. If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see Rebooting a Cluster for an alternate process.
   */
  rebootCacheCluster(callback?: (err: AWSError, data: ElastiCache.Types.RebootCacheClusterResult) => void): Request<ElastiCache.Types.RebootCacheClusterResult, AWSError>;
  /**
   * Removes the tags identified by the TagKeys list from the named resource.
   */
  removeTagsFromResource(params: ElastiCache.Types.RemoveTagsFromResourceMessage, callback?: (err: AWSError, data: ElastiCache.Types.TagListMessage) => void): Request<ElastiCache.Types.TagListMessage, AWSError>;
  /**
   * Removes the tags identified by the TagKeys list from the named resource.
   */
  removeTagsFromResource(callback?: (err: AWSError, data: ElastiCache.Types.TagListMessage) => void): Request<ElastiCache.Types.TagListMessage, AWSError>;
  /**
   * Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the ResetAllParameters and CacheParameterGroupName parameters.
   */
  resetCacheParameterGroup(params: ElastiCache.Types.ResetCacheParameterGroupMessage, callback?: (err: AWSError, data: ElastiCache.Types.CacheParameterGroupNameMessage) => void): Request<ElastiCache.Types.CacheParameterGroupNameMessage, AWSError>;
  /**
   * Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the ResetAllParameters and CacheParameterGroupName parameters.
   */
  resetCacheParameterGroup(callback?: (err: AWSError, data: ElastiCache.Types.CacheParameterGroupNameMessage) => void): Request<ElastiCache.Types.CacheParameterGroupNameMessage, AWSError>;
  /**
   * Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.
   */
  revokeCacheSecurityGroupIngress(params: ElastiCache.Types.RevokeCacheSecurityGroupIngressMessage, callback?: (err: AWSError, data: ElastiCache.Types.RevokeCacheSecurityGroupIngressResult) => void): Request<ElastiCache.Types.RevokeCacheSecurityGroupIngressResult, AWSError>;
  /**
   * Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.
   */
  revokeCacheSecurityGroupIngress(callback?: (err: AWSError, data: ElastiCache.Types.RevokeCacheSecurityGroupIngressResult) => void): Request<ElastiCache.Types.RevokeCacheSecurityGroupIngressResult, AWSError>;
  /**
   * Represents the input of a TestFailover operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).  Note the following    A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and AWS CLI) in any rolling 24-hour period.   If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.     If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.   To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the AWS CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:   Replication group message: Test Failover API called for node group &lt;node-group-id&gt;    Cache cluster message: Failover from master node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed    Replication group message: Failover from master node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed    Cache cluster message: Recovering cache nodes &lt;node-id&gt;    Cache cluster message: Finished recovery for cache nodes &lt;node-id&gt;    For more information see:    Viewing ElastiCache Events in the ElastiCache User Guide     DescribeEvents in the ElastiCache API Reference     Also see, Testing Multi-AZ with Automatic Failover in the ElastiCache User Guide.
   */
  testFailover(params: ElastiCache.Types.TestFailoverMessage, callback?: (err: AWSError, data: ElastiCache.Types.TestFailoverResult) => void): Request<ElastiCache.Types.TestFailoverResult, AWSError>;
  /**
   * Represents the input of a TestFailover operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).  Note the following    A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and AWS CLI) in any rolling 24-hour period.   If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.     If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.   To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the AWS CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:   Replication group message: Test Failover API called for node group &lt;node-group-id&gt;    Cache cluster message: Failover from master node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed    Replication group message: Failover from master node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed    Cache cluster message: Recovering cache nodes &lt;node-id&gt;    Cache cluster message: Finished recovery for cache nodes &lt;node-id&gt;    For more information see:    Viewing ElastiCache Events in the ElastiCache User Guide     DescribeEvents in the ElastiCache API Reference     Also see, Testing Multi-AZ with Automatic Failover in the ElastiCache User Guide.
   */
  testFailover(callback?: (err: AWSError, data: ElastiCache.Types.TestFailoverResult) => void): Request<ElastiCache.Types.TestFailoverResult, AWSError>;
  /**
   * Waits for the cacheClusterAvailable state by periodically calling the underlying ElastiCache.describeCacheClustersoperation every 15 seconds (at most 40 times). Wait until ElastiCache cluster is available.
   */
  waitFor(state: "cacheClusterAvailable", params: ElastiCache.Types.DescribeCacheClustersMessage, callback?: (err: AWSError, data: ElastiCache.Types.CacheClusterMessage) => void): Request<ElastiCache.Types.CacheClusterMessage, AWSError>;
  /**
   * Waits for the cacheClusterAvailable state by periodically calling the underlying ElastiCache.describeCacheClustersoperation every 15 seconds (at most 40 times). Wait until ElastiCache cluster is available.
   */
  waitFor(state: "cacheClusterAvailable", callback?: (err: AWSError, data: ElastiCache.Types.CacheClusterMessage) => void): Request<ElastiCache.Types.CacheClusterMessage, AWSError>;
  /**
   * Waits for the cacheClusterDeleted state by periodically calling the underlying ElastiCache.describeCacheClustersoperation every 15 seconds (at most 40 times). Wait until ElastiCache cluster is deleted.
   */
  waitFor(state: "cacheClusterDeleted", params: ElastiCache.Types.DescribeCacheClustersMessage, callback?: (err: AWSError, data: ElastiCache.Types.CacheClusterMessage) => void): Request<ElastiCache.Types.CacheClusterMessage, AWSError>;
  /**
   * Waits for the cacheClusterDeleted state by periodically calling the underlying ElastiCache.describeCacheClustersoperation every 15 seconds (at most 40 times). Wait until ElastiCache cluster is deleted.
   */
  waitFor(state: "cacheClusterDeleted", callback?: (err: AWSError, data: ElastiCache.Types.CacheClusterMessage) => void): Request<ElastiCache.Types.CacheClusterMessage, AWSError>;
  /**
   * Waits for the replicationGroupAvailable state by periodically calling the underlying ElastiCache.describeReplicationGroupsoperation every 15 seconds (at most 40 times). Wait until ElastiCache replication group is available.
   */
  waitFor(state: "replicationGroupAvailable", params: ElastiCache.Types.DescribeReplicationGroupsMessage, callback?: (err: AWSError, data: ElastiCache.Types.ReplicationGroupMessage) => void): Request<ElastiCache.Types.ReplicationGroupMessage, AWSError>;
  /**
   * Waits for the replicationGroupAvailable state by periodically calling the underlying ElastiCache.describeReplicationGroupsoperation every 15 seconds (at most 40 times). Wait until ElastiCache replication group is available.
   */
  waitFor(state: "replicationGroupAvailable", callback?: (err: AWSError, data: ElastiCache.Types.ReplicationGroupMessage) => void): Request<ElastiCache.Types.ReplicationGroupMessage, AWSError>;
  /**
   * Waits for the replicationGroupDeleted state by periodically calling the underlying ElastiCache.describeReplicationGroupsoperation every 15 seconds (at most 40 times). Wait until ElastiCache replication group is deleted.
   */
  waitFor(state: "replicationGroupDeleted", params: ElastiCache.Types.DescribeReplicationGroupsMessage, callback?: (err: AWSError, data: ElastiCache.Types.ReplicationGroupMessage) => void): Request<ElastiCache.Types.ReplicationGroupMessage, AWSError>;
  /**
   * Waits for the replicationGroupDeleted state by periodically calling the underlying ElastiCache.describeReplicationGroupsoperation every 15 seconds (at most 40 times). Wait until ElastiCache replication group is deleted.
   */
  waitFor(state: "replicationGroupDeleted", callback?: (err: AWSError, data: ElastiCache.Types.ReplicationGroupMessage) => void): Request<ElastiCache.Types.ReplicationGroupMessage, AWSError>;
}
declare namespace ElastiCache {
  export type AZMode = "single-az"|"cross-az"|string;
  export interface AddTagsToResourceMessage {
    /**
     * The Amazon Resource Name (ARN) of the resource to which the tags are to be added, for example arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster or arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    ResourceName: String;
    /**
     * A list of cost allocation tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value.
     */
    Tags: TagList;
  }
  export interface AllowedNodeTypeModificationsMessage {
    /**
     * A string list, each element of which specifies a cache node type which you can use to scale your cache cluster or replication group. When scaling up a Redis cluster or replication group using ModifyCacheCluster or ModifyReplicationGroup, use a value from this list for the CacheNodeType parameter.
     */
    ScaleUpModifications?: NodeTypeList;
  }
  export interface AuthorizeCacheSecurityGroupIngressMessage {
    /**
     * The cache security group that allows network ingress.
     */
    CacheSecurityGroupName: String;
    /**
     * The Amazon EC2 security group to be authorized for ingress to the cache security group.
     */
    EC2SecurityGroupName: String;
    /**
     * The AWS account number of the Amazon EC2 security group owner. Note that this is not the same thing as an AWS access key ID - you must provide a valid AWS account number for this parameter.
     */
    EC2SecurityGroupOwnerId: String;
  }
  export interface AuthorizeCacheSecurityGroupIngressResult {
    CacheSecurityGroup?: CacheSecurityGroup;
  }
  export type AutomaticFailoverStatus = "enabled"|"disabled"|"enabling"|"disabling"|string;
  export interface AvailabilityZone {
    /**
     * The name of the Availability Zone.
     */
    Name?: String;
  }
  export type AvailabilityZonesList = String[];
  export type AwsQueryErrorMessage = string;
  export type Boolean = boolean;
  export type BooleanOptional = boolean;
  export interface CacheCluster {
    /**
     * The user-supplied identifier of the cache cluster. This identifier is a unique key that identifies a cache cluster.
     */
    CacheClusterId?: String;
    /**
     * Represents a Memcached cluster endpoint which, if Automatic Discovery is enabled on the cluster, can be used by an application to connect to any node in the cluster. The configuration endpoint will always have .cfg in it. Example: mem-3.9dvc4r.cfg.usw2.cache.amazonaws.com:11211 
     */
    ConfigurationEndpoint?: Endpoint;
    /**
     * The URL of the web page where you can download the latest ElastiCache client library.
     */
    ClientDownloadLandingPage?: String;
    /**
     * The name of the compute and memory capacity node type for the cache cluster. The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.   General purpose:   Current generation:   T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium   M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge   M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge    Previous generation: (not recommended)  T1 node types: cache.t1.micro   M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized:   Previous generation: (not recommended)  C1 node types: cache.c1.xlarge      Memory optimized:   Current generation:   R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: (not recommended)  M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All T2 instances are created in an Amazon Virtual Private Cloud (Amazon VPC).   Redis (cluster mode disabled): Redis backup/restore is not supported on T1 and T2 instances.    Redis (cluster mode enabled): Backup/restore is not supported on T1 instances.   Redis Append-only files (AOF) functionality is not supported for T1 or T2 instances.   Supported node types are available in all regions except as noted in the following table. For a complete listing of node types and specifications, see Amazon ElastiCache Product Features and Details and either Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The name of the cache engine (memcached or redis) to be used for this cache cluster.
     */
    Engine?: String;
    /**
     * The version of the cache engine that is used in this cache cluster.
     */
    EngineVersion?: String;
    /**
     * The current state of this cache cluster, one of the following values: available, creating, deleted, deleting, incompatible-network, modifying, rebooting cache cluster nodes, restore-failed, or snapshotting.
     */
    CacheClusterStatus?: String;
    /**
     * The number of cache nodes in the cache cluster. For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20.
     */
    NumCacheNodes?: IntegerOptional;
    /**
     * The name of the Availability Zone in which the cache cluster is located or "Multiple" if the cache nodes are located in different Availability Zones.
     */
    PreferredAvailabilityZone?: String;
    /**
     * The date and time when the cache cluster was created.
     */
    CacheClusterCreateTime?: TStamp;
    /**
     * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are:    sun     mon     tue     wed     thu     fri     sat    Example: sun:23:00-mon:01:30 
     */
    PreferredMaintenanceWindow?: String;
    PendingModifiedValues?: PendingModifiedValues;
    /**
     * Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS). 
     */
    NotificationConfiguration?: NotificationConfiguration;
    /**
     * A list of cache security group elements, composed of name and status sub-elements.
     */
    CacheSecurityGroups?: CacheSecurityGroupMembershipList;
    /**
     * Status of the cache parameter group.
     */
    CacheParameterGroup?: CacheParameterGroupStatus;
    /**
     * The name of the cache subnet group associated with the cache cluster.
     */
    CacheSubnetGroupName?: String;
    /**
     * A list of cache nodes that are members of the cache cluster.
     */
    CacheNodes?: CacheNodeList;
    /**
     * This parameter is currently disabled.
     */
    AutoMinorVersionUpgrade?: Boolean;
    /**
     * A list of VPC Security Groups associated with the cache cluster.
     */
    SecurityGroups?: SecurityGroupMembershipList;
    /**
     * The replication group to which this cache cluster belongs. If this field is empty, the cache cluster is not associated with any replication group.
     */
    ReplicationGroupId?: String;
    /**
     * The number of days for which ElastiCache retains automatic cache cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.   If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off. 
     */
    SnapshotRetentionLimit?: IntegerOptional;
    /**
     * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your cache cluster. Example: 05:00-09:00 
     */
    SnapshotWindow?: String;
    /**
     * A flag that enables using an AuthToken (password) when issuing Redis commands. Default: false 
     */
    AuthTokenEnabled?: BooleanOptional;
    /**
     * A flag that enables in-transit encryption when set to true. You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster. Default: false 
     */
    TransitEncryptionEnabled?: BooleanOptional;
    /**
     * A flag that enables encryption at-rest when set to true. You cannot modify the value of AtRestEncryptionEnabled after the cluster is created. To enable at-rest encryption on a cluster you must set AtRestEncryptionEnabled to true when you create a cluster. Default: false 
     */
    AtRestEncryptionEnabled?: BooleanOptional;
  }
  export type CacheClusterList = CacheCluster[];
  export interface CacheClusterMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of cache clusters. Each item in the list contains detailed information about one cache cluster.
     */
    CacheClusters?: CacheClusterList;
  }
  export interface CacheEngineVersion {
    /**
     * The name of the cache engine.
     */
    Engine?: String;
    /**
     * The version number of the cache engine.
     */
    EngineVersion?: String;
    /**
     * The name of the cache parameter group family associated with this cache engine. Valid values are: memcached1.4 | redis2.6 | redis2.8 | redis3.2 
     */
    CacheParameterGroupFamily?: String;
    /**
     * The description of the cache engine.
     */
    CacheEngineDescription?: String;
    /**
     * The description of the cache engine version.
     */
    CacheEngineVersionDescription?: String;
  }
  export type CacheEngineVersionList = CacheEngineVersion[];
  export interface CacheEngineVersionMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of cache engine version details. Each element in the list contains detailed information about one cache engine version.
     */
    CacheEngineVersions?: CacheEngineVersionList;
  }
  export interface CacheNode {
    /**
     * The cache node identifier. A node ID is a numeric identifier (0001, 0002, etc.). The combination of cluster ID and node ID uniquely identifies every cache node used in a customer's AWS account.
     */
    CacheNodeId?: String;
    /**
     * The current state of this cache node.
     */
    CacheNodeStatus?: String;
    /**
     * The date and time when the cache node was created.
     */
    CacheNodeCreateTime?: TStamp;
    /**
     * The hostname for connecting to this cache node.
     */
    Endpoint?: Endpoint;
    /**
     * The status of the parameter group applied to this cache node.
     */
    ParameterGroupStatus?: String;
    /**
     * The ID of the primary node to which this read replica node is synchronized. If this field is empty, this node is not associated with a primary cache cluster.
     */
    SourceCacheNodeId?: String;
    /**
     * The Availability Zone where this node was created and now resides.
     */
    CustomerAvailabilityZone?: String;
  }
  export type CacheNodeIdsList = String[];
  export type CacheNodeList = CacheNode[];
  export interface CacheNodeTypeSpecificParameter {
    /**
     * The name of the parameter.
     */
    ParameterName?: String;
    /**
     * A description of the parameter.
     */
    Description?: String;
    /**
     * The source of the parameter value.
     */
    Source?: String;
    /**
     * The valid data type for the parameter.
     */
    DataType?: String;
    /**
     * The valid range of values for the parameter.
     */
    AllowedValues?: String;
    /**
     * Indicates whether (true) or not (false) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.
     */
    IsModifiable?: Boolean;
    /**
     * The earliest cache engine version to which the parameter can apply.
     */
    MinimumEngineVersion?: String;
    /**
     * A list of cache node types and their corresponding values for this parameter.
     */
    CacheNodeTypeSpecificValues?: CacheNodeTypeSpecificValueList;
    /**
     * Indicates whether a change to the parameter is applied immediately or requires a reboot for the change to be applied. You can force a reboot or wait until the next maintenance window's reboot. For more information, see Rebooting a Cluster.
     */
    ChangeType?: ChangeType;
  }
  export type CacheNodeTypeSpecificParametersList = CacheNodeTypeSpecificParameter[];
  export interface CacheNodeTypeSpecificValue {
    /**
     * The cache node type for which this value applies.
     */
    CacheNodeType?: String;
    /**
     * The value for the cache node type.
     */
    Value?: String;
  }
  export type CacheNodeTypeSpecificValueList = CacheNodeTypeSpecificValue[];
  export interface CacheParameterGroup {
    /**
     * The name of the cache parameter group.
     */
    CacheParameterGroupName?: String;
    /**
     * The name of the cache parameter group family that this cache parameter group is compatible with. Valid values are: memcached1.4 | redis2.6 | redis2.8 | redis3.2 
     */
    CacheParameterGroupFamily?: String;
    /**
     * The description for this cache parameter group.
     */
    Description?: String;
  }
  export interface CacheParameterGroupDetails {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of Parameter instances.
     */
    Parameters?: ParametersList;
    /**
     * A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.
     */
    CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParametersList;
  }
  export type CacheParameterGroupList = CacheParameterGroup[];
  export interface CacheParameterGroupNameMessage {
    /**
     * The name of the cache parameter group.
     */
    CacheParameterGroupName?: String;
  }
  export interface CacheParameterGroupStatus {
    /**
     * The name of the cache parameter group.
     */
    CacheParameterGroupName?: String;
    /**
     * The status of parameter updates.
     */
    ParameterApplyStatus?: String;
    /**
     * A list of the cache node IDs which need to be rebooted for parameter changes to be applied. A node ID is a numeric identifier (0001, 0002, etc.).
     */
    CacheNodeIdsToReboot?: CacheNodeIdsList;
  }
  export interface CacheParameterGroupsMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of cache parameter groups. Each element in the list contains detailed information about one cache parameter group.
     */
    CacheParameterGroups?: CacheParameterGroupList;
  }
  export interface CacheSecurityGroup {
    /**
     * The AWS account ID of the cache security group owner.
     */
    OwnerId?: String;
    /**
     * The name of the cache security group.
     */
    CacheSecurityGroupName?: String;
    /**
     * The description of the cache security group.
     */
    Description?: String;
    /**
     * A list of Amazon EC2 security groups that are associated with this cache security group.
     */
    EC2SecurityGroups?: EC2SecurityGroupList;
  }
  export interface CacheSecurityGroupMembership {
    /**
     * The name of the cache security group.
     */
    CacheSecurityGroupName?: String;
    /**
     * The membership status in the cache security group. The status changes when a cache security group is modified, or when the cache security groups assigned to a cache cluster are modified.
     */
    Status?: String;
  }
  export type CacheSecurityGroupMembershipList = CacheSecurityGroupMembership[];
  export interface CacheSecurityGroupMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of cache security groups. Each element in the list contains detailed information about one group.
     */
    CacheSecurityGroups?: CacheSecurityGroups;
  }
  export type CacheSecurityGroupNameList = String[];
  export type CacheSecurityGroups = CacheSecurityGroup[];
  export interface CacheSubnetGroup {
    /**
     * The name of the cache subnet group.
     */
    CacheSubnetGroupName?: String;
    /**
     * The description of the cache subnet group.
     */
    CacheSubnetGroupDescription?: String;
    /**
     * The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group.
     */
    VpcId?: String;
    /**
     * A list of subnets associated with the cache subnet group.
     */
    Subnets?: SubnetList;
  }
  export interface CacheSubnetGroupMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of cache subnet groups. Each element in the list contains detailed information about one group.
     */
    CacheSubnetGroups?: CacheSubnetGroups;
  }
  export type CacheSubnetGroups = CacheSubnetGroup[];
  export type ChangeType = "immediate"|"requires-reboot"|string;
  export type ClusterIdList = String[];
  export interface CopySnapshotMessage {
    /**
     * The name of an existing snapshot from which to make a copy.
     */
    SourceSnapshotName: String;
    /**
     * A name for the snapshot copy. ElastiCache does not permit overwriting a snapshot, therefore this name must be unique within its context - ElastiCache or an Amazon S3 bucket if exporting.
     */
    TargetSnapshotName: String;
    /**
     * The Amazon S3 bucket to which the snapshot is exported. This parameter is used only when exporting a snapshot for external access. When using this parameter to export a snapshot, be sure Amazon ElastiCache has the needed permissions to this S3 bucket. For more information, see Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket in the Amazon ElastiCache User Guide. For more information, see Exporting a Snapshot in the Amazon ElastiCache User Guide.
     */
    TargetBucket?: String;
  }
  export interface CopySnapshotResult {
    Snapshot?: Snapshot;
  }
  export interface CreateCacheClusterMessage {
    /**
     * The node group (shard) identifier. This parameter is stored as a lowercase string.  Constraints:    A name must contain from 1 to 20 alphanumeric characters or hyphens.   The first character must be a letter.   A name cannot end with a hyphen or contain two consecutive hyphens.  
     */
    CacheClusterId: String;
    /**
     *  Due to current limitations on Redis (cluster mode disabled), this operation or parameter is not supported on Redis (cluster mode enabled) replication groups.  The ID of the replication group to which this cache cluster should belong. If this parameter is specified, the cache cluster is added to the specified replication group as a read replica; otherwise, the cache cluster is a standalone primary that is not part of any replication group. If the specified replication group is Multi-AZ enabled and the Availability Zone is not specified, the cache cluster is created in Availability Zones that provide the best spread of read replicas across Availability Zones.  This parameter is only valid if the Engine parameter is redis. 
     */
    ReplicationGroupId?: String;
    /**
     * Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region. This parameter is only supported for Memcached cache clusters. If the AZMode and PreferredAvailabilityZones are not specified, ElastiCache assumes single-az mode.
     */
    AZMode?: AZMode;
    /**
     * The EC2 Availability Zone in which the cache cluster is created. All nodes belonging to this Memcached cache cluster are placed in the preferred Availability Zone. If you want to create your nodes across multiple Availability Zones, use PreferredAvailabilityZones. Default: System chosen Availability Zone.
     */
    PreferredAvailabilityZone?: String;
    /**
     * A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important. This option is only supported on Memcached.  If you are creating your cache cluster in an Amazon VPC (recommended) you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of NumCacheNodes.  If you want all the nodes in the same Availability Zone, use PreferredAvailabilityZone instead, or repeat the Availability Zone multiple times in the list. Default: System chosen Availability Zones.
     */
    PreferredAvailabilityZones?: PreferredAvailabilityZoneList;
    /**
     * The initial number of cache nodes that the cache cluster has. For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20. If you need more than 20 nodes for your Memcached cluster, please fill out the ElastiCache Limit Increase Request form at http://aws.amazon.com/contact-us/elasticache-node-limit-request/.
     */
    NumCacheNodes?: IntegerOptional;
    /**
     * The compute and memory capacity of the nodes in the node group (shard). The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.   General purpose:   Current generation:   T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium   M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge   M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge    Previous generation: (not recommended)  T1 node types: cache.t1.micro   M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized:   Previous generation: (not recommended)  C1 node types: cache.c1.xlarge      Memory optimized:   Current generation:   R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: (not recommended)  M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All T2 instances are created in an Amazon Virtual Private Cloud (Amazon VPC).   Redis (cluster mode disabled): Redis backup/restore is not supported on T1 and T2 instances.    Redis (cluster mode enabled): Backup/restore is not supported on T1 instances.   Redis Append-only files (AOF) functionality is not supported for T1 or T2 instances.   Supported node types are available in all regions except as noted in the following table. For a complete listing of node types and specifications, see Amazon ElastiCache Product Features and Details and either Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The name of the cache engine to be used for this cache cluster. Valid values for this parameter are: memcached | redis 
     */
    Engine?: String;
    /**
     * The version number of the cache engine to be used for this cache cluster. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.  Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cache cluster or replication group and create it anew with the earlier engine version. 
     */
    EngineVersion?: String;
    /**
     * The name of the parameter group to associate with this cache cluster. If this argument is omitted, the default parameter group for the specified engine is used. You cannot use any parameter group which has cluster-enabled='yes' when creating a cluster.
     */
    CacheParameterGroupName?: String;
    /**
     * The name of the subnet group to be used for the cache cluster. Use this parameter only when you are creating a cache cluster in an Amazon Virtual Private Cloud (Amazon VPC).  If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see Subnets and Subnet Groups. 
     */
    CacheSubnetGroupName?: String;
    /**
     * A list of security group names to associate with this cache cluster. Use this parameter only when you are creating a cache cluster outside of an Amazon Virtual Private Cloud (Amazon VPC).
     */
    CacheSecurityGroupNames?: CacheSecurityGroupNameList;
    /**
     * One or more VPC security groups associated with the cache cluster. Use this parameter only when you are creating a cache cluster in an Amazon Virtual Private Cloud (Amazon VPC).
     */
    SecurityGroupIds?: SecurityGroupIdsList;
    /**
     * A list of cost allocation tags to be added to this resource.
     */
    Tags?: TagList;
    /**
     * A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3. The snapshot file is used to populate the node group (shard). The Amazon S3 object name in the ARN cannot contain any commas.  This parameter is only valid if the Engine parameter is redis.  Example of an Amazon S3 ARN: arn:aws:s3:::my_bucket/snapshot1.rdb 
     */
    SnapshotArns?: SnapshotArnsList;
    /**
     * The name of a Redis snapshot from which to restore data into the new node group (shard). The snapshot status changes to restoring while the new node group (shard) is being created.  This parameter is only valid if the Engine parameter is redis. 
     */
    SnapshotName?: String;
    /**
     * Specifies the weekly time range during which maintenance on the cache cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are: Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are:    sun     mon     tue     wed     thu     fri     sat    Example: sun:23:00-mon:01:30 
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The port number on which each of the cache nodes accepts connections.
     */
    Port?: IntegerOptional;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.  The Amazon SNS topic owner must be the same as the cache cluster owner. 
     */
    NotificationTopicArn?: String;
    /**
     * This parameter is currently disabled.
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot taken today is retained for 5 days before being deleted.  This parameter is only valid if the Engine parameter is redis.  Default: 0 (i.e., automatic backups are disabled for this cache cluster).
     */
    SnapshotRetentionLimit?: IntegerOptional;
    /**
     * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). Example: 05:00-09:00  If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.  This parameter is only valid if the Engine parameter is redis. 
     */
    SnapshotWindow?: String;
    /**
     *  Reserved parameter. The password used to access a password protected server. Password constraints:   Must be only printable ASCII characters.   Must be at least 16 characters and no more than 128 characters in length.   Cannot contain any of the following characters: '/', '"', or '@'.    For more information, see AUTH password at http://redis.io/commands/AUTH.
     */
    AuthToken?: String;
  }
  export interface CreateCacheClusterResult {
    CacheCluster?: CacheCluster;
  }
  export interface CreateCacheParameterGroupMessage {
    /**
     * A user-specified name for the cache parameter group.
     */
    CacheParameterGroupName: String;
    /**
     * The name of the cache parameter group family that the cache parameter group can be used with. Valid values are: memcached1.4 | redis2.6 | redis2.8 | redis3.2 
     */
    CacheParameterGroupFamily: String;
    /**
     * A user-specified description for the cache parameter group.
     */
    Description: String;
  }
  export interface CreateCacheParameterGroupResult {
    CacheParameterGroup?: CacheParameterGroup;
  }
  export interface CreateCacheSecurityGroupMessage {
    /**
     * A name for the cache security group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters. Cannot be the word "Default". Example: mysecuritygroup 
     */
    CacheSecurityGroupName: String;
    /**
     * A description for the cache security group.
     */
    Description: String;
  }
  export interface CreateCacheSecurityGroupResult {
    CacheSecurityGroup?: CacheSecurityGroup;
  }
  export interface CreateCacheSubnetGroupMessage {
    /**
     * A name for the cache subnet group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters or hyphens. Example: mysubnetgroup 
     */
    CacheSubnetGroupName: String;
    /**
     * A description for the cache subnet group.
     */
    CacheSubnetGroupDescription: String;
    /**
     * A list of VPC subnet IDs for the cache subnet group.
     */
    SubnetIds: SubnetIdentifierList;
  }
  export interface CreateCacheSubnetGroupResult {
    CacheSubnetGroup?: CacheSubnetGroup;
  }
  export interface CreateReplicationGroupMessage {
    /**
     * The replication group identifier. This parameter is stored as a lowercase string. Constraints:   A name must contain from 1 to 20 alphanumeric characters or hyphens.   The first character must be a letter.   A name cannot end with a hyphen or contain two consecutive hyphens.  
     */
    ReplicationGroupId: String;
    /**
     * A user-created description for the replication group.
     */
    ReplicationGroupDescription: String;
    /**
     * The identifier of the cache cluster that serves as the primary for this replication group. This cache cluster must already exist and have a status of available. This parameter is not required if NumCacheClusters, NumNodeGroups, or ReplicasPerNodeGroup is specified.
     */
    PrimaryClusterId?: String;
    /**
     * Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails. If true, Multi-AZ is enabled for this replication group. If false, Multi-AZ is disabled for this replication group.  AutomaticFailoverEnabled must be enabled for Redis (cluster mode enabled) replication groups. Default: false Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:   Redis versions earlier than 2.8.6.   Redis (cluster mode disabled): T1 and T2 cache node types.   Redis (cluster mode enabled): T1 node types.  
     */
    AutomaticFailoverEnabled?: BooleanOptional;
    /**
     * The number of clusters this replication group initially has. This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead. If AutomaticFailoverEnabled is true, the value of this parameter must be at least 2. If AutomaticFailoverEnabled is false you can omit this parameter (it will default to 1), or you can explicitly set it to a value between 2 and 6. The maximum permitted value for NumCacheClusters is 6 (primary plus 5 replicas).
     */
    NumCacheClusters?: IntegerOptional;
    /**
     * A list of EC2 Availability Zones in which the replication group's cache clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead.  If you are creating your replication group in an Amazon VPC (recommended), you can only locate cache clusters in Availability Zones associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of NumCacheClusters.  Default: system chosen Availability Zones.
     */
    PreferredCacheClusterAZs?: AvailabilityZonesList;
    /**
     * An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. For Redis (cluster mode disabled) either omit this parameter or set it to 1. Default: 1
     */
    NumNodeGroups?: IntegerOptional;
    /**
     * An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.
     */
    ReplicasPerNodeGroup?: IntegerOptional;
    /**
     * A list of node group (shard) configuration options. Each node group (shard) configuration has the following: Slots, PrimaryAvailabilityZone, ReplicaAvailabilityZones, ReplicaCount. If you're creating a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group, you can use this parameter to individually configure each node group (shard), or you can omit this parameter.
     */
    NodeGroupConfiguration?: NodeGroupConfigurationList;
    /**
     * The compute and memory capacity of the nodes in the node group (shard). The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.   General purpose:   Current generation:   T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium   M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge   M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge    Previous generation: (not recommended)  T1 node types: cache.t1.micro   M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized:   Previous generation: (not recommended)  C1 node types: cache.c1.xlarge      Memory optimized:   Current generation:   R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: (not recommended)  M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All T2 instances are created in an Amazon Virtual Private Cloud (Amazon VPC).   Redis (cluster mode disabled): Redis backup/restore is not supported on T1 and T2 instances.    Redis (cluster mode enabled): Backup/restore is not supported on T1 instances.   Redis Append-only files (AOF) functionality is not supported for T1 or T2 instances.   Supported node types are available in all regions except as noted in the following table. For a complete listing of node types and specifications, see Amazon ElastiCache Product Features and Details and either Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The name of the cache engine to be used for the cache clusters in this replication group.
     */
    Engine?: String;
    /**
     * The version number of the cache engine to be used for the cache clusters in this replication group. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.  Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version) in the ElastiCache User Guide, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cache cluster or replication group and create it anew with the earlier engine version. 
     */
    EngineVersion?: String;
    /**
     * The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used. If you are running Redis version 3.2.4 or later, only one node group (shard), and want to use a default parameter group, we recommend that you specify the parameter group by name.    To create a Redis (cluster mode disabled) replication group, use CacheParameterGroupName=default.redis3.2.   To create a Redis (cluster mode enabled) replication group, use CacheParameterGroupName=default.redis3.2.cluster.on.  
     */
    CacheParameterGroupName?: String;
    /**
     * The name of the cache subnet group to be used for the replication group.  If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see Subnets and Subnet Groups. 
     */
    CacheSubnetGroupName?: String;
    /**
     * A list of cache security group names to associate with this replication group.
     */
    CacheSecurityGroupNames?: CacheSecurityGroupNameList;
    /**
     * One or more Amazon VPC security groups associated with this replication group. Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (Amazon VPC).
     */
    SecurityGroupIds?: SecurityGroupIdsList;
    /**
     * A list of cost allocation tags to be added to this resource. A tag is a key-value pair.
     */
    Tags?: TagList;
    /**
     * A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new replication group. The Amazon S3 object name in the ARN cannot contain any commas. The new replication group will have the number of node groups (console: shards) specified by the parameter NumNodeGroups or the number of node groups configured by NodeGroupConfiguration regardless of the number of ARNs specified here. Example of an Amazon S3 ARN: arn:aws:s3:::my_bucket/snapshot1.rdb 
     */
    SnapshotArns?: SnapshotArnsList;
    /**
     * The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to restoring while the new replication group is being created.
     */
    SnapshotName?: String;
    /**
     * Specifies the weekly time range during which maintenance on the cache cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are: Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are:    sun     mon     tue     wed     thu     fri     sat    Example: sun:23:00-mon:01:30 
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The port number on which each member of the replication group accepts connections.
     */
    Port?: IntegerOptional;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.  The Amazon SNS topic owner must be the same as the cache cluster owner. 
     */
    NotificationTopicArn?: String;
    /**
     * This parameter is currently disabled.
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted. Default: 0 (i.e., automatic backups are disabled for this cache cluster).
     */
    SnapshotRetentionLimit?: IntegerOptional;
    /**
     * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). Example: 05:00-09:00  If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.
     */
    SnapshotWindow?: String;
    /**
     *  Reserved parameter. The password used to access a password protected server. This parameter is valid only if:   The parameter TransitEncryptionEnabled was set to true when the cluster was created.   The line requirepass was added to the database configuration file.   Password constraints:   Must be only printable ASCII characters.   Must be at least 16 characters and no more than 128 characters in length.   Cannot contain any of the following characters: '/', '"', or '@'.    For more information, see AUTH password at http://redis.io/commands/AUTH.
     */
    AuthToken?: String;
    /**
     * A flag that enables in-transit encryption when set to true. You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster. This parameter is valid only if the Engine parameter is redis, the EngineVersion parameter is 3.2.4 or later, and the cluster is being created in an Amazon VPC. If you enable in-transit encryption, you must also specify a value for CacheSubnetGroup. Default: false 
     */
    TransitEncryptionEnabled?: BooleanOptional;
    /**
     * A flag that enables encryption at rest when set to true. You cannot modify the value of AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group.   This parameter is valid only if the Engine parameter is redis and the cluster is being created in an Amazon VPC.  Default: false 
     */
    AtRestEncryptionEnabled?: BooleanOptional;
  }
  export interface CreateReplicationGroupResult {
    ReplicationGroup?: ReplicationGroup;
  }
  export interface CreateSnapshotMessage {
    /**
     * The identifier of an existing replication group. The snapshot is created from this replication group.
     */
    ReplicationGroupId?: String;
    /**
     * The identifier of an existing cache cluster. The snapshot is created from this cache cluster.
     */
    CacheClusterId?: String;
    /**
     * A name for the snapshot being created.
     */
    SnapshotName: String;
  }
  export interface CreateSnapshotResult {
    Snapshot?: Snapshot;
  }
  export interface DeleteCacheClusterMessage {
    /**
     * The cache cluster identifier for the cluster to be deleted. This parameter is not case sensitive.
     */
    CacheClusterId: String;
    /**
     * The user-supplied name of a final cache cluster snapshot. This is the unique name that identifies the snapshot. ElastiCache creates the snapshot, and then deletes the cache cluster immediately afterward.
     */
    FinalSnapshotIdentifier?: String;
  }
  export interface DeleteCacheClusterResult {
    CacheCluster?: CacheCluster;
  }
  export interface DeleteCacheParameterGroupMessage {
    /**
     * The name of the cache parameter group to delete.  The specified cache security group must not be associated with any cache clusters. 
     */
    CacheParameterGroupName: String;
  }
  export interface DeleteCacheSecurityGroupMessage {
    /**
     * The name of the cache security group to delete.  You cannot delete the default security group. 
     */
    CacheSecurityGroupName: String;
  }
  export interface DeleteCacheSubnetGroupMessage {
    /**
     * The name of the cache subnet group to delete. Constraints: Must contain no more than 255 alphanumeric characters or hyphens.
     */
    CacheSubnetGroupName: String;
  }
  export interface DeleteReplicationGroupMessage {
    /**
     * The identifier for the cluster to be deleted. This parameter is not case sensitive.
     */
    ReplicationGroupId: String;
    /**
     * If set to true, all of the read replicas are deleted, but the primary node is retained.
     */
    RetainPrimaryCluster?: BooleanOptional;
    /**
     * The name of a final node group (shard) snapshot. ElastiCache creates the snapshot from the primary node in the cluster, rather than one of the replicas; this is to ensure that it captures the freshest data. After the final snapshot is taken, the replication group is immediately deleted.
     */
    FinalSnapshotIdentifier?: String;
  }
  export interface DeleteReplicationGroupResult {
    ReplicationGroup?: ReplicationGroup;
  }
  export interface DeleteSnapshotMessage {
    /**
     * The name of the snapshot to be deleted.
     */
    SnapshotName: String;
  }
  export interface DeleteSnapshotResult {
    Snapshot?: Snapshot;
  }
  export interface DescribeCacheClustersMessage {
    /**
     * The user-supplied cluster identifier. If this parameter is specified, only information about that specific cache cluster is returned. This parameter isn't case sensitive.
     */
    CacheClusterId?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * An optional flag that can be included in the DescribeCacheCluster request to retrieve information about the individual cache nodes.
     */
    ShowCacheNodeInfo?: BooleanOptional;
    /**
     * An optional flag that can be included in the DescribeCacheCluster request to show only nodes (API/CLI: clusters) that are not members of a replication group. In practice, this mean Memcached and single node Redis clusters.
     */
    ShowCacheClustersNotInReplicationGroups?: BooleanOptional;
  }
  export interface DescribeCacheEngineVersionsMessage {
    /**
     * The cache engine to return. Valid values: memcached | redis 
     */
    Engine?: String;
    /**
     * The cache engine version to return. Example: 1.4.14 
     */
    EngineVersion?: String;
    /**
     * The name of a specific cache parameter group family to return details for. Valid values are: memcached1.4 | redis2.6 | redis2.8 | redis3.2  Constraints:   Must be 1 to 255 alphanumeric characters   First character must be a letter   Cannot end with a hyphen or contain two consecutive hyphens  
     */
    CacheParameterGroupFamily?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * If true, specifies that only the default version of the specified engine or engine and major version combination is to be returned.
     */
    DefaultOnly?: Boolean;
  }
  export interface DescribeCacheParameterGroupsMessage {
    /**
     * The name of a specific cache parameter group to return details for.
     */
    CacheParameterGroupName?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeCacheParametersMessage {
    /**
     * The name of a specific cache parameter group to return details for.
     */
    CacheParameterGroupName: String;
    /**
     * The parameter types to return. Valid values: user | system | engine-default 
     */
    Source?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeCacheSecurityGroupsMessage {
    /**
     * The name of the cache security group to return details for.
     */
    CacheSecurityGroupName?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeCacheSubnetGroupsMessage {
    /**
     * The name of the cache subnet group to return details for.
     */
    CacheSubnetGroupName?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeEngineDefaultParametersMessage {
    /**
     * The name of the cache parameter group family. Valid values are: memcached1.4 | redis2.6 | redis2.8 | redis3.2 
     */
    CacheParameterGroupFamily: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeEngineDefaultParametersResult {
    EngineDefaults?: EngineDefaults;
  }
  export interface DescribeEventsMessage {
    /**
     * The identifier of the event source for which events are returned. If not specified, all sources are included in the response.
     */
    SourceIdentifier?: String;
    /**
     * The event source to retrieve events for. If no value is specified, all events are returned.
     */
    SourceType?: SourceType;
    /**
     * The beginning of the time interval to retrieve events for, specified in ISO 8601 format.  Example: 2017-03-30T07:03:49.555Z
     */
    StartTime?: TStamp;
    /**
     * The end of the time interval for which to retrieve events, specified in ISO 8601 format.  Example: 2017-03-30T07:03:49.555Z
     */
    EndTime?: TStamp;
    /**
     * The number of minutes worth of events to retrieve.
     */
    Duration?: IntegerOptional;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeReplicationGroupsMessage {
    /**
     * The identifier for the replication group to be described. This parameter is not case sensitive. If you do not specify this parameter, information about all replication groups is returned.
     */
    ReplicationGroupId?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeReservedCacheNodesMessage {
    /**
     * The reserved cache node identifier filter value. Use this parameter to show only the reservation that matches the specified reservation ID.
     */
    ReservedCacheNodeId?: String;
    /**
     * The offering identifier filter value. Use this parameter to show only purchased reservations matching the specified offering identifier.
     */
    ReservedCacheNodesOfferingId?: String;
    /**
     * The cache node type filter value. Use this parameter to show only those reservations matching the specified cache node type. The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.   General purpose:   Current generation:   T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium   M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge   M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge    Previous generation: (not recommended)  T1 node types: cache.t1.micro   M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized:   Previous generation: (not recommended)  C1 node types: cache.c1.xlarge      Memory optimized:   Current generation:   R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: (not recommended)  M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All T2 instances are created in an Amazon Virtual Private Cloud (Amazon VPC).   Redis (cluster mode disabled): Redis backup/restore is not supported on T1 and T2 instances.    Redis (cluster mode enabled): Backup/restore is not supported on T1 instances.   Redis Append-only files (AOF) functionality is not supported for T1 or T2 instances.   Supported node types are available in all regions except as noted in the following table. For a complete listing of node types and specifications, see Amazon ElastiCache Product Features and Details and either Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The duration filter value, specified in years or seconds. Use this parameter to show only reservations for this duration. Valid Values: 1 | 3 | 31536000 | 94608000 
     */
    Duration?: String;
    /**
     * The product description filter value. Use this parameter to show only those reservations matching the specified product description.
     */
    ProductDescription?: String;
    /**
     * The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type. Valid values: "Light Utilization"|"Medium Utilization"|"Heavy Utilization" 
     */
    OfferingType?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeReservedCacheNodesOfferingsMessage {
    /**
     * The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706 
     */
    ReservedCacheNodesOfferingId?: String;
    /**
     * The cache node type filter value. Use this parameter to show only the available offerings matching the specified cache node type. The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.   General purpose:   Current generation:   T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium   M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge   M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge    Previous generation: (not recommended)  T1 node types: cache.t1.micro   M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized:   Previous generation: (not recommended)  C1 node types: cache.c1.xlarge      Memory optimized:   Current generation:   R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: (not recommended)  M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All T2 instances are created in an Amazon Virtual Private Cloud (Amazon VPC).   Redis (cluster mode disabled): Redis backup/restore is not supported on T1 and T2 instances.    Redis (cluster mode enabled): Backup/restore is not supported on T1 instances.   Redis Append-only files (AOF) functionality is not supported for T1 or T2 instances.   Supported node types are available in all regions except as noted in the following table. For a complete listing of node types and specifications, see Amazon ElastiCache Product Features and Details and either Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * Duration filter value, specified in years or seconds. Use this parameter to show only reservations for a given duration. Valid Values: 1 | 3 | 31536000 | 94608000 
     */
    Duration?: String;
    /**
     * The product description filter value. Use this parameter to show only the available offerings matching the specified product description.
     */
    ProductDescription?: String;
    /**
     * The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type. Valid Values: "Light Utilization"|"Medium Utilization"|"Heavy Utilization" 
     */
    OfferingType?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeSnapshotsListMessage {
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * A list of snapshots. Each item in the list contains detailed information about one snapshot.
     */
    Snapshots?: SnapshotList;
  }
  export interface DescribeSnapshotsMessage {
    /**
     * A user-supplied replication group identifier. If this parameter is specified, only snapshots associated with that specific replication group are described.
     */
    ReplicationGroupId?: String;
    /**
     * A user-supplied cluster identifier. If this parameter is specified, only snapshots associated with that specific cache cluster are described.
     */
    CacheClusterId?: String;
    /**
     * A user-supplied name of the snapshot. If this parameter is specified, only this snapshot are described.
     */
    SnapshotName?: String;
    /**
     * If set to system, the output shows snapshots that were automatically created by ElastiCache. If set to user the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.
     */
    SnapshotSource?: String;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 50 Constraints: minimum 20; maximum 50.
     */
    MaxRecords?: IntegerOptional;
    /**
     * A Boolean value which if true, the node group (shard) configuration is included in the snapshot description.
     */
    ShowNodeGroupConfig?: BooleanOptional;
  }
  export type Double = number;
  export interface EC2SecurityGroup {
    /**
     * The status of the Amazon EC2 security group.
     */
    Status?: String;
    /**
     * The name of the Amazon EC2 security group.
     */
    EC2SecurityGroupName?: String;
    /**
     * The AWS account ID of the Amazon EC2 security group owner.
     */
    EC2SecurityGroupOwnerId?: String;
  }
  export type EC2SecurityGroupList = EC2SecurityGroup[];
  export interface Endpoint {
    /**
     * The DNS hostname of the cache node.
     */
    Address?: String;
    /**
     * The port number that the cache engine is listening on.
     */
    Port?: Integer;
  }
  export interface EngineDefaults {
    /**
     * Specifies the name of the cache parameter group family to which the engine default parameters apply. Valid values are: memcached1.4 | redis2.6 | redis2.8 | redis3.2 
     */
    CacheParameterGroupFamily?: String;
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * Contains a list of engine default parameters.
     */
    Parameters?: ParametersList;
    /**
     * A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.
     */
    CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParametersList;
  }
  export interface Event {
    /**
     * The identifier for the source of the event. For example, if the event occurred at the cache cluster level, the identifier would be the name of the cache cluster.
     */
    SourceIdentifier?: String;
    /**
     * Specifies the origin of this event - a cache cluster, a parameter group, a security group, etc.
     */
    SourceType?: SourceType;
    /**
     * The text of the event.
     */
    Message?: String;
    /**
     * The date and time when the event occurred.
     */
    Date?: TStamp;
  }
  export type EventList = Event[];
  export interface EventsMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of events. Each element in the list contains detailed information about one event.
     */
    Events?: EventList;
  }
  export type Integer = number;
  export type IntegerOptional = number;
  export type KeyList = String[];
  export interface ListAllowedNodeTypeModificationsMessage {
    /**
     * The name of the cache cluster you want to scale up to a larger node instanced type. ElastiCache uses the cluster id to identify the current node type of this cluster and from that to create a list of node types you can scale up to.  You must provide a value for either the CacheClusterId or the ReplicationGroupId. 
     */
    CacheClusterId?: String;
    /**
     * The name of the replication group want to scale up to a larger node type. ElastiCache uses the replication group id to identify the current node type being used by this replication group, and from that to create a list of node types you can scale up to.  You must provide a value for either the CacheClusterId or the ReplicationGroupId. 
     */
    ReplicationGroupId?: String;
  }
  export interface ListTagsForResourceMessage {
    /**
     * The Amazon Resource Name (ARN) of the resource for which you want the list of tags, for example arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster or arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    ResourceName: String;
  }
  export interface ModifyCacheClusterMessage {
    /**
     * The cache cluster identifier. This value is stored as a lowercase string.
     */
    CacheClusterId: String;
    /**
     * The number of cache nodes that the cache cluster should have. If the value for NumCacheNodes is greater than the sum of the number of current cache nodes and the number of cache nodes pending creation (which may be zero), more nodes are added. If the value is less than the number of existing cache nodes, nodes are removed. If the value is equal to the number of current cache nodes, any pending add or remove requests are canceled. If you are removing cache nodes, you must use the CacheNodeIdsToRemove parameter to provide the IDs of the specific cache nodes to remove. For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20.  Adding or removing Memcached cache nodes can be applied immediately or as a pending operation (see ApplyImmediately). A pending operation to modify the number of cache nodes in a cluster during its maintenance window, whether by adding or removing nodes in accordance with the scale out architecture, is not queued. The customer's latest request to add or remove nodes to the cluster overrides any previous pending operations to modify the number of cache nodes in the cluster. For example, a request to remove 2 nodes would override a previous pending operation to remove 3 nodes. Similarly, a request to add 2 nodes would override a previous pending operation to remove 3 nodes and vice versa. As Memcached cache nodes may now be provisioned in different Availability Zones with flexible cache node placement, a request to add nodes does not automatically override a previous pending operation to add nodes. The customer can modify the previous pending operation to add more nodes or explicitly cancel the pending request and retry the new request. To cancel pending operations to modify the number of cache nodes in a cluster, use the ModifyCacheCluster request and set NumCacheNodes equal to the number of cache nodes currently in the cache cluster. 
     */
    NumCacheNodes?: IntegerOptional;
    /**
     * A list of cache node IDs to be removed. A node ID is a numeric identifier (0001, 0002, etc.). This parameter is only valid when NumCacheNodes is less than the existing number of cache nodes. The number of cache node IDs supplied in this parameter must match the difference between the existing number of cache nodes in the cluster or pending cache nodes, whichever is greater, and the value of NumCacheNodes in the request. For example: If you have 3 active cache nodes, 7 pending cache nodes, and the number of cache nodes in this ModifyCacheCluster call is 5, you must list 2 (7 - 5) cache node IDs to remove.
     */
    CacheNodeIdsToRemove?: CacheNodeIdsList;
    /**
     * Specifies whether the new nodes in this Memcached cache cluster are all created in a single Availability Zone or created across multiple Availability Zones. Valid values: single-az | cross-az. This option is only supported for Memcached cache clusters.  You cannot specify single-az if the Memcached cache cluster already has cache nodes in different Availability Zones. If cross-az is specified, existing Memcached nodes remain in their current Availability Zone. Only newly created nodes are located in different Availability Zones. For instructions on how to move existing Memcached nodes to different Availability Zones, see the Availability Zone Considerations section of Cache Node Considerations for Memcached. 
     */
    AZMode?: AZMode;
    /**
     * The list of Availability Zones where the new Memcached cache nodes are created. This parameter is only valid when NumCacheNodes in the request is greater than the sum of the number of active cache nodes and the number of cache nodes pending creation (which may be zero). The number of Availability Zones supplied in this list must match the cache nodes being added in this request. This option is only supported on Memcached clusters. Scenarios:    Scenario 1: You have 3 active nodes and wish to add 2 nodes. Specify NumCacheNodes=5 (3 + 2) and optionally specify two Availability Zones for the two new nodes.    Scenario 2: You have 3 active nodes and 2 nodes pending creation (from the scenario 1 call) and want to add 1 more node. Specify NumCacheNodes=6 ((3 + 2) + 1) and optionally specify an Availability Zone for the new node.    Scenario 3: You want to cancel all pending operations. Specify NumCacheNodes=3 to cancel all pending operations.   The Availability Zone placement of nodes pending creation cannot be modified. If you wish to cancel any nodes pending creation, add 0 nodes by setting NumCacheNodes to the number of current nodes. If cross-az is specified, existing Memcached nodes remain in their current Availability Zone. Only newly created nodes can be located in different Availability Zones. For guidance on how to move existing Memcached nodes to different Availability Zones, see the Availability Zone Considerations section of Cache Node Considerations for Memcached.  Impact of new add/remove requests upon pending requests    Scenario-1   Pending Action: Delete   New Request: Delete   Result: The new delete, pending or immediate, replaces the pending delete.     Scenario-2   Pending Action: Delete   New Request: Create   Result: The new create, pending or immediate, replaces the pending delete.     Scenario-3   Pending Action: Create   New Request: Delete   Result: The new delete, pending or immediate, replaces the pending create.     Scenario-4   Pending Action: Create   New Request: Create   Result: The new create is added to the pending create.   Important: If the new create request is Apply Immediately - Yes, all creates are performed immediately. If the new create request is Apply Immediately - No, all creates are pending.     
     */
    NewAvailabilityZones?: PreferredAvailabilityZoneList;
    /**
     * A list of cache security group names to authorize on this cache cluster. This change is asynchronously applied as soon as possible. You can use this parameter only with clusters that are created outside of an Amazon Virtual Private Cloud (Amazon VPC). Constraints: Must contain no more than 255 alphanumeric characters. Must not be "Default".
     */
    CacheSecurityGroupNames?: CacheSecurityGroupNameList;
    /**
     * Specifies the VPC Security Groups associated with the cache cluster. This parameter can be used only with clusters that are created in an Amazon Virtual Private Cloud (Amazon VPC).
     */
    SecurityGroupIds?: SecurityGroupIdsList;
    /**
     * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are:    sun     mon     tue     wed     thu     fri     sat    Example: sun:23:00-mon:01:30 
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.  The Amazon SNS topic owner must be same as the cache cluster owner. 
     */
    NotificationTopicArn?: String;
    /**
     * The name of the cache parameter group to apply to this cache cluster. This change is asynchronously applied as soon as possible for parameters when the ApplyImmediately parameter is specified as true for this request.
     */
    CacheParameterGroupName?: String;
    /**
     * The status of the Amazon SNS notification topic. Notifications are sent only if the status is active. Valid values: active | inactive 
     */
    NotificationTopicStatus?: String;
    /**
     * If true, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the PreferredMaintenanceWindow setting for the cache cluster. If false, changes to the cache cluster are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first.  If you perform a ModifyCacheCluster before a pending modification is applied, the pending modification is replaced by the newer modification.  Valid values: true | false  Default: false 
     */
    ApplyImmediately?: Boolean;
    /**
     * The upgraded version of the cache engine to be run on the cache nodes.  Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cache cluster and create it anew with the earlier engine version. 
     */
    EngineVersion?: String;
    /**
     * This parameter is currently disabled.
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * The number of days for which ElastiCache retains automatic cache cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.  If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off. 
     */
    SnapshotRetentionLimit?: IntegerOptional;
    /**
     * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your cache cluster. 
     */
    SnapshotWindow?: String;
    /**
     * A valid cache node type that you want to scale this cache cluster up to.
     */
    CacheNodeType?: String;
  }
  export interface ModifyCacheClusterResult {
    CacheCluster?: CacheCluster;
  }
  export interface ModifyCacheParameterGroupMessage {
    /**
     * The name of the cache parameter group to modify.
     */
    CacheParameterGroupName: String;
    /**
     * An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be modified per request.
     */
    ParameterNameValues: ParameterNameValueList;
  }
  export interface ModifyCacheSubnetGroupMessage {
    /**
     * The name for the cache subnet group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters or hyphens. Example: mysubnetgroup 
     */
    CacheSubnetGroupName: String;
    /**
     * A description of the cache subnet group.
     */
    CacheSubnetGroupDescription?: String;
    /**
     * The EC2 subnet IDs for the cache subnet group.
     */
    SubnetIds?: SubnetIdentifierList;
  }
  export interface ModifyCacheSubnetGroupResult {
    CacheSubnetGroup?: CacheSubnetGroup;
  }
  export interface ModifyReplicationGroupMessage {
    /**
     * The identifier of the replication group to modify.
     */
    ReplicationGroupId: String;
    /**
     * A description for the replication group. Maximum length is 255 characters.
     */
    ReplicationGroupDescription?: String;
    /**
     * For replication groups with a single primary, if this parameter is specified, ElastiCache promotes the specified cluster in the specified replication group to the primary role. The nodes of all other clusters in the replication group are read replicas.
     */
    PrimaryClusterId?: String;
    /**
     * The cache cluster ID that is used as the daily snapshot source for the replication group. This parameter cannot be set for Redis (cluster mode enabled) replication groups.
     */
    SnapshottingClusterId?: String;
    /**
     * Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure. Valid values: true | false  Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:   Redis versions earlier than 2.8.6.   Redis (cluster mode disabled): T1 and T2 cache node types.   Redis (cluster mode enabled): T1 node types.  
     */
    AutomaticFailoverEnabled?: BooleanOptional;
    /**
     * A list of cache security group names to authorize for the clusters in this replication group. This change is asynchronously applied as soon as possible. This parameter can be used only with replication group containing cache clusters running outside of an Amazon Virtual Private Cloud (Amazon VPC). Constraints: Must contain no more than 255 alphanumeric characters. Must not be Default.
     */
    CacheSecurityGroupNames?: CacheSecurityGroupNameList;
    /**
     * Specifies the VPC Security Groups associated with the cache clusters in the replication group. This parameter can be used only with replication group containing cache clusters running in an Amazon Virtual Private Cloud (Amazon VPC).
     */
    SecurityGroupIds?: SecurityGroupIdsList;
    /**
     * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are:    sun     mon     tue     wed     thu     fri     sat    Example: sun:23:00-mon:01:30 
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.  The Amazon SNS topic owner must be same as the replication group owner.  
     */
    NotificationTopicArn?: String;
    /**
     * The name of the cache parameter group to apply to all of the clusters in this replication group. This change is asynchronously applied as soon as possible for parameters when the ApplyImmediately parameter is specified as true for this request.
     */
    CacheParameterGroupName?: String;
    /**
     * The status of the Amazon SNS notification topic for the replication group. Notifications are sent only if the status is active. Valid values: active | inactive 
     */
    NotificationTopicStatus?: String;
    /**
     * If true, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the PreferredMaintenanceWindow setting for the replication group. If false, changes to the nodes in the replication group are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first. Valid values: true | false  Default: false 
     */
    ApplyImmediately?: Boolean;
    /**
     * The upgraded version of the cache engine to be run on the cache clusters in the replication group.  Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing replication group and create it anew with the earlier engine version. 
     */
    EngineVersion?: String;
    /**
     * This parameter is currently disabled.
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * The number of days for which ElastiCache retains automatic node group (shard) snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.  Important If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.
     */
    SnapshotRetentionLimit?: IntegerOptional;
    /**
     * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of the node group (shard) specified by SnapshottingClusterId. Example: 05:00-09:00  If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.
     */
    SnapshotWindow?: String;
    /**
     * A valid cache node type that you want to scale this replication group to.
     */
    CacheNodeType?: String;
    /**
     * The name of the Node Group (called shard in the console).
     */
    NodeGroupId?: String;
  }
  export interface ModifyReplicationGroupResult {
    ReplicationGroup?: ReplicationGroup;
  }
  export interface NodeGroup {
    /**
     * The identifier for the node group (shard). A Redis (cluster mode disabled) replication group contains only 1 node group; therefore, the node group ID is 0001. A Redis (cluster mode enabled) replication group contains 1 to 15 node groups numbered 0001 to 0015. 
     */
    NodeGroupId?: String;
    /**
     * The current state of this replication group - creating, available, etc.
     */
    Status?: String;
    /**
     * The endpoint of the primary node in this node group (shard).
     */
    PrimaryEndpoint?: Endpoint;
    /**
     * The keyspace for this node group (shard).
     */
    Slots?: String;
    /**
     * A list containing information about individual nodes within the node group (shard).
     */
    NodeGroupMembers?: NodeGroupMemberList;
  }
  export interface NodeGroupConfiguration {
    /**
     * A string that specifies the keyspace for a particular node group. Keyspaces range from 0 to 16,383. The string is in the format startkey-endkey. Example: "0-3999" 
     */
    Slots?: String;
    /**
     * The number of read replica nodes in this node group (shard).
     */
    ReplicaCount?: IntegerOptional;
    /**
     * The Availability Zone where the primary node of this node group (shard) is launched.
     */
    PrimaryAvailabilityZone?: String;
    /**
     * A list of Availability Zones to be used for the read replicas. The number of Availability Zones in this list must match the value of ReplicaCount or ReplicasPerNodeGroup if not specified.
     */
    ReplicaAvailabilityZones?: AvailabilityZonesList;
  }
  export type NodeGroupConfigurationList = NodeGroupConfiguration[];
  export type NodeGroupList = NodeGroup[];
  export interface NodeGroupMember {
    /**
     * The ID of the cache cluster to which the node belongs.
     */
    CacheClusterId?: String;
    /**
     * The ID of the node within its cache cluster. A node ID is a numeric identifier (0001, 0002, etc.).
     */
    CacheNodeId?: String;
    ReadEndpoint?: Endpoint;
    /**
     * The name of the Availability Zone in which the node is located.
     */
    PreferredAvailabilityZone?: String;
    /**
     * The role that is currently assigned to the node - primary or replica.
     */
    CurrentRole?: String;
  }
  export type NodeGroupMemberList = NodeGroupMember[];
  export interface NodeSnapshot {
    /**
     * A unique identifier for the source cache cluster.
     */
    CacheClusterId?: String;
    /**
     * A unique identifier for the source node group (shard).
     */
    NodeGroupId?: String;
    /**
     * The cache node identifier for the node in the source cache cluster.
     */
    CacheNodeId?: String;
    /**
     * The configuration for the source node group (shard).
     */
    NodeGroupConfiguration?: NodeGroupConfiguration;
    /**
     * The size of the cache on the source cache node.
     */
    CacheSize?: String;
    /**
     * The date and time when the cache node was created in the source cache cluster.
     */
    CacheNodeCreateTime?: TStamp;
    /**
     * The date and time when the source node's metadata and cache data set was obtained for the snapshot.
     */
    SnapshotCreateTime?: TStamp;
  }
  export type NodeSnapshotList = NodeSnapshot[];
  export type NodeTypeList = String[];
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
     * The value of the parameter.
     */
    ParameterValue?: String;
    /**
     * A description of the parameter.
     */
    Description?: String;
    /**
     * The source of the parameter.
     */
    Source?: String;
    /**
     * The valid data type for the parameter.
     */
    DataType?: String;
    /**
     * The valid range of values for the parameter.
     */
    AllowedValues?: String;
    /**
     * Indicates whether (true) or not (false) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.
     */
    IsModifiable?: Boolean;
    /**
     * The earliest cache engine version to which the parameter can apply.
     */
    MinimumEngineVersion?: String;
    /**
     * Indicates whether a change to the parameter is applied immediately or requires a reboot for the change to be applied. You can force a reboot or wait until the next maintenance window's reboot. For more information, see Rebooting a Cluster.
     */
    ChangeType?: ChangeType;
  }
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
  export type ParametersList = Parameter[];
  export type PendingAutomaticFailoverStatus = "enabled"|"disabled"|string;
  export interface PendingModifiedValues {
    /**
     * The new number of cache nodes for the cache cluster. For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20.
     */
    NumCacheNodes?: IntegerOptional;
    /**
     * A list of cache node IDs that are being removed (or will be removed) from the cache cluster. A node ID is a numeric identifier (0001, 0002, etc.).
     */
    CacheNodeIdsToRemove?: CacheNodeIdsList;
    /**
     * The new cache engine version that the cache cluster runs.
     */
    EngineVersion?: String;
    /**
     * The cache node type that this cache cluster or replication group is scaled to.
     */
    CacheNodeType?: String;
  }
  export type PreferredAvailabilityZoneList = String[];
  export interface PurchaseReservedCacheNodesOfferingMessage {
    /**
     * The ID of the reserved cache node offering to purchase. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706 
     */
    ReservedCacheNodesOfferingId: String;
    /**
     * A customer-specified identifier to track this reservation.  The Reserved Cache Node ID is an unique customer-specified identifier to track this reservation. If this parameter is not specified, ElastiCache automatically generates an identifier for the reservation.  Example: myreservationID
     */
    ReservedCacheNodeId?: String;
    /**
     * The number of cache node instances to reserve. Default: 1 
     */
    CacheNodeCount?: IntegerOptional;
  }
  export interface PurchaseReservedCacheNodesOfferingResult {
    ReservedCacheNode?: ReservedCacheNode;
  }
  export interface RebootCacheClusterMessage {
    /**
     * The cache cluster identifier. This parameter is stored as a lowercase string.
     */
    CacheClusterId: String;
    /**
     * A list of cache node IDs to reboot. A node ID is a numeric identifier (0001, 0002, etc.). To reboot an entire cache cluster, specify all of the cache node IDs.
     */
    CacheNodeIdsToReboot: CacheNodeIdsList;
  }
  export interface RebootCacheClusterResult {
    CacheCluster?: CacheCluster;
  }
  export interface RecurringCharge {
    /**
     * The monetary amount of the recurring charge.
     */
    RecurringChargeAmount?: Double;
    /**
     * The frequency of the recurring charge.
     */
    RecurringChargeFrequency?: String;
  }
  export type RecurringChargeList = RecurringCharge[];
  export interface RemoveTagsFromResourceMessage {
    /**
     * The Amazon Resource Name (ARN) of the resource from which you want the tags removed, for example arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster or arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    ResourceName: String;
    /**
     * A list of TagKeys identifying the tags you want removed from the named resource.
     */
    TagKeys: KeyList;
  }
  export interface ReplicationGroup {
    /**
     * The identifier for the replication group.
     */
    ReplicationGroupId?: String;
    /**
     * The description of the replication group.
     */
    Description?: String;
    /**
     * The current state of this replication group - creating, available, modifying, deleting, create-failed, snapshotting.
     */
    Status?: String;
    /**
     * A group of settings to be applied to the replication group, either immediately or during the next maintenance window.
     */
    PendingModifiedValues?: ReplicationGroupPendingModifiedValues;
    /**
     * The names of all the cache clusters that are part of this replication group.
     */
    MemberClusters?: ClusterIdList;
    /**
     * A single element list with information about the nodes in the replication group.
     */
    NodeGroups?: NodeGroupList;
    /**
     * The cache cluster ID that is used as the daily snapshot source for the replication group.
     */
    SnapshottingClusterId?: String;
    /**
     * Indicates the status of Multi-AZ with automatic failover for this Redis replication group. Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:   Redis versions earlier than 2.8.6.   Redis (cluster mode disabled): T1 and T2 cache node types.   Redis (cluster mode enabled): T1 node types.  
     */
    AutomaticFailover?: AutomaticFailoverStatus;
    /**
     * The configuration endpoint for this replicaiton group. Use the configuration endpoint to connect to this replication group.
     */
    ConfigurationEndpoint?: Endpoint;
    /**
     * The number of days for which ElastiCache retains automatic cache cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.   If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off. 
     */
    SnapshotRetentionLimit?: IntegerOptional;
    /**
     * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). Example: 05:00-09:00  If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.  This parameter is only valid if the Engine parameter is redis. 
     */
    SnapshotWindow?: String;
    /**
     * A flag indicating whether or not this replication group is cluster enabled; i.e., whether its data can be partitioned across multiple shards (API/CLI: node groups). Valid values: true | false 
     */
    ClusterEnabled?: BooleanOptional;
    /**
     * The name of the compute and memory capacity node type for each node in the replication group.
     */
    CacheNodeType?: String;
    /**
     * A flag that enables using an AuthToken (password) when issuing Redis commands. Default: false 
     */
    AuthTokenEnabled?: BooleanOptional;
    /**
     * A flag that enables in-transit encryption when set to true. You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster. Default: false 
     */
    TransitEncryptionEnabled?: BooleanOptional;
    /**
     * A flag that enables encryption at-rest when set to true. You cannot modify the value of AtRestEncryptionEnabled after the cluster is created. To enable encryption at-rest on a cluster you must set AtRestEncryptionEnabled to true when you create a cluster. Default: false 
     */
    AtRestEncryptionEnabled?: BooleanOptional;
  }
  export type ReplicationGroupList = ReplicationGroup[];
  export interface ReplicationGroupMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of replication groups. Each item in the list contains detailed information about one replication group.
     */
    ReplicationGroups?: ReplicationGroupList;
  }
  export interface ReplicationGroupPendingModifiedValues {
    /**
     * The primary cluster ID that is applied immediately (if --apply-immediately was specified), or during the next maintenance window.
     */
    PrimaryClusterId?: String;
    /**
     * Indicates the status of Multi-AZ with automatic failover for this Redis replication group. Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:   Redis versions earlier than 2.8.6.   Redis (cluster mode disabled): T1 and T2 cache node types.   Redis (cluster mode enabled): T1 node types.  
     */
    AutomaticFailoverStatus?: PendingAutomaticFailoverStatus;
  }
  export interface ReservedCacheNode {
    /**
     * The unique identifier for the reservation.
     */
    ReservedCacheNodeId?: String;
    /**
     * The offering identifier.
     */
    ReservedCacheNodesOfferingId?: String;
    /**
     * The cache node type for the reserved cache nodes. The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.   General purpose:   Current generation:   T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium   M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge   M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge    Previous generation: (not recommended)  T1 node types: cache.t1.micro   M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized:   Previous generation: (not recommended)  C1 node types: cache.c1.xlarge      Memory optimized:   Current generation:   R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: (not recommended)  M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All T2 instances are created in an Amazon Virtual Private Cloud (Amazon VPC).   Redis (cluster mode disabled): Redis backup/restore is not supported on T1 and T2 instances.    Redis (cluster mode enabled): Backup/restore is not supported on T1 instances.   Redis Append-only files (AOF) functionality is not supported for T1 or T2 instances.   Supported node types are available in all regions except as noted in the following table. For a complete listing of node types and specifications, see Amazon ElastiCache Product Features and Details and either Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The time the reservation started.
     */
    StartTime?: TStamp;
    /**
     * The duration of the reservation in seconds.
     */
    Duration?: Integer;
    /**
     * The fixed price charged for this reserved cache node.
     */
    FixedPrice?: Double;
    /**
     * The hourly price charged for this reserved cache node.
     */
    UsagePrice?: Double;
    /**
     * The number of cache nodes that have been reserved.
     */
    CacheNodeCount?: Integer;
    /**
     * The description of the reserved cache node.
     */
    ProductDescription?: String;
    /**
     * The offering type of this reserved cache node.
     */
    OfferingType?: String;
    /**
     * The state of the reserved cache node.
     */
    State?: String;
    /**
     * The recurring price charged to run this reserved cache node.
     */
    RecurringCharges?: RecurringChargeList;
  }
  export type ReservedCacheNodeList = ReservedCacheNode[];
  export interface ReservedCacheNodeMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of reserved cache nodes. Each element in the list contains detailed information about one node.
     */
    ReservedCacheNodes?: ReservedCacheNodeList;
  }
  export interface ReservedCacheNodesOffering {
    /**
     * A unique identifier for the reserved cache node offering.
     */
    ReservedCacheNodesOfferingId?: String;
    /**
     * The cache node type for the reserved cache node. The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.   General purpose:   Current generation:   T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium   M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge   M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge    Previous generation: (not recommended)  T1 node types: cache.t1.micro   M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized:   Previous generation: (not recommended)  C1 node types: cache.c1.xlarge      Memory optimized:   Current generation:   R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: (not recommended)  M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All T2 instances are created in an Amazon Virtual Private Cloud (Amazon VPC).   Redis (cluster mode disabled): Redis backup/restore is not supported on T1 and T2 instances.    Redis (cluster mode enabled): Backup/restore is not supported on T1 instances.   Redis Append-only files (AOF) functionality is not supported for T1 or T2 instances.   Supported node types are available in all regions except as noted in the following table. For a complete listing of node types and specifications, see Amazon ElastiCache Product Features and Details and either Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The duration of the offering. in seconds.
     */
    Duration?: Integer;
    /**
     * The fixed price charged for this offering.
     */
    FixedPrice?: Double;
    /**
     * The hourly price charged for this offering.
     */
    UsagePrice?: Double;
    /**
     * The cache engine used by the offering.
     */
    ProductDescription?: String;
    /**
     * The offering type.
     */
    OfferingType?: String;
    /**
     * The recurring price charged to run this reserved cache node.
     */
    RecurringCharges?: RecurringChargeList;
  }
  export type ReservedCacheNodesOfferingList = ReservedCacheNodesOffering[];
  export interface ReservedCacheNodesOfferingMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of reserved cache node offerings. Each element in the list contains detailed information about one offering.
     */
    ReservedCacheNodesOfferings?: ReservedCacheNodesOfferingList;
  }
  export interface ResetCacheParameterGroupMessage {
    /**
     * The name of the cache parameter group to reset.
     */
    CacheParameterGroupName: String;
    /**
     * If true, all parameters in the cache parameter group are reset to their default values. If false, only the parameters listed by ParameterNameValues are reset to their default values. Valid values: true | false 
     */
    ResetAllParameters?: Boolean;
    /**
     * An array of parameter names to reset to their default values. If ResetAllParameters is true, do not use ParameterNameValues. If ResetAllParameters is false, you must specify the name of at least one parameter to reset.
     */
    ParameterNameValues?: ParameterNameValueList;
  }
  export interface RevokeCacheSecurityGroupIngressMessage {
    /**
     * The name of the cache security group to revoke ingress from.
     */
    CacheSecurityGroupName: String;
    /**
     * The name of the Amazon EC2 security group to revoke access from.
     */
    EC2SecurityGroupName: String;
    /**
     * The AWS account number of the Amazon EC2 security group owner. Note that this is not the same thing as an AWS access key ID - you must provide a valid AWS account number for this parameter.
     */
    EC2SecurityGroupOwnerId: String;
  }
  export interface RevokeCacheSecurityGroupIngressResult {
    CacheSecurityGroup?: CacheSecurityGroup;
  }
  export type SecurityGroupIdsList = String[];
  export interface SecurityGroupMembership {
    /**
     * The identifier of the cache security group.
     */
    SecurityGroupId?: String;
    /**
     * The status of the cache security group membership. The status changes whenever a cache security group is modified, or when the cache security groups assigned to a cache cluster are modified.
     */
    Status?: String;
  }
  export type SecurityGroupMembershipList = SecurityGroupMembership[];
  export interface Snapshot {
    /**
     * The name of a snapshot. For an automatic snapshot, the name is system-generated. For a manual snapshot, this is the user-provided name.
     */
    SnapshotName?: String;
    /**
     * The unique identifier of the source replication group.
     */
    ReplicationGroupId?: String;
    /**
     * A description of the source replication group.
     */
    ReplicationGroupDescription?: String;
    /**
     * The user-supplied identifier of the source cache cluster.
     */
    CacheClusterId?: String;
    /**
     * The status of the snapshot. Valid values: creating | available | restoring | copying | deleting.
     */
    SnapshotStatus?: String;
    /**
     * Indicates whether the snapshot is from an automatic backup (automated) or was created manually (manual).
     */
    SnapshotSource?: String;
    /**
     * The name of the compute and memory capacity node type for the source cache cluster. The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.   General purpose:   Current generation:   T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium   M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge   M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge    Previous generation: (not recommended)  T1 node types: cache.t1.micro   M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized:   Previous generation: (not recommended)  C1 node types: cache.c1.xlarge      Memory optimized:   Current generation:   R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: (not recommended)  M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All T2 instances are created in an Amazon Virtual Private Cloud (Amazon VPC).   Redis (cluster mode disabled): Redis backup/restore is not supported on T1 and T2 instances.    Redis (cluster mode enabled): Backup/restore is not supported on T1 instances.   Redis Append-only files (AOF) functionality is not supported for T1 or T2 instances.   Supported node types are available in all regions except as noted in the following table. For a complete listing of node types and specifications, see Amazon ElastiCache Product Features and Details and either Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The name of the cache engine (memcached or redis) used by the source cache cluster.
     */
    Engine?: String;
    /**
     * The version of the cache engine version that is used by the source cache cluster.
     */
    EngineVersion?: String;
    /**
     * The number of cache nodes in the source cache cluster. For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20.
     */
    NumCacheNodes?: IntegerOptional;
    /**
     * The name of the Availability Zone in which the source cache cluster is located.
     */
    PreferredAvailabilityZone?: String;
    /**
     * The date and time when the source cache cluster was created.
     */
    CacheClusterCreateTime?: TStamp;
    /**
     * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are:    sun     mon     tue     wed     thu     fri     sat    Example: sun:23:00-mon:01:30 
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The Amazon Resource Name (ARN) for the topic used by the source cache cluster for publishing notifications.
     */
    TopicArn?: String;
    /**
     * The port number used by each cache nodes in the source cache cluster.
     */
    Port?: IntegerOptional;
    /**
     * The cache parameter group that is associated with the source cache cluster.
     */
    CacheParameterGroupName?: String;
    /**
     * The name of the cache subnet group associated with the source cache cluster.
     */
    CacheSubnetGroupName?: String;
    /**
     * The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group for the source cache cluster.
     */
    VpcId?: String;
    /**
     * This parameter is currently disabled.
     */
    AutoMinorVersionUpgrade?: Boolean;
    /**
     * For an automatic snapshot, the number of days for which ElastiCache retains the snapshot before deleting it. For manual snapshots, this field reflects the SnapshotRetentionLimit for the source cache cluster when the snapshot was created. This field is otherwise ignored: Manual snapshots do not expire, and can only be deleted using the DeleteSnapshot operation.   Important If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.
     */
    SnapshotRetentionLimit?: IntegerOptional;
    /**
     * The daily time range during which ElastiCache takes daily snapshots of the source cache cluster.
     */
    SnapshotWindow?: String;
    /**
     * The number of node groups (shards) in this snapshot. When restoring from a snapshot, the number of node groups (shards) in the snapshot and in the restored replication group must be the same.
     */
    NumNodeGroups?: IntegerOptional;
    /**
     * Indicates the status of Multi-AZ with automatic failover for the source Redis replication group. Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:   Redis versions earlier than 2.8.6.   Redis (cluster mode disabled): T1 and T2 cache node types.   Redis (cluster mode enabled): T1 node types.  
     */
    AutomaticFailover?: AutomaticFailoverStatus;
    /**
     * A list of the cache nodes in the source cache cluster.
     */
    NodeSnapshots?: NodeSnapshotList;
  }
  export type SnapshotArnsList = String[];
  export type SnapshotList = Snapshot[];
  export type SourceType = "cache-cluster"|"cache-parameter-group"|"cache-security-group"|"cache-subnet-group"|"replication-group"|string;
  export type String = string;
  export interface Subnet {
    /**
     * The unique identifier for the subnet.
     */
    SubnetIdentifier?: String;
    /**
     * The Availability Zone associated with the subnet.
     */
    SubnetAvailabilityZone?: AvailabilityZone;
  }
  export type SubnetIdentifierList = String[];
  export type SubnetList = Subnet[];
  export type TStamp = Date;
  export interface Tag {
    /**
     * The key for the tag. May not be null.
     */
    Key?: String;
    /**
     * The tag's value. May be null.
     */
    Value?: String;
  }
  export type TagList = Tag[];
  export interface TagListMessage {
    /**
     * A list of cost allocation tags as key-value pairs.
     */
    TagList?: TagList;
  }
  export interface TestFailoverMessage {
    /**
     * The name of the replication group (console: cluster) whose automatic failover is being tested by this operation.
     */
    ReplicationGroupId: String;
    /**
     * The name of the node group (called shard in the console) in this replication group on which automatic failover is to be tested. You may test automatic failover on up to 5 node groups in any rolling 24-hour period.
     */
    NodeGroupId: String;
  }
  export interface TestFailoverResult {
    ReplicationGroup?: ReplicationGroup;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2012-11-15"|"2014-03-24"|"2014-07-15"|"2014-09-30"|"2015-02-02"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ElastiCache client.
   */
  export import Types = ElastiCache;
}
export = ElastiCache;
