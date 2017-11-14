import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Support extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Support.Types.ClientConfiguration)
  config: Config & Support.Types.ClientConfiguration;
  /**
   * Adds one or more attachments to an attachment set. If an attachmentSetId is not specified, a new attachment set is created, and the ID of the set is returned in the response. If an attachmentSetId is specified, the attachments are added to the specified set, if it exists. An attachment set is a temporary container for attachments that are to be added to a case or case communication. The set is available for one hour after it is created; the expiryTime returned in the response indicates when the set expires. The maximum number of attachments in a set is 3, and the maximum size of any attachment in the set is 5 MB.
   */
  addAttachmentsToSet(params: Support.Types.AddAttachmentsToSetRequest, callback?: (err: AWSError, data: Support.Types.AddAttachmentsToSetResponse) => void): Request<Support.Types.AddAttachmentsToSetResponse, AWSError>;
  /**
   * Adds one or more attachments to an attachment set. If an attachmentSetId is not specified, a new attachment set is created, and the ID of the set is returned in the response. If an attachmentSetId is specified, the attachments are added to the specified set, if it exists. An attachment set is a temporary container for attachments that are to be added to a case or case communication. The set is available for one hour after it is created; the expiryTime returned in the response indicates when the set expires. The maximum number of attachments in a set is 3, and the maximum size of any attachment in the set is 5 MB.
   */
  addAttachmentsToSet(callback?: (err: AWSError, data: Support.Types.AddAttachmentsToSetResponse) => void): Request<Support.Types.AddAttachmentsToSetResponse, AWSError>;
  /**
   * Adds additional customer communication to an AWS Support case. You use the caseId value to identify the case to add communication to. You can list a set of email addresses to copy on the communication using the ccEmailAddresses value. The communicationBody value contains the text of the communication. The response indicates the success or failure of the request. This operation implements a subset of the features of the AWS Support Center.
   */
  addCommunicationToCase(params: Support.Types.AddCommunicationToCaseRequest, callback?: (err: AWSError, data: Support.Types.AddCommunicationToCaseResponse) => void): Request<Support.Types.AddCommunicationToCaseResponse, AWSError>;
  /**
   * Adds additional customer communication to an AWS Support case. You use the caseId value to identify the case to add communication to. You can list a set of email addresses to copy on the communication using the ccEmailAddresses value. The communicationBody value contains the text of the communication. The response indicates the success or failure of the request. This operation implements a subset of the features of the AWS Support Center.
   */
  addCommunicationToCase(callback?: (err: AWSError, data: Support.Types.AddCommunicationToCaseResponse) => void): Request<Support.Types.AddCommunicationToCaseResponse, AWSError>;
  /**
   * Creates a new case in the AWS Support Center. This operation is modeled on the behavior of the AWS Support Center Create Case page. Its parameters require you to specify the following information:     issueType. The type of issue for the case. You can specify either "customer-service" or "technical." If you do not indicate a value, the default is "technical."     serviceCode. The code for an AWS service. You obtain the serviceCode by calling DescribeServices.     categoryCode. The category for the service defined for the serviceCode value. You also obtain the category code for a service by calling DescribeServices. Each AWS service defines its own set of category codes.     severityCode. A value that indicates the urgency of the case, which in turn determines the response time according to your service level agreement with AWS Support. You obtain the SeverityCode by calling DescribeSeverityLevels.    subject. The Subject field on the AWS Support Center Create Case page.    communicationBody. The Description field on the AWS Support Center Create Case page.    attachmentSetId. The ID of a set of attachments that has been created by using AddAttachmentsToSet.    language. The human language in which AWS Support handles the case. English and Japanese are currently supported.    ccEmailAddresses. The AWS Support Center CC field on the Create Case page. You can list email addresses to be copied on any correspondence about the case. The account that opens the case is already identified by passing the AWS Credentials in the HTTP POST method or in a method or function call from one of the programming languages supported by an AWS SDK.     To add additional communication or attachments to an existing case, use AddCommunicationToCase.  A successful CreateCase request returns an AWS Support case number. Case numbers are used by the DescribeCases operation to retrieve existing AWS Support cases. 
   */
  createCase(params: Support.Types.CreateCaseRequest, callback?: (err: AWSError, data: Support.Types.CreateCaseResponse) => void): Request<Support.Types.CreateCaseResponse, AWSError>;
  /**
   * Creates a new case in the AWS Support Center. This operation is modeled on the behavior of the AWS Support Center Create Case page. Its parameters require you to specify the following information:     issueType. The type of issue for the case. You can specify either "customer-service" or "technical." If you do not indicate a value, the default is "technical."     serviceCode. The code for an AWS service. You obtain the serviceCode by calling DescribeServices.     categoryCode. The category for the service defined for the serviceCode value. You also obtain the category code for a service by calling DescribeServices. Each AWS service defines its own set of category codes.     severityCode. A value that indicates the urgency of the case, which in turn determines the response time according to your service level agreement with AWS Support. You obtain the SeverityCode by calling DescribeSeverityLevels.    subject. The Subject field on the AWS Support Center Create Case page.    communicationBody. The Description field on the AWS Support Center Create Case page.    attachmentSetId. The ID of a set of attachments that has been created by using AddAttachmentsToSet.    language. The human language in which AWS Support handles the case. English and Japanese are currently supported.    ccEmailAddresses. The AWS Support Center CC field on the Create Case page. You can list email addresses to be copied on any correspondence about the case. The account that opens the case is already identified by passing the AWS Credentials in the HTTP POST method or in a method or function call from one of the programming languages supported by an AWS SDK.     To add additional communication or attachments to an existing case, use AddCommunicationToCase.  A successful CreateCase request returns an AWS Support case number. Case numbers are used by the DescribeCases operation to retrieve existing AWS Support cases. 
   */
  createCase(callback?: (err: AWSError, data: Support.Types.CreateCaseResponse) => void): Request<Support.Types.CreateCaseResponse, AWSError>;
  /**
   * Returns the attachment that has the specified ID. Attachment IDs are generated by the case management system when you add an attachment to a case or case communication. Attachment IDs are returned in the AttachmentDetails objects that are returned by the DescribeCommunications operation.
   */
  describeAttachment(params: Support.Types.DescribeAttachmentRequest, callback?: (err: AWSError, data: Support.Types.DescribeAttachmentResponse) => void): Request<Support.Types.DescribeAttachmentResponse, AWSError>;
  /**
   * Returns the attachment that has the specified ID. Attachment IDs are generated by the case management system when you add an attachment to a case or case communication. Attachment IDs are returned in the AttachmentDetails objects that are returned by the DescribeCommunications operation.
   */
  describeAttachment(callback?: (err: AWSError, data: Support.Types.DescribeAttachmentResponse) => void): Request<Support.Types.DescribeAttachmentResponse, AWSError>;
  /**
   * Returns a list of cases that you specify by passing one or more case IDs. In addition, you can filter the cases by date by setting values for the afterTime and beforeTime request parameters. You can set values for the includeResolvedCases and includeCommunications request parameters to control how much information is returned.  Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error. The response returns the following in JSON format:   One or more CaseDetails data types.    One or more nextToken values, which specify where to paginate the returned records represented by the CaseDetails objects.  
   */
  describeCases(params: Support.Types.DescribeCasesRequest, callback?: (err: AWSError, data: Support.Types.DescribeCasesResponse) => void): Request<Support.Types.DescribeCasesResponse, AWSError>;
  /**
   * Returns a list of cases that you specify by passing one or more case IDs. In addition, you can filter the cases by date by setting values for the afterTime and beforeTime request parameters. You can set values for the includeResolvedCases and includeCommunications request parameters to control how much information is returned.  Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error. The response returns the following in JSON format:   One or more CaseDetails data types.    One or more nextToken values, which specify where to paginate the returned records represented by the CaseDetails objects.  
   */
  describeCases(callback?: (err: AWSError, data: Support.Types.DescribeCasesResponse) => void): Request<Support.Types.DescribeCasesResponse, AWSError>;
  /**
   * Returns communications (and attachments) for one or more support cases. You can use the afterTime and beforeTime parameters to filter by date. You can use the caseId parameter to restrict the results to a particular case. Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error. You can use the maxResults and nextToken parameters to control the pagination of the result set. Set maxResults to the number of cases you want displayed on each page, and use nextToken to specify the resumption of pagination.
   */
  describeCommunications(params: Support.Types.DescribeCommunicationsRequest, callback?: (err: AWSError, data: Support.Types.DescribeCommunicationsResponse) => void): Request<Support.Types.DescribeCommunicationsResponse, AWSError>;
  /**
   * Returns communications (and attachments) for one or more support cases. You can use the afterTime and beforeTime parameters to filter by date. You can use the caseId parameter to restrict the results to a particular case. Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error. You can use the maxResults and nextToken parameters to control the pagination of the result set. Set maxResults to the number of cases you want displayed on each page, and use nextToken to specify the resumption of pagination.
   */
  describeCommunications(callback?: (err: AWSError, data: Support.Types.DescribeCommunicationsResponse) => void): Request<Support.Types.DescribeCommunicationsResponse, AWSError>;
  /**
   * Returns the current list of AWS services and a list of service categories that applies to each one. You then use service names and categories in your CreateCase requests. Each AWS service has its own set of categories. The service codes and category codes correspond to the values that are displayed in the Service and Category drop-down lists on the AWS Support Center Create Case page. The values in those fields, however, do not necessarily match the service codes and categories returned by the DescribeServices request. Always use the service codes and categories obtained programmatically. This practice ensures that you always have the most recent set of service and category codes.
   */
  describeServices(params: Support.Types.DescribeServicesRequest, callback?: (err: AWSError, data: Support.Types.DescribeServicesResponse) => void): Request<Support.Types.DescribeServicesResponse, AWSError>;
  /**
   * Returns the current list of AWS services and a list of service categories that applies to each one. You then use service names and categories in your CreateCase requests. Each AWS service has its own set of categories. The service codes and category codes correspond to the values that are displayed in the Service and Category drop-down lists on the AWS Support Center Create Case page. The values in those fields, however, do not necessarily match the service codes and categories returned by the DescribeServices request. Always use the service codes and categories obtained programmatically. This practice ensures that you always have the most recent set of service and category codes.
   */
  describeServices(callback?: (err: AWSError, data: Support.Types.DescribeServicesResponse) => void): Request<Support.Types.DescribeServicesResponse, AWSError>;
  /**
   * Returns the list of severity levels that you can assign to an AWS Support case. The severity level for a case is also a field in the CaseDetails data type included in any CreateCase request. 
   */
  describeSeverityLevels(params: Support.Types.DescribeSeverityLevelsRequest, callback?: (err: AWSError, data: Support.Types.DescribeSeverityLevelsResponse) => void): Request<Support.Types.DescribeSeverityLevelsResponse, AWSError>;
  /**
   * Returns the list of severity levels that you can assign to an AWS Support case. The severity level for a case is also a field in the CaseDetails data type included in any CreateCase request. 
   */
  describeSeverityLevels(callback?: (err: AWSError, data: Support.Types.DescribeSeverityLevelsResponse) => void): Request<Support.Types.DescribeSeverityLevelsResponse, AWSError>;
  /**
   * Returns the refresh status of the Trusted Advisor checks that have the specified check IDs. Check IDs can be obtained by calling DescribeTrustedAdvisorChecks.  Some checks are refreshed automatically, and their refresh statuses cannot be retrieved by using this operation. Use of the DescribeTrustedAdvisorCheckRefreshStatuses operation for these checks causes an InvalidParameterValue error. 
   */
  describeTrustedAdvisorCheckRefreshStatuses(params: Support.Types.DescribeTrustedAdvisorCheckRefreshStatusesRequest, callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorCheckRefreshStatusesResponse) => void): Request<Support.Types.DescribeTrustedAdvisorCheckRefreshStatusesResponse, AWSError>;
  /**
   * Returns the refresh status of the Trusted Advisor checks that have the specified check IDs. Check IDs can be obtained by calling DescribeTrustedAdvisorChecks.  Some checks are refreshed automatically, and their refresh statuses cannot be retrieved by using this operation. Use of the DescribeTrustedAdvisorCheckRefreshStatuses operation for these checks causes an InvalidParameterValue error. 
   */
  describeTrustedAdvisorCheckRefreshStatuses(callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorCheckRefreshStatusesResponse) => void): Request<Support.Types.DescribeTrustedAdvisorCheckRefreshStatusesResponse, AWSError>;
  /**
   * Returns the results of the Trusted Advisor check that has the specified check ID. Check IDs can be obtained by calling DescribeTrustedAdvisorChecks. The response contains a TrustedAdvisorCheckResult object, which contains these three objects:    TrustedAdvisorCategorySpecificSummary     TrustedAdvisorResourceDetail     TrustedAdvisorResourcesSummary    In addition, the response contains these fields:    status. The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".    timestamp. The time of the last refresh of the check.    checkId. The unique identifier for the check.  
   */
  describeTrustedAdvisorCheckResult(params: Support.Types.DescribeTrustedAdvisorCheckResultRequest, callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorCheckResultResponse) => void): Request<Support.Types.DescribeTrustedAdvisorCheckResultResponse, AWSError>;
  /**
   * Returns the results of the Trusted Advisor check that has the specified check ID. Check IDs can be obtained by calling DescribeTrustedAdvisorChecks. The response contains a TrustedAdvisorCheckResult object, which contains these three objects:    TrustedAdvisorCategorySpecificSummary     TrustedAdvisorResourceDetail     TrustedAdvisorResourcesSummary    In addition, the response contains these fields:    status. The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".    timestamp. The time of the last refresh of the check.    checkId. The unique identifier for the check.  
   */
  describeTrustedAdvisorCheckResult(callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorCheckResultResponse) => void): Request<Support.Types.DescribeTrustedAdvisorCheckResultResponse, AWSError>;
  /**
   * Returns the summaries of the results of the Trusted Advisor checks that have the specified check IDs. Check IDs can be obtained by calling DescribeTrustedAdvisorChecks. The response contains an array of TrustedAdvisorCheckSummary objects.
   */
  describeTrustedAdvisorCheckSummaries(params: Support.Types.DescribeTrustedAdvisorCheckSummariesRequest, callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorCheckSummariesResponse) => void): Request<Support.Types.DescribeTrustedAdvisorCheckSummariesResponse, AWSError>;
  /**
   * Returns the summaries of the results of the Trusted Advisor checks that have the specified check IDs. Check IDs can be obtained by calling DescribeTrustedAdvisorChecks. The response contains an array of TrustedAdvisorCheckSummary objects.
   */
  describeTrustedAdvisorCheckSummaries(callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorCheckSummariesResponse) => void): Request<Support.Types.DescribeTrustedAdvisorCheckSummariesResponse, AWSError>;
  /**
   * Returns information about all available Trusted Advisor checks, including name, ID, category, description, and metadata. You must specify a language code; English ("en") and Japanese ("ja") are currently supported. The response contains a TrustedAdvisorCheckDescription for each check.
   */
  describeTrustedAdvisorChecks(params: Support.Types.DescribeTrustedAdvisorChecksRequest, callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorChecksResponse) => void): Request<Support.Types.DescribeTrustedAdvisorChecksResponse, AWSError>;
  /**
   * Returns information about all available Trusted Advisor checks, including name, ID, category, description, and metadata. You must specify a language code; English ("en") and Japanese ("ja") are currently supported. The response contains a TrustedAdvisorCheckDescription for each check.
   */
  describeTrustedAdvisorChecks(callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorChecksResponse) => void): Request<Support.Types.DescribeTrustedAdvisorChecksResponse, AWSError>;
  /**
   * Requests a refresh of the Trusted Advisor check that has the specified check ID. Check IDs can be obtained by calling DescribeTrustedAdvisorChecks.  Some checks are refreshed automatically, and they cannot be refreshed by using this operation. Use of the RefreshTrustedAdvisorCheck operation for these checks causes an InvalidParameterValue error.  The response contains a TrustedAdvisorCheckRefreshStatus object, which contains these fields:    status. The refresh status of the check: "none", "enqueued", "processing", "success", or "abandoned".    millisUntilNextRefreshable. The amount of time, in milliseconds, until the check is eligible for refresh.    checkId. The unique identifier for the check.  
   */
  refreshTrustedAdvisorCheck(params: Support.Types.RefreshTrustedAdvisorCheckRequest, callback?: (err: AWSError, data: Support.Types.RefreshTrustedAdvisorCheckResponse) => void): Request<Support.Types.RefreshTrustedAdvisorCheckResponse, AWSError>;
  /**
   * Requests a refresh of the Trusted Advisor check that has the specified check ID. Check IDs can be obtained by calling DescribeTrustedAdvisorChecks.  Some checks are refreshed automatically, and they cannot be refreshed by using this operation. Use of the RefreshTrustedAdvisorCheck operation for these checks causes an InvalidParameterValue error.  The response contains a TrustedAdvisorCheckRefreshStatus object, which contains these fields:    status. The refresh status of the check: "none", "enqueued", "processing", "success", or "abandoned".    millisUntilNextRefreshable. The amount of time, in milliseconds, until the check is eligible for refresh.    checkId. The unique identifier for the check.  
   */
  refreshTrustedAdvisorCheck(callback?: (err: AWSError, data: Support.Types.RefreshTrustedAdvisorCheckResponse) => void): Request<Support.Types.RefreshTrustedAdvisorCheckResponse, AWSError>;
  /**
   * Takes a caseId and returns the initial state of the case along with the state of the case after the call to ResolveCase completed.
   */
  resolveCase(params: Support.Types.ResolveCaseRequest, callback?: (err: AWSError, data: Support.Types.ResolveCaseResponse) => void): Request<Support.Types.ResolveCaseResponse, AWSError>;
  /**
   * Takes a caseId and returns the initial state of the case along with the state of the case after the call to ResolveCase completed.
   */
  resolveCase(callback?: (err: AWSError, data: Support.Types.ResolveCaseResponse) => void): Request<Support.Types.ResolveCaseResponse, AWSError>;
}
declare namespace Support {
  export interface AddAttachmentsToSetRequest {
    /**
     * The ID of the attachment set. If an attachmentSetId is not specified, a new attachment set is created, and the ID of the set is returned in the response. If an attachmentSetId is specified, the attachments are added to the specified set, if it exists.
     */
    attachmentSetId?: AttachmentSetId;
    /**
     * One or more attachments to add to the set. The limit is 3 attachments per set, and the size limit is 5 MB per attachment.
     */
    attachments: Attachments;
  }
  export interface AddAttachmentsToSetResponse {
    /**
     * The ID of the attachment set. If an attachmentSetId was not specified, a new attachment set is created, and the ID of the set is returned in the response. If an attachmentSetId was specified, the attachments are added to the specified set, if it exists.
     */
    attachmentSetId?: AttachmentSetId;
    /**
     * The time and date when the attachment set expires.
     */
    expiryTime?: ExpiryTime;
  }
  export interface AddCommunicationToCaseRequest {
    /**
     * The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId?: CaseId;
    /**
     * The body of an email communication to add to the support case.
     */
    communicationBody: CommunicationBody;
    /**
     * The email addresses in the CC line of an email to be added to the support case.
     */
    ccEmailAddresses?: CcEmailAddressList;
    /**
     * The ID of a set of one or more attachments for the communication to add to the case. Create the set by calling AddAttachmentsToSet 
     */
    attachmentSetId?: AttachmentSetId;
  }
  export interface AddCommunicationToCaseResponse {
    /**
     * True if AddCommunicationToCase succeeds. Otherwise, returns an error.
     */
    result?: Result;
  }
  export type AfterTime = string;
  export interface Attachment {
    /**
     * The name of the attachment file.
     */
    fileName?: FileName;
    /**
     * The content of the attachment file.
     */
    data?: Data;
  }
  export interface AttachmentDetails {
    /**
     * The ID of the attachment.
     */
    attachmentId?: AttachmentId;
    /**
     * The file name of the attachment.
     */
    fileName?: FileName;
  }
  export type AttachmentId = string;
  export type AttachmentSet = AttachmentDetails[];
  export type AttachmentSetId = string;
  export type Attachments = Attachment[];
  export type BeforeTime = string;
  export type Boolean = boolean;
  export interface CaseDetails {
    /**
     * The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId?: CaseId;
    /**
     * The ID displayed for the case in the AWS Support Center. This is a numeric string.
     */
    displayId?: DisplayId;
    /**
     * The subject line for the case in the AWS Support Center.
     */
    subject?: Subject;
    /**
     * The status of the case.
     */
    status?: Status;
    /**
     * The code for the AWS service returned by the call to DescribeServices.
     */
    serviceCode?: ServiceCode;
    /**
     * The category of problem for the AWS Support case.
     */
    categoryCode?: CategoryCode;
    /**
     * The code for the severity level returned by the call to DescribeSeverityLevels.
     */
    severityCode?: SeverityCode;
    /**
     * The email address of the account that submitted the case.
     */
    submittedBy?: SubmittedBy;
    /**
     * The time that the case was case created in the AWS Support Center.
     */
    timeCreated?: TimeCreated;
    /**
     * The five most recent communications between you and AWS Support Center, including the IDs of any attachments to the communications. Also includes a nextToken that you can use to retrieve earlier communications.
     */
    recentCommunications?: RecentCaseCommunications;
    /**
     * The email addresses that receive copies of communication about the case.
     */
    ccEmailAddresses?: CcEmailAddressList;
    /**
     * The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.
     */
    language?: Language;
  }
  export type CaseId = string;
  export type CaseIdList = CaseId[];
  export type CaseList = CaseDetails[];
  export type CaseStatus = string;
  export interface Category {
    /**
     * The category code for the support case.
     */
    code?: CategoryCode;
    /**
     * The category name for the support case.
     */
    name?: CategoryName;
  }
  export type CategoryCode = string;
  export type CategoryList = Category[];
  export type CategoryName = string;
  export type CcEmailAddress = string;
  export type CcEmailAddressList = CcEmailAddress[];
  export interface Communication {
    /**
     * The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId?: CaseId;
    /**
     * The text of the communication between the customer and AWS Support.
     */
    body?: CommunicationBody;
    /**
     * The email address of the account that submitted the AWS Support case.
     */
    submittedBy?: SubmittedBy;
    /**
     * The time the communication was created.
     */
    timeCreated?: TimeCreated;
    /**
     * Information about the attachments to the case communication.
     */
    attachmentSet?: AttachmentSet;
  }
  export type CommunicationBody = string;
  export type CommunicationList = Communication[];
  export interface CreateCaseRequest {
    /**
     * The title of the AWS Support case.
     */
    subject: Subject;
    /**
     * The code for the AWS service returned by the call to DescribeServices.
     */
    serviceCode?: ServiceCode;
    /**
     * The code for the severity level returned by the call to DescribeSeverityLevels.  The availability of severity levels depends on each customer's support subscription. In other words, your subscription may not necessarily require the urgent level of response time. 
     */
    severityCode?: SeverityCode;
    /**
     * The category of problem for the AWS Support case.
     */
    categoryCode?: CategoryCode;
    /**
     * The communication body text when you create an AWS Support case by calling CreateCase.
     */
    communicationBody: CommunicationBody;
    /**
     * A list of email addresses that AWS Support copies on case correspondence.
     */
    ccEmailAddresses?: CcEmailAddressList;
    /**
     * The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.
     */
    language?: Language;
    /**
     * The type of issue for the case. You can specify either "customer-service" or "technical." If you do not indicate a value, the default is "technical."
     */
    issueType?: IssueType;
    /**
     * The ID of a set of one or more attachments for the case. Create the set by using AddAttachmentsToSet.
     */
    attachmentSetId?: AttachmentSetId;
  }
  export interface CreateCaseResponse {
    /**
     * The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId?: CaseId;
  }
  export type Data = Buffer|Uint8Array|Blob|string;
  export interface DescribeAttachmentRequest {
    /**
     * The ID of the attachment to return. Attachment IDs are returned by the DescribeCommunications operation.
     */
    attachmentId: AttachmentId;
  }
  export interface DescribeAttachmentResponse {
    /**
     * The attachment content and file name.
     */
    attachment?: Attachment;
  }
  export interface DescribeCasesRequest {
    /**
     * A list of ID numbers of the support cases you want returned. The maximum number of cases is 100.
     */
    caseIdList?: CaseIdList;
    /**
     * The ID displayed for a case in the AWS Support Center user interface.
     */
    displayId?: DisplayId;
    /**
     * The start date for a filtered date search on support case communications. Case communications are available for 12 months after creation.
     */
    afterTime?: AfterTime;
    /**
     * The end date for a filtered date search on support case communications. Case communications are available for 12 months after creation.
     */
    beforeTime?: BeforeTime;
    /**
     * Specifies whether resolved support cases should be included in the DescribeCases results. The default is false.
     */
    includeResolvedCases?: IncludeResolvedCases;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return before paginating.
     */
    maxResults?: MaxResults;
    /**
     * The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.
     */
    language?: Language;
    /**
     * Specifies whether communications should be included in the DescribeCases results. The default is true.
     */
    includeCommunications?: IncludeCommunications;
  }
  export interface DescribeCasesResponse {
    /**
     * The details for the cases that match the request.
     */
    cases?: CaseList;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
  }
  export interface DescribeCommunicationsRequest {
    /**
     * The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId: CaseId;
    /**
     * The end date for a filtered date search on support case communications. Case communications are available for 12 months after creation.
     */
    beforeTime?: BeforeTime;
    /**
     * The start date for a filtered date search on support case communications. Case communications are available for 12 months after creation.
     */
    afterTime?: AfterTime;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return before paginating.
     */
    maxResults?: MaxResults;
  }
  export interface DescribeCommunicationsResponse {
    /**
     * The communications for the case.
     */
    communications?: CommunicationList;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
  }
  export interface DescribeServicesRequest {
    /**
     * A JSON-formatted list of service codes available for AWS services.
     */
    serviceCodeList?: ServiceCodeList;
    /**
     * The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.
     */
    language?: Language;
  }
  export interface DescribeServicesResponse {
    /**
     * A JSON-formatted list of AWS services.
     */
    services?: ServiceList;
  }
  export interface DescribeSeverityLevelsRequest {
    /**
     * The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.
     */
    language?: Language;
  }
  export interface DescribeSeverityLevelsResponse {
    /**
     * The available severity levels for the support case. Available severity levels are defined by your service level agreement with AWS.
     */
    severityLevels?: SeverityLevelsList;
  }
  export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
    /**
     * The IDs of the Trusted Advisor checks to get the status of. Note: Specifying the check ID of a check that is automatically refreshed causes an InvalidParameterValue error.
     */
    checkIds: StringList;
  }
  export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
    /**
     * The refresh status of the specified Trusted Advisor checks.
     */
    statuses: TrustedAdvisorCheckRefreshStatusList;
  }
  export interface DescribeTrustedAdvisorCheckResultRequest {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    checkId: String;
    /**
     * The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.
     */
    language?: String;
  }
  export interface DescribeTrustedAdvisorCheckResultResponse {
    /**
     * The detailed results of the Trusted Advisor check.
     */
    result?: TrustedAdvisorCheckResult;
  }
  export interface DescribeTrustedAdvisorCheckSummariesRequest {
    /**
     * The IDs of the Trusted Advisor checks.
     */
    checkIds: StringList;
  }
  export interface DescribeTrustedAdvisorCheckSummariesResponse {
    /**
     * The summary information for the requested Trusted Advisor checks.
     */
    summaries: TrustedAdvisorCheckSummaryList;
  }
  export interface DescribeTrustedAdvisorChecksRequest {
    /**
     * The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.
     */
    language: String;
  }
  export interface DescribeTrustedAdvisorChecksResponse {
    /**
     * Information about all available Trusted Advisor checks.
     */
    checks: TrustedAdvisorCheckList;
  }
  export type DisplayId = string;
  export type Double = number;
  export type ErrorMessage = string;
  export type ExpiryTime = string;
  export type FileName = string;
  export type IncludeCommunications = boolean;
  export type IncludeResolvedCases = boolean;
  export type IssueType = string;
  export type Language = string;
  export type Long = number;
  export type MaxResults = number;
  export type NextToken = string;
  export interface RecentCaseCommunications {
    /**
     * The five most recent communications associated with the case.
     */
    communications?: CommunicationList;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
  }
  export interface RefreshTrustedAdvisorCheckRequest {
    /**
     * The unique identifier for the Trusted Advisor check to refresh. Note: Specifying the check ID of a check that is automatically refreshed causes an InvalidParameterValue error.
     */
    checkId: String;
  }
  export interface RefreshTrustedAdvisorCheckResponse {
    /**
     * The current refresh status for a check, including the amount of time until the check is eligible for refresh.
     */
    status: TrustedAdvisorCheckRefreshStatus;
  }
  export interface ResolveCaseRequest {
    /**
     * The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId?: CaseId;
  }
  export interface ResolveCaseResponse {
    /**
     * The status of the case when the ResolveCase request was sent.
     */
    initialCaseStatus?: CaseStatus;
    /**
     * The status of the case after the ResolveCase request was processed.
     */
    finalCaseStatus?: CaseStatus;
  }
  export type Result = boolean;
  export interface Service {
    /**
     * The code for an AWS service returned by the DescribeServices response. The name element contains the corresponding friendly name.
     */
    code?: ServiceCode;
    /**
     * The friendly name for an AWS service. The code element contains the corresponding code.
     */
    name?: ServiceName;
    /**
     * A list of categories that describe the type of support issue a case describes. Categories consist of a category name and a category code. Category names and codes are passed to AWS Support when you call CreateCase.
     */
    categories?: CategoryList;
  }
  export type ServiceCode = string;
  export type ServiceCodeList = ServiceCode[];
  export type ServiceList = Service[];
  export type ServiceName = string;
  export type SeverityCode = string;
  export interface SeverityLevel {
    /**
     * One of four values: "low," "medium," "high," and "urgent". These values correspond to response times returned to the caller in severityLevel.name. 
     */
    code?: SeverityLevelCode;
    /**
     * The name of the severity level that corresponds to the severity level code.
     */
    name?: SeverityLevelName;
  }
  export type SeverityLevelCode = string;
  export type SeverityLevelName = string;
  export type SeverityLevelsList = SeverityLevel[];
  export type Status = string;
  export type String = string;
  export type StringList = String[];
  export type Subject = string;
  export type SubmittedBy = string;
  export type TimeCreated = string;
  export interface TrustedAdvisorCategorySpecificSummary {
    /**
     * The summary information about cost savings for a Trusted Advisor check that is in the Cost Optimizing category.
     */
    costOptimizing?: TrustedAdvisorCostOptimizingSummary;
  }
  export interface TrustedAdvisorCheckDescription {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    id: String;
    /**
     * The display name for the Trusted Advisor check.
     */
    name: String;
    /**
     * The description of the Trusted Advisor check, which includes the alert criteria and recommended actions (contains HTML markup).
     */
    description: String;
    /**
     * The category of the Trusted Advisor check.
     */
    category: String;
    /**
     * The column headings for the data returned by the Trusted Advisor check. The order of the headings corresponds to the order of the data in the Metadata element of the TrustedAdvisorResourceDetail for the check. Metadata contains all the data that is shown in the Excel download, even in those cases where the UI shows just summary data. 
     */
    metadata: StringList;
  }
  export type TrustedAdvisorCheckList = TrustedAdvisorCheckDescription[];
  export interface TrustedAdvisorCheckRefreshStatus {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    checkId: String;
    /**
     * The status of the Trusted Advisor check for which a refresh has been requested: "none", "enqueued", "processing", "success", or "abandoned".
     */
    status: String;
    /**
     * The amount of time, in milliseconds, until the Trusted Advisor check is eligible for refresh.
     */
    millisUntilNextRefreshable: Long;
  }
  export type TrustedAdvisorCheckRefreshStatusList = TrustedAdvisorCheckRefreshStatus[];
  export interface TrustedAdvisorCheckResult {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    checkId: String;
    /**
     * The time of the last refresh of the check.
     */
    timestamp: String;
    /**
     * The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".
     */
    status: String;
    resourcesSummary: TrustedAdvisorResourcesSummary;
    /**
     * Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.
     */
    categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
    /**
     * The details about each resource listed in the check result.
     */
    flaggedResources: TrustedAdvisorResourceDetailList;
  }
  export interface TrustedAdvisorCheckSummary {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    checkId: String;
    /**
     * The time of the last refresh of the check.
     */
    timestamp: String;
    /**
     * The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".
     */
    status: String;
    /**
     * Specifies whether the Trusted Advisor check has flagged resources.
     */
    hasFlaggedResources?: Boolean;
    resourcesSummary: TrustedAdvisorResourcesSummary;
    /**
     * Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.
     */
    categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
  }
  export type TrustedAdvisorCheckSummaryList = TrustedAdvisorCheckSummary[];
  export interface TrustedAdvisorCostOptimizingSummary {
    /**
     * The estimated monthly savings that might be realized if the recommended actions are taken.
     */
    estimatedMonthlySavings: Double;
    /**
     * The estimated percentage of savings that might be realized if the recommended actions are taken.
     */
    estimatedPercentMonthlySavings: Double;
  }
  export interface TrustedAdvisorResourceDetail {
    /**
     * The status code for the resource identified in the Trusted Advisor check.
     */
    status: String;
    /**
     * The AWS region in which the identified resource is located.
     */
    region?: String;
    /**
     * The unique identifier for the identified resource.
     */
    resourceId: String;
    /**
     * Specifies whether the AWS resource was ignored by Trusted Advisor because it was marked as suppressed by the user.
     */
    isSuppressed?: Boolean;
    /**
     * Additional information about the identified resource. The exact metadata and its order can be obtained by inspecting the TrustedAdvisorCheckDescription object returned by the call to DescribeTrustedAdvisorChecks. Metadata contains all the data that is shown in the Excel download, even in those cases where the UI shows just summary data. 
     */
    metadata: StringList;
  }
  export type TrustedAdvisorResourceDetailList = TrustedAdvisorResourceDetail[];
  export interface TrustedAdvisorResourcesSummary {
    /**
     * The number of AWS resources that were analyzed by the Trusted Advisor check.
     */
    resourcesProcessed: Long;
    /**
     * The number of AWS resources that were flagged (listed) by the Trusted Advisor check.
     */
    resourcesFlagged: Long;
    /**
     * The number of AWS resources ignored by Trusted Advisor because information was unavailable.
     */
    resourcesIgnored: Long;
    /**
     * The number of AWS resources ignored by Trusted Advisor because they were marked as suppressed by the user.
     */
    resourcesSuppressed: Long;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2013-04-15"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Support client.
   */
  export import Types = Support;
}
export = Support;
