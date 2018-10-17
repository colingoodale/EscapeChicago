import React from "react";
import "./List.css";
import Tooltips from "../Tooltip"

const ListItem = props => (
    <div>
        <li><img className="itemImg" alt={props.name} src={props.img} /></li>
        <Tooltips name={props.name} id={props.id} img={props.img} desc={props.desc} />
    </div>
);

export default ListItem;