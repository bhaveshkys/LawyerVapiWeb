'use client';

import { useEffect, useState, useRef } from 'react';
import Vapi from '@vapi-ai/web';
import NeumorphicButton from './NeumorphicButton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, X } from 'lucide-react';

export default function VapiDemo() {
  const [status, setStatus] = useState('idle'); // idle, connecting, talking, error, completed
  const [callId, setCallId] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const vapiRef = useRef<any>(null);

  const startCall = async () => {
    if (status !== 'idle' && status !== 'error' && status !== 'completed') return;
    
    setStatus('connecting');
    setSubmitSuccess(false);
    
    try {
      // Initialize Vapi with your public key
      const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || '');
      vapiRef.current = vapi;
      
      // Set up event listeners
      vapi.on("call-start", () => {
        setStatus('talking');
      });
      
      vapi.on("call-end", () => {
        setStatus('completed');
      });
      
      vapi.on("error", (e: any) => {
        console.error(e);
        setStatus('error');
      });
      
      // Start the call with your assistant configuration
      const call = await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID,{
        variableValues:{
            lawfirm:"Lexivo"
        }
      });
      
      // Store the call ID
      if (call && call.id) {
        setCallId(call.id);
        console.log("Call ID:", call.id);
      }
    } catch (error) {
      console.error("Error starting call:", error);
      setStatus('error');
    }
  };

  const stopCall = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
      setStatus('completed');
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !callId) return;
    
    setIsSubmitting(true);
    
    try {
      // Add a delay to allow time for call processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const response = await fetch('/api/send-call-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          callId,
        }),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setEmail('');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert(error instanceof Error ? error.message : 'Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetDemo = () => {
    setStatus('idle');
    setCallId(null);
    setSubmitSuccess(false);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
      }
    };
  }, []);

  return (
    <div className="aspect-video bg-white rounded-lg  p-8 flex flex-col items-center justify-center relative">
      {status === 'completed' && (
        <button 
          onClick={resetDemo} 
          className="absolute top-4 right-4 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          aria-label="Close form"
        >
          <X className="h-4 w-4 text-gray-700" />
        </button>
      )}
      
      <h3 className="text-2xl font-semibold mb-6">Try Our AI Assistant</h3>
      
      {/* Only show the Vapi button when not in completed state or after email submission */}
      {(status !== 'completed' || submitSuccess) && (
        <NeumorphicButton 
          status={status as 'idle' | 'connecting' | 'talking' | 'error'} 
          onStart={startCall} 
          onStop={stopCall} 
        />
      )}
      
      {/* Only show email form after call ends and before successful submission */}
      {status === 'completed' && !submitSuccess && (
        <div className="w-full max-w-md mt-8">
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="text-center mb-4">
              <p className="text-gray-700">
                Would you like to receive a summary and recording of this conversation?
              </p>
            </div>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="px-4"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </form>
        </div>
      )}
      
      {/* Show success message after email submission */}
      {status === 'completed' && submitSuccess && (
        <div className="text-center mt-8">
          <div className="mb-4 text-green-600 font-medium">
            Thank you! We've sent the call details to your email.
          </div>
          <Button onClick={resetDemo} className="mt-2">
            Start a new conversation
          </Button>
        </div>
      )}
      
      {status !== 'completed' && (
        <p className="mt-6 text-gray-600 text-center max-w-md">
          Click the microphone button to speak with our AI receptionist. Try asking about legal services, 
          describing a potential case, or scheduling a consultation with an attorney.
        </p>
      )}
    </div>
  );
}