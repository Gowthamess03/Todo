import React from "react";
import "./ListItems.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <RiCloseCircleLine
            className="Delete"
            onClick={() => props.deleteItem(item.key)}
          />
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}
export default ListItems;
