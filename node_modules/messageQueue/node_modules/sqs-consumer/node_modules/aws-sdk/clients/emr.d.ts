import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class EMR extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: EMR.Types.ClientConfiguration)
  config: Config & EMR.Types.ClientConfiguration;
  /**
   * Adds an instance fleet to a running cluster.  The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x. 
   */
  addInstanceFleet(params: EMR.Types.AddInstanceFleetInput, callback?: (err: AWSError, data: EMR.Types.AddInstanceFleetOutput) => void): Request<EMR.Types.AddInstanceFleetOutput, AWSError>;
  /**
   * Adds an instance fleet to a running cluster.  The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x. 
   */
  addInstanceFleet(callback?: (err: AWSError, data: EMR.Types.AddInstanceFleetOutput) => void): Request<EMR.Types.AddInstanceFleetOutput, AWSError>;
  /**
   * Adds one or more instance groups to a running cluster.
   */
  addInstanceGroups(params: EMR.Types.AddInstanceGroupsInput, callback?: (err: AWSError, data: EMR.Types.AddInstanceGroupsOutput) => void): Request<EMR.Types.AddInstanceGroupsOutput, AWSError>;
  /**
   * Adds one or more instance groups to a running cluster.
   */
  addInstanceGroups(callback?: (err: AWSError, data: EMR.Types.AddInstanceGroupsOutput) => void): Request<EMR.Types.AddInstanceGroupsOutput, AWSError>;
  /**
   * AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow. If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. For more information on how to do this, see Add More than 256 Steps to a Cluster in the Amazon EMR Management Guide. A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step. Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully. You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.
   */
  addJobFlowSteps(params: EMR.Types.AddJobFlowStepsInput, callback?: (err: AWSError, data: EMR.Types.AddJobFlowStepsOutput) => void): Request<EMR.Types.AddJobFlowStepsOutput, AWSError>;
  /**
   * AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow. If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. For more information on how to do this, see Add More than 256 Steps to a Cluster in the Amazon EMR Management Guide. A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step. Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully. You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.
   */
  addJobFlowSteps(callback?: (err: AWSError, data: EMR.Types.AddJobFlowStepsOutput) => void): Request<EMR.Types.AddJobFlowStepsOutput, AWSError>;
  /**
   * Adds tags to an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see Tagging Amazon EMR Resources. 
   */
  addTags(params: EMR.Types.AddTagsInput, callback?: (err: AWSError, data: EMR.Types.AddTagsOutput) => void): Request<EMR.Types.AddTagsOutput, AWSError>;
  /**
   * Adds tags to an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see Tagging Amazon EMR Resources. 
   */
  addTags(callback?: (err: AWSError, data: EMR.Types.AddTagsOutput) => void): Request<EMR.Types.AddTagsOutput, AWSError>;
  /**
   * Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee a step will be canceled, even if the request is successfully submitted. You can only cancel steps that are in a PENDING state.
   */
  cancelSteps(params: EMR.Types.CancelStepsInput, callback?: (err: AWSError, data: EMR.Types.CancelStepsOutput) => void): Request<EMR.Types.CancelStepsOutput, AWSError>;
  /**
   * Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee a step will be canceled, even if the request is successfully submitted. You can only cancel steps that are in a PENDING state.
   */
  cancelSteps(callback?: (err: AWSError, data: EMR.Types.CancelStepsOutput) => void): Request<EMR.Types.CancelStepsOutput, AWSError>;
  /**
   * Creates a security configuration, which is stored in the service and can be specified when a cluster is created.
   */
  createSecurityConfiguration(params: EMR.Types.CreateSecurityConfigurationInput, callback?: (err: AWSError, data: EMR.Types.CreateSecurityConfigurationOutput) => void): Request<EMR.Types.CreateSecurityConfigurationOutput, AWSError>;
  /**
   * Creates a security configuration, which is stored in the service and can be specified when a cluster is created.
   */
  createSecurityConfiguration(callback?: (err: AWSError, data: EMR.Types.CreateSecurityConfigurationOutput) => void): Request<EMR.Types.CreateSecurityConfigurationOutput, AWSError>;
  /**
   * Deletes a security configuration.
   */
  deleteSecurityConfiguration(params: EMR.Types.DeleteSecurityConfigurationInput, callback?: (err: AWSError, data: EMR.Types.DeleteSecurityConfigurationOutput) => void): Request<EMR.Types.DeleteSecurityConfigurationOutput, AWSError>;
  /**
   * Deletes a security configuration.
   */
  deleteSecurityConfiguration(callback?: (err: AWSError, data: EMR.Types.DeleteSecurityConfigurationOutput) => void): Request<EMR.Types.DeleteSecurityConfigurationOutput, AWSError>;
  /**
   * Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on. For information about the cluster steps, see ListSteps.
   */
  describeCluster(params: EMR.Types.DescribeClusterInput, callback?: (err: AWSError, data: EMR.Types.DescribeClusterOutput) => void): Request<EMR.Types.DescribeClusterOutput, AWSError>;
  /**
   * Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on. For information about the cluster steps, see ListSteps.
   */
  describeCluster(callback?: (err: AWSError, data: EMR.Types.DescribeClusterOutput) => void): Request<EMR.Types.DescribeClusterOutput, AWSError>;
  /**
   * This API is deprecated and will eventually be removed. We recommend you use ListClusters, DescribeCluster, ListSteps, ListInstanceGroups and ListBootstrapActions instead. DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time. Regardless of supplied parameters, only job flows created within the last two months are returned. If no parameters are supplied, then job flows matching either of the following criteria are returned:   Job flows created and completed in the last two weeks    Job flows created within the last two months that are in one of the following states: RUNNING, WAITING, SHUTTING_DOWN, STARTING    Amazon EMR can return a maximum of 512 job flow descriptions.
   */
  describeJobFlows(params: EMR.Types.DescribeJobFlowsInput, callback?: (err: AWSError, data: EMR.Types.DescribeJobFlowsOutput) => void): Request<EMR.Types.DescribeJobFlowsOutput, AWSError>;
  /**
   * This API is deprecated and will eventually be removed. We recommend you use ListClusters, DescribeCluster, ListSteps, ListInstanceGroups and ListBootstrapActions instead. DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time. Regardless of supplied parameters, only job flows created within the last two months are returned. If no parameters are supplied, then job flows matching either of the following criteria are returned:   Job flows created and completed in the last two weeks    Job flows created within the last two months that are in one of the following states: RUNNING, WAITING, SHUTTING_DOWN, STARTING    Amazon EMR can return a maximum of 512 job flow descriptions.
   */
  describeJobFlows(callback?: (err: AWSError, data: EMR.Types.DescribeJobFlowsOutput) => void): Request<EMR.Types.DescribeJobFlowsOutput, AWSError>;
  /**
   * Provides the details of a security configuration by returning the configuration JSON.
   */
  describeSecurityConfiguration(params: EMR.Types.DescribeSecurityConfigurationInput, callback?: (err: AWSError, data: EMR.Types.DescribeSecurityConfigurationOutput) => void): Request<EMR.Types.DescribeSecurityConfigurationOutput, AWSError>;
  /**
   * Provides the details of a security configuration by returning the configuration JSON.
   */
  describeSecurityConfiguration(callback?: (err: AWSError, data: EMR.Types.DescribeSecurityConfigurationOutput) => void): Request<EMR.Types.DescribeSecurityConfigurationOutput, AWSError>;
  /**
   * Provides more detail about the cluster step.
   */
  describeStep(params: EMR.Types.DescribeStepInput, callback?: (err: AWSError, data: EMR.Types.DescribeStepOutput) => void): Request<EMR.Types.DescribeStepOutput, AWSError>;
  /**
   * Provides more detail about the cluster step.
   */
  describeStep(callback?: (err: AWSError, data: EMR.Types.DescribeStepOutput) => void): Request<EMR.Types.DescribeStepOutput, AWSError>;
  /**
   * Provides information about the bootstrap actions associated with a cluster.
   */
  listBootstrapActions(params: EMR.Types.ListBootstrapActionsInput, callback?: (err: AWSError, data: EMR.Types.ListBootstrapActionsOutput) => void): Request<EMR.Types.ListBootstrapActionsOutput, AWSError>;
  /**
   * Provides information about the bootstrap actions associated with a cluster.
   */
  listBootstrapActions(callback?: (err: AWSError, data: EMR.Types.ListBootstrapActionsOutput) => void): Request<EMR.Types.ListBootstrapActionsOutput, AWSError>;
  /**
   * Provides the status of all clusters visible to this AWS account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.
   */
  listClusters(params: EMR.Types.ListClustersInput, callback?: (err: AWSError, data: EMR.Types.ListClustersOutput) => void): Request<EMR.Types.ListClustersOutput, AWSError>;
  /**
   * Provides the status of all clusters visible to this AWS account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.
   */
  listClusters(callback?: (err: AWSError, data: EMR.Types.ListClustersOutput) => void): Request<EMR.Types.ListClustersOutput, AWSError>;
  /**
   * Lists all available details about the instance fleets in a cluster.  The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. 
   */
  listInstanceFleets(params: EMR.Types.ListInstanceFleetsInput, callback?: (err: AWSError, data: EMR.Types.ListInstanceFleetsOutput) => void): Request<EMR.Types.ListInstanceFleetsOutput, AWSError>;
  /**
   * Lists all available details about the instance fleets in a cluster.  The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. 
   */
  listInstanceFleets(callback?: (err: AWSError, data: EMR.Types.ListInstanceFleetsOutput) => void): Request<EMR.Types.ListInstanceFleetsOutput, AWSError>;
  /**
   * Provides all available details about the instance groups in a cluster.
   */
  listInstanceGroups(params: EMR.Types.ListInstanceGroupsInput, callback?: (err: AWSError, data: EMR.Types.ListInstanceGroupsOutput) => void): Request<EMR.Types.ListInstanceGroupsOutput, AWSError>;
  /**
   * Provides all available details about the instance groups in a cluster.
   */
  listInstanceGroups(callback?: (err: AWSError, data: EMR.Types.ListInstanceGroupsOutput) => void): Request<EMR.Types.ListInstanceGroupsOutput, AWSError>;
  /**
   * Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.
   */
  listInstances(params: EMR.Types.ListInstancesInput, callback?: (err: AWSError, data: EMR.Types.ListInstancesOutput) => void): Request<EMR.Types.ListInstancesOutput, AWSError>;
  /**
   * Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.
   */
  listInstances(callback?: (err: AWSError, data: EMR.Types.ListInstancesOutput) => void): Request<EMR.Types.ListInstancesOutput, AWSError>;
  /**
   * Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.
   */
  listSecurityConfigurations(params: EMR.Types.ListSecurityConfigurationsInput, callback?: (err: AWSError, data: EMR.Types.ListSecurityConfigurationsOutput) => void): Request<EMR.Types.ListSecurityConfigurationsOutput, AWSError>;
  /**
   * Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.
   */
  listSecurityConfigurations(callback?: (err: AWSError, data: EMR.Types.ListSecurityConfigurationsOutput) => void): Request<EMR.Types.ListSecurityConfigurationsOutput, AWSError>;
  /**
   * Provides a list of steps for the cluster in reverse order unless you specify stepIds with the request.
   */
  listSteps(params: EMR.Types.ListStepsInput, callback?: (err: AWSError, data: EMR.Types.ListStepsOutput) => void): Request<EMR.Types.ListStepsOutput, AWSError>;
  /**
   * Provides a list of steps for the cluster in reverse order unless you specify stepIds with the request.
   */
  listSteps(callback?: (err: AWSError, data: EMR.Types.ListStepsOutput) => void): Request<EMR.Types.ListStepsOutput, AWSError>;
  /**
   * Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.  The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. 
   */
  modifyInstanceFleet(params: EMR.Types.ModifyInstanceFleetInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.  The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. 
   */
  modifyInstanceFleet(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.
   */
  modifyInstanceGroups(params: EMR.Types.ModifyInstanceGroupsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.
   */
  modifyInstanceGroups(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.
   */
  putAutoScalingPolicy(params: EMR.Types.PutAutoScalingPolicyInput, callback?: (err: AWSError, data: EMR.Types.PutAutoScalingPolicyOutput) => void): Request<EMR.Types.PutAutoScalingPolicyOutput, AWSError>;
  /**
   * Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.
   */
  putAutoScalingPolicy(callback?: (err: AWSError, data: EMR.Types.PutAutoScalingPolicyOutput) => void): Request<EMR.Types.PutAutoScalingPolicyOutput, AWSError>;
  /**
   * Removes an automatic scaling policy from a specified instance group within an EMR cluster.
   */
  removeAutoScalingPolicy(params: EMR.Types.RemoveAutoScalingPolicyInput, callback?: (err: AWSError, data: EMR.Types.RemoveAutoScalingPolicyOutput) => void): Request<EMR.Types.RemoveAutoScalingPolicyOutput, AWSError>;
  /**
   * Removes an automatic scaling policy from a specified instance group within an EMR cluster.
   */
  removeAutoScalingPolicy(callback?: (err: AWSError, data: EMR.Types.RemoveAutoScalingPolicyOutput) => void): Request<EMR.Types.RemoveAutoScalingPolicyOutput, AWSError>;
  /**
   * Removes tags from an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see Tagging Amazon EMR Resources.  The following example removes the stack tag with value Prod from a cluster:
   */
  removeTags(params: EMR.Types.RemoveTagsInput, callback?: (err: AWSError, data: EMR.Types.RemoveTagsOutput) => void): Request<EMR.Types.RemoveTagsOutput, AWSError>;
  /**
   * Removes tags from an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see Tagging Amazon EMR Resources.  The following example removes the stack tag with value Prod from a cluster:
   */
  removeTags(callback?: (err: AWSError, data: EMR.Types.RemoveTagsOutput) => void): Request<EMR.Types.RemoveTagsOutput, AWSError>;
  /**
   * RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps specified. After the steps complete, the cluster stops and the HDFS partition is lost. To prevent loss of data, configure the last step of the job flow to store results in Amazon S3. If the JobFlowInstancesConfig KeepJobFlowAliveWhenNoSteps parameter is set to TRUE, the cluster transitions to the WAITING state rather than shutting down after the steps have completed.  For additional protection, you can set the JobFlowInstancesConfig TerminationProtected parameter to TRUE to lock the cluster and prevent it from being terminated by API call, user intervention, or in the event of a job flow error. A maximum of 256 steps are allowed in each job flow. If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. For more information on how to do this, see Add More than 256 Steps to a Cluster in the Amazon EMR Management Guide. For long running clusters, we recommend that you periodically store your results.  The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both. 
   */
  runJobFlow(params: EMR.Types.RunJobFlowInput, callback?: (err: AWSError, data: EMR.Types.RunJobFlowOutput) => void): Request<EMR.Types.RunJobFlowOutput, AWSError>;
  /**
   * RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps specified. After the steps complete, the cluster stops and the HDFS partition is lost. To prevent loss of data, configure the last step of the job flow to store results in Amazon S3. If the JobFlowInstancesConfig KeepJobFlowAliveWhenNoSteps parameter is set to TRUE, the cluster transitions to the WAITING state rather than shutting down after the steps have completed.  For additional protection, you can set the JobFlowInstancesConfig TerminationProtected parameter to TRUE to lock the cluster and prevent it from being terminated by API call, user intervention, or in the event of a job flow error. A maximum of 256 steps are allowed in each job flow. If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. For more information on how to do this, see Add More than 256 Steps to a Cluster in the Amazon EMR Management Guide. For long running clusters, we recommend that you periodically store your results.  The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both. 
   */
  runJobFlow(callback?: (err: AWSError, data: EMR.Types.RunJobFlowOutput) => void): Request<EMR.Types.RunJobFlowOutput, AWSError>;
  /**
   * SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling SetTerminationProtection on a cluster is similar to calling the Amazon EC2 DisableAPITermination API on all EC2 instances in a cluster.  SetTerminationProtection is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.  To terminate a cluster that has been locked by setting SetTerminationProtection to true, you must first unlock the job flow by a subsequent call to SetTerminationProtection in which you set the value to false.   For more information, seeManaging Cluster Termination in the Amazon EMR Management Guide. 
   */
  setTerminationProtection(params: EMR.Types.SetTerminationProtectionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling SetTerminationProtection on a cluster is similar to calling the Amazon EC2 DisableAPITermination API on all EC2 instances in a cluster.  SetTerminationProtection is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.  To terminate a cluster that has been locked by setting SetTerminationProtection to true, you must first unlock the job flow by a subsequent call to SetTerminationProtection in which you set the value to false.   For more information, seeManaging Cluster Termination in the Amazon EMR Management Guide. 
   */
  setTerminationProtection(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets whether all AWS Identity and Access Management (IAM) users under your account can access the specified clusters (job flows). This action works on running clusters. You can also set the visibility of a cluster when you launch it using the VisibleToAllUsers parameter of RunJobFlow. The SetVisibleToAllUsers action can be called only by an IAM user who created the cluster or the AWS account that owns the cluster.
   */
  setVisibleToAllUsers(params: EMR.Types.SetVisibleToAllUsersInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets whether all AWS Identity and Access Management (IAM) users under your account can access the specified clusters (job flows). This action works on running clusters. You can also set the visibility of a cluster when you launch it using the VisibleToAllUsers parameter of RunJobFlow. The SetVisibleToAllUsers action can be called only by an IAM user who created the cluster or the AWS account that owns the cluster.
   */
  setVisibleToAllUsers(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created. The maximum number of clusters allowed is 10. The call to TerminateJobFlows is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.
   */
  terminateJobFlows(params: EMR.Types.TerminateJobFlowsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created. The maximum number of clusters allowed is 10. The call to TerminateJobFlows is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.
   */
  terminateJobFlows(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Waits for the clusterRunning state by periodically calling the underlying EMR.describeClusteroperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "clusterRunning", params: EMR.Types.DescribeClusterInput, callback?: (err: AWSError, data: EMR.Types.DescribeClusterOutput) => void): Request<EMR.Types.DescribeClusterOutput, AWSError>;
  /**
   * Waits for the clusterRunning state by periodically calling the underlying EMR.describeClusteroperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "clusterRunning", callback?: (err: AWSError, data: EMR.Types.DescribeClusterOutput) => void): Request<EMR.Types.DescribeClusterOutput, AWSError>;
  /**
   * Waits for the stepComplete state by periodically calling the underlying EMR.describeStepoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "stepComplete", params: EMR.Types.DescribeStepInput, callback?: (err: AWSError, data: EMR.Types.DescribeStepOutput) => void): Request<EMR.Types.DescribeStepOutput, AWSError>;
  /**
   * Waits for the stepComplete state by periodically calling the underlying EMR.describeStepoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "stepComplete", callback?: (err: AWSError, data: EMR.Types.DescribeStepOutput) => void): Request<EMR.Types.DescribeStepOutput, AWSError>;
  /**
   * Waits for the clusterTerminated state by periodically calling the underlying EMR.describeClusteroperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "clusterTerminated", params: EMR.Types.DescribeClusterInput, callback?: (err: AWSError, data: EMR.Types.DescribeClusterOutput) => void): Request<EMR.Types.DescribeClusterOutput, AWSError>;
  /**
   * Waits for the clusterTerminated state by periodically calling the underlying EMR.describeClusteroperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "clusterTerminated", callback?: (err: AWSError, data: EMR.Types.DescribeClusterOutput) => void): Request<EMR.Types.DescribeClusterOutput, AWSError>;
}
declare namespace EMR {
  export type ActionOnFailure = "TERMINATE_JOB_FLOW"|"TERMINATE_CLUSTER"|"CANCEL_AND_WAIT"|"CONTINUE"|string;
  export interface AddInstanceFleetInput {
    /**
     * The unique identifier of the cluster.
     */
    ClusterId: XmlStringMaxLen256;
    /**
     * Specifies the configuration of the instance fleet.
     */
    InstanceFleet: InstanceFleetConfig;
  }
  export interface AddInstanceFleetOutput {
    /**
     * The unique identifier of the cluster.
     */
    ClusterId?: XmlStringMaxLen256;
    /**
     * The unique identifier of the instance fleet.
     */
    InstanceFleetId?: InstanceFleetId;
  }
  export interface AddInstanceGroupsInput {
    /**
     * Instance groups to add.
     */
    InstanceGroups: InstanceGroupConfigList;
    /**
     * Job flow in which to add the instance groups.
     */
    JobFlowId: XmlStringMaxLen256;
  }
  export interface AddInstanceGroupsOutput {
    /**
     * The job flow ID in which the instance groups are added.
     */
    JobFlowId?: XmlStringMaxLen256;
    /**
     * Instance group IDs of the newly created instance groups.
     */
    InstanceGroupIds?: InstanceGroupIdsList;
  }
  export interface AddJobFlowStepsInput {
    /**
     * A string that uniquely identifies the job flow. This identifier is returned by RunJobFlow and can also be obtained from ListClusters. 
     */
    JobFlowId: XmlStringMaxLen256;
    /**
     *  A list of StepConfig to be executed by the job flow. 
     */
    Steps: StepConfigList;
  }
  export interface AddJobFlowStepsOutput {
    /**
     * The identifiers of the list of steps added to the job flow.
     */
    StepIds?: StepIdsList;
  }
  export interface AddTagsInput {
    /**
     * The Amazon EMR resource identifier to which tags will be added. This value must be a cluster identifier.
     */
    ResourceId: ResourceId;
    /**
     * A list of tags to associate with a cluster and propagate to EC2 instances. Tags are user-defined key/value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.
     */
    Tags: TagList;
  }
  export interface AddTagsOutput {
  }
  export type AdjustmentType = "CHANGE_IN_CAPACITY"|"PERCENT_CHANGE_IN_CAPACITY"|"EXACT_CAPACITY"|string;
  export interface Application {
    /**
     * The name of the application.
     */
    Name?: String;
    /**
     * The version of the application.
     */
    Version?: String;
    /**
     * Arguments for Amazon EMR to pass to the application.
     */
    Args?: StringList;
    /**
     * This option is for advanced users only. This is meta information about third-party applications that third-party vendors use for testing purposes.
     */
    AdditionalInfo?: StringMap;
  }
  export type ApplicationList = Application[];
  export interface AutoScalingPolicy {
    /**
     * The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activity will not cause an instance group to grow above or below these limits.
     */
    Constraints: ScalingConstraints;
    /**
     * The scale-in and scale-out rules that comprise the automatic scaling policy.
     */
    Rules: ScalingRuleList;
  }
  export interface AutoScalingPolicyDescription {
    /**
     * The status of an automatic scaling policy. 
     */
    Status?: AutoScalingPolicyStatus;
    /**
     * The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activity will not cause an instance group to grow above or below these limits.
     */
    Constraints?: ScalingConstraints;
    /**
     * The scale-in and scale-out rules that comprise the automatic scaling policy.
     */
    Rules?: ScalingRuleList;
  }
  export type AutoScalingPolicyState = "PENDING"|"ATTACHING"|"ATTACHED"|"DETACHING"|"DETACHED"|"FAILED"|string;
  export interface AutoScalingPolicyStateChangeReason {
    /**
     * The code indicating the reason for the change in status.USER_REQUEST indicates that the scaling policy status was changed by a user. PROVISION_FAILURE indicates that the status change was because the policy failed to provision. CLEANUP_FAILURE indicates an error.
     */
    Code?: AutoScalingPolicyStateChangeReasonCode;
    /**
     * A friendly, more verbose message that accompanies an automatic scaling policy state change.
     */
    Message?: String;
  }
  export type AutoScalingPolicyStateChangeReasonCode = "USER_REQUEST"|"PROVISION_FAILURE"|"CLEANUP_FAILURE"|string;
  export interface AutoScalingPolicyStatus {
    /**
     * Indicates the status of the automatic scaling policy.
     */
    State?: AutoScalingPolicyState;
    /**
     * The reason for a change in status.
     */
    StateChangeReason?: AutoScalingPolicyStateChangeReason;
  }
  export type Boolean = boolean;
  export type BooleanObject = boolean;
  export interface BootstrapActionConfig {
    /**
     * The name of the bootstrap action.
     */
    Name: XmlStringMaxLen256;
    /**
     * The script run by the bootstrap action.
     */
    ScriptBootstrapAction: ScriptBootstrapActionConfig;
  }
  export type BootstrapActionConfigList = BootstrapActionConfig[];
  export interface BootstrapActionDetail {
    /**
     * A description of the bootstrap action.
     */
    BootstrapActionConfig?: BootstrapActionConfig;
  }
  export type BootstrapActionDetailList = BootstrapActionDetail[];
  export interface CancelStepsInfo {
    /**
     * The encrypted StepId of a step.
     */
    StepId?: StepId;
    /**
     * The status of a CancelSteps Request. The value may be SUBMITTED or FAILED.
     */
    Status?: CancelStepsRequestStatus;
    /**
     * The reason for the failure if the CancelSteps request fails.
     */
    Reason?: String;
  }
  export type CancelStepsInfoList = CancelStepsInfo[];
  export interface CancelStepsInput {
    /**
     * The ClusterID for which specified steps will be canceled. Use RunJobFlow and ListClusters to get ClusterIDs. 
     */
    ClusterId?: XmlStringMaxLen256;
    /**
     * The list of StepIDs to cancel. Use ListSteps to get steps and their states for the specified cluster.
     */
    StepIds?: StepIdsList;
  }
  export interface CancelStepsOutput {
    /**
     * A list of CancelStepsInfo, which shows the status of specified cancel requests for each StepID specified.
     */
    CancelStepsInfoList?: CancelStepsInfoList;
  }
  export type CancelStepsRequestStatus = "SUBMITTED"|"FAILED"|string;
  export interface CloudWatchAlarmDefinition {
    /**
     * Determines how the metric specified by MetricName is compared to the value specified by Threshold.
     */
    ComparisonOperator: ComparisonOperator;
    /**
     * The number of periods, expressed in seconds using Period, during which the alarm condition must exist before the alarm triggers automatic scaling activity. The default value is 1.
     */
    EvaluationPeriods?: Integer;
    /**
     * The name of the CloudWatch metric that is watched to determine an alarm condition.
     */
    MetricName: String;
    /**
     * The namespace for the CloudWatch metric. The default is AWS/ElasticMapReduce.
     */
    Namespace?: String;
    /**
     * The period, in seconds, over which the statistic is applied. EMR CloudWatch metrics are emitted every five minutes (300 seconds), so if an EMR CloudWatch metric is specified, specify 300.
     */
    Period: Integer;
    /**
     * The statistic to apply to the metric associated with the alarm. The default is AVERAGE.
     */
    Statistic?: Statistic;
    /**
     * The value against which the specified statistic is compared.
     */
    Threshold: NonNegativeDouble;
    /**
     * The unit of measure associated with the CloudWatch metric being watched. The value specified for Unit must correspond to the units specified in the CloudWatch metric.
     */
    Unit?: Unit;
    /**
     * A CloudWatch metric dimension.
     */
    Dimensions?: MetricDimensionList;
  }
  export interface Cluster {
    /**
     * The unique identifier for the cluster.
     */
    Id?: ClusterId;
    /**
     * The name of the cluster.
     */
    Name?: String;
    /**
     * The current status details about the cluster.
     */
    Status?: ClusterStatus;
    /**
     * Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.
     */
    Ec2InstanceAttributes?: Ec2InstanceAttributes;
    /**
     *  The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.  The instance group configuration of the cluster. A value of INSTANCE_GROUP indicates a uniform instance group configuration. A value of INSTANCE_FLEET indicates an instance fleets configuration.
     */
    InstanceCollectionType?: InstanceCollectionType;
    /**
     * The path to the Amazon S3 location where logs for this cluster are stored.
     */
    LogUri?: String;
    /**
     * The AMI version requested for this cluster.
     */
    RequestedAmiVersion?: String;
    /**
     * The AMI version running on this cluster.
     */
    RunningAmiVersion?: String;
    /**
     * The release label for the Amazon EMR release.
     */
    ReleaseLabel?: String;
    /**
     * Specifies whether the cluster should terminate after completing all steps.
     */
    AutoTerminate?: Boolean;
    /**
     * Indicates whether Amazon EMR will lock the cluster to prevent the EC2 instances from being terminated by an API call or user intervention, or in the event of a cluster error.
     */
    TerminationProtected?: Boolean;
    /**
     * Indicates whether the cluster is visible to all IAM users of the AWS account associated with the cluster. If this value is set to true, all IAM users of that AWS account can view and manage the cluster if they have the proper policy permissions set. If this value is false, only the IAM user that created the cluster can view and manage it. This value can be changed using the SetVisibleToAllUsers action.
     */
    VisibleToAllUsers?: Boolean;
    /**
     * The applications installed on this cluster.
     */
    Applications?: ApplicationList;
    /**
     * A list of tags associated with a cluster.
     */
    Tags?: TagList;
    /**
     * The IAM role that will be assumed by the Amazon EMR service to access AWS resources on your behalf.
     */
    ServiceRole?: String;
    /**
     * An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour an m1.small instance runs. Larger instances are weighted more, so an EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.
     */
    NormalizedInstanceHours?: Integer;
    /**
     * The public DNS name of the master EC2 instance.
     */
    MasterPublicDnsName?: String;
    /**
     * Applies only to Amazon EMR releases 4.x and later. The list of Configurations supplied to the EMR cluster.
     */
    Configurations?: ConfigurationList;
    /**
     * The name of the security configuration applied to the cluster.
     */
    SecurityConfiguration?: XmlString;
    /**
     * An IAM role for automatic scaling policies. The default role is EMR_AutoScaling_DefaultRole. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
     */
    AutoScalingRole?: XmlString;
    /**
     * The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. TERMINATE_AT_INSTANCE_HOUR indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. TERMINATE_AT_TASK_COMPLETION indicates that Amazon EMR blacklists and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. TERMINATE_AT_TASK_COMPLETION is available only in Amazon EMR version 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.
     */
    ScaleDownBehavior?: ScaleDownBehavior;
    /**
     * Available only in Amazon EMR version 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI if the cluster uses a custom AMI.
     */
    CustomAmiId?: XmlStringMaxLen256;
    /**
     * The size, in GiB, of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
     */
    EbsRootVolumeSize?: Integer;
    /**
     * Applies only when CustomAmiID is used. Specifies the type of updates that are applied from the Amazon Linux AMI package repositories when an instance boots using the AMI.
     */
    RepoUpgradeOnBoot?: RepoUpgradeOnBoot;
  }
  export type ClusterId = string;
  export type ClusterState = "STARTING"|"BOOTSTRAPPING"|"RUNNING"|"WAITING"|"TERMINATING"|"TERMINATED"|"TERMINATED_WITH_ERRORS"|string;
  export interface ClusterStateChangeReason {
    /**
     * The programmatic code for the state change reason.
     */
    Code?: ClusterStateChangeReasonCode;
    /**
     * The descriptive message for the state change reason.
     */
    Message?: String;
  }
  export type ClusterStateChangeReasonCode = "INTERNAL_ERROR"|"VALIDATION_ERROR"|"INSTANCE_FAILURE"|"INSTANCE_FLEET_TIMEOUT"|"BOOTSTRAP_FAILURE"|"USER_REQUEST"|"STEP_FAILURE"|"ALL_STEPS_COMPLETED"|string;
  export type ClusterStateList = ClusterState[];
  export interface ClusterStatus {
    /**
     * The current state of the cluster.
     */
    State?: ClusterState;
    /**
     * The reason for the cluster status change.
     */
    StateChangeReason?: ClusterStateChangeReason;
    /**
     * A timeline that represents the status of a cluster over the lifetime of the cluster.
     */
    Timeline?: ClusterTimeline;
  }
  export interface ClusterSummary {
    /**
     * The unique identifier for the cluster.
     */
    Id?: ClusterId;
    /**
     * The name of the cluster.
     */
    Name?: String;
    /**
     * The details about the current status of the cluster.
     */
    Status?: ClusterStatus;
    /**
     * An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour an m1.small instance runs. Larger instances are weighted more, so an EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.
     */
    NormalizedInstanceHours?: Integer;
  }
  export type ClusterSummaryList = ClusterSummary[];
  export interface ClusterTimeline {
    /**
     * The creation date and time of the cluster.
     */
    CreationDateTime?: _Date;
    /**
     * The date and time when the cluster was ready to execute steps.
     */
    ReadyDateTime?: _Date;
    /**
     * The date and time when the cluster was terminated.
     */
    EndDateTime?: _Date;
  }
  export interface Command {
    /**
     * The name of the command.
     */
    Name?: String;
    /**
     * The Amazon S3 location of the command script.
     */
    ScriptPath?: String;
    /**
     * Arguments for Amazon EMR to pass to the command for execution.
     */
    Args?: StringList;
  }
  export type CommandList = Command[];
  export type ComparisonOperator = "GREATER_THAN_OR_EQUAL"|"GREATER_THAN"|"LESS_THAN"|"LESS_THAN_OR_EQUAL"|string;
  export interface Configuration {
    /**
     * The classification within a configuration.
     */
    Classification?: String;
    /**
     * A list of additional configurations to apply within a configuration object.
     */
    Configurations?: ConfigurationList;
    /**
     * A set of properties specified within a configuration classification.
     */
    Properties?: StringMap;
  }
  export type ConfigurationList = Configuration[];
  export interface CreateSecurityConfigurationInput {
    /**
     * The name of the security configuration.
     */
    Name: XmlString;
    /**
     * The security configuration details in JSON format.
     */
    SecurityConfiguration: String;
  }
  export interface CreateSecurityConfigurationOutput {
    /**
     * The name of the security configuration.
     */
    Name: XmlString;
    /**
     * The date and time the security configuration was created.
     */
    CreationDateTime: _Date;
  }
  export type _Date = Date;
  export interface DeleteSecurityConfigurationInput {
    /**
     * The name of the security configuration.
     */
    Name: XmlString;
  }
  export interface DeleteSecurityConfigurationOutput {
  }
  export interface DescribeClusterInput {
    /**
     * The identifier of the cluster to describe.
     */
    ClusterId: ClusterId;
  }
  export interface DescribeClusterOutput {
    /**
     * This output contains the details for the requested cluster.
     */
    Cluster?: Cluster;
  }
  export interface DescribeJobFlowsInput {
    /**
     * Return only job flows created after this date and time.
     */
    CreatedAfter?: _Date;
    /**
     * Return only job flows created before this date and time.
     */
    CreatedBefore?: _Date;
    /**
     * Return only job flows whose job flow ID is contained in this list.
     */
    JobFlowIds?: XmlStringList;
    /**
     * Return only job flows whose state is contained in this list.
     */
    JobFlowStates?: JobFlowExecutionStateList;
  }
  export interface DescribeJobFlowsOutput {
    /**
     * A list of job flows matching the parameters supplied.
     */
    JobFlows?: JobFlowDetailList;
  }
  export interface DescribeSecurityConfigurationInput {
    /**
     * The name of the security configuration.
     */
    Name: XmlString;
  }
  export interface DescribeSecurityConfigurationOutput {
    /**
     * The name of the security configuration.
     */
    Name?: XmlString;
    /**
     * The security configuration details in JSON format.
     */
    SecurityConfiguration?: String;
    /**
     * The date and time the security configuration was created
     */
    CreationDateTime?: _Date;
  }
  export interface DescribeStepInput {
    /**
     * The identifier of the cluster with steps to describe.
     */
    ClusterId: ClusterId;
    /**
     * The identifier of the step to describe.
     */
    StepId: StepId;
  }
  export interface DescribeStepOutput {
    /**
     * The step details for the requested step identifier.
     */
    Step?: Step;
  }
  export type EC2InstanceIdsList = InstanceId[];
  export type EC2InstanceIdsToTerminateList = InstanceId[];
  export interface EbsBlockDevice {
    /**
     * EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.
     */
    VolumeSpecification?: VolumeSpecification;
    /**
     * The device name that is exposed to the instance, such as /dev/sdh.
     */
    Device?: String;
  }
  export interface EbsBlockDeviceConfig {
    /**
     * EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.
     */
    VolumeSpecification: VolumeSpecification;
    /**
     * Number of EBS volumes with a specific volume configuration that will be associated with every instance in the instance group
     */
    VolumesPerInstance?: Integer;
  }
  export type EbsBlockDeviceConfigList = EbsBlockDeviceConfig[];
  export type EbsBlockDeviceList = EbsBlockDevice[];
  export interface EbsConfiguration {
    /**
     * An array of Amazon EBS volume specifications attached to a cluster instance.
     */
    EbsBlockDeviceConfigs?: EbsBlockDeviceConfigList;
    /**
     * Indicates whether an Amazon EBS volume is EBS-optimized.
     */
    EbsOptimized?: BooleanObject;
  }
  export interface EbsVolume {
    /**
     * The device name that is exposed to the instance, such as /dev/sdh.
     */
    Device?: String;
    /**
     * The volume identifier of the EBS volume.
     */
    VolumeId?: String;
  }
  export type EbsVolumeList = EbsVolume[];
  export interface Ec2InstanceAttributes {
    /**
     * The name of the Amazon EC2 key pair to use when connecting with SSH into the master node as a user named "hadoop".
     */
    Ec2KeyName?: String;
    /**
     * To launch the cluster in Amazon VPC, set this parameter to the identifier of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this value, the cluster is launched in the normal AWS cloud, outside of a VPC. Amazon VPC currently does not support cluster compute quadruple extra large (cc1.4xlarge) instances. Thus, you cannot specify the cc1.4xlarge instance type for nodes of a cluster launched in a VPC.
     */
    Ec2SubnetId?: String;
    /**
     * Applies to clusters configured with the instance fleets option. Specifies the unique identifier of one or more Amazon EC2 subnets in which to launch EC2 cluster instances. Subnets must exist within the same VPC. Amazon EMR chooses the EC2 subnet with the best fit from among the list of RequestedEc2SubnetIds, and then launches all cluster instances within that Subnet. If this value is not specified, and the account and region support EC2-Classic networks, the cluster launches instances in the EC2-Classic network and uses RequestedEc2AvailabilityZones instead of this setting. If EC2-Classic is not supported, and no Subnet is specified, Amazon EMR chooses the subnet for you. RequestedEc2SubnetIDs and RequestedEc2AvailabilityZones cannot be specified together.
     */
    RequestedEc2SubnetIds?: XmlStringMaxLen256List;
    /**
     * The Availability Zone in which the cluster will run. 
     */
    Ec2AvailabilityZone?: String;
    /**
     * Applies to clusters configured with the instance fleets option. Specifies one or more Availability Zones in which to launch EC2 cluster instances when the EC2-Classic network configuration is supported. Amazon EMR chooses the Availability Zone with the best fit from among the list of RequestedEc2AvailabilityZones, and then launches all cluster instances within that Availability Zone. If you do not specify this value, Amazon EMR chooses the Availability Zone for you. RequestedEc2SubnetIDs and RequestedEc2AvailabilityZones cannot be specified together.
     */
    RequestedEc2AvailabilityZones?: XmlStringMaxLen256List;
    /**
     * The IAM role that was specified when the cluster was launched. The EC2 instances of the cluster assume this role.
     */
    IamInstanceProfile?: String;
    /**
     * The identifier of the Amazon EC2 security group for the master node.
     */
    EmrManagedMasterSecurityGroup?: String;
    /**
     * The identifier of the Amazon EC2 security group for the slave nodes.
     */
    EmrManagedSlaveSecurityGroup?: String;
    /**
     * The identifier of the Amazon EC2 security group for the Amazon EMR service to access clusters in VPC private subnets.
     */
    ServiceAccessSecurityGroup?: String;
    /**
     * A list of additional Amazon EC2 security group IDs for the master node.
     */
    AdditionalMasterSecurityGroups?: StringList;
    /**
     * A list of additional Amazon EC2 security group IDs for the slave nodes.
     */
    AdditionalSlaveSecurityGroups?: StringList;
  }
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export interface FailureDetails {
    /**
     * The reason for the step failure. In the case where the service cannot successfully determine the root cause of the failure, it returns "Unknown Error" as a reason.
     */
    Reason?: String;
    /**
     * The descriptive message including the error the EMR service has identified as the cause of step failure. This is text from an error log that describes the root cause of the failure.
     */
    Message?: String;
    /**
     * The path to the log file where the step failure root cause was originally recorded.
     */
    LogFile?: String;
  }
  export interface HadoopJarStepConfig {
    /**
     * A list of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function.
     */
    Properties?: KeyValueList;
    /**
     * A path to a JAR file run during the step.
     */
    Jar: XmlString;
    /**
     * The name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file.
     */
    MainClass?: XmlString;
    /**
     * A list of command line arguments passed to the JAR file's main function when executed.
     */
    Args?: XmlStringList;
  }
  export interface HadoopStepConfig {
    /**
     * The path to the JAR file that runs during the step.
     */
    Jar?: String;
    /**
     * The list of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function.
     */
    Properties?: StringMap;
    /**
     * The name of the main class in the specified Java file. If not specified, the JAR file should specify a main class in its manifest file.
     */
    MainClass?: String;
    /**
     * The list of command line arguments to pass to the JAR file's main function for execution.
     */
    Args?: StringList;
  }
  export interface Instance {
    /**
     * The unique identifier for the instance in Amazon EMR.
     */
    Id?: InstanceId;
    /**
     * The unique identifier of the instance in Amazon EC2.
     */
    Ec2InstanceId?: InstanceId;
    /**
     * The public DNS name of the instance.
     */
    PublicDnsName?: String;
    /**
     * The public IP address of the instance.
     */
    PublicIpAddress?: String;
    /**
     * The private DNS name of the instance.
     */
    PrivateDnsName?: String;
    /**
     * The private IP address of the instance.
     */
    PrivateIpAddress?: String;
    /**
     * The current status of the instance.
     */
    Status?: InstanceStatus;
    /**
     * The identifier of the instance group to which this instance belongs.
     */
    InstanceGroupId?: String;
    /**
     * The unique identifier of the instance fleet to which an EC2 instance belongs.
     */
    InstanceFleetId?: InstanceFleetId;
    /**
     * The instance purchasing option. Valid values are ON_DEMAND or SPOT. 
     */
    Market?: MarketType;
    /**
     * The EC2 instance type, for example m3.xlarge.
     */
    InstanceType?: InstanceType;
    /**
     * The list of EBS volumes that are attached to this instance.
     */
    EbsVolumes?: EbsVolumeList;
  }
  export type InstanceCollectionType = "INSTANCE_FLEET"|"INSTANCE_GROUP"|string;
  export interface InstanceFleet {
    /**
     * The unique identifier of the instance fleet.
     */
    Id?: InstanceFleetId;
    /**
     * A friendly name for the instance fleet.
     */
    Name?: XmlStringMaxLen256;
    /**
     * The current status of the instance fleet. 
     */
    Status?: InstanceFleetStatus;
    /**
     * The node type that the instance fleet hosts. Valid values are MASTER, CORE, or TASK. 
     */
    InstanceFleetType?: InstanceFleetType;
    /**
     * The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision. When the instance fleet launches, Amazon EMR tries to provision On-Demand instances as specified by InstanceTypeConfig. Each instance configuration has a specified WeightedCapacity. When an On-Demand instance is provisioned, the WeightedCapacity units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a WeightedCapacity of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units. You can use InstanceFleet$ProvisionedOnDemandCapacity to determine the Spot capacity units that have been provisioned for the instance fleet.  If not specified or set to 0, only Spot instances are provisioned for the instance fleet using TargetSpotCapacity. At least one of TargetSpotCapacity and TargetOnDemandCapacity should be greater than 0. For a master instance fleet, only one of TargetSpotCapacity and TargetOnDemandCapacity can be specified, and its value must be 1. 
     */
    TargetOnDemandCapacity?: WholeNumber;
    /**
     * The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision. When the instance fleet launches, Amazon EMR tries to provision Spot instances as specified by InstanceTypeConfig. Each instance configuration has a specified WeightedCapacity. When a Spot instance is provisioned, the WeightedCapacity units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a WeightedCapacity of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units. You can use InstanceFleet$ProvisionedSpotCapacity to determine the Spot capacity units that have been provisioned for the instance fleet.  If not specified or set to 0, only On-Demand instances are provisioned for the instance fleet. At least one of TargetSpotCapacity and TargetOnDemandCapacity should be greater than 0. For a master instance fleet, only one of TargetSpotCapacity and TargetOnDemandCapacity can be specified, and its value must be 1. 
     */
    TargetSpotCapacity?: WholeNumber;
    /**
     * The number of On-Demand units that have been provisioned for the instance fleet to fulfill TargetOnDemandCapacity. This provisioned capacity might be less than or greater than TargetOnDemandCapacity.
     */
    ProvisionedOnDemandCapacity?: WholeNumber;
    /**
     * The number of Spot units that have been provisioned for this instance fleet to fulfill TargetSpotCapacity. This provisioned capacity might be less than or greater than TargetSpotCapacity.
     */
    ProvisionedSpotCapacity?: WholeNumber;
    /**
     * The specification for the instance types that comprise an instance fleet. Up to five unique instance specifications may be defined for each instance fleet. 
     */
    InstanceTypeSpecifications?: InstanceTypeSpecificationList;
    /**
     * Describes the launch specification for an instance fleet. 
     */
    LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
  }
  export interface InstanceFleetConfig {
    /**
     * The friendly name of the instance fleet.
     */
    Name?: XmlStringMaxLen256;
    /**
     * The node type that the instance fleet hosts. Valid values are MASTER,CORE,and TASK.
     */
    InstanceFleetType: InstanceFleetType;
    /**
     * The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision. When the instance fleet launches, Amazon EMR tries to provision On-Demand instances as specified by InstanceTypeConfig. Each instance configuration has a specified WeightedCapacity. When an On-Demand instance is provisioned, the WeightedCapacity units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a WeightedCapacity of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.  If not specified or set to 0, only Spot instances are provisioned for the instance fleet using TargetSpotCapacity. At least one of TargetSpotCapacity and TargetOnDemandCapacity should be greater than 0. For a master instance fleet, only one of TargetSpotCapacity and TargetOnDemandCapacity can be specified, and its value must be 1. 
     */
    TargetOnDemandCapacity?: WholeNumber;
    /**
     * The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision. When the instance fleet launches, Amazon EMR tries to provision Spot instances as specified by InstanceTypeConfig. Each instance configuration has a specified WeightedCapacity. When a Spot instance is provisioned, the WeightedCapacity units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a WeightedCapacity of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.  If not specified or set to 0, only On-Demand instances are provisioned for the instance fleet. At least one of TargetSpotCapacity and TargetOnDemandCapacity should be greater than 0. For a master instance fleet, only one of TargetSpotCapacity and TargetOnDemandCapacity can be specified, and its value must be 1. 
     */
    TargetSpotCapacity?: WholeNumber;
    /**
     * The instance type configurations that define the EC2 instances in the instance fleet.
     */
    InstanceTypeConfigs?: InstanceTypeConfigList;
    /**
     * The launch specification for the instance fleet.
     */
    LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
  }
  export type InstanceFleetConfigList = InstanceFleetConfig[];
  export type InstanceFleetId = string;
  export type InstanceFleetList = InstanceFleet[];
  export interface InstanceFleetModifyConfig {
    /**
     * A unique identifier for the instance fleet.
     */
    InstanceFleetId: InstanceFleetId;
    /**
     * The target capacity of On-Demand units for the instance fleet. For more information see InstanceFleetConfig$TargetOnDemandCapacity.
     */
    TargetOnDemandCapacity?: WholeNumber;
    /**
     * The target capacity of Spot units for the instance fleet. For more information, see InstanceFleetConfig$TargetSpotCapacity.
     */
    TargetSpotCapacity?: WholeNumber;
  }
  export interface InstanceFleetProvisioningSpecifications {
    /**
     * The launch specification for Spot instances in the fleet, which determines the defined duration and provisioning timeout behavior.
     */
    SpotSpecification: SpotProvisioningSpecification;
  }
  export type InstanceFleetState = "PROVISIONING"|"BOOTSTRAPPING"|"RUNNING"|"RESIZING"|"SUSPENDED"|"TERMINATING"|"TERMINATED"|string;
  export interface InstanceFleetStateChangeReason {
    /**
     * A code corresponding to the reason the state change occurred.
     */
    Code?: InstanceFleetStateChangeReasonCode;
    /**
     * An explanatory message.
     */
    Message?: String;
  }
  export type InstanceFleetStateChangeReasonCode = "INTERNAL_ERROR"|"VALIDATION_ERROR"|"INSTANCE_FAILURE"|"CLUSTER_TERMINATED"|string;
  export interface InstanceFleetStatus {
    /**
     * A code representing the instance fleet status.
     */
    State?: InstanceFleetState;
    /**
     * Provides status change reason details for the instance fleet.
     */
    StateChangeReason?: InstanceFleetStateChangeReason;
    /**
     * Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.
     */
    Timeline?: InstanceFleetTimeline;
  }
  export interface InstanceFleetTimeline {
    /**
     * The time and date the instance fleet was created.
     */
    CreationDateTime?: _Date;
    /**
     * The time and date the instance fleet was ready to run jobs.
     */
    ReadyDateTime?: _Date;
    /**
     * The time and date the instance fleet terminated.
     */
    EndDateTime?: _Date;
  }
  export type InstanceFleetType = "MASTER"|"CORE"|"TASK"|string;
  export interface InstanceGroup {
    /**
     * The identifier of the instance group.
     */
    Id?: InstanceGroupId;
    /**
     * The name of the instance group.
     */
    Name?: String;
    /**
     * The marketplace to provision instances for this group. Valid values are ON_DEMAND or SPOT.
     */
    Market?: MarketType;
    /**
     * The type of the instance group. Valid values are MASTER, CORE or TASK.
     */
    InstanceGroupType?: InstanceGroupType;
    /**
     * The bid price for each EC2 instance in the instance group when launching nodes as Spot Instances, expressed in USD.
     */
    BidPrice?: String;
    /**
     * The EC2 instance type for all instances in the instance group.
     */
    InstanceType?: InstanceType;
    /**
     * The target number of instances for the instance group.
     */
    RequestedInstanceCount?: Integer;
    /**
     * The number of instances currently running in this instance group.
     */
    RunningInstanceCount?: Integer;
    /**
     * The current status of the instance group.
     */
    Status?: InstanceGroupStatus;
    /**
     *  Amazon EMR releases 4.x or later.  The list of configurations supplied for an EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).
     */
    Configurations?: ConfigurationList;
    /**
     * The EBS block devices that are mapped to this instance group.
     */
    EbsBlockDevices?: EbsBlockDeviceList;
    /**
     * If the instance group is EBS-optimized. An Amazon EBS-optimized instance uses an optimized configuration stack and provides additional, dedicated capacity for Amazon EBS I/O.
     */
    EbsOptimized?: BooleanObject;
    /**
     * Policy for customizing shrink operations.
     */
    ShrinkPolicy?: ShrinkPolicy;
    /**
     * An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See PutAutoScalingPolicy.
     */
    AutoScalingPolicy?: AutoScalingPolicyDescription;
  }
  export interface InstanceGroupConfig {
    /**
     * Friendly name given to the instance group.
     */
    Name?: XmlStringMaxLen256;
    /**
     * Market type of the EC2 instances used to create a cluster node.
     */
    Market?: MarketType;
    /**
     * The role of the instance group in the cluster.
     */
    InstanceRole: InstanceRoleType;
    /**
     * Bid price for each EC2 instance in the instance group when launching nodes as Spot Instances, expressed in USD.
     */
    BidPrice?: XmlStringMaxLen256;
    /**
     * The EC2 instance type for all instances in the instance group.
     */
    InstanceType: InstanceType;
    /**
     * Target number of instances for the instance group.
     */
    InstanceCount: Integer;
    /**
     *  Amazon EMR releases 4.x or later.  The list of configurations supplied for an EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).
     */
    Configurations?: ConfigurationList;
    /**
     * EBS configurations that will be attached to each EC2 instance in the instance group.
     */
    EbsConfiguration?: EbsConfiguration;
    /**
     * An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See PutAutoScalingPolicy.
     */
    AutoScalingPolicy?: AutoScalingPolicy;
  }
  export type InstanceGroupConfigList = InstanceGroupConfig[];
  export interface InstanceGroupDetail {
    /**
     * Unique identifier for the instance group.
     */
    InstanceGroupId?: XmlStringMaxLen256;
    /**
     * Friendly name for the instance group.
     */
    Name?: XmlStringMaxLen256;
    /**
     * Market type of the EC2 instances used to create a cluster node.
     */
    Market: MarketType;
    /**
     * Instance group role in the cluster
     */
    InstanceRole: InstanceRoleType;
    /**
     * Bid price for EC2 Instances when launching nodes as Spot Instances, expressed in USD.
     */
    BidPrice?: XmlStringMaxLen256;
    /**
     * EC2 instance type.
     */
    InstanceType: InstanceType;
    /**
     * Target number of instances to run in the instance group.
     */
    InstanceRequestCount: Integer;
    /**
     * Actual count of running instances.
     */
    InstanceRunningCount: Integer;
    /**
     * State of instance group. The following values are deprecated: STARTING, TERMINATED, and FAILED.
     */
    State: InstanceGroupState;
    /**
     * Details regarding the state of the instance group.
     */
    LastStateChangeReason?: XmlString;
    /**
     * The date/time the instance group was created.
     */
    CreationDateTime: _Date;
    /**
     * The date/time the instance group was started.
     */
    StartDateTime?: _Date;
    /**
     * The date/time the instance group was available to the cluster.
     */
    ReadyDateTime?: _Date;
    /**
     * The date/time the instance group was terminated.
     */
    EndDateTime?: _Date;
  }
  export type InstanceGroupDetailList = InstanceGroupDetail[];
  export type InstanceGroupId = string;
  export type InstanceGroupIdsList = XmlStringMaxLen256[];
  export type InstanceGroupList = InstanceGroup[];
  export interface InstanceGroupModifyConfig {
    /**
     * Unique ID of the instance group to expand or shrink.
     */
    InstanceGroupId: XmlStringMaxLen256;
    /**
     * Target size for the instance group.
     */
    InstanceCount?: Integer;
    /**
     * The EC2 InstanceIds to terminate. After you terminate the instances, the instance group will not return to its original requested size.
     */
    EC2InstanceIdsToTerminate?: EC2InstanceIdsToTerminateList;
    /**
     * Policy for customizing shrink operations.
     */
    ShrinkPolicy?: ShrinkPolicy;
  }
  export type InstanceGroupModifyConfigList = InstanceGroupModifyConfig[];
  export type InstanceGroupState = "PROVISIONING"|"BOOTSTRAPPING"|"RUNNING"|"RESIZING"|"SUSPENDED"|"TERMINATING"|"TERMINATED"|"ARRESTED"|"SHUTTING_DOWN"|"ENDED"|string;
  export interface InstanceGroupStateChangeReason {
    /**
     * The programmable code for the state change reason.
     */
    Code?: InstanceGroupStateChangeReasonCode;
    /**
     * The status change reason description.
     */
    Message?: String;
  }
  export type InstanceGroupStateChangeReasonCode = "INTERNAL_ERROR"|"VALIDATION_ERROR"|"INSTANCE_FAILURE"|"CLUSTER_TERMINATED"|string;
  export interface InstanceGroupStatus {
    /**
     * The current state of the instance group.
     */
    State?: InstanceGroupState;
    /**
     * The status change reason details for the instance group.
     */
    StateChangeReason?: InstanceGroupStateChangeReason;
    /**
     * The timeline of the instance group status over time.
     */
    Timeline?: InstanceGroupTimeline;
  }
  export interface InstanceGroupTimeline {
    /**
     * The creation date and time of the instance group.
     */
    CreationDateTime?: _Date;
    /**
     * The date and time when the instance group became ready to perform tasks.
     */
    ReadyDateTime?: _Date;
    /**
     * The date and time when the instance group terminated.
     */
    EndDateTime?: _Date;
  }
  export type InstanceGroupType = "MASTER"|"CORE"|"TASK"|string;
  export type InstanceGroupTypeList = InstanceGroupType[];
  export type InstanceId = string;
  export type InstanceList = Instance[];
  export interface InstanceResizePolicy {
    /**
     * Specific list of instances to be terminated when shrinking an instance group.
     */
    InstancesToTerminate?: EC2InstanceIdsList;
    /**
     * Specific list of instances to be protected when shrinking an instance group.
     */
    InstancesToProtect?: EC2InstanceIdsList;
    /**
     * Decommissioning timeout override for the specific list of instances to be terminated.
     */
    InstanceTerminationTimeout?: Integer;
  }
  export type InstanceRoleType = "MASTER"|"CORE"|"TASK"|string;
  export type InstanceState = "AWAITING_FULFILLMENT"|"PROVISIONING"|"BOOTSTRAPPING"|"RUNNING"|"TERMINATED"|string;
  export interface InstanceStateChangeReason {
    /**
     * The programmable code for the state change reason.
     */
    Code?: InstanceStateChangeReasonCode;
    /**
     * The status change reason description.
     */
    Message?: String;
  }
  export type InstanceStateChangeReasonCode = "INTERNAL_ERROR"|"VALIDATION_ERROR"|"INSTANCE_FAILURE"|"BOOTSTRAP_FAILURE"|"CLUSTER_TERMINATED"|string;
  export type InstanceStateList = InstanceState[];
  export interface InstanceStatus {
    /**
     * The current state of the instance.
     */
    State?: InstanceState;
    /**
     * The details of the status change reason for the instance.
     */
    StateChangeReason?: InstanceStateChangeReason;
    /**
     * The timeline of the instance status over time.
     */
    Timeline?: InstanceTimeline;
  }
  export interface InstanceTimeline {
    /**
     * The creation date and time of the instance.
     */
    CreationDateTime?: _Date;
    /**
     * The date and time when the instance was ready to perform tasks.
     */
    ReadyDateTime?: _Date;
    /**
     * The date and time when the instance was terminated.
     */
    EndDateTime?: _Date;
  }
  export type InstanceType = string;
  export interface InstanceTypeConfig {
    /**
     * An EC2 instance type, such as m3.xlarge. 
     */
    InstanceType: InstanceType;
    /**
     * The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in InstanceFleetConfig. This value is 1 for a master instance fleet, and must be 1 or greater for core and task instance fleets. Defaults to 1 if not specified. 
     */
    WeightedCapacity?: WholeNumber;
    /**
     * The bid price for each EC2 Spot instance type as defined by InstanceType. Expressed in USD. If neither BidPrice nor BidPriceAsPercentageOfOnDemandPrice is provided, BidPriceAsPercentageOfOnDemandPrice defaults to 100%. 
     */
    BidPrice?: XmlStringMaxLen256;
    /**
     * The bid price, as a percentage of On-Demand price, for each EC2 Spot instance as defined by InstanceType. Expressed as a number (for example, 20 specifies 20%). If neither BidPrice nor BidPriceAsPercentageOfOnDemandPrice is provided, BidPriceAsPercentageOfOnDemandPrice defaults to 100%.
     */
    BidPriceAsPercentageOfOnDemandPrice?: NonNegativeDouble;
    /**
     * The configuration of Amazon Elastic Block Storage (EBS) attached to each instance as defined by InstanceType. 
     */
    EbsConfiguration?: EbsConfiguration;
    /**
     * A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster.
     */
    Configurations?: ConfigurationList;
  }
  export type InstanceTypeConfigList = InstanceTypeConfig[];
  export interface InstanceTypeSpecification {
    /**
     * The EC2 instance type, for example m3.xlarge.
     */
    InstanceType?: InstanceType;
    /**
     * The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in InstanceFleetConfig. Capacity values represent performance characteristics such as vCPUs, memory, or I/O. If not specified, the default value is 1.
     */
    WeightedCapacity?: WholeNumber;
    /**
     * The bid price for each EC2 Spot instance type as defined by InstanceType. Expressed in USD.
     */
    BidPrice?: XmlStringMaxLen256;
    /**
     * The bid price, as a percentage of On-Demand price, for each EC2 Spot instance as defined by InstanceType. Expressed as a number (for example, 20 specifies 20%).
     */
    BidPriceAsPercentageOfOnDemandPrice?: NonNegativeDouble;
    /**
     * A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR.
     */
    Configurations?: ConfigurationList;
    /**
     * The configuration of Amazon Elastic Block Storage (EBS) attached to each instance as defined by InstanceType.
     */
    EbsBlockDevices?: EbsBlockDeviceList;
    /**
     * Evaluates to TRUE when the specified InstanceType is EBS-optimized.
     */
    EbsOptimized?: BooleanObject;
  }
  export type InstanceTypeSpecificationList = InstanceTypeSpecification[];
  export type Integer = number;
  export interface JobFlowDetail {
    /**
     * The job flow identifier.
     */
    JobFlowId: XmlStringMaxLen256;
    /**
     * The name of the job flow.
     */
    Name: XmlStringMaxLen256;
    /**
     * The location in Amazon S3 where log files for the job are stored.
     */
    LogUri?: XmlString;
    /**
     * Used only for version 2.x and 3.x of Amazon EMR. The version of the AMI used to initialize Amazon EC2 instances in the job flow. For a list of AMI versions supported by Amazon EMR, see AMI Versions Supported in EMR in the Amazon EMR Developer Guide. 
     */
    AmiVersion?: XmlStringMaxLen256;
    /**
     * Describes the execution status of the job flow.
     */
    ExecutionStatusDetail: JobFlowExecutionStatusDetail;
    /**
     * Describes the Amazon EC2 instances of the job flow.
     */
    Instances: JobFlowInstancesDetail;
    /**
     * A list of steps run by the job flow.
     */
    Steps?: StepDetailList;
    /**
     * A list of the bootstrap actions run by the job flow.
     */
    BootstrapActions?: BootstrapActionDetailList;
    /**
     * A list of strings set by third party software when the job flow is launched. If you are not using third party software to manage the job flow this value is empty.
     */
    SupportedProducts?: SupportedProductsList;
    /**
     * Specifies whether the cluster is visible to all IAM users of the AWS account associated with the cluster. If this value is set to true, all IAM users of that AWS account can view and (if they have the proper policy permissions set) manage the cluster. If it is set to false, only the IAM user that created the cluster can view and manage it. This value can be changed using the SetVisibleToAllUsers action.
     */
    VisibleToAllUsers?: Boolean;
    /**
     * The IAM role that was specified when the job flow was launched. The EC2 instances of the job flow assume this role.
     */
    JobFlowRole?: XmlString;
    /**
     * The IAM role that will be assumed by the Amazon EMR service to access AWS resources on your behalf.
     */
    ServiceRole?: XmlString;
    /**
     * An IAM role for automatic scaling policies. The default role is EMR_AutoScaling_DefaultRole. The IAM role provides a way for the automatic scaling feature to get the required permissions it needs to launch and terminate EC2 instances in an instance group.
     */
    AutoScalingRole?: XmlString;
    /**
     * The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. TERMINATE_AT_INSTANCE_HOUR indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. TERMINATE_AT_TASK_COMPLETION indicates that Amazon EMR blacklists and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. TERMINATE_AT_TASK_COMPLETION available only in Amazon EMR version 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.
     */
    ScaleDownBehavior?: ScaleDownBehavior;
  }
  export type JobFlowDetailList = JobFlowDetail[];
  export type JobFlowExecutionState = "STARTING"|"BOOTSTRAPPING"|"RUNNING"|"WAITING"|"SHUTTING_DOWN"|"TERMINATED"|"COMPLETED"|"FAILED"|string;
  export type JobFlowExecutionStateList = JobFlowExecutionState[];
  export interface JobFlowExecutionStatusDetail {
    /**
     * The state of the job flow.
     */
    State: JobFlowExecutionState;
    /**
     * The creation date and time of the job flow.
     */
    CreationDateTime: _Date;
    /**
     * The start date and time of the job flow.
     */
    StartDateTime?: _Date;
    /**
     * The date and time when the job flow was ready to start running bootstrap actions.
     */
    ReadyDateTime?: _Date;
    /**
     * The completion date and time of the job flow.
     */
    EndDateTime?: _Date;
    /**
     * Description of the job flow last changed state.
     */
    LastStateChangeReason?: XmlString;
  }
  export interface JobFlowInstancesConfig {
    /**
     * The EC2 instance type of the master node.
     */
    MasterInstanceType?: InstanceType;
    /**
     * The EC2 instance type of the slave nodes.
     */
    SlaveInstanceType?: InstanceType;
    /**
     * The number of EC2 instances in the cluster.
     */
    InstanceCount?: Integer;
    /**
     * Configuration for the instance groups in a cluster.
     */
    InstanceGroups?: InstanceGroupConfigList;
    /**
     *  The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.  Describes the EC2 instances and instance configurations for clusters that use the instance fleet configuration.
     */
    InstanceFleets?: InstanceFleetConfigList;
    /**
     * The name of the EC2 key pair that can be used to ssh to the master node as the user called "hadoop."
     */
    Ec2KeyName?: XmlStringMaxLen256;
    /**
     * The Availability Zone in which the cluster runs.
     */
    Placement?: PlacementType;
    /**
     * Specifies whether the cluster should remain available after completing all steps.
     */
    KeepJobFlowAliveWhenNoSteps?: Boolean;
    /**
     * Specifies whether to lock the cluster to prevent the Amazon EC2 instances from being terminated by API call, user intervention, or in the event of a job-flow error.
     */
    TerminationProtected?: Boolean;
    /**
     * The Hadoop version for the cluster. Valid inputs are "0.18" (deprecated), "0.20" (deprecated), "0.20.205" (deprecated), "1.0.3", "2.2.0", or "2.4.0". If you do not set this value, the default of 0.18 is used, unless the AmiVersion parameter is set in the RunJobFlow call, in which case the default version of Hadoop for that AMI version is used.
     */
    HadoopVersion?: XmlStringMaxLen256;
    /**
     * Applies to clusters that use the uniform instance group configuration. To launch the cluster in Amazon Virtual Private Cloud (Amazon VPC), set this parameter to the identifier of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this value, the cluster launches in the normal Amazon Web Services cloud, outside of an Amazon VPC, if the account launching the cluster supports EC2 Classic networks in the region where the cluster launches. Amazon VPC currently does not support cluster compute quadruple extra large (cc1.4xlarge) instances. Thus you cannot specify the cc1.4xlarge instance type for clusters launched in an Amazon VPC.
     */
    Ec2SubnetId?: XmlStringMaxLen256;
    /**
     * Applies to clusters that use the instance fleet configuration. When multiple EC2 subnet IDs are specified, Amazon EMR evaluates them and launches instances in the optimal subnet.  The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. 
     */
    Ec2SubnetIds?: XmlStringMaxLen256List;
    /**
     * The identifier of the Amazon EC2 security group for the master node.
     */
    EmrManagedMasterSecurityGroup?: XmlStringMaxLen256;
    /**
     * The identifier of the Amazon EC2 security group for the slave nodes.
     */
    EmrManagedSlaveSecurityGroup?: XmlStringMaxLen256;
    /**
     * The identifier of the Amazon EC2 security group for the Amazon EMR service to access clusters in VPC private subnets.
     */
    ServiceAccessSecurityGroup?: XmlStringMaxLen256;
    /**
     * A list of additional Amazon EC2 security group IDs for the master node.
     */
    AdditionalMasterSecurityGroups?: SecurityGroupsList;
    /**
     * A list of additional Amazon EC2 security group IDs for the slave nodes.
     */
    AdditionalSlaveSecurityGroups?: SecurityGroupsList;
  }
  export interface JobFlowInstancesDetail {
    /**
     * The Amazon EC2 master node instance type.
     */
    MasterInstanceType: InstanceType;
    /**
     * The DNS name of the master node.
     */
    MasterPublicDnsName?: XmlString;
    /**
     * The Amazon EC2 instance identifier of the master node.
     */
    MasterInstanceId?: XmlString;
    /**
     * The Amazon EC2 slave node instance type.
     */
    SlaveInstanceType: InstanceType;
    /**
     * The number of Amazon EC2 instances in the cluster. If the value is 1, the same instance serves as both the master and slave node. If the value is greater than 1, one instance is the master node and all others are slave nodes.
     */
    InstanceCount: Integer;
    /**
     * Details about the instance groups in a cluster.
     */
    InstanceGroups?: InstanceGroupDetailList;
    /**
     * An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour that an m1.small runs. Larger instances are weighted more, so an Amazon EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.
     */
    NormalizedInstanceHours?: Integer;
    /**
     * The name of an Amazon EC2 key pair that can be used to ssh to the master node.
     */
    Ec2KeyName?: XmlStringMaxLen256;
    /**
     * For clusters launched within Amazon Virtual Private Cloud, this is the identifier of the subnet where the cluster was launched.
     */
    Ec2SubnetId?: XmlStringMaxLen256;
    /**
     * The Amazon EC2 Availability Zone for the cluster.
     */
    Placement?: PlacementType;
    /**
     * Specifies whether the cluster should remain available after completing all steps.
     */
    KeepJobFlowAliveWhenNoSteps?: Boolean;
    /**
     * Specifies whether the Amazon EC2 instances in the cluster are protected from termination by API calls, user intervention, or in the event of a job-flow error.
     */
    TerminationProtected?: Boolean;
    /**
     * The Hadoop version for the cluster.
     */
    HadoopVersion?: XmlStringMaxLen256;
  }
  export interface KeyValue {
    /**
     * The unique identifier of a key value pair.
     */
    Key?: XmlString;
    /**
     * The value part of the identified key.
     */
    Value?: XmlString;
  }
  export type KeyValueList = KeyValue[];
  export interface ListBootstrapActionsInput {
    /**
     * The cluster identifier for the bootstrap actions to list.
     */
    ClusterId: ClusterId;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    Marker?: Marker;
  }
  export interface ListBootstrapActionsOutput {
    /**
     * The bootstrap actions associated with the cluster.
     */
    BootstrapActions?: CommandList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    Marker?: Marker;
  }
  export interface ListClustersInput {
    /**
     * The creation date and time beginning value filter for listing clusters.
     */
    CreatedAfter?: _Date;
    /**
     * The creation date and time end value filter for listing clusters.
     */
    CreatedBefore?: _Date;
    /**
     * The cluster state filters to apply when listing clusters.
     */
    ClusterStates?: ClusterStateList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    Marker?: Marker;
  }
  export interface ListClustersOutput {
    /**
     * The list of clusters for the account based on the given filters.
     */
    Clusters?: ClusterSummaryList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    Marker?: Marker;
  }
  export interface ListInstanceFleetsInput {
    /**
     * The unique identifier of the cluster.
     */
    ClusterId: ClusterId;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    Marker?: Marker;
  }
  export interface ListInstanceFleetsOutput {
    /**
     * The list of instance fleets for the cluster and given filters.
     */
    InstanceFleets?: InstanceFleetList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    Marker?: Marker;
  }
  export interface ListInstanceGroupsInput {
    /**
     * The identifier of the cluster for which to list the instance groups.
     */
    ClusterId: ClusterId;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    Marker?: Marker;
  }
  export interface ListInstanceGroupsOutput {
    /**
     * The list of instance groups for the cluster and given filters.
     */
    InstanceGroups?: InstanceGroupList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    Marker?: Marker;
  }
  export interface ListInstancesInput {
    /**
     * The identifier of the cluster for which to list the instances.
     */
    ClusterId: ClusterId;
    /**
     * The identifier of the instance group for which to list the instances.
     */
    InstanceGroupId?: InstanceGroupId;
    /**
     * The type of instance group for which to list the instances.
     */
    InstanceGroupTypes?: InstanceGroupTypeList;
    /**
     * The unique identifier of the instance fleet.
     */
    InstanceFleetId?: InstanceFleetId;
    /**
     * The node type of the instance fleet. For example MASTER, CORE, or TASK.
     */
    InstanceFleetType?: InstanceFleetType;
    /**
     * A list of instance states that will filter the instances returned with this request.
     */
    InstanceStates?: InstanceStateList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    Marker?: Marker;
  }
  export interface ListInstancesOutput {
    /**
     * The list of instances for the cluster and given filters.
     */
    Instances?: InstanceList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    Marker?: Marker;
  }
  export interface ListSecurityConfigurationsInput {
    /**
     * The pagination token that indicates the set of results to retrieve.
     */
    Marker?: Marker;
  }
  export interface ListSecurityConfigurationsOutput {
    /**
     * The creation date and time, and name, of each security configuration.
     */
    SecurityConfigurations?: SecurityConfigurationList;
    /**
     * A pagination token that indicates the next set of results to retrieve. Include the marker in the next ListSecurityConfiguration call to retrieve the next page of results, if required.
     */
    Marker?: Marker;
  }
  export interface ListStepsInput {
    /**
     * The identifier of the cluster for which to list the steps.
     */
    ClusterId: ClusterId;
    /**
     * The filter to limit the step list based on certain states.
     */
    StepStates?: StepStateList;
    /**
     * The filter to limit the step list based on the identifier of the steps.
     */
    StepIds?: XmlStringList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    Marker?: Marker;
  }
  export interface ListStepsOutput {
    /**
     * The filtered list of steps for the cluster.
     */
    Steps?: StepSummaryList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    Marker?: Marker;
  }
  export type Marker = string;
  export type MarketType = "ON_DEMAND"|"SPOT"|string;
  export interface MetricDimension {
    /**
     * The dimension name.
     */
    Key?: String;
    /**
     * The dimension value.
     */
    Value?: String;
  }
  export type MetricDimensionList = MetricDimension[];
  export interface ModifyInstanceFleetInput {
    /**
     * The unique identifier of the cluster.
     */
    ClusterId: ClusterId;
    /**
     * The unique identifier of the instance fleet.
     */
    InstanceFleet: InstanceFleetModifyConfig;
  }
  export interface ModifyInstanceGroupsInput {
    /**
     * The ID of the cluster to which the instance group belongs.
     */
    ClusterId?: ClusterId;
    /**
     * Instance groups to change.
     */
    InstanceGroups?: InstanceGroupModifyConfigList;
  }
  export type NewSupportedProductsList = SupportedProductConfig[];
  export type NonNegativeDouble = number;
  export interface PlacementType {
    /**
     * The Amazon EC2 Availability Zone for the cluster. AvailabilityZone is used for uniform instance groups, while AvailabilityZones (plural) is used for instance fleets.
     */
    AvailabilityZone?: XmlString;
    /**
     * When multiple Availability Zones are specified, Amazon EMR evaluates them and launches instances in the optimal Availability Zone. AvailabilityZones is used for instance fleets, while AvailabilityZone (singular) is used for uniform instance groups.  The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. 
     */
    AvailabilityZones?: XmlStringMaxLen256List;
  }
  export interface PutAutoScalingPolicyInput {
    /**
     * Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.
     */
    ClusterId: ClusterId;
    /**
     * Specifies the ID of the instance group to which the automatic scaling policy is applied.
     */
    InstanceGroupId: InstanceGroupId;
    /**
     * Specifies the definition of the automatic scaling policy.
     */
    AutoScalingPolicy: AutoScalingPolicy;
  }
  export interface PutAutoScalingPolicyOutput {
    /**
     * Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.
     */
    ClusterId?: ClusterId;
    /**
     * Specifies the ID of the instance group to which the scaling policy is applied.
     */
    InstanceGroupId?: InstanceGroupId;
    /**
     * The automatic scaling policy definition.
     */
    AutoScalingPolicy?: AutoScalingPolicyDescription;
  }
  export interface RemoveAutoScalingPolicyInput {
    /**
     * Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.
     */
    ClusterId: ClusterId;
    /**
     * Specifies the ID of the instance group to which the scaling policy is applied.
     */
    InstanceGroupId: InstanceGroupId;
  }
  export interface RemoveAutoScalingPolicyOutput {
  }
  export interface RemoveTagsInput {
    /**
     * The Amazon EMR resource identifier from which tags will be removed. This value must be a cluster identifier.
     */
    ResourceId: ResourceId;
    /**
     * A list of tag keys to remove from a resource.
     */
    TagKeys: StringList;
  }
  export interface RemoveTagsOutput {
  }
  export type RepoUpgradeOnBoot = "SECURITY"|"NONE"|string;
  export type ResourceId = string;
  export interface RunJobFlowInput {
    /**
     * The name of the job flow.
     */
    Name: XmlStringMaxLen256;
    /**
     * The location in Amazon S3 to write the log files of the job flow. If a value is not provided, logs are not created.
     */
    LogUri?: XmlString;
    /**
     * A JSON string for selecting additional features.
     */
    AdditionalInfo?: XmlString;
    /**
     * For Amazon EMR AMI versions 3.x and 2.x. For Amazon EMR releases 4.0 and later, the Linux AMI is determined by the ReleaseLabel specified or by CustomAmiID. The version of the Amazon Machine Image (AMI) to use when launching Amazon EC2 instances in the job flow. For details about the AMI versions currently supported in EMR version 3.x and 2.x, see AMI Versions Supported in EMR in the Amazon EMR Developer Guide.  If the AMI supports multiple versions of Hadoop (for example, AMI 1.0 supports both Hadoop 0.18 and 0.20), you can use the JobFlowInstancesConfig HadoopVersion parameter to modify the version of Hadoop from the defaults shown above.  Previously, the EMR AMI version API parameter options allowed you to use latest for the latest AMI version rather than specify a numerical value. Some regions no longer support this deprecated option as they only have a newer release label version of EMR, which requires you to specify an EMR release label release (EMR 4.x or later). 
     */
    AmiVersion?: XmlStringMaxLen256;
    /**
     *  The release label for the Amazon EMR release. For Amazon EMR 3.x and 2.x AMIs, use AmiVersion instead.
     */
    ReleaseLabel?: XmlStringMaxLen256;
    /**
     * A specification of the number and type of Amazon EC2 instances.
     */
    Instances: JobFlowInstancesConfig;
    /**
     * A list of steps to run.
     */
    Steps?: StepConfigList;
    /**
     * A list of bootstrap actions to run before Hadoop starts on the cluster nodes.
     */
    BootstrapActions?: BootstrapActionConfigList;
    /**
     *  For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and later, use Applications.  A list of strings that indicates third-party software to use. For more information, see Use Third Party Applications with Amazon EMR. Currently supported values are:   "mapr-m3" - launch the job flow using MapR M3 Edition.   "mapr-m5" - launch the job flow using MapR M5 Edition.  
     */
    SupportedProducts?: SupportedProductsList;
    /**
     *  For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and later, use Applications.  A list of strings that indicates third-party software to use with the job flow that accepts a user argument list. EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action arguments. For more information, see "Launch a Job Flow on the MapR Distribution for Hadoop" in the Amazon EMR Developer Guide. Supported values are:   "mapr-m3" - launch the cluster using MapR M3 Edition.   "mapr-m5" - launch the cluster using MapR M5 Edition.   "mapr" with the user arguments specifying "--edition,m3" or "--edition,m5" - launch the job flow using MapR M3 or M5 Edition respectively.   "mapr-m7" - launch the cluster using MapR M7 Edition.   "hunk" - launch the cluster with the Hunk Big Data Analtics Platform.   "hue"- launch the cluster with Hue installed.   "spark" - launch the cluster with Apache Spark installed.   "ganglia" - launch the cluster with the Ganglia Monitoring System installed.  
     */
    NewSupportedProducts?: NewSupportedProductsList;
    /**
     * For Amazon EMR releases 4.0 and later. A list of applications for the cluster. Valid values are: "Hadoop", "Hive", "Mahout", "Pig", and "Spark." They are case insensitive.
     */
    Applications?: ApplicationList;
    /**
     * For Amazon EMR releases 4.0 and later. The list of configurations supplied for the EMR cluster you are creating.
     */
    Configurations?: ConfigurationList;
    /**
     * Whether the cluster is visible to all IAM users of the AWS account associated with the cluster. If this value is set to true, all IAM users of that AWS account can view and (if they have the proper policy permissions set) manage the cluster. If it is set to false, only the IAM user that created the cluster can view and manage it.
     */
    VisibleToAllUsers?: Boolean;
    /**
     * Also called instance profile and EC2 role. An IAM role for an EMR cluster. The EC2 instances of the cluster assume this role. The default role is EMR_EC2_DefaultRole. In order to use the default role, you must have already created it using the CLI or console.
     */
    JobFlowRole?: XmlString;
    /**
     * The IAM role that will be assumed by the Amazon EMR service to access AWS resources on your behalf.
     */
    ServiceRole?: XmlString;
    /**
     * A list of tags to associate with a cluster and propagate to Amazon EC2 instances.
     */
    Tags?: TagList;
    /**
     * The name of a security configuration to apply to the cluster.
     */
    SecurityConfiguration?: XmlString;
    /**
     * An IAM role for automatic scaling policies. The default role is EMR_AutoScaling_DefaultRole. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
     */
    AutoScalingRole?: XmlString;
    /**
     * Specifies the way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. TERMINATE_AT_INSTANCE_HOUR indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. TERMINATE_AT_TASK_COMPLETION indicates that Amazon EMR blacklists and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. TERMINATE_AT_TASK_COMPLETION available only in Amazon EMR version 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.
     */
    ScaleDownBehavior?: ScaleDownBehavior;
    /**
     * Available only in Amazon EMR version 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI. If specified, Amazon EMR uses this AMI when it launches cluster EC2 instances. For more information about custom AMIs in Amazon EMR, see Using a Custom AMI in the Amazon EMR Management Guide. If omitted, the cluster uses the base Linux AMI for the ReleaseLabel specified. For Amazon EMR versions 2.x and 3.x, use AmiVersion instead. For information about creating a custom AMI, see Creating an Amazon EBS-Backed Linux AMI in the Amazon Elastic Compute Cloud User Guide for Linux Instances. For information about finding an AMI ID, see Finding a Linux AMI. 
     */
    CustomAmiId?: XmlStringMaxLen256;
    /**
     * The size, in GiB, of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
     */
    EbsRootVolumeSize?: Integer;
    /**
     * Applies only when CustomAmiID is used. Specifies which updates from the Amazon Linux AMI package repositories to apply automatically when the instance boots using the AMI. If omitted, the default is SECURITY, which indicates that only security updates are applied. If NONE is specified, no updates are applied, and all updates must be applied manually.
     */
    RepoUpgradeOnBoot?: RepoUpgradeOnBoot;
  }
  export interface RunJobFlowOutput {
    /**
     * An unique identifier for the job flow.
     */
    JobFlowId?: XmlStringMaxLen256;
  }
  export type ScaleDownBehavior = "TERMINATE_AT_INSTANCE_HOUR"|"TERMINATE_AT_TASK_COMPLETION"|string;
  export interface ScalingAction {
    /**
     * Not available for instance groups. Instance groups use the market type specified for the group.
     */
    Market?: MarketType;
    /**
     * The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
     */
    SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
  }
  export interface ScalingConstraints {
    /**
     * The lower boundary of EC2 instances in an instance group below which scaling activities are not allowed to shrink. Scale-in activities will not terminate instances below this boundary.
     */
    MinCapacity: Integer;
    /**
     * The upper boundary of EC2 instances in an instance group beyond which scaling activities are not allowed to grow. Scale-out activities will not add instances beyond this boundary.
     */
    MaxCapacity: Integer;
  }
  export interface ScalingRule {
    /**
     * The name used to identify an automatic scaling rule. Rule names must be unique within a scaling policy.
     */
    Name: String;
    /**
     * A friendly, more verbose description of the automatic scaling rule.
     */
    Description?: String;
    /**
     * The conditions that trigger an automatic scaling activity.
     */
    Action: ScalingAction;
    /**
     * The CloudWatch alarm definition that determines when automatic scaling activity is triggered.
     */
    Trigger: ScalingTrigger;
  }
  export type ScalingRuleList = ScalingRule[];
  export interface ScalingTrigger {
    /**
     * The definition of a CloudWatch metric alarm. When the defined alarm conditions are met along with other trigger parameters, scaling activity begins.
     */
    CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
  }
  export interface ScriptBootstrapActionConfig {
    /**
     * Location of the script to run during a bootstrap action. Can be either a location in Amazon S3 or on a local file system.
     */
    Path: XmlString;
    /**
     * A list of command line arguments to pass to the bootstrap action script.
     */
    Args?: XmlStringList;
  }
  export type SecurityConfigurationList = SecurityConfigurationSummary[];
  export interface SecurityConfigurationSummary {
    /**
     * The name of the security configuration.
     */
    Name?: XmlString;
    /**
     * The date and time the security configuration was created.
     */
    CreationDateTime?: _Date;
  }
  export type SecurityGroupsList = XmlStringMaxLen256[];
  export interface SetTerminationProtectionInput {
    /**
     *  A list of strings that uniquely identify the clusters to protect. This identifier is returned by RunJobFlow and can also be obtained from DescribeJobFlows . 
     */
    JobFlowIds: XmlStringList;
    /**
     * A Boolean that indicates whether to protect the cluster and prevent the Amazon EC2 instances in the cluster from shutting down due to API calls, user intervention, or job-flow error.
     */
    TerminationProtected: Boolean;
  }
  export interface SetVisibleToAllUsersInput {
    /**
     * Identifiers of the job flows to receive the new visibility setting.
     */
    JobFlowIds: XmlStringList;
    /**
     * Whether the specified clusters are visible to all IAM users of the AWS account associated with the cluster. If this value is set to True, all IAM users of that AWS account can view and, if they have the proper IAM policy permissions set, manage the clusters. If it is set to False, only the IAM user that created a cluster can view and manage it.
     */
    VisibleToAllUsers: Boolean;
  }
  export interface ShrinkPolicy {
    /**
     * The desired timeout for decommissioning an instance. Overrides the default YARN decommissioning timeout.
     */
    DecommissionTimeout?: Integer;
    /**
     * Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.
     */
    InstanceResizePolicy?: InstanceResizePolicy;
  }
  export interface SimpleScalingPolicyConfiguration {
    /**
     * The way in which EC2 instances are added (if ScalingAdjustment is a positive number) or terminated (if ScalingAdjustment is a negative number) each time the scaling activity is triggered. CHANGE_IN_CAPACITY is the default. CHANGE_IN_CAPACITY indicates that the EC2 instance count increments or decrements by ScalingAdjustment, which should be expressed as an integer. PERCENT_CHANGE_IN_CAPACITY indicates the instance count increments or decrements by the percentage specified by ScalingAdjustment, which should be expressed as a decimal. For example, 0.20 indicates an increase in 20% increments of cluster capacity. EXACT_CAPACITY indicates the scaling activity results in an instance group with the number of EC2 instances specified by ScalingAdjustment, which should be expressed as a positive integer.
     */
    AdjustmentType?: AdjustmentType;
    /**
     * The amount by which to scale in or scale out, based on the specified AdjustmentType. A positive value adds to the instance group's EC2 instance count while a negative number removes instances. If AdjustmentType is set to EXACT_CAPACITY, the number should only be a positive integer. If AdjustmentType is set to PERCENT_CHANGE_IN_CAPACITY, the value should express the percentage as a decimal. For example, -0.20 indicates a decrease in 20% increments of cluster capacity.
     */
    ScalingAdjustment: Integer;
    /**
     * The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start. The default value is 0.
     */
    CoolDown?: Integer;
  }
  export interface SpotProvisioningSpecification {
    /**
     * The spot provisioning timeout period in minutes. If Spot instances are not provisioned within this time period, the TimeOutAction is taken. Minimum value is 5 and maximum value is 1440. The timeout applies only during initial provisioning, when the cluster is first created.
     */
    TimeoutDurationMinutes: WholeNumber;
    /**
     * The action to take when TargetSpotCapacity has not been fulfilled when the TimeoutDurationMinutes has expired. Spot instances are not uprovisioned within the Spot provisioining timeout. Valid values are TERMINATE_CLUSTER and SWITCH_TO_ON_DEMAND. SWITCH_TO_ON_DEMAND specifies that if no Spot instances are available, On-Demand Instances should be provisioned to fulfill any remaining Spot capacity.
     */
    TimeoutAction: SpotProvisioningTimeoutAction;
    /**
     * The defined duration for Spot instances (also known as Spot blocks) in minutes. When specified, the Spot instance does not terminate before the defined duration expires, and defined duration pricing for Spot instances applies. Valid values are 60, 120, 180, 240, 300, or 360. The duration period starts as soon as a Spot instance receives its instance ID. At the end of the duration, Amazon EC2 marks the Spot instance for termination and provides a Spot instance termination notice, which gives the instance a two-minute warning before it terminates. 
     */
    BlockDurationMinutes?: WholeNumber;
  }
  export type SpotProvisioningTimeoutAction = "SWITCH_TO_ON_DEMAND"|"TERMINATE_CLUSTER"|string;
  export type Statistic = "SAMPLE_COUNT"|"AVERAGE"|"SUM"|"MINIMUM"|"MAXIMUM"|string;
  export interface Step {
    /**
     * The identifier of the cluster step.
     */
    Id?: StepId;
    /**
     * The name of the cluster step.
     */
    Name?: String;
    /**
     * The Hadoop job configuration of the cluster step.
     */
    Config?: HadoopStepConfig;
    /**
     * This specifies what action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER, CANCEL_AND_WAIT, and CONTINUE.
     */
    ActionOnFailure?: ActionOnFailure;
    /**
     * The current execution status details of the cluster step.
     */
    Status?: StepStatus;
  }
  export interface StepConfig {
    /**
     * The name of the step.
     */
    Name: XmlStringMaxLen256;
    /**
     * The action to take if the step fails.
     */
    ActionOnFailure?: ActionOnFailure;
    /**
     * The JAR file used for the step.
     */
    HadoopJarStep: HadoopJarStepConfig;
  }
  export type StepConfigList = StepConfig[];
  export interface StepDetail {
    /**
     * The step configuration.
     */
    StepConfig: StepConfig;
    /**
     * The description of the step status.
     */
    ExecutionStatusDetail: StepExecutionStatusDetail;
  }
  export type StepDetailList = StepDetail[];
  export type StepExecutionState = "PENDING"|"RUNNING"|"CONTINUE"|"COMPLETED"|"CANCELLED"|"FAILED"|"INTERRUPTED"|string;
  export interface StepExecutionStatusDetail {
    /**
     * The state of the step.
     */
    State: StepExecutionState;
    /**
     * The creation date and time of the step.
     */
    CreationDateTime: _Date;
    /**
     * The start date and time of the step.
     */
    StartDateTime?: _Date;
    /**
     * The completion date and time of the step.
     */
    EndDateTime?: _Date;
    /**
     * A description of the step's current state.
     */
    LastStateChangeReason?: XmlString;
  }
  export type StepId = string;
  export type StepIdsList = XmlStringMaxLen256[];
  export type StepState = "PENDING"|"CANCEL_PENDING"|"RUNNING"|"COMPLETED"|"CANCELLED"|"FAILED"|"INTERRUPTED"|string;
  export interface StepStateChangeReason {
    /**
     * The programmable code for the state change reason. Note: Currently, the service provides no code for the state change.
     */
    Code?: StepStateChangeReasonCode;
    /**
     * The descriptive message for the state change reason.
     */
    Message?: String;
  }
  export type StepStateChangeReasonCode = "NONE"|string;
  export type StepStateList = StepState[];
  export interface StepStatus {
    /**
     * The execution state of the cluster step.
     */
    State?: StepState;
    /**
     * The reason for the step execution status change.
     */
    StateChangeReason?: StepStateChangeReason;
    /**
     * The details for the step failure including reason, message, and log file path where the root cause was identified.
     */
    FailureDetails?: FailureDetails;
    /**
     * The timeline of the cluster step status over time.
     */
    Timeline?: StepTimeline;
  }
  export interface StepSummary {
    /**
     * The identifier of the cluster step.
     */
    Id?: StepId;
    /**
     * The name of the cluster step.
     */
    Name?: String;
    /**
     * The Hadoop job configuration of the cluster step.
     */
    Config?: HadoopStepConfig;
    /**
     * This specifies what action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER, CANCEL_AND_WAIT, and CONTINUE.
     */
    ActionOnFailure?: ActionOnFailure;
    /**
     * The current execution status details of the cluster step.
     */
    Status?: StepStatus;
  }
  export type StepSummaryList = StepSummary[];
  export interface StepTimeline {
    /**
     * The date and time when the cluster step was created.
     */
    CreationDateTime?: _Date;
    /**
     * The date and time when the cluster step execution started.
     */
    StartDateTime?: _Date;
    /**
     * The date and time when the cluster step execution completed or failed.
     */
    EndDateTime?: _Date;
  }
  export type String = string;
  export type StringList = String[];
  export type StringMap = {[key: string]: String};
  export interface SupportedProductConfig {
    /**
     * The name of the product configuration.
     */
    Name?: XmlStringMaxLen256;
    /**
     * The list of user-supplied arguments.
     */
    Args?: XmlStringList;
  }
  export type SupportedProductsList = XmlStringMaxLen256[];
  export interface Tag {
    /**
     * A user-defined key, which is the minimum required information for a valid tag. For more information, see Tagging Amazon EMR Resources. 
     */
    Key?: String;
    /**
     * A user-defined value, which is optional in a tag. For more information, see Tagging Amazon EMR Resources. 
     */
    Value?: String;
  }
  export type TagList = Tag[];
  export interface TerminateJobFlowsInput {
    /**
     * A list of job flows to be shutdown.
     */
    JobFlowIds: XmlStringList;
  }
  export type Unit = "NONE"|"SECONDS"|"MICRO_SECONDS"|"MILLI_SECONDS"|"BYTES"|"KILO_BYTES"|"MEGA_BYTES"|"GIGA_BYTES"|"TERA_BYTES"|"BITS"|"KILO_BITS"|"MEGA_BITS"|"GIGA_BITS"|"TERA_BITS"|"PERCENT"|"COUNT"|"BYTES_PER_SECOND"|"KILO_BYTES_PER_SECOND"|"MEGA_BYTES_PER_SECOND"|"GIGA_BYTES_PER_SECOND"|"TERA_BYTES_PER_SECOND"|"BITS_PER_SECOND"|"KILO_BITS_PER_SECOND"|"MEGA_BITS_PER_SECOND"|"GIGA_BITS_PER_SECOND"|"TERA_BITS_PER_SECOND"|"COUNT_PER_SECOND"|string;
  export interface VolumeSpecification {
    /**
     * The volume type. Volume types supported are gp2, io1, standard.
     */
    VolumeType: String;
    /**
     * The number of I/O operations per second (IOPS) that the volume supports.
     */
    Iops?: Integer;
    /**
     * The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.
     */
    SizeInGB: Integer;
  }
  export type WholeNumber = number;
  export type XmlString = string;
  export type XmlStringList = XmlString[];
  export type XmlStringMaxLen256 = string;
  export type XmlStringMaxLen256List = XmlStringMaxLen256[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2009-03-31"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the EMR client.
   */
  export import Types = EMR;
}
export = EMR;
