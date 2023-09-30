import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { ChatCompletionRequestMessage } from "openai";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limits";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const istuctionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a code generator and you must answer only in markdown code snippets, use code comment for explanation",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", {
        status: 500,
      });
    }

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse("Free trial has expired", { status: 403 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [istuctionMessage, ...messages],
    });

    await incrementApiLimit();

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CODEGENERATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
