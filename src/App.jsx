import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Pagination from "./components/Pagination/Pagination";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [pageNumber, setPageNumber] = useState(0);
  let [fetchedData, updateFechedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let dataApi = await fetch(api).then((data) => data.json());
      updateFechedData(dataApi);
    })();
  }, [api]);

  return (
    <>
      <div className="App">
        <h1>
          Rick and Morty <span className="text-primary">Wiki</span>
        </h1>
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
    </>
  );
}

export default App;
