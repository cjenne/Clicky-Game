//BalloonCard component
import React from "react";

const imageStyle = {
  width: '160px',
  height: '160px'
};

const BalloonCard = props => (
  <div className="col-3" onClick={props.imageClick}>
      <img className="img-fluid img-thumbnail" style={imageStyle} alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
  </div>
);



// const BalloonCard = props => <div className="container rounded bg-primary my-3 p-2 flex-container">{props.children}</div>;

export default BalloonCard;