import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
      <Link to="/products" style={{ marginRight: "1rem" }}>Products</Link>
      <Link to="/projects" style={{ marginRight: "1rem" }}>Projects</Link>
      <Link to="/news" style={{ marginRight: "1rem" }}>News</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}