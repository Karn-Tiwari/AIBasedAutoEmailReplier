const openai = require("../config/openAIConfig");

async function categorizeEmail(content) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Categorize the following email: ${content}`,
    max_tokens: 50,
  });

  const category = response.data.choices[0].text.trim().toLowerCase();
  if (category.includes("interested")) return "Interested";
  if (category.includes("not interested")) return "Not Interested";
  if (category.includes("more information")) return "More Information";
  return "Uncategorized";
}

module.exports = categorizeEmail;
