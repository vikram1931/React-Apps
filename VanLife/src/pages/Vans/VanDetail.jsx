import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  const [van, setVan] = React.useState(null);
  /* const params = new URLSearchParams(location.search);
  const buttonName = params.get("type")*/ // to change the button name dynamically we can do this as well
  const searchState = location.state?.search || "";

  const type = location.state?.type || "all";

  useEffect(() => {
    fetch(`/api/vans/${params.id}`) // useParams brought the id from the route
      .then((response) => response.json())
      .then((json) => setVan(json.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      <Link to={`..${searchState}`} relative="path" className="back-button">
        <span>Back to {type} vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt="" />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button type="button" className="link-button">
            Rent this van
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
