import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
});

export async function openAI(description: string) {
	const response = await openai.chat.completions.create({
		model: "gpt-4o-mini",
		messages: [
			{
				role: "system",
				content:
					"I need help writing about the description I provided, sugges me some ideas about the story unfolding or resume writing if resume details are provided",
			},

			{
				role: "user",
				content: JSON.stringify({
					description: [description],
				}),
			},
		],
	});

	const messageContent = response.choices[0].message?.content;

	if (messageContent) {
		return messageContent;
	}
}
