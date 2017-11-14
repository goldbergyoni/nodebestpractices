import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ACM extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ACM.Types.ClientConfiguration)
  config: Config & ACM.Types.ClientConfiguration;
  /**
   * Adds one or more tags to an ACM Certificate. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM Certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see Tagging ACM Certificates. To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that have been applied to the certificate, use the ListTagsForCertificate action.
   */
  addTagsToCertificate(params: ACM.Types.AddTagsToCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more tags to an ACM Certificate. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM Certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see Tagging ACM Certificates. To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that have been applied to the certificate, use the ListTagsForCertificate action.
   */
  addTagsToCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an ACM Certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list of ACM Certificates that can be displayed by calling the ListCertificates action or be retrieved by calling the GetCertificate action. The certificate will not be available for use by other AWS services.  You cannot delete an ACM Certificate that is being used by another AWS service. To delete a certificate that is in use, the certificate association must first be removed. 
   */
  deleteCertificate(params: ACM.Types.DeleteCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an ACM Certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list of ACM Certificates that can be displayed by calling the ListCertificates action or be retrieved by calling the GetCertificate action. The certificate will not be available for use by other AWS services.  You cannot delete an ACM Certificate that is being used by another AWS service. To delete a certificate that is in use, the certificate association must first be removed. 
   */
  deleteCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns detailed metadata about the specified ACM Certificate.
   */
  describeCertificate(params: ACM.Types.DescribeCertificateRequest, callback?: (err: AWSError, data: ACM.Types.DescribeCertificateResponse) => void): Request<ACM.Types.DescribeCertificateResponse, AWSError>;
  /**
   * Returns detailed metadata about the specified ACM Certificate.
   */
  describeCertificate(callback?: (err: AWSError, data: ACM.Types.DescribeCertificateResponse) => void): Request<ACM.Types.DescribeCertificateResponse, AWSError>;
  /**
   * Retrieves an ACM Certificate and certificate chain for the certificate specified by an ARN. The chain is an ordered list of certificates that contains the root certificate, intermediate certificates of subordinate CAs, and the ACM Certificate. The certificate and certificate chain are base64 encoded. If you want to decode the certificate chain to see the individual certificate fields, you can use OpenSSL.  Currently, ACM Certificates can be used only with Elastic Load Balancing and Amazon CloudFront. 
   */
  getCertificate(params: ACM.Types.GetCertificateRequest, callback?: (err: AWSError, data: ACM.Types.GetCertificateResponse) => void): Request<ACM.Types.GetCertificateResponse, AWSError>;
  /**
   * Retrieves an ACM Certificate and certificate chain for the certificate specified by an ARN. The chain is an ordered list of certificates that contains the root certificate, intermediate certificates of subordinate CAs, and the ACM Certificate. The certificate and certificate chain are base64 encoded. If you want to decode the certificate chain to see the individual certificate fields, you can use OpenSSL.  Currently, ACM Certificates can be used only with Elastic Load Balancing and Amazon CloudFront. 
   */
  getCertificate(callback?: (err: AWSError, data: ACM.Types.GetCertificateResponse) => void): Request<ACM.Types.GetCertificateResponse, AWSError>;
  /**
   * Imports an SSL/TLS certificate into AWS Certificate Manager (ACM) to use with ACM's integrated AWS services.  ACM does not provide managed renewal for certificates that you import.  For more information about importing certificates into ACM, including the differences between certificates that you import and those that ACM provides, see Importing Certificates in the AWS Certificate Manager User Guide. To import a certificate, you must provide the certificate and the matching private key. When the certificate is not self-signed, you must also provide a certificate chain. You can omit the certificate chain when importing a self-signed certificate. The certificate, private key, and certificate chain must be PEM-encoded. For more information about converting these items to PEM format, see Importing Certificates Troubleshooting in the AWS Certificate Manager User Guide. To import a new certificate, omit the CertificateArn field. Include this field only when you want to replace a previously imported certificate. This operation returns the Amazon Resource Name (ARN) of the imported certificate.
   */
  importCertificate(params: ACM.Types.ImportCertificateRequest, callback?: (err: AWSError, data: ACM.Types.ImportCertificateResponse) => void): Request<ACM.Types.ImportCertificateResponse, AWSError>;
  /**
   * Imports an SSL/TLS certificate into AWS Certificate Manager (ACM) to use with ACM's integrated AWS services.  ACM does not provide managed renewal for certificates that you import.  For more information about importing certificates into ACM, including the differences between certificates that you import and those that ACM provides, see Importing Certificates in the AWS Certificate Manager User Guide. To import a certificate, you must provide the certificate and the matching private key. When the certificate is not self-signed, you must also provide a certificate chain. You can omit the certificate chain when importing a self-signed certificate. The certificate, private key, and certificate chain must be PEM-encoded. For more information about converting these items to PEM format, see Importing Certificates Troubleshooting in the AWS Certificate Manager User Guide. To import a new certificate, omit the CertificateArn field. Include this field only when you want to replace a previously imported certificate. This operation returns the Amazon Resource Name (ARN) of the imported certificate.
   */
  importCertificate(callback?: (err: AWSError, data: ACM.Types.ImportCertificateResponse) => void): Request<ACM.Types.ImportCertificateResponse, AWSError>;
  /**
   * Retrieves a list of ACM Certificates and the domain name for each. You can optionally filter the list to return only the certificates that match the specified status.
   */
  listCertificates(params: ACM.Types.ListCertificatesRequest, callback?: (err: AWSError, data: ACM.Types.ListCertificatesResponse) => void): Request<ACM.Types.ListCertificatesResponse, AWSError>;
  /**
   * Retrieves a list of ACM Certificates and the domain name for each. You can optionally filter the list to return only the certificates that match the specified status.
   */
  listCertificates(callback?: (err: AWSError, data: ACM.Types.ListCertificatesResponse) => void): Request<ACM.Types.ListCertificatesResponse, AWSError>;
  /**
   * Lists the tags that have been applied to the ACM Certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM Certificate, use the AddTagsToCertificate action. To delete a tag, use the RemoveTagsFromCertificate action.
   */
  listTagsForCertificate(params: ACM.Types.ListTagsForCertificateRequest, callback?: (err: AWSError, data: ACM.Types.ListTagsForCertificateResponse) => void): Request<ACM.Types.ListTagsForCertificateResponse, AWSError>;
  /**
   * Lists the tags that have been applied to the ACM Certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM Certificate, use the AddTagsToCertificate action. To delete a tag, use the RemoveTagsFromCertificate action.
   */
  listTagsForCertificate(callback?: (err: AWSError, data: ACM.Types.ListTagsForCertificateResponse) => void): Request<ACM.Types.ListTagsForCertificateResponse, AWSError>;
  /**
   * Remove one or more tags from an ACM Certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific ACM Certificate, use the ListTagsForCertificate action.
   */
  removeTagsFromCertificate(params: ACM.Types.RemoveTagsFromCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove one or more tags from an ACM Certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific ACM Certificate, use the ListTagsForCertificate action.
   */
  removeTagsFromCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Requests an ACM Certificate for use with other AWS services. To request an ACM Certificate, you must specify the fully qualified domain name (FQDN) for your site. You can also specify additional FQDNs if users can reach your site by using other names. For each domain name you specify, email is sent to the domain owner to request approval to issue the certificate. After receiving approval from the domain owner, the ACM Certificate is issued. For more information, see the AWS Certificate Manager User Guide.
   */
  requestCertificate(params: ACM.Types.RequestCertificateRequest, callback?: (err: AWSError, data: ACM.Types.RequestCertificateResponse) => void): Request<ACM.Types.RequestCertificateResponse, AWSError>;
  /**
   * Requests an ACM Certificate for use with other AWS services. To request an ACM Certificate, you must specify the fully qualified domain name (FQDN) for your site. You can also specify additional FQDNs if users can reach your site by using other names. For each domain name you specify, email is sent to the domain owner to request approval to issue the certificate. After receiving approval from the domain owner, the ACM Certificate is issued. For more information, see the AWS Certificate Manager User Guide.
   */
  requestCertificate(callback?: (err: AWSError, data: ACM.Types.RequestCertificateResponse) => void): Request<ACM.Types.RequestCertificateResponse, AWSError>;
  /**
   * Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM Certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM Certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see Configure Email for your Domain. 
   */
  resendValidationEmail(params: ACM.Types.ResendValidationEmailRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM Certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM Certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see Configure Email for your Domain. 
   */
  resendValidationEmail(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace ACM {
  export interface AddTagsToCertificateRequest {
    /**
     * String that contains the ARN of the ACM Certificate to which the tag is to be applied. This must be of the form:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    CertificateArn: Arn;
    /**
     * The key-value pair that defines the tag. The tag value is optional.
     */
    Tags: TagList;
  }
  export type Arn = string;
  export type CertificateBody = string;
  export type CertificateBodyBlob = Buffer|Uint8Array|Blob|string;
  export type CertificateChain = string;
  export type CertificateChainBlob = Buffer|Uint8Array|Blob|string;
  export interface CertificateDetail {
    /**
     * The Amazon Resource Name (ARN) of the certificate. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    CertificateArn?: Arn;
    /**
     * The fully qualified domain name for the certificate, such as www.example.com or example.com.
     */
    DomainName?: DomainNameString;
    /**
     * One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website.
     */
    SubjectAlternativeNames?: DomainList;
    /**
     * Contains information about the initial validation of each domain name that occurs as a result of the RequestCertificate request. This field exists only when the certificate type is AMAZON_ISSUED.
     */
    DomainValidationOptions?: DomainValidationList;
    /**
     * The serial number of the certificate.
     */
    Serial?: String;
    /**
     * The name of the entity that is associated with the public key contained in the certificate.
     */
    Subject?: String;
    /**
     * The name of the certificate authority that issued and signed the certificate.
     */
    Issuer?: String;
    /**
     * The time at which the certificate was requested. This value exists only when the certificate type is AMAZON_ISSUED.
     */
    CreatedAt?: TStamp;
    /**
     * The time at which the certificate was issued. This value exists only when the certificate type is AMAZON_ISSUED.
     */
    IssuedAt?: TStamp;
    /**
     * The date and time at which the certificate was imported. This value exists only when the certificate type is IMPORTED.
     */
    ImportedAt?: TStamp;
    /**
     * The status of the certificate.
     */
    Status?: CertificateStatus;
    /**
     * The time at which the certificate was revoked. This value exists only when the certificate status is REVOKED.
     */
    RevokedAt?: TStamp;
    /**
     * The reason the certificate was revoked. This value exists only when the certificate status is REVOKED.
     */
    RevocationReason?: RevocationReason;
    /**
     * The time before which the certificate is not valid.
     */
    NotBefore?: TStamp;
    /**
     * The time after which the certificate is not valid.
     */
    NotAfter?: TStamp;
    /**
     * The algorithm that was used to generate the key pair (the public and private key).
     */
    KeyAlgorithm?: KeyAlgorithm;
    /**
     * The algorithm that was used to sign the certificate.
     */
    SignatureAlgorithm?: String;
    /**
     * A list of ARNs for the AWS resources that are using the certificate. A certificate can be used by multiple AWS resources.
     */
    InUseBy?: InUseList;
    /**
     * The reason the certificate request failed. This value exists only when the certificate status is FAILED. For more information, see Certificate Request Failed in the AWS Certificate Manager User Guide.
     */
    FailureReason?: FailureReason;
    /**
     * The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED. For certificates that you imported with ImportCertificate, this value is IMPORTED. ACM does not provide managed renewal for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see Importing Certificates in the AWS Certificate Manager User Guide.
     */
    Type?: CertificateType;
    /**
     * Contains information about the status of ACM's managed renewal for the certificate. This field exists only when the certificate type is AMAZON_ISSUED.
     */
    RenewalSummary?: RenewalSummary;
  }
  export type CertificateStatus = "PENDING_VALIDATION"|"ISSUED"|"INACTIVE"|"EXPIRED"|"VALIDATION_TIMED_OUT"|"REVOKED"|"FAILED"|string;
  export type CertificateStatuses = CertificateStatus[];
  export interface CertificateSummary {
    /**
     * Amazon Resource Name (ARN) of the certificate. This is of the form:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    CertificateArn?: Arn;
    /**
     * Fully qualified domain name (FQDN), such as www.example.com or example.com, for the certificate.
     */
    DomainName?: DomainNameString;
  }
  export type CertificateSummaryList = CertificateSummary[];
  export type CertificateType = "IMPORTED"|"AMAZON_ISSUED"|string;
  export interface DeleteCertificateRequest {
    /**
     * String that contains the ARN of the ACM Certificate to be deleted. This must be of the form:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    CertificateArn: Arn;
  }
  export interface DescribeCertificateRequest {
    /**
     * The Amazon Resource Name (ARN) of the ACM Certificate. The ARN must have the following form:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    CertificateArn: Arn;
  }
  export interface DescribeCertificateResponse {
    /**
     * Metadata about an ACM certificate.
     */
    Certificate?: CertificateDetail;
  }
  export type DomainList = DomainNameString[];
  export type DomainNameString = string;
  export type DomainStatus = "PENDING_VALIDATION"|"SUCCESS"|"FAILED"|string;
  export interface DomainValidation {
    /**
     * A fully qualified domain name (FQDN) in the certificate. For example, www.example.com or example.com.
     */
    DomainName: DomainNameString;
    /**
     * A list of email addresses that ACM used to send domain validation emails.
     */
    ValidationEmails?: ValidationEmailList;
    /**
     * The domain name that ACM used to send domain validation emails.
     */
    ValidationDomain?: DomainNameString;
    /**
     * The validation status of the domain name.
     */
    ValidationStatus?: DomainStatus;
  }
  export type DomainValidationList = DomainValidation[];
  export interface DomainValidationOption {
    /**
     * A fully qualified domain name (FQDN) in the certificate request.
     */
    DomainName: DomainNameString;
    /**
     * The domain name that you want ACM to use to send you validation emails. This domain name is the suffix of the email addresses that you want ACM to use. This must be the same as the DomainName value or a superdomain of the DomainName value. For example, if you request a certificate for testing.example.com, you can specify example.com for this value. In that case, ACM sends domain validation emails to the following five addresses:   admin@example.com   administrator@example.com   hostmaster@example.com   postmaster@example.com   webmaster@example.com  
     */
    ValidationDomain: DomainNameString;
  }
  export type DomainValidationOptionList = DomainValidationOption[];
  export type FailureReason = "NO_AVAILABLE_CONTACTS"|"ADDITIONAL_VERIFICATION_REQUIRED"|"DOMAIN_NOT_ALLOWED"|"INVALID_PUBLIC_DOMAIN"|"OTHER"|string;
  export interface GetCertificateRequest {
    /**
     * String that contains a certificate ARN in the following format:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    CertificateArn: Arn;
  }
  export interface GetCertificateResponse {
    /**
     * String that contains the ACM Certificate represented by the ARN specified at input.
     */
    Certificate?: CertificateBody;
    /**
     * The certificate chain that contains the root certificate issued by the certificate authority (CA).
     */
    CertificateChain?: CertificateChain;
  }
  export type IdempotencyToken = string;
  export interface ImportCertificateRequest {
    /**
     * The Amazon Resource Name (ARN) of an imported certificate to replace. To import a new certificate, omit this field.
     */
    CertificateArn?: Arn;
    /**
     * The certificate to import. It must meet the following requirements:   Must be PEM-encoded.   Must contain a 1024-bit or 2048-bit RSA public key.   Must be valid at the time of import. You cannot import a certificate before its validity period begins (the certificate's NotBefore date) or after it expires (the certificate's NotAfter date).  
     */
    Certificate: CertificateBodyBlob;
    /**
     * The private key that matches the public key in the certificate. It must meet the following requirements:   Must be PEM-encoded.   Must be unencrypted. You cannot import a private key that is protected by a password or passphrase.  
     */
    PrivateKey: PrivateKeyBlob;
    /**
     * The certificate chain. It must be PEM-encoded.
     */
    CertificateChain?: CertificateChainBlob;
  }
  export interface ImportCertificateResponse {
    /**
     * The Amazon Resource Name (ARN) of the imported certificate.
     */
    CertificateArn?: Arn;
  }
  export type InUseList = String[];
  export type KeyAlgorithm = "RSA_2048"|"RSA_1024"|"EC_prime256v1"|string;
  export interface ListCertificatesRequest {
    /**
     * The status or statuses on which to filter the list of ACM Certificates.
     */
    CertificateStatuses?: CertificateStatuses;
    /**
     * Use this parameter only when paginating results and only in a subsequent request after you receive a response with truncated results. Set it to the value of NextToken from the response you just received.
     */
    NextToken?: NextToken;
    /**
     * Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this NextToken value in a subsequent request to retrieve additional items.
     */
    MaxItems?: MaxItems;
  }
  export interface ListCertificatesResponse {
    /**
     * When the list is truncated, this value is present and contains the value to use for the NextToken parameter in a subsequent pagination request.
     */
    NextToken?: NextToken;
    /**
     * A list of ACM Certificates.
     */
    CertificateSummaryList?: CertificateSummaryList;
  }
  export interface ListTagsForCertificateRequest {
    /**
     * String that contains the ARN of the ACM Certificate for which you want to list the tags. This has the following form:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    CertificateArn: Arn;
  }
  export interface ListTagsForCertificateResponse {
    /**
     * The key-value pairs that define the applied tags.
     */
    Tags?: TagList;
  }
  export type MaxItems = number;
  export type NextToken = string;
  export type PrivateKeyBlob = Buffer|Uint8Array|Blob|string;
  export interface RemoveTagsFromCertificateRequest {
    /**
     * String that contains the ARN of the ACM Certificate with one or more tags that you want to remove. This must be of the form:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    CertificateArn: Arn;
    /**
     * The key-value pair that defines the tag to remove.
     */
    Tags: TagList;
  }
  export type RenewalStatus = "PENDING_AUTO_RENEWAL"|"PENDING_VALIDATION"|"SUCCESS"|"FAILED"|string;
  export interface RenewalSummary {
    /**
     * The status of ACM's managed renewal of the certificate.
     */
    RenewalStatus: RenewalStatus;
    /**
     * Contains information about the validation of each domain name in the certificate, as it pertains to ACM's managed renewal. This is different from the initial validation that occurs as a result of the RequestCertificate request. This field exists only when the certificate type is AMAZON_ISSUED.
     */
    DomainValidationOptions: DomainValidationList;
  }
  export interface RequestCertificateRequest {
    /**
     *  Fully qualified domain name (FQDN), such as www.example.com, of the site that you want to secure with an ACM Certificate. Use an asterisk (*) to create a wildcard certificate that protects several sites in the same domain. For example, *.example.com protects www.example.com, site.example.com, and images.example.com.   The maximum length of a DNS name is 253 octets. The name is made up of multiple labels separated by periods. No label can be longer than 63 octets. Consider the following examples:   (63 octets).(63 octets).(63 octets).(61 octets) is legal because the total length is 253 octets (63+1+63+1+63+1+61) and no label exceeds 63 octets.   (64 octets).(63 octets).(63 octets).(61 octets) is not legal because the total length exceeds 253 octets (64+1+63+1+63+1+61) and the first label exceeds 63 octets.   (63 octets).(63 octets).(63 octets).(62 octets) is not legal because the total length of the DNS name (63+1+63+1+63+1+62) exceeds 253 octets. 
     */
    DomainName: DomainNameString;
    /**
     * Additional FQDNs to be included in the Subject Alternative Name extension of the ACM Certificate. For example, add the name www.example.net to a certificate for which the DomainName field is www.example.com if users can reach your site by using either name. The maximum number of domain names that you can add to an ACM Certificate is 100. However, the initial limit is 10 domain names. If you need more than 10 names, you must request a limit increase. For more information, see Limits.
     */
    SubjectAlternativeNames?: DomainList;
    /**
     * Customer chosen string that can be used to distinguish between calls to RequestCertificate. Idempotency tokens time out after one hour. Therefore, if you call RequestCertificate multiple times with the same idempotency token within one hour, ACM recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, ACM recognizes that you are requesting multiple certificates.
     */
    IdempotencyToken?: IdempotencyToken;
    /**
     * The domain name that you want ACM to use to send you emails to validate your ownership of the domain.
     */
    DomainValidationOptions?: DomainValidationOptionList;
  }
  export interface RequestCertificateResponse {
    /**
     * String that contains the ARN of the issued certificate. This must be of the form:  arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012 
     */
    CertificateArn?: Arn;
  }
  export interface ResendValidationEmailRequest {
    /**
     * String that contains the ARN of the requested certificate. The certificate ARN is generated and returned by the RequestCertificate action as soon as the request is made. By default, using this parameter causes email to be sent to all top-level domains you specified in the certificate request. The ARN must be of the form:  arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012 
     */
    CertificateArn: Arn;
    /**
     * The fully qualified domain name (FQDN) of the certificate that needs to be validated.
     */
    Domain: DomainNameString;
    /**
     * The base validation domain that will act as the suffix of the email addresses that are used to send the emails. This must be the same as the Domain value or a superdomain of the Domain value. For example, if you requested a certificate for site.subdomain.example.com and specify a ValidationDomain of subdomain.example.com, ACM sends email to the domain registrant, technical contact, and administrative contact in WHOIS and the following five addresses:   admin@subdomain.example.com   administrator@subdomain.example.com   hostmaster@subdomain.example.com   postmaster@subdomain.example.com   webmaster@subdomain.example.com  
     */
    ValidationDomain: DomainNameString;
  }
  export type RevocationReason = "UNSPECIFIED"|"KEY_COMPROMISE"|"CA_COMPROMISE"|"AFFILIATION_CHANGED"|"SUPERCEDED"|"CESSATION_OF_OPERATION"|"CERTIFICATE_HOLD"|"REMOVE_FROM_CRL"|"PRIVILEGE_WITHDRAWN"|"A_A_COMPROMISE"|string;
  export type String = string;
  export type TStamp = Date;
  export interface Tag {
    /**
     * The key of the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagList = Tag[];
  export type TagValue = string;
  export type ValidationEmailList = String[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-12-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ACM client.
   */
  export import Types = ACM;
}
export = ACM;
