import { FaBandcamp, FaInstagram, FaSpotify } from "react-icons/fa";

import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/epk.module.css";

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
        <div className={styles.section}>
          <h2>Bio</h2>
          <p>
            Awe Kid is an alias of Sine Language Records co-founder Rick
            Parsons. It is the product of years spent exploring a multitude of
            different music. From early days in post-hardcore groups and on to a
            love of 90s Warp, electronic jazz and more experimental niches, the
            multi-instrumentalist has now settled on his own unique fusion of
            breaks, ambient and left-field dance music. This deft studio wizard
            mixes up melodic nostalgia with forward-thinking sound design using
            whatever he can get his hands on, from analog and modular hardware,
            to samplers, field recordings to digital techniques.
          </p>
          <p>
            Says Parsons, “I love working with digital processes because you get
            these unexpected moments where you dial something in, that somehow
            takes on a tangible, organic form in the real world. Searching for
            these sweet spots was the motivation for the album, contrasting
            natural textures against synthetic elements, and finding ways to
            create something that feels like it exists outside of the computer.”
          </p>
        </div>

        <div className={styles.section}>
          <h2>Upcoming</h2>
          <p>Eve (Max Cooper Remix) - June 17</p>
          <p>Live w/ Gidge @ Säälchen, Berlin - November 5</p>
        </div>

        <div className={styles.section}>
          <h2>Press</h2>
          <p>
            <a
              href="https://www.theransomnote.com/music/playlists/track-by-track-awe-kid-body-logic/"
              target="_blank"
              rel="noreferrer"
              className={styles.longLink}
            >
              Ransom Note (track by track interview)
            </a>
          </p>
          <p>
            <a
              href="https://firstfloor.substack.com/p/first-floor-124-california-dreaming?s=r"
              target="_blank"
              rel="noreferrer"
              className={styles.longLink}
            >
              First Floor (Shawn Reynaldo review)
            </a>
          </p>
        </div>

        <div className={styles.section}>
          <h2>Radio/DJ Support</h2>
          <p>
            Mary Anne Hobbs (BBC 6 Music), Tom Ravenscroft (BBC 6 Music), Jamz
            Supernova (BBC 1Xtra), John Digweed, Sister Bliss, Sasha, Dameeeela,
            object blue (Rinse FM), Sam Bhok (Worldwide FM), Zuli (NTS), Gassy
            (NTS), Martelo (NTS), Spinee (NTS), Ferguson (Reprezent), Stocks &
            Shares (Noods), Crossing The Danny (Noods)
          </p>
        </div>

        <div className={styles.section}>
          <h2>Downloads</h2>
          <p>
            <a
              href="https://www.dropbox.com/sh/oq4afm26xb264gc/AABmb_2I4e0j-Zs5WO7Q28MTa"
              target="_blank"
              rel="noreferrer"
              className={styles.longLink}
            >
              Press photos
            </a>
          </p>
          <p>
            <a
              href="https://www.dropbox.com/s/73bgtnk6l7j57mb/awe_kid_tech_rider.jpg"
              target="_blank"
              rel="noreferrer"
              className={styles.longLink}
            >
              Tech rider
            </a>
          </p>
          <p>
            <a
              href="https://soundcloud.com/atomnation/sets/awe-kid-body-logic-promo/s-KyP0iMB9xZ4"
              target="_blank"
              rel="noreferrer"
              className={styles.longLink}
            >
              Album (mp3)
            </a>
          </p>
        </div>

        <div className={styles.section}>
          <h2>Social</h2>
          <div className={styles.socialLinks}>
            <a
              href="https://awekid.bandcamp.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <span className={styles.linkContainer}>
                <FaBandcamp className={styles.icon} size="2em" /> Bandcamp
              </span>
            </a>
            <a
              href="https://open.spotify.com/artist/7pBTVRY3LKuE63SsqAIuN5?si=AkeQA7JjR3qGgrW9QjB19w"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <span className={styles.linkContainer}>
                <FaSpotify className={styles.icon} size="2em" /> Spotify
              </span>
            </a>
            <a
              href="https://www.instagram.com/awekidmusic/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <span className={styles.linkContainer}>
                <FaInstagram className={styles.icon} size="2em" /> Instagram
              </span>
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Contact</h2>
          <a href="mailto:awekidmusic@gmail.com">awekidmusic@gmail.com</a>
        </div>

        <div className={styles.section}>
          <h2>Videos</h2>
          <div className={styles.video}>
            <iframe
              src="https://player.vimeo.com/video/708300277?h=75097592f2"
              title="Awe Kid - Live Teaser"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.video}>
            <iframe
              src="https://www.youtube.com/embed/57Uuk1uNiIk"
              title="Awe Kid - Eve (Official Video)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className={styles.video}>
            <iframe
              src="https://www.youtube.com/embed/KYp1iUmE3Ow"
              title="Awe Kid - Body Logic (Official Visualizer)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
