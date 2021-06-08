import React from "react";
import { Link } from "react-router-dom";
import * as HiIcons from "react-icons/hi";
import "./suscriptions.scss";

const opPrincipales = [
  {
    id: 1,
    avatar: "assets/logo-canal.jpg",
    name: "Infotv 2021",
    icon: <HiIcons.HiOutlineStatusOnline className="red" />,
  },
  {
    id: 2,
    avatar: "assets/avatar2.jpg",
    name: "Upc",
    icon: <HiIcons.HiOutlineStatusOnline className="red" />,
  },
  {
    id: 3,
    avatar: "assets/logo-canal.jpg",
    name: "Fernando herrera",
    icon: <HiIcons.HiOutlineStatusOnline />,
  },
  {
    id: 4,
    avatar: "assets/logo-canal.jpg",
    name: "Fazt",
    icon: <HiIcons.HiOutlineStatusOnline />,
  },
  {
    id: 5,
    avatar: "assets/logo-canal.jpg",
    name: "Tekken tag 2021",
    icon: <HiIcons.HiOutlineStatusOnline />,
  },
  {
    id: 6,
    avatar: "assets/avatar2.jpg",
    name: "Tekken tag 2021",
    icon: <HiIcons.HiOutlineStatusOnline />,
  },
  {
    id: 7,
    avatar: "assets/logo-canal.jpg",
    name: "Tekken tag 2021",
    icon: <HiIcons.HiOutlineStatusOnline />,
  },
];

export default function Suscriptions() {
  return (
    <section className="suscriptions">
      <h3 className="suscriptions__title">SUSCRIPCIONES</h3>
      {opPrincipales.map((op) => (
        <Link to='/' className="suscriptions__link"  key={op.id} >
          <img
            className="suscriptions__link--avatar"
            src={op.avatar}
            alt="channel"
          />
          <span >{op.name}</span>
          {op.icon}
        </Link>
      ))}
      <button className="suscriptions__button">
        <HiIcons.HiOutlineChevronDown />
        <span>Mostrar 229 màs</span>
      </button>
    </section>
  );
}
