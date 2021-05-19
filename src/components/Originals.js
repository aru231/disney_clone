import "./Recommend.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginals } from "../features/movieSlice";

const Originals = (props) => {
  const movies = useSelector(selectOriginals);

  return (
    <>
      <div className="recom">
        <h4>Originals</h4>
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

export default Originals;
