import type { Metadata } from "next";

import type { Graph } from "schema-dts";

import { AboutView } from "@/features/about/about-view";
import { JsonLd } from "@/features/seo/json-ld";
import { SITE_URL } from "@/lib/site-config";

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const meta = (await import(`@/messages/${locale}/metadata`)).default;

	return {
		title: meta.about.title,
		description: meta.about.description,
		alternates: {
			canonical: `${SITE_URL}/${locale}/about`,
		},
	};
}

type AboutMeta = {
	about: {
		title: string;
		description: string;
	};
};

const getAboutSchema = (locale: string, meta: AboutMeta): Graph => {
	const localeUrl = `${SITE_URL}/${locale}`;
	const isAr = locale === "ar";
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "AboutPage",
				"@id": `${localeUrl}/about#webpage`,
				url: `${localeUrl}/about`,
				name: meta.about.title,
				isPartOf: { "@id": `${localeUrl}/#website` },
				about: { "@id": `${localeUrl}/#organization` },
				description: meta.about.description,
				inLanguage: isAr ? "ar-AE" : "en-US",
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${localeUrl}/about#breadcrumb`,
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
						name: isAr ? "من نحن" : "About",
						item: `${localeUrl}/about`,
					},
				],
			},
		],
	};
};

export default async function AboutPage({ params }: Props) {
	const { locale } = await params;
	const meta = (await import(`@/messages/${locale}/metadata`)).default;
	const aboutSchema = getAboutSchema(locale, meta);

	return (
		<>
			<JsonLd data={aboutSchema} />
			<AboutView />
		</>
	);
}
