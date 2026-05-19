import type { Metadata } from "next";

import { AboutView } from "@/features/about/about-view";
import { JsonLd } from "@/features/seo/json-ld";

export const metadata: Metadata = {
	title: "Who We Are | B2 Pro Healthcare",
	description:
		"At B2 Pro Healthcare, we combine world-class medical expertise with compassionate care to ensure every patient receives the treatment they deserve.",
	alternates: {
		canonical: "https://b2prohealthcare.com/en/about",
	},
};

const SITE_URL = "https://b2prohealthcare.com/en";

const aboutSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "AboutPage",
			"@id": `${SITE_URL}/about#webpage`,
			url: `${SITE_URL}/about`,
			name: "Who We Are | B2 Pro Healthcare",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"At B2 Pro Healthcare, we combine world-class medical expertise with compassionate care to ensure every patient receives the treatment they deserve.",
			inLanguage: "en-US",
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${SITE_URL}/about#breadcrumb`,
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
					name: "About",
					item: `${SITE_URL}/about`,
				},
			],
		},
	],
};

export default function AboutPage() {
	return (
		<>
			<JsonLd data={aboutSchema} />
			<AboutView />
		</>
	);
}
