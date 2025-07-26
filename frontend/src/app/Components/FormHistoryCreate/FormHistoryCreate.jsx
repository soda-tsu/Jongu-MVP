"use client";
import React from "react";
import styles from "./FormHistoryCreate.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

function FormHistoryCreate() {
  const [stepForm, setStepForm] = useState(1);
  const [title, setTitle] = useState("Quantos anos tem seu pequeno?");
  const [description, setDescription] = useState(
    "Isso nos ajuda a escolher o vocabulário e temas perfeitos"
  );
  const [icon, setIcon] = useState("age");

  useEffect(() => {
    switch (stepForm) {
      case 1:
        setTitle("Quantos anos tem seu pequeno?");
        setDescription(
          "Isso nos ajuda a escolher o vocabulário e temas perfeitos"
        );
        setIcon("age");
        break;
      case 2:
        setTitle("Qual público?");
        setIcon("manWoman");
        setDescription("Usaremos os pronomes e perspectiva corretos");
        break;
      case 3:
        setTitle("Do que sua criança gosta?");
        setIcon("name");
        break;
      case 4:
        setTitle("Que tipo de história vai ser?");
        setIcon("name");
        break;
      case 5:
        setTitle("Qual lição/assunto você quer ensinar?");
        setIcon("name");
        break;
      default:
        setTitle("Quantos anos tem seu pequeno?");
        setIcon("age");
        break;
    }
  }, [stepForm]);

  return (
    <form className={styles.formHistoryCreate}>
      <div className={styles.icon}>
        <Image src={`${icon}.svg`} alt={title} width={80} height={80} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <input min={0} max={20} className={styles.input} type="number" />
      {stepForm === 1 && (
        <button
          className={styles.customButton}
          type="button"
          onClick={() => setStepForm(stepForm + 1)}
        >
          Continuar
        </button>
      )}
      {stepForm > 1 && (
        <div className={styles.flexButton}>
          <button
            onClick={() => setStepForm(stepForm - 1)}
            className={styles.customButton}
            type="button"
          >
            Voltar
          </button>
          <button
            onClick={() => setStepForm(stepForm + 1)}
            className={styles.customButton}
            type="button"
          >
            Continuar
          </button>
        </div>
      )}
      <p className={styles.stepFormDescription}>Passo {stepForm} de 5</p>
      <div className={styles.bar}>
        <div
          style={{ width: `${stepForm * 20}%` }}
          className={styles.filledBar}
        ></div>
      </div>
    </form>
  );
}

export default FormHistoryCreate;
