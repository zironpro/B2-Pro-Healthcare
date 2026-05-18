"use client";

import { useState } from "react";

import Image from "next/image";

import {
	ArrowRight,
	Briefcase,
	Clock,
	GraduationCap,
	Heart,
	MapPin,
	Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

import { Link } from "@/i18n/routing";

import { OPEN_ROLES } from "./data/data";

const CATEGORIES = [
	{ id: "All", key: "all" },
	{ id: "Cardiology", key: "cardiology" },
	{ id: "Intensive Care", key: "intensive-care" },
	{ id: "Pediatrics", key: "pediatrics" },
	{ id: "Administration", key: "administration" },
] as const;

export function CareersView() {
	const t = useTranslations("Careers");
	const tContent = useTranslations("ContentCareers");

	const [activeCategory, setActiveCategory] = useState<
		"All" | "Cardiology" | "Intensive Care" | "Pediatrics" | "Administration"
	>("All");

	const filteredRoles = OPEN_ROLES.filter(
		(role) => activeCategory === "All" || role.department === activeCategory
	);

	const perks = [
		{
			title: t("perks.learningTitle"),
			description: t("perks.learningDesc"),
			icon: GraduationCap,
		},
		{
			title: t("perks.collabTitle"),
			description: t("perks.collabDesc"),
			icon: Users,
		},
		{
			title: t("perks.benefitsTitle"),
			description: t("perks.benefitsDesc"),
			icon: Heart,
		},
	];

	return (
		<main className="flex min-h-screen flex-col bg-white">
			{/* Immersive Hero Section */}
			<section className="relative w-full bg-white px-4 pt-28 pb-6 lg:pt-32 lg:pb-8">
				<div className="relative mx-auto min-h-[250px] max-w-[1600px] overflow-hidden rounded-[4rem] bg-slate-900 lg:min-h-[350px]">
					<Image
						alt="B2 Pro Healthcare Careers"
						className="object-cover opacity-50 mix-blend-overlay"
						fill
						priority
						src="/medical-team.webp"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent rtl:bg-gradient-to-l" />

					<div className="relative z-10 flex h-full flex-col justify-center px-8 py-10 lg:px-20 lg:py-16">
						<div className="max-w-3xl space-y-4">
							<div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 font-bold text-primary text-sm backdrop-blur-md">
								<Briefcase className="h-4 w-4" />
								<span>{t("heroTag")}</span>
							</div>
							<h1 className="font-black text-5xl text-white leading-tight lg:text-7xl">
								{t("heroTitle1")} <br />
								<span className="text-secondary">{t("heroTitle2")}</span>
							</h1>
							<p className="max-w-xl text-lg text-slate-300 leading-relaxed">
								{t("heroDesc")}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Join Us */}
			<section className="py-16 lg:py-24">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="mb-16 space-y-4 text-center">
						<h2 className="font-black text-5xl text-slate-900 lg:text-6xl">
							{t("whyB2Pro")}
						</h2>
						<p className="mx-auto max-w-2xl text-slate-500 text-xl">
							{t("whyB2ProDesc")}
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{perks.map((perk) => (
							<div
								className="group flex flex-col items-center space-y-4 rounded-[3rem] border border-slate-100 bg-[#F8F9FA] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/5 hover:shadow-xl"
								key={perk.title}
							>
								<div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
									<perk.icon className="h-10 w-10" />
								</div>
								<h3 className="font-black text-2xl text-slate-900">
									{perk.title}
								</h3>
								<p className="font-medium text-slate-500 leading-relaxed">
									{perk.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Open Positions */}
			<section className="bg-[#FAF9F8] py-24">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="mb-12 space-y-4 text-center">
						<h2 className="font-black text-5xl text-slate-900">
							{t("openPositions")}
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-slate-500">
							{t("openPositionsDesc")}
						</p>
					</div>

					{/* Filters */}
					<div className="mb-16 flex flex-wrap justify-center gap-4">
						{CATEGORIES.map((category) => (
							<Button
								className={`h-12 rounded-2xl px-8 font-bold text-sm transition-all ${
									activeCategory !== category.id &&
									"border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
								}`}
								key={category.id}
								onClick={() => setActiveCategory(category.id)}
								variant={activeCategory === category.id ? "default" : "outline"}
							>
								{t(
									`departments.${category.key}` as
										| "departments.all"
										| "departments.cardiology"
										| "departments.intensive-care"
										| "departments.pediatrics"
										| "departments.administration"
								)}
							</Button>
						))}
					</div>

					{/* Job Cards Grid */}
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{filteredRoles.map((role) => {
							const roleId = role.id as
								| "senior-cardiologist"
								| "registered-nurse-icu"
								| "pediatrician"
								| "medical-receptionist";
							return (
								<div
									className="group flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-primary/5 hover:shadow-xl"
									key={role.id}
								>
									<div className="space-y-6">
										<div className="flex items-start justify-between gap-4">
											<h3 className="font-black text-2xl text-slate-900 transition-colors group-hover:text-primary">
												{tContent(`${roleId}.title`)}
											</h3>
											<span className="shrink-0 rounded-full bg-primary/10 px-4 py-1.5 font-bold text-primary text-xs">
												{tContent(`${roleId}.department`)}
											</span>
										</div>

										<p className="line-clamp-2 text-slate-500 leading-relaxed">
											{tContent(`${roleId}.description`)}
										</p>

										<div className="space-y-3 pt-4">
											<div className="flex items-center gap-3 font-medium text-slate-500">
												<MapPin className="h-5 w-5 text-slate-400" />
												<span>{role.location}</span>
											</div>
											<div className="flex items-center gap-3 font-medium text-slate-500">
												<Clock className="h-5 w-5 text-slate-400" />
												<span>{role.type}</span>
											</div>
										</div>
									</div>

									<div className="mt-8 border-slate-100 border-t pt-6">
										<Link
											className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 py-3 font-bold text-slate-700 transition-colors group-hover:bg-primary group-hover:text-white"
											href={`/careers/${role.id}`}
										>
											<span>{t("viewDetails")}</span>
											<ArrowRight className="h-4 w-4 rtl:rotate-180" />
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
}
