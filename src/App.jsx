import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";
import ComoFunciona from "./components/ComoFunciona";
import Resultados from "./components/Resultados";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ecosystem />
      <ComoFunciona />  {/* 👈 AQUI */}
      <Resultados />
    </>
  );
}

export default App;