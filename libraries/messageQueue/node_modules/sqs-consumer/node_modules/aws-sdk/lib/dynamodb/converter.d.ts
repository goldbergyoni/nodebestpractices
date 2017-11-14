import DynamoDB = require('../../clients/dynamodb');

export class Converter {
    static input(
        data: any,
        options?: Converter.ConverterOptions
    ): DynamoDB.AttributeValue;

    static marshall(
        data: {[key: string]: any},
        options?: Converter.ConverterOptions
    ): DynamoDB.AttributeMap;

    static output(
        data: DynamoDB.AttributeValue,
        options?: Converter.ConverterOptions
    ): any;

    static unmarshall(
        data: DynamoDB.AttributeMap,
        options?: Converter.ConverterOptions
    ): {[key: string]: any};
}

export namespace Converter {
    export type ConverterOptions = DynamoDB.DocumentClient.ConverterOptions;
}
