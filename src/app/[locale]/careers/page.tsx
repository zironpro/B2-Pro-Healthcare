import type { Metadata } from "next";

import type { Graph } from "schema-dts";

import { CareersView } from "@/features/careers/careers-view";
import { JsonLd } from "@/features/seo/json-ld";
import { SITE_URL } from "@/lib/site-config";

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const meta = (await import(`@/messages/${locale}/metadata`)).default;

	return {
		title: meta.careers.title,
		description: meta.careers.description,
		alternates: {
			canonical: `${SITE_URL}/${locale}/careers`,
		},
	};
}

type CareersMeta = {
	careers: {
		title: string;
		description: string;
	};
};

const getCareersSchema = (locale: string, meta: CareersMeta): Graph => {
	const localeUrl = `${SITE_URL}/${locale}`;
	const isAr = locale === "ar";
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${localeUrl}/careers#webpage`,
				url: `${localeUrl}/careers`,
				name: meta.careers.title,
				isPartOf: { "@id": `${localeUrl}/#website` },
				about: { "@id": `${localeUrl}/#organization` },
				description: meta.careers.description,
				inLanguage: isAr ? "ar-AE" : "en-US",
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${localeUrl}/careers#breadcrumb`,
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
						name: isAr ? "الوظائف" : "Careers",
						item: `${localeUrl}/careers`,
					},
				],
			},
		],
	};
};

export default async function CareersPage({ params }: Props) {
	const { locale } = await params;
	const meta = (await import(`@/messages/${locale}/metadata`)).default;
	const careersSchema = getCareersSchema(locale, meta);

	return (
		<>
			<JsonLd data={careersSchema} />
			<CareersView />
		</>
	);
}
