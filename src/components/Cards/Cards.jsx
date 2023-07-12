import React from "react";
import styles from './Cards.module.css'

const Cards = ({ results }) => {
  console.log(results);
  let display;
  if (results) {
    display = results.map((card) => {
      let { id, name, image, location, status } = card;
      return (
        <div key={id} className="col-4 position-relative">
          <div className={styles.cardsBox}>
            <img src={image} alt="" className={`${styles.img} img-fluid`}/>
            <div className="content p-2">
              <div className="fs-4 fw-bold">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(()=>{
            if(status === "Dead"){
              return (
                <div className={`${styles.badge} badge bg-dark position-absolute`}>{status}</div>
              )
            }  else if (status === "Alive") { 
              return (
                <div className={`${styles.badge} badge bg-success position-absolute`}>{status}</div>
              )
            } else {
              return (
                <div className={`${styles.badge} badge bg-danger position-absolute`}>{status}</div>
              )
            }
          })()}
          
        </div>
      );
    });
  } else {
    display = "Not information founded";
  }

  return <div className="row border border-danger">{display}</div>;
};

export default Cards;
