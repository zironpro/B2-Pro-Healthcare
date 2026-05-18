import Image from "next/image";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useTranslations } from "next-intl";

import { Card, CardContent } from "@/components/ui/card";

import { testimonials } from "@/lib/content";

export function Testimonials() {
	const t = useTranslations("HomeTestimonials");
	const tContent = useTranslations("ContentTestimonials");

	return (
		<section className="relative bg-white py-24">
			<div className="mx-auto max-w-400 px-6">
				<div className="mb-20 space-y-2 text-center">
					<h2 className="font-bold text-5xl text-slate-900 tracking-tight lg:text-6xl">
						{t("title")}
					</h2>
					<p className="font-medium text-lg text-slate-400">{t("desc")}</p>
				</div>

				<div className="group relative">
					{/* Carousel Arrows */}
					<div className="absolute top-1/2 -left-4 z-10 -translate-y-1/2">
						<button className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform hover:scale-110">
							<ChevronLeft className="h-6 w-6" />
						</button>
					</div>
					<div className="absolute top-1/2 -right-4 z-10 -translate-y-1/2">
						<button className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform hover:scale-110">
							<ChevronRight className="h-6 w-6" />
						</button>
					</div>

					{/* Testimonials Grid */}
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{testimonials.map((testimonial) => (
							<Card
								className="rounded-3xl border-none bg-white p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
								key={testimonial.id}
							>
								<CardContent className="flex flex-col items-center space-y-4 p-0 text-center">
									<div className="flex w-full items-center gap-4 text-left">
										{/* Avatar with Crescent */}
										<div className="relative h-20 w-20 shrink-0">
											<div className="absolute top-0 -left-2 h-20 w-10 rounded-l-full bg-primary opacity-20" />
											<div className="absolute top-0 -left-1 h-20 w-10 rounded-l-full bg-primary" />
											<div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-sm">
												<Image
													alt={testimonial.name}
													className="object-cover"
													fill
													src={testimonial.image || "/friendly-doctor.webp"}
												/>
											</div>
										</div>

										<div className="space-y-1">
											<p className="font-bold text-slate-900 text-xl">
												{tContent(
													`${testimonial.id}.name` as Parameters<
														typeof tContent
													>[0]
												)}
											</p>
											<p className="font-medium text-slate-400 text-xs">
												{tContent(
													`${testimonial.id}.role` as Parameters<
														typeof tContent
													>[0]
												)}
											</p>
											<div className="flex gap-0.5">
												{["star-1", "star-2", "star-3", "star-4", "star-5"].map(
													(starKey) => (
														<Star
															className="h-3 w-3 fill-primary text-primary"
															key={`${testimonial.id}-${starKey}`}
														/>
													)
												)}
											</div>
										</div>
									</div>

									<p className="pt-2 font-medium text-slate-500 text-sm leading-relaxed">
										{tContent(
											`${testimonial.id}.content` as Parameters<
												typeof tContent
											>[0]
										)}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
