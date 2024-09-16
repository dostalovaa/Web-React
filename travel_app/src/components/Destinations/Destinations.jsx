import "./Destinations.css";
import { destinations } from "../../assets/assets";

const Destinations = () => {
  return (
    <div className="destination-content">
      <h2>Our Destinations</h2>
      <div className="destination-cards">
        {destinations.map((oneDestination, index) => {
          return (
            <div key={index} className="one-card">
              <img src={oneDestination.img} alt="destination-photo" />
              <h3>{oneDestination.title}</h3>
              <p>{oneDestination.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Destinations;
