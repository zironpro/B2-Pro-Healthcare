import type { Metadata } from "next";

import { setRequestLocale } from "next-intl/server";
import type { Graph } from "schema-dts";

import { JsonLd } from "@/features/seo/json-ld";
import { ServicesView } from "@/features/services/services-view";
import { SITE_URL } from "@/lib/site-config";

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const meta = (await import(`@/messages/${locale}/metadata`)).default;

	return {
		title: meta.services.title,
		description: meta.services.description,
		alternates: {
			canonical: `${SITE_URL}/${locale}/services`,
		},
	};
}

type ServicesMeta = {
	services: {
		title: string;
		description: string;
	};
};

const getServicesSchema = (locale: string, meta: ServicesMeta): Graph => {
	const localeUrl = `${SITE_URL}/${locale}`;
	const isAr = locale === "ar";
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "CollectionPage",
				"@id": `${localeUrl}/services#webpage`,
				url: `${localeUrl}/services`,
				name: meta.services.title,
				isPartOf: { "@id": `${localeUrl}/#website` },
				about: { "@id": `${localeUrl}/#organization` },
				description: meta.services.description,
				inLanguage: isAr ? "ar-AE" : "en-US",
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${localeUrl}/services#breadcrumb`,
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
						name: isAr ? "الخدمات" : "Services",
						item: `${localeUrl}/services`,
					},
				],
			},
		],
	};
};

export default async function ServicesPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);
	const meta = (await import(`@/messages/${locale}/metadata`)).default;
	const servicesSchema = getServicesSchema(locale, meta);

	return (
		<>
			<JsonLd data={servicesSchema} />
			<ServicesView />
		</>
	);
}
