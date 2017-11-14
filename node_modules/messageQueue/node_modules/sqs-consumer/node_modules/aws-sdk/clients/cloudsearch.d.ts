import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CloudSearch extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudSearch.Types.ClientConfiguration)
  config: Config & CloudSearch.Types.ClientConfiguration;
  /**
   * Indexes the search suggestions. For more information, see Configuring Suggesters in the Amazon CloudSearch Developer Guide.
   */
  buildSuggesters(params: CloudSearch.Types.BuildSuggestersRequest, callback?: (err: AWSError, data: CloudSearch.Types.BuildSuggestersResponse) => void): Request<CloudSearch.Types.BuildSuggestersResponse, AWSError>;
  /**
   * Indexes the search suggestions. For more information, see Configuring Suggesters in the Amazon CloudSearch Developer Guide.
   */
  buildSuggesters(callback?: (err: AWSError, data: CloudSearch.Types.BuildSuggestersResponse) => void): Request<CloudSearch.Types.BuildSuggestersResponse, AWSError>;
  /**
   * Creates a new search domain. For more information, see Creating a Search Domain in the Amazon CloudSearch Developer Guide.
   */
  createDomain(params: CloudSearch.Types.CreateDomainRequest, callback?: (err: AWSError, data: CloudSearch.Types.CreateDomainResponse) => void): Request<CloudSearch.Types.CreateDomainResponse, AWSError>;
  /**
   * Creates a new search domain. For more information, see Creating a Search Domain in the Amazon CloudSearch Developer Guide.
   */
  createDomain(callback?: (err: AWSError, data: CloudSearch.Types.CreateDomainResponse) => void): Request<CloudSearch.Types.CreateDomainResponse, AWSError>;
  /**
   * Configures an analysis scheme that can be applied to a text or text-array field to define language-specific text processing options. For more information, see Configuring Analysis Schemes in the Amazon CloudSearch Developer Guide.
   */
  defineAnalysisScheme(params: CloudSearch.Types.DefineAnalysisSchemeRequest, callback?: (err: AWSError, data: CloudSearch.Types.DefineAnalysisSchemeResponse) => void): Request<CloudSearch.Types.DefineAnalysisSchemeResponse, AWSError>;
  /**
   * Configures an analysis scheme that can be applied to a text or text-array field to define language-specific text processing options. For more information, see Configuring Analysis Schemes in the Amazon CloudSearch Developer Guide.
   */
  defineAnalysisScheme(callback?: (err: AWSError, data: CloudSearch.Types.DefineAnalysisSchemeResponse) => void): Request<CloudSearch.Types.DefineAnalysisSchemeResponse, AWSError>;
  /**
   * Configures an Expression for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see Configuring Expressions in the Amazon CloudSearch Developer Guide.
   */
  defineExpression(params: CloudSearch.Types.DefineExpressionRequest, callback?: (err: AWSError, data: CloudSearch.Types.DefineExpressionResponse) => void): Request<CloudSearch.Types.DefineExpressionResponse, AWSError>;
  /**
   * Configures an Expression for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see Configuring Expressions in the Amazon CloudSearch Developer Guide.
   */
  defineExpression(callback?: (err: AWSError, data: CloudSearch.Types.DefineExpressionResponse) => void): Request<CloudSearch.Types.DefineExpressionResponse, AWSError>;
  /**
   * Configures an IndexField for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the IndexFieldType. If the field exists, the new configuration replaces the old one. For more information, see Configuring Index Fields in the Amazon CloudSearch Developer Guide. 
   */
  defineIndexField(params: CloudSearch.Types.DefineIndexFieldRequest, callback?: (err: AWSError, data: CloudSearch.Types.DefineIndexFieldResponse) => void): Request<CloudSearch.Types.DefineIndexFieldResponse, AWSError>;
  /**
   * Configures an IndexField for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the IndexFieldType. If the field exists, the new configuration replaces the old one. For more information, see Configuring Index Fields in the Amazon CloudSearch Developer Guide. 
   */
  defineIndexField(callback?: (err: AWSError, data: CloudSearch.Types.DefineIndexFieldResponse) => void): Request<CloudSearch.Types.DefineIndexFieldResponse, AWSError>;
  /**
   * Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see Getting Search Suggestions in the Amazon CloudSearch Developer Guide.
   */
  defineSuggester(params: CloudSearch.Types.DefineSuggesterRequest, callback?: (err: AWSError, data: CloudSearch.Types.DefineSuggesterResponse) => void): Request<CloudSearch.Types.DefineSuggesterResponse, AWSError>;
  /**
   * Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see Getting Search Suggestions in the Amazon CloudSearch Developer Guide.
   */
  defineSuggester(callback?: (err: AWSError, data: CloudSearch.Types.DefineSuggesterResponse) => void): Request<CloudSearch.Types.DefineSuggesterResponse, AWSError>;
  /**
   * Deletes an analysis scheme. For more information, see Configuring Analysis Schemes in the Amazon CloudSearch Developer Guide. 
   */
  deleteAnalysisScheme(params: CloudSearch.Types.DeleteAnalysisSchemeRequest, callback?: (err: AWSError, data: CloudSearch.Types.DeleteAnalysisSchemeResponse) => void): Request<CloudSearch.Types.DeleteAnalysisSchemeResponse, AWSError>;
  /**
   * Deletes an analysis scheme. For more information, see Configuring Analysis Schemes in the Amazon CloudSearch Developer Guide. 
   */
  deleteAnalysisScheme(callback?: (err: AWSError, data: CloudSearch.Types.DeleteAnalysisSchemeResponse) => void): Request<CloudSearch.Types.DeleteAnalysisSchemeResponse, AWSError>;
  /**
   * Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see Deleting a Search Domain in the Amazon CloudSearch Developer Guide. 
   */
  deleteDomain(params: CloudSearch.Types.DeleteDomainRequest, callback?: (err: AWSError, data: CloudSearch.Types.DeleteDomainResponse) => void): Request<CloudSearch.Types.DeleteDomainResponse, AWSError>;
  /**
   * Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see Deleting a Search Domain in the Amazon CloudSearch Developer Guide. 
   */
  deleteDomain(callback?: (err: AWSError, data: CloudSearch.Types.DeleteDomainResponse) => void): Request<CloudSearch.Types.DeleteDomainResponse, AWSError>;
  /**
   * Removes an Expression from the search domain. For more information, see Configuring Expressions in the Amazon CloudSearch Developer Guide.
   */
  deleteExpression(params: CloudSearch.Types.DeleteExpressionRequest, callback?: (err: AWSError, data: CloudSearch.Types.DeleteExpressionResponse) => void): Request<CloudSearch.Types.DeleteExpressionResponse, AWSError>;
  /**
   * Removes an Expression from the search domain. For more information, see Configuring Expressions in the Amazon CloudSearch Developer Guide.
   */
  deleteExpression(callback?: (err: AWSError, data: CloudSearch.Types.DeleteExpressionResponse) => void): Request<CloudSearch.Types.DeleteExpressionResponse, AWSError>;
  /**
   * Removes an IndexField from the search domain. For more information, see Configuring Index Fields in the Amazon CloudSearch Developer Guide.
   */
  deleteIndexField(params: CloudSearch.Types.DeleteIndexFieldRequest, callback?: (err: AWSError, data: CloudSearch.Types.DeleteIndexFieldResponse) => void): Request<CloudSearch.Types.DeleteIndexFieldResponse, AWSError>;
  /**
   * Removes an IndexField from the search domain. For more information, see Configuring Index Fields in the Amazon CloudSearch Developer Guide.
   */
  deleteIndexField(callback?: (err: AWSError, data: CloudSearch.Types.DeleteIndexFieldResponse) => void): Request<CloudSearch.Types.DeleteIndexFieldResponse, AWSError>;
  /**
   * Deletes a suggester. For more information, see Getting Search Suggestions in the Amazon CloudSearch Developer Guide.
   */
  deleteSuggester(params: CloudSearch.Types.DeleteSuggesterRequest, callback?: (err: AWSError, data: CloudSearch.Types.DeleteSuggesterResponse) => void): Request<CloudSearch.Types.DeleteSuggesterResponse, AWSError>;
  /**
   * Deletes a suggester. For more information, see Getting Search Suggestions in the Amazon CloudSearch Developer Guide.
   */
  deleteSuggester(callback?: (err: AWSError, data: CloudSearch.Types.DeleteSuggesterResponse) => void): Request<CloudSearch.Types.DeleteSuggesterResponse, AWSError>;
  /**
   * Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a text field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Analysis Schemes in the Amazon CloudSearch Developer Guide.
   */
  describeAnalysisSchemes(params: CloudSearch.Types.DescribeAnalysisSchemesRequest, callback?: (err: AWSError, data: CloudSearch.Types.DescribeAnalysisSchemesResponse) => void): Request<CloudSearch.Types.DescribeAnalysisSchemesResponse, AWSError>;
  /**
   * Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a text field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Analysis Schemes in the Amazon CloudSearch Developer Guide.
   */
  describeAnalysisSchemes(callback?: (err: AWSError, data: CloudSearch.Types.DescribeAnalysisSchemesResponse) => void): Request<CloudSearch.Types.DescribeAnalysisSchemesResponse, AWSError>;
  /**
   * Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Availability Options in the Amazon CloudSearch Developer Guide.
   */
  describeAvailabilityOptions(params: CloudSearch.Types.DescribeAvailabilityOptionsRequest, callback?: (err: AWSError, data: CloudSearch.Types.DescribeAvailabilityOptionsResponse) => void): Request<CloudSearch.Types.DescribeAvailabilityOptionsResponse, AWSError>;
  /**
   * Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Availability Options in the Amazon CloudSearch Developer Guide.
   */
  describeAvailabilityOptions(callback?: (err: AWSError, data: CloudSearch.Types.DescribeAvailabilityOptionsResponse) => void): Request<CloudSearch.Types.DescribeAvailabilityOptionsResponse, AWSError>;
  /**
   * Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a matchall request to your domain's search endpoint: q=matchall&amp;amp;q.parser=structured&amp;amp;size=0. For more information, see Getting Information about a Search Domain in the Amazon CloudSearch Developer Guide.
   */
  describeDomains(params: CloudSearch.Types.DescribeDomainsRequest, callback?: (err: AWSError, data: CloudSearch.Types.DescribeDomainsResponse) => void): Request<CloudSearch.Types.DescribeDomainsResponse, AWSError>;
  /**
   * Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a matchall request to your domain's search endpoint: q=matchall&amp;amp;q.parser=structured&amp;amp;size=0. For more information, see Getting Information about a Search Domain in the Amazon CloudSearch Developer Guide.
   */
  describeDomains(callback?: (err: AWSError, data: CloudSearch.Types.DescribeDomainsResponse) => void): Request<CloudSearch.Types.DescribeDomainsResponse, AWSError>;
  /**
   * Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Expressions in the Amazon CloudSearch Developer Guide.
   */
  describeExpressions(params: CloudSearch.Types.DescribeExpressionsRequest, callback?: (err: AWSError, data: CloudSearch.Types.DescribeExpressionsResponse) => void): Request<CloudSearch.Types.DescribeExpressionsResponse, AWSError>;
  /**
   * Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Expressions in the Amazon CloudSearch Developer Guide.
   */
  describeExpressions(callback?: (err: AWSError, data: CloudSearch.Types.DescribeExpressionsResponse) => void): Request<CloudSearch.Types.DescribeExpressionsResponse, AWSError>;
  /**
   * Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Getting Domain Information in the Amazon CloudSearch Developer Guide.
   */
  describeIndexFields(params: CloudSearch.Types.DescribeIndexFieldsRequest, callback?: (err: AWSError, data: CloudSearch.Types.DescribeIndexFieldsResponse) => void): Request<CloudSearch.Types.DescribeIndexFieldsResponse, AWSError>;
  /**
   * Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Getting Domain Information in the Amazon CloudSearch Developer Guide.
   */
  describeIndexFields(callback?: (err: AWSError, data: CloudSearch.Types.DescribeIndexFieldsResponse) => void): Request<CloudSearch.Types.DescribeIndexFieldsResponse, AWSError>;
  /**
   * Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see Configuring Scaling Options in the Amazon CloudSearch Developer Guide.
   */
  describeScalingParameters(params: CloudSearch.Types.DescribeScalingParametersRequest, callback?: (err: AWSError, data: CloudSearch.Types.DescribeScalingParametersResponse) => void): Request<CloudSearch.Types.DescribeScalingParametersResponse, AWSError>;
  /**
   * Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see Configuring Scaling Options in the Amazon CloudSearch Developer Guide.
   */
  describeScalingParameters(callback?: (err: AWSError, data: CloudSearch.Types.DescribeScalingParametersResponse) => void): Request<CloudSearch.Types.DescribeScalingParametersResponse, AWSError>;
  /**
   * Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Access for a Search Domain in the Amazon CloudSearch Developer Guide.
   */
  describeServiceAccessPolicies(params: CloudSearch.Types.DescribeServiceAccessPoliciesRequest, callback?: (err: AWSError, data: CloudSearch.Types.DescribeServiceAccessPoliciesResponse) => void): Request<CloudSearch.Types.DescribeServiceAccessPoliciesResponse, AWSError>;
  /**
   * Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Access for a Search Domain in the Amazon CloudSearch Developer Guide.
   */
  describeServiceAccessPolicies(callback?: (err: AWSError, data: CloudSearch.Types.DescribeServiceAccessPoliciesResponse) => void): Request<CloudSearch.Types.DescribeServiceAccessPoliciesResponse, AWSError>;
  /**
   * Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Getting Search Suggestions in the Amazon CloudSearch Developer Guide.
   */
  describeSuggesters(params: CloudSearch.Types.DescribeSuggestersRequest, callback?: (err: AWSError, data: CloudSearch.Types.DescribeSuggestersResponse) => void): Request<CloudSearch.Types.DescribeSuggestersResponse, AWSError>;
  /**
   * Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Getting Search Suggestions in the Amazon CloudSearch Developer Guide.
   */
  describeSuggesters(callback?: (err: AWSError, data: CloudSearch.Types.DescribeSuggestersResponse) => void): Request<CloudSearch.Types.DescribeSuggestersResponse, AWSError>;
  /**
   * Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose OptionStatus is RequiresIndexDocuments.
   */
  indexDocuments(params: CloudSearch.Types.IndexDocumentsRequest, callback?: (err: AWSError, data: CloudSearch.Types.IndexDocumentsResponse) => void): Request<CloudSearch.Types.IndexDocumentsResponse, AWSError>;
  /**
   * Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose OptionStatus is RequiresIndexDocuments.
   */
  indexDocuments(callback?: (err: AWSError, data: CloudSearch.Types.IndexDocumentsResponse) => void): Request<CloudSearch.Types.IndexDocumentsResponse, AWSError>;
  /**
   * Lists all search domains owned by an account.
   */
  listDomainNames(callback?: (err: AWSError, data: CloudSearch.Types.ListDomainNamesResponse) => void): Request<CloudSearch.Types.ListDomainNamesResponse, AWSError>;
  /**
   * Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see Configuring Availability Options in the Amazon CloudSearch Developer Guide.
   */
  updateAvailabilityOptions(params: CloudSearch.Types.UpdateAvailabilityOptionsRequest, callback?: (err: AWSError, data: CloudSearch.Types.UpdateAvailabilityOptionsResponse) => void): Request<CloudSearch.Types.UpdateAvailabilityOptionsResponse, AWSError>;
  /**
   * Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see Configuring Availability Options in the Amazon CloudSearch Developer Guide.
   */
  updateAvailabilityOptions(callback?: (err: AWSError, data: CloudSearch.Types.UpdateAvailabilityOptionsResponse) => void): Request<CloudSearch.Types.UpdateAvailabilityOptionsResponse, AWSError>;
  /**
   * Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see Configuring Scaling Options in the Amazon CloudSearch Developer Guide. 
   */
  updateScalingParameters(params: CloudSearch.Types.UpdateScalingParametersRequest, callback?: (err: AWSError, data: CloudSearch.Types.UpdateScalingParametersResponse) => void): Request<CloudSearch.Types.UpdateScalingParametersResponse, AWSError>;
  /**
   * Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see Configuring Scaling Options in the Amazon CloudSearch Developer Guide. 
   */
  updateScalingParameters(callback?: (err: AWSError, data: CloudSearch.Types.UpdateScalingParametersResponse) => void): Request<CloudSearch.Types.UpdateScalingParametersResponse, AWSError>;
  /**
   * Configures the access rules that control access to the domain's document and search endpoints. For more information, see  Configuring Access for an Amazon CloudSearch Domain.
   */
  updateServiceAccessPolicies(params: CloudSearch.Types.UpdateServiceAccessPoliciesRequest, callback?: (err: AWSError, data: CloudSearch.Types.UpdateServiceAccessPoliciesResponse) => void): Request<CloudSearch.Types.UpdateServiceAccessPoliciesResponse, AWSError>;
  /**
   * Configures the access rules that control access to the domain's document and search endpoints. For more information, see  Configuring Access for an Amazon CloudSearch Domain.
   */
  updateServiceAccessPolicies(callback?: (err: AWSError, data: CloudSearch.Types.UpdateServiceAccessPoliciesResponse) => void): Request<CloudSearch.Types.UpdateServiceAccessPoliciesResponse, AWSError>;
}
declare namespace CloudSearch {
  export type APIVersion = string;
  export type ARN = string;
  export interface AccessPoliciesStatus {
    Options: PolicyDocument;
    Status: OptionStatus;
  }
  export type AlgorithmicStemming = "none"|"minimal"|"light"|"full"|string;
  export interface AnalysisOptions {
    /**
     * A JSON object that defines synonym groups and aliases. A synonym group is an array of arrays, where each sub-array is a group of terms where each term in the group is considered a synonym of every other term in the group. The aliases value is an object that contains a collection of string:value pairs where the string specifies a term and the array of values specifies each of the aliases for that term. An alias is considered a synonym of the specified term, but the term is not considered a synonym of the alias. For more information about specifying synonyms, see Synonyms in the Amazon CloudSearch Developer Guide.
     */
    Synonyms?: String;
    /**
     * A JSON array of terms to ignore during indexing and searching. For example, ["a", "an", "the", "of"]. The stopwords dictionary must explicitly list each word you want to ignore. Wildcards and regular expressions are not supported. 
     */
    Stopwords?: String;
    /**
     * A JSON object that contains a collection of string:value pairs that each map a term to its stem. For example, {"term1": "stem1", "term2": "stem2", "term3": "stem3"}. The stemming dictionary is applied in addition to any algorithmic stemming. This enables you to override the results of the algorithmic stemming to correct specific cases of overstemming or understemming. The maximum size of a stemming dictionary is 500 KB.
     */
    StemmingDictionary?: String;
    /**
     * A JSON array that contains a collection of terms, tokens, readings and part of speech for Japanese Tokenizaiton. The Japanese tokenization dictionary enables you to override the default tokenization for selected terms. This is only valid for Japanese language fields.
     */
    JapaneseTokenizationDictionary?: String;
    /**
     * The level of algorithmic stemming to perform: none, minimal, light, or full. The available levels vary depending on the language. For more information, see Language Specific Text Processing Settings in the Amazon CloudSearch Developer Guide 
     */
    AlgorithmicStemming?: AlgorithmicStemming;
  }
  export interface AnalysisScheme {
    AnalysisSchemeName: StandardName;
    AnalysisSchemeLanguage: AnalysisSchemeLanguage;
    AnalysisOptions?: AnalysisOptions;
  }
  export type AnalysisSchemeLanguage = "ar"|"bg"|"ca"|"cs"|"da"|"de"|"el"|"en"|"es"|"eu"|"fa"|"fi"|"fr"|"ga"|"gl"|"he"|"hi"|"hu"|"hy"|"id"|"it"|"ja"|"ko"|"lv"|"mul"|"nl"|"no"|"pt"|"ro"|"ru"|"sv"|"th"|"tr"|"zh-Hans"|"zh-Hant"|string;
  export interface AnalysisSchemeStatus {
    Options: AnalysisScheme;
    Status: OptionStatus;
  }
  export type AnalysisSchemeStatusList = AnalysisSchemeStatus[];
  export interface AvailabilityOptionsStatus {
    /**
     * The availability options configured for the domain.
     */
    Options: MultiAZ;
    Status: OptionStatus;
  }
  export type Boolean = boolean;
  export interface BuildSuggestersRequest {
    DomainName: DomainName;
  }
  export interface BuildSuggestersResponse {
    FieldNames?: FieldNameList;
  }
  export interface CreateDomainRequest {
    /**
     * A name for the domain you are creating. Allowed characters are a-z (lower-case letters), 0-9, and hyphen (-). Domain names must start with a letter or number and be at least 3 and no more than 28 characters long.
     */
    DomainName: DomainName;
  }
  export interface CreateDomainResponse {
    DomainStatus?: DomainStatus;
  }
  export interface DateArrayOptions {
    /**
     * A value to use for the field if the field isn't specified for a document.
     */
    DefaultValue?: FieldValue;
    /**
     * A list of source fields to map to the field. 
     */
    SourceFields?: FieldNameCommaList;
    /**
     * Whether facet information can be returned for the field.
     */
    FacetEnabled?: Boolean;
    /**
     * Whether the contents of the field are searchable.
     */
    SearchEnabled?: Boolean;
    /**
     * Whether the contents of the field can be returned in the search results.
     */
    ReturnEnabled?: Boolean;
  }
  export interface DateOptions {
    /**
     * A value to use for the field if the field isn't specified for a document.
     */
    DefaultValue?: FieldValue;
    SourceField?: FieldName;
    /**
     * Whether facet information can be returned for the field.
     */
    FacetEnabled?: Boolean;
    /**
     * Whether the contents of the field are searchable.
     */
    SearchEnabled?: Boolean;
    /**
     * Whether the contents of the field can be returned in the search results.
     */
    ReturnEnabled?: Boolean;
    /**
     * Whether the field can be used to sort the search results.
     */
    SortEnabled?: Boolean;
  }
  export interface DefineAnalysisSchemeRequest {
    DomainName: DomainName;
    AnalysisScheme: AnalysisScheme;
  }
  export interface DefineAnalysisSchemeResponse {
    AnalysisScheme: AnalysisSchemeStatus;
  }
  export interface DefineExpressionRequest {
    DomainName: DomainName;
    Expression: Expression;
  }
  export interface DefineExpressionResponse {
    Expression: ExpressionStatus;
  }
  export interface DefineIndexFieldRequest {
    DomainName: DomainName;
    /**
     * The index field and field options you want to configure. 
     */
    IndexField: IndexField;
  }
  export interface DefineIndexFieldResponse {
    IndexField: IndexFieldStatus;
  }
  export interface DefineSuggesterRequest {
    DomainName: DomainName;
    Suggester: Suggester;
  }
  export interface DefineSuggesterResponse {
    Suggester: SuggesterStatus;
  }
  export interface DeleteAnalysisSchemeRequest {
    DomainName: DomainName;
    /**
     * The name of the analysis scheme you want to delete.
     */
    AnalysisSchemeName: StandardName;
  }
  export interface DeleteAnalysisSchemeResponse {
    /**
     * The status of the analysis scheme being deleted.
     */
    AnalysisScheme: AnalysisSchemeStatus;
  }
  export interface DeleteDomainRequest {
    /**
     * The name of the domain you want to permanently delete.
     */
    DomainName: DomainName;
  }
  export interface DeleteDomainResponse {
    DomainStatus?: DomainStatus;
  }
  export interface DeleteExpressionRequest {
    DomainName: DomainName;
    /**
     * The name of the Expression to delete.
     */
    ExpressionName: StandardName;
  }
  export interface DeleteExpressionResponse {
    /**
     * The status of the expression being deleted.
     */
    Expression: ExpressionStatus;
  }
  export interface DeleteIndexFieldRequest {
    DomainName: DomainName;
    /**
     * The name of the index field your want to remove from the domain's indexing options.
     */
    IndexFieldName: DynamicFieldName;
  }
  export interface DeleteIndexFieldResponse {
    /**
     * The status of the index field being deleted.
     */
    IndexField: IndexFieldStatus;
  }
  export interface DeleteSuggesterRequest {
    DomainName: DomainName;
    /**
     * Specifies the name of the suggester you want to delete.
     */
    SuggesterName: StandardName;
  }
  export interface DeleteSuggesterResponse {
    /**
     * The status of the suggester being deleted.
     */
    Suggester: SuggesterStatus;
  }
  export interface DescribeAnalysisSchemesRequest {
    /**
     * The name of the domain you want to describe.
     */
    DomainName: DomainName;
    /**
     * The analysis schemes you want to describe.
     */
    AnalysisSchemeNames?: StandardNameList;
    /**
     * Whether to display the deployed configuration (true) or include any pending changes (false). Defaults to false.
     */
    Deployed?: Boolean;
  }
  export interface DescribeAnalysisSchemesResponse {
    /**
     * The analysis scheme descriptions.
     */
    AnalysisSchemes: AnalysisSchemeStatusList;
  }
  export interface DescribeAvailabilityOptionsRequest {
    /**
     * The name of the domain you want to describe.
     */
    DomainName: DomainName;
    /**
     * Whether to display the deployed configuration (true) or include any pending changes (false). Defaults to false.
     */
    Deployed?: Boolean;
  }
  export interface DescribeAvailabilityOptionsResponse {
    /**
     * The availability options configured for the domain. Indicates whether Multi-AZ is enabled for the domain. 
     */
    AvailabilityOptions?: AvailabilityOptionsStatus;
  }
  export interface DescribeDomainsRequest {
    /**
     * The names of the domains you want to include in the response.
     */
    DomainNames?: DomainNameList;
  }
  export interface DescribeDomainsResponse {
    DomainStatusList: DomainStatusList;
  }
  export interface DescribeExpressionsRequest {
    /**
     * The name of the domain you want to describe.
     */
    DomainName: DomainName;
    /**
     * Limits the DescribeExpressions response to the specified expressions. If not specified, all expressions are shown.
     */
    ExpressionNames?: StandardNameList;
    /**
     * Whether to display the deployed configuration (true) or include any pending changes (false). Defaults to false.
     */
    Deployed?: Boolean;
  }
  export interface DescribeExpressionsResponse {
    /**
     * The expressions configured for the domain.
     */
    Expressions: ExpressionStatusList;
  }
  export interface DescribeIndexFieldsRequest {
    /**
     * The name of the domain you want to describe.
     */
    DomainName: DomainName;
    /**
     * A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.
     */
    FieldNames?: DynamicFieldNameList;
    /**
     * Whether to display the deployed configuration (true) or include any pending changes (false). Defaults to false.
     */
    Deployed?: Boolean;
  }
  export interface DescribeIndexFieldsResponse {
    /**
     * The index fields configured for the domain.
     */
    IndexFields: IndexFieldStatusList;
  }
  export interface DescribeScalingParametersRequest {
    DomainName: DomainName;
  }
  export interface DescribeScalingParametersResponse {
    ScalingParameters: ScalingParametersStatus;
  }
  export interface DescribeServiceAccessPoliciesRequest {
    /**
     * The name of the domain you want to describe.
     */
    DomainName: DomainName;
    /**
     * Whether to display the deployed configuration (true) or include any pending changes (false). Defaults to false.
     */
    Deployed?: Boolean;
  }
  export interface DescribeServiceAccessPoliciesResponse {
    /**
     * The access rules configured for the domain specified in the request.
     */
    AccessPolicies: AccessPoliciesStatus;
  }
  export interface DescribeSuggestersRequest {
    /**
     * The name of the domain you want to describe.
     */
    DomainName: DomainName;
    /**
     * The suggesters you want to describe.
     */
    SuggesterNames?: StandardNameList;
    /**
     * Whether to display the deployed configuration (true) or include any pending changes (false). Defaults to false.
     */
    Deployed?: Boolean;
  }
  export interface DescribeSuggestersResponse {
    /**
     * The suggesters configured for the domain specified in the request.
     */
    Suggesters: SuggesterStatusList;
  }
  export interface DocumentSuggesterOptions {
    /**
     * The name of the index field you want to use for suggestions. 
     */
    SourceField: FieldName;
    /**
     * The level of fuzziness allowed when suggesting matches for a string: none, low, or high. With none, the specified string is treated as an exact prefix. With low, suggestions must differ from the specified string by no more than one character. With high, suggestions can differ by up to two characters. The default is none. 
     */
    FuzzyMatching?: SuggesterFuzzyMatching;
    /**
     * An expression that computes a score for each suggestion to control how they are sorted. The scores are rounded to the nearest integer, with a floor of 0 and a ceiling of 2^31-1. A document's relevance score is not computed for suggestions, so sort expressions cannot reference the _score value. To sort suggestions using a numeric field or existing expression, simply specify the name of the field or expression. If no expression is configured for the suggester, the suggestions are sorted with the closest matches listed first.
     */
    SortExpression?: String;
  }
  export type DomainId = string;
  export type DomainName = string;
  export type DomainNameList = DomainName[];
  export type DomainNameMap = {[key: string]: APIVersion};
  export interface DomainStatus {
    DomainId: DomainId;
    DomainName: DomainName;
    ARN?: ARN;
    /**
     * True if the search domain is created. It can take several minutes to initialize a domain when CreateDomain is called. Newly created search domains are returned from DescribeDomains with a false value for Created until domain creation is complete.
     */
    Created?: Boolean;
    /**
     * True if the search domain has been deleted. The system must clean up resources dedicated to the search domain when DeleteDomain is called. Newly deleted search domains are returned from DescribeDomains with a true value for IsDeleted for several minutes until resource cleanup is complete.
     */
    Deleted?: Boolean;
    /**
     * The service endpoint for updating documents in a search domain.
     */
    DocService?: ServiceEndpoint;
    /**
     * The service endpoint for requesting search results from a search domain.
     */
    SearchService?: ServiceEndpoint;
    /**
     * True if IndexDocuments needs to be called to activate the current domain configuration.
     */
    RequiresIndexDocuments: Boolean;
    /**
     * True if processing is being done to activate the current domain configuration.
     */
    Processing?: Boolean;
    /**
     * The instance type that is being used to process search requests.
     */
    SearchInstanceType?: SearchInstanceType;
    /**
     * The number of partitions across which the search index is spread.
     */
    SearchPartitionCount?: PartitionCount;
    /**
     * The number of search instances that are available to process search requests.
     */
    SearchInstanceCount?: InstanceCount;
    Limits?: Limits;
  }
  export type DomainStatusList = DomainStatus[];
  export type Double = number;
  export interface DoubleArrayOptions {
    /**
     * A value to use for the field if the field isn't specified for a document.
     */
    DefaultValue?: Double;
    /**
     * A list of source fields to map to the field. 
     */
    SourceFields?: FieldNameCommaList;
    /**
     * Whether facet information can be returned for the field.
     */
    FacetEnabled?: Boolean;
    /**
     * Whether the contents of the field are searchable.
     */
    SearchEnabled?: Boolean;
    /**
     * Whether the contents of the field can be returned in the search results.
     */
    ReturnEnabled?: Boolean;
  }
  export interface DoubleOptions {
    /**
     * A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.
     */
    DefaultValue?: Double;
    /**
     * The name of the source field to map to the field. 
     */
    SourceField?: FieldName;
    /**
     * Whether facet information can be returned for the field.
     */
    FacetEnabled?: Boolean;
    /**
     * Whether the contents of the field are searchable.
     */
    SearchEnabled?: Boolean;
    /**
     * Whether the contents of the field can be returned in the search results.
     */
    ReturnEnabled?: Boolean;
    /**
     * Whether the field can be used to sort the search results.
     */
    SortEnabled?: Boolean;
  }
  export type DynamicFieldName = string;
  export type DynamicFieldNameList = DynamicFieldName[];
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export interface Expression {
    ExpressionName: StandardName;
    ExpressionValue: ExpressionValue;
  }
  export interface ExpressionStatus {
    /**
     * The expression that is evaluated for sorting while processing a search request.
     */
    Options: Expression;
    Status: OptionStatus;
  }
  export type ExpressionStatusList = ExpressionStatus[];
  export type ExpressionValue = string;
  export type FieldName = string;
  export type FieldNameCommaList = string;
  export type FieldNameList = FieldName[];
  export type FieldValue = string;
  export interface IndexDocumentsRequest {
    DomainName: DomainName;
  }
  export interface IndexDocumentsResponse {
    /**
     * The names of the fields that are currently being indexed.
     */
    FieldNames?: FieldNameList;
  }
  export interface IndexField {
    /**
     * A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options.  Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported.  The name score is reserved and cannot be used as a field name. To reference a document's ID, you can use the name _id. 
     */
    IndexFieldName: DynamicFieldName;
    IndexFieldType: IndexFieldType;
    IntOptions?: IntOptions;
    DoubleOptions?: DoubleOptions;
    LiteralOptions?: LiteralOptions;
    TextOptions?: TextOptions;
    DateOptions?: DateOptions;
    LatLonOptions?: LatLonOptions;
    IntArrayOptions?: IntArrayOptions;
    DoubleArrayOptions?: DoubleArrayOptions;
    LiteralArrayOptions?: LiteralArrayOptions;
    TextArrayOptions?: TextArrayOptions;
    DateArrayOptions?: DateArrayOptions;
  }
  export interface IndexFieldStatus {
    Options: IndexField;
    Status: OptionStatus;
  }
  export type IndexFieldStatusList = IndexFieldStatus[];
  export type IndexFieldType = "int"|"double"|"literal"|"text"|"date"|"latlon"|"int-array"|"double-array"|"literal-array"|"text-array"|"date-array"|string;
  export type InstanceCount = number;
  export interface IntArrayOptions {
    /**
     * A value to use for the field if the field isn't specified for a document.
     */
    DefaultValue?: Long;
    /**
     * A list of source fields to map to the field. 
     */
    SourceFields?: FieldNameCommaList;
    /**
     * Whether facet information can be returned for the field.
     */
    FacetEnabled?: Boolean;
    /**
     * Whether the contents of the field are searchable.
     */
    SearchEnabled?: Boolean;
    /**
     * Whether the contents of the field can be returned in the search results.
     */
    ReturnEnabled?: Boolean;
  }
  export interface IntOptions {
    /**
     * A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.
     */
    DefaultValue?: Long;
    /**
     * The name of the source field to map to the field. 
     */
    SourceField?: FieldName;
    /**
     * Whether facet information can be returned for the field.
     */
    FacetEnabled?: Boolean;
    /**
     * Whether the contents of the field are searchable.
     */
    SearchEnabled?: Boolean;
    /**
     * Whether the contents of the field can be returned in the search results.
     */
    ReturnEnabled?: Boolean;
    /**
     * Whether the field can be used to sort the search results.
     */
    SortEnabled?: Boolean;
  }
  export interface LatLonOptions {
    /**
     * A value to use for the field if the field isn't specified for a document.
     */
    DefaultValue?: FieldValue;
    SourceField?: FieldName;
    /**
     * Whether facet information can be returned for the field.
     */
    FacetEnabled?: Boolean;
    /**
     * Whether the contents of the field are searchable.
     */
    SearchEnabled?: Boolean;
    /**
     * Whether the contents of the field can be returned in the search results.
     */
    ReturnEnabled?: Boolean;
    /**
     * Whether the field can be used to sort the search results.
     */
    SortEnabled?: Boolean;
  }
  export interface Limits {
    MaximumReplicationCount: MaximumReplicationCount;
    MaximumPartitionCount: MaximumPartitionCount;
  }
  export interface ListDomainNamesResponse {
    /**
     * The names of the search domains owned by an account.
     */
    DomainNames?: DomainNameMap;
  }
  export interface LiteralArrayOptions {
    /**
     * A value to use for the field if the field isn't specified for a document.
     */
    DefaultValue?: FieldValue;
    /**
     * A list of source fields to map to the field. 
     */
    SourceFields?: FieldNameCommaList;
    /**
     * Whether facet information can be returned for the field.
     */
    FacetEnabled?: Boolean;
    /**
     * Whether the contents of the field are searchable.
     */
    SearchEnabled?: Boolean;
    /**
     * Whether the contents of the field can be returned in the search results.
     */
    ReturnEnabled?: Boolean;
  }
  export interface LiteralOptions {
    /**
     * A value to use for the field if the field isn't specified for a document.
     */
    DefaultValue?: FieldValue;
    SourceField?: FieldName;
    /**
     * Whether facet information can be returned for the field.
     */
    FacetEnabled?: Boolean;
    /**
     * Whether the contents of the field are searchable.
     */
    SearchEnabled?: Boolean;
    /**
     * Whether the contents of the field can be returned in the search results.
     */
    ReturnEnabled?: Boolean;
    /**
     * Whether the field can be used to sort the search results.
     */
    SortEnabled?: Boolean;
  }
  export type Long = number;
  export type MaximumPartitionCount = number;
  export type MaximumReplicationCount = number;
  export type MultiAZ = boolean;
  export type OptionState = "RequiresIndexDocuments"|"Processing"|"Active"|"FailedToValidate"|string;
  export interface OptionStatus {
    /**
     * A timestamp for when this option was created.
     */
    CreationDate: UpdateTimestamp;
    /**
     * A timestamp for when this option was last updated.
     */
    UpdateDate: UpdateTimestamp;
    /**
     * A unique integer that indicates when this option was last updated.
     */
    UpdateVersion?: UIntValue;
    /**
     * The state of processing a change to an option. Possible values:   RequiresIndexDocuments: the option's latest value will not be deployed until IndexDocuments has been called and indexing is complete.  Processing: the option's latest value is in the process of being activated.   Active: the option's latest value is completely deployed.  FailedToValidate: the option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents. 
     */
    State: OptionState;
    /**
     * Indicates that the option will be deleted once processing is complete.
     */
    PendingDeletion?: Boolean;
  }
  export type PartitionCount = number;
  export type PartitionInstanceType = "search.m1.small"|"search.m1.large"|"search.m2.xlarge"|"search.m2.2xlarge"|"search.m3.medium"|"search.m3.large"|"search.m3.xlarge"|"search.m3.2xlarge"|string;
  export type PolicyDocument = string;
  export interface ScalingParameters {
    /**
     * The instance type that you want to preconfigure for your domain. For example, search.m1.small.
     */
    DesiredInstanceType?: PartitionInstanceType;
    /**
     * The number of replicas you want to preconfigure for each index partition.
     */
    DesiredReplicationCount?: UIntValue;
    /**
     * The number of partitions you want to preconfigure for your domain. Only valid when you select m2.2xlarge as the desired instance type.
     */
    DesiredPartitionCount?: UIntValue;
  }
  export interface ScalingParametersStatus {
    Options: ScalingParameters;
    Status: OptionStatus;
  }
  export type SearchInstanceType = string;
  export interface ServiceEndpoint {
    Endpoint?: ServiceUrl;
  }
  export type ServiceUrl = string;
  export type StandardName = string;
  export type StandardNameList = StandardName[];
  export type String = string;
  export interface Suggester {
    SuggesterName: StandardName;
    DocumentSuggesterOptions: DocumentSuggesterOptions;
  }
  export type SuggesterFuzzyMatching = "none"|"low"|"high"|string;
  export interface SuggesterStatus {
    Options: Suggester;
    Status: OptionStatus;
  }
  export type SuggesterStatusList = SuggesterStatus[];
  export interface TextArrayOptions {
    /**
     * A value to use for the field if the field isn't specified for a document.
     */
    DefaultValue?: FieldValue;
    /**
     * A list of source fields to map to the field. 
     */
    SourceFields?: FieldNameCommaList;
    /**
     * Whether the contents of the field can be returned in the search results.
     */
    ReturnEnabled?: Boolean;
    /**
     * Whether highlights can be returned for the field.
     */
    HighlightEnabled?: Boolean;
    /**
     * The name of an analysis scheme for a text-array field.
     */
    AnalysisScheme?: Word;
  }
  export interface TextOptions {
    /**
     * A value to use for the field if the field isn't specified for a document.
     */
    DefaultValue?: FieldValue;
    SourceField?: FieldName;
    /**
     * Whether the contents of the field can be returned in the search results.
     */
    ReturnEnabled?: Boolean;
    /**
     * Whether the field can be used to sort the search results.
     */
    SortEnabled?: Boolean;
    /**
     * Whether highlights can be returned for the field.
     */
    HighlightEnabled?: Boolean;
    /**
     * The name of an analysis scheme for a text field.
     */
    AnalysisScheme?: Word;
  }
  export type UIntValue = number;
  export interface UpdateAvailabilityOptionsRequest {
    DomainName: DomainName;
    /**
     * You expand an existing search domain to a second Availability Zone by setting the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to downgrade the domain to a single Availability Zone by setting the Multi-AZ option to false. 
     */
    MultiAZ: Boolean;
  }
  export interface UpdateAvailabilityOptionsResponse {
    /**
     * The newly-configured availability options. Indicates whether Multi-AZ is enabled for the domain. 
     */
    AvailabilityOptions?: AvailabilityOptionsStatus;
  }
  export interface UpdateScalingParametersRequest {
    DomainName: DomainName;
    ScalingParameters: ScalingParameters;
  }
  export interface UpdateScalingParametersResponse {
    ScalingParameters: ScalingParametersStatus;
  }
  export interface UpdateServiceAccessPoliciesRequest {
    DomainName: DomainName;
    /**
     * The access rules you want to configure. These rules replace any existing rules. 
     */
    AccessPolicies: PolicyDocument;
  }
  export interface UpdateServiceAccessPoliciesResponse {
    /**
     * The access rules configured for the domain.
     */
    AccessPolicies: AccessPoliciesStatus;
  }
  export type UpdateTimestamp = Date;
  export type Word = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2011-02-01"|"2013-01-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CloudSearch client.
   */
  export import Types = CloudSearch;
}
export = CloudSearch;
