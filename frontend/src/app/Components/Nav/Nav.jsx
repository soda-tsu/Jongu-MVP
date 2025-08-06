import Image from "next/image";
import styles from "./Nav.module.css";
import Link from "next/link";

function Nav() {
  const iconSize = 80;
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.navLogo}>
          <Image src="/Logo.png" alt="Jongu Logo" width={181} height={80} />
        </Link>

        <ul className={styles.navList}>
          <li>
            <Link href="/">
              <Image
                src="/create.svg"
                alt="ReadPage"
                width={iconSize}
                height={iconSize}
              />
            </Link>
          </li>
          <li>
            <Link href="/Leitura">
              <Image
                src="/read.svg"
                alt="AboutPage"
                width={iconSize}
                height={iconSize}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
