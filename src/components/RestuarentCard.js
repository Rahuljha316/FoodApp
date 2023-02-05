import { IMG_CDN_URL } from "../config";

const RestuarentCard = ({
  name,
  cloudinaryImageId,
  lastMileDistance,
  cuisines,
}) => {
  // console.log(props.restuarent.data.data?.name)
  // const {data:{
  //     data:{name,
  //     cuisines,
  //     cloudinaryImageId,lastMileDistance

  //     }
  // }

  // } = restuarent;
  // const [name,cloudinaryImageId,lastMileDistance,cuisines] = restuarent.data

  // console.log(name);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      {/* <h2>{props.restuarent.data.data?.name}</h2> */}
      <h2>{name}</h2>
      <h3>{cuisines?.join(" ,")}</h3>
      <h4>{lastMileDistance}</h4>
      {/* <h2>{props.restuarent.data.data?.cuisines.join(' , ')}</h2>
            <h3>{props.restuarent.data.data?.lastMileTravel} Minutes</h3> */}
      {/* <h3>Burger ,American</h3>
            <h2>Burger ,American</h2> */}
    </div>
  );
};

export default RestuarentCard;
