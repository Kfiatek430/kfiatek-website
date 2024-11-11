import Navbar from "./components/Navbar/Navbar";
import MailLink from "./components/Portfolio/Asides/MailLink";
import SocialMediaLinks from "./components/Portfolio/Asides/SocialMediaLinks";
import Introduction from "./components/Portfolio/Introduction/Introduction";
import JobHistory from "./components/Portfolio/JobHistory/JobHistory";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <SocialMediaLinks />
      <MailLink />
      
      <div className="h-[100vh] w-full flex flex-col justify-stretch items-center">
        <Navbar />
        <Introduction />
      </div>

      <div className="flex flex-col justify-stretch items-center">
        <JobHistory />
      </div>
    </div>
  );
}
