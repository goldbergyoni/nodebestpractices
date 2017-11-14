# Changelog for AWS SDK for JavaScript
<!--LATEST=2.141.0-->
<!--ENTRYINSERT-->

## 2.141.0
* feature: CloudFront: You can now specify additional options for MinimumProtocolVersion, which controls the SSL/TLS protocol that CloudFront uses to communicate with viewers. The minimum protocol version that you choose also determines the ciphers that CloudFront uses to encrypt the content that it returns to viewers.
* feature: EC2: You are now able to create and launch EC2 P3 instance, next generation GPU instances, optimized for machine learning and high performance computing applications. With up to eight NVIDIA Tesla V100 GPUs, P3 instances provide up to one petaflop of mixed-precision, 125 teraflops of single-precision, and 62 teraflops of double-precision floating point performance, as well as a 300 GB/s second-generation NVLink interconnect that enables high-speed, low-latency GPU-to-GPU communication. P3 instances also feature up to 64 vCPUs based on custom Intel Xeon E5 (Broadwell) processors, 488 GB of DRAM, and 25 Gbps of dedicated aggregate network bandwidth using the Elastic Network Adapter (ENA).

## 2.140.0
* feature: ConfigService: AWS Config support for CodeBuild Project resource type
* feature: ElastiCache: Amazon ElastiCache for Redis today announced support for data encryption both for data in-transit and data at-rest. The new encryption in-transit functionality enables ElastiCache for Redis customers to encrypt data for all communication between clients and Redis engine, and all intra-cluster Redis communication. The encryption at-rest functionality allows customers to encrypt their S3 based backups. Customers can begin using the new functionality by simply enabling this functionality via AWS console, and a small configuration change in their Redis clients. The ElastiCache for Redis service automatically manages life cycle of the certificates required for encryption, including the issuance, renewal and expiration of certificates. Additionally, as part of this launch, customers will gain the ability to start using the Redis AUTH command that provides an added level of authentication.
* feature: Glue: AWS Glue: Adding a new API, BatchStopJobRun, to stop one or more job runs for a specified Job. 
* feature: Pinpoint: Added support for APNs VoIP messages. Added support for collapsible IDs, message priority, and TTL for APNs and FCM/GCM.

## 2.139.0
* feature: Organizations: This release supports integrating other AWS services with AWS Organizations through the use of an IAM service-linked role called AWSServiceRoleForOrganizations. Certain operations automatically create that role if it does not already exist.

## 2.138.0
* feature: EC2: Adding pagination support for DescribeSecurityGroups for EC2 Classic and VPC Security Groups

## 2.137.0
* feature: SQS: Added support for tracking cost allocation by adding, updating, removing, and listing the metadata tags of Amazon SQS queues.
* feature: SSM: EC2 Systems Manager versioning support for Parameter Store. Also support for referencing parameter versions in SSM Documents.

## 2.136.0
* feature: Lightsail: This release adds support for Windows Server-based Lightsail instances. The GetInstanceAccessDetails API now returns the password of your Windows Server-based instance when using the default key pair. GetInstanceAccessDetails also returns a PasswordData object for Windows Server instances containing the ciphertext and keyPairName. The Blueprint data type now includes a list of platform values (LINUX_UNIX or WINDOWS). The Bundle data type now includes a list of SupportedPlatforms values (LINUX_UNIX or WINDOWS).

## 2.135.0
* feature: ES: This release adds support for VPC access to Amazon Elasticsearch Service.

## 2.134.0
* feature: CORS: The LexModelBuildingService supports CORS. This change adds the service to the browser version of the SDK by default.
* feature: EC2: You can now change the tenancy of your VPC from dedicated to default with a single API operation. For more details refer to the documentation for changing VPC tenancy.
* feature: ES: AWS Elasticsearch adds support for enabling slow log publishing. Using slow log publishing options customers can configure and enable index/query slow log publishing of their domain to preferred AWS Cloudwatch log group.
* feature: RDS: Adds waiters for DBSnapshotAvailable and DBSnapshotDeleted.
* feature: WAF: This release adds support for regular expressions as match conditions in rules, and support for geographical location by country of request IP address as a match condition in rules.
* feature: WAFRegional: This release adds support for regular expressions as match conditions in rules, and support for geographical location by country of request IP address as a match condition in rules.

## 2.133.0
* feature: CodeCommit: This release includes the DeleteBranch API and a change to the contents of a Commit object.
* feature: DMS: This change includes addition of new optional parameter to an existing API
* feature: ElasticBeanstalk: Added the ability to add, delete or update Tags
* feature: Polly: Amazon Polly exposes two new voices: "Matthew" (US English) and "Takumi" (Japanese)
* feature: RDS: You can now call DescribeValidDBInstanceModifications to learn what modifications you can make to your DB instance. You can use this information when you call ModifyDBInstance.

## 2.132.0
* feature: ECR: Adds support for new API set used to manage Amazon ECR repository lifecycle policies. Amazon ECR lifecycle policies enable you to specify the lifecycle management of images in a repository. The configuration is a set of one or more rules, where each rule defines an action for Amazon ECR to apply to an image. This allows the automation of cleaning up unused images, for example expiring images based on age or status. A lifecycle policy preview API is provided as well, which allows you to see the impact of a lifecycle policy on an image repository before you execute it
* feature: SES: Added content related to email template management and templated email sending operations.

## 2.131.0
* feature: EC2: This release includes updates to AWS Virtual Private Gateway.
* feature: ELBv2: Server Name Indication (SNI) is an extension to the TLS protocol by which a client indicates the hostname to connect to at the start of the TLS handshake. The load balancer can present multiple certificates through the same secure listener, which enables it to support multiple secure websites using a single secure listener. Application Load Balancers also support a smart certificate selection algorithm with SNI. If the hostname indicated by a client matches multiple certificates, the load balancer determines the best certificate to use based on multiple factors including the capabilities of the client.
* feature: OpsWorksCM: Provide engine specific information for node associations.

## 2.130.0
* feature: ConfigService: Revert: Added missing enumeration values for ConfigurationItemStatus

## 2.129.0
* feature: ConfigService: Added missing enumeration values for ConfigurationItemStatus

## 2.128.0
* feature: Redshift: DescribeEventSubscriptions API supports tag keys and tag values as request parameters. 

## 2.127.0
* feature: KinesisAnalytics: Kinesis Analytics now supports schema discovery on objects in S3.  Additionally, Kinesis Analytics now supports input data preprocessing through Lambda.
* feature: Route53Domains: Added a new API that checks whether a domain name can be transferred to Amazon Route 53.

## 2.126.0
* feature: EC2: This release includes service updates to AWS VPN.
* feature: SSM: EC2 Systems Manager support for tagging SSM Documents. Also support for tag-based permissions to restrict access to SSM Documents based on these tags.

## 2.125.0
* feature: AppStream: Includes APIs for managing and accessing image builders, and deleting images.
* feature: CodeBuild: Adding support for Building GitHub Pull Requests in AWS CodeBuild
* feature: MTurk: Today, Amazon Mechanical Turk (MTurk) supports SQS Notifications being delivered to Customers' SQS queues when different stages of the MTurk workflow are complete.  We are going to create new functionality so that Customers can leverage SNS topics as a destination for notification messages when various stages of the MTurk workflow are complete. 
* feature: Organizations: This release flags the HandshakeParty structure's Type and Id fields as 'required'. They effectively were required in the past, as you received an error if you did not include them. This is now reflected at the API definition level. 
* feature: Route53: This change allows customers to reset elements of health check.

## 2.124.0
* feature: Pinpoint: Added two new push notification channels: Amazon Device Messaging (ADM) and, for push notification support in China, Baidu Cloud Push. Added support for APNs auth via .p8 key file. Added operation for direct message deliveries to user IDs, enabling you to message an individual user on multiple endpoints.

## 2.123.0
* feature: CloudFormation: You can now prevent a stack from being accidentally deleted by enabling termination protection on the stack. If you attempt to delete a stack with termination protection enabled, the deletion fails and the stack, including its status, remains unchanged. You can enable termination protection on a stack when you create it. Termination protection on stacks is disabled by default. After creation, you can set termination protection on a stack whose status is CREATE_COMPLETE, UPDATE_COMPLETE, or UPDATE_ROLLBACK_COMPLETE.

## 2.122.0
* feature: ConfigService: AWS Config support for DynamoDB tables and Auto Scaling resource types
* feature: ECS: Amazon ECS users can now add and drop Linux capabilities to their containers through the use of docker's cap-add and cap-drop features. Customers can specify the capabilities they wish to add or drop for each container in their task definition. 

## 2.121.0
* feature: Budgets: Including "DuplicateRecordException" in UpdateNotification and UpdateSubscriber. 
* feature: CloudWatchLogs: Adds support for associating LogGroups with KMS Keys.
* feature: EC2: Add EC2 APIs to copy Amazon FPGA Images (AFIs) within the same region and across multiple regions, delete AFIs, and modify AFI attributes. AFI attributes include name, description and granting/denying other AWS accounts to load the AFI.

## 2.120.0
* feature: AppStream: API updates for supporting On-Demand fleets.
* feature: CodePipeline: This change includes a PipelineMetadata object that is part of the output from the GetPipeline API that includes the Pipeline ARN, created, and updated timestamp.
* feature: Greengrass: Reset Deployments feature allows you to clean-up the cloud resource so you can delete the group. It also cleans up the core so that it goes back to the pre-deployment state.
* feature: LexRuntime: Request attributes can be used to pass client specific information from the client to Amazon Lex as part of each request.
* feature: RDS: Introduces the --option-group-name parameter to the ModifyDBSnapshot CLI command. You can specify this parameter when you upgrade an Oracle DB snapshot. The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance.  For more information, see http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Oracle.html#USER_UpgradeDBInstance.Oracle.OGPG.OG

## 2.119.0
* feature: EC2: Fixed bug in EC2 clients preventing ElasticGpuSet from being set.

## 2.118.0
* feature: EC2: Amazon EC2 now lets you opt for Spot instances to be stopped in the event of an interruption instead of being terminated.  Your Spot request can be fulfilled again by restarting instances from a previously stopped state, subject to availability of capacity at or below your preferred price.  When you submit a persistent Spot request, you can choose from "terminate" or "stop" as the instance interruption behavior.  Choosing "stop" will shutdown your Spot instances so you can continue from this stopped state later on.  This feature is only available for instances with Amazon EBS volume as their root device.
* feature: IAM: A new API, DeleteServiceLinkedRole, submits a service-linked role deletion request and returns a DeletionTaskId, which you can use to check the status of the deletion.
* feature: SES: Amazon Simple Email Service (Amazon SES) now lets you customize the domains used for tracking open and click events. Previously, open and click tracking links referred to destinations hosted on domains operated by Amazon SES. With this feature, you can use your own branded domains for capturing open and click events.

## 2.117.0
* feature: APIGateway: Add a new enum "REQUEST" to '--type <value>' field in the current create-authorizer API, and make "identitySource" optional.

