import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Lightsail extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Lightsail.Types.ClientConfiguration)
  config: Config & Lightsail.Types.ClientConfiguration;
  /**
   * Allocates a static IP address.
   */
  allocateStaticIp(params: Lightsail.Types.AllocateStaticIpRequest, callback?: (err: AWSError, data: Lightsail.Types.AllocateStaticIpResult) => void): Request<Lightsail.Types.AllocateStaticIpResult, AWSError>;
  /**
   * Allocates a static IP address.
   */
  allocateStaticIp(callback?: (err: AWSError, data: Lightsail.Types.AllocateStaticIpResult) => void): Request<Lightsail.Types.AllocateStaticIpResult, AWSError>;
  /**
   * Attaches a static IP address to a specific Amazon Lightsail instance.
   */
  attachStaticIp(params: Lightsail.Types.AttachStaticIpRequest, callback?: (err: AWSError, data: Lightsail.Types.AttachStaticIpResult) => void): Request<Lightsail.Types.AttachStaticIpResult, AWSError>;
  /**
   * Attaches a static IP address to a specific Amazon Lightsail instance.
   */
  attachStaticIp(callback?: (err: AWSError, data: Lightsail.Types.AttachStaticIpResult) => void): Request<Lightsail.Types.AttachStaticIpResult, AWSError>;
  /**
   * Closes the public ports on a specific Amazon Lightsail instance.
   */
  closeInstancePublicPorts(params: Lightsail.Types.CloseInstancePublicPortsRequest, callback?: (err: AWSError, data: Lightsail.Types.CloseInstancePublicPortsResult) => void): Request<Lightsail.Types.CloseInstancePublicPortsResult, AWSError>;
  /**
   * Closes the public ports on a specific Amazon Lightsail instance.
   */
  closeInstancePublicPorts(callback?: (err: AWSError, data: Lightsail.Types.CloseInstancePublicPortsResult) => void): Request<Lightsail.Types.CloseInstancePublicPortsResult, AWSError>;
  /**
   * Creates a domain resource for the specified domain (e.g., example.com).
   */
  createDomain(params: Lightsail.Types.CreateDomainRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateDomainResult) => void): Request<Lightsail.Types.CreateDomainResult, AWSError>;
  /**
   * Creates a domain resource for the specified domain (e.g., example.com).
   */
  createDomain(callback?: (err: AWSError, data: Lightsail.Types.CreateDomainResult) => void): Request<Lightsail.Types.CreateDomainResult, AWSError>;
  /**
   * Creates one of the following entry records associated with the domain: A record, CNAME record, TXT record, or MX record.
   */
  createDomainEntry(params: Lightsail.Types.CreateDomainEntryRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateDomainEntryResult) => void): Request<Lightsail.Types.CreateDomainEntryResult, AWSError>;
  /**
   * Creates one of the following entry records associated with the domain: A record, CNAME record, TXT record, or MX record.
   */
  createDomainEntry(callback?: (err: AWSError, data: Lightsail.Types.CreateDomainEntryResult) => void): Request<Lightsail.Types.CreateDomainEntryResult, AWSError>;
  /**
   * Creates a snapshot of a specific virtual private server, or instance. You can use a snapshot to create a new instance that is based on that snapshot.
   */
  createInstanceSnapshot(params: Lightsail.Types.CreateInstanceSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateInstanceSnapshotResult) => void): Request<Lightsail.Types.CreateInstanceSnapshotResult, AWSError>;
  /**
   * Creates a snapshot of a specific virtual private server, or instance. You can use a snapshot to create a new instance that is based on that snapshot.
   */
  createInstanceSnapshot(callback?: (err: AWSError, data: Lightsail.Types.CreateInstanceSnapshotResult) => void): Request<Lightsail.Types.CreateInstanceSnapshotResult, AWSError>;
  /**
   * Creates one or more Amazon Lightsail virtual private servers, or instances.
   */
  createInstances(params: Lightsail.Types.CreateInstancesRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateInstancesResult) => void): Request<Lightsail.Types.CreateInstancesResult, AWSError>;
  /**
   * Creates one or more Amazon Lightsail virtual private servers, or instances.
   */
  createInstances(callback?: (err: AWSError, data: Lightsail.Types.CreateInstancesResult) => void): Request<Lightsail.Types.CreateInstancesResult, AWSError>;
  /**
   * Uses a specific snapshot as a blueprint for creating one or more new instances that are based on that identical configuration.
   */
  createInstancesFromSnapshot(params: Lightsail.Types.CreateInstancesFromSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateInstancesFromSnapshotResult) => void): Request<Lightsail.Types.CreateInstancesFromSnapshotResult, AWSError>;
  /**
   * Uses a specific snapshot as a blueprint for creating one or more new instances that are based on that identical configuration.
   */
  createInstancesFromSnapshot(callback?: (err: AWSError, data: Lightsail.Types.CreateInstancesFromSnapshotResult) => void): Request<Lightsail.Types.CreateInstancesFromSnapshotResult, AWSError>;
  /**
   * Creates sn SSH key pair.
   */
  createKeyPair(params: Lightsail.Types.CreateKeyPairRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateKeyPairResult) => void): Request<Lightsail.Types.CreateKeyPairResult, AWSError>;
  /**
   * Creates sn SSH key pair.
   */
  createKeyPair(callback?: (err: AWSError, data: Lightsail.Types.CreateKeyPairResult) => void): Request<Lightsail.Types.CreateKeyPairResult, AWSError>;
  /**
   * Deletes the specified domain recordset and all of its domain records.
   */
  deleteDomain(params: Lightsail.Types.DeleteDomainRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteDomainResult) => void): Request<Lightsail.Types.DeleteDomainResult, AWSError>;
  /**
   * Deletes the specified domain recordset and all of its domain records.
   */
  deleteDomain(callback?: (err: AWSError, data: Lightsail.Types.DeleteDomainResult) => void): Request<Lightsail.Types.DeleteDomainResult, AWSError>;
  /**
   * Deletes a specific domain entry.
   */
  deleteDomainEntry(params: Lightsail.Types.DeleteDomainEntryRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteDomainEntryResult) => void): Request<Lightsail.Types.DeleteDomainEntryResult, AWSError>;
  /**
   * Deletes a specific domain entry.
   */
  deleteDomainEntry(callback?: (err: AWSError, data: Lightsail.Types.DeleteDomainEntryResult) => void): Request<Lightsail.Types.DeleteDomainEntryResult, AWSError>;
  /**
   * Deletes a specific Amazon Lightsail virtual private server, or instance.
   */
  deleteInstance(params: Lightsail.Types.DeleteInstanceRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteInstanceResult) => void): Request<Lightsail.Types.DeleteInstanceResult, AWSError>;
  /**
   * Deletes a specific Amazon Lightsail virtual private server, or instance.
   */
  deleteInstance(callback?: (err: AWSError, data: Lightsail.Types.DeleteInstanceResult) => void): Request<Lightsail.Types.DeleteInstanceResult, AWSError>;
  /**
   * Deletes a specific snapshot of a virtual private server (or instance).
   */
  deleteInstanceSnapshot(params: Lightsail.Types.DeleteInstanceSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteInstanceSnapshotResult) => void): Request<Lightsail.Types.DeleteInstanceSnapshotResult, AWSError>;
  /**
   * Deletes a specific snapshot of a virtual private server (or instance).
   */
  deleteInstanceSnapshot(callback?: (err: AWSError, data: Lightsail.Types.DeleteInstanceSnapshotResult) => void): Request<Lightsail.Types.DeleteInstanceSnapshotResult, AWSError>;
  /**
   * Deletes a specific SSH key pair.
   */
  deleteKeyPair(params: Lightsail.Types.DeleteKeyPairRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteKeyPairResult) => void): Request<Lightsail.Types.DeleteKeyPairResult, AWSError>;
  /**
   * Deletes a specific SSH key pair.
   */
  deleteKeyPair(callback?: (err: AWSError, data: Lightsail.Types.DeleteKeyPairResult) => void): Request<Lightsail.Types.DeleteKeyPairResult, AWSError>;
  /**
   * Detaches a static IP from the Amazon Lightsail instance to which it is attached.
   */
  detachStaticIp(params: Lightsail.Types.DetachStaticIpRequest, callback?: (err: AWSError, data: Lightsail.Types.DetachStaticIpResult) => void): Request<Lightsail.Types.DetachStaticIpResult, AWSError>;
  /**
   * Detaches a static IP from the Amazon Lightsail instance to which it is attached.
   */
  detachStaticIp(callback?: (err: AWSError, data: Lightsail.Types.DetachStaticIpResult) => void): Request<Lightsail.Types.DetachStaticIpResult, AWSError>;
  /**
   * Downloads the default SSH key pair from the user's account.
   */
  downloadDefaultKeyPair(params: Lightsail.Types.DownloadDefaultKeyPairRequest, callback?: (err: AWSError, data: Lightsail.Types.DownloadDefaultKeyPairResult) => void): Request<Lightsail.Types.DownloadDefaultKeyPairResult, AWSError>;
  /**
   * Downloads the default SSH key pair from the user's account.
   */
  downloadDefaultKeyPair(callback?: (err: AWSError, data: Lightsail.Types.DownloadDefaultKeyPairResult) => void): Request<Lightsail.Types.DownloadDefaultKeyPairResult, AWSError>;
  /**
   * Returns the names of all active (not deleted) resources.
   */
  getActiveNames(params: Lightsail.Types.GetActiveNamesRequest, callback?: (err: AWSError, data: Lightsail.Types.GetActiveNamesResult) => void): Request<Lightsail.Types.GetActiveNamesResult, AWSError>;
  /**
   * Returns the names of all active (not deleted) resources.
   */
  getActiveNames(callback?: (err: AWSError, data: Lightsail.Types.GetActiveNamesResult) => void): Request<Lightsail.Types.GetActiveNamesResult, AWSError>;
  /**
   * Returns the list of available instance images, or blueprints. You can use a blueprint to create a new virtual private server already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.
   */
  getBlueprints(params: Lightsail.Types.GetBlueprintsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetBlueprintsResult) => void): Request<Lightsail.Types.GetBlueprintsResult, AWSError>;
  /**
   * Returns the list of available instance images, or blueprints. You can use a blueprint to create a new virtual private server already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.
   */
  getBlueprints(callback?: (err: AWSError, data: Lightsail.Types.GetBlueprintsResult) => void): Request<Lightsail.Types.GetBlueprintsResult, AWSError>;
  /**
   * Returns the list of bundles that are available for purchase. A bundle describes the specs for your virtual private server (or instance).
   */
  getBundles(params: Lightsail.Types.GetBundlesRequest, callback?: (err: AWSError, data: Lightsail.Types.GetBundlesResult) => void): Request<Lightsail.Types.GetBundlesResult, AWSError>;
  /**
   * Returns the list of bundles that are available for purchase. A bundle describes the specs for your virtual private server (or instance).
   */
  getBundles(callback?: (err: AWSError, data: Lightsail.Types.GetBundlesResult) => void): Request<Lightsail.Types.GetBundlesResult, AWSError>;
  /**
   * Returns information about a specific domain recordset.
   */
  getDomain(params: Lightsail.Types.GetDomainRequest, callback?: (err: AWSError, data: Lightsail.Types.GetDomainResult) => void): Request<Lightsail.Types.GetDomainResult, AWSError>;
  /**
   * Returns information about a specific domain recordset.
   */
  getDomain(callback?: (err: AWSError, data: Lightsail.Types.GetDomainResult) => void): Request<Lightsail.Types.GetDomainResult, AWSError>;
  /**
   * Returns a list of all domains in the user's account.
   */
  getDomains(params: Lightsail.Types.GetDomainsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetDomainsResult) => void): Request<Lightsail.Types.GetDomainsResult, AWSError>;
  /**
   * Returns a list of all domains in the user's account.
   */
  getDomains(callback?: (err: AWSError, data: Lightsail.Types.GetDomainsResult) => void): Request<Lightsail.Types.GetDomainsResult, AWSError>;
  /**
   * Returns information about a specific Amazon Lightsail instance, which is a virtual private server.
   */
  getInstance(params: Lightsail.Types.GetInstanceRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstanceResult) => void): Request<Lightsail.Types.GetInstanceResult, AWSError>;
  /**
   * Returns information about a specific Amazon Lightsail instance, which is a virtual private server.
   */
  getInstance(callback?: (err: AWSError, data: Lightsail.Types.GetInstanceResult) => void): Request<Lightsail.Types.GetInstanceResult, AWSError>;
  /**
   * Returns temporary SSH keys you can use to connect to a specific virtual private server, or instance.
   */
  getInstanceAccessDetails(params: Lightsail.Types.GetInstanceAccessDetailsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstanceAccessDetailsResult) => void): Request<Lightsail.Types.GetInstanceAccessDetailsResult, AWSError>;
  /**
   * Returns temporary SSH keys you can use to connect to a specific virtual private server, or instance.
   */
  getInstanceAccessDetails(callback?: (err: AWSError, data: Lightsail.Types.GetInstanceAccessDetailsResult) => void): Request<Lightsail.Types.GetInstanceAccessDetailsResult, AWSError>;
  /**
   * Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.
   */
  getInstanceMetricData(params: Lightsail.Types.GetInstanceMetricDataRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstanceMetricDataResult) => void): Request<Lightsail.Types.GetInstanceMetricDataResult, AWSError>;
  /**
   * Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.
   */
  getInstanceMetricData(callback?: (err: AWSError, data: Lightsail.Types.GetInstanceMetricDataResult) => void): Request<Lightsail.Types.GetInstanceMetricDataResult, AWSError>;
  /**
   * Returns the port states for a specific virtual private server, or instance.
   */
  getInstancePortStates(params: Lightsail.Types.GetInstancePortStatesRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstancePortStatesResult) => void): Request<Lightsail.Types.GetInstancePortStatesResult, AWSError>;
  /**
   * Returns the port states for a specific virtual private server, or instance.
   */
  getInstancePortStates(callback?: (err: AWSError, data: Lightsail.Types.GetInstancePortStatesResult) => void): Request<Lightsail.Types.GetInstancePortStatesResult, AWSError>;
  /**
   * Returns information about a specific instance snapshot.
   */
  getInstanceSnapshot(params: Lightsail.Types.GetInstanceSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstanceSnapshotResult) => void): Request<Lightsail.Types.GetInstanceSnapshotResult, AWSError>;
  /**
   * Returns information about a specific instance snapshot.
   */
  getInstanceSnapshot(callback?: (err: AWSError, data: Lightsail.Types.GetInstanceSnapshotResult) => void): Request<Lightsail.Types.GetInstanceSnapshotResult, AWSError>;
  /**
   * Returns all instance snapshots for the user's account.
   */
  getInstanceSnapshots(params: Lightsail.Types.GetInstanceSnapshotsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstanceSnapshotsResult) => void): Request<Lightsail.Types.GetInstanceSnapshotsResult, AWSError>;
  /**
   * Returns all instance snapshots for the user's account.
   */
  getInstanceSnapshots(callback?: (err: AWSError, data: Lightsail.Types.GetInstanceSnapshotsResult) => void): Request<Lightsail.Types.GetInstanceSnapshotsResult, AWSError>;
  /**
   * Returns the state of a specific instance. Works on one instance at a time.
   */
  getInstanceState(params: Lightsail.Types.GetInstanceStateRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstanceStateResult) => void): Request<Lightsail.Types.GetInstanceStateResult, AWSError>;
  /**
   * Returns the state of a specific instance. Works on one instance at a time.
   */
  getInstanceState(callback?: (err: AWSError, data: Lightsail.Types.GetInstanceStateResult) => void): Request<Lightsail.Types.GetInstanceStateResult, AWSError>;
  /**
   * Returns information about all Amazon Lightsail virtual private servers, or instances.
   */
  getInstances(params: Lightsail.Types.GetInstancesRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstancesResult) => void): Request<Lightsail.Types.GetInstancesResult, AWSError>;
  /**
   * Returns information about all Amazon Lightsail virtual private servers, or instances.
   */
  getInstances(callback?: (err: AWSError, data: Lightsail.Types.GetInstancesResult) => void): Request<Lightsail.Types.GetInstancesResult, AWSError>;
  /**
   * Returns information about a specific key pair.
   */
  getKeyPair(params: Lightsail.Types.GetKeyPairRequest, callback?: (err: AWSError, data: Lightsail.Types.GetKeyPairResult) => void): Request<Lightsail.Types.GetKeyPairResult, AWSError>;
  /**
   * Returns information about a specific key pair.
   */
  getKeyPair(callback?: (err: AWSError, data: Lightsail.Types.GetKeyPairResult) => void): Request<Lightsail.Types.GetKeyPairResult, AWSError>;
  /**
   * Returns information about all key pairs in the user's account.
   */
  getKeyPairs(params: Lightsail.Types.GetKeyPairsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetKeyPairsResult) => void): Request<Lightsail.Types.GetKeyPairsResult, AWSError>;
  /**
   * Returns information about all key pairs in the user's account.
   */
  getKeyPairs(callback?: (err: AWSError, data: Lightsail.Types.GetKeyPairsResult) => void): Request<Lightsail.Types.GetKeyPairsResult, AWSError>;
  /**
   * Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
   */
  getOperation(params: Lightsail.Types.GetOperationRequest, callback?: (err: AWSError, data: Lightsail.Types.GetOperationResult) => void): Request<Lightsail.Types.GetOperationResult, AWSError>;
  /**
   * Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
   */
  getOperation(callback?: (err: AWSError, data: Lightsail.Types.GetOperationResult) => void): Request<Lightsail.Types.GetOperationResult, AWSError>;
  /**
   * Returns information about all operations. Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to GetOperations use the maximum (last) statusChangedAt value from the previous request.
   */
  getOperations(params: Lightsail.Types.GetOperationsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetOperationsResult) => void): Request<Lightsail.Types.GetOperationsResult, AWSError>;
  /**
   * Returns information about all operations. Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to GetOperations use the maximum (last) statusChangedAt value from the previous request.
   */
  getOperations(callback?: (err: AWSError, data: Lightsail.Types.GetOperationsResult) => void): Request<Lightsail.Types.GetOperationsResult, AWSError>;
  /**
   * Gets operations for a specific resource (e.g., an instance or a static IP).
   */
  getOperationsForResource(params: Lightsail.Types.GetOperationsForResourceRequest, callback?: (err: AWSError, data: Lightsail.Types.GetOperationsForResourceResult) => void): Request<Lightsail.Types.GetOperationsForResourceResult, AWSError>;
  /**
   * Gets operations for a specific resource (e.g., an instance or a static IP).
   */
  getOperationsForResource(callback?: (err: AWSError, data: Lightsail.Types.GetOperationsForResourceResult) => void): Request<Lightsail.Types.GetOperationsForResourceResult, AWSError>;
  /**
   * Returns a list of all valid regions for Amazon Lightsail. Use the include availability zones parameter to also return the availability zones in a region.
   */
  getRegions(params: Lightsail.Types.GetRegionsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRegionsResult) => void): Request<Lightsail.Types.GetRegionsResult, AWSError>;
  /**
   * Returns a list of all valid regions for Amazon Lightsail. Use the include availability zones parameter to also return the availability zones in a region.
   */
  getRegions(callback?: (err: AWSError, data: Lightsail.Types.GetRegionsResult) => void): Request<Lightsail.Types.GetRegionsResult, AWSError>;
  /**
   * Returns information about a specific static IP.
   */
  getStaticIp(params: Lightsail.Types.GetStaticIpRequest, callback?: (err: AWSError, data: Lightsail.Types.GetStaticIpResult) => void): Request<Lightsail.Types.GetStaticIpResult, AWSError>;
  /**
   * Returns information about a specific static IP.
   */
  getStaticIp(callback?: (err: AWSError, data: Lightsail.Types.GetStaticIpResult) => void): Request<Lightsail.Types.GetStaticIpResult, AWSError>;
  /**
   * Returns information about all static IPs in the user's account.
   */
  getStaticIps(params: Lightsail.Types.GetStaticIpsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetStaticIpsResult) => void): Request<Lightsail.Types.GetStaticIpsResult, AWSError>;
  /**
   * Returns information about all static IPs in the user's account.
   */
  getStaticIps(callback?: (err: AWSError, data: Lightsail.Types.GetStaticIpsResult) => void): Request<Lightsail.Types.GetStaticIpsResult, AWSError>;
  /**
   * Imports a public SSH key from a specific key pair.
   */
  importKeyPair(params: Lightsail.Types.ImportKeyPairRequest, callback?: (err: AWSError, data: Lightsail.Types.ImportKeyPairResult) => void): Request<Lightsail.Types.ImportKeyPairResult, AWSError>;
  /**
   * Imports a public SSH key from a specific key pair.
   */
  importKeyPair(callback?: (err: AWSError, data: Lightsail.Types.ImportKeyPairResult) => void): Request<Lightsail.Types.ImportKeyPairResult, AWSError>;
  /**
   * Returns a Boolean value indicating whether your Lightsail VPC is peered.
   */
  isVpcPeered(params: Lightsail.Types.IsVpcPeeredRequest, callback?: (err: AWSError, data: Lightsail.Types.IsVpcPeeredResult) => void): Request<Lightsail.Types.IsVpcPeeredResult, AWSError>;
  /**
   * Returns a Boolean value indicating whether your Lightsail VPC is peered.
   */
  isVpcPeered(callback?: (err: AWSError, data: Lightsail.Types.IsVpcPeeredResult) => void): Request<Lightsail.Types.IsVpcPeeredResult, AWSError>;
  /**
   * Adds public ports to an Amazon Lightsail instance.
   */
  openInstancePublicPorts(params: Lightsail.Types.OpenInstancePublicPortsRequest, callback?: (err: AWSError, data: Lightsail.Types.OpenInstancePublicPortsResult) => void): Request<Lightsail.Types.OpenInstancePublicPortsResult, AWSError>;
  /**
   * Adds public ports to an Amazon Lightsail instance.
   */
  openInstancePublicPorts(callback?: (err: AWSError, data: Lightsail.Types.OpenInstancePublicPortsResult) => void): Request<Lightsail.Types.OpenInstancePublicPortsResult, AWSError>;
  /**
   * Tries to peer the Lightsail VPC with the user's default VPC.
   */
  peerVpc(params: Lightsail.Types.PeerVpcRequest, callback?: (err: AWSError, data: Lightsail.Types.PeerVpcResult) => void): Request<Lightsail.Types.PeerVpcResult, AWSError>;
  /**
   * Tries to peer the Lightsail VPC with the user's default VPC.
   */
  peerVpc(callback?: (err: AWSError, data: Lightsail.Types.PeerVpcResult) => void): Request<Lightsail.Types.PeerVpcResult, AWSError>;
  /**
   * Sets the specified open ports for an Amazon Lightsail instance, and closes all ports for every protocol not included in the current request.
   */
  putInstancePublicPorts(params: Lightsail.Types.PutInstancePublicPortsRequest, callback?: (err: AWSError, data: Lightsail.Types.PutInstancePublicPortsResult) => void): Request<Lightsail.Types.PutInstancePublicPortsResult, AWSError>;
  /**
   * Sets the specified open ports for an Amazon Lightsail instance, and closes all ports for every protocol not included in the current request.
   */
  putInstancePublicPorts(callback?: (err: AWSError, data: Lightsail.Types.PutInstancePublicPortsResult) => void): Request<Lightsail.Types.PutInstancePublicPortsResult, AWSError>;
  /**
   * Restarts a specific instance. When your Amazon Lightsail instance is finished rebooting, Lightsail assigns a new public IP address. To use the same IP address after restarting, create a static IP address and attach it to the instance.
   */
  rebootInstance(params: Lightsail.Types.RebootInstanceRequest, callback?: (err: AWSError, data: Lightsail.Types.RebootInstanceResult) => void): Request<Lightsail.Types.RebootInstanceResult, AWSError>;
  /**
   * Restarts a specific instance. When your Amazon Lightsail instance is finished rebooting, Lightsail assigns a new public IP address. To use the same IP address after restarting, create a static IP address and attach it to the instance.
   */
  rebootInstance(callback?: (err: AWSError, data: Lightsail.Types.RebootInstanceResult) => void): Request<Lightsail.Types.RebootInstanceResult, AWSError>;
  /**
   * Deletes a specific static IP from your account.
   */
  releaseStaticIp(params: Lightsail.Types.ReleaseStaticIpRequest, callback?: (err: AWSError, data: Lightsail.Types.ReleaseStaticIpResult) => void): Request<Lightsail.Types.ReleaseStaticIpResult, AWSError>;
  /**
   * Deletes a specific static IP from your account.
   */
  releaseStaticIp(callback?: (err: AWSError, data: Lightsail.Types.ReleaseStaticIpResult) => void): Request<Lightsail.Types.ReleaseStaticIpResult, AWSError>;
  /**
   * Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the reboot instance operation.
   */
  startInstance(params: Lightsail.Types.StartInstanceRequest, callback?: (err: AWSError, data: Lightsail.Types.StartInstanceResult) => void): Request<Lightsail.Types.StartInstanceResult, AWSError>;
  /**
   * Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the reboot instance operation.
   */
  startInstance(callback?: (err: AWSError, data: Lightsail.Types.StartInstanceResult) => void): Request<Lightsail.Types.StartInstanceResult, AWSError>;
  /**
   * Stops a specific Amazon Lightsail instance that is currently running.
   */
  stopInstance(params: Lightsail.Types.StopInstanceRequest, callback?: (err: AWSError, data: Lightsail.Types.StopInstanceResult) => void): Request<Lightsail.Types.StopInstanceResult, AWSError>;
  /**
   * Stops a specific Amazon Lightsail instance that is currently running.
   */
  stopInstance(callback?: (err: AWSError, data: Lightsail.Types.StopInstanceResult) => void): Request<Lightsail.Types.StopInstanceResult, AWSError>;
  /**
   * Attempts to unpeer the Lightsail VPC from the user's default VPC.
   */
  unpeerVpc(params: Lightsail.Types.UnpeerVpcRequest, callback?: (err: AWSError, data: Lightsail.Types.UnpeerVpcResult) => void): Request<Lightsail.Types.UnpeerVpcResult, AWSError>;
  /**
   * Attempts to unpeer the Lightsail VPC from the user's default VPC.
   */
  unpeerVpc(callback?: (err: AWSError, data: Lightsail.Types.UnpeerVpcResult) => void): Request<Lightsail.Types.UnpeerVpcResult, AWSError>;
  /**
   * Updates a domain recordset after it is created.
   */
  updateDomainEntry(params: Lightsail.Types.UpdateDomainEntryRequest, callback?: (err: AWSError, data: Lightsail.Types.UpdateDomainEntryResult) => void): Request<Lightsail.Types.UpdateDomainEntryResult, AWSError>;
  /**
   * Updates a domain recordset after it is created.
   */
  updateDomainEntry(callback?: (err: AWSError, data: Lightsail.Types.UpdateDomainEntryResult) => void): Request<Lightsail.Types.UpdateDomainEntryResult, AWSError>;
}
declare namespace Lightsail {
  export type AccessDirection = "inbound"|"outbound"|string;
  export interface AllocateStaticIpRequest {
    /**
     * The name of the static IP address.
     */
    staticIpName: ResourceName;
  }
  export interface AllocateStaticIpResult {
    /**
     * An array of key-value pairs containing information about the static IP address you allocated.
     */
    operations?: OperationList;
  }
  export interface AttachStaticIpRequest {
    /**
     * The name of the static IP.
     */
    staticIpName: ResourceName;
    /**
     * The instance name to which you want to attach the static IP address.
     */
    instanceName: ResourceName;
  }
  export interface AttachStaticIpResult {
    /**
     * An array of key-value pairs containing information about your API operations.
     */
    operations?: OperationList;
  }
  export interface AvailabilityZone {
    /**
     * The name of the Availability Zone. The format is us-east-1a (case-sensitive).
     */
    zoneName?: NonEmptyString;
    /**
     * The state of the Availability Zone.
     */
    state?: NonEmptyString;
  }
  export type AvailabilityZoneList = AvailabilityZone[];
  export type Base64 = string;
  export interface Blueprint {
    /**
     * The ID for the virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0).
     */
    blueprintId?: NonEmptyString;
    /**
     * The friendly name of the blueprint (e.g., Amazon Linux).
     */
    name?: ResourceName;
    /**
     * The group name of the blueprint (e.g., amazon-linux).
     */
    group?: NonEmptyString;
    /**
     * The type of the blueprint (e.g., os or app).
     */
    type?: BlueprintType;
    /**
     * The description of the blueprint.
     */
    description?: string;
    /**
     * A Boolean value indicating whether the blueprint is active. When you update your blueprints, you will inactivate old blueprints and keep the most recent versions active.
     */
    isActive?: boolean;
    /**
     * The minimum bundle power required to run this blueprint. For example, you need a bundle with a power value of 500 or more to create an instance that uses a blueprint with a minimum power value of 500. 0 indicates that the blueprint runs on all instance sizes. 
     */
    minPower?: integer;
    /**
     * The version number of the operating system, application, or stack (e.g., 2016.03.0).
     */
    version?: string;
    /**
     * The version code.
     */
    versionCode?: string;
    /**
     * The product URL to learn more about the image or blueprint.
     */
    productUrl?: string;
    /**
     * The end-user license agreement URL for the image or blueprint.
     */
    licenseUrl?: string;
    /**
     * The operating system platform (either Linux/Unix-based or Windows Server-based) of the blueprint.
     */
    platform?: InstancePlatform;
  }
  export type BlueprintList = Blueprint[];
  export type BlueprintType = "os"|"app"|string;
  export interface Bundle {
    /**
     * The price in US dollars (e.g., 5.0).
     */
    price?: float;
    /**
     * The number of vCPUs included in the bundle (e.g., 2).
     */
    cpuCount?: integer;
    /**
     * The size of the SSD (e.g., 30).
     */
    diskSizeInGb?: integer;
    /**
     * The bundle ID (e.g., micro_1_0).
     */
    bundleId?: NonEmptyString;
    /**
     * The Amazon EC2 instance type (e.g., t2.micro).
     */
    instanceType?: string;
    /**
     * A Boolean value indicating whether the bundle is active.
     */
    isActive?: boolean;
    /**
     * A friendly name for the bundle (e.g., Micro).
     */
    name?: string;
    /**
     * A numeric value that represents the power of the bundle (e.g., 500). You can use the bundle's power value in conjunction with a blueprint's minimum power value to determine whether the blueprint will run on the bundle. For example, you need a bundle with a power value of 500 or more to create an instance that uses a blueprint with a minimum power value of 500.
     */
    power?: integer;
    /**
     * The amount of RAM in GB (e.g., 2.0).
     */
    ramSizeInGb?: float;
    /**
     * The data transfer rate per month in GB (e.g., 2000).
     */
    transferPerMonthInGb?: integer;
    /**
     * The operating system platform (Linux/Unix-based or Windows Server-based) that the bundle supports. You can only launch a WINDOWS bundle on a blueprint that supports the WINDOWS platform. LINUX_UNIX blueprints require a LINUX_UNIX bundle.
     */
    supportedPlatforms?: InstancePlatformList;
  }
  export type BundleList = Bundle[];
  export interface CloseInstancePublicPortsRequest {
    /**
     * Information about the public port you are trying to close.
     */
    portInfo: PortInfo;
    /**
     * The name of the instance on which you're attempting to close the public ports.
     */
    instanceName: ResourceName;
  }
  export interface CloseInstancePublicPortsResult {
    /**
     * An array of key-value pairs that contains information about the operation.
     */
    operation?: Operation;
  }
  export interface CreateDomainEntryRequest {
    /**
     * The domain name (e.g., example.com) for which you want to create the domain entry.
     */
    domainName: DomainName;
    /**
     * An array of key-value pairs containing information about the domain entry request.
     */
    domainEntry: DomainEntry;
  }
  export interface CreateDomainEntryResult {
    /**
     * An array of key-value pairs containing information about the operation.
     */
    operation?: Operation;
  }
  export interface CreateDomainRequest {
    /**
     * The domain name to manage (e.g., example.com).  You cannot register a new domain name using Lightsail. You must register a domain name using Amazon Route 53 or another domain name registrar. If you have already registered your domain, you can enter its name in this parameter to manage the DNS records for that domain. 
     */
    domainName: DomainName;
  }
  export interface CreateDomainResult {
    /**
     * An array of key-value pairs containing information about the domain resource you created.
     */
    operation?: Operation;
  }
  export interface CreateInstanceSnapshotRequest {
    /**
     * The name for your new snapshot.
     */
    instanceSnapshotName: ResourceName;
    /**
     * The Lightsail instance on which to base your snapshot.
     */
    instanceName: ResourceName;
  }
  export interface CreateInstanceSnapshotResult {
    /**
     * An array of key-value pairs containing information about the results of your create instances snapshot request.
     */
    operations?: OperationList;
  }
  export interface CreateInstancesFromSnapshotRequest {
    /**
     * The names for your new instances.
     */
    instanceNames: StringList;
    /**
     * The Availability Zone where you want to create your instances. Use the following formatting: us-east-1a (case sensitive). You can get a list of availability zones by using the get regions operation. Be sure to add the include availability zones parameter to your request.
     */
    availabilityZone: string;
    /**
     * The name of the instance snapshot on which you are basing your new instances. Use the get instance snapshots operation to return information about your existing snapshots.
     */
    instanceSnapshotName: ResourceName;
    /**
     * The bundle of specification information for your virtual private server (or instance), including the pricing plan (e.g., micro_1_0).
     */
    bundleId: NonEmptyString;
    /**
     * You can create a launch script that configures a server with additional user data. For example, apt-get –y update.  Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use yum, Debian and Ubuntu use apt-get, and FreeBSD uses pkg. For a complete list, see the Dev Guide. 
     */
    userData?: string;
    /**
     * The name for your key pair.
     */
    keyPairName?: ResourceName;
  }
  export interface CreateInstancesFromSnapshotResult {
    /**
     * An array of key-value pairs containing information about the results of your create instances from snapshot request.
     */
    operations?: OperationList;
  }
  export interface CreateInstancesRequest {
    /**
     * The names to use for your new Lightsail instances. Separate multiple values using quotation marks and commas, for example: ["MyFirstInstance","MySecondInstance"] 
     */
    instanceNames: StringList;
    /**
     * The Availability Zone in which to create your instance. Use the following format: us-east-1a (case sensitive). You can get a list of availability zones by using the get regions operation. Be sure to add the include availability zones parameter to your request.
     */
    availabilityZone: string;
    /**
     * (Deprecated) The name for your custom image.  In releases prior to June 12, 2017, this parameter was ignored by the API. It is now deprecated. 
     */
    customImageName?: ResourceName;
    /**
     * The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0). Use the get blueprints operation to return a list of available images (or blueprints).
     */
    blueprintId: NonEmptyString;
    /**
     * The bundle of specification information for your virtual private server (or instance), including the pricing plan (e.g., micro_1_0).
     */
    bundleId: NonEmptyString;
    /**
     * A launch script you can create that configures a server with additional user data. For example, you might want to run apt-get –y update.  Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use yum, Debian and Ubuntu use apt-get, and FreeBSD uses pkg. For a complete list, see the Dev Guide. 
     */
    userData?: string;
    /**
     * The name of your key pair.
     */
    keyPairName?: ResourceName;
  }
  export interface CreateInstancesResult {
    /**
     * An array of key-value pairs containing information about the results of your create instances request.
     */
    operations?: OperationList;
  }
  export interface CreateKeyPairRequest {
    /**
     * The name for your new key pair.
     */
    keyPairName: ResourceName;
  }
  export interface CreateKeyPairResult {
    /**
     * An array of key-value pairs containing information about the new key pair you just created.
     */
    keyPair?: KeyPair;
    /**
     * A base64-encoded public key of the ssh-rsa type.
     */
    publicKeyBase64?: Base64;
    /**
     * A base64-encoded RSA private key.
     */
    privateKeyBase64?: Base64;
    /**
     * An array of key-value pairs containing information about the results of your create key pair request.
     */
    operation?: Operation;
  }
  export interface DeleteDomainEntryRequest {
    /**
     * The name of the domain entry to delete.
     */
    domainName: DomainName;
    /**
     * An array of key-value pairs containing information about your domain entries.
     */
    domainEntry: DomainEntry;
  }
  export interface DeleteDomainEntryResult {
    /**
     * An array of key-value pairs containing information about the results of your delete domain entry request.
     */
    operation?: Operation;
  }
  export interface DeleteDomainRequest {
    /**
     * The specific domain name to delete.
     */
    domainName: DomainName;
  }
  export interface DeleteDomainResult {
    /**
     * An array of key-value pairs containing information about the results of your delete domain request.
     */
    operation?: Operation;
  }
  export interface DeleteInstanceRequest {
    /**
     * The name of the instance to delete.
     */
    instanceName: ResourceName;
  }
  export interface DeleteInstanceResult {
    /**
     * An array of key-value pairs containing information about the results of your delete instance request.
     */
    operations?: OperationList;
  }
  export interface DeleteInstanceSnapshotRequest {
    /**
     * The name of the snapshot to delete.
     */
    instanceSnapshotName: ResourceName;
  }
  export interface DeleteInstanceSnapshotResult {
    /**
     * An array of key-value pairs containing information about the results of your delete instance snapshot request.
     */
    operations?: OperationList;
  }
  export interface DeleteKeyPairRequest {
    /**
     * The name of the key pair to delete.
     */
    keyPairName: ResourceName;
  }
  export interface DeleteKeyPairResult {
    /**
     * An array of key-value pairs containing information about the results of your delete key pair request.
     */
    operation?: Operation;
  }
  export interface DetachStaticIpRequest {
    /**
     * The name of the static IP to detach from the instance.
     */
    staticIpName: ResourceName;
  }
  export interface DetachStaticIpResult {
    /**
     * An array of key-value pairs containing information about the results of your detach static IP request.
     */
    operations?: OperationList;
  }
  export interface Disk {
    /**
     * The name of the disk.
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the disk.
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The date when the disk was created.
     */
    createdAt?: IsoDate;
    /**
     * The region and Availability Zone where the disk is located.
     */
    location?: ResourceLocation;
    /**
     * The resource type of the disk. 
     */
    resourceType?: ResourceType;
    /**
     * The size of the disk in GB.
     */
    sizeInGb?: integer;
    /**
     * The number of GB in use by the disk.
     */
    gbInUse?: integer;
    /**
     * A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).
     */
    isSystemDisk?: boolean;
    /**
     * The input/output operations per second (IOPS) of the disk.
     */
    iops?: integer;
    /**
     * The disk path.
     */
    path?: string;
    /**
     * The resources to which the disk is attached.
     */
    attachedTo?: string;
    /**
     * A Boolean value indicating whether the disk is attached.
     */
    isAttached?: boolean;
    /**
     * The attachment state of the disk.
     */
    attachmentState?: string;
  }
  export type DiskList = Disk[];
  export interface Domain {
    /**
     * The name of the domain.
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the domain recordset (e.g., arn:aws:lightsail:global:123456789101:Domain/824cede0-abc7-4f84-8dbc-12345EXAMPLE).
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The date when the domain recordset was created.
     */
    createdAt?: IsoDate;
    /**
     * The AWS Region and Availability Zones where the domain recordset was created.
     */
    location?: ResourceLocation;
    /**
     * The resource type. 
     */
    resourceType?: ResourceType;
    /**
     * An array of key-value pairs containing information about the domain entries.
     */
    domainEntries?: DomainEntryList;
  }
  export interface DomainEntry {
    /**
     * The ID of the domain recordset entry.
     */
    id?: NonEmptyString;
    /**
     * The name of the domain.
     */
    name?: DomainName;
    /**
     * The target AWS name server (e.g., ns-111.awsdns-22.com.).
     */
    target?: string;
    /**
     * The type of domain entry (e.g., SOA or NS).
     */
    type?: DomainEntryType;
    /**
     * The options for the domain entry.
     */
    options?: DomainEntryOptions;
  }
  export type DomainEntryList = DomainEntry[];
  export type DomainEntryOptions = {[key: string]: string};
  export type DomainEntryOptionsKeys = string;
  export type DomainEntryType = string;
  export type DomainList = Domain[];
  export type DomainName = string;
  export interface DownloadDefaultKeyPairRequest {
  }
  export interface DownloadDefaultKeyPairResult {
    /**
     * A base64-encoded public key of the ssh-rsa type.
     */
    publicKeyBase64?: Base64;
    /**
     * A base64-encoded RSA private key.
     */
    privateKeyBase64?: Base64;
  }
  export interface GetActiveNamesRequest {
    /**
     * A token used for paginating results from your get active names request.
     */
    pageToken?: string;
  }
  export interface GetActiveNamesResult {
    /**
     * The list of active names returned by the get active names request.
     */
    activeNames?: StringList;
    /**
     * A token used for advancing to the next page of results from your get active names request.
     */
    nextPageToken?: string;
  }
  export interface GetBlueprintsRequest {
    /**
     * A Boolean value indicating whether to include inactive results in your request.
     */
    includeInactive?: boolean;
    /**
     * A token used for advancing to the next page of results from your get blueprints request.
     */
    pageToken?: string;
  }
  export interface GetBlueprintsResult {
    /**
     * An array of key-value pairs that contains information about the available blueprints.
     */
    blueprints?: BlueprintList;
    /**
     * A token used for advancing to the next page of results from your get blueprints request.
     */
    nextPageToken?: string;
  }
  export interface GetBundlesRequest {
    /**
     * A Boolean value that indicates whether to include inactive bundle results in your request.
     */
    includeInactive?: boolean;
    /**
     * A token used for advancing to the next page of results from your get bundles request.
     */
    pageToken?: string;
  }
  export interface GetBundlesResult {
    /**
     * An array of key-value pairs that contains information about the available bundles.
     */
    bundles?: BundleList;
    /**
     * A token used for advancing to the next page of results from your get active names request.
     */
    nextPageToken?: string;
  }
  export interface GetDomainRequest {
    /**
     * The domain name for which your want to return information about.
     */
    domainName: DomainName;
  }
  export interface GetDomainResult {
    /**
     * An array of key-value pairs containing information about your get domain request.
     */
    domain?: Domain;
  }
  export interface GetDomainsRequest {
    /**
     * A token used for advancing to the next page of results from your get domains request.
     */
    pageToken?: string;
  }
  export interface GetDomainsResult {
    /**
     * An array of key-value pairs containing information about each of the domain entries in the user's account.
     */
    domains?: DomainList;
    /**
     * A token used for advancing to the next page of results from your get active names request.
     */
    nextPageToken?: string;
  }
  export interface GetInstanceAccessDetailsRequest {
    /**
     * The name of the instance to access.
     */
    instanceName: ResourceName;
    /**
     * The protocol to use to connect to your instance. Defaults to ssh.
     */
    protocol?: InstanceAccessProtocol;
  }
  export interface GetInstanceAccessDetailsResult {
    /**
     * An array of key-value pairs containing information about a get instance access request.
     */
    accessDetails?: InstanceAccessDetails;
  }
  export interface GetInstanceMetricDataRequest {
    /**
     * The name of the instance for which you want to get metrics data.
     */
    instanceName: ResourceName;
    /**
     * The metric name to get data about. 
     */
    metricName: InstanceMetricName;
    /**
     * The time period for which you are requesting data.
     */
    period: MetricPeriod;
    /**
     * The start time of the time period.
     */
    startTime: timestamp;
    /**
     * The end time of the time period.
     */
    endTime: timestamp;
    /**
     * The unit. The list of valid values is below.
     */
    unit: MetricUnit;
    /**
     * The instance statistics. 
     */
    statistics: MetricStatisticList;
  }
  export interface GetInstanceMetricDataResult {
    /**
     * The metric name to return data for. 
     */
    metricName?: InstanceMetricName;
    /**
     * An array of key-value pairs containing information about the results of your get instance metric data request.
     */
    metricData?: MetricDatapointList;
  }
  export interface GetInstancePortStatesRequest {
    /**
     * The name of the instance.
     */
    instanceName: ResourceName;
  }
  export interface GetInstancePortStatesResult {
    /**
     * Information about the port states resulting from your request.
     */
    portStates?: InstancePortStateList;
  }
  export interface GetInstanceRequest {
    /**
     * The name of the instance.
     */
    instanceName: ResourceName;
  }
  export interface GetInstanceResult {
    /**
     * An array of key-value pairs containing information about the specified instance.
     */
    instance?: Instance;
  }
  export interface GetInstanceSnapshotRequest {
    /**
     * The name of the snapshot for which you are requesting information.
     */
    instanceSnapshotName: ResourceName;
  }
  export interface GetInstanceSnapshotResult {
    /**
     * An array of key-value pairs containing information about the results of your get instance snapshot request.
     */
    instanceSnapshot?: InstanceSnapshot;
  }
  export interface GetInstanceSnapshotsRequest {
    /**
     * A token used for advancing to the next page of results from your get instance snapshots request.
     */
    pageToken?: string;
  }
  export interface GetInstanceSnapshotsResult {
    /**
     * An array of key-value pairs containing information about the results of your get instance snapshots request.
     */
    instanceSnapshots?: InstanceSnapshotList;
    /**
     * A token used for advancing to the next page of results from your get instance snapshots request.
     */
    nextPageToken?: string;
  }
  export interface GetInstanceStateRequest {
    /**
     * The name of the instance to get state information about.
     */
    instanceName: ResourceName;
  }
  export interface GetInstanceStateResult {
    /**
     * The state of the instance.
     */
    state?: InstanceState;
  }
  export interface GetInstancesRequest {
    /**
     * A token used for advancing to the next page of results from your get instances request.
     */
    pageToken?: string;
  }
  export interface GetInstancesResult {
    /**
     * An array of key-value pairs containing information about your instances.
     */
    instances?: InstanceList;
    /**
     * A token used for advancing to the next page of results from your get instances request.
     */
    nextPageToken?: string;
  }
  export interface GetKeyPairRequest {
    /**
     * The name of the key pair for which you are requesting information.
     */
    keyPairName: ResourceName;
  }
  export interface GetKeyPairResult {
    /**
     * An array of key-value pairs containing information about the key pair.
     */
    keyPair?: KeyPair;
  }
  export interface GetKeyPairsRequest {
    /**
     * A token used for advancing to the next page of results from your get key pairs request.
     */
    pageToken?: string;
  }
  export interface GetKeyPairsResult {
    /**
     * An array of key-value pairs containing information about the key pairs.
     */
    keyPairs?: KeyPairList;
    /**
     * A token used for advancing to the next page of results from your get key pairs request.
     */
    nextPageToken?: string;
  }
  export interface GetOperationRequest {
    /**
     * A GUID used to identify the operation.
     */
    operationId: NonEmptyString;
  }
  export interface GetOperationResult {
    /**
     * An array of key-value pairs containing information about the results of your get operation request.
     */
    operation?: Operation;
  }
  export interface GetOperationsForResourceRequest {
    /**
     * The name of the resource for which you are requesting information.
     */
    resourceName: ResourceName;
    /**
     * A token used for advancing to the next page of results from your get operations for resource request.
     */
    pageToken?: string;
  }
  export interface GetOperationsForResourceResult {
    /**
     * An array of key-value pairs containing information about the results of your get operations for resource request.
     */
    operations?: OperationList;
    /**
     * (Deprecated) Returns the number of pages of results that remain.  In releases prior to June 12, 2017, this parameter returned null by the API. It is now deprecated, and the API returns the nextPageToken parameter instead. 
     */
    nextPageCount?: string;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextPageToken?: string;
  }
  export interface GetOperationsRequest {
    /**
     * A token used for advancing to the next page of results from your get operations request.
     */
    pageToken?: string;
  }
  export interface GetOperationsResult {
    /**
     * An array of key-value pairs containing information about the results of your get operations request.
     */
    operations?: OperationList;
    /**
     * A token used for advancing to the next page of results from your get operations request.
     */
    nextPageToken?: string;
  }
  export interface GetRegionsRequest {
    /**
     * A Boolean value indicating whether to also include Availability Zones in your get regions request. Availability Zones are indicated with a letter: e.g., us-east-1a.
     */
    includeAvailabilityZones?: boolean;
  }
  export interface GetRegionsResult {
    /**
     * An array of key-value pairs containing information about your get regions request.
     */
    regions?: RegionList;
  }
  export interface GetStaticIpRequest {
    /**
     * The name of the static IP in Lightsail.
     */
    staticIpName: ResourceName;
  }
  export interface GetStaticIpResult {
    /**
     * An array of key-value pairs containing information about the requested static IP.
     */
    staticIp?: StaticIp;
  }
  export interface GetStaticIpsRequest {
    /**
     * A token used for advancing to the next page of results from your get static IPs request.
     */
    pageToken?: string;
  }
  export interface GetStaticIpsResult {
    /**
     * An array of key-value pairs containing information about your get static IPs request.
     */
    staticIps?: StaticIpList;
    /**
     * A token used for advancing to the next page of results from your get static IPs request.
     */
    nextPageToken?: string;
  }
  export interface ImportKeyPairRequest {
    /**
     * The name of the key pair for which you want to import the public key.
     */
    keyPairName: ResourceName;
    /**
     * A base64-encoded public key of the ssh-rsa type.
     */
    publicKeyBase64: Base64;
  }
  export interface ImportKeyPairResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operation?: Operation;
  }
  export interface Instance {
    /**
     * The name the user gave the instance (e.g., Amazon_Linux-1GB-Virginia-1).
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the instance (e.g., arn:aws:lightsail:us-east-1:123456789101:Instance/244ad76f-8aad-4741-809f-12345EXAMPLE).
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The timestamp when the instance was created (e.g., 1479734909.17).
     */
    createdAt?: IsoDate;
    /**
     * The region name and availability zone where the instance is located.
     */
    location?: ResourceLocation;
    /**
     * The type of resource (usually Instance).
     */
    resourceType?: ResourceType;
    /**
     * The blueprint ID (e.g., os_amlinux_2016_03).
     */
    blueprintId?: NonEmptyString;
    /**
     * The friendly name of the blueprint (e.g., Amazon Linux).
     */
    blueprintName?: NonEmptyString;
    /**
     * The bundle for the instance (e.g., micro_1_0).
     */
    bundleId?: NonEmptyString;
    /**
     * A Boolean value indicating whether this instance has a static IP assigned to it.
     */
    isStaticIp?: boolean;
    /**
     * The private IP address of the instance.
     */
    privateIpAddress?: IpAddress;
    /**
     * The public IP address of the instance.
     */
    publicIpAddress?: IpAddress;
    /**
     * The IPv6 address of the instance.
     */
    ipv6Address?: IpV6Address;
    /**
     * The size of the vCPU and the amount of RAM for the instance.
     */
    hardware?: InstanceHardware;
    /**
     * Information about the public ports and monthly data transfer rates for the instance.
     */
    networking?: InstanceNetworking;
    /**
     * The status code and the state (e.g., running) for the instance.
     */
    state?: InstanceState;
    /**
     * The user name for connecting to the instance (e.g., ec2-user).
     */
    username?: NonEmptyString;
    /**
     * The name of the SSH key being used to connect to the instance (e.g., LightsailDefaultKeyPair).
     */
    sshKeyName?: ResourceName;
  }
  export interface InstanceAccessDetails {
    /**
     * For SSH access, the public key to use when accessing your instance For OpenSSH clients (e.g., command line SSH), you should save this value to tempkey-cert.pub.
     */
    certKey?: string;
    /**
     * For SSH access, the date on which the temporary keys expire.
     */
    expiresAt?: IsoDate;
    /**
     * The public IP address of the Amazon Lightsail instance.
     */
    ipAddress?: IpAddress;
    /**
     * For RDP access, the password for your Amazon Lightsail instance. Password will be an empty string if the password for your new instance is not ready yet. When you create an instance, it can take up to 15 minutes for the instance to be ready.  If you create an instance using any key pair other than the default (LightsailDefaultKeyPair), password will always be an empty string. If you change the Administrator password on the instance, Lightsail will continue to return the original password value. When accessing the instance using RDP, you need to manually enter the Administrator password after changing it from the default. 
     */
    password?: string;
    /**
     * For a Windows Server-based instance, an object with the data you can use to retrieve your password. This is only needed if password is empty and the instance is not new (and therefore the password is not ready yet). When you create an instance, it can take up to 15 minutes for the instance to be ready.
     */
    passwordData?: PasswordData;
    /**
     * For SSH access, the temporary private key. For OpenSSH clients (e.g., command line SSH), you should save this value to tempkey).
     */
    privateKey?: string;
    /**
     * The protocol for these Amazon Lightsail instance access details.
     */
    protocol?: InstanceAccessProtocol;
    /**
     * The name of this Amazon Lightsail instance.
     */
    instanceName?: ResourceName;
    /**
     * The user name to use when logging in to the Amazon Lightsail instance.
     */
    username?: string;
  }
  export type InstanceAccessProtocol = "ssh"|"rdp"|string;
  export interface InstanceHardware {
    /**
     * The number of vCPUs the instance has.
     */
    cpuCount?: integer;
    /**
     * The disks attached to the instance.
     */
    disks?: DiskList;
    /**
     * The amount of RAM in GB on the instance (e.g., 1.0).
     */
    ramSizeInGb?: float;
  }
  export type InstanceList = Instance[];
  export type InstanceMetricName = "CPUUtilization"|"NetworkIn"|"NetworkOut"|"StatusCheckFailed"|"StatusCheckFailed_Instance"|"StatusCheckFailed_System"|string;
  export interface InstanceNetworking {
    /**
     * The amount of data in GB allocated for monthly data transfers.
     */
    monthlyTransfer?: MonthlyTransfer;
    /**
     * An array of key-value pairs containing information about the ports on the instance.
     */
    ports?: InstancePortInfoList;
  }
  export type InstancePlatform = "LINUX_UNIX"|"WINDOWS"|string;
  export type InstancePlatformList = InstancePlatform[];
  export interface InstancePortInfo {
    /**
     * The first port in the range.
     */
    fromPort?: Port;
    /**
     * The last port in the range.
     */
    toPort?: Port;
    /**
     * The protocol being used. Can be one of the following.    tcp - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn't require reliable data stream service, use UDP instead.    all - All transport layer protocol types. For more general information, see Transport layer on Wikipedia.    udp - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don't require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.  
     */
    protocol?: NetworkProtocol;
    /**
     * The location from which access is allowed (e.g., Anywhere (0.0.0.0/0)).
     */
    accessFrom?: string;
    /**
     * The type of access (Public or Private).
     */
    accessType?: PortAccessType;
    /**
     * The common name.
     */
    commonName?: string;
    /**
     * The access direction (inbound or outbound).
     */
    accessDirection?: AccessDirection;
  }
  export type InstancePortInfoList = InstancePortInfo[];
  export interface InstancePortState {
    /**
     * The first port in the range.
     */
    fromPort?: Port;
    /**
     * The last port in the range.
     */
    toPort?: Port;
    /**
     * The protocol being used. Can be one of the following.    tcp - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn't require reliable data stream service, use UDP instead.    all - All transport layer protocol types. For more general information, see Transport layer on Wikipedia.    udp - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don't require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.  
     */
    protocol?: NetworkProtocol;
    /**
     * Specifies whether the instance port is open or closed.
     */
    state?: PortState;
  }
  export type InstancePortStateList = InstancePortState[];
  export interface InstanceSnapshot {
    /**
     * The name of the snapshot.
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the snapshot (e.g., arn:aws:lightsail:us-east-1:123456789101:InstanceSnapshot/d23b5706-3322-4d83-81e5-12345EXAMPLE).
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The timestamp when the snapshot was created (e.g., 1479907467.024).
     */
    createdAt?: IsoDate;
    /**
     * The region name and availability zone where you created the snapshot.
     */
    location?: ResourceLocation;
    /**
     * The type of resource (usually InstanceSnapshot).
     */
    resourceType?: ResourceType;
    /**
     * The state the snapshot is in.
     */
    state?: InstanceSnapshotState;
    /**
     * The progress of the snapshot.
     */
    progress?: string;
    /**
     * The instance from which the snapshot was created.
     */
    fromInstanceName?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the instance from which the snapshot was created (e.g., arn:aws:lightsail:us-east-1:123456789101:Instance/64b8404c-ccb1-430b-8daf-12345EXAMPLE).
     */
    fromInstanceArn?: NonEmptyString;
    /**
     * The blueprint ID from which you created the snapshot (e.g., os_debian_8_3). A blueprint is a virtual private server (or instance) image used to create instances quickly.
     */
    fromBlueprintId?: string;
    /**
     * The bundle ID from which you created the snapshot (e.g., micro_1_0).
     */
    fromBundleId?: string;
    /**
     * The size in GB of the SSD.
     */
    sizeInGb?: integer;
  }
  export type InstanceSnapshotList = InstanceSnapshot[];
  export type InstanceSnapshotState = "pending"|"error"|"available"|string;
  export interface InstanceState {
    /**
     * The status code for the instance.
     */
    code?: integer;
    /**
     * The state of the instance (e.g., running or pending).
     */
    name?: string;
  }
  export type IpAddress = string;
  export type IpV6Address = string;
  export interface IsVpcPeeredRequest {
  }
  export interface IsVpcPeeredResult {
    /**
     * Returns true if the Lightsail VPC is peered; otherwise, false.
     */
    isPeered?: boolean;
  }
  export type IsoDate = Date;
  export interface KeyPair {
    /**
     * The friendly name of the SSH key pair.
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the key pair (e.g., arn:aws:lightsail:us-east-1:123456789101:KeyPair/05859e3d-331d-48ba-9034-12345EXAMPLE).
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The timestamp when the key pair was created (e.g., 1479816991.349).
     */
    createdAt?: IsoDate;
    /**
     * The region name and Availability Zone where the key pair was created.
     */
    location?: ResourceLocation;
    /**
     * The resource type (usually KeyPair).
     */
    resourceType?: ResourceType;
    /**
     * The RSA fingerprint of the key pair.
     */
    fingerprint?: Base64;
  }
  export type KeyPairList = KeyPair[];
  export interface MetricDatapoint {
    /**
     * The average.
     */
    average?: double;
    /**
     * The maximum.
     */
    maximum?: double;
    /**
     * The minimum.
     */
    minimum?: double;
    /**
     * The sample count.
     */
    sampleCount?: double;
    /**
     * The sum.
     */
    sum?: double;
    /**
     * The timestamp (e.g., 1479816991.349).
     */
    timestamp?: timestamp;
    /**
     * The unit. 
     */
    unit?: MetricUnit;
  }
  export type MetricDatapointList = MetricDatapoint[];
  export type MetricPeriod = number;
  export type MetricStatistic = "Minimum"|"Maximum"|"Sum"|"Average"|"SampleCount"|string;
  export type MetricStatisticList = MetricStatistic[];
  export type MetricUnit = "Seconds"|"Microseconds"|"Milliseconds"|"Bytes"|"Kilobytes"|"Megabytes"|"Gigabytes"|"Terabytes"|"Bits"|"Kilobits"|"Megabits"|"Gigabits"|"Terabits"|"Percent"|"Count"|"Bytes/Second"|"Kilobytes/Second"|"Megabytes/Second"|"Gigabytes/Second"|"Terabytes/Second"|"Bits/Second"|"Kilobits/Second"|"Megabits/Second"|"Gigabits/Second"|"Terabits/Second"|"Count/Second"|"None"|string;
  export interface MonthlyTransfer {
    /**
     * The amount allocated per month (in GB).
     */
    gbPerMonthAllocated?: integer;
  }
  export type NetworkProtocol = "tcp"|"all"|"udp"|string;
  export type NonEmptyString = string;
  export interface OpenInstancePublicPortsRequest {
    /**
     * An array of key-value pairs containing information about the port mappings.
     */
    portInfo: PortInfo;
    /**
     * The name of the instance for which you want to open the public ports.
     */
    instanceName: ResourceName;
  }
  export interface OpenInstancePublicPortsResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operation?: Operation;
  }
  export interface Operation {
    /**
     * The ID of the operation.
     */
    id?: NonEmptyString;
    /**
     * The resource name.
     */
    resourceName?: ResourceName;
    /**
     * The resource type. 
     */
    resourceType?: ResourceType;
    /**
     * The timestamp when the operation was initialized (e.g., 1479816991.349).
     */
    createdAt?: IsoDate;
    /**
     * The region and Availability Zone.
     */
    location?: ResourceLocation;
    /**
     * A Boolean value indicating whether the operation is terminal.
     */
    isTerminal?: boolean;
    /**
     * Details about the operation (e.g., Debian-1GB-Virginia-1).
     */
    operationDetails?: string;
    /**
     * The type of operation. 
     */
    operationType?: OperationType;
    /**
     * The status of the operation. 
     */
    status?: OperationStatus;
    /**
     * The timestamp when the status was changed (e.g., 1479816991.349).
     */
    statusChangedAt?: IsoDate;
    /**
     * The error code.
     */
    errorCode?: string;
    /**
     * The error details.
     */
    errorDetails?: string;
  }
  export type OperationList = Operation[];
  export type OperationStatus = "NotStarted"|"Started"|"Failed"|"Completed"|string;
  export type OperationType = "DeleteInstance"|"CreateInstance"|"StopInstance"|"StartInstance"|"RebootInstance"|"OpenInstancePublicPorts"|"PutInstancePublicPorts"|"CloseInstancePublicPorts"|"AllocateStaticIp"|"ReleaseStaticIp"|"AttachStaticIp"|"DetachStaticIp"|"UpdateDomainEntry"|"DeleteDomainEntry"|"CreateDomain"|"DeleteDomain"|"CreateInstanceSnapshot"|"DeleteInstanceSnapshot"|"CreateInstancesFromSnapshot"|string;
  export interface PasswordData {
    /**
     * The encrypted password. Ciphertext will be an empty string if access to your new instance is not ready yet. When you create an instance, it can take up to 15 minutes for the instance to be ready.  If you use the default key pair (LightsailDefaultKeyPair), the decrypted password will be available in the password field. If you are using a custom key pair, you need to use your own means of decryption. If you change the Administrator password on the instance, Lightsail will continue to return the original ciphertext value. When accessing the instance using RDP, you need to manually enter the Administrator password after changing it from the default. 
     */
    ciphertext?: string;
    /**
     * The name of the key pair that you used when creating your instance. If no key pair name was specified when creating the instance, Lightsail uses the default key pair (LightsailDefaultKeyPair). If you are using a custom key pair, you need to use your own means of decrypting your password using the ciphertext. Lightsail creates the ciphertext by encrypting your password with the public key part of this key pair.
     */
    keyPairName?: ResourceName;
  }
  export interface PeerVpcRequest {
  }
  export interface PeerVpcResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operation?: Operation;
  }
  export type Port = number;
  export type PortAccessType = "Public"|"Private"|string;
  export interface PortInfo {
    /**
     * The first port in the range.
     */
    fromPort?: Port;
    /**
     * The last port in the range.
     */
    toPort?: Port;
    /**
     * The protocol. 
     */
    protocol?: NetworkProtocol;
  }
  export type PortInfoList = PortInfo[];
  export type PortState = "open"|"closed"|string;
  export interface PutInstancePublicPortsRequest {
    /**
     * Specifies information about the public port(s).
     */
    portInfos: PortInfoList;
    /**
     * The Lightsail instance name of the public port(s) you are setting.
     */
    instanceName: ResourceName;
  }
  export interface PutInstancePublicPortsResult {
    /**
     * Describes metadata about the operation you just executed.
     */
    operation?: Operation;
  }
  export interface RebootInstanceRequest {
    /**
     * The name of the instance to reboot.
     */
    instanceName: ResourceName;
  }
  export interface RebootInstanceResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operations?: OperationList;
  }
  export interface Region {
    /**
     * The continent code (e.g., NA, meaning North America).
     */
    continentCode?: string;
    /**
     * The description of the AWS Region (e.g., This region is recommended to serve users in the eastern United States and eastern Canada).
     */
    description?: string;
    /**
     * The display name (e.g., Virginia).
     */
    displayName?: string;
    /**
     * The region name (e.g., us-east-1).
     */
    name?: RegionName;
    /**
     * The Availability Zones. Follows the format us-east-1a (case-sensitive).
     */
    availabilityZones?: AvailabilityZoneList;
  }
  export type RegionList = Region[];
  export type RegionName = "us-east-1"|"us-east-2"|"us-west-1"|"us-west-2"|"eu-west-1"|"eu-central-1"|"ap-south-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-northeast-1"|"ap-northeast-2"|string;
  export interface ReleaseStaticIpRequest {
    /**
     * The name of the static IP to delete.
     */
    staticIpName: ResourceName;
  }
  export interface ReleaseStaticIpResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operations?: OperationList;
  }
  export interface ResourceLocation {
    /**
     * The Availability Zone. Follows the format us-east-1a (case-sensitive).
     */
    availabilityZone?: string;
    /**
     * The AWS Region name.
     */
    regionName?: RegionName;
  }
  export type ResourceName = string;
  export type ResourceType = "Instance"|"StaticIp"|"KeyPair"|"InstanceSnapshot"|"Domain"|"PeeredVpc"|string;
  export interface StartInstanceRequest {
    /**
     * The name of the instance (a virtual private server) to start.
     */
    instanceName: ResourceName;
  }
  export interface StartInstanceResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operations?: OperationList;
  }
  export interface StaticIp {
    /**
     * The name of the static IP (e.g., StaticIP-Virginia-EXAMPLE).
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the static IP (e.g., arn:aws:lightsail:us-east-1:123456789101:StaticIp/9cbb4a9e-f8e3-4dfe-b57e-12345EXAMPLE).
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The timestamp when the static IP was created (e.g., 1479735304.222).
     */
    createdAt?: IsoDate;
    /**
     * The region and Availability Zone where the static IP was created.
     */
    location?: ResourceLocation;
    /**
     * The resource type (usually StaticIp).
     */
    resourceType?: ResourceType;
    /**
     * The static IP address.
     */
    ipAddress?: IpAddress;
    /**
     * The instance where the static IP is attached (e.g., Amazon_Linux-1GB-Virginia-1).
     */
    attachedTo?: ResourceName;
    /**
     * A Boolean value indicating whether the static IP is attached.
     */
    isAttached?: boolean;
  }
  export type StaticIpList = StaticIp[];
  export interface StopInstanceRequest {
    /**
     * The name of the instance (a virtual private server) to stop.
     */
    instanceName: ResourceName;
  }
  export interface StopInstanceResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operations?: OperationList;
  }
  export type StringList = string[];
  export interface UnpeerVpcRequest {
  }
  export interface UnpeerVpcResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operation?: Operation;
  }
  export interface UpdateDomainEntryRequest {
    /**
     * The name of the domain recordset to update.
     */
    domainName: DomainName;
    /**
     * An array of key-value pairs containing information about the domain entry.
     */
    domainEntry: DomainEntry;
  }
  export interface UpdateDomainEntryResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operations?: OperationList;
  }
  export type double = number;
  export type float = number;
  export type integer = number;
  export type timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-11-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Lightsail client.
   */
  export import Types = Lightsail;
}
export = Lightsail;
