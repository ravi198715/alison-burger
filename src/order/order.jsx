import React from 'react';
import './order.css';

const order = (props) =>{
  return (
    <div className="Person" onClick={props.click}>
      <p>I want {props.quantity} {props.size} {props.food}. </p>
    <span>{props.children}</span>
    <input type="text" onChange={props.changed} />
    </div>
  );
  //and i cost {Math.floor(Math.random()*20)} AUD
}

export default order;