## 2.116.0
* bugfix: clock skew: put the updating clock skew logic to each service client instead of using global config
* feature: CodeBuild: Supporting Parameter Store in environment variables for AWS CodeBuild
* feature: ServiceCatalog: This release of Service Catalog adds API support to copy products.

## 2.115.0
* feature: AutoScaling: Customers can create Life Cycle Hooks at the time of creating Auto Scaling Groups through the CreateAutoScalingGroup API
* feature: CloudWatchEvents: Exposes ConcurrentModificationException as one of the valid exceptions for PutPermission and RemovePermission operation.
* feature: EC2: You are now able to create and launch EC2 x1e.32xlarge instance, a new EC2 instance in the X1 family, in us-east-1, us-west-2, eu-west-1, and ap-northeast-1. x1e.32xlarge offers 128 vCPUs, 3,904 GiB of DDR4 instance memory, high memory bandwidth, large L3 caches, and leading reliability capabilities to boost the performance and reliability of in-memory applications.

## 2.114.0
* feature: EC2: Fixed bug in EC2 clients preventing HostOfferingSet from being set

## 2.113.0
* feature: DeviceFarm: DeviceFarm has added support for two features - RemoteDebugging and Customer Artifacts. Customers  can now do remote Debugging on their Private Devices and can now retrieve custom files generated by their tests on the device and the device host (execution environment) on both public and private devices. 

## 2.112.0
* feature: CloudWatchLogs: Adds support for the PutResourcePolicy, DescribeResourcePolicy and DeleteResourcePolicy APIs.

## 2.111.0
* feature: EC2: With Tagging support, you can add Key and Value metadata to search, filter and organize your NAT Gateways according to your organization's needs.
* feature: ELBv2: The feature enables the new Network Load Balancer that is optimized to handle volatile traffic patterns while using a single static IP address per Availability Zone. Network Load Balancer operates at the connection level (Layer 4), routing connections to Amazon EC2 instances and containers, within Amazon Virtual Private Cloud (Amazon VPC) based on IP protocol data.
* feature: LexModelBuildingService: Amazon Lex provides the ability to export your Amazon Lex chatbot definition as a JSON file that can be added to the target platform. The JSON configuration file contains the structure of your Amazon Lex chatbot, including the intent schema with utterances, slots, prompts and slot-types.
* feature: Route53: You can configure Amazon Route 53 to log information about the DNS queries that Amazon Route 53 receives for your domains and subdomains. When you configure query logging, Amazon Route 53 starts to send logs to CloudWatch Logs. You can use various tools, including the AWS console, to access the query logs.

## 2.110.0
* feature: Budgets: Add an optional "thresholdType" to notifications to support percentage or absolute value thresholds.

## 2.109.0
* feature: CodeStar: Added support to tag CodeStar projects. Tags can be used to organize and find CodeStar projects on key-value pairs that you can choose. For example, you could add a tag with a key of "Release" and a value of "Beta" to projects your organization is working on for an upcoming beta release.

## 2.108.0
* feature: GameLift: GameLift VPC resources can be peered with any other AWS VPC. R4 memory-optimized instances now available to deploy.
* feature: Mobile: AWS Mobile Hub is an integrated experience designed to help developers build, test, configure and release cloud-based applications for mobile devices using Amazon Web Services. AWS Mobile Hub provides a console and API for developers, allowing them to quickly select desired features and integrate them into mobile applications. Features include NoSQL Database, Cloud Logic, Messaging and Analytics. With AWS Mobile Hub, you pay only for the underlying services that Mobile Hub provisions based on the features you choose in the Mobile Hub console.
* feature: SSM: Adding KMS encryption support to SSM Inventory Resource Data Sync. Exposes the ClientToken parameter on SSM StartAutomationExecution to provide idempotent execution requests.

## 2.107.0
* feature: CodeBuild: The AWS CodeBuild HTTP API now provides the BatchDeleteBuilds operation, which enables you to delete existing builds.
* feature: EC2: Descriptions for Security Group Rules enables customers to be able to define a description for ingress and egress security group rules . The Descriptions for Security Group Rules feature supports one description field per Security Group rule for both ingress and egress rules . Descriptions for Security Group Rules provides a simple way to describe the purpose or function of a Security Group Rule allowing for easier customer identification of configuration elements .      Prior to the release of Descriptions for Security Group Rules , customers had to maintain a separate system outside of AWS if they wanted to track Security Group Rule mapping and their purpose for being implemented. If a security group rule has already been created and you would like to update or change your description for that security group rule you can use the UpdateSecurityGroupRuleDescription API.
* feature: ELBv2: This change now allows Application Load Balancers to distribute traffic to AWS resources using their IP addresses as targets in addition to the instance IDs. You can also load balance to resources outside the VPC hosting the load balancer using their IP addresses as targets. This includes resources in peered VPCs, EC2-Classic, and on-premises locations reachable over AWS Direct Connect or a VPN connection.
* feature: LexModelBuildingService: Amazon Lex now supports synonyms for slot type values. If the user inputs a synonym, it will be resolved to the corresponding slot value.

## 2.106.0
* feature: ApplicationAutoScaling: Application Auto Scaling now supports the DisableScaleIn option for Target Tracking Scaling Policies. This allows customers to create scaling policies that will only add capacity to the target.
* feature: Organizations: The exception ConstraintViolationException now contains a new reason subcode MASTERACCOUNT_MISSING_CONTACT_INFO to make it easier to understand why attempting to remove an account from an Organization can fail. We also improved several other of the text descriptions and examples.

## 2.105.0
* feature: ConfigService: Increased the internal size limit of resourceId
* feature: EC2: Provides capability to add secondary CIDR blocks to a VPC.

## 2.104.0
* feature: CloudFormation: Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified.
* feature: GameLift: Update spelling of MatchmakingTicket status values for internal consistency.
* feature: RDS: Option group options now contain additional properties that identify requirements for certain options. Check these properties to determine if your DB instance must be in a VPC or have auto minor upgrade turned on before you can use an option. Check to see if you can downgrade the version of an option after you have installed it.

## 2.103.0
* feature: Rekognition: Update the enum value of LandmarkType and GenderType to be consistent with service response

## 2.102.0
* feature: SSM: Changes to associations in Systems Manager State Manager can now be recorded. Previously, when you edited associations, you could not go back and review older association settings. Now, associations are versioned, and can be named using human-readable strings, allowing you to see a trail of association changes. You can also perform rate-based scheduling, which allows you to schedule associations more granularly.

## 2.101.0
* feature: Firehose: This change will allow customers to attach a Firehose delivery stream to an existing Kinesis stream directly. You no longer need a forwarder to move data from a Kinesis stream to a Firehose delivery stream. You can now run your streaming applications on your Kinesis stream and easily attach a Firehose delivery stream to it for data delivery to S3, Redshift, or Elasticsearch concurrently.
* feature: Route53: Amazon Route 53 now supports CAA resource record type. A CAA record controls which certificate authorities are allowed to issue certificates for the domain or subdomain.

## 2.100.0
* feature: GameLift: The Matchmaking Grouping Service is a new feature that groups player match requests for a given game together into game sessions based on developer configured rules.

## 2.99.0
* feature: EC2: Fixed bug in EC2 clients preventing HostReservation from being set

## 2.98.0
* feature: Batch: This release enhances the DescribeJobs API to include the CloudWatch logStreamName attribute in ContainerDetail and ContainerDetailAttempt
* feature: CloudHSMV2: CloudHSM provides hardware security modules for protecting sensitive data and cryptographic keys within an EC2 VPC, and enable the customer to maintain control over key access and use. This is a second-generation of the service that will improve security, lower cost and provide better customer usability.
* feature: EFS: Customers can create encrypted EFS file systems and specify a KMS master key to encrypt it with.
* feature: Glue: AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy for customers to prepare and load their data for analytics. You can create and run an ETL job with a few clicks in the AWS Management Console. You simply point AWS Glue to your data stored on AWS, and AWS Glue discovers your data and stores the associated metadata (e.g. table definition and schema) in the AWS Glue Data Catalog. Once cataloged, your data is immediately searchable, queryable, and available for ETL. AWS Glue generates the code to execute your data transformations and data loading processes. AWS Glue generates Python code that is entirely customizable, reusable, and portable. Once your ETL job is ready, you can schedule it to run on AWS Glue's fully managed, scale-out Spark environment. AWS Glue provides a flexible scheduler with dependency resolution, job monitoring, and alerting. AWS Glue is serverless, so there is no infrastructure to buy, set up, or manage. It automatically provisions the environment needed to complete the job, and customers pay only for the compute resources consumed while running ETL jobs. With AWS Glue, data can be available for analytics in minutes.
* feature: MigrationHub: AWS Migration Hub provides a single location to track migrations across multiple AWS and partner solutions. Using Migration Hub allows you to choose the AWS and partner migration tools that best fit your needs, while providing visibility into the status of your entire migration portfolio. Migration Hub also provides key metrics and progress for individual applications, regardless of which tools are being used to migrate them. For example, you might use AWS Database Migration Service, AWS Server Migration Service, and partner migration tools to migrate an application comprised of a database, virtualized web servers, and a bare metal server. Using Migration Hub will provide you with a single screen that shows the migration progress of all the resources in the application. This allows you to quickly get progress updates across all of your migrations, easily identify and troubleshoot any issues, and reduce the overall time and effort spent on your migration projects. Migration Hub is available to all AWS customers at no additional charge. You only pay for the cost of the migration tools you use, and any resources being consumed on AWS. 
* feature: SSM: Systems Manager Maintenance Windows include the following changes or enhancements: New task options using Systems Manager Automation, AWS Lambda, and AWS Step Functions; enhanced ability to edit the targets of a Maintenance Window, including specifying a target name and description, and ability to edit the owner field; enhanced ability to edits tasks; enhanced support for Run Command parameters; and you can now use a --safe flag when attempting to deregister a target. If this flag is enabled when you attempt to deregister a target, the system returns an error if the target is referenced by any task. Also, Systems Manager now includes Configuration Compliance to scan your fleet of managed instances for patch compliance and configuration inconsistencies. You can collect and aggregate data from multiple AWS accounts and Regions, and then drill down into specific resources that aren't compliant.
* feature: StorageGateway: Add optional field ForceDelete to DeleteFileShare api.

## 2.97.0
* bugfix: REST-JSON serialization: Automatically add a content-type header of application/json to requests with a JSON body
* feature: CodeDeploy: Adds support for specifying Application Load Balancers in deployment groups, for both in-place and blue/green deployments.
* feature: CognitoIdentityServiceProvider: We have added support for features for Amazon Cognito User Pools that enable application developers to easily add and customize a sign-up and sign-in user experience, use OAuth 2.0, and integrate with Facebook, Google, Login with Amazon, and SAML-based identity providers.
* feature: EC2: Provides customers an opportunity to recover an EIP that was released

