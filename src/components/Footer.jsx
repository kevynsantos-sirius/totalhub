export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <img src="/src/assets/logo_totalhub_vetor_color_Branco.png" alt="TotalHub Logo" className="footer-logo" />
      <div className="footer-rights">
        <p>&copy; 2026 TotalHub. Todos os direitos reservados.</p>
          <div style={{ marginTop: "20px" }}>
            <a href="#">TotalDocs</a> |{" "}
            <a href="#">TotalSign</a> |{" "}
            <a href="#">TotalBot</a> |{" "}
            <a href="#">TotalSync</a>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://www.linkedin.com/company/TotalHub" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/linkedin.png" alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </div>
  </footer>
  );
}