import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Awe Kid</title>
        <meta
          name="description"
          content="Awe Kid is a Berlin based producer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <video
        id="backgroundVideo"
        autoPlay
        muted
        loop
        playsInline
        src="/bodylogic.mp4"
      />
    </div>
  );
};

export default Home;
