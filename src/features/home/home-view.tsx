import { CTA } from "./components/cta";
import { Doctors } from "./components/doctors";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";

export function HomePageView() {
	return (
		<main className="flex min-h-screen flex-col">
			<Hero />
			<Services />
			<Doctors />
			<Testimonials />
			<CTA />
		</main>
	);
}
