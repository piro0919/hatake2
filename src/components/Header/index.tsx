import { motion } from "framer-motion";
import styles from "./style.module.scss";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <motion.h1
        animate={{ scale: 1, transition: { delay: 1 } }}
        className={styles.heading1}
        initial={{ scale: 0 }}
      >
        はじめしゃちょーの畑
      </motion.h1>
      <motion.p
        animate={{ scale: 1, transition: { delay: 1 } }}
        className={styles.subTitle}
        initial={{ scale: 0 }}
      >
        非公式ファンサイト
      </motion.p>
    </header>
  );
}

export default Header;
