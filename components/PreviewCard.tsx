import { Montserrat, Fraunces } from 'next/font/google'
import styles from '@styles/PreviewCard.module.css'
import Image from 'next/image';

interface Props {
    category: string;
    header: string;
    description: string;
    price: number;
    discountedPrice: number;
}

const montserrat = Montserrat({
    weight: "500",
    subsets: ["latin"]
})

const montserrat2 = Montserrat({
    weight: "700",
    subsets: ["latin"]
})

const fraunces = Fraunces({
    weight: "700",
    subsets: ["latin"]
})

export default function PreviewCard({category, header, description, price, discountedPrice}: Props) {
    return <div className={styles.main}>
        <div className={styles.image}></div>

        <div className={styles.info}>
            <p className={`${styles.category} ${montserrat.className}`}>{category}</p>
            <h1 className={`${styles.header} ${fraunces.className}`}>{header}</h1>
            <p className={`${styles.description} ${montserrat.className}`}>{description}</p>

            <div className={styles.pricing}>
                <h2 className={`${styles.discountedPrice} ${fraunces.className}`}>${discountedPrice}</h2>
                <h3 className={`${styles.price} ${fraunces.className}`}>${price}</h3>
            </div>

            <button className={`${styles.cartButton} ${montserrat2.className}`}><Image src="/icon-cart.svg" alt="Shopping cart image" width={14.39} height={16} className={styles.btnImage} />Add to cart</button>
        </div>
    </div>
}