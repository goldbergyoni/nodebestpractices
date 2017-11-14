var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
/**
 * Configuration Options:
 *  - write file location
 *  - read file location
 */

function checkProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

/**
 * Generates a 'random' hex value.
 * More 'random' than Math.random without depending on a GUID module.
 */
function generateRandomIdentifier() {
    return crypto.randomBytes(4).toString('hex');
}

var CHANGES_DIR = path.join(process.cwd(), '.changes');

/**
 * A map of valid change types.
 * Can be referenced outside of this module.
 */
var VALID_TYPES = Object.create(null);
VALID_TYPES['bugfix'] = true;
VALID_TYPES['feature'] = true;


/**
 * Handles creating a change log entry JSON file.
 */
function ChangeCreator(config) {
    this._config = config || {};
    this._type = '';
    this._category = '';
    this._description = '';
}

ChangeCreator.prototype = {
    getChangeType: function getChangeType() {
        return this._type;
    },

    setChangeType: function setChangeType(type) {
        this._type = type;
    },

    getChangeCategory: function getChangeCategory() {
        return this._category;
    },

    setChangeCategory: function setChangeCategory(category) {
        this._category = category;
    },

    getChangeDescription: function getChangeDescription() {
        return this._description;
    },

    setChangeDescription: function setChangeDescription(description) {
        this._description = description;
    },

    /**
     * Validates the entire change entry.
     */
    validateChange: function validateChange() {
        var type = this.getChangeType();
        var category = this.getChangeCategory();
        var description = this.getChangeDescription();

        var missingFields = [];
        this.validateChangeType(type);
        this.validateChangeCategory(category);
        this.validateChangeDescription(description);

        return this;
    },

    /**
     * Validates a change entry type.
     */
    validateChangeType: function validateChangeType(type) {
        var type = type || this._type;

        if (!type) {
            throw new Error('ValidationError: Missing `type` field.');
        }

        if (VALID_TYPES[type]) {
            return this;
        }

        var validTypes = Object.keys(VALID_TYPES).join(',');

        throw new Error('ValidationError: `type` set as "' + type + '" but must be one of [' + validTypes + '].');
    },

    /**
     * Validates a change entry category.
     */
    validateChangeCategory: function validateChangeCategory(category) {
        var category = category || this._category;

        if (!category) {
            throw new Error('ValidationError: Missing `category` field.');
        }

        return this;
    },

    /**
     * Validates a change entry description.
     */
    validateChangeDescription: function validateChangeDescription(description) {
        var description = description || this._description;

        if (!description) {
            throw new Error('ValidationError: Missing `description` field.');
        }

        return this;
    },

    /**
     * Creates the output directory if it doesn't exist.
     */
    createOutputDirectory: function createOutputDirectory(outPath) {
        var pathObj = path.parse(outPath);
        var sep = path.sep;
        var directoryStructure = pathObj.dir.split(sep) || [];
        for (var i = 0; i < directoryStructure.length; i++) {
            var pathToCheck = directoryStructure.slice(0, i + 1).join(sep);
            if (!pathToCheck) {
                continue;
            }
            try {
                var stats = fs.statSync(pathToCheck);
            } catch (err) {
                if (err.code === 'ENOENT') {
                    // Directory doesn't exist, so create it
                    fs.mkdirSync(pathToCheck);
                } else {
                    throw err;
                }
            }
        }
        return this;
    },

    /**
     * Returns a path to the future change entry file.
     */
    determineWriteLocation: function determineWriteLocation() {
        /* Order for determining write location:
            1) Check configuration for `outFile` location.
            2) Check configuration for `inFile` location.
            3) Create a new file using default location.
        */
        var config = this._config || {};
        if (checkProperty(config, 'outFile') && config['outFile']) {
            return config['outFile'];
        }
        if (checkProperty(config, 'inFile') && config['inFile']) {
            return config['inFile'];
        }
        // Determine default location
        var newFileName = this._type + '-' + this._category + '-' + generateRandomIdentifier() + '.json';
        return path.join(process.cwd(), '.changes', 'next-release', newFileName);
    },

    /**
     * Writes a change entry as a JSON file.
     */
    writeChanges: function writeChanges(callback) {
        var hasCallback = typeof callback === 'function';
        var fileLocation = this.determineWriteLocation();

        try {
            // Will throw an error if the change is not valid
            this.validateChange().createOutputDirectory(fileLocation);
            var change = {
                type: this.getChangeType(),
                category: this.getChangeCategory(),
                description: this.getChangeDescription()
            }
            fs.writeFileSync(fileLocation, JSON.stringify(change, null, 2));
            var data = {
                file: fileLocation
            };
            if (hasCallback) {
                return callback(null, data);
            } else {
                return data;
            }
        } catch (err) {
            if (hasCallback) {
                return callback(err, null);
            } else {
                throw err;
            }
        }
    }
}

module.exports = {
    ChangeCreator: ChangeCreator,
    VALID_TYPES: VALID_TYPES
};