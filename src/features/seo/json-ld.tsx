import Script from "next/script";

export function JsonLd<T>({ data }: { data: T }) {
	return <Script type="application/ld+json">{JSON.stringify(data)}</Script>;
}
