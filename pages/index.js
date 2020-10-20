import Head from "next/head";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arturo Puente</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2250%22 fill=%22%2399ffbb%22></rect><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2250%22>🐧</text></svg>"
        />
      </Head>
      <h1 className={styles.title}>Hello there 👋</h1>
      <p className={styles.content}>
        I'm Arturo, a full stack software developer based in Lima, Per&uacute;.
      </p>
      <p className={styles.content}>
        I enjoy building web applications with Rails and React.
      </p>
      <a className={styles.link} href="https://github.com/arturopuente">
        My GitHub Profile
      </a>
    </div>
  );
}
