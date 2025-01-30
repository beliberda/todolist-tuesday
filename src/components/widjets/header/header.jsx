import { ButtonIcon } from "@/components/shared/ui/buttons/buttons";
import search from "@assets/icons/search.svg";
import calendar from "@assets/icons/calendar.svg";

import style from "./style.module.css";

const Header = () => {
  let isLoad = true;

  let myStyle = {
    color: "black",
    backgroundColor: isLoad === true ? "green" : "red",
    fontSize: "24px",
  };
  console.log("СТИЛИ ", style);

  return (
    <header>
      <h1 className={style.title}>Добро пожаловать, UserName</h1>
      <ButtonIcon icon={search} />
      <ButtonIcon icon={calendar} />
      <ButtonIcon icon={search} />
      <ButtonIcon icon={search} />
    </header>
  );
};

export default Header;

// ЭТО Я
