import Link from "next/link";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-accent-1/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-heading font-bold gradient-text">
              143IT
            </Link>
            <p className="mt-4 text-text/80 max-w-md">
              We Love IT — And We Make IT Love You Back.
            </p>
            <p className="mt-2 text-text/60 text-sm">
              Managed Services, Cloud Automation, and AI-Powered Infrastructure Solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-text hover:text-accent-1 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-text hover:text-accent-1 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-text hover:text-accent-1 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:hello@143it.com" className="text-text hover:text-accent-1 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-bold text-accent-1 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/managed-it" className="text-text/80 hover:text-accent-1 transition-colors">Managed IT</Link></li>
              <li><Link href="/services/cloud-modernization" className="text-text/80 hover:text-accent-1 transition-colors">Cloud Modernization</Link></li>
              <li><Link href="/services/automation-devops" className="text-text/80 hover:text-accent-1 transition-colors">Automation & DevOps</Link></li>
              <li><Link href="/services/ai-integration" className="text-text/80 hover:text-accent-1 transition-colors">AI Integration</Link></li>
              <li><Link href="/services/security-compliance" className="text-text/80 hover:text-accent-1 transition-colors">Security & Compliance</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-bold text-accent-1 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-text/80 hover:text-accent-1 transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-text/80 hover:text-accent-1 transition-colors">Blog</Link></li>
              <li><Link href="/case-studies" className="text-text/80 hover:text-accent-1 transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-text/80 hover:text-accent-1 transition-colors">Contact</Link></li>
              <li><Link href="/resources" className="text-text/80 hover:text-accent-1 transition-colors">Resources</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-1/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text/60 text-sm">
            © {new Date().getFullYear()} 143IT. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/legal/privacy" className="text-text/60 hover:text-accent-1 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="text-text/60 hover:text-accent-1 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
