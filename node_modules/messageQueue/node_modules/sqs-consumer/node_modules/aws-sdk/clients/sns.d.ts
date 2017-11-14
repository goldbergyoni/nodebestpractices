import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class SNS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SNS.Types.ClientConfiguration)
  config: Config & SNS.Types.ClientConfiguration;
  /**
   * Adds a statement to a topic's access control policy, granting access for the specified AWS accounts to the specified actions.
   */
  addPermission(params: SNS.Types.AddPermissionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds a statement to a topic's access control policy, granting access for the specified AWS accounts to the specified actions.
   */
  addPermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your account. You cannot send SMS messages to a number that is opted out. To resume sending messages, you can opt in the number by using the OptInPhoneNumber action.
   */
  checkIfPhoneNumberIsOptedOut(params: SNS.Types.CheckIfPhoneNumberIsOptedOutInput, callback?: (err: AWSError, data: SNS.Types.CheckIfPhoneNumberIsOptedOutResponse) => void): Request<SNS.Types.CheckIfPhoneNumberIsOptedOutResponse, AWSError>;
  /**
   * Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your account. You cannot send SMS messages to a number that is opted out. To resume sending messages, you can opt in the number by using the OptInPhoneNumber action.
   */
  checkIfPhoneNumberIsOptedOut(callback?: (err: AWSError, data: SNS.Types.CheckIfPhoneNumberIsOptedOutResponse) => void): Request<SNS.Types.CheckIfPhoneNumberIsOptedOutResponse, AWSError>;
  /**
   * Verifies an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier Subscribe action. If the token is valid, the action creates a new subscription and returns its Amazon Resource Name (ARN). This call requires an AWS signature only when the AuthenticateOnUnsubscribe flag is set to "true".
   */
  confirmSubscription(params: SNS.Types.ConfirmSubscriptionInput, callback?: (err: AWSError, data: SNS.Types.ConfirmSubscriptionResponse) => void): Request<SNS.Types.ConfirmSubscriptionResponse, AWSError>;
  /**
   * Verifies an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier Subscribe action. If the token is valid, the action creates a new subscription and returns its Amazon Resource Name (ARN). This call requires an AWS signature only when the AuthenticateOnUnsubscribe flag is set to "true".
   */
  confirmSubscription(callback?: (err: AWSError, data: SNS.Types.ConfirmSubscriptionResponse) => void): Request<SNS.Types.ConfirmSubscriptionResponse, AWSError>;
  /**
   * Creates a platform application object for one of the supported push notification services, such as APNS and GCM, to which devices and mobile apps may register. You must specify PlatformPrincipal and PlatformCredential attributes when using the CreatePlatformApplication action. The PlatformPrincipal is received from the notification service. For APNS/APNS_SANDBOX, PlatformPrincipal is "SSL certificate". For GCM, PlatformPrincipal is not applicable. For ADM, PlatformPrincipal is "client id". The PlatformCredential is also received from the notification service. For WNS, PlatformPrincipal is "Package Security Identifier". For MPNS, PlatformPrincipal is "TLS certificate". For Baidu, PlatformPrincipal is "API key". For APNS/APNS_SANDBOX, PlatformCredential is "private key". For GCM, PlatformCredential is "API key". For ADM, PlatformCredential is "client secret". For WNS, PlatformCredential is "secret key". For MPNS, PlatformCredential is "private key". For Baidu, PlatformCredential is "secret key". The PlatformApplicationArn that is returned when using CreatePlatformApplication is then used as an attribute for the CreatePlatformEndpoint action. For more information, see Using Amazon SNS Mobile Push Notifications. For more information about obtaining the PlatformPrincipal and PlatformCredential for each of the supported push notification services, see Getting Started with Apple Push Notification Service, Getting Started with Amazon Device Messaging, Getting Started with Baidu Cloud Push, Getting Started with Google Cloud Messaging for Android, Getting Started with MPNS, or Getting Started with WNS. 
   */
  createPlatformApplication(params: SNS.Types.CreatePlatformApplicationInput, callback?: (err: AWSError, data: SNS.Types.CreatePlatformApplicationResponse) => void): Request<SNS.Types.CreatePlatformApplicationResponse, AWSError>;
  /**
   * Creates a platform application object for one of the supported push notification services, such as APNS and GCM, to which devices and mobile apps may register. You must specify PlatformPrincipal and PlatformCredential attributes when using the CreatePlatformApplication action. The PlatformPrincipal is received from the notification service. For APNS/APNS_SANDBOX, PlatformPrincipal is "SSL certificate". For GCM, PlatformPrincipal is not applicable. For ADM, PlatformPrincipal is "client id". The PlatformCredential is also received from the notification service. For WNS, PlatformPrincipal is "Package Security Identifier". For MPNS, PlatformPrincipal is "TLS certificate". For Baidu, PlatformPrincipal is "API key". For APNS/APNS_SANDBOX, PlatformCredential is "private key". For GCM, PlatformCredential is "API key". For ADM, PlatformCredential is "client secret". For WNS, PlatformCredential is "secret key". For MPNS, PlatformCredential is "private key". For Baidu, PlatformCredential is "secret key". The PlatformApplicationArn that is returned when using CreatePlatformApplication is then used as an attribute for the CreatePlatformEndpoint action. For more information, see Using Amazon SNS Mobile Push Notifications. For more information about obtaining the PlatformPrincipal and PlatformCredential for each of the supported push notification services, see Getting Started with Apple Push Notification Service, Getting Started with Amazon Device Messaging, Getting Started with Baidu Cloud Push, Getting Started with Google Cloud Messaging for Android, Getting Started with MPNS, or Getting Started with WNS. 
   */
  createPlatformApplication(callback?: (err: AWSError, data: SNS.Types.CreatePlatformApplicationResponse) => void): Request<SNS.Types.CreatePlatformApplicationResponse, AWSError>;
  /**
   * Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM and APNS. CreatePlatformEndpoint requires the PlatformApplicationArn that is returned from CreatePlatformApplication. The EndpointArn that is returned when using CreatePlatformEndpoint can then be used by the Publish action to send a message to a mobile app or by the Subscribe action for subscription to a topic. The CreatePlatformEndpoint action is idempotent, so if the requester already owns an endpoint with the same device token and attributes, that endpoint's ARN is returned without creating a new endpoint. For more information, see Using Amazon SNS Mobile Push Notifications.  When using CreatePlatformEndpoint with Baidu, two attributes must be provided: ChannelId and UserId. The token field must also contain the ChannelId. For more information, see Creating an Amazon SNS Endpoint for Baidu. 
   */
  createPlatformEndpoint(params: SNS.Types.CreatePlatformEndpointInput, callback?: (err: AWSError, data: SNS.Types.CreateEndpointResponse) => void): Request<SNS.Types.CreateEndpointResponse, AWSError>;
  /**
   * Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM and APNS. CreatePlatformEndpoint requires the PlatformApplicationArn that is returned from CreatePlatformApplication. The EndpointArn that is returned when using CreatePlatformEndpoint can then be used by the Publish action to send a message to a mobile app or by the Subscribe action for subscription to a topic. The CreatePlatformEndpoint action is idempotent, so if the requester already owns an endpoint with the same device token and attributes, that endpoint's ARN is returned without creating a new endpoint. For more information, see Using Amazon SNS Mobile Push Notifications.  When using CreatePlatformEndpoint with Baidu, two attributes must be provided: ChannelId and UserId. The token field must also contain the ChannelId. For more information, see Creating an Amazon SNS Endpoint for Baidu. 
   */
  createPlatformEndpoint(callback?: (err: AWSError, data: SNS.Types.CreateEndpointResponse) => void): Request<SNS.Types.CreateEndpointResponse, AWSError>;
  /**
   * Creates a topic to which notifications can be published. Users can create at most 100,000 topics. For more information, see http://aws.amazon.com/sns. This action is idempotent, so if the requester already owns a topic with the specified name, that topic's ARN is returned without creating a new topic.
   */
  createTopic(params: SNS.Types.CreateTopicInput, callback?: (err: AWSError, data: SNS.Types.CreateTopicResponse) => void): Request<SNS.Types.CreateTopicResponse, AWSError>;
  /**
   * Creates a topic to which notifications can be published. Users can create at most 100,000 topics. For more information, see http://aws.amazon.com/sns. This action is idempotent, so if the requester already owns a topic with the specified name, that topic's ARN is returned without creating a new topic.
   */
  createTopic(callback?: (err: AWSError, data: SNS.Types.CreateTopicResponse) => void): Request<SNS.Types.CreateTopicResponse, AWSError>;
  /**
   * Deletes the endpoint for a device and mobile app from Amazon SNS. This action is idempotent. For more information, see Using Amazon SNS Mobile Push Notifications.  When you delete an endpoint that is also subscribed to a topic, then you must also unsubscribe the endpoint from the topic.
   */
  deleteEndpoint(params: SNS.Types.DeleteEndpointInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the endpoint for a device and mobile app from Amazon SNS. This action is idempotent. For more information, see Using Amazon SNS Mobile Push Notifications.  When you delete an endpoint that is also subscribed to a topic, then you must also unsubscribe the endpoint from the topic.
   */
  deleteEndpoint(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a platform application object for one of the supported push notification services, such as APNS and GCM. For more information, see Using Amazon SNS Mobile Push Notifications. 
   */
  deletePlatformApplication(params: SNS.Types.DeletePlatformApplicationInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a platform application object for one of the supported push notification services, such as APNS and GCM. For more information, see Using Amazon SNS Mobile Push Notifications. 
   */
  deletePlatformApplication(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a topic and all its subscriptions. Deleting a topic might prevent some messages previously sent to the topic from being delivered to subscribers. This action is idempotent, so deleting a topic that does not exist does not result in an error.
   */
  deleteTopic(params: SNS.Types.DeleteTopicInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a topic and all its subscriptions. Deleting a topic might prevent some messages previously sent to the topic from being delivered to subscribers. This action is idempotent, so deleting a topic that does not exist does not result in an error.
   */
  deleteTopic(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM and APNS. For more information, see Using Amazon SNS Mobile Push Notifications. 
   */
  getEndpointAttributes(params: SNS.Types.GetEndpointAttributesInput, callback?: (err: AWSError, data: SNS.Types.GetEndpointAttributesResponse) => void): Request<SNS.Types.GetEndpointAttributesResponse, AWSError>;
  /**
   * Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM and APNS. For more information, see Using Amazon SNS Mobile Push Notifications. 
   */
  getEndpointAttributes(callback?: (err: AWSError, data: SNS.Types.GetEndpointAttributesResponse) => void): Request<SNS.Types.GetEndpointAttributesResponse, AWSError>;
  /**
   * Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM. For more information, see Using Amazon SNS Mobile Push Notifications. 
   */
  getPlatformApplicationAttributes(params: SNS.Types.GetPlatformApplicationAttributesInput, callback?: (err: AWSError, data: SNS.Types.GetPlatformApplicationAttributesResponse) => void): Request<SNS.Types.GetPlatformApplicationAttributesResponse, AWSError>;
  /**
   * Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM. For more information, see Using Amazon SNS Mobile Push Notifications. 
   */
  getPlatformApplicationAttributes(callback?: (err: AWSError, data: SNS.Types.GetPlatformApplicationAttributesResponse) => void): Request<SNS.Types.GetPlatformApplicationAttributesResponse, AWSError>;
  /**
   * Returns the settings for sending SMS messages from your account. These settings are set with the SetSMSAttributes action.
   */
  getSMSAttributes(params: SNS.Types.GetSMSAttributesInput, callback?: (err: AWSError, data: SNS.Types.GetSMSAttributesResponse) => void): Request<SNS.Types.GetSMSAttributesResponse, AWSError>;
  /**
   * Returns the settings for sending SMS messages from your account. These settings are set with the SetSMSAttributes action.
   */
  getSMSAttributes(callback?: (err: AWSError, data: SNS.Types.GetSMSAttributesResponse) => void): Request<SNS.Types.GetSMSAttributesResponse, AWSError>;
  /**
   * Returns all of the properties of a subscription.
   */
  getSubscriptionAttributes(params: SNS.Types.GetSubscriptionAttributesInput, callback?: (err: AWSError, data: SNS.Types.GetSubscriptionAttributesResponse) => void): Request<SNS.Types.GetSubscriptionAttributesResponse, AWSError>;
  /**
   * Returns all of the properties of a subscription.
   */
  getSubscriptionAttributes(callback?: (err: AWSError, data: SNS.Types.GetSubscriptionAttributesResponse) => void): Request<SNS.Types.GetSubscriptionAttributesResponse, AWSError>;
  /**
   * Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.
   */
  getTopicAttributes(params: SNS.Types.GetTopicAttributesInput, callback?: (err: AWSError, data: SNS.Types.GetTopicAttributesResponse) => void): Request<SNS.Types.GetTopicAttributesResponse, AWSError>;
  /**
   * Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.
   */
  getTopicAttributes(callback?: (err: AWSError, data: SNS.Types.GetTopicAttributesResponse) => void): Request<SNS.Types.GetTopicAttributesResponse, AWSError>;
  /**
   * Lists the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM and APNS. The results for ListEndpointsByPlatformApplication are paginated and return a limited list of endpoints, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call ListEndpointsByPlatformApplication again using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see Using Amazon SNS Mobile Push Notifications. 
   */
  listEndpointsByPlatformApplication(params: SNS.Types.ListEndpointsByPlatformApplicationInput, callback?: (err: AWSError, data: SNS.Types.ListEndpointsByPlatformApplicationResponse) => void): Request<SNS.Types.ListEndpointsByPlatformApplicationResponse, AWSError>;
  /**
   * Lists the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM and APNS. The results for ListEndpointsByPlatformApplication are paginated and return a limited list of endpoints, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call ListEndpointsByPlatformApplication again using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see Using Amazon SNS Mobile Push Notifications. 
   */
  listEndpointsByPlatformApplication(callback?: (err: AWSError, data: SNS.Types.ListEndpointsByPlatformApplicationResponse) => void): Request<SNS.Types.ListEndpointsByPlatformApplicationResponse, AWSError>;
  /**
   * Returns a list of phone numbers that are opted out, meaning you cannot send SMS messages to them. The results for ListPhoneNumbersOptedOut are paginated, and each page returns up to 100 phone numbers. If additional phone numbers are available after the first page of results, then a NextToken string will be returned. To receive the next page, you call ListPhoneNumbersOptedOut again using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null.
   */
  listPhoneNumbersOptedOut(params: SNS.Types.ListPhoneNumbersOptedOutInput, callback?: (err: AWSError, data: SNS.Types.ListPhoneNumbersOptedOutResponse) => void): Request<SNS.Types.ListPhoneNumbersOptedOutResponse, AWSError>;
  /**
   * Returns a list of phone numbers that are opted out, meaning you cannot send SMS messages to them. The results for ListPhoneNumbersOptedOut are paginated, and each page returns up to 100 phone numbers. If additional phone numbers are available after the first page of results, then a NextToken string will be returned. To receive the next page, you call ListPhoneNumbersOptedOut again using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null.
   */
  listPhoneNumbersOptedOut(callback?: (err: AWSError, data: SNS.Types.ListPhoneNumbersOptedOutResponse) => void): Request<SNS.Types.ListPhoneNumbersOptedOutResponse, AWSError>;
  /**
   * Lists the platform application objects for the supported push notification services, such as APNS and GCM. The results for ListPlatformApplications are paginated and return a limited list of applications, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call ListPlatformApplications using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see Using Amazon SNS Mobile Push Notifications. 
   */
  listPlatformApplications(params: SNS.Types.ListPlatformApplicationsInput, callback?: (err: AWSError, data: SNS.Types.ListPlatformApplicationsResponse) => void): Request<SNS.Types.ListPlatformApplicationsResponse, AWSError>;
  /**
   * Lists the platform application objects for the supported push notification services, such as APNS and GCM. The results for ListPlatformApplications are paginated and return a limited list of applications, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call ListPlatformApplications using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see Using Amazon SNS Mobile Push Notifications. 
   */
  listPlatformApplications(callback?: (err: AWSError, data: SNS.Types.ListPlatformApplicationsResponse) => void): Request<SNS.Types.ListPlatformApplicationsResponse, AWSError>;
  /**
   * Returns a list of the requester's subscriptions. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a NextToken is also returned. Use the NextToken parameter in a new ListSubscriptions call to get further results.
   */
  listSubscriptions(params: SNS.Types.ListSubscriptionsInput, callback?: (err: AWSError, data: SNS.Types.ListSubscriptionsResponse) => void): Request<SNS.Types.ListSubscriptionsResponse, AWSError>;
  /**
   * Returns a list of the requester's subscriptions. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a NextToken is also returned. Use the NextToken parameter in a new ListSubscriptions call to get further results.
   */
  listSubscriptions(callback?: (err: AWSError, data: SNS.Types.ListSubscriptionsResponse) => void): Request<SNS.Types.ListSubscriptionsResponse, AWSError>;
  /**
   * Returns a list of the subscriptions to a specific topic. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a NextToken is also returned. Use the NextToken parameter in a new ListSubscriptionsByTopic call to get further results.
   */
  listSubscriptionsByTopic(params: SNS.Types.ListSubscriptionsByTopicInput, callback?: (err: AWSError, data: SNS.Types.ListSubscriptionsByTopicResponse) => void): Request<SNS.Types.ListSubscriptionsByTopicResponse, AWSError>;
  /**
   * Returns a list of the subscriptions to a specific topic. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a NextToken is also returned. Use the NextToken parameter in a new ListSubscriptionsByTopic call to get further results.
   */
  listSubscriptionsByTopic(callback?: (err: AWSError, data: SNS.Types.ListSubscriptionsByTopicResponse) => void): Request<SNS.Types.ListSubscriptionsByTopicResponse, AWSError>;
  /**
   * Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100. If there are more topics, a NextToken is also returned. Use the NextToken parameter in a new ListTopics call to get further results.
   */
  listTopics(params: SNS.Types.ListTopicsInput, callback?: (err: AWSError, data: SNS.Types.ListTopicsResponse) => void): Request<SNS.Types.ListTopicsResponse, AWSError>;
  /**
   * Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100. If there are more topics, a NextToken is also returned. Use the NextToken parameter in a new ListTopics call to get further results.
   */
  listTopics(callback?: (err: AWSError, data: SNS.Types.ListTopicsResponse) => void): Request<SNS.Types.ListTopicsResponse, AWSError>;
  /**
   * Use this request to opt in a phone number that is opted out, which enables you to resume sending SMS messages to the number. You can opt in a phone number only once every 30 days.
   */
  optInPhoneNumber(params: SNS.Types.OptInPhoneNumberInput, callback?: (err: AWSError, data: SNS.Types.OptInPhoneNumberResponse) => void): Request<SNS.Types.OptInPhoneNumberResponse, AWSError>;
  /**
   * Use this request to opt in a phone number that is opted out, which enables you to resume sending SMS messages to the number. You can opt in a phone number only once every 30 days.
   */
  optInPhoneNumber(callback?: (err: AWSError, data: SNS.Types.OptInPhoneNumberResponse) => void): Request<SNS.Types.OptInPhoneNumberResponse, AWSError>;
  /**
   * Sends a message to all of a topic's subscribed endpoints. When a messageId is returned, the message has been saved and Amazon SNS will attempt to deliver it to the topic's subscribers shortly. The format of the outgoing message to each subscribed endpoint depends on the notification protocol. To use the Publish action for sending a message to a mobile endpoint, such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for the TargetArn parameter. The EndpointArn is returned when making a call with the CreatePlatformEndpoint action.  For more information about formatting messages, see Send Custom Platform-Specific Payloads in Messages to Mobile Devices. 
   */
  publish(params: SNS.Types.PublishInput, callback?: (err: AWSError, data: SNS.Types.PublishResponse) => void): Request<SNS.Types.PublishResponse, AWSError>;
  /**
   * Sends a message to all of a topic's subscribed endpoints. When a messageId is returned, the message has been saved and Amazon SNS will attempt to deliver it to the topic's subscribers shortly. The format of the outgoing message to each subscribed endpoint depends on the notification protocol. To use the Publish action for sending a message to a mobile endpoint, such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for the TargetArn parameter. The EndpointArn is returned when making a call with the CreatePlatformEndpoint action.  For more information about formatting messages, see Send Custom Platform-Specific Payloads in Messages to Mobile Devices. 
   */
  publish(callback?: (err: AWSError, data: SNS.Types.PublishResponse) => void): Request<SNS.Types.PublishResponse, AWSError>;
  /**
   * Removes a statement from a topic's access control policy.
   */
  removePermission(params: SNS.Types.RemovePermissionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a statement from a topic's access control policy.
   */
  removePermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM and APNS. For more information, see Using Amazon SNS Mobile Push Notifications. 
   */
  setEndpointAttributes(params: SNS.Types.SetEndpointAttributesInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM and APNS. For more information, see Using Amazon SNS Mobile Push Notifications. 
   */
  setEndpointAttributes(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM. For more information, see Using Amazon SNS Mobile Push Notifications. For information on configuring attributes for message delivery status, see Using Amazon SNS Application Attributes for Message Delivery Status. 
   */
  setPlatformApplicationAttributes(params: SNS.Types.SetPlatformApplicationAttributesInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM. For more information, see Using Amazon SNS Mobile Push Notifications. For information on configuring attributes for message delivery status, see Using Amazon SNS Application Attributes for Message Delivery Status. 
   */
  setPlatformApplicationAttributes(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Use this request to set the default settings for sending SMS messages and receiving daily SMS usage reports. You can override some of these settings for a single message when you use the Publish action with the MessageAttributes.entry.N parameter. For more information, see Sending an SMS Message in the Amazon SNS Developer Guide.
   */
  setSMSAttributes(params: SNS.Types.SetSMSAttributesInput, callback?: (err: AWSError, data: SNS.Types.SetSMSAttributesResponse) => void): Request<SNS.Types.SetSMSAttributesResponse, AWSError>;
  /**
   * Use this request to set the default settings for sending SMS messages and receiving daily SMS usage reports. You can override some of these settings for a single message when you use the Publish action with the MessageAttributes.entry.N parameter. For more information, see Sending an SMS Message in the Amazon SNS Developer Guide.
   */
  setSMSAttributes(callback?: (err: AWSError, data: SNS.Types.SetSMSAttributesResponse) => void): Request<SNS.Types.SetSMSAttributesResponse, AWSError>;
  /**
   * Allows a subscription owner to set an attribute of the topic to a new value.
   */
  setSubscriptionAttributes(params: SNS.Types.SetSubscriptionAttributesInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows a subscription owner to set an attribute of the topic to a new value.
   */
  setSubscriptionAttributes(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows a topic owner to set an attribute of the topic to a new value.
   */
  setTopicAttributes(params: SNS.Types.SetTopicAttributesInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows a topic owner to set an attribute of the topic to a new value.
   */
  setTopicAttributes(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Prepares to subscribe an endpoint by sending the endpoint a confirmation message. To actually create a subscription, the endpoint owner must call the ConfirmSubscription action with the token from the confirmation message. Confirmation tokens are valid for three days.
   */
  subscribe(params: SNS.Types.SubscribeInput, callback?: (err: AWSError, data: SNS.Types.SubscribeResponse) => void): Request<SNS.Types.SubscribeResponse, AWSError>;
  /**
   * Prepares to subscribe an endpoint by sending the endpoint a confirmation message. To actually create a subscription, the endpoint owner must call the ConfirmSubscription action with the token from the confirmation message. Confirmation tokens are valid for three days.
   */
  subscribe(callback?: (err: AWSError, data: SNS.Types.SubscribeResponse) => void): Request<SNS.Types.SubscribeResponse, AWSError>;
  /**
   * Deletes a subscription. If the subscription requires authentication for deletion, only the owner of the subscription or the topic's owner can unsubscribe, and an AWS signature is required. If the Unsubscribe call does not require authentication and the requester is not the subscription owner, a final cancellation message is delivered to the endpoint, so that the endpoint owner can easily resubscribe to the topic if the Unsubscribe request was unintended.
   */
  unsubscribe(params: SNS.Types.UnsubscribeInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a subscription. If the subscription requires authentication for deletion, only the owner of the subscription or the topic's owner can unsubscribe, and an AWS signature is required. If the Unsubscribe call does not require authentication and the requester is not the subscription owner, a final cancellation message is delivered to the endpoint, so that the endpoint owner can easily resubscribe to the topic if the Unsubscribe request was unintended.
   */
  unsubscribe(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace SNS {
  export type ActionsList = action[];
  export interface AddPermissionInput {
    /**
     * The ARN of the topic whose access control policy you wish to modify.
     */
    TopicArn: topicARN;
    /**
     * A unique identifier for the new policy statement.
     */
    Label: label;
    /**
     * The AWS account IDs of the users (principals) who will be given access to the specified actions. The users must have AWS accounts, but do not need to be signed up for this service.
     */
    AWSAccountId: DelegatesList;
    /**
     * The action you want to allow for the specified principal(s). Valid values: any Amazon SNS action name.
     */
    ActionName: ActionsList;
  }
  export type Binary = Buffer|Uint8Array|Blob|string;
  export interface CheckIfPhoneNumberIsOptedOutInput {
    /**
     * The phone number for which you want to check the opt out status.
     */
    phoneNumber: PhoneNumber;
  }
  export interface CheckIfPhoneNumberIsOptedOutResponse {
    /**
     * Indicates whether the phone number is opted out:    true – The phone number is opted out, meaning you cannot publish SMS messages to it.    false – The phone number is opted in, meaning you can publish SMS messages to it.  
     */
    isOptedOut?: boolean;
  }
  export interface ConfirmSubscriptionInput {
    /**
     * The ARN of the topic for which you wish to confirm a subscription.
     */
    TopicArn: topicARN;
    /**
     * Short-lived token sent to an endpoint during the Subscribe action.
     */
    Token: token;
    /**
     * Disallows unauthenticated unsubscribes of the subscription. If the value of this parameter is true and the request has an AWS signature, then only the topic owner and the subscription owner can unsubscribe the endpoint. The unsubscribe action requires AWS authentication. 
     */
    AuthenticateOnUnsubscribe?: authenticateOnUnsubscribe;
  }
  export interface ConfirmSubscriptionResponse {
    /**
     * The ARN of the created subscription.
     */
    SubscriptionArn?: subscriptionARN;
  }
  export interface CreateEndpointResponse {
    /**
     * EndpointArn returned from CreateEndpoint action.
     */
    EndpointArn?: String;
  }
  export interface CreatePlatformApplicationInput {
    /**
     * Application names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, hyphens, and periods, and must be between 1 and 256 characters long.
     */
    Name: String;
    /**
     * The following platforms are supported: ADM (Amazon Device Messaging), APNS (Apple Push Notification Service), APNS_SANDBOX, and GCM (Google Cloud Messaging).
     */
    Platform: String;
    /**
     * For a list of attributes, see SetPlatformApplicationAttributes 
     */
    Attributes: MapStringToString;
  }
  export interface CreatePlatformApplicationResponse {
    /**
     * PlatformApplicationArn is returned.
     */
    PlatformApplicationArn?: String;
  }
  export interface CreatePlatformEndpointInput {
    /**
     * PlatformApplicationArn returned from CreatePlatformApplication is used to create a an endpoint.
     */
    PlatformApplicationArn: String;
    /**
     * Unique identifier created by the notification service for an app on a device. The specific name for Token will vary, depending on which notification service is being used. For example, when using APNS as the notification service, you need the device token. Alternatively, when using GCM or ADM, the device token equivalent is called the registration ID.
     */
    Token: String;
    /**
     * Arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.
     */
    CustomUserData?: String;
    /**
     * For a list of attributes, see SetEndpointAttributes.
     */
    Attributes?: MapStringToString;
  }
  export interface CreateTopicInput {
    /**
     * The name of the topic you want to create. Constraints: Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long.
     */
    Name: topicName;
  }
  export interface CreateTopicResponse {
    /**
     * The Amazon Resource Name (ARN) assigned to the created topic.
     */
    TopicArn?: topicARN;
  }
  export type DelegatesList = delegate[];
  export interface DeleteEndpointInput {
    /**
     * EndpointArn of endpoint to delete.
     */
    EndpointArn: String;
  }
  export interface DeletePlatformApplicationInput {
    /**
     * PlatformApplicationArn of platform application object to delete.
     */
    PlatformApplicationArn: String;
  }
  export interface DeleteTopicInput {
    /**
     * The ARN of the topic you want to delete.
     */
    TopicArn: topicARN;
  }
  export interface Endpoint {
    /**
     * EndpointArn for mobile app and device.
     */
    EndpointArn?: String;
    /**
     * Attributes for endpoint.
     */
    Attributes?: MapStringToString;
  }
  export interface GetEndpointAttributesInput {
    /**
     * EndpointArn for GetEndpointAttributes input.
     */
    EndpointArn: String;
  }
  export interface GetEndpointAttributesResponse {
    /**
     * Attributes include the following:    CustomUserData -- arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.    Enabled -- flag that enables/disables delivery to the endpoint. Amazon SNS will set this to false when a notification service indicates to Amazon SNS that the endpoint is invalid. Users can set it back to true, typically after updating Token.    Token -- device token, also referred to as a registration id, for an app and mobile device. This is returned from the notification service when an app and mobile device are registered with the notification service.  
     */
    Attributes?: MapStringToString;
  }
  export interface GetPlatformApplicationAttributesInput {
    /**
     * PlatformApplicationArn for GetPlatformApplicationAttributesInput.
     */
    PlatformApplicationArn: String;
  }
  export interface GetPlatformApplicationAttributesResponse {
    /**
     * Attributes include the following:    EventEndpointCreated -- Topic ARN to which EndpointCreated event notifications should be sent.    EventEndpointDeleted -- Topic ARN to which EndpointDeleted event notifications should be sent.    EventEndpointUpdated -- Topic ARN to which EndpointUpdate event notifications should be sent.    EventDeliveryFailure -- Topic ARN to which DeliveryFailure event notifications should be sent upon Direct Publish delivery failure (permanent) to one of the application's endpoints.  
     */
    Attributes?: MapStringToString;
  }
  export interface GetSMSAttributesInput {
    /**
     * A list of the individual attribute names, such as MonthlySpendLimit, for which you want values. For all attribute names, see SetSMSAttributes. If you don't use this parameter, Amazon SNS returns all SMS attributes.
     */
    attributes?: ListString;
  }
  export interface GetSMSAttributesResponse {
    /**
     * The SMS attribute names and their values.
     */
    attributes?: MapStringToString;
  }
  export interface GetSubscriptionAttributesInput {
    /**
     * The ARN of the subscription whose properties you want to get.
     */
    SubscriptionArn: subscriptionARN;
  }
  export interface GetSubscriptionAttributesResponse {
    /**
     * A map of the subscription's attributes. Attributes in this map include the following:    SubscriptionArn -- the subscription's ARN    TopicArn -- the topic ARN that the subscription is associated with    Owner -- the AWS account ID of the subscription's owner    ConfirmationWasAuthenticated -- true if the subscription confirmation request was authenticated    DeliveryPolicy -- the JSON serialization of the subscription's delivery policy    EffectiveDeliveryPolicy -- the JSON serialization of the effective delivery policy that takes into account the topic delivery policy and account system defaults  
     */
    Attributes?: SubscriptionAttributesMap;
  }
  export interface GetTopicAttributesInput {
    /**
     * The ARN of the topic whose properties you want to get.
     */
    TopicArn: topicARN;
  }
  export interface GetTopicAttributesResponse {
    /**
     * A map of the topic's attributes. Attributes in this map include the following:    TopicArn -- the topic's ARN    Owner -- the AWS account ID of the topic's owner    Policy -- the JSON serialization of the topic's access control policy    DisplayName -- the human-readable name used in the "From" field for notifications to email and email-json endpoints    SubscriptionsPending -- the number of subscriptions pending confirmation on this topic    SubscriptionsConfirmed -- the number of confirmed subscriptions on this topic    SubscriptionsDeleted -- the number of deleted subscriptions on this topic    DeliveryPolicy -- the JSON serialization of the topic's delivery policy    EffectiveDeliveryPolicy -- the JSON serialization of the effective delivery policy that takes into account system defaults  
     */
    Attributes?: TopicAttributesMap;
  }
  export interface ListEndpointsByPlatformApplicationInput {
    /**
     * PlatformApplicationArn for ListEndpointsByPlatformApplicationInput action.
     */
    PlatformApplicationArn: String;
    /**
     * NextToken string is used when calling ListEndpointsByPlatformApplication action to retrieve additional records that are available after the first page results.
     */
    NextToken?: String;
  }
  export interface ListEndpointsByPlatformApplicationResponse {
    /**
     * Endpoints returned for ListEndpointsByPlatformApplication action.
     */
    Endpoints?: ListOfEndpoints;
    /**
     * NextToken string is returned when calling ListEndpointsByPlatformApplication action if additional records are available after the first page results.
     */
    NextToken?: String;
  }
  export type ListOfEndpoints = Endpoint[];
  export type ListOfPlatformApplications = PlatformApplication[];
  export interface ListPhoneNumbersOptedOutInput {
    /**
     * A NextToken string is used when you call the ListPhoneNumbersOptedOut action to retrieve additional records that are available after the first page of results.
     */
    nextToken?: string;
  }
  export interface ListPhoneNumbersOptedOutResponse {
    /**
     * A list of phone numbers that are opted out of receiving SMS messages. The list is paginated, and each page can contain up to 100 phone numbers.
     */
    phoneNumbers?: PhoneNumberList;
    /**
     * A NextToken string is returned when you call the ListPhoneNumbersOptedOut action if additional records are available after the first page of results.
     */
    nextToken?: string;
  }
  export interface ListPlatformApplicationsInput {
    /**
     * NextToken string is used when calling ListPlatformApplications action to retrieve additional records that are available after the first page results.
     */
    NextToken?: String;
  }
  export interface ListPlatformApplicationsResponse {
    /**
     * Platform applications returned when calling ListPlatformApplications action.
     */
    PlatformApplications?: ListOfPlatformApplications;
    /**
     * NextToken string is returned when calling ListPlatformApplications action if additional records are available after the first page results.
     */
    NextToken?: String;
  }
  export type ListString = String[];
  export interface ListSubscriptionsByTopicInput {
    /**
     * The ARN of the topic for which you wish to find subscriptions.
     */
    TopicArn: topicARN;
    /**
     * Token returned by the previous ListSubscriptionsByTopic request.
     */
    NextToken?: nextToken;
  }
  export interface ListSubscriptionsByTopicResponse {
    /**
     * A list of subscriptions.
     */
    Subscriptions?: SubscriptionsList;
    /**
     * Token to pass along to the next ListSubscriptionsByTopic request. This element is returned if there are more subscriptions to retrieve.
     */
    NextToken?: nextToken;
  }
  export interface ListSubscriptionsInput {
    /**
     * Token returned by the previous ListSubscriptions request.
     */
    NextToken?: nextToken;
  }
  export interface ListSubscriptionsResponse {
    /**
     * A list of subscriptions.
     */
    Subscriptions?: SubscriptionsList;
    /**
     * Token to pass along to the next ListSubscriptions request. This element is returned if there are more subscriptions to retrieve.
     */
    NextToken?: nextToken;
  }
  export interface ListTopicsInput {
    /**
     * Token returned by the previous ListTopics request.
     */
    NextToken?: nextToken;
  }
  export interface ListTopicsResponse {
    /**
     * A list of topic ARNs.
     */
    Topics?: TopicsList;
    /**
     * Token to pass along to the next ListTopics request. This element is returned if there are additional topics to retrieve.
     */
    NextToken?: nextToken;
  }
  export type MapStringToString = {[key: string]: String};
  export type MessageAttributeMap = {[key: string]: MessageAttributeValue};
  export interface MessageAttributeValue {
    /**
     * Amazon SNS supports the following logical data types: String, Number, and Binary. For more information, see Message Attribute Data Types.
     */
    DataType: String;
    /**
     * Strings are Unicode with UTF8 binary encoding. For a list of code values, see http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters.
     */
    StringValue?: String;
    /**
     * Binary type attributes can store any binary data, for example, compressed data, encrypted data, or images.
     */
    BinaryValue?: Binary;
  }
  export interface OptInPhoneNumberInput {
    /**
     * The phone number to opt in.
     */
    phoneNumber: PhoneNumber;
  }
  export interface OptInPhoneNumberResponse {
  }
  export type PhoneNumber = string;
  export type PhoneNumberList = PhoneNumber[];
  export interface PlatformApplication {
    /**
     * PlatformApplicationArn for platform application object.
     */
    PlatformApplicationArn?: String;
    /**
     * Attributes for platform application object.
     */
    Attributes?: MapStringToString;
  }
  export interface PublishInput {
    /**
     * The topic you want to publish to. If you don't specify a value for the TopicArn parameter, you must specify a value for the PhoneNumber or TargetArn parameters.
     */
    TopicArn?: topicARN;
    /**
     * Either TopicArn or EndpointArn, but not both. If you don't specify a value for the TargetArn parameter, you must specify a value for the PhoneNumber or TopicArn parameters.
     */
    TargetArn?: String;
    /**
     * The phone number to which you want to deliver an SMS message. Use E.164 format. If you don't specify a value for the PhoneNumber parameter, you must specify a value for the TargetArn or TopicArn parameters.
     */
    PhoneNumber?: String;
    /**
     * The message you want to send to the topic. If you want to send the same message to all transport protocols, include the text of the message as a String value. If you want to send different messages for each transport protocol, set the value of the MessageStructure parameter to json and use a JSON object for the Message parameter.  Constraints: Messages must be UTF-8 encoded strings at most 256 KB in size (262144 bytes, not 262144 characters). JSON-specific constraints:   Keys in the JSON object that correspond to supported transport protocols must have simple JSON string values.   The values will be parsed (unescaped) before they are used in outgoing messages.   Outbound notifications are JSON encoded (meaning that the characters will be reescaped for sending).   Values have a minimum length of 0 (the empty string, "", is allowed).   Values have a maximum length bounded by the overall message size (so, including multiple protocols may limit message sizes).   Non-string values will cause the key to be ignored.   Keys that do not correspond to supported transport protocols are ignored.   Duplicate keys are not allowed.   Failure to parse or validate any key or value in the message will cause the Publish call to return an error (no partial delivery).  
     */
    Message: message;
    /**
     * Optional parameter to be used as the "Subject" line when the message is delivered to email endpoints. This field will also be included, if present, in the standard JSON messages delivered to other endpoints. Constraints: Subjects must be ASCII text that begins with a letter, number, or punctuation mark; must not include line breaks or control characters; and must be less than 100 characters long.
     */
    Subject?: subject;
    /**
     * Set MessageStructure to json if you want to send a different message for each protocol. For example, using one publish action, you can send a short message to your SMS subscribers and a longer message to your email subscribers. If you set MessageStructure to json, the value of the Message parameter must:    be a syntactically valid JSON object; and   contain at least a top-level JSON key of "default" with a value that is a string.   You can define other top-level keys that define the message you want to send to a specific transport protocol (e.g., "http"). For information about sending different messages for each protocol using the AWS Management Console, go to Create Different Messages for Each Protocol in the Amazon Simple Notification Service Getting Started Guide.  Valid value: json 
     */
    MessageStructure?: messageStructure;
    /**
     * Message attributes for Publish action.
     */
    MessageAttributes?: MessageAttributeMap;
  }
  export interface PublishResponse {
    /**
     * Unique identifier assigned to the published message. Length Constraint: Maximum 100 characters
     */
    MessageId?: messageId;
  }
  export interface RemovePermissionInput {
    /**
     * The ARN of the topic whose access control policy you wish to modify.
     */
    TopicArn: topicARN;
    /**
     * The unique label of the statement you want to remove.
     */
    Label: label;
  }
  export interface SetEndpointAttributesInput {
    /**
     * EndpointArn used for SetEndpointAttributes action.
     */
    EndpointArn: String;
    /**
     * A map of the endpoint attributes. Attributes in this map include the following:    CustomUserData -- arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.    Enabled -- flag that enables/disables delivery to the endpoint. Amazon SNS will set this to false when a notification service indicates to Amazon SNS that the endpoint is invalid. Users can set it back to true, typically after updating Token.    Token -- device token, also referred to as a registration id, for an app and mobile device. This is returned from the notification service when an app and mobile device are registered with the notification service.  
     */
    Attributes: MapStringToString;
  }
  export interface SetPlatformApplicationAttributesInput {
    /**
     * PlatformApplicationArn for SetPlatformApplicationAttributes action.
     */
    PlatformApplicationArn: String;
    /**
     * A map of the platform application attributes. Attributes in this map include the following:    PlatformCredential -- The credential received from the notification service. For APNS/APNS_SANDBOX, PlatformCredential is private key. For GCM, PlatformCredential is "API key". For ADM, PlatformCredential is "client secret".    PlatformPrincipal -- The principal received from the notification service. For APNS/APNS_SANDBOX, PlatformPrincipal is SSL certificate. For GCM, PlatformPrincipal is not applicable. For ADM, PlatformPrincipal is "client id".    EventEndpointCreated -- Topic ARN to which EndpointCreated event notifications should be sent.    EventEndpointDeleted -- Topic ARN to which EndpointDeleted event notifications should be sent.    EventEndpointUpdated -- Topic ARN to which EndpointUpdate event notifications should be sent.    EventDeliveryFailure -- Topic ARN to which DeliveryFailure event notifications should be sent upon Direct Publish delivery failure (permanent) to one of the application's endpoints.    SuccessFeedbackRoleArn -- IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.    FailureFeedbackRoleArn -- IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.    SuccessFeedbackSampleRate -- Sample rate percentage (0-100) of successfully delivered messages.  
     */
    Attributes: MapStringToString;
  }
  export interface SetSMSAttributesInput {
    /**
     * The default settings for sending SMS messages from your account. You can set values for the following attribute names:  MonthlySpendLimit – The maximum amount in USD that you are willing to spend each month to send SMS messages. When Amazon SNS determines that sending an SMS message would incur a cost that exceeds this limit, it stops sending SMS messages within minutes.  Amazon SNS stops sending SMS messages within minutes of the limit being crossed. During that interval, if you continue to send SMS messages, you will incur costs that exceed your limit.  By default, the spend limit is set to the maximum allowed by Amazon SNS. If you want to exceed the maximum, contact AWS Support or your AWS sales representative for a service limit increase.  DeliveryStatusIAMRole – The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs. For each SMS message that you send, Amazon SNS writes a log that includes the message price, the success or failure status, the reason for failure (if the message failed), the message dwell time, and other information.  DeliveryStatusSuccessSamplingRate – The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value can be an integer from 0 - 100. For example, to write logs only for failed deliveries, set this value to 0. To write logs for 10% of your successful deliveries, set it to 10.  DefaultSenderID – A string, such as your business brand, that is displayed as the sender on the receiving device. Support for sender IDs varies by country. The sender ID can be 1 - 11 alphanumeric characters, and it must contain at least one letter.  DefaultSMSType – The type of SMS message that you will send by default. You can assign the following values:    Promotional – (Default) Noncritical messages, such as marketing messages. Amazon SNS optimizes the message delivery to incur the lowest cost.    Transactional – Critical messages that support customer transactions, such as one-time passcodes for multi-factor authentication. Amazon SNS optimizes the message delivery to achieve the highest reliability.    UsageReportS3Bucket – The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS. Each day, Amazon SNS will deliver a usage report as a CSV file to the bucket. The report includes the following information for each SMS message that was successfully delivered by your account:   Time that the message was published (in UTC)   Message ID   Destination phone number   Message type   Delivery status   Message price (in USD)   Part number (a message is split into multiple parts if it is too long for a single message)   Total number of parts   To receive the report, the bucket must have a policy that allows the Amazon SNS service principle to perform the s3:PutObject and s3:GetBucketLocation actions. For an example bucket policy and usage report, see Monitoring SMS Activity in the Amazon SNS Developer Guide.
     */
    attributes: MapStringToString;
  }
  export interface SetSMSAttributesResponse {
  }
  export interface SetSubscriptionAttributesInput {
    /**
     * The ARN of the subscription to modify.
     */
    SubscriptionArn: subscriptionARN;
    /**
     * The name of the attribute you want to set. Only a subset of the subscriptions attributes are mutable. Valid values: DeliveryPolicy | RawMessageDelivery 
     */
    AttributeName: attributeName;
    /**
     * The new value for the attribute in JSON format.
     */
    AttributeValue?: attributeValue;
  }
  export interface SetTopicAttributesInput {
    /**
     * The ARN of the topic to modify.
     */
    TopicArn: topicARN;
    /**
     * The name of the attribute you want to set. Only a subset of the topic's attributes are mutable. Valid values: Policy | DisplayName | DeliveryPolicy 
     */
    AttributeName: attributeName;
    /**
     * The new value for the attribute.
     */
    AttributeValue?: attributeValue;
  }
  export type String = string;
  export interface SubscribeInput {
    /**
     * The ARN of the topic you want to subscribe to.
     */
    TopicArn: topicARN;
    /**
     * The protocol you want to use. Supported protocols include:    http -- delivery of JSON-encoded message via HTTP POST    https -- delivery of JSON-encoded message via HTTPS POST    email -- delivery of message via SMTP    email-json -- delivery of JSON-encoded message via SMTP    sms -- delivery of message via SMS    sqs -- delivery of JSON-encoded message to an Amazon SQS queue    application -- delivery of JSON-encoded message to an EndpointArn for a mobile app and device.    lambda -- delivery of JSON-encoded message to an AWS Lambda function.  
     */
    Protocol: protocol;
    /**
     * The endpoint that you want to receive notifications. Endpoints vary by protocol:   For the http protocol, the endpoint is an URL beginning with "http://"   For the https protocol, the endpoint is a URL beginning with "https://"   For the email protocol, the endpoint is an email address   For the email-json protocol, the endpoint is an email address   For the sms protocol, the endpoint is a phone number of an SMS-enabled device   For the sqs protocol, the endpoint is the ARN of an Amazon SQS queue   For the application protocol, the endpoint is the EndpointArn of a mobile app and device.   For the lambda protocol, the endpoint is the ARN of an AWS Lambda function.  
     */
    Endpoint?: endpoint;
  }
  export interface SubscribeResponse {
    /**
     * The ARN of the subscription, if the service was able to create a subscription immediately (without requiring endpoint owner confirmation).
     */
    SubscriptionArn?: subscriptionARN;
  }
  export interface Subscription {
    /**
     * The subscription's ARN.
     */
    SubscriptionArn?: subscriptionARN;
    /**
     * The subscription's owner.
     */
    Owner?: account;
    /**
     * The subscription's protocol.
     */
    Protocol?: protocol;
    /**
     * The subscription's endpoint (format depends on the protocol).
     */
    Endpoint?: endpoint;
    /**
     * The ARN of the subscription's topic.
     */
    TopicArn?: topicARN;
  }
  export type SubscriptionAttributesMap = {[key: string]: attributeValue};
  export type SubscriptionsList = Subscription[];
  export interface Topic {
    /**
     * The topic's ARN.
     */
    TopicArn?: topicARN;
  }
  export type TopicAttributesMap = {[key: string]: attributeValue};
  export type TopicsList = Topic[];
  export interface UnsubscribeInput {
    /**
     * The ARN of the subscription to be deleted.
     */
    SubscriptionArn: subscriptionARN;
  }
  export type account = string;
  export type action = string;
  export type attributeName = string;
  export type attributeValue = string;
  export type authenticateOnUnsubscribe = string;
  export type delegate = string;
  export type endpoint = string;
  export type label = string;
  export type message = string;
  export type messageId = string;
  export type messageStructure = string;
  export type nextToken = string;
  export type protocol = string;
  export type subject = string;
  export type subscriptionARN = string;
  export type token = string;
  export type topicARN = string;
  export type topicName = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2010-03-31"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SNS client.
   */
  export import Types = SNS;
}
export = SNS;
