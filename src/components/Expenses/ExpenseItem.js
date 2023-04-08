import "./ExpenseItem.css";
import React , {useState} from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  //function clickHandler () {}

  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
// /ashas

export default ExpenseItem;
