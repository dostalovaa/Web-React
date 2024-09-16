import { cabins } from "../../assets/assets";
import "./OneCabin.css";

const OneCabin = ({ index }) => {
  const currentCabin = cabins[index];
  return (
    <div>
      <div className="destinations-place">
        <div className="destinations-place-container">
          <div className="oneCabin">
            <div className="right-side">
              <h3>{currentCabin.title}</h3>
              <img src={currentCabin.img[0]} alt="" />
            </div>
            <div className="left-side">
              <p>{currentCabin.description}</p>
              <p>{currentCabin.price}$ per night</p>
              <button>Explore more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCabin;
