import React from "react";
import styles from "./BookCard.module.css";
import Image from "next/image";
import Link from "next/link";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

function BookCard({ title, author, image_url, title_id }) {
  return (
    <Link href={`/Books/${title_id}`} className={styles.bookCard}>
      {image_url ? (
        <Image
          src={`http://localhost:8000/media/${image_url}`}
          alt="Book"
          width={300}
          height={300}
        />
      ) : (
        <div className={styles.imagePlaceholder}></div>
      )}
      <h2>{title}</h2>
      <p>{author}</p>
    </Link>
  );
}

export default BookCard;
