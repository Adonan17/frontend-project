import React from 'react'

const page = (params) => {
    console.log(params);
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
    <div className="card w-[70dvw] h-[70dvh] lg:card-side bg-base-200 shadow-xl">
        <figure><img className='h-[100%]' src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title"></h2>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <div className="card-actions justify-end">
            </div>
        </div>
    </div>
    </div>
  )
}

export default page