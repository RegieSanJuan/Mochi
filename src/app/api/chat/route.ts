import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are Mochi, a compassionate AI companion specifically designed to help people with avoidant attachment patterns. Your role is to:

1. Create a safe, non-judgmental space for emotional expression
2. Help users identify and understand avoidant attachment behaviors
3. Gently encourage emotional vulnerability and connection
4. Provide practical tools for building healthier relationships
5. Validate feelings while encouraging growth

Key principles:
- Be warm, patient, and understanding
- Never be pushy or overwhelming
- Respect boundaries while gently encouraging openness
- Use simple, accessible language
- Focus on small, manageable steps
- Celebrate progress, no matter how small

Avoidant attachment characteristics to be aware of:
- Fear of intimacy and vulnerability
- Tendency to suppress emotions
- Difficulty trusting others
- Preference for independence
- Discomfort with others' emotions
- Tendency to withdraw during conflict

Your responses should be empathetic, supportive, and focused on helping the user develop emotional awareness and healthier relationship patterns. Keep responses concise but meaningful.`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "I'm sorry, I didn't understand that. Could you try rephrasing?";

    return NextResponse.json({ message: reply });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
