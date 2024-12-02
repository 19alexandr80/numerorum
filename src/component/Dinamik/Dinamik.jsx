"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Head from "next/head";

import styles from "./dinamik.module.css";

export default function Dinamik() {
  // const router = useRouter();

  const pathname = usePathname();

  const put = pathname.split("/")[2];

  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className={styles.page}>
        <h1>
          <Link href="/">Pages</Link>
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
    </div>
  );
}
