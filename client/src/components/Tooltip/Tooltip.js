import React from "react";
import ReactTooltip from 'react-tooltip'

const Tooltips = (props) => {
    return (
        <div>
            <a data-tip='' data-for={props.id}> {(props.name)} </a>
            <ReactTooltip id={props.id} aria-haspopup='true' role='example' type='light'>
                <ul>
                    <li>{props.desc}</li>
                    <img src={props.img} width={100} height={100} />
                </ul>
            </ReactTooltip>

        </div >
    );
};

export default Tooltips;