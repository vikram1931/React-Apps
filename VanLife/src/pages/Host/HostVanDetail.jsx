import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  const params = useParams();

  const [vanDetail, setVanDetail] = useState(null); //vanDetail an array, it has only one element

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.vans[0]);
        setVanDetail(json.vans[0]); // //here vans is an array
      });
  }, [params.id]);
  // console.log(vanDetail);

  if (!vanDetail) {
    return <h1>Loading .....</h1>;
  }
  return (
    <section>
      <Link to=".." className="back-button" relative="path">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img alt="" src={vanDetail.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${vanDetail.type}`}>
              {vanDetail.type}
            </i>
            <h3>{vanDetail.name}</h3>
            <h4>${vanDetail.price}/day</h4>
          </div>
        </div>

        <Link to={`/host/vans/${params.id}`}>Details</Link>
        <Link to="pricing">Pricing</Link>
        <Link to="photos">Photos</Link>
        <Outlet />
      </div>
    </section>
  );
}
