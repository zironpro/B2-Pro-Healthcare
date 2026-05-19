import type { Metadata } from "next";

import { JsonLd } from "@/features/seo/json-ld";
import { ServicesView } from "@/features/services/services-view";

export const metadata: Metadata = {
	title: "Our Medical Specialties | B2 Pro Healthcare",
	description:
		"Combining state-of-the-art technology with compassionate care to provide you with the best healthcare experience.",
	alternates: {
		canonical: "https://b2prohealthcare.com/en/services",
	},
};

const SITE_URL = "https://b2prohealthcare.com/en";

const servicesSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "CollectionPage",
			"@id": `${SITE_URL}/services#webpage`,
			url: `${SITE_URL}/services`,
			name: "Our Medical Specialties | B2 Pro Healthcare",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"Combining state-of-the-art technology with compassionate care to provide you with the best healthcare experience.",
			inLanguage: "en-US",
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${SITE_URL}/services#breadcrumb`,
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
					name: "Services",
					item: `${SITE_URL}/services`,
				},
			],
		},
	],
};

export default function ServicesPage() {
	return (
		<>
			<JsonLd data={servicesSchema} />
			<ServicesView />
		</>
	);
}
