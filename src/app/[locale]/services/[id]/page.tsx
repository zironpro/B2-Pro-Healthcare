import type { Metadata } from "next";

import type { Graph } from "schema-dts";

import { JsonLd } from "@/features/seo/json-ld";
import { SERVICES } from "@/features/services/data/data";
import { ServiceDetailView } from "@/features/services/service-detail-view";

type Props = {
	params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id, locale } = await params;
	const service = SERVICES.find((s) => s.id === id);
	const services = (await import(`@/messages/${locale}/services`)).default;
	const serviceData =
		services.ContentServices[id as keyof typeof services.ContentServices];

	if (!service || !serviceData) {
		return {
			title: "Service Not Found | B2 Pro Healthcare",
		};
	}

	return {
		title: `${serviceData.title} | B2 Pro Healthcare`,
		description: serviceData.description,
		openGraph: {
			title: `${serviceData.title} | B2 Pro Healthcare`,
			description: serviceData.description,
			images: [
				{ url: service.image, width: 800, height: 600, alt: serviceData.title },
			],
		},
		alternates: {
			canonical: `https://b2prohealthcare.com/${locale}/services/${id}`,
		},
	};
}

export function generateStaticParams() {
	return SERVICES.map((service) => ({
		id: service.id,
	}));
}

type ServiceType = {
	image: string;
};

type ServiceDataType = {
	title: string;
	about: string;
};

const getServiceSchema = (
	id: string,
	locale: string,
	service: ServiceType,
	serviceData: ServiceDataType
): Graph => {
	const SITE_URL = `https://b2prohealthcare.com/${locale}`;
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "MedicalWebPage",
				"@id": `${SITE_URL}/services/${id}#webpage`,
				url: `${SITE_URL}/services/${id}`,
				name: serviceData.title,
				description: serviceData.about,
				image: `${SITE_URL}${service.image}`,
				publisher: {
					"@type": "Organization",
					name:
						locale === "ar" ? "بي تو برو للرعاية الصحية" : "B2 Pro Healthcare",
				},
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${SITE_URL}/services/${id}#breadcrumb`,
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
						name: locale === "ar" ? "الخدمات" : "Services",
						item: `${SITE_URL}/services`,
					},
					{
						"@type": "ListItem",
						position: 3,
						name: serviceData.title,
						item: `${SITE_URL}/services/${id}`,
					},
				],
			},
		],
	};
};

export default async function ServiceDetailPage({ params }: Props) {
	const { id, locale } = await params;
	const service = SERVICES.find((s) => s.id === id);
	const services = (await import(`@/messages/${locale}/services`)).default;
	const serviceData =
		services.ContentServices[id as keyof typeof services.ContentServices];

	const graphSchema =
		service && serviceData
			? getServiceSchema(id, locale, service, serviceData)
			: null;

	return (
		<>
			{graphSchema && <JsonLd data={graphSchema} />}
			<ServiceDetailView id={id} />
		</>
	);
}
