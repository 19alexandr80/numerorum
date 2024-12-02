"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./dinamik.module.css";

export default function Dinamik() {
  // const router = useRouter();

  const pathname = usePathname();

  const put = pathname.split("/")[2];

  return (
    <>
      <div className={styles.page}>
        <h1>
          <Link href="/">PG</Link>
        </h1>
        <p className={styles.paragraf}>
          <strong>{put}</strong>
        </p>
        <h2>
          <Link href="/admin">adminADMIN</Link>
        </h2>
        {/* <button type="button" onClick={() => router.push("/")}>
          Click me
        </button> */}
      </div>
    </>
  );
}
