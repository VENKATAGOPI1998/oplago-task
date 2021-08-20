import React from "react";
import "./App.css";
import Cart from "./Cart";

function App() {
  return (
    <div className="app">
      <div className="header">
        <p>LIVE</p>
        <h3>Upcoming Live Coaching</h3>
      </div>
      <div className="card">
        <Cart
          src="ibps.jpg"
          daysleft="5 days left to enroll"
          cardheader="IBPS PO & SBI PO Live Coaching in English Batc.."
          classes="340+ Live Classes"
          questions="9000+ Questions"
          hours="120+ hours"
        ></Cart>
        <Cart
          src="civil.jpg"
          daysleft="5 days left to enroll"
          cardheader="IBPS PO & SBI PO Live Coaching in English Batc.."
          classes="340+ Live Classes"
          questions="9000+ Questions"
          hours="120+ hours"
        ></Cart>
        <Cart
          src="upsc.jpg"
          daysleft="5 days left to enroll"
          cardheader="IBPS PO & SBI PO Live Coaching in English Batc.."
          classes="340+ Live Classes"
          questions="9000+ Questions"
          hours="120+ hours"
        ></Cart>
      </div>
    </div>
  );
}

export default App;
