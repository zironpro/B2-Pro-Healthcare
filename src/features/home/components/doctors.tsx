import Image from "next/image";

import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Link } from "@/i18n/routing";
import { doctors } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Doctors() {
	const t = useTranslations("HomeDoctors");
	const tContent = useTranslations("ContentDoctors");

	return (
		<section className="bg-[#F8F9FA] py-24">
			<div className="mx-auto max-w-400 px-6">
				<div className="mb-16 space-y-4 text-center">
					<h2 className="font-bold text-4xl text-slate-900 lg:text-5xl">
						{t("title")}
					</h2>
					<p className="mx-auto max-w-2xl font-medium text-slate-500">
						{t("desc")}
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{doctors.map((doctor) => (
						<Card
							className="group overflow-hidden rounded-[2.5rem] border-none bg-white p-8 shadow-sm transition-all duration-300"
							key={doctor.id}
						>
							<CardContent className="flex flex-col items-center space-y-6 p-0">
								<div className="relative h-64 w-full overflow-hidden rounded-3xl bg-primary/10">
									<div className="absolute inset-x-0 top-12 bottom-0 mx-auto h-full w-4/5" />
									<Image
										alt={doctor.name}
										className={cn(
											"relative z-10 object-contain pt-4",
											(doctor.id === 2 || doctor.id === 3) &&
												"translate-y-2 scale-[1.3]"
										)}
										fill
										src={doctor.image}
									/>
									<div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 font-bold text-[10px] text-primary backdrop-blur-md">
										<div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
										{t("available")}
									</div>
								</div>

								<div className="space-y-2 text-center">
									<p className="font-bold text-2xl text-slate-900">
										{tContent(
											`${doctor.id}.name` as Parameters<typeof tContent>[0]
										)}
									</p>
									<p className="font-medium text-slate-500 text-sm">
										{tContent(
											`${doctor.id}.specialty` as Parameters<typeof tContent>[0]
										)}
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
									className="h-14 w-full rounded-xl bg-secondary font-bold text-primary transition-all hover:bg-primary hover:text-white"
									render={({ className }) => (
										<Link className={className} href={`/doctors/${doctor.id}`}>
											{t("book")}
										</Link>
									)}
								/>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="mt-16 flex justify-center">
					<Button
						className="h-12 rounded-full bg-primary px-10 font-bold shadow-lg shadow-primary/20"
						render={({ className }) => (
							<Link className={className} href="/doctors">
								{t("seeMore")}
							</Link>
						)}
					/>
				</div>
			</div>
		</section>
	);
}
