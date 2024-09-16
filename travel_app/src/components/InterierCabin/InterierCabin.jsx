import { cabins, categories } from "../../assets/assets";
import { useState } from "react";
import "./InterierCabin.css";
import CabinCard from "../CabinCard/CabinCard";

const InterierCabin = () => {
  const [state, setState] = useState("All");

  const filteredCabins = cabins.filter((oneCabin) => {
    if (state === "All") {
      return true;
    }
    return oneCabin.category === state;
  });

  return (
    <div className="interierCabin-wrapper">
      <h2>Our Best Stays</h2>
      <div className="interierCabin-content">
        <div className="interierCabin-filter">
          {categories.map((oneCategory, index) => {
            return (
              <button key={index} onClick={() => setState(oneCategory)}>
                {oneCategory}
              </button>
            );
          })}
        </div>
        <div className="all-cards">
          {filteredCabins.map((oneCabin, index) => {
            return <CabinCard key={index} oneCabin={oneCabin} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default InterierCabin;
