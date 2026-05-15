"use client";

import { Activity, HeartPulse, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/content";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  HeartPulse,
  Activity,
  Users,
  Shield,
};

export function Services() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-400 mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold">
            Our Services
          </h2>
          <p className="text-4xl lg:text-5xl font-bold text-slate-900">
            Specialized Care for Your Health
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide a wide range of medical services with a focus on
            patient-centered care and advanced technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent =
              ICON_MAP[service.icon as keyof typeof ICON_MAP];
            return (
              <Card
                key={service.title}
                className="group bg-white rounded-3xl border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <CardHeader className="p-8 pb-0">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/10",
                      service.color,
                    )}
                  >
                    {IconComponent && <IconComponent className="w-7 h-7" />}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 p-0 h-auto text-primary font-bold group-hover:gap-2 transition-all"
                  >
                    Read More
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
