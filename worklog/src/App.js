import "./App.css";
import "../src/Resources/bootstrap.css";
import Navbar from "./Components/NavBar/Navbar";
import Banner from "./Components/Banner/Banner";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
