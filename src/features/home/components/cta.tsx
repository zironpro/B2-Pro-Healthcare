"use client";

import { Activity, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-400 mx-auto px-6">
        <div className="relative bg-primary rounded-[3rem] overflow-hidden p-12 lg:p-20 text-center space-y-8">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]" />
          <h2 className="relative text-4xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Prioritize Your Health? <br className="hidden lg:block" />{" "}
            Book Your Appointment Today.
          </h2>
          <p className="relative text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust B2 Pro Healthcare for
            their medical needs. Quick, easy, and secure.
          </p>
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Button
              size="lg"
              className="h-16 px-10 text-lg bg-white text-primary hover:bg-slate-50 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Book Appointment Now
            </Button>
          </div>
          {/* Decorative icons in CTA */}
          <Activity className="absolute bottom-10 left-10 w-24 h-24 text-white/5 -rotate-12" />
          <Shield className="absolute top-10 right-10 w-24 h-24 text-white/5 rotate-12" />
        </div>
      </div>
    </section>
  );
}
