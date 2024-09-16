import "./Office.css";
import { assets } from "../../assets/assets";

const Office = () => {
  return (
    <div className="office-content">
      <h2>Our Team</h2>
      <div className="office-text">
        <img src={assets.office} alt="office" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          repellendus quaerat quasi est nostrum ipsam inventore voluptatum. In,
          ratione repellat. Velit tempora iste obcaecati dicta sit delectus
          fugiat, quasi natus. Voluptate, dolor molestias eveniet nulla ab
          perspiciatis. Esse ad aliquid recusandae quas necessitatibus. Hic
          esse, consectetur magni aliquam ad ea. Voluptates corporis fuga
          tempore veritatis ipsam voluptate iste modi facere. Porro, officia
          velit reprehenderit nobis error assumenda a deleniti sunt. Optio
          recusandae dicta doloremque sint possimus amet. Maiores in, minima
          eligendi sapiente labore facere, placeat voluptatem error at,
          doloremque dolores! Pariatur aliquid molestiae, quo perspiciatis
          mollitia, recusandae ab dolores blanditiis error quisquam earum sunt.
          Earum laudantium culpa eum! Possimus expedita temporibus vitae maiores
          nesciunt voluptatem? Enim saepe cumque consequuntur animi? Modi, nobis
          fuga molestiae recusandae, magnam vel atque dignissimos odit deserunt
          dicta voluptates consequatur vitae omnis necessitatibus sunt itaque
          placeat reprehenderit similique a mollitia eos incidunt eius ipsa?
          Quisquam, distinctio? Incidunt, suscipit, maiores numquam qui dolore
          placeat omnis fugit voluptates eligendi debitis velit officia totam
          rerum?
        </p>
      </div>
      <div className="office-awards">
        <h2>Our Achievements</h2>
        <div className="office-awards-img">
          <img src={assets.award_1} alt="award_1" />
          <img src={assets.award_2} alt="award_2" />
          <img src={assets.award_3} alt="award_3" />
        </div>
      </div>
    </div>
  );
};

export default Office;
