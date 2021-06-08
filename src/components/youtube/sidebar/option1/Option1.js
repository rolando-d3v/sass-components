import React from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import "./option1.scss";

const opPrincipales = [
  { id: 1, name: "Inicio", icon: <BsIcons.BsHouseDoorFill /> },
  { id: 2, name: "Explorar", icon: <MdIcons.MdExplore /> },
  { id: 3, name: "Suscripciones", icon: <BsIcons.BsCollectionPlayFill /> },
];

export default function Option1() {
  return (
    <section className="options-principales1">
      {opPrincipales.map((op) => (
        <Link to="/" className="options-principales1--link" key={op.id}>
          {op.icon}
          <span> {op.name} </span>
        </Link>
      ))}
    </section>
  );
}
