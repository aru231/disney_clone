import "./Detail.css";
import playimg from "../images/play-icon-black.png";
import trailerimg from "../images/play-icon-white.png";
import AddIcon from "@material-ui/icons/Add";
import GroupIcon from "@material-ui/icons/Group";
import { useEffect, useState } from "react";
import db from "../firebase";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setData(doc.data());
        } else {
          console.log("No Data Available");
        }
      })
      .catch((error) => {
        console.log("Error Retreiving Data");
      });
  }, [id]);

  return (
    <>
      <div className="detailed">
        <div className="background">
          <img
            src={data.backgroundImg}
            alt={data.title}
          />
        </div>
        <div className="imageTitle">
          <img
            src={data.titleImg}
            alt={data.title}
          />
        </div>
        <div className="metadata">
          <div className="contentt">
            <button className="play">
              <img src={playimg} alt="" />
              <h2>PLAY</h2>
            </button>
            <button className="trailer">
              <img src={trailerimg} alt="" />
              <h2>TRAILER</h2>
            </button>
            <button className="plus">
              <AddIcon />
            </button>
            <button className="plus">
              <GroupIcon />
            </button>
          </div>
          <div className="subtitle">
            <span>{data.subTitle}</span>
          </div>
          <div className="descript">
            <span>{data.description}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
