export default function Footer() {
  return (
    <footer className="footer">
      <h3>TotalHub</h3>

      <p>
        Plataforma modular de comunicação, automação e integração.
      </p>

      <p style={{ marginTop: "20px", fontSize: "14px" }}>
        © {new Date().getFullYear()} TotalHub. Todos os direitos reservados.
      </p>
    </footer>
  );
}