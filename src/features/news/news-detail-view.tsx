"use client";

import Image from "next/image";
import { notFound } from "next/navigation";

import { ArrowLeft, CalendarDays, CheckCircle2, Share2 } from "lucide-react";
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

import { NEWS_ITEMS } from "./data/data";

export function NewsDetailView({ id }: { id: string }) {
	const t = useTranslations("NewsDetails");
	const tHomeNews = useTranslations("HomeNews");
	const tNews = useTranslations("News");

	const item = NEWS_ITEMS.find((n) => n.id === id);

	if (!item) {
		notFound();
	}

	const strictCardId = item.id as
		| "card-1"
		| "card-2"
		| "card-3"
		| "card-4"
		| "card-5"
		| "card-6";

	// Handle standard translations for dynamic headlines
	const title = item.useDirectNewsNamespace
		? tNews(item.titleKey as "news4Title" | "news5Title" | "news6Title")
		: tHomeNews(item.titleKey as "news1Title" | "news2Title" | "news3Title");

	const description = item.useDirectNewsNamespace
		? tNews(item.descKey as "news4Desc" | "news5Desc" | "news6Desc")
		: tHomeNews(item.descKey as "news1Desc" | "news2Desc" | "news3Desc");

	const localizedHighlights = t.raw(`${strictCardId}.highlights`) as string[];

	return (
		<main className="flex min-h-screen flex-col bg-white">
			{/* Immersive Hero Section */}
			<section className="relative w-full bg-white px-4 pt-28 pb-6 lg:pt-32 lg:pb-8">
				<div className="relative mx-auto min-h-[300px] max-w-[1600px] overflow-hidden rounded-[4rem] bg-slate-900 lg:min-h-[400px]">
					<Image
						alt={title}
						className="object-cover opacity-45 mix-blend-overlay"
						fill
						priority
						src={item.image}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent rtl:bg-gradient-to-l" />

					<div className="relative z-10 flex h-full flex-col justify-center px-8 py-12 lg:px-20 lg:py-20">
						<div className="max-w-3xl space-y-6">
							<Link
								className="inline-flex items-center gap-2 font-bold text-slate-400 text-sm transition-colors hover:text-white"
								href="/news"
							>
								<ArrowLeft className="h-4 w-4 rtl:rotate-180" />
								{t("backToNews")}
							</Link>

							<div className="space-y-4">
								<div className="flex flex-wrap items-center gap-3">
									<span className="rounded-full bg-primary/20 px-4 py-1.5 font-bold text-primary text-sm backdrop-blur-md">
										{item.category === "News" ? tNews("news") : tNews("events")}
									</span>
									<span className="rounded-full bg-white/10 px-4 py-1.5 font-bold text-sm text-white backdrop-blur-md">
										{t("readTime")}
									</span>
								</div>

								<h1 className="font-black text-4xl text-white leading-tight lg:text-6xl">
									{title}
								</h1>

								<div className="flex items-center gap-6 pt-4 font-medium text-slate-300">
									<div className="flex items-center gap-2">
										<CalendarDays className="h-5 w-5 text-primary" />
										<span>{item.date}</span>
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
						{/* Left: Article details */}
						<div className="space-y-12 lg:col-span-2">
							{/* Description Summary */}
							<div className="space-y-4">
								<p className="font-bold text-2xl text-slate-900 leading-relaxed">
									{description}
								</p>
							</div>

							{/* About / Deep dive */}
							<div className="space-y-6">
								<h2 className="font-black text-3xl text-slate-900">
									{t("aboutArticle")}
								</h2>
								<p className="text-lg text-slate-600 leading-relaxed">
									{t(`${strictCardId}.about`)}
								</p>
							</div>

							{/* Highlights */}
							<div className="space-y-6">
								<h2 className="font-black text-3xl text-slate-900">
									{t("keyHighlights")}
								</h2>
								<ul className="space-y-4">
									{localizedHighlights.map((hl) => (
										<li className="flex items-start gap-4" key={hl}>
											<CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
											<span className="text-lg text-slate-600 leading-relaxed">
												{hl}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Right: Sticky Share Card */}
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
									<Button
										className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primary font-bold text-lg text-white hover:bg-primary/90"
										onClick={() => alert("Copied link to clipboard!")}
										size="lg"
									>
										<span>{t("shareBtn")}</span>
										<Share2 className="h-5 w-5" />
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
