import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((json) => setVans(json.vans));
  }, []);

  const filteredvans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = filteredvans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={van.id} state={{ search: `?${searchParams.toString()}` }}>
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
      <div className="van-list-container">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`van-type simple ${typeFilter === "simple" ? "selected" : null}`}>
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`van-type luxury ${typeFilter === "luxury" ? "selected" : null} `}>
          Luxury{" "}
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`van-type rugged ${typeFilter === "rugged" ? "selected" : null}`}>
          Rugged
        </button>

        {typeFilter ? (
          <button
            onClick={() => setSearchParams({})}
            className="van-type clear-filters">
            clear
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
