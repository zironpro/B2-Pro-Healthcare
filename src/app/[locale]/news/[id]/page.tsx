import type { Metadata } from "next";

import { NEWS_ITEMS } from "@/features/news/data/data";
import { NewsDetailView } from "@/features/news/news-detail-view";

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	const item = NEWS_ITEMS.find((n) => n.id === id);

	if (!item) {
		return {
			title: "Article Not Found | B2 Pro Healthcare",
		};
	}

	return {
		title: "News & Events | B2 Pro Healthcare",
	};
}

export function generateStaticParams() {
	return NEWS_ITEMS.map((item) => ({
		id: item.id,
	}));
}

export default async function NewsDetailPage({ params }: Props) {
	const { id } = await params;
	return <NewsDetailView id={id} />;
}
