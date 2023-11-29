import Head from "next/head";
import type { NextPage } from "next";
import styles from "../styles/links.module.css";
import { useState } from "react";

type Release = {
  title: string;
  artworkSrc: string;
  spotifyUrl: string;
  bandcampUrl: string;
};

const Links: NextPage = () => {
  const [activeRelease, setActiveRelease] = useState();

  const releases: Release[] = [
    {
      title: "Eve (Max Cooper Remix)",
      artworkSrc: "/max_cooper_remix_artwork.jpg",
      spotifyUrl:
        "https://open.spotify.com/album/2ktnAtbWzwucseAGr2YN9J?si=qSyxmfnCR82tsA1pmEHYpQ",
      bandcampUrl: "https://awekid.bandcamp.com/track/eve-max-cooper-remix",
    },
    {
      title: "Body Logic",
      artworkSrc: "/body_logic_artwork.jpg",
      spotifyUrl:
        "https://open.spotify.com/album/0uRkeMUsZIsq0KdGJ0KsFI?si=OYL-v4KRRDWnDbKvT_izbw",
      bandcampUrl: "https://awekid.bandcamp.com/album/body-logic",
    },
    {
      title: "Laika",
      artworkSrc: "/laika_artwork.jpg",
      spotifyUrl:
        "https://open.spotify.com/album/4W1yyNlYdpqETaOGYNQGfV?si=7pEYFu-eQMqRHPmJqdEQuQ",
      bandcampUrl: "https://awekid.bandcamp.com/album/laika",
    },
  ];

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
      <br />
      <img src="/avatar.webp" alt="avatar" className={styles.avatar} />
      <br />
      <a
        href="https://www.instagram.com/awekidmusic"
        target="_blank"
        rel="noreferrer"
      >
        @awekidmusic
      </a>
      <br />
      <div className={styles.releaseLinkList}>
        {releases.map(
          ({ title, artworkSrc, spotifyUrl, bandcampUrl }, index) => (
            <a
              key={index}
              href={spotifyUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.releaseLink}
            >
              <img src={artworkSrc} alt="avatar" />
              {title}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Links;
