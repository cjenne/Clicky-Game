//BalloonCard component
import React from "react";



const BalloonCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

// const BalloonCard = props => <div className="container rounded bg-primary my-3 p-2 flex-container">{props.children}</div>;

export default BalloonCard;