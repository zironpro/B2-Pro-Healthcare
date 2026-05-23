import type { Metadata } from "next";

import { setRequestLocale } from "next-intl/server";
import type { Graph } from "schema-dts";

import { CareerDetailView } from "@/features/careers/career-detail-view";
import { OPEN_ROLES } from "@/features/careers/data/data";
import { JsonLd } from "@/features/seo/json-ld";
import { SITE_URL } from "@/lib/site-config";

type Props = {
	params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id, locale } = await params;
	const role = OPEN_ROLES.find((r) => r.id === id);
	const careers = (await import(`@/messages/${locale}/careers`)).default;
	const roleData =
		careers.ContentCareers[id as keyof typeof careers.ContentCareers];

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
			canonical: `${SITE_URL}/${locale}/careers/${id}`,
		},
	};
}

export function generateStaticParams() {
	return OPEN_ROLES.map((role) => ({
		id: role.id,
	}));
}

type CareerDataType = {
	title: string;
	about: string;
};

const getCareerSchema = (
	id: string,
	locale: string,
	roleData: CareerDataType
): Graph => {
	const localSiteUrl = `${SITE_URL}/${locale}`;
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "JobPosting",
				"@id": `${localSiteUrl}/careers/${id}#jobposting`,
				title: roleData.title,
				description: roleData.about,
				datePosted: new Date("2026-05-01T00:00:00Z").toISOString(),
				validThrough: new Date("2026-12-31T00:00:00Z").toISOString(),
				employmentType: "FULL_TIME",
				hiringOrganization: {
					"@type": "Organization",
					name:
						locale === "ar" ? "بي تو برو للرعاية الصحية" : "B2 Pro Healthcare",
					sameAs: localSiteUrl,
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
				"@id": `${localSiteUrl}/careers/${id}#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: locale === "ar" ? "الرئيسية" : "Home",
						item: localSiteUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: locale === "ar" ? "الوظائف" : "Careers",
						item: `${localSiteUrl}/careers`,
					},
					{
						"@type": "ListItem",
						position: 3,
						name: roleData.title,
						item: `${localSiteUrl}/careers/${id}`,
					},
				],
			},
		],
	};
};

export default async function CareerDetailPage({ params }: Props) {
	const { id, locale } = await params;
	setRequestLocale(locale);
	const role = OPEN_ROLES.find((r) => r.id === id);
	const careers = (await import(`@/messages/${locale}/careers`)).default;
	const roleData =
		careers.ContentCareers[id as keyof typeof careers.ContentCareers];

	const graphSchema =
		role && roleData ? getCareerSchema(id, locale, roleData) : null;

	return (
		<>
			{graphSchema && <JsonLd data={graphSchema} />}
			<CareerDetailView roleId={id} />
		</>
	);
}
