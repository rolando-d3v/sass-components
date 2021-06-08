import React from "react";
import "./subHeader.scss";

const listSubHeader = [
  { id: 1, name: "menu" },
  { id: 2, name: "anime" },
  { id: 3, name: "javascript" },
  { id: 4, name: "typescrypt" },
  { id: 5, name: "mysql" },
  { id: 6, name: "mongodb" },
  { id: 7, name: "vetererano" },
  { id: 8, name: "nodejs" },
  { id: 9, name: "apple" },
  { id: 10, name: "androi" },
  { id: 11, name: "huawei" },
  { id: 12, name: "samsung" },
  { id: 13, name: "logitech" },
  { id: 14, name: "logitech" },
  { id: 15, name: "acer" },
];

export default function SubHeader() {
  return (
    <section className="sub-header">
       {listSubHeader.map((list) => (
          <div key={list.id}> {list.name} </div>
        ))}
    </section>
  );
}
