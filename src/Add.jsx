// Ilmeisesti React 17 ei vaadi enää import lausetta alkuun, mutta jätin sen kuitenkin toimivuuden kannalta.
import React from "react";

export default function Add() {
  function addWords() {
    // Otetaan input-kenttien arvot talteen
    const fin = document.getElementById("fin-text").value.toLowerCase();
    const eng = document.getElementById("eng-text").value.toLowerCase();

    // Tarkistetaan, onko kenttiin syötetty jotain
    if (fin === "" || eng === "") {
      // Jos kenttiin ei ole syötetty mitään, näytetään alert-ikkuna
      alert("Please enter a word pair to add");
      return;
    }

    // Lähetetään POST-pyyntö palvelimelle
    fetch(`http://localhost:3000/words/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Lähetetään lisättävät sanat JSON-muodossa
      body: JSON.stringify({ fin: fin, eng: eng }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Jos palvelin palauttaa viestin, näytetään se alert
        // Palvelin palauttaa messagen jos sana on jo olemassa, ei ole muita virheilmoituksia
        if (data.message) {
          alert(data.message);
        } else {
          // Näytetään alert-ikkunassa lisätty sanapari
          alert(`Word pair added: ${fin} - ${eng}`);
          // Tyhjennetään input-kentät
          document.getElementById("fin-text").value = "";
          document.getElementById("eng-text").value = "";
        }
      });
  }

  return (
    <div className="add-container">
      <h1>Add</h1>
      <label>Fin</label>
      <input id="fin-text" type="text" />
      <label>Eng</label>
      <input id="eng-text" type="text" />
      <button type="button" onClick={addWords}>
        Add pair
      </button>
    </div>
  );
}
