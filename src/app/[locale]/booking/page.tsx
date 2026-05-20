import type { Metadata } from "next";

import { setRequestLocale } from "next-intl/server";
import type { Graph } from "schema-dts";

import { BookingView } from "@/features/booking/booking-view";
import { JsonLd } from "@/features/seo/json-ld";
import { SITE_URL } from "@/lib/site-config";

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const meta = (await import(`@/messages/${locale}/metadata`)).default;

	return {
		title: meta.booking.title,
		description: meta.booking.description,
		alternates: {
			canonical: `${SITE_URL}/${locale}/booking`,
		},
	};
}

type BookingMeta = {
	booking: {
		title: string;
		description: string;
	};
};

const getBookingSchema = (locale: string, meta: BookingMeta): Graph => {
	const localeUrl = `${SITE_URL}/${locale}`;
	const isAr = locale === "ar";
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${localeUrl}/booking#webpage`,
				url: `${localeUrl}/booking`,
				name: meta.booking.title,
				isPartOf: { "@id": `${localeUrl}/#website` },
				about: { "@id": `${localeUrl}/#organization` },
				description: meta.booking.description,
				inLanguage: isAr ? "ar-AE" : "en-US",
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${localeUrl}/booking#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: isAr ? "الرئيسية" : "Home",
						item: localeUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: isAr ? "احجز موعداً" : "Book Appointment",
						item: `${localeUrl}/booking`,
					},
				],
			},
		],
	};
};

export default async function BookingPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);
	const meta = (await import(`@/messages/${locale}/metadata`)).default;
	const bookingSchema = getBookingSchema(locale, meta);

	return (
		<>
			<JsonLd data={bookingSchema} />
			<BookingView />
		</>
	);
}
