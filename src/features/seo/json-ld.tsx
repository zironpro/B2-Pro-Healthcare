import Script from "next/script";

import type { Graph, Thing, WithContext } from "schema-dts";

export function JsonLd<T extends WithContext<Thing> | Graph>({
	data,
}: {
	data: T;
}) {
	return (
		<Script
			// biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD injection
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
			id="json-ld"
			type="application/ld+json"
		/>
	);
}
