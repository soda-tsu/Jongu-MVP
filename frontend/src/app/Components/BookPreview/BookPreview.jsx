"use client";
import React from "react";
import styles from "./BookPreview.module.css";
import StoryPage from "../StoryPage/StoryPage";
import { useState } from "react";
import BookLoader from "../BookLoader/BookLoader";
import Link from "next/link";
import Image from "next/image";

function BookPreview({ data, setEditPayload, editPayload }) {
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);

  console.log(data.title_id);

  const handleGenerateImages = async () => {
    setLoader(true);
    const response = await fetch(
      "http://localhost:8000/chat/generate-multiple-images/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title_id: data.title_id,
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
        <button className={styles.btnGrad} onClick={handleGenerateImages}>
          <Image src="/generImg.png" alt="Generate" width={70} height={70} />
          <p>Gerar imagens</p>
        </button>
      )}
      {loader && (
        <div className={styles.loaderContainer}>
          <h2>Gerando imagens...</h2>
          <p>Isso pode levar alguns minutos dependendo do número de páginas</p>
          <BookLoader />
        </div>
      )}
      {success && (
        <div className={styles.successContainer}>
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
