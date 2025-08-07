import "../styles/Button.css";
import fb from "../assets/fb.png";
import instagram from "../assets/instagram.jpg";
import dc from "../assets/dc.jpg";

export default function Button() {
   return (
      <div className="Follow">
         <h2>REACH ME OUT</h2>
         <a href="https://www.facebook.com/jc.aviso.9/" target="blank">
            <img src={fb} alt="" className="logo" />
            <button>Facebook</button>
         </a>
         <a href="https://www.instagram.com/jcarl_012/" target="blank">
            <img src={instagram} alt="" className="logo" />{" "}
            <button>Instagram</button>
         </a>
         <a href="https://discord.com/users/761688402881151036" target="blank">
            <img src={dc} alt="" className="logo" />
            <button>Discord</button>
         </a>
      </div>
   );
}
