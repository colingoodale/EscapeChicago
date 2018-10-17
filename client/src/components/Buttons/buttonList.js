import React from "react";

const buttonList = props => (
    <div className="well" >
        <ul className="list-inline">
            {props.children}
        </ul>
    </div>
);

export default buttonList;