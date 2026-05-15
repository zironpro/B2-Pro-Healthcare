"use client";

import {
  Globe,
  HeartPulse,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20 mt-auto">
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Mission */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2.5 rounded-xl text-primary-foreground">
              <HeartPulse className="w-7 h-7" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              B2 Pro <span className="text-secondary">Healthcare</span>
            </span>
          </div>
          <p className="text-lg leading-relaxed text-slate-400">
            Pioneering the future of medical care with premium, patient-centered
            solutions. B2 Pro Healthcare is your trusted partner in well-being.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Globe, name: "website" },
              { Icon: MessageCircle, name: "chat" },
              { Icon: Send, name: "newsletter" },
              { Icon: Share2, name: "share" },
            ].map((social) => (
              <a
                key={social.name}
                href="/"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <social.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-8">
          <h4 className="text-white font-bold text-xl">Quick Links</h4>
          <ul className="space-y-5">
            {[
              { name: "Find a Doctor", href: "/doctors" },
              { name: "Our Services", href: "/services" },
              { name: "Book Appointment", href: "/book" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-base hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <h4 className="text-white font-bold text-xl">Contact Us</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">
                  Emergency
                </p>
                <p className="text-lg font-bold text-white">+1 234 567 890</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-base leading-relaxed">
                123 Healthcare Ave, Medical District, NY 10001
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-base">support@zironprohealth.com</p>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-8">
          <h4 className="text-white font-bold text-xl">Newsletter</h4>
          <p className="text-base text-slate-400">
            Get the latest health tips and updates delivered to your inbox
            weekly.
          </p>
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-slate-800 border-slate-700 h-12 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white"
            />
            <Button className="w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1600px] mx-auto px-6 mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
        <p>&copy; 2026 B2 Pro Healthcare. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/cookies" className="hover:text-white transition-colors">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
