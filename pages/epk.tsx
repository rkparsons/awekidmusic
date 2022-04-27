import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Awe Kid</title>
        <meta
          name="description"
          content="Awe Kid is a Berlin based producer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bio</h1>
        <h1 className={styles.title}>Bandcamp</h1>
        <h1 className={styles.title}>Photos</h1>
        <h1 className={styles.title}>Videos</h1>
      </main>
    </div>
  );
};

export default Home;
