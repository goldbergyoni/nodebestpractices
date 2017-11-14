import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class IAM extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: IAM.Types.ClientConfiguration)
  config: Config & IAM.Types.ClientConfiguration;
  /**
   * Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource. This action is idempotent; it does not fail or return an error if you add an existing client ID to the provider.
   */
  addClientIDToOpenIDConnectProvider(params: IAM.Types.AddClientIDToOpenIDConnectProviderRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource. This action is idempotent; it does not fail or return an error if you add an existing client ID to the provider.
   */
  addClientIDToOpenIDConnectProvider(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this limit cannot be increased.  The caller of this API must be granted the PassRole permission on the IAM role by a permission policy.  For more information about roles, go to Working with Roles. For more information about instance profiles, go to About Instance Profiles.
   */
  addRoleToInstanceProfile(params: IAM.Types.AddRoleToInstanceProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this limit cannot be increased.  The caller of this API must be granted the PassRole permission on the IAM role by a permission policy.  For more information about roles, go to Working with Roles. For more information about instance profiles, go to About Instance Profiles.
   */
  addRoleToInstanceProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds the specified user to the specified group.
   */
  addUserToGroup(params: IAM.Types.AddUserToGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds the specified user to the specified group.
   */
  addUserToGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches the specified managed policy to the specified IAM group. You use this API to attach a managed policy to a group. To embed an inline policy in a group, use PutGroupPolicy. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  attachGroupPolicy(params: IAM.Types.AttachGroupPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches the specified managed policy to the specified IAM group. You use this API to attach a managed policy to a group. To embed an inline policy in a group, use PutGroupPolicy. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  attachGroupPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.  You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using CreateRole. You can update a role's trust policy using UpdateAssumeRolePolicy.  Use this API to attach a managed policy to a role. To embed an inline policy in a role, use PutRolePolicy. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  attachRolePolicy(params: IAM.Types.AttachRolePolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.  You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using CreateRole. You can update a role's trust policy using UpdateAssumeRolePolicy.  Use this API to attach a managed policy to a role. To embed an inline policy in a role, use PutRolePolicy. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  attachRolePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches the specified managed policy to the specified user. You use this API to attach a managed policy to a user. To embed an inline policy in a user, use PutUserPolicy. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  attachUserPolicy(params: IAM.Types.AttachUserPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches the specified managed policy to the specified user. You use this API to attach a managed policy to a user. To embed an inline policy in a user, use PutUserPolicy. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  attachUserPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the password of the IAM user who is calling this action. The root account password is not affected by this action. To change the password for a different user, see UpdateLoginProfile. For more information about modifying passwords, see Managing Passwords in the IAM User Guide.
   */
  changePassword(params: IAM.Types.ChangePasswordRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the password of the IAM user who is calling this action. The root account password is not affected by this action. To change the password for a different user, see UpdateLoginProfile. For more information about modifying passwords, see Managing Passwords in the IAM User Guide.
   */
  changePassword(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Creates a new AWS secret access key and corresponding AWS access key ID for the specified user. The default status for new keys is Active. If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users.  For information about limits on the number of keys you can create, see Limitations on IAM Entities in the IAM User Guide.  To ensure the security of your AWS account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys. 
   */
  createAccessKey(params: IAM.Types.CreateAccessKeyRequest, callback?: (err: AWSError, data: IAM.Types.CreateAccessKeyResponse) => void): Request<IAM.Types.CreateAccessKeyResponse, AWSError>;
  /**
   *  Creates a new AWS secret access key and corresponding AWS access key ID for the specified user. The default status for new keys is Active. If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users.  For information about limits on the number of keys you can create, see Limitations on IAM Entities in the IAM User Guide.  To ensure the security of your AWS account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys. 
   */
  createAccessKey(callback?: (err: AWSError, data: IAM.Types.CreateAccessKeyResponse) => void): Request<IAM.Types.CreateAccessKeyResponse, AWSError>;
  /**
   * Creates an alias for your AWS account. For information about using an AWS account alias, see Using an Alias for Your AWS Account ID in the IAM User Guide.
   */
  createAccountAlias(params: IAM.Types.CreateAccountAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates an alias for your AWS account. For information about using an AWS account alias, see Using an Alias for Your AWS Account ID in the IAM User Guide.
   */
  createAccountAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a new group.  For information about the number of groups you can create, see Limitations on IAM Entities in the IAM User Guide.
   */
  createGroup(params: IAM.Types.CreateGroupRequest, callback?: (err: AWSError, data: IAM.Types.CreateGroupResponse) => void): Request<IAM.Types.CreateGroupResponse, AWSError>;
  /**
   * Creates a new group.  For information about the number of groups you can create, see Limitations on IAM Entities in the IAM User Guide.
   */
  createGroup(callback?: (err: AWSError, data: IAM.Types.CreateGroupResponse) => void): Request<IAM.Types.CreateGroupResponse, AWSError>;
  /**
   *  Creates a new instance profile. For information about instance profiles, go to About Instance Profiles.  For information about the number of instance profiles you can create, see Limitations on IAM Entities in the IAM User Guide.
   */
  createInstanceProfile(params: IAM.Types.CreateInstanceProfileRequest, callback?: (err: AWSError, data: IAM.Types.CreateInstanceProfileResponse) => void): Request<IAM.Types.CreateInstanceProfileResponse, AWSError>;
  /**
   *  Creates a new instance profile. For information about instance profiles, go to About Instance Profiles.  For information about the number of instance profiles you can create, see Limitations on IAM Entities in the IAM User Guide.
   */
  createInstanceProfile(callback?: (err: AWSError, data: IAM.Types.CreateInstanceProfileResponse) => void): Request<IAM.Types.CreateInstanceProfileResponse, AWSError>;
  /**
   *  Creates a password for the specified user, giving the user the ability to access AWS services through the AWS Management Console. For more information about managing passwords, see Managing Passwords in the IAM User Guide.
   */
  createLoginProfile(params: IAM.Types.CreateLoginProfileRequest, callback?: (err: AWSError, data: IAM.Types.CreateLoginProfileResponse) => void): Request<IAM.Types.CreateLoginProfileResponse, AWSError>;
  /**
   *  Creates a password for the specified user, giving the user the ability to access AWS services through the AWS Management Console. For more information about managing passwords, see Managing Passwords in the IAM User Guide.
   */
  createLoginProfile(callback?: (err: AWSError, data: IAM.Types.CreateLoginProfileResponse) => void): Request<IAM.Types.CreateLoginProfileResponse, AWSError>;
  /**
   * Creates an IAM entity to describe an identity provider (IdP) that supports OpenID Connect (OIDC). The OIDC provider that you create with this operation can be used as a principal in a role's trust policy to establish a trust relationship between AWS and the OIDC provider. When you create the IAM OIDC provider, you specify the URL of the OIDC identity provider (IdP) to trust, a list of client IDs (also known as audiences) that identify the application or applications that are allowed to authenticate using the OIDC provider, and a list of thumbprints of the server certificate(s) that the IdP uses. You get all of this information from the OIDC IdP that you want to use for access to AWS.  Because trust for the OIDC provider is ultimately derived from the IAM provider that this action creates, it is a best practice to limit access to the CreateOpenIDConnectProvider action to highly-privileged users. 
   */
  createOpenIDConnectProvider(params: IAM.Types.CreateOpenIDConnectProviderRequest, callback?: (err: AWSError, data: IAM.Types.CreateOpenIDConnectProviderResponse) => void): Request<IAM.Types.CreateOpenIDConnectProviderResponse, AWSError>;
  /**
   * Creates an IAM entity to describe an identity provider (IdP) that supports OpenID Connect (OIDC). The OIDC provider that you create with this operation can be used as a principal in a role's trust policy to establish a trust relationship between AWS and the OIDC provider. When you create the IAM OIDC provider, you specify the URL of the OIDC identity provider (IdP) to trust, a list of client IDs (also known as audiences) that identify the application or applications that are allowed to authenticate using the OIDC provider, and a list of thumbprints of the server certificate(s) that the IdP uses. You get all of this information from the OIDC IdP that you want to use for access to AWS.  Because trust for the OIDC provider is ultimately derived from the IAM provider that this action creates, it is a best practice to limit access to the CreateOpenIDConnectProvider action to highly-privileged users. 
   */
  createOpenIDConnectProvider(callback?: (err: AWSError, data: IAM.Types.CreateOpenIDConnectProviderResponse) => void): Request<IAM.Types.CreateOpenIDConnectProviderResponse, AWSError>;
  /**
   * Creates a new managed policy for your AWS account. This operation creates a policy version with a version identifier of v1 and sets v1 as the policy's default version. For more information about policy versions, see Versioning for Managed Policies in the IAM User Guide. For more information about managed policies in general, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  createPolicy(params: IAM.Types.CreatePolicyRequest, callback?: (err: AWSError, data: IAM.Types.CreatePolicyResponse) => void): Request<IAM.Types.CreatePolicyResponse, AWSError>;
  /**
   * Creates a new managed policy for your AWS account. This operation creates a policy version with a version identifier of v1 and sets v1 as the policy's default version. For more information about policy versions, see Versioning for Managed Policies in the IAM User Guide. For more information about managed policies in general, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  createPolicy(callback?: (err: AWSError, data: IAM.Types.CreatePolicyResponse) => void): Request<IAM.Types.CreatePolicyResponse, AWSError>;
  /**
   * Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using DeletePolicyVersion before you create a new version. Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached. For more information about managed policy versions, see Versioning for Managed Policies in the IAM User Guide.
   */
  createPolicyVersion(params: IAM.Types.CreatePolicyVersionRequest, callback?: (err: AWSError, data: IAM.Types.CreatePolicyVersionResponse) => void): Request<IAM.Types.CreatePolicyVersionResponse, AWSError>;
  /**
   * Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using DeletePolicyVersion before you create a new version. Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached. For more information about managed policy versions, see Versioning for Managed Policies in the IAM User Guide.
   */
  createPolicyVersion(callback?: (err: AWSError, data: IAM.Types.CreatePolicyVersionResponse) => void): Request<IAM.Types.CreatePolicyVersionResponse, AWSError>;
  /**
   * Creates a new role for your AWS account. For more information about roles, go to Working with Roles. For information about limitations on role names and the number of roles you can create, go to Limitations on IAM Entities in the IAM User Guide.
   */
  createRole(params: IAM.Types.CreateRoleRequest, callback?: (err: AWSError, data: IAM.Types.CreateRoleResponse) => void): Request<IAM.Types.CreateRoleResponse, AWSError>;
  /**
   * Creates a new role for your AWS account. For more information about roles, go to Working with Roles. For information about limitations on role names and the number of roles you can create, go to Limitations on IAM Entities in the IAM User Guide.
   */
  createRole(callback?: (err: AWSError, data: IAM.Types.CreateRoleResponse) => void): Request<IAM.Types.CreateRoleResponse, AWSError>;
  /**
   * Creates an IAM resource that describes an identity provider (IdP) that supports SAML 2.0. The SAML provider resource that you create with this operation can be used as a principal in an IAM role's trust policy to enable federated users who sign-in using the SAML IdP to assume the role. You can create an IAM role that supports Web-based single sign-on (SSO) to the AWS Management Console or one that supports API access to AWS. When you create the SAML provider resource, you upload an a SAML metadata document that you get from your IdP and that includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that the IdP sends. You must generate the metadata document using the identity management software that is used as your organization's IdP.   This operation requires Signature Version 4.   For more information, see Enabling SAML 2.0 Federated Users to Access the AWS Management Console and About SAML 2.0-based Federation in the IAM User Guide.
   */
  createSAMLProvider(params: IAM.Types.CreateSAMLProviderRequest, callback?: (err: AWSError, data: IAM.Types.CreateSAMLProviderResponse) => void): Request<IAM.Types.CreateSAMLProviderResponse, AWSError>;
  /**
   * Creates an IAM resource that describes an identity provider (IdP) that supports SAML 2.0. The SAML provider resource that you create with this operation can be used as a principal in an IAM role's trust policy to enable federated users who sign-in using the SAML IdP to assume the role. You can create an IAM role that supports Web-based single sign-on (SSO) to the AWS Management Console or one that supports API access to AWS. When you create the SAML provider resource, you upload an a SAML metadata document that you get from your IdP and that includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that the IdP sends. You must generate the metadata document using the identity management software that is used as your organization's IdP.   This operation requires Signature Version 4.   For more information, see Enabling SAML 2.0 Federated Users to Access the AWS Management Console and About SAML 2.0-based Federation in the IAM User Guide.
   */
  createSAMLProvider(callback?: (err: AWSError, data: IAM.Types.CreateSAMLProviderResponse) => void): Request<IAM.Types.CreateSAMLProviderResponse, AWSError>;
  /**
   * Creates an IAM role that is linked to a specific AWS service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your AWS resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. The name of the role is autogenerated by combining the string that you specify for the AWSServiceName parameter with the string that you specify for the CustomSuffix parameter. The resulting name must be unique in your account or the request fails. To attach a policy to this service-linked role, you must make the request using the AWS service that depends on this role.
   */
  createServiceLinkedRole(params: IAM.Types.CreateServiceLinkedRoleRequest, callback?: (err: AWSError, data: IAM.Types.CreateServiceLinkedRoleResponse) => void): Request<IAM.Types.CreateServiceLinkedRoleResponse, AWSError>;
  /**
   * Creates an IAM role that is linked to a specific AWS service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your AWS resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. The name of the role is autogenerated by combining the string that you specify for the AWSServiceName parameter with the string that you specify for the CustomSuffix parameter. The resulting name must be unique in your account or the request fails. To attach a policy to this service-linked role, you must make the request using the AWS service that depends on this role.
   */
  createServiceLinkedRole(callback?: (err: AWSError, data: IAM.Types.CreateServiceLinkedRoleResponse) => void): Request<IAM.Types.CreateServiceLinkedRoleResponse, AWSError>;
  /**
   * Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service.  You can have a maximum of two sets of service-specific credentials for each supported service per user. The only supported service at this time is AWS CodeCommit. You can reset the password to a new service-generated value by calling ResetServiceSpecificCredential. For more information about service-specific credentials, see Using IAM with AWS CodeCommit: Git Credentials, SSH Keys, and AWS Access Keys in the IAM User Guide.
   */
  createServiceSpecificCredential(params: IAM.Types.CreateServiceSpecificCredentialRequest, callback?: (err: AWSError, data: IAM.Types.CreateServiceSpecificCredentialResponse) => void): Request<IAM.Types.CreateServiceSpecificCredentialResponse, AWSError>;
  /**
   * Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service.  You can have a maximum of two sets of service-specific credentials for each supported service per user. The only supported service at this time is AWS CodeCommit. You can reset the password to a new service-generated value by calling ResetServiceSpecificCredential. For more information about service-specific credentials, see Using IAM with AWS CodeCommit: Git Credentials, SSH Keys, and AWS Access Keys in the IAM User Guide.
   */
  createServiceSpecificCredential(callback?: (err: AWSError, data: IAM.Types.CreateServiceSpecificCredentialResponse) => void): Request<IAM.Types.CreateServiceSpecificCredentialResponse, AWSError>;
  /**
   * Creates a new IAM user for your AWS account.  For information about limitations on the number of IAM users you can create, see Limitations on IAM Entities in the IAM User Guide.
   */
  createUser(params: IAM.Types.CreateUserRequest, callback?: (err: AWSError, data: IAM.Types.CreateUserResponse) => void): Request<IAM.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a new IAM user for your AWS account.  For information about limitations on the number of IAM users you can create, see Limitations on IAM Entities in the IAM User Guide.
   */
  createUser(callback?: (err: AWSError, data: IAM.Types.CreateUserResponse) => void): Request<IAM.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a new virtual MFA device for the AWS account. After creating the virtual MFA, use EnableMFADevice to attach the MFA device to an IAM user. For more information about creating and working with virtual MFA devices, go to Using a Virtual MFA Device in the IAM User Guide. For information about limits on the number of MFA devices you can create, see Limitations on Entities in the IAM User Guide.  The seed information contained in the QR code and the Base32 string should be treated like any other secret access information, such as your AWS access keys or your passwords. After you provision your virtual device, you should ensure that the information is destroyed following secure procedures. 
   */
  createVirtualMFADevice(params: IAM.Types.CreateVirtualMFADeviceRequest, callback?: (err: AWSError, data: IAM.Types.CreateVirtualMFADeviceResponse) => void): Request<IAM.Types.CreateVirtualMFADeviceResponse, AWSError>;
  /**
   * Creates a new virtual MFA device for the AWS account. After creating the virtual MFA, use EnableMFADevice to attach the MFA device to an IAM user. For more information about creating and working with virtual MFA devices, go to Using a Virtual MFA Device in the IAM User Guide. For information about limits on the number of MFA devices you can create, see Limitations on Entities in the IAM User Guide.  The seed information contained in the QR code and the Base32 string should be treated like any other secret access information, such as your AWS access keys or your passwords. After you provision your virtual device, you should ensure that the information is destroyed following secure procedures. 
   */
  createVirtualMFADevice(callback?: (err: AWSError, data: IAM.Types.CreateVirtualMFADeviceResponse) => void): Request<IAM.Types.CreateVirtualMFADeviceResponse, AWSError>;
  /**
   * Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled. For more information about creating and working with virtual MFA devices, go to Using a Virtual MFA Device in the IAM User Guide.
   */
  deactivateMFADevice(params: IAM.Types.DeactivateMFADeviceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled. For more information about creating and working with virtual MFA devices, go to Using a Virtual MFA Device in the IAM User Guide.
   */
  deactivateMFADevice(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the access key pair associated with the specified IAM user. If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users.
   */
  deleteAccessKey(params: IAM.Types.DeleteAccessKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the access key pair associated with the specified IAM user. If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users.
   */
  deleteAccessKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Deletes the specified AWS account alias. For information about using an AWS account alias, see Using an Alias for Your AWS Account ID in the IAM User Guide.
   */
  deleteAccountAlias(params: IAM.Types.DeleteAccountAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Deletes the specified AWS account alias. For information about using an AWS account alias, see Using an Alias for Your AWS Account ID in the IAM User Guide.
   */
  deleteAccountAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the password policy for the AWS account. There are no parameters.
   */
  deleteAccountPasswordPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified IAM group. The group must not contain any users or have any attached policies.
   */
  deleteGroup(params: IAM.Types.DeleteGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified IAM group. The group must not contain any users or have any attached policies.
   */
  deleteGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified inline policy that is embedded in the specified IAM group. A group can also have managed policies attached to it. To detach a managed policy from a group, use DetachGroupPolicy. For more information about policies, refer to Managed Policies and Inline Policies in the IAM User Guide.
   */
  deleteGroupPolicy(params: IAM.Types.DeleteGroupPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified inline policy that is embedded in the specified IAM group. A group can also have managed policies attached to it. To detach a managed policy from a group, use DetachGroupPolicy. For more information about policies, refer to Managed Policies and Inline Policies in the IAM User Guide.
   */
  deleteGroupPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified instance profile. The instance profile must not have an associated role.  Make sure you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.  For more information about instance profiles, go to About Instance Profiles.
   */
  deleteInstanceProfile(params: IAM.Types.DeleteInstanceProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified instance profile. The instance profile must not have an associated role.  Make sure you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.  For more information about instance profiles, go to About Instance Profiles.
   */
  deleteInstanceProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the password for the specified IAM user, which terminates the user's ability to access AWS services through the AWS Management Console.   Deleting a user's password does not prevent a user from accessing AWS through the command line interface or the API. To prevent all user access you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see UpdateAccessKey and DeleteAccessKey.  
   */
  deleteLoginProfile(params: IAM.Types.DeleteLoginProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the password for the specified IAM user, which terminates the user's ability to access AWS services through the AWS Management Console.   Deleting a user's password does not prevent a user from accessing AWS through the command line interface or the API. To prevent all user access you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see UpdateAccessKey and DeleteAccessKey.  
   */
  deleteLoginProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an OpenID Connect identity provider (IdP) resource object in IAM. Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails. This action is idempotent; it does not fail or return an error if you call the action for a provider that does not exist.
   */
  deleteOpenIDConnectProvider(params: IAM.Types.DeleteOpenIDConnectProviderRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an OpenID Connect identity provider (IdP) resource object in IAM. Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails. This action is idempotent; it does not fail or return an error if you call the action for a provider that does not exist.
   */
  deleteOpenIDConnectProvider(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified managed policy. Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to, and you must delete all of the policy's versions. The following steps describe the process for deleting a managed policy:   Detach the policy from all users, groups, and roles that the policy is attached to, using the DetachUserPolicy, DetachGroupPolicy, or DetachRolePolicy APIs. To list all the users, groups, and roles that a policy is attached to, use ListEntitiesForPolicy.   Delete all versions of the policy using DeletePolicyVersion. To list the policy's versions, use ListPolicyVersions. You cannot use DeletePolicyVersion to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.   Delete the policy (this automatically deletes the policy's default version) using this API.   For information about managed policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  deletePolicy(params: IAM.Types.DeletePolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified managed policy. Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to, and you must delete all of the policy's versions. The following steps describe the process for deleting a managed policy:   Detach the policy from all users, groups, and roles that the policy is attached to, using the DetachUserPolicy, DetachGroupPolicy, or DetachRolePolicy APIs. To list all the users, groups, and roles that a policy is attached to, use ListEntitiesForPolicy.   Delete all versions of the policy using DeletePolicyVersion. To list the policy's versions, use ListPolicyVersions. You cannot use DeletePolicyVersion to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.   Delete the policy (this automatically deletes the policy's default version) using this API.   For information about managed policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  deletePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified version from the specified managed policy. You cannot delete the default version from a policy using this API. To delete the default version from a policy, use DeletePolicy. To find out which version of a policy is marked as the default version, use ListPolicyVersions. For information about versions for managed policies, see Versioning for Managed Policies in the IAM User Guide.
   */
  deletePolicyVersion(params: IAM.Types.DeletePolicyVersionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified version from the specified managed policy. You cannot delete the default version from a policy using this API. To delete the default version from a policy, use DeletePolicy. To find out which version of a policy is marked as the default version, use ListPolicyVersions. For information about versions for managed policies, see Versioning for Managed Policies in the IAM User Guide.
   */
  deletePolicyVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified role. The role must not have any policies attached. For more information about roles, go to Working with Roles.  Make sure you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance. 
   */
  deleteRole(params: IAM.Types.DeleteRoleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified role. The role must not have any policies attached. For more information about roles, go to Working with Roles.  Make sure you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance. 
   */
  deleteRole(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified inline policy that is embedded in the specified IAM role. A role can also have managed policies attached to it. To detach a managed policy from a role, use DetachRolePolicy. For more information about policies, refer to Managed Policies and Inline Policies in the IAM User Guide.
   */
  deleteRolePolicy(params: IAM.Types.DeleteRolePolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified inline policy that is embedded in the specified IAM role. A role can also have managed policies attached to it. To detach a managed policy from a role, use DetachRolePolicy. For more information about policies, refer to Managed Policies and Inline Policies in the IAM User Guide.
   */
  deleteRolePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a SAML provider resource in IAM. Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.   This operation requires Signature Version 4. 
   */
  deleteSAMLProvider(params: IAM.Types.DeleteSAMLProviderRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a SAML provider resource in IAM. Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.   This operation requires Signature Version 4. 
   */
  deleteSAMLProvider(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified SSH public key. The SSH public key deleted by this action is used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see Set up AWS CodeCommit for SSH Connections in the AWS CodeCommit User Guide.
   */
  deleteSSHPublicKey(params: IAM.Types.DeleteSSHPublicKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified SSH public key. The SSH public key deleted by this action is used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see Set up AWS CodeCommit for SSH Connections in the AWS CodeCommit User Guide.
   */
  deleteSSHPublicKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified server certificate. For more information about working with server certificates, including a list of AWS services that can use the server certificates that you manage with IAM, go to Working with Server Certificates in the IAM User Guide.   If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, go to DeleteLoadBalancerListeners in the Elastic Load Balancing API Reference. 
   */
  deleteServerCertificate(params: IAM.Types.DeleteServerCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified server certificate. For more information about working with server certificates, including a list of AWS services that can use the server certificates that you manage with IAM, go to Working with Server Certificates in the IAM User Guide.   If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, go to DeleteLoadBalancerListeners in the Elastic Load Balancing API Reference. 
   */
  deleteServerCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Submits a service-linked role deletion request and returns a DeletionTaskId, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the DeletionTaskId of the earlier request is returned. If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the GetServiceLinkedRoleDeletionStatus API operation returns the reason for the failure, including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the AWS documentation for your service. For more information about service-linked roles, see Roles Terms and Concepts: AWS Service-Linked Role in the IAM User Guide.
   */
  deleteServiceLinkedRole(params: IAM.Types.DeleteServiceLinkedRoleRequest, callback?: (err: AWSError, data: IAM.Types.DeleteServiceLinkedRoleResponse) => void): Request<IAM.Types.DeleteServiceLinkedRoleResponse, AWSError>;
  /**
   * Submits a service-linked role deletion request and returns a DeletionTaskId, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the DeletionTaskId of the earlier request is returned. If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the GetServiceLinkedRoleDeletionStatus API operation returns the reason for the failure, including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the AWS documentation for your service. For more information about service-linked roles, see Roles Terms and Concepts: AWS Service-Linked Role in the IAM User Guide.
   */
  deleteServiceLinkedRole(callback?: (err: AWSError, data: IAM.Types.DeleteServiceLinkedRoleResponse) => void): Request<IAM.Types.DeleteServiceLinkedRoleResponse, AWSError>;
  /**
   * Deletes the specified service-specific credential.
   */
  deleteServiceSpecificCredential(params: IAM.Types.DeleteServiceSpecificCredentialRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified service-specific credential.
   */
  deleteServiceSpecificCredential(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a signing certificate associated with the specified IAM user. If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated IAM users.
   */
  deleteSigningCertificate(params: IAM.Types.DeleteSigningCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a signing certificate associated with the specified IAM user. If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated IAM users.
   */
  deleteSigningCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified IAM user. The user must not belong to any groups or have any access keys, signing certificates, or attached policies.
   */
  deleteUser(params: IAM.Types.DeleteUserRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified IAM user. The user must not belong to any groups or have any access keys, signing certificates, or attached policies.
   */
  deleteUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified inline policy that is embedded in the specified IAM user. A user can also have managed policies attached to it. To detach a managed policy from a user, use DetachUserPolicy. For more information about policies, refer to Managed Policies and Inline Policies in the IAM User Guide.
   */
  deleteUserPolicy(params: IAM.Types.DeleteUserPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified inline policy that is embedded in the specified IAM user. A user can also have managed policies attached to it. To detach a managed policy from a user, use DetachUserPolicy. For more information about policies, refer to Managed Policies and Inline Policies in the IAM User Guide.
   */
  deleteUserPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a virtual MFA device.   You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see DeactivateMFADevice.  
   */
  deleteVirtualMFADevice(params: IAM.Types.DeleteVirtualMFADeviceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a virtual MFA device.   You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see DeactivateMFADevice.  
   */
  deleteVirtualMFADevice(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified managed policy from the specified IAM group. A group can also have inline policies embedded with it. To delete an inline policy, use the DeleteGroupPolicy API. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  detachGroupPolicy(params: IAM.Types.DetachGroupPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified managed policy from the specified IAM group. A group can also have inline policies embedded with it. To delete an inline policy, use the DeleteGroupPolicy API. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  detachGroupPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified managed policy from the specified role. A role can also have inline policies embedded with it. To delete an inline policy, use the DeleteRolePolicy API. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  detachRolePolicy(params: IAM.Types.DetachRolePolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified managed policy from the specified role. A role can also have inline policies embedded with it. To delete an inline policy, use the DeleteRolePolicy API. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  detachRolePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified managed policy from the specified user. A user can also have inline policies embedded with it. To delete an inline policy, use the DeleteUserPolicy API. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  detachUserPolicy(params: IAM.Types.DetachUserPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified managed policy from the specified user. A user can also have inline policies embedded with it. To delete an inline policy, use the DeleteUserPolicy API. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  detachUserPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.
   */
  enableMFADevice(params: IAM.Types.EnableMFADeviceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.
   */
  enableMFADevice(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Generates a credential report for the AWS account. For more information about the credential report, see Getting Credential Reports in the IAM User Guide.
   */
  generateCredentialReport(callback?: (err: AWSError, data: IAM.Types.GenerateCredentialReportResponse) => void): Request<IAM.Types.GenerateCredentialReportResponse, AWSError>;
  /**
   * Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the AWS service and region that were specified in the last request made with that key.
   */
  getAccessKeyLastUsed(params: IAM.Types.GetAccessKeyLastUsedRequest, callback?: (err: AWSError, data: IAM.Types.GetAccessKeyLastUsedResponse) => void): Request<IAM.Types.GetAccessKeyLastUsedResponse, AWSError>;
  /**
   * Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the AWS service and region that were specified in the last request made with that key.
   */
  getAccessKeyLastUsed(callback?: (err: AWSError, data: IAM.Types.GetAccessKeyLastUsedResponse) => void): Request<IAM.Types.GetAccessKeyLastUsedResponse, AWSError>;
  /**
   * Retrieves information about all IAM users, groups, roles, and policies in your AWS account, including their relationships to one another. Use this API to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account. You can optionally filter the results using the Filter parameter. You can paginate the results using the MaxItems and Marker parameters.
   */
  getAccountAuthorizationDetails(params: IAM.Types.GetAccountAuthorizationDetailsRequest, callback?: (err: AWSError, data: IAM.Types.GetAccountAuthorizationDetailsResponse) => void): Request<IAM.Types.GetAccountAuthorizationDetailsResponse, AWSError>;
  /**
   * Retrieves information about all IAM users, groups, roles, and policies in your AWS account, including their relationships to one another. Use this API to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account. You can optionally filter the results using the Filter parameter. You can paginate the results using the MaxItems and Marker parameters.
   */
  getAccountAuthorizationDetails(callback?: (err: AWSError, data: IAM.Types.GetAccountAuthorizationDetailsResponse) => void): Request<IAM.Types.GetAccountAuthorizationDetailsResponse, AWSError>;
  /**
   * Retrieves the password policy for the AWS account. For more information about using a password policy, go to Managing an IAM Password Policy.
   */
  getAccountPasswordPolicy(callback?: (err: AWSError, data: IAM.Types.GetAccountPasswordPolicyResponse) => void): Request<IAM.Types.GetAccountPasswordPolicyResponse, AWSError>;
  /**
   * Retrieves information about IAM entity usage and IAM quotas in the AWS account.  For information about limitations on IAM entities, see Limitations on IAM Entities in the IAM User Guide.
   */
  getAccountSummary(callback?: (err: AWSError, data: IAM.Types.GetAccountSummaryResponse) => void): Request<IAM.Types.GetAccountSummaryResponse, AWSError>;
  /**
   * Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use GetContextKeysForPrincipalPolicy. Context keys are variables maintained by AWS and its services that provide details about the context of an API query request, and can be evaluated by testing against a value specified in an IAM policy. Use GetContextKeysForCustomPolicy to understand what key names and values you must supply when you call SimulateCustomPolicy. Note that all parameters are shown in unencoded form here for clarity, but must be URL encoded to be included as a part of a real HTML request.
   */
  getContextKeysForCustomPolicy(params: IAM.Types.GetContextKeysForCustomPolicyRequest, callback?: (err: AWSError, data: IAM.Types.GetContextKeysForPolicyResponse) => void): Request<IAM.Types.GetContextKeysForPolicyResponse, AWSError>;
  /**
   * Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use GetContextKeysForPrincipalPolicy. Context keys are variables maintained by AWS and its services that provide details about the context of an API query request, and can be evaluated by testing against a value specified in an IAM policy. Use GetContextKeysForCustomPolicy to understand what key names and values you must supply when you call SimulateCustomPolicy. Note that all parameters are shown in unencoded form here for clarity, but must be URL encoded to be included as a part of a real HTML request.
   */
  getContextKeysForCustomPolicy(callback?: (err: AWSError, data: IAM.Types.GetContextKeysForPolicyResponse) => void): Request<IAM.Types.GetContextKeysForPolicyResponse, AWSError>;
  /**
   * Gets a list of all of the context keys referenced in all of the IAM policies attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of. You can optionally include a list of one or more additional policies, specified as strings. If you want to include only a list of policies by string, use GetContextKeysForCustomPolicy instead.  Note: This API discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use GetContextKeysForCustomPolicy instead. Context keys are variables maintained by AWS and its services that provide details about the context of an API query request, and can be evaluated by testing against a value in an IAM policy. Use GetContextKeysForPrincipalPolicy to understand what key names and values you must supply when you call SimulatePrincipalPolicy.
   */
  getContextKeysForPrincipalPolicy(params: IAM.Types.GetContextKeysForPrincipalPolicyRequest, callback?: (err: AWSError, data: IAM.Types.GetContextKeysForPolicyResponse) => void): Request<IAM.Types.GetContextKeysForPolicyResponse, AWSError>;
  /**
   * Gets a list of all of the context keys referenced in all of the IAM policies attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of. You can optionally include a list of one or more additional policies, specified as strings. If you want to include only a list of policies by string, use GetContextKeysForCustomPolicy instead.  Note: This API discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use GetContextKeysForCustomPolicy instead. Context keys are variables maintained by AWS and its services that provide details about the context of an API query request, and can be evaluated by testing against a value in an IAM policy. Use GetContextKeysForPrincipalPolicy to understand what key names and values you must supply when you call SimulatePrincipalPolicy.
   */
  getContextKeysForPrincipalPolicy(callback?: (err: AWSError, data: IAM.Types.GetContextKeysForPolicyResponse) => void): Request<IAM.Types.GetContextKeysForPolicyResponse, AWSError>;
  /**
   *  Retrieves a credential report for the AWS account. For more information about the credential report, see Getting Credential Reports in the IAM User Guide.
   */
  getCredentialReport(callback?: (err: AWSError, data: IAM.Types.GetCredentialReportResponse) => void): Request<IAM.Types.GetCredentialReportResponse, AWSError>;
  /**
   *  Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the MaxItems and Marker parameters.
   */
  getGroup(params: IAM.Types.GetGroupRequest, callback?: (err: AWSError, data: IAM.Types.GetGroupResponse) => void): Request<IAM.Types.GetGroupResponse, AWSError>;
  /**
   *  Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the MaxItems and Marker parameters.
   */
  getGroup(callback?: (err: AWSError, data: IAM.Types.GetGroupResponse) => void): Request<IAM.Types.GetGroupResponse, AWSError>;
  /**
   * Retrieves the specified inline policy document that is embedded in the specified IAM group.  Policies returned by this API are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality.  An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use GetPolicy to determine the policy's default version, then use GetPolicyVersion to retrieve the policy document. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  getGroupPolicy(params: IAM.Types.GetGroupPolicyRequest, callback?: (err: AWSError, data: IAM.Types.GetGroupPolicyResponse) => void): Request<IAM.Types.GetGroupPolicyResponse, AWSError>;
  /**
   * Retrieves the specified inline policy document that is embedded in the specified IAM group.  Policies returned by this API are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality.  An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use GetPolicy to determine the policy's default version, then use GetPolicyVersion to retrieve the policy document. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  getGroupPolicy(callback?: (err: AWSError, data: IAM.Types.GetGroupPolicyResponse) => void): Request<IAM.Types.GetGroupPolicyResponse, AWSError>;
  /**
   *  Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see About Instance Profiles in the IAM User Guide.
   */
  getInstanceProfile(params: IAM.Types.GetInstanceProfileRequest, callback?: (err: AWSError, data: IAM.Types.GetInstanceProfileResponse) => void): Request<IAM.Types.GetInstanceProfileResponse, AWSError>;
  /**
   *  Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see About Instance Profiles in the IAM User Guide.
   */
  getInstanceProfile(callback?: (err: AWSError, data: IAM.Types.GetInstanceProfileResponse) => void): Request<IAM.Types.GetInstanceProfileResponse, AWSError>;
  /**
   * Retrieves the user name and password-creation date for the specified IAM user. If the user has not been assigned a password, the action returns a 404 (NoSuchEntity) error.
   */
  getLoginProfile(params: IAM.Types.GetLoginProfileRequest, callback?: (err: AWSError, data: IAM.Types.GetLoginProfileResponse) => void): Request<IAM.Types.GetLoginProfileResponse, AWSError>;
  /**
   * Retrieves the user name and password-creation date for the specified IAM user. If the user has not been assigned a password, the action returns a 404 (NoSuchEntity) error.
   */
  getLoginProfile(callback?: (err: AWSError, data: IAM.Types.GetLoginProfileResponse) => void): Request<IAM.Types.GetLoginProfileResponse, AWSError>;
  /**
   * Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.
   */
  getOpenIDConnectProvider(params: IAM.Types.GetOpenIDConnectProviderRequest, callback?: (err: AWSError, data: IAM.Types.GetOpenIDConnectProviderResponse) => void): Request<IAM.Types.GetOpenIDConnectProviderResponse, AWSError>;
  /**
   * Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.
   */
  getOpenIDConnectProvider(callback?: (err: AWSError, data: IAM.Types.GetOpenIDConnectProviderResponse) => void): Request<IAM.Types.GetOpenIDConnectProviderResponse, AWSError>;
  /**
   * Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use the ListEntitiesForPolicy API. This API returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use GetPolicyVersion. This API retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use the GetUserPolicy, GetGroupPolicy, or GetRolePolicy API. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  getPolicy(params: IAM.Types.GetPolicyRequest, callback?: (err: AWSError, data: IAM.Types.GetPolicyResponse) => void): Request<IAM.Types.GetPolicyResponse, AWSError>;
  /**
   * Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use the ListEntitiesForPolicy API. This API returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use GetPolicyVersion. This API retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use the GetUserPolicy, GetGroupPolicy, or GetRolePolicy API. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  getPolicy(callback?: (err: AWSError, data: IAM.Types.GetPolicyResponse) => void): Request<IAM.Types.GetPolicyResponse, AWSError>;
  /**
   * Retrieves information about the specified version of the specified managed policy, including the policy document.  Policies returned by this API are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality.  To list the available versions for a policy, use ListPolicyVersions. This API retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use the GetUserPolicy, GetGroupPolicy, or GetRolePolicy API. For more information about the types of policies, see Managed Policies and Inline Policies in the IAM User Guide. For more information about managed policy versions, see Versioning for Managed Policies in the IAM User Guide.
   */
  getPolicyVersion(params: IAM.Types.GetPolicyVersionRequest, callback?: (err: AWSError, data: IAM.Types.GetPolicyVersionResponse) => void): Request<IAM.Types.GetPolicyVersionResponse, AWSError>;
  /**
   * Retrieves information about the specified version of the specified managed policy, including the policy document.  Policies returned by this API are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality.  To list the available versions for a policy, use ListPolicyVersions. This API retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use the GetUserPolicy, GetGroupPolicy, or GetRolePolicy API. For more information about the types of policies, see Managed Policies and Inline Policies in the IAM User Guide. For more information about managed policy versions, see Versioning for Managed Policies in the IAM User Guide.
   */
  getPolicyVersion(callback?: (err: AWSError, data: IAM.Types.GetPolicyVersionResponse) => void): Request<IAM.Types.GetPolicyVersionResponse, AWSError>;
  /**
   * Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see Working with Roles.  Policies returned by this API are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality. 
   */
  getRole(params: IAM.Types.GetRoleRequest, callback?: (err: AWSError, data: IAM.Types.GetRoleResponse) => void): Request<IAM.Types.GetRoleResponse, AWSError>;
  /**
   * Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see Working with Roles.  Policies returned by this API are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality. 
   */
  getRole(callback?: (err: AWSError, data: IAM.Types.GetRoleResponse) => void): Request<IAM.Types.GetRoleResponse, AWSError>;
  /**
   * Retrieves the specified inline policy document that is embedded with the specified IAM role.  Policies returned by this API are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality.  An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use GetPolicy to determine the policy's default version, then use GetPolicyVersion to retrieve the policy document. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide. For more information about roles, see Using Roles to Delegate Permissions and Federate Identities.
   */
  getRolePolicy(params: IAM.Types.GetRolePolicyRequest, callback?: (err: AWSError, data: IAM.Types.GetRolePolicyResponse) => void): Request<IAM.Types.GetRolePolicyResponse, AWSError>;
  /**
   * Retrieves the specified inline policy document that is embedded with the specified IAM role.  Policies returned by this API are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality.  An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use GetPolicy to determine the policy's default version, then use GetPolicyVersion to retrieve the policy document. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide. For more information about roles, see Using Roles to Delegate Permissions and Federate Identities.
   */
  getRolePolicy(callback?: (err: AWSError, data: IAM.Types.GetRolePolicyResponse) => void): Request<IAM.Types.GetRolePolicyResponse, AWSError>;
  /**
   * Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.  This operation requires Signature Version 4. 
   */
  getSAMLProvider(params: IAM.Types.GetSAMLProviderRequest, callback?: (err: AWSError, data: IAM.Types.GetSAMLProviderResponse) => void): Request<IAM.Types.GetSAMLProviderResponse, AWSError>;
  /**
   * Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.  This operation requires Signature Version 4. 
   */
  getSAMLProvider(callback?: (err: AWSError, data: IAM.Types.GetSAMLProviderResponse) => void): Request<IAM.Types.GetSAMLProviderResponse, AWSError>;
  /**
   * Retrieves the specified SSH public key, including metadata about the key. The SSH public key retrieved by this action is used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see Set up AWS CodeCommit for SSH Connections in the AWS CodeCommit User Guide.
   */
  getSSHPublicKey(params: IAM.Types.GetSSHPublicKeyRequest, callback?: (err: AWSError, data: IAM.Types.GetSSHPublicKeyResponse) => void): Request<IAM.Types.GetSSHPublicKeyResponse, AWSError>;
  /**
   * Retrieves the specified SSH public key, including metadata about the key. The SSH public key retrieved by this action is used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see Set up AWS CodeCommit for SSH Connections in the AWS CodeCommit User Guide.
   */
  getSSHPublicKey(callback?: (err: AWSError, data: IAM.Types.GetSSHPublicKeyResponse) => void): Request<IAM.Types.GetSSHPublicKeyResponse, AWSError>;
  /**
   * Retrieves information about the specified server certificate stored in IAM. For more information about working with server certificates, including a list of AWS services that can use the server certificates that you manage with IAM, go to Working with Server Certificates in the IAM User Guide.
   */
  getServerCertificate(params: IAM.Types.GetServerCertificateRequest, callback?: (err: AWSError, data: IAM.Types.GetServerCertificateResponse) => void): Request<IAM.Types.GetServerCertificateResponse, AWSError>;
  /**
   * Retrieves information about the specified server certificate stored in IAM. For more information about working with server certificates, including a list of AWS services that can use the server certificates that you manage with IAM, go to Working with Server Certificates in the IAM User Guide.
   */
  getServerCertificate(callback?: (err: AWSError, data: IAM.Types.GetServerCertificateResponse) => void): Request<IAM.Types.GetServerCertificateResponse, AWSError>;
  /**
   * Retrieves the status of your service-linked role deletion. After you use the DeleteServiceLinkedRole API operation to submit a service-linked role for deletion, you can use the DeletionTaskId parameter in GetServiceLinkedRoleDeletionStatus to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed.
   */
  getServiceLinkedRoleDeletionStatus(params: IAM.Types.GetServiceLinkedRoleDeletionStatusRequest, callback?: (err: AWSError, data: IAM.Types.GetServiceLinkedRoleDeletionStatusResponse) => void): Request<IAM.Types.GetServiceLinkedRoleDeletionStatusResponse, AWSError>;
  /**
   * Retrieves the status of your service-linked role deletion. After you use the DeleteServiceLinkedRole API operation to submit a service-linked role for deletion, you can use the DeletionTaskId parameter in GetServiceLinkedRoleDeletionStatus to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed.
   */
  getServiceLinkedRoleDeletionStatus(callback?: (err: AWSError, data: IAM.Types.GetServiceLinkedRoleDeletionStatusResponse) => void): Request<IAM.Types.GetServiceLinkedRoleDeletionStatusResponse, AWSError>;
  /**
   * Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN. If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID used to sign the request to this API.
   */
  getUser(params: IAM.Types.GetUserRequest, callback?: (err: AWSError, data: IAM.Types.GetUserResponse) => void): Request<IAM.Types.GetUserResponse, AWSError>;
  /**
   * Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN. If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID used to sign the request to this API.
   */
  getUser(callback?: (err: AWSError, data: IAM.Types.GetUserResponse) => void): Request<IAM.Types.GetUserResponse, AWSError>;
  /**
   * Retrieves the specified inline policy document that is embedded in the specified IAM user.  Policies returned by this API are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality.  An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use GetPolicy to determine the policy's default version, then use GetPolicyVersion to retrieve the policy document. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  getUserPolicy(params: IAM.Types.GetUserPolicyRequest, callback?: (err: AWSError, data: IAM.Types.GetUserPolicyResponse) => void): Request<IAM.Types.GetUserPolicyResponse, AWSError>;
  /**
   * Retrieves the specified inline policy document that is embedded in the specified IAM user.  Policies returned by this API are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality.  An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use GetPolicy to determine the policy's default version, then use GetPolicyVersion to retrieve the policy document. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  getUserPolicy(callback?: (err: AWSError, data: IAM.Types.GetUserPolicyResponse) => void): Request<IAM.Types.GetUserPolicyResponse, AWSError>;
  /**
   * Returns information about the access key IDs associated with the specified IAM user. If there are none, the action returns an empty list. Although each user is limited to a small number of keys, you can still paginate the results using the MaxItems and Marker parameters. If the UserName field is not specified, the UserName is determined implicitly based on the AWS access key ID used to sign the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users.  To ensure the security of your AWS account, the secret access key is accessible only during key and user creation. 
   */
  listAccessKeys(params: IAM.Types.ListAccessKeysRequest, callback?: (err: AWSError, data: IAM.Types.ListAccessKeysResponse) => void): Request<IAM.Types.ListAccessKeysResponse, AWSError>;
  /**
   * Returns information about the access key IDs associated with the specified IAM user. If there are none, the action returns an empty list. Although each user is limited to a small number of keys, you can still paginate the results using the MaxItems and Marker parameters. If the UserName field is not specified, the UserName is determined implicitly based on the AWS access key ID used to sign the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users.  To ensure the security of your AWS account, the secret access key is accessible only during key and user creation. 
   */
  listAccessKeys(callback?: (err: AWSError, data: IAM.Types.ListAccessKeysResponse) => void): Request<IAM.Types.ListAccessKeysResponse, AWSError>;
  /**
   * Lists the account alias associated with the AWS account (Note: you can have only one). For information about using an AWS account alias, see Using an Alias for Your AWS Account ID in the IAM User Guide.
   */
  listAccountAliases(params: IAM.Types.ListAccountAliasesRequest, callback?: (err: AWSError, data: IAM.Types.ListAccountAliasesResponse) => void): Request<IAM.Types.ListAccountAliasesResponse, AWSError>;
  /**
   * Lists the account alias associated with the AWS account (Note: you can have only one). For information about using an AWS account alias, see Using an Alias for Your AWS Account ID in the IAM User Guide.
   */
  listAccountAliases(callback?: (err: AWSError, data: IAM.Types.ListAccountAliasesResponse) => void): Request<IAM.Types.ListAccountAliasesResponse, AWSError>;
  /**
   * Lists all managed policies that are attached to the specified IAM group. An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use the ListGroupPolicies API. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. You can use the PathPrefix parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the action returns an empty list.
   */
  listAttachedGroupPolicies(params: IAM.Types.ListAttachedGroupPoliciesRequest, callback?: (err: AWSError, data: IAM.Types.ListAttachedGroupPoliciesResponse) => void): Request<IAM.Types.ListAttachedGroupPoliciesResponse, AWSError>;
  /**
   * Lists all managed policies that are attached to the specified IAM group. An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use the ListGroupPolicies API. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. You can use the PathPrefix parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the action returns an empty list.
   */
  listAttachedGroupPolicies(callback?: (err: AWSError, data: IAM.Types.ListAttachedGroupPoliciesResponse) => void): Request<IAM.Types.ListAttachedGroupPoliciesResponse, AWSError>;
  /**
   * Lists all managed policies that are attached to the specified IAM role. An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use the ListRolePolicies API. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. You can use the PathPrefix parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the action returns an empty list.
   */
  listAttachedRolePolicies(params: IAM.Types.ListAttachedRolePoliciesRequest, callback?: (err: AWSError, data: IAM.Types.ListAttachedRolePoliciesResponse) => void): Request<IAM.Types.ListAttachedRolePoliciesResponse, AWSError>;
  /**
   * Lists all managed policies that are attached to the specified IAM role. An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use the ListRolePolicies API. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. You can use the PathPrefix parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the action returns an empty list.
   */
  listAttachedRolePolicies(callback?: (err: AWSError, data: IAM.Types.ListAttachedRolePoliciesResponse) => void): Request<IAM.Types.ListAttachedRolePoliciesResponse, AWSError>;
  /**
   * Lists all managed policies that are attached to the specified IAM user. An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use the ListUserPolicies API. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. You can use the PathPrefix parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the action returns an empty list.
   */
  listAttachedUserPolicies(params: IAM.Types.ListAttachedUserPoliciesRequest, callback?: (err: AWSError, data: IAM.Types.ListAttachedUserPoliciesResponse) => void): Request<IAM.Types.ListAttachedUserPoliciesResponse, AWSError>;
  /**
   * Lists all managed policies that are attached to the specified IAM user. An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use the ListUserPolicies API. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. You can use the PathPrefix parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the action returns an empty list.
   */
  listAttachedUserPolicies(callback?: (err: AWSError, data: IAM.Types.ListAttachedUserPoliciesResponse) => void): Request<IAM.Types.ListAttachedUserPoliciesResponse, AWSError>;
  /**
   * Lists all IAM users, groups, and roles that the specified managed policy is attached to. You can use the optional EntityFilter parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set EntityFilter to Role. You can paginate the results using the MaxItems and Marker parameters.
   */
  listEntitiesForPolicy(params: IAM.Types.ListEntitiesForPolicyRequest, callback?: (err: AWSError, data: IAM.Types.ListEntitiesForPolicyResponse) => void): Request<IAM.Types.ListEntitiesForPolicyResponse, AWSError>;
  /**
   * Lists all IAM users, groups, and roles that the specified managed policy is attached to. You can use the optional EntityFilter parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set EntityFilter to Role. You can paginate the results using the MaxItems and Marker parameters.
   */
  listEntitiesForPolicy(callback?: (err: AWSError, data: IAM.Types.ListEntitiesForPolicyResponse) => void): Request<IAM.Types.ListEntitiesForPolicyResponse, AWSError>;
  /**
   * Lists the names of the inline policies that are embedded in the specified IAM group. An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use ListAttachedGroupPolicies. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. If there are no inline policies embedded with the specified group, the action returns an empty list.
   */
  listGroupPolicies(params: IAM.Types.ListGroupPoliciesRequest, callback?: (err: AWSError, data: IAM.Types.ListGroupPoliciesResponse) => void): Request<IAM.Types.ListGroupPoliciesResponse, AWSError>;
  /**
   * Lists the names of the inline policies that are embedded in the specified IAM group. An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use ListAttachedGroupPolicies. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. If there are no inline policies embedded with the specified group, the action returns an empty list.
   */
  listGroupPolicies(callback?: (err: AWSError, data: IAM.Types.ListGroupPoliciesResponse) => void): Request<IAM.Types.ListGroupPoliciesResponse, AWSError>;
  /**
   * Lists the IAM groups that have the specified path prefix.  You can paginate the results using the MaxItems and Marker parameters.
   */
  listGroups(params: IAM.Types.ListGroupsRequest, callback?: (err: AWSError, data: IAM.Types.ListGroupsResponse) => void): Request<IAM.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists the IAM groups that have the specified path prefix.  You can paginate the results using the MaxItems and Marker parameters.
   */
  listGroups(callback?: (err: AWSError, data: IAM.Types.ListGroupsResponse) => void): Request<IAM.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists the IAM groups that the specified IAM user belongs to. You can paginate the results using the MaxItems and Marker parameters.
   */
  listGroupsForUser(params: IAM.Types.ListGroupsForUserRequest, callback?: (err: AWSError, data: IAM.Types.ListGroupsForUserResponse) => void): Request<IAM.Types.ListGroupsForUserResponse, AWSError>;
  /**
   * Lists the IAM groups that the specified IAM user belongs to. You can paginate the results using the MaxItems and Marker parameters.
   */
  listGroupsForUser(callback?: (err: AWSError, data: IAM.Types.ListGroupsForUserResponse) => void): Request<IAM.Types.ListGroupsForUserResponse, AWSError>;
  /**
   * Lists the instance profiles that have the specified path prefix. If there are none, the action returns an empty list. For more information about instance profiles, go to About Instance Profiles. You can paginate the results using the MaxItems and Marker parameters.
   */
  listInstanceProfiles(params: IAM.Types.ListInstanceProfilesRequest, callback?: (err: AWSError, data: IAM.Types.ListInstanceProfilesResponse) => void): Request<IAM.Types.ListInstanceProfilesResponse, AWSError>;
  /**
   * Lists the instance profiles that have the specified path prefix. If there are none, the action returns an empty list. For more information about instance profiles, go to About Instance Profiles. You can paginate the results using the MaxItems and Marker parameters.
   */
  listInstanceProfiles(callback?: (err: AWSError, data: IAM.Types.ListInstanceProfilesResponse) => void): Request<IAM.Types.ListInstanceProfilesResponse, AWSError>;
  /**
   * Lists the instance profiles that have the specified associated IAM role. If there are none, the action returns an empty list. For more information about instance profiles, go to About Instance Profiles. You can paginate the results using the MaxItems and Marker parameters.
   */
  listInstanceProfilesForRole(params: IAM.Types.ListInstanceProfilesForRoleRequest, callback?: (err: AWSError, data: IAM.Types.ListInstanceProfilesForRoleResponse) => void): Request<IAM.Types.ListInstanceProfilesForRoleResponse, AWSError>;
  /**
   * Lists the instance profiles that have the specified associated IAM role. If there are none, the action returns an empty list. For more information about instance profiles, go to About Instance Profiles. You can paginate the results using the MaxItems and Marker parameters.
   */
  listInstanceProfilesForRole(callback?: (err: AWSError, data: IAM.Types.ListInstanceProfilesForRoleResponse) => void): Request<IAM.Types.ListInstanceProfilesForRoleResponse, AWSError>;
  /**
   * Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this action lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request for this API. You can paginate the results using the MaxItems and Marker parameters.
   */
  listMFADevices(params: IAM.Types.ListMFADevicesRequest, callback?: (err: AWSError, data: IAM.Types.ListMFADevicesResponse) => void): Request<IAM.Types.ListMFADevicesResponse, AWSError>;
  /**
   * Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this action lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request for this API. You can paginate the results using the MaxItems and Marker parameters.
   */
  listMFADevices(callback?: (err: AWSError, data: IAM.Types.ListMFADevicesResponse) => void): Request<IAM.Types.ListMFADevicesResponse, AWSError>;
  /**
   * Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the AWS account.
   */
  listOpenIDConnectProviders(params: IAM.Types.ListOpenIDConnectProvidersRequest, callback?: (err: AWSError, data: IAM.Types.ListOpenIDConnectProvidersResponse) => void): Request<IAM.Types.ListOpenIDConnectProvidersResponse, AWSError>;
  /**
   * Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the AWS account.
   */
  listOpenIDConnectProviders(callback?: (err: AWSError, data: IAM.Types.ListOpenIDConnectProvidersResponse) => void): Request<IAM.Types.ListOpenIDConnectProvidersResponse, AWSError>;
  /**
   * Lists all the managed policies that are available in your AWS account, including your own customer-defined managed policies and all AWS managed policies. You can filter the list of policies that is returned using the optional OnlyAttached, Scope, and PathPrefix parameters. For example, to list only the customer managed policies in your AWS account, set Scope to Local. To list only AWS managed policies, set Scope to AWS. You can paginate the results using the MaxItems and Marker parameters. For more information about managed policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  listPolicies(params: IAM.Types.ListPoliciesRequest, callback?: (err: AWSError, data: IAM.Types.ListPoliciesResponse) => void): Request<IAM.Types.ListPoliciesResponse, AWSError>;
  /**
   * Lists all the managed policies that are available in your AWS account, including your own customer-defined managed policies and all AWS managed policies. You can filter the list of policies that is returned using the optional OnlyAttached, Scope, and PathPrefix parameters. For example, to list only the customer managed policies in your AWS account, set Scope to Local. To list only AWS managed policies, set Scope to AWS. You can paginate the results using the MaxItems and Marker parameters. For more information about managed policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  listPolicies(callback?: (err: AWSError, data: IAM.Types.ListPoliciesResponse) => void): Request<IAM.Types.ListPoliciesResponse, AWSError>;
  /**
   * Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version. For more information about managed policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  listPolicyVersions(params: IAM.Types.ListPolicyVersionsRequest, callback?: (err: AWSError, data: IAM.Types.ListPolicyVersionsResponse) => void): Request<IAM.Types.ListPolicyVersionsResponse, AWSError>;
  /**
   * Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version. For more information about managed policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  listPolicyVersions(callback?: (err: AWSError, data: IAM.Types.ListPolicyVersionsResponse) => void): Request<IAM.Types.ListPolicyVersionsResponse, AWSError>;
  /**
   * Lists the names of the inline policies that are embedded in the specified IAM role. An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use ListAttachedRolePolicies. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. If there are no inline policies embedded with the specified role, the action returns an empty list.
   */
  listRolePolicies(params: IAM.Types.ListRolePoliciesRequest, callback?: (err: AWSError, data: IAM.Types.ListRolePoliciesResponse) => void): Request<IAM.Types.ListRolePoliciesResponse, AWSError>;
  /**
   * Lists the names of the inline policies that are embedded in the specified IAM role. An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use ListAttachedRolePolicies. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. If there are no inline policies embedded with the specified role, the action returns an empty list.
   */
  listRolePolicies(callback?: (err: AWSError, data: IAM.Types.ListRolePoliciesResponse) => void): Request<IAM.Types.ListRolePoliciesResponse, AWSError>;
  /**
   * Lists the IAM roles that have the specified path prefix. If there are none, the action returns an empty list. For more information about roles, go to Working with Roles. You can paginate the results using the MaxItems and Marker parameters.
   */
  listRoles(params: IAM.Types.ListRolesRequest, callback?: (err: AWSError, data: IAM.Types.ListRolesResponse) => void): Request<IAM.Types.ListRolesResponse, AWSError>;
  /**
   * Lists the IAM roles that have the specified path prefix. If there are none, the action returns an empty list. For more information about roles, go to Working with Roles. You can paginate the results using the MaxItems and Marker parameters.
   */
  listRoles(callback?: (err: AWSError, data: IAM.Types.ListRolesResponse) => void): Request<IAM.Types.ListRolesResponse, AWSError>;
  /**
   * Lists the SAML provider resource objects defined in IAM in the account.   This operation requires Signature Version 4. 
   */
  listSAMLProviders(params: IAM.Types.ListSAMLProvidersRequest, callback?: (err: AWSError, data: IAM.Types.ListSAMLProvidersResponse) => void): Request<IAM.Types.ListSAMLProvidersResponse, AWSError>;
  /**
   * Lists the SAML provider resource objects defined in IAM in the account.   This operation requires Signature Version 4. 
   */
  listSAMLProviders(callback?: (err: AWSError, data: IAM.Types.ListSAMLProvidersResponse) => void): Request<IAM.Types.ListSAMLProvidersResponse, AWSError>;
  /**
   * Returns information about the SSH public keys associated with the specified IAM user. If there are none, the action returns an empty list. The SSH public keys returned by this action are used only for authenticating the IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see Set up AWS CodeCommit for SSH Connections in the AWS CodeCommit User Guide. Although each user is limited to a small number of keys, you can still paginate the results using the MaxItems and Marker parameters.
   */
  listSSHPublicKeys(params: IAM.Types.ListSSHPublicKeysRequest, callback?: (err: AWSError, data: IAM.Types.ListSSHPublicKeysResponse) => void): Request<IAM.Types.ListSSHPublicKeysResponse, AWSError>;
  /**
   * Returns information about the SSH public keys associated with the specified IAM user. If there are none, the action returns an empty list. The SSH public keys returned by this action are used only for authenticating the IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see Set up AWS CodeCommit for SSH Connections in the AWS CodeCommit User Guide. Although each user is limited to a small number of keys, you can still paginate the results using the MaxItems and Marker parameters.
   */
  listSSHPublicKeys(callback?: (err: AWSError, data: IAM.Types.ListSSHPublicKeysResponse) => void): Request<IAM.Types.ListSSHPublicKeysResponse, AWSError>;
  /**
   * Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the action returns an empty list.  You can paginate the results using the MaxItems and Marker parameters. For more information about working with server certificates, including a list of AWS services that can use the server certificates that you manage with IAM, go to Working with Server Certificates in the IAM User Guide.
   */
  listServerCertificates(params: IAM.Types.ListServerCertificatesRequest, callback?: (err: AWSError, data: IAM.Types.ListServerCertificatesResponse) => void): Request<IAM.Types.ListServerCertificatesResponse, AWSError>;
  /**
   * Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the action returns an empty list.  You can paginate the results using the MaxItems and Marker parameters. For more information about working with server certificates, including a list of AWS services that can use the server certificates that you manage with IAM, go to Working with Server Certificates in the IAM User Guide.
   */
  listServerCertificates(callback?: (err: AWSError, data: IAM.Types.ListServerCertificatesResponse) => void): Request<IAM.Types.ListServerCertificatesResponse, AWSError>;
  /**
   * Returns information about the service-specific credentials associated with the specified IAM user. If there are none, the action returns an empty list. The service-specific credentials returned by this action are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an AWS service, see Set Up service-specific credentials in the AWS CodeCommit User Guide.
   */
  listServiceSpecificCredentials(params: IAM.Types.ListServiceSpecificCredentialsRequest, callback?: (err: AWSError, data: IAM.Types.ListServiceSpecificCredentialsResponse) => void): Request<IAM.Types.ListServiceSpecificCredentialsResponse, AWSError>;
  /**
   * Returns information about the service-specific credentials associated with the specified IAM user. If there are none, the action returns an empty list. The service-specific credentials returned by this action are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an AWS service, see Set Up service-specific credentials in the AWS CodeCommit User Guide.
   */
  listServiceSpecificCredentials(callback?: (err: AWSError, data: IAM.Types.ListServiceSpecificCredentialsResponse) => void): Request<IAM.Types.ListServiceSpecificCredentialsResponse, AWSError>;
  /**
   * Returns information about the signing certificates associated with the specified IAM user. If there are none, the action returns an empty list. Although each user is limited to a small number of signing certificates, you can still paginate the results using the MaxItems and Marker parameters. If the UserName field is not specified, the user name is determined implicitly based on the AWS access key ID used to sign the request for this API. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users.
   */
  listSigningCertificates(params: IAM.Types.ListSigningCertificatesRequest, callback?: (err: AWSError, data: IAM.Types.ListSigningCertificatesResponse) => void): Request<IAM.Types.ListSigningCertificatesResponse, AWSError>;
  /**
   * Returns information about the signing certificates associated with the specified IAM user. If there are none, the action returns an empty list. Although each user is limited to a small number of signing certificates, you can still paginate the results using the MaxItems and Marker parameters. If the UserName field is not specified, the user name is determined implicitly based on the AWS access key ID used to sign the request for this API. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users.
   */
  listSigningCertificates(callback?: (err: AWSError, data: IAM.Types.ListSigningCertificatesResponse) => void): Request<IAM.Types.ListSigningCertificatesResponse, AWSError>;
  /**
   * Lists the names of the inline policies embedded in the specified IAM user. An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use ListAttachedUserPolicies. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. If there are no inline policies embedded with the specified user, the action returns an empty list.
   */
  listUserPolicies(params: IAM.Types.ListUserPoliciesRequest, callback?: (err: AWSError, data: IAM.Types.ListUserPoliciesResponse) => void): Request<IAM.Types.ListUserPoliciesResponse, AWSError>;
  /**
   * Lists the names of the inline policies embedded in the specified IAM user. An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use ListAttachedUserPolicies. For more information about policies, see Managed Policies and Inline Policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. If there are no inline policies embedded with the specified user, the action returns an empty list.
   */
  listUserPolicies(callback?: (err: AWSError, data: IAM.Types.ListUserPoliciesResponse) => void): Request<IAM.Types.ListUserPoliciesResponse, AWSError>;
  /**
   * Lists the IAM users that have the specified path prefix. If no path prefix is specified, the action returns all users in the AWS account. If there are none, the action returns an empty list. You can paginate the results using the MaxItems and Marker parameters.
   */
  listUsers(params: IAM.Types.ListUsersRequest, callback?: (err: AWSError, data: IAM.Types.ListUsersResponse) => void): Request<IAM.Types.ListUsersResponse, AWSError>;
  /**
   * Lists the IAM users that have the specified path prefix. If no path prefix is specified, the action returns all users in the AWS account. If there are none, the action returns an empty list. You can paginate the results using the MaxItems and Marker parameters.
   */
  listUsers(callback?: (err: AWSError, data: IAM.Types.ListUsersResponse) => void): Request<IAM.Types.ListUsersResponse, AWSError>;
  /**
   * Lists the virtual MFA devices defined in the AWS account by assignment status. If you do not specify an assignment status, the action returns a list of all virtual MFA devices. Assignment status can be Assigned, Unassigned, or Any. You can paginate the results using the MaxItems and Marker parameters.
   */
  listVirtualMFADevices(params: IAM.Types.ListVirtualMFADevicesRequest, callback?: (err: AWSError, data: IAM.Types.ListVirtualMFADevicesResponse) => void): Request<IAM.Types.ListVirtualMFADevicesResponse, AWSError>;
  /**
   * Lists the virtual MFA devices defined in the AWS account by assignment status. If you do not specify an assignment status, the action returns a list of all virtual MFA devices. Assignment status can be Assigned, Unassigned, or Any. You can paginate the results using the MaxItems and Marker parameters.
   */
  listVirtualMFADevices(callback?: (err: AWSError, data: IAM.Types.ListVirtualMFADevicesResponse) => void): Request<IAM.Types.ListVirtualMFADevicesResponse, AWSError>;
  /**
   * Adds or updates an inline policy document that is embedded in the specified IAM group. A user can also have managed policies attached to it. To attach a managed policy to a group, use AttachGroupPolicy. To create a new managed policy, use CreatePolicy. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide. For information about limits on the number of inline policies that you can embed in a group, see Limitations on IAM Entities in the IAM User Guide.  Because policy documents can be large, you should use POST rather than GET when calling PutGroupPolicy. For general information about using the Query API with IAM, go to Making Query Requests in the IAM User Guide. 
   */
  putGroupPolicy(params: IAM.Types.PutGroupPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or updates an inline policy document that is embedded in the specified IAM group. A user can also have managed policies attached to it. To attach a managed policy to a group, use AttachGroupPolicy. To create a new managed policy, use CreatePolicy. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide. For information about limits on the number of inline policies that you can embed in a group, see Limitations on IAM Entities in the IAM User Guide.  Because policy documents can be large, you should use POST rather than GET when calling PutGroupPolicy. For general information about using the Query API with IAM, go to Making Query Requests in the IAM User Guide. 
   */
  putGroupPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or updates an inline policy document that is embedded in the specified IAM role. When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using CreateRole. You can update a role's trust policy using UpdateAssumeRolePolicy. For more information about IAM roles, go to Using Roles to Delegate Permissions and Federate Identities. A role can also have a managed policy attached to it. To attach a managed policy to a role, use AttachRolePolicy. To create a new managed policy, use CreatePolicy. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide. For information about limits on the number of inline policies that you can embed with a role, see Limitations on IAM Entities in the IAM User Guide.  Because policy documents can be large, you should use POST rather than GET when calling PutRolePolicy. For general information about using the Query API with IAM, go to Making Query Requests in the IAM User Guide. 
   */
  putRolePolicy(params: IAM.Types.PutRolePolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or updates an inline policy document that is embedded in the specified IAM role. When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using CreateRole. You can update a role's trust policy using UpdateAssumeRolePolicy. For more information about IAM roles, go to Using Roles to Delegate Permissions and Federate Identities. A role can also have a managed policy attached to it. To attach a managed policy to a role, use AttachRolePolicy. To create a new managed policy, use CreatePolicy. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide. For information about limits on the number of inline policies that you can embed with a role, see Limitations on IAM Entities in the IAM User Guide.  Because policy documents can be large, you should use POST rather than GET when calling PutRolePolicy. For general information about using the Query API with IAM, go to Making Query Requests in the IAM User Guide. 
   */
  putRolePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or updates an inline policy document that is embedded in the specified IAM user. An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use AttachUserPolicy. To create a new managed policy, use CreatePolicy. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide. For information about limits on the number of inline policies that you can embed in a user, see Limitations on IAM Entities in the IAM User Guide.  Because policy documents can be large, you should use POST rather than GET when calling PutUserPolicy. For general information about using the Query API with IAM, go to Making Query Requests in the IAM User Guide. 
   */
  putUserPolicy(params: IAM.Types.PutUserPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or updates an inline policy document that is embedded in the specified IAM user. An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use AttachUserPolicy. To create a new managed policy, use CreatePolicy. For information about policies, see Managed Policies and Inline Policies in the IAM User Guide. For information about limits on the number of inline policies that you can embed in a user, see Limitations on IAM Entities in the IAM User Guide.  Because policy documents can be large, you should use POST rather than GET when calling PutUserPolicy. For general information about using the Query API with IAM, go to Making Query Requests in the IAM User Guide. 
   */
  putUserPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object. This action is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.
   */
  removeClientIDFromOpenIDConnectProvider(params: IAM.Types.RemoveClientIDFromOpenIDConnectProviderRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object. This action is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.
   */
  removeClientIDFromOpenIDConnectProvider(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified IAM role from the specified EC2 instance profile.  Make sure you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.   For more information about IAM roles, go to Working with Roles. For more information about instance profiles, go to About Instance Profiles.
   */
  removeRoleFromInstanceProfile(params: IAM.Types.RemoveRoleFromInstanceProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified IAM role from the specified EC2 instance profile.  Make sure you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.   For more information about IAM roles, go to Working with Roles. For more information about instance profiles, go to About Instance Profiles.
   */
  removeRoleFromInstanceProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified user from the specified group.
   */
  removeUserFromGroup(params: IAM.Types.RemoveUserFromGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified user from the specified group.
   */
  removeUserFromGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Resets the password for a service-specific credential. The new password is AWS generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.
   */
  resetServiceSpecificCredential(params: IAM.Types.ResetServiceSpecificCredentialRequest, callback?: (err: AWSError, data: IAM.Types.ResetServiceSpecificCredentialResponse) => void): Request<IAM.Types.ResetServiceSpecificCredentialResponse, AWSError>;
  /**
   * Resets the password for a service-specific credential. The new password is AWS generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.
   */
  resetServiceSpecificCredential(callback?: (err: AWSError, data: IAM.Types.ResetServiceSpecificCredentialResponse) => void): Request<IAM.Types.ResetServiceSpecificCredentialResponse, AWSError>;
  /**
   * Synchronizes the specified MFA device with its IAM resource object on the AWS servers. For more information about creating and working with virtual MFA devices, go to Using a Virtual MFA Device in the IAM User Guide.
   */
  resyncMFADevice(params: IAM.Types.ResyncMFADeviceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Synchronizes the specified MFA device with its IAM resource object on the AWS servers. For more information about creating and working with virtual MFA devices, go to Using a Virtual MFA Device in the IAM User Guide.
   */
  resyncMFADevice(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use the ListEntitiesForPolicy API. For information about managed policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  setDefaultPolicyVersion(params: IAM.Types.SetDefaultPolicyVersionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use the ListEntitiesForPolicy API. For information about managed policies, see Managed Policies and Inline Policies in the IAM User Guide.
   */
  setDefaultPolicyVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Simulate how a set of IAM policies and optionally a resource-based policy works with a list of API actions and AWS resources to determine the policies' effective permissions. The policies are provided as strings. The simulation does not perform the API actions; it only checks the authorization to determine if the simulated policies allow or deny the actions. If you want to simulate existing policies attached to an IAM user, group, or role, use SimulatePrincipalPolicy instead. Context keys are variables maintained by AWS and its services that provide details about the context of an API query request. You can use the Condition element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use GetContextKeysForCustomPolicy. If the output is long, you can use MaxItems and Marker parameters to paginate the results.
   */
  simulateCustomPolicy(params: IAM.Types.SimulateCustomPolicyRequest, callback?: (err: AWSError, data: IAM.Types.SimulatePolicyResponse) => void): Request<IAM.Types.SimulatePolicyResponse, AWSError>;
  /**
   * Simulate how a set of IAM policies and optionally a resource-based policy works with a list of API actions and AWS resources to determine the policies' effective permissions. The policies are provided as strings. The simulation does not perform the API actions; it only checks the authorization to determine if the simulated policies allow or deny the actions. If you want to simulate existing policies attached to an IAM user, group, or role, use SimulatePrincipalPolicy instead. Context keys are variables maintained by AWS and its services that provide details about the context of an API query request. You can use the Condition element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use GetContextKeysForCustomPolicy. If the output is long, you can use MaxItems and Marker parameters to paginate the results.
   */
  simulateCustomPolicy(callback?: (err: AWSError, data: IAM.Types.SimulatePolicyResponse) => void): Request<IAM.Types.SimulatePolicyResponse, AWSError>;
  /**
   * Simulate how a set of IAM policies attached to an IAM entity works with a list of API actions and AWS resources to determine the policies' effective permissions. The entity can be an IAM user, group, or role. If you specify a user, then the simulation also includes all of the policies that are attached to groups that the user belongs to . You can optionally include a list of one or more additional policies specified as strings to include in the simulation. If you want to simulate only policies specified as strings, use SimulateCustomPolicy instead. You can also optionally include one resource-based policy to be evaluated with each of the resources included in the simulation. The simulation does not perform the API actions, it only checks the authorization to determine if the simulated policies allow or deny the actions.  Note: This API discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use SimulateCustomPolicy instead. Context keys are variables maintained by AWS and its services that provide details about the context of an API query request. You can use the Condition element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use GetContextKeysForPrincipalPolicy. If the output is long, you can use the MaxItems and Marker parameters to paginate the results.
   */
  simulatePrincipalPolicy(params: IAM.Types.SimulatePrincipalPolicyRequest, callback?: (err: AWSError, data: IAM.Types.SimulatePolicyResponse) => void): Request<IAM.Types.SimulatePolicyResponse, AWSError>;
  /**
   * Simulate how a set of IAM policies attached to an IAM entity works with a list of API actions and AWS resources to determine the policies' effective permissions. The entity can be an IAM user, group, or role. If you specify a user, then the simulation also includes all of the policies that are attached to groups that the user belongs to . You can optionally include a list of one or more additional policies specified as strings to include in the simulation. If you want to simulate only policies specified as strings, use SimulateCustomPolicy instead. You can also optionally include one resource-based policy to be evaluated with each of the resources included in the simulation. The simulation does not perform the API actions, it only checks the authorization to determine if the simulated policies allow or deny the actions.  Note: This API discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use SimulateCustomPolicy instead. Context keys are variables maintained by AWS and its services that provide details about the context of an API query request. You can use the Condition element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use GetContextKeysForPrincipalPolicy. If the output is long, you can use the MaxItems and Marker parameters to paginate the results.
   */
  simulatePrincipalPolicy(callback?: (err: AWSError, data: IAM.Types.SimulatePolicyResponse) => void): Request<IAM.Types.SimulatePolicyResponse, AWSError>;
  /**
   * Changes the status of the specified access key from Active to Inactive, or vice versa. This action can be used to disable a user's key as part of a key rotation work flow. If the UserName field is not specified, the UserName is determined implicitly based on the AWS access key ID used to sign the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users. For information about rotating keys, see Managing Keys and Certificates in the IAM User Guide.
   */
  updateAccessKey(params: IAM.Types.UpdateAccessKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the status of the specified access key from Active to Inactive, or vice versa. This action can be used to disable a user's key as part of a key rotation work flow. If the UserName field is not specified, the UserName is determined implicitly based on the AWS access key ID used to sign the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users. For information about rotating keys, see Managing Keys and Certificates in the IAM User Guide.
   */
  updateAccessKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the password policy settings for the AWS account.  This action does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the Request Parameters section for each parameter's default value.   For more information about using a password policy, see Managing an IAM Password Policy in the IAM User Guide.
   */
  updateAccountPasswordPolicy(params: IAM.Types.UpdateAccountPasswordPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the password policy settings for the AWS account.  This action does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the Request Parameters section for each parameter's default value.   For more information about using a password policy, see Managing an IAM Password Policy in the IAM User Guide.
   */
  updateAccountPasswordPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, go to Using Roles to Delegate Permissions and Federate Identities.
   */
  updateAssumeRolePolicy(params: IAM.Types.UpdateAssumeRolePolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, go to Using Roles to Delegate Permissions and Federate Identities.
   */
  updateAssumeRolePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name and/or the path of the specified IAM group.   You should understand the implications of changing a group's path or name. For more information, see Renaming Users and Groups in the IAM User Guide.   To change an IAM group name the requester must have appropriate permissions on both the source object and the target object. For example, to change "Managers" to "MGRs", the entity making the request must have permission on both "Managers" and "MGRs", or must have permission on all (*). For more information about permissions, see Permissions and Policies.  
   */
  updateGroup(params: IAM.Types.UpdateGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name and/or the path of the specified IAM group.   You should understand the implications of changing a group's path or name. For more information, see Renaming Users and Groups in the IAM User Guide.   To change an IAM group name the requester must have appropriate permissions on both the source object and the target object. For example, to change "Managers" to "MGRs", the entity making the request must have permission on both "Managers" and "MGRs", or must have permission on all (*). For more information about permissions, see Permissions and Policies.  
   */
  updateGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the password for the specified IAM user. IAM users can change their own passwords by calling ChangePassword. For more information about modifying passwords, see Managing Passwords in the IAM User Guide.
   */
  updateLoginProfile(params: IAM.Types.UpdateLoginProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the password for the specified IAM user. IAM users can change their own passwords by calling ChangePassword. For more information about modifying passwords, see Managing Passwords in the IAM User Guide.
   */
  updateLoginProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints. The list that you pass with this action completely replaces the existing list of thumbprints. (The lists are not merged.) Typically, you need to update a thumbprint only when the identity provider's certificate changes, which occurs rarely. However, if the provider's certificate does change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.  Because trust for the OIDC provider is ultimately derived from the provider's certificate and is validated by the thumbprint, it is a best practice to limit access to the UpdateOpenIDConnectProviderThumbprint action to highly-privileged users. 
   */
  updateOpenIDConnectProviderThumbprint(params: IAM.Types.UpdateOpenIDConnectProviderThumbprintRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints. The list that you pass with this action completely replaces the existing list of thumbprints. (The lists are not merged.) Typically, you need to update a thumbprint only when the identity provider's certificate changes, which occurs rarely. However, if the provider's certificate does change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.  Because trust for the OIDC provider is ultimately derived from the provider's certificate and is validated by the thumbprint, it is a best practice to limit access to the UpdateOpenIDConnectProviderThumbprint action to highly-privileged users. 
   */
  updateOpenIDConnectProviderThumbprint(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Modifies the description of a role.
   */
  updateRoleDescription(params: IAM.Types.UpdateRoleDescriptionRequest, callback?: (err: AWSError, data: IAM.Types.UpdateRoleDescriptionResponse) => void): Request<IAM.Types.UpdateRoleDescriptionResponse, AWSError>;
  /**
   * Modifies the description of a role.
   */
  updateRoleDescription(callback?: (err: AWSError, data: IAM.Types.UpdateRoleDescriptionResponse) => void): Request<IAM.Types.UpdateRoleDescriptionResponse, AWSError>;
  /**
   * Updates the metadata document for an existing SAML provider resource object.  This operation requires Signature Version 4. 
   */
  updateSAMLProvider(params: IAM.Types.UpdateSAMLProviderRequest, callback?: (err: AWSError, data: IAM.Types.UpdateSAMLProviderResponse) => void): Request<IAM.Types.UpdateSAMLProviderResponse, AWSError>;
  /**
   * Updates the metadata document for an existing SAML provider resource object.  This operation requires Signature Version 4. 
   */
  updateSAMLProvider(callback?: (err: AWSError, data: IAM.Types.UpdateSAMLProviderResponse) => void): Request<IAM.Types.UpdateSAMLProviderResponse, AWSError>;
  /**
   * Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This action can be used to disable a user's SSH public key as part of a key rotation work flow. The SSH public key affected by this action is used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see Set up AWS CodeCommit for SSH Connections in the AWS CodeCommit User Guide.
   */
  updateSSHPublicKey(params: IAM.Types.UpdateSSHPublicKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This action can be used to disable a user's SSH public key as part of a key rotation work flow. The SSH public key affected by this action is used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see Set up AWS CodeCommit for SSH Connections in the AWS CodeCommit User Guide.
   */
  updateSSHPublicKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name and/or the path of the specified server certificate stored in IAM. For more information about working with server certificates, including a list of AWS services that can use the server certificates that you manage with IAM, go to Working with Server Certificates in the IAM User Guide.  You should understand the implications of changing a server certificate's path or name. For more information, see Renaming a Server Certificate in the IAM User Guide.   To change a server certificate name the requester must have appropriate permissions on both the source object and the target object. For example, to change the name from "ProductionCert" to "ProdCert", the entity making the request must have permission on "ProductionCert" and "ProdCert", or must have permission on all (*). For more information about permissions, see Access Management in the IAM User Guide. 
   */
  updateServerCertificate(params: IAM.Types.UpdateServerCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name and/or the path of the specified server certificate stored in IAM. For more information about working with server certificates, including a list of AWS services that can use the server certificates that you manage with IAM, go to Working with Server Certificates in the IAM User Guide.  You should understand the implications of changing a server certificate's path or name. For more information, see Renaming a Server Certificate in the IAM User Guide.   To change a server certificate name the requester must have appropriate permissions on both the source object and the target object. For example, to change the name from "ProductionCert" to "ProdCert", the entity making the request must have permission on "ProductionCert" and "ProdCert", or must have permission on all (*). For more information about permissions, see Access Management in the IAM User Guide. 
   */
  updateServerCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the status of a service-specific credential to Active or Inactive. Service-specific credentials that are inactive cannot be used for authentication to the service. This action can be used to disable a user’s service-specific credential as part of a credential rotation work flow.
   */
  updateServiceSpecificCredential(params: IAM.Types.UpdateServiceSpecificCredentialRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the status of a service-specific credential to Active or Inactive. Service-specific credentials that are inactive cannot be used for authentication to the service. This action can be used to disable a user’s service-specific credential as part of a credential rotation work flow.
   */
  updateServiceSpecificCredential(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the status of the specified user signing certificate from active to disabled, or vice versa. This action can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow. If the UserName field is not specified, the UserName is determined implicitly based on the AWS access key ID used to sign the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users.
   */
  updateSigningCertificate(params: IAM.Types.UpdateSigningCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the status of the specified user signing certificate from active to disabled, or vice versa. This action can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow. If the UserName field is not specified, the UserName is determined implicitly based on the AWS access key ID used to sign the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users.
   */
  updateSigningCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name and/or the path of the specified IAM user.   You should understand the implications of changing an IAM user's path or name. For more information, see Renaming an IAM User and Renaming an IAM Group in the IAM User Guide.    To change a user name the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see Permissions and Policies.  
   */
  updateUser(params: IAM.Types.UpdateUserRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name and/or the path of the specified IAM user.   You should understand the implications of changing an IAM user's path or name. For more information, see Renaming an IAM User and Renaming an IAM Group in the IAM User Guide.    To change a user name the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see Permissions and Policies.  
   */
  updateUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Uploads an SSH public key and associates it with the specified IAM user. The SSH public key uploaded by this action can be used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see Set up AWS CodeCommit for SSH Connections in the AWS CodeCommit User Guide.
   */
  uploadSSHPublicKey(params: IAM.Types.UploadSSHPublicKeyRequest, callback?: (err: AWSError, data: IAM.Types.UploadSSHPublicKeyResponse) => void): Request<IAM.Types.UploadSSHPublicKeyResponse, AWSError>;
  /**
   * Uploads an SSH public key and associates it with the specified IAM user. The SSH public key uploaded by this action can be used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see Set up AWS CodeCommit for SSH Connections in the AWS CodeCommit User Guide.
   */
  uploadSSHPublicKey(callback?: (err: AWSError, data: IAM.Types.UploadSSHPublicKeyResponse) => void): Request<IAM.Types.UploadSSHPublicKeyResponse, AWSError>;
  /**
   * Uploads a server certificate entity for the AWS account. The server certificate entity includes a public key certificate, a private key, and an optional certificate chain, which should all be PEM-encoded. We recommend that you use AWS Certificate Manager to provision, manage, and deploy your server certificates. With ACM you can request a certificate, deploy it to AWS resources, and let ACM handle certificate renewals for you. Certificates provided by ACM are free. For more information about using ACM, see the AWS Certificate Manager User Guide. For more information about working with server certificates, including a list of AWS services that can use the server certificates that you manage with IAM, go to Working with Server Certificates in the IAM User Guide. For information about the number of server certificates you can upload, see Limitations on IAM Entities and Objects in the IAM User Guide.  Because the body of the public key certificate, private key, and the certificate chain can be large, you should use POST rather than GET when calling UploadServerCertificate. For information about setting up signatures and authorization through the API, go to Signing AWS API Requests in the AWS General Reference. For general information about using the Query API with IAM, go to Calling the API by Making HTTP Query Requests in the IAM User Guide. 
   */
  uploadServerCertificate(params: IAM.Types.UploadServerCertificateRequest, callback?: (err: AWSError, data: IAM.Types.UploadServerCertificateResponse) => void): Request<IAM.Types.UploadServerCertificateResponse, AWSError>;
  /**
   * Uploads a server certificate entity for the AWS account. The server certificate entity includes a public key certificate, a private key, and an optional certificate chain, which should all be PEM-encoded. We recommend that you use AWS Certificate Manager to provision, manage, and deploy your server certificates. With ACM you can request a certificate, deploy it to AWS resources, and let ACM handle certificate renewals for you. Certificates provided by ACM are free. For more information about using ACM, see the AWS Certificate Manager User Guide. For more information about working with server certificates, including a list of AWS services that can use the server certificates that you manage with IAM, go to Working with Server Certificates in the IAM User Guide. For information about the number of server certificates you can upload, see Limitations on IAM Entities and Objects in the IAM User Guide.  Because the body of the public key certificate, private key, and the certificate chain can be large, you should use POST rather than GET when calling UploadServerCertificate. For information about setting up signatures and authorization through the API, go to Signing AWS API Requests in the AWS General Reference. For general information about using the Query API with IAM, go to Calling the API by Making HTTP Query Requests in the IAM User Guide. 
   */
  uploadServerCertificate(callback?: (err: AWSError, data: IAM.Types.UploadServerCertificateResponse) => void): Request<IAM.Types.UploadServerCertificateResponse, AWSError>;
  /**
   * Uploads an X.509 signing certificate and associates it with the specified IAM user. Some AWS services use X.509 signing certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is Active. If the UserName field is not specified, the IAM user name is determined implicitly based on the AWS access key ID used to sign the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users.  Because the body of a X.509 certificate can be large, you should use POST rather than GET when calling UploadSigningCertificate. For information about setting up signatures and authorization through the API, go to Signing AWS API Requests in the AWS General Reference. For general information about using the Query API with IAM, go to Making Query Requests in the IAM User Guide. 
   */
  uploadSigningCertificate(params: IAM.Types.UploadSigningCertificateRequest, callback?: (err: AWSError, data: IAM.Types.UploadSigningCertificateResponse) => void): Request<IAM.Types.UploadSigningCertificateResponse, AWSError>;
  /**
   * Uploads an X.509 signing certificate and associates it with the specified IAM user. Some AWS services use X.509 signing certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is Active. If the UserName field is not specified, the IAM user name is determined implicitly based on the AWS access key ID used to sign the request. Because this action works for access keys under the AWS account, you can use this action to manage root credentials even if the AWS account has no associated users.  Because the body of a X.509 certificate can be large, you should use POST rather than GET when calling UploadSigningCertificate. For information about setting up signatures and authorization through the API, go to Signing AWS API Requests in the AWS General Reference. For general information about using the Query API with IAM, go to Making Query Requests in the IAM User Guide. 
   */
  uploadSigningCertificate(callback?: (err: AWSError, data: IAM.Types.UploadSigningCertificateResponse) => void): Request<IAM.Types.UploadSigningCertificateResponse, AWSError>;
  /**
   * Waits for the instanceProfileExists state by periodically calling the underlying IAM.getInstanceProfileoperation every 1 seconds (at most 40 times).
   */
  waitFor(state: "instanceProfileExists", params: IAM.Types.GetInstanceProfileRequest, callback?: (err: AWSError, data: IAM.Types.GetInstanceProfileResponse) => void): Request<IAM.Types.GetInstanceProfileResponse, AWSError>;
  /**
   * Waits for the instanceProfileExists state by periodically calling the underlying IAM.getInstanceProfileoperation every 1 seconds (at most 40 times).
   */
  waitFor(state: "instanceProfileExists", callback?: (err: AWSError, data: IAM.Types.GetInstanceProfileResponse) => void): Request<IAM.Types.GetInstanceProfileResponse, AWSError>;
  /**
   * Waits for the userExists state by periodically calling the underlying IAM.getUseroperation every 1 seconds (at most 20 times).
   */
  waitFor(state: "userExists", params: IAM.Types.GetUserRequest, callback?: (err: AWSError, data: IAM.Types.GetUserResponse) => void): Request<IAM.Types.GetUserResponse, AWSError>;
  /**
   * Waits for the userExists state by periodically calling the underlying IAM.getUseroperation every 1 seconds (at most 20 times).
   */
  waitFor(state: "userExists", callback?: (err: AWSError, data: IAM.Types.GetUserResponse) => void): Request<IAM.Types.GetUserResponse, AWSError>;
}
declare namespace IAM {
  export interface AccessKey {
    /**
     * The name of the IAM user that the access key is associated with.
     */
    UserName: userNameType;
    /**
     * The ID for this access key.
     */
    AccessKeyId: accessKeyIdType;
    /**
     * The status of the access key. Active means the key is valid for API calls, while Inactive means it is not. 
     */
    Status: statusType;
    /**
     * The secret key used to sign requests.
     */
    SecretAccessKey: accessKeySecretType;
    /**
     * The date when the access key was created.
     */
    CreateDate?: dateType;
  }
  export interface AccessKeyLastUsed {
    /**
     * The date and time, in ISO 8601 date-time format, when the access key was most recently used. This field is null when:   The user does not have an access key.   An access key exists but has never been used, at least not since IAM started tracking this information on April 22nd, 2015.   There is no sign-in data associated with the user  
     */
    LastUsedDate: dateType;
    /**
     * The name of the AWS service with which this access key was most recently used. This field displays "N/A" when:   The user does not have an access key.   An access key exists but has never been used, at least not since IAM started tracking this information on April 22nd, 2015.   There is no sign-in data associated with the user  
     */
    ServiceName: stringType;
    /**
     * The AWS region where this access key was most recently used. This field is displays "N/A" when:   The user does not have an access key.   An access key exists but has never been used, at least not since IAM started tracking this information on April 22nd, 2015.   There is no sign-in data associated with the user   For more information about AWS regions, see Regions and Endpoints in the Amazon Web Services General Reference.
     */
    Region: stringType;
  }
  export interface AccessKeyMetadata {
    /**
     * The name of the IAM user that the key is associated with.
     */
    UserName?: userNameType;
    /**
     * The ID for this access key.
     */
    AccessKeyId?: accessKeyIdType;
    /**
     * The status of the access key. Active means the key is valid for API calls; Inactive means it is not.
     */
    Status?: statusType;
    /**
     * The date when the access key was created.
     */
    CreateDate?: dateType;
  }
  export type ActionNameListType = ActionNameType[];
  export type ActionNameType = string;
  export interface AddClientIDToOpenIDConnectProviderRequest {
    /**
     * The Amazon Resource Name (ARN) of the IAM OpenID Connect (OIDC) provider resource to add the client ID to. You can get a list of OIDC provider ARNs by using the ListOpenIDConnectProviders action.
     */
    OpenIDConnectProviderArn: arnType;
    /**
     * The client ID (also known as audience) to add to the IAM OpenID Connect provider resource.
     */
    ClientID: clientIDType;
  }
  export interface AddRoleToInstanceProfileRequest {
    /**
     * The name of the instance profile to update. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    InstanceProfileName: instanceProfileNameType;
    /**
     * The name of the role to add. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    RoleName: roleNameType;
  }
  export interface AddUserToGroupRequest {
    /**
     * The name of the group to update. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    GroupName: groupNameType;
    /**
     * The name of the user to add. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: existingUserNameType;
  }
  export type ArnListType = arnType[];
  export interface AttachGroupPolicyRequest {
    /**
     * The name (friendly name, not ARN) of the group to attach the policy to. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    GroupName: groupNameType;
    /**
     * The Amazon Resource Name (ARN) of the IAM policy you want to attach. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
  }
  export interface AttachRolePolicyRequest {
    /**
     * The name (friendly name, not ARN) of the role to attach the policy to. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    RoleName: roleNameType;
    /**
     * The Amazon Resource Name (ARN) of the IAM policy you want to attach. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
  }
  export interface AttachUserPolicyRequest {
    /**
     * The name (friendly name, not ARN) of the IAM user to attach the policy to. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: userNameType;
    /**
     * The Amazon Resource Name (ARN) of the IAM policy you want to attach. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
  }
  export interface AttachedPolicy {
    /**
     * The friendly name of the attached policy.
     */
    PolicyName?: policyNameType;
    PolicyArn?: arnType;
  }
  export type BootstrapDatum = Buffer|Uint8Array|Blob|string;
  export interface ChangePasswordRequest {
    /**
     * The IAM user's current password.
     */
    OldPassword: passwordType;
    /**
     * The new password. The new password must conform to the AWS account's password policy, if one exists. The regex pattern used to validate this parameter is a string of characters consisting of almost any printable ASCII character from the space (\u0020) through the end of the ASCII character range (\u00FF). You can also include the tab (\u0009), line feed (\u000A), and carriage return (\u000D) characters. Although any of these characters are valid in a password, note that many tools, such as the AWS Management Console, might restrict the ability to enter certain characters because they have special meaning within that tool.
     */
    NewPassword: passwordType;
  }
  export type ColumnNumber = number;
  export interface ContextEntry {
    /**
     * The full name of a condition context key, including the service prefix. For example, aws:SourceIp or s3:VersionId.
     */
    ContextKeyName?: ContextKeyNameType;
    /**
     * The value (or values, if the condition context key supports multiple values) to provide to the simulation for use when the key is referenced by a Condition element in an input policy.
     */
    ContextKeyValues?: ContextKeyValueListType;
    /**
     * The data type of the value (or values) specified in the ContextKeyValues parameter.
     */
    ContextKeyType?: ContextKeyTypeEnum;
  }
  export type ContextEntryListType = ContextEntry[];
  export type ContextKeyNameType = string;
  export type ContextKeyNamesResultListType = ContextKeyNameType[];
  export type ContextKeyTypeEnum = "string"|"stringList"|"numeric"|"numericList"|"boolean"|"booleanList"|"ip"|"ipList"|"binary"|"binaryList"|"date"|"dateList"|string;
  export type ContextKeyValueListType = ContextKeyValueType[];
  export type ContextKeyValueType = string;
  export interface CreateAccessKeyRequest {
    /**
     * The name of the IAM user that the new key will belong to. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: existingUserNameType;
  }
  export interface CreateAccessKeyResponse {
    /**
     * A structure with details about the access key.
     */
    AccessKey: AccessKey;
  }
  export interface CreateAccountAliasRequest {
    /**
     * The account alias to create. This parameter allows (per its regex pattern) a string of characters consisting of lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have two dashes in a row.
     */
    AccountAlias: accountAliasType;
  }
  export interface CreateGroupRequest {
    /**
     *  The path to the group. For more information about paths, see IAM Identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    Path?: pathType;
    /**
     * The name of the group to create. Do not include the path in this value. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-. The group name must be unique within the account. Group names are not distinguished by case. For example, you cannot create groups named both "ADMINS" and "admins".
     */
    GroupName: groupNameType;
  }
  export interface CreateGroupResponse {
    /**
     * A structure containing details about the new group.
     */
    Group: Group;
  }
  export interface CreateInstanceProfileRequest {
    /**
     * The name of the instance profile to create. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    InstanceProfileName: instanceProfileNameType;
    /**
     *  The path to the instance profile. For more information about paths, see IAM Identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    Path?: pathType;
  }
  export interface CreateInstanceProfileResponse {
    /**
     * A structure containing details about the new instance profile.
     */
    InstanceProfile: InstanceProfile;
  }
  export interface CreateLoginProfileRequest {
    /**
     * The name of the IAM user to create a password for. The user must already exist. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: userNameType;
    /**
     * The new password for the user. The regex pattern used to validate this parameter is a string of characters consisting of almost any printable ASCII character from the space (\u0020) through the end of the ASCII character range (\u00FF). You can also include the tab (\u0009), line feed (\u000A), and carriage return (\u000D) characters. Although any of these characters are valid in a password, note that many tools, such as the AWS Management Console, might restrict the ability to enter certain characters because they have special meaning within that tool.
     */
    Password: passwordType;
    /**
     * Specifies whether the user is required to set a new password on next sign-in.
     */
    PasswordResetRequired?: booleanType;
  }
  export interface CreateLoginProfileResponse {
    /**
     * A structure containing the user name and password create date.
     */
    LoginProfile: LoginProfile;
  }
  export interface CreateOpenIDConnectProviderRequest {
    /**
     * The URL of the identity provider. The URL must begin with "https://" and should correspond to the iss claim in the provider's OpenID Connect ID tokens. Per the OIDC standard, path components are allowed but query parameters are not. Typically the URL consists of only a host name, like "https://server.example.org" or "https://example.com". You cannot register the same provider multiple times in a single AWS account. If you try to submit a URL that has already been used for an OpenID Connect provider in the AWS account, you will get an error.
     */
    Url: OpenIDConnectProviderUrlType;
    /**
     * A list of client IDs (also known as audiences). When a mobile or web app registers with an OpenID Connect provider, they establish a value that identifies the application. (This is the value that's sent as the client_id parameter on OAuth requests.) You can register multiple client IDs with the same provider. For example, you might have multiple applications that use the same OIDC provider. You cannot register more than 100 client IDs with a single IAM OIDC provider. There is no defined format for a client ID. The CreateOpenIDConnectProviderRequest action accepts client IDs up to 255 characters long.
     */
    ClientIDList?: clientIDListType;
    /**
     * A list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificate(s). Typically this list includes only one entry. However, IAM lets you have up to five thumbprints for an OIDC provider. This lets you maintain multiple thumbprints if the identity provider is rotating certificates. The server certificate thumbprint is the hex-encoded SHA-1 hash value of the X.509 certificate used by the domain where the OpenID Connect provider makes its keys available. It is always a 40-character string. You must provide at least one thumbprint when creating an IAM OIDC provider. For example, if the OIDC provider is server.example.com and the provider stores its keys at "https://keys.server.example.com/openid-connect", the thumbprint string would be the hex-encoded SHA-1 hash value of the certificate used by https://keys.server.example.com. For more information about obtaining the OIDC provider's thumbprint, see Obtaining the Thumbprint for an OpenID Connect Provider in the IAM User Guide.
     */
    ThumbprintList: thumbprintListType;
  }
  export interface CreateOpenIDConnectProviderResponse {
    /**
     * The Amazon Resource Name (ARN) of the new IAM OpenID Connect provider that is created. For more information, see OpenIDConnectProviderListEntry. 
     */
    OpenIDConnectProviderArn?: arnType;
  }
  export interface CreatePolicyRequest {
    /**
     * The friendly name of the policy. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-+
     */
    PolicyName: policyNameType;
    /**
     * The path for the policy. For more information about paths, see IAM Identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    Path?: policyPathType;
    /**
     * The JSON policy document that you want to use as the content for the new policy. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    PolicyDocument: policyDocumentType;
    /**
     * A friendly description of the policy. Typically used to store information about the permissions defined in the policy. For example, "Grants access to production DynamoDB tables." The policy description is immutable. After a value is assigned, it cannot be changed.
     */
    Description?: policyDescriptionType;
  }
  export interface CreatePolicyResponse {
    /**
     * A structure containing details about the new policy.
     */
    Policy?: Policy;
  }
  export interface CreatePolicyVersionRequest {
    /**
     * The Amazon Resource Name (ARN) of the IAM policy to which you want to add a new version. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
    /**
     * The JSON policy document that you want to use as the content for this new version of the policy. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    PolicyDocument: policyDocumentType;
    /**
     * Specifies whether to set this version as the policy's default version. When this parameter is true, the new policy version becomes the operative version; that is, the version that is in effect for the IAM users, groups, and roles that the policy is attached to. For more information about managed policy versions, see Versioning for Managed Policies in the IAM User Guide.
     */
    SetAsDefault?: booleanType;
  }
  export interface CreatePolicyVersionResponse {
    /**
     * A structure containing details about the new policy version.
     */
    PolicyVersion?: PolicyVersion;
  }
  export interface CreateRoleRequest {
    /**
     *  The path to the role. For more information about paths, see IAM Identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    Path?: pathType;
    /**
     * The name of the role to create. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@- Role names are not distinguished by case. For example, you cannot create roles named both "PRODROLE" and "prodrole".
     */
    RoleName: roleNameType;
    /**
     * The trust relationship policy document that grants an entity permission to assume the role. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    AssumeRolePolicyDocument: policyDocumentType;
    /**
     * A customer-provided description of the role.
     */
    Description?: roleDescriptionType;
  }
  export interface CreateRoleResponse {
    /**
     * A structure containing details about the new role.
     */
    Role: Role;
  }
  export interface CreateSAMLProviderRequest {
    /**
     * An XML document generated by an identity provider (IdP) that supports SAML 2.0. The document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that are received from the IdP. You must generate the metadata document using the identity management software that is used as your organization's IdP. For more information, see About SAML 2.0-based Federation in the IAM User Guide 
     */
    SAMLMetadataDocument: SAMLMetadataDocumentType;
    /**
     * The name of the provider to create. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    Name: SAMLProviderNameType;
  }
  export interface CreateSAMLProviderResponse {
    /**
     * The Amazon Resource Name (ARN) of the new SAML provider resource in IAM.
     */
    SAMLProviderArn?: arnType;
  }
  export interface CreateServiceLinkedRoleRequest {
    /**
     * The AWS service to which this role is attached. You use a string similar to a URL but without the http:// in front. For example: elasticbeanstalk.amazonaws.com 
     */
    AWSServiceName: groupNameType;
    /**
     * The description of the role.
     */
    Description?: roleDescriptionType;
    /**
     * A string that you provide, which is combined with the service name to form the complete role name. If you make multiple requests for the same service, then you must supply a different CustomSuffix for each request. Otherwise the request fails with a duplicate role name error. For example, you could add -1 or -debug to the suffix.
     */
    CustomSuffix?: customSuffixType;
  }
  export interface CreateServiceLinkedRoleResponse {
    /**
     * A Role object that contains details about the newly created role.
     */
    Role?: Role;
  }
  export interface CreateServiceSpecificCredentialRequest {
    /**
     * The name of the IAM user that is to be associated with the credentials. The new service-specific credentials have the same permissions as the associated user except that they can be used only to access the specified service. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: userNameType;
    /**
     * The name of the AWS service that is to be associated with the credentials. The service you specify here is the only service that can be accessed using these credentials.
     */
    ServiceName: serviceName;
  }
  export interface CreateServiceSpecificCredentialResponse {
    /**
     * A structure that contains information about the newly created service-specific credential.  This is the only time that the password for this credential set is available. It cannot be recovered later. Instead, you will have to reset the password with ResetServiceSpecificCredential. 
     */
    ServiceSpecificCredential?: ServiceSpecificCredential;
  }
  export interface CreateUserRequest {
    /**
     *  The path for the user name. For more information about paths, see IAM Identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    Path?: pathType;
    /**
     * The name of the user to create. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-. User names are not distinguished by case. For example, you cannot create users named both "TESTUSER" and "testuser".
     */
    UserName: userNameType;
  }
  export interface CreateUserResponse {
    /**
     * A structure with details about the new IAM user.
     */
    User?: User;
  }
  export interface CreateVirtualMFADeviceRequest {
    /**
     *  The path for the virtual MFA device. For more information about paths, see IAM Identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    Path?: pathType;
    /**
     * The name of the virtual MFA device. Use with path to uniquely identify a virtual MFA device. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    VirtualMFADeviceName: virtualMFADeviceName;
  }
  export interface CreateVirtualMFADeviceResponse {
    /**
     * A structure containing details about the new virtual MFA device.
     */
    VirtualMFADevice: VirtualMFADevice;
  }
  export interface DeactivateMFADeviceRequest {
    /**
     * The name of the user whose MFA device you want to deactivate. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: existingUserNameType;
    /**
     * The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@:/-
     */
    SerialNumber: serialNumberType;
  }
  export interface DeleteAccessKeyRequest {
    /**
     * The name of the user whose access key pair you want to delete. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: existingUserNameType;
    /**
     * The access key ID for the access key ID and secret access key you want to delete. This parameter allows (per its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.
     */
    AccessKeyId: accessKeyIdType;
  }
  export interface DeleteAccountAliasRequest {
    /**
     * The name of the account alias to delete. This parameter allows (per its regex pattern) a string of characters consisting of lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have two dashes in a row.
     */
    AccountAlias: accountAliasType;
  }
  export interface DeleteGroupPolicyRequest {
    /**
     * The name (friendly name, not ARN) identifying the group that the policy is embedded in. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    GroupName: groupNameType;
    /**
     * The name identifying the policy document to delete. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-+
     */
    PolicyName: policyNameType;
  }
  export interface DeleteGroupRequest {
    /**
     * The name of the IAM group to delete. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    GroupName: groupNameType;
  }
  export interface DeleteInstanceProfileRequest {
    /**
     * The name of the instance profile to delete. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    InstanceProfileName: instanceProfileNameType;
  }
  export interface DeleteLoginProfileRequest {
    /**
     * The name of the user whose password you want to delete. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: userNameType;
  }
  export interface DeleteOpenIDConnectProviderRequest {
    /**
     * The Amazon Resource Name (ARN) of the IAM OpenID Connect provider resource object to delete. You can get a list of OpenID Connect provider resource ARNs by using the ListOpenIDConnectProviders action.
     */
    OpenIDConnectProviderArn: arnType;
  }
  export interface DeletePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the IAM policy you want to delete. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
  }
  export interface DeletePolicyVersionRequest {
    /**
     * The Amazon Resource Name (ARN) of the IAM policy from which you want to delete a version. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
    /**
     * The policy version to delete. This parameter allows (per its regex pattern) a string of characters that consists of the lowercase letter 'v' followed by one or two digits, and optionally followed by a period '.' and a string of letters and digits. For more information about managed policy versions, see Versioning for Managed Policies in the IAM User Guide.
     */
    VersionId: policyVersionIdType;
  }
  export interface DeleteRolePolicyRequest {
    /**
     * The name (friendly name, not ARN) identifying the role that the policy is embedded in. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    RoleName: roleNameType;
    /**
     * The name of the inline policy to delete from the specified IAM role. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-+
     */
    PolicyName: policyNameType;
  }
  export interface DeleteRoleRequest {
    /**
     * The name of the role to delete. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    RoleName: roleNameType;
  }
  export interface DeleteSAMLProviderRequest {
    /**
     * The Amazon Resource Name (ARN) of the SAML provider to delete.
     */
    SAMLProviderArn: arnType;
  }
  export interface DeleteSSHPublicKeyRequest {
    /**
     * The name of the IAM user associated with the SSH public key. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: userNameType;
    /**
     * The unique identifier for the SSH public key. This parameter allows (per its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.
     */
    SSHPublicKeyId: publicKeyIdType;
  }
  export interface DeleteServerCertificateRequest {
    /**
     * The name of the server certificate you want to delete. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    ServerCertificateName: serverCertificateNameType;
  }
  export interface DeleteServiceLinkedRoleRequest {
    /**
     * The name of the service-linked role to be deleted.
     */
    RoleName: roleNameType;
  }
  export interface DeleteServiceLinkedRoleResponse {
    /**
     * The deletion task identifier that you can use to check the status of the deletion. This identifier is returned in the format task/aws-service-role/&lt;service-principal-name&gt;/&lt;role-name&gt;/&lt;task-uuid&gt;.
     */
    DeletionTaskId: DeletionTaskIdType;
  }
  export interface DeleteServiceSpecificCredentialRequest {
    /**
     * The name of the IAM user associated with the service-specific credential. If this value is not specified, then the operation assumes the user whose credentials are used to call the operation. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: userNameType;
    /**
     * The unique identifier of the service-specific credential. You can get this value by calling ListServiceSpecificCredentials. This parameter allows (per its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.
     */
    ServiceSpecificCredentialId: serviceSpecificCredentialId;
  }
  export interface DeleteSigningCertificateRequest {
    /**
     * The name of the user the signing certificate belongs to. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: existingUserNameType;
    /**
     * The ID of the signing certificate to delete. The format of this parameter, as described by its regex pattern, is a string of characters that can be upper- or lower-cased letters or digits.
     */
    CertificateId: certificateIdType;
  }
  export interface DeleteUserPolicyRequest {
    /**
     * The name (friendly name, not ARN) identifying the user that the policy is embedded in. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: existingUserNameType;
    /**
     * The name identifying the policy document to delete. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-+
     */
    PolicyName: policyNameType;
  }
  export interface DeleteUserRequest {
    /**
     * The name of the user to delete. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: existingUserNameType;
  }
  export interface DeleteVirtualMFADeviceRequest {
    /**
     * The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the same as the ARN. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@:/-
     */
    SerialNumber: serialNumberType;
  }
  export interface DeletionTaskFailureReasonType {
    /**
     * A short description of the reason that the service-linked role deletion failed.
     */
    Reason?: ReasonType;
    /**
     * A list of objects that contains details about the service-linked role deletion failure. If the service-linked role has active sessions or if any resources that were used by the role have not been deleted from the linked service, the role can't be deleted. This parameter includes a list of the resources that are associated with the role and the region in which the resources are being used.
     */
    RoleUsageList?: RoleUsageListType;
  }
  export type DeletionTaskIdType = string;
  export type DeletionTaskStatusType = "SUCCEEDED"|"IN_PROGRESS"|"FAILED"|"NOT_STARTED"|string;
  export interface DetachGroupPolicyRequest {
    /**
     * The name (friendly name, not ARN) of the IAM group to detach the policy from. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    GroupName: groupNameType;
    /**
     * The Amazon Resource Name (ARN) of the IAM policy you want to detach. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
  }
  export interface DetachRolePolicyRequest {
    /**
     * The name (friendly name, not ARN) of the IAM role to detach the policy from. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    RoleName: roleNameType;
    /**
     * The Amazon Resource Name (ARN) of the IAM policy you want to detach. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
  }
  export interface DetachUserPolicyRequest {
    /**
     * The name (friendly name, not ARN) of the IAM user to detach the policy from. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: userNameType;
    /**
     * The Amazon Resource Name (ARN) of the IAM policy you want to detach. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
  }
  export interface EnableMFADeviceRequest {
    /**
     * The name of the IAM user for whom you want to enable the MFA device. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: existingUserNameType;
    /**
     * The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@:/-
     */
    SerialNumber: serialNumberType;
    /**
     * An authentication code emitted by the device.  The format for this parameter is a string of 6 digits.  Submit your request immediately after generating the authentication codes. If you generate the codes and then wait too long to submit the request, the MFA device successfully associates with the user but the MFA device becomes out of sync. This happens because time-based one-time passwords (TOTP) expire after a short period of time. If this happens, you can resync the device. 
     */
    AuthenticationCode1: authenticationCodeType;
    /**
     * A subsequent authentication code emitted by the device. The format for this parameter is a string of 6 digits.  Submit your request immediately after generating the authentication codes. If you generate the codes and then wait too long to submit the request, the MFA device successfully associates with the user but the MFA device becomes out of sync. This happens because time-based one-time passwords (TOTP) expire after a short period of time. If this happens, you can resync the device. 
     */
    AuthenticationCode2: authenticationCodeType;
  }
  export type EntityType = "User"|"Role"|"Group"|"LocalManagedPolicy"|"AWSManagedPolicy"|string;
  export type EvalDecisionDetailsType = {[key: string]: PolicyEvaluationDecisionType};
  export type EvalDecisionSourceType = string;
  export interface EvaluationResult {
    /**
     * The name of the API action tested on the indicated resource.
     */
    EvalActionName: ActionNameType;
    /**
     * The ARN of the resource that the indicated API action was tested on.
     */
    EvalResourceName?: ResourceNameType;
    /**
     * The result of the simulation.
     */
    EvalDecision: PolicyEvaluationDecisionType;
    /**
     * A list of the statements in the input policies that determine the result for this scenario. Remember that even if multiple statements allow the action on the resource, if only one statement denies that action, then the explicit deny overrides any allow, and the deny statement is the only entry included in the result.
     */
    MatchedStatements?: StatementListType;
    /**
     * A list of context keys that are required by the included input policies but that were not provided by one of the input parameters. This list is used when the resource in a simulation is "*", either explicitly, or when the ResourceArns parameter blank. If you include a list of resources, then any missing context values are instead included under the ResourceSpecificResults section. To discover the context keys used by a set of policies, you can call GetContextKeysForCustomPolicy or GetContextKeysForPrincipalPolicy.
     */
    MissingContextValues?: ContextKeyNamesResultListType;
    /**
     * A structure that details how AWS Organizations and its service control policies affect the results of the simulation. Only applies if the simulated user's account is part of an organization.
     */
    OrganizationsDecisionDetail?: OrganizationsDecisionDetail;
    /**
     * Additional details about the results of the evaluation decision. When there are both IAM policies and resource policies, this parameter explains how each set of policies contributes to the final evaluation decision. When simulating cross-account access to a resource, both the resource-based policy and the caller's IAM policy must grant access. See How IAM Roles Differ from Resource-based Policies 
     */
    EvalDecisionDetails?: EvalDecisionDetailsType;
    /**
     * The individual results of the simulation of the API action specified in EvalActionName on each resource.
     */
    ResourceSpecificResults?: ResourceSpecificResultListType;
  }
  export type EvaluationResultsListType = EvaluationResult[];
  export interface GenerateCredentialReportResponse {
    /**
     * Information about the state of the credential report.
     */
    State?: ReportStateType;
    /**
     * Information about the credential report.
     */
    Description?: ReportStateDescriptionType;
  }
  export interface GetAccessKeyLastUsedRequest {
    /**
     * The identifier of an access key. This parameter allows (per its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.
     */
    AccessKeyId: accessKeyIdType;
  }
  export interface GetAccessKeyLastUsedResponse {
    /**
     * The name of the AWS IAM user that owns this access key. 
     */
    UserName?: existingUserNameType;
    /**
     * Contains information about the last time the access key was used.
     */
    AccessKeyLastUsed?: AccessKeyLastUsed;
  }
  export interface GetAccountAuthorizationDetailsRequest {
    /**
     * A list of entity types used to filter the results. Only the entities that match the types you specify are included in the output. Use the value LocalManagedPolicy to include customer managed policies. The format for this parameter is a comma-separated (if more than one) list of strings. Each string value in the list must be one of the valid values listed below.
     */
    Filter?: entityListType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
  }
  export interface GetAccountAuthorizationDetailsResponse {
    /**
     * A list containing information about IAM users.
     */
    UserDetailList?: userDetailListType;
    /**
     * A list containing information about IAM groups.
     */
    GroupDetailList?: groupDetailListType;
    /**
     * A list containing information about IAM roles.
     */
    RoleDetailList?: roleDetailListType;
    /**
     * A list containing information about managed policies.
     */
    Policies?: ManagedPolicyDetailListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface GetAccountPasswordPolicyResponse {
    /**
     * A structure that contains details about the account's password policy.
     */
    PasswordPolicy: PasswordPolicy;
  }
  export interface GetAccountSummaryResponse {
    /**
     * A set of key value pairs containing information about IAM entity usage and IAM quotas.
     */
    SummaryMap?: summaryMapType;
  }
  export interface GetContextKeysForCustomPolicyRequest {
    /**
     * A list of policies for which you want the list of context keys referenced in those policies. Each document is specified as a string containing the complete, valid JSON text of an IAM policy. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    PolicyInputList: SimulationPolicyListType;
  }
  export interface GetContextKeysForPolicyResponse {
    /**
     * The list of context keys that are referenced in the input policies.
     */
    ContextKeyNames?: ContextKeyNamesResultListType;
  }
  export interface GetContextKeysForPrincipalPolicyRequest {
    /**
     * The ARN of a user, group, or role whose policies contain the context keys that you want listed. If you specify a user, the list includes context keys that are found in all policies attached to the user as well as to all groups that the user is a member of. If you pick a group or a role, then it includes only those context keys that are found in policies attached to that entity. Note that all parameters are shown in unencoded form here for clarity, but must be URL encoded to be included as a part of a real HTML request. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicySourceArn: arnType;
    /**
     * An optional list of additional policies for which you want the list of context keys that are referenced. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    PolicyInputList?: SimulationPolicyListType;
  }
  export interface GetCredentialReportResponse {
    /**
     * Contains the credential report. The report is Base64-encoded.
     */
    Content?: ReportContentType;
    /**
     * The format (MIME type) of the credential report.
     */
    ReportFormat?: ReportFormatType;
    /**
     *  The date and time when the credential report was created, in ISO 8601 date-time format.
     */
    GeneratedTime?: dateType;
  }
  export interface GetGroupPolicyRequest {
    /**
     * The name of the group the policy is associated with. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    GroupName: groupNameType;
    /**
     * The name of the policy document to get. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-+
     */
    PolicyName: policyNameType;
  }
  export interface GetGroupPolicyResponse {
    /**
     * The group the policy is associated with.
     */
    GroupName: groupNameType;
    /**
     * The name of the policy.
     */
    PolicyName: policyNameType;
    /**
     * The policy document.
     */
    PolicyDocument: policyDocumentType;
  }
  export interface GetGroupRequest {
    /**
     * The name of the group. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    GroupName: groupNameType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface GetGroupResponse {
    /**
     * A structure that contains details about the group.
     */
    Group: Group;
    /**
     * A list of users in the group.
     */
    Users: userListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface GetInstanceProfileRequest {
    /**
     * The name of the instance profile to get information about. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    InstanceProfileName: instanceProfileNameType;
  }
  export interface GetInstanceProfileResponse {
    /**
     * A structure containing details about the instance profile.
     */
    InstanceProfile: InstanceProfile;
  }
  export interface GetLoginProfileRequest {
    /**
     * The name of the user whose login profile you want to retrieve. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: userNameType;
  }
  export interface GetLoginProfileResponse {
    /**
     * A structure containing the user name and password create date for the user.
     */
    LoginProfile: LoginProfile;
  }
  export interface GetOpenIDConnectProviderRequest {
    /**
     * The Amazon Resource Name (ARN) of the OIDC provider resource object in IAM to get information for. You can get a list of OIDC provider resource ARNs by using the ListOpenIDConnectProviders action. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    OpenIDConnectProviderArn: arnType;
  }
  export interface GetOpenIDConnectProviderResponse {
    /**
     * The URL that the IAM OIDC provider resource object is associated with. For more information, see CreateOpenIDConnectProvider.
     */
    Url?: OpenIDConnectProviderUrlType;
    /**
     * A list of client IDs (also known as audiences) that are associated with the specified IAM OIDC provider resource object. For more information, see CreateOpenIDConnectProvider.
     */
    ClientIDList?: clientIDListType;
    /**
     * A list of certificate thumbprints that are associated with the specified IAM OIDC provider resource object. For more information, see CreateOpenIDConnectProvider. 
     */
    ThumbprintList?: thumbprintListType;
    /**
     * The date and time when the IAM OIDC provider resource object was created in the AWS account.
     */
    CreateDate?: dateType;
  }
  export interface GetPolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the managed policy that you want information about. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
  }
  export interface GetPolicyResponse {
    /**
     * A structure containing details about the policy.
     */
    Policy?: Policy;
  }
  export interface GetPolicyVersionRequest {
    /**
     * The Amazon Resource Name (ARN) of the managed policy that you want information about. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
    /**
     * Identifies the policy version to retrieve. This parameter allows (per its regex pattern) a string of characters that consists of the lowercase letter 'v' followed by one or two digits, and optionally followed by a period '.' and a string of letters and digits.
     */
    VersionId: policyVersionIdType;
  }
  export interface GetPolicyVersionResponse {
    /**
     * A structure containing details about the policy version.
     */
    PolicyVersion?: PolicyVersion;
  }
  export interface GetRolePolicyRequest {
    /**
     * The name of the role associated with the policy. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    RoleName: roleNameType;
    /**
     * The name of the policy document to get. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-+
     */
    PolicyName: policyNameType;
  }
  export interface GetRolePolicyResponse {
    /**
     * The role the policy is associated with.
     */
    RoleName: roleNameType;
    /**
     * The name of the policy.
     */
    PolicyName: policyNameType;
    /**
     * The policy document.
     */
    PolicyDocument: policyDocumentType;
  }
  export interface GetRoleRequest {
    /**
     * The name of the IAM role to get information about. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    RoleName: roleNameType;
  }
  export interface GetRoleResponse {
    /**
     * A structure containing details about the IAM role.
     */
    Role: Role;
  }
  export interface GetSAMLProviderRequest {
    /**
     * The Amazon Resource Name (ARN) of the SAML provider resource object in IAM to get information about. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    SAMLProviderArn: arnType;
  }
  export interface GetSAMLProviderResponse {
    /**
     * The XML metadata document that includes information about an identity provider.
     */
    SAMLMetadataDocument?: SAMLMetadataDocumentType;
    /**
     * The date and time when the SAML provider was created.
     */
    CreateDate?: dateType;
    /**
     * The expiration date and time for the SAML provider.
     */
    ValidUntil?: dateType;
  }
  export interface GetSSHPublicKeyRequest {
    /**
     * The name of the IAM user associated with the SSH public key. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: userNameType;
    /**
     * The unique identifier for the SSH public key. This parameter allows (per its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.
     */
    SSHPublicKeyId: publicKeyIdType;
    /**
     * Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use SSH. To retrieve the public key in PEM format, use PEM.
     */
    Encoding: encodingType;
  }
  export interface GetSSHPublicKeyResponse {
    /**
     * A structure containing details about the SSH public key.
     */
    SSHPublicKey?: SSHPublicKey;
  }
  export interface GetServerCertificateRequest {
    /**
     * The name of the server certificate you want to retrieve information about. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    ServerCertificateName: serverCertificateNameType;
  }
  export interface GetServerCertificateResponse {
    /**
     * A structure containing details about the server certificate.
     */
    ServerCertificate: ServerCertificate;
  }
  export interface GetServiceLinkedRoleDeletionStatusRequest {
    /**
     * The deletion task identifier. This identifier is returned by the DeleteServiceLinkedRole operation in the format task/aws-service-role/&lt;service-principal-name&gt;/&lt;role-name&gt;/&lt;task-uuid&gt;.
     */
    DeletionTaskId: DeletionTaskIdType;
  }
  export interface GetServiceLinkedRoleDeletionStatusResponse {
    /**
     * The status of the deletion.
     */
    Status: DeletionTaskStatusType;
    /**
     * An object that contains details about the reason the deletion failed.
     */
    Reason?: DeletionTaskFailureReasonType;
  }
  export interface GetUserPolicyRequest {
    /**
     * The name of the user who the policy is associated with. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: existingUserNameType;
    /**
     * The name of the policy document to get. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-+
     */
    PolicyName: policyNameType;
  }
  export interface GetUserPolicyResponse {
    /**
     * The user the policy is associated with.
     */
    UserName: existingUserNameType;
    /**
     * The name of the policy.
     */
    PolicyName: policyNameType;
    /**
     * The policy document.
     */
    PolicyDocument: policyDocumentType;
  }
  export interface GetUserRequest {
    /**
     * The name of the user to get information about. This parameter is optional. If it is not included, it defaults to the user making the request. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: existingUserNameType;
  }
  export interface GetUserResponse {
    /**
     * A structure containing details about the IAM user.
     */
    User: User;
  }
  export interface Group {
    /**
     * The path to the group. For more information about paths, see IAM Identifiers in the Using IAM guide. 
     */
    Path: pathType;
    /**
     * The friendly name that identifies the group.
     */
    GroupName: groupNameType;
    /**
     *  The stable and unique string identifying the group. For more information about IDs, see IAM Identifiers in the Using IAM guide. 
     */
    GroupId: idType;
    /**
     *  The Amazon Resource Name (ARN) specifying the group. For more information about ARNs and how to use them in policies, see IAM Identifiers in the Using IAM guide. 
     */
    Arn: arnType;
    /**
     * The date and time, in ISO 8601 date-time format, when the group was created.
     */
    CreateDate: dateType;
  }
  export interface GroupDetail {
    /**
     * The path to the group. For more information about paths, see IAM Identifiers in the Using IAM guide.
     */
    Path?: pathType;
    /**
     * The friendly name that identifies the group.
     */
    GroupName?: groupNameType;
    /**
     * The stable and unique string identifying the group. For more information about IDs, see IAM Identifiers in the Using IAM guide.
     */
    GroupId?: idType;
    Arn?: arnType;
    /**
     * The date and time, in ISO 8601 date-time format, when the group was created.
     */
    CreateDate?: dateType;
    /**
     * A list of the inline policies embedded in the group.
     */
    GroupPolicyList?: policyDetailListType;
    /**
     * A list of the managed policies attached to the group.
     */
    AttachedManagedPolicies?: attachedPoliciesListType;
  }
  export interface InstanceProfile {
    /**
     *  The path to the instance profile. For more information about paths, see IAM Identifiers in the Using IAM guide. 
     */
    Path: pathType;
    /**
     * The name identifying the instance profile.
     */
    InstanceProfileName: instanceProfileNameType;
    /**
     *  The stable and unique string identifying the instance profile. For more information about IDs, see IAM Identifiers in the Using IAM guide. 
     */
    InstanceProfileId: idType;
    /**
     *  The Amazon Resource Name (ARN) specifying the instance profile. For more information about ARNs and how to use them in policies, see IAM Identifiers in the Using IAM guide. 
     */
    Arn: arnType;
    /**
     * The date when the instance profile was created.
     */
    CreateDate: dateType;
    /**
     * The role associated with the instance profile.
     */
    Roles: roleListType;
  }
  export type LineNumber = number;
  export interface ListAccessKeysRequest {
    /**
     * The name of the user. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: existingUserNameType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListAccessKeysResponse {
    /**
     * A list of objects containing metadata about the access keys.
     */
    AccessKeyMetadata: accessKeyMetadataListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListAccountAliasesRequest {
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListAccountAliasesResponse {
    /**
     * A list of aliases associated with the account. AWS supports only one alias per account.
     */
    AccountAliases: accountAliasListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListAttachedGroupPoliciesRequest {
    /**
     * The name (friendly name, not ARN) of the group to list attached policies for. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    GroupName: groupNameType;
    /**
     * The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all policies. This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    PathPrefix?: policyPathType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListAttachedGroupPoliciesResponse {
    /**
     * A list of the attached policies.
     */
    AttachedPolicies?: attachedPoliciesListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListAttachedRolePoliciesRequest {
    /**
     * The name (friendly name, not ARN) of the role to list attached policies for. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    RoleName: roleNameType;
    /**
     * The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all policies. This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    PathPrefix?: policyPathType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListAttachedRolePoliciesResponse {
    /**
     * A list of the attached policies.
     */
    AttachedPolicies?: attachedPoliciesListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListAttachedUserPoliciesRequest {
    /**
     * The name (friendly name, not ARN) of the user to list attached policies for. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: userNameType;
    /**
     * The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all policies. This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    PathPrefix?: policyPathType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListAttachedUserPoliciesResponse {
    /**
     * A list of the attached policies.
     */
    AttachedPolicies?: attachedPoliciesListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListEntitiesForPolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the IAM policy for which you want the versions. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
    /**
     * The entity type to use for filtering the results. For example, when EntityFilter is Role, only the roles that are attached to the specified policy are returned. This parameter is optional. If it is not included, all attached entities (users, groups, and roles) are returned. The argument for this parameter must be one of the valid values listed below.
     */
    EntityFilter?: EntityType;
    /**
     * The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all entities. This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    PathPrefix?: pathType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListEntitiesForPolicyResponse {
    /**
     * A list of IAM groups that the policy is attached to.
     */
    PolicyGroups?: PolicyGroupListType;
    /**
     * A list of IAM users that the policy is attached to.
     */
    PolicyUsers?: PolicyUserListType;
    /**
     * A list of IAM roles that the policy is attached to.
     */
    PolicyRoles?: PolicyRoleListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListGroupPoliciesRequest {
    /**
     * The name of the group to list policies for. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    GroupName: groupNameType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListGroupPoliciesResponse {
    /**
     * A list of policy names. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-+
     */
    PolicyNames: policyNameListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListGroupsForUserRequest {
    /**
     * The name of the user to list groups for. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: existingUserNameType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListGroupsForUserResponse {
    /**
     * A list of groups.
     */
    Groups: groupListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListGroupsRequest {
    /**
     *  The path prefix for filtering the results. For example, the prefix /division_abc/subdivision_xyz/ gets all groups whose path starts with /division_abc/subdivision_xyz/. This parameter is optional. If it is not included, it defaults to a slash (/), listing all groups. This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    PathPrefix?: pathPrefixType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListGroupsResponse {
    /**
     * A list of groups.
     */
    Groups: groupListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListInstanceProfilesForRoleRequest {
    /**
     * The name of the role to list instance profiles for. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    RoleName: roleNameType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListInstanceProfilesForRoleResponse {
    /**
     * A list of instance profiles.
     */
    InstanceProfiles: instanceProfileListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListInstanceProfilesRequest {
    /**
     *  The path prefix for filtering the results. For example, the prefix /application_abc/component_xyz/ gets all instance profiles whose path starts with /application_abc/component_xyz/. This parameter is optional. If it is not included, it defaults to a slash (/), listing all instance profiles. This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    PathPrefix?: pathPrefixType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListInstanceProfilesResponse {
    /**
     * A list of instance profiles.
     */
    InstanceProfiles: instanceProfileListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListMFADevicesRequest {
    /**
     * The name of the user whose MFA devices you want to list. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: existingUserNameType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListMFADevicesResponse {
    /**
     * A list of MFA devices.
     */
    MFADevices: mfaDeviceListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListOpenIDConnectProvidersRequest {
  }
  export interface ListOpenIDConnectProvidersResponse {
    /**
     * The list of IAM OIDC provider resource objects defined in the AWS account.
     */
    OpenIDConnectProviderList?: OpenIDConnectProviderListType;
  }
  export interface ListPoliciesRequest {
    /**
     * The scope to use for filtering the results. To list only AWS managed policies, set Scope to AWS. To list only the customer managed policies in your AWS account, set Scope to Local. This parameter is optional. If it is not included, or if it is set to All, all policies are returned.
     */
    Scope?: policyScopeType;
    /**
     * A flag to filter the results to only the attached policies. When OnlyAttached is true, the returned list contains only the policies that are attached to an IAM user, group, or role. When OnlyAttached is false, or when the parameter is not included, all policies are returned.
     */
    OnlyAttached?: booleanType;
    /**
     * The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all policies. This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    PathPrefix?: policyPathType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListPoliciesResponse {
    /**
     * A list of policies.
     */
    Policies?: policyListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListPolicyVersionsRequest {
    /**
     * The Amazon Resource Name (ARN) of the IAM policy for which you want the versions. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListPolicyVersionsResponse {
    /**
     * A list of policy versions. For more information about managed policy versions, see Versioning for Managed Policies in the IAM User Guide.
     */
    Versions?: policyDocumentVersionListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListRolePoliciesRequest {
    /**
     * The name of the role to list policies for. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    RoleName: roleNameType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListRolePoliciesResponse {
    /**
     * A list of policy names.
     */
    PolicyNames: policyNameListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListRolesRequest {
    /**
     *  The path prefix for filtering the results. For example, the prefix /application_abc/component_xyz/ gets all roles whose path starts with /application_abc/component_xyz/. This parameter is optional. If it is not included, it defaults to a slash (/), listing all roles. This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    PathPrefix?: pathPrefixType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListRolesResponse {
    /**
     * A list of roles.
     */
    Roles: roleListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListSAMLProvidersRequest {
  }
  export interface ListSAMLProvidersResponse {
    /**
     * The list of SAML provider resource objects defined in IAM for this AWS account.
     */
    SAMLProviderList?: SAMLProviderListType;
  }
  export interface ListSSHPublicKeysRequest {
    /**
     * The name of the IAM user to list SSH public keys for. If none is specified, the UserName field is determined implicitly based on the AWS access key used to sign the request. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: userNameType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListSSHPublicKeysResponse {
    /**
     * A list of the SSH public keys assigned to IAM user.
     */
    SSHPublicKeys?: SSHPublicKeyListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListServerCertificatesRequest {
    /**
     *  The path prefix for filtering the results. For example: /company/servercerts would get all server certificates for which the path starts with /company/servercerts. This parameter is optional. If it is not included, it defaults to a slash (/), listing all server certificates. This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    PathPrefix?: pathPrefixType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListServerCertificatesResponse {
    /**
     * A list of server certificates.
     */
    ServerCertificateMetadataList: serverCertificateMetadataListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListServiceSpecificCredentialsRequest {
    /**
     * The name of the user whose service-specific credentials you want information about. If this value is not specified then the operation assumes the user whose credentials are used to call the operation. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: userNameType;
    /**
     * Filters the returned results to only those for the specified AWS service. If not specified, then AWS returns service-specific credentials for all services.
     */
    ServiceName?: serviceName;
  }
  export interface ListServiceSpecificCredentialsResponse {
    /**
     * A list of structures that each contain details about a service-specific credential.
     */
    ServiceSpecificCredentials?: ServiceSpecificCredentialsListType;
  }
  export interface ListSigningCertificatesRequest {
    /**
     * The name of the IAM user whose signing certificates you want to examine. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: existingUserNameType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListSigningCertificatesResponse {
    /**
     * A list of the user's signing certificate information.
     */
    Certificates: certificateListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListUserPoliciesRequest {
    /**
     * The name of the user to list policies for. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: existingUserNameType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListUserPoliciesResponse {
    /**
     * A list of policy names.
     */
    PolicyNames: policyNameListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListUsersRequest {
    /**
     *  The path prefix for filtering the results. For example: /division_abc/subdivision_xyz/, which would get all user names whose path starts with /division_abc/subdivision_xyz/. This parameter is optional. If it is not included, it defaults to a slash (/), listing all user names. This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    PathPrefix?: pathPrefixType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListUsersResponse {
    /**
     * A list of users.
     */
    Users: userListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface ListVirtualMFADevicesRequest {
    /**
     *  The status (Unassigned or Assigned) of the devices to list. If you do not specify an AssignmentStatus, the action defaults to Any which lists both assigned and unassigned virtual MFA devices.
     */
    AssignmentStatus?: assignmentStatusType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
  }
  export interface ListVirtualMFADevicesResponse {
    /**
     *  The list of virtual MFA devices in the current account that match the AssignmentStatus value that was passed in the request.
     */
    VirtualMFADevices: virtualMFADeviceListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface LoginProfile {
    /**
     * The name of the user, which can be used for signing in to the AWS Management Console.
     */
    UserName: userNameType;
    /**
     * The date when the password for the user was created.
     */
    CreateDate: dateType;
    /**
     * Specifies whether the user is required to set a new password on next sign-in.
     */
    PasswordResetRequired?: booleanType;
  }
  export interface MFADevice {
    /**
     * The user with whom the MFA device is associated.
     */
    UserName: userNameType;
    /**
     * The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN.
     */
    SerialNumber: serialNumberType;
    /**
     * The date when the MFA device was enabled for the user.
     */
    EnableDate: dateType;
  }
  export interface ManagedPolicyDetail {
    /**
     * The friendly name (not ARN) identifying the policy.
     */
    PolicyName?: policyNameType;
    /**
     * The stable and unique string identifying the policy. For more information about IDs, see IAM Identifiers in the Using IAM guide.
     */
    PolicyId?: idType;
    Arn?: arnType;
    /**
     * The path to the policy. For more information about paths, see IAM Identifiers in the Using IAM guide.
     */
    Path?: policyPathType;
    /**
     * The identifier for the version of the policy that is set as the default (operative) version. For more information about policy versions, see Versioning for Managed Policies in the Using IAM guide. 
     */
    DefaultVersionId?: policyVersionIdType;
    /**
     * The number of principal entities (users, groups, and roles) that the policy is attached to.
     */
    AttachmentCount?: attachmentCountType;
    /**
     * Specifies whether the policy can be attached to an IAM user, group, or role.
     */
    IsAttachable?: booleanType;
    /**
     * A friendly description of the policy.
     */
    Description?: policyDescriptionType;
    /**
     * The date and time, in ISO 8601 date-time format, when the policy was created.
     */
    CreateDate?: dateType;
    /**
     * The date and time, in ISO 8601 date-time format, when the policy was last updated. When a policy has only one version, this field contains the date and time when the policy was created. When a policy has more than one version, this field contains the date and time when the most recent policy version was created.
     */
    UpdateDate?: dateType;
    /**
     * A list containing information about the versions of the policy.
     */
    PolicyVersionList?: policyDocumentVersionListType;
  }
  export type ManagedPolicyDetailListType = ManagedPolicyDetail[];
  export interface OpenIDConnectProviderListEntry {
    Arn?: arnType;
  }
  export type OpenIDConnectProviderListType = OpenIDConnectProviderListEntry[];
  export type OpenIDConnectProviderUrlType = string;
  export interface OrganizationsDecisionDetail {
    /**
     * Specifies whether the simulated action is allowed by the AWS Organizations service control policies that impact the simulated user's account.
     */
    AllowedByOrganizations?: booleanType;
  }
  export interface PasswordPolicy {
    /**
     * Minimum length to require for IAM user passwords.
     */
    MinimumPasswordLength?: minimumPasswordLengthType;
    /**
     * Specifies whether to require symbols for IAM user passwords.
     */
    RequireSymbols?: booleanType;
    /**
     * Specifies whether to require numbers for IAM user passwords.
     */
    RequireNumbers?: booleanType;
    /**
     * Specifies whether to require uppercase characters for IAM user passwords.
     */
    RequireUppercaseCharacters?: booleanType;
    /**
     * Specifies whether to require lowercase characters for IAM user passwords.
     */
    RequireLowercaseCharacters?: booleanType;
    /**
     * Specifies whether IAM users are allowed to change their own password.
     */
    AllowUsersToChangePassword?: booleanType;
    /**
     * Indicates whether passwords in the account expire. Returns true if MaxPasswordAge is contains a value greater than 0. Returns false if MaxPasswordAge is 0 or not present.
     */
    ExpirePasswords?: booleanType;
    /**
     * The number of days that an IAM user password is valid.
     */
    MaxPasswordAge?: maxPasswordAgeType;
    /**
     * Specifies the number of previous passwords that IAM users are prevented from reusing.
     */
    PasswordReusePrevention?: passwordReusePreventionType;
    /**
     * Specifies whether IAM users are prevented from setting a new password after their password has expired.
     */
    HardExpiry?: booleanObjectType;
  }
  export interface Policy {
    /**
     * The friendly name (not ARN) identifying the policy.
     */
    PolicyName?: policyNameType;
    /**
     * The stable and unique string identifying the policy. For more information about IDs, see IAM Identifiers in the Using IAM guide.
     */
    PolicyId?: idType;
    Arn?: arnType;
    /**
     * The path to the policy. For more information about paths, see IAM Identifiers in the Using IAM guide.
     */
    Path?: policyPathType;
    /**
     * The identifier for the version of the policy that is set as the default version.
     */
    DefaultVersionId?: policyVersionIdType;
    /**
     * The number of entities (users, groups, and roles) that the policy is attached to.
     */
    AttachmentCount?: attachmentCountType;
    /**
     * Specifies whether the policy can be attached to an IAM user, group, or role.
     */
    IsAttachable?: booleanType;
    /**
     * A friendly description of the policy. This element is included in the response to the GetPolicy operation. It is not included in the response to the ListPolicies operation. 
     */
    Description?: policyDescriptionType;
    /**
     * The date and time, in ISO 8601 date-time format, when the policy was created.
     */
    CreateDate?: dateType;
    /**
     * The date and time, in ISO 8601 date-time format, when the policy was last updated. When a policy has only one version, this field contains the date and time when the policy was created. When a policy has more than one version, this field contains the date and time when the most recent policy version was created.
     */
    UpdateDate?: dateType;
  }
  export interface PolicyDetail {
    /**
     * The name of the policy.
     */
    PolicyName?: policyNameType;
    /**
     * The policy document.
     */
    PolicyDocument?: policyDocumentType;
  }
  export type PolicyEvaluationDecisionType = "allowed"|"explicitDeny"|"implicitDeny"|string;
  export interface PolicyGroup {
    /**
     * The name (friendly name, not ARN) identifying the group.
     */
    GroupName?: groupNameType;
    /**
     * The stable and unique string identifying the group. For more information about IDs, see IAM Identifiers in the IAM User Guide.
     */
    GroupId?: idType;
  }
  export type PolicyGroupListType = PolicyGroup[];
  export type PolicyIdentifierType = string;
  export interface PolicyRole {
    /**
     * The name (friendly name, not ARN) identifying the role.
     */
    RoleName?: roleNameType;
    /**
     * The stable and unique string identifying the role. For more information about IDs, see IAM Identifiers in the IAM User Guide.
     */
    RoleId?: idType;
  }
  export type PolicyRoleListType = PolicyRole[];
  export type PolicySourceType = "user"|"group"|"role"|"aws-managed"|"user-managed"|"resource"|"none"|string;
  export interface PolicyUser {
    /**
     * The name (friendly name, not ARN) identifying the user.
     */
    UserName?: userNameType;
    /**
     * The stable and unique string identifying the user. For more information about IDs, see IAM Identifiers in the IAM User Guide.
     */
    UserId?: idType;
  }
  export type PolicyUserListType = PolicyUser[];
  export interface PolicyVersion {
    /**
     * The policy document. The policy document is returned in the response to the GetPolicyVersion and GetAccountAuthorizationDetails operations. It is not returned in the response to the CreatePolicyVersion or ListPolicyVersions operations. 
     */
    Document?: policyDocumentType;
    /**
     * The identifier for the policy version. Policy version identifiers always begin with v (always lowercase). When a policy is created, the first policy version is v1. 
     */
    VersionId?: policyVersionIdType;
    /**
     * Specifies whether the policy version is set as the policy's default version.
     */
    IsDefaultVersion?: booleanType;
    /**
     * The date and time, in ISO 8601 date-time format, when the policy version was created.
     */
    CreateDate?: dateType;
  }
  export interface Position {
    /**
     * The line containing the specified position in the document.
     */
    Line?: LineNumber;
    /**
     * The column in the line containing the specified position in the document.
     */
    Column?: ColumnNumber;
  }
  export interface PutGroupPolicyRequest {
    /**
     * The name of the group to associate the policy with. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    GroupName: groupNameType;
    /**
     * The name of the policy document. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-+
     */
    PolicyName: policyNameType;
    /**
     * The policy document. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    PolicyDocument: policyDocumentType;
  }
  export interface PutRolePolicyRequest {
    /**
     * The name of the role to associate the policy with. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    RoleName: roleNameType;
    /**
     * The name of the policy document. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-+
     */
    PolicyName: policyNameType;
    /**
     * The policy document. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    PolicyDocument: policyDocumentType;
  }
  export interface PutUserPolicyRequest {
    /**
     * The name of the user to associate the policy with. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: existingUserNameType;
    /**
     * The name of the policy document. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-+
     */
    PolicyName: policyNameType;
    /**
     * The policy document. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    PolicyDocument: policyDocumentType;
  }
  export type ReasonType = string;
  export type RegionNameType = string;
  export interface RemoveClientIDFromOpenIDConnectProviderRequest {
    /**
     * The Amazon Resource Name (ARN) of the IAM OIDC provider resource to remove the client ID from. You can get a list of OIDC provider ARNs by using the ListOpenIDConnectProviders action. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    OpenIDConnectProviderArn: arnType;
    /**
     * The client ID (also known as audience) to remove from the IAM OIDC provider resource. For more information about client IDs, see CreateOpenIDConnectProvider.
     */
    ClientID: clientIDType;
  }
  export interface RemoveRoleFromInstanceProfileRequest {
    /**
     * The name of the instance profile to update. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    InstanceProfileName: instanceProfileNameType;
    /**
     * The name of the role to remove. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    RoleName: roleNameType;
  }
  export interface RemoveUserFromGroupRequest {
    /**
     * The name of the group to update. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    GroupName: groupNameType;
    /**
     * The name of the user to remove. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: existingUserNameType;
  }
  export type ReportContentType = Buffer|Uint8Array|Blob|string;
  export type ReportFormatType = "text/csv"|string;
  export type ReportStateDescriptionType = string;
  export type ReportStateType = "STARTED"|"INPROGRESS"|"COMPLETE"|string;
  export interface ResetServiceSpecificCredentialRequest {
    /**
     * The name of the IAM user associated with the service-specific credential. If this value is not specified, then the operation assumes the user whose credentials are used to call the operation. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: userNameType;
    /**
     * The unique identifier of the service-specific credential. This parameter allows (per its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.
     */
    ServiceSpecificCredentialId: serviceSpecificCredentialId;
  }
  export interface ResetServiceSpecificCredentialResponse {
    /**
     * A structure with details about the updated service-specific credential, including the new password.  This is the only time that you can access the password. You cannot recover the password later, but you can reset it again. 
     */
    ServiceSpecificCredential?: ServiceSpecificCredential;
  }
  export type ResourceHandlingOptionType = string;
  export type ResourceNameListType = ResourceNameType[];
  export type ResourceNameType = string;
  export interface ResourceSpecificResult {
    /**
     * The name of the simulated resource, in Amazon Resource Name (ARN) format.
     */
    EvalResourceName: ResourceNameType;
    /**
     * The result of the simulation of the simulated API action on the resource specified in EvalResourceName.
     */
    EvalResourceDecision: PolicyEvaluationDecisionType;
    /**
     * A list of the statements in the input policies that determine the result for this part of the simulation. Remember that even if multiple statements allow the action on the resource, if any statement denies that action, then the explicit deny overrides any allow, and the deny statement is the only entry included in the result.
     */
    MatchedStatements?: StatementListType;
    /**
     * A list of context keys that are required by the included input policies but that were not provided by one of the input parameters. This list is used when a list of ARNs is included in the ResourceArns parameter instead of "*". If you do not specify individual resources, by setting ResourceArns to "*" or by not including the ResourceArns parameter, then any missing context values are instead included under the EvaluationResults section. To discover the context keys used by a set of policies, you can call GetContextKeysForCustomPolicy or GetContextKeysForPrincipalPolicy.
     */
    MissingContextValues?: ContextKeyNamesResultListType;
    /**
     * Additional details about the results of the evaluation decision. When there are both IAM policies and resource policies, this parameter explains how each set of policies contributes to the final evaluation decision. When simulating cross-account access to a resource, both the resource-based policy and the caller's IAM policy must grant access.
     */
    EvalDecisionDetails?: EvalDecisionDetailsType;
  }
  export type ResourceSpecificResultListType = ResourceSpecificResult[];
  export interface ResyncMFADeviceRequest {
    /**
     * The name of the user whose MFA device you want to resynchronize. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: existingUserNameType;
    /**
     * Serial number that uniquely identifies the MFA device. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    SerialNumber: serialNumberType;
    /**
     * An authentication code emitted by the device. The format for this parameter is a sequence of six digits.
     */
    AuthenticationCode1: authenticationCodeType;
    /**
     * A subsequent authentication code emitted by the device. The format for this parameter is a sequence of six digits.
     */
    AuthenticationCode2: authenticationCodeType;
  }
  export interface Role {
    /**
     *  The path to the role. For more information about paths, see IAM Identifiers in the Using IAM guide. 
     */
    Path: pathType;
    /**
     * The friendly name that identifies the role.
     */
    RoleName: roleNameType;
    /**
     *  The stable and unique string identifying the role. For more information about IDs, see IAM Identifiers in the Using IAM guide. 
     */
    RoleId: idType;
    /**
     *  The Amazon Resource Name (ARN) specifying the role. For more information about ARNs and how to use them in policies, see IAM Identifiers in the IAM User Guide guide. 
     */
    Arn: arnType;
    /**
     * The date and time, in ISO 8601 date-time format, when the role was created.
     */
    CreateDate: dateType;
    /**
     * The policy that grants an entity permission to assume the role.
     */
    AssumeRolePolicyDocument?: policyDocumentType;
    /**
     * A description of the role that you provide.
     */
    Description?: roleDescriptionType;
  }
  export interface RoleDetail {
    /**
     * The path to the role. For more information about paths, see IAM Identifiers in the Using IAM guide.
     */
    Path?: pathType;
    /**
     * The friendly name that identifies the role.
     */
    RoleName?: roleNameType;
    /**
     * The stable and unique string identifying the role. For more information about IDs, see IAM Identifiers in the Using IAM guide.
     */
    RoleId?: idType;
    Arn?: arnType;
    /**
     * The date and time, in ISO 8601 date-time format, when the role was created.
     */
    CreateDate?: dateType;
    /**
     * The trust policy that grants permission to assume the role.
     */
    AssumeRolePolicyDocument?: policyDocumentType;
    /**
     * A list of instance profiles that contain this role.
     */
    InstanceProfileList?: instanceProfileListType;
    /**
     * A list of inline policies embedded in the role. These policies are the role's access (permissions) policies.
     */
    RolePolicyList?: policyDetailListType;
    /**
     * A list of managed policies attached to the role. These policies are the role's access (permissions) policies.
     */
    AttachedManagedPolicies?: attachedPoliciesListType;
  }
  export type RoleUsageListType = RoleUsageType[];
  export interface RoleUsageType {
    /**
     * The name of the region where the service-linked role is being used.
     */
    Region?: RegionNameType;
    /**
     * The name of the resource that is using the service-linked role.
     */
    Resources?: ArnListType;
  }
  export type SAMLMetadataDocumentType = string;
  export interface SAMLProviderListEntry {
    /**
     * The Amazon Resource Name (ARN) of the SAML provider.
     */
    Arn?: arnType;
    /**
     * The expiration date and time for the SAML provider.
     */
    ValidUntil?: dateType;
    /**
     * The date and time when the SAML provider was created.
     */
    CreateDate?: dateType;
  }
  export type SAMLProviderListType = SAMLProviderListEntry[];
  export type SAMLProviderNameType = string;
  export interface SSHPublicKey {
    /**
     * The name of the IAM user associated with the SSH public key.
     */
    UserName: userNameType;
    /**
     * The unique identifier for the SSH public key.
     */
    SSHPublicKeyId: publicKeyIdType;
    /**
     * The MD5 message digest of the SSH public key.
     */
    Fingerprint: publicKeyFingerprintType;
    /**
     * The SSH public key.
     */
    SSHPublicKeyBody: publicKeyMaterialType;
    /**
     * The status of the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used.
     */
    Status: statusType;
    /**
     * The date and time, in ISO 8601 date-time format, when the SSH public key was uploaded.
     */
    UploadDate?: dateType;
  }
  export type SSHPublicKeyListType = SSHPublicKeyMetadata[];
  export interface SSHPublicKeyMetadata {
    /**
     * The name of the IAM user associated with the SSH public key.
     */
    UserName: userNameType;
    /**
     * The unique identifier for the SSH public key.
     */
    SSHPublicKeyId: publicKeyIdType;
    /**
     * The status of the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used.
     */
    Status: statusType;
    /**
     * The date and time, in ISO 8601 date-time format, when the SSH public key was uploaded.
     */
    UploadDate: dateType;
  }
  export interface ServerCertificate {
    /**
     * The meta information of the server certificate, such as its name, path, ID, and ARN.
     */
    ServerCertificateMetadata: ServerCertificateMetadata;
    /**
     * The contents of the public key certificate.
     */
    CertificateBody: certificateBodyType;
    /**
     * The contents of the public key certificate chain.
     */
    CertificateChain?: certificateChainType;
  }
  export interface ServerCertificateMetadata {
    /**
     *  The path to the server certificate. For more information about paths, see IAM Identifiers in the Using IAM guide. 
     */
    Path: pathType;
    /**
     * The name that identifies the server certificate.
     */
    ServerCertificateName: serverCertificateNameType;
    /**
     *  The stable and unique string identifying the server certificate. For more information about IDs, see IAM Identifiers in the Using IAM guide. 
     */
    ServerCertificateId: idType;
    /**
     *  The Amazon Resource Name (ARN) specifying the server certificate. For more information about ARNs and how to use them in policies, see IAM Identifiers in the Using IAM guide. 
     */
    Arn: arnType;
    /**
     * The date when the server certificate was uploaded.
     */
    UploadDate?: dateType;
    /**
     * The date on which the certificate is set to expire.
     */
    Expiration?: dateType;
  }
  export interface ServiceSpecificCredential {
    /**
     * The date and time, in ISO 8601 date-time format, when the service-specific credential were created.
     */
    CreateDate: dateType;
    /**
     * The name of the service associated with the service-specific credential.
     */
    ServiceName: serviceName;
    /**
     * The generated user name for the service-specific credential. This value is generated by combining the IAM user's name combined with the ID number of the AWS account, as in jane-at-123456789012, for example. This value cannot be configured by the user.
     */
    ServiceUserName: serviceUserName;
    /**
     * The generated password for the service-specific credential.
     */
    ServicePassword: servicePassword;
    /**
     * The unique identifier for the service-specific credential.
     */
    ServiceSpecificCredentialId: serviceSpecificCredentialId;
    /**
     * The name of the IAM user associated with the service-specific credential.
     */
    UserName: userNameType;
    /**
     * The status of the service-specific credential. Active means the key is valid for API calls, while Inactive means it is not.
     */
    Status: statusType;
  }
  export interface ServiceSpecificCredentialMetadata {
    /**
     * The name of the IAM user associated with the service-specific credential.
     */
    UserName: userNameType;
    /**
     * The status of the service-specific credential. Active means the key is valid for API calls, while Inactive means it is not.
     */
    Status: statusType;
    /**
     * The generated user name for the service-specific credential.
     */
    ServiceUserName: serviceUserName;
    /**
     * The date and time, in ISO 8601 date-time format, when the service-specific credential were created.
     */
    CreateDate: dateType;
    /**
     * The unique identifier for the service-specific credential.
     */
    ServiceSpecificCredentialId: serviceSpecificCredentialId;
    /**
     * The name of the service associated with the service-specific credential.
     */
    ServiceName: serviceName;
  }
  export type ServiceSpecificCredentialsListType = ServiceSpecificCredentialMetadata[];
  export interface SetDefaultPolicyVersionRequest {
    /**
     * The Amazon Resource Name (ARN) of the IAM policy whose default version you want to set. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicyArn: arnType;
    /**
     * The version of the policy to set as the default (operative) version. For more information about managed policy versions, see Versioning for Managed Policies in the IAM User Guide.
     */
    VersionId: policyVersionIdType;
  }
  export interface SigningCertificate {
    /**
     * The name of the user the signing certificate is associated with.
     */
    UserName: userNameType;
    /**
     * The ID for the signing certificate.
     */
    CertificateId: certificateIdType;
    /**
     * The contents of the signing certificate.
     */
    CertificateBody: certificateBodyType;
    /**
     * The status of the signing certificate. Active means the key is valid for API calls, while Inactive means it is not.
     */
    Status: statusType;
    /**
     * The date when the signing certificate was uploaded.
     */
    UploadDate?: dateType;
  }
  export interface SimulateCustomPolicyRequest {
    /**
     * A list of policy documents to include in the simulation. Each document is specified as a string containing the complete, valid JSON text of an IAM policy. Do not include any resource-based policies in this parameter. Any resource-based policy must be submitted with the ResourcePolicy parameter. The policies cannot be "scope-down" policies, such as you could include in a call to GetFederationToken or one of the AssumeRole APIs to restrict what a user can do while using the temporary credentials. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    PolicyInputList: SimulationPolicyListType;
    /**
     * A list of names of API actions to evaluate in the simulation. Each action is evaluated against each resource. Each action must include the service identifier, such as iam:CreateUser.
     */
    ActionNames: ActionNameListType;
    /**
     * A list of ARNs of AWS resources to include in the simulation. If this parameter is not provided then the value defaults to * (all resources). Each API in the ActionNames parameter is evaluated for each resource in this list. The simulation determines the access result (allowed or denied) of each combination and reports it in the response. The simulation does not automatically retrieve policies for the specified resources. If you want to include a resource policy in the simulation, then you must include the policy as a string in the ResourcePolicy parameter. If you include a ResourcePolicy, then it must be applicable to all of the resources included in the simulation or you receive an invalid input error. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    ResourceArns?: ResourceNameListType;
    /**
     * A resource-based policy to include in the simulation provided as a string. Each resource in the simulation is treated as if it had this policy attached. You can include only one resource-based policy in a simulation. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    ResourcePolicy?: policyDocumentType;
    /**
     * An AWS account ID that specifies the owner of any simulated resource that does not identify its owner in the resource ARN, such as an S3 bucket or object. If ResourceOwner is specified, it is also used as the account owner of any ResourcePolicy included in the simulation. If the ResourceOwner parameter is not specified, then the owner of the resources and the resource policy defaults to the account of the identity provided in CallerArn. This parameter is required only if you specify a resource-based policy and account that owns the resource is different from the account that owns the simulated calling user CallerArn.
     */
    ResourceOwner?: ResourceNameType;
    /**
     * The ARN of the IAM user that you want to use as the simulated caller of the APIs. CallerArn is required if you include a ResourcePolicy so that the policy's Principal element has a value to use in evaluating the policy. You can specify only the ARN of an IAM user. You cannot specify the ARN of an assumed role, federated user, or a service principal.
     */
    CallerArn?: ResourceNameType;
    /**
     * A list of context keys and corresponding values for the simulation to use. Whenever a context key is evaluated in one of the simulated IAM permission policies, the corresponding value is supplied.
     */
    ContextEntries?: ContextEntryListType;
    /**
     * Specifies the type of simulation to run. Different APIs that support resource-based policies require different combinations of resources. By specifying the type of simulation to run, you enable the policy simulator to enforce the presence of the required resources to ensure reliable simulation results. If your simulation does not match one of the following scenarios, then you can omit this parameter. The following list shows each of the supported scenario values and the resources that you must define to run the simulation. Each of the EC2 scenarios requires that you specify instance, image, and security-group resources. If your scenario includes an EBS volume, then you must specify that volume as a resource. If the EC2 scenario includes VPC, then you must supply the network-interface resource. If it includes an IP subnet, then you must specify the subnet resource. For more information on the EC2 scenario options, see Supported Platforms in the AWS EC2 User Guide.    EC2-Classic-InstanceStore  instance, image, security-group    EC2-Classic-EBS  instance, image, security-group, volume    EC2-VPC-InstanceStore  instance, image, security-group, network-interface    EC2-VPC-InstanceStore-Subnet  instance, image, security-group, network-interface, subnet    EC2-VPC-EBS  instance, image, security-group, network-interface, volume    EC2-VPC-EBS-Subnet  instance, image, security-group, network-interface, subnet, volume  
     */
    ResourceHandlingOption?: ResourceHandlingOptionType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
  }
  export interface SimulatePolicyResponse {
    /**
     * The results of the simulation.
     */
    EvaluationResults?: EvaluationResultsListType;
    /**
     * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all of your results.
     */
    IsTruncated?: booleanType;
    /**
     * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
     */
    Marker?: markerType;
  }
  export interface SimulatePrincipalPolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of a user, group, or role whose policies you want to include in the simulation. If you specify a user, group, or role, the simulation includes all policies that are associated with that entity. If you specify a user, the simulation also includes all policies that are attached to any groups the user belongs to. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PolicySourceArn: arnType;
    /**
     * An optional list of additional policy documents to include in the simulation. Each document is specified as a string containing the complete, valid JSON text of an IAM policy. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    PolicyInputList?: SimulationPolicyListType;
    /**
     * A list of names of API actions to evaluate in the simulation. Each action is evaluated for each resource. Each action must include the service identifier, such as iam:CreateUser.
     */
    ActionNames: ActionNameListType;
    /**
     * A list of ARNs of AWS resources to include in the simulation. If this parameter is not provided then the value defaults to * (all resources). Each API in the ActionNames parameter is evaluated for each resource in this list. The simulation determines the access result (allowed or denied) of each combination and reports it in the response. The simulation does not automatically retrieve policies for the specified resources. If you want to include a resource policy in the simulation, then you must include the policy as a string in the ResourcePolicy parameter. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    ResourceArns?: ResourceNameListType;
    /**
     * A resource-based policy to include in the simulation provided as a string. Each resource in the simulation is treated as if it had this policy attached. You can include only one resource-based policy in a simulation. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    ResourcePolicy?: policyDocumentType;
    /**
     * An AWS account ID that specifies the owner of any simulated resource that does not identify its owner in the resource ARN, such as an S3 bucket or object. If ResourceOwner is specified, it is also used as the account owner of any ResourcePolicy included in the simulation. If the ResourceOwner parameter is not specified, then the owner of the resources and the resource policy defaults to the account of the identity provided in CallerArn. This parameter is required only if you specify a resource-based policy and account that owns the resource is different from the account that owns the simulated calling user CallerArn.
     */
    ResourceOwner?: ResourceNameType;
    /**
     * The ARN of the IAM user that you want to specify as the simulated caller of the APIs. If you do not specify a CallerArn, it defaults to the ARN of the user that you specify in PolicySourceArn, if you specified a user. If you include both a PolicySourceArn (for example, arn:aws:iam::123456789012:user/David) and a CallerArn (for example, arn:aws:iam::123456789012:user/Bob), the result is that you simulate calling the APIs as Bob, as if Bob had David's policies. You can specify only the ARN of an IAM user. You cannot specify the ARN of an assumed role, federated user, or a service principal.  CallerArn is required if you include a ResourcePolicy and the PolicySourceArn is not the ARN for an IAM user. This is required so that the resource-based policy's Principal element has a value to use in evaluating the policy. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    CallerArn?: ResourceNameType;
    /**
     * A list of context keys and corresponding values for the simulation to use. Whenever a context key is evaluated in one of the simulated IAM permission policies, the corresponding value is supplied.
     */
    ContextEntries?: ContextEntryListType;
    /**
     * Specifies the type of simulation to run. Different APIs that support resource-based policies require different combinations of resources. By specifying the type of simulation to run, you enable the policy simulator to enforce the presence of the required resources to ensure reliable simulation results. If your simulation does not match one of the following scenarios, then you can omit this parameter. The following list shows each of the supported scenario values and the resources that you must define to run the simulation. Each of the EC2 scenarios requires that you specify instance, image, and security-group resources. If your scenario includes an EBS volume, then you must specify that volume as a resource. If the EC2 scenario includes VPC, then you must supply the network-interface resource. If it includes an IP subnet, then you must specify the subnet resource. For more information on the EC2 scenario options, see Supported Platforms in the AWS EC2 User Guide.    EC2-Classic-InstanceStore  instance, image, security-group    EC2-Classic-EBS  instance, image, security-group, volume    EC2-VPC-InstanceStore  instance, image, security-group, network-interface    EC2-VPC-InstanceStore-Subnet  instance, image, security-group, network-interface, subnet    EC2-VPC-EBS  instance, image, security-group, network-interface, volume    EC2-VPC-EBS-Subnet  instance, image, security-group, network-interface, subnet, volume  
     */
    ResourceHandlingOption?: ResourceHandlingOptionType;
    /**
     * (Optional) Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true and Marker contains a value to include in the subsequent call that tells the service where to continue from.
     */
    MaxItems?: maxItemsType;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.
     */
    Marker?: markerType;
  }
  export type SimulationPolicyListType = policyDocumentType[];
  export interface Statement {
    /**
     * The identifier of the policy that was provided as an input.
     */
    SourcePolicyId?: PolicyIdentifierType;
    /**
     * The type of the policy.
     */
    SourcePolicyType?: PolicySourceType;
    /**
     * The row and column of the beginning of the Statement in an IAM policy.
     */
    StartPosition?: Position;
    /**
     * The row and column of the end of a Statement in an IAM policy.
     */
    EndPosition?: Position;
  }
  export type StatementListType = Statement[];
  export interface UpdateAccessKeyRequest {
    /**
     * The name of the user whose key you want to update. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: existingUserNameType;
    /**
     * The access key ID of the secret access key you want to update. This parameter allows (per its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.
     */
    AccessKeyId: accessKeyIdType;
    /**
     *  The status you want to assign to the secret access key. Active means the key can be used for API calls to AWS, while Inactive means the key cannot be used.
     */
    Status: statusType;
  }
  export interface UpdateAccountPasswordPolicyRequest {
    /**
     * The minimum number of characters allowed in an IAM user password. Default value: 6
     */
    MinimumPasswordLength?: minimumPasswordLengthType;
    /**
     * Specifies whether IAM user passwords must contain at least one of the following non-alphanumeric characters: ! @ # $ % ^ &amp;amp; * ( ) _ + - = [ ] { } | ' Default value: false
     */
    RequireSymbols?: booleanType;
    /**
     * Specifies whether IAM user passwords must contain at least one numeric character (0 to 9). Default value: false
     */
    RequireNumbers?: booleanType;
    /**
     * Specifies whether IAM user passwords must contain at least one uppercase character from the ISO basic Latin alphabet (A to Z). Default value: false
     */
    RequireUppercaseCharacters?: booleanType;
    /**
     * Specifies whether IAM user passwords must contain at least one lowercase character from the ISO basic Latin alphabet (a to z). Default value: false
     */
    RequireLowercaseCharacters?: booleanType;
    /**
     *  Allows all IAM users in your account to use the AWS Management Console to change their own passwords. For more information, see Letting IAM Users Change Their Own Passwords in the IAM User Guide. Default value: false
     */
    AllowUsersToChangePassword?: booleanType;
    /**
     * The number of days that an IAM user password is valid. The default value of 0 means IAM user passwords never expire. Default value: 0
     */
    MaxPasswordAge?: maxPasswordAgeType;
    /**
     * Specifies the number of previous passwords that IAM users are prevented from reusing. The default value of 0 means IAM users are not prevented from reusing previous passwords. Default value: 0
     */
    PasswordReusePrevention?: passwordReusePreventionType;
    /**
     * Prevents IAM users from setting a new password after their password has expired. Default value: false
     */
    HardExpiry?: booleanObjectType;
  }
  export interface UpdateAssumeRolePolicyRequest {
    /**
     * The name of the role to update with the new policy. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    RoleName: roleNameType;
    /**
     * The policy that grants an entity permission to assume the role. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    PolicyDocument: policyDocumentType;
  }
  export interface UpdateGroupRequest {
    /**
     * Name of the IAM group to update. If you're changing the name of the group, this is the original name. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    GroupName: groupNameType;
    /**
     * New path for the IAM group. Only include this if changing the group's path. This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    NewPath?: pathType;
    /**
     * New name for the IAM group. Only include this if changing the group's name. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    NewGroupName?: groupNameType;
  }
  export interface UpdateLoginProfileRequest {
    /**
     * The name of the user whose password you want to update. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: userNameType;
    /**
     * The new password for the specified IAM user. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D). However, the format can be further restricted by the account administrator by setting a password policy on the AWS account. For more information, see UpdateAccountPasswordPolicy.
     */
    Password?: passwordType;
    /**
     * Allows this new password to be used only once by requiring the specified IAM user to set a new password on next sign-in.
     */
    PasswordResetRequired?: booleanObjectType;
  }
  export interface UpdateOpenIDConnectProviderThumbprintRequest {
    /**
     * The Amazon Resource Name (ARN) of the IAM OIDC provider resource object for which you want to update the thumbprint. You can get a list of OIDC provider ARNs by using the ListOpenIDConnectProviders action. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    OpenIDConnectProviderArn: arnType;
    /**
     * A list of certificate thumbprints that are associated with the specified IAM OpenID Connect provider. For more information, see CreateOpenIDConnectProvider. 
     */
    ThumbprintList: thumbprintListType;
  }
  export interface UpdateRoleDescriptionRequest {
    /**
     * The name of the role that you want to modify.
     */
    RoleName: roleNameType;
    /**
     * The new description that you want to apply to the specified role.
     */
    Description: roleDescriptionType;
  }
  export interface UpdateRoleDescriptionResponse {
    /**
     * A structure that contains details about the modified role.
     */
    Role?: Role;
  }
  export interface UpdateSAMLProviderRequest {
    /**
     * An XML document generated by an identity provider (IdP) that supports SAML 2.0. The document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that are received from the IdP. You must generate the metadata document using the identity management software that is used as your organization's IdP.
     */
    SAMLMetadataDocument: SAMLMetadataDocumentType;
    /**
     * The Amazon Resource Name (ARN) of the SAML provider to update. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    SAMLProviderArn: arnType;
  }
  export interface UpdateSAMLProviderResponse {
    /**
     * The Amazon Resource Name (ARN) of the SAML provider that was updated.
     */
    SAMLProviderArn?: arnType;
  }
  export interface UpdateSSHPublicKeyRequest {
    /**
     * The name of the IAM user associated with the SSH public key. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: userNameType;
    /**
     * The unique identifier for the SSH public key. This parameter allows (per its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.
     */
    SSHPublicKeyId: publicKeyIdType;
    /**
     * The status to assign to the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used.
     */
    Status: statusType;
  }
  export interface UpdateServerCertificateRequest {
    /**
     * The name of the server certificate that you want to update. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    ServerCertificateName: serverCertificateNameType;
    /**
     * The new path for the server certificate. Include this only if you are updating the server certificate's path. This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    NewPath?: pathType;
    /**
     * The new name for the server certificate. Include this only if you are updating the server certificate's name. The name of the certificate cannot contain any spaces. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    NewServerCertificateName?: serverCertificateNameType;
  }
  export interface UpdateServiceSpecificCredentialRequest {
    /**
     * The name of the IAM user associated with the service-specific credential. If you do not specify this value, then the operation assumes the user whose credentials are used to call the operation. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: userNameType;
    /**
     * The unique identifier of the service-specific credential. This parameter allows (per its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.
     */
    ServiceSpecificCredentialId: serviceSpecificCredentialId;
    /**
     * The status to be assigned to the service-specific credential.
     */
    Status: statusType;
  }
  export interface UpdateSigningCertificateRequest {
    /**
     * The name of the IAM user the signing certificate belongs to. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: existingUserNameType;
    /**
     * The ID of the signing certificate you want to update. This parameter allows (per its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.
     */
    CertificateId: certificateIdType;
    /**
     *  The status you want to assign to the certificate. Active means the certificate can be used for API calls to AWS, while Inactive means the certificate cannot be used.
     */
    Status: statusType;
  }
  export interface UpdateUserRequest {
    /**
     * Name of the user to update. If you're changing the name of the user, this is the original user name. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: existingUserNameType;
    /**
     * New path for the IAM user. Include this parameter only if you're changing the user's path. This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.
     */
    NewPath?: pathType;
    /**
     * New name for the user. Include this parameter only if you're changing the user's name. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    NewUserName?: userNameType;
  }
  export interface UploadSSHPublicKeyRequest {
    /**
     * The name of the IAM user to associate the SSH public key with. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName: userNameType;
    /**
     * The SSH public key. The public key must be encoded in ssh-rsa format or PEM format. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    SSHPublicKeyBody: publicKeyMaterialType;
  }
  export interface UploadSSHPublicKeyResponse {
    /**
     * Contains information about the SSH public key.
     */
    SSHPublicKey?: SSHPublicKey;
  }
  export interface UploadServerCertificateRequest {
    /**
     * The path for the server certificate. For more information about paths, see IAM Identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This paramater allows (per its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes, containing any ASCII character from the ! (\u0021) thru the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.   If you are uploading a server certificate specifically for use with Amazon CloudFront distributions, you must specify a path using the --path option. The path must begin with /cloudfront and must include a trailing slash (for example, /cloudfront/test/). 
     */
    Path?: pathType;
    /**
     * The name for the server certificate. Do not include the path in this value. The name of the certificate cannot contain any spaces. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    ServerCertificateName: serverCertificateNameType;
    /**
     * The contents of the public key certificate in PEM-encoded format. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    CertificateBody: certificateBodyType;
    /**
     * The contents of the private key in PEM-encoded format. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    PrivateKey: privateKeyType;
    /**
     * The contents of the certificate chain. This is typically a concatenation of the PEM-encoded public key certificates of the chain. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    CertificateChain?: certificateChainType;
  }
  export interface UploadServerCertificateResponse {
    /**
     * The meta information of the uploaded server certificate without its certificate body, certificate chain, and private key.
     */
    ServerCertificateMetadata?: ServerCertificateMetadata;
  }
  export interface UploadSigningCertificateRequest {
    /**
     * The name of the user the signing certificate is for. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-
     */
    UserName?: existingUserNameType;
    /**
     * The contents of the signing certificate. The regex pattern used to validate this parameter is a string of characters consisting of any printable ASCII character ranging from the space character (\u0020) through end of the ASCII character range as well as the printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF). It also includes the special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D).
     */
    CertificateBody: certificateBodyType;
  }
  export interface UploadSigningCertificateResponse {
    /**
     * Information about the certificate.
     */
    Certificate: SigningCertificate;
  }
  export interface User {
    /**
     * The path to the user. For more information about paths, see IAM Identifiers in the Using IAM guide.
     */
    Path: pathType;
    /**
     * The friendly name identifying the user.
     */
    UserName: userNameType;
    /**
     * The stable and unique string identifying the user. For more information about IDs, see IAM Identifiers in the Using IAM guide.
     */
    UserId: idType;
    /**
     * The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see IAM Identifiers in the Using IAM guide. 
     */
    Arn: arnType;
    /**
     * The date and time, in ISO 8601 date-time format, when the user was created.
     */
    CreateDate: dateType;
    /**
     * The date and time, in ISO 8601 date-time format, when the user's password was last used to sign in to an AWS website. For a list of AWS websites that capture a user's last sign-in time, see the Credential Reports topic in the Using IAM guide. If a password is used more than once in a five-minute span, only the first use is returned in this field. If the field is null (no value) then it indicates that they never signed in with a password. This can be because:   The user never had a password.   A password exists but has not been used since IAM started tracking this information on October 20th, 2014.   A null does not mean that the user never had a password. Also, if the user does not currently have a password, but had one in the past, then this field contains the date and time the most recent password was used. This value is returned only in the GetUser and ListUsers actions. 
     */
    PasswordLastUsed?: dateType;
  }
  export interface UserDetail {
    /**
     * The path to the user. For more information about paths, see IAM Identifiers in the Using IAM guide.
     */
    Path?: pathType;
    /**
     * The friendly name identifying the user.
     */
    UserName?: userNameType;
    /**
     * The stable and unique string identifying the user. For more information about IDs, see IAM Identifiers in the Using IAM guide.
     */
    UserId?: idType;
    Arn?: arnType;
    /**
     * The date and time, in ISO 8601 date-time format, when the user was created.
     */
    CreateDate?: dateType;
    /**
     * A list of the inline policies embedded in the user.
     */
    UserPolicyList?: policyDetailListType;
    /**
     * A list of IAM groups that the user is in.
     */
    GroupList?: groupNameListType;
    /**
     * A list of the managed policies attached to the user.
     */
    AttachedManagedPolicies?: attachedPoliciesListType;
  }
  export interface VirtualMFADevice {
    /**
     * The serial number associated with VirtualMFADevice.
     */
    SerialNumber: serialNumberType;
    /**
     *  The Base32 seed defined as specified in RFC3548. The Base32StringSeed is Base64-encoded. 
     */
    Base32StringSeed?: BootstrapDatum;
    /**
     *  A QR code PNG image that encodes otpauth://totp/$virtualMFADeviceName@$AccountName?secret=$Base32String where $virtualMFADeviceName is one of the create call arguments, AccountName is the user name if set (otherwise, the account ID otherwise), and Base32String is the seed in Base32 format. The Base32String value is Base64-encoded. 
     */
    QRCodePNG?: BootstrapDatum;
    /**
     * The IAM user associated with this virtual MFA device.
     */
    User?: User;
    /**
     * The date and time on which the virtual MFA device was enabled.
     */
    EnableDate?: dateType;
  }
  export type accessKeyIdType = string;
  export type accessKeyMetadataListType = AccessKeyMetadata[];
  export type accessKeySecretType = string;
  export type accountAliasListType = accountAliasType[];
  export type accountAliasType = string;
  export type arnType = string;
  export type assignmentStatusType = "Assigned"|"Unassigned"|"Any"|string;
  export type attachedPoliciesListType = AttachedPolicy[];
  export type attachmentCountType = number;
  export type authenticationCodeType = string;
  export type booleanObjectType = boolean;
  export type booleanType = boolean;
  export type certificateBodyType = string;
  export type certificateChainType = string;
  export type certificateIdType = string;
  export type certificateListType = SigningCertificate[];
  export type clientIDListType = clientIDType[];
  export type clientIDType = string;
  export type credentialReportExpiredExceptionMessage = string;
  export type credentialReportNotPresentExceptionMessage = string;
  export type credentialReportNotReadyExceptionMessage = string;
  export type customSuffixType = string;
  export type dateType = Date;
  export type deleteConflictMessage = string;
  export type duplicateCertificateMessage = string;
  export type duplicateSSHPublicKeyMessage = string;
  export type encodingType = "SSH"|"PEM"|string;
  export type entityAlreadyExistsMessage = string;
  export type entityListType = EntityType[];
  export type entityTemporarilyUnmodifiableMessage = string;
  export type existingUserNameType = string;
  export type groupDetailListType = GroupDetail[];
  export type groupListType = Group[];
  export type groupNameListType = groupNameType[];
  export type groupNameType = string;
  export type idType = string;
  export type instanceProfileListType = InstanceProfile[];
  export type instanceProfileNameType = string;
  export type invalidAuthenticationCodeMessage = string;
  export type invalidCertificateMessage = string;
  export type invalidInputMessage = string;
  export type invalidPublicKeyMessage = string;
  export type invalidUserTypeMessage = string;
  export type keyPairMismatchMessage = string;
  export type limitExceededMessage = string;
  export type malformedCertificateMessage = string;
  export type malformedPolicyDocumentMessage = string;
  export type markerType = string;
  export type maxItemsType = number;
  export type maxPasswordAgeType = number;
  export type mfaDeviceListType = MFADevice[];
  export type minimumPasswordLengthType = number;
  export type noSuchEntityMessage = string;
  export type passwordPolicyViolationMessage = string;
  export type passwordReusePreventionType = number;
  export type passwordType = string;
  export type pathPrefixType = string;
  export type pathType = string;
  export type policyDescriptionType = string;
  export type policyDetailListType = PolicyDetail[];
  export type policyDocumentType = string;
  export type policyDocumentVersionListType = PolicyVersion[];
  export type policyEvaluationErrorMessage = string;
  export type policyListType = Policy[];
  export type policyNameListType = policyNameType[];
  export type policyNameType = string;
  export type policyNotAttachableMessage = string;
  export type policyPathType = string;
  export type policyScopeType = "All"|"AWS"|"Local"|string;
  export type policyVersionIdType = string;
  export type privateKeyType = string;
  export type publicKeyFingerprintType = string;
  export type publicKeyIdType = string;
  export type publicKeyMaterialType = string;
  export type roleDescriptionType = string;
  export type roleDetailListType = RoleDetail[];
  export type roleListType = Role[];
  export type roleNameType = string;
  export type serialNumberType = string;
  export type serverCertificateMetadataListType = ServerCertificateMetadata[];
  export type serverCertificateNameType = string;
  export type serviceFailureExceptionMessage = string;
  export type serviceName = string;
  export type serviceNotSupportedMessage = string;
  export type servicePassword = string;
  export type serviceSpecificCredentialId = string;
  export type serviceUserName = string;
  export type statusType = "Active"|"Inactive"|string;
  export type stringType = string;
  export type summaryKeyType = "Users"|"UsersQuota"|"Groups"|"GroupsQuota"|"ServerCertificates"|"ServerCertificatesQuota"|"UserPolicySizeQuota"|"GroupPolicySizeQuota"|"GroupsPerUserQuota"|"SigningCertificatesPerUserQuota"|"AccessKeysPerUserQuota"|"MFADevices"|"MFADevicesInUse"|"AccountMFAEnabled"|"AccountAccessKeysPresent"|"AccountSigningCertificatesPresent"|"AttachedPoliciesPerGroupQuota"|"AttachedPoliciesPerRoleQuota"|"AttachedPoliciesPerUserQuota"|"Policies"|"PoliciesQuota"|"PolicySizeQuota"|"PolicyVersionsInUse"|"PolicyVersionsInUseQuota"|"VersionsPerPolicyQuota"|string;
  export type summaryMapType = {[key: string]: summaryValueType};
  export type summaryValueType = number;
  export type thumbprintListType = thumbprintType[];
  export type thumbprintType = string;
  export type unmodifiableEntityMessage = string;
  export type unrecognizedPublicKeyEncodingMessage = string;
  export type userDetailListType = UserDetail[];
  export type userListType = User[];
  export type userNameType = string;
  export type virtualMFADeviceListType = VirtualMFADevice[];
  export type virtualMFADeviceName = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2010-05-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the IAM client.
   */
  export import Types = IAM;
}
export = IAM;
