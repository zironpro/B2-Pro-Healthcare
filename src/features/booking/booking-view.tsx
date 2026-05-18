"use client";

import * as React from "react";

import {
	Award,
	CheckCircle,
	Clock,
	MapPin,
	Phone,
	ShieldCheck,
	Sparkles,
	Star,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Link } from "@/i18n/routing";

// Departments List
const DEPARTMENTS = [
	{ id: "general-care", translationKey: "ContentServices.general-care.title" },
	{ id: "cardiology", translationKey: "ContentServices.cardiology.title" },
	{ id: "pediatrics", translationKey: "ContentServices.pediatrics.title" },
	{ id: "diagnostics", translationKey: "ContentServices.diagnostics.title" },
] as const;

// Doctors List mapped to departments
const DOCTORS = [
	{ id: 1, deptId: "cardiology", nameKey: "ContentDoctors.1.name" },
	{ id: 2, deptId: "general-care", nameKey: "ContentDoctors.2.name" },
	{ id: 3, deptId: "pediatrics", nameKey: "ContentDoctors.3.name" },
	{ id: 4, deptId: "diagnostics", nameKey: "ContentDoctors.4.name" },
] as const;

export function BookingView() {
	const t = useTranslations("Booking");
	const tServices = useTranslations("ContentServices");
	const tDoctors = useTranslations("ContentDoctors");

	// Form States
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [selectedDept, setSelectedDept] = React.useState("");
	const [selectedDoc, setSelectedDoc] = React.useState("");
	const [date, setDate] = React.useState("");
	const [notes, setNotes] = React.useState("");

	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const [isSuccess, setIsSuccess] = React.useState(false);

	// Dynamically filter doctors based on selected department
	const filteredDoctors = React.useMemo(() => {
		if (!selectedDept) return DOCTORS;
		return DOCTORS.filter((doc) => doc.deptId === selectedDept);
	}, [selectedDept]);

	// Auto-select doctor if department has exactly 1 doctor
	React.useEffect(() => {
		if (selectedDept) {
			const matching = DOCTORS.filter((d) => d.deptId === selectedDept);
			if (matching.length === 1) {
				setSelectedDoc(matching[0].id.toString());
			} else {
				setSelectedDoc("");
			}
		}
	}, [selectedDept]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name || !email || !phone || !selectedDept || !date) {
			alert("Please fill in all required fields.");
			return;
		}

		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSuccess(true);
		}, 1500);
	};

	if (isSuccess) {
		return (
			<main className="flex min-h-screen items-center justify-center bg-[#F8F9FA] px-4 py-24">
				<Card className="w-full max-w-2xl overflow-hidden rounded-[3.5rem] border-none bg-white p-8 text-center shadow-2xl shadow-slate-200/50 lg:p-16">
					<CardContent className="flex flex-col items-center space-y-8 p-0">
						<div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
							<CheckCircle className="h-14 w-14" />
						</div>

						<div className="space-y-4">
							<h1 className="font-black text-3.5xl text-slate-900 lg:text-4xl">
								{t("successTitle")}
							</h1>
							<p className="font-medium text-lg text-slate-500 leading-relaxed">
								{t("successDesc")}
							</p>
						</div>

						{/* Booking details card summary */}
						<div className="w-full space-y-4 rounded-3xl bg-[#F8F9FA] p-6 text-left font-bold text-slate-600 shadow-inner">
							<div className="flex justify-between border-slate-100 border-b pb-2">
								<span className="text-slate-400">{t("fullName")}:</span>
								<span className="font-bold text-slate-900">{name}</span>
							</div>
							<div className="flex justify-between border-slate-100 border-b pb-2">
								<span className="text-slate-400">{t("department")}:</span>
								<span className="font-bold text-slate-900">
									{tServices(`${selectedDept as "cardiology"}.title`)}
								</span>
							</div>
							{selectedDoc && (
								<div className="flex justify-between border-slate-100 border-b pb-2">
									<span className="text-slate-400">{t("doctor")}:</span>
									<span className="font-bold text-slate-900">
										{tDoctors(`${selectedDoc as "1"}.name`)}
									</span>
								</div>
							)}
							<div className="flex justify-between">
								<span className="text-slate-400">{t("date")}:</span>
								<span className="font-bold text-primary">{date}</span>
							</div>
						</div>

						<Button
							className="h-14 rounded-2xl bg-primary px-10 font-bold text-lg text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
							render={({ className }) => (
								<Link className={className} href="/">
									{t("backToHome")}
								</Link>
							)}
						/>
					</CardContent>
				</Card>
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-[#F8F9FA] px-4 py-28 lg:py-36">
			<div className="mx-auto max-w-[1400px]">
				{/* Editorial Dual Column Layout */}
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-stretch">
					{/* Left Column: Deep Premium Info Hub */}
					<div className="relative flex flex-col justify-between overflow-hidden rounded-[3.5rem] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-900/10 lg:col-span-5 lg:p-12">
						{/* Background Radial Glow */}
						<div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-950 to-primary/20" />
						<div className="absolute -top-40 right-10 z-0 h-[400px] w-[400px] rounded-full bg-primary/20 opacity-70 blur-[100px]" />

						<div className="relative z-10 space-y-12">
							{/* Brand Badge */}
							<div className="flex items-center gap-3">
								<span className="rounded-full border border-white/5 bg-white/10 px-4 py-1.5 font-bold text-slate-300 text-xs uppercase tracking-widest backdrop-blur-md">
									{t("heroTag")}
								</span>
							</div>

							{/* Hero Texts */}
							<div className="space-y-4">
								<h1 className="font-black text-4xl text-white leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
									{t("heroTitle")}
								</h1>
								<p className="max-w-md font-medium text-base text-slate-400 leading-relaxed">
									{t("heroDesc")}
								</p>
							</div>

							{/* Interactive Dynamic Stats Cards */}
							<div className="space-y-4">
								{/* Card 1: Customer Rating */}
								<div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400 shadow-inner">
										<Star className="h-6 w-6 fill-current" />
									</div>
									<div>
										<p className="font-black text-lg text-white">
											4.9 / 5.0 Rating
										</p>
										<p className="font-bold text-slate-400 text-xs">
											Trusted by 10k+ active patient bookings
										</p>
									</div>
								</div>

								{/* Card 2: Award Specialty */}
								<div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner">
										<Award className="h-6 w-6" />
									</div>
									<div>
										<p className="font-black text-lg text-white">
											Clinical Excellence
										</p>
										<p className="font-bold text-slate-400 text-xs">
											Accredited HIPAA compliant workspace
										</p>
									</div>
								</div>

								{/* Card 3: Realtime Status */}
								<div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-400 shadow-inner">
										<Sparkles className="h-6 w-6" />
									</div>
									<div>
										<p className="font-black text-lg text-white">
											Realtime Confirmation
										</p>
										<p className="font-bold text-slate-400 text-xs">
											Slots scheduled instantly in our system
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Left Column Footer Info */}
						<div className="relative z-10 mt-12 flex flex-col items-start justify-between gap-6 border-white/10 border-t pt-8 sm:flex-row sm:items-center">
							<div className="flex items-center gap-3">
								<MapPin className="h-5 w-5 text-primary" />
								<div>
									<p className="font-bold text-slate-400 text-xs">
										B2 Pro Main Medical Center
									</p>
									<p className="font-black text-white text-xs">
										Downtown Clinical Area, Lane 4
									</p>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Phone className="h-4 w-4 text-primary" />
								<span className="font-black text-slate-200 text-sm" dir="ltr">
									+1 234 567 890
								</span>
							</div>
						</div>
					</div>

					{/* Right Column: Premium Form Container */}
					<div className="lg:col-span-7">
						<Card className="h-full overflow-hidden rounded-[3.5rem] border-none bg-white p-6 shadow-2xl shadow-slate-200/50 md:p-12 lg:p-14">
							<CardContent className="p-0">
								<form className="space-y-8" onSubmit={handleSubmit}>
									{/* Step 1 Title */}
									<div className="space-y-1">
										<span className="font-black text-primary text-xs uppercase tracking-widest">
											Step 01
										</span>
										<h2 className="font-black text-2xl text-slate-900">
											Personal Identification
										</h2>
										<p className="font-medium text-slate-400 text-xs">
											Fill in patient registration details accurately
										</p>
									</div>

									{/* Personal Grid */}
									<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
										{/* Full Name */}
										<div className="space-y-3">
											<label
												className="font-bold text-slate-700 text-sm"
												htmlFor="fullName"
											>
												{t("fullName")} *
											</label>
											<Input
												className="h-14 rounded-2xl border-slate-200 bg-slate-50 px-5 text-base focus-visible:border-primary focus-visible:ring-primary"
												id="fullName"
												onChange={(e) => setName(e.target.value)}
												placeholder={t("fullNamePlaceholder")}
												required
												type="text"
												value={name}
											/>
										</div>

										{/* Email */}
										<div className="space-y-3">
											<label
												className="font-bold text-slate-700 text-sm"
												htmlFor="email"
											>
												{t("email")} *
											</label>
											<Input
												className="h-14 rounded-2xl border-slate-200 bg-slate-50 px-5 text-base focus-visible:border-primary focus-visible:ring-primary"
												id="email"
												onChange={(e) => setEmail(e.target.value)}
												placeholder={t("emailPlaceholder")}
												required
												type="email"
												value={email}
											/>
										</div>

										{/* Phone Number */}
										<div className="space-y-3 md:col-span-2">
											<label
												className="font-bold text-slate-700 text-sm"
												htmlFor="phone"
											>
												{t("phone")} *
											</label>
											<Input
												className="h-14 rounded-2xl border-slate-200 bg-slate-50 px-5 text-base focus-visible:border-primary focus-visible:ring-primary"
												id="phone"
												onChange={(e) => setPhone(e.target.value)}
												placeholder={t("phonePlaceholder")}
												required
												type="tel"
												value={phone}
											/>
										</div>
									</div>

									{/* Step 2 Title */}
									<div className="space-y-1 border-slate-100 border-t pt-4">
										<span className="font-black text-primary text-xs uppercase tracking-widest">
											Step 02
										</span>
										<h2 className="font-black text-2xl text-slate-900">
											Consultation Parameters
										</h2>
										<p className="font-medium text-slate-400 text-xs">
											Configure medical specialist options
										</p>
									</div>

									{/* Consultation Grid */}
									<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
										{/* Department Selection */}
										<div className="space-y-3">
											<label
												className="font-bold text-slate-700 text-sm"
												htmlFor="department"
											>
												{t("department")} *
											</label>
											<select
												className="flex h-14 w-full cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 px-5 font-bold text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary"
												id="department"
												onChange={(e) => setSelectedDept(e.target.value)}
												required
												value={selectedDept}
											>
												<option disabled value="">
													{t("selectDept")}
												</option>
												{DEPARTMENTS.map((dept) => (
													<option key={dept.id} value={dept.id}>
														{tServices(`${dept.id as "cardiology"}.title`)}
													</option>
												))}
											</select>
										</div>

										{/* Doctor Selection */}
										<div className="space-y-3">
											<label
												className="font-bold text-slate-700 text-sm"
												htmlFor="doctor"
											>
												{t("doctor")}
											</label>
											<select
												className="flex h-14 w-full cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 px-5 font-bold text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary"
												id="doctor"
												onChange={(e) => setSelectedDoc(e.target.value)}
												value={selectedDoc}
											>
												<option value="">{t("selectDoc")}</option>
												{filteredDoctors.map((doc) => (
													<option key={doc.id} value={doc.id.toString()}>
														{tDoctors(`${doc.id as 1 | 2 | 3 | 4}.name`)}
													</option>
												))}
											</select>
										</div>

										{/* Date Selection */}
										<div className="space-y-3 md:col-span-2">
											<label
												className="font-bold text-slate-700 text-sm"
												htmlFor="date"
											>
												{t("date")} *
											</label>
											<Input
												className="h-14 cursor-pointer rounded-2xl border-slate-200 bg-slate-50 px-5 font-bold text-base focus-visible:border-primary focus-visible:ring-primary"
												id="date"
												onChange={(e) => setDate(e.target.value)}
												required
												type="date"
												value={date}
											/>
										</div>
									</div>

									{/* Step 3 Title */}
									<div className="space-y-1 border-slate-100 border-t pt-4">
										<span className="font-black text-primary text-xs uppercase tracking-widest">
											Step 03
										</span>
										<h2 className="font-black text-2xl text-slate-900">
											Clinical Narrative
										</h2>
										<p className="font-medium text-slate-400 text-xs">
											Describe physical state and symptoms
										</p>
									</div>

									{/* Narrative textarea */}
									<div className="space-y-3">
										<label
											className="font-bold text-slate-700 text-sm"
											htmlFor="notes"
										>
											{t("notes")}
										</label>
										<textarea
											className="min-h-[140px] w-full resize-none rounded-3xl border border-slate-200 bg-slate-50 p-5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
											id="notes"
											onChange={(e) => setNotes(e.target.value)}
											placeholder={t("notesPlaceholder")}
											value={notes}
										/>
									</div>

									{/* Form Submissions */}
									<div className="flex flex-col items-center justify-between gap-6 border-slate-100 border-t pt-8 md:flex-row">
										<div className="flex flex-wrap items-center justify-center gap-6 font-bold text-slate-500 text-sm md:justify-start">
											<div className="flex items-center gap-2">
												<ShieldCheck className="h-5 w-5 text-primary" />
												<span>{t("secureHIPAA")}</span>
											</div>
											<div className="flex items-center gap-2">
												<Clock className="h-5 w-5 text-primary" />
												<span>{t("instantConfirmation")}</span>
											</div>
										</div>

										<Button
											className="h-16 w-full min-w-[220px] rounded-2xl bg-primary px-10 font-black text-lg text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 active:scale-[0.98] md:w-auto"
											disabled={isSubmitting}
											type="submit"
										>
											{isSubmitting ? t("submitting") : t("submitBtn")}
										</Button>
									</div>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</main>
	);
}
