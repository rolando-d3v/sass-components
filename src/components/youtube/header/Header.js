import React from "react";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io5";
import "./header.scss";

export default function Header() {
  return (
    <header className="header-youtube">
     <nav className="nav-logo">
        <HiIcons.HiOutlineMenu className="nav-logo__barra" />
        <img
          className="nav-logo__youtube"
          src="/assets/youtube.png"
          alt="youtube"
        />
        <span className="nav-logo__pe">PE</span>
      </nav>

      <nav className="nav-search">
        <div className="nav-search__content">
          <input
            className="nav-search__content--input"
            type="text"
            placeholder="Buscar"
          />
          <span className="nav-search__content--span">
            <HiIcons.HiOutlineSearch />
          </span>
        </div>
        <MdIcons.MdMic className="nav-search__micro" />
      </nav>

      <nav className="nav-icons">
        <div className="nav-icons__content">
          <RiIcons.RiVideoAddFill className="nav-icons__content--video" />
          <RiIcons.RiGridFill className="nav-icons__content--icons" />

          <div className="nav-icons__content--campana">
            <IoIcons.IoNotificationsSharp />
            <span className="numero">4</span>
          </div>
        </div>

        <img
          className="nav-icons__avatar"
          src="/assets/avatar2.jpg"
          alt="avatar"
        />
      </nav>
    </header>
  );
}
