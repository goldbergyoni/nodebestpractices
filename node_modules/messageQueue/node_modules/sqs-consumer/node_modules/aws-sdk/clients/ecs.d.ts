import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ECS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ECS.Types.ClientConfiguration)
  config: Config & ECS.Types.ClientConfiguration;
  /**
   * Creates a new Amazon ECS cluster. By default, your account receives a default cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the CreateCluster action.
   */
  createCluster(params: ECS.Types.CreateClusterRequest, callback?: (err: AWSError, data: ECS.Types.CreateClusterResponse) => void): Request<ECS.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates a new Amazon ECS cluster. By default, your account receives a default cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the CreateCluster action.
   */
  createCluster(callback?: (err: AWSError, data: ECS.Types.CreateClusterResponse) => void): Request<ECS.Types.CreateClusterResponse, AWSError>;
  /**
   * Runs and maintains a desired number of tasks from a specified task definition. If the number of tasks running in a service drops below desiredCount, Amazon ECS spawns another copy of the task in the specified cluster. To update an existing service, see UpdateService. In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind a load balancer. The load balancer distributes traffic across the tasks that are associated with the service. For more information, see Service Load Balancing in the Amazon EC2 Container Service Developer Guide. You can optionally specify a deployment configuration for your service. During a deployment (which is triggered by changing the task definition or the desired count of a service with an UpdateService operation), the service scheduler uses the minimumHealthyPercent and maximumPercent parameters to determine the deployment strategy. The minimumHealthyPercent represents a lower limit on the number of your service's tasks that must remain in the RUNNING state during a deployment, as a percentage of the desiredCount (rounded up to the nearest integer). This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a desiredCount of four tasks and a minimumHealthyPercent of 50%, the scheduler can stop two existing tasks to free up cluster capacity before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they are in the RUNNING state. Tasks for services that do use a load balancer are considered healthy if they are in the RUNNING state and the container instance they are hosted on is reported as healthy by the load balancer. The default value for minimumHealthyPercent is 50% in the console and 100% for the AWS CLI, the AWS SDKs, and the APIs. The maximumPercent parameter represents an upper limit on the number of your service's tasks that are allowed in the RUNNING or PENDING state during a deployment, as a percentage of the desiredCount (rounded down to the nearest integer). This parameter enables you to define the deployment batch size. For example, if your service has a desiredCount of four tasks and a maximumPercent value of 200%, the scheduler can start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximumPercent is 200%. When the service scheduler launches new tasks, it determines task placement in your cluster using the following logic:   Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).   By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy) with the placementStrategy parameter):   Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.   Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.    
   */
  createService(params: ECS.Types.CreateServiceRequest, callback?: (err: AWSError, data: ECS.Types.CreateServiceResponse) => void): Request<ECS.Types.CreateServiceResponse, AWSError>;
  /**
   * Runs and maintains a desired number of tasks from a specified task definition. If the number of tasks running in a service drops below desiredCount, Amazon ECS spawns another copy of the task in the specified cluster. To update an existing service, see UpdateService. In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind a load balancer. The load balancer distributes traffic across the tasks that are associated with the service. For more information, see Service Load Balancing in the Amazon EC2 Container Service Developer Guide. You can optionally specify a deployment configuration for your service. During a deployment (which is triggered by changing the task definition or the desired count of a service with an UpdateService operation), the service scheduler uses the minimumHealthyPercent and maximumPercent parameters to determine the deployment strategy. The minimumHealthyPercent represents a lower limit on the number of your service's tasks that must remain in the RUNNING state during a deployment, as a percentage of the desiredCount (rounded up to the nearest integer). This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a desiredCount of four tasks and a minimumHealthyPercent of 50%, the scheduler can stop two existing tasks to free up cluster capacity before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they are in the RUNNING state. Tasks for services that do use a load balancer are considered healthy if they are in the RUNNING state and the container instance they are hosted on is reported as healthy by the load balancer. The default value for minimumHealthyPercent is 50% in the console and 100% for the AWS CLI, the AWS SDKs, and the APIs. The maximumPercent parameter represents an upper limit on the number of your service's tasks that are allowed in the RUNNING or PENDING state during a deployment, as a percentage of the desiredCount (rounded down to the nearest integer). This parameter enables you to define the deployment batch size. For example, if your service has a desiredCount of four tasks and a maximumPercent value of 200%, the scheduler can start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximumPercent is 200%. When the service scheduler launches new tasks, it determines task placement in your cluster using the following logic:   Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).   By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy) with the placementStrategy parameter):   Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.   Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.    
   */
  createService(callback?: (err: AWSError, data: ECS.Types.CreateServiceResponse) => void): Request<ECS.Types.CreateServiceResponse, AWSError>;
  /**
   * Deletes one or more custom attributes from an Amazon ECS resource.
   */
  deleteAttributes(params: ECS.Types.DeleteAttributesRequest, callback?: (err: AWSError, data: ECS.Types.DeleteAttributesResponse) => void): Request<ECS.Types.DeleteAttributesResponse, AWSError>;
  /**
   * Deletes one or more custom attributes from an Amazon ECS resource.
   */
  deleteAttributes(callback?: (err: AWSError, data: ECS.Types.DeleteAttributesResponse) => void): Request<ECS.Types.DeleteAttributesResponse, AWSError>;
  /**
   * Deletes the specified cluster. You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with ListContainerInstances and deregister them with DeregisterContainerInstance.
   */
  deleteCluster(params: ECS.Types.DeleteClusterRequest, callback?: (err: AWSError, data: ECS.Types.DeleteClusterResponse) => void): Request<ECS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes the specified cluster. You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with ListContainerInstances and deregister them with DeregisterContainerInstance.
   */
  deleteCluster(callback?: (err: AWSError, data: ECS.Types.DeleteClusterResponse) => void): Request<ECS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you cannot delete it, and you must update the service to a desired task count of zero. For more information, see UpdateService.  When you delete a service, if there are still running tasks that require cleanup, the service status moves from ACTIVE to DRAINING, and the service is no longer visible in the console or in ListServices API operations. After the tasks have stopped, then the service status moves from DRAINING to INACTIVE. Services in the DRAINING or INACTIVE status can still be viewed with DescribeServices API operations; however, in the future, INACTIVE services may be cleaned up and purged from Amazon ECS record keeping, and DescribeServices API operations on those services will return a ServiceNotFoundException error. 
   */
  deleteService(params: ECS.Types.DeleteServiceRequest, callback?: (err: AWSError, data: ECS.Types.DeleteServiceResponse) => void): Request<ECS.Types.DeleteServiceResponse, AWSError>;
  /**
   * Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you cannot delete it, and you must update the service to a desired task count of zero. For more information, see UpdateService.  When you delete a service, if there are still running tasks that require cleanup, the service status moves from ACTIVE to DRAINING, and the service is no longer visible in the console or in ListServices API operations. After the tasks have stopped, then the service status moves from DRAINING to INACTIVE. Services in the DRAINING or INACTIVE status can still be viewed with DescribeServices API operations; however, in the future, INACTIVE services may be cleaned up and purged from Amazon ECS record keeping, and DescribeServices API operations on those services will return a ServiceNotFoundException error. 
   */
  deleteService(callback?: (err: AWSError, data: ECS.Types.DeleteServiceResponse) => void): Request<ECS.Types.DeleteServiceResponse, AWSError>;
  /**
   * Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks. If you intend to use the container instance for some other purpose after deregistration, you should stop all of the tasks running on the container instance before deregistration to avoid any orphaned tasks from consuming resources. Deregistering a container instance removes the instance from a cluster, but it does not terminate the EC2 instance; if you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.  If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents are not automatically deregistered when terminated). 
   */
  deregisterContainerInstance(params: ECS.Types.DeregisterContainerInstanceRequest, callback?: (err: AWSError, data: ECS.Types.DeregisterContainerInstanceResponse) => void): Request<ECS.Types.DeregisterContainerInstanceResponse, AWSError>;
  /**
   * Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks. If you intend to use the container instance for some other purpose after deregistration, you should stop all of the tasks running on the container instance before deregistration to avoid any orphaned tasks from consuming resources. Deregistering a container instance removes the instance from a cluster, but it does not terminate the EC2 instance; if you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.  If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents are not automatically deregistered when terminated). 
   */
  deregisterContainerInstance(callback?: (err: AWSError, data: ECS.Types.DeregisterContainerInstanceResponse) => void): Request<ECS.Types.DeregisterContainerInstanceResponse, AWSError>;
  /**
   * Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as INACTIVE. Existing tasks and services that reference an INACTIVE task definition continue to run without disruption. Existing services that reference an INACTIVE task definition can still scale up or down by modifying the service's desired count. You cannot use an INACTIVE task definition to run new tasks or create new services, and you cannot update an existing service to reference an INACTIVE task definition (although there may be up to a 10 minute window following deregistration where these restrictions have not yet taken effect).  At this time, INACTIVE task definitions remain discoverable in your account indefinitely; however, this behavior is subject to change in the future, so you should not rely on INACTIVE task definitions persisting beyond the life cycle of any associated tasks and services. 
   */
  deregisterTaskDefinition(params: ECS.Types.DeregisterTaskDefinitionRequest, callback?: (err: AWSError, data: ECS.Types.DeregisterTaskDefinitionResponse) => void): Request<ECS.Types.DeregisterTaskDefinitionResponse, AWSError>;
  /**
   * Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as INACTIVE. Existing tasks and services that reference an INACTIVE task definition continue to run without disruption. Existing services that reference an INACTIVE task definition can still scale up or down by modifying the service's desired count. You cannot use an INACTIVE task definition to run new tasks or create new services, and you cannot update an existing service to reference an INACTIVE task definition (although there may be up to a 10 minute window following deregistration where these restrictions have not yet taken effect).  At this time, INACTIVE task definitions remain discoverable in your account indefinitely; however, this behavior is subject to change in the future, so you should not rely on INACTIVE task definitions persisting beyond the life cycle of any associated tasks and services. 
   */
  deregisterTaskDefinition(callback?: (err: AWSError, data: ECS.Types.DeregisterTaskDefinitionResponse) => void): Request<ECS.Types.DeregisterTaskDefinitionResponse, AWSError>;
  /**
   * Describes one or more of your clusters.
   */
  describeClusters(params: ECS.Types.DescribeClustersRequest, callback?: (err: AWSError, data: ECS.Types.DescribeClustersResponse) => void): Request<ECS.Types.DescribeClustersResponse, AWSError>;
  /**
   * Describes one or more of your clusters.
   */
  describeClusters(callback?: (err: AWSError, data: ECS.Types.DescribeClustersResponse) => void): Request<ECS.Types.DescribeClustersResponse, AWSError>;
  /**
   * Describes Amazon EC2 Container Service container instances. Returns metadata about registered and remaining resources on each container instance requested.
   */
  describeContainerInstances(params: ECS.Types.DescribeContainerInstancesRequest, callback?: (err: AWSError, data: ECS.Types.DescribeContainerInstancesResponse) => void): Request<ECS.Types.DescribeContainerInstancesResponse, AWSError>;
  /**
   * Describes Amazon EC2 Container Service container instances. Returns metadata about registered and remaining resources on each container instance requested.
   */
  describeContainerInstances(callback?: (err: AWSError, data: ECS.Types.DescribeContainerInstancesResponse) => void): Request<ECS.Types.DescribeContainerInstancesResponse, AWSError>;
  /**
   * Describes the specified services running in your cluster.
   */
  describeServices(params: ECS.Types.DescribeServicesRequest, callback?: (err: AWSError, data: ECS.Types.DescribeServicesResponse) => void): Request<ECS.Types.DescribeServicesResponse, AWSError>;
  /**
   * Describes the specified services running in your cluster.
   */
  describeServices(callback?: (err: AWSError, data: ECS.Types.DescribeServicesResponse) => void): Request<ECS.Types.DescribeServicesResponse, AWSError>;
  /**
   * Describes a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family.  You can only describe INACTIVE task definitions while an active task or service references them. 
   */
  describeTaskDefinition(params: ECS.Types.DescribeTaskDefinitionRequest, callback?: (err: AWSError, data: ECS.Types.DescribeTaskDefinitionResponse) => void): Request<ECS.Types.DescribeTaskDefinitionResponse, AWSError>;
  /**
   * Describes a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family.  You can only describe INACTIVE task definitions while an active task or service references them. 
   */
  describeTaskDefinition(callback?: (err: AWSError, data: ECS.Types.DescribeTaskDefinitionResponse) => void): Request<ECS.Types.DescribeTaskDefinitionResponse, AWSError>;
  /**
   * Describes a specified task or tasks.
   */
  describeTasks(params: ECS.Types.DescribeTasksRequest, callback?: (err: AWSError, data: ECS.Types.DescribeTasksResponse) => void): Request<ECS.Types.DescribeTasksResponse, AWSError>;
  /**
   * Describes a specified task or tasks.
   */
  describeTasks(callback?: (err: AWSError, data: ECS.Types.DescribeTasksResponse) => void): Request<ECS.Types.DescribeTasksResponse, AWSError>;
  /**
   *  This action is only used by the Amazon EC2 Container Service agent, and it is not intended for use outside of the agent.  Returns an endpoint for the Amazon EC2 Container Service agent to poll for updates.
   */
  discoverPollEndpoint(params: ECS.Types.DiscoverPollEndpointRequest, callback?: (err: AWSError, data: ECS.Types.DiscoverPollEndpointResponse) => void): Request<ECS.Types.DiscoverPollEndpointResponse, AWSError>;
  /**
   *  This action is only used by the Amazon EC2 Container Service agent, and it is not intended for use outside of the agent.  Returns an endpoint for the Amazon EC2 Container Service agent to poll for updates.
   */
  discoverPollEndpoint(callback?: (err: AWSError, data: ECS.Types.DiscoverPollEndpointResponse) => void): Request<ECS.Types.DiscoverPollEndpointResponse, AWSError>;
  /**
   * Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, ListAttributes returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value, for example, to see which container instances in a cluster are running a Linux AMI (ecs.os-type=linux). 
   */
  listAttributes(params: ECS.Types.ListAttributesRequest, callback?: (err: AWSError, data: ECS.Types.ListAttributesResponse) => void): Request<ECS.Types.ListAttributesResponse, AWSError>;
  /**
   * Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, ListAttributes returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value, for example, to see which container instances in a cluster are running a Linux AMI (ecs.os-type=linux). 
   */
  listAttributes(callback?: (err: AWSError, data: ECS.Types.ListAttributesResponse) => void): Request<ECS.Types.ListAttributesResponse, AWSError>;
  /**
   * Returns a list of existing clusters.
   */
  listClusters(params: ECS.Types.ListClustersRequest, callback?: (err: AWSError, data: ECS.Types.ListClustersResponse) => void): Request<ECS.Types.ListClustersResponse, AWSError>;
  /**
   * Returns a list of existing clusters.
   */
  listClusters(callback?: (err: AWSError, data: ECS.Types.ListClustersResponse) => void): Request<ECS.Types.ListClustersResponse, AWSError>;
  /**
   * Returns a list of container instances in a specified cluster. You can filter the results of a ListContainerInstances operation with cluster query language statements inside the filter parameter. For more information, see Cluster Query Language in the Amazon EC2 Container Service Developer Guide.
   */
  listContainerInstances(params: ECS.Types.ListContainerInstancesRequest, callback?: (err: AWSError, data: ECS.Types.ListContainerInstancesResponse) => void): Request<ECS.Types.ListContainerInstancesResponse, AWSError>;
  /**
   * Returns a list of container instances in a specified cluster. You can filter the results of a ListContainerInstances operation with cluster query language statements inside the filter parameter. For more information, see Cluster Query Language in the Amazon EC2 Container Service Developer Guide.
   */
  listContainerInstances(callback?: (err: AWSError, data: ECS.Types.ListContainerInstancesResponse) => void): Request<ECS.Types.ListContainerInstancesResponse, AWSError>;
  /**
   * Lists the services that are running in a specified cluster.
   */
  listServices(params: ECS.Types.ListServicesRequest, callback?: (err: AWSError, data: ECS.Types.ListServicesResponse) => void): Request<ECS.Types.ListServicesResponse, AWSError>;
  /**
   * Lists the services that are running in a specified cluster.
   */
  listServices(callback?: (err: AWSError, data: ECS.Types.ListServicesResponse) => void): Request<ECS.Types.ListServicesResponse, AWSError>;
  /**
   * Returns a list of task definition families that are registered to your account (which may include task definition families that no longer have any ACTIVE task definition revisions). You can filter out task definition families that do not contain any ACTIVE task definition revisions by setting the status parameter to ACTIVE. You can also filter the results with the familyPrefix parameter.
   */
  listTaskDefinitionFamilies(params: ECS.Types.ListTaskDefinitionFamiliesRequest, callback?: (err: AWSError, data: ECS.Types.ListTaskDefinitionFamiliesResponse) => void): Request<ECS.Types.ListTaskDefinitionFamiliesResponse, AWSError>;
  /**
   * Returns a list of task definition families that are registered to your account (which may include task definition families that no longer have any ACTIVE task definition revisions). You can filter out task definition families that do not contain any ACTIVE task definition revisions by setting the status parameter to ACTIVE. You can also filter the results with the familyPrefix parameter.
   */
  listTaskDefinitionFamilies(callback?: (err: AWSError, data: ECS.Types.ListTaskDefinitionFamiliesResponse) => void): Request<ECS.Types.ListTaskDefinitionFamiliesResponse, AWSError>;
  /**
   * Returns a list of task definitions that are registered to your account. You can filter the results by family name with the familyPrefix parameter or by status with the status parameter.
   */
  listTaskDefinitions(params: ECS.Types.ListTaskDefinitionsRequest, callback?: (err: AWSError, data: ECS.Types.ListTaskDefinitionsResponse) => void): Request<ECS.Types.ListTaskDefinitionsResponse, AWSError>;
  /**
   * Returns a list of task definitions that are registered to your account. You can filter the results by family name with the familyPrefix parameter or by status with the status parameter.
   */
  listTaskDefinitions(callback?: (err: AWSError, data: ECS.Types.ListTaskDefinitionsResponse) => void): Request<ECS.Types.ListTaskDefinitionsResponse, AWSError>;
  /**
   * Returns a list of tasks for a specified cluster. You can filter the results by family name, by a particular container instance, or by the desired status of the task with the family, containerInstance, and desiredStatus parameters. Recently-stopped tasks might appear in the returned results. Currently, stopped tasks appear in the returned results for at least one hour. 
   */
  listTasks(params: ECS.Types.ListTasksRequest, callback?: (err: AWSError, data: ECS.Types.ListTasksResponse) => void): Request<ECS.Types.ListTasksResponse, AWSError>;
  /**
   * Returns a list of tasks for a specified cluster. You can filter the results by family name, by a particular container instance, or by the desired status of the task with the family, containerInstance, and desiredStatus parameters. Recently-stopped tasks might appear in the returned results. Currently, stopped tasks appear in the returned results for at least one hour. 
   */
  listTasks(callback?: (err: AWSError, data: ECS.Types.ListTasksResponse) => void): Request<ECS.Types.ListTasksResponse, AWSError>;
  /**
   * Create or update an attribute on an Amazon ECS resource. If the attribute does not exist, it is created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use DeleteAttributes. For more information, see Attributes in the Amazon EC2 Container Service Developer Guide.
   */
  putAttributes(params: ECS.Types.PutAttributesRequest, callback?: (err: AWSError, data: ECS.Types.PutAttributesResponse) => void): Request<ECS.Types.PutAttributesResponse, AWSError>;
  /**
   * Create or update an attribute on an Amazon ECS resource. If the attribute does not exist, it is created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use DeleteAttributes. For more information, see Attributes in the Amazon EC2 Container Service Developer Guide.
   */
  putAttributes(callback?: (err: AWSError, data: ECS.Types.PutAttributesResponse) => void): Request<ECS.Types.PutAttributesResponse, AWSError>;
  /**
   *  This action is only used by the Amazon EC2 Container Service agent, and it is not intended for use outside of the agent.  Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.
   */
  registerContainerInstance(params: ECS.Types.RegisterContainerInstanceRequest, callback?: (err: AWSError, data: ECS.Types.RegisterContainerInstanceResponse) => void): Request<ECS.Types.RegisterContainerInstanceResponse, AWSError>;
  /**
   *  This action is only used by the Amazon EC2 Container Service agent, and it is not intended for use outside of the agent.  Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.
   */
  registerContainerInstance(callback?: (err: AWSError, data: ECS.Types.RegisterContainerInstanceResponse) => void): Request<ECS.Types.RegisterContainerInstanceResponse, AWSError>;
  /**
   * Registers a new task definition from the supplied family and containerDefinitions. Optionally, you can add data volumes to your containers with the volumes parameter. For more information about task definition parameters and defaults, see Amazon ECS Task Definitions in the Amazon EC2 Container Service Developer Guide. You can specify an IAM role for your task with the taskRoleArn parameter. When you specify an IAM role for a task, its containers can then use the latest versions of the AWS CLI or SDKs to make API requests to the AWS services that are specified in the IAM policy associated with the role. For more information, see IAM Roles for Tasks in the Amazon EC2 Container Service Developer Guide. You can specify a Docker networking mode for the containers in your task definition with the networkMode parameter. The available network modes correspond to those described in Network settings in the Docker run reference.
   */
  registerTaskDefinition(params: ECS.Types.RegisterTaskDefinitionRequest, callback?: (err: AWSError, data: ECS.Types.RegisterTaskDefinitionResponse) => void): Request<ECS.Types.RegisterTaskDefinitionResponse, AWSError>;
  /**
   * Registers a new task definition from the supplied family and containerDefinitions. Optionally, you can add data volumes to your containers with the volumes parameter. For more information about task definition parameters and defaults, see Amazon ECS Task Definitions in the Amazon EC2 Container Service Developer Guide. You can specify an IAM role for your task with the taskRoleArn parameter. When you specify an IAM role for a task, its containers can then use the latest versions of the AWS CLI or SDKs to make API requests to the AWS services that are specified in the IAM policy associated with the role. For more information, see IAM Roles for Tasks in the Amazon EC2 Container Service Developer Guide. You can specify a Docker networking mode for the containers in your task definition with the networkMode parameter. The available network modes correspond to those described in Network settings in the Docker run reference.
   */
  registerTaskDefinition(callback?: (err: AWSError, data: ECS.Types.RegisterTaskDefinitionResponse) => void): Request<ECS.Types.RegisterTaskDefinitionResponse, AWSError>;
  /**
   * Starts a new task using the specified task definition. You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see Scheduling Tasks in the Amazon EC2 Container Service Developer Guide. Alternatively, you can use StartTask to use your own scheduler or place tasks manually on specific container instances.
   */
  runTask(params: ECS.Types.RunTaskRequest, callback?: (err: AWSError, data: ECS.Types.RunTaskResponse) => void): Request<ECS.Types.RunTaskResponse, AWSError>;
  /**
   * Starts a new task using the specified task definition. You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see Scheduling Tasks in the Amazon EC2 Container Service Developer Guide. Alternatively, you can use StartTask to use your own scheduler or place tasks manually on specific container instances.
   */
  runTask(callback?: (err: AWSError, data: ECS.Types.RunTaskResponse) => void): Request<ECS.Types.RunTaskResponse, AWSError>;
  /**
   * Starts a new task from the specified task definition on the specified container instance or instances. Alternatively, you can use RunTask to place tasks for you. For more information, see Scheduling Tasks in the Amazon EC2 Container Service Developer Guide.
   */
  startTask(params: ECS.Types.StartTaskRequest, callback?: (err: AWSError, data: ECS.Types.StartTaskResponse) => void): Request<ECS.Types.StartTaskResponse, AWSError>;
  /**
   * Starts a new task from the specified task definition on the specified container instance or instances. Alternatively, you can use RunTask to place tasks for you. For more information, see Scheduling Tasks in the Amazon EC2 Container Service Developer Guide.
   */
  startTask(callback?: (err: AWSError, data: ECS.Types.StartTaskResponse) => void): Request<ECS.Types.StartTaskResponse, AWSError>;
  /**
   * Stops a running task. When StopTask is called on a task, the equivalent of docker stop is issued to the containers running in the task. This results in a SIGTERM and a default 30-second timeout, after which SIGKILL is sent and the containers are forcibly stopped. If the container handles the SIGTERM gracefully and exits within 30 seconds from receiving it, no SIGKILL is sent.  The default 30-second timeout can be configured on the Amazon ECS container agent with the ECS_CONTAINER_STOP_TIMEOUT variable. For more information, see Amazon ECS Container Agent Configuration in the Amazon EC2 Container Service Developer Guide. 
   */
  stopTask(params: ECS.Types.StopTaskRequest, callback?: (err: AWSError, data: ECS.Types.StopTaskResponse) => void): Request<ECS.Types.StopTaskResponse, AWSError>;
  /**
   * Stops a running task. When StopTask is called on a task, the equivalent of docker stop is issued to the containers running in the task. This results in a SIGTERM and a default 30-second timeout, after which SIGKILL is sent and the containers are forcibly stopped. If the container handles the SIGTERM gracefully and exits within 30 seconds from receiving it, no SIGKILL is sent.  The default 30-second timeout can be configured on the Amazon ECS container agent with the ECS_CONTAINER_STOP_TIMEOUT variable. For more information, see Amazon ECS Container Agent Configuration in the Amazon EC2 Container Service Developer Guide. 
   */
  stopTask(callback?: (err: AWSError, data: ECS.Types.StopTaskResponse) => void): Request<ECS.Types.StopTaskResponse, AWSError>;
  /**
   *  This action is only used by the Amazon EC2 Container Service agent, and it is not intended for use outside of the agent.  Sent to acknowledge that a container changed states.
   */
  submitContainerStateChange(params: ECS.Types.SubmitContainerStateChangeRequest, callback?: (err: AWSError, data: ECS.Types.SubmitContainerStateChangeResponse) => void): Request<ECS.Types.SubmitContainerStateChangeResponse, AWSError>;
  /**
   *  This action is only used by the Amazon EC2 Container Service agent, and it is not intended for use outside of the agent.  Sent to acknowledge that a container changed states.
   */
  submitContainerStateChange(callback?: (err: AWSError, data: ECS.Types.SubmitContainerStateChangeResponse) => void): Request<ECS.Types.SubmitContainerStateChangeResponse, AWSError>;
  /**
   *  This action is only used by the Amazon EC2 Container Service agent, and it is not intended for use outside of the agent.  Sent to acknowledge that a task changed states.
   */
  submitTaskStateChange(params: ECS.Types.SubmitTaskStateChangeRequest, callback?: (err: AWSError, data: ECS.Types.SubmitTaskStateChangeResponse) => void): Request<ECS.Types.SubmitTaskStateChangeResponse, AWSError>;
  /**
   *  This action is only used by the Amazon EC2 Container Service agent, and it is not intended for use outside of the agent.  Sent to acknowledge that a task changed states.
   */
  submitTaskStateChange(callback?: (err: AWSError, data: ECS.Types.SubmitTaskStateChangeResponse) => void): Request<ECS.Types.SubmitTaskStateChangeResponse, AWSError>;
  /**
   * Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent does not interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.  UpdateContainerAgent requires the Amazon ECS-optimized AMI or Amazon Linux with the ecs-init service installed and running. For help updating the Amazon ECS container agent on other operating systems, see Manually Updating the Amazon ECS Container Agent in the Amazon EC2 Container Service Developer Guide.
   */
  updateContainerAgent(params: ECS.Types.UpdateContainerAgentRequest, callback?: (err: AWSError, data: ECS.Types.UpdateContainerAgentResponse) => void): Request<ECS.Types.UpdateContainerAgentResponse, AWSError>;
  /**
   * Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent does not interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.  UpdateContainerAgent requires the Amazon ECS-optimized AMI or Amazon Linux with the ecs-init service installed and running. For help updating the Amazon ECS container agent on other operating systems, see Manually Updating the Amazon ECS Container Agent in the Amazon EC2 Container Service Developer Guide.
   */
  updateContainerAgent(callback?: (err: AWSError, data: ECS.Types.UpdateContainerAgentResponse) => void): Request<ECS.Types.UpdateContainerAgentResponse, AWSError>;
  /**
   * Modifies the status of an Amazon ECS container instance. You can change the status of a container instance to DRAINING to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.  When you set a container instance to DRAINING, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the PENDING state are stopped immediately. Service tasks on the container instance that are in the RUNNING state are stopped and replaced according the service's deployment configuration parameters, minimumHealthyPercent and maximumPercent. Note that you can change the deployment configuration of your service using UpdateService.   If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during task replacement. For example, desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they are in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they are in the RUNNING state and the container instance they are hosted on is reported as healthy by the load balancer.   The maximumPercent parameter represents an upper limit on the number of running tasks during task replacement, which enables you to define the replacement batch size. For example, if desiredCount of four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained (provided that the cluster resources required to do this are available). If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.   Any PENDING or RUNNING tasks that do not belong to a service are not affected; you must wait for them to finish or stop them manually. A container instance has completed draining when it has no more RUNNING tasks. You can verify this using ListTasks. When you set a container instance to ACTIVE, the Amazon ECS scheduler can begin scheduling tasks on the instance again.
   */
  updateContainerInstancesState(params: ECS.Types.UpdateContainerInstancesStateRequest, callback?: (err: AWSError, data: ECS.Types.UpdateContainerInstancesStateResponse) => void): Request<ECS.Types.UpdateContainerInstancesStateResponse, AWSError>;
  /**
   * Modifies the status of an Amazon ECS container instance. You can change the status of a container instance to DRAINING to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.  When you set a container instance to DRAINING, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the PENDING state are stopped immediately. Service tasks on the container instance that are in the RUNNING state are stopped and replaced according the service's deployment configuration parameters, minimumHealthyPercent and maximumPercent. Note that you can change the deployment configuration of your service using UpdateService.   If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during task replacement. For example, desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they are in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they are in the RUNNING state and the container instance they are hosted on is reported as healthy by the load balancer.   The maximumPercent parameter represents an upper limit on the number of running tasks during task replacement, which enables you to define the replacement batch size. For example, if desiredCount of four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained (provided that the cluster resources required to do this are available). If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.   Any PENDING or RUNNING tasks that do not belong to a service are not affected; you must wait for them to finish or stop them manually. A container instance has completed draining when it has no more RUNNING tasks. You can verify this using ListTasks. When you set a container instance to ACTIVE, the Amazon ECS scheduler can begin scheduling tasks on the instance again.
   */
  updateContainerInstancesState(callback?: (err: AWSError, data: ECS.Types.UpdateContainerInstancesStateResponse) => void): Request<ECS.Types.UpdateContainerInstancesStateResponse, AWSError>;
  /**
   * Modifies the desired count, deployment configuration, or task definition used in a service. You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new desiredCount parameter. You can use UpdateService to modify your task definition and deploy a new version of your service. You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, minimumHealthyPercent and maximumPercent, to determine the deployment strategy.   If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during a deployment. For example, if desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they are in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they are in the RUNNING state and the container instance they are hosted on is reported as healthy by the load balancer.   The maximumPercent parameter represents an upper limit on the number of running tasks during a deployment, which enables you to define the deployment batch size. For example, if desiredCount is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).   When UpdateService stops a task during a deployment, the equivalent of docker stop is issued to the containers running in the task. This results in a SIGTERM and a 30-second timeout, after which SIGKILL is sent and the containers are forcibly stopped. If the container handles the SIGTERM gracefully and exits within 30 seconds from receiving it, no SIGKILL is sent. When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic:   Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).   By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy):   Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.   Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.     When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic:    Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.   Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.  
   */
  updateService(params: ECS.Types.UpdateServiceRequest, callback?: (err: AWSError, data: ECS.Types.UpdateServiceResponse) => void): Request<ECS.Types.UpdateServiceResponse, AWSError>;
  /**
   * Modifies the desired count, deployment configuration, or task definition used in a service. You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new desiredCount parameter. You can use UpdateService to modify your task definition and deploy a new version of your service. You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, minimumHealthyPercent and maximumPercent, to determine the deployment strategy.   If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during a deployment. For example, if desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they are in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they are in the RUNNING state and the container instance they are hosted on is reported as healthy by the load balancer.   The maximumPercent parameter represents an upper limit on the number of running tasks during a deployment, which enables you to define the deployment batch size. For example, if desiredCount is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).   When UpdateService stops a task during a deployment, the equivalent of docker stop is issued to the containers running in the task. This results in a SIGTERM and a 30-second timeout, after which SIGKILL is sent and the containers are forcibly stopped. If the container handles the SIGTERM gracefully and exits within 30 seconds from receiving it, no SIGKILL is sent. When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic:   Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).   By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy):   Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.   Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.     When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic:    Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.   Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.  
   */
  updateService(callback?: (err: AWSError, data: ECS.Types.UpdateServiceResponse) => void): Request<ECS.Types.UpdateServiceResponse, AWSError>;
  /**
   * Waits for the tasksRunning state by periodically calling the underlying ECS.describeTasksoperation every 6 seconds (at most 100 times).
   */
  waitFor(state: "tasksRunning", params: ECS.Types.DescribeTasksRequest, callback?: (err: AWSError, data: ECS.Types.DescribeTasksResponse) => void): Request<ECS.Types.DescribeTasksResponse, AWSError>;
  /**
   * Waits for the tasksRunning state by periodically calling the underlying ECS.describeTasksoperation every 6 seconds (at most 100 times).
   */
  waitFor(state: "tasksRunning", callback?: (err: AWSError, data: ECS.Types.DescribeTasksResponse) => void): Request<ECS.Types.DescribeTasksResponse, AWSError>;
  /**
   * Waits for the tasksStopped state by periodically calling the underlying ECS.describeTasksoperation every 6 seconds (at most 100 times).
   */
  waitFor(state: "tasksStopped", params: ECS.Types.DescribeTasksRequest, callback?: (err: AWSError, data: ECS.Types.DescribeTasksResponse) => void): Request<ECS.Types.DescribeTasksResponse, AWSError>;
  /**
   * Waits for the tasksStopped state by periodically calling the underlying ECS.describeTasksoperation every 6 seconds (at most 100 times).
   */
  waitFor(state: "tasksStopped", callback?: (err: AWSError, data: ECS.Types.DescribeTasksResponse) => void): Request<ECS.Types.DescribeTasksResponse, AWSError>;
  /**
   * Waits for the servicesStable state by periodically calling the underlying ECS.describeServicesoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "servicesStable", params: ECS.Types.DescribeServicesRequest, callback?: (err: AWSError, data: ECS.Types.DescribeServicesResponse) => void): Request<ECS.Types.DescribeServicesResponse, AWSError>;
  /**
   * Waits for the servicesStable state by periodically calling the underlying ECS.describeServicesoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "servicesStable", callback?: (err: AWSError, data: ECS.Types.DescribeServicesResponse) => void): Request<ECS.Types.DescribeServicesResponse, AWSError>;
  /**
   * Waits for the servicesInactive state by periodically calling the underlying ECS.describeServicesoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "servicesInactive", params: ECS.Types.DescribeServicesRequest, callback?: (err: AWSError, data: ECS.Types.DescribeServicesResponse) => void): Request<ECS.Types.DescribeServicesResponse, AWSError>;
  /**
   * Waits for the servicesInactive state by periodically calling the underlying ECS.describeServicesoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "servicesInactive", callback?: (err: AWSError, data: ECS.Types.DescribeServicesResponse) => void): Request<ECS.Types.DescribeServicesResponse, AWSError>;
}
declare namespace ECS {
  export type AgentUpdateStatus = "PENDING"|"STAGING"|"STAGED"|"UPDATING"|"UPDATED"|"FAILED"|string;
  export interface Attribute {
    /**
     * The name of the attribute. Up to 128 letters (uppercase and lowercase), numbers, hyphens, underscores, and periods are allowed.
     */
    name: String;
    /**
     * The value of the attribute. Up to 128 letters (uppercase and lowercase), numbers, hyphens, underscores, periods, at signs (@), forward slashes, colons, and spaces are allowed.
     */
    value?: String;
    /**
     * The type of the target with which to attach the attribute. This parameter is required if you use the short form ID for a resource instead of the full Amazon Resource Name (ARN).
     */
    targetType?: TargetType;
    /**
     * The ID of the target. You can specify the short form ID for a resource or the full Amazon Resource Name (ARN).
     */
    targetId?: String;
  }
  export type Attributes = Attribute[];
  export type Boolean = boolean;
  export type BoxedBoolean = boolean;
  export type BoxedInteger = number;
  export interface Cluster {
    /**
     * The Amazon Resource Name (ARN) that identifies the cluster. The ARN contains the arn:aws:ecs namespace, followed by the region of the cluster, the AWS account ID of the cluster owner, the cluster namespace, and then the cluster name. For example, arn:aws:ecs:region:012345678910:cluster/test ..
     */
    clusterArn?: String;
    /**
     * A user-generated string that you use to identify your cluster.
     */
    clusterName?: String;
    /**
     * The status of the cluster. The valid values are ACTIVE or INACTIVE. ACTIVE indicates that you can register container instances with the cluster and the associated instances can accept tasks.
     */
    status?: String;
    /**
     * The number of container instances registered into the cluster.
     */
    registeredContainerInstancesCount?: Integer;
    /**
     * The number of tasks in the cluster that are in the RUNNING state.
     */
    runningTasksCount?: Integer;
    /**
     * The number of tasks in the cluster that are in the PENDING state.
     */
    pendingTasksCount?: Integer;
    /**
     * The number of services that are running on the cluster in an ACTIVE state. You can view these services with ListServices.
     */
    activeServicesCount?: Integer;
  }
  export type Clusters = Cluster[];
  export interface Container {
    /**
     * The Amazon Resource Name (ARN) of the container.
     */
    containerArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the task.
     */
    taskArn?: String;
    /**
     * The name of the container.
     */
    name?: String;
    /**
     * The last known status of the container.
     */
    lastStatus?: String;
    /**
     * The exit code returned from the container.
     */
    exitCode?: BoxedInteger;
    /**
     * A short (255 max characters) human-readable string to provide additional details about a running or stopped container.
     */
    reason?: String;
    /**
     * The network bindings associated with the container.
     */
    networkBindings?: NetworkBindings;
  }
  export interface ContainerDefinition {
    /**
     * The name of a container. If you are linking multiple containers together in a task definition, the name of one container can be entered in the links of another container to connect the containers. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. This parameter maps to name in the Create a container section of the Docker Remote API and the --name option to docker run. 
     */
    name?: String;
    /**
     * The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with either  repository-url/image:tag  or  repository-url/image@digest . Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to Image in the Create a container section of the Docker Remote API and the IMAGE parameter of docker run.   Images in Amazon ECR repositories can be specified by either using the full registry/repository:tag or registry/repository@digest. For example, 012345678910.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;:latest or 012345678910.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;@sha256:94afd1f2e64d908bc90dbca0035a5b567EXAMPLE.    Images in official repositories on Docker Hub use a single name (for example, ubuntu or mongo).   Images in other repositories on Docker Hub are qualified with an organization name (for example, amazon/amazon-ecs-agent).   Images in other online repositories are qualified further by a domain name (for example, quay.io/assemblyline/ubuntu).  
     */
    image?: String;
    /**
     * The number of cpu units reserved for the container. A container instance has 1,024 cpu units for every CPU core. This parameter specifies the minimum amount of CPU to reserve for a container, and containers share unallocated CPU units with other containers on the instance with the same ratio as their allocated amount. This parameter maps to CpuShares in the Create a container section of the Docker Remote API and the --cpu-shares option to docker run.  You can determine the number of CPU units that are available per EC2 instance type by multiplying the vCPUs listed for that instance type on the Amazon EC2 Instances detail page by 1,024.  For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that is the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task would be guaranteed a minimum of 512 CPU units when needed, and each container could float to higher CPU usage if the other container was not using it, but if both tasks were 100% active all of the time, they would be limited to 512 CPU units. The Docker daemon on the container instance uses the CPU value to calculate the relative CPU share ratios for running containers. For more information, see CPU share constraint in the Docker documentation. The minimum valid CPU share value that the Linux kernel allows is 2; however, the CPU parameter is not required, and you can use CPU values below 2 in your container definitions. For CPU values below 2 (including null), the behavior varies based on your Amazon ECS container agent version:    Agent versions less than or equal to 1.1.0: Null and zero CPU values are passed to Docker as 0, which Docker then converts to 1,024 CPU shares. CPU values of 1 are passed to Docker as 1, which the Linux kernel converts to 2 CPU shares.    Agent versions greater than or equal to 1.2.0: Null, zero, and CPU values of 1 are passed to Docker as 2.  
     */
    cpu?: Integer;
    /**
     * The hard limit (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed. This parameter maps to Memory in the Create a container section of the Docker Remote API and the --memory option to docker run. You must specify a non-zero integer for one or both of memory or memoryReservation in container definitions. If you specify both, memory must be greater than memoryReservation. If you specify memoryReservation, then that value is subtracted from the available memory resources for the container instance on which the container is placed; otherwise, the value of memory is used. The Docker daemon reserves a minimum of 4 MiB of memory for a container, so you should not specify fewer than 4 MiB of memory for your containers. 
     */
    memory?: BoxedInteger;
    /**
     * The soft limit (in MiB) of memory to reserve for the container. When system memory is under heavy contention, Docker attempts to keep the container memory to this soft limit; however, your container can consume more memory when it needs to, up to either the hard limit specified with the memory parameter (if applicable), or all of the available memory on the container instance, whichever comes first. This parameter maps to MemoryReservation in the Create a container section of the Docker Remote API and the --memory-reservation option to docker run. You must specify a non-zero integer for one or both of memory or memoryReservation in container definitions. If you specify both, memory must be greater than memoryReservation. If you specify memoryReservation, then that value is subtracted from the available memory resources for the container instance on which the container is placed; otherwise, the value of memory is used. For example, if your container normally uses 128 MiB of memory, but occasionally bursts to 256 MiB of memory for short periods of time, you can set a memoryReservation of 128 MiB, and a memory hard limit of 300 MiB. This configuration would allow the container to only reserve 128 MiB of memory from the remaining resources on the container instance, but also allow the container to consume more memory resources when needed.
     */
    memoryReservation?: BoxedInteger;
    /**
     * The link parameter allows containers to communicate with each other without the need for port mappings, using the name parameter and optionally, an alias for the link. This construct is analogous to name:alias in Docker links. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed for each name and alias. For more information on linking Docker containers, see https://docs.docker.com/engine/userguide/networking/default_network/dockerlinks/. This parameter maps to Links in the Create a container section of the Docker Remote API and the --link option to docker run.  Containers that are collocated on a single container instance may be able to communicate with each other without requiring links or host port mappings. Network isolation is achieved on the container instance using security groups and VPC settings. 
     */
    links?: StringList;
    /**
     * The list of port mappings for the container. Port mappings allow containers to access ports on the host container instance to send or receive traffic. This parameter maps to PortBindings in the Create a container section of the Docker Remote API and the --publish option to docker run. If the network mode of a task definition is set to none, then you cannot specify port mappings. If the network mode of a task definition is set to host, then host ports must either be undefined or they must match the container port in the port mapping.  After a task reaches the RUNNING status, manual and automatic host and container port assignments are visible in the Network Bindings section of a container description of a selected task in the Amazon ECS console, or the networkBindings section DescribeTasks responses. 
     */
    portMappings?: PortMappingList;
    /**
     * If the essential parameter of a container is marked as true, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the essential parameter of a container is marked as false, then its failure does not affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential. All tasks must have at least one essential container. If you have an application that is composed of multiple containers, you should group containers that are used for a common purpose into components, and separate the different components into multiple task definitions. For more information, see Application Architecture in the Amazon EC2 Container Service Developer Guide.
     */
    essential?: BoxedBoolean;
    /**
     *  Early versions of the Amazon ECS container agent do not properly handle entryPoint parameters. If you have problems using entryPoint, update your container agent or enter your commands and arguments as command array items instead.  The entry point that is passed to the container. This parameter maps to Entrypoint in the Create a container section of the Docker Remote API and the --entrypoint option to docker run. For more information, see https://docs.docker.com/engine/reference/builder/#entrypoint.
     */
    entryPoint?: StringList;
    /**
     * The command that is passed to the container. This parameter maps to Cmd in the Create a container section of the Docker Remote API and the COMMAND parameter to docker run. For more information, see https://docs.docker.com/engine/reference/builder/#cmd.
     */
    command?: StringList;
    /**
     * The environment variables to pass to a container. This parameter maps to Env in the Create a container section of the Docker Remote API and the --env option to docker run.  We do not recommend using plain text environment variables for sensitive information, such as credential data. 
     */
    environment?: EnvironmentVariables;
    /**
     * The mount points for data volumes in your container. This parameter maps to Volumes in the Create a container section of the Docker Remote API and the --volume option to docker run.
     */
    mountPoints?: MountPointList;
    /**
     * Data volumes to mount from another container. This parameter maps to VolumesFrom in the Create a container section of the Docker Remote API and the --volumes-from option to docker run.
     */
    volumesFrom?: VolumeFromList;
    /**
     * Linux-specific modifications that are applied to the container, such as Linux KernelCapabilities.
     */
    linuxParameters?: LinuxParameters;
    /**
     * The hostname to use for your container. This parameter maps to Hostname in the Create a container section of the Docker Remote API and the --hostname option to docker run.
     */
    hostname?: String;
    /**
     * The user name to use inside the container. This parameter maps to User in the Create a container section of the Docker Remote API and the --user option to docker run.
     */
    user?: String;
    /**
     * The working directory in which to run commands inside the container. This parameter maps to WorkingDir in the Create a container section of the Docker Remote API and the --workdir option to docker run.
     */
    workingDirectory?: String;
    /**
     * When this parameter is true, networking is disabled within the container. This parameter maps to NetworkDisabled in the Create a container section of the Docker Remote API.
     */
    disableNetworking?: BoxedBoolean;
    /**
     * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the root user). This parameter maps to Privileged in the Create a container section of the Docker Remote API and the --privileged option to docker run.
     */
    privileged?: BoxedBoolean;
    /**
     * When this parameter is true, the container is given read-only access to its root file system. This parameter maps to ReadonlyRootfs in the Create a container section of the Docker Remote API and the --read-only option to docker run.
     */
    readonlyRootFilesystem?: BoxedBoolean;
    /**
     * A list of DNS servers that are presented to the container. This parameter maps to Dns in the Create a container section of the Docker Remote API and the --dns option to docker run.
     */
    dnsServers?: StringList;
    /**
     * A list of DNS search domains that are presented to the container. This parameter maps to DnsSearch in the Create a container section of the Docker Remote API and the --dns-search option to docker run.
     */
    dnsSearchDomains?: StringList;
    /**
     * A list of hostnames and IP address mappings to append to the /etc/hosts file on the container. This parameter maps to ExtraHosts in the Create a container section of the Docker Remote API and the --add-host option to docker run.
     */
    extraHosts?: HostEntryList;
    /**
     * A list of strings to provide custom labels for SELinux and AppArmor multi-level security systems. This parameter maps to SecurityOpt in the Create a container section of the Docker Remote API and the --security-opt option to docker run.  The Amazon ECS container agent running on a container instance must register with the ECS_SELINUX_CAPABLE=true or ECS_APPARMOR_CAPABLE=true environment variables before containers placed on that instance can use these security options. For more information, see Amazon ECS Container Agent Configuration in the Amazon EC2 Container Service Developer Guide. 
     */
    dockerSecurityOptions?: StringList;
    /**
     * A key/value map of labels to add to the container. This parameter maps to Labels in the Create a container section of the Docker Remote API and the --label option to docker run. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log into your container instance and run the following command: sudo docker version | grep "Server API version" 
     */
    dockerLabels?: DockerLabelsMap;
    /**
     * A list of ulimits to set in the container. This parameter maps to Ulimits in the Create a container section of the Docker Remote API and the --ulimit option to docker run. Valid naming values are displayed in the Ulimit data type. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log into your container instance and run the following command: sudo docker version | grep "Server API version" 
     */
    ulimits?: UlimitList;
    /**
     * The log configuration specification for the container. This parameter maps to LogConfig in the Create a container section of the Docker Remote API and the --log-driver option to docker run. By default, containers use the same logging driver that the Docker daemon uses; however the container may use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see Configure logging drivers in the Docker documentation.  Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the LogConfiguration data type). Additional log drivers may be available in future releases of the Amazon ECS container agent.  This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log into your container instance and run the following command: sudo docker version | grep "Server API version"   The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the ECS_AVAILABLE_LOGGING_DRIVERS environment variable before containers placed on that instance can use these log configuration options. For more information, see Amazon ECS Container Agent Configuration in the Amazon EC2 Container Service Developer Guide. 
     */
    logConfiguration?: LogConfiguration;
  }
  export type ContainerDefinitions = ContainerDefinition[];
  export interface ContainerInstance {
    /**
     * The Amazon Resource Name (ARN) of the container instance. The ARN contains the arn:aws:ecs namespace, followed by the region of the container instance, the AWS account ID of the container instance owner, the container-instance namespace, and then the container instance ID. For example, arn:aws:ecs:region:aws_account_id:container-instance/container_instance_ID .
     */
    containerInstanceArn?: String;
    /**
     * The EC2 instance ID of the container instance.
     */
    ec2InstanceId?: String;
    /**
     * The version counter for the container instance. Every time a container instance experiences a change that triggers a CloudWatch event, the version counter is incremented. If you are replicating your Amazon ECS container instance state with CloudWatch events, you can compare the version of a container instance reported by the Amazon ECS APIs with the version reported in CloudWatch events for the container instance (inside the detail object) to verify that the version in your event stream is current.
     */
    version?: Long;
    /**
     * The version information for the Amazon ECS container agent and Docker daemon running on the container instance.
     */
    versionInfo?: VersionInfo;
    /**
     * For most resource types, this parameter describes the remaining resources of the container instance that are available for new tasks. For port resource types, this parameter describes the ports that are reserved by the Amazon ECS container agent and any containers that have reserved port mappings; any port that is not specified here is available for new tasks.
     */
    remainingResources?: Resources;
    /**
     * For most resource types, this parameter describes the registered resources on the container instance that are in use by current tasks. For port resource types, this parameter describes the ports that were reserved by the Amazon ECS container agent when it registered the container instance with Amazon ECS.
     */
    registeredResources?: Resources;
    /**
     * The status of the container instance. The valid values are ACTIVE, INACTIVE, or DRAINING. ACTIVE indicates that the container instance can accept tasks. DRAINING indicates that new tasks are not placed on the container instance and any service tasks running on the container instance are removed if possible. For more information, see Container Instance Draining in the Amazon EC2 Container Service Developer Guide.
     */
    status?: String;
    /**
     * This parameter returns true if the agent is actually connected to Amazon ECS. Registered instances with an agent that may be unhealthy or stopped return false, and instances without a connected agent cannot accept placement requests.
     */
    agentConnected?: Boolean;
    /**
     * The number of tasks on the container instance that are in the RUNNING status.
     */
    runningTasksCount?: Integer;
    /**
     * The number of tasks on the container instance that are in the PENDING status.
     */
    pendingTasksCount?: Integer;
    /**
     * The status of the most recent agent update. If an update has never been requested, this value is NULL.
     */
    agentUpdateStatus?: AgentUpdateStatus;
    /**
     * The attributes set for the container instance, either by the Amazon ECS container agent at instance registration or manually with the PutAttributes operation.
     */
    attributes?: Attributes;
    /**
     * The Unix timestamp for when the container instance was registered.
     */
    registeredAt?: Timestamp;
  }
  export type ContainerInstanceStatus = "ACTIVE"|"DRAINING"|string;
  export type ContainerInstances = ContainerInstance[];
  export interface ContainerOverride {
    /**
     * The name of the container that receives the override. This parameter is required if any override is specified.
     */
    name?: String;
    /**
     * The command to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.
     */
    command?: StringList;
    /**
     * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.
     */
    environment?: EnvironmentVariables;
    /**
     * The number of cpu units reserved for the container, instead of the default value from the task definition. You must also specify a container name.
     */
    cpu?: BoxedInteger;
    /**
     * The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.
     */
    memory?: BoxedInteger;
    /**
     * The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition. You must also specify a container name.
     */
    memoryReservation?: BoxedInteger;
  }
  export type ContainerOverrides = ContainerOverride[];
  export type Containers = Container[];
  export interface CreateClusterRequest {
    /**
     * The name of your cluster. If you do not specify a name for your cluster, you create a cluster named default. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
     */
    clusterName?: String;
  }
  export interface CreateClusterResponse {
    /**
     * The full description of your new cluster.
     */
    cluster?: Cluster;
  }
  export interface CreateServiceRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster on which to run your service. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The name of your service. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a region or across multiple regions.
     */
    serviceName: String;
    /**
     * The family and revision (family:revision) or full Amazon Resource Name (ARN) of the task definition to run in your service. If a revision is not specified, the latest ACTIVE revision is used.
     */
    taskDefinition: String;
    /**
     * A load balancer object representing the load balancer to use with your service. Currently, you are limited to one load balancer or target group per service. After you create a service, the load balancer name or target group ARN, container name, and container port specified in the service definition are immutable. For Classic Load Balancers, this object must contain the load balancer name, the container name (as it appears in a container definition), and the container port to access from the load balancer. When a task from this service is placed on a container instance, the container instance is registered with the load balancer specified here. For Application Load Balancers and Network Load Balancers, this object must contain the load balancer target group ARN, the container name (as it appears in a container definition), and the container port to access from the load balancer. When a task from this service is placed on a container instance, the container instance and port combination is registered as a target in the target group specified here.
     */
    loadBalancers?: LoadBalancers;
    /**
     * The number of instantiations of the specified task definition to place and keep running on your cluster.
     */
    desiredCount: BoxedInteger;
    /**
     * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. Up to 32 ASCII characters are allowed.
     */
    clientToken?: String;
    /**
     * The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service. If you specify the role parameter, you must also specify a load balancer object with the loadBalancers parameter. If your specified role has a path other than /, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name bar has a path of /foo/ then you would specify /foo/bar as the role name. For more information, see Friendly Names and Paths in the IAM User Guide.
     */
    role?: String;
    /**
     * Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
     */
    deploymentConfiguration?: DeploymentConfiguration;
    /**
     * An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints per task (this limit includes constraints in the task definition and those specified at run time). 
     */
    placementConstraints?: PlacementConstraints;
    /**
     * The placement strategy objects to use for tasks in your service. You can specify a maximum of 5 strategy rules per service.
     */
    placementStrategy?: PlacementStrategies;
  }
  export interface CreateServiceResponse {
    /**
     * The full description of your service following the create call.
     */
    service?: Service;
  }
  export interface DeleteAttributesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to delete attributes. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The attributes to delete from your resource. You can specify up to 10 attributes per request. For custom attributes, specify the attribute name and target ID, but do not specify the value. If you specify the target ID using the short form, you must also specify the target type.
     */
    attributes: Attributes;
  }
  export interface DeleteAttributesResponse {
    /**
     * A list of attribute objects that were successfully deleted from your resource.
     */
    attributes?: Attributes;
  }
  export interface DeleteClusterRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster to delete.
     */
    cluster: String;
  }
  export interface DeleteClusterResponse {
    /**
     * The full description of the deleted cluster.
     */
    cluster?: Cluster;
  }
  export interface DeleteServiceRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to delete. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The name of the service to delete.
     */
    service: String;
  }
  export interface DeleteServiceResponse {
    /**
     * The full description of the deleted service.
     */
    service?: Service;
  }
  export interface Deployment {
    /**
     * The ID of the deployment.
     */
    id?: String;
    /**
     * The status of the deployment. Valid values are PRIMARY (for the most recent deployment), ACTIVE (for previous deployments that still have tasks running, but are being replaced with the PRIMARY deployment), and INACTIVE (for deployments that have been completely replaced).
     */
    status?: String;
    /**
     * The most recent task definition that was specified for the service to use.
     */
    taskDefinition?: String;
    /**
     * The most recent desired count of tasks that was specified for the service to deploy or maintain.
     */
    desiredCount?: Integer;
    /**
     * The number of tasks in the deployment that are in the PENDING status.
     */
    pendingCount?: Integer;
    /**
     * The number of tasks in the deployment that are in the RUNNING status.
     */
    runningCount?: Integer;
    /**
     * The Unix timestamp for when the service was created.
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp for when the service was last updated.
     */
    updatedAt?: Timestamp;
  }
  export interface DeploymentConfiguration {
    /**
     * The upper limit (as a percentage of the service's desiredCount) of the number of tasks that are allowed in the RUNNING or PENDING state in a service during a deployment. The maximum number of tasks during a deployment is the desiredCount multiplied by maximumPercent/100, rounded down to the nearest integer value.
     */
    maximumPercent?: BoxedInteger;
    /**
     * The lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain in the RUNNING state in a service during a deployment. The minimum healthy tasks during a deployment is the desiredCount multiplied by minimumHealthyPercent/100, rounded up to the nearest integer value.
     */
    minimumHealthyPercent?: BoxedInteger;
  }
  export type Deployments = Deployment[];
  export interface DeregisterContainerInstanceRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to deregister. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The container instance ID or full Amazon Resource Name (ARN) of the container instance to deregister. The ARN contains the arn:aws:ecs namespace, followed by the region of the container instance, the AWS account ID of the container instance owner, the container-instance namespace, and then the container instance ID. For example, arn:aws:ecs:region:aws_account_id:container-instance/container_instance_ID .
     */
    containerInstance: String;
    /**
     * Forces the deregistration of the container instance. If you have tasks running on the container instance when you deregister it with the force option, these tasks remain running until you terminate the instance or the tasks stop through some other means, but they are orphaned (no longer monitored or accounted for by Amazon ECS). If an orphaned task on your container instance is part of an Amazon ECS service, then the service scheduler starts another copy of that task, on a different container instance if possible.  Any containers in orphaned service tasks that are registered with a Classic Load Balancer or an Application Load Balancer target group are deregistered, and they will begin connection draining according to the settings on the load balancer or target group.
     */
    force?: BoxedBoolean;
  }
  export interface DeregisterContainerInstanceResponse {
    /**
     * The container instance that was deregistered.
     */
    containerInstance?: ContainerInstance;
  }
  export interface DeregisterTaskDefinitionRequest {
    /**
     * The family and revision (family:revision) or full Amazon Resource Name (ARN) of the task definition to deregister. You must specify a revision.
     */
    taskDefinition: String;
  }
  export interface DeregisterTaskDefinitionResponse {
    /**
     * The full description of the deregistered task.
     */
    taskDefinition?: TaskDefinition;
  }
  export interface DescribeClustersRequest {
    /**
     * A list of up to 100 cluster names or full cluster Amazon Resource Name (ARN) entries. If you do not specify a cluster, the default cluster is assumed.
     */
    clusters?: StringList;
  }
  export interface DescribeClustersResponse {
    /**
     * The list of clusters.
     */
    clusters?: Clusters;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export interface DescribeContainerInstancesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to describe. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * A list of container instance IDs or full Amazon Resource Name (ARN) entries.
     */
    containerInstances: StringList;
  }
  export interface DescribeContainerInstancesResponse {
    /**
     * The list of container instances.
     */
    containerInstances?: ContainerInstances;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export interface DescribeServicesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN)the cluster that hosts the service to describe. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * A list of services to describe. You may specify up to 10 services to describe in a single operation.
     */
    services: StringList;
  }
  export interface DescribeServicesResponse {
    /**
     * The list of services described.
     */
    services?: Services;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export interface DescribeTaskDefinitionRequest {
    /**
     * The family for the latest ACTIVE revision, family and revision (family:revision) for a specific revision in the family, or full Amazon Resource Name (ARN) of the task definition to describe.
     */
    taskDefinition: String;
  }
  export interface DescribeTaskDefinitionResponse {
    /**
     * The full task definition description.
     */
    taskDefinition?: TaskDefinition;
  }
  export interface DescribeTasksRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task to describe. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * A list of up to 100 task IDs or full Amazon Resource Name (ARN) entries.
     */
    tasks: StringList;
  }
  export interface DescribeTasksResponse {
    /**
     * The list of tasks.
     */
    tasks?: Tasks;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export type DesiredStatus = "RUNNING"|"PENDING"|"STOPPED"|string;
  export interface DiscoverPollEndpointRequest {
    /**
     * The container instance ID or full Amazon Resource Name (ARN) of the container instance. The ARN contains the arn:aws:ecs namespace, followed by the region of the container instance, the AWS account ID of the container instance owner, the container-instance namespace, and then the container instance ID. For example, arn:aws:ecs:region:aws_account_id:container-instance/container_instance_ID .
     */
    containerInstance?: String;
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that the container instance belongs to.
     */
    cluster?: String;
  }
  export interface DiscoverPollEndpointResponse {
    /**
     * The endpoint for the Amazon ECS agent to poll.
     */
    endpoint?: String;
    /**
     * The telemetry endpoint for the Amazon ECS agent.
     */
    telemetryEndpoint?: String;
  }
  export type DockerLabelsMap = {[key: string]: String};
  export type Double = number;
  export type EnvironmentVariables = KeyValuePair[];
  export interface Failure {
    /**
     * The Amazon Resource Name (ARN) of the failed resource.
     */
    arn?: String;
    /**
     * The reason for the failure.
     */
    reason?: String;
  }
  export type Failures = Failure[];
  export interface HostEntry {
    /**
     * The hostname to use in the /etc/hosts entry.
     */
    hostname: String;
    /**
     * The IP address to use in the /etc/hosts entry.
     */
    ipAddress: String;
  }
  export type HostEntryList = HostEntry[];
  export interface HostVolumeProperties {
    /**
     * The path on the host container instance that is presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the host parameter contains a sourcePath file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the sourcePath value does not exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.
     */
    sourcePath?: String;
  }
  export type Integer = number;
  export interface KernelCapabilities {
    /**
     * The Linux capabilities for the container that have been added to the default configuration provided by Docker. This parameter maps to CapAdd in the Create a container section of the Docker Remote API and the --cap-add option to docker run.
     */
    add?: StringList;
    /**
     * The Linux capabilities for the container that have been removed from the default configuration provided by Docker. This parameter maps to CapDrop in the Create a container section of the Docker Remote API and the --cap-drop option to docker run.
     */
    drop?: StringList;
  }
  export interface KeyValuePair {
    /**
     * The name of the key value pair. For environment variables, this is the name of the environment variable.
     */
    name?: String;
    /**
     * The value of the key value pair. For environment variables, this is the value of the environment variable.
     */
    value?: String;
  }
  export interface LinuxParameters {
    /**
     * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
     */
    capabilities?: KernelCapabilities;
  }
  export interface ListAttributesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster to list attributes. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The type of the target with which to list attributes.
     */
    targetType: TargetType;
    /**
     * The name of the attribute with which to filter the results. 
     */
    attributeName?: String;
    /**
     * The value of the attribute with which to filter results. You must also specify an attribute name to use this parameter.
     */
    attributeValue?: String;
    /**
     * The nextToken value returned from a previous paginated ListAttributes request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of cluster results returned by ListAttributes in paginated output. When this parameter is used, ListAttributes only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListAttributes request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListAttributes returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
  }
  export interface ListAttributesResponse {
    /**
     * A list of attribute objects that meet the criteria of the request.
     */
    attributes?: Attributes;
    /**
     * The nextToken value to include in a future ListAttributes request. When the results of a ListAttributes request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListClustersRequest {
    /**
     * The nextToken value returned from a previous paginated ListClusters request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of cluster results returned by ListClusters in paginated output. When this parameter is used, ListClusters only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListClusters request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListClusters returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
  }
  export interface ListClustersResponse {
    /**
     * The list of full Amazon Resource Name (ARN) entries for each cluster associated with your account.
     */
    clusterArns?: StringList;
    /**
     * The nextToken value to include in a future ListClusters request. When the results of a ListClusters request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListContainerInstancesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to list. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * You can filter the results of a ListContainerInstances operation with cluster query language statements. For more information, see Cluster Query Language in the Amazon EC2 Container Service Developer Guide.
     */
    filter?: String;
    /**
     * The nextToken value returned from a previous paginated ListContainerInstances request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of container instance results returned by ListContainerInstances in paginated output. When this parameter is used, ListContainerInstances only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListContainerInstances request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListContainerInstances returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
    /**
     * Filters the container instances by status. For example, if you specify the DRAINING status, the results include only container instances that have been set to DRAINING using UpdateContainerInstancesState. If you do not specify this parameter, the default is to include container instances set to ACTIVE and DRAINING.
     */
    status?: ContainerInstanceStatus;
  }
  export interface ListContainerInstancesResponse {
    /**
     * The list of container instances with full Amazon Resource Name (ARN) entries for each container instance associated with the specified cluster.
     */
    containerInstanceArns?: StringList;
    /**
     * The nextToken value to include in a future ListContainerInstances request. When the results of a ListContainerInstances request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListServicesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the services to list. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The nextToken value returned from a previous paginated ListServices request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of container instance results returned by ListServices in paginated output. When this parameter is used, ListServices only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListServices request with the returned nextToken value. This value can be between 1 and 10. If this parameter is not used, then ListServices returns up to 10 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
  }
  export interface ListServicesResponse {
    /**
     * The list of full Amazon Resource Name (ARN) entries for each service associated with the specified cluster.
     */
    serviceArns?: StringList;
    /**
     * The nextToken value to include in a future ListServices request. When the results of a ListServices request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListTaskDefinitionFamiliesRequest {
    /**
     * The familyPrefix is a string that is used to filter the results of ListTaskDefinitionFamilies. If you specify a familyPrefix, only task definition family names that begin with the familyPrefix string are returned.
     */
    familyPrefix?: String;
    /**
     * The task definition family status with which to filter the ListTaskDefinitionFamilies results. By default, both ACTIVE and INACTIVE task definition families are listed. If this parameter is set to ACTIVE, only task definition families that have an ACTIVE task definition revision are returned. If this parameter is set to INACTIVE, only task definition families that do not have any ACTIVE task definition revisions are returned. If you paginate the resulting output, be sure to keep the status value constant in each subsequent request.
     */
    status?: TaskDefinitionFamilyStatus;
    /**
     * The nextToken value returned from a previous paginated ListTaskDefinitionFamilies request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of task definition family results returned by ListTaskDefinitionFamilies in paginated output. When this parameter is used, ListTaskDefinitions only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListTaskDefinitionFamilies request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListTaskDefinitionFamilies returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
  }
  export interface ListTaskDefinitionFamiliesResponse {
    /**
     * The list of task definition family names that match the ListTaskDefinitionFamilies request.
     */
    families?: StringList;
    /**
     * The nextToken value to include in a future ListTaskDefinitionFamilies request. When the results of a ListTaskDefinitionFamilies request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListTaskDefinitionsRequest {
    /**
     * The full family name with which to filter the ListTaskDefinitions results. Specifying a familyPrefix limits the listed task definitions to task definition revisions that belong to that family.
     */
    familyPrefix?: String;
    /**
     * The task definition status with which to filter the ListTaskDefinitions results. By default, only ACTIVE task definitions are listed. By setting this parameter to INACTIVE, you can view task definitions that are INACTIVE as long as an active task or service still references them. If you paginate the resulting output, be sure to keep the status value constant in each subsequent request.
     */
    status?: TaskDefinitionStatus;
    /**
     * The order in which to sort the results. Valid values are ASC and DESC. By default (ASC), task definitions are listed lexicographically by family name and in ascending numerical order by revision so that the newest task definitions in a family are listed last. Setting this parameter to DESC reverses the sort order on family name and revision so that the newest task definitions in a family are listed first.
     */
    sort?: SortOrder;
    /**
     * The nextToken value returned from a previous paginated ListTaskDefinitions request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of task definition results returned by ListTaskDefinitions in paginated output. When this parameter is used, ListTaskDefinitions only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListTaskDefinitions request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListTaskDefinitions returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
  }
  export interface ListTaskDefinitionsResponse {
    /**
     * The list of task definition Amazon Resource Name (ARN) entries for the ListTaskDefinitions request.
     */
    taskDefinitionArns?: StringList;
    /**
     * The nextToken value to include in a future ListTaskDefinitions request. When the results of a ListTaskDefinitions request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListTasksRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the tasks to list. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The container instance ID or full Amazon Resource Name (ARN) of the container instance with which to filter the ListTasks results. Specifying a containerInstance limits the results to tasks that belong to that container instance.
     */
    containerInstance?: String;
    /**
     * The name of the family with which to filter the ListTasks results. Specifying a family limits the results to tasks that belong to that family.
     */
    family?: String;
    /**
     * The nextToken value returned from a previous paginated ListTasks request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of task results returned by ListTasks in paginated output. When this parameter is used, ListTasks only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListTasks request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListTasks returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
    /**
     * The startedBy value with which to filter the task results. Specifying a startedBy value limits the results to tasks that were started with that value.
     */
    startedBy?: String;
    /**
     * The name of the service with which to filter the ListTasks results. Specifying a serviceName limits the results to tasks that belong to that service.
     */
    serviceName?: String;
    /**
     * The task desired status with which to filter the ListTasks results. Specifying a desiredStatus of STOPPED limits the results to tasks that ECS has set the desired status to STOPPED, which can be useful for debugging tasks that are not starting properly or have died or finished. The default status filter is RUNNING, which shows tasks that ECS has set the desired status to RUNNING.  Although you can filter results based on a desired status of PENDING, this will not return any results because ECS never sets the desired status of a task to that value (only a task's lastStatus may have a value of PENDING). 
     */
    desiredStatus?: DesiredStatus;
  }
  export interface ListTasksResponse {
    /**
     * The list of task Amazon Resource Name (ARN) entries for the ListTasks request.
     */
    taskArns?: StringList;
    /**
     * The nextToken value to include in a future ListTasks request. When the results of a ListTasks request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface LoadBalancer {
    /**
     * The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group associated with a service.
     */
    targetGroupArn?: String;
    /**
     * The name of a load balancer.
     */
    loadBalancerName?: String;
    /**
     * The name of the container (as it appears in a container definition) to associate with the load balancer.
     */
    containerName?: String;
    /**
     * The port on the container to associate with the load balancer. This port must correspond to a containerPort in the service's task definition. Your container instances must allow ingress traffic on the hostPort of the port mapping.
     */
    containerPort?: BoxedInteger;
  }
  export type LoadBalancers = LoadBalancer[];
  export interface LogConfiguration {
    /**
     * The log driver to use for the container. The valid values listed for this parameter are log drivers that the Amazon ECS container agent can communicate with by default.   If you have a custom driver that is not listed above that you would like to work with the Amazon ECS container agent, you can fork the Amazon ECS container agent project that is available on GitHub and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, Amazon Web Services does not currently provide support for running modified copies of this software.  This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log into your container instance and run the following command: sudo docker version | grep "Server API version" 
     */
    logDriver: LogDriver;
    /**
     * The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log into your container instance and run the following command: sudo docker version | grep "Server API version" 
     */
    options?: LogConfigurationOptionsMap;
  }
  export type LogConfigurationOptionsMap = {[key: string]: String};
  export type LogDriver = "json-file"|"syslog"|"journald"|"gelf"|"fluentd"|"awslogs"|"splunk"|string;
  export type Long = number;
  export interface MountPoint {
    /**
     * The name of the volume to mount.
     */
    sourceVolume?: String;
    /**
     * The path on the container to mount the host volume at.
     */
    containerPath?: String;
    /**
     * If this value is true, the container has read-only access to the volume. If this value is false, then the container can write to the volume. The default value is false.
     */
    readOnly?: BoxedBoolean;
  }
  export type MountPointList = MountPoint[];
  export interface NetworkBinding {
    /**
     * The IP address that the container is bound to on the container instance.
     */
    bindIP?: String;
    /**
     * The port number on the container that is be used with the network binding.
     */
    containerPort?: BoxedInteger;
    /**
     * The port number on the host that is used with the network binding.
     */
    hostPort?: BoxedInteger;
    /**
     * The protocol used for the network binding.
     */
    protocol?: TransportProtocol;
  }
  export type NetworkBindings = NetworkBinding[];
  export type NetworkMode = "bridge"|"host"|"none"|string;
  export interface PlacementConstraint {
    /**
     * The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict selection to a group of valid candidates. Note that distinctInstance is not supported in task definitions.
     */
    type?: PlacementConstraintType;
    /**
     * A cluster query language expression to apply to the constraint. Note you cannot specify an expression if the constraint type is distinctInstance. For more information, see Cluster Query Language in the Amazon EC2 Container Service Developer Guide.
     */
    expression?: String;
  }
  export type PlacementConstraintType = "distinctInstance"|"memberOf"|string;
  export type PlacementConstraints = PlacementConstraint[];
  export type PlacementStrategies = PlacementStrategy[];
  export interface PlacementStrategy {
    /**
     * The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
     */
    type?: PlacementStrategyType;
    /**
     * The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
     */
    field?: String;
  }
  export type PlacementStrategyType = "random"|"spread"|"binpack"|string;
  export interface PortMapping {
    /**
     * The port number on the container that is bound to the user-specified or automatically assigned host port. If you specify a container port and not a host port, your container automatically receives a host port in the ephemeral port range (for more information, see hostPort). Port mappings that are automatically assigned in this way do not count toward the 100 reserved ports limit of a container instance.
     */
    containerPort?: BoxedInteger;
    /**
     * The port number on the container instance to reserve for your container. You can specify a non-reserved host port for your container port mapping, or you can omit the hostPort (or set it to 0) while specifying a containerPort and your container automatically receives a port in the ephemeral port range for your container instance operating system and Docker version. The default ephemeral port range for Docker version 1.6.0 and later is listed on the instance under /proc/sys/net/ipv4/ip_local_port_range; if this kernel parameter is unavailable, the default ephemeral port range of 49153 to 65535 is used. You should not attempt to specify a host port in the ephemeral port range as these are reserved for automatic assignment. In general, ports below 32768 are outside of the ephemeral port range.  The default ephemeral port range of 49153 to 65535 will always be used for Docker versions prior to 1.6.0.  The default reserved ports are 22 for SSH, the Docker ports 2375 and 2376, and the Amazon ECS container agent ports 51678 and 51679. Any host port that was previously specified in a running task is also reserved while the task is running (after a task stops, the host port is released).The current reserved ports are displayed in the remainingResources of DescribeContainerInstances output, and a container instance may have up to 100 reserved ports at a time, including the default reserved ports (automatically assigned ports do not count toward the 100 reserved ports limit).
     */
    hostPort?: BoxedInteger;
    /**
     * The protocol used for the port mapping. Valid values are tcp and udp. The default is tcp.
     */
    protocol?: TransportProtocol;
  }
  export type PortMappingList = PortMapping[];
  export interface PutAttributesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to apply attributes. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The attributes to apply to your resource. You can specify up to 10 custom attributes per resource. You can specify up to 10 attributes in a single call.
     */
    attributes: Attributes;
  }
  export interface PutAttributesResponse {
    /**
     * The attributes applied to your resource.
     */
    attributes?: Attributes;
  }
  export interface RegisterContainerInstanceRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster with which to register your container instance. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The instance identity document for the EC2 instance to register. This document can be found by running the following command from the instance: curl http://169.254.169.254/latest/dynamic/instance-identity/document/ 
     */
    instanceIdentityDocument?: String;
    /**
     * The instance identity document signature for the EC2 instance to register. This signature can be found by running the following command from the instance: curl http://169.254.169.254/latest/dynamic/instance-identity/signature/ 
     */
    instanceIdentityDocumentSignature?: String;
    /**
     * The resources available on the instance.
     */
    totalResources?: Resources;
    /**
     * The version information for the Amazon ECS container agent and Docker daemon running on the container instance.
     */
    versionInfo?: VersionInfo;
    /**
     * The Amazon Resource Name (ARN) of the container instance (if it was previously registered).
     */
    containerInstanceArn?: String;
    /**
     * The container instance attributes that this container instance supports.
     */
    attributes?: Attributes;
  }
  export interface RegisterContainerInstanceResponse {
    /**
     * The container instance that was registered.
     */
    containerInstance?: ContainerInstance;
  }
  export interface RegisterTaskDefinitionRequest {
    /**
     * You must specify a family for a task definition, which allows you to track multiple versions of the same task definition. The family is used as a name for your task definition. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
     */
    family: String;
    /**
     * The short name or full Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role. For more information, see IAM Roles for Tasks in the Amazon EC2 Container Service Developer Guide.
     */
    taskRoleArn?: String;
    /**
     * The Docker networking mode to use for the containers in the task. The valid values are none, bridge, and host.  The default Docker network mode is bridge. If the network mode is set to none, you cannot specify port mappings in your container definitions, and the task's containers do not have external connectivity. The host network mode offers the highest networking performance for containers because they use the host network stack instead of the virtualized network stack provided by the bridge mode; however, exposed container ports are mapped directly to the corresponding host port, so you cannot take advantage of dynamic host port mappings or run multiple instantiations of the same task on a single container instance if port mappings are used. For more information, see Network settings in the Docker run reference.
     */
    networkMode?: NetworkMode;
    /**
     * A list of container definitions in JSON format that describe the different containers that make up your task.
     */
    containerDefinitions: ContainerDefinitions;
    /**
     * A list of volume definitions in JSON format that containers in your task may use.
     */
    volumes?: VolumeList;
    /**
     * An array of placement constraint objects to use for the task. You can specify a maximum of 10 constraints per task (this limit includes constraints in the task definition and those specified at run time).
     */
    placementConstraints?: TaskDefinitionPlacementConstraints;
  }
  export interface RegisterTaskDefinitionResponse {
    /**
     * The full description of the registered task definition.
     */
    taskDefinition?: TaskDefinition;
  }
  export type RequiresAttributes = Attribute[];
  export interface Resource {
    /**
     * The name of the resource, such as cpu, memory, ports, or a user-defined resource.
     */
    name?: String;
    /**
     * The type of the resource, such as INTEGER, DOUBLE, LONG, or STRINGSET.
     */
    type?: String;
    /**
     * When the doubleValue type is set, the value of the resource must be a double precision floating-point type.
     */
    doubleValue?: Double;
    /**
     * When the longValue type is set, the value of the resource must be an extended precision floating-point type.
     */
    longValue?: Long;
    /**
     * When the integerValue type is set, the value of the resource must be an integer.
     */
    integerValue?: Integer;
    /**
     * When the stringSetValue type is set, the value of the resource must be a string type.
     */
    stringSetValue?: StringList;
  }
  export type Resources = Resource[];
  export interface RunTaskRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster on which to run your task. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The family and revision (family:revision) or full Amazon Resource Name (ARN) of the task definition to run. If a revision is not specified, the latest ACTIVE revision is used.
     */
    taskDefinition: String;
    /**
     * A list of container overrides in JSON format that specify the name of a container in the specified task definition and the overrides it should receive. You can override the default command for a container (that is specified in the task definition or Docker image) with a command override. You can also override existing environment variables (that are specified in the task definition or Docker image) on a container or add new environment variables to it with an environment override.  A total of 8192 characters are allowed for overrides. This limit includes the JSON formatting characters of the override structure. 
     */
    overrides?: TaskOverride;
    /**
     * The number of instantiations of the specified task to place on your cluster. You can specify up to 10 tasks per call.
     */
    count?: BoxedInteger;
    /**
     * An optional tag specified when a task is started. For example if you automatically trigger a task to run a batch process job, you could apply a unique identifier for that job to your task with the startedBy parameter. You can then identify which tasks belong to that job by filtering the results of a ListTasks call with the startedBy value. Up to 36 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. If a task is started by an Amazon ECS service, then the startedBy parameter contains the deployment ID of the service that starts it.
     */
    startedBy?: String;
    /**
     * The name of the task group to associate with the task. The default value is the family name of the task definition (for example, family:my-family-name).
     */
    group?: String;
    /**
     * An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at run time).
     */
    placementConstraints?: PlacementConstraints;
    /**
     * The placement strategy objects to use for the task. You can specify a maximum of 5 strategy rules per task.
     */
    placementStrategy?: PlacementStrategies;
  }
  export interface RunTaskResponse {
    /**
     * A full description of the tasks that were run. Each task that was successfully placed on your cluster are described here.
     */
    tasks?: Tasks;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export interface Service {
    /**
     * The Amazon Resource Name (ARN) that identifies the service. The ARN contains the arn:aws:ecs namespace, followed by the region of the service, the AWS account ID of the service owner, the service namespace, and then the service name. For example, arn:aws:ecs:region:012345678910:service/my-service .
     */
    serviceArn?: String;
    /**
     * The name of your service. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a region or across multiple regions.
     */
    serviceName?: String;
    /**
     * The Amazon Resource Name (ARN) of the cluster that hosts the service.
     */
    clusterArn?: String;
    /**
     * A list of Elastic Load Balancing load balancer objects, containing the load balancer name, the container name (as it appears in a container definition), and the container port to access from the load balancer.
     */
    loadBalancers?: LoadBalancers;
    /**
     * The status of the service. The valid values are ACTIVE, DRAINING, or INACTIVE.
     */
    status?: String;
    /**
     * The desired number of instantiations of the task definition to keep running on the service. This value is specified when the service is created with CreateService, and it can be modified with UpdateService.
     */
    desiredCount?: Integer;
    /**
     * The number of tasks in the cluster that are in the RUNNING state.
     */
    runningCount?: Integer;
    /**
     * The number of tasks in the cluster that are in the PENDING state.
     */
    pendingCount?: Integer;
    /**
     * The task definition to use for tasks in the service. This value is specified when the service is created with CreateService, and it can be modified with UpdateService.
     */
    taskDefinition?: String;
    /**
     * Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
     */
    deploymentConfiguration?: DeploymentConfiguration;
    /**
     * The current state of deployments for the service.
     */
    deployments?: Deployments;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with the service that allows the Amazon ECS container agent to register container instances with an Elastic Load Balancing load balancer.
     */
    roleArn?: String;
    /**
     * The event stream for your service. A maximum of 100 of the latest events are displayed.
     */
    events?: ServiceEvents;
    /**
     * The Unix timestamp for when the service was created.
     */
    createdAt?: Timestamp;
    /**
     * The placement constraints for the tasks in the service.
     */
    placementConstraints?: PlacementConstraints;
    /**
     * The placement strategy that determines how tasks for the service are placed.
     */
    placementStrategy?: PlacementStrategies;
  }
  export interface ServiceEvent {
    /**
     * The ID string of the event.
     */
    id?: String;
    /**
     * The Unix timestamp for when the event was triggered.
     */
    createdAt?: Timestamp;
    /**
     * The event message.
     */
    message?: String;
  }
  export type ServiceEvents = ServiceEvent[];
  export type Services = Service[];
  export type SortOrder = "ASC"|"DESC"|string;
  export interface StartTaskRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster on which to start your task. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The family and revision (family:revision) or full Amazon Resource Name (ARN) of the task definition to start. If a revision is not specified, the latest ACTIVE revision is used.
     */
    taskDefinition: String;
    /**
     * A list of container overrides in JSON format that specify the name of a container in the specified task definition and the overrides it should receive. You can override the default command for a container (that is specified in the task definition or Docker image) with a command override. You can also override existing environment variables (that are specified in the task definition or Docker image) on a container or add new environment variables to it with an environment override.  A total of 8192 characters are allowed for overrides. This limit includes the JSON formatting characters of the override structure. 
     */
    overrides?: TaskOverride;
    /**
     * The container instance IDs or full Amazon Resource Name (ARN) entries for the container instances on which you would like to place your task. You can specify up to 10 container instances.
     */
    containerInstances: StringList;
    /**
     * An optional tag specified when a task is started. For example if you automatically trigger a task to run a batch process job, you could apply a unique identifier for that job to your task with the startedBy parameter. You can then identify which tasks belong to that job by filtering the results of a ListTasks call with the startedBy value. Up to 36 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. If a task is started by an Amazon ECS service, then the startedBy parameter contains the deployment ID of the service that starts it.
     */
    startedBy?: String;
    /**
     * The name of the task group to associate with the task. The default value is the family name of the task definition (for example, family:my-family-name).
     */
    group?: String;
  }
  export interface StartTaskResponse {
    /**
     * A full description of the tasks that were started. Each task that was successfully placed on your container instances are described here.
     */
    tasks?: Tasks;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export interface StopTaskRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task to stop. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The task ID or full Amazon Resource Name (ARN) entry of the task to stop.
     */
    task: String;
    /**
     * An optional message specified when a task is stopped. For example, if you are using a custom scheduler, you can use this parameter to specify the reason for stopping the task here, and the message will appear in subsequent DescribeTasks API operations on this task. Up to 255 characters are allowed in this message.
     */
    reason?: String;
  }
  export interface StopTaskResponse {
    /**
     * The task that was stopped.
     */
    task?: Task;
  }
  export type String = string;
  export type StringList = String[];
  export interface SubmitContainerStateChangeRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container.
     */
    cluster?: String;
    /**
     * The task ID or full Amazon Resource Name (ARN) of the task that hosts the container.
     */
    task?: String;
    /**
     * The name of the container.
     */
    containerName?: String;
    /**
     * The status of the state change request.
     */
    status?: String;
    /**
     * The exit code returned for the state change request.
     */
    exitCode?: BoxedInteger;
    /**
     * The reason for the state change request.
     */
    reason?: String;
    /**
     * The network bindings of the container.
     */
    networkBindings?: NetworkBindings;
  }
  export interface SubmitContainerStateChangeResponse {
    /**
     * Acknowledgement of the state change.
     */
    acknowledgment?: String;
  }
  export interface SubmitTaskStateChangeRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task.
     */
    cluster?: String;
    /**
     * The task ID or full Amazon Resource Name (ARN) of the task in the state change request.
     */
    task?: String;
    /**
     * The status of the state change request.
     */
    status?: String;
    /**
     * The reason for the state change request.
     */
    reason?: String;
  }
  export interface SubmitTaskStateChangeResponse {
    /**
     * Acknowledgement of the state change.
     */
    acknowledgment?: String;
  }
  export type TargetType = "container-instance"|string;
  export interface Task {
    /**
     * The Amazon Resource Name (ARN) of the task.
     */
    taskArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the cluster that hosts the task.
     */
    clusterArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the task definition that creates the task.
     */
    taskDefinitionArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the container instances that host the task.
     */
    containerInstanceArn?: String;
    /**
     * One or more container overrides.
     */
    overrides?: TaskOverride;
    /**
     * The last known status of the task.
     */
    lastStatus?: String;
    /**
     * The desired status of the task.
     */
    desiredStatus?: String;
    /**
     * The containers associated with the task.
     */
    containers?: Containers;
    /**
     * The tag specified when a task is started. If the task is started by an Amazon ECS service, then the startedBy parameter contains the deployment ID of the service that starts it.
     */
    startedBy?: String;
    /**
     * The version counter for the task. Every time a task experiences a change that triggers a CloudWatch event, the version counter is incremented. If you are replicating your Amazon ECS task state with CloudWatch events, you can compare the version of a task reported by the Amazon ECS APIs with the version reported in CloudWatch events for the task (inside the detail object) to verify that the version in your event stream is current.
     */
    version?: Long;
    /**
     * The reason the task was stopped.
     */
    stoppedReason?: String;
    /**
     * The Unix timestamp for when the task was created (the task entered the PENDING state).
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp for when the task was started (the task transitioned from the PENDING state to the RUNNING state).
     */
    startedAt?: Timestamp;
    /**
     * The Unix timestamp for when the task was stopped (the task transitioned from the RUNNING state to the STOPPED state).
     */
    stoppedAt?: Timestamp;
    /**
     * The name of the task group associated with the task.
     */
    group?: String;
  }
  export interface TaskDefinition {
    /**
     * The full Amazon Resource Name (ARN) of the task definition.
     */
    taskDefinitionArn?: String;
    /**
     * A list of container definitions in JSON format that describe the different containers that make up your task. For more information about container definition parameters and defaults, see Amazon ECS Task Definitions in the Amazon EC2 Container Service Developer Guide.
     */
    containerDefinitions?: ContainerDefinitions;
    /**
     * The family of your task definition, used as the definition name.
     */
    family?: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role.
     */
    taskRoleArn?: String;
    /**
     * The Docker networking mode to use for the containers in the task. The valid values are none, bridge, and host.  If the network mode is none, the containers do not have external connectivity. The default Docker network mode is bridge. The host network mode offers the highest networking performance for containers because it uses the host network stack instead of the virtualized network stack provided by the bridge mode. For more information, see Network settings in the Docker run reference.
     */
    networkMode?: NetworkMode;
    /**
     * The revision of the task in a particular family. The revision is a version number of a task definition in a family. When you register a task definition for the first time, the revision is 1; each time you register a new revision of a task definition in the same family, the revision value always increases by one (even if you have deregistered previous revisions in this family).
     */
    revision?: Integer;
    /**
     * The list of volumes in a task. For more information about volume definition parameters and defaults, see Amazon ECS Task Definitions in the Amazon EC2 Container Service Developer Guide.
     */
    volumes?: VolumeList;
    /**
     * The status of the task definition.
     */
    status?: TaskDefinitionStatus;
    /**
     * The container instance attributes required by your task.
     */
    requiresAttributes?: RequiresAttributes;
    /**
     * An array of placement constraint objects to use for tasks. 
     */
    placementConstraints?: TaskDefinitionPlacementConstraints;
  }
  export type TaskDefinitionFamilyStatus = "ACTIVE"|"INACTIVE"|"ALL"|string;
  export interface TaskDefinitionPlacementConstraint {
    /**
     * The type of constraint. The DistinctInstance constraint ensures that each task in a particular group is running on a different container instance. The MemberOf constraint restricts selection to be from a group of valid candidates.
     */
    type?: TaskDefinitionPlacementConstraintType;
    /**
     * A cluster query language expression to apply to the constraint. For more information, see Cluster Query Language in the Amazon EC2 Container Service Developer Guide.
     */
    expression?: String;
  }
  export type TaskDefinitionPlacementConstraintType = "memberOf"|string;
  export type TaskDefinitionPlacementConstraints = TaskDefinitionPlacementConstraint[];
  export type TaskDefinitionStatus = "ACTIVE"|"INACTIVE"|string;
  export interface TaskOverride {
    /**
     * One or more container overrides sent to a task.
     */
    containerOverrides?: ContainerOverrides;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role.
     */
    taskRoleArn?: String;
  }
  export type Tasks = Task[];
  export type Timestamp = Date;
  export type TransportProtocol = "tcp"|"udp"|string;
  export interface Ulimit {
    /**
     * The type of the ulimit.
     */
    name: UlimitName;
    /**
     * The soft limit for the ulimit type.
     */
    softLimit: Integer;
    /**
     * The hard limit for the ulimit type.
     */
    hardLimit: Integer;
  }
  export type UlimitList = Ulimit[];
  export type UlimitName = "core"|"cpu"|"data"|"fsize"|"locks"|"memlock"|"msgqueue"|"nice"|"nofile"|"nproc"|"rss"|"rtprio"|"rttime"|"sigpending"|"stack"|string;
  export interface UpdateContainerAgentRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that your container instance is running on. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The container instance ID or full Amazon Resource Name (ARN) entries for the container instance on which you would like to update the Amazon ECS container agent.
     */
    containerInstance: String;
  }
  export interface UpdateContainerAgentResponse {
    /**
     * The container instance for which the container agent was updated.
     */
    containerInstance?: ContainerInstance;
  }
  export interface UpdateContainerInstancesStateRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to update. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * A list of container instance IDs or full Amazon Resource Name (ARN) entries.
     */
    containerInstances: StringList;
    /**
     * The container instance state with which to update the container instance.
     */
    status: ContainerInstanceStatus;
  }
  export interface UpdateContainerInstancesStateResponse {
    /**
     * The list of container instances.
     */
    containerInstances?: ContainerInstances;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export interface UpdateServiceRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that your service is running on. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The name of the service to update.
     */
    service: String;
    /**
     * The number of instantiations of the task to place and keep running in your service.
     */
    desiredCount?: BoxedInteger;
    /**
     * The family and revision (family:revision) or full Amazon Resource Name (ARN) of the task definition to run in your service. If a revision is not specified, the latest ACTIVE revision is used. If you modify the task definition with UpdateService, Amazon ECS spawns a task with the new version of the task definition and then stops an old task after the new version is running.
     */
    taskDefinition?: String;
    /**
     * Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
     */
    deploymentConfiguration?: DeploymentConfiguration;
  }
  export interface UpdateServiceResponse {
    /**
     * The full description of your service following the update call.
     */
    service?: Service;
  }
  export interface VersionInfo {
    /**
     * The version number of the Amazon ECS container agent.
     */
    agentVersion?: String;
    /**
     * The Git commit hash for the Amazon ECS container agent build on the amazon-ecs-agent  GitHub repository.
     */
    agentHash?: String;
    /**
     * The Docker version running on the container instance.
     */
    dockerVersion?: String;
  }
  export interface Volume {
    /**
     * The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. This name is referenced in the sourceVolume parameter of container definition mountPoints.
     */
    name?: String;
    /**
     * The contents of the host parameter determine whether your data volume persists on the host container instance and where it is stored. If the host parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data is not guaranteed to persist after the containers associated with it stop running.
     */
    host?: HostVolumeProperties;
  }
  export interface VolumeFrom {
    /**
     * The name of another container within the same task definition to mount volumes from.
     */
    sourceContainer?: String;
    /**
     * If this value is true, the container has read-only access to the volume. If this value is false, then the container can write to the volume. The default value is false.
     */
    readOnly?: BoxedBoolean;
  }
  export type VolumeFromList = VolumeFrom[];
  export type VolumeList = Volume[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-11-13"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ECS client.
   */
  export import Types = ECS;
}
export = ECS;
