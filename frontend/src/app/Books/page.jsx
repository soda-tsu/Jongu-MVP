"use client";
import React from "react";
import Working from "../Components/Working/Working";
import { useState, useEffect } from "react";
import BookCard from "../Components/BookCard/BookCard";

function Books() {
  const URL = process.env.NEXT_PUBLIC_API_URL;
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`${URL}chat/generated-images/`);
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="Container">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          image_url={book.image_url}
        />
      ))}
    </div>
  );
}

export default Books;
