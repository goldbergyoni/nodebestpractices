import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Snowball extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Snowball.Types.ClientConfiguration)
  config: Config & Snowball.Types.ClientConfiguration;
  /**
   * Cancels a cluster job. You can only cancel a cluster job while it's in the AwaitingQuorum status. You'll have at least an hour after creating a cluster job to cancel it.
   */
  cancelCluster(params: Snowball.Types.CancelClusterRequest, callback?: (err: AWSError, data: Snowball.Types.CancelClusterResult) => void): Request<Snowball.Types.CancelClusterResult, AWSError>;
  /**
   * Cancels a cluster job. You can only cancel a cluster job while it's in the AwaitingQuorum status. You'll have at least an hour after creating a cluster job to cancel it.
   */
  cancelCluster(callback?: (err: AWSError, data: Snowball.Types.CancelClusterResult) => void): Request<Snowball.Types.CancelClusterResult, AWSError>;
  /**
   * Cancels the specified job. You can only cancel a job before its JobState value changes to PreparingAppliance. Requesting the ListJobs or DescribeJob action will return a job's JobState as part of the response element data returned.
   */
  cancelJob(params: Snowball.Types.CancelJobRequest, callback?: (err: AWSError, data: Snowball.Types.CancelJobResult) => void): Request<Snowball.Types.CancelJobResult, AWSError>;
  /**
   * Cancels the specified job. You can only cancel a job before its JobState value changes to PreparingAppliance. Requesting the ListJobs or DescribeJob action will return a job's JobState as part of the response element data returned.
   */
  cancelJob(callback?: (err: AWSError, data: Snowball.Types.CancelJobResult) => void): Request<Snowball.Types.CancelJobResult, AWSError>;
  /**
   * Creates an address for a Snowball to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.
   */
  createAddress(params: Snowball.Types.CreateAddressRequest, callback?: (err: AWSError, data: Snowball.Types.CreateAddressResult) => void): Request<Snowball.Types.CreateAddressResult, AWSError>;
  /**
   * Creates an address for a Snowball to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.
   */
  createAddress(callback?: (err: AWSError, data: Snowball.Types.CreateAddressResult) => void): Request<Snowball.Types.CreateAddressResult, AWSError>;
  /**
   * Creates an empty cluster. Each cluster supports five nodes. You use the CreateJob action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.
   */
  createCluster(params: Snowball.Types.CreateClusterRequest, callback?: (err: AWSError, data: Snowball.Types.CreateClusterResult) => void): Request<Snowball.Types.CreateClusterResult, AWSError>;
  /**
   * Creates an empty cluster. Each cluster supports five nodes. You use the CreateJob action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.
   */
  createCluster(callback?: (err: AWSError, data: Snowball.Types.CreateClusterResult) => void): Request<Snowball.Types.CreateClusterResult, AWSError>;
  /**
   * Creates a job to import or export data between Amazon S3 and your on-premises data center. Your AWS account must have the right trust policies and permissions in place to create a job for Snowball. If you're creating a job for a node in a cluster, you only need to provide the clusterId value; the other job attributes are inherited from the cluster. 
   */
  createJob(params: Snowball.Types.CreateJobRequest, callback?: (err: AWSError, data: Snowball.Types.CreateJobResult) => void): Request<Snowball.Types.CreateJobResult, AWSError>;
  /**
   * Creates a job to import or export data between Amazon S3 and your on-premises data center. Your AWS account must have the right trust policies and permissions in place to create a job for Snowball. If you're creating a job for a node in a cluster, you only need to provide the clusterId value; the other job attributes are inherited from the cluster. 
   */
  createJob(callback?: (err: AWSError, data: Snowball.Types.CreateJobResult) => void): Request<Snowball.Types.CreateJobResult, AWSError>;
  /**
   * Takes an AddressId and returns specific details about that address in the form of an Address object.
   */
  describeAddress(params: Snowball.Types.DescribeAddressRequest, callback?: (err: AWSError, data: Snowball.Types.DescribeAddressResult) => void): Request<Snowball.Types.DescribeAddressResult, AWSError>;
  /**
   * Takes an AddressId and returns specific details about that address in the form of an Address object.
   */
  describeAddress(callback?: (err: AWSError, data: Snowball.Types.DescribeAddressResult) => void): Request<Snowball.Types.DescribeAddressResult, AWSError>;
  /**
   * Returns a specified number of ADDRESS objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.
   */
  describeAddresses(params: Snowball.Types.DescribeAddressesRequest, callback?: (err: AWSError, data: Snowball.Types.DescribeAddressesResult) => void): Request<Snowball.Types.DescribeAddressesResult, AWSError>;
  /**
   * Returns a specified number of ADDRESS objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.
   */
  describeAddresses(callback?: (err: AWSError, data: Snowball.Types.DescribeAddressesResult) => void): Request<Snowball.Types.DescribeAddressesResult, AWSError>;
  /**
   * Returns information about a specific cluster including shipping information, cluster status, and other important metadata.
   */
  describeCluster(params: Snowball.Types.DescribeClusterRequest, callback?: (err: AWSError, data: Snowball.Types.DescribeClusterResult) => void): Request<Snowball.Types.DescribeClusterResult, AWSError>;
  /**
   * Returns information about a specific cluster including shipping information, cluster status, and other important metadata.
   */
  describeCluster(callback?: (err: AWSError, data: Snowball.Types.DescribeClusterResult) => void): Request<Snowball.Types.DescribeClusterResult, AWSError>;
  /**
   * Returns information about a specific job including shipping information, job status, and other important metadata. 
   */
  describeJob(params: Snowball.Types.DescribeJobRequest, callback?: (err: AWSError, data: Snowball.Types.DescribeJobResult) => void): Request<Snowball.Types.DescribeJobResult, AWSError>;
  /**
   * Returns information about a specific job including shipping information, job status, and other important metadata. 
   */
  describeJob(callback?: (err: AWSError, data: Snowball.Types.DescribeJobResult) => void): Request<Snowball.Types.DescribeJobResult, AWSError>;
  /**
   * Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified JobId value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the GetJobManifest action. The manifest is an encrypted file that you can download after your job enters the WithCustomer status. The manifest is decrypted by using the UnlockCode code value, when you pass both values to the Snowball through the Snowball client when the client is started for the first time. As a best practice, we recommend that you don't save a copy of an UnlockCode value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job. The credentials of a given job, including its manifest file and unlock code, expire 90 days after the job is created.
   */
  getJobManifest(params: Snowball.Types.GetJobManifestRequest, callback?: (err: AWSError, data: Snowball.Types.GetJobManifestResult) => void): Request<Snowball.Types.GetJobManifestResult, AWSError>;
  /**
   * Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified JobId value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the GetJobManifest action. The manifest is an encrypted file that you can download after your job enters the WithCustomer status. The manifest is decrypted by using the UnlockCode code value, when you pass both values to the Snowball through the Snowball client when the client is started for the first time. As a best practice, we recommend that you don't save a copy of an UnlockCode value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job. The credentials of a given job, including its manifest file and unlock code, expire 90 days after the job is created.
   */
  getJobManifest(callback?: (err: AWSError, data: Snowball.Types.GetJobManifestResult) => void): Request<Snowball.Types.GetJobManifestResult, AWSError>;
  /**
   * Returns the UnlockCode code value for the specified job. A particular UnlockCode value can be accessed for up to 90 days after the associated job has been created. The UnlockCode value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snowball through the Snowball client when the client is started for the first time. As a best practice, we recommend that you don't save a copy of the UnlockCode in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job.
   */
  getJobUnlockCode(params: Snowball.Types.GetJobUnlockCodeRequest, callback?: (err: AWSError, data: Snowball.Types.GetJobUnlockCodeResult) => void): Request<Snowball.Types.GetJobUnlockCodeResult, AWSError>;
  /**
   * Returns the UnlockCode code value for the specified job. A particular UnlockCode value can be accessed for up to 90 days after the associated job has been created. The UnlockCode value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snowball through the Snowball client when the client is started for the first time. As a best practice, we recommend that you don't save a copy of the UnlockCode in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job.
   */
  getJobUnlockCode(callback?: (err: AWSError, data: Snowball.Types.GetJobUnlockCodeResult) => void): Request<Snowball.Types.GetJobUnlockCodeResult, AWSError>;
  /**
   * Returns information about the Snowball service limit for your account, and also the number of Snowballs your account has in use. The default service limit for the number of Snowballs that you can have at one time is 1. If you want to increase your service limit, contact AWS Support.
   */
  getSnowballUsage(params: Snowball.Types.GetSnowballUsageRequest, callback?: (err: AWSError, data: Snowball.Types.GetSnowballUsageResult) => void): Request<Snowball.Types.GetSnowballUsageResult, AWSError>;
  /**
   * Returns information about the Snowball service limit for your account, and also the number of Snowballs your account has in use. The default service limit for the number of Snowballs that you can have at one time is 1. If you want to increase your service limit, contact AWS Support.
   */
  getSnowballUsage(callback?: (err: AWSError, data: Snowball.Types.GetSnowballUsageResult) => void): Request<Snowball.Types.GetSnowballUsageResult, AWSError>;
  /**
   * Returns an array of JobListEntry objects of the specified length. Each JobListEntry object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.
   */
  listClusterJobs(params: Snowball.Types.ListClusterJobsRequest, callback?: (err: AWSError, data: Snowball.Types.ListClusterJobsResult) => void): Request<Snowball.Types.ListClusterJobsResult, AWSError>;
  /**
   * Returns an array of JobListEntry objects of the specified length. Each JobListEntry object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.
   */
  listClusterJobs(callback?: (err: AWSError, data: Snowball.Types.ListClusterJobsResult) => void): Request<Snowball.Types.ListClusterJobsResult, AWSError>;
  /**
   * Returns an array of ClusterListEntry objects of the specified length. Each ClusterListEntry object contains a cluster's state, a cluster's ID, and other important status information.
   */
  listClusters(params: Snowball.Types.ListClustersRequest, callback?: (err: AWSError, data: Snowball.Types.ListClustersResult) => void): Request<Snowball.Types.ListClustersResult, AWSError>;
  /**
   * Returns an array of ClusterListEntry objects of the specified length. Each ClusterListEntry object contains a cluster's state, a cluster's ID, and other important status information.
   */
  listClusters(callback?: (err: AWSError, data: Snowball.Types.ListClustersResult) => void): Request<Snowball.Types.ListClustersResult, AWSError>;
  /**
   * Returns an array of JobListEntry objects of the specified length. Each JobListEntry object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.
   */
  listJobs(params: Snowball.Types.ListJobsRequest, callback?: (err: AWSError, data: Snowball.Types.ListJobsResult) => void): Request<Snowball.Types.ListJobsResult, AWSError>;
  /**
   * Returns an array of JobListEntry objects of the specified length. Each JobListEntry object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.
   */
  listJobs(callback?: (err: AWSError, data: Snowball.Types.ListJobsResult) => void): Request<Snowball.Types.ListJobsResult, AWSError>;
  /**
   * While a cluster's ClusterState value is in the AwaitingQuorum state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.
   */
  updateCluster(params: Snowball.Types.UpdateClusterRequest, callback?: (err: AWSError, data: Snowball.Types.UpdateClusterResult) => void): Request<Snowball.Types.UpdateClusterResult, AWSError>;
  /**
   * While a cluster's ClusterState value is in the AwaitingQuorum state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.
   */
  updateCluster(callback?: (err: AWSError, data: Snowball.Types.UpdateClusterResult) => void): Request<Snowball.Types.UpdateClusterResult, AWSError>;
  /**
   * While a job's JobState value is New, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.
   */
  updateJob(params: Snowball.Types.UpdateJobRequest, callback?: (err: AWSError, data: Snowball.Types.UpdateJobResult) => void): Request<Snowball.Types.UpdateJobResult, AWSError>;
  /**
   * While a job's JobState value is New, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.
   */
  updateJob(callback?: (err: AWSError, data: Snowball.Types.UpdateJobResult) => void): Request<Snowball.Types.UpdateJobResult, AWSError>;
}
declare namespace Snowball {
  export interface Address {
    /**
     * The unique ID for an address.
     */
    AddressId?: AddressId;
    /**
     * The name of a person to receive a Snowball at an address.
     */
    Name?: String;
    /**
     * The name of the company to receive a Snowball at an address.
     */
    Company?: String;
    /**
     * The first line in a street address that a Snowball is to be delivered to.
     */
    Street1?: String;
    /**
     * The second line in a street address that a Snowball is to be delivered to.
     */
    Street2?: String;
    /**
     * The third line in a street address that a Snowball is to be delivered to.
     */
    Street3?: String;
    /**
     * The city in an address that a Snowball is to be delivered to.
     */
    City?: String;
    /**
     * The state or province in an address that a Snowball is to be delivered to.
     */
    StateOrProvince?: String;
    /**
     * This field is no longer used and the value is ignored.
     */
    PrefectureOrDistrict?: String;
    /**
     * This field is no longer used and the value is ignored.
     */
    Landmark?: String;
    /**
     * The country in an address that a Snowball is to be delivered to.
     */
    Country?: String;
    /**
     * The postal code in an address that a Snowball is to be delivered to.
     */
    PostalCode?: String;
    /**
     * The phone number associated with an address that a Snowball is to be delivered to.
     */
    PhoneNumber?: String;
    /**
     * If the address you are creating is a primary address, then set this option to true. This field is not supported in most regions.
     */
    IsRestricted?: Boolean;
  }
  export type AddressId = string;
  export type AddressList = Address[];
  export type Boolean = boolean;
  export interface CancelClusterRequest {
    /**
     * The 39-character ID for the cluster that you want to cancel, for example CID123e4567-e89b-12d3-a456-426655440000.
     */
    ClusterId: ClusterId;
  }
  export interface CancelClusterResult {
  }
  export interface CancelJobRequest {
    /**
     * The 39-character job ID for the job that you want to cancel, for example JID123e4567-e89b-12d3-a456-426655440000.
     */
    JobId: JobId;
  }
  export interface CancelJobResult {
  }
  export type ClusterId = string;
  export interface ClusterListEntry {
    /**
     * The 39-character ID for the cluster that you want to list, for example CID123e4567-e89b-12d3-a456-426655440000.
     */
    ClusterId?: String;
    /**
     * The current state of this cluster. For information about the state of a specific node, see JobListEntry$JobState.
     */
    ClusterState?: ClusterState;
    /**
     * The creation date for this cluster.
     */
    CreationDate?: Timestamp;
    /**
     * Defines an optional description of the cluster, for example Environmental Data Cluster-01.
     */
    Description?: String;
  }
  export type ClusterListEntryList = ClusterListEntry[];
  export interface ClusterMetadata {
    /**
     * The automatically generated ID for a cluster.
     */
    ClusterId?: String;
    /**
     * The optional description of the cluster.
     */
    Description?: String;
    /**
     * The KmsKeyARN Amazon Resource Name (ARN) associated with this cluster. This ARN was created using the CreateKey API action in AWS Key Management Service (AWS KMS).
     */
    KmsKeyARN?: KmsKeyARN;
    /**
     * The role ARN associated with this cluster. This ARN was created using the CreateRole API action in AWS Identity and Access Management (IAM).
     */
    RoleARN?: RoleARN;
    /**
     * The current status of the cluster.
     */
    ClusterState?: ClusterState;
    /**
     * The type of job for this cluster. Currently, the only job type supported for clusters is LOCAL_USE.
     */
    JobType?: JobType;
    /**
     * The type of AWS Snowball appliance to use for this cluster. Currently, the only supported appliance type for cluster jobs is EDGE.
     */
    SnowballType?: SnowballType;
    /**
     * The creation date for this cluster.
     */
    CreationDate?: Timestamp;
    /**
     * The arrays of JobResource objects that can include updated S3Resource objects or LambdaResource objects.
     */
    Resources?: JobResource;
    /**
     * The automatically generated ID for a specific address.
     */
    AddressId?: AddressId;
    /**
     * The shipping speed for each node in this cluster. This speed doesn't dictate how soon you'll get each Snowball Edge appliance, rather it represents how quickly each appliance moves to its destination while in transit. Regional shipping speeds are as follows:   In Australia, you have access to express shipping. Typically, appliances shipped express are delivered in about a day.   In the European Union (EU), you have access to express shipping. Typically, Snowball Edges shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.   In India, Snowball Edges are delivered in one to seven days.   In the US, you have access to one-day shipping and two-day shipping.  
     */
    ShippingOption?: ShippingOption;
    /**
     * The Amazon Simple Notification Service (Amazon SNS) notification settings for this cluster.
     */
    Notification?: Notification;
    /**
     * The ID of the address that you want a cluster shipped to, after it will be shipped to its primary address. This field is not supported in most regions.
     */
    ForwardingAddressId?: AddressId;
  }
  export type ClusterState = "AwaitingQuorum"|"Pending"|"InUse"|"Complete"|"Cancelled"|string;
  export interface CreateAddressRequest {
    /**
     * The address that you want the Snowball shipped to.
     */
    Address: Address;
  }
  export interface CreateAddressResult {
    /**
     * The automatically generated ID for a specific address. You'll use this ID when you create a job to specify which address you want the Snowball for that job shipped to.
     */
    AddressId?: String;
  }
  export interface CreateClusterRequest {
    /**
     * The type of job for this cluster. Currently, the only job type supported for clusters is LOCAL_USE.
     */
    JobType: JobType;
    /**
     * The resources associated with the cluster job. These resources include Amazon S3 buckets and optional AWS Lambda functions written in the Python language. 
     */
    Resources: JobResource;
    /**
     * An optional description of this specific cluster, for example Environmental Data Cluster-01.
     */
    Description?: String;
    /**
     * The ID for the address that you want the cluster shipped to.&gt;
     */
    AddressId: AddressId;
    /**
     * The KmsKeyARN value that you want to associate with this cluster. KmsKeyARN values are created by using the CreateKey API action in AWS Key Management Service (AWS KMS). 
     */
    KmsKeyARN?: KmsKeyARN;
    /**
     * The RoleARN that you want to associate with this cluster. RoleArn values are created by using the CreateRole API action in AWS Identity and Access Management (IAM).
     */
    RoleARN: RoleARN;
    /**
     * The type of AWS Snowball appliance to use for this cluster. Currently, the only supported appliance type for cluster jobs is EDGE.
     */
    SnowballType?: SnowballType;
    /**
     * The shipping speed for each node in this cluster. This speed doesn't dictate how soon you'll get each Snowball Edge appliance, rather it represents how quickly each appliance moves to its destination while in transit. Regional shipping speeds are as follows:   In Australia, you have access to express shipping. Typically, appliances shipped express are delivered in about a day.   In the European Union (EU), you have access to express shipping. Typically, Snowball Edges shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.   In India, Snowball Edges are delivered in one to seven days.   In the US, you have access to one-day shipping and two-day shipping.  
     */
    ShippingOption: ShippingOption;
    /**
     * The Amazon Simple Notification Service (Amazon SNS) notification settings for this cluster.
     */
    Notification?: Notification;
    /**
     * The forwarding address ID for a cluster. This field is not supported in most regions.
     */
    ForwardingAddressId?: AddressId;
  }
  export interface CreateClusterResult {
    /**
     * The automatically generated ID for a cluster.
     */
    ClusterId?: ClusterId;
  }
  export interface CreateJobRequest {
    /**
     * Defines the type of job that you're creating. 
     */
    JobType?: JobType;
    /**
     * Defines the Amazon S3 buckets associated with this job. With IMPORT jobs, you specify the bucket or buckets that your transferred data will be imported into. With EXPORT jobs, you specify the bucket or buckets that your transferred data will be exported from. Optionally, you can also specify a KeyRange value. If you choose to export a range, you define the length of the range by providing either an inclusive BeginMarker value, an inclusive EndMarker value, or both. Ranges are UTF-8 binary sorted.
     */
    Resources?: JobResource;
    /**
     * Defines an optional description of this specific job, for example Important Photos 2016-08-11.
     */
    Description?: String;
    /**
     * The ID for the address that you want the Snowball shipped to.
     */
    AddressId?: AddressId;
    /**
     * The KmsKeyARN that you want to associate with this job. KmsKeyARNs are created using the CreateKey AWS Key Management Service (KMS) API action.
     */
    KmsKeyARN?: KmsKeyARN;
    /**
     * The RoleARN that you want to associate with this job. RoleArns are created using the CreateRole AWS Identity and Access Management (IAM) API action.
     */
    RoleARN?: RoleARN;
    /**
     * If your job is being created in one of the US regions, you have the option of specifying what size Snowball you'd like for this job. In all other regions, Snowballs come with 80 TB in storage capacity.
     */
    SnowballCapacityPreference?: SnowballCapacity;
    /**
     * The shipping speed for this job. This speed doesn't dictate how soon you'll get the Snowball, rather it represents how quickly the Snowball moves to its destination while in transit. Regional shipping speeds are as follows:   In Australia, you have access to express shipping. Typically, Snowballs shipped express are delivered in about a day.   In the European Union (EU), you have access to express shipping. Typically, Snowballs shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.   In India, Snowballs are delivered in one to seven days.   In the US, you have access to one-day shipping and two-day shipping.  
     */
    ShippingOption?: ShippingOption;
    /**
     * Defines the Amazon Simple Notification Service (Amazon SNS) notification settings for this job.
     */
    Notification?: Notification;
    /**
     * The ID of a cluster. If you're creating a job for a node in a cluster, you need to provide only this clusterId value. The other job attributes are inherited from the cluster.
     */
    ClusterId?: ClusterId;
    /**
     * The type of AWS Snowball appliance to use for this job. Currently, the only supported appliance type for cluster jobs is EDGE.
     */
    SnowballType?: SnowballType;
    /**
     * The forwarding address ID for a job. This field is not supported in most regions.
     */
    ForwardingAddressId?: AddressId;
  }
  export interface CreateJobResult {
    /**
     * The automatically generated ID for a job, for example JID123e4567-e89b-12d3-a456-426655440000.
     */
    JobId?: JobId;
  }
  export interface DataTransfer {
    /**
     * The number of bytes transferred between a Snowball and Amazon S3.
     */
    BytesTransferred?: Long;
    /**
     * The number of objects transferred between a Snowball and Amazon S3.
     */
    ObjectsTransferred?: Long;
    /**
     * The total bytes of data for a transfer between a Snowball and Amazon S3. This value is set to 0 (zero) until all the keys that will be transferred have been listed.
     */
    TotalBytes?: Long;
    /**
     * The total number of objects for a transfer between a Snowball and Amazon S3. This value is set to 0 (zero) until all the keys that will be transferred have been listed.
     */
    TotalObjects?: Long;
  }
  export interface DescribeAddressRequest {
    /**
     * The automatically generated ID for a specific address.
     */
    AddressId: AddressId;
  }
  export interface DescribeAddressResult {
    /**
     * The address that you want the Snowball or Snowballs associated with a specific job to be shipped to.
     */
    Address?: Address;
  }
  export interface DescribeAddressesRequest {
    /**
     * The number of ADDRESS objects to return.
     */
    MaxResults?: ListLimit;
    /**
     * HTTP requests are stateless. To identify what object comes "next" in the list of ADDRESS objects, you have the option of specifying a value for NextToken as the starting point for your list of returned addresses.
     */
    NextToken?: String;
  }
  export interface DescribeAddressesResult {
    /**
     * The Snowball shipping addresses that were created for this account.
     */
    Addresses?: AddressList;
    /**
     * HTTP requests are stateless. If you use the automatically generated NextToken value in your next DescribeAddresses call, your list of returned addresses will start from this point in the array.
     */
    NextToken?: String;
  }
  export interface DescribeClusterRequest {
    /**
     * The automatically generated ID for a cluster.
     */
    ClusterId: ClusterId;
  }
  export interface DescribeClusterResult {
    /**
     * Information about a specific cluster, including shipping information, cluster status, and other important metadata.
     */
    ClusterMetadata?: ClusterMetadata;
  }
  export interface DescribeJobRequest {
    /**
     * The automatically generated ID for a job, for example JID123e4567-e89b-12d3-a456-426655440000.
     */
    JobId: JobId;
  }
  export interface DescribeJobResult {
    /**
     * Information about a specific job, including shipping information, job status, and other important metadata.
     */
    JobMetadata?: JobMetadata;
    /**
     * Information about a specific job part (in the case of an export job), including shipping information, job status, and other important metadata.
     */
    SubJobMetadata?: JobMetadataList;
  }
  export interface EventTriggerDefinition {
    /**
     * The Amazon Resource Name (ARN) for any local Amazon S3 resource that is an AWS Lambda function's event trigger associated with this job.
     */
    EventResourceARN?: ResourceARN;
  }
  export type EventTriggerDefinitionList = EventTriggerDefinition[];
  export interface GetJobManifestRequest {
    /**
     * The ID for a job that you want to get the manifest file for, for example JID123e4567-e89b-12d3-a456-426655440000.
     */
    JobId: JobId;
  }
  export interface GetJobManifestResult {
    /**
     * The Amazon S3 presigned URL for the manifest file associated with the specified JobId value.
     */
    ManifestURI?: String;
  }
  export interface GetJobUnlockCodeRequest {
    /**
     * The ID for the job that you want to get the UnlockCode value for, for example JID123e4567-e89b-12d3-a456-426655440000.
     */
    JobId: JobId;
  }
  export interface GetJobUnlockCodeResult {
    /**
     * The UnlockCode value for the specified job. The UnlockCode value can be accessed for up to 90 days after the job has been created.
     */
    UnlockCode?: String;
  }
  export interface GetSnowballUsageRequest {
  }
  export interface GetSnowballUsageResult {
    /**
     * The service limit for number of Snowballs this account can have at once. The default service limit is 1 (one).
     */
    SnowballLimit?: Integer;
    /**
     * The number of Snowballs that this account is currently using.
     */
    SnowballsInUse?: Integer;
  }
  export type Integer = number;
  export type JobId = string;
  export interface JobListEntry {
    /**
     * The automatically generated ID for a job, for example JID123e4567-e89b-12d3-a456-426655440000.
     */
    JobId?: String;
    /**
     * The current state of this job.
     */
    JobState?: JobState;
    /**
     * A value that indicates that this job is a master job. A master job represents a successful request to create an export job. Master jobs aren't associated with any Snowballs. Instead, each master job will have at least one job part, and each job part is associated with a Snowball. It might take some time before the job parts associated with a particular master job are listed, because they are created after the master job is created.
     */
    IsMaster?: Boolean;
    /**
     * The type of job.
     */
    JobType?: JobType;
    /**
     * The type of appliance used with this job.
     */
    SnowballType?: SnowballType;
    /**
     * The creation date for this job.
     */
    CreationDate?: Timestamp;
    /**
     * The optional description of this specific job, for example Important Photos 2016-08-11.
     */
    Description?: String;
  }
  export type JobListEntryList = JobListEntry[];
  export interface JobLogs {
    /**
     * A link to an Amazon S3 presigned URL where the job completion report is located.
     */
    JobCompletionReportURI?: String;
    /**
     * A link to an Amazon S3 presigned URL where the job success log is located.
     */
    JobSuccessLogURI?: String;
    /**
     * A link to an Amazon S3 presigned URL where the job failure log is located.
     */
    JobFailureLogURI?: String;
  }
  export interface JobMetadata {
    /**
     * The automatically generated ID for a job, for example JID123e4567-e89b-12d3-a456-426655440000.
     */
    JobId?: String;
    /**
     * The current status of the jobs.
     */
    JobState?: JobState;
    /**
     * The type of job.
     */
    JobType?: JobType;
    /**
     * The type of appliance used with this job.
     */
    SnowballType?: SnowballType;
    /**
     * The creation date for this job.
     */
    CreationDate?: Timestamp;
    /**
     * An array of S3Resource objects. Each S3Resource object represents an Amazon S3 bucket that your transferred data will be exported from or imported into.
     */
    Resources?: JobResource;
    /**
     * The description of the job, provided at job creation.
     */
    Description?: String;
    /**
     * The Amazon Resource Name (ARN) for the AWS Key Management Service (AWS KMS) key associated with this job. This ARN was created using the CreateKey API action in AWS KMS.
     */
    KmsKeyARN?: KmsKeyARN;
    /**
     * The role ARN associated with this job. This ARN was created using the CreateRole API action in AWS Identity and Access Management (IAM).
     */
    RoleARN?: RoleARN;
    /**
     * The ID for the address that you want the Snowball shipped to.
     */
    AddressId?: AddressId;
    /**
     * A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.
     */
    ShippingDetails?: ShippingDetails;
    /**
     * The Snowball capacity preference for this job, specified at job creation. In US regions, you can choose between 50 TB and 80 TB Snowballs. All other regions use 80 TB capacity Snowballs.
     */
    SnowballCapacityPreference?: SnowballCapacity;
    /**
     * The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The Notification object is returned as a part of the response syntax of the DescribeJob action in the JobMetadata data type.
     */
    Notification?: Notification;
    /**
     * A value that defines the real-time status of a Snowball's data transfer while the appliance is at AWS. This data is only available while a job has a JobState value of InProgress, for both import and export jobs.
     */
    DataTransferProgress?: DataTransfer;
    /**
     * Links to Amazon S3 presigned URLs for the job report and logs. For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snowball for your job part is being delivered to you.
     */
    JobLogInfo?: JobLogs;
    /**
     * The 39-character ID for the cluster, for example CID123e4567-e89b-12d3-a456-426655440000.
     */
    ClusterId?: String;
    /**
     * The ID of the address that you want a job shipped to, after it will be shipped to its primary address. This field is not supported in most regions.
     */
    ForwardingAddressId?: AddressId;
  }
  export type JobMetadataList = JobMetadata[];
  export interface JobResource {
    /**
     * An array of S3Resource objects.
     */
    S3Resources?: S3ResourceList;
    /**
     * The Python-language Lambda functions for this job.
     */
    LambdaResources?: LambdaResourceList;
  }
  export type JobState = "New"|"PreparingAppliance"|"PreparingShipment"|"InTransitToCustomer"|"WithCustomer"|"InTransitToAWS"|"WithAWS"|"InProgress"|"Complete"|"Cancelled"|"Listing"|"Pending"|string;
  export type JobStateList = JobState[];
  export type JobType = "IMPORT"|"EXPORT"|"LOCAL_USE"|string;
  export interface KeyRange {
    /**
     * The key that starts an optional key range for an export job. Ranges are inclusive and UTF-8 binary sorted.
     */
    BeginMarker?: String;
    /**
     * The key that ends an optional key range for an export job. Ranges are inclusive and UTF-8 binary sorted.
     */
    EndMarker?: String;
  }
  export type KmsKeyARN = string;
  export interface LambdaResource {
    /**
     * An Amazon Resource Name (ARN) that represents an AWS Lambda function to be triggered by PUT object actions on the associated local Amazon S3 resource.
     */
    LambdaArn?: ResourceARN;
    /**
     * The array of ARNs for S3Resource objects to trigger the LambdaResource objects associated with this job.
     */
    EventTriggers?: EventTriggerDefinitionList;
  }
  export type LambdaResourceList = LambdaResource[];
  export interface ListClusterJobsRequest {
    /**
     * The 39-character ID for the cluster that you want to list, for example CID123e4567-e89b-12d3-a456-426655440000.
     */
    ClusterId: ClusterId;
    /**
     * The number of JobListEntry objects to return.
     */
    MaxResults?: ListLimit;
    /**
     * HTTP requests are stateless. To identify what object comes "next" in the list of JobListEntry objects, you have the option of specifying NextToken as the starting point for your returned list.
     */
    NextToken?: String;
  }
  export interface ListClusterJobsResult {
    /**
     * Each JobListEntry object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. 
     */
    JobListEntries?: JobListEntryList;
    /**
     * HTTP requests are stateless. If you use the automatically generated NextToken value in your next ListClusterJobsResult call, your list of returned jobs will start from this point in the array.
     */
    NextToken?: String;
  }
  export interface ListClustersRequest {
    /**
     * The number of ClusterListEntry objects to return.
     */
    MaxResults?: ListLimit;
    /**
     * HTTP requests are stateless. To identify what object comes "next" in the list of ClusterListEntry objects, you have the option of specifying NextToken as the starting point for your returned list.
     */
    NextToken?: String;
  }
  export interface ListClustersResult {
    /**
     * Each ClusterListEntry object contains a cluster's state, a cluster's ID, and other important status information.
     */
    ClusterListEntries?: ClusterListEntryList;
    /**
     * HTTP requests are stateless. If you use the automatically generated NextToken value in your next ClusterListEntry call, your list of returned clusters will start from this point in the array.
     */
    NextToken?: String;
  }
  export interface ListJobsRequest {
    /**
     * The number of JobListEntry objects to return.
     */
    MaxResults?: ListLimit;
    /**
     * HTTP requests are stateless. To identify what object comes "next" in the list of JobListEntry objects, you have the option of specifying NextToken as the starting point for your returned list.
     */
    NextToken?: String;
  }
  export interface ListJobsResult {
    /**
     * Each JobListEntry object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. 
     */
    JobListEntries?: JobListEntryList;
    /**
     * HTTP requests are stateless. If you use this automatically generated NextToken value in your next ListJobs call, your returned JobListEntry objects will start from this point in the array.
     */
    NextToken?: String;
  }
  export type ListLimit = number;
  export type Long = number;
  export interface Notification {
    /**
     * The new SNS TopicArn that you want to associate with this job. You can create Amazon Resource Names (ARNs) for topics by using the CreateTopic Amazon SNS API action. You can subscribe email addresses to an Amazon SNS topic through the AWS Management Console, or by using the Subscribe AWS Simple Notification Service (SNS) API action.
     */
    SnsTopicARN?: SnsTopicARN;
    /**
     * The list of job states that will trigger a notification for this job.
     */
    JobStatesToNotify?: JobStateList;
    /**
     * Any change in job state will trigger a notification for this job.
     */
    NotifyAll?: Boolean;
  }
  export type ResourceARN = string;
  export type RoleARN = string;
  export interface S3Resource {
    /**
     * The Amazon Resource Name (ARN) of an Amazon S3 bucket.
     */
    BucketArn?: ResourceARN;
    /**
     * For export jobs, you can provide an optional KeyRange within a specific Amazon S3 bucket. The length of the range is defined at job creation, and has either an inclusive BeginMarker, an inclusive EndMarker, or both. Ranges are UTF-8 binary sorted.
     */
    KeyRange?: KeyRange;
  }
  export type S3ResourceList = S3Resource[];
  export interface Shipment {
    /**
     * Status information for a shipment.
     */
    Status?: String;
    /**
     * The tracking number for this job. Using this tracking number with your region's carrier's website, you can track a Snowball as the carrier transports it. For India, the carrier is Amazon Logistics. For all other regions, UPS is the carrier.
     */
    TrackingNumber?: String;
  }
  export interface ShippingDetails {
    /**
     * The shipping speed for a particular job. This speed doesn't dictate how soon you'll get the Snowball from the job's creation date. This speed represents how quickly it moves to its destination while in transit. Regional shipping speeds are as follows:   In Australia, you have access to express shipping. Typically, Snowballs shipped express are delivered in about a day.   In the European Union (EU), you have access to express shipping. Typically, Snowballs shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.   In India, Snowballs are delivered in one to seven days.   In the United States of America (US), you have access to one-day shipping and two-day shipping.  
     */
    ShippingOption?: ShippingOption;
    /**
     * The Status and TrackingNumber values for a Snowball being delivered to the address that you specified for a particular job.
     */
    InboundShipment?: Shipment;
    /**
     * The Status and TrackingNumber values for a Snowball being returned to AWS for a particular job.
     */
    OutboundShipment?: Shipment;
  }
  export type ShippingOption = "SECOND_DAY"|"NEXT_DAY"|"EXPRESS"|"STANDARD"|string;
  export type SnowballCapacity = "T50"|"T80"|"T100"|"NoPreference"|string;
  export type SnowballType = "STANDARD"|"EDGE"|string;
  export type SnsTopicARN = string;
  export type String = string;
  export type Timestamp = Date;
  export interface UpdateClusterRequest {
    /**
     * The cluster ID of the cluster that you want to update, for example CID123e4567-e89b-12d3-a456-426655440000.
     */
    ClusterId: ClusterId;
    /**
     * The new role Amazon Resource Name (ARN) that you want to associate with this cluster. To create a role ARN, use the CreateRole API action in AWS Identity and Access Management (IAM).
     */
    RoleARN?: RoleARN;
    /**
     * The updated description of this cluster.
     */
    Description?: String;
    /**
     * The updated arrays of JobResource objects that can include updated S3Resource objects or LambdaResource objects.
     */
    Resources?: JobResource;
    /**
     * The ID of the updated Address object.
     */
    AddressId?: AddressId;
    /**
     * The updated shipping option value of this cluster's ShippingDetails object.
     */
    ShippingOption?: ShippingOption;
    /**
     * The new or updated Notification object.
     */
    Notification?: Notification;
    /**
     * The updated ID for the forwarding address for a cluster. This field is not supported in most regions.
     */
    ForwardingAddressId?: AddressId;
  }
  export interface UpdateClusterResult {
  }
  export interface UpdateJobRequest {
    /**
     * The job ID of the job that you want to update, for example JID123e4567-e89b-12d3-a456-426655440000.
     */
    JobId: JobId;
    /**
     * The new role Amazon Resource Name (ARN) that you want to associate with this job. To create a role ARN, use the CreateRoleAWS Identity and Access Management (IAM) API action.
     */
    RoleARN?: RoleARN;
    /**
     * The new or updated Notification object.
     */
    Notification?: Notification;
    /**
     * The updated S3Resource object (for a single Amazon S3 bucket or key range), or the updated JobResource object (for multiple buckets or key ranges). 
     */
    Resources?: JobResource;
    /**
     * The ID of the updated Address object.
     */
    AddressId?: AddressId;
    /**
     * The updated shipping option value of this job's ShippingDetails object.
     */
    ShippingOption?: ShippingOption;
    /**
     * The updated description of this job's JobMetadata object.
     */
    Description?: String;
    /**
     * The updated SnowballCapacityPreference of this job's JobMetadata object. The 50 TB Snowballs are only available in the US regions.
     */
    SnowballCapacityPreference?: SnowballCapacity;
    /**
     * The updated ID for the forwarding address for a job. This field is not supported in most regions.
     */
    ForwardingAddressId?: AddressId;
  }
  export interface UpdateJobResult {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-06-30"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Snowball client.
   */
  export import Types = Snowball;
}
export = Snowball;
