import type { Metadata } from "next";

import { HomePageView } from "@/features/home/home-view";
import { JsonLd } from "@/features/seo/json-ld";
import { SITE_URL } from "@/lib/site-config";
import en from "@/messages/en";

export const metadata: Metadata = {
	title: "B2 Pro Healthcare - Leading Medical & Specialist Services",
	description:
		"B2 Pro Healthcare provides world-class medical expertise with compassionate care. Book an appointment with our specialist doctors today.",
	alternates: {
		canonical: `${SITE_URL}/en`,
	},
};

const homepageSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "MedicalOrganization",
			"@id": `${SITE_URL}/#organization`,
			name: "B2 Pro Healthcare",
			url: SITE_URL,
			logo: `${SITE_URL}/logo.png`,
			description:
				"Pioneering the future of medical care with premium, patient-centered solutions.",
			address: {
				"@type": "PostalAddress",
				streetAddress: "123 Healthcare Ave",
				addressLocality: "New York",
				addressRegion: "NY",
				postalCode: "10001",
				addressCountry: "US",
			},
			contactPoint: {
				"@type": "ContactPoint",
				contactType: "customer support",
				telephone: "+1-555-000-0000",
				availableLanguage: ["English", "Arabic"],
			},
		},
		{
			"@type": "WebSite",
			"@id": `${SITE_URL}/#website`,
			url: SITE_URL,
			name: "B2 Pro Healthcare",
			description: "World-class medical expertise with compassionate care.",
			publisher: { "@id": `${SITE_URL}/#organization` },
			inLanguage: "en-US",
		},
		{
			"@type": "MedicalWebPage",
			"@id": `${SITE_URL}/#webpage`,
			url: SITE_URL,
			name: "B2 Pro Healthcare - Leading Medical & Specialist Services",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description: "World-class medical expertise with compassionate care.",
			inLanguage: "en-US",
		},
		{
			"@type": "FAQPage",
			"@id": `${SITE_URL}/#faq`,
			mainEntity: [
				{
					"@type": "Question",
					name: en.HomeFAQ.q1,
					acceptedAnswer: {
						"@type": "Answer",
						text: en.HomeFAQ.a1,
					},
				},
				{
					"@type": "Question",
					name: en.HomeFAQ.q2,
					acceptedAnswer: {
						"@type": "Answer",
						text: en.HomeFAQ.a2,
					},
				},
				{
					"@type": "Question",
					name: en.HomeFAQ.q3,
					acceptedAnswer: {
						"@type": "Answer",
						text: en.HomeFAQ.a3,
					},
				},
				{
					"@type": "Question",
					name: en.HomeFAQ.q4,
					acceptedAnswer: {
						"@type": "Answer",
						text: en.HomeFAQ.a4,
					},
				},
				{
					"@type": "Question",
					name: en.HomeFAQ.q5,
					acceptedAnswer: {
						"@type": "Answer",
						text: en.HomeFAQ.a5,
					},
				},
			],
		},
	],
};

export default function Homepage() {
	return (
		<>
			<JsonLd data={homepageSchema} />
			<HomePageView />
		</>
	);
}