## 2.96.0
* feature: CloudDirectory: Enable BatchDetachPolicy
* feature: CodeBuild: Supporting Bitbucket as source type in AWS CodeBuild.

## 2.95.0
* bugfix: credentials: add typescript definition for resolvePromise()
* bugfix: typings: add readablestream type to clients that support streaming
* feature: ElasticBeanstalk: Add support for paginating the result of DescribeEnvironments     Include the ARN of described environments in DescribeEnvironments output

## 2.94.0
* feature: CodeDeploy: AWS CodeDeploy now supports the use of multiple tag groups in a single deployment group (an intersection of tags) to identify the instances for a deployment. When you create or update a deployment group, use the new ec2TagSet and onPremisesTagSet structures to specify up to three groups of tags. Only instances that are identified by at least one tag in each of the tag groups are included in the deployment group.
* feature: ConfigService: Added new API, GetDiscoveredResourceCounts, which returns the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in the given region for your AWS account.
* feature: EC2: Ec2 SpotInstanceRequestFulfilled waiter update
* feature: ELBv2: Add TargetInService and TargetDeregistered waiters 
* feature: Pinpoint: This release of the Pinpoint SDK enables App management - create, delete, update operations, Raw Content delivery for APNs and GCM campaign messages and From Address override.
* feature: SES: This update adds information about publishing email open and click events. This update also adds information about publishing email events to Amazon Simple Notification Service (Amazon SNS).

## 2.93.0
* feature: DynamoDB: Add a `wrapNumbers` option to the Document Client to direct the client not to convert number attributes to JavaScript numbers.
* feature: Inspector: Inspector's StopAssessmentRun API has been updated with a new input option - stopAction. This request parameter can be set to either START_EVALUATION or SKIP_EVALUATION. START_EVALUATION (the default value, and the previous behavior) stops the AWS agent data collection and begins the results evaluation for findings generation based on the data collected so far. SKIP_EVALUATION cancels the assessment run immediately, after which no findings are generated.
* feature: SSM: Adds a SendAutomationSignal API to SSM Service. This API is used to send a signal to an automation execution to change the current behavior or status of the execution.

## 2.92.0
* feature: EC2: The CreateDefaultVPC API enables you to create a new default VPC . You no longer need to contact AWS support, if your default VPC has been deleted.
* feature: KinesisAnalytics: Added additional exception types and clarified documentation.

## 2.91.0
* feature: CloudWatch: This release adds high resolution features to CloudWatch, with support for Custom Metrics down to 1 second and Alarms down to 10 seconds.
* feature: EC2: Amazon EC2 Elastic GPUs allow you to easily attach low-cost graphics acceleration to current generation EC2 instances. With Amazon EC2 Elastic GPUs, you can configure the right amount of graphics acceleration to your particular workload without being constrained by fixed hardware configurations and limited GPU selection.

## 2.90.0
* feature: CloudDirectory: Cloud Directory adds support for additional batch operations.
* feature: CloudFormation: AWS CloudFormation StackSets enables you to manage stacks across multiple accounts and regions.

## 2.89.0
* feature: AppStream: Amazon AppStream 2.0 image builders and fleets can now access applications and network resources that rely on Microsoft Active Directory (AD) for authentication and permissions. This new feature allows you to join your streaming instances to your AD, so you can use your existing AD user management tools. 
* feature: EC2: Spot Fleet tagging capability allows customers to automatically tag instances launched by Spot Fleet. You can use this feature to label or distinguish instances created by distinct Spot Fleets. Tagging your EC2 instances also enables you to see instance cost allocation by tag in your AWS bill.

## 2.88.0
* feature: EMR: Amazon EMR now includes the ability to use a custom Amazon Linux AMI and adjustable root volume size when launching a cluster.

## 2.87.0
* feature: Budgets: Update budget Management API's to list/create/update RI_UTILIZATION type budget. Update budget Management API's to support DAILY timeUnit for RI_UTILIZATION type budget.

## 2.86.0
* feature: CognitoIdentityServiceProvider: Allows developers to configure user pools for email/phone based signup and sign-in.
* feature: Lambda: Lambda@Edge lets you run code closer to your end users without provisioning or managing servers. With Lambda@Edge, your code runs in AWS edge locations, allowing you to respond to your end users at the lowest latency. Your code is triggered by Amazon CloudFront events, such as requests to and from origin servers and viewers, and it is ready to execute at every AWS edge location whenever a request for content is received. You just upload your Node.js code to AWS Lambda and Lambda takes care of everything required to run and scale your code with high availability. You only pay for the compute time you consume - there is no charge when your code is not running.

## 2.85.0
* feature: Discovery: Adding feature to the Export API for Discovery Service to allow filters for the export task to allow export based on per agent id.
* feature: EC2: New EC2 GPU Graphics instance

## 2.84.0
* bugfix: S3: Updates S3 client to no longer attempt to determine a bucket's region when a request is aborted.
* feature: APIGateway: Adds support for management of gateway responses.
* feature: EC2: X-ENI (or Cross-Account ENI) is a new feature that allows the attachment or association of Elastic Network Interfaces (ENI) between VPCs in different AWS accounts located in the same availability zone. With this new capability, service providers and partners can deliver managed solutions in a variety of new architectural patterns where the provider and consumer of the service are in different AWS accounts.

## 2.83.0
* feature: AutoScaling: Auto Scaling now supports a new type of scaling policy called target tracking scaling policies that you can use to set up dynamic scaling for your application.

## 2.82.0
* feature: DirectoryService: You can now improve the resilience and performance of your Microsoft AD directory by deploying additional domain controllers. Added UpdateNumberofDomainControllers API that allows you to update the number of domain controllers you want for your directory, and DescribeDomainControllers API that allows you to describe the detailed information of each domain controller of your directory. Also added the 'DesiredNumberOfDomainControllers' field to the DescribeDirectories API output for Microsoft AD.
* feature: KMS: This release of AWS Key Management Service introduces the ability to determine whether a key is AWS managed or customer managed.
* feature: Kinesis: You can now encrypt your data at rest within an Amazon Kinesis Stream using server-side encryption. Server-side encryption via AWS KMS makes it easy for customers to meet strict data management requirements by encrypting their data at rest within the Amazon Kinesis Streams, a fully managed real-time data processing service.
* feature: SSM: Amazon EC2 Systems Manager now expands Patching support to Amazon Linux, Red Hat and Ubuntu in addition to the already supported Windows Server.

## 2.81.0
* bugfix: Core: The SDK will now throw an InvalidHeader error when a header's value is not stringifiable. See #1598.
* bugfix: apigateway: ApiGateway.getExports will no longer override user-supplied 'accepts' with 'application/json'
* feature: CloudWatch: We are excited to announce the availability of APIs and CloudFormation support for CloudWatch Dashboards. You can use the new dashboard APIs or CloudFormation templates to dynamically build and maintain dashboards to monitor your infrastructure and applications. There are four new dashboard APIs - PutDashboard, GetDashboard, DeleteDashboards, and ListDashboards APIs. PutDashboard is used to create a new dashboard or modify an existing one whereas GetDashboard is the API to get the details of a specific dashboard. ListDashboards and DeleteDashboards are used to get the names or delete multiple dashboards respectively. Getting started with dashboard APIs is similar to any other AWS APIs. The APIs can be accessed through AWS SDK or through CLI tools.
* feature: Route53: Bug fix for InvalidChangeBatch exception.

## 2.80.0
* feature: S3: API Update for S3: Adding Object Tagging Header to MultipartUpload Initialization

## 2.79.0
* bugfix: LexRuntime: Adds support for non-file streams as an input to postContent.
* feature: CloudWatchEvents: CloudWatch Events now allows different AWS accounts to share events with each other through a new resource called event bus. Event buses accept events from AWS services, other AWS accounts and PutEvents API calls. Currently all AWS accounts have one default event bus. To send events to another account, customers simply write rules to match the events of interest and attach an event bus in the receiving account as the target to the rule. The PutTargets API has been updated to allow adding cross account event buses as targets. In addition, we have released two new APIs - PutPermission and RemovePermission - that enables customers to add/remove permissions to their default event bus.
* feature: GameLift: Allow developers to download GameLift fleet creation logs to assist with debugging.
* feature: SSM: Adding Resource Data Sync support to SSM Inventory.  New APIs:  * CreateResourceDataSync - creates a new resource data sync configuration,  * ListResourceDataSync - lists existing resource data sync configurations,  * DeleteResourceDataSync - deletes an existing resource data sync configuration. 

## 2.78.0
* feature: ServiceCatalog: Proper tagging of resources is critical to post-launch operations such as billing, cost allocation, and resource management. By using Service Catalog's TagOption Library, administrators can define a library of re-usable TagOptions that conform to company standards, and associate these with Service Catalog portfolios and products. Learn how to move your current tags to the new library, create new TagOptions, and view and associate your library items with portfolios and products. Understand how to ensure that the right tags are created on products launched through Service Catalog and how to provide users with defined selectable tags.

## 2.77.0
* feature: Lambda: The Lambda Invoke API will now throw new exception InvalidRuntimeException (status code 502) for invokes with deprecated runtimes.

## 2.76.0
* feature: CodePipeline: A new API, ListPipelineExecutions, enables you to retrieve summary information about the most recent executions in a pipeline, including pipeline execution ID, status, start time, and last updated time. You can request information for a maximum of 100 executions. Pipeline execution data is available for the most recent 12 months of activity.
* feature: DMS: Added tagging for DMS certificates.
* feature: ELB: Add retry error state to InstanceInService waiter for ElasticLoadBalancer
* feature: Lightsail: This release adds a new nextPageToken property to the result of the GetOperationsForResource API. Developers can now get the next set of items in a list by making subsequent calls to GetOperationsForResource API with the token from the previous call. This release also deprecates the nextPageCount property, which previously returned null (use the nextPageToken property instead). This release also deprecates the customImageName property on the CreateInstancesRequest class, which was previously ignored by the API.
* feature: Route53: This release reintroduces the HealthCheckInUse exception.

## 2.75.0
* feature: DAX: Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement - from milliseconds to microseconds - even at millions of requests per second. DAX does all the heavy lifting required to add in-memory acceleration to your DynamoDB tables, without requiring developers to manage cache invalidation, data population, or cluster management.
* feature: Route53: Amazon Route 53 now supports multivalue answers in response to DNS queries, which lets you route traffic approximately randomly to multiple resources, such as web servers. Create one multivalue answer record for each resource and, optionally, associate an Amazon Route 53 health check with each record, and Amazon Route 53 responds to DNS queries with up to eight healthy records.
* feature: S3: Allows forward slashes in Bucket names when using SigV4 to create or retrieve objects. This is to maintain compatibility with behavior when using SigV2. In new code, Buckets should not contain forward slashes. Instead, directories should be part of an object's key.
* feature: SSM: Adding hierarchy support to the SSM Parameter Store API. Added support tor tagging. New APIs: GetParameter - retrieves one parameter, DeleteParameters - deletes multiple parameters (max number 10), GetParametersByPath - retrieves parameters located in the hierarchy. Updated APIs: PutParameter - added ability to enforce parameter value by applying regex (AllowedPattern), DescribeParameters - modified to support Tag filtering.
* feature: WAFRegional: You can now create, edit, update, and delete a new type of WAF rule with a rate tracking component.

