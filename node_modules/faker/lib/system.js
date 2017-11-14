// generates fake data for many computer systems properties

/**
 *
 * @namespace faker.system
 */
function System (faker) {

  /**
   * generates a file name with extension or optional type
   *
   * @method faker.system.fileName
   * @param {string} ext
   * @param {string} type
   */
  this.fileName = function (ext, type) {
    var str = faker.fake("{{random.words}}.{{system.fileExt}}");
    str = str.replace(/ /g, '_');
    str = str.replace(/\,/g, '_');
    str = str.replace(/\-/g, '_');
    str = str.replace(/\\/g, '_');
    str = str.replace(/\//g, '_');
    str = str.toLowerCase();
    return str;
  };

  /**
   * commonFileName
   *
   * @method faker.system.commonFileName
   * @param {string} ext
   * @param {string} type
   */
  this.commonFileName = function (ext, type) {
    var str = faker.random.words() + "." + (ext || faker.system.commonFileExt());
    str = str.replace(/ /g, '_');
    str = str.replace(/\,/g, '_');
    str = str.replace(/\-/g, '_');
    str = str.replace(/\\/g, '_');
    str = str.replace(/\//g, '_');
    str = str.toLowerCase();
    return str;
  };

  /**
   * mimeType
   *
   * @method faker.system.mimeType
   */
  this.mimeType = function () {
    return faker.random.arrayElement(Object.keys(faker.definitions.system.mimeTypes));
  };

  /**
   * returns a commonly used file type
   *
   * @method faker.system.commonFileType
   */
  this.commonFileType = function () {
    var types = ['video', 'audio', 'image', 'text', 'application'];
    return faker.random.arrayElement(types)
  };

  /**
   * returns a commonly used file extension based on optional type
   *
   * @method faker.system.commonFileExt
   * @param {string} type
   */
  this.commonFileExt = function (type) {
    var types = [
      'application/pdf',
      'audio/mpeg',
      'audio/wav',
      'image/png',
      'image/jpeg',
      'image/gif',
      'video/mp4',
      'video/mpeg',
      'text/html'
    ];
    return faker.system.fileExt(faker.random.arrayElement(types));
  };


  /**
   * returns any file type available as mime-type
   *
   * @method faker.system.fileType
   */
  this.fileType = function () {
    var types = [];
    var mimes = faker.definitions.system.mimeTypes;
    Object.keys(mimes).forEach(function(m){
      var parts = m.split('/');
      if (types.indexOf(parts[0]) === -1) {
        types.push(parts[0]);
      }
    });
    return faker.random.arrayElement(types);
  };

  /**
   * fileExt
   *
   * @method faker.system.fileExt
   * @param {string} mimeType
   */
  this.fileExt = function (mimeType) {
    var exts = [];
    var mimes = faker.definitions.system.mimeTypes;

    // get specific ext by mime-type
    if (typeof mimes[mimeType] === "object") {
      return faker.random.arrayElement(mimes[mimeType].extensions);
    }

    // reduce mime-types to those with file-extensions
    Object.keys(mimes).forEach(function(m){
      if (mimes[m].extensions instanceof Array) {
        mimes[m].extensions.forEach(function(ext){
          exts.push(ext)
        });
      }
    });
    return faker.random.arrayElement(exts);
  };

  /**
   * not yet implemented
   *
   * @method faker.system.directoryPath
   */
  this.directoryPath = function () {
    // TODO
  };

  /**
   * not yet implemented
   *
   * @method faker.system.filePath
   */
  this.filePath = function () {
    // TODO
  };

  /**
   * semver
   *
   * @method faker.system.semver
   */
  this.semver = function () {
      return [faker.random.number(9),
              faker.random.number(9),
              faker.random.number(9)].join('.');
  }

}

module['exports'] = System;
