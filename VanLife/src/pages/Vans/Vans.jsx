import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((json) => setVans(json.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/Vans/${van.id}`}>
        <img src={van.imageUrl} alt="" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
