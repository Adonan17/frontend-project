import React from 'react'
import { useSelector } from 'react-redux'

export const Hero = () => {

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

  const image = contents.map((item) => item.image_url);
  const desc = contents.map((item) => item.description);

  // Fonction pour générer un index aléatoire
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

  // Génération d'un index aléatoire
  const randomIndex = getRandomIndex(contents.length);

  // Création du tableau dataRandom
  const imageRandom = [image[randomIndex]];
  const descRandom = [desc[randomIndex]];

  // Ajout des 9 éléments suivants dans dataRandom
  for (let i = 1; i < 1 && randomIndex + i < contents.length; i++) {
    imageRandom.push(image[randomIndex + i]);
    descRandom.push(desc[randomIndex + i]);
  }
  

  return (
    <div>
    <div className="hero min-h-[50dvh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={imageRandom[0]} className=" max-w-sm rounded-lg shadow-2xl" alt=''/>
        <div className='lg:w-[70%]'>
        <h1 className="text-5xl font-bold">Book of the day!</h1>
        <p className="py-6">{descRandom[0]}</p>
          <button className="btn btn-primary bg-base-300 border-none hover:bg-base-300">Check it</button>
        </div>
    </div>
    </div>
    </div>
  )
}