## 2.74.0
* feature: WorkDocs: This release provides a new API to retrieve the activities performed by WorkDocs users.

## 2.73.0
* feature: Organizations: Improvements to Exception Modeling

## 2.72.0
* feature: XRay: Add a response time histogram to the services in response of GetServiceGraph API.

## 2.71.0
* feature: DynamoDB: Adds two new functions to the AWS.DynamoDB.Converter namespace: one to convert full DynamoDB items (such as what you might receive for events in a DynamoDB stream) into plain vanilla JavaScript objects and one to convert JavaScript objects back into DynamoDB items
* feature: EC2: Adds API to describe Amazon FPGA Images (AFIs) available to customers, which includes public AFIs, private AFIs that you own, and AFIs owned by other AWS accounts for which you have load permissions.
* feature: ECS: Added support for cpu, memory, and memory reservation container overrides on the RunTask and StartTask APIs.
* feature: Iot: Revert the last release: remove CertificatePem from DescribeCertificate API.
* feature: ServiceCatalog: Added ProvisioningArtifactSummaries to DescribeProductAsAdmin's output to show the provisioning artifacts belong to the product. Allow filtering by SourceProductId in SearchProductsAsAdmin for AWS Marketplace products. Added a verbose option to DescribeProvisioningArtifact to display the CloudFormation template used to create the provisioning artifact.Added DescribeProvisionedProduct API. Changed the type of ProvisionedProduct's Status to be distinct from Record's Status. New ProvisionedProduct's Status are AVAILABLE, UNDER_CHANGE, TAINTED, ERROR. Changed Record's Status set of values to CREATED, IN_PROGRESS, IN_PROGRESS_IN_ERROR, SUCCEEDED, FAILED.

## 2.70.0
* feature: ApplicationAutoScaling: Application Auto Scaling now supports automatic scaling of read and write throughput capacity for DynamoDB tables and global secondary indexes.

## 2.69.0
* feature: ConfigService: With this release AWS Config supports the Amazon CloudWatch alarm resource type.

## 2.68.0
* feature: RDS: API Update for RDS: this update enables copy-on-write, a new Aurora MySQL Compatible Edition feature that allows users to restore their database, and support copy of TDE enabled snapshot cross region.
* feature: S3: Switches S3 to use signatureVersion "v4" by default. To continue using signatureVersion "v2", set the signatureVersion: "v2" option in the S3 service client configuration. Presigned URLs will continue using "v2" by default.

## 2.67.0
* feature: EFS: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: OpsWorks: Tagging Support for AWS OpsWorks Stacks

## 2.66.0
* feature: Iot: In addition to using certificate ID, AWS IoT customers can now obtain the description of a certificate with the certificate PEM.
* feature: Pinpoint: Starting today Amazon Pinpoint adds SMS Text and Email Messaging support in addition to Mobile Push Notifications, providing developers, product managers and marketers with multi-channel messaging capabilities to drive user engagement in their applications. Pinpoint also enables backend services and applications to message users directly and provides advanced user and app analytics to understand user behavior and messaging performance.
* feature: Rekognition: API Update for AmazonRekognition: Adding RecognizeCelebrities API

## 2.65.0
* feature: CodeBuild: Add support to APIs for privileged containers. This change would allow performing privileged operations like starting the Docker daemon inside builds possible in custom docker images.
* feature: Greengrass: AWS Greengrass is software that lets you run local compute, messaging, and device state synchronization for connected devices in a secure way. With AWS Greengrass, connected devices can run AWS Lambda functions, keep device data in sync, and communicate with other devices securely even when not connected to the Internet. Using AWS Lambda, Greengrass ensures your IoT devices can respond quickly to local events, operate with intermittent connections, and minimize the cost of transmitting IoT data to the cloud.

## 2.64.0
* bugfix: S3: Calling send multiple times on an S3 ManagedUpload with leavePartsOnError set to true should no longer result in truncated files being uploaded to S3. Calling send multiple times is not supported with streams.
* feature: Iot: Update client side validation for SalesForce action.

## 2.63.0
* feature: AppStream: AppStream 2.0 Custom Security Groups allows you to easily control what network resources your streaming instances and images have access to. You can assign up to 5 security groups per Fleet to control the inbound and outbound network access to your streaming instances to specific IP ranges, network protocols, or ports.
* feature: AutoScaling: Autoscaling resource model update.
* feature: Iot:  Added Salesforce action to IoT Rules Engine.

## 2.62.0
* feature: KinesisAnalytics: Kinesis Analytics publishes error messages CloudWatch logs in case of application misconfigurations
* feature: WorkDocs: This release includes new APIs to manage tags and custom metadata on resources and also new APIs to add and retrieve comments at the document level.

## 2.61.0
* feature: CodeDeploy: AWS CodeDeploy has improved how it manages connections to GitHub accounts and repositories. You can now create and store up to 25 connections to GitHub accounts in order to associate AWS CodeDeploy applications with GitHub repositories. Each connection can support multiple repositories. You can create connections to up to 25 different GitHub accounts, or create more than one connection to a single account. The ListGitHubAccountTokenNames command has been introduced to retrieve the names of stored connections to GitHub accounts that you have created. The name of the connection to GitHub used for an AWS CodeDeploy application is also included in the ApplicationInfo structure.  Two new fields, lastAttemptedDeployment and lastSuccessfulDeployment, have been added to DeploymentGroupInfo to improve the handling of deployment group information in the AWS CodeDeploy console. Information about these latest deployments can also be retrieved using the GetDeploymentGroup and BatchGetDeployment group requests. Also includes a region update  (us-gov-west-1).
* feature: CognitoIdentityServiceProvider: Added support within Amazon Cognito User Pools for 1) a customizable hosted UI for user sign up and sign in and 2) integration of external identity providers.
* feature: ELBv2: Update the existing DescribeRules API to support pagination.

## 2.60.0
* bugfix: Core: Fixes issue where some TimeStamp shapes had an incorrect timestampFormat. Specifically affects S3.putBucketLifecycleConfiguration when using Date fields.
* feature: RDS: Amazon RDS customers can now easily and quickly stop and start their DB instances.

## 2.59.0
* bugfix: S3: Update ManagedUploader body verification to allow empty strings
* feature: CloudDirectory: Cloud Directory has launched support for Typed Links, enabling customers to create object-to-object relationships that are not hierarchical in nature. Typed Links enable customers to quickly query for data along these relationships. Customers can also enforce referential integrity using Typed Links, ensuring data in use is not inadvertently deleted.

## 2.58.0
* feature: AppStream: Support added for persistent user storage, backed by S3.
* feature: Rekognition: Updated the CompareFaces API response to include orientation information, unmatched faces, landmarks, pose, and quality of the compared faces.

## 2.57.0
* feature: IAM: The unique ID and access key lengths were extended from 32 to 128
* feature: STS: The unique ID and access key lengths were extended from 32 to 128.
* feature: StorageGateway: Two Storage Gateway data types, Tape and TapeArchive, each have a new response element, TapeUsedInBytes. This element helps you manage your virtual tapes. By using TapeUsedInBytes, you can see the amount of data written to each virtual tape.

## 2.56.0
* feature: DMS: This release adds support for using Amazon S3 and Amazon DynamoDB as targets for database migration, and using MongoDB as a source for database migration. For more information, see the AWS Database Migration Service documentation.

## 2.55.0
* bugfix: ReactNative: Requests will always have a Content-Type header if they also have a body. Works around an issue caused by React Native's Android XMLHttpRequest implementation that requires the Content-Type header to be present if there is a request body.
* feature: ResourceGroupsTaggingAPI: You can now specify the number of resources returned per page in GetResources operation, as an optional parameter, to easily manage the list of resources returned by your queries.

## 2.54.0
* feature: Athena: This release adds support for Amazon Athena. Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.
* feature: Lightsail: This release adds new APIs that make it easier to set network port configurations on Lightsail instances. Developers can now make a single request to both open and close public ports on an instance using the PutInstancePublicPorts operation.

## 2.53.0
* feature: Polly: Amazon Polly adds new German voice "Vicki"

## 2.52.0
* feature: CodeDeploy: This release introduces the previousRevision field in the responses to the GetDeployment and BatchGetDeployments actions. previousRevision provides information about the application revision that was deployed to the deployment group before the most recent successful deployment.  Also, the fileExistsBehavior parameter has been added for CreateDeployment action requests. In the past, if the AWS CodeDeploy agent detected files in a target location that weren't part of the application revision from the most recent successful deployment, it would fail the current deployment by default. This new parameter provides options for how the agent handles these files: fail the deployment, retain the content, or overwrite the content.
* feature: GameLift: Allow developers to specify how metrics are grouped in CloudWatch for their GameLift fleets. Developers can also specify how many concurrent game sessions activate on a per-instance basis.
* feature: Inspector: Adds ability to produce an assessment report that includes detailed and comprehensive results of a specified assessment run.

## 2.51.0
* feature: SSM: UpdateAssociation API now supports updating document name and targets of an association. GetAutomationExecution API can return FailureDetails as an optional field to the StepExecution Object, which contains failure type, failure stage as well as other failure related information for a failed step.

## 2.50.0
* bugfix: ReactNative: Fixes issue where binary responses were empty in iOS (e.g. s3.getObject)
* feature: ELB: Add a new API to allow customers to describe their account limits, such as load balancer limit, target group limit etc.
* feature: ELBv2: Add a new API to allow customers to describe their account limits, such as load balancer limit, target group limit etc.
* feature: LexModelBuildingService: Releasing new DeleteBotVersion, DeleteIntentVersion and DeleteSlotTypeVersion APIs.
* feature: Organizations: AWS Organizations APIs that return an Account object now include the email address associated with the account’s root user.
* bugfix: Request: Updates node.js request handling to obey socket read timeouts after response headers have been received. Previously timeouts were being ignored once headers were received, sometimes causing connections to hang.

## 2.49.0
* feature: ECS: Exposes container instance registration time in ECS:DescribeContainerInstances.
* feature: Lambda: Support for UpdateFunctionCode DryRun option
* feature: MarketplaceEntitlementService: AWS Marketplace Entitlement Service enables AWS Marketplace sellers to determine the capacity purchased by their customers.

## 2.48.0
* feature: CloudFormation: Adding back the removed waiters and paginators.

