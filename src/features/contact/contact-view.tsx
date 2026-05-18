import Image from "next/image";

import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { CTA } from "../home/components/cta";

export function ContactView() {
	const t = useTranslations("Contact");

	return (
		<main className="flex min-h-screen flex-col bg-white">
			{/* Immersive Hero Section */}
			<section className="relative w-full bg-white px-4 pt-28 pb-6 lg:pt-32 lg:pb-8">
				<div className="relative mx-auto min-h-[250px] max-w-[1600px] overflow-hidden rounded-[4rem] bg-slate-900 lg:min-h-[350px]">
					<Image
						alt="B2 Pro Healthcare Contact Support"
						className="object-cover opacity-50 mix-blend-overlay"
						fill
						priority
						src="/medical-team.webp"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />

					<div className="relative z-10 flex h-full flex-col justify-center px-8 py-10 lg:px-20 lg:py-16">
						<div className="max-w-3xl space-y-4">
							<div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 font-bold text-primary text-sm backdrop-blur-md">
								<Phone className="h-4 w-4" />
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

			{/* Contact Methods Section */}
			<section className="py-16 lg:py-24">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="mb-16 space-y-4 text-center">
						<h2 className="font-black text-5xl text-slate-900 lg:text-6xl">
							{t("methodsTitle1")}{" "}
							<span className="text-primary">{t("methodsTitle2")}</span>
						</h2>
						<p className="mx-auto max-w-2xl text-slate-500 text-xl">
							{t("methodsDesc")}
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
						{[
							{
								label: t("methods.emergency.label"),
								value: "+1 (800) 123-4567",
								desc: t("methods.emergency.desc"),
								icon: Phone,
							},
							{
								label: t("methods.email.label"),
								value: "care@b2prohealth.com",
								desc: t("methods.email.desc"),
								icon: Mail,
							},
							{
								label: t("methods.clinic.label"),
								value: "123 Healthcare Ave, NY",
								desc: t("methods.clinic.desc"),
								icon: MapPin,
							},
							{
								label: t("methods.hours.label"),
								value: "Mon - Sun: 24/7",
								desc: t("methods.hours.desc"),
								icon: Clock,
							},
						].map((contact) => (
							<div
								className="flex flex-col items-center space-y-4 rounded-[3rem] border border-slate-100 bg-[#F8F9FA] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/5 hover:shadow-xl"
								key={contact.label}
							>
								<div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
									<contact.icon className="h-10 w-10" />
								</div>
								<div className="space-y-2">
									<h3 className="font-black text-slate-900 text-xl">
										{contact.label}
									</h3>
									<p className="font-bold text-lg text-primary">
										{contact.value}
									</p>
									<p className="font-medium text-slate-500 text-sm">
										{contact.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className="bg-slate-900 py-24">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
						{/* Text Content */}
						<div className="space-y-8">
							<div className="space-y-4">
								<h2 className="font-black text-5xl text-white lg:text-6xl">
									{t("formTitle1")} <br />
									<span className="text-secondary">{t("formTitle2")}</span>
								</h2>
								<p className="max-w-xl text-slate-400 text-xl leading-relaxed">
									{t("formDesc")}
								</p>
							</div>

							<div className="space-y-6">
								<div className="flex items-center gap-4 rounded-3xl bg-white/5 p-6 backdrop-blur-md">
									<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
										<Phone className="h-6 w-6" />
									</div>
									<div>
										<p className="font-bold text-lg text-white">
											{t("callUs")}
										</p>
										<p className="text-slate-400 text-sm" dir="ltr">
											+1 (800) 123-4567
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Form */}
						<div className="rounded-[3rem] bg-white p-10 shadow-2xl lg:p-14">
							<form className="space-y-8">
								<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
									<div className="space-y-3">
										<label
											className="font-bold text-slate-700 text-sm"
											htmlFor="firstName"
										>
											{t("firstName")}
										</label>
										<Input
											className="h-14 rounded-2xl border-slate-200 bg-slate-50 px-5 text-base focus-visible:ring-primary"
											id="firstName"
											type="text"
										/>
									</div>
									<div className="space-y-3">
										<label
											className="font-bold text-slate-700 text-sm"
											htmlFor="lastName"
										>
											{t("lastName")}
										</label>
										<Input
											className="h-14 rounded-2xl border-slate-200 bg-slate-50 px-5 text-base focus-visible:ring-primary"
											id="lastName"
											type="text"
										/>
									</div>
								</div>

								<div className="space-y-3">
									<label
										className="font-bold text-slate-700 text-sm"
										htmlFor="email"
									>
										{t("email")}
									</label>
									<Input
										className="h-14 rounded-2xl border-slate-200 bg-slate-50 px-5 text-base focus-visible:ring-primary"
										id="email"
										type="email"
									/>
								</div>

								<div className="space-y-3">
									<label
										className="font-bold text-slate-700 text-sm"
										htmlFor="subject"
									>
										{t("subject")}
									</label>
									<Input
										className="h-14 rounded-2xl border-slate-200 bg-slate-50 px-5 text-base focus-visible:ring-primary"
										id="subject"
										type="text"
									/>
								</div>

								<div className="space-y-3">
									<label
										className="font-bold text-slate-700 text-sm"
										htmlFor="message"
									>
										{t("message")}
									</label>
									<Textarea
										className="min-h-[160px] resize-none rounded-3xl border-slate-200 bg-slate-50 p-5 text-base focus-visible:ring-primary"
										id="message"
									/>
								</div>

								<Button
									className="h-14 w-full rounded-2xl bg-primary font-bold text-lg text-white hover:bg-primary/90"
									size="lg"
								>
									<span>{t("send")}</span>
									<Send className="ml-2 h-5 w-5" />
								</Button>
							</form>
						</div>
					</div>
				</div>
			</section>

			<CTA />
		</main>
	);
}
