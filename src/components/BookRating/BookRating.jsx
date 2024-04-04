"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function BookRating() {

  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) {
    return <div className="text-orange-600 text-[100px]">isLoading</div>;
  }
  if (error) {
    return error;
  }

  const [topBooks, setTopBooks] = useState([]);

  useEffect(() => {
    // Trier les livres par note, en ordre décroissant
    const sortedBooks = [...contents]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
    setTopBooks(sortedBooks);
  }, []);

  console.log(topBooks);

  return (
    <div className="py-10 bg-[#262626]">
      <div
        className={`pt-10 px-5 md:px-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center gap-10`}
      >
        {topBooks.map((item, i) => (
          <div key={i} className={`w-full h-fit text-[#E4E4E4]`}>
            <div className="w-full h-40 flex flex-col justify-between gap-3 pb-5">
              <div className={`font-[utendo-regular] text-xl`}>
                {item.title}
              </div>
              <div className={`font-[utendo-medium] text-4xl`}>
                Note: {item.rating}
              </div>
            </div>
            <img className="w-full" src={item.image_url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
