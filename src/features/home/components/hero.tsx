import Image from "next/image";

import { Activity, ArrowRight, Pill } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="relative w-full bg-white px-4 pt-28 pb-12 lg:pt-36 lg:pb-20">
			{/* Main Banner Container */}
			<div className="relative mx-auto min-h-[350px] max-w-[1600px] overflow-hidden rounded-[3rem] bg-primary lg:min-h-[520px]">
				{/* Visually Hidden H1 for SEO */}
				<h1 className="sr-only">
					B2 Pro Healthcare - Leading Medical & Specialist Services
				</h1>

				{/* Background Decorative Text */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
				>
					<span className="-translate-y-2 transform font-black text-[10rem] text-accent leading-none tracking-tighter opacity-20 lg:text-[18rem]">
						Healthcare
					</span>
				</div>

				{/* Foreground Content Wrapper */}
				<div className="absolute inset-0 z-10 flex flex-col justify-between p-6 lg:p-10">
					{/* Top Layer: Badges */}
					<div className="relative flex w-full items-start justify-between">
						<div className="flex cursor-default items-center space-x-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-md transition-all hover:bg-white/20">
							<div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-primary">
								<Activity className="h-4 w-4" />
							</div>
							<span className="font-bold text-white text-xs tracking-wide lg:text-base">
								Reduce HbA1c
							</span>
						</div>

						<div className="flex cursor-default items-center space-x-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-md transition-all hover:bg-white/20">
							<div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-300 text-primary">
								<Pill className="h-4 w-4" />
							</div>
							<span className="font-bold text-white text-xs tracking-wide lg:text-base">
								No More Medications
							</span>
						</div>
					</div>

					{/* Bottom Layer: Info & Buttons */}
					<div className="relative z-20 flex w-full flex-col items-end justify-between gap-4 lg:flex-row">
						{/* Left Info Text */}
						<div className="max-w-xs text-left">
							<p className="font-bold text-[9px] text-white uppercase leading-relaxed tracking-widest opacity-80 lg:text-[10px]">
								If you are looking for a creative and easy way to build a
								website. WOW! is the perfect solution.
							</p>
						</div>

						{/* Right Action Buttons */}
						<div className="flex items-center gap-2">
							<Button className="h-14 rounded-full bg-secondary px-8 font-black text-base text-primary shadow-black/10 shadow-xl transition-all hover:bg-secondary/90">
								Book Consultation
							</Button>
							<div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-secondary text-primary shadow-black/10 shadow-xl transition-transform hover:scale-105">
								<ArrowRight className="h-6 w-6" />
							</div>
						</div>
					</div>
				</div>

				{/* Doctor Image - Anchored to the very bottom of the banner */}
				<div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[300px] w-full max-w-[340px] -translate-x-1/2 lg:h-[500px] lg:max-w-[500px]">
					<Image
						alt="Doctor"
						className="object-contain object-bottom"
						fill
						priority
						src="/hero.svg"
					/>
				</div>
			</div>
		</section>
	);
}
