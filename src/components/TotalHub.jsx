import HeroTotalHub from "./HeroTotalHub";
import Overview from "./Overview";
import Modules from "./Modules";
import Intelligence from "./Intelligence";
import Benefits from "./Benefits";
import CTAFinal from "./CTAFinal";
import PainSection from "./PainSection";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function TotalHub() {
  return (
    <>
      <Navbar/>
      <HeroTotalHub />
      <Overview />
      <Modules />
      <Intelligence />
      <Benefits />
      <CTAFinal />
      <Footer/>
    </>
  );
}