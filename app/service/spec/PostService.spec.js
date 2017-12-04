var pact = require('@pact-foundation/pact-node');
var path = require('path');
const PostService = require('../PostService');

var opts = {
    providerBaseUrl: 'http://localhost:8081',
    providerStatesUrl: 'http://localhost:8081/states',
    providerStatesSetupUrl: 'http://localhost:8081/setup',
    pactBrokerUrl: 'https://elabor8.pact.dius.com.au/',
    pactBrokerUsername: 'sSR6cB6Jt8UE8dyx5pc5QD7V8x2Of',    //    Username for Pact Broker basic authentication. Optional
    pactBrokerPassword: "krnrmVVeYYDEMmjeysh8r8GoK0iktOm",
    pactUrls: ['https://elabor8.pact.dius.com.au//pacts/provider/Posts%20Provider/consumer/My%20Consumer/latest']
};

pact.verifyPacts(opts).then(() => {
    console.log('success');
    process.exit(0);
}).catch((error) => {
    console.log('failed', error);
    process.exit(1);
});
