import Image from "next/image";

import {
	Ambulance,
	ArrowRight,
	CalendarDays,
	CheckCircle2,
	Clock,
	FlaskConical,
	Headset,
	Plus,
	Stethoscope,
	Users2,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { services } from "@/lib/content";

import { CTA } from "../home/components/cta";

const ICON_MAP = {
	HeartPulse: FlaskConical,
	Activity: Ambulance,
	Users: CalendarDays,
	Shield: Headset,
};

export function ServicesView() {
	const t = useTranslations("Services");
	const tServices = useTranslations("ContentServices");

	return (
		<main className="flex min-h-screen flex-col bg-white">
			{/* Immersive Page Header */}
			<section className="relative w-full bg-white px-4 pt-28 pb-6 lg:pt-32 lg:pb-8">
				<div className="relative mx-auto min-h-[250px] max-w-[1600px] overflow-hidden rounded-[4rem] bg-slate-900 lg:min-h-[350px]">
					{/* Background Image with Overlay */}
					<Image
						alt="Medical background"
						className="object-cover opacity-70 mix-blend-overlay"
						fill
						priority
						src="/modern_medical_lab_background.png"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent rtl:bg-gradient-to-l" />

					{/* Content */}
					<div className="relative z-10 flex h-full flex-col justify-center px-8 py-10 lg:px-20 lg:py-16">
						<div className="max-w-3xl space-y-4">
							<div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 font-bold text-primary text-sm backdrop-blur-md">
								<Plus className="h-4 w-4" />
								<span>{t("heroTag")}</span>
							</div>
							<h1 className="font-black text-5xl text-white leading-tight tracking-tight lg:text-7xl">
								{t("heroTitle1")} <br />
								<span className="text-secondary">{t("heroTitle2")}</span>
							</h1>
							<p className="max-w-xl font-medium text-lg text-slate-300">
								{t("heroDesc")}
							</p>
							<div className="flex flex-wrap gap-4 pt-4">
								<Button className="h-14 rounded-full bg-primary px-10 font-bold text-white shadow-primary/20 shadow-xl">
									{t("explore")}
								</Button>
								<div className="flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-md">
									<div className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
									{t("emergency247")}
								</div>
							</div>
						</div>
					</div>

					{/* Floating Stats Card */}
					<div className="absolute top-1/2 hidden -translate-y-1/2 lg:block ltr:right-20 rtl:left-20">
						<div className="space-y-6">
							{[
								{
									id: "specialists",
									icon: Stethoscope,
									label: t("stats.specialists"),
									value: "50+",
								},
								{
									id: "patients",
									icon: Users2,
									label: t("stats.patients"),
									value: "10k+",
								},
								{
									id: "years",
									icon: Clock,
									label: t("stats.years"),
									value: "25+",
								},
							].map((stat) => (
								<div
									className="flex w-48 items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-transform hover:scale-110"
									key={stat.id}
								>
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
										<stat.icon className="h-6 w-6" />
									</div>
									<div>
										<p className="font-black text-white text-xl">
											{stat.value}
										</p>
										<p className="font-medium text-slate-400 text-xs">
											{stat.label}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Service Cards Grid - Redesigned */}
			<section className="py-24">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="mb-20 flex flex-col items-center justify-between gap-8 lg:flex-row">
						<div className="max-w-2xl space-y-4 text-start">
							<h2 className="font-black text-4xl text-slate-900 lg:text-6xl">
								{t("gridTitle1")} <br />
								<span className="text-primary">{t("gridTitle2")}</span>
							</h2>
							<p className="font-medium text-slate-500 text-xl">
								{t("gridDesc")}
							</p>
						</div>
						<div className="flex gap-4">
							<div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-colors hover:bg-slate-50">
								<ArrowRight className="h-6 w-6 rotate-180" />
							</div>
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-primary/20 shadow-xl transition-transform hover:scale-105">
								<ArrowRight className="h-6 w-6" />
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
						{services.map((service) => {
							const IconComponent =
								ICON_MAP[service.icon as keyof typeof ICON_MAP];
							return (
								<Card
									className="group relative flex h-[500px] flex-col overflow-hidden rounded-[3.5rem] border-none bg-[#F8F9FA] p-10 transition-all duration-500 hover:bg-primary hover:shadow-[0_30px_60px_-15px_rgba(var(--primary-rgb),0.3)]"
									key={service.id}
								>
									<div className="relative z-10 flex h-full flex-col justify-between">
										<div className="space-y-6">
											<div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white text-primary shadow-lg shadow-slate-200 transition-all duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:shadow-none">
												{IconComponent && (
													<IconComponent className="h-10 w-10" />
												)}
											</div>
											<div className="space-y-4">
												<p className="font-black text-3xl text-slate-900 leading-tight transition-colors group-hover:text-white">
													{tServices(
														`${service.id as "general-care" | "cardiology" | "pediatrics" | "diagnostics"}.title`
													)}
												</p>
												<p className="font-medium text-slate-500 leading-relaxed transition-colors group-hover:text-white/80">
													{tServices(
														`${service.id as "general-care" | "cardiology" | "pediatrics" | "diagnostics"}.description`
													)}
												</p>
											</div>
										</div>

										<div className="flex items-center gap-4 pt-6">
											<div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:scale-110">
												<ArrowRight className="h-6 w-6" />
											</div>
											<span className="font-bold text-slate-900 text-sm opacity-0 transition-all group-hover:text-white group-hover:opacity-100">
												{t("learnMore")}
											</span>
										</div>
									</div>

									{/* Decorative Background Icon for each card */}
									{IconComponent && (
										<IconComponent className="absolute -bottom-10 h-64 w-64 rotate-12 text-slate-200 transition-colors group-hover:text-white/5 ltr:-right-10 rtl:-left-10" />
									)}
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* Excellence Section */}
			<section className="bg-slate-900 py-24">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="flex flex-col items-center gap-16 lg:flex-row">
						<div className="relative flex-1">
							<div className="absolute -top-10 h-64 w-64 rounded-full bg-primary/20 blur-[100px] ltr:-left-10 rtl:-right-10" />
							<div className="relative grid grid-cols-2 gap-4">
								<div className="space-y-4">
									<div className="flex h-64 items-center justify-center rounded-[3rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
										<div className="text-center">
											<p className="font-black text-5xl text-white">24/7</p>
											<p className="font-bold text-slate-400">
												{t("excellenceStats.emergency")}
											</p>
										</div>
									</div>
									<div className="flex h-48 items-center justify-center rounded-[3rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
										<div className="text-center">
											<p className="font-black text-5xl text-white">10k+</p>
											<p className="font-bold text-slate-400">
												{t("excellenceStats.patients")}
											</p>
										</div>
									</div>
								</div>
								<div className="space-y-4 pt-12">
									<div className="flex h-48 items-center justify-center rounded-[3rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
										<div>
											<p className="font-black text-5xl text-white">15+</p>
											<p className="font-bold text-slate-400">
												{t("excellenceStats.years")}
											</p>
										</div>
									</div>
									<div className="flex h-64 items-center justify-center rounded-[3rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
										<div className="text-center">
											<p className="font-black text-5xl text-white">99%</p>
											<p className="font-bold text-slate-400">
												{t("excellenceStats.success")}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex-1 space-y-8">
							<h2 className="font-black text-5xl text-white leading-tight lg:text-7xl">
								{t("excellenceTitle1")} <br />
								<span className="text-secondary">{t("excellenceTitle2")}</span>{" "}
								{t("excellenceTitle3")}
							</h2>
							<p className="font-medium text-lg text-slate-400 lg:text-xl">
								{t("excellenceDesc")}
							</p>
							<div className="space-y-4">
								{["infrastructure", "staff", "equipment", "care"].map(
									(key, idx) => (
										<div className="flex items-center gap-4" key={key}>
											<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
												<CheckCircle2 className="h-5 w-5" />
											</div>
											<span className="font-bold text-lg text-white">
												{t(`features.${idx as 0 | 1 | 2 | 3}`)}
											</span>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			<CTA />
		</main>
	);
}
