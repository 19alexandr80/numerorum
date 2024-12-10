// import localFont from "next/font/local";

// import { registerUser } from "@/api/authUser";

import styles from "./pages.module.css";

export default async function RootLayout({ children }) {
  // const uuss = { email: "us07071980@gmail.com", password: "12345qwerty" };
  // const us = await registerUser(uuss);
  // console.log(us);
  return (
    <div className={styles.page}>
      <h1>What do you want to know</h1>
      {children}
    </div>
  );
}
