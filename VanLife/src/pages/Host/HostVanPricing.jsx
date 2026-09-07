import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostVanPricing() {
  const [vanDetail, setVanDetail] = useOutletContext();
  return <h1>${vanDetail.price}</h1>;
}
