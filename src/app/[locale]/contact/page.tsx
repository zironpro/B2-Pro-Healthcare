import type { Metadata } from "next";

import { setRequestLocale } from "next-intl/server";
import type { Graph } from "schema-dts";

import { ContactView } from "@/features/contact/contact-view";
import { JsonLd } from "@/features/seo/json-ld";
import { SITE_URL } from "@/lib/site-config";

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const meta = (await import(`@/messages/${locale}/metadata`)).default;

	return {
		title: meta.contact.title,
		description: meta.contact.description,
		alternates: {
			canonical: `${SITE_URL}/${locale}/contact`,
		},
	};
}

type ContactMeta = {
	contact: {
		title: string;
		description: string;
	};
};

const getContactSchema = (locale: string, meta: ContactMeta): Graph => {
	const localeUrl = `${SITE_URL}/${locale}`;
	const isAr = locale === "ar";
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "ContactPage",
				"@id": `${localeUrl}/contact#webpage`,
				url: `${localeUrl}/contact`,
				name: meta.contact.title,
				isPartOf: { "@id": `${localeUrl}/#website` },
				about: { "@id": `${localeUrl}/#organization` },
				description: meta.contact.description,
				inLanguage: isAr ? "ar-AE" : "en-US",
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${localeUrl}/contact#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: isAr ? "الرئيسية" : "Home",
						item: localeUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: isAr ? "اتصل بنا" : "Contact",
						item: `${localeUrl}/contact`,
					},
				],
			},
		],
	};
};

export default async function ContactPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);
	const meta = (await import(`@/messages/${locale}/metadata`)).default;
	const contactSchema = getContactSchema(locale, meta);

	return (
		<>
			<JsonLd data={contactSchema} />
			<ContactView />
		</>
	);
}
