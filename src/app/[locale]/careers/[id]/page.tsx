import type { Metadata } from "next";

import { CareerDetailView } from "@/features/careers/career-detail-view";
import { OPEN_ROLES } from "@/features/careers/data/data";
import { JsonLd } from "@/features/seo/json-ld";
import en from "@/messages/en";

type Props = {
	params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	const role = OPEN_ROLES.find((r) => r.id === id);
	const roleData = en.ContentCareers[id as keyof typeof en.ContentCareers];

	if (!role || !roleData) {
		return {
			title: "Role Not Found | B2 Pro Healthcare",
		};
	}

	return {
		title: `${roleData.title} | Careers at B2 Pro Healthcare`,
		description: roleData.description,
		openGraph: {
			title: `${roleData.title} | Careers at B2 Pro Healthcare`,
			description: roleData.description,
		},
		alternates: {
			canonical: `https://b2prohealthcare.com/en/careers/${id}`,
		},
	};
}

export function generateStaticParams() {
	return OPEN_ROLES.map((role) => ({
		id: role.id,
	}));
}

export default async function CareerDetailPage({ params }: Props) {
	const { id } = await params;
	const role = OPEN_ROLES.find((r) => r.id === id);
	const roleData = en.ContentCareers[id as keyof typeof en.ContentCareers];

	const SITE_URL = "https://b2prohealthcare.com/en";

	const graphSchema =
		role && roleData
			? {
					"@context": "https://schema.org",
					"@graph": [
						{
							"@type": "JobPosting",
							"@id": `${SITE_URL}/careers/${id}#jobposting`,
							title: roleData.title,
							description: roleData.about,
							datePosted: new Date("2026-05-01T00:00:00Z").toISOString(),
							validThrough: new Date("2026-12-31T00:00:00Z").toISOString(),
							employmentType: "FULL_TIME",
							hiringOrganization: {
								"@type": "Organization",
								name: "B2 Pro Healthcare",
								sameAs: SITE_URL,
							},
							jobLocation: {
								"@type": "Place",
								address: {
									"@type": "PostalAddress",
									streetAddress: "123 Healthcare Ave",
									addressLocality: "New York",
									addressRegion: "NY",
									postalCode: "10001",
									addressCountry: "US",
								},
							},
						},
						{
							"@type": "BreadcrumbList",
							"@id": `${SITE_URL}/careers/${id}#breadcrumb`,
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
									name: "Careers",
									item: `${SITE_URL}/careers`,
								},
								{
									"@type": "ListItem",
									position: 3,
									name: roleData.title,
									item: `${SITE_URL}/careers/${id}`,
								},
							],
						},
					],
				}
			: null;

	return (
		<>
			{graphSchema && <JsonLd data={graphSchema} />}
			<CareerDetailView roleId={id} />
		</>
	);
}
