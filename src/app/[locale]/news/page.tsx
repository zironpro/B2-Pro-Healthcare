import type { Metadata } from "next";

import { NewsView } from "@/features/news/news-view";
import { JsonLd } from "@/features/seo/json-ld";

export const metadata: Metadata = {
	title: "News & Publications | B2 Pro Healthcare",
	description:
		"Stay informed about the latest medical innovations, community health events, and clinical breakthroughs at B2 Pro Healthcare.",
	alternates: {
		canonical: "https://b2prohealthcare.com/en/news",
	},
};

const SITE_URL = "https://b2prohealthcare.com/en";

const newsSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "CollectionPage",
			"@id": `${SITE_URL}/news#webpage`,
			url: `${SITE_URL}/news`,
			name: "News & Publications | B2 Pro Healthcare",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"Stay informed about the latest medical innovations, community health events, and clinical breakthroughs at B2 Pro Healthcare.",
			inLanguage: "en-US",
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${SITE_URL}/news#breadcrumb`,
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
					name: "News",
					item: `${SITE_URL}/news`,
				},
			],
		},
	],
};

export default function NewsPage() {
	return (
		<>
			<JsonLd data={newsSchema} />
			<NewsView />
		</>
	);
}
