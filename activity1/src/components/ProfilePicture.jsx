import '../styles/ProfilePicture.css'
import profilepic from '../assets/profilepic.jpg'

export default function ProfilePicture() {
    return (
       <div className="image">
         <img src={profilepic} alt="" />
       </div>
    );
}