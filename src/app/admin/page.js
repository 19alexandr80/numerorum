import Link from "next/link";
import styles from "./pages.module.css";

export default function Admin() {
  return (
    <>
      <div>
        <ul className={styles.main}>
          <li>
            <Link href="/admin/past">Past</Link>
          </li>
          <li>
            <Link href="/admin/present">Present</Link>
          </li>
          <li>
            <Link href="/admin/future">Future</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
