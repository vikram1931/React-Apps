import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostVanInfo() {
  const [vanDetail, setVanDetail] = useOutletContext();

  return <h1> {vanDetail.description}</h1>;
}
