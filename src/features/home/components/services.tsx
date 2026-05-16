import { Ambulance, CalendarDays, FlaskConical, Headset } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { services } from "@/lib/content";
import { cn } from "@/lib/utils";

const ICON_MAP = {
	HeartPulse: FlaskConical, // Well equipped lab
	Activity: Ambulance, // Emergency Ambulance
	Users: CalendarDays, // Online Appointment
	Shield: Headset, // Call Center
};

export function Services() {
	return (
		<section className="bg-white py-24">
			<div className="mx-auto max-w-400 px-6">
				<div className="mb-20 space-y-4 text-center">
					<h2 className="font-bold text-4xl text-slate-900 lg:text-5xl">
						Our Medical Services
					</h2>
					<p className="mx-auto max-w-2xl font-medium text-slate-500">
						We are dedicated to serve you <br />
						best medical services
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{services.map((service) => {
						const IconComponent =
							ICON_MAP[service.icon as keyof typeof ICON_MAP];

						return (
							<Card
								className={cn(
									"group flex flex-col items-center justify-center rounded-[2.5rem] p-12 text-center transition-all duration-300",
									"border-none bg-[#F8F9FA] shadow-sm hover:bg-primary hover:text-white hover:shadow-2xl hover:shadow-primary/20"
								)}
								key={service.title}
							>
								<CardContent className="flex flex-col items-center space-y-6 p-0">
									<div
										className={cn(
											"flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300",
											"bg-white text-primary shadow-lg shadow-slate-200 group-hover:bg-white/20 group-hover:text-white group-hover:shadow-none"
										)}
									>
										{IconComponent && <IconComponent className="h-10 w-10" />}
									</div>
									<p
										className={cn(
											"font-bold text-xl leading-tight transition-colors duration-300",
											"text-slate-900 group-hover:text-white"
										)}
									>
										{service.title}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
