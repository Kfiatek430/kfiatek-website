import Navbar from "./components/Navbar/Navbar";
import MailLink from "./components/Portfolio/Asides/MailLink";
import SocialMediaLinks from "./components/Portfolio/Asides/SocialMediaLinks";
import Introduction from "./components/Portfolio/Introduction/Introduction";

export default function Home() {
  return (
    <div>
      <SocialMediaLinks />
      <MailLink />
      
      <div className="h-[100vh] flex flex-col justify-stretch">
        <Navbar />
        <Introduction />
      </div>
    </div>
  );
}
