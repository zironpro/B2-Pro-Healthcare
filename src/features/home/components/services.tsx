import { Activity, HeartPulse, Shield, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { services } from "@/lib/content";
import { cn } from "@/lib/utils";

const ICON_MAP = {
	HeartPulse,
	Activity,
	Users,
	Shield,
};

export function Services() {
	return (
		<section className="bg-slate-50/50 py-24">
			<div className="mx-auto max-w-400 px-6">
				<div className="mb-16 space-y-4 text-center">
					<h2 className="font-bold text-primary text-sm uppercase tracking-widest">
						Our Services
					</h2>
					<p className="font-bold text-4xl text-slate-900 lg:text-5xl">
						Specialized Care for Your Health
					</p>
					<p className="mx-auto max-w-2xl text-lg text-slate-600">
						We provide a wide range of medical services with a focus on
						patient-centered care and advanced technology.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{services.map((service) => {
						const IconComponent =
							ICON_MAP[service.icon as keyof typeof ICON_MAP];
						return (
							<Card
								className="group overflow-hidden rounded-3xl border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
								key={service.title}
							>
								<CardHeader className="p-8 pb-0">
									<div
										className={cn(
											"mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 transition-colors group-hover:bg-primary/10",
											service.color
										)}
									>
										{IconComponent && <IconComponent className="h-7 w-7" />}
									</div>
									<CardTitle className="font-bold text-slate-900 text-xl">
										{service.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="p-8 pt-4">
									<p className="text-slate-600 leading-relaxed">
										{service.description}
									</p>
									<Button
										className="mt-4 h-auto p-0 font-bold text-primary transition-all group-hover:gap-2"
										variant="link"
									>
										Read More
										<span className="opacity-0 transition-opacity group-hover:opacity-100">
											→
										</span>
									</Button>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
