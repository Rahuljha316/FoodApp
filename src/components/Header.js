import { useState } from "react";
import Logo from '../assets/img/food.png'
// const loggedIn = () => {
//   return true;
// };

const Title = () => (
  // <h1 id="title" key="h2">
  //     Food Villa
  // </h1>
  <a href="/">
    <img
      alt="logo"
      className="logo"
      src={Logo}
    ></img>
  </a>
);

const Header = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </div>
      {isLoggedIn  ? 
      (<button onClick={()=> setIsLoggedIn(false)}>logout</button>)
      : (<button onClick={()=> setIsLoggedIn(true)}>login</button> )
      }
    </div>
  );
};

export default Header;
