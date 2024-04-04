import React from 'react'
import {useSelector} from 'react-redux'

const Card = () => {
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
    <div className='w-screen gap-10 flex flex-wrap justify-center mt-10 mb-10'>
        {
                contents.map((Element,id)=>{
                  
                    return(
                      <div key={id} class="relative flex flex-col justify-between  bg-base-200 shadow-md bg-clip-border rounded-xl w-[300px]">
                      <div class="relative mx-4 mt-4 overflow-hidden  bg-base-300 bg-clip-border rounded-xl h-[350px]">
                        <img
                          src={Element.image_url}
                          alt="card-image" className="object-cover w-full h-full" />
                      </div>
                      <div class="p-3">
                        <div class="flex items-center justify-center mb-2">
                          <p class="block font-sans text-base text-center antialiased font-medium leading-relaxed text-blue-gray-900">
                            {Element.title}
                          </p>
                        </div>
                      </div>
                      <div class="p-3 pt-0">
                        <button
                          class="align-middle bg-base-300 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                          type="button">
                          Add to Favorites
                        </button>
                      </div>
                    </div>                        
                    )
                })
        }
    </div>
  )
}

export default Card