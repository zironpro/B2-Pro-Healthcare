import type { Metadata } from "next";

import { DOCTORS } from "@/features/doctors/data/data";
import { DoctorDetailView } from "@/features/doctors/doctor-detail-view";

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	const doctor = DOCTORS.find((d) => d.id === Number.parseInt(id, 10));

	if (!doctor) {
		return {
			title: "Doctor Not Found | B2 Pro Healthcare",
		};
	}

	return {
		title: "Meet Specialist Doctors | B2 Pro Healthcare",
	};
}

export function generateStaticParams() {
	return DOCTORS.map((doctor) => ({
		id: doctor.id.toString(),
	}));
}

export default async function DoctorDetailPage({ params }: Props) {
	const { id } = await params;
	return <DoctorDetailView doctorId={Number.parseInt(id, 10)} />;
}
