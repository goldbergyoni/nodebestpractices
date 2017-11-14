import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Organizations extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Organizations.Types.ClientConfiguration)
  config: Config & Organizations.Types.ClientConfiguration;
  /**
   * Sends a response to the originator of a handshake agreeing to the action proposed by the handshake request.  This operation can be called only by the following principals when they also have the relevant IAM permissions:    Invitation to join or Approve all features request handshakes: only a principal from the member account.  The user who calls the API for an invitation to join must have the organizations:AcceptHandshake permission. If you enabled all features in the organization, then the user must also have the iam:CreateServiceLinkedRole permission so that Organizations can create the required service-linked role named OrgsServiceLinkedRoleName. For more information, see AWS Organizations and Service-Linked Roles in the AWS Organizations User Guide.    Enable all features final confirmation handshake: only a principal from the master account. For more information about invitations, see Inviting an AWS Account to Join Your Organization in the AWS Organizations User Guide. For more information about requests to enable all features in the organization, see Enabling All Features in Your Organization in the AWS Organizations User Guide.   After you accept a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that it is deleted.
   */
  acceptHandshake(params: Organizations.Types.AcceptHandshakeRequest, callback?: (err: AWSError, data: Organizations.Types.AcceptHandshakeResponse) => void): Request<Organizations.Types.AcceptHandshakeResponse, AWSError>;
  /**
   * Sends a response to the originator of a handshake agreeing to the action proposed by the handshake request.  This operation can be called only by the following principals when they also have the relevant IAM permissions:    Invitation to join or Approve all features request handshakes: only a principal from the member account.  The user who calls the API for an invitation to join must have the organizations:AcceptHandshake permission. If you enabled all features in the organization, then the user must also have the iam:CreateServiceLinkedRole permission so that Organizations can create the required service-linked role named OrgsServiceLinkedRoleName. For more information, see AWS Organizations and Service-Linked Roles in the AWS Organizations User Guide.    Enable all features final confirmation handshake: only a principal from the master account. For more information about invitations, see Inviting an AWS Account to Join Your Organization in the AWS Organizations User Guide. For more information about requests to enable all features in the organization, see Enabling All Features in Your Organization in the AWS Organizations User Guide.   After you accept a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that it is deleted.
   */
  acceptHandshake(callback?: (err: AWSError, data: Organizations.Types.AcceptHandshakeResponse) => void): Request<Organizations.Types.AcceptHandshakeResponse, AWSError>;
  /**
   * Attaches a policy to a root, an organizational unit, or an individual account. How the policy affects accounts depends on the type of policy:    Service control policy (SCP) - An SCP specifies what permissions can be delegated to users in affected member accounts. The scope of influence for a policy depends on what you attach the policy to:   If you attach an SCP to a root, it affects all accounts in the organization.   If you attach an SCP to an OU, it affects all accounts in that OU and in any child OUs.   If you attach the policy directly to an account, then it affects only that account.   SCPs essentially are permission "filters". When you attach one SCP to a higher level root or OU, and you also attach a different SCP to a child OU or to an account, the child policy can further restrict only the permissions that pass through the parent filter and are available to the child. An SCP that is attached to a child cannot grant a permission that is not already granted by the parent. For example, imagine that the parent SCP allows permissions A, B, C, D, and E. The child SCP allows C, D, E, F, and G. The result is that the accounts affected by the child SCP are allowed to use only C, D, and E. They cannot use A or B because they were filtered out by the child OU. They also cannot use F and G because they were filtered out by the parent OU. They cannot be granted back by the child SCP; child SCPs can only filter the permissions they receive from the parent SCP. AWS Organizations attaches a default SCP named "FullAWSAccess to every root, OU, and account. This default SCP allows all services and actions, enabling any new child OU or account to inherit the permissions of the parent root or OU. If you detach the default policy, you must replace it with a policy that specifies the permissions that you want to allow in that OU or account. For more information about how Organizations policies permissions work, see Using Service Control Policies in the AWS Organizations User Guide.   This operation can be called only from the organization's master account.
   */
  attachPolicy(params: Organizations.Types.AttachPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches a policy to a root, an organizational unit, or an individual account. How the policy affects accounts depends on the type of policy:    Service control policy (SCP) - An SCP specifies what permissions can be delegated to users in affected member accounts. The scope of influence for a policy depends on what you attach the policy to:   If you attach an SCP to a root, it affects all accounts in the organization.   If you attach an SCP to an OU, it affects all accounts in that OU and in any child OUs.   If you attach the policy directly to an account, then it affects only that account.   SCPs essentially are permission "filters". When you attach one SCP to a higher level root or OU, and you also attach a different SCP to a child OU or to an account, the child policy can further restrict only the permissions that pass through the parent filter and are available to the child. An SCP that is attached to a child cannot grant a permission that is not already granted by the parent. For example, imagine that the parent SCP allows permissions A, B, C, D, and E. The child SCP allows C, D, E, F, and G. The result is that the accounts affected by the child SCP are allowed to use only C, D, and E. They cannot use A or B because they were filtered out by the child OU. They also cannot use F and G because they were filtered out by the parent OU. They cannot be granted back by the child SCP; child SCPs can only filter the permissions they receive from the parent SCP. AWS Organizations attaches a default SCP named "FullAWSAccess to every root, OU, and account. This default SCP allows all services and actions, enabling any new child OU or account to inherit the permissions of the parent root or OU. If you detach the default policy, you must replace it with a policy that specifies the permissions that you want to allow in that OU or account. For more information about how Organizations policies permissions work, see Using Service Control Policies in the AWS Organizations User Guide.   This operation can be called only from the organization's master account.
   */
  attachPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Cancels a handshake. Canceling a handshake sets the handshake state to CANCELED.  This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use DeclineHandshake instead. After a handshake is canceled, the recipient can no longer respond to that handshake. After you cancel a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that it is deleted.
   */
  cancelHandshake(params: Organizations.Types.CancelHandshakeRequest, callback?: (err: AWSError, data: Organizations.Types.CancelHandshakeResponse) => void): Request<Organizations.Types.CancelHandshakeResponse, AWSError>;
  /**
   * Cancels a handshake. Canceling a handshake sets the handshake state to CANCELED.  This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use DeclineHandshake instead. After a handshake is canceled, the recipient can no longer respond to that handshake. After you cancel a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that it is deleted.
   */
  cancelHandshake(callback?: (err: AWSError, data: Organizations.Types.CancelHandshakeResponse) => void): Request<Organizations.Types.CancelHandshakeResponse, AWSError>;
  /**
   * Creates an AWS account that is automatically a member of the organization whose credentials made the request. This is an asynchronous request that AWS performs in the background. If you want to check the status of the request later, you need the OperationId response element from this operation to provide as a parameter to the DescribeCreateAccountStatus operation. The user who calls the API for an invitation to join must have the organizations:CreateAccount permission. If you enabled all features in the organization, then the user must also have the iam:CreateServiceLinkedRole permission so that Organizations can create the required service-linked role named OrgsServiceLinkedRoleName. For more information, see AWS Organizations and Service-Linked Roles in the AWS Organizations User Guide. The user in the master account who calls this API must also have the iam:CreateRole permission because AWS Organizations preconfigures the new member account with a role (named OrganizationAccountAccessRole by default) that grants users in the master account administrator permissions in the new member account. Principals in the master account can assume the role. AWS Organizations clones the company name and address information for the new account from the organization's master account.  For more information about creating accounts, see Creating an AWS Account in Your Organization in the AWS Organizations User Guide.  When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account, such as a payment method and signing the End User Licence Agreement (EULA) is not automatically collected. If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at  To leave an organization when all required account information has not yet been provided in the AWS Organizations User Guide.   When you create a member account with this operation, you can choose whether to create the account with the IAM User and Role Access to Billing Information switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable this, then only the account root user can access billing information. For information about how to disable this for an account, see Granting Access to Your Billing Information and Tools.  This operation can be called only from the organization's master account.  If you get an exception that indicates that you exceeded your account limits for the organization or that you can"t add an account because your organization is still initializing, please contact  AWS Customer Support. 
   */
  createAccount(params: Organizations.Types.CreateAccountRequest, callback?: (err: AWSError, data: Organizations.Types.CreateAccountResponse) => void): Request<Organizations.Types.CreateAccountResponse, AWSError>;
  /**
   * Creates an AWS account that is automatically a member of the organization whose credentials made the request. This is an asynchronous request that AWS performs in the background. If you want to check the status of the request later, you need the OperationId response element from this operation to provide as a parameter to the DescribeCreateAccountStatus operation. The user who calls the API for an invitation to join must have the organizations:CreateAccount permission. If you enabled all features in the organization, then the user must also have the iam:CreateServiceLinkedRole permission so that Organizations can create the required service-linked role named OrgsServiceLinkedRoleName. For more information, see AWS Organizations and Service-Linked Roles in the AWS Organizations User Guide. The user in the master account who calls this API must also have the iam:CreateRole permission because AWS Organizations preconfigures the new member account with a role (named OrganizationAccountAccessRole by default) that grants users in the master account administrator permissions in the new member account. Principals in the master account can assume the role. AWS Organizations clones the company name and address information for the new account from the organization's master account.  For more information about creating accounts, see Creating an AWS Account in Your Organization in the AWS Organizations User Guide.  When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account, such as a payment method and signing the End User Licence Agreement (EULA) is not automatically collected. If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at  To leave an organization when all required account information has not yet been provided in the AWS Organizations User Guide.   When you create a member account with this operation, you can choose whether to create the account with the IAM User and Role Access to Billing Information switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable this, then only the account root user can access billing information. For information about how to disable this for an account, see Granting Access to Your Billing Information and Tools.  This operation can be called only from the organization's master account.  If you get an exception that indicates that you exceeded your account limits for the organization or that you can"t add an account because your organization is still initializing, please contact  AWS Customer Support. 
   */
  createAccount(callback?: (err: AWSError, data: Organizations.Types.CreateAccountResponse) => void): Request<Organizations.Types.CreateAccountResponse, AWSError>;
  /**
   * Creates an AWS organization. The account whose user is calling the CreateOrganization operation automatically becomes the master account of the new organization. This operation must be called using credentials from the account that is to become the new organization's master account. The principal must also have the relevant IAM permissions. By default (or if you set the FeatureSet parameter to ALL), the new organization is created with all features enabled and service control policies automatically enabled in the root. If you instead choose to create the organization supporting only the consolidated billing features by setting the FeatureSet parameter to CONSOLIDATED_BILLING", then no policy types are enabled by default and you cannot use organization policies.
   */
  createOrganization(params: Organizations.Types.CreateOrganizationRequest, callback?: (err: AWSError, data: Organizations.Types.CreateOrganizationResponse) => void): Request<Organizations.Types.CreateOrganizationResponse, AWSError>;
  /**
   * Creates an AWS organization. The account whose user is calling the CreateOrganization operation automatically becomes the master account of the new organization. This operation must be called using credentials from the account that is to become the new organization's master account. The principal must also have the relevant IAM permissions. By default (or if you set the FeatureSet parameter to ALL), the new organization is created with all features enabled and service control policies automatically enabled in the root. If you instead choose to create the organization supporting only the consolidated billing features by setting the FeatureSet parameter to CONSOLIDATED_BILLING", then no policy types are enabled by default and you cannot use organization policies.
   */
  createOrganization(callback?: (err: AWSError, data: Organizations.Types.CreateOrganizationResponse) => void): Request<Organizations.Types.CreateOrganizationResponse, AWSError>;
  /**
   * Creates an organizational unit (OU) within a root or parent OU. An OU is a container for accounts that enables you to organize your accounts to apply policies according to your business requirements. The number of levels deep that you can nest OUs is dependent upon the policy types enabled for that root. For service control policies, the limit is five.  For more information about OUs, see Managing Organizational Units in the AWS Organizations User Guide. This operation can be called only from the organization's master account.
   */
  createOrganizationalUnit(params: Organizations.Types.CreateOrganizationalUnitRequest, callback?: (err: AWSError, data: Organizations.Types.CreateOrganizationalUnitResponse) => void): Request<Organizations.Types.CreateOrganizationalUnitResponse, AWSError>;
  /**
   * Creates an organizational unit (OU) within a root or parent OU. An OU is a container for accounts that enables you to organize your accounts to apply policies according to your business requirements. The number of levels deep that you can nest OUs is dependent upon the policy types enabled for that root. For service control policies, the limit is five.  For more information about OUs, see Managing Organizational Units in the AWS Organizations User Guide. This operation can be called only from the organization's master account.
   */
  createOrganizationalUnit(callback?: (err: AWSError, data: Organizations.Types.CreateOrganizationalUnitResponse) => void): Request<Organizations.Types.CreateOrganizationalUnitResponse, AWSError>;
  /**
   * Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual AWS account. For more information about policies and their use, see Managing Organization Policies. This operation can be called only from the organization's master account.
   */
  createPolicy(params: Organizations.Types.CreatePolicyRequest, callback?: (err: AWSError, data: Organizations.Types.CreatePolicyResponse) => void): Request<Organizations.Types.CreatePolicyResponse, AWSError>;
  /**
   * Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual AWS account. For more information about policies and their use, see Managing Organization Policies. This operation can be called only from the organization's master account.
   */
  createPolicy(callback?: (err: AWSError, data: Organizations.Types.CreatePolicyResponse) => void): Request<Organizations.Types.CreatePolicyResponse, AWSError>;
  /**
   * Declines a handshake request. This sets the handshake state to DECLINED and effectively deactivates the request. This operation can be called only from the account that received the handshake. The originator of the handshake can use CancelHandshake instead. The originator can't reactivate a declined request, but can re-initiate the process with a new handshake request. After you decline a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that it is deleted.
   */
  declineHandshake(params: Organizations.Types.DeclineHandshakeRequest, callback?: (err: AWSError, data: Organizations.Types.DeclineHandshakeResponse) => void): Request<Organizations.Types.DeclineHandshakeResponse, AWSError>;
  /**
   * Declines a handshake request. This sets the handshake state to DECLINED and effectively deactivates the request. This operation can be called only from the account that received the handshake. The originator of the handshake can use CancelHandshake instead. The originator can't reactivate a declined request, but can re-initiate the process with a new handshake request. After you decline a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that it is deleted.
   */
  declineHandshake(callback?: (err: AWSError, data: Organizations.Types.DeclineHandshakeResponse) => void): Request<Organizations.Types.DeclineHandshakeResponse, AWSError>;
  /**
   * Deletes the organization. You can delete an organization only by using credentials from the master account. The organization must be empty of member accounts, OUs, and policies.
   */
  deleteOrganization(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an organizational unit from a root or another OU. You must first remove all accounts and child OUs from the OU that you want to delete. This operation can be called only from the organization's master account.
   */
  deleteOrganizationalUnit(params: Organizations.Types.DeleteOrganizationalUnitRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an organizational unit from a root or another OU. You must first remove all accounts and child OUs from the OU that you want to delete. This operation can be called only from the organization's master account.
   */
  deleteOrganizationalUnit(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified policy from your organization. Before you perform this operation, you must first detach the policy from all OUs, roots, and accounts. This operation can be called only from the organization's master account.
   */
  deletePolicy(params: Organizations.Types.DeletePolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified policy from your organization. Before you perform this operation, you must first detach the policy from all OUs, roots, and accounts. This operation can be called only from the organization's master account.
   */
  deletePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves Organizations-related information about the specified account. This operation can be called only from the organization's master account.
   */
  describeAccount(params: Organizations.Types.DescribeAccountRequest, callback?: (err: AWSError, data: Organizations.Types.DescribeAccountResponse) => void): Request<Organizations.Types.DescribeAccountResponse, AWSError>;
  /**
   * Retrieves Organizations-related information about the specified account. This operation can be called only from the organization's master account.
   */
  describeAccount(callback?: (err: AWSError, data: Organizations.Types.DescribeAccountResponse) => void): Request<Organizations.Types.DescribeAccountResponse, AWSError>;
  /**
   * Retrieves the current status of an asynchronous request to create an account. This operation can be called only from the organization's master account.
   */
  describeCreateAccountStatus(params: Organizations.Types.DescribeCreateAccountStatusRequest, callback?: (err: AWSError, data: Organizations.Types.DescribeCreateAccountStatusResponse) => void): Request<Organizations.Types.DescribeCreateAccountStatusResponse, AWSError>;
  /**
   * Retrieves the current status of an asynchronous request to create an account. This operation can be called only from the organization's master account.
   */
  describeCreateAccountStatus(callback?: (err: AWSError, data: Organizations.Types.DescribeCreateAccountStatusResponse) => void): Request<Organizations.Types.DescribeCreateAccountStatusResponse, AWSError>;
  /**
   * Retrieves information about a previously requested handshake. The handshake ID comes from the response to the original InviteAccountToOrganization operation that generated the handshake. You can access handshakes that are ACCEPTED, DECLINED, or CANCELED for only 30 days after they change to that state. They are then deleted and no longer accessible. This operation can be called from any account in the organization.
   */
  describeHandshake(params: Organizations.Types.DescribeHandshakeRequest, callback?: (err: AWSError, data: Organizations.Types.DescribeHandshakeResponse) => void): Request<Organizations.Types.DescribeHandshakeResponse, AWSError>;
  /**
   * Retrieves information about a previously requested handshake. The handshake ID comes from the response to the original InviteAccountToOrganization operation that generated the handshake. You can access handshakes that are ACCEPTED, DECLINED, or CANCELED for only 30 days after they change to that state. They are then deleted and no longer accessible. This operation can be called from any account in the organization.
   */
  describeHandshake(callback?: (err: AWSError, data: Organizations.Types.DescribeHandshakeResponse) => void): Request<Organizations.Types.DescribeHandshakeResponse, AWSError>;
  /**
   * Retrieves information about the organization that the user's account belongs to. This operation can be called from any account in the organization.
   */
  describeOrganization(callback?: (err: AWSError, data: Organizations.Types.DescribeOrganizationResponse) => void): Request<Organizations.Types.DescribeOrganizationResponse, AWSError>;
  /**
   * Retrieves information about an organizational unit (OU). This operation can be called only from the organization's master account.
   */
  describeOrganizationalUnit(params: Organizations.Types.DescribeOrganizationalUnitRequest, callback?: (err: AWSError, data: Organizations.Types.DescribeOrganizationalUnitResponse) => void): Request<Organizations.Types.DescribeOrganizationalUnitResponse, AWSError>;
  /**
   * Retrieves information about an organizational unit (OU). This operation can be called only from the organization's master account.
   */
  describeOrganizationalUnit(callback?: (err: AWSError, data: Organizations.Types.DescribeOrganizationalUnitResponse) => void): Request<Organizations.Types.DescribeOrganizationalUnitResponse, AWSError>;
  /**
   * Retrieves information about a policy. This operation can be called only from the organization's master account.
   */
  describePolicy(params: Organizations.Types.DescribePolicyRequest, callback?: (err: AWSError, data: Organizations.Types.DescribePolicyResponse) => void): Request<Organizations.Types.DescribePolicyResponse, AWSError>;
  /**
   * Retrieves information about a policy. This operation can be called only from the organization's master account.
   */
  describePolicy(callback?: (err: AWSError, data: Organizations.Types.DescribePolicyResponse) => void): Request<Organizations.Types.DescribePolicyResponse, AWSError>;
  /**
   * Detaches a policy from a target root, organizational unit, or account. If the policy being detached is a service control policy (SCP), the changes to permissions for IAM users and roles in affected accounts are immediate.  Note: Every root, OU, and account must have at least one SCP attached. If you want to replace the default FullAWSAccess policy with one that limits the permissions that can be delegated, then you must attach the replacement policy before you can remove the default one. This is the authorization strategy of whitelisting. If you instead attach a second SCP and leave the FullAWSAccess SCP still attached, and specify "Effect": "Deny" in the second SCP to override the "Effect": "Allow" in the FullAWSAccess policy (or any other attached SCP), then you are using the authorization strategy of blacklisting.  This operation can be called only from the organization's master account.
   */
  detachPolicy(params: Organizations.Types.DetachPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Detaches a policy from a target root, organizational unit, or account. If the policy being detached is a service control policy (SCP), the changes to permissions for IAM users and roles in affected accounts are immediate.  Note: Every root, OU, and account must have at least one SCP attached. If you want to replace the default FullAWSAccess policy with one that limits the permissions that can be delegated, then you must attach the replacement policy before you can remove the default one. This is the authorization strategy of whitelisting. If you instead attach a second SCP and leave the FullAWSAccess SCP still attached, and specify "Effect": "Deny" in the second SCP to override the "Effect": "Allow" in the FullAWSAccess policy (or any other attached SCP), then you are using the authorization strategy of blacklisting.  This operation can be called only from the organization's master account.
   */
  detachPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables an organizational control policy type in a root. A policy of a certain type can be attached to entities in a root only if that type is enabled in the root. After you perform this operation, you no longer can attach policies of the specified type to that root or to any OU or account in that root. You can undo this by using the EnablePolicyType operation. This operation can be called only from the organization's master account.
   */
  disablePolicyType(params: Organizations.Types.DisablePolicyTypeRequest, callback?: (err: AWSError, data: Organizations.Types.DisablePolicyTypeResponse) => void): Request<Organizations.Types.DisablePolicyTypeResponse, AWSError>;
  /**
   * Disables an organizational control policy type in a root. A policy of a certain type can be attached to entities in a root only if that type is enabled in the root. After you perform this operation, you no longer can attach policies of the specified type to that root or to any OU or account in that root. You can undo this by using the EnablePolicyType operation. This operation can be called only from the organization's master account.
   */
  disablePolicyType(callback?: (err: AWSError, data: Organizations.Types.DisablePolicyTypeResponse) => void): Request<Organizations.Types.DisablePolicyTypeResponse, AWSError>;
  /**
   * Enables all features in an organization. This enables the use of organization policies that can restrict the services and actions that can be called in each account. Until you enable all features, you have access only to consolidated billing, and you can't use any of the advanced account administration features that AWS Organizations supports. For more information, see Enabling All Features in Your Organization in the AWS Organizations User Guide.  This operation is required only for organizations that were created explicitly with only the consolidated billing features enabled, or that were migrated from a Consolidated Billing account family to Organizations. Calling this operation sends a handshake to every invited account in the organization. The feature set change can be finalized and the additional features enabled only after all administrators in the invited accounts approve the change by accepting the handshake.  After all invited member accounts accept the handshake, you finalize the feature set change by accepting the handshake that contains "Action": "ENABLE_ALL_FEATURES". This completes the change. After you enable all features in your organization, the master account in the organization can apply policies on all member accounts. These policies can restrict what users and even administrators in those accounts can do. The master account can apply policies that prevent accounts from leaving the organization. Ensure that your account administrators are aware of this. This operation can be called only from the organization's master account. 
   */
  enableAllFeatures(params: Organizations.Types.EnableAllFeaturesRequest, callback?: (err: AWSError, data: Organizations.Types.EnableAllFeaturesResponse) => void): Request<Organizations.Types.EnableAllFeaturesResponse, AWSError>;
  /**
   * Enables all features in an organization. This enables the use of organization policies that can restrict the services and actions that can be called in each account. Until you enable all features, you have access only to consolidated billing, and you can't use any of the advanced account administration features that AWS Organizations supports. For more information, see Enabling All Features in Your Organization in the AWS Organizations User Guide.  This operation is required only for organizations that were created explicitly with only the consolidated billing features enabled, or that were migrated from a Consolidated Billing account family to Organizations. Calling this operation sends a handshake to every invited account in the organization. The feature set change can be finalized and the additional features enabled only after all administrators in the invited accounts approve the change by accepting the handshake.  After all invited member accounts accept the handshake, you finalize the feature set change by accepting the handshake that contains "Action": "ENABLE_ALL_FEATURES". This completes the change. After you enable all features in your organization, the master account in the organization can apply policies on all member accounts. These policies can restrict what users and even administrators in those accounts can do. The master account can apply policies that prevent accounts from leaving the organization. Ensure that your account administrators are aware of this. This operation can be called only from the organization's master account. 
   */
  enableAllFeatures(callback?: (err: AWSError, data: Organizations.Types.EnableAllFeaturesResponse) => void): Request<Organizations.Types.EnableAllFeaturesResponse, AWSError>;
  /**
   * Enables a policy type in a root. After you enable a policy type in a root, you can attach policies of that type to the root, any OU, or account in that root. You can undo this by using the DisablePolicyType operation. This operation can be called only from the organization's master account.
   */
  enablePolicyType(params: Organizations.Types.EnablePolicyTypeRequest, callback?: (err: AWSError, data: Organizations.Types.EnablePolicyTypeResponse) => void): Request<Organizations.Types.EnablePolicyTypeResponse, AWSError>;
  /**
   * Enables a policy type in a root. After you enable a policy type in a root, you can attach policies of that type to the root, any OU, or account in that root. You can undo this by using the DisablePolicyType operation. This operation can be called only from the organization's master account.
   */
  enablePolicyType(callback?: (err: AWSError, data: Organizations.Types.EnablePolicyTypeResponse) => void): Request<Organizations.Types.EnablePolicyTypeResponse, AWSError>;
  /**
   * Sends an invitation to another account to join your organization as a member account. Organizations sends email on your behalf to the email address that is associated with the other account's owner. The invitation is implemented as a Handshake whose details are in the response.  You can invite AWS accounts only from the same seller as the master account. For example, if your organization's master account was created by Amazon Internet Services Pvt. Ltd (AISPL), an AWS seller in India, then you can only invite other AISPL accounts to your organization. You can't combine accounts from AISPL and AWS, or any other AWS seller. For more information, see Consolidated Billing in India.  This operation can be called only from the organization's master account.  If you get an exception that indicates that you exceeded your account limits for the organization or that you can"t add an account because your organization is still initializing, please contact  AWS Customer Support. 
   */
  inviteAccountToOrganization(params: Organizations.Types.InviteAccountToOrganizationRequest, callback?: (err: AWSError, data: Organizations.Types.InviteAccountToOrganizationResponse) => void): Request<Organizations.Types.InviteAccountToOrganizationResponse, AWSError>;
  /**
   * Sends an invitation to another account to join your organization as a member account. Organizations sends email on your behalf to the email address that is associated with the other account's owner. The invitation is implemented as a Handshake whose details are in the response.  You can invite AWS accounts only from the same seller as the master account. For example, if your organization's master account was created by Amazon Internet Services Pvt. Ltd (AISPL), an AWS seller in India, then you can only invite other AISPL accounts to your organization. You can't combine accounts from AISPL and AWS, or any other AWS seller. For more information, see Consolidated Billing in India.  This operation can be called only from the organization's master account.  If you get an exception that indicates that you exceeded your account limits for the organization or that you can"t add an account because your organization is still initializing, please contact  AWS Customer Support. 
   */
  inviteAccountToOrganization(callback?: (err: AWSError, data: Organizations.Types.InviteAccountToOrganizationResponse) => void): Request<Organizations.Types.InviteAccountToOrganizationResponse, AWSError>;
  /**
   * Removes a member account from its parent organization. This version of the operation is performed by the account that wants to leave. To remove a member account as a user in the master account, use RemoveAccountFromOrganization instead. This operation can be called only from a member account in the organization.    The master account in an organization with all features enabled can set service control policies (SCPs) that can restrict what administrators of member accounts can do, including preventing them from successfully calling LeaveOrganization and leaving the organization.    You can leave an organization as a member account only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required of standalone accounts is not automatically collected. For each account that you want to make standalone, you must accept the End User License Agreement (EULA), choose a support plan, provide and verify the required contact information, and provide a current payment method. AWS uses the payment method to charge for any billable (not free tier) AWS activity that occurs while the account is not attached to an organization. Follow the steps at  To leave an organization when all required account information has not yet been provided in the AWS Organizations User Guide.   You can leave an organization only after you enable IAM user access to billing in your account. For more information, see Activating Access to the Billing and Cost Management Console in the AWS Billing and Cost Management User Guide.   
   */
  leaveOrganization(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Lists all the accounts in the organization. To request only the accounts in a root or OU, use the ListAccountsForParent operation instead. This operation can be called only from the organization's master account.
   */
  listAccounts(params: Organizations.Types.ListAccountsRequest, callback?: (err: AWSError, data: Organizations.Types.ListAccountsResponse) => void): Request<Organizations.Types.ListAccountsResponse, AWSError>;
  /**
   * Lists all the accounts in the organization. To request only the accounts in a root or OU, use the ListAccountsForParent operation instead. This operation can be called only from the organization's master account.
   */
  listAccounts(callback?: (err: AWSError, data: Organizations.Types.ListAccountsResponse) => void): Request<Organizations.Types.ListAccountsResponse, AWSError>;
  /**
   * Lists the accounts in an organization that are contained by the specified target root or organizational unit (OU). If you specify the root, you get a list of all the accounts that are not in any OU. If you specify an OU, you get a list of all the accounts in only that OU, and not in any child OUs. To get a list of all accounts in the organization, use the ListAccounts operation.
   */
  listAccountsForParent(params: Organizations.Types.ListAccountsForParentRequest, callback?: (err: AWSError, data: Organizations.Types.ListAccountsForParentResponse) => void): Request<Organizations.Types.ListAccountsForParentResponse, AWSError>;
  /**
   * Lists the accounts in an organization that are contained by the specified target root or organizational unit (OU). If you specify the root, you get a list of all the accounts that are not in any OU. If you specify an OU, you get a list of all the accounts in only that OU, and not in any child OUs. To get a list of all accounts in the organization, use the ListAccounts operation.
   */
  listAccountsForParent(callback?: (err: AWSError, data: Organizations.Types.ListAccountsForParentResponse) => void): Request<Organizations.Types.ListAccountsForParentResponse, AWSError>;
  /**
   * Lists all of the OUs or accounts that are contained in the specified parent OU or root. This operation, along with ListParents enables you to traverse the tree structure that makes up this root.
   */
  listChildren(params: Organizations.Types.ListChildrenRequest, callback?: (err: AWSError, data: Organizations.Types.ListChildrenResponse) => void): Request<Organizations.Types.ListChildrenResponse, AWSError>;
  /**
   * Lists all of the OUs or accounts that are contained in the specified parent OU or root. This operation, along with ListParents enables you to traverse the tree structure that makes up this root.
   */
  listChildren(callback?: (err: AWSError, data: Organizations.Types.ListChildrenResponse) => void): Request<Organizations.Types.ListChildrenResponse, AWSError>;
  /**
   * Lists the account creation requests that match the specified status that is currently being tracked for the organization. This operation can be called only from the organization's master account.
   */
  listCreateAccountStatus(params: Organizations.Types.ListCreateAccountStatusRequest, callback?: (err: AWSError, data: Organizations.Types.ListCreateAccountStatusResponse) => void): Request<Organizations.Types.ListCreateAccountStatusResponse, AWSError>;
  /**
   * Lists the account creation requests that match the specified status that is currently being tracked for the organization. This operation can be called only from the organization's master account.
   */
  listCreateAccountStatus(callback?: (err: AWSError, data: Organizations.Types.ListCreateAccountStatusResponse) => void): Request<Organizations.Types.ListCreateAccountStatusResponse, AWSError>;
  /**
   * Lists the current handshakes that are associated with the account of the requesting user. Handshakes that are ACCEPTED, DECLINED, or CANCELED appear in the results of this API for only 30 days after changing to that state. After that they are deleted and no longer accessible. This operation can be called from any account in the organization.
   */
  listHandshakesForAccount(params: Organizations.Types.ListHandshakesForAccountRequest, callback?: (err: AWSError, data: Organizations.Types.ListHandshakesForAccountResponse) => void): Request<Organizations.Types.ListHandshakesForAccountResponse, AWSError>;
  /**
   * Lists the current handshakes that are associated with the account of the requesting user. Handshakes that are ACCEPTED, DECLINED, or CANCELED appear in the results of this API for only 30 days after changing to that state. After that they are deleted and no longer accessible. This operation can be called from any account in the organization.
   */
  listHandshakesForAccount(callback?: (err: AWSError, data: Organizations.Types.ListHandshakesForAccountResponse) => void): Request<Organizations.Types.ListHandshakesForAccountResponse, AWSError>;
  /**
   * Lists the handshakes that are associated with the organization that the requesting user is part of. The ListHandshakesForOrganization operation returns a list of handshake structures. Each structure contains details and status about a handshake. Handshakes that are ACCEPTED, DECLINED, or CANCELED appear in the results of this API for only 30 days after changing to that state. After that they are deleted and no longer accessible. This operation can be called only from the organization's master account.
   */
  listHandshakesForOrganization(params: Organizations.Types.ListHandshakesForOrganizationRequest, callback?: (err: AWSError, data: Organizations.Types.ListHandshakesForOrganizationResponse) => void): Request<Organizations.Types.ListHandshakesForOrganizationResponse, AWSError>;
  /**
   * Lists the handshakes that are associated with the organization that the requesting user is part of. The ListHandshakesForOrganization operation returns a list of handshake structures. Each structure contains details and status about a handshake. Handshakes that are ACCEPTED, DECLINED, or CANCELED appear in the results of this API for only 30 days after changing to that state. After that they are deleted and no longer accessible. This operation can be called only from the organization's master account.
   */
  listHandshakesForOrganization(callback?: (err: AWSError, data: Organizations.Types.ListHandshakesForOrganizationResponse) => void): Request<Organizations.Types.ListHandshakesForOrganizationResponse, AWSError>;
  /**
   * Lists the organizational units (OUs) in a parent organizational unit or root. This operation can be called only from the organization's master account.
   */
  listOrganizationalUnitsForParent(params: Organizations.Types.ListOrganizationalUnitsForParentRequest, callback?: (err: AWSError, data: Organizations.Types.ListOrganizationalUnitsForParentResponse) => void): Request<Organizations.Types.ListOrganizationalUnitsForParentResponse, AWSError>;
  /**
   * Lists the organizational units (OUs) in a parent organizational unit or root. This operation can be called only from the organization's master account.
   */
  listOrganizationalUnitsForParent(callback?: (err: AWSError, data: Organizations.Types.ListOrganizationalUnitsForParentResponse) => void): Request<Organizations.Types.ListOrganizationalUnitsForParentResponse, AWSError>;
  /**
   * Lists the root or organizational units (OUs) that serve as the immediate parent of the specified child OU or account. This operation, along with ListChildren enables you to traverse the tree structure that makes up this root. This operation can be called only from the organization's master account.  In the current release, a child can have only a single parent.  
   */
  listParents(params: Organizations.Types.ListParentsRequest, callback?: (err: AWSError, data: Organizations.Types.ListParentsResponse) => void): Request<Organizations.Types.ListParentsResponse, AWSError>;
  /**
   * Lists the root or organizational units (OUs) that serve as the immediate parent of the specified child OU or account. This operation, along with ListChildren enables you to traverse the tree structure that makes up this root. This operation can be called only from the organization's master account.  In the current release, a child can have only a single parent.  
   */
  listParents(callback?: (err: AWSError, data: Organizations.Types.ListParentsResponse) => void): Request<Organizations.Types.ListParentsResponse, AWSError>;
  /**
   * Retrieves the list of all policies in an organization of a specified type. This operation can be called only from the organization's master account.
   */
  listPolicies(params: Organizations.Types.ListPoliciesRequest, callback?: (err: AWSError, data: Organizations.Types.ListPoliciesResponse) => void): Request<Organizations.Types.ListPoliciesResponse, AWSError>;
  /**
   * Retrieves the list of all policies in an organization of a specified type. This operation can be called only from the organization's master account.
   */
  listPolicies(callback?: (err: AWSError, data: Organizations.Types.ListPoliciesResponse) => void): Request<Organizations.Types.ListPoliciesResponse, AWSError>;
  /**
   * Lists the policies that are directly attached to the specified target root, organizational unit (OU), or account. You must specify the policy type that you want included in the returned list. This operation can be called only from the organization's master account.
   */
  listPoliciesForTarget(params: Organizations.Types.ListPoliciesForTargetRequest, callback?: (err: AWSError, data: Organizations.Types.ListPoliciesForTargetResponse) => void): Request<Organizations.Types.ListPoliciesForTargetResponse, AWSError>;
  /**
   * Lists the policies that are directly attached to the specified target root, organizational unit (OU), or account. You must specify the policy type that you want included in the returned list. This operation can be called only from the organization's master account.
   */
  listPoliciesForTarget(callback?: (err: AWSError, data: Organizations.Types.ListPoliciesForTargetResponse) => void): Request<Organizations.Types.ListPoliciesForTargetResponse, AWSError>;
  /**
   * Lists the roots that are defined in the current organization. This operation can be called only from the organization's master account.
   */
  listRoots(params: Organizations.Types.ListRootsRequest, callback?: (err: AWSError, data: Organizations.Types.ListRootsResponse) => void): Request<Organizations.Types.ListRootsResponse, AWSError>;
  /**
   * Lists the roots that are defined in the current organization. This operation can be called only from the organization's master account.
   */
  listRoots(callback?: (err: AWSError, data: Organizations.Types.ListRootsResponse) => void): Request<Organizations.Types.ListRootsResponse, AWSError>;
  /**
   * Lists all the roots, OUs, and accounts to which the specified policy is attached. This operation can be called only from the organization's master account.
   */
  listTargetsForPolicy(params: Organizations.Types.ListTargetsForPolicyRequest, callback?: (err: AWSError, data: Organizations.Types.ListTargetsForPolicyResponse) => void): Request<Organizations.Types.ListTargetsForPolicyResponse, AWSError>;
  /**
   * Lists all the roots, OUs, and accounts to which the specified policy is attached. This operation can be called only from the organization's master account.
   */
  listTargetsForPolicy(callback?: (err: AWSError, data: Organizations.Types.ListTargetsForPolicyResponse) => void): Request<Organizations.Types.ListTargetsForPolicyResponse, AWSError>;
  /**
   * Moves an account from its current source parent root or OU to the specified destination parent root or OU. This operation can be called only from the organization's master account.
   */
  moveAccount(params: Organizations.Types.MoveAccountRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Moves an account from its current source parent root or OU to the specified destination parent root or OU. This operation can be called only from the organization's master account.
   */
  moveAccount(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified account from the organization. The removed account becomes a stand-alone account that is not a member of any organization. It is no longer subject to any policies and is responsible for its own bill payments. The organization's master account is no longer charged for any expenses accrued by the member account after it is removed from the organization. This operation can be called only from the organization's master account. Member accounts can remove themselves with LeaveOrganization instead.    You can remove an account from your organization only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required of standalone accounts is not automatically collected. For an account that you want to make standalone, you must accept the End User License Agreement (EULA), choose a support plan, provide and verify the required contact information, and provide a current payment method. AWS uses the payment method to charge for any billable (not free tier) AWS activity that occurs while the account is not attached to an organization. To remove an account that does not yet have this information, you must sign in as the member account and follow the steps at  To leave an organization when all required account information has not yet been provided in the AWS Organizations User Guide.   You can remove a member account only after you enable IAM user access to billing in the member account. For more information, see Activating Access to the Billing and Cost Management Console in the AWS Billing and Cost Management User Guide.   
   */
  removeAccountFromOrganization(params: Organizations.Types.RemoveAccountFromOrganizationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified account from the organization. The removed account becomes a stand-alone account that is not a member of any organization. It is no longer subject to any policies and is responsible for its own bill payments. The organization's master account is no longer charged for any expenses accrued by the member account after it is removed from the organization. This operation can be called only from the organization's master account. Member accounts can remove themselves with LeaveOrganization instead.    You can remove an account from your organization only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required of standalone accounts is not automatically collected. For an account that you want to make standalone, you must accept the End User License Agreement (EULA), choose a support plan, provide and verify the required contact information, and provide a current payment method. AWS uses the payment method to charge for any billable (not free tier) AWS activity that occurs while the account is not attached to an organization. To remove an account that does not yet have this information, you must sign in as the member account and follow the steps at  To leave an organization when all required account information has not yet been provided in the AWS Organizations User Guide.   You can remove a member account only after you enable IAM user access to billing in the member account. For more information, see Activating Access to the Billing and Cost Management Console in the AWS Billing and Cost Management User Guide.   
   */
  removeAccountFromOrganization(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Renames the specified organizational unit (OU). The ID and ARN do not change. The child OUs and accounts remain in place, and any attached policies of the OU remain attached.  This operation can be called only from the organization's master account.
   */
  updateOrganizationalUnit(params: Organizations.Types.UpdateOrganizationalUnitRequest, callback?: (err: AWSError, data: Organizations.Types.UpdateOrganizationalUnitResponse) => void): Request<Organizations.Types.UpdateOrganizationalUnitResponse, AWSError>;
  /**
   * Renames the specified organizational unit (OU). The ID and ARN do not change. The child OUs and accounts remain in place, and any attached policies of the OU remain attached.  This operation can be called only from the organization's master account.
   */
  updateOrganizationalUnit(callback?: (err: AWSError, data: Organizations.Types.UpdateOrganizationalUnitResponse) => void): Request<Organizations.Types.UpdateOrganizationalUnitResponse, AWSError>;
  /**
   * Updates an existing policy with a new name, description, or content. If any parameter is not supplied, that value remains unchanged. Note that you cannot change a policy's type. This operation can be called only from the organization's master account.
   */
  updatePolicy(params: Organizations.Types.UpdatePolicyRequest, callback?: (err: AWSError, data: Organizations.Types.UpdatePolicyResponse) => void): Request<Organizations.Types.UpdatePolicyResponse, AWSError>;
  /**
   * Updates an existing policy with a new name, description, or content. If any parameter is not supplied, that value remains unchanged. Note that you cannot change a policy's type. This operation can be called only from the organization's master account.
   */
  updatePolicy(callback?: (err: AWSError, data: Organizations.Types.UpdatePolicyResponse) => void): Request<Organizations.Types.UpdatePolicyResponse, AWSError>;
}
declare namespace Organizations {
  export interface AcceptHandshakeRequest {
    /**
     * The unique identifier (ID) of the handshake that you want to accept. The regex pattern for handshake ID string requires "h-" followed by from 8 to 32 lower-case letters or digits.
     */
    HandshakeId: HandshakeId;
  }
  export interface AcceptHandshakeResponse {
    /**
     * A structure that contains details about the accepted handshake.
     */
    Handshake?: Handshake;
  }
  export type AccessDeniedForDependencyExceptionReason = "ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE"|string;
  export interface Account {
    /**
     * The unique identifier (ID) of the account. The regex pattern for an account ID string requires exactly 12 digits.
     */
    Id?: AccountId;
    /**
     * The Amazon Resource Name (ARN) of the account. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the AWS Organizations User Guide.
     */
    Arn?: AccountArn;
    /**
     * The email address associated with the AWS account. The regex pattern for this parameter is a string of characters that represents a standard Internet email address.
     */
    Email?: Email;
    /**
     * The friendly name of the account. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range.
     */
    Name?: AccountName;
    /**
     * The status of the account in the organization.
     */
    Status?: AccountStatus;
    /**
     * The method by which the account joined the organization.
     */
    JoinedMethod?: AccountJoinedMethod;
    /**
     * The date the account became a part of the organization.
     */
    JoinedTimestamp?: Timestamp;
  }
  export type AccountArn = string;
  export type AccountId = string;
  export type AccountJoinedMethod = "INVITED"|"CREATED"|string;
  export type AccountName = string;
  export type AccountStatus = "ACTIVE"|"SUSPENDED"|string;
  export type Accounts = Account[];
  export type ActionType = "INVITE"|"ENABLE_ALL_FEATURES"|"APPROVE_ALL_FEATURES"|"ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE"|string;
  export interface AttachPolicyRequest {
    /**
     * The unique identifier (ID) of the policy that you want to attach to the target. You can get the ID for the policy by calling the ListPolicies operation. The regex pattern for a policy ID string requires "p-" followed by from 8 to 128 lower-case letters or digits.
     */
    PolicyId: PolicyId;
    /**
     * The unique identifier (ID) of the root, OU, or account that you want to attach the policy to. You can get the ID by calling the ListRoots, ListOrganizationalUnitsForParent, or ListAccounts operations. The regex pattern for a target ID string requires one of the following:   Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.   Account: a string that consists of exactly 12 digits.   Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.  
     */
    TargetId: PolicyTargetId;
  }
  export type AwsManagedPolicy = boolean;
  export interface CancelHandshakeRequest {
    /**
     * The unique identifier (ID) of the handshake that you want to cancel. You can get the ID from the ListHandshakesForOrganization operation. The regex pattern for handshake ID string requires "h-" followed by from 8 to 32 lower-case letters or digits.
     */
    HandshakeId: HandshakeId;
  }
  export interface CancelHandshakeResponse {
    /**
     * A structure that contains details about the handshake that you canceled.
     */
    Handshake?: Handshake;
  }
  export interface Child {
    /**
     * The unique identifier (ID) of this child entity. The regex pattern for a child ID string requires one of the following:   Account: a string that consists of exactly 12 digits.   Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.  
     */
    Id?: ChildId;
    /**
     * The type of this child entity.
     */
    Type?: ChildType;
  }
  export type ChildId = string;
  export type ChildType = "ACCOUNT"|"ORGANIZATIONAL_UNIT"|string;
  export type Children = Child[];
  export type ConstraintViolationExceptionReason = "ACCOUNT_NUMBER_LIMIT_EXCEEDED"|"HANDSHAKE_RATE_LIMIT_EXCEEDED"|"OU_NUMBER_LIMIT_EXCEEDED"|"OU_DEPTH_LIMIT_EXCEEDED"|"POLICY_NUMBER_LIMIT_EXCEEDED"|"MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED"|"MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED"|"ACCOUNT_CANNOT_LEAVE_ORGANIZATION"|"ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA"|"ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION"|"MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED"|"MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED"|"ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED"|"MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE"|"MASTER_ACCOUNT_MISSING_CONTACT_INFO"|string;
  export type CreateAccountFailureReason = "ACCOUNT_LIMIT_EXCEEDED"|"EMAIL_ALREADY_EXISTS"|"INVALID_ADDRESS"|"INVALID_EMAIL"|"CONCURRENT_ACCOUNT_MODIFICATION"|"INTERNAL_FAILURE"|string;
  export interface CreateAccountRequest {
    /**
     * The email address of the owner to assign to the new member account. This email address must not already be associated with another AWS account. You must use a valid email address to complete account creation. You cannot access the root user of the account or remove an account that was created with an invalid email address.
     */
    Email: Email;
    /**
     * The friendly name of the member account.
     */
    AccountName: AccountName;
    /**
     * (Optional) The name of an IAM role that Organizations automatically preconfigures in the new member account. This role trusts the master account, allowing users in the master account to assume the role, as permitted by the master account administrator. The role has administrator permissions in the new member account. If you do not specify this parameter, the role name defaults to OrganizationAccountAccessRole. For more information about how to use this role to access the member account, see Accessing and Administering the Member Accounts in Your Organization in the AWS Organizations User Guide, and steps 2 and 3 in Tutorial: Delegate Access Across AWS Accounts Using IAM Roles in the IAM User Guide. The regex pattern that is used to validate this parameter is a string of characters that can consist of uppercase letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-
     */
    RoleName?: RoleName;
    /**
     * If set to ALLOW, the new account enables IAM users to access account billing information if they have the required permissions. If set to DENY, then only the root user of the new account can access account billing information. For more information, see Activating Access to the Billing and Cost Management Console in the AWS Billing and Cost Management User Guide. If you do not specify this parameter, the value defaults to ALLOW, and IAM users and roles with the required permissions can access billing information for the new account.
     */
    IamUserAccessToBilling?: IAMUserAccessToBilling;
  }
  export type CreateAccountRequestId = string;
  export interface CreateAccountResponse {
    /**
     * A structure that contains details about the request to create an account. This response structure might not be fully populated when you first receive it because account creation is an asynchronous process. You can pass the returned CreateAccountStatus ID as a parameter to  DescribeCreateAccountStatus  to get status about the progress of the request at later times. 
     */
    CreateAccountStatus?: CreateAccountStatus;
  }
  export type CreateAccountState = "IN_PROGRESS"|"SUCCEEDED"|"FAILED"|string;
  export type CreateAccountStates = CreateAccountState[];
  export interface CreateAccountStatus {
    /**
     * The unique identifier (ID) that references this request. You get this value from the response of the initial CreateAccount request to create the account. The regex pattern for an create account request ID string requires "car-" followed by from 8 to 32 lower-case letters or digits.
     */
    Id?: CreateAccountRequestId;
    /**
     * The account name given to the account when it was created.
     */
    AccountName?: AccountName;
    /**
     * The status of the request.
     */
    State?: CreateAccountState;
    /**
     * The date and time that the request was made for the account creation.
     */
    RequestedTimestamp?: Timestamp;
    /**
     * The date and time that the account was created and the request completed.
     */
    CompletedTimestamp?: Timestamp;
    /**
     * If the account was created successfully, the unique identifier (ID) of the new account. The regex pattern for an account ID string requires exactly 12 digits.
     */
    AccountId?: AccountId;
    /**
     * If the request failed, a description of the reason for the failure.   ACCOUNT_LIMIT_EXCEEDED: The account could not be created because you have reached the limit on the number of accounts in your organization.   EMAIL_ALREADY_EXISTS: The account could not be created because another AWS account with that email address already exists.   INVALID_ADDRESS: The account could not be created because the address you provided is not valid.   INVALID_EMAIL: The account could not be created because the email address you provided is not valid.   INTERNAL_FAILURE: The account could not be created because of an internal failure. Try again later. If the problem persists, contact Customer Support.  
     */
    FailureReason?: CreateAccountFailureReason;
  }
  export type CreateAccountStatuses = CreateAccountStatus[];
  export interface CreateOrganizationRequest {
    /**
     * Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.    CONSOLIDATED_BILLING: All member accounts have their bills consolidated to and paid by the master account. For more information, see Consolidated Billing in the AWS Organizations User Guide.    ALL: In addition to all the features supported by the consolidated billing feature set, the master account can also apply any type of policy to any member account in the organization. For more information, see All features in the AWS Organizations User Guide.  
     */
    FeatureSet?: OrganizationFeatureSet;
  }
  export interface CreateOrganizationResponse {
    /**
     * A structure that contains details about the newly created organization.
     */
    Organization?: Organization;
  }
  export interface CreateOrganizationalUnitRequest {
    /**
     * The unique identifier (ID) of the parent root or OU in which you want to create the new OU. The regex pattern for a parent ID string requires one of the following:   Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.   Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.  
     */
    ParentId: ParentId;
    /**
     * The friendly name to assign to the new OU.
     */
    Name: OrganizationalUnitName;
  }
  export interface CreateOrganizationalUnitResponse {
    /**
     * A structure that contains details about the newly created OU.
     */
    OrganizationalUnit?: OrganizationalUnit;
  }
  export interface CreatePolicyRequest {
    /**
     * The policy content to add to the new policy. For example, if you create a service control policy (SCP), this string must be JSON text that specifies the permissions that admins in attached accounts can delegate to their users, groups, and roles. For more information about the SCP syntax, see Service Control Policy Syntax in the AWS Organizations User Guide.
     */
    Content: PolicyContent;
    /**
     * An optional description to assign to the policy.
     */
    Description: PolicyDescription;
    /**
     * The friendly name to assign to the policy. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range.
     */
    Name: PolicyName;
    /**
     * The type of policy to create.  In the current release, the only type of policy that you can create is a service control policy (SCP). 
     */
    Type: PolicyType;
  }
  export interface CreatePolicyResponse {
    /**
     * A structure that contains details about the newly created policy.
     */
    Policy?: Policy;
  }
  export interface DeclineHandshakeRequest {
    /**
     * The unique identifier (ID) of the handshake that you want to decline. You can get the ID from the ListHandshakesForAccount operation. The regex pattern for handshake ID string requires "h-" followed by from 8 to 32 lower-case letters or digits.
     */
    HandshakeId: HandshakeId;
  }
  export interface DeclineHandshakeResponse {
    /**
     * A structure that contains details about the declined handshake. The state is updated to show the value DECLINED.
     */
    Handshake?: Handshake;
  }
  export interface DeleteOrganizationalUnitRequest {
    /**
     * The unique identifier (ID) of the organizational unit that you want to delete. You can get the ID from the ListOrganizationalUnitsForParent operation. The regex pattern for an organizational unit ID string requires "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.
     */
    OrganizationalUnitId: OrganizationalUnitId;
  }
  export interface DeletePolicyRequest {
    /**
     * The unique identifier (ID) of the policy that you want to delete. You can get the ID from the ListPolicies or ListPoliciesForTarget operations. The regex pattern for a policy ID string requires "p-" followed by from 8 to 128 lower-case letters or digits.
     */
    PolicyId: PolicyId;
  }
  export interface DescribeAccountRequest {
    /**
     * The unique identifier (ID) of the AWS account that you want information about. You can get the ID from the ListAccounts or ListAccountsForParent operations. The regex pattern for an account ID string requires exactly 12 digits.
     */
    AccountId: AccountId;
  }
  export interface DescribeAccountResponse {
    /**
     * A structure that contains information about the requested account.
     */
    Account?: Account;
  }
  export interface DescribeCreateAccountStatusRequest {
    /**
     * Specifies the operationId that uniquely identifies the request. You can get the ID from the response to an earlier CreateAccount request, or from the ListCreateAccountStatus operation. The regex pattern for an create account request ID string requires "car-" followed by from 8 to 32 lower-case letters or digits.
     */
    CreateAccountRequestId: CreateAccountRequestId;
  }
  export interface DescribeCreateAccountStatusResponse {
    /**
     * A structure that contains the current status of an account creation request.
     */
    CreateAccountStatus?: CreateAccountStatus;
  }
  export interface DescribeHandshakeRequest {
    /**
     * The unique identifier (ID) of the handshake that you want information about. You can get the ID from the original call to InviteAccountToOrganization, or from a call to ListHandshakesForAccount or ListHandshakesForOrganization. The regex pattern for handshake ID string requires "h-" followed by from 8 to 32 lower-case letters or digits.
     */
    HandshakeId: HandshakeId;
  }
  export interface DescribeHandshakeResponse {
    /**
     * A structure that contains information about the specified handshake.
     */
    Handshake?: Handshake;
  }
  export interface DescribeOrganizationResponse {
    /**
     * A structure that contains information about the organization.
     */
    Organization?: Organization;
  }
  export interface DescribeOrganizationalUnitRequest {
    /**
     * The unique identifier (ID) of the organizational unit that you want details about. You can get the ID from the ListOrganizationalUnitsForParent operation. The regex pattern for an organizational unit ID string requires "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.
     */
    OrganizationalUnitId: OrganizationalUnitId;
  }
  export interface DescribeOrganizationalUnitResponse {
    /**
     * A structure that contains details about the specified OU.
     */
    OrganizationalUnit?: OrganizationalUnit;
  }
  export interface DescribePolicyRequest {
    /**
     * The unique identifier (ID) of the policy that you want details about. You can get the ID from the ListPolicies or ListPoliciesForTarget operations. The regex pattern for a policy ID string requires "p-" followed by from 8 to 128 lower-case letters or digits.
     */
    PolicyId: PolicyId;
  }
  export interface DescribePolicyResponse {
    /**
     * A structure that contains details about the specified policy.
     */
    Policy?: Policy;
  }
  export interface DetachPolicyRequest {
    /**
     * The unique identifier (ID) of the policy you want to detach. You can get the ID from the ListPolicies or ListPoliciesForTarget operations. The regex pattern for a policy ID string requires "p-" followed by from 8 to 128 lower-case letters or digits.
     */
    PolicyId: PolicyId;
    /**
     * The unique identifier (ID) of the root, OU, or account from which you want to detach the policy. You can get the ID from the ListRoots, ListOrganizationalUnitsForParent, or ListAccounts operations. The regex pattern for a target ID string requires one of the following:   Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.   Account: a string that consists of exactly 12 digits.   Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.  
     */
    TargetId: PolicyTargetId;
  }
  export interface DisablePolicyTypeRequest {
    /**
     * The unique identifier (ID) of the root in which you want to disable a policy type. You can get the ID from the ListRoots operation. The regex pattern for a root ID string requires "r-" followed by from 4 to 32 lower-case letters or digits.
     */
    RootId: RootId;
    /**
     * The policy type that you want to disable in this root.
     */
    PolicyType: PolicyType;
  }
  export interface DisablePolicyTypeResponse {
    /**
     * A structure that shows the root with the updated list of enabled policy types.
     */
    Root?: Root;
  }
  export type Email = string;
  export interface EnableAllFeaturesRequest {
  }
  export interface EnableAllFeaturesResponse {
    /**
     * A structure that contains details about the handshake created to support this request to enable all features in the organization.
     */
    Handshake?: Handshake;
  }
  export interface EnablePolicyTypeRequest {
    /**
     * The unique identifier (ID) of the root in which you want to enable a policy type. You can get the ID from the ListRoots operation. The regex pattern for a root ID string requires "r-" followed by from 4 to 32 lower-case letters or digits.
     */
    RootId: RootId;
    /**
     * The policy type that you want to enable.
     */
    PolicyType: PolicyType;
  }
  export interface EnablePolicyTypeResponse {
    /**
     * A structure that shows the root with the updated list of enabled policy types.
     */
    Root?: Root;
  }
  export type ExceptionMessage = string;
  export type ExceptionType = string;
  export type GenericArn = string;
  export interface Handshake {
    /**
     * The unique identifier (ID) of a handshake. The originating account creates the ID when it initiates the handshake. The regex pattern for handshake ID string requires "h-" followed by from 8 to 32 lower-case letters or digits.
     */
    Id?: HandshakeId;
    /**
     * The Amazon Resource Name (ARN) of a handshake. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the AWS Organizations User Guide.
     */
    Arn?: HandshakeArn;
    /**
     * Information about the two accounts that are participating in the handshake.
     */
    Parties?: HandshakeParties;
    /**
     * The current state of the handshake. Use the state to trace the flow of the handshake through the process from its creation to its acceptance. The meaning of each of the valid values is as follows:    REQUESTED: This handshake was sent to multiple recipients (applicable to only some handshake types) and not all recipients have responded yet. The request stays in this state until all recipients respond.    OPEN: This handshake was sent to multiple recipients (applicable to only some policy types) and all recipients have responded, allowing the originator to complete the handshake action.    CANCELED: This handshake is no longer active because it was canceled by the originating account.    ACCEPTED: This handshake is complete because it has been accepted by the recipient.    DECLINED: This handshake is no longer active because it was declined by the recipient account.    EXPIRED: This handshake is no longer active because the originator did not receive a response of any kind from the recipient before the expiration time (15 days).  
     */
    State?: HandshakeState;
    /**
     * The date and time that the handshake request was made.
     */
    RequestedTimestamp?: Timestamp;
    /**
     * The date and time that the handshake expires. If the recipient of the handshake request fails to respond before the specified date and time, the handshake becomes inactive and is no longer valid.
     */
    ExpirationTimestamp?: Timestamp;
    /**
     * The type of handshake, indicating what action occurs when the recipient accepts the handshake. The following handshake types are supported:    INVITE: This type of handshake represents a request to join an organization. It is always sent from the master account to only non-member accounts.    ENABLE_ALL_FEATURES: This type of handshake represents a request to enable all features in an organization. It is always sent from the master account to only invited member accounts. Created accounts do not receive this because those accounts were created by the organization's master account and approval is inferred.    APPROVE_ALL_FEATURES: This type of handshake is sent from the Organizations service when all member accounts have approved the ENABLE_ALL_FEATURES invitation. It is sent only to the master account and signals the master that it can finalize the process to enable all features.  
     */
    Action?: ActionType;
    /**
     * Additional information that is needed to process the handshake.
     */
    Resources?: HandshakeResources;
  }
  export type HandshakeArn = string;
  export type HandshakeConstraintViolationExceptionReason = "ACCOUNT_NUMBER_LIMIT_EXCEEDED"|"HANDSHAKE_RATE_LIMIT_EXCEEDED"|"ALREADY_IN_AN_ORGANIZATION"|"ORGANIZATION_ALREADY_HAS_ALL_FEATURES"|"INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES"|"PAYMENT_INSTRUMENT_REQUIRED"|"ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD"|"ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED"|string;
  export interface HandshakeFilter {
    /**
     * Specifies the type of handshake action. If you specify ActionType, you cannot also specify ParentHandshakeId.
     */
    ActionType?: ActionType;
    /**
     * Specifies the parent handshake. Only used for handshake types that are a child of another type. If you specify ParentHandshakeId, you cannot also specify ActionType. The regex pattern for handshake ID string requires "h-" followed by from 8 to 32 lower-case letters or digits.
     */
    ParentHandshakeId?: HandshakeId;
  }
  export type HandshakeId = string;
  export type HandshakeNotes = string;
  export type HandshakeParties = HandshakeParty[];
  export interface HandshakeParty {
    /**
     * The unique identifier (ID) for the party. The regex pattern for handshake ID string requires "h-" followed by from 8 to 32 lower-case letters or digits.
     */
    Id: HandshakePartyId;
    /**
     * The type of party.
     */
    Type: HandshakePartyType;
  }
  export type HandshakePartyId = string;
  export type HandshakePartyType = "ACCOUNT"|"ORGANIZATION"|"EMAIL"|string;
  export interface HandshakeResource {
    /**
     * The information that is passed to the other party in the handshake. The format of the value string must match the requirements of the specified type.
     */
    Value?: HandshakeResourceValue;
    /**
     * The type of information being passed, specifying how the value is to be interpreted by the other party:    ACCOUNT - Specifies an AWS account ID number.    ORGANIZATION - Specifies an organization ID number.    EMAIL - Specifies the email address that is associated with the account that receives the handshake.     OWNER_EMAIL - Specifies the email address associated with the master account. Included as information about an organization.     OWNER_NAME - Specifies the name associated with the master account. Included as information about an organization.     NOTES - Additional text provided by the handshake initiator and intended for the recipient to read.  
     */
    Type?: HandshakeResourceType;
    /**
     * When needed, contains an additional array of HandshakeResource objects.
     */
    Resources?: HandshakeResources;
  }
  export type HandshakeResourceType = "ACCOUNT"|"ORGANIZATION"|"ORGANIZATION_FEATURE_SET"|"EMAIL"|"MASTER_EMAIL"|"MASTER_NAME"|"NOTES"|"PARENT_HANDSHAKE"|string;
  export type HandshakeResourceValue = string;
  export type HandshakeResources = HandshakeResource[];
  export type HandshakeState = "REQUESTED"|"OPEN"|"CANCELED"|"ACCEPTED"|"DECLINED"|"EXPIRED"|string;
  export type Handshakes = Handshake[];
  export type IAMUserAccessToBilling = "ALLOW"|"DENY"|string;
  export type InvalidInputExceptionReason = "INVALID_PARTY_TYPE_TARGET"|"INVALID_SYNTAX_ORGANIZATION_ARN"|"INVALID_SYNTAX_POLICY_ID"|"INVALID_ENUM"|"INVALID_LIST_MEMBER"|"MAX_LENGTH_EXCEEDED"|"MAX_VALUE_EXCEEDED"|"MIN_LENGTH_EXCEEDED"|"MIN_VALUE_EXCEEDED"|"IMMUTABLE_POLICY"|"INVALID_PATTERN"|"INVALID_PATTERN_TARGET_ID"|"INPUT_REQUIRED"|"INVALID_NEXT_TOKEN"|"MAX_LIMIT_EXCEEDED_FILTER"|"MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS"|"INVALID_FULL_NAME_TARGET"|string;
  export interface InviteAccountToOrganizationRequest {
    /**
     * The identifier (ID) of the AWS account that you want to invite to join your organization. This is a JSON object that contains the following elements:   { "Type": "ACCOUNT", "Id": "&lt; account id number &gt;" }  If you use the AWS CLI, you can submit this as a single string, similar to the following example:  --target Id=123456789012,Type=ACCOUNT  If you specify "Type": "ACCOUNT", then you must provide the AWS account ID number as the Id. If you specify "Type": "EMAIL", then you must specify the email address that is associated with the account.  --target Id=bill@example.com,Type=EMAIL 
     */
    Target: HandshakeParty;
    /**
     * Additional information that you want to include in the generated email to the recipient account owner.
     */
    Notes?: HandshakeNotes;
  }
  export interface InviteAccountToOrganizationResponse {
    /**
     * A structure that contains details about the handshake that is created to support this invitation request.
     */
    Handshake?: Handshake;
  }
  export interface ListAccountsForParentRequest {
    /**
     * The unique identifier (ID) for the parent root or organization unit (OU) whose accounts you want to list.
     */
    ParentId: ParentId;
    /**
     * Use this parameter if you receive a NextToken response in a previous request that indicates that there is more output available. Set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Use this to limit the number of results you want included in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListAccountsForParentResponse {
    /**
     * A list of the accounts in the specified root or OU.
     */
    Accounts?: Accounts;
    /**
     * If present, this value indicates that there is more output available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
  }
  export interface ListAccountsRequest {
    /**
     * Use this parameter if you receive a NextToken response in a previous request that indicates that there is more output available. Set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Use this to limit the number of results you want included in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListAccountsResponse {
    /**
     * A list of objects in the organization.
     */
    Accounts?: Accounts;
    /**
     * If present, this value indicates that there is more output available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
  }
  export interface ListChildrenRequest {
    /**
     * The unique identifier (ID) for the parent root or OU whose children you want to list. The regex pattern for a parent ID string requires one of the following:   Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.   Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.  
     */
    ParentId: ParentId;
    /**
     * Filters the output to include only the specified child type.
     */
    ChildType: ChildType;
    /**
     * Use this parameter if you receive a NextToken response in a previous request that indicates that there is more output available. Set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Use this to limit the number of results you want included in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListChildrenResponse {
    /**
     * The list of children of the specified parent container.
     */
    Children?: Children;
    /**
     * If present, this value indicates that there is more output available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
  }
  export interface ListCreateAccountStatusRequest {
    /**
     * A list of one or more states that you want included in the response. If this parameter is not present, then all requests are included in the response.
     */
    States?: CreateAccountStates;
    /**
     * Use this parameter if you receive a NextToken response in a previous request that indicates that there is more output available. Set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Use this to limit the number of results you want included in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListCreateAccountStatusResponse {
    /**
     * A list of objects with details about the requests. Certain elements, such as the accountId number, are present in the output only after the account has been successfully created.
     */
    CreateAccountStatuses?: CreateAccountStatuses;
    /**
     * If present, this value indicates that there is more output available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
  }
  export interface ListHandshakesForAccountRequest {
    /**
     * Filters the handshakes that you want included in the response. The default is all types. Use the ActionType element to limit the output to only a specified type, such as INVITE, ENABLE-FULL-CONTROL, or APPROVE-FULL-CONTROL. Alternatively, for the ENABLE-FULL-CONTROL handshake that generates a separate child handshake for each member account, you can specify ParentHandshakeId to see only the handshakes that were generated by that parent request.
     */
    Filter?: HandshakeFilter;
    /**
     * Use this parameter if you receive a NextToken response in a previous request that indicates that there is more output available. Set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Use this to limit the number of results you want included in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListHandshakesForAccountResponse {
    /**
     * A list of Handshake objects with details about each of the handshakes that is associated with the specified account.
     */
    Handshakes?: Handshakes;
    /**
     * If present, this value indicates that there is more output available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
  }
  export interface ListHandshakesForOrganizationRequest {
    /**
     * A filter of the handshakes that you want included in the response. The default is all types. Use the ActionType element to limit the output to only a specified type, such as INVITE, ENABLE-ALL-FEATURES, or APPROVE-ALL-FEATURES. Alternatively, for the ENABLE-ALL-FEATURES handshake that generates a separate child handshake for each member account, you can specify the ParentHandshakeId to see only the handshakes that were generated by that parent request.
     */
    Filter?: HandshakeFilter;
    /**
     * Use this parameter if you receive a NextToken response in a previous request that indicates that there is more output available. Set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Use this to limit the number of results you want included in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListHandshakesForOrganizationResponse {
    /**
     * A list of Handshake objects with details about each of the handshakes that are associated with an organization.
     */
    Handshakes?: Handshakes;
    /**
     * If present, this value indicates that there is more output available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
  }
  export interface ListOrganizationalUnitsForParentRequest {
    /**
     * The unique identifier (ID) of the root or OU whose child OUs you want to list. The regex pattern for a parent ID string requires one of the following:   Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.   Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.  
     */
    ParentId: ParentId;
    /**
     * Use this parameter if you receive a NextToken response in a previous request that indicates that there is more output available. Set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Use this to limit the number of results you want included in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListOrganizationalUnitsForParentResponse {
    /**
     * A list of the OUs in the specified root or parent OU.
     */
    OrganizationalUnits?: OrganizationalUnits;
    /**
     * If present, this value indicates that there is more output available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
  }
  export interface ListParentsRequest {
    /**
     * The unique identifier (ID) of the OU or account whose parent containers you want to list. Do not specify a root. The regex pattern for a child ID string requires one of the following:   Account: a string that consists of exactly 12 digits.   Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.  
     */
    ChildId: ChildId;
    /**
     * Use this parameter if you receive a NextToken response in a previous request that indicates that there is more output available. Set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Use this to limit the number of results you want included in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListParentsResponse {
    /**
     * A list of parents for the specified child account or OU.
     */
    Parents?: Parents;
    /**
     * If present, this value indicates that there is more output available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
  }
  export interface ListPoliciesForTargetRequest {
    /**
     * The unique identifier (ID) of the root, organizational unit, or account whose policies you want to list. The regex pattern for a target ID string requires one of the following:   Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.   Account: a string that consists of exactly 12 digits.   Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.  
     */
    TargetId: PolicyTargetId;
    /**
     * The type of policy that you want to include in the returned list.
     */
    Filter: PolicyType;
    /**
     * Use this parameter if you receive a NextToken response in a previous request that indicates that there is more output available. Set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Use this to limit the number of results you want included in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListPoliciesForTargetResponse {
    /**
     * The list of policies that match the criteria in the request.
     */
    Policies?: Policies;
    /**
     * If present, this value indicates that there is more output available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
  }
  export interface ListPoliciesRequest {
    /**
     * Specifies the type of policy that you want to include in the response.
     */
    Filter: PolicyType;
    /**
     * Use this parameter if you receive a NextToken response in a previous request that indicates that there is more output available. Set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Use this to limit the number of results you want included in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListPoliciesResponse {
    /**
     * A list of policies that match the filter criteria in the request. The output list does not include the policy contents. To see the content for a policy, see DescribePolicy.
     */
    Policies?: Policies;
    /**
     * If present, this value indicates that there is more output available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
  }
  export interface ListRootsRequest {
    /**
     * Use this parameter if you receive a NextToken response in a previous request that indicates that there is more output available. Set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Use this to limit the number of results you want included in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListRootsResponse {
    /**
     * A list of roots that are defined in an organization.
     */
    Roots?: Roots;
    /**
     * If present, this value indicates that there is more output available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
  }
  export interface ListTargetsForPolicyRequest {
    /**
     * The unique identifier (ID) of the policy for which you want to know its attachments. The regex pattern for a policy ID string requires "p-" followed by from 8 to 128 lower-case letters or digits.
     */
    PolicyId: PolicyId;
    /**
     * Use this parameter if you receive a NextToken response in a previous request that indicates that there is more output available. Set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Use this to limit the number of results you want included in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTargetsForPolicyResponse {
    /**
     * A list of structures, each of which contains details about one of the entities to which the specified policy is attached.
     */
    Targets?: PolicyTargets;
    /**
     * If present, this value indicates that there is more output available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export interface MoveAccountRequest {
    /**
     * The unique identifier (ID) of the account that you want to move. The regex pattern for an account ID string requires exactly 12 digits.
     */
    AccountId: AccountId;
    /**
     * The unique identifier (ID) of the root or organizational unit that you want to move the account from. The regex pattern for a parent ID string requires one of the following:   Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.   Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.  
     */
    SourceParentId: ParentId;
    /**
     * The unique identifier (ID) of the root or organizational unit that you want to move the account to. The regex pattern for a parent ID string requires one of the following:   Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.   Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.  
     */
    DestinationParentId: ParentId;
  }
  export type NextToken = string;
  export interface Organization {
    /**
     * The unique identifier (ID) of an organization. The regex pattern for an organization ID string requires "o-" followed by from 10 to 32 lower-case letters or digits.
     */
    Id?: OrganizationId;
    /**
     * The Amazon Resource Name (ARN) of an organization. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the AWS Organizations User Guide.
     */
    Arn?: OrganizationArn;
    /**
     * Specifies the functionality that currently is available to the organization. If set to "ALL", then all features are enabled and policies can be applied to accounts in the organization. If set to "CONSOLIDATED_BILLING", then only consolidated billing functionality is available. For more information, see Enabling All Features in Your Organization in the AWS Organizations User Guide.
     */
    FeatureSet?: OrganizationFeatureSet;
    /**
     * The Amazon Resource Name (ARN) of the account that is designated as the master account for the organization. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the AWS Organizations User Guide.
     */
    MasterAccountArn?: AccountArn;
    /**
     * The unique identifier (ID) of the master account of an organization. The regex pattern for an account ID string requires exactly 12 digits.
     */
    MasterAccountId?: AccountId;
    /**
     * The email address that is associated with the AWS account that is designated as the master account for the organization.
     */
    MasterAccountEmail?: Email;
    /**
     * A list of policy types that are enabled for this organization. For example, if your organization has all features enabled, then service control policies (SCPs) are included in the list.
     */
    AvailablePolicyTypes?: PolicyTypes;
  }
  export type OrganizationArn = string;
  export type OrganizationFeatureSet = "ALL"|"CONSOLIDATED_BILLING"|string;
  export type OrganizationId = string;
  export interface OrganizationalUnit {
    /**
     * The unique identifier (ID) associated with this OU. The regex pattern for an organizational unit ID string requires "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.
     */
    Id?: OrganizationalUnitId;
    /**
     * The Amazon Resource Name (ARN) of this OU. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the AWS Organizations User Guide.
     */
    Arn?: OrganizationalUnitArn;
    /**
     * The friendly name of this OU. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range.
     */
    Name?: OrganizationalUnitName;
  }
  export type OrganizationalUnitArn = string;
  export type OrganizationalUnitId = string;
  export type OrganizationalUnitName = string;
  export type OrganizationalUnits = OrganizationalUnit[];
  export interface Parent {
    /**
     * The unique identifier (ID) of the parent entity. The regex pattern for a parent ID string requires one of the following:   Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.   Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.  
     */
    Id?: ParentId;
    /**
     * The type of the parent entity.
     */
    Type?: ParentType;
  }
  export type ParentId = string;
  export type ParentType = "ROOT"|"ORGANIZATIONAL_UNIT"|string;
  export type Parents = Parent[];
  export type Policies = PolicySummary[];
  export interface Policy {
    /**
     * A structure that contains additional details about the policy.
     */
    PolicySummary?: PolicySummary;
    /**
     * The text content of the policy.
     */
    Content?: PolicyContent;
  }
  export type PolicyArn = string;
  export type PolicyContent = string;
  export type PolicyDescription = string;
  export type PolicyId = string;
  export type PolicyName = string;
  export interface PolicySummary {
    /**
     * The unique identifier (ID) of the policy. The regex pattern for a policy ID string requires "p-" followed by from 8 to 128 lower-case letters or digits.
     */
    Id?: PolicyId;
    /**
     * The Amazon Resource Name (ARN) of the policy. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the AWS Organizations User Guide.
     */
    Arn?: PolicyArn;
    /**
     * The friendly name of the policy. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range.
     */
    Name?: PolicyName;
    /**
     * The description of the policy.
     */
    Description?: PolicyDescription;
    /**
     * The type of policy.
     */
    Type?: PolicyType;
    /**
     * A boolean value that indicates whether the specified policy is an AWS managed policy. If true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit it.
     */
    AwsManaged?: AwsManagedPolicy;
  }
  export type PolicyTargetId = string;
  export interface PolicyTargetSummary {
    /**
     * The unique identifier (ID) of the policy target. The regex pattern for a target ID string requires one of the following:   Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.   Account: a string that consists of exactly 12 digits.   Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.  
     */
    TargetId?: PolicyTargetId;
    /**
     * The Amazon Resource Name (ARN) of the policy target. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the AWS Organizations User Guide.
     */
    Arn?: GenericArn;
    /**
     * The friendly name of the policy target. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range.
     */
    Name?: TargetName;
    /**
     * The type of the policy target.
     */
    Type?: TargetType;
  }
  export type PolicyTargets = PolicyTargetSummary[];
  export type PolicyType = "SERVICE_CONTROL_POLICY"|string;
  export type PolicyTypeStatus = "ENABLED"|"PENDING_ENABLE"|"PENDING_DISABLE"|string;
  export interface PolicyTypeSummary {
    /**
     * The name of the policy type.
     */
    Type?: PolicyType;
    /**
     * The status of the policy type as it relates to the associated root. To attach a policy of the specified type to a root or to an OU or account in that root, it must be available in the organization and enabled for that root.
     */
    Status?: PolicyTypeStatus;
  }
  export type PolicyTypes = PolicyTypeSummary[];
  export interface RemoveAccountFromOrganizationRequest {
    /**
     * The unique identifier (ID) of the member account that you want to remove from the organization. The regex pattern for an account ID string requires exactly 12 digits.
     */
    AccountId: AccountId;
  }
  export type RoleName = string;
  export interface Root {
    /**
     * The unique identifier (ID) for the root. The regex pattern for a root ID string requires "r-" followed by from 4 to 32 lower-case letters or digits.
     */
    Id?: RootId;
    /**
     * The Amazon Resource Name (ARN) of the root. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the AWS Organizations User Guide.
     */
    Arn?: RootArn;
    /**
     * The friendly name of the root. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range.
     */
    Name?: RootName;
    /**
     * The types of policies that are currently enabled for the root and therefore can be attached to the root or to its OUs or accounts.
     */
    PolicyTypes?: PolicyTypes;
  }
  export type RootArn = string;
  export type RootId = string;
  export type RootName = string;
  export type Roots = Root[];
  export type TargetName = string;
  export type TargetType = "ACCOUNT"|"ORGANIZATIONAL_UNIT"|"ROOT"|string;
  export type Timestamp = Date;
  export interface UpdateOrganizationalUnitRequest {
    /**
     * The unique identifier (ID) of the OU that you want to rename. You can get the ID from the ListOrganizationalUnitsForParent operation. The regex pattern for an organizational unit ID string requires "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.
     */
    OrganizationalUnitId: OrganizationalUnitId;
    /**
     * The new name that you want to assign to the OU. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range.
     */
    Name?: OrganizationalUnitName;
  }
  export interface UpdateOrganizationalUnitResponse {
    /**
     * A structure that contains the details about the specified OU, including its new name.
     */
    OrganizationalUnit?: OrganizationalUnit;
  }
  export interface UpdatePolicyRequest {
    /**
     * The unique identifier (ID) of the policy that you want to update. The regex pattern for a policy ID string requires "p-" followed by from 8 to 128 lower-case letters or digits.
     */
    PolicyId: PolicyId;
    /**
     * If provided, the new name for the policy. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range.
     */
    Name?: PolicyName;
    /**
     * If provided, the new description for the policy.
     */
    Description?: PolicyDescription;
    /**
     * If provided, the new content for the policy. The text must be correctly formatted JSON that complies with the syntax for the policy's type. For more information, see Service Control Policy Syntax in the AWS Organizations User Guide.
     */
    Content?: PolicyContent;
  }
  export interface UpdatePolicyResponse {
    /**
     * A structure that contains details about the updated policy, showing the requested changes.
     */
    Policy?: Policy;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-11-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Organizations client.
   */
  export import Types = Organizations;
}
export = Organizations;
