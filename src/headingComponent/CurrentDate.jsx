import React from "react";

var today = new Date();
var currentDate =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

function CurrentDate() {
  return <div className="currentDate" ><span class="vertical-align-end">{currentDate}</span></div>;
}

export default CurrentDate;
