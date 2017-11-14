import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class DirectConnect extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DirectConnect.Types.ClientConfiguration)
  config: Config & DirectConnect.Types.ClientConfiguration;
  /**
   * Deprecated in favor of AllocateHostedConnection. Creates a hosted connection on an interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the given interconnect.  This is intended for use by AWS Direct Connect partners only. 
   */
  allocateConnectionOnInterconnect(params: DirectConnect.Types.AllocateConnectionOnInterconnectRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Deprecated in favor of AllocateHostedConnection. Creates a hosted connection on an interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the given interconnect.  This is intended for use by AWS Direct Connect partners only. 
   */
  allocateConnectionOnInterconnect(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Creates a hosted connection on an interconnect or a link aggregation group (LAG). Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the given interconnect or LAG.  This is intended for use by AWS Direct Connect partners only. 
   */
  allocateHostedConnection(params: DirectConnect.Types.AllocateHostedConnectionRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Creates a hosted connection on an interconnect or a link aggregation group (LAG). Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the given interconnect or LAG.  This is intended for use by AWS Direct Connect partners only. 
   */
  allocateHostedConnection(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Provisions a private virtual interface to be owned by another AWS customer. Virtual interfaces created using this action must be confirmed by the virtual interface owner by using the ConfirmPrivateVirtualInterface action. Until then, the virtual interface will be in 'Confirming' state, and will not be available for handling traffic.
   */
  allocatePrivateVirtualInterface(params: DirectConnect.Types.AllocatePrivateVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Provisions a private virtual interface to be owned by another AWS customer. Virtual interfaces created using this action must be confirmed by the virtual interface owner by using the ConfirmPrivateVirtualInterface action. Until then, the virtual interface will be in 'Confirming' state, and will not be available for handling traffic.
   */
  allocatePrivateVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Provisions a public virtual interface to be owned by a different customer. The owner of a connection calls this function to provision a public virtual interface which will be owned by another AWS customer. Virtual interfaces created using this function must be confirmed by the virtual interface owner by calling ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface will be in 'Confirming' state, and will not be available for handling traffic. When creating an IPv6 public virtual interface (addressFamily is 'ipv6'), the customer and amazon address fields should be left blank to use auto-assigned IPv6 space. Custom IPv6 Addresses are currently not supported.
   */
  allocatePublicVirtualInterface(params: DirectConnect.Types.AllocatePublicVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Provisions a public virtual interface to be owned by a different customer. The owner of a connection calls this function to provision a public virtual interface which will be owned by another AWS customer. Virtual interfaces created using this function must be confirmed by the virtual interface owner by calling ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface will be in 'Confirming' state, and will not be available for handling traffic. When creating an IPv6 public virtual interface (addressFamily is 'ipv6'), the customer and amazon address fields should be left blank to use auto-assigned IPv6 space. Custom IPv6 Addresses are currently not supported.
   */
  allocatePublicVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to AWS will be interrupted). The connection must be hosted on the same AWS Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can reassociate a connection that's currently associated with a different LAG; however, if removing the connection will cause the original LAG to fall below its setting for minimum number of operational connections, the request fails. Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG. For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.
   */
  associateConnectionWithLag(params: DirectConnect.Types.AssociateConnectionWithLagRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to AWS will be interrupted). The connection must be hosted on the same AWS Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can reassociate a connection that's currently associated with a different LAG; however, if removing the connection will cause the original LAG to fall below its setting for minimum number of operational connections, the request fails. Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG. For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.
   */
  associateConnectionWithLag(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to AWS as it is being migrated.  This is intended for use by AWS Direct Connect partners only. 
   */
  associateHostedConnection(params: DirectConnect.Types.AssociateHostedConnectionRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to AWS as it is being migrated.  This is intended for use by AWS Direct Connect partners only. 
   */
  associateHostedConnection(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to AWS is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails.  Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using AssociateHostedConnection. Hosted virtual interfaces (an interface for which the owner of the connection is not the owner of physical connection) can only be reassociated by the owner of the physical connection.
   */
  associateVirtualInterface(params: DirectConnect.Types.AssociateVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to AWS is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails.  Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using AssociateHostedConnection. Hosted virtual interfaces (an interface for which the owner of the connection is not the owner of physical connection) can only be reassociated by the owner of the physical connection.
   */
  associateVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Confirm the creation of a hosted connection on an interconnect. Upon creation, the hosted connection is initially in the 'Ordering' state, and will remain in this state until the owner calls ConfirmConnection to confirm creation of the hosted connection.
   */
  confirmConnection(params: DirectConnect.Types.ConfirmConnectionRequest, callback?: (err: AWSError, data: DirectConnect.Types.ConfirmConnectionResponse) => void): Request<DirectConnect.Types.ConfirmConnectionResponse, AWSError>;
  /**
   * Confirm the creation of a hosted connection on an interconnect. Upon creation, the hosted connection is initially in the 'Ordering' state, and will remain in this state until the owner calls ConfirmConnection to confirm creation of the hosted connection.
   */
  confirmConnection(callback?: (err: AWSError, data: DirectConnect.Types.ConfirmConnectionResponse) => void): Request<DirectConnect.Types.ConfirmConnectionResponse, AWSError>;
  /**
   * Accept ownership of a private virtual interface created by another customer. After the virtual interface owner calls this function, the virtual interface will be created and attached to the given virtual private gateway, and will be available for handling traffic.
   */
  confirmPrivateVirtualInterface(params: DirectConnect.Types.ConfirmPrivateVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.ConfirmPrivateVirtualInterfaceResponse) => void): Request<DirectConnect.Types.ConfirmPrivateVirtualInterfaceResponse, AWSError>;
  /**
   * Accept ownership of a private virtual interface created by another customer. After the virtual interface owner calls this function, the virtual interface will be created and attached to the given virtual private gateway, and will be available for handling traffic.
   */
  confirmPrivateVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.ConfirmPrivateVirtualInterfaceResponse) => void): Request<DirectConnect.Types.ConfirmPrivateVirtualInterfaceResponse, AWSError>;
  /**
   * Accept ownership of a public virtual interface created by another customer. After the virtual interface owner calls this function, the specified virtual interface will be created and made available for handling traffic.
   */
  confirmPublicVirtualInterface(params: DirectConnect.Types.ConfirmPublicVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.ConfirmPublicVirtualInterfaceResponse) => void): Request<DirectConnect.Types.ConfirmPublicVirtualInterfaceResponse, AWSError>;
  /**
   * Accept ownership of a public virtual interface created by another customer. After the virtual interface owner calls this function, the specified virtual interface will be created and made available for handling traffic.
   */
  confirmPublicVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.ConfirmPublicVirtualInterfaceResponse) => void): Request<DirectConnect.Types.ConfirmPublicVirtualInterfaceResponse, AWSError>;
  /**
   * Creates a new BGP peer on a specified virtual interface. The BGP peer cannot be in the same address family (IPv4/IPv6) of an existing BGP peer on the virtual interface. You must create a BGP peer for the corresponding address family in order to access AWS resources that also use that address family. When creating a IPv6 BGP peer, the Amazon address and customer address fields must be left blank. IPv6 addresses are automatically assigned from Amazon's pool of IPv6 addresses; you cannot specify custom IPv6 addresses. For a public virtual interface, the Autonomous System Number (ASN) must be private or already whitelisted for the virtual interface.
   */
  createBGPPeer(params: DirectConnect.Types.CreateBGPPeerRequest, callback?: (err: AWSError, data: DirectConnect.Types.CreateBGPPeerResponse) => void): Request<DirectConnect.Types.CreateBGPPeerResponse, AWSError>;
  /**
   * Creates a new BGP peer on a specified virtual interface. The BGP peer cannot be in the same address family (IPv4/IPv6) of an existing BGP peer on the virtual interface. You must create a BGP peer for the corresponding address family in order to access AWS resources that also use that address family. When creating a IPv6 BGP peer, the Amazon address and customer address fields must be left blank. IPv6 addresses are automatically assigned from Amazon's pool of IPv6 addresses; you cannot specify custom IPv6 addresses. For a public virtual interface, the Autonomous System Number (ASN) must be private or already whitelisted for the virtual interface.
   */
  createBGPPeer(callback?: (err: AWSError, data: DirectConnect.Types.CreateBGPPeerResponse) => void): Request<DirectConnect.Types.CreateBGPPeerResponse, AWSError>;
  /**
   * Creates a new connection between the customer network and a specific AWS Direct Connect location. A connection links your internal network to an AWS Direct Connect location over a standard 1 gigabit or 10 gigabit Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. An AWS Direct Connect location provides access to Amazon Web Services in the region it is associated with. You can establish connections with AWS Direct Connect locations in multiple regions, but a connection in one region does not provide connectivity to other regions. You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection will be created.
   */
  createConnection(params: DirectConnect.Types.CreateConnectionRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Creates a new connection between the customer network and a specific AWS Direct Connect location. A connection links your internal network to an AWS Direct Connect location over a standard 1 gigabit or 10 gigabit Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. An AWS Direct Connect location provides access to Amazon Web Services in the region it is associated with. You can establish connections with AWS Direct Connect locations in multiple regions, but a connection in one region does not provide connectivity to other regions. You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection will be created.
   */
  createConnection(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Creates a new interconnect between a AWS Direct Connect partner's network and a specific AWS Direct Connect location. An interconnect is a connection which is capable of hosting other connections. The AWS Direct Connect partner can use an interconnect to provide sub-1Gbps AWS Direct Connect service to tier 2 customers who do not have their own connections. Like a standard connection, an interconnect links the AWS Direct Connect partner's network to an AWS Direct Connect location over a standard 1 Gbps or 10 Gbps Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an AWS Direct Connect router. You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect will be created. For each end customer, the AWS Direct Connect partner provisions a connection on their interconnect by calling AllocateConnectionOnInterconnect. The end customer can then connect to AWS resources by creating a virtual interface on their connection, using the VLAN assigned to them by the AWS Direct Connect partner.  This is intended for use by AWS Direct Connect partners only. 
   */
  createInterconnect(params: DirectConnect.Types.CreateInterconnectRequest, callback?: (err: AWSError, data: DirectConnect.Types.Interconnect) => void): Request<DirectConnect.Types.Interconnect, AWSError>;
  /**
   * Creates a new interconnect between a AWS Direct Connect partner's network and a specific AWS Direct Connect location. An interconnect is a connection which is capable of hosting other connections. The AWS Direct Connect partner can use an interconnect to provide sub-1Gbps AWS Direct Connect service to tier 2 customers who do not have their own connections. Like a standard connection, an interconnect links the AWS Direct Connect partner's network to an AWS Direct Connect location over a standard 1 Gbps or 10 Gbps Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an AWS Direct Connect router. You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect will be created. For each end customer, the AWS Direct Connect partner provisions a connection on their interconnect by calling AllocateConnectionOnInterconnect. The end customer can then connect to AWS resources by creating a virtual interface on their connection, using the VLAN assigned to them by the AWS Direct Connect partner.  This is intended for use by AWS Direct Connect partners only. 
   */
  createInterconnect(callback?: (err: AWSError, data: DirectConnect.Types.Interconnect) => void): Request<DirectConnect.Types.Interconnect, AWSError>;
  /**
   * Creates a new link aggregation group (LAG) with the specified number of bundled physical connections between the customer network and a specific AWS Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple 1 gigabit or 10 gigabit interfaces, allowing you to treat them as a single interface. All connections in a LAG must use the same bandwidth (for example, 10 Gbps), and must terminate at the same AWS Direct Connect endpoint. You can have up to 10 connections per LAG. Regardless of this limit, if you request more connections for the LAG than AWS Direct Connect can allocate on a single endpoint, no LAG is created. You can specify an existing physical connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical connection or hosted connections, and re-establishes them as a member of the LAG. The LAG will be created on the same AWS Direct Connect endpoint to which the connection terminates. Any virtual interfaces associated with the connection are automatically disassociated and re-associated with the LAG. The connection ID does not change. If the AWS account used to create a LAG is a registered AWS Direct Connect partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.
   */
  createLag(params: DirectConnect.Types.CreateLagRequest, callback?: (err: AWSError, data: DirectConnect.Types.Lag) => void): Request<DirectConnect.Types.Lag, AWSError>;
  /**
   * Creates a new link aggregation group (LAG) with the specified number of bundled physical connections between the customer network and a specific AWS Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple 1 gigabit or 10 gigabit interfaces, allowing you to treat them as a single interface. All connections in a LAG must use the same bandwidth (for example, 10 Gbps), and must terminate at the same AWS Direct Connect endpoint. You can have up to 10 connections per LAG. Regardless of this limit, if you request more connections for the LAG than AWS Direct Connect can allocate on a single endpoint, no LAG is created. You can specify an existing physical connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical connection or hosted connections, and re-establishes them as a member of the LAG. The LAG will be created on the same AWS Direct Connect endpoint to which the connection terminates. Any virtual interfaces associated with the connection are automatically disassociated and re-associated with the LAG. The connection ID does not change. If the AWS account used to create a LAG is a registered AWS Direct Connect partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.
   */
  createLag(callback?: (err: AWSError, data: DirectConnect.Types.Lag) => void): Request<DirectConnect.Types.Lag, AWSError>;
  /**
   * Creates a new private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A private virtual interface supports sending traffic to a single virtual private cloud (VPC).
   */
  createPrivateVirtualInterface(params: DirectConnect.Types.CreatePrivateVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Creates a new private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A private virtual interface supports sending traffic to a single virtual private cloud (VPC).
   */
  createPrivateVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Creates a new public virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A public virtual interface supports sending traffic to public services of AWS such as Amazon Simple Storage Service (Amazon S3). When creating an IPv6 public virtual interface (addressFamily is 'ipv6'), the customer and amazon address fields should be left blank to use auto-assigned IPv6 space. Custom IPv6 Addresses are currently not supported.
   */
  createPublicVirtualInterface(params: DirectConnect.Types.CreatePublicVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Creates a new public virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A public virtual interface supports sending traffic to public services of AWS such as Amazon Simple Storage Service (Amazon S3). When creating an IPv6 public virtual interface (addressFamily is 'ipv6'), the customer and amazon address fields should be left blank to use auto-assigned IPv6 space. Custom IPv6 Addresses are currently not supported.
   */
  createPublicVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Deletes a BGP peer on the specified virtual interface that matches the specified customer address and ASN. You cannot delete the last BGP peer from a virtual interface.
   */
  deleteBGPPeer(params: DirectConnect.Types.DeleteBGPPeerRequest, callback?: (err: AWSError, data: DirectConnect.Types.DeleteBGPPeerResponse) => void): Request<DirectConnect.Types.DeleteBGPPeerResponse, AWSError>;
  /**
   * Deletes a BGP peer on the specified virtual interface that matches the specified customer address and ASN. You cannot delete the last BGP peer from a virtual interface.
   */
  deleteBGPPeer(callback?: (err: AWSError, data: DirectConnect.Types.DeleteBGPPeerResponse) => void): Request<DirectConnect.Types.DeleteBGPPeerResponse, AWSError>;
  /**
   * Deletes the connection. Deleting a connection only stops the AWS Direct Connect port hour and data transfer charges. You need to cancel separately with the providers any services or charges for cross-connects or network circuits that connect you to the AWS Direct Connect location.
   */
  deleteConnection(params: DirectConnect.Types.DeleteConnectionRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Deletes the connection. Deleting a connection only stops the AWS Direct Connect port hour and data transfer charges. You need to cancel separately with the providers any services or charges for cross-connects or network circuits that connect you to the AWS Direct Connect location.
   */
  deleteConnection(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Deletes the specified interconnect.  This is intended for use by AWS Direct Connect partners only. 
   */
  deleteInterconnect(params: DirectConnect.Types.DeleteInterconnectRequest, callback?: (err: AWSError, data: DirectConnect.Types.DeleteInterconnectResponse) => void): Request<DirectConnect.Types.DeleteInterconnectResponse, AWSError>;
  /**
   * Deletes the specified interconnect.  This is intended for use by AWS Direct Connect partners only. 
   */
  deleteInterconnect(callback?: (err: AWSError, data: DirectConnect.Types.DeleteInterconnectResponse) => void): Request<DirectConnect.Types.DeleteInterconnectResponse, AWSError>;
  /**
   * Deletes a link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.
   */
  deleteLag(params: DirectConnect.Types.DeleteLagRequest, callback?: (err: AWSError, data: DirectConnect.Types.Lag) => void): Request<DirectConnect.Types.Lag, AWSError>;
  /**
   * Deletes a link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.
   */
  deleteLag(callback?: (err: AWSError, data: DirectConnect.Types.Lag) => void): Request<DirectConnect.Types.Lag, AWSError>;
  /**
   * Deletes a virtual interface.
   */
  deleteVirtualInterface(params: DirectConnect.Types.DeleteVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.DeleteVirtualInterfaceResponse) => void): Request<DirectConnect.Types.DeleteVirtualInterfaceResponse, AWSError>;
  /**
   * Deletes a virtual interface.
   */
  deleteVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.DeleteVirtualInterfaceResponse) => void): Request<DirectConnect.Types.DeleteVirtualInterfaceResponse, AWSError>;
  /**
   * Deprecated in favor of DescribeLoa. Returns the LOA-CFA for a Connection. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect user guide.
   */
  describeConnectionLoa(params: DirectConnect.Types.DescribeConnectionLoaRequest, callback?: (err: AWSError, data: DirectConnect.Types.DescribeConnectionLoaResponse) => void): Request<DirectConnect.Types.DescribeConnectionLoaResponse, AWSError>;
  /**
   * Deprecated in favor of DescribeLoa. Returns the LOA-CFA for a Connection. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect user guide.
   */
  describeConnectionLoa(callback?: (err: AWSError, data: DirectConnect.Types.DescribeConnectionLoaResponse) => void): Request<DirectConnect.Types.DescribeConnectionLoaResponse, AWSError>;
  /**
   * Displays all connections in this region. If a connection ID is provided, the call returns only that particular connection.
   */
  describeConnections(params: DirectConnect.Types.DescribeConnectionsRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Displays all connections in this region. If a connection ID is provided, the call returns only that particular connection.
   */
  describeConnections(callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Deprecated in favor of DescribeHostedConnections. Returns a list of connections that have been provisioned on the given interconnect.  This is intended for use by AWS Direct Connect partners only. 
   */
  describeConnectionsOnInterconnect(params: DirectConnect.Types.DescribeConnectionsOnInterconnectRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Deprecated in favor of DescribeHostedConnections. Returns a list of connections that have been provisioned on the given interconnect.  This is intended for use by AWS Direct Connect partners only. 
   */
  describeConnectionsOnInterconnect(callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Returns a list of hosted connections that have been provisioned on the given interconnect or link aggregation group (LAG).  This is intended for use by AWS Direct Connect partners only. 
   */
  describeHostedConnections(params: DirectConnect.Types.DescribeHostedConnectionsRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Returns a list of hosted connections that have been provisioned on the given interconnect or link aggregation group (LAG).  This is intended for use by AWS Direct Connect partners only. 
   */
  describeHostedConnections(callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Deprecated in favor of DescribeLoa. Returns the LOA-CFA for an Interconnect. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect user guide.
   */
  describeInterconnectLoa(params: DirectConnect.Types.DescribeInterconnectLoaRequest, callback?: (err: AWSError, data: DirectConnect.Types.DescribeInterconnectLoaResponse) => void): Request<DirectConnect.Types.DescribeInterconnectLoaResponse, AWSError>;
  /**
   * Deprecated in favor of DescribeLoa. Returns the LOA-CFA for an Interconnect. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect user guide.
   */
  describeInterconnectLoa(callback?: (err: AWSError, data: DirectConnect.Types.DescribeInterconnectLoaResponse) => void): Request<DirectConnect.Types.DescribeInterconnectLoaResponse, AWSError>;
  /**
   * Returns a list of interconnects owned by the AWS account. If an interconnect ID is provided, it will only return this particular interconnect.
   */
  describeInterconnects(params: DirectConnect.Types.DescribeInterconnectsRequest, callback?: (err: AWSError, data: DirectConnect.Types.Interconnects) => void): Request<DirectConnect.Types.Interconnects, AWSError>;
  /**
   * Returns a list of interconnects owned by the AWS account. If an interconnect ID is provided, it will only return this particular interconnect.
   */
  describeInterconnects(callback?: (err: AWSError, data: DirectConnect.Types.Interconnects) => void): Request<DirectConnect.Types.Interconnects, AWSError>;
  /**
   * Describes the link aggregation groups (LAGs) in your account.  If a LAG ID is provided, only information about the specified LAG is returned.
   */
  describeLags(params: DirectConnect.Types.DescribeLagsRequest, callback?: (err: AWSError, data: DirectConnect.Types.Lags) => void): Request<DirectConnect.Types.Lags, AWSError>;
  /**
   * Describes the link aggregation groups (LAGs) in your account.  If a LAG ID is provided, only information about the specified LAG is returned.
   */
  describeLags(callback?: (err: AWSError, data: DirectConnect.Types.Lags) => void): Request<DirectConnect.Types.Lags, AWSError>;
  /**
   * Returns the LOA-CFA for a connection, interconnect, or link aggregation group (LAG). The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect user guide.
   */
  describeLoa(params: DirectConnect.Types.DescribeLoaRequest, callback?: (err: AWSError, data: DirectConnect.Types.Loa) => void): Request<DirectConnect.Types.Loa, AWSError>;
  /**
   * Returns the LOA-CFA for a connection, interconnect, or link aggregation group (LAG). The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect user guide.
   */
  describeLoa(callback?: (err: AWSError, data: DirectConnect.Types.Loa) => void): Request<DirectConnect.Types.Loa, AWSError>;
  /**
   * Returns the list of AWS Direct Connect locations in the current AWS region. These are the locations that may be selected when calling CreateConnection or CreateInterconnect.
   */
  describeLocations(callback?: (err: AWSError, data: DirectConnect.Types.Locations) => void): Request<DirectConnect.Types.Locations, AWSError>;
  /**
   * Describes the tags associated with the specified Direct Connect resources.
   */
  describeTags(params: DirectConnect.Types.DescribeTagsRequest, callback?: (err: AWSError, data: DirectConnect.Types.DescribeTagsResponse) => void): Request<DirectConnect.Types.DescribeTagsResponse, AWSError>;
  /**
   * Describes the tags associated with the specified Direct Connect resources.
   */
  describeTags(callback?: (err: AWSError, data: DirectConnect.Types.DescribeTagsResponse) => void): Request<DirectConnect.Types.DescribeTagsResponse, AWSError>;
  /**
   * Returns a list of virtual private gateways owned by the AWS account. You can create one or more AWS Direct Connect private virtual interfaces linking to a virtual private gateway. A virtual private gateway can be managed via Amazon Virtual Private Cloud (VPC) console or the EC2 CreateVpnGateway action.
   */
  describeVirtualGateways(callback?: (err: AWSError, data: DirectConnect.Types.VirtualGateways) => void): Request<DirectConnect.Types.VirtualGateways, AWSError>;
  /**
   * Displays all virtual interfaces for an AWS account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned. A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer.
   */
  describeVirtualInterfaces(params: DirectConnect.Types.DescribeVirtualInterfacesRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterfaces) => void): Request<DirectConnect.Types.VirtualInterfaces, AWSError>;
  /**
   * Displays all virtual interfaces for an AWS account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned. A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer.
   */
  describeVirtualInterfaces(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterfaces) => void): Request<DirectConnect.Types.VirtualInterfaces, AWSError>;
  /**
   * Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the DeleteConnection request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an AWS Direct Connect partner is automatically converted to an interconnect. If disassociating the connection will cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. 
   */
  disassociateConnectionFromLag(params: DirectConnect.Types.DisassociateConnectionFromLagRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the DeleteConnection request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an AWS Direct Connect partner is automatically converted to an interconnect. If disassociating the connection will cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. 
   */
  disassociateConnectionFromLag(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Adds the specified tags to the specified Direct Connect resource. Each Direct Connect resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with the Direct Connect resource, this action updates its value.
   */
  tagResource(params: DirectConnect.Types.TagResourceRequest, callback?: (err: AWSError, data: DirectConnect.Types.TagResourceResponse) => void): Request<DirectConnect.Types.TagResourceResponse, AWSError>;
  /**
   * Adds the specified tags to the specified Direct Connect resource. Each Direct Connect resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with the Direct Connect resource, this action updates its value.
   */
  tagResource(callback?: (err: AWSError, data: DirectConnect.Types.TagResourceResponse) => void): Request<DirectConnect.Types.TagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from the specified Direct Connect resource.
   */
  untagResource(params: DirectConnect.Types.UntagResourceRequest, callback?: (err: AWSError, data: DirectConnect.Types.UntagResourceResponse) => void): Request<DirectConnect.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from the specified Direct Connect resource.
   */
  untagResource(callback?: (err: AWSError, data: DirectConnect.Types.UntagResourceResponse) => void): Request<DirectConnect.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the attributes of a link aggregation group (LAG).  You can update the following attributes:    The name of the LAG.   The value for the minimum number of connections that must be operational for the LAG itself to be operational.    When you create a LAG, the default value for the minimum number of operational connections is zero (0). If you update this value, and the number of operational connections falls below the specified value, the LAG will automatically go down to avoid overutilization of the remaining connections. Adjusting this value should be done with care as it could force the LAG down if the value is set higher than the current number of operational connections.
   */
  updateLag(params: DirectConnect.Types.UpdateLagRequest, callback?: (err: AWSError, data: DirectConnect.Types.Lag) => void): Request<DirectConnect.Types.Lag, AWSError>;
  /**
   * Updates the attributes of a link aggregation group (LAG).  You can update the following attributes:    The name of the LAG.   The value for the minimum number of connections that must be operational for the LAG itself to be operational.    When you create a LAG, the default value for the minimum number of operational connections is zero (0). If you update this value, and the number of operational connections falls below the specified value, the LAG will automatically go down to avoid overutilization of the remaining connections. Adjusting this value should be done with care as it could force the LAG down if the value is set higher than the current number of operational connections.
   */
  updateLag(callback?: (err: AWSError, data: DirectConnect.Types.Lag) => void): Request<DirectConnect.Types.Lag, AWSError>;
}
declare namespace DirectConnect {
  export type ASN = number;
  export type AddressFamily = "ipv4"|"ipv6"|string;
  export interface AllocateConnectionOnInterconnectRequest {
    /**
     * Bandwidth of the connection. Example: "500Mbps" Default: None Values: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or 500Mbps
     */
    bandwidth: Bandwidth;
    /**
     * Name of the provisioned connection. Example: "500M Connection to AWS" Default: None
     */
    connectionName: ConnectionName;
    /**
     * Numeric account Id of the customer for whom the connection will be provisioned. Example: 123443215678 Default: None
     */
    ownerAccount: OwnerAccount;
    /**
     * ID of the interconnect on which the connection will be provisioned. Example: dxcon-456abc78 Default: None
     */
    interconnectId: InterconnectId;
    /**
     * The dedicated VLAN provisioned to the connection. Example: 101 Default: None
     */
    vlan: VLAN;
  }
  export interface AllocateHostedConnectionRequest {
    /**
     * The ID of the interconnect or LAG on which the connection will be provisioned. Example: dxcon-456abc78 or dxlag-abc123 Default: None
     */
    connectionId: ConnectionId;
    /**
     * The numeric account ID of the customer for whom the connection will be provisioned. Example: 123443215678 Default: None
     */
    ownerAccount: OwnerAccount;
    /**
     * The bandwidth of the connection. Example: 500Mbps  Default: None Values: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or 500Mbps
     */
    bandwidth: Bandwidth;
    /**
     * The name of the provisioned connection. Example: "500M Connection to AWS" Default: None
     */
    connectionName: ConnectionName;
    /**
     * The dedicated VLAN provisioned to the hosted connection. Example: 101 Default: None
     */
    vlan: VLAN;
  }
  export interface AllocatePrivateVirtualInterfaceRequest {
    /**
     * The connection ID on which the private virtual interface is provisioned. Default: None
     */
    connectionId: ConnectionId;
    /**
     * The AWS account that will own the new private virtual interface. Default: None
     */
    ownerAccount: OwnerAccount;
    /**
     * Detailed information for the private virtual interface to be provisioned. Default: None
     */
    newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;
  }
  export interface AllocatePublicVirtualInterfaceRequest {
    /**
     * The connection ID on which the public virtual interface is provisioned. Default: None
     */
    connectionId: ConnectionId;
    /**
     * The AWS account that will own the new public virtual interface. Default: None
     */
    ownerAccount: OwnerAccount;
    /**
     * Detailed information for the public virtual interface to be provisioned. Default: None
     */
    newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation;
  }
  export type AmazonAddress = string;
  export interface AssociateConnectionWithLagRequest {
    /**
     * The ID of the connection. Example: dxcon-abc123 Default: None
     */
    connectionId: ConnectionId;
    /**
     * The ID of the LAG with which to associate the connection. Example: dxlag-abc123 Default: None
     */
    lagId: LagId;
  }
  export interface AssociateHostedConnectionRequest {
    /**
     * The ID of the hosted connection. Example: dxcon-abc123 Default: None
     */
    connectionId: ConnectionId;
    /**
     * The ID of the interconnect or the LAG. Example: dxcon-abc123 or dxlag-abc123 Default: None
     */
    parentConnectionId: ConnectionId;
  }
  export interface AssociateVirtualInterfaceRequest {
    /**
     * The ID of the virtual interface. Example: dxvif-123dfg56 Default: None
     */
    virtualInterfaceId: VirtualInterfaceId;
    /**
     * The ID of the LAG or connection with which to associate the virtual interface. Example: dxlag-abc123 or dxcon-abc123 Default: None
     */
    connectionId: ConnectionId;
  }
  export type AwsDevice = string;
  export type BGPAuthKey = string;
  export interface BGPPeer {
    asn?: ASN;
    authKey?: BGPAuthKey;
    addressFamily?: AddressFamily;
    amazonAddress?: AmazonAddress;
    customerAddress?: CustomerAddress;
    bgpPeerState?: BGPPeerState;
    bgpStatus?: BGPStatus;
  }
  export type BGPPeerList = BGPPeer[];
  export type BGPPeerState = "verifying"|"pending"|"available"|"deleting"|"deleted"|string;
  export type BGPStatus = "up"|"down"|string;
  export type Bandwidth = string;
  export type BooleanFlag = boolean;
  export type CIDR = string;
  export interface ConfirmConnectionRequest {
    connectionId: ConnectionId;
  }
  export interface ConfirmConnectionResponse {
    connectionState?: ConnectionState;
  }
  export interface ConfirmPrivateVirtualInterfaceRequest {
    virtualInterfaceId: VirtualInterfaceId;
    /**
     * ID of the virtual private gateway that will be attached to the virtual interface.  A virtual private gateway can be managed via the Amazon Virtual Private Cloud (VPC) console or the EC2 CreateVpnGateway action. Default: None
     */
    virtualGatewayId: VirtualGatewayId;
  }
  export interface ConfirmPrivateVirtualInterfaceResponse {
    virtualInterfaceState?: VirtualInterfaceState;
  }
  export interface ConfirmPublicVirtualInterfaceRequest {
    virtualInterfaceId: VirtualInterfaceId;
  }
  export interface ConfirmPublicVirtualInterfaceResponse {
    virtualInterfaceState?: VirtualInterfaceState;
  }
  export interface Connection {
    /**
     * The AWS account that will own the new connection.
     */
    ownerAccount?: OwnerAccount;
    connectionId?: ConnectionId;
    connectionName?: ConnectionName;
    connectionState?: ConnectionState;
    region?: Region;
    location?: LocationCode;
    /**
     * Bandwidth of the connection. Example: 1Gbps (for regular connections), or 500Mbps (for hosted connections) Default: None
     */
    bandwidth?: Bandwidth;
    vlan?: VLAN;
    /**
     * The name of the AWS Direct Connect service provider associated with the connection.
     */
    partnerName?: PartnerName;
    /**
     * The time of the most recent call to DescribeLoa for this connection.
     */
    loaIssueTime?: LoaIssueTime;
    lagId?: LagId;
    /**
     * The Direct Connection endpoint which the physical connection terminates on.
     */
    awsDevice?: AwsDevice;
  }
  export type ConnectionId = string;
  export type ConnectionList = Connection[];
  export type ConnectionName = string;
  export type ConnectionState = "ordering"|"requested"|"pending"|"available"|"down"|"deleting"|"deleted"|"rejected"|string;
  export interface Connections {
    /**
     * A list of connections.
     */
    connections?: ConnectionList;
  }
  export type Count = number;
  export interface CreateBGPPeerRequest {
    /**
     * The ID of the virtual interface on which the BGP peer will be provisioned. Example: dxvif-456abc78 Default: None
     */
    virtualInterfaceId?: VirtualInterfaceId;
    /**
     * Detailed information for the BGP peer to be created. Default: None
     */
    newBGPPeer?: NewBGPPeer;
  }
  export interface CreateBGPPeerResponse {
    virtualInterface?: VirtualInterface;
  }
  export interface CreateConnectionRequest {
    location: LocationCode;
    bandwidth: Bandwidth;
    connectionName: ConnectionName;
    lagId?: LagId;
  }
  export interface CreateInterconnectRequest {
    /**
     * The name of the interconnect. Example: "1G Interconnect to AWS" Default: None
     */
    interconnectName: InterconnectName;
    /**
     * The port bandwidth Example: 1Gbps Default: None Available values: 1Gbps,10Gbps
     */
    bandwidth: Bandwidth;
    /**
     * Where the interconnect is located Example: EqSV5 Default: None
     */
    location: LocationCode;
    lagId?: LagId;
  }
  export interface CreateLagRequest {
    /**
     * The number of physical connections initially provisioned and bundled by the LAG. Default: None
     */
    numberOfConnections: Count;
    /**
     * The AWS Direct Connect location in which the LAG should be allocated. Example: EqSV5 Default: None
     */
    location: LocationCode;
    /**
     * The bandwidth of the individual physical connections bundled by the LAG. Default: None Available values: 1Gbps, 10Gbps
     */
    connectionsBandwidth: Bandwidth;
    /**
     * The name of the LAG. Example: "3x10G LAG to AWS" Default: None
     */
    lagName: LagName;
    /**
     * The ID of an existing connection to migrate to the LAG. Default: None
     */
    connectionId?: ConnectionId;
  }
  export interface CreatePrivateVirtualInterfaceRequest {
    connectionId: ConnectionId;
    /**
     * Detailed information for the private virtual interface to be created. Default: None
     */
    newPrivateVirtualInterface: NewPrivateVirtualInterface;
  }
  export interface CreatePublicVirtualInterfaceRequest {
    connectionId: ConnectionId;
    /**
     * Detailed information for the public virtual interface to be created. Default: None
     */
    newPublicVirtualInterface: NewPublicVirtualInterface;
  }
  export type CustomerAddress = string;
  export interface DeleteBGPPeerRequest {
    /**
     * The ID of the virtual interface from which the BGP peer will be deleted. Example: dxvif-456abc78 Default: None
     */
    virtualInterfaceId?: VirtualInterfaceId;
    asn?: ASN;
    customerAddress?: CustomerAddress;
  }
  export interface DeleteBGPPeerResponse {
    virtualInterface?: VirtualInterface;
  }
  export interface DeleteConnectionRequest {
    connectionId: ConnectionId;
  }
  export interface DeleteInterconnectRequest {
    interconnectId: InterconnectId;
  }
  export interface DeleteInterconnectResponse {
    interconnectState?: InterconnectState;
  }
  export interface DeleteLagRequest {
    /**
     * The ID of the LAG to delete. Example: dxlag-abc123 Default: None
     */
    lagId: LagId;
  }
  export interface DeleteVirtualInterfaceRequest {
    virtualInterfaceId: VirtualInterfaceId;
  }
  export interface DeleteVirtualInterfaceResponse {
    virtualInterfaceState?: VirtualInterfaceState;
  }
  export interface DescribeConnectionLoaRequest {
    connectionId: ConnectionId;
    /**
     * The name of the APN partner or service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect. Default: None
     */
    providerName?: ProviderName;
    loaContentType?: LoaContentType;
  }
  export interface DescribeConnectionLoaResponse {
    loa?: Loa;
  }
  export interface DescribeConnectionsOnInterconnectRequest {
    /**
     * ID of the interconnect on which a list of connection is provisioned. Example: dxcon-abc123 Default: None
     */
    interconnectId: InterconnectId;
  }
  export interface DescribeConnectionsRequest {
    connectionId?: ConnectionId;
  }
  export interface DescribeHostedConnectionsRequest {
    /**
     * The ID of the interconnect or LAG on which the hosted connections are provisioned. Example: dxcon-abc123 or dxlag-abc123 Default: None
     */
    connectionId: ConnectionId;
  }
  export interface DescribeInterconnectLoaRequest {
    interconnectId: InterconnectId;
    /**
     * The name of the service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect. Default: None
     */
    providerName?: ProviderName;
    loaContentType?: LoaContentType;
  }
  export interface DescribeInterconnectLoaResponse {
    loa?: Loa;
  }
  export interface DescribeInterconnectsRequest {
    interconnectId?: InterconnectId;
  }
  export interface DescribeLagsRequest {
    /**
     * The ID of the LAG. Example: dxlag-abc123 Default: None
     */
    lagId?: LagId;
  }
  export interface DescribeLoaRequest {
    /**
     * The ID of a connection, LAG, or interconnect for which to get the LOA-CFA information. Example: dxcon-abc123 or dxlag-abc123 Default: None
     */
    connectionId: ConnectionId;
    /**
     * The name of the service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect. Default: None
     */
    providerName?: ProviderName;
    /**
     * A standard media type indicating the content type of the LOA-CFA document. Currently, the only supported value is "application/pdf". Default: application/pdf
     */
    loaContentType?: LoaContentType;
  }
  export interface DescribeTagsRequest {
    /**
     * The Amazon Resource Names (ARNs) of the Direct Connect resources.
     */
    resourceArns: ResourceArnList;
  }
  export interface DescribeTagsResponse {
    /**
     * Information about the tags.
     */
    resourceTags?: ResourceTagList;
  }
  export interface DescribeVirtualInterfacesRequest {
    connectionId?: ConnectionId;
    virtualInterfaceId?: VirtualInterfaceId;
  }
  export interface DisassociateConnectionFromLagRequest {
    /**
     * The ID of the connection to disassociate from the LAG. Example: dxcon-abc123 Default: None
     */
    connectionId: ConnectionId;
    /**
     * The ID of the LAG. Example: dxlag-abc123 Default: None
     */
    lagId: LagId;
  }
  export type ErrorMessage = string;
  export interface Interconnect {
    interconnectId?: InterconnectId;
    interconnectName?: InterconnectName;
    interconnectState?: InterconnectState;
    region?: Region;
    location?: LocationCode;
    bandwidth?: Bandwidth;
    /**
     * The time of the most recent call to DescribeInterconnectLoa for this Interconnect.
     */
    loaIssueTime?: LoaIssueTime;
    lagId?: LagId;
    /**
     * The Direct Connection endpoint which the physical connection terminates on.
     */
    awsDevice?: AwsDevice;
  }
  export type InterconnectId = string;
  export type InterconnectList = Interconnect[];
  export type InterconnectName = string;
  export type InterconnectState = "requested"|"pending"|"available"|"down"|"deleting"|"deleted"|string;
  export interface Interconnects {
    /**
     * A list of interconnects.
     */
    interconnects?: InterconnectList;
  }
  export interface Lag {
    /**
     * The individual bandwidth of the physical connections bundled by the LAG. Available values: 1Gbps, 10Gbps
     */
    connectionsBandwidth?: Bandwidth;
    /**
     * The number of physical connections bundled by the LAG, up to a maximum of 10.
     */
    numberOfConnections?: Count;
    lagId?: LagId;
    /**
     * The owner of the LAG.
     */
    ownerAccount?: OwnerAccount;
    /**
     * The name of the LAG.
     */
    lagName?: LagName;
    lagState?: LagState;
    location?: LocationCode;
    region?: Region;
    /**
     * The minimum number of physical connections that must be operational for the LAG itself to be operational. If the number of operational connections drops below this setting, the LAG state changes to down. This value can help to ensure that a LAG is not overutilized if a significant number of its bundled connections go down.
     */
    minimumLinks?: Count;
    /**
     * The AWS Direct Connection endpoint that hosts the LAG.
     */
    awsDevice?: AwsDevice;
    /**
     * A list of connections bundled by this LAG.
     */
    connections?: ConnectionList;
    /**
     * Indicates whether the LAG can host other connections.  This is intended for use by AWS Direct Connect partners only. 
     */
    allowsHostedConnections?: BooleanFlag;
  }
  export type LagId = string;
  export type LagList = Lag[];
  export type LagName = string;
  export type LagState = "requested"|"pending"|"available"|"down"|"deleting"|"deleted"|string;
  export interface Lags {
    /**
     * A list of LAGs.
     */
    lags?: LagList;
  }
  export interface Loa {
    loaContent?: LoaContent;
    loaContentType?: LoaContentType;
  }
  export type LoaContent = Buffer|Uint8Array|Blob|string;
  export type LoaContentType = "application/pdf"|string;
  export type LoaIssueTime = Date;
  export interface Location {
    /**
     * The code used to indicate the AWS Direct Connect location.
     */
    locationCode?: LocationCode;
    /**
     * The name of the AWS Direct Connect location. The name includes the colocation partner name and the physical site of the lit building.
     */
    locationName?: LocationName;
  }
  export type LocationCode = string;
  export type LocationList = Location[];
  export type LocationName = string;
  export interface Locations {
    /**
     * A list of colocation hubs where network providers have equipment. Most regions have multiple locations available.
     */
    locations?: LocationList;
  }
  export interface NewBGPPeer {
    asn?: ASN;
    authKey?: BGPAuthKey;
    addressFamily?: AddressFamily;
    amazonAddress?: AmazonAddress;
    customerAddress?: CustomerAddress;
  }
  export interface NewPrivateVirtualInterface {
    virtualInterfaceName: VirtualInterfaceName;
    vlan: VLAN;
    asn: ASN;
    authKey?: BGPAuthKey;
    amazonAddress?: AmazonAddress;
    customerAddress?: CustomerAddress;
    addressFamily?: AddressFamily;
    virtualGatewayId: VirtualGatewayId;
  }
  export interface NewPrivateVirtualInterfaceAllocation {
    virtualInterfaceName: VirtualInterfaceName;
    vlan: VLAN;
    asn: ASN;
    authKey?: BGPAuthKey;
    amazonAddress?: AmazonAddress;
    addressFamily?: AddressFamily;
    customerAddress?: CustomerAddress;
  }
  export interface NewPublicVirtualInterface {
    virtualInterfaceName: VirtualInterfaceName;
    vlan: VLAN;
    asn: ASN;
    authKey?: BGPAuthKey;
    amazonAddress?: AmazonAddress;
    customerAddress?: CustomerAddress;
    addressFamily?: AddressFamily;
    routeFilterPrefixes?: RouteFilterPrefixList;
  }
  export interface NewPublicVirtualInterfaceAllocation {
    virtualInterfaceName: VirtualInterfaceName;
    vlan: VLAN;
    asn: ASN;
    authKey?: BGPAuthKey;
    amazonAddress?: AmazonAddress;
    customerAddress?: CustomerAddress;
    addressFamily?: AddressFamily;
    routeFilterPrefixes?: RouteFilterPrefixList;
  }
  export type OwnerAccount = string;
  export type PartnerName = string;
  export type ProviderName = string;
  export type Region = string;
  export type ResourceArn = string;
  export type ResourceArnList = ResourceArn[];
  export interface ResourceTag {
    /**
     * The Amazon Resource Name (ARN) of the Direct Connect resource.
     */
    resourceArn?: ResourceArn;
    /**
     * The tags.
     */
    tags?: TagList;
  }
  export type ResourceTagList = ResourceTag[];
  export interface RouteFilterPrefix {
    /**
     * CIDR notation for the advertised route. Multiple routes are separated by commas. IPv6 CIDRs must be at least a /64 or shorter Example: 10.10.10.0/24,10.10.11.0/24,2001:db8::/64
     */
    cidr?: CIDR;
  }
  export type RouteFilterPrefixList = RouteFilterPrefix[];
  export type RouterConfig = string;
  export interface Tag {
    /**
     * The key of the tag.
     */
    key: TagKey;
    /**
     * The value of the tag.
     */
    value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the Direct Connect resource. Example: arn:aws:directconnect:us-east-1:123456789012:dxcon/dxcon-fg5678gh
     */
    resourceArn: ResourceArn;
    /**
     * The list of tags to add.
     */
    tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the Direct Connect resource.
     */
    resourceArn: ResourceArn;
    /**
     * The list of tag keys to remove.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateLagRequest {
    /**
     * The ID of the LAG to update. Example: dxlag-abc123 Default: None
     */
    lagId: LagId;
    /**
     * The name for the LAG. Example: "3x10G LAG to AWS" Default: None
     */
    lagName?: LagName;
    /**
     * The minimum number of physical connections that must be operational for the LAG itself to be operational. Default: None
     */
    minimumLinks?: Count;
  }
  export type VLAN = number;
  export interface VirtualGateway {
    virtualGatewayId?: VirtualGatewayId;
    virtualGatewayState?: VirtualGatewayState;
  }
  export type VirtualGatewayId = string;
  export type VirtualGatewayList = VirtualGateway[];
  export type VirtualGatewayState = string;
  export interface VirtualGateways {
    /**
     * A list of virtual private gateways.
     */
    virtualGateways?: VirtualGatewayList;
  }
  export interface VirtualInterface {
    /**
     * The AWS account that will own the new virtual interface.
     */
    ownerAccount?: OwnerAccount;
    virtualInterfaceId?: VirtualInterfaceId;
    location?: LocationCode;
    connectionId?: ConnectionId;
    virtualInterfaceType?: VirtualInterfaceType;
    virtualInterfaceName?: VirtualInterfaceName;
    vlan?: VLAN;
    asn?: ASN;
    authKey?: BGPAuthKey;
    amazonAddress?: AmazonAddress;
    customerAddress?: CustomerAddress;
    addressFamily?: AddressFamily;
    virtualInterfaceState?: VirtualInterfaceState;
    /**
     * Information for generating the customer router configuration.
     */
    customerRouterConfig?: RouterConfig;
    virtualGatewayId?: VirtualGatewayId;
    routeFilterPrefixes?: RouteFilterPrefixList;
    bgpPeers?: BGPPeerList;
  }
  export type VirtualInterfaceId = string;
  export type VirtualInterfaceList = VirtualInterface[];
  export type VirtualInterfaceName = string;
  export type VirtualInterfaceState = "confirming"|"verifying"|"pending"|"available"|"down"|"deleting"|"deleted"|"rejected"|string;
  export type VirtualInterfaceType = string;
  export interface VirtualInterfaces {
    /**
     * A list of virtual interfaces.
     */
    virtualInterfaces?: VirtualInterfaceList;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2012-10-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DirectConnect client.
   */
  export import Types = DirectConnect;
}
export = DirectConnect;
