import React from "react";
import "./Cart.css";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";

function Cart(props) {
  return (
    <div className="cart">
      <div className="card__img">
        <img src={props.src} alt=""></img>
      </div>
      <div className="card__title">
        <QueryBuilderIcon></QueryBuilderIcon>
        <p>{props.daysleft}</p>
      </div>
      <div className="card__header">
        <p>{props.cardheader}</p>
      </div>
      <div className="options">
        <div className="option-1">
          <BusinessCenterIcon></BusinessCenterIcon>
          <p>{props.classes}</p>
        </div>
        <div className="option__display">
          <div className="option-2">
            <NotListedLocationIcon></NotListedLocationIcon>
            <p>{props.questions}</p>
          </div>
          <div className="option-3">
            <AudiotrackIcon></AudiotrackIcon>
            <p>{props.hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
