import type { Metadata } from "next";

import type { Graph } from "schema-dts";

import { NEWS_ITEMS } from "@/features/news/data/data";
import { NewsDetailView } from "@/features/news/news-detail-view";
import { JsonLd } from "@/features/seo/json-ld";

type Props = {
	params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id, locale } = await params;
	const item = NEWS_ITEMS.find((n) => n.id === id);

	if (!item) {
		return {
			title: "Article Not Found | B2 Pro Healthcare",
		};
	}

	const news = (await import(`@/messages/${locale}/news`)).default;
	const home = (await import(`@/messages/${locale}/home`)).default;

	const title = item.useDirectNewsNamespace
		? news.News[item.titleKey as keyof typeof news.News]
		: home.HomeNews[item.titleKey as keyof typeof home.HomeNews];
	const description = item.useDirectNewsNamespace
		? news.News[item.descKey as keyof typeof news.News]
		: home.HomeNews[item.descKey as keyof typeof home.HomeNews];

	return {
		title: `${title} | B2 Pro Healthcare`,
		description: description as string,
		openGraph: {
			title: `${title} | B2 Pro Healthcare`,
			description: description as string,
			images: [
				{ url: item.image, width: 800, height: 600, alt: title as string },
			],
		},
		alternates: {
			canonical: `https://b2prohealthcare.com/${locale}/news/${id}`,
		},
	};
}

export function generateStaticParams() {
	return NEWS_ITEMS.map((item) => ({
		id: item.id,
	}));
}

type NewsItemType = {
	image: string;
	date: string;
};

const getNewsSchema = (
	id: string,
	locale: string,
	item: NewsItemType,
	title: string
): Graph => {
	const SITE_URL = `https://b2prohealthcare.com/${locale}`;
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "NewsArticle",
				"@id": `${SITE_URL}/news/${id}#newsarticle`,
				headline: title,
				image: [`${SITE_URL}${item.image}`],
				datePublished: new Date(item.date).toISOString(),
				author: [
					{
						"@type": "Organization",
						name:
							locale === "ar"
								? "بي تو برو للرعاية الصحية"
								: "B2 Pro Healthcare",
						url: SITE_URL,
					},
				],
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${SITE_URL}/news/${id}#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: locale === "ar" ? "الرئيسية" : "Home",
						item: SITE_URL,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: locale === "ar" ? "الأخبار" : "News",
						item: `${SITE_URL}/news`,
					},
					{
						"@type": "ListItem",
						position: 3,
						name: title,
						item: `${SITE_URL}/news/${id}`,
					},
				],
			},
		],
	};
};

export default async function NewsDetailPage({ params }: Props) {
	const { id, locale } = await params;
	const item = NEWS_ITEMS.find((n) => n.id === id);

	const news = (await import(`@/messages/${locale}/news`)).default;
	const home = (await import(`@/messages/${locale}/home`)).default;

	const title = item
		? item.useDirectNewsNamespace
			? news.News[item.titleKey as keyof typeof news.News]
			: home.HomeNews[item.titleKey as keyof typeof home.HomeNews]
		: null;

	const graphSchema =
		item && title ? getNewsSchema(id, locale, item, title) : null;

	return (
		<>
			{graphSchema && <JsonLd data={graphSchema} />}
			<NewsDetailView id={id} />
		</>
	);
}
