import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class DeviceFarm extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DeviceFarm.Types.ClientConfiguration)
  config: Config & DeviceFarm.Types.ClientConfiguration;
  /**
   * Creates a device pool.
   */
  createDevicePool(params: DeviceFarm.Types.CreateDevicePoolRequest, callback?: (err: AWSError, data: DeviceFarm.Types.CreateDevicePoolResult) => void): Request<DeviceFarm.Types.CreateDevicePoolResult, AWSError>;
  /**
   * Creates a device pool.
   */
  createDevicePool(callback?: (err: AWSError, data: DeviceFarm.Types.CreateDevicePoolResult) => void): Request<DeviceFarm.Types.CreateDevicePoolResult, AWSError>;
  /**
   * Creates a network profile.
   */
  createNetworkProfile(params: DeviceFarm.Types.CreateNetworkProfileRequest, callback?: (err: AWSError, data: DeviceFarm.Types.CreateNetworkProfileResult) => void): Request<DeviceFarm.Types.CreateNetworkProfileResult, AWSError>;
  /**
   * Creates a network profile.
   */
  createNetworkProfile(callback?: (err: AWSError, data: DeviceFarm.Types.CreateNetworkProfileResult) => void): Request<DeviceFarm.Types.CreateNetworkProfileResult, AWSError>;
  /**
   * Creates a new project.
   */
  createProject(params: DeviceFarm.Types.CreateProjectRequest, callback?: (err: AWSError, data: DeviceFarm.Types.CreateProjectResult) => void): Request<DeviceFarm.Types.CreateProjectResult, AWSError>;
  /**
   * Creates a new project.
   */
  createProject(callback?: (err: AWSError, data: DeviceFarm.Types.CreateProjectResult) => void): Request<DeviceFarm.Types.CreateProjectResult, AWSError>;
  /**
   * Specifies and starts a remote access session.
   */
  createRemoteAccessSession(params: DeviceFarm.Types.CreateRemoteAccessSessionRequest, callback?: (err: AWSError, data: DeviceFarm.Types.CreateRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.CreateRemoteAccessSessionResult, AWSError>;
  /**
   * Specifies and starts a remote access session.
   */
  createRemoteAccessSession(callback?: (err: AWSError, data: DeviceFarm.Types.CreateRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.CreateRemoteAccessSessionResult, AWSError>;
  /**
   * Uploads an app or test scripts.
   */
  createUpload(params: DeviceFarm.Types.CreateUploadRequest, callback?: (err: AWSError, data: DeviceFarm.Types.CreateUploadResult) => void): Request<DeviceFarm.Types.CreateUploadResult, AWSError>;
  /**
   * Uploads an app or test scripts.
   */
  createUpload(callback?: (err: AWSError, data: DeviceFarm.Types.CreateUploadResult) => void): Request<DeviceFarm.Types.CreateUploadResult, AWSError>;
  /**
   * Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
   */
  deleteDevicePool(params: DeviceFarm.Types.DeleteDevicePoolRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteDevicePoolResult) => void): Request<DeviceFarm.Types.DeleteDevicePoolResult, AWSError>;
  /**
   * Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
   */
  deleteDevicePool(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteDevicePoolResult) => void): Request<DeviceFarm.Types.DeleteDevicePoolResult, AWSError>;
  /**
   * Deletes a network profile.
   */
  deleteNetworkProfile(params: DeviceFarm.Types.DeleteNetworkProfileRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteNetworkProfileResult) => void): Request<DeviceFarm.Types.DeleteNetworkProfileResult, AWSError>;
  /**
   * Deletes a network profile.
   */
  deleteNetworkProfile(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteNetworkProfileResult) => void): Request<DeviceFarm.Types.DeleteNetworkProfileResult, AWSError>;
  /**
   * Deletes an AWS Device Farm project, given the project ARN.  Note Deleting this resource does not stop an in-progress run.
   */
  deleteProject(params: DeviceFarm.Types.DeleteProjectRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteProjectResult) => void): Request<DeviceFarm.Types.DeleteProjectResult, AWSError>;
  /**
   * Deletes an AWS Device Farm project, given the project ARN.  Note Deleting this resource does not stop an in-progress run.
   */
  deleteProject(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteProjectResult) => void): Request<DeviceFarm.Types.DeleteProjectResult, AWSError>;
  /**
   * Deletes a completed remote access session and its results.
   */
  deleteRemoteAccessSession(params: DeviceFarm.Types.DeleteRemoteAccessSessionRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.DeleteRemoteAccessSessionResult, AWSError>;
  /**
   * Deletes a completed remote access session and its results.
   */
  deleteRemoteAccessSession(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.DeleteRemoteAccessSessionResult, AWSError>;
  /**
   * Deletes the run, given the run ARN.  Note Deleting this resource does not stop an in-progress run.
   */
  deleteRun(params: DeviceFarm.Types.DeleteRunRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteRunResult) => void): Request<DeviceFarm.Types.DeleteRunResult, AWSError>;
  /**
   * Deletes the run, given the run ARN.  Note Deleting this resource does not stop an in-progress run.
   */
  deleteRun(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteRunResult) => void): Request<DeviceFarm.Types.DeleteRunResult, AWSError>;
  /**
   * Deletes an upload given the upload ARN.
   */
  deleteUpload(params: DeviceFarm.Types.DeleteUploadRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteUploadResult) => void): Request<DeviceFarm.Types.DeleteUploadResult, AWSError>;
  /**
   * Deletes an upload given the upload ARN.
   */
  deleteUpload(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteUploadResult) => void): Request<DeviceFarm.Types.DeleteUploadResult, AWSError>;
  /**
   * Returns the number of unmetered iOS and/or unmetered Android devices that have been purchased by the account.
   */
  getAccountSettings(params: DeviceFarm.Types.GetAccountSettingsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetAccountSettingsResult) => void): Request<DeviceFarm.Types.GetAccountSettingsResult, AWSError>;
  /**
   * Returns the number of unmetered iOS and/or unmetered Android devices that have been purchased by the account.
   */
  getAccountSettings(callback?: (err: AWSError, data: DeviceFarm.Types.GetAccountSettingsResult) => void): Request<DeviceFarm.Types.GetAccountSettingsResult, AWSError>;
  /**
   * Gets information about a unique device type.
   */
  getDevice(params: DeviceFarm.Types.GetDeviceRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetDeviceResult) => void): Request<DeviceFarm.Types.GetDeviceResult, AWSError>;
  /**
   * Gets information about a unique device type.
   */
  getDevice(callback?: (err: AWSError, data: DeviceFarm.Types.GetDeviceResult) => void): Request<DeviceFarm.Types.GetDeviceResult, AWSError>;
  /**
   * Gets information about a device pool.
   */
  getDevicePool(params: DeviceFarm.Types.GetDevicePoolRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetDevicePoolResult) => void): Request<DeviceFarm.Types.GetDevicePoolResult, AWSError>;
  /**
   * Gets information about a device pool.
   */
  getDevicePool(callback?: (err: AWSError, data: DeviceFarm.Types.GetDevicePoolResult) => void): Request<DeviceFarm.Types.GetDevicePoolResult, AWSError>;
  /**
   * Gets information about compatibility with a device pool.
   */
  getDevicePoolCompatibility(params: DeviceFarm.Types.GetDevicePoolCompatibilityRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetDevicePoolCompatibilityResult) => void): Request<DeviceFarm.Types.GetDevicePoolCompatibilityResult, AWSError>;
  /**
   * Gets information about compatibility with a device pool.
   */
  getDevicePoolCompatibility(callback?: (err: AWSError, data: DeviceFarm.Types.GetDevicePoolCompatibilityResult) => void): Request<DeviceFarm.Types.GetDevicePoolCompatibilityResult, AWSError>;
  /**
   * Gets information about a job.
   */
  getJob(params: DeviceFarm.Types.GetJobRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetJobResult) => void): Request<DeviceFarm.Types.GetJobResult, AWSError>;
  /**
   * Gets information about a job.
   */
  getJob(callback?: (err: AWSError, data: DeviceFarm.Types.GetJobResult) => void): Request<DeviceFarm.Types.GetJobResult, AWSError>;
  /**
   * Returns information about a network profile.
   */
  getNetworkProfile(params: DeviceFarm.Types.GetNetworkProfileRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetNetworkProfileResult) => void): Request<DeviceFarm.Types.GetNetworkProfileResult, AWSError>;
  /**
   * Returns information about a network profile.
   */
  getNetworkProfile(callback?: (err: AWSError, data: DeviceFarm.Types.GetNetworkProfileResult) => void): Request<DeviceFarm.Types.GetNetworkProfileResult, AWSError>;
  /**
   * Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  getOfferingStatus(params: DeviceFarm.Types.GetOfferingStatusRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetOfferingStatusResult) => void): Request<DeviceFarm.Types.GetOfferingStatusResult, AWSError>;
  /**
   * Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  getOfferingStatus(callback?: (err: AWSError, data: DeviceFarm.Types.GetOfferingStatusResult) => void): Request<DeviceFarm.Types.GetOfferingStatusResult, AWSError>;
  /**
   * Gets information about a project.
   */
  getProject(params: DeviceFarm.Types.GetProjectRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetProjectResult) => void): Request<DeviceFarm.Types.GetProjectResult, AWSError>;
  /**
   * Gets information about a project.
   */
  getProject(callback?: (err: AWSError, data: DeviceFarm.Types.GetProjectResult) => void): Request<DeviceFarm.Types.GetProjectResult, AWSError>;
  /**
   * Returns a link to a currently running remote access session.
   */
  getRemoteAccessSession(params: DeviceFarm.Types.GetRemoteAccessSessionRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.GetRemoteAccessSessionResult, AWSError>;
  /**
   * Returns a link to a currently running remote access session.
   */
  getRemoteAccessSession(callback?: (err: AWSError, data: DeviceFarm.Types.GetRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.GetRemoteAccessSessionResult, AWSError>;
  /**
   * Gets information about a run.
   */
  getRun(params: DeviceFarm.Types.GetRunRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetRunResult) => void): Request<DeviceFarm.Types.GetRunResult, AWSError>;
  /**
   * Gets information about a run.
   */
  getRun(callback?: (err: AWSError, data: DeviceFarm.Types.GetRunResult) => void): Request<DeviceFarm.Types.GetRunResult, AWSError>;
  /**
   * Gets information about a suite.
   */
  getSuite(params: DeviceFarm.Types.GetSuiteRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetSuiteResult) => void): Request<DeviceFarm.Types.GetSuiteResult, AWSError>;
  /**
   * Gets information about a suite.
   */
  getSuite(callback?: (err: AWSError, data: DeviceFarm.Types.GetSuiteResult) => void): Request<DeviceFarm.Types.GetSuiteResult, AWSError>;
  /**
   * Gets information about a test.
   */
  getTest(params: DeviceFarm.Types.GetTestRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetTestResult) => void): Request<DeviceFarm.Types.GetTestResult, AWSError>;
  /**
   * Gets information about a test.
   */
  getTest(callback?: (err: AWSError, data: DeviceFarm.Types.GetTestResult) => void): Request<DeviceFarm.Types.GetTestResult, AWSError>;
  /**
   * Gets information about an upload.
   */
  getUpload(params: DeviceFarm.Types.GetUploadRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetUploadResult) => void): Request<DeviceFarm.Types.GetUploadResult, AWSError>;
  /**
   * Gets information about an upload.
   */
  getUpload(callback?: (err: AWSError, data: DeviceFarm.Types.GetUploadResult) => void): Request<DeviceFarm.Types.GetUploadResult, AWSError>;
  /**
   * Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
   */
  installToRemoteAccessSession(params: DeviceFarm.Types.InstallToRemoteAccessSessionRequest, callback?: (err: AWSError, data: DeviceFarm.Types.InstallToRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.InstallToRemoteAccessSessionResult, AWSError>;
  /**
   * Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
   */
  installToRemoteAccessSession(callback?: (err: AWSError, data: DeviceFarm.Types.InstallToRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.InstallToRemoteAccessSessionResult, AWSError>;
  /**
   * Gets information about artifacts.
   */
  listArtifacts(params: DeviceFarm.Types.ListArtifactsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListArtifactsResult) => void): Request<DeviceFarm.Types.ListArtifactsResult, AWSError>;
  /**
   * Gets information about artifacts.
   */
  listArtifacts(callback?: (err: AWSError, data: DeviceFarm.Types.ListArtifactsResult) => void): Request<DeviceFarm.Types.ListArtifactsResult, AWSError>;
  /**
   * Gets information about device pools.
   */
  listDevicePools(params: DeviceFarm.Types.ListDevicePoolsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListDevicePoolsResult) => void): Request<DeviceFarm.Types.ListDevicePoolsResult, AWSError>;
  /**
   * Gets information about device pools.
   */
  listDevicePools(callback?: (err: AWSError, data: DeviceFarm.Types.ListDevicePoolsResult) => void): Request<DeviceFarm.Types.ListDevicePoolsResult, AWSError>;
  /**
   * Gets information about unique device types.
   */
  listDevices(params: DeviceFarm.Types.ListDevicesRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListDevicesResult) => void): Request<DeviceFarm.Types.ListDevicesResult, AWSError>;
  /**
   * Gets information about unique device types.
   */
  listDevices(callback?: (err: AWSError, data: DeviceFarm.Types.ListDevicesResult) => void): Request<DeviceFarm.Types.ListDevicesResult, AWSError>;
  /**
   * Gets information about jobs.
   */
  listJobs(params: DeviceFarm.Types.ListJobsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListJobsResult) => void): Request<DeviceFarm.Types.ListJobsResult, AWSError>;
  /**
   * Gets information about jobs.
   */
  listJobs(callback?: (err: AWSError, data: DeviceFarm.Types.ListJobsResult) => void): Request<DeviceFarm.Types.ListJobsResult, AWSError>;
  /**
   * Returns the list of available network profiles.
   */
  listNetworkProfiles(params: DeviceFarm.Types.ListNetworkProfilesRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListNetworkProfilesResult) => void): Request<DeviceFarm.Types.ListNetworkProfilesResult, AWSError>;
  /**
   * Returns the list of available network profiles.
   */
  listNetworkProfiles(callback?: (err: AWSError, data: DeviceFarm.Types.ListNetworkProfilesResult) => void): Request<DeviceFarm.Types.ListNetworkProfilesResult, AWSError>;
  /**
   * Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a NotEligible error if the caller is not permitted to invoke the operation. Contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  listOfferingPromotions(params: DeviceFarm.Types.ListOfferingPromotionsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListOfferingPromotionsResult) => void): Request<DeviceFarm.Types.ListOfferingPromotionsResult, AWSError>;
  /**
   * Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a NotEligible error if the caller is not permitted to invoke the operation. Contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  listOfferingPromotions(callback?: (err: AWSError, data: DeviceFarm.Types.ListOfferingPromotionsResult) => void): Request<DeviceFarm.Types.ListOfferingPromotionsResult, AWSError>;
  /**
   * Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  listOfferingTransactions(params: DeviceFarm.Types.ListOfferingTransactionsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListOfferingTransactionsResult) => void): Request<DeviceFarm.Types.ListOfferingTransactionsResult, AWSError>;
  /**
   * Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  listOfferingTransactions(callback?: (err: AWSError, data: DeviceFarm.Types.ListOfferingTransactionsResult) => void): Request<DeviceFarm.Types.ListOfferingTransactionsResult, AWSError>;
  /**
   * Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  listOfferings(params: DeviceFarm.Types.ListOfferingsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListOfferingsResult) => void): Request<DeviceFarm.Types.ListOfferingsResult, AWSError>;
  /**
   * Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  listOfferings(callback?: (err: AWSError, data: DeviceFarm.Types.ListOfferingsResult) => void): Request<DeviceFarm.Types.ListOfferingsResult, AWSError>;
  /**
   * Gets information about projects.
   */
  listProjects(params: DeviceFarm.Types.ListProjectsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListProjectsResult) => void): Request<DeviceFarm.Types.ListProjectsResult, AWSError>;
  /**
   * Gets information about projects.
   */
  listProjects(callback?: (err: AWSError, data: DeviceFarm.Types.ListProjectsResult) => void): Request<DeviceFarm.Types.ListProjectsResult, AWSError>;
  /**
   * Returns a list of all currently running remote access sessions.
   */
  listRemoteAccessSessions(params: DeviceFarm.Types.ListRemoteAccessSessionsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListRemoteAccessSessionsResult) => void): Request<DeviceFarm.Types.ListRemoteAccessSessionsResult, AWSError>;
  /**
   * Returns a list of all currently running remote access sessions.
   */
  listRemoteAccessSessions(callback?: (err: AWSError, data: DeviceFarm.Types.ListRemoteAccessSessionsResult) => void): Request<DeviceFarm.Types.ListRemoteAccessSessionsResult, AWSError>;
  /**
   * Gets information about runs, given an AWS Device Farm project ARN.
   */
  listRuns(params: DeviceFarm.Types.ListRunsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListRunsResult) => void): Request<DeviceFarm.Types.ListRunsResult, AWSError>;
  /**
   * Gets information about runs, given an AWS Device Farm project ARN.
   */
  listRuns(callback?: (err: AWSError, data: DeviceFarm.Types.ListRunsResult) => void): Request<DeviceFarm.Types.ListRunsResult, AWSError>;
  /**
   * Gets information about samples, given an AWS Device Farm project ARN
   */
  listSamples(params: DeviceFarm.Types.ListSamplesRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListSamplesResult) => void): Request<DeviceFarm.Types.ListSamplesResult, AWSError>;
  /**
   * Gets information about samples, given an AWS Device Farm project ARN
   */
  listSamples(callback?: (err: AWSError, data: DeviceFarm.Types.ListSamplesResult) => void): Request<DeviceFarm.Types.ListSamplesResult, AWSError>;
  /**
   * Gets information about suites.
   */
  listSuites(params: DeviceFarm.Types.ListSuitesRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListSuitesResult) => void): Request<DeviceFarm.Types.ListSuitesResult, AWSError>;
  /**
   * Gets information about suites.
   */
  listSuites(callback?: (err: AWSError, data: DeviceFarm.Types.ListSuitesResult) => void): Request<DeviceFarm.Types.ListSuitesResult, AWSError>;
  /**
   * Gets information about tests.
   */
  listTests(params: DeviceFarm.Types.ListTestsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListTestsResult) => void): Request<DeviceFarm.Types.ListTestsResult, AWSError>;
  /**
   * Gets information about tests.
   */
  listTests(callback?: (err: AWSError, data: DeviceFarm.Types.ListTestsResult) => void): Request<DeviceFarm.Types.ListTestsResult, AWSError>;
  /**
   * Gets information about unique problems.
   */
  listUniqueProblems(params: DeviceFarm.Types.ListUniqueProblemsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListUniqueProblemsResult) => void): Request<DeviceFarm.Types.ListUniqueProblemsResult, AWSError>;
  /**
   * Gets information about unique problems.
   */
  listUniqueProblems(callback?: (err: AWSError, data: DeviceFarm.Types.ListUniqueProblemsResult) => void): Request<DeviceFarm.Types.ListUniqueProblemsResult, AWSError>;
  /**
   * Gets information about uploads, given an AWS Device Farm project ARN.
   */
  listUploads(params: DeviceFarm.Types.ListUploadsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListUploadsResult) => void): Request<DeviceFarm.Types.ListUploadsResult, AWSError>;
  /**
   * Gets information about uploads, given an AWS Device Farm project ARN.
   */
  listUploads(callback?: (err: AWSError, data: DeviceFarm.Types.ListUploadsResult) => void): Request<DeviceFarm.Types.ListUploadsResult, AWSError>;
  /**
   * Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  purchaseOffering(params: DeviceFarm.Types.PurchaseOfferingRequest, callback?: (err: AWSError, data: DeviceFarm.Types.PurchaseOfferingResult) => void): Request<DeviceFarm.Types.PurchaseOfferingResult, AWSError>;
  /**
   * Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  purchaseOffering(callback?: (err: AWSError, data: DeviceFarm.Types.PurchaseOfferingResult) => void): Request<DeviceFarm.Types.PurchaseOfferingResult, AWSError>;
  /**
   * Explicitly sets the quantity of devices to renew for an offering, starting from the effectiveDate of the next period. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  renewOffering(params: DeviceFarm.Types.RenewOfferingRequest, callback?: (err: AWSError, data: DeviceFarm.Types.RenewOfferingResult) => void): Request<DeviceFarm.Types.RenewOfferingResult, AWSError>;
  /**
   * Explicitly sets the quantity of devices to renew for an offering, starting from the effectiveDate of the next period. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  renewOffering(callback?: (err: AWSError, data: DeviceFarm.Types.RenewOfferingResult) => void): Request<DeviceFarm.Types.RenewOfferingResult, AWSError>;
  /**
   * Schedules a run.
   */
  scheduleRun(params: DeviceFarm.Types.ScheduleRunRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ScheduleRunResult) => void): Request<DeviceFarm.Types.ScheduleRunResult, AWSError>;
  /**
   * Schedules a run.
   */
  scheduleRun(callback?: (err: AWSError, data: DeviceFarm.Types.ScheduleRunResult) => void): Request<DeviceFarm.Types.ScheduleRunResult, AWSError>;
  /**
   * Ends a specified remote access session.
   */
  stopRemoteAccessSession(params: DeviceFarm.Types.StopRemoteAccessSessionRequest, callback?: (err: AWSError, data: DeviceFarm.Types.StopRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.StopRemoteAccessSessionResult, AWSError>;
  /**
   * Ends a specified remote access session.
   */
  stopRemoteAccessSession(callback?: (err: AWSError, data: DeviceFarm.Types.StopRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.StopRemoteAccessSessionResult, AWSError>;
  /**
   * Initiates a stop request for the current test run. AWS Device Farm will immediately stop the run on devices where tests have not started executing, and you will not be billed for these devices. On devices where tests have started executing, Setup Suite and Teardown Suite tests will run to completion before stopping execution on those devices. You will be billed for Setup, Teardown, and any tests that were in progress or already completed.
   */
  stopRun(params: DeviceFarm.Types.StopRunRequest, callback?: (err: AWSError, data: DeviceFarm.Types.StopRunResult) => void): Request<DeviceFarm.Types.StopRunResult, AWSError>;
  /**
   * Initiates a stop request for the current test run. AWS Device Farm will immediately stop the run on devices where tests have not started executing, and you will not be billed for these devices. On devices where tests have started executing, Setup Suite and Teardown Suite tests will run to completion before stopping execution on those devices. You will be billed for Setup, Teardown, and any tests that were in progress or already completed.
   */
  stopRun(callback?: (err: AWSError, data: DeviceFarm.Types.StopRunResult) => void): Request<DeviceFarm.Types.StopRunResult, AWSError>;
  /**
   * Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
   */
  updateDevicePool(params: DeviceFarm.Types.UpdateDevicePoolRequest, callback?: (err: AWSError, data: DeviceFarm.Types.UpdateDevicePoolResult) => void): Request<DeviceFarm.Types.UpdateDevicePoolResult, AWSError>;
  /**
   * Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
   */
  updateDevicePool(callback?: (err: AWSError, data: DeviceFarm.Types.UpdateDevicePoolResult) => void): Request<DeviceFarm.Types.UpdateDevicePoolResult, AWSError>;
  /**
   * Updates the network profile with specific settings.
   */
  updateNetworkProfile(params: DeviceFarm.Types.UpdateNetworkProfileRequest, callback?: (err: AWSError, data: DeviceFarm.Types.UpdateNetworkProfileResult) => void): Request<DeviceFarm.Types.UpdateNetworkProfileResult, AWSError>;
  /**
   * Updates the network profile with specific settings.
   */
  updateNetworkProfile(callback?: (err: AWSError, data: DeviceFarm.Types.UpdateNetworkProfileResult) => void): Request<DeviceFarm.Types.UpdateNetworkProfileResult, AWSError>;
  /**
   * Modifies the specified project name, given the project ARN and a new name.
   */
  updateProject(params: DeviceFarm.Types.UpdateProjectRequest, callback?: (err: AWSError, data: DeviceFarm.Types.UpdateProjectResult) => void): Request<DeviceFarm.Types.UpdateProjectResult, AWSError>;
  /**
   * Modifies the specified project name, given the project ARN and a new name.
   */
  updateProject(callback?: (err: AWSError, data: DeviceFarm.Types.UpdateProjectResult) => void): Request<DeviceFarm.Types.UpdateProjectResult, AWSError>;
}
declare namespace DeviceFarm {
  export type AWSAccountNumber = string;
  export interface AccountSettings {
    /**
     * The AWS account number specified in the AccountSettings container.
     */
    awsAccountNumber?: AWSAccountNumber;
    /**
     * Returns the unmetered devices you have purchased or want to purchase.
     */
    unmeteredDevices?: PurchasedDevicesMap;
    /**
     * Returns the unmetered remote access devices you have purchased or want to purchase.
     */
    unmeteredRemoteAccessDevices?: PurchasedDevicesMap;
    /**
     * The maximum number of minutes a test run will execute before it times out.
     */
    maxJobTimeoutMinutes?: JobTimeoutMinutes;
    /**
     * Information about an AWS account's usage of free trial device minutes.
     */
    trialMinutes?: TrialMinutes;
    /**
     * The maximum number of device slots that the AWS account can purchase. Each maximum is expressed as an offering-id:number pair, where the offering-id represents one of the IDs returned by the ListOfferings command.
     */
    maxSlots?: MaxSlotMap;
    /**
     * The default number of minutes (at the account level) a test run will execute before it times out. Default value is 60 minutes.
     */
    defaultJobTimeoutMinutes?: JobTimeoutMinutes;
  }
  export type AccountsCleanup = boolean;
  export type AmazonResourceName = string;
  export type AmazonResourceNames = AmazonResourceName[];
  export type AndroidPaths = String[];
  export type AppPackagesCleanup = boolean;
  export interface Artifact {
    /**
     * The artifact's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The artifact's name.
     */
    name?: Name;
    /**
     * The artifact's type. Allowed values include the following:   UNKNOWN: An unknown type.   SCREENSHOT: The screenshot type.   DEVICE_LOG: The device log type.   MESSAGE_LOG: The message log type.   RESULT_LOG: The result log type.   SERVICE_LOG: The service log type.   WEBKIT_LOG: The web kit log type.   INSTRUMENTATION_OUTPUT: The instrumentation type.   EXERCISER_MONKEY_OUTPUT: For Android, the artifact (log) generated by an Android fuzz test.   CALABASH_JSON_OUTPUT: The Calabash JSON output type.   CALABASH_PRETTY_OUTPUT: The Calabash pretty output type.   CALABASH_STANDARD_OUTPUT: The Calabash standard output type.   CALABASH_JAVA_XML_OUTPUT: The Calabash Java XML output type.   AUTOMATION_OUTPUT: The automation output type.   APPIUM_SERVER_OUTPUT: The Appium server output type.   APPIUM_JAVA_OUTPUT: The Appium Java output type.   APPIUM_JAVA_XML_OUTPUT: The Appium Java XML output type.   APPIUM_PYTHON_OUTPUT: The Appium Python output type.   APPIUM_PYTHON_XML_OUTPUT: The Appium Python XML output type.   EXPLORER_EVENT_LOG: The Explorer event log output type.   EXPLORER_SUMMARY_LOG: The Explorer summary log output type.   APPLICATION_CRASH_REPORT: The application crash report output type.   XCTEST_LOG: The XCode test output type.  
     */
    type?: ArtifactType;
    /**
     * The artifact's file extension.
     */
    extension?: String;
    /**
     * The pre-signed Amazon S3 URL that can be used with a corresponding GET request to download the artifact's file.
     */
    url?: URL;
  }
  export type ArtifactCategory = "SCREENSHOT"|"FILE"|"LOG"|string;
  export type ArtifactType = "UNKNOWN"|"SCREENSHOT"|"DEVICE_LOG"|"MESSAGE_LOG"|"VIDEO_LOG"|"RESULT_LOG"|"SERVICE_LOG"|"WEBKIT_LOG"|"INSTRUMENTATION_OUTPUT"|"EXERCISER_MONKEY_OUTPUT"|"CALABASH_JSON_OUTPUT"|"CALABASH_PRETTY_OUTPUT"|"CALABASH_STANDARD_OUTPUT"|"CALABASH_JAVA_XML_OUTPUT"|"AUTOMATION_OUTPUT"|"APPIUM_SERVER_OUTPUT"|"APPIUM_JAVA_OUTPUT"|"APPIUM_JAVA_XML_OUTPUT"|"APPIUM_PYTHON_OUTPUT"|"APPIUM_PYTHON_XML_OUTPUT"|"EXPLORER_EVENT_LOG"|"EXPLORER_SUMMARY_LOG"|"APPLICATION_CRASH_REPORT"|"XCTEST_LOG"|"VIDEO"|"CUSTOMER_ARTIFACT"|"CUSTOMER_ARTIFACT_LOG"|string;
  export type Artifacts = Artifact[];
  export type BillingMethod = "METERED"|"UNMETERED"|string;
  export type Boolean = boolean;
  export interface CPU {
    /**
     * The CPU's frequency.
     */
    frequency?: String;
    /**
     * The CPU's architecture, for example x86 or ARM.
     */
    architecture?: String;
    /**
     * The clock speed of the device's CPU, expressed in hertz (Hz). For example, a 1.2 GHz CPU is expressed as 1200000000.
     */
    clock?: Double;
  }
  export type ClientId = string;
  export type ContentType = string;
  export interface Counters {
    /**
     * The total number of entities.
     */
    total?: Integer;
    /**
     * The number of passed entities.
     */
    passed?: Integer;
    /**
     * The number of failed entities.
     */
    failed?: Integer;
    /**
     * The number of warned entities.
     */
    warned?: Integer;
    /**
     * The number of errored entities.
     */
    errored?: Integer;
    /**
     * The number of stopped entities.
     */
    stopped?: Integer;
    /**
     * The number of skipped entities.
     */
    skipped?: Integer;
  }
  export interface CreateDevicePoolRequest {
    /**
     * The ARN of the project for the device pool.
     */
    projectArn: AmazonResourceName;
    /**
     * The device pool's name.
     */
    name: Name;
    /**
     * The device pool's description.
     */
    description?: Message;
    /**
     * The device pool's rules.
     */
    rules: Rules;
  }
  export interface CreateDevicePoolResult {
    /**
     * The newly created device pool.
     */
    devicePool?: DevicePool;
  }
  export interface CreateNetworkProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of the project for which you want to create a network profile.
     */
    projectArn: AmazonResourceName;
    /**
     * The name you wish to specify for the new network profile.
     */
    name: Name;
    /**
     * The description of the network profile.
     */
    description?: Message;
    /**
     * The type of network profile you wish to create. Valid values are listed below.
     */
    type?: NetworkProfileType;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    uplinkBandwidthBits?: Long;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    downlinkBandwidthBits?: Long;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    uplinkDelayMs?: Long;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    downlinkDelayMs?: Long;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    uplinkJitterMs?: Long;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    downlinkJitterMs?: Long;
    /**
     * Proportion of transmitted packets that fail to arrive from 0 to 100 percent.
     */
    uplinkLossPercent?: PercentInteger;
    /**
     * Proportion of received packets that fail to arrive from 0 to 100 percent.
     */
    downlinkLossPercent?: PercentInteger;
  }
  export interface CreateNetworkProfileResult {
    /**
     * The network profile that is returned by the create network profile request.
     */
    networkProfile?: NetworkProfile;
  }
  export interface CreateProjectRequest {
    /**
     * The project's name.
     */
    name: Name;
    /**
     * Sets the execution timeout value (in minutes) for a project. All test runs in this project will use the specified execution timeout value unless overridden when scheduling a run.
     */
    defaultJobTimeoutMinutes?: JobTimeoutMinutes;
  }
  export interface CreateProjectResult {
    /**
     * The newly created project.
     */
    project?: Project;
  }
  export interface CreateRemoteAccessSessionConfiguration {
    /**
     * Returns the billing method for purposes of configuring a remote access session.
     */
    billingMethod?: BillingMethod;
  }
  export interface CreateRemoteAccessSessionRequest {
    /**
     * The Amazon Resource Name (ARN) of the project for which you want to create a remote access session.
     */
    projectArn: AmazonResourceName;
    /**
     * The Amazon Resource Name (ARN) of the device for which you want to create a remote access session.
     */
    deviceArn: AmazonResourceName;
    /**
     * The public key of the ssh key pair you want to use for connecting to remote devices in your remote debugging session. This is only required if remoteDebugEnabled is set to true.
     */
    sshPublicKey?: SshPublicKey;
    /**
     * Set to true if you want to access devices remotely for debugging in your remote access session.
     */
    remoteDebugEnabled?: Boolean;
    /**
     * The name of the remote access session that you wish to create.
     */
    name?: Name;
    /**
     * Unique identifier for the client. If you want access to multiple devices on the same client, you should pass the same clientId value in each call to CreateRemoteAccessSession. This is required only if remoteDebugEnabled is set to true true.
     */
    clientId?: ClientId;
    /**
     * The configuration information for the remote access session request.
     */
    configuration?: CreateRemoteAccessSessionConfiguration;
  }
  export interface CreateRemoteAccessSessionResult {
    /**
     * A container that describes the remote access session when the request to create a remote access session is sent.
     */
    remoteAccessSession?: RemoteAccessSession;
  }
  export interface CreateUploadRequest {
    /**
     * The ARN of the project for the upload.
     */
    projectArn: AmazonResourceName;
    /**
     * The upload's file name. The name should not contain the '/' character. If uploading an iOS app, the file name needs to end with the .ipa extension. If uploading an Android app, the file name needs to end with the .apk extension. For all others, the file name must end with the .zip file extension.
     */
    name: Name;
    /**
     * The upload's upload type. Must be one of the following values:   ANDROID_APP: An Android upload.   IOS_APP: An iOS upload.   WEB_APP: A web appliction upload.   EXTERNAL_DATA: An external data upload.   APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.   APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.   APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.   APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.   APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.   APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload.   CALABASH_TEST_PACKAGE: A Calabash test package upload.   INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.   UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.   UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.   XCTEST_TEST_PACKAGE: An XCode test package upload.   XCTEST_UI_TEST_PACKAGE: An XCode UI test package upload.    Note If you call CreateUpload with WEB_APP specified, AWS Device Farm throws an ArgumentException error.
     */
    type: UploadType;
    /**
     * The upload's content type (for example, "application/octet-stream").
     */
    contentType?: ContentType;
  }
  export interface CreateUploadResult {
    /**
     * The newly created upload.
     */
    upload?: Upload;
  }
  export type CurrencyCode = "USD"|string;
  export interface CustomerArtifactPaths {
    /**
     * Comma-separated list of paths on the iOS device where the artifacts generated by the customer's tests will be pulled from.
     */
    iosPaths?: IosPaths;
    /**
     * Comma-separated list of paths on the Android device where the artifacts generated by the customer's tests will be pulled from.
     */
    androidPaths?: AndroidPaths;
    /**
     * Comma-separated list of paths in the test execution environment where the artifacts generated by the customer's tests will be pulled from.
     */
    deviceHostPaths?: DeviceHostPaths;
  }
  export type DateTime = Date;
  export interface DeleteDevicePoolRequest {
    /**
     * Represents the Amazon Resource Name (ARN) of the Device Farm device pool you wish to delete.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteDevicePoolResult {
  }
  export interface DeleteNetworkProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of the network profile you want to delete.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteNetworkProfileResult {
  }
  export interface DeleteProjectRequest {
    /**
     * Represents the Amazon Resource Name (ARN) of the Device Farm project you wish to delete.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteProjectResult {
  }
  export interface DeleteRemoteAccessSessionRequest {
    /**
     * The Amazon Resource Name (ARN) of the sesssion for which you want to delete remote access.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteRemoteAccessSessionResult {
  }
  export interface DeleteRunRequest {
    /**
     * The Amazon Resource Name (ARN) for the run you wish to delete.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteRunResult {
  }
  export interface DeleteUploadRequest {
    /**
     * Represents the Amazon Resource Name (ARN) of the Device Farm upload you wish to delete.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteUploadResult {
  }
  export interface Device {
    /**
     * The device's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The device's display name.
     */
    name?: Name;
    /**
     * The device's manufacturer name.
     */
    manufacturer?: String;
    /**
     * The device's model name.
     */
    model?: String;
    /**
     * The device's form factor. Allowed values include:   PHONE: The phone form factor.   TABLET: The tablet form factor.  
     */
    formFactor?: DeviceFormFactor;
    /**
     * The device's platform. Allowed values include:   ANDROID: The Android platform.   IOS: The iOS platform.  
     */
    platform?: DevicePlatform;
    /**
     * The device's operating system type.
     */
    os?: String;
    /**
     * Information about the device's CPU.
     */
    cpu?: CPU;
    /**
     * The resolution of the device.
     */
    resolution?: Resolution;
    /**
     * The device's heap size, expressed in bytes.
     */
    heapSize?: Long;
    /**
     * The device's total memory size, expressed in bytes.
     */
    memory?: Long;
    /**
     * The device's image name.
     */
    image?: String;
    /**
     * The device's carrier.
     */
    carrier?: String;
    /**
     * The device's radio.
     */
    radio?: String;
    /**
     * Specifies whether remote access has been enabled for the specified device.
     */
    remoteAccessEnabled?: Boolean;
    /**
     * This flag is set to true if remote debugging is enabled for the device.
     */
    remoteDebugEnabled?: Boolean;
    /**
     * The type of fleet to which this device belongs. Possible values for fleet type are PRIVATE and PUBLIC.
     */
    fleetType?: String;
    /**
     * The name of the fleet to which this device belongs.
     */
    fleetName?: String;
  }
  export type DeviceAttribute = "ARN"|"PLATFORM"|"FORM_FACTOR"|"MANUFACTURER"|"REMOTE_ACCESS_ENABLED"|"REMOTE_DEBUG_ENABLED"|"APPIUM_VERSION"|string;
  export type DeviceFormFactor = "PHONE"|"TABLET"|string;
  export type DeviceHostPaths = String[];
  export interface DeviceMinutes {
    /**
     * When specified, represents the total minutes used by the resource to run tests.
     */
    total?: Double;
    /**
     * When specified, represents only the sum of metered minutes used by the resource to run tests.
     */
    metered?: Double;
    /**
     * When specified, represents only the sum of unmetered minutes used by the resource to run tests.
     */
    unmetered?: Double;
  }
  export type DevicePlatform = "ANDROID"|"IOS"|string;
  export interface DevicePool {
    /**
     * The device pool's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The device pool's name.
     */
    name?: Name;
    /**
     * The device pool's description.
     */
    description?: Message;
    /**
     * The device pool's type. Allowed values include:   CURATED: A device pool that is created and managed by AWS Device Farm.   PRIVATE: A device pool that is created and managed by the device pool developer.  
     */
    type?: DevicePoolType;
    /**
     * Information about the device pool's rules.
     */
    rules?: Rules;
  }
  export interface DevicePoolCompatibilityResult {
    /**
     * The device (phone or tablet) that you wish to return information about.
     */
    device?: Device;
    /**
     * Whether the result was compatible with the device pool.
     */
    compatible?: Boolean;
    /**
     * Information about the compatibility.
     */
    incompatibilityMessages?: IncompatibilityMessages;
  }
  export type DevicePoolCompatibilityResults = DevicePoolCompatibilityResult[];
  export type DevicePoolType = "CURATED"|"PRIVATE"|string;
  export type DevicePools = DevicePool[];
  export type Devices = Device[];
  export type Double = number;
  export interface ExecutionConfiguration {
    /**
     * The number of minutes a test run will execute before it times out.
     */
    jobTimeoutMinutes?: JobTimeoutMinutes;
    /**
     * True if account cleanup is enabled at the beginning of the test; otherwise, false.
     */
    accountsCleanup?: AccountsCleanup;
    /**
     * True if app package cleanup is enabled at the beginning of the test; otherwise, false.
     */
    appPackagesCleanup?: AppPackagesCleanup;
  }
  export type ExecutionResult = "PENDING"|"PASSED"|"WARNED"|"FAILED"|"SKIPPED"|"ERRORED"|"STOPPED"|string;
  export type ExecutionResultCode = "PARSING_FAILED"|string;
  export type ExecutionStatus = "PENDING"|"PENDING_CONCURRENCY"|"PENDING_DEVICE"|"PROCESSING"|"SCHEDULING"|"PREPARING"|"RUNNING"|"COMPLETED"|"STOPPING"|string;
  export type Filter = string;
  export interface GetAccountSettingsRequest {
  }
  export interface GetAccountSettingsResult {
    /**
     * The account settings.
     */
    accountSettings?: AccountSettings;
  }
  export interface GetDevicePoolCompatibilityRequest {
    /**
     * The device pool's ARN.
     */
    devicePoolArn: AmazonResourceName;
    /**
     * The ARN of the app that is associated with the specified device pool.
     */
    appArn?: AmazonResourceName;
    /**
     * The test type for the specified device pool. Allowed values include the following:   BUILTIN_FUZZ: The built-in fuzz type.   BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.   APPIUM_JAVA_JUNIT: The Appium Java JUnit type.   APPIUM_JAVA_TESTNG: The Appium Java TestNG type.   APPIUM_PYTHON: The Appium Python type.   APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.   APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.   APPIUM_WEB_PYTHON: The Appium Python type for Web apps.   CALABASH: The Calabash type.   INSTRUMENTATION: The Instrumentation type.   UIAUTOMATION: The uiautomation type.   UIAUTOMATOR: The uiautomator type.   XCTEST: The XCode test type.   XCTEST_UI: The XCode UI test type.  
     */
    testType?: TestType;
    /**
     * Information about the uploaded test to be run against the device pool.
     */
    test?: ScheduleRunTest;
  }
  export interface GetDevicePoolCompatibilityResult {
    /**
     * Information about compatible devices.
     */
    compatibleDevices?: DevicePoolCompatibilityResults;
    /**
     * Information about incompatible devices.
     */
    incompatibleDevices?: DevicePoolCompatibilityResults;
  }
  export interface GetDevicePoolRequest {
    /**
     * The device pool's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetDevicePoolResult {
    /**
     * An object containing information about the requested device pool.
     */
    devicePool?: DevicePool;
  }
  export interface GetDeviceRequest {
    /**
     * The device type's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetDeviceResult {
    /**
     * An object containing information about the requested device.
     */
    device?: Device;
  }
  export interface GetJobRequest {
    /**
     * The job's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetJobResult {
    /**
     * An object containing information about the requested job.
     */
    job?: Job;
  }
  export interface GetNetworkProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of the network profile you want to return information about.
     */
    arn: AmazonResourceName;
  }
  export interface GetNetworkProfileResult {
    /**
     * The network profile.
     */
    networkProfile?: NetworkProfile;
  }
  export interface GetOfferingStatusRequest {
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface GetOfferingStatusResult {
    /**
     * When specified, gets the offering status for the current period.
     */
    current?: OfferingStatusMap;
    /**
     * When specified, gets the offering status for the next period.
     */
    nextPeriod?: OfferingStatusMap;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface GetProjectRequest {
    /**
     * The project's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetProjectResult {
    /**
     * The project you wish to get information about.
     */
    project?: Project;
  }
  export interface GetRemoteAccessSessionRequest {
    /**
     * The Amazon Resource Name (ARN) of the remote access session about which you want to get session information.
     */
    arn: AmazonResourceName;
  }
  export interface GetRemoteAccessSessionResult {
    /**
     * A container that lists detailed information about the remote access session.
     */
    remoteAccessSession?: RemoteAccessSession;
  }
  export interface GetRunRequest {
    /**
     * The run's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetRunResult {
    /**
     * The run you wish to get results from.
     */
    run?: Run;
  }
  export interface GetSuiteRequest {
    /**
     * The suite's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetSuiteResult {
    /**
     * A collection of one or more tests.
     */
    suite?: Suite;
  }
  export interface GetTestRequest {
    /**
     * The test's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetTestResult {
    /**
     * A test condition that is evaluated.
     */
    test?: Test;
  }
  export interface GetUploadRequest {
    /**
     * The upload's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetUploadResult {
    /**
     * An app or a set of one or more tests to upload or that have been uploaded.
     */
    upload?: Upload;
  }
  export type HostAddress = string;
  export interface IncompatibilityMessage {
    /**
     * A message about the incompatibility.
     */
    message?: Message;
    /**
     * The type of incompatibility. Allowed values include:   ARN: The ARN.   FORM_FACTOR: The form factor (for example, phone or tablet).   MANUFACTURER: The manufacturer.   PLATFORM: The platform (for example, Android or iOS).   REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access.   APPIUM_VERSION: The Appium version for the test.  
     */
    type?: DeviceAttribute;
  }
  export type IncompatibilityMessages = IncompatibilityMessage[];
  export interface InstallToRemoteAccessSessionRequest {
    /**
     * The Amazon Resource Name (ARN) of the remote access session about which you are requesting information.
     */
    remoteAccessSessionArn: AmazonResourceName;
    /**
     * The Amazon Resource Name (ARN) of the app about which you are requesting information.
     */
    appArn: AmazonResourceName;
  }
  export interface InstallToRemoteAccessSessionResult {
    /**
     * An app to upload or that has been uploaded.
     */
    appUpload?: Upload;
  }
  export type Integer = number;
  export type IosPaths = String[];
  export interface Job {
    /**
     * The job's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The job's name.
     */
    name?: Name;
    /**
     * The job's type. Allowed values include the following:   BUILTIN_FUZZ: The built-in fuzz type.   BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.   APPIUM_JAVA_JUNIT: The Appium Java JUnit type.   APPIUM_JAVA_TESTNG: The Appium Java TestNG type.   APPIUM_PYTHON: The Appium Python type.   APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.   APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.   APPIUM_WEB_PYTHON: The Appium Python type for Web apps.   CALABASH: The Calabash type.   INSTRUMENTATION: The Instrumentation type.   UIAUTOMATION: The uiautomation type.   UIAUTOMATOR: The uiautomator type.   XCTEST: The XCode test type.   XCTEST_UI: The XCode UI test type.  
     */
    type?: TestType;
    /**
     * When the job was created.
     */
    created?: DateTime;
    /**
     * The job's status. Allowed values include:   PENDING: A pending status.   PENDING_CONCURRENCY: A pending concurrency status.   PENDING_DEVICE: A pending device status.   PROCESSING: A processing status.   SCHEDULING: A scheduling status.   PREPARING: A preparing status.   RUNNING: A running status.   COMPLETED: A completed status.   STOPPING: A stopping status.  
     */
    status?: ExecutionStatus;
    /**
     * The job's result. Allowed values include:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    result?: ExecutionResult;
    /**
     * The job's start time.
     */
    started?: DateTime;
    /**
     * The job's stop time.
     */
    stopped?: DateTime;
    /**
     * The job's result counters.
     */
    counters?: Counters;
    /**
     * A message about the job's result.
     */
    message?: Message;
    /**
     * The device (phone or tablet).
     */
    device?: Device;
    /**
     * Represents the total (metered or unmetered) minutes used by the job.
     */
    deviceMinutes?: DeviceMinutes;
  }
  export type JobTimeoutMinutes = number;
  export type Jobs = Job[];
  export interface ListArtifactsRequest {
    /**
     * The Run, Job, Suite, or Test ARN.
     */
    arn: AmazonResourceName;
    /**
     * The artifacts' type. Allowed values include:   FILE: The artifacts are files.   LOG: The artifacts are logs.   SCREENSHOT: The artifacts are screenshots.  
     */
    type: ArtifactCategory;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListArtifactsResult {
    /**
     * Information about the artifacts.
     */
    artifacts?: Artifacts;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListDevicePoolsRequest {
    /**
     * The project ARN.
     */
    arn: AmazonResourceName;
    /**
     * The device pools' type. Allowed values include:   CURATED: A device pool that is created and managed by AWS Device Farm.   PRIVATE: A device pool that is created and managed by the device pool developer.  
     */
    type?: DevicePoolType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListDevicePoolsResult {
    /**
     * Information about the device pools.
     */
    devicePools?: DevicePools;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListDevicesRequest {
    /**
     * The Amazon Resource Name (ARN) of the project.
     */
    arn?: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListDevicesResult {
    /**
     * Information about the devices.
     */
    devices?: Devices;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListJobsRequest {
    /**
     * The jobs' ARNs.
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListJobsResult {
    /**
     * Information about the jobs.
     */
    jobs?: Jobs;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListNetworkProfilesRequest {
    /**
     * The Amazon Resource Name (ARN) of the project for which you want to list network profiles.
     */
    arn: AmazonResourceName;
    /**
     * The type of network profile you wish to return information about. Valid values are listed below.
     */
    type?: NetworkProfileType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListNetworkProfilesResult {
    /**
     * A list of the available network profiles.
     */
    networkProfiles?: NetworkProfiles;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListOfferingPromotionsRequest {
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListOfferingPromotionsResult {
    /**
     * Information about the offering promotions.
     */
    offeringPromotions?: OfferingPromotions;
    /**
     * An identifier to be used in the next call to this operation, to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListOfferingTransactionsRequest {
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListOfferingTransactionsResult {
    /**
     * The audit log of subscriptions you have purchased and modified through AWS Device Farm.
     */
    offeringTransactions?: OfferingTransactions;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListOfferingsRequest {
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListOfferingsResult {
    /**
     * A value representing the list offering results.
     */
    offerings?: Offerings;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListProjectsRequest {
    /**
     * Optional. If no Amazon Resource Name (ARN) is specified, then AWS Device Farm returns a list of all projects for the AWS account. You can also specify a project ARN.
     */
    arn?: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListProjectsResult {
    /**
     * Information about the projects.
     */
    projects?: Projects;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListRemoteAccessSessionsRequest {
    /**
     * The Amazon Resource Name (ARN) of the remote access session about which you are requesting information.
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListRemoteAccessSessionsResult {
    /**
     * A container representing the metadata from the service about each remote access session you are requesting.
     */
    remoteAccessSessions?: RemoteAccessSessions;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListRunsRequest {
    /**
     * The Amazon Resource Name (ARN) of the project for which you want to list runs.
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListRunsResult {
    /**
     * Information about the runs.
     */
    runs?: Runs;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListSamplesRequest {
    /**
     * The Amazon Resource Name (ARN) of the project for which you want to list samples.
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListSamplesResult {
    /**
     * Information about the samples.
     */
    samples?: Samples;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListSuitesRequest {
    /**
     * The suites' ARNs.
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListSuitesResult {
    /**
     * Information about the suites.
     */
    suites?: Suites;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTestsRequest {
    /**
     * The tests' ARNs.
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTestsResult {
    /**
     * Information about the tests.
     */
    tests?: Tests;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListUniqueProblemsRequest {
    /**
     * The unique problems' ARNs.
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListUniqueProblemsResult {
    /**
     * Information about the unique problems. Allowed values include:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    uniqueProblems?: UniqueProblemsByExecutionResultMap;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListUploadsRequest {
    /**
     * The Amazon Resource Name (ARN) of the project for which you want to list uploads.
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListUploadsResult {
    /**
     * Information about the uploads.
     */
    uploads?: Uploads;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface Location {
    /**
     * The latitude.
     */
    latitude: Double;
    /**
     * The longitude.
     */
    longitude: Double;
  }
  export type Long = number;
  export type MaxSlotMap = {[key: string]: Integer};
  export type Message = string;
  export type Metadata = string;
  export interface MonetaryAmount {
    /**
     * The numerical amount of an offering or transaction.
     */
    amount?: Double;
    /**
     * The currency code of a monetary amount. For example, USD means "U.S. dollars."
     */
    currencyCode?: CurrencyCode;
  }
  export type Name = string;
  export interface NetworkProfile {
    /**
     * The Amazon Resource Name (ARN) of the network profile.
     */
    arn?: AmazonResourceName;
    /**
     * The name of the network profile.
     */
    name?: Name;
    /**
     * The description of the network profile.
     */
    description?: Message;
    /**
     * The type of network profile. Valid values are listed below.
     */
    type?: NetworkProfileType;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    uplinkBandwidthBits?: Long;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    downlinkBandwidthBits?: Long;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    uplinkDelayMs?: Long;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    downlinkDelayMs?: Long;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    uplinkJitterMs?: Long;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    downlinkJitterMs?: Long;
    /**
     * Proportion of transmitted packets that fail to arrive from 0 to 100 percent.
     */
    uplinkLossPercent?: PercentInteger;
    /**
     * Proportion of received packets that fail to arrive from 0 to 100 percent.
     */
    downlinkLossPercent?: PercentInteger;
  }
  export type NetworkProfileType = "CURATED"|"PRIVATE"|string;
  export type NetworkProfiles = NetworkProfile[];
  export interface Offering {
    /**
     * The ID that corresponds to a device offering.
     */
    id?: OfferingIdentifier;
    /**
     * A string describing the offering.
     */
    description?: Message;
    /**
     * The type of offering (e.g., "RECURRING") for a device.
     */
    type?: OfferingType;
    /**
     * The platform of the device (e.g., ANDROID or IOS).
     */
    platform?: DevicePlatform;
    /**
     * Specifies whether there are recurring charges for the offering.
     */
    recurringCharges?: RecurringCharges;
  }
  export type OfferingIdentifier = string;
  export interface OfferingPromotion {
    /**
     * The ID of the offering promotion.
     */
    id?: OfferingPromotionIdentifier;
    /**
     * A string describing the offering promotion.
     */
    description?: Message;
  }
  export type OfferingPromotionIdentifier = string;
  export type OfferingPromotions = OfferingPromotion[];
  export interface OfferingStatus {
    /**
     * The type specified for the offering status.
     */
    type?: OfferingTransactionType;
    /**
     * Represents the metadata of an offering status.
     */
    offering?: Offering;
    /**
     * The number of available devices in the offering.
     */
    quantity?: Integer;
    /**
     * The date on which the offering is effective.
     */
    effectiveOn?: DateTime;
  }
  export type OfferingStatusMap = {[key: string]: OfferingStatus};
  export interface OfferingTransaction {
    /**
     * The status of an offering transaction.
     */
    offeringStatus?: OfferingStatus;
    /**
     * The transaction ID of the offering transaction.
     */
    transactionId?: TransactionIdentifier;
    /**
     * The ID that corresponds to a device offering promotion.
     */
    offeringPromotionId?: OfferingPromotionIdentifier;
    /**
     * The date on which an offering transaction was created.
     */
    createdOn?: DateTime;
    /**
     * The cost of an offering transaction.
     */
    cost?: MonetaryAmount;
  }
  export type OfferingTransactionType = "PURCHASE"|"RENEW"|"SYSTEM"|string;
  export type OfferingTransactions = OfferingTransaction[];
  export type OfferingType = "RECURRING"|string;
  export type Offerings = Offering[];
  export type PaginationToken = string;
  export type PercentInteger = number;
  export interface Problem {
    /**
     * Information about the associated run.
     */
    run?: ProblemDetail;
    /**
     * Information about the associated job.
     */
    job?: ProblemDetail;
    /**
     * Information about the associated suite.
     */
    suite?: ProblemDetail;
    /**
     * Information about the associated test.
     */
    test?: ProblemDetail;
    /**
     * Information about the associated device.
     */
    device?: Device;
    /**
     * The problem's result. Allowed values include:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    result?: ExecutionResult;
    /**
     * A message about the problem's result.
     */
    message?: Message;
  }
  export interface ProblemDetail {
    /**
     * The problem detail's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The problem detail's name.
     */
    name?: Name;
  }
  export type Problems = Problem[];
  export interface Project {
    /**
     * The project's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The project's name.
     */
    name?: Name;
    /**
     * The default number of minutes (at the project level) a test run will execute before it times out. Default value is 60 minutes.
     */
    defaultJobTimeoutMinutes?: JobTimeoutMinutes;
    /**
     * When the project was created.
     */
    created?: DateTime;
  }
  export type Projects = Project[];
  export interface PurchaseOfferingRequest {
    /**
     * The ID of the offering.
     */
    offeringId?: OfferingIdentifier;
    /**
     * The number of device slots you wish to purchase in an offering request.
     */
    quantity?: Integer;
    /**
     * The ID of the offering promotion to be applied to the purchase.
     */
    offeringPromotionId?: OfferingPromotionIdentifier;
  }
  export interface PurchaseOfferingResult {
    /**
     * Represents the offering transaction for the purchase result.
     */
    offeringTransaction?: OfferingTransaction;
  }
  export type PurchasedDevicesMap = {[key: string]: Integer};
  export interface Radios {
    /**
     * True if Wi-Fi is enabled at the beginning of the test; otherwise, false.
     */
    wifi?: Boolean;
    /**
     * True if Bluetooth is enabled at the beginning of the test; otherwise, false.
     */
    bluetooth?: Boolean;
    /**
     * True if NFC is enabled at the beginning of the test; otherwise, false.
     */
    nfc?: Boolean;
    /**
     * True if GPS is enabled at the beginning of the test; otherwise, false.
     */
    gps?: Boolean;
  }
  export interface RecurringCharge {
    /**
     * The cost of the recurring charge.
     */
    cost?: MonetaryAmount;
    /**
     * The frequency in which charges will recur.
     */
    frequency?: RecurringChargeFrequency;
  }
  export type RecurringChargeFrequency = "MONTHLY"|string;
  export type RecurringCharges = RecurringCharge[];
  export interface RemoteAccessSession {
    /**
     * The Amazon Resource Name (ARN) of the remote access session.
     */
    arn?: AmazonResourceName;
    /**
     * The name of the remote access session.
     */
    name?: Name;
    /**
     * The date and time the remote access session was created.
     */
    created?: DateTime;
    /**
     * The status of the remote access session. Can be any of the following:   PENDING: A pending status.   PENDING_CONCURRENCY: A pending concurrency status.   PENDING_DEVICE: A pending device status.   PROCESSING: A processing status.   SCHEDULING: A scheduling status.   PREPARING: A preparing status.   RUNNING: A running status.   COMPLETED: A completed status.   STOPPING: A stopping status.  
     */
    status?: ExecutionStatus;
    /**
     * The result of the remote access session. Can be any of the following:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    result?: ExecutionResult;
    /**
     * A message about the remote access session.
     */
    message?: Message;
    /**
     * The date and time the remote access session was started.
     */
    started?: DateTime;
    /**
     * The date and time the remote access session was stopped.
     */
    stopped?: DateTime;
    /**
     * The device (phone or tablet) used in the remote access session.
     */
    device?: Device;
    /**
     * This flag is set to true if remote debugging is enabled for the remote access session.
     */
    remoteDebugEnabled?: Boolean;
    /**
     * IP address of the EC2 host where you need to connect to remotely debug devices. Only returned if remote debugging is enabled for the remote access session.
     */
    hostAddress?: HostAddress;
    /**
     * Unique identifier of your client for the remote access session. Only returned if remote debugging is enabled for the remote access session.
     */
    clientId?: ClientId;
    /**
     * The billing method of the remote access session. Possible values include METERED or UNMETERED. For more information about metered devices, see AWS Device Farm terminology."
     */
    billingMethod?: BillingMethod;
    /**
     * The number of minutes a device is used in a remote access sesssion (including setup and teardown minutes).
     */
    deviceMinutes?: DeviceMinutes;
    /**
     * The endpoint for the remote access sesssion.
     */
    endpoint?: String;
    /**
     * Unique device identifier for the remote device. Only returned if remote debugging is enabled for the remote access session.
     */
    deviceUdid?: String;
  }
  export type RemoteAccessSessions = RemoteAccessSession[];
  export interface RenewOfferingRequest {
    /**
     * The ID of a request to renew an offering.
     */
    offeringId?: OfferingIdentifier;
    /**
     * The quantity requested in an offering renewal.
     */
    quantity?: Integer;
  }
  export interface RenewOfferingResult {
    /**
     * Represents the status of the offering transaction for the renewal.
     */
    offeringTransaction?: OfferingTransaction;
  }
  export interface Resolution {
    /**
     * The screen resolution's width, expressed in pixels.
     */
    width?: Integer;
    /**
     * The screen resolution's height, expressed in pixels.
     */
    height?: Integer;
  }
  export interface Rule {
    /**
     * The rule's stringified attribute. For example, specify the value as "\"abc\"". Allowed values include:   ARN: The ARN.   FORM_FACTOR: The form factor (for example, phone or tablet).   MANUFACTURER: The manufacturer.   PLATFORM: The platform (for example, Android or iOS).   REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access.   APPIUM_VERSION: The Appium version for the test.  
     */
    attribute?: DeviceAttribute;
    /**
     * The rule's operator.   EQUALS: The equals operator.   GREATER_THAN: The greater-than operator.   IN: The in operator.   LESS_THAN: The less-than operator.   NOT_IN: The not-in operator.   CONTAINS: The contains operator.  
     */
    operator?: RuleOperator;
    /**
     * The rule's value.
     */
    value?: String;
  }
  export type RuleOperator = "EQUALS"|"LESS_THAN"|"GREATER_THAN"|"IN"|"NOT_IN"|"CONTAINS"|string;
  export type Rules = Rule[];
  export interface Run {
    /**
     * The run's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The run's name.
     */
    name?: Name;
    /**
     * The run's type. Must be one of the following values:   BUILTIN_FUZZ: The built-in fuzz type.   BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.   APPIUM_JAVA_JUNIT: The Appium Java JUnit type.   APPIUM_JAVA_TESTNG: The Appium Java TestNG type.   APPIUM_PYTHON: The Appium Python type.   APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.   APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.   APPIUM_WEB_PYTHON: The Appium Python type for Web apps.   CALABASH: The Calabash type.   INSTRUMENTATION: The Instrumentation type.   UIAUTOMATION: The uiautomation type.   UIAUTOMATOR: The uiautomator type.   XCTEST: The XCode test type.   XCTEST_UI: The XCode UI test type.  
     */
    type?: TestType;
    /**
     * The run's platform. Allowed values include:   ANDROID: The Android platform.   IOS: The iOS platform.  
     */
    platform?: DevicePlatform;
    /**
     * When the run was created.
     */
    created?: DateTime;
    /**
     * The run's status. Allowed values include:   PENDING: A pending status.   PENDING_CONCURRENCY: A pending concurrency status.   PENDING_DEVICE: A pending device status.   PROCESSING: A processing status.   SCHEDULING: A scheduling status.   PREPARING: A preparing status.   RUNNING: A running status.   COMPLETED: A completed status.   STOPPING: A stopping status.  
     */
    status?: ExecutionStatus;
    /**
     * The run's result. Allowed values include:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    result?: ExecutionResult;
    /**
     * The run's start time.
     */
    started?: DateTime;
    /**
     * The run's stop time.
     */
    stopped?: DateTime;
    /**
     * The run's result counters.
     */
    counters?: Counters;
    /**
     * A message about the run's result.
     */
    message?: Message;
    /**
     * The total number of jobs for the run.
     */
    totalJobs?: Integer;
    /**
     * The total number of completed jobs.
     */
    completedJobs?: Integer;
    /**
     * Specifies the billing method for a test run: metered or unmetered. If the parameter is not specified, the default value is metered.
     */
    billingMethod?: BillingMethod;
    /**
     * Represents the total (metered or unmetered) minutes used by the test run.
     */
    deviceMinutes?: DeviceMinutes;
    /**
     * The network profile being used for a test run.
     */
    networkProfile?: NetworkProfile;
    /**
     * Read-only URL for an object in S3 bucket where you can get the parsing results of the test package. If the test package doesn't parse, the reason why it doesn't parse appears in the file that this URL points to.
     */
    parsingResultUrl?: String;
    /**
     * Supporting field for the result field. Set only if result is SKIPPED. PARSING_FAILED if the result is skipped because of test package parsing failure.
     */
    resultCode?: ExecutionResultCode;
    /**
     * Output CustomerArtifactPaths object for the test run.
     */
    customerArtifactPaths?: CustomerArtifactPaths;
  }
  export type Runs = Run[];
  export interface Sample {
    /**
     * The sample's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The sample's type. Must be one of the following values:   CPU: A CPU sample type. This is expressed as the app processing CPU time (including child processes) as reported by process, as a percentage.   MEMORY: A memory usage sample type. This is expressed as the total proportional set size of an app process, in kilobytes.   NATIVE_AVG_DRAWTIME   NATIVE_FPS   NATIVE_FRAMES   NATIVE_MAX_DRAWTIME   NATIVE_MIN_DRAWTIME   OPENGL_AVG_DRAWTIME   OPENGL_FPS   OPENGL_FRAMES   OPENGL_MAX_DRAWTIME   OPENGL_MIN_DRAWTIME   RX   RX_RATE: The total number of bytes per second (TCP and UDP) that are sent, by app process.   THREADS: A threads sample type. This is expressed as the total number of threads per app process.   TX   TX_RATE: The total number of bytes per second (TCP and UDP) that are received, by app process.  
     */
    type?: SampleType;
    /**
     * The pre-signed Amazon S3 URL that can be used with a corresponding GET request to download the sample's file.
     */
    url?: URL;
  }
  export type SampleType = "CPU"|"MEMORY"|"THREADS"|"RX_RATE"|"TX_RATE"|"RX"|"TX"|"NATIVE_FRAMES"|"NATIVE_FPS"|"NATIVE_MIN_DRAWTIME"|"NATIVE_AVG_DRAWTIME"|"NATIVE_MAX_DRAWTIME"|"OPENGL_FRAMES"|"OPENGL_FPS"|"OPENGL_MIN_DRAWTIME"|"OPENGL_AVG_DRAWTIME"|"OPENGL_MAX_DRAWTIME"|string;
  export type Samples = Sample[];
  export interface ScheduleRunConfiguration {
    /**
     * The ARN of the extra data for the run. The extra data is a .zip file that AWS Device Farm will extract to external data for Android or the app's sandbox for iOS.
     */
    extraDataPackageArn?: AmazonResourceName;
    /**
     * Reserved for internal use.
     */
    networkProfileArn?: AmazonResourceName;
    /**
     * Information about the locale that is used for the run.
     */
    locale?: String;
    /**
     * Information about the location that is used for the run.
     */
    location?: Location;
    /**
     * Input CustomerArtifactPaths object for the scheduled run configuration.
     */
    customerArtifactPaths?: CustomerArtifactPaths;
    /**
     * Information about the radio states for the run.
     */
    radios?: Radios;
    /**
     * A list of auxiliary apps for the run.
     */
    auxiliaryApps?: AmazonResourceNames;
    /**
     * Specifies the billing method for a test run: metered or unmetered. If the parameter is not specified, the default value is metered.
     */
    billingMethod?: BillingMethod;
  }
  export interface ScheduleRunRequest {
    /**
     * The ARN of the project for the run to be scheduled.
     */
    projectArn: AmazonResourceName;
    /**
     * The ARN of the app to schedule a run.
     */
    appArn?: AmazonResourceName;
    /**
     * The ARN of the device pool for the run to be scheduled.
     */
    devicePoolArn: AmazonResourceName;
    /**
     * The name for the run to be scheduled.
     */
    name?: Name;
    /**
     * Information about the test for the run to be scheduled.
     */
    test: ScheduleRunTest;
    /**
     * Information about the settings for the run to be scheduled.
     */
    configuration?: ScheduleRunConfiguration;
    /**
     * Specifies configuration information about a test run, such as the execution timeout (in minutes).
     */
    executionConfiguration?: ExecutionConfiguration;
  }
  export interface ScheduleRunResult {
    /**
     * Information about the scheduled run.
     */
    run?: Run;
  }
  export interface ScheduleRunTest {
    /**
     * The test's type. Must be one of the following values:   BUILTIN_FUZZ: The built-in fuzz type.   BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.   APPIUM_JAVA_JUNIT: The Appium Java JUnit type.   APPIUM_JAVA_TESTNG: The Appium Java TestNG type.   APPIUM_PYTHON: The Appium Python type.   APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.   APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.   APPIUM_WEB_PYTHON: The Appium Python type for Web apps.   CALABASH: The Calabash type.   INSTRUMENTATION: The Instrumentation type.   UIAUTOMATION: The uiautomation type.   UIAUTOMATOR: The uiautomator type.   XCTEST: The XCode test type.   XCTEST_UI: The XCode UI test type.  
     */
    type: TestType;
    /**
     * The ARN of the uploaded test that will be run.
     */
    testPackageArn?: AmazonResourceName;
    /**
     * The test's filter.
     */
    filter?: Filter;
    /**
     * The test's parameters, such as the following test framework parameters and fixture settings: For Calabash tests:   profile: A cucumber profile, for example, "my_profile_name".   tags: You can limit execution to features or scenarios that have (or don't have) certain tags, for example, "@smoke" or "@smoke,~@wip".   For Appium tests (all types):   appium_version: The Appium version. Currently supported values are "1.4.16", "1.6.3", "latest", and "default".   “latest” will run the latest Appium version supported by Device Farm (1.6.3).   For “default”, Device Farm will choose a compatible version of Appium for the device. The current behavior is to run 1.4.16 on Android devices and iOS 9 and earlier, 1.6.3 for iOS 10 and later.   This behavior is subject to change.     For Fuzz tests (Android only):   event_count: The number of events, between 1 and 10000, that the UI fuzz test should perform.   throttle: The time, in ms, between 0 and 1000, that the UI fuzz test should wait between events.   seed: A seed to use for randomizing the UI fuzz test. Using the same seed value between tests ensures identical event sequences.   For Explorer tests:   username: A username to use if the Explorer encounters a login form. If not supplied, no username will be inserted.   password: A password to use if the Explorer encounters a login form. If not supplied, no password will be inserted.   For Instrumentation:   filter: A test filter string. Examples:   Running a single test case: "com.android.abc.Test1"   Running a single test: "com.android.abc.Test1#smoke"   Running multiple tests: "com.android.abc.Test1,com.android.abc.Test2"     For XCTest and XCTestUI:   filter: A test filter string. Examples:   Running a single test class: "LoginTests"   Running a multiple test classes: "LoginTests,SmokeTests"   Running a single test: "LoginTests/testValid"   Running multiple tests: "LoginTests/testValid,LoginTests/testInvalid"     For UIAutomator:   filter: A test filter string. Examples:   Running a single test case: "com.android.abc.Test1"   Running a single test: "com.android.abc.Test1#smoke"   Running multiple tests: "com.android.abc.Test1,com.android.abc.Test2"    
     */
    parameters?: TestParameters;
  }
  export type SshPublicKey = string;
  export interface StopRemoteAccessSessionRequest {
    /**
     * The Amazon Resource Name (ARN) of the remote access session you wish to stop.
     */
    arn: AmazonResourceName;
  }
  export interface StopRemoteAccessSessionResult {
    /**
     * A container representing the metadata from the service about the remote access session you are stopping.
     */
    remoteAccessSession?: RemoteAccessSession;
  }
  export interface StopRunRequest {
    /**
     * Represents the Amazon Resource Name (ARN) of the Device Farm run you wish to stop.
     */
    arn: AmazonResourceName;
  }
  export interface StopRunResult {
    /**
     * The run that was stopped.
     */
    run?: Run;
  }
  export type String = string;
  export interface Suite {
    /**
     * The suite's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The suite's name.
     */
    name?: Name;
    /**
     * The suite's type. Must be one of the following values:   BUILTIN_FUZZ: The built-in fuzz type.   BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.   APPIUM_JAVA_JUNIT: The Appium Java JUnit type.   APPIUM_JAVA_TESTNG: The Appium Java TestNG type.   APPIUM_PYTHON: The Appium Python type.   APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.   APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.   APPIUM_WEB_PYTHON: The Appium Python type for Web apps.   CALABASH: The Calabash type.   INSTRUMENTATION: The Instrumentation type.   UIAUTOMATION: The uiautomation type.   UIAUTOMATOR: The uiautomator type.   XCTEST: The XCode test type.   XCTEST_UI: The XCode UI test type.  
     */
    type?: TestType;
    /**
     * When the suite was created.
     */
    created?: DateTime;
    /**
     * The suite's status. Allowed values include:   PENDING: A pending status.   PENDING_CONCURRENCY: A pending concurrency status.   PENDING_DEVICE: A pending device status.   PROCESSING: A processing status.   SCHEDULING: A scheduling status.   PREPARING: A preparing status.   RUNNING: A running status.   COMPLETED: A completed status.   STOPPING: A stopping status.  
     */
    status?: ExecutionStatus;
    /**
     * The suite's result. Allowed values include:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    result?: ExecutionResult;
    /**
     * The suite's start time.
     */
    started?: DateTime;
    /**
     * The suite's stop time.
     */
    stopped?: DateTime;
    /**
     * The suite's result counters.
     */
    counters?: Counters;
    /**
     * A message about the suite's result.
     */
    message?: Message;
    /**
     * Represents the total (metered or unmetered) minutes used by the test suite.
     */
    deviceMinutes?: DeviceMinutes;
  }
  export type Suites = Suite[];
  export interface Test {
    /**
     * The test's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The test's name.
     */
    name?: Name;
    /**
     * The test's type. Must be one of the following values:   BUILTIN_FUZZ: The built-in fuzz type.   BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.   APPIUM_JAVA_JUNIT: The Appium Java JUnit type.   APPIUM_JAVA_TESTNG: The Appium Java TestNG type.   APPIUM_PYTHON: The Appium Python type.   APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.   APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.   APPIUM_WEB_PYTHON: The Appium Python type for Web apps.   CALABASH: The Calabash type.   INSTRUMENTATION: The Instrumentation type.   UIAUTOMATION: The uiautomation type.   UIAUTOMATOR: The uiautomator type.   XCTEST: The XCode test type.   XCTEST_UI: The XCode UI test type.  
     */
    type?: TestType;
    /**
     * When the test was created.
     */
    created?: DateTime;
    /**
     * The test's status. Allowed values include:   PENDING: A pending status.   PENDING_CONCURRENCY: A pending concurrency status.   PENDING_DEVICE: A pending device status.   PROCESSING: A processing status.   SCHEDULING: A scheduling status.   PREPARING: A preparing status.   RUNNING: A running status.   COMPLETED: A completed status.   STOPPING: A stopping status.  
     */
    status?: ExecutionStatus;
    /**
     * The test's result. Allowed values include:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    result?: ExecutionResult;
    /**
     * The test's start time.
     */
    started?: DateTime;
    /**
     * The test's stop time.
     */
    stopped?: DateTime;
    /**
     * The test's result counters.
     */
    counters?: Counters;
    /**
     * A message about the test's result.
     */
    message?: Message;
    /**
     * Represents the total (metered or unmetered) minutes used by the test.
     */
    deviceMinutes?: DeviceMinutes;
  }
  export type TestParameters = {[key: string]: String};
  export type TestType = "BUILTIN_FUZZ"|"BUILTIN_EXPLORER"|"APPIUM_JAVA_JUNIT"|"APPIUM_JAVA_TESTNG"|"APPIUM_PYTHON"|"APPIUM_WEB_JAVA_JUNIT"|"APPIUM_WEB_JAVA_TESTNG"|"APPIUM_WEB_PYTHON"|"CALABASH"|"INSTRUMENTATION"|"UIAUTOMATION"|"UIAUTOMATOR"|"XCTEST"|"XCTEST_UI"|string;
  export type Tests = Test[];
  export type TransactionIdentifier = string;
  export interface TrialMinutes {
    /**
     * The total number of free trial minutes that the account started with.
     */
    total?: Double;
    /**
     * The number of free trial minutes remaining in the account.
     */
    remaining?: Double;
  }
  export type URL = string;
  export interface UniqueProblem {
    /**
     * A message about the unique problems' result.
     */
    message?: Message;
    /**
     * Information about the problems.
     */
    problems?: Problems;
  }
  export type UniqueProblems = UniqueProblem[];
  export type UniqueProblemsByExecutionResultMap = {[key: string]: UniqueProblems};
  export interface UpdateDevicePoolRequest {
    /**
     * The Amazon Resourc Name (ARN) of the Device Farm device pool you wish to update.
     */
    arn: AmazonResourceName;
    /**
     * A string representing the name of the device pool you wish to update.
     */
    name?: Name;
    /**
     * A description of the device pool you wish to update.
     */
    description?: Message;
    /**
     * Represents the rules you wish to modify for the device pool. Updating rules is optional; however, if you choose to update rules for your request, the update will replace the existing rules.
     */
    rules?: Rules;
  }
  export interface UpdateDevicePoolResult {
    /**
     * The device pool you just updated.
     */
    devicePool?: DevicePool;
  }
  export interface UpdateNetworkProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of the project that you wish to update network profile settings.
     */
    arn: AmazonResourceName;
    /**
     * The name of the network profile about which you are returning information.
     */
    name?: Name;
    /**
     * The descriptoin of the network profile about which you are returning information.
     */
    description?: Message;
    /**
     * The type of network profile you wish to return information about. Valid values are listed below.
     */
    type?: NetworkProfileType;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    uplinkBandwidthBits?: Long;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    downlinkBandwidthBits?: Long;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    uplinkDelayMs?: Long;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    downlinkDelayMs?: Long;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    uplinkJitterMs?: Long;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    downlinkJitterMs?: Long;
    /**
     * Proportion of transmitted packets that fail to arrive from 0 to 100 percent.
     */
    uplinkLossPercent?: PercentInteger;
    /**
     * Proportion of received packets that fail to arrive from 0 to 100 percent.
     */
    downlinkLossPercent?: PercentInteger;
  }
  export interface UpdateNetworkProfileResult {
    /**
     * A list of the available network profiles.
     */
    networkProfile?: NetworkProfile;
  }
  export interface UpdateProjectRequest {
    /**
     * The Amazon Resource Name (ARN) of the project whose name you wish to update.
     */
    arn: AmazonResourceName;
    /**
     * A string representing the new name of the project that you are updating.
     */
    name?: Name;
    /**
     * The number of minutes a test run in the project will execute before it times out.
     */
    defaultJobTimeoutMinutes?: JobTimeoutMinutes;
  }
  export interface UpdateProjectResult {
    /**
     * The project you wish to update.
     */
    project?: Project;
  }
  export interface Upload {
    /**
     * The upload's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The upload's file name.
     */
    name?: Name;
    /**
     * When the upload was created.
     */
    created?: DateTime;
    /**
     * The upload's type. Must be one of the following values:   ANDROID_APP: An Android upload.   IOS_APP: An iOS upload.   WEB_APP: A web appliction upload.   EXTERNAL_DATA: An external data upload.   APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.   APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.   APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.   APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.   APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.   APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload.   CALABASH_TEST_PACKAGE: A Calabash test package upload.   INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.   UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.   UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.   XCTEST_TEST_PACKAGE: An XCode test package upload.   XCTEST_UI_TEST_PACKAGE: An XCode UI test package upload.  
     */
    type?: UploadType;
    /**
     * The upload's status. Must be one of the following values:   FAILED: A failed status.   INITIALIZED: An initialized status.   PROCESSING: A processing status.   SUCCEEDED: A succeeded status.  
     */
    status?: UploadStatus;
    /**
     * The pre-signed Amazon S3 URL that was used to store a file through a corresponding PUT request.
     */
    url?: URL;
    /**
     * The upload's metadata. For example, for Android, this contains information that is parsed from the manifest and is displayed in the AWS Device Farm console after the associated app is uploaded.
     */
    metadata?: Metadata;
    /**
     * The upload's content type (for example, "application/octet-stream").
     */
    contentType?: ContentType;
    /**
     * A message about the upload's result.
     */
    message?: Message;
  }
  export type UploadStatus = "INITIALIZED"|"PROCESSING"|"SUCCEEDED"|"FAILED"|string;
  export type UploadType = "ANDROID_APP"|"IOS_APP"|"WEB_APP"|"EXTERNAL_DATA"|"APPIUM_JAVA_JUNIT_TEST_PACKAGE"|"APPIUM_JAVA_TESTNG_TEST_PACKAGE"|"APPIUM_PYTHON_TEST_PACKAGE"|"APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE"|"APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE"|"APPIUM_WEB_PYTHON_TEST_PACKAGE"|"CALABASH_TEST_PACKAGE"|"INSTRUMENTATION_TEST_PACKAGE"|"UIAUTOMATION_TEST_PACKAGE"|"UIAUTOMATOR_TEST_PACKAGE"|"XCTEST_TEST_PACKAGE"|"XCTEST_UI_TEST_PACKAGE"|string;
  export type Uploads = Upload[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-06-23"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DeviceFarm client.
   */
  export import Types = DeviceFarm;
}
export = DeviceFarm;
