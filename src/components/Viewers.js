import "./Viewers.css";
import viewer from "../images/viewers-disney.png";
import viewer2 from "../images/viewers-marvel.png";
import viewer3 from "../images/viewers-pixar.png";
import viewer4 from "../images/viewers-starwars.png";
import viewer5 from "../images/viewers-national.png";
import video1 from "../videos/disney.mp4";
import video2 from "../videos/marvel.mp4";
import video3 from "../videos/national-geographic.mp4";
import video4 from "../videos/pixar.mp4";
import video5 from "../videos/star-wars.mp4";

const Viewers = (props) => {
  return (
    <>
      <section className="contain">
        <div className="imageee">
          <img src={viewer} alt="" />
          <video autoplay="true" loop="true" playsinline="true" muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <div className="imageee">
          <img src={viewer2} alt="" />
          <video autoplay="true" loop="true" playsinline="true" muted>
            <source src={video2} type="video/mp4" />
          </video>
        </div>
        <div className="imageee">
          <img src={viewer3} alt="" />
          <video autoplay="true" loop="true" playsinline="true" muted>
            <source src={video4} type="video/mp4" />
          </video>
        </div>
        <div className="imageee">
          <img src={viewer4} alt="" />
          <video autoplay="true" loop="true" playsinline="true" muted>
            <source src={video5} type="video/mp4" />
          </video>
        </div>
        <div className="imageee">
          <img src={viewer5} alt="" />
          <video autoplay="true" loop="true" playsinline="true" muted>
            <source src={video3} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};

export default Viewers;
