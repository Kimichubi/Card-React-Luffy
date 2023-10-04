import Profile from "./mainContent/Profile";
import ImgProfile from "./assets/luffy.jpeg";

export default function App() {
  return (
    <div>
      <Profile
        avatar={ImgProfile}
        name="Luffy"
        bio="Capitão dos Piratas do Chapéu de Palha!"
        phone="+4002-8922"
        email="luffy@gmail.com"
        githubUrl="https://github.com/Kimichubi"
        linkedinUrl="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
        twitterUrl="https://www.instagram.com/biel.lazaretti/"
      />
    </div>
  );
}
