import DynamoDB = require('../../clients/dynamodb');
import * as stream from 'stream';
import {Request} from '../request';
import {AWSError} from '../error';

interface File {}
interface Blob {}

/**
 * The document client simplifies working with items in Amazon DynamoDB
 * by abstracting away the notion of attribute values. This abstraction
 * annotates native JavaScript types supplied as input parameters, as well
 * as converts annotated response data to native JavaScript types.
 */
export class DocumentClient {
    /**
     * Creates a DynamoDB document client with a set of configuration options.
     */
    constructor(options?: DocumentClient.DocumentClientOptions & DynamoDB.Types.ClientConfiguration)

    /**
     * Creates a set of elements inferring the type of set from the type of the first element. Amazon DynamoDB currently supports the number sets, string sets, and binary sets. For more information about DynamoDB data types see the documentation on the Amazon DynamoDB Data Model.
     */
    createSet(list: number[]|string[]|DocumentClient.binaryType[], options?: DocumentClient.CreateSetOptions): DocumentClient.DynamoDbSet;
    /**
     * Returns the attributes of one or more items from one or more tables by delegating to AWS.DynamoDB.batchGetItem().
     */
    batchGet(params: DocumentClient.BatchGetItemInput, callback?: (err: AWSError, data: DocumentClient.BatchGetItemOutput) => void): Request<DocumentClient.BatchGetItemOutput, AWSError>;
    /**
     * Puts or deletes multiple items in one or more tables by delegating to AWS.DynamoDB.batchWriteItem().
     */
    batchWrite(params: DocumentClient.BatchWriteItemInput, callback?: (err: AWSError, data: DocumentClient.BatchWriteItemOutput) => void): Request<DocumentClient.BatchWriteItemOutput, AWSError>;
    /**
     * Deletes a single item in a table by primary key by delegating to AWS.DynamoDB.deleteItem().
     */
    delete(params: DocumentClient.DeleteItemInput, callback?: (err: AWSError, data: DocumentClient.DeleteItemOutput) => void): Request<DocumentClient.DeleteItemOutput, AWSError>;
    /**
     * Returns a set of attributes for the item with the given primary key by delegating to AWS.DynamoDB.getItem().
     */
    get(params: DocumentClient.GetItemInput, callback?: (err: AWSError, data: DocumentClient.GetItemOutput) => void): Request<DocumentClient.GetItemOutput, AWSError>;
    /**
     * Creates a new item, or replaces an old item with a new item by delegating to AWS.DynamoDB.putItem().
     */
    put(params: DocumentClient.PutItemInput, callback?: (err: AWSError, data: DocumentClient.PutItemOutput) => void): Request<DocumentClient.PutItemOutput, AWSError>;
    /**
     * Directly access items from a table by primary key or a secondary index.
     */
    query(params: DocumentClient.QueryInput, callback?: (err: AWSError, data: DocumentClient.QueryOutput) => void): Request<DocumentClient.QueryOutput, AWSError>;
    /**
     * Returns one or more items and item attributes by accessing every item in a table or a secondary index.
     */
    scan(params: DocumentClient.ScanInput, callback?: (err: AWSError, data: DocumentClient.ScanOutput) => void): Request<DocumentClient.ScanOutput, AWSError>;
    /**
     * Edits an existing item's attributes, or adds a new item to the table if it does not already exist by delegating to AWS.DynamoDB.updateItem().
     */
    update(params: DocumentClient.UpdateItemInput, callback?: (err: AWSError, data: DocumentClient.UpdateItemOutput) => void): Request<DocumentClient.UpdateItemOutput, AWSError>;
}

export namespace DocumentClient {
    interface ConverterOptions {
        /**
         * An optional flag indicating that the document client should cast
         * empty strings, buffers, and sets to NULL shapes
         */
        convertEmptyValues?: boolean;

        /**
         * Whether to return numbers as a NumberValue object instead of
         * converting them to native JavaScript numbers. This allows for the
         * safe round-trip transport of numbers of arbitrary size.
         */
        wrapNumbers?: boolean;
    }

    export interface DocumentClientOptions extends ConverterOptions {
        /**
         * An optional map of parameters to bind to every request sent by this service object.
         */
        params?: {[key: string]: any}
        /**
         * An optional pre-configured instance of the AWS.DynamoDB service object to use for requests. The object may bound parameters used by the document client.
         */
        service?: DynamoDB
    }

    export interface CreateSetOptions {
        /**
         * Set to true if you want to validate the type of each element in the set. Defaults to false.
         */
        validate?: boolean
    }

    export type binaryType = Buffer|File|Blob|ArrayBuffer|DataView|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|stream.Stream;

    interface StringSet {
        type: 'String';
        values: Array<string>;
    }

    interface NumberSet {
        type: 'Number';
        values: Array<number>;
    }

    interface BinarySet {
        type: 'Binary';
        values: Array<binaryType>;
    }

    export type DynamoDbSet = StringSet|NumberSet|BinarySet;
}

