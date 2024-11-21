import Image from "next/image";
import Link from "next/link";

import style from "./header.module.css";

export default function Header() {
  return (
    <>
      <div className={`${style.header} ${style.page}`}>
        <Link className="ctas" href="/">
          Home
        </Link>
        <Image
          className={style.logo}
          src="/numerorum.svg"
          alt="logo"
          width={120}
          height={120}
          priority
        />
      </div>
    </>
  );
}
