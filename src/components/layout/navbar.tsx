"use client";

import { Calendar, Globe, HeartPulse, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useI18n } from "@/context/i18n-context";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Doctors", href: "/doctors" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const { locale, setLocale, isRTL } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-7",
      )}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2.5 rounded-xl text-primary-foreground group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
              <HeartPulse className="w-7 h-7" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">
              B2 Pro <span className="text-secondary">Healthcare</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
              className="font-bold flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {locale === "en" ? "العربية" : "English"}
            </Button>
            <div
              className={cn(
                "flex flex-col items-end mr-6",
                isRTL && "mr-0 ml-6 items-start",
              )}
            >
              <span className="text-sm uppercase tracking-widest text-muted-foreground font-bold">
                Emergency
              </span>
              <div className="flex items-center gap-1.5 text-secondary font-extrabold text-lg">
                <Phone className="w-4 h-4" />
                <span>+1 234 567 890</span>
              </div>
            </div>
            <Button
              size="lg"
              className="h-12 px-8 text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              <Calendar className="mr-2.5 h-5 w-5" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Sheet>
            <SheetTrigger
              render={(props) => (
                <Button
                  {...props}
                  variant="ghost"
                  size="icon"
                  className="md:hidden p-2 text-foreground h-10 w-10"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              )}
            />
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <SheetHeader className="p-6 border-b text-left">
                <SheetTitle className="flex items-center gap-3">
                  <div className="bg-primary p-2 rounded-xl text-primary-foreground">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-foreground">
                    B2 Pro <span className="text-secondary">Healthcare</span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-6 gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-semibold text-foreground border-b border-border pb-2 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <Phone className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-sm text-slate-500 font-medium">
                        Emergency Contact
                      </p>
                      <p className="font-bold">+1 234 567 890</p>
                    </div>
                  </div>
                  <Button className="w-full h-12 text-lg rounded-xl shadow-lg shadow-primary/20">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
