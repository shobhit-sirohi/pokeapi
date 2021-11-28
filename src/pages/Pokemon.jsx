import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pokemon } from "../api/Api";

const Pokemon = () => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    pokemon().then((res) => {
      return setPoke(res.data.results);
    });
  }, []);
  return (
    <div className="p-10">
      {poke.map((item, i) => (
        <div
          key={item.name}
          className="p-4 flex flex-col gap-4 items-center justify-center"
        >
          <h2>{item.name}</h2>
          <Link
            to={`/${item.name}`}
            onClick={() => {
              window.location.href = `/${item.name}`;
            }}
          >
            about
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Pokemon;
