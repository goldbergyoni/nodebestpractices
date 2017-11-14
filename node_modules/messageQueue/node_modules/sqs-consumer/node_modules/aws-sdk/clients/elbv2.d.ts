import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ELBv2 extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ELBv2.Types.ClientConfiguration)
  config: Config & ELBv2.Types.ClientConfiguration;
  /**
   * Adds the specified certificate to the specified secure listener. If the certificate was already added, the call is successful but the certificate is not added again. To list the certificates for your listener, use DescribeListenerCertificates. To remove certificates from your listener, use RemoveListenerCertificates.
   */
  addListenerCertificates(params: ELBv2.Types.AddListenerCertificatesInput, callback?: (err: AWSError, data: ELBv2.Types.AddListenerCertificatesOutput) => void): Request<ELBv2.Types.AddListenerCertificatesOutput, AWSError>;
  /**
   * Adds the specified certificate to the specified secure listener. If the certificate was already added, the call is successful but the certificate is not added again. To list the certificates for your listener, use DescribeListenerCertificates. To remove certificates from your listener, use RemoveListenerCertificates.
   */
  addListenerCertificates(callback?: (err: AWSError, data: ELBv2.Types.AddListenerCertificatesOutput) => void): Request<ELBv2.Types.AddListenerCertificatesOutput, AWSError>;
  /**
   * Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, and your target groups. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, AddTags updates its value. To list the current tags for your resources, use DescribeTags. To remove tags from your resources, use RemoveTags.
   */
  addTags(params: ELBv2.Types.AddTagsInput, callback?: (err: AWSError, data: ELBv2.Types.AddTagsOutput) => void): Request<ELBv2.Types.AddTagsOutput, AWSError>;
  /**
   * Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, and your target groups. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, AddTags updates its value. To list the current tags for your resources, use DescribeTags. To remove tags from your resources, use RemoveTags.
   */
  addTags(callback?: (err: AWSError, data: ELBv2.Types.AddTagsOutput) => void): Request<ELBv2.Types.AddTagsOutput, AWSError>;
  /**
   * Creates a listener for the specified Application Load Balancer or Network Load Balancer. You can create up to 10 listeners per load balancer. To update a listener, use ModifyListener. When you are finished with a listener, you can delete it using DeleteListener. If you are finished with both the listener and the load balancer, you can delete them both using DeleteLoadBalancer. For more information, see Listeners for Your Application Load Balancers in the Application Load Balancers Guide and Listeners for Your Network Load Balancers in the Network Load Balancers Guide.
   */
  createListener(params: ELBv2.Types.CreateListenerInput, callback?: (err: AWSError, data: ELBv2.Types.CreateListenerOutput) => void): Request<ELBv2.Types.CreateListenerOutput, AWSError>;
  /**
   * Creates a listener for the specified Application Load Balancer or Network Load Balancer. You can create up to 10 listeners per load balancer. To update a listener, use ModifyListener. When you are finished with a listener, you can delete it using DeleteListener. If you are finished with both the listener and the load balancer, you can delete them both using DeleteLoadBalancer. For more information, see Listeners for Your Application Load Balancers in the Application Load Balancers Guide and Listeners for Your Network Load Balancers in the Network Load Balancers Guide.
   */
  createListener(callback?: (err: AWSError, data: ELBv2.Types.CreateListenerOutput) => void): Request<ELBv2.Types.CreateListenerOutput, AWSError>;
  /**
   * Creates an Application Load Balancer or a Network Load Balancer. When you create a load balancer, you can specify security groups, subnets, IP address type, and tags. Otherwise, you could do so later using SetSecurityGroups, SetSubnets, SetIpAddressType, and AddTags. To create listeners for your load balancer, use CreateListener. To describe your current load balancers, see DescribeLoadBalancers. When you are finished with a load balancer, you can delete it using DeleteLoadBalancer. You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see Limits for Your Application Load Balancer in the Application Load Balancers Guide and Limits for Your Network Load Balancer in the Network Load Balancers Guide. For more information, see Application Load Balancers in the Application Load Balancers Guide and Network Load Balancers in the Network Load Balancers Guide.
   */
  createLoadBalancer(params: ELBv2.Types.CreateLoadBalancerInput, callback?: (err: AWSError, data: ELBv2.Types.CreateLoadBalancerOutput) => void): Request<ELBv2.Types.CreateLoadBalancerOutput, AWSError>;
  /**
   * Creates an Application Load Balancer or a Network Load Balancer. When you create a load balancer, you can specify security groups, subnets, IP address type, and tags. Otherwise, you could do so later using SetSecurityGroups, SetSubnets, SetIpAddressType, and AddTags. To create listeners for your load balancer, use CreateListener. To describe your current load balancers, see DescribeLoadBalancers. When you are finished with a load balancer, you can delete it using DeleteLoadBalancer. You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see Limits for Your Application Load Balancer in the Application Load Balancers Guide and Limits for Your Network Load Balancer in the Network Load Balancers Guide. For more information, see Application Load Balancers in the Application Load Balancers Guide and Network Load Balancers in the Network Load Balancers Guide.
   */
  createLoadBalancer(callback?: (err: AWSError, data: ELBv2.Types.CreateLoadBalancerOutput) => void): Request<ELBv2.Types.CreateLoadBalancerOutput, AWSError>;
  /**
   * Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer. Rules are evaluated in priority order, from the lowest value to the highest value. When the condition for a rule is met, the specified action is taken. If no conditions are met, the action for the default rule is taken. For more information, see Listener Rules in the Application Load Balancers Guide. To view your current rules, use DescribeRules. To update a rule, use ModifyRule. To set the priorities of your rules, use SetRulePriorities. To delete a rule, use DeleteRule.
   */
  createRule(params: ELBv2.Types.CreateRuleInput, callback?: (err: AWSError, data: ELBv2.Types.CreateRuleOutput) => void): Request<ELBv2.Types.CreateRuleOutput, AWSError>;
  /**
   * Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer. Rules are evaluated in priority order, from the lowest value to the highest value. When the condition for a rule is met, the specified action is taken. If no conditions are met, the action for the default rule is taken. For more information, see Listener Rules in the Application Load Balancers Guide. To view your current rules, use DescribeRules. To update a rule, use ModifyRule. To set the priorities of your rules, use SetRulePriorities. To delete a rule, use DeleteRule.
   */
  createRule(callback?: (err: AWSError, data: ELBv2.Types.CreateRuleOutput) => void): Request<ELBv2.Types.CreateRuleOutput, AWSError>;
  /**
   * Creates a target group. To register targets with the target group, use RegisterTargets. To update the health check settings for the target group, use ModifyTargetGroup. To monitor the health of targets in the target group, use DescribeTargetHealth. To route traffic to the targets in a target group, specify the target group in an action using CreateListener or CreateRule. To delete a target group, use DeleteTargetGroup. For more information, see Target Groups for Your Application Load Balancers in the Application Load Balancers Guide or Target Groups for Your Network Load Balancers in the Network Load Balancers Guide.
   */
  createTargetGroup(params: ELBv2.Types.CreateTargetGroupInput, callback?: (err: AWSError, data: ELBv2.Types.CreateTargetGroupOutput) => void): Request<ELBv2.Types.CreateTargetGroupOutput, AWSError>;
  /**
   * Creates a target group. To register targets with the target group, use RegisterTargets. To update the health check settings for the target group, use ModifyTargetGroup. To monitor the health of targets in the target group, use DescribeTargetHealth. To route traffic to the targets in a target group, specify the target group in an action using CreateListener or CreateRule. To delete a target group, use DeleteTargetGroup. For more information, see Target Groups for Your Application Load Balancers in the Application Load Balancers Guide or Target Groups for Your Network Load Balancers in the Network Load Balancers Guide.
   */
  createTargetGroup(callback?: (err: AWSError, data: ELBv2.Types.CreateTargetGroupOutput) => void): Request<ELBv2.Types.CreateTargetGroupOutput, AWSError>;
  /**
   * Deletes the specified listener. Alternatively, your listener is deleted when you delete the load balancer it is attached to using DeleteLoadBalancer.
   */
  deleteListener(params: ELBv2.Types.DeleteListenerInput, callback?: (err: AWSError, data: ELBv2.Types.DeleteListenerOutput) => void): Request<ELBv2.Types.DeleteListenerOutput, AWSError>;
  /**
   * Deletes the specified listener. Alternatively, your listener is deleted when you delete the load balancer it is attached to using DeleteLoadBalancer.
   */
  deleteListener(callback?: (err: AWSError, data: ELBv2.Types.DeleteListenerOutput) => void): Request<ELBv2.Types.DeleteListenerOutput, AWSError>;
  /**
   * Deletes the specified Application Load Balancer or Network Load Balancer and its attached listeners. You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds. Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.
   */
  deleteLoadBalancer(params: ELBv2.Types.DeleteLoadBalancerInput, callback?: (err: AWSError, data: ELBv2.Types.DeleteLoadBalancerOutput) => void): Request<ELBv2.Types.DeleteLoadBalancerOutput, AWSError>;
  /**
   * Deletes the specified Application Load Balancer or Network Load Balancer and its attached listeners. You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds. Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.
   */
  deleteLoadBalancer(callback?: (err: AWSError, data: ELBv2.Types.DeleteLoadBalancerOutput) => void): Request<ELBv2.Types.DeleteLoadBalancerOutput, AWSError>;
  /**
   * Deletes the specified rule.
   */
  deleteRule(params: ELBv2.Types.DeleteRuleInput, callback?: (err: AWSError, data: ELBv2.Types.DeleteRuleOutput) => void): Request<ELBv2.Types.DeleteRuleOutput, AWSError>;
  /**
   * Deletes the specified rule.
   */
  deleteRule(callback?: (err: AWSError, data: ELBv2.Types.DeleteRuleOutput) => void): Request<ELBv2.Types.DeleteRuleOutput, AWSError>;
  /**
   * Deletes the specified target group. You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks.
   */
  deleteTargetGroup(params: ELBv2.Types.DeleteTargetGroupInput, callback?: (err: AWSError, data: ELBv2.Types.DeleteTargetGroupOutput) => void): Request<ELBv2.Types.DeleteTargetGroupOutput, AWSError>;
  /**
   * Deletes the specified target group. You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks.
   */
  deleteTargetGroup(callback?: (err: AWSError, data: ELBv2.Types.DeleteTargetGroupOutput) => void): Request<ELBv2.Types.DeleteTargetGroupOutput, AWSError>;
  /**
   * Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.
   */
  deregisterTargets(params: ELBv2.Types.DeregisterTargetsInput, callback?: (err: AWSError, data: ELBv2.Types.DeregisterTargetsOutput) => void): Request<ELBv2.Types.DeregisterTargetsOutput, AWSError>;
  /**
   * Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.
   */
  deregisterTargets(callback?: (err: AWSError, data: ELBv2.Types.DeregisterTargetsOutput) => void): Request<ELBv2.Types.DeregisterTargetsOutput, AWSError>;
  /**
   * Describes the current Elastic Load Balancing resource limits for your AWS account. For more information, see Limits for Your Application Load Balancers in the Application Load Balancer Guide or Limits for Your Network Load Balancers in the Network Load Balancers Guide.
   */
  describeAccountLimits(params: ELBv2.Types.DescribeAccountLimitsInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeAccountLimitsOutput) => void): Request<ELBv2.Types.DescribeAccountLimitsOutput, AWSError>;
  /**
   * Describes the current Elastic Load Balancing resource limits for your AWS account. For more information, see Limits for Your Application Load Balancers in the Application Load Balancer Guide or Limits for Your Network Load Balancers in the Network Load Balancers Guide.
   */
  describeAccountLimits(callback?: (err: AWSError, data: ELBv2.Types.DescribeAccountLimitsOutput) => void): Request<ELBv2.Types.DescribeAccountLimitsOutput, AWSError>;
  /**
   * Describes the certificates for the specified secure listener.
   */
  describeListenerCertificates(params: ELBv2.Types.DescribeListenerCertificatesInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeListenerCertificatesOutput) => void): Request<ELBv2.Types.DescribeListenerCertificatesOutput, AWSError>;
  /**
   * Describes the certificates for the specified secure listener.
   */
  describeListenerCertificates(callback?: (err: AWSError, data: ELBv2.Types.DescribeListenerCertificatesOutput) => void): Request<ELBv2.Types.DescribeListenerCertificatesOutput, AWSError>;
  /**
   * Describes the specified listeners or the listeners for the specified Application Load Balancer or Network Load Balancer. You must specify either a load balancer or one or more listeners.
   */
  describeListeners(params: ELBv2.Types.DescribeListenersInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeListenersOutput) => void): Request<ELBv2.Types.DescribeListenersOutput, AWSError>;
  /**
   * Describes the specified listeners or the listeners for the specified Application Load Balancer or Network Load Balancer. You must specify either a load balancer or one or more listeners.
   */
  describeListeners(callback?: (err: AWSError, data: ELBv2.Types.DescribeListenersOutput) => void): Request<ELBv2.Types.DescribeListenersOutput, AWSError>;
  /**
   * Describes the attributes for the specified Application Load Balancer or Network Load Balancer.
   */
  describeLoadBalancerAttributes(params: ELBv2.Types.DescribeLoadBalancerAttributesInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeLoadBalancerAttributesOutput) => void): Request<ELBv2.Types.DescribeLoadBalancerAttributesOutput, AWSError>;
  /**
   * Describes the attributes for the specified Application Load Balancer or Network Load Balancer.
   */
  describeLoadBalancerAttributes(callback?: (err: AWSError, data: ELBv2.Types.DescribeLoadBalancerAttributesOutput) => void): Request<ELBv2.Types.DescribeLoadBalancerAttributesOutput, AWSError>;
  /**
   * Describes the specified load balancers or all of your load balancers. To describe the listeners for a load balancer, use DescribeListeners. To describe the attributes for a load balancer, use DescribeLoadBalancerAttributes.
   */
  describeLoadBalancers(params: ELBv2.Types.DescribeLoadBalancersInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeLoadBalancersOutput) => void): Request<ELBv2.Types.DescribeLoadBalancersOutput, AWSError>;
  /**
   * Describes the specified load balancers or all of your load balancers. To describe the listeners for a load balancer, use DescribeListeners. To describe the attributes for a load balancer, use DescribeLoadBalancerAttributes.
   */
  describeLoadBalancers(callback?: (err: AWSError, data: ELBv2.Types.DescribeLoadBalancersOutput) => void): Request<ELBv2.Types.DescribeLoadBalancersOutput, AWSError>;
  /**
   * Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
   */
  describeRules(params: ELBv2.Types.DescribeRulesInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeRulesOutput) => void): Request<ELBv2.Types.DescribeRulesOutput, AWSError>;
  /**
   * Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
   */
  describeRules(callback?: (err: AWSError, data: ELBv2.Types.DescribeRulesOutput) => void): Request<ELBv2.Types.DescribeRulesOutput, AWSError>;
  /**
   * Describes the specified policies or all policies used for SSL negotiation. For more information, see Security Policies in the Application Load Balancers Guide.
   */
  describeSSLPolicies(params: ELBv2.Types.DescribeSSLPoliciesInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeSSLPoliciesOutput) => void): Request<ELBv2.Types.DescribeSSLPoliciesOutput, AWSError>;
  /**
   * Describes the specified policies or all policies used for SSL negotiation. For more information, see Security Policies in the Application Load Balancers Guide.
   */
  describeSSLPolicies(callback?: (err: AWSError, data: ELBv2.Types.DescribeSSLPoliciesOutput) => void): Request<ELBv2.Types.DescribeSSLPoliciesOutput, AWSError>;
  /**
   * Describes the tags for the specified resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, and target groups.
   */
  describeTags(params: ELBv2.Types.DescribeTagsInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeTagsOutput) => void): Request<ELBv2.Types.DescribeTagsOutput, AWSError>;
  /**
   * Describes the tags for the specified resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, and target groups.
   */
  describeTags(callback?: (err: AWSError, data: ELBv2.Types.DescribeTagsOutput) => void): Request<ELBv2.Types.DescribeTagsOutput, AWSError>;
  /**
   * Describes the attributes for the specified target group.
   */
  describeTargetGroupAttributes(params: ELBv2.Types.DescribeTargetGroupAttributesInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeTargetGroupAttributesOutput) => void): Request<ELBv2.Types.DescribeTargetGroupAttributesOutput, AWSError>;
  /**
   * Describes the attributes for the specified target group.
   */
  describeTargetGroupAttributes(callback?: (err: AWSError, data: ELBv2.Types.DescribeTargetGroupAttributesOutput) => void): Request<ELBv2.Types.DescribeTargetGroupAttributesOutput, AWSError>;
  /**
   * Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups. To describe the targets for a target group, use DescribeTargetHealth. To describe the attributes of a target group, use DescribeTargetGroupAttributes.
   */
  describeTargetGroups(params: ELBv2.Types.DescribeTargetGroupsInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeTargetGroupsOutput) => void): Request<ELBv2.Types.DescribeTargetGroupsOutput, AWSError>;
  /**
   * Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups. To describe the targets for a target group, use DescribeTargetHealth. To describe the attributes of a target group, use DescribeTargetGroupAttributes.
   */
  describeTargetGroups(callback?: (err: AWSError, data: ELBv2.Types.DescribeTargetGroupsOutput) => void): Request<ELBv2.Types.DescribeTargetGroupsOutput, AWSError>;
  /**
   * Describes the health of the specified targets or all of your targets.
   */
  describeTargetHealth(params: ELBv2.Types.DescribeTargetHealthInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeTargetHealthOutput) => void): Request<ELBv2.Types.DescribeTargetHealthOutput, AWSError>;
  /**
   * Describes the health of the specified targets or all of your targets.
   */
  describeTargetHealth(callback?: (err: AWSError, data: ELBv2.Types.DescribeTargetHealthOutput) => void): Request<ELBv2.Types.DescribeTargetHealthOutput, AWSError>;
  /**
   * Modifies the specified properties of the specified listener. Any properties that you do not specify retain their current values. However, changing the protocol from HTTPS to HTTP removes the security policy and SSL certificate properties. If you change the protocol from HTTP to HTTPS, you must add the security policy and server certificate.
   */
  modifyListener(params: ELBv2.Types.ModifyListenerInput, callback?: (err: AWSError, data: ELBv2.Types.ModifyListenerOutput) => void): Request<ELBv2.Types.ModifyListenerOutput, AWSError>;
  /**
   * Modifies the specified properties of the specified listener. Any properties that you do not specify retain their current values. However, changing the protocol from HTTPS to HTTP removes the security policy and SSL certificate properties. If you change the protocol from HTTP to HTTPS, you must add the security policy and server certificate.
   */
  modifyListener(callback?: (err: AWSError, data: ELBv2.Types.ModifyListenerOutput) => void): Request<ELBv2.Types.ModifyListenerOutput, AWSError>;
  /**
   * Modifies the specified attributes of the specified Application Load Balancer or Network Load Balancer. If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.
   */
  modifyLoadBalancerAttributes(params: ELBv2.Types.ModifyLoadBalancerAttributesInput, callback?: (err: AWSError, data: ELBv2.Types.ModifyLoadBalancerAttributesOutput) => void): Request<ELBv2.Types.ModifyLoadBalancerAttributesOutput, AWSError>;
  /**
   * Modifies the specified attributes of the specified Application Load Balancer or Network Load Balancer. If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.
   */
  modifyLoadBalancerAttributes(callback?: (err: AWSError, data: ELBv2.Types.ModifyLoadBalancerAttributesOutput) => void): Request<ELBv2.Types.ModifyLoadBalancerAttributesOutput, AWSError>;
  /**
   * Modifies the specified rule. Any existing properties that you do not modify retain their current values. To modify the default action, use ModifyListener.
   */
  modifyRule(params: ELBv2.Types.ModifyRuleInput, callback?: (err: AWSError, data: ELBv2.Types.ModifyRuleOutput) => void): Request<ELBv2.Types.ModifyRuleOutput, AWSError>;
  /**
   * Modifies the specified rule. Any existing properties that you do not modify retain their current values. To modify the default action, use ModifyListener.
   */
  modifyRule(callback?: (err: AWSError, data: ELBv2.Types.ModifyRuleOutput) => void): Request<ELBv2.Types.ModifyRuleOutput, AWSError>;
  /**
   * Modifies the health checks used when evaluating the health state of the targets in the specified target group. To monitor the health of the targets, use DescribeTargetHealth.
   */
  modifyTargetGroup(params: ELBv2.Types.ModifyTargetGroupInput, callback?: (err: AWSError, data: ELBv2.Types.ModifyTargetGroupOutput) => void): Request<ELBv2.Types.ModifyTargetGroupOutput, AWSError>;
  /**
   * Modifies the health checks used when evaluating the health state of the targets in the specified target group. To monitor the health of the targets, use DescribeTargetHealth.
   */
  modifyTargetGroup(callback?: (err: AWSError, data: ELBv2.Types.ModifyTargetGroupOutput) => void): Request<ELBv2.Types.ModifyTargetGroupOutput, AWSError>;
  /**
   * Modifies the specified attributes of the specified target group.
   */
  modifyTargetGroupAttributes(params: ELBv2.Types.ModifyTargetGroupAttributesInput, callback?: (err: AWSError, data: ELBv2.Types.ModifyTargetGroupAttributesOutput) => void): Request<ELBv2.Types.ModifyTargetGroupAttributesOutput, AWSError>;
  /**
   * Modifies the specified attributes of the specified target group.
   */
  modifyTargetGroupAttributes(callback?: (err: AWSError, data: ELBv2.Types.ModifyTargetGroupAttributesOutput) => void): Request<ELBv2.Types.ModifyTargetGroupAttributesOutput, AWSError>;
  /**
   * Registers the specified targets with the specified target group. You can register targets by instance ID or by IP address. If the target is an EC2 instance, it must be in the running state when you register it. By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports. With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address. To remove a target from a target group, use DeregisterTargets.
   */
  registerTargets(params: ELBv2.Types.RegisterTargetsInput, callback?: (err: AWSError, data: ELBv2.Types.RegisterTargetsOutput) => void): Request<ELBv2.Types.RegisterTargetsOutput, AWSError>;
  /**
   * Registers the specified targets with the specified target group. You can register targets by instance ID or by IP address. If the target is an EC2 instance, it must be in the running state when you register it. By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports. With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address. To remove a target from a target group, use DeregisterTargets.
   */
  registerTargets(callback?: (err: AWSError, data: ELBv2.Types.RegisterTargetsOutput) => void): Request<ELBv2.Types.RegisterTargetsOutput, AWSError>;
  /**
   * Removes the specified certificate from the specified secure listener. You can't remove the default certificate for a listener. To replace the default certificate, call ModifyListener. To list the certificates for your listener, use DescribeListenerCertificates.
   */
  removeListenerCertificates(params: ELBv2.Types.RemoveListenerCertificatesInput, callback?: (err: AWSError, data: ELBv2.Types.RemoveListenerCertificatesOutput) => void): Request<ELBv2.Types.RemoveListenerCertificatesOutput, AWSError>;
  /**
   * Removes the specified certificate from the specified secure listener. You can't remove the default certificate for a listener. To replace the default certificate, call ModifyListener. To list the certificates for your listener, use DescribeListenerCertificates.
   */
  removeListenerCertificates(callback?: (err: AWSError, data: ELBv2.Types.RemoveListenerCertificatesOutput) => void): Request<ELBv2.Types.RemoveListenerCertificatesOutput, AWSError>;
  /**
   * Removes the specified tags from the specified Elastic Load Balancing resource. To list the current tags for your resources, use DescribeTags.
   */
  removeTags(params: ELBv2.Types.RemoveTagsInput, callback?: (err: AWSError, data: ELBv2.Types.RemoveTagsOutput) => void): Request<ELBv2.Types.RemoveTagsOutput, AWSError>;
  /**
   * Removes the specified tags from the specified Elastic Load Balancing resource. To list the current tags for your resources, use DescribeTags.
   */
  removeTags(callback?: (err: AWSError, data: ELBv2.Types.RemoveTagsOutput) => void): Request<ELBv2.Types.RemoveTagsOutput, AWSError>;
  /**
   * Sets the type of IP addresses used by the subnets of the specified Application Load Balancer or Network Load Balancer. Note that Network Load Balancers must use ipv4.
   */
  setIpAddressType(params: ELBv2.Types.SetIpAddressTypeInput, callback?: (err: AWSError, data: ELBv2.Types.SetIpAddressTypeOutput) => void): Request<ELBv2.Types.SetIpAddressTypeOutput, AWSError>;
  /**
   * Sets the type of IP addresses used by the subnets of the specified Application Load Balancer or Network Load Balancer. Note that Network Load Balancers must use ipv4.
   */
  setIpAddressType(callback?: (err: AWSError, data: ELBv2.Types.SetIpAddressTypeOutput) => void): Request<ELBv2.Types.SetIpAddressTypeOutput, AWSError>;
  /**
   * Sets the priorities of the specified rules. You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.
   */
  setRulePriorities(params: ELBv2.Types.SetRulePrioritiesInput, callback?: (err: AWSError, data: ELBv2.Types.SetRulePrioritiesOutput) => void): Request<ELBv2.Types.SetRulePrioritiesOutput, AWSError>;
  /**
   * Sets the priorities of the specified rules. You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.
   */
  setRulePriorities(callback?: (err: AWSError, data: ELBv2.Types.SetRulePrioritiesOutput) => void): Request<ELBv2.Types.SetRulePrioritiesOutput, AWSError>;
  /**
   * Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups. Note that you can't specify a security group for a Network Load Balancer.
   */
  setSecurityGroups(params: ELBv2.Types.SetSecurityGroupsInput, callback?: (err: AWSError, data: ELBv2.Types.SetSecurityGroupsOutput) => void): Request<ELBv2.Types.SetSecurityGroupsOutput, AWSError>;
  /**
   * Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups. Note that you can't specify a security group for a Network Load Balancer.
   */
  setSecurityGroups(callback?: (err: AWSError, data: ELBv2.Types.SetSecurityGroupsOutput) => void): Request<ELBv2.Types.SetSecurityGroupsOutput, AWSError>;
  /**
   * Enables the Availability Zone for the specified subnets for the specified Application Load Balancer. The specified subnets replace the previously enabled subnets. Note that you can't change the subnets for a Network Load Balancer.
   */
  setSubnets(params: ELBv2.Types.SetSubnetsInput, callback?: (err: AWSError, data: ELBv2.Types.SetSubnetsOutput) => void): Request<ELBv2.Types.SetSubnetsOutput, AWSError>;
  /**
   * Enables the Availability Zone for the specified subnets for the specified Application Load Balancer. The specified subnets replace the previously enabled subnets. Note that you can't change the subnets for a Network Load Balancer.
   */
  setSubnets(callback?: (err: AWSError, data: ELBv2.Types.SetSubnetsOutput) => void): Request<ELBv2.Types.SetSubnetsOutput, AWSError>;
  /**
   * Waits for the loadBalancerExists state by periodically calling the underlying ELBv2.describeLoadBalancersoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "loadBalancerExists", params: ELBv2.Types.DescribeLoadBalancersInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeLoadBalancersOutput) => void): Request<ELBv2.Types.DescribeLoadBalancersOutput, AWSError>;
  /**
   * Waits for the loadBalancerExists state by periodically calling the underlying ELBv2.describeLoadBalancersoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "loadBalancerExists", callback?: (err: AWSError, data: ELBv2.Types.DescribeLoadBalancersOutput) => void): Request<ELBv2.Types.DescribeLoadBalancersOutput, AWSError>;
  /**
   * Waits for the loadBalancerAvailable state by periodically calling the underlying ELBv2.describeLoadBalancersoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "loadBalancerAvailable", params: ELBv2.Types.DescribeLoadBalancersInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeLoadBalancersOutput) => void): Request<ELBv2.Types.DescribeLoadBalancersOutput, AWSError>;
  /**
   * Waits for the loadBalancerAvailable state by periodically calling the underlying ELBv2.describeLoadBalancersoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "loadBalancerAvailable", callback?: (err: AWSError, data: ELBv2.Types.DescribeLoadBalancersOutput) => void): Request<ELBv2.Types.DescribeLoadBalancersOutput, AWSError>;
  /**
   * Waits for the loadBalancersDeleted state by periodically calling the underlying ELBv2.describeLoadBalancersoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "loadBalancersDeleted", params: ELBv2.Types.DescribeLoadBalancersInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeLoadBalancersOutput) => void): Request<ELBv2.Types.DescribeLoadBalancersOutput, AWSError>;
  /**
   * Waits for the loadBalancersDeleted state by periodically calling the underlying ELBv2.describeLoadBalancersoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "loadBalancersDeleted", callback?: (err: AWSError, data: ELBv2.Types.DescribeLoadBalancersOutput) => void): Request<ELBv2.Types.DescribeLoadBalancersOutput, AWSError>;
  /**
   * Waits for the targetInService state by periodically calling the underlying ELBv2.describeTargetHealthoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "targetInService", params: ELBv2.Types.DescribeTargetHealthInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeTargetHealthOutput) => void): Request<ELBv2.Types.DescribeTargetHealthOutput, AWSError>;
  /**
   * Waits for the targetInService state by periodically calling the underlying ELBv2.describeTargetHealthoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "targetInService", callback?: (err: AWSError, data: ELBv2.Types.DescribeTargetHealthOutput) => void): Request<ELBv2.Types.DescribeTargetHealthOutput, AWSError>;
  /**
   * Waits for the targetDeregistered state by periodically calling the underlying ELBv2.describeTargetHealthoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "targetDeregistered", params: ELBv2.Types.DescribeTargetHealthInput, callback?: (err: AWSError, data: ELBv2.Types.DescribeTargetHealthOutput) => void): Request<ELBv2.Types.DescribeTargetHealthOutput, AWSError>;
  /**
   * Waits for the targetDeregistered state by periodically calling the underlying ELBv2.describeTargetHealthoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "targetDeregistered", callback?: (err: AWSError, data: ELBv2.Types.DescribeTargetHealthOutput) => void): Request<ELBv2.Types.DescribeTargetHealthOutput, AWSError>;
}
declare namespace ELBv2 {
  export interface Action {
    /**
     * The type of action.
     */
    Type: ActionTypeEnum;
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
  }
  export type ActionTypeEnum = "forward"|string;
  export type Actions = Action[];
  export interface AddListenerCertificatesInput {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn: ListenerArn;
    /**
     * The certificate to add. You can specify one certificate per call.
     */
    Certificates: CertificateList;
  }
  export interface AddListenerCertificatesOutput {
    /**
     * Information about the certificates.
     */
    Certificates?: CertificateList;
  }
  export interface AddTagsInput {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArns: ResourceArns;
    /**
     * The tags. Each resource can have a maximum of 10 tags.
     */
    Tags: TagList;
  }
  export interface AddTagsOutput {
  }
  export type AllocationId = string;
  export interface AvailabilityZone {
    /**
     * The name of the Availability Zone.
     */
    ZoneName?: ZoneName;
    /**
     * The ID of the subnet.
     */
    SubnetId?: SubnetId;
    /**
     * [Network Load Balancers] The static IP address.
     */
    LoadBalancerAddresses?: LoadBalancerAddresses;
  }
  export type AvailabilityZones = AvailabilityZone[];
  export type CanonicalHostedZoneId = string;
  export interface Certificate {
    /**
     * The Amazon Resource Name (ARN) of the certificate.
     */
    CertificateArn?: CertificateArn;
    /**
     * Indicates whether the certificate is the default certificate.
     */
    IsDefault?: Default;
  }
  export type CertificateArn = string;
  export type CertificateList = Certificate[];
  export interface Cipher {
    /**
     * The name of the cipher.
     */
    Name?: CipherName;
    /**
     * The priority of the cipher.
     */
    Priority?: CipherPriority;
  }
  export type CipherName = string;
  export type CipherPriority = number;
  export type Ciphers = Cipher[];
  export type ConditionFieldName = string;
  export interface CreateListenerInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn: LoadBalancerArn;
    /**
     * The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocol is TCP.
     */
    Protocol: ProtocolEnum;
    /**
     * The port on which the load balancer is listening.
     */
    Port: Port;
    /**
     * [HTTPS listeners] The security policy that defines which ciphers and protocols are supported. The default is the current predefined security policy.
     */
    SslPolicy?: SslPolicyName;
    /**
     * [HTTPS listeners] The SSL server certificate. You must provide exactly one certificate.
     */
    Certificates?: CertificateList;
    /**
     * The default action for the listener. For Application Load Balancers, the protocol of the specified target group must be HTTP or HTTPS. For Network Load Balancers, the protocol of the specified target group must be TCP.
     */
    DefaultActions: Actions;
  }
  export interface CreateListenerOutput {
    /**
     * Information about the listener.
     */
    Listeners?: Listeners;
  }
  export interface CreateLoadBalancerInput {
    /**
     * The name of the load balancer. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.
     */
    Name: LoadBalancerName;
    /**
     * The IDs of the subnets to attach to the load balancer. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings. [Application Load Balancers] You must specify subnets from at least two Availability Zones.
     */
    Subnets?: Subnets;
    /**
     * The IDs of the subnets to attach to the load balancer. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings. [Network Load Balancers] You can specify one Elastic IP address per subnet. [Application Load Balancers] You cannot specify Elastic IP addresses for your subnets.
     */
    SubnetMappings?: SubnetMappings;
    /**
     * [Application Load Balancers] The IDs of the security groups to assign to the load balancer.
     */
    SecurityGroups?: SecurityGroups;
    /**
     * The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the Internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can only route requests from clients with access to the VPC for the load balancer. The default is an Internet-facing load balancer.
     */
    Scheme?: LoadBalancerSchemeEnum;
    /**
     * One or more tags to assign to the load balancer.
     */
    Tags?: TagList;
    /**
     * The type of load balancer to create. The default is application.
     */
    Type?: LoadBalancerTypeEnum;
    /**
     * [Application Load Balancers] The type of IP addresses used by the subnets for your load balancer. The possible values are ipv4 (for IPv4 addresses) and dualstack (for IPv4 and IPv6 addresses). Internal load balancers must use ipv4.
     */
    IpAddressType?: IpAddressType;
  }
  export interface CreateLoadBalancerOutput {
    /**
     * Information about the load balancer.
     */
    LoadBalancers?: LoadBalancers;
  }
  export interface CreateRuleInput {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn: ListenerArn;
    /**
     * The conditions. Each condition specifies a field name and a single value. If the field name is host-header, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters. Note that you can include up to three wildcard characters.   A-Z, a-z, 0-9   - .   * (matches 0 or more characters)   ? (matches exactly 1 character)   If the field name is path-pattern, you can specify a single path pattern. A path pattern is case sensitive, can be up to 128 characters in length, and can contain any of the following characters. Note that you can include up to three wildcard characters.   A-Z, a-z, 0-9   _ - . $ / ~ " ' @ : +   &amp; (using &amp;amp;)   * (matches 0 or more characters)   ? (matches exactly 1 character)  
     */
    Conditions: RuleConditionList;
    /**
     * The priority for the rule. A listener can't have multiple rules with the same priority.
     */
    Priority: RulePriority;
    /**
     * An action. Each action has the type forward and specifies a target group.
     */
    Actions: Actions;
  }
  export interface CreateRuleOutput {
    /**
     * Information about the rule.
     */
    Rules?: Rules;
  }
  export interface CreateTargetGroupInput {
    /**
     * The name of the target group. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.
     */
    Name: TargetGroupName;
    /**
     * The protocol to use for routing traffic to the targets. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocol is TCP.
     */
    Protocol: ProtocolEnum;
    /**
     * The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target.
     */
    Port: Port;
    /**
     * The identifier of the virtual private cloud (VPC).
     */
    VpcId: VpcId;
    /**
     * The protocol the load balancer uses when performing health checks on targets. The TCP protocol is supported only if the protocol of the target group is TCP. For Application Load Balancers, the default is HTTP. For Network Load Balancers, the default is TCP.
     */
    HealthCheckProtocol?: ProtocolEnum;
    /**
     * The port the load balancer uses when performing health checks on targets. The default is traffic-port, which is the port on which each target receives traffic from the load balancer.
     */
    HealthCheckPort?: HealthCheckPort;
    /**
     * [HTTP/HTTPS health checks] The ping path that is the destination on the targets for health checks. The default is /.
     */
    HealthCheckPath?: Path;
    /**
     * The approximate amount of time, in seconds, between health checks of an individual target. For Application Load Balancers, the range is 5 to 300 seconds. For Network Load Balancers, the supported values are 10 or 30 seconds. The default is 30 seconds.
     */
    HealthCheckIntervalSeconds?: HealthCheckIntervalSeconds;
    /**
     * The amount of time, in seconds, during which no response from a target means a failed health check. For Application Load Balancers, the range is 2 to 60 seconds and the default is 5 seconds. For Network Load Balancers, this is 10 seconds for TCP and HTTPS health checks and 6 seconds for HTTP health checks.
     */
    HealthCheckTimeoutSeconds?: HealthCheckTimeoutSeconds;
    /**
     * The number of consecutive health checks successes required before considering an unhealthy target healthy. For Application Load Balancers, the default is 5. For Network Load Balancers, the default is 3.
     */
    HealthyThresholdCount?: HealthCheckThresholdCount;
    /**
     * The number of consecutive health check failures required before considering a target unhealthy. For Application Load Balancers, the default is 2. For Network Load Balancers, this value must be the same as the healthy threshold count.
     */
    UnhealthyThresholdCount?: HealthCheckThresholdCount;
    /**
     * [HTTP/HTTPS health checks] The HTTP codes to use when checking for a successful response from a target.
     */
    Matcher?: Matcher;
    /**
     * The type of target that you must specify when registering targets with this target group. The possible values are instance (targets are specified by instance ID) or ip (targets are specified by IP address). The default is instance. Note that you can't specify targets for a target group using both instance IDs and IP addresses. If the target type is ip, specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.
     */
    TargetType?: TargetTypeEnum;
  }
  export interface CreateTargetGroupOutput {
    /**
     * Information about the target group.
     */
    TargetGroups?: TargetGroups;
  }
  export type CreatedTime = Date;
  export type DNSName = string;
  export type Default = boolean;
  export interface DeleteListenerInput {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn: ListenerArn;
  }
  export interface DeleteListenerOutput {
  }
  export interface DeleteLoadBalancerInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn: LoadBalancerArn;
  }
  export interface DeleteLoadBalancerOutput {
  }
  export interface DeleteRuleInput {
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    RuleArn: RuleArn;
  }
  export interface DeleteRuleOutput {
  }
  export interface DeleteTargetGroupInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
  }
  export interface DeleteTargetGroupOutput {
  }
  export interface DeregisterTargetsInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
    /**
     * The targets. If you specified a port override when you registered a target, you must specify both the target ID and the port when you deregister it.
     */
    Targets: TargetDescriptions;
  }
  export interface DeregisterTargetsOutput {
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
  export interface DescribeListenerCertificatesInput {
    /**
     * The Amazon Resource Names (ARN) of the listener.
     */
    ListenerArn: ListenerArn;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: Marker;
    /**
     * The maximum number of results to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface DescribeListenerCertificatesOutput {
    /**
     * Information about the certificates.
     */
    Certificates?: CertificateList;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    NextMarker?: Marker;
  }
  export interface DescribeListenersInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn?: LoadBalancerArn;
    /**
     * The Amazon Resource Names (ARN) of the listeners.
     */
    ListenerArns?: ListenerArns;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: Marker;
    /**
     * The maximum number of results to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface DescribeListenersOutput {
    /**
     * Information about the listeners.
     */
    Listeners?: Listeners;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    NextMarker?: Marker;
  }
  export interface DescribeLoadBalancerAttributesInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn: LoadBalancerArn;
  }
  export interface DescribeLoadBalancerAttributesOutput {
    /**
     * Information about the load balancer attributes.
     */
    Attributes?: LoadBalancerAttributes;
  }
  export interface DescribeLoadBalancersInput {
    /**
     * The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.
     */
    LoadBalancerArns?: LoadBalancerArns;
    /**
     * The names of the load balancers.
     */
    Names?: LoadBalancerNames;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: Marker;
    /**
     * The maximum number of results to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface DescribeLoadBalancersOutput {
    /**
     * Information about the load balancers.
     */
    LoadBalancers?: LoadBalancers;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    NextMarker?: Marker;
  }
  export interface DescribeRulesInput {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn?: ListenerArn;
    /**
     * The Amazon Resource Names (ARN) of the rules.
     */
    RuleArns?: RuleArns;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: Marker;
    /**
     * The maximum number of results to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface DescribeRulesOutput {
    /**
     * Information about the rules.
     */
    Rules?: Rules;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    NextMarker?: Marker;
  }
  export interface DescribeSSLPoliciesInput {
    /**
     * The names of the policies.
     */
    Names?: SslPolicyNames;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: Marker;
    /**
     * The maximum number of results to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface DescribeSSLPoliciesOutput {
    /**
     * Information about the policies.
     */
    SslPolicies?: SslPolicies;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    NextMarker?: Marker;
  }
  export interface DescribeTagsInput {
    /**
     * The Amazon Resource Names (ARN) of the resources.
     */
    ResourceArns: ResourceArns;
  }
  export interface DescribeTagsOutput {
    /**
     * Information about the tags.
     */
    TagDescriptions?: TagDescriptions;
  }
  export interface DescribeTargetGroupAttributesInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
  }
  export interface DescribeTargetGroupAttributesOutput {
    /**
     * Information about the target group attributes
     */
    Attributes?: TargetGroupAttributes;
  }
  export interface DescribeTargetGroupsInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn?: LoadBalancerArn;
    /**
     * The Amazon Resource Names (ARN) of the target groups.
     */
    TargetGroupArns?: TargetGroupArns;
    /**
     * The names of the target groups.
     */
    Names?: TargetGroupNames;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: Marker;
    /**
     * The maximum number of results to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface DescribeTargetGroupsOutput {
    /**
     * Information about the target groups.
     */
    TargetGroups?: TargetGroups;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    NextMarker?: Marker;
  }
  export interface DescribeTargetHealthInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
    /**
     * The targets.
     */
    Targets?: TargetDescriptions;
  }
  export interface DescribeTargetHealthOutput {
    /**
     * Information about the health of the targets.
     */
    TargetHealthDescriptions?: TargetHealthDescriptions;
  }
  export type Description = string;
  export type HealthCheckIntervalSeconds = number;
  export type HealthCheckPort = string;
  export type HealthCheckThresholdCount = number;
  export type HealthCheckTimeoutSeconds = number;
  export type HttpCode = string;
  export type IpAddress = string;
  export type IpAddressType = "ipv4"|"dualstack"|string;
  export type IsDefault = boolean;
  export interface Limit {
    /**
     * The name of the limit. The possible values are:   application-load-balancers   listeners-per-application-load-balancer   listeners-per-network-load-balancer   network-load-balancers   rules-per-application-load-balancer   target-groups   targets-per-application-load-balancer  
     */
    Name?: Name;
    /**
     * The maximum value of the limit.
     */
    Max?: Max;
  }
  export type Limits = Limit[];
  export type ListOfString = StringValue[];
  export interface Listener {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn?: ListenerArn;
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn?: LoadBalancerArn;
    /**
     * The port on which the load balancer is listening.
     */
    Port?: Port;
    /**
     * The protocol for connections from clients to the load balancer.
     */
    Protocol?: ProtocolEnum;
    /**
     * The SSL server certificate. You must provide a certificate if the protocol is HTTPS.
     */
    Certificates?: CertificateList;
    /**
     * The security policy that defines which ciphers and protocols are supported. The default is the current predefined security policy.
     */
    SslPolicy?: SslPolicyName;
    /**
     * The default actions for the listener.
     */
    DefaultActions?: Actions;
  }
  export type ListenerArn = string;
  export type ListenerArns = ListenerArn[];
  export type Listeners = Listener[];
  export interface LoadBalancer {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn?: LoadBalancerArn;
    /**
     * The public DNS name of the load balancer.
     */
    DNSName?: DNSName;
    /**
     * The ID of the Amazon Route 53 hosted zone associated with the load balancer.
     */
    CanonicalHostedZoneId?: CanonicalHostedZoneId;
    /**
     * The date and time the load balancer was created.
     */
    CreatedTime?: CreatedTime;
    /**
     * The name of the load balancer.
     */
    LoadBalancerName?: LoadBalancerName;
    /**
     * The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the Internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can only route requests from clients with access to the VPC for the load balancer.
     */
    Scheme?: LoadBalancerSchemeEnum;
    /**
     * The ID of the VPC for the load balancer.
     */
    VpcId?: VpcId;
    /**
     * The state of the load balancer.
     */
    State?: LoadBalancerState;
    /**
     * The type of load balancer.
     */
    Type?: LoadBalancerTypeEnum;
    /**
     * The Availability Zones for the load balancer.
     */
    AvailabilityZones?: AvailabilityZones;
    /**
     * The IDs of the security groups for the load balancer.
     */
    SecurityGroups?: SecurityGroups;
    /**
     * The type of IP addresses used by the subnets for your load balancer. The possible values are ipv4 (for IPv4 addresses) and dualstack (for IPv4 and IPv6 addresses).
     */
    IpAddressType?: IpAddressType;
  }
  export interface LoadBalancerAddress {
    /**
     * The static IP address.
     */
    IpAddress?: IpAddress;
    /**
     * [Network Load Balancers] The allocation ID of the Elastic IP address.
     */
    AllocationId?: AllocationId;
  }
  export type LoadBalancerAddresses = LoadBalancerAddress[];
  export type LoadBalancerArn = string;
  export type LoadBalancerArns = LoadBalancerArn[];
  export interface LoadBalancerAttribute {
    /**
     * The name of the attribute.    access_logs.s3.enabled - [Application Load Balancers] Indicates whether access logs stored in Amazon S3 are enabled. The value is true or false.    access_logs.s3.bucket - [Application Load Balancers] The name of the S3 bucket for the access logs. This attribute is required if access logs in Amazon S3 are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permission to write to the bucket.    access_logs.s3.prefix - [Application Load Balancers] The prefix for the location in the S3 bucket. If you don't specify a prefix, the access logs are stored in the root of the bucket.    deletion_protection.enabled - Indicates whether deletion protection is enabled. The value is true or false.    idle_timeout.timeout_seconds - [Application Load Balancers] The idle timeout value, in seconds. The valid range is 1-4000. The default is 60 seconds.  
     */
    Key?: LoadBalancerAttributeKey;
    /**
     * The value of the attribute.
     */
    Value?: LoadBalancerAttributeValue;
  }
  export type LoadBalancerAttributeKey = string;
  export type LoadBalancerAttributeValue = string;
  export type LoadBalancerAttributes = LoadBalancerAttribute[];
  export type LoadBalancerName = string;
  export type LoadBalancerNames = LoadBalancerName[];
  export type LoadBalancerSchemeEnum = "internet-facing"|"internal"|string;
  export interface LoadBalancerState {
    /**
     * The state code. The initial state of the load balancer is provisioning. After the load balancer is fully set up and ready to route traffic, its state is active. If the load balancer could not be set up, its state is failed.
     */
    Code?: LoadBalancerStateEnum;
    /**
     * A description of the state.
     */
    Reason?: StateReason;
  }
  export type LoadBalancerStateEnum = "active"|"provisioning"|"active_impaired"|"failed"|string;
  export type LoadBalancerTypeEnum = "application"|"network"|string;
  export type LoadBalancers = LoadBalancer[];
  export type Marker = string;
  export interface Matcher {
    /**
     * The HTTP codes. For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299"). For Network Load Balancers, this is 200 to 399.
     */
    HttpCode: HttpCode;
  }
  export type Max = string;
  export interface ModifyListenerInput {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn: ListenerArn;
    /**
     * The port for connections from clients to the load balancer.
     */
    Port?: Port;
    /**
     * The protocol for connections from clients to the load balancer. Application Load Balancers support HTTP and HTTPS and Network Load Balancers support TCP.
     */
    Protocol?: ProtocolEnum;
    /**
     * The security policy that defines which protocols and ciphers are supported. For more information, see Security Policies in the Application Load Balancers Guide.
     */
    SslPolicy?: SslPolicyName;
    /**
     * The default SSL server certificate.
     */
    Certificates?: CertificateList;
    /**
     * The default action. For Application Load Balancers, the protocol of the specified target group must be HTTP or HTTPS. For Network Load Balancers, the protocol of the specified target group must be TCP.
     */
    DefaultActions?: Actions;
  }
  export interface ModifyListenerOutput {
    /**
     * Information about the modified listeners.
     */
    Listeners?: Listeners;
  }
  export interface ModifyLoadBalancerAttributesInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn: LoadBalancerArn;
    /**
     * The load balancer attributes.
     */
    Attributes: LoadBalancerAttributes;
  }
  export interface ModifyLoadBalancerAttributesOutput {
    /**
     * Information about the load balancer attributes.
     */
    Attributes?: LoadBalancerAttributes;
  }
  export interface ModifyRuleInput {
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    RuleArn: RuleArn;
    /**
     * The conditions.
     */
    Conditions?: RuleConditionList;
    /**
     * The actions. The target group must use the HTTP or HTTPS protocol.
     */
    Actions?: Actions;
  }
  export interface ModifyRuleOutput {
    /**
     * Information about the rule.
     */
    Rules?: Rules;
  }
  export interface ModifyTargetGroupAttributesInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
    /**
     * The attributes.
     */
    Attributes: TargetGroupAttributes;
  }
  export interface ModifyTargetGroupAttributesOutput {
    /**
     * Information about the attributes.
     */
    Attributes?: TargetGroupAttributes;
  }
  export interface ModifyTargetGroupInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
    /**
     * The protocol the load balancer uses when performing health checks on targets. The TCP protocol is supported only if the protocol of the target group is TCP.
     */
    HealthCheckProtocol?: ProtocolEnum;
    /**
     * The port the load balancer uses when performing health checks on targets.
     */
    HealthCheckPort?: HealthCheckPort;
    /**
     * [HTTP/HTTPS health checks] The ping path that is the destination for the health check request.
     */
    HealthCheckPath?: Path;
    /**
     * The approximate amount of time, in seconds, between health checks of an individual target. For Application Load Balancers, the range is 5 to 300 seconds. For Network Load Balancers, the supported values are 10 or 30 seconds.
     */
    HealthCheckIntervalSeconds?: HealthCheckIntervalSeconds;
    /**
     * [HTTP/HTTPS health checks] The amount of time, in seconds, during which no response means a failed health check.
     */
    HealthCheckTimeoutSeconds?: HealthCheckTimeoutSeconds;
    /**
     * The number of consecutive health checks successes required before considering an unhealthy target healthy.
     */
    HealthyThresholdCount?: HealthCheckThresholdCount;
    /**
     * The number of consecutive health check failures required before considering the target unhealthy. For Network Load Balancers, this value must be the same as the healthy threshold count.
     */
    UnhealthyThresholdCount?: HealthCheckThresholdCount;
    /**
     * [HTTP/HTTPS health checks] The HTTP codes to use when checking for a successful response from a target.
     */
    Matcher?: Matcher;
  }
  export interface ModifyTargetGroupOutput {
    /**
     * Information about the target group.
     */
    TargetGroups?: TargetGroups;
  }
  export type Name = string;
  export type PageSize = number;
  export type Path = string;
  export type Port = number;
  export type ProtocolEnum = "HTTP"|"HTTPS"|"TCP"|string;
  export interface RegisterTargetsInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
    /**
     * The targets.
     */
    Targets: TargetDescriptions;
  }
  export interface RegisterTargetsOutput {
  }
  export interface RemoveListenerCertificatesInput {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn: ListenerArn;
    /**
     * The certificate to remove. You can specify one certificate per call.
     */
    Certificates: CertificateList;
  }
  export interface RemoveListenerCertificatesOutput {
  }
  export interface RemoveTagsInput {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArns: ResourceArns;
    /**
     * The tag keys for the tags to remove.
     */
    TagKeys: TagKeys;
  }
  export interface RemoveTagsOutput {
  }
  export type ResourceArn = string;
  export type ResourceArns = ResourceArn[];
  export interface Rule {
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    RuleArn?: RuleArn;
    /**
     * The priority.
     */
    Priority?: String;
    /**
     * The conditions.
     */
    Conditions?: RuleConditionList;
    /**
     * The actions.
     */
    Actions?: Actions;
    /**
     * Indicates whether this is the default rule.
     */
    IsDefault?: IsDefault;
  }
  export type RuleArn = string;
  export type RuleArns = RuleArn[];
  export interface RuleCondition {
    /**
     * The name of the field. The possible values are host-header and path-pattern.
     */
    Field?: ConditionFieldName;
    /**
     * The condition value. If the field name is host-header, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters. Note that you can include up to three wildcard characters.   A-Z, a-z, 0-9   - .   * (matches 0 or more characters)   ? (matches exactly 1 character)   If the field name is path-pattern, you can specify a single path pattern (for example, /img/*). A path pattern is case sensitive, can be up to 128 characters in length, and can contain any of the following characters. Note that you can include up to three wildcard characters.   A-Z, a-z, 0-9   _ - . $ / ~ " ' @ : +   &amp; (using &amp;amp;)   * (matches 0 or more characters)   ? (matches exactly 1 character)  
     */
    Values?: ListOfString;
  }
  export type RuleConditionList = RuleCondition[];
  export type RulePriority = number;
  export type RulePriorityList = RulePriorityPair[];
  export interface RulePriorityPair {
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    RuleArn?: RuleArn;
    /**
     * The rule priority.
     */
    Priority?: RulePriority;
  }
  export type Rules = Rule[];
  export type SecurityGroupId = string;
  export type SecurityGroups = SecurityGroupId[];
  export interface SetIpAddressTypeInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn: LoadBalancerArn;
    /**
     * The IP address type. The possible values are ipv4 (for IPv4 addresses) and dualstack (for IPv4 and IPv6 addresses). Internal load balancers must use ipv4.
     */
    IpAddressType: IpAddressType;
  }
  export interface SetIpAddressTypeOutput {
    /**
     * The IP address type.
     */
    IpAddressType?: IpAddressType;
  }
  export interface SetRulePrioritiesInput {
    /**
     * The rule priorities.
     */
    RulePriorities: RulePriorityList;
  }
  export interface SetRulePrioritiesOutput {
    /**
     * Information about the rules.
     */
    Rules?: Rules;
  }
  export interface SetSecurityGroupsInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn: LoadBalancerArn;
    /**
     * The IDs of the security groups.
     */
    SecurityGroups: SecurityGroups;
  }
  export interface SetSecurityGroupsOutput {
    /**
     * The IDs of the security groups associated with the load balancer.
     */
    SecurityGroupIds?: SecurityGroups;
  }
  export interface SetSubnetsInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn: LoadBalancerArn;
    /**
     * The IDs of the subnets. You must specify subnets from at least two Availability Zones. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.
     */
    Subnets: Subnets;
    /**
     * The IDs of the subnets. You must specify subnets from at least two Availability Zones. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings. The load balancer is allocated one static IP address per subnet. You cannot specify your own Elastic IP addresses.
     */
    SubnetMappings?: SubnetMappings;
  }
  export interface SetSubnetsOutput {
    /**
     * Information about the subnet and Availability Zone.
     */
    AvailabilityZones?: AvailabilityZones;
  }
  export type SslPolicies = SslPolicy[];
  export interface SslPolicy {
    /**
     * The protocols.
     */
    SslProtocols?: SslProtocols;
    /**
     * The ciphers.
     */
    Ciphers?: Ciphers;
    /**
     * The name of the policy.
     */
    Name?: SslPolicyName;
  }
  export type SslPolicyName = string;
  export type SslPolicyNames = SslPolicyName[];
  export type SslProtocol = string;
  export type SslProtocols = SslProtocol[];
  export type StateReason = string;
  export type String = string;
  export type StringValue = string;
  export type SubnetId = string;
  export interface SubnetMapping {
    /**
     * The ID of the subnet.
     */
    SubnetId?: SubnetId;
    /**
     * [Network Load Balancers] The allocation ID of the Elastic IP address.
     */
    AllocationId?: AllocationId;
  }
  export type SubnetMappings = SubnetMapping[];
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
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn?: ResourceArn;
    /**
     * Information about the tags.
     */
    Tags?: TagList;
  }
  export type TagDescriptions = TagDescription[];
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagList = Tag[];
  export type TagValue = string;
  export interface TargetDescription {
    /**
     * The ID of the target. If the target type of the target group is instance, specify an instance ID. If the target type is ip, specify an IP address.
     */
    Id: TargetId;
    /**
     * The port on which the target is listening.
     */
    Port?: Port;
    /**
     * An Availability Zone or all. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer. This parameter is not supported if the target type of the target group is instance. If the IP address is in a subnet of the VPC for the target group, the Availability Zone is automatically detected and this parameter is optional. If the IP address is outside the VPC, this parameter is required. With an Application Load Balancer, if the IP address is outside the VPC for the target group, the only supported value is all.
     */
    AvailabilityZone?: ZoneName;
  }
  export type TargetDescriptions = TargetDescription[];
  export interface TargetGroup {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn?: TargetGroupArn;
    /**
     * The name of the target group.
     */
    TargetGroupName?: TargetGroupName;
    /**
     * The protocol to use for routing traffic to the targets.
     */
    Protocol?: ProtocolEnum;
    /**
     * The port on which the targets are listening.
     */
    Port?: Port;
    /**
     * The ID of the VPC for the targets.
     */
    VpcId?: VpcId;
    /**
     * The protocol to use to connect with the target.
     */
    HealthCheckProtocol?: ProtocolEnum;
    /**
     * The port to use to connect with the target.
     */
    HealthCheckPort?: HealthCheckPort;
    /**
     * The approximate amount of time, in seconds, between health checks of an individual target.
     */
    HealthCheckIntervalSeconds?: HealthCheckIntervalSeconds;
    /**
     * The amount of time, in seconds, during which no response means a failed health check.
     */
    HealthCheckTimeoutSeconds?: HealthCheckTimeoutSeconds;
    /**
     * The number of consecutive health checks successes required before considering an unhealthy target healthy.
     */
    HealthyThresholdCount?: HealthCheckThresholdCount;
    /**
     * The number of consecutive health check failures required before considering the target unhealthy.
     */
    UnhealthyThresholdCount?: HealthCheckThresholdCount;
    /**
     * The destination for the health check request.
     */
    HealthCheckPath?: Path;
    /**
     * The HTTP codes to use when checking for a successful response from a target.
     */
    Matcher?: Matcher;
    /**
     * The Amazon Resource Names (ARN) of the load balancers that route traffic to this target group.
     */
    LoadBalancerArns?: LoadBalancerArns;
    /**
     * The type of target that you must specify when registering targets with this target group. The possible values are instance (targets are specified by instance ID) or ip (targets are specified by IP address).
     */
    TargetType?: TargetTypeEnum;
  }
  export type TargetGroupArn = string;
  export type TargetGroupArns = TargetGroupArn[];
  export interface TargetGroupAttribute {
    /**
     * The name of the attribute.    deregistration_delay.timeout_seconds - The amount time for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is 0-3600 seconds. The default value is 300 seconds.    stickiness.enabled - [Application Load Balancers] Indicates whether sticky sessions are enabled. The value is true or false.    stickiness.type - [Application Load Balancers] The type of sticky sessions. The possible value is lb_cookie.    stickiness.lb_cookie.duration_seconds - [Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the load balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds).  
     */
    Key?: TargetGroupAttributeKey;
    /**
     * The value of the attribute.
     */
    Value?: TargetGroupAttributeValue;
  }
  export type TargetGroupAttributeKey = string;
  export type TargetGroupAttributeValue = string;
  export type TargetGroupAttributes = TargetGroupAttribute[];
  export type TargetGroupName = string;
  export type TargetGroupNames = TargetGroupName[];
  export type TargetGroups = TargetGroup[];
  export interface TargetHealth {
    /**
     * The state of the target.
     */
    State?: TargetHealthStateEnum;
    /**
     * The reason code. If the target state is healthy, a reason code is not provided. If the target state is initial, the reason code can be one of the following values:    Elb.RegistrationInProgress - The target is in the process of being registered with the load balancer.    Elb.InitialHealthChecking - The load balancer is still sending the target the minimum number of health checks required to determine its health status.   If the target state is unhealthy, the reason code can be one of the following values:    Target.ResponseCodeMismatch - The health checks did not return an expected HTTP code.    Target.Timeout - The health check requests timed out.    Target.FailedHealthChecks - The health checks failed because the connection to the target timed out, the target response was malformed, or the target failed the health check for an unknown reason.    Elb.InternalError - The health checks failed due to an internal error.   If the target state is unused, the reason code can be one of the following values:    Target.NotRegistered - The target is not registered with the target group.    Target.NotInUse - The target group is not used by any load balancer or the target is in an Availability Zone that is not enabled for its load balancer.    Target.IpUnusable - The target IP address is reserved for use by a load balancer.    Target.InvalidState - The target is in the stopped or terminated state.   If the target state is draining, the reason code can be the following value:    Target.DeregistrationInProgress - The target is in the process of being deregistered and the deregistration delay period has not expired.  
     */
    Reason?: TargetHealthReasonEnum;
    /**
     * A description of the target health that provides additional details. If the state is healthy, a description is not provided.
     */
    Description?: Description;
  }
  export interface TargetHealthDescription {
    /**
     * The description of the target.
     */
    Target?: TargetDescription;
    /**
     * The port to use to connect with the target.
     */
    HealthCheckPort?: HealthCheckPort;
    /**
     * The health information for the target.
     */
    TargetHealth?: TargetHealth;
  }
  export type TargetHealthDescriptions = TargetHealthDescription[];
  export type TargetHealthReasonEnum = "Elb.RegistrationInProgress"|"Elb.InitialHealthChecking"|"Target.ResponseCodeMismatch"|"Target.Timeout"|"Target.FailedHealthChecks"|"Target.NotRegistered"|"Target.NotInUse"|"Target.DeregistrationInProgress"|"Target.InvalidState"|"Target.IpUnusable"|"Elb.InternalError"|string;
  export type TargetHealthStateEnum = "initial"|"healthy"|"unhealthy"|"unused"|"draining"|"unavailable"|string;
  export type TargetId = string;
  export type TargetTypeEnum = "instance"|"ip"|string;
  export type VpcId = string;
  export type ZoneName = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-12-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ELBv2 client.
   */
  export import Types = ELBv2;
}
export = ELBv2;
