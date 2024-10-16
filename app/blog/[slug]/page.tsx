import { client, imgUrl } from "@/lib/sanity.client";
import Image from "next/image";
import React from "react";

interface Details {
  title: string;
  mainImage: string;
  description: string;
}

async function getPostDetails(slug: string) {
  const query = `
    *[_type == "post" && slug.current == "${slug}"] {
     _id,
        "currentSlug": slug.current,
        title,
        description,
        mainImage
}[0]
    `;
  const data = client.fetch(query);
  return data;
}

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const postDetails: Details = await getPostDetails(params.slug);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96">
          <Image
            src={imgUrl(postDetails.mainImage).url()}
            layout="fill"
            objectFit="cover"
            alt={postDetails.title}
            priority
            className="transition-opacity duration-300 hover:opacity-90"
          />
        </div>
        <div className="p-6 sm:p-8 md:p-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {postDetails.title}
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>{postDetails.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
