import React from "react";
import styles from "./StoryPage.module.css";
import Image from "next/image";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

function StoryPage({ text, image, pageIndex }) {
  return (
    <div className={styles.storyPage}>
      <div className={styles.imageContainer}>
        {image ? <Image /> : <ImagePlaceholder pageIndex={pageIndex} />}
      </div>
      <div className={styles.textContainer}>
        {text && <p className={styles.text}>{text}</p>}
      </div>
    </div>
  );
}

export default StoryPage;
