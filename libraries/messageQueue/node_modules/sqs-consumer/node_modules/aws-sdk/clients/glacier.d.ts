import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {GlacierCustomizations} from '../lib/services/glacier';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
import {Readable} from 'stream';
interface Blob {}
declare class Glacier extends GlacierCustomizations {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Glacier.Types.ClientConfiguration)
  config: Config & Glacier.Types.ClientConfiguration;
  /**
   * This operation aborts a multipart upload identified by the upload ID. After the Abort Multipart Upload request succeeds, you cannot upload any more parts to the multipart upload or complete the multipart upload. Aborting a completed upload fails. However, aborting an already-aborted upload will succeed, for a short time. For more information about uploading a part and completing a multipart upload, see UploadMultipartPart and CompleteMultipartUpload. This operation is idempotent. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Working with Archives in Amazon Glacier and Abort Multipart Upload in the Amazon Glacier Developer Guide. 
   */
  abortMultipartUpload(params: Glacier.Types.AbortMultipartUploadInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation aborts a multipart upload identified by the upload ID. After the Abort Multipart Upload request succeeds, you cannot upload any more parts to the multipart upload or complete the multipart upload. Aborting a completed upload fails. However, aborting an already-aborted upload will succeed, for a short time. For more information about uploading a part and completing a multipart upload, see UploadMultipartPart and CompleteMultipartUpload. This operation is idempotent. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Working with Archives in Amazon Glacier and Abort Multipart Upload in the Amazon Glacier Developer Guide. 
   */
  abortMultipartUpload(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation aborts the vault locking process if the vault lock is not in the Locked state. If the vault lock is in the Locked state when this operation is requested, the operation returns an AccessDeniedException error. Aborting the vault locking process removes the vault lock policy from the specified vault.  A vault lock is put into the InProgress state by calling InitiateVaultLock. A vault lock is put into the Locked state by calling CompleteVaultLock. You can get the state of a vault lock by calling GetVaultLock. For more information about the vault locking process, see Amazon Glacier Vault Lock. For more information about vault lock policies, see Amazon Glacier Access Control with Vault Lock Policies.  This operation is idempotent. You can successfully invoke this operation multiple times, if the vault lock is in the InProgress state or if there is no policy associated with the vault.
   */
  abortVaultLock(params: Glacier.Types.AbortVaultLockInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation aborts the vault locking process if the vault lock is not in the Locked state. If the vault lock is in the Locked state when this operation is requested, the operation returns an AccessDeniedException error. Aborting the vault locking process removes the vault lock policy from the specified vault.  A vault lock is put into the InProgress state by calling InitiateVaultLock. A vault lock is put into the Locked state by calling CompleteVaultLock. You can get the state of a vault lock by calling GetVaultLock. For more information about the vault locking process, see Amazon Glacier Vault Lock. For more information about vault lock policies, see Amazon Glacier Access Control with Vault Lock Policies.  This operation is idempotent. You can successfully invoke this operation multiple times, if the vault lock is in the InProgress state or if there is no policy associated with the vault.
   */
  abortVaultLock(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation adds the specified tags to a vault. Each tag is composed of a key and a value. Each vault can have up to 10 tags. If your request would cause the tag limit for the vault to be exceeded, the operation throws the LimitExceededException error. If a tag already exists on the vault under a specified key, the existing key value will be overwritten. For more information about tags, see Tagging Amazon Glacier Resources. 
   */
  addTagsToVault(params: Glacier.Types.AddTagsToVaultInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation adds the specified tags to a vault. Each tag is composed of a key and a value. Each vault can have up to 10 tags. If your request would cause the tag limit for the vault to be exceeded, the operation throws the LimitExceededException error. If a tag already exists on the vault under a specified key, the existing key value will be overwritten. For more information about tags, see Tagging Amazon Glacier Resources. 
   */
  addTagsToVault(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * You call this operation to inform Amazon Glacier that all the archive parts have been uploaded and that Amazon Glacier can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Amazon Glacier returns the URI path of the newly created archive resource. Using the URI path, you can then access the archive. After you upload an archive, you should save the archive ID returned to retrieve the archive at a later point. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see InitiateJob. In the request, you must include the computed SHA256 tree hash of the entire archive you have uploaded. For information about computing a SHA256 tree hash, see Computing Checksums. On the server side, Amazon Glacier also constructs the SHA256 tree hash of the assembled archive. If the values match, Amazon Glacier saves the archive to the vault; otherwise, it returns an error, and the operation fails. The ListParts operation returns a list of parts uploaded for a specific multipart upload. It includes checksum information for each uploaded part that can be used to debug a bad checksum issue. Additionally, Amazon Glacier also checks for any missing content ranges when assembling the archive, if missing content ranges are found, Amazon Glacier returns an error and the operation fails. Complete Multipart Upload is an idempotent operation. After your first successful complete multipart upload, if you call the operation again within a short period, the operation will succeed and return the same archive ID. This is useful in the event you experience a network issue that causes an aborted connection or receive a 500 server error, in which case you can repeat your Complete Multipart Upload request and get the same archive ID without creating duplicate archives. Note, however, that after the multipart upload completes, you cannot call the List Parts operation and the multipart upload will not appear in List Multipart Uploads response, even if idempotent complete is possible. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Uploading Large Archives in Parts (Multipart Upload) and Complete Multipart Upload in the Amazon Glacier Developer Guide. 
   */
  completeMultipartUpload(params: Glacier.Types.CompleteMultipartUploadInput, callback?: (err: AWSError, data: Glacier.Types.ArchiveCreationOutput) => void): Request<Glacier.Types.ArchiveCreationOutput, AWSError>;
  /**
   * You call this operation to inform Amazon Glacier that all the archive parts have been uploaded and that Amazon Glacier can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Amazon Glacier returns the URI path of the newly created archive resource. Using the URI path, you can then access the archive. After you upload an archive, you should save the archive ID returned to retrieve the archive at a later point. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see InitiateJob. In the request, you must include the computed SHA256 tree hash of the entire archive you have uploaded. For information about computing a SHA256 tree hash, see Computing Checksums. On the server side, Amazon Glacier also constructs the SHA256 tree hash of the assembled archive. If the values match, Amazon Glacier saves the archive to the vault; otherwise, it returns an error, and the operation fails. The ListParts operation returns a list of parts uploaded for a specific multipart upload. It includes checksum information for each uploaded part that can be used to debug a bad checksum issue. Additionally, Amazon Glacier also checks for any missing content ranges when assembling the archive, if missing content ranges are found, Amazon Glacier returns an error and the operation fails. Complete Multipart Upload is an idempotent operation. After your first successful complete multipart upload, if you call the operation again within a short period, the operation will succeed and return the same archive ID. This is useful in the event you experience a network issue that causes an aborted connection or receive a 500 server error, in which case you can repeat your Complete Multipart Upload request and get the same archive ID without creating duplicate archives. Note, however, that after the multipart upload completes, you cannot call the List Parts operation and the multipart upload will not appear in List Multipart Uploads response, even if idempotent complete is possible. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Uploading Large Archives in Parts (Multipart Upload) and Complete Multipart Upload in the Amazon Glacier Developer Guide. 
   */
  completeMultipartUpload(callback?: (err: AWSError, data: Glacier.Types.ArchiveCreationOutput) => void): Request<Glacier.Types.ArchiveCreationOutput, AWSError>;
  /**
   * This operation completes the vault locking process by transitioning the vault lock from the InProgress state to the Locked state, which causes the vault lock policy to become unchangeable. A vault lock is put into the InProgress state by calling InitiateVaultLock. You can obtain the state of the vault lock by calling GetVaultLock. For more information about the vault locking process, Amazon Glacier Vault Lock.  This operation is idempotent. This request is always successful if the vault lock is in the Locked state and the provided lock ID matches the lock ID originally used to lock the vault. If an invalid lock ID is passed in the request when the vault lock is in the Locked state, the operation returns an AccessDeniedException error. If an invalid lock ID is passed in the request when the vault lock is in the InProgress state, the operation throws an InvalidParameter error.
   */
  completeVaultLock(params: Glacier.Types.CompleteVaultLockInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation completes the vault locking process by transitioning the vault lock from the InProgress state to the Locked state, which causes the vault lock policy to become unchangeable. A vault lock is put into the InProgress state by calling InitiateVaultLock. You can obtain the state of the vault lock by calling GetVaultLock. For more information about the vault locking process, Amazon Glacier Vault Lock.  This operation is idempotent. This request is always successful if the vault lock is in the Locked state and the provided lock ID matches the lock ID originally used to lock the vault. If an invalid lock ID is passed in the request when the vault lock is in the Locked state, the operation returns an AccessDeniedException error. If an invalid lock ID is passed in the request when the vault lock is in the InProgress state, the operation throws an InvalidParameter error.
   */
  completeVaultLock(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation creates a new vault with the specified name. The name of the vault must be unique within a region for an AWS account. You can create up to 1,000 vaults per account. If you need to create more vaults, contact Amazon Glacier. You must use the following guidelines when naming a vault.   Names can be between 1 and 255 characters long.   Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.' (period).   This operation is idempotent. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Creating a Vault in Amazon Glacier and Create Vault  in the Amazon Glacier Developer Guide. 
   */
  createVault(params: Glacier.Types.CreateVaultInput, callback?: (err: AWSError, data: Glacier.Types.CreateVaultOutput) => void): Request<Glacier.Types.CreateVaultOutput, AWSError>;
  /**
   * This operation creates a new vault with the specified name. The name of the vault must be unique within a region for an AWS account. You can create up to 1,000 vaults per account. If you need to create more vaults, contact Amazon Glacier. You must use the following guidelines when naming a vault.   Names can be between 1 and 255 characters long.   Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.' (period).   This operation is idempotent. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Creating a Vault in Amazon Glacier and Create Vault  in the Amazon Glacier Developer Guide. 
   */
  createVault(callback?: (err: AWSError, data: Glacier.Types.CreateVaultOutput) => void): Request<Glacier.Types.CreateVaultOutput, AWSError>;
  /**
   * This operation deletes an archive from a vault. Subsequent requests to initiate a retrieval of this archive will fail. Archive retrievals that are in progress for this archive ID may or may not succeed according to the following scenarios:   If the archive retrieval job is actively preparing the data for download when Amazon Glacier receives the delete archive request, the archival retrieval operation might fail.   If the archive retrieval job has successfully prepared the archive for download when Amazon Glacier receives the delete archive request, you will be able to download the output.   This operation is idempotent. Attempting to delete an already-deleted archive does not result in an error. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Deleting an Archive in Amazon Glacier and Delete Archive in the Amazon Glacier Developer Guide. 
   */
  deleteArchive(params: Glacier.Types.DeleteArchiveInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes an archive from a vault. Subsequent requests to initiate a retrieval of this archive will fail. Archive retrievals that are in progress for this archive ID may or may not succeed according to the following scenarios:   If the archive retrieval job is actively preparing the data for download when Amazon Glacier receives the delete archive request, the archival retrieval operation might fail.   If the archive retrieval job has successfully prepared the archive for download when Amazon Glacier receives the delete archive request, you will be able to download the output.   This operation is idempotent. Attempting to delete an already-deleted archive does not result in an error. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Deleting an Archive in Amazon Glacier and Delete Archive in the Amazon Glacier Developer Guide. 
   */
  deleteArchive(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes a vault. Amazon Glacier will delete a vault only if there are no archives in the vault as of the last inventory and there have been no writes to the vault since the last inventory. If either of these conditions is not satisfied, the vault deletion fails (that is, the vault is not removed) and Amazon Glacier returns an error. You can use DescribeVault to return the number of archives in a vault, and you can use Initiate a Job (POST jobs) to initiate a new inventory retrieval for a vault. The inventory contains the archive IDs you use to delete archives using Delete Archive (DELETE archive). This operation is idempotent. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Deleting a Vault in Amazon Glacier and Delete Vault  in the Amazon Glacier Developer Guide. 
   */
  deleteVault(params: Glacier.Types.DeleteVaultInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes a vault. Amazon Glacier will delete a vault only if there are no archives in the vault as of the last inventory and there have been no writes to the vault since the last inventory. If either of these conditions is not satisfied, the vault deletion fails (that is, the vault is not removed) and Amazon Glacier returns an error. You can use DescribeVault to return the number of archives in a vault, and you can use Initiate a Job (POST jobs) to initiate a new inventory retrieval for a vault. The inventory contains the archive IDs you use to delete archives using Delete Archive (DELETE archive). This operation is idempotent. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Deleting a Vault in Amazon Glacier and Delete Vault  in the Amazon Glacier Developer Guide. 
   */
  deleteVault(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes the access policy associated with the specified vault. The operation is eventually consistent; that is, it might take some time for Amazon Glacier to completely remove the access policy, and you might still see the effect of the policy for a short time after you send the delete request. This operation is idempotent. You can invoke delete multiple times, even if there is no policy associated with the vault. For more information about vault access policies, see Amazon Glacier Access Control with Vault Access Policies. 
   */
  deleteVaultAccessPolicy(params: Glacier.Types.DeleteVaultAccessPolicyInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes the access policy associated with the specified vault. The operation is eventually consistent; that is, it might take some time for Amazon Glacier to completely remove the access policy, and you might still see the effect of the policy for a short time after you send the delete request. This operation is idempotent. You can invoke delete multiple times, even if there is no policy associated with the vault. For more information about vault access policies, see Amazon Glacier Access Control with Vault Access Policies. 
   */
  deleteVaultAccessPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes the notification configuration set for a vault. The operation is eventually consistent; that is, it might take some time for Amazon Glacier to completely disable the notifications and you might still receive some notifications for a short time after you send the delete request. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Configuring Vault Notifications in Amazon Glacier and Delete Vault Notification Configuration  in the Amazon Glacier Developer Guide. 
   */
  deleteVaultNotifications(params: Glacier.Types.DeleteVaultNotificationsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes the notification configuration set for a vault. The operation is eventually consistent; that is, it might take some time for Amazon Glacier to completely disable the notifications and you might still receive some notifications for a short time after you send the delete request. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Configuring Vault Notifications in Amazon Glacier and Delete Vault Notification Configuration  in the Amazon Glacier Developer Guide. 
   */
  deleteVaultNotifications(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation returns information about a job you previously initiated, including the job initiation date, the user who initiated the job, the job status code/message and the Amazon SNS topic to notify after Amazon Glacier completes the job. For more information about initiating a job, see InitiateJob.   This operation enables you to check the status of your job. However, it is strongly recommended that you set up an Amazon SNS topic and specify it in your initiate job request so that Amazon Glacier can notify the topic after it completes the job.  A job ID will not expire for at least 24 hours after Amazon Glacier completes the job. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For information about the underlying REST API, see Working with Archives in Amazon Glacier in the Amazon Glacier Developer Guide. 
   */
  describeJob(params: Glacier.Types.DescribeJobInput, callback?: (err: AWSError, data: Glacier.Types.GlacierJobDescription) => void): Request<Glacier.Types.GlacierJobDescription, AWSError>;
  /**
   * This operation returns information about a job you previously initiated, including the job initiation date, the user who initiated the job, the job status code/message and the Amazon SNS topic to notify after Amazon Glacier completes the job. For more information about initiating a job, see InitiateJob.   This operation enables you to check the status of your job. However, it is strongly recommended that you set up an Amazon SNS topic and specify it in your initiate job request so that Amazon Glacier can notify the topic after it completes the job.  A job ID will not expire for at least 24 hours after Amazon Glacier completes the job. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For information about the underlying REST API, see Working with Archives in Amazon Glacier in the Amazon Glacier Developer Guide. 
   */
  describeJob(callback?: (err: AWSError, data: Glacier.Types.GlacierJobDescription) => void): Request<Glacier.Types.GlacierJobDescription, AWSError>;
  /**
   * This operation returns information about a vault, including the vault's Amazon Resource Name (ARN), the date the vault was created, the number of archives it contains, and the total size of all the archives in the vault. The number of archives and their total size are as of the last inventory generation. This means that if you add or remove an archive from a vault, and then immediately use Describe Vault, the change in contents will not be immediately reflected. If you want to retrieve the latest inventory of the vault, use InitiateJob. Amazon Glacier generates vault inventories approximately daily. For more information, see Downloading a Vault Inventory in Amazon Glacier.  An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Retrieving Vault Metadata in Amazon Glacier and Describe Vault  in the Amazon Glacier Developer Guide. 
   */
  describeVault(params: Glacier.Types.DescribeVaultInput, callback?: (err: AWSError, data: Glacier.Types.DescribeVaultOutput) => void): Request<Glacier.Types.DescribeVaultOutput, AWSError>;
  /**
   * This operation returns information about a vault, including the vault's Amazon Resource Name (ARN), the date the vault was created, the number of archives it contains, and the total size of all the archives in the vault. The number of archives and their total size are as of the last inventory generation. This means that if you add or remove an archive from a vault, and then immediately use Describe Vault, the change in contents will not be immediately reflected. If you want to retrieve the latest inventory of the vault, use InitiateJob. Amazon Glacier generates vault inventories approximately daily. For more information, see Downloading a Vault Inventory in Amazon Glacier.  An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Retrieving Vault Metadata in Amazon Glacier and Describe Vault  in the Amazon Glacier Developer Guide. 
   */
  describeVault(callback?: (err: AWSError, data: Glacier.Types.DescribeVaultOutput) => void): Request<Glacier.Types.DescribeVaultOutput, AWSError>;
  /**
   * This operation returns the current data retrieval policy for the account and region specified in the GET request. For more information about data retrieval policies, see Amazon Glacier Data Retrieval Policies.
   */
  getDataRetrievalPolicy(params: Glacier.Types.GetDataRetrievalPolicyInput, callback?: (err: AWSError, data: Glacier.Types.GetDataRetrievalPolicyOutput) => void): Request<Glacier.Types.GetDataRetrievalPolicyOutput, AWSError>;
  /**
   * This operation returns the current data retrieval policy for the account and region specified in the GET request. For more information about data retrieval policies, see Amazon Glacier Data Retrieval Policies.
   */
  getDataRetrievalPolicy(callback?: (err: AWSError, data: Glacier.Types.GetDataRetrievalPolicyOutput) => void): Request<Glacier.Types.GetDataRetrievalPolicyOutput, AWSError>;
  /**
   * This operation downloads the output of the job you initiated using InitiateJob. Depending on the job type you specified when you initiated the job, the output will be either the content of an archive or a vault inventory. You can download all the job output or download a portion of the output by specifying a byte range. In the case of an archive retrieval job, depending on the byte range you specify, Amazon Glacier returns the checksum for the portion of the data. You can compute the checksum on the client and verify that the values match to ensure the portion you downloaded is the correct data. A job ID will not expire for at least 24 hours after Amazon Glacier completes the job. That a byte range. For both archive and inventory retrieval jobs, you should verify the downloaded size against the size returned in the headers from the Get Job Output response. For archive retrieval jobs, you should also verify that the size is what you expected. If you download a portion of the output, the expected size is based on the range of bytes you specified. For example, if you specify a range of bytes=0-1048575, you should verify your download size is 1,048,576 bytes. If you download an entire archive, the expected size is the size of the archive when you uploaded it to Amazon Glacier The expected size is also returned in the headers from the Get Job Output response. In the case of an archive retrieval job, depending on the byte range you specify, Amazon Glacier returns the checksum for the portion of the data. To ensure the portion you downloaded is the correct data, compute the checksum on the client, verify that the values match, and verify that the size is what you expected. A job ID does not expire for at least 24 hours after Amazon Glacier completes the job. That is, you can download the job output within the 24 hours period after Amazon Glacier completes the job. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and the underlying REST API, see Downloading a Vault Inventory, Downloading an Archive, and Get Job Output  
   */
  getJobOutput(params: Glacier.Types.GetJobOutputInput, callback?: (err: AWSError, data: Glacier.Types.GetJobOutputOutput) => void): Request<Glacier.Types.GetJobOutputOutput, AWSError>;
  /**
   * This operation downloads the output of the job you initiated using InitiateJob. Depending on the job type you specified when you initiated the job, the output will be either the content of an archive or a vault inventory. You can download all the job output or download a portion of the output by specifying a byte range. In the case of an archive retrieval job, depending on the byte range you specify, Amazon Glacier returns the checksum for the portion of the data. You can compute the checksum on the client and verify that the values match to ensure the portion you downloaded is the correct data. A job ID will not expire for at least 24 hours after Amazon Glacier completes the job. That a byte range. For both archive and inventory retrieval jobs, you should verify the downloaded size against the size returned in the headers from the Get Job Output response. For archive retrieval jobs, you should also verify that the size is what you expected. If you download a portion of the output, the expected size is based on the range of bytes you specified. For example, if you specify a range of bytes=0-1048575, you should verify your download size is 1,048,576 bytes. If you download an entire archive, the expected size is the size of the archive when you uploaded it to Amazon Glacier The expected size is also returned in the headers from the Get Job Output response. In the case of an archive retrieval job, depending on the byte range you specify, Amazon Glacier returns the checksum for the portion of the data. To ensure the portion you downloaded is the correct data, compute the checksum on the client, verify that the values match, and verify that the size is what you expected. A job ID does not expire for at least 24 hours after Amazon Glacier completes the job. That is, you can download the job output within the 24 hours period after Amazon Glacier completes the job. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and the underlying REST API, see Downloading a Vault Inventory, Downloading an Archive, and Get Job Output  
   */
  getJobOutput(callback?: (err: AWSError, data: Glacier.Types.GetJobOutputOutput) => void): Request<Glacier.Types.GetJobOutputOutput, AWSError>;
  /**
   * This operation retrieves the access-policy subresource set on the vault; for more information on setting this subresource, see Set Vault Access Policy (PUT access-policy). If there is no access policy set on the vault, the operation returns a 404 Not found error. For more information about vault access policies, see Amazon Glacier Access Control with Vault Access Policies.
   */
  getVaultAccessPolicy(params: Glacier.Types.GetVaultAccessPolicyInput, callback?: (err: AWSError, data: Glacier.Types.GetVaultAccessPolicyOutput) => void): Request<Glacier.Types.GetVaultAccessPolicyOutput, AWSError>;
  /**
   * This operation retrieves the access-policy subresource set on the vault; for more information on setting this subresource, see Set Vault Access Policy (PUT access-policy). If there is no access policy set on the vault, the operation returns a 404 Not found error. For more information about vault access policies, see Amazon Glacier Access Control with Vault Access Policies.
   */
  getVaultAccessPolicy(callback?: (err: AWSError, data: Glacier.Types.GetVaultAccessPolicyOutput) => void): Request<Glacier.Types.GetVaultAccessPolicyOutput, AWSError>;
  /**
   * This operation retrieves the following attributes from the lock-policy subresource set on the specified vault:    The vault lock policy set on the vault.   The state of the vault lock, which is either InProgess or Locked.   When the lock ID expires. The lock ID is used to complete the vault locking process.   When the vault lock was initiated and put into the InProgress state.   A vault lock is put into the InProgress state by calling InitiateVaultLock. A vault lock is put into the Locked state by calling CompleteVaultLock. You can abort the vault locking process by calling AbortVaultLock. For more information about the vault locking process, Amazon Glacier Vault Lock.  If there is no vault lock policy set on the vault, the operation returns a 404 Not found error. For more information about vault lock policies, Amazon Glacier Access Control with Vault Lock Policies. 
   */
  getVaultLock(params: Glacier.Types.GetVaultLockInput, callback?: (err: AWSError, data: Glacier.Types.GetVaultLockOutput) => void): Request<Glacier.Types.GetVaultLockOutput, AWSError>;
  /**
   * This operation retrieves the following attributes from the lock-policy subresource set on the specified vault:    The vault lock policy set on the vault.   The state of the vault lock, which is either InProgess or Locked.   When the lock ID expires. The lock ID is used to complete the vault locking process.   When the vault lock was initiated and put into the InProgress state.   A vault lock is put into the InProgress state by calling InitiateVaultLock. A vault lock is put into the Locked state by calling CompleteVaultLock. You can abort the vault locking process by calling AbortVaultLock. For more information about the vault locking process, Amazon Glacier Vault Lock.  If there is no vault lock policy set on the vault, the operation returns a 404 Not found error. For more information about vault lock policies, Amazon Glacier Access Control with Vault Lock Policies. 
   */
  getVaultLock(callback?: (err: AWSError, data: Glacier.Types.GetVaultLockOutput) => void): Request<Glacier.Types.GetVaultLockOutput, AWSError>;
  /**
   * This operation retrieves the notification-configuration subresource of the specified vault. For information about setting a notification configuration on a vault, see SetVaultNotifications. If a notification configuration for a vault is not set, the operation returns a 404 Not Found error. For more information about vault notifications, see Configuring Vault Notifications in Amazon Glacier.  An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Configuring Vault Notifications in Amazon Glacier and Get Vault Notification Configuration  in the Amazon Glacier Developer Guide. 
   */
  getVaultNotifications(params: Glacier.Types.GetVaultNotificationsInput, callback?: (err: AWSError, data: Glacier.Types.GetVaultNotificationsOutput) => void): Request<Glacier.Types.GetVaultNotificationsOutput, AWSError>;
  /**
   * This operation retrieves the notification-configuration subresource of the specified vault. For information about setting a notification configuration on a vault, see SetVaultNotifications. If a notification configuration for a vault is not set, the operation returns a 404 Not Found error. For more information about vault notifications, see Configuring Vault Notifications in Amazon Glacier.  An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Configuring Vault Notifications in Amazon Glacier and Get Vault Notification Configuration  in the Amazon Glacier Developer Guide. 
   */
  getVaultNotifications(callback?: (err: AWSError, data: Glacier.Types.GetVaultNotificationsOutput) => void): Request<Glacier.Types.GetVaultNotificationsOutput, AWSError>;
  /**
   * This operation initiates a job of the specified type. In this release, you can initiate a job to retrieve either an archive or a vault inventory (a list of archives in a vault). Retrieving data from Amazon Glacier is a two-step process:   Initiate a retrieval job.  A data retrieval policy can cause your initiate retrieval job request to fail with a PolicyEnforcedException exception. For more information about data retrieval policies, see Amazon Glacier Data Retrieval Policies. For more information about the PolicyEnforcedException exception, see Error Responses.    After the job completes, download the bytes.   The retrieval request is executed asynchronously. When you initiate a retrieval job, Amazon Glacier creates a job and returns a job ID in the response. When Amazon Glacier completes the job, you can get the job output (archive or inventory data). For information about getting job output, see GetJobOutput operation.  The job must complete before you can get its output. To determine when a job is complete, you have the following options:    Use Amazon SNS Notification You can specify an Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Glacier can post a notification after the job is completed. You can specify an SNS topic per job request. The notification is sent only after Amazon Glacier completes the job. In addition to specifying an SNS topic per job request, you can configure vault notifications for a vault so that job notifications are always sent. For more information, see SetVaultNotifications.    Get job details You can make a DescribeJob request to obtain job status information while a job is in progress. However, it is more efficient to use an Amazon SNS notification to determine when a job is complete.    The information you get via notification is same that you get by calling DescribeJob.  If for a specific event, you add both the notification configuration on the vault and also specify an SNS topic in your initiate job request, Amazon Glacier sends both notifications. For more information, see SetVaultNotifications. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  About the Vault Inventory  Amazon Glacier prepares an inventory for each vault periodically, every 24 hours. When you initiate a job for a vault inventory, Amazon Glacier returns the last inventory for the vault. The inventory data you get might be up to a day or two days old. Also, the initiate inventory job might take some time to complete before you can download the vault inventory. So you do not want to retrieve a vault inventory for each vault operation. However, in some scenarios, you might find the vault inventory useful. For example, when you upload an archive, you can provide an archive description but not an archive name. Amazon Glacier provides you a unique archive ID, an opaque string of characters. So, you might maintain your own database that maps archive names to their corresponding Amazon Glacier assigned archive IDs. You might find the vault inventory useful in the event you need to reconcile information in your database with the actual vault inventory.  Range Inventory Retrieval  You can limit the number of inventory items retrieved by filtering on the archive creation date or by setting a limit.  Filtering by Archive Creation Date  You can retrieve inventory items for archives created between StartDate and EndDate by specifying values for these parameters in the InitiateJob request. Archives created on or after the StartDate and before the EndDate will be returned. If you only provide the StartDate without the EndDate, you will retrieve the inventory for all archives created on or after the StartDate. If you only provide the EndDate without the StartDate, you will get back the inventory for all archives created before the EndDate.  Limiting Inventory Items per Retrieval  You can limit the number of inventory items returned by setting the Limit parameter in the InitiateJob request. The inventory job output will contain inventory items up to the specified Limit. If there are more inventory items available, the result is paginated. After a job is complete you can use the DescribeJob operation to get a marker that you use in a subsequent InitiateJob request. The marker will indicate the starting point to retrieve the next set of inventory items. You can page through your entire inventory by repeatedly making InitiateJob requests with the marker from the previous DescribeJob output, until you get a marker from DescribeJob that returns null, indicating that there are no more inventory items available. You can use the Limit parameter together with the date range parameters.  About Ranged Archive Retrieval  You can initiate an archive retrieval for the whole archive or a range of the archive. In the case of ranged archive retrieval, you specify a byte range to return or the whole archive. The range specified must be megabyte (MB) aligned, that is the range start value must be divisible by 1 MB and range end value plus 1 must be divisible by 1 MB or equal the end of the archive. If the ranged archive retrieval is not megabyte aligned, this operation returns a 400 response. Furthermore, to ensure you get checksum values for data you download using Get Job Output API, the range must be tree hash aligned. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and the underlying REST API, see Initiate a Job and Downloading a Vault Inventory   Expedited and Bulk Archive Retrievals  When retrieving an archive, you can specify one of the following options in the Tier field of the request body:     Standard The default type of retrieval, which allows access to any of your archives within several hours. Standard retrievals typically complete within 3–5 hours.    Bulk Amazon Glacier’s lowest-cost retrieval option, which enables you to retrieve large amounts of data inexpensively in a day. Bulk retrieval requests typically complete within 5–12 hours.     Expedited Amazon Glacier’s option for the fastest retrievals. Archives requested using the expedited retrievals typically become accessible within 1–5 minutes.    For more information about expedited and bulk retrievals, see Retrieving Amazon Glacier Archives.
   */
  initiateJob(params: Glacier.Types.InitiateJobInput, callback?: (err: AWSError, data: Glacier.Types.InitiateJobOutput) => void): Request<Glacier.Types.InitiateJobOutput, AWSError>;
  /**
   * This operation initiates a job of the specified type. In this release, you can initiate a job to retrieve either an archive or a vault inventory (a list of archives in a vault). Retrieving data from Amazon Glacier is a two-step process:   Initiate a retrieval job.  A data retrieval policy can cause your initiate retrieval job request to fail with a PolicyEnforcedException exception. For more information about data retrieval policies, see Amazon Glacier Data Retrieval Policies. For more information about the PolicyEnforcedException exception, see Error Responses.    After the job completes, download the bytes.   The retrieval request is executed asynchronously. When you initiate a retrieval job, Amazon Glacier creates a job and returns a job ID in the response. When Amazon Glacier completes the job, you can get the job output (archive or inventory data). For information about getting job output, see GetJobOutput operation.  The job must complete before you can get its output. To determine when a job is complete, you have the following options:    Use Amazon SNS Notification You can specify an Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Glacier can post a notification after the job is completed. You can specify an SNS topic per job request. The notification is sent only after Amazon Glacier completes the job. In addition to specifying an SNS topic per job request, you can configure vault notifications for a vault so that job notifications are always sent. For more information, see SetVaultNotifications.    Get job details You can make a DescribeJob request to obtain job status information while a job is in progress. However, it is more efficient to use an Amazon SNS notification to determine when a job is complete.    The information you get via notification is same that you get by calling DescribeJob.  If for a specific event, you add both the notification configuration on the vault and also specify an SNS topic in your initiate job request, Amazon Glacier sends both notifications. For more information, see SetVaultNotifications. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  About the Vault Inventory  Amazon Glacier prepares an inventory for each vault periodically, every 24 hours. When you initiate a job for a vault inventory, Amazon Glacier returns the last inventory for the vault. The inventory data you get might be up to a day or two days old. Also, the initiate inventory job might take some time to complete before you can download the vault inventory. So you do not want to retrieve a vault inventory for each vault operation. However, in some scenarios, you might find the vault inventory useful. For example, when you upload an archive, you can provide an archive description but not an archive name. Amazon Glacier provides you a unique archive ID, an opaque string of characters. So, you might maintain your own database that maps archive names to their corresponding Amazon Glacier assigned archive IDs. You might find the vault inventory useful in the event you need to reconcile information in your database with the actual vault inventory.  Range Inventory Retrieval  You can limit the number of inventory items retrieved by filtering on the archive creation date or by setting a limit.  Filtering by Archive Creation Date  You can retrieve inventory items for archives created between StartDate and EndDate by specifying values for these parameters in the InitiateJob request. Archives created on or after the StartDate and before the EndDate will be returned. If you only provide the StartDate without the EndDate, you will retrieve the inventory for all archives created on or after the StartDate. If you only provide the EndDate without the StartDate, you will get back the inventory for all archives created before the EndDate.  Limiting Inventory Items per Retrieval  You can limit the number of inventory items returned by setting the Limit parameter in the InitiateJob request. The inventory job output will contain inventory items up to the specified Limit. If there are more inventory items available, the result is paginated. After a job is complete you can use the DescribeJob operation to get a marker that you use in a subsequent InitiateJob request. The marker will indicate the starting point to retrieve the next set of inventory items. You can page through your entire inventory by repeatedly making InitiateJob requests with the marker from the previous DescribeJob output, until you get a marker from DescribeJob that returns null, indicating that there are no more inventory items available. You can use the Limit parameter together with the date range parameters.  About Ranged Archive Retrieval  You can initiate an archive retrieval for the whole archive or a range of the archive. In the case of ranged archive retrieval, you specify a byte range to return or the whole archive. The range specified must be megabyte (MB) aligned, that is the range start value must be divisible by 1 MB and range end value plus 1 must be divisible by 1 MB or equal the end of the archive. If the ranged archive retrieval is not megabyte aligned, this operation returns a 400 response. Furthermore, to ensure you get checksum values for data you download using Get Job Output API, the range must be tree hash aligned. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and the underlying REST API, see Initiate a Job and Downloading a Vault Inventory   Expedited and Bulk Archive Retrievals  When retrieving an archive, you can specify one of the following options in the Tier field of the request body:     Standard The default type of retrieval, which allows access to any of your archives within several hours. Standard retrievals typically complete within 3–5 hours.    Bulk Amazon Glacier’s lowest-cost retrieval option, which enables you to retrieve large amounts of data inexpensively in a day. Bulk retrieval requests typically complete within 5–12 hours.     Expedited Amazon Glacier’s option for the fastest retrievals. Archives requested using the expedited retrievals typically become accessible within 1–5 minutes.    For more information about expedited and bulk retrievals, see Retrieving Amazon Glacier Archives.
   */
  initiateJob(callback?: (err: AWSError, data: Glacier.Types.InitiateJobOutput) => void): Request<Glacier.Types.InitiateJobOutput, AWSError>;
  /**
   * This operation initiates a multipart upload. Amazon Glacier creates a multipart upload resource and returns its ID in the response. The multipart upload ID is used in subsequent requests to upload parts of an archive (see UploadMultipartPart). When you initiate a multipart upload, you specify the part size in number of bytes. The part size must be a megabyte (1024 KB) multiplied by a power of 2-for example, 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB. Every part you upload to this resource (see UploadMultipartPart), except the last one, must have the same size. The last one can be the same size or smaller. For example, suppose you want to upload a 16.2 MB file. If you initiate the multipart upload with a part size of 4 MB, you will upload four parts of 4 MB each and one part of 0.2 MB.   You don't need to know the size of the archive when you start a multipart upload because Amazon Glacier does not require you to specify the overall archive size.  After you complete the multipart upload, Amazon Glacier removes the multipart upload resource referenced by the ID. Amazon Glacier also removes the multipart upload resource if you cancel the multipart upload or it may be removed if there is no activity for a period of 24 hours. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Uploading Large Archives in Parts (Multipart Upload) and Initiate Multipart Upload in the Amazon Glacier Developer Guide.
   */
  initiateMultipartUpload(params: Glacier.Types.InitiateMultipartUploadInput, callback?: (err: AWSError, data: Glacier.Types.InitiateMultipartUploadOutput) => void): Request<Glacier.Types.InitiateMultipartUploadOutput, AWSError>;
  /**
   * This operation initiates a multipart upload. Amazon Glacier creates a multipart upload resource and returns its ID in the response. The multipart upload ID is used in subsequent requests to upload parts of an archive (see UploadMultipartPart). When you initiate a multipart upload, you specify the part size in number of bytes. The part size must be a megabyte (1024 KB) multiplied by a power of 2-for example, 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB. Every part you upload to this resource (see UploadMultipartPart), except the last one, must have the same size. The last one can be the same size or smaller. For example, suppose you want to upload a 16.2 MB file. If you initiate the multipart upload with a part size of 4 MB, you will upload four parts of 4 MB each and one part of 0.2 MB.   You don't need to know the size of the archive when you start a multipart upload because Amazon Glacier does not require you to specify the overall archive size.  After you complete the multipart upload, Amazon Glacier removes the multipart upload resource referenced by the ID. Amazon Glacier also removes the multipart upload resource if you cancel the multipart upload or it may be removed if there is no activity for a period of 24 hours. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Uploading Large Archives in Parts (Multipart Upload) and Initiate Multipart Upload in the Amazon Glacier Developer Guide.
   */
  initiateMultipartUpload(callback?: (err: AWSError, data: Glacier.Types.InitiateMultipartUploadOutput) => void): Request<Glacier.Types.InitiateMultipartUploadOutput, AWSError>;
  /**
   * This operation initiates the vault locking process by doing the following:   Installing a vault lock policy on the specified vault.   Setting the lock state of vault lock to InProgress.   Returning a lock ID, which is used to complete the vault locking process.   You can set one vault lock policy for each vault and this policy can be up to 20 KB in size. For more information about vault lock policies, see Amazon Glacier Access Control with Vault Lock Policies.  You must complete the vault locking process within 24 hours after the vault lock enters the InProgress state. After the 24 hour window ends, the lock ID expires, the vault automatically exits the InProgress state, and the vault lock policy is removed from the vault. You call CompleteVaultLock to complete the vault locking process by setting the state of the vault lock to Locked.  After a vault lock is in the Locked state, you cannot initiate a new vault lock for the vault. You can abort the vault locking process by calling AbortVaultLock. You can get the state of the vault lock by calling GetVaultLock. For more information about the vault locking process, Amazon Glacier Vault Lock. If this operation is called when the vault lock is in the InProgress state, the operation returns an AccessDeniedException error. When the vault lock is in the InProgress state you must call AbortVaultLock before you can initiate a new vault lock policy. 
   */
  initiateVaultLock(params: Glacier.Types.InitiateVaultLockInput, callback?: (err: AWSError, data: Glacier.Types.InitiateVaultLockOutput) => void): Request<Glacier.Types.InitiateVaultLockOutput, AWSError>;
  /**
   * This operation initiates the vault locking process by doing the following:   Installing a vault lock policy on the specified vault.   Setting the lock state of vault lock to InProgress.   Returning a lock ID, which is used to complete the vault locking process.   You can set one vault lock policy for each vault and this policy can be up to 20 KB in size. For more information about vault lock policies, see Amazon Glacier Access Control with Vault Lock Policies.  You must complete the vault locking process within 24 hours after the vault lock enters the InProgress state. After the 24 hour window ends, the lock ID expires, the vault automatically exits the InProgress state, and the vault lock policy is removed from the vault. You call CompleteVaultLock to complete the vault locking process by setting the state of the vault lock to Locked.  After a vault lock is in the Locked state, you cannot initiate a new vault lock for the vault. You can abort the vault locking process by calling AbortVaultLock. You can get the state of the vault lock by calling GetVaultLock. For more information about the vault locking process, Amazon Glacier Vault Lock. If this operation is called when the vault lock is in the InProgress state, the operation returns an AccessDeniedException error. When the vault lock is in the InProgress state you must call AbortVaultLock before you can initiate a new vault lock policy. 
   */
  initiateVaultLock(callback?: (err: AWSError, data: Glacier.Types.InitiateVaultLockOutput) => void): Request<Glacier.Types.InitiateVaultLockOutput, AWSError>;
  /**
   * This operation lists jobs for a vault, including jobs that are in-progress and jobs that have recently finished.  Amazon Glacier retains recently completed jobs for a period before deleting them; however, it eventually removes completed jobs. The output of completed jobs can be retrieved. Retaining completed jobs for a period of time after they have completed enables you to get a job output in the event you miss the job completion notification or your first attempt to download it fails. For example, suppose you start an archive retrieval job to download an archive. After the job completes, you start to download the archive but encounter a network error. In this scenario, you can retry and download the archive while the job exists.  To retrieve an archive or retrieve a vault inventory from Amazon Glacier, you first initiate a job, and after the job completes, you download the data. For an archive retrieval, the output is the archive data. For an inventory retrieval, it is the inventory list. The List Job operation returns a list of these jobs sorted by job initiation time. The List Jobs operation supports pagination. You should always check the response Marker field. If there are no more jobs to list, the Marker field is set to null. If there are more jobs to list, the Marker field is set to a non-null value, which you can use to continue the pagination of the list. To return a list of jobs that begins at a specific job, set the marker request parameter to the Marker value for that job that you obtained from a previous List Jobs request. You can set a maximum limit for the number of jobs returned in the response by specifying the limit parameter in the request. The default limit is 1000. The number of jobs returned might be fewer than the limit, but the number of returned jobs never exceeds the limit. Additionally, you can filter the jobs list returned by specifying the optional statuscode parameter or completed parameter, or both. Using the statuscode parameter, you can specify to return only jobs that match either the InProgress, Succeeded, or Failed status. Using the completed parameter, you can specify to return only jobs that were completed (true) or jobs that were not completed (false). For the underlying REST API, see List Jobs. 
   */
  listJobs(params: Glacier.Types.ListJobsInput, callback?: (err: AWSError, data: Glacier.Types.ListJobsOutput) => void): Request<Glacier.Types.ListJobsOutput, AWSError>;
  /**
   * This operation lists jobs for a vault, including jobs that are in-progress and jobs that have recently finished.  Amazon Glacier retains recently completed jobs for a period before deleting them; however, it eventually removes completed jobs. The output of completed jobs can be retrieved. Retaining completed jobs for a period of time after they have completed enables you to get a job output in the event you miss the job completion notification or your first attempt to download it fails. For example, suppose you start an archive retrieval job to download an archive. After the job completes, you start to download the archive but encounter a network error. In this scenario, you can retry and download the archive while the job exists.  To retrieve an archive or retrieve a vault inventory from Amazon Glacier, you first initiate a job, and after the job completes, you download the data. For an archive retrieval, the output is the archive data. For an inventory retrieval, it is the inventory list. The List Job operation returns a list of these jobs sorted by job initiation time. The List Jobs operation supports pagination. You should always check the response Marker field. If there are no more jobs to list, the Marker field is set to null. If there are more jobs to list, the Marker field is set to a non-null value, which you can use to continue the pagination of the list. To return a list of jobs that begins at a specific job, set the marker request parameter to the Marker value for that job that you obtained from a previous List Jobs request. You can set a maximum limit for the number of jobs returned in the response by specifying the limit parameter in the request. The default limit is 1000. The number of jobs returned might be fewer than the limit, but the number of returned jobs never exceeds the limit. Additionally, you can filter the jobs list returned by specifying the optional statuscode parameter or completed parameter, or both. Using the statuscode parameter, you can specify to return only jobs that match either the InProgress, Succeeded, or Failed status. Using the completed parameter, you can specify to return only jobs that were completed (true) or jobs that were not completed (false). For the underlying REST API, see List Jobs. 
   */
  listJobs(callback?: (err: AWSError, data: Glacier.Types.ListJobsOutput) => void): Request<Glacier.Types.ListJobsOutput, AWSError>;
  /**
   * This operation lists in-progress multipart uploads for the specified vault. An in-progress multipart upload is a multipart upload that has been initiated by an InitiateMultipartUpload request, but has not yet been completed or aborted. The list returned in the List Multipart Upload response has no guaranteed order.  The List Multipart Uploads operation supports pagination. By default, this operation returns up to 1,000 multipart uploads in the response. You should always check the response for a marker at which to continue the list; if there are no more items the marker is null. To return a list of multipart uploads that begins at a specific upload, set the marker request parameter to the value you obtained from a previous List Multipart Upload request. You can also limit the number of uploads returned in the response by specifying the limit parameter in the request. Note the difference between this operation and listing parts (ListParts). The List Multipart Uploads operation lists all multipart uploads for a vault and does not require a multipart upload ID. The List Parts operation requires a multipart upload ID since parts are associated with a single upload. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and the underlying REST API, see Working with Archives in Amazon Glacier and List Multipart Uploads  in the Amazon Glacier Developer Guide.
   */
  listMultipartUploads(params: Glacier.Types.ListMultipartUploadsInput, callback?: (err: AWSError, data: Glacier.Types.ListMultipartUploadsOutput) => void): Request<Glacier.Types.ListMultipartUploadsOutput, AWSError>;
  /**
   * This operation lists in-progress multipart uploads for the specified vault. An in-progress multipart upload is a multipart upload that has been initiated by an InitiateMultipartUpload request, but has not yet been completed or aborted. The list returned in the List Multipart Upload response has no guaranteed order.  The List Multipart Uploads operation supports pagination. By default, this operation returns up to 1,000 multipart uploads in the response. You should always check the response for a marker at which to continue the list; if there are no more items the marker is null. To return a list of multipart uploads that begins at a specific upload, set the marker request parameter to the value you obtained from a previous List Multipart Upload request. You can also limit the number of uploads returned in the response by specifying the limit parameter in the request. Note the difference between this operation and listing parts (ListParts). The List Multipart Uploads operation lists all multipart uploads for a vault and does not require a multipart upload ID. The List Parts operation requires a multipart upload ID since parts are associated with a single upload. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and the underlying REST API, see Working with Archives in Amazon Glacier and List Multipart Uploads  in the Amazon Glacier Developer Guide.
   */
  listMultipartUploads(callback?: (err: AWSError, data: Glacier.Types.ListMultipartUploadsOutput) => void): Request<Glacier.Types.ListMultipartUploadsOutput, AWSError>;
  /**
   * This operation lists the parts of an archive that have been uploaded in a specific multipart upload. You can make this request at any time during an in-progress multipart upload before you complete the upload (see CompleteMultipartUpload. List Parts returns an error for completed uploads. The list returned in the List Parts response is sorted by part range.  The List Parts operation supports pagination. By default, this operation returns up to 1,000 uploaded parts in the response. You should always check the response for a marker at which to continue the list; if there are no more items the marker is null. To return a list of parts that begins at a specific part, set the marker request parameter to the value you obtained from a previous List Parts request. You can also limit the number of parts returned in the response by specifying the limit parameter in the request.  An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and the underlying REST API, see Working with Archives in Amazon Glacier and List Parts in the Amazon Glacier Developer Guide.
   */
  listParts(params: Glacier.Types.ListPartsInput, callback?: (err: AWSError, data: Glacier.Types.ListPartsOutput) => void): Request<Glacier.Types.ListPartsOutput, AWSError>;
  /**
   * This operation lists the parts of an archive that have been uploaded in a specific multipart upload. You can make this request at any time during an in-progress multipart upload before you complete the upload (see CompleteMultipartUpload. List Parts returns an error for completed uploads. The list returned in the List Parts response is sorted by part range.  The List Parts operation supports pagination. By default, this operation returns up to 1,000 uploaded parts in the response. You should always check the response for a marker at which to continue the list; if there are no more items the marker is null. To return a list of parts that begins at a specific part, set the marker request parameter to the value you obtained from a previous List Parts request. You can also limit the number of parts returned in the response by specifying the limit parameter in the request.  An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and the underlying REST API, see Working with Archives in Amazon Glacier and List Parts in the Amazon Glacier Developer Guide.
   */
  listParts(callback?: (err: AWSError, data: Glacier.Types.ListPartsOutput) => void): Request<Glacier.Types.ListPartsOutput, AWSError>;
  /**
   * This operation lists the provisioned capacity for the specified AWS account.
   */
  listProvisionedCapacity(params: Glacier.Types.ListProvisionedCapacityInput, callback?: (err: AWSError, data: Glacier.Types.ListProvisionedCapacityOutput) => void): Request<Glacier.Types.ListProvisionedCapacityOutput, AWSError>;
  /**
   * This operation lists the provisioned capacity for the specified AWS account.
   */
  listProvisionedCapacity(callback?: (err: AWSError, data: Glacier.Types.ListProvisionedCapacityOutput) => void): Request<Glacier.Types.ListProvisionedCapacityOutput, AWSError>;
  /**
   * This operation lists all the tags attached to a vault. The operation returns an empty map if there are no tags. For more information about tags, see Tagging Amazon Glacier Resources.
   */
  listTagsForVault(params: Glacier.Types.ListTagsForVaultInput, callback?: (err: AWSError, data: Glacier.Types.ListTagsForVaultOutput) => void): Request<Glacier.Types.ListTagsForVaultOutput, AWSError>;
  /**
   * This operation lists all the tags attached to a vault. The operation returns an empty map if there are no tags. For more information about tags, see Tagging Amazon Glacier Resources.
   */
  listTagsForVault(callback?: (err: AWSError, data: Glacier.Types.ListTagsForVaultOutput) => void): Request<Glacier.Types.ListTagsForVaultOutput, AWSError>;
  /**
   * This operation lists all vaults owned by the calling user's account. The list returned in the response is ASCII-sorted by vault name. By default, this operation returns up to 1,000 items. If there are more vaults to list, the response marker field contains the vault Amazon Resource Name (ARN) at which to continue the list with a new List Vaults request; otherwise, the marker field is null. To return a list of vaults that begins at a specific vault, set the marker request parameter to the vault ARN you obtained from a previous List Vaults request. You can also limit the number of vaults returned in the response by specifying the limit parameter in the request.  An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Retrieving Vault Metadata in Amazon Glacier and List Vaults  in the Amazon Glacier Developer Guide. 
   */
  listVaults(params: Glacier.Types.ListVaultsInput, callback?: (err: AWSError, data: Glacier.Types.ListVaultsOutput) => void): Request<Glacier.Types.ListVaultsOutput, AWSError>;
  /**
   * This operation lists all vaults owned by the calling user's account. The list returned in the response is ASCII-sorted by vault name. By default, this operation returns up to 1,000 items. If there are more vaults to list, the response marker field contains the vault Amazon Resource Name (ARN) at which to continue the list with a new List Vaults request; otherwise, the marker field is null. To return a list of vaults that begins at a specific vault, set the marker request parameter to the vault ARN you obtained from a previous List Vaults request. You can also limit the number of vaults returned in the response by specifying the limit parameter in the request.  An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Retrieving Vault Metadata in Amazon Glacier and List Vaults  in the Amazon Glacier Developer Guide. 
   */
  listVaults(callback?: (err: AWSError, data: Glacier.Types.ListVaultsOutput) => void): Request<Glacier.Types.ListVaultsOutput, AWSError>;
  /**
   * This operation purchases a provisioned capacity unit for an AWS account.
   */
  purchaseProvisionedCapacity(params: Glacier.Types.PurchaseProvisionedCapacityInput, callback?: (err: AWSError, data: Glacier.Types.PurchaseProvisionedCapacityOutput) => void): Request<Glacier.Types.PurchaseProvisionedCapacityOutput, AWSError>;
  /**
   * This operation purchases a provisioned capacity unit for an AWS account.
   */
  purchaseProvisionedCapacity(callback?: (err: AWSError, data: Glacier.Types.PurchaseProvisionedCapacityOutput) => void): Request<Glacier.Types.PurchaseProvisionedCapacityOutput, AWSError>;
  /**
   * This operation removes one or more tags from the set of tags attached to a vault. For more information about tags, see Tagging Amazon Glacier Resources. This operation is idempotent. The operation will be successful, even if there are no tags attached to the vault. 
   */
  removeTagsFromVault(params: Glacier.Types.RemoveTagsFromVaultInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation removes one or more tags from the set of tags attached to a vault. For more information about tags, see Tagging Amazon Glacier Resources. This operation is idempotent. The operation will be successful, even if there are no tags attached to the vault. 
   */
  removeTagsFromVault(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation sets and then enacts a data retrieval policy in the region specified in the PUT request. You can set one policy per region for an AWS account. The policy is enacted within a few minutes of a successful PUT operation. The set policy operation does not affect retrieval jobs that were in progress before the policy was enacted. For more information about data retrieval policies, see Amazon Glacier Data Retrieval Policies. 
   */
  setDataRetrievalPolicy(params: Glacier.Types.SetDataRetrievalPolicyInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation sets and then enacts a data retrieval policy in the region specified in the PUT request. You can set one policy per region for an AWS account. The policy is enacted within a few minutes of a successful PUT operation. The set policy operation does not affect retrieval jobs that were in progress before the policy was enacted. For more information about data retrieval policies, see Amazon Glacier Data Retrieval Policies. 
   */
  setDataRetrievalPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation configures an access policy for a vault and will overwrite an existing policy. To configure a vault access policy, send a PUT request to the access-policy subresource of the vault. An access policy is specific to a vault and is also called a vault subresource. You can set one access policy per vault and the policy can be up to 20 KB in size. For more information about vault access policies, see Amazon Glacier Access Control with Vault Access Policies. 
   */
  setVaultAccessPolicy(params: Glacier.Types.SetVaultAccessPolicyInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation configures an access policy for a vault and will overwrite an existing policy. To configure a vault access policy, send a PUT request to the access-policy subresource of the vault. An access policy is specific to a vault and is also called a vault subresource. You can set one access policy per vault and the policy can be up to 20 KB in size. For more information about vault access policies, see Amazon Glacier Access Control with Vault Access Policies. 
   */
  setVaultAccessPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation configures notifications that will be sent when specific events happen to a vault. By default, you don't get any notifications. To configure vault notifications, send a PUT request to the notification-configuration subresource of the vault. The request should include a JSON document that provides an Amazon SNS topic and specific events for which you want Amazon Glacier to send notifications to the topic. Amazon SNS topics must grant permission to the vault to be allowed to publish notifications to the topic. You can configure a vault to publish a notification for the following vault events:    ArchiveRetrievalCompleted This event occurs when a job that was initiated for an archive retrieval is completed (InitiateJob). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from DescribeJob.     InventoryRetrievalCompleted This event occurs when a job that was initiated for an inventory retrieval is completed (InitiateJob). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from DescribeJob.    An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Configuring Vault Notifications in Amazon Glacier and Set Vault Notification Configuration  in the Amazon Glacier Developer Guide. 
   */
  setVaultNotifications(params: Glacier.Types.SetVaultNotificationsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation configures notifications that will be sent when specific events happen to a vault. By default, you don't get any notifications. To configure vault notifications, send a PUT request to the notification-configuration subresource of the vault. The request should include a JSON document that provides an Amazon SNS topic and specific events for which you want Amazon Glacier to send notifications to the topic. Amazon SNS topics must grant permission to the vault to be allowed to publish notifications to the topic. You can configure a vault to publish a notification for the following vault events:    ArchiveRetrievalCompleted This event occurs when a job that was initiated for an archive retrieval is completed (InitiateJob). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from DescribeJob.     InventoryRetrievalCompleted This event occurs when a job that was initiated for an inventory retrieval is completed (InitiateJob). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from DescribeJob.    An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Configuring Vault Notifications in Amazon Glacier and Set Vault Notification Configuration  in the Amazon Glacier Developer Guide. 
   */
  setVaultNotifications(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation adds an archive to a vault. This is a synchronous operation, and for a successful upload, your data is durably persisted. Amazon Glacier returns the archive ID in the x-amz-archive-id header of the response.  You must use the archive ID to access your data in Amazon Glacier. After you upload an archive, you should save the archive ID returned so that you can retrieve or delete the archive later. Besides saving the archive ID, you can also index it and give it a friendly name to allow for better searching. You can also use the optional archive description field to specify how the archive is referred to in an external index of archives, such as you might create in Amazon DynamoDB. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see InitiateJob.  You must provide a SHA256 tree hash of the data you are uploading. For information about computing a SHA256 tree hash, see Computing Checksums.  You can optionally specify an archive description of up to 1,024 printable ASCII characters. You can get the archive description when you either retrieve the archive or get the vault inventory. For more information, see InitiateJob. Amazon Glacier does not interpret the description in any way. An archive description does not need to be unique. You cannot use the description to retrieve or sort the archive list.  Archives are immutable. After you upload an archive, you cannot edit the archive or its description. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Uploading an Archive in Amazon Glacier and Upload Archive in the Amazon Glacier Developer Guide. 
   */
  uploadArchive(params: Glacier.Types.UploadArchiveInput, callback?: (err: AWSError, data: Glacier.Types.ArchiveCreationOutput) => void): Request<Glacier.Types.ArchiveCreationOutput, AWSError>;
  /**
   * This operation adds an archive to a vault. This is a synchronous operation, and for a successful upload, your data is durably persisted. Amazon Glacier returns the archive ID in the x-amz-archive-id header of the response.  You must use the archive ID to access your data in Amazon Glacier. After you upload an archive, you should save the archive ID returned so that you can retrieve or delete the archive later. Besides saving the archive ID, you can also index it and give it a friendly name to allow for better searching. You can also use the optional archive description field to specify how the archive is referred to in an external index of archives, such as you might create in Amazon DynamoDB. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see InitiateJob.  You must provide a SHA256 tree hash of the data you are uploading. For information about computing a SHA256 tree hash, see Computing Checksums.  You can optionally specify an archive description of up to 1,024 printable ASCII characters. You can get the archive description when you either retrieve the archive or get the vault inventory. For more information, see InitiateJob. Amazon Glacier does not interpret the description in any way. An archive description does not need to be unique. You cannot use the description to retrieve or sort the archive list.  Archives are immutable. After you upload an archive, you cannot edit the archive or its description. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Uploading an Archive in Amazon Glacier and Upload Archive in the Amazon Glacier Developer Guide. 
   */
  uploadArchive(callback?: (err: AWSError, data: Glacier.Types.ArchiveCreationOutput) => void): Request<Glacier.Types.ArchiveCreationOutput, AWSError>;
  /**
   * This operation uploads a part of an archive. You can upload archive parts in any order. You can also upload them in parallel. You can upload up to 10,000 parts for a multipart upload. Amazon Glacier rejects your upload part request if any of the following conditions is true:    SHA256 tree hash does not matchTo ensure that part data is not corrupted in transmission, you compute a SHA256 tree hash of the part and include it in your request. Upon receiving the part data, Amazon Glacier also computes a SHA256 tree hash. If these hash values don't match, the operation fails. For information about computing a SHA256 tree hash, see Computing Checksums.    Part size does not matchThe size of each part except the last must match the size specified in the corresponding InitiateMultipartUpload request. The size of the last part must be the same size as, or smaller than, the specified size.  If you upload a part whose size is smaller than the part size you specified in your initiate multipart upload request and that part is not the last part, then the upload part request will succeed. However, the subsequent Complete Multipart Upload request will fail.     Range does not alignThe byte range value in the request does not align with the part size specified in the corresponding initiate request. For example, if you specify a part size of 4194304 bytes (4 MB), then 0 to 4194303 bytes (4 MB - 1) and 4194304 (4 MB) to 8388607 (8 MB - 1) are valid part ranges. However, if you set a range value of 2 MB to 6 MB, the range does not align with the part size and the upload will fail.    This operation is idempotent. If you upload the same part multiple times, the data included in the most recent request overwrites the previously uploaded data. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Uploading Large Archives in Parts (Multipart Upload) and Upload Part  in the Amazon Glacier Developer Guide.
   */
  uploadMultipartPart(params: Glacier.Types.UploadMultipartPartInput, callback?: (err: AWSError, data: Glacier.Types.UploadMultipartPartOutput) => void): Request<Glacier.Types.UploadMultipartPartOutput, AWSError>;
  /**
   * This operation uploads a part of an archive. You can upload archive parts in any order. You can also upload them in parallel. You can upload up to 10,000 parts for a multipart upload. Amazon Glacier rejects your upload part request if any of the following conditions is true:    SHA256 tree hash does not matchTo ensure that part data is not corrupted in transmission, you compute a SHA256 tree hash of the part and include it in your request. Upon receiving the part data, Amazon Glacier also computes a SHA256 tree hash. If these hash values don't match, the operation fails. For information about computing a SHA256 tree hash, see Computing Checksums.    Part size does not matchThe size of each part except the last must match the size specified in the corresponding InitiateMultipartUpload request. The size of the last part must be the same size as, or smaller than, the specified size.  If you upload a part whose size is smaller than the part size you specified in your initiate multipart upload request and that part is not the last part, then the upload part request will succeed. However, the subsequent Complete Multipart Upload request will fail.     Range does not alignThe byte range value in the request does not align with the part size specified in the corresponding initiate request. For example, if you specify a part size of 4194304 bytes (4 MB), then 0 to 4194303 bytes (4 MB - 1) and 4194304 (4 MB) to 8388607 (8 MB - 1) are valid part ranges. However, if you set a range value of 2 MB to 6 MB, the range does not align with the part size and the upload will fail.    This operation is idempotent. If you upload the same part multiple times, the data included in the most recent request overwrites the previously uploaded data. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM).  For conceptual information and underlying REST API, see Uploading Large Archives in Parts (Multipart Upload) and Upload Part  in the Amazon Glacier Developer Guide.
   */
  uploadMultipartPart(callback?: (err: AWSError, data: Glacier.Types.UploadMultipartPartOutput) => void): Request<Glacier.Types.UploadMultipartPartOutput, AWSError>;
  /**
   * Waits for the vaultExists state by periodically calling the underlying Glacier.describeVaultoperation every 3 seconds (at most 15 times).
   */
  waitFor(state: "vaultExists", params: Glacier.Types.DescribeVaultInput, callback?: (err: AWSError, data: Glacier.Types.DescribeVaultOutput) => void): Request<Glacier.Types.DescribeVaultOutput, AWSError>;
  /**
   * Waits for the vaultExists state by periodically calling the underlying Glacier.describeVaultoperation every 3 seconds (at most 15 times).
   */
  waitFor(state: "vaultExists", callback?: (err: AWSError, data: Glacier.Types.DescribeVaultOutput) => void): Request<Glacier.Types.DescribeVaultOutput, AWSError>;
  /**
   * Waits for the vaultNotExists state by periodically calling the underlying Glacier.describeVaultoperation every 3 seconds (at most 15 times).
   */
  waitFor(state: "vaultNotExists", params: Glacier.Types.DescribeVaultInput, callback?: (err: AWSError, data: Glacier.Types.DescribeVaultOutput) => void): Request<Glacier.Types.DescribeVaultOutput, AWSError>;
  /**
   * Waits for the vaultNotExists state by periodically calling the underlying Glacier.describeVaultoperation every 3 seconds (at most 15 times).
   */
  waitFor(state: "vaultNotExists", callback?: (err: AWSError, data: Glacier.Types.DescribeVaultOutput) => void): Request<Glacier.Types.DescribeVaultOutput, AWSError>;
}
declare namespace Glacier {
  export interface AbortMultipartUploadInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The upload ID of the multipart upload to delete.
     */
    uploadId: string;
  }
  export interface AbortVaultLockInput {
    /**
     * The AccountId value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
  }
  export type ActionCode = "ArchiveRetrieval"|"InventoryRetrieval"|string;
  export interface AddTagsToVaultInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The tags to add to the vault. Each tag is composed of a key and a value. The value can be an empty string.
     */
    Tags?: TagMap;
  }
  export interface ArchiveCreationOutput {
    /**
     * The relative URI path of the newly added archive resource.
     */
    location?: string;
    /**
     * The checksum of the archive computed by Amazon Glacier.
     */
    checksum?: string;
    /**
     * The ID of the archive. This value is also included as part of the location.
     */
    archiveId?: string;
  }
  export interface CompleteMultipartUploadInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The upload ID of the multipart upload.
     */
    uploadId: string;
    /**
     * The total size, in bytes, of the entire archive. This value should be the sum of all the sizes of the individual parts that you uploaded.
     */
    archiveSize?: string;
    /**
     * The SHA256 tree hash of the entire archive. It is the tree hash of SHA256 tree hash of the individual parts. If the value you specify in the request does not match the SHA256 tree hash of the final assembled archive as computed by Amazon Glacier, Amazon Glacier returns an error and the request fails.
     */
    checksum?: string;
  }
  export interface CompleteVaultLockInput {
    /**
     * The AccountId value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The lockId value is the lock ID obtained from a InitiateVaultLock request.
     */
    lockId: string;
  }
  export interface CreateVaultInput {
    /**
     * The AccountId value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
  }
  export interface CreateVaultOutput {
    /**
     * The URI of the vault that was created.
     */
    location?: string;
  }
  export interface DataRetrievalPolicy {
    /**
     * The policy rule. Although this is a list type, currently there must be only one rule, which contains a Strategy field and optionally a BytesPerHour field.
     */
    Rules?: DataRetrievalRulesList;
  }
  export interface DataRetrievalRule {
    /**
     * The type of data retrieval policy to set. Valid values: BytesPerHour|FreeTier|None
     */
    Strategy?: string;
    /**
     * The maximum number of bytes that can be retrieved in an hour. This field is required only if the value of the Strategy field is BytesPerHour. Your PUT operation will be rejected if the Strategy field is not set to BytesPerHour and you set this field.
     */
    BytesPerHour?: NullableLong;
  }
  export type DataRetrievalRulesList = DataRetrievalRule[];
  export type DateTime = string;
  export interface DeleteArchiveInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The ID of the archive to delete.
     */
    archiveId: string;
  }
  export interface DeleteVaultAccessPolicyInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
  }
  export interface DeleteVaultInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
  }
  export interface DeleteVaultNotificationsInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
  }
  export interface DescribeJobInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The ID of the job to describe.
     */
    jobId: string;
  }
  export interface DescribeVaultInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
  }
  export interface DescribeVaultOutput {
    /**
     * The Amazon Resource Name (ARN) of the vault.
     */
    VaultARN?: string;
    /**
     * The name of the vault.
     */
    VaultName?: string;
    /**
     * The Universal Coordinated Time (UTC) date when the vault was created. This value should be a string in the ISO 8601 date format, for example 2012-03-20T17:03:43.221Z.
     */
    CreationDate?: string;
    /**
     * The Universal Coordinated Time (UTC) date when Amazon Glacier completed the last vault inventory. This value should be a string in the ISO 8601 date format, for example 2012-03-20T17:03:43.221Z.
     */
    LastInventoryDate?: string;
    /**
     * The number of archives in the vault as of the last inventory date. This field will return null if an inventory has not yet run on the vault, for example if you just created the vault.
     */
    NumberOfArchives?: long;
    /**
     * Total size, in bytes, of the archives in the vault as of the last inventory date. This field will return null if an inventory has not yet run on the vault, for example if you just created the vault.
     */
    SizeInBytes?: long;
  }
  export interface GetDataRetrievalPolicyInput {
    /**
     * The AccountId value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID. 
     */
    accountId: string;
  }
  export interface GetDataRetrievalPolicyOutput {
    /**
     * Contains the returned data retrieval policy in JSON format.
     */
    Policy?: DataRetrievalPolicy;
  }
  export interface GetJobOutputInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The job ID whose data is downloaded.
     */
    jobId: string;
    /**
     * The range of bytes to retrieve from the output. For example, if you want to download the first 1,048,576 bytes, specify the range as bytes=0-1048575. By default, this operation downloads the entire output. If the job output is large, then you can use a range to retrieve a portion of the output. This allows you to download the entire output in smaller chunks of bytes. For example, suppose you have 1 GB of job output you want to download and you decide to download 128 MB chunks of data at a time, which is a total of eight Get Job Output requests. You use the following process to download the job output:   Download a 128 MB chunk of output by specifying the appropriate byte range. Verify that all 128 MB of data was received.   Along with the data, the response includes a SHA256 tree hash of the payload. You compute the checksum of the payload on the client and compare it with the checksum you received in the response to ensure you received all the expected data.   Repeat steps 1 and 2 for all the eight 128 MB chunks of output data, each time specifying the appropriate byte range.   After downloading all the parts of the job output, you have a list of eight checksum values. Compute the tree hash of these values to find the checksum of the entire output. Using the DescribeJob API, obtain job information of the job that provided you the output. The response includes the checksum of the entire archive stored in Amazon Glacier. You compare this value with the checksum you computed to ensure you have downloaded the entire archive content with no errors.   
     */
    range?: string;
  }
  export interface GetJobOutputOutput {
    /**
     * The job data, either archive data or inventory data.
     */
    body?: Stream;
    /**
     * The checksum of the data in the response. This header is returned only when retrieving the output for an archive retrieval job. Furthermore, this header appears only under the following conditions:   You get the entire range of the archive.   You request a range to return of the archive that starts and ends on a multiple of 1 MB. For example, if you have an 3.1 MB archive and you specify a range to return that starts at 1 MB and ends at 2 MB, then the x-amz-sha256-tree-hash is returned as a response header.   You request a range of the archive to return that starts on a multiple of 1 MB and goes to the end of the archive. For example, if you have a 3.1 MB archive and you specify a range that starts at 2 MB and ends at 3.1 MB (the end of the archive), then the x-amz-sha256-tree-hash is returned as a response header.  
     */
    checksum?: string;
    /**
     * The HTTP response code for a job output request. The value depends on whether a range was specified in the request.
     */
    status?: httpstatus;
    /**
     * The range of bytes returned by Amazon Glacier. If only partial output is downloaded, the response provides the range of bytes Amazon Glacier returned. For example, bytes 0-1048575/8388608 returns the first 1 MB from 8 MB.
     */
    contentRange?: string;
    /**
     * Indicates the range units accepted. For more information, see RFC2616. 
     */
    acceptRanges?: string;
    /**
     * The Content-Type depends on whether the job output is an archive or a vault inventory. For archive data, the Content-Type is application/octet-stream. For vault inventory, if you requested CSV format when you initiated the job, the Content-Type is text/csv. Otherwise, by default, vault inventory is returned as JSON, and the Content-Type is application/json.
     */
    contentType?: string;
    /**
     * The description of an archive.
     */
    archiveDescription?: string;
  }
  export interface GetVaultAccessPolicyInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
  }
  export interface GetVaultAccessPolicyOutput {
    /**
     * Contains the returned vault access policy as a JSON string.
     */
    policy?: VaultAccessPolicy;
  }
  export interface GetVaultLockInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
  }
  export interface GetVaultLockOutput {
    /**
     * The vault lock policy as a JSON string, which uses "\" as an escape character.
     */
    Policy?: string;
    /**
     * The state of the vault lock. InProgress or Locked.
     */
    State?: string;
    /**
     * The UTC date and time at which the lock ID expires. This value can be null if the vault lock is in a Locked state.
     */
    ExpirationDate?: string;
    /**
     * The UTC date and time at which the vault lock was put into the InProgress state.
     */
    CreationDate?: string;
  }
  export interface GetVaultNotificationsInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
  }
  export interface GetVaultNotificationsOutput {
    /**
     * Returns the notification configuration set on the vault.
     */
    vaultNotificationConfig?: VaultNotificationConfig;
  }
  export interface GlacierJobDescription {
    /**
     * An opaque string that identifies an Amazon Glacier job.
     */
    JobId?: string;
    /**
     * The job description you provided when you initiated the job.
     */
    JobDescription?: string;
    /**
     * The job type. It is either ArchiveRetrieval or InventoryRetrieval.
     */
    Action?: ActionCode;
    /**
     * For an ArchiveRetrieval job, this is the archive ID requested for download. Otherwise, this field is null.
     */
    ArchiveId?: string;
    /**
     * The Amazon Resource Name (ARN) of the vault from which the archive retrieval was requested.
     */
    VaultARN?: string;
    /**
     * The UTC date when the job was created. A string representation of ISO 8601 date format, for example, "2012-03-20T17:03:43.221Z".
     */
    CreationDate?: string;
    /**
     * The job status. When a job is completed, you get the job's output.
     */
    Completed?: boolean;
    /**
     * The status code can be InProgress, Succeeded, or Failed, and indicates the status of the job.
     */
    StatusCode?: StatusCode;
    /**
     * A friendly message that describes the job status.
     */
    StatusMessage?: string;
    /**
     * For an ArchiveRetrieval job, this is the size in bytes of the archive being requested for download. For the InventoryRetrieval job, the value is null.
     */
    ArchiveSizeInBytes?: Size;
    /**
     * For an InventoryRetrieval job, this is the size in bytes of the inventory requested for download. For the ArchiveRetrieval job, the value is null.
     */
    InventorySizeInBytes?: Size;
    /**
     * An Amazon Simple Notification Service (Amazon SNS) topic that receives notification.
     */
    SNSTopic?: string;
    /**
     * The UTC time that the archive retrieval request completed. While the job is in progress, the value will be null.
     */
    CompletionDate?: string;
    /**
     * For an ArchiveRetrieval job, it is the checksum of the archive. Otherwise, the value is null. The SHA256 tree hash value for the requested range of an archive. If the Initiate a Job request for an archive specified a tree-hash aligned range, then this field returns a value. For the specific case when the whole archive is retrieved, this value is the same as the ArchiveSHA256TreeHash value. This field is null in the following situations:   Archive retrieval jobs that specify a range that is not tree-hash aligned.     Archival jobs that specify a range that is equal to the whole archive and the job status is InProgress.     Inventory jobs.  
     */
    SHA256TreeHash?: string;
    /**
     * The SHA256 tree hash of the entire archive for an archive retrieval. For inventory retrieval jobs, this field is null.
     */
    ArchiveSHA256TreeHash?: string;
    /**
     * The retrieved byte range for archive retrieval jobs in the form "StartByteValue-EndByteValue" If no range was specified in the archive retrieval, then the whole archive is retrieved and StartByteValue equals 0 and EndByteValue equals the size of the archive minus 1. For inventory retrieval jobs this field is null. 
     */
    RetrievalByteRange?: string;
    /**
     * The retrieval option to use for the archive retrieval. Valid values are Expedited, Standard, or Bulk. Standard is the default.
     */
    Tier?: string;
    /**
     * Parameters used for range inventory retrieval.
     */
    InventoryRetrievalParameters?: InventoryRetrievalJobDescription;
  }
  export interface InitiateJobInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * Provides options for specifying job information.
     */
    jobParameters?: JobParameters;
  }
  export interface InitiateJobOutput {
    /**
     * The relative URI path of the job.
     */
    location?: string;
    /**
     * The ID of the job.
     */
    jobId?: string;
  }
  export interface InitiateMultipartUploadInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The archive description that you are uploading in parts. The part size must be a megabyte (1024 KB) multiplied by a power of 2, for example 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB (4096 MB).
     */
    archiveDescription?: string;
    /**
     * The size of each part except the last, in bytes. The last part can be smaller than this part size.
     */
    partSize?: string;
  }
  export interface InitiateMultipartUploadOutput {
    /**
     * The relative URI path of the multipart upload ID Amazon Glacier created.
     */
    location?: string;
    /**
     * The ID of the multipart upload. This value is also included as part of the location.
     */
    uploadId?: string;
  }
  export interface InitiateVaultLockInput {
    /**
     * The AccountId value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The vault lock policy as a JSON string, which uses "\" as an escape character.
     */
    policy?: VaultLockPolicy;
  }
  export interface InitiateVaultLockOutput {
    /**
     * The lock ID, which is used to complete the vault locking process.
     */
    lockId?: string;
  }
  export interface InventoryRetrievalJobDescription {
    /**
     * The output format for the vault inventory list, which is set by the InitiateJob request when initiating a job to retrieve a vault inventory. Valid values are CSV and JSON.
     */
    Format?: string;
    /**
     * The start of the date range in Universal Coordinated Time (UTC) for vault inventory retrieval that includes archives created on or after this date. This value should be a string in the ISO 8601 date format, for example 2013-03-20T17:03:43Z.
     */
    StartDate?: DateTime;
    /**
     * The end of the date range in UTC for vault inventory retrieval that includes archives created before this date. This value should be a string in the ISO 8601 date format, for example 2013-03-20T17:03:43Z.
     */
    EndDate?: DateTime;
    /**
     * The maximum number of inventory items returned per vault inventory retrieval request. This limit is set when initiating the job with the a InitiateJob request. 
     */
    Limit?: string;
    /**
     * An opaque string that represents where to continue pagination of the vault inventory retrieval results. You use the marker in a new InitiateJob request to obtain additional inventory items. If there are no more inventory items, this value is null. For more information, see  Range Inventory Retrieval.
     */
    Marker?: string;
  }
  export interface InventoryRetrievalJobInput {
    /**
     * The start of the date range in UTC for vault inventory retrieval that includes archives created on or after this date. This value should be a string in the ISO 8601 date format, for example 2013-03-20T17:03:43Z.
     */
    StartDate?: string;
    /**
     * The end of the date range in UTC for vault inventory retrieval that includes archives created before this date. This value should be a string in the ISO 8601 date format, for example 2013-03-20T17:03:43Z.
     */
    EndDate?: string;
    /**
     * Specifies the maximum number of inventory items returned per vault inventory retrieval request. Valid values are greater than or equal to 1.
     */
    Limit?: string;
    /**
     * An opaque string that represents where to continue pagination of the vault inventory retrieval results. You use the marker in a new InitiateJob request to obtain additional inventory items. If there are no more inventory items, this value is null.
     */
    Marker?: string;
  }
  export type JobList = GlacierJobDescription[];
  export interface JobParameters {
    /**
     * When initiating a job to retrieve a vault inventory, you can optionally add this parameter to your request to specify the output format. If you are initiating an inventory job and do not specify a Format field, JSON is the default format. Valid values are "CSV" and "JSON".
     */
    Format?: string;
    /**
     * The job type. You can initiate a job to retrieve an archive or get an inventory of a vault. Valid values are "archive-retrieval" and "inventory-retrieval".
     */
    Type?: string;
    /**
     * The ID of the archive that you want to retrieve. This field is required only if Type is set to archive-retrieval. An error occurs if you specify this request parameter for an inventory retrieval job request. 
     */
    ArchiveId?: string;
    /**
     * The optional description for the job. The description must be less than or equal to 1,024 bytes. The allowable characters are 7-bit ASCII without control codes-specifically, ASCII values 32-126 decimal or 0x20-0x7E hexadecimal.
     */
    Description?: string;
    /**
     * The Amazon SNS topic ARN to which Amazon Glacier sends a notification when the job is completed and the output is ready for you to download. The specified topic publishes the notification to its subscribers. The SNS topic must exist.
     */
    SNSTopic?: string;
    /**
     * The byte range to retrieve for an archive retrieval. in the form "StartByteValue-EndByteValue" If not specified, the whole archive is retrieved. If specified, the byte range must be megabyte (1024*1024) aligned which means that StartByteValue must be divisible by 1 MB and EndByteValue plus 1 must be divisible by 1 MB or be the end of the archive specified as the archive byte size value minus 1. If RetrievalByteRange is not megabyte aligned, this operation returns a 400 response.  An error occurs if you specify this field for an inventory retrieval job request.
     */
    RetrievalByteRange?: string;
    /**
     * The retrieval option to use for the archive retrieval. Valid values are Expedited, Standard, or Bulk. Standard is the default.
     */
    Tier?: string;
    /**
     * Input parameters used for range inventory retrieval.
     */
    InventoryRetrievalParameters?: InventoryRetrievalJobInput;
  }
  export interface ListJobsInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The maximum number of jobs to be returned. The default limit is 1000. The number of jobs returned might be fewer than the specified limit, but the number of returned jobs never exceeds the limit.
     */
    limit?: string;
    /**
     * An opaque string used for pagination. This value specifies the job at which the listing of jobs should begin. Get the marker value from a previous List Jobs response. You only need to include the marker if you are continuing the pagination of results started in a previous List Jobs request.
     */
    marker?: string;
    /**
     * The type of job status to return. You can specify the following values: InProgress, Succeeded, or Failed.
     */
    statuscode?: string;
    /**
     * The state of the jobs to return. You can specify true or false.
     */
    completed?: string;
  }
  export interface ListJobsOutput {
    /**
     * A list of job objects. Each job object contains metadata describing the job.
     */
    JobList?: JobList;
    /**
     *  An opaque string used for pagination that specifies the job at which the listing of jobs should begin. You get the marker value from a previous List Jobs response. You only need to include the marker if you are continuing the pagination of the results started in a previous List Jobs request. 
     */
    Marker?: string;
  }
  export interface ListMultipartUploadsInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * An opaque string used for pagination. This value specifies the upload at which the listing of uploads should begin. Get the marker value from a previous List Uploads response. You need only include the marker if you are continuing the pagination of results started in a previous List Uploads request.
     */
    marker?: string;
    /**
     * Specifies the maximum number of uploads returned in the response body. If this value is not specified, the List Uploads operation returns up to 1,000 uploads.
     */
    limit?: string;
  }
  export interface ListMultipartUploadsOutput {
    /**
     * A list of in-progress multipart uploads.
     */
    UploadsList?: UploadsList;
    /**
     * An opaque string that represents where to continue pagination of the results. You use the marker in a new List Multipart Uploads request to obtain more uploads in the list. If there are no more uploads, this value is null.
     */
    Marker?: string;
  }
  export interface ListPartsInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The upload ID of the multipart upload.
     */
    uploadId: string;
    /**
     * An opaque string used for pagination. This value specifies the part at which the listing of parts should begin. Get the marker value from the response of a previous List Parts response. You need only include the marker if you are continuing the pagination of results started in a previous List Parts request.
     */
    marker?: string;
    /**
     * The maximum number of parts to be returned. The default limit is 1000. The number of parts returned might be fewer than the specified limit, but the number of returned parts never exceeds the limit.
     */
    limit?: string;
  }
  export interface ListPartsOutput {
    /**
     * The ID of the upload to which the parts are associated.
     */
    MultipartUploadId?: string;
    /**
     * The Amazon Resource Name (ARN) of the vault to which the multipart upload was initiated.
     */
    VaultARN?: string;
    /**
     * The description of the archive that was specified in the Initiate Multipart Upload request.
     */
    ArchiveDescription?: string;
    /**
     * The part size in bytes. This is the same value that you specified in the Initiate Multipart Upload request.
     */
    PartSizeInBytes?: long;
    /**
     * The UTC time at which the multipart upload was initiated.
     */
    CreationDate?: string;
    /**
     * A list of the part sizes of the multipart upload. Each object in the array contains a RangeBytes and sha256-tree-hash name/value pair.
     */
    Parts?: PartList;
    /**
     * An opaque string that represents where to continue pagination of the results. You use the marker in a new List Parts request to obtain more jobs in the list. If there are no more parts, this value is null.
     */
    Marker?: string;
  }
  export interface ListProvisionedCapacityInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, don't include any hyphens ('-') in the ID. 
     */
    accountId: string;
  }
  export interface ListProvisionedCapacityOutput {
    /**
     * The response body contains the following JSON fields.
     */
    ProvisionedCapacityList?: ProvisionedCapacityList;
  }
  export interface ListTagsForVaultInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
  }
  export interface ListTagsForVaultOutput {
    /**
     * The tags attached to the vault. Each tag is composed of a key and a value.
     */
    Tags?: TagMap;
  }
  export interface ListVaultsInput {
    /**
     * The AccountId value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * A string used for pagination. The marker specifies the vault ARN after which the listing of vaults should begin.
     */
    marker?: string;
    /**
     * The maximum number of vaults to be returned. The default limit is 1000. The number of vaults returned might be fewer than the specified limit, but the number of returned vaults never exceeds the limit.
     */
    limit?: string;
  }
  export interface ListVaultsOutput {
    /**
     * List of vaults.
     */
    VaultList?: VaultList;
    /**
     * The vault ARN at which to continue pagination of the results. You use the marker in another List Vaults request to obtain more vaults in the list.
     */
    Marker?: string;
  }
  export type NotificationEventList = string[];
  export type NullableLong = number;
  export type PartList = PartListElement[];
  export interface PartListElement {
    /**
     * The byte range of a part, inclusive of the upper value of the range.
     */
    RangeInBytes?: string;
    /**
     * The SHA256 tree hash value that Amazon Glacier calculated for the part. This field is never null.
     */
    SHA256TreeHash?: string;
  }
  export interface ProvisionedCapacityDescription {
    /**
     * The ID that identifies the provisioned capacity unit.
     */
    CapacityId?: string;
    /**
     * The date that the provisioned capacity unit was purchased, in Universal Coordinated Time (UTC).
     */
    StartDate?: string;
    /**
     * The date that the provisioned capacity unit expires, in Universal Coordinated Time (UTC).
     */
    ExpirationDate?: string;
  }
  export type ProvisionedCapacityList = ProvisionedCapacityDescription[];
  export interface PurchaseProvisionedCapacityInput {
    /**
     * The AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, don't include any hyphens ('-') in the ID. 
     */
    accountId: string;
  }
  export interface PurchaseProvisionedCapacityOutput {
    /**
     * The ID that identifies the provisioned capacity unit.
     */
    capacityId?: string;
  }
  export interface RemoveTagsFromVaultInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * A list of tag keys. Each corresponding tag is removed from the vault.
     */
    TagKeys?: TagKeyList;
  }
  export interface SetDataRetrievalPolicyInput {
    /**
     * The AccountId value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The data retrieval policy in JSON format.
     */
    Policy?: DataRetrievalPolicy;
  }
  export interface SetVaultAccessPolicyInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The vault access policy as a JSON string.
     */
    policy?: VaultAccessPolicy;
  }
  export interface SetVaultNotificationsInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * Provides options for specifying notification configuration.
     */
    vaultNotificationConfig?: VaultNotificationConfig;
  }
  export type Size = number;
  export type StatusCode = "InProgress"|"Succeeded"|"Failed"|string;
  export type Stream = Buffer|Uint8Array|Blob|string|Readable;
  export type TagKey = string;
  export type TagKeyList = string[];
  export type TagMap = {[key: string]: TagValue};
  export type TagValue = string;
  export interface UploadArchiveInput {
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
     */
    accountId: string;
    /**
     * The optional description of the archive you are uploading.
     */
    archiveDescription?: string;
    /**
     * The SHA256 tree hash of the data being uploaded.
     */
    checksum?: string;
    /**
     * The data to upload.
     */
    body?: Stream;
  }
  export interface UploadListElement {
    /**
     * The ID of a multipart upload.
     */
    MultipartUploadId?: string;
    /**
     * The Amazon Resource Name (ARN) of the vault that contains the archive.
     */
    VaultARN?: string;
    /**
     * The description of the archive that was specified in the Initiate Multipart Upload request.
     */
    ArchiveDescription?: string;
    /**
     * The part size, in bytes, specified in the Initiate Multipart Upload request. This is the size of all the parts in the upload except the last part, which may be smaller than this size.
     */
    PartSizeInBytes?: long;
    /**
     * The UTC time at which the multipart upload was initiated.
     */
    CreationDate?: string;
  }
  export interface UploadMultipartPartInput {
    /**
     * The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The upload ID of the multipart upload.
     */
    uploadId: string;
    /**
     * The SHA256 tree hash of the data being uploaded.
     */
    checksum?: string;
    /**
     * Identifies the range of bytes in the assembled archive that will be uploaded in this part. Amazon Glacier uses this information to assemble the archive in the proper sequence. The format of this header follows RFC 2616. An example header is Content-Range:bytes 0-4194303/*.
     */
    range?: string;
    /**
     * The data to upload.
     */
    body?: Stream;
  }
  export interface UploadMultipartPartOutput {
    /**
     * The SHA256 tree hash that Amazon Glacier computed for the uploaded part.
     */
    checksum?: string;
  }
  export type UploadsList = UploadListElement[];
  export interface VaultAccessPolicy {
    /**
     * The vault access policy.
     */
    Policy?: string;
  }
  export type VaultList = DescribeVaultOutput[];
  export interface VaultLockPolicy {
    /**
     * The vault lock policy.
     */
    Policy?: string;
  }
  export interface VaultNotificationConfig {
    /**
     * The Amazon Simple Notification Service (Amazon SNS) topic Amazon Resource Name (ARN).
     */
    SNSTopic?: string;
    /**
     * A list of one or more events for which Amazon Glacier will send a notification to the specified Amazon SNS topic.
     */
    Events?: NotificationEventList;
  }
  export type httpstatus = number;
  export type long = number;
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
   * Contains interfaces for use with the Glacier client.
   */
  export import Types = Glacier;
}
export = Glacier;
