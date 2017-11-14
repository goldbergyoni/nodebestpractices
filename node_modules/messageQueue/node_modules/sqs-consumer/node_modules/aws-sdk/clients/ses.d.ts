import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class SES extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SES.Types.ClientConfiguration)
  config: Config & SES.Types.ClientConfiguration;
  /**
   * Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set. For information about setting up rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  cloneReceiptRuleSet(params: SES.Types.CloneReceiptRuleSetRequest, callback?: (err: AWSError, data: SES.Types.CloneReceiptRuleSetResponse) => void): Request<SES.Types.CloneReceiptRuleSetResponse, AWSError>;
  /**
   * Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set. For information about setting up rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  cloneReceiptRuleSet(callback?: (err: AWSError, data: SES.Types.CloneReceiptRuleSetResponse) => void): Request<SES.Types.CloneReceiptRuleSetResponse, AWSError>;
  /**
   * Creates a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  createConfigurationSet(params: SES.Types.CreateConfigurationSetRequest, callback?: (err: AWSError, data: SES.Types.CreateConfigurationSetResponse) => void): Request<SES.Types.CreateConfigurationSetResponse, AWSError>;
  /**
   * Creates a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  createConfigurationSet(callback?: (err: AWSError, data: SES.Types.CreateConfigurationSetResponse) => void): Request<SES.Types.CreateConfigurationSetResponse, AWSError>;
  /**
   * Creates a configuration set event destination.  When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).  An event destination is the AWS service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  createConfigurationSetEventDestination(params: SES.Types.CreateConfigurationSetEventDestinationRequest, callback?: (err: AWSError, data: SES.Types.CreateConfigurationSetEventDestinationResponse) => void): Request<SES.Types.CreateConfigurationSetEventDestinationResponse, AWSError>;
  /**
   * Creates a configuration set event destination.  When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).  An event destination is the AWS service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  createConfigurationSetEventDestination(callback?: (err: AWSError, data: SES.Types.CreateConfigurationSetEventDestinationResponse) => void): Request<SES.Types.CreateConfigurationSetEventDestinationResponse, AWSError>;
  /**
   * Creates an association between a configuration set and a custom domain for open and click event tracking.  By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using configuration sets, see Configuring Custom Domains to Handle Open and Click Tracking in the Amazon SES Developer Guide.
   */
  createConfigurationSetTrackingOptions(params: SES.Types.CreateConfigurationSetTrackingOptionsRequest, callback?: (err: AWSError, data: SES.Types.CreateConfigurationSetTrackingOptionsResponse) => void): Request<SES.Types.CreateConfigurationSetTrackingOptionsResponse, AWSError>;
  /**
   * Creates an association between a configuration set and a custom domain for open and click event tracking.  By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using configuration sets, see Configuring Custom Domains to Handle Open and Click Tracking in the Amazon SES Developer Guide.
   */
  createConfigurationSetTrackingOptions(callback?: (err: AWSError, data: SES.Types.CreateConfigurationSetTrackingOptionsResponse) => void): Request<SES.Types.CreateConfigurationSetTrackingOptionsResponse, AWSError>;
  /**
   * Creates a new IP address filter. For information about setting up IP address filters, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  createReceiptFilter(params: SES.Types.CreateReceiptFilterRequest, callback?: (err: AWSError, data: SES.Types.CreateReceiptFilterResponse) => void): Request<SES.Types.CreateReceiptFilterResponse, AWSError>;
  /**
   * Creates a new IP address filter. For information about setting up IP address filters, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  createReceiptFilter(callback?: (err: AWSError, data: SES.Types.CreateReceiptFilterResponse) => void): Request<SES.Types.CreateReceiptFilterResponse, AWSError>;
  /**
   * Creates a receipt rule. For information about setting up receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  createReceiptRule(params: SES.Types.CreateReceiptRuleRequest, callback?: (err: AWSError, data: SES.Types.CreateReceiptRuleResponse) => void): Request<SES.Types.CreateReceiptRuleResponse, AWSError>;
  /**
   * Creates a receipt rule. For information about setting up receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  createReceiptRule(callback?: (err: AWSError, data: SES.Types.CreateReceiptRuleResponse) => void): Request<SES.Types.CreateReceiptRuleResponse, AWSError>;
  /**
   * Creates an empty receipt rule set. For information about setting up receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  createReceiptRuleSet(params: SES.Types.CreateReceiptRuleSetRequest, callback?: (err: AWSError, data: SES.Types.CreateReceiptRuleSetResponse) => void): Request<SES.Types.CreateReceiptRuleSetResponse, AWSError>;
  /**
   * Creates an empty receipt rule set. For information about setting up receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  createReceiptRuleSet(callback?: (err: AWSError, data: SES.Types.CreateReceiptRuleSetResponse) => void): Request<SES.Types.CreateReceiptRuleSetResponse, AWSError>;
  /**
   * Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  createTemplate(params: SES.Types.CreateTemplateRequest, callback?: (err: AWSError, data: SES.Types.CreateTemplateResponse) => void): Request<SES.Types.CreateTemplateResponse, AWSError>;
  /**
   * Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  createTemplate(callback?: (err: AWSError, data: SES.Types.CreateTemplateResponse) => void): Request<SES.Types.CreateTemplateResponse, AWSError>;
  /**
   * Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  deleteConfigurationSet(params: SES.Types.DeleteConfigurationSetRequest, callback?: (err: AWSError, data: SES.Types.DeleteConfigurationSetResponse) => void): Request<SES.Types.DeleteConfigurationSetResponse, AWSError>;
  /**
   * Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  deleteConfigurationSet(callback?: (err: AWSError, data: SES.Types.DeleteConfigurationSetResponse) => void): Request<SES.Types.DeleteConfigurationSetResponse, AWSError>;
  /**
   * Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  deleteConfigurationSetEventDestination(params: SES.Types.DeleteConfigurationSetEventDestinationRequest, callback?: (err: AWSError, data: SES.Types.DeleteConfigurationSetEventDestinationResponse) => void): Request<SES.Types.DeleteConfigurationSetEventDestinationResponse, AWSError>;
  /**
   * Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  deleteConfigurationSetEventDestination(callback?: (err: AWSError, data: SES.Types.DeleteConfigurationSetEventDestinationResponse) => void): Request<SES.Types.DeleteConfigurationSetEventDestinationResponse, AWSError>;
  /**
   * Deletes an association between a configuration set and a custom domain for open and click event tracking. By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using configuration sets, see Configuring Custom Domains to Handle Open and Click Tracking in the Amazon SES Developer Guide.  Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains. 
   */
  deleteConfigurationSetTrackingOptions(params: SES.Types.DeleteConfigurationSetTrackingOptionsRequest, callback?: (err: AWSError, data: SES.Types.DeleteConfigurationSetTrackingOptionsResponse) => void): Request<SES.Types.DeleteConfigurationSetTrackingOptionsResponse, AWSError>;
  /**
   * Deletes an association between a configuration set and a custom domain for open and click event tracking. By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using configuration sets, see Configuring Custom Domains to Handle Open and Click Tracking in the Amazon SES Developer Guide.  Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains. 
   */
  deleteConfigurationSetTrackingOptions(callback?: (err: AWSError, data: SES.Types.DeleteConfigurationSetTrackingOptionsResponse) => void): Request<SES.Types.DeleteConfigurationSetTrackingOptionsResponse, AWSError>;
  /**
   * Deletes the specified identity (an email address or a domain) from the list of verified identities. You can execute this operation no more than once per second.
   */
  deleteIdentity(params: SES.Types.DeleteIdentityRequest, callback?: (err: AWSError, data: SES.Types.DeleteIdentityResponse) => void): Request<SES.Types.DeleteIdentityResponse, AWSError>;
  /**
   * Deletes the specified identity (an email address or a domain) from the list of verified identities. You can execute this operation no more than once per second.
   */
  deleteIdentity(callback?: (err: AWSError, data: SES.Types.DeleteIdentityResponse) => void): Request<SES.Types.DeleteIdentityResponse, AWSError>;
  /**
   * Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.  This API is for the identity owner only. If you have not verified the identity, this API will return an error.  Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  deleteIdentityPolicy(params: SES.Types.DeleteIdentityPolicyRequest, callback?: (err: AWSError, data: SES.Types.DeleteIdentityPolicyResponse) => void): Request<SES.Types.DeleteIdentityPolicyResponse, AWSError>;
  /**
   * Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.  This API is for the identity owner only. If you have not verified the identity, this API will return an error.  Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  deleteIdentityPolicy(callback?: (err: AWSError, data: SES.Types.DeleteIdentityPolicyResponse) => void): Request<SES.Types.DeleteIdentityPolicyResponse, AWSError>;
  /**
   * Deletes the specified IP address filter. For information about managing IP address filters, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  deleteReceiptFilter(params: SES.Types.DeleteReceiptFilterRequest, callback?: (err: AWSError, data: SES.Types.DeleteReceiptFilterResponse) => void): Request<SES.Types.DeleteReceiptFilterResponse, AWSError>;
  /**
   * Deletes the specified IP address filter. For information about managing IP address filters, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  deleteReceiptFilter(callback?: (err: AWSError, data: SES.Types.DeleteReceiptFilterResponse) => void): Request<SES.Types.DeleteReceiptFilterResponse, AWSError>;
  /**
   * Deletes the specified receipt rule. For information about managing receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  deleteReceiptRule(params: SES.Types.DeleteReceiptRuleRequest, callback?: (err: AWSError, data: SES.Types.DeleteReceiptRuleResponse) => void): Request<SES.Types.DeleteReceiptRuleResponse, AWSError>;
  /**
   * Deletes the specified receipt rule. For information about managing receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  deleteReceiptRule(callback?: (err: AWSError, data: SES.Types.DeleteReceiptRuleResponse) => void): Request<SES.Types.DeleteReceiptRuleResponse, AWSError>;
  /**
   * Deletes the specified receipt rule set and all of the receipt rules it contains.  The currently active rule set cannot be deleted.  For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  deleteReceiptRuleSet(params: SES.Types.DeleteReceiptRuleSetRequest, callback?: (err: AWSError, data: SES.Types.DeleteReceiptRuleSetResponse) => void): Request<SES.Types.DeleteReceiptRuleSetResponse, AWSError>;
  /**
   * Deletes the specified receipt rule set and all of the receipt rules it contains.  The currently active rule set cannot be deleted.  For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  deleteReceiptRuleSet(callback?: (err: AWSError, data: SES.Types.DeleteReceiptRuleSetResponse) => void): Request<SES.Types.DeleteReceiptRuleSetResponse, AWSError>;
  /**
   * Deletes an email template. You can execute this operation no more than once per second.
   */
  deleteTemplate(params: SES.Types.DeleteTemplateRequest, callback?: (err: AWSError, data: SES.Types.DeleteTemplateResponse) => void): Request<SES.Types.DeleteTemplateResponse, AWSError>;
  /**
   * Deletes an email template. You can execute this operation no more than once per second.
   */
  deleteTemplate(callback?: (err: AWSError, data: SES.Types.DeleteTemplateResponse) => void): Request<SES.Types.DeleteTemplateResponse, AWSError>;
  /**
   * Deprecated. Use the DeleteIdentity operation to delete email addresses and domains.
   */
  deleteVerifiedEmailAddress(params: SES.Types.DeleteVerifiedEmailAddressRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deprecated. Use the DeleteIdentity operation to delete email addresses and domains.
   */
  deleteVerifiedEmailAddress(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns the metadata and receipt rules for the receipt rule set that is currently active. For information about setting up receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  describeActiveReceiptRuleSet(params: SES.Types.DescribeActiveReceiptRuleSetRequest, callback?: (err: AWSError, data: SES.Types.DescribeActiveReceiptRuleSetResponse) => void): Request<SES.Types.DescribeActiveReceiptRuleSetResponse, AWSError>;
  /**
   * Returns the metadata and receipt rules for the receipt rule set that is currently active. For information about setting up receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  describeActiveReceiptRuleSet(callback?: (err: AWSError, data: SES.Types.DescribeActiveReceiptRuleSetResponse) => void): Request<SES.Types.DescribeActiveReceiptRuleSetResponse, AWSError>;
  /**
   * Returns the details of the specified configuration set. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  describeConfigurationSet(params: SES.Types.DescribeConfigurationSetRequest, callback?: (err: AWSError, data: SES.Types.DescribeConfigurationSetResponse) => void): Request<SES.Types.DescribeConfigurationSetResponse, AWSError>;
  /**
   * Returns the details of the specified configuration set. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  describeConfigurationSet(callback?: (err: AWSError, data: SES.Types.DescribeConfigurationSetResponse) => void): Request<SES.Types.DescribeConfigurationSetResponse, AWSError>;
  /**
   * Returns the details of the specified receipt rule. For information about setting up receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  describeReceiptRule(params: SES.Types.DescribeReceiptRuleRequest, callback?: (err: AWSError, data: SES.Types.DescribeReceiptRuleResponse) => void): Request<SES.Types.DescribeReceiptRuleResponse, AWSError>;
  /**
   * Returns the details of the specified receipt rule. For information about setting up receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  describeReceiptRule(callback?: (err: AWSError, data: SES.Types.DescribeReceiptRuleResponse) => void): Request<SES.Types.DescribeReceiptRuleResponse, AWSError>;
  /**
   * Returns the details of the specified receipt rule set. For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  describeReceiptRuleSet(params: SES.Types.DescribeReceiptRuleSetRequest, callback?: (err: AWSError, data: SES.Types.DescribeReceiptRuleSetResponse) => void): Request<SES.Types.DescribeReceiptRuleSetResponse, AWSError>;
  /**
   * Returns the details of the specified receipt rule set. For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  describeReceiptRuleSet(callback?: (err: AWSError, data: SES.Types.DescribeReceiptRuleSetResponse) => void): Request<SES.Types.DescribeReceiptRuleSetResponse, AWSError>;
  /**
   * Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published. This operation takes a list of identities as input and returns the following information for each:   Whether Easy DKIM signing is enabled or disabled.   A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.   Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.   This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time. For more information about creating DNS records using DKIM tokens, go to the Amazon SES Developer Guide.
   */
  getIdentityDkimAttributes(params: SES.Types.GetIdentityDkimAttributesRequest, callback?: (err: AWSError, data: SES.Types.GetIdentityDkimAttributesResponse) => void): Request<SES.Types.GetIdentityDkimAttributesResponse, AWSError>;
  /**
   * Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published. This operation takes a list of identities as input and returns the following information for each:   Whether Easy DKIM signing is enabled or disabled.   A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.   Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.   This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time. For more information about creating DNS records using DKIM tokens, go to the Amazon SES Developer Guide.
   */
  getIdentityDkimAttributes(callback?: (err: AWSError, data: SES.Types.GetIdentityDkimAttributesResponse) => void): Request<SES.Types.GetIdentityDkimAttributesResponse, AWSError>;
  /**
   * Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains). This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.
   */
  getIdentityMailFromDomainAttributes(params: SES.Types.GetIdentityMailFromDomainAttributesRequest, callback?: (err: AWSError, data: SES.Types.GetIdentityMailFromDomainAttributesResponse) => void): Request<SES.Types.GetIdentityMailFromDomainAttributesResponse, AWSError>;
  /**
   * Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains). This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.
   */
  getIdentityMailFromDomainAttributes(callback?: (err: AWSError, data: SES.Types.GetIdentityMailFromDomainAttributesResponse) => void): Request<SES.Types.GetIdentityMailFromDomainAttributesResponse, AWSError>;
  /**
   * Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes. This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time. For more information about using notifications with Amazon SES, see the Amazon SES Developer Guide.
   */
  getIdentityNotificationAttributes(params: SES.Types.GetIdentityNotificationAttributesRequest, callback?: (err: AWSError, data: SES.Types.GetIdentityNotificationAttributesResponse) => void): Request<SES.Types.GetIdentityNotificationAttributesResponse, AWSError>;
  /**
   * Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes. This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time. For more information about using notifications with Amazon SES, see the Amazon SES Developer Guide.
   */
  getIdentityNotificationAttributes(callback?: (err: AWSError, data: SES.Types.GetIdentityNotificationAttributesResponse) => void): Request<SES.Types.GetIdentityNotificationAttributesResponse, AWSError>;
  /**
   * Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.  This API is for the identity owner only. If you have not verified the identity, this API will return an error.  Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  getIdentityPolicies(params: SES.Types.GetIdentityPoliciesRequest, callback?: (err: AWSError, data: SES.Types.GetIdentityPoliciesResponse) => void): Request<SES.Types.GetIdentityPoliciesResponse, AWSError>;
  /**
   * Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.  This API is for the identity owner only. If you have not verified the identity, this API will return an error.  Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  getIdentityPolicies(callback?: (err: AWSError, data: SES.Types.GetIdentityPoliciesResponse) => void): Request<SES.Types.GetIdentityPoliciesResponse, AWSError>;
  /**
   * Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity. The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning. For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning. This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.
   */
  getIdentityVerificationAttributes(params: SES.Types.GetIdentityVerificationAttributesRequest, callback?: (err: AWSError, data: SES.Types.GetIdentityVerificationAttributesResponse) => void): Request<SES.Types.GetIdentityVerificationAttributesResponse, AWSError>;
  /**
   * Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity. The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning. For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning. This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.
   */
  getIdentityVerificationAttributes(callback?: (err: AWSError, data: SES.Types.GetIdentityVerificationAttributesResponse) => void): Request<SES.Types.GetIdentityVerificationAttributesResponse, AWSError>;
  /**
   * Provides the sending limits for the Amazon SES account.  You can execute this operation no more than once per second.
   */
  getSendQuota(callback?: (err: AWSError, data: SES.Types.GetSendQuotaResponse) => void): Request<SES.Types.GetSendQuotaResponse, AWSError>;
  /**
   * Provides sending statistics for the Amazon SES account. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time. You can execute this operation no more than once per second.
   */
  getSendStatistics(callback?: (err: AWSError, data: SES.Types.GetSendStatisticsResponse) => void): Request<SES.Types.GetSendStatisticsResponse, AWSError>;
  /**
   * Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify. You can execute this operation no more than once per second.
   */
  getTemplate(params: SES.Types.GetTemplateRequest, callback?: (err: AWSError, data: SES.Types.GetTemplateResponse) => void): Request<SES.Types.GetTemplateResponse, AWSError>;
  /**
   * Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify. You can execute this operation no more than once per second.
   */
  getTemplate(callback?: (err: AWSError, data: SES.Types.GetTemplateResponse) => void): Request<SES.Types.GetTemplateResponse, AWSError>;
  /**
   * Provides a list of the configuration sets associated with your Amazon SES account. For information about using configuration sets, see Monitoring Your Amazon SES Sending Activity in the Amazon SES Developer Guide.  You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the ListConfigurationSets operation again, passing the NextToken parameter and the value of the NextToken element to retrieve additional results.
   */
  listConfigurationSets(params: SES.Types.ListConfigurationSetsRequest, callback?: (err: AWSError, data: SES.Types.ListConfigurationSetsResponse) => void): Request<SES.Types.ListConfigurationSetsResponse, AWSError>;
  /**
   * Provides a list of the configuration sets associated with your Amazon SES account. For information about using configuration sets, see Monitoring Your Amazon SES Sending Activity in the Amazon SES Developer Guide.  You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the ListConfigurationSets operation again, passing the NextToken parameter and the value of the NextToken element to retrieve additional results.
   */
  listConfigurationSets(callback?: (err: AWSError, data: SES.Types.ListConfigurationSetsResponse) => void): Request<SES.Types.ListConfigurationSetsResponse, AWSError>;
  /**
   * Returns a list containing all of the identities (email addresses and domains) for your AWS account, regardless of verification status. You can execute this operation no more than once per second.
   */
  listIdentities(params: SES.Types.ListIdentitiesRequest, callback?: (err: AWSError, data: SES.Types.ListIdentitiesResponse) => void): Request<SES.Types.ListIdentitiesResponse, AWSError>;
  /**
   * Returns a list containing all of the identities (email addresses and domains) for your AWS account, regardless of verification status. You can execute this operation no more than once per second.
   */
  listIdentities(callback?: (err: AWSError, data: SES.Types.ListIdentitiesResponse) => void): Request<SES.Types.ListIdentitiesResponse, AWSError>;
  /**
   * Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use GetIdentityPolicies.  This API is for the identity owner only. If you have not verified the identity, this API will return an error.  Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  listIdentityPolicies(params: SES.Types.ListIdentityPoliciesRequest, callback?: (err: AWSError, data: SES.Types.ListIdentityPoliciesResponse) => void): Request<SES.Types.ListIdentityPoliciesResponse, AWSError>;
  /**
   * Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use GetIdentityPolicies.  This API is for the identity owner only. If you have not verified the identity, this API will return an error.  Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  listIdentityPolicies(callback?: (err: AWSError, data: SES.Types.ListIdentityPoliciesResponse) => void): Request<SES.Types.ListIdentityPoliciesResponse, AWSError>;
  /**
   * Lists the IP address filters associated with your AWS account. For information about managing IP address filters, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  listReceiptFilters(params: SES.Types.ListReceiptFiltersRequest, callback?: (err: AWSError, data: SES.Types.ListReceiptFiltersResponse) => void): Request<SES.Types.ListReceiptFiltersResponse, AWSError>;
  /**
   * Lists the IP address filters associated with your AWS account. For information about managing IP address filters, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  listReceiptFilters(callback?: (err: AWSError, data: SES.Types.ListReceiptFiltersResponse) => void): Request<SES.Types.ListReceiptFiltersResponse, AWSError>;
  /**
   * Lists the receipt rule sets that exist under your AWS account. If there are additional receipt rule sets to be retrieved, you will receive a NextToken that you can provide to the next call to ListReceiptRuleSets to retrieve the additional entries. For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  listReceiptRuleSets(params: SES.Types.ListReceiptRuleSetsRequest, callback?: (err: AWSError, data: SES.Types.ListReceiptRuleSetsResponse) => void): Request<SES.Types.ListReceiptRuleSetsResponse, AWSError>;
  /**
   * Lists the receipt rule sets that exist under your AWS account. If there are additional receipt rule sets to be retrieved, you will receive a NextToken that you can provide to the next call to ListReceiptRuleSets to retrieve the additional entries. For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  listReceiptRuleSets(callback?: (err: AWSError, data: SES.Types.ListReceiptRuleSetsResponse) => void): Request<SES.Types.ListReceiptRuleSetsResponse, AWSError>;
  /**
   * Lists the email templates present in your Amazon SES account. You can execute this operation no more than once per second.
   */
  listTemplates(params: SES.Types.ListTemplatesRequest, callback?: (err: AWSError, data: SES.Types.ListTemplatesResponse) => void): Request<SES.Types.ListTemplatesResponse, AWSError>;
  /**
   * Lists the email templates present in your Amazon SES account. You can execute this operation no more than once per second.
   */
  listTemplates(callback?: (err: AWSError, data: SES.Types.ListTemplatesResponse) => void): Request<SES.Types.ListTemplatesResponse, AWSError>;
  /**
   * Deprecated. Use the ListIdentities operation to list the email addresses and domains associated with your account.
   */
  listVerifiedEmailAddresses(callback?: (err: AWSError, data: SES.Types.ListVerifiedEmailAddressesResponse) => void): Request<SES.Types.ListVerifiedEmailAddressesResponse, AWSError>;
  /**
   * Adds or updates a sending authorization policy for the specified identity (an email address or a domain).  This API is for the identity owner only. If you have not verified the identity, this API will return an error.  Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  putIdentityPolicy(params: SES.Types.PutIdentityPolicyRequest, callback?: (err: AWSError, data: SES.Types.PutIdentityPolicyResponse) => void): Request<SES.Types.PutIdentityPolicyResponse, AWSError>;
  /**
   * Adds or updates a sending authorization policy for the specified identity (an email address or a domain).  This API is for the identity owner only. If you have not verified the identity, this API will return an error.  Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  putIdentityPolicy(callback?: (err: AWSError, data: SES.Types.PutIdentityPolicyResponse) => void): Request<SES.Types.PutIdentityPolicyResponse, AWSError>;
  /**
   * Reorders the receipt rules within a receipt rule set.  All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.  For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  reorderReceiptRuleSet(params: SES.Types.ReorderReceiptRuleSetRequest, callback?: (err: AWSError, data: SES.Types.ReorderReceiptRuleSetResponse) => void): Request<SES.Types.ReorderReceiptRuleSetResponse, AWSError>;
  /**
   * Reorders the receipt rules within a receipt rule set.  All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.  For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  reorderReceiptRuleSet(callback?: (err: AWSError, data: SES.Types.ReorderReceiptRuleSetResponse) => void): Request<SES.Types.ReorderReceiptRuleSetResponse, AWSError>;
  /**
   * Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this API on an email up to 24 hours after you receive it.  You cannot use this API to send generic bounces for mail that was not received by Amazon SES.  For information about receiving email through Amazon SES, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  sendBounce(params: SES.Types.SendBounceRequest, callback?: (err: AWSError, data: SES.Types.SendBounceResponse) => void): Request<SES.Types.SendBounceResponse, AWSError>;
  /**
   * Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this API on an email up to 24 hours after you receive it.  You cannot use this API to send generic bounces for mail that was not received by Amazon SES.  For information about receiving email through Amazon SES, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  sendBounce(callback?: (err: AWSError, data: SES.Types.SendBounceResponse) => void): Request<SES.Types.SendBounceResponse, AWSError>;
  /**
   * Composes an email message to multiple destinations. The message body is created using an email template. In order to send email using the SendBulkTemplatedEmail operation, your call to the API must meet the following requirements:   The call must refer to an existing email template. You can create email templates using the CreateTemplate operation.   The message must be sent from a verified email address or domain.   If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide.    The total size of the message, including attachments, must be less than 10 MB.   Each Destination parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format UserName@[SubDomain.]Domain.TopLevelDomain), the entire message will be rejected, even if the message contains other recipients that are valid.  
   */
  sendBulkTemplatedEmail(params: SES.Types.SendBulkTemplatedEmailRequest, callback?: (err: AWSError, data: SES.Types.SendBulkTemplatedEmailResponse) => void): Request<SES.Types.SendBulkTemplatedEmailResponse, AWSError>;
  /**
   * Composes an email message to multiple destinations. The message body is created using an email template. In order to send email using the SendBulkTemplatedEmail operation, your call to the API must meet the following requirements:   The call must refer to an existing email template. You can create email templates using the CreateTemplate operation.   The message must be sent from a verified email address or domain.   If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide.    The total size of the message, including attachments, must be less than 10 MB.   Each Destination parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format UserName@[SubDomain.]Domain.TopLevelDomain), the entire message will be rejected, even if the message contains other recipients that are valid.  
   */
  sendBulkTemplatedEmail(callback?: (err: AWSError, data: SES.Types.SendBulkTemplatedEmailResponse) => void): Request<SES.Types.SendBulkTemplatedEmailResponse, AWSError>;
  /**
   * Composes an email message and immediately queues it for sending. In order to send email using the SendEmail operation, your message must meet the following requirements:   The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an "Email address not verified" error.    If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide.    The total size of the message, including attachments, must be smaller than 10 MB.   The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format UserName@[SubDomain.]Domain.TopLevelDomain), the entire message will be rejected, even if the message contains other recipients that are valid.   The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the SendEmail operation several times to send the message to each group.    For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your sending quota). For more information about sending quotas in Amazon SES, see Managing Your Amazon SES Sending Limits in the Amazon SES Developer Guide.  
   */
  sendEmail(params: SES.Types.SendEmailRequest, callback?: (err: AWSError, data: SES.Types.SendEmailResponse) => void): Request<SES.Types.SendEmailResponse, AWSError>;
  /**
   * Composes an email message and immediately queues it for sending. In order to send email using the SendEmail operation, your message must meet the following requirements:   The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an "Email address not verified" error.    If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide.    The total size of the message, including attachments, must be smaller than 10 MB.   The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format UserName@[SubDomain.]Domain.TopLevelDomain), the entire message will be rejected, even if the message contains other recipients that are valid.   The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the SendEmail operation several times to send the message to each group.    For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your sending quota). For more information about sending quotas in Amazon SES, see Managing Your Amazon SES Sending Limits in the Amazon SES Developer Guide.  
   */
  sendEmail(callback?: (err: AWSError, data: SES.Types.SendEmailResponse) => void): Request<SES.Types.SendEmailResponse, AWSError>;
  /**
   * Composes an email message and immediately queues it for sending. When calling this operation, you may specify the message headers as well as the content. The SendRawEmail operation is particularly useful for sending multipart MIME emails (such as those that contain both a plain-text and an HTML version).  In order to send email using the SendRawEmail operation, your message must meet the following requirements:   The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an "Email address not verified" error.    If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide.    The total size of the message, including attachments, must be smaller than 10 MB.   The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format UserName@[SubDomain.]Domain.TopLevelDomain), the entire message will be rejected, even if the message contains other recipients that are valid.   The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the SendRawEmail operation several times to send the message to each group.    For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your sending quota). For more information about sending quotas in Amazon SES, see Managing Your Amazon SES Sending Limits in the Amazon SES Developer Guide.   Additionally, keep the following considerations in mind when using the SendRawEmail operation:   Although you can customize the message headers when using the SendRawEmail operation, Amazon SES will automatically apply its own Message-ID and Date headers; if you passed these headers when creating the message, they will be overwritten by the values that Amazon SES provides.   If you are using sending authorization to send on behalf of another user, SendRawEmail enables you to specify the cross-account identity for the email's Source, From, and Return-Path parameters in one of two ways: you can pass optional parameters SourceArn, FromArn, and/or ReturnPathArn to the API, or you can include the following X-headers in the header of your raw email:    X-SES-SOURCE-ARN     X-SES-FROM-ARN     X-SES-RETURN-PATH-ARN     Do not include these X-headers in the DKIM signature; Amazon SES will remove them before sending the email.  For most common sending authorization scenarios, we recommend that you specify the SourceIdentityArn parameter and not the FromIdentityArn or ReturnPathIdentityArn parameters. If you only specify the SourceIdentityArn parameter, Amazon SES will set the From and Return Path addresses to the identity specified in SourceIdentityArn. For more information about sending authorization, see the Using Sending Authorization with Amazon SES in the Amazon SES Developer Guide.   
   */
  sendRawEmail(params: SES.Types.SendRawEmailRequest, callback?: (err: AWSError, data: SES.Types.SendRawEmailResponse) => void): Request<SES.Types.SendRawEmailResponse, AWSError>;
  /**
   * Composes an email message and immediately queues it for sending. When calling this operation, you may specify the message headers as well as the content. The SendRawEmail operation is particularly useful for sending multipart MIME emails (such as those that contain both a plain-text and an HTML version).  In order to send email using the SendRawEmail operation, your message must meet the following requirements:   The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an "Email address not verified" error.    If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide.    The total size of the message, including attachments, must be smaller than 10 MB.   The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format UserName@[SubDomain.]Domain.TopLevelDomain), the entire message will be rejected, even if the message contains other recipients that are valid.   The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the SendRawEmail operation several times to send the message to each group.    For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your sending quota). For more information about sending quotas in Amazon SES, see Managing Your Amazon SES Sending Limits in the Amazon SES Developer Guide.   Additionally, keep the following considerations in mind when using the SendRawEmail operation:   Although you can customize the message headers when using the SendRawEmail operation, Amazon SES will automatically apply its own Message-ID and Date headers; if you passed these headers when creating the message, they will be overwritten by the values that Amazon SES provides.   If you are using sending authorization to send on behalf of another user, SendRawEmail enables you to specify the cross-account identity for the email's Source, From, and Return-Path parameters in one of two ways: you can pass optional parameters SourceArn, FromArn, and/or ReturnPathArn to the API, or you can include the following X-headers in the header of your raw email:    X-SES-SOURCE-ARN     X-SES-FROM-ARN     X-SES-RETURN-PATH-ARN     Do not include these X-headers in the DKIM signature; Amazon SES will remove them before sending the email.  For most common sending authorization scenarios, we recommend that you specify the SourceIdentityArn parameter and not the FromIdentityArn or ReturnPathIdentityArn parameters. If you only specify the SourceIdentityArn parameter, Amazon SES will set the From and Return Path addresses to the identity specified in SourceIdentityArn. For more information about sending authorization, see the Using Sending Authorization with Amazon SES in the Amazon SES Developer Guide.   
   */
  sendRawEmail(callback?: (err: AWSError, data: SES.Types.SendRawEmailResponse) => void): Request<SES.Types.SendRawEmailResponse, AWSError>;
  /**
   * Composes an email message using an email template and immediately queues it for sending. In order to send email using the SendTemplatedEmail operation, your call to the API must meet the following requirements:   The call must refer to an existing email template. You can create email templates using the CreateTemplate operation.   The message must be sent from a verified email address or domain.   If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide.    The total size of the message, including attachments, must be less than 10 MB.   Calls to the SendTemplatedEmail operation may only include one Destination parameter. A destination is a set of recipients who will receive the same version of the email. The Destination parameter can include up to 50 recipients, across the To:, CC: and BCC: fields.   The Destination parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format UserName@[SubDomain.]Domain.TopLevelDomain), the entire message will be rejected, even if the message contains other recipients that are valid.  
   */
  sendTemplatedEmail(params: SES.Types.SendTemplatedEmailRequest, callback?: (err: AWSError, data: SES.Types.SendTemplatedEmailResponse) => void): Request<SES.Types.SendTemplatedEmailResponse, AWSError>;
  /**
   * Composes an email message using an email template and immediately queues it for sending. In order to send email using the SendTemplatedEmail operation, your call to the API must meet the following requirements:   The call must refer to an existing email template. You can create email templates using the CreateTemplate operation.   The message must be sent from a verified email address or domain.   If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide.    The total size of the message, including attachments, must be less than 10 MB.   Calls to the SendTemplatedEmail operation may only include one Destination parameter. A destination is a set of recipients who will receive the same version of the email. The Destination parameter can include up to 50 recipients, across the To:, CC: and BCC: fields.   The Destination parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format UserName@[SubDomain.]Domain.TopLevelDomain), the entire message will be rejected, even if the message contains other recipients that are valid.  
   */
  sendTemplatedEmail(callback?: (err: AWSError, data: SES.Types.SendTemplatedEmailResponse) => void): Request<SES.Types.SendTemplatedEmailResponse, AWSError>;
  /**
   * Sets the specified receipt rule set as the active receipt rule set.  To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.  For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  setActiveReceiptRuleSet(params: SES.Types.SetActiveReceiptRuleSetRequest, callback?: (err: AWSError, data: SES.Types.SetActiveReceiptRuleSetResponse) => void): Request<SES.Types.SetActiveReceiptRuleSetResponse, AWSError>;
  /**
   * Sets the specified receipt rule set as the active receipt rule set.  To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.  For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  setActiveReceiptRuleSet(callback?: (err: AWSError, data: SES.Types.SetActiveReceiptRuleSetResponse) => void): Request<SES.Types.SetActiveReceiptRuleSetResponse, AWSError>;
  /**
   * Enables or disables Easy DKIM signing of email sent from an identity:   If Easy DKIM signing is enabled for a domain name identity (such as example.com), then Amazon SES will DKIM-sign all email sent by addresses under that domain name (for example, user@example.com).   If Easy DKIM signing is enabled for an email address, then Amazon SES will DKIM-sign all email sent by that email address.   For email addresses (for example, user@example.com), you can only enable Easy DKIM signing if the corresponding domain (in this case, example.com) has been set up for Easy DKIM using the AWS Console or the VerifyDomainDkim operation. You can execute this operation no more than once per second. For more information about Easy DKIM signing, go to the Amazon SES Developer Guide.
   */
  setIdentityDkimEnabled(params: SES.Types.SetIdentityDkimEnabledRequest, callback?: (err: AWSError, data: SES.Types.SetIdentityDkimEnabledResponse) => void): Request<SES.Types.SetIdentityDkimEnabledResponse, AWSError>;
  /**
   * Enables or disables Easy DKIM signing of email sent from an identity:   If Easy DKIM signing is enabled for a domain name identity (such as example.com), then Amazon SES will DKIM-sign all email sent by addresses under that domain name (for example, user@example.com).   If Easy DKIM signing is enabled for an email address, then Amazon SES will DKIM-sign all email sent by that email address.   For email addresses (for example, user@example.com), you can only enable Easy DKIM signing if the corresponding domain (in this case, example.com) has been set up for Easy DKIM using the AWS Console or the VerifyDomainDkim operation. You can execute this operation no more than once per second. For more information about Easy DKIM signing, go to the Amazon SES Developer Guide.
   */
  setIdentityDkimEnabled(callback?: (err: AWSError, data: SES.Types.SetIdentityDkimEnabledResponse) => void): Request<SES.Types.SetIdentityDkimEnabledResponse, AWSError>;
  /**
   * Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.  Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.  You can execute this operation no more than once per second. For more information about using notifications with Amazon SES, see the Amazon SES Developer Guide.
   */
  setIdentityFeedbackForwardingEnabled(params: SES.Types.SetIdentityFeedbackForwardingEnabledRequest, callback?: (err: AWSError, data: SES.Types.SetIdentityFeedbackForwardingEnabledResponse) => void): Request<SES.Types.SetIdentityFeedbackForwardingEnabledResponse, AWSError>;
  /**
   * Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.  Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.  You can execute this operation no more than once per second. For more information about using notifications with Amazon SES, see the Amazon SES Developer Guide.
   */
  setIdentityFeedbackForwardingEnabled(callback?: (err: AWSError, data: SES.Types.SetIdentityFeedbackForwardingEnabledResponse) => void): Request<SES.Types.SetIdentityFeedbackForwardingEnabledResponse, AWSError>;
  /**
   * Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type. You can execute this operation no more than once per second. For more information about using notifications with Amazon SES, see the Amazon SES Developer Guide.
   */
  setIdentityHeadersInNotificationsEnabled(params: SES.Types.SetIdentityHeadersInNotificationsEnabledRequest, callback?: (err: AWSError, data: SES.Types.SetIdentityHeadersInNotificationsEnabledResponse) => void): Request<SES.Types.SetIdentityHeadersInNotificationsEnabledResponse, AWSError>;
  /**
   * Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type. You can execute this operation no more than once per second. For more information about using notifications with Amazon SES, see the Amazon SES Developer Guide.
   */
  setIdentityHeadersInNotificationsEnabled(callback?: (err: AWSError, data: SES.Types.SetIdentityHeadersInNotificationsEnabledResponse) => void): Request<SES.Types.SetIdentityHeadersInNotificationsEnabledResponse, AWSError>;
  /**
   * Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).  To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the Amazon SES Developer Guide.  You can execute this operation no more than once per second.
   */
  setIdentityMailFromDomain(params: SES.Types.SetIdentityMailFromDomainRequest, callback?: (err: AWSError, data: SES.Types.SetIdentityMailFromDomainResponse) => void): Request<SES.Types.SetIdentityMailFromDomainResponse, AWSError>;
  /**
   * Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).  To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the Amazon SES Developer Guide.  You can execute this operation no more than once per second.
   */
  setIdentityMailFromDomain(callback?: (err: AWSError, data: SES.Types.SetIdentityMailFromDomainResponse) => void): Request<SES.Types.SetIdentityMailFromDomainResponse, AWSError>;
  /**
   * Given an identity (an email address or a domain), sets the Amazon Simple Notification Service (Amazon SNS) topic to which Amazon SES will publish bounce, complaint, and/or delivery notifications for emails sent with that identity as the Source.  Unless feedback forwarding is enabled, you must specify Amazon SNS topics for bounce and complaint notifications. For more information, see SetIdentityFeedbackForwardingEnabled.  You can execute this operation no more than once per second. For more information about feedback notification, see the Amazon SES Developer Guide.
   */
  setIdentityNotificationTopic(params: SES.Types.SetIdentityNotificationTopicRequest, callback?: (err: AWSError, data: SES.Types.SetIdentityNotificationTopicResponse) => void): Request<SES.Types.SetIdentityNotificationTopicResponse, AWSError>;
  /**
   * Given an identity (an email address or a domain), sets the Amazon Simple Notification Service (Amazon SNS) topic to which Amazon SES will publish bounce, complaint, and/or delivery notifications for emails sent with that identity as the Source.  Unless feedback forwarding is enabled, you must specify Amazon SNS topics for bounce and complaint notifications. For more information, see SetIdentityFeedbackForwardingEnabled.  You can execute this operation no more than once per second. For more information about feedback notification, see the Amazon SES Developer Guide.
   */
  setIdentityNotificationTopic(callback?: (err: AWSError, data: SES.Types.SetIdentityNotificationTopicResponse) => void): Request<SES.Types.SetIdentityNotificationTopicResponse, AWSError>;
  /**
   * Sets the position of the specified receipt rule in the receipt rule set. For information about managing receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  setReceiptRulePosition(params: SES.Types.SetReceiptRulePositionRequest, callback?: (err: AWSError, data: SES.Types.SetReceiptRulePositionResponse) => void): Request<SES.Types.SetReceiptRulePositionResponse, AWSError>;
  /**
   * Sets the position of the specified receipt rule in the receipt rule set. For information about managing receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  setReceiptRulePosition(callback?: (err: AWSError, data: SES.Types.SetReceiptRulePositionResponse) => void): Request<SES.Types.SetReceiptRulePositionResponse, AWSError>;
  /**
   * Creates a preview of the MIME content of an email when provided with a template and a set of replacement data. You can execute this operation no more than once per second.
   */
  testRenderTemplate(params: SES.Types.TestRenderTemplateRequest, callback?: (err: AWSError, data: SES.Types.TestRenderTemplateResponse) => void): Request<SES.Types.TestRenderTemplateResponse, AWSError>;
  /**
   * Creates a preview of the MIME content of an email when provided with a template and a set of replacement data. You can execute this operation no more than once per second.
   */
  testRenderTemplate(callback?: (err: AWSError, data: SES.Types.TestRenderTemplateResponse) => void): Request<SES.Types.TestRenderTemplateResponse, AWSError>;
  /**
   * Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see Monitoring Your Amazon SES Sending Activity in the Amazon SES Developer Guide.   When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).  You can execute this operation no more than once per second.
   */
  updateConfigurationSetEventDestination(params: SES.Types.UpdateConfigurationSetEventDestinationRequest, callback?: (err: AWSError, data: SES.Types.UpdateConfigurationSetEventDestinationResponse) => void): Request<SES.Types.UpdateConfigurationSetEventDestinationResponse, AWSError>;
  /**
   * Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see Monitoring Your Amazon SES Sending Activity in the Amazon SES Developer Guide.   When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).  You can execute this operation no more than once per second.
   */
  updateConfigurationSetEventDestination(callback?: (err: AWSError, data: SES.Types.UpdateConfigurationSetEventDestinationResponse) => void): Request<SES.Types.UpdateConfigurationSetEventDestinationResponse, AWSError>;
  /**
   * Modifies an association between a configuration set and a custom domain for open and click event tracking.  By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using configuration sets, see Configuring Custom Domains to Handle Open and Click Tracking in the Amazon SES Developer Guide.
   */
  updateConfigurationSetTrackingOptions(params: SES.Types.UpdateConfigurationSetTrackingOptionsRequest, callback?: (err: AWSError, data: SES.Types.UpdateConfigurationSetTrackingOptionsResponse) => void): Request<SES.Types.UpdateConfigurationSetTrackingOptionsResponse, AWSError>;
  /**
   * Modifies an association between a configuration set and a custom domain for open and click event tracking.  By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using configuration sets, see Configuring Custom Domains to Handle Open and Click Tracking in the Amazon SES Developer Guide.
   */
  updateConfigurationSetTrackingOptions(callback?: (err: AWSError, data: SES.Types.UpdateConfigurationSetTrackingOptionsResponse) => void): Request<SES.Types.UpdateConfigurationSetTrackingOptionsResponse, AWSError>;
  /**
   * Updates a receipt rule. For information about managing receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  updateReceiptRule(params: SES.Types.UpdateReceiptRuleRequest, callback?: (err: AWSError, data: SES.Types.UpdateReceiptRuleResponse) => void): Request<SES.Types.UpdateReceiptRuleResponse, AWSError>;
  /**
   * Updates a receipt rule. For information about managing receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  updateReceiptRule(callback?: (err: AWSError, data: SES.Types.UpdateReceiptRuleResponse) => void): Request<SES.Types.UpdateReceiptRuleResponse, AWSError>;
  /**
   * Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  updateTemplate(params: SES.Types.UpdateTemplateRequest, callback?: (err: AWSError, data: SES.Types.UpdateTemplateResponse) => void): Request<SES.Types.UpdateTemplateResponse, AWSError>;
  /**
   * Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.
   */
  updateTemplate(callback?: (err: AWSError, data: SES.Types.UpdateTemplateResponse) => void): Request<SES.Types.UpdateTemplateResponse, AWSError>;
  /**
   * Returns a set of DKIM tokens for a domain. DKIM tokens are character strings that represent your domain's identity. Using these tokens, you will need to create DNS CNAME records that point to DKIM public keys hosted by Amazon SES. Amazon Web Services will eventually detect that you have updated your DNS records; this detection process may take up to 72 hours. Upon successful detection, Amazon SES will be able to DKIM-sign email originating from that domain. You can execute this operation no more than once per second. To enable or disable Easy DKIM signing for a domain, use the SetIdentityDkimEnabled operation. For more information about creating DNS records using DKIM tokens, go to the Amazon SES Developer Guide.
   */
  verifyDomainDkim(params: SES.Types.VerifyDomainDkimRequest, callback?: (err: AWSError, data: SES.Types.VerifyDomainDkimResponse) => void): Request<SES.Types.VerifyDomainDkimResponse, AWSError>;
  /**
   * Returns a set of DKIM tokens for a domain. DKIM tokens are character strings that represent your domain's identity. Using these tokens, you will need to create DNS CNAME records that point to DKIM public keys hosted by Amazon SES. Amazon Web Services will eventually detect that you have updated your DNS records; this detection process may take up to 72 hours. Upon successful detection, Amazon SES will be able to DKIM-sign email originating from that domain. You can execute this operation no more than once per second. To enable or disable Easy DKIM signing for a domain, use the SetIdentityDkimEnabled operation. For more information about creating DNS records using DKIM tokens, go to the Amazon SES Developer Guide.
   */
  verifyDomainDkim(callback?: (err: AWSError, data: SES.Types.VerifyDomainDkimResponse) => void): Request<SES.Types.VerifyDomainDkimResponse, AWSError>;
  /**
   * Adds a domain to the list of identities for your Amazon SES account and attempts to verify it. For more information about verifying domains, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide.  You can execute this operation no more than once per second.
   */
  verifyDomainIdentity(params: SES.Types.VerifyDomainIdentityRequest, callback?: (err: AWSError, data: SES.Types.VerifyDomainIdentityResponse) => void): Request<SES.Types.VerifyDomainIdentityResponse, AWSError>;
  /**
   * Adds a domain to the list of identities for your Amazon SES account and attempts to verify it. For more information about verifying domains, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide.  You can execute this operation no more than once per second.
   */
  verifyDomainIdentity(callback?: (err: AWSError, data: SES.Types.VerifyDomainIdentityResponse) => void): Request<SES.Types.VerifyDomainIdentityResponse, AWSError>;
  /**
   * Deprecated. Use the VerifyEmailIdentity operation to verify a new email address.
   */
  verifyEmailAddress(params: SES.Types.VerifyEmailAddressRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deprecated. Use the VerifyEmailIdentity operation to verify a new email address.
   */
  verifyEmailAddress(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds an email address to the list of identities for your Amazon SES account and attempts to verify it. This operation causes a confirmation email message to be sent to the specified address. You can execute this operation no more than once per second.
   */
  verifyEmailIdentity(params: SES.Types.VerifyEmailIdentityRequest, callback?: (err: AWSError, data: SES.Types.VerifyEmailIdentityResponse) => void): Request<SES.Types.VerifyEmailIdentityResponse, AWSError>;
  /**
   * Adds an email address to the list of identities for your Amazon SES account and attempts to verify it. This operation causes a confirmation email message to be sent to the specified address. You can execute this operation no more than once per second.
   */
  verifyEmailIdentity(callback?: (err: AWSError, data: SES.Types.VerifyEmailIdentityResponse) => void): Request<SES.Types.VerifyEmailIdentityResponse, AWSError>;
  /**
   * Waits for the identityExists state by periodically calling the underlying SES.getIdentityVerificationAttributesoperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "identityExists", params: SES.Types.GetIdentityVerificationAttributesRequest, callback?: (err: AWSError, data: SES.Types.GetIdentityVerificationAttributesResponse) => void): Request<SES.Types.GetIdentityVerificationAttributesResponse, AWSError>;
  /**
   * Waits for the identityExists state by periodically calling the underlying SES.getIdentityVerificationAttributesoperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "identityExists", callback?: (err: AWSError, data: SES.Types.GetIdentityVerificationAttributesResponse) => void): Request<SES.Types.GetIdentityVerificationAttributesResponse, AWSError>;
}
declare namespace SES {
  export interface AddHeaderAction {
    /**
     * The name of the header to add. Must be between 1 and 50 characters, inclusive, and consist of alphanumeric (a-z, A-Z, 0-9) characters and dashes only.
     */
    HeaderName: HeaderName;
    /**
     * Must be less than 2048 characters, and must not contain newline characters ("\r" or "\n").
     */
    HeaderValue: HeaderValue;
  }
  export type Address = string;
  export type AddressList = Address[];
  export type AmazonResourceName = string;
  export type ArrivalDate = Date;
  export type BehaviorOnMXFailure = "UseDefaultValue"|"RejectMessage"|string;
  export interface Body {
    /**
     * The content of the message, in text format. Use this for text-based email clients, or clients on high-latency networks (such as mobile devices).
     */
    Text?: Content;
    /**
     * The content of the message, in HTML format. Use this for email clients that can process HTML. You can include clickable links, formatted text, and much more in an HTML message.
     */
    Html?: Content;
  }
  export interface BounceAction {
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the bounce action is taken. An example of an Amazon SNS topic ARN is arn:aws:sns:us-west-2:123456789012:MyTopic. For more information about Amazon SNS topics, see the Amazon SNS Developer Guide.
     */
    TopicArn?: AmazonResourceName;
    /**
     * The SMTP reply code, as defined by RFC 5321.
     */
    SmtpReplyCode: BounceSmtpReplyCode;
    /**
     * The SMTP enhanced status code, as defined by RFC 3463.
     */
    StatusCode?: BounceStatusCode;
    /**
     * Human-readable text to include in the bounce message.
     */
    Message: BounceMessage;
    /**
     * The email address of the sender of the bounced email. This is the address from which the bounce message will be sent.
     */
    Sender: Address;
  }
  export type BounceMessage = string;
  export type BounceSmtpReplyCode = string;
  export type BounceStatusCode = string;
  export type BounceType = "DoesNotExist"|"MessageTooLarge"|"ExceededQuota"|"ContentRejected"|"Undefined"|"TemporaryFailure"|string;
  export interface BouncedRecipientInfo {
    /**
     * The email address of the recipient of the bounced email.
     */
    Recipient: Address;
    /**
     * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to receive email for the recipient of the bounced email. For more information about sending authorization, see the Amazon SES Developer Guide.
     */
    RecipientArn?: AmazonResourceName;
    /**
     * The reason for the bounce. You must provide either this parameter or RecipientDsnFields.
     */
    BounceType?: BounceType;
    /**
     * Recipient-related DSN fields, most of which would normally be filled in automatically when provided with a BounceType. You must provide either this parameter or BounceType.
     */
    RecipientDsnFields?: RecipientDsnFields;
  }
  export type BouncedRecipientInfoList = BouncedRecipientInfo[];
  export interface BulkEmailDestination {
    Destination: Destination;
    /**
     * A list of tags, in the form of name/value pairs, to apply to an email that you send using SendBulkTemplatedEmail. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
     */
    ReplacementTags?: MessageTagList;
    /**
     * A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.
     */
    ReplacementTemplateData?: TemplateData;
  }
  export type BulkEmailDestinationList = BulkEmailDestination[];
  export interface BulkEmailDestinationStatus {
    /**
     * The status of a message sent using the SendBulkTemplatedEmail operation. Possible values for this parameter include:    Success: Amazon SES accepted the message, and will attempt to deliver it to the recipients.    MessageRejected: The message was rejected because it contained a virus.    MailFromDomainNotVerified: The sender's email address or domain was not verified.    ConfigurationSetDoesNotExist: The configuration set you specified does not exist.    TemplateDoesNotExist: The template you specified does not exist.    AccountSuspended: Your account has been shut down because of issues related to your email sending practices.    AccountThrottled: The number of emails you can send has been reduced because your account has exceeded its allocated sending limit.    AccountDailyQuotaExceeded: You have reached or exceeded the maximum number of emails you can send from your account in a 24-hour period.    InvalidSendingPoolName: The configuration set you specified refers to an IP pool that does not exist.    InvalidParameterValue: One or more of the parameters you specified when calling this operation was invalid. See the error message for additional information.    TransientFailure: Amazon SES was unable to process your request because of a temporary issue.    Failed: Amazon SES was unable to process your request. See the error message for additional information.  
     */
    Status?: BulkEmailStatus;
    /**
     * A description of an error that prevented a message being sent using the SendBulkTemplatedEmail operation.
     */
    Error?: Error;
    /**
     * The unique message identifier returned from the SendBulkTemplatedEmail operation.
     */
    MessageId?: MessageId;
  }
  export type BulkEmailDestinationStatusList = BulkEmailDestinationStatus[];
  export type BulkEmailStatus = "Success"|"MessageRejected"|"MailFromDomainNotVerified"|"ConfigurationSetDoesNotExist"|"TemplateDoesNotExist"|"AccountSuspended"|"AccountThrottled"|"AccountDailyQuotaExceeded"|"InvalidSendingPoolName"|"InvalidParameterValue"|"TransientFailure"|"Failed"|string;
  export type Charset = string;
  export type Cidr = string;
  export interface CloneReceiptRuleSetRequest {
    /**
     * The name of the rule set to create. The name must:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-).   Start and end with a letter or number.   Contain less than 64 characters.  
     */
    RuleSetName: ReceiptRuleSetName;
    /**
     * The name of the rule set to clone.
     */
    OriginalRuleSetName: ReceiptRuleSetName;
  }
  export interface CloneReceiptRuleSetResponse {
  }
  export interface CloudWatchDestination {
    /**
     * A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.
     */
    DimensionConfigurations: CloudWatchDimensionConfigurations;
  }
  export interface CloudWatchDimensionConfiguration {
    /**
     * The name of an Amazon CloudWatch dimension associated with an email sending metric. The name must:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).   Contain less than 256 characters.  
     */
    DimensionName: DimensionName;
    /**
     * The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. If you want Amazon SES to use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, choose messageTag. If you want Amazon SES to use your own email headers, choose emailHeader.
     */
    DimensionValueSource: DimensionValueSource;
    /**
     * The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email. The default value must:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).   Contain less than 256 characters.  
     */
    DefaultDimensionValue: DefaultDimensionValue;
  }
  export type CloudWatchDimensionConfigurations = CloudWatchDimensionConfiguration[];
  export interface ConfigurationSet {
    /**
     * The name of the configuration set. The name must meet the following requirements:   Contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).   Contain 64 characters or fewer.  
     */
    Name: ConfigurationSetName;
  }
  export type ConfigurationSetAttribute = "eventDestinations"|"trackingOptions"|string;
  export type ConfigurationSetAttributeList = ConfigurationSetAttribute[];
  export type ConfigurationSetName = string;
  export type ConfigurationSets = ConfigurationSet[];
  export interface Content {
    /**
     * The textual data of the content.
     */
    Data: MessageData;
    /**
     * The character set of the content.
     */
    Charset?: Charset;
  }
  export type Counter = number;
  export interface CreateConfigurationSetEventDestinationRequest {
    /**
     * The name of the configuration set that the event destination should be associated with.
     */
    ConfigurationSetName: ConfigurationSetName;
    /**
     * An object that describes the AWS service that email sending event information will be published to.
     */
    EventDestination: EventDestination;
  }
  export interface CreateConfigurationSetEventDestinationResponse {
  }
  export interface CreateConfigurationSetRequest {
    /**
     * A data structure that contains the name of the configuration set.
     */
    ConfigurationSet: ConfigurationSet;
  }
  export interface CreateConfigurationSetResponse {
  }
  export interface CreateConfigurationSetTrackingOptionsRequest {
    /**
     * The name of the configuration set that the tracking options should be associated with.
     */
    ConfigurationSetName: ConfigurationSetName;
    TrackingOptions: TrackingOptions;
  }
  export interface CreateConfigurationSetTrackingOptionsResponse {
  }
  export interface CreateReceiptFilterRequest {
    /**
     * A data structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.
     */
    Filter: ReceiptFilter;
  }
  export interface CreateReceiptFilterResponse {
  }
  export interface CreateReceiptRuleRequest {
    /**
     * The name of the rule set that the receipt rule will be added to.
     */
    RuleSetName: ReceiptRuleSetName;
    /**
     * The name of an existing rule after which the new rule will be placed. If this parameter is null, the new rule will be inserted at the beginning of the rule list.
     */
    After?: ReceiptRuleName;
    /**
     * A data structure that contains the specified rule's name, actions, recipients, domains, enabled status, scan status, and TLS policy.
     */
    Rule: ReceiptRule;
  }
  export interface CreateReceiptRuleResponse {
  }
  export interface CreateReceiptRuleSetRequest {
    /**
     * The name of the rule set to create. The name must:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-).   Start and end with a letter or number.   Contain less than 64 characters.  
     */
    RuleSetName: ReceiptRuleSetName;
  }
  export interface CreateReceiptRuleSetResponse {
  }
  export interface CreateTemplateRequest {
    /**
     * The content of the email, composed of a subject line, an HTML part, and a text-only part.
     */
    Template: Template;
  }
  export interface CreateTemplateResponse {
  }
  export type CustomMailFromStatus = "Pending"|"Success"|"Failed"|"TemporaryFailure"|string;
  export type CustomRedirectDomain = string;
  export type DefaultDimensionValue = string;
  export interface DeleteConfigurationSetEventDestinationRequest {
    /**
     * The name of the configuration set from which to delete the event destination.
     */
    ConfigurationSetName: ConfigurationSetName;
    /**
     * The name of the event destination to delete.
     */
    EventDestinationName: EventDestinationName;
  }
  export interface DeleteConfigurationSetEventDestinationResponse {
  }
  export interface DeleteConfigurationSetRequest {
    /**
     * The name of the configuration set to delete.
     */
    ConfigurationSetName: ConfigurationSetName;
  }
  export interface DeleteConfigurationSetResponse {
  }
  export interface DeleteConfigurationSetTrackingOptionsRequest {
    /**
     * The name of the configuration set from which you want to delete the tracking options.
     */
    ConfigurationSetName: ConfigurationSetName;
  }
  export interface DeleteConfigurationSetTrackingOptionsResponse {
  }
  export interface DeleteIdentityPolicyRequest {
    /**
     * The identity that is associated with the policy that you want to delete. You can specify the identity by using its name or by using its Amazon Resource Name (ARN). Examples: user@example.com, example.com, arn:aws:ses:us-east-1:123456789012:identity/example.com. To successfully call this API, you must own the identity.
     */
    Identity: Identity;
    /**
     * The name of the policy to be deleted.
     */
    PolicyName: PolicyName;
  }
  export interface DeleteIdentityPolicyResponse {
  }
  export interface DeleteIdentityRequest {
    /**
     * The identity to be removed from the list of identities for the AWS Account.
     */
    Identity: Identity;
  }
  export interface DeleteIdentityResponse {
  }
  export interface DeleteReceiptFilterRequest {
    /**
     * The name of the IP address filter to delete.
     */
    FilterName: ReceiptFilterName;
  }
  export interface DeleteReceiptFilterResponse {
  }
  export interface DeleteReceiptRuleRequest {
    /**
     * The name of the receipt rule set that contains the receipt rule to delete.
     */
    RuleSetName: ReceiptRuleSetName;
    /**
     * The name of the receipt rule to delete.
     */
    RuleName: ReceiptRuleName;
  }
  export interface DeleteReceiptRuleResponse {
  }
  export interface DeleteReceiptRuleSetRequest {
    /**
     * The name of the receipt rule set to delete.
     */
    RuleSetName: ReceiptRuleSetName;
  }
  export interface DeleteReceiptRuleSetResponse {
  }
  export interface DeleteTemplateRequest {
    /**
     * The name of the template to be deleted.
     */
    TemplateName: TemplateName;
  }
  export interface DeleteTemplateResponse {
  }
  export interface DeleteVerifiedEmailAddressRequest {
    /**
     * An email address to be removed from the list of verified addresses.
     */
    EmailAddress: Address;
  }
  export interface DescribeActiveReceiptRuleSetRequest {
  }
  export interface DescribeActiveReceiptRuleSetResponse {
    /**
     * The metadata for the currently active receipt rule set. The metadata consists of the rule set name and a timestamp of when the rule set was created.
     */
    Metadata?: ReceiptRuleSetMetadata;
    /**
     * The receipt rules that belong to the active rule set.
     */
    Rules?: ReceiptRulesList;
  }
  export interface DescribeConfigurationSetRequest {
    /**
     * The name of the configuration set to describe.
     */
    ConfigurationSetName: ConfigurationSetName;
    /**
     * A list of configuration set attributes to return.
     */
    ConfigurationSetAttributeNames?: ConfigurationSetAttributeList;
  }
  export interface DescribeConfigurationSetResponse {
    /**
     * The configuration set object associated with the specified configuration set.
     */
    ConfigurationSet?: ConfigurationSet;
    /**
     * A list of event destinations associated with the configuration set. 
     */
    EventDestinations?: EventDestinations;
    /**
     * The name of the custom open and click tracking domain associated with the configuration set.
     */
    TrackingOptions?: TrackingOptions;
  }
  export interface DescribeReceiptRuleRequest {
    /**
     * The name of the receipt rule set that the receipt rule belongs to.
     */
    RuleSetName: ReceiptRuleSetName;
    /**
     * The name of the receipt rule.
     */
    RuleName: ReceiptRuleName;
  }
  export interface DescribeReceiptRuleResponse {
    /**
     * A data structure that contains the specified receipt rule's name, actions, recipients, domains, enabled status, scan status, and Transport Layer Security (TLS) policy.
     */
    Rule?: ReceiptRule;
  }
  export interface DescribeReceiptRuleSetRequest {
    /**
     * The name of the receipt rule set to describe.
     */
    RuleSetName: ReceiptRuleSetName;
  }
  export interface DescribeReceiptRuleSetResponse {
    /**
     * The metadata for the receipt rule set, which consists of the rule set name and the timestamp of when the rule set was created.
     */
    Metadata?: ReceiptRuleSetMetadata;
    /**
     * A list of the receipt rules that belong to the specified receipt rule set.
     */
    Rules?: ReceiptRulesList;
  }
  export interface Destination {
    /**
     * The To: field(s) of the message.
     */
    ToAddresses?: AddressList;
    /**
     * The CC: field(s) of the message.
     */
    CcAddresses?: AddressList;
    /**
     * The BCC: field(s) of the message.
     */
    BccAddresses?: AddressList;
  }
  export type DiagnosticCode = string;
  export type DimensionName = string;
  export type DimensionValueSource = "messageTag"|"emailHeader"|"linkTag"|string;
  export type DkimAttributes = {[key: string]: IdentityDkimAttributes};
  export type Domain = string;
  export type DsnAction = "failed"|"delayed"|"delivered"|"relayed"|"expanded"|string;
  export type DsnStatus = string;
  export type Enabled = boolean;
  export type Error = string;
  export interface EventDestination {
    /**
     * The name of the event destination. The name must:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).   Contain less than 64 characters.  
     */
    Name: EventDestinationName;
    /**
     * Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to true to enable publishing to this destination; set to false to prevent publishing to this destination. The default value is false.
     */
    Enabled?: Enabled;
    /**
     * The type of email sending events to publish to the event destination.
     */
    MatchingEventTypes: EventTypes;
    /**
     * An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.
     */
    KinesisFirehoseDestination?: KinesisFirehoseDestination;
    /**
     * An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.
     */
    CloudWatchDestination?: CloudWatchDestination;
    /**
     * An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.
     */
    SNSDestination?: SNSDestination;
  }
  export type EventDestinationName = string;
  export type EventDestinations = EventDestination[];
  export type EventType = "send"|"reject"|"bounce"|"complaint"|"delivery"|"open"|"click"|"renderingFailure"|string;
  export type EventTypes = EventType[];
  export type Explanation = string;
  export interface ExtensionField {
    /**
     * The name of the header to add. Must be between 1 and 50 characters, inclusive, and consist of alphanumeric (a-z, A-Z, 0-9) characters and dashes only.
     */
    Name: ExtensionFieldName;
    /**
     * The value of the header to add. Must be less than 2048 characters, and must not contain newline characters ("\r" or "\n").
     */
    Value: ExtensionFieldValue;
  }
  export type ExtensionFieldList = ExtensionField[];
  export type ExtensionFieldName = string;
  export type ExtensionFieldValue = string;
  export interface GetIdentityDkimAttributesRequest {
    /**
     * A list of one or more verified identities - email addresses, domains, or both.
     */
    Identities: IdentityList;
  }
  export interface GetIdentityDkimAttributesResponse {
    /**
     * The DKIM attributes for an email address or a domain.
     */
    DkimAttributes: DkimAttributes;
  }
  export interface GetIdentityMailFromDomainAttributesRequest {
    /**
     * A list of one or more identities.
     */
    Identities: IdentityList;
  }
  export interface GetIdentityMailFromDomainAttributesResponse {
    /**
     * A map of identities to custom MAIL FROM attributes.
     */
    MailFromDomainAttributes: MailFromDomainAttributes;
  }
  export interface GetIdentityNotificationAttributesRequest {
    /**
     * A list of one or more identities. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: user@example.com, example.com, arn:aws:ses:us-east-1:123456789012:identity/example.com.
     */
    Identities: IdentityList;
  }
  export interface GetIdentityNotificationAttributesResponse {
    /**
     * A map of Identity to IdentityNotificationAttributes.
     */
    NotificationAttributes: NotificationAttributes;
  }
  export interface GetIdentityPoliciesRequest {
    /**
     * The identity for which the policies will be retrieved. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: user@example.com, example.com, arn:aws:ses:us-east-1:123456789012:identity/example.com. To successfully call this API, you must own the identity.
     */
    Identity: Identity;
    /**
     * A list of the names of policies to be retrieved. You can retrieve a maximum of 20 policies at a time. If you do not know the names of the policies that are attached to the identity, you can use ListIdentityPolicies.
     */
    PolicyNames: PolicyNameList;
  }
  export interface GetIdentityPoliciesResponse {
    /**
     * A map of policy names to policies.
     */
    Policies: PolicyMap;
  }
  export interface GetIdentityVerificationAttributesRequest {
    /**
     * A list of identities.
     */
    Identities: IdentityList;
  }
  export interface GetIdentityVerificationAttributesResponse {
    /**
     * A map of Identities to IdentityVerificationAttributes objects.
     */
    VerificationAttributes: VerificationAttributes;
  }
  export interface GetSendQuotaResponse {
    /**
     * The maximum number of emails the user is allowed to send in a 24-hour interval. A value of -1 signifies an unlimited quota.
     */
    Max24HourSend?: Max24HourSend;
    /**
     * The maximum number of emails that Amazon SES can accept from the user's account per second.  The rate at which Amazon SES accepts the user's messages might be less than the maximum send rate. 
     */
    MaxSendRate?: MaxSendRate;
    /**
     * The number of emails sent during the previous 24 hours.
     */
    SentLast24Hours?: SentLast24Hours;
  }
  export interface GetSendStatisticsResponse {
    /**
     * A list of data points, each of which represents 15 minutes of activity.
     */
    SendDataPoints?: SendDataPointList;
  }
  export interface GetTemplateRequest {
    /**
     * The name of the template you want to retrieve.
     */
    TemplateName: TemplateName;
  }
  export interface GetTemplateResponse {
    Template?: Template;
  }
  export type HeaderName = string;
  export type HeaderValue = string;
  export type HtmlPart = string;
  export type Identity = string;
  export interface IdentityDkimAttributes {
    /**
     * True if DKIM signing is enabled for email sent from the identity; false otherwise. The default value is true.
     */
    DkimEnabled: Enabled;
    /**
     * Describes whether Amazon SES has successfully verified the DKIM DNS records (tokens) published in the domain name's DNS. (This only applies to domain identities, not email address identities.)
     */
    DkimVerificationStatus: VerificationStatus;
    /**
     * A set of character strings that represent the domain's identity. Using these tokens, you will need to create DNS CNAME records that point to DKIM public keys hosted by Amazon SES. Amazon Web Services will eventually detect that you have updated your DNS records; this detection process may take up to 72 hours. Upon successful detection, Amazon SES will be able to DKIM-sign email originating from that domain. (This only applies to domain identities, not email address identities.) For more information about creating DNS records using DKIM tokens, go to the Amazon SES Developer Guide.
     */
    DkimTokens?: VerificationTokenList;
  }
  export type IdentityList = Identity[];
  export interface IdentityMailFromDomainAttributes {
    /**
     * The custom MAIL FROM domain that the identity is configured to use.
     */
    MailFromDomain: MailFromDomainName;
    /**
     * The state that indicates whether Amazon SES has successfully read the MX record required for custom MAIL FROM domain setup. If the state is Success, Amazon SES uses the specified custom MAIL FROM domain when the verified identity sends an email. All other states indicate that Amazon SES takes the action described by BehaviorOnMXFailure.
     */
    MailFromDomainStatus: CustomMailFromStatus;
    /**
     * The action that Amazon SES takes if it cannot successfully read the required MX record when you send an email. A value of UseDefaultValue indicates that if Amazon SES cannot read the required MX record, it uses amazonses.com (or a subdomain of that) as the MAIL FROM domain. A value of RejectMessage indicates that if Amazon SES cannot read the required MX record, Amazon SES returns a MailFromDomainNotVerified error and does not send the email. The custom MAIL FROM setup states that result in this behavior are Pending, Failed, and TemporaryFailure.
     */
    BehaviorOnMXFailure: BehaviorOnMXFailure;
  }
  export interface IdentityNotificationAttributes {
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES will publish bounce notifications.
     */
    BounceTopic: NotificationTopic;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES will publish complaint notifications.
     */
    ComplaintTopic: NotificationTopic;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES will publish delivery notifications.
     */
    DeliveryTopic: NotificationTopic;
    /**
     * Describes whether Amazon SES will forward bounce and complaint notifications as email. true indicates that Amazon SES will forward bounce and complaint notifications as email, while false indicates that bounce and complaint notifications will be published only to the specified bounce and complaint Amazon SNS topics.
     */
    ForwardingEnabled: Enabled;
    /**
     * Describes whether Amazon SES includes the original email headers in Amazon SNS notifications of type Bounce. A value of true specifies that Amazon SES will include headers in bounce notifications, and a value of false specifies that Amazon SES will not include headers in bounce notifications.
     */
    HeadersInBounceNotificationsEnabled?: Enabled;
    /**
     * Describes whether Amazon SES includes the original email headers in Amazon SNS notifications of type Complaint. A value of true specifies that Amazon SES will include headers in complaint notifications, and a value of false specifies that Amazon SES will not include headers in complaint notifications.
     */
    HeadersInComplaintNotificationsEnabled?: Enabled;
    /**
     * Describes whether Amazon SES includes the original email headers in Amazon SNS notifications of type Delivery. A value of true specifies that Amazon SES will include headers in delivery notifications, and a value of false specifies that Amazon SES will not include headers in delivery notifications.
     */
    HeadersInDeliveryNotificationsEnabled?: Enabled;
  }
  export type IdentityType = "EmailAddress"|"Domain"|string;
  export interface IdentityVerificationAttributes {
    /**
     * The verification status of the identity: "Pending", "Success", "Failed", or "TemporaryFailure".
     */
    VerificationStatus: VerificationStatus;
    /**
     * The verification token for a domain identity. Null for email address identities.
     */
    VerificationToken?: VerificationToken;
  }
  export type InvocationType = "Event"|"RequestResponse"|string;
  export interface KinesisFirehoseDestination {
    /**
     * The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream.
     */
    IAMRoleARN: AmazonResourceName;
    /**
     * The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.
     */
    DeliveryStreamARN: AmazonResourceName;
  }
  export interface LambdaAction {
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the Lambda action is taken. An example of an Amazon SNS topic ARN is arn:aws:sns:us-west-2:123456789012:MyTopic. For more information about Amazon SNS topics, see the Amazon SNS Developer Guide.
     */
    TopicArn?: AmazonResourceName;
    /**
     * The Amazon Resource Name (ARN) of the AWS Lambda function. An example of an AWS Lambda function ARN is arn:aws:lambda:us-west-2:account-id:function:MyFunction. For more information about AWS Lambda, see the AWS Lambda Developer Guide.
     */
    FunctionArn: AmazonResourceName;
    /**
     * The invocation type of the AWS Lambda function. An invocation type of RequestResponse means that the execution of the function will immediately result in a response, and a value of Event means that the function will be invoked asynchronously. The default value is Event. For information about AWS Lambda invocation types, see the AWS Lambda Developer Guide.  There is a 30-second timeout on RequestResponse invocations. You should use Event invocation in most cases. Use RequestResponse only when you want to make a mail flow decision, such as whether to stop the receipt rule or the receipt rule set. 
     */
    InvocationType?: InvocationType;
  }
  export type LastAttemptDate = Date;
  export interface ListConfigurationSetsRequest {
    /**
     * A token returned from a previous call to ListConfigurationSets to indicate the position of the configuration set in the configuration set list.
     */
    NextToken?: NextToken;
    /**
     * The number of configuration sets to return.
     */
    MaxItems?: MaxItems;
  }
  export interface ListConfigurationSetsResponse {
    /**
     * A list of configuration sets.
     */
    ConfigurationSets?: ConfigurationSets;
    /**
     * A token indicating that there are additional configuration sets available to be listed. Pass this token to successive calls of ListConfigurationSets. 
     */
    NextToken?: NextToken;
  }
  export interface ListIdentitiesRequest {
    /**
     * The type of the identities to list. Possible values are "EmailAddress" and "Domain". If this parameter is omitted, then all identities will be listed.
     */
    IdentityType?: IdentityType;
    /**
     * The token to use for pagination.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of identities per page. Possible values are 1-1000 inclusive.
     */
    MaxItems?: MaxItems;
  }
  export interface ListIdentitiesResponse {
    /**
     * A list of identities.
     */
    Identities: IdentityList;
    /**
     * The token used for pagination.
     */
    NextToken?: NextToken;
  }
  export interface ListIdentityPoliciesRequest {
    /**
     * The identity that is associated with the policy for which the policies will be listed. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: user@example.com, example.com, arn:aws:ses:us-east-1:123456789012:identity/example.com. To successfully call this API, you must own the identity.
     */
    Identity: Identity;
  }
  export interface ListIdentityPoliciesResponse {
    /**
     * A list of names of policies that apply to the specified identity.
     */
    PolicyNames: PolicyNameList;
  }
  export interface ListReceiptFiltersRequest {
  }
  export interface ListReceiptFiltersResponse {
    /**
     * A list of IP address filter data structures, which each consist of a name, an IP address range, and whether to allow or block mail from it.
     */
    Filters?: ReceiptFilterList;
  }
  export interface ListReceiptRuleSetsRequest {
    /**
     * A token returned from a previous call to ListReceiptRuleSets to indicate the position in the receipt rule set list.
     */
    NextToken?: NextToken;
  }
  export interface ListReceiptRuleSetsResponse {
    /**
     * The metadata for the currently active receipt rule set. The metadata consists of the rule set name and the timestamp of when the rule set was created.
     */
    RuleSets?: ReceiptRuleSetsLists;
    /**
     * A token indicating that there are additional receipt rule sets available to be listed. Pass this token to successive calls of ListReceiptRuleSets to retrieve up to 100 receipt rule sets at a time.
     */
    NextToken?: NextToken;
  }
  export interface ListTemplatesRequest {
    /**
     * The token to use for pagination.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of templates to return. This value must be at least 1 and less than or equal to 10. If you do not specify a value, or if you specify a value less than 1 or greater than 10, the operation will return up to 10 results.
     */
    MaxItems?: MaxItems;
  }
  export interface ListTemplatesResponse {
    /**
     * An array the contains the name of creation time stamp for each template in your Amazon SES account.
     */
    TemplatesMetadata?: TemplateMetadataList;
    /**
     * The token to use for pagination.
     */
    NextToken?: NextToken;
  }
  export interface ListVerifiedEmailAddressesResponse {
    /**
     * A list of email addresses that have been verified.
     */
    VerifiedEmailAddresses?: AddressList;
  }
  export type MailFromDomainAttributes = {[key: string]: IdentityMailFromDomainAttributes};
  export type MailFromDomainName = string;
  export type Max24HourSend = number;
  export type MaxItems = number;
  export type MaxSendRate = number;
  export interface Message {
    /**
     * The subject of the message: A short summary of the content, which will appear in the recipient's inbox.
     */
    Subject: Content;
    /**
     * The message body.
     */
    Body: Body;
  }
  export type MessageData = string;
  export interface MessageDsn {
    /**
     * The reporting MTA that attempted to deliver the message, formatted as specified in RFC 3464 (mta-name-type; mta-name). The default value is dns; inbound-smtp.[region].amazonaws.com.
     */
    ReportingMta: ReportingMta;
    /**
     * When the message was received by the reporting mail transfer agent (MTA), in RFC 822 date-time format.
     */
    ArrivalDate?: ArrivalDate;
    /**
     * Additional X-headers to include in the DSN.
     */
    ExtensionFields?: ExtensionFieldList;
  }
  export type MessageId = string;
  export interface MessageTag {
    /**
     * The name of the tag. The name must:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).   Contain less than 256 characters.  
     */
    Name: MessageTagName;
    /**
     * The value of the tag. The value must:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).   Contain less than 256 characters.  
     */
    Value: MessageTagValue;
  }
  export type MessageTagList = MessageTag[];
  export type MessageTagName = string;
  export type MessageTagValue = string;
  export type NextToken = string;
  export type NotificationAttributes = {[key: string]: IdentityNotificationAttributes};
  export type NotificationTopic = string;
  export type NotificationType = "Bounce"|"Complaint"|"Delivery"|string;
  export type Policy = string;
  export type PolicyMap = {[key: string]: Policy};
  export type PolicyName = string;
  export type PolicyNameList = PolicyName[];
  export interface PutIdentityPolicyRequest {
    /**
     * The identity that the policy will apply to. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: user@example.com, example.com, arn:aws:ses:us-east-1:123456789012:identity/example.com. To successfully call this API, you must own the identity.
     */
    Identity: Identity;
    /**
     * The name of the policy. The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.
     */
    PolicyName: PolicyName;
    /**
     * The text of the policy in JSON format. The policy cannot exceed 4 KB. For information about the syntax of sending authorization policies, see the Amazon SES Developer Guide. 
     */
    Policy: Policy;
  }
  export interface PutIdentityPolicyResponse {
  }
  export interface RawMessage {
    /**
     * The raw data of the message. This data needs to base64-encoded if you are accessing Amazon SES directly through the HTTPS interface. If you are accessing Amazon SES using an AWS SDK, the SDK takes care of the base 64-encoding for you. In all cases, the client must ensure that the message format complies with Internet email standards regarding email header fields, MIME types, and MIME encoding. The To:, CC:, and BCC: headers in the raw message can contain a group list. If you are using SendRawEmail with sending authorization, you can include X-headers in the raw message to specify the "Source," "From," and "Return-Path" addresses. For more information, see the documentation for SendRawEmail.   Do not include these X-headers in the DKIM signature, because they are removed by Amazon SES before sending the email.  For more information, go to the Amazon SES Developer Guide.
     */
    Data: RawMessageData;
  }
  export type RawMessageData = Buffer|Uint8Array|Blob|string;
  export interface ReceiptAction {
    /**
     * Saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon SNS.
     */
    S3Action?: S3Action;
    /**
     * Rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
     */
    BounceAction?: BounceAction;
    /**
     * Calls Amazon WorkMail and, optionally, publishes a notification to Amazon SNS.
     */
    WorkmailAction?: WorkmailAction;
    /**
     * Calls an AWS Lambda function, and optionally, publishes a notification to Amazon SNS.
     */
    LambdaAction?: LambdaAction;
    /**
     * Terminates the evaluation of the receipt rule set and optionally publishes a notification to Amazon SNS.
     */
    StopAction?: StopAction;
    /**
     * Adds a header to the received email.
     */
    AddHeaderAction?: AddHeaderAction;
    /**
     * Publishes the email content within a notification to Amazon SNS.
     */
    SNSAction?: SNSAction;
  }
  export type ReceiptActionsList = ReceiptAction[];
  export interface ReceiptFilter {
    /**
     * The name of the IP address filter. The name must:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-).   Start and end with a letter or number.   Contain less than 64 characters.  
     */
    Name: ReceiptFilterName;
    /**
     * A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.
     */
    IpFilter: ReceiptIpFilter;
  }
  export type ReceiptFilterList = ReceiptFilter[];
  export type ReceiptFilterName = string;
  export type ReceiptFilterPolicy = "Block"|"Allow"|string;
  export interface ReceiptIpFilter {
    /**
     * Indicates whether to block or allow incoming mail from the specified IP addresses.
     */
    Policy: ReceiptFilterPolicy;
    /**
     * A single IP address or a range of IP addresses that you want to block or allow, specified in Classless Inter-Domain Routing (CIDR) notation. An example of a single email address is 10.0.0.1. An example of a range of IP addresses is 10.0.0.1/24. For more information about CIDR notation, see RFC 2317.
     */
    Cidr: Cidr;
  }
  export interface ReceiptRule {
    /**
     * The name of the receipt rule. The name must:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-).   Start and end with a letter or number.   Contain less than 64 characters.  
     */
    Name: ReceiptRuleName;
    /**
     * If true, the receipt rule is active. The default value is false.
     */
    Enabled?: Enabled;
    /**
     * Specifies whether Amazon SES should require that incoming email is delivered over a connection encrypted with Transport Layer Security (TLS). If this parameter is set to Require, Amazon SES will bounce emails that are not received over TLS. The default is Optional.
     */
    TlsPolicy?: TlsPolicy;
    /**
     * The recipient domains and email addresses that the receipt rule applies to. If this field is not specified, this rule will match all recipients under all verified domains.
     */
    Recipients?: RecipientsList;
    /**
     * An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.
     */
    Actions?: ReceiptActionsList;
    /**
     * If true, then messages that this receipt rule applies to are scanned for spam and viruses. The default value is false.
     */
    ScanEnabled?: Enabled;
  }
  export type ReceiptRuleName = string;
  export type ReceiptRuleNamesList = ReceiptRuleName[];
  export interface ReceiptRuleSetMetadata {
    /**
     * The name of the receipt rule set. The name must:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-).   Start and end with a letter or number.   Contain less than 64 characters.  
     */
    Name?: ReceiptRuleSetName;
    /**
     * The date and time the receipt rule set was created.
     */
    CreatedTimestamp?: Timestamp;
  }
  export type ReceiptRuleSetName = string;
  export type ReceiptRuleSetsLists = ReceiptRuleSetMetadata[];
  export type ReceiptRulesList = ReceiptRule[];
  export type Recipient = string;
  export interface RecipientDsnFields {
    /**
     * The email address that the message was ultimately delivered to. This corresponds to the Final-Recipient in the DSN. If not specified, FinalRecipient will be set to the Recipient specified in the BouncedRecipientInfo structure. Either FinalRecipient or the recipient in BouncedRecipientInfo must be a recipient of the original bounced message.  Do not prepend the FinalRecipient email address with rfc 822;, as described in RFC 3798. 
     */
    FinalRecipient?: Address;
    /**
     * The action performed by the reporting mail transfer agent (MTA) as a result of its attempt to deliver the message to the recipient address. This is required by RFC 3464.
     */
    Action: DsnAction;
    /**
     * The MTA to which the remote MTA attempted to deliver the message, formatted as specified in RFC 3464 (mta-name-type; mta-name). This parameter typically applies only to propagating synchronous bounces.
     */
    RemoteMta?: RemoteMta;
    /**
     * The status code that indicates what went wrong. This is required by RFC 3464.
     */
    Status: DsnStatus;
    /**
     * An extended explanation of what went wrong; this is usually an SMTP response. See RFC 3463 for the correct formatting of this parameter.
     */
    DiagnosticCode?: DiagnosticCode;
    /**
     * The time the final delivery attempt was made, in RFC 822 date-time format.
     */
    LastAttemptDate?: LastAttemptDate;
    /**
     * Additional X-headers to include in the DSN.
     */
    ExtensionFields?: ExtensionFieldList;
  }
  export type RecipientsList = Recipient[];
  export type RemoteMta = string;
  export type RenderedTemplate = string;
  export interface ReorderReceiptRuleSetRequest {
    /**
     * The name of the receipt rule set to reorder.
     */
    RuleSetName: ReceiptRuleSetName;
    /**
     * A list of the specified receipt rule set's receipt rules in the order that you want to put them.
     */
    RuleNames: ReceiptRuleNamesList;
  }
  export interface ReorderReceiptRuleSetResponse {
  }
  export type ReportingMta = string;
  export type RuleOrRuleSetName = string;
  export interface S3Action {
    /**
     * The ARN of the Amazon SNS topic to notify when the message is saved to the Amazon S3 bucket. An example of an Amazon SNS topic ARN is arn:aws:sns:us-west-2:123456789012:MyTopic. For more information about Amazon SNS topics, see the Amazon SNS Developer Guide.
     */
    TopicArn?: AmazonResourceName;
    /**
     * The name of the Amazon S3 bucket that incoming email will be saved to.
     */
    BucketName: S3BucketName;
    /**
     * The key prefix of the Amazon S3 bucket. The key prefix is similar to a directory name that enables you to store similar data under the same directory in a bucket.
     */
    ObjectKeyPrefix?: S3KeyPrefix;
    /**
     * The customer master key that Amazon SES should use to encrypt your emails before saving them to the Amazon S3 bucket. You can use the default master key or a custom master key you created in AWS KMS as follows:   To use the default master key, provide an ARN in the form of arn:aws:kms:REGION:ACCOUNT-ID-WITHOUT-HYPHENS:alias/aws/ses. For example, if your AWS account ID is 123456789012 and you want to use the default master key in the US West (Oregon) region, the ARN of the default master key would be arn:aws:kms:us-west-2:123456789012:alias/aws/ses. If you use the default master key, you don't need to perform any extra steps to give Amazon SES permission to use the key.   To use a custom master key you created in AWS KMS, provide the ARN of the master key and ensure that you add a statement to your key's policy to give Amazon SES permission to use it. For more information about giving permissions, see the Amazon SES Developer Guide.   For more information about key policies, see the AWS KMS Developer Guide. If you do not specify a master key, Amazon SES will not encrypt your emails.  Your mail is encrypted by Amazon SES using the Amazon S3 encryption client before the mail is submitted to Amazon S3 for storage. It is not encrypted using Amazon S3 server-side encryption. This means that you must use the Amazon S3 encryption client to decrypt the email after retrieving it from Amazon S3, as the service has no access to use your AWS KMS keys for decryption. This encryption client is currently available with the AWS Java SDK and AWS Ruby SDK only. For more information about client-side encryption using AWS KMS master keys, see the Amazon S3 Developer Guide. 
     */
    KmsKeyArn?: AmazonResourceName;
  }
  export type S3BucketName = string;
  export type S3KeyPrefix = string;
  export interface SNSAction {
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify. An example of an Amazon SNS topic ARN is arn:aws:sns:us-west-2:123456789012:MyTopic. For more information about Amazon SNS topics, see the Amazon SNS Developer Guide.
     */
    TopicArn: AmazonResourceName;
    /**
     * The encoding to use for the email within the Amazon SNS notification. UTF-8 is easier to use, but may not preserve all special characters when a message was encoded with a different encoding format. Base64 preserves all special characters. The default value is UTF-8.
     */
    Encoding?: SNSActionEncoding;
  }
  export type SNSActionEncoding = "UTF-8"|"Base64"|string;
  export interface SNSDestination {
    /**
     * The ARN of the Amazon SNS topic that email sending events will be published to. An example of an Amazon SNS topic ARN is arn:aws:sns:us-west-2:123456789012:MyTopic. For more information about Amazon SNS topics, see the Amazon SNS Developer Guide.
     */
    TopicARN: AmazonResourceName;
  }
  export interface SendBounceRequest {
    /**
     * The message ID of the message to be bounced.
     */
    OriginalMessageId: MessageId;
    /**
     * The address to use in the "From" header of the bounce message. This must be an identity that you have verified with Amazon SES.
     */
    BounceSender: Address;
    /**
     * Human-readable text for the bounce message to explain the failure. If not specified, the text will be auto-generated based on the bounced recipient information.
     */
    Explanation?: Explanation;
    /**
     * Message-related DSN fields. If not specified, Amazon SES will choose the values.
     */
    MessageDsn?: MessageDsn;
    /**
     * A list of recipients of the bounced message, including the information required to create the Delivery Status Notifications (DSNs) for the recipients. You must specify at least one BouncedRecipientInfo in the list.
     */
    BouncedRecipientInfoList: BouncedRecipientInfoList;
    /**
     * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the address in the "From" header of the bounce. For more information about sending authorization, see the Amazon SES Developer Guide.
     */
    BounceSenderArn?: AmazonResourceName;
  }
  export interface SendBounceResponse {
    /**
     * The message ID of the bounce message.
     */
    MessageId?: MessageId;
  }
  export interface SendBulkTemplatedEmailRequest {
    /**
     * The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the Amazon SES Developer Guide. If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the SourceArn parameter. For more information about sending authorization, see the Amazon SES Developer Guide.  In all cases, the email address must be 7-bit ASCII. If the text must contain any other characters, then you must use MIME encoded-word syntax (RFC 2047) instead of a literal string. MIME encoded-word syntax uses the following form: =?charset?encoding?encoded-text?=. For more information, see RFC 2047. 
     */
    Source: Address;
    /**
     * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the Source parameter. For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to send from user@example.com, then you would specify the SourceArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the Source to be user@example.com. For more information about sending authorization, see the Amazon SES Developer Guide.
     */
    SourceArn?: AmazonResourceName;
    /**
     * The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.
     */
    ReplyToAddresses?: AddressList;
    /**
     * The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the ReturnPath parameter. The ReturnPath parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. 
     */
    ReturnPath?: Address;
    /**
     * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the ReturnPath parameter. For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the ReturnPathArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the ReturnPath to be feedback@example.com. For more information about sending authorization, see the Amazon SES Developer Guide.
     */
    ReturnPathArn?: AmazonResourceName;
    /**
     * The name of the configuration set to use when you send an email using SendBulkTemplatedEmail.
     */
    ConfigurationSetName?: ConfigurationSetName;
    /**
     * A list of tags, in the form of name/value pairs, to apply to an email that you send to a destination using SendBulkTemplatedEmail.
     */
    DefaultTags?: MessageTagList;
    /**
     * The template to use when sending this email.
     */
    Template: TemplateName;
    /**
     * The ARN of the template to use when sending this email.
     */
    TemplateArn?: AmazonResourceName;
    /**
     * A list of replacement values to apply to the template when replacement data is not specified in a Destination object. These values act as a default or fallback option when no other data is available. The template data is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.
     */
    DefaultTemplateData?: TemplateData;
    /**
     * One or more Destination objects. All of the recipients in a Destination will receive the same version of the email. You can specify up to 50 Destination objects within a Destinations array.
     */
    Destinations: BulkEmailDestinationList;
  }
  export interface SendBulkTemplatedEmailResponse {
    /**
     * The unique message identifier returned from the SendBulkTemplatedEmail action.
     */
    Status: BulkEmailDestinationStatusList;
  }
  export interface SendDataPoint {
    /**
     * Time of the data point.
     */
    Timestamp?: Timestamp;
    /**
     * Number of emails that have been sent.
     */
    DeliveryAttempts?: Counter;
    /**
     * Number of emails that have bounced.
     */
    Bounces?: Counter;
    /**
     * Number of unwanted emails that were rejected by recipients.
     */
    Complaints?: Counter;
    /**
     * Number of emails rejected by Amazon SES.
     */
    Rejects?: Counter;
  }
  export type SendDataPointList = SendDataPoint[];
  export interface SendEmailRequest {
    /**
     * The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the Amazon SES Developer Guide. If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the SourceArn parameter. For more information about sending authorization, see the Amazon SES Developer Guide.  In all cases, the email address must be 7-bit ASCII. If the text must contain any other characters, then you must use MIME encoded-word syntax (RFC 2047) instead of a literal string. MIME encoded-word syntax uses the following form: =?charset?encoding?encoded-text?=. For more information, see RFC 2047. 
     */
    Source: Address;
    /**
     * The destination for this email, composed of To:, CC:, and BCC: fields.
     */
    Destination: Destination;
    /**
     * The message to be sent.
     */
    Message: Message;
    /**
     * The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.
     */
    ReplyToAddresses?: AddressList;
    /**
     * The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the ReturnPath parameter. The ReturnPath parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. 
     */
    ReturnPath?: Address;
    /**
     * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the Source parameter. For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to send from user@example.com, then you would specify the SourceArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the Source to be user@example.com. For more information about sending authorization, see the Amazon SES Developer Guide.
     */
    SourceArn?: AmazonResourceName;
    /**
     * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the ReturnPath parameter. For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the ReturnPathArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the ReturnPath to be feedback@example.com. For more information about sending authorization, see the Amazon SES Developer Guide.
     */
    ReturnPathArn?: AmazonResourceName;
    /**
     * A list of tags, in the form of name/value pairs, to apply to an email that you send using SendEmail. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
     */
    Tags?: MessageTagList;
    /**
     * The name of the configuration set to use when you send an email using SendEmail.
     */
    ConfigurationSetName?: ConfigurationSetName;
  }
  export interface SendEmailResponse {
    /**
     * The unique message identifier returned from the SendEmail action. 
     */
    MessageId: MessageId;
  }
  export interface SendRawEmailRequest {
    /**
     * The identity's email address. If you do not provide a value for this parameter, you must specify a "From" address in the raw text of the message. (You can also specify both.)  By default, the string must be 7-bit ASCII. If the text must contain any other characters, then you must use MIME encoded-word syntax (RFC 2047) instead of a literal string. MIME encoded-word syntax uses the following form: =?charset?encoding?encoded-text?=. For more information, see RFC 2047.   If you specify the Source parameter and have feedback forwarding enabled, then bounces and complaints will be sent to this email address. This takes precedence over any Return-Path header that you might include in the raw text of the message. 
     */
    Source?: Address;
    /**
     * A list of destinations for the message, consisting of To:, CC:, and BCC: addresses.
     */
    Destinations?: AddressList;
    /**
     * The raw text of the message. The client is responsible for ensuring the following:   Message must contain a header and a body, separated by a blank line.   All required header fields must be present.   Each part of a multipart MIME message must be formatted properly.   MIME content types must be among those supported by Amazon SES. For more information, go to the Amazon SES Developer Guide.   Must be base64-encoded.   Per RFC 5321, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.  
     */
    RawMessage: RawMessage;
    /**
     * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to specify a particular "From" address in the header of the raw email. Instead of using this parameter, you can use the X-header X-SES-FROM-ARN in the raw message of the email. If you use both the FromArn parameter and the corresponding X-header, Amazon SES uses the value of the FromArn parameter.  For information about when to use this parameter, see the description of SendRawEmail in this guide, or see the Amazon SES Developer Guide. 
     */
    FromArn?: AmazonResourceName;
    /**
     * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the Source parameter. For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to send from user@example.com, then you would specify the SourceArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the Source to be user@example.com. Instead of using this parameter, you can use the X-header X-SES-SOURCE-ARN in the raw message of the email. If you use both the SourceArn parameter and the corresponding X-header, Amazon SES uses the value of the SourceArn parameter.  For information about when to use this parameter, see the description of SendRawEmail in this guide, or see the Amazon SES Developer Guide. 
     */
    SourceArn?: AmazonResourceName;
    /**
     * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the ReturnPath parameter. For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the ReturnPathArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the ReturnPath to be feedback@example.com. Instead of using this parameter, you can use the X-header X-SES-RETURN-PATH-ARN in the raw message of the email. If you use both the ReturnPathArn parameter and the corresponding X-header, Amazon SES uses the value of the ReturnPathArn parameter.  For information about when to use this parameter, see the description of SendRawEmail in this guide, or see the Amazon SES Developer Guide. 
     */
    ReturnPathArn?: AmazonResourceName;
    /**
     * A list of tags, in the form of name/value pairs, to apply to an email that you send using SendRawEmail. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
     */
    Tags?: MessageTagList;
    /**
     * The name of the configuration set to use when you send an email using SendRawEmail.
     */
    ConfigurationSetName?: ConfigurationSetName;
  }
  export interface SendRawEmailResponse {
    /**
     * The unique message identifier returned from the SendRawEmail action. 
     */
    MessageId: MessageId;
  }
  export interface SendTemplatedEmailRequest {
    /**
     * The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the Amazon SES Developer Guide. If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the SourceArn parameter. For more information about sending authorization, see the Amazon SES Developer Guide.  In all cases, the email address must be 7-bit ASCII. If the text must contain any other characters, then you must use MIME encoded-word syntax (RFC 2047) instead of a literal string. MIME encoded-word syntax uses the following form: =?charset?encoding?encoded-text?=. For more information, see RFC 2047. 
     */
    Source: Address;
    /**
     * The destination for this email, composed of To:, CC:, and BCC: fields. A Destination can include up to 50 recipients across these three fields.
     */
    Destination: Destination;
    /**
     * The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.
     */
    ReplyToAddresses?: AddressList;
    /**
     * The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the ReturnPath parameter. The ReturnPath parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. 
     */
    ReturnPath?: Address;
    /**
     * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the Source parameter. For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to send from user@example.com, then you would specify the SourceArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the Source to be user@example.com. For more information about sending authorization, see the Amazon SES Developer Guide.
     */
    SourceArn?: AmazonResourceName;
    /**
     * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the ReturnPath parameter. For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the ReturnPathArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the ReturnPath to be feedback@example.com. For more information about sending authorization, see the Amazon SES Developer Guide.
     */
    ReturnPathArn?: AmazonResourceName;
    /**
     * A list of tags, in the form of name/value pairs, to apply to an email that you send using SendTemplatedEmail. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
     */
    Tags?: MessageTagList;
    /**
     * The name of the configuration set to use when you send an email using SendTemplatedEmail.
     */
    ConfigurationSetName?: ConfigurationSetName;
    /**
     * The template to use when sending this email.
     */
    Template: TemplateName;
    /**
     * The ARN of the template to use when sending this email.
     */
    TemplateArn?: AmazonResourceName;
    /**
     * A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.
     */
    TemplateData: TemplateData;
  }
  export interface SendTemplatedEmailResponse {
    /**
     * The unique message identifier returned from the SendTemplatedEmail action. 
     */
    MessageId: MessageId;
  }
  export type SentLast24Hours = number;
  export interface SetActiveReceiptRuleSetRequest {
    /**
     * The name of the receipt rule set to make active. Setting this value to null disables all email receiving.
     */
    RuleSetName?: ReceiptRuleSetName;
  }
  export interface SetActiveReceiptRuleSetResponse {
  }
  export interface SetIdentityDkimEnabledRequest {
    /**
     * The identity for which DKIM signing should be enabled or disabled.
     */
    Identity: Identity;
    /**
     * Sets whether DKIM signing is enabled for an identity. Set to true to enable DKIM signing for this identity; false to disable it. 
     */
    DkimEnabled: Enabled;
  }
  export interface SetIdentityDkimEnabledResponse {
  }
  export interface SetIdentityFeedbackForwardingEnabledRequest {
    /**
     * The identity for which to set bounce and complaint notification forwarding. Examples: user@example.com, example.com.
     */
    Identity: Identity;
    /**
     * Sets whether Amazon SES will forward bounce and complaint notifications as email. true specifies that Amazon SES will forward bounce and complaint notifications as email, in addition to any Amazon SNS topic publishing otherwise specified. false specifies that Amazon SES will publish bounce and complaint notifications only through Amazon SNS. This value can only be set to false when Amazon SNS topics are set for both Bounce and Complaint notification types.
     */
    ForwardingEnabled: Enabled;
  }
  export interface SetIdentityFeedbackForwardingEnabledResponse {
  }
  export interface SetIdentityHeadersInNotificationsEnabledRequest {
    /**
     * The identity for which to enable or disable headers in notifications. Examples: user@example.com, example.com.
     */
    Identity: Identity;
    /**
     * The notification type for which to enable or disable headers in notifications. 
     */
    NotificationType: NotificationType;
    /**
     * Sets whether Amazon SES includes the original email headers in Amazon SNS notifications of the specified notification type. A value of true specifies that Amazon SES will include headers in notifications, and a value of false specifies that Amazon SES will not include headers in notifications. This value can only be set when NotificationType is already set to use a particular Amazon SNS topic.
     */
    Enabled: Enabled;
  }
  export interface SetIdentityHeadersInNotificationsEnabledResponse {
  }
  export interface SetIdentityMailFromDomainRequest {
    /**
     * The verified identity for which you want to enable or disable the specified custom MAIL FROM domain.
     */
    Identity: Identity;
    /**
     * The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM domain must 1) be a subdomain of the verified identity, 2) not be used in a "From" address if the MAIL FROM domain is the destination of email feedback forwarding (for more information, see the Amazon SES Developer Guide), and 3) not be used to receive emails. A value of null disables the custom MAIL FROM setting for the identity.
     */
    MailFromDomain?: MailFromDomainName;
    /**
     * The action that you want Amazon SES to take if it cannot successfully read the required MX record when you send an email. If you choose UseDefaultValue, Amazon SES will use amazonses.com (or a subdomain of that) as the MAIL FROM domain. If you choose RejectMessage, Amazon SES will return a MailFromDomainNotVerified error and not send the email. The action specified in BehaviorOnMXFailure is taken when the custom MAIL FROM domain setup is in the Pending, Failed, and TemporaryFailure states.
     */
    BehaviorOnMXFailure?: BehaviorOnMXFailure;
  }
  export interface SetIdentityMailFromDomainResponse {
  }
  export interface SetIdentityNotificationTopicRequest {
    /**
     * The identity for which the Amazon SNS topic will be set. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: user@example.com, example.com, arn:aws:ses:us-east-1:123456789012:identity/example.com.
     */
    Identity: Identity;
    /**
     * The type of notifications that will be published to the specified Amazon SNS topic.
     */
    NotificationType: NotificationType;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic. If the parameter is omitted from the request or a null value is passed, SnsTopic is cleared and publishing is disabled.
     */
    SnsTopic?: NotificationTopic;
  }
  export interface SetIdentityNotificationTopicResponse {
  }
  export interface SetReceiptRulePositionRequest {
    /**
     * The name of the receipt rule set that contains the receipt rule to reposition.
     */
    RuleSetName: ReceiptRuleSetName;
    /**
     * The name of the receipt rule to reposition.
     */
    RuleName: ReceiptRuleName;
    /**
     * The name of the receipt rule after which to place the specified receipt rule.
     */
    After?: ReceiptRuleName;
  }
  export interface SetReceiptRulePositionResponse {
  }
  export interface StopAction {
    /**
     * The name of the RuleSet that is being stopped.
     */
    Scope: StopScope;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the stop action is taken. An example of an Amazon SNS topic ARN is arn:aws:sns:us-west-2:123456789012:MyTopic. For more information about Amazon SNS topics, see the Amazon SNS Developer Guide.
     */
    TopicArn?: AmazonResourceName;
  }
  export type StopScope = "RuleSet"|string;
  export type SubjectPart = string;
  export interface Template {
    /**
     * The name of the template. You will refer to this name when you send email using the SendTemplatedEmail or SendBulkTemplatedEmail operations.
     */
    TemplateName: TemplateName;
    /**
     * The subject line of the email.
     */
    SubjectPart?: SubjectPart;
    /**
     * The email body that will be visible to recipients whose email clients do not display HTML.
     */
    TextPart?: TextPart;
    /**
     * The HTML body of the email.
     */
    HtmlPart?: HtmlPart;
  }
  export type TemplateData = string;
  export interface TemplateMetadata {
    /**
     * The name of the template.
     */
    Name?: TemplateName;
    /**
     * The time and date the template was created.
     */
    CreatedTimestamp?: Timestamp;
  }
  export type TemplateMetadataList = TemplateMetadata[];
  export type TemplateName = string;
  export interface TestRenderTemplateRequest {
    /**
     * The name of the template that you want to render.
     */
    TemplateName: TemplateName;
    /**
     * A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.
     */
    TemplateData: TemplateData;
  }
  export interface TestRenderTemplateResponse {
    /**
     * The complete MIME message rendered by applying the data in the TemplateData parameter to the template specified in the TemplateName parameter.
     */
    RenderedTemplate?: RenderedTemplate;
  }
  export type TextPart = string;
  export type Timestamp = Date;
  export type TlsPolicy = "Require"|"Optional"|string;
  export interface TrackingOptions {
    /**
     * The custom subdomain that will be used to redirect email recipients to the Amazon SES event tracking domain.
     */
    CustomRedirectDomain?: CustomRedirectDomain;
  }
  export interface UpdateConfigurationSetEventDestinationRequest {
    /**
     * The name of the configuration set that contains the event destination that you want to update.
     */
    ConfigurationSetName: ConfigurationSetName;
    /**
     * The event destination object that you want to apply to the specified configuration set.
     */
    EventDestination: EventDestination;
  }
  export interface UpdateConfigurationSetEventDestinationResponse {
  }
  export interface UpdateConfigurationSetTrackingOptionsRequest {
    /**
     * The name of the configuration set for which you want to update the custom tracking domain.
     */
    ConfigurationSetName: ConfigurationSetName;
    TrackingOptions: TrackingOptions;
  }
  export interface UpdateConfigurationSetTrackingOptionsResponse {
  }
  export interface UpdateReceiptRuleRequest {
    /**
     * The name of the receipt rule set that the receipt rule belongs to.
     */
    RuleSetName: ReceiptRuleSetName;
    /**
     * A data structure that contains the updated receipt rule information.
     */
    Rule: ReceiptRule;
  }
  export interface UpdateReceiptRuleResponse {
  }
  export interface UpdateTemplateRequest {
    Template: Template;
  }
  export interface UpdateTemplateResponse {
  }
  export type VerificationAttributes = {[key: string]: IdentityVerificationAttributes};
  export type VerificationStatus = "Pending"|"Success"|"Failed"|"TemporaryFailure"|"NotStarted"|string;
  export type VerificationToken = string;
  export type VerificationTokenList = VerificationToken[];
  export interface VerifyDomainDkimRequest {
    /**
     * The name of the domain to be verified for Easy DKIM signing.
     */
    Domain: Domain;
  }
  export interface VerifyDomainDkimResponse {
    /**
     * A set of character strings that represent the domain's identity. If the identity is an email address, the tokens represent the domain of that address. Using these tokens, you will need to create DNS CNAME records that point to DKIM public keys hosted by Amazon SES. Amazon Web Services will eventually detect that you have updated your DNS records; this detection process may take up to 72 hours. Upon successful detection, Amazon SES will be able to DKIM-sign emails originating from that domain. For more information about creating DNS records using DKIM tokens, go to the Amazon SES Developer Guide.
     */
    DkimTokens: VerificationTokenList;
  }
  export interface VerifyDomainIdentityRequest {
    /**
     * The domain to be verified.
     */
    Domain: Domain;
  }
  export interface VerifyDomainIdentityResponse {
    /**
     * A TXT record that you must place in the DNS settings of the domain to complete domain verification with Amazon SES. As Amazon SES searches for the TXT record, the domain's verification status is "Pending". When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.
     */
    VerificationToken: VerificationToken;
  }
  export interface VerifyEmailAddressRequest {
    /**
     * The email address to be verified.
     */
    EmailAddress: Address;
  }
  export interface VerifyEmailIdentityRequest {
    /**
     * The email address to be verified.
     */
    EmailAddress: Address;
  }
  export interface VerifyEmailIdentityResponse {
  }
  export interface WorkmailAction {
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the WorkMail action is called. An example of an Amazon SNS topic ARN is arn:aws:sns:us-west-2:123456789012:MyTopic. For more information about Amazon SNS topics, see the Amazon SNS Developer Guide.
     */
    TopicArn?: AmazonResourceName;
    /**
     * The ARN of the Amazon WorkMail organization. An example of an Amazon WorkMail organization ARN is arn:aws:workmail:us-west-2:123456789012:organization/m-68755160c4cb4e29a2b2f8fb58f359d7. For information about Amazon WorkMail organizations, see the Amazon WorkMail Administrator Guide.
     */
    OrganizationArn: AmazonResourceName;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2010-12-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SES client.
   */
  export import Types = SES;
}
export = SES;
