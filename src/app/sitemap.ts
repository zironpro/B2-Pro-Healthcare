import type { MetadataRoute } from "next";

import { DOCTORS } from "@/features/doctors/data";
import { LOCALES, SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
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
		LOCALES.map((locale) => ({
			url: `${SITE_URL}/${locale}${route}`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: route === "" ? 1.0 : 0.8,
		}))
	);

	const doctorRoutes = DOCTORS.flatMap((doctor) =>
		LOCALES.map((locale) => ({
			url: `${SITE_URL}/${locale}/doctors/${doctor.id}`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		}))
	);

	return [...staticRoutes, ...doctorRoutes];
}
