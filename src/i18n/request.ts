import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;

	if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
		locale = routing.defaultLocale;
	}

	const [
		about,
		booking,
		careers,
		contact,
		doctors,
		home,
		layout,
		metadata,
		news,
		services,
	] = await Promise.all([
		import(`../messages/${locale}/about.ts`),
		import(`../messages/${locale}/booking.ts`),
		import(`../messages/${locale}/careers.ts`),
		import(`../messages/${locale}/contact.ts`),
		import(`../messages/${locale}/doctors.ts`),
		import(`../messages/${locale}/home.ts`),
		import(`../messages/${locale}/layout.ts`),
		import(`../messages/${locale}/metadata.ts`),
		import(`../messages/${locale}/news.ts`),
		import(`../messages/${locale}/services.ts`),
	]);

	return {
		locale,
		messages: {
			...layout.default,
			...home.default,
			...about.default,
			...services.default,
			...doctors.default,
			...news.default,
			...careers.default,
			...booking.default,
			...contact.default,
			...metadata.default,
		},
	};
});
