import React from "react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
  <footer className="footer footer-center p-4 bg-base-300 text-base-content">
    <aside>
      <p>Copyright © {currentYear} - All right reserved by Adonan17</p>
    </aside>
  </footer>
  );
}
