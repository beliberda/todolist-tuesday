import NavBar from "@/components/widjets/navBar/navBar";
import Sidebar from "@/components/widjets/sidebar/sidebar";

function MainPage() {
  return (
    <div className="page">
      <NavBar />
      <Sidebar />
      <main>
        <h1>ГЛАВНАЯ СТРАНИЦА</h1>
      </main>
    </div>
  );
}
export default MainPage;

// ctrl + space
