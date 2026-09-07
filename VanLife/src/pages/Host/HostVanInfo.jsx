import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostVanInfo() {
  const { vanDetail } = useOutletContext();

  return (
    <section className="host-van-detail-info">
      <h4>Name: {vanDetail.name}</h4>
      <h4>Category:{vanDetail.type}</h4>
      <h4>Description:{vanDetail.description}</h4>
      <h4>Visibility:public</h4>
    </section>
  );
}
