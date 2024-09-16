import "./CabinsTabs.css";
import { useState } from "react";
import OneCabin from "../OneCabin/OneCabin";

const CabinsTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTabs = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="ourCabins-wrapper">
      <h2>Our Cabins</h2>

      <div className="ourCabins-container">
        <div className="tabs">
          <div
            className={activeTab === 0 ? "active" : "tab"}
            onClick={() => toggleTabs(0)}
          >
            First
          </div>
          <div
            className={activeTab === 1 ? "active" : "tab"}
            onClick={() => toggleTabs(1)}
          >
            Second
          </div>
          <div
            className={activeTab === 2 ? "active" : "tab"}
            onClick={() => toggleTabs(2)}
          >
            Third
          </div>
          <div
            className={activeTab === 3 ? "active" : "tab"}
            onClick={() => toggleTabs(3)}
          >
            Fourth
          </div>
        </div>
        <OneCabin index={activeTab} />
      </div>
    </div>
  );
};

export default CabinsTabs;
