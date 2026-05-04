import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";
import ComoFunciona from "./components/ComoFunciona";
import Resultados from "./components/Resultados";
import Footer from "./components/Footer";

import QuemSomos from "./components/QuemSomos";
import OQueFazemos from "./components/OQueFazemos";
import Jornadas from "./components/Jornadas";
import ParaQuem from "./components/ParaQuem";
import CTAFinal from "./components/CTAFinal";


function LandingPage() {
return (
    <>
      <Navbar />
      <Hero />

      <QuemSomos />
      <OQueFazemos />

      <Ecosystem />
      <ComoFunciona />
      <Jornadas />

      <ParaQuem />

      <Resultados />
      <CTAFinal />

      <Footer />
    </>
  );

}