import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";
import HowItWorks from "./components/HowItWorks";
import Results from "./components/Results";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ecosystem />
      <HowItWorks />
      <Results />
      <Footer />
    </>
  );
}