import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="react learning" about="about us" />
      <div className="container my-3">
        {/* <Textform heading="enter your email and password12" /> */}
        <About/>
      </div>
    </>
  );
}

export default App;
