import Navbar from "./components/Navbar/Navbar";
import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col justify-stretch">
      <Navbar />
      <div className="h-full flex justify-center items-center main">
        <div className={`fixed left-10 bottom-0 hidden md:block`}>
          <div className={`flex flex-col justify-center items-center gap-5 ${styles.after}`}>
            <ul className="flex flex-col justify-center items-center gap-3">
              <li className="relative min-h-6 min-w-6">
                <a href="#" className={`relative ${styles.link}`}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="relative min-h-6 min-w-6">
                <a href="#" className={`relative ${styles.link}`}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-4/5 flex justify-center">
          <div className="flex flex-col justify-center items-start gap-4 w-fit">
            <p className="text-xl md:text-2xl tracking-[0.1rem] text-[var(--green)]">Hello, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold">Michał Kwiatkowski</h1>
            <p className="text-xl md:text-2xl max-w-[30rem] text-[var(--gray)]">I am a beginner programmer and a student at the Zespół Szkół Łączności in Kraków, with a strong passion for building robust backend solutions. My main focus is on backend development, but I also enjoy exploring frontend challenges from time to time, as you can see on this site. I'm constantly expanding my skills and learning new technologies to improve my craft.</p>
          </div>
        </div>

        <div className={`fixed right-10 bottom-0 hidden md:block`}>
          <div className={`flex flex-col justify-center items-center gap-5 ${styles.after} relative`}>
            <a className={`tracking-[0.3rem] relative ${styles.link}`} href="mailto:michal.kwiatkowski.430@gmail.com" style={{writingMode: 'vertical-rl', fontFamily: 'Geist Mono'}}>michal.kwiatkowski.430@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
