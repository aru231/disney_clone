import "./Recommend.css";
import{Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movieSlice";

const Trending = (props) => {
  const movies = useSelector(selectTrending);
  return (
    <>
      <div className="recom">
        <h4>Trending</h4>
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

export default Trending;
