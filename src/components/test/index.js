import React from "react";

function Test(props) {
  return (
      <div classname="test">
        <span>{props.professor}</span>
        <span>{props.year}</span>
        <span>{props.quarter}</span>
        <span>{props.type}</span>
      </div>
  );
}

export default Test;