import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ResourceGroupsTaggingAPI extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ResourceGroupsTaggingAPI.Types.ClientConfiguration)
  config: Config & ResourceGroupsTaggingAPI.Types.ClientConfiguration;
  /**
   * Returns all the tagged resources that are associated with the specified tags (keys and values) located in the specified region for the AWS account. The tags and the resource types that you specify in the request are known as filters. The response includes all tags that are associated with the requested resources. If no filter is provided, this action returns a paginated resource list with the associated tags.
   */
  getResources(params: ResourceGroupsTaggingAPI.Types.GetResourcesInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetResourcesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetResourcesOutput, AWSError>;
  /**
   * Returns all the tagged resources that are associated with the specified tags (keys and values) located in the specified region for the AWS account. The tags and the resource types that you specify in the request are known as filters. The response includes all tags that are associated with the requested resources. If no filter is provided, this action returns a paginated resource list with the associated tags.
   */
  getResources(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetResourcesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetResourcesOutput, AWSError>;
  /**
   * Returns all tag keys in the specified region for the AWS account.
   */
  getTagKeys(params: ResourceGroupsTaggingAPI.Types.GetTagKeysInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetTagKeysOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetTagKeysOutput, AWSError>;
  /**
   * Returns all tag keys in the specified region for the AWS account.
   */
  getTagKeys(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetTagKeysOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetTagKeysOutput, AWSError>;
  /**
   * Returns all tag values for the specified key in the specified region for the AWS account.
   */
  getTagValues(params: ResourceGroupsTaggingAPI.Types.GetTagValuesInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetTagValuesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetTagValuesOutput, AWSError>;
  /**
   * Returns all tag values for the specified key in the specified region for the AWS account.
   */
  getTagValues(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetTagValuesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetTagValuesOutput, AWSError>;
  /**
   * Applies one or more tags to the specified resources. Note the following:   Not all resources can have tags. For a list of resources that support tagging, see Supported Resources in the AWS Resource Groups and Tag Editor User Guide.   Each resource can have up to 50 tags. For other limits, see Tag Restrictions in the Amazon EC2 User Guide for Linux Instances.   You can only tag resources that are located in the specified region for the AWS account.   To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see Obtaining Permissions for Tagging in the AWS Resource Groups and Tag Editor User Guide.  
   */
  tagResources(params: ResourceGroupsTaggingAPI.Types.TagResourcesInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.TagResourcesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.TagResourcesOutput, AWSError>;
  /**
   * Applies one or more tags to the specified resources. Note the following:   Not all resources can have tags. For a list of resources that support tagging, see Supported Resources in the AWS Resource Groups and Tag Editor User Guide.   Each resource can have up to 50 tags. For other limits, see Tag Restrictions in the Amazon EC2 User Guide for Linux Instances.   You can only tag resources that are located in the specified region for the AWS account.   To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see Obtaining Permissions for Tagging in the AWS Resource Groups and Tag Editor User Guide.  
   */
  tagResources(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.TagResourcesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.TagResourcesOutput, AWSError>;
  /**
   * Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:   To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see Obtaining Permissions for Tagging in the AWS Resource Groups and Tag Editor User Guide.   You can only tag resources that are located in the specified region for the AWS account.  
   */
  untagResources(params: ResourceGroupsTaggingAPI.Types.UntagResourcesInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.UntagResourcesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.UntagResourcesOutput, AWSError>;
  /**
   * Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:   To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see Obtaining Permissions for Tagging in the AWS Resource Groups and Tag Editor User Guide.   You can only tag resources that are located in the specified region for the AWS account.  
   */
  untagResources(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.UntagResourcesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.UntagResourcesOutput, AWSError>;
}
declare namespace ResourceGroupsTaggingAPI {
  export type AmazonResourceType = string;
  export type ErrorCode = "InternalServiceException"|"InvalidParameterException"|string;
  export type ErrorMessage = string;
  export type ExceptionMessage = string;
  export type FailedResourcesMap = {[key: string]: FailureInfo};
  export interface FailureInfo {
    /**
     * The HTTP status code of the common error.
     */
    StatusCode?: StatusCode;
    /**
     * The code of the common error. Valid values include InternalServiceException, InvalidParameterException, and any valid error code returned by the AWS service that hosts the resource that you want to tag.
     */
    ErrorCode?: ErrorCode;
    /**
     * The message of the common error.
     */
    ErrorMessage?: ErrorMessage;
  }
  export interface GetResourcesInput {
    /**
     * A string that indicates that additional data is available. Leave this value empty for your initial request. If the response includes a PaginationToken, use that string for this value to request an additional page of data.
     */
    PaginationToken?: PaginationToken;
    /**
     * A list of tags (keys and values). A request can include up to 50 keys, and each key can include up to 20 values. If you specify multiple filters connected by an AND operator in a single request, the response returns only those resources that are associated with every specified filter. If you specify multiple filters connected by an OR operator in a single request, the response returns all resources that are associated with at least one or possibly more of the specified filters.
     */
    TagFilters?: TagFilterList;
    /**
     * A limit that restricts the number of resources returned by GetResources in paginated output. You can set ResourcesPerPage to a minimum of 1 item and the maximum of 50 items. 
     */
    ResourcesPerPage?: ResourcesPerPage;
    /**
     * A limit that restricts the number of tags (key and value pairs) returned by GetResources in paginated output. A resource with no tags is counted as having one tag (one key and value pair).  GetResources does not split a resource and its associated tags across pages. If the specified TagsPerPage would cause such a break, a PaginationToken is returned in place of the affected resource and its tags. Use that token in another request to get the remaining data. For example, if you specify a TagsPerPage of 100 and the account has 22 resources with 10 tags each (meaning that each resource has 10 key and value pairs), the output will consist of 3 pages, with the first page displaying the first 10 resources, each with its 10 tags, the second page displaying the next 10 resources each with its 10 tags, and the third page displaying the remaining 2 resources, each with its 10 tags.  You can set TagsPerPage to a minimum of 100 items and the maximum of 500 items.
     */
    TagsPerPage?: TagsPerPage;
    /**
     * The constraints on the resources that you want returned. The format of each resource type is service[:resourceType]. For example, specifying a resource type of ec2 returns all tagged Amazon EC2 resources (which includes tagged EC2 instances). Specifying a resource type of ec2:instance returns only EC2 instances.  The string for each service name and resource type is the same as that embedded in a resource's Amazon Resource Name (ARN). Consult the AWS General Reference for the following:   For a list of service name strings, see AWS Service Namespaces.   For resource type strings, see Example ARNs.   For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.  
     */
    ResourceTypeFilters?: ResourceTypeFilterList;
  }
  export interface GetResourcesOutput {
    /**
     * A string that indicates that the response contains more data than can be returned in a single response. To receive additional data, specify this string for the PaginationToken value in a subsequent request.
     */
    PaginationToken?: PaginationToken;
    /**
     * A list of resource ARNs and the tags (keys and values) associated with each.
     */
    ResourceTagMappingList?: ResourceTagMappingList;
  }
  export interface GetTagKeysInput {
    /**
     * A string that indicates that additional data is available. Leave this value empty for your initial request. If the response includes a PaginationToken, use that string for this value to request an additional page of data.
     */
    PaginationToken?: PaginationToken;
  }
  export interface GetTagKeysOutput {
    /**
     * A string that indicates that the response contains more data than can be returned in a single response. To receive additional data, specify this string for the PaginationToken value in a subsequent request.
     */
    PaginationToken?: PaginationToken;
    /**
     * A list of all tag keys in the AWS account.
     */
    TagKeys?: TagKeyList;
  }
  export interface GetTagValuesInput {
    /**
     * A string that indicates that additional data is available. Leave this value empty for your initial request. If the response includes a PaginationToken, use that string for this value to request an additional page of data.
     */
    PaginationToken?: PaginationToken;
    /**
     * The key for which you want to list all existing values in the specified region for the AWS account.
     */
    Key: TagKey;
  }
  export interface GetTagValuesOutput {
    /**
     * A string that indicates that the response contains more data than can be returned in a single response. To receive additional data, specify this string for the PaginationToken value in a subsequent request.
     */
    PaginationToken?: PaginationToken;
    /**
     * A list of all tag values for the specified key in the AWS account.
     */
    TagValues?: TagValuesOutputList;
  }
  export type PaginationToken = string;
  export type ResourceARN = string;
  export type ResourceARNList = ResourceARN[];
  export interface ResourceTagMapping {
    /**
     * An array of resource ARN(s).
     */
    ResourceARN?: ResourceARN;
    /**
     * The tags that have been applied to one or more AWS resources.
     */
    Tags?: TagList;
  }
  export type ResourceTagMappingList = ResourceTagMapping[];
  export type ResourceTypeFilterList = AmazonResourceType[];
  export type ResourcesPerPage = number;
  export type StatusCode = number;
  export interface Tag {
    /**
     * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
     */
    Key: TagKey;
    /**
     * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
     */
    Value: TagValue;
  }
  export interface TagFilter {
    /**
     * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
     */
    Key?: TagKey;
    /**
     * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
     */
    Values?: TagValueList;
  }
  export type TagFilterList = TagFilter[];
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagKeyListForUntag = TagKey[];
  export type TagList = Tag[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourcesInput {
    /**
     * A list of ARNs. An ARN (Amazon Resource Name) uniquely identifies a resource. You can specify a minimum of 1 and a maximum of 20 ARNs (resources) to tag. An ARN can be set to a maximum of 1600 characters. For more information, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    ResourceARNList: ResourceARNList;
    /**
     * The tags that you want to add to the specified resources. A tag consists of a key and a value that you define.
     */
    Tags: TagMap;
  }
  export interface TagResourcesOutput {
    /**
     * Details of resources that could not be tagged. An error code, status code, and error message are returned for each failed item.
     */
    FailedResourcesMap?: FailedResourcesMap;
  }
  export type TagValue = string;
  export type TagValueList = TagValue[];
  export type TagValuesOutputList = TagValue[];
  export type TagsPerPage = number;
  export interface UntagResourcesInput {
    /**
     * A list of ARNs. An ARN (Amazon Resource Name) uniquely identifies a resource. You can specify a minimum of 1 and a maximum of 20 ARNs (resources) to untag. An ARN can be set to a maximum of 1600 characters. For more information, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    ResourceARNList: ResourceARNList;
    /**
     * A list of the tag keys that you want to remove from the specified resources.
     */
    TagKeys: TagKeyListForUntag;
  }
  export interface UntagResourcesOutput {
    /**
     * Details of resources that could not be untagged. An error code, status code, and error message are returned for each failed item.
     */
    FailedResourcesMap?: FailedResourcesMap;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-01-26"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ResourceGroupsTaggingAPI client.
   */
  export import Types = ResourceGroupsTaggingAPI;
}
export = ResourceGroupsTaggingAPI;
