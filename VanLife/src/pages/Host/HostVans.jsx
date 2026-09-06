import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function HostVans() {
  const [hostvans, setHostvans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((response) => response.json())
      .then((json) => setHostvans(json.vans));
  }, []);

  const hostvanElements = hostvans.map((hostvan) => {
    return (
      <Link
        to={`/host/vans/${hostvan.id}`}
        key={hostvan.id}
        className="host-van-link-wrapper">
        <div className="host-van-single" key={hostvan.id}>
          <img alt={` ${hostvan.name}`} src={hostvan.imageUrl} />
        </div>
      </Link>
    );
  });

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {hostvans.length > 0 ? (
          <section>{hostvanElements}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
