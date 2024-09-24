// Ilmeisesti React 17 ei vaadi enää import lausetta alkuun, mutta jätin sen kuitenkin toimivuuden kannalta.
import React from "react";

export default function Search() {
  // Funktio backendin hakua varten
  function getSearchResults() {
    // Tyhjennetään eng-text input-kenttä
    document.getElementById("eng-text").value = "";

    // Otetaan fin-text input-kentän arvo talteen
    const word = document.getElementById("fin-text").value;

    // Jos fin-text input-kenttä on tyhjä, niin ilmoitetaan käyttäjälle
    if (word === "") {
      alert("Please enter a word to search");
    } else {
      // fin-text input-kentän sana lähetetään backendille
      fetch(`http://localhost:3000/words/search/${word}`)
        .then((response) => response.json())
        .then((data) => {
          // Jos backend palauttaa viestin, niin se näytetään alert-ikkunassa.
          // Message palautetaan vaan, jos sanaa ei löydy
          if (data.message) {
            alert(data.message);
          } else {
            // Jos sana löytyy, niin se näytetään alert-ikkunassa ja arvo laitetaan eng-text input-lenttään
            document.getElementById("eng-text").value = data[0].eng;
            alert(`Word found: ${data[0].eng}`);
          }
        });
    }
  }
  return (
    // Tähän olisi toiminut paremmin haku, jossa fin-text on required ja eng-text on esimerkiksi <p> elementti tai jotain muuta input-kentän sijaan.
    <div className="search-container">
      <h1>Search</h1>
      <label>Fin</label>
      <input type="text" id="fin-text" />
      <label>Eng</label>
      <input type="text" id="eng-text" disabled />
      <button type="button" onClick={getSearchResults}>
        Search
      </button>
    </div>
  );
}
