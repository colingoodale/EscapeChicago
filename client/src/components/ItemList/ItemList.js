import React from "react";
import "./List.css";

const ItemList = props => (
  <div className="well" >
    <ul>
      {props.children}
    </ul>
  </div>
);



export default ItemList;