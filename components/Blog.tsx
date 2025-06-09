'use client'

import { articles } from '@/data/articles';
import Image from 'next/image';
import Link from 'next/link';


const Blog = () => {
  return (
    <section className="mt-5 px-4 md:px-0 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <div key={article.id} className="bg-white text-black rounded-lg shadow-lg p-4">
          {article.image && (
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={200}
              className="rounded-md mb-4 w-full h-[200px]"
            />
          )}
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
          <p className="text-gray-700 text-sm mb-4">{article.summary}</p>
          <Link
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline font-semibold hover:text-orange-800"
          >
            Read on {article.platform.toUpperCase()}
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Blog;
