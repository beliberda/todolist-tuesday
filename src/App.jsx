import MainPage from "@/components/pages/Main/main";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "@/components/pages/Profile/profile";
import NotFound from "@/components/pages/NotFound";
import Login from "@/components/pages/Login/Login";
import {
  Box,
  Component,
  Divided,
  Minus,
  Sum,
  Sum2,
  Text,
  Title,
} from "@/components/FUNCTIONS";

function App() {
  return (
    <>
      <Sum a={10} b={2} />
      <Sum2 a={10} b={5} />
      <Minus a={1000} b={7} />
      <Divided a={10} b={3} />
      <Title title={"ЭТО МОЙ КОМОПЕНТ - TITLE"} />
      <Text text={"Просто какой то текст"} />

      <Box>
        <h1>Это коробка</h1>
        <p>
          Далеко-далеко за словесными горами в стране гласных и согласных живут
          рыбные тексты. Семантика страна дорогу о дороге путь своего проектах
          правилами там.
        </p>
        <button>Это кнопка</button>
        {/* TODO Добавить input, ему атрибут placeholder */}
      </Box>
      {/* Пустой бокс */}
      <Box></Box>
      {/* <Component a={10} b={20} /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;

// http://localhost:5173/
// http://localhost:5173/profile

// MainPage, ProfilePage, CalendarPage, StatisticsPage,  UploadsPage, MapPage, SettingsPage
// TODO Добавить остальные страницы StatisticsPage,  UploadsPage, MapPage, SettingsPage. Добавить им Route с соответствующими путями и сделать так, чтобы по ним можно было переходить
