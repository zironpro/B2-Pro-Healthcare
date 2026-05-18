"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Calendar, Globe, HeartPulse, Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import { useI18n } from "@/context/i18n-context";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
	{ name: "Home", href: "/" },
	{ name: "Services", href: "/services" },
	{ name: "Doctors", href: "/doctors" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

export function Navbar() {
	const { locale, setLocale, isRTL } = useI18n();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				"fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-in-out",
				isScrolled
					? "border-border border-b bg-white/80 py-4 backdrop-blur-md"
					: "bg-transparent py-7"
			)}
		>
			<div className="mx-auto max-w-[1600px] px-4 md:px-8">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link className="group flex items-center gap-3" href="/">
						<div className="rounded-xl bg-primary p-2.5 text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
							<HeartPulse className="h-7 w-7" />
						</div>
						<span className="font-bold text-2xl text-foreground tracking-tight">
							B2 Pro <span className="text-primary">Healthcare</span>
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden items-center gap-8 md:flex">
						{NAV_LINKS.map((link) => (
							<Link
								className="group relative font-semibold text-base text-muted-foreground transition-colors hover:text-primary"
								href={link.href}
								key={link.name}
							>
								{link.name}
								<span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
							</Link>
						))}
					</div>

					{/* Actions */}
					<div className="hidden items-center gap-4 md:flex">
						<Button
							className="flex items-center gap-2 font-bold"
							onClick={() => setLocale(locale === "en" ? "ar" : "en")}
							size="sm"
							variant="ghost"
						>
							<Globe className="h-4 w-4" />
							{locale === "en" ? "العربية" : "English"}
						</Button>
						<div
							className={cn(
								"mr-6 flex flex-col items-end",
								isRTL && "mr-0 ml-6 items-start"
							)}
						>
							<span className="font-bold text-muted-foreground text-sm uppercase tracking-widest">
								Emergency
							</span>
							<div className="flex items-center gap-1.5 font-extrabold text-lg text-primary">
								<Phone className="h-4 w-4" />
								<span>+1 234 567 890</span>
							</div>
						</div>
						<Button
							className="h-12 rounded-full px-8 text-base shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40"
							size="lg"
						>
							<Calendar className="mr-2.5 h-5 w-5" />
							Book Appointment
						</Button>
					</div>

					{/* Mobile Menu Toggle */}
					<Sheet>
						<SheetTrigger
							render={(props) => (
								<Button
									{...props}
									className="h-10 w-10 p-2 text-foreground md:hidden"
									size="icon"
									variant="ghost"
								>
									<Menu className="h-6 w-6" />
								</Button>
							)}
						/>
						<SheetContent className="w-[300px] p-0 sm:w-[400px]" side="right">
							<SheetHeader className="border-b p-6 text-left">
								<SheetTitle className="flex items-center gap-3">
									<div className="rounded-xl bg-primary p-2 text-primary-foreground">
										<HeartPulse className="h-6 w-6" />
									</div>
									<span className="font-bold text-foreground text-xl tracking-tight">
										B2 Pro <span className="text-secondary">Healthcare</span>
									</span>
								</SheetTitle>
							</SheetHeader>
							<div className="flex flex-col gap-6 p-6">
								{NAV_LINKS.map((link) => (
									<Link
										className="border-border border-b pb-2 font-semibold text-foreground text-lg transition-colors hover:text-primary"
										href={link.href}
										key={link.name}
									>
										{link.name}
									</Link>
								))}
								<div className="mt-4 flex flex-col gap-4">
									<div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
										<Phone className="h-5 w-5 text-secondary" />
										<div>
											<p className="font-medium text-slate-500 text-sm">
												Emergency Contact
											</p>
											<p className="font-bold">+1 234 567 890</p>
										</div>
									</div>
									<Button className="h-12 w-full rounded-xl text-lg shadow-lg shadow-primary/20">
										Book Appointment
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}
