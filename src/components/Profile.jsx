import ProfilePicture from "./ProfilePicture";
import Skills from "./Skills";
import "../styles/Profile.css";
import AboutMe from "./AboutMe";
import Button from "./Button";

export default function Profile() {
   return (
      <>
         <main className="ProfileFormat">
            <div className="Profile">
               <ProfilePicture />
               <Skills />
               <AboutMe />
               <Button />
            </div>
         </main>
      </>
   );
}
