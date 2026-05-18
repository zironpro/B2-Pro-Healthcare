"use client";

import { ArrowRight, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function QuickBooking() {
	const t = useTranslations("HomeBooking");

	return (
		<section className="relative w-full overflow-hidden bg-[#F8F9FA] py-20 lg:py-28">
			{/* High-fidelity background art */}
			<div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] opacity-60 [background-size:24px_24px]" />
			<div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
			<div className="absolute -right-40 -bottom-40 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[120px]" />

			<div className="relative z-10 mx-auto max-w-[1300px] px-6">
				{/* Section Header */}
				<div className="mx-auto mb-14 max-w-3xl space-y-4 text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-bold text-primary text-xs tracking-wide">
						<Sparkles className="h-3.5 w-3.5" />
						<span className="text-[10px] uppercase tracking-widest">
							Seamless Care
						</span>
					</div>
					<h2 className="font-black text-4xl text-slate-900 leading-none tracking-tight md:text-5xl">
						{t("title")}
					</h2>
					<p className="font-medium text-base text-slate-500 md:text-lg">
						Experience direct, effortless healthcare scheduling. Certified
						specialists are just one click away.
					</p>
				</div>

				{/* High-End Booking Form Dashboard */}
				<div className="relative overflow-hidden rounded-[3.5rem] border border-white/80 bg-white/70 p-8 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.06)] backdrop-blur-2xl md:p-12 lg:p-16">
					{/* Ambient glow accent */}
					<div className="absolute top-0 right-1/4 h-1 w-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

					<form className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
						{/* Card 1: Full Name */}
						<div className="space-y-3">
							<label className="font-bold text-slate-700 text-sm">
								{t("name")}
							</label>
							<Input
								className="h-14 rounded-2xl border-slate-200 bg-slate-50 px-5 text-base focus-visible:border-primary focus-visible:ring-primary"
								placeholder="e.g. John Doe"
								required
							/>
						</div>

						{/* Card 2: Phone Number */}
						<div className="space-y-3">
							<label className="font-bold text-slate-700 text-sm">
								{t("phone")}
							</label>
							<Input
								className="h-14 rounded-2xl border-slate-200 bg-slate-50 px-5 text-base focus-visible:border-primary focus-visible:ring-primary"
								placeholder="+1 (555) 000-0000"
								required
								type="tel"
							/>
						</div>

						{/* Card 3: Department Select */}
						<div className="space-y-3">
							<label className="font-bold text-slate-700 text-sm">
								{t("service")}
							</label>
							<select
								className="flex h-14 w-full cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 px-5 font-medium text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
								defaultValue=""
								required
							>
								<option disabled value="">
									Select Department
								</option>
								<option value="general">General Checkup</option>
								<option value="cardio">Cardiology</option>
								<option value="pediatric">Pediatrics</option>
								<option value="dental">Dental</option>
							</select>
						</div>

						{/* Card 4: Date Picker */}
						<div className="space-y-3">
							<label className="font-bold text-slate-700 text-sm">
								{t("date")}
							</label>
							<Input
								className="h-14 cursor-pointer rounded-2xl border-slate-200 bg-slate-50 px-5 font-bold text-base focus-visible:border-primary focus-visible:ring-primary"
								required
								type="date"
							/>
						</div>

						{/* Dynamic Submit Block */}
						<div className="flex flex-col items-center justify-between gap-6 border-slate-100 border-t pt-8 md:flex-row lg:col-span-4">
							<div className="flex flex-wrap items-center justify-center gap-6 font-bold text-slate-500 text-sm md:justify-start">
								<div className="flex items-center gap-2">
									<ShieldCheck className="h-5 w-5 text-primary" />
									<span>Secure HIPAA Client</span>
								</div>
								<div className="flex items-center gap-2">
									<Clock className="h-5 w-5 text-primary" />
									<span>Instant Confirmation</span>
								</div>
							</div>

							<Button className="group h-16 w-full min-w-[220px] rounded-2xl bg-primary px-8 font-black text-white shadow-primary/20 shadow-xl transition-all hover:bg-primary/90 active:scale-[0.98] md:w-auto">
								<span className="flex items-center justify-center gap-2">
									{t("button")}
									<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
								</span>
							</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
