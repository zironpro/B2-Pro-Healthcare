"use client";

import * as React from "react";

import Image from "next/image";

import {
	Award,
	Check,
	Heart,
	Search,
	ShieldCheck,
	Star,
	Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { doctors } from "@/lib/content";
import { cn } from "@/lib/utils";

import { CTA } from "../home/components/cta";

export function DoctorsView() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	// Prepare autocomplete options (names and specialties)
	const searchOptions = React.useMemo(() => {
		const names = doctors.map((d) => ({
			value: d.name.toLowerCase(),
			label: d.name,
			type: "Doctor",
		}));
		const specialties = Array.from(
			new Set(doctors.map((d) => d.specialty))
		).map((s) => ({
			value: s.toLowerCase(),
			label: s,
			type: "Specialty",
		}));
		return [...names, ...specialties];
	}, []);

	return (
		<main className="flex min-h-screen flex-col bg-white">
			{/* Immersive Page Header */}
			<section className="relative w-full bg-white px-4 pt-28 pb-8 lg:pt-32 lg:pb-12">
				<div className="relative mx-auto min-h-[300px] max-w-[1600px] overflow-hidden rounded-[4rem] bg-slate-900 lg:min-h-[300px]">
					<Image
						alt="Medical team background"
						className="object-cover opacity-60 mix-blend-overlay"
						fill
						priority
						src="/doctors_hero_background.png"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />

					<div className="relative z-10 flex h-full flex-col justify-center px-8 py-12 lg:px-20 lg:py-20">
						<div className="max-w-3xl space-y-6">
							<div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 font-bold text-secondary text-sm backdrop-blur-md">
								<Award className="h-4 w-4" />
								<span>Top Rated Specialists</span>
							</div>
							<h1 className="font-black text-5xl text-white leading-tight tracking-tight lg:text-8xl">
								Meet Our <br />
								<span className="text-secondary">Specialist Doctors</span>
							</h1>
							<p className="max-w-xl font-medium text-lg text-slate-300 lg:text-xl">
								Our team consists of world-class medical professionals dedicated
								to providing exceptional care and personalized treatment for
								every patient.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Integrated Filter & Search Hub */}
			<section className="relative z-30 px-6">
				<div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-6 rounded-[3rem] border border-slate-100 bg-white p-4 shadow-2xl shadow-slate-200/40 lg:flex-row lg:p-6">
					<div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
						{[
							"All",
							"Cardiology",
							"Neurology",
							"Pediatrics",
							"General Physician",
						].map((specialty) => (
							<button
								className={cn(
									"rounded-full px-6 py-3 font-black text-sm transition-all active:scale-95",
									(specialty === "All" && !value) ||
										value === specialty.toLowerCase()
										? "bg-primary text-white shadow-lg shadow-primary/20"
										: "bg-slate-50 text-slate-500 hover:bg-slate-100"
								)}
								key={specialty}
								onClick={() =>
									setValue(specialty === "All" ? "" : specialty.toLowerCase())
								}
							>
								{specialty}
							</button>
						))}
					</div>

					<div className="h-px w-full bg-slate-100 lg:h-12 lg:w-px" />

					<div className="flex w-full items-center gap-4 lg:w-auto">
						<Popover onOpenChange={setOpen} open={open}>
							<PopoverTrigger asChild>
								<Button
									className="h-14 w-full gap-3 rounded-full bg-secondary px-8 font-black text-primary shadow-sm transition-all hover:bg-primary hover:text-white lg:w-auto"
									variant="outline"
								>
									<Search className="h-5 w-5" />
									<span>
										{value
											? searchOptions.find((opt) => opt.value === value)?.label
											: "Search Name..."}
									</span>
								</Button>
							</PopoverTrigger>
							<PopoverContent
								align="center"
								className="w-[--radix-popover-trigger-width] overflow-hidden rounded-[2.5rem] border-slate-100 p-0 shadow-2xl shadow-slate-300/50 backdrop-blur-xl"
							>
								<Command className="rounded-[2.5rem]">
									<div className="flex items-center border-slate-100 border-b px-8">
										<Search className="mr-4 h-6 w-6 text-primary opacity-50" />
										<CommandInput
											className="h-20 border-none text-xl focus-visible:ring-0"
											placeholder="Type to search specialists or medical departments..."
										/>
									</div>
									<div className="border-slate-100 border-b bg-slate-50/50 p-6">
										<div className="space-y-4">
											<p className="font-bold text-slate-400 text-xs uppercase tracking-widest">
												Quick Filters
											</p>
											<div className="flex flex-wrap gap-2">
												{[
													"All",
													"Available Today",
													"Top Rated",
													"10+ Years Exp",
												].map((filter) => (
													<button
														className="rounded-full border border-slate-200 bg-white px-4 py-2 font-bold text-slate-600 text-sm transition-all hover:border-primary hover:text-primary active:scale-95"
														key={filter}
													>
														{filter}
													</button>
												))}
											</div>
										</div>
									</div>
									<CommandList className="max-h-[400px] scroll-smooth p-4">
										<CommandEmpty className="py-20 text-center">
											<div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-slate-300">
												<Search className="h-10 w-10" />
											</div>
											<p className="font-bold text-slate-500 text-xl">
												No results found for your search.
											</p>
										</CommandEmpty>
										<CommandGroup className="px-2" heading="Explore">
											<CommandItem
												className="flex cursor-pointer items-center justify-between rounded-2xl p-4 transition-all hover:bg-primary/5 data-[selected=true]:bg-primary/10"
												onSelect={() => {
													setValue("");
													setOpen(false);
												}}
												value="all"
											>
												<div className="flex items-center gap-4">
													<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
														<Users className="h-6 w-6" />
													</div>
													<span className="font-bold text-lg text-slate-900">
														All Specialists
													</span>
												</div>
												{!value && <Check className="h-5 w-5 text-primary" />}
											</CommandItem>
										</CommandGroup>
										<div className="my-4 h-px bg-slate-100" />
										<CommandGroup
											className="px-2"
											heading="Available Specialties"
										>
											<div className="grid grid-cols-1 gap-2 py-2 md:grid-cols-2">
												{searchOptions
													.filter((opt) => opt.type === "Specialty")
													.map((opt) => (
														<CommandItem
															className="flex cursor-pointer items-center justify-between rounded-2xl p-4 transition-all hover:bg-primary/5 data-[selected=true]:bg-primary/10"
															key={opt.value}
															onSelect={(currentValue) => {
																setValue(
																	currentValue === value ? "" : currentValue
																);
																setOpen(false);
															}}
															value={opt.value}
														>
															<div className="flex items-center gap-4">
																<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
																	<Award className="h-6 w-6" />
																</div>
																<span className="font-bold text-lg text-slate-900">
																	{opt.label}
																</span>
															</div>
															{value === opt.value && (
																<Check className="h-5 w-5 text-primary" />
															)}
														</CommandItem>
													))}
											</div>
										</CommandGroup>
										<div className="my-4 h-px bg-slate-100" />
										<CommandGroup className="px-2" heading="Our Doctors">
											<div className="grid grid-cols-1 gap-2 py-2 md:grid-cols-2">
												{searchOptions
													.filter((opt) => opt.type === "Doctor")
													.map((opt) => (
														<CommandItem
															className="flex cursor-pointer items-center justify-between rounded-2xl p-4 transition-all hover:bg-primary/5 data-[selected=true]:bg-primary/10"
															key={opt.value}
															onSelect={(currentValue) => {
																setValue(
																	currentValue === value ? "" : currentValue
																);
																setOpen(false);
															}}
															value={opt.value}
														>
															<div className="flex items-center gap-4">
																<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
																	<Users className="h-6 w-6" />
																</div>
																<div className="flex flex-col leading-tight">
																	<span className="font-bold text-lg text-slate-900">
																		{opt.label}
																	</span>
																	<span className="font-medium text-slate-400 text-xs uppercase tracking-tighter">
																		Specialist Doctor
																	</span>
																</div>
															</div>
															{value === opt.value && (
																<Check className="h-5 w-5 text-primary" />
															)}
														</CommandItem>
													))}
											</div>
										</CommandGroup>
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>
					</div>
				</div>
			</section>

			{/* Doctors Grid */}
			<section className="py-10">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{doctors
							.filter(
								(d) =>
									!value ||
									d.name.toLowerCase().includes(value) ||
									d.specialty.toLowerCase().includes(value)
							)
							.map((doctor) => (
								<Card
									className="group overflow-hidden rounded-[3rem] border-none bg-white p-6 shadow-sm transition-all duration-500"
									key={doctor.id}
								>
									<CardContent className="flex flex-col items-center space-y-6 p-0">
										<div className="relative h-[320px] w-full overflow-hidden rounded-[2.5rem] bg-primary/10">
											<div className="absolute inset-x-0 top-16 bottom-0 mx-auto h-full w-4/5" />
											<Image
												alt={doctor.name}
												className={cn(
													"relative z-10 object-contain pt-8 transition-transform duration-500",
													(doctor.id === 2 || doctor.id === 3) &&
														"translate-y-2 scale-[1.3]"
												)}
												fill
												src={doctor.image}
											/>
											<div className="absolute top-6 left-6 z-20 flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 font-bold text-primary text-xs shadow-sm backdrop-blur-md">
												<div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
												Available Today
											</div>
										</div>

										<div className="w-full space-y-4 text-center">
											<div className="space-y-1">
												<p className="font-black text-2xl text-slate-900">
													{doctor.name}
												</p>
												<p className="font-bold text-primary/60 text-sm uppercase tracking-wide">
													{doctor.specialty}
												</p>
											</div>

											<div className="flex items-center justify-center gap-1 text-yellow-400">
												{[1, 2, 3, 4, 5].map((i) => (
													<Star className="h-4 w-4 fill-current" key={i} />
												))}
												<span className="ml-2 font-bold text-slate-400 text-sm">
													(150+ Reviews)
												</span>
											</div>

											<div className="flex items-center justify-center gap-4 border-slate-50 border-y py-2">
												<div className="text-center">
													<p className="font-black text-slate-900">
														{doctor.experience}
													</p>
													<p className="font-bold text-[10px] text-slate-400 uppercase tracking-tighter">
														Experience
													</p>
												</div>
												<div className="h-8 w-px bg-slate-100" />
												<div className="text-center">
													<p className="font-black text-slate-900">98%</p>
													<p className="font-bold text-[10px] text-slate-400 uppercase tracking-tighter">
														Success
													</p>
												</div>
											</div>

											<Button className="h-14 w-full rounded-2xl bg-secondary font-bold text-primary shadow-sm transition-all hover:bg-primary hover:text-white">
												Book Consultation
											</Button>
										</div>
									</CardContent>
								</Card>
							))}
					</div>
					{doctors.filter(
						(d) =>
							!value ||
							d.name.toLowerCase().includes(value) ||
							d.specialty.toLowerCase().includes(value)
					).length === 0 && (
						<div className="flex flex-col items-center justify-center space-y-4 py-20 text-center">
							<div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-slate-300">
								<Search className="h-10 w-10" />
							</div>
							<p className="font-bold text-2xl text-slate-900">
								No doctors found matching "{value}"
							</p>
							<Button
								className="font-bold text-primary"
								onClick={() => setValue("")}
								variant="ghost"
							>
								Clear search
							</Button>
						</div>
					)}
				</div>
			</section>

			{/* Why Our Team Section */}
			<section className="bg-[#F8F9FA] py-24">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="flex flex-col items-center gap-16 lg:flex-row">
						<div className="flex-1 space-y-10">
							<div className="space-y-4">
								<h2 className="font-black text-5xl text-slate-900 leading-tight lg:text-7xl">
									Committed to Your <br />
									<span className="text-primary">Health & Wellbeing</span>
								</h2>
								<p className="max-w-2xl text-slate-500 text-xl leading-relaxed">
									Our doctors are more than just medical experts—they are
									compassionate caregivers committed to your long-term health
									journey.
								</p>
							</div>

							<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
								{[
									{
										title: "World Class Experts",
										desc: "Our doctors come from top medical institutions globally.",
										icon: Award,
									},
									{
										title: "Patient-First Care",
										desc: "Personalized treatment plans tailored to your specific needs.",
										icon: Heart,
									},
									{
										title: "Certified Specialists",
										desc: "Every doctor is board-certified in their respective specialty.",
										icon: ShieldCheck,
									},
									{
										title: "Team Collaboration",
										desc: "Our specialists work together to ensure accurate diagnosis.",
										icon: Users,
									},
								].map((feature) => (
									<div className="flex gap-6" key={feature.title}>
										<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-lg shadow-slate-200/50">
											<feature.icon className="h-7 w-7" />
										</div>
										<div className="space-y-2">
											<p className="font-black text-slate-900 text-xl">
												{feature.title}
											</p>
											<p className="font-medium text-slate-500">
												{feature.desc}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="relative aspect-square w-full flex-1 overflow-hidden rounded-[4rem] shadow-2xl lg:aspect-[4/5]">
							<Image
								alt="Medical Consultation"
								className="object-cover"
								fill
								src="/doctors_hero_background.png"
							/>
							<div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
							<div className="absolute right-10 bottom-10 left-10 rounded-[2.5rem] bg-white/90 p-8 shadow-2xl backdrop-blur-md">
								<p className="mb-2 font-arabic font-black text-3xl text-slate-900 italic">
									"Healing is a matter of time, but it is sometimes also a
									matter of opportunity."
								</p>
								<p className="font-bold text-primary">— Hippocrates</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<CTA />
		</main>
	);
}
