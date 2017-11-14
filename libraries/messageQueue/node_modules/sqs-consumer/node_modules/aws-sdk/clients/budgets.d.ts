import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Budgets extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Budgets.Types.ClientConfiguration)
  config: Config & Budgets.Types.ClientConfiguration;
  /**
   * Create a new budget
   */
  createBudget(params: Budgets.Types.CreateBudgetRequest, callback?: (err: AWSError, data: Budgets.Types.CreateBudgetResponse) => void): Request<Budgets.Types.CreateBudgetResponse, AWSError>;
  /**
   * Create a new budget
   */
  createBudget(callback?: (err: AWSError, data: Budgets.Types.CreateBudgetResponse) => void): Request<Budgets.Types.CreateBudgetResponse, AWSError>;
  /**
   * Create a new Notification with subscribers for a budget
   */
  createNotification(params: Budgets.Types.CreateNotificationRequest, callback?: (err: AWSError, data: Budgets.Types.CreateNotificationResponse) => void): Request<Budgets.Types.CreateNotificationResponse, AWSError>;
  /**
   * Create a new Notification with subscribers for a budget
   */
  createNotification(callback?: (err: AWSError, data: Budgets.Types.CreateNotificationResponse) => void): Request<Budgets.Types.CreateNotificationResponse, AWSError>;
  /**
   * Create a new Subscriber for a notification
   */
  createSubscriber(params: Budgets.Types.CreateSubscriberRequest, callback?: (err: AWSError, data: Budgets.Types.CreateSubscriberResponse) => void): Request<Budgets.Types.CreateSubscriberResponse, AWSError>;
  /**
   * Create a new Subscriber for a notification
   */
  createSubscriber(callback?: (err: AWSError, data: Budgets.Types.CreateSubscriberResponse) => void): Request<Budgets.Types.CreateSubscriberResponse, AWSError>;
  /**
   * Delete a budget and related notifications
   */
  deleteBudget(params: Budgets.Types.DeleteBudgetRequest, callback?: (err: AWSError, data: Budgets.Types.DeleteBudgetResponse) => void): Request<Budgets.Types.DeleteBudgetResponse, AWSError>;
  /**
   * Delete a budget and related notifications
   */
  deleteBudget(callback?: (err: AWSError, data: Budgets.Types.DeleteBudgetResponse) => void): Request<Budgets.Types.DeleteBudgetResponse, AWSError>;
  /**
   * Delete a notification and related subscribers
   */
  deleteNotification(params: Budgets.Types.DeleteNotificationRequest, callback?: (err: AWSError, data: Budgets.Types.DeleteNotificationResponse) => void): Request<Budgets.Types.DeleteNotificationResponse, AWSError>;
  /**
   * Delete a notification and related subscribers
   */
  deleteNotification(callback?: (err: AWSError, data: Budgets.Types.DeleteNotificationResponse) => void): Request<Budgets.Types.DeleteNotificationResponse, AWSError>;
  /**
   * Delete a Subscriber for a notification
   */
  deleteSubscriber(params: Budgets.Types.DeleteSubscriberRequest, callback?: (err: AWSError, data: Budgets.Types.DeleteSubscriberResponse) => void): Request<Budgets.Types.DeleteSubscriberResponse, AWSError>;
  /**
   * Delete a Subscriber for a notification
   */
  deleteSubscriber(callback?: (err: AWSError, data: Budgets.Types.DeleteSubscriberResponse) => void): Request<Budgets.Types.DeleteSubscriberResponse, AWSError>;
  /**
   * Get a single budget
   */
  describeBudget(params: Budgets.Types.DescribeBudgetRequest, callback?: (err: AWSError, data: Budgets.Types.DescribeBudgetResponse) => void): Request<Budgets.Types.DescribeBudgetResponse, AWSError>;
  /**
   * Get a single budget
   */
  describeBudget(callback?: (err: AWSError, data: Budgets.Types.DescribeBudgetResponse) => void): Request<Budgets.Types.DescribeBudgetResponse, AWSError>;
  /**
   * Get all budgets for an account
   */
  describeBudgets(params: Budgets.Types.DescribeBudgetsRequest, callback?: (err: AWSError, data: Budgets.Types.DescribeBudgetsResponse) => void): Request<Budgets.Types.DescribeBudgetsResponse, AWSError>;
  /**
   * Get all budgets for an account
   */
  describeBudgets(callback?: (err: AWSError, data: Budgets.Types.DescribeBudgetsResponse) => void): Request<Budgets.Types.DescribeBudgetsResponse, AWSError>;
  /**
   * Get notifications of a budget
   */
  describeNotificationsForBudget(params: Budgets.Types.DescribeNotificationsForBudgetRequest, callback?: (err: AWSError, data: Budgets.Types.DescribeNotificationsForBudgetResponse) => void): Request<Budgets.Types.DescribeNotificationsForBudgetResponse, AWSError>;
  /**
   * Get notifications of a budget
   */
  describeNotificationsForBudget(callback?: (err: AWSError, data: Budgets.Types.DescribeNotificationsForBudgetResponse) => void): Request<Budgets.Types.DescribeNotificationsForBudgetResponse, AWSError>;
  /**
   * Get subscribers of a notification
   */
  describeSubscribersForNotification(params: Budgets.Types.DescribeSubscribersForNotificationRequest, callback?: (err: AWSError, data: Budgets.Types.DescribeSubscribersForNotificationResponse) => void): Request<Budgets.Types.DescribeSubscribersForNotificationResponse, AWSError>;
  /**
   * Get subscribers of a notification
   */
  describeSubscribersForNotification(callback?: (err: AWSError, data: Budgets.Types.DescribeSubscribersForNotificationResponse) => void): Request<Budgets.Types.DescribeSubscribersForNotificationResponse, AWSError>;
  /**
   * Update the information of a budget already created
   */
  updateBudget(params: Budgets.Types.UpdateBudgetRequest, callback?: (err: AWSError, data: Budgets.Types.UpdateBudgetResponse) => void): Request<Budgets.Types.UpdateBudgetResponse, AWSError>;
  /**
   * Update the information of a budget already created
   */
  updateBudget(callback?: (err: AWSError, data: Budgets.Types.UpdateBudgetResponse) => void): Request<Budgets.Types.UpdateBudgetResponse, AWSError>;
  /**
   * Update the information about a notification already created
   */
  updateNotification(params: Budgets.Types.UpdateNotificationRequest, callback?: (err: AWSError, data: Budgets.Types.UpdateNotificationResponse) => void): Request<Budgets.Types.UpdateNotificationResponse, AWSError>;
  /**
   * Update the information about a notification already created
   */
  updateNotification(callback?: (err: AWSError, data: Budgets.Types.UpdateNotificationResponse) => void): Request<Budgets.Types.UpdateNotificationResponse, AWSError>;
  /**
   * Update a subscriber
   */
  updateSubscriber(params: Budgets.Types.UpdateSubscriberRequest, callback?: (err: AWSError, data: Budgets.Types.UpdateSubscriberResponse) => void): Request<Budgets.Types.UpdateSubscriberResponse, AWSError>;
  /**
   * Update a subscriber
   */
  updateSubscriber(callback?: (err: AWSError, data: Budgets.Types.UpdateSubscriberResponse) => void): Request<Budgets.Types.UpdateSubscriberResponse, AWSError>;
}
declare namespace Budgets {
  export type AccountId = string;
  export interface Budget {
    BudgetName: BudgetName;
    BudgetLimit: Spend;
    CostFilters?: CostFilters;
    CostTypes: CostTypes;
    TimeUnit: TimeUnit;
    TimePeriod: TimePeriod;
    CalculatedSpend?: CalculatedSpend;
    BudgetType: BudgetType;
  }
  export type BudgetName = string;
  export type BudgetType = "USAGE"|"COST"|"RI_UTILIZATION"|string;
  export type Budgets = Budget[];
  export interface CalculatedSpend {
    ActualSpend: Spend;
    ForecastedSpend?: Spend;
  }
  export type ComparisonOperator = "GREATER_THAN"|"LESS_THAN"|"EQUAL_TO"|string;
  export type CostFilters = {[key: string]: DimensionValues};
  export interface CostTypes {
    IncludeTax: GenericBoolean;
    IncludeSubscription: GenericBoolean;
    UseBlended: GenericBoolean;
  }
  export interface CreateBudgetRequest {
    AccountId: AccountId;
    Budget: Budget;
    NotificationsWithSubscribers?: NotificationWithSubscribersList;
  }
  export interface CreateBudgetResponse {
  }
  export interface CreateNotificationRequest {
    AccountId: AccountId;
    BudgetName: BudgetName;
    Notification: Notification;
    Subscribers: Subscribers;
  }
  export interface CreateNotificationResponse {
  }
  export interface CreateSubscriberRequest {
    AccountId: AccountId;
    BudgetName: BudgetName;
    Notification: Notification;
    Subscriber: Subscriber;
  }
  export interface CreateSubscriberResponse {
  }
  export interface DeleteBudgetRequest {
    AccountId: AccountId;
    BudgetName: BudgetName;
  }
  export interface DeleteBudgetResponse {
  }
  export interface DeleteNotificationRequest {
    AccountId: AccountId;
    BudgetName: BudgetName;
    Notification: Notification;
  }
  export interface DeleteNotificationResponse {
  }
  export interface DeleteSubscriberRequest {
    AccountId: AccountId;
    BudgetName: BudgetName;
    Notification: Notification;
    Subscriber: Subscriber;
  }
  export interface DeleteSubscriberResponse {
  }
  export interface DescribeBudgetRequest {
    AccountId: AccountId;
    BudgetName: BudgetName;
  }
  export interface DescribeBudgetResponse {
    Budget?: Budget;
  }
  export interface DescribeBudgetsRequest {
    AccountId: AccountId;
    MaxResults?: MaxResults;
    NextToken?: GenericString;
  }
  export interface DescribeBudgetsResponse {
    Budgets?: Budgets;
    NextToken?: GenericString;
  }
  export interface DescribeNotificationsForBudgetRequest {
    AccountId: AccountId;
    BudgetName: BudgetName;
    MaxResults?: MaxResults;
    NextToken?: GenericString;
  }
  export interface DescribeNotificationsForBudgetResponse {
    Notifications?: Notifications;
    NextToken?: GenericString;
  }
  export interface DescribeSubscribersForNotificationRequest {
    AccountId: AccountId;
    BudgetName: BudgetName;
    Notification: Notification;
    MaxResults?: MaxResults;
    NextToken?: GenericString;
  }
  export interface DescribeSubscribersForNotificationResponse {
    Subscribers?: Subscribers;
    NextToken?: GenericString;
  }
  export type DimensionValues = GenericString[];
  export type GenericBoolean = boolean;
  export type GenericString = string;
  export type GenericTimestamp = Date;
  export type MaxResults = number;
  export interface Notification {
    NotificationType: NotificationType;
    ComparisonOperator: ComparisonOperator;
    Threshold: NotificationThreshold;
    ThresholdType?: ThresholdType;
  }
  export type NotificationThreshold = number;
  export type NotificationType = "ACTUAL"|"FORECASTED"|string;
  export interface NotificationWithSubscribers {
    Notification: Notification;
    Subscribers: Subscribers;
  }
  export type NotificationWithSubscribersList = NotificationWithSubscribers[];
  export type Notifications = Notification[];
  export type NumericValue = string;
  export interface Spend {
    Amount: NumericValue;
    Unit: UnitValue;
  }
  export interface Subscriber {
    SubscriptionType: SubscriptionType;
    Address: GenericString;
  }
  export type Subscribers = Subscriber[];
  export type SubscriptionType = "SNS"|"EMAIL"|string;
  export type ThresholdType = "PERCENTAGE"|"ABSOLUTE_VALUE"|string;
  export interface TimePeriod {
    Start: GenericTimestamp;
    End: GenericTimestamp;
  }
  export type TimeUnit = "DAILY"|"MONTHLY"|"QUARTERLY"|"ANNUALLY"|string;
  export type UnitValue = string;
  export interface UpdateBudgetRequest {
    AccountId: AccountId;
    NewBudget: Budget;
  }
  export interface UpdateBudgetResponse {
  }
  export interface UpdateNotificationRequest {
    AccountId: AccountId;
    BudgetName: BudgetName;
    OldNotification: Notification;
    NewNotification: Notification;
  }
  export interface UpdateNotificationResponse {
  }
  export interface UpdateSubscriberRequest {
    AccountId: AccountId;
    BudgetName: BudgetName;
    Notification: Notification;
    OldSubscriber: Subscriber;
    NewSubscriber: Subscriber;
  }
  export interface UpdateSubscriberResponse {
  }
  export type errorMessage = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-10-20"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Budgets client.
   */
  export import Types = Budgets;
}
export = Budgets;
