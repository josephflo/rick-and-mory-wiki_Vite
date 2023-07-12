import React from "react";

const Pagination = ({pageNumber,setPageNumber}) => {
  let prev = ()=>{
    if(pageNumber === 1) return 
    setPageNumber((page)=>page-1)
  }
  
  let next = ()=> {
    setPageNumber((page)=>page+1)
  }

  return (
    <div className="container">
      <button onClick={prev}className="btn btn-primary">Prev</button>
      <div className="badge btn-primary">{pageNumber}</div>
      <button onClick={next} className="btn btn-primary">Next</button>
    </div>
  );
};

export default Pagination;
