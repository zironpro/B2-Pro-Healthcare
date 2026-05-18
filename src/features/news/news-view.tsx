"use client";

import { useState } from "react";

import Image from "next/image";

import { ArrowRight, CalendarDays, Search, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

import { Input } from "@/components/ui/input";

import { Link } from "@/i18n/routing";

import { CTA } from "../home/components/cta";
import { NEWS_ITEMS } from "./data/data";

export function NewsView() {
	const t = useTranslations("News");
	const tHomeNews = useTranslations("HomeNews");

	const [activeFilter, setActiveFilter] = useState<"All" | "News" | "Events">(
		"All"
	);
	const [searchQuery, setSearchQuery] = useState("");

	// Filter and search logic
	const filteredItems = NEWS_ITEMS.filter((item) => {
		const matchesCategory =
			activeFilter === "All" || item.category === activeFilter;

		const title = item.useDirectNewsNamespace
			? t(item.titleKey as "news4Title" | "news5Title" | "news6Title")
			: tHomeNews(item.titleKey as "news1Title" | "news2Title" | "news3Title");

		const desc = item.useDirectNewsNamespace
			? t(item.descKey as "news4Desc" | "news5Desc" | "news6Desc")
			: tHomeNews(item.descKey as "news1Desc" | "news2Desc" | "news3Desc");

		const matchesSearch =
			title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			desc.toLowerCase().includes(searchQuery.toLowerCase());

		return matchesCategory && matchesSearch;
	});

	return (
		<main className="flex min-h-screen flex-col bg-white">
			{/* Immersive Page Header */}
			<section className="relative w-full bg-white px-4 pt-28 pb-6 lg:pt-32 lg:pb-8">
				<div className="relative mx-auto min-h-[250px] max-w-[1600px] overflow-hidden rounded-[4rem] bg-slate-900 lg:min-h-[350px]">
					<Image
						alt="Medical lab background"
						className="object-cover opacity-70 mix-blend-overlay"
						fill
						priority
						src="/modern_medical_lab_background.png"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent rtl:bg-gradient-to-l" />

					<div className="relative z-10 flex h-full flex-col justify-center px-8 py-10 lg:px-20 lg:py-16">
						<div className="max-w-3xl space-y-4">
							<div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 font-bold text-primary text-sm backdrop-blur-md">
								<Sparkles className="h-4 w-4" />
								<span>{t("heroTag")}</span>
							</div>
							<h1 className="font-black text-5xl text-white leading-tight tracking-tight lg:text-7xl">
								{t("heroTitle1")} <br />
								<span className="text-secondary">{t("heroTitle2")}</span>
							</h1>
							<p className="max-w-xl font-medium text-lg text-slate-300">
								{t("heroDesc")}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Filter & Search Hub */}
			<section className="bg-white py-12">
				<div className="mx-auto max-w-[1600px] px-6">
					<div className="flex flex-col items-center justify-between gap-6 border-slate-100 border-b pb-8 lg:flex-row">
						{/* Filter Tabs */}
						<div className="flex flex-wrap gap-3">
							{(["All", "News", "Events"] as const).map((filter) => (
								<button
									className={`rounded-full px-8 py-3 font-bold text-sm transition-all duration-300 ${
										activeFilter === filter
											? "bg-primary text-white shadow-lg shadow-primary/20"
											: "bg-slate-50 text-slate-500 hover:bg-slate-100"
									}`}
									key={filter}
									onClick={() => setActiveFilter(filter)}
								>
									{filter === "All" && t("all")}
									{filter === "News" && t("news")}
									{filter === "Events" && t("events")}
								</button>
							))}
						</div>

						{/* Search Bar */}
						<div className="relative w-full max-w-md">
							<Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
							<Input
								className="h-14 rounded-full border-slate-200 bg-slate-50 pr-6 pl-12 font-medium transition-all duration-300 placeholder:text-slate-400 focus-visible:border-primary focus-visible:ring-primary/20"
								onChange={(e) => setSearchQuery(e.target.value)}
								placeholder="Search news and events..."
								type="text"
								value={searchQuery}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* News Cards Grid */}
			<section className="bg-white pb-24">
				<div className="mx-auto max-w-[1600px] px-6">
					{filteredItems.length > 0 ? (
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{filteredItems.map((item) => {
								const title = item.useDirectNewsNamespace
									? t(
											item.titleKey as
												| "news4Title"
												| "news5Title"
												| "news6Title"
										)
									: tHomeNews(
											item.titleKey as
												| "news1Title"
												| "news2Title"
												| "news3Title"
										);

								const desc = item.useDirectNewsNamespace
									? t(item.descKey as "news4Desc" | "news5Desc" | "news6Desc")
									: tHomeNews(
											item.descKey as "news1Desc" | "news2Desc" | "news3Desc"
										);

								return (
									<div
										className="group overflow-hidden rounded-[2.5rem] border border-slate-50 bg-[#F8F9FA] shadow-lg shadow-slate-100/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-slate-200/50 hover:shadow-xl"
										key={item.id}
									>
										<div className="relative h-64 w-full overflow-hidden bg-slate-100">
											<Image
												alt={title}
												className="object-cover transition-transform duration-500 group-hover:scale-105"
												fill
												src={item.image}
											/>
											<div className="absolute top-6 left-6 rounded-full bg-white/90 px-4 py-2 font-bold text-primary text-xs backdrop-blur-md">
												{item.category === "News" ? t("news") : t("events")}
											</div>
										</div>
										<div className="p-8">
											<div className="mb-4 flex items-center gap-2 font-bold text-slate-400 text-sm">
												<CalendarDays className="h-4 w-4" />
												<span>{item.date}</span>
											</div>
											<h3 className="mb-4 line-clamp-2 font-black text-2xl text-slate-900 transition-colors group-hover:text-primary">
												{title}
											</h3>
											<p className="mb-6 line-clamp-3 font-medium text-slate-500 leading-relaxed">
												{desc}
											</p>
											<Link
												className="group/btn flex items-center gap-2 font-bold text-primary"
												href={`/news/${item.id}`}
											>
												Read More{" "}
												<ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 rtl:rotate-180" />
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					) : (
						<div className="py-24 text-center">
							<p className="font-bold text-slate-400 text-xl">
								No news or events match your filters.
							</p>
						</div>
					)}
				</div>
			</section>

			<CTA />
		</main>
	);
}
