const { google } = require("googleapis");
const outlookClient = require("../config/outlookOAuth");

async function fetchEmailsGmail(auth) {
  const gmail = google.gmail({ version: "v1", auth });
  const res = await gmail.users.messages.list({ userId: "me", maxResults: 10 });
  return res.data.messages;
}

async function fetchEmailsOutlook() {
  const messages = await outlookClient.api("/me/messages").get();
  return messages.value;
}

module.exports = {
  fetchEmailsGmail,
  fetchEmailsOutlook,
};
