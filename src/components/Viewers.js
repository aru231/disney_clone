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
import { useState } from "react";

const Viewers = (props) => {
  const [opac, setopac] = useState(0);
  const styles = {
    opacity: opac,
  };
  const [opac1, setopac1] = useState(0);
  const styles1 = {
    opacity: opac1,
  };
  const [opac2, setopac2] = useState(0);
  const styles2 = {
    opacity: opac2,
  };
  const [opac3, setopac3] = useState(0);
  const styles3 = {
    opacity: opac3,
  };
  const [opac4, setopac4] = useState(0);
  const styles4 = {
    opacity: opac4,
  };
  return (
    <>
      <section className="contain">
        <div
          className="imageee"
          onMouseEnter={() => setopac(1)}
          onMouseLeave={() => setopac(0)}
        >
          <img src={viewer} alt="" />
          <video
            style={styles}
            autoplay="true"
            loop="true"
            playsinline="true"
            muted
          >
            <source src={video1} type="video/mp4" />
          </video>
          {/* <HoverVideoPlayer
            videoSrc={video1}
            pausedOverlay={<img src={viewer} alt="" />}
            loadingOverlay={<div className="loading-spinner-overlay" />}
          /> */}
        </div>
        <div
          className="imageee"
          onMouseEnter={() => setopac1(1)}
          onMouseLeave={() => setopac1(0)}
        >
          <img src={viewer2} alt="" />
          <video
            style={styles1}
            autoplay="true"
            loop="true"
            playsinline="true"
            muted
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
        <div
          className="imageee"
          onMouseEnter={() => setopac2(1)}
          onMouseLeave={() => setopac2(0)}
        >
          <img src={viewer3} alt="" />
          <video
            style={styles2}
            autoplay="true"
            loop="true"
            playsinline="true"
            muted
          >
            <source src={video4} type="video/mp4" />
          </video>
        </div>
        <div
          className="imageee"
          onMouseEnter={() => setopac3(1)}
          onMouseLeave={() => setopac3(0)}
        >
          <img src={viewer4} alt="" />
          <video
            style={styles3}
            autoplay="true"
            loop="true"
            playsinline="true"
            muted
          >
            <source src={video5} type="video/mp4" />
          </video>
        </div>
        <div
          className="imageee"
          onMouseEnter={() => setopac4(1)}
          onMouseLeave={() => setopac4(0)}
        >
          <img src={viewer5} alt="" />
          <video
            style={styles4}
            autoplay="true"
            loop="true"
            playsinline="true"
            muted
          >
            <source src={video3} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};

export default Viewers;
