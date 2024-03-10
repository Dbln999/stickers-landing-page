import Header from "../widget/Header/Header.tsx";
import { MainContent } from "../widget/MainContent/MainContent.tsx";
import cls from './MainPage.module.css'
import WhyUs from "../widget/WhyUs/WhyUs.tsx";
const MainPage = () => {
  return (
    <section
      className={cls.MainPage}
    >
      <div className={cls.bgBlack}>
      </div>
      <div className={cls.bgPurple}>
      </div>
      <Header></Header>
      <MainContent></MainContent>
      <WhyUs></WhyUs>
      {/*<Footer></Footer>*/}
    </section>
  );
};

export default MainPage;
