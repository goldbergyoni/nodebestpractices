import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ELB extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ELB.Types.ClientConfiguration)
  config: Config & ELB.Types.ClientConfiguration;
  /**
   * Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, AddTags updates its value. For more information, see Tag Your Classic Load Balancer in the Classic Load Balancer Guide.
   */
  addTags(params: ELB.Types.AddTagsInput, callback?: (err: AWSError, data: ELB.Types.AddTagsOutput) => void): Request<ELB.Types.AddTagsOutput, AWSError>;
  /**
   * Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, AddTags updates its value. For more information, see Tag Your Classic Load Balancer in the Classic Load Balancer Guide.
   */
  addTags(callback?: (err: AWSError, data: ELB.Types.AddTagsOutput) => void): Request<ELB.Types.AddTagsOutput, AWSError>;
  /**
   * Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups. For more information, see Security Groups for Load Balancers in a VPC in the Classic Load Balancer Guide.
   */
  applySecurityGroupsToLoadBalancer(params: ELB.Types.ApplySecurityGroupsToLoadBalancerInput, callback?: (err: AWSError, data: ELB.Types.ApplySecurityGroupsToLoadBalancerOutput) => void): Request<ELB.Types.ApplySecurityGroupsToLoadBalancerOutput, AWSError>;
  /**
   * Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups. For more information, see Security Groups for Load Balancers in a VPC in the Classic Load Balancer Guide.
   */
  applySecurityGroupsToLoadBalancer(callback?: (err: AWSError, data: ELB.Types.ApplySecurityGroupsToLoadBalancerOutput) => void): Request<ELB.Types.ApplySecurityGroupsToLoadBalancerOutput, AWSError>;
  /**
   * Adds one or more subnets to the set of configured subnets for the specified load balancer. The load balancer evenly distributes requests across all registered subnets. For more information, see Add or Remove Subnets for Your Load Balancer in a VPC in the Classic Load Balancer Guide.
   */
  attachLoadBalancerToSubnets(params: ELB.Types.AttachLoadBalancerToSubnetsInput, callback?: (err: AWSError, data: ELB.Types.AttachLoadBalancerToSubnetsOutput) => void): Request<ELB.Types.AttachLoadBalancerToSubnetsOutput, AWSError>;
  /**
   * Adds one or more subnets to the set of configured subnets for the specified load balancer. The load balancer evenly distributes requests across all registered subnets. For more information, see Add or Remove Subnets for Your Load Balancer in a VPC in the Classic Load Balancer Guide.
   */
  attachLoadBalancerToSubnets(callback?: (err: AWSError, data: ELB.Types.AttachLoadBalancerToSubnetsOutput) => void): Request<ELB.Types.AttachLoadBalancerToSubnetsOutput, AWSError>;
  /**
   * Specifies the health check settings to use when evaluating the health state of your EC2 instances. For more information, see Configure Health Checks for Your Load Balancer in the Classic Load Balancer Guide.
   */
  configureHealthCheck(params: ELB.Types.ConfigureHealthCheckInput, callback?: (err: AWSError, data: ELB.Types.ConfigureHealthCheckOutput) => void): Request<ELB.Types.ConfigureHealthCheckOutput, AWSError>;
  /**
   * Specifies the health check settings to use when evaluating the health state of your EC2 instances. For more information, see Configure Health Checks for Your Load Balancer in the Classic Load Balancer Guide.
   */
  configureHealthCheck(callback?: (err: AWSError, data: ELB.Types.ConfigureHealthCheckOutput) => void): Request<ELB.Types.ConfigureHealthCheckOutput, AWSError>;
  /**
   * Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners. This policy is similar to the policy created by CreateLBCookieStickinessPolicy, except that the lifetime of the special Elastic Load Balancing cookie, AWSELB, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie. If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued. For more information, see Application-Controlled Session Stickiness in the Classic Load Balancer Guide.
   */
  createAppCookieStickinessPolicy(params: ELB.Types.CreateAppCookieStickinessPolicyInput, callback?: (err: AWSError, data: ELB.Types.CreateAppCookieStickinessPolicyOutput) => void): Request<ELB.Types.CreateAppCookieStickinessPolicyOutput, AWSError>;
  /**
   * Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners. This policy is similar to the policy created by CreateLBCookieStickinessPolicy, except that the lifetime of the special Elastic Load Balancing cookie, AWSELB, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie. If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued. For more information, see Application-Controlled Session Stickiness in the Classic Load Balancer Guide.
   */
  createAppCookieStickinessPolicy(callback?: (err: AWSError, data: ELB.Types.CreateAppCookieStickinessPolicyOutput) => void): Request<ELB.Types.CreateAppCookieStickinessPolicyOutput, AWSError>;
  /**
   * Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners. When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm. A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration. For more information, see Duration-Based Session Stickiness in the Classic Load Balancer Guide.
   */
  createLBCookieStickinessPolicy(params: ELB.Types.CreateLBCookieStickinessPolicyInput, callback?: (err: AWSError, data: ELB.Types.CreateLBCookieStickinessPolicyOutput) => void): Request<ELB.Types.CreateLBCookieStickinessPolicyOutput, AWSError>;
  /**
   * Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners. When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm. A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration. For more information, see Duration-Based Session Stickiness in the Classic Load Balancer Guide.
   */
  createLBCookieStickinessPolicy(callback?: (err: AWSError, data: ELB.Types.CreateLBCookieStickinessPolicyOutput) => void): Request<ELB.Types.CreateLBCookieStickinessPolicyOutput, AWSError>;
  /**
   * Creates a Classic Load Balancer. You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using CreateLoadBalancerListeners, ApplySecurityGroupsToLoadBalancer, AttachLoadBalancerToSubnets, and AddTags. To describe your current load balancers, see DescribeLoadBalancers. When you are finished with a load balancer, you can delete it using DeleteLoadBalancer. You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see Limits for Your Classic Load Balancer in the Classic Load Balancer Guide.
   */
  createLoadBalancer(params: ELB.Types.CreateAccessPointInput, callback?: (err: AWSError, data: ELB.Types.CreateAccessPointOutput) => void): Request<ELB.Types.CreateAccessPointOutput, AWSError>;
  /**
   * Creates a Classic Load Balancer. You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using CreateLoadBalancerListeners, ApplySecurityGroupsToLoadBalancer, AttachLoadBalancerToSubnets, and AddTags. To describe your current load balancers, see DescribeLoadBalancers. When you are finished with a load balancer, you can delete it using DeleteLoadBalancer. You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see Limits for Your Classic Load Balancer in the Classic Load Balancer Guide.
   */
  createLoadBalancer(callback?: (err: AWSError, data: ELB.Types.CreateAccessPointOutput) => void): Request<ELB.Types.CreateAccessPointOutput, AWSError>;
  /**
   * Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener. For more information, see Listeners for Your Classic Load Balancer in the Classic Load Balancer Guide.
   */
  createLoadBalancerListeners(params: ELB.Types.CreateLoadBalancerListenerInput, callback?: (err: AWSError, data: ELB.Types.CreateLoadBalancerListenerOutput) => void): Request<ELB.Types.CreateLoadBalancerListenerOutput, AWSError>;
  /**
   * Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener. For more information, see Listeners for Your Classic Load Balancer in the Classic Load Balancer Guide.
   */
  createLoadBalancerListeners(callback?: (err: AWSError, data: ELB.Types.CreateLoadBalancerListenerOutput) => void): Request<ELB.Types.CreateLoadBalancerListenerOutput, AWSError>;
  /**
   * Creates a policy with the specified attributes for the specified load balancer. Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.
   */
  createLoadBalancerPolicy(params: ELB.Types.CreateLoadBalancerPolicyInput, callback?: (err: AWSError, data: ELB.Types.CreateLoadBalancerPolicyOutput) => void): Request<ELB.Types.CreateLoadBalancerPolicyOutput, AWSError>;
  /**
   * Creates a policy with the specified attributes for the specified load balancer. Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.
   */
  createLoadBalancerPolicy(callback?: (err: AWSError, data: ELB.Types.CreateLoadBalancerPolicyOutput) => void): Request<ELB.Types.CreateLoadBalancerPolicyOutput, AWSError>;
  /**
   * Deletes the specified load balancer. If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances. If the load balancer does not exist or has already been deleted, the call to DeleteLoadBalancer still succeeds.
   */
  deleteLoadBalancer(params: ELB.Types.DeleteAccessPointInput, callback?: (err: AWSError, data: ELB.Types.DeleteAccessPointOutput) => void): Request<ELB.Types.DeleteAccessPointOutput, AWSError>;
  /**
   * Deletes the specified load balancer. If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances. If the load balancer does not exist or has already been deleted, the call to DeleteLoadBalancer still succeeds.
   */
  deleteLoadBalancer(callback?: (err: AWSError, data: ELB.Types.DeleteAccessPointOutput) => void): Request<ELB.Types.DeleteAccessPointOutput, AWSError>;
  /**
   * Deletes the specified listeners from the specified load balancer.
   */
  deleteLoadBalancerListeners(params: ELB.Types.DeleteLoadBalancerListenerInput, callback?: (err: AWSError, data: ELB.Types.DeleteLoadBalancerListenerOutput) => void): Request<ELB.Types.DeleteLoadBalancerListenerOutput, AWSError>;
  /**
   * Deletes the specified listeners from the specified load balancer.
   */
  deleteLoadBalancerListeners(callback?: (err: AWSError, data: ELB.Types.DeleteLoadBalancerListenerOutput) => void): Request<ELB.Types.DeleteLoadBalancerListenerOutput, AWSError>;
  /**
   * Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.
   */
  deleteLoadBalancerPolicy(params: ELB.Types.DeleteLoadBalancerPolicyInput, callback?: (err: AWSError, data: ELB.Types.DeleteLoadBalancerPolicyOutput) => void): Request<ELB.Types.DeleteLoadBalancerPolicyOutput, AWSError>;
  /**
   * Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.
   */
  deleteLoadBalancerPolicy(callback?: (err: AWSError, data: ELB.Types.DeleteLoadBalancerPolicyOutput) => void): Request<ELB.Types.DeleteLoadBalancerPolicyOutput, AWSError>;
  /**
   * Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer. You can use DescribeLoadBalancers to verify that the instance is deregistered from the load balancer. For more information, see Register or De-Register EC2 Instances in the Classic Load Balancer Guide.
   */
  deregisterInstancesFromLoadBalancer(params: ELB.Types.DeregisterEndPointsInput, callback?: (err: AWSError, data: ELB.Types.DeregisterEndPointsOutput) => void): Request<ELB.Types.DeregisterEndPointsOutput, AWSError>;
  /**
   * Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer. You can use DescribeLoadBalancers to verify that the instance is deregistered from the load balancer. For more information, see Register or De-Register EC2 Instances in the Classic Load Balancer Guide.
   */
  deregisterInstancesFromLoadBalancer(callback?: (err: AWSError, data: ELB.Types.DeregisterEndPointsOutput) => void): Request<ELB.Types.DeregisterEndPointsOutput, AWSError>;
  /**
   * Describes the current Elastic Load Balancing resource limits for your AWS account. For more information, see Limits for Your Classic Load Balancer in the Classic Load Balancer Guide.
   */
  describeAccountLimits(params: ELB.Types.DescribeAccountLimitsInput, callback?: (err: AWSError, data: ELB.Types.DescribeAccountLimitsOutput) => void): Request<ELB.Types.DescribeAccountLimitsOutput, AWSError>;
  /**
   * Describes the current Elastic Load Balancing resource limits for your AWS account. For more information, see Limits for Your Classic Load Balancer in the Classic Load Balancer Guide.
   */
  describeAccountLimits(callback?: (err: AWSError, data: ELB.Types.DescribeAccountLimitsOutput) => void): Request<ELB.Types.DescribeAccountLimitsOutput, AWSError>;
  /**
   * Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.
   */
  describeInstanceHealth(params: ELB.Types.DescribeEndPointStateInput, callback?: (err: AWSError, data: ELB.Types.DescribeEndPointStateOutput) => void): Request<ELB.Types.DescribeEndPointStateOutput, AWSError>;
  /**
   * Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.
   */
  describeInstanceHealth(callback?: (err: AWSError, data: ELB.Types.DescribeEndPointStateOutput) => void): Request<ELB.Types.DescribeEndPointStateOutput, AWSError>;
  /**
   * Describes the attributes for the specified load balancer.
   */
  describeLoadBalancerAttributes(params: ELB.Types.DescribeLoadBalancerAttributesInput, callback?: (err: AWSError, data: ELB.Types.DescribeLoadBalancerAttributesOutput) => void): Request<ELB.Types.DescribeLoadBalancerAttributesOutput, AWSError>;
  /**
   * Describes the attributes for the specified load balancer.
   */
  describeLoadBalancerAttributes(callback?: (err: AWSError, data: ELB.Types.DescribeLoadBalancerAttributesOutput) => void): Request<ELB.Types.DescribeLoadBalancerAttributesOutput, AWSError>;
  /**
   * Describes the specified policies. If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the ELBSample- prefix.
   */
  describeLoadBalancerPolicies(params: ELB.Types.DescribeLoadBalancerPoliciesInput, callback?: (err: AWSError, data: ELB.Types.DescribeLoadBalancerPoliciesOutput) => void): Request<ELB.Types.DescribeLoadBalancerPoliciesOutput, AWSError>;
  /**
   * Describes the specified policies. If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the ELBSample- prefix.
   */
  describeLoadBalancerPolicies(callback?: (err: AWSError, data: ELB.Types.DescribeLoadBalancerPoliciesOutput) => void): Request<ELB.Types.DescribeLoadBalancerPoliciesOutput, AWSError>;
  /**
   * Describes the specified load balancer policy types or all load balancer policy types. The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances. You can use CreateLoadBalancerPolicy to create a policy configuration for any of these policy types. Then, depending on the policy type, use either SetLoadBalancerPoliciesOfListener or SetLoadBalancerPoliciesForBackendServer to set the policy.
   */
  describeLoadBalancerPolicyTypes(params: ELB.Types.DescribeLoadBalancerPolicyTypesInput, callback?: (err: AWSError, data: ELB.Types.DescribeLoadBalancerPolicyTypesOutput) => void): Request<ELB.Types.DescribeLoadBalancerPolicyTypesOutput, AWSError>;
  /**
   * Describes the specified load balancer policy types or all load balancer policy types. The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances. You can use CreateLoadBalancerPolicy to create a policy configuration for any of these policy types. Then, depending on the policy type, use either SetLoadBalancerPoliciesOfListener or SetLoadBalancerPoliciesForBackendServer to set the policy.
   */
  describeLoadBalancerPolicyTypes(callback?: (err: AWSError, data: ELB.Types.DescribeLoadBalancerPolicyTypesOutput) => void): Request<ELB.Types.DescribeLoadBalancerPolicyTypesOutput, AWSError>;
  /**
   * Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.
   */
  describeLoadBalancers(params: ELB.Types.DescribeAccessPointsInput, callback?: (err: AWSError, data: ELB.Types.DescribeAccessPointsOutput) => void): Request<ELB.Types.DescribeAccessPointsOutput, AWSError>;
  /**
   * Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.
   */
  describeLoadBalancers(callback?: (err: AWSError, data: ELB.Types.DescribeAccessPointsOutput) => void): Request<ELB.Types.DescribeAccessPointsOutput, AWSError>;
  /**
   * Describes the tags associated with the specified load balancers.
   */
  describeTags(params: ELB.Types.DescribeTagsInput, callback?: (err: AWSError, data: ELB.Types.DescribeTagsOutput) => void): Request<ELB.Types.DescribeTagsOutput, AWSError>;
  /**
   * Describes the tags associated with the specified load balancers.
   */
  describeTags(callback?: (err: AWSError, data: ELB.Types.DescribeTagsOutput) => void): Request<ELB.Types.DescribeTagsOutput, AWSError>;
  /**
   * Removes the specified subnets from the set of configured subnets for the load balancer. After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the OutOfService state. Then, the load balancer balances the traffic among the remaining routable subnets.
   */
  detachLoadBalancerFromSubnets(params: ELB.Types.DetachLoadBalancerFromSubnetsInput, callback?: (err: AWSError, data: ELB.Types.DetachLoadBalancerFromSubnetsOutput) => void): Request<ELB.Types.DetachLoadBalancerFromSubnetsOutput, AWSError>;
  /**
   * Removes the specified subnets from the set of configured subnets for the load balancer. After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the OutOfService state. Then, the load balancer balances the traffic among the remaining routable subnets.
   */
  detachLoadBalancerFromSubnets(callback?: (err: AWSError, data: ELB.Types.DetachLoadBalancerFromSubnetsOutput) => void): Request<ELB.Types.DetachLoadBalancerFromSubnetsOutput, AWSError>;
  /**
   * Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer. There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the OutOfService state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones. For more information, see Add or Remove Availability Zones in the Classic Load Balancer Guide.
   */
  disableAvailabilityZonesForLoadBalancer(params: ELB.Types.RemoveAvailabilityZonesInput, callback?: (err: AWSError, data: ELB.Types.RemoveAvailabilityZonesOutput) => void): Request<ELB.Types.RemoveAvailabilityZonesOutput, AWSError>;
  /**
   * Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer. There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the OutOfService state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones. For more information, see Add or Remove Availability Zones in the Classic Load Balancer Guide.
   */
  disableAvailabilityZonesForLoadBalancer(callback?: (err: AWSError, data: ELB.Types.RemoveAvailabilityZonesOutput) => void): Request<ELB.Types.RemoveAvailabilityZonesOutput, AWSError>;
  /**
   * Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer. The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see Add or Remove Availability Zones in the Classic Load Balancer Guide.
   */
  enableAvailabilityZonesForLoadBalancer(params: ELB.Types.AddAvailabilityZonesInput, callback?: (err: AWSError, data: ELB.Types.AddAvailabilityZonesOutput) => void): Request<ELB.Types.AddAvailabilityZonesOutput, AWSError>;
  /**
   * Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer. The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see Add or Remove Availability Zones in the Classic Load Balancer Guide.
   */
  enableAvailabilityZonesForLoadBalancer(callback?: (err: AWSError, data: ELB.Types.AddAvailabilityZonesOutput) => void): Request<ELB.Types.AddAvailabilityZonesOutput, AWSError>;
  /**
   * Modifies the attributes of the specified load balancer. You can modify the load balancer attributes, such as AccessLogs, ConnectionDraining, and CrossZoneLoadBalancing by either enabling or disabling them. Or, you can modify the load balancer attribute ConnectionSettings by specifying an idle connection timeout value for your load balancer. For more information, see the following in the Classic Load Balancer Guide:    Cross-Zone Load Balancing     Connection Draining     Access Logs     Idle Connection Timeout   
   */
  modifyLoadBalancerAttributes(params: ELB.Types.ModifyLoadBalancerAttributesInput, callback?: (err: AWSError, data: ELB.Types.ModifyLoadBalancerAttributesOutput) => void): Request<ELB.Types.ModifyLoadBalancerAttributesOutput, AWSError>;
  /**
   * Modifies the attributes of the specified load balancer. You can modify the load balancer attributes, such as AccessLogs, ConnectionDraining, and CrossZoneLoadBalancing by either enabling or disabling them. Or, you can modify the load balancer attribute ConnectionSettings by specifying an idle connection timeout value for your load balancer. For more information, see the following in the Classic Load Balancer Guide:    Cross-Zone Load Balancing     Connection Draining     Access Logs     Idle Connection Timeout   
   */
  modifyLoadBalancerAttributes(callback?: (err: AWSError, data: ELB.Types.ModifyLoadBalancerAttributesOutput) => void): Request<ELB.Types.ModifyLoadBalancerAttributesOutput, AWSError>;
  /**
   * Adds the specified instances to the specified load balancer. The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC. Note that RegisterInstanceWithLoadBalancer completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use DescribeLoadBalancers or DescribeInstanceHealth. After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the OutOfService state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the InService state. To deregister instances from a load balancer, use DeregisterInstancesFromLoadBalancer. For more information, see Register or De-Register EC2 Instances in the Classic Load Balancer Guide.
   */
  registerInstancesWithLoadBalancer(params: ELB.Types.RegisterEndPointsInput, callback?: (err: AWSError, data: ELB.Types.RegisterEndPointsOutput) => void): Request<ELB.Types.RegisterEndPointsOutput, AWSError>;
  /**
   * Adds the specified instances to the specified load balancer. The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC. Note that RegisterInstanceWithLoadBalancer completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use DescribeLoadBalancers or DescribeInstanceHealth. After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the OutOfService state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the InService state. To deregister instances from a load balancer, use DeregisterInstancesFromLoadBalancer. For more information, see Register or De-Register EC2 Instances in the Classic Load Balancer Guide.
   */
  registerInstancesWithLoadBalancer(callback?: (err: AWSError, data: ELB.Types.RegisterEndPointsOutput) => void): Request<ELB.Types.RegisterEndPointsOutput, AWSError>;
  /**
   * Removes one or more tags from the specified load balancer.
   */
  removeTags(params: ELB.Types.RemoveTagsInput, callback?: (err: AWSError, data: ELB.Types.RemoveTagsOutput) => void): Request<ELB.Types.RemoveTagsOutput, AWSError>;
  /**
   * Removes one or more tags from the specified load balancer.
   */
  removeTags(callback?: (err: AWSError, data: ELB.Types.RemoveTagsOutput) => void): Request<ELB.Types.RemoveTagsOutput, AWSError>;
  /**
   * Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port. For more information about updating your SSL certificate, see Replace the SSL Certificate for Your Load Balancer in the Classic Load Balancer Guide.
   */
  setLoadBalancerListenerSSLCertificate(params: ELB.Types.SetLoadBalancerListenerSSLCertificateInput, callback?: (err: AWSError, data: ELB.Types.SetLoadBalancerListenerSSLCertificateOutput) => void): Request<ELB.Types.SetLoadBalancerListenerSSLCertificateOutput, AWSError>;
  /**
   * Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port. For more information about updating your SSL certificate, see Replace the SSL Certificate for Your Load Balancer in the Classic Load Balancer Guide.
   */
  setLoadBalancerListenerSSLCertificate(callback?: (err: AWSError, data: ELB.Types.SetLoadBalancerListenerSSLCertificateOutput) => void): Request<ELB.Types.SetLoadBalancerListenerSSLCertificateOutput, AWSError>;
  /**
   * Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies. Each time you use SetLoadBalancerPoliciesForBackendServer to enable the policies, use the PolicyNames parameter to list the policies that you want to enable. You can use DescribeLoadBalancers or DescribeLoadBalancerPolicies to verify that the policy is associated with the EC2 instance. For more information about enabling back-end instance authentication, see Configure Back-end Instance Authentication in the Classic Load Balancer Guide. For more information about Proxy Protocol, see Configure Proxy Protocol Support in the Classic Load Balancer Guide.
   */
  setLoadBalancerPoliciesForBackendServer(params: ELB.Types.SetLoadBalancerPoliciesForBackendServerInput, callback?: (err: AWSError, data: ELB.Types.SetLoadBalancerPoliciesForBackendServerOutput) => void): Request<ELB.Types.SetLoadBalancerPoliciesForBackendServerOutput, AWSError>;
  /**
   * Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies. Each time you use SetLoadBalancerPoliciesForBackendServer to enable the policies, use the PolicyNames parameter to list the policies that you want to enable. You can use DescribeLoadBalancers or DescribeLoadBalancerPolicies to verify that the policy is associated with the EC2 instance. For more information about enabling back-end instance authentication, see Configure Back-end Instance Authentication in the Classic Load Balancer Guide. For more information about Proxy Protocol, see Configure Proxy Protocol Support in the Classic Load Balancer Guide.
   */
  setLoadBalancerPoliciesForBackendServer(callback?: (err: AWSError, data: ELB.Types.SetLoadBalancerPoliciesForBackendServerOutput) => void): Request<ELB.Types.SetLoadBalancerPoliciesForBackendServerOutput, AWSError>;
  /**
   * Replaces the current set of policies for the specified load balancer port with the specified set of policies. To enable back-end server authentication, use SetLoadBalancerPoliciesForBackendServer. For more information about setting policies, see Update the SSL Negotiation Configuration, Duration-Based Session Stickiness, and Application-Controlled Session Stickiness in the Classic Load Balancer Guide.
   */
  setLoadBalancerPoliciesOfListener(params: ELB.Types.SetLoadBalancerPoliciesOfListenerInput, callback?: (err: AWSError, data: ELB.Types.SetLoadBalancerPoliciesOfListenerOutput) => void): Request<ELB.Types.SetLoadBalancerPoliciesOfListenerOutput, AWSError>;
  /**
   * Replaces the current set of policies for the specified load balancer port with the specified set of policies. To enable back-end server authentication, use SetLoadBalancerPoliciesForBackendServer. For more information about setting policies, see Update the SSL Negotiation Configuration, Duration-Based Session Stickiness, and Application-Controlled Session Stickiness in the Classic Load Balancer Guide.
   */
  setLoadBalancerPoliciesOfListener(callback?: (err: AWSError, data: ELB.Types.SetLoadBalancerPoliciesOfListenerOutput) => void): Request<ELB.Types.SetLoadBalancerPoliciesOfListenerOutput, AWSError>;
  /**
   * Waits for the instanceDeregistered state by periodically calling the underlying ELB.describeInstanceHealthoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "instanceDeregistered", params: ELB.Types.DescribeEndPointStateInput, callback?: (err: AWSError, data: ELB.Types.DescribeEndPointStateOutput) => void): Request<ELB.Types.DescribeEndPointStateOutput, AWSError>;
  /**
   * Waits for the instanceDeregistered state by periodically calling the underlying ELB.describeInstanceHealthoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "instanceDeregistered", callback?: (err: AWSError, data: ELB.Types.DescribeEndPointStateOutput) => void): Request<ELB.Types.DescribeEndPointStateOutput, AWSError>;
  /**
   * Waits for the anyInstanceInService state by periodically calling the underlying ELB.describeInstanceHealthoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "anyInstanceInService", params: ELB.Types.DescribeEndPointStateInput, callback?: (err: AWSError, data: ELB.Types.DescribeEndPointStateOutput) => void): Request<ELB.Types.DescribeEndPointStateOutput, AWSError>;
  /**
   * Waits for the anyInstanceInService state by periodically calling the underlying ELB.describeInstanceHealthoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "anyInstanceInService", callback?: (err: AWSError, data: ELB.Types.DescribeEndPointStateOutput) => void): Request<ELB.Types.DescribeEndPointStateOutput, AWSError>;
  /**
   * Waits for the instanceInService state by periodically calling the underlying ELB.describeInstanceHealthoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "instanceInService", params: ELB.Types.DescribeEndPointStateInput, callback?: (err: AWSError, data: ELB.Types.DescribeEndPointStateOutput) => void): Request<ELB.Types.DescribeEndPointStateOutput, AWSError>;
  /**
   * Waits for the instanceInService state by periodically calling the underlying ELB.describeInstanceHealthoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "instanceInService", callback?: (err: AWSError, data: ELB.Types.DescribeEndPointStateOutput) => void): Request<ELB.Types.DescribeEndPointStateOutput, AWSError>;
}
declare namespace ELB {
  export interface AccessLog {
    /**
     * Specifies whether access logs are enabled for the load balancer.
     */
    Enabled: AccessLogEnabled;
    /**
     * The name of the Amazon S3 bucket where the access logs are stored.
     */
    S3BucketName?: S3BucketName;
    /**
     * The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes. Default: 60 minutes
     */
    EmitInterval?: AccessLogInterval;
    /**
     * The logical hierarchy you created for your Amazon S3 bucket, for example my-bucket-prefix/prod. If the prefix is not provided, the log is placed at the root level of the bucket.
     */
    S3BucketPrefix?: AccessLogPrefix;
  }
  export type AccessLogEnabled = boolean;
  export type AccessLogInterval = number;
  export type AccessLogPrefix = string;
  export type AccessPointName = string;
  export type AccessPointPort = number;
  export interface AddAvailabilityZonesInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The Availability Zones. These must be in the same region as the load balancer.
     */
    AvailabilityZones: AvailabilityZones;
  }
  export interface AddAvailabilityZonesOutput {
    /**
     * The updated list of Availability Zones for the load balancer.
     */
    AvailabilityZones?: AvailabilityZones;
  }
  export interface AddTagsInput {
    /**
     * The name of the load balancer. You can specify one load balancer only.
     */
    LoadBalancerNames: LoadBalancerNames;
    /**
     * The tags.
     */
    Tags: TagList;
  }
  export interface AddTagsOutput {
  }
  export interface AdditionalAttribute {
    /**
     * This parameter is reserved.
     */
    Key?: AdditionalAttributeKey;
    /**
     * This parameter is reserved.
     */
    Value?: AdditionalAttributeValue;
  }
  export type AdditionalAttributeKey = string;
  export type AdditionalAttributeValue = string;
  export type AdditionalAttributes = AdditionalAttribute[];
  export type AppCookieStickinessPolicies = AppCookieStickinessPolicy[];
  export interface AppCookieStickinessPolicy {
    /**
     * The mnemonic name for the policy being created. The name must be unique within a set of policies for this load balancer.
     */
    PolicyName?: PolicyName;
    /**
     * The name of the application cookie used for stickiness.
     */
    CookieName?: CookieName;
  }
  export interface ApplySecurityGroupsToLoadBalancerInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The IDs of the security groups to associate with the load balancer. Note that you cannot specify the name of the security group.
     */
    SecurityGroups: SecurityGroups;
  }
  export interface ApplySecurityGroupsToLoadBalancerOutput {
    /**
     * The IDs of the security groups associated with the load balancer.
     */
    SecurityGroups?: SecurityGroups;
  }
  export interface AttachLoadBalancerToSubnetsInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The IDs of the subnets to add. You can add only one subnet per Availability Zone.
     */
    Subnets: Subnets;
  }
  export interface AttachLoadBalancerToSubnetsOutput {
    /**
     * The IDs of the subnets attached to the load balancer.
     */
    Subnets?: Subnets;
  }
  export type AttributeName = string;
  export type AttributeType = string;
  export type AttributeValue = string;
  export type AvailabilityZone = string;
  export type AvailabilityZones = AvailabilityZone[];
  export interface BackendServerDescription {
    /**
     * The port on which the EC2 instance is listening.
     */
    InstancePort?: InstancePort;
    /**
     * The names of the policies enabled for the EC2 instance.
     */
    PolicyNames?: PolicyNames;
  }
  export type BackendServerDescriptions = BackendServerDescription[];
  export type Cardinality = string;
  export interface ConfigureHealthCheckInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The configuration information.
     */
    HealthCheck: HealthCheck;
  }
  export interface ConfigureHealthCheckOutput {
    /**
     * The updated health check.
     */
    HealthCheck?: HealthCheck;
  }
  export interface ConnectionDraining {
    /**
     * Specifies whether connection draining is enabled for the load balancer.
     */
    Enabled: ConnectionDrainingEnabled;
    /**
     * The maximum time, in seconds, to keep the existing connections open before deregistering the instances.
     */
    Timeout?: ConnectionDrainingTimeout;
  }
  export type ConnectionDrainingEnabled = boolean;
  export type ConnectionDrainingTimeout = number;
  export interface ConnectionSettings {
    /**
     * The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.
     */
    IdleTimeout: IdleTimeout;
  }
  export type CookieExpirationPeriod = number;
  export type CookieName = string;
  export interface CreateAccessPointInput {
    /**
     * The name of the load balancer. This name must be unique within your set of load balancers for the region, must have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and cannot begin or end with a hyphen.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The listeners. For more information, see Listeners for Your Classic Load Balancer in the Classic Load Balancer Guide.
     */
    Listeners: Listeners;
    /**
     * One or more Availability Zones from the same region as the load balancer. You must specify at least one Availability Zone. You can add more Availability Zones after you create the load balancer using EnableAvailabilityZonesForLoadBalancer.
     */
    AvailabilityZones?: AvailabilityZones;
    /**
     * The IDs of the subnets in your VPC to attach to the load balancer. Specify one subnet per Availability Zone specified in AvailabilityZones.
     */
    Subnets?: Subnets;
    /**
     * The IDs of the security groups to assign to the load balancer.
     */
    SecurityGroups?: SecurityGroups;
    /**
     * The type of a load balancer. Valid only for load balancers in a VPC. By default, Elastic Load Balancing creates an Internet-facing load balancer with a DNS name that resolves to public IP addresses. For more information about Internet-facing and Internal load balancers, see Load Balancer Scheme in the Elastic Load Balancing User Guide. Specify internal to create a load balancer with a DNS name that resolves to private IP addresses.
     */
    Scheme?: LoadBalancerScheme;
    /**
     * A list of tags to assign to the load balancer. For more information about tagging your load balancer, see Tag Your Classic Load Balancer in the Classic Load Balancer Guide.
     */
    Tags?: TagList;
  }
  export interface CreateAccessPointOutput {
    /**
     * The DNS name of the load balancer.
     */
    DNSName?: DNSName;
  }
  export interface CreateAppCookieStickinessPolicyInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.
     */
    PolicyName: PolicyName;
    /**
     * The name of the application cookie used for stickiness.
     */
    CookieName: CookieName;
  }
  export interface CreateAppCookieStickinessPolicyOutput {
  }
  export interface CreateLBCookieStickinessPolicyInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.
     */
    PolicyName: PolicyName;
    /**
     * The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.
     */
    CookieExpirationPeriod?: CookieExpirationPeriod;
  }
  export interface CreateLBCookieStickinessPolicyOutput {
  }
  export interface CreateLoadBalancerListenerInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The listeners.
     */
    Listeners: Listeners;
  }
  export interface CreateLoadBalancerListenerOutput {
  }
  export interface CreateLoadBalancerPolicyInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The name of the load balancer policy to be created. This name must be unique within the set of policies for this load balancer.
     */
    PolicyName: PolicyName;
    /**
     * The name of the base policy type. To get the list of policy types, use DescribeLoadBalancerPolicyTypes.
     */
    PolicyTypeName: PolicyTypeName;
    /**
     * The policy attributes.
     */
    PolicyAttributes?: PolicyAttributes;
  }
  export interface CreateLoadBalancerPolicyOutput {
  }
  export type CreatedTime = Date;
  export interface CrossZoneLoadBalancing {
    /**
     * Specifies whether cross-zone load balancing is enabled for the load balancer.
     */
    Enabled: CrossZoneLoadBalancingEnabled;
  }
  export type CrossZoneLoadBalancingEnabled = boolean;
  export type DNSName = string;
  export type DefaultValue = string;
  export interface DeleteAccessPointInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
  }
  export interface DeleteAccessPointOutput {
  }
  export interface DeleteLoadBalancerListenerInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The client port numbers of the listeners.
     */
    LoadBalancerPorts: Ports;
  }
  export interface DeleteLoadBalancerListenerOutput {
  }
  export interface DeleteLoadBalancerPolicyInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The name of the policy.
     */
    PolicyName: PolicyName;
  }
  export interface DeleteLoadBalancerPolicyOutput {
  }
  export interface DeregisterEndPointsInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The IDs of the instances.
     */
    Instances: Instances;
  }
  export interface DeregisterEndPointsOutput {
    /**
     * The remaining instances registered with the load balancer.
     */
    Instances?: Instances;
  }
  export interface DescribeAccessPointsInput {
    /**
     * The names of the load balancers.
     */
    LoadBalancerNames?: LoadBalancerNames;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: Marker;
    /**
     * The maximum number of results to return with this call (a number from 1 to 400). The default is 400.
     */
    PageSize?: PageSize;
  }
  export interface DescribeAccessPointsOutput {
    /**
     * Information about the load balancers.
     */
    LoadBalancerDescriptions?: LoadBalancerDescriptions;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    NextMarker?: Marker;
  }
  export interface DescribeAccountLimitsInput {
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: Marker;
    /**
     * The maximum number of results to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface DescribeAccountLimitsOutput {
    /**
     * Information about the limits.
     */
    Limits?: Limits;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    NextMarker?: Marker;
  }
  export interface DescribeEndPointStateInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The IDs of the instances.
     */
    Instances?: Instances;
  }
  export interface DescribeEndPointStateOutput {
    /**
     * Information about the health of the instances.
     */
    InstanceStates?: InstanceStates;
  }
  export interface DescribeLoadBalancerAttributesInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
  }
  export interface DescribeLoadBalancerAttributesOutput {
    /**
     * Information about the load balancer attributes.
     */
    LoadBalancerAttributes?: LoadBalancerAttributes;
  }
  export interface DescribeLoadBalancerPoliciesInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName?: AccessPointName;
    /**
     * The names of the policies.
     */
    PolicyNames?: PolicyNames;
  }
  export interface DescribeLoadBalancerPoliciesOutput {
    /**
     * Information about the policies.
     */
    PolicyDescriptions?: PolicyDescriptions;
  }
  export interface DescribeLoadBalancerPolicyTypesInput {
    /**
     * The names of the policy types. If no names are specified, describes all policy types defined by Elastic Load Balancing.
     */
    PolicyTypeNames?: PolicyTypeNames;
  }
  export interface DescribeLoadBalancerPolicyTypesOutput {
    /**
     * Information about the policy types.
     */
    PolicyTypeDescriptions?: PolicyTypeDescriptions;
  }
  export interface DescribeTagsInput {
    /**
     * The names of the load balancers.
     */
    LoadBalancerNames: LoadBalancerNamesMax20;
  }
  export interface DescribeTagsOutput {
    /**
     * Information about the tags.
     */
    TagDescriptions?: TagDescriptions;
  }
  export type Description = string;
  export interface DetachLoadBalancerFromSubnetsInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The IDs of the subnets.
     */
    Subnets: Subnets;
  }
  export interface DetachLoadBalancerFromSubnetsOutput {
    /**
     * The IDs of the remaining subnets for the load balancer.
     */
    Subnets?: Subnets;
  }
  export type EndPointPort = number;
  export interface HealthCheck {
    /**
     * The instance being checked. The protocol is either TCP, HTTP, HTTPS, or SSL. The range of valid ports is one (1) through 65535. TCP is the default, specified as a TCP: port pair, for example "TCP:5000". In this case, a health check simply attempts to open a TCP connection to the instance on the specified port. Failure to connect within the configured timeout is considered unhealthy. SSL is also specified as SSL: port pair, for example, SSL:5000. For HTTP/HTTPS, you must include a ping path in the string. HTTP is specified as a HTTP:port;/;PathToPing; grouping, for example "HTTP:80/weather/us/wa/seattle". In this case, a HTTP GET request is issued to the instance on the given port and path. Any answer other than "200 OK" within the timeout period is considered unhealthy. The total length of the HTTP ping target must be 1024 16-bit Unicode characters or less.
     */
    Target: HealthCheckTarget;
    /**
     * The approximate interval, in seconds, between health checks of an individual instance.
     */
    Interval: HealthCheckInterval;
    /**
     * The amount of time, in seconds, during which no response means a failed health check. This value must be less than the Interval value.
     */
    Timeout: HealthCheckTimeout;
    /**
     * The number of consecutive health check failures required before moving the instance to the Unhealthy state.
     */
    UnhealthyThreshold: UnhealthyThreshold;
    /**
     * The number of consecutive health checks successes required before moving the instance to the Healthy state.
     */
    HealthyThreshold: HealthyThreshold;
  }
  export type HealthCheckInterval = number;
  export type HealthCheckTarget = string;
  export type HealthCheckTimeout = number;
  export type HealthyThreshold = number;
  export type IdleTimeout = number;
  export interface Instance {
    /**
     * The instance ID.
     */
    InstanceId?: InstanceId;
  }
  export type InstanceId = string;
  export type InstancePort = number;
  export interface InstanceState {
    /**
     * The ID of the instance.
     */
    InstanceId?: InstanceId;
    /**
     * The current state of the instance. Valid values: InService | OutOfService | Unknown 
     */
    State?: State;
    /**
     * Information about the cause of OutOfService instances. Specifically, whether the cause is Elastic Load Balancing or the instance. Valid values: ELB | Instance | N/A 
     */
    ReasonCode?: ReasonCode;
    /**
     * A description of the instance state. This string can contain one or more of the following messages.    N/A     A transient error occurred. Please try again later.     Instance has failed at least the UnhealthyThreshold number of health checks consecutively.     Instance has not passed the configured HealthyThreshold number of health checks consecutively.     Instance registration is still in progress.     Instance is in the EC2 Availability Zone for which LoadBalancer is not configured to route traffic to.     Instance is not currently registered with the LoadBalancer.     Instance deregistration currently in progress.     Disable Availability Zone is currently in progress.     Instance is in pending state.     Instance is in stopped state.     Instance is in terminated state.   
     */
    Description?: Description;
  }
  export type InstanceStates = InstanceState[];
  export type Instances = Instance[];
  export type LBCookieStickinessPolicies = LBCookieStickinessPolicy[];
  export interface LBCookieStickinessPolicy {
    /**
     * The name of the policy. This name must be unique within the set of policies for this load balancer.
     */
    PolicyName?: PolicyName;
    /**
     * The time period, in seconds, after which the cookie should be considered stale. If this parameter is not specified, the stickiness session lasts for the duration of the browser session.
     */
    CookieExpirationPeriod?: CookieExpirationPeriod;
  }
  export interface Limit {
    /**
     * The name of the limit. The possible values are:   classic-listeners   classic-load-balancers  
     */
    Name?: Name;
    /**
     * The maximum value of the limit.
     */
    Max?: Max;
  }
  export type Limits = Limit[];
  export interface Listener {
    /**
     * The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.
     */
    Protocol: Protocol;
    /**
     * The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.
     */
    LoadBalancerPort: AccessPointPort;
    /**
     * The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL. If the front-end protocol is HTTP, HTTPS, TCP, or SSL, InstanceProtocol must be at the same protocol. If there is another listener with the same InstancePort whose InstanceProtocol is secure, (HTTPS or SSL), the listener's InstanceProtocol must also be secure. If there is another listener with the same InstancePort whose InstanceProtocol is HTTP or TCP, the listener's InstanceProtocol must be HTTP or TCP.
     */
    InstanceProtocol?: Protocol;
    /**
     * The port on which the instance is listening.
     */
    InstancePort: InstancePort;
    /**
     * The Amazon Resource Name (ARN) of the server certificate.
     */
    SSLCertificateId?: SSLCertificateId;
  }
  export interface ListenerDescription {
    /**
     * The listener.
     */
    Listener?: Listener;
    /**
     * The policies. If there are no policies enabled, the list is empty.
     */
    PolicyNames?: PolicyNames;
  }
  export type ListenerDescriptions = ListenerDescription[];
  export type Listeners = Listener[];
  export interface LoadBalancerAttributes {
    /**
     * If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones. For more information, see Configure Cross-Zone Load Balancing in the Classic Load Balancer Guide.
     */
    CrossZoneLoadBalancing?: CrossZoneLoadBalancing;
    /**
     * If enabled, the load balancer captures detailed information of all requests and delivers the information to the Amazon S3 bucket that you specify. For more information, see Enable Access Logs in the Classic Load Balancer Guide.
     */
    AccessLog?: AccessLog;
    /**
     * If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance. For more information, see Configure Connection Draining in the Classic Load Balancer Guide.
     */
    ConnectionDraining?: ConnectionDraining;
    /**
     * If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration. By default, Elastic Load Balancing maintains a 60-second idle connection timeout for both front-end and back-end connections of your load balancer. For more information, see Configure Idle Connection Timeout in the Classic Load Balancer Guide.
     */
    ConnectionSettings?: ConnectionSettings;
    /**
     * This parameter is reserved.
     */
    AdditionalAttributes?: AdditionalAttributes;
  }
  export interface LoadBalancerDescription {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName?: AccessPointName;
    /**
     * The DNS name of the load balancer.
     */
    DNSName?: DNSName;
    /**
     * The DNS name of the load balancer. For more information, see Configure a Custom Domain Name in the Classic Load Balancer Guide.
     */
    CanonicalHostedZoneName?: DNSName;
    /**
     * The ID of the Amazon Route 53 hosted zone for the load balancer.
     */
    CanonicalHostedZoneNameID?: DNSName;
    /**
     * The listeners for the load balancer.
     */
    ListenerDescriptions?: ListenerDescriptions;
    /**
     * The policies defined for the load balancer.
     */
    Policies?: Policies;
    /**
     * Information about your EC2 instances.
     */
    BackendServerDescriptions?: BackendServerDescriptions;
    /**
     * The Availability Zones for the load balancer.
     */
    AvailabilityZones?: AvailabilityZones;
    /**
     * The IDs of the subnets for the load balancer.
     */
    Subnets?: Subnets;
    /**
     * The ID of the VPC for the load balancer.
     */
    VPCId?: VPCId;
    /**
     * The IDs of the instances for the load balancer.
     */
    Instances?: Instances;
    /**
     * Information about the health checks conducted on the load balancer.
     */
    HealthCheck?: HealthCheck;
    /**
     * The security group for the load balancer, which you can use as part of your inbound rules for your registered instances. To only allow traffic from load balancers, add a security group rule that specifies this source security group as the inbound source.
     */
    SourceSecurityGroup?: SourceSecurityGroup;
    /**
     * The security groups for the load balancer. Valid only for load balancers in a VPC.
     */
    SecurityGroups?: SecurityGroups;
    /**
     * The date and time the load balancer was created.
     */
    CreatedTime?: CreatedTime;
    /**
     * The type of load balancer. Valid only for load balancers in a VPC. If Scheme is internet-facing, the load balancer has a public DNS name that resolves to a public IP address. If Scheme is internal, the load balancer has a public DNS name that resolves to a private IP address.
     */
    Scheme?: LoadBalancerScheme;
  }
  export type LoadBalancerDescriptions = LoadBalancerDescription[];
  export type LoadBalancerNames = AccessPointName[];
  export type LoadBalancerNamesMax20 = AccessPointName[];
  export type LoadBalancerScheme = string;
  export type Marker = string;
  export type Max = string;
  export interface ModifyLoadBalancerAttributesInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The attributes for the load balancer.
     */
    LoadBalancerAttributes: LoadBalancerAttributes;
  }
  export interface ModifyLoadBalancerAttributesOutput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName?: AccessPointName;
    /**
     * Information about the load balancer attributes.
     */
    LoadBalancerAttributes?: LoadBalancerAttributes;
  }
  export type Name = string;
  export type PageSize = number;
  export interface Policies {
    /**
     * The stickiness policies created using CreateAppCookieStickinessPolicy.
     */
    AppCookieStickinessPolicies?: AppCookieStickinessPolicies;
    /**
     * The stickiness policies created using CreateLBCookieStickinessPolicy.
     */
    LBCookieStickinessPolicies?: LBCookieStickinessPolicies;
    /**
     * The policies other than the stickiness policies.
     */
    OtherPolicies?: PolicyNames;
  }
  export interface PolicyAttribute {
    /**
     * The name of the attribute.
     */
    AttributeName?: AttributeName;
    /**
     * The value of the attribute.
     */
    AttributeValue?: AttributeValue;
  }
  export interface PolicyAttributeDescription {
    /**
     * The name of the attribute.
     */
    AttributeName?: AttributeName;
    /**
     * The value of the attribute.
     */
    AttributeValue?: AttributeValue;
  }
  export type PolicyAttributeDescriptions = PolicyAttributeDescription[];
  export interface PolicyAttributeTypeDescription {
    /**
     * The name of the attribute.
     */
    AttributeName?: AttributeName;
    /**
     * The type of the attribute. For example, Boolean or Integer.
     */
    AttributeType?: AttributeType;
    /**
     * A description of the attribute.
     */
    Description?: Description;
    /**
     * The default value of the attribute, if applicable.
     */
    DefaultValue?: DefaultValue;
    /**
     * The cardinality of the attribute. Valid values:   ONE(1) : Single value required   ZERO_OR_ONE(0..1) : Up to one value is allowed   ZERO_OR_MORE(0..*) : Optional. Multiple values are allowed   ONE_OR_MORE(1..*0) : Required. Multiple values are allowed  
     */
    Cardinality?: Cardinality;
  }
  export type PolicyAttributeTypeDescriptions = PolicyAttributeTypeDescription[];
  export type PolicyAttributes = PolicyAttribute[];
  export interface PolicyDescription {
    /**
     * The name of the policy.
     */
    PolicyName?: PolicyName;
    /**
     * The name of the policy type.
     */
    PolicyTypeName?: PolicyTypeName;
    /**
     * The policy attributes.
     */
    PolicyAttributeDescriptions?: PolicyAttributeDescriptions;
  }
  export type PolicyDescriptions = PolicyDescription[];
  export type PolicyName = string;
  export type PolicyNames = PolicyName[];
  export interface PolicyTypeDescription {
    /**
     * The name of the policy type.
     */
    PolicyTypeName?: PolicyTypeName;
    /**
     * A description of the policy type.
     */
    Description?: Description;
    /**
     * The description of the policy attributes associated with the policies defined by Elastic Load Balancing.
     */
    PolicyAttributeTypeDescriptions?: PolicyAttributeTypeDescriptions;
  }
  export type PolicyTypeDescriptions = PolicyTypeDescription[];
  export type PolicyTypeName = string;
  export type PolicyTypeNames = PolicyTypeName[];
  export type Ports = AccessPointPort[];
  export type Protocol = string;
  export type ReasonCode = string;
  export interface RegisterEndPointsInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The IDs of the instances.
     */
    Instances: Instances;
  }
  export interface RegisterEndPointsOutput {
    /**
     * The updated list of instances for the load balancer.
     */
    Instances?: Instances;
  }
  export interface RemoveAvailabilityZonesInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The Availability Zones.
     */
    AvailabilityZones: AvailabilityZones;
  }
  export interface RemoveAvailabilityZonesOutput {
    /**
     * The remaining Availability Zones for the load balancer.
     */
    AvailabilityZones?: AvailabilityZones;
  }
  export interface RemoveTagsInput {
    /**
     * The name of the load balancer. You can specify a maximum of one load balancer name.
     */
    LoadBalancerNames: LoadBalancerNames;
    /**
     * The list of tag keys to remove.
     */
    Tags: TagKeyList;
  }
  export interface RemoveTagsOutput {
  }
  export type S3BucketName = string;
  export type SSLCertificateId = string;
  export type SecurityGroupId = string;
  export type SecurityGroupName = string;
  export type SecurityGroupOwnerAlias = string;
  export type SecurityGroups = SecurityGroupId[];
  export interface SetLoadBalancerListenerSSLCertificateInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The port that uses the specified SSL certificate.
     */
    LoadBalancerPort: AccessPointPort;
    /**
     * The Amazon Resource Name (ARN) of the SSL certificate.
     */
    SSLCertificateId: SSLCertificateId;
  }
  export interface SetLoadBalancerListenerSSLCertificateOutput {
  }
  export interface SetLoadBalancerPoliciesForBackendServerInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The port number associated with the EC2 instance.
     */
    InstancePort: EndPointPort;
    /**
     * The names of the policies. If the list is empty, then all current polices are removed from the EC2 instance.
     */
    PolicyNames: PolicyNames;
  }
  export interface SetLoadBalancerPoliciesForBackendServerOutput {
  }
  export interface SetLoadBalancerPoliciesOfListenerInput {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName: AccessPointName;
    /**
     * The external port of the load balancer.
     */
    LoadBalancerPort: AccessPointPort;
    /**
     * The names of the policies. This list must include all policies to be enabled. If you omit a policy that is currently enabled, it is disabled. If the list is empty, all current policies are disabled.
     */
    PolicyNames: PolicyNames;
  }
  export interface SetLoadBalancerPoliciesOfListenerOutput {
  }
  export interface SourceSecurityGroup {
    /**
     * The owner of the security group.
     */
    OwnerAlias?: SecurityGroupOwnerAlias;
    /**
     * The name of the security group.
     */
    GroupName?: SecurityGroupName;
  }
  export type State = string;
  export type SubnetId = string;
  export type Subnets = SubnetId[];
  export interface Tag {
    /**
     * The key of the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value?: TagValue;
  }
  export interface TagDescription {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName?: AccessPointName;
    /**
     * The tags.
     */
    Tags?: TagList;
  }
  export type TagDescriptions = TagDescription[];
  export type TagKey = string;
  export type TagKeyList = TagKeyOnly[];
  export interface TagKeyOnly {
    /**
     * The name of the key.
     */
    Key?: TagKey;
  }
  export type TagList = Tag[];
  export type TagValue = string;
  export type UnhealthyThreshold = number;
  export type VPCId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2012-06-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ELB client.
   */
  export import Types = ELB;
}
export = ELB;
