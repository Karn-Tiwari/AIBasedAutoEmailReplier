const openai = require("../config/openAIConfig");

async function generateReply(content, category) {
  let prompt = "";

  switch (category) {
    case "Interested":
      prompt = `Generate a reply for an interested prospect: ${content}`;
      break;
    case "Not Interested":
      prompt = `Generate a polite decline reply: ${content}`;
      break;
    case "More Information":
      prompt = `Generate a reply requesting to schedule a demo call: ${content}`;
      break;
    default:
      prompt = `Generate a generic reply: ${content}`;
  }

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 150,
  });

  return response.data.choices[0].text.trim();
}

module.exports = generateReply;
