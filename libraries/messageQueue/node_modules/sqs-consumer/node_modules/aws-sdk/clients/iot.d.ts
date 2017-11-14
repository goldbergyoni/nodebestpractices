import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Iot extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Iot.Types.ClientConfiguration)
  config: Config & Iot.Types.ClientConfiguration;
  /**
   * Accepts a pending certificate transfer. The default state of the certificate is INACTIVE. To check for pending certificate transfers, call ListCertificates to enumerate your certificates.
   */
  acceptCertificateTransfer(params: Iot.Types.AcceptCertificateTransferRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Accepts a pending certificate transfer. The default state of the certificate is INACTIVE. To check for pending certificate transfers, call ListCertificates to enumerate your certificates.
   */
  acceptCertificateTransfer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches the specified policy to the specified principal (certificate or other credential).
   */
  attachPrincipalPolicy(params: Iot.Types.AttachPrincipalPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches the specified policy to the specified principal (certificate or other credential).
   */
  attachPrincipalPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches the specified principal to the specified thing.
   */
  attachThingPrincipal(params: Iot.Types.AttachThingPrincipalRequest, callback?: (err: AWSError, data: Iot.Types.AttachThingPrincipalResponse) => void): Request<Iot.Types.AttachThingPrincipalResponse, AWSError>;
  /**
   * Attaches the specified principal to the specified thing.
   */
  attachThingPrincipal(callback?: (err: AWSError, data: Iot.Types.AttachThingPrincipalResponse) => void): Request<Iot.Types.AttachThingPrincipalResponse, AWSError>;
  /**
   * Cancels a pending transfer for the specified certificate.  Note Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use RejectCertificateTransfer instead.) After transfer, AWS IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled. After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.
   */
  cancelCertificateTransfer(params: Iot.Types.CancelCertificateTransferRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Cancels a pending transfer for the specified certificate.  Note Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use RejectCertificateTransfer instead.) After transfer, AWS IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled. After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.
   */
  cancelCertificateTransfer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates an X.509 certificate using the specified certificate signing request.  Note: The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384 curves.   Note: Reusing the same certificate signing request (CSR) results in a distinct certificate. You can create multiple certificates in a batch by creating a directory, copying multiple .csr files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs. Assuming a set of CSRs are located inside of the directory my-csr-directory: On Linux and OS X, the command is: $ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{} This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the aws iot create-certificate-from-csr AWS CLI command to create a certificate for the corresponding CSR. The aws iot create-certificate-from-csr part of the command can also be run in parallel to speed up the certificate creation process: $ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{} On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is: &gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_} On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is: &gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path"
   */
  createCertificateFromCsr(params: Iot.Types.CreateCertificateFromCsrRequest, callback?: (err: AWSError, data: Iot.Types.CreateCertificateFromCsrResponse) => void): Request<Iot.Types.CreateCertificateFromCsrResponse, AWSError>;
  /**
   * Creates an X.509 certificate using the specified certificate signing request.  Note: The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384 curves.   Note: Reusing the same certificate signing request (CSR) results in a distinct certificate. You can create multiple certificates in a batch by creating a directory, copying multiple .csr files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs. Assuming a set of CSRs are located inside of the directory my-csr-directory: On Linux and OS X, the command is: $ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{} This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the aws iot create-certificate-from-csr AWS CLI command to create a certificate for the corresponding CSR. The aws iot create-certificate-from-csr part of the command can also be run in parallel to speed up the certificate creation process: $ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{} On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is: &gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_} On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is: &gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path"
   */
  createCertificateFromCsr(callback?: (err: AWSError, data: Iot.Types.CreateCertificateFromCsrResponse) => void): Request<Iot.Types.CreateCertificateFromCsrResponse, AWSError>;
  /**
   * Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key.  Note This is the only time AWS IoT issues the private key for this certificate, so it is important to keep it in a secure location.
   */
  createKeysAndCertificate(params: Iot.Types.CreateKeysAndCertificateRequest, callback?: (err: AWSError, data: Iot.Types.CreateKeysAndCertificateResponse) => void): Request<Iot.Types.CreateKeysAndCertificateResponse, AWSError>;
  /**
   * Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key.  Note This is the only time AWS IoT issues the private key for this certificate, so it is important to keep it in a secure location.
   */
  createKeysAndCertificate(callback?: (err: AWSError, data: Iot.Types.CreateKeysAndCertificateResponse) => void): Request<Iot.Types.CreateKeysAndCertificateResponse, AWSError>;
  /**
   * Creates an AWS IoT policy. The created policy is the default version for the policy. This operation creates a policy version with a version identifier of 1 and sets 1 as the policy's default version.
   */
  createPolicy(params: Iot.Types.CreatePolicyRequest, callback?: (err: AWSError, data: Iot.Types.CreatePolicyResponse) => void): Request<Iot.Types.CreatePolicyResponse, AWSError>;
  /**
   * Creates an AWS IoT policy. The created policy is the default version for the policy. This operation creates a policy version with a version identifier of 1 and sets 1 as the policy's default version.
   */
  createPolicy(callback?: (err: AWSError, data: Iot.Types.CreatePolicyResponse) => void): Request<Iot.Types.CreatePolicyResponse, AWSError>;
  /**
   * Creates a new version of the specified AWS IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use DeletePolicyVersion to delete an existing version before you create a new one. Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
   */
  createPolicyVersion(params: Iot.Types.CreatePolicyVersionRequest, callback?: (err: AWSError, data: Iot.Types.CreatePolicyVersionResponse) => void): Request<Iot.Types.CreatePolicyVersionResponse, AWSError>;
  /**
   * Creates a new version of the specified AWS IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use DeletePolicyVersion to delete an existing version before you create a new one. Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
   */
  createPolicyVersion(callback?: (err: AWSError, data: Iot.Types.CreatePolicyVersionResponse) => void): Request<Iot.Types.CreatePolicyVersionResponse, AWSError>;
  /**
   * Creates a thing record in the thing registry.
   */
  createThing(params: Iot.Types.CreateThingRequest, callback?: (err: AWSError, data: Iot.Types.CreateThingResponse) => void): Request<Iot.Types.CreateThingResponse, AWSError>;
  /**
   * Creates a thing record in the thing registry.
   */
  createThing(callback?: (err: AWSError, data: Iot.Types.CreateThingResponse) => void): Request<Iot.Types.CreateThingResponse, AWSError>;
  /**
   * Creates a new thing type.
   */
  createThingType(params: Iot.Types.CreateThingTypeRequest, callback?: (err: AWSError, data: Iot.Types.CreateThingTypeResponse) => void): Request<Iot.Types.CreateThingTypeResponse, AWSError>;
  /**
   * Creates a new thing type.
   */
  createThingType(callback?: (err: AWSError, data: Iot.Types.CreateThingTypeResponse) => void): Request<Iot.Types.CreateThingTypeResponse, AWSError>;
  /**
   * Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.
   */
  createTopicRule(params: Iot.Types.CreateTopicRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.
   */
  createTopicRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a registered CA certificate.
   */
  deleteCACertificate(params: Iot.Types.DeleteCACertificateRequest, callback?: (err: AWSError, data: Iot.Types.DeleteCACertificateResponse) => void): Request<Iot.Types.DeleteCACertificateResponse, AWSError>;
  /**
   * Deletes a registered CA certificate.
   */
  deleteCACertificate(callback?: (err: AWSError, data: Iot.Types.DeleteCACertificateResponse) => void): Request<Iot.Types.DeleteCACertificateResponse, AWSError>;
  /**
   * Deletes the specified certificate. A certificate cannot be deleted if it has a policy attached to it or if its status is set to ACTIVE. To delete a certificate, first use the DetachPrincipalPolicy API to detach all policies. Next, use the UpdateCertificate API to set the certificate to the INACTIVE status.
   */
  deleteCertificate(params: Iot.Types.DeleteCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified certificate. A certificate cannot be deleted if it has a policy attached to it or if its status is set to ACTIVE. To delete a certificate, first use the DetachPrincipalPolicy API to detach all policies. Next, use the UpdateCertificate API to set the certificate to the INACTIVE status.
   */
  deleteCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified policy. A policy cannot be deleted if it has non-default versions or it is attached to any certificate. To delete a policy, use the DeletePolicyVersion API to delete all non-default versions of the policy; use the DetachPrincipalPolicy API to detach the policy from any certificate; and then use the DeletePolicy API to delete the policy. When a policy is deleted using DeletePolicy, its default version is deleted with it.
   */
  deletePolicy(params: Iot.Types.DeletePolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified policy. A policy cannot be deleted if it has non-default versions or it is attached to any certificate. To delete a policy, use the DeletePolicyVersion API to delete all non-default versions of the policy; use the DetachPrincipalPolicy API to detach the policy from any certificate; and then use the DeletePolicy API to delete the policy. When a policy is deleted using DeletePolicy, its default version is deleted with it.
   */
  deletePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this API. To delete the default version of a policy, use DeletePolicy. To find out which version of a policy is marked as the default version, use ListPolicyVersions.
   */
  deletePolicyVersion(params: Iot.Types.DeletePolicyVersionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this API. To delete the default version of a policy, use DeletePolicy. To find out which version of a policy is marked as the default version, use ListPolicyVersions.
   */
  deletePolicyVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a CA certificate registration code.
   */
  deleteRegistrationCode(params: Iot.Types.DeleteRegistrationCodeRequest, callback?: (err: AWSError, data: Iot.Types.DeleteRegistrationCodeResponse) => void): Request<Iot.Types.DeleteRegistrationCodeResponse, AWSError>;
  /**
   * Deletes a CA certificate registration code.
   */
  deleteRegistrationCode(callback?: (err: AWSError, data: Iot.Types.DeleteRegistrationCodeResponse) => void): Request<Iot.Types.DeleteRegistrationCodeResponse, AWSError>;
  /**
   * Deletes the specified thing.
   */
  deleteThing(params: Iot.Types.DeleteThingRequest, callback?: (err: AWSError, data: Iot.Types.DeleteThingResponse) => void): Request<Iot.Types.DeleteThingResponse, AWSError>;
  /**
   * Deletes the specified thing.
   */
  deleteThing(callback?: (err: AWSError, data: Iot.Types.DeleteThingResponse) => void): Request<Iot.Types.DeleteThingResponse, AWSError>;
  /**
   * Deletes the specified thing type . You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling DeprecateThingType, then remove any associated things by calling UpdateThing to change the thing type on any associated thing, and finally use DeleteThingType to delete the thing type.
   */
  deleteThingType(params: Iot.Types.DeleteThingTypeRequest, callback?: (err: AWSError, data: Iot.Types.DeleteThingTypeResponse) => void): Request<Iot.Types.DeleteThingTypeResponse, AWSError>;
  /**
   * Deletes the specified thing type . You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling DeprecateThingType, then remove any associated things by calling UpdateThing to change the thing type on any associated thing, and finally use DeleteThingType to delete the thing type.
   */
  deleteThingType(callback?: (err: AWSError, data: Iot.Types.DeleteThingTypeResponse) => void): Request<Iot.Types.DeleteThingTypeResponse, AWSError>;
  /**
   * Deletes the specified rule.
   */
  deleteTopicRule(params: Iot.Types.DeleteTopicRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified rule.
   */
  deleteTopicRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deprecates a thing type. You can not associate new things with deprecated thing type.
   */
  deprecateThingType(params: Iot.Types.DeprecateThingTypeRequest, callback?: (err: AWSError, data: Iot.Types.DeprecateThingTypeResponse) => void): Request<Iot.Types.DeprecateThingTypeResponse, AWSError>;
  /**
   * Deprecates a thing type. You can not associate new things with deprecated thing type.
   */
  deprecateThingType(callback?: (err: AWSError, data: Iot.Types.DeprecateThingTypeResponse) => void): Request<Iot.Types.DeprecateThingTypeResponse, AWSError>;
  /**
   * Describes a registered CA certificate.
   */
  describeCACertificate(params: Iot.Types.DescribeCACertificateRequest, callback?: (err: AWSError, data: Iot.Types.DescribeCACertificateResponse) => void): Request<Iot.Types.DescribeCACertificateResponse, AWSError>;
  /**
   * Describes a registered CA certificate.
   */
  describeCACertificate(callback?: (err: AWSError, data: Iot.Types.DescribeCACertificateResponse) => void): Request<Iot.Types.DescribeCACertificateResponse, AWSError>;
  /**
   * Gets information about the specified certificate.
   */
  describeCertificate(params: Iot.Types.DescribeCertificateRequest, callback?: (err: AWSError, data: Iot.Types.DescribeCertificateResponse) => void): Request<Iot.Types.DescribeCertificateResponse, AWSError>;
  /**
   * Gets information about the specified certificate.
   */
  describeCertificate(callback?: (err: AWSError, data: Iot.Types.DescribeCertificateResponse) => void): Request<Iot.Types.DescribeCertificateResponse, AWSError>;
  /**
   * Returns a unique endpoint specific to the AWS account making the call.
   */
  describeEndpoint(params: Iot.Types.DescribeEndpointRequest, callback?: (err: AWSError, data: Iot.Types.DescribeEndpointResponse) => void): Request<Iot.Types.DescribeEndpointResponse, AWSError>;
  /**
   * Returns a unique endpoint specific to the AWS account making the call.
   */
  describeEndpoint(callback?: (err: AWSError, data: Iot.Types.DescribeEndpointResponse) => void): Request<Iot.Types.DescribeEndpointResponse, AWSError>;
  /**
   * Gets information about the specified thing.
   */
  describeThing(params: Iot.Types.DescribeThingRequest, callback?: (err: AWSError, data: Iot.Types.DescribeThingResponse) => void): Request<Iot.Types.DescribeThingResponse, AWSError>;
  /**
   * Gets information about the specified thing.
   */
  describeThing(callback?: (err: AWSError, data: Iot.Types.DescribeThingResponse) => void): Request<Iot.Types.DescribeThingResponse, AWSError>;
  /**
   * Gets information about the specified thing type.
   */
  describeThingType(params: Iot.Types.DescribeThingTypeRequest, callback?: (err: AWSError, data: Iot.Types.DescribeThingTypeResponse) => void): Request<Iot.Types.DescribeThingTypeResponse, AWSError>;
  /**
   * Gets information about the specified thing type.
   */
  describeThingType(callback?: (err: AWSError, data: Iot.Types.DescribeThingTypeResponse) => void): Request<Iot.Types.DescribeThingTypeResponse, AWSError>;
  /**
   * Removes the specified policy from the specified certificate.
   */
  detachPrincipalPolicy(params: Iot.Types.DetachPrincipalPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified policy from the specified certificate.
   */
  detachPrincipalPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Detaches the specified principal from the specified thing.
   */
  detachThingPrincipal(params: Iot.Types.DetachThingPrincipalRequest, callback?: (err: AWSError, data: Iot.Types.DetachThingPrincipalResponse) => void): Request<Iot.Types.DetachThingPrincipalResponse, AWSError>;
  /**
   * Detaches the specified principal from the specified thing.
   */
  detachThingPrincipal(callback?: (err: AWSError, data: Iot.Types.DetachThingPrincipalResponse) => void): Request<Iot.Types.DetachThingPrincipalResponse, AWSError>;
  /**
   * Disables the specified rule.
   */
  disableTopicRule(params: Iot.Types.DisableTopicRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables the specified rule.
   */
  disableTopicRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the specified rule.
   */
  enableTopicRule(params: Iot.Types.EnableTopicRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the specified rule.
   */
  enableTopicRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets the logging options.
   */
  getLoggingOptions(params: Iot.Types.GetLoggingOptionsRequest, callback?: (err: AWSError, data: Iot.Types.GetLoggingOptionsResponse) => void): Request<Iot.Types.GetLoggingOptionsResponse, AWSError>;
  /**
   * Gets the logging options.
   */
  getLoggingOptions(callback?: (err: AWSError, data: Iot.Types.GetLoggingOptionsResponse) => void): Request<Iot.Types.GetLoggingOptionsResponse, AWSError>;
  /**
   * Gets information about the specified policy with the policy document of the default version.
   */
  getPolicy(params: Iot.Types.GetPolicyRequest, callback?: (err: AWSError, data: Iot.Types.GetPolicyResponse) => void): Request<Iot.Types.GetPolicyResponse, AWSError>;
  /**
   * Gets information about the specified policy with the policy document of the default version.
   */
  getPolicy(callback?: (err: AWSError, data: Iot.Types.GetPolicyResponse) => void): Request<Iot.Types.GetPolicyResponse, AWSError>;
  /**
   * Gets information about the specified policy version.
   */
  getPolicyVersion(params: Iot.Types.GetPolicyVersionRequest, callback?: (err: AWSError, data: Iot.Types.GetPolicyVersionResponse) => void): Request<Iot.Types.GetPolicyVersionResponse, AWSError>;
  /**
   * Gets information about the specified policy version.
   */
  getPolicyVersion(callback?: (err: AWSError, data: Iot.Types.GetPolicyVersionResponse) => void): Request<Iot.Types.GetPolicyVersionResponse, AWSError>;
  /**
   * Gets a registration code used to register a CA certificate with AWS IoT.
   */
  getRegistrationCode(params: Iot.Types.GetRegistrationCodeRequest, callback?: (err: AWSError, data: Iot.Types.GetRegistrationCodeResponse) => void): Request<Iot.Types.GetRegistrationCodeResponse, AWSError>;
  /**
   * Gets a registration code used to register a CA certificate with AWS IoT.
   */
  getRegistrationCode(callback?: (err: AWSError, data: Iot.Types.GetRegistrationCodeResponse) => void): Request<Iot.Types.GetRegistrationCodeResponse, AWSError>;
  /**
   * Gets information about the specified rule.
   */
  getTopicRule(params: Iot.Types.GetTopicRuleRequest, callback?: (err: AWSError, data: Iot.Types.GetTopicRuleResponse) => void): Request<Iot.Types.GetTopicRuleResponse, AWSError>;
  /**
   * Gets information about the specified rule.
   */
  getTopicRule(callback?: (err: AWSError, data: Iot.Types.GetTopicRuleResponse) => void): Request<Iot.Types.GetTopicRuleResponse, AWSError>;
  /**
   * Lists the CA certificates registered for your AWS account. The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.
   */
  listCACertificates(params: Iot.Types.ListCACertificatesRequest, callback?: (err: AWSError, data: Iot.Types.ListCACertificatesResponse) => void): Request<Iot.Types.ListCACertificatesResponse, AWSError>;
  /**
   * Lists the CA certificates registered for your AWS account. The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.
   */
  listCACertificates(callback?: (err: AWSError, data: Iot.Types.ListCACertificatesResponse) => void): Request<Iot.Types.ListCACertificatesResponse, AWSError>;
  /**
   * Lists the certificates registered in your AWS account. The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.
   */
  listCertificates(params: Iot.Types.ListCertificatesRequest, callback?: (err: AWSError, data: Iot.Types.ListCertificatesResponse) => void): Request<Iot.Types.ListCertificatesResponse, AWSError>;
  /**
   * Lists the certificates registered in your AWS account. The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.
   */
  listCertificates(callback?: (err: AWSError, data: Iot.Types.ListCertificatesResponse) => void): Request<Iot.Types.ListCertificatesResponse, AWSError>;
  /**
   * List the device certificates signed by the specified CA certificate.
   */
  listCertificatesByCA(params: Iot.Types.ListCertificatesByCARequest, callback?: (err: AWSError, data: Iot.Types.ListCertificatesByCAResponse) => void): Request<Iot.Types.ListCertificatesByCAResponse, AWSError>;
  /**
   * List the device certificates signed by the specified CA certificate.
   */
  listCertificatesByCA(callback?: (err: AWSError, data: Iot.Types.ListCertificatesByCAResponse) => void): Request<Iot.Types.ListCertificatesByCAResponse, AWSError>;
  /**
   * Lists certificates that are being transfered but not yet accepted.
   */
  listOutgoingCertificates(params: Iot.Types.ListOutgoingCertificatesRequest, callback?: (err: AWSError, data: Iot.Types.ListOutgoingCertificatesResponse) => void): Request<Iot.Types.ListOutgoingCertificatesResponse, AWSError>;
  /**
   * Lists certificates that are being transfered but not yet accepted.
   */
  listOutgoingCertificates(callback?: (err: AWSError, data: Iot.Types.ListOutgoingCertificatesResponse) => void): Request<Iot.Types.ListOutgoingCertificatesResponse, AWSError>;
  /**
   * Lists your policies.
   */
  listPolicies(params: Iot.Types.ListPoliciesRequest, callback?: (err: AWSError, data: Iot.Types.ListPoliciesResponse) => void): Request<Iot.Types.ListPoliciesResponse, AWSError>;
  /**
   * Lists your policies.
   */
  listPolicies(callback?: (err: AWSError, data: Iot.Types.ListPoliciesResponse) => void): Request<Iot.Types.ListPoliciesResponse, AWSError>;
  /**
   * Lists the principals associated with the specified policy.
   */
  listPolicyPrincipals(params: Iot.Types.ListPolicyPrincipalsRequest, callback?: (err: AWSError, data: Iot.Types.ListPolicyPrincipalsResponse) => void): Request<Iot.Types.ListPolicyPrincipalsResponse, AWSError>;
  /**
   * Lists the principals associated with the specified policy.
   */
  listPolicyPrincipals(callback?: (err: AWSError, data: Iot.Types.ListPolicyPrincipalsResponse) => void): Request<Iot.Types.ListPolicyPrincipalsResponse, AWSError>;
  /**
   * Lists the versions of the specified policy and identifies the default version.
   */
  listPolicyVersions(params: Iot.Types.ListPolicyVersionsRequest, callback?: (err: AWSError, data: Iot.Types.ListPolicyVersionsResponse) => void): Request<Iot.Types.ListPolicyVersionsResponse, AWSError>;
  /**
   * Lists the versions of the specified policy and identifies the default version.
   */
  listPolicyVersions(callback?: (err: AWSError, data: Iot.Types.ListPolicyVersionsResponse) => void): Request<Iot.Types.ListPolicyVersionsResponse, AWSError>;
  /**
   * Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in AmazonCognito Identity format.
   */
  listPrincipalPolicies(params: Iot.Types.ListPrincipalPoliciesRequest, callback?: (err: AWSError, data: Iot.Types.ListPrincipalPoliciesResponse) => void): Request<Iot.Types.ListPrincipalPoliciesResponse, AWSError>;
  /**
   * Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in AmazonCognito Identity format.
   */
  listPrincipalPolicies(callback?: (err: AWSError, data: Iot.Types.ListPrincipalPoliciesResponse) => void): Request<Iot.Types.ListPrincipalPoliciesResponse, AWSError>;
  /**
   * Lists the things associated with the specified principal.
   */
  listPrincipalThings(params: Iot.Types.ListPrincipalThingsRequest, callback?: (err: AWSError, data: Iot.Types.ListPrincipalThingsResponse) => void): Request<Iot.Types.ListPrincipalThingsResponse, AWSError>;
  /**
   * Lists the things associated with the specified principal.
   */
  listPrincipalThings(callback?: (err: AWSError, data: Iot.Types.ListPrincipalThingsResponse) => void): Request<Iot.Types.ListPrincipalThingsResponse, AWSError>;
  /**
   * Lists the principals associated with the specified thing.
   */
  listThingPrincipals(params: Iot.Types.ListThingPrincipalsRequest, callback?: (err: AWSError, data: Iot.Types.ListThingPrincipalsResponse) => void): Request<Iot.Types.ListThingPrincipalsResponse, AWSError>;
  /**
   * Lists the principals associated with the specified thing.
   */
  listThingPrincipals(callback?: (err: AWSError, data: Iot.Types.ListThingPrincipalsResponse) => void): Request<Iot.Types.ListThingPrincipalsResponse, AWSError>;
  /**
   * Lists the existing thing types.
   */
  listThingTypes(params: Iot.Types.ListThingTypesRequest, callback?: (err: AWSError, data: Iot.Types.ListThingTypesResponse) => void): Request<Iot.Types.ListThingTypesResponse, AWSError>;
  /**
   * Lists the existing thing types.
   */
  listThingTypes(callback?: (err: AWSError, data: Iot.Types.ListThingTypesResponse) => void): Request<Iot.Types.ListThingTypesResponse, AWSError>;
  /**
   * Lists your things. Use the attributeName and attributeValue parameters to filter your things. For example, calling ListThings with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute Color with the value Red. 
   */
  listThings(params: Iot.Types.ListThingsRequest, callback?: (err: AWSError, data: Iot.Types.ListThingsResponse) => void): Request<Iot.Types.ListThingsResponse, AWSError>;
  /**
   * Lists your things. Use the attributeName and attributeValue parameters to filter your things. For example, calling ListThings with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute Color with the value Red. 
   */
  listThings(callback?: (err: AWSError, data: Iot.Types.ListThingsResponse) => void): Request<Iot.Types.ListThingsResponse, AWSError>;
  /**
   * Lists the rules for the specific topic.
   */
  listTopicRules(params: Iot.Types.ListTopicRulesRequest, callback?: (err: AWSError, data: Iot.Types.ListTopicRulesResponse) => void): Request<Iot.Types.ListTopicRulesResponse, AWSError>;
  /**
   * Lists the rules for the specific topic.
   */
  listTopicRules(callback?: (err: AWSError, data: Iot.Types.ListTopicRulesResponse) => void): Request<Iot.Types.ListTopicRulesResponse, AWSError>;
  /**
   * Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign device certificates, which can be then registered with AWS IoT. You can register up to 10 CA certificates per AWS account that have the same subject field. This enables you to have up to 10 certificate authorities sign your device certificates. If you have more than one CA certificate registered, make sure you pass the CA certificate when you register your device certificates with the RegisterCertificate API.
   */
  registerCACertificate(params: Iot.Types.RegisterCACertificateRequest, callback?: (err: AWSError, data: Iot.Types.RegisterCACertificateResponse) => void): Request<Iot.Types.RegisterCACertificateResponse, AWSError>;
  /**
   * Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign device certificates, which can be then registered with AWS IoT. You can register up to 10 CA certificates per AWS account that have the same subject field. This enables you to have up to 10 certificate authorities sign your device certificates. If you have more than one CA certificate registered, make sure you pass the CA certificate when you register your device certificates with the RegisterCertificate API.
   */
  registerCACertificate(callback?: (err: AWSError, data: Iot.Types.RegisterCACertificateResponse) => void): Request<Iot.Types.RegisterCACertificateResponse, AWSError>;
  /**
   * Registers a device certificate with AWS IoT. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.
   */
  registerCertificate(params: Iot.Types.RegisterCertificateRequest, callback?: (err: AWSError, data: Iot.Types.RegisterCertificateResponse) => void): Request<Iot.Types.RegisterCertificateResponse, AWSError>;
  /**
   * Registers a device certificate with AWS IoT. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.
   */
  registerCertificate(callback?: (err: AWSError, data: Iot.Types.RegisterCertificateResponse) => void): Request<Iot.Types.RegisterCertificateResponse, AWSError>;
  /**
   * Rejects a pending certificate transfer. After AWS IoT rejects a certificate transfer, the certificate status changes from PENDING_TRANSFER to INACTIVE. To check for pending certificate transfers, call ListCertificates to enumerate your certificates. This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.
   */
  rejectCertificateTransfer(params: Iot.Types.RejectCertificateTransferRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Rejects a pending certificate transfer. After AWS IoT rejects a certificate transfer, the certificate status changes from PENDING_TRANSFER to INACTIVE. To check for pending certificate transfers, call ListCertificates to enumerate your certificates. This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.
   */
  rejectCertificateTransfer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Replaces the specified rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.
   */
  replaceTopicRule(params: Iot.Types.ReplaceTopicRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Replaces the specified rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.
   */
  replaceTopicRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the ListPrincipalPolicy API.
   */
  setDefaultPolicyVersion(params: Iot.Types.SetDefaultPolicyVersionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the ListPrincipalPolicy API.
   */
  setDefaultPolicyVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the logging options.
   */
  setLoggingOptions(params: Iot.Types.SetLoggingOptionsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the logging options.
   */
  setLoggingOptions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Transfers the specified certificate to the specified AWS account. You can cancel the transfer until it is acknowledged by the recipient. No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target. The certificate being transferred must not be in the ACTIVE state. You can use the UpdateCertificate API to deactivate it. The certificate must not have any policies attached to it. You can use the DetachPrincipalPolicy API to detach them.
   */
  transferCertificate(params: Iot.Types.TransferCertificateRequest, callback?: (err: AWSError, data: Iot.Types.TransferCertificateResponse) => void): Request<Iot.Types.TransferCertificateResponse, AWSError>;
  /**
   * Transfers the specified certificate to the specified AWS account. You can cancel the transfer until it is acknowledged by the recipient. No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target. The certificate being transferred must not be in the ACTIVE state. You can use the UpdateCertificate API to deactivate it. The certificate must not have any policies attached to it. You can use the DetachPrincipalPolicy API to detach them.
   */
  transferCertificate(callback?: (err: AWSError, data: Iot.Types.TransferCertificateResponse) => void): Request<Iot.Types.TransferCertificateResponse, AWSError>;
  /**
   * Updates a registered CA certificate.
   */
  updateCACertificate(params: Iot.Types.UpdateCACertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a registered CA certificate.
   */
  updateCACertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the status of the specified certificate. This operation is idempotent. Moving a certificate from the ACTIVE state (including REVOKED) will not disconnect currently connected devices, but these devices will be unable to reconnect. The ACTIVE state is required to authenticate devices connecting to AWS IoT using a certificate.
   */
  updateCertificate(params: Iot.Types.UpdateCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the status of the specified certificate. This operation is idempotent. Moving a certificate from the ACTIVE state (including REVOKED) will not disconnect currently connected devices, but these devices will be unable to reconnect. The ACTIVE state is required to authenticate devices connecting to AWS IoT using a certificate.
   */
  updateCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the data for a thing.
   */
  updateThing(params: Iot.Types.UpdateThingRequest, callback?: (err: AWSError, data: Iot.Types.UpdateThingResponse) => void): Request<Iot.Types.UpdateThingResponse, AWSError>;
  /**
   * Updates the data for a thing.
   */
  updateThing(callback?: (err: AWSError, data: Iot.Types.UpdateThingResponse) => void): Request<Iot.Types.UpdateThingResponse, AWSError>;
}
declare namespace Iot {
  export interface AcceptCertificateTransferRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
    /**
     * Specifies whether the certificate is active.
     */
    setAsActive?: SetAsActive;
  }
  export interface Action {
    /**
     * Write to a DynamoDB table.
     */
    dynamoDB?: DynamoDBAction;
    /**
     * Write to a DynamoDB table. This is a new version of the DynamoDB action. It allows you to write each attribute in an MQTT message payload into a separate DynamoDB column.
     */
    dynamoDBv2?: DynamoDBv2Action;
    /**
     * Invoke a Lambda function.
     */
    lambda?: LambdaAction;
    /**
     * Publish to an Amazon SNS topic.
     */
    sns?: SnsAction;
    /**
     * Publish to an Amazon SQS queue.
     */
    sqs?: SqsAction;
    /**
     * Write data to an Amazon Kinesis stream.
     */
    kinesis?: KinesisAction;
    /**
     * Publish to another MQTT topic.
     */
    republish?: RepublishAction;
    /**
     * Write to an Amazon S3 bucket.
     */
    s3?: S3Action;
    /**
     * Write to an Amazon Kinesis Firehose stream.
     */
    firehose?: FirehoseAction;
    /**
     * Capture a CloudWatch metric.
     */
    cloudwatchMetric?: CloudwatchMetricAction;
    /**
     * Change the state of a CloudWatch alarm.
     */
    cloudwatchAlarm?: CloudwatchAlarmAction;
    /**
     * Write data to an Amazon Elasticsearch Service domain.
     */
    elasticsearch?: ElasticsearchAction;
    /**
     * Send a message to a Salesforce IoT Cloud Input Stream.
     */
    salesforce?: SalesforceAction;
  }
  export type ActionList = Action[];
  export type AlarmName = string;
  export type AllowAutoRegistration = boolean;
  export type AscendingOrder = boolean;
  export interface AttachPrincipalPolicyRequest {
    /**
     * The policy name.
     */
    policyName: PolicyName;
    /**
     * The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID.
     */
    principal: Principal;
  }
  export interface AttachThingPrincipalRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
    /**
     * The principal, such as a certificate or other credential.
     */
    principal: Principal;
  }
  export interface AttachThingPrincipalResponse {
  }
  export type AttributeName = string;
  export interface AttributePayload {
    /**
     * A JSON string containing up to three key-value pair in JSON format. For example:  {\"attributes\":{\"string1\":\"string2\"}} 
     */
    attributes?: Attributes;
    /**
     * Specifies whether the list of attributes provided in the AttributePayload is merged with the attributes stored in the registry, instead of overwriting them. To remove an attribute, call UpdateThing with an empty attribute value.  The merge attribute is only valid when calling UpdateThing. 
     */
    merge?: Flag;
  }
  export type AttributeValue = string;
  export type Attributes = {[key: string]: AttributeValue};
  export type AutoRegistrationStatus = "ENABLE"|"DISABLE"|string;
  export type AwsAccountId = string;
  export type AwsArn = string;
  export type AwsIotSqlVersion = string;
  export type Boolean = boolean;
  export type BucketName = string;
  export interface CACertificate {
    /**
     * The ARN of the CA certificate.
     */
    certificateArn?: CertificateArn;
    /**
     * The ID of the CA certificate.
     */
    certificateId?: CertificateId;
    /**
     * The status of the CA certificate. The status value REGISTER_INACTIVE is deprecated and should not be used.
     */
    status?: CACertificateStatus;
    /**
     * The date the CA certificate was created.
     */
    creationDate?: DateType;
  }
  export interface CACertificateDescription {
    /**
     * The CA certificate ARN.
     */
    certificateArn?: CertificateArn;
    /**
     * The CA certificate ID.
     */
    certificateId?: CertificateId;
    /**
     * The status of a CA certificate.
     */
    status?: CACertificateStatus;
    /**
     * The CA certificate data, in PEM format.
     */
    certificatePem?: CertificatePem;
    /**
     * The owner of the CA certificate.
     */
    ownedBy?: AwsAccountId;
    /**
     * The date the CA certificate was created.
     */
    creationDate?: DateType;
    /**
     * Whether the CA certificate configured for auto registration of device certificates. Valid values are "ENABLE" and "DISABLE"
     */
    autoRegistrationStatus?: AutoRegistrationStatus;
  }
  export type CACertificateStatus = "ACTIVE"|"INACTIVE"|string;
  export type CACertificates = CACertificate[];
  export interface CancelCertificateTransferRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
  }
  export type CannedAccessControlList = "private"|"public-read"|"public-read-write"|"aws-exec-read"|"authenticated-read"|"bucket-owner-read"|"bucket-owner-full-control"|"log-delivery-write"|string;
  export interface Certificate {
    /**
     * The ARN of the certificate.
     */
    certificateArn?: CertificateArn;
    /**
     * The ID of the certificate.
     */
    certificateId?: CertificateId;
    /**
     * The status of the certificate. The status value REGISTER_INACTIVE is deprecated and should not be used.
     */
    status?: CertificateStatus;
    /**
     * The date and time the certificate was created.
     */
    creationDate?: DateType;
  }
  export type CertificateArn = string;
  export interface CertificateDescription {
    /**
     * The ARN of the certificate.
     */
    certificateArn?: CertificateArn;
    /**
     * The ID of the certificate.
     */
    certificateId?: CertificateId;
    /**
     * The certificate ID of the CA certificate used to sign this certificate.
     */
    caCertificateId?: CertificateId;
    /**
     * The status of the certificate.
     */
    status?: CertificateStatus;
    /**
     * The certificate data, in PEM format.
     */
    certificatePem?: CertificatePem;
    /**
     * The ID of the AWS account that owns the certificate.
     */
    ownedBy?: AwsAccountId;
    /**
     * The ID of the AWS account of the previous owner of the certificate.
     */
    previousOwnedBy?: AwsAccountId;
    /**
     * The date and time the certificate was created.
     */
    creationDate?: DateType;
    /**
     * The date and time the certificate was last modified.
     */
    lastModifiedDate?: DateType;
    /**
     * The transfer data.
     */
    transferData?: TransferData;
  }
  export type CertificateId = string;
  export type CertificatePem = string;
  export type CertificateSigningRequest = string;
  export type CertificateStatus = "ACTIVE"|"INACTIVE"|"REVOKED"|"PENDING_TRANSFER"|"REGISTER_INACTIVE"|"PENDING_ACTIVATION"|string;
  export type Certificates = Certificate[];
  export type ClientId = string;
  export interface CloudwatchAlarmAction {
    /**
     * The IAM role that allows access to the CloudWatch alarm.
     */
    roleArn: AwsArn;
    /**
     * The CloudWatch alarm name.
     */
    alarmName: AlarmName;
    /**
     * The reason for the alarm change.
     */
    stateReason: StateReason;
    /**
     * The value of the alarm state. Acceptable values are: OK, ALARM, INSUFFICIENT_DATA.
     */
    stateValue: StateValue;
  }
  export interface CloudwatchMetricAction {
    /**
     * The IAM role that allows access to the CloudWatch metric.
     */
    roleArn: AwsArn;
    /**
     * The CloudWatch metric namespace name.
     */
    metricNamespace: MetricNamespace;
    /**
     * The CloudWatch metric name.
     */
    metricName: MetricName;
    /**
     * The CloudWatch metric value.
     */
    metricValue: MetricValue;
    /**
     * The metric unit supported by CloudWatch.
     */
    metricUnit: MetricUnit;
    /**
     * An optional Unix timestamp.
     */
    metricTimestamp?: MetricTimestamp;
  }
  export interface CreateCertificateFromCsrRequest {
    /**
     * The certificate signing request (CSR).
     */
    certificateSigningRequest: CertificateSigningRequest;
    /**
     * Specifies whether the certificate is active.
     */
    setAsActive?: SetAsActive;
  }
  export interface CreateCertificateFromCsrResponse {
    /**
     * The Amazon Resource Name (ARN) of the certificate. You can use the ARN as a principal for policy operations.
     */
    certificateArn?: CertificateArn;
    /**
     * The ID of the certificate. Certificate management operations only take a certificateId.
     */
    certificateId?: CertificateId;
    /**
     * The certificate data, in PEM format.
     */
    certificatePem?: CertificatePem;
  }
  export interface CreateKeysAndCertificateRequest {
    /**
     * Specifies whether the certificate is active.
     */
    setAsActive?: SetAsActive;
  }
  export interface CreateKeysAndCertificateResponse {
    /**
     * The ARN of the certificate.
     */
    certificateArn?: CertificateArn;
    /**
     * The ID of the certificate. AWS IoT issues a default subject name for the certificate (for example, AWS IoT Certificate).
     */
    certificateId?: CertificateId;
    /**
     * The certificate data, in PEM format.
     */
    certificatePem?: CertificatePem;
    /**
     * The generated key pair.
     */
    keyPair?: KeyPair;
  }
  export interface CreatePolicyRequest {
    /**
     * The policy name.
     */
    policyName: PolicyName;
    /**
     * The JSON document that describes the policy. policyDocument must have a minimum length of 1, with a maximum length of 2048, excluding whitespace.
     */
    policyDocument: PolicyDocument;
  }
  export interface CreatePolicyResponse {
    /**
     * The policy name.
     */
    policyName?: PolicyName;
    /**
     * The policy ARN.
     */
    policyArn?: PolicyArn;
    /**
     * The JSON document that describes the policy.
     */
    policyDocument?: PolicyDocument;
    /**
     * The policy version ID.
     */
    policyVersionId?: PolicyVersionId;
  }
  export interface CreatePolicyVersionRequest {
    /**
     * The policy name.
     */
    policyName: PolicyName;
    /**
     * The JSON document that describes the policy. Minimum length of 1. Maximum length of 2048, excluding whitespaces
     */
    policyDocument: PolicyDocument;
    /**
     * Specifies whether the policy version is set as the default. When this parameter is true, the new policy version becomes the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
     */
    setAsDefault?: SetAsDefault;
  }
  export interface CreatePolicyVersionResponse {
    /**
     * The policy ARN.
     */
    policyArn?: PolicyArn;
    /**
     * The JSON document that describes the policy.
     */
    policyDocument?: PolicyDocument;
    /**
     * The policy version ID.
     */
    policyVersionId?: PolicyVersionId;
    /**
     * Specifies whether the policy version is the default.
     */
    isDefaultVersion?: IsDefaultVersion;
  }
  export interface CreateThingRequest {
    /**
     * The name of the thing to create.
     */
    thingName: ThingName;
    /**
     * The name of the thing type associated with the new thing.
     */
    thingTypeName?: ThingTypeName;
    /**
     * The attribute payload, which consists of up to three name/value pairs in a JSON document. For example:  {\"attributes\":{\"string1\":\"string2\"}} 
     */
    attributePayload?: AttributePayload;
  }
  export interface CreateThingResponse {
    /**
     * The name of the new thing.
     */
    thingName?: ThingName;
    /**
     * The ARN of the new thing.
     */
    thingArn?: ThingArn;
  }
  export interface CreateThingTypeRequest {
    /**
     * The name of the thing type.
     */
    thingTypeName: ThingTypeName;
    /**
     * The ThingTypeProperties for the thing type to create. It contains information about the new thing type including a description, and a list of searchable thing attribute names.
     */
    thingTypeProperties?: ThingTypeProperties;
  }
  export interface CreateThingTypeResponse {
    /**
     * The name of the thing type.
     */
    thingTypeName?: ThingTypeName;
    /**
     * The Amazon Resource Name (ARN) of the thing type.
     */
    thingTypeArn?: ThingTypeArn;
  }
  export interface CreateTopicRuleRequest {
    /**
     * The name of the rule.
     */
    ruleName: RuleName;
    /**
     * The rule payload.
     */
    topicRulePayload: TopicRulePayload;
  }
  export type CreatedAtDate = Date;
  export type CreationDate = Date;
  export type DateType = Date;
  export interface DeleteCACertificateRequest {
    /**
     * The ID of the certificate to delete.
     */
    certificateId: CertificateId;
  }
  export interface DeleteCACertificateResponse {
  }
  export interface DeleteCertificateRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
  }
  export interface DeletePolicyRequest {
    /**
     * The name of the policy to delete.
     */
    policyName: PolicyName;
  }
  export interface DeletePolicyVersionRequest {
    /**
     * The name of the policy.
     */
    policyName: PolicyName;
    /**
     * The policy version ID.
     */
    policyVersionId: PolicyVersionId;
  }
  export interface DeleteRegistrationCodeRequest {
  }
  export interface DeleteRegistrationCodeResponse {
  }
  export interface DeleteThingRequest {
    /**
     * The name of the thing to delete.
     */
    thingName: ThingName;
    /**
     * The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the DeleteThing request is rejected with a VersionConflictException.
     */
    expectedVersion?: OptionalVersion;
  }
  export interface DeleteThingResponse {
  }
  export interface DeleteThingTypeRequest {
    /**
     * The name of the thing type.
     */
    thingTypeName: ThingTypeName;
  }
  export interface DeleteThingTypeResponse {
  }
  export interface DeleteTopicRuleRequest {
    /**
     * The name of the rule.
     */
    ruleName: RuleName;
  }
  export type DeliveryStreamName = string;
  export interface DeprecateThingTypeRequest {
    /**
     * The name of the thing type to deprecate.
     */
    thingTypeName: ThingTypeName;
    /**
     * Whether to undeprecate a deprecated thing type. If true, the thing type will not be deprecated anymore and you can associate it with things.
     */
    undoDeprecate?: UndoDeprecate;
  }
  export interface DeprecateThingTypeResponse {
  }
  export type DeprecationDate = Date;
  export interface DescribeCACertificateRequest {
    /**
     * The CA certificate identifier.
     */
    certificateId: CertificateId;
  }
  export interface DescribeCACertificateResponse {
    /**
     * The CA certificate description.
     */
    certificateDescription?: CACertificateDescription;
  }
  export interface DescribeCertificateRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
  }
  export interface DescribeCertificateResponse {
    /**
     * The description of the certificate.
     */
    certificateDescription?: CertificateDescription;
  }
  export interface DescribeEndpointRequest {
  }
  export interface DescribeEndpointResponse {
    /**
     * The endpoint. The format of the endpoint is as follows: identifier.iot.region.amazonaws.com.
     */
    endpointAddress?: EndpointAddress;
  }
  export interface DescribeThingRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
  }
  export interface DescribeThingResponse {
    /**
     * The default client ID.
     */
    defaultClientId?: ClientId;
    /**
     * The name of the thing.
     */
    thingName?: ThingName;
    /**
     * The thing type name.
     */
    thingTypeName?: ThingTypeName;
    /**
     * The thing attributes.
     */
    attributes?: Attributes;
    /**
     * The current version of the thing record in the registry.  To avoid unintentional changes to the information in the registry, you can pass the version information in the expectedVersion parameter of the UpdateThing and DeleteThing calls. 
     */
    version?: Version;
  }
  export interface DescribeThingTypeRequest {
    /**
     * The name of the thing type.
     */
    thingTypeName: ThingTypeName;
  }
  export interface DescribeThingTypeResponse {
    /**
     * The name of the thing type.
     */
    thingTypeName?: ThingTypeName;
    /**
     * The ThingTypeProperties contains information about the thing type including description, and a list of searchable thing attribute names.
     */
    thingTypeProperties?: ThingTypeProperties;
    /**
     * The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when it was deprecated.
     */
    thingTypeMetadata?: ThingTypeMetadata;
  }
  export type Description = string;
  export interface DetachPrincipalPolicyRequest {
    /**
     * The name of the policy to detach.
     */
    policyName: PolicyName;
    /**
     * The principal. If the principal is a certificate, specify the certificate ARN. If the principal is an Amazon Cognito identity, specify the identity ID.
     */
    principal: Principal;
  }
  export interface DetachThingPrincipalRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
    /**
     * If the principal is a certificate, this value must be ARN of the certificate. If the principal is an Amazon Cognito identity, this value must be the ID of the Amazon Cognito identity.
     */
    principal: Principal;
  }
  export interface DetachThingPrincipalResponse {
  }
  export interface DisableTopicRuleRequest {
    /**
     * The name of the rule to disable.
     */
    ruleName: RuleName;
  }
  export interface DynamoDBAction {
    /**
     * The name of the DynamoDB table.
     */
    tableName: TableName;
    /**
     * The ARN of the IAM role that grants access to the DynamoDB table.
     */
    roleArn: AwsArn;
    /**
     * The type of operation to be performed. This follows the substitution template, so it can be ${operation}, but the substitution must result in one of the following: INSERT, UPDATE, or DELETE.
     */
    operation?: DynamoOperation;
    /**
     * The hash key name.
     */
    hashKeyField: HashKeyField;
    /**
     * The hash key value.
     */
    hashKeyValue: HashKeyValue;
    /**
     * The hash key type. Valid values are "STRING" or "NUMBER"
     */
    hashKeyType?: DynamoKeyType;
    /**
     * The range key name.
     */
    rangeKeyField?: RangeKeyField;
    /**
     * The range key value.
     */
    rangeKeyValue?: RangeKeyValue;
    /**
     * The range key type. Valid values are "STRING" or "NUMBER"
     */
    rangeKeyType?: DynamoKeyType;
    /**
     * The action payload. This name can be customized.
     */
    payloadField?: PayloadField;
  }
  export interface DynamoDBv2Action {
    /**
     * The ARN of the IAM role that grants access to the DynamoDB table.
     */
    roleArn?: AwsArn;
    /**
     * Specifies the DynamoDB table to which the message data will be written. For example:  { "dynamoDBv2": { "roleArn": "aws:iam:12341251:my-role" "putItem": { "tableName": "my-table" } } }  Each attribute in the message payload will be written to a separate column in the DynamoDB database.
     */
    putItem?: PutItemInput;
  }
  export type DynamoKeyType = "STRING"|"NUMBER"|string;
  export type DynamoOperation = string;
  export interface ElasticsearchAction {
    /**
     * The IAM role ARN that has access to Elasticsearch.
     */
    roleArn: AwsArn;
    /**
     * The endpoint of your Elasticsearch domain.
     */
    endpoint: ElasticsearchEndpoint;
    /**
     * The Elasticsearch index where you want to store your data.
     */
    index: ElasticsearchIndex;
    /**
     * The type of document you are storing.
     */
    type: ElasticsearchType;
    /**
     * The unique identifier for the document you are storing.
     */
    id: ElasticsearchId;
  }
  export type ElasticsearchEndpoint = string;
  export type ElasticsearchId = string;
  export type ElasticsearchIndex = string;
  export type ElasticsearchType = string;
  export interface EnableTopicRuleRequest {
    /**
     * The name of the topic rule to enable.
     */
    ruleName: RuleName;
  }
  export type EndpointAddress = string;
  export interface FirehoseAction {
    /**
     * The IAM role that grants access to the Amazon Kinesis Firehost stream.
     */
    roleArn: AwsArn;
    /**
     * The delivery stream name.
     */
    deliveryStreamName: DeliveryStreamName;
    /**
     * A character separator that will be used to separate records written to the Firehose stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
     */
    separator?: FirehoseSeparator;
  }
  export type FirehoseSeparator = string;
  export type Flag = boolean;
  export type FunctionArn = string;
  export interface GetLoggingOptionsRequest {
  }
  export interface GetLoggingOptionsResponse {
    /**
     * The ARN of the IAM role that grants access.
     */
    roleArn?: AwsArn;
    /**
     * The logging level.
     */
    logLevel?: LogLevel;
  }
  export interface GetPolicyRequest {
    /**
     * The name of the policy.
     */
    policyName: PolicyName;
  }
  export interface GetPolicyResponse {
    /**
     * The policy name.
     */
    policyName?: PolicyName;
    /**
     * The policy ARN.
     */
    policyArn?: PolicyArn;
    /**
     * The JSON document that describes the policy.
     */
    policyDocument?: PolicyDocument;
    /**
     * The default policy version ID.
     */
    defaultVersionId?: PolicyVersionId;
  }
  export interface GetPolicyVersionRequest {
    /**
     * The name of the policy.
     */
    policyName: PolicyName;
    /**
     * The policy version ID.
     */
    policyVersionId: PolicyVersionId;
  }
  export interface GetPolicyVersionResponse {
    /**
     * The policy ARN.
     */
    policyArn?: PolicyArn;
    /**
     * The policy name.
     */
    policyName?: PolicyName;
    /**
     * The JSON document that describes the policy.
     */
    policyDocument?: PolicyDocument;
    /**
     * The policy version ID.
     */
    policyVersionId?: PolicyVersionId;
    /**
     * Specifies whether the policy version is the default.
     */
    isDefaultVersion?: IsDefaultVersion;
  }
  export interface GetRegistrationCodeRequest {
  }
  export interface GetRegistrationCodeResponse {
    /**
     * The CA certificate registration code.
     */
    registrationCode?: RegistrationCode;
  }
  export interface GetTopicRuleRequest {
    /**
     * The name of the rule.
     */
    ruleName: RuleName;
  }
  export interface GetTopicRuleResponse {
    /**
     * The rule ARN.
     */
    ruleArn?: RuleArn;
    /**
     * The rule.
     */
    rule?: TopicRule;
  }
  export type HashKeyField = string;
  export type HashKeyValue = string;
  export type IsDefaultVersion = boolean;
  export type IsDisabled = boolean;
  export type Key = string;
  export interface KeyPair {
    /**
     * The public key.
     */
    PublicKey?: PublicKey;
    /**
     * The private key.
     */
    PrivateKey?: PrivateKey;
  }
  export interface KinesisAction {
    /**
     * The ARN of the IAM role that grants access to the Amazon Kinesis stream.
     */
    roleArn: AwsArn;
    /**
     * The name of the Amazon Kinesis stream.
     */
    streamName: StreamName;
    /**
     * The partition key.
     */
    partitionKey?: PartitionKey;
  }
  export interface LambdaAction {
    /**
     * The ARN of the Lambda function.
     */
    functionArn: FunctionArn;
  }
  export interface ListCACertificatesRequest {
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * Determines the order of the results.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListCACertificatesResponse {
    /**
     * The CA certificates registered in your AWS account.
     */
    certificates?: CACertificates;
    /**
     * The current position within the list of CA certificates.
     */
    nextMarker?: Marker;
  }
  export interface ListCertificatesByCARequest {
    /**
     * The ID of the CA certificate. This operation will list all registered device certificate that were signed by this CA certificate.
     */
    caCertificateId: CertificateId;
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListCertificatesByCAResponse {
    /**
     * The device certificates signed by the specified CA certificate.
     */
    certificates?: Certificates;
    /**
     * The marker for the next set of results, or null if there are no additional results.
     */
    nextMarker?: Marker;
  }
  export interface ListCertificatesRequest {
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListCertificatesResponse {
    /**
     * The descriptions of the certificates.
     */
    certificates?: Certificates;
    /**
     * The marker for the next set of results, or null if there are no additional results.
     */
    nextMarker?: Marker;
  }
  export interface ListOutgoingCertificatesRequest {
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListOutgoingCertificatesResponse {
    /**
     * The certificates that are being transfered but not yet accepted.
     */
    outgoingCertificates?: OutgoingCertificates;
    /**
     * The marker for the next set of results.
     */
    nextMarker?: Marker;
  }
  export interface ListPoliciesRequest {
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * Specifies the order for results. If true, the results are returned in ascending creation order.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListPoliciesResponse {
    /**
     * The descriptions of the policies.
     */
    policies?: Policies;
    /**
     * The marker for the next set of results, or null if there are no additional results.
     */
    nextMarker?: Marker;
  }
  export interface ListPolicyPrincipalsRequest {
    /**
     * The policy name.
     */
    policyName: PolicyName;
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * Specifies the order for results. If true, the results are returned in ascending creation order.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListPolicyPrincipalsResponse {
    /**
     * The descriptions of the principals.
     */
    principals?: Principals;
    /**
     * The marker for the next set of results, or null if there are no additional results.
     */
    nextMarker?: Marker;
  }
  export interface ListPolicyVersionsRequest {
    /**
     * The policy name.
     */
    policyName: PolicyName;
  }
  export interface ListPolicyVersionsResponse {
    /**
     * The policy versions.
     */
    policyVersions?: PolicyVersions;
  }
  export interface ListPrincipalPoliciesRequest {
    /**
     * The principal.
     */
    principal: Principal;
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * Specifies the order for results. If true, results are returned in ascending creation order.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListPrincipalPoliciesResponse {
    /**
     * The policies.
     */
    policies?: Policies;
    /**
     * The marker for the next set of results, or null if there are no additional results.
     */
    nextMarker?: Marker;
  }
  export interface ListPrincipalThingsRequest {
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in this operation.
     */
    maxResults?: RegistryMaxResults;
    /**
     * The principal.
     */
    principal: Principal;
  }
  export interface ListPrincipalThingsResponse {
    /**
     * The things.
     */
    things?: ThingNameList;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListThingPrincipalsRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
  }
  export interface ListThingPrincipalsResponse {
    /**
     * The principals associated with the thing.
     */
    principals?: Principals;
  }
  export interface ListThingTypesRequest {
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in this operation.
     */
    maxResults?: RegistryMaxResults;
    /**
     * The name of the thing type.
     */
    thingTypeName?: ThingTypeName;
  }
  export interface ListThingTypesResponse {
    /**
     * The thing types.
     */
    thingTypes?: ThingTypeList;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListThingsRequest {
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in this operation.
     */
    maxResults?: RegistryMaxResults;
    /**
     * The attribute name used to search for things.
     */
    attributeName?: AttributeName;
    /**
     * The attribute value used to search for things.
     */
    attributeValue?: AttributeValue;
    /**
     * The name of the thing type used to search for things.
     */
    thingTypeName?: ThingTypeName;
  }
  export interface ListThingsResponse {
    /**
     * The things.
     */
    things?: ThingAttributeList;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListTopicRulesRequest {
    /**
     * The topic.
     */
    topic?: Topic;
    /**
     * The maximum number of results to return.
     */
    maxResults?: MaxResults;
    /**
     * A token used to retrieve the next value.
     */
    nextToken?: NextToken;
    /**
     * Specifies whether the rule is disabled.
     */
    ruleDisabled?: IsDisabled;
  }
  export interface ListTopicRulesResponse {
    /**
     * The rules.
     */
    rules?: TopicRuleList;
    /**
     * A token used to retrieve the next value.
     */
    nextToken?: NextToken;
  }
  export type LogLevel = "DEBUG"|"INFO"|"ERROR"|"WARN"|"DISABLED"|string;
  export interface LoggingOptionsPayload {
    /**
     * The ARN of the IAM role that grants access.
     */
    roleArn: AwsArn;
    /**
     * The logging level.
     */
    logLevel?: LogLevel;
  }
  export type Marker = string;
  export type MaxResults = number;
  export type Message = string;
  export type MessageFormat = "RAW"|"JSON"|string;
  export type MetricName = string;
  export type MetricNamespace = string;
  export type MetricTimestamp = string;
  export type MetricUnit = string;
  export type MetricValue = string;
  export type NextToken = string;
  export type OptionalVersion = number;
  export interface OutgoingCertificate {
    /**
     * The certificate ARN.
     */
    certificateArn?: CertificateArn;
    /**
     * The certificate ID.
     */
    certificateId?: CertificateId;
    /**
     * The AWS account to which the transfer was made.
     */
    transferredTo?: AwsAccountId;
    /**
     * The date the transfer was initiated.
     */
    transferDate?: DateType;
    /**
     * The transfer message.
     */
    transferMessage?: Message;
    /**
     * The certificate creation date.
     */
    creationDate?: DateType;
  }
  export type OutgoingCertificates = OutgoingCertificate[];
  export type PageSize = number;
  export type PartitionKey = string;
  export type PayloadField = string;
  export type Policies = Policy[];
  export interface Policy {
    /**
     * The policy name.
     */
    policyName?: PolicyName;
    /**
     * The policy ARN.
     */
    policyArn?: PolicyArn;
  }
  export type PolicyArn = string;
  export type PolicyDocument = string;
  export type PolicyName = string;
  export interface PolicyVersion {
    /**
     * The policy version ID.
     */
    versionId?: PolicyVersionId;
    /**
     * Specifies whether the policy version is the default.
     */
    isDefaultVersion?: IsDefaultVersion;
    /**
     * The date and time the policy was created.
     */
    createDate?: DateType;
  }
  export type PolicyVersionId = string;
  export type PolicyVersions = PolicyVersion[];
  export type Principal = string;
  export type PrincipalArn = string;
  export type Principals = PrincipalArn[];
  export type PrivateKey = string;
  export type PublicKey = string;
  export interface PutItemInput {
    /**
     * The table where the message data will be written
     */
    tableName: TableName;
  }
  export type QueueUrl = string;
  export type RangeKeyField = string;
  export type RangeKeyValue = string;
  export interface RegisterCACertificateRequest {
    /**
     * The CA certificate.
     */
    caCertificate: CertificatePem;
    /**
     * The private key verification certificate.
     */
    verificationCertificate: CertificatePem;
    /**
     * A boolean value that specifies if the CA certificate is set to active.
     */
    setAsActive?: SetAsActive;
    /**
     * Allows this CA certificate to be used for auto registration of device certificates.
     */
    allowAutoRegistration?: AllowAutoRegistration;
  }
  export interface RegisterCACertificateResponse {
    /**
     * The CA certificate ARN.
     */
    certificateArn?: CertificateArn;
    /**
     * The CA certificate identifier.
     */
    certificateId?: CertificateId;
  }
  export interface RegisterCertificateRequest {
    /**
     * The certificate data, in PEM format.
     */
    certificatePem: CertificatePem;
    /**
     * The CA certificate used to sign the device certificate being registered.
     */
    caCertificatePem?: CertificatePem;
    /**
     * A boolean value that specifies if the CA certificate is set to active.
     */
    setAsActive?: SetAsActiveFlag;
    /**
     * The status of the register certificate request.
     */
    status?: CertificateStatus;
  }
  export interface RegisterCertificateResponse {
    /**
     * The certificate ARN.
     */
    certificateArn?: CertificateArn;
    /**
     * The certificate identifier.
     */
    certificateId?: CertificateId;
  }
  export type RegistrationCode = string;
  export type RegistryMaxResults = number;
  export interface RejectCertificateTransferRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
    /**
     * The reason the certificate transfer was rejected.
     */
    rejectReason?: Message;
  }
  export type RemoveThingType = boolean;
  export interface ReplaceTopicRuleRequest {
    /**
     * The name of the rule.
     */
    ruleName: RuleName;
    /**
     * The rule payload.
     */
    topicRulePayload: TopicRulePayload;
  }
  export interface RepublishAction {
    /**
     * The ARN of the IAM role that grants access.
     */
    roleArn: AwsArn;
    /**
     * The name of the MQTT topic.
     */
    topic: TopicPattern;
  }
  export type RuleArn = string;
  export type RuleName = string;
  export interface S3Action {
    /**
     * The ARN of the IAM role that grants access.
     */
    roleArn: AwsArn;
    /**
     * The Amazon S3 bucket.
     */
    bucketName: BucketName;
    /**
     * The object key.
     */
    key: Key;
    /**
     * The Amazon S3 canned ACL that controls access to the object identified by the object key. For more information, see S3 canned ACLs.
     */
    cannedAcl?: CannedAccessControlList;
  }
  export type SQL = string;
  export interface SalesforceAction {
    /**
     * The token used to authenticate access to the Salesforce IoT Cloud Input Stream. The token is available from the Salesforce IoT Cloud platform after creation of the Input Stream.
     */
    token: SalesforceToken;
    /**
     * The URL exposed by the Salesforce IoT Cloud Input Stream. The URL is available from the Salesforce IoT Cloud platform after creation of the Input Stream.
     */
    url: SalesforceEndpoint;
  }
  export type SalesforceEndpoint = string;
  export type SalesforceToken = string;
  export type SearchableAttributes = AttributeName[];
  export type SetAsActive = boolean;
  export type SetAsActiveFlag = boolean;
  export type SetAsDefault = boolean;
  export interface SetDefaultPolicyVersionRequest {
    /**
     * The policy name.
     */
    policyName: PolicyName;
    /**
     * The policy version ID.
     */
    policyVersionId: PolicyVersionId;
  }
  export interface SetLoggingOptionsRequest {
    /**
     * The logging options payload.
     */
    loggingOptionsPayload: LoggingOptionsPayload;
  }
  export interface SnsAction {
    /**
     * The ARN of the SNS topic.
     */
    targetArn: AwsArn;
    /**
     * The ARN of the IAM role that grants access.
     */
    roleArn: AwsArn;
    /**
     * The message format of the message to publish. Optional. Accepted values are "JSON" and "RAW". The default value of the attribute is "RAW". SNS uses this setting to determine if the payload should be parsed and relevant platform-specific bits of the payload should be extracted. To read more about SNS message formats, see http://docs.aws.amazon.com/sns/latest/dg/json-formats.html refer to their official documentation.
     */
    messageFormat?: MessageFormat;
  }
  export interface SqsAction {
    /**
     * The ARN of the IAM role that grants access.
     */
    roleArn: AwsArn;
    /**
     * The URL of the Amazon SQS queue.
     */
    queueUrl: QueueUrl;
    /**
     * Specifies whether to use Base64 encoding.
     */
    useBase64?: UseBase64;
  }
  export type StateReason = string;
  export type StateValue = string;
  export type StreamName = string;
  export type TableName = string;
  export type ThingArn = string;
  export interface ThingAttribute {
    /**
     * The name of the thing.
     */
    thingName?: ThingName;
    /**
     * The name of the thing type, if the thing has been associated with a type.
     */
    thingTypeName?: ThingTypeName;
    /**
     * A list of thing attributes which are name-value pairs.
     */
    attributes?: Attributes;
    /**
     * The version of the thing record in the registry.
     */
    version?: Version;
  }
  export type ThingAttributeList = ThingAttribute[];
  export type ThingName = string;
  export type ThingNameList = ThingName[];
  export type ThingTypeArn = string;
  export interface ThingTypeDefinition {
    /**
     * The name of the thing type.
     */
    thingTypeName?: ThingTypeName;
    /**
     * The ThingTypeProperties for the thing type.
     */
    thingTypeProperties?: ThingTypeProperties;
    /**
     * The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when it was deprecated.
     */
    thingTypeMetadata?: ThingTypeMetadata;
  }
  export type ThingTypeDescription = string;
  export type ThingTypeList = ThingTypeDefinition[];
  export interface ThingTypeMetadata {
    /**
     * Whether the thing type is deprecated. If true, no new things could be associated with this type.
     */
    deprecated?: Boolean;
    /**
     * The date and time when the thing type was deprecated.
     */
    deprecationDate?: DeprecationDate;
    /**
     * The date and time when the thing type was created.
     */
    creationDate?: CreationDate;
  }
  export type ThingTypeName = string;
  export interface ThingTypeProperties {
    /**
     * The description of the thing type.
     */
    thingTypeDescription?: ThingTypeDescription;
    /**
     * A list of searchable thing attribute names.
     */
    searchableAttributes?: SearchableAttributes;
  }
  export type Topic = string;
  export type TopicPattern = string;
  export interface TopicRule {
    /**
     * The name of the rule.
     */
    ruleName?: RuleName;
    /**
     * The SQL statement used to query the topic. When using a SQL query with multiple lines, be sure to escape the newline characters.
     */
    sql?: SQL;
    /**
     * The description of the rule.
     */
    description?: Description;
    /**
     * The date and time the rule was created.
     */
    createdAt?: CreatedAtDate;
    /**
     * The actions associated with the rule.
     */
    actions?: ActionList;
    /**
     * Specifies whether the rule is disabled.
     */
    ruleDisabled?: IsDisabled;
    /**
     * The version of the SQL rules engine to use when evaluating the rule.
     */
    awsIotSqlVersion?: AwsIotSqlVersion;
  }
  export type TopicRuleList = TopicRuleListItem[];
  export interface TopicRuleListItem {
    /**
     * The rule ARN.
     */
    ruleArn?: RuleArn;
    /**
     * The name of the rule.
     */
    ruleName?: RuleName;
    /**
     * The pattern for the topic names that apply.
     */
    topicPattern?: TopicPattern;
    /**
     * The date and time the rule was created.
     */
    createdAt?: CreatedAtDate;
    /**
     * Specifies whether the rule is disabled.
     */
    ruleDisabled?: IsDisabled;
  }
  export interface TopicRulePayload {
    /**
     * The SQL statement used to query the topic. For more information, see AWS IoT SQL Reference in the AWS IoT Developer Guide.
     */
    sql: SQL;
    /**
     * The description of the rule.
     */
    description?: Description;
    /**
     * The actions associated with the rule.
     */
    actions: ActionList;
    /**
     * Specifies whether the rule is disabled.
     */
    ruleDisabled?: IsDisabled;
    /**
     * The version of the SQL rules engine to use when evaluating the rule.
     */
    awsIotSqlVersion?: AwsIotSqlVersion;
  }
  export interface TransferCertificateRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
    /**
     * The AWS account.
     */
    targetAwsAccount: AwsAccountId;
    /**
     * The transfer message.
     */
    transferMessage?: Message;
  }
  export interface TransferCertificateResponse {
    /**
     * The ARN of the certificate.
     */
    transferredCertificateArn?: CertificateArn;
  }
  export interface TransferData {
    /**
     * The transfer message.
     */
    transferMessage?: Message;
    /**
     * The reason why the transfer was rejected.
     */
    rejectReason?: Message;
    /**
     * The date the transfer took place.
     */
    transferDate?: DateType;
    /**
     * The date the transfer was accepted.
     */
    acceptDate?: DateType;
    /**
     * The date the transfer was rejected.
     */
    rejectDate?: DateType;
  }
  export type UndoDeprecate = boolean;
  export interface UpdateCACertificateRequest {
    /**
     * The CA certificate identifier.
     */
    certificateId: CertificateId;
    /**
     * The updated status of the CA certificate.  Note: The status value REGISTER_INACTIVE is deprecated and should not be used.
     */
    newStatus?: CACertificateStatus;
    /**
     * The new value for the auto registration status. Valid values are: "ENABLE" or "DISABLE".
     */
    newAutoRegistrationStatus?: AutoRegistrationStatus;
  }
  export interface UpdateCertificateRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
    /**
     * The new status.  Note: Setting the status to PENDING_TRANSFER will result in an exception being thrown. PENDING_TRANSFER is a status used internally by AWS IoT. It is not intended for developer use.  Note: The status value REGISTER_INACTIVE is deprecated and should not be used.
     */
    newStatus: CertificateStatus;
  }
  export interface UpdateThingRequest {
    /**
     * The name of the thing to update.
     */
    thingName: ThingName;
    /**
     * The name of the thing type.
     */
    thingTypeName?: ThingTypeName;
    /**
     * A list of thing attributes, a JSON string containing name-value pairs. For example:  {\"attributes\":{\"name1\":\"value2\"}}  This data is used to add new attributes or update existing attributes.
     */
    attributePayload?: AttributePayload;
    /**
     * The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the UpdateThing request is rejected with a VersionConflictException.
     */
    expectedVersion?: OptionalVersion;
    /**
     * Remove a thing type association. If true, the assocation is removed.
     */
    removeThingType?: RemoveThingType;
  }
  export interface UpdateThingResponse {
  }
  export type UseBase64 = boolean;
  export type Version = number;
  export type errorMessage = string;
  export type resourceArn = string;
  export type resourceId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-05-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Iot client.
   */
  export import Types = Iot;
}
export = Iot;
