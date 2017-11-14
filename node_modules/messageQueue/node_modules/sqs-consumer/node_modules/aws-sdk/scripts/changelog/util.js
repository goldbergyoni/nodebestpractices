var fs = require('fs');
var changelog, latest, nextReleaseFiles;

var changelogFile = process.cwd() + '/CHANGELOG.md';
var changesDir = process.cwd() + '/.changes/';
var nextReleaseDir = changesDir + 'next-release/';
var insertMarker = '<!--ENTRYINSERT-->';
var versionMarker = ['<!--LATEST=', '-->'];
var startContent = '# Changelog for AWS SDK for JavaScript\n' +
	versionMarker.join('0.0.0') + '\n' + insertMarker;

var versionRegStr = '(\\d+)\\.(\\d+)\\.(\\d+)';
var versionReg = new RegExp('^' + versionRegStr + '$');
var versionMarkerReg = new RegExp(versionMarker.join(versionRegStr));
var versionJsonFileReg = new RegExp('^' + versionRegStr + '\\.json$');

function fsSyncFromRoot(operation, fileOrDir) {
	try {
		var result = fs[operation + 'Sync'](fileOrDir);
	} catch(err) {
		if (err.code === 'ENOENT') {
			err.message += '. Make sure to run from sdk root directory'
		}
		throw err;
	}
	return result;
}

function readChangelog() {
	changelog = fsSyncFromRoot('readFile', changelogFile).toString();
	return changelog;
}

function getLatestVersion() {
	if (!changelog) readChangelog();
	var match = changelog.match(versionMarkerReg);
	latest = {
		major: parseInt(match[1],10),
		minor: parseInt(match[2],10),
		patch: parseInt(match[3],10)
	};
	return latest;
}

function checkAndNormalizeVersion(version) {
	if (!latest) getLatestVersion();
	var match = version.match(versionReg);
	if (match) {
		// convert to num for comparison and for normalizing leading zeros
		var major = parseInt(match[1], 10);
		var minor = parseInt(match[2], 10);
		var patch = parseInt(match[3], 10);
		if (major < latest.major ||
			major == latest.major && minor < latest.minor ||
			major == latest.major && minor == latest.minor && patch <= latest.patch) {
			throw new Error('Version must be greater than latest version');
		}
		return major + '.' + minor + '.' + patch;
	} else {
		throw new Error('Provided input version is in wrong format');
	}
}

function bumpMajor() {
	if (!latest) getLatestVersion();
	return (latest.major + 1) + '.0.0';
}

function bumpMinor() {
	if (!latest) getLatestVersion();
	return latest.major + '.' + (latest.minor + 1) + '.0';
}

function bumpPatch() {
	if (!latest) getLatestVersion();
	return latest.major + '.' + latest.minor + '.' + (latest.patch + 1);
}

function listVersions() {
	var changeFiles = fsSyncFromRoot('readdir', changesDir);
	return changeFiles
		.map(function(file) { return file.match(versionJsonFileReg); })
		.filter(function(version) { return !!version; })
		.sort(function(v1, v2) {
			var diff;
			for (var i = 1; i <= 3; i++) {
				diff = v1[i] - v2[i];
				if (diff !== 0) {
					return diff;
				}
			}
			return 0;
		})
		.map(function(version) { return version.slice(1).join('.'); });
}

function listNextReleaseFiles() {
	nextReleaseFiles = fsSyncFromRoot('readdir', nextReleaseDir)
		.map(function(file) { return nextReleaseDir + file });
	if (!nextReleaseFiles.length) throw new Error('No changes to be released');
	return nextReleaseFiles;
}

function startNewChangelog() {
	changelog = startContent;
	return changelog;
}

function checkChangeFormat(change) {
	if (!change.type || !change.category || !change.description ||
		typeof change.type !== 'string' ||
		typeof change.category !== 'string' ||
		typeof change.description !== 'string') {
		var err = new Error('JSON not in correct format');
		err.code = 'InvalidFormat';
		throw err;
	}
}

function readChangesFromJSON(filepath) {
	var changes = JSON.parse(fsSyncFromRoot('readFile', filepath));
	if (!Array.isArray(changes)) changes = [changes];
	if (!changes.length) throw new Error(filepath + ' contains no changes');
	try {
		changes.forEach(checkChangeFormat);
	} catch (err) {
		if (err.code === 'InvalidFormat') {
			err.message += ' in ' + filepath;
		}
		throw err;
	}
	return changes;
}

// This will not to write to file
// writeToChangelog must be called after
function addVersionJSONToChangelog(version, changes) {
	if (!changelog) readChangelog();
	var entry = '\n\n## ' + version;

	changes.forEach(function(change) {
		entry += '\n* ' + change.type + ': ' + change.category + ': ' +
			change.description;
	});

	var logParts = changelog.split(insertMarker);
	logParts[0] = logParts[0]
		.replace(versionMarkerReg, versionMarker.join(version)) + insertMarker;
	changelog = logParts.join(entry);
}

// This will not to write to file
// writeToChangelog must be called after
function readVersionJSONAndAddToChangelog(version) {
	var changes = readChangesFromJSON(changesDir + version + '.json');
	addVersionJSONToChangelog(version, changes);
}

function writeToChangelog() {
	if (!changelog) throw new Error('Nothing to write');
	fs.writeFileSync(changelogFile, changelog);
	console.log('Successfully updated CHANGELOG');
}

function writeToVersionJSON(version, json) {
	var content = JSON.stringify(json, null, 4);
	fs.writeFileSync(changesDir + version + '.json', content);
	console.log('Successfully added ' + version + '.json to ' + changesDir);
}

function clearNextReleaseDir() {
	if (!nextReleaseFiles) listNextReleaseFiles();
	nextReleaseFiles.forEach(function(filepath) {
		fsSyncFromRoot('unlink', filepath);
	});
	console.log(nextReleaseDir + ' has been cleared');
}

module.exports = {
	readChangelog: readChangelog,
	getLatestVersion: getLatestVersion,
	checkAndNormalizeVersion: checkAndNormalizeVersion,
	bumpMajor: bumpMajor,
	bumpMinor: bumpMinor,
	bumpPatch: bumpPatch,
	listVersions: listVersions,
	listNextReleaseFiles: listNextReleaseFiles,
	startNewChangelog: startNewChangelog,
	readChangesFromJSON: readChangesFromJSON,
	addVersionJSONToChangelog: addVersionJSONToChangelog,
	readVersionJSONAndAddToChangelog: readVersionJSONAndAddToChangelog,
	writeToChangelog: writeToChangelog,
	writeToVersionJSON: writeToVersionJSON,
	clearNextReleaseDir: clearNextReleaseDir
};
