import React from "react";

const Card = (props) => {
  let { id, icon, tittle, phrase } = props;
  return (
    <figure
      style={{
        width: "230px",
        height: "280px",
        margin: ".5rem",
        padding: ".6rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}
      key={id}
    >
      <i className={icon} style={{ fontSize: "2em" }}></i>
      <figcaption>
        <h3 className="my-3">{tittle}</h3>
        <p className="pt-3">{phrase}</p>
      </figcaption>
    </figure>
  );
};

export default Card;
