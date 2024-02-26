import cls from "./AboutPage.module.css";
import Header from "../../widget/Header/Header.tsx";
import { Card } from "../../components/Card/Card.tsx";
import imgSkeleton from "../../assets/skeleton_circle.svg";
import { Footer } from "../../widget/Footer/Footer.tsx";
const AboutPage = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={cls.AboutPage}
    >
      <Header></Header>
      <h1 className={cls.about}>About</h1>
      <section className={cls.cardWrapper}>
        <Card
          src={imgSkeleton}
          title="QUALITY"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor est et erat dapibus ornare id id erat. Ut blandit justo elit, nec finibus quam semper vel. Nullam sed eros feugiat, molestie elit in, feugiat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit libero, accumsan quis leo a, tincidunt vulputate magna."
        ></Card>
        <Card
          src={imgSkeleton}
          title="SERVICE"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor est et erat dapibus ornare id id erat. Ut blandit justo elit, nec finibus quam semper vel. Nullam sed eros feugiat, molestie elit in, feugiat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit libero, accumsan quis leo a, tincidunt vulputate magna."
        ></Card>
        <Card
          src={imgSkeleton}
          title="DELIVERY"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor est et erat dapibus ornare id id erat. Ut blandit justo elit, nec finibus quam semper vel. Nullam sed eros feugiat, molestie elit in, feugiat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit libero, accumsan quis leo a, tincidunt vulputate magna."
        ></Card>
        <Card
          src={imgSkeleton}
          title="COMPANY"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor est et erat dapibus ornare id id erat. Ut blandit justo elit, nec finibus quam semper vel. Nullam sed eros feugiat, molestie elit in, feugiat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit libero, accumsan quis leo a, tincidunt vulputate magna."
        ></Card>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default AboutPage;
