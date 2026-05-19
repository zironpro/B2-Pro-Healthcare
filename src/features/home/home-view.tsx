import { CTA } from "./components/cta";
import { DiversityBanner } from "./components/diversity-banner";
import { Doctors } from "./components/doctors";
import { FAQ } from "./components/faq";
import { Hero } from "./components/hero";
import { NewsEvents } from "./components/news-events";
import { QuickBooking } from "./components/quick-booking";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";

export function HomePageView() {
	return (
		<main className="flex min-h-screen flex-col" id="main-content">
			<Hero />
			<QuickBooking />
			<Services />
			<DiversityBanner />
			<Doctors />
			<Testimonials />
			<NewsEvents />
			<FAQ />
			<CTA />
		</main>
	);
}
