"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { doctors } from "@/lib/content";

export function Doctors() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-400 mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold">
            Our Experts
          </h2>
          <p className="text-4xl lg:text-5xl font-bold text-slate-900">
            Meet Our Specialist Doctors
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our team of highly qualified and experienced specialists is
            dedicated to providing the best possible care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {doctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="group overflow-hidden border-none shadow-none bg-transparent"
            >
              <CardHeader className="p-0 mb-6">
                <div className="relative aspect-4/5 rounded-[2rem] overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Badge className="absolute top-6 right-6 bg-white/90 backdrop-blur-md text-primary hover:bg-white border-none py-2 px-4 rounded-xl font-bold">
                    {doctor.experience}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0 text-center space-y-2">
                <CardTitle className="text-2xl font-bold text-slate-900">
                  {doctor.name}
                </CardTitle>
                <p className="text-secondary font-semibold uppercase tracking-wider text-sm">
                  {doctor.specialty}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
