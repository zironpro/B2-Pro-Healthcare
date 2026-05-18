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

import { Button } from "@/components/ui/button";

import { Link } from "@/i18n/routing";

import { OPEN_ROLES } from "./data/data";

const CATEGORIES = [
	"All",
	"Cardiology",
	"Intensive Care",
	"Pediatrics",
	"Administration",
];

export function CareersView() {
	const [activeCategory, setActiveCategory] = useState("All");

	const filteredRoles = OPEN_ROLES.filter(
		(role) => activeCategory === "All" || role.department === activeCategory
	);

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
					<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />

					<div className="relative z-10 flex h-full flex-col justify-center px-8 py-10 lg:px-20 lg:py-16">
						<div className="max-w-3xl space-y-4">
							<div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 font-bold text-primary text-sm backdrop-blur-md">
								<Briefcase className="h-4 w-4" />
								<span>Join Our Team</span>
							</div>
							<h1 className="font-black text-5xl text-white leading-tight lg:text-7xl">
								Build Your Career <br />
								<span className="text-secondary">With Us.</span>
							</h1>
							<p className="max-w-xl text-lg text-slate-300 leading-relaxed">
								Become part of a world-class team dedicated to redefining
								healthcare. We offer a culture of excellence, continuous
								learning, and compassionate care.
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
							Why <span className="text-primary">B2 Pro?</span>
						</h2>
						<p className="mx-auto max-w-2xl text-slate-500 text-xl">
							We believe in investing in our people. When you grow, we grow.
							Here is what makes working with us special.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{[
							{
								title: "Continuous Learning",
								description:
									"Access to global conferences, advanced training, and educational allowances to keep you at the top of your field.",
								icon: GraduationCap,
							},
							{
								title: "Collaborative Culture",
								description:
									"Work alongside some of the brightest minds in medicine in a supportive, multi-disciplinary environment.",
								icon: Users,
							},
							{
								title: "Comprehensive Benefits",
								description:
									"Premium health coverage, wellness programs, and competitive compensation packages for you and your family.",
								icon: Heart,
							},
						].map((perk) => (
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
							Open Positions
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-slate-500">
							Discover exciting career opportunities and join our growing team.
						</p>
					</div>

					{/* Filters */}
					<div className="mb-16 flex flex-wrap justify-center gap-4">
						{CATEGORIES.map((category) => (
							<Button
								className={`h-12 rounded-2xl px-8 font-bold text-sm transition-all ${
									activeCategory !== category &&
									"border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
								}`}
								key={category}
								onClick={() => setActiveCategory(category)}
								variant={activeCategory === category ? "default" : "outline"}
							>
								{category}
							</Button>
						))}
					</div>

					{/* Job Cards Grid */}
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{filteredRoles.map((role) => (
							<div
								className="group flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-primary/5 hover:shadow-xl"
								key={role.id}
							>
								<div className="space-y-6">
									<div className="flex items-start justify-between gap-4">
										<h3 className="font-black text-2xl text-slate-900 transition-colors group-hover:text-primary">
											{role.title}
										</h3>
										<span className="shrink-0 rounded-full bg-primary/10 px-4 py-1.5 font-bold text-primary text-xs">
											{role.department}
										</span>
									</div>

									<p className="line-clamp-2 text-slate-500 leading-relaxed">
										{role.description}
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
										<span>View Details</span>
										<ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
