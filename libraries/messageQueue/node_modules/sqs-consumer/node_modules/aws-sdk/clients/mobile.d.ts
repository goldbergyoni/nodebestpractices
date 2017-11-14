import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Mobile extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Mobile.Types.ClientConfiguration)
  config: Config & Mobile.Types.ClientConfiguration;
  /**
   *  Creates an AWS Mobile Hub project. 
   */
  createProject(params: Mobile.Types.CreateProjectRequest, callback?: (err: AWSError, data: Mobile.Types.CreateProjectResult) => void): Request<Mobile.Types.CreateProjectResult, AWSError>;
  /**
   *  Creates an AWS Mobile Hub project. 
   */
  createProject(callback?: (err: AWSError, data: Mobile.Types.CreateProjectResult) => void): Request<Mobile.Types.CreateProjectResult, AWSError>;
  /**
   *  Delets a project in AWS Mobile Hub. 
   */
  deleteProject(params: Mobile.Types.DeleteProjectRequest, callback?: (err: AWSError, data: Mobile.Types.DeleteProjectResult) => void): Request<Mobile.Types.DeleteProjectResult, AWSError>;
  /**
   *  Delets a project in AWS Mobile Hub. 
   */
  deleteProject(callback?: (err: AWSError, data: Mobile.Types.DeleteProjectResult) => void): Request<Mobile.Types.DeleteProjectResult, AWSError>;
  /**
   *  Get the bundle details for the requested bundle id. 
   */
  describeBundle(params: Mobile.Types.DescribeBundleRequest, callback?: (err: AWSError, data: Mobile.Types.DescribeBundleResult) => void): Request<Mobile.Types.DescribeBundleResult, AWSError>;
  /**
   *  Get the bundle details for the requested bundle id. 
   */
  describeBundle(callback?: (err: AWSError, data: Mobile.Types.DescribeBundleResult) => void): Request<Mobile.Types.DescribeBundleResult, AWSError>;
  /**
   *  Gets details about a project in AWS Mobile Hub. 
   */
  describeProject(params: Mobile.Types.DescribeProjectRequest, callback?: (err: AWSError, data: Mobile.Types.DescribeProjectResult) => void): Request<Mobile.Types.DescribeProjectResult, AWSError>;
  /**
   *  Gets details about a project in AWS Mobile Hub. 
   */
  describeProject(callback?: (err: AWSError, data: Mobile.Types.DescribeProjectResult) => void): Request<Mobile.Types.DescribeProjectResult, AWSError>;
  /**
   *  Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources. 
   */
  exportBundle(params: Mobile.Types.ExportBundleRequest, callback?: (err: AWSError, data: Mobile.Types.ExportBundleResult) => void): Request<Mobile.Types.ExportBundleResult, AWSError>;
  /**
   *  Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources. 
   */
  exportBundle(callback?: (err: AWSError, data: Mobile.Types.ExportBundleResult) => void): Request<Mobile.Types.ExportBundleResult, AWSError>;
  /**
   *  Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account. 
   */
  exportProject(params: Mobile.Types.ExportProjectRequest, callback?: (err: AWSError, data: Mobile.Types.ExportProjectResult) => void): Request<Mobile.Types.ExportProjectResult, AWSError>;
  /**
   *  Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account. 
   */
  exportProject(callback?: (err: AWSError, data: Mobile.Types.ExportProjectResult) => void): Request<Mobile.Types.ExportProjectResult, AWSError>;
  /**
   *  List all available bundles. 
   */
  listBundles(params: Mobile.Types.ListBundlesRequest, callback?: (err: AWSError, data: Mobile.Types.ListBundlesResult) => void): Request<Mobile.Types.ListBundlesResult, AWSError>;
  /**
   *  List all available bundles. 
   */
  listBundles(callback?: (err: AWSError, data: Mobile.Types.ListBundlesResult) => void): Request<Mobile.Types.ListBundlesResult, AWSError>;
  /**
   *  Lists projects in AWS Mobile Hub. 
   */
  listProjects(params: Mobile.Types.ListProjectsRequest, callback?: (err: AWSError, data: Mobile.Types.ListProjectsResult) => void): Request<Mobile.Types.ListProjectsResult, AWSError>;
  /**
   *  Lists projects in AWS Mobile Hub. 
   */
  listProjects(callback?: (err: AWSError, data: Mobile.Types.ListProjectsResult) => void): Request<Mobile.Types.ListProjectsResult, AWSError>;
  /**
   *  Update an existing project. 
   */
  updateProject(params: Mobile.Types.UpdateProjectRequest, callback?: (err: AWSError, data: Mobile.Types.UpdateProjectResult) => void): Request<Mobile.Types.UpdateProjectResult, AWSError>;
  /**
   *  Update an existing project. 
   */
  updateProject(callback?: (err: AWSError, data: Mobile.Types.UpdateProjectResult) => void): Request<Mobile.Types.UpdateProjectResult, AWSError>;
}
declare namespace Mobile {
  export type AttributeKey = string;
  export type AttributeValue = string;
  export type Attributes = {[key: string]: AttributeValue};
  export type Boolean = boolean;
  export type BundleDescription = string;
  export interface BundleDetails {
    bundleId?: BundleId;
    title?: BundleTitle;
    version?: BundleVersion;
    description?: BundleDescription;
    iconUrl?: IconUrl;
    availablePlatforms?: Platforms;
  }
  export type BundleId = string;
  export type BundleList = BundleDetails[];
  export type BundleTitle = string;
  export type BundleVersion = string;
  export type ConsoleUrl = string;
  export type Contents = Buffer|Uint8Array|Blob|string;
  export interface CreateProjectRequest {
    /**
     *  Name of the project. 
     */
    name?: ProjectName;
    /**
     *  Default region where project resources should be created. 
     */
    region?: ProjectRegion;
    /**
     *  ZIP or YAML file which contains configuration settings to be used when creating the project. This may be the contents of the file downloaded from the URL provided in an export project operation. 
     */
    contents?: Contents;
    /**
     *  Unique identifier for an exported snapshot of project configuration. This snapshot identifier is included in the share URL when a project is exported. 
     */
    snapshotId?: SnapshotId;
  }
  export interface CreateProjectResult {
    /**
     *  Detailed information about the created AWS Mobile Hub project. 
     */
    details?: ProjectDetails;
  }
  export type _Date = Date;
  export interface DeleteProjectRequest {
    /**
     *  Unique project identifier. 
     */
    projectId: ProjectId;
  }
  export interface DeleteProjectResult {
    /**
     *  Resources which were deleted. 
     */
    deletedResources?: Resources;
    /**
     *  Resources which were not deleted, due to a risk of losing potentially important data or files. 
     */
    orphanedResources?: Resources;
  }
  export interface DescribeBundleRequest {
    /**
     *  Unique bundle identifier. 
     */
    bundleId: BundleId;
  }
  export interface DescribeBundleResult {
    /**
     *  The details of the bundle. 
     */
    details?: BundleDetails;
  }
  export interface DescribeProjectRequest {
    /**
     *  Unique project identifier. 
     */
    projectId: ProjectId;
    /**
     *  If set to true, causes AWS Mobile Hub to synchronize information from other services, e.g., update state of AWS CloudFormation stacks in the AWS Mobile Hub project. 
     */
    syncFromResources?: Boolean;
  }
  export interface DescribeProjectResult {
    details?: ProjectDetails;
  }
  export type DownloadUrl = string;
  export type ErrorMessage = string;
  export interface ExportBundleRequest {
    /**
     *  Unique bundle identifier. 
     */
    bundleId: BundleId;
    /**
     *  Unique project identifier. 
     */
    projectId?: ProjectId;
    /**
     *  Developer desktop or target application platform. 
     */
    platform?: Platform;
  }
  export interface ExportBundleResult {
    /**
     *  URL which contains the custom-generated SDK and tool packages used to integrate the client mobile app or web app with the AWS resources created by the AWS Mobile Hub project. 
     */
    downloadUrl?: DownloadUrl;
  }
  export interface ExportProjectRequest {
    /**
     *  Unique project identifier. 
     */
    projectId: ProjectId;
  }
  export interface ExportProjectResult {
    /**
     *  URL which can be used to download the exported project configuation file(s). 
     */
    downloadUrl?: DownloadUrl;
    /**
     *  URL which can be shared to allow other AWS users to create their own project in AWS Mobile Hub with the same configuration as the specified project. This URL pertains to a snapshot in time of the project configuration that is created when this API is called. If you want to share additional changes to your project configuration, then you will need to create and share a new snapshot by calling this method again. 
     */
    shareUrl?: ShareUrl;
    /**
     *  Unique identifier for the exported snapshot of the project configuration. This snapshot identifier is included in the share URL. 
     */
    snapshotId?: SnapshotId;
  }
  export type Feature = string;
  export type IconUrl = string;
  export interface ListBundlesRequest {
    /**
     *  Maximum number of records to list in a single response. 
     */
    maxResults?: MaxResults;
    /**
     *  Pagination token. Set to null to start listing bundles from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more bundles. 
     */
    nextToken?: NextToken;
  }
  export interface ListBundlesResult {
    /**
     *  A list of bundles. 
     */
    bundleList?: BundleList;
    /**
     *  Pagination token. If non-null pagination token is returned in a result, then pass its value in another request to fetch more entries. 
     */
    nextToken?: NextToken;
  }
  export interface ListProjectsRequest {
    /**
     *  Maximum number of records to list in a single response. 
     */
    maxResults?: MaxResults;
    /**
     *  Pagination token. Set to null to start listing projects from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more projects. 
     */
    nextToken?: NextToken;
  }
  export interface ListProjectsResult {
    projects?: ProjectSummaries;
    nextToken?: NextToken;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export type Platform = "OSX"|"WINDOWS"|"LINUX"|"OBJC"|"SWIFT"|"ANDROID"|"JAVASCRIPT"|string;
  export type Platforms = Platform[];
  export interface ProjectDetails {
    name?: ProjectName;
    projectId?: ProjectId;
    region?: ProjectRegion;
    state?: ProjectState;
    /**
     *  Date the project was created. 
     */
    createdDate?: _Date;
    /**
     *  Date of the last modification of the project. 
     */
    lastUpdatedDate?: _Date;
    /**
     *  Website URL for this project in the AWS Mobile Hub console. 
     */
    consoleUrl?: ConsoleUrl;
    resources?: Resources;
  }
  export type ProjectId = string;
  export type ProjectName = string;
  export type ProjectRegion = string;
  export type ProjectState = "NORMAL"|"SYNCING"|"IMPORTING"|string;
  export type ProjectSummaries = ProjectSummary[];
  export interface ProjectSummary {
    /**
     *  Name of the project. 
     */
    name?: ProjectName;
    /**
     *  Unique project identifier. 
     */
    projectId?: ProjectId;
  }
  export interface Resource {
    type?: ResourceType;
    name?: ResourceName;
    arn?: ResourceArn;
    feature?: Feature;
    attributes?: Attributes;
  }
  export type ResourceArn = string;
  export type ResourceName = string;
  export type ResourceType = string;
  export type Resources = Resource[];
  export type ShareUrl = string;
  export type SnapshotId = string;
  export interface UpdateProjectRequest {
    /**
     *  ZIP or YAML file which contains project configuration to be updated. This should be the contents of the file downloaded from the URL provided in an export project operation. 
     */
    contents?: Contents;
    /**
     *  Unique project identifier. 
     */
    projectId: ProjectId;
  }
  export interface UpdateProjectResult {
    /**
     *  Detailed information about the updated AWS Mobile Hub project. 
     */
    details?: ProjectDetails;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-07-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Mobile client.
   */
  export import Types = Mobile;
}
export = Mobile;
