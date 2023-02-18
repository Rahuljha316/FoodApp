import { useState } from "react";
import Logo from "../assets/img/food.png";
import { Link } from "react-router-dom";

// const loggedIn = () => {
//   return true;
// };

const Title = () => (
  // <h1 id="title" key="h2">
  //     Food Villa
  // </h1>
  <a href="/">
    <img alt="logo" className="logo" src={Logo}></img>
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>home</li>
          </Link>
          <Link to="/about">
            <li>about</li>
          </Link>
          <Link to="/contact">
          <li>contact</li>

          </Link>
          <li>cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>login</button>
      )}
    </div>
  );
};

export default Header;
