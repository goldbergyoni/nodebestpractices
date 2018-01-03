const entityServices = require('./entityServices'),
  utils = require('utils'),
  Enums = utils.enums,
  FlagHelper = utils.general.flagHelper;

  const _defaultValueProperties = Symbol('defaultValueProperties');

class entityBase {
  constructor() {
    this.createdOn = "";
    this.updatedOn = "";

    this[_defaultValueProperties] = {};
  }

  get isDeleted() { return !!this.state && FlagHelper.hasFlag(this.state, Enums.State.Deleted); }
  get isDisabled() { return !!this.state && FlagHelper.hasFlag(this.state, Enums.State.Disabled); }
  get isValid() { return !this.state || !FlagHelper.hasFlag(this.state, Enums.State.Invalid); }
  set isValid(value) { this.state = (value === true) ? FlagHelper.removeFlag(this.state, Enums.State.Invalid) : FlagHelper.addFlag(this.state, Enums.State.Invalid); }
  
  hasDefaultValue(propertyName) { return this[_defaultValueProperties].hasOwnProperty(propertyName);}
  setHasDefaultValue(propertyName) { return this[_defaultValueProperties][propertyName] = true;}
  clearHasDefaultValue(propertyName) { return delete this[_defaultValueProperties][propertyName];}
  
  validate() {
    return new entityServices().validate(this, this.constructor.schema);
  }

  assertIsValid() {
    return new entityServices().assertIsValid(this, this.constructor.schema);
  }

  customValidate(objectToValidate, schema) {
    return new entityServices().validate(objectToValidate, schema);
  }

  get isNew() {
    if (this.hasOwnProperty("id"))
      return !(this.id > 0);

    throw new Error("Cannot evaluate isNew, Entity has no id property.");
  }

  updatePropertyIfExists(clientData, propertyName, forcedValue=undefined) {
    if(clientData.hasOwnProperty(propertyName))
      this[propertyName] = forcedValue !== undefined ? forcedValue : clientData[propertyName];
  }

  getClientInfo() {
    let res = Object.assign({}, this);
    delete res.state;
    res.isDisabled = this.isDisabled;
    return res;
  }

}

module.exports = entityBase;
