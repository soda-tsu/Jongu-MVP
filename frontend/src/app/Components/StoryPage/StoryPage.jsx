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
        console.log("entrei aqui", editPayload);
        setEditPayload((prev) => ({
          pages: prev.pages.map((item, i) =>
            i === pageIndex - 1 ? textValue : item
          ),
        }));
      }
    }
  }, [editReady, setEditPayload]);

  return (
    <div className={styles.storyPage}>
      <div className={styles.imageContainer}>
        {image ? <Image /> : <ImagePlaceholder pageIndex={pageIndex} />}
      </div>
      <div className={styles.textContainer}>
        {text && edit ? (
          <input
            type="text"
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
          />
        ) : (
          <p className={styles.text}>{textValue}</p>
        )}
      </div>
      {!edit && (
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
      {edit && (
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
