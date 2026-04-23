import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";
import ComoFunciona from "./components/ComoFunciona";
import Results from "./components/Results";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ecosystem />
      <ComoFunciona />  {/* 👈 AQUI */}
      <Results />
    </>
  );
}

export default App;