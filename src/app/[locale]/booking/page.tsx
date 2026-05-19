import type { Metadata } from "next";

import { BookingView } from "@/features/booking/booking-view";
import { JsonLd } from "@/features/seo/json-ld";

export const metadata: Metadata = {
	title: "Book an Appointment | B2 Pro Healthcare",
	description:
		"Schedule a consultation with our world-class medical specialists in just a few simple steps.",
	alternates: {
		canonical: "https://b2prohealthcare.com/en/booking",
	},
};

const SITE_URL = "https://b2prohealthcare.com/en";

const bookingSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebPage",
			"@id": `${SITE_URL}/booking#webpage`,
			url: `${SITE_URL}/booking`,
			name: "Book an Appointment | B2 Pro Healthcare",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"Schedule a consultation with our world-class medical specialists in just a few simple steps.",
			inLanguage: "en-US",
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${SITE_URL}/booking#breadcrumb`,
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: SITE_URL,
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Book Appointment",
					item: `${SITE_URL}/booking`,
				},
			],
		},
	],
};

export default function BookingPage() {
	return (
		<>
			<JsonLd data={bookingSchema} />
			<BookingView />
		</>
	);
}
