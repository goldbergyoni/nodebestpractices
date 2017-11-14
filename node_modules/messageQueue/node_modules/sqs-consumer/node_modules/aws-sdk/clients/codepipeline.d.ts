import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CodePipeline extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CodePipeline.Types.ClientConfiguration)
  config: Config & CodePipeline.Types.ClientConfiguration;
  /**
   * Returns information about a specified job and whether that job has been received by the job worker. Only used for custom actions.
   */
  acknowledgeJob(params: CodePipeline.Types.AcknowledgeJobInput, callback?: (err: AWSError, data: CodePipeline.Types.AcknowledgeJobOutput) => void): Request<CodePipeline.Types.AcknowledgeJobOutput, AWSError>;
  /**
   * Returns information about a specified job and whether that job has been received by the job worker. Only used for custom actions.
   */
  acknowledgeJob(callback?: (err: AWSError, data: CodePipeline.Types.AcknowledgeJobOutput) => void): Request<CodePipeline.Types.AcknowledgeJobOutput, AWSError>;
  /**
   * Confirms a job worker has received the specified job. Only used for partner actions.
   */
  acknowledgeThirdPartyJob(params: CodePipeline.Types.AcknowledgeThirdPartyJobInput, callback?: (err: AWSError, data: CodePipeline.Types.AcknowledgeThirdPartyJobOutput) => void): Request<CodePipeline.Types.AcknowledgeThirdPartyJobOutput, AWSError>;
  /**
   * Confirms a job worker has received the specified job. Only used for partner actions.
   */
  acknowledgeThirdPartyJob(callback?: (err: AWSError, data: CodePipeline.Types.AcknowledgeThirdPartyJobOutput) => void): Request<CodePipeline.Types.AcknowledgeThirdPartyJobOutput, AWSError>;
  /**
   * Creates a new custom action that can be used in all pipelines associated with the AWS account. Only used for custom actions.
   */
  createCustomActionType(params: CodePipeline.Types.CreateCustomActionTypeInput, callback?: (err: AWSError, data: CodePipeline.Types.CreateCustomActionTypeOutput) => void): Request<CodePipeline.Types.CreateCustomActionTypeOutput, AWSError>;
  /**
   * Creates a new custom action that can be used in all pipelines associated with the AWS account. Only used for custom actions.
   */
  createCustomActionType(callback?: (err: AWSError, data: CodePipeline.Types.CreateCustomActionTypeOutput) => void): Request<CodePipeline.Types.CreateCustomActionTypeOutput, AWSError>;
  /**
   * Creates a pipeline.
   */
  createPipeline(params: CodePipeline.Types.CreatePipelineInput, callback?: (err: AWSError, data: CodePipeline.Types.CreatePipelineOutput) => void): Request<CodePipeline.Types.CreatePipelineOutput, AWSError>;
  /**
   * Creates a pipeline.
   */
  createPipeline(callback?: (err: AWSError, data: CodePipeline.Types.CreatePipelineOutput) => void): Request<CodePipeline.Types.CreatePipelineOutput, AWSError>;
  /**
   * Marks a custom action as deleted. PollForJobs for the custom action will fail after the action is marked for deletion. Only used for custom actions.  You cannot recreate a custom action after it has been deleted unless you increase the version number of the action. 
   */
  deleteCustomActionType(params: CodePipeline.Types.DeleteCustomActionTypeInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Marks a custom action as deleted. PollForJobs for the custom action will fail after the action is marked for deletion. Only used for custom actions.  You cannot recreate a custom action after it has been deleted unless you increase the version number of the action. 
   */
  deleteCustomActionType(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified pipeline.
   */
  deletePipeline(params: CodePipeline.Types.DeletePipelineInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified pipeline.
   */
  deletePipeline(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.
   */
  disableStageTransition(params: CodePipeline.Types.DisableStageTransitionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.
   */
  disableStageTransition(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables artifacts in a pipeline to transition to a stage in a pipeline.
   */
  enableStageTransition(params: CodePipeline.Types.EnableStageTransitionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables artifacts in a pipeline to transition to a stage in a pipeline.
   */
  enableStageTransition(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns information about a job. Only used for custom actions.  When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. Additionally, this API returns any secret values defined for the action. 
   */
  getJobDetails(params: CodePipeline.Types.GetJobDetailsInput, callback?: (err: AWSError, data: CodePipeline.Types.GetJobDetailsOutput) => void): Request<CodePipeline.Types.GetJobDetailsOutput, AWSError>;
  /**
   * Returns information about a job. Only used for custom actions.  When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. Additionally, this API returns any secret values defined for the action. 
   */
  getJobDetails(callback?: (err: AWSError, data: CodePipeline.Types.GetJobDetailsOutput) => void): Request<CodePipeline.Types.GetJobDetailsOutput, AWSError>;
  /**
   * Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with UpdatePipeline.
   */
  getPipeline(params: CodePipeline.Types.GetPipelineInput, callback?: (err: AWSError, data: CodePipeline.Types.GetPipelineOutput) => void): Request<CodePipeline.Types.GetPipelineOutput, AWSError>;
  /**
   * Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with UpdatePipeline.
   */
  getPipeline(callback?: (err: AWSError, data: CodePipeline.Types.GetPipelineOutput) => void): Request<CodePipeline.Types.GetPipelineOutput, AWSError>;
  /**
   * Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.
   */
  getPipelineExecution(params: CodePipeline.Types.GetPipelineExecutionInput, callback?: (err: AWSError, data: CodePipeline.Types.GetPipelineExecutionOutput) => void): Request<CodePipeline.Types.GetPipelineExecutionOutput, AWSError>;
  /**
   * Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.
   */
  getPipelineExecution(callback?: (err: AWSError, data: CodePipeline.Types.GetPipelineExecutionOutput) => void): Request<CodePipeline.Types.GetPipelineExecutionOutput, AWSError>;
  /**
   * Returns information about the state of a pipeline, including the stages and actions.
   */
  getPipelineState(params: CodePipeline.Types.GetPipelineStateInput, callback?: (err: AWSError, data: CodePipeline.Types.GetPipelineStateOutput) => void): Request<CodePipeline.Types.GetPipelineStateOutput, AWSError>;
  /**
   * Returns information about the state of a pipeline, including the stages and actions.
   */
  getPipelineState(callback?: (err: AWSError, data: CodePipeline.Types.GetPipelineStateOutput) => void): Request<CodePipeline.Types.GetPipelineStateOutput, AWSError>;
  /**
   * Requests the details of a job for a third party action. Only used for partner actions.  When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. Additionally, this API returns any secret values defined for the action. 
   */
  getThirdPartyJobDetails(params: CodePipeline.Types.GetThirdPartyJobDetailsInput, callback?: (err: AWSError, data: CodePipeline.Types.GetThirdPartyJobDetailsOutput) => void): Request<CodePipeline.Types.GetThirdPartyJobDetailsOutput, AWSError>;
  /**
   * Requests the details of a job for a third party action. Only used for partner actions.  When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. Additionally, this API returns any secret values defined for the action. 
   */
  getThirdPartyJobDetails(callback?: (err: AWSError, data: CodePipeline.Types.GetThirdPartyJobDetailsOutput) => void): Request<CodePipeline.Types.GetThirdPartyJobDetailsOutput, AWSError>;
  /**
   * Gets a summary of all AWS CodePipeline action types associated with your account.
   */
  listActionTypes(params: CodePipeline.Types.ListActionTypesInput, callback?: (err: AWSError, data: CodePipeline.Types.ListActionTypesOutput) => void): Request<CodePipeline.Types.ListActionTypesOutput, AWSError>;
  /**
   * Gets a summary of all AWS CodePipeline action types associated with your account.
   */
  listActionTypes(callback?: (err: AWSError, data: CodePipeline.Types.ListActionTypesOutput) => void): Request<CodePipeline.Types.ListActionTypesOutput, AWSError>;
  /**
   * Gets a summary of the most recent executions for a pipeline.
   */
  listPipelineExecutions(params: CodePipeline.Types.ListPipelineExecutionsInput, callback?: (err: AWSError, data: CodePipeline.Types.ListPipelineExecutionsOutput) => void): Request<CodePipeline.Types.ListPipelineExecutionsOutput, AWSError>;
  /**
   * Gets a summary of the most recent executions for a pipeline.
   */
  listPipelineExecutions(callback?: (err: AWSError, data: CodePipeline.Types.ListPipelineExecutionsOutput) => void): Request<CodePipeline.Types.ListPipelineExecutionsOutput, AWSError>;
  /**
   * Gets a summary of all of the pipelines associated with your account.
   */
  listPipelines(params: CodePipeline.Types.ListPipelinesInput, callback?: (err: AWSError, data: CodePipeline.Types.ListPipelinesOutput) => void): Request<CodePipeline.Types.ListPipelinesOutput, AWSError>;
  /**
   * Gets a summary of all of the pipelines associated with your account.
   */
  listPipelines(callback?: (err: AWSError, data: CodePipeline.Types.ListPipelinesOutput) => void): Request<CodePipeline.Types.ListPipelinesOutput, AWSError>;
  /**
   * Returns information about any jobs for AWS CodePipeline to act upon.  When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. Additionally, this API returns any secret values defined for the action. 
   */
  pollForJobs(params: CodePipeline.Types.PollForJobsInput, callback?: (err: AWSError, data: CodePipeline.Types.PollForJobsOutput) => void): Request<CodePipeline.Types.PollForJobsOutput, AWSError>;
  /**
   * Returns information about any jobs for AWS CodePipeline to act upon.  When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. Additionally, this API returns any secret values defined for the action. 
   */
  pollForJobs(callback?: (err: AWSError, data: CodePipeline.Types.PollForJobsOutput) => void): Request<CodePipeline.Types.PollForJobsOutput, AWSError>;
  /**
   * Determines whether there are any third party jobs for a job worker to act on. Only used for partner actions.  When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. 
   */
  pollForThirdPartyJobs(params: CodePipeline.Types.PollForThirdPartyJobsInput, callback?: (err: AWSError, data: CodePipeline.Types.PollForThirdPartyJobsOutput) => void): Request<CodePipeline.Types.PollForThirdPartyJobsOutput, AWSError>;
  /**
   * Determines whether there are any third party jobs for a job worker to act on. Only used for partner actions.  When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. 
   */
  pollForThirdPartyJobs(callback?: (err: AWSError, data: CodePipeline.Types.PollForThirdPartyJobsOutput) => void): Request<CodePipeline.Types.PollForThirdPartyJobsOutput, AWSError>;
  /**
   * Provides information to AWS CodePipeline about new revisions to a source.
   */
  putActionRevision(params: CodePipeline.Types.PutActionRevisionInput, callback?: (err: AWSError, data: CodePipeline.Types.PutActionRevisionOutput) => void): Request<CodePipeline.Types.PutActionRevisionOutput, AWSError>;
  /**
   * Provides information to AWS CodePipeline about new revisions to a source.
   */
  putActionRevision(callback?: (err: AWSError, data: CodePipeline.Types.PutActionRevisionOutput) => void): Request<CodePipeline.Types.PutActionRevisionOutput, AWSError>;
  /**
   * Provides the response to a manual approval request to AWS CodePipeline. Valid responses include Approved and Rejected.
   */
  putApprovalResult(params: CodePipeline.Types.PutApprovalResultInput, callback?: (err: AWSError, data: CodePipeline.Types.PutApprovalResultOutput) => void): Request<CodePipeline.Types.PutApprovalResultOutput, AWSError>;
  /**
   * Provides the response to a manual approval request to AWS CodePipeline. Valid responses include Approved and Rejected.
   */
  putApprovalResult(callback?: (err: AWSError, data: CodePipeline.Types.PutApprovalResultOutput) => void): Request<CodePipeline.Types.PutApprovalResultOutput, AWSError>;
  /**
   * Represents the failure of a job as returned to the pipeline by a job worker. Only used for custom actions.
   */
  putJobFailureResult(params: CodePipeline.Types.PutJobFailureResultInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Represents the failure of a job as returned to the pipeline by a job worker. Only used for custom actions.
   */
  putJobFailureResult(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Represents the success of a job as returned to the pipeline by a job worker. Only used for custom actions.
   */
  putJobSuccessResult(params: CodePipeline.Types.PutJobSuccessResultInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Represents the success of a job as returned to the pipeline by a job worker. Only used for custom actions.
   */
  putJobSuccessResult(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Represents the failure of a third party job as returned to the pipeline by a job worker. Only used for partner actions.
   */
  putThirdPartyJobFailureResult(params: CodePipeline.Types.PutThirdPartyJobFailureResultInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Represents the failure of a third party job as returned to the pipeline by a job worker. Only used for partner actions.
   */
  putThirdPartyJobFailureResult(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Represents the success of a third party job as returned to the pipeline by a job worker. Only used for partner actions.
   */
  putThirdPartyJobSuccessResult(params: CodePipeline.Types.PutThirdPartyJobSuccessResultInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Represents the success of a third party job as returned to the pipeline by a job worker. Only used for partner actions.
   */
  putThirdPartyJobSuccessResult(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Resumes the pipeline execution by retrying the last failed actions in a stage.
   */
  retryStageExecution(params: CodePipeline.Types.RetryStageExecutionInput, callback?: (err: AWSError, data: CodePipeline.Types.RetryStageExecutionOutput) => void): Request<CodePipeline.Types.RetryStageExecutionOutput, AWSError>;
  /**
   * Resumes the pipeline execution by retrying the last failed actions in a stage.
   */
  retryStageExecution(callback?: (err: AWSError, data: CodePipeline.Types.RetryStageExecutionOutput) => void): Request<CodePipeline.Types.RetryStageExecutionOutput, AWSError>;
  /**
   * Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.
   */
  startPipelineExecution(params: CodePipeline.Types.StartPipelineExecutionInput, callback?: (err: AWSError, data: CodePipeline.Types.StartPipelineExecutionOutput) => void): Request<CodePipeline.Types.StartPipelineExecutionOutput, AWSError>;
  /**
   * Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.
   */
  startPipelineExecution(callback?: (err: AWSError, data: CodePipeline.Types.StartPipelineExecutionOutput) => void): Request<CodePipeline.Types.StartPipelineExecutionOutput, AWSError>;
  /**
   * Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure in conjunction with UpdatePipeline to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.
   */
  updatePipeline(params: CodePipeline.Types.UpdatePipelineInput, callback?: (err: AWSError, data: CodePipeline.Types.UpdatePipelineOutput) => void): Request<CodePipeline.Types.UpdatePipelineOutput, AWSError>;
  /**
   * Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure in conjunction with UpdatePipeline to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.
   */
  updatePipeline(callback?: (err: AWSError, data: CodePipeline.Types.UpdatePipelineOutput) => void): Request<CodePipeline.Types.UpdatePipelineOutput, AWSError>;
}
declare namespace CodePipeline {
  export interface AWSSessionCredentials {
    /**
     * The access key for the session.
     */
    accessKeyId: AccessKeyId;
    /**
     * The secret access key for the session.
     */
    secretAccessKey: SecretAccessKey;
    /**
     * The token for the session.
     */
    sessionToken: SessionToken;
  }
  export type AccessKeyId = string;
  export type AccountId = string;
  export interface AcknowledgeJobInput {
    /**
     * The unique system-generated ID of the job for which you want to confirm receipt.
     */
    jobId: JobId;
    /**
     * A system-generated random number that AWS CodePipeline uses to ensure that the job is being worked on by only one job worker. Get this number from the response of the PollForJobs request that returned this job.
     */
    nonce: Nonce;
  }
  export interface AcknowledgeJobOutput {
    /**
     * Whether the job worker has received the specified job.
     */
    status?: JobStatus;
  }
  export interface AcknowledgeThirdPartyJobInput {
    /**
     * The unique system-generated ID of the job.
     */
    jobId: ThirdPartyJobId;
    /**
     * A system-generated random number that AWS CodePipeline uses to ensure that the job is being worked on by only one job worker. Get this number from the response to a GetThirdPartyJobDetails request.
     */
    nonce: Nonce;
    /**
     * The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.
     */
    clientToken: ClientToken;
  }
  export interface AcknowledgeThirdPartyJobOutput {
    /**
     * The status information for the third party job, if any.
     */
    status?: JobStatus;
  }
  export type ActionCategory = "Source"|"Build"|"Deploy"|"Test"|"Invoke"|"Approval"|string;
  export interface ActionConfiguration {
    /**
     * The configuration data for the action.
     */
    configuration?: ActionConfigurationMap;
  }
  export type ActionConfigurationKey = string;
  export type ActionConfigurationMap = {[key: string]: ActionConfigurationValue};
  export interface ActionConfigurationProperty {
    /**
     * The name of the action configuration property.
     */
    name: ActionConfigurationKey;
    /**
     * Whether the configuration property is a required value.
     */
    required: Boolean;
    /**
     * Whether the configuration property is a key.
     */
    key: Boolean;
    /**
     * Whether the configuration property is secret. Secrets are hidden from all calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs. When updating a pipeline, passing * * * * * without changing any other values of the action will preserve the prior value of the secret.
     */
    secret: Boolean;
    /**
     * Indicates that the property will be used in conjunction with PollForJobs. When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret. If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to additional restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens.
     */
    queryable?: Boolean;
    /**
     * The description of the action configuration property that will be displayed to users.
     */
    description?: Description;
    /**
     * The type of the configuration property.
     */
    type?: ActionConfigurationPropertyType;
  }
  export type ActionConfigurationPropertyList = ActionConfigurationProperty[];
  export type ActionConfigurationPropertyType = "String"|"Number"|"Boolean"|string;
  export type ActionConfigurationQueryableValue = string;
  export type ActionConfigurationValue = string;
  export interface ActionContext {
    /**
     * The name of the action within the context of a job.
     */
    name?: ActionName;
  }
  export interface ActionDeclaration {
    /**
     * The action declaration's name.
     */
    name: ActionName;
    /**
     * The configuration information for the action type.
     */
    actionTypeId: ActionTypeId;
    /**
     * The order in which actions are run.
     */
    runOrder?: ActionRunOrder;
    /**
     * The action declaration's configuration.
     */
    configuration?: ActionConfigurationMap;
    /**
     * The name or ID of the result of the action declaration, such as a test or build artifact.
     */
    outputArtifacts?: OutputArtifactList;
    /**
     * The name or ID of the artifact consumed by the action, such as a test or build artifact.
     */
    inputArtifacts?: InputArtifactList;
    /**
     * The ARN of the IAM service role that will perform the declared action. This is assumed through the roleArn for the pipeline.
     */
    roleArn?: RoleArn;
  }
  export interface ActionExecution {
    /**
     * The status of the action, or for a completed action, the last status of the action.
     */
    status?: ActionExecutionStatus;
    /**
     * A summary of the run of the action.
     */
    summary?: ExecutionSummary;
    /**
     * The last status change of the action.
     */
    lastStatusChange?: Timestamp;
    /**
     * The system-generated token used to identify a unique approval request. The token for each open approval request can be obtained using the GetPipelineState command and is used to validate that the approval request corresponding to this token is still valid.
     */
    token?: ActionExecutionToken;
    /**
     * The ARN of the user who last changed the pipeline.
     */
    lastUpdatedBy?: LastUpdatedBy;
    /**
     * The external ID of the run of the action.
     */
    externalExecutionId?: ExecutionId;
    /**
     * The URL of a resource external to AWS that will be used when running the action, for example an external repository URL.
     */
    externalExecutionUrl?: Url;
    /**
     * A percentage of completeness of the action as it runs.
     */
    percentComplete?: Percentage;
    /**
     * The details of an error returned by a URL external to AWS.
     */
    errorDetails?: ErrorDetails;
  }
  export type ActionExecutionStatus = "InProgress"|"Succeeded"|"Failed"|string;
  export type ActionExecutionToken = string;
  export type ActionName = string;
  export type ActionOwner = "AWS"|"ThirdParty"|"Custom"|string;
  export type ActionProvider = string;
  export interface ActionRevision {
    /**
     * The system-generated unique ID that identifies the revision number of the action.
     */
    revisionId: Revision;
    /**
     * The unique identifier of the change that set the state to this revision, for example a deployment ID or timestamp.
     */
    revisionChangeId: RevisionChangeIdentifier;
    /**
     * The date and time when the most recent version of the action was created, in timestamp format.
     */
    created: Timestamp;
  }
  export type ActionRunOrder = number;
  export interface ActionState {
    /**
     * The name of the action.
     */
    actionName?: ActionName;
    /**
     * Represents information about the version (or revision) of an action.
     */
    currentRevision?: ActionRevision;
    /**
     * Represents information about the run of an action.
     */
    latestExecution?: ActionExecution;
    /**
     * A URL link for more information about the state of the action, such as a deployment group details page.
     */
    entityUrl?: Url;
    /**
     * A URL link for more information about the revision, such as a commit details page.
     */
    revisionUrl?: Url;
  }
  export type ActionStateList = ActionState[];
  export interface ActionType {
    /**
     * Represents information about an action type.
     */
    id: ActionTypeId;
    /**
     * The settings for the action type.
     */
    settings?: ActionTypeSettings;
    /**
     * The configuration properties for the action type.
     */
    actionConfigurationProperties?: ActionConfigurationPropertyList;
    /**
     * The details of the input artifact for the action, such as its commit ID.
     */
    inputArtifactDetails: ArtifactDetails;
    /**
     * The details of the output artifact of the action, such as its commit ID.
     */
    outputArtifactDetails: ArtifactDetails;
  }
  export interface ActionTypeId {
    /**
     * A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Valid categories are limited to one of the values below.
     */
    category: ActionCategory;
    /**
     * The creator of the action being called.
     */
    owner: ActionOwner;
    /**
     * The provider of the service being called by the action. Valid providers are determined by the action category. For example, an action in the Deploy category type might have a provider of AWS CodeDeploy, which would be specified as CodeDeploy.
     */
    provider: ActionProvider;
    /**
     * A string that identifies the action type.
     */
    version: Version;
  }
  export type ActionTypeList = ActionType[];
  export interface ActionTypeSettings {
    /**
     * The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.
     */
    thirdPartyConfigurationUrl?: Url;
    /**
     * The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group. This link is provided as part of the action display within the pipeline.
     */
    entityUrlTemplate?: UrlTemplate;
    /**
     * The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as console page for AWS CodeDeploy. This link is shown on the pipeline view page in the AWS CodePipeline console and provides a link to the execution entity of the external action.
     */
    executionUrlTemplate?: UrlTemplate;
    /**
     * The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.
     */
    revisionUrlTemplate?: UrlTemplate;
  }
  export interface ApprovalResult {
    /**
     * The summary of the current status of the approval request.
     */
    summary: ApprovalSummary;
    /**
     * The response submitted by a reviewer assigned to an approval action request.
     */
    status: ApprovalStatus;
  }
  export type ApprovalStatus = "Approved"|"Rejected"|string;
  export type ApprovalSummary = string;
  export type ApprovalToken = string;
  export interface Artifact {
    /**
     * The artifact's name.
     */
    name?: ArtifactName;
    /**
     * The artifact's revision ID. Depending on the type of object, this could be a commit ID (GitHub) or a revision ID (Amazon S3).
     */
    revision?: Revision;
    /**
     * The location of an artifact.
     */
    location?: ArtifactLocation;
  }
  export interface ArtifactDetails {
    /**
     * The minimum number of artifacts allowed for the action type.
     */
    minimumCount: MinimumArtifactCount;
    /**
     * The maximum number of artifacts allowed for the action type.
     */
    maximumCount: MaximumArtifactCount;
  }
  export type ArtifactList = Artifact[];
  export interface ArtifactLocation {
    /**
     * The type of artifact in the location.
     */
    type?: ArtifactLocationType;
    /**
     * The Amazon S3 bucket that contains the artifact.
     */
    s3Location?: S3ArtifactLocation;
  }
  export type ArtifactLocationType = "S3"|string;
  export type ArtifactName = string;
  export interface ArtifactRevision {
    /**
     * The name of an artifact. This name might be system-generated, such as "MyApp", or might be defined by the user when an action is created.
     */
    name?: ArtifactName;
    /**
     * The revision ID of the artifact.
     */
    revisionId?: Revision;
    /**
     * An additional identifier for a revision, such as a commit date or, for artifacts stored in Amazon S3 buckets, the ETag value.
     */
    revisionChangeIdentifier?: RevisionChangeIdentifier;
    /**
     * Summary information about the most recent revision of the artifact. For GitHub and AWS CodeCommit repositories, the commit message. For Amazon S3 buckets or actions, the user-provided content of a codepipeline-artifact-revision-summary key specified in the object metadata.
     */
    revisionSummary?: RevisionSummary;
    /**
     * The date and time when the most recent revision of the artifact was created, in timestamp format.
     */
    created?: Timestamp;
    /**
     * The commit ID for the artifact revision. For artifacts stored in GitHub or AWS CodeCommit repositories, the commit ID is linked to a commit details page.
     */
    revisionUrl?: Url;
  }
  export type ArtifactRevisionList = ArtifactRevision[];
  export interface ArtifactStore {
    /**
     * The type of the artifact store, such as S3.
     */
    type: ArtifactStoreType;
    /**
     * The Amazon S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder within the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any Amazon S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts.
     */
    location: ArtifactStoreLocation;
    /**
     * The encryption key used to encrypt the data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. If this is undefined, the default key for Amazon S3 is used.
     */
    encryptionKey?: EncryptionKey;
  }
  export type ArtifactStoreLocation = string;
  export type ArtifactStoreType = "S3"|string;
  export interface BlockerDeclaration {
    /**
     * Reserved for future use.
     */
    name: BlockerName;
    /**
     * Reserved for future use.
     */
    type: BlockerType;
  }
  export type BlockerName = string;
  export type BlockerType = "Schedule"|string;
  export type Boolean = boolean;
  export type ClientId = string;
  export type ClientToken = string;
  export type Code = string;
  export type ContinuationToken = string;
  export interface CreateCustomActionTypeInput {
    /**
     * The category of the custom action, such as a build action or a test action.  Although Source and Approval are listed as valid values, they are not currently functional. These values are reserved for future use. 
     */
    category: ActionCategory;
    /**
     * The provider of the service used in the custom action, such as AWS CodeDeploy.
     */
    provider: ActionProvider;
    /**
     * The version identifier of the custom action.
     */
    version: Version;
    /**
     * Returns information about the settings for an action type.
     */
    settings?: ActionTypeSettings;
    /**
     * The configuration properties for the custom action.  You can refer to a name in the configuration properties of the custom action within the URL templates by following the format of {Config:name}, as long as the configuration property is both required and not secret. For more information, see Create a Custom Action for a Pipeline. 
     */
    configurationProperties?: ActionConfigurationPropertyList;
    /**
     * The details of the input artifact for the action, such as its commit ID.
     */
    inputArtifactDetails: ArtifactDetails;
    /**
     * The details of the output artifact of the action, such as its commit ID.
     */
    outputArtifactDetails: ArtifactDetails;
  }
  export interface CreateCustomActionTypeOutput {
    /**
     * Returns information about the details of an action type.
     */
    actionType: ActionType;
  }
  export interface CreatePipelineInput {
    /**
     * Represents the structure of actions and stages to be performed in the pipeline. 
     */
    pipeline: PipelineDeclaration;
  }
  export interface CreatePipelineOutput {
    /**
     * Represents the structure of actions and stages to be performed in the pipeline. 
     */
    pipeline?: PipelineDeclaration;
  }
  export interface CurrentRevision {
    /**
     * The revision ID of the current version of an artifact.
     */
    revision: Revision;
    /**
     * The change identifier for the current revision.
     */
    changeIdentifier: RevisionChangeIdentifier;
    /**
     * The date and time when the most recent revision of the artifact was created, in timestamp format.
     */
    created?: Time;
    /**
     * The summary of the most recent revision of the artifact.
     */
    revisionSummary?: RevisionSummary;
  }
  export interface DeleteCustomActionTypeInput {
    /**
     * The category of the custom action that you want to delete, such as source or deploy.
     */
    category: ActionCategory;
    /**
     * The provider of the service used in the custom action, such as AWS CodeDeploy.
     */
    provider: ActionProvider;
    /**
     * The version of the custom action to delete.
     */
    version: Version;
  }
  export interface DeletePipelineInput {
    /**
     * The name of the pipeline to be deleted.
     */
    name: PipelineName;
  }
  export type Description = string;
  export interface DisableStageTransitionInput {
    /**
     * The name of the pipeline in which you want to disable the flow of artifacts from one stage to another.
     */
    pipelineName: PipelineName;
    /**
     * The name of the stage where you want to disable the inbound or outbound transition of artifacts.
     */
    stageName: StageName;
    /**
     * Specifies whether artifacts will be prevented from transitioning into the stage and being processed by the actions in that stage (inbound), or prevented from transitioning from the stage after they have been processed by the actions in that stage (outbound).
     */
    transitionType: StageTransitionType;
    /**
     * The reason given to the user why a stage is disabled, such as waiting for manual approval or manual tests. This message is displayed in the pipeline console UI.
     */
    reason: DisabledReason;
  }
  export type DisabledReason = string;
  export interface EnableStageTransitionInput {
    /**
     * The name of the pipeline in which you want to enable the flow of artifacts from one stage to another.
     */
    pipelineName: PipelineName;
    /**
     * The name of the stage where you want to enable the transition of artifacts, either into the stage (inbound) or from that stage to the next stage (outbound).
     */
    stageName: StageName;
    /**
     * Specifies whether artifacts will be allowed to enter the stage and be processed by the actions in that stage (inbound) or whether already-processed artifacts will be allowed to transition to the next stage (outbound).
     */
    transitionType: StageTransitionType;
  }
  export type Enabled = boolean;
  export interface EncryptionKey {
    /**
     * The ID used to identify the key. For an AWS KMS key, this is the key ID or key ARN.
     */
    id: EncryptionKeyId;
    /**
     * The type of encryption key, such as an AWS Key Management Service (AWS KMS) key. When creating or updating a pipeline, the value must be set to 'KMS'.
     */
    type: EncryptionKeyType;
  }
  export type EncryptionKeyId = string;
  export type EncryptionKeyType = "KMS"|string;
  export interface ErrorDetails {
    /**
     * The system ID or error number code of the error.
     */
    code?: Code;
    /**
     * The text of the error message.
     */
    message?: Message;
  }
  export interface ExecutionDetails {
    /**
     * The summary of the current status of the actions.
     */
    summary?: ExecutionSummary;
    /**
     * The system-generated unique ID of this action used to identify this job worker in any external systems, such as AWS CodeDeploy.
     */
    externalExecutionId?: ExecutionId;
    /**
     * The percentage of work completed on the action, represented on a scale of zero to one hundred percent.
     */
    percentComplete?: Percentage;
  }
  export type ExecutionId = string;
  export type ExecutionSummary = string;
  export interface FailureDetails {
    /**
     * The type of the failure.
     */
    type: FailureType;
    /**
     * The message about the failure.
     */
    message: Message;
    /**
     * The external ID of the run of the action that failed.
     */
    externalExecutionId?: ExecutionId;
  }
  export type FailureType = "JobFailed"|"ConfigurationError"|"PermissionError"|"RevisionOutOfSync"|"RevisionUnavailable"|"SystemUnavailable"|string;
  export interface GetJobDetailsInput {
    /**
     * The unique system-generated ID for the job.
     */
    jobId: JobId;
  }
  export interface GetJobDetailsOutput {
    /**
     * The details of the job.  If AWSSessionCredentials is used, a long-running job can call GetJobDetails again to obtain new credentials. 
     */
    jobDetails?: JobDetails;
  }
  export interface GetPipelineExecutionInput {
    /**
     * The name of the pipeline about which you want to get execution details.
     */
    pipelineName: PipelineName;
    /**
     * The ID of the pipeline execution about which you want to get execution details.
     */
    pipelineExecutionId: PipelineExecutionId;
  }
  export interface GetPipelineExecutionOutput {
    /**
     * Represents information about the execution of a pipeline.
     */
    pipelineExecution?: PipelineExecution;
  }
  export interface GetPipelineInput {
    /**
     * The name of the pipeline for which you want to get information. Pipeline names must be unique under an Amazon Web Services (AWS) user account.
     */
    name: PipelineName;
    /**
     * The version number of the pipeline. If you do not specify a version, defaults to the most current version.
     */
    version?: PipelineVersion;
  }
  export interface GetPipelineOutput {
    /**
     * Represents the structure of actions and stages to be performed in the pipeline. 
     */
    pipeline?: PipelineDeclaration;
    /**
     * Represents the pipeline metadata information returned as part of the output of a GetPipeline action.
     */
    metadata?: PipelineMetadata;
  }
  export interface GetPipelineStateInput {
    /**
     * The name of the pipeline about which you want to get information.
     */
    name: PipelineName;
  }
  export interface GetPipelineStateOutput {
    /**
     * The name of the pipeline for which you want to get the state.
     */
    pipelineName?: PipelineName;
    /**
     * The version number of the pipeline.  A newly-created pipeline is always assigned a version number of 1. 
     */
    pipelineVersion?: PipelineVersion;
    /**
     * A list of the pipeline stage output information, including stage name, state, most recent run details, whether the stage is disabled, and other data.
     */
    stageStates?: StageStateList;
    /**
     * The date and time the pipeline was created, in timestamp format.
     */
    created?: Timestamp;
    /**
     * The date and time the pipeline was last updated, in timestamp format.
     */
    updated?: Timestamp;
  }
  export interface GetThirdPartyJobDetailsInput {
    /**
     * The unique system-generated ID used for identifying the job.
     */
    jobId: ThirdPartyJobId;
    /**
     * The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.
     */
    clientToken: ClientToken;
  }
  export interface GetThirdPartyJobDetailsOutput {
    /**
     * The details of the job, including any protected values defined for the job.
     */
    jobDetails?: ThirdPartyJobDetails;
  }
  export interface InputArtifact {
    /**
     * The name of the artifact to be worked on, for example, "My App". The input artifact of an action must exactly match the output artifact declared in a preceding action, but the input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions.
     */
    name: ArtifactName;
  }
  export type InputArtifactList = InputArtifact[];
  export interface Job {
    /**
     * The unique system-generated ID of the job.
     */
    id?: JobId;
    /**
     * Additional data about a job.
     */
    data?: JobData;
    /**
     * A system-generated random number that AWS CodePipeline uses to ensure that the job is being worked on by only one job worker. Use this number in an AcknowledgeJob request.
     */
    nonce?: Nonce;
    /**
     * The ID of the AWS account to use when performing the job.
     */
    accountId?: AccountId;
  }
  export interface JobData {
    /**
     * Represents information about an action type.
     */
    actionTypeId?: ActionTypeId;
    /**
     * Represents information about an action configuration.
     */
    actionConfiguration?: ActionConfiguration;
    /**
     * Represents information about a pipeline to a job worker.
     */
    pipelineContext?: PipelineContext;
    /**
     * The artifact supplied to the job.
     */
    inputArtifacts?: ArtifactList;
    /**
     * The output of the job.
     */
    outputArtifacts?: ArtifactList;
    /**
     * Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the Amazon S3 bucket used to store artifact for the pipeline in AWS CodePipeline.
     */
    artifactCredentials?: AWSSessionCredentials;
    /**
     * A system-generated token, such as a AWS CodeDeploy deployment ID, that a job requires in order to continue the job asynchronously.
     */
    continuationToken?: ContinuationToken;
    /**
     * Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. 
     */
    encryptionKey?: EncryptionKey;
  }
  export interface JobDetails {
    /**
     * The unique system-generated ID of the job.
     */
    id?: JobId;
    /**
     * Represents additional information about a job required for a job worker to complete the job. 
     */
    data?: JobData;
    /**
     * The AWS account ID associated with the job.
     */
    accountId?: AccountId;
  }
  export type JobId = string;
  export type JobList = Job[];
  export type JobStatus = "Created"|"Queued"|"Dispatched"|"InProgress"|"TimedOut"|"Succeeded"|"Failed"|string;
  export type LastChangedAt = Date;
  export type LastChangedBy = string;
  export type LastUpdatedBy = string;
  export interface ListActionTypesInput {
    /**
     * Filters the list of action types to those created by a specified entity.
     */
    actionOwnerFilter?: ActionOwner;
    /**
     * An identifier that was returned from the previous list action types call, which can be used to return the next set of action types in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListActionTypesOutput {
    /**
     * Provides details of the action types.
     */
    actionTypes: ActionTypeList;
    /**
     * If the amount of returned information is significantly large, an identifier is also returned which can be used in a subsequent list action types call to return the next set of action types in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListPipelineExecutionsInput {
    /**
     * The name of the pipeline for which you want to get execution summary information.
     */
    pipelineName: PipelineName;
    /**
     * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value. The available pipeline execution history is limited to the most recent 12 months, based on pipeline execution start times. Default value is 100.
     */
    maxResults?: MaxResults;
    /**
     * The token that was returned from the previous ListPipelineExecutions call, which can be used to return the next set of pipeline executions in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListPipelineExecutionsOutput {
    /**
     * A list of executions in the history of a pipeline.
     */
    pipelineExecutionSummaries?: PipelineExecutionSummaryList;
    /**
     * A token that can be used in the next ListPipelineExecutions call. To view all items in the list, continue to call this operation with each subsequent token until no more nextToken values are returned.
     */
    nextToken?: NextToken;
  }
  export interface ListPipelinesInput {
    /**
     * An identifier that was returned from the previous list pipelines call, which can be used to return the next set of pipelines in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListPipelinesOutput {
    /**
     * The list of pipelines.
     */
    pipelines?: PipelineList;
    /**
     * If the amount of returned information is significantly large, an identifier is also returned which can be used in a subsequent list pipelines call to return the next set of pipelines in the list.
     */
    nextToken?: NextToken;
  }
  export type MaxBatchSize = number;
  export type MaxResults = number;
  export type MaximumArtifactCount = number;
  export type Message = string;
  export type MinimumArtifactCount = number;
  export type NextToken = string;
  export type Nonce = string;
  export interface OutputArtifact {
    /**
     * The name of the output of an artifact, such as "My App". The input artifact of an action must exactly match the output artifact declared in a preceding action, but the input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions. Output artifact names must be unique within a pipeline.
     */
    name: ArtifactName;
  }
  export type OutputArtifactList = OutputArtifact[];
  export type Percentage = number;
  export type PipelineArn = string;
  export interface PipelineContext {
    /**
     * The name of the pipeline. This is a user-specified value. Pipeline names must be unique across all pipeline names under an Amazon Web Services account.
     */
    pipelineName?: PipelineName;
    /**
     * The stage of the pipeline.
     */
    stage?: StageContext;
    /**
     * The context of an action to a job worker within the stage of a pipeline.
     */
    action?: ActionContext;
  }
  export interface PipelineDeclaration {
    /**
     * The name of the action to be performed.
     */
    name: PipelineName;
    /**
     * The Amazon Resource Name (ARN) for AWS CodePipeline to use to either perform actions with no actionRoleArn, or to use to assume roles for actions with an actionRoleArn.
     */
    roleArn: RoleArn;
    /**
     * Represents information about the Amazon S3 bucket where artifacts are stored for the pipeline. 
     */
    artifactStore: ArtifactStore;
    /**
     * The stage in which to perform the action.
     */
    stages: PipelineStageDeclarationList;
    /**
     * The version number of the pipeline. A new pipeline always has a version number of 1. This number is automatically incremented when a pipeline is updated.
     */
    version?: PipelineVersion;
  }
  export interface PipelineExecution {
    /**
     * The name of the pipeline that was executed.
     */
    pipelineName?: PipelineName;
    /**
     * The version number of the pipeline that was executed.
     */
    pipelineVersion?: PipelineVersion;
    /**
     * The ID of the pipeline execution.
     */
    pipelineExecutionId?: PipelineExecutionId;
    /**
     * The status of the pipeline execution.   InProgress: The pipeline execution is currently running.   Succeeded: The pipeline execution was completed successfully.    Superseded: While this pipeline execution was waiting for the next stage to be completed, a newer pipeline execution advanced and continued through the pipeline instead.    Failed: The pipeline execution was not completed successfully.  
     */
    status?: PipelineExecutionStatus;
    /**
     * A list of ArtifactRevision objects included in a pipeline execution.
     */
    artifactRevisions?: ArtifactRevisionList;
  }
  export type PipelineExecutionId = string;
  export type PipelineExecutionStatus = "InProgress"|"Succeeded"|"Superseded"|"Failed"|string;
  export interface PipelineExecutionSummary {
    /**
     * The ID of the pipeline execution.
     */
    pipelineExecutionId?: PipelineExecutionId;
    /**
     * The status of the pipeline execution.   InProgress: The pipeline execution is currently running.   Succeeded: The pipeline execution was completed successfully.    Superseded: While this pipeline execution was waiting for the next stage to be completed, a newer pipeline execution advanced and continued through the pipeline instead.    Failed: The pipeline execution was not completed successfully.  
     */
    status?: PipelineExecutionStatus;
    /**
     * The date and time when the pipeline execution began, in timestamp format.
     */
    startTime?: Timestamp;
    /**
     * The date and time of the last change to the pipeline execution, in timestamp format.
     */
    lastUpdateTime?: Timestamp;
  }
  export type PipelineExecutionSummaryList = PipelineExecutionSummary[];
  export type PipelineList = PipelineSummary[];
  export interface PipelineMetadata {
    /**
     * The Amazon Resource Name (ARN) of the pipeline.
     */
    pipelineArn?: PipelineArn;
    /**
     * The date and time the pipeline was created, in timestamp format.
     */
    created?: Timestamp;
    /**
     * The date and time the pipeline was last updated, in timestamp format.
     */
    updated?: Timestamp;
  }
  export type PipelineName = string;
  export type PipelineStageDeclarationList = StageDeclaration[];
  export interface PipelineSummary {
    /**
     * The name of the pipeline.
     */
    name?: PipelineName;
    /**
     * The version number of the pipeline.
     */
    version?: PipelineVersion;
    /**
     * The date and time the pipeline was created, in timestamp format.
     */
    created?: Timestamp;
    /**
     * The date and time of the last update to the pipeline, in timestamp format.
     */
    updated?: Timestamp;
  }
  export type PipelineVersion = number;
  export interface PollForJobsInput {
    /**
     * Represents information about an action type.
     */
    actionTypeId: ActionTypeId;
    /**
     * The maximum number of jobs to return in a poll for jobs call.
     */
    maxBatchSize?: MaxBatchSize;
    /**
     * A map of property names and values. For an action type with no queryable properties, this value must be null or an empty map. For an action type with a queryable property, you must supply that property as a key in the map. Only jobs whose action configuration matches the mapped value will be returned.
     */
    queryParam?: QueryParamMap;
  }
  export interface PollForJobsOutput {
    /**
     * Information about the jobs to take action on.
     */
    jobs?: JobList;
  }
  export interface PollForThirdPartyJobsInput {
    /**
     * Represents information about an action type.
     */
    actionTypeId: ActionTypeId;
    /**
     * The maximum number of jobs to return in a poll for jobs call.
     */
    maxBatchSize?: MaxBatchSize;
  }
  export interface PollForThirdPartyJobsOutput {
    /**
     * Information about the jobs to take action on.
     */
    jobs?: ThirdPartyJobList;
  }
  export interface PutActionRevisionInput {
    /**
     * The name of the pipeline that will start processing the revision to the source.
     */
    pipelineName: PipelineName;
    /**
     * The name of the stage that contains the action that will act upon the revision.
     */
    stageName: StageName;
    /**
     * The name of the action that will process the revision.
     */
    actionName: ActionName;
    /**
     * Represents information about the version (or revision) of an action.
     */
    actionRevision: ActionRevision;
  }
  export interface PutActionRevisionOutput {
    /**
     * Indicates whether the artifact revision was previously used in an execution of the specified pipeline.
     */
    newRevision?: Boolean;
    /**
     * The ID of the current workflow state of the pipeline.
     */
    pipelineExecutionId?: PipelineExecutionId;
  }
  export interface PutApprovalResultInput {
    /**
     * The name of the pipeline that contains the action. 
     */
    pipelineName: PipelineName;
    /**
     * The name of the stage that contains the action.
     */
    stageName: StageName;
    /**
     * The name of the action for which approval is requested.
     */
    actionName: ActionName;
    /**
     * Represents information about the result of the approval request.
     */
    result: ApprovalResult;
    /**
     * The system-generated token used to identify a unique approval request. The token for each open approval request can be obtained using the GetPipelineState action and is used to validate that the approval request corresponding to this token is still valid.
     */
    token: ApprovalToken;
  }
  export interface PutApprovalResultOutput {
    /**
     * The timestamp showing when the approval or rejection was submitted.
     */
    approvedAt?: Timestamp;
  }
  export interface PutJobFailureResultInput {
    /**
     * The unique system-generated ID of the job that failed. This is the same ID returned from PollForJobs.
     */
    jobId: JobId;
    /**
     * The details about the failure of a job.
     */
    failureDetails: FailureDetails;
  }
  export interface PutJobSuccessResultInput {
    /**
     * The unique system-generated ID of the job that succeeded. This is the same ID returned from PollForJobs.
     */
    jobId: JobId;
    /**
     * The ID of the current revision of the artifact successfully worked upon by the job.
     */
    currentRevision?: CurrentRevision;
    /**
     * A token generated by a job worker, such as an AWS CodeDeploy deployment ID, that a successful job provides to identify a custom action in progress. Future jobs will use this token in order to identify the running instance of the action. It can be reused to return additional information about the progress of the custom action. When the action is complete, no continuation token should be supplied.
     */
    continuationToken?: ContinuationToken;
    /**
     * The execution details of the successful job, such as the actions taken by the job worker.
     */
    executionDetails?: ExecutionDetails;
  }
  export interface PutThirdPartyJobFailureResultInput {
    /**
     * The ID of the job that failed. This is the same ID returned from PollForThirdPartyJobs.
     */
    jobId: ThirdPartyJobId;
    /**
     * The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.
     */
    clientToken: ClientToken;
    /**
     * Represents information about failure details.
     */
    failureDetails: FailureDetails;
  }
  export interface PutThirdPartyJobSuccessResultInput {
    /**
     * The ID of the job that successfully completed. This is the same ID returned from PollForThirdPartyJobs.
     */
    jobId: ThirdPartyJobId;
    /**
     * The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.
     */
    clientToken: ClientToken;
    /**
     * Represents information about a current revision.
     */
    currentRevision?: CurrentRevision;
    /**
     * A token generated by a job worker, such as an AWS CodeDeploy deployment ID, that a successful job provides to identify a partner action in progress. Future jobs will use this token in order to identify the running instance of the action. It can be reused to return additional information about the progress of the partner action. When the action is complete, no continuation token should be supplied.
     */
    continuationToken?: ContinuationToken;
    /**
     * The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline. 
     */
    executionDetails?: ExecutionDetails;
  }
  export type QueryParamMap = {[key: string]: ActionConfigurationQueryableValue};
  export interface RetryStageExecutionInput {
    /**
     * The name of the pipeline that contains the failed stage.
     */
    pipelineName: PipelineName;
    /**
     * The name of the failed stage to be retried.
     */
    stageName: StageName;
    /**
     * The ID of the pipeline execution in the failed stage to be retried. Use the GetPipelineState action to retrieve the current pipelineExecutionId of the failed stage
     */
    pipelineExecutionId: PipelineExecutionId;
    /**
     * The scope of the retry attempt. Currently, the only supported value is FAILED_ACTIONS.
     */
    retryMode: StageRetryMode;
  }
  export interface RetryStageExecutionOutput {
    /**
     * The ID of the current workflow execution in the failed stage.
     */
    pipelineExecutionId?: PipelineExecutionId;
  }
  export type Revision = string;
  export type RevisionChangeIdentifier = string;
  export type RevisionSummary = string;
  export type RoleArn = string;
  export interface S3ArtifactLocation {
    /**
     * The name of the Amazon S3 bucket.
     */
    bucketName: S3BucketName;
    /**
     * The key of the object in the Amazon S3 bucket, which uniquely identifies the object in the bucket.
     */
    objectKey: S3ObjectKey;
  }
  export type S3BucketName = string;
  export type S3ObjectKey = string;
  export type SecretAccessKey = string;
  export type SessionToken = string;
  export type StageActionDeclarationList = ActionDeclaration[];
  export type StageBlockerDeclarationList = BlockerDeclaration[];
  export interface StageContext {
    /**
     * The name of the stage.
     */
    name?: StageName;
  }
  export interface StageDeclaration {
    /**
     * The name of the stage.
     */
    name: StageName;
    /**
     * Reserved for future use.
     */
    blockers?: StageBlockerDeclarationList;
    /**
     * The actions included in a stage.
     */
    actions: StageActionDeclarationList;
  }
  export interface StageExecution {
    /**
     * The ID of the pipeline execution associated with the stage.
     */
    pipelineExecutionId: PipelineExecutionId;
    /**
     * The status of the stage, or for a completed stage, the last status of the stage.
     */
    status: StageExecutionStatus;
  }
  export type StageExecutionStatus = "InProgress"|"Failed"|"Succeeded"|string;
  export type StageName = string;
  export type StageRetryMode = "FAILED_ACTIONS"|string;
  export interface StageState {
    /**
     * The name of the stage.
     */
    stageName?: StageName;
    /**
     * The state of the inbound transition, which is either enabled or disabled.
     */
    inboundTransitionState?: TransitionState;
    /**
     * The state of the stage.
     */
    actionStates?: ActionStateList;
    /**
     * Information about the latest execution in the stage, including its ID and status.
     */
    latestExecution?: StageExecution;
  }
  export type StageStateList = StageState[];
  export type StageTransitionType = "Inbound"|"Outbound"|string;
  export interface StartPipelineExecutionInput {
    /**
     * The name of the pipeline to start.
     */
    name: PipelineName;
  }
  export interface StartPipelineExecutionOutput {
    /**
     * The unique system-generated ID of the pipeline execution that was started.
     */
    pipelineExecutionId?: PipelineExecutionId;
  }
  export interface ThirdPartyJob {
    /**
     * The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.
     */
    clientId?: ClientId;
    /**
     * The identifier used to identify the job in AWS CodePipeline.
     */
    jobId?: JobId;
  }
  export interface ThirdPartyJobData {
    /**
     * Represents information about an action type.
     */
    actionTypeId?: ActionTypeId;
    /**
     * Represents information about an action configuration.
     */
    actionConfiguration?: ActionConfiguration;
    /**
     * Represents information about a pipeline to a job worker.
     */
    pipelineContext?: PipelineContext;
    /**
     * The name of the artifact that will be worked upon by the action, if any. This name might be system-generated, such as "MyApp", or might be defined by the user when the action is created. The input artifact name must match the name of an output artifact generated by an action in an earlier action or stage of the pipeline.
     */
    inputArtifacts?: ArtifactList;
    /**
     * The name of the artifact that will be the result of the action, if any. This name might be system-generated, such as "MyBuiltApp", or might be defined by the user when the action is created.
     */
    outputArtifacts?: ArtifactList;
    /**
     * Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the Amazon S3 bucket used to store artifact for the pipeline in AWS CodePipeline. 
     */
    artifactCredentials?: AWSSessionCredentials;
    /**
     * A system-generated token, such as a AWS CodeDeploy deployment ID, that a job requires in order to continue the job asynchronously.
     */
    continuationToken?: ContinuationToken;
    /**
     * The encryption key used to encrypt and decrypt data in the artifact store for the pipeline, such as an AWS Key Management Service (AWS KMS) key. This is optional and might not be present.
     */
    encryptionKey?: EncryptionKey;
  }
  export interface ThirdPartyJobDetails {
    /**
     * The identifier used to identify the job details in AWS CodePipeline.
     */
    id?: ThirdPartyJobId;
    /**
     * The data to be returned by the third party job worker.
     */
    data?: ThirdPartyJobData;
    /**
     * A system-generated random number that AWS CodePipeline uses to ensure that the job is being worked on by only one job worker. Use this number in an AcknowledgeThirdPartyJob request.
     */
    nonce?: Nonce;
  }
  export type ThirdPartyJobId = string;
  export type ThirdPartyJobList = ThirdPartyJob[];
  export type Time = Date;
  export type Timestamp = Date;
  export interface TransitionState {
    /**
     * Whether the transition between stages is enabled (true) or disabled (false).
     */
    enabled?: Enabled;
    /**
     * The ID of the user who last changed the transition state.
     */
    lastChangedBy?: LastChangedBy;
    /**
     * The timestamp when the transition state was last changed.
     */
    lastChangedAt?: LastChangedAt;
    /**
     * The user-specified reason why the transition between two stages of a pipeline was disabled.
     */
    disabledReason?: DisabledReason;
  }
  export interface UpdatePipelineInput {
    /**
     * The name of the pipeline to be updated.
     */
    pipeline: PipelineDeclaration;
  }
  export interface UpdatePipelineOutput {
    /**
     * The structure of the updated pipeline.
     */
    pipeline?: PipelineDeclaration;
  }
  export type Url = string;
  export type UrlTemplate = string;
  export type Version = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-07-09"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CodePipeline client.
   */
  export import Types = CodePipeline;
}
export = CodePipeline;
