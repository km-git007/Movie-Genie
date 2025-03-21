import OpenAI from "openai";

const openAi = new OpenAI({
   apiKey: import.meta.env.VITE_OPEN_AI_KEY,
   dangerouslyAllowBrowser: true,
});

export default openAi;