import React from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import './option2.scss'


const opPrincipales = [
  { id: 1, name: "Bibliotecs", icon: <BsIcons.BsHouseDoorFill /> },
  { id: 2, name: "Historial", icon: <MdIcons.MdExplore /> },
  { id: 3, name: "Mis videos", icon: <BsIcons.BsCollectionPlayFill /> },
  { id: 4, name: "Ver mas tarde", icon: <BsIcons.BsStopwatchFill /> },
  { id: 5, name: "Videos que me gustan", icon: <MdIcons.MdThumbUp /> },
];

export default function Option2() {
    return (
        <section className="options-principales2">
        {opPrincipales.map((op) => (
          <Link to='/' className='options-principales2--link' key={op.id}  >
            {op.icon}
            <span >{op.name}</span>
          </Link>
        ))}
      </section>
    )
}
