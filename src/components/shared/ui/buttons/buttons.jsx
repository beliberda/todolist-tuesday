import style from "./style.module.css";

const ButtonIcon = ({ icon }) => {
  return (
    <button className={style.btnIcon}>
      <img src={icon} alt="" />
    </button>
  );
};

export { ButtonIcon };
