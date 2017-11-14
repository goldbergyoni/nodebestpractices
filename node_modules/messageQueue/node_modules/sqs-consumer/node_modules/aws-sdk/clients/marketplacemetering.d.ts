import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MarketplaceMetering extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MarketplaceMetering.Types.ClientConfiguration)
  config: Config & MarketplaceMetering.Types.ClientConfiguration;
  /**
   * BatchMeterUsage is called from a SaaS application listed on the AWS Marketplace to post metering records for a set of customers. For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records. Every request to BatchMeterUsage is for one product. If you need to meter usage for multiple products, you must make multiple calls to BatchMeterUsage. BatchMeterUsage can process up to 25 UsageRecords at a time.
   */
  batchMeterUsage(params: MarketplaceMetering.Types.BatchMeterUsageRequest, callback?: (err: AWSError, data: MarketplaceMetering.Types.BatchMeterUsageResult) => void): Request<MarketplaceMetering.Types.BatchMeterUsageResult, AWSError>;
  /**
   * BatchMeterUsage is called from a SaaS application listed on the AWS Marketplace to post metering records for a set of customers. For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records. Every request to BatchMeterUsage is for one product. If you need to meter usage for multiple products, you must make multiple calls to BatchMeterUsage. BatchMeterUsage can process up to 25 UsageRecords at a time.
   */
  batchMeterUsage(callback?: (err: AWSError, data: MarketplaceMetering.Types.BatchMeterUsageResult) => void): Request<MarketplaceMetering.Types.BatchMeterUsageResult, AWSError>;
  /**
   * API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID. MeterUsage is authenticated on the buyer's AWS account, generally when running from an EC2 instance on the AWS Marketplace.
   */
  meterUsage(params: MarketplaceMetering.Types.MeterUsageRequest, callback?: (err: AWSError, data: MarketplaceMetering.Types.MeterUsageResult) => void): Request<MarketplaceMetering.Types.MeterUsageResult, AWSError>;
  /**
   * API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID. MeterUsage is authenticated on the buyer's AWS account, generally when running from an EC2 instance on the AWS Marketplace.
   */
  meterUsage(callback?: (err: AWSError, data: MarketplaceMetering.Types.MeterUsageResult) => void): Request<MarketplaceMetering.Types.MeterUsageResult, AWSError>;
  /**
   * ResolveCustomer is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a CustomerIdentifier and product code.
   */
  resolveCustomer(params: MarketplaceMetering.Types.ResolveCustomerRequest, callback?: (err: AWSError, data: MarketplaceMetering.Types.ResolveCustomerResult) => void): Request<MarketplaceMetering.Types.ResolveCustomerResult, AWSError>;
  /**
   * ResolveCustomer is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a CustomerIdentifier and product code.
   */
  resolveCustomer(callback?: (err: AWSError, data: MarketplaceMetering.Types.ResolveCustomerResult) => void): Request<MarketplaceMetering.Types.ResolveCustomerResult, AWSError>;
}
declare namespace MarketplaceMetering {
  export interface BatchMeterUsageRequest {
    /**
     * The set of UsageRecords to submit. BatchMeterUsage accepts up to 25 UsageRecords at a time.
     */
    UsageRecords: UsageRecordList;
    /**
     * Product code is used to uniquely identify a product in AWS Marketplace. The product code should be the same as the one used during the publishing of a new product.
     */
    ProductCode: ProductCode;
  }
  export interface BatchMeterUsageResult {
    /**
     * Contains all UsageRecords processed by BatchMeterUsage. These records were either honored by AWS Marketplace Metering Service or were invalid.
     */
    Results?: UsageRecordResultList;
    /**
     * Contains all UsageRecords that were not processed by BatchMeterUsage. This is a list of UsageRecords. You can retry the failed request by making another BatchMeterUsage call with this list as input in the BatchMeterUsageRequest.
     */
    UnprocessedRecords?: UsageRecordList;
  }
  export type Boolean = boolean;
  export type CustomerIdentifier = string;
  export interface MeterUsageRequest {
    /**
     * Product code is used to uniquely identify a product in AWS Marketplace. The product code should be the same as the one used during the publishing of a new product.
     */
    ProductCode: ProductCode;
    /**
     * Timestamp of the hour, recorded in UTC. The seconds and milliseconds portions of the timestamp will be ignored.
     */
    Timestamp: Timestamp;
    /**
     * It will be one of the fcp dimension name provided during the publishing of the product.
     */
    UsageDimension: UsageDimension;
    /**
     * Consumption value for the hour.
     */
    UsageQuantity: UsageQuantity;
    /**
     * Checks whether you have the permissions required for the action, but does not make the request. If you have the permissions, the request returns DryRunOperation; otherwise, it returns UnauthorizedException.
     */
    DryRun: Boolean;
  }
  export interface MeterUsageResult {
    MeteringRecordId?: String;
  }
  export type NonEmptyString = string;
  export type ProductCode = string;
  export interface ResolveCustomerRequest {
    /**
     * When a buyer visits your website during the registration process, the buyer submits a registration token through the browser. The registration token is resolved to obtain a CustomerIdentifier and product code.
     */
    RegistrationToken: NonEmptyString;
  }
  export interface ResolveCustomerResult {
    /**
     * The CustomerIdentifier is used to identify an individual customer in your application. Calls to BatchMeterUsage require CustomerIdentifiers for each UsageRecord.
     */
    CustomerIdentifier?: CustomerIdentifier;
    /**
     * The product code is returned to confirm that the buyer is registering for your product. Subsequent BatchMeterUsage calls should be made using this product code.
     */
    ProductCode?: ProductCode;
  }
  export type String = string;
  export type Timestamp = Date;
  export type UsageDimension = string;
  export type UsageQuantity = number;
  export interface UsageRecord {
    /**
     * Timestamp of the hour, recorded in UTC. The seconds and milliseconds portions of the timestamp will be ignored. Your application can meter usage for up to one hour in the past.
     */
    Timestamp: Timestamp;
    /**
     * The CustomerIdentifier is obtained through the ResolveCustomer operation and represents an individual buyer in your application.
     */
    CustomerIdentifier: CustomerIdentifier;
    /**
     * During the process of registering a product on AWS Marketplace, up to eight dimensions are specified. These represent different units of value in your application.
     */
    Dimension: UsageDimension;
    /**
     * The quantity of usage consumed by the customer for the given dimension and time.
     */
    Quantity: UsageQuantity;
  }
  export type UsageRecordList = UsageRecord[];
  export interface UsageRecordResult {
    /**
     * The UsageRecord that was part of the BatchMeterUsage request.
     */
    UsageRecord?: UsageRecord;
    /**
     * The MeteringRecordId is a unique identifier for this metering event.
     */
    MeteringRecordId?: String;
    /**
     * The UsageRecordResult Status indicates the status of an individual UsageRecord processed by BatchMeterUsage.    Success- The UsageRecord was accepted and honored by BatchMeterUsage.    CustomerNotSubscribed- The CustomerIdentifier specified is not subscribed to your product. The UsageRecord was not honored. Future UsageRecords for this customer will fail until the customer subscribes to your product.    DuplicateRecord- Indicates that the UsageRecord was invalid and not honored. A previously metered UsageRecord had the same customer, dimension, and time, but a different quantity.  
     */
    Status?: UsageRecordResultStatus;
  }
  export type UsageRecordResultList = UsageRecordResult[];
  export type UsageRecordResultStatus = "Success"|"CustomerNotSubscribed"|"DuplicateRecord"|string;
  export type errorMessage = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-01-14"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MarketplaceMetering client.
   */
  export import Types = MarketplaceMetering;
}
export = MarketplaceMetering;
