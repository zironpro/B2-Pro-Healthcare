"use client";

import { CTA } from "./components/cta";
import { Doctors } from "./components/doctors";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";

export function HomeView() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Doctors />
      <Testimonials />
      <CTA />
    </div>
  );
}
