import Head from "next/head";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arturo Puente</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className={styles.title}>Hello there 👋</h1>
      <p className={styles.content}>
        I'm Arturo, a full stack software developer based in Peru.
      </p>
      <p className={styles.content}>
        I enjoy building web applications with Rails and React.
      </p>
      <a className={styles.link} href="https://github.com/arturopuente">
        My GitHub profile
      </a>
    </div>
  );
}
