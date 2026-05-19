import type { Metadata } from "next";

import { CareersView } from "@/features/careers/careers-view";
import { JsonLd } from "@/features/seo/json-ld";

export const metadata: Metadata = {
	title: "Join Our Team | B2 Pro Healthcare",
	description:
		"Become part of a world-class team dedicated to redefining healthcare. We offer a culture of excellence, continuous learning, and compassionate care.",
	alternates: {
		canonical: "https://b2prohealthcare.com/en/careers",
	},
};

const SITE_URL = "https://b2prohealthcare.com/en";

const careersSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebPage",
			"@id": `${SITE_URL}/careers#webpage`,
			url: `${SITE_URL}/careers`,
			name: "Join Our Team | B2 Pro Healthcare",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"Become part of a world-class team dedicated to redefining healthcare. We offer a culture of excellence, continuous learning, and compassionate care.",
			inLanguage: "en-US",
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${SITE_URL}/careers#breadcrumb`,
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
					name: "Careers",
					item: `${SITE_URL}/careers`,
				},
			],
		},
	],
};

export default function CareersPage() {
	return (
		<>
			<JsonLd data={careersSchema} />
			<CareersView />
		</>
	);
}
