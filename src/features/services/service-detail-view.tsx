"use client";

import Image from "next/image";
import { notFound } from "next/navigation";

import {
	Activity,
	ArrowLeft,
	CheckCircle2,
	HeartPulse,
	Send,
	Shield,
	Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Link } from "@/i18n/routing";

import { SERVICES } from "./data/data";

const ICON_MAP = {
	HeartPulse: HeartPulse,
	Activity: Activity,
	Users: Users,
	Shield: Shield,
} as const;

export function ServiceDetailView({ id }: { id: string }) {
	const t = useTranslations("Services");
	const tContent = useTranslations("ContentServices");

	const service = SERVICES.find((s) => s.id === id);

	if (!service) {
		notFound();
	}

	const strictServiceId = service.id as
		| "general-care"
		| "cardiology"
		| "pediatrics"
		| "diagnostics";
	const IconComponent =
		ICON_MAP[service.icon as keyof typeof ICON_MAP] || HeartPulse;

	// Retrieve localized arrays safely using tContent.raw
	const localizedBenefits = tContent.raw(
		`${strictServiceId}.benefits`
	) as string[];
	const localizedProcedures = tContent.raw(
		`${strictServiceId}.procedures`
	) as string[];

	return (
		<main className="flex min-h-screen flex-col bg-white">
			{/* Immersive Hero Section */}
			<section className="relative w-full bg-white px-4 pt-28 pb-6 lg:pt-32 lg:pb-8">
				<div className="relative mx-auto min-h-[300px] max-w-[1600px] overflow-hidden rounded-[4rem] bg-slate-900 lg:min-h-[400px]">
					<Image
						alt={tContent(`${strictServiceId}.title`)}
						className="object-cover opacity-45 mix-blend-overlay"
						fill
						priority
						src={service.image}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent rtl:bg-gradient-to-l" />

					<div className="relative z-10 flex h-full flex-col justify-center px-8 py-12 lg:px-20 lg:py-20">
						<div className="max-w-3xl space-y-6">
							<Link
								className="inline-flex items-center gap-2 font-bold text-slate-400 text-sm transition-colors hover:text-white"
								href="/services"
							>
								<ArrowLeft className="h-4 w-4 rtl:rotate-180" />
								{t("backToServices")}
							</Link>

							<div className="space-y-4">
								<div className="flex flex-wrap items-center gap-3">
									<span className="flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 font-bold text-primary text-sm backdrop-blur-md">
										<IconComponent className="h-4 w-4" />
										<span>{tContent(`${strictServiceId}.title`)}</span>
									</span>
								</div>

								<h1 className="font-black text-5xl text-white leading-tight lg:text-7xl">
									{tContent(`${strictServiceId}.title`)}
								</h1>

								<p className="max-w-xl font-medium text-lg text-slate-300">
									{tContent(`${strictServiceId}.description`)}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content Section */}
			<section className="py-16 lg:py-24">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
						{/* Left: Department Details */}
						<div className="space-y-12 lg:col-span-2">
							{/* About */}
							<div className="space-y-6">
								<h2 className="font-black text-3xl text-slate-900">
									{t("aboutDept")}
								</h2>
								<p className="text-lg text-slate-600 leading-relaxed">
									{tContent(`${strictServiceId}.about`)}
								</p>
							</div>

							{/* Benefits */}
							<div className="space-y-6">
								<h2 className="font-black text-3xl text-slate-900">
									{t("keyBenefits")}
								</h2>
								<ul className="space-y-4">
									{localizedBenefits.map((benefit) => (
										<li className="flex items-start gap-4" key={benefit}>
											<CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
											<span className="text-lg text-slate-600 leading-relaxed">
												{benefit}
											</span>
										</li>
									))}
								</ul>
							</div>

							{/* Procedures */}
							<div className="space-y-6">
								<h2 className="font-black text-3xl text-slate-900">
									{t("primaryProcedures")}
								</h2>
								<ul className="space-y-4">
									{localizedProcedures.map((proc) => (
										<li className="flex items-start gap-4" key={proc}>
											<CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-secondary" />
											<span className="text-lg text-slate-600 leading-relaxed">
												{proc}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Right: Quick Consult card */}
						<div className="lg:col-span-1">
							<Card className="sticky top-32 rounded-[3rem] border border-primary/30 bg-[#F8F9FA] p-2 shadow-none">
								<CardHeader className="mb-2 space-y-2 px-6 pt-6 pb-0 lg:px-8 lg:pt-8">
									<CardTitle className="font-black text-2xl text-slate-900">
										{t("sidebarTitle")}
									</CardTitle>
									<CardDescription className="text-base text-slate-500">
										{t("sidebarDesc")}
									</CardDescription>
								</CardHeader>

								<CardContent className="px-6 pt-6 pb-6 lg:px-8 lg:pb-8">
									<Button
										className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primary font-bold text-lg text-white hover:bg-primary/90"
										onClick={() => alert("Booked consult priority!")}
										size="lg"
									>
										<span>{t("scheduleBtn")}</span>
										<Send className="h-5 w-5 rtl:rotate-180" />
									</Button>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
