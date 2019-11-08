import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import { Container, Row } from "reactstrap";

const Nasa = () => {
  const [nasaInfo, setNasaInfo] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=LoWltxQU3RSihTpYACWWukuVeHtA1RMOJktY0RVy&date=2003-08-15`
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
    <Container>
      <Row>
        <NasaCard Info={nasaInfo} />
      </Row>
    </Container>
  );
};

export default Nasa;
