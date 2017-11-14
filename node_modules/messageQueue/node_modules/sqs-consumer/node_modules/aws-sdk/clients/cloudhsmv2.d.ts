import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CloudHSMV2 extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudHSMV2.Types.ClientConfiguration)
  config: Config & CloudHSMV2.Types.ClientConfiguration;
  /**
   * Creates a new AWS CloudHSM cluster.
   */
  createCluster(params: CloudHSMV2.Types.CreateClusterRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.CreateClusterResponse) => void): Request<CloudHSMV2.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates a new AWS CloudHSM cluster.
   */
  createCluster(callback?: (err: AWSError, data: CloudHSMV2.Types.CreateClusterResponse) => void): Request<CloudHSMV2.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.
   */
  createHsm(params: CloudHSMV2.Types.CreateHsmRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.CreateHsmResponse) => void): Request<CloudHSMV2.Types.CreateHsmResponse, AWSError>;
  /**
   * Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.
   */
  createHsm(callback?: (err: AWSError, data: CloudHSMV2.Types.CreateHsmResponse) => void): Request<CloudHSMV2.Types.CreateHsmResponse, AWSError>;
  /**
   * Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use DescribeClusters. To delete an HSM, use DeleteHsm.
   */
  deleteCluster(params: CloudHSMV2.Types.DeleteClusterRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.DeleteClusterResponse) => void): Request<CloudHSMV2.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use DescribeClusters. To delete an HSM, use DeleteHsm.
   */
  deleteCluster(callback?: (err: AWSError, data: CloudHSMV2.Types.DeleteClusterResponse) => void): Request<CloudHSMV2.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use DescribeClusters.
   */
  deleteHsm(params: CloudHSMV2.Types.DeleteHsmRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.DeleteHsmResponse) => void): Request<CloudHSMV2.Types.DeleteHsmResponse, AWSError>;
  /**
   * Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use DescribeClusters.
   */
  deleteHsm(callback?: (err: AWSError, data: CloudHSMV2.Types.DeleteHsmResponse) => void): Request<CloudHSMV2.Types.DeleteHsmResponse, AWSError>;
  /**
   * Gets information about backups of AWS CloudHSM clusters. This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a NextToken value. Use this value in a subsequent DescribeBackups request to get more backups. When you receive a response with no NextToken (or an empty or null value), that means there are no more backups to get.
   */
  describeBackups(params: CloudHSMV2.Types.DescribeBackupsRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.DescribeBackupsResponse) => void): Request<CloudHSMV2.Types.DescribeBackupsResponse, AWSError>;
  /**
   * Gets information about backups of AWS CloudHSM clusters. This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a NextToken value. Use this value in a subsequent DescribeBackups request to get more backups. When you receive a response with no NextToken (or an empty or null value), that means there are no more backups to get.
   */
  describeBackups(callback?: (err: AWSError, data: CloudHSMV2.Types.DescribeBackupsResponse) => void): Request<CloudHSMV2.Types.DescribeBackupsResponse, AWSError>;
  /**
   * Gets information about AWS CloudHSM clusters. This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a NextToken value. Use this value in a subsequent DescribeClusters request to get more clusters. When you receive a response with no NextToken (or an empty or null value), that means there are no more clusters to get.
   */
  describeClusters(params: CloudHSMV2.Types.DescribeClustersRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.DescribeClustersResponse) => void): Request<CloudHSMV2.Types.DescribeClustersResponse, AWSError>;
  /**
   * Gets information about AWS CloudHSM clusters. This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a NextToken value. Use this value in a subsequent DescribeClusters request to get more clusters. When you receive a response with no NextToken (or an empty or null value), that means there are no more clusters to get.
   */
  describeClusters(callback?: (err: AWSError, data: CloudHSMV2.Types.DescribeClustersResponse) => void): Request<CloudHSMV2.Types.DescribeClustersResponse, AWSError>;
  /**
   * Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use DescribeClusters.
   */
  initializeCluster(params: CloudHSMV2.Types.InitializeClusterRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.InitializeClusterResponse) => void): Request<CloudHSMV2.Types.InitializeClusterResponse, AWSError>;
  /**
   * Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use DescribeClusters.
   */
  initializeCluster(callback?: (err: AWSError, data: CloudHSMV2.Types.InitializeClusterResponse) => void): Request<CloudHSMV2.Types.InitializeClusterResponse, AWSError>;
  /**
   * Gets a list of tags for the specified AWS CloudHSM cluster. This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a NextToken value. Use this value in a subsequent ListTags request to get more tags. When you receive a response with no NextToken (or an empty or null value), that means there are no more tags to get.
   */
  listTags(params: CloudHSMV2.Types.ListTagsRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.ListTagsResponse) => void): Request<CloudHSMV2.Types.ListTagsResponse, AWSError>;
  /**
   * Gets a list of tags for the specified AWS CloudHSM cluster. This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a NextToken value. Use this value in a subsequent ListTags request to get more tags. When you receive a response with no NextToken (or an empty or null value), that means there are no more tags to get.
   */
  listTags(callback?: (err: AWSError, data: CloudHSMV2.Types.ListTagsResponse) => void): Request<CloudHSMV2.Types.ListTagsResponse, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.
   */
  tagResource(params: CloudHSMV2.Types.TagResourceRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.TagResourceResponse) => void): Request<CloudHSMV2.Types.TagResourceResponse, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.
   */
  tagResource(callback?: (err: AWSError, data: CloudHSMV2.Types.TagResourceResponse) => void): Request<CloudHSMV2.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the specified tag or tags from the specified AWS CloudHSM cluster.
   */
  untagResource(params: CloudHSMV2.Types.UntagResourceRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.UntagResourceResponse) => void): Request<CloudHSMV2.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the specified tag or tags from the specified AWS CloudHSM cluster.
   */
  untagResource(callback?: (err: AWSError, data: CloudHSMV2.Types.UntagResourceResponse) => void): Request<CloudHSMV2.Types.UntagResourceResponse, AWSError>;
}
declare namespace CloudHSMV2 {
  export interface Backup {
    /**
     * The identifier (ID) of the backup.
     */
    BackupId: BackupId;
    /**
     * The state of the backup.
     */
    BackupState?: BackupState;
    /**
     * The identifier (ID) of the cluster that was backed up.
     */
    ClusterId?: ClusterId;
    /**
     * The date and time when the backup was created.
     */
    CreateTimestamp?: Timestamp;
  }
  export type BackupId = string;
  export type BackupPolicy = "DEFAULT"|string;
  export type BackupState = "CREATE_IN_PROGRESS"|"READY"|"DELETED"|string;
  export type Backups = Backup[];
  export type Cert = string;
  export interface Certificates {
    /**
     * The cluster's certificate signing request (CSR). The CSR exists only when the cluster's state is UNINITIALIZED.
     */
    ClusterCsr?: Cert;
    /**
     * The HSM certificate issued (signed) by the HSM hardware.
     */
    HsmCertificate?: Cert;
    /**
     * The HSM hardware certificate issued (signed) by AWS CloudHSM.
     */
    AwsHardwareCertificate?: Cert;
    /**
     * The HSM hardware certificate issued (signed) by the hardware manufacturer.
     */
    ManufacturerHardwareCertificate?: Cert;
    /**
     * The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.
     */
    ClusterCertificate?: Cert;
  }
  export interface Cluster {
    /**
     * The cluster's backup policy.
     */
    BackupPolicy?: BackupPolicy;
    /**
     * The cluster's identifier (ID).
     */
    ClusterId?: ClusterId;
    /**
     * The date and time when the cluster was created.
     */
    CreateTimestamp?: Timestamp;
    /**
     * Contains information about the HSMs in the cluster.
     */
    Hsms?: Hsms;
    /**
     * The type of HSM that the cluster contains.
     */
    HsmType?: HsmType;
    /**
     * The default password for the cluster's Pre-Crypto Officer (PRECO) user.
     */
    PreCoPassword?: PreCoPassword;
    /**
     * The identifier (ID) of the cluster's security group.
     */
    SecurityGroup?: SecurityGroup;
    /**
     * The identifier (ID) of the backup used to create the cluster. This value exists only when the cluster was created from a backup.
     */
    SourceBackupId?: BackupId;
    /**
     * The cluster's state.
     */
    State?: ClusterState;
    /**
     * A description of the cluster's state.
     */
    StateMessage?: StateMessage;
    /**
     * A map of the cluster's subnets and their corresponding Availability Zones.
     */
    SubnetMapping?: ExternalSubnetMapping;
    /**
     * The identifier (ID) of the virtual private cloud (VPC) that contains the cluster.
     */
    VpcId?: VpcId;
    /**
     * Contains one or more certificates or a certificate signing request (CSR).
     */
    Certificates?: Certificates;
  }
  export type ClusterId = string;
  export type ClusterState = "CREATE_IN_PROGRESS"|"UNINITIALIZED"|"INITIALIZE_IN_PROGRESS"|"INITIALIZED"|"ACTIVE"|"UPDATE_IN_PROGRESS"|"DELETE_IN_PROGRESS"|"DELETED"|"DEGRADED"|string;
  export type Clusters = Cluster[];
  export interface CreateClusterRequest {
    /**
     * The identifiers (IDs) of the subnets where you are creating the cluster. You must specify at least one subnet. If you specify multiple subnets, they must meet the following criteria:   All subnets must be in the same virtual private cloud (VPC).   You can specify only one subnet per Availability Zone.  
     */
    SubnetIds: SubnetIds;
    /**
     * The type of HSM to use in the cluster. Currently the only allowed value is hsm1.medium.
     */
    HsmType: HsmType;
    /**
     * The identifier (ID) of the cluster backup to restore. Use this value to restore the cluster from a backup instead of creating a new cluster. To find the backup ID, use DescribeBackups.
     */
    SourceBackupId?: BackupId;
  }
  export interface CreateClusterResponse {
    /**
     * Information about the cluster that was created.
     */
    Cluster?: Cluster;
  }
  export interface CreateHsmRequest {
    /**
     * The identifier (ID) of the HSM's cluster. To find the cluster ID, use DescribeClusters.
     */
    ClusterId: ClusterId;
    /**
     * The Availability Zone where you are creating the HSM. To find the cluster's Availability Zones, use DescribeClusters.
     */
    AvailabilityZone: ExternalAz;
    /**
     * The HSM's IP address. If you specify an IP address, use an available address from the subnet that maps to the Availability Zone where you are creating the HSM. If you don't specify an IP address, one is chosen for you from that subnet.
     */
    IpAddress?: IpAddress;
  }
  export interface CreateHsmResponse {
    /**
     * Information about the HSM that was created.
     */
    Hsm?: Hsm;
  }
  export interface DeleteClusterRequest {
    /**
     * The identifier (ID) of the cluster that you are deleting. To find the cluster ID, use DescribeClusters.
     */
    ClusterId: ClusterId;
  }
  export interface DeleteClusterResponse {
    /**
     * Information about the cluster that was deleted.
     */
    Cluster?: Cluster;
  }
  export interface DeleteHsmRequest {
    /**
     * The identifier (ID) of the cluster that contains the HSM that you are deleting.
     */
    ClusterId: ClusterId;
    /**
     * The identifier (ID) of the HSM that you are deleting.
     */
    HsmId?: HsmId;
    /**
     * The identifier (ID) of the elastic network interface (ENI) of the HSM that you are deleting.
     */
    EniId?: EniId;
    /**
     * The IP address of the elastic network interface (ENI) of the HSM that you are deleting.
     */
    EniIp?: IpAddress;
  }
  export interface DeleteHsmResponse {
    /**
     * The identifier (ID) of the HSM that was deleted.
     */
    HsmId?: HsmId;
  }
  export interface DescribeBackupsRequest {
    /**
     * The NextToken value that you received in the previous response. Use this value to get more backups.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of backups to return in the response. When there are more backups than the number you specify, the response contains a NextToken value.
     */
    MaxResults?: MaxSize;
    /**
     * One or more filters to limit the items returned in the response. Use the backupIds filter to return only the specified backups. Specify backups by their backup identifier (ID). Use the clusterIds filter to return only the backups for the specified clusters. Specify clusters by their cluster identifier (ID). Use the states filter to return only backups that match the specified state.
     */
    Filters?: Filters;
  }
  export interface DescribeBackupsResponse {
    /**
     * A list of backups.
     */
    Backups?: Backups;
    /**
     * An opaque string that indicates that the response contains only a subset of backups. Use this value in a subsequent DescribeBackups request to get more backups.
     */
    NextToken?: NextToken;
  }
  export interface DescribeClustersRequest {
    /**
     * One or more filters to limit the items returned in the response. Use the clusterIds filter to return only the specified clusters. Specify clusters by their cluster identifier (ID). Use the vpcIds filter to return only the clusters in the specified virtual private clouds (VPCs). Specify VPCs by their VPC identifier (ID). Use the states filter to return only clusters that match the specified state.
     */
    Filters?: Filters;
    /**
     * The NextToken value that you received in the previous response. Use this value to get more clusters.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of clusters to return in the response. When there are more clusters than the number you specify, the response contains a NextToken value.
     */
    MaxResults?: MaxSize;
  }
  export interface DescribeClustersResponse {
    /**
     * A list of clusters.
     */
    Clusters?: Clusters;
    /**
     * An opaque string that indicates that the response contains only a subset of clusters. Use this value in a subsequent DescribeClusters request to get more clusters.
     */
    NextToken?: NextToken;
  }
  export type EniId = string;
  export type ExternalAz = string;
  export type ExternalSubnetMapping = {[key: string]: SubnetId};
  export type Field = string;
  export type Filters = {[key: string]: Strings};
  export interface Hsm {
    /**
     * The Availability Zone that contains the HSM.
     */
    AvailabilityZone?: ExternalAz;
    /**
     * The identifier (ID) of the cluster that contains the HSM.
     */
    ClusterId?: ClusterId;
    /**
     * The subnet that contains the HSM's elastic network interface (ENI).
     */
    SubnetId?: SubnetId;
    /**
     * The identifier (ID) of the HSM's elastic network interface (ENI).
     */
    EniId?: EniId;
    /**
     * The IP address of the HSM's elastic network interface (ENI).
     */
    EniIp?: IpAddress;
    /**
     * The HSM's identifier (ID).
     */
    HsmId: HsmId;
    /**
     * The HSM's state.
     */
    State?: HsmState;
    /**
     * A description of the HSM's state.
     */
    StateMessage?: String;
  }
  export type HsmId = string;
  export type HsmState = "CREATE_IN_PROGRESS"|"ACTIVE"|"DEGRADED"|"DELETE_IN_PROGRESS"|"DELETED"|string;
  export type HsmType = string;
  export type Hsms = Hsm[];
  export interface InitializeClusterRequest {
    /**
     * The identifier (ID) of the cluster that you are claiming. To find the cluster ID, use DescribeClusters.
     */
    ClusterId: ClusterId;
    /**
     * The cluster certificate issued (signed) by your issuing certificate authority (CA). The certificate must be in PEM format.
     */
    SignedCert: Cert;
    /**
     * The issuing certificate of the issuing certificate authority (CA) that issued (signed) the cluster certificate. This can be a root (self-signed) certificate or a certificate chain that begins with the certificate that issued the cluster certificate and ends with a root certificate. The certificate or certificate chain must be in PEM format.
     */
    TrustAnchor: Cert;
  }
  export interface InitializeClusterResponse {
    /**
     * The cluster's state.
     */
    State?: ClusterState;
    /**
     * A description of the cluster's state.
     */
    StateMessage?: StateMessage;
  }
  export type IpAddress = string;
  export interface ListTagsRequest {
    /**
     * The cluster identifier (ID) for the cluster whose tags you are getting. To find the cluster ID, use DescribeClusters.
     */
    ResourceId: ClusterId;
    /**
     * The NextToken value that you received in the previous response. Use this value to get more tags.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of tags to return in the response. When there are more tags than the number you specify, the response contains a NextToken value.
     */
    MaxResults?: MaxSize;
  }
  export interface ListTagsResponse {
    /**
     * A list of tags.
     */
    TagList: TagList;
    /**
     * An opaque string that indicates that the response contains only a subset of tags. Use this value in a subsequent ListTags request to get more tags.
     */
    NextToken?: NextToken;
  }
  export type MaxSize = number;
  export type NextToken = string;
  export type PreCoPassword = string;
  export type SecurityGroup = string;
  export type StateMessage = string;
  export type String = string;
  export type Strings = String[];
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export interface Tag {
    /**
     * The key of the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The cluster identifier (ID) for the cluster that you are tagging. To find the cluster ID, use DescribeClusters.
     */
    ResourceId: ClusterId;
    /**
     * A list of one or more tags.
     */
    TagList: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The cluster identifier (ID) for the cluster whose tags you are removing. To find the cluster ID, use DescribeClusters.
     */
    ResourceId: ClusterId;
    /**
     * A list of one or more tag keys for the tags that you are removing. Specify only the tag keys, not the tag values.
     */
    TagKeyList: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export type VpcId = string;
  export type errorMessage = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-04-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CloudHSMV2 client.
   */
  export import Types = CloudHSMV2;
}
export = CloudHSMV2;
