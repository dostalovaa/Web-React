import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import "./CabinCard.css";

const CabinCard = ({ oneCabin }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? oneCabin.img.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prev) =>
      prev === oneCabin.img.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="interierCabin-card">
      <div className="interierCabin-left">
        <h3>{oneCabin.title}</h3>
        <div className="img-slider">
          <div className="icons">
            <div className="icons-left">
              <div className="icon-wrapper">
                <FaArrowLeft onClick={handlePrevImage} size={20} />
              </div>
            </div>
            <div className="icons-right">
              <div className="icon-wrapper">
                <FaArrowRight onClick={handleNextImage} size={20} />
              </div>
            </div>
          </div>
          <img src={oneCabin.img[currentImage]} alt="one-cabin" />
        </div>
      </div>
      <div className="interierCabin-right">
        <p>{oneCabin.description}</p>
        <p>{oneCabin.price}$ per night</p>
        <button>Add To Your Cart</button>
      </div>
    </div>
  );
};

export default CabinCard;
