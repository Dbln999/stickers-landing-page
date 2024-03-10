import Header from "../widget/Header/Header.tsx";
import { MainContent } from "../widget/MainContent/MainContent.tsx";
import cls from './MainPage.module.css'
import WhyUs from "../widget/WhyUs/WhyUs.tsx";
import Elevate from "../components/Elevate/Elevate.tsx";
import HowToGetSticker from "../widget/HowToGetSticker/HowToGetSticker.tsx";
import {useRef} from "react";
import Contact from "../widget/Contact/Contact.tsx";
const MainPage = () => {
  const whyRef = useRef<HTMLHeadingElement | null>(null)
  const contactRef = useRef<HTMLHeadingElement | null>(null)
  const executeWhyScroll = () => {
    whyRef.current!.scrollIntoView({behavior:"smooth", block:'center'})
  };

  const executeContactScroll = () => {
    contactRef.current!.scrollIntoView({behavior:"smooth"})
  };

  return (
    <section
      className={cls.MainPage}
    >
      <div className={cls.bgBlack}>
      </div>
      <div className={cls.bgPurple}>
      </div>
      <Header executeContactScroll={executeContactScroll} executeScroll={executeWhyScroll}></Header>
      <MainContent></MainContent>
      <WhyUs ref={whyRef}></WhyUs>
      <Elevate></Elevate>
      <HowToGetSticker />
      <Contact ref={contactRef}></Contact>
      {/*<Footer></Footer>*/}
    </section>
  );
};

export default MainPage;
