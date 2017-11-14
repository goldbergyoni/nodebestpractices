import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class DataPipeline extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DataPipeline.Types.ClientConfiguration)
  config: Config & DataPipeline.Types.ClientConfiguration;
  /**
   * Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails. If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call DeactivatePipeline. To activate a finished pipeline, modify the end date for the pipeline and then activate it.
   */
  activatePipeline(params: DataPipeline.Types.ActivatePipelineInput, callback?: (err: AWSError, data: DataPipeline.Types.ActivatePipelineOutput) => void): Request<DataPipeline.Types.ActivatePipelineOutput, AWSError>;
  /**
   * Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails. If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call DeactivatePipeline. To activate a finished pipeline, modify the end date for the pipeline and then activate it.
   */
  activatePipeline(callback?: (err: AWSError, data: DataPipeline.Types.ActivatePipelineOutput) => void): Request<DataPipeline.Types.ActivatePipelineOutput, AWSError>;
  /**
   * Adds or modifies tags for the specified pipeline.
   */
  addTags(params: DataPipeline.Types.AddTagsInput, callback?: (err: AWSError, data: DataPipeline.Types.AddTagsOutput) => void): Request<DataPipeline.Types.AddTagsOutput, AWSError>;
  /**
   * Adds or modifies tags for the specified pipeline.
   */
  addTags(callback?: (err: AWSError, data: DataPipeline.Types.AddTagsOutput) => void): Request<DataPipeline.Types.AddTagsOutput, AWSError>;
  /**
   * Creates a new, empty pipeline. Use PutPipelineDefinition to populate the pipeline.
   */
  createPipeline(params: DataPipeline.Types.CreatePipelineInput, callback?: (err: AWSError, data: DataPipeline.Types.CreatePipelineOutput) => void): Request<DataPipeline.Types.CreatePipelineOutput, AWSError>;
  /**
   * Creates a new, empty pipeline. Use PutPipelineDefinition to populate the pipeline.
   */
  createPipeline(callback?: (err: AWSError, data: DataPipeline.Types.CreatePipelineOutput) => void): Request<DataPipeline.Types.CreatePipelineOutput, AWSError>;
  /**
   * Deactivates the specified running pipeline. The pipeline is set to the DEACTIVATING state until the deactivation process completes. To resume a deactivated pipeline, use ActivatePipeline. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.
   */
  deactivatePipeline(params: DataPipeline.Types.DeactivatePipelineInput, callback?: (err: AWSError, data: DataPipeline.Types.DeactivatePipelineOutput) => void): Request<DataPipeline.Types.DeactivatePipelineOutput, AWSError>;
  /**
   * Deactivates the specified running pipeline. The pipeline is set to the DEACTIVATING state until the deactivation process completes. To resume a deactivated pipeline, use ActivatePipeline. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.
   */
  deactivatePipeline(callback?: (err: AWSError, data: DataPipeline.Types.DeactivatePipelineOutput) => void): Request<DataPipeline.Types.DeactivatePipelineOutput, AWSError>;
  /**
   * Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners. Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call SetStatus with the status set to PAUSE on individual components. Components that are paused by SetStatus can be resumed.
   */
  deletePipeline(params: DataPipeline.Types.DeletePipelineInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners. Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call SetStatus with the status set to PAUSE on individual components. Components that are paused by SetStatus can be resumed.
   */
  deletePipeline(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.
   */
  describeObjects(params: DataPipeline.Types.DescribeObjectsInput, callback?: (err: AWSError, data: DataPipeline.Types.DescribeObjectsOutput) => void): Request<DataPipeline.Types.DescribeObjectsOutput, AWSError>;
  /**
   * Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.
   */
  describeObjects(callback?: (err: AWSError, data: DataPipeline.Types.DescribeObjectsOutput) => void): Request<DataPipeline.Types.DescribeObjectsOutput, AWSError>;
  /**
   * Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions. To retrieve the full pipeline definition instead of metadata about the pipeline, call GetPipelineDefinition.
   */
  describePipelines(params: DataPipeline.Types.DescribePipelinesInput, callback?: (err: AWSError, data: DataPipeline.Types.DescribePipelinesOutput) => void): Request<DataPipeline.Types.DescribePipelinesOutput, AWSError>;
  /**
   * Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions. To retrieve the full pipeline definition instead of metadata about the pipeline, call GetPipelineDefinition.
   */
  describePipelines(callback?: (err: AWSError, data: DataPipeline.Types.DescribePipelinesOutput) => void): Request<DataPipeline.Types.DescribePipelinesOutput, AWSError>;
  /**
   * Task runners call EvaluateExpression to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.
   */
  evaluateExpression(params: DataPipeline.Types.EvaluateExpressionInput, callback?: (err: AWSError, data: DataPipeline.Types.EvaluateExpressionOutput) => void): Request<DataPipeline.Types.EvaluateExpressionOutput, AWSError>;
  /**
   * Task runners call EvaluateExpression to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.
   */
  evaluateExpression(callback?: (err: AWSError, data: DataPipeline.Types.EvaluateExpressionOutput) => void): Request<DataPipeline.Types.EvaluateExpressionOutput, AWSError>;
  /**
   * Gets the definition of the specified pipeline. You can call GetPipelineDefinition to retrieve the pipeline definition that you provided using PutPipelineDefinition.
   */
  getPipelineDefinition(params: DataPipeline.Types.GetPipelineDefinitionInput, callback?: (err: AWSError, data: DataPipeline.Types.GetPipelineDefinitionOutput) => void): Request<DataPipeline.Types.GetPipelineDefinitionOutput, AWSError>;
  /**
   * Gets the definition of the specified pipeline. You can call GetPipelineDefinition to retrieve the pipeline definition that you provided using PutPipelineDefinition.
   */
  getPipelineDefinition(callback?: (err: AWSError, data: DataPipeline.Types.GetPipelineDefinitionOutput) => void): Request<DataPipeline.Types.GetPipelineDefinitionOutput, AWSError>;
  /**
   * Lists the pipeline identifiers for all active pipelines that you have permission to access.
   */
  listPipelines(params: DataPipeline.Types.ListPipelinesInput, callback?: (err: AWSError, data: DataPipeline.Types.ListPipelinesOutput) => void): Request<DataPipeline.Types.ListPipelinesOutput, AWSError>;
  /**
   * Lists the pipeline identifiers for all active pipelines that you have permission to access.
   */
  listPipelines(callback?: (err: AWSError, data: DataPipeline.Types.ListPipelinesOutput) => void): Request<DataPipeline.Types.ListPipelinesOutput, AWSError>;
  /**
   * Task runners call PollForTask to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the workerGroup parameter. The task returned can come from any of the pipelines that match the workerGroup value passed in by the task runner and that was launched using the IAM user credentials specified by the task runner. If tasks are ready in the work queue, PollForTask returns a response immediately. If no tasks are available in the queue, PollForTask uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task runner should not call PollForTask again on the same workerGroup until it receives a response, and this can take up to 90 seconds. 
   */
  pollForTask(params: DataPipeline.Types.PollForTaskInput, callback?: (err: AWSError, data: DataPipeline.Types.PollForTaskOutput) => void): Request<DataPipeline.Types.PollForTaskOutput, AWSError>;
  /**
   * Task runners call PollForTask to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the workerGroup parameter. The task returned can come from any of the pipelines that match the workerGroup value passed in by the task runner and that was launched using the IAM user credentials specified by the task runner. If tasks are ready in the work queue, PollForTask returns a response immediately. If no tasks are available in the queue, PollForTask uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task runner should not call PollForTask again on the same workerGroup until it receives a response, and this can take up to 90 seconds. 
   */
  pollForTask(callback?: (err: AWSError, data: DataPipeline.Types.PollForTaskOutput) => void): Request<DataPipeline.Types.PollForTaskOutput, AWSError>;
  /**
   * Adds tasks, schedules, and preconditions to the specified pipeline. You can use PutPipelineDefinition to populate a new pipeline.  PutPipelineDefinition also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline.   An object is missing a name or identifier field. A string or reference field is empty. The number of objects in the pipeline exceeds the maximum allowed objects. The pipeline is in a FINISHED state.   Pipeline object definitions are passed to the PutPipelineDefinition action and returned by the GetPipelineDefinition action. 
   */
  putPipelineDefinition(params: DataPipeline.Types.PutPipelineDefinitionInput, callback?: (err: AWSError, data: DataPipeline.Types.PutPipelineDefinitionOutput) => void): Request<DataPipeline.Types.PutPipelineDefinitionOutput, AWSError>;
  /**
   * Adds tasks, schedules, and preconditions to the specified pipeline. You can use PutPipelineDefinition to populate a new pipeline.  PutPipelineDefinition also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline.   An object is missing a name or identifier field. A string or reference field is empty. The number of objects in the pipeline exceeds the maximum allowed objects. The pipeline is in a FINISHED state.   Pipeline object definitions are passed to the PutPipelineDefinition action and returned by the GetPipelineDefinition action. 
   */
  putPipelineDefinition(callback?: (err: AWSError, data: DataPipeline.Types.PutPipelineDefinitionOutput) => void): Request<DataPipeline.Types.PutPipelineDefinitionOutput, AWSError>;
  /**
   * Queries the specified pipeline for the names of objects that match the specified set of conditions.
   */
  queryObjects(params: DataPipeline.Types.QueryObjectsInput, callback?: (err: AWSError, data: DataPipeline.Types.QueryObjectsOutput) => void): Request<DataPipeline.Types.QueryObjectsOutput, AWSError>;
  /**
   * Queries the specified pipeline for the names of objects that match the specified set of conditions.
   */
  queryObjects(callback?: (err: AWSError, data: DataPipeline.Types.QueryObjectsOutput) => void): Request<DataPipeline.Types.QueryObjectsOutput, AWSError>;
  /**
   * Removes existing tags from the specified pipeline.
   */
  removeTags(params: DataPipeline.Types.RemoveTagsInput, callback?: (err: AWSError, data: DataPipeline.Types.RemoveTagsOutput) => void): Request<DataPipeline.Types.RemoveTagsOutput, AWSError>;
  /**
   * Removes existing tags from the specified pipeline.
   */
  removeTags(callback?: (err: AWSError, data: DataPipeline.Types.RemoveTagsOutput) => void): Request<DataPipeline.Types.RemoveTagsOutput, AWSError>;
  /**
   * Task runners call ReportTaskProgress when assigned a task to acknowledge that it has the task. If the web service does not receive this acknowledgement within 2 minutes, it assigns the task in a subsequent PollForTask call. After this initial acknowledgement, the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time from 15 minutes by specifying a reportProgressTimeout field in your pipeline. If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task and reassigns the task in a subsequent response to PollForTask. Task runners should call ReportTaskProgress every 60 seconds.
   */
  reportTaskProgress(params: DataPipeline.Types.ReportTaskProgressInput, callback?: (err: AWSError, data: DataPipeline.Types.ReportTaskProgressOutput) => void): Request<DataPipeline.Types.ReportTaskProgressOutput, AWSError>;
  /**
   * Task runners call ReportTaskProgress when assigned a task to acknowledge that it has the task. If the web service does not receive this acknowledgement within 2 minutes, it assigns the task in a subsequent PollForTask call. After this initial acknowledgement, the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time from 15 minutes by specifying a reportProgressTimeout field in your pipeline. If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task and reassigns the task in a subsequent response to PollForTask. Task runners should call ReportTaskProgress every 60 seconds.
   */
  reportTaskProgress(callback?: (err: AWSError, data: DataPipeline.Types.ReportTaskProgressOutput) => void): Request<DataPipeline.Types.ReportTaskProgressOutput, AWSError>;
  /**
   * Task runners call ReportTaskRunnerHeartbeat every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.
   */
  reportTaskRunnerHeartbeat(params: DataPipeline.Types.ReportTaskRunnerHeartbeatInput, callback?: (err: AWSError, data: DataPipeline.Types.ReportTaskRunnerHeartbeatOutput) => void): Request<DataPipeline.Types.ReportTaskRunnerHeartbeatOutput, AWSError>;
  /**
   * Task runners call ReportTaskRunnerHeartbeat every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.
   */
  reportTaskRunnerHeartbeat(callback?: (err: AWSError, data: DataPipeline.Types.ReportTaskRunnerHeartbeatOutput) => void): Request<DataPipeline.Types.ReportTaskRunnerHeartbeatOutput, AWSError>;
  /**
   * Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on FINISHED pipelines and attempting to do so returns InvalidRequestException.
   */
  setStatus(params: DataPipeline.Types.SetStatusInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on FINISHED pipelines and attempting to do so returns InvalidRequestException.
   */
  setStatus(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Task runners call SetTaskStatus to notify AWS Data Pipeline that a task is completed and provide information about the final status. A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call SetTaskStatus for tasks that are canceled by the web service during a call to ReportTaskProgress.
   */
  setTaskStatus(params: DataPipeline.Types.SetTaskStatusInput, callback?: (err: AWSError, data: DataPipeline.Types.SetTaskStatusOutput) => void): Request<DataPipeline.Types.SetTaskStatusOutput, AWSError>;
  /**
   * Task runners call SetTaskStatus to notify AWS Data Pipeline that a task is completed and provide information about the final status. A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call SetTaskStatus for tasks that are canceled by the web service during a call to ReportTaskProgress.
   */
  setTaskStatus(callback?: (err: AWSError, data: DataPipeline.Types.SetTaskStatusOutput) => void): Request<DataPipeline.Types.SetTaskStatusOutput, AWSError>;
  /**
   * Validates the specified pipeline definition to ensure that it is well formed and can be run without error.
   */
  validatePipelineDefinition(params: DataPipeline.Types.ValidatePipelineDefinitionInput, callback?: (err: AWSError, data: DataPipeline.Types.ValidatePipelineDefinitionOutput) => void): Request<DataPipeline.Types.ValidatePipelineDefinitionOutput, AWSError>;
  /**
   * Validates the specified pipeline definition to ensure that it is well formed and can be run without error.
   */
  validatePipelineDefinition(callback?: (err: AWSError, data: DataPipeline.Types.ValidatePipelineDefinitionOutput) => void): Request<DataPipeline.Types.ValidatePipelineDefinitionOutput, AWSError>;
}
declare namespace DataPipeline {
  export interface ActivatePipelineInput {
    /**
     * The ID of the pipeline.
     */
    pipelineId: id;
    /**
     * A list of parameter values to pass to the pipeline at activation.
     */
    parameterValues?: ParameterValueList;
    /**
     * The date and time to resume the pipeline. By default, the pipeline resumes from the last completed execution.
     */
    startTimestamp?: timestamp;
  }
  export interface ActivatePipelineOutput {
  }
  export interface AddTagsInput {
    /**
     * The ID of the pipeline.
     */
    pipelineId: id;
    /**
     * The tags to add, as key/value pairs.
     */
    tags: tagList;
  }
  export interface AddTagsOutput {
  }
  export interface CreatePipelineInput {
    /**
     * The name for the pipeline. You can use the same name for multiple pipelines associated with your AWS account, because AWS Data Pipeline assigns each pipeline a unique pipeline identifier.
     */
    name: id;
    /**
     * A unique identifier. This identifier is not the same as the pipeline identifier assigned by AWS Data Pipeline. You are responsible for defining the format and ensuring the uniqueness of this identifier. You use this parameter to ensure idempotency during repeated calls to CreatePipeline. For example, if the first call to CreatePipeline does not succeed, you can pass in the same unique identifier and pipeline name combination on a subsequent call to CreatePipeline. CreatePipeline ensures that if a pipeline already exists with the same name and unique identifier, a new pipeline is not created. Instead, you'll receive the pipeline identifier from the previous attempt. The uniqueness of the name and unique identifier combination is scoped to the AWS account or IAM user credentials.
     */
    uniqueId: id;
    /**
     * The description for the pipeline.
     */
    description?: string;
    /**
     * A list of tags to associate with the pipeline at creation. Tags let you control access to pipelines. For more information, see Controlling User Access to Pipelines in the AWS Data Pipeline Developer Guide.
     */
    tags?: tagList;
  }
  export interface CreatePipelineOutput {
    /**
     * The ID that AWS Data Pipeline assigns the newly created pipeline. For example, df-06372391ZG65EXAMPLE.
     */
    pipelineId: id;
  }
  export interface DeactivatePipelineInput {
    /**
     * The ID of the pipeline.
     */
    pipelineId: id;
    /**
     * Indicates whether to cancel any running objects. The default is true, which sets the state of any running objects to CANCELED. If this value is false, the pipeline is deactivated after all running objects finish.
     */
    cancelActive?: cancelActive;
  }
  export interface DeactivatePipelineOutput {
  }
  export interface DeletePipelineInput {
    /**
     * The ID of the pipeline.
     */
    pipelineId: id;
  }
  export interface DescribeObjectsInput {
    /**
     * The ID of the pipeline that contains the object definitions.
     */
    pipelineId: id;
    /**
     * The IDs of the pipeline objects that contain the definitions to be described. You can pass as many as 25 identifiers in a single call to DescribeObjects.
     */
    objectIds: idList;
    /**
     * Indicates whether any expressions in the object should be evaluated when the object descriptions are returned.
     */
    evaluateExpressions?: boolean;
    /**
     * The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call DescribeObjects with the marker value from the previous call to retrieve the next set of results.
     */
    marker?: string;
  }
  export interface DescribeObjectsOutput {
    /**
     * An array of object definitions.
     */
    pipelineObjects: PipelineObjectList;
    /**
     * The starting point for the next page of results. To view the next page of results, call DescribeObjects again with this marker value. If the value is null, there are no more results.
     */
    marker?: string;
    /**
     * Indicates whether there are more results to return.
     */
    hasMoreResults?: boolean;
  }
  export interface DescribePipelinesInput {
    /**
     * The IDs of the pipelines to describe. You can pass as many as 25 identifiers in a single call. To obtain pipeline IDs, call ListPipelines.
     */
    pipelineIds: idList;
  }
  export interface DescribePipelinesOutput {
    /**
     * An array of descriptions for the specified pipelines.
     */
    pipelineDescriptionList: PipelineDescriptionList;
  }
  export interface EvaluateExpressionInput {
    /**
     * The ID of the pipeline.
     */
    pipelineId: id;
    /**
     * The ID of the object.
     */
    objectId: id;
    /**
     * The expression to evaluate.
     */
    expression: longString;
  }
  export interface EvaluateExpressionOutput {
    /**
     * The evaluated expression.
     */
    evaluatedExpression: longString;
  }
  export interface Field {
    /**
     * The field identifier.
     */
    key: fieldNameString;
    /**
     * The field value, expressed as a String.
     */
    stringValue?: fieldStringValue;
    /**
     * The field value, expressed as the identifier of another object.
     */
    refValue?: fieldNameString;
  }
  export interface GetPipelineDefinitionInput {
    /**
     * The ID of the pipeline.
     */
    pipelineId: id;
    /**
     * The version of the pipeline definition to retrieve. Set this parameter to latest (default) to use the last definition saved to the pipeline or active to use the last definition that was activated.
     */
    version?: string;
  }
  export interface GetPipelineDefinitionOutput {
    /**
     * The objects defined in the pipeline.
     */
    pipelineObjects?: PipelineObjectList;
    /**
     * The parameter objects used in the pipeline definition.
     */
    parameterObjects?: ParameterObjectList;
    /**
     * The parameter values used in the pipeline definition.
     */
    parameterValues?: ParameterValueList;
  }
  export interface InstanceIdentity {
    /**
     * A description of an EC2 instance that is generated when the instance is launched and exposed to the instance via the instance metadata service in the form of a JSON representation of an object.
     */
    document?: string;
    /**
     * A signature which can be used to verify the accuracy and authenticity of the information provided in the instance identity document.
     */
    signature?: string;
  }
  export interface ListPipelinesInput {
    /**
     * The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call ListPipelines with the marker value from the previous call to retrieve the next set of results.
     */
    marker?: string;
  }
  export interface ListPipelinesOutput {
    /**
     * The pipeline identifiers. If you require additional information about the pipelines, you can use these identifiers to call DescribePipelines and GetPipelineDefinition.
     */
    pipelineIdList: pipelineList;
    /**
     * The starting point for the next page of results. To view the next page of results, call ListPipelinesOutput again with this marker value. If the value is null, there are no more results.
     */
    marker?: string;
    /**
     * Indicates whether there are more results that can be obtained by a subsequent call.
     */
    hasMoreResults?: boolean;
  }
  export interface Operator {
    /**
     *  The logical operation to be performed: equal (EQ), equal reference (REF_EQ), less than or equal (LE), greater than or equal (GE), or between (BETWEEN). Equal reference (REF_EQ) can be used only with reference fields. The other comparison types can be used only with String fields. The comparison types you can use apply only to certain object fields, as detailed below.   The comparison operators EQ and REF_EQ act on the following fields:   name @sphere parent @componentParent @instanceParent @status @scheduledStartTime @scheduledEndTime @actualStartTime @actualEndTime   The comparison operators GE, LE, and BETWEEN act on the following fields:   @scheduledStartTime @scheduledEndTime @actualStartTime @actualEndTime  Note that fields beginning with the at sign (@) are read-only and set by the web service. When you name fields, you should choose names containing only alpha-numeric values, as symbols may be reserved by AWS Data Pipeline. User-defined fields that you add to a pipeline should prefix their name with the string "my".
     */
    type?: OperatorType;
    /**
     * The value that the actual field value will be compared with.
     */
    values?: stringList;
  }
  export type OperatorType = "EQ"|"REF_EQ"|"LE"|"GE"|"BETWEEN"|string;
  export interface ParameterAttribute {
    /**
     * The field identifier.
     */
    key: attributeNameString;
    /**
     * The field value, expressed as a String.
     */
    stringValue: attributeValueString;
  }
  export type ParameterAttributeList = ParameterAttribute[];
  export interface ParameterObject {
    /**
     * The ID of the parameter object. 
     */
    id: fieldNameString;
    /**
     * The attributes of the parameter object.
     */
    attributes: ParameterAttributeList;
  }
  export type ParameterObjectList = ParameterObject[];
  export interface ParameterValue {
    /**
     * The ID of the parameter value.
     */
    id: fieldNameString;
    /**
     * The field value, expressed as a String.
     */
    stringValue: fieldStringValue;
  }
  export type ParameterValueList = ParameterValue[];
  export interface PipelineDescription {
    /**
     * The pipeline identifier that was assigned by AWS Data Pipeline. This is a string of the form df-297EG78HU43EEXAMPLE.
     */
    pipelineId: id;
    /**
     * The name of the pipeline.
     */
    name: id;
    /**
     * A list of read-only fields that contain metadata about the pipeline: @userId, @accountId, and @pipelineState.
     */
    fields: fieldList;
    /**
     * Description of the pipeline.
     */
    description?: string;
    /**
     * A list of tags to associated with a pipeline. Tags let you control access to pipelines. For more information, see Controlling User Access to Pipelines in the AWS Data Pipeline Developer Guide.
     */
    tags?: tagList;
  }
  export type PipelineDescriptionList = PipelineDescription[];
  export interface PipelineIdName {
    /**
     * The ID of the pipeline that was assigned by AWS Data Pipeline. This is a string of the form df-297EG78HU43EEXAMPLE.
     */
    id?: id;
    /**
     * The name of the pipeline.
     */
    name?: id;
  }
  export interface PipelineObject {
    /**
     * The ID of the object.
     */
    id: id;
    /**
     * The name of the object.
     */
    name: id;
    /**
     * Key-value pairs that define the properties of the object.
     */
    fields: fieldList;
  }
  export type PipelineObjectList = PipelineObject[];
  export type PipelineObjectMap = {[key: string]: PipelineObject};
  export interface PollForTaskInput {
    /**
     * The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created. You can only specify a single value for workerGroup in the call to PollForTask. There are no wildcard values permitted in workerGroup; the string must be an exact, case-sensitive, match.
     */
    workerGroup: string;
    /**
     * The public DNS name of the calling task runner.
     */
    hostname?: id;
    /**
     * Identity information for the EC2 instance that is hosting the task runner. You can get this value from the instance using http://169.254.169.254/latest/meta-data/instance-id. For more information, see Instance Metadata in the Amazon Elastic Compute Cloud User Guide. Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.
     */
    instanceIdentity?: InstanceIdentity;
  }
  export interface PollForTaskOutput {
    /**
     * The information needed to complete the task that is being assigned to the task runner. One of the fields returned in this object is taskId, which contains an identifier for the task being assigned. The calling task runner uses taskId in subsequent calls to ReportTaskProgress and SetTaskStatus.
     */
    taskObject?: TaskObject;
  }
  export interface PutPipelineDefinitionInput {
    /**
     * The ID of the pipeline.
     */
    pipelineId: id;
    /**
     * The objects that define the pipeline. These objects overwrite the existing pipeline definition.
     */
    pipelineObjects: PipelineObjectList;
    /**
     * The parameter objects used with the pipeline.
     */
    parameterObjects?: ParameterObjectList;
    /**
     * The parameter values used with the pipeline.
     */
    parameterValues?: ParameterValueList;
  }
  export interface PutPipelineDefinitionOutput {
    /**
     * The validation errors that are associated with the objects defined in pipelineObjects.
     */
    validationErrors?: ValidationErrors;
    /**
     * The validation warnings that are associated with the objects defined in pipelineObjects.
     */
    validationWarnings?: ValidationWarnings;
    /**
     * Indicates whether there were validation errors, and the pipeline definition is stored but cannot be activated until you correct the pipeline and call PutPipelineDefinition to commit the corrected pipeline.
     */
    errored: boolean;
  }
  export interface Query {
    /**
     * List of selectors that define the query. An object must satisfy all of the selectors to match the query.
     */
    selectors?: SelectorList;
  }
  export interface QueryObjectsInput {
    /**
     * The ID of the pipeline.
     */
    pipelineId: id;
    /**
     * The query that defines the objects to be returned. The Query object can contain a maximum of ten selectors. The conditions in the query are limited to top-level String fields in the object. These filters can be applied to components, instances, and attempts.
     */
    query?: Query;
    /**
     * Indicates whether the query applies to components or instances. The possible values are: COMPONENT, INSTANCE, and ATTEMPT.
     */
    sphere: string;
    /**
     * The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call QueryObjects with the marker value from the previous call to retrieve the next set of results.
     */
    marker?: string;
    /**
     * The maximum number of object names that QueryObjects will return in a single call. The default value is 100. 
     */
    limit?: int;
  }
  export interface QueryObjectsOutput {
    /**
     * The identifiers that match the query selectors.
     */
    ids?: idList;
    /**
     * The starting point for the next page of results. To view the next page of results, call QueryObjects again with this marker value. If the value is null, there are no more results.
     */
    marker?: string;
    /**
     * Indicates whether there are more results that can be obtained by a subsequent call.
     */
    hasMoreResults?: boolean;
  }
  export interface RemoveTagsInput {
    /**
     * The ID of the pipeline.
     */
    pipelineId: id;
    /**
     * The keys of the tags to remove.
     */
    tagKeys: stringList;
  }
  export interface RemoveTagsOutput {
  }
  export interface ReportTaskProgressInput {
    /**
     * The ID of the task assigned to the task runner. This value is provided in the response for PollForTask.
     */
    taskId: taskId;
    /**
     * Key-value pairs that define the properties of the ReportTaskProgressInput object.
     */
    fields?: fieldList;
  }
  export interface ReportTaskProgressOutput {
    /**
     * If true, the calling task runner should cancel processing of the task. The task runner does not need to call SetTaskStatus for canceled tasks.
     */
    canceled: boolean;
  }
  export interface ReportTaskRunnerHeartbeatInput {
    /**
     * The ID of the task runner. This value should be unique across your AWS account. In the case of AWS Data Pipeline Task Runner launched on a resource managed by AWS Data Pipeline, the web service provides a unique identifier when it launches the application. If you have written a custom task runner, you should assign a unique identifier for the task runner.
     */
    taskrunnerId: id;
    /**
     * The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created. You can only specify a single value for workerGroup. There are no wildcard values permitted in workerGroup; the string must be an exact, case-sensitive, match.
     */
    workerGroup?: string;
    /**
     * The public DNS name of the task runner.
     */
    hostname?: id;
  }
  export interface ReportTaskRunnerHeartbeatOutput {
    /**
     * Indicates whether the calling task runner should terminate.
     */
    terminate: boolean;
  }
  export interface Selector {
    /**
     * The name of the field that the operator will be applied to. The field name is the "key" portion of the field definition in the pipeline definition syntax that is used by the AWS Data Pipeline API. If the field is not set on the object, the condition fails.
     */
    fieldName?: string;
    operator?: Operator;
  }
  export type SelectorList = Selector[];
  export interface SetStatusInput {
    /**
     * The ID of the pipeline that contains the objects.
     */
    pipelineId: id;
    /**
     * The IDs of the objects. The corresponding objects can be either physical or components, but not a mix of both types.
     */
    objectIds: idList;
    /**
     * The status to be set on all the objects specified in objectIds. For components, use PAUSE or RESUME. For instances, use TRY_CANCEL, RERUN, or MARK_FINISHED.
     */
    status: string;
  }
  export interface SetTaskStatusInput {
    /**
     * The ID of the task assigned to the task runner. This value is provided in the response for PollForTask.
     */
    taskId: taskId;
    /**
     * If FINISHED, the task successfully completed. If FAILED, the task ended unsuccessfully. Preconditions use false.
     */
    taskStatus: TaskStatus;
    /**
     * If an error occurred during the task, this value specifies the error code. This value is set on the physical attempt object. It is used to display error information to the user. It should not start with string "Service_" which is reserved by the system.
     */
    errorId?: string;
    /**
     * If an error occurred during the task, this value specifies a text description of the error. This value is set on the physical attempt object. It is used to display error information to the user. The web service does not parse this value.
     */
    errorMessage?: errorMessage;
    /**
     * If an error occurred during the task, this value specifies the stack trace associated with the error. This value is set on the physical attempt object. It is used to display error information to the user. The web service does not parse this value.
     */
    errorStackTrace?: string;
  }
  export interface SetTaskStatusOutput {
  }
  export interface Tag {
    /**
     * The key name of a tag defined by a user. For more information, see Controlling User Access to Pipelines in the AWS Data Pipeline Developer Guide.
     */
    key: tagKey;
    /**
     * The optional value portion of a tag defined by a user. For more information, see Controlling User Access to Pipelines in the AWS Data Pipeline Developer Guide.
     */
    value: tagValue;
  }
  export interface TaskObject {
    /**
     * An internal identifier for the task. This ID is passed to the SetTaskStatus and ReportTaskProgress actions.
     */
    taskId?: taskId;
    /**
     * The ID of the pipeline that provided the task.
     */
    pipelineId?: id;
    /**
     * The ID of the pipeline task attempt object. AWS Data Pipeline uses this value to track how many times a task is attempted.
     */
    attemptId?: id;
    /**
     * Connection information for the location where the task runner will publish the output of the task.
     */
    objects?: PipelineObjectMap;
  }
  export type TaskStatus = "FINISHED"|"FAILED"|"FALSE"|string;
  export interface ValidatePipelineDefinitionInput {
    /**
     * The ID of the pipeline.
     */
    pipelineId: id;
    /**
     * The objects that define the pipeline changes to validate against the pipeline.
     */
    pipelineObjects: PipelineObjectList;
    /**
     * The parameter objects used with the pipeline.
     */
    parameterObjects?: ParameterObjectList;
    /**
     * The parameter values used with the pipeline.
     */
    parameterValues?: ParameterValueList;
  }
  export interface ValidatePipelineDefinitionOutput {
    /**
     * Any validation errors that were found.
     */
    validationErrors?: ValidationErrors;
    /**
     * Any validation warnings that were found.
     */
    validationWarnings?: ValidationWarnings;
    /**
     * Indicates whether there were validation errors.
     */
    errored: boolean;
  }
  export interface ValidationError {
    /**
     * The identifier of the object that contains the validation error.
     */
    id?: id;
    /**
     * A description of the validation error.
     */
    errors?: validationMessages;
  }
  export type ValidationErrors = ValidationError[];
  export interface ValidationWarning {
    /**
     * The identifier of the object that contains the validation warning.
     */
    id?: id;
    /**
     * A description of the validation warning.
     */
    warnings?: validationMessages;
  }
  export type ValidationWarnings = ValidationWarning[];
  export type attributeNameString = string;
  export type attributeValueString = string;
  export type cancelActive = boolean;
  export type errorMessage = string;
  export type fieldList = Field[];
  export type fieldNameString = string;
  export type fieldStringValue = string;
  export type id = string;
  export type idList = id[];
  export type int = number;
  export type longString = string;
  export type pipelineList = PipelineIdName[];
  export type stringList = string[];
  export type tagKey = string;
  export type tagList = Tag[];
  export type tagValue = string;
  export type taskId = string;
  export type timestamp = Date;
  export type validationMessage = string;
  export type validationMessages = validationMessage[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2012-10-29"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DataPipeline client.
   */
  export import Types = DataPipeline;
}
export = DataPipeline;
