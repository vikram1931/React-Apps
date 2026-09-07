import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function HostVanDetail() {
  const params = useParams();

  const [vanDetail, setVanDetail] = useState(null); //vanDetail an array, it has only one element

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setVanDetail(json.vans); //here vans is an array
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
          <img alt="" src={vanDetail[0].imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${vanDetail[0].type}`}>
              {vanDetail[0].type}
            </i>
            <h3>{vanDetail[0].name}</h3>
            <h4>${vanDetail[0].price}/day</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
