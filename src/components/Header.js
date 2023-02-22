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
    <img alt="logo" className="h-28 py-2" src={Logo}></img>
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-purple-200">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">about</li>
          </Link>
          <Link to="/contact">
          <li className="px-2">contact</li>

          </Link>
          <li className="px-2">cart</li>
          <Link to='/instamart'>
          <li className="px-2">Instamart</li></Link>
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
