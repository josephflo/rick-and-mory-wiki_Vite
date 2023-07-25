import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Filters from "./components/Filters/Filters";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFechedData] = useState([]);
  let { info, results } = fetchedData;
  console.log(pageNumber);

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
        <h1 className="text-center ubuntu my-4">
          Rick and Morty <span className="text-primary">Wiki</span>
        </h1>
        <SearchBar/>
        <div className="container border border-secondary">
          <div className="row border border-danger">
              <Filters />
            <div className="col-8 border border-success">
              <div className="row border border-warning">
                <Cards results={results} />
              </div>
            </div>
          </div>
        </div>
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </>
  );
}

export default App;
