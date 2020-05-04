import React, { useState } from "react";

function Link(props) {
    return <a href="#" class={props.class} onClick={props.onClick}>{props.name}</a>
}

export default Link;
