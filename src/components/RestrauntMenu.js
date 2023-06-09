import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurent from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const { id } = useParams();
  // const [restaurent, setRestaurent] = useState(null);
  console.log('hello'+ useState());
  const restaurent = useRestaurent(id)


  return (!restaurent) ? <Shimmer/>: (
    <div className="menu">
      <div>
        <h1>Restaurent id: {id} </h1>
        <h1>{restaurent.name}</h1>
        <img src={IMG_CDN_URL + restaurent.cloudinaryImageId} />
        <h3>{restaurent.area}</h3>
        <h3>{restaurent.city}</h3>
        <h3>{restaurent.avgRating}</h3>
        <h3>{restaurent.costForTwo}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        
       
    {   
    // restaurent?.menu?.items &&       
    <ul>
      {
        Object.values(restaurent.menu.items).map((item)=>(
      
    <li key={item.id}>{item.name}</li>
        )
    )}
    </ul>
    }
      </div>
    </div>
  );
};

export default RestaurentMenu;


