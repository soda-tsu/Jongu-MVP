"use client";
import { useState, useEffect } from "react";

function page({ params }) {
  const searchTerm = params.tittle_id;
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `http://localhost:8000/chat/generated-images/`
      );
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    console.log(books);
  }, [books]);

  return <div>page</div>;
}

export default page;
