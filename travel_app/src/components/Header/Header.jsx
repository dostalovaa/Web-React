import { useState } from "react";
import "./Header.css";

const mainText = ["Best Cabins", "Best Travel Guide", "Best Experience"];

const Header = () => {
  const mainTextIndex = Math.floor(Math.random() * mainText.length);
  const text = mainText[mainTextIndex];
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-image">
          <h1>{text}</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            officiis sequi repellat laboriosam animi ducimus earum fugiat,
            molestiae nulla repellendus dolores! Vel qui fuga facere quis natus
            officiis omnis suscipit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
