import Image from "next/image";

import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { doctors } from "@/lib/content";

export function Doctors() {
	return (
		<section className="bg-[#F8F9FA] py-24">
			<div className="mx-auto max-w-400 px-6">
				<div className="mb-16 space-y-4 text-center">
					<h2 className="font-bold text-4xl text-slate-900 lg:text-5xl">
						Specialist Doctors
					</h2>
					<p className="mx-auto max-w-2xl font-medium text-slate-500">
						Our team of highly qualified and experienced specialists is
						dedicated to providing the best possible care.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{doctors.map((doctor) => (
						<Card
							className="group overflow-hidden rounded-[2.5rem] border-none bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
							key={doctor.id}
						>
							<CardContent className="flex flex-col items-center space-y-6 p-0">
								<div className="relative h-64 w-full overflow-hidden rounded-3xl bg-primary/10 transition-colors group-hover:bg-primary/20">
									<div className="absolute inset-x-0 top-12 bottom-0 mx-auto h-full w-4/5 rounded-t-full bg-primary" />
									<Image
										alt={doctor.name}
										className="relative z-10 object-contain pt-4"
										fill
										src={doctor.image}
									/>
									<div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 font-bold text-[10px] text-primary backdrop-blur-md">
										<div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
										Available
									</div>
								</div>

								<div className="space-y-2 text-center">
									<h3 className="font-bold text-2xl text-slate-900">
										{doctor.name}
									</h3>
									<p className="font-medium text-slate-500 text-sm">
										{doctor.specialty}
									</p>
								</div>

								<div className="flex items-center gap-1 text-yellow-400">
									{["star-1", "star-2", "star-3", "star-4", "star-5"].map(
										(starKey) => (
											<Star
												className="h-4 w-4 fill-current"
												key={`${doctor.id}-${starKey}`}
											/>
										)
									)}
									<span className="ml-2 font-bold text-slate-400 text-xs">
										(100+)
									</span>
								</div>

								<Button
									className="w-full rounded-xl border-primary text-primary hover:bg-primary hover:text-white"
									variant="outline"
								>
									Book an Appointment
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="mt-16 flex justify-center">
					<Button className="h-12 rounded-full bg-primary px-10 font-bold shadow-lg shadow-primary/20">
						See more
					</Button>
				</div>
			</div>
		</section>
	);
}
