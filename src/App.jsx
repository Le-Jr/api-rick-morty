import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./index.scss";
import Filters from "./Components/Filters/Filters";
import Cards from "./Components/Cards/Cards";

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async () => {
      let data = await fetch(api).then((res) => res.json());
      console.log(data);
    })();
  }, [api]);

  return (
    <>
      <h1 className="text-center ubuntu my-4">
        Rick and Morty <span className="text-primary">API</span>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
