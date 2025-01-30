import { useState } from "react";
import style from "./style.module.css";

// const myList = ["Личный кабинет", "Видеохостинг", "Сайт"];

const SidebarList = ({ title, list }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.top}>
        <h3 onClick={handleOpen}>{title}</h3>
      </div>

      {isOpen === true ? (
        <ul className={style.list}>
          {list.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SidebarList;
