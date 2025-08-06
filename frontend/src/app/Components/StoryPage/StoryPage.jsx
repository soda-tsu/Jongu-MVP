"use client";
import React from "react";
import styles from "./StoryPage.module.css";
import Image from "next/image";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import { useState, useEffect } from "react";

function StoryPage({
  text,
  image,
  pageIndex,
  editMode,
  setEditPayload,
  editPayload,
}) {
  const [edit, setEdit] = useState(false);
  const [editReady, setEditReady] = useState(false);
  const [textValue, setTextValue] = useState(text);

  useEffect(() => {
    if (editReady) {
      if (setEditPayload) {
        setEditPayload((prev) =>
          prev.map((item, i) => {
            if (i === pageIndex - 1) {
              return textValue;
            }
            return item;
          })
        );
      }
    }
  }, [editReady, setEditPayload]);

  return (
    <div className={styles.storyPage}>
      <div className={styles.imageContainer}>
        {image ? (
          <Image
            src={`http://localhost:8000/media/${image}`}
            alt={image}
            width={500}
            height={500}
          />
        ) : (
          <ImagePlaceholder pageIndex={pageIndex} />
        )}
      </div>
      <div className={styles.textContainer}>
        {text && edit ? (
          <textarea
            className={styles.inputEdit}
            rows={5}
            minLength={10}
            maxLength={200}
            placeholder="No mínimo 10 palavras e no máximo 200 palavras"
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
          />
        ) : (
          <p className={styles.text}>{textValue}</p>
        )}
      </div>
      {!edit && editMode && (
        <button
          onClick={() => {
            setEdit(true);
            setEditReady(false);
          }}
          className={styles.editButton}
        >
          <Image src="/edit.svg" alt="Editar" width={30} height={30} />
          <p>Editar</p>
        </button>
      )}
      {edit && editMode && (
        <button
          onClick={() => {
            setEdit(false);
            setEditReady(true);
          }}
          className={styles.readyButton}
        >
          <Image src="/done.svg" alt="Editar" width={30} height={30} />
          <p>Concluído</p>
        </button>
      )}
    </div>
  );
}

export default StoryPage;
