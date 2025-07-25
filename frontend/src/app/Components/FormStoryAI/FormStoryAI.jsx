"use client";
import React from "react";
import styles from "./FormStoryAI.module.css";
import Image from "next/image";
import { useState } from "react";

function FormStoryAI() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [story, setStory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/chat/generate-image/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        author: author,
        prompt: story,
        size: "1024x1024",
      }),
    });
    if (response.ok) {
      setAuthor("");
      setTitle("");
      setStory("");
      alert("Story created successfully");
    }
  };
  return (
    <form className={styles.formStoryAIBOX} onSubmit={handleSubmit}>
      <h2>Write your story</h2>
      <div className={styles.formStoryAI}>
        <div className={styles.formStoryAIContent}>
          <div className={styles.flexLabelInput}>
            <label htmlFor="title">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              name="title"
            />
          </div>
          <div className={styles.flexLabelInput}>
            <label htmlFor="author">Author</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              id="author"
              name="author"
            />
          </div>
          <div className={styles.flexLabelInput}>
            <label htmlFor="story">Story</label>
            <textarea
              value={story}
              onChange={(e) => setStory(e.target.value)}
              id="story"
              name="story"
            ></textarea>
          </div>
        </div>
        <Image
          src="/createHistory.png"
          alt="Jongu create history"
          width={296}
          height={406}
        />
      </div>
      <button className={styles.buttonCreate} type="submit">
        Create
      </button>
    </form>
  );
}

export default FormStoryAI;
