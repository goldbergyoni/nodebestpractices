'use stricts';

module.exports = {
  Authentication: {
    AUTH_TOKEN_COOKIE_NAME: "auth-token"
  },

  Roles: {
    User: 1,
    Admin: 64,
  },

  EmailTemplateTypes: {
    RESET_PASSWORD: 1
  },

  IntegrationsTypes: {
    Salesforce: 1,
    Marketo: 2
  },

  State: {
    None: 0,
    Disabled: 1,
    Deleted: 2,
    Invalid: 4
  },

  DataTypes: {
    Picklist: "picklist",
    Reference: "reference"
  },

  DisplayUnit: {
    Hours: 1,
    Days: 2,
    Weeks: 3
  },

  CriteriaTypes: {
    Simple: "Simple",
    Complex: "Complex"
  },

  Operators: {
    Equals: "=",
    NotEquals: "!=",
    GreaterThan: ">",
    LessThan: "<",
    GreaterThanEqual: ">=",
    LessThanEqual: "<=",
    In: "In",
    Or: "Or",
    And: "And"
  },

  RuleType: {
    Stage: 1,
    Bucket: 2,
    Activity: 3
  },

  RuleSubType: {
    RelationCreatedOrUpdated: 1,
    FieldChanged: 2
  },

  CriteriaOutcome: {
    Apply: 1,
    Ignore: 2
  },

  SyncOptions: {
    SupportHistory: 1,
    SupportStreaming: 2
  },

  ConenctorType: {
    Conversion: 1,
    Relative: 2,
    Duration: 3,
    Quantity: 4
  },

  AdvancedOptions: {
    IncluedeFunnel: 1,
    IncluedeLimbo: 2,
    IncluedePotentialLost: 4
  },

  SortDirection: {
    Top: 1,
    Buttom: 2
  },

  OrderBy: {
    Frequency: 1,
    Time: 2
  },

  LabelBy: {
    UserDefined: 1,
    FieldPath: 2,
    EntityName: 3
  },

  DefaultProcessMapping: {
    LeadToConverted: 1,
    OpportunityToClosed: 2
  },

  Language: {
    en_US:{
      value: 1,
      name: "English",
      nativeName: "English"
    },
    /*fr_FRS:{
      value: 2,
      name: "French",
      nativeName: "français, langue française"
    },*/
    debug:{
      value: 99,
      name: "Debug",
      nativeName: "Debug"
    }
  },

  getLanguageKey: function(value){
    return Object.keys(this.Language).find(l => this.Language[l].value == value);
  },

  getKeyByValue: function(enumType, enumValue) {
    for (let key in enumType) {
      if (enumType.hasOwnProperty(key) && enumType[key] == enumValue)
        return key;
    }
  }

};
