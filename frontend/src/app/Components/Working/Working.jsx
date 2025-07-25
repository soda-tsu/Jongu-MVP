import React from "react";
import styles from "./Working.module.css";
import Image from "next/image";

function Working() {
  return (
    <div className={styles.working}>
      <h1>I'm still working on this page...</h1>
      <Image src="/work.png" alt="Rabbit working" width={600} height={600} />
    </div>
  );
}

export default Working;
