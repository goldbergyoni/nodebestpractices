# AWS SDK for JavaScript Changelog Scripts

These scripts create and update the changelog to summarize what has changed in
each version of the AWS SDK for JavaScript.

Here is a sample of what an entry in the changelog looks like:

## 2.4.5
* bugfix: Waiters: Some description of the bugfix ([Issue #9542]())
* feature: S3: Some descripton of the new feature
* API: RDS: Some description
* API: DynamoDB: Some description

Here is an overview of the scripts that create and update the changelog:

### create-changelog

This script can be used to create or recreate the changelog based on JSON files
in the `.changes/` directory in the root directory of the SDK. This does not
need to be run on a regular basis but is useful if the changelog accidentallly
gets deleted or corrupted. A `.changes/` directory in the root directory will
need to be created before running this script, if it does not already exist. To
run this script, type the following command from the root SDK directory in the
command line:
```
./scripts/changelog/create-changelog
```
The JSON files in the `.changes/` directory must be named with a version number
(e.g. `2.4.5.json`) and its contents should be an array of objects. Each object
represents one change in that version of the SDK, and should contain `"type"`,
`"category"`, and `"description"` properties with string values. Incorrectly
formatted filenames will be skipped over, and incorrectly formatted JSON within
files with correctly formatted names will cause an error to be thrown and halt
the execution of this script. The changelog file is not written to until the
end, so if execution is halted, no files will have changed and no cleanup is
required. The JSON files in `.changes/` are created in the `release` script.

### release

This script should be run for each release. It creates a new entry in the
changelog based on JSON files in the `next-release/` directory in the
`.changes/` directory in the root of the SDK. In addition, it will create a
JSON file for the new version in the `.changes/` directory so that the entry
can be recreated when the `create-changelog` script is run. The `.changes/` and
`next-release/` directories will need to be created before running this script,
if they do not already exist. To run this script, type the following command
from the root SDK directory in the command line:
```
./scripts/changelog/release
```
Optionally, you can provide an argument to specify the version number of the
new release. Accepted values are `major`, `minor`, `patch`, or a version number
that is greater than the latest version (e.g. `2.4.6`). An error will be thrown
if the specified version is not greater than the latest version, and execution
will be halted. The former 3 choices specifies the type of version bump. For
example, running
```
./scripts/changelog/release minor
```
will bump up the minor version from the latest version. If the latest version
is `2.4.5`, then this would set the new version to `2.5.0`. If no argument is
provided, then the script defaults to bumping the patch number.

The JSON files in the `next-release/` directory can either contain a single
object or an array of objects. Each object represents one change in the new
version, and should contain `"type"`, `"category"`, and `"description"`
properties with string values. Incorrectly formatted JSON will cause an error
to be thrown and halt execution of this script. If execution is halted due to
this error, no changes will have been made to any files yet at this point, so
no cleanup will be required.

The script merges all changes in `next-release/` to a new JSON file with the
version number as its name, and files in `next-release/` are deleted. A new
entry is then created in the changelog. If for any reason execution is halted
after `next-release/` is cleared but before changes are written to the
changelog, you can either just run the `create-changelog` script or you can
move the new version JSON file into `next-release/` and re-run the `release`
script (the name of the file does not matter).

### add-change cli

This script creates a changelog entry. The script prompts you to
specify a `type` (e.g. bugfix or feature), a `category` (e.g. a service name
or something like: Paginator), and a short `description` describing the change.

Type the following command from the root SDK directory in the command line to
run this script, using versions of node.js that support promises (0.12.x and higher):
```
node ./scripts/changelog/add-change.js
```

This script will place a JSON file representing your change in the following location:
```
$SDK_ROOT/.changes/next-release/
```

Please run this script and include the JSON file when submitting a pull request.
