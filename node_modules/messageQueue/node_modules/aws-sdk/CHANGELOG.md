# Changelog for AWS SDK for JavaScript
<!--LATEST=2.6.15-->
<!--ENTRYINSERT-->

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