import React, { useState } from "react";
import "./App.css";
import Slot from "./Slot";

function App() {
  return (
    <div className="App">
      <h2>Slot Booking App</h2>

      <form>
        <div>
          <label for="reason">Reason: </label>
          <input
            id="reason"
            type="text"
            placeholder="Product Discussion"
            name="reason"
            required
          />
        </div>
        <div>
          <label for="date">Date: </label>
          <input id="date" type="date" name="date" required />
        </div>
        <div>
          <label for="startTime">From: </label>
          <input id="startTime" type="time" name="startTime" required />
        </div>
        <div>
          <label for="endTime">To: </label>
          <input id="endTime" type="time" name="endTime" required />
        </div>
        <button type="submit">Book the slot</button>
      </form>

      <hr />

      <h2>List of Booked Slots</h2>

      <Slot />
    </div>
  );
}

export default App;
