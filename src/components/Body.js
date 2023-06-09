import { restuarentlist } from "../config";
import RestuarentCard from "./RestuarentCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurentHome from "../utils/useRestaurentHome";
import { HiStatusOnline } from "react-icons";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, allRestaurants, setFilteredRestaurants] =
    useRestaurentHome([]);

  const isOnline = useOnline();

  const { user,setUser } = useContext(UserContext)
  // const handleNameChange = (e) =>{
    
  //   setUser(e.target.value)
  // }
  // early return

  if (!allRestaurants) return null;

  if (!isOnline) return <div>Sorry not connected to internet</div>;

  // if(filteredRestaurants.length ===0)
  // return <h1>No restaurants matches your filter</h1>

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-yellow-100 my-5">
        <input
          type="text"
          className="focus:bg-green-100 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {/* <h1>{searchClicked}</h1> */}
        <button
          className="p-2 m-2 bg-purple-500 text-white rounded-md hover:bg-violet-600"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          type="text"
          className="focus:bg-green-100 p-2 m-2"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({
            ...user,
            name: e.target.value,
           }
           )}
        />
        <input
          type="text"
          className="focus:bg-green-100 p-2 m-2"
          placeholder="Email"
          value={user.email}
          onChange={ e =>setUser({
            ...user,
            email: e.target.value
          })}
          
        />
        {/* <input
          type="text"
          className="focus:bg-green-100 p-2 m-2"
          placeholder="Name"
        /> */}
      </div>
      <div className="flex flex-wrap">
        {/* {console.log(restaurent)} */}
        {filteredRestaurants.map((restaurent) => {
          return (
            <Link
              to={"/restaurent/" + restaurent?.data?.id}
              key={restaurent?.data?.id}
            >
              <RestuarentCard {...restaurent.data}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
