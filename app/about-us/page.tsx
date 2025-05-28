'use client';

import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Full Width Image */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                About Lexievo
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Revolutionizing legal client intake with AI-powered voice assistance
              </p>
            </div>
            
            {/* Full Width Horizontal Image */}
            <div className="relative w-full h-64 md:h-96 mb-12">
              <Image
                src="/images/aboutUs.png"
                alt="About Lexievo"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Our Story */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Lexievo was founded with a single mission: to help law firms stay accessible, responsive, and client-focused—without stretching internal resources. In an industry where time is currency and communication is key, we knew there had to be a better way to manage incoming inquiries and client engagement. That's how Lexievo was born.
                </p>
                <p>
                  Our founders bring together deep experience in both legal services and artificial intelligence. This intersection has allowed us to build a solution that's not only technically advanced but also genuinely understands the legal environment. Our AI receptionists are trained using real legal dialogue patterns, ensuring they sound appropriate and know how to respond based on context.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  We didn't want to create another generic virtual assistant. We wanted to build something law firms could actually rely on—something intelligent, accurate, and context-aware. Lexievo is more than a phone-answering system. It's a virtual receptionist that mirrors the quality of an in-house assistant but without the costs or limitations.
                </p>
                <p>
                  Our platform continuously improves based on real interactions. We update our knowledge base regularly to keep up with changing practice areas, common client queries, and the latest in communication standards. This ensures your firm stays ahead and delivers a consistent, polished experience to every caller.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Values</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  At Lexievo, we're driven by values: innovation, service, trust, and performance. We exist to help law firms work smarter, reduce administrative friction, and grow sustainably. Your front desk is your firm's first impression—Lexievo ensures it's always your best one.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  We're easy to reach—because that's what we promise your clients, too. Whether you're exploring Lexievo for your firm, need support as a current client, or just want to learn more about how we can help, our team is always ready to connect.
                </p>
                <p>
                  Our support and sales team operates remotely across time zones to ensure fast response times. We value direct, clear communication—just like you do—and we're committed to offering honest, transparent answers to all your questions. From pricing to setup to integration, we'll walk you through every step.
                </p>
                <p>
                  If you prefer email, drop us a message anytime at <a href="mailto:info@lexievo.com" className="text-blue-600 hover:text-blue-800">info@lexievo.com</a> and we'll typically reply within a few hours during business days. If it's urgent or you'd like a conversation, call us at +1 (XXX) XXX-XXXX. We're happy to schedule a live demo or consultation to show how Lexievo fits into your practice.
                </p>
                <p>
                  We also offer personalized onboarding and support plans. Whether you're a tech-savvy firm or just beginning to explore automation, we'll tailor our setup and training to suit your comfort level. Our team is here to make the transition to Lexievo smooth and stress-free.
                </p>
              </div>
            </div>

            {/* Careers Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Careers</h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  At Lexievo, we're building something truly special: a smarter, faster, more effective way for law firms to manage communication. As we grow, we're looking for people who are excited by innovation, obsessed with quality, and motivated to build tools that professionals actually use and trust.
                </p>
                <p>
                  We are a remote-first company with team members from diverse backgrounds in legal, technology, AI, and operations. Every role here contributes directly to our mission—and every voice matters. Whether you're working on client success, AI training, software development, or marketing, your input shapes the future of how law firms work.
                </p>
                <p>
                  Our work is fast-paced but rewarding. We're obsessed with performance, attention to detail, and solving real-world problems with smart technology. If you've ever been frustrated by outdated workflows, bad customer experiences, or inefficient legal systems, you'll fit right in. We're not here to maintain the status quo—we're here to improve it.
                </p>
                <p>
                  We invest in our people with competitive compensation, flexibility, and a culture of ownership. We encourage team members to lead, learn, and grow—not just in their roles, but across areas of interest. Innovation at Lexievo comes from collaboration, curiosity, and bold thinking.
                </p>
                <p>
                  If you're looking for a mission-driven startup where your work matters and your ideas are valued, Lexievo might be your next move. Check out our open positions or send us your resume and a short note about what you're passionate about. We'd love to hear from you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}