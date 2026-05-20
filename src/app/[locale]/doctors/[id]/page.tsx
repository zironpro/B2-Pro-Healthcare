import type { Metadata } from "next";

import { setRequestLocale } from "next-intl/server";
import type { Graph, MedicalSpecialty } from "schema-dts";

import { DOCTORS } from "@/features/doctors/data";
import { DoctorDetailView } from "@/features/doctors/doctor-detail-view";
import { JsonLd } from "@/features/seo/json-ld";

type Props = {
	params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id, locale } = await params;
	const doctor = DOCTORS.find((d) => d.id === Number.parseInt(id, 10));
	const doctors = (await import(`@/messages/${locale}/doctors`)).default;
	const docData =
		doctors.ContentDoctors[id as keyof typeof doctors.ContentDoctors];

	if (!doctor || !docData) {
		return {
			title: "Doctor Not Found | B2 Pro Healthcare",
		};
	}

	return {
		title: `${docData.name} | ${docData.specialty}`,
		description: `${docData.about.substring(0, 150)}...`,
		openGraph: {
			title: `${docData.name} | ${docData.specialty}`,
			description: `${docData.about.substring(0, 150)}...`,
			images: [
				{ url: doctor.image, width: 800, height: 800, alt: docData.name },
			],
		},
		alternates: {
			canonical: `https://b2prohealthcare.com/${locale}/doctors/${id}`,
		},
	};
}

export function generateStaticParams() {
	return DOCTORS.map((doctor) => ({
		id: doctor.id.toString(),
	}));
}

type DoctorType = {
	image: string;
};

type DoctorDataType = {
	name: string;
	about: string;
	specialty: string;
};

const getDoctorSchema = (
	id: string,
	locale: string,
	doctor: DoctorType,
	docData: DoctorDataType
): Graph => {
	const SITE_URL = `https://b2prohealthcare.com/${locale}`;
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Physician",
				"@id": `${SITE_URL}/doctors/${id}#physician`,
				name: docData.name,
				description: docData.about,
				image: `${SITE_URL}${doctor.image}`,
				medicalSpecialty: docData.specialty as MedicalSpecialty,
				address: {
					"@type": "PostalAddress",
					streetAddress: "123 Healthcare Ave",
					addressLocality: "New York",
					addressRegion: "NY",
					postalCode: "10001",
					addressCountry: "US",
				},
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${SITE_URL}/doctors/${id}#breadcrumb`,
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
						name: locale === "ar" ? "الأطباء" : "Doctors",
						item: `${SITE_URL}/doctors`,
					},
					{
						"@type": "ListItem",
						position: 3,
						name: docData.name,
						item: `${SITE_URL}/doctors/${id}`,
					},
				],
			},
		],
	};
};

export default async function DoctorDetailPage({ params }: Props) {
	const { id, locale } = await params;
	setRequestLocale(locale);
	const doctor = DOCTORS.find((d) => d.id === Number.parseInt(id, 10));
	const doctors = (await import(`@/messages/${locale}/doctors`)).default;
	const docData =
		doctors.ContentDoctors[id as keyof typeof doctors.ContentDoctors];

	const graphSchema =
		doctor && docData ? getDoctorSchema(id, locale, doctor, docData) : null;

	return (
		<>
			{graphSchema && <JsonLd data={graphSchema} />}
			<DoctorDetailView doctorId={Number.parseInt(id, 10)} />
		</>
	);
}
