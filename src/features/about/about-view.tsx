"use client";

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

import { CTA } from "../home/components/cta";

export function AboutView() {
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
								<span>Who We Are</span>
							</div>
							<h1 className="font-black text-5xl text-white leading-tight lg:text-7xl">
								Healing Hearts, <br />
								<span className="text-secondary">Changing Lives.</span>
							</h1>
							<p className="max-w-xl text-lg text-slate-300 leading-relaxed">
								At B2 Pro Healthcare, we combine world-class medical expertise
								with compassionate care to ensure every patient receives the
								treatment they deserve.
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
									Our Story & <br />
									<span className="text-primary">Evolution</span>
								</h2>
								<p className="text-slate-500 text-xl leading-relaxed">
									Founded with a vision to revolutionize healthcare, B2 Pro
									Healthcare has grown from a small clinic to a leading
									multi-specialty center. Our journey is defined by our
									unwavering commitment to patient well-being and clinical
									excellence.
								</p>
							</div>

							<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
								<div className="space-y-2">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-primary shadow-sm">
										<History className="h-6 w-6" />
									</div>
									<p className="font-black text-slate-900 text-xl">15+ Years</p>
									<p className="font-medium text-slate-500 text-sm">
										Of dedicated medical service across multiple departments.
									</p>
								</div>
								<div className="space-y-2">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-primary shadow-sm">
										<ShieldCheck className="h-6 w-6" />
									</div>
									<p className="font-black text-slate-900 text-xl">
										100% Certified
									</p>
									<p className="font-medium text-slate-500 text-sm">
										All our specialists and facilities are globally accredited.
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
							Core <span className="text-primary">Principles</span>
						</h2>
						<p className="mx-auto max-w-2xl text-slate-400 text-xl">
							What drives us to be the best in our field every single day.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<div className="group relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-12 backdrop-blur-md transition-all hover:bg-white/10">
							<div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-primary text-white shadow-primary/20 shadow-xl">
								<Target className="h-10 w-10" />
							</div>
							<h3 className="mb-4 font-black text-3xl text-white">
								Our Mission
							</h3>
							<p className="text-lg text-slate-400 leading-relaxed">
								To provide accessible, high-quality healthcare that empowers our
								community to live healthier, happier lives through innovation
								and compassionate service.
							</p>
						</div>

						<div className="group relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-12 backdrop-blur-md transition-all hover:bg-white/10">
							<div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-primary text-white shadow-primary/20 shadow-xl">
								<Eye className="h-10 w-10" />
							</div>
							<h3 className="mb-4 font-black text-3xl text-white">
								Our Vision
							</h3>
							<p className="text-lg text-slate-400 leading-relaxed">
								To be the most trusted healthcare partner in the region,
								recognized globally for our clinical standards, technological
								advancement, and patient-centric approach.
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
							{ label: "Patient Success", value: "99%", icon: HeartPulse },
							{ label: "Expert Doctors", value: "50+", icon: Award },
							{ label: "Modern Rooms", value: "120+", icon: Clock },
							{ label: "Awards Won", value: "25+", icon: Award },
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
