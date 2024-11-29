import Link from "next/link";
import styles from "./page.module.css";

export default function Admin() {
  return (
    <>
      <div className={styles.page}>
        <h1>Admin</h1>
        <div>greta tumberg</div>
        <h2>
          <Link className="ctas" href="/">
            Home
          </Link>
        </h2>
        <h2>
          <Link href="/admin/pg">greta tumberg</Link>
        </h2>
      </div>
    </>
  );
}