## 2.47.0
* feature: CloudFormation: API update for CloudFormation: New optional parameter ClientRequestToken which can be used as an idempotency token to safely retry certain operations as well as tagging StackEvents.
* feature: RDS: The DescribeDBClusterSnapshots API now returns a SourceDBClusterSnapshotArn field which identifies the source DB cluster snapshot of a copied snapshot.
* feature: React Native: Adds support for running the SDK in React Native. See the README for instructions.
* feature: Rekognition: Fix for missing file type check
* feature: SQS: Adding server-side encryption (SSE) support to SQS by integrating with AWS KMS; adding new queue attributes to SQS CreateQueue, SetQueueAttributes and GetQueueAttributes APIs to support SSE.
* feature: Snowball: The Snowball API has a new exception that can be thrown for list operation requests.

## 2.46.0
* bugfix: SharedIniFileCredentials: This fix reverts a regression introduced in version 2.44.0 in which the value returned by os.homedir would be used in preference over the value of the HOME environment variable
* feature: RDS: With Amazon Relational Database Service (Amazon RDS) running MySQL or Amazon Aurora, you can now authenticate to your DB instance using IAM database authentication.
* feature: RDS: Adds AWS.RDS.Signer class to generate auth tokens for connecting to a database.

## 2.45.0
* bugfix: Promise: Fixes an issue introduced in v2.44.0 where payload members on some CloudFront and S3 operations weren't hoisted when using promises. This issue was introduced in and could affect users that were accessing fields on a response that weren't documented, but were available for backwards compatibility.
* bugfix: Request: Make `$response` property of resolved promise value non-enumerable to prevent serialization errors
* feature: AppStream: The new feature named "Default Internet Access" will enable Internet access from AppStream 2.0 instances - image builders and fleet instances. Admins will check a flag either through AWS management console for AppStream 2.0 or through API while creating an image builder or while creating/updating a fleet.
* feature: Kinesis: Adds a new waiter, StreamNotExists, to Kinesis.

## 2.44.0
* feature: DeviceFarm: API Update for AWS Device Farm: Support for Deals and Promotions 
* feature: ELBv2: Adding LoadBalancersDeleted waiter for Elasticloadbalancingv2
* feature: EnvironmentVariable: Load config from ~/.aws/config if AWS_SDK_LOAD_CONFIG is set
* feature: EnvironmentVariable: Add support for specifying the location of the shared config file via the AWS_CONFIG_FILE environment variable. This variable is only honored if AWS_SDK_LOAD_CONFIG is set to a truthy value.
* feature: EnvironmentVariable: Add support for the AWS_SHARED_CREDENTIALS_FILE environment variable if AWS_SDK_LOAD_CONFIG is set
* feature: Promises: Binds response object to the data object with which successful request promises are resolved

## 2.43.0
* feature: APIGateway: Add support for "embed" property.
* feature: CodeStar: AWS CodeStar is a cloud-based service for creating, managing, and working with software development projects on AWS. An AWS CodeStar project creates and integrates AWS services for your project development toolchain. AWS CodeStar also manages the permissions required for project users.
* feature: EC2: Adds support for creating an Amazon FPGA Image (AFI) from a specified design checkpoint (DCP).
* feature: IAM: This changes introduces a new IAM role type, Service Linked Role, which works like a normal role but must be managed via services' control. 
* feature: Lambda: Lambda integration with CloudDebugger service to enable customers to enable tracing for the Lambda functions and send trace information to the CloudDebugger service.
* feature: LexModelBuildingService: Amazon Lex is a service for building conversational interfaces into any application using voice and text.
* feature: Polly: API Update for Amazon Polly: Add support for speech marks
* feature: Rekognition: Given an image, the API detects explicit or suggestive adult content in the image and returns a list of corresponding labels with confidence scores, as well as a taxonomy (parent-child relation) for each label.

## 2.42.0
* bugfix: Parser: Makes casting payload blobs to strings an exceptional behavior rather than the default
* feature: Lambda: You can use tags to group and filter your Lambda functions, making it easier to analyze them for billing allocation purposes. For more information, see Tagging Lambda Functions.  You can now write or upgrade your Lambda functions using Python version 3.6. For more information, see Programming Model for Authoring Lambda Functions in Python. Note: Features will be rolled out in the US regions on 4/19.

## 2.41.0
* feature: APIGateway: API Gateway request validators
* feature: Batch: API Update for AWS Batch: Customer provided AMI for MANAGED Compute Environment 
* feature: GameLift: Allows developers to utilize an improved workflow when calling our Queues API and introduces a new feature that allows developers to specify a maximum allowable latency per Queue.
* feature: OpsWorks: Cloudwatch Logs agent configuration can now be attached to OpsWorks Layers using CreateLayer and UpdateLayer. OpsWorks will then automatically install and manage the CloudWatch Logs agent on the instances part of the OpsWorks Layer.

## 2.40.0
* feature: Redshift: This update adds the GetClusterCredentials API which is used to get temporary login credentials to the cluster. AccountWithRestoreAccess now has a new member AccountAlias, this is the identifier of the AWS support account authorized to restore the specified snapshot. This is added to support the feature where the customer can share their snapshot with the Amazon Redshift Support Account without having to manually specify the AWS Redshift Service account ID on the AWS Console/API.

## 2.39.0
* feature: ElastiCache: ElastiCache added support for testing the Elasticache Multi-AZ feature with Automatic Failover.
* feature: Http: Adds a connectTimeout option that allows slow-to-establish socket connections to be quickly abandoned

## 2.38.0
* feature: CloudWatch: Amazon Web Services announced the immediate availability of two additional alarm configuration rules for Amazon CloudWatch Alarms. The first rule is for configuring missing data treatment. Customers have the options to treat missing data as alarm threshold breached, alarm threshold not breached, maintain alarm state and the current default treatment. The second rule is for alarms based on percentiles metrics that can trigger unnecassarily if the percentile is calculated from a small number of samples. The new rule can treat percentiles with low sample counts as same as missing data. If the first rule is enabled, the same treatment will be applied when an alarm encounters a percentile with low sample counts.

## 2.37.0
* feature: LexRuntime: Adds support to PostContent for speech input

## 2.36.0
* feature: CloudDirectory: ListObjectAttributes now supports filtering by facet.

## 2.35.0
* feature: CloudFormation: Adding paginators for ListExports and ListImports
* feature: CloudFront: Amazon CloudFront now supports user configurable HTTP Read and Keep-Alive Idle Timeouts for your Custom Origin Servers
* feature: ResourceGroupsTaggingAPI: Resource Groups Tagging APIs can help you organize your resources and enable you to simplify resource management, access management, and cost allocation.
* feature: StorageGateway: File gateway mode in AWS Storage gateway provides access to objects in S3 as files on a Network File System (NFS) mount point. Once a file share is created, any changes made externally to the S3 bucket will not be reflected by the gateway. Using the cache refresh feature in this update, the customer can trigger an on-demand scan of the keys in their S3 bucket and refresh the file namespace cached on the gateway. It takes as an input the fileShare ARN and refreshes the cache for only that file share. Additionally there is new functionality on file gateway that allows you configure what squash options they would like on their file share, this allows a customer to configure their gateway to not squash root permissions. This can be done by setting options in NfsOptions for CreateNfsFileShare and UpdateNfsFileShare APIs.

## 2.34.0
* features: Batch: Customers can now provide a retryStrategy as part of the RegisterJobDefinition and SubmitJob API calls.
* features: EC2: Customers can now tag their Amazon EC2 Instances and Amazon EBS Volumes at the time of their creation.

## 2.33.0
* feature: core: Adds support for 'v4' and 'v4-unsigned-body' authtype traits.
* bugfix: ManagedUpload: Ensures multi-part upload locations are URI-decoded to match single-part upload locations.

## 2.32.0
* feature: S3: Adds a means of specifying tags to apply to objects of any size uploaded with AWS.S3.ManagedUploader
* feature: ApplicationAutoScaling: Application AutoScaling is launching support for a new target resource (AppStream 2.0 Fleets) as a scalable target.

## 2.31.0
* feature: DynamoDB: Adds ability to customize retry delays for DynamoDB. This previously worked for all services except DynamoDB. Also adds jitter to DynamoDB retries. See `AWS.Config.retryDelayOptions` for more information.
* feature: Waiter: Allow customization of a waiter using a special `$waiter` key
* feature: Lambda: Adds support for new runtime Node.js v6.10 for AWS Lambda service. :tada:
* feature: ELBv2: Adding waiters for Elastic Load Balancing V2
* feature: Discovery: Adds export configuration options to the API.

## 2.30.0
* feature: DynamoDb: Allow objects with inheritance chains to be converted to MapAttributeValues instead of undefined
* bugfix: CredentialsError: Update AWS.Config.getCredentials to overwrite the name (in addition to message and code) of errors thrown by underlying credential providers.

## 2.29.0
* feature: protocol: The SDK can now support JSON-value string shapes in headers
* feature: Pinpoint: Added ability to segment endpoints by user attributes in addition to endpoint attributes.
* feature: Pinpoint: Added functionality to publish raw app analytics and campaign events data as events streams to Kinesis and Kinesis Firehose.
* feature: ELBv2: Adding waiters for LoadBalancers in ELBv2.
* feature: MarketplaceCommerceAnalytics: This update adds a new data set, us_sales_and_use_tax_records, which enables AWS Marketplace sellers to programmatically access to their U.S. Sales and Use Tax report data.

## 2.28.0
* feature: DeviceFarm: Network shaping allows users to simulate network connections and conditions while testing their Android, iOS, and web apps with AWS Device Farm.
* feature: CloudWatchEvents: This update extends Target Data Type for configuring Target behavior during invocation.

## 2.27.0
* bugfix: TemporaryCredentials: Ensure master credentials are not expired before using them to refresh temporary credentials
* feature: CodeDeploy: Add paginators for Codedeploy
* feature: EMR: This release includes support for instance fleets in Amazon EMR

## 2.26.0
* feature: APIGateway: API Gateway has added support for ACM certificates on custom domain names. Both Amazon-issued certificates and uploaded third-part certificates are supported.
* feature: CloudDirectory: Introduces a new Cloud Directory API that enables you to retrieve all available parent paths for any type of object (a node, leaf node, policy node, and index node) in a hierarchy.

## 2.25.0
* feature: WorkDocs: Amazon WorkDocs API provides full administrator level access to WorkDocs site resources, allowing developers to integrate their applications to manage WorkDocs users, content and permissions programmatically.

## 2.24.0
* feature: RDS: Add support to using encrypted clusters as cross-region replication masters. Update CopyDBClusterSnapshot API to support encrypted cross region copy of Aurora cluster snapshots.

## 2.23.0
* feature: Budgets: When creating or editing a budget via the AWS Budgets API you can define notifications that are sent to subscribers when the actual or forecasted value for cost or usage exceeds the notificationThreshold associated with the budget notification object. Starting today, the maximum allowed value for the notificationThreshold was raised from 100 to 300. This change was made to give you more flexibility when setting budget notifications.
* feature: OpsWorksCM: OpsWorks for Chef Automate has added a new field "AssociatePublicIpAddress" to the CreateServer request, "CloudFormationStackArn" to the Server model and "TERMINATED" server state.

## 2.22.0
* bugfix: MechanicalTurkRequester: Rename MechanicalTurkRequester to MTurk

