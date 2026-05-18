import Image from "next/image";

import {
	Award,
	Clock,
	Eye,
	HeartPulse,
	History,
	ShieldCheck,
	Target,
	Users2,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { CTA } from "../home/components/cta";

export function AboutView() {
	const t = useTranslations("About");

	return (
		<main className="flex min-h-screen flex-col bg-white">
			{/* Immersive Hero Section */}
			<section className="relative w-full bg-white px-4 pt-28 pb-6 lg:pt-32 lg:pb-8">
				<div className="relative mx-auto min-h-[250px] max-w-[1600px] overflow-hidden rounded-[4rem] bg-slate-900 lg:min-h-[350px]">
					<Image
						alt="B2 Pro Healthcare Team"
						className="object-cover opacity-50 mix-blend-overlay"
						fill
						priority
						src="/medical-team.webp"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />

					<div className="relative z-10 flex h-full flex-col justify-center px-8 py-10 lg:px-20 lg:py-16">
						<div className="max-w-3xl space-y-4">
							<div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 font-bold text-primary text-sm backdrop-blur-md">
								<Users2 className="h-4 w-4" />
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

			{/* Our Journey Section */}
			<section className="py-24">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
						<div className="relative aspect-square overflow-hidden rounded-[4rem] shadow-2xl lg:aspect-[4/3]">
							<Image
								alt="Our Story"
								className="object-cover"
								fill
								src="/doctor-talking-patient.webp"
							/>
							<div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
						</div>

						<div className="space-y-8">
							<div className="space-y-4">
								<h2 className="font-black text-5xl text-slate-900 lg:text-6xl">
									{t("storyTitle1")} <br />
									<span className="text-primary">{t("storyTitle2")}</span>
								</h2>
								<p className="text-slate-500 text-xl leading-relaxed">
									{t("storyDesc")}
								</p>
							</div>

							<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
								<div className="space-y-2">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-primary shadow-sm">
										<History className="h-6 w-6" />
									</div>
									<p className="font-black text-slate-900 text-xl">
										{t("journeyYearsValue")}
									</p>
									<p className="font-medium text-slate-500 text-sm">
										{t("journeyYearsDesc")}
									</p>
								</div>
								<div className="space-y-2">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-primary shadow-sm">
										<ShieldCheck className="h-6 w-6" />
									</div>
									<p className="font-black text-slate-900 text-xl">
										{t("journeyCertValue")}
									</p>
									<p className="font-medium text-slate-500 text-sm">
										{t("journeyCertDesc")}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mission & Vision (Glassmorphism) */}
			<section className="bg-slate-900 py-24">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="mb-16 space-y-4 text-center">
						<h2 className="font-black text-5xl text-white lg:text-7xl">
							{t("principlesTitle1")}{" "}
							<span className="text-primary">{t("principlesTitle2")}</span>
						</h2>
						<p className="mx-auto max-w-2xl text-slate-400 text-xl">
							{t("principlesDesc")}
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<div className="group relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-12 backdrop-blur-md transition-all hover:bg-white/10">
							<div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-primary text-white shadow-primary/20 shadow-xl">
								<Target className="h-10 w-10" />
							</div>
							<h3 className="mb-4 font-black text-3xl text-white">
								{t("missionTitle")}
							</h3>
							<p className="text-lg text-slate-400 leading-relaxed">
								{t("missionDesc")}
							</p>
						</div>

						<div className="group relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-12 backdrop-blur-md transition-all hover:bg-white/10">
							<div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-primary text-white shadow-primary/20 shadow-xl">
								<Eye className="h-10 w-10" />
							</div>
							<h3 className="mb-4 font-black text-3xl text-white">
								{t("visionTitle")}
							</h3>
							<p className="text-lg text-slate-400 leading-relaxed">
								{t("visionDesc")}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Excellence Section (Matching Services) */}
			<section className="py-24">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
						{[
							{
								label: t("stats.successLabel"),
								value: t("stats.successValue"),
								icon: HeartPulse,
							},
							{
								label: t("stats.doctorsLabel"),
								value: t("stats.doctorsValue"),
								icon: Award,
							},
							{
								label: t("stats.roomsLabel"),
								value: t("stats.roomsValue"),
								icon: Clock,
							},
							{
								label: t("stats.awardsLabel"),
								value: t("stats.awardsValue"),
								icon: Award,
							},
						].map((stat) => (
							<div
								className="flex flex-col items-center space-y-4 rounded-[3rem] border border-slate-100 bg-[#F8F9FA] p-10 text-center transition-all hover:shadow-xl"
								key={stat.label}
							>
								<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
									<stat.icon className="h-8 w-8" />
								</div>
								<div>
									<p className="font-black text-4xl text-slate-900">
										{stat.value}
									</p>
									<p className="font-bold text-slate-400 text-sm uppercase tracking-widest">
										{stat.label}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<CTA />
		</main>
	);
}
