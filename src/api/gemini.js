import gymData from "../data/gymData";

const SCALEDOWN_URL = "https://api.scaledown.xyz/compress/raw/";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function askGemini(question) {
  const headers = {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json'
  };

  const payload = {
    context: `You are a gym FAQ assistant. Answer ONLY using the following data. If unsure, say "Please contact the gym staff."

DATA:
${JSON.stringify(gymData, null, 2)}`,
    prompt: question,
    model: "gpt-4o",
    scaledown: {
      rate: "auto"
    }
  };

  const response = await fetch(SCALEDOWN_URL, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`ScaleDown API error: ${response.status}`);
  }

  const result = await response.json();
  return result.response || result.compressed_response || result.answer || "Sorry, I couldn't process your question.";
}
