import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="row image_adjust">
    <div className="col-md-4">
      <div className="img-container" onClick={() => props.imageClick(props.id)}>      
        <img className="img" alt={props.id} src={props.image} />           
      </div>      
    </div>
    </div>
  );
}

export default FriendCard;
