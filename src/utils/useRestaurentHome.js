import { useEffect, useState } from "react";
import { FETCH_RESTAURENT_URL } from "../config";
import { filterData } from "./helper";



const useRestaurentHome = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [ searchText ] = useState("");


  const handleFilteredRestaurent = () => {
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data)
  }

  useEffect(() => {
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch(
      FETCH_RESTAURENT_URL
    );

    const json = await data.json();

    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return [filteredRestaurants, allRestaurants, setFilteredRestaurants]
};

export default useRestaurentHome
