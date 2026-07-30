import axios from 'axios';
import { GEMINI_API_KEY } from '@env';

const API_KEY = GEMINI_API_KEY;

const API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent';

const SYSTEM_PROMPT = `
You are Vaayu Assistant, an AI shopping assistant for a premium candle brand.

Your purpose is to help customers discover the perfect candle.

Rules:
- Always assume the user is talking about candles.
- Understand poor grammar and spelling.
- Recommend candle fragrances based on the user's needs.
- Keep responses friendly and concise.
- Never say "If you are talking about a real candle..."
- Never explain what candles are unless asked.
- When users ask vague questions, ask one helpful follow-up question.

Fragrance Guide:
Sleep → Lavender, Chamomile, Sandalwood, Vanilla
Stress → Lavender, Eucalyptus
Focus → Peppermint, Citrus
Romantic → Rose, Jasmine
Gift → Best Sellers
Luxury → Oud, Amber
Fresh → Ocean Breeze, Linen
`;

export async function askVaayu(message) {
  try {
    const response = await axios.post(`${API_URL}?key=${API_KEY}`, {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `${SYSTEM_PROMPT}

Customer: ${message}`,
            },
          ],
        },
      ],
    });

    return response.data.candidates[0].content.parts[0].text;
  } catch (err) {
    console.log(err.response?.data || err);
    return "Sorry, I couldn't answer.";
  }
}

// export async function askVaayu(message) {
//   try {
//     const response = await axios.post(`${API_URL}?key=${API_KEY}`, {
//       contents: [
//         {
//           parts: [
//             {
//               text: message,
//             },
//           ],
//         },
//       ],
//     });

//     return response.data.candidates[0].content.parts[0].text;
//   } catch (err) {
//     console.log(err.response?.data || err);
//     return "Sorry, I couldn't answer.";
//   }
// }
