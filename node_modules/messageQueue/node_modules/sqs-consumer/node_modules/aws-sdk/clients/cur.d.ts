import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CUR extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CUR.Types.ClientConfiguration)
  config: Config & CUR.Types.ClientConfiguration;
  /**
   * Delete a specified report definition
   */
  deleteReportDefinition(params: CUR.Types.DeleteReportDefinitionRequest, callback?: (err: AWSError, data: CUR.Types.DeleteReportDefinitionResponse) => void): Request<CUR.Types.DeleteReportDefinitionResponse, AWSError>;
  /**
   * Delete a specified report definition
   */
  deleteReportDefinition(callback?: (err: AWSError, data: CUR.Types.DeleteReportDefinitionResponse) => void): Request<CUR.Types.DeleteReportDefinitionResponse, AWSError>;
  /**
   * Describe a list of report definitions owned by the account
   */
  describeReportDefinitions(params: CUR.Types.DescribeReportDefinitionsRequest, callback?: (err: AWSError, data: CUR.Types.DescribeReportDefinitionsResponse) => void): Request<CUR.Types.DescribeReportDefinitionsResponse, AWSError>;
  /**
   * Describe a list of report definitions owned by the account
   */
  describeReportDefinitions(callback?: (err: AWSError, data: CUR.Types.DescribeReportDefinitionsResponse) => void): Request<CUR.Types.DescribeReportDefinitionsResponse, AWSError>;
  /**
   * Create a new report definition
   */
  putReportDefinition(params: CUR.Types.PutReportDefinitionRequest, callback?: (err: AWSError, data: CUR.Types.PutReportDefinitionResponse) => void): Request<CUR.Types.PutReportDefinitionResponse, AWSError>;
  /**
   * Create a new report definition
   */
  putReportDefinition(callback?: (err: AWSError, data: CUR.Types.PutReportDefinitionResponse) => void): Request<CUR.Types.PutReportDefinitionResponse, AWSError>;
}
declare namespace CUR {
  export type AWSRegion = "us-east-1"|"us-west-1"|"us-west-2"|"eu-central-1"|"eu-west-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-northeast-1"|string;
  export type AdditionalArtifact = "REDSHIFT"|"QUICKSIGHT"|string;
  export type AdditionalArtifactList = AdditionalArtifact[];
  export type CompressionFormat = "ZIP"|"GZIP"|string;
  export interface DeleteReportDefinitionRequest {
    ReportName?: ReportName;
  }
  export interface DeleteReportDefinitionResponse {
    ResponseMessage?: DeleteResponseMessage;
  }
  export type DeleteResponseMessage = string;
  export interface DescribeReportDefinitionsRequest {
    MaxResults?: MaxResults;
    NextToken?: GenericString;
  }
  export interface DescribeReportDefinitionsResponse {
    ReportDefinitions?: ReportDefinitionList;
    NextToken?: GenericString;
  }
  export type ErrorMessage = string;
  export type GenericString = string;
  export type MaxResults = number;
  export interface PutReportDefinitionRequest {
    ReportDefinition: ReportDefinition;
  }
  export interface PutReportDefinitionResponse {
  }
  export interface ReportDefinition {
    ReportName: ReportName;
    TimeUnit: TimeUnit;
    Format: ReportFormat;
    Compression: CompressionFormat;
    AdditionalSchemaElements: SchemaElementList;
    S3Bucket: S3Bucket;
    S3Prefix: S3Prefix;
    S3Region: AWSRegion;
    AdditionalArtifacts?: AdditionalArtifactList;
  }
  export type ReportDefinitionList = ReportDefinition[];
  export type ReportFormat = "textORcsv"|string;
  export type ReportName = string;
  export type S3Bucket = string;
  export type S3Prefix = string;
  export type SchemaElement = "RESOURCES"|string;
  export type SchemaElementList = SchemaElement[];
  export type TimeUnit = "HOURLY"|"DAILY"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-01-06"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CUR client.
   */
  export import Types = CUR;
}
export = CUR;
