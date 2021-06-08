import React from "react";
import "./sidebar.scss";
import Option1 from "../option1/Option1";
import Option2 from "../option2/Option2";
import Suscriptions from "../suscriptions/Suscriptions";


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Option1/>
      <Option2/>
      <Suscriptions/>
      
    </aside>
  );
}
