"use client";
import React from "react";
import styles from "./BookPreview.module.css";
import StoryPage from "../StoryPage/StoryPage";
import { useState } from "react";
import BookLoader from "../BookLoader/BookLoader";
import Link from "next/link";

function BookPreview({ data, setEditPayload, editPayload }) {
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleGenerateImages = async () => {
    const response = await fetch(
      "http://localhost:8000/chat/generate-multiple-images/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tittle_id: data.title_id,
          size: "1024x1024",
        }),
      }
    );
    if (response.ok) {
      setLoader(false);
      setSuccess(true);
    }
  };
  return (
    <>
      <section className={styles.bookPreview}>
        {data &&
          !success &&
          data.pages.map((page, index) => (
            <StoryPage
              key={index}
              text={page}
              pageIndex={index + 1}
              editMode={true}
              setEditPayload={setEditPayload}
              editPayload={editPayload}
            />
          ))}
      </section>
      {!loader && !success && (
        <button onClick={handleGenerateImages}>Gerar imagens</button>
      )}
      {loader && <BookLoader />}
      {success && (
        <div>
          {" "}
          <p>Ilustramos sua história com sucesso!!</p>
          <Link href={`/Books/${data.title_id}`}>
            Clique aqui para ler sua história
          </Link>
        </div>
      )}
    </>
  );
}

export default BookPreview;
