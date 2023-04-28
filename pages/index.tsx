import Head from 'next/head'
import styles from '@styles/Home.module.css'

import PreviewCard from '@components/PreviewCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Product preview card</title>
        <meta name="description" content="Product preview card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <PreviewCard category="perfume" header="Gabrielle Essence Eau De Parfum" description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL." price={169.99} discountedPrice={149.99} />
      </main>
    </>
  )
}
