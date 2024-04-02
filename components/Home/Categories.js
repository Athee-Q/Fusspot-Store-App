"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/categories");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <section className="p-8 h-[25vh]">
      <h2 className="font-[900] text-primary text-center">CATEGORIES</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-28 place-content-center place-items-center">
        {categories?.length > 0 &&
          categories.map((c) => (
            <div key={c._id} className="flex flex-col justify-center items-center">
              <div className="relative w-28 h-28">
                <Image src={c.image} layout="fill" alt={c.name} />
              </div>
              <span className="hover:text-primary font-bold">{c.name}</span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Categories;
