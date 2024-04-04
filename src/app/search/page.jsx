"use client";
import React from 'react'
import {useSelector, useDispatch}from 'react-redux'
import { fetchContent } from '@/lib/features/content/contentSlice';
import { useEffect, useState } from 'react';
import Image from 'next/image'

const page = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContent());
    }, [dispatch]);

    const contents = useSelector((state) => state.content.contents);
    const isLoading = useSelector((state) => state.content.isLoading);
    const error = useSelector((state) => state.content.error);

    if (isLoading) {
        return (
        <span className="loading loading-ring loading-lg"></span>
        );
    }

    if (error) {
        return error;
    }

  return (
    <div>
        {
                contents.map((Element,id)=>{
                  
                    return(
                      <div key={id} class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                      <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                        <img
                          src={Element.image_url}
                          alt="card-image" class="object-cover w-full h-full" />
                      </div>
                      <div class="p-6">
                        <div class="flex items-center justify-between mb-2">
                          <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            {Element.title}
                          </p>
                          <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            $95.00
                          </p>
                        </div>
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                          With plenty of talk and listen time, voice-activated Siri access, and an
                          available wireless charging case.
                        </p>
                      </div>
                      <div class="p-6 pt-0">
                        <button
                          class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                          type="button">
                          Add to Cart
                        </button>
                      </div>
                    </div>                        
                    )
                })
        }
    </div>
  )
}

export default page