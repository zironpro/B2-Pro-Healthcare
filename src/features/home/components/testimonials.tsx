"use client";

import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-400 mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm uppercase tracking-widest text-secondary font-bold">
            Testimonials
          </h2>
          <p className="text-4xl lg:text-5xl font-bold text-slate-900">
            What Our Patients Say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white p-10 rounded-[2.5rem] border-none shadow-xl shadow-slate-200/50 relative overflow-hidden"
            >
              <Quote className="absolute -top-6 -right-6 w-32 h-32 text-slate-50 z-0 opacity-50" />
              <CardContent className="p-0 space-y-6 relative z-10">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={`${testimonial.id}-star-${i}`}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-xl text-slate-700 italic leading-relaxed font-medium">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
