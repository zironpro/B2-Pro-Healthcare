import type { Metadata } from "next";

import { SERVICES } from "@/features/services/data/data";
import { ServiceDetailView } from "@/features/services/service-detail-view";

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	const service = SERVICES.find((s) => s.id === id);

	if (!service) {
		return {
			title: "Service Not Found | B2 Pro Healthcare",
		};
	}

	return {
		title: "Services | B2 Pro Healthcare",
	};
}

export function generateStaticParams() {
	return SERVICES.map((service) => ({
		id: service.id,
	}));
}

export default async function ServiceDetailPage({ params }: Props) {
	const { id } = await params;
	return <ServiceDetailView id={id} />;
}
