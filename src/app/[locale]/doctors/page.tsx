import type { Metadata } from "next";

import { DoctorsView } from "@/features/doctors/doctors-view";
import { JsonLd } from "@/features/seo/json-ld";

export const metadata: Metadata = {
	title: "Top Rated Specialists | B2 Pro Healthcare",
	description:
		"Our team consists of world-class medical professionals dedicated to providing exceptional care and personalized treatment for every patient.",
	alternates: {
		canonical: "https://b2prohealthcare.com/en/doctors",
	},
};

const SITE_URL = "https://b2prohealthcare.com/en";

const doctorsSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "CollectionPage",
			"@id": `${SITE_URL}/doctors#webpage`,
			url: `${SITE_URL}/doctors`,
			name: "Top Rated Specialists | B2 Pro Healthcare",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"Our team consists of world-class medical professionals dedicated to providing exceptional care and personalized treatment for every patient.",
			inLanguage: "en-US",
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${SITE_URL}/doctors#breadcrumb`,
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
					name: "Doctors",
					item: `${SITE_URL}/doctors`,
				},
			],
		},
	],
};

export default function DoctorsPage() {
	return (
		<>
			<JsonLd data={doctorsSchema} />
			<DoctorsView />
		</>
	);
}
