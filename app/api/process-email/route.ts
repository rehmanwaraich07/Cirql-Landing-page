import { NextResponse } from "next/server";
import OpenAI from "openai";
import nodemailer from "nodemailer";
import Airtable from "airtable";

// OpenAI configuration
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Email configuration
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b5847d29dad1ee",
    pass: "ac3eb48984a8db",
  },
});

// Airtable configuration
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY });
const base = airtable.base(process.env.AIRTABLE_BASE_ID!);

async function sendEmailAndAddLead(
  senderEmail: string,
  coldEmail: string,
  aiResponse: string
) {
  try {
    // Send email to the tester
    await transporter.sendMail({
      from: "umairwaraich2019@gmail.com",
      to: senderEmail,
      subject: "Response to Your Cold Email",
      text: aiResponse,
    });

    // Store lead in Airtable
    await base("Leads").create([
      {
        fields: {
          Email: senderEmail,
          "Cold Email": coldEmail,
          Response: aiResponse,
        },
      },
    ]);

    console.log("Email sent and lead added successfully");
  } catch (error) {
    console.error("Error in background tasks:", error);
  }
}

export async function POST(request: Request) {
  try {
    const { coldEmail, senderEmail } = await request.json();

    // Generate response using OpenAI
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an expert email analyzer and response generator powered by Cirql.ai. Your primary functions are:
    
    1. ANALYZE whether an email is a cold sales email. Cold sales emails typically have these characteristics:
       - Unsolicited business proposition
       - Attempt to schedule a meeting or call
       - Pitching a product or service
       - Often uses sales language like "opportunity," "revolutionary," "game-changer"
       - Sender is unknown to the recipient
    
    2. RESPOND appropriately based on analysis:
    
       IF COLD SALES EMAIL:
       - Extract sender's name if present
       - Generate a polite response using the Cirql template
       - Include the payment link
       - Maintain professional, understanding tone
    
       IF NOT A COLD SALES EMAIL:
       - Explain that the test requires a cold sales email
       - Provide guidance on what constitutes a cold email
       - Encourage testing again with an appropriate example
    
    Always maintain the Cirql brand voice: professional, efficient, and solution-oriented.`,
        },
        {
          role: "user",
          content: `### Example Cold Email and Response:
    Cold Email: 
    Hey John,
    Hope this email finds you well. I'm Elon, and I've got a groundbreaking opportunity that could change the way your business works forever.
    We've just launched HyperEfficiency 3000—a revolutionary AI-driven productivity tool that boosts output by 110%. I think it could be a game-changer for your company.
    If you're interested, I'd love to schedule a quick 15-minute chat to discuss how this could benefit you.
    Let me know what time works for you.
    Best, Elon
    
    Response: 
    Hi Elon,
    We appreciate your desire to work with us! However, due to an increase in cold emails we've implemented Cirql to catch them and offer an alternative route to contacting us.
    
    The link below will allow you to send any sales materials to us with this original email. Now's the time to put together all the information we might want to see.
    
    We appreciate your understanding that there just isn't enough time in the day to meet with everyone that asks for a meeting, or review every cold email. Following this link will allow you to reach our team and propose your products in the most direct way possible.
    
    Link: https://cirqlapi.com/checkoutEmailPayment?customerEmail=dylnn%40ezpztech.io&emailMessageId=d923f7f6-846a-41cc-8489-5c68570bcd09
    
    Thank you for your understanding.
    
    Powered by cirql.ai ###
    
    ### Example Non-Cold Email Response:
    We have detected that the email you are using to test Cirql is not a cold sales email, so we cannot process your test at this time. A cold email typically:
    
    - Comes from an unknown sender
    - Pitches a product or service
    - Attempts to schedule a meeting
    - Uses sales language
    
    Please try again with a cold email that you might recently received or you can use the default email already written here for you to experience how Cirql handles cold sales emails.
    ###

    NOTE: Always use this same link ( https://cirqlapi.com/checkoutEmailPayment?customerEmail=dylnn%40ezpztech.io&emailMessageId=d923f7f6-846a-41cc-8489-5c68570bcd09 ) and return it as a text while generating the cold email response.
    
    Analyze this email and respond appropriately:
    ${coldEmail}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const aiResponse =
      chatCompletion.choices[0].message.content ||
      "We apologize, but we couldn't generate a response at this time.";

    // Trigger background tasks without waiting for them to complete
    sendEmailAndAddLead(senderEmail, coldEmail, aiResponse).catch(
      console.error
    );

    return NextResponse.json(
      { success: true, response: aiResponse },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing email:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "An error occurred while processing your request to test the Cirql",
      },
      { status: 500 }
    );
  }
}
