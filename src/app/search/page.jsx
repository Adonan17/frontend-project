"use client";
import React from 'react'
import {useSelector, useDispatch }from 'react-redux'
import { fetchContent } from '@/lib/features/content/contentSlice';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Card from '@/components/Cards/Cards';

const BookList = () => {

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
    <Card></Card>
  )
}

export default BookList