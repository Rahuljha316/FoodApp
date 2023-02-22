import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurent = (id) =>{

  const [restaurent, setRestaurent] = useState(null);

    useEffect(() => {
        getRestaurentInfo();
      }, []);
    
    async function getRestaurentInfo() {
    const data = await fetch(
        FETCH_MENU_URL+id
    );
    const json = await data.json();
    console.log(json);
    setRestaurent(json.data);
    }
    
    return restaurent
}

export default useRestaurent;