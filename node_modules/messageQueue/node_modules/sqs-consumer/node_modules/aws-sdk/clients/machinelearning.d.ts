import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MachineLearning extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MachineLearning.Types.ClientConfiguration)
  config: Config & MachineLearning.Types.ClientConfiguration;
  /**
   * Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value. If you add a tag using a key that is already associated with the ML object, AddTags updates the tag's value.
   */
  addTags(params: MachineLearning.Types.AddTagsInput, callback?: (err: AWSError, data: MachineLearning.Types.AddTagsOutput) => void): Request<MachineLearning.Types.AddTagsOutput, AWSError>;
  /**
   * Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value. If you add a tag using a key that is already associated with the ML object, AddTags updates the tag's value.
   */
  addTags(callback?: (err: AWSError, data: MachineLearning.Types.AddTagsOutput) => void): Request<MachineLearning.Types.AddTagsOutput, AWSError>;
  /**
   * Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a DataSource. This operation creates a new BatchPrediction, and uses an MLModel and the data files referenced by the DataSource as information sources.  CreateBatchPrediction is an asynchronous operation. In response to CreateBatchPrediction, Amazon Machine Learning (Amazon ML) immediately returns and sets the BatchPrediction status to PENDING. After the BatchPrediction completes, Amazon ML sets the status to COMPLETED.  You can poll for status updates by using the GetBatchPrediction operation and checking the Status parameter of the result. After the COMPLETED status appears, the results are available in the location specified by the OutputUri parameter.
   */
  createBatchPrediction(params: MachineLearning.Types.CreateBatchPredictionInput, callback?: (err: AWSError, data: MachineLearning.Types.CreateBatchPredictionOutput) => void): Request<MachineLearning.Types.CreateBatchPredictionOutput, AWSError>;
  /**
   * Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a DataSource. This operation creates a new BatchPrediction, and uses an MLModel and the data files referenced by the DataSource as information sources.  CreateBatchPrediction is an asynchronous operation. In response to CreateBatchPrediction, Amazon Machine Learning (Amazon ML) immediately returns and sets the BatchPrediction status to PENDING. After the BatchPrediction completes, Amazon ML sets the status to COMPLETED.  You can poll for status updates by using the GetBatchPrediction operation and checking the Status parameter of the result. After the COMPLETED status appears, the results are available in the location specified by the OutputUri parameter.
   */
  createBatchPrediction(callback?: (err: AWSError, data: MachineLearning.Types.CreateBatchPredictionOutput) => void): Request<MachineLearning.Types.CreateBatchPredictionOutput, AWSError>;
  /**
   * Creates a DataSource object from an  Amazon Relational Database Service (Amazon RDS). A DataSource references data that can be used to perform CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. CreateDataSourceFromRDS is an asynchronous operation. In response to CreateDataSourceFromRDS, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource is created and ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in the COMPLETED or PENDING state can be used only to perform &gt;CreateMLModel&gt;, CreateEvaluation, or CreateBatchPrediction operations.   If Amazon ML cannot accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response. 
   */
  createDataSourceFromRDS(params: MachineLearning.Types.CreateDataSourceFromRDSInput, callback?: (err: AWSError, data: MachineLearning.Types.CreateDataSourceFromRDSOutput) => void): Request<MachineLearning.Types.CreateDataSourceFromRDSOutput, AWSError>;
  /**
   * Creates a DataSource object from an  Amazon Relational Database Service (Amazon RDS). A DataSource references data that can be used to perform CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. CreateDataSourceFromRDS is an asynchronous operation. In response to CreateDataSourceFromRDS, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource is created and ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in the COMPLETED or PENDING state can be used only to perform &gt;CreateMLModel&gt;, CreateEvaluation, or CreateBatchPrediction operations.   If Amazon ML cannot accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response. 
   */
  createDataSourceFromRDS(callback?: (err: AWSError, data: MachineLearning.Types.CreateDataSourceFromRDSOutput) => void): Request<MachineLearning.Types.CreateDataSourceFromRDSOutput, AWSError>;
  /**
   * Creates a DataSource from a database hosted on an Amazon Redshift cluster. A DataSource references data that can be used to perform either CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. CreateDataSourceFromRedshift is an asynchronous operation. In response to CreateDataSourceFromRedshift, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource is created and ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in COMPLETED or PENDING states can be used to perform only CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations.   If Amazon ML can't accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response.  The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a SelectSqlQuery query. Amazon ML executes an Unload command in Amazon Redshift to transfer the result set of the SelectSqlQuery query to S3StagingLocation. After the DataSource has been created, it's ready for use in evaluations and batch predictions. If you plan to use the DataSource to train an MLModel, the DataSource also requires a recipe. A recipe describes how each input variable will be used in training an MLModel. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions. You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call GetDataSource for an existing datasource and copy the values to a CreateDataSource call. Change the settings that you want to change and make sure that all required fields have the appropriate values. 
   */
  createDataSourceFromRedshift(params: MachineLearning.Types.CreateDataSourceFromRedshiftInput, callback?: (err: AWSError, data: MachineLearning.Types.CreateDataSourceFromRedshiftOutput) => void): Request<MachineLearning.Types.CreateDataSourceFromRedshiftOutput, AWSError>;
  /**
   * Creates a DataSource from a database hosted on an Amazon Redshift cluster. A DataSource references data that can be used to perform either CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. CreateDataSourceFromRedshift is an asynchronous operation. In response to CreateDataSourceFromRedshift, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource is created and ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in COMPLETED or PENDING states can be used to perform only CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations.   If Amazon ML can't accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response.  The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a SelectSqlQuery query. Amazon ML executes an Unload command in Amazon Redshift to transfer the result set of the SelectSqlQuery query to S3StagingLocation. After the DataSource has been created, it's ready for use in evaluations and batch predictions. If you plan to use the DataSource to train an MLModel, the DataSource also requires a recipe. A recipe describes how each input variable will be used in training an MLModel. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions. You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call GetDataSource for an existing datasource and copy the values to a CreateDataSource call. Change the settings that you want to change and make sure that all required fields have the appropriate values. 
   */
  createDataSourceFromRedshift(callback?: (err: AWSError, data: MachineLearning.Types.CreateDataSourceFromRedshiftOutput) => void): Request<MachineLearning.Types.CreateDataSourceFromRedshiftOutput, AWSError>;
  /**
   * Creates a DataSource object. A DataSource references data that can be used to perform CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. CreateDataSourceFromS3 is an asynchronous operation. In response to CreateDataSourceFromS3, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource has been created and is ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in the COMPLETED or PENDING state can be used to perform only CreateMLModel, CreateEvaluation or CreateBatchPrediction operations.   If Amazon ML can't accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response.  The observation data used in a DataSource should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the DataSource.  After the DataSource has been created, it's ready to use in evaluations and batch predictions. If you plan to use the DataSource to train an MLModel, the DataSource also needs a recipe. A recipe describes how each input variable will be used in training an MLModel. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.
   */
  createDataSourceFromS3(params: MachineLearning.Types.CreateDataSourceFromS3Input, callback?: (err: AWSError, data: MachineLearning.Types.CreateDataSourceFromS3Output) => void): Request<MachineLearning.Types.CreateDataSourceFromS3Output, AWSError>;
  /**
   * Creates a DataSource object. A DataSource references data that can be used to perform CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. CreateDataSourceFromS3 is an asynchronous operation. In response to CreateDataSourceFromS3, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource has been created and is ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in the COMPLETED or PENDING state can be used to perform only CreateMLModel, CreateEvaluation or CreateBatchPrediction operations.   If Amazon ML can't accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response.  The observation data used in a DataSource should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the DataSource.  After the DataSource has been created, it's ready to use in evaluations and batch predictions. If you plan to use the DataSource to train an MLModel, the DataSource also needs a recipe. A recipe describes how each input variable will be used in training an MLModel. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.
   */
  createDataSourceFromS3(callback?: (err: AWSError, data: MachineLearning.Types.CreateDataSourceFromS3Output) => void): Request<MachineLearning.Types.CreateDataSourceFromS3Output, AWSError>;
  /**
   * Creates a new Evaluation of an MLModel. An MLModel is evaluated on a set of observations associated to a DataSource. Like a DataSource for an MLModel, the DataSource for an Evaluation contains values for the Target Variable. The Evaluation compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the MLModel functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding MLModelType: BINARY, REGRESSION or MULTICLASS.  CreateEvaluation is an asynchronous operation. In response to CreateEvaluation, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to PENDING. After the Evaluation is created and ready for use, Amazon ML sets the status to COMPLETED.  You can use the GetEvaluation operation to check progress of the evaluation during the creation operation.
   */
  createEvaluation(params: MachineLearning.Types.CreateEvaluationInput, callback?: (err: AWSError, data: MachineLearning.Types.CreateEvaluationOutput) => void): Request<MachineLearning.Types.CreateEvaluationOutput, AWSError>;
  /**
   * Creates a new Evaluation of an MLModel. An MLModel is evaluated on a set of observations associated to a DataSource. Like a DataSource for an MLModel, the DataSource for an Evaluation contains values for the Target Variable. The Evaluation compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the MLModel functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding MLModelType: BINARY, REGRESSION or MULTICLASS.  CreateEvaluation is an asynchronous operation. In response to CreateEvaluation, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to PENDING. After the Evaluation is created and ready for use, Amazon ML sets the status to COMPLETED.  You can use the GetEvaluation operation to check progress of the evaluation during the creation operation.
   */
  createEvaluation(callback?: (err: AWSError, data: MachineLearning.Types.CreateEvaluationOutput) => void): Request<MachineLearning.Types.CreateEvaluationOutput, AWSError>;
  /**
   * Creates a new MLModel using the DataSource and the recipe as information sources.  An MLModel is nearly immutable. Users can update only the MLModelName and the ScoreThreshold in an MLModel without creating a new MLModel.  CreateMLModel is an asynchronous operation. In response to CreateMLModel, Amazon Machine Learning (Amazon ML) immediately returns and sets the MLModel status to PENDING. After the MLModel has been created and ready is for use, Amazon ML sets the status to COMPLETED.  You can use the GetMLModel operation to check the progress of the MLModel during the creation operation.  CreateMLModel requires a DataSource with computed statistics, which can be created by setting ComputeStatistics to true in CreateDataSourceFromRDS, CreateDataSourceFromS3, or CreateDataSourceFromRedshift operations. 
   */
  createMLModel(params: MachineLearning.Types.CreateMLModelInput, callback?: (err: AWSError, data: MachineLearning.Types.CreateMLModelOutput) => void): Request<MachineLearning.Types.CreateMLModelOutput, AWSError>;
  /**
   * Creates a new MLModel using the DataSource and the recipe as information sources.  An MLModel is nearly immutable. Users can update only the MLModelName and the ScoreThreshold in an MLModel without creating a new MLModel.  CreateMLModel is an asynchronous operation. In response to CreateMLModel, Amazon Machine Learning (Amazon ML) immediately returns and sets the MLModel status to PENDING. After the MLModel has been created and ready is for use, Amazon ML sets the status to COMPLETED.  You can use the GetMLModel operation to check the progress of the MLModel during the creation operation.  CreateMLModel requires a DataSource with computed statistics, which can be created by setting ComputeStatistics to true in CreateDataSourceFromRDS, CreateDataSourceFromS3, or CreateDataSourceFromRedshift operations. 
   */
  createMLModel(callback?: (err: AWSError, data: MachineLearning.Types.CreateMLModelOutput) => void): Request<MachineLearning.Types.CreateMLModelOutput, AWSError>;
  /**
   * Creates a real-time endpoint for the MLModel. The endpoint contains the URI of the MLModel; that is, the location to send real-time prediction requests for the specified MLModel.
   */
  createRealtimeEndpoint(params: MachineLearning.Types.CreateRealtimeEndpointInput, callback?: (err: AWSError, data: MachineLearning.Types.CreateRealtimeEndpointOutput) => void): Request<MachineLearning.Types.CreateRealtimeEndpointOutput, AWSError>;
  /**
   * Creates a real-time endpoint for the MLModel. The endpoint contains the URI of the MLModel; that is, the location to send real-time prediction requests for the specified MLModel.
   */
  createRealtimeEndpoint(callback?: (err: AWSError, data: MachineLearning.Types.CreateRealtimeEndpointOutput) => void): Request<MachineLearning.Types.CreateRealtimeEndpointOutput, AWSError>;
  /**
   * Assigns the DELETED status to a BatchPrediction, rendering it unusable. After using the DeleteBatchPrediction operation, you can use the GetBatchPrediction operation to verify that the status of the BatchPrediction changed to DELETED. Caution: The result of the DeleteBatchPrediction operation is irreversible.
   */
  deleteBatchPrediction(params: MachineLearning.Types.DeleteBatchPredictionInput, callback?: (err: AWSError, data: MachineLearning.Types.DeleteBatchPredictionOutput) => void): Request<MachineLearning.Types.DeleteBatchPredictionOutput, AWSError>;
  /**
   * Assigns the DELETED status to a BatchPrediction, rendering it unusable. After using the DeleteBatchPrediction operation, you can use the GetBatchPrediction operation to verify that the status of the BatchPrediction changed to DELETED. Caution: The result of the DeleteBatchPrediction operation is irreversible.
   */
  deleteBatchPrediction(callback?: (err: AWSError, data: MachineLearning.Types.DeleteBatchPredictionOutput) => void): Request<MachineLearning.Types.DeleteBatchPredictionOutput, AWSError>;
  /**
   * Assigns the DELETED status to a DataSource, rendering it unusable. After using the DeleteDataSource operation, you can use the GetDataSource operation to verify that the status of the DataSource changed to DELETED. Caution: The results of the DeleteDataSource operation are irreversible.
   */
  deleteDataSource(params: MachineLearning.Types.DeleteDataSourceInput, callback?: (err: AWSError, data: MachineLearning.Types.DeleteDataSourceOutput) => void): Request<MachineLearning.Types.DeleteDataSourceOutput, AWSError>;
  /**
   * Assigns the DELETED status to a DataSource, rendering it unusable. After using the DeleteDataSource operation, you can use the GetDataSource operation to verify that the status of the DataSource changed to DELETED. Caution: The results of the DeleteDataSource operation are irreversible.
   */
  deleteDataSource(callback?: (err: AWSError, data: MachineLearning.Types.DeleteDataSourceOutput) => void): Request<MachineLearning.Types.DeleteDataSourceOutput, AWSError>;
  /**
   * Assigns the DELETED status to an Evaluation, rendering it unusable. After invoking the DeleteEvaluation operation, you can use the GetEvaluation operation to verify that the status of the Evaluation changed to DELETED. Caution The results of the DeleteEvaluation operation are irreversible.
   */
  deleteEvaluation(params: MachineLearning.Types.DeleteEvaluationInput, callback?: (err: AWSError, data: MachineLearning.Types.DeleteEvaluationOutput) => void): Request<MachineLearning.Types.DeleteEvaluationOutput, AWSError>;
  /**
   * Assigns the DELETED status to an Evaluation, rendering it unusable. After invoking the DeleteEvaluation operation, you can use the GetEvaluation operation to verify that the status of the Evaluation changed to DELETED. Caution The results of the DeleteEvaluation operation are irreversible.
   */
  deleteEvaluation(callback?: (err: AWSError, data: MachineLearning.Types.DeleteEvaluationOutput) => void): Request<MachineLearning.Types.DeleteEvaluationOutput, AWSError>;
  /**
   * Assigns the DELETED status to an MLModel, rendering it unusable. After using the DeleteMLModel operation, you can use the GetMLModel operation to verify that the status of the MLModel changed to DELETED. Caution: The result of the DeleteMLModel operation is irreversible.
   */
  deleteMLModel(params: MachineLearning.Types.DeleteMLModelInput, callback?: (err: AWSError, data: MachineLearning.Types.DeleteMLModelOutput) => void): Request<MachineLearning.Types.DeleteMLModelOutput, AWSError>;
  /**
   * Assigns the DELETED status to an MLModel, rendering it unusable. After using the DeleteMLModel operation, you can use the GetMLModel operation to verify that the status of the MLModel changed to DELETED. Caution: The result of the DeleteMLModel operation is irreversible.
   */
  deleteMLModel(callback?: (err: AWSError, data: MachineLearning.Types.DeleteMLModelOutput) => void): Request<MachineLearning.Types.DeleteMLModelOutput, AWSError>;
  /**
   * Deletes a real time endpoint of an MLModel.
   */
  deleteRealtimeEndpoint(params: MachineLearning.Types.DeleteRealtimeEndpointInput, callback?: (err: AWSError, data: MachineLearning.Types.DeleteRealtimeEndpointOutput) => void): Request<MachineLearning.Types.DeleteRealtimeEndpointOutput, AWSError>;
  /**
   * Deletes a real time endpoint of an MLModel.
   */
  deleteRealtimeEndpoint(callback?: (err: AWSError, data: MachineLearning.Types.DeleteRealtimeEndpointOutput) => void): Request<MachineLearning.Types.DeleteRealtimeEndpointOutput, AWSError>;
  /**
   * Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags. If you specify a tag that doesn't exist, Amazon ML ignores it.
   */
  deleteTags(params: MachineLearning.Types.DeleteTagsInput, callback?: (err: AWSError, data: MachineLearning.Types.DeleteTagsOutput) => void): Request<MachineLearning.Types.DeleteTagsOutput, AWSError>;
  /**
   * Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags. If you specify a tag that doesn't exist, Amazon ML ignores it.
   */
  deleteTags(callback?: (err: AWSError, data: MachineLearning.Types.DeleteTagsOutput) => void): Request<MachineLearning.Types.DeleteTagsOutput, AWSError>;
  /**
   * Returns a list of BatchPrediction operations that match the search criteria in the request.
   */
  describeBatchPredictions(params: MachineLearning.Types.DescribeBatchPredictionsInput, callback?: (err: AWSError, data: MachineLearning.Types.DescribeBatchPredictionsOutput) => void): Request<MachineLearning.Types.DescribeBatchPredictionsOutput, AWSError>;
  /**
   * Returns a list of BatchPrediction operations that match the search criteria in the request.
   */
  describeBatchPredictions(callback?: (err: AWSError, data: MachineLearning.Types.DescribeBatchPredictionsOutput) => void): Request<MachineLearning.Types.DescribeBatchPredictionsOutput, AWSError>;
  /**
   * Returns a list of DataSource that match the search criteria in the request.
   */
  describeDataSources(params: MachineLearning.Types.DescribeDataSourcesInput, callback?: (err: AWSError, data: MachineLearning.Types.DescribeDataSourcesOutput) => void): Request<MachineLearning.Types.DescribeDataSourcesOutput, AWSError>;
  /**
   * Returns a list of DataSource that match the search criteria in the request.
   */
  describeDataSources(callback?: (err: AWSError, data: MachineLearning.Types.DescribeDataSourcesOutput) => void): Request<MachineLearning.Types.DescribeDataSourcesOutput, AWSError>;
  /**
   * Returns a list of DescribeEvaluations that match the search criteria in the request.
   */
  describeEvaluations(params: MachineLearning.Types.DescribeEvaluationsInput, callback?: (err: AWSError, data: MachineLearning.Types.DescribeEvaluationsOutput) => void): Request<MachineLearning.Types.DescribeEvaluationsOutput, AWSError>;
  /**
   * Returns a list of DescribeEvaluations that match the search criteria in the request.
   */
  describeEvaluations(callback?: (err: AWSError, data: MachineLearning.Types.DescribeEvaluationsOutput) => void): Request<MachineLearning.Types.DescribeEvaluationsOutput, AWSError>;
  /**
   * Returns a list of MLModel that match the search criteria in the request.
   */
  describeMLModels(params: MachineLearning.Types.DescribeMLModelsInput, callback?: (err: AWSError, data: MachineLearning.Types.DescribeMLModelsOutput) => void): Request<MachineLearning.Types.DescribeMLModelsOutput, AWSError>;
  /**
   * Returns a list of MLModel that match the search criteria in the request.
   */
  describeMLModels(callback?: (err: AWSError, data: MachineLearning.Types.DescribeMLModelsOutput) => void): Request<MachineLearning.Types.DescribeMLModelsOutput, AWSError>;
  /**
   * Describes one or more of the tags for your Amazon ML object.
   */
  describeTags(params: MachineLearning.Types.DescribeTagsInput, callback?: (err: AWSError, data: MachineLearning.Types.DescribeTagsOutput) => void): Request<MachineLearning.Types.DescribeTagsOutput, AWSError>;
  /**
   * Describes one or more of the tags for your Amazon ML object.
   */
  describeTags(callback?: (err: AWSError, data: MachineLearning.Types.DescribeTagsOutput) => void): Request<MachineLearning.Types.DescribeTagsOutput, AWSError>;
  /**
   * Returns a BatchPrediction that includes detailed metadata, status, and data file information for a Batch Prediction request.
   */
  getBatchPrediction(params: MachineLearning.Types.GetBatchPredictionInput, callback?: (err: AWSError, data: MachineLearning.Types.GetBatchPredictionOutput) => void): Request<MachineLearning.Types.GetBatchPredictionOutput, AWSError>;
  /**
   * Returns a BatchPrediction that includes detailed metadata, status, and data file information for a Batch Prediction request.
   */
  getBatchPrediction(callback?: (err: AWSError, data: MachineLearning.Types.GetBatchPredictionOutput) => void): Request<MachineLearning.Types.GetBatchPredictionOutput, AWSError>;
  /**
   * Returns a DataSource that includes metadata and data file information, as well as the current status of the DataSource. GetDataSource provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.
   */
  getDataSource(params: MachineLearning.Types.GetDataSourceInput, callback?: (err: AWSError, data: MachineLearning.Types.GetDataSourceOutput) => void): Request<MachineLearning.Types.GetDataSourceOutput, AWSError>;
  /**
   * Returns a DataSource that includes metadata and data file information, as well as the current status of the DataSource. GetDataSource provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.
   */
  getDataSource(callback?: (err: AWSError, data: MachineLearning.Types.GetDataSourceOutput) => void): Request<MachineLearning.Types.GetDataSourceOutput, AWSError>;
  /**
   * Returns an Evaluation that includes metadata as well as the current status of the Evaluation.
   */
  getEvaluation(params: MachineLearning.Types.GetEvaluationInput, callback?: (err: AWSError, data: MachineLearning.Types.GetEvaluationOutput) => void): Request<MachineLearning.Types.GetEvaluationOutput, AWSError>;
  /**
   * Returns an Evaluation that includes metadata as well as the current status of the Evaluation.
   */
  getEvaluation(callback?: (err: AWSError, data: MachineLearning.Types.GetEvaluationOutput) => void): Request<MachineLearning.Types.GetEvaluationOutput, AWSError>;
  /**
   * Returns an MLModel that includes detailed metadata, data source information, and the current status of the MLModel. GetMLModel provides results in normal or verbose format. 
   */
  getMLModel(params: MachineLearning.Types.GetMLModelInput, callback?: (err: AWSError, data: MachineLearning.Types.GetMLModelOutput) => void): Request<MachineLearning.Types.GetMLModelOutput, AWSError>;
  /**
   * Returns an MLModel that includes detailed metadata, data source information, and the current status of the MLModel. GetMLModel provides results in normal or verbose format. 
   */
  getMLModel(callback?: (err: AWSError, data: MachineLearning.Types.GetMLModelOutput) => void): Request<MachineLearning.Types.GetMLModelOutput, AWSError>;
  /**
   * Generates a prediction for the observation using the specified ML Model. Note Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.
   */
  predict(params: MachineLearning.Types.PredictInput, callback?: (err: AWSError, data: MachineLearning.Types.PredictOutput) => void): Request<MachineLearning.Types.PredictOutput, AWSError>;
  /**
   * Generates a prediction for the observation using the specified ML Model. Note Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.
   */
  predict(callback?: (err: AWSError, data: MachineLearning.Types.PredictOutput) => void): Request<MachineLearning.Types.PredictOutput, AWSError>;
  /**
   * Updates the BatchPredictionName of a BatchPrediction. You can use the GetBatchPrediction operation to view the contents of the updated data element.
   */
  updateBatchPrediction(params: MachineLearning.Types.UpdateBatchPredictionInput, callback?: (err: AWSError, data: MachineLearning.Types.UpdateBatchPredictionOutput) => void): Request<MachineLearning.Types.UpdateBatchPredictionOutput, AWSError>;
  /**
   * Updates the BatchPredictionName of a BatchPrediction. You can use the GetBatchPrediction operation to view the contents of the updated data element.
   */
  updateBatchPrediction(callback?: (err: AWSError, data: MachineLearning.Types.UpdateBatchPredictionOutput) => void): Request<MachineLearning.Types.UpdateBatchPredictionOutput, AWSError>;
  /**
   * Updates the DataSourceName of a DataSource. You can use the GetDataSource operation to view the contents of the updated data element.
   */
  updateDataSource(params: MachineLearning.Types.UpdateDataSourceInput, callback?: (err: AWSError, data: MachineLearning.Types.UpdateDataSourceOutput) => void): Request<MachineLearning.Types.UpdateDataSourceOutput, AWSError>;
  /**
   * Updates the DataSourceName of a DataSource. You can use the GetDataSource operation to view the contents of the updated data element.
   */
  updateDataSource(callback?: (err: AWSError, data: MachineLearning.Types.UpdateDataSourceOutput) => void): Request<MachineLearning.Types.UpdateDataSourceOutput, AWSError>;
  /**
   * Updates the EvaluationName of an Evaluation. You can use the GetEvaluation operation to view the contents of the updated data element.
   */
  updateEvaluation(params: MachineLearning.Types.UpdateEvaluationInput, callback?: (err: AWSError, data: MachineLearning.Types.UpdateEvaluationOutput) => void): Request<MachineLearning.Types.UpdateEvaluationOutput, AWSError>;
  /**
   * Updates the EvaluationName of an Evaluation. You can use the GetEvaluation operation to view the contents of the updated data element.
   */
  updateEvaluation(callback?: (err: AWSError, data: MachineLearning.Types.UpdateEvaluationOutput) => void): Request<MachineLearning.Types.UpdateEvaluationOutput, AWSError>;
  /**
   * Updates the MLModelName and the ScoreThreshold of an MLModel. You can use the GetMLModel operation to view the contents of the updated data element.
   */
  updateMLModel(params: MachineLearning.Types.UpdateMLModelInput, callback?: (err: AWSError, data: MachineLearning.Types.UpdateMLModelOutput) => void): Request<MachineLearning.Types.UpdateMLModelOutput, AWSError>;
  /**
   * Updates the MLModelName and the ScoreThreshold of an MLModel. You can use the GetMLModel operation to view the contents of the updated data element.
   */
  updateMLModel(callback?: (err: AWSError, data: MachineLearning.Types.UpdateMLModelOutput) => void): Request<MachineLearning.Types.UpdateMLModelOutput, AWSError>;
  /**
   * Waits for the dataSourceAvailable state by periodically calling the underlying MachineLearning.describeDataSourcesoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "dataSourceAvailable", params: MachineLearning.Types.DescribeDataSourcesInput, callback?: (err: AWSError, data: MachineLearning.Types.DescribeDataSourcesOutput) => void): Request<MachineLearning.Types.DescribeDataSourcesOutput, AWSError>;
  /**
   * Waits for the dataSourceAvailable state by periodically calling the underlying MachineLearning.describeDataSourcesoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "dataSourceAvailable", callback?: (err: AWSError, data: MachineLearning.Types.DescribeDataSourcesOutput) => void): Request<MachineLearning.Types.DescribeDataSourcesOutput, AWSError>;
  /**
   * Waits for the mLModelAvailable state by periodically calling the underlying MachineLearning.describeMLModelsoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "mLModelAvailable", params: MachineLearning.Types.DescribeMLModelsInput, callback?: (err: AWSError, data: MachineLearning.Types.DescribeMLModelsOutput) => void): Request<MachineLearning.Types.DescribeMLModelsOutput, AWSError>;
  /**
   * Waits for the mLModelAvailable state by periodically calling the underlying MachineLearning.describeMLModelsoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "mLModelAvailable", callback?: (err: AWSError, data: MachineLearning.Types.DescribeMLModelsOutput) => void): Request<MachineLearning.Types.DescribeMLModelsOutput, AWSError>;
  /**
   * Waits for the evaluationAvailable state by periodically calling the underlying MachineLearning.describeEvaluationsoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "evaluationAvailable", params: MachineLearning.Types.DescribeEvaluationsInput, callback?: (err: AWSError, data: MachineLearning.Types.DescribeEvaluationsOutput) => void): Request<MachineLearning.Types.DescribeEvaluationsOutput, AWSError>;
  /**
   * Waits for the evaluationAvailable state by periodically calling the underlying MachineLearning.describeEvaluationsoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "evaluationAvailable", callback?: (err: AWSError, data: MachineLearning.Types.DescribeEvaluationsOutput) => void): Request<MachineLearning.Types.DescribeEvaluationsOutput, AWSError>;
  /**
   * Waits for the batchPredictionAvailable state by periodically calling the underlying MachineLearning.describeBatchPredictionsoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "batchPredictionAvailable", params: MachineLearning.Types.DescribeBatchPredictionsInput, callback?: (err: AWSError, data: MachineLearning.Types.DescribeBatchPredictionsOutput) => void): Request<MachineLearning.Types.DescribeBatchPredictionsOutput, AWSError>;
  /**
   * Waits for the batchPredictionAvailable state by periodically calling the underlying MachineLearning.describeBatchPredictionsoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "batchPredictionAvailable", callback?: (err: AWSError, data: MachineLearning.Types.DescribeBatchPredictionsOutput) => void): Request<MachineLearning.Types.DescribeBatchPredictionsOutput, AWSError>;
}
declare namespace MachineLearning {
  export interface AddTagsInput {
    /**
     * The key-value pairs to use to create tags. If you specify a key without specifying a value, Amazon ML creates a tag with the specified key and a value of null.
     */
    Tags: TagList;
    /**
     * The ID of the ML object to tag. For example, exampleModelId.
     */
    ResourceId: EntityId;
    /**
     * The type of the ML object to tag. 
     */
    ResourceType: TaggableResourceType;
  }
  export interface AddTagsOutput {
    /**
     * The ID of the ML object that was tagged.
     */
    ResourceId?: EntityId;
    /**
     * The type of the ML object that was tagged.
     */
    ResourceType?: TaggableResourceType;
  }
  export type Algorithm = "sgd"|string;
  export type AwsUserArn = string;
  export interface BatchPrediction {
    /**
     * The ID assigned to the BatchPrediction at creation. This value should be identical to the value of the BatchPredictionID in the request. 
     */
    BatchPredictionId?: EntityId;
    /**
     * The ID of the MLModel that generated predictions for the BatchPrediction request.
     */
    MLModelId?: EntityId;
    /**
     * The ID of the DataSource that points to the group of observations to predict.
     */
    BatchPredictionDataSourceId?: EntityId;
    /**
     * The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).
     */
    InputDataLocationS3?: S3Url;
    /**
     * The AWS user account that invoked the BatchPrediction. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
     */
    CreatedByIamUser?: AwsUserArn;
    /**
     * The time that the BatchPrediction was created. The time is expressed in epoch time.
     */
    CreatedAt?: EpochTime;
    /**
     * The time of the most recent edit to the BatchPrediction. The time is expressed in epoch time.
     */
    LastUpdatedAt?: EpochTime;
    /**
     * A user-supplied name or description of the BatchPrediction.
     */
    Name?: EntityName;
    /**
     * The status of the BatchPrediction. This element can have one of the following values:   PENDING - Amazon Machine Learning (Amazon ML) submitted a request to generate predictions for a batch of observations.  INPROGRESS - The process is underway.  FAILED - The request to perform a batch prediction did not run to completion. It is not usable.  COMPLETED - The batch prediction process completed successfully.  DELETED - The BatchPrediction is marked as deleted. It is not usable. 
     */
    Status?: EntityStatus;
    /**
     * The location of an Amazon S3 bucket or directory to receive the operation results. The following substrings are not allowed in the s3 key portion of the outputURI field: ':', '//', '/./', '/../'.
     */
    OutputUri?: S3Url;
    /**
     * A description of the most recent details about processing the batch prediction request.
     */
    Message?: Message;
    ComputeTime?: LongType;
    FinishedAt?: EpochTime;
    StartedAt?: EpochTime;
    TotalRecordCount?: LongType;
    InvalidRecordCount?: LongType;
  }
  export type BatchPredictionFilterVariable = "CreatedAt"|"LastUpdatedAt"|"Status"|"Name"|"IAMUser"|"MLModelId"|"DataSourceId"|"DataURI"|string;
  export type BatchPredictions = BatchPrediction[];
  export type ComparatorValue = string;
  export type ComputeStatistics = boolean;
  export interface CreateBatchPredictionInput {
    /**
     * A user-supplied ID that uniquely identifies the BatchPrediction.
     */
    BatchPredictionId: EntityId;
    /**
     * A user-supplied name or description of the BatchPrediction. BatchPredictionName can only use the UTF-8 character set.
     */
    BatchPredictionName?: EntityName;
    /**
     * The ID of the MLModel that will generate predictions for the group of observations. 
     */
    MLModelId: EntityId;
    /**
     * The ID of the DataSource that points to the group of observations to predict.
     */
    BatchPredictionDataSourceId: EntityId;
    /**
     * The location of an Amazon Simple Storage Service (Amazon S3) bucket or directory to store the batch prediction results. The following substrings are not allowed in the s3 key portion of the outputURI field: ':', '//', '/./', '/../'. Amazon ML needs permissions to store and retrieve the logs on your behalf. For information about how to set permissions, see the Amazon Machine Learning Developer Guide.
     */
    OutputUri: S3Url;
  }
  export interface CreateBatchPredictionOutput {
    /**
     * A user-supplied ID that uniquely identifies the BatchPrediction. This value is identical to the value of the BatchPredictionId in the request.
     */
    BatchPredictionId?: EntityId;
  }
  export interface CreateDataSourceFromRDSInput {
    /**
     * A user-supplied ID that uniquely identifies the DataSource. Typically, an Amazon Resource Number (ARN) becomes the ID for a DataSource.
     */
    DataSourceId: EntityId;
    /**
     * A user-supplied name or description of the DataSource.
     */
    DataSourceName?: EntityName;
    /**
     * The data specification of an Amazon RDS DataSource:  DatabaseInformation -   DatabaseName - The name of the Amazon RDS database.  InstanceIdentifier  - A unique identifier for the Amazon RDS database instance.   DatabaseCredentials - AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon RDS database. ResourceRole - A role (DataPipelineDefaultResourceRole) assumed by an EC2 instance to carry out the copy task from Amazon RDS to Amazon Simple Storage Service (Amazon S3). For more information, see Role templates for data pipelines. ServiceRole - A role (DataPipelineDefaultRole) assumed by the AWS Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see Role templates for data pipelines. SecurityInfo - The security information to use to access an RDS DB instance. You need to set up appropriate ingress rules for the security entity IDs provided to allow access to the Amazon RDS instance. Specify a [SubnetId, SecurityGroupIds] pair for a VPC-based RDS DB instance. SelectSqlQuery - A query that is used to retrieve the observation data for the Datasource. S3StagingLocation - The Amazon S3 location for staging Amazon RDS data. The data retrieved from Amazon RDS using SelectSqlQuery is stored in this location. DataSchemaUri - The Amazon S3 location of the DataSchema. DataSchema - A JSON string representing the schema. This is not required if DataSchemaUri is specified.   DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the Datasource.    Sample -  "{\"splitting\":{\"percentBegin\":10,\"percentEnd\":60}}"   
     */
    RDSData: RDSDataSpec;
    /**
     * The role that Amazon ML assumes on behalf of the user to create and activate a data pipeline in the user's account and copy data using the SelectSqlQuery query from Amazon RDS to Amazon S3.  
     */
    RoleARN: RoleARN;
    /**
     * The compute statistics for a DataSource. The statistics are generated from the observation data referenced by a DataSource. Amazon ML uses the statistics internally during MLModel training. This parameter must be set to true if the DataSource needs to be used for MLModel training. 
     */
    ComputeStatistics?: ComputeStatistics;
  }
  export interface CreateDataSourceFromRDSOutput {
    /**
     * A user-supplied ID that uniquely identifies the datasource. This value should be identical to the value of the DataSourceID in the request. 
     */
    DataSourceId?: EntityId;
  }
  export interface CreateDataSourceFromRedshiftInput {
    /**
     * A user-supplied ID that uniquely identifies the DataSource.
     */
    DataSourceId: EntityId;
    /**
     * A user-supplied name or description of the DataSource. 
     */
    DataSourceName?: EntityName;
    /**
     * The data specification of an Amazon Redshift DataSource:  DatabaseInformation -   DatabaseName - The name of the Amazon Redshift database.    ClusterIdentifier - The unique ID for the Amazon Redshift cluster.  DatabaseCredentials - The AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon Redshift database. SelectSqlQuery - The query that is used to retrieve the observation data for the Datasource. S3StagingLocation - The Amazon Simple Storage Service (Amazon S3) location for staging Amazon Redshift data. The data retrieved from Amazon Redshift using the SelectSqlQuery query is stored in this location. DataSchemaUri - The Amazon S3 location of the DataSchema. DataSchema - A JSON string representing the schema. This is not required if DataSchemaUri is specified.   DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the DataSource.  Sample -  "{\"splitting\":{\"percentBegin\":10,\"percentEnd\":60}}"   
     */
    DataSpec: RedshiftDataSpec;
    /**
     * A fully specified role Amazon Resource Name (ARN). Amazon ML assumes the role on behalf of the user to create the following:    A security group to allow Amazon ML to execute the SelectSqlQuery query on an Amazon Redshift cluster An Amazon S3 bucket policy to grant Amazon ML read/write permissions on the S3StagingLocation  
     */
    RoleARN: RoleARN;
    /**
     * The compute statistics for a DataSource. The statistics are generated from the observation data referenced by a DataSource. Amazon ML uses the statistics internally during MLModel training. This parameter must be set to true if the DataSource needs to be used for MLModel training.
     */
    ComputeStatistics?: ComputeStatistics;
  }
  export interface CreateDataSourceFromRedshiftOutput {
    /**
     * A user-supplied ID that uniquely identifies the datasource. This value should be identical to the value of the DataSourceID in the request. 
     */
    DataSourceId?: EntityId;
  }
  export interface CreateDataSourceFromS3Input {
    /**
     * A user-supplied identifier that uniquely identifies the DataSource. 
     */
    DataSourceId: EntityId;
    /**
     * A user-supplied name or description of the DataSource. 
     */
    DataSourceName?: EntityName;
    /**
     * The data specification of a DataSource:  DataLocationS3 - The Amazon S3 location of the observation data. DataSchemaLocationS3 - The Amazon S3 location of the DataSchema. DataSchema - A JSON string representing the schema. This is not required if DataSchemaUri is specified.   DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the Datasource.   Sample -  "{\"splitting\":{\"percentBegin\":10,\"percentEnd\":60}}"   
     */
    DataSpec: S3DataSpec;
    /**
     * The compute statistics for a DataSource. The statistics are generated from the observation data referenced by a DataSource. Amazon ML uses the statistics internally during MLModel training. This parameter must be set to true if the DataSource needs to be used for MLModel training.
     */
    ComputeStatistics?: ComputeStatistics;
  }
  export interface CreateDataSourceFromS3Output {
    /**
     * A user-supplied ID that uniquely identifies the DataSource. This value should be identical to the value of the DataSourceID in the request. 
     */
    DataSourceId?: EntityId;
  }
  export interface CreateEvaluationInput {
    /**
     * A user-supplied ID that uniquely identifies the Evaluation.
     */
    EvaluationId: EntityId;
    /**
     * A user-supplied name or description of the Evaluation.
     */
    EvaluationName?: EntityName;
    /**
     * The ID of the MLModel to evaluate. The schema used in creating the MLModel must match the schema of the DataSource used in the Evaluation.
     */
    MLModelId: EntityId;
    /**
     * The ID of the DataSource for the evaluation. The schema of the DataSource must match the schema used to create the MLModel.
     */
    EvaluationDataSourceId: EntityId;
  }
  export interface CreateEvaluationOutput {
    /**
     * The user-supplied ID that uniquely identifies the Evaluation. This value should be identical to the value of the EvaluationId in the request.
     */
    EvaluationId?: EntityId;
  }
  export interface CreateMLModelInput {
    /**
     * A user-supplied ID that uniquely identifies the MLModel.
     */
    MLModelId: EntityId;
    /**
     * A user-supplied name or description of the MLModel.
     */
    MLModelName?: EntityName;
    /**
     * The category of supervised learning that this MLModel will address. Choose from the following types:  Choose REGRESSION if the MLModel will be used to predict a numeric value. Choose BINARY if the MLModel result has two possible values. Choose MULTICLASS if the MLModel result has a limited number of values.    For more information, see the Amazon Machine Learning Developer Guide.
     */
    MLModelType: MLModelType;
    /**
     * A list of the training parameters in the MLModel. The list is implemented as a map of key-value pairs. The following is the current set of training parameters:    sgd.maxMLModelSizeInBytes - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.  The value is an integer that ranges from 100000 to 2147483648. The default value is 33554432.  sgd.maxPasses - The number of times that the training process traverses the observations to build the MLModel. The value is an integer that ranges from 1 to 10000. The default value is 10.  sgd.shuffleType - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are auto and none. The default value is none. We strongly recommend that you shuffle your data.   sgd.l1RegularizationAmount - The coefficient regularization L1 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to zero, resulting in a sparse feature set. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L1 normalization. This parameter can't be used when L2 is specified. Use this parameter sparingly.   sgd.l2RegularizationAmount - The coefficient regularization L2 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L2 normalization. This parameter can't be used when L1 is specified. Use this parameter sparingly.  
     */
    Parameters?: TrainingParameters;
    /**
     * The DataSource that points to the training data.
     */
    TrainingDataSourceId: EntityId;
    /**
     * The data recipe for creating the MLModel. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.
     */
    Recipe?: Recipe;
    /**
     * The Amazon Simple Storage Service (Amazon S3) location and file name that contains the MLModel recipe. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.
     */
    RecipeUri?: S3Url;
  }
  export interface CreateMLModelOutput {
    /**
     * A user-supplied ID that uniquely identifies the MLModel. This value should be identical to the value of the MLModelId in the request. 
     */
    MLModelId?: EntityId;
  }
  export interface CreateRealtimeEndpointInput {
    /**
     * The ID assigned to the MLModel during creation.
     */
    MLModelId: EntityId;
  }
  export interface CreateRealtimeEndpointOutput {
    /**
     * A user-supplied ID that uniquely identifies the MLModel. This value should be identical to the value of the MLModelId in the request.
     */
    MLModelId?: EntityId;
    /**
     * The endpoint information of the MLModel 
     */
    RealtimeEndpointInfo?: RealtimeEndpointInfo;
  }
  export type DataRearrangement = string;
  export type DataSchema = string;
  export interface DataSource {
    /**
     * The ID that is assigned to the DataSource during creation.
     */
    DataSourceId?: EntityId;
    /**
     * The location and name of the data in Amazon Simple Storage Service (Amazon S3) that is used by a DataSource.
     */
    DataLocationS3?: S3Url;
    /**
     * A JSON string that represents the splitting and rearrangement requirement used when this DataSource was created.
     */
    DataRearrangement?: DataRearrangement;
    /**
     * The AWS user account from which the DataSource was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
     */
    CreatedByIamUser?: AwsUserArn;
    /**
     * The time that the DataSource was created. The time is expressed in epoch time.
     */
    CreatedAt?: EpochTime;
    /**
     * The time of the most recent edit to the BatchPrediction. The time is expressed in epoch time.
     */
    LastUpdatedAt?: EpochTime;
    /**
     * The total number of observations contained in the data files that the DataSource references.
     */
    DataSizeInBytes?: LongType;
    /**
     * The number of data files referenced by the DataSource.
     */
    NumberOfFiles?: LongType;
    /**
     * A user-supplied name or description of the DataSource.
     */
    Name?: EntityName;
    /**
     * The current status of the DataSource. This element can have one of the following values:   PENDING - Amazon Machine Learning (Amazon ML) submitted a request to create a DataSource. INPROGRESS - The creation process is underway. FAILED - The request to create a DataSource did not run to completion. It is not usable. COMPLETED - The creation process completed successfully. DELETED - The DataSource is marked as deleted. It is not usable. 
     */
    Status?: EntityStatus;
    /**
     * A description of the most recent details about creating the DataSource.
     */
    Message?: Message;
    RedshiftMetadata?: RedshiftMetadata;
    RDSMetadata?: RDSMetadata;
    RoleARN?: RoleARN;
    /**
     *  The parameter is true if statistics need to be generated from the observation data. 
     */
    ComputeStatistics?: ComputeStatistics;
    ComputeTime?: LongType;
    FinishedAt?: EpochTime;
    StartedAt?: EpochTime;
  }
  export type DataSourceFilterVariable = "CreatedAt"|"LastUpdatedAt"|"Status"|"Name"|"DataLocationS3"|"IAMUser"|string;
  export type DataSources = DataSource[];
  export interface DeleteBatchPredictionInput {
    /**
     * A user-supplied ID that uniquely identifies the BatchPrediction.
     */
    BatchPredictionId: EntityId;
  }
  export interface DeleteBatchPredictionOutput {
    /**
     * A user-supplied ID that uniquely identifies the BatchPrediction. This value should be identical to the value of the BatchPredictionID in the request.
     */
    BatchPredictionId?: EntityId;
  }
  export interface DeleteDataSourceInput {
    /**
     * A user-supplied ID that uniquely identifies the DataSource.
     */
    DataSourceId: EntityId;
  }
  export interface DeleteDataSourceOutput {
    /**
     * A user-supplied ID that uniquely identifies the DataSource. This value should be identical to the value of the DataSourceID in the request.
     */
    DataSourceId?: EntityId;
  }
  export interface DeleteEvaluationInput {
    /**
     * A user-supplied ID that uniquely identifies the Evaluation to delete.
     */
    EvaluationId: EntityId;
  }
  export interface DeleteEvaluationOutput {
    /**
     * A user-supplied ID that uniquely identifies the Evaluation. This value should be identical to the value of the EvaluationId in the request.
     */
    EvaluationId?: EntityId;
  }
  export interface DeleteMLModelInput {
    /**
     * A user-supplied ID that uniquely identifies the MLModel.
     */
    MLModelId: EntityId;
  }
  export interface DeleteMLModelOutput {
    /**
     * A user-supplied ID that uniquely identifies the MLModel. This value should be identical to the value of the MLModelID in the request.
     */
    MLModelId?: EntityId;
  }
  export interface DeleteRealtimeEndpointInput {
    /**
     * The ID assigned to the MLModel during creation.
     */
    MLModelId: EntityId;
  }
  export interface DeleteRealtimeEndpointOutput {
    /**
     * A user-supplied ID that uniquely identifies the MLModel. This value should be identical to the value of the MLModelId in the request.
     */
    MLModelId?: EntityId;
    /**
     * The endpoint information of the MLModel 
     */
    RealtimeEndpointInfo?: RealtimeEndpointInfo;
  }
  export interface DeleteTagsInput {
    /**
     * One or more tags to delete.
     */
    TagKeys: TagKeyList;
    /**
     * The ID of the tagged ML object. For example, exampleModelId.
     */
    ResourceId: EntityId;
    /**
     * The type of the tagged ML object.
     */
    ResourceType: TaggableResourceType;
  }
  export interface DeleteTagsOutput {
    /**
     * The ID of the ML object from which tags were deleted.
     */
    ResourceId?: EntityId;
    /**
     * The type of the ML object from which tags were deleted.
     */
    ResourceType?: TaggableResourceType;
  }
  export interface DescribeBatchPredictionsInput {
    /**
     * Use one of the following variables to filter a list of BatchPrediction:   CreatedAt - Sets the search criteria to the BatchPrediction creation date.  Status - Sets the search criteria to the BatchPrediction status.  Name - Sets the search criteria to the contents of the BatchPrediction  Name.  IAMUser - Sets the search criteria to the user account that invoked the BatchPrediction creation.  MLModelId - Sets the search criteria to the MLModel used in the BatchPrediction.  DataSourceId - Sets the search criteria to the DataSource used in the BatchPrediction.  DataURI - Sets the search criteria to the data file(s) used in the BatchPrediction. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory. 
     */
    FilterVariable?: BatchPredictionFilterVariable;
    /**
     * The equal to operator. The BatchPrediction results will have FilterVariable values that exactly match the value specified with EQ.
     */
    EQ?: ComparatorValue;
    /**
     * The greater than operator. The BatchPrediction results will have FilterVariable values that are greater than the value specified with GT.
     */
    GT?: ComparatorValue;
    /**
     * The less than operator. The BatchPrediction results will have FilterVariable values that are less than the value specified with LT.
     */
    LT?: ComparatorValue;
    /**
     * The greater than or equal to operator. The BatchPrediction results will have FilterVariable values that are greater than or equal to the value specified with GE. 
     */
    GE?: ComparatorValue;
    /**
     * The less than or equal to operator. The BatchPrediction results will have FilterVariable values that are less than or equal to the value specified with LE.
     */
    LE?: ComparatorValue;
    /**
     * The not equal to operator. The BatchPrediction results will have FilterVariable values not equal to the value specified with NE.
     */
    NE?: ComparatorValue;
    /**
     * A string that is found at the beginning of a variable, such as Name or Id. For example, a Batch Prediction operation could have the Name 2014-09-09-HolidayGiftMailer. To search for this BatchPrediction, select Name for the FilterVariable and any of the following strings for the Prefix:   2014-09 2014-09-09 2014-09-09-Holiday 
     */
    Prefix?: ComparatorValue;
    /**
     * A two-value parameter that determines the sequence of the resulting list of MLModels.   asc - Arranges the list in ascending order (A-Z, 0-9).  dsc - Arranges the list in descending order (Z-A, 9-0).  Results are sorted by FilterVariable.
     */
    SortOrder?: SortOrder;
    /**
     * An ID of the page in the paginated results.
     */
    NextToken?: StringType;
    /**
     * The number of pages of information to include in the result. The range of acceptable values is 1 through 100. The default value is 100.
     */
    Limit?: PageLimit;
  }
  export interface DescribeBatchPredictionsOutput {
    /**
     * A list of BatchPrediction objects that meet the search criteria. 
     */
    Results?: BatchPredictions;
    /**
     * The ID of the next page in the paginated results that indicates at least one more page follows.
     */
    NextToken?: StringType;
  }
  export interface DescribeDataSourcesInput {
    /**
     * Use one of the following variables to filter a list of DataSource:   CreatedAt - Sets the search criteria to DataSource creation dates.  Status - Sets the search criteria to DataSource statuses.  Name - Sets the search criteria to the contents of DataSource   Name.  DataUri - Sets the search criteria to the URI of data files used to create the DataSource. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.  IAMUser - Sets the search criteria to the user account that invoked the DataSource creation. 
     */
    FilterVariable?: DataSourceFilterVariable;
    /**
     * The equal to operator. The DataSource results will have FilterVariable values that exactly match the value specified with EQ.
     */
    EQ?: ComparatorValue;
    /**
     * The greater than operator. The DataSource results will have FilterVariable values that are greater than the value specified with GT.
     */
    GT?: ComparatorValue;
    /**
     * The less than operator. The DataSource results will have FilterVariable values that are less than the value specified with LT.
     */
    LT?: ComparatorValue;
    /**
     * The greater than or equal to operator. The DataSource results will have FilterVariable values that are greater than or equal to the value specified with GE. 
     */
    GE?: ComparatorValue;
    /**
     * The less than or equal to operator. The DataSource results will have FilterVariable values that are less than or equal to the value specified with LE.
     */
    LE?: ComparatorValue;
    /**
     * The not equal to operator. The DataSource results will have FilterVariable values not equal to the value specified with NE.
     */
    NE?: ComparatorValue;
    /**
     * A string that is found at the beginning of a variable, such as Name or Id. For example, a DataSource could have the Name 2014-09-09-HolidayGiftMailer. To search for this DataSource, select Name for the FilterVariable and any of the following strings for the Prefix:   2014-09 2014-09-09 2014-09-09-Holiday 
     */
    Prefix?: ComparatorValue;
    /**
     * A two-value parameter that determines the sequence of the resulting list of DataSource.   asc - Arranges the list in ascending order (A-Z, 0-9).  dsc - Arranges the list in descending order (Z-A, 9-0).  Results are sorted by FilterVariable.
     */
    SortOrder?: SortOrder;
    /**
     * The ID of the page in the paginated results.
     */
    NextToken?: StringType;
    /**
     *  The maximum number of DataSource to include in the result.
     */
    Limit?: PageLimit;
  }
  export interface DescribeDataSourcesOutput {
    /**
     * A list of DataSource that meet the search criteria. 
     */
    Results?: DataSources;
    /**
     * An ID of the next page in the paginated results that indicates at least one more page follows.
     */
    NextToken?: StringType;
  }
  export interface DescribeEvaluationsInput {
    /**
     * Use one of the following variable to filter a list of Evaluation objects:   CreatedAt - Sets the search criteria to the Evaluation creation date.  Status - Sets the search criteria to the Evaluation status.  Name - Sets the search criteria to the contents of Evaluation   Name.  IAMUser - Sets the search criteria to the user account that invoked an Evaluation.  MLModelId - Sets the search criteria to the MLModel that was evaluated.  DataSourceId - Sets the search criteria to the DataSource used in Evaluation.  DataUri - Sets the search criteria to the data file(s) used in Evaluation. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory. 
     */
    FilterVariable?: EvaluationFilterVariable;
    /**
     * The equal to operator. The Evaluation results will have FilterVariable values that exactly match the value specified with EQ.
     */
    EQ?: ComparatorValue;
    /**
     * The greater than operator. The Evaluation results will have FilterVariable values that are greater than the value specified with GT.
     */
    GT?: ComparatorValue;
    /**
     * The less than operator. The Evaluation results will have FilterVariable values that are less than the value specified with LT.
     */
    LT?: ComparatorValue;
    /**
     * The greater than or equal to operator. The Evaluation results will have FilterVariable values that are greater than or equal to the value specified with GE. 
     */
    GE?: ComparatorValue;
    /**
     * The less than or equal to operator. The Evaluation results will have FilterVariable values that are less than or equal to the value specified with LE.
     */
    LE?: ComparatorValue;
    /**
     * The not equal to operator. The Evaluation results will have FilterVariable values not equal to the value specified with NE.
     */
    NE?: ComparatorValue;
    /**
     * A string that is found at the beginning of a variable, such as Name or Id. For example, an Evaluation could have the Name 2014-09-09-HolidayGiftMailer. To search for this Evaluation, select Name for the FilterVariable and any of the following strings for the Prefix:   2014-09 2014-09-09 2014-09-09-Holiday 
     */
    Prefix?: ComparatorValue;
    /**
     * A two-value parameter that determines the sequence of the resulting list of Evaluation.   asc - Arranges the list in ascending order (A-Z, 0-9).  dsc - Arranges the list in descending order (Z-A, 9-0).  Results are sorted by FilterVariable.
     */
    SortOrder?: SortOrder;
    /**
     * The ID of the page in the paginated results.
     */
    NextToken?: StringType;
    /**
     *  The maximum number of Evaluation to include in the result.
     */
    Limit?: PageLimit;
  }
  export interface DescribeEvaluationsOutput {
    /**
     * A list of Evaluation that meet the search criteria. 
     */
    Results?: Evaluations;
    /**
     * The ID of the next page in the paginated results that indicates at least one more page follows.
     */
    NextToken?: StringType;
  }
  export interface DescribeMLModelsInput {
    /**
     * Use one of the following variables to filter a list of MLModel:   CreatedAt - Sets the search criteria to MLModel creation date.  Status - Sets the search criteria to MLModel status.  Name - Sets the search criteria to the contents of MLModel  Name.  IAMUser - Sets the search criteria to the user account that invoked the MLModel creation.  TrainingDataSourceId - Sets the search criteria to the DataSource used to train one or more MLModel.  RealtimeEndpointStatus - Sets the search criteria to the MLModel real-time endpoint status.  MLModelType - Sets the search criteria to MLModel type: binary, regression, or multi-class.  Algorithm - Sets the search criteria to the algorithm that the MLModel uses.  TrainingDataURI - Sets the search criteria to the data file(s) used in training a MLModel. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory. 
     */
    FilterVariable?: MLModelFilterVariable;
    /**
     * The equal to operator. The MLModel results will have FilterVariable values that exactly match the value specified with EQ.
     */
    EQ?: ComparatorValue;
    /**
     * The greater than operator. The MLModel results will have FilterVariable values that are greater than the value specified with GT.
     */
    GT?: ComparatorValue;
    /**
     * The less than operator. The MLModel results will have FilterVariable values that are less than the value specified with LT.
     */
    LT?: ComparatorValue;
    /**
     * The greater than or equal to operator. The MLModel results will have FilterVariable values that are greater than or equal to the value specified with GE. 
     */
    GE?: ComparatorValue;
    /**
     * The less than or equal to operator. The MLModel results will have FilterVariable values that are less than or equal to the value specified with LE.
     */
    LE?: ComparatorValue;
    /**
     * The not equal to operator. The MLModel results will have FilterVariable values not equal to the value specified with NE.
     */
    NE?: ComparatorValue;
    /**
     * A string that is found at the beginning of a variable, such as Name or Id. For example, an MLModel could have the Name 2014-09-09-HolidayGiftMailer. To search for this MLModel, select Name for the FilterVariable and any of the following strings for the Prefix:   2014-09 2014-09-09 2014-09-09-Holiday 
     */
    Prefix?: ComparatorValue;
    /**
     * A two-value parameter that determines the sequence of the resulting list of MLModel.   asc - Arranges the list in ascending order (A-Z, 0-9).  dsc - Arranges the list in descending order (Z-A, 9-0).  Results are sorted by FilterVariable.
     */
    SortOrder?: SortOrder;
    /**
     * The ID of the page in the paginated results.
     */
    NextToken?: StringType;
    /**
     * The number of pages of information to include in the result. The range of acceptable values is 1 through 100. The default value is 100.
     */
    Limit?: PageLimit;
  }
  export interface DescribeMLModelsOutput {
    /**
     * A list of MLModel that meet the search criteria.
     */
    Results?: MLModels;
    /**
     * The ID of the next page in the paginated results that indicates at least one more page follows.
     */
    NextToken?: StringType;
  }
  export interface DescribeTagsInput {
    /**
     * The ID of the ML object. For example, exampleModelId. 
     */
    ResourceId: EntityId;
    /**
     * The type of the ML object.
     */
    ResourceType: TaggableResourceType;
  }
  export interface DescribeTagsOutput {
    /**
     * The ID of the tagged ML object.
     */
    ResourceId?: EntityId;
    /**
     * The type of the tagged ML object.
     */
    ResourceType?: TaggableResourceType;
    /**
     * A list of tags associated with the ML object.
     */
    Tags?: TagList;
  }
  export type DetailsAttributes = "PredictiveModelType"|"Algorithm"|string;
  export type DetailsMap = {[key: string]: DetailsValue};
  export type DetailsValue = string;
  export type EDPPipelineId = string;
  export type EDPResourceRole = string;
  export type EDPSecurityGroupId = string;
  export type EDPSecurityGroupIds = EDPSecurityGroupId[];
  export type EDPServiceRole = string;
  export type EDPSubnetId = string;
  export type EntityId = string;
  export type EntityName = string;
  export type EntityStatus = "PENDING"|"INPROGRESS"|"FAILED"|"COMPLETED"|"DELETED"|string;
  export type EpochTime = Date;
  export type ErrorCode = number;
  export type ErrorMessage = string;
  export interface Evaluation {
    /**
     * The ID that is assigned to the Evaluation at creation.
     */
    EvaluationId?: EntityId;
    /**
     * The ID of the MLModel that is the focus of the evaluation.
     */
    MLModelId?: EntityId;
    /**
     * The ID of the DataSource that is used to evaluate the MLModel.
     */
    EvaluationDataSourceId?: EntityId;
    /**
     * The location and name of the data in Amazon Simple Storage Server (Amazon S3) that is used in the evaluation.
     */
    InputDataLocationS3?: S3Url;
    /**
     * The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
     */
    CreatedByIamUser?: AwsUserArn;
    /**
     * The time that the Evaluation was created. The time is expressed in epoch time.
     */
    CreatedAt?: EpochTime;
    /**
     * The time of the most recent edit to the Evaluation. The time is expressed in epoch time.
     */
    LastUpdatedAt?: EpochTime;
    /**
     * A user-supplied name or description of the Evaluation. 
     */
    Name?: EntityName;
    /**
     * The status of the evaluation. This element can have one of the following values:   PENDING - Amazon Machine Learning (Amazon ML) submitted a request to evaluate an MLModel.  INPROGRESS - The evaluation is underway.  FAILED - The request to evaluate an MLModel did not run to completion. It is not usable.  COMPLETED - The evaluation process completed successfully.  DELETED - The Evaluation is marked as deleted. It is not usable. 
     */
    Status?: EntityStatus;
    /**
     * Measurements of how well the MLModel performed, using observations referenced by the DataSource. One of the following metrics is returned, based on the type of the MLModel:    BinaryAUC: A binary MLModel uses the Area Under the Curve (AUC) technique to measure performance.    RegressionRMSE: A regression MLModel uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.   MulticlassAvgFScore: A multiclass MLModel uses the F1 score technique to measure performance.     For more information about performance metrics, please see the Amazon Machine Learning Developer Guide. 
     */
    PerformanceMetrics?: PerformanceMetrics;
    /**
     * A description of the most recent details about evaluating the MLModel.
     */
    Message?: Message;
    ComputeTime?: LongType;
    FinishedAt?: EpochTime;
    StartedAt?: EpochTime;
  }
  export type EvaluationFilterVariable = "CreatedAt"|"LastUpdatedAt"|"Status"|"Name"|"IAMUser"|"MLModelId"|"DataSourceId"|"DataURI"|string;
  export type Evaluations = Evaluation[];
  export interface GetBatchPredictionInput {
    /**
     * An ID assigned to the BatchPrediction at creation.
     */
    BatchPredictionId: EntityId;
  }
  export interface GetBatchPredictionOutput {
    /**
     * An ID assigned to the BatchPrediction at creation. This value should be identical to the value of the BatchPredictionID in the request.
     */
    BatchPredictionId?: EntityId;
    /**
     * The ID of the MLModel that generated predictions for the BatchPrediction request.
     */
    MLModelId?: EntityId;
    /**
     * The ID of the DataSource that was used to create the BatchPrediction. 
     */
    BatchPredictionDataSourceId?: EntityId;
    /**
     * The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).
     */
    InputDataLocationS3?: S3Url;
    /**
     * The AWS user account that invoked the BatchPrediction. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
     */
    CreatedByIamUser?: AwsUserArn;
    /**
     * The time when the BatchPrediction was created. The time is expressed in epoch time.
     */
    CreatedAt?: EpochTime;
    /**
     * The time of the most recent edit to BatchPrediction. The time is expressed in epoch time.
     */
    LastUpdatedAt?: EpochTime;
    /**
     * A user-supplied name or description of the BatchPrediction.
     */
    Name?: EntityName;
    /**
     * The status of the BatchPrediction, which can be one of the following values:   PENDING - Amazon Machine Learning (Amazon ML) submitted a request to generate batch predictions.  INPROGRESS - The batch predictions are in progress.  FAILED - The request to perform a batch prediction did not run to completion. It is not usable.  COMPLETED - The batch prediction process completed successfully.  DELETED - The BatchPrediction is marked as deleted. It is not usable. 
     */
    Status?: EntityStatus;
    /**
     * The location of an Amazon S3 bucket or directory to receive the operation results.
     */
    OutputUri?: S3Url;
    /**
     * A link to the file that contains logs of the CreateBatchPrediction operation.
     */
    LogUri?: PresignedS3Url;
    /**
     * A description of the most recent details about processing the batch prediction request.
     */
    Message?: Message;
    /**
     * The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the BatchPrediction, normalized and scaled on computation resources. ComputeTime is only available if the BatchPrediction is in the COMPLETED state.
     */
    ComputeTime?: LongType;
    /**
     * The epoch time when Amazon Machine Learning marked the BatchPrediction as COMPLETED or FAILED. FinishedAt is only available when the BatchPrediction is in the COMPLETED or FAILED state.
     */
    FinishedAt?: EpochTime;
    /**
     * The epoch time when Amazon Machine Learning marked the BatchPrediction as INPROGRESS. StartedAt isn't available if the BatchPrediction is in the PENDING state.
     */
    StartedAt?: EpochTime;
    /**
     * The number of total records that Amazon Machine Learning saw while processing the BatchPrediction.
     */
    TotalRecordCount?: LongType;
    /**
     * The number of invalid records that Amazon Machine Learning saw while processing the BatchPrediction.
     */
    InvalidRecordCount?: LongType;
  }
  export interface GetDataSourceInput {
    /**
     * The ID assigned to the DataSource at creation.
     */
    DataSourceId: EntityId;
    /**
     * Specifies whether the GetDataSource operation should return DataSourceSchema. If true, DataSourceSchema is returned. If false, DataSourceSchema is not returned.
     */
    Verbose?: Verbose;
  }
  export interface GetDataSourceOutput {
    /**
     * The ID assigned to the DataSource at creation. This value should be identical to the value of the DataSourceId in the request.
     */
    DataSourceId?: EntityId;
    /**
     * The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).
     */
    DataLocationS3?: S3Url;
    /**
     * A JSON string that represents the splitting and rearrangement requirement used when this DataSource was created.
     */
    DataRearrangement?: DataRearrangement;
    /**
     * The AWS user account from which the DataSource was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
     */
    CreatedByIamUser?: AwsUserArn;
    /**
     * The time that the DataSource was created. The time is expressed in epoch time.
     */
    CreatedAt?: EpochTime;
    /**
     * The time of the most recent edit to the DataSource. The time is expressed in epoch time.
     */
    LastUpdatedAt?: EpochTime;
    /**
     * The total size of observations in the data files.
     */
    DataSizeInBytes?: LongType;
    /**
     * The number of data files referenced by the DataSource.
     */
    NumberOfFiles?: LongType;
    /**
     * A user-supplied name or description of the DataSource.
     */
    Name?: EntityName;
    /**
     * The current status of the DataSource. This element can have one of the following values:   PENDING - Amazon ML submitted a request to create a DataSource.  INPROGRESS - The creation process is underway.  FAILED - The request to create a DataSource did not run to completion. It is not usable.  COMPLETED - The creation process completed successfully.  DELETED - The DataSource is marked as deleted. It is not usable. 
     */
    Status?: EntityStatus;
    /**
     * A link to the file containing logs of CreateDataSourceFrom* operations.
     */
    LogUri?: PresignedS3Url;
    /**
     * The user-supplied description of the most recent details about creating the DataSource.
     */
    Message?: Message;
    RedshiftMetadata?: RedshiftMetadata;
    RDSMetadata?: RDSMetadata;
    RoleARN?: RoleARN;
    /**
     *  The parameter is true if statistics need to be generated from the observation data. 
     */
    ComputeStatistics?: ComputeStatistics;
    /**
     * The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the DataSource, normalized and scaled on computation resources. ComputeTime is only available if the DataSource is in the COMPLETED state and the ComputeStatistics is set to true.
     */
    ComputeTime?: LongType;
    /**
     * The epoch time when Amazon Machine Learning marked the DataSource as COMPLETED or FAILED. FinishedAt is only available when the DataSource is in the COMPLETED or FAILED state.
     */
    FinishedAt?: EpochTime;
    /**
     * The epoch time when Amazon Machine Learning marked the DataSource as INPROGRESS. StartedAt isn't available if the DataSource is in the PENDING state.
     */
    StartedAt?: EpochTime;
    /**
     * The schema used by all of the data files of this DataSource. Note This parameter is provided as part of the verbose format.
     */
    DataSourceSchema?: DataSchema;
  }
  export interface GetEvaluationInput {
    /**
     * The ID of the Evaluation to retrieve. The evaluation of each MLModel is recorded and cataloged. The ID provides the means to access the information. 
     */
    EvaluationId: EntityId;
  }
  export interface GetEvaluationOutput {
    /**
     * The evaluation ID which is same as the EvaluationId in the request.
     */
    EvaluationId?: EntityId;
    /**
     * The ID of the MLModel that was the focus of the evaluation.
     */
    MLModelId?: EntityId;
    /**
     * The DataSource used for this evaluation.
     */
    EvaluationDataSourceId?: EntityId;
    /**
     * The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).
     */
    InputDataLocationS3?: S3Url;
    /**
     * The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
     */
    CreatedByIamUser?: AwsUserArn;
    /**
     * The time that the Evaluation was created. The time is expressed in epoch time.
     */
    CreatedAt?: EpochTime;
    /**
     * The time of the most recent edit to the Evaluation. The time is expressed in epoch time.
     */
    LastUpdatedAt?: EpochTime;
    /**
     * A user-supplied name or description of the Evaluation. 
     */
    Name?: EntityName;
    /**
     * The status of the evaluation. This element can have one of the following values:   PENDING - Amazon Machine Language (Amazon ML) submitted a request to evaluate an MLModel.  INPROGRESS - The evaluation is underway.  FAILED - The request to evaluate an MLModel did not run to completion. It is not usable.  COMPLETED - The evaluation process completed successfully.  DELETED - The Evaluation is marked as deleted. It is not usable. 
     */
    Status?: EntityStatus;
    /**
     * Measurements of how well the MLModel performed using observations referenced by the DataSource. One of the following metric is returned based on the type of the MLModel:    BinaryAUC: A binary MLModel uses the Area Under the Curve (AUC) technique to measure performance.    RegressionRMSE: A regression MLModel uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.   MulticlassAvgFScore: A multiclass MLModel uses the F1 score technique to measure performance.     For more information about performance metrics, please see the Amazon Machine Learning Developer Guide. 
     */
    PerformanceMetrics?: PerformanceMetrics;
    /**
     * A link to the file that contains logs of the CreateEvaluation operation.
     */
    LogUri?: PresignedS3Url;
    /**
     * A description of the most recent details about evaluating the MLModel.
     */
    Message?: Message;
    /**
     * The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the Evaluation, normalized and scaled on computation resources. ComputeTime is only available if the Evaluation is in the COMPLETED state.
     */
    ComputeTime?: LongType;
    /**
     * The epoch time when Amazon Machine Learning marked the Evaluation as COMPLETED or FAILED. FinishedAt is only available when the Evaluation is in the COMPLETED or FAILED state.
     */
    FinishedAt?: EpochTime;
    /**
     * The epoch time when Amazon Machine Learning marked the Evaluation as INPROGRESS. StartedAt isn't available if the Evaluation is in the PENDING state.
     */
    StartedAt?: EpochTime;
  }
  export interface GetMLModelInput {
    /**
     * The ID assigned to the MLModel at creation.
     */
    MLModelId: EntityId;
    /**
     * Specifies whether the GetMLModel operation should return Recipe. If true, Recipe is returned. If false, Recipe is not returned.
     */
    Verbose?: Verbose;
  }
  export interface GetMLModelOutput {
    /**
     * The MLModel ID, which is same as the MLModelId in the request.
     */
    MLModelId?: EntityId;
    /**
     * The ID of the training DataSource.
     */
    TrainingDataSourceId?: EntityId;
    /**
     * The AWS user account from which the MLModel was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
     */
    CreatedByIamUser?: AwsUserArn;
    /**
     * The time that the MLModel was created. The time is expressed in epoch time.
     */
    CreatedAt?: EpochTime;
    /**
     * The time of the most recent edit to the MLModel. The time is expressed in epoch time.
     */
    LastUpdatedAt?: EpochTime;
    /**
     * A user-supplied name or description of the MLModel.
     */
    Name?: MLModelName;
    /**
     * The current status of the MLModel. This element can have one of the following values:   PENDING - Amazon Machine Learning (Amazon ML) submitted a request to describe a MLModel.  INPROGRESS - The request is processing.  FAILED - The request did not run to completion. The ML model isn't usable.  COMPLETED - The request completed successfully.  DELETED - The MLModel is marked as deleted. It isn't usable. 
     */
    Status?: EntityStatus;
    SizeInBytes?: LongType;
    /**
     * The current endpoint of the MLModel
     */
    EndpointInfo?: RealtimeEndpointInfo;
    /**
     * A list of the training parameters in the MLModel. The list is implemented as a map of key-value pairs. The following is the current set of training parameters:    sgd.maxMLModelSizeInBytes - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.  The value is an integer that ranges from 100000 to 2147483648. The default value is 33554432.  sgd.maxPasses - The number of times that the training process traverses the observations to build the MLModel. The value is an integer that ranges from 1 to 10000. The default value is 10. sgd.shuffleType - Whether Amazon ML shuffles the training data. Shuffling data improves a model's ability to find the optimal solution for a variety of data types. The valid values are auto and none. The default value is none. We strongly recommend that you shuffle your data.  sgd.l1RegularizationAmount - The coefficient regularization L1 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to zero, resulting in a sparse feature set. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L1 normalization. This parameter can't be used when L2 is specified. Use this parameter sparingly.   sgd.l2RegularizationAmount - The coefficient regularization L2 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L2 normalization. This parameter can't be used when L1 is specified. Use this parameter sparingly.  
     */
    TrainingParameters?: TrainingParameters;
    /**
     * The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).
     */
    InputDataLocationS3?: S3Url;
    /**
     * Identifies the MLModel category. The following are the available types:   REGRESSION -- Produces a numeric result. For example, "What price should a house be listed at?" BINARY -- Produces one of two possible results. For example, "Is this an e-commerce website?" MULTICLASS -- Produces one of several possible results. For example, "Is this a HIGH, LOW or MEDIUM risk trade?" 
     */
    MLModelType?: MLModelType;
    /**
     * The scoring threshold is used in binary classification MLModel models. It marks the boundary between a positive prediction and a negative prediction. Output values greater than or equal to the threshold receive a positive result from the MLModel, such as true. Output values less than the threshold receive a negative response from the MLModel, such as false.
     */
    ScoreThreshold?: ScoreThreshold;
    /**
     * The time of the most recent edit to the ScoreThreshold. The time is expressed in epoch time.
     */
    ScoreThresholdLastUpdatedAt?: EpochTime;
    /**
     * A link to the file that contains logs of the CreateMLModel operation.
     */
    LogUri?: PresignedS3Url;
    /**
     * A description of the most recent details about accessing the MLModel.
     */
    Message?: Message;
    /**
     * The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the MLModel, normalized and scaled on computation resources. ComputeTime is only available if the MLModel is in the COMPLETED state.
     */
    ComputeTime?: LongType;
    /**
     * The epoch time when Amazon Machine Learning marked the MLModel as COMPLETED or FAILED. FinishedAt is only available when the MLModel is in the COMPLETED or FAILED state.
     */
    FinishedAt?: EpochTime;
    /**
     * The epoch time when Amazon Machine Learning marked the MLModel as INPROGRESS. StartedAt isn't available if the MLModel is in the PENDING state.
     */
    StartedAt?: EpochTime;
    /**
     * The recipe to use when training the MLModel. The Recipe provides detailed information about the observation data to use during training, and manipulations to perform on the observation data during training. Note This parameter is provided as part of the verbose format.
     */
    Recipe?: Recipe;
    /**
     * The schema used by all of the data files referenced by the DataSource. Note This parameter is provided as part of the verbose format.
     */
    Schema?: DataSchema;
  }
  export type IntegerType = number;
  export type Label = string;
  export type LongType = number;
  export interface MLModel {
    /**
     * The ID assigned to the MLModel at creation.
     */
    MLModelId?: EntityId;
    /**
     * The ID of the training DataSource. The CreateMLModel operation uses the TrainingDataSourceId.
     */
    TrainingDataSourceId?: EntityId;
    /**
     * The AWS user account from which the MLModel was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
     */
    CreatedByIamUser?: AwsUserArn;
    /**
     * The time that the MLModel was created. The time is expressed in epoch time.
     */
    CreatedAt?: EpochTime;
    /**
     * The time of the most recent edit to the MLModel. The time is expressed in epoch time.
     */
    LastUpdatedAt?: EpochTime;
    /**
     * A user-supplied name or description of the MLModel.
     */
    Name?: MLModelName;
    /**
     * The current status of an MLModel. This element can have one of the following values:    PENDING - Amazon Machine Learning (Amazon ML) submitted a request to create an MLModel.  INPROGRESS - The creation process is underway.  FAILED - The request to create an MLModel didn't run to completion. The model isn't usable.  COMPLETED - The creation process completed successfully.  DELETED - The MLModel is marked as deleted. It isn't usable. 
     */
    Status?: EntityStatus;
    SizeInBytes?: LongType;
    /**
     * The current endpoint of the MLModel.
     */
    EndpointInfo?: RealtimeEndpointInfo;
    /**
     * A list of the training parameters in the MLModel. The list is implemented as a map of key-value pairs. The following is the current set of training parameters:    sgd.maxMLModelSizeInBytes - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.  The value is an integer that ranges from 100000 to 2147483648. The default value is 33554432.  sgd.maxPasses - The number of times that the training process traverses the observations to build the MLModel. The value is an integer that ranges from 1 to 10000. The default value is 10. sgd.shuffleType - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are auto and none. The default value is none.  sgd.l1RegularizationAmount - The coefficient regularization L1 norm, which controls overfitting the data by penalizing large coefficients. This parameter tends to drive coefficients to zero, resulting in sparse feature set. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L1 normalization. This parameter can't be used when L2 is specified. Use this parameter sparingly.   sgd.l2RegularizationAmount - The coefficient regularization L2 norm, which controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L2 normalization. This parameter can't be used when L1 is specified. Use this parameter sparingly.  
     */
    TrainingParameters?: TrainingParameters;
    /**
     * The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).
     */
    InputDataLocationS3?: S3Url;
    /**
     * The algorithm used to train the MLModel. The following algorithm is supported:   SGD -- Stochastic gradient descent. The goal of SGD is to minimize the gradient of the loss function.  
     */
    Algorithm?: Algorithm;
    /**
     * Identifies the MLModel category. The following are the available types:   REGRESSION - Produces a numeric result. For example, "What price should a house be listed at?"  BINARY - Produces one of two possible results. For example, "Is this a child-friendly web site?".  MULTICLASS - Produces one of several possible results. For example, "Is this a HIGH-, LOW-, or MEDIUM-risk trade?". 
     */
    MLModelType?: MLModelType;
    ScoreThreshold?: ScoreThreshold;
    /**
     * The time of the most recent edit to the ScoreThreshold. The time is expressed in epoch time.
     */
    ScoreThresholdLastUpdatedAt?: EpochTime;
    /**
     * A description of the most recent details about accessing the MLModel.
     */
    Message?: Message;
    ComputeTime?: LongType;
    FinishedAt?: EpochTime;
    StartedAt?: EpochTime;
  }
  export type MLModelFilterVariable = "CreatedAt"|"LastUpdatedAt"|"Status"|"Name"|"IAMUser"|"TrainingDataSourceId"|"RealtimeEndpointStatus"|"MLModelType"|"Algorithm"|"TrainingDataURI"|string;
  export type MLModelName = string;
  export type MLModelType = "REGRESSION"|"BINARY"|"MULTICLASS"|string;
  export type MLModels = MLModel[];
  export type Message = string;
  export type PageLimit = number;
  export interface PerformanceMetrics {
    Properties?: PerformanceMetricsProperties;
  }
  export type PerformanceMetricsProperties = {[key: string]: PerformanceMetricsPropertyValue};
  export type PerformanceMetricsPropertyKey = string;
  export type PerformanceMetricsPropertyValue = string;
  export interface PredictInput {
    /**
     * A unique identifier of the MLModel.
     */
    MLModelId: EntityId;
    Record: Record;
    PredictEndpoint: VipURL;
  }
  export interface PredictOutput {
    Prediction?: Prediction;
  }
  export interface Prediction {
    /**
     * The prediction label for either a BINARY or MULTICLASS MLModel.
     */
    predictedLabel?: Label;
    /**
     * The prediction value for REGRESSION MLModel.
     */
    predictedValue?: floatLabel;
    predictedScores?: ScoreValuePerLabelMap;
    details?: DetailsMap;
  }
  export type PresignedS3Url = string;
  export interface RDSDataSpec {
    /**
     * Describes the DatabaseName and InstanceIdentifier of an Amazon RDS database.
     */
    DatabaseInformation: RDSDatabase;
    /**
     * The query that is used to retrieve the observation data for the DataSource.
     */
    SelectSqlQuery: RDSSelectSqlQuery;
    /**
     * The AWS Identity and Access Management (IAM) credentials that are used connect to the Amazon RDS database.
     */
    DatabaseCredentials: RDSDatabaseCredentials;
    /**
     * The Amazon S3 location for staging Amazon RDS data. The data retrieved from Amazon RDS using SelectSqlQuery is stored in this location.
     */
    S3StagingLocation: S3Url;
    /**
     * A JSON string that represents the splitting and rearrangement processing to be applied to a DataSource. If the DataRearrangement parameter is not provided, all of the input data is used to create the Datasource. There are multiple parameters that control what data is used to create a datasource:  percentBegin Use percentBegin to indicate the beginning of the range of the data used to create the Datasource. If you do not include percentBegin and percentEnd, Amazon ML includes all of the data when creating the datasource. percentEnd Use percentEnd to indicate the end of the range of the data used to create the Datasource. If you do not include percentBegin and percentEnd, Amazon ML includes all of the data when creating the datasource. complement The complement parameter instructs Amazon ML to use the data that is not included in the range of percentBegin to percentEnd to create a datasource. The complement parameter is useful if you need to create complementary datasources for training and evaluation. To create a complementary datasource, use the same values for percentBegin and percentEnd, along with the complement parameter. For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data. Datasource for evaluation: {"splitting":{"percentBegin":0, "percentEnd":25}} Datasource for training: {"splitting":{"percentBegin":0, "percentEnd":25, "complement":"true"}}  strategy To change how Amazon ML splits the data for a datasource, use the strategy parameter. The default value for the strategy parameter is sequential, meaning that Amazon ML takes all of the data records between the percentBegin and percentEnd parameters for the datasource, in the order that the records appear in the input data. The following two DataRearrangement lines are examples of sequentially ordered training and evaluation datasources: Datasource for evaluation: {"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential"}} Datasource for training: {"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential", "complement":"true"}} To randomly split the input data into the proportions indicated by the percentBegin and percentEnd parameters, set the strategy parameter to random and provide a string that is used as the seed value for the random data splitting (for example, you can use the S3 path to your data as the random seed string). If you choose the random split strategy, Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned number between percentBegin and percentEnd. Pseudo-random numbers are assigned using both the input seed string value and the byte offset as a seed, so changing the data results in a different split. Any existing ordering is preserved. The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly. It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in training and evaluation datasources containing non-similar data records. The following two DataRearrangement lines are examples of non-sequentially ordered training and evaluation datasources: Datasource for evaluation: {"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv"}} Datasource for training: {"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv", "complement":"true"}}  
     */
    DataRearrangement?: DataRearrangement;
    /**
     * A JSON string that represents the schema for an Amazon RDS DataSource. The DataSchema defines the structure of the observation data in the data file(s) referenced in the DataSource. A DataSchema is not required if you specify a DataSchemaUri Define your DataSchema as a series of key-value pairs. attributes and excludedVariableNames have an array of key-value pairs for their value. Use the following format to define your DataSchema. { "version": "1.0",  "recordAnnotationFieldName": "F1",  "recordWeightFieldName": "F2",  "targetFieldName": "F3",  "dataFormat": "CSV",  "dataFileContainsHeader": true,  "attributes": [  { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ],  "excludedVariableNames": [ "F6" ] }  
     */
    DataSchema?: DataSchema;
    /**
     * The Amazon S3 location of the DataSchema. 
     */
    DataSchemaUri?: S3Url;
    /**
     * The role (DataPipelineDefaultResourceRole) assumed by an Amazon Elastic Compute Cloud (Amazon EC2) instance to carry out the copy operation from Amazon RDS to an Amazon S3 task. For more information, see Role templates for data pipelines.
     */
    ResourceRole: EDPResourceRole;
    /**
     * The role (DataPipelineDefaultRole) assumed by AWS Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see Role templates for data pipelines.
     */
    ServiceRole: EDPServiceRole;
    /**
     * The subnet ID to be used to access a VPC-based RDS DB instance. This attribute is used by Data Pipeline to carry out the copy task from Amazon RDS to Amazon S3.
     */
    SubnetId: EDPSubnetId;
    /**
     * The security group IDs to be used to access a VPC-based RDS DB instance. Ensure that there are appropriate ingress rules set up to allow access to the RDS DB instance. This attribute is used by Data Pipeline to carry out the copy operation from Amazon RDS to an Amazon S3 task.
     */
    SecurityGroupIds: EDPSecurityGroupIds;
  }
  export interface RDSDatabase {
    /**
     * The ID of an RDS DB instance.
     */
    InstanceIdentifier: RDSInstanceIdentifier;
    DatabaseName: RDSDatabaseName;
  }
  export interface RDSDatabaseCredentials {
    Username: RDSDatabaseUsername;
    Password: RDSDatabasePassword;
  }
  export type RDSDatabaseName = string;
  export type RDSDatabasePassword = string;
  export type RDSDatabaseUsername = string;
  export type RDSInstanceIdentifier = string;
  export interface RDSMetadata {
    /**
     * The database details required to connect to an Amazon RDS.
     */
    Database?: RDSDatabase;
    DatabaseUserName?: RDSDatabaseUsername;
    /**
     * The SQL query that is supplied during CreateDataSourceFromRDS. Returns only if Verbose is true in GetDataSourceInput. 
     */
    SelectSqlQuery?: RDSSelectSqlQuery;
    /**
     * The role (DataPipelineDefaultResourceRole) assumed by an Amazon EC2 instance to carry out the copy task from Amazon RDS to Amazon S3. For more information, see Role templates for data pipelines.
     */
    ResourceRole?: EDPResourceRole;
    /**
     * The role (DataPipelineDefaultRole) assumed by the Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see Role templates for data pipelines.
     */
    ServiceRole?: EDPServiceRole;
    /**
     * The ID of the Data Pipeline instance that is used to carry to copy data from Amazon RDS to Amazon S3. You can use the ID to find details about the instance in the Data Pipeline console.
     */
    DataPipelineId?: EDPPipelineId;
  }
  export type RDSSelectSqlQuery = string;
  export interface RealtimeEndpointInfo {
    /**
     *  The maximum processing rate for the real-time endpoint for MLModel, measured in incoming requests per second.
     */
    PeakRequestsPerSecond?: IntegerType;
    /**
     * The time that the request to create the real-time endpoint for the MLModel was received. The time is expressed in epoch time.
     */
    CreatedAt?: EpochTime;
    /**
     * The URI that specifies where to send real-time prediction requests for the MLModel. Note The application must wait until the real-time endpoint is ready before using this URI. 
     */
    EndpointUrl?: VipURL;
    /**
     *  The current status of the real-time endpoint for the MLModel. This element can have one of the following values:    NONE - Endpoint does not exist or was previously deleted.  READY - Endpoint is ready to be used for real-time predictions.  UPDATING - Updating/creating the endpoint.  
     */
    EndpointStatus?: RealtimeEndpointStatus;
  }
  export type RealtimeEndpointStatus = "NONE"|"READY"|"UPDATING"|"FAILED"|string;
  export type Recipe = string;
  export type Record = {[key: string]: VariableValue};
  export type RedshiftClusterIdentifier = string;
  export interface RedshiftDataSpec {
    /**
     * Describes the DatabaseName and ClusterIdentifier for an Amazon Redshift DataSource.
     */
    DatabaseInformation: RedshiftDatabase;
    /**
     * Describes the SQL Query to execute on an Amazon Redshift database for an Amazon Redshift DataSource.
     */
    SelectSqlQuery: RedshiftSelectSqlQuery;
    /**
     * Describes AWS Identity and Access Management (IAM) credentials that are used connect to the Amazon Redshift database.
     */
    DatabaseCredentials: RedshiftDatabaseCredentials;
    /**
     * Describes an Amazon S3 location to store the result set of the SelectSqlQuery query.
     */
    S3StagingLocation: S3Url;
    /**
     * A JSON string that represents the splitting and rearrangement processing to be applied to a DataSource. If the DataRearrangement parameter is not provided, all of the input data is used to create the Datasource. There are multiple parameters that control what data is used to create a datasource:  percentBegin Use percentBegin to indicate the beginning of the range of the data used to create the Datasource. If you do not include percentBegin and percentEnd, Amazon ML includes all of the data when creating the datasource. percentEnd Use percentEnd to indicate the end of the range of the data used to create the Datasource. If you do not include percentBegin and percentEnd, Amazon ML includes all of the data when creating the datasource. complement The complement parameter instructs Amazon ML to use the data that is not included in the range of percentBegin to percentEnd to create a datasource. The complement parameter is useful if you need to create complementary datasources for training and evaluation. To create a complementary datasource, use the same values for percentBegin and percentEnd, along with the complement parameter. For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data. Datasource for evaluation: {"splitting":{"percentBegin":0, "percentEnd":25}} Datasource for training: {"splitting":{"percentBegin":0, "percentEnd":25, "complement":"true"}}  strategy To change how Amazon ML splits the data for a datasource, use the strategy parameter. The default value for the strategy parameter is sequential, meaning that Amazon ML takes all of the data records between the percentBegin and percentEnd parameters for the datasource, in the order that the records appear in the input data. The following two DataRearrangement lines are examples of sequentially ordered training and evaluation datasources: Datasource for evaluation: {"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential"}} Datasource for training: {"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential", "complement":"true"}} To randomly split the input data into the proportions indicated by the percentBegin and percentEnd parameters, set the strategy parameter to random and provide a string that is used as the seed value for the random data splitting (for example, you can use the S3 path to your data as the random seed string). If you choose the random split strategy, Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned number between percentBegin and percentEnd. Pseudo-random numbers are assigned using both the input seed string value and the byte offset as a seed, so changing the data results in a different split. Any existing ordering is preserved. The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly. It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in training and evaluation datasources containing non-similar data records. The following two DataRearrangement lines are examples of non-sequentially ordered training and evaluation datasources: Datasource for evaluation: {"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv"}} Datasource for training: {"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv", "complement":"true"}}  
     */
    DataRearrangement?: DataRearrangement;
    /**
     * A JSON string that represents the schema for an Amazon Redshift DataSource. The DataSchema defines the structure of the observation data in the data file(s) referenced in the DataSource. A DataSchema is not required if you specify a DataSchemaUri. Define your DataSchema as a series of key-value pairs. attributes and excludedVariableNames have an array of key-value pairs for their value. Use the following format to define your DataSchema. { "version": "1.0",  "recordAnnotationFieldName": "F1",  "recordWeightFieldName": "F2",  "targetFieldName": "F3",  "dataFormat": "CSV",  "dataFileContainsHeader": true,  "attributes": [  { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ],  "excludedVariableNames": [ "F6" ] } 
     */
    DataSchema?: DataSchema;
    /**
     * Describes the schema location for an Amazon Redshift DataSource.
     */
    DataSchemaUri?: S3Url;
  }
  export interface RedshiftDatabase {
    DatabaseName: RedshiftDatabaseName;
    ClusterIdentifier: RedshiftClusterIdentifier;
  }
  export interface RedshiftDatabaseCredentials {
    Username: RedshiftDatabaseUsername;
    Password: RedshiftDatabasePassword;
  }
  export type RedshiftDatabaseName = string;
  export type RedshiftDatabasePassword = string;
  export type RedshiftDatabaseUsername = string;
  export interface RedshiftMetadata {
    RedshiftDatabase?: RedshiftDatabase;
    DatabaseUserName?: RedshiftDatabaseUsername;
    /**
     *  The SQL query that is specified during CreateDataSourceFromRedshift. Returns only if Verbose is true in GetDataSourceInput. 
     */
    SelectSqlQuery?: RedshiftSelectSqlQuery;
  }
  export type RedshiftSelectSqlQuery = string;
  export type RoleARN = string;
  export interface S3DataSpec {
    /**
     * The location of the data file(s) used by a DataSource. The URI specifies a data file or an Amazon Simple Storage Service (Amazon S3) directory or bucket containing data files.
     */
    DataLocationS3: S3Url;
    /**
     * A JSON string that represents the splitting and rearrangement processing to be applied to a DataSource. If the DataRearrangement parameter is not provided, all of the input data is used to create the Datasource. There are multiple parameters that control what data is used to create a datasource:  percentBegin Use percentBegin to indicate the beginning of the range of the data used to create the Datasource. If you do not include percentBegin and percentEnd, Amazon ML includes all of the data when creating the datasource. percentEnd Use percentEnd to indicate the end of the range of the data used to create the Datasource. If you do not include percentBegin and percentEnd, Amazon ML includes all of the data when creating the datasource. complement The complement parameter instructs Amazon ML to use the data that is not included in the range of percentBegin to percentEnd to create a datasource. The complement parameter is useful if you need to create complementary datasources for training and evaluation. To create a complementary datasource, use the same values for percentBegin and percentEnd, along with the complement parameter. For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data. Datasource for evaluation: {"splitting":{"percentBegin":0, "percentEnd":25}} Datasource for training: {"splitting":{"percentBegin":0, "percentEnd":25, "complement":"true"}}  strategy To change how Amazon ML splits the data for a datasource, use the strategy parameter. The default value for the strategy parameter is sequential, meaning that Amazon ML takes all of the data records between the percentBegin and percentEnd parameters for the datasource, in the order that the records appear in the input data. The following two DataRearrangement lines are examples of sequentially ordered training and evaluation datasources: Datasource for evaluation: {"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential"}} Datasource for training: {"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential", "complement":"true"}} To randomly split the input data into the proportions indicated by the percentBegin and percentEnd parameters, set the strategy parameter to random and provide a string that is used as the seed value for the random data splitting (for example, you can use the S3 path to your data as the random seed string). If you choose the random split strategy, Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned number between percentBegin and percentEnd. Pseudo-random numbers are assigned using both the input seed string value and the byte offset as a seed, so changing the data results in a different split. Any existing ordering is preserved. The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly. It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in training and evaluation datasources containing non-similar data records. The following two DataRearrangement lines are examples of non-sequentially ordered training and evaluation datasources: Datasource for evaluation: {"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv"}} Datasource for training: {"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv", "complement":"true"}}  
     */
    DataRearrangement?: DataRearrangement;
    /**
     *  A JSON string that represents the schema for an Amazon S3 DataSource. The DataSchema defines the structure of the observation data in the data file(s) referenced in the DataSource. You must provide either the DataSchema or the DataSchemaLocationS3. Define your DataSchema as a series of key-value pairs. attributes and excludedVariableNames have an array of key-value pairs for their value. Use the following format to define your DataSchema. { "version": "1.0",  "recordAnnotationFieldName": "F1",  "recordWeightFieldName": "F2",  "targetFieldName": "F3",  "dataFormat": "CSV",  "dataFileContainsHeader": true,  "attributes": [  { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ],  "excludedVariableNames": [ "F6" ] }  
     */
    DataSchema?: DataSchema;
    /**
     * Describes the schema location in Amazon S3. You must provide either the DataSchema or the DataSchemaLocationS3.
     */
    DataSchemaLocationS3?: S3Url;
  }
  export type S3Url = string;
  export type ScoreThreshold = number;
  export type ScoreValue = number;
  export type ScoreValuePerLabelMap = {[key: string]: ScoreValue};
  export type SortOrder = "asc"|"dsc"|string;
  export type StringType = string;
  export interface Tag {
    /**
     * A unique identifier for the tag. Valid characters include Unicode letters, digits, white space, _, ., /, =, +, -, %, and @.
     */
    Key?: TagKey;
    /**
     * An optional string, typically used to describe or define the tag. Valid characters include Unicode letters, digits, white space, _, ., /, =, +, -, %, and @.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export type TagValue = string;
  export type TaggableResourceType = "BatchPrediction"|"DataSource"|"Evaluation"|"MLModel"|string;
  export type TrainingParameters = {[key: string]: StringType};
  export interface UpdateBatchPredictionInput {
    /**
     * The ID assigned to the BatchPrediction during creation.
     */
    BatchPredictionId: EntityId;
    /**
     * A new user-supplied name or description of the BatchPrediction.
     */
    BatchPredictionName: EntityName;
  }
  export interface UpdateBatchPredictionOutput {
    /**
     * The ID assigned to the BatchPrediction during creation. This value should be identical to the value of the BatchPredictionId in the request.
     */
    BatchPredictionId?: EntityId;
  }
  export interface UpdateDataSourceInput {
    /**
     * The ID assigned to the DataSource during creation.
     */
    DataSourceId: EntityId;
    /**
     * A new user-supplied name or description of the DataSource that will replace the current description. 
     */
    DataSourceName: EntityName;
  }
  export interface UpdateDataSourceOutput {
    /**
     * The ID assigned to the DataSource during creation. This value should be identical to the value of the DataSourceID in the request.
     */
    DataSourceId?: EntityId;
  }
  export interface UpdateEvaluationInput {
    /**
     * The ID assigned to the Evaluation during creation.
     */
    EvaluationId: EntityId;
    /**
     * A new user-supplied name or description of the Evaluation that will replace the current content. 
     */
    EvaluationName: EntityName;
  }
  export interface UpdateEvaluationOutput {
    /**
     * The ID assigned to the Evaluation during creation. This value should be identical to the value of the Evaluation in the request.
     */
    EvaluationId?: EntityId;
  }
  export interface UpdateMLModelInput {
    /**
     * The ID assigned to the MLModel during creation.
     */
    MLModelId: EntityId;
    /**
     * A user-supplied name or description of the MLModel.
     */
    MLModelName?: EntityName;
    /**
     * The ScoreThreshold used in binary classification MLModel that marks the boundary between a positive prediction and a negative prediction. Output values greater than or equal to the ScoreThreshold receive a positive result from the MLModel, such as true. Output values less than the ScoreThreshold receive a negative response from the MLModel, such as false.
     */
    ScoreThreshold?: ScoreThreshold;
  }
  export interface UpdateMLModelOutput {
    /**
     * The ID assigned to the MLModel during creation. This value should be identical to the value of the MLModelID in the request.
     */
    MLModelId?: EntityId;
  }
  export type VariableName = string;
  export type VariableValue = string;
  export type Verbose = boolean;
  export type VipURL = string;
  export type floatLabel = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-12-12"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MachineLearning client.
   */
  export import Types = MachineLearning;
}
export = MachineLearning;
