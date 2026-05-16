import type { Metadata } from "next";

import { DoctorsView } from "@/features/doctors/doctors-view";

export const metadata: Metadata = {
	title: "Meet Our Specialist Doctors | B2 Pro Healthcare",
	description:
		"Connect with top-rated medical specialists and healthcare experts at B2 Pro Healthcare. Book your consultation today.",
};

export default function DoctorsPage() {
	return <DoctorsView />;
}
