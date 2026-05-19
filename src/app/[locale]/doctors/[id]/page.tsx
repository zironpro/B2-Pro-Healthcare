import type { Metadata } from "next";

import { DOCTORS } from "@/features/doctors/data/data";
import { DoctorDetailView } from "@/features/doctors/doctor-detail-view";
import { JsonLd } from "@/features/seo/json-ld";
import en from "@/messages/en";

type Props = {
	params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	const doctor = DOCTORS.find((d) => d.id === Number.parseInt(id, 10));
	const docData = en.ContentDoctors[id as keyof typeof en.ContentDoctors];

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
			canonical: `https://b2prohealthcare.com/en/doctors/${id}`,
		},
	};
}

export function generateStaticParams() {
	return DOCTORS.map((doctor) => ({
		id: doctor.id.toString(),
	}));
}

export default async function DoctorDetailPage({ params }: Props) {
	const { id } = await params;
	const doctor = DOCTORS.find((d) => d.id === Number.parseInt(id, 10));
	const docData = en.ContentDoctors[id as keyof typeof en.ContentDoctors];

	const SITE_URL = "https://b2prohealthcare.com/en";

	const graphSchema =
		doctor && docData
			? {
					"@context": "https://schema.org",
					"@graph": [
						{
							"@type": "Physician",
							"@id": `${SITE_URL}/doctors/${id}#physician`,
							name: docData.name,
							description: docData.about,
							image: `${SITE_URL}${doctor.image}`,
							medicalSpecialty: docData.specialty,
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
									name: "Home",
									item: SITE_URL,
								},
								{
									"@type": "ListItem",
									position: 2,
									name: "Doctors",
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
				}
			: null;

	return (
		<>
			{graphSchema && <JsonLd data={graphSchema} />}
			<DoctorDetailView doctorId={Number.parseInt(id, 10)} />
		</>
	);
}
