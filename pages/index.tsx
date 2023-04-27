import Head from 'next/head'
import { League_Spartan } from 'next/font/google'
import styles from '@styles/Home.module.css'
import Top from '@components/Top'
import { useState } from 'react'

const leagueSpartan = League_Spartan({ weight: "700", subsets: ["latin"] })

const nf = new Intl.NumberFormat();

export default function Home() {
  const [number, setNumber] = useState<number>(0);

  return (
    <>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${leagueSpartan.className} ${styles.inner}`}>
        <Top />

        <div className={styles.numberHolder}>
          <span className={styles.numberText}>{nf.format(number)}</span>
        </div>
      </main>
    </>
  )
}