## 2.21.0
* feature: DynamoDB: Time to Live (TTL) is a feature that allows you to define when items in a table expire and can be purged from the database, so that you don't have to track expired data and delete it manually. With TTL enabled on a DynamoDB table, you can set a timestamp for deletion on a per-item basis, allowing you to limit storage usage to only those records that are relevant.
* feature: DynamoDBStreams: Time to Live (TTL) is a feature that allows you to define when items in a table expire and can be purged from the database, so that you don't have to track expired data and delete it manually. With TTL enabled on a DynamoDB table, you can set a timestamp for deletion on a per-item basis, allowing you to limit storage usage to only those records that are relevant.
* feature: IAM: This release adds support for AWS Organizations service control policies (SCPs) to SimulatePrincipalPolicy operation. If there are SCPs associated with the simulated user's account, their effect on the result is captured in the OrganizationDecisionDetail element in the EvaluationResult.
* feature: MechanicalTurkRequester: Amazon Mechanical Turk is a web service that provides an on-demand, scalable, human workforce to complete jobs that humans can do better than computers, for example, recognizing objects in photos.
* feature: Organizations: AWS Organizations is a web service that enables you to consolidate your multiple AWS accounts into an organization and centrally manage your accounts and their resources.

## 2.20.0
* feature: ES: Added three new API calls to expose Amazon Elasticsearch imposed limits.

## 2.19.0
* bugfix: XHR: Fixes an issue where the callback provided to an operation would not fire if a request was aborted after being sent. The bug only affected the browser SDK.
* feature: S3: Added an instance method to S3 clients to create POST form data with presigned upload policies
* feature: DynamoDB: Expose DynamoDB DocumentClient marshaller/unmarshaller as AWS.DynamoDB.Converter

## 2.18.0
* feature: GameLift: Allow developers to configure global queues for creating GameSessions. Allow PlayerData on PlayerSessions to store player-specific data.
* feature: Route53: Added support for operations CreateVPCAssociationAuthorization and DeleteVPCAssociationAuthorization to throw a ConcurrentModification error when a conflicting modification occurs in parallel to the authorizations in place for a given hosted zone.
* feature: ElasticBeanstalk: Elastic Beanstalk adds support for creating and managing custom platform.

## 2.17.0
* bugfix: TypeScript: Enable the configuration credentials to be nulled so that the global config is not used.
* feature: EC2: Added the billingProduct parameter to the RegisterImage API.

## 2.16.0
* feature: DirectConnect: This update will introduce the ability for Direct Connect customers to take advantage of Link Aggregation (LAG). This allows you to bundle many individual physical interfaces into a single logical interface, referred to as a LAG. This makes administration much simpler as the majority of configuration is done on the LAG while you are free to add or remove physical interfaces from the bundle as bandwidth demand increases or decreases. A concrete example of the simplification added by LAG is that customers need only a single BGP session as opposed to one session per physical connection.

## 2.15.0
* feature: CognitoIdentity: Allows createIdentityPool and updateIdentityPool API to set server side token check value on identity pool.
* feature: ConfigService: AWS Config now supports a new test mode for the PutEvaluations API. Set the TestMode parameter to true in your custom rule to verify whether your AWS Lambda function will deliver evaluation results to AWS Config. No updates occur to your existing evaluations, and evaluation results are not sent to AWS Config.

## 2.14.0
* feature: KMS: This release of AWS Key Management Service introduces the ability to tag keys. Tagging keys can help you organize your keys and track your KMS costs in the cost allocation report. This release also increases the maximum length of a key ID to accommodate ARNs that include a long key alias.

## 2.13.0
* feature: Ec2: Adds support for the new Modify Volumes apis.

## 2.12.0
* feature: StorageGateway: File gateway mode in AWS Storage gateway provides access to objects in S3 as files on a Network File System (NFS) mount point. This is done by creating Nfs file shares using existing APIs CreateNfsFileShare. Using the feature in this update, the customer can restrict the clients that have read/write access to the gateway by specifying the list of clients as a list of IP addresses or CIDR blocks. This list can be specified using the API CreateNfsFileShare while creating new file shares, or UpdateNfsFileShare while update existing file shares. To find out the list of clients that have access, the existing API DescribeNfsFileShare will now output the list of clients that have access.

## 2.11.0
* bugfix: TypeScript: Add `endpoint` property to AWS.S3 instance declaration.
* feature: EC2: This feature allows customers to associate an IAM profile to running instances that do not have any.
* feature: Rekognition: DetectFaces and IndexFaces operations now return an estimate of the age of the face as an age range.

## 2.10.0
* bugfix: JSON: Fixes issue caused when trying to unmarshall null binary shapes.
* bugfix: TypeScript: Add `credentialProvider` as an optional parameter of `ConfigurationOptions`.
* feature: LexRuntime: Amazon Lex is a service for building conversational interactions into any application using voice or text.

## 2.9.0
* feature: EC2: Adds instance health check functionality to replace unhealthy EC2 Spot fleet instances with fresh ones
* feature: CloudDirectory: Amazon Cloud Directory is a highly scalable, high performance, multi-tenant directory service in the cloud. Its web-based directories make it easy for you to organize and manage application resources such as users, groups, locations, devices, policies, and the rich relationships between them.
* feature: CodeDeploy: This release of AWS CodeDeploy introduces support for blue/green deployments. In a blue/green deployment, the current set of instances in a deployment group is replaced by new instances that have the latest application revision installed on them. After traffic is rerouted behind a load balancer to the replacement instances, the original instances can be terminated automatically or kept running for other uses.
* feature: RDS: Added support for the `ModifyDBSnapshot` and `ModifyDBSnapshotMessage` operations

## 2.8.0
* bugfix: RDS: Fixes issue wherein the wrong parameter name was used for cross region presigned urls.
* feature: ELBv2: Application Load Balancers now support native Internet Protocol version 6 (IPv6) in an Amazon Virtual Private Cloud (VPC). With this ability, clients can now connect to the Application Load Balancer in a dual-stack mode via either IPv4 or IPv6.
* feature: RDS: Adds cross region read replica copying.

## 2.7.28
* feature: CognitoIdentityCredentials: Adds `clientConfig` as an optional parameter to the `CognitoIdentityCredentials` constructor. This parameter can be used to pass in client configuration to the underlying service clients.
* feature: TemporaryCredentials: Allows passing of master credentials to the TemporaryCredentials provider.
* feature: CodeCommit: Added new API to list the different files between 2 commits
* feature: ECS: Amazon ECS now supports a state for container instances that can be used to drain a container instance in preparation for maintenance or cluster scale down.

## 2.7.27
* bugfix: Performance: This change reverts a request body cast in the node HTTP handler that caused a performance regression.
* feature: ACM: Updated response elements for DescribeCertificate API in support of managed renewal.

## 2.7.26
* feature: EC2: Amazon EC2 Spot instances now support dedicated tenancy, providing the ability to run Spot instances single-tenant manner on physically isolated hardware within a VPC to satisfy security, privacy, or other compliance requirements. Dedicated Spot instances can be requested using RequestSpotInstances and RequestSpotFleet.

## 2.7.25
* feature: RDS: Updates AWS.RDS API to the latest version.

## 2.7.24
* bugfix: HTTP: Ensure that buffers are not created with Buffer.from in node 4.0-4.4
* bugfix: core: Deprecate v2.7.23

## 2.7.23
* bugfix: S3: Convert string bodies to buffers to ensure correct encoding is used
* feature: DynamoDB: Adds support for tagging tables and indexes.

## 2.7.22
* feature: CUR: The AWS Cost and Usage Report Service API allows you to enable and disable the Cost & Usage report, as well as modify the report name, the data granularity, and the delivery preferences.
* bugfix: DynamoDB.DocumentClient: Allows objects created using Object.create(null) to be properly serialized by the DDB document client.

## 2.7.21
* feature: ConfigService: Updates putConfigRule to support using/writing rules based on the OversizedConfigurationItemChangeNotification message type.
* feature: MarketplaceCommerceAnalytics: Added support for data set disbursed_amount_by_instance_hours, with historical data available starting 2012-09-04. New data is published to this data set every 30 days.
* bugfix: DynamoDB.DocumentClient: Fixes issue where empty strings in nested members were not removed when convertEmptyValues was set.
* bugfix: CognitoIdentityCredentials: Fixes issue where the cached identity id would sometimes not be retrieved when SDK is run while offline.

## 2.7.20
* feature: CodeDeploy: CodeDeploy supports IAM Session Arns in addition to IAM User Arns for on premise host authentication.
* feature: ECS: Amazon EC2 Container Service (ECS) now supports the ability to customize the placement of tasks on container instances.

## 2.7.19
* feature: APIGateway: This update introduces two new operations used to dynamically discover SDK types and what configuration each type accepts.
* feature: ElasticBeanstalk: Adds a new feature for managing Application Version Lifecycle.
* feature: IAM: Adds service-specific credentials to IAM service to make it easier to onboard CodeCommit customers. These are username/password credentials that work with a single service.

## 2.7.18
* feature: Rekognition: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: EC2: Adds cross region encrypted snapshot copying (CopyDBSnapshot).
* feature: ECR: Amazon ECR now implements Docker Image Manifest V2, Schema 2 providing the ability to use multiple tags per image, support for storing Windows container images, and compatibility with the Open Container Initiative (OCI) image format. With this update, customers can also add tags to an image via PutImage and delete tags using BatchDeleteImage.

## 2.7.17
* bugfix: Promises: Fixes issue introduced in v2.6.12. Calling AWS.config.setPromisesDependency(null) will once again force the SDK to use native promises if they are available.
* feature: Firehose: The processing feature enables users to process and modify records before Amazon Firehose delivers them to destinations.
* feature: StorageGateway: File gateway is a new mode in the AWS Storage Gateway that support a file interface into S3, alongside the current block-based volume and VTL storage. File gateway combines a service and virtual software appliance, enabling you to store and retrieve objects in Amazon S3 using industry standard file protocols such as NFS. The software appliance, or gateway, is deployed into your on-premises environment as a virtual machine (VM) running on VMware ESXi. The gateway provides access to objects in S3 as files on a Network File System (NFS) mount point.

## 2.7.16
* feature: DocumentClient: Add a constructor option to convert empty strings, sets, and binary strings to a Dynamo NULL typed field
* feature: Discovery: Adds new APIs to group discovered servers into Applications with get summary and neighbors. Includes additional filters for ListConfigurations and DescribeAgents API.
* feature: CognitoIdentity: Added fine-grained role-based access control for Cognito identity pools. Developers can configure an identity pool to get the IAM role from an authenticated user's token, or they can configure rules that will map a user to a different role

