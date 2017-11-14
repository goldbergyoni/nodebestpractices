import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class KinesisAnalytics extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: KinesisAnalytics.Types.ClientConfiguration)
  config: Config & KinesisAnalytics.Types.ClientConfiguration;
  /**
   * Adds a CloudWatch log stream to monitor application configuration errors. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see Working with Amazon CloudWatch Logs.
   */
  addApplicationCloudWatchLoggingOption(params: KinesisAnalytics.Types.AddApplicationCloudWatchLoggingOptionRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.AddApplicationCloudWatchLoggingOptionResponse) => void): Request<KinesisAnalytics.Types.AddApplicationCloudWatchLoggingOptionResponse, AWSError>;
  /**
   * Adds a CloudWatch log stream to monitor application configuration errors. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see Working with Amazon CloudWatch Logs.
   */
  addApplicationCloudWatchLoggingOption(callback?: (err: AWSError, data: KinesisAnalytics.Types.AddApplicationCloudWatchLoggingOptionResponse) => void): Request<KinesisAnalytics.Types.AddApplicationCloudWatchLoggingOptionResponse, AWSError>;
  /**
   *  Adds a streaming source to your Amazon Kinesis application. For conceptual information, see Configuring Application Input.  You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see CreateApplication. Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application version.  This operation requires permissions to perform the kinesisanalytics:AddApplicationInput action.
   */
  addApplicationInput(params: KinesisAnalytics.Types.AddApplicationInputRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.AddApplicationInputResponse) => void): Request<KinesisAnalytics.Types.AddApplicationInputResponse, AWSError>;
  /**
   *  Adds a streaming source to your Amazon Kinesis application. For conceptual information, see Configuring Application Input.  You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see CreateApplication. Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application version.  This operation requires permissions to perform the kinesisanalytics:AddApplicationInput action.
   */
  addApplicationInput(callback?: (err: AWSError, data: KinesisAnalytics.Types.AddApplicationInputResponse) => void): Request<KinesisAnalytics.Types.AddApplicationInputResponse, AWSError>;
  /**
   * Adds an InputProcessingConfiguration to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is AWS Lambda.
   */
  addApplicationInputProcessingConfiguration(params: KinesisAnalytics.Types.AddApplicationInputProcessingConfigurationRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.AddApplicationInputProcessingConfigurationResponse) => void): Request<KinesisAnalytics.Types.AddApplicationInputProcessingConfigurationResponse, AWSError>;
  /**
   * Adds an InputProcessingConfiguration to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is AWS Lambda.
   */
  addApplicationInputProcessingConfiguration(callback?: (err: AWSError, data: KinesisAnalytics.Types.AddApplicationInputProcessingConfigurationResponse) => void): Request<KinesisAnalytics.Types.AddApplicationInputProcessingConfigurationResponse, AWSError>;
  /**
   * Adds an external destination to your Amazon Kinesis Analytics application. If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream or a Firehose delivery stream), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.  You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For conceptual information, see Understanding Application Output (Destination).   Note that any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application version. For the limits on the number of application inputs and outputs you can configure, see Limits. This operation requires permissions to perform the kinesisanalytics:AddApplicationOutput action.
   */
  addApplicationOutput(params: KinesisAnalytics.Types.AddApplicationOutputRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.AddApplicationOutputResponse) => void): Request<KinesisAnalytics.Types.AddApplicationOutputResponse, AWSError>;
  /**
   * Adds an external destination to your Amazon Kinesis Analytics application. If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream or a Firehose delivery stream), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.  You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For conceptual information, see Understanding Application Output (Destination).   Note that any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application version. For the limits on the number of application inputs and outputs you can configure, see Limits. This operation requires permissions to perform the kinesisanalytics:AddApplicationOutput action.
   */
  addApplicationOutput(callback?: (err: AWSError, data: KinesisAnalytics.Types.AddApplicationOutputResponse) => void): Request<KinesisAnalytics.Types.AddApplicationOutputResponse, AWSError>;
  /**
   * Adds a reference data source to an existing application. Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.  For conceptual information, see Configuring Application Input. For the limits on data sources you can add to your application, see Limits.   This operation requires permissions to perform the kinesisanalytics:AddApplicationOutput action. 
   */
  addApplicationReferenceDataSource(params: KinesisAnalytics.Types.AddApplicationReferenceDataSourceRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.AddApplicationReferenceDataSourceResponse) => void): Request<KinesisAnalytics.Types.AddApplicationReferenceDataSourceResponse, AWSError>;
  /**
   * Adds a reference data source to an existing application. Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.  For conceptual information, see Configuring Application Input. For the limits on data sources you can add to your application, see Limits.   This operation requires permissions to perform the kinesisanalytics:AddApplicationOutput action. 
   */
  addApplicationReferenceDataSource(callback?: (err: AWSError, data: KinesisAnalytics.Types.AddApplicationReferenceDataSourceResponse) => void): Request<KinesisAnalytics.Types.AddApplicationReferenceDataSourceResponse, AWSError>;
  /**
   *  Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to five streaming destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see How it Works.  In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source. Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps. In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to five streaming destinations.  To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the kinesisanalytics:CreateApplication action.   For introductory exercises to create an Amazon Kinesis Analytics application, see Getting Started. 
   */
  createApplication(params: KinesisAnalytics.Types.CreateApplicationRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.CreateApplicationResponse) => void): Request<KinesisAnalytics.Types.CreateApplicationResponse, AWSError>;
  /**
   *  Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to five streaming destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see How it Works.  In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source. Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps. In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to five streaming destinations.  To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the kinesisanalytics:CreateApplication action.   For introductory exercises to create an Amazon Kinesis Analytics application, see Getting Started. 
   */
  createApplication(callback?: (err: AWSError, data: KinesisAnalytics.Types.CreateApplicationResponse) => void): Request<KinesisAnalytics.Types.CreateApplicationResponse, AWSError>;
  /**
   * Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code). This operation requires permissions to perform the kinesisanalytics:DeleteApplication action.
   */
  deleteApplication(params: KinesisAnalytics.Types.DeleteApplicationRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.DeleteApplicationResponse) => void): Request<KinesisAnalytics.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code). This operation requires permissions to perform the kinesisanalytics:DeleteApplication action.
   */
  deleteApplication(callback?: (err: AWSError, data: KinesisAnalytics.Types.DeleteApplicationResponse) => void): Request<KinesisAnalytics.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see Working with Amazon CloudWatch Logs.
   */
  deleteApplicationCloudWatchLoggingOption(params: KinesisAnalytics.Types.DeleteApplicationCloudWatchLoggingOptionRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.DeleteApplicationCloudWatchLoggingOptionResponse) => void): Request<KinesisAnalytics.Types.DeleteApplicationCloudWatchLoggingOptionResponse, AWSError>;
  /**
   * Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see Working with Amazon CloudWatch Logs.
   */
  deleteApplicationCloudWatchLoggingOption(callback?: (err: AWSError, data: KinesisAnalytics.Types.DeleteApplicationCloudWatchLoggingOptionResponse) => void): Request<KinesisAnalytics.Types.DeleteApplicationCloudWatchLoggingOptionResponse, AWSError>;
  /**
   * Deletes an InputProcessingConfiguration from an input.
   */
  deleteApplicationInputProcessingConfiguration(params: KinesisAnalytics.Types.DeleteApplicationInputProcessingConfigurationRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.DeleteApplicationInputProcessingConfigurationResponse) => void): Request<KinesisAnalytics.Types.DeleteApplicationInputProcessingConfigurationResponse, AWSError>;
  /**
   * Deletes an InputProcessingConfiguration from an input.
   */
  deleteApplicationInputProcessingConfiguration(callback?: (err: AWSError, data: KinesisAnalytics.Types.DeleteApplicationInputProcessingConfigurationResponse) => void): Request<KinesisAnalytics.Types.DeleteApplicationInputProcessingConfigurationResponse, AWSError>;
  /**
   * Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination. This operation requires permissions to perform the kinesisanalytics:DeleteApplicationOutput action.
   */
  deleteApplicationOutput(params: KinesisAnalytics.Types.DeleteApplicationOutputRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.DeleteApplicationOutputResponse) => void): Request<KinesisAnalytics.Types.DeleteApplicationOutputResponse, AWSError>;
  /**
   * Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination. This operation requires permissions to perform the kinesisanalytics:DeleteApplicationOutput action.
   */
  deleteApplicationOutput(callback?: (err: AWSError, data: KinesisAnalytics.Types.DeleteApplicationOutputResponse) => void): Request<KinesisAnalytics.Types.DeleteApplicationOutputResponse, AWSError>;
  /**
   * Deletes a reference data source configuration from the specified application configuration. If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the AddApplicationReferenceDataSource operation.  This operation requires permissions to perform the kinesisanalytics.DeleteApplicationReferenceDataSource action.
   */
  deleteApplicationReferenceDataSource(params: KinesisAnalytics.Types.DeleteApplicationReferenceDataSourceRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.DeleteApplicationReferenceDataSourceResponse) => void): Request<KinesisAnalytics.Types.DeleteApplicationReferenceDataSourceResponse, AWSError>;
  /**
   * Deletes a reference data source configuration from the specified application configuration. If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the AddApplicationReferenceDataSource operation.  This operation requires permissions to perform the kinesisanalytics.DeleteApplicationReferenceDataSource action.
   */
  deleteApplicationReferenceDataSource(callback?: (err: AWSError, data: KinesisAnalytics.Types.DeleteApplicationReferenceDataSourceResponse) => void): Request<KinesisAnalytics.Types.DeleteApplicationReferenceDataSourceResponse, AWSError>;
  /**
   * Returns information about a specific Amazon Kinesis Analytics application. If you want to retrieve a list of all applications in your account, use the ListApplications operation. This operation requires permissions to perform the kinesisanalytics:DescribeApplication action. You can use DescribeApplication to get the current application versionId, which you need to call other operations such as Update. 
   */
  describeApplication(params: KinesisAnalytics.Types.DescribeApplicationRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.DescribeApplicationResponse) => void): Request<KinesisAnalytics.Types.DescribeApplicationResponse, AWSError>;
  /**
   * Returns information about a specific Amazon Kinesis Analytics application. If you want to retrieve a list of all applications in your account, use the ListApplications operation. This operation requires permissions to perform the kinesisanalytics:DescribeApplication action. You can use DescribeApplication to get the current application versionId, which you need to call other operations such as Update. 
   */
  describeApplication(callback?: (err: AWSError, data: KinesisAnalytics.Types.DescribeApplicationResponse) => void): Request<KinesisAnalytics.Types.DescribeApplicationResponse, AWSError>;
  /**
   * Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream). In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.  You can use the inferred schema when configuring a streaming source for your application. For conceptual information, see Configuring Application Input. Note that when you create an application using the Amazon Kinesis Analytics console, the console uses this operation to infer a schema and show it in the console user interface.   This operation requires permissions to perform the kinesisanalytics:DiscoverInputSchema action. 
   */
  discoverInputSchema(params: KinesisAnalytics.Types.DiscoverInputSchemaRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.DiscoverInputSchemaResponse) => void): Request<KinesisAnalytics.Types.DiscoverInputSchemaResponse, AWSError>;
  /**
   * Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream). In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.  You can use the inferred schema when configuring a streaming source for your application. For conceptual information, see Configuring Application Input. Note that when you create an application using the Amazon Kinesis Analytics console, the console uses this operation to infer a schema and show it in the console user interface.   This operation requires permissions to perform the kinesisanalytics:DiscoverInputSchema action. 
   */
  discoverInputSchema(callback?: (err: AWSError, data: KinesisAnalytics.Types.DiscoverInputSchemaResponse) => void): Request<KinesisAnalytics.Types.DiscoverInputSchemaResponse, AWSError>;
  /**
   * Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the HasMoreApplications value as true, you can send another request by adding the ExclusiveStartApplicationName in the request body, and set the value of this to the last application name from the previous response.  If you want detailed information about a specific application, use DescribeApplication. This operation requires permissions to perform the kinesisanalytics:ListApplications action.
   */
  listApplications(params: KinesisAnalytics.Types.ListApplicationsRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.ListApplicationsResponse) => void): Request<KinesisAnalytics.Types.ListApplicationsResponse, AWSError>;
  /**
   * Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the HasMoreApplications value as true, you can send another request by adding the ExclusiveStartApplicationName in the request body, and set the value of this to the last application name from the previous response.  If you want detailed information about a specific application, use DescribeApplication. This operation requires permissions to perform the kinesisanalytics:ListApplications action.
   */
  listApplications(callback?: (err: AWSError, data: KinesisAnalytics.Types.ListApplicationsResponse) => void): Request<KinesisAnalytics.Types.ListApplicationsResponse, AWSError>;
  /**
   * Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application. After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.  The application status must be READY for you to start an application. You can get the application status in the console or using the DescribeApplication operation. After you start the application, you can stop the application from processing the input by calling the StopApplication operation. This operation requires permissions to perform the kinesisanalytics:StartApplication action.
   */
  startApplication(params: KinesisAnalytics.Types.StartApplicationRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.StartApplicationResponse) => void): Request<KinesisAnalytics.Types.StartApplicationResponse, AWSError>;
  /**
   * Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application. After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.  The application status must be READY for you to start an application. You can get the application status in the console or using the DescribeApplication operation. After you start the application, you can stop the application from processing the input by calling the StopApplication operation. This operation requires permissions to perform the kinesisanalytics:StartApplication action.
   */
  startApplication(callback?: (err: AWSError, data: KinesisAnalytics.Types.StartApplicationResponse) => void): Request<KinesisAnalytics.Types.StartApplicationResponse, AWSError>;
  /**
   * Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the DescribeApplication operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination.  This operation requires permissions to perform the kinesisanalytics:StopApplication action.
   */
  stopApplication(params: KinesisAnalytics.Types.StopApplicationRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.StopApplicationResponse) => void): Request<KinesisAnalytics.Types.StopApplicationResponse, AWSError>;
  /**
   * Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the DescribeApplication operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination.  This operation requires permissions to perform the kinesisanalytics:StopApplication action.
   */
  stopApplication(callback?: (err: AWSError, data: KinesisAnalytics.Types.StopApplicationResponse) => void): Request<KinesisAnalytics.Types.StopApplicationResponse, AWSError>;
  /**
   * Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration.  Note that Amazon Kinesis Analytics updates the CurrentApplicationVersionId each time you update your application.  This operation requires permission for the kinesisanalytics:UpdateApplication action.
   */
  updateApplication(params: KinesisAnalytics.Types.UpdateApplicationRequest, callback?: (err: AWSError, data: KinesisAnalytics.Types.UpdateApplicationResponse) => void): Request<KinesisAnalytics.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration.  Note that Amazon Kinesis Analytics updates the CurrentApplicationVersionId each time you update your application.  This operation requires permission for the kinesisanalytics:UpdateApplication action.
   */
  updateApplication(callback?: (err: AWSError, data: KinesisAnalytics.Types.UpdateApplicationResponse) => void): Request<KinesisAnalytics.Types.UpdateApplicationResponse, AWSError>;
}
declare namespace KinesisAnalytics {
  export interface AddApplicationCloudWatchLoggingOptionRequest {
    /**
     * The Kinesis Analytics application name.
     */
    ApplicationName: ApplicationName;
    /**
     * The version ID of the Kinesis Analytics application.
     */
    CurrentApplicationVersionId: ApplicationVersionId;
    /**
     * Provides the CloudWatch log stream Amazon Resource Name (ARN) and the IAM role ARN. Note: To write application messages to CloudWatch, the IAM role that is used must have the PutLogEvents policy action enabled.
     */
    CloudWatchLoggingOption: CloudWatchLoggingOption;
  }
  export interface AddApplicationCloudWatchLoggingOptionResponse {
  }
  export interface AddApplicationInputProcessingConfigurationRequest {
    /**
     * Name of the application to which you want to add the input processing configuration.
     */
    ApplicationName: ApplicationName;
    /**
     * Version of the application to which you want to add the input processing configuration. You can use the DescribeApplication operation to get the current application version. If the version specified is not the current version, the ConcurrentModificationException is returned.
     */
    CurrentApplicationVersionId: ApplicationVersionId;
    /**
     * The ID of the input configuration to which to add the input configuration. You can get a list of the input IDs for an application using the DescribeApplication operation.
     */
    InputId: Id;
    /**
     * The InputProcessingConfiguration to add to the application.
     */
    InputProcessingConfiguration: InputProcessingConfiguration;
  }
  export interface AddApplicationInputProcessingConfigurationResponse {
  }
  export interface AddApplicationInputRequest {
    /**
     * Name of your existing Amazon Kinesis Analytics application to which you want to add the streaming source.
     */
    ApplicationName: ApplicationName;
    /**
     * Current version of your Amazon Kinesis Analytics application. You can use the DescribeApplication operation to find the current application version.
     */
    CurrentApplicationVersionId: ApplicationVersionId;
    /**
     * The Input to add.
     */
    Input: Input;
  }
  export interface AddApplicationInputResponse {
  }
  export interface AddApplicationOutputRequest {
    /**
     * Name of the application to which you want to add the output configuration.
     */
    ApplicationName: ApplicationName;
    /**
     * Version of the application to which you want add the output configuration. You can use the DescribeApplication operation to get the current application version. If the version specified is not the current version, the ConcurrentModificationException is returned. 
     */
    CurrentApplicationVersionId: ApplicationVersionId;
    /**
     * An array of objects, each describing one output configuration. In the output configuration, you specify the name of an in-application stream, a destination (that is, an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream), and record the formation to use when writing to the destination.
     */
    Output: Output;
  }
  export interface AddApplicationOutputResponse {
  }
  export interface AddApplicationReferenceDataSourceRequest {
    /**
     * Name of an existing application.
     */
    ApplicationName: ApplicationName;
    /**
     * Version of the application for which you are adding the reference data source. You can use the DescribeApplication operation to get the current application version. If the version specified is not the current version, the ConcurrentModificationException is returned.
     */
    CurrentApplicationVersionId: ApplicationVersionId;
    /**
     * The reference data source can be an object in your Amazon S3 bucket. Amazon Kinesis Analytics reads the object and copies the data into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting in-application table that is created. You must also provide an IAM role with the necessary permissions that Amazon Kinesis Analytics can assume to read the object from your S3 bucket on your behalf.
     */
    ReferenceDataSource: ReferenceDataSource;
  }
  export interface AddApplicationReferenceDataSourceResponse {
  }
  export type ApplicationCode = string;
  export type ApplicationDescription = string;
  export interface ApplicationDetail {
    /**
     * Name of the application.
     */
    ApplicationName: ApplicationName;
    /**
     * Description of the application.
     */
    ApplicationDescription?: ApplicationDescription;
    /**
     * ARN of the application.
     */
    ApplicationARN: ResourceARN;
    /**
     * Status of the application.
     */
    ApplicationStatus: ApplicationStatus;
    /**
     * Timestamp when the application version was created.
     */
    CreateTimestamp?: Timestamp;
    /**
     * Timestamp when the application was last updated.
     */
    LastUpdateTimestamp?: Timestamp;
    /**
     * Describes the application input configuration. For more information, see Configuring Application Input. 
     */
    InputDescriptions?: InputDescriptions;
    /**
     * Describes the application output configuration. For more information, see Configuring Application Output. 
     */
    OutputDescriptions?: OutputDescriptions;
    /**
     * Describes reference data sources configured for the application. For more information, see Configuring Application Input. 
     */
    ReferenceDataSourceDescriptions?: ReferenceDataSourceDescriptions;
    /**
     * Describes the CloudWatch log streams that are configured to receive application messages. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see Working with Amazon CloudWatch Logs. 
     */
    CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescriptions;
    /**
     * Returns the application code that you provided to perform data analysis on any of the in-application streams in your application.
     */
    ApplicationCode?: ApplicationCode;
    /**
     * Provides the current application version.
     */
    ApplicationVersionId: ApplicationVersionId;
  }
  export type ApplicationName = string;
  export type ApplicationStatus = "DELETING"|"STARTING"|"STOPPING"|"READY"|"RUNNING"|"UPDATING"|string;
  export type ApplicationSummaries = ApplicationSummary[];
  export interface ApplicationSummary {
    /**
     * Name of the application.
     */
    ApplicationName: ApplicationName;
    /**
     * ARN of the application.
     */
    ApplicationARN: ResourceARN;
    /**
     * Status of the application.
     */
    ApplicationStatus: ApplicationStatus;
  }
  export interface ApplicationUpdate {
    /**
     * Describes application input configuration updates.
     */
    InputUpdates?: InputUpdates;
    /**
     * Describes application code updates.
     */
    ApplicationCodeUpdate?: ApplicationCode;
    /**
     * Describes application output configuration updates.
     */
    OutputUpdates?: OutputUpdates;
    /**
     * Describes application reference data source updates.
     */
    ReferenceDataSourceUpdates?: ReferenceDataSourceUpdates;
    /**
     * Describes application CloudWatch logging option updates.
     */
    CloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdates;
  }
  export type ApplicationVersionId = number;
  export type BooleanObject = boolean;
  export type BucketARN = string;
  export interface CSVMappingParameters {
    /**
     * Row delimiter. For example, in a CSV format, '\n' is the typical row delimiter.
     */
    RecordRowDelimiter: RecordRowDelimiter;
    /**
     * Column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.
     */
    RecordColumnDelimiter: RecordColumnDelimiter;
  }
  export interface CloudWatchLoggingOption {
    /**
     * ARN of the CloudWatch log to receive application messages.
     */
    LogStreamARN: LogStreamARN;
    /**
     * IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role that is used must have the PutLogEvents policy action enabled.
     */
    RoleARN: RoleARN;
  }
  export interface CloudWatchLoggingOptionDescription {
    /**
     * ID of the CloudWatch logging option description.
     */
    CloudWatchLoggingOptionId?: Id;
    /**
     * ARN of the CloudWatch log to receive application messages.
     */
    LogStreamARN: LogStreamARN;
    /**
     * IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the PutLogEvents policy action enabled.
     */
    RoleARN: RoleARN;
  }
  export type CloudWatchLoggingOptionDescriptions = CloudWatchLoggingOptionDescription[];
  export interface CloudWatchLoggingOptionUpdate {
    /**
     * ID of the CloudWatch logging option to update
     */
    CloudWatchLoggingOptionId: Id;
    /**
     * ARN of the CloudWatch log to receive application messages.
     */
    LogStreamARNUpdate?: LogStreamARN;
    /**
     * IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the PutLogEvents policy action enabled.
     */
    RoleARNUpdate?: RoleARN;
  }
  export type CloudWatchLoggingOptionUpdates = CloudWatchLoggingOptionUpdate[];
  export type CloudWatchLoggingOptions = CloudWatchLoggingOption[];
  export interface CreateApplicationRequest {
    /**
     * Name of your Amazon Kinesis Analytics application (for example, sample-app).
     */
    ApplicationName: ApplicationName;
    /**
     * Summary description of the application.
     */
    ApplicationDescription?: ApplicationDescription;
    /**
     * Use this parameter to configure the application input. You can configure your application to receive input from a single streaming source. In this configuration, you map this streaming source to an in-application stream that is created. Your application code can then query the in-application stream like a table (you can think of it as a constantly updating table). For the streaming source, you provide its Amazon Resource Name (ARN) and format of data on the stream (for example, JSON, CSV, etc). You also must provide an IAM role that Amazon Kinesis Analytics can assume to read this stream on your behalf. To create the in-application stream, you need to specify a schema to transform your data into a schematized version used in SQL. In the schema, you provide the necessary mapping of the data elements in the streaming source to record columns in the in-app stream.
     */
    Inputs?: Inputs;
    /**
     * You can configure application output to write data from any of the in-application streams to up to five destinations. These destinations can be Amazon Kinesis streams, Amazon Kinesis Firehose delivery streams, or both. In the configuration, you specify the in-application stream name, the destination stream Amazon Resource Name (ARN), and the format to use when writing data. You must also provide an IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. In the output configuration, you also provide the output stream Amazon Resource Name (ARN) and the format of data in the stream (for example, JSON, CSV). You also must provide an IAM role that Amazon Kinesis Analytics can assume to write to this stream on your behalf.
     */
    Outputs?: Outputs;
    /**
     * Use this parameter to configure a CloudWatch log stream to monitor application configuration errors. For more information, see Working with Amazon CloudWatch Logs.
     */
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    /**
     * One or more SQL statements that read input data, transform it, and generate output. For example, you can write a SQL statement that reads data from one in-application stream, generates a running average of the number of advertisement clicks by vendor, and insert resulting rows in another in-application stream using pumps. For more inforamtion about the typical pattern, see Application Code.  You can provide such series of SQL statements, where output of one statement can be used as the input for the next statement. You store intermediate results by creating in-application streams and pumps. Note that the application code must create the streams with names specified in the Outputs. For example, if your Outputs defines output streams named ExampleOutputStream1 and ExampleOutputStream2, then your application code must create these streams. 
     */
    ApplicationCode?: ApplicationCode;
  }
  export interface CreateApplicationResponse {
    /**
     * In response to your CreateApplication request, Amazon Kinesis Analytics returns a response with a summary of the application it created, including the application Amazon Resource Name (ARN), name, and status.
     */
    ApplicationSummary: ApplicationSummary;
  }
  export interface DeleteApplicationCloudWatchLoggingOptionRequest {
    /**
     * The Kinesis Analytics application name.
     */
    ApplicationName: ApplicationName;
    /**
     * The version ID of the Kinesis Analytics application.
     */
    CurrentApplicationVersionId: ApplicationVersionId;
    /**
     * The CloudWatchLoggingOptionId of the CloudWatch logging option to delete. You can use the DescribeApplication operation to get the CloudWatchLoggingOptionId. 
     */
    CloudWatchLoggingOptionId: Id;
  }
  export interface DeleteApplicationCloudWatchLoggingOptionResponse {
  }
  export interface DeleteApplicationInputProcessingConfigurationRequest {
    /**
     * The Kinesis Analytics application name.
     */
    ApplicationName: ApplicationName;
    /**
     * The version ID of the Kinesis Analytics application.
     */
    CurrentApplicationVersionId: ApplicationVersionId;
    /**
     * The ID of the input configuration from which to delete the input configuration. You can get a list of the input IDs for an application using the DescribeApplication operation.
     */
    InputId: Id;
  }
  export interface DeleteApplicationInputProcessingConfigurationResponse {
  }
  export interface DeleteApplicationOutputRequest {
    /**
     * Amazon Kinesis Analytics application name.
     */
    ApplicationName: ApplicationName;
    /**
     * Amazon Kinesis Analytics application version. You can use the DescribeApplication operation to get the current application version. If the version specified is not the current version, the ConcurrentModificationException is returned. 
     */
    CurrentApplicationVersionId: ApplicationVersionId;
    /**
     * The ID of the configuration to delete. Each output configuration that is added to the application, either when the application is created or later using the AddApplicationOutput operation, has a unique ID. You need to provide the ID to uniquely identify the output configuration that you want to delete from the application configuration. You can use the DescribeApplication operation to get the specific OutputId. 
     */
    OutputId: Id;
  }
  export interface DeleteApplicationOutputResponse {
  }
  export interface DeleteApplicationReferenceDataSourceRequest {
    /**
     * Name of an existing application.
     */
    ApplicationName: ApplicationName;
    /**
     * Version of the application. You can use the DescribeApplication operation to get the current application version. If the version specified is not the current version, the ConcurrentModificationException is returned.
     */
    CurrentApplicationVersionId: ApplicationVersionId;
    /**
     * ID of the reference data source. When you add a reference data source to your application using the AddApplicationReferenceDataSource, Amazon Kinesis Analytics assigns an ID. You can use the DescribeApplication operation to get the reference ID. 
     */
    ReferenceId: Id;
  }
  export interface DeleteApplicationReferenceDataSourceResponse {
  }
  export interface DeleteApplicationRequest {
    /**
     * Name of the Amazon Kinesis Analytics application to delete.
     */
    ApplicationName: ApplicationName;
    /**
     *  You can use the DescribeApplication operation to get this value. 
     */
    CreateTimestamp: Timestamp;
  }
  export interface DeleteApplicationResponse {
  }
  export interface DescribeApplicationRequest {
    /**
     * Name of the application.
     */
    ApplicationName: ApplicationName;
  }
  export interface DescribeApplicationResponse {
    /**
     * Provides a description of the application, such as the application Amazon Resource Name (ARN), status, latest version, and input and output configuration details.
     */
    ApplicationDetail: ApplicationDetail;
  }
  export interface DestinationSchema {
    /**
     * Specifies the format of the records on the output stream.
     */
    RecordFormatType?: RecordFormatType;
  }
  export interface DiscoverInputSchemaRequest {
    /**
     * Amazon Resource Name (ARN) of the streaming source.
     */
    ResourceARN?: ResourceARN;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf.
     */
    RoleARN?: RoleARN;
    /**
     * Point at which you want Amazon Kinesis Analytics to start reading records from the specified streaming source discovery purposes.
     */
    InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
    S3Configuration?: S3Configuration;
    /**
     * The InputProcessingConfiguration to use to preprocess the records before discovering the schema of the records.
     */
    InputProcessingConfiguration?: InputProcessingConfiguration;
  }
  export interface DiscoverInputSchemaResponse {
    /**
     * Schema inferred from the streaming source. It identifies the format of the data in the streaming source and how each data element maps to corresponding columns in the in-application stream that you can create.
     */
    InputSchema?: SourceSchema;
    /**
     * An array of elements, where each element corresponds to a row in a stream record (a stream record can have more than one row).
     */
    ParsedInputRecords?: ParsedInputRecords;
    /**
     * Stream data that was modified by the processor specified in the InputProcessingConfiguration parameter.
     */
    ProcessedInputRecords?: ProcessedInputRecords;
    /**
     * Raw stream data that was sampled to infer the schema.
     */
    RawInputRecords?: RawInputRecords;
  }
  export type ErrorMessage = string;
  export type FileKey = string;
  export type Id = string;
  export type InAppStreamName = string;
  export type InAppStreamNames = InAppStreamName[];
  export type InAppTableName = string;
  export interface Input {
    /**
     * Name prefix to use when creating in-application stream. Suppose you specify a prefix "MyInApplicationStream". Amazon Kinesis Analytics will then create one or more (as per the InputParallelism count you specified) in-application streams with names "MyInApplicationStream_001", "MyInApplicationStream_002" and so on. 
     */
    NamePrefix: InAppStreamName;
    /**
     * The InputProcessingConfiguration for the Input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is InputLambdaProcessor.
     */
    InputProcessingConfiguration?: InputProcessingConfiguration;
    /**
     * If the streaming source is an Amazon Kinesis stream, identifies the stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf. Note: Either KinesisStreamsInput or KinesisFirehoseInput is required.
     */
    KinesisStreamsInput?: KinesisStreamsInput;
    /**
     * If the streaming source is an Amazon Kinesis Firehose delivery stream, identifies the Firehose delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf. Note: Either KinesisStreamsInput or KinesisFirehoseInput is required.
     */
    KinesisFirehoseInput?: KinesisFirehoseInput;
    /**
     * Describes the number of in-application streams to create.  Data from your source will be routed to these in-application input streams.  (see Configuring Application Input.
     */
    InputParallelism?: InputParallelism;
    /**
     * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created. Also used to describe the format of the reference data source.
     */
    InputSchema: SourceSchema;
  }
  export interface InputConfiguration {
    /**
     * Input source ID. You can get this ID by calling the DescribeApplication operation.
     */
    Id: Id;
    /**
     * Point at which you want the application to start processing records from the streaming source.
     */
    InputStartingPositionConfiguration: InputStartingPositionConfiguration;
  }
  export type InputConfigurations = InputConfiguration[];
  export interface InputDescription {
    /**
     * Input ID associated with the application input. This is the ID that Amazon Kinesis Analytics assigns to each input configuration you add to your application. 
     */
    InputId?: Id;
    /**
     * In-application name prefix.
     */
    NamePrefix?: InAppStreamName;
    /**
     * Returns the in-application stream names that are mapped to the stream source.
     */
    InAppStreamNames?: InAppStreamNames;
    /**
     * The description of the preprocessor that executes on records in this input before the application's code is run.
     */
    InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
    /**
     * If an Amazon Kinesis stream is configured as streaming source, provides Amazon Kinesis stream's ARN and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.
     */
    KinesisStreamsInputDescription?: KinesisStreamsInputDescription;
    /**
     * If an Amazon Kinesis Firehose delivery stream is configured as a streaming source, provides the Firehose delivery stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.
     */
    KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;
    /**
     * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created. 
     */
    InputSchema?: SourceSchema;
    /**
     * Describes the configured parallelism (number of in-application streams mapped to the streaming source).
     */
    InputParallelism?: InputParallelism;
    /**
     * Point at which the application is configured to read from the input stream.
     */
    InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
  }
  export type InputDescriptions = InputDescription[];
  export interface InputLambdaProcessor {
    /**
     * The ARN of the AWS Lambda function that operates on records in the stream.
     */
    ResourceARN: ResourceARN;
    /**
     * The ARN of the IAM role used to access the AWS Lambda function.
     */
    RoleARN: RoleARN;
  }
  export interface InputLambdaProcessorDescription {
    /**
     * The ARN of the AWS Lambda function that is used to preprocess the records in the stream.
     */
    ResourceARN?: ResourceARN;
    /**
     * The ARN of the IAM role used to access the AWS Lambda function.
     */
    RoleARN?: RoleARN;
  }
  export interface InputLambdaProcessorUpdate {
    /**
     * The ARN of the new AWS Lambda function that is used to preprocess the records in the stream.
     */
    ResourceARNUpdate?: ResourceARN;
    /**
     * The ARN of the new IAM role used to access the AWS Lambda function.
     */
    RoleARNUpdate?: RoleARN;
  }
  export interface InputParallelism {
    /**
     * Number of in-application streams to create. For more information, see Limits. 
     */
    Count?: InputParallelismCount;
  }
  export type InputParallelismCount = number;
  export interface InputParallelismUpdate {
    /**
     * Number of in-application streams to create for the specified streaming source.
     */
    CountUpdate?: InputParallelismCount;
  }
  export interface InputProcessingConfiguration {
    /**
     * The InputLambdaProcessor that is used to preprocess the records in the stream prior to being processed by your application code.
     */
    InputLambdaProcessor: InputLambdaProcessor;
  }
  export interface InputProcessingConfigurationDescription {
    /**
     * Provides configuration information about the associated InputLambdaProcessorDescription.
     */
    InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
  }
  export interface InputProcessingConfigurationUpdate {
    /**
     * Provides update information for an InputLambdaProcessor.
     */
    InputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
  }
  export interface InputSchemaUpdate {
    /**
     * Specifies the format of the records on the streaming source.
     */
    RecordFormatUpdate?: RecordFormat;
    /**
     * Specifies the encoding of the records in the streaming source. For example, UTF-8.
     */
    RecordEncodingUpdate?: RecordEncoding;
    /**
     * A list of RecordColumn objects. Each object describes the mapping of the streaming source element to the corresponding column in the in-application stream. 
     */
    RecordColumnUpdates?: RecordColumns;
  }
  export type InputStartingPosition = "NOW"|"TRIM_HORIZON"|"LAST_STOPPED_POINT"|string;
  export interface InputStartingPositionConfiguration {
    /**
     * The starting position on the stream.    NOW - Start reading just after the most recent record in the stream, start at the request timestamp that the customer issued.    TRIM_HORIZON - Start reading at the last untrimmed record in the stream, which is the oldest record available in the stream. This option is not available for an Amazon Kinesis Firehose delivery stream.    LAST_STOPPED_POINT - Resume reading from where the application last stopped reading.  
     */
    InputStartingPosition?: InputStartingPosition;
  }
  export interface InputUpdate {
    /**
     * Input ID of the application input to be updated.
     */
    InputId: Id;
    /**
     * Name prefix for in-application streams that Amazon Kinesis Analytics creates for the specific streaming source.
     */
    NamePrefixUpdate?: InAppStreamName;
    /**
     * Describes updates for an input processing configuration.
     */
    InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;
    /**
     * If a Amazon Kinesis stream is the streaming source to be updated, provides an updated stream ARN and IAM role ARN.
     */
    KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;
    /**
     * If an Amazon Kinesis Firehose delivery stream is the streaming source to be updated, provides an updated stream Amazon Resource Name (ARN) and IAM role ARN.
     */
    KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;
    /**
     * Describes the data format on the streaming source, and how record elements on the streaming source map to columns of the in-application stream that is created.
     */
    InputSchemaUpdate?: InputSchemaUpdate;
    /**
     * Describes the parallelism updates (the number in-application streams Amazon Kinesis Analytics creates for the specific streaming source).
     */
    InputParallelismUpdate?: InputParallelismUpdate;
  }
  export type InputUpdates = InputUpdate[];
  export type Inputs = Input[];
  export interface JSONMappingParameters {
    /**
     * Path to the top-level parent that contains the records.
     */
    RecordRowPath: RecordRowPath;
  }
  export interface KinesisFirehoseInput {
    /**
     * ARN of the input Firehose delivery stream.
     */
    ResourceARN: ResourceARN;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to make sure the role has necessary permissions to access the stream.
     */
    RoleARN: RoleARN;
  }
  export interface KinesisFirehoseInputDescription {
    /**
     * Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream.
     */
    ResourceARN?: ResourceARN;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics assumes to access the stream.
     */
    RoleARN?: RoleARN;
  }
  export interface KinesisFirehoseInputUpdate {
    /**
     * ARN of the input Amazon Kinesis Firehose delivery stream to read.
     */
    ResourceARNUpdate?: ResourceARN;
    /**
     * Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant necessary permissions to this role.
     */
    RoleARNUpdate?: RoleARN;
  }
  export interface KinesisFirehoseOutput {
    /**
     * ARN of the destination Amazon Kinesis Firehose delivery stream to write to.
     */
    ResourceARN: ResourceARN;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.
     */
    RoleARN: RoleARN;
  }
  export interface KinesisFirehoseOutputDescription {
    /**
     * Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream.
     */
    ResourceARN?: ResourceARN;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.
     */
    RoleARN?: RoleARN;
  }
  export interface KinesisFirehoseOutputUpdate {
    /**
     * Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream to write to.
     */
    ResourceARNUpdate?: ResourceARN;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant necessary permissions to this role.
     */
    RoleARNUpdate?: RoleARN;
  }
  export interface KinesisStreamsInput {
    /**
     * ARN of the input Amazon Kinesis stream to read.
     */
    ResourceARN: ResourceARN;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.
     */
    RoleARN: RoleARN;
  }
  export interface KinesisStreamsInputDescription {
    /**
     * Amazon Resource Name (ARN) of the Amazon Kinesis stream.
     */
    ResourceARN?: ResourceARN;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.
     */
    RoleARN?: RoleARN;
  }
  export interface KinesisStreamsInputUpdate {
    /**
     * Amazon Resource Name (ARN) of the input Amazon Kinesis stream to read.
     */
    ResourceARNUpdate?: ResourceARN;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.
     */
    RoleARNUpdate?: RoleARN;
  }
  export interface KinesisStreamsOutput {
    /**
     * ARN of the destination Amazon Kinesis stream to write to.
     */
    ResourceARN: ResourceARN;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.
     */
    RoleARN: RoleARN;
  }
  export interface KinesisStreamsOutputDescription {
    /**
     * Amazon Resource Name (ARN) of the Amazon Kinesis stream.
     */
    ResourceARN?: ResourceARN;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.
     */
    RoleARN?: RoleARN;
  }
  export interface KinesisStreamsOutputUpdate {
    /**
     * Amazon Resource Name (ARN) of the Amazon Kinesis stream where you want to write the output.
     */
    ResourceARNUpdate?: ResourceARN;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.
     */
    RoleARNUpdate?: RoleARN;
  }
  export type ListApplicationsInputLimit = number;
  export interface ListApplicationsRequest {
    /**
     * Maximum number of applications to list.
     */
    Limit?: ListApplicationsInputLimit;
    /**
     * Name of the application to start the list with. When using pagination to retrieve the list, you don't need to specify this parameter in the first request. However, in subsequent requests, you add the last application name from the previous response to get the next page of applications.
     */
    ExclusiveStartApplicationName?: ApplicationName;
  }
  export interface ListApplicationsResponse {
    /**
     * List of ApplicationSummary objects. 
     */
    ApplicationSummaries: ApplicationSummaries;
    /**
     * Returns true if there are more applications to retrieve.
     */
    HasMoreApplications: BooleanObject;
  }
  export type LogStreamARN = string;
  export interface MappingParameters {
    /**
     * Provides additional mapping information when JSON is the record format on the streaming source.
     */
    JSONMappingParameters?: JSONMappingParameters;
    /**
     * Provides additional mapping information when the record format uses delimiters (for example, CSV).
     */
    CSVMappingParameters?: CSVMappingParameters;
  }
  export interface Output {
    /**
     * Name of the in-application stream.
     */
    Name: InAppStreamName;
    /**
     * Identifies an Amazon Kinesis stream as the destination.
     */
    KinesisStreamsOutput?: KinesisStreamsOutput;
    /**
     * Identifies an Amazon Kinesis Firehose delivery stream as the destination.
     */
    KinesisFirehoseOutput?: KinesisFirehoseOutput;
    DestinationSchema: DestinationSchema;
  }
  export interface OutputDescription {
    /**
     * A unique identifier for the output configuration.
     */
    OutputId?: Id;
    /**
     * Name of the in-application stream configured as output.
     */
    Name?: InAppStreamName;
    /**
     * Describes Amazon Kinesis stream configured as the destination where output is written.
     */
    KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;
    /**
     * Describes the Amazon Kinesis Firehose delivery stream configured as the destination where output is written.
     */
    KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;
    /**
     * Data format used for writing data to the destination.
     */
    DestinationSchema?: DestinationSchema;
  }
  export type OutputDescriptions = OutputDescription[];
  export interface OutputUpdate {
    /**
     * Identifies the specific output configuration that you want to update.
     */
    OutputId: Id;
    /**
     * If you want to specify a different in-application stream for this output configuration, use this field to specify the new in-application stream name.
     */
    NameUpdate?: InAppStreamName;
    /**
     * Describes an Amazon Kinesis stream as the destination for the output.
     */
    KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;
    /**
     * Describes a Amazon Kinesis Firehose delivery stream as the destination for the output.
     */
    KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;
    DestinationSchemaUpdate?: DestinationSchema;
  }
  export type OutputUpdates = OutputUpdate[];
  export type Outputs = Output[];
  export type ParsedInputRecord = ParsedInputRecordField[];
  export type ParsedInputRecordField = string;
  export type ParsedInputRecords = ParsedInputRecord[];
  export type ProcessedInputRecord = string;
  export type ProcessedInputRecords = ProcessedInputRecord[];
  export type RawInputRecord = string;
  export type RawInputRecords = RawInputRecord[];
  export interface RecordColumn {
    /**
     * Name of the column created in the in-application input stream or reference table.
     */
    Name: RecordColumnName;
    /**
     * Reference to the data element in the streaming input of the reference data source.
     */
    Mapping?: RecordColumnMapping;
    /**
     * Type of column created in the in-application input stream or reference table.
     */
    SqlType: RecordColumnSqlType;
  }
  export type RecordColumnDelimiter = string;
  export type RecordColumnMapping = string;
  export type RecordColumnName = string;
  export type RecordColumnSqlType = string;
  export type RecordColumns = RecordColumn[];
  export type RecordEncoding = string;
  export interface RecordFormat {
    /**
     * The type of record format.
     */
    RecordFormatType: RecordFormatType;
    MappingParameters?: MappingParameters;
  }
  export type RecordFormatType = "JSON"|"CSV"|string;
  export type RecordRowDelimiter = string;
  export type RecordRowPath = string;
  export interface ReferenceDataSource {
    /**
     * Name of the in-application table to create.
     */
    TableName: InAppTableName;
    S3ReferenceDataSource?: S3ReferenceDataSource;
    ReferenceSchema: SourceSchema;
  }
  export interface ReferenceDataSourceDescription {
    /**
     * ID of the reference data source. This is the ID that Amazon Kinesis Analytics assigns when you add the reference data source to your application using the AddApplicationReferenceDataSource operation.
     */
    ReferenceId: Id;
    /**
     * The in-application table name created by the specific reference data source configuration.
     */
    TableName: InAppTableName;
    /**
     * Provides the S3 bucket name, the object key name that contains the reference data. It also provides the Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application reference table.
     */
    S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;
    ReferenceSchema?: SourceSchema;
  }
  export type ReferenceDataSourceDescriptions = ReferenceDataSourceDescription[];
  export interface ReferenceDataSourceUpdate {
    /**
     * ID of the reference data source being updated. You can use the DescribeApplication operation to get this value.
     */
    ReferenceId: Id;
    /**
     * In-application table name that is created by this update.
     */
    TableNameUpdate?: InAppTableName;
    /**
     * Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.
     */
    S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;
    ReferenceSchemaUpdate?: SourceSchema;
  }
  export type ReferenceDataSourceUpdates = ReferenceDataSourceUpdate[];
  export type ResourceARN = string;
  export type RoleARN = string;
  export interface S3Configuration {
    RoleARN: RoleARN;
    BucketARN: BucketARN;
    FileKey: FileKey;
  }
  export interface S3ReferenceDataSource {
    /**
     * Amazon Resource Name (ARN) of the S3 bucket.
     */
    BucketARN: BucketARN;
    /**
     * Object key name containing reference data.
     */
    FileKey: FileKey;
    /**
     * ARN of the IAM role that the service can assume to read data on your behalf. This role must have permission for the s3:GetObject action on the object and trust policy that allows Amazon Kinesis Analytics service principal to assume this role.
     */
    ReferenceRoleARN: RoleARN;
  }
  export interface S3ReferenceDataSourceDescription {
    /**
     * Amazon Resource Name (ARN) of the S3 bucket.
     */
    BucketARN: BucketARN;
    /**
     * Amazon S3 object key name.
     */
    FileKey: FileKey;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf to populate the in-application reference table.
     */
    ReferenceRoleARN: RoleARN;
  }
  export interface S3ReferenceDataSourceUpdate {
    /**
     * Amazon Resource Name (ARN) of the S3 bucket.
     */
    BucketARNUpdate?: BucketARN;
    /**
     * Object key name.
     */
    FileKeyUpdate?: FileKey;
    /**
     * ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application.
     */
    ReferenceRoleARNUpdate?: RoleARN;
  }
  export interface SourceSchema {
    /**
     * Specifies the format of the records on the streaming source.
     */
    RecordFormat: RecordFormat;
    /**
     * Specifies the encoding of the records in the streaming source. For example, UTF-8.
     */
    RecordEncoding?: RecordEncoding;
    /**
     * A list of RecordColumn objects.
     */
    RecordColumns: RecordColumns;
  }
  export interface StartApplicationRequest {
    /**
     * Name of the application.
     */
    ApplicationName: ApplicationName;
    /**
     * Identifies the specific input, by ID, that the application starts consuming. Amazon Kinesis Analytics starts reading the streaming source associated with the input. You can also specify where in the streaming source you want Amazon Kinesis Analytics to start reading.
     */
    InputConfigurations: InputConfigurations;
  }
  export interface StartApplicationResponse {
  }
  export interface StopApplicationRequest {
    /**
     * Name of the running application to stop.
     */
    ApplicationName: ApplicationName;
  }
  export interface StopApplicationResponse {
  }
  export type Timestamp = Date;
  export interface UpdateApplicationRequest {
    /**
     * Name of the Amazon Kinesis Analytics application to update.
     */
    ApplicationName: ApplicationName;
    /**
     * The current application version ID. You can use the DescribeApplication operation to get this value.
     */
    CurrentApplicationVersionId: ApplicationVersionId;
    /**
     * Describes application updates.
     */
    ApplicationUpdate: ApplicationUpdate;
  }
  export interface UpdateApplicationResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-08-14"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the KinesisAnalytics client.
   */
  export import Types = KinesisAnalytics;
}
export = KinesisAnalytics;
