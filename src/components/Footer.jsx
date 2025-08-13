import "../styles/Footer.css";
import logo from "../assets/logo.jpg";

export default function Footer() {
   return (
      <footer className="footer">
         <img src={logo} />
         <p>© 2025 John Carl Aviso. All rights reserved.</p>
      </footer>
   );
}
