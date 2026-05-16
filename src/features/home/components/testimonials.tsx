import { Quote, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { testimonials } from "@/lib/content";

export function Testimonials() {
	return (
		<section className="bg-slate-50 py-24">
			<div className="mx-auto max-w-400 px-6">
				<div className="mb-16 space-y-4 text-center">
					<h2 className="font-bold text-secondary text-sm uppercase tracking-widest">
						Testimonials
					</h2>
					<p className="font-bold text-4xl text-slate-900 lg:text-5xl">
						What Our Patients Say
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					{testimonials.map((testimonial) => (
						<Card
							className="relative overflow-hidden rounded-[2.5rem] border-none bg-white p-10 shadow-slate-200/50 shadow-xl"
							key={testimonial.id}
						>
							<Quote className="absolute -top-6 -right-6 z-0 h-32 w-32 text-slate-50 opacity-50" />
							<CardContent className="relative z-10 space-y-6 p-0">
								<div className="flex gap-1">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											className="h-5 w-5 fill-yellow-400 text-yellow-400"
											key={`${testimonial.id}-star-${Number(i)}`}
										/>
									))}
								</div>
								<p className="font-medium text-slate-700 text-xl italic leading-relaxed">
									"{testimonial.content}"
								</p>
								<div className="flex items-center gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
										{testimonial.name.charAt(0)}
									</div>
									<div>
										<h4 className="font-bold text-slate-900">
											{testimonial.name}
										</h4>
										<p className="text-slate-500 text-sm">{testimonial.role}</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
