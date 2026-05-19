import type { MetadataRoute } from "next";

import { DOCTORS } from "@/features/doctors/data/data";

const locales = ["en", "ar"];

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl =
		process.env.NEXT_PUBLIC_APP_URL || "https://b2prohealthcare.com";

	const staticRoutes = [
		"",
		"/about",
		"/services",
		"/doctors",
		"/news",
		"/contact",
		"/booking",
		"/careers",
	].flatMap((route) =>
		locales.map((locale) => ({
			url: `${baseUrl}/${locale}${route}`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: route === "" ? 1.0 : 0.8,
		}))
	);

	const doctorRoutes = DOCTORS.flatMap((doctor) =>
		locales.map((locale) => ({
			url: `${baseUrl}/${locale}/doctors/${doctor.id}`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		}))
	);

	return [...staticRoutes, ...doctorRoutes];
}
