import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class KMS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: KMS.Types.ClientConfiguration)
  config: Config & KMS.Types.ClientConfiguration;
  /**
   * Cancels the deletion of a customer master key (CMK). When this operation is successful, the CMK is set to the Disabled state. To enable a CMK, use EnableKey. For more information about scheduling and canceling deletion of a CMK, see Deleting Customer Master Keys in the AWS Key Management Service Developer Guide.
   */
  cancelKeyDeletion(params: KMS.Types.CancelKeyDeletionRequest, callback?: (err: AWSError, data: KMS.Types.CancelKeyDeletionResponse) => void): Request<KMS.Types.CancelKeyDeletionResponse, AWSError>;
  /**
   * Cancels the deletion of a customer master key (CMK). When this operation is successful, the CMK is set to the Disabled state. To enable a CMK, use EnableKey. For more information about scheduling and canceling deletion of a CMK, see Deleting Customer Master Keys in the AWS Key Management Service Developer Guide.
   */
  cancelKeyDeletion(callback?: (err: AWSError, data: KMS.Types.CancelKeyDeletionResponse) => void): Request<KMS.Types.CancelKeyDeletionResponse, AWSError>;
  /**
   * Creates a display name for a customer master key. An alias can be used to identify a key and should be unique. The console enforces a one-to-one mapping between the alias and a key. An alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). An alias must start with the word "alias" followed by a forward slash (alias/). An alias that begins with "aws" after the forward slash (alias/aws...) is reserved by Amazon Web Services (AWS). The alias and the key it is mapped to must be in the same AWS account and the same region. To map an alias to a different key, call UpdateAlias.
   */
  createAlias(params: KMS.Types.CreateAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a display name for a customer master key. An alias can be used to identify a key and should be unique. The console enforces a one-to-one mapping between the alias and a key. An alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). An alias must start with the word "alias" followed by a forward slash (alias/). An alias that begins with "aws" after the forward slash (alias/aws...) is reserved by Amazon Web Services (AWS). The alias and the key it is mapped to must be in the same AWS account and the same region. To map an alias to a different key, call UpdateAlias.
   */
  createAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds a grant to a key to specify who can use the key and under what conditions. Grants are alternate permission mechanisms to key policies. For more information about grants, see Grants in the AWS Key Management Service Developer Guide.
   */
  createGrant(params: KMS.Types.CreateGrantRequest, callback?: (err: AWSError, data: KMS.Types.CreateGrantResponse) => void): Request<KMS.Types.CreateGrantResponse, AWSError>;
  /**
   * Adds a grant to a key to specify who can use the key and under what conditions. Grants are alternate permission mechanisms to key policies. For more information about grants, see Grants in the AWS Key Management Service Developer Guide.
   */
  createGrant(callback?: (err: AWSError, data: KMS.Types.CreateGrantResponse) => void): Request<KMS.Types.CreateGrantResponse, AWSError>;
  /**
   * Creates a customer master key (CMK). You can use a CMK to encrypt small amounts of data (4 KiB or less) directly, but CMKs are more commonly used to encrypt data encryption keys (DEKs), which are used to encrypt raw data. For more information about DEKs and the difference between CMKs and DEKs, see the following:   The GenerateDataKey operation    AWS Key Management Service Concepts in the AWS Key Management Service Developer Guide   
   */
  createKey(params: KMS.Types.CreateKeyRequest, callback?: (err: AWSError, data: KMS.Types.CreateKeyResponse) => void): Request<KMS.Types.CreateKeyResponse, AWSError>;
  /**
   * Creates a customer master key (CMK). You can use a CMK to encrypt small amounts of data (4 KiB or less) directly, but CMKs are more commonly used to encrypt data encryption keys (DEKs), which are used to encrypt raw data. For more information about DEKs and the difference between CMKs and DEKs, see the following:   The GenerateDataKey operation    AWS Key Management Service Concepts in the AWS Key Management Service Developer Guide   
   */
  createKey(callback?: (err: AWSError, data: KMS.Types.CreateKeyResponse) => void): Request<KMS.Types.CreateKeyResponse, AWSError>;
  /**
   * Decrypts ciphertext. Ciphertext is plaintext that has been previously encrypted by using any of the following functions:    GenerateDataKey     GenerateDataKeyWithoutPlaintext     Encrypt    Note that if a caller has been granted access permissions to all keys (through, for example, IAM user policies that grant Decrypt permission on all resources), then ciphertext encrypted by using keys in other accounts where the key grants access to the caller can be decrypted. To remedy this, we recommend that you do not grant Decrypt access in an IAM user policy. Instead grant Decrypt access only in key policies. If you must grant Decrypt access in an IAM user policy, you should scope the resource to specific keys or to specific trusted accounts.
   */
  decrypt(params: KMS.Types.DecryptRequest, callback?: (err: AWSError, data: KMS.Types.DecryptResponse) => void): Request<KMS.Types.DecryptResponse, AWSError>;
  /**
   * Decrypts ciphertext. Ciphertext is plaintext that has been previously encrypted by using any of the following functions:    GenerateDataKey     GenerateDataKeyWithoutPlaintext     Encrypt    Note that if a caller has been granted access permissions to all keys (through, for example, IAM user policies that grant Decrypt permission on all resources), then ciphertext encrypted by using keys in other accounts where the key grants access to the caller can be decrypted. To remedy this, we recommend that you do not grant Decrypt access in an IAM user policy. Instead grant Decrypt access only in key policies. If you must grant Decrypt access in an IAM user policy, you should scope the resource to specific keys or to specific trusted accounts.
   */
  decrypt(callback?: (err: AWSError, data: KMS.Types.DecryptResponse) => void): Request<KMS.Types.DecryptResponse, AWSError>;
  /**
   * Deletes the specified alias. To map an alias to a different key, call UpdateAlias.
   */
  deleteAlias(params: KMS.Types.DeleteAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified alias. To map an alias to a different key, call UpdateAlias.
   */
  deleteAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes key material that you previously imported and makes the specified customer master key (CMK) unusable. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. When the specified CMK is in the PendingDeletion state, this operation does not change the CMK's state. Otherwise, it changes the CMK's state to PendingImport. After you delete key material, you can use ImportKeyMaterial to reimport the same key material into the CMK.
   */
  deleteImportedKeyMaterial(params: KMS.Types.DeleteImportedKeyMaterialRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes key material that you previously imported and makes the specified customer master key (CMK) unusable. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. When the specified CMK is in the PendingDeletion state, this operation does not change the CMK's state. Otherwise, it changes the CMK's state to PendingImport. After you delete key material, you can use ImportKeyMaterial to reimport the same key material into the CMK.
   */
  deleteImportedKeyMaterial(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Provides detailed information about the specified customer master key.
   */
  describeKey(params: KMS.Types.DescribeKeyRequest, callback?: (err: AWSError, data: KMS.Types.DescribeKeyResponse) => void): Request<KMS.Types.DescribeKeyResponse, AWSError>;
  /**
   * Provides detailed information about the specified customer master key.
   */
  describeKey(callback?: (err: AWSError, data: KMS.Types.DescribeKeyResponse) => void): Request<KMS.Types.DescribeKeyResponse, AWSError>;
  /**
   * Sets the state of a customer master key (CMK) to disabled, thereby preventing its use for cryptographic operations. For more information about how key state affects the use of a CMK, see How Key State Affects the Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  disableKey(params: KMS.Types.DisableKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the state of a customer master key (CMK) to disabled, thereby preventing its use for cryptographic operations. For more information about how key state affects the use of a CMK, see How Key State Affects the Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  disableKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables rotation of the specified key.
   */
  disableKeyRotation(params: KMS.Types.DisableKeyRotationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables rotation of the specified key.
   */
  disableKeyRotation(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Marks a key as enabled, thereby permitting its use.
   */
  enableKey(params: KMS.Types.EnableKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Marks a key as enabled, thereby permitting its use.
   */
  enableKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables rotation of the specified customer master key.
   */
  enableKeyRotation(params: KMS.Types.EnableKeyRotationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables rotation of the specified customer master key.
   */
  enableKeyRotation(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Encrypts plaintext into ciphertext by using a customer master key. The Encrypt function has two primary use cases:   You can encrypt up to 4 KB of arbitrary data such as an RSA key, a database password, or other sensitive customer information.   If you are moving encrypted data from one region to another, you can use this API to encrypt in the new region the plaintext data key that was used to encrypt the data in the original region. This provides you with an encrypted copy of the data key that can be decrypted in the new region and used there to decrypt the encrypted data.   Unless you are moving encrypted data from one region to another, you don't use this function to encrypt a generated data key within a region. You retrieve data keys already encrypted by calling the GenerateDataKey or GenerateDataKeyWithoutPlaintext function. Data keys don't need to be encrypted again by calling Encrypt. If you want to encrypt data locally in your application, you can use the GenerateDataKey function to return a plaintext data encryption key and a copy of the key encrypted under the customer master key (CMK) of your choosing.
   */
  encrypt(params: KMS.Types.EncryptRequest, callback?: (err: AWSError, data: KMS.Types.EncryptResponse) => void): Request<KMS.Types.EncryptResponse, AWSError>;
  /**
   * Encrypts plaintext into ciphertext by using a customer master key. The Encrypt function has two primary use cases:   You can encrypt up to 4 KB of arbitrary data such as an RSA key, a database password, or other sensitive customer information.   If you are moving encrypted data from one region to another, you can use this API to encrypt in the new region the plaintext data key that was used to encrypt the data in the original region. This provides you with an encrypted copy of the data key that can be decrypted in the new region and used there to decrypt the encrypted data.   Unless you are moving encrypted data from one region to another, you don't use this function to encrypt a generated data key within a region. You retrieve data keys already encrypted by calling the GenerateDataKey or GenerateDataKeyWithoutPlaintext function. Data keys don't need to be encrypted again by calling Encrypt. If you want to encrypt data locally in your application, you can use the GenerateDataKey function to return a plaintext data encryption key and a copy of the key encrypted under the customer master key (CMK) of your choosing.
   */
  encrypt(callback?: (err: AWSError, data: KMS.Types.EncryptResponse) => void): Request<KMS.Types.EncryptResponse, AWSError>;
  /**
   * Returns a data encryption key that you can use in your application to encrypt data locally. You must specify the customer master key (CMK) under which to generate the data key. You must also specify the length of the data key using either the KeySpec or NumberOfBytes field. You must specify one field or the other, but not both. For common key lengths (128-bit and 256-bit symmetric keys), we recommend that you use KeySpec. This operation returns a plaintext copy of the data key in the Plaintext field of the response, and an encrypted copy of the data key in the CiphertextBlob field. The data key is encrypted under the CMK specified in the KeyId field of the request. We recommend that you use the following pattern to encrypt data locally in your application:   Use this operation (GenerateDataKey) to retrieve a data encryption key.   Use the plaintext data encryption key (returned in the Plaintext field of the response) to encrypt data locally, then erase the plaintext data key from memory.   Store the encrypted data key (returned in the CiphertextBlob field of the response) alongside the locally encrypted data.   To decrypt data locally:   Use the Decrypt operation to decrypt the encrypted data key into a plaintext copy of the data key.   Use the plaintext data key to decrypt data locally, then erase the plaintext data key from memory.   To return only an encrypted copy of the data key, use GenerateDataKeyWithoutPlaintext. To return a random byte string that is cryptographically secure, use GenerateRandom. If you use the optional EncryptionContext field, you must store at least enough information to be able to reconstruct the full encryption context when you later send the ciphertext to the Decrypt operation. It is a good practice to choose an encryption context that you can reconstruct on the fly to better secure the ciphertext. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
   */
  generateDataKey(params: KMS.Types.GenerateDataKeyRequest, callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyResponse) => void): Request<KMS.Types.GenerateDataKeyResponse, AWSError>;
  /**
   * Returns a data encryption key that you can use in your application to encrypt data locally. You must specify the customer master key (CMK) under which to generate the data key. You must also specify the length of the data key using either the KeySpec or NumberOfBytes field. You must specify one field or the other, but not both. For common key lengths (128-bit and 256-bit symmetric keys), we recommend that you use KeySpec. This operation returns a plaintext copy of the data key in the Plaintext field of the response, and an encrypted copy of the data key in the CiphertextBlob field. The data key is encrypted under the CMK specified in the KeyId field of the request. We recommend that you use the following pattern to encrypt data locally in your application:   Use this operation (GenerateDataKey) to retrieve a data encryption key.   Use the plaintext data encryption key (returned in the Plaintext field of the response) to encrypt data locally, then erase the plaintext data key from memory.   Store the encrypted data key (returned in the CiphertextBlob field of the response) alongside the locally encrypted data.   To decrypt data locally:   Use the Decrypt operation to decrypt the encrypted data key into a plaintext copy of the data key.   Use the plaintext data key to decrypt data locally, then erase the plaintext data key from memory.   To return only an encrypted copy of the data key, use GenerateDataKeyWithoutPlaintext. To return a random byte string that is cryptographically secure, use GenerateRandom. If you use the optional EncryptionContext field, you must store at least enough information to be able to reconstruct the full encryption context when you later send the ciphertext to the Decrypt operation. It is a good practice to choose an encryption context that you can reconstruct on the fly to better secure the ciphertext. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
   */
  generateDataKey(callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyResponse) => void): Request<KMS.Types.GenerateDataKeyResponse, AWSError>;
  /**
   * Returns a data encryption key encrypted under a customer master key (CMK). This operation is identical to GenerateDataKey but returns only the encrypted copy of the data key. This operation is useful in a system that has multiple components with different degrees of trust. For example, consider a system that stores encrypted data in containers. Each container stores the encrypted data and an encrypted copy of the data key. One component of the system, called the control plane, creates new containers. When it creates a new container, it uses this operation (GenerateDataKeyWithoutPlaintext) to get an encrypted data key and then stores it in the container. Later, a different component of the system, called the data plane, puts encrypted data into the containers. To do this, it passes the encrypted data key to the Decrypt operation, then uses the returned plaintext data key to encrypt data, and finally stores the encrypted data in the container. In this system, the control plane never sees the plaintext data key.
   */
  generateDataKeyWithoutPlaintext(params: KMS.Types.GenerateDataKeyWithoutPlaintextRequest, callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyWithoutPlaintextResponse) => void): Request<KMS.Types.GenerateDataKeyWithoutPlaintextResponse, AWSError>;
  /**
   * Returns a data encryption key encrypted under a customer master key (CMK). This operation is identical to GenerateDataKey but returns only the encrypted copy of the data key. This operation is useful in a system that has multiple components with different degrees of trust. For example, consider a system that stores encrypted data in containers. Each container stores the encrypted data and an encrypted copy of the data key. One component of the system, called the control plane, creates new containers. When it creates a new container, it uses this operation (GenerateDataKeyWithoutPlaintext) to get an encrypted data key and then stores it in the container. Later, a different component of the system, called the data plane, puts encrypted data into the containers. To do this, it passes the encrypted data key to the Decrypt operation, then uses the returned plaintext data key to encrypt data, and finally stores the encrypted data in the container. In this system, the control plane never sees the plaintext data key.
   */
  generateDataKeyWithoutPlaintext(callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyWithoutPlaintextResponse) => void): Request<KMS.Types.GenerateDataKeyWithoutPlaintextResponse, AWSError>;
  /**
   * Returns a random byte string that is cryptographically secure. For more information about entropy and random number generation, see the AWS Key Management Service Cryptographic Details whitepaper.
   */
  generateRandom(params: KMS.Types.GenerateRandomRequest, callback?: (err: AWSError, data: KMS.Types.GenerateRandomResponse) => void): Request<KMS.Types.GenerateRandomResponse, AWSError>;
  /**
   * Returns a random byte string that is cryptographically secure. For more information about entropy and random number generation, see the AWS Key Management Service Cryptographic Details whitepaper.
   */
  generateRandom(callback?: (err: AWSError, data: KMS.Types.GenerateRandomResponse) => void): Request<KMS.Types.GenerateRandomResponse, AWSError>;
  /**
   * Retrieves a policy attached to the specified key.
   */
  getKeyPolicy(params: KMS.Types.GetKeyPolicyRequest, callback?: (err: AWSError, data: KMS.Types.GetKeyPolicyResponse) => void): Request<KMS.Types.GetKeyPolicyResponse, AWSError>;
  /**
   * Retrieves a policy attached to the specified key.
   */
  getKeyPolicy(callback?: (err: AWSError, data: KMS.Types.GetKeyPolicyResponse) => void): Request<KMS.Types.GetKeyPolicyResponse, AWSError>;
  /**
   * Retrieves a Boolean value that indicates whether key rotation is enabled for the specified key.
   */
  getKeyRotationStatus(params: KMS.Types.GetKeyRotationStatusRequest, callback?: (err: AWSError, data: KMS.Types.GetKeyRotationStatusResponse) => void): Request<KMS.Types.GetKeyRotationStatusResponse, AWSError>;
  /**
   * Retrieves a Boolean value that indicates whether key rotation is enabled for the specified key.
   */
  getKeyRotationStatus(callback?: (err: AWSError, data: KMS.Types.GetKeyRotationStatusResponse) => void): Request<KMS.Types.GetKeyRotationStatusResponse, AWSError>;
  /**
   * Returns the items you need in order to import key material into AWS KMS from your existing key management infrastructure. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. You must specify the key ID of the customer master key (CMK) into which you will import key material. This CMK's Origin must be EXTERNAL. You must also specify the wrapping algorithm and type of wrapping key (public key) that you will use to encrypt the key material. This operation returns a public key and an import token. Use the public key to encrypt the key material. Store the import token to send with a subsequent ImportKeyMaterial request. The public key and import token from the same response must be used together. These items are valid for 24 hours, after which they cannot be used for a subsequent ImportKeyMaterial request. To retrieve new ones, send another GetParametersForImport request.
   */
  getParametersForImport(params: KMS.Types.GetParametersForImportRequest, callback?: (err: AWSError, data: KMS.Types.GetParametersForImportResponse) => void): Request<KMS.Types.GetParametersForImportResponse, AWSError>;
  /**
   * Returns the items you need in order to import key material into AWS KMS from your existing key management infrastructure. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. You must specify the key ID of the customer master key (CMK) into which you will import key material. This CMK's Origin must be EXTERNAL. You must also specify the wrapping algorithm and type of wrapping key (public key) that you will use to encrypt the key material. This operation returns a public key and an import token. Use the public key to encrypt the key material. Store the import token to send with a subsequent ImportKeyMaterial request. The public key and import token from the same response must be used together. These items are valid for 24 hours, after which they cannot be used for a subsequent ImportKeyMaterial request. To retrieve new ones, send another GetParametersForImport request.
   */
  getParametersForImport(callback?: (err: AWSError, data: KMS.Types.GetParametersForImportResponse) => void): Request<KMS.Types.GetParametersForImportResponse, AWSError>;
  /**
   * Imports key material into an AWS KMS customer master key (CMK) from your existing key management infrastructure. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. You must specify the key ID of the CMK to import the key material into. This CMK's Origin must be EXTERNAL. You must also send an import token and the encrypted key material. Send the import token that you received in the same GetParametersForImport response that contained the public key that you used to encrypt the key material. You must also specify whether the key material expires and if so, when. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. To use the CMK again, you can reimport the same key material. If you set an expiration date, you can change it only by reimporting the same key material and specifying a new expiration date. When this operation is successful, the specified CMK's key state changes to Enabled, and you can use the CMK. After you successfully import key material into a CMK, you can reimport the same key material into that CMK, but you cannot import different key material.
   */
  importKeyMaterial(params: KMS.Types.ImportKeyMaterialRequest, callback?: (err: AWSError, data: KMS.Types.ImportKeyMaterialResponse) => void): Request<KMS.Types.ImportKeyMaterialResponse, AWSError>;
  /**
   * Imports key material into an AWS KMS customer master key (CMK) from your existing key management infrastructure. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. You must specify the key ID of the CMK to import the key material into. This CMK's Origin must be EXTERNAL. You must also send an import token and the encrypted key material. Send the import token that you received in the same GetParametersForImport response that contained the public key that you used to encrypt the key material. You must also specify whether the key material expires and if so, when. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. To use the CMK again, you can reimport the same key material. If you set an expiration date, you can change it only by reimporting the same key material and specifying a new expiration date. When this operation is successful, the specified CMK's key state changes to Enabled, and you can use the CMK. After you successfully import key material into a CMK, you can reimport the same key material into that CMK, but you cannot import different key material.
   */
  importKeyMaterial(callback?: (err: AWSError, data: KMS.Types.ImportKeyMaterialResponse) => void): Request<KMS.Types.ImportKeyMaterialResponse, AWSError>;
  /**
   * Lists all of the key aliases in the account.
   */
  listAliases(params: KMS.Types.ListAliasesRequest, callback?: (err: AWSError, data: KMS.Types.ListAliasesResponse) => void): Request<KMS.Types.ListAliasesResponse, AWSError>;
  /**
   * Lists all of the key aliases in the account.
   */
  listAliases(callback?: (err: AWSError, data: KMS.Types.ListAliasesResponse) => void): Request<KMS.Types.ListAliasesResponse, AWSError>;
  /**
   * List the grants for a specified key.
   */
  listGrants(params: KMS.Types.ListGrantsRequest, callback?: (err: AWSError, data: KMS.Types.ListGrantsResponse) => void): Request<KMS.Types.ListGrantsResponse, AWSError>;
  /**
   * List the grants for a specified key.
   */
  listGrants(callback?: (err: AWSError, data: KMS.Types.ListGrantsResponse) => void): Request<KMS.Types.ListGrantsResponse, AWSError>;
  /**
   * Retrieves a list of policies attached to a key.
   */
  listKeyPolicies(params: KMS.Types.ListKeyPoliciesRequest, callback?: (err: AWSError, data: KMS.Types.ListKeyPoliciesResponse) => void): Request<KMS.Types.ListKeyPoliciesResponse, AWSError>;
  /**
   * Retrieves a list of policies attached to a key.
   */
  listKeyPolicies(callback?: (err: AWSError, data: KMS.Types.ListKeyPoliciesResponse) => void): Request<KMS.Types.ListKeyPoliciesResponse, AWSError>;
  /**
   * Lists the customer master keys.
   */
  listKeys(params: KMS.Types.ListKeysRequest, callback?: (err: AWSError, data: KMS.Types.ListKeysResponse) => void): Request<KMS.Types.ListKeysResponse, AWSError>;
  /**
   * Lists the customer master keys.
   */
  listKeys(callback?: (err: AWSError, data: KMS.Types.ListKeysResponse) => void): Request<KMS.Types.ListKeysResponse, AWSError>;
  /**
   * Returns a list of all tags for the specified customer master key (CMK).
   */
  listResourceTags(params: KMS.Types.ListResourceTagsRequest, callback?: (err: AWSError, data: KMS.Types.ListResourceTagsResponse) => void): Request<KMS.Types.ListResourceTagsResponse, AWSError>;
  /**
   * Returns a list of all tags for the specified customer master key (CMK).
   */
  listResourceTags(callback?: (err: AWSError, data: KMS.Types.ListResourceTagsResponse) => void): Request<KMS.Types.ListResourceTagsResponse, AWSError>;
  /**
   * Returns a list of all grants for which the grant's RetiringPrincipal matches the one specified. A typical use is to list all grants that you are able to retire. To retire a grant, use RetireGrant.
   */
  listRetirableGrants(params: KMS.Types.ListRetirableGrantsRequest, callback?: (err: AWSError, data: KMS.Types.ListGrantsResponse) => void): Request<KMS.Types.ListGrantsResponse, AWSError>;
  /**
   * Returns a list of all grants for which the grant's RetiringPrincipal matches the one specified. A typical use is to list all grants that you are able to retire. To retire a grant, use RetireGrant.
   */
  listRetirableGrants(callback?: (err: AWSError, data: KMS.Types.ListGrantsResponse) => void): Request<KMS.Types.ListGrantsResponse, AWSError>;
  /**
   * Attaches a key policy to the specified customer master key (CMK). For more information about key policies, see Key Policies in the AWS Key Management Service Developer Guide.
   */
  putKeyPolicy(params: KMS.Types.PutKeyPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches a key policy to the specified customer master key (CMK). For more information about key policies, see Key Policies in the AWS Key Management Service Developer Guide.
   */
  putKeyPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Encrypts data on the server side with a new customer master key (CMK) without exposing the plaintext of the data on the client side. The data is first decrypted and then reencrypted. You can also use this operation to change the encryption context of a ciphertext. Unlike other operations, ReEncrypt is authorized twice, once as ReEncryptFrom on the source CMK and once as ReEncryptTo on the destination CMK. We recommend that you include the "kms:ReEncrypt*" permission in your key policies to permit reencryption from or to the CMK. This permission is automatically included in the key policy when you create a CMK through the console, but you must include it manually when you create a CMK programmatically or when you set a key policy with the PutKeyPolicy operation.
   */
  reEncrypt(params: KMS.Types.ReEncryptRequest, callback?: (err: AWSError, data: KMS.Types.ReEncryptResponse) => void): Request<KMS.Types.ReEncryptResponse, AWSError>;
  /**
   * Encrypts data on the server side with a new customer master key (CMK) without exposing the plaintext of the data on the client side. The data is first decrypted and then reencrypted. You can also use this operation to change the encryption context of a ciphertext. Unlike other operations, ReEncrypt is authorized twice, once as ReEncryptFrom on the source CMK and once as ReEncryptTo on the destination CMK. We recommend that you include the "kms:ReEncrypt*" permission in your key policies to permit reencryption from or to the CMK. This permission is automatically included in the key policy when you create a CMK through the console, but you must include it manually when you create a CMK programmatically or when you set a key policy with the PutKeyPolicy operation.
   */
  reEncrypt(callback?: (err: AWSError, data: KMS.Types.ReEncryptResponse) => void): Request<KMS.Types.ReEncryptResponse, AWSError>;
  /**
   * Retires a grant. To clean up, you can retire a grant when you're done using it. You should revoke a grant when you intend to actively deny operations that depend on it. The following are permitted to call this API:   The AWS account (root user) under which the grant was created   The RetiringPrincipal, if present in the grant   The GranteePrincipal, if RetireGrant is an operation specified in the grant   You must identify the grant to retire by its grant token or by a combination of the grant ID and the Amazon Resource Name (ARN) of the customer master key (CMK). A grant token is a unique variable-length base64-encoded string. A grant ID is a 64 character unique identifier of a grant. The CreateGrant operation returns both.
   */
  retireGrant(params: KMS.Types.RetireGrantRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retires a grant. To clean up, you can retire a grant when you're done using it. You should revoke a grant when you intend to actively deny operations that depend on it. The following are permitted to call this API:   The AWS account (root user) under which the grant was created   The RetiringPrincipal, if present in the grant   The GranteePrincipal, if RetireGrant is an operation specified in the grant   You must identify the grant to retire by its grant token or by a combination of the grant ID and the Amazon Resource Name (ARN) of the customer master key (CMK). A grant token is a unique variable-length base64-encoded string. A grant ID is a 64 character unique identifier of a grant. The CreateGrant operation returns both.
   */
  retireGrant(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes a grant. You can revoke a grant to actively deny operations that depend on it.
   */
  revokeGrant(params: KMS.Types.RevokeGrantRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes a grant. You can revoke a grant to actively deny operations that depend on it.
   */
  revokeGrant(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Schedules the deletion of a customer master key (CMK). You may provide a waiting period, specified in days, before deletion occurs. If you do not provide a waiting period, the default period of 30 days is used. When this operation is successful, the state of the CMK changes to PendingDeletion. Before the waiting period ends, you can use CancelKeyDeletion to cancel the deletion of the CMK. After the waiting period ends, AWS KMS deletes the CMK and all AWS KMS data associated with it, including all aliases that refer to it.  Deleting a CMK is a destructive and potentially dangerous operation. When a CMK is deleted, all data that was encrypted under the CMK is rendered unrecoverable. To restrict the use of a CMK without deleting it, use DisableKey.  For more information about scheduling a CMK for deletion, see Deleting Customer Master Keys in the AWS Key Management Service Developer Guide.
   */
  scheduleKeyDeletion(params: KMS.Types.ScheduleKeyDeletionRequest, callback?: (err: AWSError, data: KMS.Types.ScheduleKeyDeletionResponse) => void): Request<KMS.Types.ScheduleKeyDeletionResponse, AWSError>;
  /**
   * Schedules the deletion of a customer master key (CMK). You may provide a waiting period, specified in days, before deletion occurs. If you do not provide a waiting period, the default period of 30 days is used. When this operation is successful, the state of the CMK changes to PendingDeletion. Before the waiting period ends, you can use CancelKeyDeletion to cancel the deletion of the CMK. After the waiting period ends, AWS KMS deletes the CMK and all AWS KMS data associated with it, including all aliases that refer to it.  Deleting a CMK is a destructive and potentially dangerous operation. When a CMK is deleted, all data that was encrypted under the CMK is rendered unrecoverable. To restrict the use of a CMK without deleting it, use DisableKey.  For more information about scheduling a CMK for deletion, see Deleting Customer Master Keys in the AWS Key Management Service Developer Guide.
   */
  scheduleKeyDeletion(callback?: (err: AWSError, data: KMS.Types.ScheduleKeyDeletionResponse) => void): Request<KMS.Types.ScheduleKeyDeletionResponse, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified customer master key (CMK).  Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings. You cannot use the same tag key more than once per CMK. For example, consider a CMK with one tag whose tag key is Purpose and tag value is Test. If you send a TagResource request for this CMK with a tag key of Purpose and a tag value of Prod, it does not create a second tag. Instead, the original tag is overwritten with the new tag value.
   */
  tagResource(params: KMS.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified customer master key (CMK).  Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings. You cannot use the same tag key more than once per CMK. For example, consider a CMK with one tag whose tag key is Purpose and tag value is Test. If you send a TagResource request for this CMK with a tag key of Purpose and a tag value of Prod, it does not create a second tag. Instead, the original tag is overwritten with the new tag value.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified tag or tags from the specified customer master key (CMK).  To remove a tag, you specify the tag key for each tag to remove. You do not specify the tag value. To overwrite the tag value for an existing tag, use TagResource.
   */
  untagResource(params: KMS.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified tag or tags from the specified customer master key (CMK).  To remove a tag, you specify the tag key for each tag to remove. You do not specify the tag value. To overwrite the tag value for an existing tag, use TagResource.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an alias to map it to a different key. An alias is not a property of a key. Therefore, an alias can be mapped to and unmapped from an existing key without changing the properties of the key. An alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). An alias must start with the word "alias" followed by a forward slash (alias/). An alias that begins with "aws" after the forward slash (alias/aws...) is reserved by Amazon Web Services (AWS). The alias and the key it is mapped to must be in the same AWS account and the same region.
   */
  updateAlias(params: KMS.Types.UpdateAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an alias to map it to a different key. An alias is not a property of a key. Therefore, an alias can be mapped to and unmapped from an existing key without changing the properties of the key. An alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). An alias must start with the word "alias" followed by a forward slash (alias/). An alias that begins with "aws" after the forward slash (alias/aws...) is reserved by Amazon Web Services (AWS). The alias and the key it is mapped to must be in the same AWS account and the same region.
   */
  updateAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the description of a customer master key (CMK).
   */
  updateKeyDescription(params: KMS.Types.UpdateKeyDescriptionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the description of a customer master key (CMK).
   */
  updateKeyDescription(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace KMS {
  export type AWSAccountIdType = string;
  export type AlgorithmSpec = "RSAES_PKCS1_V1_5"|"RSAES_OAEP_SHA_1"|"RSAES_OAEP_SHA_256"|string;
  export type AliasList = AliasListEntry[];
  export interface AliasListEntry {
    /**
     * String that contains the alias.
     */
    AliasName?: AliasNameType;
    /**
     * String that contains the key ARN.
     */
    AliasArn?: ArnType;
    /**
     * String that contains the key identifier referred to by the alias.
     */
    TargetKeyId?: KeyIdType;
  }
  export type AliasNameType = string;
  export type ArnType = string;
  export type BooleanType = boolean;
  export interface CancelKeyDeletionRequest {
    /**
     * The unique identifier for the customer master key (CMK) for which to cancel deletion. To specify this value, use the unique key ID or the Amazon Resource Name (ARN) of the CMK. Examples:   Unique key ID: 1234abcd-12ab-34cd-56ef-1234567890ab   Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab   To obtain the unique key ID and key ARN for a given CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
  }
  export interface CancelKeyDeletionResponse {
    /**
     * The unique identifier of the master key for which deletion is canceled.
     */
    KeyId?: KeyIdType;
  }
  export type CiphertextType = Buffer|Uint8Array|Blob|string;
  export interface CreateAliasRequest {
    /**
     * String that contains the display name. The name must start with the word "alias" followed by a forward slash (alias/). Aliases that begin with "alias/AWS" are reserved.
     */
    AliasName: AliasNameType;
    /**
     * An identifier of the key for which you are creating the alias. This value cannot be another alias but can be a globally unique identifier or a fully specified ARN to a key.   Key ARN Example - arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012  
     */
    TargetKeyId: KeyIdType;
  }
  export interface CreateGrantRequest {
    /**
     * The unique identifier for the customer master key (CMK) that the grant applies to. To specify this value, use the globally unique key ID or the Amazon Resource Name (ARN) of the key. Examples:   Globally unique key ID: 12345678-1234-1234-1234-123456789012   Key ARN: arn:aws:kms:us-west-2:123456789012:key/12345678-1234-1234-1234-123456789012  
     */
    KeyId: KeyIdType;
    /**
     * The principal that is given permission to perform the operations that the grant permits. To specify the principal, use the Amazon Resource Name (ARN) of an AWS principal. Valid AWS principals include AWS accounts (root), IAM users, IAM roles, federated users, and assumed role users. For examples of the ARN syntax to use for specifying a principal, see AWS Identity and Access Management (IAM) in the Example ARNs section of the AWS General Reference.
     */
    GranteePrincipal: PrincipalIdType;
    /**
     * The principal that is given permission to retire the grant by using RetireGrant operation. To specify the principal, use the Amazon Resource Name (ARN) of an AWS principal. Valid AWS principals include AWS accounts (root), IAM users, federated users, and assumed role users. For examples of the ARN syntax to use for specifying a principal, see AWS Identity and Access Management (IAM) in the Example ARNs section of the AWS General Reference.
     */
    RetiringPrincipal?: PrincipalIdType;
    /**
     * A list of operations that the grant permits.
     */
    Operations?: GrantOperationList;
    /**
     * A structure that you can use to allow certain operations in the grant only when the desired encryption context is present. For more information about encryption context, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    Constraints?: GrantConstraints;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
    /**
     * A friendly name for identifying the grant. Use this value to prevent unintended creation of duplicate grants when retrying this request. When this value is absent, all CreateGrant requests result in a new grant with a unique GrantId even if all the supplied parameters are identical. This can result in unintended duplicates when you retry the CreateGrant request. When this value is present, you can retry a CreateGrant request with identical parameters; if the grant already exists, the original GrantId is returned without creating a new grant. Note that the returned grant token is unique with every CreateGrant request, even when a duplicate GrantId is returned. All grant tokens obtained in this way can be used interchangeably.
     */
    Name?: GrantNameType;
  }
  export interface CreateGrantResponse {
    /**
     * The grant token. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantToken?: GrantTokenType;
    /**
     * The unique identifier for the grant. You can use the GrantId in a subsequent RetireGrant or RevokeGrant operation.
     */
    GrantId?: GrantIdType;
  }
  export interface CreateKeyRequest {
    /**
     * The key policy to attach to the CMK. If you specify a policy and do not set BypassPolicyLockoutSafetyCheck to true, the policy must meet the following criteria:   It must allow the principal that is making the CreateKey request to make a subsequent PutKeyPolicy request on the CMK. This reduces the likelihood that the CMK becomes unmanageable. For more information, refer to the scenario in the Default Key Policy section in the AWS Key Management Service Developer Guide.   The principals that are specified in the key policy must exist and be visible to AWS KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before specifying the new principal in a key policy because the new principal might not immediately be visible to AWS KMS. For more information, see Changes that I make are not always immediately visible in the IAM User Guide.   If you do not specify a policy, AWS KMS attaches a default key policy to the CMK. For more information, see Default Key Policy in the AWS Key Management Service Developer Guide. The policy size limit is 32 KiB (32768 bytes).
     */
    Policy?: PolicyType;
    /**
     * A description of the CMK. Use a description that helps you decide whether the CMK is appropriate for a task.
     */
    Description?: DescriptionType;
    /**
     * The intended use of the CMK. You can use CMKs only for symmetric encryption and decryption.
     */
    KeyUsage?: KeyUsageType;
    /**
     * The source of the CMK's key material. The default is AWS_KMS, which means AWS KMS creates the key material. When this parameter is set to EXTERNAL, the request creates a CMK without key material so that you can import key material from your existing key management infrastructure. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. The CMK's Origin is immutable and is set when the CMK is created.
     */
    Origin?: OriginType;
    /**
     * A flag to indicate whether to bypass the key policy lockout safety check.  Setting this value to true increases the likelihood that the CMK becomes unmanageable. Do not set this value to true indiscriminately. For more information, refer to the scenario in the Default Key Policy section in the AWS Key Management Service Developer Guide.  Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the CMK. The default value is false.
     */
    BypassPolicyLockoutSafetyCheck?: BooleanType;
    /**
     * One or more tags. Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings. Use this parameter to tag the CMK when it is created. Alternately, you can omit this parameter and instead tag the CMK after it is created using TagResource.
     */
    Tags?: TagList;
  }
  export interface CreateKeyResponse {
    /**
     * Metadata associated with the CMK.
     */
    KeyMetadata?: KeyMetadata;
  }
  export type DataKeySpec = "AES_256"|"AES_128"|string;
  export type DateType = Date;
  export interface DecryptRequest {
    /**
     * Ciphertext to be decrypted. The blob includes metadata.
     */
    CiphertextBlob: CiphertextType;
    /**
     * The encryption context. If this was specified in the Encrypt function, it must be specified here or the decryption operation will fail. For more information, see Encryption Context.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface DecryptResponse {
    /**
     * ARN of the key used to perform the decryption. This value is returned if no errors are encountered during the operation.
     */
    KeyId?: KeyIdType;
    /**
     * Decrypted plaintext data. This value may not be returned if the customer master key is not available or if you didn't have permission to use it.
     */
    Plaintext?: PlaintextType;
  }
  export interface DeleteAliasRequest {
    /**
     * The alias to be deleted. The name must start with the word "alias" followed by a forward slash (alias/). Aliases that begin with "alias/AWS" are reserved.
     */
    AliasName: AliasNameType;
  }
  export interface DeleteImportedKeyMaterialRequest {
    /**
     * The identifier of the CMK whose key material to delete. The CMK's Origin must be EXTERNAL. A valid identifier is the unique key ID or the Amazon Resource Name (ARN) of the CMK. Examples:   Unique key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab   
     */
    KeyId: KeyIdType;
  }
  export interface DescribeKeyRequest {
    /**
     * A unique identifier for the customer master key. This value can be a globally unique identifier, a fully specified ARN to either an alias or a key, or an alias name prefixed by "alias/".   Key ARN Example - arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012   Alias ARN Example - arn:aws:kms:us-east-1:123456789012:alias/MyAliasName   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012   Alias Name Example - alias/MyAliasName  
     */
    KeyId: KeyIdType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface DescribeKeyResponse {
    /**
     * Metadata associated with the key.
     */
    KeyMetadata?: KeyMetadata;
  }
  export type DescriptionType = string;
  export interface DisableKeyRequest {
    /**
     * A unique identifier for the CMK. Use the CMK's unique identifier or its Amazon Resource Name (ARN). For example:   Unique ID: 1234abcd-12ab-34cd-56ef-1234567890ab   ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab  
     */
    KeyId: KeyIdType;
  }
  export interface DisableKeyRotationRequest {
    /**
     * A unique identifier for the customer master key. This value can be a globally unique identifier or the fully specified ARN to a key.   Key ARN Example - arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012  
     */
    KeyId: KeyIdType;
  }
  export interface EnableKeyRequest {
    /**
     * A unique identifier for the customer master key. This value can be a globally unique identifier or the fully specified ARN to a key.   Key ARN Example - arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012  
     */
    KeyId: KeyIdType;
  }
  export interface EnableKeyRotationRequest {
    /**
     * A unique identifier for the customer master key. This value can be a globally unique identifier or the fully specified ARN to a key.   Key ARN Example - arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012  
     */
    KeyId: KeyIdType;
  }
  export interface EncryptRequest {
    /**
     * A unique identifier for the customer master key. This value can be a globally unique identifier, a fully specified ARN to either an alias or a key, or an alias name prefixed by "alias/".   Key ARN Example - arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012   Alias ARN Example - arn:aws:kms:us-east-1:123456789012:alias/MyAliasName   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012   Alias Name Example - alias/MyAliasName  
     */
    KeyId: KeyIdType;
    /**
     * Data to be encrypted.
     */
    Plaintext: PlaintextType;
    /**
     * Name-value pair that specifies the encryption context to be used for authenticated encryption. If used here, the same value must be supplied to the Decrypt API or decryption will fail. For more information, see Encryption Context.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface EncryptResponse {
    /**
     * The encrypted plaintext. If you are using the CLI, the value is Base64 encoded. Otherwise, it is not encoded.
     */
    CiphertextBlob?: CiphertextType;
    /**
     * The ID of the key used during encryption.
     */
    KeyId?: KeyIdType;
  }
  export type EncryptionContextKey = string;
  export type EncryptionContextType = {[key: string]: EncryptionContextValue};
  export type EncryptionContextValue = string;
  export type ErrorMessageType = string;
  export type ExpirationModelType = "KEY_MATERIAL_EXPIRES"|"KEY_MATERIAL_DOES_NOT_EXPIRE"|string;
  export interface GenerateDataKeyRequest {
    /**
     * The identifier of the CMK under which to generate and encrypt the data encryption key. A valid identifier is the unique key ID or the Amazon Resource Name (ARN) of the CMK, or the alias name or ARN of an alias that refers to the CMK. Examples:   Unique key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    CMK ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias   
     */
    KeyId: KeyIdType;
    /**
     * A set of key-value pairs that represents additional authenticated data. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * The length of the data encryption key in bytes. For example, use the value 64 to generate a 512-bit data key (64 bytes is 512 bits). For common key lengths (128-bit and 256-bit symmetric keys), we recommend that you use the KeySpec field instead of this one.
     */
    NumberOfBytes?: NumberOfBytesType;
    /**
     * The length of the data encryption key. Use AES_128 to generate a 128-bit symmetric key, or AES_256 to generate a 256-bit symmetric key.
     */
    KeySpec?: DataKeySpec;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface GenerateDataKeyResponse {
    /**
     * The encrypted data encryption key.
     */
    CiphertextBlob?: CiphertextType;
    /**
     * The data encryption key. Use this data key for local encryption and decryption, then remove it from memory as soon as possible.
     */
    Plaintext?: PlaintextType;
    /**
     * The identifier of the CMK under which the data encryption key was generated and encrypted.
     */
    KeyId?: KeyIdType;
  }
  export interface GenerateDataKeyWithoutPlaintextRequest {
    /**
     * The identifier of the CMK under which to generate and encrypt the data encryption key. A valid identifier is the unique key ID or the Amazon Resource Name (ARN) of the CMK, or the alias name or ARN of an alias that refers to the CMK. Examples:   Unique key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    CMK ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias   
     */
    KeyId: KeyIdType;
    /**
     * A set of key-value pairs that represents additional authenticated data. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * The length of the data encryption key. Use AES_128 to generate a 128-bit symmetric key, or AES_256 to generate a 256-bit symmetric key.
     */
    KeySpec?: DataKeySpec;
    /**
     * The length of the data encryption key in bytes. For example, use the value 64 to generate a 512-bit data key (64 bytes is 512 bits). For common key lengths (128-bit and 256-bit symmetric keys), we recommend that you use the KeySpec field instead of this one.
     */
    NumberOfBytes?: NumberOfBytesType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface GenerateDataKeyWithoutPlaintextResponse {
    /**
     * The encrypted data encryption key.
     */
    CiphertextBlob?: CiphertextType;
    /**
     * The identifier of the CMK under which the data encryption key was generated and encrypted.
     */
    KeyId?: KeyIdType;
  }
  export interface GenerateRandomRequest {
    /**
     * The length of the byte string.
     */
    NumberOfBytes?: NumberOfBytesType;
  }
  export interface GenerateRandomResponse {
    /**
     * The random byte string.
     */
    Plaintext?: PlaintextType;
  }
  export interface GetKeyPolicyRequest {
    /**
     * A unique identifier for the customer master key. This value can be a globally unique identifier or the fully specified ARN to a key.   Key ARN Example - arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012  
     */
    KeyId: KeyIdType;
    /**
     * String that contains the name of the policy. Currently, this must be "default". Policy names can be discovered by calling ListKeyPolicies.
     */
    PolicyName: PolicyNameType;
  }
  export interface GetKeyPolicyResponse {
    /**
     * A policy document in JSON format.
     */
    Policy?: PolicyType;
  }
  export interface GetKeyRotationStatusRequest {
    /**
     * A unique identifier for the customer master key. This value can be a globally unique identifier or the fully specified ARN to a key.   Key ARN Example - arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012  
     */
    KeyId: KeyIdType;
  }
  export interface GetKeyRotationStatusResponse {
    /**
     * A Boolean value that specifies whether key rotation is enabled.
     */
    KeyRotationEnabled?: BooleanType;
  }
  export interface GetParametersForImportRequest {
    /**
     * The identifier of the CMK into which you will import key material. The CMK's Origin must be EXTERNAL. A valid identifier is the unique key ID or the Amazon Resource Name (ARN) of the CMK. Examples:   Unique key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab   
     */
    KeyId: KeyIdType;
    /**
     * The algorithm you will use to encrypt the key material before importing it with ImportKeyMaterial. For more information, see Encrypt the Key Material in the AWS Key Management Service Developer Guide.
     */
    WrappingAlgorithm: AlgorithmSpec;
    /**
     * The type of wrapping key (public key) to return in the response. Only 2048-bit RSA public keys are supported.
     */
    WrappingKeySpec: WrappingKeySpec;
  }
  export interface GetParametersForImportResponse {
    /**
     * The identifier of the CMK to use in a subsequent ImportKeyMaterial request. This is the same CMK specified in the GetParametersForImport request.
     */
    KeyId?: KeyIdType;
    /**
     * The import token to send in a subsequent ImportKeyMaterial request.
     */
    ImportToken?: CiphertextType;
    /**
     * The public key to use to encrypt the key material before importing it with ImportKeyMaterial.
     */
    PublicKey?: PlaintextType;
    /**
     * The time at which the import token and public key are no longer valid. After this time, you cannot use them to make an ImportKeyMaterial request and you must send another GetParametersForImport request to retrieve new ones.
     */
    ParametersValidTo?: DateType;
  }
  export interface GrantConstraints {
    /**
     * A list of key-value pairs, all of which must be present in the encryption context of certain subsequent operations that the grant allows. When certain subsequent operations allowed by the grant include encryption context that matches this list or is a superset of this list, the grant allows the operation. Otherwise, the grant does not allow the operation.
     */
    EncryptionContextSubset?: EncryptionContextType;
    /**
     * A list of key-value pairs that must be present in the encryption context of certain subsequent operations that the grant allows. When certain subsequent operations allowed by the grant include encryption context that matches this list, the grant allows the operation. Otherwise, the grant does not allow the operation.
     */
    EncryptionContextEquals?: EncryptionContextType;
  }
  export type GrantIdType = string;
  export type GrantList = GrantListEntry[];
  export interface GrantListEntry {
    /**
     * The unique identifier for the customer master key (CMK) to which the grant applies.
     */
    KeyId?: KeyIdType;
    /**
     * The unique identifier for the grant.
     */
    GrantId?: GrantIdType;
    /**
     * The friendly name that identifies the grant. If a name was provided in the CreateGrant request, that name is returned. Otherwise this value is null.
     */
    Name?: GrantNameType;
    /**
     * The date and time when the grant was created.
     */
    CreationDate?: DateType;
    /**
     * The principal that receives the grant's permissions.
     */
    GranteePrincipal?: PrincipalIdType;
    /**
     * The principal that can retire the grant.
     */
    RetiringPrincipal?: PrincipalIdType;
    /**
     * The AWS account under which the grant was issued.
     */
    IssuingAccount?: PrincipalIdType;
    /**
     * The list of operations permitted by the grant.
     */
    Operations?: GrantOperationList;
    /**
     * A list of key-value pairs that must be present in the encryption context of certain subsequent operations that the grant allows.
     */
    Constraints?: GrantConstraints;
  }
  export type GrantNameType = string;
  export type GrantOperation = "Decrypt"|"Encrypt"|"GenerateDataKey"|"GenerateDataKeyWithoutPlaintext"|"ReEncryptFrom"|"ReEncryptTo"|"CreateGrant"|"RetireGrant"|"DescribeKey"|string;
  export type GrantOperationList = GrantOperation[];
  export type GrantTokenList = GrantTokenType[];
  export type GrantTokenType = string;
  export interface ImportKeyMaterialRequest {
    /**
     * The identifier of the CMK to import the key material into. The CMK's Origin must be EXTERNAL. A valid identifier is the unique key ID or the Amazon Resource Name (ARN) of the CMK. Examples:   Unique key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab   
     */
    KeyId: KeyIdType;
    /**
     * The import token that you received in the response to a previous GetParametersForImport request. It must be from the same response that contained the public key that you used to encrypt the key material.
     */
    ImportToken: CiphertextType;
    /**
     * The encrypted key material to import. It must be encrypted with the public key that you received in the response to a previous GetParametersForImport request, using the wrapping algorithm that you specified in that request.
     */
    EncryptedKeyMaterial: CiphertextType;
    /**
     * The time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. You must omit this parameter when the ExpirationModel parameter is set to KEY_MATERIAL_DOES_NOT_EXPIRE. Otherwise it is required.
     */
    ValidTo?: DateType;
    /**
     * Specifies whether the key material expires. The default is KEY_MATERIAL_EXPIRES, in which case you must include the ValidTo parameter. When this parameter is set to KEY_MATERIAL_DOES_NOT_EXPIRE, you must omit the ValidTo parameter.
     */
    ExpirationModel?: ExpirationModelType;
  }
  export interface ImportKeyMaterialResponse {
  }
  export type KeyIdType = string;
  export type KeyList = KeyListEntry[];
  export interface KeyListEntry {
    /**
     * Unique identifier of the key.
     */
    KeyId?: KeyIdType;
    /**
     * ARN of the key.
     */
    KeyArn?: ArnType;
  }
  export type KeyManagerType = "AWS"|"CUSTOMER"|string;
  export interface KeyMetadata {
    /**
     * The twelve-digit account ID of the AWS account that owns the CMK.
     */
    AWSAccountId?: AWSAccountIdType;
    /**
     * The globally unique identifier for the CMK.
     */
    KeyId: KeyIdType;
    /**
     * The Amazon Resource Name (ARN) of the CMK. For examples, see AWS Key Management Service (AWS KMS) in the Example ARNs section of the AWS General Reference.
     */
    Arn?: ArnType;
    /**
     * The date and time when the CMK was created.
     */
    CreationDate?: DateType;
    /**
     * Specifies whether the CMK is enabled. When KeyState is Enabled this value is true, otherwise it is false.
     */
    Enabled?: BooleanType;
    /**
     * The description of the CMK.
     */
    Description?: DescriptionType;
    /**
     * The cryptographic operations for which you can use the CMK. Currently the only allowed value is ENCRYPT_DECRYPT, which means you can use the CMK for the Encrypt and Decrypt operations.
     */
    KeyUsage?: KeyUsageType;
    /**
     * The state of the CMK. For more information about how key state affects the use of a CMK, see How Key State Affects the Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
     */
    KeyState?: KeyState;
    /**
     * The date and time after which AWS KMS deletes the CMK. This value is present only when KeyState is PendingDeletion, otherwise this value is omitted.
     */
    DeletionDate?: DateType;
    /**
     * The time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. This value is present only for CMKs whose Origin is EXTERNAL and whose ExpirationModel is KEY_MATERIAL_EXPIRES, otherwise this value is omitted.
     */
    ValidTo?: DateType;
    /**
     * The source of the CMK's key material. When this value is AWS_KMS, AWS KMS created the key material. When this value is EXTERNAL, the key material was imported from your existing key management infrastructure or the CMK lacks key material.
     */
    Origin?: OriginType;
    /**
     * Specifies whether the CMK's key material expires. This value is present only when Origin is EXTERNAL, otherwise this value is omitted.
     */
    ExpirationModel?: ExpirationModelType;
    /**
     * The CMK's manager. CMKs are either customer-managed or AWS-managed. For more information about the difference, see Customer Master Keys in the AWS Key Management Service Developer Guide.
     */
    KeyManager?: KeyManagerType;
  }
  export type KeyState = "Enabled"|"Disabled"|"PendingDeletion"|"PendingImport"|string;
  export type KeyUsageType = "ENCRYPT_DECRYPT"|string;
  export type LimitType = number;
  export interface ListAliasesRequest {
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
  }
  export interface ListAliasesResponse {
    /**
     * A list of key aliases in the user's account.
     */
    Aliases?: AliasList;
    /**
     * When Truncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent request.
     */
    NextMarker?: MarkerType;
    /**
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To retrieve more items, pass the value of the NextMarker element in this response to the Marker parameter in a subsequent request.
     */
    Truncated?: BooleanType;
  }
  export interface ListGrantsRequest {
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
    /**
     * A unique identifier for the customer master key. This value can be a globally unique identifier or the fully specified ARN to a key.   Key ARN Example - arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012  
     */
    KeyId: KeyIdType;
  }
  export interface ListGrantsResponse {
    /**
     * A list of grants.
     */
    Grants?: GrantList;
    /**
     * When Truncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent request.
     */
    NextMarker?: MarkerType;
    /**
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To retrieve more items, pass the value of the NextMarker element in this response to the Marker parameter in a subsequent request.
     */
    Truncated?: BooleanType;
  }
  export interface ListKeyPoliciesRequest {
    /**
     * A unique identifier for the customer master key (CMK). You can use the unique key ID or the Amazon Resource Name (ARN) of the CMK. Examples:   Unique key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab   
     */
    KeyId: KeyIdType;
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 1000, inclusive. If you do not include a value, it defaults to 100. Currently only 1 policy can be attached to a key.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
  }
  export interface ListKeyPoliciesResponse {
    /**
     * A list of policy names. Currently, there is only one policy and it is named "Default".
     */
    PolicyNames?: PolicyNameList;
    /**
     * When Truncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent request.
     */
    NextMarker?: MarkerType;
    /**
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To retrieve more items, pass the value of the NextMarker element in this response to the Marker parameter in a subsequent request.
     */
    Truncated?: BooleanType;
  }
  export interface ListKeysRequest {
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 1000, inclusive. If you do not include a value, it defaults to 100.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
  }
  export interface ListKeysResponse {
    /**
     * A list of keys.
     */
    Keys?: KeyList;
    /**
     * When Truncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent request.
     */
    NextMarker?: MarkerType;
    /**
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To retrieve more items, pass the value of the NextMarker element in this response to the Marker parameter in a subsequent request.
     */
    Truncated?: BooleanType;
  }
  export interface ListResourceTagsRequest {
    /**
     * A unique identifier for the CMK whose tags you are listing. You can use the unique key ID or the Amazon Resource Name (ARN) of the CMK. Examples:   Unique key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab   
     */
    KeyId: KeyIdType;
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 50, inclusive. If you do not include a value, it defaults to 50.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received. Do not attempt to construct this value. Use only the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
  }
  export interface ListResourceTagsResponse {
    /**
     * A list of tags. Each tag consists of a tag key and a tag value.
     */
    Tags?: TagList;
    /**
     * When Truncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent request. Do not assume or infer any information from this value.
     */
    NextMarker?: MarkerType;
    /**
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To retrieve more items, pass the value of the NextMarker element in this response to the Marker parameter in a subsequent request.
     */
    Truncated?: BooleanType;
  }
  export interface ListRetirableGrantsRequest {
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
    /**
     * The retiring principal for which to list grants. To specify the retiring principal, use the Amazon Resource Name (ARN) of an AWS principal. Valid AWS principals include AWS accounts (root), IAM users, federated users, and assumed role users. For examples of the ARN syntax for specifying a principal, see AWS Identity and Access Management (IAM) in the Example ARNs section of the Amazon Web Services General Reference.
     */
    RetiringPrincipal: PrincipalIdType;
  }
  export type MarkerType = string;
  export type NumberOfBytesType = number;
  export type OriginType = "AWS_KMS"|"EXTERNAL"|string;
  export type PendingWindowInDaysType = number;
  export type PlaintextType = Buffer|Uint8Array|Blob|string;
  export type PolicyNameList = PolicyNameType[];
  export type PolicyNameType = string;
  export type PolicyType = string;
  export type PrincipalIdType = string;
  export interface PutKeyPolicyRequest {
    /**
     * A unique identifier for the CMK. Use the CMK's unique identifier or its Amazon Resource Name (ARN). For example:   Unique ID: 1234abcd-12ab-34cd-56ef-1234567890ab   ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab  
     */
    KeyId: KeyIdType;
    /**
     * The name of the key policy. This value must be default.
     */
    PolicyName: PolicyNameType;
    /**
     * The key policy to attach to the CMK. If you do not set BypassPolicyLockoutSafetyCheck to true, the policy must meet the following criteria:   It must allow the principal that is making the PutKeyPolicy request to make a subsequent PutKeyPolicy request on the CMK. This reduces the likelihood that the CMK becomes unmanageable. For more information, refer to the scenario in the Default Key Policy section in the AWS Key Management Service Developer Guide.   The principals that are specified in the key policy must exist and be visible to AWS KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before specifying the new principal in a key policy because the new principal might not immediately be visible to AWS KMS. For more information, see Changes that I make are not always immediately visible in the IAM User Guide.   The policy size limit is 32 KiB (32768 bytes).
     */
    Policy: PolicyType;
    /**
     * A flag to indicate whether to bypass the key policy lockout safety check.  Setting this value to true increases the likelihood that the CMK becomes unmanageable. Do not set this value to true indiscriminately. For more information, refer to the scenario in the Default Key Policy section in the AWS Key Management Service Developer Guide.  Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the CMK. The default value is false.
     */
    BypassPolicyLockoutSafetyCheck?: BooleanType;
  }
  export interface ReEncryptRequest {
    /**
     * Ciphertext of the data to reencrypt.
     */
    CiphertextBlob: CiphertextType;
    /**
     * Encryption context used to encrypt and decrypt the data specified in the CiphertextBlob parameter.
     */
    SourceEncryptionContext?: EncryptionContextType;
    /**
     * A unique identifier for the CMK to use to reencrypt the data. This value can be a globally unique identifier, a fully specified ARN to either an alias or a key, or an alias name prefixed by "alias/".   Key ARN Example - arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012   Alias ARN Example - arn:aws:kms:us-east-1:123456789012:alias/MyAliasName   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012   Alias Name Example - alias/MyAliasName  
     */
    DestinationKeyId: KeyIdType;
    /**
     * Encryption context to use when the data is reencrypted.
     */
    DestinationEncryptionContext?: EncryptionContextType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface ReEncryptResponse {
    /**
     * The reencrypted data.
     */
    CiphertextBlob?: CiphertextType;
    /**
     * Unique identifier of the CMK used to originally encrypt the data.
     */
    SourceKeyId?: KeyIdType;
    /**
     * Unique identifier of the CMK used to reencrypt the data.
     */
    KeyId?: KeyIdType;
  }
  export interface RetireGrantRequest {
    /**
     * Token that identifies the grant to be retired.
     */
    GrantToken?: GrantTokenType;
    /**
     * The Amazon Resource Name of the CMK associated with the grant. Example:   arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab  
     */
    KeyId?: KeyIdType;
    /**
     * Unique identifier of the grant to retire. The grant ID is returned in the response to a CreateGrant operation.   Grant ID Example - 0123456789012345678901234567890123456789012345678901234567890123  
     */
    GrantId?: GrantIdType;
  }
  export interface RevokeGrantRequest {
    /**
     * A unique identifier for the customer master key associated with the grant. This value can be a globally unique identifier or the fully specified ARN to a key.   Key ARN Example - arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012  
     */
    KeyId: KeyIdType;
    /**
     * Identifier of the grant to be revoked.
     */
    GrantId: GrantIdType;
  }
  export interface ScheduleKeyDeletionRequest {
    /**
     * The unique identifier for the customer master key (CMK) to delete. To specify this value, use the unique key ID or the Amazon Resource Name (ARN) of the CMK. Examples:   Unique key ID: 1234abcd-12ab-34cd-56ef-1234567890ab   Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab   To obtain the unique key ID and key ARN for a given CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * The waiting period, specified in number of days. After the waiting period ends, AWS KMS deletes the customer master key (CMK). This value is optional. If you include a value, it must be between 7 and 30, inclusive. If you do not include a value, it defaults to 30.
     */
    PendingWindowInDays?: PendingWindowInDaysType;
  }
  export interface ScheduleKeyDeletionResponse {
    /**
     * The unique identifier of the customer master key (CMK) for which deletion is scheduled.
     */
    KeyId?: KeyIdType;
    /**
     * The date and time after which AWS KMS deletes the customer master key (CMK).
     */
    DeletionDate?: DateType;
  }
  export interface Tag {
    /**
     * The key of the tag.
     */
    TagKey: TagKeyType;
    /**
     * The value of the tag.
     */
    TagValue: TagValueType;
  }
  export type TagKeyList = TagKeyType[];
  export type TagKeyType = string;
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * A unique identifier for the CMK you are tagging. You can use the unique key ID or the Amazon Resource Name (ARN) of the CMK. Examples:   Unique key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab   
     */
    KeyId: KeyIdType;
    /**
     * One or more tags. Each tag consists of a tag key and a tag value.
     */
    Tags: TagList;
  }
  export type TagValueType = string;
  export interface UntagResourceRequest {
    /**
     * A unique identifier for the CMK from which you are removing tags. You can use the unique key ID or the Amazon Resource Name (ARN) of the CMK. Examples:   Unique key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab   
     */
    KeyId: KeyIdType;
    /**
     * One or more tag keys. Specify only the tag keys, not the tag values.
     */
    TagKeys: TagKeyList;
  }
  export interface UpdateAliasRequest {
    /**
     * String that contains the name of the alias to be modified. The name must start with the word "alias" followed by a forward slash (alias/). Aliases that begin with "alias/aws" are reserved.
     */
    AliasName: AliasNameType;
    /**
     * Unique identifier of the customer master key to be mapped to the alias. This value can be a globally unique identifier or the fully specified ARN of a key.   Key ARN Example - arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012   You can call ListAliases to verify that the alias is mapped to the correct TargetKeyId.
     */
    TargetKeyId: KeyIdType;
  }
  export interface UpdateKeyDescriptionRequest {
    /**
     * A unique identifier for the CMK. This value can be a globally unique identifier or the fully specified ARN to a key.   Key ARN Example - arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012  
     */
    KeyId: KeyIdType;
    /**
     * New description for the CMK.
     */
    Description: DescriptionType;
  }
  export type WrappingKeySpec = "RSA_2048"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-11-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the KMS client.
   */
  export import Types = KMS;
}
export = KMS;
