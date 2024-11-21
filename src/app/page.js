// import Image from "next/image";
import styles from "./page.module.css";

// import Footer from "../component/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>NUMERORUM</h1>

        <div className={styles.ctas}>
          <Link className="ctas" href="/admin">
            PGbvgf
          </Link>
        </div>
      </main>
    </div>
  );
}
