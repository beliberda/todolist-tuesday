import { ButtonIcon } from "@/components/shared/ui/buttons/buttons";
import style from "./style.module.css";
import plusIcon from "../../../assets/icons/plus.svg";
import SidebarList from "@/components/shared/ui/sidebarList/sidebarList";

const list2 = ["Задание 1", "Задание 2", "Купить хлебуушке"];

const Sidebar = () => {
  // function SaySomething(text) {
  //   alert(text);
  // }
  // SaySomething("ПРИВЕТ МИР");
  // SaySomething("Другой мир");
  return (
    <aside className={style.sidebar}>
      <div className={style.top}>
        <h2>Projects</h2>
        <ButtonIcon icon={plusIcon} />
      </div>
      <SidebarList title="Проекты" list={["Проект1", "Проект 2", "Проект3"]} />
      <SidebarList title="Задания" list={list2} />
    </aside>
  );
};

export default Sidebar;

// TODO 09.01.2025 Добавить в сайдбар еще один компонент SidebarList
// TODO В SidebarList с помощью передачи параметров, передать заголовок и использовать вместо текст "Заголовок списка"

// TODO 16.01.2025 Передать в компонент SidebarList список, который должен отрисовываться. Поменять внутри SidebarList  myList на параметр list
