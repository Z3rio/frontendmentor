import Head from 'next/head'
import { League_Spartan } from 'next/font/google'
import styles from '@styles/Home.module.css'
import Top from '@components/Top'

const leagueSpartan = League_Spartan({ weight: "700", subsets: ["latin"] })

export default function Home() {
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
      </main>
    </>
  )
}
