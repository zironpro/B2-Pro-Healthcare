import type { Metadata } from "next";

import { NEWS_ITEMS } from "@/features/news/data/data";
import { NewsDetailView } from "@/features/news/news-detail-view";
import { JsonLd } from "@/features/seo/json-ld";
import en from "@/messages/en";

type Props = {
	params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	const item = NEWS_ITEMS.find((n) => n.id === id);

	if (!item) {
		return {
			title: "Article Not Found | B2 Pro Healthcare",
		};
	}

	const title = item.useDirectNewsNamespace
		? en.News[item.titleKey as keyof typeof en.News]
		: en.HomeNews[item.titleKey as keyof typeof en.HomeNews];
	const description = item.useDirectNewsNamespace
		? en.News[item.descKey as keyof typeof en.News]
		: en.HomeNews[item.descKey as keyof typeof en.HomeNews];

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
			canonical: `https://b2prohealthcare.com/en/news/${id}`,
		},
	};
}

export function generateStaticParams() {
	return NEWS_ITEMS.map((item) => ({
		id: item.id,
	}));
}

export default async function NewsDetailPage({ params }: Props) {
	const { id } = await params;
	const item = NEWS_ITEMS.find((n) => n.id === id);

	const title = item
		? item.useDirectNewsNamespace
			? en.News[item.titleKey as keyof typeof en.News]
			: en.HomeNews[item.titleKey as keyof typeof en.HomeNews]
		: null;

	const SITE_URL = "https://b2prohealthcare.com/en";

	const graphSchema =
		item && title
			? {
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
									name: "B2 Pro Healthcare",
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
									name: "Home",
									item: SITE_URL,
								},
								{
									"@type": "ListItem",
									position: 2,
									name: "News",
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
				}
			: null;

	return (
		<>
			{graphSchema && <JsonLd data={graphSchema} />}
			<NewsDetailView id={id} />
		</>
	);
}
