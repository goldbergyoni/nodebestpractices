import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MarketplaceCommerceAnalytics extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MarketplaceCommerceAnalytics.Types.ClientConfiguration)
  config: Config & MarketplaceCommerceAnalytics.Types.ClientConfiguration;
  /**
   * Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
   */
  generateDataSet(params: MarketplaceCommerceAnalytics.Types.GenerateDataSetRequest, callback?: (err: AWSError, data: MarketplaceCommerceAnalytics.Types.GenerateDataSetResult) => void): Request<MarketplaceCommerceAnalytics.Types.GenerateDataSetResult, AWSError>;
  /**
   * Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
   */
  generateDataSet(callback?: (err: AWSError, data: MarketplaceCommerceAnalytics.Types.GenerateDataSetResult) => void): Request<MarketplaceCommerceAnalytics.Types.GenerateDataSetResult, AWSError>;
  /**
   * Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
   */
  startSupportDataExport(params: MarketplaceCommerceAnalytics.Types.StartSupportDataExportRequest, callback?: (err: AWSError, data: MarketplaceCommerceAnalytics.Types.StartSupportDataExportResult) => void): Request<MarketplaceCommerceAnalytics.Types.StartSupportDataExportResult, AWSError>;
  /**
   * Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
   */
  startSupportDataExport(callback?: (err: AWSError, data: MarketplaceCommerceAnalytics.Types.StartSupportDataExportResult) => void): Request<MarketplaceCommerceAnalytics.Types.StartSupportDataExportResult, AWSError>;
}
declare namespace MarketplaceCommerceAnalytics {
  export type CustomerDefinedValues = {[key: string]: OptionalValue};
  export type DataSetPublicationDate = Date;
  export type DataSetRequestId = string;
  export type DataSetType = "customer_subscriber_hourly_monthly_subscriptions"|"customer_subscriber_annual_subscriptions"|"daily_business_usage_by_instance_type"|"daily_business_fees"|"daily_business_free_trial_conversions"|"daily_business_new_instances"|"daily_business_new_product_subscribers"|"daily_business_canceled_product_subscribers"|"monthly_revenue_billing_and_revenue_data"|"monthly_revenue_annual_subscriptions"|"disbursed_amount_by_product"|"disbursed_amount_by_product_with_uncollected_funds"|"disbursed_amount_by_instance_hours"|"disbursed_amount_by_customer_geo"|"disbursed_amount_by_age_of_uncollected_funds"|"disbursed_amount_by_age_of_disbursed_funds"|"customer_profile_by_industry"|"customer_profile_by_revenue"|"customer_profile_by_geography"|"sales_compensation_billed_revenue"|"us_sales_and_use_tax_records"|string;
  export type DestinationS3BucketName = string;
  export type DestinationS3Prefix = string;
  export type ExceptionMessage = string;
  export type FromDate = Date;
  export interface GenerateDataSetRequest {
    /**
     * The desired data set type.    customer_subscriber_hourly_monthly_subscriptions From 2014-07-21 to present: Available daily by 5:00 PM Pacific Time.   customer_subscriber_annual_subscriptions From 2014-07-21 to present: Available daily by 5:00 PM Pacific Time.   daily_business_usage_by_instance_type From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.   daily_business_fees From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.   daily_business_free_trial_conversions From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.   daily_business_new_instances From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.   daily_business_new_product_subscribers From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.   daily_business_canceled_product_subscribers From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.   monthly_revenue_billing_and_revenue_data From 2015-02 to 2017-06: Available monthly on the 4th day of the month by 5:00pm Pacific Time. Data includes metered transactions (e.g. hourly) from two months prior. From 2017-07 to present: Available monthly on the 15th day of the month by 5:00pm Pacific Time. Data includes metered transactions (e.g. hourly) from one month prior.   monthly_revenue_annual_subscriptions From 2015-02 to 2017-06: Available monthly on the 4th day of the month by 5:00pm Pacific Time. Data includes up-front software charges (e.g. annual) from one month prior. From 2017-07 to present: Available monthly on the 15th day of the month by 5:00pm Pacific Time. Data includes up-front software charges (e.g. annual) from one month prior.   disbursed_amount_by_product From 2015-01-26 to present: Available every 30 days by 5:00 PM Pacific Time.   disbursed_amount_by_product_with_uncollected_funds From 2012-04-19 to 2015-01-25: Available every 30 days by 5:00 PM Pacific Time. From 2015-01-26 to present: This data set was split into three data sets: disbursed_amount_by_product, disbursed_amount_by_age_of_uncollected_funds, and disbursed_amount_by_age_of_disbursed_funds.   disbursed_amount_by_instance_hours From 2012-09-04 to present: Available every 30 days by 5:00 PM Pacific Time.   disbursed_amount_by_customer_geo From 2012-04-19 to present: Available every 30 days by 5:00 PM Pacific Time.   disbursed_amount_by_age_of_uncollected_funds From 2015-01-26 to present: Available every 30 days by 5:00 PM Pacific Time.   disbursed_amount_by_age_of_disbursed_funds From 2015-01-26 to present: Available every 30 days by 5:00 PM Pacific Time.   customer_profile_by_industry From 2015-10-01 to 2017-06-29: Available daily by 5:00 PM Pacific Time. From 2017-06-30 to present: This data set is no longer available.   customer_profile_by_revenue From 2015-10-01 to 2017-06-29: Available daily by 5:00 PM Pacific Time. From 2017-06-30 to present: This data set is no longer available.   customer_profile_by_geography From 2015-10-01 to 2017-06-29: Available daily by 5:00 PM Pacific Time. From 2017-06-30 to present: This data set is no longer available.   sales_compensation_billed_revenue From 2016-12 to 2017-06: Available monthly on the 4th day of the month by 5:00pm Pacific Time. Data includes metered transactions (e.g. hourly) from two months prior, and up-front software charges (e.g. annual) from one month prior. From 2017-06 to present: Available monthly on the 15th day of the month by 5:00pm Pacific Time. Data includes metered transactions (e.g. hourly) from one month prior, and up-front software charges (e.g. annual) from one month prior.   us_sales_and_use_tax_records From 2017-02-15 to present: Available monthly on the 15th day of the month by 5:00 PM Pacific Time.   
     */
    dataSetType: DataSetType;
    /**
     * The date a data set was published. For daily data sets, provide a date with day-level granularity for the desired day. For weekly data sets, provide a date with day-level granularity within the desired week (the day value will be ignored). For monthly data sets, provide a date with month-level granularity for the desired month (the day value will be ignored).
     */
    dataSetPublicationDate: DataSetPublicationDate;
    /**
     * The Amazon Resource Name (ARN) of the Role with an attached permissions policy to interact with the provided AWS services.
     */
    roleNameArn: RoleNameArn;
    /**
     * The name (friendly name, not ARN) of the destination S3 bucket.
     */
    destinationS3BucketName: DestinationS3BucketName;
    /**
     * (Optional) The desired S3 prefix for the published data set, similar to a directory path in standard file systems. For example, if given the bucket name "mybucket" and the prefix "myprefix/mydatasets", the output file "outputfile" would be published to "s3://mybucket/myprefix/mydatasets/outputfile". If the prefix directory structure does not exist, it will be created. If no prefix is provided, the data set will be published to the S3 bucket root.
     */
    destinationS3Prefix?: DestinationS3Prefix;
    /**
     * Amazon Resource Name (ARN) for the SNS Topic that will be notified when the data set has been published or if an error has occurred.
     */
    snsTopicArn: SnsTopicArn;
    /**
     * (Optional) Key-value pairs which will be returned, unmodified, in the Amazon SNS notification message and the data set metadata file. These key-value pairs can be used to correlated responses with tracking information from other systems.
     */
    customerDefinedValues?: CustomerDefinedValues;
  }
  export interface GenerateDataSetResult {
    /**
     * A unique identifier representing a specific request to the GenerateDataSet operation. This identifier can be used to correlate a request with notifications from the SNS topic.
     */
    dataSetRequestId?: DataSetRequestId;
  }
  export type OptionalKey = string;
  export type OptionalValue = string;
  export type RoleNameArn = string;
  export type SnsTopicArn = string;
  export interface StartSupportDataExportRequest {
    /**
     *  Specifies the data set type to be written to the output csv file. The data set types customer_support_contacts_data and test_customer_support_contacts_data both result in a csv file containing the following fields: Product Id, Product Code, Customer Guid, Subscription Guid, Subscription Start Date, Organization, AWS Account Id, Given Name, Surname, Telephone Number, Email, Title, Country Code, ZIP Code, Operation Type, and Operation Time.    customer_support_contacts_data Customer support contact data. The data set will contain all changes (Creates, Updates, and Deletes) to customer support contact data from the date specified in the from_date parameter. test_customer_support_contacts_data An example data set containing static test data in the same format as customer_support_contacts_data  
     */
    dataSetType: SupportDataSetType;
    /**
     * The start date from which to retrieve the data set in UTC. This parameter only affects the customer_support_contacts_data data set type.
     */
    fromDate: FromDate;
    /**
     * The Amazon Resource Name (ARN) of the Role with an attached permissions policy to interact with the provided AWS services.
     */
    roleNameArn: RoleNameArn;
    /**
     * The name (friendly name, not ARN) of the destination S3 bucket.
     */
    destinationS3BucketName: DestinationS3BucketName;
    /**
     * (Optional) The desired S3 prefix for the published data set, similar to a directory path in standard file systems. For example, if given the bucket name "mybucket" and the prefix "myprefix/mydatasets", the output file "outputfile" would be published to "s3://mybucket/myprefix/mydatasets/outputfile". If the prefix directory structure does not exist, it will be created. If no prefix is provided, the data set will be published to the S3 bucket root.
     */
    destinationS3Prefix?: DestinationS3Prefix;
    /**
     * Amazon Resource Name (ARN) for the SNS Topic that will be notified when the data set has been published or if an error has occurred.
     */
    snsTopicArn: SnsTopicArn;
    /**
     * (Optional) Key-value pairs which will be returned, unmodified, in the Amazon SNS notification message and the data set metadata file.
     */
    customerDefinedValues?: CustomerDefinedValues;
  }
  export interface StartSupportDataExportResult {
    /**
     * A unique identifier representing a specific request to the StartSupportDataExport operation. This identifier can be used to correlate a request with notifications from the SNS topic.
     */
    dataSetRequestId?: DataSetRequestId;
  }
  export type SupportDataSetType = "customer_support_contacts_data"|"test_customer_support_contacts_data"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-07-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MarketplaceCommerceAnalytics client.
   */
  export import Types = MarketplaceCommerceAnalytics;
}
export = MarketplaceCommerceAnalytics;
