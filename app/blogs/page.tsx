import React from "react";
import { client, imgUrl } from "@/lib/sanity.client";
import { Post } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  const query = `
  *[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    description,
    "currentSlug": slug.current,  
    mainImage,
    _createdAt
  }
  `;
  const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
  return data;
}

export default async function Blogs() {
  const posts: Post[] = await getPosts();

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Cirql Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={imgUrl(post.mainImage).url()}
                  layout="fill"
                  objectFit="cover"
                  alt={post.title}
                  priority
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex justify-between items-center">
                  <Link href={`/blog/${post.currentSlug}`}>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                      Read more
                    </button>
                  </Link>
                  <span className="text-sm text-gray-500">
                    {new Date(post._createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
