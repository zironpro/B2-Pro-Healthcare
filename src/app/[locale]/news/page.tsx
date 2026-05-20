import type { Metadata } from "next";

import { setRequestLocale } from "next-intl/server";
import type { Graph } from "schema-dts";

import { NewsView } from "@/features/news/news-view";
import { JsonLd } from "@/features/seo/json-ld";
import { SITE_URL } from "@/lib/site-config";

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const meta = (await import(`@/messages/${locale}/metadata`)).default;

	return {
		title: meta.news.title,
		description: meta.news.description,
		alternates: {
			canonical: `${SITE_URL}/${locale}/news`,
		},
	};
}

type NewsMeta = {
	news: {
		title: string;
		description: string;
	};
};

const getNewsSchema = (locale: string, meta: NewsMeta): Graph => {
	const localeUrl = `${SITE_URL}/${locale}`;
	const isAr = locale === "ar";
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "CollectionPage",
				"@id": `${localeUrl}/news#webpage`,
				url: `${localeUrl}/news`,
				name: meta.news.title,
				isPartOf: { "@id": `${localeUrl}/#website` },
				about: { "@id": `${localeUrl}/#organization` },
				description: meta.news.description,
				inLanguage: isAr ? "ar-AE" : "en-US",
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${localeUrl}/news#breadcrumb`,
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
						name: isAr ? "الأخبار" : "News",
						item: `${localeUrl}/news`,
					},
				],
			},
		],
	};
};

export default async function NewsPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);
	const meta = (await import(`@/messages/${locale}/metadata`)).default;
	const newsSchema = getNewsSchema(locale, meta);

	return (
		<>
			<JsonLd data={newsSchema} />
			<NewsView />
		</>
	);
}
