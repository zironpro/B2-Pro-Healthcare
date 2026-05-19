"use client";

import Image from "next/image";
import { notFound } from "next/navigation";

import {
	ArrowLeft,
	Calendar,
	CheckCircle2,
	Heart,
	ShieldCheck,
	Star,
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
import { cn } from "@/lib/utils";

import { DOCTORS } from "./data";

export function DoctorDetailView({ doctorId }: { doctorId: number }) {
	const t = useTranslations("Doctors");
	const tContent = useTranslations("ContentDoctors");

	const doctor = DOCTORS.find((d) => d.id === doctorId);

	if (!doctor) {
		notFound();
	}

	const strictDocId = doctorId.toString() as "1" | "2" | "3" | "4";

	// Retrieve localized arrays safely using tContent.raw
	const localizedAchievements = tContent.raw(
		`${strictDocId}.achievements`
	) as string[];
	const localizedSkills = tContent.raw(`${strictDocId}.skills`) as string[];

	return (
		<main className="flex min-h-screen flex-col bg-white">
			{/* Immersive Hero Section */}
			<section className="relative w-full bg-white px-4 pt-28 pb-6 lg:pt-32 lg:pb-8">
				<div className="relative mx-auto min-h-[350px] max-w-[1600px] overflow-hidden rounded-[4rem] bg-slate-900 lg:min-h-[450px]">
					<div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent rtl:bg-gradient-to-l" />

					{/* Background Graphic Frame */}
					<div className="absolute inset-y-0 top-0 right-10 bottom-0 z-0 mx-auto hidden h-full w-[400px] overflow-hidden rounded-[4rem] lg:block rtl:right-auto rtl:left-10">
						<Image
							alt={tContent(`${strictDocId}.name`)}
							className={cn(
								"relative translate-y-10 scale-[1.3] object-contain pt-8 transition-transform duration-500",
								(doctorId === 2 || doctorId === 3) &&
									"translate-y-16 scale-[1.5]"
							)}
							fill
							priority
							src={doctor.image}
						/>
					</div>

					<div className="relative z-10 flex h-full flex-col justify-center px-8 py-12 lg:px-20 lg:py-20">
						<div className="max-w-3xl space-y-6">
							<Link
								className="inline-flex items-center gap-2 font-bold text-slate-400 text-sm transition-colors hover:text-white"
								href="/doctors"
							>
								<ArrowLeft className="h-4 w-4 rtl:rotate-180" />
								{t("backToDoctors")}
							</Link>

							<div className="space-y-4">
								<div className="flex flex-wrap items-center gap-3">
									<span className="flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 font-bold text-primary text-sm backdrop-blur-md">
										<ShieldCheck className="h-4 w-4" />
										<span>{t("grid.availableToday")}</span>
									</span>
									<span className="rounded-full bg-white/10 px-4 py-1.5 font-bold text-sm text-white backdrop-blur-md">
										{doctor.experience} {t("grid.experience")}
									</span>
								</div>

								<h1 className="font-black text-5xl text-white leading-tight lg:text-7xl">
									{tContent(`${strictDocId}.name`)}
								</h1>

								<p className="max-w-xl font-black text-2xl text-secondary uppercase tracking-wide">
									{tContent(`${strictDocId}.specialty`)}
								</p>

								{/* Reviews and Ratings */}
								<div className="flex items-center gap-1 pt-2 text-yellow-400">
									{[1, 2, 3, 4, 5].map((i) => (
										<Star className="h-5 w-5 fill-current" key={i} />
									))}
									<span className="mx-2 font-bold text-base text-slate-300">
										{t("grid.reviews")}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content Section */}
			<section className="py-16 lg:py-24">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
						{/* Left: Bio and Qualifications */}
						<div className="space-y-12 lg:col-span-2">
							{/* About */}
							<div className="space-y-6">
								<h2 className="font-black text-3xl text-slate-900">
									{t("aboutDoctor")}
								</h2>
								<p className="text-lg text-slate-600 leading-relaxed">
									{tContent(`${strictDocId}.about`)}
								</p>
							</div>

							{/* Credentials & Achievements */}
							<div className="space-y-6">
								<h2 className="font-black text-3xl text-slate-900">
									{t("keyAchievements")}
								</h2>
								<ul className="space-y-4">
									{localizedAchievements.map((ach) => (
										<li className="flex items-start gap-4" key={ach}>
											<CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
											<span className="text-lg text-slate-600 leading-relaxed">
												{ach}
											</span>
										</li>
									))}
								</ul>
							</div>

							{/* Specialties and Skills */}
							<div className="space-y-6">
								<h2 className="font-black text-3xl text-slate-900">
									{t("primarySkills")}
								</h2>
								<ul className="space-y-4">
									{localizedSkills.map((skill) => (
										<li className="flex items-start gap-4" key={skill}>
											<Heart className="mt-1 h-6 w-6 shrink-0 fill-secondary/20 text-secondary" />
											<span className="text-lg text-slate-600 leading-relaxed">
												{skill}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Right: Booking Consultation Card */}
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
									<div className="mb-6 flex justify-between border-slate-100 border-b pb-4 font-bold text-slate-600">
										<span>{t("grid.experience")}:</span>
										<span className="text-slate-900">{doctor.experience}</span>
									</div>
									<div className="mb-6 flex justify-between border-slate-100 border-b pb-4 font-bold text-slate-600">
										<span>{t("grid.success")}:</span>
										<span className="text-primary">{doctor.successRate}</span>
									</div>

									<Button
										className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primary font-bold text-lg text-white hover:bg-primary/90"
										onClick={() =>
											alert("Booked consultation with specialist!")
										}
										size="lg"
									>
										<span>{t("scheduleBtn")}</span>
										<Calendar className="h-5 w-5" />
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
