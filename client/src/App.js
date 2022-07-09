import Profile from "./pages/Profile";
import "./App.scss";
import HeaderNav from "./components/HeaderNav";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderNav />
      <Profile />
    </div>
  );
}

export default App;
