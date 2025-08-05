import '../styles/Button.css'

export default function Button() {
    return (
       <div className="Follow">
          <h2>REACH ME OUT</h2>
          <a href="https://www.facebook.com/jc.aviso.9/" target="blank">
             <button>Facebook</button>
          </a>
          <a href="https://www.instagram.com/jcarl_012/" target="blank">
             <button>Instagram</button>
          </a>
          <a href="https://discord.com/users/761688402881151036" target='blank'> 
             <button>Discord</button>
          </a>
       </div>
    );
}