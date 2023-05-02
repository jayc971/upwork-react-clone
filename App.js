import "./styles/index.scss";
import Header from "./components/header/header";
import Sections from "./components/sections";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Sections/>
      <Footer/>
      <script src="./js/script.js"></script>
    </div>
  );
}

export default App;
