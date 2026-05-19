import type { Metadata } from "next";

import { ContactView } from "@/features/contact/contact-view";
import { JsonLd } from "@/features/seo/json-ld";

export const metadata: Metadata = {
	title: "Contact Support | B2 Pro Healthcare",
	description:
		"Reach out to B2 Pro Healthcare for appointments, medical inquiries, or emergency support. Our dedicated team is available 24/7.",
	alternates: {
		canonical: "https://b2prohealthcare.com/en/contact",
	},
};

const SITE_URL = "https://b2prohealthcare.com/en";

const contactSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "ContactPage",
			"@id": `${SITE_URL}/contact#webpage`,
			url: `${SITE_URL}/contact`,
			name: "Contact Support | B2 Pro Healthcare",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"Reach out to B2 Pro Healthcare for appointments, medical inquiries, or emergency support. Our dedicated team is available 24/7.",
			inLanguage: "en-US",
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${SITE_URL}/contact#breadcrumb`,
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
					name: "Contact",
					item: `${SITE_URL}/contact`,
				},
			],
		},
	],
};

export default function ContactPage() {
	return (
		<>
			<JsonLd data={contactSchema} />
			<ContactView />
		</>
	);
}
