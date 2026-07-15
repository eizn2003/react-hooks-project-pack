import MenuList from "./menu-list";
import { useState } from "react";
import {FaPlus, FaMinus} from "react-icons/fa";
import './styles.css'

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <li className="">
      <div className="flex justify-between items-center my-6 cursor-pointer">
        <p className="text-white font-bold">{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)} className="text-2xl">
            {displayCurrentChildren[item.label] ? <FaMinus className="text-red-500"/> : <FaPlus className="text-green-500"/>}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
