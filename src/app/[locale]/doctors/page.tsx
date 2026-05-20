import type { Metadata } from "next";

import type { Graph } from "schema-dts";

import { DoctorsView } from "@/features/doctors/doctors-view";
import { JsonLd } from "@/features/seo/json-ld";
import { SITE_URL } from "@/lib/site-config";

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const meta = (await import(`@/messages/${locale}/metadata`)).default;

	return {
		title: meta.doctors.title,
		description: meta.doctors.description,
		alternates: {
			canonical: `${SITE_URL}/${locale}/doctors`,
		},
	};
}

type DoctorsMeta = {
	doctors: {
		title: string;
		description: string;
	};
};

const getDoctorsSchema = (locale: string, meta: DoctorsMeta): Graph => {
	const localeUrl = `${SITE_URL}/${locale}`;
	const isAr = locale === "ar";
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "CollectionPage",
				"@id": `${localeUrl}/doctors#webpage`,
				url: `${localeUrl}/doctors`,
				name: meta.doctors.title,
				isPartOf: { "@id": `${localeUrl}/#website` },
				about: { "@id": `${localeUrl}/#organization` },
				description: meta.doctors.description,
				inLanguage: isAr ? "ar-AE" : "en-US",
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${localeUrl}/doctors#breadcrumb`,
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
						name: isAr ? "الأطباء" : "Doctors",
						item: `${localeUrl}/doctors`,
					},
				],
			},
		],
	};
};

export default async function DoctorsPage({ params }: Props) {
	const { locale } = await params;
	const meta = (await import(`@/messages/${locale}/metadata`)).default;
	const doctorsSchema = getDoctorsSchema(locale, meta);

	return (
		<>
			<JsonLd data={doctorsSchema} />
			<DoctorsView />
		</>
	);
}
