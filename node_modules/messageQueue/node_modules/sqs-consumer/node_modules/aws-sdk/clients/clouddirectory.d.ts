import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CloudDirectory extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudDirectory.Types.ClientConfiguration)
  config: Config & CloudDirectory.Types.ClientConfiguration;
  /**
   * Adds a new Facet to an object.
   */
  addFacetToObject(params: CloudDirectory.Types.AddFacetToObjectRequest, callback?: (err: AWSError, data: CloudDirectory.Types.AddFacetToObjectResponse) => void): Request<CloudDirectory.Types.AddFacetToObjectResponse, AWSError>;
  /**
   * Adds a new Facet to an object.
   */
  addFacetToObject(callback?: (err: AWSError, data: CloudDirectory.Types.AddFacetToObjectResponse) => void): Request<CloudDirectory.Types.AddFacetToObjectResponse, AWSError>;
  /**
   * Copies the input published schema into the Directory with the same name and version as that of the published schema .
   */
  applySchema(params: CloudDirectory.Types.ApplySchemaRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ApplySchemaResponse) => void): Request<CloudDirectory.Types.ApplySchemaResponse, AWSError>;
  /**
   * Copies the input published schema into the Directory with the same name and version as that of the published schema .
   */
  applySchema(callback?: (err: AWSError, data: CloudDirectory.Types.ApplySchemaResponse) => void): Request<CloudDirectory.Types.ApplySchemaResponse, AWSError>;
  /**
   * Attaches an existing object to another object. An object can be accessed in two ways:   Using the path   Using ObjectIdentifier   
   */
  attachObject(params: CloudDirectory.Types.AttachObjectRequest, callback?: (err: AWSError, data: CloudDirectory.Types.AttachObjectResponse) => void): Request<CloudDirectory.Types.AttachObjectResponse, AWSError>;
  /**
   * Attaches an existing object to another object. An object can be accessed in two ways:   Using the path   Using ObjectIdentifier   
   */
  attachObject(callback?: (err: AWSError, data: CloudDirectory.Types.AttachObjectResponse) => void): Request<CloudDirectory.Types.AttachObjectResponse, AWSError>;
  /**
   * Attaches a policy object to a regular object. An object can have a limited number of attached policies.
   */
  attachPolicy(params: CloudDirectory.Types.AttachPolicyRequest, callback?: (err: AWSError, data: CloudDirectory.Types.AttachPolicyResponse) => void): Request<CloudDirectory.Types.AttachPolicyResponse, AWSError>;
  /**
   * Attaches a policy object to a regular object. An object can have a limited number of attached policies.
   */
  attachPolicy(callback?: (err: AWSError, data: CloudDirectory.Types.AttachPolicyResponse) => void): Request<CloudDirectory.Types.AttachPolicyResponse, AWSError>;
  /**
   * Attaches the specified object to the specified index.
   */
  attachToIndex(params: CloudDirectory.Types.AttachToIndexRequest, callback?: (err: AWSError, data: CloudDirectory.Types.AttachToIndexResponse) => void): Request<CloudDirectory.Types.AttachToIndexResponse, AWSError>;
  /**
   * Attaches the specified object to the specified index.
   */
  attachToIndex(callback?: (err: AWSError, data: CloudDirectory.Types.AttachToIndexResponse) => void): Request<CloudDirectory.Types.AttachToIndexResponse, AWSError>;
  /**
   * Attaches a typed link to a specified source and target object. For more information, see Typed link.
   */
  attachTypedLink(params: CloudDirectory.Types.AttachTypedLinkRequest, callback?: (err: AWSError, data: CloudDirectory.Types.AttachTypedLinkResponse) => void): Request<CloudDirectory.Types.AttachTypedLinkResponse, AWSError>;
  /**
   * Attaches a typed link to a specified source and target object. For more information, see Typed link.
   */
  attachTypedLink(callback?: (err: AWSError, data: CloudDirectory.Types.AttachTypedLinkResponse) => void): Request<CloudDirectory.Types.AttachTypedLinkResponse, AWSError>;
  /**
   * Performs all the read operations in a batch. 
   */
  batchRead(params: CloudDirectory.Types.BatchReadRequest, callback?: (err: AWSError, data: CloudDirectory.Types.BatchReadResponse) => void): Request<CloudDirectory.Types.BatchReadResponse, AWSError>;
  /**
   * Performs all the read operations in a batch. 
   */
  batchRead(callback?: (err: AWSError, data: CloudDirectory.Types.BatchReadResponse) => void): Request<CloudDirectory.Types.BatchReadResponse, AWSError>;
  /**
   * Performs all the write operations in a batch. Either all the operations succeed or none. Batch writes supports only object-related operations.
   */
  batchWrite(params: CloudDirectory.Types.BatchWriteRequest, callback?: (err: AWSError, data: CloudDirectory.Types.BatchWriteResponse) => void): Request<CloudDirectory.Types.BatchWriteResponse, AWSError>;
  /**
   * Performs all the write operations in a batch. Either all the operations succeed or none. Batch writes supports only object-related operations.
   */
  batchWrite(callback?: (err: AWSError, data: CloudDirectory.Types.BatchWriteResponse) => void): Request<CloudDirectory.Types.BatchWriteResponse, AWSError>;
  /**
   * Creates a Directory by copying the published schema into the directory. A directory cannot be created without a schema.
   */
  createDirectory(params: CloudDirectory.Types.CreateDirectoryRequest, callback?: (err: AWSError, data: CloudDirectory.Types.CreateDirectoryResponse) => void): Request<CloudDirectory.Types.CreateDirectoryResponse, AWSError>;
  /**
   * Creates a Directory by copying the published schema into the directory. A directory cannot be created without a schema.
   */
  createDirectory(callback?: (err: AWSError, data: CloudDirectory.Types.CreateDirectoryResponse) => void): Request<CloudDirectory.Types.CreateDirectoryResponse, AWSError>;
  /**
   * Creates a new Facet in a schema. Facet creation is allowed only in development or applied schemas.
   */
  createFacet(params: CloudDirectory.Types.CreateFacetRequest, callback?: (err: AWSError, data: CloudDirectory.Types.CreateFacetResponse) => void): Request<CloudDirectory.Types.CreateFacetResponse, AWSError>;
  /**
   * Creates a new Facet in a schema. Facet creation is allowed only in development or applied schemas.
   */
  createFacet(callback?: (err: AWSError, data: CloudDirectory.Types.CreateFacetResponse) => void): Request<CloudDirectory.Types.CreateFacetResponse, AWSError>;
  /**
   * Creates an index object. See Indexing for more information.
   */
  createIndex(params: CloudDirectory.Types.CreateIndexRequest, callback?: (err: AWSError, data: CloudDirectory.Types.CreateIndexResponse) => void): Request<CloudDirectory.Types.CreateIndexResponse, AWSError>;
  /**
   * Creates an index object. See Indexing for more information.
   */
  createIndex(callback?: (err: AWSError, data: CloudDirectory.Types.CreateIndexResponse) => void): Request<CloudDirectory.Types.CreateIndexResponse, AWSError>;
  /**
   * Creates an object in a Directory. Additionally attaches the object to a parent, if a parent reference and LinkName is specified. An object is simply a collection of Facet attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
   */
  createObject(params: CloudDirectory.Types.CreateObjectRequest, callback?: (err: AWSError, data: CloudDirectory.Types.CreateObjectResponse) => void): Request<CloudDirectory.Types.CreateObjectResponse, AWSError>;
  /**
   * Creates an object in a Directory. Additionally attaches the object to a parent, if a parent reference and LinkName is specified. An object is simply a collection of Facet attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
   */
  createObject(callback?: (err: AWSError, data: CloudDirectory.Types.CreateObjectResponse) => void): Request<CloudDirectory.Types.CreateObjectResponse, AWSError>;
  /**
   * Creates a new schema in a development state. A schema can exist in three phases:    Development: This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.    Published: Published schemas are immutable and have a version associated with them.    Applied: Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories.   
   */
  createSchema(params: CloudDirectory.Types.CreateSchemaRequest, callback?: (err: AWSError, data: CloudDirectory.Types.CreateSchemaResponse) => void): Request<CloudDirectory.Types.CreateSchemaResponse, AWSError>;
  /**
   * Creates a new schema in a development state. A schema can exist in three phases:    Development: This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.    Published: Published schemas are immutable and have a version associated with them.    Applied: Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories.   
   */
  createSchema(callback?: (err: AWSError, data: CloudDirectory.Types.CreateSchemaResponse) => void): Request<CloudDirectory.Types.CreateSchemaResponse, AWSError>;
  /**
   * Creates a TypedLinkFacet. For more information, see Typed link.
   */
  createTypedLinkFacet(params: CloudDirectory.Types.CreateTypedLinkFacetRequest, callback?: (err: AWSError, data: CloudDirectory.Types.CreateTypedLinkFacetResponse) => void): Request<CloudDirectory.Types.CreateTypedLinkFacetResponse, AWSError>;
  /**
   * Creates a TypedLinkFacet. For more information, see Typed link.
   */
  createTypedLinkFacet(callback?: (err: AWSError, data: CloudDirectory.Types.CreateTypedLinkFacetResponse) => void): Request<CloudDirectory.Types.CreateTypedLinkFacetResponse, AWSError>;
  /**
   * Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
   */
  deleteDirectory(params: CloudDirectory.Types.DeleteDirectoryRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DeleteDirectoryResponse) => void): Request<CloudDirectory.Types.DeleteDirectoryResponse, AWSError>;
  /**
   * Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
   */
  deleteDirectory(callback?: (err: AWSError, data: CloudDirectory.Types.DeleteDirectoryResponse) => void): Request<CloudDirectory.Types.DeleteDirectoryResponse, AWSError>;
  /**
   * Deletes a given Facet. All attributes and Rules that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
   */
  deleteFacet(params: CloudDirectory.Types.DeleteFacetRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DeleteFacetResponse) => void): Request<CloudDirectory.Types.DeleteFacetResponse, AWSError>;
  /**
   * Deletes a given Facet. All attributes and Rules that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
   */
  deleteFacet(callback?: (err: AWSError, data: CloudDirectory.Types.DeleteFacetResponse) => void): Request<CloudDirectory.Types.DeleteFacetResponse, AWSError>;
  /**
   * Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted.
   */
  deleteObject(params: CloudDirectory.Types.DeleteObjectRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DeleteObjectResponse) => void): Request<CloudDirectory.Types.DeleteObjectResponse, AWSError>;
  /**
   * Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted.
   */
  deleteObject(callback?: (err: AWSError, data: CloudDirectory.Types.DeleteObjectResponse) => void): Request<CloudDirectory.Types.DeleteObjectResponse, AWSError>;
  /**
   * Deletes a given schema. Schemas in a development and published state can only be deleted. 
   */
  deleteSchema(params: CloudDirectory.Types.DeleteSchemaRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DeleteSchemaResponse) => void): Request<CloudDirectory.Types.DeleteSchemaResponse, AWSError>;
  /**
   * Deletes a given schema. Schemas in a development and published state can only be deleted. 
   */
  deleteSchema(callback?: (err: AWSError, data: CloudDirectory.Types.DeleteSchemaResponse) => void): Request<CloudDirectory.Types.DeleteSchemaResponse, AWSError>;
  /**
   * Deletes a TypedLinkFacet. For more information, see Typed link.
   */
  deleteTypedLinkFacet(params: CloudDirectory.Types.DeleteTypedLinkFacetRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DeleteTypedLinkFacetResponse) => void): Request<CloudDirectory.Types.DeleteTypedLinkFacetResponse, AWSError>;
  /**
   * Deletes a TypedLinkFacet. For more information, see Typed link.
   */
  deleteTypedLinkFacet(callback?: (err: AWSError, data: CloudDirectory.Types.DeleteTypedLinkFacetResponse) => void): Request<CloudDirectory.Types.DeleteTypedLinkFacetResponse, AWSError>;
  /**
   * Detaches the specified object from the specified index.
   */
  detachFromIndex(params: CloudDirectory.Types.DetachFromIndexRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DetachFromIndexResponse) => void): Request<CloudDirectory.Types.DetachFromIndexResponse, AWSError>;
  /**
   * Detaches the specified object from the specified index.
   */
  detachFromIndex(callback?: (err: AWSError, data: CloudDirectory.Types.DetachFromIndexResponse) => void): Request<CloudDirectory.Types.DetachFromIndexResponse, AWSError>;
  /**
   * Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
   */
  detachObject(params: CloudDirectory.Types.DetachObjectRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DetachObjectResponse) => void): Request<CloudDirectory.Types.DetachObjectResponse, AWSError>;
  /**
   * Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
   */
  detachObject(callback?: (err: AWSError, data: CloudDirectory.Types.DetachObjectResponse) => void): Request<CloudDirectory.Types.DetachObjectResponse, AWSError>;
  /**
   * Detaches a policy from an object.
   */
  detachPolicy(params: CloudDirectory.Types.DetachPolicyRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DetachPolicyResponse) => void): Request<CloudDirectory.Types.DetachPolicyResponse, AWSError>;
  /**
   * Detaches a policy from an object.
   */
  detachPolicy(callback?: (err: AWSError, data: CloudDirectory.Types.DetachPolicyResponse) => void): Request<CloudDirectory.Types.DetachPolicyResponse, AWSError>;
  /**
   * Detaches a typed link from a specified source and target object. For more information, see Typed link.
   */
  detachTypedLink(params: CloudDirectory.Types.DetachTypedLinkRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Detaches a typed link from a specified source and target object. For more information, see Typed link.
   */
  detachTypedLink(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
   */
  disableDirectory(params: CloudDirectory.Types.DisableDirectoryRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DisableDirectoryResponse) => void): Request<CloudDirectory.Types.DisableDirectoryResponse, AWSError>;
  /**
   * Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
   */
  disableDirectory(callback?: (err: AWSError, data: CloudDirectory.Types.DisableDirectoryResponse) => void): Request<CloudDirectory.Types.DisableDirectoryResponse, AWSError>;
  /**
   * Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
   */
  enableDirectory(params: CloudDirectory.Types.EnableDirectoryRequest, callback?: (err: AWSError, data: CloudDirectory.Types.EnableDirectoryResponse) => void): Request<CloudDirectory.Types.EnableDirectoryResponse, AWSError>;
  /**
   * Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
   */
  enableDirectory(callback?: (err: AWSError, data: CloudDirectory.Types.EnableDirectoryResponse) => void): Request<CloudDirectory.Types.EnableDirectoryResponse, AWSError>;
  /**
   * Retrieves metadata about a directory.
   */
  getDirectory(params: CloudDirectory.Types.GetDirectoryRequest, callback?: (err: AWSError, data: CloudDirectory.Types.GetDirectoryResponse) => void): Request<CloudDirectory.Types.GetDirectoryResponse, AWSError>;
  /**
   * Retrieves metadata about a directory.
   */
  getDirectory(callback?: (err: AWSError, data: CloudDirectory.Types.GetDirectoryResponse) => void): Request<CloudDirectory.Types.GetDirectoryResponse, AWSError>;
  /**
   * Gets details of the Facet, such as facet name, attributes, Rules, or ObjectType. You can call this on all kinds of schema facets -- published, development, or applied.
   */
  getFacet(params: CloudDirectory.Types.GetFacetRequest, callback?: (err: AWSError, data: CloudDirectory.Types.GetFacetResponse) => void): Request<CloudDirectory.Types.GetFacetResponse, AWSError>;
  /**
   * Gets details of the Facet, such as facet name, attributes, Rules, or ObjectType. You can call this on all kinds of schema facets -- published, development, or applied.
   */
  getFacet(callback?: (err: AWSError, data: CloudDirectory.Types.GetFacetResponse) => void): Request<CloudDirectory.Types.GetFacetResponse, AWSError>;
  /**
   * Retrieves metadata about an object.
   */
  getObjectInformation(params: CloudDirectory.Types.GetObjectInformationRequest, callback?: (err: AWSError, data: CloudDirectory.Types.GetObjectInformationResponse) => void): Request<CloudDirectory.Types.GetObjectInformationResponse, AWSError>;
  /**
   * Retrieves metadata about an object.
   */
  getObjectInformation(callback?: (err: AWSError, data: CloudDirectory.Types.GetObjectInformationResponse) => void): Request<CloudDirectory.Types.GetObjectInformationResponse, AWSError>;
  /**
   * Retrieves a JSON representation of the schema. See JSON Schema Format for more information.
   */
  getSchemaAsJson(params: CloudDirectory.Types.GetSchemaAsJsonRequest, callback?: (err: AWSError, data: CloudDirectory.Types.GetSchemaAsJsonResponse) => void): Request<CloudDirectory.Types.GetSchemaAsJsonResponse, AWSError>;
  /**
   * Retrieves a JSON representation of the schema. See JSON Schema Format for more information.
   */
  getSchemaAsJson(callback?: (err: AWSError, data: CloudDirectory.Types.GetSchemaAsJsonResponse) => void): Request<CloudDirectory.Types.GetSchemaAsJsonResponse, AWSError>;
  /**
   * Returns the identity attribute order for a specific TypedLinkFacet. For more information, see Typed link.
   */
  getTypedLinkFacetInformation(params: CloudDirectory.Types.GetTypedLinkFacetInformationRequest, callback?: (err: AWSError, data: CloudDirectory.Types.GetTypedLinkFacetInformationResponse) => void): Request<CloudDirectory.Types.GetTypedLinkFacetInformationResponse, AWSError>;
  /**
   * Returns the identity attribute order for a specific TypedLinkFacet. For more information, see Typed link.
   */
  getTypedLinkFacetInformation(callback?: (err: AWSError, data: CloudDirectory.Types.GetTypedLinkFacetInformationResponse) => void): Request<CloudDirectory.Types.GetTypedLinkFacetInformationResponse, AWSError>;
  /**
   * Lists schemas applied to a directory.
   */
  listAppliedSchemaArns(params: CloudDirectory.Types.ListAppliedSchemaArnsRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListAppliedSchemaArnsResponse) => void): Request<CloudDirectory.Types.ListAppliedSchemaArnsResponse, AWSError>;
  /**
   * Lists schemas applied to a directory.
   */
  listAppliedSchemaArns(callback?: (err: AWSError, data: CloudDirectory.Types.ListAppliedSchemaArnsResponse) => void): Request<CloudDirectory.Types.ListAppliedSchemaArnsResponse, AWSError>;
  /**
   * Lists indices attached to an object.
   */
  listAttachedIndices(params: CloudDirectory.Types.ListAttachedIndicesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListAttachedIndicesResponse) => void): Request<CloudDirectory.Types.ListAttachedIndicesResponse, AWSError>;
  /**
   * Lists indices attached to an object.
   */
  listAttachedIndices(callback?: (err: AWSError, data: CloudDirectory.Types.ListAttachedIndicesResponse) => void): Request<CloudDirectory.Types.ListAttachedIndicesResponse, AWSError>;
  /**
   * Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
   */
  listDevelopmentSchemaArns(params: CloudDirectory.Types.ListDevelopmentSchemaArnsRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListDevelopmentSchemaArnsResponse) => void): Request<CloudDirectory.Types.ListDevelopmentSchemaArnsResponse, AWSError>;
  /**
   * Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
   */
  listDevelopmentSchemaArns(callback?: (err: AWSError, data: CloudDirectory.Types.ListDevelopmentSchemaArnsResponse) => void): Request<CloudDirectory.Types.ListDevelopmentSchemaArnsResponse, AWSError>;
  /**
   * Lists directories created within an account.
   */
  listDirectories(params: CloudDirectory.Types.ListDirectoriesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListDirectoriesResponse) => void): Request<CloudDirectory.Types.ListDirectoriesResponse, AWSError>;
  /**
   * Lists directories created within an account.
   */
  listDirectories(callback?: (err: AWSError, data: CloudDirectory.Types.ListDirectoriesResponse) => void): Request<CloudDirectory.Types.ListDirectoriesResponse, AWSError>;
  /**
   * Retrieves attributes attached to the facet.
   */
  listFacetAttributes(params: CloudDirectory.Types.ListFacetAttributesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListFacetAttributesResponse) => void): Request<CloudDirectory.Types.ListFacetAttributesResponse, AWSError>;
  /**
   * Retrieves attributes attached to the facet.
   */
  listFacetAttributes(callback?: (err: AWSError, data: CloudDirectory.Types.ListFacetAttributesResponse) => void): Request<CloudDirectory.Types.ListFacetAttributesResponse, AWSError>;
  /**
   * Retrieves the names of facets that exist in a schema.
   */
  listFacetNames(params: CloudDirectory.Types.ListFacetNamesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListFacetNamesResponse) => void): Request<CloudDirectory.Types.ListFacetNamesResponse, AWSError>;
  /**
   * Retrieves the names of facets that exist in a schema.
   */
  listFacetNames(callback?: (err: AWSError, data: CloudDirectory.Types.ListFacetNamesResponse) => void): Request<CloudDirectory.Types.ListFacetNamesResponse, AWSError>;
  /**
   * Returns a paginated list of all the incoming TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see Typed link.
   */
  listIncomingTypedLinks(params: CloudDirectory.Types.ListIncomingTypedLinksRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListIncomingTypedLinksResponse) => void): Request<CloudDirectory.Types.ListIncomingTypedLinksResponse, AWSError>;
  /**
   * Returns a paginated list of all the incoming TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see Typed link.
   */
  listIncomingTypedLinks(callback?: (err: AWSError, data: CloudDirectory.Types.ListIncomingTypedLinksResponse) => void): Request<CloudDirectory.Types.ListIncomingTypedLinksResponse, AWSError>;
  /**
   * Lists objects attached to the specified index.
   */
  listIndex(params: CloudDirectory.Types.ListIndexRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListIndexResponse) => void): Request<CloudDirectory.Types.ListIndexResponse, AWSError>;
  /**
   * Lists objects attached to the specified index.
   */
  listIndex(callback?: (err: AWSError, data: CloudDirectory.Types.ListIndexResponse) => void): Request<CloudDirectory.Types.ListIndexResponse, AWSError>;
  /**
   * Lists all attributes that are associated with an object. 
   */
  listObjectAttributes(params: CloudDirectory.Types.ListObjectAttributesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectAttributesResponse) => void): Request<CloudDirectory.Types.ListObjectAttributesResponse, AWSError>;
  /**
   * Lists all attributes that are associated with an object. 
   */
  listObjectAttributes(callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectAttributesResponse) => void): Request<CloudDirectory.Types.ListObjectAttributesResponse, AWSError>;
  /**
   * Returns a paginated list of child objects that are associated with a given object.
   */
  listObjectChildren(params: CloudDirectory.Types.ListObjectChildrenRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectChildrenResponse) => void): Request<CloudDirectory.Types.ListObjectChildrenResponse, AWSError>;
  /**
   * Returns a paginated list of child objects that are associated with a given object.
   */
  listObjectChildren(callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectChildrenResponse) => void): Request<CloudDirectory.Types.ListObjectChildrenResponse, AWSError>;
  /**
   * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see Directory Structure. Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined MaxResults, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.
   */
  listObjectParentPaths(params: CloudDirectory.Types.ListObjectParentPathsRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectParentPathsResponse) => void): Request<CloudDirectory.Types.ListObjectParentPathsResponse, AWSError>;
  /**
   * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see Directory Structure. Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined MaxResults, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.
   */
  listObjectParentPaths(callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectParentPathsResponse) => void): Request<CloudDirectory.Types.ListObjectParentPathsResponse, AWSError>;
  /**
   * Lists parent objects that are associated with a given object in pagination fashion.
   */
  listObjectParents(params: CloudDirectory.Types.ListObjectParentsRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectParentsResponse) => void): Request<CloudDirectory.Types.ListObjectParentsResponse, AWSError>;
  /**
   * Lists parent objects that are associated with a given object in pagination fashion.
   */
  listObjectParents(callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectParentsResponse) => void): Request<CloudDirectory.Types.ListObjectParentsResponse, AWSError>;
  /**
   * Returns policies attached to an object in pagination fashion.
   */
  listObjectPolicies(params: CloudDirectory.Types.ListObjectPoliciesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectPoliciesResponse) => void): Request<CloudDirectory.Types.ListObjectPoliciesResponse, AWSError>;
  /**
   * Returns policies attached to an object in pagination fashion.
   */
  listObjectPolicies(callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectPoliciesResponse) => void): Request<CloudDirectory.Types.ListObjectPoliciesResponse, AWSError>;
  /**
   * Returns a paginated list of all the outgoing TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see Typed link.
   */
  listOutgoingTypedLinks(params: CloudDirectory.Types.ListOutgoingTypedLinksRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListOutgoingTypedLinksResponse) => void): Request<CloudDirectory.Types.ListOutgoingTypedLinksResponse, AWSError>;
  /**
   * Returns a paginated list of all the outgoing TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see Typed link.
   */
  listOutgoingTypedLinks(callback?: (err: AWSError, data: CloudDirectory.Types.ListOutgoingTypedLinksResponse) => void): Request<CloudDirectory.Types.ListOutgoingTypedLinksResponse, AWSError>;
  /**
   * Returns all of the ObjectIdentifiers to which a given policy is attached.
   */
  listPolicyAttachments(params: CloudDirectory.Types.ListPolicyAttachmentsRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListPolicyAttachmentsResponse) => void): Request<CloudDirectory.Types.ListPolicyAttachmentsResponse, AWSError>;
  /**
   * Returns all of the ObjectIdentifiers to which a given policy is attached.
   */
  listPolicyAttachments(callback?: (err: AWSError, data: CloudDirectory.Types.ListPolicyAttachmentsResponse) => void): Request<CloudDirectory.Types.ListPolicyAttachmentsResponse, AWSError>;
  /**
   * Retrieves each published schema Amazon Resource Name (ARN).
   */
  listPublishedSchemaArns(params: CloudDirectory.Types.ListPublishedSchemaArnsRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListPublishedSchemaArnsResponse) => void): Request<CloudDirectory.Types.ListPublishedSchemaArnsResponse, AWSError>;
  /**
   * Retrieves each published schema Amazon Resource Name (ARN).
   */
  listPublishedSchemaArns(callback?: (err: AWSError, data: CloudDirectory.Types.ListPublishedSchemaArnsResponse) => void): Request<CloudDirectory.Types.ListPublishedSchemaArnsResponse, AWSError>;
  /**
   * Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
   */
  listTagsForResource(params: CloudDirectory.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListTagsForResourceResponse) => void): Request<CloudDirectory.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
   */
  listTagsForResource(callback?: (err: AWSError, data: CloudDirectory.Types.ListTagsForResourceResponse) => void): Request<CloudDirectory.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns a paginated list of all attribute definitions for a particular TypedLinkFacet. For more information, see Typed link.
   */
  listTypedLinkFacetAttributes(params: CloudDirectory.Types.ListTypedLinkFacetAttributesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListTypedLinkFacetAttributesResponse) => void): Request<CloudDirectory.Types.ListTypedLinkFacetAttributesResponse, AWSError>;
  /**
   * Returns a paginated list of all attribute definitions for a particular TypedLinkFacet. For more information, see Typed link.
   */
  listTypedLinkFacetAttributes(callback?: (err: AWSError, data: CloudDirectory.Types.ListTypedLinkFacetAttributesResponse) => void): Request<CloudDirectory.Types.ListTypedLinkFacetAttributesResponse, AWSError>;
  /**
   * Returns a paginated list of TypedLink facet names for a particular schema. For more information, see Typed link.
   */
  listTypedLinkFacetNames(params: CloudDirectory.Types.ListTypedLinkFacetNamesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListTypedLinkFacetNamesResponse) => void): Request<CloudDirectory.Types.ListTypedLinkFacetNamesResponse, AWSError>;
  /**
   * Returns a paginated list of TypedLink facet names for a particular schema. For more information, see Typed link.
   */
  listTypedLinkFacetNames(callback?: (err: AWSError, data: CloudDirectory.Types.ListTypedLinkFacetNamesResponse) => void): Request<CloudDirectory.Types.ListTypedLinkFacetNamesResponse, AWSError>;
  /**
   * Lists all policies from the root of the Directory to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the ObjectIdentifier for such objects. If policies are present, it returns ObjectIdentifier, policyId, and policyType. Paths that don't lead to the root from the target object are ignored. For more information, see Policies.
   */
  lookupPolicy(params: CloudDirectory.Types.LookupPolicyRequest, callback?: (err: AWSError, data: CloudDirectory.Types.LookupPolicyResponse) => void): Request<CloudDirectory.Types.LookupPolicyResponse, AWSError>;
  /**
   * Lists all policies from the root of the Directory to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the ObjectIdentifier for such objects. If policies are present, it returns ObjectIdentifier, policyId, and policyType. Paths that don't lead to the root from the target object are ignored. For more information, see Policies.
   */
  lookupPolicy(callback?: (err: AWSError, data: CloudDirectory.Types.LookupPolicyResponse) => void): Request<CloudDirectory.Types.LookupPolicyResponse, AWSError>;
  /**
   * Publishes a development schema with a version. If description and attributes are specified, PublishSchema overrides the development schema description and attributes. If not, the development schema description and attributes are used.
   */
  publishSchema(params: CloudDirectory.Types.PublishSchemaRequest, callback?: (err: AWSError, data: CloudDirectory.Types.PublishSchemaResponse) => void): Request<CloudDirectory.Types.PublishSchemaResponse, AWSError>;
  /**
   * Publishes a development schema with a version. If description and attributes are specified, PublishSchema overrides the development schema description and attributes. If not, the development schema description and attributes are used.
   */
  publishSchema(callback?: (err: AWSError, data: CloudDirectory.Types.PublishSchemaResponse) => void): Request<CloudDirectory.Types.PublishSchemaResponse, AWSError>;
  /**
   * Allows a schema to be updated using JSON upload. Only available for development schemas. See JSON Schema Format for more information.
   */
  putSchemaFromJson(params: CloudDirectory.Types.PutSchemaFromJsonRequest, callback?: (err: AWSError, data: CloudDirectory.Types.PutSchemaFromJsonResponse) => void): Request<CloudDirectory.Types.PutSchemaFromJsonResponse, AWSError>;
  /**
   * Allows a schema to be updated using JSON upload. Only available for development schemas. See JSON Schema Format for more information.
   */
  putSchemaFromJson(callback?: (err: AWSError, data: CloudDirectory.Types.PutSchemaFromJsonResponse) => void): Request<CloudDirectory.Types.PutSchemaFromJsonResponse, AWSError>;
  /**
   * Removes the specified facet from the specified object.
   */
  removeFacetFromObject(params: CloudDirectory.Types.RemoveFacetFromObjectRequest, callback?: (err: AWSError, data: CloudDirectory.Types.RemoveFacetFromObjectResponse) => void): Request<CloudDirectory.Types.RemoveFacetFromObjectResponse, AWSError>;
  /**
   * Removes the specified facet from the specified object.
   */
  removeFacetFromObject(callback?: (err: AWSError, data: CloudDirectory.Types.RemoveFacetFromObjectResponse) => void): Request<CloudDirectory.Types.RemoveFacetFromObjectResponse, AWSError>;
  /**
   * An API operation for adding tags to a resource.
   */
  tagResource(params: CloudDirectory.Types.TagResourceRequest, callback?: (err: AWSError, data: CloudDirectory.Types.TagResourceResponse) => void): Request<CloudDirectory.Types.TagResourceResponse, AWSError>;
  /**
   * An API operation for adding tags to a resource.
   */
  tagResource(callback?: (err: AWSError, data: CloudDirectory.Types.TagResourceResponse) => void): Request<CloudDirectory.Types.TagResourceResponse, AWSError>;
  /**
   * An API operation for removing tags from a resource.
   */
  untagResource(params: CloudDirectory.Types.UntagResourceRequest, callback?: (err: AWSError, data: CloudDirectory.Types.UntagResourceResponse) => void): Request<CloudDirectory.Types.UntagResourceResponse, AWSError>;
  /**
   * An API operation for removing tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: CloudDirectory.Types.UntagResourceResponse) => void): Request<CloudDirectory.Types.UntagResourceResponse, AWSError>;
  /**
   * Does the following:   Adds new Attributes, Rules, or ObjectTypes.   Updates existing Attributes, Rules, or ObjectTypes.   Deletes existing Attributes, Rules, or ObjectTypes.  
   */
  updateFacet(params: CloudDirectory.Types.UpdateFacetRequest, callback?: (err: AWSError, data: CloudDirectory.Types.UpdateFacetResponse) => void): Request<CloudDirectory.Types.UpdateFacetResponse, AWSError>;
  /**
   * Does the following:   Adds new Attributes, Rules, or ObjectTypes.   Updates existing Attributes, Rules, or ObjectTypes.   Deletes existing Attributes, Rules, or ObjectTypes.  
   */
  updateFacet(callback?: (err: AWSError, data: CloudDirectory.Types.UpdateFacetResponse) => void): Request<CloudDirectory.Types.UpdateFacetResponse, AWSError>;
  /**
   * Updates a given object's attributes.
   */
  updateObjectAttributes(params: CloudDirectory.Types.UpdateObjectAttributesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.UpdateObjectAttributesResponse) => void): Request<CloudDirectory.Types.UpdateObjectAttributesResponse, AWSError>;
  /**
   * Updates a given object's attributes.
   */
  updateObjectAttributes(callback?: (err: AWSError, data: CloudDirectory.Types.UpdateObjectAttributesResponse) => void): Request<CloudDirectory.Types.UpdateObjectAttributesResponse, AWSError>;
  /**
   * Updates the schema name with a new name. Only development schema names can be updated.
   */
  updateSchema(params: CloudDirectory.Types.UpdateSchemaRequest, callback?: (err: AWSError, data: CloudDirectory.Types.UpdateSchemaResponse) => void): Request<CloudDirectory.Types.UpdateSchemaResponse, AWSError>;
  /**
   * Updates the schema name with a new name. Only development schema names can be updated.
   */
  updateSchema(callback?: (err: AWSError, data: CloudDirectory.Types.UpdateSchemaResponse) => void): Request<CloudDirectory.Types.UpdateSchemaResponse, AWSError>;
  /**
   * Updates a TypedLinkFacet. For more information, see Typed link.
   */
  updateTypedLinkFacet(params: CloudDirectory.Types.UpdateTypedLinkFacetRequest, callback?: (err: AWSError, data: CloudDirectory.Types.UpdateTypedLinkFacetResponse) => void): Request<CloudDirectory.Types.UpdateTypedLinkFacetResponse, AWSError>;
  /**
   * Updates a TypedLinkFacet. For more information, see Typed link.
   */
  updateTypedLinkFacet(callback?: (err: AWSError, data: CloudDirectory.Types.UpdateTypedLinkFacetResponse) => void): Request<CloudDirectory.Types.UpdateTypedLinkFacetResponse, AWSError>;
}
declare namespace CloudDirectory {
  export interface AddFacetToObjectRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory where the object resides. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Identifiers for the facet that you are adding to the object.
     */
    SchemaFacet: SchemaFacet;
    /**
     * Attributes on the facet that you are adding to the object.
     */
    ObjectAttributeList?: AttributeKeyAndValueList;
    /**
     * A reference to the object you are adding the specified facet to.
     */
    ObjectReference: ObjectReference;
  }
  export interface AddFacetToObjectResponse {
  }
  export interface ApplySchemaRequest {
    /**
     * Published schema Amazon Resource Name (ARN) that needs to be copied. For more information, see arns.
     */
    PublishedSchemaArn: Arn;
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory into which the schema is copied. For more information, see arns.
     */
    DirectoryArn: Arn;
  }
  export interface ApplySchemaResponse {
    /**
     * The applied schema ARN that is associated with the copied schema in the Directory. You can use this ARN to describe the schema information applied on this directory. For more information, see arns.
     */
    AppliedSchemaArn?: Arn;
    /**
     * The ARN that is associated with the Directory. For more information, see arns.
     */
    DirectoryArn?: Arn;
  }
  export type Arn = string;
  export type Arns = Arn[];
  export interface AttachObjectRequest {
    /**
     * Amazon Resource Name (ARN) that is associated with the Directory where both objects reside. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * The parent object reference.
     */
    ParentReference: ObjectReference;
    /**
     * The child object reference to be attached to the object.
     */
    ChildReference: ObjectReference;
    /**
     * The link name with which the child object is attached to the parent.
     */
    LinkName: LinkName;
  }
  export interface AttachObjectResponse {
    /**
     * The attached ObjectIdentifier, which is the child ObjectIdentifier.
     */
    AttachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface AttachPolicyRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory where both objects reside. For more information, see arns.
     */
    DirectoryArn?: Arn;
    /**
     * The reference that is associated with the policy object.
     */
    PolicyReference: ObjectReference;
    /**
     * The reference that identifies the object to which the policy will be attached.
     */
    ObjectReference: ObjectReference;
  }
  export interface AttachPolicyResponse {
  }
  export interface AttachToIndexRequest {
    /**
     * The Amazon Resource Name (ARN) of the directory where the object and index exist.
     */
    DirectoryArn: Arn;
    /**
     * A reference to the index that you are attaching the object to.
     */
    IndexReference: ObjectReference;
    /**
     * A reference to the object that you are attaching to the index.
     */
    TargetReference: ObjectReference;
  }
  export interface AttachToIndexResponse {
    /**
     * The ObjectIdentifier of the object that was attached to the index.
     */
    AttachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface AttachTypedLinkRequest {
    /**
     * The Amazon Resource Name (ARN) of the directory where you want to attach the typed link.
     */
    DirectoryArn: Arn;
    /**
     * Identifies the source object that the typed link will attach to.
     */
    SourceObjectReference: ObjectReference;
    /**
     * Identifies the target object that the typed link will attach to.
     */
    TargetObjectReference: ObjectReference;
    /**
     * Identifies the typed link facet that is associated with the typed link.
     */
    TypedLinkFacet: TypedLinkSchemaAndFacetName;
    /**
     * A set of attributes that are associated with the typed link.
     */
    Attributes: AttributeNameAndValueList;
  }
  export interface AttachTypedLinkResponse {
    /**
     * Returns a typed link specifier as output.
     */
    TypedLinkSpecifier?: TypedLinkSpecifier;
  }
  export interface AttributeKey {
    /**
     * The Amazon Resource Name (ARN) of the schema that contains the facet and attribute.
     */
    SchemaArn: Arn;
    /**
     * The name of the facet that the attribute exists within.
     */
    FacetName: FacetName;
    /**
     * The name of the attribute.
     */
    Name: AttributeName;
  }
  export interface AttributeKeyAndValue {
    /**
     * The key of the attribute.
     */
    Key: AttributeKey;
    /**
     * The value of the attribute.
     */
    Value: TypedAttributeValue;
  }
  export type AttributeKeyAndValueList = AttributeKeyAndValue[];
  export type AttributeKeyList = AttributeKey[];
  export type AttributeName = string;
  export interface AttributeNameAndValue {
    /**
     * The attribute name of the typed link.
     */
    AttributeName: AttributeName;
    /**
     * The value for the typed link.
     */
    Value: TypedAttributeValue;
  }
  export type AttributeNameAndValueList = AttributeNameAndValue[];
  export type AttributeNameList = AttributeName[];
  export interface BatchAddFacetToObject {
    /**
     * Represents the facet being added to the object.
     */
    SchemaFacet: SchemaFacet;
    /**
     * The attributes to set on the object.
     */
    ObjectAttributeList: AttributeKeyAndValueList;
    /**
     * A reference to the object being mutated.
     */
    ObjectReference: ObjectReference;
  }
  export interface BatchAddFacetToObjectResponse {
  }
  export interface BatchAttachObject {
    /**
     * The parent object reference.
     */
    ParentReference: ObjectReference;
    /**
     * The child object reference that is to be attached to the object.
     */
    ChildReference: ObjectReference;
    /**
     * The name of the link.
     */
    LinkName: LinkName;
  }
  export interface BatchAttachObjectResponse {
    /**
     * The ObjectIdentifier of the object that has been attached.
     */
    attachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface BatchAttachPolicy {
    /**
     * The reference that is associated with the policy object.
     */
    PolicyReference: ObjectReference;
    /**
     * The reference that identifies the object to which the policy will be attached.
     */
    ObjectReference: ObjectReference;
  }
  export interface BatchAttachPolicyResponse {
  }
  export interface BatchAttachToIndex {
    /**
     * A reference to the index that you are attaching the object to.
     */
    IndexReference: ObjectReference;
    /**
     * A reference to the object that you are attaching to the index.
     */
    TargetReference: ObjectReference;
  }
  export interface BatchAttachToIndexResponse {
    /**
     * The ObjectIdentifier of the object that was attached to the index.
     */
    AttachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface BatchAttachTypedLink {
    /**
     * Identifies the source object that the typed link will attach to.
     */
    SourceObjectReference: ObjectReference;
    /**
     * Identifies the target object that the typed link will attach to.
     */
    TargetObjectReference: ObjectReference;
    /**
     * Identifies the typed link facet that is associated with the typed link.
     */
    TypedLinkFacet: TypedLinkSchemaAndFacetName;
    /**
     * A set of attributes that are associated with the typed link.
     */
    Attributes: AttributeNameAndValueList;
  }
  export interface BatchAttachTypedLinkResponse {
    /**
     * Returns a typed link specifier as output.
     */
    TypedLinkSpecifier?: TypedLinkSpecifier;
  }
  export interface BatchCreateIndex {
    /**
     * Specifies the attributes that should be indexed on. Currently only a single attribute is supported.
     */
    OrderedIndexedAttributeList: AttributeKeyList;
    /**
     * Indicates whether the attribute that is being indexed has unique values or not.
     */
    IsUnique: Bool;
    /**
     * A reference to the parent object that contains the index object.
     */
    ParentReference?: ObjectReference;
    /**
     * The name of the link between the parent object and the index object.
     */
    LinkName?: LinkName;
    /**
     * The batch reference name. See Batches for more information.
     */
    BatchReferenceName?: BatchReferenceName;
  }
  export interface BatchCreateIndexResponse {
    /**
     * The ObjectIdentifier of the index created by this operation.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export interface BatchCreateObject {
    /**
     * A list of FacetArns that will be associated with the object. For more information, see arns.
     */
    SchemaFacet: SchemaFacetList;
    /**
     * An attribute map, which contains an attribute ARN as the key and attribute value as the map value.
     */
    ObjectAttributeList: AttributeKeyAndValueList;
    /**
     * If specified, the parent reference to which this object will be attached.
     */
    ParentReference: ObjectReference;
    /**
     * The name of the link.
     */
    LinkName: LinkName;
    /**
     * The batch reference name. See Batches for more information.
     */
    BatchReferenceName: BatchReferenceName;
  }
  export interface BatchCreateObjectResponse {
    /**
     * The ID that is associated with the object.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export interface BatchDeleteObject {
    /**
     * The reference that identifies the object.
     */
    ObjectReference: ObjectReference;
  }
  export interface BatchDeleteObjectResponse {
  }
  export interface BatchDetachFromIndex {
    /**
     * A reference to the index object.
     */
    IndexReference: ObjectReference;
    /**
     * A reference to the object being detached from the index.
     */
    TargetReference: ObjectReference;
  }
  export interface BatchDetachFromIndexResponse {
    /**
     * The ObjectIdentifier of the object that was detached from the index.
     */
    DetachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface BatchDetachObject {
    /**
     * Parent reference from which the object with the specified link name is detached.
     */
    ParentReference: ObjectReference;
    /**
     * The name of the link.
     */
    LinkName: LinkName;
    /**
     * The batch reference name. See Batches for more information.
     */
    BatchReferenceName: BatchReferenceName;
  }
  export interface BatchDetachObjectResponse {
    /**
     * The ObjectIdentifier of the detached object.
     */
    detachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface BatchDetachPolicy {
    /**
     * Reference that identifies the policy object.
     */
    PolicyReference: ObjectReference;
    /**
     * Reference that identifies the object whose policy object will be detached.
     */
    ObjectReference: ObjectReference;
  }
  export interface BatchDetachPolicyResponse {
  }
  export interface BatchDetachTypedLink {
    /**
     * Used to accept a typed link specifier as input.
     */
    TypedLinkSpecifier: TypedLinkSpecifier;
  }
  export interface BatchDetachTypedLinkResponse {
  }
  export interface BatchGetObjectInformation {
    /**
     * A reference to the object.
     */
    ObjectReference: ObjectReference;
  }
  export interface BatchGetObjectInformationResponse {
    /**
     * The facets attached to the specified object.
     */
    SchemaFacets?: SchemaFacetList;
    /**
     * The ObjectIdentifier of the specified object.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export interface BatchListAttachedIndices {
    /**
     * A reference to the object that has indices attached.
     */
    TargetReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface BatchListAttachedIndicesResponse {
    /**
     * The indices attached to the specified object.
     */
    IndexAttachments?: IndexAttachmentList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface BatchListIncomingTypedLinks {
    /**
     * The reference that identifies the object whose attributes will be listed.
     */
    ObjectReference: ObjectReference;
    /**
     * Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.
     */
    FilterAttributeRanges?: TypedLinkAttributeRangeList;
    /**
     * Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls.
     */
    FilterTypedLink?: TypedLinkSchemaAndFacetName;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface BatchListIncomingTypedLinksResponse {
    /**
     * Returns one or more typed link specifiers as output.
     */
    LinkSpecifiers?: TypedLinkSpecifierList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface BatchListIndex {
    /**
     * Specifies the ranges of indexed values that you want to query.
     */
    RangesOnIndexedValues?: ObjectAttributeRangeList;
    /**
     * The reference to the index to list.
     */
    IndexReference: ObjectReference;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface BatchListIndexResponse {
    /**
     * The objects and indexed values attached to the index.
     */
    IndexAttachments?: IndexAttachmentList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface BatchListObjectAttributes {
    /**
     * Reference of the object whose attributes need to be listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
    /**
     * Used to filter the list of object attributes that are associated with a certain facet.
     */
    FacetFilter?: SchemaFacet;
  }
  export interface BatchListObjectAttributesResponse {
    /**
     * The attributes map that is associated with the object. AttributeArn is the key; attribute value is the value.
     */
    Attributes?: AttributeKeyAndValueList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface BatchListObjectChildren {
    /**
     * Reference of the object for which child objects are being listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * Maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
  }
  export interface BatchListObjectChildrenResponse {
    /**
     * The children structure, which is a map with the key as the LinkName and ObjectIdentifier as the value.
     */
    Children?: LinkNameToObjectIdentifierMap;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface BatchListObjectParentPaths {
    /**
     * The reference that identifies the object whose attributes will be listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface BatchListObjectParentPathsResponse {
    /**
     * Returns the path to the ObjectIdentifiers that are associated with the directory.
     */
    PathToObjectIdentifiersList?: PathToObjectIdentifiersList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface BatchListObjectPolicies {
    /**
     * The reference that identifies the object whose attributes will be listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface BatchListObjectPoliciesResponse {
    /**
     * A list of policy ObjectIdentifiers, that are attached to the object.
     */
    AttachedPolicyIds?: ObjectIdentifierList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface BatchListOutgoingTypedLinks {
    /**
     * The reference that identifies the object whose attributes will be listed.
     */
    ObjectReference: ObjectReference;
    /**
     * Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.
     */
    FilterAttributeRanges?: TypedLinkAttributeRangeList;
    /**
     * Filters are interpreted in the order of the attributes defined on the typed link facet, not the order they are supplied to any API calls.
     */
    FilterTypedLink?: TypedLinkSchemaAndFacetName;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface BatchListOutgoingTypedLinksResponse {
    /**
     * Returns a typed link specifier as output.
     */
    TypedLinkSpecifiers?: TypedLinkSpecifierList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface BatchListPolicyAttachments {
    /**
     * The reference that identifies the policy object.
     */
    PolicyReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface BatchListPolicyAttachmentsResponse {
    /**
     * A list of ObjectIdentifiers to which the policy is attached.
     */
    ObjectIdentifiers?: ObjectIdentifierList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface BatchLookupPolicy {
    /**
     * Reference that identifies the object whose policies will be looked up.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface BatchLookupPolicyResponse {
    /**
     * Provides list of path to policies. Policies contain PolicyId, ObjectIdentifier, and PolicyType. For more information, see Policies.
     */
    PolicyToPathList?: PolicyToPathList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export type BatchOperationIndex = number;
  export interface BatchReadException {
    /**
     * A type of exception, such as InvalidArnException.
     */
    Type?: BatchReadExceptionType;
    /**
     * An exception message that is associated with the failure.
     */
    Message?: ExceptionMessage;
  }
  export type BatchReadExceptionType = "ValidationException"|"InvalidArnException"|"ResourceNotFoundException"|"InvalidNextTokenException"|"AccessDeniedException"|"NotNodeException"|"FacetValidationException"|"CannotListParentOfRootException"|"NotIndexException"|"NotPolicyException"|"DirectoryNotEnabledException"|"LimitExceededException"|"InternalServiceException"|string;
  export interface BatchReadOperation {
    /**
     * Lists all attributes that are associated with an object.
     */
    ListObjectAttributes?: BatchListObjectAttributes;
    /**
     * Returns a paginated list of child objects that are associated with a given object.
     */
    ListObjectChildren?: BatchListObjectChildren;
    /**
     * Lists indices attached to an object.
     */
    ListAttachedIndices?: BatchListAttachedIndices;
    /**
     * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see Directory Structure.
     */
    ListObjectParentPaths?: BatchListObjectParentPaths;
    /**
     * Retrieves metadata about an object.
     */
    GetObjectInformation?: BatchGetObjectInformation;
    /**
     * Returns policies attached to an object in pagination fashion.
     */
    ListObjectPolicies?: BatchListObjectPolicies;
    /**
     * Returns all of the ObjectIdentifiers to which a given policy is attached.
     */
    ListPolicyAttachments?: BatchListPolicyAttachments;
    /**
     * Lists all policies from the root of the Directory to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the ObjectIdentifier for such objects. If policies are present, it returns ObjectIdentifier, policyId, and policyType. Paths that don't lead to the root from the target object are ignored. For more information, see Policies.
     */
    LookupPolicy?: BatchLookupPolicy;
    /**
     * Lists objects attached to the specified index.
     */
    ListIndex?: BatchListIndex;
    /**
     * Returns a paginated list of all the outgoing TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see Typed link.
     */
    ListOutgoingTypedLinks?: BatchListOutgoingTypedLinks;
    /**
     * Returns a paginated list of all the incoming TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see Typed link.
     */
    ListIncomingTypedLinks?: BatchListIncomingTypedLinks;
  }
  export type BatchReadOperationList = BatchReadOperation[];
  export interface BatchReadOperationResponse {
    /**
     * Identifies which operation in a batch has succeeded.
     */
    SuccessfulResponse?: BatchReadSuccessfulResponse;
    /**
     * Identifies which operation in a batch has failed.
     */
    ExceptionResponse?: BatchReadException;
  }
  export type BatchReadOperationResponseList = BatchReadOperationResponse[];
  export interface BatchReadRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * A list of operations that are part of the batch.
     */
    Operations: BatchReadOperationList;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface BatchReadResponse {
    /**
     * A list of all the responses for each batch read.
     */
    Responses?: BatchReadOperationResponseList;
  }
  export interface BatchReadSuccessfulResponse {
    /**
     * Lists all attributes that are associated with an object.
     */
    ListObjectAttributes?: BatchListObjectAttributesResponse;
    /**
     * Returns a paginated list of child objects that are associated with a given object.
     */
    ListObjectChildren?: BatchListObjectChildrenResponse;
    /**
     * Retrieves metadata about an object.
     */
    GetObjectInformation?: BatchGetObjectInformationResponse;
    /**
     * Lists indices attached to an object.
     */
    ListAttachedIndices?: BatchListAttachedIndicesResponse;
    /**
     * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see Directory Structure.
     */
    ListObjectParentPaths?: BatchListObjectParentPathsResponse;
    /**
     * Returns policies attached to an object in pagination fashion.
     */
    ListObjectPolicies?: BatchListObjectPoliciesResponse;
    /**
     * Returns all of the ObjectIdentifiers to which a given policy is attached.
     */
    ListPolicyAttachments?: BatchListPolicyAttachmentsResponse;
    /**
     * Lists all policies from the root of the Directory to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the ObjectIdentifier for such objects. If policies are present, it returns ObjectIdentifier, policyId, and policyType. Paths that don't lead to the root from the target object are ignored. For more information, see Policies.
     */
    LookupPolicy?: BatchLookupPolicyResponse;
    /**
     * Lists objects attached to the specified index.
     */
    ListIndex?: BatchListIndexResponse;
    /**
     * Returns a paginated list of all the outgoing TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see Typed link.
     */
    ListOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse;
    /**
     * Returns a paginated list of all the incoming TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see Typed link.
     */
    ListIncomingTypedLinks?: BatchListIncomingTypedLinksResponse;
  }
  export type BatchReferenceName = string;
  export interface BatchRemoveFacetFromObject {
    /**
     * The facet to remove from the object.
     */
    SchemaFacet: SchemaFacet;
    /**
     * A reference to the object whose facet will be removed.
     */
    ObjectReference: ObjectReference;
  }
  export interface BatchRemoveFacetFromObjectResponse {
  }
  export interface BatchUpdateObjectAttributes {
    /**
     * Reference that identifies the object.
     */
    ObjectReference: ObjectReference;
    /**
     * Attributes update structure.
     */
    AttributeUpdates: ObjectAttributeUpdateList;
  }
  export interface BatchUpdateObjectAttributesResponse {
    /**
     * ID that is associated with the object.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export type BatchWriteExceptionType = "InternalServiceException"|"ValidationException"|"InvalidArnException"|"LinkNameAlreadyInUseException"|"StillContainsLinksException"|"FacetValidationException"|"ObjectNotDetachedException"|"ResourceNotFoundException"|"AccessDeniedException"|"InvalidAttachmentException"|"NotIndexException"|"IndexedAttributeMissingException"|"ObjectAlreadyDetachedException"|"NotPolicyException"|"DirectoryNotEnabledException"|"LimitExceededException"|"UnsupportedIndexTypeException"|string;
  export interface BatchWriteOperation {
    /**
     * Creates an object.
     */
    CreateObject?: BatchCreateObject;
    /**
     * Attaches an object to a Directory.
     */
    AttachObject?: BatchAttachObject;
    /**
     * Detaches an object from a Directory.
     */
    DetachObject?: BatchDetachObject;
    /**
     * Updates a given object's attributes.
     */
    UpdateObjectAttributes?: BatchUpdateObjectAttributes;
    /**
     * Deletes an object in a Directory.
     */
    DeleteObject?: BatchDeleteObject;
    /**
     * A batch operation that adds a facet to an object.
     */
    AddFacetToObject?: BatchAddFacetToObject;
    /**
     * A batch operation that removes a facet from an object.
     */
    RemoveFacetFromObject?: BatchRemoveFacetFromObject;
    /**
     * Attaches a policy object to a regular object. An object can have a limited number of attached policies.
     */
    AttachPolicy?: BatchAttachPolicy;
    /**
     * Detaches a policy from a Directory.
     */
    DetachPolicy?: BatchDetachPolicy;
    /**
     * Creates an index object. See Indexing for more information.
     */
    CreateIndex?: BatchCreateIndex;
    /**
     * Attaches the specified object to the specified index.
     */
    AttachToIndex?: BatchAttachToIndex;
    /**
     * Detaches the specified object from the specified index.
     */
    DetachFromIndex?: BatchDetachFromIndex;
    /**
     * Attaches a typed link to a specified source and target object. For more information, see Typed link.
     */
    AttachTypedLink?: BatchAttachTypedLink;
    /**
     * Detaches a typed link from a specified source and target object. For more information, see Typed link.
     */
    DetachTypedLink?: BatchDetachTypedLink;
  }
  export type BatchWriteOperationList = BatchWriteOperation[];
  export interface BatchWriteOperationResponse {
    /**
     * Creates an object in a Directory.
     */
    CreateObject?: BatchCreateObjectResponse;
    /**
     * Attaches an object to a Directory.
     */
    AttachObject?: BatchAttachObjectResponse;
    /**
     * Detaches an object from a Directory.
     */
    DetachObject?: BatchDetachObjectResponse;
    /**
     * Updates a given object’s attributes.
     */
    UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse;
    /**
     * Deletes an object in a Directory.
     */
    DeleteObject?: BatchDeleteObjectResponse;
    /**
     * The result of an add facet to object batch operation.
     */
    AddFacetToObject?: BatchAddFacetToObjectResponse;
    /**
     * The result of a batch remove facet from object operation.
     */
    RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse;
    /**
     * Attaches a policy object to a regular object. An object can have a limited number of attached policies.
     */
    AttachPolicy?: BatchAttachPolicyResponse;
    /**
     * Detaches a policy from a Directory.
     */
    DetachPolicy?: BatchDetachPolicyResponse;
    /**
     * Creates an index object. See Indexing for more information.
     */
    CreateIndex?: BatchCreateIndexResponse;
    /**
     * Attaches the specified object to the specified index.
     */
    AttachToIndex?: BatchAttachToIndexResponse;
    /**
     * Detaches the specified object from the specified index.
     */
    DetachFromIndex?: BatchDetachFromIndexResponse;
    /**
     * Attaches a typed link to a specified source and target object. For more information, see Typed link.
     */
    AttachTypedLink?: BatchAttachTypedLinkResponse;
    /**
     * Detaches a typed link from a specified source and target object. For more information, see Typed link.
     */
    DetachTypedLink?: BatchDetachTypedLinkResponse;
  }
  export type BatchWriteOperationResponseList = BatchWriteOperationResponse[];
  export interface BatchWriteRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * A list of operations that are part of the batch.
     */
    Operations: BatchWriteOperationList;
  }
  export interface BatchWriteResponse {
    /**
     * A list of all the responses for each batch write.
     */
    Responses?: BatchWriteOperationResponseList;
  }
  export type BinaryAttributeValue = Buffer|Uint8Array|Blob|string;
  export type Bool = boolean;
  export type BooleanAttributeValue = boolean;
  export type ConsistencyLevel = "SERIALIZABLE"|"EVENTUAL"|string;
  export interface CreateDirectoryRequest {
    /**
     * The name of the Directory. Should be unique per account, per region.
     */
    Name: DirectoryName;
    /**
     * The Amazon Resource Name (ARN) of the published schema that will be copied into the data Directory. For more information, see arns.
     */
    SchemaArn: Arn;
  }
  export interface CreateDirectoryResponse {
    /**
     * The ARN that is associated with the Directory. For more information, see arns.
     */
    DirectoryArn: DirectoryArn;
    /**
     * The name of the Directory.
     */
    Name: DirectoryName;
    /**
     * The root object node of the created directory.
     */
    ObjectIdentifier: ObjectIdentifier;
    /**
     * The ARN of the published schema in the Directory. Once a published schema is copied into the directory, it has its own ARN, which is referred to applied schema ARN. For more information, see arns.
     */
    AppliedSchemaArn: Arn;
  }
  export interface CreateFacetRequest {
    /**
     * The schema ARN in which the new Facet will be created. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * The name of the Facet, which is unique for a given schema.
     */
    Name: FacetName;
    /**
     * The attributes that are associated with the Facet.
     */
    Attributes?: FacetAttributeList;
    /**
     * Specifies whether a given object created from this facet is of type node, leaf node, policy or index.   Node: Can have multiple children but one parent.     Leaf node: Cannot have children but can have multiple parents.     Policy: Allows you to store a policy document and policy type. For more information, see Policies.     Index: Can be created with the Index API.  
     */
    ObjectType: ObjectType;
  }
  export interface CreateFacetResponse {
  }
  export interface CreateIndexRequest {
    /**
     * The ARN of the directory where the index should be created.
     */
    DirectoryArn: Arn;
    /**
     * Specifies the attributes that should be indexed on. Currently only a single attribute is supported.
     */
    OrderedIndexedAttributeList: AttributeKeyList;
    /**
     * Indicates whether the attribute that is being indexed has unique values or not.
     */
    IsUnique: Bool;
    /**
     * A reference to the parent object that contains the index object.
     */
    ParentReference?: ObjectReference;
    /**
     * The name of the link between the parent object and the index object.
     */
    LinkName?: LinkName;
  }
  export interface CreateIndexResponse {
    /**
     * The ObjectIdentifier of the index created by this operation.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export interface CreateObjectRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory in which the object will be created. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * A list of schema facets to be associated with the object that contains SchemaArn and facet name. For more information, see arns.
     */
    SchemaFacets: SchemaFacetList;
    /**
     * The attribute map whose attribute ARN contains the key and attribute value as the map value.
     */
    ObjectAttributeList?: AttributeKeyAndValueList;
    /**
     * If specified, the parent reference to which this object will be attached.
     */
    ParentReference?: ObjectReference;
    /**
     * The name of link that is used to attach this object to a parent.
     */
    LinkName?: LinkName;
  }
  export interface CreateObjectResponse {
    /**
     * The identifier that is associated with the object.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export interface CreateSchemaRequest {
    /**
     * The name that is associated with the schema. This is unique to each account and in each region.
     */
    Name: SchemaName;
  }
  export interface CreateSchemaResponse {
    /**
     * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
     */
    SchemaArn?: Arn;
  }
  export interface CreateTypedLinkFacetRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     *  Facet structure that is associated with the typed link facet.
     */
    Facet: TypedLinkFacet;
  }
  export interface CreateTypedLinkFacetResponse {
  }
  export type _Date = Date;
  export type DatetimeAttributeValue = Date;
  export interface DeleteDirectoryRequest {
    /**
     * The ARN of the directory to delete.
     */
    DirectoryArn: Arn;
  }
  export interface DeleteDirectoryResponse {
    /**
     * The ARN of the deleted directory.
     */
    DirectoryArn: Arn;
  }
  export interface DeleteFacetRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Facet. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * The name of the facet to delete.
     */
    Name: FacetName;
  }
  export interface DeleteFacetResponse {
  }
  export interface DeleteObjectRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory where the object resides. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * A reference that identifies the object.
     */
    ObjectReference: ObjectReference;
  }
  export interface DeleteObjectResponse {
  }
  export interface DeleteSchemaRequest {
    /**
     * The Amazon Resource Name (ARN) of the development schema. For more information, see arns.
     */
    SchemaArn: Arn;
  }
  export interface DeleteSchemaResponse {
    /**
     * The input ARN that is returned as part of the response. For more information, see arns.
     */
    SchemaArn?: Arn;
  }
  export interface DeleteTypedLinkFacetRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * The unique name of the typed link facet.
     */
    Name: TypedLinkName;
  }
  export interface DeleteTypedLinkFacetResponse {
  }
  export interface DetachFromIndexRequest {
    /**
     * The Amazon Resource Name (ARN) of the directory the index and object exist in.
     */
    DirectoryArn: Arn;
    /**
     * A reference to the index object.
     */
    IndexReference: ObjectReference;
    /**
     * A reference to the object being detached from the index.
     */
    TargetReference: ObjectReference;
  }
  export interface DetachFromIndexResponse {
    /**
     * The ObjectIdentifier of the object that was detached from the index.
     */
    DetachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface DetachObjectRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory where objects reside. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * The parent reference from which the object with the specified link name is detached.
     */
    ParentReference: ObjectReference;
    /**
     * The link name associated with the object that needs to be detached.
     */
    LinkName: LinkName;
  }
  export interface DetachObjectResponse {
    /**
     * The ObjectIdentifier that was detached from the object.
     */
    DetachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface DetachPolicyRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory where both objects reside. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the policy object.
     */
    PolicyReference: ObjectReference;
    /**
     * Reference that identifies the object whose policy object will be detached.
     */
    ObjectReference: ObjectReference;
  }
  export interface DetachPolicyResponse {
  }
  export interface DetachTypedLinkRequest {
    /**
     * The Amazon Resource Name (ARN) of the directory where you want to detach the typed link.
     */
    DirectoryArn: Arn;
    /**
     * Used to accept a typed link specifier as input.
     */
    TypedLinkSpecifier: TypedLinkSpecifier;
  }
  export interface Directory {
    /**
     * The name of the directory.
     */
    Name?: DirectoryName;
    /**
     * The Amazon Resource Name (ARN) that is associated with the directory. For more information, see arns.
     */
    DirectoryArn?: DirectoryArn;
    /**
     * The state of the directory. Can be either Enabled, Disabled, or Deleted.
     */
    State?: DirectoryState;
    /**
     * The date and time when the directory was created.
     */
    CreationDateTime?: _Date;
  }
  export type DirectoryArn = string;
  export type DirectoryList = Directory[];
  export type DirectoryName = string;
  export type DirectoryState = "ENABLED"|"DISABLED"|"DELETED"|string;
  export interface DisableDirectoryRequest {
    /**
     * The ARN of the directory to disable.
     */
    DirectoryArn: Arn;
  }
  export interface DisableDirectoryResponse {
    /**
     * The ARN of the directory that has been disabled.
     */
    DirectoryArn: Arn;
  }
  export interface EnableDirectoryRequest {
    /**
     * The ARN of the directory to enable.
     */
    DirectoryArn: Arn;
  }
  export interface EnableDirectoryResponse {
    /**
     * The ARN of the enabled directory.
     */
    DirectoryArn: Arn;
  }
  export type ExceptionMessage = string;
  export interface Facet {
    /**
     * The name of the Facet.
     */
    Name?: FacetName;
    /**
     * The object type that is associated with the facet. See CreateFacetRequest$ObjectType for more details.
     */
    ObjectType?: ObjectType;
  }
  export interface FacetAttribute {
    /**
     * The name of the facet attribute.
     */
    Name: AttributeName;
    /**
     * A facet attribute consists of either a definition or a reference. This structure contains the attribute definition. See Attribute References for more information.
     */
    AttributeDefinition?: FacetAttributeDefinition;
    /**
     * An attribute reference that is associated with the attribute. See Attribute References for more information.
     */
    AttributeReference?: FacetAttributeReference;
    /**
     * The required behavior of the FacetAttribute.
     */
    RequiredBehavior?: RequiredAttributeBehavior;
  }
  export interface FacetAttributeDefinition {
    /**
     * The type of the attribute.
     */
    Type: FacetAttributeType;
    /**
     * The default value of the attribute (if configured).
     */
    DefaultValue?: TypedAttributeValue;
    /**
     * Whether the attribute is mutable or not.
     */
    IsImmutable?: Bool;
    /**
     * Validation rules attached to the attribute definition.
     */
    Rules?: RuleMap;
  }
  export type FacetAttributeList = FacetAttribute[];
  export interface FacetAttributeReference {
    /**
     * The target facet name that is associated with the facet reference. See Attribute References for more information.
     */
    TargetFacetName: FacetName;
    /**
     * The target attribute name that is associated with the facet reference. See Attribute References for more information.
     */
    TargetAttributeName: AttributeName;
  }
  export type FacetAttributeType = "STRING"|"BINARY"|"BOOLEAN"|"NUMBER"|"DATETIME"|string;
  export interface FacetAttributeUpdate {
    /**
     * The attribute to update.
     */
    Attribute?: FacetAttribute;
    /**
     * The action to perform when updating the attribute.
     */
    Action?: UpdateActionType;
  }
  export type FacetAttributeUpdateList = FacetAttributeUpdate[];
  export type FacetName = string;
  export type FacetNameList = FacetName[];
  export interface GetDirectoryRequest {
    /**
     * The ARN of the directory.
     */
    DirectoryArn: DirectoryArn;
  }
  export interface GetDirectoryResponse {
    /**
     * Metadata about the directory.
     */
    Directory: Directory;
  }
  export interface GetFacetRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Facet. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * The name of the facet to retrieve.
     */
    Name: FacetName;
  }
  export interface GetFacetResponse {
    /**
     * The Facet structure that is associated with the facet.
     */
    Facet?: Facet;
  }
  export interface GetObjectInformationRequest {
    /**
     * The ARN of the directory being retrieved.
     */
    DirectoryArn: Arn;
    /**
     * A reference to the object.
     */
    ObjectReference: ObjectReference;
    /**
     * The consistency level at which to retrieve the object information.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface GetObjectInformationResponse {
    /**
     * The facets attached to the specified object.
     */
    SchemaFacets?: SchemaFacetList;
    /**
     * The ObjectIdentifier of the specified object.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export interface GetSchemaAsJsonRequest {
    /**
     * The ARN of the schema to retrieve.
     */
    SchemaArn: Arn;
  }
  export interface GetSchemaAsJsonResponse {
    /**
     * The name of the retrieved schema.
     */
    Name?: SchemaName;
    /**
     * The JSON representation of the schema document.
     */
    Document?: SchemaJsonDocument;
  }
  export interface GetTypedLinkFacetInformationRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * The unique name of the typed link facet.
     */
    Name: TypedLinkName;
  }
  export interface GetTypedLinkFacetInformationResponse {
    /**
     * The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed links considers the order that the attributes are defined on the typed link facet. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls. For more information about identity attributes, see Typed link.
     */
    IdentityAttributeOrder?: AttributeNameList;
  }
  export interface IndexAttachment {
    /**
     * The indexed attribute values.
     */
    IndexedAttributes?: AttributeKeyAndValueList;
    /**
     * The ObjectIdentifier of the object attached to the index.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export type IndexAttachmentList = IndexAttachment[];
  export type LinkName = string;
  export type LinkNameToObjectIdentifierMap = {[key: string]: ObjectIdentifier};
  export interface ListAppliedSchemaArnsRequest {
    /**
     * The ARN of the directory you are listing.
     */
    DirectoryArn: Arn;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface ListAppliedSchemaArnsResponse {
    /**
     * The ARNs of schemas that are applied to the directory.
     */
    SchemaArns?: Arns;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListAttachedIndicesRequest {
    /**
     * The ARN of the directory.
     */
    DirectoryArn: Arn;
    /**
     * A reference to the object that has indices attached.
     */
    TargetReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
    /**
     * The consistency level to use for this operation.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListAttachedIndicesResponse {
    /**
     * The indices attached to the specified object.
     */
    IndexAttachments?: IndexAttachmentList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListDevelopmentSchemaArnsRequest {
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface ListDevelopmentSchemaArnsResponse {
    /**
     * The ARNs of retrieved development schemas.
     */
    SchemaArns?: Arns;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListDirectoriesRequest {
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
    /**
     * The state of the directories in the list. Can be either Enabled, Disabled, or Deleted.
     */
    state?: DirectoryState;
  }
  export interface ListDirectoriesResponse {
    /**
     * Lists all directories that are associated with your account in pagination fashion.
     */
    Directories: DirectoryList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListFacetAttributesRequest {
    /**
     * The ARN of the schema where the facet resides.
     */
    SchemaArn: Arn;
    /**
     * The name of the facet whose attributes will be retrieved.
     */
    Name: FacetName;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface ListFacetAttributesResponse {
    /**
     * The attributes attached to the facet.
     */
    Attributes?: FacetAttributeList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListFacetNamesRequest {
    /**
     * The Amazon Resource Name (ARN) to retrieve facet names from.
     */
    SchemaArn: Arn;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface ListFacetNamesResponse {
    /**
     * The names of facets that exist within the schema.
     */
    FacetNames?: FacetNameList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListIncomingTypedLinksRequest {
    /**
     * The Amazon Resource Name (ARN) of the directory where you want to list the typed links.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the object whose attributes will be listed.
     */
    ObjectReference: ObjectReference;
    /**
     * Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.
     */
    FilterAttributeRanges?: TypedLinkAttributeRangeList;
    /**
     * Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls.
     */
    FilterTypedLink?: TypedLinkSchemaAndFacetName;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
    /**
     * The consistency level to execute the request at.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListIncomingTypedLinksResponse {
    /**
     * Returns one or more typed link specifiers as output.
     */
    LinkSpecifiers?: TypedLinkSpecifierList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListIndexRequest {
    /**
     * The ARN of the directory that the index exists in.
     */
    DirectoryArn: Arn;
    /**
     * Specifies the ranges of indexed values that you want to query.
     */
    RangesOnIndexedValues?: ObjectAttributeRangeList;
    /**
     * The reference to the index to list.
     */
    IndexReference: ObjectReference;
    /**
     * The maximum number of results to retrieve from the index.
     */
    MaxResults?: NumberResults;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The consistency level to execute the request at.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListIndexResponse {
    /**
     * The objects and indexed values attached to the index.
     */
    IndexAttachments?: IndexAttachmentList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListObjectAttributesRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory where the object resides. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * The reference that identifies the object whose attributes will be listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    ConsistencyLevel?: ConsistencyLevel;
    /**
     * Used to filter the list of object attributes that are associated with a certain facet.
     */
    FacetFilter?: SchemaFacet;
  }
  export interface ListObjectAttributesResponse {
    /**
     * Attributes map that is associated with the object. AttributeArn is the key, and attribute value is the value.
     */
    Attributes?: AttributeKeyAndValueList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListObjectChildrenRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory where the object resides. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * The reference that identifies the object for which child objects are being listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListObjectChildrenResponse {
    /**
     * Children structure, which is a map with key as the LinkName and ObjectIdentifier as the value.
     */
    Children?: LinkNameToObjectIdentifierMap;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListObjectParentPathsRequest {
    /**
     * The ARN of the directory to which the parent path applies.
     */
    DirectoryArn: Arn;
    /**
     * The reference that identifies the object whose parent paths are listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
  }
  export interface ListObjectParentPathsResponse {
    /**
     * Returns the path to the ObjectIdentifiers that are associated with the directory.
     */
    PathToObjectIdentifiersList?: PathToObjectIdentifiersList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListObjectParentsRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory where the object resides. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * The reference that identifies the object for which parent objects are being listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListObjectParentsResponse {
    /**
     * The parent structure, which is a map with key as the ObjectIdentifier and LinkName as the value.
     */
    Parents?: ObjectIdentifierToLinkNameMap;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListObjectPoliciesRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory where objects reside. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the object for which policies will be listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListObjectPoliciesResponse {
    /**
     * A list of policy ObjectIdentifiers, that are attached to the object.
     */
    AttachedPolicyIds?: ObjectIdentifierList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListOutgoingTypedLinksRequest {
    /**
     * The Amazon Resource Name (ARN) of the directory where you want to list the typed links.
     */
    DirectoryArn: Arn;
    /**
     * A reference that identifies the object whose attributes will be listed.
     */
    ObjectReference: ObjectReference;
    /**
     * Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.
     */
    FilterAttributeRanges?: TypedLinkAttributeRangeList;
    /**
     * Filters are interpreted in the order of the attributes defined on the typed link facet, not the order they are supplied to any API calls.
     */
    FilterTypedLink?: TypedLinkSchemaAndFacetName;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
    /**
     * The consistency level to execute the request at.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListOutgoingTypedLinksResponse {
    /**
     * Returns a typed link specifier as output.
     */
    TypedLinkSpecifiers?: TypedLinkSpecifierList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListPolicyAttachmentsRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory where objects reside. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * The reference that identifies the policy object.
     */
    PolicyReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListPolicyAttachmentsResponse {
    /**
     * A list of ObjectIdentifiers to which the policy is attached.
     */
    ObjectIdentifiers?: ObjectIdentifierList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListPublishedSchemaArnsRequest {
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface ListPublishedSchemaArnsResponse {
    /**
     * The ARNs of published schemas.
     */
    SchemaArns?: Arns;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
     */
    ResourceArn: Arn;
    /**
     * The pagination token. This is for future use. Currently pagination is not supported for tagging.
     */
    NextToken?: NextToken;
    /**
     * The MaxResults parameter sets the maximum number of results returned in a single page. This is for future use and is not supported currently.
     */
    MaxResults?: TagsNumberResults;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of tag key value pairs that are associated with the response.
     */
    Tags?: TagList;
    /**
     * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export interface ListTypedLinkFacetAttributesRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * The unique name of the typed link facet.
     */
    Name: TypedLinkName;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface ListTypedLinkFacetAttributesResponse {
    /**
     * An ordered set of attributes associate with the typed link.
     */
    Attributes?: TypedLinkAttributeDefinitionList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListTypedLinkFacetNamesRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface ListTypedLinkFacetNamesResponse {
    /**
     * The names of typed link facets that exist within the schema.
     */
    FacetNames?: TypedLinkNameList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface LookupPolicyRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the object whose policies will be looked up.
     */
    ObjectReference: ObjectReference;
    /**
     * The token to request the next page of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
  }
  export interface LookupPolicyResponse {
    /**
     * Provides list of path to policies. Policies contain PolicyId, ObjectIdentifier, and PolicyType. For more information, see Policies.
     */
    PolicyToPathList?: PolicyToPathList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export type NextToken = string;
  export type NumberAttributeValue = string;
  export type NumberResults = number;
  export interface ObjectAttributeAction {
    /**
     * A type that can be either Update or Delete.
     */
    ObjectAttributeActionType?: UpdateActionType;
    /**
     * The value that you want to update to.
     */
    ObjectAttributeUpdateValue?: TypedAttributeValue;
  }
  export interface ObjectAttributeRange {
    /**
     * The key of the attribute that the attribute range covers.
     */
    AttributeKey?: AttributeKey;
    /**
     * The range of attribute values being selected.
     */
    Range?: TypedAttributeValueRange;
  }
  export type ObjectAttributeRangeList = ObjectAttributeRange[];
  export interface ObjectAttributeUpdate {
    /**
     * The key of the attribute being updated.
     */
    ObjectAttributeKey?: AttributeKey;
    /**
     * The action to perform as part of the attribute update.
     */
    ObjectAttributeAction?: ObjectAttributeAction;
  }
  export type ObjectAttributeUpdateList = ObjectAttributeUpdate[];
  export type ObjectIdentifier = string;
  export type ObjectIdentifierList = ObjectIdentifier[];
  export type ObjectIdentifierToLinkNameMap = {[key: string]: LinkName};
  export interface ObjectReference {
    /**
     * A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see Accessing Objects. You can identify an object in one of the following ways:    $ObjectIdentifier - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier    /some/path - Identifies the object based on path    #SomeBatchReference - Identifies the object in a batch call  
     */
    Selector?: SelectorObjectReference;
  }
  export type ObjectType = "NODE"|"LEAF_NODE"|"POLICY"|"INDEX"|string;
  export type PathString = string;
  export interface PathToObjectIdentifiers {
    /**
     * The path that is used to identify the object starting from directory root.
     */
    Path?: PathString;
    /**
     * Lists ObjectIdentifiers starting from directory root to the object in the request.
     */
    ObjectIdentifiers?: ObjectIdentifierList;
  }
  export type PathToObjectIdentifiersList = PathToObjectIdentifiers[];
  export interface PolicyAttachment {
    /**
     * The ID of PolicyAttachment.
     */
    PolicyId?: ObjectIdentifier;
    /**
     * The ObjectIdentifier that is associated with PolicyAttachment.
     */
    ObjectIdentifier?: ObjectIdentifier;
    /**
     * The type of policy that can be associated with PolicyAttachment.
     */
    PolicyType?: PolicyType;
  }
  export type PolicyAttachmentList = PolicyAttachment[];
  export interface PolicyToPath {
    /**
     * The path that is referenced from the root.
     */
    Path?: PathString;
    /**
     * List of policy objects.
     */
    Policies?: PolicyAttachmentList;
  }
  export type PolicyToPathList = PolicyToPath[];
  export type PolicyType = string;
  export interface PublishSchemaRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the development schema. For more information, see arns.
     */
    DevelopmentSchemaArn: Arn;
    /**
     * The version under which the schema will be published.
     */
    Version: Version;
    /**
     * The new name under which the schema will be published. If this is not provided, the development schema is considered.
     */
    Name?: SchemaName;
  }
  export interface PublishSchemaResponse {
    /**
     * The ARN that is associated with the published schema. For more information, see arns.
     */
    PublishedSchemaArn?: Arn;
  }
  export interface PutSchemaFromJsonRequest {
    /**
     * The ARN of the schema to update.
     */
    SchemaArn: Arn;
    /**
     * The replacement JSON schema.
     */
    Document: SchemaJsonDocument;
  }
  export interface PutSchemaFromJsonResponse {
    /**
     * The ARN of the schema to update.
     */
    Arn?: Arn;
  }
  export type RangeMode = "FIRST"|"LAST"|"LAST_BEFORE_MISSING_VALUES"|"INCLUSIVE"|"EXCLUSIVE"|string;
  export interface RemoveFacetFromObjectRequest {
    /**
     * The ARN of the directory in which the object resides.
     */
    DirectoryArn: Arn;
    /**
     * The facet to remove.
     */
    SchemaFacet: SchemaFacet;
    /**
     * A reference to the object to remove the facet from.
     */
    ObjectReference: ObjectReference;
  }
  export interface RemoveFacetFromObjectResponse {
  }
  export type RequiredAttributeBehavior = "REQUIRED_ALWAYS"|"NOT_REQUIRED"|string;
  export interface Rule {
    /**
     * The type of attribute validation rule.
     */
    Type?: RuleType;
    /**
     * The minimum and maximum parameters that are associated with the rule.
     */
    Parameters?: RuleParameterMap;
  }
  export type RuleKey = string;
  export type RuleMap = {[key: string]: Rule};
  export type RuleParameterKey = string;
  export type RuleParameterMap = {[key: string]: RuleParameterValue};
  export type RuleParameterValue = string;
  export type RuleType = "BINARY_LENGTH"|"NUMBER_COMPARISON"|"STRING_FROM_SET"|"STRING_LENGTH"|string;
  export interface SchemaFacet {
    /**
     * The ARN of the schema that contains the facet.
     */
    SchemaArn?: Arn;
    /**
     * The name of the facet.
     */
    FacetName?: FacetName;
  }
  export type SchemaFacetList = SchemaFacet[];
  export type SchemaJsonDocument = string;
  export type SchemaName = string;
  export type SelectorObjectReference = string;
  export type StringAttributeValue = string;
  export interface Tag {
    /**
     * The key that is associated with the tag.
     */
    Key?: TagKey;
    /**
     * The value that is associated with the tag.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
     */
    ResourceArn: Arn;
    /**
     * A list of tag key-value pairs.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TagsNumberResults = number;
  export interface TypedAttributeValue {
    /**
     * A string data value.
     */
    StringValue?: StringAttributeValue;
    /**
     * A binary data value.
     */
    BinaryValue?: BinaryAttributeValue;
    /**
     * A Boolean data value.
     */
    BooleanValue?: BooleanAttributeValue;
    /**
     * A number data value.
     */
    NumberValue?: NumberAttributeValue;
    /**
     * A date and time value.
     */
    DatetimeValue?: DatetimeAttributeValue;
  }
  export interface TypedAttributeValueRange {
    /**
     * The inclusive or exclusive range start.
     */
    StartMode: RangeMode;
    /**
     * The value to start the range at.
     */
    StartValue?: TypedAttributeValue;
    /**
     * The inclusive or exclusive range end.
     */
    EndMode: RangeMode;
    /**
     * The attribute value to terminate the range at.
     */
    EndValue?: TypedAttributeValue;
  }
  export interface TypedLinkAttributeDefinition {
    /**
     * The unique name of the typed link attribute.
     */
    Name: AttributeName;
    /**
     * The type of the attribute.
     */
    Type: FacetAttributeType;
    /**
     * The default value of the attribute (if configured).
     */
    DefaultValue?: TypedAttributeValue;
    /**
     * Whether the attribute is mutable or not.
     */
    IsImmutable?: Bool;
    /**
     * Validation rules that are attached to the attribute definition.
     */
    Rules?: RuleMap;
    /**
     * The required behavior of the TypedLinkAttributeDefinition.
     */
    RequiredBehavior: RequiredAttributeBehavior;
  }
  export type TypedLinkAttributeDefinitionList = TypedLinkAttributeDefinition[];
  export interface TypedLinkAttributeRange {
    /**
     * The unique name of the typed link attribute.
     */
    AttributeName?: AttributeName;
    /**
     * The range of attribute values that are being selected.
     */
    Range: TypedAttributeValueRange;
  }
  export type TypedLinkAttributeRangeList = TypedLinkAttributeRange[];
  export interface TypedLinkFacet {
    /**
     * The unique name of the typed link facet.
     */
    Name: TypedLinkName;
    /**
     * A set of key-value pairs associated with the typed link. Typed link attributes are used when you have data values that are related to the link itself, and not to one of the two objects being linked. Identity attributes also serve to distinguish the link from others of the same type between the same objects.
     */
    Attributes: TypedLinkAttributeDefinitionList;
    /**
     * The set of attributes that distinguish links made from this facet from each other, in the order of significance. Listing typed links can filter on the values of these attributes. See ListOutgoingTypedLinks and ListIncomingTypedLinks for details.
     */
    IdentityAttributeOrder: AttributeNameList;
  }
  export interface TypedLinkFacetAttributeUpdate {
    /**
     * The attribute to update.
     */
    Attribute: TypedLinkAttributeDefinition;
    /**
     * The action to perform when updating the attribute.
     */
    Action: UpdateActionType;
  }
  export type TypedLinkFacetAttributeUpdateList = TypedLinkFacetAttributeUpdate[];
  export type TypedLinkName = string;
  export type TypedLinkNameList = TypedLinkName[];
  export interface TypedLinkSchemaAndFacetName {
    /**
     * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * The unique name of the typed link facet.
     */
    TypedLinkName: TypedLinkName;
  }
  export interface TypedLinkSpecifier {
    /**
     * Identifies the typed link facet that is associated with the typed link.
     */
    TypedLinkFacet: TypedLinkSchemaAndFacetName;
    /**
     * Identifies the source object that the typed link will attach to.
     */
    SourceObjectReference: ObjectReference;
    /**
     * Identifies the target object that the typed link will attach to.
     */
    TargetObjectReference: ObjectReference;
    /**
     * Identifies the attribute value to update.
     */
    IdentityAttributeValues: AttributeNameAndValueList;
  }
  export type TypedLinkSpecifierList = TypedLinkSpecifier[];
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
     */
    ResourceArn: Arn;
    /**
     * Keys of the tag that need to be removed from the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export type UpdateActionType = "CREATE_OR_UPDATE"|"DELETE"|string;
  export interface UpdateFacetRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Facet. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * The name of the facet.
     */
    Name: FacetName;
    /**
     * List of attributes that need to be updated in a given schema Facet. Each attribute is followed by AttributeAction, which specifies the type of update operation to perform. 
     */
    AttributeUpdates?: FacetAttributeUpdateList;
    /**
     * The object type that is associated with the facet. See CreateFacetRequest$ObjectType for more details.
     */
    ObjectType?: ObjectType;
  }
  export interface UpdateFacetResponse {
  }
  export interface UpdateObjectAttributesRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory where the object resides. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * The reference that identifies the object.
     */
    ObjectReference: ObjectReference;
    /**
     * The attributes update structure.
     */
    AttributeUpdates: ObjectAttributeUpdateList;
  }
  export interface UpdateObjectAttributesResponse {
    /**
     * The ObjectIdentifier of the updated object.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export interface UpdateSchemaRequest {
    /**
     * The Amazon Resource Name (ARN) of the development schema. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * The name of the schema.
     */
    Name: SchemaName;
  }
  export interface UpdateSchemaResponse {
    /**
     * The ARN that is associated with the updated schema. For more information, see arns.
     */
    SchemaArn?: Arn;
  }
  export interface UpdateTypedLinkFacetRequest {
    /**
     * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * The unique name of the typed link facet.
     */
    Name: TypedLinkName;
    /**
     * Attributes update structure.
     */
    AttributeUpdates: TypedLinkFacetAttributeUpdateList;
    /**
     * The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed links considers the order that the attributes are defined on the typed link facet. When providing ranges to a typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls. For more information about identity attributes, see Typed link.
     */
    IdentityAttributeOrder: AttributeNameList;
  }
  export interface UpdateTypedLinkFacetResponse {
  }
  export type Version = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-05-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CloudDirectory client.
   */
  export import Types = CloudDirectory;
}
export = CloudDirectory;
