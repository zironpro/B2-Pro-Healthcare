"use client";

import { Shield } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="max-w-400 mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
            <Badge
              variant="secondary"
              className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium border-none animate-in fade-in slide-in-from-bottom-4 duration-1000"
            >
              <Shield className="w-4 h-4 mr-2" />
              Trusted by over 10,000+ patients
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              Revolutionizing <span className="text-primary">Healthcare</span>{" "}
              for Everyone
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              Experience the next generation of medical care with our advanced
              digital platform. Connect with top specialists, manage your health
              records, and book appointments seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-lg border-2 border-secondary/20 hover:bg-secondary/5 text-secondary rounded-xl transition-all"
              >
                Learn More
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">250+</span>
                <span className="text-sm text-slate-500">Expert Doctors</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Specializations</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">24/7</span>
                <span className="text-sm text-slate-500">Emergency Care</span>
              </div>
            </div>
          </div>

          {/* Hero Image / Visual Element */}
          <div className="flex-1 relative animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 border-8 border-white">
              <Image
                src="/healthcare_hero_1778827758056.png"
                alt="Modern Healthcare"
                width={700}
                height={600}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
