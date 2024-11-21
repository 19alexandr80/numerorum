"use client";

import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const pathname = usePathname();

  console.log(pathname);

  return (
    <>
      <h1>
        <Link href="/">PG</Link>
      </h1>
      <p>{pathname}</p>
      <h2>
        <Link href="/admin">admin</Link>
      </h2>
      <button type="button" onClick={() => router.push("/")}>
        Click me
      </button>
    </>
  );
}
