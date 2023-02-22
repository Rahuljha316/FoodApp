import { IMG_CDN_URL } from "../config";

const RestuarentCard = ({
  name,
  cloudinaryImageId,
  lastMileDistance,
  cuisines,
  user
}) => {
  
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines?.join(" ,")}</h3>
      <h4>{lastMileDistance}</h4>
      <h4>{user.name}</h4>
     
    </div>
  );
};

export default RestuarentCard;
