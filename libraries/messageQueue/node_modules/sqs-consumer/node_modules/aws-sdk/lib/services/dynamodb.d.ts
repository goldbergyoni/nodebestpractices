import {Service} from '../service';
import {DocumentClient as DDBDocumentClient} from '../dynamodb/document_client';
export class DynamoDBCustomizations extends Service {
    /**
     * The document client simplifies working with items in Amazon DynamoDB by abstracting away the notion of attribute values.
     * This abstraction annotates native JavaScript types supplied as input parameters, as well as converts annotated response data to native JavaScript types.
     */
    static DocumentClient: typeof DDBDocumentClient;
}