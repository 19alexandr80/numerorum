// import localFont from "next/font/local";

import styles from "./pages.module.css";

export default function RootLayout({ children }) {
  return (
    <div className={styles.page}>
      <h1>What do you want to know</h1>
      {children}
    </div>
  );
}
