import Image from "next/image";

import { Shield } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="relative w-full overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
			<div className="relative z-10 mx-auto max-w-400 px-6">
				<div className="flex flex-col items-center gap-12 lg:flex-row">
					{/* Text Content */}
					<div className="max-w-2xl flex-1 space-y-8 text-center lg:text-left">
						<Badge
							className="fade-in slide-in-from-bottom-4 animate-in rounded-full border-none bg-secondary/10 px-4 py-2 font-medium text-secondary text-sm duration-1000"
							variant="secondary"
						>
							<Shield className="mr-2 h-4 w-4" />
							Trusted by over 10,000+ patients
						</Badge>

						<h1 className="fade-in slide-in-from-bottom-6 animate-in font-bold text-5xl text-slate-900 tracking-tight delay-200 duration-1000 lg:text-7xl">
							Revolutionizing <span className="text-primary">Healthcare</span>{" "}
							for Everyone
						</h1>

						<p className="fade-in slide-in-from-bottom-8 animate-in text-slate-600 text-xl leading-relaxed delay-300 duration-1000">
							Experience the next generation of medical care with our advanced
							digital platform. Connect with top specialists, manage your health
							records, and book appointments seamlessly.
						</p>

						<div className="fade-in slide-in-from-bottom-10 flex animate-in flex-col items-center gap-4 pt-4 delay-500 duration-1000 sm:flex-row">
							<Button
								className="h-14 w-full rounded-xl px-8 text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 sm:w-auto"
								size="lg"
							>
								Book Appointment
							</Button>
							<Button
								className="h-14 w-full rounded-xl border-2 border-secondary/20 px-8 text-lg text-secondary transition-all hover:bg-secondary/5 sm:w-auto"
								size="lg"
								variant="outline"
							>
								Learn More
							</Button>
						</div>

						{/* Stats Cards */}
						<div className="fade-in slide-in-from-bottom-12 grid animate-in grid-cols-2 gap-6 pt-12 delay-700 duration-1000 md:grid-cols-3">
							<div className="flex flex-col">
								<span className="font-bold text-3xl text-slate-900">250+</span>
								<span className="text-slate-500 text-sm">Expert Doctors</span>
							</div>
							<div className="flex flex-col">
								<span className="font-bold text-3xl text-slate-900">15+</span>
								<span className="text-slate-500 text-sm">Specializations</span>
							</div>
							<div className="flex flex-col">
								<span className="font-bold text-3xl text-slate-900">24/7</span>
								<span className="text-slate-500 text-sm">Emergency Care</span>
							</div>
						</div>
					</div>

					{/* Hero Image / Visual Element */}
					<div className="fade-in slide-in-from-right-10 relative flex-1 animate-in delay-300 duration-1000">
						<div className="relative z-10 overflow-hidden rounded-3xl border-8 border-white shadow-2xl shadow-blue-100">
							<Image
								alt="Modern Healthcare"
								className="h-auto w-full object-cover"
								height={600}
								priority
								src="/healthcare_hero_1778827758056.png"
								width={700}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
