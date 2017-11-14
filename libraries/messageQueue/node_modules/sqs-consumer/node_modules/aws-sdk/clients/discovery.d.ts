import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Discovery extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Discovery.Types.ClientConfiguration)
  config: Config & Discovery.Types.ClientConfiguration;
  /**
   * Associates one or more configuration items with an application.
   */
  associateConfigurationItemsToApplication(params: Discovery.Types.AssociateConfigurationItemsToApplicationRequest, callback?: (err: AWSError, data: Discovery.Types.AssociateConfigurationItemsToApplicationResponse) => void): Request<Discovery.Types.AssociateConfigurationItemsToApplicationResponse, AWSError>;
  /**
   * Associates one or more configuration items with an application.
   */
  associateConfigurationItemsToApplication(callback?: (err: AWSError, data: Discovery.Types.AssociateConfigurationItemsToApplicationResponse) => void): Request<Discovery.Types.AssociateConfigurationItemsToApplicationResponse, AWSError>;
  /**
   * Creates an application with the given name and description.
   */
  createApplication(params: Discovery.Types.CreateApplicationRequest, callback?: (err: AWSError, data: Discovery.Types.CreateApplicationResponse) => void): Request<Discovery.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates an application with the given name and description.
   */
  createApplication(callback?: (err: AWSError, data: Discovery.Types.CreateApplicationResponse) => void): Request<Discovery.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.
   */
  createTags(params: Discovery.Types.CreateTagsRequest, callback?: (err: AWSError, data: Discovery.Types.CreateTagsResponse) => void): Request<Discovery.Types.CreateTagsResponse, AWSError>;
  /**
   * Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.
   */
  createTags(callback?: (err: AWSError, data: Discovery.Types.CreateTagsResponse) => void): Request<Discovery.Types.CreateTagsResponse, AWSError>;
  /**
   * Deletes a list of applications and their associations with configuration items.
   */
  deleteApplications(params: Discovery.Types.DeleteApplicationsRequest, callback?: (err: AWSError, data: Discovery.Types.DeleteApplicationsResponse) => void): Request<Discovery.Types.DeleteApplicationsResponse, AWSError>;
  /**
   * Deletes a list of applications and their associations with configuration items.
   */
  deleteApplications(callback?: (err: AWSError, data: Discovery.Types.DeleteApplicationsResponse) => void): Request<Discovery.Types.DeleteApplicationsResponse, AWSError>;
  /**
   * Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
   */
  deleteTags(params: Discovery.Types.DeleteTagsRequest, callback?: (err: AWSError, data: Discovery.Types.DeleteTagsResponse) => void): Request<Discovery.Types.DeleteTagsResponse, AWSError>;
  /**
   * Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
   */
  deleteTags(callback?: (err: AWSError, data: Discovery.Types.DeleteTagsResponse) => void): Request<Discovery.Types.DeleteTagsResponse, AWSError>;
  /**
   * Lists agents or the Connector by ID or lists all agents/Connectors associated with your user account if you did not specify an ID.
   */
  describeAgents(params: Discovery.Types.DescribeAgentsRequest, callback?: (err: AWSError, data: Discovery.Types.DescribeAgentsResponse) => void): Request<Discovery.Types.DescribeAgentsResponse, AWSError>;
  /**
   * Lists agents or the Connector by ID or lists all agents/Connectors associated with your user account if you did not specify an ID.
   */
  describeAgents(callback?: (err: AWSError, data: Discovery.Types.DescribeAgentsResponse) => void): Request<Discovery.Types.DescribeAgentsResponse, AWSError>;
  /**
   * Retrieves attributes for a list of configuration item IDs. All of the supplied IDs must be for the same asset type (server, application, process, or connection). Output fields are specific to the asset type selected. For example, the output for a server configuration item includes a list of attributes about the server, such as host name, operating system, and number of network cards. For a complete list of outputs for each asset type, see Using the DescribeConfigurations Action.
   */
  describeConfigurations(params: Discovery.Types.DescribeConfigurationsRequest, callback?: (err: AWSError, data: Discovery.Types.DescribeConfigurationsResponse) => void): Request<Discovery.Types.DescribeConfigurationsResponse, AWSError>;
  /**
   * Retrieves attributes for a list of configuration item IDs. All of the supplied IDs must be for the same asset type (server, application, process, or connection). Output fields are specific to the asset type selected. For example, the output for a server configuration item includes a list of attributes about the server, such as host name, operating system, and number of network cards. For a complete list of outputs for each asset type, see Using the DescribeConfigurations Action.
   */
  describeConfigurations(callback?: (err: AWSError, data: Discovery.Types.DescribeConfigurationsResponse) => void): Request<Discovery.Types.DescribeConfigurationsResponse, AWSError>;
  /**
   * Deprecated. Use DescribeExportTasks instead. Retrieves the status of a given export process. You can retrieve status from a maximum of 100 processes.
   */
  describeExportConfigurations(params: Discovery.Types.DescribeExportConfigurationsRequest, callback?: (err: AWSError, data: Discovery.Types.DescribeExportConfigurationsResponse) => void): Request<Discovery.Types.DescribeExportConfigurationsResponse, AWSError>;
  /**
   * Deprecated. Use DescribeExportTasks instead. Retrieves the status of a given export process. You can retrieve status from a maximum of 100 processes.
   */
  describeExportConfigurations(callback?: (err: AWSError, data: Discovery.Types.DescribeExportConfigurationsResponse) => void): Request<Discovery.Types.DescribeExportConfigurationsResponse, AWSError>;
  /**
   * Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.
   */
  describeExportTasks(params: Discovery.Types.DescribeExportTasksRequest, callback?: (err: AWSError, data: Discovery.Types.DescribeExportTasksResponse) => void): Request<Discovery.Types.DescribeExportTasksResponse, AWSError>;
  /**
   * Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.
   */
  describeExportTasks(callback?: (err: AWSError, data: Discovery.Types.DescribeExportTasksResponse) => void): Request<Discovery.Types.DescribeExportTasksResponse, AWSError>;
  /**
   * Retrieves a list of configuration items that are tagged with a specific tag. Or retrieves a list of all tags assigned to a specific configuration item.
   */
  describeTags(params: Discovery.Types.DescribeTagsRequest, callback?: (err: AWSError, data: Discovery.Types.DescribeTagsResponse) => void): Request<Discovery.Types.DescribeTagsResponse, AWSError>;
  /**
   * Retrieves a list of configuration items that are tagged with a specific tag. Or retrieves a list of all tags assigned to a specific configuration item.
   */
  describeTags(callback?: (err: AWSError, data: Discovery.Types.DescribeTagsResponse) => void): Request<Discovery.Types.DescribeTagsResponse, AWSError>;
  /**
   * Disassociates one or more configuration items from an application.
   */
  disassociateConfigurationItemsFromApplication(params: Discovery.Types.DisassociateConfigurationItemsFromApplicationRequest, callback?: (err: AWSError, data: Discovery.Types.DisassociateConfigurationItemsFromApplicationResponse) => void): Request<Discovery.Types.DisassociateConfigurationItemsFromApplicationResponse, AWSError>;
  /**
   * Disassociates one or more configuration items from an application.
   */
  disassociateConfigurationItemsFromApplication(callback?: (err: AWSError, data: Discovery.Types.DisassociateConfigurationItemsFromApplicationResponse) => void): Request<Discovery.Types.DisassociateConfigurationItemsFromApplicationResponse, AWSError>;
  /**
   * Deprecated. Use StartExportTask instead. Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the DescribeExportConfigurations API. The system imposes a limit of two configuration exports in six hours.
   */
  exportConfigurations(callback?: (err: AWSError, data: Discovery.Types.ExportConfigurationsResponse) => void): Request<Discovery.Types.ExportConfigurationsResponse, AWSError>;
  /**
   * Retrieves a short summary of discovered assets.
   */
  getDiscoverySummary(params: Discovery.Types.GetDiscoverySummaryRequest, callback?: (err: AWSError, data: Discovery.Types.GetDiscoverySummaryResponse) => void): Request<Discovery.Types.GetDiscoverySummaryResponse, AWSError>;
  /**
   * Retrieves a short summary of discovered assets.
   */
  getDiscoverySummary(callback?: (err: AWSError, data: Discovery.Types.GetDiscoverySummaryResponse) => void): Request<Discovery.Types.GetDiscoverySummaryResponse, AWSError>;
  /**
   * Retrieves a list of configuration items according to criteria that you specify in a filter. The filter criteria identifies the relationship requirements.
   */
  listConfigurations(params: Discovery.Types.ListConfigurationsRequest, callback?: (err: AWSError, data: Discovery.Types.ListConfigurationsResponse) => void): Request<Discovery.Types.ListConfigurationsResponse, AWSError>;
  /**
   * Retrieves a list of configuration items according to criteria that you specify in a filter. The filter criteria identifies the relationship requirements.
   */
  listConfigurations(callback?: (err: AWSError, data: Discovery.Types.ListConfigurationsResponse) => void): Request<Discovery.Types.ListConfigurationsResponse, AWSError>;
  /**
   * Retrieves a list of servers that are one network hop away from a specified server.
   */
  listServerNeighbors(params: Discovery.Types.ListServerNeighborsRequest, callback?: (err: AWSError, data: Discovery.Types.ListServerNeighborsResponse) => void): Request<Discovery.Types.ListServerNeighborsResponse, AWSError>;
  /**
   * Retrieves a list of servers that are one network hop away from a specified server.
   */
  listServerNeighbors(callback?: (err: AWSError, data: Discovery.Types.ListServerNeighborsResponse) => void): Request<Discovery.Types.ListServerNeighborsResponse, AWSError>;
  /**
   * Instructs the specified agents or connectors to start collecting data.
   */
  startDataCollectionByAgentIds(params: Discovery.Types.StartDataCollectionByAgentIdsRequest, callback?: (err: AWSError, data: Discovery.Types.StartDataCollectionByAgentIdsResponse) => void): Request<Discovery.Types.StartDataCollectionByAgentIdsResponse, AWSError>;
  /**
   * Instructs the specified agents or connectors to start collecting data.
   */
  startDataCollectionByAgentIds(callback?: (err: AWSError, data: Discovery.Types.StartDataCollectionByAgentIdsResponse) => void): Request<Discovery.Types.StartDataCollectionByAgentIdsResponse, AWSError>;
  /**
   *  Begins the export of discovered data to an S3 bucket.  If you specify agentId in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using startTime and endTime. Export of detailed agent data is limited to five concurrently running exports.   If you do not include an agentId filter, summary data is exported that includes both AWS Agentless Discovery Connector data and summary data from AWS Discovery Agents. Export of summary data is limited to two exports per day. 
   */
  startExportTask(params: Discovery.Types.StartExportTaskRequest, callback?: (err: AWSError, data: Discovery.Types.StartExportTaskResponse) => void): Request<Discovery.Types.StartExportTaskResponse, AWSError>;
  /**
   *  Begins the export of discovered data to an S3 bucket.  If you specify agentId in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using startTime and endTime. Export of detailed agent data is limited to five concurrently running exports.   If you do not include an agentId filter, summary data is exported that includes both AWS Agentless Discovery Connector data and summary data from AWS Discovery Agents. Export of summary data is limited to two exports per day. 
   */
  startExportTask(callback?: (err: AWSError, data: Discovery.Types.StartExportTaskResponse) => void): Request<Discovery.Types.StartExportTaskResponse, AWSError>;
  /**
   * Instructs the specified agents or connectors to stop collecting data.
   */
  stopDataCollectionByAgentIds(params: Discovery.Types.StopDataCollectionByAgentIdsRequest, callback?: (err: AWSError, data: Discovery.Types.StopDataCollectionByAgentIdsResponse) => void): Request<Discovery.Types.StopDataCollectionByAgentIdsResponse, AWSError>;
  /**
   * Instructs the specified agents or connectors to stop collecting data.
   */
  stopDataCollectionByAgentIds(callback?: (err: AWSError, data: Discovery.Types.StopDataCollectionByAgentIdsResponse) => void): Request<Discovery.Types.StopDataCollectionByAgentIdsResponse, AWSError>;
  /**
   * Updates metadata about an application.
   */
  updateApplication(params: Discovery.Types.UpdateApplicationRequest, callback?: (err: AWSError, data: Discovery.Types.UpdateApplicationResponse) => void): Request<Discovery.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates metadata about an application.
   */
  updateApplication(callback?: (err: AWSError, data: Discovery.Types.UpdateApplicationResponse) => void): Request<Discovery.Types.UpdateApplicationResponse, AWSError>;
}
declare namespace Discovery {
  export interface AgentConfigurationStatus {
    /**
     * The agent/connector ID.
     */
    agentId?: String;
    /**
     * Information about the status of the StartDataCollection and StopDataCollection operations. The system has recorded the data collection operation. The agent/connector receives this command the next time it polls for a new command. 
     */
    operationSucceeded?: Boolean;
    /**
     * A description of the operation performed.
     */
    description?: String;
  }
  export type AgentConfigurationStatusList = AgentConfigurationStatus[];
  export type AgentId = string;
  export type AgentIds = AgentId[];
  export interface AgentInfo {
    /**
     * The agent or connector ID.
     */
    agentId?: AgentId;
    /**
     * The name of the host where the agent or connector resides. The host can be a server or virtual machine.
     */
    hostName?: String;
    /**
     * Network details about the host where the agent or connector resides.
     */
    agentNetworkInfoList?: AgentNetworkInfoList;
    /**
     * The ID of the connector.
     */
    connectorId?: String;
    /**
     * The agent or connector version.
     */
    version?: String;
    /**
     * The health of the agent or connector.
     */
    health?: AgentStatus;
    /**
     * Time since agent or connector health was reported.
     */
    lastHealthPingTime?: String;
    /**
     * Status of the collection process for an agent or connector.
     */
    collectionStatus?: String;
    /**
     * Type of agent.
     */
    agentType?: String;
    /**
     * Agent's first registration timestamp in UTC.
     */
    registeredTime?: String;
  }
  export interface AgentNetworkInfo {
    /**
     * The IP address for the host where the agent/connector resides.
     */
    ipAddress?: String;
    /**
     * The MAC address for the host where the agent/connector resides.
     */
    macAddress?: String;
  }
  export type AgentNetworkInfoList = AgentNetworkInfo[];
  export type AgentStatus = "HEALTHY"|"UNHEALTHY"|"RUNNING"|"UNKNOWN"|"BLACKLISTED"|"SHUTDOWN"|string;
  export type AgentsInfo = AgentInfo[];
  export type ApplicationId = string;
  export type ApplicationIdsList = ApplicationId[];
  export interface AssociateConfigurationItemsToApplicationRequest {
    /**
     * The configuration ID of an application with which items are to be associated.
     */
    applicationConfigurationId: ApplicationId;
    /**
     * The ID of each configuration item to be associated with an application.
     */
    configurationIds: ConfigurationIdList;
  }
  export interface AssociateConfigurationItemsToApplicationResponse {
  }
  export type Boolean = boolean;
  export type BoxedInteger = number;
  export type Condition = string;
  export type Configuration = {[key: string]: String};
  export type ConfigurationId = string;
  export type ConfigurationIdList = ConfigurationId[];
  export type ConfigurationItemType = "SERVER"|"PROCESS"|"CONNECTION"|"APPLICATION"|string;
  export interface ConfigurationTag {
    /**
     * A type of IT asset to tag.
     */
    configurationType?: ConfigurationItemType;
    /**
     * The configuration ID for the item to tag. You can specify a list of keys and values.
     */
    configurationId?: ConfigurationId;
    /**
     * A type of tag on which to filter. For example, serverType.
     */
    key?: TagKey;
    /**
     * A value on which to filter. For example key = serverType and value = web server.
     */
    value?: TagValue;
    /**
     * The time the configuration tag was created in Coordinated Universal Time (UTC).
     */
    timeOfCreation?: TimeStamp;
  }
  export type ConfigurationTagSet = ConfigurationTag[];
  export type Configurations = Configuration[];
  export type ConfigurationsDownloadUrl = string;
  export type ConfigurationsExportId = string;
  export interface CreateApplicationRequest {
    /**
     * Name of the application to be created.
     */
    name: String;
    /**
     * Description of the application to be created.
     */
    description?: String;
  }
  export interface CreateApplicationResponse {
    /**
     * Configuration ID of an application to be created.
     */
    configurationId?: String;
  }
  export interface CreateTagsRequest {
    /**
     * A list of configuration items that you want to tag.
     */
    configurationIds: ConfigurationIdList;
    /**
     * Tags that you want to associate with one or more configuration items. Specify the tags that you want to create in a key-value format. For example:  {"key": "serverType", "value": "webServer"} 
     */
    tags: TagSet;
  }
  export interface CreateTagsResponse {
  }
  export interface CustomerAgentInfo {
    /**
     * Number of active discovery agents.
     */
    activeAgents: Integer;
    /**
     * Number of healthy discovery agents
     */
    healthyAgents: Integer;
    /**
     * Number of blacklisted discovery agents.
     */
    blackListedAgents: Integer;
    /**
     * Number of discovery agents with status SHUTDOWN.
     */
    shutdownAgents: Integer;
    /**
     * Number of unhealthy discovery agents.
     */
    unhealthyAgents: Integer;
    /**
     * Total number of discovery agents.
     */
    totalAgents: Integer;
    /**
     * Number of unknown discovery agents.
     */
    unknownAgents: Integer;
  }
  export interface CustomerConnectorInfo {
    /**
     * Number of active discovery connectors.
     */
    activeConnectors: Integer;
    /**
     * Number of healthy discovery connectors.
     */
    healthyConnectors: Integer;
    /**
     * Number of blacklisted discovery connectors.
     */
    blackListedConnectors: Integer;
    /**
     * Number of discovery connectors with status SHUTDOWN,
     */
    shutdownConnectors: Integer;
    /**
     * Number of unhealthy discovery connectors.
     */
    unhealthyConnectors: Integer;
    /**
     * Total number of discovery connectors.
     */
    totalConnectors: Integer;
    /**
     * Number of unknown discovery connectors.
     */
    unknownConnectors: Integer;
  }
  export interface DeleteApplicationsRequest {
    /**
     * Configuration ID of an application to be deleted.
     */
    configurationIds: ApplicationIdsList;
  }
  export interface DeleteApplicationsResponse {
  }
  export interface DeleteTagsRequest {
    /**
     * A list of configuration items with tags that you want to delete.
     */
    configurationIds: ConfigurationIdList;
    /**
     * Tags that you want to delete from one or more configuration items. Specify the tags that you want to delete in a key-value format. For example:  {"key": "serverType", "value": "webServer"} 
     */
    tags?: TagSet;
  }
  export interface DeleteTagsResponse {
  }
  export interface DescribeAgentsRequest {
    /**
     * The agent or the Connector IDs for which you want information. If you specify no IDs, the system returns information about all agents/Connectors associated with your AWS user account.
     */
    agentIds?: AgentIds;
    /**
     * You can filter the request using various logical operators and a key-value format. For example:   {"key": "collectionStatus", "value": "STARTED"} 
     */
    filters?: Filters;
    /**
     * The total number of agents/Connectors to return in a single page of output. The maximum value is 100.
     */
    maxResults?: Integer;
    /**
     * Token to retrieve the next set of results. For example, if you previously specified 100 IDs for DescribeAgentsRequest$agentIds but set DescribeAgentsRequest$maxResults to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.
     */
    nextToken?: NextToken;
  }
  export interface DescribeAgentsResponse {
    /**
     * Lists agents or the Connector by ID or lists all agents/Connectors associated with your user account if you did not specify an agent/Connector ID. The output includes agent/Connector IDs, IP addresses, media access control (MAC) addresses, agent/Connector health, host name where the agent/Connector resides, and the version number of each agent/Connector.
     */
    agentsInfo?: AgentsInfo;
    /**
     * Token to retrieve the next set of results. For example, if you specified 100 IDs for DescribeAgentsRequest$agentIds but set DescribeAgentsRequest$maxResults to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.
     */
    nextToken?: NextToken;
  }
  export type DescribeConfigurationsAttribute = {[key: string]: String};
  export type DescribeConfigurationsAttributes = DescribeConfigurationsAttribute[];
  export interface DescribeConfigurationsRequest {
    /**
     * One or more configuration IDs.
     */
    configurationIds: ConfigurationIdList;
  }
  export interface DescribeConfigurationsResponse {
    /**
     * A key in the response map. The value is an array of data.
     */
    configurations?: DescribeConfigurationsAttributes;
  }
  export interface DescribeExportConfigurationsRequest {
    /**
     * A unique identifier that you can use to query the export status.
     */
    exportIds?: ExportIds;
    /**
     * The maximum number of results that you want to display as a part of the query.
     */
    maxResults?: Integer;
    /**
     * A token to get the next set of results. For example, if you specify 100 IDs for DescribeExportConfigurationsRequest$exportIds but set DescribeExportConfigurationsRequest$maxResults to 10, you get results in a set of 10. Use the token in the query to get the next set of 10.
     */
    nextToken?: NextToken;
  }
  export interface DescribeExportConfigurationsResponse {
    /**
     * Returns export details. When the status is complete, the response includes a URL for an Amazon S3 bucket where you can view the data in a CSV file.
     */
    exportsInfo?: ExportsInfo;
    /**
     * A token to get the next set of results. For example, if you specify 100 IDs for DescribeExportConfigurationsRequest$exportIds but set DescribeExportConfigurationsRequest$maxResults to 10, you get results in a set of 10. Use the token in the query to get the next set of 10.
     */
    nextToken?: NextToken;
  }
  export interface DescribeExportTasksRequest {
    /**
     * One or more unique identifiers used to query the status of an export request.
     */
    exportIds?: ExportIds;
    /**
     * One or more filters.    AgentId - ID of the agent whose collected data will be exported  
     */
    filters?: ExportFilters;
    /**
     * The maximum number of volume results returned by DescribeExportTasks in paginated output. When this parameter is used, DescribeExportTasks only returns maxResults results in a single page along with a nextToken response element.
     */
    maxResults?: Integer;
    /**
     * The nextToken value returned from a previous paginated DescribeExportTasks request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.
     */
    nextToken?: NextToken;
  }
  export interface DescribeExportTasksResponse {
    /**
     * Contains one or more sets of export request details. When the status of a request is SUCCEEDED, the response includes a URL for an Amazon S3 bucket where you can view the data in a CSV file.
     */
    exportsInfo?: ExportsInfo;
    /**
     * The nextToken value to include in a future DescribeExportTasks request. When the results of a DescribeExportTasks request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: NextToken;
  }
  export interface DescribeTagsRequest {
    /**
     * You can filter the list using a key-value format. You can separate these items by using logical operators. Allowed filters include tagKey, tagValue, and configurationId. 
     */
    filters?: TagFilters;
    /**
     * The total number of items to return in a single page of output. The maximum value is 100.
     */
    maxResults?: Integer;
    /**
     * A token to start the list. Use this token to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface DescribeTagsResponse {
    /**
     * Depending on the input, this is a list of configuration items tagged with a specific tag, or a list of tags for a specific configuration item.
     */
    tags?: ConfigurationTagSet;
    /**
     * The call returns a token. Use this token to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface DisassociateConfigurationItemsFromApplicationRequest {
    /**
     * Configuration ID of an application from which each item is disassociated.
     */
    applicationConfigurationId: ApplicationId;
    /**
     * Configuration ID of each item to be disassociated from an application.
     */
    configurationIds: ConfigurationIdList;
  }
  export interface DisassociateConfigurationItemsFromApplicationResponse {
  }
  export interface ExportConfigurationsResponse {
    /**
     * A unique identifier that you can use to query the export status.
     */
    exportId?: ConfigurationsExportId;
  }
  export type ExportDataFormat = "CSV"|"GRAPHML"|string;
  export type ExportDataFormats = ExportDataFormat[];
  export interface ExportFilter {
    /**
     * A single ExportFilter name. Supported filters: agentId.
     */
    name: FilterName;
    /**
     * A single agentId for a Discovery Agent. An agentId can be found using the DescribeAgents action. Typically an ADS agentId is in the form o-0123456789abcdef0.
     */
    values: FilterValues;
    /**
     * Supported condition: EQUALS 
     */
    condition: Condition;
  }
  export type ExportFilters = ExportFilter[];
  export type ExportIds = ConfigurationsExportId[];
  export interface ExportInfo {
    /**
     * A unique identifier used to query an export.
     */
    exportId: ConfigurationsExportId;
    /**
     * The status of the data export job.
     */
    exportStatus: ExportStatus;
    /**
     * A status message provided for API callers.
     */
    statusMessage: ExportStatusMessage;
    /**
     * A URL for an Amazon S3 bucket where you can review the exported data. The URL is displayed only if the export succeeded.
     */
    configurationsDownloadUrl?: ConfigurationsDownloadUrl;
    /**
     * The time that the data export was initiated.
     */
    exportRequestTime: ExportRequestTime;
    /**
     * If true, the export of agent information exceeded the size limit for a single export and the exported data is incomplete for the requested time range. To address this, select a smaller time range for the export by using startDate and endDate.
     */
    isTruncated?: Boolean;
    /**
     * The value of startTime parameter in the StartExportTask request. If no startTime was requested, this result does not appear in ExportInfo.
     */
    requestedStartTime?: TimeStamp;
    /**
     * The endTime used in the StartExportTask request. If no endTime was requested, this result does not appear in ExportInfo.
     */
    requestedEndTime?: TimeStamp;
  }
  export type ExportRequestTime = Date;
  export type ExportStatus = "FAILED"|"SUCCEEDED"|"IN_PROGRESS"|string;
  export type ExportStatusMessage = string;
  export type ExportsInfo = ExportInfo[];
  export interface Filter {
    /**
     * The name of the filter.
     */
    name: String;
    /**
     * A string value on which to filter. For example, if you choose the destinationServer.osVersion filter name, you could specify Ubuntu for the value.
     */
    values: FilterValues;
    /**
     * A conditional operator. The following operators are valid: EQUALS, NOT_EQUALS, CONTAINS, NOT_CONTAINS. If you specify multiple filters, the system utilizes all filters as though concatenated by AND. If you specify multiple values for a particular filter, the system differentiates the values using OR. Calling either DescribeConfigurations or ListConfigurations returns attributes of matching configuration items.
     */
    condition: Condition;
  }
  export type FilterName = string;
  export type FilterValue = string;
  export type FilterValues = FilterValue[];
  export type Filters = Filter[];
  export interface GetDiscoverySummaryRequest {
  }
  export interface GetDiscoverySummaryResponse {
    /**
     * The number of servers discovered.
     */
    servers?: Long;
    /**
     * The number of applications discovered.
     */
    applications?: Long;
    /**
     * The number of servers mapped to applications.
     */
    serversMappedToApplications?: Long;
    /**
     * The number of servers mapped to tags.
     */
    serversMappedtoTags?: Long;
    /**
     * Details about discovered agents, including agent status and health.
     */
    agentSummary?: CustomerAgentInfo;
    /**
     * Details about discovered connectors, including connector status and health.
     */
    connectorSummary?: CustomerConnectorInfo;
  }
  export type Integer = number;
  export interface ListConfigurationsRequest {
    /**
     * A valid configuration identified by Application Discovery Service. 
     */
    configurationType: ConfigurationItemType;
    /**
     * You can filter the request using various logical operators and a key-value format. For example:   {"key": "serverType", "value": "webServer"}  For a complete list of filter options and guidance about using them with this action, see Querying Discovered Configuration Items. 
     */
    filters?: Filters;
    /**
     * The total number of items to return. The maximum value is 100.
     */
    maxResults?: Integer;
    /**
     * Token to retrieve the next set of results. For example, if a previous call to ListConfigurations returned 100 items, but you set ListConfigurationsRequest$maxResults to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.
     */
    nextToken?: NextToken;
    /**
     * Certain filter criteria return output that can be sorted in ascending or descending order. For a list of output characteristics for each filter, see Using the ListConfigurations Action.
     */
    orderBy?: OrderByList;
  }
  export interface ListConfigurationsResponse {
    /**
     * Returns configuration details, including the configuration ID, attribute names, and attribute values.
     */
    configurations?: Configurations;
    /**
     * Token to retrieve the next set of results. For example, if your call to ListConfigurations returned 100 items, but you set ListConfigurationsRequest$maxResults to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.
     */
    nextToken?: NextToken;
  }
  export interface ListServerNeighborsRequest {
    /**
     * Configuration ID of the server for which neighbors are being listed.
     */
    configurationId: ConfigurationId;
    /**
     * Flag to indicate if port and protocol information is needed as part of the response.
     */
    portInformationNeeded?: Boolean;
    /**
     * List of configuration IDs to test for one-hop-away.
     */
    neighborConfigurationIds?: ConfigurationIdList;
    /**
     * Maximum number of results to return in a single page of output.
     */
    maxResults?: Integer;
    /**
     * Token to retrieve the next set of results. For example, if you previously specified 100 IDs for ListServerNeighborsRequest$neighborConfigurationIds but set ListServerNeighborsRequest$maxResults to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.
     */
    nextToken?: String;
  }
  export interface ListServerNeighborsResponse {
    /**
     * List of distinct servers that are one hop away from the given server.
     */
    neighbors: NeighborDetailsList;
    /**
     * Token to retrieve the next set of results. For example, if you specified 100 IDs for ListServerNeighborsRequest$neighborConfigurationIds but set ListServerNeighborsRequest$maxResults to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.
     */
    nextToken?: String;
    /**
     * Count of distinct servers that are one hop away from the given server.
     */
    knownDependencyCount?: Long;
  }
  export type Long = number;
  export type Message = string;
  export interface NeighborConnectionDetail {
    /**
     * The ID of the server that opened the network connection.
     */
    sourceServerId: ConfigurationId;
    /**
     * The ID of the server that accepted the network connection.
     */
    destinationServerId: ConfigurationId;
    /**
     * The destination network port for the connection.
     */
    destinationPort?: BoxedInteger;
    /**
     * The network protocol used for the connection.
     */
    transportProtocol?: String;
    /**
     * The number of open network connections with the neighboring server.
     */
    connectionsCount: Long;
  }
  export type NeighborDetailsList = NeighborConnectionDetail[];
  export type NextToken = string;
  export interface OrderByElement {
    /**
     * The field on which to order.
     */
    fieldName: String;
    /**
     * Ordering direction.
     */
    sortOrder?: orderString;
  }
  export type OrderByList = OrderByElement[];
  export interface StartDataCollectionByAgentIdsRequest {
    /**
     * The IDs of the agents or connectors from which to start collecting data. If you send a request to an agent/connector ID that you do not have permission to contact, according to your AWS account, the service does not throw an exception. Instead, it returns the error in the Description field. If you send a request to multiple agents/connectors and you do not have permission to contact some of those agents/connectors, the system does not throw an exception. Instead, the system shows Failed in the Description field.
     */
    agentIds: AgentIds;
  }
  export interface StartDataCollectionByAgentIdsResponse {
    /**
     * Information about agents or the connector that were instructed to start collecting data. Information includes the agent/connector ID, a description of the operation performed, and whether the agent/connector configuration was updated.
     */
    agentsConfigurationStatus?: AgentConfigurationStatusList;
  }
  export interface StartExportTaskRequest {
    /**
     * The file format for the returned export data. Default value is CSV.
     */
    exportDataFormat?: ExportDataFormats;
    /**
     * If a filter is present, it selects the single agentId of the Application Discovery Agent for which data is exported. The agentId can be found in the results of the DescribeAgents API or CLI. If no filter is present, startTime and endTime are ignored and exported data includes both Agentless Discovery Connector data and summary data from Application Discovery agents. 
     */
    filters?: ExportFilters;
    /**
     * The start timestamp for exported data from the single Application Discovery Agent selected in the filters. If no value is specified, data is exported starting from the first data collected by the agent.
     */
    startTime?: TimeStamp;
    /**
     * The end timestamp for exported data from the single Application Discovery Agent selected in the filters. If no value is specified, exported data includes the most recent data collected by the agent.
     */
    endTime?: TimeStamp;
  }
  export interface StartExportTaskResponse {
    /**
     * A unique identifier used to query the status of an export request.
     */
    exportId?: ConfigurationsExportId;
  }
  export interface StopDataCollectionByAgentIdsRequest {
    /**
     * The IDs of the agents or connectors from which to stop collecting data.
     */
    agentIds: AgentIds;
  }
  export interface StopDataCollectionByAgentIdsResponse {
    /**
     * Information about the agents or connector that were instructed to stop collecting data. Information includes the agent/connector ID, a description of the operation performed, and whether the agent/connector configuration was updated.
     */
    agentsConfigurationStatus?: AgentConfigurationStatusList;
  }
  export type String = string;
  export interface Tag {
    /**
     * The type of tag on which to filter.
     */
    key: TagKey;
    /**
     * A value for a tag key on which to filter.
     */
    value: TagValue;
  }
  export interface TagFilter {
    /**
     * A name of the tag filter.
     */
    name: FilterName;
    /**
     * Values for the tag filter.
     */
    values: FilterValues;
  }
  export type TagFilters = TagFilter[];
  export type TagKey = string;
  export type TagSet = Tag[];
  export type TagValue = string;
  export type TimeStamp = Date;
  export interface UpdateApplicationRequest {
    /**
     * Configuration ID of the application to be updated.
     */
    configurationId: ApplicationId;
    /**
     * New name of the application to be updated.
     */
    name?: String;
    /**
     * New description of the application to be updated.
     */
    description?: String;
  }
  export interface UpdateApplicationResponse {
  }
  export type orderString = "ASC"|"DESC"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-11-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Discovery client.
   */
  export import Types = Discovery;
}
export = Discovery;
