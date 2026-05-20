import type { Metadata } from "next";

import type { Graph } from "schema-dts";

import { HomePageView } from "@/features/home/home-view";
import { JsonLd } from "@/features/seo/json-ld";
import { SITE_URL } from "@/lib/site-config";

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const meta = (await import(`@/messages/${locale}/metadata`)).default;

	return {
		title: meta.home.title,
		description: meta.home.description,
		alternates: {
			canonical: `${SITE_URL}/${locale}`,
		},
	};
}

type HomeTranslation = {
	HomeFAQ: {
		q1: string;
		a1: string;
		q2: string;
		a2: string;
		q3: string;
		a3: string;
		q4: string;
		a4: string;
		q5: string;
		a5: string;
	};
};

const getHomepageSchema = (locale: string, home: HomeTranslation): Graph => {
	const isAr = locale === "ar";
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "MedicalOrganization",
				"@id": `${SITE_URL}/#organization`,
				name: isAr ? "بي تو برو للرعاية الصحية" : "B2 Pro Healthcare",
				url: SITE_URL,
				logo: `${SITE_URL}/logo.png`,
				description: isAr
					? "ريادة مستقبل الرعاية الطبية بحلول متميزة تركز على المريض."
					: "Pioneering the future of medical care with premium, patient-centered solutions.",
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
				name: isAr ? "بي تو برو للرعاية الصحية" : "B2 Pro Healthcare",
				description: isAr
					? "خبرة طبية بمستوى عالمي مع رعاية رحيمة."
					: "World-class medical expertise with compassionate care.",
				publisher: { "@id": `${SITE_URL}/#organization` },
				inLanguage: isAr ? "ar-AE" : "en-US",
			},
			{
				"@type": "MedicalWebPage",
				"@id": `${SITE_URL}/#webpage`,
				url: SITE_URL,
				name: isAr
					? "بي تو برو للرعاية الصحية - خدمات طبية وتخصصية رائدة"
					: "B2 Pro Healthcare - Leading Medical & Specialist Services",
				isPartOf: { "@id": `${SITE_URL}/#website` },
				about: { "@id": `${SITE_URL}/#organization` },
				description: isAr
					? "خبرة طبية بمستوى عالمي مع رعاية رحيمة."
					: "World-class medical expertise with compassionate care.",
				inLanguage: isAr ? "ar-AE" : "en-US",
			},
			{
				"@type": "FAQPage",
				"@id": `${SITE_URL}/#faq`,
				mainEntity: [
					{
						"@type": "Question",
						name: home.HomeFAQ.q1,
						acceptedAnswer: {
							"@type": "Answer",
							text: home.HomeFAQ.a1,
						},
					},
					{
						"@type": "Question",
						name: home.HomeFAQ.q2,
						acceptedAnswer: {
							"@type": "Answer",
							text: home.HomeFAQ.a2,
						},
					},
					{
						"@type": "Question",
						name: home.HomeFAQ.q3,
						acceptedAnswer: {
							"@type": "Answer",
							text: home.HomeFAQ.a3,
						},
					},
					{
						"@type": "Question",
						name: home.HomeFAQ.q4,
						acceptedAnswer: {
							"@type": "Answer",
							text: home.HomeFAQ.a4,
						},
					},
					{
						"@type": "Question",
						name: home.HomeFAQ.q5,
						acceptedAnswer: {
							"@type": "Answer",
							text: home.HomeFAQ.a5,
						},
					},
				],
			},
		],
	};
};

export default async function Homepage({ params }: Props) {
	// Cache bust to force Next.js compiler to refresh syntax status
	const { locale } = await params;
	const home = (await import(`@/messages/${locale}/home`)).default;
	const homepageSchema = getHomepageSchema(locale, home);

	return (
		<>
			<JsonLd data={homepageSchema} />
			<HomePageView />
		</>
	);
}
