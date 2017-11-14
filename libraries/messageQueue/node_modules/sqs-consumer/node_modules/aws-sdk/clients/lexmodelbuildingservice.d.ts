import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class LexModelBuildingService extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: LexModelBuildingService.Types.ClientConfiguration)
  config: Config & LexModelBuildingService.Types.ClientConfiguration;
  /**
   * Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version.  You can update only the $LATEST version of the bot. You can't update the numbered versions that you create with the CreateBotVersion operation.   When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro.   This operation requires permission for the lex:CreateBotVersion action. 
   */
  createBotVersion(params: LexModelBuildingService.Types.CreateBotVersionRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.CreateBotVersionResponse) => void): Request<LexModelBuildingService.Types.CreateBotVersionResponse, AWSError>;
  /**
   * Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version.  You can update only the $LATEST version of the bot. You can't update the numbered versions that you create with the CreateBotVersion operation.   When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro.   This operation requires permission for the lex:CreateBotVersion action. 
   */
  createBotVersion(callback?: (err: AWSError, data: LexModelBuildingService.Types.CreateBotVersionResponse) => void): Request<LexModelBuildingService.Types.CreateBotVersionResponse, AWSError>;
  /**
   * Creates a new version of an intent based on the $LATEST version of the intent. If the $LATEST version of this intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last version you created.  You can update only the $LATEST version of the intent. You can't update the numbered versions that you create with the CreateIntentVersion operation.   When you create a version of an intent, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro.  This operation requires permissions to perform the lex:CreateIntentVersion action. 
   */
  createIntentVersion(params: LexModelBuildingService.Types.CreateIntentVersionRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.CreateIntentVersionResponse) => void): Request<LexModelBuildingService.Types.CreateIntentVersionResponse, AWSError>;
  /**
   * Creates a new version of an intent based on the $LATEST version of the intent. If the $LATEST version of this intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last version you created.  You can update only the $LATEST version of the intent. You can't update the numbered versions that you create with the CreateIntentVersion operation.   When you create a version of an intent, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro.  This operation requires permissions to perform the lex:CreateIntentVersion action. 
   */
  createIntentVersion(callback?: (err: AWSError, data: LexModelBuildingService.Types.CreateIntentVersionResponse) => void): Request<LexModelBuildingService.Types.CreateIntentVersionResponse, AWSError>;
  /**
   * Creates a new version of a slot type based on the $LATEST version of the specified slot type. If the $LATEST version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a new version. It returns the last version that you created.   You can update only the $LATEST version of a slot type. You can't update the numbered versions that you create with the CreateSlotTypeVersion operation.  When you create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro.  This operation requires permissions for the lex:CreateSlotTypeVersion action.
   */
  createSlotTypeVersion(params: LexModelBuildingService.Types.CreateSlotTypeVersionRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.CreateSlotTypeVersionResponse) => void): Request<LexModelBuildingService.Types.CreateSlotTypeVersionResponse, AWSError>;
  /**
   * Creates a new version of a slot type based on the $LATEST version of the specified slot type. If the $LATEST version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a new version. It returns the last version that you created.   You can update only the $LATEST version of a slot type. You can't update the numbered versions that you create with the CreateSlotTypeVersion operation.  When you create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro.  This operation requires permissions for the lex:CreateSlotTypeVersion action.
   */
  createSlotTypeVersion(callback?: (err: AWSError, data: LexModelBuildingService.Types.CreateSlotTypeVersionResponse) => void): Request<LexModelBuildingService.Types.CreateSlotTypeVersionResponse, AWSError>;
  /**
   * Deletes all versions of the bot, including the $LATEST version. To delete a specific version of the bot, use the DeleteBotVersion operation. If a bot has an alias, you can't delete it. Instead, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the DeleteBot operation is successful. This operation requires permissions for the lex:DeleteBot action.
   */
  deleteBot(params: LexModelBuildingService.Types.DeleteBotRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes all versions of the bot, including the $LATEST version. To delete a specific version of the bot, use the DeleteBotVersion operation. If a bot has an alias, you can't delete it. Instead, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the DeleteBot operation is successful. This operation requires permissions for the lex:DeleteBot action.
   */
  deleteBot(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an alias for the specified bot.  You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the DeleteBotAlias operation is successful.
   */
  deleteBotAlias(params: LexModelBuildingService.Types.DeleteBotAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an alias for the specified bot.  You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the DeleteBotAlias operation is successful.
   */
  deleteBotAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the association between an Amazon Lex bot and a messaging platform. This operation requires permission for the lex:DeleteBotChannelAssociation action.
   */
  deleteBotChannelAssociation(params: LexModelBuildingService.Types.DeleteBotChannelAssociationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the association between an Amazon Lex bot and a messaging platform. This operation requires permission for the lex:DeleteBotChannelAssociation action.
   */
  deleteBotChannelAssociation(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation.  This operation requires permissions for the lex:DeleteBotVersion action.
   */
  deleteBotVersion(params: LexModelBuildingService.Types.DeleteBotVersionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation.  This operation requires permissions for the lex:DeleteBotVersion action.
   */
  deleteBotVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes all versions of the intent, including the $LATEST version. To delete a specific version of the intent, use the DeleteIntentVersion operation.  You can delete a version of an intent only if it is not referenced. To delete an intent that is referred to in one or more bots (see how-it-works), you must remove those references first.    If you get the ResourceInUseException exception, it provides an example reference that shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it. If you get the same exception when you attempt to delete the intent again, repeat until the intent has no references and the call to DeleteIntent is successful.    This operation requires permission for the lex:DeleteIntent action. 
   */
  deleteIntent(params: LexModelBuildingService.Types.DeleteIntentRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes all versions of the intent, including the $LATEST version. To delete a specific version of the intent, use the DeleteIntentVersion operation.  You can delete a version of an intent only if it is not referenced. To delete an intent that is referred to in one or more bots (see how-it-works), you must remove those references first.    If you get the ResourceInUseException exception, it provides an example reference that shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it. If you get the same exception when you attempt to delete the intent again, repeat until the intent has no references and the call to DeleteIntent is successful.    This operation requires permission for the lex:DeleteIntent action. 
   */
  deleteIntent(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specific version of an intent. To delete all versions of a intent, use the DeleteIntent operation.  This operation requires permissions for the lex:DeleteIntentVersion action.
   */
  deleteIntentVersion(params: LexModelBuildingService.Types.DeleteIntentVersionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specific version of an intent. To delete all versions of a intent, use the DeleteIntent operation.  This operation requires permissions for the lex:DeleteIntentVersion action.
   */
  deleteIntentVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes all versions of the slot type, including the $LATEST version. To delete a specific version of the slot type, use the DeleteSlotTypeVersion operation.  You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first.    If you get the ResourceInUseException exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the DeleteSlotType call is successful.   This operation requires permission for the lex:DeleteSlotType action.
   */
  deleteSlotType(params: LexModelBuildingService.Types.DeleteSlotTypeRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes all versions of the slot type, including the $LATEST version. To delete a specific version of the slot type, use the DeleteSlotTypeVersion operation.  You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first.    If you get the ResourceInUseException exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the DeleteSlotType call is successful.   This operation requires permission for the lex:DeleteSlotType action.
   */
  deleteSlotType(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType operation.  This operation requires permissions for the lex:DeleteSlotTypeVersion action.
   */
  deleteSlotTypeVersion(params: LexModelBuildingService.Types.DeleteSlotTypeVersionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType operation.  This operation requires permissions for the lex:DeleteSlotTypeVersion action.
   */
  deleteSlotTypeVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot unless the childDirected field in the bot is set to true. Utterances are stored for 15 days for use with the GetUtterancesView operation, and then stored indefinately for use in improving the ability of your bot to respond to user input. Use the DeleteStoredUtterances operation to manually delete stored utterances for a specific user. This operation requires permissions for the lex:DeleteUtterances action.
   */
  deleteUtterances(params: LexModelBuildingService.Types.DeleteUtterancesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot unless the childDirected field in the bot is set to true. Utterances are stored for 15 days for use with the GetUtterancesView operation, and then stored indefinately for use in improving the ability of your bot to respond to user input. Use the DeleteStoredUtterances operation to manually delete stored utterances for a specific user. This operation requires permissions for the lex:DeleteUtterances action.
   */
  deleteUtterances(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias.   This operation requires permissions for the lex:GetBot action. 
   */
  getBot(params: LexModelBuildingService.Types.GetBotRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotResponse) => void): Request<LexModelBuildingService.Types.GetBotResponse, AWSError>;
  /**
   * Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias.   This operation requires permissions for the lex:GetBot action. 
   */
  getBot(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotResponse) => void): Request<LexModelBuildingService.Types.GetBotResponse, AWSError>;
  /**
   * Returns information about an Amazon Lex bot alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:GetBotAlias action.
   */
  getBotAlias(params: LexModelBuildingService.Types.GetBotAliasRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotAliasResponse) => void): Request<LexModelBuildingService.Types.GetBotAliasResponse, AWSError>;
  /**
   * Returns information about an Amazon Lex bot alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:GetBotAlias action.
   */
  getBotAlias(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotAliasResponse) => void): Request<LexModelBuildingService.Types.GetBotAliasResponse, AWSError>;
  /**
   * Returns a list of aliases for a specified Amazon Lex bot. This operation requires permissions for the lex:GetBotAliases action.
   */
  getBotAliases(params: LexModelBuildingService.Types.GetBotAliasesRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotAliasesResponse) => void): Request<LexModelBuildingService.Types.GetBotAliasesResponse, AWSError>;
  /**
   * Returns a list of aliases for a specified Amazon Lex bot. This operation requires permissions for the lex:GetBotAliases action.
   */
  getBotAliases(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotAliasesResponse) => void): Request<LexModelBuildingService.Types.GetBotAliasesResponse, AWSError>;
  /**
   * Returns information about the association between an Amazon Lex bot and a messaging platform. This operation requires permissions for the lex:GetBotChannelAssociation action.
   */
  getBotChannelAssociation(params: LexModelBuildingService.Types.GetBotChannelAssociationRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotChannelAssociationResponse) => void): Request<LexModelBuildingService.Types.GetBotChannelAssociationResponse, AWSError>;
  /**
   * Returns information about the association between an Amazon Lex bot and a messaging platform. This operation requires permissions for the lex:GetBotChannelAssociation action.
   */
  getBotChannelAssociation(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotChannelAssociationResponse) => void): Request<LexModelBuildingService.Types.GetBotChannelAssociationResponse, AWSError>;
  /**
   *  Returns a list of all of the channels associated with the specified bot.  The GetBotChannelAssociations operation requires permissions for the lex:GetBotChannelAssociations action.
   */
  getBotChannelAssociations(params: LexModelBuildingService.Types.GetBotChannelAssociationsRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotChannelAssociationsResponse) => void): Request<LexModelBuildingService.Types.GetBotChannelAssociationsResponse, AWSError>;
  /**
   *  Returns a list of all of the channels associated with the specified bot.  The GetBotChannelAssociations operation requires permissions for the lex:GetBotChannelAssociations action.
   */
  getBotChannelAssociations(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotChannelAssociationsResponse) => void): Request<LexModelBuildingService.Types.GetBotChannelAssociationsResponse, AWSError>;
  /**
   * Gets information about all of the versions of a bot. The GetBotVersions operation returns a BotMetadata object for each version of a bot. For example, if a bot has three numbered versions, the GetBotVersions operation returns four BotMetadata objects in the response, one for each numbered version and one for the $LATEST version.  The GetBotVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetBotVersions action.
   */
  getBotVersions(params: LexModelBuildingService.Types.GetBotVersionsRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotVersionsResponse) => void): Request<LexModelBuildingService.Types.GetBotVersionsResponse, AWSError>;
  /**
   * Gets information about all of the versions of a bot. The GetBotVersions operation returns a BotMetadata object for each version of a bot. For example, if a bot has three numbered versions, the GetBotVersions operation returns four BotMetadata objects in the response, one for each numbered version and one for the $LATEST version.  The GetBotVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetBotVersions action.
   */
  getBotVersions(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotVersionsResponse) => void): Request<LexModelBuildingService.Types.GetBotVersionsResponse, AWSError>;
  /**
   * Returns bot information as follows:    If you provide the nameContains field, the response includes information for the $LATEST version of all bots whose name contains the specified string.   If you don't specify the nameContains field, the operation returns information about the $LATEST version of all of your bots.   This operation requires permission for the lex:GetBots action.
   */
  getBots(params: LexModelBuildingService.Types.GetBotsRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotsResponse) => void): Request<LexModelBuildingService.Types.GetBotsResponse, AWSError>;
  /**
   * Returns bot information as follows:    If you provide the nameContains field, the response includes information for the $LATEST version of all bots whose name contains the specified string.   If you don't specify the nameContains field, the operation returns information about the $LATEST version of all of your bots.   This operation requires permission for the lex:GetBots action.
   */
  getBots(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBotsResponse) => void): Request<LexModelBuildingService.Types.GetBotsResponse, AWSError>;
  /**
   * Returns information about a built-in intent. This operation requires permission for the lex:GetBuiltinIntent action.
   */
  getBuiltinIntent(params: LexModelBuildingService.Types.GetBuiltinIntentRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBuiltinIntentResponse) => void): Request<LexModelBuildingService.Types.GetBuiltinIntentResponse, AWSError>;
  /**
   * Returns information about a built-in intent. This operation requires permission for the lex:GetBuiltinIntent action.
   */
  getBuiltinIntent(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBuiltinIntentResponse) => void): Request<LexModelBuildingService.Types.GetBuiltinIntentResponse, AWSError>;
  /**
   * Gets a list of built-in intents that meet the specified criteria. This operation requires permission for the lex:GetBuiltinIntents action.
   */
  getBuiltinIntents(params: LexModelBuildingService.Types.GetBuiltinIntentsRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBuiltinIntentsResponse) => void): Request<LexModelBuildingService.Types.GetBuiltinIntentsResponse, AWSError>;
  /**
   * Gets a list of built-in intents that meet the specified criteria. This operation requires permission for the lex:GetBuiltinIntents action.
   */
  getBuiltinIntents(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBuiltinIntentsResponse) => void): Request<LexModelBuildingService.Types.GetBuiltinIntentsResponse, AWSError>;
  /**
   * Gets a list of built-in slot types that meet the specified criteria. For a list of built-in slot types, see Slot Type Reference in the Alexa Skills Kit. This operation requires permission for the lex:GetBuiltInSlotTypes action.
   */
  getBuiltinSlotTypes(params: LexModelBuildingService.Types.GetBuiltinSlotTypesRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBuiltinSlotTypesResponse) => void): Request<LexModelBuildingService.Types.GetBuiltinSlotTypesResponse, AWSError>;
  /**
   * Gets a list of built-in slot types that meet the specified criteria. For a list of built-in slot types, see Slot Type Reference in the Alexa Skills Kit. This operation requires permission for the lex:GetBuiltInSlotTypes action.
   */
  getBuiltinSlotTypes(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetBuiltinSlotTypesResponse) => void): Request<LexModelBuildingService.Types.GetBuiltinSlotTypesResponse, AWSError>;
  /**
   * Exports the contents of a Amazon Lex resource in a specified format. 
   */
  getExport(params: LexModelBuildingService.Types.GetExportRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetExportResponse) => void): Request<LexModelBuildingService.Types.GetExportResponse, AWSError>;
  /**
   * Exports the contents of a Amazon Lex resource in a specified format. 
   */
  getExport(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetExportResponse) => void): Request<LexModelBuildingService.Types.GetExportResponse, AWSError>;
  /**
   *  Returns information about an intent. In addition to the intent name, you must specify the intent version.   This operation requires permissions to perform the lex:GetIntent action. 
   */
  getIntent(params: LexModelBuildingService.Types.GetIntentRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetIntentResponse) => void): Request<LexModelBuildingService.Types.GetIntentResponse, AWSError>;
  /**
   *  Returns information about an intent. In addition to the intent name, you must specify the intent version.   This operation requires permissions to perform the lex:GetIntent action. 
   */
  getIntent(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetIntentResponse) => void): Request<LexModelBuildingService.Types.GetIntentResponse, AWSError>;
  /**
   * Gets information about all of the versions of an intent. The GetIntentVersions operation returns an IntentMetadata object for each version of an intent. For example, if an intent has three numbered versions, the GetIntentVersions operation returns four IntentMetadata objects in the response, one for each numbered version and one for the $LATEST version.  The GetIntentVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetIntentVersions action.
   */
  getIntentVersions(params: LexModelBuildingService.Types.GetIntentVersionsRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetIntentVersionsResponse) => void): Request<LexModelBuildingService.Types.GetIntentVersionsResponse, AWSError>;
  /**
   * Gets information about all of the versions of an intent. The GetIntentVersions operation returns an IntentMetadata object for each version of an intent. For example, if an intent has three numbered versions, the GetIntentVersions operation returns four IntentMetadata objects in the response, one for each numbered version and one for the $LATEST version.  The GetIntentVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetIntentVersions action.
   */
  getIntentVersions(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetIntentVersionsResponse) => void): Request<LexModelBuildingService.Types.GetIntentVersionsResponse, AWSError>;
  /**
   * Returns intent information as follows:    If you specify the nameContains field, returns the $LATEST version of all intents that contain the specified string.    If you don't specify the nameContains field, returns information about the $LATEST version of all intents.     The operation requires permission for the lex:GetIntents action. 
   */
  getIntents(params: LexModelBuildingService.Types.GetIntentsRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetIntentsResponse) => void): Request<LexModelBuildingService.Types.GetIntentsResponse, AWSError>;
  /**
   * Returns intent information as follows:    If you specify the nameContains field, returns the $LATEST version of all intents that contain the specified string.    If you don't specify the nameContains field, returns information about the $LATEST version of all intents.     The operation requires permission for the lex:GetIntents action. 
   */
  getIntents(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetIntentsResponse) => void): Request<LexModelBuildingService.Types.GetIntentsResponse, AWSError>;
  /**
   * Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must specify the slot type version. This operation requires permissions for the lex:GetSlotType action.
   */
  getSlotType(params: LexModelBuildingService.Types.GetSlotTypeRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetSlotTypeResponse) => void): Request<LexModelBuildingService.Types.GetSlotTypeResponse, AWSError>;
  /**
   * Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must specify the slot type version. This operation requires permissions for the lex:GetSlotType action.
   */
  getSlotType(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetSlotTypeResponse) => void): Request<LexModelBuildingService.Types.GetSlotTypeResponse, AWSError>;
  /**
   * Gets information about all versions of a slot type. The GetSlotTypeVersions operation returns a SlotTypeMetadata object for each version of a slot type. For example, if a slot type has three numbered versions, the GetSlotTypeVersions operation returns four SlotTypeMetadata objects in the response, one for each numbered version and one for the $LATEST version.  The GetSlotTypeVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetSlotTypeVersions action.
   */
  getSlotTypeVersions(params: LexModelBuildingService.Types.GetSlotTypeVersionsRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetSlotTypeVersionsResponse) => void): Request<LexModelBuildingService.Types.GetSlotTypeVersionsResponse, AWSError>;
  /**
   * Gets information about all versions of a slot type. The GetSlotTypeVersions operation returns a SlotTypeMetadata object for each version of a slot type. For example, if a slot type has three numbered versions, the GetSlotTypeVersions operation returns four SlotTypeMetadata objects in the response, one for each numbered version and one for the $LATEST version.  The GetSlotTypeVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetSlotTypeVersions action.
   */
  getSlotTypeVersions(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetSlotTypeVersionsResponse) => void): Request<LexModelBuildingService.Types.GetSlotTypeVersionsResponse, AWSError>;
  /**
   * Returns slot type information as follows:    If you specify the nameContains field, returns the $LATEST version of all slot types that contain the specified string.    If you don't specify the nameContains field, returns information about the $LATEST version of all slot types.     The operation requires permission for the lex:GetSlotTypes action. 
   */
  getSlotTypes(params: LexModelBuildingService.Types.GetSlotTypesRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetSlotTypesResponse) => void): Request<LexModelBuildingService.Types.GetSlotTypesResponse, AWSError>;
  /**
   * Returns slot type information as follows:    If you specify the nameContains field, returns the $LATEST version of all slot types that contain the specified string.    If you don't specify the nameContains field, returns information about the $LATEST version of all slot types.     The operation requires permission for the lex:GetSlotTypes action. 
   */
  getSlotTypes(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetSlotTypesResponse) => void): Request<LexModelBuildingService.Types.GetSlotTypesResponse, AWSError>;
  /**
   * Use the GetUtterancesView operation to get information about the utterances that your users have made to your bot. You can use this list to tune the utterances that your bot responds to. For example, say that you have created a bot to order flowers. After your users have used your bot for a while, use the GetUtterancesView operation to see the requests that they have made and whether they have been successful. You might find that the utterance "I want flowers" is not being recognized. You could add this utterance to the OrderFlowers intent so that your bot recognizes that utterance. After you publish a new version of a bot, you can get information about the old version and the new so that you can compare the performance across the two versions.  Data is available for the last 15 days. You can request information for up to 5 versions in each request. The response contains information about a maximum of 100 utterances for each version. If the bot's childDirected field is set to true, utterances for the bot are not stored and cannot be retrieved with the GetUtterancesView operation. For more information, see PutBot. This operation requires permissions for the lex:GetUtterancesView action.
   */
  getUtterancesView(params: LexModelBuildingService.Types.GetUtterancesViewRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.GetUtterancesViewResponse) => void): Request<LexModelBuildingService.Types.GetUtterancesViewResponse, AWSError>;
  /**
   * Use the GetUtterancesView operation to get information about the utterances that your users have made to your bot. You can use this list to tune the utterances that your bot responds to. For example, say that you have created a bot to order flowers. After your users have used your bot for a while, use the GetUtterancesView operation to see the requests that they have made and whether they have been successful. You might find that the utterance "I want flowers" is not being recognized. You could add this utterance to the OrderFlowers intent so that your bot recognizes that utterance. After you publish a new version of a bot, you can get information about the old version and the new so that you can compare the performance across the two versions.  Data is available for the last 15 days. You can request information for up to 5 versions in each request. The response contains information about a maximum of 100 utterances for each version. If the bot's childDirected field is set to true, utterances for the bot are not stored and cannot be retrieved with the GetUtterancesView operation. For more information, see PutBot. This operation requires permissions for the lex:GetUtterancesView action.
   */
  getUtterancesView(callback?: (err: AWSError, data: LexModelBuildingService.Types.GetUtterancesViewResponse) => void): Request<LexModelBuildingService.Types.GetUtterancesViewResponse, AWSError>;
  /**
   * Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are only required to specify a name. You can use this to add intents later, or to remove intents from an existing bot. When you create a bot with a name only, the bot is created or updated but Amazon Lex returns the  response FAILED. You can build the bot after you add one or more intents. For more information about Amazon Lex bots, see how-it-works.  If you specify the name of an existing bot, the fields in the request replace the existing values in the $LATEST version of the bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the idleTTLInSeconds and privacySettings fields, which are set to their default values. If you don't specify values for required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutBot action. For more information, see auth-and-access-control.
   */
  putBot(params: LexModelBuildingService.Types.PutBotRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.PutBotResponse) => void): Request<LexModelBuildingService.Types.PutBotResponse, AWSError>;
  /**
   * Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are only required to specify a name. You can use this to add intents later, or to remove intents from an existing bot. When you create a bot with a name only, the bot is created or updated but Amazon Lex returns the  response FAILED. You can build the bot after you add one or more intents. For more information about Amazon Lex bots, see how-it-works.  If you specify the name of an existing bot, the fields in the request replace the existing values in the $LATEST version of the bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the idleTTLInSeconds and privacySettings fields, which are set to their default values. If you don't specify values for required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutBot action. For more information, see auth-and-access-control.
   */
  putBot(callback?: (err: AWSError, data: LexModelBuildingService.Types.PutBotResponse) => void): Request<LexModelBuildingService.Types.PutBotResponse, AWSError>;
  /**
   * Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change the version of the bot that the alias points to, replace the alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:PutBotAlias action. 
   */
  putBotAlias(params: LexModelBuildingService.Types.PutBotAliasRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.PutBotAliasResponse) => void): Request<LexModelBuildingService.Types.PutBotAliasResponse, AWSError>;
  /**
   * Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change the version of the bot that the alias points to, replace the alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:PutBotAlias action. 
   */
  putBotAlias(callback?: (err: AWSError, data: LexModelBuildingService.Types.PutBotAliasResponse) => void): Request<LexModelBuildingService.Types.PutBotAliasResponse, AWSError>;
  /**
   * Creates an intent or replaces an existing intent. To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an OrderPizza intent.  To create an intent or replace an existing intent, you must provide the following:   Intent name. For example, OrderPizza.   Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza."   Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza.   How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application.    You can specify other optional information in the request, such as:   A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?"   A conclusion statement to send to the user after the intent has been fulfilled. For example, "I placed your pizza order."   A follow-up prompt that asks the user for additional activity. For example, asking "Do you want to order a drink with your pizza?"   If you specify an existing intent name to update the intent, Amazon Lex replaces the values in the $LATEST version of the slot type with the values in the request. Amazon Lex removes fields that you don't provide in the request. If you don't specify the required fields, Amazon Lex throws an exception. For more information, see how-it-works. This operation requires permissions for the lex:PutIntent action.
   */
  putIntent(params: LexModelBuildingService.Types.PutIntentRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.PutIntentResponse) => void): Request<LexModelBuildingService.Types.PutIntentResponse, AWSError>;
  /**
   * Creates an intent or replaces an existing intent. To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an OrderPizza intent.  To create an intent or replace an existing intent, you must provide the following:   Intent name. For example, OrderPizza.   Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza."   Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza.   How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application.    You can specify other optional information in the request, such as:   A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?"   A conclusion statement to send to the user after the intent has been fulfilled. For example, "I placed your pizza order."   A follow-up prompt that asks the user for additional activity. For example, asking "Do you want to order a drink with your pizza?"   If you specify an existing intent name to update the intent, Amazon Lex replaces the values in the $LATEST version of the slot type with the values in the request. Amazon Lex removes fields that you don't provide in the request. If you don't specify the required fields, Amazon Lex throws an exception. For more information, see how-it-works. This operation requires permissions for the lex:PutIntent action.
   */
  putIntent(callback?: (err: AWSError, data: LexModelBuildingService.Types.PutIntentResponse) => void): Request<LexModelBuildingService.Types.PutIntentResponse, AWSError>;
  /**
   * Creates a custom slot type or replaces an existing custom slot type. To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see how-it-works. If you specify the name of an existing slot type, the fields in the request replace the existing values in the $LATEST version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutSlotType action.
   */
  putSlotType(params: LexModelBuildingService.Types.PutSlotTypeRequest, callback?: (err: AWSError, data: LexModelBuildingService.Types.PutSlotTypeResponse) => void): Request<LexModelBuildingService.Types.PutSlotTypeResponse, AWSError>;
  /**
   * Creates a custom slot type or replaces an existing custom slot type. To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see how-it-works. If you specify the name of an existing slot type, the fields in the request replace the existing values in the $LATEST version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutSlotType action.
   */
  putSlotType(callback?: (err: AWSError, data: LexModelBuildingService.Types.PutSlotTypeResponse) => void): Request<LexModelBuildingService.Types.PutSlotTypeResponse, AWSError>;
}
declare namespace LexModelBuildingService {
  export type AliasName = string;
  export type AliasNameOrListAll = string;
  export type Boolean = boolean;
  export interface BotAliasMetadata {
    /**
     * The name of the bot alias.
     */
    name?: AliasName;
    /**
     * A description of the bot alias.
     */
    description?: Description;
    /**
     * The version of the Amazon Lex bot to which the alias points.
     */
    botVersion?: Version;
    /**
     * The name of the bot to which the alias points.
     */
    botName?: BotName;
    /**
     * The date that the bot alias was updated. When you create a resource, the creation date and last updated date are the same.
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the bot alias was created.
     */
    createdDate?: Timestamp;
    /**
     * Checksum of the bot alias.
     */
    checksum?: String;
  }
  export type BotAliasMetadataList = BotAliasMetadata[];
  export interface BotChannelAssociation {
    /**
     * The name of the association between the bot and the channel. 
     */
    name?: BotChannelName;
    /**
     * A text description of the association you are creating. 
     */
    description?: Description;
    /**
     * An alias pointing to the specific version of the Amazon Lex bot to which this association is being made. 
     */
    botAlias?: AliasName;
    /**
     * The name of the Amazon Lex bot to which this association is being made.   Currently, Amazon Lex supports associations with Facebook and Slack, and Twilio. 
     */
    botName?: BotName;
    /**
     * The date that the association between the Amazon Lex bot and the channel was created. 
     */
    createdDate?: Timestamp;
    /**
     * Specifies the type of association by indicating the type of channel being established between the Amazon Lex bot and the external messaging platform.
     */
    type?: ChannelType;
    /**
     * Provides information necessary to communicate with the messaging platform. 
     */
    botConfiguration?: ChannelConfigurationMap;
  }
  export type BotChannelAssociationList = BotChannelAssociation[];
  export type BotChannelName = string;
  export interface BotMetadata {
    /**
     * The name of the bot. 
     */
    name?: BotName;
    /**
     * A description of the bot.
     */
    description?: Description;
    /**
     * The status of the bot.
     */
    status?: Status;
    /**
     * The date that the bot was updated. When you create a bot, the creation date and last updated date are the same. 
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the bot was created.
     */
    createdDate?: Timestamp;
    /**
     * The version of the bot. For a new bot, the version is always $LATEST.
     */
    version?: Version;
  }
  export type BotMetadataList = BotMetadata[];
  export type BotName = string;
  export type BotVersions = Version[];
  export interface BuiltinIntentMetadata {
    /**
     * A unique identifier for the built-in intent. To find the signature for an intent, see Standard Built-in Intents in the Alexa Skills Kit.
     */
    signature?: BuiltinIntentSignature;
    /**
     * A list of identifiers for the locales that the intent supports.
     */
    supportedLocales?: LocaleList;
  }
  export type BuiltinIntentMetadataList = BuiltinIntentMetadata[];
  export type BuiltinIntentSignature = string;
  export interface BuiltinIntentSlot {
    /**
     * A list of the slots defined for the intent.
     */
    name?: String;
  }
  export type BuiltinIntentSlotList = BuiltinIntentSlot[];
  export interface BuiltinSlotTypeMetadata {
    /**
     * A unique identifier for the built-in slot type. To find the signature for a slot type, see Slot Type Reference in the Alexa Skills Kit.
     */
    signature?: BuiltinSlotTypeSignature;
    /**
     * A list of target locales for the slot. 
     */
    supportedLocales?: LocaleList;
  }
  export type BuiltinSlotTypeMetadataList = BuiltinSlotTypeMetadata[];
  export type BuiltinSlotTypeSignature = string;
  export type ChannelConfigurationMap = {[key: string]: String};
  export type ChannelType = "Facebook"|"Slack"|"Twilio-Sms"|string;
  export interface CodeHook {
    /**
     * The Amazon Resource Name (ARN) of the Lambda function.
     */
    uri: LambdaARN;
    /**
     * The version of the request-response that you want Amazon Lex to use to invoke your Lambda function. For more information, see using-lambda.
     */
    messageVersion: MessageVersion;
  }
  export type ContentString = string;
  export type ContentType = "PlainText"|"SSML"|string;
  export type Count = number;
  export interface CreateBotVersionRequest {
    /**
     * The name of the bot that you want to create a new version of. The name is case sensitive. 
     */
    name: BotName;
    /**
     * Identifies a specific revision of the $LATEST version of the bot. If you specify a checksum and the $LATEST version of the bot has a different checksum, a PreconditionFailedException exception is returned and Amazon Lex doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the $LATEST version.
     */
    checksum?: String;
  }
  export interface CreateBotVersionResponse {
    /**
     * The name of the bot.
     */
    name?: BotName;
    /**
     * A description of the bot.
     */
    description?: Description;
    /**
     * An array of Intent objects. For more information, see PutBot.
     */
    intents?: IntentList;
    /**
     * The message that Amazon Lex uses when it doesn't understand the user's request. For more information, see PutBot. 
     */
    clarificationPrompt?: Prompt;
    /**
     * The message that Amazon Lex uses to abort a conversation. For more information, see PutBot.
     */
    abortStatement?: Statement;
    /**
     *  When you send a request to create or update a bot, Amazon Lex sets the status response element to BUILDING. After Amazon Lex builds the bot, it sets status to READY. If Amazon Lex can't build the bot, it sets status to FAILED. Amazon Lex returns the reason for the failure in the failureReason response element. 
     */
    status?: Status;
    /**
     * If status is FAILED, Amazon Lex provides the reason that it failed to build the bot.
     */
    failureReason?: String;
    /**
     * The date when the $LATEST version of this bot was updated. 
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date when the bot version was created.
     */
    createdDate?: Timestamp;
    /**
     * The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. For more information, see PutBot.
     */
    idleSessionTTLInSeconds?: SessionTTL;
    /**
     * The Amazon Polly voice ID that Amazon Lex uses for voice interactions with the user.
     */
    voiceId?: String;
    /**
     * Checksum identifying the version of the bot that was created.
     */
    checksum?: String;
    /**
     * The version of the bot. 
     */
    version?: Version;
    /**
     *  Specifies the target locale for the bot. 
     */
    locale?: Locale;
    /**
     * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying true or false in the childDirected field. By specifying true in the childDirected field, you confirm that your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying false in the childDirected field, you confirm that your use of Amazon Lex is not related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the childDirected field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the Amazon Lex FAQ. 
     */
    childDirected?: Boolean;
  }
  export interface CreateIntentVersionRequest {
    /**
     * The name of the intent that you want to create a new version of. The name is case sensitive. 
     */
    name: IntentName;
    /**
     * Checksum of the $LATEST version of the intent that should be used to create the new version. If you specify a checksum and the $LATEST version of the intent has a different checksum, Amazon Lex returns a PreconditionFailedException exception and doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the $LATEST version.
     */
    checksum?: String;
  }
  export interface CreateIntentVersionResponse {
    /**
     * The name of the intent.
     */
    name?: IntentName;
    /**
     * A description of the intent.
     */
    description?: Description;
    /**
     * An array of slot types that defines the information required to fulfill the intent.
     */
    slots?: SlotList;
    /**
     * An array of sample utterances configured for the intent. 
     */
    sampleUtterances?: IntentUtteranceList;
    /**
     * If defined, the prompt that Amazon Lex uses to confirm the user's intent before fulfilling it. 
     */
    confirmationPrompt?: Prompt;
    /**
     * If the user answers "no" to the question defined in confirmationPrompt, Amazon Lex responds with this statement to acknowledge that the intent was canceled. 
     */
    rejectionStatement?: Statement;
    /**
     * If defined, Amazon Lex uses this prompt to solicit additional user activity after the intent is fulfilled. 
     */
    followUpPrompt?: FollowUpPrompt;
    /**
     * After the Lambda function specified in the fulfillmentActivity field fulfills the intent, Amazon Lex conveys this statement to the user. 
     */
    conclusionStatement?: Statement;
    /**
     * If defined, Amazon Lex invokes this Lambda function for each user input.
     */
    dialogCodeHook?: CodeHook;
    /**
     *  Describes how the intent is fulfilled. 
     */
    fulfillmentActivity?: FulfillmentActivity;
    /**
     * A unique identifier for a built-in intent.
     */
    parentIntentSignature?: BuiltinIntentSignature;
    /**
     * The date that the intent was updated. 
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the intent was created.
     */
    createdDate?: Timestamp;
    /**
     * The version number assigned to the new version of the intent.
     */
    version?: Version;
    /**
     * Checksum of the intent version created.
     */
    checksum?: String;
  }
  export interface CreateSlotTypeVersionRequest {
    /**
     * The name of the slot type that you want to create a new version for. The name is case sensitive. 
     */
    name: SlotTypeName;
    /**
     * Checksum for the $LATEST version of the slot type that you want to publish. If you specify a checksum and the $LATEST version of the slot type has a different checksum, Amazon Lex returns a PreconditionFailedException exception and doesn't publish the new version. If you don't specify a checksum, Amazon Lex publishes the $LATEST version.
     */
    checksum?: String;
  }
  export interface CreateSlotTypeVersionResponse {
    /**
     * The name of the slot type.
     */
    name?: SlotTypeName;
    /**
     * A description of the slot type.
     */
    description?: Description;
    /**
     * A list of EnumerationValue objects that defines the values that the slot type can take.
     */
    enumerationValues?: EnumerationValues;
    /**
     * The date that the slot type was updated. When you create a resource, the creation date and last update date are the same.
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the slot type was created.
     */
    createdDate?: Timestamp;
    /**
     * The version assigned to the new slot type version. 
     */
    version?: Version;
    /**
     * Checksum of the $LATEST version of the slot type.
     */
    checksum?: String;
    /**
     * The strategy that Amazon Lex uses to determine the value of the slot. For more information, see PutSlotType.
     */
    valueSelectionStrategy?: SlotValueSelectionStrategy;
  }
  export type CustomOrBuiltinSlotTypeName = string;
  export interface DeleteBotAliasRequest {
    /**
     * The name of the alias to delete. The name is case sensitive. 
     */
    name: AliasName;
    /**
     * The name of the bot that the alias points to.
     */
    botName: BotName;
  }
  export interface DeleteBotChannelAssociationRequest {
    /**
     * The name of the association. The name is case sensitive. 
     */
    name: BotChannelName;
    /**
     * The name of the Amazon Lex bot.
     */
    botName: BotName;
    /**
     * An alias that points to the specific version of the Amazon Lex bot to which this association is being made.
     */
    botAlias: AliasName;
  }
  export interface DeleteBotRequest {
    /**
     * The name of the bot. The name is case sensitive. 
     */
    name: BotName;
  }
  export interface DeleteBotVersionRequest {
    /**
     * The name of the bot.
     */
    name: BotName;
    /**
     * The version of the bot to delete. You cannot delete the $LATEST version of the bot. To delete the $LATEST version, use the DeleteBot operation.
     */
    version: NumericalVersion;
  }
  export interface DeleteIntentRequest {
    /**
     * The name of the intent. The name is case sensitive. 
     */
    name: IntentName;
  }
  export interface DeleteIntentVersionRequest {
    /**
     * The name of the intent.
     */
    name: IntentName;
    /**
     * The version of the intent to delete. You cannot delete the $LATEST version of the intent. To delete the $LATEST version, use the DeleteIntent operation.
     */
    version: NumericalVersion;
  }
  export interface DeleteSlotTypeRequest {
    /**
     * The name of the slot type. The name is case sensitive. 
     */
    name: SlotTypeName;
  }
  export interface DeleteSlotTypeVersionRequest {
    /**
     * The name of the slot type.
     */
    name: SlotTypeName;
    /**
     * The version of the slot type to delete. You cannot delete the $LATEST version of the slot type. To delete the $LATEST version, use the DeleteSlotType operation.
     */
    version: NumericalVersion;
  }
  export interface DeleteUtterancesRequest {
    /**
     * The name of the bot that stored the utterances.
     */
    botName: BotName;
    /**
     *  The unique identifier for the user that made the utterances. This is the user ID that was sent in the PostContent or PostText operation request that contained the utterance.
     */
    userId: UserId;
  }
  export type Description = string;
  export interface EnumerationValue {
    /**
     * The value of the slot type.
     */
    value: Value;
    /**
     * Additional values related to the slot type value.
     */
    synonyms?: SynonymList;
  }
  export type EnumerationValues = EnumerationValue[];
  export type ExportStatus = "IN_PROGRESS"|"READY"|"FAILED"|string;
  export type ExportType = "ALEXA_SKILLS_KIT"|string;
  export interface FollowUpPrompt {
    /**
     * Prompts for information from the user. 
     */
    prompt: Prompt;
    /**
     * If the user answers "no" to the question defined in the prompt field, Amazon Lex responds with this statement to acknowledge that the intent was canceled. 
     */
    rejectionStatement: Statement;
  }
  export interface FulfillmentActivity {
    /**
     *  How the intent should be fulfilled, either by running a Lambda function or by returning the slot data to the client application. 
     */
    type: FulfillmentActivityType;
    /**
     *  A description of the Lambda function that is run to fulfill the intent. 
     */
    codeHook?: CodeHook;
  }
  export type FulfillmentActivityType = "ReturnIntent"|"CodeHook"|string;
  export interface GetBotAliasRequest {
    /**
     * The name of the bot alias. The name is case sensitive.
     */
    name: AliasName;
    /**
     * The name of the bot.
     */
    botName: BotName;
  }
  export interface GetBotAliasResponse {
    /**
     * The name of the bot alias.
     */
    name?: AliasName;
    /**
     * A description of the bot alias.
     */
    description?: Description;
    /**
     * The version of the bot that the alias points to.
     */
    botVersion?: Version;
    /**
     * The name of the bot that the alias points to.
     */
    botName?: BotName;
    /**
     * The date that the bot alias was updated. When you create a resource, the creation date and the last updated date are the same.
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the bot alias was created.
     */
    createdDate?: Timestamp;
    /**
     * Checksum of the bot alias.
     */
    checksum?: String;
  }
  export interface GetBotAliasesRequest {
    /**
     * The name of the bot.
     */
    botName: BotName;
    /**
     * A pagination token for fetching the next page of aliases. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of aliases, specify the pagination token in the next request. 
     */
    nextToken?: NextToken;
    /**
     * The maximum number of aliases to return in the response. The default is 50. . 
     */
    maxResults?: MaxResults;
    /**
     * Substring to match in bot alias names. An alias will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
     */
    nameContains?: AliasName;
  }
  export interface GetBotAliasesResponse {
    /**
     * An array of BotAliasMetadata objects, each describing a bot alias.
     */
    BotAliases?: BotAliasMetadataList;
    /**
     * A pagination token for fetching next page of aliases. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of aliases, specify the pagination token in the next request. 
     */
    nextToken?: NextToken;
  }
  export interface GetBotChannelAssociationRequest {
    /**
     * The name of the association between the bot and the channel. The name is case sensitive. 
     */
    name: BotChannelName;
    /**
     * The name of the Amazon Lex bot.
     */
    botName: BotName;
    /**
     * An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.
     */
    botAlias: AliasName;
  }
  export interface GetBotChannelAssociationResponse {
    /**
     * The name of the association between the bot and the channel.
     */
    name?: BotChannelName;
    /**
     * A description of the association between the bot and the channel.
     */
    description?: Description;
    /**
     * An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.
     */
    botAlias?: AliasName;
    /**
     * The name of the Amazon Lex bot.
     */
    botName?: BotName;
    /**
     * The date that the association between the bot and the channel was created.
     */
    createdDate?: Timestamp;
    /**
     * The type of the messaging platform.
     */
    type?: ChannelType;
    /**
     * Provides information that the messaging platform needs to communicate with the Amazon Lex bot.
     */
    botConfiguration?: ChannelConfigurationMap;
  }
  export interface GetBotChannelAssociationsRequest {
    /**
     * The name of the Amazon Lex bot in the association.
     */
    botName: BotName;
    /**
     * An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.
     */
    botAlias: AliasNameOrListAll;
    /**
     * A pagination token for fetching the next page of associations. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of associations, specify the pagination token in the next request. 
     */
    nextToken?: NextToken;
    /**
     * The maximum number of associations to return in the response. The default is 50. 
     */
    maxResults?: MaxResults;
    /**
     * Substring to match in channel association names. An association will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To return all bot channel associations, use a hyphen ("-") as the nameContains parameter.
     */
    nameContains?: BotChannelName;
  }
  export interface GetBotChannelAssociationsResponse {
    /**
     * An array of objects, one for each association, that provides information about the Amazon Lex bot and its association with the channel. 
     */
    botChannelAssociations?: BotChannelAssociationList;
    /**
     * A pagination token that fetches the next page of associations. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of associations, specify the pagination token in the next request. 
     */
    nextToken?: NextToken;
  }
  export interface GetBotRequest {
    /**
     * The name of the bot. The name is case sensitive. 
     */
    name: BotName;
    /**
     * The version or alias of the bot.
     */
    versionOrAlias: String;
  }
  export interface GetBotResponse {
    /**
     * The name of the bot.
     */
    name?: BotName;
    /**
     * A description of the bot.
     */
    description?: Description;
    /**
     * An array of intent objects. For more information, see PutBot.
     */
    intents?: IntentList;
    /**
     * The message Amazon Lex uses when it doesn't understand the user's request. For more information, see PutBot. 
     */
    clarificationPrompt?: Prompt;
    /**
     * The message that Amazon Lex returns when the user elects to end the conversation without completing it. For more information, see PutBot.
     */
    abortStatement?: Statement;
    /**
     * The status of the bot. If the bot is ready to run, the status is READY. If there was a problem with building the bot, the status is FAILED and the failureReason explains why the bot did not build. If the bot was saved but not built, the status is NOT BUILT.
     */
    status?: Status;
    /**
     * If status is FAILED, Amazon Lex explains why it failed to build the bot.
     */
    failureReason?: String;
    /**
     * The date that the bot was updated. When you create a resource, the creation date and last updated date are the same. 
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the bot was created.
     */
    createdDate?: Timestamp;
    /**
     * The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. For more information, see PutBot.
     */
    idleSessionTTLInSeconds?: SessionTTL;
    /**
     * The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. For more information, see PutBot.
     */
    voiceId?: String;
    /**
     * Checksum of the bot used to identify a specific revision of the bot's $LATEST version.
     */
    checksum?: String;
    /**
     * The version of the bot. For a new bot, the version is always $LATEST.
     */
    version?: Version;
    /**
     *  The target locale for the bot. 
     */
    locale?: Locale;
    /**
     * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying true or false in the childDirected field. By specifying true in the childDirected field, you confirm that your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying false in the childDirected field, you confirm that your use of Amazon Lex is not related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the childDirected field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the Amazon Lex FAQ. 
     */
    childDirected?: Boolean;
  }
  export interface GetBotVersionsRequest {
    /**
     * The name of the bot for which versions should be returned.
     */
    name: BotName;
    /**
     * A pagination token for fetching the next page of bot versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. 
     */
    nextToken?: NextToken;
    /**
     * The maximum number of bot versions to return in the response. The default is 10.
     */
    maxResults?: MaxResults;
  }
  export interface GetBotVersionsResponse {
    /**
     * An array of BotMetadata objects, one for each numbered version of the bot plus one for the $LATEST version.
     */
    bots?: BotMetadataList;
    /**
     * A pagination token for fetching the next page of bot versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. 
     */
    nextToken?: NextToken;
  }
  export interface GetBotsRequest {
    /**
     * A pagination token that fetches the next page of bots. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of bots, specify the pagination token in the next request. 
     */
    nextToken?: NextToken;
    /**
     * The maximum number of bots to return in the response that the request will return. The default is 10.
     */
    maxResults?: MaxResults;
    /**
     * Substring to match in bot names. A bot will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
     */
    nameContains?: BotName;
  }
  export interface GetBotsResponse {
    /**
     * An array of botMetadata objects, with one entry for each bot. 
     */
    bots?: BotMetadataList;
    /**
     * If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of bots. 
     */
    nextToken?: NextToken;
  }
  export interface GetBuiltinIntentRequest {
    /**
     * The unique identifier for a built-in intent. To find the signature for an intent, see Standard Built-in Intents in the Alexa Skills Kit.
     */
    signature: BuiltinIntentSignature;
  }
  export interface GetBuiltinIntentResponse {
    /**
     * The unique identifier for a built-in intent.
     */
    signature?: BuiltinIntentSignature;
    /**
     * A list of locales that the intent supports.
     */
    supportedLocales?: LocaleList;
    /**
     * An array of BuiltinIntentSlot objects, one entry for each slot type in the intent.
     */
    slots?: BuiltinIntentSlotList;
  }
  export interface GetBuiltinIntentsRequest {
    /**
     * A list of locales that the intent supports.
     */
    locale?: Locale;
    /**
     * Substring to match in built-in intent signatures. An intent will be returned if any part of its signature matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To find the signature for an intent, see Standard Built-in Intents in the Alexa Skills Kit.
     */
    signatureContains?: String;
    /**
     * A pagination token that fetches the next page of intents. If this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, use the pagination token in the next request.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of intents to return in the response. The default is 10.
     */
    maxResults?: MaxResults;
  }
  export interface GetBuiltinIntentsResponse {
    /**
     * An array of builtinIntentMetadata objects, one for each intent in the response.
     */
    intents?: BuiltinIntentMetadataList;
    /**
     * A pagination token that fetches the next page of intents. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, specify the pagination token in the next request.
     */
    nextToken?: NextToken;
  }
  export interface GetBuiltinSlotTypesRequest {
    /**
     * A list of locales that the slot type supports.
     */
    locale?: Locale;
    /**
     * Substring to match in built-in slot type signatures. A slot type will be returned if any part of its signature matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
     */
    signatureContains?: String;
    /**
     * A pagination token that fetches the next page of slot types. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of slot types, specify the pagination token in the next request.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of slot types to return in the response. The default is 10.
     */
    maxResults?: MaxResults;
  }
  export interface GetBuiltinSlotTypesResponse {
    /**
     * An array of BuiltInSlotTypeMetadata objects, one entry for each slot type returned.
     */
    slotTypes?: BuiltinSlotTypeMetadataList;
    /**
     * If the response is truncated, the response includes a pagination token that you can use in your next request to fetch the next page of slot types.
     */
    nextToken?: NextToken;
  }
  export interface GetExportRequest {
    /**
     * The name of the bot to export.
     */
    name: Name;
    /**
     * The version of the bot to export.
     */
    version: NumericalVersion;
    /**
     * The type of resource to export. 
     */
    resourceType: ResourceType;
    /**
     * The format of the exported data.
     */
    exportType: ExportType;
  }
  export interface GetExportResponse {
    /**
     * The name of the bot being exported.
     */
    name?: Name;
    /**
     * The version of the bot being exported.
     */
    version?: NumericalVersion;
    /**
     * The type of the exported resource.
     */
    resourceType?: ResourceType;
    /**
     * The format of the exported data.
     */
    exportType?: ExportType;
    /**
     * The status of the export.     IN_PROGRESS - The export is in progress.    READY - The export is complete.    FAILED - The export could not be completed.  
     */
    exportStatus?: ExportStatus;
    /**
     * If status is FAILED, Amazon Lex provides the reason that it failed to export the resource.
     */
    failureReason?: String;
    /**
     * An S3 pre-signed URL that provides the location of the exported resource. The exported resource is a ZIP archive that contains the exported resource in JSON format. The structure of the archive may change. Your code should not rely on the archive structure.
     */
    url?: String;
  }
  export interface GetIntentRequest {
    /**
     * The name of the intent. The name is case sensitive. 
     */
    name: IntentName;
    /**
     * The version of the intent.
     */
    version: Version;
  }
  export interface GetIntentResponse {
    /**
     * The name of the intent.
     */
    name?: IntentName;
    /**
     * A description of the intent.
     */
    description?: Description;
    /**
     * An array of intent slots configured for the intent.
     */
    slots?: SlotList;
    /**
     * An array of sample utterances configured for the intent.
     */
    sampleUtterances?: IntentUtteranceList;
    /**
     * If defined in the bot, Amazon Lex uses prompt to confirm the intent before fulfilling the user's request. For more information, see PutIntent. 
     */
    confirmationPrompt?: Prompt;
    /**
     * If the user answers "no" to the question defined in confirmationPrompt, Amazon Lex responds with this statement to acknowledge that the intent was canceled. 
     */
    rejectionStatement?: Statement;
    /**
     * If defined in the bot, Amazon Lex uses this prompt to solicit additional user activity after the intent is fulfilled. For more information, see PutIntent.
     */
    followUpPrompt?: FollowUpPrompt;
    /**
     * After the Lambda function specified in the fulfillmentActivity element fulfills the intent, Amazon Lex conveys this statement to the user.
     */
    conclusionStatement?: Statement;
    /**
     * If defined in the bot, Amazon Amazon Lex invokes this Lambda function for each user input. For more information, see PutIntent. 
     */
    dialogCodeHook?: CodeHook;
    /**
     * Describes how the intent is fulfilled. For more information, see PutIntent. 
     */
    fulfillmentActivity?: FulfillmentActivity;
    /**
     * A unique identifier for a built-in intent.
     */
    parentIntentSignature?: BuiltinIntentSignature;
    /**
     * The date that the intent was updated. When you create a resource, the creation date and the last updated date are the same. 
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the intent was created.
     */
    createdDate?: Timestamp;
    /**
     * The version of the intent.
     */
    version?: Version;
    /**
     * Checksum of the intent.
     */
    checksum?: String;
  }
  export interface GetIntentVersionsRequest {
    /**
     * The name of the intent for which versions should be returned.
     */
    name: IntentName;
    /**
     * A pagination token for fetching the next page of intent versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. 
     */
    nextToken?: NextToken;
    /**
     * The maximum number of intent versions to return in the response. The default is 10.
     */
    maxResults?: MaxResults;
  }
  export interface GetIntentVersionsResponse {
    /**
     * An array of IntentMetadata objects, one for each numbered version of the intent plus one for the $LATEST version.
     */
    intents?: IntentMetadataList;
    /**
     * A pagination token for fetching the next page of intent versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. 
     */
    nextToken?: NextToken;
  }
  export interface GetIntentsRequest {
    /**
     * A pagination token that fetches the next page of intents. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, specify the pagination token in the next request. 
     */
    nextToken?: NextToken;
    /**
     * The maximum number of intents to return in the response. The default is 10.
     */
    maxResults?: MaxResults;
    /**
     * Substring to match in intent names. An intent will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
     */
    nameContains?: IntentName;
  }
  export interface GetIntentsResponse {
    /**
     * An array of Intent objects. For more information, see PutBot.
     */
    intents?: IntentMetadataList;
    /**
     * If the response is truncated, the response includes a pagination token that you can specify in your next request to fetch the next page of intents. 
     */
    nextToken?: NextToken;
  }
  export interface GetSlotTypeRequest {
    /**
     * The name of the slot type. The name is case sensitive. 
     */
    name: SlotTypeName;
    /**
     * The version of the slot type. 
     */
    version: Version;
  }
  export interface GetSlotTypeResponse {
    /**
     * The name of the slot type.
     */
    name?: SlotTypeName;
    /**
     * A description of the slot type.
     */
    description?: Description;
    /**
     * A list of EnumerationValue objects that defines the values that the slot type can take.
     */
    enumerationValues?: EnumerationValues;
    /**
     * The date that the slot type was updated. When you create a resource, the creation date and last update date are the same.
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the slot type was created.
     */
    createdDate?: Timestamp;
    /**
     * The version of the slot type.
     */
    version?: Version;
    /**
     * Checksum of the $LATEST version of the slot type.
     */
    checksum?: String;
    /**
     * The strategy that Amazon Lex uses to determine the value of the slot. For more information, see PutSlotType.
     */
    valueSelectionStrategy?: SlotValueSelectionStrategy;
  }
  export interface GetSlotTypeVersionsRequest {
    /**
     * The name of the slot type for which versions should be returned.
     */
    name: SlotTypeName;
    /**
     * A pagination token for fetching the next page of slot type versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. 
     */
    nextToken?: NextToken;
    /**
     * The maximum number of slot type versions to return in the response. The default is 10.
     */
    maxResults?: MaxResults;
  }
  export interface GetSlotTypeVersionsResponse {
    /**
     * An array of SlotTypeMetadata objects, one for each numbered version of the slot type plus one for the $LATEST version.
     */
    slotTypes?: SlotTypeMetadataList;
    /**
     * A pagination token for fetching the next page of slot type versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. 
     */
    nextToken?: NextToken;
  }
  export interface GetSlotTypesRequest {
    /**
     * A pagination token that fetches the next page of slot types. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch next page of slot types, specify the pagination token in the next request.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of slot types to return in the response. The default is 10.
     */
    maxResults?: MaxResults;
    /**
     * Substring to match in slot type names. A slot type will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
     */
    nameContains?: SlotTypeName;
  }
  export interface GetSlotTypesResponse {
    /**
     * An array of objects, one for each slot type, that provides information such as the name of the slot type, the version, and a description.
     */
    slotTypes?: SlotTypeMetadataList;
    /**
     * If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of slot types.
     */
    nextToken?: NextToken;
  }
  export interface GetUtterancesViewRequest {
    /**
     * The name of the bot for which utterance information should be returned.
     */
    botName: BotName;
    /**
     * An array of bot versions for which utterance information should be returned. The limit is 5 versions per request.
     */
    botVersions: BotVersions;
    /**
     * To return utterances that were recognized and handled, useDetected. To return utterances that were not recognized, use Missed.
     */
    statusType: StatusType;
  }
  export interface GetUtterancesViewResponse {
    /**
     * The name of the bot for which utterance information was returned.
     */
    botName?: BotName;
    /**
     * An array of UtteranceList objects, each containing a list of UtteranceData objects describing the utterances that were processed by your bot. The response contains a maximum of 100 UtteranceData objects for each version.
     */
    utterances?: ListsOfUtterances;
  }
  export interface Intent {
    /**
     * The name of the intent.
     */
    intentName: IntentName;
    /**
     * The version of the intent.
     */
    intentVersion: Version;
  }
  export type IntentList = Intent[];
  export interface IntentMetadata {
    /**
     * The name of the intent.
     */
    name?: IntentName;
    /**
     * A description of the intent.
     */
    description?: Description;
    /**
     * The date that the intent was updated. When you create an intent, the creation date and last updated date are the same.
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the intent was created.
     */
    createdDate?: Timestamp;
    /**
     * The version of the intent.
     */
    version?: Version;
  }
  export type IntentMetadataList = IntentMetadata[];
  export type IntentName = string;
  export type IntentUtteranceList = Utterance[];
  export type LambdaARN = string;
  export type ListOfUtterance = UtteranceData[];
  export type ListsOfUtterances = UtteranceList[];
  export type Locale = "en-US"|string;
  export type LocaleList = Locale[];
  export type MaxResults = number;
  export interface Message {
    /**
     * The content type of the message string.
     */
    contentType: ContentType;
    /**
     * The text of the message.
     */
    content: ContentString;
  }
  export type MessageList = Message[];
  export type MessageVersion = string;
  export type Name = string;
  export type NextToken = string;
  export type NumericalVersion = string;
  export type Priority = number;
  export type ProcessBehavior = "SAVE"|"BUILD"|string;
  export interface Prompt {
    /**
     * An array of objects, each of which provides a message string and its type. You can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).
     */
    messages: MessageList;
    /**
     * The number of times to prompt the user for information.
     */
    maxAttempts: PromptMaxAttempts;
    /**
     * A response card. Amazon Lex uses this prompt at runtime, in the PostText API response. It substitutes session attributes and slot values for placeholders in the response card. For more information, see ex-resp-card. 
     */
    responseCard?: ResponseCard;
  }
  export type PromptMaxAttempts = number;
  export interface PutBotAliasRequest {
    /**
     * The name of the alias. The name is not case sensitive.
     */
    name: AliasName;
    /**
     * A description of the alias.
     */
    description?: Description;
    /**
     * The version of the bot.
     */
    botVersion: Version;
    /**
     * The name of the bot.
     */
    botName: BotName;
    /**
     * Identifies a specific revision of the $LATEST version. When you create a new bot alias, leave the checksum field blank. If you specify a checksum you get a BadRequestException exception. When you want to update a bot alias, set the checksum field to the checksum of the most recent revision of the $LATEST version. If you don't specify the  checksum field, or if the checksum does not match the $LATEST version, you get a PreconditionFailedException exception.
     */
    checksum?: String;
  }
  export interface PutBotAliasResponse {
    /**
     * The name of the alias.
     */
    name?: AliasName;
    /**
     * A description of the alias.
     */
    description?: Description;
    /**
     * The version of the bot that the alias points to.
     */
    botVersion?: Version;
    /**
     * The name of the bot that the alias points to.
     */
    botName?: BotName;
    /**
     * The date that the bot alias was updated. When you create a resource, the creation date and the last updated date are the same.
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the bot alias was created.
     */
    createdDate?: Timestamp;
    /**
     * The checksum for the current version of the alias.
     */
    checksum?: String;
  }
  export interface PutBotRequest {
    /**
     * The name of the bot. The name is not case sensitive. 
     */
    name: BotName;
    /**
     * A description of the bot.
     */
    description?: Description;
    /**
     * An array of Intent objects. Each intent represents a command that a user can express. For example, a pizza ordering bot might support an OrderPizza intent. For more information, see how-it-works.
     */
    intents?: IntentList;
    /**
     * When Amazon Lex doesn't understand the user's intent, it uses this message to get clarification. To specify how many times Amazon Lex should repeate the clarification prompt, use the maxAttempts field. If Amazon Lex still doesn't understand, it sends the message in the abortStatement field.  When you create a clarification prompt, make sure that it suggests the correct response from the user. for example, for a bot that orders pizza and drinks, you might create this clarification prompt: "What would you like to do? You can say 'Order a pizza' or 'Order a drink.'"
     */
    clarificationPrompt?: Prompt;
    /**
     * When Amazon Lex can't understand the user's input in context, it tries to elicit the information a few times. After that, Amazon Lex sends the message defined in abortStatement to the user, and then aborts the conversation. To set the number of retries, use the valueElicitationPrompt field for the slot type.  For example, in a pizza ordering bot, Amazon Lex might ask a user "What type of crust would you like?" If the user's response is not one of the expected responses (for example, "thin crust, "deep dish," etc.), Amazon Lex tries to elicit a correct response a few more times.  For example, in a pizza ordering application, OrderPizza might be one of the intents. This intent might require the CrustType slot. You specify the valueElicitationPrompt field when you create the CrustType slot.
     */
    abortStatement?: Statement;
    /**
     * The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. A user interaction session remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout. For example, suppose that a user chooses the OrderPizza intent, but gets sidetracked halfway through placing an order. If the user doesn't complete the order within the specified time, Amazon Lex discards the slot information that it gathered, and the user must start over. If you don't include the idleSessionTTLInSeconds element in a PutBot operation request, Amazon Lex uses the default value. This is also true if the request replaces an existing bot. The default is 300 seconds (5 minutes).
     */
    idleSessionTTLInSeconds?: SessionTTL;
    /**
     * The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale configured for the voice must match the locale of the bot. For more information, see Available Voices in the Amazon Polly Developer Guide.
     */
    voiceId?: String;
    /**
     * Identifies a specific revision of the $LATEST version. When you create a new bot, leave the checksum field blank. If you specify a checksum you get a BadRequestException exception. When you want to update a bot, set the checksum field to the checksum of the most recent revision of the $LATEST version. If you don't specify the  checksum field, or if the checksum does not match the $LATEST version, you get a PreconditionFailedException exception.
     */
    checksum?: String;
    /**
     * If you set the processBehavior element to Build, Amazon Lex builds the bot so that it can be run. If you set the element to SaveAmazon Lex saves the bot, but doesn't build it.  If you don't specify this value, the default value is Save.
     */
    processBehavior?: ProcessBehavior;
    /**
     *  Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the bot.  The default is en-US.
     */
    locale: Locale;
    /**
     * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying true or false in the childDirected field. By specifying true in the childDirected field, you confirm that your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying false in the childDirected field, you confirm that your use of Amazon Lex is not related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the childDirected field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the Amazon Lex FAQ. 
     */
    childDirected: Boolean;
  }
  export interface PutBotResponse {
    /**
     * The name of the bot.
     */
    name?: BotName;
    /**
     * A description of the bot.
     */
    description?: Description;
    /**
     * An array of Intent objects. For more information, see PutBot.
     */
    intents?: IntentList;
    /**
     *  The prompts that Amazon Lex uses when it doesn't understand the user's intent. For more information, see PutBot. 
     */
    clarificationPrompt?: Prompt;
    /**
     * The message that Amazon Lex uses to abort a conversation. For more information, see PutBot.
     */
    abortStatement?: Statement;
    /**
     *  When you send a request to create a bot with processBehavior set to BUILD, Amazon Lex sets the status response element to BUILDING. After Amazon Lex builds the bot, it sets status to READY. If Amazon Lex can't build the bot, Amazon Lex sets status to FAILED. Amazon Lex returns the reason for the failure in the failureReason response element.  When you set processBehaviorto SAVE, Amazon Lex sets the status code to NOT BUILT.
     */
    status?: Status;
    /**
     * If status is FAILED, Amazon Lex provides the reason that it failed to build the bot.
     */
    failureReason?: String;
    /**
     * The date that the bot was updated. When you create a resource, the creation date and last updated date are the same.
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the bot was created.
     */
    createdDate?: Timestamp;
    /**
     * The maximum length of time that Amazon Lex retains the data gathered in a conversation. For more information, see PutBot.
     */
    idleSessionTTLInSeconds?: SessionTTL;
    /**
     * The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. For more information, see PutBot.
     */
    voiceId?: String;
    /**
     * Checksum of the bot that you created.
     */
    checksum?: String;
    /**
     * The version of the bot. For a new bot, the version is always $LATEST.
     */
    version?: Version;
    /**
     *  The target locale for the bot. 
     */
    locale?: Locale;
    /**
     * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying true or false in the childDirected field. By specifying true in the childDirected field, you confirm that your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying false in the childDirected field, you confirm that your use of Amazon Lex is not related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the childDirected field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the Amazon Lex FAQ. 
     */
    childDirected?: Boolean;
  }
  export interface PutIntentRequest {
    /**
     * The name of the intent. The name is not case sensitive.  The name can't match a built-in intent name, or a built-in intent name with "AMAZON." removed. For example, because there is a built-in intent called AMAZON.HelpIntent, you can't create a custom intent called HelpIntent. For a list of built-in intents, see Standard Built-in Intents in the Alexa Skills Kit.
     */
    name: IntentName;
    /**
     * A description of the intent.
     */
    description?: Description;
    /**
     * An array of intent slots. At runtime, Amazon Lex elicits required slot values from the user using prompts defined in the slots. For more information, see how-it-works. 
     */
    slots?: SlotList;
    /**
     * An array of utterances (strings) that a user might say to signal the intent. For example, "I want {PizzaSize} pizza", "Order {Quantity} {PizzaSize} pizzas".  In each utterance, a slot name is enclosed in curly braces. 
     */
    sampleUtterances?: IntentUtteranceList;
    /**
     * Prompts the user to confirm the intent. This question should have a yes or no answer. Amazon Lex uses this prompt to ensure that the user acknowledges that the intent is ready for fulfillment. For example, with the OrderPizza intent, you might want to confirm that the order is correct before placing it. For other intents, such as intents that simply respond to user questions, you might not need to ask the user for confirmation before providing the information.   You you must provide both the rejectionStatement and the confirmationPrompt, or neither. 
     */
    confirmationPrompt?: Prompt;
    /**
     * When the user answers "no" to the question defined in confirmationPrompt, Amazon Lex responds with this statement to acknowledge that the intent was canceled.   You must provide both the rejectionStatement and the confirmationPrompt, or neither. 
     */
    rejectionStatement?: Statement;
    /**
     * Amazon Lex uses this prompt to solicit additional activity after fulfilling an intent. For example, after the OrderPizza intent is fulfilled, you might prompt the user to order a drink. The action that Amazon Lex takes depends on the user's response, as follows:   If the user says "Yes" it responds with the clarification prompt that is configured for the bot.   if the user says "Yes" and continues with an utterance that triggers an intent it starts a conversation for the intent.   If the user says "No" it responds with the rejection statement configured for the the follow-up prompt.   If it doesn't recognize the utterance it repeats the follow-up prompt again.   The followUpPrompt field and the conclusionStatement field are mutually exclusive. You can specify only one. 
     */
    followUpPrompt?: FollowUpPrompt;
    /**
     *  The statement that you want Amazon Lex to convey to the user after the intent is successfully fulfilled by the Lambda function.  This element is relevant only if you provide a Lambda function in the fulfillmentActivity. If you return the intent to the client application, you can't specify this element.  The followUpPrompt and conclusionStatement are mutually exclusive. You can specify only one. 
     */
    conclusionStatement?: Statement;
    /**
     *  Specifies a Lambda function to invoke for each user input. You can invoke this Lambda function to personalize user interaction.  For example, suppose your bot determines that the user is John. Your Lambda function might retrieve John's information from a backend database and prepopulate some of the values. For example, if you find that John is gluten intolerant, you might set the corresponding intent slot, GlutenIntolerant, to true. You might find John's phone number and set the corresponding session attribute. 
     */
    dialogCodeHook?: CodeHook;
    /**
     * Required. Describes how the intent is fulfilled. For example, after a user provides all of the information for a pizza order, fulfillmentActivity defines how the bot places an order with a local pizza store.   You might configure Amazon Lex to return all of the intent information to the client application, or direct it to invoke a Lambda function that can process the intent (for example, place an order with a pizzeria). 
     */
    fulfillmentActivity?: FulfillmentActivity;
    /**
     * A unique identifier for the built-in intent to base this intent on. To find the signature for an intent, see Standard Built-in Intents in the Alexa Skills Kit.
     */
    parentIntentSignature?: BuiltinIntentSignature;
    /**
     * Identifies a specific revision of the $LATEST version. When you create a new intent, leave the checksum field blank. If you specify a checksum you get a BadRequestException exception. When you want to update a intent, set the checksum field to the checksum of the most recent revision of the $LATEST version. If you don't specify the  checksum field, or if the checksum does not match the $LATEST version, you get a PreconditionFailedException exception.
     */
    checksum?: String;
  }
  export interface PutIntentResponse {
    /**
     * The name of the intent.
     */
    name?: IntentName;
    /**
     * A description of the intent.
     */
    description?: Description;
    /**
     * An array of intent slots that are configured for the intent.
     */
    slots?: SlotList;
    /**
     *  An array of sample utterances that are configured for the intent. 
     */
    sampleUtterances?: IntentUtteranceList;
    /**
     * If defined in the intent, Amazon Lex prompts the user to confirm the intent before fulfilling it.
     */
    confirmationPrompt?: Prompt;
    /**
     * If the user answers "no" to the question defined in confirmationPrompt Amazon Lex responds with this statement to acknowledge that the intent was canceled. 
     */
    rejectionStatement?: Statement;
    /**
     * If defined in the intent, Amazon Lex uses this prompt to solicit additional user activity after the intent is fulfilled.
     */
    followUpPrompt?: FollowUpPrompt;
    /**
     * After the Lambda function specified in thefulfillmentActivityintent fulfills the intent, Amazon Lex conveys this statement to the user.
     */
    conclusionStatement?: Statement;
    /**
     * If defined in the intent, Amazon Lex invokes this Lambda function for each user input.
     */
    dialogCodeHook?: CodeHook;
    /**
     * If defined in the intent, Amazon Lex invokes this Lambda function to fulfill the intent after the user provides all of the information required by the intent.
     */
    fulfillmentActivity?: FulfillmentActivity;
    /**
     * A unique identifier for the built-in intent that this intent is based on.
     */
    parentIntentSignature?: BuiltinIntentSignature;
    /**
     * The date that the intent was updated. When you create a resource, the creation date and last update dates are the same.
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the intent was created.
     */
    createdDate?: Timestamp;
    /**
     * The version of the intent. For a new intent, the version is always $LATEST.
     */
    version?: Version;
    /**
     * Checksum of the $LATESTversion of the intent created or updated.
     */
    checksum?: String;
  }
  export interface PutSlotTypeRequest {
    /**
     * The name of the slot type. The name is not case sensitive.  The name can't match a built-in slot type name, or a built-in slot type name with "AMAZON." removed. For example, because there is a built-in slot type called AMAZON.DATE, you can't create a custom slot type called DATE. For a list of built-in slot types, see Slot Type Reference in the Alexa Skills Kit.
     */
    name: SlotTypeName;
    /**
     * A description of the slot type.
     */
    description?: Description;
    /**
     * A list of EnumerationValue objects that defines the values that the slot type can take. Each value can have a list of synonyms, which are additional values that help train the machine learning model about the values that it resolves for a slot.  When Amazon Lex resolves a slot value, it generates a resolution list that contains up to five possible values for the slot. If you are using a Lambda function, this resolution list is passed to the function. If you are not using a Lambda function you can choose to return the value that the user entered or the first value in the resolution list as the slot value. The valueSelectionStrategy field indicates the option to use. 
     */
    enumerationValues?: EnumerationValues;
    /**
     * Identifies a specific revision of the $LATEST version. When you create a new slot type, leave the checksum field blank. If you specify a checksum you get a BadRequestException exception. When you want to update a slot type, set the checksum field to the checksum of the most recent revision of the $LATEST version. If you don't specify the  checksum field, or if the checksum does not match the $LATEST version, you get a PreconditionFailedException exception.
     */
    checksum?: String;
    /**
     * Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:    ORIGINAL_VALUE - Returns the value entered by the user, if the user value is similar to the slot value.    TOP_RESOLUTION - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.   If you don't specify the valueSelectionStrategy, the default is ORIGINAL_VALUE.
     */
    valueSelectionStrategy?: SlotValueSelectionStrategy;
  }
  export interface PutSlotTypeResponse {
    /**
     * The name of the slot type.
     */
    name?: SlotTypeName;
    /**
     * A description of the slot type.
     */
    description?: Description;
    /**
     * A list of EnumerationValue objects that defines the values that the slot type can take.
     */
    enumerationValues?: EnumerationValues;
    /**
     * The date that the slot type was updated. When you create a slot type, the creation date and last update date are the same.
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the slot type was created.
     */
    createdDate?: Timestamp;
    /**
     * The version of the slot type. For a new slot type, the version is always $LATEST. 
     */
    version?: Version;
    /**
     * Checksum of the $LATEST version of the slot type.
     */
    checksum?: String;
    /**
     * The slot resolution strategy that Amazon Lex uses to determine the value of the slot. For more information, see PutSlotType.
     */
    valueSelectionStrategy?: SlotValueSelectionStrategy;
  }
  export type ReferenceType = "Intent"|"Bot"|"BotAlias"|"BotChannel"|string;
  export interface ResourceReference {
    /**
     * The name of the resource that is using the resource that you are trying to delete.
     */
    name?: Name;
    /**
     * The version of the resource that is using the resource that you are trying to delete.
     */
    version?: Version;
  }
  export type ResourceType = "BOT"|string;
  export type ResponseCard = string;
  export type SessionTTL = number;
  export interface Slot {
    /**
     * The name of the slot.
     */
    name: SlotName;
    /**
     * A description of the slot.
     */
    description?: Description;
    /**
     * Specifies whether the slot is required or optional. 
     */
    slotConstraint: SlotConstraint;
    /**
     * The type of the slot, either a custom slot type that you defined or one of the built-in slot types.
     */
    slotType?: CustomOrBuiltinSlotTypeName;
    /**
     * The version of the slot type.
     */
    slotTypeVersion?: Version;
    /**
     * The prompt that Amazon Lex uses to elicit the slot value from the user.
     */
    valueElicitationPrompt?: Prompt;
    /**
     *  Directs Lex the order in which to elicit this slot value from the user. For example, if the intent has two slots with priorities 1 and 2, AWS Lex first elicits a value for the slot with priority 1. If multiple slots share the same priority, the order in which Lex elicits values is arbitrary.
     */
    priority?: Priority;
    /**
     *  If you know a specific pattern with which users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of understanding user utterances. 
     */
    sampleUtterances?: SlotUtteranceList;
    /**
     *  A set of possible responses for the slot type used by text-based clients. A user chooses an option from the response card, instead of using text to reply. 
     */
    responseCard?: ResponseCard;
  }
  export type SlotConstraint = "Required"|"Optional"|string;
  export type SlotList = Slot[];
  export type SlotName = string;
  export interface SlotTypeMetadata {
    /**
     * The name of the slot type.
     */
    name?: SlotTypeName;
    /**
     * A description of the slot type.
     */
    description?: Description;
    /**
     * The date that the slot type was updated. When you create a resource, the creation date and last updated date are the same. 
     */
    lastUpdatedDate?: Timestamp;
    /**
     * The date that the slot type was created.
     */
    createdDate?: Timestamp;
    /**
     * The version of the slot type.
     */
    version?: Version;
  }
  export type SlotTypeMetadataList = SlotTypeMetadata[];
  export type SlotTypeName = string;
  export type SlotUtteranceList = Utterance[];
  export type SlotValueSelectionStrategy = "ORIGINAL_VALUE"|"TOP_RESOLUTION"|string;
  export interface Statement {
    /**
     * A collection of message objects.
     */
    messages: MessageList;
    /**
     *  At runtime, if the client is using the PostText API, Amazon Lex includes the response card in the response. It substitutes all of the session attributes and slot values for placeholders in the response card. 
     */
    responseCard?: ResponseCard;
  }
  export type Status = "BUILDING"|"READY"|"FAILED"|"NOT_BUILT"|string;
  export type StatusType = "Detected"|"Missed"|string;
  export type String = string;
  export type SynonymList = Value[];
  export type Timestamp = Date;
  export type UserId = string;
  export type Utterance = string;
  export interface UtteranceData {
    /**
     * The text that was entered by the user or the text representation of an audio clip.
     */
    utteranceString?: UtteranceString;
    /**
     * The number of times that the utterance was processed.
     */
    count?: Count;
    /**
     * The total number of individuals that used the utterance.
     */
    distinctUsers?: Count;
    /**
     * The date that the utterance was first recorded.
     */
    firstUtteredDate?: Timestamp;
    /**
     * The date that the utterance was last recorded.
     */
    lastUtteredDate?: Timestamp;
  }
  export interface UtteranceList {
    /**
     * The version of the bot that processed the list.
     */
    botVersion?: Version;
    /**
     * One or more UtteranceData objects that contain information about the utterances that have been made to a bot. The maximum number of object is 100.
     */
    utterances?: ListOfUtterance;
  }
  export type UtteranceString = string;
  export type Value = string;
  export type Version = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-04-19"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the LexModelBuildingService client.
   */
  export import Types = LexModelBuildingService;
}
export = LexModelBuildingService;
