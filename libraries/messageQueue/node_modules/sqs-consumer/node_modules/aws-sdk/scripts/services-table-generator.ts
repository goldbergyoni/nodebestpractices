import {writeFileSync} from 'fs';
import {resolve} from 'path';

const clients = require('../clients/all');
const metadata = require('../apis/metadata');
const api_loader = require('../lib/api_loader');

writeFileSync(
    resolve(__dirname, '..', 'SERVICES.md'),
    Object.keys(clients).reduce((serviceTable, clientId): string => {
        const cid = clientId.toLowerCase();
        return serviceTable + Object.keys(api_loader.services[cid]).reverse()
            .map((version: string): string => {
                const model = api_loader(cid, version);
                return `${model.metadata.serviceFullName} | AWS.${clientId} | ${version} | ${metadata[cid].cors === true ? ':tada:' : ''} |`;
            }).join("\n") + "\n";
    }, `The SDK currently supports the following services:

<p class="note"><strong>Note</strong>:
Although all services are supported in the browser version of the SDK,
not all of the services are available in the default hosted build (using the
script tag provided above). Instructions on how to build a
custom version of the SDK with individual services are provided
in the "<a href="http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/building-sdk-for-browsers.html">Building the SDK for Browsers</a>" section of the SDK Developer Guide.
</p>

Service Name | Class Name | API Version | Allows CORS |
------------ | ---------- | ----------- | ----------- |
`));
