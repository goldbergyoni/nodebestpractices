import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MarketplaceEntitlementService extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MarketplaceEntitlementService.Types.ClientConfiguration)
  config: Config & MarketplaceEntitlementService.Types.ClientConfiguration;
  /**
   * GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
   */
  getEntitlements(params: MarketplaceEntitlementService.Types.GetEntitlementsRequest, callback?: (err: AWSError, data: MarketplaceEntitlementService.Types.GetEntitlementsResult) => void): Request<MarketplaceEntitlementService.Types.GetEntitlementsResult, AWSError>;
  /**
   * GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
   */
  getEntitlements(callback?: (err: AWSError, data: MarketplaceEntitlementService.Types.GetEntitlementsResult) => void): Request<MarketplaceEntitlementService.Types.GetEntitlementsResult, AWSError>;
}
declare namespace MarketplaceEntitlementService {
  export type Boolean = boolean;
  export type Double = number;
  export interface Entitlement {
    /**
     * The product code for which the given entitlement applies. Product codes are provided by AWS Marketplace when the product listing is created.
     */
    ProductCode?: ProductCode;
    /**
     * The dimension for which the given entitlement applies. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace.
     */
    Dimension?: NonEmptyString;
    /**
     * The customer identifier is a handle to each unique customer in an application. Customer identifiers are obtained through the ResolveCustomer operation in AWS Marketplace Metering Service.
     */
    CustomerIdentifier?: NonEmptyString;
    /**
     * The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.
     */
    Value?: EntitlementValue;
    /**
     * The expiration date represents the minimum date through which this entitlement is expected to remain valid. For contractual products listed on AWS Marketplace, the expiration date is the date at which the customer will renew or cancel their contract. Customers who are opting to renew their contract will still have entitlements with an expiration date.
     */
    ExpirationDate?: Timestamp;
  }
  export type EntitlementList = Entitlement[];
  export interface EntitlementValue {
    /**
     * The IntegerValue field will be populated with an integer value when the entitlement is an integer type. Otherwise, the field will not be set.
     */
    IntegerValue?: Integer;
    /**
     * The DoubleValue field will be populated with a double value when the entitlement is a double type. Otherwise, the field will not be set.
     */
    DoubleValue?: Double;
    /**
     * The BooleanValue field will be populated with a boolean value when the entitlement is a boolean type. Otherwise, the field will not be set.
     */
    BooleanValue?: Boolean;
    /**
     * The StringValue field will be populated with a string value when the entitlement is a string type. Otherwise, the field will not be set.
     */
    StringValue?: String;
  }
  export type ErrorMessage = string;
  export type FilterValue = string;
  export type FilterValueList = FilterValue[];
  export type GetEntitlementFilterName = "CUSTOMER_IDENTIFIER"|"DIMENSION"|string;
  export type GetEntitlementFilters = {[key: string]: FilterValueList};
  export interface GetEntitlementsRequest {
    /**
     * Product code is used to uniquely identify a product in AWS Marketplace. The product code will be provided by AWS Marketplace when the product listing is created.
     */
    ProductCode: ProductCode;
    /**
     * Filter is used to return entitlements for a specific customer or for a specific dimension. Filters are described as keys mapped to a lists of values. Filtered requests are unioned for each value in the value list, and then intersected for each filter key.
     */
    Filter?: GetEntitlementFilters;
    /**
     * For paginated calls to GetEntitlements, pass the NextToken from the previous GetEntitlementsResult.
     */
    NextToken?: NonEmptyString;
    /**
     * The maximum number of items to retrieve from the GetEntitlements operation. For pagination, use the NextToken field in subsequent calls to GetEntitlements.
     */
    MaxResults?: Integer;
  }
  export interface GetEntitlementsResult {
    /**
     * The set of entitlements found through the GetEntitlements operation. If the result contains an empty set of entitlements, NextToken might still be present and should be used.
     */
    Entitlements?: EntitlementList;
    /**
     * For paginated results, use NextToken in subsequent calls to GetEntitlements. If the result contains an empty set of entitlements, NextToken might still be present and should be used.
     */
    NextToken?: NonEmptyString;
  }
  export type Integer = number;
  export type NonEmptyString = string;
  export type ProductCode = string;
  export type String = string;
  export type Timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-01-11"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MarketplaceEntitlementService client.
   */
  export import Types = MarketplaceEntitlementService;
}
export = MarketplaceEntitlementService;
