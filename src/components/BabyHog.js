import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({ eyeColor, hobby, name }) {
  const [weight, setWeight] = useState(200);
  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    e.target.name === "+"
      ? setWeight((prev) => prev + 23)
      : setWeight((prev) => prev - 23);
  }

  function whatIsEyeColor() {
    if (eyeColor === "blue") {
      return BlueBaby;
    } else if (eyeColor === "sun") {
      return SunBaby;
    } else if (eyeColor === "glowing") {
      return GlowingBaby;
    }
  }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>weight:{weight} kg</h3>
      <h3>Hobby:{hobby}</h3>
      <h4>Eye Color:{eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>
        Increase weight
      </button>
      <button name="-" onClick={handleChangeWeight}>
        Decrease weight
      </button>

      <div className="hb-wrap">
        <img
          src={whatIsEyeColor()}
          style={{ height: weight }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
