import { restuarentlist } from "../config";
import RestuarentCard from "./RestuarentCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  // const [searchClicked, setSearchClicked] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const filterData = (searchText, restaurent) => {
    const filteredData =restaurent.filter((restaurent) =>
      restaurent?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filteredData
  };

  useEffect(() =>{
    getRestaurents()
  }, [])


  async function getRestaurents (){
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7039956&lng=77.04997&page_type=DESKTOP_WEB_LISTING')
    debugger
    const json = await data.json()
    // console.log(json)
    // console.log('hiihhihi',json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

// early return
  
if(!allRestaurants) return null

if(filteredRestaurants.length ===0)
return <h1>No restaurants matches your filter</h1>

  return (allRestaurants.length ===0) ? <Shimmer/> :      (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {/* <h1>{searchClicked}</h1> */}
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data)
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurent-list">
        {/* {console.log(restaurent)} */}
        {filteredRestaurants.map((restaurent) => {
          return (
            
            <RestuarentCard
              {...restaurent.data}
              
              key={restaurent?.data?.data?.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;

{
  /* {RestuarentCard(restuarentlist[0])} */
}

{
  /* <RestuarentCard {...restuarentlist[0].data.data}/>
            <RestuarentCard {...restuarentlist[1].data.data}/>
            <RestuarentCard {...restuarentlist[2].data.data}/>
            <RestuarentCard {...restuarentlist[3].data.data}/>
            <RestuarentCard {...restuarentlist[4].data.data}/> */
}
{
  /* <RestuarentCard restuarent={restuarentlist[5]}/>
            <RestuarentCard restuarent={restuarentlist[6]}/> */
}
