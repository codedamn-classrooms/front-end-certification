import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Slot Booking App</h2>

      <form>
        <input type="date"></input>
        <div>
          <label for="time-from">From : </label>
          <input id="time-from" type="time"></input>
        </div>
        <div>
          <label for="time-to">To : </label>
          <input id="time-to" type="time"></input>
        </div>
        <button>Book the slot</button>
      </form>

      <hr />

      <h2>List of Booked Slots</h2>
    </div>
  );
}

export default App;
