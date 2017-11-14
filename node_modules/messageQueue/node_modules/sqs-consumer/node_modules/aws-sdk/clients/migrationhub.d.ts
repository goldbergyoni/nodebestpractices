import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MigrationHub extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MigrationHub.Types.ClientConfiguration)
  config: Config & MigrationHub.Types.ClientConfiguration;
  /**
   * Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:   Migration tools can call the AssociateCreatedArtifact operation to indicate which AWS artifact is associated with a migration task.   The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b.   Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.  
   */
  associateCreatedArtifact(params: MigrationHub.Types.AssociateCreatedArtifactRequest, callback?: (err: AWSError, data: MigrationHub.Types.AssociateCreatedArtifactResult) => void): Request<MigrationHub.Types.AssociateCreatedArtifactResult, AWSError>;
  /**
   * Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:   Migration tools can call the AssociateCreatedArtifact operation to indicate which AWS artifact is associated with a migration task.   The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b.   Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.  
   */
  associateCreatedArtifact(callback?: (err: AWSError, data: MigrationHub.Types.AssociateCreatedArtifactResult) => void): Request<MigrationHub.Types.AssociateCreatedArtifactResult, AWSError>;
  /**
   * Associates a discovered resource ID from Application Discovery Service (ADS) with a migration task.
   */
  associateDiscoveredResource(params: MigrationHub.Types.AssociateDiscoveredResourceRequest, callback?: (err: AWSError, data: MigrationHub.Types.AssociateDiscoveredResourceResult) => void): Request<MigrationHub.Types.AssociateDiscoveredResourceResult, AWSError>;
  /**
   * Associates a discovered resource ID from Application Discovery Service (ADS) with a migration task.
   */
  associateDiscoveredResource(callback?: (err: AWSError, data: MigrationHub.Types.AssociateDiscoveredResourceResult) => void): Request<MigrationHub.Types.AssociateDiscoveredResourceResult, AWSError>;
  /**
   * Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.
   */
  createProgressUpdateStream(params: MigrationHub.Types.CreateProgressUpdateStreamRequest, callback?: (err: AWSError, data: MigrationHub.Types.CreateProgressUpdateStreamResult) => void): Request<MigrationHub.Types.CreateProgressUpdateStreamResult, AWSError>;
  /**
   * Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.
   */
  createProgressUpdateStream(callback?: (err: AWSError, data: MigrationHub.Types.CreateProgressUpdateStreamResult) => void): Request<MigrationHub.Types.CreateProgressUpdateStreamResult, AWSError>;
  /**
   * Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:   The only parameter needed for DeleteProgressUpdateStream is the stream name (same as a CreateProgressUpdateStream call).   The call will return, and a background process will asynchronously be doing the actual delete of the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).   If the stream takes time to be deleted, it might still show up on a ListProgressUpdateStreams call.    CreateProgressUpdateStream, ImportMigrationTask, NotifyMigrationTaskState, and all Associate[*] APIs realted to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.   Once the stream and all of its resources are deleted, CreateProgressUpdateStream for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).  
   */
  deleteProgressUpdateStream(params: MigrationHub.Types.DeleteProgressUpdateStreamRequest, callback?: (err: AWSError, data: MigrationHub.Types.DeleteProgressUpdateStreamResult) => void): Request<MigrationHub.Types.DeleteProgressUpdateStreamResult, AWSError>;
  /**
   * Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:   The only parameter needed for DeleteProgressUpdateStream is the stream name (same as a CreateProgressUpdateStream call).   The call will return, and a background process will asynchronously be doing the actual delete of the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).   If the stream takes time to be deleted, it might still show up on a ListProgressUpdateStreams call.    CreateProgressUpdateStream, ImportMigrationTask, NotifyMigrationTaskState, and all Associate[*] APIs realted to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.   Once the stream and all of its resources are deleted, CreateProgressUpdateStream for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).  
   */
  deleteProgressUpdateStream(callback?: (err: AWSError, data: MigrationHub.Types.DeleteProgressUpdateStreamResult) => void): Request<MigrationHub.Types.DeleteProgressUpdateStreamResult, AWSError>;
  /**
   * Gets the migration status of an application.
   */
  describeApplicationState(params: MigrationHub.Types.DescribeApplicationStateRequest, callback?: (err: AWSError, data: MigrationHub.Types.DescribeApplicationStateResult) => void): Request<MigrationHub.Types.DescribeApplicationStateResult, AWSError>;
  /**
   * Gets the migration status of an application.
   */
  describeApplicationState(callback?: (err: AWSError, data: MigrationHub.Types.DescribeApplicationStateResult) => void): Request<MigrationHub.Types.DescribeApplicationStateResult, AWSError>;
  /**
   * Retrieves a list of all attributes associated with a specific migration task.
   */
  describeMigrationTask(params: MigrationHub.Types.DescribeMigrationTaskRequest, callback?: (err: AWSError, data: MigrationHub.Types.DescribeMigrationTaskResult) => void): Request<MigrationHub.Types.DescribeMigrationTaskResult, AWSError>;
  /**
   * Retrieves a list of all attributes associated with a specific migration task.
   */
  describeMigrationTask(callback?: (err: AWSError, data: MigrationHub.Types.DescribeMigrationTaskResult) => void): Request<MigrationHub.Types.DescribeMigrationTaskResult, AWSError>;
  /**
   * Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:   A migration user can call the DisassociateCreatedArtifacts operation to disassociate a created AWS Artifact from a migration task.   The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b.   Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.  
   */
  disassociateCreatedArtifact(params: MigrationHub.Types.DisassociateCreatedArtifactRequest, callback?: (err: AWSError, data: MigrationHub.Types.DisassociateCreatedArtifactResult) => void): Request<MigrationHub.Types.DisassociateCreatedArtifactResult, AWSError>;
  /**
   * Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:   A migration user can call the DisassociateCreatedArtifacts operation to disassociate a created AWS Artifact from a migration task.   The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b.   Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.  
   */
  disassociateCreatedArtifact(callback?: (err: AWSError, data: MigrationHub.Types.DisassociateCreatedArtifactResult) => void): Request<MigrationHub.Types.DisassociateCreatedArtifactResult, AWSError>;
  /**
   * Disassociate an Application Discovery Service (ADS) discovered resource from a migration task.
   */
  disassociateDiscoveredResource(params: MigrationHub.Types.DisassociateDiscoveredResourceRequest, callback?: (err: AWSError, data: MigrationHub.Types.DisassociateDiscoveredResourceResult) => void): Request<MigrationHub.Types.DisassociateDiscoveredResourceResult, AWSError>;
  /**
   * Disassociate an Application Discovery Service (ADS) discovered resource from a migration task.
   */
  disassociateDiscoveredResource(callback?: (err: AWSError, data: MigrationHub.Types.DisassociateDiscoveredResourceResult) => void): Request<MigrationHub.Types.DisassociateDiscoveredResourceResult, AWSError>;
  /**
   * Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool. This API is a prerequisite to calling the NotifyMigrationTaskState API as the migration tool must first register the migration task with Migration Hub.
   */
  importMigrationTask(params: MigrationHub.Types.ImportMigrationTaskRequest, callback?: (err: AWSError, data: MigrationHub.Types.ImportMigrationTaskResult) => void): Request<MigrationHub.Types.ImportMigrationTaskResult, AWSError>;
  /**
   * Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool. This API is a prerequisite to calling the NotifyMigrationTaskState API as the migration tool must first register the migration task with Migration Hub.
   */
  importMigrationTask(callback?: (err: AWSError, data: MigrationHub.Types.ImportMigrationTaskResult) => void): Request<MigrationHub.Types.ImportMigrationTaskResult, AWSError>;
  /**
   * Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:   Gets the list of the created artifacts while migration is taking place.   Shows the artifacts created by the migration tool that was associated by the AssociateCreatedArtifact API.    Lists created artifacts in a paginated interface.   
   */
  listCreatedArtifacts(params: MigrationHub.Types.ListCreatedArtifactsRequest, callback?: (err: AWSError, data: MigrationHub.Types.ListCreatedArtifactsResult) => void): Request<MigrationHub.Types.ListCreatedArtifactsResult, AWSError>;
  /**
   * Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:   Gets the list of the created artifacts while migration is taking place.   Shows the artifacts created by the migration tool that was associated by the AssociateCreatedArtifact API.    Lists created artifacts in a paginated interface.   
   */
  listCreatedArtifacts(callback?: (err: AWSError, data: MigrationHub.Types.ListCreatedArtifactsResult) => void): Request<MigrationHub.Types.ListCreatedArtifactsResult, AWSError>;
  /**
   * Lists discovered resources associated with the given MigrationTask.
   */
  listDiscoveredResources(params: MigrationHub.Types.ListDiscoveredResourcesRequest, callback?: (err: AWSError, data: MigrationHub.Types.ListDiscoveredResourcesResult) => void): Request<MigrationHub.Types.ListDiscoveredResourcesResult, AWSError>;
  /**
   * Lists discovered resources associated with the given MigrationTask.
   */
  listDiscoveredResources(callback?: (err: AWSError, data: MigrationHub.Types.ListDiscoveredResourcesResult) => void): Request<MigrationHub.Types.ListDiscoveredResourcesResult, AWSError>;
  /**
   * Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:   Can show a summary list of the most recent migration tasks.   Can show a summary list of migration tasks associated with a given discovered resource.   Lists migration tasks in a paginated interface.  
   */
  listMigrationTasks(params: MigrationHub.Types.ListMigrationTasksRequest, callback?: (err: AWSError, data: MigrationHub.Types.ListMigrationTasksResult) => void): Request<MigrationHub.Types.ListMigrationTasksResult, AWSError>;
  /**
   * Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:   Can show a summary list of the most recent migration tasks.   Can show a summary list of migration tasks associated with a given discovered resource.   Lists migration tasks in a paginated interface.  
   */
  listMigrationTasks(callback?: (err: AWSError, data: MigrationHub.Types.ListMigrationTasksResult) => void): Request<MigrationHub.Types.ListMigrationTasksResult, AWSError>;
  /**
   * Lists progress update streams associated with the user account making this call.
   */
  listProgressUpdateStreams(params: MigrationHub.Types.ListProgressUpdateStreamsRequest, callback?: (err: AWSError, data: MigrationHub.Types.ListProgressUpdateStreamsResult) => void): Request<MigrationHub.Types.ListProgressUpdateStreamsResult, AWSError>;
  /**
   * Lists progress update streams associated with the user account making this call.
   */
  listProgressUpdateStreams(callback?: (err: AWSError, data: MigrationHub.Types.ListProgressUpdateStreamsResult) => void): Request<MigrationHub.Types.ListProgressUpdateStreamsResult, AWSError>;
  /**
   * Sets the migration state of an application. For a given application identified by the value passed to ApplicationId, its status is set or updated by passing one of three values to Status: NOT_STARTED | IN_PROGRESS | COMPLETED.
   */
  notifyApplicationState(params: MigrationHub.Types.NotifyApplicationStateRequest, callback?: (err: AWSError, data: MigrationHub.Types.NotifyApplicationStateResult) => void): Request<MigrationHub.Types.NotifyApplicationStateResult, AWSError>;
  /**
   * Sets the migration state of an application. For a given application identified by the value passed to ApplicationId, its status is set or updated by passing one of three values to Status: NOT_STARTED | IN_PROGRESS | COMPLETED.
   */
  notifyApplicationState(callback?: (err: AWSError, data: MigrationHub.Types.NotifyApplicationStateResult) => void): Request<MigrationHub.Types.NotifyApplicationStateResult, AWSError>;
  /**
   * Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:   Migration tools will call the NotifyMigrationTaskState API to share the latest progress and status.    MigrationTaskName is used for addressing updates to the correct target.    ProgressUpdateStream is used for access control and to provide a namespace for each migration tool.  
   */
  notifyMigrationTaskState(params: MigrationHub.Types.NotifyMigrationTaskStateRequest, callback?: (err: AWSError, data: MigrationHub.Types.NotifyMigrationTaskStateResult) => void): Request<MigrationHub.Types.NotifyMigrationTaskStateResult, AWSError>;
  /**
   * Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:   Migration tools will call the NotifyMigrationTaskState API to share the latest progress and status.    MigrationTaskName is used for addressing updates to the correct target.    ProgressUpdateStream is used for access control and to provide a namespace for each migration tool.  
   */
  notifyMigrationTaskState(callback?: (err: AWSError, data: MigrationHub.Types.NotifyMigrationTaskStateResult) => void): Request<MigrationHub.Types.NotifyMigrationTaskStateResult, AWSError>;
  /**
   * Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service (ADS)'s repository. This association occurs asynchronously after PutResourceAttributes returns.  Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to add an IP address, it will then be required to call it with both the IP and MAC addresses to prevent overiding the MAC address.   Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call ListAssociatedResource. 
   */
  putResourceAttributes(params: MigrationHub.Types.PutResourceAttributesRequest, callback?: (err: AWSError, data: MigrationHub.Types.PutResourceAttributesResult) => void): Request<MigrationHub.Types.PutResourceAttributesResult, AWSError>;
  /**
   * Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service (ADS)'s repository. This association occurs asynchronously after PutResourceAttributes returns.  Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to add an IP address, it will then be required to call it with both the IP and MAC addresses to prevent overiding the MAC address.   Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call ListAssociatedResource. 
   */
  putResourceAttributes(callback?: (err: AWSError, data: MigrationHub.Types.PutResourceAttributesResult) => void): Request<MigrationHub.Types.PutResourceAttributesResult, AWSError>;
}
declare namespace MigrationHub {
  export type ApplicationId = string;
  export type ApplicationStatus = "NOT_STARTED"|"IN_PROGRESS"|"COMPLETED"|string;
  export interface AssociateCreatedArtifactRequest {
    /**
     * The name of the ProgressUpdateStream. 
     */
    ProgressUpdateStream: ProgressUpdateStream;
    /**
     * Unique identifier that references the migration task.
     */
    MigrationTaskName: MigrationTaskName;
    /**
     * An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS instance, etc.) 
     */
    CreatedArtifact: CreatedArtifact;
    /**
     * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
     */
    DryRun?: DryRun;
  }
  export interface AssociateCreatedArtifactResult {
  }
  export interface AssociateDiscoveredResourceRequest {
    /**
     * The name of the ProgressUpdateStream.
     */
    ProgressUpdateStream: ProgressUpdateStream;
    /**
     * The identifier given to the MigrationTask.
     */
    MigrationTaskName: MigrationTaskName;
    /**
     * Object representing a Resource.
     */
    DiscoveredResource: DiscoveredResource;
    /**
     * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
     */
    DryRun?: DryRun;
  }
  export interface AssociateDiscoveredResourceResult {
  }
  export type ConfigurationId = string;
  export interface CreateProgressUpdateStreamRequest {
    /**
     * The name of the ProgressUpdateStream. 
     */
    ProgressUpdateStreamName: ProgressUpdateStream;
    /**
     * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
     */
    DryRun?: DryRun;
  }
  export interface CreateProgressUpdateStreamResult {
  }
  export interface CreatedArtifact {
    /**
     * An ARN that uniquely identifies the result of a migration task.
     */
    Name: CreatedArtifactName;
    /**
     * A description that can be free-form text to record additional detail about the artifact for clarity or for later reference.
     */
    Description?: CreatedArtifactDescription;
  }
  export type CreatedArtifactDescription = string;
  export type CreatedArtifactList = CreatedArtifact[];
  export type CreatedArtifactName = string;
  export interface DeleteProgressUpdateStreamRequest {
    /**
     * The name of the ProgressUpdateStream. 
     */
    ProgressUpdateStreamName: ProgressUpdateStream;
    /**
     * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
     */
    DryRun?: DryRun;
  }
  export interface DeleteProgressUpdateStreamResult {
  }
  export interface DescribeApplicationStateRequest {
    /**
     * The configurationId in ADS that uniquely identifies the grouped application.
     */
    ApplicationId: ApplicationId;
  }
  export interface DescribeApplicationStateResult {
    /**
     * Status of the application - Not Started, In-Progress, Complete.
     */
    ApplicationStatus?: ApplicationStatus;
    /**
     * The timestamp when the application status was last updated.
     */
    LastUpdatedTime?: UpdateDateTime;
  }
  export interface DescribeMigrationTaskRequest {
    /**
     * The name of the ProgressUpdateStream. 
     */
    ProgressUpdateStream: ProgressUpdateStream;
    /**
     * The identifier given to the MigrationTask.
     */
    MigrationTaskName: MigrationTaskName;
  }
  export interface DescribeMigrationTaskResult {
    /**
     * Object encapsulating information about the migration task.
     */
    MigrationTask?: MigrationTask;
  }
  export interface DisassociateCreatedArtifactRequest {
    /**
     * The name of the ProgressUpdateStream. 
     */
    ProgressUpdateStream: ProgressUpdateStream;
    /**
     * Unique identifier that references the migration task to be disassociated with the artifact.
     */
    MigrationTaskName: MigrationTaskName;
    /**
     * An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS instance, etc.)
     */
    CreatedArtifactName: CreatedArtifactName;
    /**
     * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
     */
    DryRun?: DryRun;
  }
  export interface DisassociateCreatedArtifactResult {
  }
  export interface DisassociateDiscoveredResourceRequest {
    /**
     * The name of the ProgressUpdateStream.
     */
    ProgressUpdateStream: ProgressUpdateStream;
    /**
     * The identifier given to the MigrationTask.
     */
    MigrationTaskName: MigrationTaskName;
    /**
     * ConfigurationId of the ADS resource to be disassociated.
     */
    ConfigurationId: ConfigurationId;
    /**
     * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
     */
    DryRun?: DryRun;
  }
  export interface DisassociateDiscoveredResourceResult {
  }
  export interface DiscoveredResource {
    /**
     * The configurationId in ADS that uniquely identifies the on-premise resource.
     */
    ConfigurationId: ConfigurationId;
    /**
     * A description that can be free-form text to record additional detail about the discovered resource for clarity or later reference.
     */
    Description?: DiscoveredResourceDescription;
  }
  export type DiscoveredResourceDescription = string;
  export type DiscoveredResourceList = DiscoveredResource[];
  export type DryRun = boolean;
  export type ErrorMessage = string;
  export interface ImportMigrationTaskRequest {
    /**
     * The name of the ProgressUpdateStream. 
     */
    ProgressUpdateStream: ProgressUpdateStream;
    /**
     * Unique identifier that references the migration task.
     */
    MigrationTaskName: MigrationTaskName;
    /**
     * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
     */
    DryRun?: DryRun;
  }
  export interface ImportMigrationTaskResult {
  }
  export type LatestResourceAttributeList = ResourceAttribute[];
  export interface ListCreatedArtifactsRequest {
    /**
     * The name of the ProgressUpdateStream. 
     */
    ProgressUpdateStream: ProgressUpdateStream;
    /**
     * Unique identifier that references the migration task.
     */
    MigrationTaskName: MigrationTaskName;
    /**
     * If a NextToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in NextToken.
     */
    NextToken?: Token;
    /**
     * Maximum number of results to be returned per page.
     */
    MaxResults?: MaxResultsCreatedArtifacts;
  }
  export interface ListCreatedArtifactsResult {
    /**
     * If there are more created artifacts than the max result, return the next token to be passed to the next call as a bookmark of where to start from.
     */
    NextToken?: Token;
    /**
     * List of created artifacts up to the maximum number of results specified in the request.
     */
    CreatedArtifactList?: CreatedArtifactList;
  }
  export interface ListDiscoveredResourcesRequest {
    /**
     * The name of the ProgressUpdateStream.
     */
    ProgressUpdateStream: ProgressUpdateStream;
    /**
     * The name of the MigrationTask.
     */
    MigrationTaskName: MigrationTaskName;
    /**
     * If a NextToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in NextToken.
     */
    NextToken?: Token;
    /**
     * The maximum number of results returned per page.
     */
    MaxResults?: MaxResultsResources;
  }
  export interface ListDiscoveredResourcesResult {
    /**
     * If there are more discovered resources than the max result, return the next token to be passed to the next call as a bookmark of where to start from.
     */
    NextToken?: Token;
    /**
     * Returned list of discovered resources associated with the given MigrationTask.
     */
    DiscoveredResourceList?: DiscoveredResourceList;
  }
  export interface ListMigrationTasksRequest {
    /**
     * If a NextToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in NextToken.
     */
    NextToken?: Token;
    /**
     * Value to specify how many results are returned per page.
     */
    MaxResults?: MaxResults;
    /**
     * Filter migration tasks by discovered resource name.
     */
    ResourceName?: ResourceName;
  }
  export interface ListMigrationTasksResult {
    /**
     * If there are more migration tasks than the max result, return the next token to be passed to the next call as a bookmark of where to start from.
     */
    NextToken?: Token;
    /**
     * Lists the migration task's summary which includes: MigrationTaskName, ProgressPercent, ProgressUpdateStream, Status, and the UpdateDateTime for each task.
     */
    MigrationTaskSummaryList?: MigrationTaskSummaryList;
  }
  export interface ListProgressUpdateStreamsRequest {
    /**
     * If a NextToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in NextToken.
     */
    NextToken?: Token;
    /**
     * Filter to limit the maximum number of results to list per page.
     */
    MaxResults?: MaxResults;
  }
  export interface ListProgressUpdateStreamsResult {
    /**
     * List of progress update streams up to the max number of results passed in the input.
     */
    ProgressUpdateStreamSummaryList?: ProgressUpdateStreamSummaryList;
    /**
     * If there are more streams created than the max result, return the next token to be passed to the next call as a bookmark of where to start from.
     */
    NextToken?: Token;
  }
  export type MaxResults = number;
  export type MaxResultsCreatedArtifacts = number;
  export type MaxResultsResources = number;
  export interface MigrationTask {
    /**
     * A name that identifies the vendor of the migration tool being used.
     */
    ProgressUpdateStream?: ProgressUpdateStream;
    /**
     * Unique identifier that references the migration task.
     */
    MigrationTaskName?: MigrationTaskName;
    /**
     * Task object encapsulating task information.
     */
    Task?: Task;
    /**
     * The timestamp when the task was gathered.
     */
    UpdateDateTime?: UpdateDateTime;
    /**
     * 
     */
    ResourceAttributeList?: LatestResourceAttributeList;
  }
  export type MigrationTaskName = string;
  export interface MigrationTaskSummary {
    /**
     * An AWS resource used for access control. It should uniquely identify the migration tool as it is used for all updates made by the tool.
     */
    ProgressUpdateStream?: ProgressUpdateStream;
    /**
     * Unique identifier that references the migration task.
     */
    MigrationTaskName?: MigrationTaskName;
    /**
     * Status of the task.
     */
    Status?: Status;
    /**
     * 
     */
    ProgressPercent?: ProgressPercent;
    /**
     * Detail information of what is being done within the overall status state.
     */
    StatusDetail?: StatusDetail;
    /**
     * The timestamp when the task was gathered.
     */
    UpdateDateTime?: UpdateDateTime;
  }
  export type MigrationTaskSummaryList = MigrationTaskSummary[];
  export type NextUpdateSeconds = number;
  export interface NotifyApplicationStateRequest {
    /**
     * The configurationId in ADS that uniquely identifies the grouped application.
     */
    ApplicationId: ApplicationId;
    /**
     * Status of the application - Not Started, In-Progress, Complete.
     */
    Status: ApplicationStatus;
    /**
     * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
     */
    DryRun?: DryRun;
  }
  export interface NotifyApplicationStateResult {
  }
  export interface NotifyMigrationTaskStateRequest {
    /**
     * The name of the ProgressUpdateStream. 
     */
    ProgressUpdateStream: ProgressUpdateStream;
    /**
     * Unique identifier that references the migration task.
     */
    MigrationTaskName: MigrationTaskName;
    /**
     * Information about the task's progress and status.
     */
    Task: Task;
    /**
     * The timestamp when the task was gathered.
     */
    UpdateDateTime: UpdateDateTime;
    /**
     * Number of seconds after the UpdateDateTime within which the Migration Hub can expect an update. If Migration Hub does not receive an update within the specified interval, then the migration task will be considered stale.
     */
    NextUpdateSeconds: NextUpdateSeconds;
    /**
     * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
     */
    DryRun?: DryRun;
  }
  export interface NotifyMigrationTaskStateResult {
  }
  export type ProgressPercent = number;
  export type ProgressUpdateStream = string;
  export interface ProgressUpdateStreamSummary {
    /**
     * The name of the ProgressUpdateStream. 
     */
    ProgressUpdateStreamName?: ProgressUpdateStream;
  }
  export type ProgressUpdateStreamSummaryList = ProgressUpdateStreamSummary[];
  export interface PutResourceAttributesRequest {
    /**
     * The name of the ProgressUpdateStream. 
     */
    ProgressUpdateStream: ProgressUpdateStream;
    /**
     * Unique identifier that references the migration task.
     */
    MigrationTaskName: MigrationTaskName;
    /**
     * Information about the resource that is being migrated. This data will be used to map the task to a resource in the Application Discovery Service (ADS)'s repository.
     */
    ResourceAttributeList: ResourceAttributeList;
    /**
     * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
     */
    DryRun?: DryRun;
  }
  export interface PutResourceAttributesResult {
  }
  export interface ResourceAttribute {
    /**
     * Type of resource.
     */
    Type: ResourceAttributeType;
    /**
     * Value of the resource type.
     */
    Value: ResourceAttributeValue;
  }
  export type ResourceAttributeList = ResourceAttribute[];
  export type ResourceAttributeType = "IPV4_ADDRESS"|"IPV6_ADDRESS"|"MAC_ADDRESS"|"FQDN"|"VM_MANAGER_ID"|"VM_MANAGED_OBJECT_REFERENCE"|"VM_NAME"|"VM_PATH"|"BIOS_ID"|"MOTHERBOARD_SERIAL_NUMBER"|"LABEL"|string;
  export type ResourceAttributeValue = string;
  export type ResourceName = string;
  export type Status = "NOT_STARTED"|"IN_PROGRESS"|"FAILED"|"COMPLETED"|string;
  export type StatusDetail = string;
  export interface Task {
    /**
     * Status of the task - Not Started, In-Progress, Complete.
     */
    Status: Status;
    /**
     * Details of task status as notified by a migration tool. A tool might use this field to provide clarifying information about the status that is unique to that tool or that explains an error state.
     */
    StatusDetail?: StatusDetail;
    /**
     * Indication of the percentage completion of the task.
     */
    ProgressPercent?: ProgressPercent;
  }
  export type Token = string;
  export type UpdateDateTime = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-05-31"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MigrationHub client.
   */
  export import Types = MigrationHub;
}
export = MigrationHub;
