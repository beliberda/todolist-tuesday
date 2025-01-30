import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>УУУПС!! ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ</h1>
      <Link to="/">Вернуться на гланую</Link>
    </div>
  );
}

export default NotFound;
