var ChangeCreator = require('./change-creator').ChangeCreator;

/**
 * The CLI class to add a changelog entry.
 */
function AddChangeCli() {
    this._changeCreator = new ChangeCreator();
    this._maxRetries = 2;
    this._retryCount = 0;
}

AddChangeCli.prototype = {
    /**
     * Prints a string to stdout.
     * @param {string} message - text to print.
     */
    print: function print(message) {
        process.stdout.write(message);
    },

    /**
     * Prints the CLI intro message.
     */
    showIntro: function showIntro() {
        var intro = '\n';
        intro += 'This utility will walk you through creating a changelog entry.\n\n';
        intro += 'A changelog entry requires:\n';
        intro += '\t- type: Type should be one of: feature, bugfix.\n';
        intro += '\t- category: This can be a service identifier (e.g. "s3"), or something like: Paginator.\n';
        intro += '\t- description: A brief description of the change.\n';
        intro += '\t    You can also include a github style reference such as "#111".\n\n'
        intro += 'Please run this script before submitting a pull request.\n\n';
        intro += 'Press ^C at any time to quit.\n';
        this.print(intro);
    },

    /**
     * Gets a string from stdin and returns a promise resolved with the string.
     * Note: stdin is read when the user presses 'Enter'.
     * Returns a promise that is resolved with the trimmed user input.
     */
    retrieveInputAsync: function retrieveInput() {
        return new Promise(function(resolve, reject) {
            function getData() {
                var chunk = process.stdin.read();
                if (chunk !== null) {
                    // Remove self from stdin and call callback
                    process.stdin.removeListener('readable', getData);
                    resolve(chunk.trim());
                }
            }
            process.stdin.setEncoding('utf8');
            // start listening for input
            process.stdin.on('readable', getData);
        });
    },

    /**
     * Prompts the user to enter a type.
     * Will also process the user input.
     * Returns a promise.
     */
    promptType: function promptType() {
        var changeCreator = this._changeCreator;
        var existingType = changeCreator.getChangeType();
        this.print('\nValid types are "feature" or "bugfix"\n');
        this.print('type: ' + (existingType ? '(' + existingType + ') ' : ''));
        return this.retrieveInputAsync()
            .then(this.processType.bind(this));
    },

    /**
     * Prompts the user to enter a category.
     * Will also process the user input.
     * Returns a promise.
     */
    promptCategory: function promptCategory() {
        var changeCreator = this._changeCreator;
        var existingCategory = changeCreator.getChangeCategory();
        this.print('\nCategory can be a service identifier or something like: Paginator\n');
        this.print('category: ' + (existingCategory ? '(' + existingCategory + ') ' : ''));
        return this.retrieveInputAsync()
            .then(this.processCategory.bind(this));
    },

    /**
     * Prompts the user to enter a description.
     * Will also process the user input.
     * Returns a promise.
     */
    promptDescription: function promptDescription() {
        var changeCreator = this._changeCreator;
        var existingDescription = changeCreator.getChangeDescription();
        this.print('\nA brief description of your change.\n');
        this.print('description: ' + (existingDescription ? '(' + existingDescription + ') ' : ''));
        return this.retrieveInputAsync()
            .then(this.processDescription.bind(this));
    },

    /**
     * Handles processing of `type` based on user input.
     * If validation of `type` fails, the prompt will be shown again up to 3 times.
     * Returns a promise.
     */
    processType: function processType(type) {
        var changeCreator = this._changeCreator;
        var type = type.toLowerCase();
        // validate
        try {
            if (type) {
                changeCreator.setChangeType(type);
            }
            changeCreator.validateChangeType(type);
        } catch (err) {
            // Log the error
            this.print(err.message + '\n');
            // re-prompt if we still have retries
            if (this._retryCount < this._maxRetries) {
                this._retryCount++;
                return this.promptType();
            }
            //otherwise, just exit
            return Promise.reject();
        }
        // reset retry count
        this._retryCount = 0;
        return Promise.resolve();
    },

    /**
     * Handles processing of `category` based on user input.
     * If validation of `category` fails, the prompt will be shown again up to 3 times.
     * Returns a promise.
     */
    processCategory: function processCategory(category) {
        var changeCreator = this._changeCreator;
        // validate
        try {
            if (category) {
                changeCreator.setChangeCategory(category);
            }
            changeCreator.validateChangeCategory(category);
        } catch (err) {
            // Log the error
            this.print(err.message + '\n');
            // re-prompt if we still have retries
            if (this._retryCount < this._maxRetries) {
                this._retryCount++;
                return this.promptCategory();
            }
            //otherwise, just exit
            return Promise.reject();
        }
        // reset retry count
        this._retryCount = 0;
        return Promise.resolve();
    },

    /**
     * Handles processing of `description` based on user input.
     * If validation of `description` fails, the prompt will be shown again up to 3 times.
     * Returns a promise.
     */
    processDescription: function processDescription(description) {
        var changeCreator = this._changeCreator;
        // validate
        try {
            if (description) {
                changeCreator.setChangeDescription(description);
            }
            changeCreator.validateChangeDescription(description);
        } catch (err) {
            // Log the error
            this.print(err.message + '\n');
            // re-prompt if we still have retries
            if (this._retryCount < this._maxRetries) {
                this._retryCount++;
                return this.promptDescription();
            }
            //otherwise, just exit
            return Promise.reject();
        }
        // reset retry count
        this._retryCount = 0;
        return Promise.resolve();
    },

    /**
     * Prompts the user for all inputs.
     * Returns a promise.
     */
    promptInputs: function promptInputs() {
        var self = this;
        return this.promptType()
            .then(this.promptCategory.bind(this))
            .then(this.promptDescription.bind(this))
            .catch(function(err) {
                self.print(err.message);
            });
    },

    /**
     * Writes the changelog entry to a JSON file.
     * Returns a promise that is resolved with the output filename.
     */
    writeChangeEntry: function writeChangeEntry() {
        var self = this;
        return new Promise(function(resolve, reject) {
            var changeCreator = self._changeCreator;
            changeCreator.writeChanges(function(err, data) {
                if (err) {
                    return reject(err);
                }
                self.print('\nFile created at ' + data.file + '\n');
                return resolve(data);
            });
        });
    }
};

// Run the CLI program
var cli = new AddChangeCli();
cli.showIntro();
cli.promptInputs()
    .then(cli.writeChangeEntry.bind(cli))
    .then(function() {
        // CLI done with its work, exit successfully.
        setTimeout(function() {
            process.exit(0)
        }, 0);
    })
    .catch(function(err) {
        cli.print(err.message);
        cli.print('\nExiting...\n');
        setTimeout(function() {
            // CLI failed, exit with an error
            process.exit(1);
        }, 0);
    });