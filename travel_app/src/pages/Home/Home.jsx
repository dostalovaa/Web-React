import Header from "../../components/Header/Header";
import Destinations from "../../components/Destinations/Destinations";
import ImageBox from "../../components/ImageBox/ImageBox";
import CabinsTabs from "../../components/CabinsTabs/CabinsTabs";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Destinations />
      <ImageBox />
      <CabinsTabs />
    </div>
  );
};

export default Home;
