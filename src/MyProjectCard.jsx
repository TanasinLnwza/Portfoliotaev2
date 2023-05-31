import React from "react";
import "./Sty.css";

function MyProjectCard(props) {
  const handleClick = () => {
    window.open(props.link, "_blank");
  };

  return (
    <div className="Myproitem" onClick={handleClick}>
      <div>
        <img src={props.img} alt="รูปภาพ" style={{ height: 170 }} />
      </div>
      <div>{props.name}</div>
    </div>
  );
}

export default MyProjectCard;