export namespace DocumentClient {
  //<!--auto-generated start-->
  interface Blob {}
  export type AttributeAction = "ADD"|"PUT"|"DELETE"|string;
  export interface AttributeDefinition {
    /**
     * A name for the attribute.
     */
    AttributeName: KeySchemaAttributeName;
    /**
     * The data type for the attribute, where:    S - the attribute is of type String    N - the attribute is of type Number    B - the attribute is of type Binary  
     */
    AttributeType: ScalarAttributeType;
  }
  export type AttributeDefinitions = AttributeDefinition[];
  export type AttributeMap = {[key: string]: AttributeValue};
  export type AttributeName = string;
  export type AttributeNameList = AttributeName[];
  export type AttributeUpdates = {[key: string]: AttributeValueUpdate};
  /**
   * A JavaScript object or native type.
   */
  export type AttributeValue = any;
  export type AttributeValueList = AttributeValue[];
  export interface AttributeValueUpdate {
    /**
     * Represents the data for an attribute. Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself. For more information, see Data TYpes in the Amazon DynamoDB Developer Guide. 
     */
    Value?: AttributeValue;
    /**
     * Specifies how to perform the update. Valid values are PUT (default), DELETE, and ADD. The behavior depends on whether the specified primary key already exists in the table.  If an item with the specified Key is found in the table:     PUT - Adds the specified attribute to the item. If the attribute already exists, it is replaced by the new value.     DELETE - If no value is specified, the attribute and its value are removed from the item. The data type of the specified value must match the existing value's data type. If a set of values is specified, then those values are subtracted from the old set. For example, if the attribute value was the set [a,b,c] and the DELETE action specified [a,c], then the final attribute value would be [b]. Specifying an empty set is an error.    ADD - If the attribute does not already exist, then the attribute and its values are added to the item. If the attribute does exist, then the behavior of ADD depends on the data type of the attribute:   If the existing attribute is a number, and if Value is also a number, then the Value is mathematically added to the existing attribute. If Value is a negative number, then it is subtracted from the existing attribute.   If you use ADD to increment or decrement a number value for an item that doesn't exist before the update, DynamoDB uses 0 as the initial value. In addition, if you use ADD to update an existing item, and intend to increment or decrement an attribute value which does not yet exist, DynamoDB uses 0 as the initial value. For example, suppose that the item you want to update does not yet have an attribute named itemcount, but you decide to ADD the number 3 to this attribute anyway, even though it currently does not exist. DynamoDB will create the itemcount attribute, set its initial value to 0, and finally add 3 to it. The result will be a new itemcount attribute in the item, with a value of 3.    If the existing data type is a set, and if the Value is also a set, then the Value is added to the existing set. (This is a set operation, not mathematical addition.) For example, if the attribute value was the set [1,2], and the ADD action specified [3], then the final attribute value would be [1,2,3]. An error occurs if an Add action is specified for a set attribute and the attribute type specified does not match the existing set type.  Both sets must have the same primitive data type. For example, if the existing data type is a set of strings, the Value must also be a set of strings. The same holds true for number sets and binary sets.   This action is only valid for an existing attribute whose data type is number or is a set. Do not use ADD for any other data types.    If no item with the specified Key is found:     PUT - DynamoDB creates a new item with the specified primary key, and then adds the attribute.     DELETE - Nothing happens; there is no attribute to delete.    ADD - DynamoDB creates an item with the supplied primary key and number (or set of numbers) for the attribute value. The only data types allowed are number and number set; no other data types can be specified.  
     */
    Action?: AttributeAction;
  }
  export type Backfilling = boolean;
  export interface BatchGetItemInput {
    /**
     * A map of one or more table names and, for each table, a map that describes one or more items to retrieve from that table. Each table name can be used only once per BatchGetItem request. Each element in the map of items to retrieve consists of the following:    ConsistentRead - If true, a strongly consistent read is used; if false (the default), an eventually consistent read is used.    ExpressionAttributeNames - One or more substitution tokens for attribute names in the ProjectionExpression parameter. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.    Keys - An array of primary key attribute values that define specific items in the table. For each primary key, you must provide all of the key attributes. For example, with a simple primary key, you only need to provide the partition key value. For a composite key, you must provide both the partition key value and the sort key value.    ProjectionExpression - A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result. For more information, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.    AttributesToGet - This is a legacy parameter. Use ProjectionExpression instead. For more information, see AttributesToGet in the Amazon DynamoDB Developer Guide.   
     */
    RequestItems: BatchGetRequestMap;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
  }
  export interface BatchGetItemOutput {
    /**
     * A map of table name to a list of items. Each object in Responses consists of a table name, along with a map of attribute data consisting of the data type and attribute value.
     */
    Responses?: BatchGetResponseMap;
    /**
     * A map of tables and their respective keys that were not processed with the current response. The UnprocessedKeys value is in the same form as RequestItems, so the value can be provided directly to a subsequent BatchGetItem operation. For more information, see RequestItems in the Request Parameters section. Each element consists of:    Keys - An array of primary key attribute values that define specific items in the table.    ProjectionExpression - One or more attributes to be retrieved from the table or index. By default, all attributes are returned. If a requested attribute is not found, it does not appear in the result.    ConsistentRead - The consistency of a read operation. If set to true, then a strongly consistent read is used; otherwise, an eventually consistent read is used.   If there are no unprocessed keys remaining, the response contains an empty UnprocessedKeys map.
     */
    UnprocessedKeys?: BatchGetRequestMap;
    /**
     * The read capacity units consumed by the entire BatchGetItem operation. Each element consists of:    TableName - The table that consumed the provisioned throughput.    CapacityUnits - The total number of capacity units consumed.  
     */
    ConsumedCapacity?: ConsumedCapacityMultiple;
  }
  export type BatchGetRequestMap = {[key: string]: KeysAndAttributes};
  export type BatchGetResponseMap = {[key: string]: ItemList};
  export interface BatchWriteItemInput {
    /**
     * A map of one or more table names and, for each table, a list of operations to be performed (DeleteRequest or PutRequest). Each element in the map consists of the following:    DeleteRequest - Perform a DeleteItem operation on the specified item. The item to be deleted is identified by a Key subelement:    Key - A map of primary key attribute values that uniquely identify the item. Each entry in this map consists of an attribute name and an attribute value. For each primary key, you must provide all of the key attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.      PutRequest - Perform a PutItem operation on the specified item. The item to be put is identified by an Item subelement:    Item - A map of attributes and their values. Each entry in this map consists of an attribute name and an attribute value. Attribute values must not be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests that contain empty values will be rejected with a ValidationException exception. If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.    
     */
    RequestItems: BatchWriteItemRequestMap;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to NONE (the default), no statistics are returned.
     */
    ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
  }
  export interface BatchWriteItemOutput {
    /**
     * A map of tables and requests against those tables that were not processed. The UnprocessedItems value is in the same form as RequestItems, so you can provide this value directly to a subsequent BatchGetItem operation. For more information, see RequestItems in the Request Parameters section. Each UnprocessedItems entry consists of a table name and, for that table, a list of operations to perform (DeleteRequest or PutRequest).    DeleteRequest - Perform a DeleteItem operation on the specified item. The item to be deleted is identified by a Key subelement:    Key - A map of primary key attribute values that uniquely identify the item. Each entry in this map consists of an attribute name and an attribute value.      PutRequest - Perform a PutItem operation on the specified item. The item to be put is identified by an Item subelement:    Item - A map of attributes and their values. Each entry in this map consists of an attribute name and an attribute value. Attribute values must not be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests that contain empty values will be rejected with a ValidationException exception. If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.     If there are no unprocessed items remaining, the response contains an empty UnprocessedItems map.
     */
    UnprocessedItems?: BatchWriteItemRequestMap;
    /**
     * A list of tables that were processed by BatchWriteItem and, for each table, information about any item collections that were affected by individual DeleteItem or PutItem operations. Each entry consists of the following subelements:    ItemCollectionKey - The partition key value of the item collection. This is the same as the partition key value of the item.    SizeEstimateRange - An estimate of item collection size, expressed in GB. This is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on the table. Use this estimate to measure whether a local secondary index is approaching its size limit. The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.  
     */
    ItemCollectionMetrics?: ItemCollectionMetricsPerTable;
    /**
     * The capacity units consumed by the entire BatchWriteItem operation. Each element consists of:    TableName - The table that consumed the provisioned throughput.    CapacityUnits - The total number of capacity units consumed.  
     */
    ConsumedCapacity?: ConsumedCapacityMultiple;
  }
  export type BatchWriteItemRequestMap = {[key: string]: WriteRequests};
  export type BinaryAttributeValue = Buffer|Uint8Array|Blob|string;
  export type BinarySetAttributeValue = BinaryAttributeValue[];
  export type BooleanAttributeValue = boolean;
  export type BooleanObject = boolean;
  export interface Capacity {
    /**
     * The total number of capacity units consumed on a table or an index.
     */
    CapacityUnits?: ConsumedCapacityUnits;
  }
  export type ComparisonOperator = "EQ"|"NE"|"IN"|"LE"|"LT"|"GE"|"GT"|"BETWEEN"|"NOT_NULL"|"NULL"|"CONTAINS"|"NOT_CONTAINS"|"BEGINS_WITH"|string;
  export interface Condition {
    /**
     * One or more values to evaluate against the supplied attribute. The number of values in the list depends on the ComparisonOperator being used. For type Number, value comparisons are numeric. String value comparisons for greater than, equals, or less than are based on ASCII character code values. For example, a is greater than A, and a is greater than B. For a list of code values, see http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters. For Binary, DynamoDB treats each byte of the binary data as unsigned when it compares binary values.
     */
    AttributeValueList?: AttributeValueList;
    /**
     * A comparator for evaluating attributes. For example, equals, greater than, less than, etc. The following comparison operators are available:  EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH | IN | BETWEEN  The following are descriptions of each comparison operator.    EQ : Equal. EQ is supported for all data types, including lists and maps.  AttributeValueList can contain only one AttributeValue element of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not equal {"NS":["6", "2", "1"]}.     NE : Not equal. NE is supported for all data types, including lists and maps.  AttributeValueList can contain only one AttributeValue of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an AttributeValue of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not equal {"NS":["6", "2", "1"]}.     LE : Less than or equal.   AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     LT : Less than.   AttributeValueList can contain only one AttributeValue of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     GE : Greater than or equal.   AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     GT : Greater than.   AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     NOT_NULL : The attribute exists. NOT_NULL is supported for all data types, including lists and maps.  This operator tests for the existence of an attribute, not its data type. If the data type of attribute "a" is null, and you evaluate it using NOT_NULL, the result is a Boolean true. This result is because the attribute "a" exists; its data type is not relevant to the NOT_NULL comparison operator.     NULL : The attribute does not exist. NULL is supported for all data types, including lists and maps.  This operator tests for the nonexistence of an attribute, not its data type. If the data type of attribute "a" is null, and you evaluate it using NULL, the result is a Boolean false. This is because the attribute "a" exists; its data type is not relevant to the NULL comparison operator.     CONTAINS : Checks for a subsequence, or value in a set.  AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is of type String, then the operator checks for a substring match. If the target attribute of the comparison is of type Binary, then the operator looks for a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("SS", "NS", or "BS"), then the operator evaluates to true if it finds an exact match with any member of the set. CONTAINS is supported for lists: When evaluating "a CONTAINS b", "a" can be a list; however, "b" cannot be a set, a map, or a list.    NOT_CONTAINS : Checks for absence of a subsequence, or absence of a value in a set.  AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is a String, then the operator checks for the absence of a substring match. If the target attribute of the comparison is Binary, then the operator checks for the absence of a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("SS", "NS", or "BS"), then the operator evaluates to true if it does not find an exact match with any member of the set. NOT_CONTAINS is supported for lists: When evaluating "a NOT CONTAINS b", "a" can be a list; however, "b" cannot be a set, a map, or a list.    BEGINS_WITH : Checks for a prefix.   AttributeValueList can contain only one AttributeValue of type String or Binary (not a Number or a set type). The target attribute of the comparison must be of type String or Binary (not a Number or a set type).     IN : Checks for matching elements in a list.  AttributeValueList can contain one or more AttributeValue elements of type String, Number, or Binary. These attributes are compared against an existing attribute of an item. If any elements of the input are equal to the item attribute, the expression evaluates to true.    BETWEEN : Greater than or equal to the first value, and less than or equal to the second value.   AttributeValueList must contain two AttributeValue elements of the same type, either String, Number, or Binary (not a set type). A target attribute matches if the target value is greater than, or equal to, the first element and less than, or equal to, the second element. If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not compare to {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}    For usage examples of AttributeValueList and ComparisonOperator, see Legacy Conditional Parameters in the Amazon DynamoDB Developer Guide.
     */
    ComparisonOperator: ComparisonOperator;
  }
  export type ConditionExpression = string;
  export type ConditionalOperator = "AND"|"OR"|string;
  export type ConsistentRead = boolean;
  export interface ConsumedCapacity {
    /**
     * The name of the table that was affected by the operation.
     */
    TableName?: TableName;
    /**
     * The total number of capacity units consumed by the operation.
     */
    CapacityUnits?: ConsumedCapacityUnits;
    /**
     * The amount of throughput consumed on the table affected by the operation.
     */
    Table?: Capacity;
    /**
     * The amount of throughput consumed on each local index affected by the operation.
     */
    LocalSecondaryIndexes?: SecondaryIndexesCapacityMap;
    /**
     * The amount of throughput consumed on each global index affected by the operation.
     */
    GlobalSecondaryIndexes?: SecondaryIndexesCapacityMap;
  }
  export type ConsumedCapacityMultiple = ConsumedCapacity[];
  export type ConsumedCapacityUnits = number;
  export interface CreateGlobalSecondaryIndexAction {
    /**
     * The name of the global secondary index to be created.
     */
    IndexName: IndexName;
    /**
     * The key schema for the global secondary index.
     */
    KeySchema: KeySchema;
    /**
     * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
     */
    Projection: Projection;
    /**
     * Represents the provisioned throughput settings for the specified global secondary index. For current minimum and maximum provisioned throughput values, see Limits in the Amazon DynamoDB Developer Guide.
     */
    ProvisionedThroughput: ProvisionedThroughput;
  }
  export interface CreateTableInput {
    /**
     * An array of attributes that describe the key schema for the table and indexes.
     */
    AttributeDefinitions: AttributeDefinitions;
    /**
     * The name of the table to create.
     */
    TableName: TableName;
    /**
     * Specifies the attributes that make up the primary key for a table or an index. The attributes in KeySchema must also be defined in the AttributeDefinitions array. For more information, see Data Model in the Amazon DynamoDB Developer Guide. Each KeySchemaElement in the array is composed of:    AttributeName - The name of this key attribute.    KeyType - The role that the key attribute will assume:    HASH - partition key    RANGE - sort key      The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB' usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.  For a simple primary key (partition key), you must provide exactly one element with a KeyType of HASH. For a composite primary key (partition key and sort key), you must provide exactly two elements, in this order: The first element must have a KeyType of HASH, and the second element must have a KeyType of RANGE. For more information, see Specifying the Primary Key in the Amazon DynamoDB Developer Guide.
     */
    KeySchema: KeySchema;
    /**
     * One or more local secondary indexes (the maximum is five) to be created on the table. Each index is scoped to a given partition key value. There is a 10 GB size limit per partition key value; otherwise, the size of a local secondary index is unconstrained. Each local secondary index in the array includes the following:    IndexName - The name of the local secondary index. Must be unique only for this table.     KeySchema - Specifies the key schema for the local secondary index. The key schema must begin with the same partition key as the table.    Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:    ProjectionType - One of the following:    KEYS_ONLY - Only the index and primary keys are projected into the index.    INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes are in NonKeyAttributes.    ALL - All of the table attributes are projected into the index.      NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 20. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.    
     */
    LocalSecondaryIndexes?: LocalSecondaryIndexList;
    /**
     * One or more global secondary indexes (the maximum is five) to be created on the table. Each global secondary index in the array includes the following:    IndexName - The name of the global secondary index. Must be unique only for this table.     KeySchema - Specifies the key schema for the global secondary index.    Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:    ProjectionType - One of the following:    KEYS_ONLY - Only the index and primary keys are projected into the index.    INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes are in NonKeyAttributes.    ALL - All of the table attributes are projected into the index.      NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 20. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.      ProvisionedThroughput - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units.  
     */
    GlobalSecondaryIndexes?: GlobalSecondaryIndexList;
    /**
     * Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the UpdateTable operation. For current minimum and maximum provisioned throughput values, see Limits in the Amazon DynamoDB Developer Guide.
     */
    ProvisionedThroughput: ProvisionedThroughput;
    /**
     * The settings for DynamoDB Streams on the table. These settings consist of:    StreamEnabled - Indicates whether Streams is to be enabled (true) or disabled (false).    StreamViewType - When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values for StreamViewType are:    KEYS_ONLY - Only the key attributes of the modified item are written to the stream.    NEW_IMAGE - The entire item, as it appears after it was modified, is written to the stream.    OLD_IMAGE - The entire item, as it appeared before it was modified, is written to the stream.    NEW_AND_OLD_IMAGES - Both the new and the old item images of the item are written to the stream.    
     */
    StreamSpecification?: StreamSpecification;
  }
  export interface CreateTableOutput {
    /**
     * Represents the properties of the table.
     */
    TableDescription?: TableDescription;
  }
  export type _Date = Date;
  export interface DeleteGlobalSecondaryIndexAction {
    /**
     * The name of the global secondary index to be deleted.
     */
    IndexName: IndexName;
  }
  export interface DeleteItemInput {
    /**
     * The name of the table from which to delete the item.
     */
    TableName: TableName;
    /**
     * A map of attribute names to AttributeValue objects, representing the primary key of the item to delete. For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.
     */
    Key: Key;
    /**
     * This is a legacy parameter. Use ConditionExpression instead. For more information, see Expected in the Amazon DynamoDB Developer Guide.
     */
    Expected?: ExpectedAttributeMap;
    /**
     * This is a legacy parameter. Use ConditionExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide.
     */
    ConditionalOperator?: ConditionalOperator;
    /**
     * Use ReturnValues if you want to get the item attributes as they appeared before they were deleted. For DeleteItem, the valid values are:    NONE - If ReturnValues is not specified, or if its value is NONE, then nothing is returned. (This setting is the default for ReturnValues.)    ALL_OLD - The content of the old item is returned.    The ReturnValues parameter is used by several DynamoDB operations; however, DeleteItem does not recognize any values other than NONE or ALL_OLD. 
     */
    ReturnValues?: ReturnValue;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to NONE (the default), no statistics are returned.
     */
    ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
    /**
     * A condition that must be satisfied in order for a conditional DeleteItem to succeed. An expression can contain any of the following:   Functions: attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size  These function names are case-sensitive.   Comparison operators: = | &lt;&gt; | &lt; | &gt; | &lt;= | &gt;= | BETWEEN | IN      Logical operators: AND | OR | NOT    For more information on condition expressions, see Specifying Conditions in the Amazon DynamoDB Developer Guide.
     */
    ConditionExpression?: ConditionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Specifying Conditions in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
  }
  export interface DeleteItemOutput {
    /**
     * A map of attribute names to AttributeValue objects, representing the item as it appeared before the DeleteItem operation. This map appears in the response only if ReturnValues was specified as ALL_OLD in the request.
     */
    Attributes?: AttributeMap;
    /**
     * The capacity units consumed by the DeleteItem operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. ConsumedCapacity is only returned if the ReturnConsumedCapacity parameter was specified. For more information, see Provisioned Throughput in the Amazon DynamoDB Developer Guide.
     */
    ConsumedCapacity?: ConsumedCapacity;
    /**
     * Information about item collections, if any, that were affected by the DeleteItem operation. ItemCollectionMetrics is only returned if the ReturnItemCollectionMetrics parameter was specified. If the table does not have any local secondary indexes, this information is not returned in the response. Each ItemCollectionMetrics element consists of:    ItemCollectionKey - The partition key value of the item collection. This is the same as the partition key value of the item itself.    SizeEstimateRange - An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit. The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.  
     */
    ItemCollectionMetrics?: ItemCollectionMetrics;
  }
  export interface DeleteRequest {
    /**
     * A map of attribute name to attribute values, representing the primary key of the item to delete. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema.
     */
    Key: Key;
  }
  export interface DeleteTableInput {
    /**
     * The name of the table to delete.
     */
    TableName: TableName;
  }
  export interface DeleteTableOutput {
    /**
     * Represents the properties of a table.
     */
    TableDescription?: TableDescription;
  }
  export interface DescribeLimitsInput {
  }
  export interface DescribeLimitsOutput {
    /**
     * The maximum total read capacity units that your account allows you to provision across all of your tables in this region.
     */
    AccountMaxReadCapacityUnits?: PositiveLongObject;
    /**
     * The maximum total write capacity units that your account allows you to provision across all of your tables in this region.
     */
    AccountMaxWriteCapacityUnits?: PositiveLongObject;
    /**
     * The maximum read capacity units that your account allows you to provision for a new table that you are creating in this region, including the read capacity units provisioned for its global secondary indexes (GSIs).
     */
    TableMaxReadCapacityUnits?: PositiveLongObject;
    /**
     * The maximum write capacity units that your account allows you to provision for a new table that you are creating in this region, including the write capacity units provisioned for its global secondary indexes (GSIs).
     */
    TableMaxWriteCapacityUnits?: PositiveLongObject;
  }
  export interface DescribeTableInput {
    /**
     * The name of the table to describe.
     */
    TableName: TableName;
  }
  export interface DescribeTableOutput {
    /**
     * The properties of the table.
     */
    Table?: TableDescription;
  }
  export interface DescribeTimeToLiveInput {
    /**
     * The name of the table to be described.
     */
    TableName: TableName;
  }
  export interface DescribeTimeToLiveOutput {
    /**
     * 
     */
    TimeToLiveDescription?: TimeToLiveDescription;
  }
  export type ErrorMessage = string;
  export type ExpectedAttributeMap = {[key: string]: ExpectedAttributeValue};
  export interface ExpectedAttributeValue {
    /**
     * Represents the data for the expected attribute. Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself. For more information, see Data Types in the Amazon DynamoDB Developer Guide.
     */
    Value?: AttributeValue;
    /**
     * Causes DynamoDB to evaluate the value before attempting a conditional operation:   If Exists is true, DynamoDB will check to see if that attribute value already exists in the table. If it is found, then the operation succeeds. If it is not found, the operation fails with a ConditionalCheckFailedException.   If Exists is false, DynamoDB assumes that the attribute value does not exist in the table. If in fact the value does not exist, then the assumption is valid and the operation succeeds. If the value is found, despite the assumption that it does not exist, the operation fails with a ConditionalCheckFailedException.   The default setting for Exists is true. If you supply a Value all by itself, DynamoDB assumes the attribute exists: You don't have to set Exists to true, because it is implied. DynamoDB returns a ValidationException if:    Exists is true but there is no Value to check. (You expect a value to exist, but don't specify what that value is.)    Exists is false but you also provide a Value. (You cannot expect an attribute to have a value, while also expecting it not to exist.)  
     */
    Exists?: BooleanObject;
    /**
     * A comparator for evaluating attributes in the AttributeValueList. For example, equals, greater than, less than, etc. The following comparison operators are available:  EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH | IN | BETWEEN  The following are descriptions of each comparison operator.    EQ : Equal. EQ is supported for all data types, including lists and maps.  AttributeValueList can contain only one AttributeValue element of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not equal {"NS":["6", "2", "1"]}.     NE : Not equal. NE is supported for all data types, including lists and maps.  AttributeValueList can contain only one AttributeValue of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an AttributeValue of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not equal {"NS":["6", "2", "1"]}.     LE : Less than or equal.   AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     LT : Less than.   AttributeValueList can contain only one AttributeValue of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     GE : Greater than or equal.   AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     GT : Greater than.   AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     NOT_NULL : The attribute exists. NOT_NULL is supported for all data types, including lists and maps.  This operator tests for the existence of an attribute, not its data type. If the data type of attribute "a" is null, and you evaluate it using NOT_NULL, the result is a Boolean true. This result is because the attribute "a" exists; its data type is not relevant to the NOT_NULL comparison operator.     NULL : The attribute does not exist. NULL is supported for all data types, including lists and maps.  This operator tests for the nonexistence of an attribute, not its data type. If the data type of attribute "a" is null, and you evaluate it using NULL, the result is a Boolean false. This is because the attribute "a" exists; its data type is not relevant to the NULL comparison operator.     CONTAINS : Checks for a subsequence, or value in a set.  AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is of type String, then the operator checks for a substring match. If the target attribute of the comparison is of type Binary, then the operator looks for a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("SS", "NS", or "BS"), then the operator evaluates to true if it finds an exact match with any member of the set. CONTAINS is supported for lists: When evaluating "a CONTAINS b", "a" can be a list; however, "b" cannot be a set, a map, or a list.    NOT_CONTAINS : Checks for absence of a subsequence, or absence of a value in a set.  AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is a String, then the operator checks for the absence of a substring match. If the target attribute of the comparison is Binary, then the operator checks for the absence of a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("SS", "NS", or "BS"), then the operator evaluates to true if it does not find an exact match with any member of the set. NOT_CONTAINS is supported for lists: When evaluating "a NOT CONTAINS b", "a" can be a list; however, "b" cannot be a set, a map, or a list.    BEGINS_WITH : Checks for a prefix.   AttributeValueList can contain only one AttributeValue of type String or Binary (not a Number or a set type). The target attribute of the comparison must be of type String or Binary (not a Number or a set type).     IN : Checks for matching elements in a list.  AttributeValueList can contain one or more AttributeValue elements of type String, Number, or Binary. These attributes are compared against an existing attribute of an item. If any elements of the input are equal to the item attribute, the expression evaluates to true.    BETWEEN : Greater than or equal to the first value, and less than or equal to the second value.   AttributeValueList must contain two AttributeValue elements of the same type, either String, Number, or Binary (not a set type). A target attribute matches if the target value is greater than, or equal to, the first element and less than, or equal to, the second element. If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not compare to {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}   
     */
    ComparisonOperator?: ComparisonOperator;
    /**
     * One or more values to evaluate against the supplied attribute. The number of values in the list depends on the ComparisonOperator being used. For type Number, value comparisons are numeric. String value comparisons for greater than, equals, or less than are based on ASCII character code values. For example, a is greater than A, and a is greater than B. For a list of code values, see http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters. For Binary, DynamoDB treats each byte of the binary data as unsigned when it compares binary values. For information on specifying data types in JSON, see JSON Data Format in the Amazon DynamoDB Developer Guide.
     */
    AttributeValueList?: AttributeValueList;
  }
  export type ExpressionAttributeNameMap = {[key: string]: AttributeName};
  export type ExpressionAttributeNameVariable = string;
  export type ExpressionAttributeValueMap = {[key: string]: AttributeValue};
  export type ExpressionAttributeValueVariable = string;
  export type FilterConditionMap = {[key: string]: Condition};
  export interface GetItemInput {
    /**
     * The name of the table containing the requested item.
     */
    TableName: TableName;
    /**
     * A map of attribute names to AttributeValue objects, representing the primary key of the item to retrieve. For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.
     */
    Key: Key;
    /**
     * This is a legacy parameter. Use ProjectionExpression instead. For more information, see AttributesToGet in the Amazon DynamoDB Developer Guide.
     */
    AttributesToGet?: AttributeNameList;
    /**
     * Determines the read consistency model: If set to true, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads.
     */
    ConsistentRead?: ConsistentRead;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result. For more information, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ProjectionExpression?: ProjectionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
  }
  export interface GetItemOutput {
    /**
     * A map of attribute names to AttributeValue objects, as specified by ProjectionExpression.
     */
    Item?: AttributeMap;
    /**
     * The capacity units consumed by the GetItem operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. ConsumedCapacity is only returned if the ReturnConsumedCapacity parameter was specified. For more information, see Provisioned Throughput in the Amazon DynamoDB Developer Guide.
     */
    ConsumedCapacity?: ConsumedCapacity;
  }
  export interface GlobalSecondaryIndex {
    /**
     * The name of the global secondary index. The name must be unique among all other indexes on this table.
     */
    IndexName: IndexName;
    /**
     * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB' usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. 
     */
    KeySchema: KeySchema;
    /**
     * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. 
     */
    Projection: Projection;
    /**
     * Represents the provisioned throughput settings for the specified global secondary index. For current minimum and maximum provisioned throughput values, see Limits in the Amazon DynamoDB Developer Guide.
     */
    ProvisionedThroughput: ProvisionedThroughput;
  }
  export interface GlobalSecondaryIndexDescription {
    /**
     * The name of the global secondary index.
     */
    IndexName?: IndexName;
    /**
     * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB' usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. 
     */
    KeySchema?: KeySchema;
    /**
     * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. 
     */
    Projection?: Projection;
    /**
     * The current state of the global secondary index:    CREATING - The index is being created.    UPDATING - The index is being updated.    DELETING - The index is being deleted.    ACTIVE - The index is ready for use.  
     */
    IndexStatus?: IndexStatus;
    /**
     * Indicates whether the index is currently backfilling. Backfilling is the process of reading items from the table and determining whether they can be added to the index. (Not all items will qualify: For example, a partition key cannot have any duplicate values.) If an item can be added to the index, DynamoDB will do so. After all items have been processed, the backfilling operation is complete and Backfilling is false.  For indexes that were created during a CreateTable operation, the Backfilling attribute does not appear in the DescribeTable output. 
     */
    Backfilling?: Backfilling;
    /**
     * Represents the provisioned throughput settings for the specified global secondary index. For current minimum and maximum provisioned throughput values, see Limits in the Amazon DynamoDB Developer Guide.
     */
    ProvisionedThroughput?: ProvisionedThroughputDescription;
    /**
     * The total size of the specified index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
     */
    IndexSizeBytes?: Long;
    /**
     * The number of items in the specified index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
     */
    ItemCount?: Long;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the index.
     */
    IndexArn?: String;
  }
  export type GlobalSecondaryIndexDescriptionList = GlobalSecondaryIndexDescription[];
  export type GlobalSecondaryIndexList = GlobalSecondaryIndex[];
  export interface GlobalSecondaryIndexUpdate {
    /**
     * The name of an existing global secondary index, along with new provisioned throughput settings to be applied to that index.
     */
    Update?: UpdateGlobalSecondaryIndexAction;
    /**
     * The parameters required for creating a global secondary index on an existing table:    IndexName      KeySchema      AttributeDefinitions      Projection      ProvisionedThroughput    
     */
    Create?: CreateGlobalSecondaryIndexAction;
    /**
     * The name of an existing global secondary index to be removed.
     */
    Delete?: DeleteGlobalSecondaryIndexAction;
  }
  export type GlobalSecondaryIndexUpdateList = GlobalSecondaryIndexUpdate[];
  export type IndexName = string;
  export type IndexStatus = "CREATING"|"UPDATING"|"DELETING"|"ACTIVE"|string;
  export type Integer = number;
  export type ItemCollectionKeyAttributeMap = {[key: string]: AttributeValue};
  export interface ItemCollectionMetrics {
    /**
     * The partition key value of the item collection. This value is the same as the partition key value of the item.
     */
    ItemCollectionKey?: ItemCollectionKeyAttributeMap;
    /**
     * An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit. The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.
     */
    SizeEstimateRangeGB?: ItemCollectionSizeEstimateRange;
  }
  export type ItemCollectionMetricsMultiple = ItemCollectionMetrics[];
  export type ItemCollectionMetricsPerTable = {[key: string]: ItemCollectionMetricsMultiple};
  export type ItemCollectionSizeEstimateBound = number;
  export type ItemCollectionSizeEstimateRange = ItemCollectionSizeEstimateBound[];
  export type ItemList = AttributeMap[];
  export type Key = {[key: string]: AttributeValue};
  export type KeyConditions = {[key: string]: Condition};
  export type KeyExpression = string;
  export type KeyList = Key[];
  export type KeySchema = KeySchemaElement[];
  export type KeySchemaAttributeName = string;
  export interface KeySchemaElement {
    /**
     * The name of a key attribute.
     */
    AttributeName: KeySchemaAttributeName;
    /**
     * The role that this key attribute will assume:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB' usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. 
     */
    KeyType: KeyType;
  }
  export type KeyType = "HASH"|"RANGE"|string;
  export interface KeysAndAttributes {
    /**
     * The primary key attribute values that define the items and the attributes associated with the items.
     */
    Keys: KeyList;
    /**
     * This is a legacy parameter. Use ProjectionExpression instead. For more information, see Legacy Conditional Parameters in the Amazon DynamoDB Developer Guide.
     */
    AttributesToGet?: AttributeNameList;
    /**
     * The consistency of a read operation. If set to true, then a strongly consistent read is used; otherwise, an eventually consistent read is used.
     */
    ConsistentRead?: ConsistentRead;
    /**
     * A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the ProjectionExpression must be separated by commas. If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result. For more information, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ProjectionExpression?: ProjectionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
  }
  export type ListAttributeValue = AttributeValue[];
  export interface ListTablesInput {
    /**
     * The first table name that this operation will evaluate. Use the value that was returned for LastEvaluatedTableName in a previous operation, so that you can obtain the next page of results.
     */
    ExclusiveStartTableName?: TableName;
    /**
     * A maximum number of table names to return. If this parameter is not specified, the limit is 100.
     */
    Limit?: ListTablesInputLimit;
  }
  export type ListTablesInputLimit = number;
  export interface ListTablesOutput {
    /**
     * The names of the tables associated with the current account at the current endpoint. The maximum size of this array is 100. If LastEvaluatedTableName also appears in the output, you can use this value as the ExclusiveStartTableName parameter in a subsequent ListTables request and obtain the next page of results.
     */
    TableNames?: TableNameList;
    /**
     * The name of the last table in the current page of results. Use this value as the ExclusiveStartTableName in a new request to obtain the next page of results, until all the table names are returned. If you do not receive a LastEvaluatedTableName value in the response, this means that there are no more table names to be retrieved.
     */
    LastEvaluatedTableName?: TableName;
  }
  export interface ListTagsOfResourceInput {
    /**
     * The Amazon DynamoDB resource with tags to be listed. This value is an Amazon Resource Name (ARN).
     */
    ResourceArn: ResourceArnString;
    /**
     * An optional string that, if supplied, must be copied from the output of a previous call to ListTagOfResource. When provided in this manner, this API fetches the next page of results.
     */
    NextToken?: NextTokenString;
  }
  export interface ListTagsOfResourceOutput {
    /**
     * The tags currently associated with the Amazon DynamoDB resource.
     */
    Tags?: TagList;
    /**
     * If this value is returned, there are additional results to be displayed. To retrieve them, call ListTagsOfResource again, with NextToken set to this value.
     */
    NextToken?: NextTokenString;
  }
  export interface LocalSecondaryIndex {
    /**
     * The name of the local secondary index. The name must be unique among all other indexes on this table.
     */
    IndexName: IndexName;
    /**
     * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB' usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. 
     */
    KeySchema: KeySchema;
    /**
     * Represents attributes that are copied (projected) from the table into the local secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. 
     */
    Projection: Projection;
  }
  export interface LocalSecondaryIndexDescription {
    /**
     * Represents the name of the local secondary index.
     */
    IndexName?: IndexName;
    /**
     * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB' usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. 
     */
    KeySchema?: KeySchema;
    /**
     * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. 
     */
    Projection?: Projection;
    /**
     * The total size of the specified index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
     */
    IndexSizeBytes?: Long;
    /**
     * The number of items in the specified index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
     */
    ItemCount?: Long;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the index.
     */
    IndexArn?: String;
  }
  export type LocalSecondaryIndexDescriptionList = LocalSecondaryIndexDescription[];
  export type LocalSecondaryIndexList = LocalSecondaryIndex[];
  export type Long = number;
  export type MapAttributeValue = {[key: string]: AttributeValue};
  export type NextTokenString = string;
  export type NonKeyAttributeName = string;
  export type NonKeyAttributeNameList = NonKeyAttributeName[];
  export type NullAttributeValue = boolean;
  export type NumberAttributeValue = string;
  export type NumberSetAttributeValue = NumberAttributeValue[];
  export type PositiveIntegerObject = number;
  export type PositiveLongObject = number;
  export interface Projection {
    /**
     * The set of attributes that are projected into the index:    KEYS_ONLY - Only the index and primary keys are projected into the index.    INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes are in NonKeyAttributes.    ALL - All of the table attributes are projected into the index.  
     */
    ProjectionType?: ProjectionType;
    /**
     * Represents the non-key attribute names which will be projected into the index. For local secondary indexes, the total count of NonKeyAttributes summed across all of the local secondary indexes, must not exceed 20. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.
     */
    NonKeyAttributes?: NonKeyAttributeNameList;
  }
  export type ProjectionExpression = string;
  export type ProjectionType = "ALL"|"KEYS_ONLY"|"INCLUDE"|string;
  export interface ProvisionedThroughput {
    /**
     * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ThrottlingException. For more information, see Specifying Read and Write Requirements in the Amazon DynamoDB Developer Guide.
     */
    ReadCapacityUnits: PositiveLongObject;
    /**
     * The maximum number of writes consumed per second before DynamoDB returns a ThrottlingException. For more information, see Specifying Read and Write Requirements in the Amazon DynamoDB Developer Guide.
     */
    WriteCapacityUnits: PositiveLongObject;
  }
  export interface ProvisionedThroughputDescription {
    /**
     * The date and time of the last provisioned throughput increase for this table.
     */
    LastIncreaseDateTime?: _Date;
    /**
     * The date and time of the last provisioned throughput decrease for this table.
     */
    LastDecreaseDateTime?: _Date;
    /**
     * The number of provisioned throughput decreases for this table during this UTC calendar day. For current maximums on provisioned throughput decreases, see Limits in the Amazon DynamoDB Developer Guide.
     */
    NumberOfDecreasesToday?: PositiveLongObject;
    /**
     * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ThrottlingException. Eventually consistent reads require less effort than strongly consistent reads, so a setting of 50 ReadCapacityUnits per second provides 100 eventually consistent ReadCapacityUnits per second.
     */
    ReadCapacityUnits?: PositiveLongObject;
    /**
     * The maximum number of writes consumed per second before DynamoDB returns a ThrottlingException.
     */
    WriteCapacityUnits?: PositiveLongObject;
  }
  export interface PutItemInput {
    /**
     * The name of the table to contain the item.
     */
    TableName: TableName;
    /**
     * A map of attribute name/value pairs, one for each attribute. Only the primary key attributes are required; you can optionally provide other attribute name-value pairs for the item. You must provide all of the attributes for the primary key. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide both values for both the partition key and the sort key. If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition. For more information about primary keys, see Primary Key in the Amazon DynamoDB Developer Guide. Each element in the Item map is an AttributeValue object.
     */
    Item: PutItemInputAttributeMap;
    /**
     * This is a legacy parameter. Use ConditionExpression instead. For more information, see Expected in the Amazon DynamoDB Developer Guide.
     */
    Expected?: ExpectedAttributeMap;
    /**
     * Use ReturnValues if you want to get the item attributes as they appeared before they were updated with the PutItem request. For PutItem, the valid values are:    NONE - If ReturnValues is not specified, or if its value is NONE, then nothing is returned. (This setting is the default for ReturnValues.)    ALL_OLD - If PutItem overwrote an attribute name-value pair, then the content of the old item is returned.    The ReturnValues parameter is used by several DynamoDB operations; however, PutItem does not recognize any values other than NONE or ALL_OLD. 
     */
    ReturnValues?: ReturnValue;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to NONE (the default), no statistics are returned.
     */
    ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
    /**
     * This is a legacy parameter. Use ConditionExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide.
     */
    ConditionalOperator?: ConditionalOperator;
    /**
     * A condition that must be satisfied in order for a conditional PutItem operation to succeed. An expression can contain any of the following:   Functions: attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size  These function names are case-sensitive.   Comparison operators: = | &lt;&gt; | &lt; | &gt; | &lt;= | &gt;= | BETWEEN | IN      Logical operators: AND | OR | NOT    For more information on condition expressions, see Specifying Conditions in the Amazon DynamoDB Developer Guide.
     */
    ConditionExpression?: ConditionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Specifying Conditions in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
  }
  export type PutItemInputAttributeMap = {[key: string]: AttributeValue};
  export interface PutItemOutput {
    /**
     * The attribute values as they appeared before the PutItem operation, but only if ReturnValues is specified as ALL_OLD in the request. Each element consists of an attribute name and an attribute value.
     */
    Attributes?: AttributeMap;
    /**
     * The capacity units consumed by the PutItem operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. ConsumedCapacity is only returned if the ReturnConsumedCapacity parameter was specified. For more information, see Provisioned Throughput in the Amazon DynamoDB Developer Guide.
     */
    ConsumedCapacity?: ConsumedCapacity;
    /**
     * Information about item collections, if any, that were affected by the PutItem operation. ItemCollectionMetrics is only returned if the ReturnItemCollectionMetrics parameter was specified. If the table does not have any local secondary indexes, this information is not returned in the response. Each ItemCollectionMetrics element consists of:    ItemCollectionKey - The partition key value of the item collection. This is the same as the partition key value of the item itself.    SizeEstimateRange - An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit. The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.  
     */
    ItemCollectionMetrics?: ItemCollectionMetrics;
  }
  export interface PutRequest {
    /**
     * A map of attribute name to attribute values, representing the primary key of an item to be processed by PutItem. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema. If any attributes are present in the item which are part of an index key schema for the table, their types must match the index key schema.
     */
    Item: PutItemInputAttributeMap;
  }
  export interface QueryInput {
    /**
     * The name of the table containing the requested items.
     */
    TableName: TableName;
    /**
     * The name of an index to query. This index can be any local secondary index or global secondary index on the table. Note that if you use the IndexName parameter, you must also provide TableName. 
     */
    IndexName?: IndexName;
    /**
     * The attributes to be returned in the result. You can retrieve all item attributes, specific item attributes, the count of matching items, or in the case of an index, some or all of the attributes projected into the index.    ALL_ATTRIBUTES - Returns all of the item attributes from the specified table or index. If you query a local secondary index, then for each matching item in the index DynamoDB will fetch the entire item from the parent table. If the index is configured to project all item attributes, then all of the data can be obtained from the local secondary index, and no fetching is required.    ALL_PROJECTED_ATTRIBUTES - Allowed only when querying an index. Retrieves all attributes that have been projected into the index. If the index is configured to project all attributes, this return value is equivalent to specifying ALL_ATTRIBUTES.    COUNT - Returns the number of matching items, rather than the matching items themselves.    SPECIFIC_ATTRIBUTES - Returns only the attributes listed in AttributesToGet. This return value is equivalent to specifying AttributesToGet without specifying any value for Select. If you query or scan a local secondary index and request only attributes that are projected into that index, the operation will read only the index and not the table. If any of the requested attributes are not projected into the local secondary index, DynamoDB will fetch each of these attributes from the parent table. This extra fetching incurs additional throughput cost and latency. If you query or scan a global secondary index, you can only request attributes that are projected into the index. Global secondary index queries cannot fetch attributes from the parent table.   If neither Select nor AttributesToGet are specified, DynamoDB defaults to ALL_ATTRIBUTES when accessing a table, and ALL_PROJECTED_ATTRIBUTES when accessing an index. You cannot use both Select and AttributesToGet together in a single request, unless the value for Select is SPECIFIC_ATTRIBUTES. (This usage is equivalent to specifying AttributesToGet without any value for Select.)  If you use the ProjectionExpression parameter, then the value for Select can only be SPECIFIC_ATTRIBUTES. Any other value for Select will return an error. 
     */
    Select?: Select;
    /**
     * This is a legacy parameter. Use ProjectionExpression instead. For more information, see AttributesToGet in the Amazon DynamoDB Developer Guide.
     */
    AttributesToGet?: AttributeNameList;
    /**
     * The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, and a key in LastEvaluatedKey to apply in a subsequent operation, so that you can pick up where you left off. Also, if the processed data set size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in LastEvaluatedKey to apply in a subsequent operation to continue the operation. For more information, see Query and Scan in the Amazon DynamoDB Developer Guide.
     */
    Limit?: PositiveIntegerObject;
    /**
     * Determines the read consistency model: If set to true, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads. Strongly consistent reads are not supported on global secondary indexes. If you query a global secondary index with ConsistentRead set to true, you will receive a ValidationException.
     */
    ConsistentRead?: ConsistentRead;
    /**
     * This is a legacy parameter. Use KeyConditionExpression instead. For more information, see KeyConditions in the Amazon DynamoDB Developer Guide.
     */
    KeyConditions?: KeyConditions;
    /**
     * This is a legacy parameter. Use FilterExpression instead. For more information, see QueryFilter in the Amazon DynamoDB Developer Guide.
     */
    QueryFilter?: FilterConditionMap;
    /**
     * This is a legacy parameter. Use FilterExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide.
     */
    ConditionalOperator?: ConditionalOperator;
    /**
     * Specifies the order for index traversal: If true (default), the traversal is performed in ascending order; if false, the traversal is performed in descending order.  Items with the same partition key value are stored in sorted order by sort key. If the sort key data type is Number, the results are stored in numeric order. For type String, the results are stored in order of ASCII character code values. For type Binary, DynamoDB treats each byte of the binary data as unsigned. If ScanIndexForward is true, DynamoDB returns the results in the order in which they are stored (by sort key value). This is the default behavior. If ScanIndexForward is false, DynamoDB reads the results in reverse order by sort key value, and then returns the results to the client.
     */
    ScanIndexForward?: BooleanObject;
    /**
     * The primary key of the first item that this operation will evaluate. Use the value that was returned for LastEvaluatedKey in the previous operation. The data type for ExclusiveStartKey must be String, Number or Binary. No set data types are allowed.
     */
    ExclusiveStartKey?: Key;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result. For more information, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ProjectionExpression?: ProjectionExpression;
    /**
     * A string that contains conditions that DynamoDB applies after the Query operation, but before the data is returned to you. Items that do not satisfy the FilterExpression criteria are not returned. A FilterExpression does not allow key attributes. You cannot define a filter expression based on a partition key or a sort key.  A FilterExpression is applied after the items have already been read; the process of filtering does not consume any additional read capacity units.  For more information, see Filter Expressions in the Amazon DynamoDB Developer Guide.
     */
    FilterExpression?: ConditionExpression;
    /**
     * The condition that specifies the key value(s) for items to be retrieved by the Query action. The condition must perform an equality test on a single partition key value. The condition can also perform one of several comparison tests on a single sort key value. Query can use KeyConditionExpression to retrieve one item with a given partition key value and sort key value, or several items that have the same partition key value but different sort key values. The partition key equality test is required, and must be specified in the following format:  partitionKeyName = :partitionkeyval  If you also want to provide a condition for the sort key, it must be combined using AND with the condition for the sort key. Following is an example, using the = comparison operator for the sort key:  partitionKeyName = :partitionkeyval AND sortKeyName = :sortkeyval  Valid comparisons for the sort key condition are as follows:    sortKeyName = :sortkeyval - true if the sort key value is equal to :sortkeyval.    sortKeyName &lt; :sortkeyval - true if the sort key value is less than :sortkeyval.    sortKeyName &lt;= :sortkeyval - true if the sort key value is less than or equal to :sortkeyval.    sortKeyName &gt; :sortkeyval - true if the sort key value is greater than :sortkeyval.    sortKeyName &gt;=  :sortkeyval - true if the sort key value is greater than or equal to :sortkeyval.    sortKeyName BETWEEN :sortkeyval1 AND :sortkeyval2 - true if the sort key value is greater than or equal to :sortkeyval1, and less than or equal to :sortkeyval2.    begins_with ( sortKeyName, :sortkeyval ) - true if the sort key value begins with a particular operand. (You cannot use this function with a sort key that is of type Number.) Note that the function name begins_with is case-sensitive.   Use the ExpressionAttributeValues parameter to replace tokens such as :partitionval and :sortval with actual values at runtime. You can optionally use the ExpressionAttributeNames parameter to replace the names of the partition key and sort key with placeholder tokens. This option might be necessary if an attribute name conflicts with a DynamoDB reserved word. For example, the following KeyConditionExpression parameter causes an error because Size is a reserved word:    Size = :myval    To work around this, define a placeholder (such a #S) to represent the attribute name Size. KeyConditionExpression then is as follows:    #S = :myval    For a list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide. For more information on ExpressionAttributeNames and ExpressionAttributeValues, see Using Placeholders for Attribute Names and Values in the Amazon DynamoDB Developer Guide.
     */
    KeyConditionExpression?: KeyExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Specifying Conditions in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
  }
  export interface QueryOutput {
    /**
     * An array of item attributes that match the query criteria. Each element in this array consists of an attribute name and the value for that attribute.
     */
    Items?: ItemList;
    /**
     * The number of items in the response. If you used a QueryFilter in the request, then Count is the number of items returned after the filter was applied, and ScannedCount is the number of matching items before the filter was applied. If you did not use a filter in the request, then Count and ScannedCount are the same.
     */
    Count?: Integer;
    /**
     * The number of items evaluated, before any QueryFilter is applied. A high ScannedCount value with few, or no, Count results indicates an inefficient Query operation. For more information, see Count and ScannedCount in the Amazon DynamoDB Developer Guide. If you did not use a filter in the request, then ScannedCount is the same as Count.
     */
    ScannedCount?: Integer;
    /**
     * The primary key of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request. If LastEvaluatedKey is empty, then the "last page" of results has been processed and there is no more data to be retrieved. If LastEvaluatedKey is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when LastEvaluatedKey is empty.
     */
    LastEvaluatedKey?: Key;
    /**
     * The capacity units consumed by the Query operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. ConsumedCapacity is only returned if the ReturnConsumedCapacity parameter was specified For more information, see Provisioned Throughput in the Amazon DynamoDB Developer Guide.
     */
    ConsumedCapacity?: ConsumedCapacity;
  }
  export type ResourceArnString = string;
  export type ReturnConsumedCapacity = "INDEXES"|"TOTAL"|"NONE"|string;
  export type ReturnItemCollectionMetrics = "SIZE"|"NONE"|string;
  export type ReturnValue = "NONE"|"ALL_OLD"|"UPDATED_OLD"|"ALL_NEW"|"UPDATED_NEW"|string;
  export type ScalarAttributeType = "S"|"N"|"B"|string;
  export interface ScanInput {
    /**
     * The name of the table containing the requested items; or, if you provide IndexName, the name of the table to which that index belongs.
     */
    TableName: TableName;
    /**
     * The name of a secondary index to scan. This index can be any local secondary index or global secondary index. Note that if you use the IndexName parameter, you must also provide TableName.
     */
    IndexName?: IndexName;
    /**
     * This is a legacy parameter. Use ProjectionExpression instead. For more information, see AttributesToGet in the Amazon DynamoDB Developer Guide.
     */
    AttributesToGet?: AttributeNameList;
    /**
     * The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, and a key in LastEvaluatedKey to apply in a subsequent operation, so that you can pick up where you left off. Also, if the processed data set size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in LastEvaluatedKey to apply in a subsequent operation to continue the operation. For more information, see Query and Scan in the Amazon DynamoDB Developer Guide.
     */
    Limit?: PositiveIntegerObject;
    /**
     * The attributes to be returned in the result. You can retrieve all item attributes, specific item attributes, the count of matching items, or in the case of an index, some or all of the attributes projected into the index.    ALL_ATTRIBUTES - Returns all of the item attributes from the specified table or index. If you query a local secondary index, then for each matching item in the index DynamoDB will fetch the entire item from the parent table. If the index is configured to project all item attributes, then all of the data can be obtained from the local secondary index, and no fetching is required.    ALL_PROJECTED_ATTRIBUTES - Allowed only when querying an index. Retrieves all attributes that have been projected into the index. If the index is configured to project all attributes, this return value is equivalent to specifying ALL_ATTRIBUTES.    COUNT - Returns the number of matching items, rather than the matching items themselves.    SPECIFIC_ATTRIBUTES - Returns only the attributes listed in AttributesToGet. This return value is equivalent to specifying AttributesToGet without specifying any value for Select. If you query or scan a local secondary index and request only attributes that are projected into that index, the operation will read only the index and not the table. If any of the requested attributes are not projected into the local secondary index, DynamoDB will fetch each of these attributes from the parent table. This extra fetching incurs additional throughput cost and latency. If you query or scan a global secondary index, you can only request attributes that are projected into the index. Global secondary index queries cannot fetch attributes from the parent table.   If neither Select nor AttributesToGet are specified, DynamoDB defaults to ALL_ATTRIBUTES when accessing a table, and ALL_PROJECTED_ATTRIBUTES when accessing an index. You cannot use both Select and AttributesToGet together in a single request, unless the value for Select is SPECIFIC_ATTRIBUTES. (This usage is equivalent to specifying AttributesToGet without any value for Select.)  If you use the ProjectionExpression parameter, then the value for Select can only be SPECIFIC_ATTRIBUTES. Any other value for Select will return an error. 
     */
    Select?: Select;
    /**
     * This is a legacy parameter. Use FilterExpression instead. For more information, see ScanFilter in the Amazon DynamoDB Developer Guide.
     */
    ScanFilter?: FilterConditionMap;
    /**
     * This is a legacy parameter. Use FilterExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide.
     */
    ConditionalOperator?: ConditionalOperator;
    /**
     * The primary key of the first item that this operation will evaluate. Use the value that was returned for LastEvaluatedKey in the previous operation. The data type for ExclusiveStartKey must be String, Number or Binary. No set data types are allowed. In a parallel scan, a Scan request that includes ExclusiveStartKey must specify the same segment whose previous Scan returned the corresponding value of LastEvaluatedKey.
     */
    ExclusiveStartKey?: Key;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * For a parallel Scan request, TotalSegments represents the total number of segments into which the Scan operation will be divided. The value of TotalSegments corresponds to the number of application workers that will perform the parallel scan. For example, if you want to use four application threads to scan a table or an index, specify a TotalSegments value of 4. The value for TotalSegments must be greater than or equal to 1, and less than or equal to 1000000. If you specify a TotalSegments value of 1, the Scan operation will be sequential rather than parallel. If you specify TotalSegments, you must also specify Segment.
     */
    TotalSegments?: ScanTotalSegments;
    /**
     * For a parallel Scan request, Segment identifies an individual segment to be scanned by an application worker. Segment IDs are zero-based, so the first segment is always 0. For example, if you want to use four application threads to scan a table or an index, then the first thread specifies a Segment value of 0, the second thread specifies 1, and so on. The value of LastEvaluatedKey returned from a parallel Scan request must be used as ExclusiveStartKey with the same segment ID in a subsequent Scan operation. The value for Segment must be greater than or equal to 0, and less than the value provided for TotalSegments. If you provide Segment, you must also provide TotalSegments.
     */
    Segment?: ScanSegment;
    /**
     * A string that identifies one or more attributes to retrieve from the specified table or index. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result. For more information, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ProjectionExpression?: ProjectionExpression;
    /**
     * A string that contains conditions that DynamoDB applies after the Scan operation, but before the data is returned to you. Items that do not satisfy the FilterExpression criteria are not returned.  A FilterExpression is applied after the items have already been read; the process of filtering does not consume any additional read capacity units.  For more information, see Filter Expressions in the Amazon DynamoDB Developer Guide.
     */
    FilterExpression?: ConditionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Specifying Conditions in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
    /**
     * A Boolean value that determines the read consistency model during the scan:   If ConsistentRead is false, then the data returned from Scan might not contain the results from other recently completed write operations (PutItem, UpdateItem or DeleteItem).   If ConsistentRead is true, then all of the write operations that completed before the Scan began are guaranteed to be contained in the Scan response.   The default setting for ConsistentRead is false. The ConsistentRead parameter is not supported on global secondary indexes. If you scan a global secondary index with ConsistentRead set to true, you will receive a ValidationException.
     */
    ConsistentRead?: ConsistentRead;
  }
  export interface ScanOutput {
    /**
     * An array of item attributes that match the scan criteria. Each element in this array consists of an attribute name and the value for that attribute.
     */
    Items?: ItemList;
    /**
     * The number of items in the response. If you set ScanFilter in the request, then Count is the number of items returned after the filter was applied, and ScannedCount is the number of matching items before the filter was applied. If you did not use a filter in the request, then Count is the same as ScannedCount.
     */
    Count?: Integer;
    /**
     * The number of items evaluated, before any ScanFilter is applied. A high ScannedCount value with few, or no, Count results indicates an inefficient Scan operation. For more information, see Count and ScannedCount in the Amazon DynamoDB Developer Guide. If you did not use a filter in the request, then ScannedCount is the same as Count.
     */
    ScannedCount?: Integer;
    /**
     * The primary key of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request. If LastEvaluatedKey is empty, then the "last page" of results has been processed and there is no more data to be retrieved. If LastEvaluatedKey is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when LastEvaluatedKey is empty.
     */
    LastEvaluatedKey?: Key;
    /**
     * The capacity units consumed by the Scan operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. ConsumedCapacity is only returned if the ReturnConsumedCapacity parameter was specified. For more information, see Provisioned Throughput in the Amazon DynamoDB Developer Guide.
     */
    ConsumedCapacity?: ConsumedCapacity;
  }
  export type ScanSegment = number;
  export type ScanTotalSegments = number;
  export type SecondaryIndexesCapacityMap = {[key: string]: Capacity};
  export type Select = "ALL_ATTRIBUTES"|"ALL_PROJECTED_ATTRIBUTES"|"SPECIFIC_ATTRIBUTES"|"COUNT"|string;
  export type StreamArn = string;
  export type StreamEnabled = boolean;
  export interface StreamSpecification {
    /**
     * Indicates whether DynamoDB Streams is enabled (true) or disabled (false) on the table.
     */
    StreamEnabled?: StreamEnabled;
    /**
     *  When an item in the table is modified, StreamViewType determines what information is written to the stream for this table. Valid values for StreamViewType are:    KEYS_ONLY - Only the key attributes of the modified item are written to the stream.    NEW_IMAGE - The entire item, as it appears after it was modified, is written to the stream.    OLD_IMAGE - The entire item, as it appeared before it was modified, is written to the stream.    NEW_AND_OLD_IMAGES - Both the new and the old item images of the item are written to the stream.  
     */
    StreamViewType?: StreamViewType;
  }
  export type StreamViewType = "NEW_IMAGE"|"OLD_IMAGE"|"NEW_AND_OLD_IMAGES"|"KEYS_ONLY"|string;
  export type String = string;
  export type StringAttributeValue = string;
  export type StringSetAttributeValue = StringAttributeValue[];
  export interface TableDescription {
    /**
     * An array of AttributeDefinition objects. Each of these objects describes one attribute in the table and index key schema. Each AttributeDefinition object in this array is composed of:    AttributeName - The name of the attribute.    AttributeType - The data type for the attribute.  
     */
    AttributeDefinitions?: AttributeDefinitions;
    /**
     * The name of the table.
     */
    TableName?: TableName;
    /**
     * The primary key structure for the table. Each KeySchemaElement consists of:    AttributeName - The name of the attribute.    KeyType - The role of the attribute:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB' usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.    For more information about primary keys, see Primary Key in the Amazon DynamoDB Developer Guide.
     */
    KeySchema?: KeySchema;
    /**
     * The current state of the table:    CREATING - The table is being created.    UPDATING - The table is being updated.    DELETING - The table is being deleted.    ACTIVE - The table is ready for use.  
     */
    TableStatus?: TableStatus;
    /**
     * The date and time when the table was created, in UNIX epoch time format.
     */
    CreationDateTime?: _Date;
    /**
     * The provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.
     */
    ProvisionedThroughput?: ProvisionedThroughputDescription;
    /**
     * The total size of the specified table, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
     */
    TableSizeBytes?: Long;
    /**
     * The number of items in the specified table. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
     */
    ItemCount?: Long;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the table.
     */
    TableArn?: String;
    /**
     * Represents one or more local secondary indexes on the table. Each index is scoped to a given partition key value. Tables with one or more local secondary indexes are subject to an item collection size limit, where the amount of data within a given item collection cannot exceed 10 GB. Each element is composed of:    IndexName - The name of the local secondary index.    KeySchema - Specifies the complete index key schema. The attribute names in the key schema must be between 1 and 255 characters (inclusive). The key schema must begin with the same partition key as the table.    Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:    ProjectionType - One of the following:    KEYS_ONLY - Only the index and primary keys are projected into the index.    INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes are in NonKeyAttributes.    ALL - All of the table attributes are projected into the index.      NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 20. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.      IndexSizeBytes - Represents the total size of the index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.    ItemCount - Represents the number of items in the index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.   If the table is in the DELETING state, no information about indexes will be returned.
     */
    LocalSecondaryIndexes?: LocalSecondaryIndexDescriptionList;
    /**
     * The global secondary indexes, if any, on the table. Each index is scoped to a given partition key value. Each element is composed of:    Backfilling - If true, then the index is currently in the backfilling phase. Backfilling occurs only when a new global secondary index is added to the table; it is the process by which DynamoDB populates the new index with data from the table. (This attribute does not appear for indexes that were created during a CreateTable operation.)    IndexName - The name of the global secondary index.    IndexSizeBytes - The total size of the global secondary index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.     IndexStatus - The current status of the global secondary index:    CREATING - The index is being created.    UPDATING - The index is being updated.    DELETING - The index is being deleted.    ACTIVE - The index is ready for use.      ItemCount - The number of items in the global secondary index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.     KeySchema - Specifies the complete index key schema. The attribute names in the key schema must be between 1 and 255 characters (inclusive). The key schema must begin with the same partition key as the table.    Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:    ProjectionType - One of the following:    KEYS_ONLY - Only the index and primary keys are projected into the index.    INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes are in NonKeyAttributes.    ALL - All of the table attributes are projected into the index.      NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 20. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.      ProvisionedThroughput - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units, along with data about increases and decreases.    If the table is in the DELETING state, no information about indexes will be returned.
     */
    GlobalSecondaryIndexes?: GlobalSecondaryIndexDescriptionList;
    /**
     * The current DynamoDB Streams configuration for the table.
     */
    StreamSpecification?: StreamSpecification;
    /**
     * A timestamp, in ISO 8601 format, for this stream. Note that LatestStreamLabel is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique:   the AWS customer ID.   the table name.   the StreamLabel.  
     */
    LatestStreamLabel?: String;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the latest stream for this table.
     */
    LatestStreamArn?: StreamArn;
  }
  export type TableName = string;
  export type TableNameList = TableName[];
  export type TableStatus = "CREATING"|"UPDATING"|"DELETING"|"ACTIVE"|string;
  export interface Tag {
    /**
     * The key of the tag.Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value. 
     */
    Key: TagKeyString;
    /**
     * The value of the tag. Tag values are case-sensitive and can be null.
     */
    Value: TagValueString;
  }
  export type TagKeyList = TagKeyString[];
  export type TagKeyString = string;
  export type TagList = Tag[];
  export interface TagResourceInput {
    /**
     * Identifies the Amazon DynamoDB resource to which tags should be added. This value is an Amazon Resource Name (ARN).
     */
    ResourceArn: ResourceArnString;
    /**
     * The tags to be assigned to the Amazon DynamoDB resource.
     */
    Tags: TagList;
  }
  export type TagValueString = string;
  export type TimeToLiveAttributeName = string;
  export interface TimeToLiveDescription {
    /**
     *  The Time to Live status for the table.
     */
    TimeToLiveStatus?: TimeToLiveStatus;
    /**
     *  The name of the Time to Live attribute for items in the table.
     */
    AttributeName?: TimeToLiveAttributeName;
  }
  export type TimeToLiveEnabled = boolean;
  export interface TimeToLiveSpecification {
    /**
     * Indicates whether Time To Live is to be enabled (true) or disabled (false) on the table.
     */
    Enabled: TimeToLiveEnabled;
    /**
     * The name of the Time to Live attribute used to store the expiration time for items in the table.
     */
    AttributeName: TimeToLiveAttributeName;
  }
  export type TimeToLiveStatus = "ENABLING"|"DISABLING"|"ENABLED"|"DISABLED"|string;
  export interface UntagResourceInput {
    /**
     * The Amazon DyanamoDB resource the tags will be removed from. This value is an Amazon Resource Name (ARN).
     */
    ResourceArn: ResourceArnString;
    /**
     * A list of tag keys. Existing tags of the resource whose keys are members of this list will be removed from the Amazon DynamoDB resource.
     */
    TagKeys: TagKeyList;
  }
  export type UpdateExpression = string;
  export interface UpdateGlobalSecondaryIndexAction {
    /**
     * The name of the global secondary index to be updated.
     */
    IndexName: IndexName;
    /**
     * Represents the provisioned throughput settings for the specified global secondary index. For current minimum and maximum provisioned throughput values, see Limits in the Amazon DynamoDB Developer Guide.
     */
    ProvisionedThroughput: ProvisionedThroughput;
  }
  export interface UpdateItemInput {
    /**
     * The name of the table containing the item to update.
     */
    TableName: TableName;
    /**
     * The primary key of the item to be updated. Each element consists of an attribute name and a value for that attribute. For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.
     */
    Key: Key;
    /**
     * This is a legacy parameter. Use UpdateExpression instead. For more information, see AttributeUpdates in the Amazon DynamoDB Developer Guide.
     */
    AttributeUpdates?: AttributeUpdates;
    /**
     * This is a legacy parameter. Use ConditionExpression instead. For more information, see Expected in the Amazon DynamoDB Developer Guide.
     */
    Expected?: ExpectedAttributeMap;
    /**
     * This is a legacy parameter. Use ConditionExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide.
     */
    ConditionalOperator?: ConditionalOperator;
    /**
     * Use ReturnValues if you want to get the item attributes as they appear before or after they are updated. For UpdateItem, the valid values are:    NONE - If ReturnValues is not specified, or if its value is NONE, then nothing is returned. (This setting is the default for ReturnValues.)    ALL_OLD - Returns all of the attributes of the item, as they appeared before the UpdateItem operation.    UPDATED_OLD - Returns only the updated attributes, as they appeared before the UpdateItem operation.    ALL_NEW - Returns all of the attributes of the item, as they appear after the UpdateItem operation.    UPDATED_NEW - Returns only the updated attributes, as they appear after the UpdateItem operation.   There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed. The values returned are strongly consistent.
     */
    ReturnValues?: ReturnValue;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to NONE (the default), no statistics are returned.
     */
    ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
    /**
     * An expression that defines one or more attributes to be updated, the action to be performed on them, and new value(s) for them. The following action values are available for UpdateExpression.    SET - Adds one or more attributes and values to an item. If any of these attribute already exist, they are replaced by the new values. You can also use SET to add or subtract from an attribute that is of type Number. For example: SET myNum = myNum + :val   SET supports the following functions:    if_not_exists (path, operand) - if the item does not contain an attribute at the specified path, then if_not_exists evaluates to operand; otherwise, it evaluates to path. You can use this function to avoid overwriting an attribute that may already be present in the item.    list_append (operand, operand) - evaluates to a list with a new element added to it. You can append the new element to the start or the end of the list by reversing the order of the operands.   These function names are case-sensitive.    REMOVE - Removes one or more attributes from an item.    ADD - Adds the specified value to the item, if the attribute does not already exist. If the attribute does exist, then the behavior of ADD depends on the data type of the attribute:   If the existing attribute is a number, and if Value is also a number, then Value is mathematically added to the existing attribute. If Value is a negative number, then it is subtracted from the existing attribute.  If you use ADD to increment or decrement a number value for an item that doesn't exist before the update, DynamoDB uses 0 as the initial value. Similarly, if you use ADD for an existing item to increment or decrement an attribute value that doesn't exist before the update, DynamoDB uses 0 as the initial value. For example, suppose that the item you want to update doesn't have an attribute named itemcount, but you decide to ADD the number 3 to this attribute anyway. DynamoDB will create the itemcount attribute, set its initial value to 0, and finally add 3 to it. The result will be a new itemcount attribute in the item, with a value of 3.    If the existing data type is a set and if Value is also a set, then Value is added to the existing set. For example, if the attribute value is the set [1,2], and the ADD action specified [3], then the final attribute value is [1,2,3]. An error occurs if an ADD action is specified for a set attribute and the attribute type specified does not match the existing set type.  Both sets must have the same primitive data type. For example, if the existing data type is a set of strings, the Value must also be a set of strings.    The ADD action only supports Number and set data types. In addition, ADD can only be used on top-level attributes, not nested attributes.     DELETE - Deletes an element from a set. If a set of values is specified, then those values are subtracted from the old set. For example, if the attribute value was the set [a,b,c] and the DELETE action specifies [a,c], then the final attribute value is [b]. Specifying an empty set is an error.  The DELETE action only supports set data types. In addition, DELETE can only be used on top-level attributes, not nested attributes.    You can have many actions in a single expression, such as the following: SET a=:value1, b=:value2 DELETE :value3, :value4, :value5  For more information on update expressions, see Modifying Items and Attributes in the Amazon DynamoDB Developer Guide.
     */
    UpdateExpression?: UpdateExpression;
    /**
     * A condition that must be satisfied in order for a conditional update to succeed. An expression can contain any of the following:   Functions: attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size  These function names are case-sensitive.   Comparison operators: = | &lt;&gt; | &lt; | &gt; | &lt;= | &gt;= | BETWEEN | IN      Logical operators: AND | OR | NOT    For more information on condition expressions, see Specifying Conditions in the Amazon DynamoDB Developer Guide.
     */
    ConditionExpression?: ConditionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Specifying Conditions in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
  }
  export interface UpdateItemOutput {
    /**
     * A map of attribute values as they appear before or after the UpdateItem operation, as determined by the ReturnValues parameter. The Attributes map is only present if ReturnValues was specified as something other than NONE in the request. Each element represents one attribute.
     */
    Attributes?: AttributeMap;
    /**
     * The capacity units consumed by the UpdateItem operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. ConsumedCapacity is only returned if the ReturnConsumedCapacity parameter was specified. For more information, see Provisioned Throughput in the Amazon DynamoDB Developer Guide.
     */
    ConsumedCapacity?: ConsumedCapacity;
    /**
     * Information about item collections, if any, that were affected by the UpdateItem operation. ItemCollectionMetrics is only returned if the ReturnItemCollectionMetrics parameter was specified. If the table does not have any local secondary indexes, this information is not returned in the response. Each ItemCollectionMetrics element consists of:    ItemCollectionKey - The partition key value of the item collection. This is the same as the partition key value of the item itself.    SizeEstimateRange - An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit. The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.  
     */
    ItemCollectionMetrics?: ItemCollectionMetrics;
  }
  export interface UpdateTableInput {
    /**
     * An array of attributes that describe the key schema for the table and indexes. If you are adding a new global secondary index to the table, AttributeDefinitions must include the key element(s) of the new index.
     */
    AttributeDefinitions?: AttributeDefinitions;
    /**
     * The name of the table to be updated.
     */
    TableName: TableName;
    /**
     * The new provisioned throughput settings for the specified table or index.
     */
    ProvisionedThroughput?: ProvisionedThroughput;
    /**
     * An array of one or more global secondary indexes for the table. For each index in the array, you can request one action:    Create - add a new global secondary index to the table.    Update - modify the provisioned throughput settings of an existing global secondary index.    Delete - remove a global secondary index from the table.   For more information, see Managing Global Secondary Indexes in the Amazon DynamoDB Developer Guide. 
     */
    GlobalSecondaryIndexUpdates?: GlobalSecondaryIndexUpdateList;
    /**
     * Represents the DynamoDB Streams configuration for the table.  You will receive a ResourceInUseException if you attempt to enable a stream on a table that already has a stream, or if you attempt to disable a stream on a table which does not have a stream. 
     */
    StreamSpecification?: StreamSpecification;
  }
  export interface UpdateTableOutput {
    /**
     * Represents the properties of the table.
     */
    TableDescription?: TableDescription;
  }
  export interface UpdateTimeToLiveInput {
    /**
     * The name of the table to be configured.
     */
    TableName: TableName;
    /**
     * Represents the settings used to enable or disable Time to Live for the specified table.
     */
    TimeToLiveSpecification: TimeToLiveSpecification;
  }
  export interface UpdateTimeToLiveOutput {
    /**
     * Represents the output of an UpdateTimeToLive operation.
     */
    TimeToLiveSpecification?: TimeToLiveSpecification;
  }
  export interface WriteRequest {
    /**
     * A request to perform a PutItem operation.
     */
    PutRequest?: PutRequest;
    /**
     * A request to perform a DeleteItem operation.
     */
    DeleteRequest?: DeleteRequest;
  }
  export type WriteRequests = WriteRequest[];

  //<!--auto-generated end-->
}
