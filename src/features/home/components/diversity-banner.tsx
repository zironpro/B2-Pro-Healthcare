"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";

export function DiversityBanner() {
	const t = useTranslations("HomeDiversity");

	return (
		<section className="relative w-full py-24">
			<div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
				<Image
					alt="Diversity in Healthcare"
					className="object-cover"
					fill
					src="/doctors_hero_background.png"
				/>
				<div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
			</div>
			<div className="relative z-10 mx-auto max-w-[1600px] px-6 text-center">
				<div className="mx-auto max-w-3xl space-y-6 rounded-[3rem] border border-white/20 bg-white/10 p-12 backdrop-blur-xl">
					<h2 className="font-black text-4xl text-white md:text-6xl">
						{t("title")}
					</h2>
					<p className="font-medium text-lg text-slate-200 md:text-xl">
						{t("desc")}
					</p>
				</div>
			</div>
		</section>
	);
}
