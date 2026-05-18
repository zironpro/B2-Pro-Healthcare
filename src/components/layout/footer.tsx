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
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Link } from "@/i18n/routing";

export function Footer() {
	const t = useTranslations("Footer");

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
							{t("brand")}{" "}
							<span className="text-secondary">{t("healthcare")}</span>
						</span>
					</div>
					<p className="text-lg text-slate-400 leading-relaxed">
						{t("mission")}
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
					<h4 className="font-bold text-white text-xl">
						{t("quickLinksTitle")}
					</h4>
					<ul className="space-y-5">
						{[
							{ name: t("quickLinks.findDoctor"), href: "/doctors" },
							{ name: t("quickLinks.services"), href: "/services" },
							{ name: t("quickLinks.book"), href: "/book" },
							{ name: t("quickLinks.about"), href: "/about" },
							{ name: t("quickLinks.careers"), href: "/careers" },
							{ name: t("quickLinks.contact"), href: "/contact" },
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
					<h4 className="font-bold text-white text-xl">{t("contactTitle")}</h4>
					<ul className="space-y-6">
						<li className="flex items-start gap-4">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800">
								<Phone className="h-5 w-5 text-secondary" />
							</div>
							<div>
								<p className="mb-1 font-bold text-slate-500 text-xs uppercase tracking-wider">
									{t("emergency")}
								</p>
								<p className="font-bold text-lg text-white" dir="ltr">
									+1 234 567 890
								</p>
							</div>
						</li>
						<li className="flex items-start gap-4">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800">
								<MapPin className="h-5 w-5 text-secondary" />
							</div>
							<p className="text-base leading-relaxed">{t("address")}</p>
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
					<h4 className="font-bold text-white text-xl">
						{t("newsletterTitle")}
					</h4>
					<p className="text-base text-slate-400">{t("newsletterDesc")}</p>
					<div className="space-y-3">
						<Input
							className="h-12 rounded-xl border-slate-700 bg-slate-800 text-white outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
							placeholder={t("emailPlaceholder")}
							type="email"
						/>
						<Button className="h-12 w-full rounded-xl font-bold text-base shadow-lg shadow-primary/20">
							{t("subscribe")}
						</Button>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="mx-auto mt-20 flex max-w-[1600px] flex-col items-center justify-between gap-6 border-slate-800 border-t px-6 pt-8 text-slate-500 text-sm md:flex-row">
				<p>{t("copyright")}</p>
				<div className="flex gap-8">
					<Link className="transition-colors hover:text-white" href="/privacy">
						{t("privacy")}
					</Link>
					<Link className="transition-colors hover:text-white" href="/terms">
						{t("terms")}
					</Link>
					<Link className="transition-colors hover:text-white" href="/cookies">
						{t("cookies")}
					</Link>
				</div>
			</div>
		</footer>
	);
}
