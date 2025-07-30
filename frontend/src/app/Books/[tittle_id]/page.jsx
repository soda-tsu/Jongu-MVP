"use client";
import { useState, useEffect, use } from "react";
import styles from "./page.module.css";
import StoryPage from "@/app/Components/StoryPage/StoryPage";

function page({ params }) {
  const unwrappedParams = use(params);
  const searchTerm = unwrappedParams.tittle_id;
  const [book, setBook] = useState(null);
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `http://localhost:8000/chat/stories/${searchTerm}/`
      );
      const data = await response.json();
      setBook(data);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    console.log(book);
  }, [book]);

  return (
    <div className="BookReading">
      {book && (
        <>
          <div className={styles.bookHeader}>
            <h2>{book.Title}</h2>
            <p>{`Escrito por ${book.Author}`}</p>
          </div>
          <section className={styles.bookPreview}>
            {book &&
              book.Pages.map((page, index) => (
                <StoryPage
                  key={index}
                  text={page}
                  image={book.Image[index]}
                  pageIndex={index + 1}
                />
              ))}
          </section>
        </>
      )}
    </div>
  );
}

export default page;
