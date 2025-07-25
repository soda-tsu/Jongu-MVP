import Image from "next/image";
import styles from "./Nav.module.css";
import Link from "next/link";

function Nav() {
  const iconSize = 48;
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <Link href="/">
          <Image src="/Logo.png" alt="Jongu Logo" width={181} height={80} />
        </Link>

        <ul className={styles.navList}>
          <li>
            <Link href="/Books">
              <Image
                src="/Read.png"
                alt="ReadPage"
                width={iconSize}
                height={iconSize}
              />
            </Link>
          </li>
          <li>
            <Link href="/About">
              <Image
                src="/About.png"
                alt="AboutPage"
                width={iconSize}
                height={iconSize}
              />
            </Link>
          </li>
          <li>
            <Link href="/Login">
              <Image
                src="/Login.png"
                alt="Login"
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
