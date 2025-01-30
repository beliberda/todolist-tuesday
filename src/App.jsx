import MainPage from "@/components/pages/Main/main";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "@/components/pages/Profile/profile";
import NotFound from "@/components/pages/NotFound";
import Login from "@/components/pages/Login/Login";
import { Sum, Sum2 } from "@/components/FUNCTIONS";

function App() {
  return (
    <>
      <Sum a={1214124123} b={2} />
      <Sum2 a={10000} b={32843920} />
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
