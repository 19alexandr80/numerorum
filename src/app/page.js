import Image from "next/image";
import styles from "./page.module.css";

import Footer from "../component/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Next.js logo"
          width={180}
          height={140}
          priority
        />
        <h1>NUMERORUM</h1>

        <div className={styles.ctas}></div>
        <Footer />
      </main>
    </div>
  );
}
