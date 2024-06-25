const { Client } = require("@microsoft/microsoft-graph-client");
const {
  TokenCredentialAuthenticationProvider,
} = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");
const { DeviceCodeCredential } = require("@azure/identity");
require("dotenv").config();

const credential = new DeviceCodeCredential({
  clientId: process.env.OUTLOOK_CLIENT_ID,
  tenantId: process.env.OUTLOOK_TENANT_ID,
});

const authProvider = new TokenCredentialAuthenticationProvider(credential, {
  scopes: ["https://graph.microsoft.com/.default"],
});

const client = Client.initWithMiddleware({ authProvider });

module.exports = client;
