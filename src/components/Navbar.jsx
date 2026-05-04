import logo from "../assets/logo_totalhub_vetor_color_Branco.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">

        <div className="navbar-left">
          <div className="logo"><img src={logo} alt="TotalHub" className="logo" /></div>
        </div>

        <div className="navbar-center">
          <a href="#modulos">Módulos</a>
          <a href="#ia">IA</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="navbar-right">
          <button className="nav-cta">Demo</button>
        </div>

      </div>
    </div>
  );
}