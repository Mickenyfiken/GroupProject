const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "16px", background: "#333" }}>
      <a href="/" style={{ color: "white", textDecoration: "none" }}>Hem</a>
      <a href="/nyheter" style={{ color: "white", textDecoration: "none" }}>Nyheter</a>
      <a href="/om-oss" style={{ color: "white", textDecoration: "none" }}>Om oss</a>
    </nav>
  );
};

export default Navbar;