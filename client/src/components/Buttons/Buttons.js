import React, { component } from 'react';
import "./buttons.css";

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

const Buttons = props => (
    <div className="well" style={wellStyles}>
        <button class="border-button" onClick={() => props.handleLocationChange(props.id)}>
            {props.buttonText}
        </button>
    </div>
);

export default Buttons;