import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "999",
      minutes: "1000",
      description: "Perfect for small law firms",
      features: [
        "1000 minutes monthly",
        "24/7 Call Handling",
        "Lead Qualification",
        "Basic Appointment Scheduling",
        "Monthly Analytics Report",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "2499",
      minutes: "3000",
      description: "Ideal for growing practices",
      features: [
        "3000 minutes monthly",
        "Everything in Basic",
        "Advanced Call Routing",
        "Custom Voice Training",
        "Calendar Integration",
        "Priority Support",
        "Quarterly Performance Review",
      ],
    },
    {
      name: "Enterprise",
      price: "4499",
      minutes: "6000",
      description: "For large law firms",
      features: [
        "6000 minutes monthly",
        "Everything in Professional",
        "Multiple Phone Lines",
        "Custom Dashboard Access",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Monthly Strategy Meetings",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that best fits your law firm's needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-8 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{plan.minutes} minutes included</p>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/demo">Get Started</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2">Are there any setup fees?</h3>
                <p className="text-gray-600">No, there are no hidden fees. The monthly price includes everything you need to get started.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What's included in the custom Enterprise plan?</h3>
                <p className="text-gray-600">Enterprise plans are tailored to your specific needs. Contact us to discuss your requirements and get a custom quote.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}