import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Greengrass extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Greengrass.Types.ClientConfiguration)
  config: Config & Greengrass.Types.ClientConfiguration;
  /**
   * Associates a role with a group. The role will be used by the AWS Greengrass core in order to access AWS cloud services. The role's permissions will allow Greengrass core Lambda functions to perform actions against the cloud.
   */
  associateRoleToGroup(params: Greengrass.Types.AssociateRoleToGroupRequest, callback?: (err: AWSError, data: Greengrass.Types.AssociateRoleToGroupResponse) => void): Request<Greengrass.Types.AssociateRoleToGroupResponse, AWSError>;
  /**
   * Associates a role with a group. The role will be used by the AWS Greengrass core in order to access AWS cloud services. The role's permissions will allow Greengrass core Lambda functions to perform actions against the cloud.
   */
  associateRoleToGroup(callback?: (err: AWSError, data: Greengrass.Types.AssociateRoleToGroupResponse) => void): Request<Greengrass.Types.AssociateRoleToGroupResponse, AWSError>;
  /**
   * Associates a role which is used by AWS Greengrass. AWS Greengrass uses the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. It needs to have minimum permissions in policy ``AWSGreengrassResourceAccessRolePolicy``
   */
  associateServiceRoleToAccount(params: Greengrass.Types.AssociateServiceRoleToAccountRequest, callback?: (err: AWSError, data: Greengrass.Types.AssociateServiceRoleToAccountResponse) => void): Request<Greengrass.Types.AssociateServiceRoleToAccountResponse, AWSError>;
  /**
   * Associates a role which is used by AWS Greengrass. AWS Greengrass uses the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. It needs to have minimum permissions in policy ``AWSGreengrassResourceAccessRolePolicy``
   */
  associateServiceRoleToAccount(callback?: (err: AWSError, data: Greengrass.Types.AssociateServiceRoleToAccountResponse) => void): Request<Greengrass.Types.AssociateServiceRoleToAccountResponse, AWSError>;
  /**
   * Creates a core definition. You may optionally provide the initial version of the core definition or use ''CreateCoreDefinitionVersion'' at a later time. AWS Greengrass Groups must each contain exactly 1 AWS Greengrass Core.
   */
  createCoreDefinition(params: Greengrass.Types.CreateCoreDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateCoreDefinitionResponse) => void): Request<Greengrass.Types.CreateCoreDefinitionResponse, AWSError>;
  /**
   * Creates a core definition. You may optionally provide the initial version of the core definition or use ''CreateCoreDefinitionVersion'' at a later time. AWS Greengrass Groups must each contain exactly 1 AWS Greengrass Core.
   */
  createCoreDefinition(callback?: (err: AWSError, data: Greengrass.Types.CreateCoreDefinitionResponse) => void): Request<Greengrass.Types.CreateCoreDefinitionResponse, AWSError>;
  /**
   * Creates a version of a core definition that has already been defined. AWS Greengrass Groups must each contain exactly 1 AWS Greengrass Core.
   */
  createCoreDefinitionVersion(params: Greengrass.Types.CreateCoreDefinitionVersionRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateCoreDefinitionVersionResponse) => void): Request<Greengrass.Types.CreateCoreDefinitionVersionResponse, AWSError>;
  /**
   * Creates a version of a core definition that has already been defined. AWS Greengrass Groups must each contain exactly 1 AWS Greengrass Core.
   */
  createCoreDefinitionVersion(callback?: (err: AWSError, data: Greengrass.Types.CreateCoreDefinitionVersionResponse) => void): Request<Greengrass.Types.CreateCoreDefinitionVersionResponse, AWSError>;
  /**
   * Creates a deployment.
   */
  createDeployment(params: Greengrass.Types.CreateDeploymentRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateDeploymentResponse) => void): Request<Greengrass.Types.CreateDeploymentResponse, AWSError>;
  /**
   * Creates a deployment.
   */
  createDeployment(callback?: (err: AWSError, data: Greengrass.Types.CreateDeploymentResponse) => void): Request<Greengrass.Types.CreateDeploymentResponse, AWSError>;
  /**
   * Creates a device definition. You may optinally provide the initial version of the device definition or use ``CreateDeviceDefinitionVersion`` at a later time.
   */
  createDeviceDefinition(params: Greengrass.Types.CreateDeviceDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateDeviceDefinitionResponse) => void): Request<Greengrass.Types.CreateDeviceDefinitionResponse, AWSError>;
  /**
   * Creates a device definition. You may optinally provide the initial version of the device definition or use ``CreateDeviceDefinitionVersion`` at a later time.
   */
  createDeviceDefinition(callback?: (err: AWSError, data: Greengrass.Types.CreateDeviceDefinitionResponse) => void): Request<Greengrass.Types.CreateDeviceDefinitionResponse, AWSError>;
  /**
   * Creates a version of a device definition that has already been defined.
   */
  createDeviceDefinitionVersion(params: Greengrass.Types.CreateDeviceDefinitionVersionRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateDeviceDefinitionVersionResponse) => void): Request<Greengrass.Types.CreateDeviceDefinitionVersionResponse, AWSError>;
  /**
   * Creates a version of a device definition that has already been defined.
   */
  createDeviceDefinitionVersion(callback?: (err: AWSError, data: Greengrass.Types.CreateDeviceDefinitionVersionResponse) => void): Request<Greengrass.Types.CreateDeviceDefinitionVersionResponse, AWSError>;
  /**
   * Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ``CreateFunctionDefinitionVersion`` later.
   */
  createFunctionDefinition(params: Greengrass.Types.CreateFunctionDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateFunctionDefinitionResponse) => void): Request<Greengrass.Types.CreateFunctionDefinitionResponse, AWSError>;
  /**
   * Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ``CreateFunctionDefinitionVersion`` later.
   */
  createFunctionDefinition(callback?: (err: AWSError, data: Greengrass.Types.CreateFunctionDefinitionResponse) => void): Request<Greengrass.Types.CreateFunctionDefinitionResponse, AWSError>;
  /**
   * Create a version of a Lambda function definition that has already been defined.
   */
  createFunctionDefinitionVersion(params: Greengrass.Types.CreateFunctionDefinitionVersionRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateFunctionDefinitionVersionResponse) => void): Request<Greengrass.Types.CreateFunctionDefinitionVersionResponse, AWSError>;
  /**
   * Create a version of a Lambda function definition that has already been defined.
   */
  createFunctionDefinitionVersion(callback?: (err: AWSError, data: Greengrass.Types.CreateFunctionDefinitionVersionResponse) => void): Request<Greengrass.Types.CreateFunctionDefinitionVersionResponse, AWSError>;
  /**
   * Creates a group. You may optionally provide the initial version of the group or use ''CreateGroupVersion'' at a later time.
   */
  createGroup(params: Greengrass.Types.CreateGroupRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateGroupResponse) => void): Request<Greengrass.Types.CreateGroupResponse, AWSError>;
  /**
   * Creates a group. You may optionally provide the initial version of the group or use ''CreateGroupVersion'' at a later time.
   */
  createGroup(callback?: (err: AWSError, data: Greengrass.Types.CreateGroupResponse) => void): Request<Greengrass.Types.CreateGroupResponse, AWSError>;
  /**
   * Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
   */
  createGroupCertificateAuthority(params: Greengrass.Types.CreateGroupCertificateAuthorityRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateGroupCertificateAuthorityResponse) => void): Request<Greengrass.Types.CreateGroupCertificateAuthorityResponse, AWSError>;
  /**
   * Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
   */
  createGroupCertificateAuthority(callback?: (err: AWSError, data: Greengrass.Types.CreateGroupCertificateAuthorityResponse) => void): Request<Greengrass.Types.CreateGroupCertificateAuthorityResponse, AWSError>;
  /**
   * Creates a version of a group which has already been defined.
   */
  createGroupVersion(params: Greengrass.Types.CreateGroupVersionRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateGroupVersionResponse) => void): Request<Greengrass.Types.CreateGroupVersionResponse, AWSError>;
  /**
   * Creates a version of a group which has already been defined.
   */
  createGroupVersion(callback?: (err: AWSError, data: Greengrass.Types.CreateGroupVersionResponse) => void): Request<Greengrass.Types.CreateGroupVersionResponse, AWSError>;
  /**
   * Creates a logger definition. You may optionally provide the initial version of the logger definition or use ``CreateLoggerDefinitionVersion`` at a later time.
   */
  createLoggerDefinition(params: Greengrass.Types.CreateLoggerDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateLoggerDefinitionResponse) => void): Request<Greengrass.Types.CreateLoggerDefinitionResponse, AWSError>;
  /**
   * Creates a logger definition. You may optionally provide the initial version of the logger definition or use ``CreateLoggerDefinitionVersion`` at a later time.
   */
  createLoggerDefinition(callback?: (err: AWSError, data: Greengrass.Types.CreateLoggerDefinitionResponse) => void): Request<Greengrass.Types.CreateLoggerDefinitionResponse, AWSError>;
  /**
   * Creates a version of a logger definition that has already been defined.
   */
  createLoggerDefinitionVersion(params: Greengrass.Types.CreateLoggerDefinitionVersionRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateLoggerDefinitionVersionResponse) => void): Request<Greengrass.Types.CreateLoggerDefinitionVersionResponse, AWSError>;
  /**
   * Creates a version of a logger definition that has already been defined.
   */
  createLoggerDefinitionVersion(callback?: (err: AWSError, data: Greengrass.Types.CreateLoggerDefinitionVersionResponse) => void): Request<Greengrass.Types.CreateLoggerDefinitionVersionResponse, AWSError>;
  /**
   * Creates a subscription definition. You may optionally provide the initial version of the subscription definition or use ``CreateSubscriptionDefinitionVersion`` at a later time.
   */
  createSubscriptionDefinition(params: Greengrass.Types.CreateSubscriptionDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateSubscriptionDefinitionResponse) => void): Request<Greengrass.Types.CreateSubscriptionDefinitionResponse, AWSError>;
  /**
   * Creates a subscription definition. You may optionally provide the initial version of the subscription definition or use ``CreateSubscriptionDefinitionVersion`` at a later time.
   */
  createSubscriptionDefinition(callback?: (err: AWSError, data: Greengrass.Types.CreateSubscriptionDefinitionResponse) => void): Request<Greengrass.Types.CreateSubscriptionDefinitionResponse, AWSError>;
  /**
   * Creates a version of a subscription definition which has already been defined.
   */
  createSubscriptionDefinitionVersion(params: Greengrass.Types.CreateSubscriptionDefinitionVersionRequest, callback?: (err: AWSError, data: Greengrass.Types.CreateSubscriptionDefinitionVersionResponse) => void): Request<Greengrass.Types.CreateSubscriptionDefinitionVersionResponse, AWSError>;
  /**
   * Creates a version of a subscription definition which has already been defined.
   */
  createSubscriptionDefinitionVersion(callback?: (err: AWSError, data: Greengrass.Types.CreateSubscriptionDefinitionVersionResponse) => void): Request<Greengrass.Types.CreateSubscriptionDefinitionVersionResponse, AWSError>;
  /**
   * Deletes a core definition. The core definition must not have been used in a deployment.
   */
  deleteCoreDefinition(params: Greengrass.Types.DeleteCoreDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.DeleteCoreDefinitionResponse) => void): Request<Greengrass.Types.DeleteCoreDefinitionResponse, AWSError>;
  /**
   * Deletes a core definition. The core definition must not have been used in a deployment.
   */
  deleteCoreDefinition(callback?: (err: AWSError, data: Greengrass.Types.DeleteCoreDefinitionResponse) => void): Request<Greengrass.Types.DeleteCoreDefinitionResponse, AWSError>;
  /**
   * Deletes a device definition. The device definition must not have been used in a deployment.
   */
  deleteDeviceDefinition(params: Greengrass.Types.DeleteDeviceDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.DeleteDeviceDefinitionResponse) => void): Request<Greengrass.Types.DeleteDeviceDefinitionResponse, AWSError>;
  /**
   * Deletes a device definition. The device definition must not have been used in a deployment.
   */
  deleteDeviceDefinition(callback?: (err: AWSError, data: Greengrass.Types.DeleteDeviceDefinitionResponse) => void): Request<Greengrass.Types.DeleteDeviceDefinitionResponse, AWSError>;
  /**
   * Deletes a Lambda function definition. The Lambda function definition must not have been used in a deployment.
   */
  deleteFunctionDefinition(params: Greengrass.Types.DeleteFunctionDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.DeleteFunctionDefinitionResponse) => void): Request<Greengrass.Types.DeleteFunctionDefinitionResponse, AWSError>;
  /**
   * Deletes a Lambda function definition. The Lambda function definition must not have been used in a deployment.
   */
  deleteFunctionDefinition(callback?: (err: AWSError, data: Greengrass.Types.DeleteFunctionDefinitionResponse) => void): Request<Greengrass.Types.DeleteFunctionDefinitionResponse, AWSError>;
  /**
   * Deletes a group. The group must not have been used in deployment.
   */
  deleteGroup(params: Greengrass.Types.DeleteGroupRequest, callback?: (err: AWSError, data: Greengrass.Types.DeleteGroupResponse) => void): Request<Greengrass.Types.DeleteGroupResponse, AWSError>;
  /**
   * Deletes a group. The group must not have been used in deployment.
   */
  deleteGroup(callback?: (err: AWSError, data: Greengrass.Types.DeleteGroupResponse) => void): Request<Greengrass.Types.DeleteGroupResponse, AWSError>;
  /**
   * Deletes a logger definition. The logger definition must not have been used in a deployment.
   */
  deleteLoggerDefinition(params: Greengrass.Types.DeleteLoggerDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.DeleteLoggerDefinitionResponse) => void): Request<Greengrass.Types.DeleteLoggerDefinitionResponse, AWSError>;
  /**
   * Deletes a logger definition. The logger definition must not have been used in a deployment.
   */
  deleteLoggerDefinition(callback?: (err: AWSError, data: Greengrass.Types.DeleteLoggerDefinitionResponse) => void): Request<Greengrass.Types.DeleteLoggerDefinitionResponse, AWSError>;
  /**
   * Deletes a subscription definition. The subscription definition must not have been used in a deployment.
   */
  deleteSubscriptionDefinition(params: Greengrass.Types.DeleteSubscriptionDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.DeleteSubscriptionDefinitionResponse) => void): Request<Greengrass.Types.DeleteSubscriptionDefinitionResponse, AWSError>;
  /**
   * Deletes a subscription definition. The subscription definition must not have been used in a deployment.
   */
  deleteSubscriptionDefinition(callback?: (err: AWSError, data: Greengrass.Types.DeleteSubscriptionDefinitionResponse) => void): Request<Greengrass.Types.DeleteSubscriptionDefinitionResponse, AWSError>;
  /**
   * Disassociates the role from a group.
   */
  disassociateRoleFromGroup(params: Greengrass.Types.DisassociateRoleFromGroupRequest, callback?: (err: AWSError, data: Greengrass.Types.DisassociateRoleFromGroupResponse) => void): Request<Greengrass.Types.DisassociateRoleFromGroupResponse, AWSError>;
  /**
   * Disassociates the role from a group.
   */
  disassociateRoleFromGroup(callback?: (err: AWSError, data: Greengrass.Types.DisassociateRoleFromGroupResponse) => void): Request<Greengrass.Types.DisassociateRoleFromGroupResponse, AWSError>;
  /**
   * Disassociates the service role from the account. Without a service role, deployments will not work.
   */
  disassociateServiceRoleFromAccount(params: Greengrass.Types.DisassociateServiceRoleFromAccountRequest, callback?: (err: AWSError, data: Greengrass.Types.DisassociateServiceRoleFromAccountResponse) => void): Request<Greengrass.Types.DisassociateServiceRoleFromAccountResponse, AWSError>;
  /**
   * Disassociates the service role from the account. Without a service role, deployments will not work.
   */
  disassociateServiceRoleFromAccount(callback?: (err: AWSError, data: Greengrass.Types.DisassociateServiceRoleFromAccountResponse) => void): Request<Greengrass.Types.DisassociateServiceRoleFromAccountResponse, AWSError>;
  /**
   * Retrieves the role associated with a particular group.
   */
  getAssociatedRole(params: Greengrass.Types.GetAssociatedRoleRequest, callback?: (err: AWSError, data: Greengrass.Types.GetAssociatedRoleResponse) => void): Request<Greengrass.Types.GetAssociatedRoleResponse, AWSError>;
  /**
   * Retrieves the role associated with a particular group.
   */
  getAssociatedRole(callback?: (err: AWSError, data: Greengrass.Types.GetAssociatedRoleResponse) => void): Request<Greengrass.Types.GetAssociatedRoleResponse, AWSError>;
  /**
   * Retrieves the connectivity information for a core.
   */
  getConnectivityInfo(params: Greengrass.Types.GetConnectivityInfoRequest, callback?: (err: AWSError, data: Greengrass.Types.GetConnectivityInfoResponse) => void): Request<Greengrass.Types.GetConnectivityInfoResponse, AWSError>;
  /**
   * Retrieves the connectivity information for a core.
   */
  getConnectivityInfo(callback?: (err: AWSError, data: Greengrass.Types.GetConnectivityInfoResponse) => void): Request<Greengrass.Types.GetConnectivityInfoResponse, AWSError>;
  /**
   * Retrieves information about a core definition version.
   */
  getCoreDefinition(params: Greengrass.Types.GetCoreDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.GetCoreDefinitionResponse) => void): Request<Greengrass.Types.GetCoreDefinitionResponse, AWSError>;
  /**
   * Retrieves information about a core definition version.
   */
  getCoreDefinition(callback?: (err: AWSError, data: Greengrass.Types.GetCoreDefinitionResponse) => void): Request<Greengrass.Types.GetCoreDefinitionResponse, AWSError>;
  /**
   * Retrieves information about a core definition version.
   */
  getCoreDefinitionVersion(params: Greengrass.Types.GetCoreDefinitionVersionRequest, callback?: (err: AWSError, data: Greengrass.Types.GetCoreDefinitionVersionResponse) => void): Request<Greengrass.Types.GetCoreDefinitionVersionResponse, AWSError>;
  /**
   * Retrieves information about a core definition version.
   */
  getCoreDefinitionVersion(callback?: (err: AWSError, data: Greengrass.Types.GetCoreDefinitionVersionResponse) => void): Request<Greengrass.Types.GetCoreDefinitionVersionResponse, AWSError>;
  /**
   * Returns the status of a deployment.
   */
  getDeploymentStatus(params: Greengrass.Types.GetDeploymentStatusRequest, callback?: (err: AWSError, data: Greengrass.Types.GetDeploymentStatusResponse) => void): Request<Greengrass.Types.GetDeploymentStatusResponse, AWSError>;
  /**
   * Returns the status of a deployment.
   */
  getDeploymentStatus(callback?: (err: AWSError, data: Greengrass.Types.GetDeploymentStatusResponse) => void): Request<Greengrass.Types.GetDeploymentStatusResponse, AWSError>;
  /**
   * Retrieves information about a device definition.
   */
  getDeviceDefinition(params: Greengrass.Types.GetDeviceDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.GetDeviceDefinitionResponse) => void): Request<Greengrass.Types.GetDeviceDefinitionResponse, AWSError>;
  /**
   * Retrieves information about a device definition.
   */
  getDeviceDefinition(callback?: (err: AWSError, data: Greengrass.Types.GetDeviceDefinitionResponse) => void): Request<Greengrass.Types.GetDeviceDefinitionResponse, AWSError>;
  /**
   * Retrieves information about a device definition version.
   */
  getDeviceDefinitionVersion(params: Greengrass.Types.GetDeviceDefinitionVersionRequest, callback?: (err: AWSError, data: Greengrass.Types.GetDeviceDefinitionVersionResponse) => void): Request<Greengrass.Types.GetDeviceDefinitionVersionResponse, AWSError>;
  /**
   * Retrieves information about a device definition version.
   */
  getDeviceDefinitionVersion(callback?: (err: AWSError, data: Greengrass.Types.GetDeviceDefinitionVersionResponse) => void): Request<Greengrass.Types.GetDeviceDefinitionVersionResponse, AWSError>;
  /**
   * Retrieves information about a Lambda function definition, such as its creation time and latest version.
   */
  getFunctionDefinition(params: Greengrass.Types.GetFunctionDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.GetFunctionDefinitionResponse) => void): Request<Greengrass.Types.GetFunctionDefinitionResponse, AWSError>;
  /**
   * Retrieves information about a Lambda function definition, such as its creation time and latest version.
   */
  getFunctionDefinition(callback?: (err: AWSError, data: Greengrass.Types.GetFunctionDefinitionResponse) => void): Request<Greengrass.Types.GetFunctionDefinitionResponse, AWSError>;
  /**
   * Retrieves information about a Lambda function definition version, such as which Lambda functions are included in the version and their configurations.
   */
  getFunctionDefinitionVersion(params: Greengrass.Types.GetFunctionDefinitionVersionRequest, callback?: (err: AWSError, data: Greengrass.Types.GetFunctionDefinitionVersionResponse) => void): Request<Greengrass.Types.GetFunctionDefinitionVersionResponse, AWSError>;
  /**
   * Retrieves information about a Lambda function definition version, such as which Lambda functions are included in the version and their configurations.
   */
  getFunctionDefinitionVersion(callback?: (err: AWSError, data: Greengrass.Types.GetFunctionDefinitionVersionResponse) => void): Request<Greengrass.Types.GetFunctionDefinitionVersionResponse, AWSError>;
  /**
   * Retrieves information about a group.
   */
  getGroup(params: Greengrass.Types.GetGroupRequest, callback?: (err: AWSError, data: Greengrass.Types.GetGroupResponse) => void): Request<Greengrass.Types.GetGroupResponse, AWSError>;
  /**
   * Retrieves information about a group.
   */
  getGroup(callback?: (err: AWSError, data: Greengrass.Types.GetGroupResponse) => void): Request<Greengrass.Types.GetGroupResponse, AWSError>;
  /**
   * Retreives the CA associated with a group. Returns the public key of the CA.
   */
  getGroupCertificateAuthority(params: Greengrass.Types.GetGroupCertificateAuthorityRequest, callback?: (err: AWSError, data: Greengrass.Types.GetGroupCertificateAuthorityResponse) => void): Request<Greengrass.Types.GetGroupCertificateAuthorityResponse, AWSError>;
  /**
   * Retreives the CA associated with a group. Returns the public key of the CA.
   */
  getGroupCertificateAuthority(callback?: (err: AWSError, data: Greengrass.Types.GetGroupCertificateAuthorityResponse) => void): Request<Greengrass.Types.GetGroupCertificateAuthorityResponse, AWSError>;
  /**
   * Retrieves the current configuration for the CA used by the group.
   */
  getGroupCertificateConfiguration(params: Greengrass.Types.GetGroupCertificateConfigurationRequest, callback?: (err: AWSError, data: Greengrass.Types.GetGroupCertificateConfigurationResponse) => void): Request<Greengrass.Types.GetGroupCertificateConfigurationResponse, AWSError>;
  /**
   * Retrieves the current configuration for the CA used by the group.
   */
  getGroupCertificateConfiguration(callback?: (err: AWSError, data: Greengrass.Types.GetGroupCertificateConfigurationResponse) => void): Request<Greengrass.Types.GetGroupCertificateConfigurationResponse, AWSError>;
  /**
   * Retrieves information about a group version.
   */
  getGroupVersion(params: Greengrass.Types.GetGroupVersionRequest, callback?: (err: AWSError, data: Greengrass.Types.GetGroupVersionResponse) => void): Request<Greengrass.Types.GetGroupVersionResponse, AWSError>;
  /**
   * Retrieves information about a group version.
   */
  getGroupVersion(callback?: (err: AWSError, data: Greengrass.Types.GetGroupVersionResponse) => void): Request<Greengrass.Types.GetGroupVersionResponse, AWSError>;
  /**
   * Retrieves information about a logger definition.
   */
  getLoggerDefinition(params: Greengrass.Types.GetLoggerDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.GetLoggerDefinitionResponse) => void): Request<Greengrass.Types.GetLoggerDefinitionResponse, AWSError>;
  /**
   * Retrieves information about a logger definition.
   */
  getLoggerDefinition(callback?: (err: AWSError, data: Greengrass.Types.GetLoggerDefinitionResponse) => void): Request<Greengrass.Types.GetLoggerDefinitionResponse, AWSError>;
  /**
   * Retrieves information about a logger definition version.
   */
  getLoggerDefinitionVersion(params: Greengrass.Types.GetLoggerDefinitionVersionRequest, callback?: (err: AWSError, data: Greengrass.Types.GetLoggerDefinitionVersionResponse) => void): Request<Greengrass.Types.GetLoggerDefinitionVersionResponse, AWSError>;
  /**
   * Retrieves information about a logger definition version.
   */
  getLoggerDefinitionVersion(callback?: (err: AWSError, data: Greengrass.Types.GetLoggerDefinitionVersionResponse) => void): Request<Greengrass.Types.GetLoggerDefinitionVersionResponse, AWSError>;
  /**
   * Retrieves the service role that is attached to the account.
   */
  getServiceRoleForAccount(params: Greengrass.Types.GetServiceRoleForAccountRequest, callback?: (err: AWSError, data: Greengrass.Types.GetServiceRoleForAccountResponse) => void): Request<Greengrass.Types.GetServiceRoleForAccountResponse, AWSError>;
  /**
   * Retrieves the service role that is attached to the account.
   */
  getServiceRoleForAccount(callback?: (err: AWSError, data: Greengrass.Types.GetServiceRoleForAccountResponse) => void): Request<Greengrass.Types.GetServiceRoleForAccountResponse, AWSError>;
  /**
   * Retrieves information about a subscription definition.
   */
  getSubscriptionDefinition(params: Greengrass.Types.GetSubscriptionDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.GetSubscriptionDefinitionResponse) => void): Request<Greengrass.Types.GetSubscriptionDefinitionResponse, AWSError>;
  /**
   * Retrieves information about a subscription definition.
   */
  getSubscriptionDefinition(callback?: (err: AWSError, data: Greengrass.Types.GetSubscriptionDefinitionResponse) => void): Request<Greengrass.Types.GetSubscriptionDefinitionResponse, AWSError>;
  /**
   * Retrieves information about a subscription definition version.
   */
  getSubscriptionDefinitionVersion(params: Greengrass.Types.GetSubscriptionDefinitionVersionRequest, callback?: (err: AWSError, data: Greengrass.Types.GetSubscriptionDefinitionVersionResponse) => void): Request<Greengrass.Types.GetSubscriptionDefinitionVersionResponse, AWSError>;
  /**
   * Retrieves information about a subscription definition version.
   */
  getSubscriptionDefinitionVersion(callback?: (err: AWSError, data: Greengrass.Types.GetSubscriptionDefinitionVersionResponse) => void): Request<Greengrass.Types.GetSubscriptionDefinitionVersionResponse, AWSError>;
  /**
   * Lists versions of a core definition.
   */
  listCoreDefinitionVersions(params: Greengrass.Types.ListCoreDefinitionVersionsRequest, callback?: (err: AWSError, data: Greengrass.Types.ListCoreDefinitionVersionsResponse) => void): Request<Greengrass.Types.ListCoreDefinitionVersionsResponse, AWSError>;
  /**
   * Lists versions of a core definition.
   */
  listCoreDefinitionVersions(callback?: (err: AWSError, data: Greengrass.Types.ListCoreDefinitionVersionsResponse) => void): Request<Greengrass.Types.ListCoreDefinitionVersionsResponse, AWSError>;
  /**
   * Retrieves a list of core definitions.
   */
  listCoreDefinitions(params: Greengrass.Types.ListCoreDefinitionsRequest, callback?: (err: AWSError, data: Greengrass.Types.ListCoreDefinitionsResponse) => void): Request<Greengrass.Types.ListCoreDefinitionsResponse, AWSError>;
  /**
   * Retrieves a list of core definitions.
   */
  listCoreDefinitions(callback?: (err: AWSError, data: Greengrass.Types.ListCoreDefinitionsResponse) => void): Request<Greengrass.Types.ListCoreDefinitionsResponse, AWSError>;
  /**
   * Returns a history of deployments for the group.
   */
  listDeployments(params: Greengrass.Types.ListDeploymentsRequest, callback?: (err: AWSError, data: Greengrass.Types.ListDeploymentsResponse) => void): Request<Greengrass.Types.ListDeploymentsResponse, AWSError>;
  /**
   * Returns a history of deployments for the group.
   */
  listDeployments(callback?: (err: AWSError, data: Greengrass.Types.ListDeploymentsResponse) => void): Request<Greengrass.Types.ListDeploymentsResponse, AWSError>;
  /**
   * Lists the versions of a device definition.
   */
  listDeviceDefinitionVersions(params: Greengrass.Types.ListDeviceDefinitionVersionsRequest, callback?: (err: AWSError, data: Greengrass.Types.ListDeviceDefinitionVersionsResponse) => void): Request<Greengrass.Types.ListDeviceDefinitionVersionsResponse, AWSError>;
  /**
   * Lists the versions of a device definition.
   */
  listDeviceDefinitionVersions(callback?: (err: AWSError, data: Greengrass.Types.ListDeviceDefinitionVersionsResponse) => void): Request<Greengrass.Types.ListDeviceDefinitionVersionsResponse, AWSError>;
  /**
   * Retrieves a list of device definitions.
   */
  listDeviceDefinitions(params: Greengrass.Types.ListDeviceDefinitionsRequest, callback?: (err: AWSError, data: Greengrass.Types.ListDeviceDefinitionsResponse) => void): Request<Greengrass.Types.ListDeviceDefinitionsResponse, AWSError>;
  /**
   * Retrieves a list of device definitions.
   */
  listDeviceDefinitions(callback?: (err: AWSError, data: Greengrass.Types.ListDeviceDefinitionsResponse) => void): Request<Greengrass.Types.ListDeviceDefinitionsResponse, AWSError>;
  /**
   * Lists the versions of a Lambda function definition.
   */
  listFunctionDefinitionVersions(params: Greengrass.Types.ListFunctionDefinitionVersionsRequest, callback?: (err: AWSError, data: Greengrass.Types.ListFunctionDefinitionVersionsResponse) => void): Request<Greengrass.Types.ListFunctionDefinitionVersionsResponse, AWSError>;
  /**
   * Lists the versions of a Lambda function definition.
   */
  listFunctionDefinitionVersions(callback?: (err: AWSError, data: Greengrass.Types.ListFunctionDefinitionVersionsResponse) => void): Request<Greengrass.Types.ListFunctionDefinitionVersionsResponse, AWSError>;
  /**
   * Retrieves a list of Lambda function definitions.
   */
  listFunctionDefinitions(params: Greengrass.Types.ListFunctionDefinitionsRequest, callback?: (err: AWSError, data: Greengrass.Types.ListFunctionDefinitionsResponse) => void): Request<Greengrass.Types.ListFunctionDefinitionsResponse, AWSError>;
  /**
   * Retrieves a list of Lambda function definitions.
   */
  listFunctionDefinitions(callback?: (err: AWSError, data: Greengrass.Types.ListFunctionDefinitionsResponse) => void): Request<Greengrass.Types.ListFunctionDefinitionsResponse, AWSError>;
  /**
   * Retrieves the current CAs for a group.
   */
  listGroupCertificateAuthorities(params: Greengrass.Types.ListGroupCertificateAuthoritiesRequest, callback?: (err: AWSError, data: Greengrass.Types.ListGroupCertificateAuthoritiesResponse) => void): Request<Greengrass.Types.ListGroupCertificateAuthoritiesResponse, AWSError>;
  /**
   * Retrieves the current CAs for a group.
   */
  listGroupCertificateAuthorities(callback?: (err: AWSError, data: Greengrass.Types.ListGroupCertificateAuthoritiesResponse) => void): Request<Greengrass.Types.ListGroupCertificateAuthoritiesResponse, AWSError>;
  /**
   * List the versions of a group.
   */
  listGroupVersions(params: Greengrass.Types.ListGroupVersionsRequest, callback?: (err: AWSError, data: Greengrass.Types.ListGroupVersionsResponse) => void): Request<Greengrass.Types.ListGroupVersionsResponse, AWSError>;
  /**
   * List the versions of a group.
   */
  listGroupVersions(callback?: (err: AWSError, data: Greengrass.Types.ListGroupVersionsResponse) => void): Request<Greengrass.Types.ListGroupVersionsResponse, AWSError>;
  /**
   * Retrieves a list of groups.
   */
  listGroups(params: Greengrass.Types.ListGroupsRequest, callback?: (err: AWSError, data: Greengrass.Types.ListGroupsResponse) => void): Request<Greengrass.Types.ListGroupsResponse, AWSError>;
  /**
   * Retrieves a list of groups.
   */
  listGroups(callback?: (err: AWSError, data: Greengrass.Types.ListGroupsResponse) => void): Request<Greengrass.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists the versions of a logger definition.
   */
  listLoggerDefinitionVersions(params: Greengrass.Types.ListLoggerDefinitionVersionsRequest, callback?: (err: AWSError, data: Greengrass.Types.ListLoggerDefinitionVersionsResponse) => void): Request<Greengrass.Types.ListLoggerDefinitionVersionsResponse, AWSError>;
  /**
   * Lists the versions of a logger definition.
   */
  listLoggerDefinitionVersions(callback?: (err: AWSError, data: Greengrass.Types.ListLoggerDefinitionVersionsResponse) => void): Request<Greengrass.Types.ListLoggerDefinitionVersionsResponse, AWSError>;
  /**
   * Retrieves a list of logger definitions.
   */
  listLoggerDefinitions(params: Greengrass.Types.ListLoggerDefinitionsRequest, callback?: (err: AWSError, data: Greengrass.Types.ListLoggerDefinitionsResponse) => void): Request<Greengrass.Types.ListLoggerDefinitionsResponse, AWSError>;
  /**
   * Retrieves a list of logger definitions.
   */
  listLoggerDefinitions(callback?: (err: AWSError, data: Greengrass.Types.ListLoggerDefinitionsResponse) => void): Request<Greengrass.Types.ListLoggerDefinitionsResponse, AWSError>;
  /**
   * Lists the versions of a subscription definition.
   */
  listSubscriptionDefinitionVersions(params: Greengrass.Types.ListSubscriptionDefinitionVersionsRequest, callback?: (err: AWSError, data: Greengrass.Types.ListSubscriptionDefinitionVersionsResponse) => void): Request<Greengrass.Types.ListSubscriptionDefinitionVersionsResponse, AWSError>;
  /**
   * Lists the versions of a subscription definition.
   */
  listSubscriptionDefinitionVersions(callback?: (err: AWSError, data: Greengrass.Types.ListSubscriptionDefinitionVersionsResponse) => void): Request<Greengrass.Types.ListSubscriptionDefinitionVersionsResponse, AWSError>;
  /**
   * Retrieves a list of subscription definitions.
   */
  listSubscriptionDefinitions(params: Greengrass.Types.ListSubscriptionDefinitionsRequest, callback?: (err: AWSError, data: Greengrass.Types.ListSubscriptionDefinitionsResponse) => void): Request<Greengrass.Types.ListSubscriptionDefinitionsResponse, AWSError>;
  /**
   * Retrieves a list of subscription definitions.
   */
  listSubscriptionDefinitions(callback?: (err: AWSError, data: Greengrass.Types.ListSubscriptionDefinitionsResponse) => void): Request<Greengrass.Types.ListSubscriptionDefinitionsResponse, AWSError>;
  /**
   * Resets a group's deployments.
   */
  resetDeployments(params: Greengrass.Types.ResetDeploymentsRequest, callback?: (err: AWSError, data: Greengrass.Types.ResetDeploymentsResponse) => void): Request<Greengrass.Types.ResetDeploymentsResponse, AWSError>;
  /**
   * Resets a group's deployments.
   */
  resetDeployments(callback?: (err: AWSError, data: Greengrass.Types.ResetDeploymentsResponse) => void): Request<Greengrass.Types.ResetDeploymentsResponse, AWSError>;
  /**
   * Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
   */
  updateConnectivityInfo(params: Greengrass.Types.UpdateConnectivityInfoRequest, callback?: (err: AWSError, data: Greengrass.Types.UpdateConnectivityInfoResponse) => void): Request<Greengrass.Types.UpdateConnectivityInfoResponse, AWSError>;
  /**
   * Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
   */
  updateConnectivityInfo(callback?: (err: AWSError, data: Greengrass.Types.UpdateConnectivityInfoResponse) => void): Request<Greengrass.Types.UpdateConnectivityInfoResponse, AWSError>;
  /**
   * Updates a core definition.
   */
  updateCoreDefinition(params: Greengrass.Types.UpdateCoreDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.UpdateCoreDefinitionResponse) => void): Request<Greengrass.Types.UpdateCoreDefinitionResponse, AWSError>;
  /**
   * Updates a core definition.
   */
  updateCoreDefinition(callback?: (err: AWSError, data: Greengrass.Types.UpdateCoreDefinitionResponse) => void): Request<Greengrass.Types.UpdateCoreDefinitionResponse, AWSError>;
  /**
   * Updates a device definition.
   */
  updateDeviceDefinition(params: Greengrass.Types.UpdateDeviceDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.UpdateDeviceDefinitionResponse) => void): Request<Greengrass.Types.UpdateDeviceDefinitionResponse, AWSError>;
  /**
   * Updates a device definition.
   */
  updateDeviceDefinition(callback?: (err: AWSError, data: Greengrass.Types.UpdateDeviceDefinitionResponse) => void): Request<Greengrass.Types.UpdateDeviceDefinitionResponse, AWSError>;
  /**
   * Updates a Lambda function definition.
   */
  updateFunctionDefinition(params: Greengrass.Types.UpdateFunctionDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.UpdateFunctionDefinitionResponse) => void): Request<Greengrass.Types.UpdateFunctionDefinitionResponse, AWSError>;
  /**
   * Updates a Lambda function definition.
   */
  updateFunctionDefinition(callback?: (err: AWSError, data: Greengrass.Types.UpdateFunctionDefinitionResponse) => void): Request<Greengrass.Types.UpdateFunctionDefinitionResponse, AWSError>;
  /**
   * Updates a group.
   */
  updateGroup(params: Greengrass.Types.UpdateGroupRequest, callback?: (err: AWSError, data: Greengrass.Types.UpdateGroupResponse) => void): Request<Greengrass.Types.UpdateGroupResponse, AWSError>;
  /**
   * Updates a group.
   */
  updateGroup(callback?: (err: AWSError, data: Greengrass.Types.UpdateGroupResponse) => void): Request<Greengrass.Types.UpdateGroupResponse, AWSError>;
  /**
   * Updates the Cert expiry time for a group.
   */
  updateGroupCertificateConfiguration(params: Greengrass.Types.UpdateGroupCertificateConfigurationRequest, callback?: (err: AWSError, data: Greengrass.Types.UpdateGroupCertificateConfigurationResponse) => void): Request<Greengrass.Types.UpdateGroupCertificateConfigurationResponse, AWSError>;
  /**
   * Updates the Cert expiry time for a group.
   */
  updateGroupCertificateConfiguration(callback?: (err: AWSError, data: Greengrass.Types.UpdateGroupCertificateConfigurationResponse) => void): Request<Greengrass.Types.UpdateGroupCertificateConfigurationResponse, AWSError>;
  /**
   * Updates a logger definition.
   */
  updateLoggerDefinition(params: Greengrass.Types.UpdateLoggerDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.UpdateLoggerDefinitionResponse) => void): Request<Greengrass.Types.UpdateLoggerDefinitionResponse, AWSError>;
  /**
   * Updates a logger definition.
   */
  updateLoggerDefinition(callback?: (err: AWSError, data: Greengrass.Types.UpdateLoggerDefinitionResponse) => void): Request<Greengrass.Types.UpdateLoggerDefinitionResponse, AWSError>;
  /**
   * Updates a subscription definition.
   */
  updateSubscriptionDefinition(params: Greengrass.Types.UpdateSubscriptionDefinitionRequest, callback?: (err: AWSError, data: Greengrass.Types.UpdateSubscriptionDefinitionResponse) => void): Request<Greengrass.Types.UpdateSubscriptionDefinitionResponse, AWSError>;
  /**
   * Updates a subscription definition.
   */
  updateSubscriptionDefinition(callback?: (err: AWSError, data: Greengrass.Types.UpdateSubscriptionDefinitionResponse) => void): Request<Greengrass.Types.UpdateSubscriptionDefinitionResponse, AWSError>;
}
declare namespace Greengrass {
  export interface AssociateRoleToGroupRequest {
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
    /**
     * Role arn you wish to associate with this group.
     */
    RoleArn?: __string;
  }
  export interface AssociateRoleToGroupResponse {
    /**
     * Time the role arn was associated to your group.
     */
    AssociatedAt?: __string;
  }
  export interface AssociateServiceRoleToAccountRequest {
    /**
     * Role arn you wish to associate with this account.
     */
    RoleArn?: __string;
  }
  export interface AssociateServiceRoleToAccountResponse {
    /**
     * Time when the service role was associated to the account.
     */
    AssociatedAt?: __string;
  }
  export interface ConnectivityInfo {
    /**
     * Endpoint for the GGC. Can be an IP address or DNS.
     */
    HostAddress?: __string;
    /**
     * Element Id for this entry in the list.
     */
    Id?: __string;
    /**
     * Metadata for this endpoint.
     */
    Metadata?: __string;
    /**
     * Port of the GGC. Usually 8883.
     */
    PortNumber?: __integer;
  }
  export interface Core {
    /**
     * Certificate arn of the core.
     */
    CertificateArn?: __string;
    /**
     * Element Id for this entry in the list.
     */
    Id?: __string;
    /**
     * If true, the local shadow value automatically syncs with the cloud's shadow state.
     */
    SyncShadow?: __boolean;
    /**
     * Thing arn of the core.
     */
    ThingArn?: __string;
  }
  export interface CoreDefinitionVersion {
    /**
     * Cores in the definition version.
     */
    Cores?: ListOfCore;
  }
  export interface CreateCoreDefinitionRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * Information on the initial version
     */
    InitialVersion?: CoreDefinitionVersion;
    /**
     * name of the core definition
     */
    Name?: __string;
  }
  export interface CreateCoreDefinitionResponse {
    /**
     * Arn of the definition.
     */
    Arn?: __string;
    /**
     * Timestamp of when the definition was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the definition.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the definition.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the definition.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the definition.
     */
    LatestVersionArn?: __string;
    /**
     * Name of the definition.
     */
    Name?: __string;
  }
  export interface CreateCoreDefinitionVersionRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * core definition Id
     */
    CoreDefinitionId: __string;
    /**
     * Cores in the definition version.
     */
    Cores?: ListOfCore;
  }
  export interface CreateCoreDefinitionVersionResponse {
    /**
     * Arn of the version.
     */
    Arn?: __string;
    /**
     * Timestamp of when the version was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the resource container.
     */
    Id?: __string;
    /**
     * Unique Id of a version.
     */
    Version?: __string;
  }
  export interface CreateDeploymentRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * Id of the deployment if you wish to redeploy a previous deployment.
     */
    DeploymentId?: __string;
    /**
     * Type of deployment. When used in CreateDeployment, only NewDeployment and Redeployment are valid. 
     */
    DeploymentType?: DeploymentType;
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
    /**
     * Group Version you wish to deploy.
     */
    GroupVersionId?: __string;
  }
  export interface CreateDeploymentResponse {
    /**
     * The arn of the deployment.
     */
    DeploymentArn?: __string;
    /**
     * The id of the deployment.
     */
    DeploymentId?: __string;
  }
  export interface CreateDeviceDefinitionRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * Information on the initial version
     */
    InitialVersion?: DeviceDefinitionVersion;
    /**
     * name of the device definition
     */
    Name?: __string;
  }
  export interface CreateDeviceDefinitionResponse {
    /**
     * Arn of the definition.
     */
    Arn?: __string;
    /**
     * Timestamp of when the definition was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the definition.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the definition.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the definition.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the definition.
     */
    LatestVersionArn?: __string;
    /**
     * Name of the definition.
     */
    Name?: __string;
  }
  export interface CreateDeviceDefinitionVersionRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * device definition Id
     */
    DeviceDefinitionId: __string;
    /**
     * Devices in the definition version.
     */
    Devices?: ListOfDevice;
  }
  export interface CreateDeviceDefinitionVersionResponse {
    /**
     * Arn of the version.
     */
    Arn?: __string;
    /**
     * Timestamp of when the version was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the resource container.
     */
    Id?: __string;
    /**
     * Unique Id of a version.
     */
    Version?: __string;
  }
  export interface CreateFunctionDefinitionRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * Information on the initial version
     */
    InitialVersion?: FunctionDefinitionVersion;
    /**
     * name of the function definition
     */
    Name?: __string;
  }
  export interface CreateFunctionDefinitionResponse {
    /**
     * Arn of the definition.
     */
    Arn?: __string;
    /**
     * Timestamp of when the definition was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the definition.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the definition.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the definition.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the definition.
     */
    LatestVersionArn?: __string;
    /**
     * Name of the definition.
     */
    Name?: __string;
  }
  export interface CreateFunctionDefinitionVersionRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * the unique Id of the lambda definition
     */
    FunctionDefinitionId: __string;
    /**
     * Lambda functions in this function definition version.
     */
    Functions?: ListOfFunction;
  }
  export interface CreateFunctionDefinitionVersionResponse {
    /**
     * Arn of the version.
     */
    Arn?: __string;
    /**
     * Timestamp of when the version was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the resource container.
     */
    Id?: __string;
    /**
     * Unique Id of a version.
     */
    Version?: __string;
  }
  export interface CreateGroupCertificateAuthorityRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
  }
  export interface CreateGroupCertificateAuthorityResponse {
    /**
     * Arn of the group certificate authority.
     */
    GroupCertificateAuthorityArn?: __string;
  }
  export interface CreateGroupRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * Information on the initial version
     */
    InitialVersion?: GroupVersion;
    /**
     * name of the group
     */
    Name?: __string;
  }
  export interface CreateGroupResponse {
    /**
     * Arn of the definition.
     */
    Arn?: __string;
    /**
     * Timestamp of when the definition was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the definition.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the definition.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the definition.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the definition.
     */
    LatestVersionArn?: __string;
    /**
     * Name of the definition.
     */
    Name?: __string;
  }
  export interface CreateGroupVersionRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * Core definition version arn for this group.
     */
    CoreDefinitionVersionArn?: __string;
    /**
     * Device definition version arn for this group.
     */
    DeviceDefinitionVersionArn?: __string;
    /**
     * Function definition version arn for this group.
     */
    FunctionDefinitionVersionArn?: __string;
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
    /**
     * Logger definitionv ersion arn for this group.
     */
    LoggerDefinitionVersionArn?: __string;
    /**
     * Subscription definition version arn for this group.
     */
    SubscriptionDefinitionVersionArn?: __string;
  }
  export interface CreateGroupVersionResponse {
    /**
     * Arn of the version.
     */
    Arn?: __string;
    /**
     * Timestamp of when the version was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the resource container.
     */
    Id?: __string;
    /**
     * Unique Id of a version.
     */
    Version?: __string;
  }
  export interface CreateLoggerDefinitionRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * Information on the initial version
     */
    InitialVersion?: LoggerDefinitionVersion;
    /**
     * name of the logger definition
     */
    Name?: __string;
  }
  export interface CreateLoggerDefinitionResponse {
    /**
     * Arn of the definition.
     */
    Arn?: __string;
    /**
     * Timestamp of when the definition was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the definition.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the definition.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the definition.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the definition.
     */
    LatestVersionArn?: __string;
    /**
     * Name of the definition.
     */
    Name?: __string;
  }
  export interface CreateLoggerDefinitionVersionRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * logger definition Id
     */
    LoggerDefinitionId: __string;
    /**
     * List of loggers.
     */
    Loggers?: ListOfLogger;
  }
  export interface CreateLoggerDefinitionVersionResponse {
    /**
     * Arn of the version.
     */
    Arn?: __string;
    /**
     * Timestamp of when the version was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the resource container.
     */
    Id?: __string;
    /**
     * Unique Id of a version.
     */
    Version?: __string;
  }
  export interface CreateSubscriptionDefinitionRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * Information on the initial version
     */
    InitialVersion?: SubscriptionDefinitionVersion;
    /**
     * name of the subscription definition
     */
    Name?: __string;
  }
  export interface CreateSubscriptionDefinitionResponse {
    /**
     * Arn of the definition.
     */
    Arn?: __string;
    /**
     * Timestamp of when the definition was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the definition.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the definition.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the definition.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the definition.
     */
    LatestVersionArn?: __string;
    /**
     * Name of the definition.
     */
    Name?: __string;
  }
  export interface CreateSubscriptionDefinitionVersionRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * subscription definition Id
     */
    SubscriptionDefinitionId: __string;
    /**
     * Subscriptions in the version.
     */
    Subscriptions?: ListOfSubscription;
  }
  export interface CreateSubscriptionDefinitionVersionResponse {
    /**
     * Arn of the version.
     */
    Arn?: __string;
    /**
     * Timestamp of when the version was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the resource container.
     */
    Id?: __string;
    /**
     * Unique Id of a version.
     */
    Version?: __string;
  }
  export interface DefinitionInformation {
    /**
     * Arn of the definition.
     */
    Arn?: __string;
    /**
     * Timestamp of when the definition was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the definition.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the definition.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the definition.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the definition.
     */
    LatestVersionArn?: __string;
    /**
     * Name of the definition.
     */
    Name?: __string;
  }
  export interface DeleteCoreDefinitionRequest {
    /**
     * core definition Id
     */
    CoreDefinitionId: __string;
  }
  export interface DeleteCoreDefinitionResponse {
  }
  export interface DeleteDeviceDefinitionRequest {
    /**
     * device definition Id
     */
    DeviceDefinitionId: __string;
  }
  export interface DeleteDeviceDefinitionResponse {
  }
  export interface DeleteFunctionDefinitionRequest {
    /**
     * the unique Id of the lambda definition
     */
    FunctionDefinitionId: __string;
  }
  export interface DeleteFunctionDefinitionResponse {
  }
  export interface DeleteGroupRequest {
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
  }
  export interface DeleteGroupResponse {
  }
  export interface DeleteLoggerDefinitionRequest {
    /**
     * logger definition Id
     */
    LoggerDefinitionId: __string;
  }
  export interface DeleteLoggerDefinitionResponse {
  }
  export interface DeleteSubscriptionDefinitionRequest {
    /**
     * subscription definition Id
     */
    SubscriptionDefinitionId: __string;
  }
  export interface DeleteSubscriptionDefinitionResponse {
  }
  export interface Deployment {
    /**
     * Timestamp when the deployment was created.
     */
    CreatedAt?: __string;
    /**
     * Arn of the deployment.
     */
    DeploymentArn?: __string;
    /**
     * Id of the deployment.
     */
    DeploymentId?: __string;
    /**
     * The type of deployment.
     */
    DeploymentType?: DeploymentType;
    /**
     * Arn of the group for this deployment.
     */
    GroupArn?: __string;
  }
  export type DeploymentType = "NewDeployment"|"Redeployment"|"ResetDeployment"|"ForceResetDeployment"|string;
  export type Deployments = Deployment[];
  export interface Device {
    /**
     * Certificate arn of the device.
     */
    CertificateArn?: __string;
    /**
     * Element Id for this entry in the list.
     */
    Id?: __string;
    /**
     * If true, the local shadow value automatically syncs with the cloud's shadow state.
     */
    SyncShadow?: __boolean;
    /**
     * Thing arn of the device.
     */
    ThingArn?: __string;
  }
  export interface DeviceDefinitionVersion {
    /**
     * Devices in the definition version.
     */
    Devices?: ListOfDevice;
  }
  export interface DisassociateRoleFromGroupRequest {
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
  }
  export interface DisassociateRoleFromGroupResponse {
    /**
     * Time when the role was disassociated from the group.
     */
    DisassociatedAt?: __string;
  }
  export interface DisassociateServiceRoleFromAccountRequest {
  }
  export interface DisassociateServiceRoleFromAccountResponse {
    /**
     * Time when the service role was disassociated from the account.
     */
    DisassociatedAt?: __string;
  }
  export interface Empty {
  }
  export interface ErrorDetail {
    /**
     * Detailed Error Code
     */
    DetailedErrorCode?: __string;
    /**
     * Detailed Error Message
     */
    DetailedErrorMessage?: __string;
  }
  export type ErrorDetails = ErrorDetail[];
  export interface Function {
    /**
     * Arn of the Lambda function.
     */
    FunctionArn?: __string;
    /**
     * Configuration of the function
     */
    FunctionConfiguration?: FunctionConfiguration;
    /**
     * Id of the function in this version.
     */
    Id?: __string;
  }
  export interface FunctionConfiguration {
    /**
     * Environment of the function configuration
     */
    Environment?: FunctionConfigurationEnvironment;
    /**
     * Execution Arguments
     */
    ExecArgs?: __string;
    /**
     * Executable
     */
    Executable?: __string;
    /**
     * The memory size, in KB, you configured for the function.
     */
    MemorySize?: __integer;
    /**
     * Whether the function is pinned or not. Pinned means the function is long-lived and starts when the core starts.
     */
    Pinned?: __boolean;
    /**
     * The function execution time at which Lambda should terminate the function. This timeout still applies to pinned lambdas for each request.
     */
    Timeout?: __integer;
  }
  export interface FunctionConfigurationEnvironment {
    /**
     * Environment variables for the lambda function.
     */
    Variables?: MapOf__string;
  }
  export interface FunctionDefinitionVersion {
    /**
     * Lambda functions in this function definition version.
     */
    Functions?: ListOfFunction;
  }
  export interface GeneralError {
    /**
     * Error Details
     */
    ErrorDetails?: ErrorDetails;
    /**
     * Message containing information about the error
     */
    Message?: __string;
  }
  export interface GetAssociatedRoleRequest {
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
  }
  export interface GetAssociatedRoleResponse {
    /**
     * Time when the role was associated for the group.
     */
    AssociatedAt?: __string;
    /**
     * Arn of the role that is associated with the group.
     */
    RoleArn?: __string;
  }
  export interface GetConnectivityInfoRequest {
    /**
     * Thing Name
     */
    ThingName: __string;
  }
  export interface GetConnectivityInfoResponse {
    /**
     * Connectivity info list
     */
    ConnectivityInfo?: ListOfConnectivityInfo;
    /**
     * Response Text
     */
    Message?: __string;
  }
  export interface GetCoreDefinitionRequest {
    /**
     * core definition Id
     */
    CoreDefinitionId: __string;
  }
  export interface GetCoreDefinitionResponse {
    /**
     * Arn of the definition.
     */
    Arn?: __string;
    /**
     * Timestamp of when the definition was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the definition.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the definition.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the definition.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the definition.
     */
    LatestVersionArn?: __string;
    /**
     * Name of the definition.
     */
    Name?: __string;
  }
  export interface GetCoreDefinitionVersionRequest {
    /**
     * core definition Id
     */
    CoreDefinitionId: __string;
    /**
     * core definition version Id
     */
    CoreDefinitionVersionId: __string;
  }
  export interface GetCoreDefinitionVersionResponse {
    /**
     * Arn of the core definition version.
     */
    Arn?: __string;
    /**
     * Timestamp of when the core definition version was created.
     */
    CreationTimestamp?: __string;
    /**
     * Information on definition
     */
    Definition?: CoreDefinitionVersion;
    /**
     * Id of the core definition the version belongs to.
     */
    Id?: __string;
    /**
     * Version of the core definition version.
     */
    Version?: __string;
  }
  export interface GetDeploymentStatusRequest {
    /**
     * the deployment Id
     */
    DeploymentId: __string;
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
  }
  export interface GetDeploymentStatusResponse {
    /**
     * Status of the deployment.
     */
    DeploymentStatus?: __string;
    /**
     * The type of the deployment.
     */
    DeploymentType?: DeploymentType;
    /**
     * The error Details
     */
    ErrorDetails?: ErrorDetails;
    /**
     * Error Message
     */
    ErrorMessage?: __string;
    /**
     * Last time the deployment status was updated.
     */
    UpdatedAt?: __string;
  }
  export interface GetDeviceDefinitionRequest {
    /**
     * device definition Id
     */
    DeviceDefinitionId: __string;
  }
  export interface GetDeviceDefinitionResponse {
    /**
     * Arn of the definition.
     */
    Arn?: __string;
    /**
     * Timestamp of when the definition was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the definition.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the definition.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the definition.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the definition.
     */
    LatestVersionArn?: __string;
    /**
     * Name of the definition.
     */
    Name?: __string;
  }
  export interface GetDeviceDefinitionVersionRequest {
    /**
     * device definition Id
     */
    DeviceDefinitionId: __string;
    /**
     * device definition version Id
     */
    DeviceDefinitionVersionId: __string;
  }
  export interface GetDeviceDefinitionVersionResponse {
    /**
     * Arn of the device definition version.
     */
    Arn?: __string;
    /**
     * Timestamp of when the device definition version was created.
     */
    CreationTimestamp?: __string;
    /**
     * Device definition version
     */
    Definition?: DeviceDefinitionVersion;
    /**
     * Id of the device definition the version belongs to.
     */
    Id?: __string;
    /**
     * Version of the device definition version.
     */
    Version?: __string;
  }
  export interface GetFunctionDefinitionRequest {
    /**
     * the unique Id of the lambda definition
     */
    FunctionDefinitionId: __string;
  }
  export interface GetFunctionDefinitionResponse {
    /**
     * Arn of the definition.
     */
    Arn?: __string;
    /**
     * Timestamp of when the definition was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the definition.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the definition.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the definition.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the definition.
     */
    LatestVersionArn?: __string;
    /**
     * Name of the definition.
     */
    Name?: __string;
  }
  export interface GetFunctionDefinitionVersionRequest {
    /**
     * the unique Id of the lambda definition
     */
    FunctionDefinitionId: __string;
    /**
     * Function definition version Id
     */
    FunctionDefinitionVersionId: __string;
  }
  export interface GetFunctionDefinitionVersionResponse {
    /**
     * Arn of the function definition version.
     */
    Arn?: __string;
    /**
     * Timestamp when the funtion definition version was created.
     */
    CreationTimestamp?: __string;
    /**
     * Information on the definition.
     */
    Definition?: FunctionDefinitionVersion;
    /**
     * Id of the function definition the version belongs to.
     */
    Id?: __string;
    /**
     * Version of the function definition version.
     */
    Version?: __string;
  }
  export interface GetGroupCertificateAuthorityRequest {
    /**
     * certificate authority Id
     */
    CertificateAuthorityId: __string;
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
  }
  export interface GetGroupCertificateAuthorityResponse {
    /**
     * Arn of the certificate authority for the group.
     */
    GroupCertificateAuthorityArn?: __string;
    /**
     * Id of the certificate authority for the group.
     */
    GroupCertificateAuthorityId?: __string;
    /**
     * PEM encoded certificate for the group.
     */
    PemEncodedCertificate?: __string;
  }
  export interface GetGroupCertificateConfigurationRequest {
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
  }
  export interface GetGroupCertificateConfigurationResponse {
    /**
     * Amount of time when the certificate authority expires in milliseconds.
     */
    CertificateAuthorityExpiryInMilliseconds?: __string;
    /**
     * Amount of time when the certificate expires in milliseconds.
     */
    CertificateExpiryInMilliseconds?: __string;
    /**
     * Id of the group the certificate configuration belongs to.
     */
    GroupId?: __string;
  }
  export interface GetGroupRequest {
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
  }
  export interface GetGroupResponse {
    /**
     * Arn of the definition.
     */
    Arn?: __string;
    /**
     * Timestamp of when the definition was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the definition.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the definition.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the definition.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the definition.
     */
    LatestVersionArn?: __string;
    /**
     * Name of the definition.
     */
    Name?: __string;
  }
  export interface GetGroupVersionRequest {
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
    /**
     * Group version Id
     */
    GroupVersionId: __string;
  }
  export interface GetGroupVersionResponse {
    /**
     * Arn of the group version.
     */
    Arn?: __string;
    /**
     * Timestamp when the group version was created.
     */
    CreationTimestamp?: __string;
    /**
     * Information on the definition
     */
    Definition?: GroupVersion;
    /**
     * Id of the group version.
     */
    Id?: __string;
    /**
     * Unique Id for a version of the Group.
     */
    Version?: __string;
  }
  export interface GetLoggerDefinitionRequest {
    /**
     * logger definition Id
     */
    LoggerDefinitionId: __string;
  }
  export interface GetLoggerDefinitionResponse {
    /**
     * Arn of the definition.
     */
    Arn?: __string;
    /**
     * Timestamp of when the definition was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the definition.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the definition.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the definition.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the definition.
     */
    LatestVersionArn?: __string;
    /**
     * Name of the definition.
     */
    Name?: __string;
  }
  export interface GetLoggerDefinitionVersionRequest {
    /**
     * logger definition Id
     */
    LoggerDefinitionId: __string;
    /**
     * logger definition version Id
     */
    LoggerDefinitionVersionId: __string;
  }
  export interface GetLoggerDefinitionVersionResponse {
    /**
     * Arn of the logger definition version.
     */
    Arn?: __string;
    /**
     * Timestamp of when the logger definition version was created.
     */
    CreationTimestamp?: __string;
    /**
     * Information on definition
     */
    Definition?: LoggerDefinitionVersion;
    /**
     * Id of the logger definition the version belongs to.
     */
    Id?: __string;
    /**
     * Version of the logger definition version.
     */
    Version?: __string;
  }
  export interface GetServiceRoleForAccountRequest {
  }
  export interface GetServiceRoleForAccountResponse {
    /**
     * Time when the service role was associated to the account.
     */
    AssociatedAt?: __string;
    /**
     * Role arn which is associated to the account.
     */
    RoleArn?: __string;
  }
  export interface GetSubscriptionDefinitionRequest {
    /**
     * subscription definition Id
     */
    SubscriptionDefinitionId: __string;
  }
  export interface GetSubscriptionDefinitionResponse {
    /**
     * Arn of the definition.
     */
    Arn?: __string;
    /**
     * Timestamp of when the definition was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the definition.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the definition.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the definition.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the definition.
     */
    LatestVersionArn?: __string;
    /**
     * Name of the definition.
     */
    Name?: __string;
  }
  export interface GetSubscriptionDefinitionVersionRequest {
    /**
     * subscription definition Id
     */
    SubscriptionDefinitionId: __string;
    /**
     * subscription definition version Id
     */
    SubscriptionDefinitionVersionId: __string;
  }
  export interface GetSubscriptionDefinitionVersionResponse {
    /**
     * Arn of the subscription definition version.
     */
    Arn?: __string;
    /**
     * Timestamp of when the subscription definition version was created.
     */
    CreationTimestamp?: __string;
    /**
     * Information on the definition
     */
    Definition?: SubscriptionDefinitionVersion;
    /**
     * Id of the subscription definition the version belongs to.
     */
    Id?: __string;
    /**
     * Version of the subscription definition version.
     */
    Version?: __string;
  }
  export interface GroupCertificateAuthorityProperties {
    /**
     * Arn of the certificate authority for the group.
     */
    GroupCertificateAuthorityArn?: __string;
    /**
     * Id of the certificate authority for the group.
     */
    GroupCertificateAuthorityId?: __string;
  }
  export interface GroupCertificateConfiguration {
    /**
     * Amount of time when the certificate authority expires in milliseconds.
     */
    CertificateAuthorityExpiryInMilliseconds?: __string;
    /**
     * Amount of time when the certificate expires in milliseconds.
     */
    CertificateExpiryInMilliseconds?: __string;
    /**
     * Id of the group the certificate configuration belongs to.
     */
    GroupId?: __string;
  }
  export interface GroupInformation {
    /**
     * Arn of a group.
     */
    Arn?: __string;
    /**
     * Timestamp of when the group was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of a group.
     */
    Id?: __string;
    /**
     * Last updated timestamp of the group.
     */
    LastUpdatedTimestamp?: __string;
    /**
     * Last version of the group.
     */
    LatestVersion?: __string;
    /**
     * Latest version arn of the group.
     */
    LatestVersionArn?: __string;
    /**
     * Name of a group.
     */
    Name?: __string;
  }
  export interface GroupVersion {
    /**
     * Core definition version arn for this group.
     */
    CoreDefinitionVersionArn?: __string;
    /**
     * Device definition version arn for this group.
     */
    DeviceDefinitionVersionArn?: __string;
    /**
     * Function definition version arn for this group.
     */
    FunctionDefinitionVersionArn?: __string;
    /**
     * Logger definitionv ersion arn for this group.
     */
    LoggerDefinitionVersionArn?: __string;
    /**
     * Subscription definition version arn for this group.
     */
    SubscriptionDefinitionVersionArn?: __string;
  }
  export interface ListCoreDefinitionVersionsRequest {
    /**
     * core definition Id
     */
    CoreDefinitionId: __string;
    /**
     * Specifies the maximum number of list results to be returned in this page
     */
    MaxResults?: __string;
    /**
     * Specifies the pagination token used when iterating through a paginated request
     */
    NextToken?: __string;
  }
  export interface ListCoreDefinitionVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
    /**
     * Versions
     */
    Versions?: ListOfVersionInformation;
  }
  export interface ListCoreDefinitionsRequest {
    /**
     * Specifies the maximum number of list results to be returned in this page
     */
    MaxResults?: __string;
    /**
     * Specifies the pagination token used when iterating through a paginated request
     */
    NextToken?: __string;
  }
  export interface ListCoreDefinitionsResponse {
    /**
     * Definitions
     */
    Definitions?: ListOfDefinitionInformation;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
  }
  export interface ListDefinitionsResponse {
    /**
     * Definitions
     */
    Definitions?: ListOfDefinitionInformation;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
  }
  export interface ListDeploymentsRequest {
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
    /**
     * Specifies the maximum number of list results to be returned in this page
     */
    MaxResults?: __string;
    /**
     * Specifies the pagination token used when iterating through a paginated request
     */
    NextToken?: __string;
  }
  export interface ListDeploymentsResponse {
    /**
     * List of deployments for the requested groups
     */
    Deployments?: Deployments;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
  }
  export interface ListDeviceDefinitionVersionsRequest {
    /**
     * device definition Id
     */
    DeviceDefinitionId: __string;
    /**
     * Specifies the maximum number of list results to be returned in this page
     */
    MaxResults?: __string;
    /**
     * Specifies the pagination token used when iterating through a paginated request
     */
    NextToken?: __string;
  }
  export interface ListDeviceDefinitionVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
    /**
     * Versions
     */
    Versions?: ListOfVersionInformation;
  }
  export interface ListDeviceDefinitionsRequest {
    /**
     * Specifies the maximum number of list results to be returned in this page
     */
    MaxResults?: __string;
    /**
     * Specifies the pagination token used when iterating through a paginated request
     */
    NextToken?: __string;
  }
  export interface ListDeviceDefinitionsResponse {
    /**
     * Definitions
     */
    Definitions?: ListOfDefinitionInformation;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
  }
  export interface ListFunctionDefinitionVersionsRequest {
    /**
     * the unique Id of the lambda definition
     */
    FunctionDefinitionId: __string;
    /**
     * Specifies the maximum number of list results to be returned in this page
     */
    MaxResults?: __string;
    /**
     * Specifies the pagination token used when iterating through a paginated request
     */
    NextToken?: __string;
  }
  export interface ListFunctionDefinitionVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
    /**
     * Versions
     */
    Versions?: ListOfVersionInformation;
  }
  export interface ListFunctionDefinitionsRequest {
    /**
     * Specifies the maximum number of list results to be returned in this page
     */
    MaxResults?: __string;
    /**
     * Specifies the pagination token used when iterating through a paginated request
     */
    NextToken?: __string;
  }
  export interface ListFunctionDefinitionsResponse {
    /**
     * Definitions
     */
    Definitions?: ListOfDefinitionInformation;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
  }
  export interface ListGroupCertificateAuthoritiesRequest {
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
  }
  export interface ListGroupCertificateAuthoritiesResponse {
    /**
     * List of certificate authorities associated with the group.
     */
    GroupCertificateAuthorities?: ListOfGroupCertificateAuthorityProperties;
  }
  export interface ListGroupVersionsRequest {
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
    /**
     * Specifies the maximum number of list results to be returned in this page
     */
    MaxResults?: __string;
    /**
     * Specifies the pagination token used when iterating through a paginated request
     */
    NextToken?: __string;
  }
  export interface ListGroupVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
    /**
     * Versions
     */
    Versions?: ListOfVersionInformation;
  }
  export interface ListGroupsRequest {
    /**
     * Specifies the maximum number of list results to be returned in this page
     */
    MaxResults?: __string;
    /**
     * Specifies the pagination token used when iterating through a paginated request
     */
    NextToken?: __string;
  }
  export interface ListGroupsResponse {
    /**
     * Groups
     */
    Groups?: ListOfGroupInformation;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
  }
  export interface ListLoggerDefinitionVersionsRequest {
    /**
     * logger definition Id
     */
    LoggerDefinitionId: __string;
    /**
     * Specifies the maximum number of list results to be returned in this page
     */
    MaxResults?: __string;
    /**
     * Specifies the pagination token used when iterating through a paginated request
     */
    NextToken?: __string;
  }
  export interface ListLoggerDefinitionVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
    /**
     * Versions
     */
    Versions?: ListOfVersionInformation;
  }
  export interface ListLoggerDefinitionsRequest {
    /**
     * Specifies the maximum number of list results to be returned in this page
     */
    MaxResults?: __string;
    /**
     * Specifies the pagination token used when iterating through a paginated request
     */
    NextToken?: __string;
  }
  export interface ListLoggerDefinitionsResponse {
    /**
     * Definitions
     */
    Definitions?: ListOfDefinitionInformation;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
  }
  export type ListOfConnectivityInfo = ConnectivityInfo[];
  export type ListOfCore = Core[];
  export type ListOfDefinitionInformation = DefinitionInformation[];
  export type ListOfDevice = Device[];
  export type ListOfFunction = Function[];
  export type ListOfGroupCertificateAuthorityProperties = GroupCertificateAuthorityProperties[];
  export type ListOfGroupInformation = GroupInformation[];
  export type ListOfLogger = Logger[];
  export type ListOfSubscription = Subscription[];
  export type ListOfVersionInformation = VersionInformation[];
  export interface ListSubscriptionDefinitionVersionsRequest {
    /**
     * Specifies the maximum number of list results to be returned in this page
     */
    MaxResults?: __string;
    /**
     * Specifies the pagination token used when iterating through a paginated request
     */
    NextToken?: __string;
    /**
     * subscription definition Id
     */
    SubscriptionDefinitionId: __string;
  }
  export interface ListSubscriptionDefinitionVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
    /**
     * Versions
     */
    Versions?: ListOfVersionInformation;
  }
  export interface ListSubscriptionDefinitionsRequest {
    /**
     * Specifies the maximum number of list results to be returned in this page
     */
    MaxResults?: __string;
    /**
     * Specifies the pagination token used when iterating through a paginated request
     */
    NextToken?: __string;
  }
  export interface ListSubscriptionDefinitionsResponse {
    /**
     * Definitions
     */
    Definitions?: ListOfDefinitionInformation;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
  }
  export interface ListVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: __string;
    /**
     * Versions
     */
    Versions?: ListOfVersionInformation;
  }
  export interface Logger {
    /**
     * The component that will be subject to logs
     */
    Component?: LoggerComponent;
    /**
     * Element Id for this entry in the list.
     */
    Id?: __string;
    /**
     * The level of the logs
     */
    Level?: LoggerLevel;
    /**
     * Amount of hardware space, in KB, to use if file system is used for logging purposes.
     */
    Space?: __integer;
    /**
     * The type which will be use for log output
     */
    Type?: LoggerType;
  }
  export type LoggerComponent = "GreengrassSystem"|"Lambda"|string;
  export interface LoggerDefinitionVersion {
    /**
     * List of loggers.
     */
    Loggers?: ListOfLogger;
  }
  export type LoggerLevel = "DEBUG"|"INFO"|"WARN"|"ERROR"|"FATAL"|string;
  export type LoggerType = "FileSystem"|"AWSCloudWatch"|string;
  export type MapOf__string = {[key: string]: __string};
  export interface ResetDeploymentsRequest {
    /**
     * The client token used to request idempotent operations.
     */
    AmznClientToken?: __string;
    /**
     * When set to true, perform a best-effort only core reset.
     */
    Force?: __boolean;
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
  }
  export interface ResetDeploymentsResponse {
    /**
     * The arn of the reset deployment.
     */
    DeploymentArn?: __string;
    /**
     * The id of the reset deployment.
     */
    DeploymentId?: __string;
  }
  export interface Subscription {
    /**
     * Element Id for this entry in the list.
     */
    Id?: __string;
    /**
     * Source of the subscription. Can be a thing arn, lambda arn or word 'cloud'
     */
    Source?: __string;
    /**
     * Subject of the message.
     */
    Subject?: __string;
    /**
     * Where the message is sent to. Can be a thing arn, lambda arn or word 'cloud'.
     */
    Target?: __string;
  }
  export interface SubscriptionDefinitionVersion {
    /**
     * Subscriptions in the version.
     */
    Subscriptions?: ListOfSubscription;
  }
  export interface UpdateConnectivityInfoRequest {
    /**
     * Connectivity info list
     */
    ConnectivityInfo?: ListOfConnectivityInfo;
    /**
     * Thing Name
     */
    ThingName: __string;
  }
  export interface UpdateConnectivityInfoResponse {
    /**
     * Response Text
     */
    Message?: __string;
    /**
     * New Version
     */
    Version?: __string;
  }
  export interface UpdateCoreDefinitionRequest {
    /**
     * core definition Id
     */
    CoreDefinitionId: __string;
    /**
     * name of the definition
     */
    Name?: __string;
  }
  export interface UpdateCoreDefinitionResponse {
  }
  export interface UpdateDeviceDefinitionRequest {
    /**
     * device definition Id
     */
    DeviceDefinitionId: __string;
    /**
     * name of the definition
     */
    Name?: __string;
  }
  export interface UpdateDeviceDefinitionResponse {
  }
  export interface UpdateFunctionDefinitionRequest {
    /**
     * the unique Id of the lambda definition
     */
    FunctionDefinitionId: __string;
    /**
     * name of the definition
     */
    Name?: __string;
  }
  export interface UpdateFunctionDefinitionResponse {
  }
  export interface UpdateGroupCertificateConfigurationRequest {
    /**
     * Amount of time when the certificate expires in milliseconds.
     */
    CertificateExpiryInMilliseconds?: __string;
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
  }
  export interface UpdateGroupCertificateConfigurationResponse {
    /**
     * Amount of time when the certificate authority expires in milliseconds.
     */
    CertificateAuthorityExpiryInMilliseconds?: __string;
    /**
     * Amount of time when the certificate expires in milliseconds.
     */
    CertificateExpiryInMilliseconds?: __string;
    /**
     * Id of the group the certificate configuration belongs to.
     */
    GroupId?: __string;
  }
  export interface UpdateGroupRequest {
    /**
     * The unique Id of the AWS Greengrass Group
     */
    GroupId: __string;
    /**
     * name of the definition
     */
    Name?: __string;
  }
  export interface UpdateGroupResponse {
  }
  export interface UpdateLoggerDefinitionRequest {
    /**
     * logger definition Id
     */
    LoggerDefinitionId: __string;
    /**
     * name of the definition
     */
    Name?: __string;
  }
  export interface UpdateLoggerDefinitionResponse {
  }
  export interface UpdateSubscriptionDefinitionRequest {
    /**
     * name of the definition
     */
    Name?: __string;
    /**
     * subscription definition Id
     */
    SubscriptionDefinitionId: __string;
  }
  export interface UpdateSubscriptionDefinitionResponse {
  }
  export interface VersionInformation {
    /**
     * Arn of the version.
     */
    Arn?: __string;
    /**
     * Timestamp of when the version was created.
     */
    CreationTimestamp?: __string;
    /**
     * Id of the resource container.
     */
    Id?: __string;
    /**
     * Unique Id of a version.
     */
    Version?: __string;
  }
  export type __boolean = boolean;
  export type __double = number;
  export type __integer = number;
  export type __string = string;
  export type __timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-06-07"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Greengrass client.
   */
  export import Types = Greengrass;
}
export = Greengrass;
