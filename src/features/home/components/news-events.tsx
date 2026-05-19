import Image from "next/image";

import { ArrowRight, CalendarDays } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";

export function NewsEvents() {
	const t = useTranslations("HomeNews");

	const newsItems = [
		{
			id: "card-1",
			image: "/medical-team.webp",
			category: "News",
			date: "Oct 15, 2026",
			titleKey: "news1Title",
			descKey: "news1Desc",
		},
		{
			id: "card-2",
			image: "/doctor-talking-patient.webp",
			category: "Events",
			date: "Oct 20, 2026",
			titleKey: "news2Title",
			descKey: "news2Desc",
		},
		{
			id: "card-3",
			image: "/surgeons-operating.webp",
			category: "News",
			date: "Oct 25, 2026",
			titleKey: "news3Title",
			descKey: "news3Desc",
		},
	];

	return (
		<section className="bg-[#F8F9FA] py-24">
			<div className="mx-auto max-w-[1600px] px-6">
				<div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">
					<div className="space-y-4">
						<h2 className="font-black text-4xl text-slate-900 md:text-5xl">
							{t("title")}
						</h2>
						<p className="max-w-2xl font-medium text-lg text-slate-500">
							{t("desc")}
						</p>
					</div>
					<Link
						className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-bold text-slate-600 transition-all hover:border-primary hover:text-primary"
						href="/news"
					>
						View All <ArrowRight className="h-4 w-4" />
					</Link>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{newsItems.map((item) => (
						<div
							className="group overflow-hidden rounded-[2.5rem] bg-white shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-2"
							key={item.id}
						>
							<div className="relative h-64 w-full overflow-hidden bg-slate-100">
								<Image
									alt={t(
										item.titleKey as "news1Title" | "news2Title" | "news3Title"
									)}
									className="object-cover transition-transform duration-500 group-hover:scale-105"
									fill
									src={item.image}
								/>
								<div className="absolute top-6 left-6 rounded-full bg-white/90 px-4 py-2 font-bold text-primary text-xs backdrop-blur-md">
									{item.category}
								</div>
							</div>
							<div className="p-8">
								<div className="mb-4 flex items-center gap-2 text-slate-400 text-sm">
									<CalendarDays className="h-4 w-4" />
									<span>{item.date}</span>
								</div>
								<h3 className="mb-4 line-clamp-2 font-black text-2xl text-slate-900 transition-colors group-hover:text-primary">
									{t(
										item.titleKey as "news1Title" | "news2Title" | "news3Title"
									)}
								</h3>
								<p className="mb-6 line-clamp-3 font-medium text-slate-500">
									{t(item.descKey as "news1Desc" | "news2Desc" | "news3Desc")}
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
					))}
				</div>
			</div>
		</section>
	);
}
