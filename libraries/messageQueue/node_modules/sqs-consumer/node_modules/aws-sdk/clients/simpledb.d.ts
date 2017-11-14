import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class SimpleDB extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SimpleDB.Types.ClientConfiguration)
  config: Config & SimpleDB.Types.ClientConfiguration;
  /**
   *  Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput.    If you specify BatchDeleteAttributes without attributes or values, all the attributes for the item are deleted.   BatchDeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute doesn't result in an error.   The BatchDeleteAttributes operation succeeds or fails in its entirety. There are no partial deletes. You can execute multiple BatchDeleteAttributes operations and other operations in parallel. However, large numbers of concurrent BatchDeleteAttributes calls can result in Service Unavailable (503) responses.   This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method.   This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists.    The following limitations are enforced for this operation:  1 MB request size 25 item limit per BatchDeleteAttributes operation  
   */
  batchDeleteAttributes(params: SimpleDB.Types.BatchDeleteAttributesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput.    If you specify BatchDeleteAttributes without attributes or values, all the attributes for the item are deleted.   BatchDeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute doesn't result in an error.   The BatchDeleteAttributes operation succeeds or fails in its entirety. There are no partial deletes. You can execute multiple BatchDeleteAttributes operations and other operations in parallel. However, large numbers of concurrent BatchDeleteAttributes calls can result in Service Unavailable (503) responses.   This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method.   This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists.    The following limitations are enforced for this operation:  1 MB request size 25 item limit per BatchDeleteAttributes operation  
   */
  batchDeleteAttributes(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  The BatchPutAttributes operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple PutAttribute operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput.   The client may specify the item name with the Item.X.ItemName parameter. The client may specify new attributes using a combination of the Item.X.Attribute.Y.Name and Item.X.Attribute.Y.Value parameters. The client may specify the first attribute for the first item using the parameters Item.0.Attribute.0.Name and Item.0.Attribute.0.Value, and for the second attribute for the first item by the parameters Item.0.Attribute.1.Name and Item.0.Attribute.1.Value, and so on.   Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes { "first_name", "first_value" } and { "first_name", "second_value" }. However, it cannot have two attribute instances where both the Item.X.Attribute.Y.Name and Item.X.Attribute.Y.Value are the same.   Optionally, the requester can supply the Replace parameter for each individual value. Setting this value to true will cause the new attribute values to replace the existing attribute values. For example, if an item I has the attributes { 'a', '1' }, { 'b', '2'} and { 'b', '3' } and the requester does a BatchPutAttributes of {'I', 'b', '4' } with the Replace parameter set to true, the final attributes of the item will be { 'a', '1' } and { 'b', '4' }, replacing the previous values of the 'b' attribute with the new value.   You cannot specify an empty string as an item or as an attribute name. The BatchPutAttributes operation succeeds or fails in its entirety. There are no partial puts.   This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists.   You can execute multiple BatchPutAttributes operations and other operations in parallel. However, large numbers of concurrent BatchPutAttributes calls can result in Service Unavailable (503) responses.   The following limitations are enforced for this operation:  256 attribute name-value pairs per item 1 MB request size 1 billion attributes per domain 10 GB of total user data storage per domain 25 item limit per BatchPutAttributes operation  
   */
  batchPutAttributes(params: SimpleDB.Types.BatchPutAttributesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  The BatchPutAttributes operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple PutAttribute operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput.   The client may specify the item name with the Item.X.ItemName parameter. The client may specify new attributes using a combination of the Item.X.Attribute.Y.Name and Item.X.Attribute.Y.Value parameters. The client may specify the first attribute for the first item using the parameters Item.0.Attribute.0.Name and Item.0.Attribute.0.Value, and for the second attribute for the first item by the parameters Item.0.Attribute.1.Name and Item.0.Attribute.1.Value, and so on.   Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes { "first_name", "first_value" } and { "first_name", "second_value" }. However, it cannot have two attribute instances where both the Item.X.Attribute.Y.Name and Item.X.Attribute.Y.Value are the same.   Optionally, the requester can supply the Replace parameter for each individual value. Setting this value to true will cause the new attribute values to replace the existing attribute values. For example, if an item I has the attributes { 'a', '1' }, { 'b', '2'} and { 'b', '3' } and the requester does a BatchPutAttributes of {'I', 'b', '4' } with the Replace parameter set to true, the final attributes of the item will be { 'a', '1' } and { 'b', '4' }, replacing the previous values of the 'b' attribute with the new value.   You cannot specify an empty string as an item or as an attribute name. The BatchPutAttributes operation succeeds or fails in its entirety. There are no partial puts.   This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists.   You can execute multiple BatchPutAttributes operations and other operations in parallel. However, large numbers of concurrent BatchPutAttributes calls can result in Service Unavailable (503) responses.   The following limitations are enforced for this operation:  256 attribute name-value pairs per item 1 MB request size 1 billion attributes per domain 10 GB of total user data storage per domain 25 item limit per BatchPutAttributes operation  
   */
  batchPutAttributes(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  The CreateDomain operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The CreateDomain operation may take 10 or more seconds to complete.   CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response.   The client can create up to 100 domains per account.   If the client requires additional domains, go to  http://aws.amazon.com/contact-us/simpledb-limit-request/. 
   */
  createDomain(params: SimpleDB.Types.CreateDomainRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  The CreateDomain operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The CreateDomain operation may take 10 or more seconds to complete.   CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response.   The client can create up to 100 domains per account.   If the client requires additional domains, go to  http://aws.amazon.com/contact-us/simpledb-limit-request/. 
   */
  createDomain(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted.   If DeleteAttributes is called without being passed any attributes or values specified, all the attributes for the item are deleted.   DeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response.   Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a GetAttributes or Select operation (read) immediately after a DeleteAttributes or PutAttributes operation (write) might not return updated item data. 
   */
  deleteAttributes(params: SimpleDB.Types.DeleteAttributesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted.   If DeleteAttributes is called without being passed any attributes or values specified, all the attributes for the item are deleted.   DeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response.   Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a GetAttributes or Select operation (read) immediately after a DeleteAttributes or PutAttributes operation (write) might not return updated item data. 
   */
  deleteAttributes(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  The DeleteDomain operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The DeleteDomain operation might take 10 or more seconds to complete.   Running DeleteDomain on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. 
   */
  deleteDomain(params: SimpleDB.Types.DeleteDomainRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  The DeleteDomain operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The DeleteDomain operation might take 10 or more seconds to complete.   Running DeleteDomain on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. 
   */
  deleteDomain(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 
   */
  domainMetadata(params: SimpleDB.Types.DomainMetadataRequest, callback?: (err: AWSError, data: SimpleDB.Types.DomainMetadataResult) => void): Request<SimpleDB.Types.DomainMetadataResult, AWSError>;
  /**
   *  Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 
   */
  domainMetadata(callback?: (err: AWSError, data: SimpleDB.Types.DomainMetadataResult) => void): Request<SimpleDB.Types.DomainMetadataResult, AWSError>;
  /**
   *  Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter.   If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas.   If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. 
   */
  getAttributes(params: SimpleDB.Types.GetAttributesRequest, callback?: (err: AWSError, data: SimpleDB.Types.GetAttributesResult) => void): Request<SimpleDB.Types.GetAttributesResult, AWSError>;
  /**
   *  Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter.   If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas.   If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. 
   */
  getAttributes(callback?: (err: AWSError, data: SimpleDB.Types.GetAttributesResult) => void): Request<SimpleDB.Types.GetAttributesResult, AWSError>;
  /**
   *  The ListDomains operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by MaxNumberOfDomains. A NextToken is returned if there are more than MaxNumberOfDomains domains. Calling ListDomains successive times with the NextToken provided by the operation returns up to MaxNumberOfDomains more domain names with each successive operation call. 
   */
  listDomains(params: SimpleDB.Types.ListDomainsRequest, callback?: (err: AWSError, data: SimpleDB.Types.ListDomainsResult) => void): Request<SimpleDB.Types.ListDomainsResult, AWSError>;
  /**
   *  The ListDomains operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by MaxNumberOfDomains. A NextToken is returned if there are more than MaxNumberOfDomains domains. Calling ListDomains successive times with the NextToken provided by the operation returns up to MaxNumberOfDomains more domain names with each successive operation call. 
   */
  listDomains(callback?: (err: AWSError, data: SimpleDB.Types.ListDomainsResult) => void): Request<SimpleDB.Types.ListDomainsResult, AWSError>;
  /**
   *  The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the Attribute.X.Name and Attribute.X.Value parameters. The client specifies the first attribute by the parameters Attribute.0.Name and Attribute.0.Value, the second attribute by the parameters Attribute.1.Name and Attribute.1.Value, and so on.   Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes { "first_name", "first_value" } and { "first_name", second_value" }. However, it cannot have two attribute instances where both the Attribute.X.Name and Attribute.X.Value are the same.   Optionally, the requestor can supply the Replace parameter for each individual attribute. Setting this value to true causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes { 'a', '1' }, { 'b', '2'} and { 'b', '3' } and the requestor calls PutAttributes using the attributes { 'b', '4' } with the Replace parameter set to true, the final attributes of the item are changed to { 'a', '1' } and { 'b', '4' }, which replaces the previous values of the 'b' attribute with the new value.   Using PutAttributes to replace attribute values that do not exist will not result in an error response.   You cannot specify an empty string as an attribute name.   Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate GetAttributes or Select operation (read) immediately after a PutAttributes or DeleteAttributes operation (write) might not return the updated data.   The following limitations are enforced for this operation:  256 total attribute name-value pairs per item One billion attributes per domain 10 GB of total user data storage per domain  
   */
  putAttributes(params: SimpleDB.Types.PutAttributesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the Attribute.X.Name and Attribute.X.Value parameters. The client specifies the first attribute by the parameters Attribute.0.Name and Attribute.0.Value, the second attribute by the parameters Attribute.1.Name and Attribute.1.Value, and so on.   Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes { "first_name", "first_value" } and { "first_name", second_value" }. However, it cannot have two attribute instances where both the Attribute.X.Name and Attribute.X.Value are the same.   Optionally, the requestor can supply the Replace parameter for each individual attribute. Setting this value to true causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes { 'a', '1' }, { 'b', '2'} and { 'b', '3' } and the requestor calls PutAttributes using the attributes { 'b', '4' } with the Replace parameter set to true, the final attributes of the item are changed to { 'a', '1' } and { 'b', '4' }, which replaces the previous values of the 'b' attribute with the new value.   Using PutAttributes to replace attribute values that do not exist will not result in an error response.   You cannot specify an empty string as an attribute name.   Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate GetAttributes or Select operation (read) immediately after a PutAttributes or DeleteAttributes operation (write) might not return the updated data.   The following limitations are enforced for this operation:  256 total attribute name-value pairs per item One billion attributes per domain 10 GB of total user data storage per domain  
   */
  putAttributes(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  The Select operation returns a set of attributes for ItemNames that match the select expression. Select is similar to the standard SQL SELECT statement.   The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate NextToken so the client can access the next page of results.   For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. 
   */
  select(params: SimpleDB.Types.SelectRequest, callback?: (err: AWSError, data: SimpleDB.Types.SelectResult) => void): Request<SimpleDB.Types.SelectResult, AWSError>;
  /**
   *  The Select operation returns a set of attributes for ItemNames that match the select expression. Select is similar to the standard SQL SELECT statement.   The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate NextToken so the client can access the next page of results.   For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. 
   */
  select(callback?: (err: AWSError, data: SimpleDB.Types.SelectResult) => void): Request<SimpleDB.Types.SelectResult, AWSError>;
}
declare namespace SimpleDB {
  export interface Attribute {
    /**
     * The name of the attribute.
     */
    Name: String;
    /**
     * 
     */
    AlternateNameEncoding?: String;
    /**
     * The value of the attribute.
     */
    Value: String;
    /**
     * 
     */
    AlternateValueEncoding?: String;
  }
  export type AttributeList = Attribute[];
  export type AttributeNameList = String[];
  export interface BatchDeleteAttributesRequest {
    /**
     * The name of the domain in which the attributes are being deleted.
     */
    DomainName: String;
    /**
     * A list of items on which to perform the operation.
     */
    Items: DeletableItemList;
  }
  export interface BatchPutAttributesRequest {
    /**
     * The name of the domain in which the attributes are being stored.
     */
    DomainName: String;
    /**
     * A list of items on which to perform the operation.
     */
    Items: ReplaceableItemList;
  }
  export type Boolean = boolean;
  export interface CreateDomainRequest {
    /**
     * The name of the domain to create. The name can range between 3 and 255 characters and can contain the following characters: a-z, A-Z, 0-9, '_', '-', and '.'.
     */
    DomainName: String;
  }
  export interface DeletableAttribute {
    /**
     * The name of the attribute.
     */
    Name: String;
    /**
     * The value of the attribute.
     */
    Value?: String;
  }
  export type DeletableAttributeList = DeletableAttribute[];
  export interface DeletableItem {
    Name: String;
    Attributes?: DeletableAttributeList;
  }
  export type DeletableItemList = DeletableItem[];
  export interface DeleteAttributesRequest {
    /**
     * The name of the domain in which to perform the operation.
     */
    DomainName: String;
    /**
     * The name of the item. Similar to rows on a spreadsheet, items represent individual objects that contain one or more value-attribute pairs.
     */
    ItemName: String;
    /**
     * A list of Attributes. Similar to columns on a spreadsheet, attributes represent categories of data that can be assigned to items.
     */
    Attributes?: DeletableAttributeList;
    /**
     * The update condition which, if specified, determines whether the specified attributes will be deleted or not. The update condition must be satisfied in order for this request to be processed and the attributes to be deleted.
     */
    Expected?: UpdateCondition;
  }
  export interface DeleteDomainRequest {
    /**
     * The name of the domain to delete.
     */
    DomainName: String;
  }
  export interface DomainMetadataRequest {
    /**
     * The name of the domain for which to display the metadata of.
     */
    DomainName: String;
  }
  export interface DomainMetadataResult {
    /**
     * The number of all items in the domain.
     */
    ItemCount?: Integer;
    /**
     * The total size of all item names in the domain, in bytes.
     */
    ItemNamesSizeBytes?: Long;
    /**
     * The number of unique attribute names in the domain.
     */
    AttributeNameCount?: Integer;
    /**
     * The total size of all unique attribute names in the domain, in bytes.
     */
    AttributeNamesSizeBytes?: Long;
    /**
     * The number of all attribute name/value pairs in the domain.
     */
    AttributeValueCount?: Integer;
    /**
     * The total size of all attribute values in the domain, in bytes.
     */
    AttributeValuesSizeBytes?: Long;
    /**
     * The data and time when metadata was calculated, in Epoch (UNIX) seconds.
     */
    Timestamp?: Integer;
  }
  export type DomainNameList = String[];
  export type Float = number;
  export interface GetAttributesRequest {
    /**
     * The name of the domain in which to perform the operation.
     */
    DomainName: String;
    /**
     * The name of the item.
     */
    ItemName: String;
    /**
     * The names of the attributes.
     */
    AttributeNames?: AttributeNameList;
    /**
     * Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If true, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.
     */
    ConsistentRead?: Boolean;
  }
  export interface GetAttributesResult {
    /**
     * The list of attributes returned by the operation.
     */
    Attributes?: AttributeList;
  }
  export type Integer = number;
  export interface Item {
    /**
     * The name of the item.
     */
    Name: String;
    /**
     * 
     */
    AlternateNameEncoding?: String;
    /**
     * A list of attributes.
     */
    Attributes: AttributeList;
  }
  export type ItemList = Item[];
  export interface ListDomainsRequest {
    /**
     * The maximum number of domain names you want returned. The range is 1 to 100. The default setting is 100.
     */
    MaxNumberOfDomains?: Integer;
    /**
     * A string informing Amazon SimpleDB where to start the next list of domain names.
     */
    NextToken?: String;
  }
  export interface ListDomainsResult {
    /**
     * A list of domain names that match the expression.
     */
    DomainNames?: DomainNameList;
    /**
     * An opaque token indicating that there are more domains than the specified MaxNumberOfDomains still available.
     */
    NextToken?: String;
  }
  export type Long = number;
  export interface PutAttributesRequest {
    /**
     * The name of the domain in which to perform the operation.
     */
    DomainName: String;
    /**
     * The name of the item.
     */
    ItemName: String;
    /**
     * The list of attributes.
     */
    Attributes: ReplaceableAttributeList;
    /**
     * The update condition which, if specified, determines whether the specified attributes will be updated or not. The update condition must be satisfied in order for this request to be processed and the attributes to be updated.
     */
    Expected?: UpdateCondition;
  }
  export interface ReplaceableAttribute {
    /**
     * The name of the replaceable attribute.
     */
    Name: String;
    /**
     * The value of the replaceable attribute.
     */
    Value: String;
    /**
     * A flag specifying whether or not to replace the attribute/value pair or to add a new attribute/value pair. The default setting is false.
     */
    Replace?: Boolean;
  }
  export type ReplaceableAttributeList = ReplaceableAttribute[];
  export interface ReplaceableItem {
    /**
     * The name of the replaceable item.
     */
    Name: String;
    /**
     * The list of attributes for a replaceable item.
     */
    Attributes: ReplaceableAttributeList;
  }
  export type ReplaceableItemList = ReplaceableItem[];
  export interface SelectRequest {
    /**
     * The expression used to query the domain.
     */
    SelectExpression: String;
    /**
     * A string informing Amazon SimpleDB where to start the next list of ItemNames.
     */
    NextToken?: String;
    /**
     * Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If true, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.
     */
    ConsistentRead?: Boolean;
  }
  export interface SelectResult {
    /**
     * A list of items that match the select expression.
     */
    Items?: ItemList;
    /**
     * An opaque token indicating that more items than MaxNumberOfItems were matched, the response size exceeded 1 megabyte, or the execution time exceeded 5 seconds.
     */
    NextToken?: String;
  }
  export type String = string;
  export interface UpdateCondition {
    /**
     * The name of the attribute involved in the condition.
     */
    Name?: String;
    /**
     * The value of an attribute. This value can only be specified when the Exists parameter is equal to true.
     */
    Value?: String;
    /**
     * A value specifying whether or not the specified attribute must exist with the specified value in order for the update condition to be satisfied. Specify true if the attribute must exist for the update condition to be satisfied. Specify false if the attribute should not exist in order for the update condition to be satisfied.
     */
    Exists?: Boolean;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2009-04-15"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SimpleDB client.
   */
  export import Types = SimpleDB;
}
export = SimpleDB;
