import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Create a Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-05-03", // Use current date (YYYY-MM-DD) to target the latest API version
  useCdn: false, // Enable CDN caching in production
});

const builder = imageUrlBuilder(client);

export function imgUrl(source: SanityImageSource) {
  return builder.image(source);
}
