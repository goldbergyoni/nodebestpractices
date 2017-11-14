import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class APIGateway extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: APIGateway.Types.ClientConfiguration)
  config: Config & APIGateway.Types.ClientConfiguration;
  /**
   * Create an ApiKey resource.  AWS CLI
   */
  createApiKey(params: APIGateway.Types.CreateApiKeyRequest, callback?: (err: AWSError, data: APIGateway.Types.ApiKey) => void): Request<APIGateway.Types.ApiKey, AWSError>;
  /**
   * Create an ApiKey resource.  AWS CLI
   */
  createApiKey(callback?: (err: AWSError, data: APIGateway.Types.ApiKey) => void): Request<APIGateway.Types.ApiKey, AWSError>;
  /**
   * Adds a new Authorizer resource to an existing RestApi resource. AWS CLI
   */
  createAuthorizer(params: APIGateway.Types.CreateAuthorizerRequest, callback?: (err: AWSError, data: APIGateway.Types.Authorizer) => void): Request<APIGateway.Types.Authorizer, AWSError>;
  /**
   * Adds a new Authorizer resource to an existing RestApi resource. AWS CLI
   */
  createAuthorizer(callback?: (err: AWSError, data: APIGateway.Types.Authorizer) => void): Request<APIGateway.Types.Authorizer, AWSError>;
  /**
   * Creates a new BasePathMapping resource.
   */
  createBasePathMapping(params: APIGateway.Types.CreateBasePathMappingRequest, callback?: (err: AWSError, data: APIGateway.Types.BasePathMapping) => void): Request<APIGateway.Types.BasePathMapping, AWSError>;
  /**
   * Creates a new BasePathMapping resource.
   */
  createBasePathMapping(callback?: (err: AWSError, data: APIGateway.Types.BasePathMapping) => void): Request<APIGateway.Types.BasePathMapping, AWSError>;
  /**
   * Creates a Deployment resource, which makes a specified RestApi callable over the internet.
   */
  createDeployment(params: APIGateway.Types.CreateDeploymentRequest, callback?: (err: AWSError, data: APIGateway.Types.Deployment) => void): Request<APIGateway.Types.Deployment, AWSError>;
  /**
   * Creates a Deployment resource, which makes a specified RestApi callable over the internet.
   */
  createDeployment(callback?: (err: AWSError, data: APIGateway.Types.Deployment) => void): Request<APIGateway.Types.Deployment, AWSError>;
  /**
   * 
   */
  createDocumentationPart(params: APIGateway.Types.CreateDocumentationPartRequest, callback?: (err: AWSError, data: APIGateway.Types.DocumentationPart) => void): Request<APIGateway.Types.DocumentationPart, AWSError>;
  /**
   * 
   */
  createDocumentationPart(callback?: (err: AWSError, data: APIGateway.Types.DocumentationPart) => void): Request<APIGateway.Types.DocumentationPart, AWSError>;
  /**
   * 
   */
  createDocumentationVersion(params: APIGateway.Types.CreateDocumentationVersionRequest, callback?: (err: AWSError, data: APIGateway.Types.DocumentationVersion) => void): Request<APIGateway.Types.DocumentationVersion, AWSError>;
  /**
   * 
   */
  createDocumentationVersion(callback?: (err: AWSError, data: APIGateway.Types.DocumentationVersion) => void): Request<APIGateway.Types.DocumentationVersion, AWSError>;
  /**
   * Creates a new domain name.
   */
  createDomainName(params: APIGateway.Types.CreateDomainNameRequest, callback?: (err: AWSError, data: APIGateway.Types.DomainName) => void): Request<APIGateway.Types.DomainName, AWSError>;
  /**
   * Creates a new domain name.
   */
  createDomainName(callback?: (err: AWSError, data: APIGateway.Types.DomainName) => void): Request<APIGateway.Types.DomainName, AWSError>;
  /**
   * Adds a new Model resource to an existing RestApi resource.
   */
  createModel(params: APIGateway.Types.CreateModelRequest, callback?: (err: AWSError, data: APIGateway.Types.Model) => void): Request<APIGateway.Types.Model, AWSError>;
  /**
   * Adds a new Model resource to an existing RestApi resource.
   */
  createModel(callback?: (err: AWSError, data: APIGateway.Types.Model) => void): Request<APIGateway.Types.Model, AWSError>;
  /**
   * Creates a ReqeustValidator of a given RestApi.
   */
  createRequestValidator(params: APIGateway.Types.CreateRequestValidatorRequest, callback?: (err: AWSError, data: APIGateway.Types.RequestValidator) => void): Request<APIGateway.Types.RequestValidator, AWSError>;
  /**
   * Creates a ReqeustValidator of a given RestApi.
   */
  createRequestValidator(callback?: (err: AWSError, data: APIGateway.Types.RequestValidator) => void): Request<APIGateway.Types.RequestValidator, AWSError>;
  /**
   * Creates a Resource resource.
   */
  createResource(params: APIGateway.Types.CreateResourceRequest, callback?: (err: AWSError, data: APIGateway.Types.Resource) => void): Request<APIGateway.Types.Resource, AWSError>;
  /**
   * Creates a Resource resource.
   */
  createResource(callback?: (err: AWSError, data: APIGateway.Types.Resource) => void): Request<APIGateway.Types.Resource, AWSError>;
  /**
   * Creates a new RestApi resource.
   */
  createRestApi(params: APIGateway.Types.CreateRestApiRequest, callback?: (err: AWSError, data: APIGateway.Types.RestApi) => void): Request<APIGateway.Types.RestApi, AWSError>;
  /**
   * Creates a new RestApi resource.
   */
  createRestApi(callback?: (err: AWSError, data: APIGateway.Types.RestApi) => void): Request<APIGateway.Types.RestApi, AWSError>;
  /**
   * Creates a new Stage resource that references a pre-existing Deployment for the API. 
   */
  createStage(params: APIGateway.Types.CreateStageRequest, callback?: (err: AWSError, data: APIGateway.Types.Stage) => void): Request<APIGateway.Types.Stage, AWSError>;
  /**
   * Creates a new Stage resource that references a pre-existing Deployment for the API. 
   */
  createStage(callback?: (err: AWSError, data: APIGateway.Types.Stage) => void): Request<APIGateway.Types.Stage, AWSError>;
  /**
   * Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. 
   */
  createUsagePlan(params: APIGateway.Types.CreateUsagePlanRequest, callback?: (err: AWSError, data: APIGateway.Types.UsagePlan) => void): Request<APIGateway.Types.UsagePlan, AWSError>;
  /**
   * Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. 
   */
  createUsagePlan(callback?: (err: AWSError, data: APIGateway.Types.UsagePlan) => void): Request<APIGateway.Types.UsagePlan, AWSError>;
  /**
   * Creates a usage plan key for adding an existing API key to a usage plan.
   */
  createUsagePlanKey(params: APIGateway.Types.CreateUsagePlanKeyRequest, callback?: (err: AWSError, data: APIGateway.Types.UsagePlanKey) => void): Request<APIGateway.Types.UsagePlanKey, AWSError>;
  /**
   * Creates a usage plan key for adding an existing API key to a usage plan.
   */
  createUsagePlanKey(callback?: (err: AWSError, data: APIGateway.Types.UsagePlanKey) => void): Request<APIGateway.Types.UsagePlanKey, AWSError>;
  /**
   * Deletes the ApiKey resource.
   */
  deleteApiKey(params: APIGateway.Types.DeleteApiKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the ApiKey resource.
   */
  deleteApiKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing Authorizer resource. AWS CLI
   */
  deleteAuthorizer(params: APIGateway.Types.DeleteAuthorizerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing Authorizer resource. AWS CLI
   */
  deleteAuthorizer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the BasePathMapping resource.
   */
  deleteBasePathMapping(params: APIGateway.Types.DeleteBasePathMappingRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the BasePathMapping resource.
   */
  deleteBasePathMapping(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the ClientCertificate resource.
   */
  deleteClientCertificate(params: APIGateway.Types.DeleteClientCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the ClientCertificate resource.
   */
  deleteClientCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Deployment resource. Deleting a deployment will only succeed if there are no Stage resources associated with it.
   */
  deleteDeployment(params: APIGateway.Types.DeleteDeploymentRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Deployment resource. Deleting a deployment will only succeed if there are no Stage resources associated with it.
   */
  deleteDeployment(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteDocumentationPart(params: APIGateway.Types.DeleteDocumentationPartRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteDocumentationPart(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteDocumentationVersion(params: APIGateway.Types.DeleteDocumentationVersionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteDocumentationVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the DomainName resource.
   */
  deleteDomainName(params: APIGateway.Types.DeleteDomainNameRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the DomainName resource.
   */
  deleteDomainName(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings.
   */
  deleteGatewayResponse(params: APIGateway.Types.DeleteGatewayResponseRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings.
   */
  deleteGatewayResponse(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Represents a delete integration.
   */
  deleteIntegration(params: APIGateway.Types.DeleteIntegrationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Represents a delete integration.
   */
  deleteIntegration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Represents a delete integration response.
   */
  deleteIntegrationResponse(params: APIGateway.Types.DeleteIntegrationResponseRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Represents a delete integration response.
   */
  deleteIntegrationResponse(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing Method resource.
   */
  deleteMethod(params: APIGateway.Types.DeleteMethodRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing Method resource.
   */
  deleteMethod(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing MethodResponse resource.
   */
  deleteMethodResponse(params: APIGateway.Types.DeleteMethodResponseRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing MethodResponse resource.
   */
  deleteMethodResponse(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a model.
   */
  deleteModel(params: APIGateway.Types.DeleteModelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a model.
   */
  deleteModel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a RequestValidator of a given RestApi.
   */
  deleteRequestValidator(params: APIGateway.Types.DeleteRequestValidatorRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a RequestValidator of a given RestApi.
   */
  deleteRequestValidator(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Resource resource.
   */
  deleteResource(params: APIGateway.Types.DeleteResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Resource resource.
   */
  deleteResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified API.
   */
  deleteRestApi(params: APIGateway.Types.DeleteRestApiRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified API.
   */
  deleteRestApi(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Stage resource.
   */
  deleteStage(params: APIGateway.Types.DeleteStageRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Stage resource.
   */
  deleteStage(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a usage plan of a given plan Id.
   */
  deleteUsagePlan(params: APIGateway.Types.DeleteUsagePlanRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a usage plan of a given plan Id.
   */
  deleteUsagePlan(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a usage plan key and remove the underlying API key from the associated usage plan.
   */
  deleteUsagePlanKey(params: APIGateway.Types.DeleteUsagePlanKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a usage plan key and remove the underlying API key from the associated usage plan.
   */
  deleteUsagePlanKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Flushes all authorizer cache entries on a stage.
   */
  flushStageAuthorizersCache(params: APIGateway.Types.FlushStageAuthorizersCacheRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Flushes all authorizer cache entries on a stage.
   */
  flushStageAuthorizersCache(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Flushes a stage's cache.
   */
  flushStageCache(params: APIGateway.Types.FlushStageCacheRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Flushes a stage's cache.
   */
  flushStageCache(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Generates a ClientCertificate resource.
   */
  generateClientCertificate(params: APIGateway.Types.GenerateClientCertificateRequest, callback?: (err: AWSError, data: APIGateway.Types.ClientCertificate) => void): Request<APIGateway.Types.ClientCertificate, AWSError>;
  /**
   * Generates a ClientCertificate resource.
   */
  generateClientCertificate(callback?: (err: AWSError, data: APIGateway.Types.ClientCertificate) => void): Request<APIGateway.Types.ClientCertificate, AWSError>;
  /**
   * Gets information about the current Account resource.
   */
  getAccount(params: APIGateway.Types.GetAccountRequest, callback?: (err: AWSError, data: APIGateway.Types.Account) => void): Request<APIGateway.Types.Account, AWSError>;
  /**
   * Gets information about the current Account resource.
   */
  getAccount(callback?: (err: AWSError, data: APIGateway.Types.Account) => void): Request<APIGateway.Types.Account, AWSError>;
  /**
   * Gets information about the current ApiKey resource.
   */
  getApiKey(params: APIGateway.Types.GetApiKeyRequest, callback?: (err: AWSError, data: APIGateway.Types.ApiKey) => void): Request<APIGateway.Types.ApiKey, AWSError>;
  /**
   * Gets information about the current ApiKey resource.
   */
  getApiKey(callback?: (err: AWSError, data: APIGateway.Types.ApiKey) => void): Request<APIGateway.Types.ApiKey, AWSError>;
  /**
   * Gets information about the current ApiKeys resource.
   */
  getApiKeys(params: APIGateway.Types.GetApiKeysRequest, callback?: (err: AWSError, data: APIGateway.Types.ApiKeys) => void): Request<APIGateway.Types.ApiKeys, AWSError>;
  /**
   * Gets information about the current ApiKeys resource.
   */
  getApiKeys(callback?: (err: AWSError, data: APIGateway.Types.ApiKeys) => void): Request<APIGateway.Types.ApiKeys, AWSError>;
  /**
   * Describe an existing Authorizer resource. AWS CLI
   */
  getAuthorizer(params: APIGateway.Types.GetAuthorizerRequest, callback?: (err: AWSError, data: APIGateway.Types.Authorizer) => void): Request<APIGateway.Types.Authorizer, AWSError>;
  /**
   * Describe an existing Authorizer resource. AWS CLI
   */
  getAuthorizer(callback?: (err: AWSError, data: APIGateway.Types.Authorizer) => void): Request<APIGateway.Types.Authorizer, AWSError>;
  /**
   * Describe an existing Authorizers resource. AWS CLI
   */
  getAuthorizers(params: APIGateway.Types.GetAuthorizersRequest, callback?: (err: AWSError, data: APIGateway.Types.Authorizers) => void): Request<APIGateway.Types.Authorizers, AWSError>;
  /**
   * Describe an existing Authorizers resource. AWS CLI
   */
  getAuthorizers(callback?: (err: AWSError, data: APIGateway.Types.Authorizers) => void): Request<APIGateway.Types.Authorizers, AWSError>;
  /**
   * Describe a BasePathMapping resource.
   */
  getBasePathMapping(params: APIGateway.Types.GetBasePathMappingRequest, callback?: (err: AWSError, data: APIGateway.Types.BasePathMapping) => void): Request<APIGateway.Types.BasePathMapping, AWSError>;
  /**
   * Describe a BasePathMapping resource.
   */
  getBasePathMapping(callback?: (err: AWSError, data: APIGateway.Types.BasePathMapping) => void): Request<APIGateway.Types.BasePathMapping, AWSError>;
  /**
   * Represents a collection of BasePathMapping resources.
   */
  getBasePathMappings(params: APIGateway.Types.GetBasePathMappingsRequest, callback?: (err: AWSError, data: APIGateway.Types.BasePathMappings) => void): Request<APIGateway.Types.BasePathMappings, AWSError>;
  /**
   * Represents a collection of BasePathMapping resources.
   */
  getBasePathMappings(callback?: (err: AWSError, data: APIGateway.Types.BasePathMappings) => void): Request<APIGateway.Types.BasePathMappings, AWSError>;
  /**
   * Gets information about the current ClientCertificate resource.
   */
  getClientCertificate(params: APIGateway.Types.GetClientCertificateRequest, callback?: (err: AWSError, data: APIGateway.Types.ClientCertificate) => void): Request<APIGateway.Types.ClientCertificate, AWSError>;
  /**
   * Gets information about the current ClientCertificate resource.
   */
  getClientCertificate(callback?: (err: AWSError, data: APIGateway.Types.ClientCertificate) => void): Request<APIGateway.Types.ClientCertificate, AWSError>;
  /**
   * Gets a collection of ClientCertificate resources.
   */
  getClientCertificates(params: APIGateway.Types.GetClientCertificatesRequest, callback?: (err: AWSError, data: APIGateway.Types.ClientCertificates) => void): Request<APIGateway.Types.ClientCertificates, AWSError>;
  /**
   * Gets a collection of ClientCertificate resources.
   */
  getClientCertificates(callback?: (err: AWSError, data: APIGateway.Types.ClientCertificates) => void): Request<APIGateway.Types.ClientCertificates, AWSError>;
  /**
   * Gets information about a Deployment resource.
   */
  getDeployment(params: APIGateway.Types.GetDeploymentRequest, callback?: (err: AWSError, data: APIGateway.Types.Deployment) => void): Request<APIGateway.Types.Deployment, AWSError>;
  /**
   * Gets information about a Deployment resource.
   */
  getDeployment(callback?: (err: AWSError, data: APIGateway.Types.Deployment) => void): Request<APIGateway.Types.Deployment, AWSError>;
  /**
   * Gets information about a Deployments collection.
   */
  getDeployments(params: APIGateway.Types.GetDeploymentsRequest, callback?: (err: AWSError, data: APIGateway.Types.Deployments) => void): Request<APIGateway.Types.Deployments, AWSError>;
  /**
   * Gets information about a Deployments collection.
   */
  getDeployments(callback?: (err: AWSError, data: APIGateway.Types.Deployments) => void): Request<APIGateway.Types.Deployments, AWSError>;
  /**
   * 
   */
  getDocumentationPart(params: APIGateway.Types.GetDocumentationPartRequest, callback?: (err: AWSError, data: APIGateway.Types.DocumentationPart) => void): Request<APIGateway.Types.DocumentationPart, AWSError>;
  /**
   * 
   */
  getDocumentationPart(callback?: (err: AWSError, data: APIGateway.Types.DocumentationPart) => void): Request<APIGateway.Types.DocumentationPart, AWSError>;
  /**
   * 
   */
  getDocumentationParts(params: APIGateway.Types.GetDocumentationPartsRequest, callback?: (err: AWSError, data: APIGateway.Types.DocumentationParts) => void): Request<APIGateway.Types.DocumentationParts, AWSError>;
  /**
   * 
   */
  getDocumentationParts(callback?: (err: AWSError, data: APIGateway.Types.DocumentationParts) => void): Request<APIGateway.Types.DocumentationParts, AWSError>;
  /**
   * 
   */
  getDocumentationVersion(params: APIGateway.Types.GetDocumentationVersionRequest, callback?: (err: AWSError, data: APIGateway.Types.DocumentationVersion) => void): Request<APIGateway.Types.DocumentationVersion, AWSError>;
  /**
   * 
   */
  getDocumentationVersion(callback?: (err: AWSError, data: APIGateway.Types.DocumentationVersion) => void): Request<APIGateway.Types.DocumentationVersion, AWSError>;
  /**
   * 
   */
  getDocumentationVersions(params: APIGateway.Types.GetDocumentationVersionsRequest, callback?: (err: AWSError, data: APIGateway.Types.DocumentationVersions) => void): Request<APIGateway.Types.DocumentationVersions, AWSError>;
  /**
   * 
   */
  getDocumentationVersions(callback?: (err: AWSError, data: APIGateway.Types.DocumentationVersions) => void): Request<APIGateway.Types.DocumentationVersions, AWSError>;
  /**
   * Represents a domain name that is contained in a simpler, more intuitive URL that can be called.
   */
  getDomainName(params: APIGateway.Types.GetDomainNameRequest, callback?: (err: AWSError, data: APIGateway.Types.DomainName) => void): Request<APIGateway.Types.DomainName, AWSError>;
  /**
   * Represents a domain name that is contained in a simpler, more intuitive URL that can be called.
   */
  getDomainName(callback?: (err: AWSError, data: APIGateway.Types.DomainName) => void): Request<APIGateway.Types.DomainName, AWSError>;
  /**
   * Represents a collection of DomainName resources.
   */
  getDomainNames(params: APIGateway.Types.GetDomainNamesRequest, callback?: (err: AWSError, data: APIGateway.Types.DomainNames) => void): Request<APIGateway.Types.DomainNames, AWSError>;
  /**
   * Represents a collection of DomainName resources.
   */
  getDomainNames(callback?: (err: AWSError, data: APIGateway.Types.DomainNames) => void): Request<APIGateway.Types.DomainNames, AWSError>;
  /**
   * Exports a deployed version of a RestApi in a specified format.
   */
  getExport(params: APIGateway.Types.GetExportRequest, callback?: (err: AWSError, data: APIGateway.Types.ExportResponse) => void): Request<APIGateway.Types.ExportResponse, AWSError>;
  /**
   * Exports a deployed version of a RestApi in a specified format.
   */
  getExport(callback?: (err: AWSError, data: APIGateway.Types.ExportResponse) => void): Request<APIGateway.Types.ExportResponse, AWSError>;
  /**
   * Gets a GatewayResponse of a specified response type on the given RestApi.
   */
  getGatewayResponse(params: APIGateway.Types.GetGatewayResponseRequest, callback?: (err: AWSError, data: APIGateway.Types.GatewayResponse) => void): Request<APIGateway.Types.GatewayResponse, AWSError>;
  /**
   * Gets a GatewayResponse of a specified response type on the given RestApi.
   */
  getGatewayResponse(callback?: (err: AWSError, data: APIGateway.Types.GatewayResponse) => void): Request<APIGateway.Types.GatewayResponse, AWSError>;
  /**
   * Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the Amazon API Gateway-generated default GatewayResponses collection for the supported response types.
   */
  getGatewayResponses(params: APIGateway.Types.GetGatewayResponsesRequest, callback?: (err: AWSError, data: APIGateway.Types.GatewayResponses) => void): Request<APIGateway.Types.GatewayResponses, AWSError>;
  /**
   * Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the Amazon API Gateway-generated default GatewayResponses collection for the supported response types.
   */
  getGatewayResponses(callback?: (err: AWSError, data: APIGateway.Types.GatewayResponses) => void): Request<APIGateway.Types.GatewayResponses, AWSError>;
  /**
   * Represents a get integration.
   */
  getIntegration(params: APIGateway.Types.GetIntegrationRequest, callback?: (err: AWSError, data: APIGateway.Types.Integration) => void): Request<APIGateway.Types.Integration, AWSError>;
  /**
   * Represents a get integration.
   */
  getIntegration(callback?: (err: AWSError, data: APIGateway.Types.Integration) => void): Request<APIGateway.Types.Integration, AWSError>;
  /**
   * Represents a get integration response.
   */
  getIntegrationResponse(params: APIGateway.Types.GetIntegrationResponseRequest, callback?: (err: AWSError, data: APIGateway.Types.IntegrationResponse) => void): Request<APIGateway.Types.IntegrationResponse, AWSError>;
  /**
   * Represents a get integration response.
   */
  getIntegrationResponse(callback?: (err: AWSError, data: APIGateway.Types.IntegrationResponse) => void): Request<APIGateway.Types.IntegrationResponse, AWSError>;
  /**
   * Describe an existing Method resource.
   */
  getMethod(params: APIGateway.Types.GetMethodRequest, callback?: (err: AWSError, data: APIGateway.Types.Method) => void): Request<APIGateway.Types.Method, AWSError>;
  /**
   * Describe an existing Method resource.
   */
  getMethod(callback?: (err: AWSError, data: APIGateway.Types.Method) => void): Request<APIGateway.Types.Method, AWSError>;
  /**
   * Describes a MethodResponse resource.
   */
  getMethodResponse(params: APIGateway.Types.GetMethodResponseRequest, callback?: (err: AWSError, data: APIGateway.Types.MethodResponse) => void): Request<APIGateway.Types.MethodResponse, AWSError>;
  /**
   * Describes a MethodResponse resource.
   */
  getMethodResponse(callback?: (err: AWSError, data: APIGateway.Types.MethodResponse) => void): Request<APIGateway.Types.MethodResponse, AWSError>;
  /**
   * Describes an existing model defined for a RestApi resource.
   */
  getModel(params: APIGateway.Types.GetModelRequest, callback?: (err: AWSError, data: APIGateway.Types.Model) => void): Request<APIGateway.Types.Model, AWSError>;
  /**
   * Describes an existing model defined for a RestApi resource.
   */
  getModel(callback?: (err: AWSError, data: APIGateway.Types.Model) => void): Request<APIGateway.Types.Model, AWSError>;
  /**
   * Generates a sample mapping template that can be used to transform a payload into the structure of a model.
   */
  getModelTemplate(params: APIGateway.Types.GetModelTemplateRequest, callback?: (err: AWSError, data: APIGateway.Types.Template) => void): Request<APIGateway.Types.Template, AWSError>;
  /**
   * Generates a sample mapping template that can be used to transform a payload into the structure of a model.
   */
  getModelTemplate(callback?: (err: AWSError, data: APIGateway.Types.Template) => void): Request<APIGateway.Types.Template, AWSError>;
  /**
   * Describes existing Models defined for a RestApi resource.
   */
  getModels(params: APIGateway.Types.GetModelsRequest, callback?: (err: AWSError, data: APIGateway.Types.Models) => void): Request<APIGateway.Types.Models, AWSError>;
  /**
   * Describes existing Models defined for a RestApi resource.
   */
  getModels(callback?: (err: AWSError, data: APIGateway.Types.Models) => void): Request<APIGateway.Types.Models, AWSError>;
  /**
   * Gets a RequestValidator of a given RestApi.
   */
  getRequestValidator(params: APIGateway.Types.GetRequestValidatorRequest, callback?: (err: AWSError, data: APIGateway.Types.RequestValidator) => void): Request<APIGateway.Types.RequestValidator, AWSError>;
  /**
   * Gets a RequestValidator of a given RestApi.
   */
  getRequestValidator(callback?: (err: AWSError, data: APIGateway.Types.RequestValidator) => void): Request<APIGateway.Types.RequestValidator, AWSError>;
  /**
   * Gets the RequestValidators collection of a given RestApi.
   */
  getRequestValidators(params: APIGateway.Types.GetRequestValidatorsRequest, callback?: (err: AWSError, data: APIGateway.Types.RequestValidators) => void): Request<APIGateway.Types.RequestValidators, AWSError>;
  /**
   * Gets the RequestValidators collection of a given RestApi.
   */
  getRequestValidators(callback?: (err: AWSError, data: APIGateway.Types.RequestValidators) => void): Request<APIGateway.Types.RequestValidators, AWSError>;
  /**
   * Lists information about a resource.
   */
  getResource(params: APIGateway.Types.GetResourceRequest, callback?: (err: AWSError, data: APIGateway.Types.Resource) => void): Request<APIGateway.Types.Resource, AWSError>;
  /**
   * Lists information about a resource.
   */
  getResource(callback?: (err: AWSError, data: APIGateway.Types.Resource) => void): Request<APIGateway.Types.Resource, AWSError>;
  /**
   * Lists information about a collection of Resource resources.
   */
  getResources(params: APIGateway.Types.GetResourcesRequest, callback?: (err: AWSError, data: APIGateway.Types.Resources) => void): Request<APIGateway.Types.Resources, AWSError>;
  /**
   * Lists information about a collection of Resource resources.
   */
  getResources(callback?: (err: AWSError, data: APIGateway.Types.Resources) => void): Request<APIGateway.Types.Resources, AWSError>;
  /**
   * Lists the RestApi resource in the collection.
   */
  getRestApi(params: APIGateway.Types.GetRestApiRequest, callback?: (err: AWSError, data: APIGateway.Types.RestApi) => void): Request<APIGateway.Types.RestApi, AWSError>;
  /**
   * Lists the RestApi resource in the collection.
   */
  getRestApi(callback?: (err: AWSError, data: APIGateway.Types.RestApi) => void): Request<APIGateway.Types.RestApi, AWSError>;
  /**
   * Lists the RestApis resources for your collection.
   */
  getRestApis(params: APIGateway.Types.GetRestApisRequest, callback?: (err: AWSError, data: APIGateway.Types.RestApis) => void): Request<APIGateway.Types.RestApis, AWSError>;
  /**
   * Lists the RestApis resources for your collection.
   */
  getRestApis(callback?: (err: AWSError, data: APIGateway.Types.RestApis) => void): Request<APIGateway.Types.RestApis, AWSError>;
  /**
   * Generates a client SDK for a RestApi and Stage.
   */
  getSdk(params: APIGateway.Types.GetSdkRequest, callback?: (err: AWSError, data: APIGateway.Types.SdkResponse) => void): Request<APIGateway.Types.SdkResponse, AWSError>;
  /**
   * Generates a client SDK for a RestApi and Stage.
   */
  getSdk(callback?: (err: AWSError, data: APIGateway.Types.SdkResponse) => void): Request<APIGateway.Types.SdkResponse, AWSError>;
  /**
   * 
   */
  getSdkType(params: APIGateway.Types.GetSdkTypeRequest, callback?: (err: AWSError, data: APIGateway.Types.SdkType) => void): Request<APIGateway.Types.SdkType, AWSError>;
  /**
   * 
   */
  getSdkType(callback?: (err: AWSError, data: APIGateway.Types.SdkType) => void): Request<APIGateway.Types.SdkType, AWSError>;
  /**
   * 
   */
  getSdkTypes(params: APIGateway.Types.GetSdkTypesRequest, callback?: (err: AWSError, data: APIGateway.Types.SdkTypes) => void): Request<APIGateway.Types.SdkTypes, AWSError>;
  /**
   * 
   */
  getSdkTypes(callback?: (err: AWSError, data: APIGateway.Types.SdkTypes) => void): Request<APIGateway.Types.SdkTypes, AWSError>;
  /**
   * Gets information about a Stage resource.
   */
  getStage(params: APIGateway.Types.GetStageRequest, callback?: (err: AWSError, data: APIGateway.Types.Stage) => void): Request<APIGateway.Types.Stage, AWSError>;
  /**
   * Gets information about a Stage resource.
   */
  getStage(callback?: (err: AWSError, data: APIGateway.Types.Stage) => void): Request<APIGateway.Types.Stage, AWSError>;
  /**
   * Gets information about one or more Stage resources.
   */
  getStages(params: APIGateway.Types.GetStagesRequest, callback?: (err: AWSError, data: APIGateway.Types.Stages) => void): Request<APIGateway.Types.Stages, AWSError>;
  /**
   * Gets information about one or more Stage resources.
   */
  getStages(callback?: (err: AWSError, data: APIGateway.Types.Stages) => void): Request<APIGateway.Types.Stages, AWSError>;
  /**
   * Gets the usage data of a usage plan in a specified time interval.
   */
  getUsage(params: APIGateway.Types.GetUsageRequest, callback?: (err: AWSError, data: APIGateway.Types.Usage) => void): Request<APIGateway.Types.Usage, AWSError>;
  /**
   * Gets the usage data of a usage plan in a specified time interval.
   */
  getUsage(callback?: (err: AWSError, data: APIGateway.Types.Usage) => void): Request<APIGateway.Types.Usage, AWSError>;
  /**
   * Gets a usage plan of a given plan identifier.
   */
  getUsagePlan(params: APIGateway.Types.GetUsagePlanRequest, callback?: (err: AWSError, data: APIGateway.Types.UsagePlan) => void): Request<APIGateway.Types.UsagePlan, AWSError>;
  /**
   * Gets a usage plan of a given plan identifier.
   */
  getUsagePlan(callback?: (err: AWSError, data: APIGateway.Types.UsagePlan) => void): Request<APIGateway.Types.UsagePlan, AWSError>;
  /**
   * Gets a usage plan key of a given key identifier.
   */
  getUsagePlanKey(params: APIGateway.Types.GetUsagePlanKeyRequest, callback?: (err: AWSError, data: APIGateway.Types.UsagePlanKey) => void): Request<APIGateway.Types.UsagePlanKey, AWSError>;
  /**
   * Gets a usage plan key of a given key identifier.
   */
  getUsagePlanKey(callback?: (err: AWSError, data: APIGateway.Types.UsagePlanKey) => void): Request<APIGateway.Types.UsagePlanKey, AWSError>;
  /**
   * Gets all the usage plan keys representing the API keys added to a specified usage plan.
   */
  getUsagePlanKeys(params: APIGateway.Types.GetUsagePlanKeysRequest, callback?: (err: AWSError, data: APIGateway.Types.UsagePlanKeys) => void): Request<APIGateway.Types.UsagePlanKeys, AWSError>;
  /**
   * Gets all the usage plan keys representing the API keys added to a specified usage plan.
   */
  getUsagePlanKeys(callback?: (err: AWSError, data: APIGateway.Types.UsagePlanKeys) => void): Request<APIGateway.Types.UsagePlanKeys, AWSError>;
  /**
   * Gets all the usage plans of the caller's account.
   */
  getUsagePlans(params: APIGateway.Types.GetUsagePlansRequest, callback?: (err: AWSError, data: APIGateway.Types.UsagePlans) => void): Request<APIGateway.Types.UsagePlans, AWSError>;
  /**
   * Gets all the usage plans of the caller's account.
   */
  getUsagePlans(callback?: (err: AWSError, data: APIGateway.Types.UsagePlans) => void): Request<APIGateway.Types.UsagePlans, AWSError>;
  /**
   * Import API keys from an external source, such as a CSV-formatted file.
   */
  importApiKeys(params: APIGateway.Types.ImportApiKeysRequest, callback?: (err: AWSError, data: APIGateway.Types.ApiKeyIds) => void): Request<APIGateway.Types.ApiKeyIds, AWSError>;
  /**
   * Import API keys from an external source, such as a CSV-formatted file.
   */
  importApiKeys(callback?: (err: AWSError, data: APIGateway.Types.ApiKeyIds) => void): Request<APIGateway.Types.ApiKeyIds, AWSError>;
  /**
   * 
   */
  importDocumentationParts(params: APIGateway.Types.ImportDocumentationPartsRequest, callback?: (err: AWSError, data: APIGateway.Types.DocumentationPartIds) => void): Request<APIGateway.Types.DocumentationPartIds, AWSError>;
  /**
   * 
   */
  importDocumentationParts(callback?: (err: AWSError, data: APIGateway.Types.DocumentationPartIds) => void): Request<APIGateway.Types.DocumentationPartIds, AWSError>;
  /**
   * A feature of the Amazon API Gateway control service for creating a new API from an external API definition file.
   */
  importRestApi(params: APIGateway.Types.ImportRestApiRequest, callback?: (err: AWSError, data: APIGateway.Types.RestApi) => void): Request<APIGateway.Types.RestApi, AWSError>;
  /**
   * A feature of the Amazon API Gateway control service for creating a new API from an external API definition file.
   */
  importRestApi(callback?: (err: AWSError, data: APIGateway.Types.RestApi) => void): Request<APIGateway.Types.RestApi, AWSError>;
  /**
   * Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi.
   */
  putGatewayResponse(params: APIGateway.Types.PutGatewayResponseRequest, callback?: (err: AWSError, data: APIGateway.Types.GatewayResponse) => void): Request<APIGateway.Types.GatewayResponse, AWSError>;
  /**
   * Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi.
   */
  putGatewayResponse(callback?: (err: AWSError, data: APIGateway.Types.GatewayResponse) => void): Request<APIGateway.Types.GatewayResponse, AWSError>;
  /**
   * Sets up a method's integration.
   */
  putIntegration(params: APIGateway.Types.PutIntegrationRequest, callback?: (err: AWSError, data: APIGateway.Types.Integration) => void): Request<APIGateway.Types.Integration, AWSError>;
  /**
   * Sets up a method's integration.
   */
  putIntegration(callback?: (err: AWSError, data: APIGateway.Types.Integration) => void): Request<APIGateway.Types.Integration, AWSError>;
  /**
   * Represents a put integration.
   */
  putIntegrationResponse(params: APIGateway.Types.PutIntegrationResponseRequest, callback?: (err: AWSError, data: APIGateway.Types.IntegrationResponse) => void): Request<APIGateway.Types.IntegrationResponse, AWSError>;
  /**
   * Represents a put integration.
   */
  putIntegrationResponse(callback?: (err: AWSError, data: APIGateway.Types.IntegrationResponse) => void): Request<APIGateway.Types.IntegrationResponse, AWSError>;
  /**
   * Add a method to an existing Resource resource.
   */
  putMethod(params: APIGateway.Types.PutMethodRequest, callback?: (err: AWSError, data: APIGateway.Types.Method) => void): Request<APIGateway.Types.Method, AWSError>;
  /**
   * Add a method to an existing Resource resource.
   */
  putMethod(callback?: (err: AWSError, data: APIGateway.Types.Method) => void): Request<APIGateway.Types.Method, AWSError>;
  /**
   * Adds a MethodResponse to an existing Method resource.
   */
  putMethodResponse(params: APIGateway.Types.PutMethodResponseRequest, callback?: (err: AWSError, data: APIGateway.Types.MethodResponse) => void): Request<APIGateway.Types.MethodResponse, AWSError>;
  /**
   * Adds a MethodResponse to an existing Method resource.
   */
  putMethodResponse(callback?: (err: AWSError, data: APIGateway.Types.MethodResponse) => void): Request<APIGateway.Types.MethodResponse, AWSError>;
  /**
   * A feature of the Amazon API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.
   */
  putRestApi(params: APIGateway.Types.PutRestApiRequest, callback?: (err: AWSError, data: APIGateway.Types.RestApi) => void): Request<APIGateway.Types.RestApi, AWSError>;
  /**
   * A feature of the Amazon API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.
   */
  putRestApi(callback?: (err: AWSError, data: APIGateway.Types.RestApi) => void): Request<APIGateway.Types.RestApi, AWSError>;
  /**
   * Simulate the execution of an Authorizer in your RestApi with headers, parameters, and an incoming request body.  Enable custom authorizers 
   */
  testInvokeAuthorizer(params: APIGateway.Types.TestInvokeAuthorizerRequest, callback?: (err: AWSError, data: APIGateway.Types.TestInvokeAuthorizerResponse) => void): Request<APIGateway.Types.TestInvokeAuthorizerResponse, AWSError>;
  /**
   * Simulate the execution of an Authorizer in your RestApi with headers, parameters, and an incoming request body.  Enable custom authorizers 
   */
  testInvokeAuthorizer(callback?: (err: AWSError, data: APIGateway.Types.TestInvokeAuthorizerResponse) => void): Request<APIGateway.Types.TestInvokeAuthorizerResponse, AWSError>;
  /**
   * Simulate the execution of a Method in your RestApi with headers, parameters, and an incoming request body.
   */
  testInvokeMethod(params: APIGateway.Types.TestInvokeMethodRequest, callback?: (err: AWSError, data: APIGateway.Types.TestInvokeMethodResponse) => void): Request<APIGateway.Types.TestInvokeMethodResponse, AWSError>;
  /**
   * Simulate the execution of a Method in your RestApi with headers, parameters, and an incoming request body.
   */
  testInvokeMethod(callback?: (err: AWSError, data: APIGateway.Types.TestInvokeMethodResponse) => void): Request<APIGateway.Types.TestInvokeMethodResponse, AWSError>;
  /**
   * Changes information about the current Account resource.
   */
  updateAccount(params: APIGateway.Types.UpdateAccountRequest, callback?: (err: AWSError, data: APIGateway.Types.Account) => void): Request<APIGateway.Types.Account, AWSError>;
  /**
   * Changes information about the current Account resource.
   */
  updateAccount(callback?: (err: AWSError, data: APIGateway.Types.Account) => void): Request<APIGateway.Types.Account, AWSError>;
  /**
   * Changes information about an ApiKey resource.
   */
  updateApiKey(params: APIGateway.Types.UpdateApiKeyRequest, callback?: (err: AWSError, data: APIGateway.Types.ApiKey) => void): Request<APIGateway.Types.ApiKey, AWSError>;
  /**
   * Changes information about an ApiKey resource.
   */
  updateApiKey(callback?: (err: AWSError, data: APIGateway.Types.ApiKey) => void): Request<APIGateway.Types.ApiKey, AWSError>;
  /**
   * Updates an existing Authorizer resource. AWS CLI
   */
  updateAuthorizer(params: APIGateway.Types.UpdateAuthorizerRequest, callback?: (err: AWSError, data: APIGateway.Types.Authorizer) => void): Request<APIGateway.Types.Authorizer, AWSError>;
  /**
   * Updates an existing Authorizer resource. AWS CLI
   */
  updateAuthorizer(callback?: (err: AWSError, data: APIGateway.Types.Authorizer) => void): Request<APIGateway.Types.Authorizer, AWSError>;
  /**
   * Changes information about the BasePathMapping resource.
   */
  updateBasePathMapping(params: APIGateway.Types.UpdateBasePathMappingRequest, callback?: (err: AWSError, data: APIGateway.Types.BasePathMapping) => void): Request<APIGateway.Types.BasePathMapping, AWSError>;
  /**
   * Changes information about the BasePathMapping resource.
   */
  updateBasePathMapping(callback?: (err: AWSError, data: APIGateway.Types.BasePathMapping) => void): Request<APIGateway.Types.BasePathMapping, AWSError>;
  /**
   * Changes information about an ClientCertificate resource.
   */
  updateClientCertificate(params: APIGateway.Types.UpdateClientCertificateRequest, callback?: (err: AWSError, data: APIGateway.Types.ClientCertificate) => void): Request<APIGateway.Types.ClientCertificate, AWSError>;
  /**
   * Changes information about an ClientCertificate resource.
   */
  updateClientCertificate(callback?: (err: AWSError, data: APIGateway.Types.ClientCertificate) => void): Request<APIGateway.Types.ClientCertificate, AWSError>;
  /**
   * Changes information about a Deployment resource.
   */
  updateDeployment(params: APIGateway.Types.UpdateDeploymentRequest, callback?: (err: AWSError, data: APIGateway.Types.Deployment) => void): Request<APIGateway.Types.Deployment, AWSError>;
  /**
   * Changes information about a Deployment resource.
   */
  updateDeployment(callback?: (err: AWSError, data: APIGateway.Types.Deployment) => void): Request<APIGateway.Types.Deployment, AWSError>;
  /**
   * 
   */
  updateDocumentationPart(params: APIGateway.Types.UpdateDocumentationPartRequest, callback?: (err: AWSError, data: APIGateway.Types.DocumentationPart) => void): Request<APIGateway.Types.DocumentationPart, AWSError>;
  /**
   * 
   */
  updateDocumentationPart(callback?: (err: AWSError, data: APIGateway.Types.DocumentationPart) => void): Request<APIGateway.Types.DocumentationPart, AWSError>;
  /**
   * 
   */
  updateDocumentationVersion(params: APIGateway.Types.UpdateDocumentationVersionRequest, callback?: (err: AWSError, data: APIGateway.Types.DocumentationVersion) => void): Request<APIGateway.Types.DocumentationVersion, AWSError>;
  /**
   * 
   */
  updateDocumentationVersion(callback?: (err: AWSError, data: APIGateway.Types.DocumentationVersion) => void): Request<APIGateway.Types.DocumentationVersion, AWSError>;
  /**
   * Changes information about the DomainName resource.
   */
  updateDomainName(params: APIGateway.Types.UpdateDomainNameRequest, callback?: (err: AWSError, data: APIGateway.Types.DomainName) => void): Request<APIGateway.Types.DomainName, AWSError>;
  /**
   * Changes information about the DomainName resource.
   */
  updateDomainName(callback?: (err: AWSError, data: APIGateway.Types.DomainName) => void): Request<APIGateway.Types.DomainName, AWSError>;
  /**
   * Updates a GatewayResponse of a specified response type on the given RestApi.
   */
  updateGatewayResponse(params: APIGateway.Types.UpdateGatewayResponseRequest, callback?: (err: AWSError, data: APIGateway.Types.GatewayResponse) => void): Request<APIGateway.Types.GatewayResponse, AWSError>;
  /**
   * Updates a GatewayResponse of a specified response type on the given RestApi.
   */
  updateGatewayResponse(callback?: (err: AWSError, data: APIGateway.Types.GatewayResponse) => void): Request<APIGateway.Types.GatewayResponse, AWSError>;
  /**
   * Represents an update integration.
   */
  updateIntegration(params: APIGateway.Types.UpdateIntegrationRequest, callback?: (err: AWSError, data: APIGateway.Types.Integration) => void): Request<APIGateway.Types.Integration, AWSError>;
  /**
   * Represents an update integration.
   */
  updateIntegration(callback?: (err: AWSError, data: APIGateway.Types.Integration) => void): Request<APIGateway.Types.Integration, AWSError>;
  /**
   * Represents an update integration response.
   */
  updateIntegrationResponse(params: APIGateway.Types.UpdateIntegrationResponseRequest, callback?: (err: AWSError, data: APIGateway.Types.IntegrationResponse) => void): Request<APIGateway.Types.IntegrationResponse, AWSError>;
  /**
   * Represents an update integration response.
   */
  updateIntegrationResponse(callback?: (err: AWSError, data: APIGateway.Types.IntegrationResponse) => void): Request<APIGateway.Types.IntegrationResponse, AWSError>;
  /**
   * Updates an existing Method resource.
   */
  updateMethod(params: APIGateway.Types.UpdateMethodRequest, callback?: (err: AWSError, data: APIGateway.Types.Method) => void): Request<APIGateway.Types.Method, AWSError>;
  /**
   * Updates an existing Method resource.
   */
  updateMethod(callback?: (err: AWSError, data: APIGateway.Types.Method) => void): Request<APIGateway.Types.Method, AWSError>;
  /**
   * Updates an existing MethodResponse resource.
   */
  updateMethodResponse(params: APIGateway.Types.UpdateMethodResponseRequest, callback?: (err: AWSError, data: APIGateway.Types.MethodResponse) => void): Request<APIGateway.Types.MethodResponse, AWSError>;
  /**
   * Updates an existing MethodResponse resource.
   */
  updateMethodResponse(callback?: (err: AWSError, data: APIGateway.Types.MethodResponse) => void): Request<APIGateway.Types.MethodResponse, AWSError>;
  /**
   * Changes information about a model.
   */
  updateModel(params: APIGateway.Types.UpdateModelRequest, callback?: (err: AWSError, data: APIGateway.Types.Model) => void): Request<APIGateway.Types.Model, AWSError>;
  /**
   * Changes information about a model.
   */
  updateModel(callback?: (err: AWSError, data: APIGateway.Types.Model) => void): Request<APIGateway.Types.Model, AWSError>;
  /**
   * Updates a RequestValidator of a given RestApi.
   */
  updateRequestValidator(params: APIGateway.Types.UpdateRequestValidatorRequest, callback?: (err: AWSError, data: APIGateway.Types.RequestValidator) => void): Request<APIGateway.Types.RequestValidator, AWSError>;
  /**
   * Updates a RequestValidator of a given RestApi.
   */
  updateRequestValidator(callback?: (err: AWSError, data: APIGateway.Types.RequestValidator) => void): Request<APIGateway.Types.RequestValidator, AWSError>;
  /**
   * Changes information about a Resource resource.
   */
  updateResource(params: APIGateway.Types.UpdateResourceRequest, callback?: (err: AWSError, data: APIGateway.Types.Resource) => void): Request<APIGateway.Types.Resource, AWSError>;
  /**
   * Changes information about a Resource resource.
   */
  updateResource(callback?: (err: AWSError, data: APIGateway.Types.Resource) => void): Request<APIGateway.Types.Resource, AWSError>;
  /**
   * Changes information about the specified API.
   */
  updateRestApi(params: APIGateway.Types.UpdateRestApiRequest, callback?: (err: AWSError, data: APIGateway.Types.RestApi) => void): Request<APIGateway.Types.RestApi, AWSError>;
  /**
   * Changes information about the specified API.
   */
  updateRestApi(callback?: (err: AWSError, data: APIGateway.Types.RestApi) => void): Request<APIGateway.Types.RestApi, AWSError>;
  /**
   * Changes information about a Stage resource.
   */
  updateStage(params: APIGateway.Types.UpdateStageRequest, callback?: (err: AWSError, data: APIGateway.Types.Stage) => void): Request<APIGateway.Types.Stage, AWSError>;
  /**
   * Changes information about a Stage resource.
   */
  updateStage(callback?: (err: AWSError, data: APIGateway.Types.Stage) => void): Request<APIGateway.Types.Stage, AWSError>;
  /**
   * Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.
   */
  updateUsage(params: APIGateway.Types.UpdateUsageRequest, callback?: (err: AWSError, data: APIGateway.Types.Usage) => void): Request<APIGateway.Types.Usage, AWSError>;
  /**
   * Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.
   */
  updateUsage(callback?: (err: AWSError, data: APIGateway.Types.Usage) => void): Request<APIGateway.Types.Usage, AWSError>;
  /**
   * Updates a usage plan of a given plan Id.
   */
  updateUsagePlan(params: APIGateway.Types.UpdateUsagePlanRequest, callback?: (err: AWSError, data: APIGateway.Types.UsagePlan) => void): Request<APIGateway.Types.UsagePlan, AWSError>;
  /**
   * Updates a usage plan of a given plan Id.
   */
  updateUsagePlan(callback?: (err: AWSError, data: APIGateway.Types.UsagePlan) => void): Request<APIGateway.Types.UsagePlan, AWSError>;
}
declare namespace APIGateway {
  export interface Account {
    /**
     * The ARN of an Amazon CloudWatch role for the current Account. 
     */
    cloudwatchRoleArn?: String;
    /**
     * Specifies the API request limits configured for the current Account.
     */
    throttleSettings?: ThrottleSettings;
    /**
     * A list of features supported for the account. When usage plans are enabled, the features list will include an entry of "UsagePlans".
     */
    features?: ListOfString;
    /**
     * The version of the API keys used for the account.
     */
    apiKeyVersion?: String;
  }
  export interface ApiKey {
    /**
     * The identifier of the API Key.
     */
    id?: String;
    /**
     * The value of the API Key.
     */
    value?: String;
    /**
     * The name of the API Key.
     */
    name?: String;
    /**
     * An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.
     */
    customerId?: String;
    /**
     * The description of the API Key.
     */
    description?: String;
    /**
     * Specifies whether the API Key can be used by callers.
     */
    enabled?: Boolean;
    /**
     * The timestamp when the API Key was created.
     */
    createdDate?: Timestamp;
    /**
     * The timestamp when the API Key was last updated.
     */
    lastUpdatedDate?: Timestamp;
    /**
     * A list of Stage resources that are associated with the ApiKey resource.
     */
    stageKeys?: ListOfString;
  }
  export interface ApiKeyIds {
    /**
     * A list of all the ApiKey identifiers.
     */
    ids?: ListOfString;
    /**
     * A list of warning messages.
     */
    warnings?: ListOfString;
  }
  export interface ApiKeys {
    /**
     * A list of warning messages logged during the import of API keys when the failOnWarnings option is set to true.
     */
    warnings?: ListOfString;
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfApiKey;
  }
  export type ApiKeysFormat = "csv"|string;
  export interface ApiStage {
    /**
     * API Id of the associated API stage in a usage plan.
     */
    apiId?: String;
    /**
     * API stage name of the associated API stage in a usage plan.
     */
    stage?: String;
  }
  export interface Authorizer {
    /**
     * The identifier for the authorizer resource.
     */
    id?: String;
    /**
     * [Required] The name of the authorizer.
     */
    name?: String;
    /**
     * [Required] The authorizer type. Valid values are TOKEN for a Lambda function using a single authorization token submitted in a custom header, REQUEST for a Lambda function using incoming request parameters, and COGNITO_USER_POOLS for using an Amazon Cognito user pool.
     */
    type?: AuthorizerType;
    /**
     * A list of the Amazon Cognito user pool ARNs for the COGNITO_USER_POOLS authorizer. Each element is of this format: arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}. For a TOKEN or REQUEST authorizer, this is not defined. 
     */
    providerARNs?: ListOfARNs;
    /**
     * Optional customer-defined field, used in Swagger imports and exports without functional impact.
     */
    authType?: String;
    /**
     * Specifies the authorizer's Uniform Resource Identifier (URI). For TOKEN or REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations. In general, the URI has this form arn:aws:apigateway:{region}:lambda:path/{service_api}, where {region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations.
     */
    authorizerUri?: String;
    /**
     * Specifies the required credentials as an IAM role for Amazon API Gateway to invoke the authorizer. To specify an IAM role for Amazon API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.
     */
    authorizerCredentials?: String;
    /**
     * The identity source for which authorization is requested. For a TOKEN authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is Auth, the header mapping expression is method.request.header.Auth.For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is method.request.header.Auth, method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.For a COGNITO_USER_POOLS authorizer, this property is not used.
     */
    identitySource?: String;
    /**
     * A validation expression for the incoming identity token. For TOKEN authorizers, this value is a regular expression. Amazon API Gateway will match the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the REQUEST authorizer.
     */
    identityValidationExpression?: String;
    /**
     * The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.
     */
    authorizerResultTtlInSeconds?: NullableInteger;
  }
  export type AuthorizerType = "TOKEN"|"REQUEST"|"COGNITO_USER_POOLS"|string;
  export interface Authorizers {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfAuthorizer;
  }
  export interface BasePathMapping {
    /**
     * The base path name that callers of the API must provide as part of the URL after the domain name.
     */
    basePath?: String;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId?: String;
    /**
     * The name of the associated stage.
     */
    stage?: String;
  }
  export interface BasePathMappings {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfBasePathMapping;
  }
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type Boolean = boolean;
  export type CacheClusterSize = "0.5"|"1.6"|"6.1"|"13.5"|"28.4"|"58.2"|"118"|"237"|string;
  export type CacheClusterStatus = "CREATE_IN_PROGRESS"|"AVAILABLE"|"DELETE_IN_PROGRESS"|"NOT_AVAILABLE"|"FLUSH_IN_PROGRESS"|string;
  export interface ClientCertificate {
    /**
     * The identifier of the client certificate.
     */
    clientCertificateId?: String;
    /**
     * The description of the client certificate.
     */
    description?: String;
    /**
     * The PEM-encoded public key of the client certificate, which can be used to configure certificate authentication in the integration endpoint .
     */
    pemEncodedCertificate?: String;
    /**
     * The timestamp when the client certificate was created.
     */
    createdDate?: Timestamp;
    /**
     * The timestamp when the client certificate will expire.
     */
    expirationDate?: Timestamp;
  }
  export interface ClientCertificates {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfClientCertificate;
  }
  export type ContentHandlingStrategy = "CONVERT_TO_BINARY"|"CONVERT_TO_TEXT"|string;
  export interface CreateApiKeyRequest {
    /**
     * The name of the ApiKey.
     */
    name?: String;
    /**
     * The description of the ApiKey.
     */
    description?: String;
    /**
     * Specifies whether the ApiKey can be used by callers.
     */
    enabled?: Boolean;
    /**
     * Specifies whether (true) or not (false) the key identifier is distinct from the created API key value.
     */
    generateDistinctId?: Boolean;
    /**
     * Specifies a value of the API key.
     */
    value?: String;
    /**
     * DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.
     */
    stageKeys?: ListOfStageKeys;
    /**
     * An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.
     */
    customerId?: String;
  }
  export interface CreateAuthorizerRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * [Required] The name of the authorizer.
     */
    name: String;
    /**
     * [Required] The authorizer type. Valid values are TOKEN for a Lambda function using a single authorization token submitted in a custom header, REQUEST for a Lambda function using incoming request parameters, and COGNITO_USER_POOLS for using an Amazon Cognito user pool.
     */
    type: AuthorizerType;
    /**
     * A list of the Amazon Cognito user pool ARNs for the COGNITO_USER_POOLS authorizer. Each element is of this format: arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}. For a TOKEN or REQUEST authorizer, this is not defined. 
     */
    providerARNs?: ListOfARNs;
    /**
     * Optional customer-defined field, used in Swagger imports and exports without functional impact.
     */
    authType?: String;
    /**
     * Specifies the authorizer's Uniform Resource Identifier (URI). For TOKEN or REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations. In general, the URI has this form arn:aws:apigateway:{region}:lambda:path/{service_api}, where {region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations.
     */
    authorizerUri?: String;
    /**
     * Specifies the required credentials as an IAM role for Amazon API Gateway to invoke the authorizer. To specify an IAM role for Amazon API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.
     */
    authorizerCredentials?: String;
    /**
     * The identity source for which authorization is requested. For a TOKEN authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is Auth, the header mapping expression is method.request.header.Auth.For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is method.request.header.Auth, method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.For a COGNITO_USER_POOLS authorizer, this property is not used.
     */
    identitySource?: String;
    /**
     * A validation expression for the incoming identity token. For TOKEN authorizers, this value is a regular expression. Amazon API Gateway will match the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the REQUEST authorizer.
     */
    identityValidationExpression?: String;
    /**
     * The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.
     */
    authorizerResultTtlInSeconds?: NullableInteger;
  }
  export interface CreateBasePathMappingRequest {
    /**
     * The domain name of the BasePathMapping resource to create.
     */
    domainName: String;
    /**
     * The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Leave this blank if you do not want callers to specify a base path name after the domain name.
     */
    basePath?: String;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name of the API's stage that you want to use for this mapping. Leave this blank if you do not want callers to explicitly specify the stage name after any base path name.
     */
    stage?: String;
  }
  export interface CreateDeploymentRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name of the Stage resource for the Deployment resource to create.
     */
    stageName?: String;
    /**
     * The description of the Stage resource for the Deployment resource to create.
     */
    stageDescription?: String;
    /**
     * The description for the Deployment resource to create.
     */
    description?: String;
    /**
     * Enables a cache cluster for the Stage resource specified in the input.
     */
    cacheClusterEnabled?: NullableBoolean;
    /**
     * Specifies the cache cluster size for the Stage resource specified in the input, if a cache cluster is enabled.
     */
    cacheClusterSize?: CacheClusterSize;
    /**
     * A map that defines the stage variables for the Stage resource that is associated with the new deployment. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.
     */
    variables?: MapOfStringToString;
  }
  export interface CreateDocumentationPartRequest {
    /**
     * [Required] The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * [Required] The location of the targeted API entity of the to-be-created documentation part.
     */
    location: DocumentationPartLocation;
    /**
     * [Required] The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only Swagger-compliant key-value pairs can be exported and, hence, published.
     */
    properties: String;
  }
  export interface CreateDocumentationVersionRequest {
    /**
     * [Required] The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * [Required] The version identifier of the new snapshot.
     */
    documentationVersion: String;
    /**
     * The stage name to be associated with the new documentation snapshot.
     */
    stageName?: String;
    /**
     * A description about the new documentation snapshot.
     */
    description?: String;
  }
  export interface CreateDomainNameRequest {
    /**
     * (Required) The name of the DomainName resource.
     */
    domainName: String;
    /**
     * The user-friendly name of the certificate.
     */
    certificateName?: String;
    /**
     * [Deprecated] The body of the server certificate provided by your certificate authority.
     */
    certificateBody?: String;
    /**
     * [Deprecated] Your certificate's private key.
     */
    certificatePrivateKey?: String;
    /**
     * [Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path.
     */
    certificateChain?: String;
    /**
     * The reference to an AWS-managed certificate. AWS Certificate Manager is the only supported source.
     */
    certificateArn?: String;
  }
  export interface CreateModelRequest {
    /**
     * The RestApi identifier under which the Model will be created.
     */
    restApiId: String;
    /**
     * The name of the model. Must be alphanumeric.
     */
    name: String;
    /**
     * The description of the model.
     */
    description?: String;
    /**
     * The schema for the model. For application/json models, this should be JSON-schema draft v4 model.
     */
    schema?: String;
    /**
     * The content-type for the model.
     */
    contentType: String;
  }
  export interface CreateRequestValidatorRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name of the to-be-created RequestValidator.
     */
    name?: String;
    /**
     * A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (true) or not (false).
     */
    validateRequestBody?: Boolean;
    /**
     * A Boolean flag to indicate whether to validate request parameters, true, or not false.
     */
    validateRequestParameters?: Boolean;
  }
  export interface CreateResourceRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The parent resource's identifier.
     */
    parentId: String;
    /**
     * The last path segment for this resource.
     */
    pathPart: String;
  }
  export interface CreateRestApiRequest {
    /**
     * The name of the RestApi.
     */
    name: String;
    /**
     * The description of the RestApi.
     */
    description?: String;
    /**
     * A version identifier for the API.
     */
    version?: String;
    /**
     * The ID of the RestApi that you want to clone from.
     */
    cloneFrom?: String;
    /**
     * The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.
     */
    binaryMediaTypes?: ListOfString;
  }
  export interface CreateStageRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name for the Stage resource.
     */
    stageName: String;
    /**
     * The identifier of the Deployment resource for the Stage resource.
     */
    deploymentId: String;
    /**
     * The description of the Stage resource.
     */
    description?: String;
    /**
     * Whether cache clustering is enabled for the stage.
     */
    cacheClusterEnabled?: Boolean;
    /**
     * The stage's cache cluster size.
     */
    cacheClusterSize?: CacheClusterSize;
    /**
     * A map that defines the stage variables for the new Stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.
     */
    variables?: MapOfStringToString;
    /**
     * The version of the associated API documentation.
     */
    documentationVersion?: String;
  }
  export interface CreateUsagePlanKeyRequest {
    /**
     * The Id of the UsagePlan resource representing the usage plan containing the to-be-created UsagePlanKey resource representing a plan customer.
     */
    usagePlanId: String;
    /**
     * The identifier of a UsagePlanKey resource for a plan customer.
     */
    keyId: String;
    /**
     * The type of a UsagePlanKey resource for a plan customer.
     */
    keyType: String;
  }
  export interface CreateUsagePlanRequest {
    /**
     * The name of the usage plan.
     */
    name: String;
    /**
     * The description of the usage plan.
     */
    description?: String;
    /**
     * The associated API stages of the usage plan.
     */
    apiStages?: ListOfApiStage;
    /**
     * The throttling limits of the usage plan.
     */
    throttle?: ThrottleSettings;
    /**
     * The quota of the usage plan.
     */
    quota?: QuotaSettings;
  }
  export interface DeleteApiKeyRequest {
    /**
     * The identifier of the ApiKey resource to be deleted.
     */
    apiKey: String;
  }
  export interface DeleteAuthorizerRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The identifier of the Authorizer resource.
     */
    authorizerId: String;
  }
  export interface DeleteBasePathMappingRequest {
    /**
     * The domain name of the BasePathMapping resource to delete.
     */
    domainName: String;
    /**
     * The base path name of the BasePathMapping resource to delete.
     */
    basePath: String;
  }
  export interface DeleteClientCertificateRequest {
    /**
     * The identifier of the ClientCertificate resource to be deleted.
     */
    clientCertificateId: String;
  }
  export interface DeleteDeploymentRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The identifier of the Deployment resource to delete.
     */
    deploymentId: String;
  }
  export interface DeleteDocumentationPartRequest {
    /**
     * [Required] The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * [Required] The identifier of the to-be-deleted documentation part.
     */
    documentationPartId: String;
  }
  export interface DeleteDocumentationVersionRequest {
    /**
     * [Required] The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * [Required] The version identifier of a to-be-deleted documentation snapshot.
     */
    documentationVersion: String;
  }
  export interface DeleteDomainNameRequest {
    /**
     * The name of the DomainName resource to be deleted.
     */
    domainName: String;
  }
  export interface DeleteGatewayResponseRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The response type of the associated GatewayResponse. Valid values are ACCESS_DENIEDAPI_CONFIGURATION_ERRORAUTHORIZER_FAILURE AUTHORIZER_CONFIGURATION_ERRORBAD_REQUEST_PARAMETERSBAD_REQUEST_BODYDEFAULT_4XXDEFAULT_5XXEXPIRED_TOKENINVALID_SIGNATUREINTEGRATION_FAILUREINTEGRATION_TIMEOUTINVALID_API_KEYMISSING_AUTHENTICATION_TOKEN QUOTA_EXCEEDEDREQUEST_TOO_LARGERESOURCE_NOT_FOUNDTHROTTLEDUNAUTHORIZEDUNSUPPORTED_MEDIA_TYPES 
     */
    responseType: GatewayResponseType;
  }
  export interface DeleteIntegrationRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * Specifies a delete integration request's resource identifier.
     */
    resourceId: String;
    /**
     * Specifies a delete integration request's HTTP method.
     */
    httpMethod: String;
  }
  export interface DeleteIntegrationResponseRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * Specifies a delete integration response request's resource identifier.
     */
    resourceId: String;
    /**
     * Specifies a delete integration response request's HTTP method.
     */
    httpMethod: String;
    /**
     * Specifies a delete integration response request's status code.
     */
    statusCode: StatusCode;
  }
  export interface DeleteMethodRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The Resource identifier for the Method resource.
     */
    resourceId: String;
    /**
     * The HTTP verb of the Method resource.
     */
    httpMethod: String;
  }
  export interface DeleteMethodResponseRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The Resource identifier for the MethodResponse resource.
     */
    resourceId: String;
    /**
     * The HTTP verb of the Method resource.
     */
    httpMethod: String;
    /**
     * The status code identifier for the MethodResponse resource.
     */
    statusCode: StatusCode;
  }
  export interface DeleteModelRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name of the model to delete.
     */
    modelName: String;
  }
  export interface DeleteRequestValidatorRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * [Required] The identifier of the RequestValidator to be deleted.
     */
    requestValidatorId: String;
  }
  export interface DeleteResourceRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The identifier of the Resource resource.
     */
    resourceId: String;
  }
  export interface DeleteRestApiRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
  }
  export interface DeleteStageRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name of the Stage resource to delete.
     */
    stageName: String;
  }
  export interface DeleteUsagePlanKeyRequest {
    /**
     * The Id of the UsagePlan resource representing the usage plan containing the to-be-deleted UsagePlanKey resource representing a plan customer.
     */
    usagePlanId: String;
    /**
     * The Id of the UsagePlanKey resource to be deleted.
     */
    keyId: String;
  }
  export interface DeleteUsagePlanRequest {
    /**
     * The Id of the to-be-deleted usage plan.
     */
    usagePlanId: String;
  }
  export interface Deployment {
    /**
     * The identifier for the deployment resource.
     */
    id?: String;
    /**
     * The description for the deployment resource.
     */
    description?: String;
    /**
     * The date and time that the deployment resource was created.
     */
    createdDate?: Timestamp;
    /**
     * A summary of the RestApi at the date and time that the deployment resource was created.
     */
    apiSummary?: PathToMapOfMethodSnapshot;
  }
  export interface Deployments {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfDeployment;
  }
  export interface DocumentationPart {
    /**
     * The DocumentationPart identifier, generated by Amazon API Gateway when the DocumentationPart is created.
     */
    id?: String;
    /**
     * The location of the API entity to which the documentation applies. Valid fields depend on the targeted API entity type. All the valid location fields are not required. If not explicitly specified, a valid location field is treated as a wildcard and associated documentation content may be inherited by matching entities, unless overridden.
     */
    location?: DocumentationPartLocation;
    /**
     * A content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., "{ \"description\": \"The API does ...\" }". Only Swagger-compliant documentation-related fields from the properties map are exported and, hence, published as part of the API entity definitions, while the original documentation parts are exported in a Swagger extension of x-amazon-apigateway-documentation.
     */
    properties?: String;
  }
  export interface DocumentationPartIds {
    /**
     * A list of the returned documentation part identifiers.
     */
    ids?: ListOfString;
    /**
     * A list of warning messages reported during import of documentation parts.
     */
    warnings?: ListOfString;
  }
  export interface DocumentationPartLocation {
    /**
     * The type of API entity to which the documentation content applies. It is a valid and required field for API entity types of API, AUTHORIZER, MODEL, RESOURCE, METHOD, PATH_PARAMETER, QUERY_PARAMETER, REQUEST_HEADER, REQUEST_BODY, RESPONSE, RESPONSE_HEADER, and RESPONSE_BODY. Content inheritance does not apply to any entity of the API, AUTHORIZER, METHOD, MODEL, REQUEST_BODY, or RESOURCE type.
     */
    type: DocumentationPartType;
    /**
     * The URL path of the target. It is a valid field for the API entity types of RESOURCE, METHOD, PATH_PARAMETER, QUERY_PARAMETER, REQUEST_HEADER, REQUEST_BODY, RESPONSE, RESPONSE_HEADER, and RESPONSE_BODY. The default value is / for the root resource. When an applicable child entity inherits the content of another entity of the same type with more general specifications of the other location attributes, the child entity's path attribute must match that of the parent entity as a prefix.
     */
    path?: String;
    /**
     * The HTTP verb of a method. It is a valid field for the API entity types of METHOD, PATH_PARAMETER, QUERY_PARAMETER, REQUEST_HEADER, REQUEST_BODY, RESPONSE, RESPONSE_HEADER, and RESPONSE_BODY. The default value is * for any method. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other location attributes, the child entity's method attribute must match that of the parent entity exactly.
     */
    method?: String;
    /**
     * The HTTP status code of a response. It is a valid field for the API entity types of RESPONSE, RESPONSE_HEADER, and RESPONSE_BODY. The default value is * for any status code. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other location attributes, the child entity's statusCode attribute must match that of the parent entity exactly.
     */
    statusCode?: DocumentationPartLocationStatusCode;
    /**
     * The name of the targeted API entity. It is a valid and required field for the API entity types of AUTHORIZER, MODEL, PATH_PARAMETER, QUERY_PARAMETER, REQUEST_HEADER, REQUEST_BODY and RESPONSE_HEADER. It is an invalid field for any other entity type.
     */
    name?: String;
  }
  export type DocumentationPartLocationStatusCode = string;
  export type DocumentationPartType = "API"|"AUTHORIZER"|"MODEL"|"RESOURCE"|"METHOD"|"PATH_PARAMETER"|"QUERY_PARAMETER"|"REQUEST_HEADER"|"REQUEST_BODY"|"RESPONSE"|"RESPONSE_HEADER"|"RESPONSE_BODY"|string;
  export interface DocumentationParts {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfDocumentationPart;
  }
  export interface DocumentationVersion {
    /**
     * The version identifier of the API documentation snapshot.
     */
    version?: String;
    /**
     * The date when the API documentation snapshot is created.
     */
    createdDate?: Timestamp;
    /**
     * The description of the API documentation snapshot.
     */
    description?: String;
  }
  export interface DocumentationVersions {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfDocumentationVersion;
  }
  export interface DomainName {
    /**
     * The name of the DomainName resource.
     */
    domainName?: String;
    /**
     * The name of the certificate.
     */
    certificateName?: String;
    /**
     * The reference to an AWS-managed certificate. AWS Certificate Manager is the only supported source.
     */
    certificateArn?: String;
    /**
     * The timestamp when the certificate was uploaded.
     */
    certificateUploadDate?: Timestamp;
    /**
     * The domain name of the Amazon CloudFront distribution. For more information, see the Amazon CloudFront documentation.
     */
    distributionDomainName?: String;
  }
  export interface DomainNames {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfDomainName;
  }
  export type Double = number;
  export interface ExportResponse {
    /**
     * The content-type header value in the HTTP response. This will correspond to a valid 'accept' type in the request.
     */
    contentType?: String;
    /**
     * The content-disposition header value in the HTTP response.
     */
    contentDisposition?: String;
    /**
     * The binary blob response to GetExport, which contains the export.
     */
    body?: _Blob;
  }
  export interface FlushStageAuthorizersCacheRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name of the stage to flush.
     */
    stageName: String;
  }
  export interface FlushStageCacheRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name of the stage to flush its cache.
     */
    stageName: String;
  }
  export interface GatewayResponse {
    /**
     * The response type of the associated GatewayResponse. Valid values are ACCESS_DENIEDAPI_CONFIGURATION_ERRORAUTHORIZER_FAILURE AUTHORIZER_CONFIGURATION_ERRORBAD_REQUEST_PARAMETERSBAD_REQUEST_BODYDEFAULT_4XXDEFAULT_5XXEXPIRED_TOKENINVALID_SIGNATUREINTEGRATION_FAILUREINTEGRATION_TIMEOUTINVALID_API_KEYMISSING_AUTHENTICATION_TOKEN QUOTA_EXCEEDEDREQUEST_TOO_LARGERESOURCE_NOT_FOUNDTHROTTLEDUNAUTHORIZEDUNSUPPORTED_MEDIA_TYPES 
     */
    responseType?: GatewayResponseType;
    /**
     * The HTTP status code for this GatewayResponse.
     */
    statusCode?: StatusCode;
    /**
     * Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs.
     */
    responseParameters?: MapOfStringToString;
    /**
     * Response templates of the GatewayResponse as a string-to-string map of key-value pairs.
     */
    responseTemplates?: MapOfStringToString;
    /**
     * A Boolean flag to indicate whether this GatewayResponse is the default gateway response (true) or not (false). A default gateway response is one generated by Amazon API Gateway without any customization by an API developer. 
     */
    defaultResponse?: Boolean;
  }
  export type GatewayResponseType = "DEFAULT_4XX"|"DEFAULT_5XX"|"RESOURCE_NOT_FOUND"|"UNAUTHORIZED"|"INVALID_API_KEY"|"ACCESS_DENIED"|"AUTHORIZER_FAILURE"|"AUTHORIZER_CONFIGURATION_ERROR"|"INVALID_SIGNATURE"|"EXPIRED_TOKEN"|"MISSING_AUTHENTICATION_TOKEN"|"INTEGRATION_FAILURE"|"INTEGRATION_TIMEOUT"|"API_CONFIGURATION_ERROR"|"UNSUPPORTED_MEDIA_TYPE"|"BAD_REQUEST_PARAMETERS"|"BAD_REQUEST_BODY"|"REQUEST_TOO_LARGE"|"THROTTLED"|"QUOTA_EXCEEDED"|string;
  export interface GatewayResponses {
    position?: String;
    /**
     * Returns the entire collection, because of no pagination support.
     */
    items?: ListOfGatewayResponse;
  }
  export interface GenerateClientCertificateRequest {
    /**
     * The description of the ClientCertificate.
     */
    description?: String;
  }
  export interface GetAccountRequest {
  }
  export interface GetApiKeyRequest {
    /**
     * The identifier of the ApiKey resource.
     */
    apiKey: String;
    /**
     * A boolean flag to specify whether (true) or not (false) the result contains the key value.
     */
    includeValue?: NullableBoolean;
  }
  export interface GetApiKeysRequest {
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page.
     */
    limit?: NullableInteger;
    /**
     * The name of queried API keys.
     */
    nameQuery?: String;
    /**
     * The identifier of a customer in AWS Marketplace or an external system, such as a developer portal.
     */
    customerId?: String;
    /**
     * A boolean flag to specify whether (true) or not (false) the result contains key values.
     */
    includeValues?: NullableBoolean;
  }
  export interface GetAuthorizerRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The identifier of the Authorizer resource.
     */
    authorizerId: String;
  }
  export interface GetAuthorizersRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page.
     */
    limit?: NullableInteger;
  }
  export interface GetBasePathMappingRequest {
    /**
     * The domain name of the BasePathMapping resource to be described.
     */
    domainName: String;
    /**
     * The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Leave this blank if you do not want callers to specify any base path name after the domain name.
     */
    basePath: String;
  }
  export interface GetBasePathMappingsRequest {
    /**
     * The domain name of a BasePathMapping resource.
     */
    domainName: String;
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page. The value is 25 by default and could be between 1 - 500.
     */
    limit?: NullableInteger;
  }
  export interface GetClientCertificateRequest {
    /**
     * The identifier of the ClientCertificate resource to be described.
     */
    clientCertificateId: String;
  }
  export interface GetClientCertificatesRequest {
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page. The value is 25 by default and could be between 1 - 500.
     */
    limit?: NullableInteger;
  }
  export interface GetDeploymentRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The identifier of the Deployment resource to get information about.
     */
    deploymentId: String;
    /**
     * A query parameter to retrieve the specified embedded resources of the returned Deployment resource in the response. In a REST API call, this embed parameter value is a list of comma-separated strings, as in GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=var1,var2. The SDK and other platform-dependent libraries might use a different format for the list. Currently, this request supports only retrieval of the embedded API summary this way. Hence, the parameter value must be a single-valued list containing only the "apisummary" string. For example, GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=apisummary.
     */
    embed?: ListOfString;
  }
  export interface GetDeploymentsRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page. The value is 25 by default and could be between 1 - 500.
     */
    limit?: NullableInteger;
  }
  export interface GetDocumentationPartRequest {
    /**
     * [Required] The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * [Required] The string identifier of the associated RestApi.
     */
    documentationPartId: String;
  }
  export interface GetDocumentationPartsRequest {
    /**
     * [Required] The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The type of API entities of the to-be-retrieved documentation parts. 
     */
    type?: DocumentationPartType;
    /**
     * The name of API entities of the to-be-retrieved documentation parts.
     */
    nameQuery?: String;
    /**
     * The path of API entities of the to-be-retrieved documentation parts.
     */
    path?: String;
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page.
     */
    limit?: NullableInteger;
  }
  export interface GetDocumentationVersionRequest {
    /**
     * [Required] The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * [Required] The version identifier of the to-be-retrieved documentation snapshot.
     */
    documentationVersion: String;
  }
  export interface GetDocumentationVersionsRequest {
    /**
     * [Required] The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page.
     */
    limit?: NullableInteger;
  }
  export interface GetDomainNameRequest {
    /**
     * The name of the DomainName resource.
     */
    domainName: String;
  }
  export interface GetDomainNamesRequest {
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page. The value is 25 by default and could be between 1 - 500.
     */
    limit?: NullableInteger;
  }
  export interface GetExportRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name of the Stage that will be exported.
     */
    stageName: String;
    /**
     * The type of export. Currently only 'swagger' is supported.
     */
    exportType: String;
    /**
     * A key-value map of query string parameters that specify properties of the export, depending on the requested exportType. For exportType swagger, any combination of the following parameters are supported: integrations will export the API with x-amazon-apigateway-integration extensions. authorizers will export the API with x-amazon-apigateway-authorizer extensions. postman will export the API with Postman extensions, allowing for import to the Postman tool
     */
    parameters?: MapOfStringToString;
    /**
     * The content-type of the export, for example application/json. Currently application/json and application/yaml are supported for exportType of swagger. This should be specified in the Accept header for direct API requests.
     */
    accepts?: String;
  }
  export interface GetGatewayResponseRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The response type of the associated GatewayResponse. Valid values are ACCESS_DENIEDAPI_CONFIGURATION_ERRORAUTHORIZER_FAILURE AUTHORIZER_CONFIGURATION_ERRORBAD_REQUEST_PARAMETERSBAD_REQUEST_BODYDEFAULT_4XXDEFAULT_5XXEXPIRED_TOKENINVALID_SIGNATUREINTEGRATION_FAILUREINTEGRATION_TIMEOUTINVALID_API_KEYMISSING_AUTHENTICATION_TOKEN QUOTA_EXCEEDEDREQUEST_TOO_LARGERESOURCE_NOT_FOUNDTHROTTLEDUNAUTHORIZEDUNSUPPORTED_MEDIA_TYPES 
     */
    responseType: GatewayResponseType;
  }
  export interface GetGatewayResponsesRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The current pagination position in the paged result set. The GatewayResponse collection does not support pagination and the position does not apply here.
     */
    position?: String;
    /**
     * The maximum number of returned results per page. The GatewayResponses collection does not support pagination and the limit does not apply here.
     */
    limit?: NullableInteger;
  }
  export interface GetIntegrationRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * Specifies a get integration request's resource identifier
     */
    resourceId: String;
    /**
     * Specifies a get integration request's HTTP method.
     */
    httpMethod: String;
  }
  export interface GetIntegrationResponseRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * Specifies a get integration response request's resource identifier.
     */
    resourceId: String;
    /**
     * Specifies a get integration response request's HTTP method.
     */
    httpMethod: String;
    /**
     * Specifies a get integration response request's status code.
     */
    statusCode: StatusCode;
  }
  export interface GetMethodRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The Resource identifier for the Method resource.
     */
    resourceId: String;
    /**
     * Specifies the method request's HTTP method type.
     */
    httpMethod: String;
  }
  export interface GetMethodResponseRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The Resource identifier for the MethodResponse resource.
     */
    resourceId: String;
    /**
     * The HTTP verb of the Method resource.
     */
    httpMethod: String;
    /**
     * The status code for the MethodResponse resource.
     */
    statusCode: StatusCode;
  }
  export interface GetModelRequest {
    /**
     * The RestApi identifier under which the Model exists.
     */
    restApiId: String;
    /**
     * The name of the model as an identifier.
     */
    modelName: String;
    /**
     * A query parameter of a Boolean value to resolve (true) all external model references and returns a flattened model schema or not (false) The default is false.
     */
    flatten?: Boolean;
  }
  export interface GetModelTemplateRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name of the model for which to generate a template.
     */
    modelName: String;
  }
  export interface GetModelsRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page. The value is 25 by default and could be between 1 - 500.
     */
    limit?: NullableInteger;
  }
  export interface GetRequestValidatorRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * [Required] The identifier of the RequestValidator to be retrieved.
     */
    requestValidatorId: String;
  }
  export interface GetRequestValidatorsRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page.
     */
    limit?: NullableInteger;
  }
  export interface GetResourceRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The identifier for the Resource resource.
     */
    resourceId: String;
    /**
     * A query parameter to retrieve the specified resources embedded in the returned Resource representation in the response. This embed parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the "methods" string. For example, GET /restapis/{restapi_id}/resources/{resource_id}?embed=methods.
     */
    embed?: ListOfString;
  }
  export interface GetResourcesRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page. The value is 25 by default and could be between 1 - 500.
     */
    limit?: NullableInteger;
    /**
     * A query parameter used to retrieve the specified resources embedded in the returned Resources resource in the response. This embed parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the "methods" string. For example, GET /restapis/{restapi_id}/resources?embed=methods.
     */
    embed?: ListOfString;
  }
  export interface GetRestApiRequest {
    /**
     * The identifier of the RestApi resource.
     */
    restApiId: String;
  }
  export interface GetRestApisRequest {
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page. The value is 25 by default and could be between 1 - 500.
     */
    limit?: NullableInteger;
  }
  export interface GetSdkRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name of the Stage that the SDK will use.
     */
    stageName: String;
    /**
     * The language for the generated SDK. Currently java, javascript, android, objectivec and swift (for iOS) are supported.
     */
    sdkType: String;
    /**
     * A string-to-string key-value map of query parameters sdkType-dependent properties of the SDK. For sdkType of objectivec or swift, a parameter named classPrefix is required. For sdkType of android, parameters named groupId, artifactId, artifactVersion, and invokerPackage are required. For sdkType of java, parameters named serviceName and javaPackageName are required. 
     */
    parameters?: MapOfStringToString;
  }
  export interface GetSdkTypeRequest {
    /**
     * The identifier of the queried SdkType instance.
     */
    id: String;
  }
  export interface GetSdkTypesRequest {
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page.
     */
    limit?: NullableInteger;
  }
  export interface GetStageRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name of the Stage resource to get information about.
     */
    stageName: String;
  }
  export interface GetStagesRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The stages' deployment identifiers.
     */
    deploymentId?: String;
  }
  export interface GetUsagePlanKeyRequest {
    /**
     * The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer.
     */
    usagePlanId: String;
    /**
     * The key Id of the to-be-retrieved UsagePlanKey resource representing a plan customer.
     */
    keyId: String;
  }
  export interface GetUsagePlanKeysRequest {
    /**
     * The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer.
     */
    usagePlanId: String;
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page.
     */
    limit?: NullableInteger;
    /**
     * A query parameter specifying the name of the to-be-returned usage plan keys.
     */
    nameQuery?: String;
  }
  export interface GetUsagePlanRequest {
    /**
     * The identifier of the UsagePlan resource to be retrieved.
     */
    usagePlanId: String;
  }
  export interface GetUsagePlansRequest {
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The identifier of the API key associated with the usage plans.
     */
    keyId?: String;
    /**
     * The maximum number of returned results per page.
     */
    limit?: NullableInteger;
  }
  export interface GetUsageRequest {
    /**
     * The Id of the usage plan associated with the usage data.
     */
    usagePlanId: String;
    /**
     * The Id of the API key associated with the resultant usage data.
     */
    keyId?: String;
    /**
     * The starting date (e.g., 2016-01-01) of the usage data.
     */
    startDate: String;
    /**
     * The ending date (e.g., 2016-12-31) of the usage data.
     */
    endDate: String;
    /**
     * The current pagination position in the paged result set.
     */
    position?: String;
    /**
     * The maximum number of returned results per page.
     */
    limit?: NullableInteger;
  }
  export interface ImportApiKeysRequest {
    /**
     * The payload of the POST request to import API keys. For the payload format, see API Key File Format.
     */
    body: _Blob;
    /**
     * A query parameter to specify the input format to imported API keys. Currently, only the csv format is supported.
     */
    format: ApiKeysFormat;
    /**
     * A query parameter to indicate whether to rollback ApiKey importation (true) or not (false) when error is encountered.
     */
    failOnWarnings?: Boolean;
  }
  export interface ImportDocumentationPartsRequest {
    /**
     * [Required] The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * A query parameter to indicate whether to overwrite (OVERWRITE) any existing DocumentationParts definition or to merge (MERGE) the new definition into the existing one. The default value is MERGE.
     */
    mode?: PutMode;
    /**
     * A query parameter to specify whether to rollback the documentation importation (true) or not (false) when a warning is encountered. The default value is false.
     */
    failOnWarnings?: Boolean;
    /**
     * [Required] Raw byte array representing the to-be-imported documentation parts. To import from a Swagger file, this is a JSON object.
     */
    body: _Blob;
  }
  export interface ImportRestApiRequest {
    /**
     * A query parameter to indicate whether to rollback the API creation (true) or not (false) when a warning is encountered. The default value is false.
     */
    failOnWarnings?: Boolean;
    /**
     * Custom header parameters as part of the request. For example, to exclude DocumentationParts from an imported API, set ignore=documentation as a parameters value, as in the AWS CLI command of aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json.
     */
    parameters?: MapOfStringToString;
    /**
     * The POST request body containing external API definitions. Currently, only Swagger definition JSON files are supported. The maximum size of the API definition file is 2MB.
     */
    body: _Blob;
  }
  export type Integer = number;
  export interface Integration {
    /**
     * Specifies the integration's type. The valid value is HTTP for integrating with an HTTP back end, AWS for any AWS service endpoints, MOCK for testing without actually invoking the back end, HTTP_PROXY for integrating with the HTTP proxy integration, or AWS_PROXY for integrating with the Lambda proxy integration type.
     */
    type?: IntegrationType;
    /**
     * Specifies the integration's HTTP method type.
     */
    httpMethod?: String;
    /**
     * Specifies the integration's Uniform Resource Identifier (URI). For HTTP integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification. For AWS integrations, the URI should be of the form arn:aws:apigateway:{region}:{subdomain.service|service}:{path|action}/{service_api}. Region, subdomain and service are used to determine the right endpoint. For AWS services that use the Action= query string parameter, service_api should be a valid action for the desired service. For RESTful AWS service APIs, path is used to indicate that the remaining substring in the URI should be treated as the path to the resource, including the initial /.
     */
    uri?: String;
    /**
     * Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for Amazon API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::\*:user/\*. To use resource-based permissions on supported AWS services, specify null.
     */
    credentials?: String;
    /**
     * A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of method.request.{location}.{name}, where location is querystring, path, or header and name must be a valid and unique method request parameter name.
     */
    requestParameters?: MapOfStringToString;
    /**
     * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.
     */
    requestTemplates?: MapOfStringToString;
    /**
     *   Specifies how the method request body of an unmapped content type will be passed through the integration request to the back end without transformation. A content type is unmapped if no mapping template is defined in the integration or the content type does not match any of the mapped content types, as specified in requestTemplates. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER.    WHEN_NO_MATCH passes the method request body through the integration request to the back end without transformation when the method request content type does not match any content type associated with the mapping templates defined in the integration request.   WHEN_NO_TEMPLATES passes the method request body through the integration request to the back end without transformation when no mapping template is defined in the integration request. If a template is defined when this option is selected, the method request of an unmapped content-type will be rejected with an HTTP 415 Unsupported Media Type response.   NEVER rejects the method request with an HTTP 415 Unsupported Media Type response when either the method request content type does not match any content type associated with the mapping templates defined in the integration request or no mapping template is defined in the integration request.   
     */
    passthroughBehavior?: String;
    /**
     * Specifies how to handle request payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:  CONVERT_TO_BINARY: Converts a request payload from a Base64-encoded string to the corresponding binary blob. CONVERT_TO_TEXT: Converts a request payload from a binary blob to a Base64-encoded string.  If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the passthroughBehaviors is configured to support payload pass-through.
     */
    contentHandling?: ContentHandlingStrategy;
    /**
     * Specifies the integration's cache namespace.
     */
    cacheNamespace?: String;
    /**
     * Specifies the integration's cache key parameters.
     */
    cacheKeyParameters?: ListOfString;
    /**
     * Specifies the integration's responses.   Example: Get integration responses of a method Request  GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200 HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160607T191449Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160607/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}  Response The successful response returns 200 OK status and a payload as follows: { "_links": { "curies": { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html", "name": "integrationresponse", "templated": true }, "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200", "title": "200" }, "integrationresponse:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200" }, "integrationresponse:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200" } }, "responseParameters": { "method.response.header.Content-Type": "'application/xml'" }, "responseTemplates": { "application/json": "$util.urlDecode(\"%3CkinesisStreams%3E#foreach($stream in $input.path('$.StreamNames'))%3Cstream%3E%3Cname%3E$stream%3C/name%3E%3C/stream%3E#end%3C/kinesisStreams%3E\")\n" }, "statusCode": "200" }    Creating an API 
     */
    integrationResponses?: MapOfIntegrationResponse;
  }
  export interface IntegrationResponse {
    /**
     * Specifies the status code that is used to map the integration response to an existing MethodResponse.
     */
    statusCode?: StatusCode;
    /**
     * Specifies the regular expression (regex) pattern used to choose an integration response based on the response from the back end. For example, if the success response returns nothing and the error response returns some string, you could use the .+ regex to match error response. However, make sure that the error response does not contain any newline (\n) character in such cases. If the back end is an AWS Lambda function, the AWS Lambda function error header is matched. For all other HTTP and AWS back ends, the HTTP status code is matched.
     */
    selectionPattern?: String;
    /**
     * A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.
     */
    responseParameters?: MapOfStringToString;
    /**
     * Specifies the templates used to transform the integration response body. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
     */
    responseTemplates?: MapOfStringToString;
    /**
     * Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:  CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob. CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.  If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.
     */
    contentHandling?: ContentHandlingStrategy;
  }
  export type IntegrationType = "HTTP"|"AWS"|"MOCK"|"HTTP_PROXY"|"AWS_PROXY"|string;
  export type ListOfARNs = ProviderARN[];
  export type ListOfApiKey = ApiKey[];
  export type ListOfApiStage = ApiStage[];
  export type ListOfAuthorizer = Authorizer[];
  export type ListOfBasePathMapping = BasePathMapping[];
  export type ListOfClientCertificate = ClientCertificate[];
  export type ListOfDeployment = Deployment[];
  export type ListOfDocumentationPart = DocumentationPart[];
  export type ListOfDocumentationVersion = DocumentationVersion[];
  export type ListOfDomainName = DomainName[];
  export type ListOfGatewayResponse = GatewayResponse[];
  export type ListOfLong = Long[];
  export type ListOfModel = Model[];
  export type ListOfPatchOperation = PatchOperation[];
  export type ListOfRequestValidator = RequestValidator[];
  export type ListOfResource = Resource[];
  export type ListOfRestApi = RestApi[];
  export type ListOfSdkConfigurationProperty = SdkConfigurationProperty[];
  export type ListOfSdkType = SdkType[];
  export type ListOfStage = Stage[];
  export type ListOfStageKeys = StageKey[];
  export type ListOfString = String[];
  export type ListOfUsage = ListOfLong[];
  export type ListOfUsagePlan = UsagePlan[];
  export type ListOfUsagePlanKey = UsagePlanKey[];
  export type Long = number;
  export type MapOfHeaderValues = {[key: string]: String};
  export type MapOfIntegrationResponse = {[key: string]: IntegrationResponse};
  export type MapOfKeyUsages = {[key: string]: ListOfUsage};
  export type MapOfMethod = {[key: string]: Method};
  export type MapOfMethodResponse = {[key: string]: MethodResponse};
  export type MapOfMethodSettings = {[key: string]: MethodSetting};
  export type MapOfMethodSnapshot = {[key: string]: MethodSnapshot};
  export type MapOfStringToBoolean = {[key: string]: NullableBoolean};
  export type MapOfStringToList = {[key: string]: ListOfString};
  export type MapOfStringToString = {[key: string]: String};
  export interface Method {
    /**
     * The method's HTTP verb.
     */
    httpMethod?: String;
    /**
     * The method's authorization type. Valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, CUSTOM for using a custom authorizer, or COGNITO_USER_POOLS for using a Cognito user pool.
     */
    authorizationType?: String;
    /**
     * The identifier of an Authorizer to use on this method. The authorizationType must be CUSTOM.
     */
    authorizerId?: String;
    /**
     * A boolean flag specifying whether a valid ApiKey is required to invoke this method.
     */
    apiKeyRequired?: NullableBoolean;
    /**
     * The identifier of a RequestValidator for request validation.
     */
    requestValidatorId?: String;
    /**
     * A human-friendly operation identifier for the method. For example, you can assign the operationName of ListPets for the GET /pets method in PetStore example.
     */
    operationName?: String;
    /**
     * A key-value map defining required or optional method request parameters that can be accepted by Amazon API Gateway. A key is a method request parameter name matching the pattern of method.request.{location}.{name}, where location is querystring, path, or header and name is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (true) or optional (false). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or templates.
     */
    requestParameters?: MapOfStringToBoolean;
    /**
     * A key-value map specifying data schemas, represented by Model resources, (as the mapped value) of the request payloads of given content types (as the mapping key).
     */
    requestModels?: MapOfStringToString;
    /**
     * Gets a method response associated with a given HTTP status code.   The collection of method responses are encapsulated in a key-value map, where the key is a response's HTTP status code and the value is a MethodResponse resource that specifies the response returned to the caller from the back end through the integration response. Example: Get a 200 OK response of a GET method Request  GET /restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200 HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com Content-Length: 117 X-Amz-Date: 20160613T215008Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160613/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash} Response The successful response returns a 200 OK status code and a payload similar to the following: { "_links": { "curies": { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html", "name": "methodresponse", "templated": true }, "self": { "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200", "title": "200" }, "methodresponse:delete": { "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200" }, "methodresponse:update": { "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200" } }, "responseModels": { "application/json": "Empty" }, "responseParameters": { "method.response.header.operator": false, "method.response.header.operand_2": false, "method.response.header.operand_1": false }, "statusCode": "200" }    AWS CLI 
     */
    methodResponses?: MapOfMethodResponse;
    /**
     * Gets the method's integration responsible for passing the client-submitted request to the back end and performing necessary transformations to make the request compliant with the back end.   Example:  Request  GET /restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com Content-Length: 117 X-Amz-Date: 20160613T213210Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160613/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash} Response The successful response returns a 200 OK status code and a payload similar to the following: { "_links": { "curies": [ { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-{rel}.html", "name": "integration", "templated": true }, { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html", "name": "integrationresponse", "templated": true } ], "self": { "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration" }, "integration:delete": { "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration" }, "integration:responses": { "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200", "name": "200", "title": "200" }, "integration:update": { "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration" }, "integrationresponse:put": { "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/{status_code}", "templated": true } }, "cacheKeyParameters": [], "cacheNamespace": "0cjtch", "credentials": "arn:aws:iam::123456789012:role/apigAwsProxyRole", "httpMethod": "POST", "passthroughBehavior": "WHEN_NO_MATCH", "requestTemplates": { "application/json": "{\n \"a\": \"$input.params('operand1')\",\n \"b\": \"$input.params('operand2')\", \n \"op\": \"$input.params('operator')\" \n}" }, "type": "AWS", "uri": "arn:aws:apigateway:us-west-2:lambda:path//2015-03-31/functions/arn:aws:lambda:us-west-2:123456789012:function:Calc/invocations", "_embedded": { "integration:responses": { "_links": { "self": { "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200", "name": "200", "title": "200" }, "integrationresponse:delete": { "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200" }, "integrationresponse:update": { "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200" } }, "responseParameters": { "method.response.header.operator": "integration.response.body.op", "method.response.header.operand_2": "integration.response.body.b", "method.response.header.operand_1": "integration.response.body.a" }, "responseTemplates": { "application/json": "#set($res = $input.path('$'))\n{\n \"result\": \"$res.a, $res.b, $res.op => $res.c\",\n \"a\" : \"$res.a\",\n \"b\" : \"$res.b\",\n \"op\" : \"$res.op\",\n \"c\" : \"$res.c\"\n}" }, "selectionPattern": "", "statusCode": "200" } } }    AWS CLI 
     */
    methodIntegration?: Integration;
  }
  export interface MethodResponse {
    /**
     * The method response's status code.
     */
    statusCode?: StatusCode;
    /**
     * A key-value map specifying required or optional response parameters that Amazon API Gateway can send back to the caller. A key defines a method response header and the value specifies whether the associated method response header is required or not. The expression of the key must match the pattern method.response.header.{name}, where name is a valid and unique header name. Amazon API Gateway passes certain integration response data to the method response headers specified here according to the mapping you prescribe in the API's IntegrationResponse. The integration response data that can be mapped include an integration response header expressed in integration.response.header.{name}, a static value enclosed within a pair of single quotes (e.g., 'application/json'), or a JSON expression from the back-end response payload in the form of integration.response.body.{JSON-expression}, where JSON-expression is a valid JSON expression without the $ prefix.)
     */
    responseParameters?: MapOfStringToBoolean;
    /**
     * Specifies the Model resources used for the response's content-type. Response models are represented as a key/value map, with a content-type as the key and a Model name as the value.
     */
    responseModels?: MapOfStringToString;
  }
  export interface MethodSetting {
    /**
     * Specifies whether Amazon CloudWatch metrics are enabled for this method. The PATCH path for this setting is /{method_setting_key}/metrics/enabled, and the value is a Boolean.
     */
    metricsEnabled?: Boolean;
    /**
     * Specifies the logging level for this method, which effects the log entries pushed to Amazon CloudWatch Logs. The PATCH path for this setting is /{method_setting_key}/logging/loglevel, and the available levels are OFF, ERROR, and INFO.
     */
    loggingLevel?: String;
    /**
     * Specifies whether data trace logging is enabled for this method, which effects the log entries pushed to Amazon CloudWatch Logs. The PATCH path for this setting is /{method_setting_key}/logging/dataTrace, and the value is a Boolean.
     */
    dataTraceEnabled?: Boolean;
    /**
     * Specifies the throttling burst limit. The PATCH path for this setting is /{method_setting_key}/throttling/burstLimit, and the value is an integer.
     */
    throttlingBurstLimit?: Integer;
    /**
     * Specifies the throttling rate limit. The PATCH path for this setting is /{method_setting_key}/throttling/rateLimit, and the value is a double.
     */
    throttlingRateLimit?: Double;
    /**
     * Specifies whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached. The PATCH path for this setting is /{method_setting_key}/caching/enabled, and the value is a Boolean.
     */
    cachingEnabled?: Boolean;
    /**
     * Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached. The PATCH path for this setting is /{method_setting_key}/caching/ttlInSeconds, and the value is an integer.
     */
    cacheTtlInSeconds?: Integer;
    /**
     * Specifies whether the cached responses are encrypted. The PATCH path for this setting is /{method_setting_key}/caching/dataEncrypted, and the value is a Boolean.
     */
    cacheDataEncrypted?: Boolean;
    /**
     * Specifies whether authorization is required for a cache invalidation request. The PATCH path for this setting is /{method_setting_key}/caching/requireAuthorizationForCacheControl, and the value is a Boolean.
     */
    requireAuthorizationForCacheControl?: Boolean;
    /**
     * Specifies how to handle unauthorized requests for cache invalidation. The PATCH path for this setting is /{method_setting_key}/caching/unauthorizedCacheControlHeaderStrategy, and the available values are FAIL_WITH_403, SUCCEED_WITH_RESPONSE_HEADER, SUCCEED_WITHOUT_RESPONSE_HEADER.
     */
    unauthorizedCacheControlHeaderStrategy?: UnauthorizedCacheControlHeaderStrategy;
  }
  export interface MethodSnapshot {
    /**
     * The method's authorization type. Valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, CUSTOM for using a custom authorizer, or COGNITO_USER_POOLS for using a Cognito user pool.
     */
    authorizationType?: String;
    /**
     * Specifies whether the method requires a valid ApiKey.
     */
    apiKeyRequired?: Boolean;
  }
  export interface Model {
    /**
     * The identifier for the model resource.
     */
    id?: String;
    /**
     * The name of the model. Must be an alphanumeric string.
     */
    name?: String;
    /**
     * The description of the model.
     */
    description?: String;
    /**
     * The schema for the model. For application/json models, this should be JSON-schema draft v4 model. Do not include "\*" characters in the description of any properties because such "\*" characters may be interpreted as the closing marker for comments in some languages, such as Java or JavaScript, causing the installation of your API's SDK generated by API Gateway to fail.
     */
    schema?: String;
    /**
     * The content-type for the model.
     */
    contentType?: String;
  }
  export interface Models {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfModel;
  }
  export type NullableBoolean = boolean;
  export type NullableInteger = number;
  export type Op = "add"|"remove"|"replace"|"move"|"copy"|"test"|string;
  export interface PatchOperation {
    /**
     * An update operation to be performed with this PATCH request. The valid value can be "add", "remove", or "replace". Not all valid operations are supported for a given resource. Support of the operations depends on specific operational contexts. Attempts to apply an unsupported operation on a resource will return an error message.
     */
    op?: Op;
    /**
     * The op operation's target, as identified by a JSON Pointer value that references a location within the targeted resource. For example, if the target resource has an updateable property of {"name":"value"}, the path for this property is /name. If the name property value is a JSON object (e.g., {"name": {"child/name": "child-value"}}), the path for the child/name property will be /name/child~1name. Any slash ("/") character appearing in path names must be escaped with "~1", as shown in the example above. Each op operation can have only one path associated with it.
     */
    path?: String;
    /**
     * The new target value of the update operation. When using AWS CLI to update a property of a JSON value, enclose the JSON object with a pair of single quotes in a Linux shell, e.g., '{"a": ...}'. In a Windows shell, see Using JSON for Parameters.
     */
    value?: String;
    /**
     *  Not supported.
     */
    from?: String;
  }
  export type PathToMapOfMethodSnapshot = {[key: string]: MapOfMethodSnapshot};
  export type ProviderARN = string;
  export interface PutGatewayResponseRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The response type of the associated GatewayResponse. Valid values are ACCESS_DENIEDAPI_CONFIGURATION_ERRORAUTHORIZER_FAILURE AUTHORIZER_CONFIGURATION_ERRORBAD_REQUEST_PARAMETERSBAD_REQUEST_BODYDEFAULT_4XXDEFAULT_5XXEXPIRED_TOKENINVALID_SIGNATUREINTEGRATION_FAILUREINTEGRATION_TIMEOUTINVALID_API_KEYMISSING_AUTHENTICATION_TOKEN QUOTA_EXCEEDEDREQUEST_TOO_LARGERESOURCE_NOT_FOUNDTHROTTLEDUNAUTHORIZEDUNSUPPORTED_MEDIA_TYPES 
     */
    responseType: GatewayResponseType;
    /**
     * The HTTP status code of the GatewayResponse.
     */
    statusCode?: StatusCode;
    /**
     * Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs.
     */
    responseParameters?: MapOfStringToString;
    /**
     * Response templates of the GatewayResponse as a string-to-string map of key-value pairs.
     */
    responseTemplates?: MapOfStringToString;
  }
  export interface PutIntegrationRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * Specifies a put integration request's resource ID.
     */
    resourceId: String;
    /**
     * Specifies a put integration request's HTTP method.
     */
    httpMethod: String;
    /**
     * Specifies a put integration input's type.
     */
    type: IntegrationType;
    /**
     * Specifies a put integration HTTP method. When the integration type is HTTP or AWS, this field is required.
     */
    integrationHttpMethod?: String;
    /**
     * Specifies the integration's Uniform Resource Identifier (URI). For HTTP integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification. For AWS integrations, the URI should be of the form arn:aws:apigateway:{region}:{subdomain.service|service}:{path|action}/{service_api}. Region, subdomain and service are used to determine the right endpoint. For AWS services that use the Action= query string parameter, service_api should be a valid action for the desired service. For RESTful AWS service APIs, path is used to indicate that the remaining substring in the URI should be treated as the path to the resource, including the initial /.
     */
    uri?: String;
    /**
     * Specifies whether credentials are required for a put integration.
     */
    credentials?: String;
    /**
     * A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of method.request.{location}.{name}, where location is querystring, path, or header and name must be a valid and unique method request parameter name.
     */
    requestParameters?: MapOfStringToString;
    /**
     * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.
     */
    requestTemplates?: MapOfStringToString;
    /**
     * Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER.   WHEN_NO_MATCH passes the request body for unmapped content types through to the integration back end without transformation. NEVER rejects unmapped content types with an HTTP 415 'Unsupported Media Type' response. WHEN_NO_TEMPLATES allows pass-through when the integration has NO content types mapped to templates. However if there is at least one content type defined, unmapped content types will be rejected with the same 415 response. 
     */
    passthroughBehavior?: String;
    /**
     * Specifies a put integration input's cache namespace.
     */
    cacheNamespace?: String;
    /**
     * Specifies a put integration input's cache key parameters.
     */
    cacheKeyParameters?: ListOfString;
    /**
     * Specifies how to handle request payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:  CONVERT_TO_BINARY: Converts a request payload from a Base64-encoded string to the corresponding binary blob. CONVERT_TO_TEXT: Converts a request payload from a binary blob to a Base64-encoded string.  If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the passthroughBehaviors is configured to support payload pass-through.
     */
    contentHandling?: ContentHandlingStrategy;
  }
  export interface PutIntegrationResponseRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * Specifies a put integration response request's resource identifier.
     */
    resourceId: String;
    /**
     * Specifies a put integration response request's HTTP method.
     */
    httpMethod: String;
    /**
     * Specifies the status code that is used to map the integration response to an existing MethodResponse.
     */
    statusCode: StatusCode;
    /**
     * Specifies the selection pattern of a put integration response.
     */
    selectionPattern?: String;
    /**
     * A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name must be a valid and unique response header name and JSON-expression a valid JSON expression without the $ prefix.
     */
    responseParameters?: MapOfStringToString;
    /**
     * Specifies a put integration response's templates.
     */
    responseTemplates?: MapOfStringToString;
    /**
     * Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:  CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob. CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.  If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.
     */
    contentHandling?: ContentHandlingStrategy;
  }
  export interface PutMethodRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The Resource identifier for the new Method resource.
     */
    resourceId: String;
    /**
     * Specifies the method request's HTTP method type.
     */
    httpMethod: String;
    /**
     * The method's authorization type. Valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, CUSTOM for using a custom authorizer, or COGNITO_USER_POOLS for using a Cognito user pool.
     */
    authorizationType: String;
    /**
     * Specifies the identifier of an Authorizer to use on this Method, if the type is CUSTOM.
     */
    authorizerId?: String;
    /**
     * Specifies whether the method required a valid ApiKey.
     */
    apiKeyRequired?: Boolean;
    /**
     * A human-friendly operation identifier for the method. For example, you can assign the operationName of ListPets for the GET /pets method in PetStore example.
     */
    operationName?: String;
    /**
     * A key-value map defining required or optional method request parameters that can be accepted by Amazon API Gateway. A key defines a method request parameter name matching the pattern of method.request.{location}.{name}, where location is querystring, path, or header and name is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (true) or optional (false). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or body-mapping templates.
     */
    requestParameters?: MapOfStringToBoolean;
    /**
     * Specifies the Model resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a Model name as the value.
     */
    requestModels?: MapOfStringToString;
    /**
     * The identifier of a RequestValidator for validating the method request.
     */
    requestValidatorId?: String;
  }
  export interface PutMethodResponseRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The Resource identifier for the Method resource.
     */
    resourceId: String;
    /**
     * The HTTP verb of the Method resource.
     */
    httpMethod: String;
    /**
     * The method response's status code.
     */
    statusCode: StatusCode;
    /**
     * A key-value map specifying required or optional response parameters that Amazon API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in integration.response.header.{name}, a static value enclosed within a pair of single quotes (e.g., 'application/json'), or a JSON expression from the back-end response payload in the form of integration.response.body.{JSON-expression}, where JSON-expression is a valid JSON expression without the $ prefix.)
     */
    responseParameters?: MapOfStringToBoolean;
    /**
     * Specifies the Model resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a Model name as the value.
     */
    responseModels?: MapOfStringToString;
  }
  export type PutMode = "merge"|"overwrite"|string;
  export interface PutRestApiRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The mode query parameter to specify the update mode. Valid values are "merge" and "overwrite". By default, the update mode is "merge".
     */
    mode?: PutMode;
    /**
     * A query parameter to indicate whether to rollback the API update (true) or not (false) when a warning is encountered. The default value is false.
     */
    failOnWarnings?: Boolean;
    /**
     * Custom header parameters as part of the request. For example, to exclude DocumentationParts from an imported API, set ignore=documentation as a parameters value, as in the AWS CLI command of aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json.
     */
    parameters?: MapOfStringToString;
    /**
     * The PUT request body containing external API definitions. Currently, only Swagger definition JSON files are supported. The maximum size of the API definition file is 2MB.
     */
    body: _Blob;
  }
  export type QuotaPeriodType = "DAY"|"WEEK"|"MONTH"|string;
  export interface QuotaSettings {
    /**
     * The maximum number of requests that can be made in a given time period.
     */
    limit?: Integer;
    /**
     * The number of requests subtracted from the given limit in the initial time period.
     */
    offset?: Integer;
    /**
     * The time period in which the limit applies. Valid values are "DAY", "WEEK" or "MONTH".
     */
    period?: QuotaPeriodType;
  }
  export interface RequestValidator {
    /**
     * The identifier of this RequestValidator.
     */
    id?: String;
    /**
     * The name of this RequestValidator
     */
    name?: String;
    /**
     * A Boolean flag to indicate whether to validate a request body according to the configured Model schema.
     */
    validateRequestBody?: Boolean;
    /**
     * A Boolean flag to indicate whether to validate request parameters (true) or not (false).
     */
    validateRequestParameters?: Boolean;
  }
  export interface RequestValidators {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfRequestValidator;
  }
  export interface Resource {
    /**
     * The resource's identifier.
     */
    id?: String;
    /**
     * The parent resource's identifier.
     */
    parentId?: String;
    /**
     * The last path segment for this resource.
     */
    pathPart?: String;
    /**
     * The full path for this resource.
     */
    path?: String;
    /**
     * Gets an API resource's method of a given HTTP verb.  The resource methods are a map of methods indexed by methods' HTTP verbs enabled on the resource. This method map is included in the 200 OK response of the GET /restapis/{restapi_id}/resources/{resource_id} or GET /restapis/{restapi_id}/resources/{resource_id}?embed=methods request. Example: Get the GET method of an API resource Request GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20170223T031827Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20170223/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash} Response { "_links": { "curies": [ { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-{rel}.html", "name": "integration", "templated": true }, { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html", "name": "integrationresponse", "templated": true }, { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-{rel}.html", "name": "method", "templated": true }, { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html", "name": "methodresponse", "templated": true } ], "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET", "name": "GET", "title": "GET" }, "integration:put": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "method:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET" }, "method:integration": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "method:responses": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200", "name": "200", "title": "200" }, "method:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET" }, "methodresponse:put": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/{status_code}", "templated": true } }, "apiKeyRequired": false, "authorizationType": "NONE", "httpMethod": "GET", "_embedded": { "method:integration": { "_links": { "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "integration:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "integration:responses": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200", "name": "200", "title": "200" }, "integration:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "integrationresponse:put": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/{status_code}", "templated": true } }, "cacheKeyParameters": [], "cacheNamespace": "3kzxbg5sa2", "credentials": "arn:aws:iam::123456789012:role/apigAwsProxyRole", "httpMethod": "POST", "passthroughBehavior": "WHEN_NO_MATCH", "requestParameters": { "integration.request.header.Content-Type": "'application/x-amz-json-1.1'" }, "requestTemplates": { "application/json": "{\n}" }, "type": "AWS", "uri": "arn:aws:apigateway:us-east-1:kinesis:action/ListStreams", "_embedded": { "integration:responses": { "_links": { "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200", "name": "200", "title": "200" }, "integrationresponse:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200" }, "integrationresponse:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200" } }, "responseParameters": { "method.response.header.Content-Type": "'application/xml'" }, "responseTemplates": { "application/json": "$util.urlDecode(\"%3CkinesisStreams%3E#foreach($stream in $input.path('$.StreamNames'))%3Cstream%3E%3Cname%3E$stream%3C/name%3E%3C/stream%3E#end%3C/kinesisStreams%3E\")\n" }, "statusCode": "200" } } }, "method:responses": { "_links": { "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200", "name": "200", "title": "200" }, "methodresponse:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" }, "methodresponse:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" } }, "responseModels": { "application/json": "Empty" }, "responseParameters": { "method.response.header.Content-Type": false }, "statusCode": "200" } } } If the OPTIONS is enabled on the resource, you can follow the example here to get that method. Just replace the GET of the last path segment in the request URL with OPTIONS.   
     */
    resourceMethods?: MapOfMethod;
  }
  export interface Resources {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfResource;
  }
  export interface RestApi {
    /**
     * The API's identifier. This identifier is unique across all of your APIs in Amazon API Gateway.
     */
    id?: String;
    /**
     * The API's name.
     */
    name?: String;
    /**
     * The API's description.
     */
    description?: String;
    /**
     * The timestamp when the API was created.
     */
    createdDate?: Timestamp;
    /**
     * A version identifier for the API.
     */
    version?: String;
    /**
     * The warning messages reported when failonwarnings is turned on during API import.
     */
    warnings?: ListOfString;
    /**
     * The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.
     */
    binaryMediaTypes?: ListOfString;
  }
  export interface RestApis {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfRestApi;
  }
  export interface SdkConfigurationProperty {
    /**
     * The name of a an SdkType configuration property.
     */
    name?: String;
    /**
     * The user-friendly name of an SdkType configuration property.
     */
    friendlyName?: String;
    /**
     * The description of an SdkType configuration property.
     */
    description?: String;
    /**
     * A boolean flag of an SdkType configuration property to indicate if the associated SDK configuration property is required (true) or not (false).
     */
    required?: Boolean;
    /**
     * The default value of an SdkType configuration property.
     */
    defaultValue?: String;
  }
  export interface SdkResponse {
    /**
     * The content-type header value in the HTTP response.
     */
    contentType?: String;
    /**
     * The content-disposition header value in the HTTP response.
     */
    contentDisposition?: String;
    /**
     * The binary blob response to GetSdk, which contains the generated SDK.
     */
    body?: _Blob;
  }
  export interface SdkType {
    /**
     * The identifier of an SdkType instance.
     */
    id?: String;
    /**
     * The user-friendly name of an SdkType instance.
     */
    friendlyName?: String;
    /**
     * The description of an SdkType.
     */
    description?: String;
    /**
     * A list of configuration properties of an SdkType.
     */
    configurationProperties?: ListOfSdkConfigurationProperty;
  }
  export interface SdkTypes {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfSdkType;
  }
  export interface Stage {
    /**
     * The identifier of the Deployment that the stage points to.
     */
    deploymentId?: String;
    /**
     * The identifier of a client certificate for an API stage.
     */
    clientCertificateId?: String;
    /**
     * The name of the stage is the first path segment in the Uniform Resource Identifier (URI) of a call to Amazon API Gateway.
     */
    stageName?: String;
    /**
     * The stage's description.
     */
    description?: String;
    /**
     * Specifies whether a cache cluster is enabled for the stage.
     */
    cacheClusterEnabled?: Boolean;
    /**
     * The size of the cache cluster for the stage, if enabled.
     */
    cacheClusterSize?: CacheClusterSize;
    /**
     * The status of the cache cluster for the stage, if enabled.
     */
    cacheClusterStatus?: CacheClusterStatus;
    /**
     * A map that defines the method settings for a Stage resource. Keys (designated as /{method_setting_key below) are method paths defined as {resource_path}/{http_method} for an individual method override, or /\*\* for overriding all methods in the stage. 
     */
    methodSettings?: MapOfMethodSettings;
    /**
     * A map that defines the stage variables for a Stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.
     */
    variables?: MapOfStringToString;
    /**
     * The version of the associated API documentation.
     */
    documentationVersion?: String;
    /**
     * The timestamp when the stage was created.
     */
    createdDate?: Timestamp;
    /**
     * The timestamp when the stage last updated.
     */
    lastUpdatedDate?: Timestamp;
  }
  export interface StageKey {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId?: String;
    /**
     * The stage name associated with the stage key.
     */
    stageName?: String;
  }
  export interface Stages {
    /**
     * The current page of elements from this collection.
     */
    item?: ListOfStage;
  }
  export type StatusCode = string;
  export type String = string;
  export interface Template {
    /**
     * The Apache Velocity Template Language (VTL) template content used for the template resource.
     */
    value?: String;
  }
  export interface TestInvokeAuthorizerRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * Specifies a test invoke authorizer request's Authorizer ID.
     */
    authorizerId: String;
    /**
     * [Required] A key-value map of headers to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, should be specified.
     */
    headers?: MapOfHeaderValues;
    /**
     * [Optional] The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.
     */
    pathWithQueryString?: String;
    /**
     * [Optional] The simulated request body of an incoming invocation request.
     */
    body?: String;
    /**
     * A key-value map of stage variables to simulate an invocation on a deployed Stage.
     */
    stageVariables?: MapOfStringToString;
    /**
     * [Optional] A key-value map of additional context variables.
     */
    additionalContext?: MapOfStringToString;
  }
  export interface TestInvokeAuthorizerResponse {
    /**
     * The HTTP status code that the client would have received. Value is 0 if the authorizer succeeded.
     */
    clientStatus?: Integer;
    /**
     * The Amazon API Gateway execution log for the test authorizer request.
     */
    log?: String;
    /**
     * The execution latency of the test authorizer request.
     */
    latency?: Long;
    /**
     * The principal identity returned by the Authorizer
     */
    principalId?: String;
    /**
     * The JSON policy document returned by the Authorizer
     */
    policy?: String;
    authorization?: MapOfStringToList;
    /**
     * The open identity claims, with any supported custom attributes, returned from the Cognito Your User Pool configured for the API.
     */
    claims?: MapOfStringToString;
  }
  export interface TestInvokeMethodRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * Specifies a test invoke method request's resource ID.
     */
    resourceId: String;
    /**
     * Specifies a test invoke method request's HTTP method.
     */
    httpMethod: String;
    /**
     * The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.
     */
    pathWithQueryString?: String;
    /**
     * The simulated request body of an incoming invocation request.
     */
    body?: String;
    /**
     * A key-value map of headers to simulate an incoming invocation request.
     */
    headers?: MapOfHeaderValues;
    /**
     * A ClientCertificate identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint.
     */
    clientCertificateId?: String;
    /**
     * A key-value map of stage variables to simulate an invocation on a deployed Stage.
     */
    stageVariables?: MapOfStringToString;
  }
  export interface TestInvokeMethodResponse {
    /**
     * The HTTP status code.
     */
    status?: Integer;
    /**
     * The body of the HTTP response.
     */
    body?: String;
    /**
     * The headers of the HTTP response.
     */
    headers?: MapOfHeaderValues;
    /**
     * The Amazon API Gateway execution log for the test invoke request.
     */
    log?: String;
    /**
     * The execution latency of the test invoke request.
     */
    latency?: Long;
  }
  export interface ThrottleSettings {
    /**
     * The API request burst limit, the maximum rate limit over a time ranging from one to a few seconds, depending upon whether the underlying token bucket is at its full capacity.
     */
    burstLimit?: Integer;
    /**
     * The API request steady-state rate limit.
     */
    rateLimit?: Double;
  }
  export type Timestamp = Date;
  export type UnauthorizedCacheControlHeaderStrategy = "FAIL_WITH_403"|"SUCCEED_WITH_RESPONSE_HEADER"|"SUCCEED_WITHOUT_RESPONSE_HEADER"|string;
  export interface UpdateAccountRequest {
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateApiKeyRequest {
    /**
     * The identifier of the ApiKey resource to be updated.
     */
    apiKey: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateAuthorizerRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The identifier of the Authorizer resource.
     */
    authorizerId: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateBasePathMappingRequest {
    /**
     * The domain name of the BasePathMapping resource to change.
     */
    domainName: String;
    /**
     * The base path of the BasePathMapping resource to change.
     */
    basePath: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateClientCertificateRequest {
    /**
     * The identifier of the ClientCertificate resource to be updated.
     */
    clientCertificateId: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateDeploymentRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The replacement identifier for the Deployment resource to change information about.
     */
    deploymentId: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateDocumentationPartRequest {
    /**
     * [Required] The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * [Required] The identifier of the to-be-updated documentation part.
     */
    documentationPartId: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateDocumentationVersionRequest {
    /**
     * [Required] The string identifier of the associated RestApi..
     */
    restApiId: String;
    /**
     * [Required] The version identifier of the to-be-updated documentation version.
     */
    documentationVersion: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateDomainNameRequest {
    /**
     * The name of the DomainName resource to be changed.
     */
    domainName: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateGatewayResponseRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The response type of the associated GatewayResponse. Valid values are ACCESS_DENIEDAPI_CONFIGURATION_ERRORAUTHORIZER_FAILURE AUTHORIZER_CONFIGURATION_ERRORBAD_REQUEST_PARAMETERSBAD_REQUEST_BODYDEFAULT_4XXDEFAULT_5XXEXPIRED_TOKENINVALID_SIGNATUREINTEGRATION_FAILUREINTEGRATION_TIMEOUTINVALID_API_KEYMISSING_AUTHENTICATION_TOKEN QUOTA_EXCEEDEDREQUEST_TOO_LARGERESOURCE_NOT_FOUNDTHROTTLEDUNAUTHORIZEDUNSUPPORTED_MEDIA_TYPES 
     */
    responseType: GatewayResponseType;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateIntegrationRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * Represents an update integration request's resource identifier.
     */
    resourceId: String;
    /**
     * Represents an update integration request's HTTP method.
     */
    httpMethod: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateIntegrationResponseRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * Specifies an update integration response request's resource identifier.
     */
    resourceId: String;
    /**
     * Specifies an update integration response request's HTTP method.
     */
    httpMethod: String;
    /**
     * Specifies an update integration response request's status code.
     */
    statusCode: StatusCode;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateMethodRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The Resource identifier for the Method resource.
     */
    resourceId: String;
    /**
     * The HTTP verb of the Method resource.
     */
    httpMethod: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateMethodResponseRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The Resource identifier for the MethodResponse resource.
     */
    resourceId: String;
    /**
     * The HTTP verb of the Method resource.
     */
    httpMethod: String;
    /**
     * The status code for the MethodResponse resource.
     */
    statusCode: StatusCode;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateModelRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name of the model to update.
     */
    modelName: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateRequestValidatorRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * [Required] The identifier of RequestValidator to be updated.
     */
    requestValidatorId: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateResourceRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The identifier of the Resource resource.
     */
    resourceId: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateRestApiRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateStageRequest {
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: String;
    /**
     * The name of the Stage resource to change information about.
     */
    stageName: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateUsagePlanRequest {
    /**
     * The Id of the to-be-updated usage plan.
     */
    usagePlanId: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface UpdateUsageRequest {
    /**
     * The Id of the usage plan associated with the usage data.
     */
    usagePlanId: String;
    /**
     * The identifier of the API key associated with the usage plan in which a temporary extension is granted to the remaining quota.
     */
    keyId: String;
    /**
     * A list of update operations to be applied to the specified resource and in the order specified in this list.
     */
    patchOperations?: ListOfPatchOperation;
  }
  export interface Usage {
    /**
     * The plan Id associated with this usage data.
     */
    usagePlanId?: String;
    /**
     * The starting date of the usage data.
     */
    startDate?: String;
    /**
     * The ending date of the usage data.
     */
    endDate?: String;
    position?: String;
    /**
     * The usage data, as daily logs of used and remaining quotas, over the specified time interval indexed over the API keys in a usage plan. For example, {..., "values" : { "{api_key}" : [ [0, 100], [10, 90], [100, 10]]}, where {api_key} stands for an API key value and the daily log entry is of the format [used quota, remaining quota].
     */
    items?: MapOfKeyUsages;
  }
  export interface UsagePlan {
    /**
     * The identifier of a UsagePlan resource.
     */
    id?: String;
    /**
     * The name of a usage plan.
     */
    name?: String;
    /**
     * The description of a usage plan.
     */
    description?: String;
    /**
     * The associated API stages of a usage plan.
     */
    apiStages?: ListOfApiStage;
    /**
     * The request throttle limits of a usage plan.
     */
    throttle?: ThrottleSettings;
    /**
     * The maximum number of permitted requests per a given unit time interval.
     */
    quota?: QuotaSettings;
    /**
     * The AWS Markeplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.
     */
    productCode?: String;
  }
  export interface UsagePlanKey {
    /**
     * The Id of a usage plan key.
     */
    id?: String;
    /**
     * The type of a usage plan key. Currently, the valid key type is API_KEY.
     */
    type?: String;
    /**
     * The value of a usage plan key.
     */
    value?: String;
    /**
     * The name of a usage plan key.
     */
    name?: String;
  }
  export interface UsagePlanKeys {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfUsagePlanKey;
  }
  export interface UsagePlans {
    position?: String;
    /**
     * The current page of elements from this collection.
     */
    items?: ListOfUsagePlan;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-07-09"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the APIGateway client.
   */
  export import Types = APIGateway;
}
export = APIGateway;
