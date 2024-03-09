import Header from "../widget/Header/Header.tsx";
import { MainContent } from "../widget/MainContent/MainContent.tsx";
import { Footer } from "../widget/Footer/Footer.tsx";
import cls from './MainPage.module.css'
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

      {/*<Footer></Footer>*/}
    </section>
  );
};

export default MainPage;
