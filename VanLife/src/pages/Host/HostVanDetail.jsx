import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  return (
    <div>
      <h1>Host van detail page </h1>

      {vanDetail ? (
        <div>
          <img alt=" " src={vanDetail[0].imageUrl} width={150} />
          <h1>{`${vanDetail[0].name}`}</h1> <p>${vanDetail[0].price}</p>
          <p>{vanDetail[0].type}</p>
        </div>
      ) : (
        <h1>loading ....</h1>
      )}
    </div>
  );
}
