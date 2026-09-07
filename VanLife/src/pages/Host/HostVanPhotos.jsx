import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
  const { vanDetail } = useOutletContext();
  return (
    <img alt="" src={vanDetail.imageUrl} className="host-van-detail-image" />
  );
}
