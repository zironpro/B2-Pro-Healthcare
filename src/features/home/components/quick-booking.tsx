"use client";

import {
	ArrowRight,
	Calendar,
	Clock,
	Phone,
	ShieldCheck,
	Sparkles,
	Stethoscope,
	User,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

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
						<div className="group relative flex flex-col justify-between rounded-[2rem] border border-slate-100 bg-white/85 p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
							<div className="mb-4 flex items-center justify-between">
								<span className="font-black text-[10px] text-slate-400 uppercase tracking-wider transition-colors group-focus-within:text-primary">
									01 / Patient Name
								</span>
								<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition-colors group-focus-within:bg-primary/10 group-focus-within:text-primary">
									<User className="h-4 w-4" />
								</div>
							</div>
							<div className="space-y-1">
								<Input
									className="h-10 border-0 bg-transparent p-0 font-medium text-lg text-slate-900 placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
									placeholder="e.g. John Doe"
								/>
								<p className="font-bold text-[10px] text-slate-400">
									Enter your full legal name
								</p>
							</div>
						</div>

						{/* Card 2: Phone Number */}
						<div className="group relative flex flex-col justify-between rounded-[2rem] border border-slate-100 bg-white/85 p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
							<div className="mb-4 flex items-center justify-between">
								<span className="font-black text-[10px] text-slate-400 uppercase tracking-wider transition-colors group-focus-within:text-primary">
									02 / Contact Phone
								</span>
								<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition-colors group-focus-within:bg-primary/10 group-focus-within:text-primary">
									<Phone className="h-4 w-4" />
								</div>
							</div>
							<div className="space-y-1">
								<Input
									className="h-10 border-0 bg-transparent p-0 font-medium text-lg text-slate-900 placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
									placeholder="+1 (555) 000-0000"
								/>
								<p className="font-bold text-[10px] text-slate-400">
									For appointment updates
								</p>
							</div>
						</div>

						{/* Card 3: Department Select */}
						<div className="group relative flex flex-col justify-between rounded-[2rem] border border-slate-100 bg-white/85 p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
							<div className="mb-4 flex items-center justify-between">
								<span className="font-black text-[10px] text-slate-400 uppercase tracking-wider transition-colors group-focus-within:text-primary">
									03 / Specialization
								</span>
								<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition-colors group-focus-within:bg-primary/10 group-focus-within:text-primary">
									<Stethoscope className="h-4 w-4" />
								</div>
							</div>
							<div className="space-y-1">
								<Select>
									<SelectTrigger className="h-10 border-0 bg-transparent p-0 font-medium text-lg text-slate-900 focus:ring-0 focus:ring-offset-0">
										<SelectValue placeholder="Select Department" />
									</SelectTrigger>
									<SelectContent className="rounded-2xl border-slate-100 shadow-xl">
										<SelectItem value="general">General Checkup</SelectItem>
										<SelectItem value="cardio">Cardiology</SelectItem>
										<SelectItem value="pediatric">Pediatrics</SelectItem>
										<SelectItem value="dental">Dental</SelectItem>
									</SelectContent>
								</Select>
								<p className="font-bold text-[10px] text-slate-400">
									Choose medical department
								</p>
							</div>
						</div>

						{/* Card 4: Date Picker */}
						<div className="group relative flex flex-col justify-between rounded-[2rem] border border-slate-100 bg-white/85 p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
							<div className="mb-4 flex items-center justify-between">
								<span className="font-black text-[10px] text-slate-400 uppercase tracking-wider transition-colors group-focus-within:text-primary">
									04 / Preferred Date
								</span>
								<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition-colors group-focus-within:bg-primary/10 group-focus-within:text-primary">
									<Calendar className="h-4 w-4" />
								</div>
							</div>
							<div className="space-y-1">
								<Input
									className="h-10 border-0 bg-transparent p-0 font-medium text-lg text-slate-900 focus-visible:ring-0 focus-visible:ring-offset-0"
									type="date"
								/>
								<p className="font-bold text-[10px] text-slate-400">
									Select consultation day
								</p>
							</div>
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
