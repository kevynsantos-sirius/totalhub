import logo from "../assets/logo_totalhub_vetor_color_Branco.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="TotalHub" className="logo" />
        <div>
          <a href="#ecosystem">Ecossistema</a>
          <a href="#como">Como funciona</a>
          <a href="#resultados">Resultados</a>
        </div>
      </div>
    </div>
  );
}