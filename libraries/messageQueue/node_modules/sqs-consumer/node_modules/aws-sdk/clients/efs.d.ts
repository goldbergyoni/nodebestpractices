import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class EFS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: EFS.Types.ClientConfiguration)
  config: Config & EFS.Types.ClientConfiguration;
  /**
   * Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's AWS account with the specified creation token, this operation does the following:   Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state creating.   Returns with the description of the created file system.   Otherwise, this operation returns a FileSystemAlreadyExists error with the ID of the existing file system.  For basic use cases, you can use a randomly generated UUID for the creation token.   The idempotent operation allows you to retry a CreateFileSystem call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the FileSystemAlreadyExists error.  The CreateFileSystem call returns while the file system's lifecycle state is still creating. You can check the file system creation status by calling the DescribeFileSystems operation, which among other things returns the file system state.  This operation also takes an optional PerformanceMode parameter that you choose for your file system. We recommend generalPurpose performance mode for most file systems. File systems using the maxIO performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. For more information, see Amazon EFS: Performance Modes. After the file system is fully created, Amazon EFS sets its lifecycle state to available, at which point you can create one or more mount targets for the file system in your VPC. For more information, see CreateMountTarget. You mount your Amazon EFS file system on an EC2 instances in your VPC via the mount target. For more information, see Amazon EFS: How it Works.   This operation requires permissions for the elasticfilesystem:CreateFileSystem action. 
   */
  createFileSystem(params: EFS.Types.CreateFileSystemRequest, callback?: (err: AWSError, data: EFS.Types.FileSystemDescription) => void): Request<EFS.Types.FileSystemDescription, AWSError>;
  /**
   * Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's AWS account with the specified creation token, this operation does the following:   Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state creating.   Returns with the description of the created file system.   Otherwise, this operation returns a FileSystemAlreadyExists error with the ID of the existing file system.  For basic use cases, you can use a randomly generated UUID for the creation token.   The idempotent operation allows you to retry a CreateFileSystem call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the FileSystemAlreadyExists error.  The CreateFileSystem call returns while the file system's lifecycle state is still creating. You can check the file system creation status by calling the DescribeFileSystems operation, which among other things returns the file system state.  This operation also takes an optional PerformanceMode parameter that you choose for your file system. We recommend generalPurpose performance mode for most file systems. File systems using the maxIO performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. For more information, see Amazon EFS: Performance Modes. After the file system is fully created, Amazon EFS sets its lifecycle state to available, at which point you can create one or more mount targets for the file system in your VPC. For more information, see CreateMountTarget. You mount your Amazon EFS file system on an EC2 instances in your VPC via the mount target. For more information, see Amazon EFS: How it Works.   This operation requires permissions for the elasticfilesystem:CreateFileSystem action. 
   */
  createFileSystem(callback?: (err: AWSError, data: EFS.Types.FileSystemDescription) => void): Request<EFS.Types.FileSystemDescription, AWSError>;
  /**
   * Creates a mount target for a file system. You can then mount the file system on EC2 instances via the mount target. You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system. For more information, see Amazon EFS: How it Works.  In the request, you also specify a file system ID for which you are creating the mount target and the file system's lifecycle state must be available. For more information, see DescribeFileSystems. In the request, you also provide a subnet ID, which determines the following:   VPC in which Amazon EFS creates the mount target   Availability Zone in which Amazon EFS creates the mount target   IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)   After creating the mount target, Amazon EFS returns a response that includes, a MountTargetId and an IpAddress. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system via the mount target can resolve the mount target's DNS name to its IP address. For more information, see How it Works: Implementation Overview.  Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:   Must belong to the same VPC as the subnets of the existing mount targets   Must not be in the same Availability Zone as any of the subnets of the existing mount targets   If the request satisfies the requirements, Amazon EFS does the following:   Creates a new mount target in the specified subnet.   Also creates a new network interface in the subnet as follows:   If the request provides an IpAddress, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 CreateNetworkInterface call does when a request does not specify a primary private IP address).   If the request provides SecurityGroups, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.   Assigns the description Mount target fsmt-id for file system fs-id  where  fsmt-id  is the mount target ID, and  fs-id  is the FileSystemId.   Sets the requesterManaged property of the network interface to true, and the requesterId value to EFS.   Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the NetworkInterfaceId field in the mount target's description to the network interface ID, and the IpAddress field to its address. If network interface creation fails, the entire CreateMountTarget operation fails.    The CreateMountTarget call returns only after creating the network interface, but while the mount target state is still creating, you can check the mount target creation status by calling the DescribeMountTargets operation, which among other things returns the mount target state.  We recommend you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see Amazon EFS. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you won't be able to access your file system through that mount target.  This operation requires permissions for the following action on the file system:    elasticfilesystem:CreateMountTarget    This operation also requires permissions for the following Amazon EC2 actions:    ec2:DescribeSubnets     ec2:DescribeNetworkInterfaces     ec2:CreateNetworkInterface   
   */
  createMountTarget(params: EFS.Types.CreateMountTargetRequest, callback?: (err: AWSError, data: EFS.Types.MountTargetDescription) => void): Request<EFS.Types.MountTargetDescription, AWSError>;
  /**
   * Creates a mount target for a file system. You can then mount the file system on EC2 instances via the mount target. You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system. For more information, see Amazon EFS: How it Works.  In the request, you also specify a file system ID for which you are creating the mount target and the file system's lifecycle state must be available. For more information, see DescribeFileSystems. In the request, you also provide a subnet ID, which determines the following:   VPC in which Amazon EFS creates the mount target   Availability Zone in which Amazon EFS creates the mount target   IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)   After creating the mount target, Amazon EFS returns a response that includes, a MountTargetId and an IpAddress. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system via the mount target can resolve the mount target's DNS name to its IP address. For more information, see How it Works: Implementation Overview.  Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:   Must belong to the same VPC as the subnets of the existing mount targets   Must not be in the same Availability Zone as any of the subnets of the existing mount targets   If the request satisfies the requirements, Amazon EFS does the following:   Creates a new mount target in the specified subnet.   Also creates a new network interface in the subnet as follows:   If the request provides an IpAddress, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 CreateNetworkInterface call does when a request does not specify a primary private IP address).   If the request provides SecurityGroups, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.   Assigns the description Mount target fsmt-id for file system fs-id  where  fsmt-id  is the mount target ID, and  fs-id  is the FileSystemId.   Sets the requesterManaged property of the network interface to true, and the requesterId value to EFS.   Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the NetworkInterfaceId field in the mount target's description to the network interface ID, and the IpAddress field to its address. If network interface creation fails, the entire CreateMountTarget operation fails.    The CreateMountTarget call returns only after creating the network interface, but while the mount target state is still creating, you can check the mount target creation status by calling the DescribeMountTargets operation, which among other things returns the mount target state.  We recommend you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see Amazon EFS. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you won't be able to access your file system through that mount target.  This operation requires permissions for the following action on the file system:    elasticfilesystem:CreateMountTarget    This operation also requires permissions for the following Amazon EC2 actions:    ec2:DescribeSubnets     ec2:DescribeNetworkInterfaces     ec2:CreateNetworkInterface   
   */
  createMountTarget(callback?: (err: AWSError, data: EFS.Types.MountTargetDescription) => void): Request<EFS.Types.MountTargetDescription, AWSError>;
  /**
   * Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the Name tag to your file system, Amazon EFS returns it in the response to the DescribeFileSystems operation.  This operation requires permission for the elasticfilesystem:CreateTags action.
   */
  createTags(params: EFS.Types.CreateTagsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the Name tag to your file system, Amazon EFS returns it in the response to the DescribeFileSystems operation.  This operation requires permission for the elasticfilesystem:CreateTags action.
   */
  createTags(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.  You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see DescribeMountTargets and DeleteMountTarget.   The DeleteFileSystem call returns while the file system state is still deleting. You can check the file system deletion status by calling the DescribeFileSystems operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the DescribeFileSystems returns a 404 FileSystemNotFound error.  This operation requires permissions for the elasticfilesystem:DeleteFileSystem action.
   */
  deleteFileSystem(params: EFS.Types.DeleteFileSystemRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.  You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see DescribeMountTargets and DeleteMountTarget.   The DeleteFileSystem call returns while the file system state is still deleting. You can check the file system deletion status by calling the DescribeFileSystems operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the DescribeFileSystems returns a 404 FileSystemNotFound error.  This operation requires permissions for the elasticfilesystem:DeleteFileSystem action.
   */
  deleteFileSystem(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified mount target. This operation forcibly breaks any mounts of the file system via the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes may be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC via another mount target. This operation requires permissions for the following action on the file system:    elasticfilesystem:DeleteMountTarget     The DeleteMountTarget call returns while the mount target state is still deleting. You can check the mount target deletion by calling the DescribeMountTargets operation, which returns a list of mount target descriptions for the given file system.   The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface:    ec2:DeleteNetworkInterface   
   */
  deleteMountTarget(params: EFS.Types.DeleteMountTargetRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified mount target. This operation forcibly breaks any mounts of the file system via the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes may be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC via another mount target. This operation requires permissions for the following action on the file system:    elasticfilesystem:DeleteMountTarget     The DeleteMountTarget call returns while the mount target state is still deleting. You can check the mount target deletion by calling the DescribeMountTargets operation, which returns a list of mount target descriptions for the given file system.   The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface:    ec2:DeleteNetworkInterface   
   */
  deleteMountTarget(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified tags from a file system. If the DeleteTags request includes a tag key that does not exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see Tag Restrictions in the AWS Billing and Cost Management User Guide. This operation requires permissions for the elasticfilesystem:DeleteTags action.
   */
  deleteTags(params: EFS.Types.DeleteTagsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified tags from a file system. If the DeleteTags request includes a tag key that does not exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see Tag Restrictions in the AWS Billing and Cost Management User Guide. This operation requires permissions for the elasticfilesystem:DeleteTags action.
   */
  deleteTags(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns the description of a specific Amazon EFS file system if either the file system CreationToken or the FileSystemId is provided. Otherwise, it returns descriptions of all file systems owned by the caller's AWS account in the AWS Region of the endpoint that you're calling.  When retrieving all file system descriptions, you can optionally specify the MaxItems parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon EFS returns a NextMarker, an opaque token, in the response. In this case, you should send a subsequent request with the Marker request parameter set to the value of NextMarker.  To retrieve a list of your file system descriptions, this operation is used in an iterative process, where DescribeFileSystems is called first without the Marker and then the operation continues to call it with the Marker parameter set to the value of the NextMarker from the previous response until the response has no NextMarker.  The implementation may return fewer than MaxItems file system descriptions while still including a NextMarker value.   The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multi-call iteration is unspecified.   This operation requires permissions for the elasticfilesystem:DescribeFileSystems action. 
   */
  describeFileSystems(params: EFS.Types.DescribeFileSystemsRequest, callback?: (err: AWSError, data: EFS.Types.DescribeFileSystemsResponse) => void): Request<EFS.Types.DescribeFileSystemsResponse, AWSError>;
  /**
   * Returns the description of a specific Amazon EFS file system if either the file system CreationToken or the FileSystemId is provided. Otherwise, it returns descriptions of all file systems owned by the caller's AWS account in the AWS Region of the endpoint that you're calling.  When retrieving all file system descriptions, you can optionally specify the MaxItems parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon EFS returns a NextMarker, an opaque token, in the response. In this case, you should send a subsequent request with the Marker request parameter set to the value of NextMarker.  To retrieve a list of your file system descriptions, this operation is used in an iterative process, where DescribeFileSystems is called first without the Marker and then the operation continues to call it with the Marker parameter set to the value of the NextMarker from the previous response until the response has no NextMarker.  The implementation may return fewer than MaxItems file system descriptions while still including a NextMarker value.   The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multi-call iteration is unspecified.   This operation requires permissions for the elasticfilesystem:DescribeFileSystems action. 
   */
  describeFileSystems(callback?: (err: AWSError, data: EFS.Types.DescribeFileSystemsResponse) => void): Request<EFS.Types.DescribeFileSystemsResponse, AWSError>;
  /**
   * Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted. This operation requires permissions for the following actions:    elasticfilesystem:DescribeMountTargetSecurityGroups action on the mount target's file system.     ec2:DescribeNetworkInterfaceAttribute action on the mount target's network interface.   
   */
  describeMountTargetSecurityGroups(params: EFS.Types.DescribeMountTargetSecurityGroupsRequest, callback?: (err: AWSError, data: EFS.Types.DescribeMountTargetSecurityGroupsResponse) => void): Request<EFS.Types.DescribeMountTargetSecurityGroupsResponse, AWSError>;
  /**
   * Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted. This operation requires permissions for the following actions:    elasticfilesystem:DescribeMountTargetSecurityGroups action on the mount target's file system.     ec2:DescribeNetworkInterfaceAttribute action on the mount target's network interface.   
   */
  describeMountTargetSecurityGroups(callback?: (err: AWSError, data: EFS.Types.DescribeMountTargetSecurityGroupsResponse) => void): Request<EFS.Types.DescribeMountTargetSecurityGroupsResponse, AWSError>;
  /**
   * Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified. This operation requires permissions for the elasticfilesystem:DescribeMountTargets action, on either the file system ID that you specify in FileSystemId, or on the file system of the mount target that you specify in MountTargetId.
   */
  describeMountTargets(params: EFS.Types.DescribeMountTargetsRequest, callback?: (err: AWSError, data: EFS.Types.DescribeMountTargetsResponse) => void): Request<EFS.Types.DescribeMountTargetsResponse, AWSError>;
  /**
   * Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified. This operation requires permissions for the elasticfilesystem:DescribeMountTargets action, on either the file system ID that you specify in FileSystemId, or on the file system of the mount target that you specify in MountTargetId.
   */
  describeMountTargets(callback?: (err: AWSError, data: EFS.Types.DescribeMountTargetsResponse) => void): Request<EFS.Types.DescribeMountTargetsResponse, AWSError>;
  /**
   * Returns the tags associated with a file system. The order of tags returned in the response of one DescribeTags call and the order of tags returned across the responses of a multi-call iteration (when using pagination) is unspecified.   This operation requires permissions for the elasticfilesystem:DescribeTags action. 
   */
  describeTags(params: EFS.Types.DescribeTagsRequest, callback?: (err: AWSError, data: EFS.Types.DescribeTagsResponse) => void): Request<EFS.Types.DescribeTagsResponse, AWSError>;
  /**
   * Returns the tags associated with a file system. The order of tags returned in the response of one DescribeTags call and the order of tags returned across the responses of a multi-call iteration (when using pagination) is unspecified.   This operation requires permissions for the elasticfilesystem:DescribeTags action. 
   */
  describeTags(callback?: (err: AWSError, data: EFS.Types.DescribeTagsResponse) => void): Request<EFS.Types.DescribeTagsResponse, AWSError>;
  /**
   * Modifies the set of security groups in effect for a mount target. When you create a mount target, Amazon EFS also creates a new network interface. For more information, see CreateMountTarget. This operation replaces the security groups in effect for the network interface associated with a mount target, with the SecurityGroups provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted.  The operation requires permissions for the following actions:    elasticfilesystem:ModifyMountTargetSecurityGroups action on the mount target's file system.     ec2:ModifyNetworkInterfaceAttribute action on the mount target's network interface.   
   */
  modifyMountTargetSecurityGroups(params: EFS.Types.ModifyMountTargetSecurityGroupsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Modifies the set of security groups in effect for a mount target. When you create a mount target, Amazon EFS also creates a new network interface. For more information, see CreateMountTarget. This operation replaces the security groups in effect for the network interface associated with a mount target, with the SecurityGroups provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted.  The operation requires permissions for the following actions:    elasticfilesystem:ModifyMountTargetSecurityGroups action on the mount target's file system.     ec2:ModifyNetworkInterfaceAttribute action on the mount target's network interface.   
   */
  modifyMountTargetSecurityGroups(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace EFS {
  export type AwsAccountId = string;
  export interface CreateFileSystemRequest {
    /**
     * String of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent creation.
     */
    CreationToken: CreationToken;
    /**
     * The PerformanceMode of the file system. We recommend generalPurpose performance mode for most file systems. File systems using the maxIO performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. This can't be changed after the file system has been created.
     */
    PerformanceMode?: PerformanceMode;
    /**
     * A boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying a CreateFileSystemRequest$KmsKeyId for an existing AWS Key Management Service (AWS KMS) customer master key (CMK). If you don't specify a CMK, then the default CMK for Amazon EFS, /aws/elasticfilesystem, is used to protect the encrypted file system. 
     */
    Encrypted?: Encrypted;
    /**
     * The id of the AWS KMS CMK that will be used to protect the encrypted file system. This parameter is only required if you want to use a non-default CMK. If this parameter is not specified, the default CMK for Amazon EFS is used. This id can be in one of the following formats:   Key ID - A unique identifier of the key. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.   ARN - An Amazon Resource Name for the key. For example, arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.   Key alias - A previously created display name for a key. For example, alias/projectKey1.   Key alias ARN - An Amazon Resource Name for a key alias. For example, arn:aws:kms:us-west-2:444455556666:alias/projectKey1.   Note that if the KmsKeyId is specified, the CreateFileSystemRequest$Encrypted parameter must be set to true.
     */
    KmsKeyId?: KmsKeyId;
  }
  export interface CreateMountTargetRequest {
    /**
     * ID of the file system for which to create the mount target.
     */
    FileSystemId: FileSystemId;
    /**
     * ID of the subnet to add the mount target in.
     */
    SubnetId: SubnetId;
    /**
     * Valid IPv4 address within the address range of the specified subnet.
     */
    IpAddress?: IpAddress;
    /**
     * Up to five VPC security group IDs, of the form sg-xxxxxxxx. These must be for the same VPC as subnet specified.
     */
    SecurityGroups?: SecurityGroups;
  }
  export interface CreateTagsRequest {
    /**
     * ID of the file system whose tags you want to modify (String). This operation modifies the tags only, not the file system.
     */
    FileSystemId: FileSystemId;
    /**
     * Array of Tag objects to add. Each Tag object is a key-value pair. 
     */
    Tags: Tags;
  }
  export type CreationToken = string;
  export interface DeleteFileSystemRequest {
    /**
     * ID of the file system you want to delete.
     */
    FileSystemId: FileSystemId;
  }
  export interface DeleteMountTargetRequest {
    /**
     * ID of the mount target to delete (String).
     */
    MountTargetId: MountTargetId;
  }
  export interface DeleteTagsRequest {
    /**
     * ID of the file system whose tags you want to delete (String).
     */
    FileSystemId: FileSystemId;
    /**
     * List of tag keys to delete.
     */
    TagKeys: TagKeys;
  }
  export interface DescribeFileSystemsRequest {
    /**
     * (Optional) Specifies the maximum number of file systems to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon EFS returns is the minimum of the MaxItems parameter specified in the request and the service's internal maximum number of items per page. 
     */
    MaxItems?: MaxItems;
    /**
     * (Optional) Opaque pagination token returned from a previous DescribeFileSystems operation (String). If present, specifies to continue the list from where the returning call had left off. 
     */
    Marker?: Marker;
    /**
     * (Optional) Restricts the list to the file system with this creation token (String). You specify a creation token when you create an Amazon EFS file system.
     */
    CreationToken?: CreationToken;
    /**
     * (Optional) ID of the file system whose description you want to retrieve (String).
     */
    FileSystemId?: FileSystemId;
  }
  export interface DescribeFileSystemsResponse {
    /**
     * Present if provided by caller in the request (String).
     */
    Marker?: Marker;
    /**
     * Array of file system descriptions.
     */
    FileSystems?: FileSystemDescriptions;
    /**
     * Present if there are more file systems than returned in the response (String). You can use the NextMarker in the subsequent request to fetch the descriptions.
     */
    NextMarker?: Marker;
  }
  export interface DescribeMountTargetSecurityGroupsRequest {
    /**
     * ID of the mount target whose security groups you want to retrieve.
     */
    MountTargetId: MountTargetId;
  }
  export interface DescribeMountTargetSecurityGroupsResponse {
    /**
     * Array of security groups.
     */
    SecurityGroups: SecurityGroups;
  }
  export interface DescribeMountTargetsRequest {
    /**
     * (Optional) Maximum number of mount targets to return in the response. It must be an integer with a value greater than zero.
     */
    MaxItems?: MaxItems;
    /**
     * (Optional) Opaque pagination token returned from a previous DescribeMountTargets operation (String). If present, it specifies to continue the list from where the previous returning call left off.
     */
    Marker?: Marker;
    /**
     * (Optional) ID of the file system whose mount targets you want to list (String). It must be included in your request if MountTargetId is not included.
     */
    FileSystemId?: FileSystemId;
    /**
     * (Optional) ID of the mount target that you want to have described (String). It must be included in your request if FileSystemId is not included.
     */
    MountTargetId?: MountTargetId;
  }
  export interface DescribeMountTargetsResponse {
    /**
     * If the request included the Marker, the response returns that value in this field.
     */
    Marker?: Marker;
    /**
     * Returns the file system's mount targets as an array of MountTargetDescription objects.
     */
    MountTargets?: MountTargetDescriptions;
    /**
     * If a value is present, there are more mount targets to return. In a subsequent request, you can provide Marker in your request with this value to retrieve the next set of mount targets.
     */
    NextMarker?: Marker;
  }
  export interface DescribeTagsRequest {
    /**
     * (Optional) Maximum number of file system tags to return in the response. It must be an integer with a value greater than zero.
     */
    MaxItems?: MaxItems;
    /**
     * (Optional) Opaque pagination token returned from a previous DescribeTags operation (String). If present, it specifies to continue the list from where the previous call left off.
     */
    Marker?: Marker;
    /**
     * ID of the file system whose tag set you want to retrieve.
     */
    FileSystemId: FileSystemId;
  }
  export interface DescribeTagsResponse {
    /**
     * If the request included a Marker, the response returns that value in this field.
     */
    Marker?: Marker;
    /**
     * Returns tags associated with the file system as an array of Tag objects. 
     */
    Tags: Tags;
    /**
     * If a value is present, there are more tags to return. In a subsequent request, you can provide the value of NextMarker as the value of the Marker parameter in your next request to retrieve the next set of tags.
     */
    NextMarker?: Marker;
  }
  export type Encrypted = boolean;
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export interface FileSystemDescription {
    /**
     * AWS account that created the file system. If the file system was created by an IAM user, the parent account to which the user belongs is the owner.
     */
    OwnerId: AwsAccountId;
    /**
     * Opaque string specified in the request.
     */
    CreationToken: CreationToken;
    /**
     * ID of the file system, assigned by Amazon EFS.
     */
    FileSystemId: FileSystemId;
    /**
     * Time that the file system was created, in seconds (since 1970-01-01T00:00:00Z).
     */
    CreationTime: Timestamp;
    /**
     * Lifecycle phase of the file system.
     */
    LifeCycleState: LifeCycleState;
    /**
     * You can add tags to a file system, including a Name tag. For more information, see CreateTags. If the file system has a Name tag, Amazon EFS returns the value in this field. 
     */
    Name?: TagValue;
    /**
     * Current number of mount targets that the file system has. For more information, see CreateMountTarget.
     */
    NumberOfMountTargets: MountTargetCount;
    /**
     * Latest known metered size (in bytes) of data stored in the file system, in bytes, in its Value field, and the time at which that size was determined in its Timestamp field. The Timestamp value is the integer number of seconds since 1970-01-01T00:00:00Z. Note that the value does not represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value will represent actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not the exact size the file system was at any instant in time. 
     */
    SizeInBytes: FileSystemSize;
    /**
     * The PerformanceMode of the file system.
     */
    PerformanceMode: PerformanceMode;
    /**
     * A boolean value that, if true, indicates that the file system is encrypted.
     */
    Encrypted?: Encrypted;
    /**
     * The id of an AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to protect the encrypted file system.
     */
    KmsKeyId?: KmsKeyId;
  }
  export type FileSystemDescriptions = FileSystemDescription[];
  export type FileSystemId = string;
  export interface FileSystemSize {
    /**
     * Latest known metered size (in bytes) of data stored in the file system.
     */
    Value: FileSystemSizeValue;
    /**
     * Time at which the size of data, returned in the Value field, was determined. The value is the integer number of seconds since 1970-01-01T00:00:00Z.
     */
    Timestamp?: Timestamp;
  }
  export type FileSystemSizeValue = number;
  export type IpAddress = string;
  export type KmsKeyId = string;
  export type LifeCycleState = "creating"|"available"|"deleting"|"deleted"|string;
  export type Marker = string;
  export type MaxItems = number;
  export interface ModifyMountTargetSecurityGroupsRequest {
    /**
     * ID of the mount target whose security groups you want to modify.
     */
    MountTargetId: MountTargetId;
    /**
     * Array of up to five VPC security group IDs.
     */
    SecurityGroups?: SecurityGroups;
  }
  export type MountTargetCount = number;
  export interface MountTargetDescription {
    /**
     * AWS account ID that owns the resource.
     */
    OwnerId?: AwsAccountId;
    /**
     * System-assigned mount target ID.
     */
    MountTargetId: MountTargetId;
    /**
     * ID of the file system for which the mount target is intended.
     */
    FileSystemId: FileSystemId;
    /**
     * ID of the mount target's subnet.
     */
    SubnetId: SubnetId;
    /**
     * Lifecycle state of the mount target.
     */
    LifeCycleState: LifeCycleState;
    /**
     * Address at which the file system may be mounted via the mount target.
     */
    IpAddress?: IpAddress;
    /**
     * ID of the network interface that Amazon EFS created when it created the mount target.
     */
    NetworkInterfaceId?: NetworkInterfaceId;
  }
  export type MountTargetDescriptions = MountTargetDescription[];
  export type MountTargetId = string;
  export type NetworkInterfaceId = string;
  export type PerformanceMode = "generalPurpose"|"maxIO"|string;
  export type SecurityGroup = string;
  export type SecurityGroups = SecurityGroup[];
  export type SubnetId = string;
  export interface Tag {
    /**
     * Tag key (String). The key can't start with aws:.
     */
    Key: TagKey;
    /**
     * Value of the tag key.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagValue = string;
  export type Tags = Tag[];
  export type Timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-02-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the EFS client.
   */
  export import Types = EFS;
}
export = EFS;
