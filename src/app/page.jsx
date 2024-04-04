"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContent } from "@/lib/features/content/contentSlice";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Carousel from "@/components/Carousel/Carousel";
import BookRating from "@/components/BookRating/BookRating";
import { Hero } from "@/components/Hero/Hero";

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) {
    return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
}

  if (error) {
    return error;
  }

  return (
    <div
      className={`min-h-screen w-full`}
    >
      <Hero></Hero>
      <Carousel />
    </div>
  );
}
