import "./Login.css";
import image from "../images/login-background.jpg";
import web from "../images/cta-logo-one.svg";
import marvel from "../images/cta-logo-two.png";
const Login = () => {
  return (
    <>
      <section className="main">
        <div className="content">
          <div className="cta">
            <img
              className="logo"
              src={web} alt=""
            />
            <a className="sign">GET ALL THERE</a>
            <h1 className="desc">
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 04/30/21, the price of
              Disney+ and The Disney Bundle will increase by $1.
            </h1>
            <img
              className="logo_two"
              src ={marvel} alt=""
            />
          </div>
          <div
            className="bgimage"
            style={{
              backgroundImage: `url(${image})`,
              height: "100vh",
              width: "100vw",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Login;
