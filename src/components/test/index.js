import React from "react";

function Test(props) {
  return (
      <div classname="test">
          <td>{props.professor}</td>
          <td>{props.year}</td>
          <td>{props.quarter}</td>
          <td>{props.type}</td>
      </div>
  );
}

export default Test;