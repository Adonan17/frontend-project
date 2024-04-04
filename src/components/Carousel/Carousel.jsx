import React from "react";
import "./Carousel.css";
import { useSelector } from "react-redux";

export default function Carousel() {

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

  const data = contents.map((item) => item.image_url);

  // Fonction pour générer un index aléatoire
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

  // Génération d'un index aléatoire
  const randomIndex = getRandomIndex(data.length - 10);

  // Création du tableau dataRandom
  const dataRandom = [data[randomIndex]];

  // Ajout des 9 éléments suivants dans dataRandom
  for (let i = 1; i < 10 && randomIndex + i < data.length; i++) {
    dataRandom.push(data[randomIndex + i]);
  }

  return (
    <div class="logos">
      <div class="logos-slide">
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[0]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[1]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[2]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[3]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[4]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[5]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[6]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[7]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[8]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[9]} alt="" />
        </div>
      </div>
      <div class="logos-slide">
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[0]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[1]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[2]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[3]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[4]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[5]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[6]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[7]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[8]} alt="" />
        </div>
        <div className="h-96 w-72 flex justify-center items-center">
          <img src={dataRandom[9]} alt="" />
        </div>
      </div>
    </div>
  );
}
