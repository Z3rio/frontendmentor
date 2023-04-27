import Head from 'next/head'
import { League_Spartan } from 'next/font/google'
import styles from '@styles/Home.module.css'
import { useState } from 'react'
import { themeNames } from '@/utils/data'

import Top from '@components/Top'
import NumberInput from '@components/NumberInput'

const leagueSpartan = League_Spartan({ weight: "700", subsets: ["latin"] })

const nf = new Intl.NumberFormat();

export default function Home() {
  const [number, setNumber] = useState<string>("");
  const [cachedNumber, setCachedNumber] = useState<string>("");
  const [method, setMethod] = useState<undefined | "+" | "-" | "/" | "x">(undefined);
  const [theme, setTheme] = useState<number>(0);

  return (
    <>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${leagueSpartan.className} ${styles.main} ${styles[themeNames[theme]]}`}>
        <div className={styles.inner}>
          <Top theme={theme} setTheme={setTheme} />

          <div className={styles.numberHolder}>
            <span className={styles.numberText}>{number !== "" ? number : "0"}</span>
          </div>

          <NumberInput 
            number={number} 
            setNumber={setNumber} 
            cachedNumber={cachedNumber} 
            setCachedNumber={setCachedNumber}
            method={method}
            setMethod={setMethod}
            theme={theme}
          />
        </div>
      </main>
    </>
  )
}
