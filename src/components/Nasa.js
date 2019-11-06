import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

const Nasa = () => {
  const [nasaInfo, setNasaInfo] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=LoWltxQU3RSihTpYACWWukuVeHtA1RMOJktY0RVy`
      )
      .then(response => {
        console.log(response.data);
        setNasaInfo(response.data);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);
  return (
    <div>
      <NasaCard Info={nasaInfo} />
    </div>
  );
};

export default Nasa;
