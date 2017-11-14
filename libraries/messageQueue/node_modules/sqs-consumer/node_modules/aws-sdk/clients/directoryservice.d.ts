import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class DirectoryService extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DirectoryService.Types.ClientConfiguration)
  config: Config & DirectoryService.Types.ClientConfiguration;
  /**
   * If the DNS server for your on-premises domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. AddIpRoutes adds this address block. You can also use AddIpRoutes to facilitate routing traffic that uses public IP ranges from your Microsoft AD on AWS to a peer VPC.  Before you call AddIpRoutes, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the AddIpRoutes operation, see AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference.
   */
  addIpRoutes(params: DirectoryService.Types.AddIpRoutesRequest, callback?: (err: AWSError, data: DirectoryService.Types.AddIpRoutesResult) => void): Request<DirectoryService.Types.AddIpRoutesResult, AWSError>;
  /**
   * If the DNS server for your on-premises domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. AddIpRoutes adds this address block. You can also use AddIpRoutes to facilitate routing traffic that uses public IP ranges from your Microsoft AD on AWS to a peer VPC.  Before you call AddIpRoutes, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the AddIpRoutes operation, see AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference.
   */
  addIpRoutes(callback?: (err: AWSError, data: DirectoryService.Types.AddIpRoutesResult) => void): Request<DirectoryService.Types.AddIpRoutesResult, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.
   */
  addTagsToResource(params: DirectoryService.Types.AddTagsToResourceRequest, callback?: (err: AWSError, data: DirectoryService.Types.AddTagsToResourceResult) => void): Request<DirectoryService.Types.AddTagsToResourceResult, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.
   */
  addTagsToResource(callback?: (err: AWSError, data: DirectoryService.Types.AddTagsToResourceResult) => void): Request<DirectoryService.Types.AddTagsToResourceResult, AWSError>;
  /**
   * Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; Initializing, CreatingSnapshot, and UpdatingSchema.
   */
  cancelSchemaExtension(params: DirectoryService.Types.CancelSchemaExtensionRequest, callback?: (err: AWSError, data: DirectoryService.Types.CancelSchemaExtensionResult) => void): Request<DirectoryService.Types.CancelSchemaExtensionResult, AWSError>;
  /**
   * Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; Initializing, CreatingSnapshot, and UpdatingSchema.
   */
  cancelSchemaExtension(callback?: (err: AWSError, data: DirectoryService.Types.CancelSchemaExtensionResult) => void): Request<DirectoryService.Types.CancelSchemaExtensionResult, AWSError>;
  /**
   * Creates an AD Connector to connect to an on-premises directory. Before you call ConnectDirectory, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the ConnectDirectory operation, see AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference.
   */
  connectDirectory(params: DirectoryService.Types.ConnectDirectoryRequest, callback?: (err: AWSError, data: DirectoryService.Types.ConnectDirectoryResult) => void): Request<DirectoryService.Types.ConnectDirectoryResult, AWSError>;
  /**
   * Creates an AD Connector to connect to an on-premises directory. Before you call ConnectDirectory, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the ConnectDirectory operation, see AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference.
   */
  connectDirectory(callback?: (err: AWSError, data: DirectoryService.Types.ConnectDirectoryResult) => void): Request<DirectoryService.Types.ConnectDirectoryResult, AWSError>;
  /**
   * Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as http://&lt;alias&gt;.awsapps.com.  After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary. 
   */
  createAlias(params: DirectoryService.Types.CreateAliasRequest, callback?: (err: AWSError, data: DirectoryService.Types.CreateAliasResult) => void): Request<DirectoryService.Types.CreateAliasResult, AWSError>;
  /**
   * Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as http://&lt;alias&gt;.awsapps.com.  After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary. 
   */
  createAlias(callback?: (err: AWSError, data: DirectoryService.Types.CreateAliasResult) => void): Request<DirectoryService.Types.CreateAliasResult, AWSError>;
  /**
   * Creates a computer account in the specified directory, and joins the computer to the directory.
   */
  createComputer(params: DirectoryService.Types.CreateComputerRequest, callback?: (err: AWSError, data: DirectoryService.Types.CreateComputerResult) => void): Request<DirectoryService.Types.CreateComputerResult, AWSError>;
  /**
   * Creates a computer account in the specified directory, and joins the computer to the directory.
   */
  createComputer(callback?: (err: AWSError, data: DirectoryService.Types.CreateComputerResult) => void): Request<DirectoryService.Types.CreateComputerResult, AWSError>;
  /**
   * Creates a conditional forwarder associated with your AWS directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.
   */
  createConditionalForwarder(params: DirectoryService.Types.CreateConditionalForwarderRequest, callback?: (err: AWSError, data: DirectoryService.Types.CreateConditionalForwarderResult) => void): Request<DirectoryService.Types.CreateConditionalForwarderResult, AWSError>;
  /**
   * Creates a conditional forwarder associated with your AWS directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.
   */
  createConditionalForwarder(callback?: (err: AWSError, data: DirectoryService.Types.CreateConditionalForwarderResult) => void): Request<DirectoryService.Types.CreateConditionalForwarderResult, AWSError>;
  /**
   * Creates a Simple AD directory. Before you call CreateDirectory, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the CreateDirectory operation, see AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference.
   */
  createDirectory(params: DirectoryService.Types.CreateDirectoryRequest, callback?: (err: AWSError, data: DirectoryService.Types.CreateDirectoryResult) => void): Request<DirectoryService.Types.CreateDirectoryResult, AWSError>;
  /**
   * Creates a Simple AD directory. Before you call CreateDirectory, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the CreateDirectory operation, see AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference.
   */
  createDirectory(callback?: (err: AWSError, data: DirectoryService.Types.CreateDirectoryResult) => void): Request<DirectoryService.Types.CreateDirectoryResult, AWSError>;
  /**
   * Creates a Microsoft AD in the AWS cloud. Before you call CreateMicrosoftAD, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the CreateMicrosoftAD operation, see AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference.
   */
  createMicrosoftAD(params: DirectoryService.Types.CreateMicrosoftADRequest, callback?: (err: AWSError, data: DirectoryService.Types.CreateMicrosoftADResult) => void): Request<DirectoryService.Types.CreateMicrosoftADResult, AWSError>;
  /**
   * Creates a Microsoft AD in the AWS cloud. Before you call CreateMicrosoftAD, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the CreateMicrosoftAD operation, see AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference.
   */
  createMicrosoftAD(callback?: (err: AWSError, data: DirectoryService.Types.CreateMicrosoftADResult) => void): Request<DirectoryService.Types.CreateMicrosoftADResult, AWSError>;
  /**
   * Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.  You cannot take snapshots of AD Connector directories. 
   */
  createSnapshot(params: DirectoryService.Types.CreateSnapshotRequest, callback?: (err: AWSError, data: DirectoryService.Types.CreateSnapshotResult) => void): Request<DirectoryService.Types.CreateSnapshotResult, AWSError>;
  /**
   * Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.  You cannot take snapshots of AD Connector directories. 
   */
  createSnapshot(callback?: (err: AWSError, data: DirectoryService.Types.CreateSnapshotResult) => void): Request<DirectoryService.Types.CreateSnapshotResult, AWSError>;
  /**
   * AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Microsoft AD in the AWS cloud, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials. This action initiates the creation of the AWS side of a trust relationship between a Microsoft AD in the AWS cloud and an external domain.
   */
  createTrust(params: DirectoryService.Types.CreateTrustRequest, callback?: (err: AWSError, data: DirectoryService.Types.CreateTrustResult) => void): Request<DirectoryService.Types.CreateTrustResult, AWSError>;
  /**
   * AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Microsoft AD in the AWS cloud, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials. This action initiates the creation of the AWS side of a trust relationship between a Microsoft AD in the AWS cloud and an external domain.
   */
  createTrust(callback?: (err: AWSError, data: DirectoryService.Types.CreateTrustResult) => void): Request<DirectoryService.Types.CreateTrustResult, AWSError>;
  /**
   * Deletes a conditional forwarder that has been set up for your AWS directory.
   */
  deleteConditionalForwarder(params: DirectoryService.Types.DeleteConditionalForwarderRequest, callback?: (err: AWSError, data: DirectoryService.Types.DeleteConditionalForwarderResult) => void): Request<DirectoryService.Types.DeleteConditionalForwarderResult, AWSError>;
  /**
   * Deletes a conditional forwarder that has been set up for your AWS directory.
   */
  deleteConditionalForwarder(callback?: (err: AWSError, data: DirectoryService.Types.DeleteConditionalForwarderResult) => void): Request<DirectoryService.Types.DeleteConditionalForwarderResult, AWSError>;
  /**
   * Deletes an AWS Directory Service directory. Before you call DeleteDirectory, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the DeleteDirectory operation, see AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference.
   */
  deleteDirectory(params: DirectoryService.Types.DeleteDirectoryRequest, callback?: (err: AWSError, data: DirectoryService.Types.DeleteDirectoryResult) => void): Request<DirectoryService.Types.DeleteDirectoryResult, AWSError>;
  /**
   * Deletes an AWS Directory Service directory. Before you call DeleteDirectory, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the DeleteDirectory operation, see AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference.
   */
  deleteDirectory(callback?: (err: AWSError, data: DirectoryService.Types.DeleteDirectoryResult) => void): Request<DirectoryService.Types.DeleteDirectoryResult, AWSError>;
  /**
   * Deletes a directory snapshot.
   */
  deleteSnapshot(params: DirectoryService.Types.DeleteSnapshotRequest, callback?: (err: AWSError, data: DirectoryService.Types.DeleteSnapshotResult) => void): Request<DirectoryService.Types.DeleteSnapshotResult, AWSError>;
  /**
   * Deletes a directory snapshot.
   */
  deleteSnapshot(callback?: (err: AWSError, data: DirectoryService.Types.DeleteSnapshotResult) => void): Request<DirectoryService.Types.DeleteSnapshotResult, AWSError>;
  /**
   * Deletes an existing trust relationship between your Microsoft AD in the AWS cloud and an external domain.
   */
  deleteTrust(params: DirectoryService.Types.DeleteTrustRequest, callback?: (err: AWSError, data: DirectoryService.Types.DeleteTrustResult) => void): Request<DirectoryService.Types.DeleteTrustResult, AWSError>;
  /**
   * Deletes an existing trust relationship between your Microsoft AD in the AWS cloud and an external domain.
   */
  deleteTrust(callback?: (err: AWSError, data: DirectoryService.Types.DeleteTrustResult) => void): Request<DirectoryService.Types.DeleteTrustResult, AWSError>;
  /**
   * Removes the specified directory as a publisher to the specified SNS topic.
   */
  deregisterEventTopic(params: DirectoryService.Types.DeregisterEventTopicRequest, callback?: (err: AWSError, data: DirectoryService.Types.DeregisterEventTopicResult) => void): Request<DirectoryService.Types.DeregisterEventTopicResult, AWSError>;
  /**
   * Removes the specified directory as a publisher to the specified SNS topic.
   */
  deregisterEventTopic(callback?: (err: AWSError, data: DirectoryService.Types.DeregisterEventTopicResult) => void): Request<DirectoryService.Types.DeregisterEventTopicResult, AWSError>;
  /**
   * Obtains information about the conditional forwarders for this account. If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.
   */
  describeConditionalForwarders(params: DirectoryService.Types.DescribeConditionalForwardersRequest, callback?: (err: AWSError, data: DirectoryService.Types.DescribeConditionalForwardersResult) => void): Request<DirectoryService.Types.DescribeConditionalForwardersResult, AWSError>;
  /**
   * Obtains information about the conditional forwarders for this account. If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.
   */
  describeConditionalForwarders(callback?: (err: AWSError, data: DirectoryService.Types.DescribeConditionalForwardersResult) => void): Request<DirectoryService.Types.DescribeConditionalForwardersResult, AWSError>;
  /**
   * Obtains information about the directories that belong to this account. You can retrieve information about specific directories by passing the directory identifiers in the DirectoryIds parameter. Otherwise, all directories that belong to the current account are returned. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the DescribeDirectoriesResult.NextToken member contains a token that you pass in the next call to DescribeDirectories to retrieve the next set of items. You can also specify a maximum number of return results with the Limit parameter.
   */
  describeDirectories(params: DirectoryService.Types.DescribeDirectoriesRequest, callback?: (err: AWSError, data: DirectoryService.Types.DescribeDirectoriesResult) => void): Request<DirectoryService.Types.DescribeDirectoriesResult, AWSError>;
  /**
   * Obtains information about the directories that belong to this account. You can retrieve information about specific directories by passing the directory identifiers in the DirectoryIds parameter. Otherwise, all directories that belong to the current account are returned. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the DescribeDirectoriesResult.NextToken member contains a token that you pass in the next call to DescribeDirectories to retrieve the next set of items. You can also specify a maximum number of return results with the Limit parameter.
   */
  describeDirectories(callback?: (err: AWSError, data: DirectoryService.Types.DescribeDirectoriesResult) => void): Request<DirectoryService.Types.DescribeDirectoriesResult, AWSError>;
  /**
   * Provides information about any domain controllers in your directory.
   */
  describeDomainControllers(params: DirectoryService.Types.DescribeDomainControllersRequest, callback?: (err: AWSError, data: DirectoryService.Types.DescribeDomainControllersResult) => void): Request<DirectoryService.Types.DescribeDomainControllersResult, AWSError>;
  /**
   * Provides information about any domain controllers in your directory.
   */
  describeDomainControllers(callback?: (err: AWSError, data: DirectoryService.Types.DescribeDomainControllersResult) => void): Request<DirectoryService.Types.DescribeDomainControllersResult, AWSError>;
  /**
   * Obtains information about which SNS topics receive status messages from the specified directory. If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.
   */
  describeEventTopics(params: DirectoryService.Types.DescribeEventTopicsRequest, callback?: (err: AWSError, data: DirectoryService.Types.DescribeEventTopicsResult) => void): Request<DirectoryService.Types.DescribeEventTopicsResult, AWSError>;
  /**
   * Obtains information about which SNS topics receive status messages from the specified directory. If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.
   */
  describeEventTopics(callback?: (err: AWSError, data: DirectoryService.Types.DescribeEventTopicsResult) => void): Request<DirectoryService.Types.DescribeEventTopicsResult, AWSError>;
  /**
   * Obtains information about the directory snapshots that belong to this account. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the DescribeSnapshots.NextToken member contains a token that you pass in the next call to DescribeSnapshots to retrieve the next set of items. You can also specify a maximum number of return results with the Limit parameter.
   */
  describeSnapshots(params: DirectoryService.Types.DescribeSnapshotsRequest, callback?: (err: AWSError, data: DirectoryService.Types.DescribeSnapshotsResult) => void): Request<DirectoryService.Types.DescribeSnapshotsResult, AWSError>;
  /**
   * Obtains information about the directory snapshots that belong to this account. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the DescribeSnapshots.NextToken member contains a token that you pass in the next call to DescribeSnapshots to retrieve the next set of items. You can also specify a maximum number of return results with the Limit parameter.
   */
  describeSnapshots(callback?: (err: AWSError, data: DirectoryService.Types.DescribeSnapshotsResult) => void): Request<DirectoryService.Types.DescribeSnapshotsResult, AWSError>;
  /**
   * Obtains information about the trust relationships for this account. If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.
   */
  describeTrusts(params: DirectoryService.Types.DescribeTrustsRequest, callback?: (err: AWSError, data: DirectoryService.Types.DescribeTrustsResult) => void): Request<DirectoryService.Types.DescribeTrustsResult, AWSError>;
  /**
   * Obtains information about the trust relationships for this account. If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.
   */
  describeTrusts(callback?: (err: AWSError, data: DirectoryService.Types.DescribeTrustsResult) => void): Request<DirectoryService.Types.DescribeTrustsResult, AWSError>;
  /**
   * Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory.
   */
  disableRadius(params: DirectoryService.Types.DisableRadiusRequest, callback?: (err: AWSError, data: DirectoryService.Types.DisableRadiusResult) => void): Request<DirectoryService.Types.DisableRadiusResult, AWSError>;
  /**
   * Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory.
   */
  disableRadius(callback?: (err: AWSError, data: DirectoryService.Types.DisableRadiusResult) => void): Request<DirectoryService.Types.DisableRadiusResult, AWSError>;
  /**
   * Disables single-sign on for a directory.
   */
  disableSso(params: DirectoryService.Types.DisableSsoRequest, callback?: (err: AWSError, data: DirectoryService.Types.DisableSsoResult) => void): Request<DirectoryService.Types.DisableSsoResult, AWSError>;
  /**
   * Disables single-sign on for a directory.
   */
  disableSso(callback?: (err: AWSError, data: DirectoryService.Types.DisableSsoResult) => void): Request<DirectoryService.Types.DisableSsoResult, AWSError>;
  /**
   * Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory.
   */
  enableRadius(params: DirectoryService.Types.EnableRadiusRequest, callback?: (err: AWSError, data: DirectoryService.Types.EnableRadiusResult) => void): Request<DirectoryService.Types.EnableRadiusResult, AWSError>;
  /**
   * Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory.
   */
  enableRadius(callback?: (err: AWSError, data: DirectoryService.Types.EnableRadiusResult) => void): Request<DirectoryService.Types.EnableRadiusResult, AWSError>;
  /**
   * Enables single sign-on for a directory.
   */
  enableSso(params: DirectoryService.Types.EnableSsoRequest, callback?: (err: AWSError, data: DirectoryService.Types.EnableSsoResult) => void): Request<DirectoryService.Types.EnableSsoResult, AWSError>;
  /**
   * Enables single sign-on for a directory.
   */
  enableSso(callback?: (err: AWSError, data: DirectoryService.Types.EnableSsoResult) => void): Request<DirectoryService.Types.EnableSsoResult, AWSError>;
  /**
   * Obtains directory limit information for the current region.
   */
  getDirectoryLimits(params: DirectoryService.Types.GetDirectoryLimitsRequest, callback?: (err: AWSError, data: DirectoryService.Types.GetDirectoryLimitsResult) => void): Request<DirectoryService.Types.GetDirectoryLimitsResult, AWSError>;
  /**
   * Obtains directory limit information for the current region.
   */
  getDirectoryLimits(callback?: (err: AWSError, data: DirectoryService.Types.GetDirectoryLimitsResult) => void): Request<DirectoryService.Types.GetDirectoryLimitsResult, AWSError>;
  /**
   * Obtains the manual snapshot limits for a directory.
   */
  getSnapshotLimits(params: DirectoryService.Types.GetSnapshotLimitsRequest, callback?: (err: AWSError, data: DirectoryService.Types.GetSnapshotLimitsResult) => void): Request<DirectoryService.Types.GetSnapshotLimitsResult, AWSError>;
  /**
   * Obtains the manual snapshot limits for a directory.
   */
  getSnapshotLimits(callback?: (err: AWSError, data: DirectoryService.Types.GetSnapshotLimitsResult) => void): Request<DirectoryService.Types.GetSnapshotLimitsResult, AWSError>;
  /**
   * Lists the address blocks that you have added to a directory.
   */
  listIpRoutes(params: DirectoryService.Types.ListIpRoutesRequest, callback?: (err: AWSError, data: DirectoryService.Types.ListIpRoutesResult) => void): Request<DirectoryService.Types.ListIpRoutesResult, AWSError>;
  /**
   * Lists the address blocks that you have added to a directory.
   */
  listIpRoutes(callback?: (err: AWSError, data: DirectoryService.Types.ListIpRoutesResult) => void): Request<DirectoryService.Types.ListIpRoutesResult, AWSError>;
  /**
   * Lists all schema extensions applied to a Microsoft AD Directory.
   */
  listSchemaExtensions(params: DirectoryService.Types.ListSchemaExtensionsRequest, callback?: (err: AWSError, data: DirectoryService.Types.ListSchemaExtensionsResult) => void): Request<DirectoryService.Types.ListSchemaExtensionsResult, AWSError>;
  /**
   * Lists all schema extensions applied to a Microsoft AD Directory.
   */
  listSchemaExtensions(callback?: (err: AWSError, data: DirectoryService.Types.ListSchemaExtensionsResult) => void): Request<DirectoryService.Types.ListSchemaExtensionsResult, AWSError>;
  /**
   * Lists all tags on a directory.
   */
  listTagsForResource(params: DirectoryService.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: DirectoryService.Types.ListTagsForResourceResult) => void): Request<DirectoryService.Types.ListTagsForResourceResult, AWSError>;
  /**
   * Lists all tags on a directory.
   */
  listTagsForResource(callback?: (err: AWSError, data: DirectoryService.Types.ListTagsForResourceResult) => void): Request<DirectoryService.Types.ListTagsForResourceResult, AWSError>;
  /**
   * Associates a directory with an SNS topic. This establishes the directory as a publisher to the specified SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.
   */
  registerEventTopic(params: DirectoryService.Types.RegisterEventTopicRequest, callback?: (err: AWSError, data: DirectoryService.Types.RegisterEventTopicResult) => void): Request<DirectoryService.Types.RegisterEventTopicResult, AWSError>;
  /**
   * Associates a directory with an SNS topic. This establishes the directory as a publisher to the specified SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.
   */
  registerEventTopic(callback?: (err: AWSError, data: DirectoryService.Types.RegisterEventTopicResult) => void): Request<DirectoryService.Types.RegisterEventTopicResult, AWSError>;
  /**
   * Removes IP address blocks from a directory.
   */
  removeIpRoutes(params: DirectoryService.Types.RemoveIpRoutesRequest, callback?: (err: AWSError, data: DirectoryService.Types.RemoveIpRoutesResult) => void): Request<DirectoryService.Types.RemoveIpRoutesResult, AWSError>;
  /**
   * Removes IP address blocks from a directory.
   */
  removeIpRoutes(callback?: (err: AWSError, data: DirectoryService.Types.RemoveIpRoutesResult) => void): Request<DirectoryService.Types.RemoveIpRoutesResult, AWSError>;
  /**
   * Removes tags from a directory.
   */
  removeTagsFromResource(params: DirectoryService.Types.RemoveTagsFromResourceRequest, callback?: (err: AWSError, data: DirectoryService.Types.RemoveTagsFromResourceResult) => void): Request<DirectoryService.Types.RemoveTagsFromResourceResult, AWSError>;
  /**
   * Removes tags from a directory.
   */
  removeTagsFromResource(callback?: (err: AWSError, data: DirectoryService.Types.RemoveTagsFromResourceResult) => void): Request<DirectoryService.Types.RemoveTagsFromResourceResult, AWSError>;
  /**
   * Restores a directory using an existing directory snapshot. When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten. This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the DescribeDirectories operation with the directory identifier. When the DirectoryDescription.Stage value changes to Active, the restore operation is complete.
   */
  restoreFromSnapshot(params: DirectoryService.Types.RestoreFromSnapshotRequest, callback?: (err: AWSError, data: DirectoryService.Types.RestoreFromSnapshotResult) => void): Request<DirectoryService.Types.RestoreFromSnapshotResult, AWSError>;
  /**
   * Restores a directory using an existing directory snapshot. When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten. This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the DescribeDirectories operation with the directory identifier. When the DirectoryDescription.Stage value changes to Active, the restore operation is complete.
   */
  restoreFromSnapshot(callback?: (err: AWSError, data: DirectoryService.Types.RestoreFromSnapshotResult) => void): Request<DirectoryService.Types.RestoreFromSnapshotResult, AWSError>;
  /**
   * Applies a schema extension to a Microsoft AD directory.
   */
  startSchemaExtension(params: DirectoryService.Types.StartSchemaExtensionRequest, callback?: (err: AWSError, data: DirectoryService.Types.StartSchemaExtensionResult) => void): Request<DirectoryService.Types.StartSchemaExtensionResult, AWSError>;
  /**
   * Applies a schema extension to a Microsoft AD directory.
   */
  startSchemaExtension(callback?: (err: AWSError, data: DirectoryService.Types.StartSchemaExtensionResult) => void): Request<DirectoryService.Types.StartSchemaExtensionResult, AWSError>;
  /**
   * Updates a conditional forwarder that has been set up for your AWS directory.
   */
  updateConditionalForwarder(params: DirectoryService.Types.UpdateConditionalForwarderRequest, callback?: (err: AWSError, data: DirectoryService.Types.UpdateConditionalForwarderResult) => void): Request<DirectoryService.Types.UpdateConditionalForwarderResult, AWSError>;
  /**
   * Updates a conditional forwarder that has been set up for your AWS directory.
   */
  updateConditionalForwarder(callback?: (err: AWSError, data: DirectoryService.Types.UpdateConditionalForwarderResult) => void): Request<DirectoryService.Types.UpdateConditionalForwarderResult, AWSError>;
  /**
   * Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
   */
  updateNumberOfDomainControllers(params: DirectoryService.Types.UpdateNumberOfDomainControllersRequest, callback?: (err: AWSError, data: DirectoryService.Types.UpdateNumberOfDomainControllersResult) => void): Request<DirectoryService.Types.UpdateNumberOfDomainControllersResult, AWSError>;
  /**
   * Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
   */
  updateNumberOfDomainControllers(callback?: (err: AWSError, data: DirectoryService.Types.UpdateNumberOfDomainControllersResult) => void): Request<DirectoryService.Types.UpdateNumberOfDomainControllersResult, AWSError>;
  /**
   * Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector directory.
   */
  updateRadius(params: DirectoryService.Types.UpdateRadiusRequest, callback?: (err: AWSError, data: DirectoryService.Types.UpdateRadiusResult) => void): Request<DirectoryService.Types.UpdateRadiusResult, AWSError>;
  /**
   * Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector directory.
   */
  updateRadius(callback?: (err: AWSError, data: DirectoryService.Types.UpdateRadiusResult) => void): Request<DirectoryService.Types.UpdateRadiusResult, AWSError>;
  /**
   * AWS Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships. This action verifies a trust relationship between your Microsoft AD in the AWS cloud and an external domain.
   */
  verifyTrust(params: DirectoryService.Types.VerifyTrustRequest, callback?: (err: AWSError, data: DirectoryService.Types.VerifyTrustResult) => void): Request<DirectoryService.Types.VerifyTrustResult, AWSError>;
  /**
   * AWS Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships. This action verifies a trust relationship between your Microsoft AD in the AWS cloud and an external domain.
   */
  verifyTrust(callback?: (err: AWSError, data: DirectoryService.Types.VerifyTrustResult) => void): Request<DirectoryService.Types.VerifyTrustResult, AWSError>;
}
declare namespace DirectoryService {
  export type AccessUrl = string;
  export interface AddIpRoutesRequest {
    /**
     * Identifier (ID) of the directory to which to add the address block.
     */
    DirectoryId: DirectoryId;
    /**
     * IP address blocks, using CIDR format, of the traffic to route. This is often the IP address block of the DNS server used for your on-premises domain.
     */
    IpRoutes: IpRoutes;
    /**
     * If set to true, updates the inbound and outbound rules of the security group that has the description: "AWS created security group for directory ID directory controllers." Following are the new rules:  Inbound:   Type: Custom UDP Rule, Protocol: UDP, Range: 88, Source: 0.0.0.0/0   Type: Custom UDP Rule, Protocol: UDP, Range: 123, Source: 0.0.0.0/0   Type: Custom UDP Rule, Protocol: UDP, Range: 138, Source: 0.0.0.0/0   Type: Custom UDP Rule, Protocol: UDP, Range: 389, Source: 0.0.0.0/0   Type: Custom UDP Rule, Protocol: UDP, Range: 464, Source: 0.0.0.0/0   Type: Custom UDP Rule, Protocol: UDP, Range: 445, Source: 0.0.0.0/0   Type: Custom TCP Rule, Protocol: TCP, Range: 88, Source: 0.0.0.0/0   Type: Custom TCP Rule, Protocol: TCP, Range: 135, Source: 0.0.0.0/0   Type: Custom TCP Rule, Protocol: TCP, Range: 445, Source: 0.0.0.0/0   Type: Custom TCP Rule, Protocol: TCP, Range: 464, Source: 0.0.0.0/0   Type: Custom TCP Rule, Protocol: TCP, Range: 636, Source: 0.0.0.0/0   Type: Custom TCP Rule, Protocol: TCP, Range: 1024-65535, Source: 0.0.0.0/0   Type: Custom TCP Rule, Protocol: TCP, Range: 3268-33269, Source: 0.0.0.0/0   Type: DNS (UDP), Protocol: UDP, Range: 53, Source: 0.0.0.0/0   Type: DNS (TCP), Protocol: TCP, Range: 53, Source: 0.0.0.0/0   Type: LDAP, Protocol: TCP, Range: 389, Source: 0.0.0.0/0   Type: All ICMP, Protocol: All, Range: N/A, Source: 0.0.0.0/0    Outbound:   Type: All traffic, Protocol: All, Range: All, Destination: 0.0.0.0/0   These security rules impact an internal network interface that is not exposed publicly.
     */
    UpdateSecurityGroupForDirectoryControllers?: UpdateSecurityGroupForDirectoryControllers;
  }
  export interface AddIpRoutesResult {
  }
  export interface AddTagsToResourceRequest {
    /**
     * Identifier (ID) for the directory to which to add the tag.
     */
    ResourceId: ResourceId;
    /**
     * The tags to be assigned to the directory.
     */
    Tags: Tags;
  }
  export interface AddTagsToResourceResult {
  }
  export type AddedDateTime = Date;
  export type AliasName = string;
  export interface Attribute {
    /**
     * The name of the attribute.
     */
    Name?: AttributeName;
    /**
     * The value of the attribute.
     */
    Value?: AttributeValue;
  }
  export type AttributeName = string;
  export type AttributeValue = string;
  export type Attributes = Attribute[];
  export type AvailabilityZone = string;
  export type AvailabilityZones = AvailabilityZone[];
  export interface CancelSchemaExtensionRequest {
    /**
     * The identifier of the directory whose schema extension will be canceled.
     */
    DirectoryId: DirectoryId;
    /**
     * The identifier of the schema extension that will be canceled.
     */
    SchemaExtensionId: SchemaExtensionId;
  }
  export interface CancelSchemaExtensionResult {
  }
  export type CidrIp = string;
  export type CidrIps = CidrIp[];
  export type CloudOnlyDirectoriesLimitReached = boolean;
  export interface Computer {
    /**
     * The identifier of the computer.
     */
    ComputerId?: SID;
    /**
     * The computer name.
     */
    ComputerName?: ComputerName;
    /**
     * An array of Attribute objects containing the LDAP attributes that belong to the computer account.
     */
    ComputerAttributes?: Attributes;
  }
  export type ComputerName = string;
  export type ComputerPassword = string;
  export interface ConditionalForwarder {
    /**
     * The fully qualified domain name (FQDN) of the remote domains pointed to by the conditional forwarder.
     */
    RemoteDomainName?: RemoteDomainName;
    /**
     * The IP addresses of the remote DNS server associated with RemoteDomainName. This is the IP address of the DNS server that your conditional forwarder points to.
     */
    DnsIpAddrs?: DnsIpAddrs;
    /**
     * The replication scope of the conditional forwarder. The only allowed value is Domain, which will replicate the conditional forwarder to all of the domain controllers for your AWS directory.
     */
    ReplicationScope?: ReplicationScope;
  }
  export type ConditionalForwarders = ConditionalForwarder[];
  export interface ConnectDirectoryRequest {
    /**
     * The fully-qualified name of the on-premises directory, such as corp.example.com.
     */
    Name: DirectoryName;
    /**
     * The NetBIOS name of the on-premises directory, such as CORP.
     */
    ShortName?: DirectoryShortName;
    /**
     * The password for the on-premises user account.
     */
    Password: ConnectPassword;
    /**
     * A textual description for the directory.
     */
    Description?: Description;
    /**
     * The size of the directory.
     */
    Size: DirectorySize;
    /**
     * A DirectoryConnectSettings object that contains additional information for the operation.
     */
    ConnectSettings: DirectoryConnectSettings;
  }
  export interface ConnectDirectoryResult {
    /**
     * The identifier of the new directory.
     */
    DirectoryId?: DirectoryId;
  }
  export type ConnectPassword = string;
  export type ConnectedDirectoriesLimitReached = boolean;
  export interface CreateAliasRequest {
    /**
     * The identifier of the directory for which to create the alias.
     */
    DirectoryId: DirectoryId;
    /**
     * The requested alias. The alias must be unique amongst all aliases in AWS. This operation throws an EntityAlreadyExistsException error if the alias already exists.
     */
    Alias: AliasName;
  }
  export interface CreateAliasResult {
    /**
     * The identifier of the directory.
     */
    DirectoryId?: DirectoryId;
    /**
     * The alias for the directory.
     */
    Alias?: AliasName;
  }
  export interface CreateComputerRequest {
    /**
     * The identifier of the directory in which to create the computer account.
     */
    DirectoryId: DirectoryId;
    /**
     * The name of the computer account.
     */
    ComputerName: ComputerName;
    /**
     * A one-time password that is used to join the computer to the directory. You should generate a random, strong password to use for this parameter.
     */
    Password: ComputerPassword;
    /**
     * The fully-qualified distinguished name of the organizational unit to place the computer account in.
     */
    OrganizationalUnitDistinguishedName?: OrganizationalUnitDN;
    /**
     * An array of Attribute objects that contain any LDAP attributes to apply to the computer account.
     */
    ComputerAttributes?: Attributes;
  }
  export interface CreateComputerResult {
    /**
     * A Computer object that represents the computer account.
     */
    Computer?: Computer;
  }
  export interface CreateConditionalForwarderRequest {
    /**
     * The directory ID of the AWS directory for which you are creating the conditional forwarder.
     */
    DirectoryId: DirectoryId;
    /**
     * The fully qualified domain name (FQDN) of the remote domain with which you will set up a trust relationship.
     */
    RemoteDomainName: RemoteDomainName;
    /**
     * The IP addresses of the remote DNS server associated with RemoteDomainName.
     */
    DnsIpAddrs: DnsIpAddrs;
  }
  export interface CreateConditionalForwarderResult {
  }
  export interface CreateDirectoryRequest {
    /**
     * The fully qualified name for the directory, such as corp.example.com.
     */
    Name: DirectoryName;
    /**
     * The short name of the directory, such as CORP.
     */
    ShortName?: DirectoryShortName;
    /**
     * The password for the directory administrator. The directory creation process creates a directory administrator account with the username Administrator and this password.
     */
    Password: Password;
    /**
     * A textual description for the directory.
     */
    Description?: Description;
    /**
     * The size of the directory.
     */
    Size: DirectorySize;
    /**
     * A DirectoryVpcSettings object that contains additional information for the operation.
     */
    VpcSettings?: DirectoryVpcSettings;
  }
  export interface CreateDirectoryResult {
    /**
     * The identifier of the directory that was created.
     */
    DirectoryId?: DirectoryId;
  }
  export interface CreateMicrosoftADRequest {
    /**
     * The fully qualified domain name for the directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable.
     */
    Name: DirectoryName;
    /**
     * The NetBIOS name for your domain. A short identifier for your domain, such as CORP. If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, CORP for the directory DNS corp.example.com. 
     */
    ShortName?: DirectoryShortName;
    /**
     * The password for the default administrative user named Admin.
     */
    Password: Password;
    /**
     * A textual description for the directory. This label will appear on the AWS console Directory Details page after the directory is created.
     */
    Description?: Description;
    /**
     * Contains VPC information for the CreateDirectory or CreateMicrosoftAD operation.
     */
    VpcSettings: DirectoryVpcSettings;
  }
  export interface CreateMicrosoftADResult {
    /**
     * The identifier of the directory that was created.
     */
    DirectoryId?: DirectoryId;
  }
  export type CreateSnapshotBeforeSchemaExtension = boolean;
  export interface CreateSnapshotRequest {
    /**
     * The identifier of the directory of which to take a snapshot.
     */
    DirectoryId: DirectoryId;
    /**
     * The descriptive name to apply to the snapshot.
     */
    Name?: SnapshotName;
  }
  export interface CreateSnapshotResult {
    /**
     * The identifier of the snapshot that was created.
     */
    SnapshotId?: SnapshotId;
  }
  export interface CreateTrustRequest {
    /**
     * The Directory ID of the Microsoft AD in the AWS cloud for which to establish the trust relationship.
     */
    DirectoryId: DirectoryId;
    /**
     * The Fully Qualified Domain Name (FQDN) of the external domain for which to create the trust relationship.
     */
    RemoteDomainName: RemoteDomainName;
    /**
     * The trust password. The must be the same password that was used when creating the trust relationship on the external domain.
     */
    TrustPassword: TrustPassword;
    /**
     * The direction of the trust relationship.
     */
    TrustDirection: TrustDirection;
    /**
     * The trust relationship type.
     */
    TrustType?: TrustType;
    /**
     * The IP addresses of the remote DNS server associated with RemoteDomainName.
     */
    ConditionalForwarderIpAddrs?: DnsIpAddrs;
  }
  export interface CreateTrustResult {
    /**
     * A unique identifier for the trust relationship that was created.
     */
    TrustId?: TrustId;
  }
  export type CreatedDateTime = Date;
  export type DeleteAssociatedConditionalForwarder = boolean;
  export interface DeleteConditionalForwarderRequest {
    /**
     * The directory ID for which you are deleting the conditional forwarder.
     */
    DirectoryId: DirectoryId;
    /**
     * The fully qualified domain name (FQDN) of the remote domain with which you are deleting the conditional forwarder.
     */
    RemoteDomainName: RemoteDomainName;
  }
  export interface DeleteConditionalForwarderResult {
  }
  export interface DeleteDirectoryRequest {
    /**
     * The identifier of the directory to delete.
     */
    DirectoryId: DirectoryId;
  }
  export interface DeleteDirectoryResult {
    /**
     * The directory identifier.
     */
    DirectoryId?: DirectoryId;
  }
  export interface DeleteSnapshotRequest {
    /**
     * The identifier of the directory snapshot to be deleted.
     */
    SnapshotId: SnapshotId;
  }
  export interface DeleteSnapshotResult {
    /**
     * The identifier of the directory snapshot that was deleted.
     */
    SnapshotId?: SnapshotId;
  }
  export interface DeleteTrustRequest {
    /**
     * The Trust ID of the trust relationship to be deleted.
     */
    TrustId: TrustId;
    /**
     * Delete a conditional forwarder as part of a DeleteTrustRequest.
     */
    DeleteAssociatedConditionalForwarder?: DeleteAssociatedConditionalForwarder;
  }
  export interface DeleteTrustResult {
    /**
     * The Trust ID of the trust relationship that was deleted.
     */
    TrustId?: TrustId;
  }
  export interface DeregisterEventTopicRequest {
    /**
     * The Directory ID to remove as a publisher. This directory will no longer send messages to the specified SNS topic.
     */
    DirectoryId: DirectoryId;
    /**
     * The name of the SNS topic from which to remove the directory as a publisher.
     */
    TopicName: TopicName;
  }
  export interface DeregisterEventTopicResult {
  }
  export interface DescribeConditionalForwardersRequest {
    /**
     * The directory ID for which to get the list of associated conditional forwarders.
     */
    DirectoryId: DirectoryId;
    /**
     * The fully qualified domain names (FQDN) of the remote domains for which to get the list of associated conditional forwarders. If this member is null, all conditional forwarders are returned.
     */
    RemoteDomainNames?: RemoteDomainNames;
  }
  export interface DescribeConditionalForwardersResult {
    /**
     * The list of conditional forwarders that have been created.
     */
    ConditionalForwarders?: ConditionalForwarders;
  }
  export interface DescribeDirectoriesRequest {
    /**
     * A list of identifiers of the directories for which to obtain the information. If this member is null, all directories that belong to the current account are returned. An empty list results in an InvalidParameterException being thrown.
     */
    DirectoryIds?: DirectoryIds;
    /**
     * The DescribeDirectoriesResult.NextToken value from a previous call to DescribeDirectories. Pass null if this is the first call.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation.
     */
    Limit?: Limit;
  }
  export interface DescribeDirectoriesResult {
    /**
     * The list of DirectoryDescription objects that were retrieved. It is possible that this list contains less than the number of items specified in the Limit member of the request. This occurs if there are less than the requested number of items left to retrieve, or if the limitations of the operation have been exceeded.
     */
    DirectoryDescriptions?: DirectoryDescriptions;
    /**
     * If not null, more results are available. Pass this value for the NextToken parameter in a subsequent call to DescribeDirectories to retrieve the next set of items.
     */
    NextToken?: NextToken;
  }
  export interface DescribeDomainControllersRequest {
    /**
     * Identifier of the directory for which to retrieve the domain controller information.
     */
    DirectoryId: DirectoryId;
    /**
     * A list of identifiers for the domain controllers whose information will be provided.
     */
    DomainControllerIds?: DomainControllerIds;
    /**
     * The DescribeDomainControllers.NextToken value from a previous call to DescribeDomainControllers. Pass null if this is the first call. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return.
     */
    Limit?: Limit;
  }
  export interface DescribeDomainControllersResult {
    /**
     * List of the DomainController objects that were retrieved.
     */
    DomainControllers?: DomainControllers;
    /**
     * If not null, more results are available. Pass this value for the NextToken parameter in a subsequent call to DescribeDomainControllers retrieve the next set of items.
     */
    NextToken?: NextToken;
  }
  export interface DescribeEventTopicsRequest {
    /**
     * The Directory ID for which to get the list of associated SNS topics. If this member is null, associations for all Directory IDs are returned.
     */
    DirectoryId?: DirectoryId;
    /**
     * A list of SNS topic names for which to obtain the information. If this member is null, all associations for the specified Directory ID are returned. An empty list results in an InvalidParameterException being thrown.
     */
    TopicNames?: TopicNames;
  }
  export interface DescribeEventTopicsResult {
    /**
     * A list of SNS topic names that receive status messages from the specified Directory ID.
     */
    EventTopics?: EventTopics;
  }
  export interface DescribeSnapshotsRequest {
    /**
     * The identifier of the directory for which to retrieve snapshot information.
     */
    DirectoryId?: DirectoryId;
    /**
     * A list of identifiers of the snapshots to obtain the information for. If this member is null or empty, all snapshots are returned using the Limit and NextToken members.
     */
    SnapshotIds?: SnapshotIds;
    /**
     * The DescribeSnapshotsResult.NextToken value from a previous call to DescribeSnapshots. Pass null if this is the first call.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of objects to return.
     */
    Limit?: Limit;
  }
  export interface DescribeSnapshotsResult {
    /**
     * The list of Snapshot objects that were retrieved. It is possible that this list contains less than the number of items specified in the Limit member of the request. This occurs if there are less than the requested number of items left to retrieve, or if the limitations of the operation have been exceeded.
     */
    Snapshots?: Snapshots;
    /**
     * If not null, more results are available. Pass this value in the NextToken member of a subsequent call to DescribeSnapshots.
     */
    NextToken?: NextToken;
  }
  export interface DescribeTrustsRequest {
    /**
     * The Directory ID of the AWS directory that is a part of the requested trust relationship.
     */
    DirectoryId?: DirectoryId;
    /**
     * A list of identifiers of the trust relationships for which to obtain the information. If this member is null, all trust relationships that belong to the current account are returned. An empty list results in an InvalidParameterException being thrown.
     */
    TrustIds?: TrustIds;
    /**
     * The DescribeTrustsResult.NextToken value from a previous call to DescribeTrusts. Pass null if this is the first call.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of objects to return.
     */
    Limit?: Limit;
  }
  export interface DescribeTrustsResult {
    /**
     * The list of Trust objects that were retrieved. It is possible that this list contains less than the number of items specified in the Limit member of the request. This occurs if there are less than the requested number of items left to retrieve, or if the limitations of the operation have been exceeded.
     */
    Trusts?: Trusts;
    /**
     * If not null, more results are available. Pass this value for the NextToken parameter in a subsequent call to DescribeTrusts to retrieve the next set of items.
     */
    NextToken?: NextToken;
  }
  export type Description = string;
  export type DesiredNumberOfDomainControllers = number;
  export interface DirectoryConnectSettings {
    /**
     * The identifier of the VPC in which the AD Connector is created.
     */
    VpcId: VpcId;
    /**
     * A list of subnet identifiers in the VPC in which the AD Connector is created.
     */
    SubnetIds: SubnetIds;
    /**
     * A list of one or more IP addresses of DNS servers or domain controllers in the on-premises directory.
     */
    CustomerDnsIps: DnsIpAddrs;
    /**
     * The username of an account in the on-premises directory that is used to connect to the directory. This account must have the following privileges:   Read users and groups   Create computer objects   Join computers to the domain  
     */
    CustomerUserName: UserName;
  }
  export interface DirectoryConnectSettingsDescription {
    /**
     * The identifier of the VPC that the AD Connector is in.
     */
    VpcId?: VpcId;
    /**
     * A list of subnet identifiers in the VPC that the AD connector is in.
     */
    SubnetIds?: SubnetIds;
    /**
     * The username of the service account in the on-premises directory.
     */
    CustomerUserName?: UserName;
    /**
     * The security group identifier for the AD Connector directory.
     */
    SecurityGroupId?: SecurityGroupId;
    /**
     * A list of the Availability Zones that the directory is in.
     */
    AvailabilityZones?: AvailabilityZones;
    /**
     * The IP addresses of the AD Connector servers.
     */
    ConnectIps?: IpAddrs;
  }
  export interface DirectoryDescription {
    /**
     * The directory identifier.
     */
    DirectoryId?: DirectoryId;
    /**
     * The fully-qualified name of the directory.
     */
    Name?: DirectoryName;
    /**
     * The short name of the directory.
     */
    ShortName?: DirectoryShortName;
    /**
     * The directory size.
     */
    Size?: DirectorySize;
    /**
     * The alias for the directory. If no alias has been created for the directory, the alias is the directory identifier, such as d-XXXXXXXXXX.
     */
    Alias?: AliasName;
    /**
     * The access URL for the directory, such as http://&lt;alias&gt;.awsapps.com. If no alias has been created for the directory, &lt;alias&gt; is the directory identifier, such as d-XXXXXXXXXX.
     */
    AccessUrl?: AccessUrl;
    /**
     * The textual description for the directory.
     */
    Description?: Description;
    /**
     * The IP addresses of the DNS servers for the directory. For a Simple AD or Microsoft AD directory, these are the IP addresses of the Simple AD or Microsoft AD directory servers. For an AD Connector directory, these are the IP addresses of the DNS servers or domain controllers in the on-premises directory to which the AD Connector is connected.
     */
    DnsIpAddrs?: DnsIpAddrs;
    /**
     * The current stage of the directory.
     */
    Stage?: DirectoryStage;
    /**
     * Specifies when the directory was created.
     */
    LaunchTime?: LaunchTime;
    /**
     * The date and time that the stage was last updated.
     */
    StageLastUpdatedDateTime?: LastUpdatedDateTime;
    /**
     * The directory size.
     */
    Type?: DirectoryType;
    /**
     * A DirectoryVpcSettingsDescription object that contains additional information about a directory. This member is only present if the directory is a Simple AD or Managed AD directory.
     */
    VpcSettings?: DirectoryVpcSettingsDescription;
    /**
     * A DirectoryConnectSettingsDescription object that contains additional information about an AD Connector directory. This member is only present if the directory is an AD Connector directory.
     */
    ConnectSettings?: DirectoryConnectSettingsDescription;
    /**
     * A RadiusSettings object that contains information about the RADIUS server configured for this directory.
     */
    RadiusSettings?: RadiusSettings;
    /**
     * The status of the RADIUS MFA server connection.
     */
    RadiusStatus?: RadiusStatus;
    /**
     * Additional information about the directory stage.
     */
    StageReason?: StageReason;
    /**
     * Indicates if single-sign on is enabled for the directory. For more information, see EnableSso and DisableSso.
     */
    SsoEnabled?: SsoEnabled;
    /**
     * The desired number of domain controllers in the directory if the directory is Microsoft AD.
     */
    DesiredNumberOfDomainControllers?: DesiredNumberOfDomainControllers;
  }
  export type DirectoryDescriptions = DirectoryDescription[];
  export type DirectoryId = string;
  export type DirectoryIds = DirectoryId[];
  export interface DirectoryLimits {
    /**
     * The maximum number of cloud directories allowed in the region.
     */
    CloudOnlyDirectoriesLimit?: Limit;
    /**
     * The current number of cloud directories in the region.
     */
    CloudOnlyDirectoriesCurrentCount?: Limit;
    /**
     * Indicates if the cloud directory limit has been reached.
     */
    CloudOnlyDirectoriesLimitReached?: CloudOnlyDirectoriesLimitReached;
    /**
     * The maximum number of Microsoft AD directories allowed in the region.
     */
    CloudOnlyMicrosoftADLimit?: Limit;
    /**
     * The current number of Microsoft AD directories in the region.
     */
    CloudOnlyMicrosoftADCurrentCount?: Limit;
    /**
     * Indicates if the Microsoft AD directory limit has been reached.
     */
    CloudOnlyMicrosoftADLimitReached?: CloudOnlyDirectoriesLimitReached;
    /**
     * The maximum number of connected directories allowed in the region.
     */
    ConnectedDirectoriesLimit?: Limit;
    /**
     * The current number of connected directories in the region.
     */
    ConnectedDirectoriesCurrentCount?: Limit;
    /**
     * Indicates if the connected directory limit has been reached.
     */
    ConnectedDirectoriesLimitReached?: ConnectedDirectoriesLimitReached;
  }
  export type DirectoryName = string;
  export type DirectoryShortName = string;
  export type DirectorySize = "Small"|"Large"|string;
  export type DirectoryStage = "Requested"|"Creating"|"Created"|"Active"|"Inoperable"|"Impaired"|"Restoring"|"RestoreFailed"|"Deleting"|"Deleted"|"Failed"|string;
  export type DirectoryType = "SimpleAD"|"ADConnector"|"MicrosoftAD"|string;
  export interface DirectoryVpcSettings {
    /**
     * The identifier of the VPC in which to create the directory.
     */
    VpcId: VpcId;
    /**
     * The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service creates a directory server and a DNS server in each of these subnets.
     */
    SubnetIds: SubnetIds;
  }
  export interface DirectoryVpcSettingsDescription {
    /**
     * The identifier of the VPC that the directory is in.
     */
    VpcId?: VpcId;
    /**
     * The identifiers of the subnets for the directory servers.
     */
    SubnetIds?: SubnetIds;
    /**
     * The security group identifier for the directory. If the directory was created before 8/1/2014, this is the identifier of the directory members security group that was created when the directory was created. If the directory was created after this date, this value is null.
     */
    SecurityGroupId?: SecurityGroupId;
    /**
     * The list of Availability Zones that the directory is in.
     */
    AvailabilityZones?: AvailabilityZones;
  }
  export interface DisableRadiusRequest {
    /**
     * The identifier of the directory for which to disable MFA.
     */
    DirectoryId: DirectoryId;
  }
  export interface DisableRadiusResult {
  }
  export interface DisableSsoRequest {
    /**
     * The identifier of the directory for which to disable single-sign on.
     */
    DirectoryId: DirectoryId;
    /**
     * The username of an alternate account to use to disable single-sign on. This is only used for AD Connector directories. This account must have privileges to remove a service principal name. If the AD Connector service account does not have privileges to remove a service principal name, you can specify an alternate account with the UserName and Password parameters. These credentials are only used to disable single sign-on and are not stored by the service. The AD Connector service account is not changed.
     */
    UserName?: UserName;
    /**
     * The password of an alternate account to use to disable single-sign on. This is only used for AD Connector directories. For more information, see the UserName parameter.
     */
    Password?: ConnectPassword;
  }
  export interface DisableSsoResult {
  }
  export type DnsIpAddrs = IpAddr[];
  export interface DomainController {
    /**
     * Identifier of the directory where the domain controller resides.
     */
    DirectoryId?: DirectoryId;
    /**
     * Identifies a specific domain controller in the directory.
     */
    DomainControllerId?: DomainControllerId;
    /**
     * The IP address of the domain controller.
     */
    DnsIpAddr?: IpAddr;
    /**
     * The identifier of the VPC that contains the domain controller.
     */
    VpcId?: VpcId;
    /**
     * Identifier of the subnet in the VPC that contains the domain controller.
     */
    SubnetId?: SubnetId;
    /**
     * The Availability Zone where the domain controller is located.
     */
    AvailabilityZone?: AvailabilityZone;
    /**
     * The status of the domain controller.
     */
    Status?: DomainControllerStatus;
    /**
     * A description of the domain controller state.
     */
    StatusReason?: DomainControllerStatusReason;
    /**
     * Specifies when the domain controller was created.
     */
    LaunchTime?: LaunchTime;
    /**
     * The date and time that the status was last updated.
     */
    StatusLastUpdatedDateTime?: LastUpdatedDateTime;
  }
  export type DomainControllerId = string;
  export type DomainControllerIds = DomainControllerId[];
  export type DomainControllerStatus = "Creating"|"Active"|"Impaired"|"Restoring"|"Deleting"|"Deleted"|"Failed"|string;
  export type DomainControllerStatusReason = string;
  export type DomainControllers = DomainController[];
  export interface EnableRadiusRequest {
    /**
     * The identifier of the directory for which to enable MFA.
     */
    DirectoryId: DirectoryId;
    /**
     * A RadiusSettings object that contains information about the RADIUS server.
     */
    RadiusSettings: RadiusSettings;
  }
  export interface EnableRadiusResult {
  }
  export interface EnableSsoRequest {
    /**
     * The identifier of the directory for which to enable single-sign on.
     */
    DirectoryId: DirectoryId;
    /**
     * The username of an alternate account to use to enable single-sign on. This is only used for AD Connector directories. This account must have privileges to add a service principal name. If the AD Connector service account does not have privileges to add a service principal name, you can specify an alternate account with the UserName and Password parameters. These credentials are only used to enable single sign-on and are not stored by the service. The AD Connector service account is not changed.
     */
    UserName?: UserName;
    /**
     * The password of an alternate account to use to enable single-sign on. This is only used for AD Connector directories. For more information, see the UserName parameter.
     */
    Password?: ConnectPassword;
  }
  export interface EnableSsoResult {
  }
  export type EndDateTime = Date;
  export interface EventTopic {
    /**
     * The Directory ID of an AWS Directory Service directory that will publish status messages to an SNS topic.
     */
    DirectoryId?: DirectoryId;
    /**
     * The name of an AWS SNS topic the receives status messages from the directory.
     */
    TopicName?: TopicName;
    /**
     * The SNS topic ARN (Amazon Resource Name).
     */
    TopicArn?: TopicArn;
    /**
     * The date and time of when you associated your directory with the SNS topic.
     */
    CreatedDateTime?: CreatedDateTime;
    /**
     * The topic registration status.
     */
    Status?: TopicStatus;
  }
  export type EventTopics = EventTopic[];
  export type ExceptionMessage = string;
  export interface GetDirectoryLimitsRequest {
  }
  export interface GetDirectoryLimitsResult {
    /**
     * A DirectoryLimits object that contains the directory limits for the current region.
     */
    DirectoryLimits?: DirectoryLimits;
  }
  export interface GetSnapshotLimitsRequest {
    /**
     * Contains the identifier of the directory to obtain the limits for.
     */
    DirectoryId: DirectoryId;
  }
  export interface GetSnapshotLimitsResult {
    /**
     * A SnapshotLimits object that contains the manual snapshot limits for the specified directory.
     */
    SnapshotLimits?: SnapshotLimits;
  }
  export type IpAddr = string;
  export type IpAddrs = IpAddr[];
  export interface IpRoute {
    /**
     * IP address block using CIDR format, for example 10.0.0.0/24. This is often the address block of the DNS server used for your on-premises domain. For a single IP address use a CIDR address block with /32. For example 10.0.0.0/32.
     */
    CidrIp?: CidrIp;
    /**
     * Description of the address block.
     */
    Description?: Description;
  }
  export interface IpRouteInfo {
    /**
     * Identifier (ID) of the directory associated with the IP addresses.
     */
    DirectoryId?: DirectoryId;
    /**
     * IP address block in the IpRoute.
     */
    CidrIp?: CidrIp;
    /**
     * The status of the IP address block.
     */
    IpRouteStatusMsg?: IpRouteStatusMsg;
    /**
     * The date and time the address block was added to the directory.
     */
    AddedDateTime?: AddedDateTime;
    /**
     * The reason for the IpRouteStatusMsg.
     */
    IpRouteStatusReason?: IpRouteStatusReason;
    /**
     * Description of the IpRouteInfo.
     */
    Description?: Description;
  }
  export type IpRouteStatusMsg = "Adding"|"Added"|"Removing"|"Removed"|"AddFailed"|"RemoveFailed"|string;
  export type IpRouteStatusReason = string;
  export type IpRoutes = IpRoute[];
  export type IpRoutesInfo = IpRouteInfo[];
  export type LastUpdatedDateTime = Date;
  export type LaunchTime = Date;
  export type LdifContent = string;
  export type Limit = number;
  export interface ListIpRoutesRequest {
    /**
     * Identifier (ID) of the directory for which you want to retrieve the IP addresses.
     */
    DirectoryId: DirectoryId;
    /**
     * The ListIpRoutes.NextToken value from a previous call to ListIpRoutes. Pass null if this is the first call.
     */
    NextToken?: NextToken;
    /**
     * Maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation.
     */
    Limit?: Limit;
  }
  export interface ListIpRoutesResult {
    /**
     * A list of IpRoutes.
     */
    IpRoutesInfo?: IpRoutesInfo;
    /**
     * If not null, more results are available. Pass this value for the NextToken parameter in a subsequent call to ListIpRoutes to retrieve the next set of items.
     */
    NextToken?: NextToken;
  }
  export interface ListSchemaExtensionsRequest {
    /**
     * The identifier of the directory from which to retrieve the schema extension information.
     */
    DirectoryId: DirectoryId;
    /**
     * The ListSchemaExtensions.NextToken value from a previous call to ListSchemaExtensions. Pass null if this is the first call.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return.
     */
    Limit?: Limit;
  }
  export interface ListSchemaExtensionsResult {
    /**
     * Information about the schema extensions applied to the directory.
     */
    SchemaExtensionsInfo?: SchemaExtensionsInfo;
    /**
     * If not null, more results are available. Pass this value for the NextToken parameter in a subsequent call to ListSchemaExtensions to retrieve the next set of items.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * Identifier (ID) of the directory for which you want to retrieve tags.
     */
    ResourceId: ResourceId;
    /**
     * Reserved for future use.
     */
    NextToken?: NextToken;
    /**
     * Reserved for future use.
     */
    Limit?: Limit;
  }
  export interface ListTagsForResourceResult {
    /**
     * List of tags returned by the ListTagsForResource operation.
     */
    Tags?: Tags;
    /**
     * Reserved for future use.
     */
    NextToken?: NextToken;
  }
  export type ManualSnapshotsLimitReached = boolean;
  export type NextToken = string;
  export type OrganizationalUnitDN = string;
  export type Password = string;
  export type PortNumber = number;
  export type RadiusAuthenticationProtocol = "PAP"|"CHAP"|"MS-CHAPv1"|"MS-CHAPv2"|string;
  export type RadiusDisplayLabel = string;
  export type RadiusRetries = number;
  export interface RadiusSettings {
    /**
     * An array of strings that contains the IP addresses of the RADIUS server endpoints, or the IP addresses of your RADIUS server load balancer.
     */
    RadiusServers?: Servers;
    /**
     * The port that your RADIUS server is using for communications. Your on-premises network must allow inbound traffic over this port from the AWS Directory Service servers.
     */
    RadiusPort?: PortNumber;
    /**
     * The amount of time, in seconds, to wait for the RADIUS server to respond.
     */
    RadiusTimeout?: RadiusTimeout;
    /**
     * The maximum number of times that communication with the RADIUS server is attempted.
     */
    RadiusRetries?: RadiusRetries;
    /**
     * Not currently used.
     */
    SharedSecret?: RadiusSharedSecret;
    /**
     * The protocol specified for your RADIUS endpoints.
     */
    AuthenticationProtocol?: RadiusAuthenticationProtocol;
    /**
     * Not currently used.
     */
    DisplayLabel?: RadiusDisplayLabel;
    /**
     * Not currently used.
     */
    UseSameUsername?: UseSameUsername;
  }
  export type RadiusSharedSecret = string;
  export type RadiusStatus = "Creating"|"Completed"|"Failed"|string;
  export type RadiusTimeout = number;
  export interface RegisterEventTopicRequest {
    /**
     * The Directory ID that will publish status messages to the SNS topic.
     */
    DirectoryId: DirectoryId;
    /**
     * The SNS topic name to which the directory will publish status messages. This SNS topic must be in the same region as the specified Directory ID.
     */
    TopicName: TopicName;
  }
  export interface RegisterEventTopicResult {
  }
  export type RemoteDomainName = string;
  export type RemoteDomainNames = RemoteDomainName[];
  export interface RemoveIpRoutesRequest {
    /**
     * Identifier (ID) of the directory from which you want to remove the IP addresses.
     */
    DirectoryId: DirectoryId;
    /**
     * IP address blocks that you want to remove.
     */
    CidrIps: CidrIps;
  }
  export interface RemoveIpRoutesResult {
  }
  export interface RemoveTagsFromResourceRequest {
    /**
     * Identifier (ID) of the directory from which to remove the tag.
     */
    ResourceId: ResourceId;
    /**
     * The tag key (name) of the tag to be removed.
     */
    TagKeys: TagKeys;
  }
  export interface RemoveTagsFromResourceResult {
  }
  export type ReplicationScope = "Domain"|string;
  export type RequestId = string;
  export type ResourceId = string;
  export interface RestoreFromSnapshotRequest {
    /**
     * The identifier of the snapshot to restore from.
     */
    SnapshotId: SnapshotId;
  }
  export interface RestoreFromSnapshotResult {
  }
  export type SID = string;
  export type SchemaExtensionId = string;
  export interface SchemaExtensionInfo {
    /**
     * The identifier of the directory to which the schema extension is applied.
     */
    DirectoryId?: DirectoryId;
    /**
     * The identifier of the schema extension.
     */
    SchemaExtensionId?: SchemaExtensionId;
    /**
     * A description of the schema extension.
     */
    Description?: Description;
    /**
     * The current status of the schema extension.
     */
    SchemaExtensionStatus?: SchemaExtensionStatus;
    /**
     * The reason for the SchemaExtensionStatus.
     */
    SchemaExtensionStatusReason?: SchemaExtensionStatusReason;
    /**
     * The date and time that the schema extension started being applied to the directory.
     */
    StartDateTime?: StartDateTime;
    /**
     * The date and time that the schema extension was completed.
     */
    EndDateTime?: EndDateTime;
  }
  export type SchemaExtensionStatus = "Initializing"|"CreatingSnapshot"|"UpdatingSchema"|"Replicating"|"CancelInProgress"|"RollbackInProgress"|"Cancelled"|"Failed"|"Completed"|string;
  export type SchemaExtensionStatusReason = string;
  export type SchemaExtensionsInfo = SchemaExtensionInfo[];
  export type SecurityGroupId = string;
  export type Server = string;
  export type Servers = Server[];
  export interface Snapshot {
    /**
     * The directory identifier.
     */
    DirectoryId?: DirectoryId;
    /**
     * The snapshot identifier.
     */
    SnapshotId?: SnapshotId;
    /**
     * The snapshot type.
     */
    Type?: SnapshotType;
    /**
     * The descriptive name of the snapshot.
     */
    Name?: SnapshotName;
    /**
     * The snapshot status.
     */
    Status?: SnapshotStatus;
    /**
     * The date and time that the snapshot was taken.
     */
    StartTime?: StartTime;
  }
  export type SnapshotId = string;
  export type SnapshotIds = SnapshotId[];
  export interface SnapshotLimits {
    /**
     * The maximum number of manual snapshots allowed.
     */
    ManualSnapshotsLimit?: Limit;
    /**
     * The current number of manual snapshots of the directory.
     */
    ManualSnapshotsCurrentCount?: Limit;
    /**
     * Indicates if the manual snapshot limit has been reached.
     */
    ManualSnapshotsLimitReached?: ManualSnapshotsLimitReached;
  }
  export type SnapshotName = string;
  export type SnapshotStatus = "Creating"|"Completed"|"Failed"|string;
  export type SnapshotType = "Auto"|"Manual"|string;
  export type Snapshots = Snapshot[];
  export type SsoEnabled = boolean;
  export type StageReason = string;
  export type StartDateTime = Date;
  export interface StartSchemaExtensionRequest {
    /**
     * The identifier of the directory for which the schema extension will be applied to.
     */
    DirectoryId: DirectoryId;
    /**
     * If true, creates a snapshot of the directory before applying the schema extension.
     */
    CreateSnapshotBeforeSchemaExtension: CreateSnapshotBeforeSchemaExtension;
    /**
     * The LDIF file represented as a string. To construct the LdifContent string, precede each line as it would be formatted in an ldif file with \n. See the example request below for more details. The file size can be no larger than 1MB.
     */
    LdifContent: LdifContent;
    /**
     * A description of the schema extension.
     */
    Description: Description;
  }
  export interface StartSchemaExtensionResult {
    /**
     * The identifier of the schema extension that will be applied.
     */
    SchemaExtensionId?: SchemaExtensionId;
  }
  export type StartTime = Date;
  export type StateLastUpdatedDateTime = Date;
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export interface Tag {
    /**
     * Required name of the tag. The string value can be Unicode characters and cannot be prefixed with "aws:". The string can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").
     */
    Key: TagKey;
    /**
     * The optional value of the tag. The string value can be Unicode characters. The string can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagValue = string;
  export type Tags = Tag[];
  export type TopicArn = string;
  export type TopicName = string;
  export type TopicNames = TopicName[];
  export type TopicStatus = "Registered"|"Topic not found"|"Failed"|"Deleted"|string;
  export interface Trust {
    /**
     * The Directory ID of the AWS directory involved in the trust relationship.
     */
    DirectoryId?: DirectoryId;
    /**
     * The unique ID of the trust relationship.
     */
    TrustId?: TrustId;
    /**
     * The Fully Qualified Domain Name (FQDN) of the external domain involved in the trust relationship.
     */
    RemoteDomainName?: RemoteDomainName;
    /**
     * The trust relationship type.
     */
    TrustType?: TrustType;
    /**
     * The trust relationship direction.
     */
    TrustDirection?: TrustDirection;
    /**
     * The trust relationship state.
     */
    TrustState?: TrustState;
    /**
     * The date and time that the trust relationship was created.
     */
    CreatedDateTime?: CreatedDateTime;
    /**
     * The date and time that the trust relationship was last updated.
     */
    LastUpdatedDateTime?: LastUpdatedDateTime;
    /**
     * The date and time that the TrustState was last updated.
     */
    StateLastUpdatedDateTime?: StateLastUpdatedDateTime;
    /**
     * The reason for the TrustState.
     */
    TrustStateReason?: TrustStateReason;
  }
  export type TrustDirection = "One-Way: Outgoing"|"One-Way: Incoming"|"Two-Way"|string;
  export type TrustId = string;
  export type TrustIds = TrustId[];
  export type TrustPassword = string;
  export type TrustState = "Creating"|"Created"|"Verifying"|"VerifyFailed"|"Verified"|"Deleting"|"Deleted"|"Failed"|string;
  export type TrustStateReason = string;
  export type TrustType = "Forest"|string;
  export type Trusts = Trust[];
  export interface UpdateConditionalForwarderRequest {
    /**
     * The directory ID of the AWS directory for which to update the conditional forwarder.
     */
    DirectoryId: DirectoryId;
    /**
     * The fully qualified domain name (FQDN) of the remote domain with which you will set up a trust relationship.
     */
    RemoteDomainName: RemoteDomainName;
    /**
     * The updated IP addresses of the remote DNS server associated with the conditional forwarder.
     */
    DnsIpAddrs: DnsIpAddrs;
  }
  export interface UpdateConditionalForwarderResult {
  }
  export interface UpdateNumberOfDomainControllersRequest {
    /**
     * Identifier of the directory to which the domain controllers will be added or removed.
     */
    DirectoryId: DirectoryId;
    /**
     * The number of domain controllers desired in the directory.
     */
    DesiredNumber: DesiredNumberOfDomainControllers;
  }
  export interface UpdateNumberOfDomainControllersResult {
  }
  export interface UpdateRadiusRequest {
    /**
     * The identifier of the directory for which to update the RADIUS server information.
     */
    DirectoryId: DirectoryId;
    /**
     * A RadiusSettings object that contains information about the RADIUS server.
     */
    RadiusSettings: RadiusSettings;
  }
  export interface UpdateRadiusResult {
  }
  export type UpdateSecurityGroupForDirectoryControllers = boolean;
  export type UseSameUsername = boolean;
  export type UserName = string;
  export interface VerifyTrustRequest {
    /**
     * The unique Trust ID of the trust relationship to verify.
     */
    TrustId: TrustId;
  }
  export interface VerifyTrustResult {
    /**
     * The unique Trust ID of the trust relationship that was verified.
     */
    TrustId?: TrustId;
  }
  export type VpcId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-04-16"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DirectoryService client.
   */
  export import Types = DirectoryService;
}
export = DirectoryService;
