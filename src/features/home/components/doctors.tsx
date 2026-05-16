import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { doctors } from "@/lib/content";

export function Doctors() {
	return (
		<section className="bg-white py-24">
			<div className="mx-auto max-w-400 px-6">
				<div className="mb-16 space-y-4 text-center">
					<h2 className="font-bold text-primary text-sm uppercase tracking-widest">
						Our Experts
					</h2>
					<p className="font-bold text-4xl text-slate-900 lg:text-5xl">
						Meet Our Specialist Doctors
					</p>
					<p className="mx-auto max-w-2xl text-lg text-slate-600">
						Our team of highly qualified and experienced specialists is
						dedicated to providing the best possible care.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
					{doctors.map((doctor) => (
						<Card
							className="group overflow-hidden border-none bg-transparent shadow-none"
							key={doctor.id}
						>
							<CardHeader className="mb-6 p-0">
								<div className="relative aspect-4/5 overflow-hidden rounded-[2rem] transition-transform duration-500 group-hover:scale-[1.02]">
									<Image
										alt={doctor.name}
										className="object-cover"
										fill
										src={doctor.image}
									/>
									<div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
									<Badge className="absolute top-6 right-6 rounded-xl border-none bg-white/90 px-4 py-2 font-bold text-primary backdrop-blur-md hover:bg-white">
										{doctor.experience}
									</Badge>
								</div>
							</CardHeader>
							<CardContent className="space-y-2 p-0 text-center">
								<CardTitle className="font-bold text-2xl text-slate-900">
									{doctor.name}
								</CardTitle>
								<p className="font-semibold text-secondary text-sm uppercase tracking-wider">
									{doctor.specialty}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