## 2.7.15
* bugfix: Buffer: Update base64 encode/decode to use Buffer.fill when available and throw an error if a number is provided.
* bugfix: XRay: Add X-Amzn-Trace-Id to list of unsigned headers to prevent signature mismatch errors if the header value is modified while the request is in flight.
* feature: Cognito: Add new regions and endpoints for Amazon Cognito Identity, Amazon Cognito Sync, and Amazon Cognito Identity Provider.
* feature: CognitoIdentityServiceProvider: User Pools now offers groups as an easy way to manage users and their permissions.
* feature: SSM: Add support for Patch Baseline and Patch Compliance APIs

## 2.7.14
* feature: Batch: AWS Batch is a batch computing service that lets customers define queues and compute environments and then submit work as batch jobs.
* feature: DMS: Adds support for SSL enabled Oracle endpoints and task modification.
* feature: CloudWatchLogs: Amazon CloudWatch announces detailed billing to CloudWatch Logs. You can now get usage and cost per log group. You can also add tags on your log groups to get a fine-grained view on cost for logs across business dimension such as cost center, application name, AWS services such as Lambda, CloudTrail, ECS, and other. Up to 50 tags can be added to each log group.

## 2.7.13
* feature: CloudFront:  Add lambda function associations to cache behaviors.
* feature: RDS: Add cluster create data to DBCluster APIs.
* feature: WAFRegional: With this new feature, customers can use AWS WAF directly on Application Load Balancers in a VPC within available regions to protect their websites and web services from malicious attacks such as SQL injection, Cross Site Scripting, bad bots, etc.

## 2.7.12
* feature: S3: Add the Version ID field to the Get and Put object tagging operations.

## 2.7.11
* bugfix: TypeScript: Exposes typings for classes that live on service namespaces (i.e. DynamoDB.DocumentClient). Also exposes interfaces off of service namespaces to allow easier migration from some 3rd party typings. Interfaces will continue to be exposed via Service.Types as well.
* bugfix: TypeScript: Removes remaining `reference` comments from definitions.
* feature: ConfigService: Increases the number of config rules for all accounts from 25 to 50.
* feature: EC2: Adds T2.xlarge, T2.2xlarge, and R4 instance types.

## 2.7.10
* feature: APIGateway: You can now publish your APIs on Amazon API Gateway as products on the AWS Marketplace. Use the SDK to associate your APIs on API Gateway with Marketplace Product Codes. API Gateway will then send metering data to the Marketplace Metering Service on your behalf. Also, API Gateway now supports documenting your API.
* feature: Appstream: Announcing Amazon AppStream 2.0 - a secure, fully managed desktop application streaming service that provides users instant access to their apps from a web browser.
* feature: CodeBuild: AWS CodeBuild is a fully-managed build service in the cloud. CodeBuild compiles source code, runs tests, and produces packages that are ready to deploy. CodeBuild eliminates the need to provision, manage, and scale your own build servers. CodeBuild scales continuously and processes multiple builds concurrently, so your builds are never waiting in a queue. You can get started quickly with CodeBuild’s prepackaged build environments, or you can use custom build environments to use your own build tools. With CodeBuild, you only pay by the minute.
* feature: DirectConnect: API Update for IPv6 for Direct Connect.
* feature: EC2: Adds IPv6 Support for EC2 and new F1 Instance types.
* feature: ElasticBeanstalk: Integrates AWS CodeBuild into ElasticBeanstalk.
* feature: Health: When your business is counting on the performance of your cloud solutions, having relevant and timely insights into events impacting your AWS resources is essential. The AWS Health API serves as the primary source for you to receive personalized information related to your AWS infrastructure, guiding your through scheduled changes, and accelerating the troubleshooting of issues impacting your AWS resources and accounts. At launch, the APIs will be available to Business and Enterprise Support customers.
* feature: Lambda: Adds new API `getAccountSettings`, dotnetcore 1.0 runtime support, DeadLetterConfig, and event source mappings with kinesis streams.
* feature: OpsWorksCM: AWS OpsWorks for Chef Automate gives customers a single tenant Chef Automate server. The Chef Automate server is fully managed by AWS and supports automatic backup, restore and upgrade operations.
* feature: Pinpoint: Amazon Pinpoint makes it easy to run targeted campaigns to improve user engagement. Pinpoint helps you understand your users behavior, define who to target, what messages to send, when to deliver them, and tracks the results of the campaign.
* feature: Shield: AWS Shield is a managed Distributed Denial of Service (DDoS) protection for web applications running on AWS.
* feature: SSM: Amazon EC2 Systems Manager is a flexible and easy to use management service that enables enterprises to securely manage and administer their workloads running on-premises or in the AWS cloud, using a single unified experience. These tasks include collecting system inventory, AWSmaintaining consistent state, ad hoc remote execution, automating imaging creation, applying OS patches, and managing configuration parameters.
* feature: StepFunctions: Adds support for the AWS Step Functions API.
* feature: XRay: AWS X-Ray helps developers analyze and debug distributed applications. With X-Ray, you can understand how your application and its underlying services are performing to identify and troubleshoot the root cause of performance issues and errors.

## 2.7.9
* feature: Polly: Adds `AWS.Polly.Presigner` to create presigned urls for `synthesizeSpeech`.
* feature: Polly: Amazon Polly is a service that turns text into lifelike speech, making it easy to develop applications that use high-quality speech to increase engagement and accessibility. With Amazon Polly the developers can build speech-enabled apps that work in multiple geographies.
* feature: Lightsail: An extremely simplified VM creation and management service.
* feature: Rekognition: Amazon Rekognition is a service that makes it easy to add image analysis to your applications. With Rekognition, you can detect objects, scenes, and faces in images. You can also search and compare faces. Rekognition’s API enables you to quickly add sophisticated deep learning-based visual search and image classification to your applications. 
* feature: Snowball: This release of AWS Snowball introduces a new job type, new APIs, and the new AWS Snowball Edge device to support local compute and storage use cases. The local compute is AWS Lambda powered by AWS Greengrass, and the local storage is compatible with Amazon S3. Each 100 TB Snowball Edge can use the storage and compute power of the AWS cloud locally in places where connecting to the internet may not be an option. Additionally, Snowball Edges can be used in clusters for applications that require greater data durability.

## 2.7.8
* feature: core: The SDK will now automatically provide a version 4 UUID for top-level operation parameters that are modeled with the `idempotencyToken` flag. Users may continue to provide their own tokens.
* feature: S3: Updates the AWS.S3 API to the latest version.

## 2.7.7
* feature: CloudFormation: List-imports API is to list all stacks of user's namespace that are using a specific output.
* feature: Glacier: Allow customers to retrieve their data with different tiers.
* feature: Route53: Expand current IPAddress field to accept IPv6 address.
* feature: S3: Allow customers to specify different restore tiers when accessing their data.

## 2.7.6
* feature: CloudTrail: This release of AWS CloudTrail supports configuring your trail with event selectors. Use event selectors to specify the type of events that you want your trails to log. You can configure event selectors to log read-only, write-only, or all events. CloudTrail supports logging Amazon S3 object level APIs such as GetObject, DeleteObject, and PutObject. You can configure event selectors for your trail to log object level operations.
* feature: ECS: ECS will include a new field named `version` in API responses relating to tasks and container instances. Version is a number that increments every time a change has been made to the associated resource. Users replicating their ECS resource state can use the version field reported by the ECS APIs to determine if their local state is fresh.

## 2.7.5
* bugfix: TypeScript: Stubs DOM interfaces and removes type reference to node.
* feature: ElasticTranscoder: Support for multiple media input files that can be stitched together.
* feature: Lambda: Adds support for Environment variables.
* feature: Gamelift: Provide the ability to remote access into GameLift managed servers.
* feature: EMR: Automatic Scaling of EMR clusters based on metrics. Adds support for cancelling a pending Amazon EMR step.
* feature: ApplicationAutoScaling: Adds support for a new target resource (EMR Instance Groups) as a scalable target.

## 2.7.4
* feature: MarketplaceMetering: Allows third parties to send metering records.
* feature: SQS: Updates the latest version of the SQS API.
* feature: CloudWatch: Amazon CloudWatch now supports Percentiles as a statistical function.
* feature: APIGateway: Allows defining an encoding for the API per content type in order to support 'binary' use case.

## 2.7.3
* feature: Route53: Adds support for cross account VPC association.
* feature: ServiceCatalog: This release enables Service Catalog users to perform administer operations via API.

## 2.7.2
* feature: ElastiCache: Additional parameter to 2 create apis to provide an auth Token for Redis.
* feature: DirectoryService: Adds support for SchemaExtensions.
* feature: Kinesis: Adds DescribeLimits API which displays customer's current shard limit and the number of open shards that are being used. Also adds a 'display stream creation timestamp' feature to DescribeStream API.

## 2.7.1
* feature: CognitoIdentityServiceProvider: Adds schema attributes to CreateUserPool.
* bugfix: TypeScript: Updates definitions to work when `noImplicitAny` and `strictNullChecks` are set to `true`.

## 2.7.0
* feature: TypeScript: Adds typescript definition files to the SDK.
* feature: CloudWatchLogs: Amazon CloudWatch Metrics to Logs is a capability that helps pivot from your logs-extracted metrics directly to the corresponding logs.

## 2.6.15
* feature: DirectConnect: AWS Direct Connect provides three new APIs to support basic tagging on Direct Connect resources.

## 2.6.14
* feature: SES: Amazon Simple Email Service (Amazon SES) now enables you to track your bounce, complaint, delivery, sent, and rejected email metrics with fine-grained granularity.

## 2.6.13
* feature: CloudFormation: Adding ResourcesToSkip parameter to ContinueUpdateRollback API, adding support for ListExports, new ChangeSet types and Transforms.

## 2.6.12
* feature: CredentialProviderChain: Adds promise support for the `resolve` method on the AWS.CredentialProviderChain class. Corresponding promise method is called `resolvePromise`.
* feature: Credentials: Adds promise support for the `get` and `refresh` methods of the AWS.Credentials class. Corresponding promise methods are called `getPromise` and `refreshPromise`.
* feature: ManagedUpload: Adds promise support for S3.ManagedUpload. Calling `s3.upload(params).promise()` will return a promise.
* feature: SMS: AWS Server Migration Service (SMS) is an agentless service which makes it easier and faster for you to migrate thousands of on-premises workloads to AWS. AWS SMS allows you to automate, schedule, and track incremental replications of live server volumes, making it easier for you to coordinate large-scale server migrations.

## 2.6.11
* feature: Budgets: Adds the AWS Budgets service API via AWS.Budgets.

## 2.6.10
* feature: CloudFront: Ability to use Amazon CloudFront to deliver your content both via IPv6 and IPv4 using HTTP/HTTPS.
* feature: IoT: Updates IoT API to the latest available version.
* feature: RDS: Updates RDS to support accessing other AWS services by gassociating an IAM role with necessary permissions to your DB cluster.

## 2.6.9
* bugfix: s3: Propagate an error from a stream to s3.upload callback #1169
* feature: S3: Adds support for using dualstack with accelerate endpoints.
* feature: ACM: This change allows users to import third-party SSL/TLS certificates into ACM.
* feature: ElasticBeanstalk: Adds CodeCommit integraion. DescribeApplicationVersions updated to support pagination.
* feature: GameLift: New APIs to protect game developer resource (builds, alias, fleets, instances, game sessions and player sessions) against abuse.

