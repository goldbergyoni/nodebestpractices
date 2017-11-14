import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Route53 extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Route53.Types.ClientConfiguration)
  config: Config & Route53.Types.ClientConfiguration;
  /**
   * Associates an Amazon VPC with a private hosted zone.   To perform the association, the VPC and the private hosted zone must already exist. You can't convert a public hosted zone into a private hosted zone.   If you want to associate a VPC that was created by using one AWS account with a private hosted zone that was created by using a different account, the AWS account that created the private hosted zone must first submit a CreateVPCAssociationAuthorization request. Then the account that created the VPC must submit an AssociateVPCWithHostedZone request. 
   */
  associateVPCWithHostedZone(params: Route53.Types.AssociateVPCWithHostedZoneRequest, callback?: (err: AWSError, data: Route53.Types.AssociateVPCWithHostedZoneResponse) => void): Request<Route53.Types.AssociateVPCWithHostedZoneResponse, AWSError>;
  /**
   * Associates an Amazon VPC with a private hosted zone.   To perform the association, the VPC and the private hosted zone must already exist. You can't convert a public hosted zone into a private hosted zone.   If you want to associate a VPC that was created by using one AWS account with a private hosted zone that was created by using a different account, the AWS account that created the private hosted zone must first submit a CreateVPCAssociationAuthorization request. Then the account that created the VPC must submit an AssociateVPCWithHostedZone request. 
   */
  associateVPCWithHostedZone(callback?: (err: AWSError, data: Route53.Types.AssociateVPCWithHostedZoneResponse) => void): Request<Route53.Types.AssociateVPCWithHostedZoneResponse, AWSError>;
  /**
   * Creates, changes, or deletes a resource record set, which contains authoritative DNS information for a specified domain name or subdomain name. For example, you can use ChangeResourceRecordSets to create a resource record set that routes traffic for test.example.com to a web server that has an IP address of 192.0.2.44.  Change Batches and Transactional Changes  The request body must include a document with a ChangeResourceRecordSetsRequest element. The request body contains a list of change items, known as a change batch. Change batches are considered transactional changes. When using the Amazon Route 53 API to change resource record sets, Amazon Route 53 either makes all or none of the changes in a change batch request. This ensures that Amazon Route 53 never partially implements the intended changes to the resource record sets in a hosted zone.  For example, a change batch request that deletes the CNAME record for www.example.com and creates an alias resource record set for www.example.com. Amazon Route 53 deletes the first resource record set and creates the second resource record set in a single operation. If either the DELETE or the CREATE action fails, then both changes (plus any other changes in the batch) fail, and the original CNAME record continues to exist.  Due to the nature of transactional changes, you can't delete the same resource record set more than once in a single change batch. If you attempt to delete the same change batch more than once, Amazon Route 53 returns an InvalidChangeBatch error.   Traffic Flow  To create resource record sets for complex routing configurations, use either the traffic flow visual editor in the Amazon Route 53 console or the API actions for traffic policies and traffic policy instances. Save the configuration as a traffic policy, then associate the traffic policy with one or more domain names (such as example.com) or subdomain names (such as www.example.com), in the same hosted zone or in multiple hosted zones. You can roll back the updates if the new configuration isn't performing as expected. For more information, see Using Traffic Flow to Route DNS Traffic in the Amazon Route 53 Developer Guide.  Create, Delete, and Upsert  Use ChangeResourceRecordsSetsRequest to perform the following actions:    CREATE: Creates a resource record set that has the specified values.    DELETE: Deletes an existing resource record set that has the specified values.    UPSERT: If a resource record set does not already exist, AWS creates it. If a resource set does exist, Amazon Route 53 updates it with the values in the request.     Syntaxes for Creating, Updating, and Deleting Resource Record Sets  The syntax for a request depends on the type of resource record set that you want to create, delete, or update, such as weighted, alias, or failover. The XML elements in your request must appear in the order listed in the syntax.  For an example for each type of resource record set, see "Examples." Don't refer to the syntax in the "Parameter Syntax" section, which includes all of the elements for every kind of resource record set that you can create, delete, or update by using ChangeResourceRecordSets.   Change Propagation to Amazon Route 53 DNS Servers  When you submit a ChangeResourceRecordSets request, Amazon Route 53 propagates your changes to all of the Amazon Route 53 authoritative DNS servers. While your changes are propagating, GetChange returns a status of PENDING. When propagation is complete, GetChange returns a status of INSYNC. Changes generally propagate to all Amazon Route 53 name servers within 60 seconds. For more information, see GetChange.  Limits on ChangeResourceRecordSets Requests  For information about the limits on a ChangeResourceRecordSets request, see Limits in the Amazon Route 53 Developer Guide.
   */
  changeResourceRecordSets(params: Route53.Types.ChangeResourceRecordSetsRequest, callback?: (err: AWSError, data: Route53.Types.ChangeResourceRecordSetsResponse) => void): Request<Route53.Types.ChangeResourceRecordSetsResponse, AWSError>;
  /**
   * Creates, changes, or deletes a resource record set, which contains authoritative DNS information for a specified domain name or subdomain name. For example, you can use ChangeResourceRecordSets to create a resource record set that routes traffic for test.example.com to a web server that has an IP address of 192.0.2.44.  Change Batches and Transactional Changes  The request body must include a document with a ChangeResourceRecordSetsRequest element. The request body contains a list of change items, known as a change batch. Change batches are considered transactional changes. When using the Amazon Route 53 API to change resource record sets, Amazon Route 53 either makes all or none of the changes in a change batch request. This ensures that Amazon Route 53 never partially implements the intended changes to the resource record sets in a hosted zone.  For example, a change batch request that deletes the CNAME record for www.example.com and creates an alias resource record set for www.example.com. Amazon Route 53 deletes the first resource record set and creates the second resource record set in a single operation. If either the DELETE or the CREATE action fails, then both changes (plus any other changes in the batch) fail, and the original CNAME record continues to exist.  Due to the nature of transactional changes, you can't delete the same resource record set more than once in a single change batch. If you attempt to delete the same change batch more than once, Amazon Route 53 returns an InvalidChangeBatch error.   Traffic Flow  To create resource record sets for complex routing configurations, use either the traffic flow visual editor in the Amazon Route 53 console or the API actions for traffic policies and traffic policy instances. Save the configuration as a traffic policy, then associate the traffic policy with one or more domain names (such as example.com) or subdomain names (such as www.example.com), in the same hosted zone or in multiple hosted zones. You can roll back the updates if the new configuration isn't performing as expected. For more information, see Using Traffic Flow to Route DNS Traffic in the Amazon Route 53 Developer Guide.  Create, Delete, and Upsert  Use ChangeResourceRecordsSetsRequest to perform the following actions:    CREATE: Creates a resource record set that has the specified values.    DELETE: Deletes an existing resource record set that has the specified values.    UPSERT: If a resource record set does not already exist, AWS creates it. If a resource set does exist, Amazon Route 53 updates it with the values in the request.     Syntaxes for Creating, Updating, and Deleting Resource Record Sets  The syntax for a request depends on the type of resource record set that you want to create, delete, or update, such as weighted, alias, or failover. The XML elements in your request must appear in the order listed in the syntax.  For an example for each type of resource record set, see "Examples." Don't refer to the syntax in the "Parameter Syntax" section, which includes all of the elements for every kind of resource record set that you can create, delete, or update by using ChangeResourceRecordSets.   Change Propagation to Amazon Route 53 DNS Servers  When you submit a ChangeResourceRecordSets request, Amazon Route 53 propagates your changes to all of the Amazon Route 53 authoritative DNS servers. While your changes are propagating, GetChange returns a status of PENDING. When propagation is complete, GetChange returns a status of INSYNC. Changes generally propagate to all Amazon Route 53 name servers within 60 seconds. For more information, see GetChange.  Limits on ChangeResourceRecordSets Requests  For information about the limits on a ChangeResourceRecordSets request, see Limits in the Amazon Route 53 Developer Guide.
   */
  changeResourceRecordSets(callback?: (err: AWSError, data: Route53.Types.ChangeResourceRecordSetsResponse) => void): Request<Route53.Types.ChangeResourceRecordSetsResponse, AWSError>;
  /**
   * Adds, edits, or deletes tags for a health check or a hosted zone. For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
   */
  changeTagsForResource(params: Route53.Types.ChangeTagsForResourceRequest, callback?: (err: AWSError, data: Route53.Types.ChangeTagsForResourceResponse) => void): Request<Route53.Types.ChangeTagsForResourceResponse, AWSError>;
  /**
   * Adds, edits, or deletes tags for a health check or a hosted zone. For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
   */
  changeTagsForResource(callback?: (err: AWSError, data: Route53.Types.ChangeTagsForResourceResponse) => void): Request<Route53.Types.ChangeTagsForResourceResponse, AWSError>;
  /**
   * Creates a new health check. For information about adding health checks to resource record sets, see ResourceRecordSet$HealthCheckId in ChangeResourceRecordSets.   ELB Load Balancers  If you're registering EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the EC2 instances. When you register an EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a similar function to an Amazon Route 53 health check.  Private Hosted Zones  You can associate health checks with failover resource record sets in a private hosted zone. Note the following:   Amazon Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must assign a public IP address to the instance in the VPC.   You can configure a health checker to check the health of an external resource that the instance relies on, such as a database server.   You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 StatusCheckFailed metric, add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating CloudWatch metrics and alarms by using the CloudWatch console, see the Amazon CloudWatch User Guide.  
   */
  createHealthCheck(params: Route53.Types.CreateHealthCheckRequest, callback?: (err: AWSError, data: Route53.Types.CreateHealthCheckResponse) => void): Request<Route53.Types.CreateHealthCheckResponse, AWSError>;
  /**
   * Creates a new health check. For information about adding health checks to resource record sets, see ResourceRecordSet$HealthCheckId in ChangeResourceRecordSets.   ELB Load Balancers  If you're registering EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the EC2 instances. When you register an EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a similar function to an Amazon Route 53 health check.  Private Hosted Zones  You can associate health checks with failover resource record sets in a private hosted zone. Note the following:   Amazon Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must assign a public IP address to the instance in the VPC.   You can configure a health checker to check the health of an external resource that the instance relies on, such as a database server.   You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 StatusCheckFailed metric, add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating CloudWatch metrics and alarms by using the CloudWatch console, see the Amazon CloudWatch User Guide.  
   */
  createHealthCheck(callback?: (err: AWSError, data: Route53.Types.CreateHealthCheckResponse) => void): Request<Route53.Types.CreateHealthCheckResponse, AWSError>;
  /**
   * Creates a new public hosted zone, which you use to specify how the Domain Name System (DNS) routes traffic on the Internet for a domain, such as example.com, and its subdomains.   You can't convert a public hosted zones to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets.  For more information about charges for hosted zones, see Amazon Route 53 Pricing. Note the following:   You can't create a hosted zone for a top-level domain (TLD).   Amazon Route 53 automatically creates a default SOA record and four NS records for the zone. For more information about SOA and NS records, see NS and SOA Records that Amazon Route 53 Creates for a Hosted Zone in the Amazon Route 53 Developer Guide. If you want to use the same name servers for multiple hosted zones, you can optionally associate a reusable delegation set with the hosted zone. See the DelegationSetId element.   If your domain is registered with a registrar other than Amazon Route 53, you must update the name servers with your registrar to make Amazon Route 53 your DNS service. For more information, see Configuring Amazon Route 53 as your DNS Service in the Amazon Route 53 Developer Guide.    When you submit a CreateHostedZone request, the initial status of the hosted zone is PENDING. This means that the NS and SOA records are not yet available on all Amazon Route 53 DNS servers. When the NS and SOA records are available, the status of the zone changes to INSYNC.
   */
  createHostedZone(params: Route53.Types.CreateHostedZoneRequest, callback?: (err: AWSError, data: Route53.Types.CreateHostedZoneResponse) => void): Request<Route53.Types.CreateHostedZoneResponse, AWSError>;
  /**
   * Creates a new public hosted zone, which you use to specify how the Domain Name System (DNS) routes traffic on the Internet for a domain, such as example.com, and its subdomains.   You can't convert a public hosted zones to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets.  For more information about charges for hosted zones, see Amazon Route 53 Pricing. Note the following:   You can't create a hosted zone for a top-level domain (TLD).   Amazon Route 53 automatically creates a default SOA record and four NS records for the zone. For more information about SOA and NS records, see NS and SOA Records that Amazon Route 53 Creates for a Hosted Zone in the Amazon Route 53 Developer Guide. If you want to use the same name servers for multiple hosted zones, you can optionally associate a reusable delegation set with the hosted zone. See the DelegationSetId element.   If your domain is registered with a registrar other than Amazon Route 53, you must update the name servers with your registrar to make Amazon Route 53 your DNS service. For more information, see Configuring Amazon Route 53 as your DNS Service in the Amazon Route 53 Developer Guide.    When you submit a CreateHostedZone request, the initial status of the hosted zone is PENDING. This means that the NS and SOA records are not yet available on all Amazon Route 53 DNS servers. When the NS and SOA records are available, the status of the zone changes to INSYNC.
   */
  createHostedZone(callback?: (err: AWSError, data: Route53.Types.CreateHostedZoneResponse) => void): Request<Route53.Types.CreateHostedZoneResponse, AWSError>;
  /**
   * Creates a configuration for DNS query logging. After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group. DNS query logs contain information about the queries that Amazon Route 53 receives for a specified public hosted zone, such as the following:   Amazon Route 53 edge location that responded to the DNS query   Domain or subdomain that was requested   DNS record type, such as A or AAAA   DNS response code, such as NoError or ServFail     Log Group and Resource Policy  Before you create a query logging configuration, perform the following operations.  If you create a query logging configuration using the Amazon Route 53 console, Amazon Route 53 performs these operations automatically.    Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following:   You must create the log group in the us-east-1 region.   You must use the same AWS account to create the log group and the hosted zone that you want to configure query logging for.   When you create log groups for query logging, we recommend that you use a consistent prefix, for example:  /aws/route53/hosted zone name   In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated AWS resources, such as Amazon Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging.     Create a CloudWatch Logs resource policy, and give it the permissions that Amazon Route 53 needs to create log streams and to to send query logs to log streams. For the value of Resource, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with *, for example:  arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/*   You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the AWS SDKs, or the AWS CLI.     Log Streams and Edge Locations  When Amazon Route 53 finishes creating the configuration for DNS query logging, it does the following:   Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Amazon Route 53 responds to for that edge location.   Begins to send query logs to the applicable log stream.   The name of each log stream is in the following format:   hosted zone ID/edge location code   The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Amazon Route 53 Global Network" on the Amazon Route 53 Product Details page.  Queries That Are Logged  Query logs contain only the queries that DNS resolvers forward to Amazon Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Amazon Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see Routing Internet Traffic to Your Website or Web Application in the Amazon Route 53 Developer Guide.  Log File Format  For a list of the values in each query log and the format of each value, see Logging DNS Queries in the Amazon Route 53 Developer Guide.  Pricing  For information about charges for query logs, see Amazon CloudWatch Pricing.  How to Stop Logging  If you want Amazon Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see DeleteQueryLoggingConfig.  
   */
  createQueryLoggingConfig(params: Route53.Types.CreateQueryLoggingConfigRequest, callback?: (err: AWSError, data: Route53.Types.CreateQueryLoggingConfigResponse) => void): Request<Route53.Types.CreateQueryLoggingConfigResponse, AWSError>;
  /**
   * Creates a configuration for DNS query logging. After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group. DNS query logs contain information about the queries that Amazon Route 53 receives for a specified public hosted zone, such as the following:   Amazon Route 53 edge location that responded to the DNS query   Domain or subdomain that was requested   DNS record type, such as A or AAAA   DNS response code, such as NoError or ServFail     Log Group and Resource Policy  Before you create a query logging configuration, perform the following operations.  If you create a query logging configuration using the Amazon Route 53 console, Amazon Route 53 performs these operations automatically.    Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following:   You must create the log group in the us-east-1 region.   You must use the same AWS account to create the log group and the hosted zone that you want to configure query logging for.   When you create log groups for query logging, we recommend that you use a consistent prefix, for example:  /aws/route53/hosted zone name   In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated AWS resources, such as Amazon Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging.     Create a CloudWatch Logs resource policy, and give it the permissions that Amazon Route 53 needs to create log streams and to to send query logs to log streams. For the value of Resource, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with *, for example:  arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/*   You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the AWS SDKs, or the AWS CLI.     Log Streams and Edge Locations  When Amazon Route 53 finishes creating the configuration for DNS query logging, it does the following:   Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Amazon Route 53 responds to for that edge location.   Begins to send query logs to the applicable log stream.   The name of each log stream is in the following format:   hosted zone ID/edge location code   The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Amazon Route 53 Global Network" on the Amazon Route 53 Product Details page.  Queries That Are Logged  Query logs contain only the queries that DNS resolvers forward to Amazon Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Amazon Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see Routing Internet Traffic to Your Website or Web Application in the Amazon Route 53 Developer Guide.  Log File Format  For a list of the values in each query log and the format of each value, see Logging DNS Queries in the Amazon Route 53 Developer Guide.  Pricing  For information about charges for query logs, see Amazon CloudWatch Pricing.  How to Stop Logging  If you want Amazon Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see DeleteQueryLoggingConfig.  
   */
  createQueryLoggingConfig(callback?: (err: AWSError, data: Route53.Types.CreateQueryLoggingConfigResponse) => void): Request<Route53.Types.CreateQueryLoggingConfigResponse, AWSError>;
  /**
   * Creates a delegation set (a group of four name servers) that can be reused by multiple hosted zones. If a hosted zoned ID is specified, CreateReusableDelegationSet marks the delegation set associated with that zone as reusable  A reusable delegation set can't be associated with a private hosted zone.  For information on how to use a reusable delegation set to configure white label name servers, see Configuring White Label Name Servers.
   */
  createReusableDelegationSet(params: Route53.Types.CreateReusableDelegationSetRequest, callback?: (err: AWSError, data: Route53.Types.CreateReusableDelegationSetResponse) => void): Request<Route53.Types.CreateReusableDelegationSetResponse, AWSError>;
  /**
   * Creates a delegation set (a group of four name servers) that can be reused by multiple hosted zones. If a hosted zoned ID is specified, CreateReusableDelegationSet marks the delegation set associated with that zone as reusable  A reusable delegation set can't be associated with a private hosted zone.  For information on how to use a reusable delegation set to configure white label name servers, see Configuring White Label Name Servers.
   */
  createReusableDelegationSet(callback?: (err: AWSError, data: Route53.Types.CreateReusableDelegationSetResponse) => void): Request<Route53.Types.CreateReusableDelegationSetResponse, AWSError>;
  /**
   * Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com).
   */
  createTrafficPolicy(params: Route53.Types.CreateTrafficPolicyRequest, callback?: (err: AWSError, data: Route53.Types.CreateTrafficPolicyResponse) => void): Request<Route53.Types.CreateTrafficPolicyResponse, AWSError>;
  /**
   * Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com).
   */
  createTrafficPolicy(callback?: (err: AWSError, data: Route53.Types.CreateTrafficPolicyResponse) => void): Request<Route53.Types.CreateTrafficPolicyResponse, AWSError>;
  /**
   * Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version. In addition, CreateTrafficPolicyInstance associates the resource record sets with a specified domain name (such as example.com) or subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets that CreateTrafficPolicyInstance created.
   */
  createTrafficPolicyInstance(params: Route53.Types.CreateTrafficPolicyInstanceRequest, callback?: (err: AWSError, data: Route53.Types.CreateTrafficPolicyInstanceResponse) => void): Request<Route53.Types.CreateTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version. In addition, CreateTrafficPolicyInstance associates the resource record sets with a specified domain name (such as example.com) or subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets that CreateTrafficPolicyInstance created.
   */
  createTrafficPolicyInstance(callback?: (err: AWSError, data: Route53.Types.CreateTrafficPolicyInstanceResponse) => void): Request<Route53.Types.CreateTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new traffic policy.
   */
  createTrafficPolicyVersion(params: Route53.Types.CreateTrafficPolicyVersionRequest, callback?: (err: AWSError, data: Route53.Types.CreateTrafficPolicyVersionResponse) => void): Request<Route53.Types.CreateTrafficPolicyVersionResponse, AWSError>;
  /**
   * Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new traffic policy.
   */
  createTrafficPolicyVersion(callback?: (err: AWSError, data: Route53.Types.CreateTrafficPolicyVersionResponse) => void): Request<Route53.Types.CreateTrafficPolicyVersionResponse, AWSError>;
  /**
   * Authorizes the AWS account that created a specified VPC to submit an AssociateVPCWithHostedZone request to associate the VPC with a specified hosted zone that was created by a different account. To submit a CreateVPCAssociationAuthorization request, you must use the account that created the hosted zone. After you authorize the association, use the account that created the VPC to submit an AssociateVPCWithHostedZone request.  If you want to associate multiple VPCs that you created by using one account with a hosted zone that you created by using a different account, you must submit one authorization request for each VPC. 
   */
  createVPCAssociationAuthorization(params: Route53.Types.CreateVPCAssociationAuthorizationRequest, callback?: (err: AWSError, data: Route53.Types.CreateVPCAssociationAuthorizationResponse) => void): Request<Route53.Types.CreateVPCAssociationAuthorizationResponse, AWSError>;
  /**
   * Authorizes the AWS account that created a specified VPC to submit an AssociateVPCWithHostedZone request to associate the VPC with a specified hosted zone that was created by a different account. To submit a CreateVPCAssociationAuthorization request, you must use the account that created the hosted zone. After you authorize the association, use the account that created the VPC to submit an AssociateVPCWithHostedZone request.  If you want to associate multiple VPCs that you created by using one account with a hosted zone that you created by using a different account, you must submit one authorization request for each VPC. 
   */
  createVPCAssociationAuthorization(callback?: (err: AWSError, data: Route53.Types.CreateVPCAssociationAuthorizationResponse) => void): Request<Route53.Types.CreateVPCAssociationAuthorizationResponse, AWSError>;
  /**
   * Deletes a health check.  Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover configuration. For more information, see Replacing and Deleting Health Checks in the Amazon Route 53 Developer Guide. 
   */
  deleteHealthCheck(params: Route53.Types.DeleteHealthCheckRequest, callback?: (err: AWSError, data: Route53.Types.DeleteHealthCheckResponse) => void): Request<Route53.Types.DeleteHealthCheckResponse, AWSError>;
  /**
   * Deletes a health check.  Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover configuration. For more information, see Replacing and Deleting Health Checks in the Amazon Route 53 Developer Guide. 
   */
  deleteHealthCheck(callback?: (err: AWSError, data: Route53.Types.DeleteHealthCheckResponse) => void): Request<Route53.Types.DeleteHealthCheckResponse, AWSError>;
  /**
   * Deletes a hosted zone.  If the name servers for the hosted zone are associated with a domain and if you want to make the domain unavailable on the Internet, we recommend that you delete the name servers from the domain to prevent future DNS queries from possibly being misrouted. If the domain is registered with Amazon Route 53, see UpdateDomainNameservers. If the domain is registered with another registrar, use the method provided by the registrar to delete name servers for the domain. Some domain registries don't allow you to remove all of the name servers for a domain. If the registry for your domain requires one or more name servers, we recommend that you delete the hosted zone only if you transfer DNS service to another service provider, and you replace the name servers for the domain with name servers from the new provider.  You can delete a hosted zone only if it contains only the default SOA record and NS resource record sets. If the hosted zone contains other resource record sets, you must delete them before you can delete the hosted zone. If you try to delete a hosted zone that contains other resource record sets, the request fails, and Amazon Route 53 returns a HostedZoneNotEmpty error. For information about deleting records from your hosted zone, see ChangeResourceRecordSets. To verify that the hosted zone has been deleted, do one of the following:   Use the GetHostedZone action to request information about the hosted zone.   Use the ListHostedZones action to get a list of the hosted zones associated with the current AWS account.  
   */
  deleteHostedZone(params: Route53.Types.DeleteHostedZoneRequest, callback?: (err: AWSError, data: Route53.Types.DeleteHostedZoneResponse) => void): Request<Route53.Types.DeleteHostedZoneResponse, AWSError>;
  /**
   * Deletes a hosted zone.  If the name servers for the hosted zone are associated with a domain and if you want to make the domain unavailable on the Internet, we recommend that you delete the name servers from the domain to prevent future DNS queries from possibly being misrouted. If the domain is registered with Amazon Route 53, see UpdateDomainNameservers. If the domain is registered with another registrar, use the method provided by the registrar to delete name servers for the domain. Some domain registries don't allow you to remove all of the name servers for a domain. If the registry for your domain requires one or more name servers, we recommend that you delete the hosted zone only if you transfer DNS service to another service provider, and you replace the name servers for the domain with name servers from the new provider.  You can delete a hosted zone only if it contains only the default SOA record and NS resource record sets. If the hosted zone contains other resource record sets, you must delete them before you can delete the hosted zone. If you try to delete a hosted zone that contains other resource record sets, the request fails, and Amazon Route 53 returns a HostedZoneNotEmpty error. For information about deleting records from your hosted zone, see ChangeResourceRecordSets. To verify that the hosted zone has been deleted, do one of the following:   Use the GetHostedZone action to request information about the hosted zone.   Use the ListHostedZones action to get a list of the hosted zones associated with the current AWS account.  
   */
  deleteHostedZone(callback?: (err: AWSError, data: Route53.Types.DeleteHostedZoneResponse) => void): Request<Route53.Types.DeleteHostedZoneResponse, AWSError>;
  /**
   * Deletes a configuration for DNS query logging. If you delete a configuration, Amazon Route 53 stops sending query logs to CloudWatch Logs. Amazon Route 53 doesn't delete any logs that are already in CloudWatch Logs. For more information about DNS query logs, see CreateQueryLoggingConfig.
   */
  deleteQueryLoggingConfig(params: Route53.Types.DeleteQueryLoggingConfigRequest, callback?: (err: AWSError, data: Route53.Types.DeleteQueryLoggingConfigResponse) => void): Request<Route53.Types.DeleteQueryLoggingConfigResponse, AWSError>;
  /**
   * Deletes a configuration for DNS query logging. If you delete a configuration, Amazon Route 53 stops sending query logs to CloudWatch Logs. Amazon Route 53 doesn't delete any logs that are already in CloudWatch Logs. For more information about DNS query logs, see CreateQueryLoggingConfig.
   */
  deleteQueryLoggingConfig(callback?: (err: AWSError, data: Route53.Types.DeleteQueryLoggingConfigResponse) => void): Request<Route53.Types.DeleteQueryLoggingConfigResponse, AWSError>;
  /**
   * Deletes a reusable delegation set.  You can delete a reusable delegation set only if it isn't associated with any hosted zones.  To verify that the reusable delegation set is not associated with any hosted zones, submit a GetReusableDelegationSet request and specify the ID of the reusable delegation set that you want to delete.
   */
  deleteReusableDelegationSet(params: Route53.Types.DeleteReusableDelegationSetRequest, callback?: (err: AWSError, data: Route53.Types.DeleteReusableDelegationSetResponse) => void): Request<Route53.Types.DeleteReusableDelegationSetResponse, AWSError>;
  /**
   * Deletes a reusable delegation set.  You can delete a reusable delegation set only if it isn't associated with any hosted zones.  To verify that the reusable delegation set is not associated with any hosted zones, submit a GetReusableDelegationSet request and specify the ID of the reusable delegation set that you want to delete.
   */
  deleteReusableDelegationSet(callback?: (err: AWSError, data: Route53.Types.DeleteReusableDelegationSetResponse) => void): Request<Route53.Types.DeleteReusableDelegationSetResponse, AWSError>;
  /**
   * Deletes a traffic policy.
   */
  deleteTrafficPolicy(params: Route53.Types.DeleteTrafficPolicyRequest, callback?: (err: AWSError, data: Route53.Types.DeleteTrafficPolicyResponse) => void): Request<Route53.Types.DeleteTrafficPolicyResponse, AWSError>;
  /**
   * Deletes a traffic policy.
   */
  deleteTrafficPolicy(callback?: (err: AWSError, data: Route53.Types.DeleteTrafficPolicyResponse) => void): Request<Route53.Types.DeleteTrafficPolicyResponse, AWSError>;
  /**
   * Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance.  In the Amazon Route 53 console, traffic policy instances are known as policy records. 
   */
  deleteTrafficPolicyInstance(params: Route53.Types.DeleteTrafficPolicyInstanceRequest, callback?: (err: AWSError, data: Route53.Types.DeleteTrafficPolicyInstanceResponse) => void): Request<Route53.Types.DeleteTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance.  In the Amazon Route 53 console, traffic policy instances are known as policy records. 
   */
  deleteTrafficPolicyInstance(callback?: (err: AWSError, data: Route53.Types.DeleteTrafficPolicyInstanceResponse) => void): Request<Route53.Types.DeleteTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Removes authorization to submit an AssociateVPCWithHostedZone request to associate a specified VPC with a hosted zone that was created by a different account. You must use the account that created the hosted zone to submit a DeleteVPCAssociationAuthorization request.  Sending this request only prevents the AWS account that created the VPC from associating the VPC with the Amazon Route 53 hosted zone in the future. If the VPC is already associated with the hosted zone, DeleteVPCAssociationAuthorization won't disassociate the VPC from the hosted zone. If you want to delete an existing association, use DisassociateVPCFromHostedZone. 
   */
  deleteVPCAssociationAuthorization(params: Route53.Types.DeleteVPCAssociationAuthorizationRequest, callback?: (err: AWSError, data: Route53.Types.DeleteVPCAssociationAuthorizationResponse) => void): Request<Route53.Types.DeleteVPCAssociationAuthorizationResponse, AWSError>;
  /**
   * Removes authorization to submit an AssociateVPCWithHostedZone request to associate a specified VPC with a hosted zone that was created by a different account. You must use the account that created the hosted zone to submit a DeleteVPCAssociationAuthorization request.  Sending this request only prevents the AWS account that created the VPC from associating the VPC with the Amazon Route 53 hosted zone in the future. If the VPC is already associated with the hosted zone, DeleteVPCAssociationAuthorization won't disassociate the VPC from the hosted zone. If you want to delete an existing association, use DisassociateVPCFromHostedZone. 
   */
  deleteVPCAssociationAuthorization(callback?: (err: AWSError, data: Route53.Types.DeleteVPCAssociationAuthorizationResponse) => void): Request<Route53.Types.DeleteVPCAssociationAuthorizationResponse, AWSError>;
  /**
   * Disassociates a VPC from a Amazon Route 53 private hosted zone.   You can't disassociate the last VPC from a private hosted zone.   You can't disassociate a VPC from a private hosted zone when only one VPC is associated with the hosted zone. You also can't convert a private hosted zone into a public hosted zone. 
   */
  disassociateVPCFromHostedZone(params: Route53.Types.DisassociateVPCFromHostedZoneRequest, callback?: (err: AWSError, data: Route53.Types.DisassociateVPCFromHostedZoneResponse) => void): Request<Route53.Types.DisassociateVPCFromHostedZoneResponse, AWSError>;
  /**
   * Disassociates a VPC from a Amazon Route 53 private hosted zone.   You can't disassociate the last VPC from a private hosted zone.   You can't disassociate a VPC from a private hosted zone when only one VPC is associated with the hosted zone. You also can't convert a private hosted zone into a public hosted zone. 
   */
  disassociateVPCFromHostedZone(callback?: (err: AWSError, data: Route53.Types.DisassociateVPCFromHostedZoneResponse) => void): Request<Route53.Types.DisassociateVPCFromHostedZoneResponse, AWSError>;
  /**
   * Returns the current status of a change batch request. The status is one of the following values:    PENDING indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers. This is the initial status of all change batch requests.    INSYNC indicates that the changes have propagated to all Amazon Route 53 DNS servers.   
   */
  getChange(params: Route53.Types.GetChangeRequest, callback?: (err: AWSError, data: Route53.Types.GetChangeResponse) => void): Request<Route53.Types.GetChangeResponse, AWSError>;
  /**
   * Returns the current status of a change batch request. The status is one of the following values:    PENDING indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers. This is the initial status of all change batch requests.    INSYNC indicates that the changes have propagated to all Amazon Route 53 DNS servers.   
   */
  getChange(callback?: (err: AWSError, data: Route53.Types.GetChangeResponse) => void): Request<Route53.Types.GetChangeResponse, AWSError>;
  /**
   *  GetCheckerIpRanges still works, but we recommend that you download ip-ranges.json, which includes IP address ranges for all AWS services. For more information, see IP Address Ranges of Amazon Route 53 Servers in the Amazon Route 53 Developer Guide.
   */
  getCheckerIpRanges(params: Route53.Types.GetCheckerIpRangesRequest, callback?: (err: AWSError, data: Route53.Types.GetCheckerIpRangesResponse) => void): Request<Route53.Types.GetCheckerIpRangesResponse, AWSError>;
  /**
   *  GetCheckerIpRanges still works, but we recommend that you download ip-ranges.json, which includes IP address ranges for all AWS services. For more information, see IP Address Ranges of Amazon Route 53 Servers in the Amazon Route 53 Developer Guide.
   */
  getCheckerIpRanges(callback?: (err: AWSError, data: Route53.Types.GetCheckerIpRangesResponse) => void): Request<Route53.Types.GetCheckerIpRangesResponse, AWSError>;
  /**
   * Gets information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets. Use the following syntax to determine whether a continent is supported for geolocation:  GET /2013-04-01/geolocation?ContinentCode=two-letter abbreviation for a continent   Use the following syntax to determine whether a country is supported for geolocation:  GET /2013-04-01/geolocation?CountryCode=two-character country code   Use the following syntax to determine whether a subdivision of a country is supported for geolocation:  GET /2013-04-01/geolocation?CountryCode=two-character country code&amp;SubdivisionCode=subdivision code  
   */
  getGeoLocation(params: Route53.Types.GetGeoLocationRequest, callback?: (err: AWSError, data: Route53.Types.GetGeoLocationResponse) => void): Request<Route53.Types.GetGeoLocationResponse, AWSError>;
  /**
   * Gets information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets. Use the following syntax to determine whether a continent is supported for geolocation:  GET /2013-04-01/geolocation?ContinentCode=two-letter abbreviation for a continent   Use the following syntax to determine whether a country is supported for geolocation:  GET /2013-04-01/geolocation?CountryCode=two-character country code   Use the following syntax to determine whether a subdivision of a country is supported for geolocation:  GET /2013-04-01/geolocation?CountryCode=two-character country code&amp;SubdivisionCode=subdivision code  
   */
  getGeoLocation(callback?: (err: AWSError, data: Route53.Types.GetGeoLocationResponse) => void): Request<Route53.Types.GetGeoLocationResponse, AWSError>;
  /**
   * Gets information about a specified health check.
   */
  getHealthCheck(params: Route53.Types.GetHealthCheckRequest, callback?: (err: AWSError, data: Route53.Types.GetHealthCheckResponse) => void): Request<Route53.Types.GetHealthCheckResponse, AWSError>;
  /**
   * Gets information about a specified health check.
   */
  getHealthCheck(callback?: (err: AWSError, data: Route53.Types.GetHealthCheckResponse) => void): Request<Route53.Types.GetHealthCheckResponse, AWSError>;
  /**
   * Retrieves the number of health checks that are associated with the current AWS account.
   */
  getHealthCheckCount(params: Route53.Types.GetHealthCheckCountRequest, callback?: (err: AWSError, data: Route53.Types.GetHealthCheckCountResponse) => void): Request<Route53.Types.GetHealthCheckCountResponse, AWSError>;
  /**
   * Retrieves the number of health checks that are associated with the current AWS account.
   */
  getHealthCheckCount(callback?: (err: AWSError, data: Route53.Types.GetHealthCheckCountResponse) => void): Request<Route53.Types.GetHealthCheckCountResponse, AWSError>;
  /**
   * Gets the reason that a specified health check failed most recently.
   */
  getHealthCheckLastFailureReason(params: Route53.Types.GetHealthCheckLastFailureReasonRequest, callback?: (err: AWSError, data: Route53.Types.GetHealthCheckLastFailureReasonResponse) => void): Request<Route53.Types.GetHealthCheckLastFailureReasonResponse, AWSError>;
  /**
   * Gets the reason that a specified health check failed most recently.
   */
  getHealthCheckLastFailureReason(callback?: (err: AWSError, data: Route53.Types.GetHealthCheckLastFailureReasonResponse) => void): Request<Route53.Types.GetHealthCheckLastFailureReasonResponse, AWSError>;
  /**
   * Gets status of a specified health check. 
   */
  getHealthCheckStatus(params: Route53.Types.GetHealthCheckStatusRequest, callback?: (err: AWSError, data: Route53.Types.GetHealthCheckStatusResponse) => void): Request<Route53.Types.GetHealthCheckStatusResponse, AWSError>;
  /**
   * Gets status of a specified health check. 
   */
  getHealthCheckStatus(callback?: (err: AWSError, data: Route53.Types.GetHealthCheckStatusResponse) => void): Request<Route53.Types.GetHealthCheckStatusResponse, AWSError>;
  /**
   * Gets information about a specified hosted zone including the four name servers assigned to the hosted zone.
   */
  getHostedZone(params: Route53.Types.GetHostedZoneRequest, callback?: (err: AWSError, data: Route53.Types.GetHostedZoneResponse) => void): Request<Route53.Types.GetHostedZoneResponse, AWSError>;
  /**
   * Gets information about a specified hosted zone including the four name servers assigned to the hosted zone.
   */
  getHostedZone(callback?: (err: AWSError, data: Route53.Types.GetHostedZoneResponse) => void): Request<Route53.Types.GetHostedZoneResponse, AWSError>;
  /**
   * Retrieves the number of hosted zones that are associated with the current AWS account.
   */
  getHostedZoneCount(params: Route53.Types.GetHostedZoneCountRequest, callback?: (err: AWSError, data: Route53.Types.GetHostedZoneCountResponse) => void): Request<Route53.Types.GetHostedZoneCountResponse, AWSError>;
  /**
   * Retrieves the number of hosted zones that are associated with the current AWS account.
   */
  getHostedZoneCount(callback?: (err: AWSError, data: Route53.Types.GetHostedZoneCountResponse) => void): Request<Route53.Types.GetHostedZoneCountResponse, AWSError>;
  /**
   * Gets information about a specified configuration for DNS query logging. For more information about DNS query logs, see CreateQueryLoggingConfig and Logging DNS Queries.
   */
  getQueryLoggingConfig(params: Route53.Types.GetQueryLoggingConfigRequest, callback?: (err: AWSError, data: Route53.Types.GetQueryLoggingConfigResponse) => void): Request<Route53.Types.GetQueryLoggingConfigResponse, AWSError>;
  /**
   * Gets information about a specified configuration for DNS query logging. For more information about DNS query logs, see CreateQueryLoggingConfig and Logging DNS Queries.
   */
  getQueryLoggingConfig(callback?: (err: AWSError, data: Route53.Types.GetQueryLoggingConfigResponse) => void): Request<Route53.Types.GetQueryLoggingConfigResponse, AWSError>;
  /**
   * Retrieves information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set.
   */
  getReusableDelegationSet(params: Route53.Types.GetReusableDelegationSetRequest, callback?: (err: AWSError, data: Route53.Types.GetReusableDelegationSetResponse) => void): Request<Route53.Types.GetReusableDelegationSetResponse, AWSError>;
  /**
   * Retrieves information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set.
   */
  getReusableDelegationSet(callback?: (err: AWSError, data: Route53.Types.GetReusableDelegationSetResponse) => void): Request<Route53.Types.GetReusableDelegationSetResponse, AWSError>;
  /**
   * Gets information about a specific traffic policy version.
   */
  getTrafficPolicy(params: Route53.Types.GetTrafficPolicyRequest, callback?: (err: AWSError, data: Route53.Types.GetTrafficPolicyResponse) => void): Request<Route53.Types.GetTrafficPolicyResponse, AWSError>;
  /**
   * Gets information about a specific traffic policy version.
   */
  getTrafficPolicy(callback?: (err: AWSError, data: Route53.Types.GetTrafficPolicyResponse) => void): Request<Route53.Types.GetTrafficPolicyResponse, AWSError>;
  /**
   * Gets information about a specified traffic policy instance.  After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.   In the Amazon Route 53 console, traffic policy instances are known as policy records. 
   */
  getTrafficPolicyInstance(params: Route53.Types.GetTrafficPolicyInstanceRequest, callback?: (err: AWSError, data: Route53.Types.GetTrafficPolicyInstanceResponse) => void): Request<Route53.Types.GetTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Gets information about a specified traffic policy instance.  After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.   In the Amazon Route 53 console, traffic policy instances are known as policy records. 
   */
  getTrafficPolicyInstance(callback?: (err: AWSError, data: Route53.Types.GetTrafficPolicyInstanceResponse) => void): Request<Route53.Types.GetTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Gets the number of traffic policy instances that are associated with the current AWS account.
   */
  getTrafficPolicyInstanceCount(params: Route53.Types.GetTrafficPolicyInstanceCountRequest, callback?: (err: AWSError, data: Route53.Types.GetTrafficPolicyInstanceCountResponse) => void): Request<Route53.Types.GetTrafficPolicyInstanceCountResponse, AWSError>;
  /**
   * Gets the number of traffic policy instances that are associated with the current AWS account.
   */
  getTrafficPolicyInstanceCount(callback?: (err: AWSError, data: Route53.Types.GetTrafficPolicyInstanceCountResponse) => void): Request<Route53.Types.GetTrafficPolicyInstanceCountResponse, AWSError>;
  /**
   * Retrieves a list of supported geo locations. Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces), the subdivisions for that country are listed in alphabetical order immediately after the corresponding country.
   */
  listGeoLocations(params: Route53.Types.ListGeoLocationsRequest, callback?: (err: AWSError, data: Route53.Types.ListGeoLocationsResponse) => void): Request<Route53.Types.ListGeoLocationsResponse, AWSError>;
  /**
   * Retrieves a list of supported geo locations. Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces), the subdivisions for that country are listed in alphabetical order immediately after the corresponding country.
   */
  listGeoLocations(callback?: (err: AWSError, data: Route53.Types.ListGeoLocationsResponse) => void): Request<Route53.Types.ListGeoLocationsResponse, AWSError>;
  /**
   * Retrieve a list of the health checks that are associated with the current AWS account. 
   */
  listHealthChecks(params: Route53.Types.ListHealthChecksRequest, callback?: (err: AWSError, data: Route53.Types.ListHealthChecksResponse) => void): Request<Route53.Types.ListHealthChecksResponse, AWSError>;
  /**
   * Retrieve a list of the health checks that are associated with the current AWS account. 
   */
  listHealthChecks(callback?: (err: AWSError, data: Route53.Types.ListHealthChecksResponse) => void): Request<Route53.Types.ListHealthChecksResponse, AWSError>;
  /**
   * Retrieves a list of the public and private hosted zones that are associated with the current AWS account. The response includes a HostedZones child element for each hosted zone. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the maxitems parameter to list them in groups of up to 100.
   */
  listHostedZones(params: Route53.Types.ListHostedZonesRequest, callback?: (err: AWSError, data: Route53.Types.ListHostedZonesResponse) => void): Request<Route53.Types.ListHostedZonesResponse, AWSError>;
  /**
   * Retrieves a list of the public and private hosted zones that are associated with the current AWS account. The response includes a HostedZones child element for each hosted zone. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the maxitems parameter to list them in groups of up to 100.
   */
  listHostedZones(callback?: (err: AWSError, data: Route53.Types.ListHostedZonesResponse) => void): Request<Route53.Types.ListHostedZonesResponse, AWSError>;
  /**
   * Retrieves a list of your hosted zones in lexicographic order. The response includes a HostedZones child element for each hosted zone created by the current AWS account.   ListHostedZonesByName sorts hosted zones by name with the labels reversed. For example:  com.example.www.  Note the trailing dot, which can change the sort order in some circumstances. If the domain name includes escape characters or Punycode, ListHostedZonesByName alphabetizes the domain name using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone for exämple.com, you specify ex\344mple.com for the domain name. ListHostedZonesByName alphabetizes it as:  com.ex\344mple.  The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats, including internationalized domain names, see DNS Domain Name Format in the Amazon Route 53 Developer Guide. Amazon Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the MaxItems parameter to list them in groups of up to 100. The response includes values that help navigate from one group of MaxItems hosted zones to the next:   The DNSName and HostedZoneId elements in the response contain the values, if any, specified for the dnsname and hostedzoneid parameters in the request that produced the current response.   The MaxItems element in the response contains the value, if any, that you specified for the maxitems parameter in the request that produced the current response.   If the value of IsTruncated in the response is true, there are more hosted zones associated with the current AWS account.  If IsTruncated is false, this response includes the last hosted zone that is associated with the current account. The NextDNSName element and NextHostedZoneId elements are omitted from the response.   The NextDNSName and NextHostedZoneId elements in the response contain the domain name and the hosted zone ID of the next hosted zone that is associated with the current AWS account. If you want to list more hosted zones, make another call to ListHostedZonesByName, and specify the value of NextDNSName and NextHostedZoneId in the dnsname and hostedzoneid parameters, respectively.  
   */
  listHostedZonesByName(params: Route53.Types.ListHostedZonesByNameRequest, callback?: (err: AWSError, data: Route53.Types.ListHostedZonesByNameResponse) => void): Request<Route53.Types.ListHostedZonesByNameResponse, AWSError>;
  /**
   * Retrieves a list of your hosted zones in lexicographic order. The response includes a HostedZones child element for each hosted zone created by the current AWS account.   ListHostedZonesByName sorts hosted zones by name with the labels reversed. For example:  com.example.www.  Note the trailing dot, which can change the sort order in some circumstances. If the domain name includes escape characters or Punycode, ListHostedZonesByName alphabetizes the domain name using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone for exämple.com, you specify ex\344mple.com for the domain name. ListHostedZonesByName alphabetizes it as:  com.ex\344mple.  The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats, including internationalized domain names, see DNS Domain Name Format in the Amazon Route 53 Developer Guide. Amazon Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the MaxItems parameter to list them in groups of up to 100. The response includes values that help navigate from one group of MaxItems hosted zones to the next:   The DNSName and HostedZoneId elements in the response contain the values, if any, specified for the dnsname and hostedzoneid parameters in the request that produced the current response.   The MaxItems element in the response contains the value, if any, that you specified for the maxitems parameter in the request that produced the current response.   If the value of IsTruncated in the response is true, there are more hosted zones associated with the current AWS account.  If IsTruncated is false, this response includes the last hosted zone that is associated with the current account. The NextDNSName element and NextHostedZoneId elements are omitted from the response.   The NextDNSName and NextHostedZoneId elements in the response contain the domain name and the hosted zone ID of the next hosted zone that is associated with the current AWS account. If you want to list more hosted zones, make another call to ListHostedZonesByName, and specify the value of NextDNSName and NextHostedZoneId in the dnsname and hostedzoneid parameters, respectively.  
   */
  listHostedZonesByName(callback?: (err: AWSError, data: Route53.Types.ListHostedZonesByNameResponse) => void): Request<Route53.Types.ListHostedZonesByNameResponse, AWSError>;
  /**
   * Lists the configurations for DNS query logging that are associated with the current AWS account or the configuration that is associated with a specified hosted zone. For more information about DNS query logs, see CreateQueryLoggingConfig. Additional information, including the format of DNS query logs, appears in Logging DNS Queries in the Amazon Route 53 Developer Guide.
   */
  listQueryLoggingConfigs(params: Route53.Types.ListQueryLoggingConfigsRequest, callback?: (err: AWSError, data: Route53.Types.ListQueryLoggingConfigsResponse) => void): Request<Route53.Types.ListQueryLoggingConfigsResponse, AWSError>;
  /**
   * Lists the configurations for DNS query logging that are associated with the current AWS account or the configuration that is associated with a specified hosted zone. For more information about DNS query logs, see CreateQueryLoggingConfig. Additional information, including the format of DNS query logs, appears in Logging DNS Queries in the Amazon Route 53 Developer Guide.
   */
  listQueryLoggingConfigs(callback?: (err: AWSError, data: Route53.Types.ListQueryLoggingConfigsResponse) => void): Request<Route53.Types.ListQueryLoggingConfigsResponse, AWSError>;
  /**
   * Lists the resource record sets in a specified hosted zone.  ListResourceRecordSets returns up to 100 resource record sets at a time in ASCII order, beginning at a position specified by the name and type elements. The action sorts results first by DNS name with the labels reversed, for example:  com.example.www.  Note the trailing dot, which can change the sort order in some circumstances. When multiple records have the same DNS name, the action sorts results by the record type. You can use the name and type elements to adjust the beginning position of the list of resource record sets returned:  If you do not specify Name or Type  The results begin with the first resource record set that the hosted zone contains.  If you specify Name but not Type  The results begin with the first resource record set in the list whose name is greater than or equal to Name.  If you specify Type but not Name  Amazon Route 53 returns the InvalidInput error.  If you specify both Name and Type  The results begin with the first resource record set in the list whose name is greater than or equal to Name, and whose type is greater than or equal to Type.   This action returns the most current version of the records. This includes records that are PENDING, and that are not yet available on all Amazon Route 53 DNS servers. To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time, do not submit a ChangeResourceRecordSets request while you're paging through the results of a ListResourceRecordSets request. If you do, some pages may display results without the latest changes while other pages display results with the latest changes.
   */
  listResourceRecordSets(params: Route53.Types.ListResourceRecordSetsRequest, callback?: (err: AWSError, data: Route53.Types.ListResourceRecordSetsResponse) => void): Request<Route53.Types.ListResourceRecordSetsResponse, AWSError>;
  /**
   * Lists the resource record sets in a specified hosted zone.  ListResourceRecordSets returns up to 100 resource record sets at a time in ASCII order, beginning at a position specified by the name and type elements. The action sorts results first by DNS name with the labels reversed, for example:  com.example.www.  Note the trailing dot, which can change the sort order in some circumstances. When multiple records have the same DNS name, the action sorts results by the record type. You can use the name and type elements to adjust the beginning position of the list of resource record sets returned:  If you do not specify Name or Type  The results begin with the first resource record set that the hosted zone contains.  If you specify Name but not Type  The results begin with the first resource record set in the list whose name is greater than or equal to Name.  If you specify Type but not Name  Amazon Route 53 returns the InvalidInput error.  If you specify both Name and Type  The results begin with the first resource record set in the list whose name is greater than or equal to Name, and whose type is greater than or equal to Type.   This action returns the most current version of the records. This includes records that are PENDING, and that are not yet available on all Amazon Route 53 DNS servers. To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time, do not submit a ChangeResourceRecordSets request while you're paging through the results of a ListResourceRecordSets request. If you do, some pages may display results without the latest changes while other pages display results with the latest changes.
   */
  listResourceRecordSets(callback?: (err: AWSError, data: Route53.Types.ListResourceRecordSetsResponse) => void): Request<Route53.Types.ListResourceRecordSetsResponse, AWSError>;
  /**
   * Retrieves a list of the reusable delegation sets that are associated with the current AWS account.
   */
  listReusableDelegationSets(params: Route53.Types.ListReusableDelegationSetsRequest, callback?: (err: AWSError, data: Route53.Types.ListReusableDelegationSetsResponse) => void): Request<Route53.Types.ListReusableDelegationSetsResponse, AWSError>;
  /**
   * Retrieves a list of the reusable delegation sets that are associated with the current AWS account.
   */
  listReusableDelegationSets(callback?: (err: AWSError, data: Route53.Types.ListReusableDelegationSetsResponse) => void): Request<Route53.Types.ListReusableDelegationSetsResponse, AWSError>;
  /**
   * Lists tags for one health check or hosted zone.  For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
   */
  listTagsForResource(params: Route53.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Route53.Types.ListTagsForResourceResponse) => void): Request<Route53.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists tags for one health check or hosted zone.  For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
   */
  listTagsForResource(callback?: (err: AWSError, data: Route53.Types.ListTagsForResourceResponse) => void): Request<Route53.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists tags for up to 10 health checks or hosted zones. For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
   */
  listTagsForResources(params: Route53.Types.ListTagsForResourcesRequest, callback?: (err: AWSError, data: Route53.Types.ListTagsForResourcesResponse) => void): Request<Route53.Types.ListTagsForResourcesResponse, AWSError>;
  /**
   * Lists tags for up to 10 health checks or hosted zones. For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
   */
  listTagsForResources(callback?: (err: AWSError, data: Route53.Types.ListTagsForResourcesResponse) => void): Request<Route53.Types.ListTagsForResourcesResponse, AWSError>;
  /**
   * Gets information about the latest version for every traffic policy that is associated with the current AWS account. Policies are listed in the order in which they were created. 
   */
  listTrafficPolicies(params: Route53.Types.ListTrafficPoliciesRequest, callback?: (err: AWSError, data: Route53.Types.ListTrafficPoliciesResponse) => void): Request<Route53.Types.ListTrafficPoliciesResponse, AWSError>;
  /**
   * Gets information about the latest version for every traffic policy that is associated with the current AWS account. Policies are listed in the order in which they were created. 
   */
  listTrafficPolicies(callback?: (err: AWSError, data: Route53.Types.ListTrafficPoliciesResponse) => void): Request<Route53.Types.ListTrafficPoliciesResponse, AWSError>;
  /**
   * Gets information about the traffic policy instances that you created by using the current AWS account.  After you submit an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100.
   */
  listTrafficPolicyInstances(params: Route53.Types.ListTrafficPolicyInstancesRequest, callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyInstancesResponse) => void): Request<Route53.Types.ListTrafficPolicyInstancesResponse, AWSError>;
  /**
   * Gets information about the traffic policy instances that you created by using the current AWS account.  After you submit an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100.
   */
  listTrafficPolicyInstances(callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyInstancesResponse) => void): Request<Route53.Types.ListTrafficPolicyInstancesResponse, AWSError>;
  /**
   * Gets information about the traffic policy instances that you created in a specified hosted zone.  After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100.
   */
  listTrafficPolicyInstancesByHostedZone(params: Route53.Types.ListTrafficPolicyInstancesByHostedZoneRequest, callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyInstancesByHostedZoneResponse) => void): Request<Route53.Types.ListTrafficPolicyInstancesByHostedZoneResponse, AWSError>;
  /**
   * Gets information about the traffic policy instances that you created in a specified hosted zone.  After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100.
   */
  listTrafficPolicyInstancesByHostedZone(callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyInstancesByHostedZoneResponse) => void): Request<Route53.Types.ListTrafficPolicyInstancesByHostedZoneResponse, AWSError>;
  /**
   * Gets information about the traffic policy instances that you created by using a specify traffic policy version.  After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100.
   */
  listTrafficPolicyInstancesByPolicy(params: Route53.Types.ListTrafficPolicyInstancesByPolicyRequest, callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyInstancesByPolicyResponse) => void): Request<Route53.Types.ListTrafficPolicyInstancesByPolicyResponse, AWSError>;
  /**
   * Gets information about the traffic policy instances that you created by using a specify traffic policy version.  After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100.
   */
  listTrafficPolicyInstancesByPolicy(callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyInstancesByPolicyResponse) => void): Request<Route53.Types.ListTrafficPolicyInstancesByPolicyResponse, AWSError>;
  /**
   * Gets information about all of the versions for a specified traffic policy. Traffic policy versions are listed in numerical order by VersionNumber.
   */
  listTrafficPolicyVersions(params: Route53.Types.ListTrafficPolicyVersionsRequest, callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyVersionsResponse) => void): Request<Route53.Types.ListTrafficPolicyVersionsResponse, AWSError>;
  /**
   * Gets information about all of the versions for a specified traffic policy. Traffic policy versions are listed in numerical order by VersionNumber.
   */
  listTrafficPolicyVersions(callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyVersionsResponse) => void): Request<Route53.Types.ListTrafficPolicyVersionsResponse, AWSError>;
  /**
   * Gets a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone because you've submitted one or more CreateVPCAssociationAuthorization requests.  The response includes a VPCs element with a VPC child element for each VPC that can be associated with the hosted zone.
   */
  listVPCAssociationAuthorizations(params: Route53.Types.ListVPCAssociationAuthorizationsRequest, callback?: (err: AWSError, data: Route53.Types.ListVPCAssociationAuthorizationsResponse) => void): Request<Route53.Types.ListVPCAssociationAuthorizationsResponse, AWSError>;
  /**
   * Gets a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone because you've submitted one or more CreateVPCAssociationAuthorization requests.  The response includes a VPCs element with a VPC child element for each VPC that can be associated with the hosted zone.
   */
  listVPCAssociationAuthorizations(callback?: (err: AWSError, data: Route53.Types.ListVPCAssociationAuthorizationsResponse) => void): Request<Route53.Types.ListVPCAssociationAuthorizationsResponse, AWSError>;
  /**
   * Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. 
   */
  testDNSAnswer(params: Route53.Types.TestDNSAnswerRequest, callback?: (err: AWSError, data: Route53.Types.TestDNSAnswerResponse) => void): Request<Route53.Types.TestDNSAnswerResponse, AWSError>;
  /**
   * Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. 
   */
  testDNSAnswer(callback?: (err: AWSError, data: Route53.Types.TestDNSAnswerResponse) => void): Request<Route53.Types.TestDNSAnswerResponse, AWSError>;
  /**
   * Updates an existing health check. Note that some values can't be updated.  For more information about updating health checks, see Creating, Updating, and Deleting Health Checks in the Amazon Route 53 Developer Guide.
   */
  updateHealthCheck(params: Route53.Types.UpdateHealthCheckRequest, callback?: (err: AWSError, data: Route53.Types.UpdateHealthCheckResponse) => void): Request<Route53.Types.UpdateHealthCheckResponse, AWSError>;
  /**
   * Updates an existing health check. Note that some values can't be updated.  For more information about updating health checks, see Creating, Updating, and Deleting Health Checks in the Amazon Route 53 Developer Guide.
   */
  updateHealthCheck(callback?: (err: AWSError, data: Route53.Types.UpdateHealthCheckResponse) => void): Request<Route53.Types.UpdateHealthCheckResponse, AWSError>;
  /**
   * Updates the comment for a specified hosted zone.
   */
  updateHostedZoneComment(params: Route53.Types.UpdateHostedZoneCommentRequest, callback?: (err: AWSError, data: Route53.Types.UpdateHostedZoneCommentResponse) => void): Request<Route53.Types.UpdateHostedZoneCommentResponse, AWSError>;
  /**
   * Updates the comment for a specified hosted zone.
   */
  updateHostedZoneComment(callback?: (err: AWSError, data: Route53.Types.UpdateHostedZoneCommentResponse) => void): Request<Route53.Types.UpdateHostedZoneCommentResponse, AWSError>;
  /**
   * Updates the comment for a specified traffic policy version.
   */
  updateTrafficPolicyComment(params: Route53.Types.UpdateTrafficPolicyCommentRequest, callback?: (err: AWSError, data: Route53.Types.UpdateTrafficPolicyCommentResponse) => void): Request<Route53.Types.UpdateTrafficPolicyCommentResponse, AWSError>;
  /**
   * Updates the comment for a specified traffic policy version.
   */
  updateTrafficPolicyComment(callback?: (err: AWSError, data: Route53.Types.UpdateTrafficPolicyCommentResponse) => void): Request<Route53.Types.UpdateTrafficPolicyCommentResponse, AWSError>;
  /**
   * Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version. When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name (such as example.com) while it replaces one group of resource record sets with another. Amazon Route 53 performs the following operations:   Amazon Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how significant the differences are between the existing resource record sets and the new resource record sets.    When all of the new resource record sets have been created, Amazon Route 53 starts to respond to DNS queries for the root resource record set name (such as example.com) by using the new resource record sets.   Amazon Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.  
   */
  updateTrafficPolicyInstance(params: Route53.Types.UpdateTrafficPolicyInstanceRequest, callback?: (err: AWSError, data: Route53.Types.UpdateTrafficPolicyInstanceResponse) => void): Request<Route53.Types.UpdateTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version. When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name (such as example.com) while it replaces one group of resource record sets with another. Amazon Route 53 performs the following operations:   Amazon Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how significant the differences are between the existing resource record sets and the new resource record sets.    When all of the new resource record sets have been created, Amazon Route 53 starts to respond to DNS queries for the root resource record set name (such as example.com) by using the new resource record sets.   Amazon Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.  
   */
  updateTrafficPolicyInstance(callback?: (err: AWSError, data: Route53.Types.UpdateTrafficPolicyInstanceResponse) => void): Request<Route53.Types.UpdateTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Waits for the resourceRecordSetsChanged state by periodically calling the underlying Route53.getChangeoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "resourceRecordSetsChanged", params: Route53.Types.GetChangeRequest, callback?: (err: AWSError, data: Route53.Types.GetChangeResponse) => void): Request<Route53.Types.GetChangeResponse, AWSError>;
  /**
   * Waits for the resourceRecordSetsChanged state by periodically calling the underlying Route53.getChangeoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "resourceRecordSetsChanged", callback?: (err: AWSError, data: Route53.Types.GetChangeResponse) => void): Request<Route53.Types.GetChangeResponse, AWSError>;
}
declare namespace Route53 {
  export interface AlarmIdentifier {
    /**
     * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy. For the current list of CloudWatch regions, see Amazon CloudWatch in the AWS Regions and Endpoints chapter of the Amazon Web Services General Reference.
     */
    Region: CloudWatchRegion;
    /**
     * The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
     */
    Name: AlarmName;
  }
  export type AlarmName = string;
  export type AliasHealthEnabled = boolean;
  export interface AliasTarget {
    /**
     *  Alias resource records sets only: The value used depends on where you want to route traffic:  CloudFront distribution  Specify Z2FDTNDATAQYW2.  Alias resource record sets for CloudFront can't be created in a private zone.   Elastic Beanstalk environment  Specify the hosted zone ID for the region in which you created the environment. The environment must have a regionalized subdomain. For a list of regions and the corresponding hosted zone IDs, see AWS Elastic Beanstalk in the "AWS Regions and Endpoints" chapter of the Amazon Web Services General Reference.  ELB load balancer  Specify the value of the hosted zone ID for the load balancer. Use the following methods to get the hosted zone ID:    Elastic Load Balancing table in the "AWS Regions and Endpoints" chapter of the Amazon Web Services General Reference: Use the value that corresponds with the region that you created your load balancer in. Note that there are separate columns for Application and Classic Load Balancers and for Network Load Balancers.    AWS Management Console: Go to the Amazon EC2 page, choose Load Balancers in the navigation pane, select the load balancer, and get the value of the Hosted zone field on the Description tab.    Elastic Load Balancing API: Use DescribeLoadBalancers to get the value of CanonicalHostedZoneNameId. For more information, see the applicable guide:   Classic Load Balancers: DescribeLoadBalancers    Application and Network Load Balancers: DescribeLoadBalancers       AWS CLI: Use describe-load-balancers to get the value of CanonicalHostedZoneNameID (for Classic Load Balancers) or CanonicalHostedZoneNameID (for Application and Network Load Balancers). For more information, see the applicable guide:   Classic Load Balancers: describe-load-balancers    Application and Network Load Balancers: describe-load-balancers       An Amazon S3 bucket configured as a static website  Specify the hosted zone ID for the region that you created the bucket in. For more information about valid values, see the Amazon Simple Storage Service Website Endpoints table in the "AWS Regions and Endpoints" chapter of the Amazon Web Services General Reference.  Another Amazon Route 53 resource record set in your hosted zone  Specify the hosted zone ID of your hosted zone. (An alias resource record set can't reference a resource record set in a different hosted zone.)  
     */
    HostedZoneId: ResourceId;
    /**
     *  Alias resource record sets only: The value that you specify depends on where you want to route queries:  CloudFront distribution  Specify the domain name that CloudFront assigned when you created your distribution. Your CloudFront distribution must include an alternate domain name that matches the name of the resource record set. For example, if the name of the resource record set is acme.example.com, your CloudFront distribution must include acme.example.com as one of the alternate domain names. For more information, see Using Alternate Domain Names (CNAMEs) in the Amazon CloudFront Developer Guide.  Elastic Beanstalk environment  Specify the CNAME attribute for the environment. (The environment must have a regionalized domain name.) You can use the following methods to get the value of the CNAME attribute:    AWS Management Console: For information about how to get the value by using the console, see Using Custom Domains with AWS Elastic Beanstalk in the AWS Elastic Beanstalk Developer Guide.    Elastic Beanstalk API: Use the DescribeEnvironments action to get the value of the CNAME attribute. For more information, see DescribeEnvironments in the AWS Elastic Beanstalk API Reference.    AWS CLI: Use the describe-environments command to get the value of the CNAME attribute. For more information, see describe-environments in the AWS Command Line Interface Reference.    ELB load balancer  Specify the DNS name that is associated with the load balancer. Get the DNS name by using the AWS Management Console, the ELB API, or the AWS CLI.     AWS Management Console: Go to the EC2 page, choose Load Balancers in the navigation pane, choose the load balancer, choose the Description tab, and get the value of the DNS name field. (If you're routing traffic to a Classic Load Balancer, get the value that begins with dualstack.)     Elastic Load Balancing API: Use DescribeLoadBalancers to get the value of DNSName. For more information, see the applicable guide:   Classic Load Balancers: DescribeLoadBalancers    Application and Network Load Balancers: DescribeLoadBalancers       AWS CLI: Use describe-load-balancers to get the value of DNSName. For more information, see the applicable guide:   Classic Load Balancers: describe-load-balancers    Application and Network Load Balancers: describe-load-balancers       Amazon S3 bucket that is configured as a static website  Specify the domain name of the Amazon S3 website endpoint in which you created the bucket, for example, s3-website-us-east-2.amazonaws.com. For more information about valid values, see the table Amazon Simple Storage Service (S3) Website Endpoints in the Amazon Web Services General Reference. For more information about using S3 buckets for websites, see Getting Started with Amazon Route 53 in the Amazon Route 53 Developer Guide.   Another Amazon Route 53 resource record set  Specify the value of the Name element for a resource record set in the current hosted zone.  
     */
    DNSName: DNSName;
    /**
     *  Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets: When EvaluateTargetHealth is true, an alias resource record set inherits the health of the referenced AWS resource, such as an ELB load balancer, or the referenced resource record set. Note the following:   You can't set EvaluateTargetHealth to true when the alias target is a CloudFront distribution.   If the AWS resource that you specify in AliasTarget is a resource record set or a group of resource record sets (for example, a group of weighted resource record sets), but it is not another alias resource record set, we recommend that you associate a health check with all of the resource record sets in the alias target. For more information, see What Happens When You Omit Health Checks? in the Amazon Route 53 Developer Guide.   If you specify an Elastic Beanstalk environment in HostedZoneId and DNSName, and if the environment contains an ELB load balancer, Elastic Load Balancing routes queries only to the healthy Amazon EC2 instances that are registered with the load balancer. (An environment automatically contains an ELB load balancer if it includes more than one EC2 instance.) If you set EvaluateTargetHealth to true and either no EC2 instances are healthy or the load balancer itself is unhealthy, Amazon Route 53 routes queries to other available resources that are healthy, if any. If the environment contains a single EC2 instance, there are no special requirements.   If you specify an ELB load balancer in  AliasTarget , ELB routes queries only to the healthy EC2 instances that are registered with the load balancer. If no EC2 instances are healthy or if the load balancer itself is unhealthy, and if EvaluateTargetHealth is true for the corresponding alias resource record set, Amazon Route 53 routes queries to other resources. When you create a load balancer, you configure settings for ELB health checks; they're not Amazon Route 53 health checks, but they perform a similar function. Do not create Amazon Route 53 health checks for the EC2 instances that you register with an ELB load balancer. For more information, see How Health Checks Work in More Complex Amazon Route 53 Configurations in the Amazon Route 53 Developer Guide.   We recommend that you set EvaluateTargetHealth to true only when you have enough idle capacity to handle the failure of one or more endpoints.   For more information and examples, see Amazon Route 53 Health Checks and DNS Failover in the Amazon Route 53 Developer Guide.
     */
    EvaluateTargetHealth: AliasHealthEnabled;
  }
  export type AssociateVPCComment = string;
  export interface AssociateVPCWithHostedZoneRequest {
    /**
     * The ID of the private hosted zone that you want to associate an Amazon VPC with. Note that you can't associate a VPC with a hosted zone that doesn't have an existing VPC association.
     */
    HostedZoneId: ResourceId;
    /**
     * A complex type that contains information about the VPC that you want to associate with a private hosted zone.
     */
    VPC: VPC;
    /**
     *  Optional: A comment about the association request.
     */
    Comment?: AssociateVPCComment;
  }
  export interface AssociateVPCWithHostedZoneResponse {
    /**
     * A complex type that describes the changes made to your hosted zone.
     */
    ChangeInfo: ChangeInfo;
  }
  export interface Change {
    /**
     * The action to perform:    CREATE: Creates a resource record set that has the specified values.    DELETE: Deletes a existing resource record set.  To delete the resource record set that is associated with a traffic policy instance, use  DeleteTrafficPolicyInstance . Amazon Route 53 will delete the resource record set automatically. If you delete the resource record set by using ChangeResourceRecordSets, Amazon Route 53 doesn't automatically delete the traffic policy instance, and you'll continue to be charged for it even though it's no longer in use.      UPSERT: If a resource record set doesn't already exist, Amazon Route 53 creates it. If a resource record set does exist, Amazon Route 53 updates it with the values in the request.   The values that you need to include in the request depend on the type of resource record set that you're creating, deleting, or updating:  Basic resource record sets (excluding alias, failover, geolocation, latency, and weighted resource record sets)     Name     Type     TTL     Failover, geolocation, latency, or weighted resource record sets (excluding alias resource record sets)     Name     Type     TTL     SetIdentifier     Alias resource record sets (including failover alias, geolocation alias, latency alias, and weighted alias resource record sets)     Name     Type     AliasTarget (includes DNSName, EvaluateTargetHealth, and HostedZoneId)    SetIdentifier (for failover, geolocation, latency, and weighted resource record sets)  
     */
    Action: ChangeAction;
    /**
     * Information about the resource record set to create, delete, or update.
     */
    ResourceRecordSet: ResourceRecordSet;
  }
  export type ChangeAction = "CREATE"|"DELETE"|"UPSERT"|string;
  export interface ChangeBatch {
    /**
     *  Optional: Any comments you want to include about a change batch request.
     */
    Comment?: ResourceDescription;
    /**
     * Information about the changes to make to the record sets.
     */
    Changes: Changes;
  }
  export interface ChangeInfo {
    /**
     * The ID of the request.
     */
    Id: ResourceId;
    /**
     * The current state of the request. PENDING indicates that this request has not yet been applied to all Amazon Route 53 DNS servers.
     */
    Status: ChangeStatus;
    /**
     * The date and time that the change request was submitted in ISO 8601 format and Coordinated Universal Time (UTC). For example, the value 2017-03-27T17:48:16.751Z represents March 27, 2017 at 17:48:16.751 UTC.
     */
    SubmittedAt: TimeStamp;
    /**
     * A complex type that describes change information about changes made to your hosted zone. This element contains an ID that you use when performing a GetChange action to get detailed information about the change.
     */
    Comment?: ResourceDescription;
  }
  export interface ChangeResourceRecordSetsRequest {
    /**
     * The ID of the hosted zone that contains the resource record sets that you want to change.
     */
    HostedZoneId: ResourceId;
    /**
     * A complex type that contains an optional comment and the Changes element.
     */
    ChangeBatch: ChangeBatch;
  }
  export interface ChangeResourceRecordSetsResponse {
    /**
     * A complex type that contains information about changes made to your hosted zone. This element contains an ID that you use when performing a GetChange action to get detailed information about the change.
     */
    ChangeInfo: ChangeInfo;
  }
  export type ChangeStatus = "PENDING"|"INSYNC"|string;
  export interface ChangeTagsForResourceRequest {
    /**
     * The type of the resource.   The resource type for health checks is healthcheck.   The resource type for hosted zones is hostedzone.  
     */
    ResourceType: TagResourceType;
    /**
     * The ID of the resource for which you want to add, change, or delete tags.
     */
    ResourceId: TagResourceId;
    /**
     * A complex type that contains a list of the tags that you want to add to the specified health check or hosted zone and/or the tags that you want to edit Value for. You can add a maximum of 10 tags to a health check or a hosted zone.
     */
    AddTags?: TagList;
    /**
     * A complex type that contains a list of the tags that you want to delete from the specified health check or hosted zone. You can specify up to 10 keys.
     */
    RemoveTagKeys?: TagKeyList;
  }
  export interface ChangeTagsForResourceResponse {
  }
  export type Changes = Change[];
  export type CheckerIpRanges = IPAddressCidr[];
  export type ChildHealthCheckList = HealthCheckId[];
  export interface CloudWatchAlarmConfiguration {
    /**
     * For the metric that the CloudWatch alarm is associated with, the number of periods that the metric is compared to the threshold.
     */
    EvaluationPeriods: EvaluationPeriods;
    /**
     * For the metric that the CloudWatch alarm is associated with, the value the metric is compared with.
     */
    Threshold: Threshold;
    /**
     * For the metric that the CloudWatch alarm is associated with, the arithmetic operation that is used for the comparison.
     */
    ComparisonOperator: ComparisonOperator;
    /**
     * For the metric that the CloudWatch alarm is associated with, the duration of one evaluation period in seconds.
     */
    Period: Period;
    /**
     * The name of the CloudWatch metric that the alarm is associated with.
     */
    MetricName: MetricName;
    /**
     * The namespace of the metric that the alarm is associated with. For more information, see Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference in the Amazon CloudWatch User Guide.
     */
    Namespace: Namespace;
    /**
     * For the metric that the CloudWatch alarm is associated with, the statistic that is applied to the metric.
     */
    Statistic: Statistic;
    /**
     * For the metric that the CloudWatch alarm is associated with, a complex type that contains information about the dimensions for the metric. For information, see Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference in the Amazon CloudWatch User Guide.
     */
    Dimensions?: DimensionList;
  }
  export type CloudWatchLogsLogGroupArn = string;
  export type CloudWatchRegion = "us-east-1"|"us-east-2"|"us-west-1"|"us-west-2"|"ca-central-1"|"eu-central-1"|"eu-west-1"|"eu-west-2"|"ap-south-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-northeast-1"|"ap-northeast-2"|"sa-east-1"|string;
  export type ComparisonOperator = "GreaterThanOrEqualToThreshold"|"GreaterThanThreshold"|"LessThanThreshold"|"LessThanOrEqualToThreshold"|string;
  export interface CreateHealthCheckRequest {
    /**
     * A unique string that identifies the request and that allows you to retry a failed CreateHealthCheck request without the risk of creating two identical health checks:   If you send a CreateHealthCheck request with the same CallerReference and settings as a previous request, and if the health check doesn't exist, Amazon Route 53 creates the health check. If the health check does exist, Amazon Route 53 returns the settings for the existing health check.   If you send a CreateHealthCheck request with the same CallerReference as a deleted health check, regardless of the settings, Amazon Route 53 returns a HealthCheckAlreadyExists error.   If you send a CreateHealthCheck request with the same CallerReference as an existing health check but with different settings, Amazon Route 53 returns a HealthCheckAlreadyExists error.   If you send a CreateHealthCheck request with a unique CallerReference but settings identical to an existing health check, Amazon Route 53 creates the health check.  
     */
    CallerReference: HealthCheckNonce;
    /**
     * A complex type that contains the response to a CreateHealthCheck request. 
     */
    HealthCheckConfig: HealthCheckConfig;
  }
  export interface CreateHealthCheckResponse {
    /**
     * A complex type that contains identifying information about the health check.
     */
    HealthCheck: HealthCheck;
    /**
     * The unique URL representing the new health check.
     */
    Location: ResourceURI;
  }
  export interface CreateHostedZoneRequest {
    /**
     * The name of the domain. For resource record types that include a domain name, specify a fully qualified domain name, for example, www.example.com. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Amazon Route 53 treats www.example.com (without a trailing dot) and www.example.com. (with a trailing dot) as identical. If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Amazon Route 53, change the name servers for your domain to the set of NameServers that CreateHostedZone returns in DelegationSet.
     */
    Name: DNSName;
    /**
     * (Private hosted zones only) A complex type that contains information about the Amazon VPC that you're associating with this hosted zone. You can specify only one Amazon VPC when you create a private hosted zone. To associate additional Amazon VPCs with the hosted zone, use AssociateVPCWithHostedZone after you create a hosted zone.
     */
    VPC?: VPC;
    /**
     * A unique string that identifies the request and that allows failed CreateHostedZone requests to be retried without the risk of executing the operation twice. You must use a unique CallerReference string every time you submit a CreateHostedZone request. CallerReference can be any unique string, for example, a date/time stamp.
     */
    CallerReference: Nonce;
    /**
     * (Optional) A complex type that contains the following optional values:   For public and private hosted zones, an optional comment   For private hosted zones, an optional PrivateZone element   If you don't specify a comment or the PrivateZone element, omit HostedZoneConfig and the other elements.
     */
    HostedZoneConfig?: HostedZoneConfig;
    /**
     * If you want to associate a reusable delegation set with this hosted zone, the ID that Amazon Route 53 assigned to the reusable delegation set when you created it. For more information about reusable delegation sets, see CreateReusableDelegationSet.
     */
    DelegationSetId?: ResourceId;
  }
  export interface CreateHostedZoneResponse {
    /**
     * A complex type that contains general information about the hosted zone.
     */
    HostedZone: HostedZone;
    /**
     * A complex type that contains information about the CreateHostedZone request.
     */
    ChangeInfo: ChangeInfo;
    /**
     * A complex type that describes the name servers for this hosted zone.
     */
    DelegationSet: DelegationSet;
    /**
     * A complex type that contains information about an Amazon VPC that you associated with this hosted zone.
     */
    VPC?: VPC;
    /**
     * The unique URL representing the new hosted zone.
     */
    Location: ResourceURI;
  }
  export interface CreateQueryLoggingConfigRequest {
    /**
     * The ID of the hosted zone that you want to log queries for. You can log queries only for public hosted zones.
     */
    HostedZoneId: ResourceId;
    /**
     * The Amazon Resource Name (ARN) for the log group that you want to Amazon Route 53 to send query logs to. This is the format of the ARN: arn:aws:logs:region:account-id:log-group:log_group_name  To get the ARN for a log group, you can use the CloudWatch console, the DescribeLogGroups API action, the describe-log-groups command, or the applicable command in one of the AWS SDKs.
     */
    CloudWatchLogsLogGroupArn: CloudWatchLogsLogGroupArn;
  }
  export interface CreateQueryLoggingConfigResponse {
    /**
     * A complex type that contains the ID for a query logging configuration, the ID of the hosted zone that you want to log queries for, and the ARN for the log group that you want Amazon Route 53 to send query logs to.
     */
    QueryLoggingConfig: QueryLoggingConfig;
    /**
     * The unique URL representing the new query logging configuration.
     */
    Location: ResourceURI;
  }
  export interface CreateReusableDelegationSetRequest {
    /**
     * A unique string that identifies the request, and that allows you to retry failed CreateReusableDelegationSet requests without the risk of executing the operation twice. You must use a unique CallerReference string every time you submit a CreateReusableDelegationSet request. CallerReference can be any unique string, for example a date/time stamp.
     */
    CallerReference: Nonce;
    /**
     * If you want to mark the delegation set for an existing hosted zone as reusable, the ID for that hosted zone.
     */
    HostedZoneId?: ResourceId;
  }
  export interface CreateReusableDelegationSetResponse {
    /**
     * A complex type that contains name server information.
     */
    DelegationSet: DelegationSet;
    /**
     * The unique URL representing the new reusable delegation set.
     */
    Location: ResourceURI;
  }
  export interface CreateTrafficPolicyInstanceRequest {
    /**
     * The ID of the hosted zone in which you want Amazon Route 53 to create resource record sets by using the configuration in a traffic policy.
     */
    HostedZoneId: ResourceId;
    /**
     * The domain name (such as example.com) or subdomain name (such as www.example.com) for which Amazon Route 53 responds to DNS queries by using the resource record sets that Amazon Route 53 creates for this traffic policy instance.
     */
    Name: DNSName;
    /**
     * (Optional) The TTL that you want Amazon Route 53 to assign to all of the resource record sets that it creates in the specified hosted zone.
     */
    TTL: TTL;
    /**
     * The ID of the traffic policy that you want to use to create resource record sets in the specified hosted zone.
     */
    TrafficPolicyId: TrafficPolicyId;
    /**
     * The version of the traffic policy that you want to use to create resource record sets in the specified hosted zone.
     */
    TrafficPolicyVersion: TrafficPolicyVersion;
  }
  export interface CreateTrafficPolicyInstanceResponse {
    /**
     * A complex type that contains settings for the new traffic policy instance.
     */
    TrafficPolicyInstance: TrafficPolicyInstance;
    /**
     * A unique URL that represents a new traffic policy instance.
     */
    Location: ResourceURI;
  }
  export interface CreateTrafficPolicyRequest {
    /**
     * The name of the traffic policy.
     */
    Name: TrafficPolicyName;
    /**
     * The definition of this traffic policy in JSON format. For more information, see Traffic Policy Document Format.
     */
    Document: TrafficPolicyDocument;
    /**
     * (Optional) Any comments that you want to include about the traffic policy.
     */
    Comment?: TrafficPolicyComment;
  }
  export interface CreateTrafficPolicyResponse {
    /**
     * A complex type that contains settings for the new traffic policy.
     */
    TrafficPolicy: TrafficPolicy;
    /**
     * A unique URL that represents a new traffic policy.
     */
    Location: ResourceURI;
  }
  export interface CreateTrafficPolicyVersionRequest {
    /**
     * The ID of the traffic policy for which you want to create a new version.
     */
    Id: TrafficPolicyId;
    /**
     * The definition of this version of the traffic policy, in JSON format. You specified the JSON in the CreateTrafficPolicyVersion request. For more information about the JSON format, see CreateTrafficPolicy.
     */
    Document: TrafficPolicyDocument;
    /**
     * The comment that you specified in the CreateTrafficPolicyVersion request, if any.
     */
    Comment?: TrafficPolicyComment;
  }
  export interface CreateTrafficPolicyVersionResponse {
    /**
     * A complex type that contains settings for the new version of the traffic policy.
     */
    TrafficPolicy: TrafficPolicy;
    /**
     * A unique URL that represents a new traffic policy version.
     */
    Location: ResourceURI;
  }
  export interface CreateVPCAssociationAuthorizationRequest {
    /**
     * The ID of the private hosted zone that you want to authorize associating a VPC with.
     */
    HostedZoneId: ResourceId;
    /**
     * A complex type that contains the VPC ID and region for the VPC that you want to authorize associating with your hosted zone.
     */
    VPC: VPC;
  }
  export interface CreateVPCAssociationAuthorizationResponse {
    /**
     * The ID of the hosted zone that you authorized associating a VPC with.
     */
    HostedZoneId: ResourceId;
    /**
     * The VPC that you authorized associating with a hosted zone.
     */
    VPC: VPC;
  }
  export type DNSName = string;
  export type DNSRCode = string;
  export interface DelegationSet {
    /**
     * The ID that Amazon Route 53 assigns to a reusable delegation set.
     */
    Id?: ResourceId;
    /**
     * The value that you specified for CallerReference when you created the reusable delegation set.
     */
    CallerReference?: Nonce;
    /**
     * A complex type that contains a list of the authoritative name servers for a hosted zone or for a reusable delegation set.
     */
    NameServers: DelegationSetNameServers;
  }
  export type DelegationSetNameServers = DNSName[];
  export type DelegationSets = DelegationSet[];
  export interface DeleteHealthCheckRequest {
    /**
     * The ID of the health check that you want to delete.
     */
    HealthCheckId: HealthCheckId;
  }
  export interface DeleteHealthCheckResponse {
  }
  export interface DeleteHostedZoneRequest {
    /**
     * The ID of the hosted zone you want to delete.
     */
    Id: ResourceId;
  }
  export interface DeleteHostedZoneResponse {
    /**
     * A complex type that contains the ID, the status, and the date and time of a request to delete a hosted zone.
     */
    ChangeInfo: ChangeInfo;
  }
  export interface DeleteQueryLoggingConfigRequest {
    /**
     * The ID of the configuration that you want to delete. 
     */
    Id: QueryLoggingConfigId;
  }
  export interface DeleteQueryLoggingConfigResponse {
  }
  export interface DeleteReusableDelegationSetRequest {
    /**
     * The ID of the reusable delegation set that you want to delete.
     */
    Id: ResourceId;
  }
  export interface DeleteReusableDelegationSetResponse {
  }
  export interface DeleteTrafficPolicyInstanceRequest {
    /**
     * The ID of the traffic policy instance that you want to delete.   When you delete a traffic policy instance, Amazon Route 53 also deletes all of the resource record sets that were created when you created the traffic policy instance. 
     */
    Id: TrafficPolicyInstanceId;
  }
  export interface DeleteTrafficPolicyInstanceResponse {
  }
  export interface DeleteTrafficPolicyRequest {
    /**
     * The ID of the traffic policy that you want to delete.
     */
    Id: TrafficPolicyId;
    /**
     * The version number of the traffic policy that you want to delete.
     */
    Version: TrafficPolicyVersion;
  }
  export interface DeleteTrafficPolicyResponse {
  }
  export interface DeleteVPCAssociationAuthorizationRequest {
    /**
     * When removing authorization to associate a VPC that was created by one AWS account with a hosted zone that was created with a different AWS account, the ID of the hosted zone.
     */
    HostedZoneId: ResourceId;
    /**
     * When removing authorization to associate a VPC that was created by one AWS account with a hosted zone that was created with a different AWS account, a complex type that includes the ID and region of the VPC.
     */
    VPC: VPC;
  }
  export interface DeleteVPCAssociationAuthorizationResponse {
  }
  export interface Dimension {
    /**
     * For the metric that the CloudWatch alarm is associated with, the name of one dimension.
     */
    Name: DimensionField;
    /**
     * For the metric that the CloudWatch alarm is associated with, the value of one dimension.
     */
    Value: DimensionField;
  }
  export type DimensionField = string;
  export type DimensionList = Dimension[];
  export type DisassociateVPCComment = string;
  export interface DisassociateVPCFromHostedZoneRequest {
    /**
     * The ID of the private hosted zone that you want to disassociate a VPC from.
     */
    HostedZoneId: ResourceId;
    /**
     * A complex type that contains information about the VPC that you're disassociating from the specified hosted zone.
     */
    VPC: VPC;
    /**
     *  Optional: A comment about the disassociation request.
     */
    Comment?: DisassociateVPCComment;
  }
  export interface DisassociateVPCFromHostedZoneResponse {
    /**
     * A complex type that describes the changes made to the specified private hosted zone.
     */
    ChangeInfo: ChangeInfo;
  }
  export type EnableSNI = boolean;
  export type ErrorMessage = string;
  export type ErrorMessages = ErrorMessage[];
  export type EvaluationPeriods = number;
  export type FailureThreshold = number;
  export type FullyQualifiedDomainName = string;
  export interface GeoLocation {
    /**
     * The two-letter code for the continent. Valid values: AF | AN | AS | EU | OC | NA | SA  Constraint: Specifying ContinentCode with either CountryCode or SubdivisionCode returns an InvalidInput error.
     */
    ContinentCode?: GeoLocationContinentCode;
    /**
     * The two-letter code for the country.
     */
    CountryCode?: GeoLocationCountryCode;
    /**
     * The code for the subdivision, for example, a state in the United States or a province in Canada.
     */
    SubdivisionCode?: GeoLocationSubdivisionCode;
  }
  export type GeoLocationContinentCode = string;
  export type GeoLocationContinentName = string;
  export type GeoLocationCountryCode = string;
  export type GeoLocationCountryName = string;
  export interface GeoLocationDetails {
    /**
     * The two-letter code for the continent.
     */
    ContinentCode?: GeoLocationContinentCode;
    /**
     * The full name of the continent.
     */
    ContinentName?: GeoLocationContinentName;
    /**
     * The two-letter code for the country.
     */
    CountryCode?: GeoLocationCountryCode;
    /**
     * The name of the country.
     */
    CountryName?: GeoLocationCountryName;
    /**
     * The code for the subdivision, for example, a state in the United States or a province in Canada.
     */
    SubdivisionCode?: GeoLocationSubdivisionCode;
    /**
     * The full name of the subdivision, for example, a state in the United States or a province in Canada.
     */
    SubdivisionName?: GeoLocationSubdivisionName;
  }
  export type GeoLocationDetailsList = GeoLocationDetails[];
  export type GeoLocationSubdivisionCode = string;
  export type GeoLocationSubdivisionName = string;
  export interface GetChangeRequest {
    /**
     * The ID of the change batch request. The value that you specify here is the value that ChangeResourceRecordSets returned in the Id element when you submitted the request.
     */
    Id: ResourceId;
  }
  export interface GetChangeResponse {
    /**
     * A complex type that contains information about the specified change batch.
     */
    ChangeInfo: ChangeInfo;
  }
  export interface GetCheckerIpRangesRequest {
  }
  export interface GetCheckerIpRangesResponse {
    CheckerIpRanges: CheckerIpRanges;
  }
  export interface GetGeoLocationRequest {
    /**
     * Amazon Route 53 supports the following continent codes:    AF: Africa    AN: Antarctica    AS: Asia    EU: Europe    OC: Oceania    NA: North America    SA: South America  
     */
    ContinentCode?: GeoLocationContinentCode;
    /**
     * Amazon Route 53 uses the two-letter country codes that are specified in ISO standard 3166-1 alpha-2.
     */
    CountryCode?: GeoLocationCountryCode;
    /**
     * Amazon Route 53 uses the one- to three-letter subdivision codes that are specified in ISO standard 3166-1 alpha-2. Amazon Route 53 doesn't support subdivision codes for all countries. If you specify SubdivisionCode, you must also specify CountryCode. 
     */
    SubdivisionCode?: GeoLocationSubdivisionCode;
  }
  export interface GetGeoLocationResponse {
    /**
     * A complex type that contains the codes and full continent, country, and subdivision names for the specified geolocation code.
     */
    GeoLocationDetails: GeoLocationDetails;
  }
  export interface GetHealthCheckCountRequest {
  }
  export interface GetHealthCheckCountResponse {
    /**
     * The number of health checks associated with the current AWS account.
     */
    HealthCheckCount: HealthCheckCount;
  }
  export interface GetHealthCheckLastFailureReasonRequest {
    /**
     * The ID for the health check for which you want the last failure reason. When you created the health check, CreateHealthCheck returned the ID in the response, in the HealthCheckId element.
     */
    HealthCheckId: HealthCheckId;
  }
  export interface GetHealthCheckLastFailureReasonResponse {
    /**
     * A list that contains one Observation element for each Amazon Route 53 health checker that is reporting a last failure reason. 
     */
    HealthCheckObservations: HealthCheckObservations;
  }
  export interface GetHealthCheckRequest {
    /**
     * The identifier that Amazon Route 53 assigned to the health check when you created it. When you add or update a resource record set, you use this value to specify which health check to use. The value can be up to 64 characters long.
     */
    HealthCheckId: HealthCheckId;
  }
  export interface GetHealthCheckResponse {
    /**
     * A complex type that contains information about one health check that is associated with the current AWS account.
     */
    HealthCheck: HealthCheck;
  }
  export interface GetHealthCheckStatusRequest {
    /**
     * The ID for the health check that you want the current status for. When you created the health check, CreateHealthCheck returned the ID in the response, in the HealthCheckId element.  If you want to check the status of a calculated health check, you must use the Amazon Route 53 console or the CloudWatch console. You can't use GetHealthCheckStatus to get the status of a calculated health check. 
     */
    HealthCheckId: HealthCheckId;
  }
  export interface GetHealthCheckStatusResponse {
    /**
     * A list that contains one HealthCheckObservation element for each Amazon Route 53 health checker that is reporting a status about the health check endpoint.
     */
    HealthCheckObservations: HealthCheckObservations;
  }
  export interface GetHostedZoneCountRequest {
  }
  export interface GetHostedZoneCountResponse {
    /**
     * The total number of public and private hosted zones that are associated with the current AWS account.
     */
    HostedZoneCount: HostedZoneCount;
  }
  export interface GetHostedZoneRequest {
    /**
     * The ID of the hosted zone that you want to get information about.
     */
    Id: ResourceId;
  }
  export interface GetHostedZoneResponse {
    /**
     * A complex type that contains general information about the specified hosted zone.
     */
    HostedZone: HostedZone;
    /**
     * A complex type that lists the Amazon Route 53 name servers for the specified hosted zone.
     */
    DelegationSet?: DelegationSet;
    /**
     * A complex type that contains information about the VPCs that are associated with the specified hosted zone.
     */
    VPCs?: VPCs;
  }
  export interface GetQueryLoggingConfigRequest {
    /**
     * The ID of the configuration for DNS query logging that you want to get information about.
     */
    Id: QueryLoggingConfigId;
  }
  export interface GetQueryLoggingConfigResponse {
    /**
     * A complex type that contains information about the query logging configuration that you specified in a GetQueryLoggingConfig request.
     */
    QueryLoggingConfig: QueryLoggingConfig;
  }
  export interface GetReusableDelegationSetRequest {
    /**
     * The ID of the reusable delegation set that you want to get a list of name servers for.
     */
    Id: ResourceId;
  }
  export interface GetReusableDelegationSetResponse {
    /**
     * A complex type that contains information about the reusable delegation set.
     */
    DelegationSet: DelegationSet;
  }
  export interface GetTrafficPolicyInstanceCountRequest {
  }
  export interface GetTrafficPolicyInstanceCountResponse {
    /**
     * The number of traffic policy instances that are associated with the current AWS account.
     */
    TrafficPolicyInstanceCount: TrafficPolicyInstanceCount;
  }
  export interface GetTrafficPolicyInstanceRequest {
    /**
     * The ID of the traffic policy instance that you want to get information about.
     */
    Id: TrafficPolicyInstanceId;
  }
  export interface GetTrafficPolicyInstanceResponse {
    /**
     * A complex type that contains settings for the traffic policy instance.
     */
    TrafficPolicyInstance: TrafficPolicyInstance;
  }
  export interface GetTrafficPolicyRequest {
    /**
     * The ID of the traffic policy that you want to get information about.
     */
    Id: TrafficPolicyId;
    /**
     * The version number of the traffic policy that you want to get information about.
     */
    Version: TrafficPolicyVersion;
  }
  export interface GetTrafficPolicyResponse {
    /**
     * A complex type that contains settings for the specified traffic policy.
     */
    TrafficPolicy: TrafficPolicy;
  }
  export interface HealthCheck {
    /**
     * The identifier that Amazon Route 53assigned to the health check when you created it. When you add or update a resource record set, you use this value to specify which health check to use. The value can be up to 64 characters long. 
     */
    Id: HealthCheckId;
    /**
     * A unique string that you specified when you created the health check.
     */
    CallerReference: HealthCheckNonce;
    /**
     * A complex type that contains detailed information about one health check.
     */
    HealthCheckConfig: HealthCheckConfig;
    /**
     * The version of the health check. You can optionally pass this value in a call to UpdateHealthCheck to prevent overwriting another change to the health check.
     */
    HealthCheckVersion: HealthCheckVersion;
    /**
     * A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.
     */
    CloudWatchAlarmConfiguration?: CloudWatchAlarmConfiguration;
  }
  export interface HealthCheckConfig {
    /**
     * The IPv4 or IPv6 IP address of the endpoint that you want Amazon Route 53 to perform health checks on. If you don't specify a value for IPAddress, Amazon Route 53 sends a DNS request to resolve the domain name that you specify in FullyQualifiedDomainName at the interval that you specify in RequestInterval. Using an IP address returned by DNS, Amazon Route 53 then checks the health of the endpoint. Use one of the following formats for the value of IPAddress:     IPv4 address: four values between 0 and 255, separated by periods (.), for example, 192.0.2.44.    IPv6 address: eight groups of four hexadecimal values, separated by colons (:), for example, 2001:0db8:85a3:0000:0000:abcd:0001:2345. You can also shorten IPv6 addresses as described in RFC 5952, for example, 2001:db8:85a3::abcd:1:2345.   If the endpoint is an EC2 instance, we recommend that you create an Elastic IP address, associate it with your EC2 instance, and specify the Elastic IP address for IPAddress. This ensures that the IP address of your instance will never change. For more information, see HealthCheckConfig$FullyQualifiedDomainName. Constraints: Amazon Route 53 can't check the health of endpoints for which the IP address is in local, private, non-routable, or multicast ranges. For more information about IP addresses for which you can't create health checks, see the following documents:    RFC 5735, Special Use IPv4 Addresses     RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space     RFC 5156, Special-Use IPv6 Addresses    When the value of Type is CALCULATED or CLOUDWATCH_METRIC, omit IPAddress.
     */
    IPAddress?: IPAddress;
    /**
     * The port on the endpoint on which you want Amazon Route 53 to perform health checks. Specify a value for Port only when you specify a value for IPAddress.
     */
    Port?: Port;
    /**
     * The type of health check that you want to create, which indicates how Amazon Route 53 determines whether an endpoint is healthy.  You can't change the value of Type after you create a health check.  You can create the following types of health checks:    HTTP: Amazon Route 53 tries to establish a TCP connection. If successful, Amazon Route 53 submits an HTTP request and waits for an HTTP status code of 200 or greater and less than 400.    HTTPS: Amazon Route 53 tries to establish a TCP connection. If successful, Amazon Route 53 submits an HTTPS request and waits for an HTTP status code of 200 or greater and less than 400.  If you specify HTTPS for the value of Type, the endpoint must support TLS v1.0 or later.     HTTP_STR_MATCH: Amazon Route 53 tries to establish a TCP connection. If successful, Amazon Route 53 submits an HTTP request and searches the first 5,120 bytes of the response body for the string that you specify in SearchString.    HTTPS_STR_MATCH: Amazon Route 53 tries to establish a TCP connection. If successful, Amazon Route 53 submits an HTTPS request and searches the first 5,120 bytes of the response body for the string that you specify in SearchString.    TCP: Amazon Route 53 tries to establish a TCP connection.    CLOUDWATCH_METRIC: The health check is associated with a CloudWatch alarm. If the state of the alarm is OK, the health check is considered healthy. If the state is ALARM, the health check is considered unhealthy. If CloudWatch doesn't have sufficient data to determine whether the state is OK or ALARM, the health check status depends on the setting for InsufficientDataHealthStatus: Healthy, Unhealthy, or LastKnownStatus.     CALCULATED: For health checks that monitor the status of other health checks, Amazon Route 53 adds up the number of health checks that Amazon Route 53 health checkers consider to be healthy and compares that number with the value of HealthThreshold.    For more information, see How Amazon Route 53 Determines Whether an Endpoint Is Healthy in the Amazon Route 53 Developer Guide.
     */
    Type: HealthCheckType;
    /**
     * The path, if any, that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example, the file /docs/route53-health-check.html. 
     */
    ResourcePath?: ResourcePath;
    /**
     * Amazon Route 53 behavior depends on whether you specify a value for IPAddress.  If you specify a value for IPAddress: Amazon Route 53 sends health check requests to the specified IPv4 or IPv6 address and passes the value of FullyQualifiedDomainName in the Host header for all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint on which you want Amazon Route 53 to perform health checks. When Amazon Route 53 checks the health of an endpoint, here is how it constructs the Host header:   If you specify a value of 80 for Port and HTTP or HTTP_STR_MATCH for Type, Amazon Route 53 passes the value of FullyQualifiedDomainName to the endpoint in the Host header.    If you specify a value of 443 for Port and HTTPS or HTTPS_STR_MATCH for Type, Amazon Route 53 passes the value of FullyQualifiedDomainName to the endpoint in the Host header.   If you specify another value for Port and any value except TCP for Type, Amazon Route 53 passes FullyQualifiedDomainName:Port to the endpoint in the Host header.   If you don't specify a value for FullyQualifiedDomainName, Amazon Route 53 substitutes the value of IPAddress in the Host header in each of the preceding cases.  If you don't specify a value for IPAddress : Amazon Route 53 sends a DNS request to the domain that you specify for FullyQualifiedDomainName at the interval that you specify for RequestInterval. Using an IPv4 address that DNS returns, Amazon Route 53 then checks the health of the endpoint.  If you don't specify a value for IPAddress, Amazon Route 53 uses only IPv4 to send health checks to the endpoint. If there's no resource record set with a type of A for the name that you specify for FullyQualifiedDomainName, the health check fails with a "DNS resolution failed" error.  If you want to check the health of weighted, latency, or failover resource record sets and you choose to specify the endpoint only by FullyQualifiedDomainName, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of FullyQualifiedDomainName, specify the domain name of the server (such as us-east-2-www.example.com), not the name of the resource record sets (www.example.com).  In this configuration, if you create a health check for which the value of FullyQualifiedDomainName matches the name of the resource record sets and you then associate the health check with those resource record sets, health check results will be unpredictable.  In addition, if the value that you specify for Type is HTTP, HTTPS, HTTP_STR_MATCH, or HTTPS_STR_MATCH, Amazon Route 53 passes the value of FullyQualifiedDomainName in the Host header, as it does when you specify a value for IPAddress. If the value of Type is TCP, Amazon Route 53 doesn't pass a Host header.
     */
    FullyQualifiedDomainName?: FullyQualifiedDomainName;
    /**
     * If the value of Type is HTTP_STR_MATCH or HTTP_STR_MATCH, the string that you want Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Amazon Route 53 considers the resource healthy. Amazon Route 53 considers case when searching for SearchString in the response body. 
     */
    SearchString?: SearchString;
    /**
     * The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health check request. Each Amazon Route 53 health checker makes requests at this interval.  You can't change the value of RequestInterval after you create a health check.  If you don't specify a value for RequestInterval, the default value is 30 seconds.
     */
    RequestInterval?: RequestInterval;
    /**
     * The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa. For more information, see How Amazon Route 53 Determines Whether an Endpoint Is Healthy in the Amazon Route 53 Developer Guide. If you don't specify a value for FailureThreshold, the default value is three health checks.
     */
    FailureThreshold?: FailureThreshold;
    /**
     * Specify whether you want Amazon Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint, and to display CloudWatch latency graphs on the Health Checks page in the Amazon Route 53 console.  You can't change the value of MeasureLatency after you create a health check. 
     */
    MeasureLatency?: MeasureLatency;
    /**
     * Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.
     */
    Inverted?: Inverted;
    /**
     * The number of child health checks that are associated with a CALCULATED health that Amazon Route 53 must consider healthy for the CALCULATED health check to be considered healthy. To specify the child health checks that you want to associate with a CALCULATED health check, use the HealthCheckConfig$ChildHealthChecks and HealthCheckConfig$ChildHealthChecks elements. Note the following:   If you specify a number greater than the number of child health checks, Amazon Route 53 always considers this health check to be unhealthy.   If you specify 0, Amazon Route 53 always considers this health check to be healthy.  
     */
    HealthThreshold?: HealthThreshold;
    /**
     * (CALCULATED Health Checks Only) A complex type that contains one ChildHealthCheck element for each health check that you want to associate with a CALCULATED health check.
     */
    ChildHealthChecks?: ChildHealthCheckList;
    /**
     * Specify whether you want Amazon Route 53 to send the value of FullyQualifiedDomainName to the endpoint in the client_hello message during TLS negotiation. This allows the endpoint to respond to HTTPS health check requests with the applicable SSL/TLS certificate. Some endpoints require that HTTPS requests include the host name in the client_hello message. If you don't enable SNI, the status of the health check will be SSL alert handshake_failure. A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid. The SSL/TLS certificate on your endpoint includes a domain name in the Common Name field and possibly several more in the Subject Alternative Names field. One of the domain names in the certificate should match the value that you specify for FullyQualifiedDomainName. If the endpoint responds to the client_hello message with a certificate that does not include the domain name that you specified in FullyQualifiedDomainName, a health checker will retry the handshake. In the second attempt, the health checker will omit FullyQualifiedDomainName from the client_hello message.
     */
    EnableSNI?: EnableSNI;
    /**
     * A complex type that contains one Region element for each region from which you want Amazon Route 53 health checkers to check the specified endpoint. If you don't specify any regions, Amazon Route 53 health checkers automatically performs checks from all of the regions that are listed under Valid Values. If you update a health check to remove a region that has been performing health checks, Amazon Route 53 will briefly continue to perform checks from that region to ensure that some health checkers are always checking the endpoint (for example, if you replace three regions with four different regions). 
     */
    Regions?: HealthCheckRegionList;
    /**
     * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
     */
    AlarmIdentifier?: AlarmIdentifier;
    /**
     * When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:    Healthy: Amazon Route 53 considers the health check to be healthy.    Unhealthy: Amazon Route 53 considers the health check to be unhealthy.    LastKnownStatus: Amazon Route 53 uses the status of the health check from the last time that CloudWatch had sufficient data to determine the alarm state. For new health checks that have no last known status, the default status for the health check is healthy.  
     */
    InsufficientDataHealthStatus?: InsufficientDataHealthStatus;
  }
  export type HealthCheckCount = number;
  export type HealthCheckId = string;
  export type HealthCheckNonce = string;
  export interface HealthCheckObservation {
    /**
     * The region of the Amazon Route 53 health checker that provided the status in StatusReport.
     */
    Region?: HealthCheckRegion;
    /**
     * The IP address of the Amazon Route 53 health checker that provided the failure reason in StatusReport.
     */
    IPAddress?: IPAddress;
    /**
     * A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker and the time of the failed health check.
     */
    StatusReport?: StatusReport;
  }
  export type HealthCheckObservations = HealthCheckObservation[];
  export type HealthCheckRegion = "us-east-1"|"us-west-1"|"us-west-2"|"eu-west-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-northeast-1"|"sa-east-1"|string;
  export type HealthCheckRegionList = HealthCheckRegion[];
  export type HealthCheckType = "HTTP"|"HTTPS"|"HTTP_STR_MATCH"|"HTTPS_STR_MATCH"|"TCP"|"CALCULATED"|"CLOUDWATCH_METRIC"|string;
  export type HealthCheckVersion = number;
  export type HealthChecks = HealthCheck[];
  export type HealthThreshold = number;
  export interface HostedZone {
    /**
     * The ID that Amazon Route 53 assigned to the hosted zone when you created it.
     */
    Id: ResourceId;
    /**
     * The name of the domain. For public hosted zones, this is the name that you have registered with your DNS registrar. For information about how to specify characters other than a-z, 0-9, and - (hyphen) and how to specify internationalized domain names, see CreateHostedZone.
     */
    Name: DNSName;
    /**
     * The value that you specified for CallerReference when you created the hosted zone.
     */
    CallerReference: Nonce;
    /**
     * A complex type that includes the Comment and PrivateZone elements. If you omitted the HostedZoneConfig and Comment elements from the request, the Config and Comment elements don't appear in the response.
     */
    Config?: HostedZoneConfig;
    /**
     * The number of resource record sets in the hosted zone.
     */
    ResourceRecordSetCount?: HostedZoneRRSetCount;
  }
  export interface HostedZoneConfig {
    /**
     * Any comments that you want to include about the hosted zone.
     */
    Comment?: ResourceDescription;
    /**
     * A value that indicates whether this is a private hosted zone.
     */
    PrivateZone?: IsPrivateZone;
  }
  export type HostedZoneCount = number;
  export type HostedZoneRRSetCount = number;
  export type HostedZones = HostedZone[];
  export type IPAddress = string;
  export type IPAddressCidr = string;
  export type InsufficientDataHealthStatus = "Healthy"|"Unhealthy"|"LastKnownStatus"|string;
  export type Inverted = boolean;
  export type IsPrivateZone = boolean;
  export interface ListGeoLocationsRequest {
    /**
     * The code for the continent with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Amazon Route 53 has already returned a page or more of results, if IsTruncated is true, and if NextContinentCode from the previous response has a value, enter that value in StartContinentCode to return the next page of results. Include StartContinentCode only if you want to list continents. Don't include StartContinentCode when you're listing countries or countries with their subdivisions.
     */
    StartContinentCode?: GeoLocationContinentCode;
    /**
     * The code for the country with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Amazon Route 53 has already returned a page or more of results, if IsTruncated is true, and if NextCountryCode from the previous response has a value, enter that value in StartCountryCode to return the next page of results. Amazon Route 53 uses the two-letter country codes that are specified in ISO standard 3166-1 alpha-2.
     */
    StartCountryCode?: GeoLocationCountryCode;
    /**
     * The code for the subdivision (for example, state or province) with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Amazon Route 53 has already returned a page or more of results, if IsTruncated is true, and if NextSubdivisionCode from the previous response has a value, enter that value in StartSubdivisionCode to return the next page of results. To list subdivisions of a country, you must include both StartCountryCode and StartSubdivisionCode.
     */
    StartSubdivisionCode?: GeoLocationSubdivisionCode;
    /**
     * (Optional) The maximum number of geolocations to be included in the response body for this request. If more than MaxItems geolocations remain to be listed, then the value of the IsTruncated element in the response is true.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListGeoLocationsResponse {
    /**
     * A complex type that contains one GeoLocationDetails element for each location that Amazon Route 53 supports for geolocation.
     */
    GeoLocationDetailsList: GeoLocationDetailsList;
    /**
     * A value that indicates whether more locations remain to be listed after the last location in this response. If so, the value of IsTruncated is true. To get more values, submit another request and include the values of NextContinentCode, NextCountryCode, and NextSubdivisionCode in the StartContinentCode, StartCountryCode, and StartSubdivisionCode, as applicable.
     */
    IsTruncated: PageTruncated;
    /**
     * If IsTruncated is true, you can make a follow-up request to display more locations. Enter the value of NextContinentCode in the StartContinentCode parameter in another ListGeoLocations request.
     */
    NextContinentCode?: GeoLocationContinentCode;
    /**
     * If IsTruncated is true, you can make a follow-up request to display more locations. Enter the value of NextCountryCode in the StartCountryCode parameter in another ListGeoLocations request.
     */
    NextCountryCode?: GeoLocationCountryCode;
    /**
     * If IsTruncated is true, you can make a follow-up request to display more locations. Enter the value of NextSubdivisionCode in the StartSubdivisionCode parameter in another ListGeoLocations request.
     */
    NextSubdivisionCode?: GeoLocationSubdivisionCode;
    /**
     * The value that you specified for MaxItems in the request.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListHealthChecksRequest {
    /**
     * If the value of IsTruncated in the previous response was true, you have more health checks. To get another group, submit another ListHealthChecks request.  For the value of marker, specify the value of NextMarker from the previous response, which is the ID of the first health check that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more health checks to get.
     */
    Marker?: PageMarker;
    /**
     * The maximum number of health checks that you want ListHealthChecks to return in response to the current request. Amazon Route 53 returns a maximum of 100 items. If you set MaxItems to a value greater than 100, Amazon Route 53 returns only the first 100 health checks. 
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListHealthChecksResponse {
    /**
     * A complex type that contains one HealthCheck element for each health check that is associated with the current AWS account.
     */
    HealthChecks: HealthChecks;
    /**
     * For the second and subsequent calls to ListHealthChecks, Marker is the value that you specified for the marker parameter in the previous request.
     */
    Marker: PageMarker;
    /**
     * A flag that indicates whether there are more health checks to be listed. If the response was truncated, you can get the next group of health checks by submitting another ListHealthChecks request and specifying the value of NextMarker in the marker parameter.
     */
    IsTruncated: PageTruncated;
    /**
     * If IsTruncated is true, the value of NextMarker identifies the first health check that Amazon Route 53 returns if you submit another ListHealthChecks request and specify the value of NextMarker in the marker parameter.
     */
    NextMarker?: PageMarker;
    /**
     * The value that you specified for the maxitems parameter in the call to ListHealthChecks that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListHostedZonesByNameRequest {
    /**
     * (Optional) For your first request to ListHostedZonesByName, include the dnsname parameter only if you want to specify the name of the first hosted zone in the response. If you don't include the dnsname parameter, Amazon Route 53 returns all of the hosted zones that were created by the current AWS account, in ASCII order. For subsequent requests, include both dnsname and hostedzoneid parameters. For dnsname, specify the value of NextDNSName from the previous response.
     */
    DNSName?: DNSName;
    /**
     * (Optional) For your first request to ListHostedZonesByName, do not include the hostedzoneid parameter. If you have more hosted zones than the value of maxitems, ListHostedZonesByName returns only the first maxitems hosted zones. To get the next group of maxitems hosted zones, submit another request to ListHostedZonesByName and include both dnsname and hostedzoneid parameters. For the value of hostedzoneid, specify the value of the NextHostedZoneId element from the previous response.
     */
    HostedZoneId?: ResourceId;
    /**
     * The maximum number of hosted zones to be included in the response body for this request. If you have more than maxitems hosted zones, then the value of the IsTruncated element in the response is true, and the values of NextDNSName and NextHostedZoneId specify the first hosted zone in the next group of maxitems hosted zones. 
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListHostedZonesByNameResponse {
    /**
     * A complex type that contains general information about the hosted zone.
     */
    HostedZones: HostedZones;
    /**
     * For the second and subsequent calls to ListHostedZonesByName, DNSName is the value that you specified for the dnsname parameter in the request that produced the current response.
     */
    DNSName?: DNSName;
    /**
     * The ID that Amazon Route 53 assigned to the hosted zone when you created it.
     */
    HostedZoneId?: ResourceId;
    /**
     * A flag that indicates whether there are more hosted zones to be listed. If the response was truncated, you can get the next group of maxitems hosted zones by calling ListHostedZonesByName again and specifying the values of NextDNSName and NextHostedZoneId elements in the dnsname and hostedzoneid parameters.
     */
    IsTruncated: PageTruncated;
    /**
     * If IsTruncated is true, the value of NextDNSName is the name of the first hosted zone in the next group of maxitems hosted zones. Call ListHostedZonesByName again and specify the value of NextDNSName and NextHostedZoneId in the dnsname and hostedzoneid parameters, respectively. This element is present only if IsTruncated is true.
     */
    NextDNSName?: DNSName;
    /**
     * If IsTruncated is true, the value of NextHostedZoneId identifies the first hosted zone in the next group of maxitems hosted zones. Call ListHostedZonesByName again and specify the value of NextDNSName and NextHostedZoneId in the dnsname and hostedzoneid parameters, respectively. This element is present only if IsTruncated is true.
     */
    NextHostedZoneId?: ResourceId;
    /**
     * The value that you specified for the maxitems parameter in the call to ListHostedZonesByName that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListHostedZonesRequest {
    /**
     * If the value of IsTruncated in the previous response was true, you have more hosted zones. To get more hosted zones, submit another ListHostedZones request.  For the value of marker, specify the value of NextMarker from the previous response, which is the ID of the first hosted zone that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more hosted zones to get.
     */
    Marker?: PageMarker;
    /**
     * (Optional) The maximum number of hosted zones that you want Amazon Route 53 to return. If you have more than maxitems hosted zones, the value of IsTruncated in the response is true, and the value of NextMarker is the hosted zone ID of the first hosted zone that Amazon Route 53 will return if you submit another request.
     */
    MaxItems?: PageMaxItems;
    /**
     * If you're using reusable delegation sets and you want to list all of the hosted zones that are associated with a reusable delegation set, specify the ID of that reusable delegation set. 
     */
    DelegationSetId?: ResourceId;
  }
  export interface ListHostedZonesResponse {
    /**
     * A complex type that contains general information about the hosted zone.
     */
    HostedZones: HostedZones;
    /**
     * For the second and subsequent calls to ListHostedZones, Marker is the value that you specified for the marker parameter in the request that produced the current response.
     */
    Marker: PageMarker;
    /**
     * A flag indicating whether there are more hosted zones to be listed. If the response was truncated, you can get more hosted zones by submitting another ListHostedZones request and specifying the value of NextMarker in the marker parameter.
     */
    IsTruncated: PageTruncated;
    /**
     * If IsTruncated is true, the value of NextMarker identifies the first hosted zone in the next group of hosted zones. Submit another ListHostedZones request, and specify the value of NextMarker from the response in the marker parameter. This element is present only if IsTruncated is true.
     */
    NextMarker?: PageMarker;
    /**
     * The value that you specified for the maxitems parameter in the call to ListHostedZones that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListQueryLoggingConfigsRequest {
    /**
     * (Optional) If you want to list the query logging configuration that is associated with a hosted zone, specify the ID in HostedZoneId.  If you don't specify a hosted zone ID, ListQueryLoggingConfigs returns all of the configurations that are associated with the current AWS account.
     */
    HostedZoneId?: ResourceId;
    /**
     * (Optional) If the current AWS account has more than MaxResults query logging configurations, use NextToken to get the second and subsequent pages of results. For the first ListQueryLoggingConfigs request, omit this value. For the second and subsequent requests, get the value of NextToken from the previous response and specify that value for NextToken in the request.
     */
    NextToken?: PaginationToken;
    /**
     * (Optional) The maximum number of query logging configurations that you want Amazon Route 53 to return in response to the current request. If the current AWS account has more than MaxResults configurations, use the value of ListQueryLoggingConfigsResponse$NextToken in the response to get the next page of results. If you don't specify a value for MaxResults, Amazon Route 53 returns up to 100 configurations.
     */
    MaxResults?: MaxResults;
  }
  export interface ListQueryLoggingConfigsResponse {
    /**
     * An array that contains one QueryLoggingConfig element for each configuration for DNS query logging that is associated with the current AWS account.
     */
    QueryLoggingConfigs: QueryLoggingConfigs;
    /**
     * If a response includes the last of the query logging configurations that are associated with the current AWS account, NextToken doesn't appear in the response. If a response doesn't include the last of the configurations, you can get more configurations by submitting another ListQueryLoggingConfigs request. Get the value of NextToken that Amazon Route 53 returned in the previous response and include it in NextToken in the next request.
     */
    NextToken?: PaginationToken;
  }
  export interface ListResourceRecordSetsRequest {
    /**
     * The ID of the hosted zone that contains the resource record sets that you want to list.
     */
    HostedZoneId: ResourceId;
    /**
     * The first name in the lexicographic ordering of resource record sets that you want to list.
     */
    StartRecordName?: DNSName;
    /**
     * The type of resource record set to begin the record listing from. Valid values for basic resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | NS | PTR | SOA | SPF | SRV | TXT  Values for weighted, latency, geo, and failover resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | PTR | SPF | SRV | TXT  Values for alias resource record sets:     CloudFront distribution: A or AAAA    Elastic Beanstalk environment that has a regionalized subdomain: A    ELB load balancer: A | AAAA    Amazon S3 bucket: A    Another resource record set in this hosted zone: The type of the resource record set that the alias references.   Constraint: Specifying type without specifying name returns an InvalidInput error.
     */
    StartRecordType?: RRType;
    /**
     *  Weighted resource record sets only: If results were truncated for a given DNS name and type, specify the value of NextRecordIdentifier from the previous response to get the next resource record set that has the current DNS name and type.
     */
    StartRecordIdentifier?: ResourceRecordSetIdentifier;
    /**
     * (Optional) The maximum number of resource records sets to include in the response body for this request. If the response includes more than maxitems resource record sets, the value of the IsTruncated element in the response is true, and the values of the NextRecordName and NextRecordType elements in the response identify the first resource record set in the next group of maxitems resource record sets.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListResourceRecordSetsResponse {
    /**
     * Information about multiple resource record sets.
     */
    ResourceRecordSets: ResourceRecordSets;
    /**
     * A flag that indicates whether more resource record sets remain to be listed. If your results were truncated, you can make a follow-up pagination request by using the NextRecordName element.
     */
    IsTruncated: PageTruncated;
    /**
     * If the results were truncated, the name of the next record in the list. This element is present only if IsTruncated is true. 
     */
    NextRecordName?: DNSName;
    /**
     * If the results were truncated, the type of the next record in the list. This element is present only if IsTruncated is true. 
     */
    NextRecordType?: RRType;
    /**
     *  Weighted, latency, geolocation, and failover resource record sets only: If results were truncated for a given DNS name and type, the value of SetIdentifier for the next resource record set that has the current DNS name and type.
     */
    NextRecordIdentifier?: ResourceRecordSetIdentifier;
    /**
     * The maximum number of records you requested.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListReusableDelegationSetsRequest {
    /**
     * If the value of IsTruncated in the previous response was true, you have more reusable delegation sets. To get another group, submit another ListReusableDelegationSets request.  For the value of marker, specify the value of NextMarker from the previous response, which is the ID of the first reusable delegation set that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more reusable delegation sets to get.
     */
    Marker?: PageMarker;
    /**
     * The number of reusable delegation sets that you want Amazon Route 53 to return in the response to this request. If you specify a value greater than 100, Amazon Route 53 returns only the first 100 reusable delegation sets.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListReusableDelegationSetsResponse {
    /**
     * A complex type that contains one DelegationSet element for each reusable delegation set that was created by the current AWS account.
     */
    DelegationSets: DelegationSets;
    /**
     * For the second and subsequent calls to ListReusableDelegationSets, Marker is the value that you specified for the marker parameter in the request that produced the current response.
     */
    Marker: PageMarker;
    /**
     * A flag that indicates whether there are more reusable delegation sets to be listed.
     */
    IsTruncated: PageTruncated;
    /**
     * If IsTruncated is true, the value of NextMarker identifies the next reusable delegation set that Amazon Route 53 will return if you submit another ListReusableDelegationSets request and specify the value of NextMarker in the marker parameter.
     */
    NextMarker?: PageMarker;
    /**
     * The value that you specified for the maxitems parameter in the call to ListReusableDelegationSets that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The type of the resource.   The resource type for health checks is healthcheck.   The resource type for hosted zones is hostedzone.  
     */
    ResourceType: TagResourceType;
    /**
     * The ID of the resource for which you want to retrieve tags.
     */
    ResourceId: TagResourceId;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A ResourceTagSet containing tags associated with the specified resource.
     */
    ResourceTagSet: ResourceTagSet;
  }
  export interface ListTagsForResourcesRequest {
    /**
     * The type of the resources.   The resource type for health checks is healthcheck.   The resource type for hosted zones is hostedzone.  
     */
    ResourceType: TagResourceType;
    /**
     * A complex type that contains the ResourceId element for each resource for which you want to get a list of tags.
     */
    ResourceIds: TagResourceIdList;
  }
  export interface ListTagsForResourcesResponse {
    /**
     * A list of ResourceTagSets containing tags associated with the specified resources.
     */
    ResourceTagSets: ResourceTagSetList;
  }
  export interface ListTrafficPoliciesRequest {
    /**
     * (Conditional) For your first request to ListTrafficPolicies, don't include the TrafficPolicyIdMarker parameter. If you have more traffic policies than the value of MaxItems, ListTrafficPolicies returns only the first MaxItems traffic policies. To get the next group of policies, submit another request to ListTrafficPolicies. For the value of TrafficPolicyIdMarker, specify the value of TrafficPolicyIdMarker that was returned in the previous response.
     */
    TrafficPolicyIdMarker?: TrafficPolicyId;
    /**
     * (Optional) The maximum number of traffic policies that you want Amazon Route 53 to return in response to this request. If you have more than MaxItems traffic policies, the value of IsTruncated in the response is true, and the value of TrafficPolicyIdMarker is the ID of the first traffic policy that Amazon Route 53 will return if you submit another request.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListTrafficPoliciesResponse {
    /**
     * A list that contains one TrafficPolicySummary element for each traffic policy that was created by the current AWS account.
     */
    TrafficPolicySummaries: TrafficPolicySummaries;
    /**
     * A flag that indicates whether there are more traffic policies to be listed. If the response was truncated, you can get the next group of traffic policies by submitting another ListTrafficPolicies request and specifying the value of TrafficPolicyIdMarker in the TrafficPolicyIdMarker request parameter.
     */
    IsTruncated: PageTruncated;
    /**
     * If the value of IsTruncated is true, TrafficPolicyIdMarker is the ID of the first traffic policy in the next group of MaxItems traffic policies.
     */
    TrafficPolicyIdMarker: TrafficPolicyId;
    /**
     * The value that you specified for the MaxItems parameter in the ListTrafficPolicies request that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListTrafficPolicyInstancesByHostedZoneRequest {
    /**
     * The ID of the hosted zone that you want to list traffic policy instances for.
     */
    HostedZoneId: ResourceId;
    /**
     * If the value of IsTruncated in the previous response is true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of trafficpolicyinstancename, specify the value of TrafficPolicyInstanceNameMarker from the previous response, which is the name of the first traffic policy instance in the next group of traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.
     */
    TrafficPolicyInstanceNameMarker?: DNSName;
    /**
     * If the value of IsTruncated in the previous response is true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of trafficpolicyinstancetype, specify the value of TrafficPolicyInstanceTypeMarker from the previous response, which is the type of the first traffic policy instance in the next group of traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.
     */
    TrafficPolicyInstanceTypeMarker?: RRType;
    /**
     * The maximum number of traffic policy instances to be included in the response body for this request. If you have more than MaxItems traffic policy instances, the value of the IsTruncated element in the response is true, and the values of HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker represent the first traffic policy instance that Amazon Route 53 will return if you submit another request.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListTrafficPolicyInstancesByHostedZoneResponse {
    /**
     * A list that contains one TrafficPolicyInstance element for each traffic policy instance that matches the elements in the request. 
     */
    TrafficPolicyInstances: TrafficPolicyInstances;
    /**
     * If IsTruncated is true, TrafficPolicyInstanceNameMarker is the name of the first traffic policy instance in the next group of traffic policy instances.
     */
    TrafficPolicyInstanceNameMarker?: DNSName;
    /**
     * If IsTruncated is true, TrafficPolicyInstanceTypeMarker is the DNS type of the resource record sets that are associated with the first traffic policy instance in the next group of traffic policy instances.
     */
    TrafficPolicyInstanceTypeMarker?: RRType;
    /**
     * A flag that indicates whether there are more traffic policy instances to be listed. If the response was truncated, you can get the next group of traffic policy instances by submitting another ListTrafficPolicyInstancesByHostedZone request and specifying the values of HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker in the corresponding request parameters.
     */
    IsTruncated: PageTruncated;
    /**
     * The value that you specified for the MaxItems parameter in the ListTrafficPolicyInstancesByHostedZone request that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListTrafficPolicyInstancesByPolicyRequest {
    /**
     * The ID of the traffic policy for which you want to list traffic policy instances.
     */
    TrafficPolicyId: TrafficPolicyId;
    /**
     * The version of the traffic policy for which you want to list traffic policy instances. The version must be associated with the traffic policy that is specified by TrafficPolicyId.
     */
    TrafficPolicyVersion: TrafficPolicyVersion;
    /**
     * If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstancesByPolicy request.  For the value of hostedzoneid, specify the value of HostedZoneIdMarker from the previous response, which is the hosted zone ID of the first traffic policy instance that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.
     */
    HostedZoneIdMarker?: ResourceId;
    /**
     * If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstancesByPolicy request. For the value of trafficpolicyinstancename, specify the value of TrafficPolicyInstanceNameMarker from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.
     */
    TrafficPolicyInstanceNameMarker?: DNSName;
    /**
     * If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstancesByPolicy request. For the value of trafficpolicyinstancetype, specify the value of TrafficPolicyInstanceTypeMarker from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.
     */
    TrafficPolicyInstanceTypeMarker?: RRType;
    /**
     * The maximum number of traffic policy instances to be included in the response body for this request. If you have more than MaxItems traffic policy instances, the value of the IsTruncated element in the response is true, and the values of HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker represent the first traffic policy instance that Amazon Route 53 will return if you submit another request.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListTrafficPolicyInstancesByPolicyResponse {
    /**
     * A list that contains one TrafficPolicyInstance element for each traffic policy instance that matches the elements in the request.
     */
    TrafficPolicyInstances: TrafficPolicyInstances;
    /**
     * If IsTruncated is true, HostedZoneIdMarker is the ID of the hosted zone of the first traffic policy instance in the next group of traffic policy instances.
     */
    HostedZoneIdMarker?: ResourceId;
    /**
     * If IsTruncated is true, TrafficPolicyInstanceNameMarker is the name of the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    TrafficPolicyInstanceNameMarker?: DNSName;
    /**
     * If IsTruncated is true, TrafficPolicyInstanceTypeMarker is the DNS type of the resource record sets that are associated with the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    TrafficPolicyInstanceTypeMarker?: RRType;
    /**
     * A flag that indicates whether there are more traffic policy instances to be listed. If the response was truncated, you can get the next group of traffic policy instances by calling ListTrafficPolicyInstancesByPolicy again and specifying the values of the HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker elements in the corresponding request parameters.
     */
    IsTruncated: PageTruncated;
    /**
     * The value that you specified for the MaxItems parameter in the call to ListTrafficPolicyInstancesByPolicy that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListTrafficPolicyInstancesRequest {
    /**
     * If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of HostedZoneId, specify the value of HostedZoneIdMarker from the previous response, which is the hosted zone ID of the first traffic policy instance in the next group of traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.
     */
    HostedZoneIdMarker?: ResourceId;
    /**
     * If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of trafficpolicyinstancename, specify the value of TrafficPolicyInstanceNameMarker from the previous response, which is the name of the first traffic policy instance in the next group of traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.
     */
    TrafficPolicyInstanceNameMarker?: DNSName;
    /**
     * If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of trafficpolicyinstancetype, specify the value of TrafficPolicyInstanceTypeMarker from the previous response, which is the type of the first traffic policy instance in the next group of traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.
     */
    TrafficPolicyInstanceTypeMarker?: RRType;
    /**
     * The maximum number of traffic policy instances that you want Amazon Route 53 to return in response to a ListTrafficPolicyInstances request. If you have more than MaxItems traffic policy instances, the value of the IsTruncated element in the response is true, and the values of HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker represent the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListTrafficPolicyInstancesResponse {
    /**
     * A list that contains one TrafficPolicyInstance element for each traffic policy instance that matches the elements in the request.
     */
    TrafficPolicyInstances: TrafficPolicyInstances;
    /**
     * If IsTruncated is true, HostedZoneIdMarker is the ID of the hosted zone of the first traffic policy instance that Amazon Route 53 will return if you submit another ListTrafficPolicyInstances request. 
     */
    HostedZoneIdMarker?: ResourceId;
    /**
     * If IsTruncated is true, TrafficPolicyInstanceNameMarker is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another ListTrafficPolicyInstances request. 
     */
    TrafficPolicyInstanceNameMarker?: DNSName;
    /**
     * If IsTruncated is true, TrafficPolicyInstanceTypeMarker is the DNS type of the resource record sets that are associated with the first traffic policy instance that Amazon Route 53 will return if you submit another ListTrafficPolicyInstances request. 
     */
    TrafficPolicyInstanceTypeMarker?: RRType;
    /**
     * A flag that indicates whether there are more traffic policy instances to be listed. If the response was truncated, you can get more traffic policy instances by calling ListTrafficPolicyInstances again and specifying the values of the HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker in the corresponding request parameters.
     */
    IsTruncated: PageTruncated;
    /**
     * The value that you specified for the MaxItems parameter in the call to ListTrafficPolicyInstances that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListTrafficPolicyVersionsRequest {
    /**
     * Specify the value of Id of the traffic policy for which you want to list all versions.
     */
    Id: TrafficPolicyId;
    /**
     * For your first request to ListTrafficPolicyVersions, don't include the TrafficPolicyVersionMarker parameter. If you have more traffic policy versions than the value of MaxItems, ListTrafficPolicyVersions returns only the first group of MaxItems versions. To get more traffic policy versions, submit another ListTrafficPolicyVersions request. For the value of TrafficPolicyVersionMarker, specify the value of TrafficPolicyVersionMarker in the previous response.
     */
    TrafficPolicyVersionMarker?: TrafficPolicyVersionMarker;
    /**
     * The maximum number of traffic policy versions that you want Amazon Route 53 to include in the response body for this request. If the specified traffic policy has more than MaxItems versions, the value of IsTruncated in the response is true, and the value of the TrafficPolicyVersionMarker element is the ID of the first version that Amazon Route 53 will return if you submit another request.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListTrafficPolicyVersionsResponse {
    /**
     * A list that contains one TrafficPolicy element for each traffic policy version that is associated with the specified traffic policy.
     */
    TrafficPolicies: TrafficPolicies;
    /**
     * A flag that indicates whether there are more traffic policies to be listed. If the response was truncated, you can get the next group of traffic policies by submitting another ListTrafficPolicyVersions request and specifying the value of NextMarker in the marker parameter.
     */
    IsTruncated: PageTruncated;
    /**
     * If IsTruncated is true, the value of TrafficPolicyVersionMarker identifies the first traffic policy that Amazon Route 53 will return if you submit another request. Call ListTrafficPolicyVersions again and specify the value of TrafficPolicyVersionMarker in the TrafficPolicyVersionMarker request parameter. This element is present only if IsTruncated is true.
     */
    TrafficPolicyVersionMarker: TrafficPolicyVersionMarker;
    /**
     * The value that you specified for the maxitems parameter in the ListTrafficPolicyVersions request that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListVPCAssociationAuthorizationsRequest {
    /**
     * The ID of the hosted zone for which you want a list of VPCs that can be associated with the hosted zone.
     */
    HostedZoneId: ResourceId;
    /**
     *  Optional: If a response includes a NextToken element, there are more VPCs that can be associated with the specified hosted zone. To get the next page of results, submit another request, and include the value of NextToken from the response in the nexttoken parameter in another ListVPCAssociationAuthorizations request.
     */
    NextToken?: PaginationToken;
    /**
     *  Optional: An integer that specifies the maximum number of VPCs that you want Amazon Route 53 to return. If you don't specify a value for MaxResults, Amazon Route 53 returns up to 50 VPCs per page.
     */
    MaxResults?: MaxResults;
  }
  export interface ListVPCAssociationAuthorizationsResponse {
    /**
     * The ID of the hosted zone that you can associate the listed VPCs with.
     */
    HostedZoneId: ResourceId;
    /**
     * When the response includes a NextToken element, there are more VPCs that can be associated with the specified hosted zone. To get the next page of VPCs, submit another ListVPCAssociationAuthorizations request, and include the value of the NextToken element from the response in the nexttoken request parameter.
     */
    NextToken?: PaginationToken;
    /**
     * The list of VPCs that are authorized to be associated with the specified hosted zone.
     */
    VPCs: VPCs;
  }
  export type MaxResults = string;
  export type MeasureLatency = boolean;
  export type Message = string;
  export type MetricName = string;
  export type Nameserver = string;
  export type Namespace = string;
  export type Nonce = string;
  export type PageMarker = string;
  export type PageMaxItems = string;
  export type PageTruncated = boolean;
  export type PaginationToken = string;
  export type Period = number;
  export type Port = number;
  export interface QueryLoggingConfig {
    /**
     * The ID for a configuration for DNS query logging.
     */
    Id: QueryLoggingConfigId;
    /**
     * The ID of the hosted zone that CloudWatch Logs is logging queries for. 
     */
    HostedZoneId: ResourceId;
    /**
     * The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.
     */
    CloudWatchLogsLogGroupArn: CloudWatchLogsLogGroupArn;
  }
  export type QueryLoggingConfigId = string;
  export type QueryLoggingConfigs = QueryLoggingConfig[];
  export type RData = string;
  export type RRType = "SOA"|"A"|"TXT"|"NS"|"CNAME"|"MX"|"NAPTR"|"PTR"|"SRV"|"SPF"|"AAAA"|"CAA"|string;
  export type RecordData = RecordDataEntry[];
  export type RecordDataEntry = string;
  export type RequestInterval = number;
  export type ResettableElementName = "FullyQualifiedDomainName"|"Regions"|"ResourcePath"|"ChildHealthChecks"|string;
  export type ResettableElementNameList = ResettableElementName[];
  export type ResourceDescription = string;
  export type ResourceId = string;
  export type ResourcePath = string;
  export interface ResourceRecord {
    /**
     * The current or new DNS record value, not to exceed 4,000 characters. In the case of a DELETE action, if the current value does not match the actual value, an error is returned. For descriptions about how to format Value for different record types, see Supported DNS Resource Record Types in the Amazon Route 53 Developer Guide. You can specify more than one value for all record types except CNAME and SOA.   If you're creating an alias resource record set, omit Value. 
     */
    Value: RData;
  }
  export interface ResourceRecordSet {
    /**
     * The name of the domain you want to perform the action on. Enter a fully qualified domain name, for example, www.example.com. You can optionally include a trailing dot. If you omit the trailing dot, Amazon Route 53 still assumes that the domain name that you specify is fully qualified. This means that Amazon Route 53 treats www.example.com (without a trailing dot) and www.example.com. (with a trailing dot) as identical. For information about how to specify characters other than a-z, 0-9, and - (hyphen) and how to specify internationalized domain names, see DNS Domain Name Format in the Amazon Route 53 Developer Guide. You can use the asterisk (*) wildcard to replace the leftmost label in a domain name, for example, *.example.com. Note the following:   The * must replace the entire label. For example, you can't specify *prod.example.com or prod*.example.com.   The * can't replace any of the middle labels, for example, marketing.*.example.com.   If you include * in any position other than the leftmost label in a domain name, DNS treats it as an * character (ASCII 42), not as a wildcard.  You can't use the * wildcard for resource records sets that have a type of NS.    You can use the * wildcard as the leftmost label in a domain name, for example, *.example.com. You can't use an * for one of the middle labels, for example, marketing.*.example.com. In addition, the * must replace the entire label; for example, you can't specify prod*.example.com.
     */
    Name: DNSName;
    /**
     * The DNS record type. For information about different record types and how data is encoded for them, see Supported DNS Resource Record Types in the Amazon Route 53 Developer Guide. Valid values for basic resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | NS | PTR | SOA | SPF | SRV | TXT  Values for weighted, latency, geolocation, and failover resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | PTR | SPF | SRV | TXT. When creating a group of weighted, latency, geolocation, or failover resource record sets, specify the same value for all of the resource record sets in the group. Valid values for multivalue answer resource record sets: A | AAAA | MX | NAPTR | PTR | SPF | SRV | TXT   SPF records were formerly used to verify the identity of the sender of email messages. However, we no longer recommend that you create resource record sets for which the value of Type is SPF. RFC 7208, Sender Policy Framework (SPF) for Authorizing Use of Domains in Email, Version 1, has been updated to say, "...[I]ts existence and mechanism defined in [RFC4408] have led to some interoperability issues. Accordingly, its use is no longer appropriate for SPF version 1; implementations are not to use it." In RFC 7208, see section 14.1, The SPF DNS Record Type.  Values for alias resource record sets:    CloudFront distributions: A  If IPv6 is enabled for the distribution, create two resource record sets to route traffic to your distribution, one with a value of A and one with a value of AAAA.     AWS Elastic Beanstalk environment that has a regionalized subdomain: A     ELB load balancers: A | AAAA     Amazon S3 buckets: A     Another resource record set in this hosted zone: Specify the type of the resource record set that you're creating the alias for. All values are supported except NS and SOA.  
     */
    Type: RRType;
    /**
     *  Weighted, Latency, Geo, and Failover resource record sets only: An identifier that differentiates among multiple resource record sets that have the same combination of DNS name and type. The value of SetIdentifier must be unique for each resource record set that has the same combination of DNS name and type. Omit SetIdentifier for any other types of record sets.
     */
    SetIdentifier?: ResourceRecordSetIdentifier;
    /**
     *  Weighted resource record sets only: Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set. Amazon Route 53 calculates the sum of the weights for the resource record sets that have the same combination of DNS name and type. Amazon Route 53 then responds to queries based on the ratio of a resource's weight to the total. Note the following:   You must specify a value for the Weight element for every weighted resource record set.   You can only specify one ResourceRecord per weighted resource record set.   You can't create latency, failover, or geolocation resource record sets that have the same values for the Name and Type elements as weighted resource record sets.   You can create a maximum of 100 weighted resource record sets that have the same values for the Name and Type elements.   For weighted (but not weighted alias) resource record sets, if you set Weight to 0 for a resource record set, Amazon Route 53 never responds to queries with the applicable value for that resource record set. However, if you set Weight to 0 for all resource record sets that have the same combination of DNS name and type, traffic is routed to all resources with equal probability. The effect of setting Weight to 0 is different when you associate health checks with weighted resource record sets. For more information, see Options for Configuring Amazon Route 53 Active-Active and Active-Passive Failover in the Amazon Route 53 Developer Guide.  
     */
    Weight?: ResourceRecordSetWeight;
    /**
     *  Latency-based resource record sets only: The Amazon EC2 Region where you created the resource that this resource record set refers to. The resource typically is an AWS resource, such as an EC2 instance or an ELB load balancer, and is referred to by an IP address or a DNS domain name, depending on the record type.  Creating latency and latency alias resource record sets in private hosted zones is not supported.  When Amazon Route 53 receives a DNS query for a domain name and type for which you have created latency resource record sets, Amazon Route 53 selects the latency resource record set that has the lowest latency between the end user and the associated Amazon EC2 Region. Amazon Route 53 then returns the value that is associated with the selected resource record set. Note the following:   You can only specify one ResourceRecord per latency resource record set.   You can only create one latency resource record set for each Amazon EC2 Region.   You aren't required to create latency resource record sets for all Amazon EC2 Regions. Amazon Route 53 will choose the region with the best latency from among the regions that you create latency resource record sets for.   You can't create non-latency resource record sets that have the same values for the Name and Type elements as latency resource record sets.  
     */
    Region?: ResourceRecordSetRegion;
    /**
     *  Geo location resource record sets only: A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query. For example, if you want all queries from Africa to be routed to a web server with an IP address of 192.0.2.111, create a resource record set with a Type of A and a ContinentCode of AF.  Creating geolocation and geolocation alias resource record sets in private hosted zones is not supported.  If you create separate resource record sets for overlapping geographic regions (for example, one resource record set for a continent and one for a country on the same continent), priority goes to the smallest geographic region. This allows you to route most queries for a continent to one resource and to route queries for a country on that continent to a different resource. You can't create two geolocation resource record sets that specify the same geographic location. The value * in the CountryCode element matches all geographic locations that aren't specified in other geolocation resource record sets that have the same values for the Name and Type elements.  Geolocation works by mapping IP addresses to locations. However, some IP addresses aren't mapped to geographic locations, so even if you create geolocation resource record sets that cover all seven continents, Amazon Route 53 will receive some DNS queries from locations that it can't identify. We recommend that you create a resource record set for which the value of CountryCode is *, which handles both queries that come from locations for which you haven't created geolocation resource record sets and queries from IP addresses that aren't mapped to a location. If you don't create a * resource record set, Amazon Route 53 returns a "no answer" response for queries from those locations.  You can't create non-geolocation resource record sets that have the same values for the Name and Type elements as geolocation resource record sets.
     */
    GeoLocation?: GeoLocation;
    /**
     *  Failover resource record sets only: To configure failover, you add the Failover element to two resource record sets. For one resource record set, you specify PRIMARY as the value for Failover; for the other resource record set, you specify SECONDARY. In addition, you include the HealthCheckId element and specify the health check that you want Amazon Route 53 to perform for each resource record set. Except where noted, the following failover behaviors assume that you have included the HealthCheckId element in both resource record sets:   When the primary resource record set is healthy, Amazon Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the secondary resource record set.   When the primary resource record set is unhealthy and the secondary resource record set is healthy, Amazon Route 53 responds to DNS queries with the applicable value from the secondary resource record set.   When the secondary resource record set is unhealthy, Amazon Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the primary resource record set.   If you omit the HealthCheckId element for the secondary resource record set, and if the primary resource record set is unhealthy, Amazon Route 53 always responds to DNS queries with the applicable value from the secondary resource record set. This is true regardless of the health of the associated endpoint.   You can't create non-failover resource record sets that have the same values for the Name and Type elements as failover resource record sets. For failover alias resource record sets, you must also include the EvaluateTargetHealth element and set the value to true. For more information about configuring failover for Amazon Route 53, see the following topics in the Amazon Route 53 Developer Guide:     Amazon Route 53 Health Checks and DNS Failover     Configuring Failover in a Private Hosted Zone   
     */
    Failover?: ResourceRecordSetFailover;
    /**
     *  Multivalue answer resource record sets only: To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify true for MultiValueAnswer. Note the following:   If you associate a health check with a multivalue answer resource record set, Amazon Route 53 responds to DNS queries with the corresponding IP address only when the health check is healthy.   If you don't associate a health check with a multivalue answer record, Amazon Route 53 always considers the record to be healthy.   Amazon Route 53 responds to DNS queries with up to eight healthy records; if you have eight or fewer healthy records, Amazon Route 53 responds to all DNS queries with all the healthy records.   If you have more than eight healthy records, Amazon Route 53 responds to different DNS resolvers with different combinations of healthy records.   When all records are unhealthy, Amazon Route 53 responds to DNS queries with up to eight unhealthy records.   If a resource becomes unavailable after a resolver caches a response, client software typically tries another of the IP addresses in the response.   You can't create multivalue answer alias records.
     */
    MultiValueAnswer?: ResourceRecordSetMultiValueAnswer;
    /**
     * The resource record cache time to live (TTL), in seconds. Note the following:   If you're creating or updating an alias resource record set, omit TTL. Amazon Route 53 uses the value of TTL for the alias target.    If you're associating this resource record set with a health check (if you're adding a HealthCheckId element), we recommend that you specify a TTL of 60 seconds or less so clients respond quickly to changes in health status.   All of the resource record sets in a group of weighted resource record sets must have the same value for TTL.   If a group of weighted resource record sets includes one or more weighted alias resource record sets for which the alias target is an ELB load balancer, we recommend that you specify a TTL of 60 seconds for all of the non-alias weighted resource record sets that have the same name and type. Values other than 60 seconds (the TTL for load balancers) will change the effect of the values that you specify for Weight.  
     */
    TTL?: TTL;
    /**
     * Information about the resource records to act upon.  If you're creating an alias resource record set, omit ResourceRecords. 
     */
    ResourceRecords?: ResourceRecords;
    /**
     *  Alias resource record sets only: Information about the CloudFront distribution, AWS Elastic Beanstalk environment, ELB load balancer, Amazon S3 bucket, or Amazon Route 53 resource record set to which you're redirecting queries. The AWS Elastic Beanstalk environment must have a regionalized subdomain. If you're creating resource records sets for a private hosted zone, note the following:   You can't create alias resource record sets for CloudFront distributions in a private hosted zone.   Creating geolocation alias resource record sets or latency alias resource record sets in a private hosted zone is unsupported.   For information about creating failover resource record sets in a private hosted zone, see Configuring Failover in a Private Hosted Zone in the Amazon Route 53 Developer Guide.  
     */
    AliasTarget?: AliasTarget;
    /**
     * If you want Amazon Route 53 to return this resource record set in response to a DNS query only when a health check is passing, include the HealthCheckId element and specify the ID of the applicable health check. Amazon Route 53 determines whether a resource record set is healthy based on one of the following:   By periodically sending a request to the endpoint that is specified in the health check   By aggregating the status of a specified group of health checks (calculated health checks)   By determining the current state of a CloudWatch alarm (CloudWatch metric health checks)   For more information, see How Amazon Route 53 Determines Whether an Endpoint Is Healthy. The HealthCheckId element is only useful when Amazon Route 53 is choosing between two or more resource record sets to respond to a DNS query, and you want Amazon Route 53 to base the choice in part on the status of a health check. Configuring health checks only makes sense in the following configurations:   You're checking the health of the resource record sets in a group of weighted, latency, geolocation, or failover resource record sets, and you specify health check IDs for all of the resource record sets. If the health check for one resource record set specifies an endpoint that is not healthy, Amazon Route 53 stops responding to queries using the value for that resource record set.   You set EvaluateTargetHealth to true for the resource record sets in a group of alias, weighted alias, latency alias, geolocation alias, or failover alias resource record sets, and you specify health check IDs for all of the resource record sets that are referenced by the alias resource record sets.    Amazon Route 53 doesn't check the health of the endpoint specified in the resource record set, for example, the endpoint specified by the IP address in the Value element. When you add a HealthCheckId element to a resource record set, Amazon Route 53 checks the health of the endpoint that you specified in the health check.   For geolocation resource record sets, if an endpoint is unhealthy, Amazon Route 53 looks for a resource record set for the larger, associated geographic region. For example, suppose you have resource record sets for a state in the United States, for the United States, for North America, and for all locations. If the endpoint for the state resource record set is unhealthy, Amazon Route 53 checks the resource record sets for the United States, for North America, and for all locations (a resource record set for which the value of CountryCode is *), in that order, until it finds a resource record set for which the endpoint is healthy.  If your health checks specify the endpoint only by domain name, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of FullyQualifiedDomainName, specify the domain name of the server (such as us-east-2-www.example.com), not the name of the resource record sets (example.com).  n this configuration, if you create a health check for which the value of FullyQualifiedDomainName matches the name of the resource record sets and then associate the health check with those resource record sets, health check results will be unpredictable.  For more information, see the following topics in the Amazon Route 53 Developer Guide:    Amazon Route 53 Health Checks and DNS Failover     Configuring Failover in a Private Hosted Zone   
     */
    HealthCheckId?: HealthCheckId;
    /**
     * When you create a traffic policy instance, Amazon Route 53 automatically creates a resource record set. TrafficPolicyInstanceId is the ID of the traffic policy instance that Amazon Route 53 created this resource record set for.  To delete the resource record set that is associated with a traffic policy instance, use DeleteTrafficPolicyInstance. Amazon Route 53 will delete the resource record set automatically. If you delete the resource record set by using ChangeResourceRecordSets, Amazon Route 53 doesn't automatically delete the traffic policy instance, and you'll continue to be charged for it even though it's no longer in use.  
     */
    TrafficPolicyInstanceId?: TrafficPolicyInstanceId;
  }
  export type ResourceRecordSetFailover = "PRIMARY"|"SECONDARY"|string;
  export type ResourceRecordSetIdentifier = string;
  export type ResourceRecordSetMultiValueAnswer = boolean;
  export type ResourceRecordSetRegion = "us-east-1"|"us-east-2"|"us-west-1"|"us-west-2"|"ca-central-1"|"eu-west-1"|"eu-west-2"|"eu-central-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-northeast-1"|"ap-northeast-2"|"sa-east-1"|"cn-north-1"|"ap-south-1"|string;
  export type ResourceRecordSetWeight = number;
  export type ResourceRecordSets = ResourceRecordSet[];
  export type ResourceRecords = ResourceRecord[];
  export interface ResourceTagSet {
    /**
     * The type of the resource.   The resource type for health checks is healthcheck.   The resource type for hosted zones is hostedzone.  
     */
    ResourceType?: TagResourceType;
    /**
     * The ID for the specified resource.
     */
    ResourceId?: TagResourceId;
    /**
     * The tags associated with the specified resource.
     */
    Tags?: TagList;
  }
  export type ResourceTagSetList = ResourceTagSet[];
  export type ResourceURI = string;
  export type SearchString = string;
  export type Statistic = "Average"|"Sum"|"SampleCount"|"Maximum"|"Minimum"|string;
  export type Status = string;
  export interface StatusReport {
    /**
     * A description of the status of the health check endpoint as reported by one of the Amazon Route 53 health checkers.
     */
    Status?: Status;
    /**
     * The date and time that the health checker performed the health check in ISO 8601 format and Coordinated Universal Time (UTC). For example, the value 2017-03-27T17:48:16.751Z represents March 27, 2017 at 17:48:16.751 UTC.
     */
    CheckedTime?: TimeStamp;
  }
  export type SubnetMask = string;
  export type TTL = number;
  export interface Tag {
    /**
     * The value of Key depends on the operation that you want to perform:    Add a tag to a health check or hosted zone: Key is the name that you want to give the new tag.    Edit a tag: Key is the name of the tag that you want to change the Value for.     Delete a key: Key is the name of the tag you want to remove.    Give a name to a health check: Edit the default Name tag. In the Amazon Route 53 console, the list of your health checks includes a Name column that lets you see the name that you've given to each health check.  
     */
    Key?: TagKey;
    /**
     * The value of Value depends on the operation that you want to perform:    Add a tag to a health check or hosted zone: Value is the value that you want to give the new tag.    Edit a tag: Value is the new value that you want to assign the tag.  
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export type TagResourceId = string;
  export type TagResourceIdList = TagResourceId[];
  export type TagResourceType = "healthcheck"|"hostedzone"|string;
  export type TagValue = string;
  export interface TestDNSAnswerRequest {
    /**
     * The ID of the hosted zone that you want Amazon Route 53 to simulate a query for.
     */
    HostedZoneId: ResourceId;
    /**
     * The name of the resource record set that you want Amazon Route 53 to simulate a query for.
     */
    RecordName: DNSName;
    /**
     * The type of the resource record set.
     */
    RecordType: RRType;
    /**
     * If you want to simulate a request from a specific DNS resolver, specify the IP address for that resolver. If you omit this value, TestDnsAnswer uses the IP address of a DNS resolver in the AWS US East (N. Virginia) Region (us-east-1).
     */
    ResolverIP?: IPAddress;
    /**
     * If the resolver that you specified for resolverip supports EDNS0, specify the IPv4 or IPv6 address of a client in the applicable location, for example, 192.0.2.44 or 2001:db8:85a3::8a2e:370:7334.
     */
    EDNS0ClientSubnetIP?: IPAddress;
    /**
     * If you specify an IP address for edns0clientsubnetip, you can optionally specify the number of bits of the IP address that you want the checking tool to include in the DNS query. For example, if you specify 192.0.2.44 for edns0clientsubnetip and 24 for edns0clientsubnetmask, the checking tool will simulate a request from 192.0.2.0/24. The default value is 24 bits for IPv4 addresses and 64 bits for IPv6 addresses.
     */
    EDNS0ClientSubnetMask?: SubnetMask;
  }
  export interface TestDNSAnswerResponse {
    /**
     * The Amazon Route 53 name server used to respond to the request.
     */
    Nameserver: Nameserver;
    /**
     * The name of the resource record set that you submitted a request for.
     */
    RecordName: DNSName;
    /**
     * The type of the resource record set that you submitted a request for.
     */
    RecordType: RRType;
    /**
     * A list that contains values that Amazon Route 53 returned for this resource record set.
     */
    RecordData: RecordData;
    /**
     * A code that indicates whether the request is valid or not. The most common response code is NOERROR, meaning that the request is valid. If the response is not valid, Amazon Route 53 returns a response code that describes the error. For a list of possible response codes, see DNS RCODES on the IANA website. 
     */
    ResponseCode: DNSRCode;
    /**
     * The protocol that Amazon Route 53 used to respond to the request, either UDP or TCP. 
     */
    Protocol: TransportProtocol;
  }
  export type Threshold = number;
  export type TimeStamp = Date;
  export type TrafficPolicies = TrafficPolicy[];
  export interface TrafficPolicy {
    /**
     * The ID that Amazon Route 53 assigned to a traffic policy when you created it.
     */
    Id: TrafficPolicyId;
    /**
     * The version number that Amazon Route 53 assigns to a traffic policy. For a new traffic policy, the value of Version is always 1.
     */
    Version: TrafficPolicyVersion;
    /**
     * The name that you specified when you created the traffic policy.
     */
    Name: TrafficPolicyName;
    /**
     * The DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy to create a traffic policy instance.
     */
    Type: RRType;
    /**
     * The definition of a traffic policy in JSON format. You specify the JSON document to use for a new traffic policy in the CreateTrafficPolicy request. For more information about the JSON format, see Traffic Policy Document Format.
     */
    Document: TrafficPolicyDocument;
    /**
     * The comment that you specify in the CreateTrafficPolicy request, if any.
     */
    Comment?: TrafficPolicyComment;
  }
  export type TrafficPolicyComment = string;
  export type TrafficPolicyDocument = string;
  export type TrafficPolicyId = string;
  export interface TrafficPolicyInstance {
    /**
     * The ID that Amazon Route 53 assigned to the new traffic policy instance.
     */
    Id: TrafficPolicyInstanceId;
    /**
     * The ID of the hosted zone that Amazon Route 53 created resource record sets in.
     */
    HostedZoneId: ResourceId;
    /**
     * The DNS name, such as www.example.com, for which Amazon Route 53 responds to queries by using the resource record sets that are associated with this traffic policy instance. 
     */
    Name: DNSName;
    /**
     * The TTL that Amazon Route 53 assigned to all of the resource record sets that it created in the specified hosted zone.
     */
    TTL: TTL;
    /**
     * The value of State is one of the following values:  Applied  Amazon Route 53 has finished creating resource record sets, and changes have propagated to all Amazon Route 53 edge locations.  Creating  Amazon Route 53 is creating the resource record sets. Use GetTrafficPolicyInstance to confirm that the CreateTrafficPolicyInstance request completed successfully.  Failed  Amazon Route 53 wasn't able to create or update the resource record sets. When the value of State is Failed, see Message for an explanation of what caused the request to fail.  
     */
    State: TrafficPolicyInstanceState;
    /**
     * If State is Failed, an explanation of the reason for the failure. If State is another value, Message is empty.
     */
    Message: Message;
    /**
     * The ID of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.
     */
    TrafficPolicyId: TrafficPolicyId;
    /**
     * The version of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.
     */
    TrafficPolicyVersion: TrafficPolicyVersion;
    /**
     * The DNS type that Amazon Route 53 assigned to all of the resource record sets that it created for this traffic policy instance. 
     */
    TrafficPolicyType: RRType;
  }
  export type TrafficPolicyInstanceCount = number;
  export type TrafficPolicyInstanceId = string;
  export type TrafficPolicyInstanceState = string;
  export type TrafficPolicyInstances = TrafficPolicyInstance[];
  export type TrafficPolicyName = string;
  export type TrafficPolicySummaries = TrafficPolicySummary[];
  export interface TrafficPolicySummary {
    /**
     * The ID that Amazon Route 53 assigned to the traffic policy when you created it.
     */
    Id: TrafficPolicyId;
    /**
     * The name that you specified for the traffic policy when you created it.
     */
    Name: TrafficPolicyName;
    /**
     * The DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy to create a traffic policy instance.
     */
    Type: RRType;
    /**
     * The version number of the latest version of the traffic policy.
     */
    LatestVersion: TrafficPolicyVersion;
    /**
     * The number of traffic policies that are associated with the current AWS account.
     */
    TrafficPolicyCount: TrafficPolicyVersion;
  }
  export type TrafficPolicyVersion = number;
  export type TrafficPolicyVersionMarker = string;
  export type TransportProtocol = string;
  export interface UpdateHealthCheckRequest {
    /**
     * The ID for the health check for which you want detailed information. When you created the health check, CreateHealthCheck returned the ID in the response, in the HealthCheckId element.
     */
    HealthCheckId: HealthCheckId;
    /**
     * A sequential counter that Amazon Route 53 sets to 1 when you create a health check and increments by 1 each time you update settings for the health check. We recommend that you use GetHealthCheck or ListHealthChecks to get the current value of HealthCheckVersion for the health check that you want to update, and that you include that value in your UpdateHealthCheck request. This prevents Amazon Route 53 from overwriting an intervening update:   If the value in the UpdateHealthCheck request matches the value of HealthCheckVersion in the health check, Amazon Route 53 updates the health check with the new settings.   If the value of HealthCheckVersion in the health check is greater, the health check was changed after you got the version number. Amazon Route 53 does not update the health check, and it returns a HealthCheckVersionMismatch error.  
     */
    HealthCheckVersion?: HealthCheckVersion;
    /**
     * The IPv4 or IPv6 IP address for the endpoint that you want Amazon Route 53 to perform health checks on. If you don't specify a value for IPAddress, Amazon Route 53 sends a DNS request to resolve the domain name that you specify in FullyQualifiedDomainName at the interval that you specify in RequestInterval. Using an IP address that is returned by DNS, Amazon Route 53 then checks the health of the endpoint. Use one of the following formats for the value of IPAddress:     IPv4 address: four values between 0 and 255, separated by periods (.), for example, 192.0.2.44.    IPv6 address: eight groups of four hexadecimal values, separated by colons (:), for example, 2001:0db8:85a3:0000:0000:abcd:0001:2345. You can also shorten IPv6 addresses as described in RFC 5952, for example, 2001:db8:85a3::abcd:1:2345.   If the endpoint is an EC2 instance, we recommend that you create an Elastic IP address, associate it with your EC2 instance, and specify the Elastic IP address for IPAddress. This ensures that the IP address of your instance never changes. For more information, see the applicable documentation:   Linux: Elastic IP Addresses (EIP) in the Amazon EC2 User Guide for Linux Instances    Windows: Elastic IP Addresses (EIP) in the Amazon EC2 User Guide for Windows Instances     If a health check already has a value for IPAddress, you can change the value. However, you can't update an existing health check to add or remove the value of IPAddress.   For more information, see UpdateHealthCheckRequest$FullyQualifiedDomainName. Constraints: Amazon Route 53 can't check the health of endpoints for which the IP address is in local, private, non-routable, or multicast ranges. For more information about IP addresses for which you can't create health checks, see the following documents:    RFC 5735, Special Use IPv4 Addresses     RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space     RFC 5156, Special-Use IPv6 Addresses   
     */
    IPAddress?: IPAddress;
    /**
     * The port on the endpoint on which you want Amazon Route 53 to perform health checks.
     */
    Port?: Port;
    /**
     * The path that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example the file /docs/route53-health-check.html.  Specify this value only if you want to change it.
     */
    ResourcePath?: ResourcePath;
    /**
     * Amazon Route 53 behavior depends on whether you specify a value for IPAddress.  If a health check already has a value for IPAddress, you can change the value. However, you can't update an existing health check to add or remove the value of IPAddress.    If you specify a value for IPAddress: Amazon Route 53 sends health check requests to the specified IPv4 or IPv6 address and passes the value of FullyQualifiedDomainName in the Host header for all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint on which you want Amazon Route 53 to perform health checks. When Amazon Route 53 checks the health of an endpoint, here is how it constructs the Host header:   If you specify a value of 80 for Port and HTTP or HTTP_STR_MATCH for Type, Amazon Route 53 passes the value of FullyQualifiedDomainName to the endpoint in the Host header.   If you specify a value of 443 for Port and HTTPS or HTTPS_STR_MATCH for Type, Amazon Route 53 passes the value of FullyQualifiedDomainName to the endpoint in the Host header.   If you specify another value for Port and any value except TCP for Type, Amazon Route 53 passes  FullyQualifiedDomainName:Port  to the endpoint in the Host header.   If you don't specify a value for FullyQualifiedDomainName, Amazon Route 53 substitutes the value of IPAddress in the Host header in each of the above cases.  If you don't specify a value for IPAddress: If you don't specify a value for IPAddress, Amazon Route 53 sends a DNS request to the domain that you specify in FullyQualifiedDomainName at the interval you specify in RequestInterval. Using an IPv4 address that is returned by DNS, Amazon Route 53 then checks the health of the endpoint.  If you don't specify a value for IPAddress, Amazon Route 53 uses only IPv4 to send health checks to the endpoint. If there's no resource record set with a type of A for the name that you specify for FullyQualifiedDomainName, the health check fails with a "DNS resolution failed" error.  If you want to check the health of weighted, latency, or failover resource record sets and you choose to specify the endpoint only by FullyQualifiedDomainName, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of FullyQualifiedDomainName, specify the domain name of the server (such as us-east-2-www.example.com), not the name of the resource record sets (www.example.com).  In this configuration, if the value of FullyQualifiedDomainName matches the name of the resource record sets and you then associate the health check with those resource record sets, health check results will be unpredictable.  In addition, if the value of Type is HTTP, HTTPS, HTTP_STR_MATCH, or HTTPS_STR_MATCH, Amazon Route 53 passes the value of FullyQualifiedDomainName in the Host header, as it does when you specify a value for IPAddress. If the value of Type is TCP, Amazon Route 53 doesn't pass a Host header.
     */
    FullyQualifiedDomainName?: FullyQualifiedDomainName;
    /**
     * If the value of Type is HTTP_STR_MATCH or HTTP_STR_MATCH, the string that you want Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Amazon Route 53 considers the resource healthy. (You can't change the value of Type when you update a health check.)
     */
    SearchString?: SearchString;
    /**
     * The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa. For more information, see How Amazon Route 53 Determines Whether an Endpoint Is Healthy in the Amazon Route 53 Developer Guide. If you don't specify a value for FailureThreshold, the default value is three health checks.
     */
    FailureThreshold?: FailureThreshold;
    /**
     * Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.
     */
    Inverted?: Inverted;
    /**
     * The number of child health checks that are associated with a CALCULATED health that Amazon Route 53 must consider healthy for the CALCULATED health check to be considered healthy. To specify the child health checks that you want to associate with a CALCULATED health check, use the ChildHealthChecks and ChildHealthCheck elements. Note the following:   If you specify a number greater than the number of child health checks, Amazon Route 53 always considers this health check to be unhealthy.   If you specify 0, Amazon Route 53 always considers this health check to be healthy.  
     */
    HealthThreshold?: HealthThreshold;
    /**
     * A complex type that contains one ChildHealthCheck element for each health check that you want to associate with a CALCULATED health check.
     */
    ChildHealthChecks?: ChildHealthCheckList;
    /**
     * Specify whether you want Amazon Route 53 to send the value of FullyQualifiedDomainName to the endpoint in the client_hello message during TLS negotiation. This allows the endpoint to respond to HTTPS health check requests with the applicable SSL/TLS certificate. Some endpoints require that HTTPS requests include the host name in the client_hello message. If you don't enable SNI, the status of the health check will be SSL alert handshake_failure. A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid. The SSL/TLS certificate on your endpoint includes a domain name in the Common Name field and possibly several more in the Subject Alternative Names field. One of the domain names in the certificate should match the value that you specify for FullyQualifiedDomainName. If the endpoint responds to the client_hello message with a certificate that does not include the domain name that you specified in FullyQualifiedDomainName, a health checker will retry the handshake. In the second attempt, the health checker will omit FullyQualifiedDomainName from the client_hello message.
     */
    EnableSNI?: EnableSNI;
    /**
     * A complex type that contains one Region element for each region that you want Amazon Route 53 health checkers to check the specified endpoint from.
     */
    Regions?: HealthCheckRegionList;
    AlarmIdentifier?: AlarmIdentifier;
    /**
     * When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:    Healthy: Amazon Route 53 considers the health check to be healthy.    Unhealthy: Amazon Route 53 considers the health check to be unhealthy.    LastKnownStatus: Amazon Route 53 uses the status of the health check from the last time CloudWatch had sufficient data to determine the alarm state. For new health checks that have no last known status, the default status for the health check is healthy.  
     */
    InsufficientDataHealthStatus?: InsufficientDataHealthStatus;
    /**
     * A complex type that contains one ResetElement element for each element that you want to reset to the default value. Valid values for ResetElement include the following:    ChildHealthChecks: Amazon Route 53 resets HealthCheckConfig$ChildHealthChecks to null.    FullyQualifiedDomainName: Amazon Route 53 resets HealthCheckConfig$FullyQualifiedDomainName to null.    Regions: Amazon Route 53 resets the HealthCheckConfig$Regions list to the default set of regions.     ResourcePath: Amazon Route 53 resets HealthCheckConfig$ResourcePath to null.  
     */
    ResetElements?: ResettableElementNameList;
  }
  export interface UpdateHealthCheckResponse {
    HealthCheck: HealthCheck;
  }
  export interface UpdateHostedZoneCommentRequest {
    /**
     * The ID for the hosted zone that you want to update the comment for.
     */
    Id: ResourceId;
    /**
     * The new comment for the hosted zone. If you don't specify a value for Comment, Amazon Route 53 deletes the existing value of the Comment element, if any.
     */
    Comment?: ResourceDescription;
  }
  export interface UpdateHostedZoneCommentResponse {
    HostedZone: HostedZone;
  }
  export interface UpdateTrafficPolicyCommentRequest {
    /**
     * The value of Id for the traffic policy that you want to update the comment for.
     */
    Id: TrafficPolicyId;
    /**
     * The value of Version for the traffic policy that you want to update the comment for.
     */
    Version: TrafficPolicyVersion;
    /**
     * The new comment for the specified traffic policy and version.
     */
    Comment: TrafficPolicyComment;
  }
  export interface UpdateTrafficPolicyCommentResponse {
    /**
     * A complex type that contains settings for the specified traffic policy.
     */
    TrafficPolicy: TrafficPolicy;
  }
  export interface UpdateTrafficPolicyInstanceRequest {
    /**
     * The ID of the traffic policy instance that you want to update.
     */
    Id: TrafficPolicyInstanceId;
    /**
     * The TTL that you want Amazon Route 53 to assign to all of the updated resource record sets.
     */
    TTL: TTL;
    /**
     * The ID of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.
     */
    TrafficPolicyId: TrafficPolicyId;
    /**
     * The version of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.
     */
    TrafficPolicyVersion: TrafficPolicyVersion;
  }
  export interface UpdateTrafficPolicyInstanceResponse {
    /**
     * A complex type that contains settings for the updated traffic policy instance.
     */
    TrafficPolicyInstance: TrafficPolicyInstance;
  }
  export interface VPC {
    /**
     * (Private hosted zones only) The region in which you created an Amazon VPC.
     */
    VPCRegion?: VPCRegion;
    VPCId?: VPCId;
  }
  export type VPCId = string;
  export type VPCRegion = "us-east-1"|"us-east-2"|"us-west-1"|"us-west-2"|"eu-west-1"|"eu-west-2"|"eu-central-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-south-1"|"ap-northeast-1"|"ap-northeast-2"|"sa-east-1"|"ca-central-1"|"cn-north-1"|string;
  export type VPCs = VPC[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2013-04-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Route53 client.
   */
  export import Types = Route53;
}
export = Route53;
