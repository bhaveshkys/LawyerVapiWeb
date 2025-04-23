import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { SendMailOptions } from 'nodemailer';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

// Helper function moved outside the request handler
async function waitForCallToEnd(callId: string, apiKey: string, retryCount = 0, maxRetries = 15): Promise<any> {
  const response = await fetch(`https://api.vapi.ai/call/${callId}`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch call details from Vapi');
  }
  
  const data = await response.json();
  
  if (data.status === "ended") {
    return data;
  }
  
  if (retryCount >= maxRetries) {
    throw new Error('Call processing timeout. Please try again later.');
  }
  
  await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
  return waitForCallToEnd(callId, apiKey, retryCount + 1, maxRetries);
}

export async function POST(request: Request) {
  try {
    const { email, callId } = await request.json();

    if (!email || !callId) {
      return NextResponse.json(
        { error: 'Email and callId are required' },
        { status: 400 }
      );
    }

    // Fetch call details from Vapi API
    const vapiResponse = await fetch(`https://api.vapi.ai/call/${callId}`, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_VAPI_PRIVATE_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!vapiResponse.ok) {
      throw new Error('Failed to fetch call details from Vapi');
    }

    const callData = await vapiResponse.json();
    
    // If call is not ended, wait for it to end
    const finalCallData = callData.status === "ended" 
      ? callData 
      : await waitForCallToEnd(callId, process.env.NEXT_PUBLIC_VAPI_PRIVATE_KEY || '');
    
    // Extract call information - specifically the fields we need
    const rawTranscript = finalCallData.transcript || 'Transcript not available.';
    const summary = finalCallData.summary || 'Summary not available.';
    
    // Format the transcript to make it more readable
    const formattedTranscript = rawTranscript
      .replace(/\nAI:/g, '\n\n<strong>AI:</strong>\n')
      .replace(/\nUser:/g, '\n\n<strong>User:</strong>\n');
    
    const audioUrl = finalCallData.stereoRecordingUrl || finalCallData.recordingUrl || '';
    
    // Get structured data
    const structuredData = finalCallData.analysis?.structuredData || {};
    
    // Format structured data for display
    let structuredDataContent = '<p>No structured data available.</p>';
    if (structuredData && Object.keys(structuredData).length > 0) {
      structuredDataContent = `
        <div style="margin-bottom: 15px;">
          <pre style="white-space: pre-wrap; font-family: monospace; background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow: auto;">
            ${JSON.stringify(structuredData, null, 2)}
          </pre>
        </div>
      `;
    }
    
    // Create Google Calendar meeting link
    const startTime = new Date();
    startTime.setDate(startTime.getDate() + 3); // Schedule 3 days from now
    
    const endTime = new Date(startTime);
    endTime.setHours(endTime.getHours() + 1); // 1 hour meeting
    
    const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Legal Consultation')}&details=${encodeURIComponent('Follow-up consultation based on our AI conversation')}&dates=${startTime.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 15)}/${endTime.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 15)}&location=${encodeURIComponent('Video Call')}&sf=true&output=xml`;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    
    // Send email
    const mailOptions: SendMailOptions = {
      from: `"Hamlin & McGill Law" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your Legal Consultation Summary',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">Your Legal Consultation Summary</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #444;">Conversation Summary</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; font-family: sans-serif; font-size: 0.9em; line-height: 1.5;">
              ${summary}
            </div>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #444;">Structured Data</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; font-family: sans-serif; font-size: 0.9em; line-height: 1.5;">
              ${structuredDataContent}
            </div>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #444;">Conversation Transcript</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-line; font-family: sans-serif; font-size: 0.9em; line-height: 1.5;">
              ${formattedTranscript}
            </div>
          </div>
          
          ${audioUrl ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #444;">Conversation Recording</h3>
            <p><a href="${audioUrl}" style="color: #0066cc; text-decoration: none; font-weight: bold;">Listen to your conversation</a></p>
            <p style="font-size: 0.9em; color: #666;">Note: This recording will be available for 30 days.</p>
          </div>
          ` : ''}
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <h3 style="color: #444; margin-top: 0;">Schedule a Follow-up Consultation</h3>
            <p style="line-height: 1.6;">If you'd like to discuss your legal matters further with one of our attorneys, please schedule a consultation.</p>
            <a href="${calendarLink}" style="display: inline-block; background-color: #0066cc; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 10px;">Schedule Consultation</a>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 0.9em; color: #666;">
            <p>Thank you for using our AI Legal Assistant. If you have any questions, please reply to this email or call us at (555) 123-4567.</p>
            <p>Hamlin & McGill Law Firm<br>123 Legal Street, Suite 100<br>Chicago, IL 60601</p>
          </div>
        </div>
      `,
      attachments: [], // No attachments
    };

    // Remove the audio attachment code
    // if (audioUrl) {
    //   try {
    //     const audioResponse = await fetch(audioUrl);
    //     if (audioResponse.ok) {
    //       const audioBuffer = await audioResponse.arrayBuffer();
    //       mailOptions.attachments = [
    //         {
    //           filename: 'conversation-recording.wav',
    //           content: Buffer.from(audioBuffer),
    //         },
    //       ];
    //     }
    //   } catch (error) {
    //     console.error('Error downloading audio:', error);
    //   }
    // }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}