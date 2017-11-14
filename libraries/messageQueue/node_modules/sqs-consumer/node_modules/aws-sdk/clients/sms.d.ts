import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class SMS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SMS.Types.ClientConfiguration)
  config: Config & SMS.Types.ClientConfiguration;
  /**
   * The CreateReplicationJob API is used to create a ReplicationJob to replicate a server on AWS. Call this API to first create a ReplicationJob, which will then schedule periodic ReplicationRuns to replicate your server to AWS. Each ReplicationRun will result in the creation of an AWS AMI.
   */
  createReplicationJob(params: SMS.Types.CreateReplicationJobRequest, callback?: (err: AWSError, data: SMS.Types.CreateReplicationJobResponse) => void): Request<SMS.Types.CreateReplicationJobResponse, AWSError>;
  /**
   * The CreateReplicationJob API is used to create a ReplicationJob to replicate a server on AWS. Call this API to first create a ReplicationJob, which will then schedule periodic ReplicationRuns to replicate your server to AWS. Each ReplicationRun will result in the creation of an AWS AMI.
   */
  createReplicationJob(callback?: (err: AWSError, data: SMS.Types.CreateReplicationJobResponse) => void): Request<SMS.Types.CreateReplicationJobResponse, AWSError>;
  /**
   * The DeleteReplicationJob API is used to delete a ReplicationJob, resulting in no further ReplicationRuns. This will delete the contents of the S3 bucket used to store SMS artifacts, but will not delete any AMIs created by the SMS service.
   */
  deleteReplicationJob(params: SMS.Types.DeleteReplicationJobRequest, callback?: (err: AWSError, data: SMS.Types.DeleteReplicationJobResponse) => void): Request<SMS.Types.DeleteReplicationJobResponse, AWSError>;
  /**
   * The DeleteReplicationJob API is used to delete a ReplicationJob, resulting in no further ReplicationRuns. This will delete the contents of the S3 bucket used to store SMS artifacts, but will not delete any AMIs created by the SMS service.
   */
  deleteReplicationJob(callback?: (err: AWSError, data: SMS.Types.DeleteReplicationJobResponse) => void): Request<SMS.Types.DeleteReplicationJobResponse, AWSError>;
  /**
   * The DeleteServerCatalog API clears all servers from your server catalog. This means that these servers will no longer be accessible to the Server Migration Service.
   */
  deleteServerCatalog(params: SMS.Types.DeleteServerCatalogRequest, callback?: (err: AWSError, data: SMS.Types.DeleteServerCatalogResponse) => void): Request<SMS.Types.DeleteServerCatalogResponse, AWSError>;
  /**
   * The DeleteServerCatalog API clears all servers from your server catalog. This means that these servers will no longer be accessible to the Server Migration Service.
   */
  deleteServerCatalog(callback?: (err: AWSError, data: SMS.Types.DeleteServerCatalogResponse) => void): Request<SMS.Types.DeleteServerCatalogResponse, AWSError>;
  /**
   * The DisassociateConnector API will disassociate a connector from the Server Migration Service, rendering it unavailable to support replication jobs.
   */
  disassociateConnector(params: SMS.Types.DisassociateConnectorRequest, callback?: (err: AWSError, data: SMS.Types.DisassociateConnectorResponse) => void): Request<SMS.Types.DisassociateConnectorResponse, AWSError>;
  /**
   * The DisassociateConnector API will disassociate a connector from the Server Migration Service, rendering it unavailable to support replication jobs.
   */
  disassociateConnector(callback?: (err: AWSError, data: SMS.Types.DisassociateConnectorResponse) => void): Request<SMS.Types.DisassociateConnectorResponse, AWSError>;
  /**
   * The GetConnectors API returns a list of connectors that are registered with the Server Migration Service.
   */
  getConnectors(params: SMS.Types.GetConnectorsRequest, callback?: (err: AWSError, data: SMS.Types.GetConnectorsResponse) => void): Request<SMS.Types.GetConnectorsResponse, AWSError>;
  /**
   * The GetConnectors API returns a list of connectors that are registered with the Server Migration Service.
   */
  getConnectors(callback?: (err: AWSError, data: SMS.Types.GetConnectorsResponse) => void): Request<SMS.Types.GetConnectorsResponse, AWSError>;
  /**
   * The GetReplicationJobs API will return all of your ReplicationJobs and their details. This API returns a paginated list, that may be consecutively called with nextToken to retrieve all ReplicationJobs.
   */
  getReplicationJobs(params: SMS.Types.GetReplicationJobsRequest, callback?: (err: AWSError, data: SMS.Types.GetReplicationJobsResponse) => void): Request<SMS.Types.GetReplicationJobsResponse, AWSError>;
  /**
   * The GetReplicationJobs API will return all of your ReplicationJobs and their details. This API returns a paginated list, that may be consecutively called with nextToken to retrieve all ReplicationJobs.
   */
  getReplicationJobs(callback?: (err: AWSError, data: SMS.Types.GetReplicationJobsResponse) => void): Request<SMS.Types.GetReplicationJobsResponse, AWSError>;
  /**
   * The GetReplicationRuns API will return all ReplicationRuns for a given ReplicationJob. This API returns a paginated list, that may be consecutively called with nextToken to retrieve all ReplicationRuns for a ReplicationJob.
   */
  getReplicationRuns(params: SMS.Types.GetReplicationRunsRequest, callback?: (err: AWSError, data: SMS.Types.GetReplicationRunsResponse) => void): Request<SMS.Types.GetReplicationRunsResponse, AWSError>;
  /**
   * The GetReplicationRuns API will return all ReplicationRuns for a given ReplicationJob. This API returns a paginated list, that may be consecutively called with nextToken to retrieve all ReplicationRuns for a ReplicationJob.
   */
  getReplicationRuns(callback?: (err: AWSError, data: SMS.Types.GetReplicationRunsResponse) => void): Request<SMS.Types.GetReplicationRunsResponse, AWSError>;
  /**
   * The GetServers API returns a list of all servers in your server catalog. For this call to succeed, you must previously have called ImportServerCatalog.
   */
  getServers(params: SMS.Types.GetServersRequest, callback?: (err: AWSError, data: SMS.Types.GetServersResponse) => void): Request<SMS.Types.GetServersResponse, AWSError>;
  /**
   * The GetServers API returns a list of all servers in your server catalog. For this call to succeed, you must previously have called ImportServerCatalog.
   */
  getServers(callback?: (err: AWSError, data: SMS.Types.GetServersResponse) => void): Request<SMS.Types.GetServersResponse, AWSError>;
  /**
   * The ImportServerCatalog API is used to gather the complete list of on-premises servers on your premises. This API call requires connectors to be installed and monitoring all servers you would like imported. This API call returns immediately, but may take some time to retrieve all of the servers.
   */
  importServerCatalog(params: SMS.Types.ImportServerCatalogRequest, callback?: (err: AWSError, data: SMS.Types.ImportServerCatalogResponse) => void): Request<SMS.Types.ImportServerCatalogResponse, AWSError>;
  /**
   * The ImportServerCatalog API is used to gather the complete list of on-premises servers on your premises. This API call requires connectors to be installed and monitoring all servers you would like imported. This API call returns immediately, but may take some time to retrieve all of the servers.
   */
  importServerCatalog(callback?: (err: AWSError, data: SMS.Types.ImportServerCatalogResponse) => void): Request<SMS.Types.ImportServerCatalogResponse, AWSError>;
  /**
   * The StartOnDemandReplicationRun API is used to start a ReplicationRun on demand (in addition to those that are scheduled based on your frequency). This ReplicationRun will start immediately. StartOnDemandReplicationRun is subject to limits on how many on demand ReplicationRuns you may call per 24-hour period.
   */
  startOnDemandReplicationRun(params: SMS.Types.StartOnDemandReplicationRunRequest, callback?: (err: AWSError, data: SMS.Types.StartOnDemandReplicationRunResponse) => void): Request<SMS.Types.StartOnDemandReplicationRunResponse, AWSError>;
  /**
   * The StartOnDemandReplicationRun API is used to start a ReplicationRun on demand (in addition to those that are scheduled based on your frequency). This ReplicationRun will start immediately. StartOnDemandReplicationRun is subject to limits on how many on demand ReplicationRuns you may call per 24-hour period.
   */
  startOnDemandReplicationRun(callback?: (err: AWSError, data: SMS.Types.StartOnDemandReplicationRunResponse) => void): Request<SMS.Types.StartOnDemandReplicationRunResponse, AWSError>;
  /**
   * The UpdateReplicationJob API is used to change the settings of your existing ReplicationJob created using CreateReplicationJob. Calling this API will affect the next scheduled ReplicationRun.
   */
  updateReplicationJob(params: SMS.Types.UpdateReplicationJobRequest, callback?: (err: AWSError, data: SMS.Types.UpdateReplicationJobResponse) => void): Request<SMS.Types.UpdateReplicationJobResponse, AWSError>;
  /**
   * The UpdateReplicationJob API is used to change the settings of your existing ReplicationJob created using CreateReplicationJob. Calling this API will affect the next scheduled ReplicationRun.
   */
  updateReplicationJob(callback?: (err: AWSError, data: SMS.Types.UpdateReplicationJobResponse) => void): Request<SMS.Types.UpdateReplicationJobResponse, AWSError>;
}
declare namespace SMS {
  export type AmiId = string;
  export interface Connector {
    connectorId?: ConnectorId;
    version?: ConnectorVersion;
    status?: ConnectorStatus;
    capabilityList?: ConnectorCapabilityList;
    vmManagerName?: VmManagerName;
    vmManagerType?: VmManagerType;
    vmManagerId?: VmManagerId;
    ipAddress?: IpAddress;
    macAddress?: MacAddress;
    associatedOn?: Timestamp;
  }
  export type ConnectorCapability = "VSPHERE"|string;
  export type ConnectorCapabilityList = ConnectorCapability[];
  export type ConnectorId = string;
  export type ConnectorList = Connector[];
  export type ConnectorStatus = "HEALTHY"|"UNHEALTHY"|string;
  export type ConnectorVersion = string;
  export interface CreateReplicationJobRequest {
    serverId: ServerId;
    seedReplicationTime: Timestamp;
    frequency: Frequency;
    licenseType?: LicenseType;
    roleName?: RoleName;
    description?: Description;
  }
  export interface CreateReplicationJobResponse {
    replicationJobId?: ReplicationJobId;
  }
  export interface DeleteReplicationJobRequest {
    replicationJobId: ReplicationJobId;
  }
  export interface DeleteReplicationJobResponse {
  }
  export interface DeleteServerCatalogRequest {
  }
  export interface DeleteServerCatalogResponse {
  }
  export type Description = string;
  export interface DisassociateConnectorRequest {
    connectorId: ConnectorId;
  }
  export interface DisassociateConnectorResponse {
  }
  export type ErrorMessage = string;
  export type Frequency = number;
  export interface GetConnectorsRequest {
    nextToken?: NextToken;
    maxResults?: MaxResults;
  }
  export interface GetConnectorsResponse {
    connectorList?: ConnectorList;
    nextToken?: NextToken;
  }
  export interface GetReplicationJobsRequest {
    replicationJobId?: ReplicationJobId;
    nextToken?: NextToken;
    maxResults?: MaxResults;
  }
  export interface GetReplicationJobsResponse {
    replicationJobList?: ReplicationJobList;
    nextToken?: NextToken;
  }
  export interface GetReplicationRunsRequest {
    replicationJobId: ReplicationJobId;
    nextToken?: NextToken;
    maxResults?: MaxResults;
  }
  export interface GetReplicationRunsResponse {
    replicationJob?: ReplicationJob;
    replicationRunList?: ReplicationRunList;
    nextToken?: NextToken;
  }
  export interface GetServersRequest {
    nextToken?: NextToken;
    maxResults?: MaxResults;
  }
  export interface GetServersResponse {
    lastModifiedOn?: Timestamp;
    serverCatalogStatus?: ServerCatalogStatus;
    serverList?: ServerList;
    nextToken?: NextToken;
  }
  export interface ImportServerCatalogRequest {
  }
  export interface ImportServerCatalogResponse {
  }
  export type IpAddress = string;
  export type LicenseType = "AWS"|"BYOL"|string;
  export type MacAddress = string;
  export type MaxResults = number;
  export type NextToken = string;
  export interface ReplicationJob {
    replicationJobId?: ReplicationJobId;
    serverId?: ServerId;
    serverType?: ServerType;
    vmServer?: VmServer;
    seedReplicationTime?: Timestamp;
    frequency?: Frequency;
    nextReplicationRunStartTime?: Timestamp;
    licenseType?: LicenseType;
    roleName?: RoleName;
    latestAmiId?: AmiId;
    state?: ReplicationJobState;
    statusMessage?: ReplicationJobStatusMessage;
    description?: Description;
    replicationRunList?: ReplicationRunList;
  }
  export type ReplicationJobId = string;
  export type ReplicationJobList = ReplicationJob[];
  export type ReplicationJobState = "PENDING"|"ACTIVE"|"FAILED"|"DELETING"|"DELETED"|string;
  export type ReplicationJobStatusMessage = string;
  export type ReplicationJobTerminated = boolean;
  export interface ReplicationRun {
    replicationRunId?: ReplicationRunId;
    state?: ReplicationRunState;
    type?: ReplicationRunType;
    statusMessage?: ReplicationRunStatusMessage;
    amiId?: AmiId;
    scheduledStartTime?: Timestamp;
    completedTime?: Timestamp;
    description?: Description;
  }
  export type ReplicationRunId = string;
  export type ReplicationRunList = ReplicationRun[];
  export type ReplicationRunState = "PENDING"|"MISSED"|"ACTIVE"|"FAILED"|"COMPLETED"|"DELETING"|"DELETED"|string;
  export type ReplicationRunStatusMessage = string;
  export type ReplicationRunType = "ON_DEMAND"|"AUTOMATIC"|string;
  export type RoleName = string;
  export interface Server {
    serverId?: ServerId;
    serverType?: ServerType;
    vmServer?: VmServer;
    replicationJobId?: ReplicationJobId;
    replicationJobTerminated?: ReplicationJobTerminated;
  }
  export type ServerCatalogStatus = "NOT_IMPORTED"|"IMPORTING"|"AVAILABLE"|"DELETED"|"EXPIRED"|string;
  export type ServerId = string;
  export type ServerList = Server[];
  export type ServerType = "VIRTUAL_MACHINE"|string;
  export interface StartOnDemandReplicationRunRequest {
    replicationJobId: ReplicationJobId;
    description?: Description;
  }
  export interface StartOnDemandReplicationRunResponse {
    replicationRunId?: ReplicationRunId;
  }
  export type Timestamp = Date;
  export interface UpdateReplicationJobRequest {
    replicationJobId: ReplicationJobId;
    frequency?: Frequency;
    nextReplicationRunStartTime?: Timestamp;
    licenseType?: LicenseType;
    roleName?: RoleName;
    description?: Description;
  }
  export interface UpdateReplicationJobResponse {
  }
  export type VmId = string;
  export type VmManagerId = string;
  export type VmManagerName = string;
  export type VmManagerType = "VSPHERE"|string;
  export type VmName = string;
  export type VmPath = string;
  export interface VmServer {
    vmServerAddress?: VmServerAddress;
    vmName?: VmName;
    vmManagerName?: VmManagerName;
    vmManagerType?: VmManagerType;
    vmPath?: VmPath;
  }
  export interface VmServerAddress {
    vmManagerId?: VmManagerId;
    vmId?: VmId;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-10-24"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SMS client.
   */
  export import Types = SMS;
}
export = SMS;
