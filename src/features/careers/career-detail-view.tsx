import Image from "next/image";
import { notFound } from "next/navigation";

import { ArrowLeft, CheckCircle2, Clock, MapPin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Link } from "@/i18n/routing";

import { OPEN_ROLES } from "./data/data";

export function CareerDetailView({ roleId }: { roleId: string }) {
	const role = OPEN_ROLES.find((r) => r.id === roleId);

	if (!role) {
		notFound();
	}

	return (
		<main className="flex min-h-screen flex-col bg-white">
			{/* Immersive Hero Section */}
			<section className="relative w-full bg-white px-4 pt-28 pb-6 lg:pt-32 lg:pb-8">
				<div className="relative mx-auto min-h-[300px] max-w-[1600px] overflow-hidden rounded-[4rem] bg-slate-900 lg:min-h-[400px]">
					<Image
						alt={role.title}
						className="object-cover opacity-40 mix-blend-overlay"
						fill
						priority
						src="/medical-team.webp"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

					<div className="relative z-10 flex h-full flex-col justify-center px-8 py-12 lg:px-20 lg:py-20">
						<div className="max-w-3xl space-y-6">
							<Link
								className="inline-flex items-center gap-2 font-bold text-slate-400 text-sm transition-colors hover:text-white"
								href="/careers"
							>
								<ArrowLeft className="h-4 w-4" />
								Back to All Roles
							</Link>

							<div className="space-y-4">
								<div className="flex flex-wrap items-center gap-3">
									<span className="rounded-full bg-primary/20 px-4 py-1.5 font-bold text-primary text-sm backdrop-blur-md">
										{role.department}
									</span>
									<span className="rounded-full bg-white/10 px-4 py-1.5 font-bold text-sm text-white backdrop-blur-md">
										{role.type}
									</span>
								</div>

								<h1 className="font-black text-5xl text-white leading-tight lg:text-7xl">
									{role.title}
								</h1>

								<div className="flex items-center gap-6 pt-4 font-medium text-slate-300">
									<div className="flex items-center gap-2">
										<MapPin className="h-5 w-5 text-primary" />
										<span>{role.location}</span>
									</div>
									<div className="flex items-center gap-2">
										<Clock className="h-5 w-5 text-primary" />
										<span>{role.type}</span>
									</div>
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
						{/* Left: Job Details */}
						<div className="space-y-12 lg:col-span-2">
							{/* About */}
							<div className="space-y-6">
								<h2 className="font-black text-3xl text-slate-900">
									About the Role
								</h2>
								<p className="text-lg text-slate-600 leading-relaxed">
									{role.about}
								</p>
							</div>

							{/* Responsibilities */}
							<div className="space-y-6">
								<h2 className="font-black text-3xl text-slate-900">
									Key Responsibilities
								</h2>
								<ul className="space-y-4">
									{role.responsibilities.map((req) => (
										<li className="flex items-start gap-4" key={req}>
											<CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
											<span className="text-lg text-slate-600 leading-relaxed">
												{req}
											</span>
										</li>
									))}
								</ul>
							</div>

							{/* Requirements */}
							<div className="space-y-6">
								<h2 className="font-black text-3xl text-slate-900">
									Qualifications
								</h2>
								<ul className="space-y-4">
									{role.requirements.map((req) => (
										<li className="flex items-start gap-4" key={req}>
											<CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-secondary" />
											<span className="text-lg text-slate-600 leading-relaxed">
												{req}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Right: Apply Card */}
						<div className="lg:col-span-1">
							<Card className="sticky top-32 rounded-[3rem] border border-primary/30 bg-[#F8F9FA] p-2 shadow-none">
								<CardHeader className="mb-2 space-y-2 px-6 pt-6 pb-0 lg:px-8 lg:pt-8">
									<CardTitle className="font-black text-2xl text-slate-900">
										Apply for this Position
									</CardTitle>
									<CardDescription className="text-base text-slate-500">
										Fill out the form below and our recruitment team will get
										back to you.
									</CardDescription>
								</CardHeader>

								<CardContent className="px-6 pt-6 pb-6 lg:px-8 lg:pb-8">
									<form className="space-y-6">
										<div className="space-y-3">
											<label
												className="font-bold text-slate-700 text-sm"
												htmlFor="name"
											>
												Full Name
											</label>
											<Input
												className="h-14 rounded-2xl border-white bg-white px-5 text-base shadow-sm focus-visible:ring-primary"
												id="name"
												placeholder="John Doe"
												type="text"
											/>
										</div>

										<div className="space-y-3">
											<label
												className="font-bold text-slate-700 text-sm"
												htmlFor="email"
											>
												Email Address
											</label>
											<Input
												className="h-14 rounded-2xl border-white bg-white px-5 text-base shadow-sm focus-visible:ring-primary"
												id="email"
												placeholder="john@example.com"
												type="email"
											/>
										</div>

										<div className="space-y-3">
											<label
												className="font-bold text-slate-700 text-sm"
												htmlFor="phone"
											>
												Phone Number
											</label>
											<Input
												className="h-14 rounded-2xl border-white bg-white px-5 text-base shadow-sm focus-visible:ring-primary"
												id="phone"
												placeholder="+1 (555) 000-0000"
												type="tel"
											/>
										</div>

										<div className="space-y-3">
											<label
												className="font-bold text-slate-700 text-sm"
												htmlFor="coverLetter"
											>
												Cover Letter
											</label>
											<Textarea
												className="min-h-[160px] resize-none rounded-3xl border-white bg-white p-5 text-base shadow-sm focus-visible:ring-primary"
												id="coverLetter"
												placeholder="Why are you a great fit for this role?"
											/>
										</div>

										<div className="space-y-3 pt-2">
											<label className="font-bold text-slate-700 text-sm">
												Resume / CV
											</label>
											<div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-slate-200 border-dashed bg-white transition-colors hover:border-primary">
												<span className="font-bold text-primary">
													Click to upload
												</span>
												<span className="text-slate-400 text-sm">
													PDF, DOCX up to 5MB
												</span>
											</div>
										</div>

										<Button
											className="h-14 w-full rounded-2xl bg-primary font-bold text-lg text-white hover:bg-primary/90"
											size="lg"
										>
											<span>Submit Application</span>
											<Send className="ml-2 h-5 w-5" />
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
