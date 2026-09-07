import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
  const [vanDetail, setVanDetail] = useOutletContext();
  return <img alt="" src={vanDetail.imageUrl} />;
}
