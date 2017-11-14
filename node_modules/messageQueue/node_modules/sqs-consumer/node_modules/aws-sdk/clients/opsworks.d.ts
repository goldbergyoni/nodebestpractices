import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class OpsWorks extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: OpsWorks.Types.ClientConfiguration)
  config: Config & OpsWorks.Types.ClientConfiguration;
  /**
   * Assign a registered instance to a layer.   You can assign registered on-premises instances to any layer type.   You can assign registered Amazon EC2 instances only to custom layers.   You cannot use this action with instances that were created with AWS OpsWorks Stacks.    Required Permissions: To use this action, an AWS Identity and Access Management (IAM) user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  assignInstance(params: OpsWorks.Types.AssignInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assign a registered instance to a layer.   You can assign registered on-premises instances to any layer type.   You can assign registered Amazon EC2 instances only to custom layers.   You cannot use this action with instances that were created with AWS OpsWorks Stacks.    Required Permissions: To use this action, an AWS Identity and Access Management (IAM) user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  assignInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling RegisterVolume. After you register the volume, you must call UpdateVolume to specify a mount point before calling AssignVolume. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  assignVolume(params: OpsWorks.Types.AssignVolumeRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling RegisterVolume. After you register the volume, you must call UpdateVolume to specify a mount point before calling AssignVolume. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  assignVolume(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates one of the stack's registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling RegisterElasticIp. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  associateElasticIp(params: OpsWorks.Types.AssociateElasticIpRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates one of the stack's registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling RegisterElasticIp. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  associateElasticIp(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see Elastic Load Balancing.  You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see  Elastic Load Balancing Developer Guide.   Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  attachElasticLoadBalancer(params: OpsWorks.Types.AttachElasticLoadBalancerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see Elastic Load Balancing.  You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see  Elastic Load Balancing Developer Guide.   Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  attachElasticLoadBalancer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a clone of a specified stack. For more information, see Clone a Stack. By default, all parameters are set to the values used by the parent stack.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  cloneStack(params: OpsWorks.Types.CloneStackRequest, callback?: (err: AWSError, data: OpsWorks.Types.CloneStackResult) => void): Request<OpsWorks.Types.CloneStackResult, AWSError>;
  /**
   * Creates a clone of a specified stack. For more information, see Clone a Stack. By default, all parameters are set to the values used by the parent stack.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  cloneStack(callback?: (err: AWSError, data: OpsWorks.Types.CloneStackResult) => void): Request<OpsWorks.Types.CloneStackResult, AWSError>;
  /**
   * Creates an app for a specified stack. For more information, see Creating Apps.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  createApp(params: OpsWorks.Types.CreateAppRequest, callback?: (err: AWSError, data: OpsWorks.Types.CreateAppResult) => void): Request<OpsWorks.Types.CreateAppResult, AWSError>;
  /**
   * Creates an app for a specified stack. For more information, see Creating Apps.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  createApp(callback?: (err: AWSError, data: OpsWorks.Types.CreateAppResult) => void): Request<OpsWorks.Types.CreateAppResult, AWSError>;
  /**
   * Runs deployment or stack commands. For more information, see Deploying Apps and Run Stack Commands.  Required Permissions: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  createDeployment(params: OpsWorks.Types.CreateDeploymentRequest, callback?: (err: AWSError, data: OpsWorks.Types.CreateDeploymentResult) => void): Request<OpsWorks.Types.CreateDeploymentResult, AWSError>;
  /**
   * Runs deployment or stack commands. For more information, see Deploying Apps and Run Stack Commands.  Required Permissions: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  createDeployment(callback?: (err: AWSError, data: OpsWorks.Types.CreateDeploymentResult) => void): Request<OpsWorks.Types.CreateDeploymentResult, AWSError>;
  /**
   * Creates an instance in a specified stack. For more information, see Adding an Instance to a Layer.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  createInstance(params: OpsWorks.Types.CreateInstanceRequest, callback?: (err: AWSError, data: OpsWorks.Types.CreateInstanceResult) => void): Request<OpsWorks.Types.CreateInstanceResult, AWSError>;
  /**
   * Creates an instance in a specified stack. For more information, see Adding an Instance to a Layer.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  createInstance(callback?: (err: AWSError, data: OpsWorks.Types.CreateInstanceResult) => void): Request<OpsWorks.Types.CreateInstanceResult, AWSError>;
  /**
   * Creates a layer. For more information, see How to Create a Layer.  You should use CreateLayer for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, CreateLayer fails. A stack can have an arbitrary number of custom layers, so you can call CreateLayer as many times as you like for that layer type.   Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  createLayer(params: OpsWorks.Types.CreateLayerRequest, callback?: (err: AWSError, data: OpsWorks.Types.CreateLayerResult) => void): Request<OpsWorks.Types.CreateLayerResult, AWSError>;
  /**
   * Creates a layer. For more information, see How to Create a Layer.  You should use CreateLayer for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, CreateLayer fails. A stack can have an arbitrary number of custom layers, so you can call CreateLayer as many times as you like for that layer type.   Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  createLayer(callback?: (err: AWSError, data: OpsWorks.Types.CreateLayerResult) => void): Request<OpsWorks.Types.CreateLayerResult, AWSError>;
  /**
   * Creates a new stack. For more information, see Create a New Stack.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  createStack(params: OpsWorks.Types.CreateStackRequest, callback?: (err: AWSError, data: OpsWorks.Types.CreateStackResult) => void): Request<OpsWorks.Types.CreateStackResult, AWSError>;
  /**
   * Creates a new stack. For more information, see Create a New Stack.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  createStack(callback?: (err: AWSError, data: OpsWorks.Types.CreateStackResult) => void): Request<OpsWorks.Types.CreateStackResult, AWSError>;
  /**
   * Creates a new user profile.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  createUserProfile(params: OpsWorks.Types.CreateUserProfileRequest, callback?: (err: AWSError, data: OpsWorks.Types.CreateUserProfileResult) => void): Request<OpsWorks.Types.CreateUserProfileResult, AWSError>;
  /**
   * Creates a new user profile.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  createUserProfile(callback?: (err: AWSError, data: OpsWorks.Types.CreateUserProfileResult) => void): Request<OpsWorks.Types.CreateUserProfileResult, AWSError>;
  /**
   * Deletes a specified app.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deleteApp(params: OpsWorks.Types.DeleteAppRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specified app.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deleteApp(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it. For more information, see Deleting Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deleteInstance(params: OpsWorks.Types.DeleteInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it. For more information, see Deleting Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deleteInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see How to Delete a Layer.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deleteLayer(params: OpsWorks.Types.DeleteLayerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see How to Delete a Layer.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deleteLayer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see Shut Down a Stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deleteStack(params: OpsWorks.Types.DeleteStackRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see Shut Down a Stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deleteStack(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user profile.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deleteUserProfile(params: OpsWorks.Types.DeleteUserProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user profile.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deleteUserProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deregisters a specified Amazon ECS cluster from a stack. For more information, see  Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html.
   */
  deregisterEcsCluster(params: OpsWorks.Types.DeregisterEcsClusterRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deregisters a specified Amazon ECS cluster from a stack. For more information, see  Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html.
   */
  deregisterEcsCluster(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deregisterElasticIp(params: OpsWorks.Types.DeregisterElasticIpRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deregisterElasticIp(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action can not be used with instances that were created with AWS OpsWorks Stacks.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deregisterInstance(params: OpsWorks.Types.DeregisterInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action can not be used with instances that were created with AWS OpsWorks Stacks.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deregisterInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deregisters an Amazon RDS instance.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deregisterRdsDbInstance(params: OpsWorks.Types.DeregisterRdsDbInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deregisters an Amazon RDS instance.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deregisterRdsDbInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deregisterVolume(params: OpsWorks.Types.DeregisterVolumeRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  deregisterVolume(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. DescribeAgentVersions returns a list of available agent versions for the specified stack or configuration manager.
   */
  describeAgentVersions(params: OpsWorks.Types.DescribeAgentVersionsRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeAgentVersionsResult) => void): Request<OpsWorks.Types.DescribeAgentVersionsResult, AWSError>;
  /**
   * Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. DescribeAgentVersions returns a list of available agent versions for the specified stack or configuration manager.
   */
  describeAgentVersions(callback?: (err: AWSError, data: OpsWorks.Types.DescribeAgentVersionsResult) => void): Request<OpsWorks.Types.DescribeAgentVersionsResult, AWSError>;
  /**
   * Requests a description of a specified set of apps.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeApps(params: OpsWorks.Types.DescribeAppsRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeAppsResult) => void): Request<OpsWorks.Types.DescribeAppsResult, AWSError>;
  /**
   * Requests a description of a specified set of apps.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeApps(callback?: (err: AWSError, data: OpsWorks.Types.DescribeAppsResult) => void): Request<OpsWorks.Types.DescribeAppsResult, AWSError>;
  /**
   * Describes the results of specified commands.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeCommands(params: OpsWorks.Types.DescribeCommandsRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeCommandsResult) => void): Request<OpsWorks.Types.DescribeCommandsResult, AWSError>;
  /**
   * Describes the results of specified commands.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeCommands(callback?: (err: AWSError, data: OpsWorks.Types.DescribeCommandsResult) => void): Request<OpsWorks.Types.DescribeCommandsResult, AWSError>;
  /**
   * Requests a description of a specified set of deployments.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeDeployments(params: OpsWorks.Types.DescribeDeploymentsRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeDeploymentsResult) => void): Request<OpsWorks.Types.DescribeDeploymentsResult, AWSError>;
  /**
   * Requests a description of a specified set of deployments.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeDeployments(callback?: (err: AWSError, data: OpsWorks.Types.DescribeDeploymentsResult) => void): Request<OpsWorks.Types.DescribeDeploymentsResult, AWSError>;
  /**
   * Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the MaxResults and NextToken parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information on user permissions, see Managing User Permissions. This call accepts only one resource-identifying parameter.
   */
  describeEcsClusters(params: OpsWorks.Types.DescribeEcsClustersRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeEcsClustersResult) => void): Request<OpsWorks.Types.DescribeEcsClustersResult, AWSError>;
  /**
   * Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the MaxResults and NextToken parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information on user permissions, see Managing User Permissions. This call accepts only one resource-identifying parameter.
   */
  describeEcsClusters(callback?: (err: AWSError, data: OpsWorks.Types.DescribeEcsClustersResult) => void): Request<OpsWorks.Types.DescribeEcsClustersResult, AWSError>;
  /**
   * Describes Elastic IP addresses.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeElasticIps(params: OpsWorks.Types.DescribeElasticIpsRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeElasticIpsResult) => void): Request<OpsWorks.Types.DescribeElasticIpsResult, AWSError>;
  /**
   * Describes Elastic IP addresses.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeElasticIps(callback?: (err: AWSError, data: OpsWorks.Types.DescribeElasticIpsResult) => void): Request<OpsWorks.Types.DescribeElasticIpsResult, AWSError>;
  /**
   * Describes a stack's Elastic Load Balancing instances.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeElasticLoadBalancers(params: OpsWorks.Types.DescribeElasticLoadBalancersRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeElasticLoadBalancersResult) => void): Request<OpsWorks.Types.DescribeElasticLoadBalancersResult, AWSError>;
  /**
   * Describes a stack's Elastic Load Balancing instances.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeElasticLoadBalancers(callback?: (err: AWSError, data: OpsWorks.Types.DescribeElasticLoadBalancersResult) => void): Request<OpsWorks.Types.DescribeElasticLoadBalancersResult, AWSError>;
  /**
   * Requests a description of a set of instances.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeInstances(params: OpsWorks.Types.DescribeInstancesRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeInstancesResult) => void): Request<OpsWorks.Types.DescribeInstancesResult, AWSError>;
  /**
   * Requests a description of a set of instances.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeInstances(callback?: (err: AWSError, data: OpsWorks.Types.DescribeInstancesResult) => void): Request<OpsWorks.Types.DescribeInstancesResult, AWSError>;
  /**
   * Requests a description of one or more layers in a specified stack.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeLayers(params: OpsWorks.Types.DescribeLayersRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeLayersResult) => void): Request<OpsWorks.Types.DescribeLayersResult, AWSError>;
  /**
   * Requests a description of one or more layers in a specified stack.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeLayers(callback?: (err: AWSError, data: OpsWorks.Types.DescribeLayersResult) => void): Request<OpsWorks.Types.DescribeLayersResult, AWSError>;
  /**
   * Describes load-based auto scaling configurations for specified layers.  You must specify at least one of the parameters.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeLoadBasedAutoScaling(params: OpsWorks.Types.DescribeLoadBasedAutoScalingRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeLoadBasedAutoScalingResult) => void): Request<OpsWorks.Types.DescribeLoadBasedAutoScalingResult, AWSError>;
  /**
   * Describes load-based auto scaling configurations for specified layers.  You must specify at least one of the parameters.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeLoadBasedAutoScaling(callback?: (err: AWSError, data: OpsWorks.Types.DescribeLoadBasedAutoScalingResult) => void): Request<OpsWorks.Types.DescribeLoadBasedAutoScalingResult, AWSError>;
  /**
   * Describes a user's SSH information.  Required Permissions: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeMyUserProfile(callback?: (err: AWSError, data: OpsWorks.Types.DescribeMyUserProfileResult) => void): Request<OpsWorks.Types.DescribeMyUserProfileResult, AWSError>;
  /**
   * Describes the permissions for a specified stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describePermissions(params: OpsWorks.Types.DescribePermissionsRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribePermissionsResult) => void): Request<OpsWorks.Types.DescribePermissionsResult, AWSError>;
  /**
   * Describes the permissions for a specified stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describePermissions(callback?: (err: AWSError, data: OpsWorks.Types.DescribePermissionsResult) => void): Request<OpsWorks.Types.DescribePermissionsResult, AWSError>;
  /**
   * Describe an instance's RAID arrays.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeRaidArrays(params: OpsWorks.Types.DescribeRaidArraysRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeRaidArraysResult) => void): Request<OpsWorks.Types.DescribeRaidArraysResult, AWSError>;
  /**
   * Describe an instance's RAID arrays.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeRaidArrays(callback?: (err: AWSError, data: OpsWorks.Types.DescribeRaidArraysResult) => void): Request<OpsWorks.Types.DescribeRaidArraysResult, AWSError>;
  /**
   * Describes Amazon RDS instances.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions. This call accepts only one resource-identifying parameter.
   */
  describeRdsDbInstances(params: OpsWorks.Types.DescribeRdsDbInstancesRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeRdsDbInstancesResult) => void): Request<OpsWorks.Types.DescribeRdsDbInstancesResult, AWSError>;
  /**
   * Describes Amazon RDS instances.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions. This call accepts only one resource-identifying parameter.
   */
  describeRdsDbInstances(callback?: (err: AWSError, data: OpsWorks.Types.DescribeRdsDbInstancesResult) => void): Request<OpsWorks.Types.DescribeRdsDbInstancesResult, AWSError>;
  /**
   * Describes AWS OpsWorks Stacks service errors.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions. This call accepts only one resource-identifying parameter.
   */
  describeServiceErrors(params: OpsWorks.Types.DescribeServiceErrorsRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeServiceErrorsResult) => void): Request<OpsWorks.Types.DescribeServiceErrorsResult, AWSError>;
  /**
   * Describes AWS OpsWorks Stacks service errors.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions. This call accepts only one resource-identifying parameter.
   */
  describeServiceErrors(callback?: (err: AWSError, data: OpsWorks.Types.DescribeServiceErrorsResult) => void): Request<OpsWorks.Types.DescribeServiceErrorsResult, AWSError>;
  /**
   * Requests a description of a stack's provisioning parameters.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeStackProvisioningParameters(params: OpsWorks.Types.DescribeStackProvisioningParametersRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeStackProvisioningParametersResult) => void): Request<OpsWorks.Types.DescribeStackProvisioningParametersResult, AWSError>;
  /**
   * Requests a description of a stack's provisioning parameters.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeStackProvisioningParameters(callback?: (err: AWSError, data: OpsWorks.Types.DescribeStackProvisioningParametersResult) => void): Request<OpsWorks.Types.DescribeStackProvisioningParametersResult, AWSError>;
  /**
   * Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as running_setup or online.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeStackSummary(params: OpsWorks.Types.DescribeStackSummaryRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeStackSummaryResult) => void): Request<OpsWorks.Types.DescribeStackSummaryResult, AWSError>;
  /**
   * Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as running_setup or online.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeStackSummary(callback?: (err: AWSError, data: OpsWorks.Types.DescribeStackSummaryResult) => void): Request<OpsWorks.Types.DescribeStackSummaryResult, AWSError>;
  /**
   * Requests a description of one or more stacks.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeStacks(params: OpsWorks.Types.DescribeStacksRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeStacksResult) => void): Request<OpsWorks.Types.DescribeStacksResult, AWSError>;
  /**
   * Requests a description of one or more stacks.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeStacks(callback?: (err: AWSError, data: OpsWorks.Types.DescribeStacksResult) => void): Request<OpsWorks.Types.DescribeStacksResult, AWSError>;
  /**
   * Describes time-based auto scaling configurations for specified instances.  You must specify at least one of the parameters.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeTimeBasedAutoScaling(params: OpsWorks.Types.DescribeTimeBasedAutoScalingRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeTimeBasedAutoScalingResult) => void): Request<OpsWorks.Types.DescribeTimeBasedAutoScalingResult, AWSError>;
  /**
   * Describes time-based auto scaling configurations for specified instances.  You must specify at least one of the parameters.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeTimeBasedAutoScaling(callback?: (err: AWSError, data: OpsWorks.Types.DescribeTimeBasedAutoScalingResult) => void): Request<OpsWorks.Types.DescribeTimeBasedAutoScalingResult, AWSError>;
  /**
   * Describe specified users.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeUserProfiles(params: OpsWorks.Types.DescribeUserProfilesRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeUserProfilesResult) => void): Request<OpsWorks.Types.DescribeUserProfilesResult, AWSError>;
  /**
   * Describe specified users.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeUserProfiles(callback?: (err: AWSError, data: OpsWorks.Types.DescribeUserProfilesResult) => void): Request<OpsWorks.Types.DescribeUserProfilesResult, AWSError>;
  /**
   * Describes an instance's Amazon EBS volumes.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeVolumes(params: OpsWorks.Types.DescribeVolumesRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeVolumesResult) => void): Request<OpsWorks.Types.DescribeVolumesResult, AWSError>;
  /**
   * Describes an instance's Amazon EBS volumes.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  describeVolumes(callback?: (err: AWSError, data: OpsWorks.Types.DescribeVolumesResult) => void): Request<OpsWorks.Types.DescribeVolumesResult, AWSError>;
  /**
   * Detaches a specified Elastic Load Balancing instance from its layer.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  detachElasticLoadBalancer(params: OpsWorks.Types.DetachElasticLoadBalancerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Detaches a specified Elastic Load Balancing instance from its layer.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  detachElasticLoadBalancer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  disassociateElasticIp(params: OpsWorks.Types.DisassociateElasticIpRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  disassociateElasticIp(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets a generated host name for the specified layer, based on the current host name theme.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  getHostnameSuggestion(params: OpsWorks.Types.GetHostnameSuggestionRequest, callback?: (err: AWSError, data: OpsWorks.Types.GetHostnameSuggestionResult) => void): Request<OpsWorks.Types.GetHostnameSuggestionResult, AWSError>;
  /**
   * Gets a generated host name for the specified layer, based on the current host name theme.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  getHostnameSuggestion(callback?: (err: AWSError, data: OpsWorks.Types.GetHostnameSuggestionResult) => void): Request<OpsWorks.Types.GetHostnameSuggestionResult, AWSError>;
  /**
   *  This action can be used only with Windows stacks.  Grants RDP access to a Windows instance for a specified time period.
   */
  grantAccess(params: OpsWorks.Types.GrantAccessRequest, callback?: (err: AWSError, data: OpsWorks.Types.GrantAccessResult) => void): Request<OpsWorks.Types.GrantAccessResult, AWSError>;
  /**
   *  This action can be used only with Windows stacks.  Grants RDP access to a Windows instance for a specified time period.
   */
  grantAccess(callback?: (err: AWSError, data: OpsWorks.Types.GrantAccessResult) => void): Request<OpsWorks.Types.GrantAccessResult, AWSError>;
  /**
   * Returns a list of tags that are applied to the specified stack or layer.
   */
  listTags(params: OpsWorks.Types.ListTagsRequest, callback?: (err: AWSError, data: OpsWorks.Types.ListTagsResult) => void): Request<OpsWorks.Types.ListTagsResult, AWSError>;
  /**
   * Returns a list of tags that are applied to the specified stack or layer.
   */
  listTags(callback?: (err: AWSError, data: OpsWorks.Types.ListTagsResult) => void): Request<OpsWorks.Types.ListTagsResult, AWSError>;
  /**
   * Reboots a specified instance. For more information, see Starting, Stopping, and Rebooting Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  rebootInstance(params: OpsWorks.Types.RebootInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Reboots a specified instance. For more information, see Starting, Stopping, and Rebooting Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  rebootInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see  Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see  Managing User Permissions.
   */
  registerEcsCluster(params: OpsWorks.Types.RegisterEcsClusterRequest, callback?: (err: AWSError, data: OpsWorks.Types.RegisterEcsClusterResult) => void): Request<OpsWorks.Types.RegisterEcsClusterResult, AWSError>;
  /**
   * Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see  Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see  Managing User Permissions.
   */
  registerEcsCluster(callback?: (err: AWSError, data: OpsWorks.Types.RegisterEcsClusterResult) => void): Request<OpsWorks.Types.RegisterEcsClusterResult, AWSError>;
  /**
   * Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling DeregisterElasticIp. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  registerElasticIp(params: OpsWorks.Types.RegisterElasticIpRequest, callback?: (err: AWSError, data: OpsWorks.Types.RegisterElasticIpResult) => void): Request<OpsWorks.Types.RegisterElasticIpResult, AWSError>;
  /**
   * Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling DeregisterElasticIp. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  registerElasticIp(callback?: (err: AWSError, data: OpsWorks.Types.RegisterElasticIpResult) => void): Request<OpsWorks.Types.RegisterElasticIpResult, AWSError>;
  /**
   * Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.  We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. RegisterInstance handles only the second step. You should instead use the AWS CLI register command, which performs the entire registration operation. For more information, see  Registering an Instance with an AWS OpsWorks Stacks Stack.  Registered instances have the same requirements as instances that are created by using the CreateInstance API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see  Preparing the Instance.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  registerInstance(params: OpsWorks.Types.RegisterInstanceRequest, callback?: (err: AWSError, data: OpsWorks.Types.RegisterInstanceResult) => void): Request<OpsWorks.Types.RegisterInstanceResult, AWSError>;
  /**
   * Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.  We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. RegisterInstance handles only the second step. You should instead use the AWS CLI register command, which performs the entire registration operation. For more information, see  Registering an Instance with an AWS OpsWorks Stacks Stack.  Registered instances have the same requirements as instances that are created by using the CreateInstance API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see  Preparing the Instance.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  registerInstance(callback?: (err: AWSError, data: OpsWorks.Types.RegisterInstanceResult) => void): Request<OpsWorks.Types.RegisterInstanceResult, AWSError>;
  /**
   * Registers an Amazon RDS instance with a stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  registerRdsDbInstance(params: OpsWorks.Types.RegisterRdsDbInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Registers an Amazon RDS instance with a stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  registerRdsDbInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling DeregisterVolume. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  registerVolume(params: OpsWorks.Types.RegisterVolumeRequest, callback?: (err: AWSError, data: OpsWorks.Types.RegisterVolumeResult) => void): Request<OpsWorks.Types.RegisterVolumeResult, AWSError>;
  /**
   * Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling DeregisterVolume. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  registerVolume(callback?: (err: AWSError, data: OpsWorks.Types.RegisterVolumeResult) => void): Request<OpsWorks.Types.RegisterVolumeResult, AWSError>;
  /**
   * Specify the load-based auto scaling configuration for a specified layer. For more information, see Managing Load with Time-based and Load-based Instances.  To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.   Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  setLoadBasedAutoScaling(params: OpsWorks.Types.SetLoadBasedAutoScalingRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Specify the load-based auto scaling configuration for a specified layer. For more information, see Managing Load with Time-based and Load-based Instances.  To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.   Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  setLoadBasedAutoScaling(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Specifies a user's permissions. For more information, see Security and Permissions.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  setPermission(params: OpsWorks.Types.SetPermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Specifies a user's permissions. For more information, see Security and Permissions.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  setPermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Specify the time-based auto scaling configuration for a specified instance. For more information, see Managing Load with Time-based and Load-based Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  setTimeBasedAutoScaling(params: OpsWorks.Types.SetTimeBasedAutoScalingRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Specify the time-based auto scaling configuration for a specified instance. For more information, see Managing Load with Time-based and Load-based Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  setTimeBasedAutoScaling(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Starts a specified instance. For more information, see Starting, Stopping, and Rebooting Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  startInstance(params: OpsWorks.Types.StartInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Starts a specified instance. For more information, see Starting, Stopping, and Rebooting Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  startInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Starts a stack's instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  startStack(params: OpsWorks.Types.StartStackRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Starts a stack's instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  startStack(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see Starting, Stopping, and Rebooting Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  stopInstance(params: OpsWorks.Types.StopInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see Starting, Stopping, and Rebooting Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  stopInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a specified stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  stopStack(params: OpsWorks.Types.StopStackRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a specified stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  stopStack(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see Tags in the AWS OpsWorks User Guide.
   */
  tagResource(params: OpsWorks.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see Tags in the AWS OpsWorks User Guide.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Unassigns a registered instance from all of it's layers. The instance remains in the stack as an unassigned instance and can be assigned to another layer, as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  unassignInstance(params: OpsWorks.Types.UnassignInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Unassigns a registered instance from all of it's layers. The instance remains in the stack as an unassigned instance and can be assigned to another layer, as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  unassignInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  unassignVolume(params: OpsWorks.Types.UnassignVolumeRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  unassignVolume(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes tags from a specified stack or layer.
   */
  untagResource(params: OpsWorks.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes tags from a specified stack or layer.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a specified app.  Required Permissions: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateApp(params: OpsWorks.Types.UpdateAppRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a specified app.  Required Permissions: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateApp(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a registered Elastic IP address's name. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateElasticIp(params: OpsWorks.Types.UpdateElasticIpRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a registered Elastic IP address's name. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateElasticIp(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a specified instance.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateInstance(params: OpsWorks.Types.UpdateInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a specified instance.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a specified layer.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateLayer(params: OpsWorks.Types.UpdateLayerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a specified layer.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateLayer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a user's SSH public key.  Required Permissions: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateMyUserProfile(params: OpsWorks.Types.UpdateMyUserProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a user's SSH public key.  Required Permissions: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateMyUserProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an Amazon RDS instance.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateRdsDbInstance(params: OpsWorks.Types.UpdateRdsDbInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an Amazon RDS instance.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateRdsDbInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a specified stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateStack(params: OpsWorks.Types.UpdateStackRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a specified stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateStack(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a specified user profile.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateUserProfile(params: OpsWorks.Types.UpdateUserProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a specified user profile.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateUserProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an Amazon EBS volume's name or mount point. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateVolume(params: OpsWorks.Types.UpdateVolumeRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an Amazon EBS volume's name or mount point. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.
   */
  updateVolume(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Waits for the appExists state by periodically calling the underlying OpsWorks.describeAppsoperation every 1 seconds (at most 40 times).
   */
  waitFor(state: "appExists", params: OpsWorks.Types.DescribeAppsRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeAppsResult) => void): Request<OpsWorks.Types.DescribeAppsResult, AWSError>;
  /**
   * Waits for the appExists state by periodically calling the underlying OpsWorks.describeAppsoperation every 1 seconds (at most 40 times).
   */
  waitFor(state: "appExists", callback?: (err: AWSError, data: OpsWorks.Types.DescribeAppsResult) => void): Request<OpsWorks.Types.DescribeAppsResult, AWSError>;
  /**
   * Waits for the deploymentSuccessful state by periodically calling the underlying OpsWorks.describeDeploymentsoperation every 15 seconds (at most 40 times). Wait until a deployment has completed successfully
   */
  waitFor(state: "deploymentSuccessful", params: OpsWorks.Types.DescribeDeploymentsRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeDeploymentsResult) => void): Request<OpsWorks.Types.DescribeDeploymentsResult, AWSError>;
  /**
   * Waits for the deploymentSuccessful state by periodically calling the underlying OpsWorks.describeDeploymentsoperation every 15 seconds (at most 40 times). Wait until a deployment has completed successfully
   */
  waitFor(state: "deploymentSuccessful", callback?: (err: AWSError, data: OpsWorks.Types.DescribeDeploymentsResult) => void): Request<OpsWorks.Types.DescribeDeploymentsResult, AWSError>;
  /**
   * Waits for the instanceOnline state by periodically calling the underlying OpsWorks.describeInstancesoperation every 15 seconds (at most 40 times). Wait until OpsWorks instance is online.
   */
  waitFor(state: "instanceOnline", params: OpsWorks.Types.DescribeInstancesRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeInstancesResult) => void): Request<OpsWorks.Types.DescribeInstancesResult, AWSError>;
  /**
   * Waits for the instanceOnline state by periodically calling the underlying OpsWorks.describeInstancesoperation every 15 seconds (at most 40 times). Wait until OpsWorks instance is online.
   */
  waitFor(state: "instanceOnline", callback?: (err: AWSError, data: OpsWorks.Types.DescribeInstancesResult) => void): Request<OpsWorks.Types.DescribeInstancesResult, AWSError>;
  /**
   * Waits for the instanceRegistered state by periodically calling the underlying OpsWorks.describeInstancesoperation every 15 seconds (at most 40 times). Wait until OpsWorks instance is registered.
   */
  waitFor(state: "instanceRegistered", params: OpsWorks.Types.DescribeInstancesRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeInstancesResult) => void): Request<OpsWorks.Types.DescribeInstancesResult, AWSError>;
  /**
   * Waits for the instanceRegistered state by periodically calling the underlying OpsWorks.describeInstancesoperation every 15 seconds (at most 40 times). Wait until OpsWorks instance is registered.
   */
  waitFor(state: "instanceRegistered", callback?: (err: AWSError, data: OpsWorks.Types.DescribeInstancesResult) => void): Request<OpsWorks.Types.DescribeInstancesResult, AWSError>;
  /**
   * Waits for the instanceStopped state by periodically calling the underlying OpsWorks.describeInstancesoperation every 15 seconds (at most 40 times). Wait until OpsWorks instance is stopped.
   */
  waitFor(state: "instanceStopped", params: OpsWorks.Types.DescribeInstancesRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeInstancesResult) => void): Request<OpsWorks.Types.DescribeInstancesResult, AWSError>;
  /**
   * Waits for the instanceStopped state by periodically calling the underlying OpsWorks.describeInstancesoperation every 15 seconds (at most 40 times). Wait until OpsWorks instance is stopped.
   */
  waitFor(state: "instanceStopped", callback?: (err: AWSError, data: OpsWorks.Types.DescribeInstancesResult) => void): Request<OpsWorks.Types.DescribeInstancesResult, AWSError>;
  /**
   * Waits for the instanceTerminated state by periodically calling the underlying OpsWorks.describeInstancesoperation every 15 seconds (at most 40 times). Wait until OpsWorks instance is terminated.
   */
  waitFor(state: "instanceTerminated", params: OpsWorks.Types.DescribeInstancesRequest, callback?: (err: AWSError, data: OpsWorks.Types.DescribeInstancesResult) => void): Request<OpsWorks.Types.DescribeInstancesResult, AWSError>;
  /**
   * Waits for the instanceTerminated state by periodically calling the underlying OpsWorks.describeInstancesoperation every 15 seconds (at most 40 times). Wait until OpsWorks instance is terminated.
   */
  waitFor(state: "instanceTerminated", callback?: (err: AWSError, data: OpsWorks.Types.DescribeInstancesResult) => void): Request<OpsWorks.Types.DescribeInstancesResult, AWSError>;
}
declare namespace OpsWorks {
  export interface AgentVersion {
    /**
     * The agent version.
     */
    Version?: String;
    /**
     * The configuration manager.
     */
    ConfigurationManager?: StackConfigurationManager;
  }
  export type AgentVersions = AgentVersion[];
  export interface App {
    /**
     * The app ID.
     */
    AppId?: String;
    /**
     * The app stack ID.
     */
    StackId?: String;
    /**
     * The app's short name.
     */
    Shortname?: String;
    /**
     * The app name.
     */
    Name?: String;
    /**
     * A description of the app.
     */
    Description?: String;
    /**
     * The app's data sources.
     */
    DataSources?: DataSources;
    /**
     * The app type.
     */
    Type?: AppType;
    /**
     * A Source object that describes the app repository.
     */
    AppSource?: Source;
    /**
     * The app vhost settings with multiple domains separated by commas. For example: 'www.example.com, example.com' 
     */
    Domains?: Strings;
    /**
     * Whether to enable SSL for the app.
     */
    EnableSsl?: Boolean;
    /**
     * An SslConfiguration object with the SSL configuration.
     */
    SslConfiguration?: SslConfiguration;
    /**
     * The stack attributes.
     */
    Attributes?: AppAttributes;
    /**
     * When the app was created.
     */
    CreatedAt?: String;
    /**
     * An array of EnvironmentVariable objects that specify environment variables to be associated with the app. After you deploy the app, these variables are defined on the associated app server instances. For more information, see  Environment Variables.   There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variable names, values, and protected flag values - cannot exceed 10 KB (10240 Bytes). This limit should accommodate most if not all use cases, but if you do exceed it, you will cause an exception (API) with an "Environment: is too large (maximum is 10KB)" message. 
     */
    Environment?: EnvironmentVariables;
  }
  export type AppAttributes = {[key: string]: String};
  export type AppAttributesKeys = "DocumentRoot"|"RailsEnv"|"AutoBundleOnDeploy"|"AwsFlowRubySettings"|string;
  export type AppType = "aws-flow-ruby"|"java"|"rails"|"php"|"nodejs"|"static"|"other"|string;
  export type Apps = App[];
  export type Architecture = "x86_64"|"i386"|string;
  export interface AssignInstanceRequest {
    /**
     * The instance ID.
     */
    InstanceId: String;
    /**
     * The layer ID, which must correspond to a custom layer. You cannot assign a registered instance to a built-in layer.
     */
    LayerIds: Strings;
  }
  export interface AssignVolumeRequest {
    /**
     * The volume ID.
     */
    VolumeId: String;
    /**
     * The instance ID.
     */
    InstanceId?: String;
  }
  export interface AssociateElasticIpRequest {
    /**
     * The Elastic IP address.
     */
    ElasticIp: String;
    /**
     * The instance ID.
     */
    InstanceId?: String;
  }
  export interface AttachElasticLoadBalancerRequest {
    /**
     * The Elastic Load Balancing instance's name.
     */
    ElasticLoadBalancerName: String;
    /**
     * The ID of the layer that the Elastic Load Balancing instance is to be attached to.
     */
    LayerId: String;
  }
  export interface AutoScalingThresholds {
    /**
     * The number of instances to add or remove when the load exceeds a threshold.
     */
    InstanceCount?: Integer;
    /**
     * The amount of time, in minutes, that the load must exceed a threshold before more instances are added or removed.
     */
    ThresholdsWaitTime?: Minute;
    /**
     * The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks Stacks should ignore metrics and suppress additional scaling events. For example, AWS OpsWorks Stacks adds new instances following an upscaling event but the instances won't start reducing the load until they have been booted and configured. There is no point in raising additional scaling events during that operation, which typically takes several minutes. IgnoreMetricsTime allows you to direct AWS OpsWorks Stacks to suppress scaling events long enough to get the new instances online.
     */
    IgnoreMetricsTime?: Minute;
    /**
     * The CPU utilization threshold, as a percent of the available CPU. A value of -1 disables the threshold.
     */
    CpuThreshold?: Double;
    /**
     * The memory utilization threshold, as a percent of the available memory. A value of -1 disables the threshold.
     */
    MemoryThreshold?: Double;
    /**
     * The load threshold. A value of -1 disables the threshold. For more information about how load is computed, see Load (computing).
     */
    LoadThreshold?: Double;
    /**
     * Custom Cloudwatch auto scaling alarms, to be used as thresholds. This parameter takes a list of up to five alarm names, which are case sensitive and must be in the same region as the stack.  To use custom alarms, you must update your service role to allow cloudwatch:DescribeAlarms. You can either have AWS OpsWorks Stacks update the role for you when you first use this feature or you can edit the role manually. For more information, see Allowing AWS OpsWorks Stacks to Act on Your Behalf. 
     */
    Alarms?: Strings;
  }
  export type AutoScalingType = "load"|"timer"|string;
  export interface BlockDeviceMapping {
    /**
     * The device name that is exposed to the instance, such as /dev/sdh. For the root device, you can use the explicit device name or you can set this parameter to ROOT_DEVICE and AWS OpsWorks Stacks will provide the correct device name.
     */
    DeviceName?: String;
    /**
     * Suppresses the specified device included in the AMI's block device mapping.
     */
    NoDevice?: String;
    /**
     * The virtual device name. For more information, see BlockDeviceMapping.
     */
    VirtualName?: String;
    /**
     * An EBSBlockDevice that defines how to configure an Amazon EBS volume when the instance is launched.
     */
    Ebs?: EbsBlockDevice;
  }
  export type BlockDeviceMappings = BlockDeviceMapping[];
  export type Boolean = boolean;
  export interface ChefConfiguration {
    /**
     * Whether to enable Berkshelf.
     */
    ManageBerkshelf?: Boolean;
    /**
     * The Berkshelf version.
     */
    BerkshelfVersion?: String;
  }
  export interface CloneStackRequest {
    /**
     * The source stack ID.
     */
    SourceStackId: String;
    /**
     * The cloned stack name.
     */
    Name?: String;
    /**
     * The cloned stack AWS region, such as "ap-northeast-2". For more information about AWS regions, see Regions and Endpoints.
     */
    Region?: String;
    /**
     * The ID of the VPC that the cloned stack is to be launched into. It must be in the specified region. All instances are launched into this VPC, and you cannot change the ID later.   If your account supports EC2 Classic, the default value is no VPC.   If your account does not support EC2 Classic, the default value is the default VPC for the specified region.   If the VPC ID corresponds to a default VPC and you have specified either the DefaultAvailabilityZone or the DefaultSubnetId parameter only, AWS OpsWorks Stacks infers the value of the other parameter. If you specify neither parameter, AWS OpsWorks Stacks sets these parameters to the first valid Availability Zone for the specified region and the corresponding default VPC subnet ID, respectively.  If you specify a nondefault VPC ID, note the following:   It must belong to a VPC in your account that is in the specified region.   You must specify a value for DefaultSubnetId.   For more information on how to use AWS OpsWorks Stacks with a VPC, see Running a Stack in a VPC. For more information on default VPC and EC2 Classic, see Supported Platforms. 
     */
    VpcId?: String;
    /**
     * A list of stack attributes and values as key/value pairs to be added to the cloned stack.
     */
    Attributes?: StackAttributes;
    /**
     * The stack AWS Identity and Access Management (IAM) role, which allows AWS OpsWorks Stacks to work with AWS resources on your behalf. You must set this parameter to the Amazon Resource Name (ARN) for an existing IAM role. If you create a stack by using the AWS OpsWorks Stacks console, it creates the role for you. You can obtain an existing stack's IAM ARN programmatically by calling DescribePermissions. For more information about IAM ARNs, see Using Identifiers.  You must set this parameter to a valid service role ARN or the action will fail; there is no default value. You can specify the source stack's service role ARN, if you prefer, but you must do so explicitly. 
     */
    ServiceRoleArn: String;
    /**
     * The Amazon Resource Name (ARN) of an IAM profile that is the default profile for all of the stack's EC2 instances. For more information about IAM ARNs, see Using Identifiers.
     */
    DefaultInstanceProfileArn?: String;
    /**
     * The stack's operating system, which must be set to one of the following.   A supported Linux operating system: An Amazon Linux version, such as Amazon Linux 2017.03, Amazon Linux 2016.09, Amazon Linux 2016.03, Amazon Linux 2015.09, or Amazon Linux 2015.03.   A supported Ubuntu operating system, such as Ubuntu 16.04 LTS, Ubuntu 14.04 LTS, or Ubuntu 12.04 LTS.    CentOS Linux 7     Red Hat Enterprise Linux 7     Microsoft Windows Server 2012 R2 Base, Microsoft Windows Server 2012 R2 with SQL Server Express, Microsoft Windows Server 2012 R2 with SQL Server Standard, or Microsoft Windows Server 2012 R2 with SQL Server Web.   A custom AMI: Custom. You specify the custom AMI you want to use when you create instances. For more information on how to use custom AMIs with OpsWorks, see Using Custom AMIs.   The default option is the parent stack's operating system. For more information on the supported operating systems, see AWS OpsWorks Stacks Operating Systems.  You can specify a different Linux operating system for the cloned stack, but you cannot change from Linux to Windows or Windows to Linux. 
     */
    DefaultOs?: String;
    /**
     * The stack's host name theme, with spaces are replaced by underscores. The theme is used to generate host names for the stack's instances. By default, HostnameTheme is set to Layer_Dependent, which creates host names by appending integers to the layer's short name. The other themes are:    Baked_Goods     Clouds     Europe_Cities     Fruits     Greek_Deities     Legendary_creatures_from_Japan     Planets_and_Moons     Roman_Deities     Scottish_Islands     US_Cities     Wild_Cats    To obtain a generated host name, call GetHostNameSuggestion, which returns a host name based on the current theme.
     */
    HostnameTheme?: String;
    /**
     * The cloned stack's default Availability Zone, which must be in the specified region. For more information, see Regions and Endpoints. If you also specify a value for DefaultSubnetId, the subnet must be in the same zone. For more information, see the VpcId parameter description. 
     */
    DefaultAvailabilityZone?: String;
    /**
     * The stack's default VPC subnet ID. This parameter is required if you specify a value for the VpcId parameter. All instances are launched into this subnet unless you specify otherwise when you create the instance. If you also specify a value for DefaultAvailabilityZone, the subnet must be in that zone. For information on default values and when this parameter is required, see the VpcId parameter description. 
     */
    DefaultSubnetId?: String;
    /**
     * A string that contains user-defined, custom JSON. It is used to override the corresponding default stack configuration JSON values. The string should be in the following format:  "{\"key1\": \"value1\", \"key2\": \"value2\",...}"  For more information on custom JSON, see Use Custom JSON to Modify the Stack Configuration Attributes 
     */
    CustomJson?: String;
    /**
     * The configuration manager. When you clone a stack we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.
     */
    ConfigurationManager?: StackConfigurationManager;
    /**
     * A ChefConfiguration object that specifies whether to enable Berkshelf and the Berkshelf version on Chef 11.10 stacks. For more information, see Create a New Stack.
     */
    ChefConfiguration?: ChefConfiguration;
    /**
     * Whether to use custom cookbooks.
     */
    UseCustomCookbooks?: Boolean;
    /**
     * Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers. AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. With UseOpsworksSecurityGroups you can instead provide your own custom security groups. UseOpsworksSecurityGroups has the following settings:    True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it but you cannot delete the built-in security group.   False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate Amazon Elastic Compute Cloud (Amazon EC2) security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on creation; custom security groups are required only for those layers that need custom settings.   For more information, see Create a New Stack.
     */
    UseOpsworksSecurityGroups?: Boolean;
    CustomCookbooksSource?: Source;
    /**
     * A default Amazon EC2 key pair name. The default value is none. If you specify a key pair name, AWS OpsWorks installs the public key on the instance and you can use the private key with an SSH client to log in to the instance. For more information, see  Using SSH to Communicate with an Instance and  Managing SSH Access. You can override this setting by specifying a different key pair, or no key pair, when you  create an instance. 
     */
    DefaultSshKeyName?: String;
    /**
     * Whether to clone the source stack's permissions.
     */
    ClonePermissions?: Boolean;
    /**
     * A list of source stack app IDs to be included in the cloned stack.
     */
    CloneAppIds?: Strings;
    /**
     * The default root device type. This value is used by default for all instances in the cloned stack, but you can override it when you create an instance. For more information, see Storage for the Root Device.
     */
    DefaultRootDeviceType?: RootDeviceType;
    /**
     * The default AWS OpsWorks Stacks agent version. You have the following options:   Auto-update - Set this parameter to LATEST. AWS OpsWorks Stacks automatically installs new agent versions on the stack's instances as soon as they are available.   Fixed version - Set this parameter to your preferred agent version. To update the agent version, you must edit the stack configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the stack's instances.   The default setting is LATEST. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call DescribeAgentVersions. AgentVersion cannot be set to Chef 12.2.  You can also specify an agent version when you create or update an instance, which overrides the stack's default setting. 
     */
    AgentVersion?: String;
  }
  export interface CloneStackResult {
    /**
     * The cloned stack ID.
     */
    StackId?: String;
  }
  export interface CloudWatchLogsConfiguration {
    /**
     * Whether CloudWatch Logs is enabled for a layer.
     */
    Enabled?: Boolean;
    /**
     * A list of configuration options for CloudWatch Logs.
     */
    LogStreams?: CloudWatchLogsLogStreams;
  }
  export type CloudWatchLogsEncoding = "ascii"|"big5"|"big5hkscs"|"cp037"|"cp424"|"cp437"|"cp500"|"cp720"|"cp737"|"cp775"|"cp850"|"cp852"|"cp855"|"cp856"|"cp857"|"cp858"|"cp860"|"cp861"|"cp862"|"cp863"|"cp864"|"cp865"|"cp866"|"cp869"|"cp874"|"cp875"|"cp932"|"cp949"|"cp950"|"cp1006"|"cp1026"|"cp1140"|"cp1250"|"cp1251"|"cp1252"|"cp1253"|"cp1254"|"cp1255"|"cp1256"|"cp1257"|"cp1258"|"euc_jp"|"euc_jis_2004"|"euc_jisx0213"|"euc_kr"|"gb2312"|"gbk"|"gb18030"|"hz"|"iso2022_jp"|"iso2022_jp_1"|"iso2022_jp_2"|"iso2022_jp_2004"|"iso2022_jp_3"|"iso2022_jp_ext"|"iso2022_kr"|"latin_1"|"iso8859_2"|"iso8859_3"|"iso8859_4"|"iso8859_5"|"iso8859_6"|"iso8859_7"|"iso8859_8"|"iso8859_9"|"iso8859_10"|"iso8859_13"|"iso8859_14"|"iso8859_15"|"iso8859_16"|"johab"|"koi8_r"|"koi8_u"|"mac_cyrillic"|"mac_greek"|"mac_iceland"|"mac_latin2"|"mac_roman"|"mac_turkish"|"ptcp154"|"shift_jis"|"shift_jis_2004"|"shift_jisx0213"|"utf_32"|"utf_32_be"|"utf_32_le"|"utf_16"|"utf_16_be"|"utf_16_le"|"utf_7"|"utf_8"|"utf_8_sig"|string;
  export type CloudWatchLogsInitialPosition = "start_of_file"|"end_of_file"|string;
  export interface CloudWatchLogsLogStream {
    /**
     * Specifies the destination log group. A log group is created automatically if it doesn't already exist. Log group names can be between 1 and 512 characters long. Allowed characters include a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).
     */
    LogGroupName?: String;
    /**
     * Specifies how the time stamp is extracted from logs. For more information, see the CloudWatch Logs Agent Reference.
     */
    DatetimeFormat?: String;
    /**
     * Specifies the time zone of log event time stamps.
     */
    TimeZone?: CloudWatchLogsTimeZone;
    /**
     * Specifies log files that you want to push to CloudWatch Logs.  File can point to a specific file or multiple files (by using wild card characters such as /var/log/system.log*). Only the latest file is pushed to CloudWatch Logs, based on file modification time. We recommend that you use wild card characters to specify a series of files of the same type, such as access_log.2014-06-01-01, access_log.2014-06-01-02, and so on by using a pattern like access_log.*. Don't use a wildcard to match multiple file types, such as access_log_80 and access_log_443. To specify multiple, different file types, add another log stream entry to the configuration file, so that each log file type is stored in a different log group. Zipped files are not supported.
     */
    File?: String;
    /**
     * Specifies the range of lines for identifying a file. The valid values are one number, or two dash-delimited numbers, such as '1', '2-5'. The default value is '1', meaning the first line is used to calculate the fingerprint. Fingerprint lines are not sent to CloudWatch Logs unless all specified lines are available.
     */
    FileFingerprintLines?: String;
    /**
     * Specifies the pattern for identifying the start of a log message.
     */
    MultiLineStartPattern?: String;
    /**
     * Specifies where to start to read data (start_of_file or end_of_file). The default is start_of_file. This setting is only used if there is no state persisted for that log stream.
     */
    InitialPosition?: CloudWatchLogsInitialPosition;
    /**
     * Specifies the encoding of the log file so that the file can be read correctly. The default is utf_8. Encodings supported by Python codecs.decode() can be used here.
     */
    Encoding?: CloudWatchLogsEncoding;
    /**
     * Specifies the time duration for the batching of log events. The minimum value is 5000ms and default value is 5000ms.
     */
    BufferDuration?: Integer;
    /**
     * Specifies the max number of log events in a batch, up to 10000. The default value is 1000.
     */
    BatchCount?: Integer;
    /**
     * Specifies the maximum size of log events in a batch, in bytes, up to 1048576 bytes. The default value is 32768 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.
     */
    BatchSize?: Integer;
  }
  export type CloudWatchLogsLogStreams = CloudWatchLogsLogStream[];
  export type CloudWatchLogsTimeZone = "LOCAL"|"UTC"|string;
  export interface Command {
    /**
     * The command ID.
     */
    CommandId?: String;
    /**
     * The ID of the instance where the command was executed.
     */
    InstanceId?: String;
    /**
     * The command deployment ID.
     */
    DeploymentId?: String;
    /**
     * Date and time when the command was run.
     */
    CreatedAt?: DateTime;
    /**
     * Date and time when the command was acknowledged.
     */
    AcknowledgedAt?: DateTime;
    /**
     * Date when the command completed.
     */
    CompletedAt?: DateTime;
    /**
     * The command status:   failed   successful   skipped   pending  
     */
    Status?: String;
    /**
     * The command exit code.
     */
    ExitCode?: Integer;
    /**
     * The URL of the command log.
     */
    LogUrl?: String;
    /**
     * The command type:    configure     deploy     execute_recipes     install_dependencies     restart     rollback     setup     start     stop     undeploy     update_custom_cookbooks     update_dependencies   
     */
    Type?: String;
  }
  export type Commands = Command[];
  export interface CreateAppRequest {
    /**
     * The stack ID.
     */
    StackId: String;
    /**
     * The app's short name.
     */
    Shortname?: String;
    /**
     * The app name.
     */
    Name: String;
    /**
     * A description of the app.
     */
    Description?: String;
    /**
     * The app's data source.
     */
    DataSources?: DataSources;
    /**
     * The app type. Each supported type is associated with a particular layer. For example, PHP applications are associated with a PHP layer. AWS OpsWorks Stacks deploys an application to those instances that are members of the corresponding layer. If your app isn't one of the standard types, or you prefer to implement your own Deploy recipes, specify other.
     */
    Type: AppType;
    /**
     * A Source object that specifies the app repository.
     */
    AppSource?: Source;
    /**
     * The app virtual host settings, with multiple domains separated by commas. For example: 'www.example.com, example.com' 
     */
    Domains?: Strings;
    /**
     * Whether to enable SSL for the app.
     */
    EnableSsl?: Boolean;
    /**
     * An SslConfiguration object with the SSL configuration.
     */
    SslConfiguration?: SslConfiguration;
    /**
     * One or more user-defined key/value pairs to be added to the stack attributes.
     */
    Attributes?: AppAttributes;
    /**
     * An array of EnvironmentVariable objects that specify environment variables to be associated with the app. After you deploy the app, these variables are defined on the associated app server instance. For more information, see  Environment Variables. There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variables' names, values, and protected flag values - cannot exceed 10 KB (10240 Bytes). This limit should accommodate most if not all use cases. Exceeding it will cause an exception with the message, "Environment: is too large (maximum is 10KB)."  This parameter is supported only by Chef 11.10 stacks. If you have specified one or more environment variables, you cannot modify the stack's Chef version. 
     */
    Environment?: EnvironmentVariables;
  }
  export interface CreateAppResult {
    /**
     * The app ID.
     */
    AppId?: String;
  }
  export interface CreateDeploymentRequest {
    /**
     * The stack ID.
     */
    StackId: String;
    /**
     * The app ID. This parameter is required for app deployments, but not for other deployment commands.
     */
    AppId?: String;
    /**
     * The instance IDs for the deployment targets.
     */
    InstanceIds?: Strings;
    /**
     * The layer IDs for the deployment targets.
     */
    LayerIds?: Strings;
    /**
     * A DeploymentCommand object that specifies the deployment command and any associated arguments.
     */
    Command: DeploymentCommand;
    /**
     * A user-defined comment.
     */
    Comment?: String;
    /**
     * A string that contains user-defined, custom JSON. It is used to override the corresponding default stack configuration JSON values. The string should be in the following format:  "{\"key1\": \"value1\", \"key2\": \"value2\",...}"  For more information on custom JSON, see Use Custom JSON to Modify the Stack Configuration Attributes.
     */
    CustomJson?: String;
  }
  export interface CreateDeploymentResult {
    /**
     * The deployment ID, which can be used with other requests to identify the deployment.
     */
    DeploymentId?: String;
  }
  export interface CreateInstanceRequest {
    /**
     * The stack ID.
     */
    StackId: String;
    /**
     * An array that contains the instance's layer IDs.
     */
    LayerIds: Strings;
    /**
     * The instance type, such as t2.micro. For a list of supported instance types, open the stack in the console, choose Instances, and choose + Instance. The Size list contains the currently supported types. For more information, see Instance Families and Types. The parameter values that you use to specify the various types are in the API Name column of the Available Instance Types table.
     */
    InstanceType: String;
    /**
     * For load-based or time-based instances, the type. Windows stacks can use only time-based instances.
     */
    AutoScalingType?: AutoScalingType;
    /**
     * The instance host name.
     */
    Hostname?: String;
    /**
     * The instance's operating system, which must be set to one of the following.   A supported Linux operating system: An Amazon Linux version, such as Amazon Linux 2017.03, Amazon Linux 2016.09, Amazon Linux 2016.03, Amazon Linux 2015.09, or Amazon Linux 2015.03.   A supported Ubuntu operating system, such as Ubuntu 16.04 LTS, Ubuntu 14.04 LTS, or Ubuntu 12.04 LTS.    CentOS Linux 7     Red Hat Enterprise Linux 7    A supported Windows operating system, such as Microsoft Windows Server 2012 R2 Base, Microsoft Windows Server 2012 R2 with SQL Server Express, Microsoft Windows Server 2012 R2 with SQL Server Standard, or Microsoft Windows Server 2012 R2 with SQL Server Web.   A custom AMI: Custom.   For more information on the supported operating systems, see AWS OpsWorks Stacks Operating Systems. The default option is the current Amazon Linux version. If you set this parameter to Custom, you must use the CreateInstance action's AmiId parameter to specify the custom AMI that you want to use. Block device mappings are not supported if the value is Custom. For more information on the supported operating systems, see Operating SystemsFor more information on how to use custom AMIs with AWS OpsWorks Stacks, see Using Custom AMIs.
     */
    Os?: String;
    /**
     * A custom AMI ID to be used to create the instance. The AMI should be based on one of the supported operating systems. For more information, see Using Custom AMIs.  If you specify a custom AMI, you must set Os to Custom. 
     */
    AmiId?: String;
    /**
     * The instance's Amazon EC2 key-pair name.
     */
    SshKeyName?: String;
    /**
     * The instance Availability Zone. For more information, see Regions and Endpoints.
     */
    AvailabilityZone?: String;
    /**
     * The instance's virtualization type, paravirtual or hvm.
     */
    VirtualizationType?: String;
    /**
     * The ID of the instance's subnet. If the stack is running in a VPC, you can use this parameter to override the stack's default subnet ID value and direct AWS OpsWorks Stacks to launch the instance in a different subnet.
     */
    SubnetId?: String;
    /**
     * The instance architecture. The default option is x86_64. Instance types do not necessarily support both architectures. For a list of the architectures that are supported by the different instance types, see Instance Families and Types.
     */
    Architecture?: Architecture;
    /**
     * The instance root device type. For more information, see Storage for the Root Device.
     */
    RootDeviceType?: RootDeviceType;
    /**
     * An array of BlockDeviceMapping objects that specify the instance's block devices. For more information, see Block Device Mapping. Note that block device mappings are not supported for custom AMIs.
     */
    BlockDeviceMappings?: BlockDeviceMappings;
    /**
     * Whether to install operating system and package updates when the instance boots. The default value is true. To control when updates are installed, set this value to false. You must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or by manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   We strongly recommend using the default value of true to ensure that your instances have the latest security updates. 
     */
    InstallUpdatesOnBoot?: Boolean;
    /**
     * Whether to create an Amazon EBS-optimized instance.
     */
    EbsOptimized?: Boolean;
    /**
     * The default AWS OpsWorks Stacks agent version. You have the following options:    INHERIT - Use the stack's default agent version setting.    version_number - Use the specified agent version. This value overrides the stack's default setting. To update the agent version, edit the instance configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the instance.   The default setting is INHERIT. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call DescribeAgentVersions. AgentVersion cannot be set to Chef 12.2.
     */
    AgentVersion?: String;
    /**
     * The instance's tenancy option. The default option is no tenancy, or if the instance is running in a VPC, inherit tenancy settings from the VPC. The following are valid values for this parameter: dedicated, default, or host. Because there are costs associated with changes in tenancy options, we recommend that you research tenancy options before choosing them for your instances. For more information about dedicated hosts, see Dedicated Hosts Overview and Amazon EC2 Dedicated Hosts. For more information about dedicated instances, see Dedicated Instances and Amazon EC2 Dedicated Instances.
     */
    Tenancy?: String;
  }
  export interface CreateInstanceResult {
    /**
     * The instance ID.
     */
    InstanceId?: String;
  }
  export interface CreateLayerRequest {
    /**
     * The layer stack ID.
     */
    StackId: String;
    /**
     * The layer type. A stack cannot have more than one built-in layer of the same type. It can have any number of custom layers. Built-in layers are not available in Chef 12 stacks.
     */
    Type: LayerType;
    /**
     * The layer name, which is used by the console.
     */
    Name: String;
    /**
     * For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef recipes. The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 200 characters, which are limited to the alphanumeric characters, '-', '_', and '.'. The built-in layers' short names are defined by AWS OpsWorks Stacks. For more information, see the Layer Reference.
     */
    Shortname: String;
    /**
     * One or more user-defined key-value pairs to be added to the stack attributes. To create a cluster layer, set the EcsClusterArn attribute to the cluster's ARN.
     */
    Attributes?: LayerAttributes;
    /**
     * Specifies CloudWatch Logs configuration options for the layer. For more information, see CloudWatchLogsLogStream.
     */
    CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
    /**
     * The ARN of an IAM profile to be used for the layer's EC2 instances. For more information about IAM ARNs, see Using Identifiers.
     */
    CustomInstanceProfileArn?: String;
    /**
     * A JSON-formatted string containing custom stack configuration and deployment attributes to be installed on the layer's instances. For more information, see  Using Custom JSON. This feature is supported as of version 1.7.42 of the AWS CLI. 
     */
    CustomJson?: String;
    /**
     * An array containing the layer custom security group IDs.
     */
    CustomSecurityGroupIds?: Strings;
    /**
     * An array of Package objects that describes the layer packages.
     */
    Packages?: Strings;
    /**
     * A VolumeConfigurations object that describes the layer's Amazon EBS volumes.
     */
    VolumeConfigurations?: VolumeConfigurations;
    /**
     * Whether to disable auto healing for the layer.
     */
    EnableAutoHealing?: Boolean;
    /**
     * Whether to automatically assign an Elastic IP address to the layer's instances. For more information, see How to Edit a Layer.
     */
    AutoAssignElasticIps?: Boolean;
    /**
     * For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer's instances. For more information, see How to Edit a Layer.
     */
    AutoAssignPublicIps?: Boolean;
    /**
     * A LayerCustomRecipes object that specifies the layer custom recipes.
     */
    CustomRecipes?: Recipes;
    /**
     * Whether to install operating system and package updates when the instance boots. The default value is true. To control when updates are installed, set this value to false. You must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or by manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   To ensure that your instances have the latest security updates, we strongly recommend using the default value of true. 
     */
    InstallUpdatesOnBoot?: Boolean;
    /**
     * Whether to use Amazon EBS-optimized instances.
     */
    UseEbsOptimizedInstances?: Boolean;
    /**
     * A LifeCycleEventConfiguration object that you can use to configure the Shutdown event to specify an execution timeout and enable or disable Elastic Load Balancer connection draining.
     */
    LifecycleEventConfiguration?: LifecycleEventConfiguration;
  }
  export interface CreateLayerResult {
    /**
     * The layer ID.
     */
    LayerId?: String;
  }
  export interface CreateStackRequest {
    /**
     * The stack name.
     */
    Name: String;
    /**
     * The stack's AWS region, such as "ap-south-1". For more information about Amazon regions, see Regions and Endpoints.
     */
    Region: String;
    /**
     * The ID of the VPC that the stack is to be launched into. The VPC must be in the stack's region. All instances are launched into this VPC. You cannot change the ID later.   If your account supports EC2-Classic, the default value is no VPC.   If your account does not support EC2-Classic, the default value is the default VPC for the specified region.   If the VPC ID corresponds to a default VPC and you have specified either the DefaultAvailabilityZone or the DefaultSubnetId parameter only, AWS OpsWorks Stacks infers the value of the other parameter. If you specify neither parameter, AWS OpsWorks Stacks sets these parameters to the first valid Availability Zone for the specified region and the corresponding default VPC subnet ID, respectively. If you specify a nondefault VPC ID, note the following:   It must belong to a VPC in your account that is in the specified region.   You must specify a value for DefaultSubnetId.   For more information on how to use AWS OpsWorks Stacks with a VPC, see Running a Stack in a VPC. For more information on default VPC and EC2-Classic, see Supported Platforms. 
     */
    VpcId?: String;
    /**
     * One or more user-defined key-value pairs to be added to the stack attributes.
     */
    Attributes?: StackAttributes;
    /**
     * The stack's AWS Identity and Access Management (IAM) role, which allows AWS OpsWorks Stacks to work with AWS resources on your behalf. You must set this parameter to the Amazon Resource Name (ARN) for an existing IAM role. For more information about IAM ARNs, see Using Identifiers.
     */
    ServiceRoleArn: String;
    /**
     * The Amazon Resource Name (ARN) of an IAM profile that is the default profile for all of the stack's EC2 instances. For more information about IAM ARNs, see Using Identifiers.
     */
    DefaultInstanceProfileArn: String;
    /**
     * The stack's default operating system, which is installed on every instance unless you specify a different operating system when you create the instance. You can specify one of the following.   A supported Linux operating system: An Amazon Linux version, such as Amazon Linux 2017.03, Amazon Linux 2016.09, Amazon Linux 2016.03, Amazon Linux 2015.09, or Amazon Linux 2015.03.   A supported Ubuntu operating system, such as Ubuntu 16.04 LTS, Ubuntu 14.04 LTS, or Ubuntu 12.04 LTS.    CentOS Linux 7     Red Hat Enterprise Linux 7    A supported Windows operating system, such as Microsoft Windows Server 2012 R2 Base, Microsoft Windows Server 2012 R2 with SQL Server Express, Microsoft Windows Server 2012 R2 with SQL Server Standard, or Microsoft Windows Server 2012 R2 with SQL Server Web.   A custom AMI: Custom. You specify the custom AMI you want to use when you create instances. For more information, see  Using Custom AMIs.   The default option is the current Amazon Linux version. For more information on the supported operating systems, see AWS OpsWorks Stacks Operating Systems.
     */
    DefaultOs?: String;
    /**
     * The stack's host name theme, with spaces replaced by underscores. The theme is used to generate host names for the stack's instances. By default, HostnameTheme is set to Layer_Dependent, which creates host names by appending integers to the layer's short name. The other themes are:    Baked_Goods     Clouds     Europe_Cities     Fruits     Greek_Deities     Legendary_creatures_from_Japan     Planets_and_Moons     Roman_Deities     Scottish_Islands     US_Cities     Wild_Cats    To obtain a generated host name, call GetHostNameSuggestion, which returns a host name based on the current theme.
     */
    HostnameTheme?: String;
    /**
     * The stack's default Availability Zone, which must be in the specified region. For more information, see Regions and Endpoints. If you also specify a value for DefaultSubnetId, the subnet must be in the same zone. For more information, see the VpcId parameter description. 
     */
    DefaultAvailabilityZone?: String;
    /**
     * The stack's default VPC subnet ID. This parameter is required if you specify a value for the VpcId parameter. All instances are launched into this subnet unless you specify otherwise when you create the instance. If you also specify a value for DefaultAvailabilityZone, the subnet must be in that zone. For information on default values and when this parameter is required, see the VpcId parameter description. 
     */
    DefaultSubnetId?: String;
    /**
     * A string that contains user-defined, custom JSON. It can be used to override the corresponding default stack configuration attribute values or to pass data to recipes. The string should be in the following format:  "{\"key1\": \"value1\", \"key2\": \"value2\",...}"  For more information on custom JSON, see Use Custom JSON to Modify the Stack Configuration Attributes.
     */
    CustomJson?: String;
    /**
     * The configuration manager. When you create a stack we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 11.4.
     */
    ConfigurationManager?: StackConfigurationManager;
    /**
     * A ChefConfiguration object that specifies whether to enable Berkshelf and the Berkshelf version on Chef 11.10 stacks. For more information, see Create a New Stack.
     */
    ChefConfiguration?: ChefConfiguration;
    /**
     * Whether the stack uses custom cookbooks.
     */
    UseCustomCookbooks?: Boolean;
    /**
     * Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers. AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. With UseOpsworksSecurityGroups you can instead provide your own custom security groups. UseOpsworksSecurityGroups has the following settings:    True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it, but you cannot delete the built-in security group.   False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate EC2 security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on creation; custom security groups are required only for those layers that need custom settings.   For more information, see Create a New Stack.
     */
    UseOpsworksSecurityGroups?: Boolean;
    CustomCookbooksSource?: Source;
    /**
     * A default Amazon EC2 key pair name. The default value is none. If you specify a key pair name, AWS OpsWorks installs the public key on the instance and you can use the private key with an SSH client to log in to the instance. For more information, see  Using SSH to Communicate with an Instance and  Managing SSH Access. You can override this setting by specifying a different key pair, or no key pair, when you  create an instance. 
     */
    DefaultSshKeyName?: String;
    /**
     * The default root device type. This value is the default for all instances in the stack, but you can override it when you create an instance. The default option is instance-store. For more information, see Storage for the Root Device.
     */
    DefaultRootDeviceType?: RootDeviceType;
    /**
     * The default AWS OpsWorks Stacks agent version. You have the following options:   Auto-update - Set this parameter to LATEST. AWS OpsWorks Stacks automatically installs new agent versions on the stack's instances as soon as they are available.   Fixed version - Set this parameter to your preferred agent version. To update the agent version, you must edit the stack configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the stack's instances.   The default setting is the most recent release of the agent. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call DescribeAgentVersions. AgentVersion cannot be set to Chef 12.2.  You can also specify an agent version when you create or update an instance, which overrides the stack's default setting. 
     */
    AgentVersion?: String;
  }
  export interface CreateStackResult {
    /**
     * The stack ID, which is an opaque string that you use to identify the stack when performing actions such as DescribeStacks.
     */
    StackId?: String;
  }
  export interface CreateUserProfileRequest {
    /**
     * The user's IAM ARN; this can also be a federated user's ARN.
     */
    IamUserArn: String;
    /**
     * The user's SSH user name. The allowable characters are [a-z], [A-Z], [0-9], '-', and '_'. If the specified name includes other punctuation marks, AWS OpsWorks Stacks removes them. For example, my.name will be changed to myname. If you do not specify an SSH user name, AWS OpsWorks Stacks generates one from the IAM user name. 
     */
    SshUsername?: String;
    /**
     * The user's public SSH key.
     */
    SshPublicKey?: String;
    /**
     * Whether users can specify their own SSH public key through the My Settings page. For more information, see Setting an IAM User's Public SSH Key.
     */
    AllowSelfManagement?: Boolean;
  }
  export interface CreateUserProfileResult {
    /**
     * The user's IAM ARN.
     */
    IamUserArn?: String;
  }
  export type DailyAutoScalingSchedule = {[key: string]: Switch};
  export interface DataSource {
    /**
     * The data source's type, AutoSelectOpsworksMysqlInstance, OpsworksMysqlInstance, or RdsDbInstance.
     */
    Type?: String;
    /**
     * The data source's ARN.
     */
    Arn?: String;
    /**
     * The database name.
     */
    DatabaseName?: String;
  }
  export type DataSources = DataSource[];
  export type DateTime = string;
  export interface DeleteAppRequest {
    /**
     * The app ID.
     */
    AppId: String;
  }
  export interface DeleteInstanceRequest {
    /**
     * The instance ID.
     */
    InstanceId: String;
    /**
     * Whether to delete the instance Elastic IP address.
     */
    DeleteElasticIp?: Boolean;
    /**
     * Whether to delete the instance's Amazon EBS volumes.
     */
    DeleteVolumes?: Boolean;
  }
  export interface DeleteLayerRequest {
    /**
     * The layer ID.
     */
    LayerId: String;
  }
  export interface DeleteStackRequest {
    /**
     * The stack ID.
     */
    StackId: String;
  }
  export interface DeleteUserProfileRequest {
    /**
     * The user's IAM ARN. This can also be a federated user's ARN.
     */
    IamUserArn: String;
  }
  export interface Deployment {
    /**
     * The deployment ID.
     */
    DeploymentId?: String;
    /**
     * The stack ID.
     */
    StackId?: String;
    /**
     * The app ID.
     */
    AppId?: String;
    /**
     * Date when the deployment was created.
     */
    CreatedAt?: DateTime;
    /**
     * Date when the deployment completed.
     */
    CompletedAt?: DateTime;
    /**
     * The deployment duration.
     */
    Duration?: Integer;
    /**
     * The user's IAM ARN.
     */
    IamUserArn?: String;
    /**
     * A user-defined comment.
     */
    Comment?: String;
    Command?: DeploymentCommand;
    /**
     * The deployment status:   running   successful   failed  
     */
    Status?: String;
    /**
     * A string that contains user-defined custom JSON. It can be used to override the corresponding default stack configuration attribute values for stack or to pass data to recipes. The string should be in the following format:  "{\"key1\": \"value1\", \"key2\": \"value2\",...}"  For more information on custom JSON, see Use Custom JSON to Modify the Stack Configuration Attributes.
     */
    CustomJson?: String;
    /**
     * The IDs of the target instances.
     */
    InstanceIds?: Strings;
  }
  export interface DeploymentCommand {
    /**
     * Specifies the operation. You can specify only one command. For stacks, the following commands are available:    execute_recipes: Execute one or more recipes. To specify the recipes, set an Args parameter named recipes to the list of recipes to be executed. For example, to execute phpapp::appsetup, set Args to {"recipes":["phpapp::appsetup"]}.    install_dependencies: Install the stack's dependencies.    update_custom_cookbooks: Update the stack's custom cookbooks.    update_dependencies: Update the stack's dependencies.    The update_dependencies and install_dependencies commands are supported only for Linux instances. You can run the commands successfully on Windows instances, but they do nothing.  For apps, the following commands are available:    deploy: Deploy an app. Ruby on Rails apps have an optional Args parameter named migrate. Set Args to {"migrate":["true"]} to migrate the database. The default setting is {"migrate":["false"]}.    rollback Roll the app back to the previous version. When you update an app, AWS OpsWorks Stacks stores the previous version, up to a maximum of five versions. You can use this command to roll an app back as many as four versions.    start: Start the app's web or application server.    stop: Stop the app's web or application server.    restart: Restart the app's web or application server.    undeploy: Undeploy the app.  
     */
    Name: DeploymentCommandName;
    /**
     * The arguments of those commands that take arguments. It should be set to a JSON object with the following format:  {"arg_name1" : ["value1", "value2", ...], "arg_name2" : ["value1", "value2", ...], ...}  The update_dependencies command takes two arguments:    upgrade_os_to - Specifies the desired Amazon Linux version for instances whose OS you want to upgrade, such as Amazon Linux 2016.09. You must also set the allow_reboot argument to true.    allow_reboot - Specifies whether to allow AWS OpsWorks Stacks to reboot the instances if necessary, after installing the updates. This argument can be set to either true or false. The default value is false.   For example, to upgrade an instance to Amazon Linux 2016.09, set Args to the following.   { "upgrade_os_to":["Amazon Linux 2016.09"], "allow_reboot":["true"] }  
     */
    Args?: DeploymentCommandArgs;
  }
  export type DeploymentCommandArgs = {[key: string]: Strings};
  export type DeploymentCommandName = "install_dependencies"|"update_dependencies"|"update_custom_cookbooks"|"execute_recipes"|"configure"|"setup"|"deploy"|"rollback"|"start"|"stop"|"restart"|"undeploy"|string;
  export type Deployments = Deployment[];
  export interface DeregisterEcsClusterRequest {
    /**
     * The cluster's ARN.
     */
    EcsClusterArn: String;
  }
  export interface DeregisterElasticIpRequest {
    /**
     * The Elastic IP address.
     */
    ElasticIp: String;
  }
  export interface DeregisterInstanceRequest {
    /**
     * The instance ID.
     */
    InstanceId: String;
  }
  export interface DeregisterRdsDbInstanceRequest {
    /**
     * The Amazon RDS instance's ARN.
     */
    RdsDbInstanceArn: String;
  }
  export interface DeregisterVolumeRequest {
    /**
     * The AWS OpsWorks Stacks volume ID, which is the GUID that AWS OpsWorks Stacks assigned to the instance when you registered the volume with the stack, not the Amazon EC2 volume ID.
     */
    VolumeId: String;
  }
  export interface DescribeAgentVersionsRequest {
    /**
     * The stack ID.
     */
    StackId?: String;
    /**
     * The configuration manager.
     */
    ConfigurationManager?: StackConfigurationManager;
  }
  export interface DescribeAgentVersionsResult {
    /**
     * The agent versions for the specified stack or configuration manager. Note that this value is the complete version number, not the abbreviated number used by the console.
     */
    AgentVersions?: AgentVersions;
  }
  export interface DescribeAppsRequest {
    /**
     * The app stack ID. If you use this parameter, DescribeApps returns a description of the apps in the specified stack.
     */
    StackId?: String;
    /**
     * An array of app IDs for the apps to be described. If you use this parameter, DescribeApps returns a description of the specified apps. Otherwise, it returns a description of every app.
     */
    AppIds?: Strings;
  }
  export interface DescribeAppsResult {
    /**
     * An array of App objects that describe the specified apps. 
     */
    Apps?: Apps;
  }
  export interface DescribeCommandsRequest {
    /**
     * The deployment ID. If you include this parameter, DescribeCommands returns a description of the commands associated with the specified deployment.
     */
    DeploymentId?: String;
    /**
     * The instance ID. If you include this parameter, DescribeCommands returns a description of the commands associated with the specified instance.
     */
    InstanceId?: String;
    /**
     * An array of command IDs. If you include this parameter, DescribeCommands returns a description of the specified commands. Otherwise, it returns a description of every command.
     */
    CommandIds?: Strings;
  }
  export interface DescribeCommandsResult {
    /**
     * An array of Command objects that describe each of the specified commands.
     */
    Commands?: Commands;
  }
  export interface DescribeDeploymentsRequest {
    /**
     * The stack ID. If you include this parameter, DescribeDeployments returns a description of the commands associated with the specified stack.
     */
    StackId?: String;
    /**
     * The app ID. If you include this parameter, DescribeDeployments returns a description of the commands associated with the specified app.
     */
    AppId?: String;
    /**
     * An array of deployment IDs to be described. If you include this parameter, DescribeDeployments returns a description of the specified deployments. Otherwise, it returns a description of every deployment.
     */
    DeploymentIds?: Strings;
  }
  export interface DescribeDeploymentsResult {
    /**
     * An array of Deployment objects that describe the deployments.
     */
    Deployments?: Deployments;
  }
  export interface DescribeEcsClustersRequest {
    /**
     * A list of ARNs, one for each cluster to be described.
     */
    EcsClusterArns?: Strings;
    /**
     * A stack ID. DescribeEcsClusters returns a description of the cluster that is registered with the stack.
     */
    StackId?: String;
    /**
     * If the previous paginated request did not return all of the remaining results, the response object'sNextToken parameter value is set to a token. To retrieve the next set of results, call DescribeEcsClusters again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
     */
    NextToken?: String;
    /**
     * To receive a paginated response, use this parameter to specify the maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results.
     */
    MaxResults?: Integer;
  }
  export interface DescribeEcsClustersResult {
    /**
     * A list of EcsCluster objects containing the cluster descriptions.
     */
    EcsClusters?: EcsClusters;
    /**
     * If a paginated request does not return all of the remaining results, this parameter is set to a token that you can assign to the request object's NextToken parameter to retrieve the next set of results. If the previous paginated request returned all of the remaining results, this parameter is set to null.
     */
    NextToken?: String;
  }
  export interface DescribeElasticIpsRequest {
    /**
     * The instance ID. If you include this parameter, DescribeElasticIps returns a description of the Elastic IP addresses associated with the specified instance.
     */
    InstanceId?: String;
    /**
     * A stack ID. If you include this parameter, DescribeElasticIps returns a description of the Elastic IP addresses that are registered with the specified stack.
     */
    StackId?: String;
    /**
     * An array of Elastic IP addresses to be described. If you include this parameter, DescribeElasticIps returns a description of the specified Elastic IP addresses. Otherwise, it returns a description of every Elastic IP address.
     */
    Ips?: Strings;
  }
  export interface DescribeElasticIpsResult {
    /**
     * An ElasticIps object that describes the specified Elastic IP addresses.
     */
    ElasticIps?: ElasticIps;
  }
  export interface DescribeElasticLoadBalancersRequest {
    /**
     * A stack ID. The action describes the stack's Elastic Load Balancing instances.
     */
    StackId?: String;
    /**
     * A list of layer IDs. The action describes the Elastic Load Balancing instances for the specified layers.
     */
    LayerIds?: Strings;
  }
  export interface DescribeElasticLoadBalancersResult {
    /**
     * A list of ElasticLoadBalancer objects that describe the specified Elastic Load Balancing instances.
     */
    ElasticLoadBalancers?: ElasticLoadBalancers;
  }
  export interface DescribeInstancesRequest {
    /**
     * A stack ID. If you use this parameter, DescribeInstances returns descriptions of the instances associated with the specified stack.
     */
    StackId?: String;
    /**
     * A layer ID. If you use this parameter, DescribeInstances returns descriptions of the instances associated with the specified layer.
     */
    LayerId?: String;
    /**
     * An array of instance IDs to be described. If you use this parameter, DescribeInstances returns a description of the specified instances. Otherwise, it returns a description of every instance.
     */
    InstanceIds?: Strings;
  }
  export interface DescribeInstancesResult {
    /**
     * An array of Instance objects that describe the instances.
     */
    Instances?: Instances;
  }
  export interface DescribeLayersRequest {
    /**
     * The stack ID.
     */
    StackId?: String;
    /**
     * An array of layer IDs that specify the layers to be described. If you omit this parameter, DescribeLayers returns a description of every layer in the specified stack.
     */
    LayerIds?: Strings;
  }
  export interface DescribeLayersResult {
    /**
     * An array of Layer objects that describe the layers.
     */
    Layers?: Layers;
  }
  export interface DescribeLoadBasedAutoScalingRequest {
    /**
     * An array of layer IDs.
     */
    LayerIds: Strings;
  }
  export interface DescribeLoadBasedAutoScalingResult {
    /**
     * An array of LoadBasedAutoScalingConfiguration objects that describe each layer's configuration.
     */
    LoadBasedAutoScalingConfigurations?: LoadBasedAutoScalingConfigurations;
  }
  export interface DescribeMyUserProfileResult {
    /**
     * A UserProfile object that describes the user's SSH information.
     */
    UserProfile?: SelfUserProfile;
  }
  export interface DescribePermissionsRequest {
    /**
     * The user's IAM ARN. This can also be a federated user's ARN. For more information about IAM ARNs, see Using Identifiers.
     */
    IamUserArn?: String;
    /**
     * The stack ID.
     */
    StackId?: String;
  }
  export interface DescribePermissionsResult {
    /**
     * An array of Permission objects that describe the stack permissions.   If the request object contains only a stack ID, the array contains a Permission object with permissions for each of the stack IAM ARNs.   If the request object contains only an IAM ARN, the array contains a Permission object with permissions for each of the user's stack IDs.   If the request contains a stack ID and an IAM ARN, the array contains a single Permission object with permissions for the specified stack and IAM ARN.  
     */
    Permissions?: Permissions;
  }
  export interface DescribeRaidArraysRequest {
    /**
     * The instance ID. If you use this parameter, DescribeRaidArrays returns descriptions of the RAID arrays associated with the specified instance. 
     */
    InstanceId?: String;
    /**
     * The stack ID.
     */
    StackId?: String;
    /**
     * An array of RAID array IDs. If you use this parameter, DescribeRaidArrays returns descriptions of the specified arrays. Otherwise, it returns a description of every array.
     */
    RaidArrayIds?: Strings;
  }
  export interface DescribeRaidArraysResult {
    /**
     * A RaidArrays object that describes the specified RAID arrays.
     */
    RaidArrays?: RaidArrays;
  }
  export interface DescribeRdsDbInstancesRequest {
    /**
     * The stack ID that the instances are registered with. The operation returns descriptions of all registered Amazon RDS instances.
     */
    StackId: String;
    /**
     * An array containing the ARNs of the instances to be described.
     */
    RdsDbInstanceArns?: Strings;
  }
  export interface DescribeRdsDbInstancesResult {
    /**
     * An a array of RdsDbInstance objects that describe the instances.
     */
    RdsDbInstances?: RdsDbInstances;
  }
  export interface DescribeServiceErrorsRequest {
    /**
     * The stack ID. If you use this parameter, DescribeServiceErrors returns descriptions of the errors associated with the specified stack.
     */
    StackId?: String;
    /**
     * The instance ID. If you use this parameter, DescribeServiceErrors returns descriptions of the errors associated with the specified instance.
     */
    InstanceId?: String;
    /**
     * An array of service error IDs. If you use this parameter, DescribeServiceErrors returns descriptions of the specified errors. Otherwise, it returns a description of every error.
     */
    ServiceErrorIds?: Strings;
  }
  export interface DescribeServiceErrorsResult {
    /**
     * An array of ServiceError objects that describe the specified service errors.
     */
    ServiceErrors?: ServiceErrors;
  }
  export interface DescribeStackProvisioningParametersRequest {
    /**
     * The stack ID
     */
    StackId: String;
  }
  export interface DescribeStackProvisioningParametersResult {
    /**
     * The AWS OpsWorks Stacks agent installer's URL.
     */
    AgentInstallerUrl?: String;
    /**
     * An embedded object that contains the provisioning parameters.
     */
    Parameters?: Parameters;
  }
  export interface DescribeStackSummaryRequest {
    /**
     * The stack ID.
     */
    StackId: String;
  }
  export interface DescribeStackSummaryResult {
    /**
     * A StackSummary object that contains the results.
     */
    StackSummary?: StackSummary;
  }
  export interface DescribeStacksRequest {
    /**
     * An array of stack IDs that specify the stacks to be described. If you omit this parameter, DescribeStacks returns a description of every stack.
     */
    StackIds?: Strings;
  }
  export interface DescribeStacksResult {
    /**
     * An array of Stack objects that describe the stacks.
     */
    Stacks?: Stacks;
  }
  export interface DescribeTimeBasedAutoScalingRequest {
    /**
     * An array of instance IDs.
     */
    InstanceIds: Strings;
  }
  export interface DescribeTimeBasedAutoScalingResult {
    /**
     * An array of TimeBasedAutoScalingConfiguration objects that describe the configuration for the specified instances.
     */
    TimeBasedAutoScalingConfigurations?: TimeBasedAutoScalingConfigurations;
  }
  export interface DescribeUserProfilesRequest {
    /**
     * An array of IAM or federated user ARNs that identify the users to be described.
     */
    IamUserArns?: Strings;
  }
  export interface DescribeUserProfilesResult {
    /**
     * A Users object that describes the specified users.
     */
    UserProfiles?: UserProfiles;
  }
  export interface DescribeVolumesRequest {
    /**
     * The instance ID. If you use this parameter, DescribeVolumes returns descriptions of the volumes associated with the specified instance.
     */
    InstanceId?: String;
    /**
     * A stack ID. The action describes the stack's registered Amazon EBS volumes.
     */
    StackId?: String;
    /**
     * The RAID array ID. If you use this parameter, DescribeVolumes returns descriptions of the volumes associated with the specified RAID array.
     */
    RaidArrayId?: String;
    /**
     * Am array of volume IDs. If you use this parameter, DescribeVolumes returns descriptions of the specified volumes. Otherwise, it returns a description of every volume.
     */
    VolumeIds?: Strings;
  }
  export interface DescribeVolumesResult {
    /**
     * An array of volume IDs.
     */
    Volumes?: Volumes;
  }
  export interface DetachElasticLoadBalancerRequest {
    /**
     * The Elastic Load Balancing instance's name.
     */
    ElasticLoadBalancerName: String;
    /**
     * The ID of the layer that the Elastic Load Balancing instance is attached to.
     */
    LayerId: String;
  }
  export interface DisassociateElasticIpRequest {
    /**
     * The Elastic IP address.
     */
    ElasticIp: String;
  }
  export type Double = number;
  export interface EbsBlockDevice {
    /**
     * The snapshot ID.
     */
    SnapshotId?: String;
    /**
     * The number of I/O operations per second (IOPS) that the volume supports. For more information, see EbsBlockDevice.
     */
    Iops?: Integer;
    /**
     * The volume size, in GiB. For more information, see EbsBlockDevice.
     */
    VolumeSize?: Integer;
    /**
     * The volume type. gp2 for General Purpose (SSD) volumes, io1 for Provisioned IOPS (SSD) volumes, and standard for Magnetic volumes.
     */
    VolumeType?: VolumeType;
    /**
     * Whether the volume is deleted on instance termination.
     */
    DeleteOnTermination?: Boolean;
  }
  export interface EcsCluster {
    /**
     * The cluster's ARN.
     */
    EcsClusterArn?: String;
    /**
     * The cluster name.
     */
    EcsClusterName?: String;
    /**
     * The stack ID.
     */
    StackId?: String;
    /**
     * The time and date that the cluster was registered with the stack.
     */
    RegisteredAt?: DateTime;
  }
  export type EcsClusters = EcsCluster[];
  export interface ElasticIp {
    /**
     * The IP address.
     */
    Ip?: String;
    /**
     * The name.
     */
    Name?: String;
    /**
     * The domain.
     */
    Domain?: String;
    /**
     * The AWS region. For more information, see Regions and Endpoints.
     */
    Region?: String;
    /**
     * The ID of the instance that the address is attached to.
     */
    InstanceId?: String;
  }
  export type ElasticIps = ElasticIp[];
  export interface ElasticLoadBalancer {
    /**
     * The Elastic Load Balancing instance's name.
     */
    ElasticLoadBalancerName?: String;
    /**
     * The instance's AWS region.
     */
    Region?: String;
    /**
     * The instance's public DNS name.
     */
    DnsName?: String;
    /**
     * The ID of the stack that the instance is associated with.
     */
    StackId?: String;
    /**
     * The ID of the layer that the instance is attached to.
     */
    LayerId?: String;
    /**
     * The VPC ID.
     */
    VpcId?: String;
    /**
     * A list of Availability Zones.
     */
    AvailabilityZones?: Strings;
    /**
     * A list of subnet IDs, if the stack is running in a VPC.
     */
    SubnetIds?: Strings;
    /**
     * A list of the EC2 instances that the Elastic Load Balancing instance is managing traffic for.
     */
    Ec2InstanceIds?: Strings;
  }
  export type ElasticLoadBalancers = ElasticLoadBalancer[];
  export interface EnvironmentVariable {
    /**
     * (Required) The environment variable's name, which can consist of up to 64 characters and must be specified. The name can contain upper- and lowercase letters, numbers, and underscores (_), but it must start with a letter or underscore.
     */
    Key: String;
    /**
     * (Optional) The environment variable's value, which can be left empty. If you specify a value, it can contain up to 256 characters, which must all be printable.
     */
    Value: String;
    /**
     * (Optional) Whether the variable's value will be returned by the DescribeApps action. To conceal an environment variable's value, set Secure to true. DescribeApps then returns *****FILTERED***** instead of the actual value. The default value for Secure is false. 
     */
    Secure?: Boolean;
  }
  export type EnvironmentVariables = EnvironmentVariable[];
  export interface GetHostnameSuggestionRequest {
    /**
     * The layer ID.
     */
    LayerId: String;
  }
  export interface GetHostnameSuggestionResult {
    /**
     * The layer ID.
     */
    LayerId?: String;
    /**
     * The generated host name.
     */
    Hostname?: String;
  }
  export interface GrantAccessRequest {
    /**
     * The instance's AWS OpsWorks Stacks ID.
     */
    InstanceId: String;
    /**
     * The length of time (in minutes) that the grant is valid. When the grant expires at the end of this period, the user will no longer be able to use the credentials to log in. If the user is logged in at the time, he or she automatically will be logged out.
     */
    ValidForInMinutes?: ValidForInMinutes;
  }
  export interface GrantAccessResult {
    /**
     * A TemporaryCredential object that contains the data needed to log in to the instance by RDP clients, such as the Microsoft Remote Desktop Connection.
     */
    TemporaryCredential?: TemporaryCredential;
  }
  export type Hour = string;
  export interface Instance {
    /**
     * The agent version. This parameter is set to INHERIT if the instance inherits the default stack setting or to a a version number for a fixed agent version.
     */
    AgentVersion?: String;
    /**
     * A custom AMI ID to be used to create the instance. For more information, see Instances 
     */
    AmiId?: String;
    /**
     * The instance architecture: "i386" or "x86_64".
     */
    Architecture?: Architecture;
    Arn?: String;
    /**
     * For load-based or time-based instances, the type.
     */
    AutoScalingType?: AutoScalingType;
    /**
     * The instance Availability Zone. For more information, see Regions and Endpoints.
     */
    AvailabilityZone?: String;
    /**
     * An array of BlockDeviceMapping objects that specify the instance's block device mappings.
     */
    BlockDeviceMappings?: BlockDeviceMappings;
    /**
     * The time that the instance was created.
     */
    CreatedAt?: DateTime;
    /**
     * Whether this is an Amazon EBS-optimized instance.
     */
    EbsOptimized?: Boolean;
    /**
     * The ID of the associated Amazon EC2 instance.
     */
    Ec2InstanceId?: String;
    /**
     * For container instances, the Amazon ECS cluster's ARN.
     */
    EcsClusterArn?: String;
    /**
     * For container instances, the instance's ARN.
     */
    EcsContainerInstanceArn?: String;
    /**
     * The instance Elastic IP address .
     */
    ElasticIp?: String;
    /**
     * The instance host name.
     */
    Hostname?: String;
    /**
     * For registered instances, the infrastructure class: ec2 or on-premises.
     */
    InfrastructureClass?: String;
    /**
     * Whether to install operating system and package updates when the instance boots. The default value is true. If this value is set to false, you must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or by manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   We strongly recommend using the default value of true, to ensure that your instances have the latest security updates. 
     */
    InstallUpdatesOnBoot?: Boolean;
    /**
     * The instance ID.
     */
    InstanceId?: String;
    /**
     * The ARN of the instance's IAM profile. For more information about IAM ARNs, see Using Identifiers.
     */
    InstanceProfileArn?: String;
    /**
     * The instance type, such as t2.micro.
     */
    InstanceType?: String;
    /**
     * The ID of the last service error. For more information, call DescribeServiceErrors.
     */
    LastServiceErrorId?: String;
    /**
     * An array containing the instance layer IDs.
     */
    LayerIds?: Strings;
    /**
     * The instance's operating system.
     */
    Os?: String;
    /**
     * The instance's platform.
     */
    Platform?: String;
    /**
     * The instance's private DNS name.
     */
    PrivateDns?: String;
    /**
     * The instance's private IP address.
     */
    PrivateIp?: String;
    /**
     * The instance public DNS name.
     */
    PublicDns?: String;
    /**
     * The instance public IP address.
     */
    PublicIp?: String;
    /**
     * For registered instances, who performed the registration.
     */
    RegisteredBy?: String;
    /**
     * The instance's reported AWS OpsWorks Stacks agent version.
     */
    ReportedAgentVersion?: String;
    /**
     * For registered instances, the reported operating system.
     */
    ReportedOs?: ReportedOs;
    /**
     * The instance's root device type. For more information, see Storage for the Root Device.
     */
    RootDeviceType?: RootDeviceType;
    /**
     * The root device volume ID.
     */
    RootDeviceVolumeId?: String;
    /**
     * An array containing the instance security group IDs.
     */
    SecurityGroupIds?: Strings;
    /**
     * The SSH key's Deep Security Agent (DSA) fingerprint.
     */
    SshHostDsaKeyFingerprint?: String;
    /**
     * The SSH key's RSA fingerprint.
     */
    SshHostRsaKeyFingerprint?: String;
    /**
     * The instance's Amazon EC2 key-pair name.
     */
    SshKeyName?: String;
    /**
     * The stack ID.
     */
    StackId?: String;
    /**
     * The instance status:    booting     connection_lost     online     pending     rebooting     requested     running_setup     setup_failed     shutting_down     start_failed     stop_failed     stopped     stopping     terminated     terminating   
     */
    Status?: String;
    /**
     * The instance's subnet ID; applicable only if the stack is running in a VPC.
     */
    SubnetId?: String;
    /**
     * The instance's tenancy option, such as dedicated or host.
     */
    Tenancy?: String;
    /**
     * The instance's virtualization type: paravirtual or hvm.
     */
    VirtualizationType?: VirtualizationType;
  }
  export interface InstanceIdentity {
    /**
     * A JSON document that contains the metadata.
     */
    Document?: String;
    /**
     * A signature that can be used to verify the document's accuracy and authenticity.
     */
    Signature?: String;
  }
  export type Instances = Instance[];
  export interface InstancesCount {
    /**
     * The number of instances in the Assigning state.
     */
    Assigning?: Integer;
    /**
     * The number of instances with booting status.
     */
    Booting?: Integer;
    /**
     * The number of instances with connection_lost status.
     */
    ConnectionLost?: Integer;
    /**
     * The number of instances in the Deregistering state.
     */
    Deregistering?: Integer;
    /**
     * The number of instances with online status.
     */
    Online?: Integer;
    /**
     * The number of instances with pending status.
     */
    Pending?: Integer;
    /**
     * The number of instances with rebooting status.
     */
    Rebooting?: Integer;
    /**
     * The number of instances in the Registered state.
     */
    Registered?: Integer;
    /**
     * The number of instances in the Registering state.
     */
    Registering?: Integer;
    /**
     * The number of instances with requested status.
     */
    Requested?: Integer;
    /**
     * The number of instances with running_setup status.
     */
    RunningSetup?: Integer;
    /**
     * The number of instances with setup_failed status.
     */
    SetupFailed?: Integer;
    /**
     * The number of instances with shutting_down status.
     */
    ShuttingDown?: Integer;
    /**
     * The number of instances with start_failed status.
     */
    StartFailed?: Integer;
    /**
     * The number of instances with stopped status.
     */
    Stopped?: Integer;
    /**
     * The number of instances with stopping status.
     */
    Stopping?: Integer;
    /**
     * The number of instances with terminated status.
     */
    Terminated?: Integer;
    /**
     * The number of instances with terminating status.
     */
    Terminating?: Integer;
    /**
     * The number of instances in the Unassigning state.
     */
    Unassigning?: Integer;
  }
  export type Integer = number;
  export interface Layer {
    Arn?: String;
    /**
     * The layer stack ID.
     */
    StackId?: String;
    /**
     * The layer ID.
     */
    LayerId?: String;
    /**
     * The layer type.
     */
    Type?: LayerType;
    /**
     * The layer name.
     */
    Name?: String;
    /**
     * The layer short name.
     */
    Shortname?: String;
    /**
     * The layer attributes. For the HaproxyStatsPassword, MysqlRootPassword, and GangliaPassword attributes, AWS OpsWorks Stacks returns *****FILTERED***** instead of the actual value For an ECS Cluster layer, AWS OpsWorks Stacks the EcsClusterArn attribute is set to the cluster's ARN.
     */
    Attributes?: LayerAttributes;
    /**
     * The Amazon CloudWatch Logs configuration settings for the layer.
     */
    CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
    /**
     * The ARN of the default IAM profile to be used for the layer's EC2 instances. For more information about IAM ARNs, see Using Identifiers.
     */
    CustomInstanceProfileArn?: String;
    /**
     * A JSON formatted string containing the layer's custom stack configuration and deployment attributes.
     */
    CustomJson?: String;
    /**
     * An array containing the layer's custom security group IDs.
     */
    CustomSecurityGroupIds?: Strings;
    /**
     * An array containing the layer's security group names.
     */
    DefaultSecurityGroupNames?: Strings;
    /**
     * An array of Package objects that describe the layer's packages.
     */
    Packages?: Strings;
    /**
     * A VolumeConfigurations object that describes the layer's Amazon EBS volumes.
     */
    VolumeConfigurations?: VolumeConfigurations;
    /**
     * Whether auto healing is disabled for the layer.
     */
    EnableAutoHealing?: Boolean;
    /**
     * Whether to automatically assign an Elastic IP address to the layer's instances. For more information, see How to Edit a Layer.
     */
    AutoAssignElasticIps?: Boolean;
    /**
     * For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer's instances. For more information, see How to Edit a Layer.
     */
    AutoAssignPublicIps?: Boolean;
    DefaultRecipes?: Recipes;
    /**
     * A LayerCustomRecipes object that specifies the layer's custom recipes.
     */
    CustomRecipes?: Recipes;
    /**
     * Date when the layer was created.
     */
    CreatedAt?: DateTime;
    /**
     * Whether to install operating system and package updates when the instance boots. The default value is true. If this value is set to false, you must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   We strongly recommend using the default value of true, to ensure that your instances have the latest security updates. 
     */
    InstallUpdatesOnBoot?: Boolean;
    /**
     * Whether the layer uses Amazon EBS-optimized instances.
     */
    UseEbsOptimizedInstances?: Boolean;
    /**
     * A LifeCycleEventConfiguration object that specifies the Shutdown event configuration.
     */
    LifecycleEventConfiguration?: LifecycleEventConfiguration;
  }
  export type LayerAttributes = {[key: string]: String};
  export type LayerAttributesKeys = "EcsClusterArn"|"EnableHaproxyStats"|"HaproxyStatsUrl"|"HaproxyStatsUser"|"HaproxyStatsPassword"|"HaproxyHealthCheckUrl"|"HaproxyHealthCheckMethod"|"MysqlRootPassword"|"MysqlRootPasswordUbiquitous"|"GangliaUrl"|"GangliaUser"|"GangliaPassword"|"MemcachedMemory"|"NodejsVersion"|"RubyVersion"|"RubygemsVersion"|"ManageBundler"|"BundlerVersion"|"RailsStack"|"PassengerVersion"|"Jvm"|"JvmVersion"|"JvmOptions"|"JavaAppServer"|"JavaAppServerVersion"|string;
  export type LayerType = "aws-flow-ruby"|"ecs-cluster"|"java-app"|"lb"|"web"|"php-app"|"rails-app"|"nodejs-app"|"memcached"|"db-master"|"monitoring-master"|"custom"|string;
  export type Layers = Layer[];
  export interface LifecycleEventConfiguration {
    /**
     * A ShutdownEventConfiguration object that specifies the Shutdown event configuration.
     */
    Shutdown?: ShutdownEventConfiguration;
  }
  export interface ListTagsRequest {
    /**
     * The stack or layer's Amazon Resource Number (ARN).
     */
    ResourceArn: ResourceArn;
    /**
     * Do not use. A validation exception occurs if you add a MaxResults parameter to a ListTagsRequest call. 
     */
    MaxResults?: MaxResults;
    /**
     * Do not use. A validation exception occurs if you add a NextToken parameter to a ListTagsRequest call. 
     */
    NextToken?: NextToken;
  }
  export interface ListTagsResult {
    /**
     * A set of key-value pairs that contain tag keys and tag values that are attached to a stack or layer.
     */
    Tags?: Tags;
    /**
     * If a paginated request does not return all of the remaining results, this parameter is set to a token that you can assign to the request object's NextToken parameter to get the next set of results. If the previous paginated request returned all of the remaining results, this parameter is set to null. 
     */
    NextToken?: NextToken;
  }
  export interface LoadBasedAutoScalingConfiguration {
    /**
     * The layer ID.
     */
    LayerId?: String;
    /**
     * Whether load-based auto scaling is enabled for the layer.
     */
    Enable?: Boolean;
    /**
     * An AutoScalingThresholds object that describes the upscaling configuration, which defines how and when AWS OpsWorks Stacks increases the number of instances.
     */
    UpScaling?: AutoScalingThresholds;
    /**
     * An AutoScalingThresholds object that describes the downscaling configuration, which defines how and when AWS OpsWorks Stacks reduces the number of instances.
     */
    DownScaling?: AutoScalingThresholds;
  }
  export type LoadBasedAutoScalingConfigurations = LoadBasedAutoScalingConfiguration[];
  export type MaxResults = number;
  export type Minute = number;
  export type NextToken = string;
  export type Parameters = {[key: string]: String};
  export interface Permission {
    /**
     * A stack ID.
     */
    StackId?: String;
    /**
     * The Amazon Resource Name (ARN) for an AWS Identity and Access Management (IAM) role. For more information about IAM ARNs, see Using Identifiers.
     */
    IamUserArn?: String;
    /**
     * Whether the user can use SSH.
     */
    AllowSsh?: Boolean;
    /**
     * Whether the user can use sudo.
     */
    AllowSudo?: Boolean;
    /**
     * The user's permission level, which must be the following:    deny     show     deploy     manage     iam_only    For more information on the permissions associated with these levels, see Managing User Permissions 
     */
    Level?: String;
  }
  export type Permissions = Permission[];
  export interface RaidArray {
    /**
     * The array ID.
     */
    RaidArrayId?: String;
    /**
     * The instance ID.
     */
    InstanceId?: String;
    /**
     * The array name.
     */
    Name?: String;
    /**
     * The RAID level.
     */
    RaidLevel?: Integer;
    /**
     * The number of disks in the array.
     */
    NumberOfDisks?: Integer;
    /**
     * The array's size.
     */
    Size?: Integer;
    /**
     * The array's Linux device. For example /dev/mdadm0.
     */
    Device?: String;
    /**
     * The array's mount point.
     */
    MountPoint?: String;
    /**
     * The array's Availability Zone. For more information, see Regions and Endpoints.
     */
    AvailabilityZone?: String;
    /**
     * When the RAID array was created.
     */
    CreatedAt?: DateTime;
    /**
     * The stack ID.
     */
    StackId?: String;
    /**
     * The volume type, standard or PIOPS.
     */
    VolumeType?: String;
    /**
     * For PIOPS volumes, the IOPS per disk.
     */
    Iops?: Integer;
  }
  export type RaidArrays = RaidArray[];
  export interface RdsDbInstance {
    /**
     * The instance's ARN.
     */
    RdsDbInstanceArn?: String;
    /**
     * The DB instance identifier.
     */
    DbInstanceIdentifier?: String;
    /**
     * The master user name.
     */
    DbUser?: String;
    /**
     * AWS OpsWorks Stacks returns *****FILTERED***** instead of the actual value.
     */
    DbPassword?: String;
    /**
     * The instance's AWS region.
     */
    Region?: String;
    /**
     * The instance's address.
     */
    Address?: String;
    /**
     * The instance's database engine.
     */
    Engine?: String;
    /**
     * The ID of the stack with which the instance is registered.
     */
    StackId?: String;
    /**
     * Set to true if AWS OpsWorks Stacks is unable to discover the Amazon RDS instance. AWS OpsWorks Stacks attempts to discover the instance only once. If this value is set to true, you must deregister the instance, and then register it again.
     */
    MissingOnRds?: Boolean;
  }
  export type RdsDbInstances = RdsDbInstance[];
  export interface RebootInstanceRequest {
    /**
     * The instance ID.
     */
    InstanceId: String;
  }
  export interface Recipes {
    /**
     * An array of custom recipe names to be run following a setup event.
     */
    Setup?: Strings;
    /**
     * An array of custom recipe names to be run following a configure event.
     */
    Configure?: Strings;
    /**
     * An array of custom recipe names to be run following a deploy event.
     */
    Deploy?: Strings;
    /**
     * An array of custom recipe names to be run following a undeploy event.
     */
    Undeploy?: Strings;
    /**
     * An array of custom recipe names to be run following a shutdown event.
     */
    Shutdown?: Strings;
  }
  export interface RegisterEcsClusterRequest {
    /**
     * The cluster's ARN.
     */
    EcsClusterArn: String;
    /**
     * The stack ID.
     */
    StackId: String;
  }
  export interface RegisterEcsClusterResult {
    /**
     * The cluster's ARN.
     */
    EcsClusterArn?: String;
  }
  export interface RegisterElasticIpRequest {
    /**
     * The Elastic IP address.
     */
    ElasticIp: String;
    /**
     * The stack ID.
     */
    StackId: String;
  }
  export interface RegisterElasticIpResult {
    /**
     * The Elastic IP address.
     */
    ElasticIp?: String;
  }
  export interface RegisterInstanceRequest {
    /**
     * The ID of the stack that the instance is to be registered with.
     */
    StackId: String;
    /**
     * The instance's hostname.
     */
    Hostname?: String;
    /**
     * The instance's public IP address.
     */
    PublicIp?: String;
    /**
     * The instance's private IP address.
     */
    PrivateIp?: String;
    /**
     * The instances public RSA key. This key is used to encrypt communication between the instance and the service.
     */
    RsaPublicKey?: String;
    /**
     * The instances public RSA key fingerprint.
     */
    RsaPublicKeyFingerprint?: String;
    /**
     * An InstanceIdentity object that contains the instance's identity.
     */
    InstanceIdentity?: InstanceIdentity;
  }
  export interface RegisterInstanceResult {
    /**
     * The registered instance's AWS OpsWorks Stacks ID.
     */
    InstanceId?: String;
  }
  export interface RegisterRdsDbInstanceRequest {
    /**
     * The stack ID.
     */
    StackId: String;
    /**
     * The Amazon RDS instance's ARN.
     */
    RdsDbInstanceArn: String;
    /**
     * The database's master user name.
     */
    DbUser: String;
    /**
     * The database password.
     */
    DbPassword: String;
  }
  export interface RegisterVolumeRequest {
    /**
     * The Amazon EBS volume ID.
     */
    Ec2VolumeId?: String;
    /**
     * The stack ID.
     */
    StackId: String;
  }
  export interface RegisterVolumeResult {
    /**
     * The volume ID.
     */
    VolumeId?: String;
  }
  export interface ReportedOs {
    /**
     * The operating system family.
     */
    Family?: String;
    /**
     * The operating system name.
     */
    Name?: String;
    /**
     * The operating system version.
     */
    Version?: String;
  }
  export type ResourceArn = string;
  export type RootDeviceType = "ebs"|"instance-store"|string;
  export interface SelfUserProfile {
    /**
     * The user's IAM ARN.
     */
    IamUserArn?: String;
    /**
     * The user's name.
     */
    Name?: String;
    /**
     * The user's SSH user name.
     */
    SshUsername?: String;
    /**
     * The user's SSH public key.
     */
    SshPublicKey?: String;
  }
  export interface ServiceError {
    /**
     * The error ID.
     */
    ServiceErrorId?: String;
    /**
     * The stack ID.
     */
    StackId?: String;
    /**
     * The instance ID.
     */
    InstanceId?: String;
    /**
     * The error type.
     */
    Type?: String;
    /**
     * A message that describes the error.
     */
    Message?: String;
    /**
     * When the error occurred.
     */
    CreatedAt?: DateTime;
  }
  export type ServiceErrors = ServiceError[];
  export interface SetLoadBasedAutoScalingRequest {
    /**
     * The layer ID.
     */
    LayerId: String;
    /**
     * Enables load-based auto scaling for the layer.
     */
    Enable?: Boolean;
    /**
     * An AutoScalingThresholds object with the upscaling threshold configuration. If the load exceeds these thresholds for a specified amount of time, AWS OpsWorks Stacks starts a specified number of instances.
     */
    UpScaling?: AutoScalingThresholds;
    /**
     * An AutoScalingThresholds object with the downscaling threshold configuration. If the load falls below these thresholds for a specified amount of time, AWS OpsWorks Stacks stops a specified number of instances.
     */
    DownScaling?: AutoScalingThresholds;
  }
  export interface SetPermissionRequest {
    /**
     * The stack ID.
     */
    StackId: String;
    /**
     * The user's IAM ARN. This can also be a federated user's ARN.
     */
    IamUserArn: String;
    /**
     * The user is allowed to use SSH to communicate with the instance.
     */
    AllowSsh?: Boolean;
    /**
     * The user is allowed to use sudo to elevate privileges.
     */
    AllowSudo?: Boolean;
    /**
     * The user's permission level, which must be set to one of the following strings. You cannot set your own permissions level.    deny     show     deploy     manage     iam_only    For more information on the permissions associated with these levels, see Managing User Permissions.
     */
    Level?: String;
  }
  export interface SetTimeBasedAutoScalingRequest {
    /**
     * The instance ID.
     */
    InstanceId: String;
    /**
     * An AutoScalingSchedule with the instance schedule.
     */
    AutoScalingSchedule?: WeeklyAutoScalingSchedule;
  }
  export interface ShutdownEventConfiguration {
    /**
     * The time, in seconds, that AWS OpsWorks Stacks will wait after triggering a Shutdown event before shutting down an instance.
     */
    ExecutionTimeout?: Integer;
    /**
     * Whether to enable Elastic Load Balancing connection draining. For more information, see Connection Draining 
     */
    DelayUntilElbConnectionsDrained?: Boolean;
  }
  export interface Source {
    /**
     * The repository type.
     */
    Type?: SourceType;
    /**
     * The source URL. The following is an example of an Amazon S3 source URL: https://s3.amazonaws.com/opsworks-demo-bucket/opsworks_cookbook_demo.tar.gz.
     */
    Url?: String;
    /**
     * This parameter depends on the repository type.   For Amazon S3 bundles, set Username to the appropriate IAM access key ID.   For HTTP bundles, Git repositories, and Subversion repositories, set Username to the user name.  
     */
    Username?: String;
    /**
     * When included in a request, the parameter depends on the repository type.   For Amazon S3 bundles, set Password to the appropriate IAM secret access key.   For HTTP bundles and Subversion repositories, set Password to the password.   For more information on how to safely handle IAM credentials, see http://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html. In responses, AWS OpsWorks Stacks returns *****FILTERED***** instead of the actual value.
     */
    Password?: String;
    /**
     * In requests, the repository's SSH key. In responses, AWS OpsWorks Stacks returns *****FILTERED***** instead of the actual value.
     */
    SshKey?: String;
    /**
     * The application's version. AWS OpsWorks Stacks enables you to easily deploy new versions of an application. One of the simplest approaches is to have branches or revisions in your repository that represent different versions that can potentially be deployed.
     */
    Revision?: String;
  }
  export type SourceType = "git"|"svn"|"archive"|"s3"|string;
  export interface SslConfiguration {
    /**
     * The contents of the certificate's domain.crt file.
     */
    Certificate: String;
    /**
     * The private key; the contents of the certificate's domain.kex file.
     */
    PrivateKey: String;
    /**
     * Optional. Can be used to specify an intermediate certificate authority key or client authentication.
     */
    Chain?: String;
  }
  export interface Stack {
    /**
     * The stack ID.
     */
    StackId?: String;
    /**
     * The stack name.
     */
    Name?: String;
    /**
     * The stack's ARN.
     */
    Arn?: String;
    /**
     * The stack AWS region, such as "ap-northeast-2". For more information about AWS regions, see Regions and Endpoints.
     */
    Region?: String;
    /**
     * The VPC ID; applicable only if the stack is running in a VPC.
     */
    VpcId?: String;
    /**
     * The stack's attributes.
     */
    Attributes?: StackAttributes;
    /**
     * The stack AWS Identity and Access Management (IAM) role.
     */
    ServiceRoleArn?: String;
    /**
     * The ARN of an IAM profile that is the default profile for all of the stack's EC2 instances. For more information about IAM ARNs, see Using Identifiers.
     */
    DefaultInstanceProfileArn?: String;
    /**
     * The stack's default operating system.
     */
    DefaultOs?: String;
    /**
     * The stack host name theme, with spaces replaced by underscores.
     */
    HostnameTheme?: String;
    /**
     * The stack's default Availability Zone. For more information, see Regions and Endpoints.
     */
    DefaultAvailabilityZone?: String;
    /**
     * The default subnet ID; applicable only if the stack is running in a VPC.
     */
    DefaultSubnetId?: String;
    /**
     * A JSON object that contains user-defined attributes to be added to the stack configuration and deployment attributes. You can use custom JSON to override the corresponding default stack configuration attribute values or to pass data to recipes. The string should be in the following format:  "{\"key1\": \"value1\", \"key2\": \"value2\",...}"  For more information on custom JSON, see Use Custom JSON to Modify the Stack Configuration Attributes.
     */
    CustomJson?: String;
    /**
     * The configuration manager.
     */
    ConfigurationManager?: StackConfigurationManager;
    /**
     * A ChefConfiguration object that specifies whether to enable Berkshelf and the Berkshelf version. For more information, see Create a New Stack.
     */
    ChefConfiguration?: ChefConfiguration;
    /**
     * Whether the stack uses custom cookbooks.
     */
    UseCustomCookbooks?: Boolean;
    /**
     * Whether the stack automatically associates the AWS OpsWorks Stacks built-in security groups with the stack's layers.
     */
    UseOpsworksSecurityGroups?: Boolean;
    CustomCookbooksSource?: Source;
    /**
     * A default Amazon EC2 key pair for the stack's instances. You can override this value when you create or update an instance.
     */
    DefaultSshKeyName?: String;
    /**
     * The date when the stack was created.
     */
    CreatedAt?: DateTime;
    /**
     * The default root device type. This value is used by default for all instances in the stack, but you can override it when you create an instance. For more information, see Storage for the Root Device.
     */
    DefaultRootDeviceType?: RootDeviceType;
    /**
     * The agent version. This parameter is set to LATEST for auto-update. or a version number for a fixed agent version.
     */
    AgentVersion?: String;
  }
  export type StackAttributes = {[key: string]: String};
  export type StackAttributesKeys = "Color"|string;
  export interface StackConfigurationManager {
    /**
     * The name. This parameter must be set to "Chef".
     */
    Name?: String;
    /**
     * The Chef version. This parameter must be set to 12, 11.10, or 11.4 for Linux stacks, and to 12.2 for Windows stacks. The default value for Linux stacks is 11.4.
     */
    Version?: String;
  }
  export interface StackSummary {
    /**
     * The stack ID.
     */
    StackId?: String;
    /**
     * The stack name.
     */
    Name?: String;
    /**
     * The stack's ARN.
     */
    Arn?: String;
    /**
     * The number of layers.
     */
    LayersCount?: Integer;
    /**
     * The number of apps.
     */
    AppsCount?: Integer;
    /**
     * An InstancesCount object with the number of instances in each status.
     */
    InstancesCount?: InstancesCount;
  }
  export type Stacks = Stack[];
  export interface StartInstanceRequest {
    /**
     * The instance ID.
     */
    InstanceId: String;
  }
  export interface StartStackRequest {
    /**
     * The stack ID.
     */
    StackId: String;
  }
  export interface StopInstanceRequest {
    /**
     * The instance ID.
     */
    InstanceId: String;
  }
  export interface StopStackRequest {
    /**
     * The stack ID.
     */
    StackId: String;
  }
  export type String = string;
  export type Strings = String[];
  export type Switch = string;
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export interface TagResourceRequest {
    /**
     * The stack or layer's Amazon Resource Number (ARN).
     */
    ResourceArn: ResourceArn;
    /**
     * A map that contains tag keys and tag values that are attached to a stack or layer.   The key cannot be empty.   The key can be a maximum of 127 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: + - = . _ : /    The value can be a maximum 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: + - = . _ : /    Leading and trailing white spaces are trimmed from both the key and value.   A maximum of 40 tags is allowed for any resource.  
     */
    Tags: Tags;
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export interface TemporaryCredential {
    /**
     * The user name.
     */
    Username?: String;
    /**
     * The password.
     */
    Password?: String;
    /**
     * The length of time (in minutes) that the grant is valid. When the grant expires, at the end of this period, the user will no longer be able to use the credentials to log in. If they are logged in at the time, they will be automatically logged out.
     */
    ValidForInMinutes?: Integer;
    /**
     * The instance's AWS OpsWorks Stacks ID.
     */
    InstanceId?: String;
  }
  export interface TimeBasedAutoScalingConfiguration {
    /**
     * The instance ID.
     */
    InstanceId?: String;
    /**
     * A WeeklyAutoScalingSchedule object with the instance schedule.
     */
    AutoScalingSchedule?: WeeklyAutoScalingSchedule;
  }
  export type TimeBasedAutoScalingConfigurations = TimeBasedAutoScalingConfiguration[];
  export interface UnassignInstanceRequest {
    /**
     * The instance ID.
     */
    InstanceId: String;
  }
  export interface UnassignVolumeRequest {
    /**
     * The volume ID.
     */
    VolumeId: String;
  }
  export interface UntagResourceRequest {
    /**
     * The stack or layer's Amazon Resource Number (ARN).
     */
    ResourceArn: ResourceArn;
    /**
     * A list of the keys of tags to be removed from a stack or layer.
     */
    TagKeys: TagKeys;
  }
  export interface UpdateAppRequest {
    /**
     * The app ID.
     */
    AppId: String;
    /**
     * The app name.
     */
    Name?: String;
    /**
     * A description of the app.
     */
    Description?: String;
    /**
     * The app's data sources.
     */
    DataSources?: DataSources;
    /**
     * The app type.
     */
    Type?: AppType;
    /**
     * A Source object that specifies the app repository.
     */
    AppSource?: Source;
    /**
     * The app's virtual host settings, with multiple domains separated by commas. For example: 'www.example.com, example.com' 
     */
    Domains?: Strings;
    /**
     * Whether SSL is enabled for the app.
     */
    EnableSsl?: Boolean;
    /**
     * An SslConfiguration object with the SSL configuration.
     */
    SslConfiguration?: SslConfiguration;
    /**
     * One or more user-defined key/value pairs to be added to the stack attributes.
     */
    Attributes?: AppAttributes;
    /**
     * An array of EnvironmentVariable objects that specify environment variables to be associated with the app. After you deploy the app, these variables are defined on the associated app server instances.For more information, see  Environment Variables. There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variables' names, values, and protected flag values - cannot exceed 10 KB (10240 Bytes). This limit should accommodate most if not all use cases. Exceeding it will cause an exception with the message, "Environment: is too large (maximum is 10KB)."  This parameter is supported only by Chef 11.10 stacks. If you have specified one or more environment variables, you cannot modify the stack's Chef version. 
     */
    Environment?: EnvironmentVariables;
  }
  export interface UpdateElasticIpRequest {
    /**
     * The address.
     */
    ElasticIp: String;
    /**
     * The new name.
     */
    Name?: String;
  }
  export interface UpdateInstanceRequest {
    /**
     * The instance ID.
     */
    InstanceId: String;
    /**
     * The instance's layer IDs.
     */
    LayerIds?: Strings;
    /**
     * The instance type, such as t2.micro. For a list of supported instance types, open the stack in the console, choose Instances, and choose + Instance. The Size list contains the currently supported types. For more information, see Instance Families and Types. The parameter values that you use to specify the various types are in the API Name column of the Available Instance Types table.
     */
    InstanceType?: String;
    /**
     * For load-based or time-based instances, the type. Windows stacks can use only time-based instances.
     */
    AutoScalingType?: AutoScalingType;
    /**
     * The instance host name.
     */
    Hostname?: String;
    /**
     * The instance's operating system, which must be set to one of the following. You cannot update an instance that is using a custom AMI.   A supported Linux operating system: An Amazon Linux version, such as Amazon Linux 2017.03, Amazon Linux 2016.09, Amazon Linux 2016.03, Amazon Linux 2015.09, or Amazon Linux 2015.03.   A supported Ubuntu operating system, such as Ubuntu 16.04 LTS, Ubuntu 14.04 LTS, or Ubuntu 12.04 LTS.    CentOS Linux 7     Red Hat Enterprise Linux 7    A supported Windows operating system, such as Microsoft Windows Server 2012 R2 Base, Microsoft Windows Server 2012 R2 with SQL Server Express, Microsoft Windows Server 2012 R2 with SQL Server Standard, or Microsoft Windows Server 2012 R2 with SQL Server Web.   For more information on the supported operating systems, see AWS OpsWorks Stacks Operating Systems. The default option is the current Amazon Linux version. If you set this parameter to Custom, you must use the AmiId parameter to specify the custom AMI that you want to use. For more information on the supported operating systems, see Operating Systems. For more information on how to use custom AMIs with OpsWorks, see Using Custom AMIs.  You can specify a different Linux operating system for the updated stack, but you cannot change from Linux to Windows or Windows to Linux. 
     */
    Os?: String;
    /**
     * The ID of the AMI that was used to create the instance. The value of this parameter must be the same AMI ID that the instance is already using. You cannot apply a new AMI to an instance by running UpdateInstance. UpdateInstance does not work on instances that are using custom AMIs. 
     */
    AmiId?: String;
    /**
     * The instance's Amazon EC2 key name.
     */
    SshKeyName?: String;
    /**
     * The instance architecture. Instance types do not necessarily support both architectures. For a list of the architectures that are supported by the different instance types, see Instance Families and Types.
     */
    Architecture?: Architecture;
    /**
     * Whether to install operating system and package updates when the instance boots. The default value is true. To control when updates are installed, set this value to false. You must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or by manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   We strongly recommend using the default value of true, to ensure that your instances have the latest security updates. 
     */
    InstallUpdatesOnBoot?: Boolean;
    /**
     * This property cannot be updated.
     */
    EbsOptimized?: Boolean;
    /**
     * The default AWS OpsWorks Stacks agent version. You have the following options:    INHERIT - Use the stack's default agent version setting.    version_number - Use the specified agent version. This value overrides the stack's default setting. To update the agent version, you must edit the instance configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the instance.   The default setting is INHERIT. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call DescribeAgentVersions. AgentVersion cannot be set to Chef 12.2.
     */
    AgentVersion?: String;
  }
  export interface UpdateLayerRequest {
    /**
     * The layer ID.
     */
    LayerId: String;
    /**
     * The layer name, which is used by the console.
     */
    Name?: String;
    /**
     * For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef. The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 200 characters and must be in the following format: /\A[a-z0-9\-\_\.]+\Z/. The built-in layers' short names are defined by AWS OpsWorks Stacks. For more information, see the Layer Reference 
     */
    Shortname?: String;
    /**
     * One or more user-defined key/value pairs to be added to the stack attributes.
     */
    Attributes?: LayerAttributes;
    /**
     * Specifies CloudWatch Logs configuration options for the layer. For more information, see CloudWatchLogsLogStream.
     */
    CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
    /**
     * The ARN of an IAM profile to be used for all of the layer's EC2 instances. For more information about IAM ARNs, see Using Identifiers.
     */
    CustomInstanceProfileArn?: String;
    /**
     * A JSON-formatted string containing custom stack configuration and deployment attributes to be installed on the layer's instances. For more information, see  Using Custom JSON. 
     */
    CustomJson?: String;
    /**
     * An array containing the layer's custom security group IDs.
     */
    CustomSecurityGroupIds?: Strings;
    /**
     * An array of Package objects that describe the layer's packages.
     */
    Packages?: Strings;
    /**
     * A VolumeConfigurations object that describes the layer's Amazon EBS volumes.
     */
    VolumeConfigurations?: VolumeConfigurations;
    /**
     * Whether to disable auto healing for the layer.
     */
    EnableAutoHealing?: Boolean;
    /**
     * Whether to automatically assign an Elastic IP address to the layer's instances. For more information, see How to Edit a Layer.
     */
    AutoAssignElasticIps?: Boolean;
    /**
     * For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer's instances. For more information, see How to Edit a Layer.
     */
    AutoAssignPublicIps?: Boolean;
    /**
     * A LayerCustomRecipes object that specifies the layer's custom recipes.
     */
    CustomRecipes?: Recipes;
    /**
     * Whether to install operating system and package updates when the instance boots. The default value is true. To control when updates are installed, set this value to false. You must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   We strongly recommend using the default value of true, to ensure that your instances have the latest security updates. 
     */
    InstallUpdatesOnBoot?: Boolean;
    /**
     * Whether to use Amazon EBS-optimized instances.
     */
    UseEbsOptimizedInstances?: Boolean;
    /**
     * 
     */
    LifecycleEventConfiguration?: LifecycleEventConfiguration;
  }
  export interface UpdateMyUserProfileRequest {
    /**
     * The user's SSH public key.
     */
    SshPublicKey?: String;
  }
  export interface UpdateRdsDbInstanceRequest {
    /**
     * The Amazon RDS instance's ARN.
     */
    RdsDbInstanceArn: String;
    /**
     * The master user name.
     */
    DbUser?: String;
    /**
     * The database password.
     */
    DbPassword?: String;
  }
  export interface UpdateStackRequest {
    /**
     * The stack ID.
     */
    StackId: String;
    /**
     * The stack's new name.
     */
    Name?: String;
    /**
     * One or more user-defined key-value pairs to be added to the stack attributes.
     */
    Attributes?: StackAttributes;
    /**
     * Do not use this parameter. You cannot update a stack's service role.
     */
    ServiceRoleArn?: String;
    /**
     * The ARN of an IAM profile that is the default profile for all of the stack's EC2 instances. For more information about IAM ARNs, see Using Identifiers.
     */
    DefaultInstanceProfileArn?: String;
    /**
     * The stack's operating system, which must be set to one of the following:   A supported Linux operating system: An Amazon Linux version, such as Amazon Linux 2017.03, Amazon Linux 2016.09, Amazon Linux 2016.03, Amazon Linux 2015.09, or Amazon Linux 2015.03.   A supported Ubuntu operating system, such as Ubuntu 16.04 LTS, Ubuntu 14.04 LTS, or Ubuntu 12.04 LTS.    CentOS Linux 7     Red Hat Enterprise Linux 7    A supported Windows operating system, such as Microsoft Windows Server 2012 R2 Base, Microsoft Windows Server 2012 R2 with SQL Server Express, Microsoft Windows Server 2012 R2 with SQL Server Standard, or Microsoft Windows Server 2012 R2 with SQL Server Web.   A custom AMI: Custom. You specify the custom AMI you want to use when you create instances. For more information on how to use custom AMIs with OpsWorks, see Using Custom AMIs.   The default option is the stack's current operating system. For more information on the supported operating systems, see AWS OpsWorks Stacks Operating Systems.
     */
    DefaultOs?: String;
    /**
     * The stack's new host name theme, with spaces replaced by underscores. The theme is used to generate host names for the stack's instances. By default, HostnameTheme is set to Layer_Dependent, which creates host names by appending integers to the layer's short name. The other themes are:    Baked_Goods     Clouds     Europe_Cities     Fruits     Greek_Deities     Legendary_creatures_from_Japan     Planets_and_Moons     Roman_Deities     Scottish_Islands     US_Cities     Wild_Cats    To obtain a generated host name, call GetHostNameSuggestion, which returns a host name based on the current theme.
     */
    HostnameTheme?: String;
    /**
     * The stack's default Availability Zone, which must be in the stack's region. For more information, see Regions and Endpoints. If you also specify a value for DefaultSubnetId, the subnet must be in the same zone. For more information, see CreateStack. 
     */
    DefaultAvailabilityZone?: String;
    /**
     * The stack's default VPC subnet ID. This parameter is required if you specify a value for the VpcId parameter. All instances are launched into this subnet unless you specify otherwise when you create the instance. If you also specify a value for DefaultAvailabilityZone, the subnet must be in that zone. For information on default values and when this parameter is required, see the VpcId parameter description. 
     */
    DefaultSubnetId?: String;
    /**
     * A string that contains user-defined, custom JSON. It can be used to override the corresponding default stack configuration JSON values or to pass data to recipes. The string should be in the following format:  "{\"key1\": \"value1\", \"key2\": \"value2\",...}"  For more information on custom JSON, see Use Custom JSON to Modify the Stack Configuration Attributes.
     */
    CustomJson?: String;
    /**
     * The configuration manager. When you update a stack, we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 11.4.
     */
    ConfigurationManager?: StackConfigurationManager;
    /**
     * A ChefConfiguration object that specifies whether to enable Berkshelf and the Berkshelf version on Chef 11.10 stacks. For more information, see Create a New Stack.
     */
    ChefConfiguration?: ChefConfiguration;
    /**
     * Whether the stack uses custom cookbooks.
     */
    UseCustomCookbooks?: Boolean;
    CustomCookbooksSource?: Source;
    /**
     * A default Amazon EC2 key-pair name. The default value is none. If you specify a key-pair name, AWS OpsWorks Stacks installs the public key on the instance and you can use the private key with an SSH client to log in to the instance. For more information, see  Using SSH to Communicate with an Instance and  Managing SSH Access. You can override this setting by specifying a different key pair, or no key pair, when you  create an instance. 
     */
    DefaultSshKeyName?: String;
    /**
     * The default root device type. This value is used by default for all instances in the stack, but you can override it when you create an instance. For more information, see Storage for the Root Device.
     */
    DefaultRootDeviceType?: RootDeviceType;
    /**
     * Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers. AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. UseOpsworksSecurityGroups allows you to provide your own custom security groups instead of using the built-in groups. UseOpsworksSecurityGroups has the following settings:    True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it, but you cannot delete the built-in security group.   False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate EC2 security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on. Custom security groups are required only for those layers that need custom settings.   For more information, see Create a New Stack.
     */
    UseOpsworksSecurityGroups?: Boolean;
    /**
     * The default AWS OpsWorks Stacks agent version. You have the following options:   Auto-update - Set this parameter to LATEST. AWS OpsWorks Stacks automatically installs new agent versions on the stack's instances as soon as they are available.   Fixed version - Set this parameter to your preferred agent version. To update the agent version, you must edit the stack configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the stack's instances.   The default setting is LATEST. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call DescribeAgentVersions. AgentVersion cannot be set to Chef 12.2.  You can also specify an agent version when you create or update an instance, which overrides the stack's default setting. 
     */
    AgentVersion?: String;
  }
  export interface UpdateUserProfileRequest {
    /**
     * The user IAM ARN. This can also be a federated user's ARN.
     */
    IamUserArn: String;
    /**
     * The user's SSH user name. The allowable characters are [a-z], [A-Z], [0-9], '-', and '_'. If the specified name includes other punctuation marks, AWS OpsWorks Stacks removes them. For example, my.name will be changed to myname. If you do not specify an SSH user name, AWS OpsWorks Stacks generates one from the IAM user name. 
     */
    SshUsername?: String;
    /**
     * The user's new SSH public key.
     */
    SshPublicKey?: String;
    /**
     * Whether users can specify their own SSH public key through the My Settings page. For more information, see Managing User Permissions.
     */
    AllowSelfManagement?: Boolean;
  }
  export interface UpdateVolumeRequest {
    /**
     * The volume ID.
     */
    VolumeId: String;
    /**
     * The new name.
     */
    Name?: String;
    /**
     * The new mount point.
     */
    MountPoint?: String;
  }
  export interface UserProfile {
    /**
     * The user's IAM ARN.
     */
    IamUserArn?: String;
    /**
     * The user's name.
     */
    Name?: String;
    /**
     * The user's SSH user name.
     */
    SshUsername?: String;
    /**
     * The user's SSH public key.
     */
    SshPublicKey?: String;
    /**
     * Whether users can specify their own SSH public key through the My Settings page. For more information, see Managing User Permissions.
     */
    AllowSelfManagement?: Boolean;
  }
  export type UserProfiles = UserProfile[];
  export type ValidForInMinutes = number;
  export type VirtualizationType = "paravirtual"|"hvm"|string;
  export interface Volume {
    /**
     * The volume ID.
     */
    VolumeId?: String;
    /**
     * The Amazon EC2 volume ID.
     */
    Ec2VolumeId?: String;
    /**
     * The volume name.
     */
    Name?: String;
    /**
     * The RAID array ID.
     */
    RaidArrayId?: String;
    /**
     * The instance ID.
     */
    InstanceId?: String;
    /**
     * The value returned by DescribeVolumes.
     */
    Status?: String;
    /**
     * The volume size.
     */
    Size?: Integer;
    /**
     * The device name.
     */
    Device?: String;
    /**
     * The volume mount point. For example, "/mnt/disk1".
     */
    MountPoint?: String;
    /**
     * The AWS region. For more information about AWS regions, see Regions and Endpoints.
     */
    Region?: String;
    /**
     * The volume Availability Zone. For more information, see Regions and Endpoints.
     */
    AvailabilityZone?: String;
    /**
     * The volume type, standard or PIOPS.
     */
    VolumeType?: String;
    /**
     * For PIOPS volumes, the IOPS per disk.
     */
    Iops?: Integer;
  }
  export interface VolumeConfiguration {
    /**
     * The volume mount point. For example "/dev/sdh".
     */
    MountPoint: String;
    /**
     * The volume RAID level.
     */
    RaidLevel?: Integer;
    /**
     * The number of disks in the volume.
     */
    NumberOfDisks: Integer;
    /**
     * The volume size.
     */
    Size: Integer;
    /**
     * The volume type:    standard - Magnetic    io1 - Provisioned IOPS (SSD)    gp2 - General Purpose (SSD)  
     */
    VolumeType?: String;
    /**
     * For PIOPS volumes, the IOPS per disk.
     */
    Iops?: Integer;
  }
  export type VolumeConfigurations = VolumeConfiguration[];
  export type VolumeType = "gp2"|"io1"|"standard"|string;
  export type Volumes = Volume[];
  export interface WeeklyAutoScalingSchedule {
    /**
     * The schedule for Monday.
     */
    Monday?: DailyAutoScalingSchedule;
    /**
     * The schedule for Tuesday.
     */
    Tuesday?: DailyAutoScalingSchedule;
    /**
     * The schedule for Wednesday.
     */
    Wednesday?: DailyAutoScalingSchedule;
    /**
     * The schedule for Thursday.
     */
    Thursday?: DailyAutoScalingSchedule;
    /**
     * The schedule for Friday.
     */
    Friday?: DailyAutoScalingSchedule;
    /**
     * The schedule for Saturday.
     */
    Saturday?: DailyAutoScalingSchedule;
    /**
     * The schedule for Sunday.
     */
    Sunday?: DailyAutoScalingSchedule;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2013-02-18"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the OpsWorks client.
   */
  export import Types = OpsWorks;
}
export = OpsWorks;
