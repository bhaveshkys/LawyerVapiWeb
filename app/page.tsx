import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Phone, Clock, DollarSign, Calendar } from 'lucide-react';
import VapiDemo from '@/components/VapiDemo';
import { Hero } from '@/components/Hero';
import { HoverEffect } from '@/components/ui/card-hover-effect';

export default function Home() {
  const benefits = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Never Miss a Call',
      description: '24/7 availability ensures every potential client is attended to',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Save Time',
      description: 'Automated call handling frees up your staff for more important tasks',
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Reduce Costs',
      description: 'More affordable than traditional call centers or in-house staff',
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Smart Scheduling',
      description: 'Automated appointment booking that syncs with your calendar',
    },
  ];

  const faqs = [
    {
      question: 'Do I need to install any software?',
      answer: 'No, our solution is completely managed by us. There\'s no software to install or maintain.',
    },
    {
      question: 'How long does it take to set up?',
      answer: 'We can have your AI assistant up and running within 48 hours of our initial consultation.',
    },
    {
      question: 'Is it HIPAA compliant?',
      answer: 'Yes, our system is fully HIPAA compliant and ensures all sensitive information is handled securely.',
    },
    {
      question: 'What happens if the AI can\'t answer a question?',
      answer: 'The AI is trained to gracefully handle uncertain situations and can transfer calls to your staff when needed.',
    },
  ];

  return (
    <div className='pt-10'>
      
      {/* Hero Section */}
      <Hero />

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Transform Your Client Communication
          </h2>
          <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={benefits} />
        </div>
        </div>
      </section>
      
      {/* Demo Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">See It In Action</h2>
              <VapiDemo />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Modernize Your Law Firm?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with a free demo call today.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-lg"
          >
            <Link href="/demo">Schedule Your Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}