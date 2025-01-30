import style from "./style.module.css";

const TodoCard = () => {
  return (
    <article className={style["card"]}>
      <header className={style["top"]}>
        <div className={style["top-title"]}>
          <h1>Название todo</h1>
          <h2>проект тудушки</h2>
        </div>
        <button>...</button>
      </header>
      <main className={style["main"]}>
        <div className={style["main-top"]}>
          <div className={style["main-title"]}>
            <img src="" alt="" />
            <p>Progress</p>
          </div>
          <p className={style["progress-num"]}>7/10</p>
        </div>
        <div className={style["main-bottom"]}></div>
      </main>
      <footer></footer>
    </article>
  );
};

export default TodoCard;
