import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ServiceCatalog extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ServiceCatalog.Types.ClientConfiguration)
  config: Config & ServiceCatalog.Types.ClientConfiguration;
  /**
   * Accepts an offer to share a portfolio.
   */
  acceptPortfolioShare(params: ServiceCatalog.Types.AcceptPortfolioShareInput, callback?: (err: AWSError, data: ServiceCatalog.Types.AcceptPortfolioShareOutput) => void): Request<ServiceCatalog.Types.AcceptPortfolioShareOutput, AWSError>;
  /**
   * Accepts an offer to share a portfolio.
   */
  acceptPortfolioShare(callback?: (err: AWSError, data: ServiceCatalog.Types.AcceptPortfolioShareOutput) => void): Request<ServiceCatalog.Types.AcceptPortfolioShareOutput, AWSError>;
  /**
   * Associates the specified principal ARN with the specified portfolio.
   */
  associatePrincipalWithPortfolio(params: ServiceCatalog.Types.AssociatePrincipalWithPortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.AssociatePrincipalWithPortfolioOutput) => void): Request<ServiceCatalog.Types.AssociatePrincipalWithPortfolioOutput, AWSError>;
  /**
   * Associates the specified principal ARN with the specified portfolio.
   */
  associatePrincipalWithPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.AssociatePrincipalWithPortfolioOutput) => void): Request<ServiceCatalog.Types.AssociatePrincipalWithPortfolioOutput, AWSError>;
  /**
   * Associates a product with a portfolio.
   */
  associateProductWithPortfolio(params: ServiceCatalog.Types.AssociateProductWithPortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.AssociateProductWithPortfolioOutput) => void): Request<ServiceCatalog.Types.AssociateProductWithPortfolioOutput, AWSError>;
  /**
   * Associates a product with a portfolio.
   */
  associateProductWithPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.AssociateProductWithPortfolioOutput) => void): Request<ServiceCatalog.Types.AssociateProductWithPortfolioOutput, AWSError>;
  /**
   * Associate a TagOption identifier with a resource identifier.
   */
  associateTagOptionWithResource(params: ServiceCatalog.Types.AssociateTagOptionWithResourceInput, callback?: (err: AWSError, data: ServiceCatalog.Types.AssociateTagOptionWithResourceOutput) => void): Request<ServiceCatalog.Types.AssociateTagOptionWithResourceOutput, AWSError>;
  /**
   * Associate a TagOption identifier with a resource identifier.
   */
  associateTagOptionWithResource(callback?: (err: AWSError, data: ServiceCatalog.Types.AssociateTagOptionWithResourceOutput) => void): Request<ServiceCatalog.Types.AssociateTagOptionWithResourceOutput, AWSError>;
  /**
   * Copies the specified source product to the specified target product or a new product. You can copy the product to the same account or another account. You can copy the product to the same region or another region. This operation is performed asynchronously. To track the progress of the operation, use DescribeCopyProductStatus.
   */
  copyProduct(params: ServiceCatalog.Types.CopyProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CopyProductOutput) => void): Request<ServiceCatalog.Types.CopyProductOutput, AWSError>;
  /**
   * Copies the specified source product to the specified target product or a new product. You can copy the product to the same account or another account. You can copy the product to the same region or another region. This operation is performed asynchronously. To track the progress of the operation, use DescribeCopyProductStatus.
   */
  copyProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.CopyProductOutput) => void): Request<ServiceCatalog.Types.CopyProductOutput, AWSError>;
  /**
   * Creates a new constraint. For more information, see Using Constraints.
   */
  createConstraint(params: ServiceCatalog.Types.CreateConstraintInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreateConstraintOutput) => void): Request<ServiceCatalog.Types.CreateConstraintOutput, AWSError>;
  /**
   * Creates a new constraint. For more information, see Using Constraints.
   */
  createConstraint(callback?: (err: AWSError, data: ServiceCatalog.Types.CreateConstraintOutput) => void): Request<ServiceCatalog.Types.CreateConstraintOutput, AWSError>;
  /**
   * Creates a new portfolio.
   */
  createPortfolio(params: ServiceCatalog.Types.CreatePortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreatePortfolioOutput) => void): Request<ServiceCatalog.Types.CreatePortfolioOutput, AWSError>;
  /**
   * Creates a new portfolio.
   */
  createPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.CreatePortfolioOutput) => void): Request<ServiceCatalog.Types.CreatePortfolioOutput, AWSError>;
  /**
   * Creates a new portfolio share.
   */
  createPortfolioShare(params: ServiceCatalog.Types.CreatePortfolioShareInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreatePortfolioShareOutput) => void): Request<ServiceCatalog.Types.CreatePortfolioShareOutput, AWSError>;
  /**
   * Creates a new portfolio share.
   */
  createPortfolioShare(callback?: (err: AWSError, data: ServiceCatalog.Types.CreatePortfolioShareOutput) => void): Request<ServiceCatalog.Types.CreatePortfolioShareOutput, AWSError>;
  /**
   * Creates a new product.
   */
  createProduct(params: ServiceCatalog.Types.CreateProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreateProductOutput) => void): Request<ServiceCatalog.Types.CreateProductOutput, AWSError>;
  /**
   * Creates a new product.
   */
  createProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.CreateProductOutput) => void): Request<ServiceCatalog.Types.CreateProductOutput, AWSError>;
  /**
   * Create a new provisioning artifact for the specified product. This operation does not work with a product that has been shared with you.
   */
  createProvisioningArtifact(params: ServiceCatalog.Types.CreateProvisioningArtifactInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreateProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.CreateProvisioningArtifactOutput, AWSError>;
  /**
   * Create a new provisioning artifact for the specified product. This operation does not work with a product that has been shared with you.
   */
  createProvisioningArtifact(callback?: (err: AWSError, data: ServiceCatalog.Types.CreateProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.CreateProvisioningArtifactOutput, AWSError>;
  /**
   * Create a new TagOption.
   */
  createTagOption(params: ServiceCatalog.Types.CreateTagOptionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreateTagOptionOutput) => void): Request<ServiceCatalog.Types.CreateTagOptionOutput, AWSError>;
  /**
   * Create a new TagOption.
   */
  createTagOption(callback?: (err: AWSError, data: ServiceCatalog.Types.CreateTagOptionOutput) => void): Request<ServiceCatalog.Types.CreateTagOptionOutput, AWSError>;
  /**
   * Deletes the specified constraint.
   */
  deleteConstraint(params: ServiceCatalog.Types.DeleteConstraintInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteConstraintOutput) => void): Request<ServiceCatalog.Types.DeleteConstraintOutput, AWSError>;
  /**
   * Deletes the specified constraint.
   */
  deleteConstraint(callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteConstraintOutput) => void): Request<ServiceCatalog.Types.DeleteConstraintOutput, AWSError>;
  /**
   * Deletes the specified portfolio. This operation does not work with a portfolio that has been shared with you or if it has products, users, constraints, or shared accounts associated with it.
   */
  deletePortfolio(params: ServiceCatalog.Types.DeletePortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DeletePortfolioOutput) => void): Request<ServiceCatalog.Types.DeletePortfolioOutput, AWSError>;
  /**
   * Deletes the specified portfolio. This operation does not work with a portfolio that has been shared with you or if it has products, users, constraints, or shared accounts associated with it.
   */
  deletePortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.DeletePortfolioOutput) => void): Request<ServiceCatalog.Types.DeletePortfolioOutput, AWSError>;
  /**
   * Deletes the specified portfolio share.
   */
  deletePortfolioShare(params: ServiceCatalog.Types.DeletePortfolioShareInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DeletePortfolioShareOutput) => void): Request<ServiceCatalog.Types.DeletePortfolioShareOutput, AWSError>;
  /**
   * Deletes the specified portfolio share.
   */
  deletePortfolioShare(callback?: (err: AWSError, data: ServiceCatalog.Types.DeletePortfolioShareOutput) => void): Request<ServiceCatalog.Types.DeletePortfolioShareOutput, AWSError>;
  /**
   * Deletes the specified product. This operation does not work with a product that has been shared with you or is associated with a portfolio. 
   */
  deleteProduct(params: ServiceCatalog.Types.DeleteProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteProductOutput) => void): Request<ServiceCatalog.Types.DeleteProductOutput, AWSError>;
  /**
   * Deletes the specified product. This operation does not work with a product that has been shared with you or is associated with a portfolio. 
   */
  deleteProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteProductOutput) => void): Request<ServiceCatalog.Types.DeleteProductOutput, AWSError>;
  /**
   * Deletes the specified provisioning artifact. This operation does not work on a provisioning artifact associated with a product that has been shared with you, or on the last provisioning artifact associated with a product (a product must have at least one provisioning artifact).
   */
  deleteProvisioningArtifact(params: ServiceCatalog.Types.DeleteProvisioningArtifactInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.DeleteProvisioningArtifactOutput, AWSError>;
  /**
   * Deletes the specified provisioning artifact. This operation does not work on a provisioning artifact associated with a product that has been shared with you, or on the last provisioning artifact associated with a product (a product must have at least one provisioning artifact).
   */
  deleteProvisioningArtifact(callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.DeleteProvisioningArtifactOutput, AWSError>;
  /**
   * Retrieves detailed information for a specified constraint.
   */
  describeConstraint(params: ServiceCatalog.Types.DescribeConstraintInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeConstraintOutput) => void): Request<ServiceCatalog.Types.DescribeConstraintOutput, AWSError>;
  /**
   * Retrieves detailed information for a specified constraint.
   */
  describeConstraint(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeConstraintOutput) => void): Request<ServiceCatalog.Types.DescribeConstraintOutput, AWSError>;
  /**
   * Describes the status of the specified copy product operation.
   */
  describeCopyProductStatus(params: ServiceCatalog.Types.DescribeCopyProductStatusInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeCopyProductStatusOutput) => void): Request<ServiceCatalog.Types.DescribeCopyProductStatusOutput, AWSError>;
  /**
   * Describes the status of the specified copy product operation.
   */
  describeCopyProductStatus(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeCopyProductStatusOutput) => void): Request<ServiceCatalog.Types.DescribeCopyProductStatusOutput, AWSError>;
  /**
   * Retrieves detailed information and any tags associated with the specified portfolio.
   */
  describePortfolio(params: ServiceCatalog.Types.DescribePortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribePortfolioOutput) => void): Request<ServiceCatalog.Types.DescribePortfolioOutput, AWSError>;
  /**
   * Retrieves detailed information and any tags associated with the specified portfolio.
   */
  describePortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribePortfolioOutput) => void): Request<ServiceCatalog.Types.DescribePortfolioOutput, AWSError>;
  /**
   * Retrieves information about a specified product. This operation is functionally identical to DescribeProductView except that it takes as input ProductId instead of ProductViewId.
   */
  describeProduct(params: ServiceCatalog.Types.DescribeProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductOutput) => void): Request<ServiceCatalog.Types.DescribeProductOutput, AWSError>;
  /**
   * Retrieves information about a specified product. This operation is functionally identical to DescribeProductView except that it takes as input ProductId instead of ProductViewId.
   */
  describeProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductOutput) => void): Request<ServiceCatalog.Types.DescribeProductOutput, AWSError>;
  /**
   * Retrieves information about a specified product, run with administrator access.
   */
  describeProductAsAdmin(params: ServiceCatalog.Types.DescribeProductAsAdminInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductAsAdminOutput) => void): Request<ServiceCatalog.Types.DescribeProductAsAdminOutput, AWSError>;
  /**
   * Retrieves information about a specified product, run with administrator access.
   */
  describeProductAsAdmin(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductAsAdminOutput) => void): Request<ServiceCatalog.Types.DescribeProductAsAdminOutput, AWSError>;
  /**
   * Retrieves information about a specified product. This operation is functionally identical to DescribeProduct except that it takes as input ProductViewId instead of ProductId.
   */
  describeProductView(params: ServiceCatalog.Types.DescribeProductViewInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductViewOutput) => void): Request<ServiceCatalog.Types.DescribeProductViewOutput, AWSError>;
  /**
   * Retrieves information about a specified product. This operation is functionally identical to DescribeProduct except that it takes as input ProductViewId instead of ProductId.
   */
  describeProductView(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductViewOutput) => void): Request<ServiceCatalog.Types.DescribeProductViewOutput, AWSError>;
  /**
   * Retrieve detailed information about the provisioned product.
   */
  describeProvisionedProduct(params: ServiceCatalog.Types.DescribeProvisionedProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisionedProductOutput) => void): Request<ServiceCatalog.Types.DescribeProvisionedProductOutput, AWSError>;
  /**
   * Retrieve detailed information about the provisioned product.
   */
  describeProvisionedProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisionedProductOutput) => void): Request<ServiceCatalog.Types.DescribeProvisionedProductOutput, AWSError>;
  /**
   * Retrieves detailed information about the specified provisioning artifact.
   */
  describeProvisioningArtifact(params: ServiceCatalog.Types.DescribeProvisioningArtifactInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.DescribeProvisioningArtifactOutput, AWSError>;
  /**
   * Retrieves detailed information about the specified provisioning artifact.
   */
  describeProvisioningArtifact(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.DescribeProvisioningArtifactOutput, AWSError>;
  /**
   * Provides information about parameters required to provision a specified product in a specified manner. Use this operation to obtain the list of ProvisioningArtifactParameters parameters available to call the ProvisionProduct operation for the specified product. If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to the ProvisionProduct operation, do not include conflicted TagOption keys as tags. Calls to ProvisionProduct with empty TagOption values cause the error "Parameter validation failed: Missing required parameter in Tags[N]:Value ". Calls to ProvisionProduct with conflicted TagOption keys automatically tag the provisioned product with the conflicted keys with the value "sc-tagoption-conflict-portfolioId-productId".
   */
  describeProvisioningParameters(params: ServiceCatalog.Types.DescribeProvisioningParametersInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisioningParametersOutput) => void): Request<ServiceCatalog.Types.DescribeProvisioningParametersOutput, AWSError>;
  /**
   * Provides information about parameters required to provision a specified product in a specified manner. Use this operation to obtain the list of ProvisioningArtifactParameters parameters available to call the ProvisionProduct operation for the specified product. If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to the ProvisionProduct operation, do not include conflicted TagOption keys as tags. Calls to ProvisionProduct with empty TagOption values cause the error "Parameter validation failed: Missing required parameter in Tags[N]:Value ". Calls to ProvisionProduct with conflicted TagOption keys automatically tag the provisioned product with the conflicted keys with the value "sc-tagoption-conflict-portfolioId-productId".
   */
  describeProvisioningParameters(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisioningParametersOutput) => void): Request<ServiceCatalog.Types.DescribeProvisioningParametersOutput, AWSError>;
  /**
   * Retrieves a paginated list of the full details of a specific request. Use this operation after calling a request operation (ProvisionProduct, TerminateProvisionedProduct, or UpdateProvisionedProduct). 
   */
  describeRecord(params: ServiceCatalog.Types.DescribeRecordInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeRecordOutput) => void): Request<ServiceCatalog.Types.DescribeRecordOutput, AWSError>;
  /**
   * Retrieves a paginated list of the full details of a specific request. Use this operation after calling a request operation (ProvisionProduct, TerminateProvisionedProduct, or UpdateProvisionedProduct). 
   */
  describeRecord(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeRecordOutput) => void): Request<ServiceCatalog.Types.DescribeRecordOutput, AWSError>;
  /**
   * Describes a TagOption.
   */
  describeTagOption(params: ServiceCatalog.Types.DescribeTagOptionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeTagOptionOutput) => void): Request<ServiceCatalog.Types.DescribeTagOptionOutput, AWSError>;
  /**
   * Describes a TagOption.
   */
  describeTagOption(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeTagOptionOutput) => void): Request<ServiceCatalog.Types.DescribeTagOptionOutput, AWSError>;
  /**
   * Disassociates a previously associated principal ARN from a specified portfolio.
   */
  disassociatePrincipalFromPortfolio(params: ServiceCatalog.Types.DisassociatePrincipalFromPortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociatePrincipalFromPortfolioOutput) => void): Request<ServiceCatalog.Types.DisassociatePrincipalFromPortfolioOutput, AWSError>;
  /**
   * Disassociates a previously associated principal ARN from a specified portfolio.
   */
  disassociatePrincipalFromPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociatePrincipalFromPortfolioOutput) => void): Request<ServiceCatalog.Types.DisassociatePrincipalFromPortfolioOutput, AWSError>;
  /**
   * Disassociates the specified product from the specified portfolio. 
   */
  disassociateProductFromPortfolio(params: ServiceCatalog.Types.DisassociateProductFromPortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociateProductFromPortfolioOutput) => void): Request<ServiceCatalog.Types.DisassociateProductFromPortfolioOutput, AWSError>;
  /**
   * Disassociates the specified product from the specified portfolio. 
   */
  disassociateProductFromPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociateProductFromPortfolioOutput) => void): Request<ServiceCatalog.Types.DisassociateProductFromPortfolioOutput, AWSError>;
  /**
   * Disassociates a TagOption from a resource.
   */
  disassociateTagOptionFromResource(params: ServiceCatalog.Types.DisassociateTagOptionFromResourceInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociateTagOptionFromResourceOutput) => void): Request<ServiceCatalog.Types.DisassociateTagOptionFromResourceOutput, AWSError>;
  /**
   * Disassociates a TagOption from a resource.
   */
  disassociateTagOptionFromResource(callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociateTagOptionFromResourceOutput) => void): Request<ServiceCatalog.Types.DisassociateTagOptionFromResourceOutput, AWSError>;
  /**
   * Lists details of all portfolios for which sharing was accepted by this account.
   */
  listAcceptedPortfolioShares(params: ServiceCatalog.Types.ListAcceptedPortfolioSharesInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListAcceptedPortfolioSharesOutput) => void): Request<ServiceCatalog.Types.ListAcceptedPortfolioSharesOutput, AWSError>;
  /**
   * Lists details of all portfolios for which sharing was accepted by this account.
   */
  listAcceptedPortfolioShares(callback?: (err: AWSError, data: ServiceCatalog.Types.ListAcceptedPortfolioSharesOutput) => void): Request<ServiceCatalog.Types.ListAcceptedPortfolioSharesOutput, AWSError>;
  /**
   * Retrieves detailed constraint information for the specified portfolio and product.
   */
  listConstraintsForPortfolio(params: ServiceCatalog.Types.ListConstraintsForPortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListConstraintsForPortfolioOutput) => void): Request<ServiceCatalog.Types.ListConstraintsForPortfolioOutput, AWSError>;
  /**
   * Retrieves detailed constraint information for the specified portfolio and product.
   */
  listConstraintsForPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.ListConstraintsForPortfolioOutput) => void): Request<ServiceCatalog.Types.ListConstraintsForPortfolioOutput, AWSError>;
  /**
   * Returns a paginated list of all paths to a specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.
   */
  listLaunchPaths(params: ServiceCatalog.Types.ListLaunchPathsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListLaunchPathsOutput) => void): Request<ServiceCatalog.Types.ListLaunchPathsOutput, AWSError>;
  /**
   * Returns a paginated list of all paths to a specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.
   */
  listLaunchPaths(callback?: (err: AWSError, data: ServiceCatalog.Types.ListLaunchPathsOutput) => void): Request<ServiceCatalog.Types.ListLaunchPathsOutput, AWSError>;
  /**
   * Lists the account IDs that have been authorized sharing of the specified portfolio.
   */
  listPortfolioAccess(params: ServiceCatalog.Types.ListPortfolioAccessInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListPortfolioAccessOutput) => void): Request<ServiceCatalog.Types.ListPortfolioAccessOutput, AWSError>;
  /**
   * Lists the account IDs that have been authorized sharing of the specified portfolio.
   */
  listPortfolioAccess(callback?: (err: AWSError, data: ServiceCatalog.Types.ListPortfolioAccessOutput) => void): Request<ServiceCatalog.Types.ListPortfolioAccessOutput, AWSError>;
  /**
   * Lists all portfolios in the catalog.
   */
  listPortfolios(params: ServiceCatalog.Types.ListPortfoliosInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListPortfoliosOutput) => void): Request<ServiceCatalog.Types.ListPortfoliosOutput, AWSError>;
  /**
   * Lists all portfolios in the catalog.
   */
  listPortfolios(callback?: (err: AWSError, data: ServiceCatalog.Types.ListPortfoliosOutput) => void): Request<ServiceCatalog.Types.ListPortfoliosOutput, AWSError>;
  /**
   * Lists all portfolios that the specified product is associated with.
   */
  listPortfoliosForProduct(params: ServiceCatalog.Types.ListPortfoliosForProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListPortfoliosForProductOutput) => void): Request<ServiceCatalog.Types.ListPortfoliosForProductOutput, AWSError>;
  /**
   * Lists all portfolios that the specified product is associated with.
   */
  listPortfoliosForProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.ListPortfoliosForProductOutput) => void): Request<ServiceCatalog.Types.ListPortfoliosForProductOutput, AWSError>;
  /**
   * Lists all principal ARNs associated with the specified portfolio.
   */
  listPrincipalsForPortfolio(params: ServiceCatalog.Types.ListPrincipalsForPortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListPrincipalsForPortfolioOutput) => void): Request<ServiceCatalog.Types.ListPrincipalsForPortfolioOutput, AWSError>;
  /**
   * Lists all principal ARNs associated with the specified portfolio.
   */
  listPrincipalsForPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.ListPrincipalsForPortfolioOutput) => void): Request<ServiceCatalog.Types.ListPrincipalsForPortfolioOutput, AWSError>;
  /**
   * Lists all provisioning artifacts associated with the specified product.
   */
  listProvisioningArtifacts(params: ServiceCatalog.Types.ListProvisioningArtifactsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListProvisioningArtifactsOutput) => void): Request<ServiceCatalog.Types.ListProvisioningArtifactsOutput, AWSError>;
  /**
   * Lists all provisioning artifacts associated with the specified product.
   */
  listProvisioningArtifacts(callback?: (err: AWSError, data: ServiceCatalog.Types.ListProvisioningArtifactsOutput) => void): Request<ServiceCatalog.Types.ListProvisioningArtifactsOutput, AWSError>;
  /**
   * Returns a paginated list of all performed requests, in the form of RecordDetails objects that are filtered as specified.
   */
  listRecordHistory(params: ServiceCatalog.Types.ListRecordHistoryInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListRecordHistoryOutput) => void): Request<ServiceCatalog.Types.ListRecordHistoryOutput, AWSError>;
  /**
   * Returns a paginated list of all performed requests, in the form of RecordDetails objects that are filtered as specified.
   */
  listRecordHistory(callback?: (err: AWSError, data: ServiceCatalog.Types.ListRecordHistoryOutput) => void): Request<ServiceCatalog.Types.ListRecordHistoryOutput, AWSError>;
  /**
   * Lists resources associated with a TagOption.
   */
  listResourcesForTagOption(params: ServiceCatalog.Types.ListResourcesForTagOptionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListResourcesForTagOptionOutput) => void): Request<ServiceCatalog.Types.ListResourcesForTagOptionOutput, AWSError>;
  /**
   * Lists resources associated with a TagOption.
   */
  listResourcesForTagOption(callback?: (err: AWSError, data: ServiceCatalog.Types.ListResourcesForTagOptionOutput) => void): Request<ServiceCatalog.Types.ListResourcesForTagOptionOutput, AWSError>;
  /**
   * Lists detailed TagOptions information.
   */
  listTagOptions(params: ServiceCatalog.Types.ListTagOptionsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListTagOptionsOutput) => void): Request<ServiceCatalog.Types.ListTagOptionsOutput, AWSError>;
  /**
   * Lists detailed TagOptions information.
   */
  listTagOptions(callback?: (err: AWSError, data: ServiceCatalog.Types.ListTagOptionsOutput) => void): Request<ServiceCatalog.Types.ListTagOptionsOutput, AWSError>;
  /**
   * Requests a provision of a specified product. A provisioned product is a resourced instance for a product. For example, provisioning a CloudFormation-template-backed product results in launching a CloudFormation stack and all the underlying resources that come with it.  You can check the status of this request using the DescribeRecord operation. The error "Parameter validation failed: Missing required parameter in Tags[N]:Value" indicates that your request contains a tag which has a tag key but no corresponding tag value (value is empty or null). Your call may have included values returned from a DescribeProvisioningParameters call that resulted in a TagOption key with an empty list. This happens when TagOption keys are in conflict. For more information, see DescribeProvisioningParameters.
   */
  provisionProduct(params: ServiceCatalog.Types.ProvisionProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ProvisionProductOutput) => void): Request<ServiceCatalog.Types.ProvisionProductOutput, AWSError>;
  /**
   * Requests a provision of a specified product. A provisioned product is a resourced instance for a product. For example, provisioning a CloudFormation-template-backed product results in launching a CloudFormation stack and all the underlying resources that come with it.  You can check the status of this request using the DescribeRecord operation. The error "Parameter validation failed: Missing required parameter in Tags[N]:Value" indicates that your request contains a tag which has a tag key but no corresponding tag value (value is empty or null). Your call may have included values returned from a DescribeProvisioningParameters call that resulted in a TagOption key with an empty list. This happens when TagOption keys are in conflict. For more information, see DescribeProvisioningParameters.
   */
  provisionProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.ProvisionProductOutput) => void): Request<ServiceCatalog.Types.ProvisionProductOutput, AWSError>;
  /**
   * Rejects an offer to share a portfolio.
   */
  rejectPortfolioShare(params: ServiceCatalog.Types.RejectPortfolioShareInput, callback?: (err: AWSError, data: ServiceCatalog.Types.RejectPortfolioShareOutput) => void): Request<ServiceCatalog.Types.RejectPortfolioShareOutput, AWSError>;
  /**
   * Rejects an offer to share a portfolio.
   */
  rejectPortfolioShare(callback?: (err: AWSError, data: ServiceCatalog.Types.RejectPortfolioShareOutput) => void): Request<ServiceCatalog.Types.RejectPortfolioShareOutput, AWSError>;
  /**
   * Returns a paginated list of all the ProvisionedProduct objects that are currently available (not terminated). 
   */
  scanProvisionedProducts(params: ServiceCatalog.Types.ScanProvisionedProductsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ScanProvisionedProductsOutput) => void): Request<ServiceCatalog.Types.ScanProvisionedProductsOutput, AWSError>;
  /**
   * Returns a paginated list of all the ProvisionedProduct objects that are currently available (not terminated). 
   */
  scanProvisionedProducts(callback?: (err: AWSError, data: ServiceCatalog.Types.ScanProvisionedProductsOutput) => void): Request<ServiceCatalog.Types.ScanProvisionedProductsOutput, AWSError>;
  /**
   * Returns a paginated list all of the Products objects to which the caller has access.  The output of this operation can be used as input for other operations, such as DescribeProductView.
   */
  searchProducts(params: ServiceCatalog.Types.SearchProductsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.SearchProductsOutput) => void): Request<ServiceCatalog.Types.SearchProductsOutput, AWSError>;
  /**
   * Returns a paginated list all of the Products objects to which the caller has access.  The output of this operation can be used as input for other operations, such as DescribeProductView.
   */
  searchProducts(callback?: (err: AWSError, data: ServiceCatalog.Types.SearchProductsOutput) => void): Request<ServiceCatalog.Types.SearchProductsOutput, AWSError>;
  /**
   * Retrieves summary and status information about all products created within the caller's account. If a portfolio ID is provided, this operation retrieves information for only those products that are associated with the specified portfolio.
   */
  searchProductsAsAdmin(params: ServiceCatalog.Types.SearchProductsAsAdminInput, callback?: (err: AWSError, data: ServiceCatalog.Types.SearchProductsAsAdminOutput) => void): Request<ServiceCatalog.Types.SearchProductsAsAdminOutput, AWSError>;
  /**
   * Retrieves summary and status information about all products created within the caller's account. If a portfolio ID is provided, this operation retrieves information for only those products that are associated with the specified portfolio.
   */
  searchProductsAsAdmin(callback?: (err: AWSError, data: ServiceCatalog.Types.SearchProductsAsAdminOutput) => void): Request<ServiceCatalog.Types.SearchProductsAsAdminOutput, AWSError>;
  /**
   * Requests termination of an existing ProvisionedProduct object. If there are Tags associated with the object, they are terminated when the ProvisionedProduct object is terminated.  This operation does not delete any records associated with the ProvisionedProduct object. You can check the status of this request using the DescribeRecord operation.
   */
  terminateProvisionedProduct(params: ServiceCatalog.Types.TerminateProvisionedProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.TerminateProvisionedProductOutput) => void): Request<ServiceCatalog.Types.TerminateProvisionedProductOutput, AWSError>;
  /**
   * Requests termination of an existing ProvisionedProduct object. If there are Tags associated with the object, they are terminated when the ProvisionedProduct object is terminated.  This operation does not delete any records associated with the ProvisionedProduct object. You can check the status of this request using the DescribeRecord operation.
   */
  terminateProvisionedProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.TerminateProvisionedProductOutput) => void): Request<ServiceCatalog.Types.TerminateProvisionedProductOutput, AWSError>;
  /**
   * Updates an existing constraint.
   */
  updateConstraint(params: ServiceCatalog.Types.UpdateConstraintInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateConstraintOutput) => void): Request<ServiceCatalog.Types.UpdateConstraintOutput, AWSError>;
  /**
   * Updates an existing constraint.
   */
  updateConstraint(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateConstraintOutput) => void): Request<ServiceCatalog.Types.UpdateConstraintOutput, AWSError>;
  /**
   * Updates the specified portfolio's details. This operation does not work with a product that has been shared with you.
   */
  updatePortfolio(params: ServiceCatalog.Types.UpdatePortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdatePortfolioOutput) => void): Request<ServiceCatalog.Types.UpdatePortfolioOutput, AWSError>;
  /**
   * Updates the specified portfolio's details. This operation does not work with a product that has been shared with you.
   */
  updatePortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdatePortfolioOutput) => void): Request<ServiceCatalog.Types.UpdatePortfolioOutput, AWSError>;
  /**
   * Updates an existing product.
   */
  updateProduct(params: ServiceCatalog.Types.UpdateProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProductOutput) => void): Request<ServiceCatalog.Types.UpdateProductOutput, AWSError>;
  /**
   * Updates an existing product.
   */
  updateProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProductOutput) => void): Request<ServiceCatalog.Types.UpdateProductOutput, AWSError>;
  /**
   * Requests updates to the configuration of an existing ProvisionedProduct object. If there are tags associated with the object, they cannot be updated or added with this operation. Depending on the specific updates requested, this operation may update with no interruption, with some interruption, or replace the ProvisionedProduct object entirely.  You can check the status of this request using the DescribeRecord operation.
   */
  updateProvisionedProduct(params: ServiceCatalog.Types.UpdateProvisionedProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProvisionedProductOutput) => void): Request<ServiceCatalog.Types.UpdateProvisionedProductOutput, AWSError>;
  /**
   * Requests updates to the configuration of an existing ProvisionedProduct object. If there are tags associated with the object, they cannot be updated or added with this operation. Depending on the specific updates requested, this operation may update with no interruption, with some interruption, or replace the ProvisionedProduct object entirely.  You can check the status of this request using the DescribeRecord operation.
   */
  updateProvisionedProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProvisionedProductOutput) => void): Request<ServiceCatalog.Types.UpdateProvisionedProductOutput, AWSError>;
  /**
   * Updates an existing provisioning artifact's information. This operation does not work on a provisioning artifact associated with a product that has been shared with you.
   */
  updateProvisioningArtifact(params: ServiceCatalog.Types.UpdateProvisioningArtifactInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.UpdateProvisioningArtifactOutput, AWSError>;
  /**
   * Updates an existing provisioning artifact's information. This operation does not work on a provisioning artifact associated with a product that has been shared with you.
   */
  updateProvisioningArtifact(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.UpdateProvisioningArtifactOutput, AWSError>;
  /**
   * Updates an existing TagOption.
   */
  updateTagOption(params: ServiceCatalog.Types.UpdateTagOptionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateTagOptionOutput) => void): Request<ServiceCatalog.Types.UpdateTagOptionOutput, AWSError>;
  /**
   * Updates an existing TagOption.
   */
  updateTagOption(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateTagOptionOutput) => void): Request<ServiceCatalog.Types.UpdateTagOptionOutput, AWSError>;
}
declare namespace ServiceCatalog {
  export type AcceptLanguage = string;
  export interface AcceptPortfolioShareInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
  }
  export interface AcceptPortfolioShareOutput {
  }
  export interface AccessLevelFilter {
    /**
     * Specifies the access level.  Account allows results at the account level.   Role allows results based on the federated role of the specified user.  User allows results limited to the specified user. 
     */
    Key?: AccessLevelFilterKey;
    /**
     * Specifies the user to which the access level applies. A value of Self is currently supported.
     */
    Value?: AccessLevelFilterValue;
  }
  export type AccessLevelFilterKey = "Account"|"Role"|"User"|string;
  export type AccessLevelFilterValue = string;
  export type AccountId = string;
  export type AccountIds = AccountId[];
  export type AddTags = Tag[];
  export type AllowedValue = string;
  export type AllowedValues = AllowedValue[];
  export type ApproximateCount = number;
  export interface AssociatePrincipalWithPortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The ARN representing the principal (IAM user, role, or group).
     */
    PrincipalARN: PrincipalARN;
    /**
     * The principal type. Must be IAM 
     */
    PrincipalType: PrincipalType;
  }
  export interface AssociatePrincipalWithPortfolioOutput {
  }
  export interface AssociateProductWithPortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The identifier of the source portfolio to use with this association.
     */
    SourcePortfolioId?: Id;
  }
  export interface AssociateProductWithPortfolioOutput {
  }
  export interface AssociateTagOptionWithResourceInput {
    /**
     * The resource identifier.
     */
    ResourceId: ResourceId;
    /**
     * The TagOption identifier.
     */
    TagOptionId: TagOptionId;
  }
  export interface AssociateTagOptionWithResourceOutput {
  }
  export type AttributeValue = string;
  export type ConstraintDescription = string;
  export interface ConstraintDetail {
    /**
     * The identifier of the constraint.
     */
    ConstraintId?: Id;
    /**
     * The type of the constraint.
     */
    Type?: ConstraintType;
    /**
     * The text description of the constraint.
     */
    Description?: ConstraintDescription;
    /**
     * The owner of the constraint.
     */
    Owner?: AccountId;
  }
  export type ConstraintDetails = ConstraintDetail[];
  export type ConstraintParameters = string;
  export type ConstraintSummaries = ConstraintSummary[];
  export interface ConstraintSummary {
    /**
     * The type of the constraint. 
     */
    Type?: ConstraintType;
    /**
     * The text description of the constraint.
     */
    Description?: ConstraintDescription;
  }
  export type ConstraintType = string;
  export type CopyOption = "CopyTags"|string;
  export type CopyOptions = CopyOption[];
  export interface CopyProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The Amazon Resource Name (ARN) of the source product.
     */
    SourceProductArn: ProductArn;
    /**
     * The ID of the target product. By default, a new product is created.
     */
    TargetProductId?: Id;
    /**
     * A name for the target product. The default is the name of the source product.
     */
    TargetProductName?: ProductViewName;
    /**
     * The IDs of the product versions to copy. By default, all provisioning artifacts are copied.
     */
    SourceProvisioningArtifactIdentifiers?: SourceProvisioningArtifactProperties;
    /**
     * The copy options. If the value is CopyTags, the tags from the source product are copied to the target product.
     */
    CopyOptions?: CopyOptions;
    /**
     *  A token to disambiguate duplicate requests. You can use the same input in multiple requests, provided that you also specify a different idempotency token for each request. 
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CopyProductOutput {
    /**
     * A unique token to pass to DescribeCopyProductStatus to track the progress of the operation.
     */
    CopyProductToken?: Id;
  }
  export type CopyProductStatus = "SUCCEEDED"|"IN_PROGRESS"|"FAILED"|string;
  export interface CreateConstraintInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The constraint parameters. Expected values vary depending on which Type is specified. For more information, see the Examples section. For Type LAUNCH, the RoleArn property is required.  For Type NOTIFICATION, the NotificationArns property is required. For Type TEMPLATE, the Rules property is required.
     */
    Parameters: ConstraintParameters;
    /**
     * The type of the constraint. Case-sensitive valid values are: LAUNCH, NOTIFICATION, or TEMPLATE. 
     */
    Type: ConstraintType;
    /**
     * The text description of the constraint.
     */
    Description?: ConstraintDescription;
    /**
     * A token to disambiguate duplicate requests. You can use the same input in multiple requests, provided that you also specify a different idempotency token for each request.
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CreateConstraintOutput {
    /**
     * The resulting detailed constraint information.
     */
    ConstraintDetail?: ConstraintDetail;
    /**
     * The resulting constraint parameters.
     */
    ConstraintParameters?: ConstraintParameters;
    /**
     * The status of the current request.
     */
    Status?: Status;
  }
  export interface CreatePortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The name to use for display purposes.
     */
    DisplayName: PortfolioDisplayName;
    /**
     * The text description of the portfolio.
     */
    Description?: PortfolioDescription;
    /**
     * The name of the portfolio provider.
     */
    ProviderName: ProviderName;
    /**
     * Tags to associate with the new portfolio.
     */
    Tags?: AddTags;
    /**
     * A token to disambiguate duplicate requests. You can use the same input in multiple requests, provided that you also specify a different idempotency token for each request.
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CreatePortfolioOutput {
    /**
     * The resulting detailed portfolio information.
     */
    PortfolioDetail?: PortfolioDetail;
    /**
     * Tags successfully associated with the new portfolio.
     */
    Tags?: Tags;
  }
  export interface CreatePortfolioShareInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The account ID with which to share the portfolio.
     */
    AccountId: AccountId;
  }
  export interface CreatePortfolioShareOutput {
  }
  export interface CreateProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The name of the product.
     */
    Name: ProductViewName;
    /**
     * The owner of the product.
     */
    Owner: ProductViewOwner;
    /**
     * The text description of the product.
     */
    Description?: ProductViewShortDescription;
    /**
     * The distributor of the product.
     */
    Distributor?: ProductViewOwner;
    /**
     * Support information about the product.
     */
    SupportDescription?: SupportDescription;
    /**
     * Contact email for product support.
     */
    SupportEmail?: SupportEmail;
    /**
     * Contact URL for product support.
     */
    SupportUrl?: SupportUrl;
    /**
     * The type of the product to create.
     */
    ProductType: ProductType;
    /**
     * Tags to associate with the new product.
     */
    Tags?: AddTags;
    /**
     * Parameters for the provisioning artifact.
     */
    ProvisioningArtifactParameters: ProvisioningArtifactProperties;
    /**
     * A token to disambiguate duplicate requests. You can use the same input in multiple requests, provided that you also specify a different idempotency token for each request.
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CreateProductOutput {
    /**
     * The resulting detailed product view information.
     */
    ProductViewDetail?: ProductViewDetail;
    /**
     * The resulting detailed provisioning artifact information.
     */
    ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
    /**
     * Tags successfully associated with the new product.
     */
    Tags?: Tags;
  }
  export interface CreateProvisioningArtifactInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The parameters to use when creating the new provisioning artifact.
     */
    Parameters: ProvisioningArtifactProperties;
    /**
     * A token to disambiguate duplicate requests. You can use the same input in multiple requests, provided that you also specify a different idempotency token for each request.
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CreateProvisioningArtifactOutput {
    /**
     * The resulting detailed provisioning artifact information.
     */
    ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
    /**
     * Additional information about the creation request for the provisioning artifact.
     */
    Info?: ProvisioningArtifactInfo;
    /**
     * The status of the current request.
     */
    Status?: Status;
  }
  export interface CreateTagOptionInput {
    /**
     * The TagOption key.
     */
    Key: TagOptionKey;
    /**
     * The TagOption value.
     */
    Value: TagOptionValue;
  }
  export interface CreateTagOptionOutput {
    /**
     * The resulting detailed TagOption information.
     */
    TagOptionDetail?: TagOptionDetail;
  }
  export type CreatedTime = Date;
  export type CreationTime = Date;
  export type DefaultValue = string;
  export interface DeleteConstraintInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the constraint to delete.
     */
    Id: Id;
  }
  export interface DeleteConstraintOutput {
  }
  export interface DeletePortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the portfolio for the delete request.
     */
    Id: Id;
  }
  export interface DeletePortfolioOutput {
  }
  export interface DeletePortfolioShareInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The account ID associated with the share to delete.
     */
    AccountId: AccountId;
  }
  export interface DeletePortfolioShareOutput {
  }
  export interface DeleteProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the product for the delete request.
     */
    Id: Id;
  }
  export interface DeleteProductOutput {
  }
  export interface DeleteProvisioningArtifactInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The identifier of the provisioning artifact for the delete request. This is sometimes referred to as the product version.
     */
    ProvisioningArtifactId: Id;
  }
  export interface DeleteProvisioningArtifactOutput {
  }
  export interface DescribeConstraintInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the constraint.
     */
    Id: Id;
  }
  export interface DescribeConstraintOutput {
    /**
     * Detailed constraint information.
     */
    ConstraintDetail?: ConstraintDetail;
    /**
     * The current parameters associated with the specified constraint.
     */
    ConstraintParameters?: ConstraintParameters;
    /**
     * The status of the current request.
     */
    Status?: Status;
  }
  export interface DescribeCopyProductStatusInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The token returned from the call to CopyProduct that initiated the operation.
     */
    CopyProductToken: Id;
  }
  export interface DescribeCopyProductStatusOutput {
    /**
     * The status of the copy product operation.
     */
    CopyProductStatus?: CopyProductStatus;
    /**
     * The ID of the copied product.
     */
    TargetProductId?: Id;
    /**
     * The status message.
     */
    StatusDetail?: StatusDetail;
  }
  export interface DescribePortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the portfolio for which to retrieve information.
     */
    Id: Id;
  }
  export interface DescribePortfolioOutput {
    /**
     * Detailed portfolio information.
     */
    PortfolioDetail?: PortfolioDetail;
    /**
     * Tags associated with the portfolio.
     */
    Tags?: Tags;
    /**
     * TagOptions associated with the portfolio.
     */
    TagOptions?: TagOptionDetails;
  }
  export interface DescribeProductAsAdminInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the product for which to retrieve information.
     */
    Id: Id;
  }
  export interface DescribeProductAsAdminOutput {
    /**
     * Detailed product view information.
     */
    ProductViewDetail?: ProductViewDetail;
    /**
     * A list of provisioning artifact summaries for the product.
     */
    ProvisioningArtifactSummaries?: ProvisioningArtifactSummaries;
    /**
     * Tags associated with the product.
     */
    Tags?: Tags;
    /**
     * List of TagOptions associated with the product.
     */
    TagOptions?: TagOptionDetails;
  }
  export interface DescribeProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The ProductId of the product to describe.
     */
    Id: Id;
  }
  export interface DescribeProductOutput {
    /**
     * The summary metadata about the specified product.
     */
    ProductViewSummary?: ProductViewSummary;
    /**
     * A list of provisioning artifact objects for the specified product. The ProvisioningArtifacts parameter represent the ways the specified product can be provisioned.
     */
    ProvisioningArtifacts?: ProvisioningArtifacts;
  }
  export interface DescribeProductViewInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The ProductViewId of the product to describe.
     */
    Id: Id;
  }
  export interface DescribeProductViewOutput {
    /**
     * The summary metadata about the specified product.
     */
    ProductViewSummary?: ProductViewSummary;
    /**
     * A list of provisioning artifact objects for the specified product. The ProvisioningArtifacts represent the ways in which the specified product can be provisioned.
     */
    ProvisioningArtifacts?: ProvisioningArtifacts;
  }
  export interface DescribeProvisionedProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The provisioned product identifier.
     */
    Id: Id;
  }
  export interface DescribeProvisionedProductOutput {
    /**
     * Detailed provisioned product information.
     */
    ProvisionedProductDetail?: ProvisionedProductDetail;
  }
  export interface DescribeProvisioningArtifactInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the provisioning artifact. This is sometimes referred to as the product version.
     */
    ProvisioningArtifactId: Id;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * Enable a verbose level of details for the provisioning artifact.
     */
    Verbose?: Verbose;
  }
  export interface DescribeProvisioningArtifactOutput {
    /**
     * Detailed provisioning artifact information.
     */
    ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
    /**
     * Additional information about the provisioning artifact.
     */
    Info?: ProvisioningArtifactInfo;
    /**
     * The status of the current request.
     */
    Status?: Status;
  }
  export interface DescribeProvisioningParametersInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The provisioning artifact identifier for this product. This is sometimes referred to as the product version.
     */
    ProvisioningArtifactId: Id;
    /**
     * The identifier of the path for this product's provisioning. This value is optional if the product has a default path, and is required if there is more than one path for the specified product.
     */
    PathId?: Id;
  }
  export interface DescribeProvisioningParametersOutput {
    /**
     * The list of parameters used to successfully provision the product. Each parameter includes a list of allowable values and additional metadata about each parameter.
     */
    ProvisioningArtifactParameters?: ProvisioningArtifactParameters;
    /**
     * The list of constraint summaries that apply to provisioning this product.
     */
    ConstraintSummaries?: ConstraintSummaries;
    /**
     * Any additional metadata specifically related to the provisioning of the product. For example, see the Version field of the CloudFormation template.
     */
    UsageInstructions?: UsageInstructions;
    /**
     * List of TagOptions associated with the provisioned provisioning parameters.
     */
    TagOptions?: TagOptionSummaries;
  }
  export interface DescribeRecordInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The record identifier of the ProvisionedProduct object for which to retrieve output information. This is the RecordDetail.RecordId obtained from the request operation's response.
     */
    Id: Id;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
  }
  export interface DescribeRecordOutput {
    /**
     * Detailed record information for the specified product. 
     */
    RecordDetail?: RecordDetail;
    /**
     * A list of outputs for the specified Product object created as the result of a request. For example, a CloudFormation-backed product that creates an S3 bucket would have an output for the S3 bucket URL.
     */
    RecordOutputs?: RecordOutputs;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface DescribeTagOptionInput {
    /**
     * The identifier of the TagOption.
     */
    Id: TagOptionId;
  }
  export interface DescribeTagOptionOutput {
    /**
     * The resulting detailed TagOption information.
     */
    TagOptionDetail?: TagOptionDetail;
  }
  export type Description = string;
  export interface DisassociatePrincipalFromPortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The ARN representing the principal (IAM user, role, or group).
     */
    PrincipalARN: PrincipalARN;
  }
  export interface DisassociatePrincipalFromPortfolioOutput {
  }
  export interface DisassociateProductFromPortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
  }
  export interface DisassociateProductFromPortfolioOutput {
  }
  export interface DisassociateTagOptionFromResourceInput {
    /**
     * Identifier of the resource from which to disassociate the TagOption.
     */
    ResourceId: ResourceId;
    /**
     * Identifier of the TagOption to disassociate from the resource.
     */
    TagOptionId: TagOptionId;
  }
  export interface DisassociateTagOptionFromResourceOutput {
  }
  export type ErrorCode = string;
  export type ErrorDescription = string;
  export type HasDefaultPath = boolean;
  export type Id = string;
  export type IdempotencyToken = string;
  export type IgnoreErrors = boolean;
  export type InstructionType = string;
  export type InstructionValue = string;
  export type LastRequestId = string;
  export type LaunchPathSummaries = LaunchPathSummary[];
  export interface LaunchPathSummary {
    /**
     * The unique identifier of the product path.
     */
    Id?: Id;
    /**
     * List of constraints on the portfolio-product relationship.
     */
    ConstraintSummaries?: ConstraintSummaries;
    /**
     * List of tags used by this launch path.
     */
    Tags?: Tags;
    /**
     * Corresponds to the name of the portfolio to which the user was assigned.
     */
    Name?: PortfolioName;
  }
  export interface ListAcceptedPortfolioSharesInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
  }
  export interface ListAcceptedPortfolioSharesOutput {
    /**
     * List of detailed portfolio information objects.
     */
    PortfolioDetails?: PortfolioDetails;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListConstraintsForPortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The product identifier.
     */
    ProductId?: Id;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export interface ListConstraintsForPortfolioOutput {
    /**
     * List of detailed constraint information objects.
     */
    ConstraintDetails?: ConstraintDetails;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListLaunchPathsInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier. Identifies the product for which to retrieve LaunchPathSummaries information.
     */
    ProductId: Id;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export interface ListLaunchPathsOutput {
    /**
     * List of launch path information summaries for the specified PageToken.
     */
    LaunchPathSummaries?: LaunchPathSummaries;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListPortfolioAccessInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
  }
  export interface ListPortfolioAccessOutput {
    /**
     * List of account IDs associated with access to the portfolio.
     */
    AccountIds?: AccountIds;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListPortfoliosForProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
  }
  export interface ListPortfoliosForProductOutput {
    /**
     * List of detailed portfolio information objects.
     */
    PortfolioDetails?: PortfolioDetails;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListPortfoliosInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
  }
  export interface ListPortfoliosOutput {
    /**
     * List of detailed portfolio information objects.
     */
    PortfolioDetails?: PortfolioDetails;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListPrincipalsForPortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export interface ListPrincipalsForPortfolioOutput {
    /**
     * The IAM principals (users or roles) associated with the portfolio.
     */
    Principals?: Principals;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListProvisioningArtifactsInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
  }
  export interface ListProvisioningArtifactsOutput {
    /**
     * List of detailed provisioning artifact information objects.
     */
    ProvisioningArtifactDetails?: ProvisioningArtifactDetails;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListRecordHistoryInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The access level for obtaining results. If left unspecified, User level access is used.
     */
    AccessLevelFilter?: AccessLevelFilter;
    /**
     * The filter to limit search results. 
     */
    SearchFilter?: ListRecordHistorySearchFilter;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export interface ListRecordHistoryOutput {
    /**
     * A list of record detail objects, listed in reverse chronological order.
     */
    RecordDetails?: RecordDetails;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListRecordHistorySearchFilter {
    /**
     * The filter key.
     */
    Key?: SearchFilterKey;
    /**
     * The filter value for Key.
     */
    Value?: SearchFilterValue;
  }
  export interface ListResourcesForTagOptionInput {
    /**
     * Identifier of the TagOption.
     */
    TagOptionId: TagOptionId;
    /**
     * Resource type.
     */
    ResourceType?: ResourceType;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export interface ListResourcesForTagOptionOutput {
    /**
     * The resulting detailed resource information.
     */
    ResourceDetails?: ResourceDetails;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export interface ListTagOptionsFilters {
    /**
     * The ListTagOptionsFilters key.
     */
    Key?: TagOptionKey;
    /**
     * The ListTagOptionsFilters value.
     */
    Value?: TagOptionValue;
    /**
     * The ListTagOptionsFilters active state.
     */
    Active?: TagOptionActive;
  }
  export interface ListTagOptionsInput {
    /**
     * The list of filters with which to limit search results. If no search filters are specified, the output is all TagOptions. 
     */
    Filters?: ListTagOptionsFilters;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export interface ListTagOptionsOutput {
    /**
     * The resulting detailed TagOption information.
     */
    TagOptionDetails?: TagOptionDetails;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export type NoEcho = boolean;
  export type NotificationArn = string;
  export type NotificationArns = NotificationArn[];
  export type OutputKey = string;
  export type OutputValue = string;
  export type PageSize = number;
  export type PageToken = string;
  export interface ParameterConstraints {
    /**
     * The values that the administrator has allowed for the parameter.
     */
    AllowedValues?: AllowedValues;
  }
  export type ParameterKey = string;
  export type ParameterType = string;
  export type ParameterValue = string;
  export type PortfolioDescription = string;
  export interface PortfolioDetail {
    /**
     * The identifier for the portfolio.
     */
    Id?: Id;
    /**
     * The ARN assigned to the portfolio.
     */
    ARN?: ResourceARN;
    /**
     * The name to use for display purposes.
     */
    DisplayName?: PortfolioDisplayName;
    /**
     * The text description of the portfolio.
     */
    Description?: PortfolioDescription;
    /**
     * The UTC timestamp of the creation time.
     */
    CreatedTime?: CreationTime;
    /**
     * The name of the portfolio provider.
     */
    ProviderName?: ProviderName;
  }
  export type PortfolioDetails = PortfolioDetail[];
  export type PortfolioDisplayName = string;
  export type PortfolioName = string;
  export interface Principal {
    /**
     * The ARN representing the principal (IAM user, role, or group).
     */
    PrincipalARN?: PrincipalARN;
    /**
     * The principal type. Must be IAM 
     */
    PrincipalType?: PrincipalType;
  }
  export type PrincipalARN = string;
  export type PrincipalType = "IAM"|string;
  export type Principals = Principal[];
  export type ProductArn = string;
  export type ProductSource = "ACCOUNT"|string;
  export type ProductType = "CLOUD_FORMATION_TEMPLATE"|"MARKETPLACE"|string;
  export type ProductViewAggregationType = string;
  export interface ProductViewAggregationValue {
    /**
     * The value of the product view aggregation.
     */
    Value?: AttributeValue;
    /**
     * An approximate count of the products that match the value.
     */
    ApproximateCount?: ApproximateCount;
  }
  export type ProductViewAggregationValues = ProductViewAggregationValue[];
  export type ProductViewAggregations = {[key: string]: ProductViewAggregationValues};
  export interface ProductViewDetail {
    /**
     * The summary metadata about the specified product view.
     */
    ProductViewSummary?: ProductViewSummary;
    /**
     * Current status of the product.  AVAILABLE - Product is available for use.  CREATING - Creation of product started, not ready for use.  FAILED - Action on product failed.
     */
    Status?: Status;
    /**
     * The ARN associated with the product.
     */
    ProductARN?: ResourceARN;
    /**
     * The UTC timestamp of the creation time.
     */
    CreatedTime?: CreatedTime;
  }
  export type ProductViewDetails = ProductViewDetail[];
  export type ProductViewDistributor = string;
  export type ProductViewFilterBy = "FullTextSearch"|"Owner"|"ProductType"|"SourceProductId"|string;
  export type ProductViewFilterValue = string;
  export type ProductViewFilterValues = ProductViewFilterValue[];
  export type ProductViewFilters = {[key: string]: ProductViewFilterValues};
  export type ProductViewName = string;
  export type ProductViewOwner = string;
  export type ProductViewShortDescription = string;
  export type ProductViewSortBy = "Title"|"VersionCount"|"CreationDate"|string;
  export type ProductViewSummaries = ProductViewSummary[];
  export interface ProductViewSummary {
    /**
     * The product view identifier.
     */
    Id?: Id;
    /**
     * The product identifier.
     */
    ProductId?: Id;
    /**
     * The name of the product.
     */
    Name?: ProductViewName;
    /**
     * The owner of the product. Contact the product administrator for the significance of this value.
     */
    Owner?: ProductViewOwner;
    /**
     * Short description of the product.
     */
    ShortDescription?: ProductViewShortDescription;
    /**
     * The product type. Contact the product administrator for the significance of this value. If this value is MARKETPLACE, the product was created by AWS Marketplace.
     */
    Type?: ProductType;
    /**
     * The distributor of the product. Contact the product administrator for the significance of this value.
     */
    Distributor?: ProductViewDistributor;
    /**
     * A value of false indicates that the product does not have a default path, while a value of true indicates that it does. If it's false, call ListLaunchPaths to disambiguate between paths. If true, ListLaunchPaths is not required, and the output of the ProductViewSummary operation can be used directly with DescribeProvisioningParameters.
     */
    HasDefaultPath?: HasDefaultPath;
    /**
     * The email contact information to obtain support for this Product.
     */
    SupportEmail?: SupportEmail;
    /**
     * The description of the support for this Product.
     */
    SupportDescription?: SupportDescription;
    /**
     * The URL information to obtain support for this Product.
     */
    SupportUrl?: SupportUrl;
  }
  export type ProviderName = string;
  export interface ProvisionProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The provisioning artifact identifier for this product. This is sometimes referred to as the product version.
     */
    ProvisioningArtifactId: Id;
    /**
     * The identifier of the path for this product's provisioning. This value is optional if the product has a default path, and is required if there is more than one path for the specified product.
     */
    PathId?: Id;
    /**
     * A user-friendly name to identify the ProvisionedProduct object. This value must be unique for the AWS account and cannot be updated after the product is provisioned.
     */
    ProvisionedProductName: ProvisionedProductName;
    /**
     * Parameters specified by the administrator that are required for provisioning the product.
     */
    ProvisioningParameters?: ProvisioningParameters;
    /**
     * A list of tags to use as provisioning options.
     */
    Tags?: Tags;
    /**
     * Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.
     */
    NotificationArns?: NotificationArns;
    /**
     * An idempotency token that uniquely identifies the provisioning request. 
     */
    ProvisionToken: IdempotencyToken;
  }
  export interface ProvisionProductOutput {
    /**
     * The detailed result of the ProvisionProduct request, containing the inputs made to that request, the current state of the request, a pointer to the ProvisionedProduct object of the request, and a list of any errors that the request encountered. 
     */
    RecordDetail?: RecordDetail;
  }
  export interface ProvisionedProductDetail {
    /**
     * The user-friendly name of the ProvisionedProduct object.
     */
    Name?: ProvisionedProductNameOrArn;
    /**
     * The ARN associated with the ProvisionedProduct object.
     */
    Arn?: ProvisionedProductNameOrArn;
    /**
     * The type of the ProvisionedProduct object.
     */
    Type?: ProvisionedProductType;
    /**
     * The identifier of the ProvisionedProduct object.
     */
    Id?: ProvisionedProductId;
    /**
     * The current status of the ProvisionedProduct.  AVAILABLE - Stable state, ready to perform any operation. The most recent action request succeeded and completed.  UNDER_CHANGE - Transitive state, operations performed may or may not have valid results. Wait for an AVAILABLE status before performing operations.  TAINTED - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.   ERROR - Something unexpected happened such that the provisioned product exists but the stack is not running. For example, CloudFormation received an invalid parameter value and could not launch the stack.
     */
    Status?: ProvisionedProductStatus;
    /**
     * The current status message of the ProvisionedProduct.
     */
    StatusMessage?: ProvisionedProductStatusMessage;
    /**
     * The UTC timestamp of the creation time.
     */
    CreatedTime?: CreatedTime;
    /**
     * A token to disambiguate duplicate requests. You can use the same input in multiple requests, provided that you also specify a different idempotency token for each request.
     */
    IdempotencyToken?: IdempotencyToken;
    /**
     * The record identifier of the last request performed on this ProvisionedProduct object.
     */
    LastRecordId?: LastRequestId;
  }
  export type ProvisionedProductDetails = ProvisionedProductDetail[];
  export type ProvisionedProductId = string;
  export type ProvisionedProductName = string;
  export type ProvisionedProductNameOrArn = string;
  export type ProvisionedProductStatus = "AVAILABLE"|"UNDER_CHANGE"|"TAINTED"|"ERROR"|string;
  export type ProvisionedProductStatusMessage = string;
  export type ProvisionedProductType = string;
  export interface ProvisioningArtifact {
    /**
     * The identifier for the artifact. This is sometimes referred to as the product version.
     */
    Id?: Id;
    /**
     * The name of the artifact.
     */
    Name?: ProvisioningArtifactName;
    /**
     * The text description of the artifact.
     */
    Description?: ProvisioningArtifactDescription;
    /**
     * The UTC timestamp of the creation time.
     */
    CreatedTime?: ProvisioningArtifactCreatedTime;
  }
  export type ProvisioningArtifactCreatedTime = Date;
  export type ProvisioningArtifactDescription = string;
  export interface ProvisioningArtifactDetail {
    /**
     * The identifier of the provisioning artifact. This is sometimes referred to as the product version.
     */
    Id?: Id;
    /**
     * The name assigned to the provisioning artifact.
     */
    Name?: ProvisioningArtifactName;
    /**
     * The text description of the provisioning artifact.
     */
    Description?: ProvisioningArtifactName;
    /**
     * The type of the provisioning artifact. The following provisioning artifact types are used by AWS Marketplace products:  MARKETPLACE_AMI - AMI products.  MARKETPLACE_CAR - CAR (Cluster and AWS Resources) products.
     */
    Type?: ProvisioningArtifactType;
    /**
     * The UTC timestamp of the creation time.
     */
    CreatedTime?: CreationTime;
  }
  export type ProvisioningArtifactDetails = ProvisioningArtifactDetail[];
  export type ProvisioningArtifactInfo = {[key: string]: ProvisioningArtifactInfoValue};
  export type ProvisioningArtifactInfoKey = string;
  export type ProvisioningArtifactInfoValue = string;
  export type ProvisioningArtifactName = string;
  export interface ProvisioningArtifactParameter {
    /**
     * The parameter key. 
     */
    ParameterKey?: ParameterKey;
    /**
     * The default value for this parameter.
     */
    DefaultValue?: DefaultValue;
    /**
     * The parameter type.
     */
    ParameterType?: ParameterType;
    /**
     * If this value is true, the value for this parameter is obfuscated from view when the parameter is retrieved. This parameter is used to hide sensitive information.
     */
    IsNoEcho?: NoEcho;
    /**
     * The text description of the parameter.
     */
    Description?: Description;
    /**
     * The list of constraints that the administrator has put on the parameter.
     */
    ParameterConstraints?: ParameterConstraints;
  }
  export type ProvisioningArtifactParameters = ProvisioningArtifactParameter[];
  export interface ProvisioningArtifactProperties {
    /**
     * The name assigned to the provisioning artifact properties.
     */
    Name?: ProvisioningArtifactName;
    /**
     * The text description of the provisioning artifact properties.
     */
    Description?: ProvisioningArtifactDescription;
    /**
     * Additional information about the provisioning artifact properties. When using this element in a request, you must specify LoadTemplateFromURL. For more information, see CreateProvisioningArtifact.
     */
    Info: ProvisioningArtifactInfo;
    /**
     * The type of the provisioning artifact properties. The following provisioning artifact property types are used by AWS Marketplace products:  MARKETPLACE_AMI - AMI products.  MARKETPLACE_CAR - CAR (Cluster and AWS Resources) products.
     */
    Type?: ProvisioningArtifactType;
  }
  export type ProvisioningArtifactPropertyName = "Id"|string;
  export type ProvisioningArtifactPropertyValue = string;
  export type ProvisioningArtifactSummaries = ProvisioningArtifactSummary[];
  export interface ProvisioningArtifactSummary {
    /**
     * The identifier of the provisioning artifact.
     */
    Id?: Id;
    /**
     * The name of the provisioning artifact.
     */
    Name?: ProvisioningArtifactName;
    /**
     * The description of the provisioning artifact.
     */
    Description?: ProvisioningArtifactDescription;
    /**
     * The UTC timestamp of the creation time.
     */
    CreatedTime?: ProvisioningArtifactCreatedTime;
    /**
     * The provisioning artifact metadata. This data is used with products created by AWS Marketplace.
     */
    ProvisioningArtifactMetadata?: ProvisioningArtifactInfo;
  }
  export type ProvisioningArtifactType = "CLOUD_FORMATION_TEMPLATE"|"MARKETPLACE_AMI"|"MARKETPLACE_CAR"|string;
  export type ProvisioningArtifacts = ProvisioningArtifact[];
  export interface ProvisioningParameter {
    /**
     * The ProvisioningArtifactParameter.ParameterKey parameter from DescribeProvisioningParameters.
     */
    Key?: ParameterKey;
    /**
     * The value to use for provisioning. Any constraints on this value can be found in ProvisioningArtifactParameter for Key.
     */
    Value?: ParameterValue;
  }
  export type ProvisioningParameters = ProvisioningParameter[];
  export interface RecordDetail {
    /**
     * The identifier of the ProvisionedProduct object record.
     */
    RecordId?: Id;
    /**
     * The user-friendly name of the ProvisionedProduct object.
     */
    ProvisionedProductName?: ProvisionedProductName;
    /**
     * The status of the ProvisionedProduct object.  CREATED - Request created but the operation has not yet started.  IN_PROGRESS - The requested operation is in-progress.  IN_PROGRESS_IN_ERROR - The provisioned product is under change but the requested operation failed and some remediation is occurring. For example, a rollback.  SUCCEEDED - The requested operation has successfully completed.  FAILED - The requested operation has completed but has failed. Investigate using the error messages returned.
     */
    Status?: RecordStatus;
    /**
     * The UTC timestamp of the creation time.
     */
    CreatedTime?: CreatedTime;
    /**
     * The time when the record for the ProvisionedProduct object was last updated.
     */
    UpdatedTime?: UpdatedTime;
    /**
     * The type of the ProvisionedProduct object.
     */
    ProvisionedProductType?: ProvisionedProductType;
    /**
     * The record type for this record.
     */
    RecordType?: RecordType;
    /**
     * The identifier of the ProvisionedProduct object.
     */
    ProvisionedProductId?: Id;
    /**
     * The product identifier.
     */
    ProductId?: Id;
    /**
     * The provisioning artifact identifier for this product. This is sometimes referred to as the product version.
     */
    ProvisioningArtifactId?: Id;
    /**
     * The identifier of the path for this product's provisioning.
     */
    PathId?: Id;
    /**
     * A list of errors that occurred while processing the request.
     */
    RecordErrors?: RecordErrors;
    /**
     * List of tags associated with this record.
     */
    RecordTags?: RecordTags;
  }
  export type RecordDetails = RecordDetail[];
  export interface RecordError {
    /**
     * The numeric value of the error.
     */
    Code?: ErrorCode;
    /**
     * The text description of the error.
     */
    Description?: ErrorDescription;
  }
  export type RecordErrors = RecordError[];
  export interface RecordOutput {
    /**
     * The output key.
     */
    OutputKey?: OutputKey;
    /**
     * The output value.
     */
    OutputValue?: OutputValue;
    /**
     * The text description of the output.
     */
    Description?: Description;
  }
  export type RecordOutputs = RecordOutput[];
  export type RecordStatus = "CREATED"|"IN_PROGRESS"|"IN_PROGRESS_IN_ERROR"|"SUCCEEDED"|"FAILED"|string;
  export interface RecordTag {
    /**
     * The key for this tag.
     */
    Key?: RecordTagKey;
    /**
     * The value for this tag.
     */
    Value?: RecordTagValue;
  }
  export type RecordTagKey = string;
  export type RecordTagValue = string;
  export type RecordTags = RecordTag[];
  export type RecordType = string;
  export interface RejectPortfolioShareInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
  }
  export interface RejectPortfolioShareOutput {
  }
  export type ResourceARN = string;
  export interface ResourceDetail {
    /**
     * Identifier of the resource.
     */
    Id?: ResourceDetailId;
    /**
     * ARN of the resource.
     */
    ARN?: ResourceDetailARN;
    /**
     * Name of the resource.
     */
    Name?: ResourceDetailName;
    /**
     * Description of the resource.
     */
    Description?: ResourceDetailDescription;
    /**
     * Creation time of the resource.
     */
    CreatedTime?: ResourceDetailCreatedTime;
  }
  export type ResourceDetailARN = string;
  export type ResourceDetailCreatedTime = Date;
  export type ResourceDetailDescription = string;
  export type ResourceDetailId = string;
  export type ResourceDetailName = string;
  export type ResourceDetails = ResourceDetail[];
  export type ResourceId = string;
  export type ResourceType = string;
  export interface ScanProvisionedProductsInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The access level for obtaining results. If left unspecified, User level access is used.
     */
    AccessLevelFilter?: AccessLevelFilter;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export interface ScanProvisionedProductsOutput {
    /**
     * A list of ProvisionedProduct detail objects.
     */
    ProvisionedProducts?: ProvisionedProductDetails;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export type SearchFilterKey = string;
  export type SearchFilterValue = string;
  export interface SearchProductsAsAdminInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId?: Id;
    /**
     * The list of filters with which to limit search results. If no search filters are specified, the output is all the products to which the administrator has access.
     */
    Filters?: ProductViewFilters;
    /**
     * The sort field specifier. If no value is specified, results are not sorted.
     */
    SortBy?: ProductViewSortBy;
    /**
     * The sort order specifier. If no value is specified, results are not sorted.
     */
    SortOrder?: SortOrder;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
    /**
     * Access level of the source of the product.
     */
    ProductSource?: ProductSource;
  }
  export interface SearchProductsAsAdminOutput {
    /**
     * List of detailed product view information objects.
     */
    ProductViewDetails?: ProductViewDetails;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface SearchProductsInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The list of filters with which to limit search results. If no search filters are specified, the output is all the products to which the calling user has access. 
     */
    Filters?: ProductViewFilters;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
    /**
     * The sort field specifier. If no value is specified, results are not sorted.
     */
    SortBy?: ProductViewSortBy;
    /**
     * The sort order specifier. If no value is specified, results are not sorted.
     */
    SortOrder?: SortOrder;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export interface SearchProductsOutput {
    /**
     * A list of the product view summary objects.
     */
    ProductViewSummaries?: ProductViewSummaries;
    /**
     * A list of the product view aggregation value objects.
     */
    ProductViewAggregations?: ProductViewAggregations;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export type SourceProvisioningArtifactProperties = SourceProvisioningArtifactPropertiesMap[];
  export type SourceProvisioningArtifactPropertiesMap = {[key: string]: ProvisioningArtifactPropertyValue};
  export type Status = "AVAILABLE"|"CREATING"|"FAILED"|string;
  export type StatusDetail = string;
  export type SupportDescription = string;
  export type SupportEmail = string;
  export type SupportUrl = string;
  export interface Tag {
    /**
     * The ProvisioningArtifactParameter.TagKey parameter from DescribeProvisioningParameters.
     */
    Key: TagKey;
    /**
     * The desired value for this key.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagOptionActive = boolean;
  export interface TagOptionDetail {
    /**
     * The TagOptionDetail key.
     */
    Key?: TagOptionKey;
    /**
     * The TagOptionDetail value.
     */
    Value?: TagOptionValue;
    /**
     * The TagOptionDetail active state.
     */
    Active?: TagOptionActive;
    /**
     * The TagOptionDetail identifier.
     */
    Id?: TagOptionId;
  }
  export type TagOptionDetails = TagOptionDetail[];
  export type TagOptionId = string;
  export type TagOptionKey = string;
  export type TagOptionSummaries = TagOptionSummary[];
  export interface TagOptionSummary {
    /**
     * The TagOptionSummary key.
     */
    Key?: TagOptionKey;
    /**
     * The TagOptionSummary value.
     */
    Values?: TagOptionValues;
  }
  export type TagOptionValue = string;
  export type TagOptionValues = TagOptionValue[];
  export type TagValue = string;
  export type Tags = Tag[];
  export interface TerminateProvisionedProductInput {
    /**
     * The name of the ProvisionedProduct object to terminate. Specify either ProvisionedProductName or ProvisionedProductId, but not both.
     */
    ProvisionedProductName?: ProvisionedProductNameOrArn;
    /**
     * The identifier of the ProvisionedProduct object to terminate. Specify either ProvisionedProductName or ProvisionedProductId, but not both.
     */
    ProvisionedProductId?: Id;
    /**
     * An idempotency token that uniquely identifies the termination request. This token is only valid during the termination process. After the ProvisionedProduct object is terminated, further requests to terminate the same ProvisionedProduct object always return ResourceNotFound regardless of the value of TerminateToken.
     */
    TerminateToken: IdempotencyToken;
    /**
     * If set to true, AWS Service Catalog stops managing the specified ProvisionedProduct object even if it cannot delete the underlying resources.
     */
    IgnoreErrors?: IgnoreErrors;
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
  }
  export interface TerminateProvisionedProductOutput {
    /**
     * The detailed result of the TerminateProvisionedProduct request, containing the inputs made to that request, the current state of the request, a pointer to the ProvisionedProduct object that the request is modifying, and a list of any errors that the request encountered.
     */
    RecordDetail?: RecordDetail;
  }
  export interface UpdateConstraintInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the constraint to update.
     */
    Id: Id;
    /**
     * The updated text description of the constraint.
     */
    Description?: ConstraintDescription;
  }
  export interface UpdateConstraintOutput {
    /**
     * The resulting detailed constraint information.
     */
    ConstraintDetail?: ConstraintDetail;
    /**
     * The resulting updated constraint parameters.
     */
    ConstraintParameters?: ConstraintParameters;
    /**
     * The status of the current request.
     */
    Status?: Status;
  }
  export interface UpdatePortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the portfolio for the update request.
     */
    Id: Id;
    /**
     * The name to use for display purposes.
     */
    DisplayName?: PortfolioDisplayName;
    /**
     * The updated text description of the portfolio.
     */
    Description?: PortfolioDescription;
    /**
     * The updated name of the portfolio provider.
     */
    ProviderName?: ProviderName;
    /**
     * Tags to add to the existing list of tags associated with the portfolio.
     */
    AddTags?: AddTags;
    /**
     * Tags to remove from the existing list of tags associated with the portfolio.
     */
    RemoveTags?: TagKeys;
  }
  export interface UpdatePortfolioOutput {
    /**
     * The resulting detailed portfolio information.
     */
    PortfolioDetail?: PortfolioDetail;
    /**
     * Tags associated with the portfolio.
     */
    Tags?: Tags;
  }
  export interface UpdateProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the product for the update request.
     */
    Id: Id;
    /**
     * The updated product name.
     */
    Name?: ProductViewName;
    /**
     * The updated owner of the product.
     */
    Owner?: ProductViewOwner;
    /**
     * The updated text description of the product.
     */
    Description?: ProductViewShortDescription;
    /**
     * The updated distributor of the product.
     */
    Distributor?: ProductViewOwner;
    /**
     * The updated support description for the product.
     */
    SupportDescription?: SupportDescription;
    /**
     * The updated support email for the product.
     */
    SupportEmail?: SupportEmail;
    /**
     * The updated support URL for the product.
     */
    SupportUrl?: SupportUrl;
    /**
     * Tags to add to the existing list of tags associated with the product.
     */
    AddTags?: AddTags;
    /**
     * Tags to remove from the existing list of tags associated with the product.
     */
    RemoveTags?: TagKeys;
  }
  export interface UpdateProductOutput {
    /**
     * The resulting detailed product view information.
     */
    ProductViewDetail?: ProductViewDetail;
    /**
     * Tags associated with the product.
     */
    Tags?: Tags;
  }
  export interface UpdateProvisionedProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The updated name of the ProvisionedProduct object. Specify either ProvisionedProductName or ProvisionedProductId, but not both.
     */
    ProvisionedProductName?: ProvisionedProductNameOrArn;
    /**
     * The identifier of the ProvisionedProduct object to update. Specify either ProvisionedProductName or ProvisionedProductId, but not both.
     */
    ProvisionedProductId?: Id;
    /**
     * The identifier of the ProvisionedProduct object.
     */
    ProductId?: Id;
    /**
     * The provisioning artifact identifier for this product. This is sometimes referred to as the product version.
     */
    ProvisioningArtifactId?: Id;
    /**
     * The identifier of the path to use in the updated ProvisionedProduct object. This value is optional if the product has a default path, and is required if there is more than one path for the specified product.
     */
    PathId?: Id;
    /**
     * A list of ProvisioningParameter objects used to update the ProvisionedProduct object.
     */
    ProvisioningParameters?: UpdateProvisioningParameters;
    /**
     * The idempotency token that uniquely identifies the provisioning update request.
     */
    UpdateToken: IdempotencyToken;
  }
  export interface UpdateProvisionedProductOutput {
    /**
     * The detailed result of the UpdateProvisionedProduct request, containing the inputs made to that request, the current state of the request, a pointer to the ProvisionedProduct object that the request is modifying, and a list of any errors that the request encountered.
     */
    RecordDetail?: RecordDetail;
  }
  export interface UpdateProvisioningArtifactInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The identifier of the provisioning artifact for the update request. This is sometimes referred to as the product version.
     */
    ProvisioningArtifactId: Id;
    /**
     * The updated name of the provisioning artifact.
     */
    Name?: ProvisioningArtifactName;
    /**
     * The updated text description of the provisioning artifact.
     */
    Description?: ProvisioningArtifactDescription;
  }
  export interface UpdateProvisioningArtifactOutput {
    /**
     * The resulting detailed provisioning artifact information.
     */
    ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
    /**
     * Additional information about the provisioning artifact update request.
     */
    Info?: ProvisioningArtifactInfo;
    /**
     * The status of the current request.
     */
    Status?: Status;
  }
  export interface UpdateProvisioningParameter {
    /**
     * The ProvisioningArtifactParameter.ParameterKey parameter from DescribeProvisioningParameters.
     */
    Key?: ParameterKey;
    /**
     * The value to use for updating the product provisioning. Any constraints on this value can be found in the ProvisioningArtifactParameter parameter for Key.
     */
    Value?: ParameterValue;
    /**
     * If true, uses the currently set value for Key, ignoring UpdateProvisioningParameter.Value.
     */
    UsePreviousValue?: UsePreviousValue;
  }
  export type UpdateProvisioningParameters = UpdateProvisioningParameter[];
  export interface UpdateTagOptionInput {
    /**
     * The identifier of the constraint to update.
     */
    Id: TagOptionId;
    /**
     * The updated value.
     */
    Value?: TagOptionValue;
    /**
     * The updated active state.
     */
    Active?: TagOptionActive;
  }
  export interface UpdateTagOptionOutput {
    /**
     * The resulting detailed TagOption information.
     */
    TagOptionDetail?: TagOptionDetail;
  }
  export type UpdatedTime = Date;
  export interface UsageInstruction {
    /**
     * The usage instruction type for the value.
     */
    Type?: InstructionType;
    /**
     * The usage instruction value for this type.
     */
    Value?: InstructionValue;
  }
  export type UsageInstructions = UsageInstruction[];
  export type UsePreviousValue = boolean;
  export type Verbose = boolean;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-12-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ServiceCatalog client.
   */
  export import Types = ServiceCatalog;
}
export = ServiceCatalog;
