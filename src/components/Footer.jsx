export default function Footer() {
  return (
    <footer className="footer">
      <h3>TotalHub</h3>

      <p>
        Plataforma modular de comunicação, automação e integração.
      </p>

      <div style={{ marginTop: "20px" }}>
        <a href="#">TotalDocs</a> |{" "}
        <a href="#">TotalSign</a> |{" "}
        <a href="#">TotalBot</a> |{" "}
        <a href="#">TotalSync</a>
      </div>

      <p style={{ marginTop: "20px", fontSize: "14px" }}>
        © {new Date().getFullYear()} TotalHub. Todos os direitos reservados.
      </p>
    </footer>
  );
}