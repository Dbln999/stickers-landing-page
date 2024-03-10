import cls from './WhyUs.module.css'
import {classNames} from "../../lib/classNames.ts";
import {Card, ImageType, TextType} from "../../components/Card/Card.tsx";
import Baltic from '../../assets/Baltic.svg'
import Quality from '../../assets/Quality.svg'
import Price from '../../assets/Price.svg'

const WhyUs = () => {
    return (
        <div className={classNames(cls.WhyUs, {}, [])}>
            <h1 className={cls.title}>Why us?</h1>
            <div className={cls.cards}>
                <Card className={cls.text} textType={TextType.BOLD} src={Baltic as string} title={"Baltics #1"} text={"The first service in the Baltics to produce Your custom stickers from Telegram."} image={ImageType.CLASSIC}></Card>
                <Card className={cls.text} textType={TextType.BOLD} src={Quality as string} title={"High Quality"} text={"We endeavour our best to produce the highest quality products for You."} image={ImageType.CLASSIC}></Card>
                <Card className={cls.text} textType={TextType.BOLD} src={Price as string} title={"Good Prices"} text={"We are always finding ways to make our service cheaper."} image={ImageType.CLASSIC}></Card>
            </div>
        </div>
    );
};

export default WhyUs;