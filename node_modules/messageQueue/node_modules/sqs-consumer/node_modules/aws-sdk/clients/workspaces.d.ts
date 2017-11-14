import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class WorkSpaces extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: WorkSpaces.Types.ClientConfiguration)
  config: Config & WorkSpaces.Types.ClientConfiguration;
  /**
   * Creates tags for a WorkSpace.
   */
  createTags(params: WorkSpaces.Types.CreateTagsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.CreateTagsResult) => void): Request<WorkSpaces.Types.CreateTagsResult, AWSError>;
  /**
   * Creates tags for a WorkSpace.
   */
  createTags(callback?: (err: AWSError, data: WorkSpaces.Types.CreateTagsResult) => void): Request<WorkSpaces.Types.CreateTagsResult, AWSError>;
  /**
   * Creates one or more WorkSpaces.  This operation is asynchronous and returns before the WorkSpaces are created. 
   */
  createWorkspaces(params: WorkSpaces.Types.CreateWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.CreateWorkspacesResult) => void): Request<WorkSpaces.Types.CreateWorkspacesResult, AWSError>;
  /**
   * Creates one or more WorkSpaces.  This operation is asynchronous and returns before the WorkSpaces are created. 
   */
  createWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.CreateWorkspacesResult) => void): Request<WorkSpaces.Types.CreateWorkspacesResult, AWSError>;
  /**
   * Deletes tags from a WorkSpace.
   */
  deleteTags(params: WorkSpaces.Types.DeleteTagsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DeleteTagsResult) => void): Request<WorkSpaces.Types.DeleteTagsResult, AWSError>;
  /**
   * Deletes tags from a WorkSpace.
   */
  deleteTags(callback?: (err: AWSError, data: WorkSpaces.Types.DeleteTagsResult) => void): Request<WorkSpaces.Types.DeleteTagsResult, AWSError>;
  /**
   * Describes tags for a WorkSpace.
   */
  describeTags(params: WorkSpaces.Types.DescribeTagsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeTagsResult) => void): Request<WorkSpaces.Types.DescribeTagsResult, AWSError>;
  /**
   * Describes tags for a WorkSpace.
   */
  describeTags(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeTagsResult) => void): Request<WorkSpaces.Types.DescribeTagsResult, AWSError>;
  /**
   * Obtains information about the WorkSpace bundles that are available to your account in the specified region. You can filter the results with either the BundleIds parameter, or the Owner parameter, but not both. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the NextToken response member contains a token that you pass in the next call to this operation to retrieve the next set of items.
   */
  describeWorkspaceBundles(params: WorkSpaces.Types.DescribeWorkspaceBundlesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceBundlesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceBundlesResult, AWSError>;
  /**
   * Obtains information about the WorkSpace bundles that are available to your account in the specified region. You can filter the results with either the BundleIds parameter, or the Owner parameter, but not both. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the NextToken response member contains a token that you pass in the next call to this operation to retrieve the next set of items.
   */
  describeWorkspaceBundles(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceBundlesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceBundlesResult, AWSError>;
  /**
   * Retrieves information about the AWS Directory Service directories in the region that are registered with Amazon WorkSpaces and are available to your account. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the NextToken response member contains a token that you pass in the next call to this operation to retrieve the next set of items.
   */
  describeWorkspaceDirectories(params: WorkSpaces.Types.DescribeWorkspaceDirectoriesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceDirectoriesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceDirectoriesResult, AWSError>;
  /**
   * Retrieves information about the AWS Directory Service directories in the region that are registered with Amazon WorkSpaces and are available to your account. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the NextToken response member contains a token that you pass in the next call to this operation to retrieve the next set of items.
   */
  describeWorkspaceDirectories(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceDirectoriesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceDirectoriesResult, AWSError>;
  /**
   * Obtains information about the specified WorkSpaces. Only one of the filter parameters, such as BundleId, DirectoryId, or WorkspaceIds, can be specified at a time. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the NextToken response member contains a token that you pass in the next call to this operation to retrieve the next set of items.
   */
  describeWorkspaces(params: WorkSpaces.Types.DescribeWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspacesResult) => void): Request<WorkSpaces.Types.DescribeWorkspacesResult, AWSError>;
  /**
   * Obtains information about the specified WorkSpaces. Only one of the filter parameters, such as BundleId, DirectoryId, or WorkspaceIds, can be specified at a time. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the NextToken response member contains a token that you pass in the next call to this operation to retrieve the next set of items.
   */
  describeWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspacesResult) => void): Request<WorkSpaces.Types.DescribeWorkspacesResult, AWSError>;
  /**
   * Describes the connection status of a specified WorkSpace.
   */
  describeWorkspacesConnectionStatus(params: WorkSpaces.Types.DescribeWorkspacesConnectionStatusRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspacesConnectionStatusResult) => void): Request<WorkSpaces.Types.DescribeWorkspacesConnectionStatusResult, AWSError>;
  /**
   * Describes the connection status of a specified WorkSpace.
   */
  describeWorkspacesConnectionStatus(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspacesConnectionStatusResult) => void): Request<WorkSpaces.Types.DescribeWorkspacesConnectionStatusResult, AWSError>;
  /**
   * Modifies the WorkSpace properties, including the running mode and AutoStop time.
   */
  modifyWorkspaceProperties(params: WorkSpaces.Types.ModifyWorkspacePropertiesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.ModifyWorkspacePropertiesResult) => void): Request<WorkSpaces.Types.ModifyWorkspacePropertiesResult, AWSError>;
  /**
   * Modifies the WorkSpace properties, including the running mode and AutoStop time.
   */
  modifyWorkspaceProperties(callback?: (err: AWSError, data: WorkSpaces.Types.ModifyWorkspacePropertiesResult) => void): Request<WorkSpaces.Types.ModifyWorkspacePropertiesResult, AWSError>;
  /**
   * Reboots the specified WorkSpaces. To be able to reboot a WorkSpace, the WorkSpace must have a State of AVAILABLE, IMPAIRED, or INOPERABLE.  This operation is asynchronous and returns before the WorkSpaces have rebooted. 
   */
  rebootWorkspaces(params: WorkSpaces.Types.RebootWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.RebootWorkspacesResult) => void): Request<WorkSpaces.Types.RebootWorkspacesResult, AWSError>;
  /**
   * Reboots the specified WorkSpaces. To be able to reboot a WorkSpace, the WorkSpace must have a State of AVAILABLE, IMPAIRED, or INOPERABLE.  This operation is asynchronous and returns before the WorkSpaces have rebooted. 
   */
  rebootWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.RebootWorkspacesResult) => void): Request<WorkSpaces.Types.RebootWorkspacesResult, AWSError>;
  /**
   * Rebuilds the specified WorkSpaces. Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. Rebuilding a WorkSpace causes the following to occur:   The system is restored to the image of the bundle that the WorkSpace is created from. Any applications that have been installed, or system settings that have been made since the WorkSpace was created will be lost.   The data drive (D drive) is re-created from the last automatic snapshot taken of the data drive. The current contents of the data drive are overwritten. Automatic snapshots of the data drive are taken every 12 hours, so the snapshot can be as much as 12 hours old.   To be able to rebuild a WorkSpace, the WorkSpace must have a State of AVAILABLE or ERROR.  This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt. 
   */
  rebuildWorkspaces(params: WorkSpaces.Types.RebuildWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.RebuildWorkspacesResult) => void): Request<WorkSpaces.Types.RebuildWorkspacesResult, AWSError>;
  /**
   * Rebuilds the specified WorkSpaces. Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. Rebuilding a WorkSpace causes the following to occur:   The system is restored to the image of the bundle that the WorkSpace is created from. Any applications that have been installed, or system settings that have been made since the WorkSpace was created will be lost.   The data drive (D drive) is re-created from the last automatic snapshot taken of the data drive. The current contents of the data drive are overwritten. Automatic snapshots of the data drive are taken every 12 hours, so the snapshot can be as much as 12 hours old.   To be able to rebuild a WorkSpace, the WorkSpace must have a State of AVAILABLE or ERROR.  This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt. 
   */
  rebuildWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.RebuildWorkspacesResult) => void): Request<WorkSpaces.Types.RebuildWorkspacesResult, AWSError>;
  /**
   * Starts the specified WorkSpaces. The WorkSpaces must have a running mode of AutoStop and a state of STOPPED.
   */
  startWorkspaces(params: WorkSpaces.Types.StartWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.StartWorkspacesResult) => void): Request<WorkSpaces.Types.StartWorkspacesResult, AWSError>;
  /**
   * Starts the specified WorkSpaces. The WorkSpaces must have a running mode of AutoStop and a state of STOPPED.
   */
  startWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.StartWorkspacesResult) => void): Request<WorkSpaces.Types.StartWorkspacesResult, AWSError>;
  /**
   *  Stops the specified WorkSpaces. The WorkSpaces must have a running mode of AutoStop and a state of AVAILABLE, IMPAIRED, UNHEALTHY, or ERROR.
   */
  stopWorkspaces(params: WorkSpaces.Types.StopWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.StopWorkspacesResult) => void): Request<WorkSpaces.Types.StopWorkspacesResult, AWSError>;
  /**
   *  Stops the specified WorkSpaces. The WorkSpaces must have a running mode of AutoStop and a state of AVAILABLE, IMPAIRED, UNHEALTHY, or ERROR.
   */
  stopWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.StopWorkspacesResult) => void): Request<WorkSpaces.Types.StopWorkspacesResult, AWSError>;
  /**
   * Terminates the specified WorkSpaces. Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is not maintained and will be destroyed. If you need to archive any user data, contact Amazon Web Services before terminating the WorkSpace. You can terminate a WorkSpace that is in any state except SUSPENDED.  This operation is asynchronous and returns before the WorkSpaces have been completely terminated. 
   */
  terminateWorkspaces(params: WorkSpaces.Types.TerminateWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.TerminateWorkspacesResult) => void): Request<WorkSpaces.Types.TerminateWorkspacesResult, AWSError>;
  /**
   * Terminates the specified WorkSpaces. Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is not maintained and will be destroyed. If you need to archive any user data, contact Amazon Web Services before terminating the WorkSpace. You can terminate a WorkSpace that is in any state except SUSPENDED.  This operation is asynchronous and returns before the WorkSpaces have been completely terminated. 
   */
  terminateWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.TerminateWorkspacesResult) => void): Request<WorkSpaces.Types.TerminateWorkspacesResult, AWSError>;
}
declare namespace WorkSpaces {
  export type ARN = string;
  export type Alias = string;
  export type BooleanObject = boolean;
  export type BundleId = string;
  export type BundleIdList = BundleId[];
  export type BundleList = WorkspaceBundle[];
  export type BundleOwner = string;
  export type Compute = "VALUE"|"STANDARD"|"PERFORMANCE"|string;
  export interface ComputeType {
    /**
     * The name of the compute type for the bundle.
     */
    Name?: Compute;
  }
  export type ComputerName = string;
  export type ConnectionState = "CONNECTED"|"DISCONNECTED"|"UNKNOWN"|string;
  export interface CreateTagsRequest {
    /**
     * The resource ID of the request.
     */
    ResourceId: NonEmptyString;
    /**
     * The tags of the request.
     */
    Tags: TagList;
  }
  export interface CreateTagsResult {
  }
  export interface CreateWorkspacesRequest {
    /**
     * An array of structures that specify the WorkSpaces to create.
     */
    Workspaces: WorkspaceRequestList;
  }
  export interface CreateWorkspacesResult {
    /**
     * An array of structures that represent the WorkSpaces that could not be created.
     */
    FailedRequests?: FailedCreateWorkspaceRequests;
    /**
     * An array of structures that represent the WorkSpaces that were created. Because this operation is asynchronous, the identifier in WorkspaceId is not immediately available. If you immediately call DescribeWorkspaces with this identifier, no information will be returned.
     */
    PendingRequests?: WorkspaceList;
  }
  export type DefaultOu = string;
  export interface DefaultWorkspaceCreationProperties {
    /**
     * Specifies if the directory is enabled for Amazon WorkDocs.
     */
    EnableWorkDocs?: BooleanObject;
    /**
     * A public IP address will be attached to all WorkSpaces that are created or rebuilt.
     */
    EnableInternetAccess?: BooleanObject;
    /**
     * The organizational unit (OU) in the directory that the WorkSpace machine accounts are placed in.
     */
    DefaultOu?: DefaultOu;
    /**
     * The identifier of any custom security groups that are applied to the WorkSpaces when they are created.
     */
    CustomSecurityGroupId?: SecurityGroupId;
    /**
     * The WorkSpace user is an administrator on the WorkSpace.
     */
    UserEnabledAsLocalAdministrator?: BooleanObject;
  }
  export interface DeleteTagsRequest {
    /**
     * The resource ID of the request.
     */
    ResourceId: NonEmptyString;
    /**
     * The tag keys of the request.
     */
    TagKeys: TagKeyList;
  }
  export interface DeleteTagsResult {
  }
  export interface DescribeTagsRequest {
    /**
     * The resource ID of the request.
     */
    ResourceId: NonEmptyString;
  }
  export interface DescribeTagsResult {
    /**
     * The list of tags.
     */
    TagList?: TagList;
  }
  export interface DescribeWorkspaceBundlesRequest {
    /**
     * An array of strings that contains the identifiers of the bundles to retrieve. This parameter cannot be combined with any other filter parameter.
     */
    BundleIds?: BundleIdList;
    /**
     * The owner of the bundles to retrieve. This parameter cannot be combined with any other filter parameter. This contains one of the following values:   null- Retrieves the bundles that belong to the account making the call.    AMAZON- Retrieves the bundles that are provided by AWS.  
     */
    Owner?: BundleOwner;
    /**
     * The NextToken value from a previous call to this operation. Pass null if this is the first call.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspaceBundlesResult {
    /**
     * An array of structures that contain information about the bundles.
     */
    Bundles?: BundleList;
    /**
     * If not null, more results are available. Pass this value for the NextToken parameter in a subsequent call to this operation to retrieve the next set of items. This token is valid for one day and must be used within that time frame.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspaceDirectoriesRequest {
    /**
     * An array of strings that contains the directory identifiers to retrieve information for. If this member is null, all directories are retrieved.
     */
    DirectoryIds?: DirectoryIdList;
    /**
     * The NextToken value from a previous call to this operation. Pass null if this is the first call.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspaceDirectoriesResult {
    /**
     * An array of structures that contain information about the directories.
     */
    Directories?: DirectoryList;
    /**
     * If not null, more results are available. Pass this value for the NextToken parameter in a subsequent call to this operation to retrieve the next set of items. This token is valid for one day and must be used within that time frame.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspacesConnectionStatusRequest {
    /**
     * An array of strings that contain the identifiers of the WorkSpaces.
     */
    WorkspaceIds?: WorkspaceIdList;
    /**
     * The next token of the request.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspacesConnectionStatusResult {
    /**
     * The connection status of the WorkSpace.
     */
    WorkspacesConnectionStatus?: WorkspaceConnectionStatusList;
    /**
     * The next token of the result.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspacesRequest {
    /**
     * An array of strings that contain the identifiers of the WorkSpaces for which to retrieve information. This parameter cannot be combined with any other filter parameter. Because the CreateWorkspaces operation is asynchronous, the identifier it returns is not immediately available. If you immediately call DescribeWorkspaces with this identifier, no information is returned.
     */
    WorkspaceIds?: WorkspaceIdList;
    /**
     * Specifies the directory identifier to which to limit the WorkSpaces. Optionally, you can specify a specific directory user with the UserName parameter. This parameter cannot be combined with any other filter parameter.
     */
    DirectoryId?: DirectoryId;
    /**
     * Used with the DirectoryId parameter to specify the directory user for whom to obtain the WorkSpace.
     */
    UserName?: UserName;
    /**
     * The identifier of a bundle to obtain the WorkSpaces for. All WorkSpaces that are created from this bundle will be retrieved. This parameter cannot be combined with any other filter parameter.
     */
    BundleId?: BundleId;
    /**
     * The maximum number of items to return.
     */
    Limit?: Limit;
    /**
     * The NextToken value from a previous call to this operation. Pass null if this is the first call.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspacesResult {
    /**
     * An array of structures that contain the information about the WorkSpaces. Because the CreateWorkspaces operation is asynchronous, some of this information may be incomplete for a newly-created WorkSpace.
     */
    Workspaces?: WorkspaceList;
    /**
     * If not null, more results are available. Pass this value for the NextToken parameter in a subsequent call to this operation to retrieve the next set of items. This token is valid for one day and must be used within that time frame.
     */
    NextToken?: PaginationToken;
  }
  export type Description = string;
  export type DirectoryId = string;
  export type DirectoryIdList = DirectoryId[];
  export type DirectoryList = WorkspaceDirectory[];
  export type DirectoryName = string;
  export type DnsIpAddresses = IpAddress[];
  export type ErrorType = string;
  export type ExceptionMessage = string;
  export interface FailedCreateWorkspaceRequest {
    /**
     * A FailedCreateWorkspaceRequest$WorkspaceRequest object that contains the information about the WorkSpace that could not be created.
     */
    WorkspaceRequest?: WorkspaceRequest;
    /**
     * The error code.
     */
    ErrorCode?: ErrorType;
    /**
     * The textual error message.
     */
    ErrorMessage?: Description;
  }
  export type FailedCreateWorkspaceRequests = FailedCreateWorkspaceRequest[];
  export type FailedRebootWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export type FailedRebuildWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export type FailedStartWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export type FailedStopWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export type FailedTerminateWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export interface FailedWorkspaceChangeRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
    /**
     * The error code.
     */
    ErrorCode?: ErrorType;
    /**
     * The textual error message.
     */
    ErrorMessage?: Description;
  }
  export type IpAddress = string;
  export type Limit = number;
  export interface ModifyWorkspacePropertiesRequest {
    /**
     * The ID of the WorkSpace.
     */
    WorkspaceId: WorkspaceId;
    /**
     * The WorkSpace properties of the request.
     */
    WorkspaceProperties: WorkspaceProperties;
  }
  export interface ModifyWorkspacePropertiesResult {
  }
  export type NonEmptyString = string;
  export type PaginationToken = string;
  export interface RebootRequest {
    /**
     * The identifier of the WorkSpace to reboot.
     */
    WorkspaceId: WorkspaceId;
  }
  export type RebootWorkspaceRequests = RebootRequest[];
  export interface RebootWorkspacesRequest {
    /**
     * An array of structures that specify the WorkSpaces to reboot.
     */
    RebootWorkspaceRequests: RebootWorkspaceRequests;
  }
  export interface RebootWorkspacesResult {
    /**
     * An array of structures representing any WorkSpaces that could not be rebooted.
     */
    FailedRequests?: FailedRebootWorkspaceRequests;
  }
  export interface RebuildRequest {
    /**
     * The identifier of the WorkSpace to rebuild.
     */
    WorkspaceId: WorkspaceId;
  }
  export type RebuildWorkspaceRequests = RebuildRequest[];
  export interface RebuildWorkspacesRequest {
    /**
     * An array of structures that specify the WorkSpaces to rebuild.
     */
    RebuildWorkspaceRequests: RebuildWorkspaceRequests;
  }
  export interface RebuildWorkspacesResult {
    /**
     * An array of structures representing any WorkSpaces that could not be rebuilt.
     */
    FailedRequests?: FailedRebuildWorkspaceRequests;
  }
  export type RegistrationCode = string;
  export type RunningMode = "AUTO_STOP"|"ALWAYS_ON"|string;
  export type RunningModeAutoStopTimeoutInMinutes = number;
  export type SecurityGroupId = string;
  export interface StartRequest {
    /**
     * The ID of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
  }
  export type StartWorkspaceRequests = StartRequest[];
  export interface StartWorkspacesRequest {
    /**
     * The requests.
     */
    StartWorkspaceRequests: StartWorkspaceRequests;
  }
  export interface StartWorkspacesResult {
    /**
     * The failed requests.
     */
    FailedRequests?: FailedStartWorkspaceRequests;
  }
  export interface StopRequest {
    /**
     * The ID of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
  }
  export type StopWorkspaceRequests = StopRequest[];
  export interface StopWorkspacesRequest {
    /**
     * The requests.
     */
    StopWorkspaceRequests: StopWorkspaceRequests;
  }
  export interface StopWorkspacesResult {
    /**
     * The failed requests.
     */
    FailedRequests?: FailedStopWorkspaceRequests;
  }
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
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = NonEmptyString[];
  export type TagList = Tag[];
  export type TagValue = string;
  export interface TerminateRequest {
    /**
     * The identifier of the WorkSpace to terminate.
     */
    WorkspaceId: WorkspaceId;
  }
  export type TerminateWorkspaceRequests = TerminateRequest[];
  export interface TerminateWorkspacesRequest {
    /**
     * An array of structures that specify the WorkSpaces to terminate.
     */
    TerminateWorkspaceRequests: TerminateWorkspaceRequests;
  }
  export interface TerminateWorkspacesResult {
    /**
     * An array of structures representing any WorkSpaces that could not be terminated.
     */
    FailedRequests?: FailedTerminateWorkspaceRequests;
  }
  export type Timestamp = Date;
  export type UserName = string;
  export interface UserStorage {
    /**
     * The amount of user storage for the bundle.
     */
    Capacity?: NonEmptyString;
  }
  export type VolumeEncryptionKey = string;
  export interface Workspace {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
    /**
     * The identifier of the AWS Directory Service directory that the WorkSpace belongs to.
     */
    DirectoryId?: DirectoryId;
    /**
     * The user that the WorkSpace is assigned to.
     */
    UserName?: UserName;
    /**
     * The IP address of the WorkSpace.
     */
    IpAddress?: IpAddress;
    /**
     * The operational state of the WorkSpace.
     */
    State?: WorkspaceState;
    /**
     * The identifier of the bundle that the WorkSpace was created from.
     */
    BundleId?: BundleId;
    /**
     * The identifier of the subnet that the WorkSpace is in.
     */
    SubnetId?: SubnetId;
    /**
     * If the WorkSpace could not be created, this contains a textual error message that describes the failure.
     */
    ErrorMessage?: Description;
    /**
     * If the WorkSpace could not be created, this contains the error code.
     */
    ErrorCode?: WorkspaceErrorCode;
    /**
     * The name of the WorkSpace as seen by the operating system.
     */
    ComputerName?: ComputerName;
    /**
     * The KMS key used to encrypt data stored on your WorkSpace.
     */
    VolumeEncryptionKey?: VolumeEncryptionKey;
    /**
     * Specifies whether the data stored on the user volume, or D: drive, is encrypted.
     */
    UserVolumeEncryptionEnabled?: BooleanObject;
    /**
     * Specifies whether the data stored on the root volume, or C: drive, is encrypted.
     */
    RootVolumeEncryptionEnabled?: BooleanObject;
    WorkspaceProperties?: WorkspaceProperties;
  }
  export interface WorkspaceBundle {
    /**
     * The bundle identifier.
     */
    BundleId?: BundleId;
    /**
     * The name of the bundle.
     */
    Name?: NonEmptyString;
    /**
     * The owner of the bundle. This contains the owner's account identifier, or AMAZON if the bundle is provided by AWS.
     */
    Owner?: BundleOwner;
    /**
     * The bundle description.
     */
    Description?: Description;
    /**
     * A UserStorage object that specifies the amount of user storage that the bundle contains.
     */
    UserStorage?: UserStorage;
    /**
     * A ComputeType object that specifies the compute type for the bundle.
     */
    ComputeType?: ComputeType;
  }
  export interface WorkspaceConnectionStatus {
    /**
     * The ID of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
    /**
     * The connection state of the WorkSpace. Returns UNKOWN if the WorkSpace is in a Stopped state.
     */
    ConnectionState?: ConnectionState;
    /**
     * The timestamp of the connection state check.
     */
    ConnectionStateCheckTimestamp?: Timestamp;
    /**
     * The timestamp of the last known user connection.
     */
    LastKnownUserConnectionTimestamp?: Timestamp;
  }
  export type WorkspaceConnectionStatusList = WorkspaceConnectionStatus[];
  export interface WorkspaceDirectory {
    /**
     * The directory identifier.
     */
    DirectoryId?: DirectoryId;
    /**
     * The directory alias.
     */
    Alias?: Alias;
    /**
     * The name of the directory.
     */
    DirectoryName?: DirectoryName;
    /**
     * The registration code for the directory. This is the code that users enter in their Amazon WorkSpaces client application to connect to the directory.
     */
    RegistrationCode?: RegistrationCode;
    /**
     * An array of strings that contains the identifiers of the subnets used with the directory.
     */
    SubnetIds?: SubnetIds;
    /**
     * An array of strings that contains the IP addresses of the DNS servers for the directory.
     */
    DnsIpAddresses?: DnsIpAddresses;
    /**
     * The user name for the service account.
     */
    CustomerUserName?: UserName;
    /**
     * The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make calls to other services, such as Amazon EC2, on your behalf.
     */
    IamRoleId?: ARN;
    /**
     * The directory type.
     */
    DirectoryType?: WorkspaceDirectoryType;
    /**
     * The identifier of the security group that is assigned to new WorkSpaces.
     */
    WorkspaceSecurityGroupId?: SecurityGroupId;
    /**
     * The state of the directory's registration with Amazon WorkSpaces
     */
    State?: WorkspaceDirectoryState;
    /**
     * A structure that specifies the default creation properties for all WorkSpaces in the directory.
     */
    WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;
  }
  export type WorkspaceDirectoryState = "REGISTERING"|"REGISTERED"|"DEREGISTERING"|"DEREGISTERED"|"ERROR"|string;
  export type WorkspaceDirectoryType = "SIMPLE_AD"|"AD_CONNECTOR"|string;
  export type WorkspaceErrorCode = string;
  export type WorkspaceId = string;
  export type WorkspaceIdList = WorkspaceId[];
  export type WorkspaceList = Workspace[];
  export interface WorkspaceProperties {
    /**
     * The running mode of the WorkSpace. AlwaysOn WorkSpaces are billed monthly. AutoStop WorkSpaces are billed by the hour and stopped when no longer being used in order to save on costs.
     */
    RunningMode?: RunningMode;
    /**
     * The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60 minute intervals.
     */
    RunningModeAutoStopTimeoutInMinutes?: RunningModeAutoStopTimeoutInMinutes;
  }
  export interface WorkspaceRequest {
    /**
     * The identifier of the AWS Directory Service directory to create the WorkSpace in. You can use the DescribeWorkspaceDirectories operation to obtain a list of the directories that are available.
     */
    DirectoryId: DirectoryId;
    /**
     * The username that the WorkSpace is assigned to. This username must exist in the AWS Directory Service directory specified by the DirectoryId member.
     */
    UserName: UserName;
    /**
     * The identifier of the bundle to create the WorkSpace from. You can use the DescribeWorkspaceBundles operation to obtain a list of the bundles that are available.
     */
    BundleId: BundleId;
    /**
     * The KMS key used to encrypt data stored on your WorkSpace.
     */
    VolumeEncryptionKey?: VolumeEncryptionKey;
    /**
     * Specifies whether the data stored on the user volume, or D: drive, is encrypted.
     */
    UserVolumeEncryptionEnabled?: BooleanObject;
    /**
     * Specifies whether the data stored on the root volume, or C: drive, is encrypted.
     */
    RootVolumeEncryptionEnabled?: BooleanObject;
    WorkspaceProperties?: WorkspaceProperties;
    /**
     * The tags of the WorkSpace request.
     */
    Tags?: TagList;
  }
  export type WorkspaceRequestList = WorkspaceRequest[];
  export type WorkspaceState = "PENDING"|"AVAILABLE"|"IMPAIRED"|"UNHEALTHY"|"REBOOTING"|"STARTING"|"REBUILDING"|"MAINTENANCE"|"TERMINATING"|"TERMINATED"|"SUSPENDED"|"STOPPING"|"STOPPED"|"ERROR"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-04-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the WorkSpaces client.
   */
  export import Types = WorkSpaces;
}
export = WorkSpaces;
