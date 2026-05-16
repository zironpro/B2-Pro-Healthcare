"use client";

import Link from "next/link";

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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
	return (
		<footer className="mt-auto bg-slate-900 py-20 text-slate-300">
			<div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 md:grid-cols-2 lg:grid-cols-4">
				{/* Brand & Mission */}
				<div className="space-y-8">
					<div className="flex items-center gap-3">
						<div className="rounded-xl bg-primary p-2.5 text-primary-foreground">
							<HeartPulse className="h-7 w-7" />
						</div>
						<span className="font-bold text-2xl text-white tracking-tight">
							B2 Pro <span className="text-secondary">Healthcare</span>
						</span>
					</div>
					<p className="text-lg text-slate-400 leading-relaxed">
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
								className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:bg-primary hover:text-white"
								href="/"
								key={social.name}
							>
								<social.Icon className="h-5 w-5" />
							</a>
						))}
					</div>
				</div>

				{/* Quick Links */}
				<div className="space-y-8">
					<h4 className="font-bold text-white text-xl">Quick Links</h4>
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
									className="flex items-center gap-2 text-base transition-colors hover:text-primary"
									href={link.href}
								>
									<span className="h-1.5 w-1.5 rounded-full bg-secondary" />
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Contact Info */}
				<div className="space-y-8">
					<h4 className="font-bold text-white text-xl">Contact Us</h4>
					<ul className="space-y-6">
						<li className="flex items-start gap-4">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800">
								<Phone className="h-5 w-5 text-secondary" />
							</div>
							<div>
								<p className="mb-1 font-bold text-slate-500 text-xs uppercase tracking-wider">
									Emergency
								</p>
								<p className="font-bold text-lg text-white">+1 234 567 890</p>
							</div>
						</li>
						<li className="flex items-start gap-4">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800">
								<MapPin className="h-5 w-5 text-secondary" />
							</div>
							<p className="text-base leading-relaxed">
								123 Healthcare Ave, Medical District, NY 10001
							</p>
						</li>
						<li className="flex items-start gap-4">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800">
								<Mail className="h-5 w-5 text-secondary" />
							</div>
							<p className="text-base">support@zironprohealth.com</p>
						</li>
					</ul>
				</div>

				{/* Newsletter */}
				<div className="space-y-8">
					<h4 className="font-bold text-white text-xl">Newsletter</h4>
					<p className="text-base text-slate-400">
						Get the latest health tips and updates delivered to your inbox
						weekly.
					</p>
					<div className="space-y-3">
						<Input
							className="h-12 rounded-xl border-slate-700 bg-slate-800 text-white outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
							placeholder="Your email address"
							type="email"
						/>
						<Button className="h-12 w-full rounded-xl font-bold text-base shadow-lg shadow-primary/20">
							Subscribe Now
						</Button>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="mx-auto mt-20 flex max-w-[1600px] flex-col items-center justify-between gap-6 border-slate-800 border-t px-6 pt-8 text-slate-500 text-sm md:flex-row">
				<p>&copy; 2026 B2 Pro Healthcare. All rights reserved.</p>
				<div className="flex gap-8">
					<Link className="transition-colors hover:text-white" href="/privacy">
						Privacy Policy
					</Link>
					<Link className="transition-colors hover:text-white" href="/terms">
						Terms of Service
					</Link>
					<Link className="transition-colors hover:text-white" href="/cookies">
						Cookie Policy
					</Link>
				</div>
			</div>
		</footer>
	);
}
