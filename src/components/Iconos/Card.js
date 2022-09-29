import React from "react";

const Card = (props) => {
  let { id, icon, tittle, phrase } = props;
  return (
    <figure
      style={{
        width: "230px",
        height: "280px",
        margin: "1rem",
        padding: ".6rem",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
      }}
      key={id}
    >
      <i className={icon} style={{ fontSize: "2em" }}></i>
      <figcaption>
        <h3 className="my-3">{tittle}</h3>
        <p className="">{phrase}</p>
      </figcaption>
    </figure>
  );
};

export default Card;
