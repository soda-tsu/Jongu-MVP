import React from "react";
import styles from "./BookCard.module.css";
import Image from "next/image";

function BookCard({ title, author, image_url }) {
  return (
    <div className={styles.bookCard}>
      {console.log(image_url)}
      <Image src={image_url} alt="Book" width={200} height={200} />
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
}

export default BookCard;
