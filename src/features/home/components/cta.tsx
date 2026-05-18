import { Activity, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export function CTA() {
	const t = useTranslations("CTA");

	return (
		<section className="py-24">
			<div className="mx-auto max-w-400 px-6">
				<div className="relative space-y-8 overflow-hidden rounded-[3rem] bg-primary p-12 text-center lg:p-20">
					<div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]" />
					<h2 className="relative font-bold text-4xl text-white leading-tight lg:text-6xl">
						{t("title1")} <br className="hidden lg:block" /> {t("title2")}
					</h2>
					<p className="relative mx-auto max-w-2xl text-primary-foreground/80 text-xl">
						{t("desc")}
					</p>
					<div className="relative flex flex-col items-center justify-center gap-6 pt-4 sm:flex-row">
						<Button
							className="h-16 rounded-2xl bg-white px-10 text-lg text-primary shadow-xl transition-all hover:scale-105 hover:bg-slate-50 active:scale-95"
							size="lg"
						>
							{t("button")}
						</Button>
					</div>
					{/* Decorative icons in CTA */}
					<Activity className="absolute bottom-10 left-10 h-24 w-24 -rotate-12 text-white/5" />
					<Shield className="absolute top-10 right-10 h-24 w-24 rotate-12 text-white/5" />
				</div>
			</div>
		</section>
	);
}
