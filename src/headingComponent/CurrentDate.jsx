import React from "react";

var today = new Date();
var currentDate =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

function CurrentDate() {
  return <h1 className="currentDate">{currentDate}</h1>;
}

export default CurrentDate;
