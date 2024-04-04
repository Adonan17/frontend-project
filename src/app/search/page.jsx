"use client";
import {useSelector} from 'react-redux'
import React from 'react'

const page = () => {
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
        
    </div>
  )
}

export default page