import type { Metadata } from "next";

import { CareerDetailView } from "@/features/careers/career-detail-view";
import { OPEN_ROLES } from "@/features/careers/data/data";

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	const role = OPEN_ROLES.find((r) => r.id === id);

	if (!role) {
		return {
			title: "Role Not Found | B2 Pro Healthcare",
		};
	}

	return {
		title: `${role.title} | Careers at B2 Pro Healthcare`,
		description: role.description,
	};
}

export function generateStaticParams() {
	return OPEN_ROLES.map((role) => ({
		id: role.id,
	}));
}

export default async function CareerDetailPage({ params }: Props) {
	const { id } = await params;
	return <CareerDetailView roleId={id} />;
}
