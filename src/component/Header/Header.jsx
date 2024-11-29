import Image from "next/image";
import Link from "next/link";

import style from "./header.module.css";

import img from "../img/numerorum.svg";
export default function Header() {
  return (
    <>
      <div className={`${style.header} `}>
        <Link className="ctas" href="/">
          Home
        </Link>
        <Image
          className={style.logo}
          src={img}
          alt="logo"
          width={120}
          height={120}
          priority
        />
      </div>
    </>
  );
}
