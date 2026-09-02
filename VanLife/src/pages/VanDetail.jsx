import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  console.log(params);
  // useParams brought the id from the route

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [params.id]);
  return <h1>Van detail page</h1>;
}
