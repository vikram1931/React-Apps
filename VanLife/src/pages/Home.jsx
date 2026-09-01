import React from "react";
import vanlifepic from "../images/vanlifepic.png";
export default function Home() {
  return (
    <div className="imagebackground">
      <section className="textOverImagebox">
        <p className="textOne">
          You got the travel plans, we got the travel vans
        </p>
        <p className="textTwo">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip
        </p>
        <p>
          {" "}
          <button className="Findyourvan" type="button">
            Find your van
          </button>
        </p>
      </section>
    </div>
  );
}
// <img src={vanlifepic} alt="vanlife background" className="bg-image" />
