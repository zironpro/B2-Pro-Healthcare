"use client";

import { useEffect, useState } from "react";

import { Calendar, Globe, HeartPulse, Menu, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function Navbar() {
	const t = useTranslations("Navbar");
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const isRTL = locale === "ar";
	const [isScrolled, setIsScrolled] = useState(false);

	const NAV_LINKS = [
		{ name: t("links.home"), href: "/" },
		{ name: t("links.services"), href: "/services" },
		{ name: t("links.doctors"), href: "/doctors" },
		{ name: t("links.about"), href: "/about" },
		{ name: t("links.contact"), href: "/contact" },
	];

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
							{t("brand")}{" "}
							<span className="text-primary">{t("healthcare")}</span>
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden items-center gap-8 md:flex">
						{NAV_LINKS.map((link) => {
							const isActive = pathname === link.href;
							return (
								<Link
									className={cn(
										"group relative font-semibold text-base transition-colors",
										isActive
											? "text-primary"
											: "text-muted-foreground hover:text-primary"
									)}
									href={link.href}
									key={link.name}
								>
									{link.name}
									<span
										className={cn(
											"absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
											isActive ? "w-full" : "w-0"
										)}
									/>
								</Link>
							);
						})}
					</div>

					{/* Actions */}
					<div className="hidden items-center gap-4 md:flex">
						<Button
							className="flex items-center gap-2 font-bold"
							onClick={() =>
								router.replace(pathname, {
									locale: locale === "en" ? "ar" : "en",
								})
							}
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
								{t("emergency")}
							</span>
							<div className="flex items-center gap-1.5 font-extrabold text-lg text-primary">
								<Phone className="h-4 w-4" />
								<span dir="ltr">+1 234 567 890</span>
							</div>
						</div>
						<Button
							className="h-12 rounded-full px-8 text-base shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40"
							render={({ className }) => (
								<Link className={className} href="/booking">
									<Calendar className="mr-2.5 h-5 w-5" />
									{t("bookAppointment")}
								</Link>
							)}
							size="lg"
						/>
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
										{t("brand")}{" "}
										<span className="text-secondary">{t("healthcare")}</span>
									</span>
								</SheetTitle>
							</SheetHeader>
							<div className="flex flex-col gap-6 p-6">
								{NAV_LINKS.map((link) => {
									const isActive = pathname === link.href;
									return (
										<Link
											className={cn(
												"border-border border-b pb-2 font-semibold text-lg transition-colors",
												isActive
													? "border-primary text-primary"
													: "text-foreground hover:text-primary"
											)}
											href={link.href}
											key={link.name}
										>
											{link.name}
										</Link>
									);
								})}
								<div className="mt-4 flex flex-col gap-4">
									<div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
										<Phone className="h-5 w-5 text-secondary" />
										<div>
											<p className="font-medium text-slate-500 text-sm">
												{t("emergency")}
											</p>
											<p className="font-bold" dir="ltr">
												+1 234 567 890
											</p>
										</div>
									</div>
									<SheetClose
										render={({ onClick }) => (
											<Button
												className="h-12 w-full rounded-xl text-lg shadow-lg shadow-primary/20"
												render={({ className }) => (
													<Link
														className={className}
														href="/booking"
														onClick={(e) =>
															onClick?.(
																e as unknown as React.MouseEvent<HTMLButtonElement>
															)
														}
													>
														{t("bookAppointment")}
													</Link>
												)}
											/>
										)}
									/>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}
