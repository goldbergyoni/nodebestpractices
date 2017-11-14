import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CodeDeploy extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CodeDeploy.Types.ClientConfiguration)
  config: Config & CodeDeploy.Types.ClientConfiguration;
  /**
   * Adds tags to on-premises instances.
   */
  addTagsToOnPremisesInstances(params: CodeDeploy.Types.AddTagsToOnPremisesInstancesInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds tags to on-premises instances.
   */
  addTagsToOnPremisesInstances(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets information about one or more application revisions.
   */
  batchGetApplicationRevisions(params: CodeDeploy.Types.BatchGetApplicationRevisionsInput, callback?: (err: AWSError, data: CodeDeploy.Types.BatchGetApplicationRevisionsOutput) => void): Request<CodeDeploy.Types.BatchGetApplicationRevisionsOutput, AWSError>;
  /**
   * Gets information about one or more application revisions.
   */
  batchGetApplicationRevisions(callback?: (err: AWSError, data: CodeDeploy.Types.BatchGetApplicationRevisionsOutput) => void): Request<CodeDeploy.Types.BatchGetApplicationRevisionsOutput, AWSError>;
  /**
   * Gets information about one or more applications.
   */
  batchGetApplications(params: CodeDeploy.Types.BatchGetApplicationsInput, callback?: (err: AWSError, data: CodeDeploy.Types.BatchGetApplicationsOutput) => void): Request<CodeDeploy.Types.BatchGetApplicationsOutput, AWSError>;
  /**
   * Gets information about one or more applications.
   */
  batchGetApplications(callback?: (err: AWSError, data: CodeDeploy.Types.BatchGetApplicationsOutput) => void): Request<CodeDeploy.Types.BatchGetApplicationsOutput, AWSError>;
  /**
   * Gets information about one or more deployment groups.
   */
  batchGetDeploymentGroups(params: CodeDeploy.Types.BatchGetDeploymentGroupsInput, callback?: (err: AWSError, data: CodeDeploy.Types.BatchGetDeploymentGroupsOutput) => void): Request<CodeDeploy.Types.BatchGetDeploymentGroupsOutput, AWSError>;
  /**
   * Gets information about one or more deployment groups.
   */
  batchGetDeploymentGroups(callback?: (err: AWSError, data: CodeDeploy.Types.BatchGetDeploymentGroupsOutput) => void): Request<CodeDeploy.Types.BatchGetDeploymentGroupsOutput, AWSError>;
  /**
   * Gets information about one or more instance that are part of a deployment group.
   */
  batchGetDeploymentInstances(params: CodeDeploy.Types.BatchGetDeploymentInstancesInput, callback?: (err: AWSError, data: CodeDeploy.Types.BatchGetDeploymentInstancesOutput) => void): Request<CodeDeploy.Types.BatchGetDeploymentInstancesOutput, AWSError>;
  /**
   * Gets information about one or more instance that are part of a deployment group.
   */
  batchGetDeploymentInstances(callback?: (err: AWSError, data: CodeDeploy.Types.BatchGetDeploymentInstancesOutput) => void): Request<CodeDeploy.Types.BatchGetDeploymentInstancesOutput, AWSError>;
  /**
   * Gets information about one or more deployments.
   */
  batchGetDeployments(params: CodeDeploy.Types.BatchGetDeploymentsInput, callback?: (err: AWSError, data: CodeDeploy.Types.BatchGetDeploymentsOutput) => void): Request<CodeDeploy.Types.BatchGetDeploymentsOutput, AWSError>;
  /**
   * Gets information about one or more deployments.
   */
  batchGetDeployments(callback?: (err: AWSError, data: CodeDeploy.Types.BatchGetDeploymentsOutput) => void): Request<CodeDeploy.Types.BatchGetDeploymentsOutput, AWSError>;
  /**
   * Gets information about one or more on-premises instances.
   */
  batchGetOnPremisesInstances(params: CodeDeploy.Types.BatchGetOnPremisesInstancesInput, callback?: (err: AWSError, data: CodeDeploy.Types.BatchGetOnPremisesInstancesOutput) => void): Request<CodeDeploy.Types.BatchGetOnPremisesInstancesOutput, AWSError>;
  /**
   * Gets information about one or more on-premises instances.
   */
  batchGetOnPremisesInstances(callback?: (err: AWSError, data: CodeDeploy.Types.BatchGetOnPremisesInstancesOutput) => void): Request<CodeDeploy.Types.BatchGetOnPremisesInstancesOutput, AWSError>;
  /**
   * For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) 
   */
  continueDeployment(params: CodeDeploy.Types.ContinueDeploymentInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) 
   */
  continueDeployment(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates an application.
   */
  createApplication(params: CodeDeploy.Types.CreateApplicationInput, callback?: (err: AWSError, data: CodeDeploy.Types.CreateApplicationOutput) => void): Request<CodeDeploy.Types.CreateApplicationOutput, AWSError>;
  /**
   * Creates an application.
   */
  createApplication(callback?: (err: AWSError, data: CodeDeploy.Types.CreateApplicationOutput) => void): Request<CodeDeploy.Types.CreateApplicationOutput, AWSError>;
  /**
   * Deploys an application revision through the specified deployment group.
   */
  createDeployment(params: CodeDeploy.Types.CreateDeploymentInput, callback?: (err: AWSError, data: CodeDeploy.Types.CreateDeploymentOutput) => void): Request<CodeDeploy.Types.CreateDeploymentOutput, AWSError>;
  /**
   * Deploys an application revision through the specified deployment group.
   */
  createDeployment(callback?: (err: AWSError, data: CodeDeploy.Types.CreateDeploymentOutput) => void): Request<CodeDeploy.Types.CreateDeploymentOutput, AWSError>;
  /**
   * Creates a deployment configuration.
   */
  createDeploymentConfig(params: CodeDeploy.Types.CreateDeploymentConfigInput, callback?: (err: AWSError, data: CodeDeploy.Types.CreateDeploymentConfigOutput) => void): Request<CodeDeploy.Types.CreateDeploymentConfigOutput, AWSError>;
  /**
   * Creates a deployment configuration.
   */
  createDeploymentConfig(callback?: (err: AWSError, data: CodeDeploy.Types.CreateDeploymentConfigOutput) => void): Request<CodeDeploy.Types.CreateDeploymentConfigOutput, AWSError>;
  /**
   * Creates a deployment group to which application revisions will be deployed.
   */
  createDeploymentGroup(params: CodeDeploy.Types.CreateDeploymentGroupInput, callback?: (err: AWSError, data: CodeDeploy.Types.CreateDeploymentGroupOutput) => void): Request<CodeDeploy.Types.CreateDeploymentGroupOutput, AWSError>;
  /**
   * Creates a deployment group to which application revisions will be deployed.
   */
  createDeploymentGroup(callback?: (err: AWSError, data: CodeDeploy.Types.CreateDeploymentGroupOutput) => void): Request<CodeDeploy.Types.CreateDeploymentGroupOutput, AWSError>;
  /**
   * Deletes an application.
   */
  deleteApplication(params: CodeDeploy.Types.DeleteApplicationInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an application.
   */
  deleteApplication(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a deployment configuration.  A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted. 
   */
  deleteDeploymentConfig(params: CodeDeploy.Types.DeleteDeploymentConfigInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a deployment configuration.  A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted. 
   */
  deleteDeploymentConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a deployment group.
   */
  deleteDeploymentGroup(params: CodeDeploy.Types.DeleteDeploymentGroupInput, callback?: (err: AWSError, data: CodeDeploy.Types.DeleteDeploymentGroupOutput) => void): Request<CodeDeploy.Types.DeleteDeploymentGroupOutput, AWSError>;
  /**
   * Deletes a deployment group.
   */
  deleteDeploymentGroup(callback?: (err: AWSError, data: CodeDeploy.Types.DeleteDeploymentGroupOutput) => void): Request<CodeDeploy.Types.DeleteDeploymentGroupOutput, AWSError>;
  /**
   * Deregisters an on-premises instance.
   */
  deregisterOnPremisesInstance(params: CodeDeploy.Types.DeregisterOnPremisesInstanceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deregisters an on-premises instance.
   */
  deregisterOnPremisesInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets information about an application.
   */
  getApplication(params: CodeDeploy.Types.GetApplicationInput, callback?: (err: AWSError, data: CodeDeploy.Types.GetApplicationOutput) => void): Request<CodeDeploy.Types.GetApplicationOutput, AWSError>;
  /**
   * Gets information about an application.
   */
  getApplication(callback?: (err: AWSError, data: CodeDeploy.Types.GetApplicationOutput) => void): Request<CodeDeploy.Types.GetApplicationOutput, AWSError>;
  /**
   * Gets information about an application revision.
   */
  getApplicationRevision(params: CodeDeploy.Types.GetApplicationRevisionInput, callback?: (err: AWSError, data: CodeDeploy.Types.GetApplicationRevisionOutput) => void): Request<CodeDeploy.Types.GetApplicationRevisionOutput, AWSError>;
  /**
   * Gets information about an application revision.
   */
  getApplicationRevision(callback?: (err: AWSError, data: CodeDeploy.Types.GetApplicationRevisionOutput) => void): Request<CodeDeploy.Types.GetApplicationRevisionOutput, AWSError>;
  /**
   * Gets information about a deployment.
   */
  getDeployment(params: CodeDeploy.Types.GetDeploymentInput, callback?: (err: AWSError, data: CodeDeploy.Types.GetDeploymentOutput) => void): Request<CodeDeploy.Types.GetDeploymentOutput, AWSError>;
  /**
   * Gets information about a deployment.
   */
  getDeployment(callback?: (err: AWSError, data: CodeDeploy.Types.GetDeploymentOutput) => void): Request<CodeDeploy.Types.GetDeploymentOutput, AWSError>;
  /**
   * Gets information about a deployment configuration.
   */
  getDeploymentConfig(params: CodeDeploy.Types.GetDeploymentConfigInput, callback?: (err: AWSError, data: CodeDeploy.Types.GetDeploymentConfigOutput) => void): Request<CodeDeploy.Types.GetDeploymentConfigOutput, AWSError>;
  /**
   * Gets information about a deployment configuration.
   */
  getDeploymentConfig(callback?: (err: AWSError, data: CodeDeploy.Types.GetDeploymentConfigOutput) => void): Request<CodeDeploy.Types.GetDeploymentConfigOutput, AWSError>;
  /**
   * Gets information about a deployment group.
   */
  getDeploymentGroup(params: CodeDeploy.Types.GetDeploymentGroupInput, callback?: (err: AWSError, data: CodeDeploy.Types.GetDeploymentGroupOutput) => void): Request<CodeDeploy.Types.GetDeploymentGroupOutput, AWSError>;
  /**
   * Gets information about a deployment group.
   */
  getDeploymentGroup(callback?: (err: AWSError, data: CodeDeploy.Types.GetDeploymentGroupOutput) => void): Request<CodeDeploy.Types.GetDeploymentGroupOutput, AWSError>;
  /**
   * Gets information about an instance as part of a deployment.
   */
  getDeploymentInstance(params: CodeDeploy.Types.GetDeploymentInstanceInput, callback?: (err: AWSError, data: CodeDeploy.Types.GetDeploymentInstanceOutput) => void): Request<CodeDeploy.Types.GetDeploymentInstanceOutput, AWSError>;
  /**
   * Gets information about an instance as part of a deployment.
   */
  getDeploymentInstance(callback?: (err: AWSError, data: CodeDeploy.Types.GetDeploymentInstanceOutput) => void): Request<CodeDeploy.Types.GetDeploymentInstanceOutput, AWSError>;
  /**
   * Gets information about an on-premises instance.
   */
  getOnPremisesInstance(params: CodeDeploy.Types.GetOnPremisesInstanceInput, callback?: (err: AWSError, data: CodeDeploy.Types.GetOnPremisesInstanceOutput) => void): Request<CodeDeploy.Types.GetOnPremisesInstanceOutput, AWSError>;
  /**
   * Gets information about an on-premises instance.
   */
  getOnPremisesInstance(callback?: (err: AWSError, data: CodeDeploy.Types.GetOnPremisesInstanceOutput) => void): Request<CodeDeploy.Types.GetOnPremisesInstanceOutput, AWSError>;
  /**
   * Lists information about revisions for an application.
   */
  listApplicationRevisions(params: CodeDeploy.Types.ListApplicationRevisionsInput, callback?: (err: AWSError, data: CodeDeploy.Types.ListApplicationRevisionsOutput) => void): Request<CodeDeploy.Types.ListApplicationRevisionsOutput, AWSError>;
  /**
   * Lists information about revisions for an application.
   */
  listApplicationRevisions(callback?: (err: AWSError, data: CodeDeploy.Types.ListApplicationRevisionsOutput) => void): Request<CodeDeploy.Types.ListApplicationRevisionsOutput, AWSError>;
  /**
   * Lists the applications registered with the applicable IAM user or AWS account.
   */
  listApplications(params: CodeDeploy.Types.ListApplicationsInput, callback?: (err: AWSError, data: CodeDeploy.Types.ListApplicationsOutput) => void): Request<CodeDeploy.Types.ListApplicationsOutput, AWSError>;
  /**
   * Lists the applications registered with the applicable IAM user or AWS account.
   */
  listApplications(callback?: (err: AWSError, data: CodeDeploy.Types.ListApplicationsOutput) => void): Request<CodeDeploy.Types.ListApplicationsOutput, AWSError>;
  /**
   * Lists the deployment configurations with the applicable IAM user or AWS account.
   */
  listDeploymentConfigs(params: CodeDeploy.Types.ListDeploymentConfigsInput, callback?: (err: AWSError, data: CodeDeploy.Types.ListDeploymentConfigsOutput) => void): Request<CodeDeploy.Types.ListDeploymentConfigsOutput, AWSError>;
  /**
   * Lists the deployment configurations with the applicable IAM user or AWS account.
   */
  listDeploymentConfigs(callback?: (err: AWSError, data: CodeDeploy.Types.ListDeploymentConfigsOutput) => void): Request<CodeDeploy.Types.ListDeploymentConfigsOutput, AWSError>;
  /**
   * Lists the deployment groups for an application registered with the applicable IAM user or AWS account.
   */
  listDeploymentGroups(params: CodeDeploy.Types.ListDeploymentGroupsInput, callback?: (err: AWSError, data: CodeDeploy.Types.ListDeploymentGroupsOutput) => void): Request<CodeDeploy.Types.ListDeploymentGroupsOutput, AWSError>;
  /**
   * Lists the deployment groups for an application registered with the applicable IAM user or AWS account.
   */
  listDeploymentGroups(callback?: (err: AWSError, data: CodeDeploy.Types.ListDeploymentGroupsOutput) => void): Request<CodeDeploy.Types.ListDeploymentGroupsOutput, AWSError>;
  /**
   * Lists the instance for a deployment associated with the applicable IAM user or AWS account.
   */
  listDeploymentInstances(params: CodeDeploy.Types.ListDeploymentInstancesInput, callback?: (err: AWSError, data: CodeDeploy.Types.ListDeploymentInstancesOutput) => void): Request<CodeDeploy.Types.ListDeploymentInstancesOutput, AWSError>;
  /**
   * Lists the instance for a deployment associated with the applicable IAM user or AWS account.
   */
  listDeploymentInstances(callback?: (err: AWSError, data: CodeDeploy.Types.ListDeploymentInstancesOutput) => void): Request<CodeDeploy.Types.ListDeploymentInstancesOutput, AWSError>;
  /**
   * Lists the deployments in a deployment group for an application registered with the applicable IAM user or AWS account.
   */
  listDeployments(params: CodeDeploy.Types.ListDeploymentsInput, callback?: (err: AWSError, data: CodeDeploy.Types.ListDeploymentsOutput) => void): Request<CodeDeploy.Types.ListDeploymentsOutput, AWSError>;
  /**
   * Lists the deployments in a deployment group for an application registered with the applicable IAM user or AWS account.
   */
  listDeployments(callback?: (err: AWSError, data: CodeDeploy.Types.ListDeploymentsOutput) => void): Request<CodeDeploy.Types.ListDeploymentsOutput, AWSError>;
  /**
   * Lists the names of stored connections to GitHub accounts.
   */
  listGitHubAccountTokenNames(params: CodeDeploy.Types.ListGitHubAccountTokenNamesInput, callback?: (err: AWSError, data: CodeDeploy.Types.ListGitHubAccountTokenNamesOutput) => void): Request<CodeDeploy.Types.ListGitHubAccountTokenNamesOutput, AWSError>;
  /**
   * Lists the names of stored connections to GitHub accounts.
   */
  listGitHubAccountTokenNames(callback?: (err: AWSError, data: CodeDeploy.Types.ListGitHubAccountTokenNamesOutput) => void): Request<CodeDeploy.Types.ListGitHubAccountTokenNamesOutput, AWSError>;
  /**
   * Gets a list of names for one or more on-premises instances. Unless otherwise specified, both registered and deregistered on-premises instance names will be listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.
   */
  listOnPremisesInstances(params: CodeDeploy.Types.ListOnPremisesInstancesInput, callback?: (err: AWSError, data: CodeDeploy.Types.ListOnPremisesInstancesOutput) => void): Request<CodeDeploy.Types.ListOnPremisesInstancesOutput, AWSError>;
  /**
   * Gets a list of names for one or more on-premises instances. Unless otherwise specified, both registered and deregistered on-premises instance names will be listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.
   */
  listOnPremisesInstances(callback?: (err: AWSError, data: CodeDeploy.Types.ListOnPremisesInstancesOutput) => void): Request<CodeDeploy.Types.ListOnPremisesInstancesOutput, AWSError>;
  /**
   * Registers with AWS CodeDeploy a revision for the specified application.
   */
  registerApplicationRevision(params: CodeDeploy.Types.RegisterApplicationRevisionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Registers with AWS CodeDeploy a revision for the specified application.
   */
  registerApplicationRevision(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Registers an on-premises instance.  Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both. 
   */
  registerOnPremisesInstance(params: CodeDeploy.Types.RegisterOnPremisesInstanceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Registers an on-premises instance.  Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both. 
   */
  registerOnPremisesInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes one or more tags from one or more on-premises instances.
   */
  removeTagsFromOnPremisesInstances(params: CodeDeploy.Types.RemoveTagsFromOnPremisesInstancesInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes one or more tags from one or more on-premises instances.
   */
  removeTagsFromOnPremisesInstances(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is completed.
   */
  skipWaitTimeForInstanceTermination(params: CodeDeploy.Types.SkipWaitTimeForInstanceTerminationInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is completed.
   */
  skipWaitTimeForInstanceTermination(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attempts to stop an ongoing deployment.
   */
  stopDeployment(params: CodeDeploy.Types.StopDeploymentInput, callback?: (err: AWSError, data: CodeDeploy.Types.StopDeploymentOutput) => void): Request<CodeDeploy.Types.StopDeploymentOutput, AWSError>;
  /**
   * Attempts to stop an ongoing deployment.
   */
  stopDeployment(callback?: (err: AWSError, data: CodeDeploy.Types.StopDeploymentOutput) => void): Request<CodeDeploy.Types.StopDeploymentOutput, AWSError>;
  /**
   * Changes the name of an application.
   */
  updateApplication(params: CodeDeploy.Types.UpdateApplicationInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the name of an application.
   */
  updateApplication(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes information about a deployment group.
   */
  updateDeploymentGroup(params: CodeDeploy.Types.UpdateDeploymentGroupInput, callback?: (err: AWSError, data: CodeDeploy.Types.UpdateDeploymentGroupOutput) => void): Request<CodeDeploy.Types.UpdateDeploymentGroupOutput, AWSError>;
  /**
   * Changes information about a deployment group.
   */
  updateDeploymentGroup(callback?: (err: AWSError, data: CodeDeploy.Types.UpdateDeploymentGroupOutput) => void): Request<CodeDeploy.Types.UpdateDeploymentGroupOutput, AWSError>;
  /**
   * Waits for the deploymentSuccessful state by periodically calling the underlying CodeDeploy.getDeploymentoperation every 15 seconds (at most 120 times).
   */
  waitFor(state: "deploymentSuccessful", params: CodeDeploy.Types.GetDeploymentInput, callback?: (err: AWSError, data: CodeDeploy.Types.GetDeploymentOutput) => void): Request<CodeDeploy.Types.GetDeploymentOutput, AWSError>;
  /**
   * Waits for the deploymentSuccessful state by periodically calling the underlying CodeDeploy.getDeploymentoperation every 15 seconds (at most 120 times).
   */
  waitFor(state: "deploymentSuccessful", callback?: (err: AWSError, data: CodeDeploy.Types.GetDeploymentOutput) => void): Request<CodeDeploy.Types.GetDeploymentOutput, AWSError>;
}
declare namespace CodeDeploy {
  export interface AddTagsToOnPremisesInstancesInput {
    /**
     * The tag key-value pairs to add to the on-premises instances. Keys and values are both required. Keys cannot be null or empty strings. Value-only tags are not allowed.
     */
    tags: TagList;
    /**
     * The names of the on-premises instances to which to add tags.
     */
    instanceNames: InstanceNameList;
  }
  export type AdditionalDeploymentStatusInfo = string;
  export interface Alarm {
    /**
     * The name of the alarm. Maximum length is 255 characters. Each alarm name can be used only once in a list of alarms.
     */
    name?: AlarmName;
  }
  export interface AlarmConfiguration {
    /**
     * Indicates whether the alarm configuration is enabled.
     */
    enabled?: Boolean;
    /**
     * Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch. The default value is false.   true: The deployment will proceed even if alarm status information can't be retrieved from Amazon CloudWatch.   false: The deployment will stop if alarm status information can't be retrieved from Amazon CloudWatch.  
     */
    ignorePollAlarmFailure?: Boolean;
    /**
     * A list of alarms configured for the deployment group. A maximum of 10 alarms can be added to a deployment group.
     */
    alarms?: AlarmList;
  }
  export type AlarmList = Alarm[];
  export type AlarmName = string;
  export type ApplicationId = string;
  export interface ApplicationInfo {
    /**
     * The application ID.
     */
    applicationId?: ApplicationId;
    /**
     * The application name.
     */
    applicationName?: ApplicationName;
    /**
     * The time at which the application was created.
     */
    createTime?: Timestamp;
    /**
     * True if the user has authenticated with GitHub for the specified application; otherwise, false.
     */
    linkedToGitHub?: Boolean;
    /**
     * The name for a connection to a GitHub account.
     */
    gitHubAccountName?: GitHubAccountTokenName;
  }
  export type ApplicationName = string;
  export type ApplicationRevisionSortBy = "registerTime"|"firstUsedTime"|"lastUsedTime"|string;
  export type ApplicationsInfoList = ApplicationInfo[];
  export type ApplicationsList = ApplicationName[];
  export interface AutoRollbackConfiguration {
    /**
     * Indicates whether a defined automatic rollback configuration is currently enabled.
     */
    enabled?: Boolean;
    /**
     * The event type or types that trigger a rollback.
     */
    events?: AutoRollbackEventsList;
  }
  export type AutoRollbackEvent = "DEPLOYMENT_FAILURE"|"DEPLOYMENT_STOP_ON_ALARM"|"DEPLOYMENT_STOP_ON_REQUEST"|string;
  export type AutoRollbackEventsList = AutoRollbackEvent[];
  export interface AutoScalingGroup {
    /**
     * The Auto Scaling group name.
     */
    name?: AutoScalingGroupName;
    /**
     * An Auto Scaling lifecycle event hook name.
     */
    hook?: AutoScalingGroupHook;
  }
  export type AutoScalingGroupHook = string;
  export type AutoScalingGroupList = AutoScalingGroup[];
  export type AutoScalingGroupName = string;
  export type AutoScalingGroupNameList = AutoScalingGroupName[];
  export interface BatchGetApplicationRevisionsInput {
    /**
     * The name of an AWS CodeDeploy application about which to get revision information.
     */
    applicationName: ApplicationName;
    /**
     * Information to get about the application revisions, including type and location.
     */
    revisions: RevisionLocationList;
  }
  export interface BatchGetApplicationRevisionsOutput {
    /**
     * The name of the application that corresponds to the revisions.
     */
    applicationName?: ApplicationName;
    /**
     * Information about errors that may have occurred during the API call.
     */
    errorMessage?: ErrorMessage;
    /**
     * Additional information about the revisions, including the type and location.
     */
    revisions?: RevisionInfoList;
  }
  export interface BatchGetApplicationsInput {
    /**
     * A list of application names separated by spaces.
     */
    applicationNames?: ApplicationsList;
  }
  export interface BatchGetApplicationsOutput {
    /**
     * Information about the applications.
     */
    applicationsInfo?: ApplicationsInfoList;
  }
  export interface BatchGetDeploymentGroupsInput {
    /**
     * The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.
     */
    applicationName: ApplicationName;
    /**
     * The deployment groups' names.
     */
    deploymentGroupNames: DeploymentGroupsList;
  }
  export interface BatchGetDeploymentGroupsOutput {
    /**
     * Information about the deployment groups.
     */
    deploymentGroupsInfo?: DeploymentGroupInfoList;
    /**
     * Information about errors that may have occurred during the API call.
     */
    errorMessage?: ErrorMessage;
  }
  export interface BatchGetDeploymentInstancesInput {
    /**
     * The unique ID of a deployment.
     */
    deploymentId: DeploymentId;
    /**
     * The unique IDs of instances in the deployment group.
     */
    instanceIds: InstancesList;
  }
  export interface BatchGetDeploymentInstancesOutput {
    /**
     * Information about the instance.
     */
    instancesSummary?: InstanceSummaryList;
    /**
     * Information about errors that may have occurred during the API call.
     */
    errorMessage?: ErrorMessage;
  }
  export interface BatchGetDeploymentsInput {
    /**
     * A list of deployment IDs, separated by spaces.
     */
    deploymentIds?: DeploymentsList;
  }
  export interface BatchGetDeploymentsOutput {
    /**
     * Information about the deployments.
     */
    deploymentsInfo?: DeploymentsInfoList;
  }
  export interface BatchGetOnPremisesInstancesInput {
    /**
     * The names of the on-premises instances about which to get information.
     */
    instanceNames?: InstanceNameList;
  }
  export interface BatchGetOnPremisesInstancesOutput {
    /**
     * Information about the on-premises instances.
     */
    instanceInfos?: InstanceInfoList;
  }
  export interface BlueGreenDeploymentConfiguration {
    /**
     * Information about whether to terminate instances in the original fleet during a blue/green deployment.
     */
    terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;
    /**
     * Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.
     */
    deploymentReadyOption?: DeploymentReadyOption;
    /**
     * Information about how instances are provisioned for a replacement environment in a blue/green deployment.
     */
    greenFleetProvisioningOption?: GreenFleetProvisioningOption;
  }
  export interface BlueInstanceTerminationOption {
    /**
     * The action to take on instances in the original environment after a successful blue/green deployment.   TERMINATE: Instances are terminated after a specified wait time.   KEEP_ALIVE: Instances are left running after they are deregistered from the load balancer and removed from the deployment group.  
     */
    action?: InstanceAction;
    /**
     * The number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.
     */
    terminationWaitTimeInMinutes?: Duration;
  }
  export type Boolean = boolean;
  export type BundleType = "tar"|"tgz"|"zip"|string;
  export type CommitId = string;
  export interface ContinueDeploymentInput {
    /**
     * The deployment ID of the blue/green deployment for which you want to start rerouting traffic to the replacement environment.
     */
    deploymentId?: DeploymentId;
  }
  export interface CreateApplicationInput {
    /**
     * The name of the application. This name must be unique with the applicable IAM user or AWS account.
     */
    applicationName: ApplicationName;
  }
  export interface CreateApplicationOutput {
    /**
     * A unique application ID.
     */
    applicationId?: ApplicationId;
  }
  export interface CreateDeploymentConfigInput {
    /**
     * The name of the deployment configuration to create.
     */
    deploymentConfigName: DeploymentConfigName;
    /**
     * The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value. The type parameter takes either of the following values:   HOST_COUNT: The value parameter represents the minimum number of healthy instances as an absolute value.   FLEET_PERCENT: The value parameter represents the minimum number of healthy instances as a percentage of the total number of instances in the deployment. If you specify FLEET_PERCENT, at the start of the deployment, AWS CodeDeploy converts the percentage to the equivalent number of instance and rounds up fractional instances.   The value parameter takes an integer. For example, to set a minimum of 95% healthy instance, specify a type of FLEET_PERCENT and a value of 95.
     */
    minimumHealthyHosts: MinimumHealthyHosts;
  }
  export interface CreateDeploymentConfigOutput {
    /**
     * A unique deployment configuration ID.
     */
    deploymentConfigId?: DeploymentConfigId;
  }
  export interface CreateDeploymentGroupInput {
    /**
     * The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.
     */
    applicationName: ApplicationName;
    /**
     * The name of a new deployment group for the specified application.
     */
    deploymentGroupName: DeploymentGroupName;
    /**
     * If specified, the deployment configuration name can be either one of the predefined configurations provided with AWS CodeDeploy or a custom deployment configuration that you create by calling the create deployment configuration operation. CodeDeployDefault.OneAtATime is the default deployment configuration. It is used if a configuration isn't specified for the deployment or the deployment group. For more information about the predefined deployment configurations in AWS CodeDeploy, see Working with Deployment Groups in AWS CodeDeploy in the AWS CodeDeploy User Guide.
     */
    deploymentConfigName?: DeploymentConfigName;
    /**
     * The Amazon EC2 tags on which to filter. The deployment group will include EC2 instances with any of the specified tags. Cannot be used in the same call as ec2TagSet.
     */
    ec2TagFilters?: EC2TagFilterList;
    /**
     * The on-premises instance tags on which to filter. The deployment group will include on-premises instances with any of the specified tags. Cannot be used in the same call as OnPremisesTagSet.
     */
    onPremisesInstanceTagFilters?: TagFilterList;
    /**
     * A list of associated Auto Scaling groups.
     */
    autoScalingGroups?: AutoScalingGroupNameList;
    /**
     * A service role ARN that allows AWS CodeDeploy to act on the user's behalf when interacting with AWS services.
     */
    serviceRoleArn: Role;
    /**
     * Information about triggers to create when the deployment group is created. For examples, see Create a Trigger for an AWS CodeDeploy Event in the AWS CodeDeploy User Guide.
     */
    triggerConfigurations?: TriggerConfigList;
    /**
     * Information to add about Amazon CloudWatch alarms when the deployment group is created.
     */
    alarmConfiguration?: AlarmConfiguration;
    /**
     * Configuration information for an automatic rollback that is added when a deployment group is created.
     */
    autoRollbackConfiguration?: AutoRollbackConfiguration;
    /**
     * Information about the type of deployment, in-place or blue/green, that you want to run and whether to route deployment traffic behind a load balancer.
     */
    deploymentStyle?: DeploymentStyle;
    /**
     * Information about blue/green deployment options for a deployment group.
     */
    blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
    /**
     * Information about the load balancer used in a deployment.
     */
    loadBalancerInfo?: LoadBalancerInfo;
    /**
     * Information about groups of tags applied to EC2 instances. The deployment group will include only EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilters.
     */
    ec2TagSet?: EC2TagSet;
    /**
     * Information about groups of tags applied to on-premises instances. The deployment group will include only on-premises instances identified by all the tag groups. Cannot be used in the same call as onPremisesInstanceTagFilters.
     */
    onPremisesTagSet?: OnPremisesTagSet;
  }
  export interface CreateDeploymentGroupOutput {
    /**
     * A unique deployment group ID.
     */
    deploymentGroupId?: DeploymentGroupId;
  }
  export interface CreateDeploymentInput {
    /**
     * The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.
     */
    applicationName: ApplicationName;
    /**
     * The name of the deployment group.
     */
    deploymentGroupName?: DeploymentGroupName;
    /**
     * The type and location of the revision to deploy.
     */
    revision?: RevisionLocation;
    /**
     * The name of a deployment configuration associated with the applicable IAM user or AWS account. If not specified, the value configured in the deployment group will be used as the default. If the deployment group does not have a deployment configuration associated with it, then CodeDeployDefault.OneAtATime will be used by default.
     */
    deploymentConfigName?: DeploymentConfigName;
    /**
     * A comment about the deployment.
     */
    description?: Description;
    /**
     * If set to true, then if the deployment causes the ApplicationStop deployment lifecycle event to an instance to fail, the deployment to that instance will not be considered to have failed at that point and will continue on to the BeforeInstall deployment lifecycle event. If set to false or not specified, then if the deployment causes the ApplicationStop deployment lifecycle event to fail to an instance, the deployment to that instance will stop, and the deployment to that instance will be considered to have failed.
     */
    ignoreApplicationStopFailures?: Boolean;
    /**
     * Information about the instances that will belong to the replacement environment in a blue/green deployment.
     */
    targetInstances?: TargetInstances;
    /**
     * Configuration information for an automatic rollback that is added when a deployment is created.
     */
    autoRollbackConfiguration?: AutoRollbackConfiguration;
    /**
     * Indicates whether to deploy to all instances or only to instances that are not running the latest application revision.
     */
    updateOutdatedInstancesOnly?: Boolean;
    /**
     * Information about how AWS CodeDeploy handles files that already exist in a deployment target location but weren't part of the previous successful deployment. The fileExistsBehavior parameter takes any of the following values:   DISALLOW: The deployment fails. This is also the default behavior if no option is specified.   OVERWRITE: The version of the file from the application revision currently being deployed replaces the version already on the instance.   RETAIN: The version of the file already on the instance is kept and used as part of the new deployment.  
     */
    fileExistsBehavior?: FileExistsBehavior;
  }
  export interface CreateDeploymentOutput {
    /**
     * A unique deployment ID.
     */
    deploymentId?: DeploymentId;
  }
  export interface DeleteApplicationInput {
    /**
     * The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.
     */
    applicationName: ApplicationName;
  }
  export interface DeleteDeploymentConfigInput {
    /**
     * The name of a deployment configuration associated with the applicable IAM user or AWS account.
     */
    deploymentConfigName: DeploymentConfigName;
  }
  export interface DeleteDeploymentGroupInput {
    /**
     * The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.
     */
    applicationName: ApplicationName;
    /**
     * The name of an existing deployment group for the specified application.
     */
    deploymentGroupName: DeploymentGroupName;
  }
  export interface DeleteDeploymentGroupOutput {
    /**
     * If the output contains no data, and the corresponding deployment group contained at least one Auto Scaling group, AWS CodeDeploy successfully removed all corresponding Auto Scaling lifecycle event hooks from the Amazon EC2 instances in the Auto Scaling group. If the output contains data, AWS CodeDeploy could not remove some Auto Scaling lifecycle event hooks from the Amazon EC2 instances in the Auto Scaling group.
     */
    hooksNotCleanedUp?: AutoScalingGroupList;
  }
  export type DeploymentConfigId = string;
  export interface DeploymentConfigInfo {
    /**
     * The deployment configuration ID.
     */
    deploymentConfigId?: DeploymentConfigId;
    /**
     * The deployment configuration name.
     */
    deploymentConfigName?: DeploymentConfigName;
    /**
     * Information about the number or percentage of minimum healthy instance.
     */
    minimumHealthyHosts?: MinimumHealthyHosts;
    /**
     * The time at which the deployment configuration was created.
     */
    createTime?: Timestamp;
  }
  export type DeploymentConfigName = string;
  export type DeploymentConfigsList = DeploymentConfigName[];
  export type DeploymentCreator = "user"|"autoscaling"|"codeDeployRollback"|string;
  export type DeploymentGroupId = string;
  export interface DeploymentGroupInfo {
    /**
     * The application name.
     */
    applicationName?: ApplicationName;
    /**
     * The deployment group ID.
     */
    deploymentGroupId?: DeploymentGroupId;
    /**
     * The deployment group name.
     */
    deploymentGroupName?: DeploymentGroupName;
    /**
     * The deployment configuration name.
     */
    deploymentConfigName?: DeploymentConfigName;
    /**
     * The Amazon EC2 tags on which to filter. The deployment group includes EC2 instances with any of the specified tags.
     */
    ec2TagFilters?: EC2TagFilterList;
    /**
     * The on-premises instance tags on which to filter. The deployment group includes on-premises instances with any of the specified tags.
     */
    onPremisesInstanceTagFilters?: TagFilterList;
    /**
     * A list of associated Auto Scaling groups.
     */
    autoScalingGroups?: AutoScalingGroupList;
    /**
     * A service role ARN.
     */
    serviceRoleArn?: Role;
    /**
     * Information about the deployment group's target revision, including type and location.
     */
    targetRevision?: RevisionLocation;
    /**
     * Information about triggers associated with the deployment group.
     */
    triggerConfigurations?: TriggerConfigList;
    /**
     * A list of alarms associated with the deployment group.
     */
    alarmConfiguration?: AlarmConfiguration;
    /**
     * Information about the automatic rollback configuration associated with the deployment group.
     */
    autoRollbackConfiguration?: AutoRollbackConfiguration;
    /**
     * Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
     */
    deploymentStyle?: DeploymentStyle;
    /**
     * Information about blue/green deployment options for a deployment group.
     */
    blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
    /**
     * Information about the load balancer to use in a deployment.
     */
    loadBalancerInfo?: LoadBalancerInfo;
    /**
     * Information about the most recent successful deployment to the deployment group.
     */
    lastSuccessfulDeployment?: LastDeploymentInfo;
    /**
     * Information about the most recent attempted deployment to the deployment group.
     */
    lastAttemptedDeployment?: LastDeploymentInfo;
    /**
     * Information about groups of tags applied to an EC2 instance. The deployment group includes only EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilters.
     */
    ec2TagSet?: EC2TagSet;
    /**
     * Information about groups of tags applied to an on-premises instance. The deployment group includes only on-premises instances identified by all the tag groups. Cannot be used in the same call as onPremisesInstanceTagFilters.
     */
    onPremisesTagSet?: OnPremisesTagSet;
  }
  export type DeploymentGroupInfoList = DeploymentGroupInfo[];
  export type DeploymentGroupName = string;
  export type DeploymentGroupsList = DeploymentGroupName[];
  export type DeploymentId = string;
  export interface DeploymentInfo {
    /**
     * The application name.
     */
    applicationName?: ApplicationName;
    /**
     * The deployment group name.
     */
    deploymentGroupName?: DeploymentGroupName;
    /**
     * The deployment configuration name.
     */
    deploymentConfigName?: DeploymentConfigName;
    /**
     * The deployment ID.
     */
    deploymentId?: DeploymentId;
    /**
     * Information about the application revision that was deployed to the deployment group before the most recent successful deployment.
     */
    previousRevision?: RevisionLocation;
    /**
     * Information about the location of stored application artifacts and the service from which to retrieve them.
     */
    revision?: RevisionLocation;
    /**
     * The current state of the deployment as a whole.
     */
    status?: DeploymentStatus;
    /**
     * Information about any error associated with this deployment.
     */
    errorInformation?: ErrorInformation;
    /**
     * A timestamp indicating when the deployment was created.
     */
    createTime?: Timestamp;
    /**
     * A timestamp indicating when the deployment was deployed to the deployment group. In some cases, the reported value of the start time may be later than the complete time. This is due to differences in the clock settings of back-end servers that participate in the deployment process.
     */
    startTime?: Timestamp;
    /**
     * A timestamp indicating when the deployment was complete.
     */
    completeTime?: Timestamp;
    /**
     * A summary of the deployment status of the instances in the deployment.
     */
    deploymentOverview?: DeploymentOverview;
    /**
     * A comment about the deployment.
     */
    description?: Description;
    /**
     * The means by which the deployment was created:   user: A user created the deployment.   autoscaling: Auto Scaling created the deployment.   codeDeployRollback: A rollback process created the deployment.  
     */
    creator?: DeploymentCreator;
    /**
     * If true, then if the deployment causes the ApplicationStop deployment lifecycle event to an instance to fail, the deployment to that instance will not be considered to have failed at that point and will continue on to the BeforeInstall deployment lifecycle event. If false or not specified, then if the deployment causes the ApplicationStop deployment lifecycle event to an instance to fail, the deployment to that instance will stop, and the deployment to that instance will be considered to have failed.
     */
    ignoreApplicationStopFailures?: Boolean;
    /**
     * Information about the automatic rollback configuration associated with the deployment.
     */
    autoRollbackConfiguration?: AutoRollbackConfiguration;
    /**
     * Indicates whether only instances that are not running the latest application revision are to be deployed to.
     */
    updateOutdatedInstancesOnly?: Boolean;
    /**
     * Information about a deployment rollback.
     */
    rollbackInfo?: RollbackInfo;
    /**
     * Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
     */
    deploymentStyle?: DeploymentStyle;
    /**
     * Information about the instances that belong to the replacement environment in a blue/green deployment.
     */
    targetInstances?: TargetInstances;
    /**
     * Indicates whether the wait period set for the termination of instances in the original environment has started. Status is 'false' if the KEEP_ALIVE option is specified; otherwise, 'true' as soon as the termination wait period starts.
     */
    instanceTerminationWaitTimeStarted?: Boolean;
    /**
     * Information about blue/green deployment options for this deployment.
     */
    blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
    /**
     * Information about the load balancer used in the deployment.
     */
    loadBalancerInfo?: LoadBalancerInfo;
    /**
     * Provides information about the results of a deployment, such as whether instances in the original environment in a blue/green deployment were not terminated.
     */
    additionalDeploymentStatusInfo?: AdditionalDeploymentStatusInfo;
    /**
     * Information about how AWS CodeDeploy handles files that already exist in a deployment target location but weren't part of the previous successful deployment.   DISALLOW: The deployment fails. This is also the default behavior if no option is specified.   OVERWRITE: The version of the file from the application revision currently being deployed replaces the version already on the instance.   RETAIN: The version of the file already on the instance is kept and used as part of the new deployment.  
     */
    fileExistsBehavior?: FileExistsBehavior;
  }
  export type DeploymentOption = "WITH_TRAFFIC_CONTROL"|"WITHOUT_TRAFFIC_CONTROL"|string;
  export interface DeploymentOverview {
    /**
     * The number of instances in the deployment in a pending state.
     */
    Pending?: InstanceCount;
    /**
     * The number of instances in which the deployment is in progress.
     */
    InProgress?: InstanceCount;
    /**
     * The number of instances in the deployment to which revisions have been successfully deployed.
     */
    Succeeded?: InstanceCount;
    /**
     * The number of instances in the deployment in a failed state.
     */
    Failed?: InstanceCount;
    /**
     * The number of instances in the deployment in a skipped state.
     */
    Skipped?: InstanceCount;
    /**
     * The number of instances in a replacement environment ready to receive traffic in a blue/green deployment.
     */
    Ready?: InstanceCount;
  }
  export type DeploymentReadyAction = "CONTINUE_DEPLOYMENT"|"STOP_DEPLOYMENT"|string;
  export interface DeploymentReadyOption {
    /**
     * Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment.   CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment.   STOP_DEPLOYMENT: Do not register new instances with load balancer unless traffic is rerouted manually. If traffic is not rerouted manually before the end of the specified wait period, the deployment status is changed to Stopped.  
     */
    actionOnTimeout?: DeploymentReadyAction;
    /**
     * The number of minutes to wait before the status of a blue/green deployment changed to Stopped if rerouting is not started manually. Applies only to the STOP_DEPLOYMENT option for actionOnTimeout
     */
    waitTimeInMinutes?: Duration;
  }
  export type DeploymentStatus = "Created"|"Queued"|"InProgress"|"Succeeded"|"Failed"|"Stopped"|"Ready"|string;
  export type DeploymentStatusList = DeploymentStatus[];
  export interface DeploymentStyle {
    /**
     * Indicates whether to run an in-place deployment or a blue/green deployment.
     */
    deploymentType?: DeploymentType;
    /**
     * Indicates whether to route deployment traffic behind a load balancer.
     */
    deploymentOption?: DeploymentOption;
  }
  export type DeploymentType = "IN_PLACE"|"BLUE_GREEN"|string;
  export type DeploymentsInfoList = DeploymentInfo[];
  export type DeploymentsList = DeploymentId[];
  export interface DeregisterOnPremisesInstanceInput {
    /**
     * The name of the on-premises instance to deregister.
     */
    instanceName: InstanceName;
  }
  export type Description = string;
  export interface Diagnostics {
    /**
     * The associated error code:   Success: The specified script ran.   ScriptMissing: The specified script was not found in the specified location.   ScriptNotExecutable: The specified script is not a recognized executable file type.   ScriptTimedOut: The specified script did not finish running in the specified time period.   ScriptFailed: The specified script failed to run as expected.   UnknownError: The specified script did not run for an unknown reason.  
     */
    errorCode?: LifecycleErrorCode;
    /**
     * The name of the script.
     */
    scriptName?: ScriptName;
    /**
     * The message associated with the error.
     */
    message?: LifecycleMessage;
    /**
     * The last portion of the diagnostic log. If available, AWS CodeDeploy returns up to the last 4 KB of the diagnostic log.
     */
    logTail?: LogTail;
  }
  export type Duration = number;
  export interface EC2TagFilter {
    /**
     * The tag filter key.
     */
    Key?: Key;
    /**
     * The tag filter value.
     */
    Value?: Value;
    /**
     * The tag filter type:   KEY_ONLY: Key only.   VALUE_ONLY: Value only.   KEY_AND_VALUE: Key and value.  
     */
    Type?: EC2TagFilterType;
  }
  export type EC2TagFilterList = EC2TagFilter[];
  export type EC2TagFilterType = "KEY_ONLY"|"VALUE_ONLY"|"KEY_AND_VALUE"|string;
  export interface EC2TagSet {
    /**
     * A list containing other lists of EC2 instance tag groups. In order for an instance to be included in the deployment group, it must be identified by all the tag groups in the list.
     */
    ec2TagSetList?: EC2TagSetList;
  }
  export type EC2TagSetList = EC2TagFilterList[];
  export interface ELBInfo {
    /**
     * For blue/green deployments, the name of the load balancer that will be used to route traffic from original instances to replacement instances in a blue/green deployment. For in-place deployments, the name of the load balancer that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes.
     */
    name?: ELBName;
  }
  export type ELBInfoList = ELBInfo[];
  export type ELBName = string;
  export type ETag = string;
  export type ErrorCode = "DEPLOYMENT_GROUP_MISSING"|"APPLICATION_MISSING"|"REVISION_MISSING"|"IAM_ROLE_MISSING"|"IAM_ROLE_PERMISSIONS"|"NO_EC2_SUBSCRIPTION"|"OVER_MAX_INSTANCES"|"NO_INSTANCES"|"TIMEOUT"|"HEALTH_CONSTRAINTS_INVALID"|"HEALTH_CONSTRAINTS"|"INTERNAL_ERROR"|"THROTTLED"|"ALARM_ACTIVE"|"AGENT_ISSUE"|"AUTO_SCALING_IAM_ROLE_PERMISSIONS"|"AUTO_SCALING_CONFIGURATION"|"MANUAL_STOP"|string;
  export interface ErrorInformation {
    /**
     * For information about additional error codes, see Error Codes for AWS CodeDeploy in the AWS CodeDeploy User Guide. The error code:   APPLICATION_MISSING: The application was missing. This error code will most likely be raised if the application is deleted after the deployment is created but before it is started.   DEPLOYMENT_GROUP_MISSING: The deployment group was missing. This error code will most likely be raised if the deployment group is deleted after the deployment is created but before it is started.   HEALTH_CONSTRAINTS: The deployment failed on too many instances to be successfully deployed within the instance health constraints specified.   HEALTH_CONSTRAINTS_INVALID: The revision cannot be successfully deployed within the instance health constraints specified.   IAM_ROLE_MISSING: The service role cannot be accessed.   IAM_ROLE_PERMISSIONS: The service role does not have the correct permissions.   INTERNAL_ERROR: There was an internal error.   NO_EC2_SUBSCRIPTION: The calling account is not subscribed to the Amazon EC2 service.   NO_INSTANCES: No instance were specified, or no instance can be found.   OVER_MAX_INSTANCES: The maximum number of instance was exceeded.   THROTTLED: The operation was throttled because the calling account exceeded the throttling limits of one or more AWS services.   TIMEOUT: The deployment has timed out.   REVISION_MISSING: The revision ID was missing. This error code will most likely be raised if the revision is deleted after the deployment is created but before it is started.  
     */
    code?: ErrorCode;
    /**
     * An accompanying error message.
     */
    message?: ErrorMessage;
  }
  export type ErrorMessage = string;
  export type FileExistsBehavior = "DISALLOW"|"OVERWRITE"|"RETAIN"|string;
  export interface GenericRevisionInfo {
    /**
     * A comment about the revision.
     */
    description?: Description;
    /**
     * The deployment groups for which this is the current target revision.
     */
    deploymentGroups?: DeploymentGroupsList;
    /**
     * When the revision was first used by AWS CodeDeploy.
     */
    firstUsedTime?: Timestamp;
    /**
     * When the revision was last used by AWS CodeDeploy.
     */
    lastUsedTime?: Timestamp;
    /**
     * When the revision was registered with AWS CodeDeploy.
     */
    registerTime?: Timestamp;
  }
  export interface GetApplicationInput {
    /**
     * The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.
     */
    applicationName: ApplicationName;
  }
  export interface GetApplicationOutput {
    /**
     * Information about the application.
     */
    application?: ApplicationInfo;
  }
  export interface GetApplicationRevisionInput {
    /**
     * The name of the application that corresponds to the revision.
     */
    applicationName: ApplicationName;
    /**
     * Information about the application revision to get, including type and location.
     */
    revision: RevisionLocation;
  }
  export interface GetApplicationRevisionOutput {
    /**
     * The name of the application that corresponds to the revision.
     */
    applicationName?: ApplicationName;
    /**
     * Additional information about the revision, including type and location.
     */
    revision?: RevisionLocation;
    /**
     * General information about the revision.
     */
    revisionInfo?: GenericRevisionInfo;
  }
  export interface GetDeploymentConfigInput {
    /**
     * The name of a deployment configuration associated with the applicable IAM user or AWS account.
     */
    deploymentConfigName: DeploymentConfigName;
  }
  export interface GetDeploymentConfigOutput {
    /**
     * Information about the deployment configuration.
     */
    deploymentConfigInfo?: DeploymentConfigInfo;
  }
  export interface GetDeploymentGroupInput {
    /**
     * The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.
     */
    applicationName: ApplicationName;
    /**
     * The name of an existing deployment group for the specified application.
     */
    deploymentGroupName: DeploymentGroupName;
  }
  export interface GetDeploymentGroupOutput {
    /**
     * Information about the deployment group.
     */
    deploymentGroupInfo?: DeploymentGroupInfo;
  }
  export interface GetDeploymentInput {
    /**
     * A deployment ID associated with the applicable IAM user or AWS account.
     */
    deploymentId: DeploymentId;
  }
  export interface GetDeploymentInstanceInput {
    /**
     * The unique ID of a deployment.
     */
    deploymentId: DeploymentId;
    /**
     * The unique ID of an instance in the deployment group.
     */
    instanceId: InstanceId;
  }
  export interface GetDeploymentInstanceOutput {
    /**
     * Information about the instance.
     */
    instanceSummary?: InstanceSummary;
  }
  export interface GetDeploymentOutput {
    /**
     * Information about the deployment.
     */
    deploymentInfo?: DeploymentInfo;
  }
  export interface GetOnPremisesInstanceInput {
    /**
     * The name of the on-premises instance about which to get information.
     */
    instanceName: InstanceName;
  }
  export interface GetOnPremisesInstanceOutput {
    /**
     * Information about the on-premises instance.
     */
    instanceInfo?: InstanceInfo;
  }
  export type GitHubAccountTokenName = string;
  export type GitHubAccountTokenNameList = GitHubAccountTokenName[];
  export interface GitHubLocation {
    /**
     * The GitHub account and repository pair that stores a reference to the commit that represents the bundled artifacts for the application revision.  Specified as account/repository.
     */
    repository?: Repository;
    /**
     * The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.
     */
    commitId?: CommitId;
  }
  export type GreenFleetProvisioningAction = "DISCOVER_EXISTING"|"COPY_AUTO_SCALING_GROUP"|string;
  export interface GreenFleetProvisioningOption {
    /**
     * The method used to add instances to a replacement environment.   DISCOVER_EXISTING: Use instances that already exist or will be created manually.   COPY_AUTO_SCALING_GROUP: Use settings from a specified Auto Scaling group to define and create instances in a new Auto Scaling group.  
     */
    action?: GreenFleetProvisioningAction;
  }
  export type IamSessionArn = string;
  export type IamUserArn = string;
  export type InstanceAction = "TERMINATE"|"KEEP_ALIVE"|string;
  export type InstanceArn = string;
  export type InstanceCount = number;
  export type InstanceId = string;
  export interface InstanceInfo {
    /**
     * The name of the on-premises instance.
     */
    instanceName?: InstanceName;
    /**
     * The ARN of the IAM session associated with the on-premises instance.
     */
    iamSessionArn?: IamSessionArn;
    /**
     * The IAM user ARN associated with the on-premises instance.
     */
    iamUserArn?: IamUserArn;
    /**
     * The ARN of the on-premises instance.
     */
    instanceArn?: InstanceArn;
    /**
     * The time at which the on-premises instance was registered.
     */
    registerTime?: Timestamp;
    /**
     * If the on-premises instance was deregistered, the time at which the on-premises instance was deregistered.
     */
    deregisterTime?: Timestamp;
    /**
     * The tags currently associated with the on-premises instance.
     */
    tags?: TagList;
  }
  export type InstanceInfoList = InstanceInfo[];
  export type InstanceName = string;
  export type InstanceNameList = InstanceName[];
  export type InstanceStatus = "Pending"|"InProgress"|"Succeeded"|"Failed"|"Skipped"|"Unknown"|"Ready"|string;
  export type InstanceStatusList = InstanceStatus[];
  export interface InstanceSummary {
    /**
     * The deployment ID.
     */
    deploymentId?: DeploymentId;
    /**
     * The instance ID.
     */
    instanceId?: InstanceId;
    /**
     * The deployment status for this instance:   Pending: The deployment is pending for this instance.   In Progress: The deployment is in progress for this instance.   Succeeded: The deployment has succeeded for this instance.   Failed: The deployment has failed for this instance.   Skipped: The deployment has been skipped for this instance.   Unknown: The deployment status is unknown for this instance.  
     */
    status?: InstanceStatus;
    /**
     * A timestamp indicating when the instance information was last updated.
     */
    lastUpdatedAt?: Timestamp;
    /**
     * A list of lifecycle events for this instance.
     */
    lifecycleEvents?: LifecycleEventList;
    /**
     * Information about which environment an instance belongs to in a blue/green deployment.   BLUE: The instance is part of the original environment.   GREEN: The instance is part of the replacement environment.  
     */
    instanceType?: InstanceType;
  }
  export type InstanceSummaryList = InstanceSummary[];
  export type InstanceType = "Blue"|"Green"|string;
  export type InstanceTypeList = InstanceType[];
  export type InstancesList = InstanceId[];
  export type Key = string;
  export interface LastDeploymentInfo {
    /**
     * The deployment ID.
     */
    deploymentId?: DeploymentId;
    /**
     * The status of the most recent deployment.
     */
    status?: DeploymentStatus;
    /**
     * A timestamp indicating when the most recent deployment to the deployment group completed.
     */
    endTime?: Timestamp;
    /**
     * A timestamp indicating when the most recent deployment to the deployment group started.
     */
    createTime?: Timestamp;
  }
  export type LifecycleErrorCode = "Success"|"ScriptMissing"|"ScriptNotExecutable"|"ScriptTimedOut"|"ScriptFailed"|"UnknownError"|string;
  export interface LifecycleEvent {
    /**
     * The deployment lifecycle event name, such as ApplicationStop, BeforeInstall, AfterInstall, ApplicationStart, or ValidateService.
     */
    lifecycleEventName?: LifecycleEventName;
    /**
     * Diagnostic information about the deployment lifecycle event.
     */
    diagnostics?: Diagnostics;
    /**
     * A timestamp indicating when the deployment lifecycle event started.
     */
    startTime?: Timestamp;
    /**
     * A timestamp indicating when the deployment lifecycle event ended.
     */
    endTime?: Timestamp;
    /**
     * The deployment lifecycle event status:   Pending: The deployment lifecycle event is pending.   InProgress: The deployment lifecycle event is in progress.   Succeeded: The deployment lifecycle event ran successfully.   Failed: The deployment lifecycle event has failed.   Skipped: The deployment lifecycle event has been skipped.   Unknown: The deployment lifecycle event is unknown.  
     */
    status?: LifecycleEventStatus;
  }
  export type LifecycleEventList = LifecycleEvent[];
  export type LifecycleEventName = string;
  export type LifecycleEventStatus = "Pending"|"InProgress"|"Succeeded"|"Failed"|"Skipped"|"Unknown"|string;
  export type LifecycleMessage = string;
  export interface ListApplicationRevisionsInput {
    /**
     * The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.
     */
    applicationName: ApplicationName;
    /**
     * The column name to use to sort the list results:   registerTime: Sort by the time the revisions were registered with AWS CodeDeploy.   firstUsedTime: Sort by the time the revisions were first used in a deployment.   lastUsedTime: Sort by the time the revisions were last used in a deployment.   If not specified or set to null, the results will be returned in an arbitrary order.
     */
    sortBy?: ApplicationRevisionSortBy;
    /**
     * The order in which to sort the list results:   ascending: ascending order.   descending: descending order.   If not specified, the results will be sorted in ascending order. If set to null, the results will be sorted in an arbitrary order.
     */
    sortOrder?: SortOrder;
    /**
     * An Amazon S3 bucket name to limit the search for revisions. If set to null, all of the user's buckets will be searched.
     */
    s3Bucket?: S3Bucket;
    /**
     * A key prefix for the set of Amazon S3 objects to limit the search for revisions.
     */
    s3KeyPrefix?: S3Key;
    /**
     * Whether to list revisions based on whether the revision is the target revision of an deployment group:   include: List revisions that are target revisions of a deployment group.   exclude: Do not list revisions that are target revisions of a deployment group.   ignore: List all revisions.  
     */
    deployed?: ListStateFilterAction;
    /**
     * An identifier returned from the previous list application revisions call. It can be used to return the next set of applications in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListApplicationRevisionsOutput {
    /**
     * A list of locations that contain the matching revisions.
     */
    revisions?: RevisionLocationList;
    /**
     * If a large amount of information is returned, an identifier will also be returned. It can be used in a subsequent list application revisions call to return the next set of application revisions in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListApplicationsInput {
    /**
     * An identifier returned from the previous list applications call. It can be used to return the next set of applications in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListApplicationsOutput {
    /**
     * A list of application names.
     */
    applications?: ApplicationsList;
    /**
     * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list applications call to return the next set of applications, will also be returned. in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListDeploymentConfigsInput {
    /**
     * An identifier returned from the previous list deployment configurations call. It can be used to return the next set of deployment configurations in the list. 
     */
    nextToken?: NextToken;
  }
  export interface ListDeploymentConfigsOutput {
    /**
     * A list of deployment configurations, including built-in configurations such as CodeDeployDefault.OneAtATime.
     */
    deploymentConfigsList?: DeploymentConfigsList;
    /**
     * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment configurations call to return the next set of deployment configurations in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListDeploymentGroupsInput {
    /**
     * The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.
     */
    applicationName: ApplicationName;
    /**
     * An identifier returned from the previous list deployment groups call. It can be used to return the next set of deployment groups in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListDeploymentGroupsOutput {
    /**
     * The application name.
     */
    applicationName?: ApplicationName;
    /**
     * A list of corresponding deployment group names.
     */
    deploymentGroups?: DeploymentGroupsList;
    /**
     * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment groups call to return the next set of deployment groups in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListDeploymentInstancesInput {
    /**
     * The unique ID of a deployment.
     */
    deploymentId: DeploymentId;
    /**
     * An identifier returned from the previous list deployment instances call. It can be used to return the next set of deployment instances in the list.
     */
    nextToken?: NextToken;
    /**
     * A subset of instances to list by status:   Pending: Include those instance with pending deployments.   InProgress: Include those instance where deployments are still in progress.   Succeeded: Include those instances with successful deployments.   Failed: Include those instance with failed deployments.   Skipped: Include those instance with skipped deployments.   Unknown: Include those instance with deployments in an unknown state.  
     */
    instanceStatusFilter?: InstanceStatusList;
    /**
     * The set of instances in a blue/green deployment, either those in the original environment ("BLUE") or those in the replacement environment ("GREEN"), for which you want to view instance information.
     */
    instanceTypeFilter?: InstanceTypeList;
  }
  export interface ListDeploymentInstancesOutput {
    /**
     * A list of instance IDs.
     */
    instancesList?: InstancesList;
    /**
     * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment instances call to return the next set of deployment instances in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListDeploymentsInput {
    /**
     * The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.
     */
    applicationName?: ApplicationName;
    /**
     * The name of an existing deployment group for the specified application.
     */
    deploymentGroupName?: DeploymentGroupName;
    /**
     * A subset of deployments to list by status:   Created: Include created deployments in the resulting list.   Queued: Include queued deployments in the resulting list.   In Progress: Include in-progress deployments in the resulting list.   Succeeded: Include successful deployments in the resulting list.   Failed: Include failed deployments in the resulting list.   Stopped: Include stopped deployments in the resulting list.  
     */
    includeOnlyStatuses?: DeploymentStatusList;
    /**
     * A time range (start and end) for returning a subset of the list of deployments.
     */
    createTimeRange?: TimeRange;
    /**
     * An identifier returned from the previous list deployments call. It can be used to return the next set of deployments in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListDeploymentsOutput {
    /**
     * A list of deployment IDs.
     */
    deployments?: DeploymentsList;
    /**
     * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployments call to return the next set of deployments in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListGitHubAccountTokenNamesInput {
    /**
     * An identifier returned from the previous ListGitHubAccountTokenNames call. It can be used to return the next set of names in the list. 
     */
    nextToken?: NextToken;
  }
  export interface ListGitHubAccountTokenNamesOutput {
    /**
     * A list of names of connections to GitHub accounts.
     */
    tokenNameList?: GitHubAccountTokenNameList;
    /**
     * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent ListGitHubAccountTokenNames call to return the next set of names in the list. 
     */
    nextToken?: NextToken;
  }
  export interface ListOnPremisesInstancesInput {
    /**
     * The registration status of the on-premises instances:   Deregistered: Include deregistered on-premises instances in the resulting list.   Registered: Include registered on-premises instances in the resulting list.  
     */
    registrationStatus?: RegistrationStatus;
    /**
     * The on-premises instance tags that will be used to restrict the corresponding on-premises instance names returned.
     */
    tagFilters?: TagFilterList;
    /**
     * An identifier returned from the previous list on-premises instances call. It can be used to return the next set of on-premises instances in the list.
     */
    nextToken?: NextToken;
  }
  export interface ListOnPremisesInstancesOutput {
    /**
     * The list of matching on-premises instance names.
     */
    instanceNames?: InstanceNameList;
    /**
     * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list on-premises instances call to return the next set of on-premises instances in the list.
     */
    nextToken?: NextToken;
  }
  export type ListStateFilterAction = "include"|"exclude"|"ignore"|string;
  export interface LoadBalancerInfo {
    /**
     * An array containing information about the load balancer to use for load balancing in a deployment. In Elastic Load Balancing, load balancers are used with Classic Load Balancers.
     */
    elbInfoList?: ELBInfoList;
    /**
     * An array containing information about the target group to use for load balancing in a deployment. In Elastic Load Balancing, target groups are used with Application Load Balancers.
     */
    targetGroupInfoList?: TargetGroupInfoList;
  }
  export type LogTail = string;
  export type Message = string;
  export interface MinimumHealthyHosts {
    /**
     * The minimum healthy instance value.
     */
    value?: MinimumHealthyHostsValue;
    /**
     * The minimum healthy instance type:   HOST_COUNT: The minimum number of healthy instance as an absolute value.   FLEET_PERCENT: The minimum number of healthy instance as a percentage of the total number of instance in the deployment.   In an example of nine instance, if a HOST_COUNT of six is specified, deploy to up to three instances at a time. The deployment will be successful if six or more instances are deployed to successfully; otherwise, the deployment fails. If a FLEET_PERCENT of 40 is specified, deploy to up to five instance at a time. The deployment will be successful if four or more instance are deployed to successfully; otherwise, the deployment fails.  In a call to the get deployment configuration operation, CodeDeployDefault.OneAtATime will return a minimum healthy instance type of MOST_CONCURRENCY and a value of 1. This means a deployment to only one instance at a time. (You cannot set the type to MOST_CONCURRENCY, only to HOST_COUNT or FLEET_PERCENT.) In addition, with CodeDeployDefault.OneAtATime, AWS CodeDeploy will try to ensure that all instances but one are kept in a healthy state during the deployment. Although this allows one instance at a time to be taken offline for a new deployment, it also means that if the deployment to the last instance fails, the overall deployment still succeeds.  For more information, see AWS CodeDeploy Instance Health in the AWS CodeDeploy User Guide.
     */
    type?: MinimumHealthyHostsType;
  }
  export type MinimumHealthyHostsType = "HOST_COUNT"|"FLEET_PERCENT"|string;
  export type MinimumHealthyHostsValue = number;
  export type NextToken = string;
  export type NullableBoolean = boolean;
  export interface OnPremisesTagSet {
    /**
     * A list containing other lists of on-premises instance tag groups. In order for an instance to be included in the deployment group, it must be identified by all the tag groups in the list.
     */
    onPremisesTagSetList?: OnPremisesTagSetList;
  }
  export type OnPremisesTagSetList = TagFilterList[];
  export interface RegisterApplicationRevisionInput {
    /**
     * The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.
     */
    applicationName: ApplicationName;
    /**
     * A comment about the revision.
     */
    description?: Description;
    /**
     * Information about the application revision to register, including type and location.
     */
    revision: RevisionLocation;
  }
  export interface RegisterOnPremisesInstanceInput {
    /**
     * The name of the on-premises instance to register.
     */
    instanceName: InstanceName;
    /**
     * The ARN of the IAM session to associate with the on-premises instance.
     */
    iamSessionArn?: IamSessionArn;
    /**
     * The ARN of the IAM user to associate with the on-premises instance.
     */
    iamUserArn?: IamUserArn;
  }
  export type RegistrationStatus = "Registered"|"Deregistered"|string;
  export interface RemoveTagsFromOnPremisesInstancesInput {
    /**
     * The tag key-value pairs to remove from the on-premises instances.
     */
    tags: TagList;
    /**
     * The names of the on-premises instances from which to remove tags.
     */
    instanceNames: InstanceNameList;
  }
  export type Repository = string;
  export interface RevisionInfo {
    /**
     * Information about the location and type of an application revision.
     */
    revisionLocation?: RevisionLocation;
    /**
     * Information about an application revision, including usage details and associated deployment groups.
     */
    genericRevisionInfo?: GenericRevisionInfo;
  }
  export type RevisionInfoList = RevisionInfo[];
  export interface RevisionLocation {
    /**
     * The type of application revision:   S3: An application revision stored in Amazon S3.   GitHub: An application revision stored in GitHub.  
     */
    revisionType?: RevisionLocationType;
    /**
     * Information about the location of application artifacts stored in Amazon S3. 
     */
    s3Location?: S3Location;
    /**
     * Information about the location of application artifacts stored in GitHub.
     */
    gitHubLocation?: GitHubLocation;
  }
  export type RevisionLocationList = RevisionLocation[];
  export type RevisionLocationType = "S3"|"GitHub"|string;
  export type Role = string;
  export interface RollbackInfo {
    /**
     * The ID of the deployment rollback.
     */
    rollbackDeploymentId?: DeploymentId;
    /**
     * The deployment ID of the deployment that was underway and triggered a rollback deployment because it failed or was stopped.
     */
    rollbackTriggeringDeploymentId?: DeploymentId;
    /**
     * Information describing the status of a deployment rollback; for example, whether the deployment can't be rolled back, is in progress, failed, or succeeded. 
     */
    rollbackMessage?: Description;
  }
  export type S3Bucket = string;
  export type S3Key = string;
  export interface S3Location {
    /**
     * The name of the Amazon S3 bucket where the application revision is stored.
     */
    bucket?: S3Bucket;
    /**
     * The name of the Amazon S3 object that represents the bundled artifacts for the application revision.
     */
    key?: S3Key;
    /**
     * The file type of the application revision. Must be one of the following:   tar: A tar archive file.   tgz: A compressed tar archive file.   zip: A zip archive file.  
     */
    bundleType?: BundleType;
    /**
     * A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision. If the version is not specified, the system will use the most recent version by default.
     */
    version?: VersionId;
    /**
     * The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision. If the ETag is not specified as an input parameter, ETag validation of the object will be skipped.
     */
    eTag?: ETag;
  }
  export type ScriptName = string;
  export interface SkipWaitTimeForInstanceTerminationInput {
    /**
     * The ID of the blue/green deployment for which you want to skip the instance termination wait time.
     */
    deploymentId?: DeploymentId;
  }
  export type SortOrder = "ascending"|"descending"|string;
  export interface StopDeploymentInput {
    /**
     * The unique ID of a deployment.
     */
    deploymentId: DeploymentId;
    /**
     * Indicates, when a deployment is stopped, whether instances that have been updated should be rolled back to the previous version of the application revision.
     */
    autoRollbackEnabled?: NullableBoolean;
  }
  export interface StopDeploymentOutput {
    /**
     * The status of the stop deployment operation:   Pending: The stop operation is pending.   Succeeded: The stop operation was successful.  
     */
    status?: StopStatus;
    /**
     * An accompanying status message.
     */
    statusMessage?: Message;
  }
  export type StopStatus = "Pending"|"Succeeded"|string;
  export interface Tag {
    /**
     * The tag's key.
     */
    Key?: Key;
    /**
     * The tag's value.
     */
    Value?: Value;
  }
  export interface TagFilter {
    /**
     * The on-premises instance tag filter key.
     */
    Key?: Key;
    /**
     * The on-premises instance tag filter value.
     */
    Value?: Value;
    /**
     * The on-premises instance tag filter type:   KEY_ONLY: Key only.   VALUE_ONLY: Value only.   KEY_AND_VALUE: Key and value.  
     */
    Type?: TagFilterType;
  }
  export type TagFilterList = TagFilter[];
  export type TagFilterType = "KEY_ONLY"|"VALUE_ONLY"|"KEY_AND_VALUE"|string;
  export type TagList = Tag[];
  export interface TargetGroupInfo {
    /**
     * For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. 
     */
    name?: TargetGroupName;
  }
  export type TargetGroupInfoList = TargetGroupInfo[];
  export type TargetGroupName = string;
  export interface TargetInstances {
    /**
     * The tag filter key, type, and value used to identify Amazon EC2 instances in a replacement environment for a blue/green deployment. Cannot be used in the same call as ec2TagSet.
     */
    tagFilters?: EC2TagFilterList;
    /**
     * The names of one or more Auto Scaling groups to identify a replacement environment for a blue/green deployment.
     */
    autoScalingGroups?: AutoScalingGroupNameList;
    /**
     * Information about the groups of EC2 instance tags that an instance must be identified by in order for it to be included in the replacement environment for a blue/green deployment. Cannot be used in the same call as tagFilters.
     */
    ec2TagSet?: EC2TagSet;
  }
  export interface TimeRange {
    /**
     * The start time of the time range.  Specify null to leave the start time open-ended. 
     */
    start?: Timestamp;
    /**
     * The end time of the time range.  Specify null to leave the end time open-ended. 
     */
    end?: Timestamp;
  }
  export type Timestamp = Date;
  export interface TriggerConfig {
    /**
     * The name of the notification trigger.
     */
    triggerName?: TriggerName;
    /**
     * The ARN of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.
     */
    triggerTargetArn?: TriggerTargetArn;
    /**
     * The event type or types for which notifications are triggered.
     */
    triggerEvents?: TriggerEventTypeList;
  }
  export type TriggerConfigList = TriggerConfig[];
  export type TriggerEventType = "DeploymentStart"|"DeploymentSuccess"|"DeploymentFailure"|"DeploymentStop"|"DeploymentRollback"|"DeploymentReady"|"InstanceStart"|"InstanceSuccess"|"InstanceFailure"|"InstanceReady"|string;
  export type TriggerEventTypeList = TriggerEventType[];
  export type TriggerName = string;
  export type TriggerTargetArn = string;
  export interface UpdateApplicationInput {
    /**
     * The current name of the application you want to change.
     */
    applicationName?: ApplicationName;
    /**
     * The new name to give the application.
     */
    newApplicationName?: ApplicationName;
  }
  export interface UpdateDeploymentGroupInput {
    /**
     * The application name corresponding to the deployment group to update.
     */
    applicationName: ApplicationName;
    /**
     * The current name of the deployment group.
     */
    currentDeploymentGroupName: DeploymentGroupName;
    /**
     * The new name of the deployment group, if you want to change it.
     */
    newDeploymentGroupName?: DeploymentGroupName;
    /**
     * The replacement deployment configuration name to use, if you want to change it.
     */
    deploymentConfigName?: DeploymentConfigName;
    /**
     * The replacement set of Amazon EC2 tags on which to filter, if you want to change them. To keep the existing tags, enter their names. To remove tags, do not enter any tag names.
     */
    ec2TagFilters?: EC2TagFilterList;
    /**
     * The replacement set of on-premises instance tags on which to filter, if you want to change them. To keep the existing tags, enter their names. To remove tags, do not enter any tag names.
     */
    onPremisesInstanceTagFilters?: TagFilterList;
    /**
     * The replacement list of Auto Scaling groups to be included in the deployment group, if you want to change them. To keep the Auto Scaling groups, enter their names. To remove Auto Scaling groups, do not enter any Auto Scaling group names.
     */
    autoScalingGroups?: AutoScalingGroupNameList;
    /**
     * A replacement ARN for the service role, if you want to change it.
     */
    serviceRoleArn?: Role;
    /**
     * Information about triggers to change when the deployment group is updated. For examples, see Modify Triggers in an AWS CodeDeploy Deployment Group in the AWS CodeDeploy User Guide.
     */
    triggerConfigurations?: TriggerConfigList;
    /**
     * Information to add or change about Amazon CloudWatch alarms when the deployment group is updated.
     */
    alarmConfiguration?: AlarmConfiguration;
    /**
     * Information for an automatic rollback configuration that is added or changed when a deployment group is updated.
     */
    autoRollbackConfiguration?: AutoRollbackConfiguration;
    /**
     * Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
     */
    deploymentStyle?: DeploymentStyle;
    /**
     * Information about blue/green deployment options for a deployment group.
     */
    blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
    /**
     * Information about the load balancer used in a deployment.
     */
    loadBalancerInfo?: LoadBalancerInfo;
    /**
     * Information about groups of tags applied to on-premises instances. The deployment group will include only EC2 instances identified by all the tag groups.
     */
    ec2TagSet?: EC2TagSet;
    /**
     * Information about an on-premises instance tag set. The deployment group will include only on-premises instances identified by all the tag groups.
     */
    onPremisesTagSet?: OnPremisesTagSet;
  }
  export interface UpdateDeploymentGroupOutput {
    /**
     * If the output contains no data, and the corresponding deployment group contained at least one Auto Scaling group, AWS CodeDeploy successfully removed all corresponding Auto Scaling lifecycle event hooks from the AWS account. If the output contains data, AWS CodeDeploy could not remove some Auto Scaling lifecycle event hooks from the AWS account.
     */
    hooksNotCleanedUp?: AutoScalingGroupList;
  }
  export type Value = string;
  export type VersionId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-10-06"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CodeDeploy client.
   */
  export import Types = CodeDeploy;
}
export = CodeDeploy;
