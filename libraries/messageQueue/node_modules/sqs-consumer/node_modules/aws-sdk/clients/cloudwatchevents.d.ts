import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CloudWatchEvents extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudWatchEvents.Types.ClientConfiguration)
  config: Config & CloudWatchEvents.Types.ClientConfiguration;
  /**
   * Deletes the specified rule. You must remove all targets from a rule using RemoveTargets before you can delete the rule. When you delete a rule, incoming events might continue to match to the deleted rule. Please allow a short period of time for changes to take effect.
   */
  deleteRule(params: CloudWatchEvents.Types.DeleteRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified rule. You must remove all targets from a rule using RemoveTargets before you can delete the rule. When you delete a rule, incoming events might continue to match to the deleted rule. Please allow a short period of time for changes to take effect.
   */
  deleteRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Displays the external AWS accounts that are permitted to write events to your account using your account's event bus, and the associated policy. To enable your account to receive events from other accounts, use PutPermission.
   */
  describeEventBus(params: CloudWatchEvents.Types.DescribeEventBusRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.DescribeEventBusResponse) => void): Request<CloudWatchEvents.Types.DescribeEventBusResponse, AWSError>;
  /**
   * Displays the external AWS accounts that are permitted to write events to your account using your account's event bus, and the associated policy. To enable your account to receive events from other accounts, use PutPermission.
   */
  describeEventBus(callback?: (err: AWSError, data: CloudWatchEvents.Types.DescribeEventBusResponse) => void): Request<CloudWatchEvents.Types.DescribeEventBusResponse, AWSError>;
  /**
   * Describes the specified rule.
   */
  describeRule(params: CloudWatchEvents.Types.DescribeRuleRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.DescribeRuleResponse) => void): Request<CloudWatchEvents.Types.DescribeRuleResponse, AWSError>;
  /**
   * Describes the specified rule.
   */
  describeRule(callback?: (err: AWSError, data: CloudWatchEvents.Types.DescribeRuleResponse) => void): Request<CloudWatchEvents.Types.DescribeRuleResponse, AWSError>;
  /**
   * Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression. When you disable a rule, incoming events might continue to match to the disabled rule. Please allow a short period of time for changes to take effect.
   */
  disableRule(params: CloudWatchEvents.Types.DisableRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression. When you disable a rule, incoming events might continue to match to the disabled rule. Please allow a short period of time for changes to take effect.
   */
  disableRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the specified rule. If the rule does not exist, the operation fails. When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Please allow a short period of time for changes to take effect.
   */
  enableRule(params: CloudWatchEvents.Types.EnableRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the specified rule. If the rule does not exist, the operation fails. When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Please allow a short period of time for changes to take effect.
   */
  enableRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Lists the rules for the specified target. You can see which of the rules in Amazon CloudWatch Events can invoke a specific target in your account.
   */
  listRuleNamesByTarget(params: CloudWatchEvents.Types.ListRuleNamesByTargetRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.ListRuleNamesByTargetResponse) => void): Request<CloudWatchEvents.Types.ListRuleNamesByTargetResponse, AWSError>;
  /**
   * Lists the rules for the specified target. You can see which of the rules in Amazon CloudWatch Events can invoke a specific target in your account.
   */
  listRuleNamesByTarget(callback?: (err: AWSError, data: CloudWatchEvents.Types.ListRuleNamesByTargetResponse) => void): Request<CloudWatchEvents.Types.ListRuleNamesByTargetResponse, AWSError>;
  /**
   * Lists your Amazon CloudWatch Events rules. You can either list all the rules or you can provide a prefix to match to the rule names.
   */
  listRules(params: CloudWatchEvents.Types.ListRulesRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.ListRulesResponse) => void): Request<CloudWatchEvents.Types.ListRulesResponse, AWSError>;
  /**
   * Lists your Amazon CloudWatch Events rules. You can either list all the rules or you can provide a prefix to match to the rule names.
   */
  listRules(callback?: (err: AWSError, data: CloudWatchEvents.Types.ListRulesResponse) => void): Request<CloudWatchEvents.Types.ListRulesResponse, AWSError>;
  /**
   * Lists the targets assigned to the specified rule.
   */
  listTargetsByRule(params: CloudWatchEvents.Types.ListTargetsByRuleRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.ListTargetsByRuleResponse) => void): Request<CloudWatchEvents.Types.ListTargetsByRuleResponse, AWSError>;
  /**
   * Lists the targets assigned to the specified rule.
   */
  listTargetsByRule(callback?: (err: AWSError, data: CloudWatchEvents.Types.ListTargetsByRuleResponse) => void): Request<CloudWatchEvents.Types.ListTargetsByRuleResponse, AWSError>;
  /**
   * Sends custom events to Amazon CloudWatch Events so that they can be matched to rules.
   */
  putEvents(params: CloudWatchEvents.Types.PutEventsRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.PutEventsResponse) => void): Request<CloudWatchEvents.Types.PutEventsResponse, AWSError>;
  /**
   * Sends custom events to Amazon CloudWatch Events so that they can be matched to rules.
   */
  putEvents(callback?: (err: AWSError, data: CloudWatchEvents.Types.PutEventsResponse) => void): Request<CloudWatchEvents.Types.PutEventsResponse, AWSError>;
  /**
   * Running PutPermission permits the specified AWS account to put events to your account's default event bus. CloudWatch Events rules in your account are triggered by these events arriving to your default event bus.  For another account to send events to your account, that external account must have a CloudWatch Events rule with your account's default event bus as a target. To enable multiple AWS accounts to put events to your default event bus, run PutPermission once for each of these accounts. The permission policy on the default event bus cannot exceed 10KB in size.
   */
  putPermission(params: CloudWatchEvents.Types.PutPermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Running PutPermission permits the specified AWS account to put events to your account's default event bus. CloudWatch Events rules in your account are triggered by these events arriving to your default event bus.  For another account to send events to your account, that external account must have a CloudWatch Events rule with your account's default event bus as a target. To enable multiple AWS accounts to put events to your default event bus, run PutPermission once for each of these accounts. The permission policy on the default event bus cannot exceed 10KB in size.
   */
  putPermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using DisableRule. When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Please allow a short period of time for changes to take effect. A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule. Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.
   */
  putRule(params: CloudWatchEvents.Types.PutRuleRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.PutRuleResponse) => void): Request<CloudWatchEvents.Types.PutRuleResponse, AWSError>;
  /**
   * Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using DisableRule. When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Please allow a short period of time for changes to take effect. A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule. Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.
   */
  putRule(callback?: (err: AWSError, data: CloudWatchEvents.Types.PutRuleResponse) => void): Request<CloudWatchEvents.Types.PutRuleResponse, AWSError>;
  /**
   * Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule. Targets are the resources that are invoked when a rule is triggered. You can configure the following as targets for CloudWatch Events:   EC2 instances   AWS Lambda functions   Streams in Amazon Kinesis Streams   Delivery streams in Amazon Kinesis Firehose   Amazon ECS tasks   AWS Step Functions state machines   Pipelines in Amazon Code Pipeline   Amazon Inspector assessment templates   Amazon SNS topics   Amazon SQS queues   The default event bus of another AWS account   Note that creating rules with built-in targets is supported only in the AWS Management Console. For some target types, PutTargets provides target-specific parameters. If the target is an Amazon Kinesis stream, you can optionally specify which shard the event goes to by using the KinesisParameters argument. To invoke a command on multiple EC2 instances with one rule, you can use the RunCommandParameters field. To be able to make API calls against the resources that you own, Amazon CloudWatch Events needs the appropriate permissions. For AWS Lambda and Amazon SNS resources, CloudWatch Events relies on resource-based policies. For EC2 instances, Amazon Kinesis streams, and AWS Step Functions state machines, CloudWatch Events relies on IAM roles that you specify in the RoleARN argument in PutTargets. For more information, see Authentication and Access Control in the Amazon CloudWatch Events User Guide. If another AWS account is in the same region and has granted you permission (using PutPermission), you can send events to that account by setting that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the Arn when you run PutTargets. If your account sends events to another account, your account is charged for each sent event. Each event sent to antoher account is charged as a custom event. The account receiving the event is not charged. For more information on pricing, see Amazon CloudWatch Pricing. For more information about enabling cross-account events, see PutPermission.  Input, InputPath and InputTransformer are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:   If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON form (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).   If Input is specified in the form of valid JSON, then the matched event is overridden with this constant.   If InputPath is specified in the form of JSONPath (for example, $.detail), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).   If InputTransformer is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.   When you specify Input, InputPath, or InputTransformer, you must use JSON dot notation, not bracket notation. When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Please allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.
   */
  putTargets(params: CloudWatchEvents.Types.PutTargetsRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.PutTargetsResponse) => void): Request<CloudWatchEvents.Types.PutTargetsResponse, AWSError>;
  /**
   * Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule. Targets are the resources that are invoked when a rule is triggered. You can configure the following as targets for CloudWatch Events:   EC2 instances   AWS Lambda functions   Streams in Amazon Kinesis Streams   Delivery streams in Amazon Kinesis Firehose   Amazon ECS tasks   AWS Step Functions state machines   Pipelines in Amazon Code Pipeline   Amazon Inspector assessment templates   Amazon SNS topics   Amazon SQS queues   The default event bus of another AWS account   Note that creating rules with built-in targets is supported only in the AWS Management Console. For some target types, PutTargets provides target-specific parameters. If the target is an Amazon Kinesis stream, you can optionally specify which shard the event goes to by using the KinesisParameters argument. To invoke a command on multiple EC2 instances with one rule, you can use the RunCommandParameters field. To be able to make API calls against the resources that you own, Amazon CloudWatch Events needs the appropriate permissions. For AWS Lambda and Amazon SNS resources, CloudWatch Events relies on resource-based policies. For EC2 instances, Amazon Kinesis streams, and AWS Step Functions state machines, CloudWatch Events relies on IAM roles that you specify in the RoleARN argument in PutTargets. For more information, see Authentication and Access Control in the Amazon CloudWatch Events User Guide. If another AWS account is in the same region and has granted you permission (using PutPermission), you can send events to that account by setting that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the Arn when you run PutTargets. If your account sends events to another account, your account is charged for each sent event. Each event sent to antoher account is charged as a custom event. The account receiving the event is not charged. For more information on pricing, see Amazon CloudWatch Pricing. For more information about enabling cross-account events, see PutPermission.  Input, InputPath and InputTransformer are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:   If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON form (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).   If Input is specified in the form of valid JSON, then the matched event is overridden with this constant.   If InputPath is specified in the form of JSONPath (for example, $.detail), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).   If InputTransformer is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.   When you specify Input, InputPath, or InputTransformer, you must use JSON dot notation, not bracket notation. When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Please allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.
   */
  putTargets(callback?: (err: AWSError, data: CloudWatchEvents.Types.PutTargetsResponse) => void): Request<CloudWatchEvents.Types.PutTargetsResponse, AWSError>;
  /**
   * Revokes the permission of another AWS account to be able to put events to your default event bus. Specify the account to revoke by the StatementId value that you associated with the account when you granted it permission with PutPermission. You can find the StatementId by using DescribeEventBus.
   */
  removePermission(params: CloudWatchEvents.Types.RemovePermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes the permission of another AWS account to be able to put events to your default event bus. Specify the account to revoke by the StatementId value that you associated with the account when you granted it permission with PutPermission. You can find the StatementId by using DescribeEventBus.
   */
  removePermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked. When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Please allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.
   */
  removeTargets(params: CloudWatchEvents.Types.RemoveTargetsRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.RemoveTargetsResponse) => void): Request<CloudWatchEvents.Types.RemoveTargetsResponse, AWSError>;
  /**
   * Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked. When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Please allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.
   */
  removeTargets(callback?: (err: AWSError, data: CloudWatchEvents.Types.RemoveTargetsResponse) => void): Request<CloudWatchEvents.Types.RemoveTargetsResponse, AWSError>;
  /**
   * Tests whether the specified event pattern matches the provided event. Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.
   */
  testEventPattern(params: CloudWatchEvents.Types.TestEventPatternRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.TestEventPatternResponse) => void): Request<CloudWatchEvents.Types.TestEventPatternResponse, AWSError>;
  /**
   * Tests whether the specified event pattern matches the provided event. Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.
   */
  testEventPattern(callback?: (err: AWSError, data: CloudWatchEvents.Types.TestEventPatternResponse) => void): Request<CloudWatchEvents.Types.TestEventPatternResponse, AWSError>;
}
declare namespace CloudWatchEvents {
  export type Action = string;
  export type Arn = string;
  export type Boolean = boolean;
  export interface DeleteRuleRequest {
    /**
     * The name of the rule.
     */
    Name: RuleName;
  }
  export interface DescribeEventBusRequest {
  }
  export interface DescribeEventBusResponse {
    /**
     * The name of the event bus. Currently, this is always default.
     */
    Name?: String;
    /**
     * The Amazon Resource Name (ARN) of the account permitted to write events to the current account.
     */
    Arn?: String;
    /**
     * The policy that enables the external account to send events to your account.
     */
    Policy?: String;
  }
  export interface DescribeRuleRequest {
    /**
     * The name of the rule.
     */
    Name: RuleName;
  }
  export interface DescribeRuleResponse {
    /**
     * The name of the rule.
     */
    Name?: RuleName;
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    Arn?: RuleArn;
    /**
     * The event pattern. For more information, see Events and Event Patterns in the Amazon CloudWatch Events User Guide.
     */
    EventPattern?: EventPattern;
    /**
     * The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)".
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * Specifies whether the rule is enabled or disabled.
     */
    State?: RuleState;
    /**
     * The description of the rule.
     */
    Description?: RuleDescription;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with the rule.
     */
    RoleArn?: RoleArn;
  }
  export interface DisableRuleRequest {
    /**
     * The name of the rule.
     */
    Name: RuleName;
  }
  export interface EcsParameters {
    /**
     * The ARN of the task definition to use if the event target is an Amazon ECS cluster. 
     */
    TaskDefinitionArn: Arn;
    /**
     * The number of tasks to create based on the TaskDefinition. The default is one.
     */
    TaskCount?: LimitMin1;
  }
  export interface EnableRuleRequest {
    /**
     * The name of the rule.
     */
    Name: RuleName;
  }
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export type EventId = string;
  export type EventPattern = string;
  export type EventResource = string;
  export type EventResourceList = EventResource[];
  export type EventTime = Date;
  export interface InputTransformer {
    /**
     * Map of JSON paths to be extracted from the event. These are key-value pairs, where each value is a JSON path. You must use JSON dot notation, not bracket notation.
     */
    InputPathsMap?: TransformerPaths;
    /**
     * Input template where you can use the values of the keys from InputPathsMap to customize the data sent to the target.
     */
    InputTemplate: TransformerInput;
  }
  export type InputTransformerPathKey = string;
  export type Integer = number;
  export interface KinesisParameters {
    /**
     * The JSON path to be extracted from the event and used as the partition key. For more information, see Amazon Kinesis Streams Key Concepts in the Amazon Kinesis Streams Developer Guide.
     */
    PartitionKeyPath: TargetPartitionKeyPath;
  }
  export type LimitMax100 = number;
  export type LimitMin1 = number;
  export interface ListRuleNamesByTargetRequest {
    /**
     * The Amazon Resource Name (ARN) of the target resource.
     */
    TargetArn: TargetArn;
    /**
     * The token returned by a previous call to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    Limit?: LimitMax100;
  }
  export interface ListRuleNamesByTargetResponse {
    /**
     * The names of the rules that can invoke the given target.
     */
    RuleNames?: RuleNameList;
    /**
     * Indicates whether there are additional results to retrieve. If there are no more results, the value is null.
     */
    NextToken?: NextToken;
  }
  export interface ListRulesRequest {
    /**
     * The prefix matching the rule name.
     */
    NamePrefix?: RuleName;
    /**
     * The token returned by a previous call to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    Limit?: LimitMax100;
  }
  export interface ListRulesResponse {
    /**
     * The rules that match the specified criteria.
     */
    Rules?: RuleResponseList;
    /**
     * Indicates whether there are additional results to retrieve. If there are no more results, the value is null.
     */
    NextToken?: NextToken;
  }
  export interface ListTargetsByRuleRequest {
    /**
     * The name of the rule.
     */
    Rule: RuleName;
    /**
     * The token returned by a previous call to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    Limit?: LimitMax100;
  }
  export interface ListTargetsByRuleResponse {
    /**
     * The targets assigned to the rule.
     */
    Targets?: TargetList;
    /**
     * Indicates whether there are additional results to retrieve. If there are no more results, the value is null.
     */
    NextToken?: NextToken;
  }
  export type NextToken = string;
  export type Principal = string;
  export interface PutEventsRequest {
    /**
     * The entry that defines an event in your system. You can specify several parameters for the entry such as the source and type of the event, resources associated with the event, and so on.
     */
    Entries: PutEventsRequestEntryList;
  }
  export interface PutEventsRequestEntry {
    /**
     * The timestamp of the event, per RFC3339. If no timestamp is provided, the timestamp of the PutEvents call is used.
     */
    Time?: EventTime;
    /**
     * The source of the event.
     */
    Source?: String;
    /**
     * AWS resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.
     */
    Resources?: EventResourceList;
    /**
     * Free-form string used to decide what fields to expect in the event detail.
     */
    DetailType?: String;
    /**
     * In the JSON sense, an object containing fields, which may also contain nested subobjects. No constraints are imposed on its contents.
     */
    Detail?: String;
  }
  export type PutEventsRequestEntryList = PutEventsRequestEntry[];
  export interface PutEventsResponse {
    /**
     * The number of failed entries.
     */
    FailedEntryCount?: Integer;
    /**
     * The successfully and unsuccessfully ingested events results. If the ingestion was successful, the entry has the event ID in it. Otherwise, you can use the error code and error message to identify the problem with the entry.
     */
    Entries?: PutEventsResultEntryList;
  }
  export interface PutEventsResultEntry {
    /**
     * The ID of the event.
     */
    EventId?: EventId;
    /**
     * The error code that indicates why the event submission failed.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message that explains why the event submission failed.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type PutEventsResultEntryList = PutEventsResultEntry[];
  export interface PutPermissionRequest {
    /**
     * The action that you are enabling the other account to perform. Currently, this must be events:PutEvents.
     */
    Action: Action;
    /**
     * The 12-digit AWS account ID that you are permitting to put events to your default event bus. Specify "*" to permit any account to put events to your default event bus. If you specify "*", avoid creating rules that may match undesirable events. To create more secure rules, make sure that the event pattern for each rule contains an account field with a specific account ID from which to receive events. Rules with an account field do not match any events sent from other accounts.
     */
    Principal: Principal;
    /**
     * An identifier string for the external account that you are granting permissions to. If you later want to revoke the permission for this external account, specify this StatementId when you run RemovePermission.
     */
    StatementId: StatementId;
  }
  export interface PutRuleRequest {
    /**
     * The name of the rule that you are creating or updating.
     */
    Name: RuleName;
    /**
     * The scheduling expression. For example, "cron(0 20 * * ? *)" or "rate(5 minutes)".
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * The event pattern. For more information, see Events and Event Patterns in the Amazon CloudWatch Events User Guide.
     */
    EventPattern?: EventPattern;
    /**
     * Indicates whether the rule is enabled or disabled.
     */
    State?: RuleState;
    /**
     * A description of the rule.
     */
    Description?: RuleDescription;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with the rule.
     */
    RoleArn?: RoleArn;
  }
  export interface PutRuleResponse {
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    RuleArn?: RuleArn;
  }
  export interface PutTargetsRequest {
    /**
     * The name of the rule.
     */
    Rule: RuleName;
    /**
     * The targets to update or add to the rule.
     */
    Targets: TargetList;
  }
  export interface PutTargetsResponse {
    /**
     * The number of failed entries.
     */
    FailedEntryCount?: Integer;
    /**
     * The failed target entries.
     */
    FailedEntries?: PutTargetsResultEntryList;
  }
  export interface PutTargetsResultEntry {
    /**
     * The ID of the target.
     */
    TargetId?: TargetId;
    /**
     * The error code that indicates why the target addition failed. If the value is ConcurrentModificationException, too many requests were made at the same time.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message that explains why the target addition failed.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type PutTargetsResultEntryList = PutTargetsResultEntry[];
  export interface RemovePermissionRequest {
    /**
     * The statement ID corresponding to the account that is no longer allowed to put events to the default event bus.
     */
    StatementId: StatementId;
  }
  export interface RemoveTargetsRequest {
    /**
     * The name of the rule.
     */
    Rule: RuleName;
    /**
     * The IDs of the targets to remove from the rule.
     */
    Ids: TargetIdList;
  }
  export interface RemoveTargetsResponse {
    /**
     * The number of failed entries.
     */
    FailedEntryCount?: Integer;
    /**
     * The failed target entries.
     */
    FailedEntries?: RemoveTargetsResultEntryList;
  }
  export interface RemoveTargetsResultEntry {
    /**
     * The ID of the target.
     */
    TargetId?: TargetId;
    /**
     * The error code that indicates why the target removal failed. If the value is ConcurrentModificationException, too many requests were made at the same time.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message that explains why the target removal failed.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type RemoveTargetsResultEntryList = RemoveTargetsResultEntry[];
  export type RoleArn = string;
  export interface Rule {
    /**
     * The name of the rule.
     */
    Name?: RuleName;
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    Arn?: RuleArn;
    /**
     * The event pattern of the rule. For more information, see Events and Event Patterns in the Amazon CloudWatch Events User Guide.
     */
    EventPattern?: EventPattern;
    /**
     * The state of the rule.
     */
    State?: RuleState;
    /**
     * The description of the rule.
     */
    Description?: RuleDescription;
    /**
     * The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)".
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * The Amazon Resource Name (ARN) of the role that is used for target invocation.
     */
    RoleArn?: RoleArn;
  }
  export type RuleArn = string;
  export type RuleDescription = string;
  export type RuleName = string;
  export type RuleNameList = RuleName[];
  export type RuleResponseList = Rule[];
  export type RuleState = "ENABLED"|"DISABLED"|string;
  export interface RunCommandParameters {
    /**
     * Currently, we support including only one RunCommandTarget block, which specifies either an array of InstanceIds or a tag.
     */
    RunCommandTargets: RunCommandTargets;
  }
  export interface RunCommandTarget {
    /**
     * Can be either tag: tag-key or InstanceIds.
     */
    Key: RunCommandTargetKey;
    /**
     * If Key is tag: tag-key, Values is a list of tag values. If Key is InstanceIds, Values is a list of Amazon EC2 instance IDs.
     */
    Values: RunCommandTargetValues;
  }
  export type RunCommandTargetKey = string;
  export type RunCommandTargetValue = string;
  export type RunCommandTargetValues = RunCommandTargetValue[];
  export type RunCommandTargets = RunCommandTarget[];
  export type ScheduleExpression = string;
  export type StatementId = string;
  export type String = string;
  export interface Target {
    /**
     * The ID of the target.
     */
    Id: TargetId;
    /**
     * The Amazon Resource Name (ARN) of the target.
     */
    Arn: TargetArn;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. If one rule triggers multiple targets, you can use a different IAM role for each target.
     */
    RoleArn?: RoleArn;
    /**
     * Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. You must use JSON dot notation, not bracket notation. For more information, see The JavaScript Object Notation (JSON) Data Interchange Format.
     */
    Input?: TargetInput;
    /**
     * The value of the JSONPath that is used for extracting part of the matched event when passing it to the target. You must use JSON dot notation, not bracket notation. For more information about JSON paths, see JSONPath.
     */
    InputPath?: TargetInputPath;
    /**
     * Settings to enable you to provide custom input to a target based on certain event data. You can extract one or more key-value pairs from the event and then use that data to send customized input to the target.
     */
    InputTransformer?: InputTransformer;
    /**
     * The custom parameter you can use to control shard assignment, when the target is an Amazon Kinesis stream. If you do not include this parameter, the default is to use the eventId as the partition key.
     */
    KinesisParameters?: KinesisParameters;
    /**
     * Parameters used when you are using the rule to invoke Amazon EC2 Run Command.
     */
    RunCommandParameters?: RunCommandParameters;
    /**
     * Contains the Amazon ECS task definition and task count to be used, if the event target is an Amazon ECS task. For more information about Amazon ECS tasks, see Task Definitions  in the Amazon EC2 Container Service Developer Guide.
     */
    EcsParameters?: EcsParameters;
  }
  export type TargetArn = string;
  export type TargetId = string;
  export type TargetIdList = TargetId[];
  export type TargetInput = string;
  export type TargetInputPath = string;
  export type TargetList = Target[];
  export type TargetPartitionKeyPath = string;
  export interface TestEventPatternRequest {
    /**
     * The event pattern. For more information, see Events and Event Patterns in the Amazon CloudWatch Events User Guide.
     */
    EventPattern: EventPattern;
    /**
     * The event, in JSON format, to test against the event pattern.
     */
    Event: String;
  }
  export interface TestEventPatternResponse {
    /**
     * Indicates whether the event matches the event pattern.
     */
    Result?: Boolean;
  }
  export type TransformerInput = string;
  export type TransformerPaths = {[key: string]: TargetInputPath};
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-02-03"|"2015-10-07"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CloudWatchEvents client.
   */
  export import Types = CloudWatchEvents;
}
export = CloudWatchEvents;