## 2.6.8
* feature: ECR: DescribeImages is a new api used to expose image metadata which today includes image size and image creation timestamp.
* feature: ElastiCache: Elasticache is launching a new major engine release of Redis, 3.2 (providing stability updates and new command sets over 2.8), as well as ElasticSupport for enabling Redis Cluster in 3.2, which provides support for multiple node groups to horizontally scale data, as well as superior engine failover capabilities.

## 2.6.7
* feature: CognitoIdentityServiceProvider: Added new operation "AdminCreateUser" that creates a new user in the specified user pool and sends a welcome message via email or phone (SMS).
* feature: Route53: Retries PriorRequestNotComplete errors.

## 2.6.6
* feature: EC2: Adding support for EC2 Convertible RIs and the EC2 RI regional benefit.
* feature: S3: S3 API update with partNumber extension and a bug fix to address list-objects command failing when a bucket is marked with request-pays.

## 2.6.5
* bugfix: apiVersion: Fixes an issue where some service clients would fail to instantiate if an older apiVersion was specified.
* feature: CloudFormation: Adds support for specifying an IAM service role for CloudFormation stack operations.

## 2.6.4
* bugfix: Browser: Updates `url` and `querystring` dependencies to be controlled by the SDK instead of tools like browserify or webpack.
* bugfix: Config: Fixes an issue where specifying service-specific config on the global AWS.config object would fail if the service had not yet been instantiated.
* feature: CodeDeploy: AWS CodeDeploy now integrates with Amazon CloudWatch alarms, making it possible to stop a deployment if there is a change in the state of a specified alarm for a number of consecutive periods, as specified in the alarm threshold. AWS CodeDeploy also now supports automatically rolling back a deployment if certain conditions are met, such as a deployment failure or an activated alarm.
* feature: EMR: Added support for Security Configurations which can be used to enable encryption at-rest and in-transit for certain applications on Amazon EMR.
* feature: RDS: Provide local time zone support for AWS RDS SqlServer database instances.
* feature: Redshift: This release of Amazon Redshift introduces Enhanced VPC Routing. When you use Amazon Redshift Enhanced VPC Routing, Amazon Redshift forces all COPY and UNLOAD traffic between your cluster and your data repositories through your Amazon VPC.

## 2.6.3
* bugfix: Node_Https: Fixes an issue caused when https.globalAgent is set to false.
* feature: Iot: Updates registerCertificate operation, and allows users to specify cannedAcl for S3 action.
* feature: RDS: Updates describeDbCluster operation to allow specifying a ReaderEndpoint for accessing cluster readers.

## 2.6.2
* feature: ServiceCatalog: Updates the API for AWS.ServiceCatalog.

## 2.6.1
* bugfix: SDK: Fixes an issue that caused all services to be loaded into memory when requiring the SDK. This issue was introduced in version `2.6.0` of the SDK, and address #1124.

## 2.6.0
* feature: CloudFront: Adds HTTP2 support for Amazon CloudFront distributions.
* feature: MetadataService: Adds retry logic to the EC2 Metadata Service, so that EC2MetadataCredentials will retry TimeoutError. This retry logic is also added to ECSCredentials. Resolves #692
* feature: ServiceCatalog: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: Tools: Adds support for bundling the SDK with webpack. Also adds support for creating node.js bundles using webpack or browserify.

## 2.5.6
* feature: RDS: Adds new operation describeSourceRegions to provide list of all the source region names and endpoints for any region. Source regions are the regions where current region can get a replica or copy a snapshot from.

## 2.5.5
* feature: CognitoIdentityServiceProvider: Adds support for bulk import of users.
* feature: GameLift: Adds Linux support.
* feature: Iot: Adds Iot as a default service in the browser distribution of the AWS SDK for JavaScript.
* feature: RDS: Adds information in response of describeOptionGroupOptions about options that conflict with each other.

## 2.5.4
* feature: CloudFront: CloudFront is adding a Querystring Whitelist Option. Customers will be able to choose to forward certain querystring keys instead of a.) all of them or b.) none of them.
* feature: CodePipeline: CodePiepline has introduced a new feature to return pipeline execution details. Execution details consists of source revisions that are running in the pipeline. Customers will be able to tell what source revisions that are running through the stages in pipeline by fetching execution details of each stage.
* feature: Route53: With this release, Route 53 will support the following new features: support for the NAPTR DNS record type, a new testDNSAnswer API which enables customers to send a test query against a specific name server using spoofed delegation nameserver, resolver, and ECS IPs, and support metric-based health check in ap-south-1 region.

## 2.5.3
* feature: RDS: Adds resource ARNs to Describe APIs.

## 2.5.2
* bugfix: Waiter: Fixes bug in `clusterDeleted` waiter for AWS.Redshift.
* feature: EC2: Adds  new APIs supporting dedicated host reservations. Also adds new property to response of `describeSpotFleetRequests` to indicate  the activity status of spot fleet requests.
* feature: Request: eachItem method stops iteration on returning false (like eachPage)
* feature: WorkSpaces: Adds new APIs to support the launch and management of WorkSpaces that are paid for and used by the hour.

## 2.5.1
* feature: ACM: Increase tagging limit from 10 to 50.
* feature: APIGateway: Amazon API Gateway now supports API usage plans. Usage plans allows you to easily manage and monetize your APIs for your API-based business.
* feature: ECS: Adds support for memory reservation and network mode on task definitions. Also adds splunk as a supported log driver.

## 2.5.0
* feature: AutoScaling: Adds 3 new APIs for ELB L7 integration: attachLoadBalancerTargetGroups, detachLoadBalancerTargetGroups, and describeLoadBalancerTargetGroups.
* feature: ECS: Adds ECS support for ELBv2. Supports Application Load Balancer target groups to enable dynamic ports and path-based routing.
* feature: ELBv2: Adds new backwards incompatible application load balancer API version.  Application load balancers are a new load balancer that is now supported by the Elastic Load Balancing service. Application load balancers support HTTP/2, WebSockets, routing based on URL path, and routing to multiple ports on a single instance.
* feature: KMS: Adds support for importing customer-supplied cryptographic keys. New import key feature lets you import keys from your own key management infrastructure to KMS for greater control over generation and storage of keys and meeting compliance requirements of sensitive workloads.
* feature: KinesisAnalytics: Adds the new service Amazon Kinesis Analytics, a fully managed service for continuously querying streaming data using standard SQL. With Kinesis Analytics, you can write standard SQL queries on streaming data and gain actionable insights in real-time, without having to learn any new programming skills. The service allows you to build applications that continuously read data from streaming data sources, process that data using standard SQL, and send the processed data to up to four destinations of your choice. Kinesis Analytics enables you to generate time-series analytics, feed a real-time dashboard, create real-time alarms and notifications, and much more.
* feature: S3: Adds support for IPv6/IPv4 Dualstack endpoint. A new opt-in boolean  option `use Dualstack` can be specified for S3 service clients: `new AWS.S3({useDualstack: true})`. Alternatively, to configure it once for all subsequent S3 service clients: `AWS.config.update({s3: {useDualstack: true}})`.
* feature: Snowball: Adds Amazon Snowball, a new job management service.

## 2.4.14
* feature: CloudFront: Amazon CloudFront now supports tagging for Web and Streaming distributions. Tags make it easier for you to allocate costs and optimize spending by categorizing and grouping AWS resources.
* feature: ECR: Adds filtering of ListImages requests based on whether an image is tagged or untagged.
* feature: MarketplaceCommerceAnalytics: Adds the `startSupportDataExport` operation.

## 2.4.13
* feature: ApplicationAutoScaling: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: AutoScaling: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: CodeDeploy: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: GameLift: Provides a new Search API for GameLift, which allows game developers to retrieve filtered and sorted lists of their GameSessions.
* feature: RDS: You can now use the AWS Management Console to easily move your DB instance to a different VPC, or to a different subnet group in the same VPC. For more information, see Updating the VPC for a DB Instance. If your DB instance is not in a VPC, you can now use the AWS Management Console to easily move your DB instance into a VPC. You can now copy the source files from a MySQL database to an Amazon Simple Storage Service (Amazon S3) bucket, and then restore an Amazon Aurora DB cluster from those files. This option can be considerably faster than migrating data using mysqldump.

## 2.4.12
* bugfix: Request: Adds a content-length check for the stream returned from `createReadStream()`, and the stream will emit an error when the bytes received are fewer than specified by the response content-length header.
* bugfix: S3: Reverts behavior introduced in version `2.4.0` of the SDK to default the `signatureVersion` of S3 clients to `v4`. S3 clients instantiated without a user-defined `signatureVersion` will now default to `v2` unless the region only supports `v4` signing. This change is being made due to issues sending non-ascii characters in headers when using `v4` signing.
* feature: CloudWatchLogs: Updates the `putMetricFilter` operation.
* feature: EMR: Adds enhanced debugging.
* feature: Iot: Adds `listOutgoingCertificates` and support for allowing autoregistration.
* feature: MachineLearning: Adds compute time and entity timestamp to multiple operations.
* feature: RDS: Support for license model and versioning of option groups.
* feature: Route53Domains: Adds new APIs to renew domains for a specified duration, get domain suggestions, and view billing.

## 2.4.11
* feature: APIGateway: Adds support for authentication through Cognito User Pools.
* feature: CognitoIdentityServiceProvider: Introduces support for Your User Pools.
* feature: DirectoryService: Enables routing to on-premises public IP for Microsoft Active Directory.
* feature: EC2: Enables resolution of DNS queries from a peered VPC to a private IP address.
* feature: ES: Updates to Elasticsearch version 2.3, which offers improved performance, memory management, and security. It also offers several new features includinng pipeline aggregations to perform advanced analytics like moving averages and derivatives, and enhancements to geospatial queries.
* feature: Waiter: Adds Waiters for AWS.CodeDeploy.

## 2.4.10
* feature: util: Parse ini files containing comments using #
* feature: Iot: Adds support for thing types. Thing types are entities that store a description of common features of Things that are of the same logical type. Also adds support for `:` in Thing name. Adds a separator in Firehose action.

## 2.4.9
* feature: ACM: Adds reason for failure when describing certificates.
* feature: ConfigService: Adds support for RDS and ACM resources types and introduces two new APIs: DeleteEvaluationResults and StartConfigRulesEvaluation. Updated PutConfigRule API can now create Config rules that are triggered by both configuration changes and periodicity.
* feature: ElasticTranscoder: Adds WAV file format output support.
* feature: Paginator: Adds paginator for SSM DescribeInstanceInformation operation.

## 2.4.8
* feature: CloudFormation: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: CloudHSM: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: DeviceFarm: Adds session-based APIs.
* feature: EMR: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: ElastiCache: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: ElasticBeanstalk: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: Redshift: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: SSM: Adds notification support.