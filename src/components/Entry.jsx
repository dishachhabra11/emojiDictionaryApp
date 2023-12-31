import React from "react";

function Entry(props) {
  return (
    <div className="dictionary">
      <div className="term ">
        <dt>
          <span className="emoji" role="img">
            {props.emoji}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>{props.meaning}</dd>
      </div>
    </div>
  );
}
export default Entry;
