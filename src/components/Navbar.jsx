export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <strong>TotalHub</strong>

        <div className="nav-links">
          <a href="#modules">Módulos</a>
          <a href="#intelligence">IA</a>
          <a href="#benefits">Benefícios</a>
          <a href="#">Contato</a>

          <button className="cta-button-primary">
            Demo
          </button>
        </div>
      </div>
    </div>
  );
}