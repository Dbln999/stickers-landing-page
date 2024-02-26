import Header from "../widget/Header/Header.tsx";
import { MainContent } from "../widget/MainContent/MainContent.tsx";
import { Footer } from "../widget/Footer/Footer.tsx";

const MainPage = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </section>
  );
};

export default MainPage;
