import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

import { LOCALES } from "@/lib/site-config";

export const routing = defineRouting({
	locales: LOCALES,
	defaultLocale: "en",

	localeCookie: {
		name: "B2_PRO_LOCALE",
	},
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing);
