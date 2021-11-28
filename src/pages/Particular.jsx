import axios from "axios";
import React, { useEffect, useState } from "react";

const Particular = (props) => {
  const [parti, setParti] = useState([]);

  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${props.page}`)
    .then((res) => {
      return setParti(res.data.json());
    });

  useEffect(() => {
    // const pokemon = axios
    //   .get(
    //     `https://pokeapi.co/api/v2/pokemon/${props.page}`
    //   )
    //   .then((res) => {
    //     return res.data;
    //   });
    // return pokemon;
    // axios
    //   .get(
    //     `https://pokeapi.co/api/v2/pokemon/${props.page}`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //   });
  });
  return (
    <div>
      {/* <img
        src={parti.sprites.front_default}
        alt={parti.name}
      /> */}
      <div className="p-4">
        <h2>{parti.name}</h2>
        <span>{parti.height}</span>
      </div>
      {/* hello */}
    </div>
  );
};

export default Particular;
