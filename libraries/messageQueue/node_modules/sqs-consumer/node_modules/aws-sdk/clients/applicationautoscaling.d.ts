import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ApplicationAutoScaling extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ApplicationAutoScaling.Types.ClientConfiguration)
  config: Config & ApplicationAutoScaling.Types.ClientConfiguration;
  /**
   * Deletes the specified Application Auto Scaling scaling policy. Deleting a policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action. To create a scaling policy or update an existing one, see PutScalingPolicy.
   */
  deleteScalingPolicy(params: ApplicationAutoScaling.Types.DeleteScalingPolicyRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeleteScalingPolicyResponse) => void): Request<ApplicationAutoScaling.Types.DeleteScalingPolicyResponse, AWSError>;
  /**
   * Deletes the specified Application Auto Scaling scaling policy. Deleting a policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action. To create a scaling policy or update an existing one, see PutScalingPolicy.
   */
  deleteScalingPolicy(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeleteScalingPolicyResponse) => void): Request<ApplicationAutoScaling.Types.DeleteScalingPolicyResponse, AWSError>;
  /**
   * Deregisters a scalable target. Deregistering a scalable target deletes the scaling policies that are associated with it. To create a scalable target or update an existing one, see RegisterScalableTarget.
   */
  deregisterScalableTarget(params: ApplicationAutoScaling.Types.DeregisterScalableTargetRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeregisterScalableTargetResponse) => void): Request<ApplicationAutoScaling.Types.DeregisterScalableTargetResponse, AWSError>;
  /**
   * Deregisters a scalable target. Deregistering a scalable target deletes the scaling policies that are associated with it. To create a scalable target or update an existing one, see RegisterScalableTarget.
   */
  deregisterScalableTarget(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeregisterScalableTargetResponse) => void): Request<ApplicationAutoScaling.Types.DeregisterScalableTargetResponse, AWSError>;
  /**
   * Provides descriptive information about the scalable targets in the specified namespace. You can filter the results using the ResourceIds and ScalableDimension parameters. To create a scalable target or update an existing one, see RegisterScalableTarget. If you are no longer using a scalable target, you can deregister it using DeregisterScalableTarget.
   */
  describeScalableTargets(params: ApplicationAutoScaling.Types.DescribeScalableTargetsRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalableTargetsResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalableTargetsResponse, AWSError>;
  /**
   * Provides descriptive information about the scalable targets in the specified namespace. You can filter the results using the ResourceIds and ScalableDimension parameters. To create a scalable target or update an existing one, see RegisterScalableTarget. If you are no longer using a scalable target, you can deregister it using DeregisterScalableTarget.
   */
  describeScalableTargets(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalableTargetsResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalableTargetsResponse, AWSError>;
  /**
   * Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks. You can filter the results using the ResourceId and ScalableDimension parameters. Scaling activities are triggered by CloudWatch alarms that are associated with scaling policies. To view the scaling policies for a service namespace, see DescribeScalingPolicies. To create a scaling policy or update an existing one, see PutScalingPolicy.
   */
  describeScalingActivities(params: ApplicationAutoScaling.Types.DescribeScalingActivitiesRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalingActivitiesResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalingActivitiesResponse, AWSError>;
  /**
   * Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks. You can filter the results using the ResourceId and ScalableDimension parameters. Scaling activities are triggered by CloudWatch alarms that are associated with scaling policies. To view the scaling policies for a service namespace, see DescribeScalingPolicies. To create a scaling policy or update an existing one, see PutScalingPolicy.
   */
  describeScalingActivities(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalingActivitiesResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalingActivitiesResponse, AWSError>;
  /**
   * Provides descriptive information about the scaling policies in the specified namespace. You can filter the results using the ResourceId, ScalableDimension, and PolicyNames parameters. To create a scaling policy or update an existing one, see PutScalingPolicy. If you are no longer using a scaling policy, you can delete it using DeleteScalingPolicy.
   */
  describeScalingPolicies(params: ApplicationAutoScaling.Types.DescribeScalingPoliciesRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalingPoliciesResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalingPoliciesResponse, AWSError>;
  /**
   * Provides descriptive information about the scaling policies in the specified namespace. You can filter the results using the ResourceId, ScalableDimension, and PolicyNames parameters. To create a scaling policy or update an existing one, see PutScalingPolicy. If you are no longer using a scaling policy, you can delete it using DeleteScalingPolicy.
   */
  describeScalingPolicies(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalingPoliciesResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalingPoliciesResponse, AWSError>;
  /**
   * Creates or updates a policy for an Application Auto Scaling scalable target. Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy without first registering a scalable target using RegisterScalableTarget. To update a policy, specify its policy name and the parameters that you want to change. Any parameters that you don't specify are not changed by this update request. You can view the scaling policies for a service namespace using DescribeScalingPolicies. If you are no longer using a scaling policy, you can delete it using DeleteScalingPolicy.
   */
  putScalingPolicy(params: ApplicationAutoScaling.Types.PutScalingPolicyRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.PutScalingPolicyResponse) => void): Request<ApplicationAutoScaling.Types.PutScalingPolicyResponse, AWSError>;
  /**
   * Creates or updates a policy for an Application Auto Scaling scalable target. Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy without first registering a scalable target using RegisterScalableTarget. To update a policy, specify its policy name and the parameters that you want to change. Any parameters that you don't specify are not changed by this update request. You can view the scaling policies for a service namespace using DescribeScalingPolicies. If you are no longer using a scaling policy, you can delete it using DeleteScalingPolicy.
   */
  putScalingPolicy(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.PutScalingPolicyResponse) => void): Request<ApplicationAutoScaling.Types.PutScalingPolicyResponse, AWSError>;
  /**
   * Registers or updates a scalable target. A scalable target is a resource that Application Auto Scaling can scale out or scale in. After you have registered a scalable target, you can use this operation to update the minimum and maximum values for your scalable dimension. After you register a scalable target, you can create and apply scaling policies using PutScalingPolicy. You can view the scaling policies for a service namespace using DescribeScalableTargets. If you are no longer using a scalable target, you can deregister it using DeregisterScalableTarget.
   */
  registerScalableTarget(params: ApplicationAutoScaling.Types.RegisterScalableTargetRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.RegisterScalableTargetResponse) => void): Request<ApplicationAutoScaling.Types.RegisterScalableTargetResponse, AWSError>;
  /**
   * Registers or updates a scalable target. A scalable target is a resource that Application Auto Scaling can scale out or scale in. After you have registered a scalable target, you can use this operation to update the minimum and maximum values for your scalable dimension. After you register a scalable target, you can create and apply scaling policies using PutScalingPolicy. You can view the scaling policies for a service namespace using DescribeScalableTargets. If you are no longer using a scalable target, you can deregister it using DeregisterScalableTarget.
   */
  registerScalableTarget(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.RegisterScalableTargetResponse) => void): Request<ApplicationAutoScaling.Types.RegisterScalableTargetResponse, AWSError>;
}
declare namespace ApplicationAutoScaling {
  export type AdjustmentType = "ChangeInCapacity"|"PercentChangeInCapacity"|"ExactCapacity"|string;
  export interface Alarm {
    /**
     * The name of the alarm.
     */
    AlarmName: ResourceId;
    /**
     * The Amazon Resource Name (ARN) of the alarm.
     */
    AlarmARN: ResourceId;
  }
  export type Alarms = Alarm[];
  export type Cooldown = number;
  export interface CustomizedMetricSpecification {
    /**
     * The name of the metric.
     */
    MetricName: MetricName;
    /**
     * The namespace of the metric.
     */
    Namespace: MetricNamespace;
    /**
     * The dimensions of the metric.
     */
    Dimensions?: MetricDimensions;
    /**
     * The statistic of the metric.
     */
    Statistic: MetricStatistic;
    /**
     * The unit of the metric.
     */
    Unit?: MetricUnit;
  }
  export interface DeleteScalingPolicyRequest {
    /**
     * The name of the scaling policy.
     */
    PolicyName: ResourceIdMaxLen1600;
    /**
     * The namespace of the AWS service. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.  
     */
    ScalableDimension: ScalableDimension;
  }
  export interface DeleteScalingPolicyResponse {
  }
  export interface DeregisterScalableTargetRequest {
    /**
     * The namespace of the AWS service. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.  
     */
    ScalableDimension: ScalableDimension;
  }
  export interface DeregisterScalableTargetResponse {
  }
  export interface DescribeScalableTargetsRequest {
    /**
     * The namespace of the AWS service. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index.  
     */
    ResourceIds?: ResourceIdsMaxLen1600;
    /**
     * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.  
     */
    ScalableDimension?: ScalableDimension;
    /**
     * The maximum number of scalable target results. This value can be between 1 and 50. The default value is 50. If this parameter is used, the operation returns up to MaxResults results at a time, along with a NextToken value. To get the next set of results, include the NextToken value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a NextToken value, if applicable.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of results.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalableTargetsResponse {
    /**
     * The list of scalable targets that matches the request parameters.
     */
    ScalableTargets?: ScalableTargets;
    /**
     * The token required to get the next set of results. This value is null if there are no more results to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalingActivitiesRequest {
    /**
     * The namespace of the AWS service. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scaling activity. This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index.  
     */
    ResourceId?: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.  
     */
    ScalableDimension?: ScalableDimension;
    /**
     * The maximum number of scalable target results. This value can be between 1 and 50. The default value is 50. If this parameter is used, the operation returns up to MaxResults results at a time, along with a NextToken value. To get the next set of results, include the NextToken value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a NextToken value, if applicable.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of results.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalingActivitiesResponse {
    /**
     * A list of scaling activity objects.
     */
    ScalingActivities?: ScalingActivities;
    /**
     * The token required to get the next set of results. This value is null if there are no more results to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalingPoliciesRequest {
    /**
     * The names of the scaling policies to describe.
     */
    PolicyNames?: ResourceIdsMaxLen1600;
    /**
     * The namespace of the AWS service. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index.  
     */
    ResourceId?: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.  
     */
    ScalableDimension?: ScalableDimension;
    /**
     * The maximum number of scalable target results. This value can be between 1 and 50. The default value is 50. If this parameter is used, the operation returns up to MaxResults results at a time, along with a NextToken value. To get the next set of results, include the NextToken value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a NextToken value, if applicable.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of results.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalingPoliciesResponse {
    /**
     * A list of scaling policy objects.
     */
    ScalingPolicies?: ScalingPolicies;
    /**
     * The token required to get the next set of results. This value is null if there are no more results to return.
     */
    NextToken?: XmlString;
  }
  export type DisableScaleIn = boolean;
  export type ErrorMessage = string;
  export type MaxResults = number;
  export type MetricAggregationType = "Average"|"Minimum"|"Maximum"|string;
  export interface MetricDimension {
    /**
     * The name of the dimension.
     */
    Name: MetricDimensionName;
    /**
     * The value of the dimension.
     */
    Value: MetricDimensionValue;
  }
  export type MetricDimensionName = string;
  export type MetricDimensionValue = string;
  export type MetricDimensions = MetricDimension[];
  export type MetricName = string;
  export type MetricNamespace = string;
  export type MetricScale = number;
  export type MetricStatistic = "Average"|"Minimum"|"Maximum"|"SampleCount"|"Sum"|string;
  export type MetricType = "DynamoDBReadCapacityUtilization"|"DynamoDBWriteCapacityUtilization"|string;
  export type MetricUnit = string;
  export type MinAdjustmentMagnitude = number;
  export type PolicyName = string;
  export type PolicyType = "StepScaling"|"TargetTrackingScaling"|string;
  export interface PredefinedMetricSpecification {
    /**
     * The metric type.
     */
    PredefinedMetricType: MetricType;
    /**
     * Reserved for future use.
     */
    ResourceLabel?: ResourceLabel;
  }
  export interface PutScalingPolicyRequest {
    /**
     * The name of the scaling policy.
     */
    PolicyName: PolicyName;
    /**
     * The namespace of the AWS service. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.  
     */
    ScalableDimension: ScalableDimension;
    /**
     * The policy type. If you are creating a new policy, this parameter is required. If you are updating a policy, this parameter is not required. For DynamoDB, only TargetTrackingScaling is supported. For any other service, only StepScaling is supported.
     */
    PolicyType?: PolicyType;
    /**
     * A step scaling policy. This parameter is required if you are creating a policy and the policy type is StepScaling.
     */
    StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
    /**
     * A target tracking policy. This parameter is required if you are creating a new policy and the policy type is TargetTrackingScaling.
     */
    TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
  }
  export interface PutScalingPolicyResponse {
    /**
     * The Amazon Resource Name (ARN) of the resulting scaling policy.
     */
    PolicyARN: ResourceIdMaxLen1600;
    /**
     * The CloudWatch alarms created for the target tracking policy.
     */
    Alarms?: Alarms;
  }
  export interface RegisterScalableTargetRequest {
    /**
     * The namespace of the AWS service. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.  
     */
    ScalableDimension: ScalableDimension;
    /**
     * The minimum value to scale to in response to a scale in event. This parameter is required if you are registering a scalable target and optional if you are updating one.
     */
    MinCapacity?: ResourceCapacity;
    /**
     * The maximum value to scale to in response to a scale out event. This parameter is required if you are registering a scalable target and optional if you are updating one.
     */
    MaxCapacity?: ResourceCapacity;
    /**
     * The ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf. This parameter is required when you register a scalable target and optional when you update one.
     */
    RoleARN?: ResourceIdMaxLen1600;
  }
  export interface RegisterScalableTargetResponse {
  }
  export type ResourceCapacity = number;
  export type ResourceId = string;
  export type ResourceIdMaxLen1600 = string;
  export type ResourceIdsMaxLen1600 = ResourceIdMaxLen1600[];
  export type ResourceLabel = string;
  export type ScalableDimension = "ecs:service:DesiredCount"|"ec2:spot-fleet-request:TargetCapacity"|"elasticmapreduce:instancegroup:InstanceCount"|"appstream:fleet:DesiredCapacity"|"dynamodb:table:ReadCapacityUnits"|"dynamodb:table:WriteCapacityUnits"|"dynamodb:index:ReadCapacityUnits"|"dynamodb:index:WriteCapacityUnits"|string;
  export interface ScalableTarget {
    /**
     * The namespace of the AWS service. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.  
     */
    ScalableDimension: ScalableDimension;
    /**
     * The minimum value to scale to in response to a scale in event.
     */
    MinCapacity: ResourceCapacity;
    /**
     * The maximum value to scale to in response to a scale out event.
     */
    MaxCapacity: ResourceCapacity;
    /**
     * The ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf.
     */
    RoleARN: ResourceIdMaxLen1600;
    /**
     * The Unix timestamp for when the scalable target was created.
     */
    CreationTime: TimestampType;
  }
  export type ScalableTargets = ScalableTarget[];
  export type ScalingActivities = ScalingActivity[];
  export interface ScalingActivity {
    /**
     * The unique identifier of the scaling activity.
     */
    ActivityId: ResourceId;
    /**
     * The namespace of the AWS service. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scaling activity. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.  
     */
    ScalableDimension: ScalableDimension;
    /**
     * A simple description of what action the scaling activity intends to accomplish.
     */
    Description: XmlString;
    /**
     * A simple description of what caused the scaling activity to happen.
     */
    Cause: XmlString;
    /**
     * The Unix timestamp for when the scaling activity began.
     */
    StartTime: TimestampType;
    /**
     * The Unix timestamp for when the scaling activity ended.
     */
    EndTime?: TimestampType;
    /**
     * Indicates the status of the scaling activity.
     */
    StatusCode: ScalingActivityStatusCode;
    /**
     * A simple message about the current status of the scaling activity.
     */
    StatusMessage?: XmlString;
    /**
     * The details about the scaling activity.
     */
    Details?: XmlString;
  }
  export type ScalingActivityStatusCode = "Pending"|"InProgress"|"Successful"|"Overridden"|"Unfulfilled"|"Failed"|string;
  export type ScalingAdjustment = number;
  export type ScalingPolicies = ScalingPolicy[];
  export interface ScalingPolicy {
    /**
     * The Amazon Resource Name (ARN) of the scaling policy.
     */
    PolicyARN: ResourceIdMaxLen1600;
    /**
     * The name of the scaling policy.
     */
    PolicyName: PolicyName;
    /**
     * The namespace of the AWS service. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0.   AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet.   DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot fleet request.    elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group.    appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.  
     */
    ScalableDimension: ScalableDimension;
    /**
     * The scaling policy type.
     */
    PolicyType: PolicyType;
    /**
     * A step scaling policy.
     */
    StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
    /**
     * A target tracking policy.
     */
    TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
    /**
     * The CloudWatch alarms associated with the scaling policy.
     */
    Alarms?: Alarms;
    /**
     * The Unix timestamp for when the scaling policy was created.
     */
    CreationTime: TimestampType;
  }
  export type ServiceNamespace = "ecs"|"elasticmapreduce"|"ec2"|"appstream"|"dynamodb"|string;
  export interface StepAdjustment {
    /**
     * The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.
     */
    MetricIntervalLowerBound?: MetricScale;
    /**
     * The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity. The upper bound must be greater than the lower bound.
     */
    MetricIntervalUpperBound?: MetricScale;
    /**
     * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current scalable dimension while a negative number removes from the current scalable dimension.
     */
    ScalingAdjustment: ScalingAdjustment;
  }
  export type StepAdjustments = StepAdjustment[];
  export interface StepScalingPolicyConfiguration {
    /**
     * The adjustment type, which specifies how the ScalingAdjustment parameter in a StepAdjustment is interpreted.
     */
    AdjustmentType?: AdjustmentType;
    /**
     * A set of adjustments that enable you to scale based on the size of the alarm breach.
     */
    StepAdjustments?: StepAdjustments;
    /**
     * The minimum number to adjust your scalable dimension as a result of a scaling activity. If the adjustment type is PercentChangeInCapacity, the scaling policy changes the scalable dimension of the scalable target by this amount.
     */
    MinAdjustmentMagnitude?: MinAdjustmentMagnitude;
    /**
     * The amount of time, in seconds, after a scaling activity completes where previous trigger-related scaling activities can influence future scaling events. For scale out policies, while the cooldown period is in effect, the capacity that has been added by the previous scale out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out. For example, an alarm triggers a step scaling policy to scale out an Amazon ECS service by 2 tasks, the scaling activity completes successfully, and a cooldown period of 5 minutes starts. During the Cooldown period, if the alarm triggers the same policy again but at a more aggressive step adjustment to scale out the service by 3 tasks, the 2 tasks that were added in the previous scale out event are considered part of that capacity and only 1 additional task is added to the desired count. For scale in policies, the cooldown period is used to block subsequent scale in requests until it has expired. The intention is to scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the cooldown period after a scale-in, Application Auto Scaling scales out your scalable target immediately.
     */
    Cooldown?: Cooldown;
    /**
     * The aggregation type for the CloudWatch metrics. Valid values are Minimum, Maximum, and Average.
     */
    MetricAggregationType?: MetricAggregationType;
  }
  export interface TargetTrackingScalingPolicyConfiguration {
    /**
     * The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).
     */
    TargetValue: MetricScale;
    /**
     * A predefined metric.
     */
    PredefinedMetricSpecification?: PredefinedMetricSpecification;
    /**
     * Reserved for future use.
     */
    CustomizedMetricSpecification?: CustomizedMetricSpecification;
    /**
     * The amount of time, in seconds, after a scale out activity completes before another scale out activity can start. While the cooldown period is in effect, the capacity that has been added by the previous scale out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out.
     */
    ScaleOutCooldown?: Cooldown;
    /**
     * The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. The cooldown period is used to block subsequent scale in requests until it has expired. The intention is to scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the cooldown period after a scale-in, Application Auto Scaling scales out your scalable target immediately.
     */
    ScaleInCooldown?: Cooldown;
    /**
     * Indicates whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is false.
     */
    DisableScaleIn?: DisableScaleIn;
  }
  export type TimestampType = Date;
  export type XmlString = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-02-06"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ApplicationAutoScaling client.
   */
  export import Types = ApplicationAutoScaling;
}
export = ApplicationAutoScaling;
