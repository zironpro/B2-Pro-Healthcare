"use client";

import { useTranslations } from "next-intl";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
	const t = useTranslations("HomeFAQ");

	return (
		<section className="bg-slate-50 py-24">
			<div className="mx-auto max-w-[1200px] px-6">
				<div className="mb-12 text-center">
					<h2 className="font-black text-4xl text-slate-900 md:text-5xl">
						{t("title")}
					</h2>
				</div>
				<div className="mx-auto max-w-3xl">
					<Accordion className="w-full" collapsible type="single">
						<AccordionItem
							className="border-slate-200 border-b py-4"
							value="item-1"
						>
							<AccordionTrigger className="font-bold text-lg text-slate-900 hover:text-primary hover:no-underline">
								{t("q1")}
							</AccordionTrigger>
							<AccordionContent className="font-medium text-base text-slate-500 leading-relaxed">
								{t("a1")}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							className="border-slate-200 border-b py-4"
							value="item-2"
						>
							<AccordionTrigger className="font-bold text-lg text-slate-900 hover:text-primary hover:no-underline">
								{t("q2")}
							</AccordionTrigger>
							<AccordionContent className="font-medium text-base text-slate-500 leading-relaxed">
								{t("a2")}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							className="border-slate-200 border-b py-4"
							value="item-3"
						>
							<AccordionTrigger className="font-bold text-lg text-slate-900 hover:text-primary hover:no-underline">
								{t("q3")}
							</AccordionTrigger>
							<AccordionContent className="font-medium text-base text-slate-500 leading-relaxed">
								{t("a3")}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							className="border-slate-200 border-b py-4"
							value="item-4"
						>
							<AccordionTrigger className="font-bold text-lg text-slate-900 hover:text-primary hover:no-underline">
								{t("q4")}
							</AccordionTrigger>
							<AccordionContent className="font-medium text-base text-slate-500 leading-relaxed">
								{t("a4")}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							className="border-slate-200 border-b py-4"
							value="item-5"
						>
							<AccordionTrigger className="font-bold text-lg text-slate-900 hover:text-primary hover:no-underline">
								{t("q5")}
							</AccordionTrigger>
							<AccordionContent className="font-medium text-base text-slate-500 leading-relaxed">
								{t("a5")}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
}
