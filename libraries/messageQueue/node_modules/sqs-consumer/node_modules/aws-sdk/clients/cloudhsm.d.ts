import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CloudHSM extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudHSM.Types.ClientConfiguration)
  config: Config & CloudHSM.Types.ClientConfiguration;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Adds or overwrites one or more tags for the specified AWS CloudHSM resource. Each tag consists of a key and a value. Tag keys must be unique to each resource.
   */
  addTagsToResource(params: CloudHSM.Types.AddTagsToResourceRequest, callback?: (err: AWSError, data: CloudHSM.Types.AddTagsToResourceResponse) => void): Request<CloudHSM.Types.AddTagsToResourceResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Adds or overwrites one or more tags for the specified AWS CloudHSM resource. Each tag consists of a key and a value. Tag keys must be unique to each resource.
   */
  addTagsToResource(callback?: (err: AWSError, data: CloudHSM.Types.AddTagsToResourceResponse) => void): Request<CloudHSM.Types.AddTagsToResourceResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Creates a high-availability partition group. A high-availability partition group is a group of partitions that spans multiple physical HSMs.
   */
  createHapg(params: CloudHSM.Types.CreateHapgRequest, callback?: (err: AWSError, data: CloudHSM.Types.CreateHapgResponse) => void): Request<CloudHSM.Types.CreateHapgResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Creates a high-availability partition group. A high-availability partition group is a group of partitions that spans multiple physical HSMs.
   */
  createHapg(callback?: (err: AWSError, data: CloudHSM.Types.CreateHapgResponse) => void): Request<CloudHSM.Types.CreateHapgResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Creates an uninitialized HSM instance. There is an upfront fee charged for each HSM instance that you create with the CreateHsm operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the DeleteHsm operation, go to the AWS Support Center, create a new case, and select Account and Billing Support.  It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the DescribeHsm operation. The HSM is ready to be initialized when the status changes to RUNNING. 
   */
  createHsm(params: CloudHSM.Types.CreateHsmRequest, callback?: (err: AWSError, data: CloudHSM.Types.CreateHsmResponse) => void): Request<CloudHSM.Types.CreateHsmResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Creates an uninitialized HSM instance. There is an upfront fee charged for each HSM instance that you create with the CreateHsm operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the DeleteHsm operation, go to the AWS Support Center, create a new case, and select Account and Billing Support.  It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the DescribeHsm operation. The HSM is ready to be initialized when the status changes to RUNNING. 
   */
  createHsm(callback?: (err: AWSError, data: CloudHSM.Types.CreateHsmResponse) => void): Request<CloudHSM.Types.CreateHsmResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Creates an HSM client.
   */
  createLunaClient(params: CloudHSM.Types.CreateLunaClientRequest, callback?: (err: AWSError, data: CloudHSM.Types.CreateLunaClientResponse) => void): Request<CloudHSM.Types.CreateLunaClientResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Creates an HSM client.
   */
  createLunaClient(callback?: (err: AWSError, data: CloudHSM.Types.CreateLunaClientResponse) => void): Request<CloudHSM.Types.CreateLunaClientResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Deletes a high-availability partition group.
   */
  deleteHapg(params: CloudHSM.Types.DeleteHapgRequest, callback?: (err: AWSError, data: CloudHSM.Types.DeleteHapgResponse) => void): Request<CloudHSM.Types.DeleteHapgResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Deletes a high-availability partition group.
   */
  deleteHapg(callback?: (err: AWSError, data: CloudHSM.Types.DeleteHapgResponse) => void): Request<CloudHSM.Types.DeleteHapgResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Deletes an HSM. After completion, this operation cannot be undone and your key material cannot be recovered.
   */
  deleteHsm(params: CloudHSM.Types.DeleteHsmRequest, callback?: (err: AWSError, data: CloudHSM.Types.DeleteHsmResponse) => void): Request<CloudHSM.Types.DeleteHsmResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Deletes an HSM. After completion, this operation cannot be undone and your key material cannot be recovered.
   */
  deleteHsm(callback?: (err: AWSError, data: CloudHSM.Types.DeleteHsmResponse) => void): Request<CloudHSM.Types.DeleteHsmResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Deletes a client.
   */
  deleteLunaClient(params: CloudHSM.Types.DeleteLunaClientRequest, callback?: (err: AWSError, data: CloudHSM.Types.DeleteLunaClientResponse) => void): Request<CloudHSM.Types.DeleteLunaClientResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Deletes a client.
   */
  deleteLunaClient(callback?: (err: AWSError, data: CloudHSM.Types.DeleteLunaClientResponse) => void): Request<CloudHSM.Types.DeleteLunaClientResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves information about a high-availability partition group.
   */
  describeHapg(params: CloudHSM.Types.DescribeHapgRequest, callback?: (err: AWSError, data: CloudHSM.Types.DescribeHapgResponse) => void): Request<CloudHSM.Types.DescribeHapgResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves information about a high-availability partition group.
   */
  describeHapg(callback?: (err: AWSError, data: CloudHSM.Types.DescribeHapgResponse) => void): Request<CloudHSM.Types.DescribeHapgResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.
   */
  describeHsm(params: CloudHSM.Types.DescribeHsmRequest, callback?: (err: AWSError, data: CloudHSM.Types.DescribeHsmResponse) => void): Request<CloudHSM.Types.DescribeHsmResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.
   */
  describeHsm(callback?: (err: AWSError, data: CloudHSM.Types.DescribeHsmResponse) => void): Request<CloudHSM.Types.DescribeHsmResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves information about an HSM client.
   */
  describeLunaClient(params: CloudHSM.Types.DescribeLunaClientRequest, callback?: (err: AWSError, data: CloudHSM.Types.DescribeLunaClientResponse) => void): Request<CloudHSM.Types.DescribeLunaClientResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves information about an HSM client.
   */
  describeLunaClient(callback?: (err: AWSError, data: CloudHSM.Types.DescribeLunaClientResponse) => void): Request<CloudHSM.Types.DescribeLunaClientResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Gets the configuration files necessary to connect to all high availability partition groups the client is associated with.
   */
  getConfig(params: CloudHSM.Types.GetConfigRequest, callback?: (err: AWSError, data: CloudHSM.Types.GetConfigResponse) => void): Request<CloudHSM.Types.GetConfigResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Gets the configuration files necessary to connect to all high availability partition groups the client is associated with.
   */
  getConfig(callback?: (err: AWSError, data: CloudHSM.Types.GetConfigResponse) => void): Request<CloudHSM.Types.GetConfigResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Lists the Availability Zones that have available AWS CloudHSM capacity.
   */
  listAvailableZones(params: CloudHSM.Types.ListAvailableZonesRequest, callback?: (err: AWSError, data: CloudHSM.Types.ListAvailableZonesResponse) => void): Request<CloudHSM.Types.ListAvailableZonesResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Lists the Availability Zones that have available AWS CloudHSM capacity.
   */
  listAvailableZones(callback?: (err: AWSError, data: CloudHSM.Types.ListAvailableZonesResponse) => void): Request<CloudHSM.Types.ListAvailableZonesResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Lists the high-availability partition groups for the account. This operation supports pagination with the use of the NextToken member. If more results are available, the NextToken member of the response contains a token that you pass in the next call to ListHapgs to retrieve the next set of items.
   */
  listHapgs(params: CloudHSM.Types.ListHapgsRequest, callback?: (err: AWSError, data: CloudHSM.Types.ListHapgsResponse) => void): Request<CloudHSM.Types.ListHapgsResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Lists the high-availability partition groups for the account. This operation supports pagination with the use of the NextToken member. If more results are available, the NextToken member of the response contains a token that you pass in the next call to ListHapgs to retrieve the next set of items.
   */
  listHapgs(callback?: (err: AWSError, data: CloudHSM.Types.ListHapgsResponse) => void): Request<CloudHSM.Types.ListHapgsResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves the identifiers of all of the HSMs provisioned for the current customer. This operation supports pagination with the use of the NextToken member. If more results are available, the NextToken member of the response contains a token that you pass in the next call to ListHsms to retrieve the next set of items.
   */
  listHsms(params: CloudHSM.Types.ListHsmsRequest, callback?: (err: AWSError, data: CloudHSM.Types.ListHsmsResponse) => void): Request<CloudHSM.Types.ListHsmsResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves the identifiers of all of the HSMs provisioned for the current customer. This operation supports pagination with the use of the NextToken member. If more results are available, the NextToken member of the response contains a token that you pass in the next call to ListHsms to retrieve the next set of items.
   */
  listHsms(callback?: (err: AWSError, data: CloudHSM.Types.ListHsmsResponse) => void): Request<CloudHSM.Types.ListHsmsResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Lists all of the clients. This operation supports pagination with the use of the NextToken member. If more results are available, the NextToken member of the response contains a token that you pass in the next call to ListLunaClients to retrieve the next set of items.
   */
  listLunaClients(params: CloudHSM.Types.ListLunaClientsRequest, callback?: (err: AWSError, data: CloudHSM.Types.ListLunaClientsResponse) => void): Request<CloudHSM.Types.ListLunaClientsResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Lists all of the clients. This operation supports pagination with the use of the NextToken member. If more results are available, the NextToken member of the response contains a token that you pass in the next call to ListLunaClients to retrieve the next set of items.
   */
  listLunaClients(callback?: (err: AWSError, data: CloudHSM.Types.ListLunaClientsResponse) => void): Request<CloudHSM.Types.ListLunaClientsResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Returns a list of all tags for the specified AWS CloudHSM resource.
   */
  listTagsForResource(params: CloudHSM.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: CloudHSM.Types.ListTagsForResourceResponse) => void): Request<CloudHSM.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Returns a list of all tags for the specified AWS CloudHSM resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: CloudHSM.Types.ListTagsForResourceResponse) => void): Request<CloudHSM.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Modifies an existing high-availability partition group.
   */
  modifyHapg(params: CloudHSM.Types.ModifyHapgRequest, callback?: (err: AWSError, data: CloudHSM.Types.ModifyHapgResponse) => void): Request<CloudHSM.Types.ModifyHapgResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Modifies an existing high-availability partition group.
   */
  modifyHapg(callback?: (err: AWSError, data: CloudHSM.Types.ModifyHapgResponse) => void): Request<CloudHSM.Types.ModifyHapgResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Modifies an HSM.  This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window. 
   */
  modifyHsm(params: CloudHSM.Types.ModifyHsmRequest, callback?: (err: AWSError, data: CloudHSM.Types.ModifyHsmResponse) => void): Request<CloudHSM.Types.ModifyHsmResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Modifies an HSM.  This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window. 
   */
  modifyHsm(callback?: (err: AWSError, data: CloudHSM.Types.ModifyHsmResponse) => void): Request<CloudHSM.Types.ModifyHsmResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Modifies the certificate used by the client. This action can potentially start a workflow to install the new certificate on the client's HSMs.
   */
  modifyLunaClient(params: CloudHSM.Types.ModifyLunaClientRequest, callback?: (err: AWSError, data: CloudHSM.Types.ModifyLunaClientResponse) => void): Request<CloudHSM.Types.ModifyLunaClientResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Modifies the certificate used by the client. This action can potentially start a workflow to install the new certificate on the client's HSMs.
   */
  modifyLunaClient(callback?: (err: AWSError, data: CloudHSM.Types.ModifyLunaClientResponse) => void): Request<CloudHSM.Types.ModifyLunaClientResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Removes one or more tags from the specified AWS CloudHSM resource. To remove a tag, specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use AddTagsToResource.
   */
  removeTagsFromResource(params: CloudHSM.Types.RemoveTagsFromResourceRequest, callback?: (err: AWSError, data: CloudHSM.Types.RemoveTagsFromResourceResponse) => void): Request<CloudHSM.Types.RemoveTagsFromResourceResponse, AWSError>;
  /**
   * This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Removes one or more tags from the specified AWS CloudHSM resource. To remove a tag, specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use AddTagsToResource.
   */
  removeTagsFromResource(callback?: (err: AWSError, data: CloudHSM.Types.RemoveTagsFromResourceResponse) => void): Request<CloudHSM.Types.RemoveTagsFromResourceResponse, AWSError>;
}
declare namespace CloudHSM {
  export type AZ = string;
  export type AZList = AZ[];
  export interface AddTagsToResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the AWS CloudHSM resource to tag.
     */
    ResourceArn: String;
    /**
     * One or more tags.
     */
    TagList: TagList;
  }
  export interface AddTagsToResourceResponse {
    /**
     * The status of the operation.
     */
    Status: String;
  }
  export type Boolean = boolean;
  export type Certificate = string;
  export type CertificateFingerprint = string;
  export type ClientArn = string;
  export type ClientLabel = string;
  export type ClientList = ClientArn[];
  export type ClientToken = string;
  export type ClientVersion = "5.1"|"5.3"|string;
  export type CloudHsmObjectState = "READY"|"UPDATING"|"DEGRADED"|string;
  export interface CreateHapgRequest {
    /**
     * The label of the new high-availability partition group.
     */
    Label: Label;
  }
  export interface CreateHapgResponse {
    /**
     * The ARN of the high-availability partition group.
     */
    HapgArn?: HapgArn;
  }
  export interface CreateHsmRequest {
    /**
     * The identifier of the subnet in your VPC in which to place the HSM.
     */
    SubnetId: SubnetId;
    /**
     * The SSH public key to install on the HSM.
     */
    SshKey: SshKey;
    /**
     * The IP address to assign to the HSM's ENI. If an IP address is not specified, an IP address will be randomly chosen from the CIDR range of the subnet.
     */
    EniIp?: IpAddress;
    /**
     * The ARN of an IAM role to enable the AWS CloudHSM service to allocate an ENI on your behalf.
     */
    IamRoleArn: IamRoleArn;
    /**
     * The external ID from IamRoleArn, if present.
     */
    ExternalId?: ExternalId;
    SubscriptionType: SubscriptionType;
    /**
     * A user-defined token to ensure idempotence. Subsequent calls to this operation with the same token will be ignored.
     */
    ClientToken?: ClientToken;
    /**
     * The IP address for the syslog monitoring server. The AWS CloudHSM service only supports one syslog monitoring server.
     */
    SyslogIp?: IpAddress;
  }
  export interface CreateHsmResponse {
    /**
     * The ARN of the HSM.
     */
    HsmArn?: HsmArn;
  }
  export interface CreateLunaClientRequest {
    /**
     * The label for the client.
     */
    Label?: ClientLabel;
    /**
     * The contents of a Base64-Encoded X.509 v3 certificate to be installed on the HSMs used by this client.
     */
    Certificate: Certificate;
  }
  export interface CreateLunaClientResponse {
    /**
     * The ARN of the client.
     */
    ClientArn?: ClientArn;
  }
  export interface DeleteHapgRequest {
    /**
     * The ARN of the high-availability partition group to delete.
     */
    HapgArn: HapgArn;
  }
  export interface DeleteHapgResponse {
    /**
     * The status of the action.
     */
    Status: String;
  }
  export interface DeleteHsmRequest {
    /**
     * The ARN of the HSM to delete.
     */
    HsmArn: HsmArn;
  }
  export interface DeleteHsmResponse {
    /**
     * The status of the operation.
     */
    Status: String;
  }
  export interface DeleteLunaClientRequest {
    /**
     * The ARN of the client to delete.
     */
    ClientArn: ClientArn;
  }
  export interface DeleteLunaClientResponse {
    /**
     * The status of the action.
     */
    Status: String;
  }
  export interface DescribeHapgRequest {
    /**
     * The ARN of the high-availability partition group to describe.
     */
    HapgArn: HapgArn;
  }
  export interface DescribeHapgResponse {
    /**
     * The ARN of the high-availability partition group.
     */
    HapgArn?: HapgArn;
    /**
     * The serial number of the high-availability partition group.
     */
    HapgSerial?: String;
    /**
     * 
     */
    HsmsLastActionFailed?: HsmList;
    /**
     * 
     */
    HsmsPendingDeletion?: HsmList;
    /**
     * 
     */
    HsmsPendingRegistration?: HsmList;
    /**
     * The label for the high-availability partition group.
     */
    Label?: Label;
    /**
     * The date and time the high-availability partition group was last modified.
     */
    LastModifiedTimestamp?: Timestamp;
    /**
     * The list of partition serial numbers that belong to the high-availability partition group.
     */
    PartitionSerialList?: PartitionSerialList;
    /**
     * The state of the high-availability partition group.
     */
    State?: CloudHsmObjectState;
  }
  export interface DescribeHsmRequest {
    /**
     * The ARN of the HSM. Either the HsmArn or the SerialNumber parameter must be specified.
     */
    HsmArn?: HsmArn;
    /**
     * The serial number of the HSM. Either the HsmArn or the HsmSerialNumber parameter must be specified.
     */
    HsmSerialNumber?: HsmSerialNumber;
  }
  export interface DescribeHsmResponse {
    /**
     * The ARN of the HSM.
     */
    HsmArn?: HsmArn;
    /**
     * The status of the HSM.
     */
    Status?: HsmStatus;
    /**
     * Contains additional information about the status of the HSM.
     */
    StatusDetails?: String;
    /**
     * The Availability Zone that the HSM is in.
     */
    AvailabilityZone?: AZ;
    /**
     * The identifier of the elastic network interface (ENI) attached to the HSM.
     */
    EniId?: EniId;
    /**
     * The IP address assigned to the HSM's ENI.
     */
    EniIp?: IpAddress;
    SubscriptionType?: SubscriptionType;
    /**
     * The subscription start date.
     */
    SubscriptionStartDate?: Timestamp;
    /**
     * The subscription end date.
     */
    SubscriptionEndDate?: Timestamp;
    /**
     * The identifier of the VPC that the HSM is in.
     */
    VpcId?: VpcId;
    /**
     * The identifier of the subnet that the HSM is in.
     */
    SubnetId?: SubnetId;
    /**
     * The ARN of the IAM role assigned to the HSM.
     */
    IamRoleArn?: IamRoleArn;
    /**
     * The serial number of the HSM.
     */
    SerialNumber?: HsmSerialNumber;
    /**
     * The name of the HSM vendor.
     */
    VendorName?: String;
    /**
     * The HSM model type.
     */
    HsmType?: String;
    /**
     * The HSM software version.
     */
    SoftwareVersion?: String;
    /**
     * The public SSH key.
     */
    SshPublicKey?: SshKey;
    /**
     * The date and time that the SSH key was last updated.
     */
    SshKeyLastUpdated?: Timestamp;
    /**
     * The URI of the certificate server.
     */
    ServerCertUri?: String;
    /**
     * The date and time that the server certificate was last updated.
     */
    ServerCertLastUpdated?: Timestamp;
    /**
     * The list of partitions on the HSM.
     */
    Partitions?: PartitionList;
  }
  export interface DescribeLunaClientRequest {
    /**
     * The ARN of the client.
     */
    ClientArn?: ClientArn;
    /**
     * The certificate fingerprint.
     */
    CertificateFingerprint?: CertificateFingerprint;
  }
  export interface DescribeLunaClientResponse {
    /**
     * The ARN of the client.
     */
    ClientArn?: ClientArn;
    /**
     * The certificate installed on the HSMs used by this client.
     */
    Certificate?: Certificate;
    /**
     * The certificate fingerprint.
     */
    CertificateFingerprint?: CertificateFingerprint;
    /**
     * The date and time the client was last modified.
     */
    LastModifiedTimestamp?: Timestamp;
    /**
     * The label of the client.
     */
    Label?: Label;
  }
  export type EniId = string;
  export type ExternalId = string;
  export interface GetConfigRequest {
    /**
     * The ARN of the client.
     */
    ClientArn: ClientArn;
    /**
     * The client version.
     */
    ClientVersion: ClientVersion;
    /**
     * A list of ARNs that identify the high-availability partition groups that are associated with the client.
     */
    HapgList: HapgList;
  }
  export interface GetConfigResponse {
    /**
     * The type of credentials.
     */
    ConfigType?: String;
    /**
     * The chrystoki.conf configuration file.
     */
    ConfigFile?: String;
    /**
     * The certificate file containing the server.pem files of the HSMs.
     */
    ConfigCred?: String;
  }
  export type HapgArn = string;
  export type HapgList = HapgArn[];
  export type HsmArn = string;
  export type HsmList = HsmArn[];
  export type HsmSerialNumber = string;
  export type HsmStatus = "PENDING"|"RUNNING"|"UPDATING"|"SUSPENDED"|"TERMINATING"|"TERMINATED"|"DEGRADED"|string;
  export type IamRoleArn = string;
  export type IpAddress = string;
  export type Label = string;
  export interface ListAvailableZonesRequest {
  }
  export interface ListAvailableZonesResponse {
    /**
     * The list of Availability Zones that have available AWS CloudHSM capacity.
     */
    AZList?: AZList;
  }
  export interface ListHapgsRequest {
    /**
     * The NextToken value from a previous call to ListHapgs. Pass null if this is the first call.
     */
    NextToken?: PaginationToken;
  }
  export interface ListHapgsResponse {
    /**
     * The list of high-availability partition groups.
     */
    HapgList: HapgList;
    /**
     * If not null, more results are available. Pass this value to ListHapgs to retrieve the next set of items.
     */
    NextToken?: PaginationToken;
  }
  export interface ListHsmsRequest {
    /**
     * The NextToken value from a previous call to ListHsms. Pass null if this is the first call.
     */
    NextToken?: PaginationToken;
  }
  export interface ListHsmsResponse {
    /**
     * The list of ARNs that identify the HSMs.
     */
    HsmList?: HsmList;
    /**
     * If not null, more results are available. Pass this value to ListHsms to retrieve the next set of items.
     */
    NextToken?: PaginationToken;
  }
  export interface ListLunaClientsRequest {
    /**
     * The NextToken value from a previous call to ListLunaClients. Pass null if this is the first call.
     */
    NextToken?: PaginationToken;
  }
  export interface ListLunaClientsResponse {
    /**
     * The list of clients.
     */
    ClientList: ClientList;
    /**
     * If not null, more results are available. Pass this to ListLunaClients to retrieve the next set of items.
     */
    NextToken?: PaginationToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the AWS CloudHSM resource.
     */
    ResourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * One or more tags.
     */
    TagList: TagList;
  }
  export interface ModifyHapgRequest {
    /**
     * The ARN of the high-availability partition group to modify.
     */
    HapgArn: HapgArn;
    /**
     * The new label for the high-availability partition group.
     */
    Label?: Label;
    /**
     * The list of partition serial numbers to make members of the high-availability partition group.
     */
    PartitionSerialList?: PartitionSerialList;
  }
  export interface ModifyHapgResponse {
    /**
     * The ARN of the high-availability partition group.
     */
    HapgArn?: HapgArn;
  }
  export interface ModifyHsmRequest {
    /**
     * The ARN of the HSM to modify.
     */
    HsmArn: HsmArn;
    /**
     * The new identifier of the subnet that the HSM is in. The new subnet must be in the same Availability Zone as the current subnet.
     */
    SubnetId?: SubnetId;
    /**
     * The new IP address for the elastic network interface (ENI) attached to the HSM. If the HSM is moved to a different subnet, and an IP address is not specified, an IP address will be randomly chosen from the CIDR range of the new subnet.
     */
    EniIp?: IpAddress;
    /**
     * The new IAM role ARN.
     */
    IamRoleArn?: IamRoleArn;
    /**
     * The new external ID.
     */
    ExternalId?: ExternalId;
    /**
     * The new IP address for the syslog monitoring server. The AWS CloudHSM service only supports one syslog monitoring server.
     */
    SyslogIp?: IpAddress;
  }
  export interface ModifyHsmResponse {
    /**
     * The ARN of the HSM.
     */
    HsmArn?: HsmArn;
  }
  export interface ModifyLunaClientRequest {
    /**
     * The ARN of the client.
     */
    ClientArn: ClientArn;
    /**
     * The new certificate for the client.
     */
    Certificate: Certificate;
  }
  export interface ModifyLunaClientResponse {
    /**
     * The ARN of the client.
     */
    ClientArn?: ClientArn;
  }
  export type PaginationToken = string;
  export type PartitionArn = string;
  export type PartitionList = PartitionArn[];
  export type PartitionSerial = string;
  export type PartitionSerialList = PartitionSerial[];
  export interface RemoveTagsFromResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the AWS CloudHSM resource.
     */
    ResourceArn: String;
    /**
     * The tag key or keys to remove. Specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use AddTagsToResource.
     */
    TagKeyList: TagKeyList;
  }
  export interface RemoveTagsFromResourceResponse {
    /**
     * The status of the operation.
     */
    Status: String;
  }
  export type SshKey = string;
  export type String = string;
  export type SubnetId = string;
  export type SubscriptionType = "PRODUCTION"|string;
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
  export type TagValue = string;
  export type Timestamp = string;
  export type VpcId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-05-30"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CloudHSM client.
   */
  export import Types = CloudHSM;
}
export = CloudHSM;
