import React from "react";
import styles from "./BookPreview.module.css";
import StoryPage from "../StoryPage/StoryPage";

function BookPreview({ data }) {
  return (
    <section className={styles.bookPreview}>
      {data &&
        data.pages.map((page, index) => (
          <StoryPage key={index} text={page} pageIndex={index + 1} />
        ))}
    </section>
  );
}

export default BookPreview;
