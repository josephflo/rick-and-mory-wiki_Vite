import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = () => {
  return (
    <div className="col-3 border border-secondary">
      <div className="text-center fw-bold fs-4 mb-2">FILTROS</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Gender/>
        <Species/>
        <Status/>
        
      </div>
    </div>
  );
};

export default Filters;
