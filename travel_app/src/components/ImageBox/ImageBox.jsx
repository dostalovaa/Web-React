import "./ImageBox.css";
import { assets } from "../../assets/assets";

const ImageBox = () => {
  return (
    <div className="image-box">
      <h2>Our Experiences</h2>
      <div className="gallery">
        <div className="gallery-item">
          <img src={assets.img1} alt="" />
        </div>
        <div className="gallery-item">
          <img src={assets.img7} alt="" />
        </div>
        <div className="gallery-item">
          <img src={assets.img10} alt="" />
        </div>
        <div className="gallery-item">
          <img src={assets.img4} alt="" />
        </div>
        <div className="gallery-item">
          <img src={assets.img3} alt="" />
        </div>
        <div className="gallery-item">
          <img src={assets.img5} alt="" />
        </div>
        <div className="gallery-item">
          <img src={assets.img6} alt="" />
        </div>
        <div className="gallery-item">
          <img src={assets.img9} alt="" />
        </div>
        <div className="gallery-item">
          <img src={assets.img8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
