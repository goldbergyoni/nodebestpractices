import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Athena extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Athena.Types.ClientConfiguration)
  config: Config & Athena.Types.ClientConfiguration;
  /**
   * Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Use ListNamedQueries to get the list of named query IDs. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under UnprocessedNamedQueryId. Named queries are different from executed queries. Use BatchGetQueryExecution to get details about each unique query execution, and ListQueryExecutions to get a list of query execution IDs.
   */
  batchGetNamedQuery(params: Athena.Types.BatchGetNamedQueryInput, callback?: (err: AWSError, data: Athena.Types.BatchGetNamedQueryOutput) => void): Request<Athena.Types.BatchGetNamedQueryOutput, AWSError>;
  /**
   * Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Use ListNamedQueries to get the list of named query IDs. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under UnprocessedNamedQueryId. Named queries are different from executed queries. Use BatchGetQueryExecution to get details about each unique query execution, and ListQueryExecutions to get a list of query execution IDs.
   */
  batchGetNamedQuery(callback?: (err: AWSError, data: Athena.Types.BatchGetNamedQueryOutput) => void): Request<Athena.Types.BatchGetNamedQueryOutput, AWSError>;
  /**
   * Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. To get a list of query execution IDs, use ListQueryExecutions. Query executions are different from named (saved) queries. Use BatchGetNamedQuery to get details about named queries.
   */
  batchGetQueryExecution(params: Athena.Types.BatchGetQueryExecutionInput, callback?: (err: AWSError, data: Athena.Types.BatchGetQueryExecutionOutput) => void): Request<Athena.Types.BatchGetQueryExecutionOutput, AWSError>;
  /**
   * Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. To get a list of query execution IDs, use ListQueryExecutions. Query executions are different from named (saved) queries. Use BatchGetNamedQuery to get details about named queries.
   */
  batchGetQueryExecution(callback?: (err: AWSError, data: Athena.Types.BatchGetQueryExecutionOutput) => void): Request<Athena.Types.BatchGetQueryExecutionOutput, AWSError>;
  /**
   * Creates a named query. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  createNamedQuery(params: Athena.Types.CreateNamedQueryInput, callback?: (err: AWSError, data: Athena.Types.CreateNamedQueryOutput) => void): Request<Athena.Types.CreateNamedQueryOutput, AWSError>;
  /**
   * Creates a named query. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  createNamedQuery(callback?: (err: AWSError, data: Athena.Types.CreateNamedQueryOutput) => void): Request<Athena.Types.CreateNamedQueryOutput, AWSError>;
  /**
   * Deletes a named query. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  deleteNamedQuery(params: Athena.Types.DeleteNamedQueryInput, callback?: (err: AWSError, data: Athena.Types.DeleteNamedQueryOutput) => void): Request<Athena.Types.DeleteNamedQueryOutput, AWSError>;
  /**
   * Deletes a named query. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  deleteNamedQuery(callback?: (err: AWSError, data: Athena.Types.DeleteNamedQueryOutput) => void): Request<Athena.Types.DeleteNamedQueryOutput, AWSError>;
  /**
   * Returns information about a single query.
   */
  getNamedQuery(params: Athena.Types.GetNamedQueryInput, callback?: (err: AWSError, data: Athena.Types.GetNamedQueryOutput) => void): Request<Athena.Types.GetNamedQueryOutput, AWSError>;
  /**
   * Returns information about a single query.
   */
  getNamedQuery(callback?: (err: AWSError, data: Athena.Types.GetNamedQueryOutput) => void): Request<Athena.Types.GetNamedQueryOutput, AWSError>;
  /**
   * Returns information about a single execution of a query. Each time a query executes, information about the query execution is saved with a unique ID.
   */
  getQueryExecution(params: Athena.Types.GetQueryExecutionInput, callback?: (err: AWSError, data: Athena.Types.GetQueryExecutionOutput) => void): Request<Athena.Types.GetQueryExecutionOutput, AWSError>;
  /**
   * Returns information about a single execution of a query. Each time a query executes, information about the query execution is saved with a unique ID.
   */
  getQueryExecution(callback?: (err: AWSError, data: Athena.Types.GetQueryExecutionOutput) => void): Request<Athena.Types.GetQueryExecutionOutput, AWSError>;
  /**
   * Returns the results of a single query execution specified by QueryExecutionId. This request does not execute the query but returns results. Use StartQueryExecution to run a query.
   */
  getQueryResults(params: Athena.Types.GetQueryResultsInput, callback?: (err: AWSError, data: Athena.Types.GetQueryResultsOutput) => void): Request<Athena.Types.GetQueryResultsOutput, AWSError>;
  /**
   * Returns the results of a single query execution specified by QueryExecutionId. This request does not execute the query but returns results. Use StartQueryExecution to run a query.
   */
  getQueryResults(callback?: (err: AWSError, data: Athena.Types.GetQueryResultsOutput) => void): Request<Athena.Types.GetQueryResultsOutput, AWSError>;
  /**
   * Provides a list of all available query IDs. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  listNamedQueries(params: Athena.Types.ListNamedQueriesInput, callback?: (err: AWSError, data: Athena.Types.ListNamedQueriesOutput) => void): Request<Athena.Types.ListNamedQueriesOutput, AWSError>;
  /**
   * Provides a list of all available query IDs. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  listNamedQueries(callback?: (err: AWSError, data: Athena.Types.ListNamedQueriesOutput) => void): Request<Athena.Types.ListNamedQueriesOutput, AWSError>;
  /**
   * Provides a list of all available query execution IDs. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  listQueryExecutions(params: Athena.Types.ListQueryExecutionsInput, callback?: (err: AWSError, data: Athena.Types.ListQueryExecutionsOutput) => void): Request<Athena.Types.ListQueryExecutionsOutput, AWSError>;
  /**
   * Provides a list of all available query execution IDs. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  listQueryExecutions(callback?: (err: AWSError, data: Athena.Types.ListQueryExecutionsOutput) => void): Request<Athena.Types.ListQueryExecutionsOutput, AWSError>;
  /**
   * Runs (executes) the SQL query statements contained in the Query string. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  startQueryExecution(params: Athena.Types.StartQueryExecutionInput, callback?: (err: AWSError, data: Athena.Types.StartQueryExecutionOutput) => void): Request<Athena.Types.StartQueryExecutionOutput, AWSError>;
  /**
   * Runs (executes) the SQL query statements contained in the Query string. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  startQueryExecution(callback?: (err: AWSError, data: Athena.Types.StartQueryExecutionOutput) => void): Request<Athena.Types.StartQueryExecutionOutput, AWSError>;
  /**
   * Stops a query execution. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  stopQueryExecution(params: Athena.Types.StopQueryExecutionInput, callback?: (err: AWSError, data: Athena.Types.StopQueryExecutionOutput) => void): Request<Athena.Types.StopQueryExecutionOutput, AWSError>;
  /**
   * Stops a query execution. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  stopQueryExecution(callback?: (err: AWSError, data: Athena.Types.StopQueryExecutionOutput) => void): Request<Athena.Types.StopQueryExecutionOutput, AWSError>;
}
declare namespace Athena {
  export interface BatchGetNamedQueryInput {
    /**
     * An array of query IDs.
     */
    NamedQueryIds: NamedQueryIdList;
  }
  export interface BatchGetNamedQueryOutput {
    /**
     * Information about the named query IDs submitted.
     */
    NamedQueries?: NamedQueryList;
    /**
     * Information about provided query IDs.
     */
    UnprocessedNamedQueryIds?: UnprocessedNamedQueryIdList;
  }
  export interface BatchGetQueryExecutionInput {
    /**
     * An array of query execution IDs.
     */
    QueryExecutionIds: QueryExecutionIdList;
  }
  export interface BatchGetQueryExecutionOutput {
    /**
     * Information about a query execution.
     */
    QueryExecutions?: QueryExecutionList;
    /**
     * Information about the query executions that failed to run.
     */
    UnprocessedQueryExecutionIds?: UnprocessedQueryExecutionIdList;
  }
  export type Boolean = boolean;
  export interface ColumnInfo {
    /**
     * The catalog to which the query results belong.
     */
    CatalogName?: String;
    /**
     * The schema name (database name) to which the query results belong.
     */
    SchemaName?: String;
    /**
     * The table name for the query results.
     */
    TableName?: String;
    /**
     * The name of the column.
     */
    Name: String;
    /**
     * A column label.
     */
    Label?: String;
    /**
     * The data type of the column.
     */
    Type: String;
    /**
     * For DECIMAL data types, specifies the total number of digits, up to 38. For performance reasons, we recommend up to 18 digits.
     */
    Precision?: Integer;
    /**
     * For DECIMAL data types, specifies the total number of digits in the fractional part of the value. Defaults to 0.
     */
    Scale?: Integer;
    /**
     * Indicates the column's nullable status.
     */
    Nullable?: ColumnNullable;
    /**
     * Indicates whether values in the column are case-sensitive.
     */
    CaseSensitive?: Boolean;
  }
  export type ColumnInfoList = ColumnInfo[];
  export type ColumnNullable = "NOT_NULL"|"NULLABLE"|"UNKNOWN"|string;
  export interface CreateNamedQueryInput {
    /**
     * The plain language name for the query.
     */
    Name: NameString;
    /**
     * A brief explanation of the query.
     */
    Description?: DescriptionString;
    /**
     * The database to which the query belongs.
     */
    Database: DatabaseString;
    /**
     * The text of the query itself. In other words, all query statements.
     */
    QueryString: QueryString;
    /**
     * A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another CreateNamedQuery request is received, the same response is returned and another query is not created. If a parameter has changed, for example, the QueryString, an error is returned.  This token is listed as not required because AWS SDKs (for example the AWS SDK for Java) auto-generate the token for users. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the action will fail. 
     */
    ClientRequestToken?: IdempotencyToken;
  }
  export interface CreateNamedQueryOutput {
    /**
     * The unique ID of the query.
     */
    NamedQueryId?: NamedQueryId;
  }
  export type DatabaseString = string;
  export type _Date = Date;
  export interface Datum {
    /**
     * The value of the datum.
     */
    VarCharValue?: datumString;
  }
  export interface DeleteNamedQueryInput {
    /**
     * The unique ID of the query to delete.
     */
    NamedQueryId: NamedQueryId;
  }
  export interface DeleteNamedQueryOutput {
  }
  export type DescriptionString = string;
  export interface EncryptionConfiguration {
    /**
     * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.
     */
    EncryptionOption: EncryptionOption;
    /**
     * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.
     */
    KmsKey?: String;
  }
  export type EncryptionOption = "SSE_S3"|"SSE_KMS"|"CSE_KMS"|string;
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export interface GetNamedQueryInput {
    /**
     * The unique ID of the query. Use ListNamedQueries to get query IDs.
     */
    NamedQueryId: NamedQueryId;
  }
  export interface GetNamedQueryOutput {
    /**
     * Information about the query.
     */
    NamedQuery?: NamedQuery;
  }
  export interface GetQueryExecutionInput {
    /**
     * The unique ID of the query execution.
     */
    QueryExecutionId: QueryExecutionId;
  }
  export interface GetQueryExecutionOutput {
    /**
     * Information about the query execution.
     */
    QueryExecution?: QueryExecution;
  }
  export interface GetQueryResultsInput {
    /**
     * The unique ID of the query execution.
     */
    QueryExecutionId: QueryExecutionId;
    /**
     * The token that specifies where to start pagination if a previous request was truncated.
     */
    NextToken?: Token;
    /**
     * The maximum number of results (rows) to return in this request.
     */
    MaxResults?: MaxQueryResults;
  }
  export interface GetQueryResultsOutput {
    /**
     * The results of the query execution.
     */
    ResultSet?: ResultSet;
    /**
     * A token to be used by the next request if this request is truncated.
     */
    NextToken?: Token;
  }
  export type IdempotencyToken = string;
  export type Integer = number;
  export interface ListNamedQueriesInput {
    /**
     * The token that specifies where to start pagination if a previous request was truncated.
     */
    NextToken?: Token;
    /**
     * The maximum number of queries to return in this request.
     */
    MaxResults?: MaxNamedQueriesCount;
  }
  export interface ListNamedQueriesOutput {
    /**
     * The list of unique query IDs.
     */
    NamedQueryIds?: NamedQueryIdList;
    /**
     * A token to be used by the next request if this request is truncated.
     */
    NextToken?: Token;
  }
  export interface ListQueryExecutionsInput {
    /**
     * The token that specifies where to start pagination if a previous request was truncated.
     */
    NextToken?: Token;
    /**
     * The maximum number of query executions to return in this request.
     */
    MaxResults?: MaxQueryExecutionsCount;
  }
  export interface ListQueryExecutionsOutput {
    /**
     * The unique IDs of each query execution as an array of strings.
     */
    QueryExecutionIds?: QueryExecutionIdList;
    /**
     * A token to be used by the next request if this request is truncated.
     */
    NextToken?: Token;
  }
  export type Long = number;
  export type MaxNamedQueriesCount = number;
  export type MaxQueryExecutionsCount = number;
  export type MaxQueryResults = number;
  export type NameString = string;
  export interface NamedQuery {
    /**
     * The plain-language name of the query.
     */
    Name: NameString;
    /**
     * A brief description of the query.
     */
    Description?: DescriptionString;
    /**
     * The database to which the query belongs.
     */
    Database: DatabaseString;
    /**
     * The SQL query statements that comprise the query.
     */
    QueryString: QueryString;
    /**
     * The unique identifier of the query.
     */
    NamedQueryId?: NamedQueryId;
  }
  export type NamedQueryId = string;
  export type NamedQueryIdList = NamedQueryId[];
  export type NamedQueryList = NamedQuery[];
  export interface QueryExecution {
    /**
     * The unique identifier for each query execution.
     */
    QueryExecutionId?: QueryExecutionId;
    /**
     * The SQL query statements which the query execution ran.
     */
    Query?: QueryString;
    /**
     * The location in Amazon S3 where query results were stored and the encryption option, if any, used for query results.
     */
    ResultConfiguration?: ResultConfiguration;
    /**
     * The database in which the query execution occurred.
     */
    QueryExecutionContext?: QueryExecutionContext;
    /**
     * The completion date, current state, submission time, and state change reason (if applicable) for the query execution.
     */
    Status?: QueryExecutionStatus;
    /**
     * The amount of data scanned during the query execution and the amount of time that it took to execute.
     */
    Statistics?: QueryExecutionStatistics;
  }
  export interface QueryExecutionContext {
    /**
     * The name of the database.
     */
    Database?: DatabaseString;
  }
  export type QueryExecutionId = string;
  export type QueryExecutionIdList = QueryExecutionId[];
  export type QueryExecutionList = QueryExecution[];
  export type QueryExecutionState = "QUEUED"|"RUNNING"|"SUCCEEDED"|"FAILED"|"CANCELLED"|string;
  export interface QueryExecutionStatistics {
    /**
     * The number of milliseconds that the query took to execute.
     */
    EngineExecutionTimeInMillis?: Long;
    /**
     * The number of bytes in the data that was queried.
     */
    DataScannedInBytes?: Long;
  }
  export interface QueryExecutionStatus {
    /**
     * The state of query execution. SUBMITTED indicates that the query is queued for execution. RUNNING indicates that the query is scanning data and returning results. SUCCEEDED indicates that the query completed without error. FAILED indicates that the query experienced an error and did not complete processing. CANCELLED indicates that user input interrupted query execution.
     */
    State?: QueryExecutionState;
    /**
     * Further detail about the status of the query.
     */
    StateChangeReason?: String;
    /**
     * The date and time that the query was submitted.
     */
    SubmissionDateTime?: _Date;
    /**
     * The date and time that the query completed.
     */
    CompletionDateTime?: _Date;
  }
  export type QueryString = string;
  export interface ResultConfiguration {
    /**
     * The location in S3 where query results are stored.
     */
    OutputLocation: String;
    /**
     * If query results are encrypted in S3, indicates the S3 encryption option used (for example, SSE-KMS or CSE-KMS and key information.
     */
    EncryptionConfiguration?: EncryptionConfiguration;
  }
  export interface ResultSet {
    /**
     * The rows in the table.
     */
    Rows?: RowList;
    /**
     * The metadata that describes the column structure and data types of a table of query results.
     */
    ResultSetMetadata?: ResultSetMetadata;
  }
  export interface ResultSetMetadata {
    /**
     * Information about the columns in a query execution result.
     */
    ColumnInfo?: ColumnInfoList;
  }
  export interface Row {
    /**
     * The data that populates a row in a query result table.
     */
    Data?: datumList;
  }
  export type RowList = Row[];
  export interface StartQueryExecutionInput {
    /**
     * The SQL query statements to be executed.
     */
    QueryString: QueryString;
    /**
     * A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another StartQueryExecution request is received, the same response is returned and another query is not created. If a parameter has changed, for example, the QueryString, an error is returned.  This token is listed as not required because AWS SDKs (for example the AWS SDK for Java) auto-generate the token for users. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the action will fail. 
     */
    ClientRequestToken?: IdempotencyToken;
    /**
     * The database within which the query executes.
     */
    QueryExecutionContext?: QueryExecutionContext;
    /**
     * Specifies information about where and how to save the results of the query execution.
     */
    ResultConfiguration: ResultConfiguration;
  }
  export interface StartQueryExecutionOutput {
    /**
     * The unique ID of the query that ran as a result of this request.
     */
    QueryExecutionId?: QueryExecutionId;
  }
  export interface StopQueryExecutionInput {
    /**
     * The unique ID of the query execution to stop.
     */
    QueryExecutionId: QueryExecutionId;
  }
  export interface StopQueryExecutionOutput {
  }
  export type String = string;
  export type ThrottleReason = "CONCURRENT_QUERY_LIMIT_EXCEEDED"|string;
  export type Token = string;
  export interface UnprocessedNamedQueryId {
    /**
     * The unique identifier of the named query.
     */
    NamedQueryId?: NamedQueryId;
    /**
     * The error code returned when the processing request for the named query failed, if applicable.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message returned when the processing request for the named query failed, if applicable.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type UnprocessedNamedQueryIdList = UnprocessedNamedQueryId[];
  export interface UnprocessedQueryExecutionId {
    /**
     * The unique identifier of the query execution.
     */
    QueryExecutionId?: QueryExecutionId;
    /**
     * The error code returned when the query execution failed to process, if applicable.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message returned when the query execution failed to process, if applicable.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type UnprocessedQueryExecutionIdList = UnprocessedQueryExecutionId[];
  export type datumList = Datum[];
  export type datumString = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-05-18"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Athena client.
   */
  export import Types = Athena;
}
export = Athena;
