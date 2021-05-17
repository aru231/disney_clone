import "./Home.css";
import back from "../images/home-background.png";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommend from "./Recommend";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movieSlice";
import { selectUserName } from "../features/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        // console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends= [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, {  id: doc.id, ...doc.data() }];
            break;
          case "originals":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
        }
      
    });
    dispatch(
      setMovies({
        recommends: recommends,
        newDisney: newDisney,
        originals: originals,
        trending: trending,
      })
    )});;
  }, [userName]);

  return (
    <>
      <div className="home">
        <ImgSlider />
        <Viewers />
        <Recommend />
        <NewDisney />
        <Trending />
        <Originals />
        <img
          className="image"
          style={{
            backgroundImage: `url(${back})`,
            border: 0,
            outline: "none",
          }}
        />
      </div>
    </>
  );
};

export default Home;
