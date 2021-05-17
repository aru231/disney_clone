import "./Recommend.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommends } from "../features/movieSlice";

const Recommend = (props) => {
  const movies = useSelector(selectRecommends);

  return (
    <>
      <div className="recom">
        <h4>Recommended For You</h4>
      </div>
      <div className="contained">
        {movies &&
          movies.map((movie, key) => (
            <div className="links" key={key}>
              {movie.id}
              <Link to={"/detail/" + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Recommend;
