import React from "react";
import styles from "./StoryPage.module.css";
import Image from "next/image";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

function StoryPage({ text, image, pageIndex }) {
  return (
    <div className={styles.storyPage}>
      {image ? <Image /> : <ImagePlaceholder pageIndex={pageIndex} />}
      <div className={styles.pipe} />
      {text && <p>{text}</p>}
    </div>
  );
}

export default StoryPage;
