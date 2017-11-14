'use stricts';

const commonErrors = require('errorManagement').commonErrors;

class FieldPath {

  constructor(path){
    this.CURRENT_OBJECT = "CurrentObject()";
    this.numberOfHops = 0;
    this.entityApiName = this.CURRENT_OBJECT;
    this.fieldApiName = "";
    this.hop = null;

    if(path)
      this.parse(path);
  }

// CurrentObject().State
// CurrentObject().$AccountManager<Account>.Name
// CurrentObject().$AccountOwner<User>.$BuyingCompany<Company>.Address

  parse(path) {
    path = path.replace(`${this.CURRENT_OBJECT}.`, "");
    let data = parseRight(path, this.CURRENT_OBJECT);
    this.entityApiName = data.entityApiName;
    this.fieldApiName = data.fieldApiName;
    this.hop = data.hop;
    this.validate();
  }

  toString() {
    let res = [this.entityApiName];
    let hop = this;
    while(hop) {
      if(hop.hop)
        res.push(`$${hop.fieldApiName}<${hop.hop.entityApiName}>`);
      else
        res.push(hop.fieldApiName);

      hop = hop.hop;
    }

    return res.join(".");
  }

  validate() {
    let hop = this;
    let hopsCount = 0;
    while(hop) {
      if(hop.hop)
        ++hopsCount;

      if(!hop.fieldApiName || !hop.entityApiName)
        throw commonErrors.BadFormatError();

      if(!hop.hop && !hop.fieldApiName || hop.fieldApiName.indexOf("$") != -1 || hop.fieldApiName.indexOf(">") != -1 || hop.fieldApiName.indexOf("<") != -1)
        throw commonErrors.BadFormatError();

      hop = hop.hop;
    }

    this.numberOfHops = hopsCount;
  }
}

module.exports = FieldPath;

function validateSegment(segment) {
  if(segment == this.CURRENT_OBJECT)
    return;

  let index = segment.indexOf("$");
  if(index > 0)
    throw commonErrors.BadFormatError();
  else if (index == 0) {
    if(segment.indexOf("<") == -1 || segment.indexOf(">") == -1 )
      throw commonErrors.BadFormatError();
  }

  index = segment.indexOf("<");
  if(index > 0 && segment.indexOf("$") != 0)
    throw commonErrors.BadFormatError();
}

function parseLeft(path) {
  validateSegment(path);
  let split = path.split("<");
  return {
    fieldApiName: split[0].replace(/^\$/g, ""),
    entityApiName: split[1].replace(/^ </g, "").replace(">", "")
  };
}

function parseRight(path, entityApiName) {
  if(!path)
    return;

  let index = path.indexOf(".");
  if(index != -1) {
    const data = parseLeft(path.substr(0, index));
    const hop = parseRight(path.substr(index+1), data.entityApiName);

    return {
      fieldApiName: data.fieldApiName,
      entityApiName: entityApiName,
      hop: hop
    };
  }
  else {
    validateSegment(path);
    return {
      fieldApiName: path,
      entityApiName: entityApiName
    };
  }
}
