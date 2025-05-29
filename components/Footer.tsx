import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* Logo Section with Monogram + Name + Tagline */}
            <div className="mb-4">
              <div className="flex items-center space-x-3 mb-2">
                {/* Monogram */}
                <Image
                  src="/images/LexievoMonogram.png"
                  alt="Lexievo Monogram"
                  width={40}
                  height={40}
                  className="h-10 w-10 "
                />
                {/* Company Name */}
                <Image
                  src="/images/LexievoWithOutTag.png"
                  alt="Lexievo"
                  width={120}
                  height={32}
                  className="h-8 w-auto brightness-0 saturate-100"
                />
              </div>
              {/* Tagline */}
              <div className="ml-13">
                <Image
                  src="/images/tagLexievo.png"
                  alt="Lexievo Tagline"
                  width={150}
                  height={20}
                  className="h-5 w-auto brightness-0 saturate-100"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Revolutionizing legal communication with AI-powered voice assistants.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-sm text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-gray-500">
                <Facebook className="h-5 w-5" />
              </a> */}
              <a href="https://x.com/LexievoAi" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/lexievo-ai-9b9603368/" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/lexievo.ai/?hl=en" className="text-gray-400 hover:text-gray-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:Info@lexievo.com" className="text-gray-400 hover:text-gray-500">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center">
            © 2024 Lexievo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;