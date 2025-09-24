"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";

type Deal = {
  id: number;
  title: string;
  price: string;
  image: string;
};

type Blog = {
  id: number;
  title: string;
  snippet: string;
};

const mockDeals: Deal[] = [
  { id: 1, title: "Rolex Daytona", price: "$12999", image: "/images/deals/deal1.jpg" },
  { id: 2, title: "Omega Seamaster", price: "$2499", image: "/images/deals/deal2.jpg" },
  { id: 3, title: "Apple Watch Ultra", price: "$799", image: "/images/deals/deal3.jpg" },
  { id: 4, title: "Tag Heuer Carrera", price: "$3499", image: "/images/deals/deal4.jpg" },
  { id: 5, title: "Cartier Tank", price: "$6999", image: "/images/deals/deal5.jpg" },
];

const mockBlogs: Blog[] = [
  { id: 1, title: "Investing in Rolex Watches", snippet: "Learn why Rolex watches retain value over time..." },
  { id: 2, title: "Omega vs Rolex: Comparison", snippet: "Which brand gives you better luxury value..." },
  { id: 3, title: "Apple Watch Ultra Features", snippet: "A complete guide to the Apple Watch Ultra..." },
  { id: 4, title: "Tag Heuer History", snippet: "Discover the rich history of Tag Heuer watches..." },
  { id: 5, title: "Cartier Classics", snippet: "Explore Cartier's timeless designs and elegance..." },
];

export default function BlogSection() {
  const [items, setItems] = useState<{ deal: Deal; blog: Blog }[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = () => {
    const dealsBatch = mockDeals.slice((page - 1) * 2, page * 2);
    const blogsBatch = mockBlogs.slice((page - 1) * 2, page * 2);

    if (dealsBatch.length === 0 || blogsBatch.length === 0) {
      setHasMore(false);
      return;
    }

    const newItems = dealsBatch.map((deal, idx) => ({
      deal,
      blog: blogsBatch[idx],
    }));

    setItems((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
  };

  return (
    <section className="py-12 bg-gray-50 max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Featured Deals & Related Blogs
      </h2>

      <InfiniteScroll
        dataLength={items.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<p className="text-center mt-4">Loading more...</p>}
        className="flex flex-col gap-12"
      >
        {items.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              {isEven ? (
                <>
                  <DealCard deal={item.deal} />
                  <BlogCard blog={item.blog} />
                </>
              ) : (
                <>
                  <BlogCard blog={item.blog} />
                  <DealCard deal={item.deal} />
                </>
              )}
            </div>
          );
        })}
      </InfiniteScroll>

      {hasMore === false && (
        <div className="text-center mt-6">
          <button className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-400 transition">
            See All Blogs & Deals
          </button>
        </div>
      )}
    </section>
  );
}

function DealCard({ deal }: { deal: Deal }) {
  return (
    <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer">
      <div className="relative w-full h-56 md:h-64">
        <Image src={deal.image} alt={deal.title} fill className="object-cover" />
      </div>
      <div className="p-4 text-center md:text-left">
        <h3 className="font-semibold text-lg">{deal.title}</h3>
        <p className="text-yellow-600 font-bold text-lg">{deal.price}</p>
      </div>
    </div>
  );
}

function BlogCard({ blog }: { blog: Blog }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex-1 bg-white rounded-xl shadow p-4 hover:shadow-2xl transition cursor-pointer">
      <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
      <p className="text-gray-600">
        {expanded ? blog.snippet : blog.snippet.slice(0, 60) + "..."}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-yellow-500 font-medium mt-2 hover:underline"
      >
        {expanded ? "View Less" : "View More"}
      </button>
    </div>
  );
}
