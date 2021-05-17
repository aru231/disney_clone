import "./Recommend.css";
import{Link} from "react-router-dom";
import web1 from "../images/875162-v.jpg";
import web2 from "../images/875162-v.jpg";
import web3 from "../images/875162-v.jpg";
import web4 from "../images/875162-v.jpg";

const Trending = (props) => {
  return (
    <>
      <div className="recom">
        <h4>Trending</h4>
      </div>
      <div className="contained">
        <div className="links">
            <Link to="/">
                <img src={web1}/>
            </Link>
        </div>
        <div className="links">
            <Link to="/">
                <img src={web2}/>
            </Link>
        </div>
        <div className="links">
            <Link to="/">
                <img src={web3}/>
            </Link>
        </div>
        <div className="links">
            <Link to="/">
                <img src={web4}/>
            </Link>
        </div>
        
      </div>
    </>
  );
};

export default Trending;
