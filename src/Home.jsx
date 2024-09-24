// Ilmeisesti React 17 ei vaadi enää import lausetta alkuun, mutta jätin sen kuitenkin toimivuuden kannalta.
import React from "react";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <p>
        This app has functionality to add words to dictionary and search words
        from dictionary
      </p>
    </div>
  );
}
