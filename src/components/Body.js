import { restuarentlist } from "../config";
import RestuarentCard from "./RestuarentCard";
import { useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  // const [searchClicked, setSearchClicked] = useState();
  const [restaurent, setRestaurent] = useState(restuarentlist);

  const filterData = (searchText, restaurent) => {
    const filteredData =restaurent.filter((restaurent) =>
      restaurent.data.data.name.includes(searchText)
    );
    return filteredData
  };

  return (
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
            const data = filterData(searchText, restaurent);
            setRestaurent(data)
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurent-list">
        {restaurent.map((restaurent) => {
          return (
            <RestuarentCard
              {...restaurent.data.data}
              key={restaurent.data.data.id}
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
