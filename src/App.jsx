import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App;
