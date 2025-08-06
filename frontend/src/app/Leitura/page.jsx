"use client";
import { useEffect, useState } from "react";
import BookCard from "../Components/BookCard/BookCard";
import styles from "./page.module.css";

function Leitura() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch("http://localhost:8000/chat/stories/");
      const data = await response.json();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  return (
    <div className={styles.container}>
      {books.map((book) => (
        <BookCard
          key={book.title_id}
          title={book.Title}
          author={book.Author}
          image_url={book.Image}
          title_id={book.title_id}
        />
      ))}
    </div>
  );
}

export default Leitura;
