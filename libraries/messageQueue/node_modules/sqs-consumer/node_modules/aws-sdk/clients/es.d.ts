import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ES extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ES.Types.ClientConfiguration)
  config: Config & ES.Types.ClientConfiguration;
  /**
   * Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags. See  Tagging Amazon Elasticsearch Service Domains for more information.
   */
  addTags(params: ES.Types.AddTagsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags. See  Tagging Amazon Elasticsearch Service Domains for more information.
   */
  addTags(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a new Elasticsearch domain. For more information, see Creating Elasticsearch Domains in the Amazon Elasticsearch Service Developer Guide.
   */
  createElasticsearchDomain(params: ES.Types.CreateElasticsearchDomainRequest, callback?: (err: AWSError, data: ES.Types.CreateElasticsearchDomainResponse) => void): Request<ES.Types.CreateElasticsearchDomainResponse, AWSError>;
  /**
   * Creates a new Elasticsearch domain. For more information, see Creating Elasticsearch Domains in the Amazon Elasticsearch Service Developer Guide.
   */
  createElasticsearchDomain(callback?: (err: AWSError, data: ES.Types.CreateElasticsearchDomainResponse) => void): Request<ES.Types.CreateElasticsearchDomainResponse, AWSError>;
  /**
   * Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.
   */
  deleteElasticsearchDomain(params: ES.Types.DeleteElasticsearchDomainRequest, callback?: (err: AWSError, data: ES.Types.DeleteElasticsearchDomainResponse) => void): Request<ES.Types.DeleteElasticsearchDomainResponse, AWSError>;
  /**
   * Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.
   */
  deleteElasticsearchDomain(callback?: (err: AWSError, data: ES.Types.DeleteElasticsearchDomainResponse) => void): Request<ES.Types.DeleteElasticsearchDomainResponse, AWSError>;
  /**
   * Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains. Role deletion will fail if any existing VPC domains use the role. You must delete any such Elasticsearch domains before deleting the role. See Deleting Elasticsearch Service Role in VPC Endpoints for Amazon Elasticsearch Service Domains.
   */
  deleteElasticsearchServiceRole(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.
   */
  describeElasticsearchDomain(params: ES.Types.DescribeElasticsearchDomainRequest, callback?: (err: AWSError, data: ES.Types.DescribeElasticsearchDomainResponse) => void): Request<ES.Types.DescribeElasticsearchDomainResponse, AWSError>;
  /**
   * Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.
   */
  describeElasticsearchDomain(callback?: (err: AWSError, data: ES.Types.DescribeElasticsearchDomainResponse) => void): Request<ES.Types.DescribeElasticsearchDomainResponse, AWSError>;
  /**
   * Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.
   */
  describeElasticsearchDomainConfig(params: ES.Types.DescribeElasticsearchDomainConfigRequest, callback?: (err: AWSError, data: ES.Types.DescribeElasticsearchDomainConfigResponse) => void): Request<ES.Types.DescribeElasticsearchDomainConfigResponse, AWSError>;
  /**
   * Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.
   */
  describeElasticsearchDomainConfig(callback?: (err: AWSError, data: ES.Types.DescribeElasticsearchDomainConfigResponse) => void): Request<ES.Types.DescribeElasticsearchDomainConfigResponse, AWSError>;
  /**
   * Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.
   */
  describeElasticsearchDomains(params: ES.Types.DescribeElasticsearchDomainsRequest, callback?: (err: AWSError, data: ES.Types.DescribeElasticsearchDomainsResponse) => void): Request<ES.Types.DescribeElasticsearchDomainsResponse, AWSError>;
  /**
   * Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.
   */
  describeElasticsearchDomains(callback?: (err: AWSError, data: ES.Types.DescribeElasticsearchDomainsResponse) => void): Request<ES.Types.DescribeElasticsearchDomainsResponse, AWSError>;
  /**
   *  Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion. When modifying existing Domain, specify the  DomainName  to know what Limits are supported for modifying. 
   */
  describeElasticsearchInstanceTypeLimits(params: ES.Types.DescribeElasticsearchInstanceTypeLimitsRequest, callback?: (err: AWSError, data: ES.Types.DescribeElasticsearchInstanceTypeLimitsResponse) => void): Request<ES.Types.DescribeElasticsearchInstanceTypeLimitsResponse, AWSError>;
  /**
   *  Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion. When modifying existing Domain, specify the  DomainName  to know what Limits are supported for modifying. 
   */
  describeElasticsearchInstanceTypeLimits(callback?: (err: AWSError, data: ES.Types.DescribeElasticsearchInstanceTypeLimitsResponse) => void): Request<ES.Types.DescribeElasticsearchInstanceTypeLimitsResponse, AWSError>;
  /**
   * Returns the name of all Elasticsearch domains owned by the current user's account. 
   */
  listDomainNames(callback?: (err: AWSError, data: ES.Types.ListDomainNamesResponse) => void): Request<ES.Types.ListDomainNamesResponse, AWSError>;
  /**
   * List all Elasticsearch instance types that are supported for given ElasticsearchVersion
   */
  listElasticsearchInstanceTypes(params: ES.Types.ListElasticsearchInstanceTypesRequest, callback?: (err: AWSError, data: ES.Types.ListElasticsearchInstanceTypesResponse) => void): Request<ES.Types.ListElasticsearchInstanceTypesResponse, AWSError>;
  /**
   * List all Elasticsearch instance types that are supported for given ElasticsearchVersion
   */
  listElasticsearchInstanceTypes(callback?: (err: AWSError, data: ES.Types.ListElasticsearchInstanceTypesResponse) => void): Request<ES.Types.ListElasticsearchInstanceTypesResponse, AWSError>;
  /**
   * List all supported Elasticsearch versions
   */
  listElasticsearchVersions(params: ES.Types.ListElasticsearchVersionsRequest, callback?: (err: AWSError, data: ES.Types.ListElasticsearchVersionsResponse) => void): Request<ES.Types.ListElasticsearchVersionsResponse, AWSError>;
  /**
   * List all supported Elasticsearch versions
   */
  listElasticsearchVersions(callback?: (err: AWSError, data: ES.Types.ListElasticsearchVersionsResponse) => void): Request<ES.Types.ListElasticsearchVersionsResponse, AWSError>;
  /**
   * Returns all tags for the given Elasticsearch domain.
   */
  listTags(params: ES.Types.ListTagsRequest, callback?: (err: AWSError, data: ES.Types.ListTagsResponse) => void): Request<ES.Types.ListTagsResponse, AWSError>;
  /**
   * Returns all tags for the given Elasticsearch domain.
   */
  listTags(callback?: (err: AWSError, data: ES.Types.ListTagsResponse) => void): Request<ES.Types.ListTagsResponse, AWSError>;
  /**
   * Removes the specified set of tags from the specified Elasticsearch domain.
   */
  removeTags(params: ES.Types.RemoveTagsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified set of tags from the specified Elasticsearch domain.
   */
  removeTags(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances. 
   */
  updateElasticsearchDomainConfig(params: ES.Types.UpdateElasticsearchDomainConfigRequest, callback?: (err: AWSError, data: ES.Types.UpdateElasticsearchDomainConfigResponse) => void): Request<ES.Types.UpdateElasticsearchDomainConfigResponse, AWSError>;
  /**
   * Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances. 
   */
  updateElasticsearchDomainConfig(callback?: (err: AWSError, data: ES.Types.UpdateElasticsearchDomainConfigResponse) => void): Request<ES.Types.UpdateElasticsearchDomainConfigResponse, AWSError>;
}
declare namespace ES {
  export type ARN = string;
  export interface AccessPoliciesStatus {
    /**
     * The access policy configured for the Elasticsearch domain. Access policies may be resource-based, IP-based, or IAM-based. See  Configuring Access Policiesfor more information.
     */
    Options: PolicyDocument;
    /**
     * The status of the access policy for the Elasticsearch domain. See OptionStatus for the status information that's included. 
     */
    Status: OptionStatus;
  }
  export interface AddTagsRequest {
    /**
     *  Specify the ARN for which you want to add the tags.
     */
    ARN: ARN;
    /**
     *  List of Tag that need to be added for the Elasticsearch domain. 
     */
    TagList: TagList;
  }
  export interface AdditionalLimit {
    /**
     *  Name of Additional Limit is specific to a given InstanceType and for each of it's  InstanceRole  etc.  Attributes and their details:   MaximumNumberOfDataNodesSupported This attribute will be present in Master node only to specify how much data nodes upto which given  ESPartitionInstanceType  can support as master node. MaximumNumberOfDataNodesWithoutMasterNode This attribute will be present in Data node only to specify how much data nodes of given  ESPartitionInstanceType  upto which you don't need any master nodes to govern them.  
     */
    LimitName?: LimitName;
    /**
     *  Value for given  AdditionalLimit$LimitName  . 
     */
    LimitValues?: LimitValueList;
  }
  export type AdditionalLimitList = AdditionalLimit[];
  export type AdvancedOptions = {[key: string]: String};
  export interface AdvancedOptionsStatus {
    /**
     *  Specifies the status of advanced options for the specified Elasticsearch domain.
     */
    Options: AdvancedOptions;
    /**
     *  Specifies the status of OptionStatus for advanced options for the specified Elasticsearch domain.
     */
    Status: OptionStatus;
  }
  export type Boolean = boolean;
  export type CloudWatchLogsLogGroupArn = string;
  export interface CreateElasticsearchDomainRequest {
    /**
     * The name of the Elasticsearch domain that you are creating. Domain names are unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
     */
    DomainName: DomainName;
    /**
     * String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information, see Creating Elasticsearch Domains in the Amazon Elasticsearch Service Developer Guide.
     */
    ElasticsearchVersion?: ElasticsearchVersionString;
    /**
     * Configuration options for an Elasticsearch domain. Specifies the instance type and number of instances in the domain cluster. 
     */
    ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
    /**
     * Options to enable, disable and specify the type and size of EBS storage volumes. 
     */
    EBSOptions?: EBSOptions;
    /**
     *  IAM access policy as a JSON-formatted string.
     */
    AccessPolicies?: PolicyDocument;
    /**
     * Option to set time, in UTC format, of the daily automated snapshot. Default value is 0 hours. 
     */
    SnapshotOptions?: SnapshotOptions;
    /**
     * Options to specify the subnets and security groups for VPC endpoint. For more information, see Creating a VPC in VPC Endpoints for Amazon Elasticsearch Service Domains
     */
    VPCOptions?: VPCOptions;
    /**
     *  Option to allow references to indices in an HTTP request body. Must be false when configuring access to individual sub-resources. By default, the value is true. See Configuration Advanced Options for more information.
     */
    AdvancedOptions?: AdvancedOptions;
    /**
     * Map of LogType and LogPublishingOption, each containing options to publish a given type of Elasticsearch log.
     */
    LogPublishingOptions?: LogPublishingOptions;
  }
  export interface CreateElasticsearchDomainResponse {
    /**
     * The status of the newly created Elasticsearch domain. 
     */
    DomainStatus?: ElasticsearchDomainStatus;
  }
  export interface DeleteElasticsearchDomainRequest {
    /**
     * The name of the Elasticsearch domain that you want to permanently delete.
     */
    DomainName: DomainName;
  }
  export interface DeleteElasticsearchDomainResponse {
    /**
     * The status of the Elasticsearch domain being deleted.
     */
    DomainStatus?: ElasticsearchDomainStatus;
  }
  export interface DescribeElasticsearchDomainConfigRequest {
    /**
     * The Elasticsearch domain that you want to get information about.
     */
    DomainName: DomainName;
  }
  export interface DescribeElasticsearchDomainConfigResponse {
    /**
     * The configuration information of the domain requested in the DescribeElasticsearchDomainConfig request.
     */
    DomainConfig: ElasticsearchDomainConfig;
  }
  export interface DescribeElasticsearchDomainRequest {
    /**
     * The name of the Elasticsearch domain for which you want information.
     */
    DomainName: DomainName;
  }
  export interface DescribeElasticsearchDomainResponse {
    /**
     * The current status of the Elasticsearch domain.
     */
    DomainStatus: ElasticsearchDomainStatus;
  }
  export interface DescribeElasticsearchDomainsRequest {
    /**
     * The Elasticsearch domains for which you want information.
     */
    DomainNames: DomainNameList;
  }
  export interface DescribeElasticsearchDomainsResponse {
    /**
     * The status of the domains requested in the DescribeElasticsearchDomains request.
     */
    DomainStatusList: ElasticsearchDomainStatusList;
  }
  export interface DescribeElasticsearchInstanceTypeLimitsRequest {
    /**
     *  DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for Elasticsearch  Limits  for existing domain. 
     */
    DomainName?: DomainName;
    /**
     *  The instance type for an Elasticsearch cluster for which Elasticsearch  Limits  are needed. 
     */
    InstanceType: ESPartitionInstanceType;
    /**
     *  Version of Elasticsearch for which  Limits  are needed. 
     */
    ElasticsearchVersion: ElasticsearchVersionString;
  }
  export interface DescribeElasticsearchInstanceTypeLimitsResponse {
    LimitsByRole?: LimitsByRole;
  }
  export type DomainId = string;
  export interface DomainInfo {
    /**
     *  Specifies the DomainName.
     */
    DomainName?: DomainName;
  }
  export type DomainInfoList = DomainInfo[];
  export type DomainName = string;
  export type DomainNameList = DomainName[];
  export interface EBSOptions {
    /**
     * Specifies whether EBS-based storage is enabled.
     */
    EBSEnabled?: Boolean;
    /**
     *  Specifies the volume type for EBS-based storage.
     */
    VolumeType?: VolumeType;
    /**
     *  Integer to specify the size of an EBS volume.
     */
    VolumeSize?: IntegerClass;
    /**
     * Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).
     */
    Iops?: IntegerClass;
  }
  export interface EBSOptionsStatus {
    /**
     *  Specifies the EBS options for the specified Elasticsearch domain.
     */
    Options: EBSOptions;
    /**
     *  Specifies the status of the EBS options for the specified Elasticsearch domain.
     */
    Status: OptionStatus;
  }
  export type ESPartitionInstanceType = "m3.medium.elasticsearch"|"m3.large.elasticsearch"|"m3.xlarge.elasticsearch"|"m3.2xlarge.elasticsearch"|"m4.large.elasticsearch"|"m4.xlarge.elasticsearch"|"m4.2xlarge.elasticsearch"|"m4.4xlarge.elasticsearch"|"m4.10xlarge.elasticsearch"|"t2.micro.elasticsearch"|"t2.small.elasticsearch"|"t2.medium.elasticsearch"|"r3.large.elasticsearch"|"r3.xlarge.elasticsearch"|"r3.2xlarge.elasticsearch"|"r3.4xlarge.elasticsearch"|"r3.8xlarge.elasticsearch"|"i2.xlarge.elasticsearch"|"i2.2xlarge.elasticsearch"|"d2.xlarge.elasticsearch"|"d2.2xlarge.elasticsearch"|"d2.4xlarge.elasticsearch"|"d2.8xlarge.elasticsearch"|"c4.large.elasticsearch"|"c4.xlarge.elasticsearch"|"c4.2xlarge.elasticsearch"|"c4.4xlarge.elasticsearch"|"c4.8xlarge.elasticsearch"|"r4.large.elasticsearch"|"r4.xlarge.elasticsearch"|"r4.2xlarge.elasticsearch"|"r4.4xlarge.elasticsearch"|"r4.8xlarge.elasticsearch"|"r4.16xlarge.elasticsearch"|"i3.large.elasticsearch"|"i3.xlarge.elasticsearch"|"i3.2xlarge.elasticsearch"|"i3.4xlarge.elasticsearch"|"i3.8xlarge.elasticsearch"|"i3.16xlarge.elasticsearch"|string;
  export interface ElasticsearchClusterConfig {
    /**
     * The instance type for an Elasticsearch cluster.
     */
    InstanceType?: ESPartitionInstanceType;
    /**
     * The number of instances in the specified domain cluster.
     */
    InstanceCount?: IntegerClass;
    /**
     * A boolean value to indicate whether a dedicated master node is enabled. See About Dedicated Master Nodes for more information.
     */
    DedicatedMasterEnabled?: Boolean;
    /**
     * A boolean value to indicate whether zone awareness is enabled. See About Zone Awareness for more information.
     */
    ZoneAwarenessEnabled?: Boolean;
    /**
     * The instance type for a dedicated master node.
     */
    DedicatedMasterType?: ESPartitionInstanceType;
    /**
     * Total number of dedicated master nodes, active and on standby, for the cluster.
     */
    DedicatedMasterCount?: IntegerClass;
  }
  export interface ElasticsearchClusterConfigStatus {
    /**
     *  Specifies the cluster configuration for the specified Elasticsearch domain.
     */
    Options: ElasticsearchClusterConfig;
    /**
     *  Specifies the status of the configuration for the specified Elasticsearch domain.
     */
    Status: OptionStatus;
  }
  export interface ElasticsearchDomainConfig {
    /**
     * String of format X.Y to specify version for the Elasticsearch domain.
     */
    ElasticsearchVersion?: ElasticsearchVersionStatus;
    /**
     * Specifies the ElasticsearchClusterConfig for the Elasticsearch domain.
     */
    ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;
    /**
     * Specifies the EBSOptions for the Elasticsearch domain.
     */
    EBSOptions?: EBSOptionsStatus;
    /**
     * IAM access policy as a JSON-formatted string.
     */
    AccessPolicies?: AccessPoliciesStatus;
    /**
     * Specifies the SnapshotOptions for the Elasticsearch domain.
     */
    SnapshotOptions?: SnapshotOptionsStatus;
    /**
     * The VPCOptions for the specified domain. For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains.
     */
    VPCOptions?: VPCDerivedInfoStatus;
    /**
     * Specifies the AdvancedOptions for the domain. See Configuring Advanced Options for more information.
     */
    AdvancedOptions?: AdvancedOptionsStatus;
    /**
     * Log publishing options for the given domain.
     */
    LogPublishingOptions?: LogPublishingOptionsStatus;
  }
  export interface ElasticsearchDomainStatus {
    /**
     * The unique identifier for the specified Elasticsearch domain.
     */
    DomainId: DomainId;
    /**
     * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
     */
    DomainName: DomainName;
    /**
     * The Amazon resource name (ARN) of an Elasticsearch domain. See Identifiers for IAM Entities in Using AWS Identity and Access Management for more information.
     */
    ARN: ARN;
    /**
     * The domain creation status. True if the creation of an Elasticsearch domain is complete. False if domain creation is still in progress.
     */
    Created?: Boolean;
    /**
     * The domain deletion status. True if a delete request has been received for the domain but resource cleanup is still in progress. False if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.
     */
    Deleted?: Boolean;
    /**
     * The Elasticsearch domain endpoint that you use to submit index and search requests.
     */
    Endpoint?: ServiceUrl;
    /**
     * Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example key, value: 'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'.
     */
    Endpoints?: EndpointsMap;
    /**
     * The status of the Elasticsearch domain configuration. True if Amazon Elasticsearch Service is processing configuration changes. False if the configuration is active.
     */
    Processing?: Boolean;
    ElasticsearchVersion?: ElasticsearchVersionString;
    /**
     * The type and number of instances in the domain cluster.
     */
    ElasticsearchClusterConfig: ElasticsearchClusterConfig;
    /**
     * The EBSOptions for the specified domain. See Configuring EBS-based Storage for more information.
     */
    EBSOptions?: EBSOptions;
    /**
     *  IAM access policy as a JSON-formatted string.
     */
    AccessPolicies?: PolicyDocument;
    /**
     * Specifies the status of the SnapshotOptions
     */
    SnapshotOptions?: SnapshotOptions;
    /**
     * The VPCOptions for the specified domain. For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains.
     */
    VPCOptions?: VPCDerivedInfo;
    /**
     * Specifies the status of the AdvancedOptions
     */
    AdvancedOptions?: AdvancedOptions;
    /**
     * Log publishing options for the given domain.
     */
    LogPublishingOptions?: LogPublishingOptions;
  }
  export type ElasticsearchDomainStatusList = ElasticsearchDomainStatus[];
  export type ElasticsearchInstanceTypeList = ESPartitionInstanceType[];
  export type ElasticsearchVersionList = ElasticsearchVersionString[];
  export interface ElasticsearchVersionStatus {
    /**
     *  Specifies the Elasticsearch version for the specified Elasticsearch domain.
     */
    Options: ElasticsearchVersionString;
    /**
     *  Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.
     */
    Status: OptionStatus;
  }
  export type ElasticsearchVersionString = string;
  export type EndpointsMap = {[key: string]: ServiceUrl};
  export type ErrorMessage = string;
  export interface InstanceCountLimits {
    MinimumInstanceCount?: MinimumInstanceCount;
    MaximumInstanceCount?: MaximumInstanceCount;
  }
  export interface InstanceLimits {
    InstanceCountLimits?: InstanceCountLimits;
  }
  export type InstanceRole = string;
  export type IntegerClass = number;
  export type LimitName = string;
  export type LimitValue = string;
  export type LimitValueList = LimitValue[];
  export interface Limits {
    /**
     * StorageType represents the list of storage related types and attributes that are available for given InstanceType. 
     */
    StorageTypes?: StorageTypeList;
    InstanceLimits?: InstanceLimits;
    /**
     *  List of additional limits that are specific to a given InstanceType and for each of it's  InstanceRole  . 
     */
    AdditionalLimits?: AdditionalLimitList;
  }
  export type LimitsByRole = {[key: string]: Limits};
  export interface ListDomainNamesResponse {
    /**
     * List of Elasticsearch domain names.
     */
    DomainNames?: DomainInfoList;
  }
  export interface ListElasticsearchInstanceTypesRequest {
    /**
     * Version of Elasticsearch for which list of supported elasticsearch instance types are needed. 
     */
    ElasticsearchVersion: ElasticsearchVersionString;
    /**
     * DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for list of available Elasticsearch instance types when modifying existing domain. 
     */
    DomainName?: DomainName;
    /**
     *  Set this value to limit the number of results returned. Value provided must be greater than 30 else it wont be honored. 
     */
    MaxResults?: MaxResults;
    /**
     * NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination. 
     */
    NextToken?: NextToken;
  }
  export interface ListElasticsearchInstanceTypesResponse {
    /**
     *  List of instance types supported by Amazon Elasticsearch service for given  ElasticsearchVersion  
     */
    ElasticsearchInstanceTypes?: ElasticsearchInstanceTypeList;
    /**
     * In case if there are more results available NextToken would be present, make further request to the same API with received NextToken to paginate remaining results. 
     */
    NextToken?: NextToken;
  }
  export interface ListElasticsearchVersionsRequest {
    /**
     *  Set this value to limit the number of results returned. Value provided must be greater than 10 else it wont be honored. 
     */
    MaxResults?: MaxResults;
    NextToken?: NextToken;
  }
  export interface ListElasticsearchVersionsResponse {
    ElasticsearchVersions?: ElasticsearchVersionList;
    NextToken?: NextToken;
  }
  export interface ListTagsRequest {
    /**
     *  Specify the ARN for the Elasticsearch domain to which the tags are attached that you want to view.
     */
    ARN: ARN;
  }
  export interface ListTagsResponse {
    /**
     *  List of Tag for the requested Elasticsearch domain.
     */
    TagList?: TagList;
  }
  export interface LogPublishingOption {
    CloudWatchLogsLogGroupArn?: CloudWatchLogsLogGroupArn;
    /**
     *  Specifies whether given log publishing option is enabled or not.
     */
    Enabled?: Boolean;
  }
  export type LogPublishingOptions = {[key: string]: LogPublishingOption};
  export interface LogPublishingOptionsStatus {
    /**
     * The log publishing options configured for the Elasticsearch domain.
     */
    Options?: LogPublishingOptions;
    /**
     * The status of the log publishing options for the Elasticsearch domain. See OptionStatus for the status information that's included. 
     */
    Status?: OptionStatus;
  }
  export type LogType = "INDEX_SLOW_LOGS"|"SEARCH_SLOW_LOGS"|string;
  export type MaxResults = number;
  export type MaximumInstanceCount = number;
  export type MinimumInstanceCount = number;
  export type NextToken = string;
  export type OptionState = "RequiresIndexDocuments"|"Processing"|"Active"|string;
  export interface OptionStatus {
    /**
     * Timestamp which tells the creation date for the entity.
     */
    CreationDate: UpdateTimestamp;
    /**
     * Timestamp which tells the last updated time for the entity.
     */
    UpdateDate: UpdateTimestamp;
    /**
     * Specifies the latest version for the entity.
     */
    UpdateVersion?: UIntValue;
    /**
     * Provides the OptionState for the Elasticsearch domain.
     */
    State: OptionState;
    /**
     * Indicates whether the Elasticsearch domain is being deleted.
     */
    PendingDeletion?: Boolean;
  }
  export type PolicyDocument = string;
  export interface RemoveTagsRequest {
    /**
     * Specifies the ARN for the Elasticsearch domain from which you want to delete the specified tags.
     */
    ARN: ARN;
    /**
     * Specifies the TagKey list which you want to remove from the Elasticsearch domain.
     */
    TagKeys: StringList;
  }
  export type ServiceUrl = string;
  export interface SnapshotOptions {
    /**
     * Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is 0 hours.
     */
    AutomatedSnapshotStartHour?: IntegerClass;
  }
  export interface SnapshotOptionsStatus {
    /**
     * Specifies the daily snapshot options specified for the Elasticsearch domain.
     */
    Options: SnapshotOptions;
    /**
     * Specifies the status of a daily automated snapshot.
     */
    Status: OptionStatus;
  }
  export type StorageSubTypeName = string;
  export interface StorageType {
    StorageTypeName?: StorageTypeName;
    StorageSubTypeName?: StorageSubTypeName;
    /**
     * List of limits that are applicable for given storage type. 
     */
    StorageTypeLimits?: StorageTypeLimitList;
  }
  export interface StorageTypeLimit {
    /**
     *  Name of storage limits that are applicable for given storage type. If  StorageType  is ebs, following storage options are applicable  MinimumVolumeSize Minimum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable. MaximumVolumeSize Maximum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable. MaximumIops Maximum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable. MinimumIops Minimum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable.  
     */
    LimitName?: LimitName;
    /**
     *  Values for the  StorageTypeLimit$LimitName  . 
     */
    LimitValues?: LimitValueList;
  }
  export type StorageTypeLimitList = StorageTypeLimit[];
  export type StorageTypeList = StorageType[];
  export type StorageTypeName = string;
  export type String = string;
  export type StringList = String[];
  export interface Tag {
    /**
     * Specifies the TagKey, the name of the tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.
     */
    Key: TagKey;
    /**
     * Specifies the TagValue, the value assigned to the corresponding tag key. Tag values can be null and do not have to be unique in a tag set. For example, you can have a key value pair in a tag set of project : Trinity and cost-center : Trinity
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagList = Tag[];
  export type TagValue = string;
  export type UIntValue = number;
  export interface UpdateElasticsearchDomainConfigRequest {
    /**
     * The name of the Elasticsearch domain that you are updating. 
     */
    DomainName: DomainName;
    /**
     * The type and number of instances to instantiate for the domain cluster.
     */
    ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
    /**
     * Specify the type and size of the EBS volume that you want to use. 
     */
    EBSOptions?: EBSOptions;
    /**
     * Option to set the time, in UTC format, for the daily automated snapshot. Default value is 0 hours. 
     */
    SnapshotOptions?: SnapshotOptions;
    /**
     * Options to specify the subnets and security groups for VPC endpoint. For more information, see Creating a VPC in VPC Endpoints for Amazon Elasticsearch Service Domains
     */
    VPCOptions?: VPCOptions;
    /**
     * Modifies the advanced option to allow references to indices in an HTTP request body. Must be false when configuring access to individual sub-resources. By default, the value is true. See Configuration Advanced Options for more information.
     */
    AdvancedOptions?: AdvancedOptions;
    /**
     * IAM access policy as a JSON-formatted string.
     */
    AccessPolicies?: PolicyDocument;
    /**
     * Map of LogType and LogPublishingOption, each containing options to publish a given type of Elasticsearch log.
     */
    LogPublishingOptions?: LogPublishingOptions;
  }
  export interface UpdateElasticsearchDomainConfigResponse {
    /**
     * The status of the updated Elasticsearch domain. 
     */
    DomainConfig: ElasticsearchDomainConfig;
  }
  export type UpdateTimestamp = Date;
  export interface VPCDerivedInfo {
    /**
     * The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.
     */
    VPCId?: String;
    /**
     * Specifies the subnets for VPC endpoint.
     */
    SubnetIds?: StringList;
    /**
     * The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.
     */
    AvailabilityZones?: StringList;
    /**
     * Specifies the security groups for VPC endpoint.
     */
    SecurityGroupIds?: StringList;
  }
  export interface VPCDerivedInfoStatus {
    /**
     *  Specifies the VPC options for the specified Elasticsearch domain.
     */
    Options: VPCDerivedInfo;
    /**
     *  Specifies the status of the VPC options for the specified Elasticsearch domain.
     */
    Status: OptionStatus;
  }
  export interface VPCOptions {
    /**
     * Specifies the subnets for VPC endpoint.
     */
    SubnetIds?: StringList;
    /**
     * Specifies the security groups for VPC endpoint.
     */
    SecurityGroupIds?: StringList;
  }
  export type VolumeType = "standard"|"gp2"|"io1"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-01-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ES client.
   */
  export import Types = ES;
}
export = ES;
