import IconMain from "@/assets/icons/navBar/IconMain";
import IconProfile from "@/assets/icons/navBar/iconProfile";
import { NavLink } from "react-router-dom";

import style from "./navbar.module.css";
import IconCalendar from "@/assets/icons/navBar/iconCalendar";
import IconMap from "@/assets/icons/navBar/iconMap";
import IconSettings from "@/assets/icons/navBar/iconSettings";
import IconStatistics from "@/assets/icons/navBar/iconStatistics";
import IconUploads from "@/assets/icons/navBar/iconUploads";

const navigation = [
  {
    path: "/",
    icon: <IconMain />,
  },
  {
    path: "/profile",
    icon: <IconProfile />,
  },
  {
    path: "/calendar",
    icon: <IconCalendar />,
  },
  {
    path: "/map",
    icon: <IconMap />,
  },
  {
    path: "/settings",
    icon: <IconSettings />,
  },
  {
    path: "/statistics",
    icon: <IconStatistics />,
  },
  {
    path: "/uploads",
    icon: <IconUploads />,
  },
];

function NavBar() {
  return (
    <aside className={style.navbar}>
      <nav className={style.nav}>
        {navigation.map((nav) => {
          return <NavLink to={nav.path}>{nav.icon}</NavLink>;
        })}
      </nav>
    </aside>
  );
}

export default NavBar;

// TODO Добавить остальные страницы StatisticsPage,  UploadsPage, MapPage, SettingsPage. Добавить им Route с соответствующими путями и сделать так, чтобы по ним можно было переходить
