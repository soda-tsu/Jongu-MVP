"use client";
import React from "react";
import styles from "./FormHistoryCreate.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Select from "../Select/Select";

function FormHistoryCreate() {
  const [stepForm, setStepForm] = useState(1);
  const [title, setTitle] = useState("Quantos anos tem seu pequeno?");
  const [description, setDescription] = useState(
    "Isso nos ajuda a escolher o vocabulário e temas perfeitos"
  );
  const [icon, setIcon] = useState("age");

  // TODO: Enviar todas estas informações de Opções para o endpoint de criação de texto
  // TODO: Colocar valor default para elas na hora de enviar caso seja vazio (ou pode colocar no inicial)
  // Opções
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [like, setLike] = useState("");
  const [historyTipe, setHistoryTipe] = useState("");
  const [pages, setPages] = useState("");
  const [tittleHistory, setTittleHistory] = useState("");
  const [authorHistory, setAuthorHistory] = useState("");
  const [characterDetail, setCharacterDetail] = useState("");
  const [lesson, setLesson] = useState("");

  useEffect(() => {
    switch (stepForm) {
      case 1:
        setTitle("Quantos anos tem seu pequeno?");
        setDescription(
          "Isso nos ajuda a escolher o vocabulário e temas perfeitos"
        );
        setIcon("family");
        break;
      case 2:
        setTitle("Qual público?");
        setIcon("manWoman");
        setDescription("Usaremos os pronomes e perspectiva corretos");
        break;
      case 3:
        setTitle("Do que sua criança gosta?");
        setDescription("Escolha o que desperta a imaginação dela");
        setIcon("like");
        break;
      case 4:
        setTitle("Que tipo de história vai ser?");
        setDescription("Escolha o tipo de história que seu pequeno vai gostar");
        setIcon("type");
        break;
      case 5:
        setTitle("Quantas páginas são?");
        setDescription(
          "Usaremos o número de páginas para o número de ilustrações e o tamanho da história"
        );
        setIcon("book");
        break;

      case 6:
        setTitle("Detalhes do personagem");
        setDescription(
          "Descreva em detalhes o protagonista, isto ajuda a manter a fidelidade entre as ilustrações"
        );
        setIcon("character");
        break;

      case 7:
        setTitle("Título da história e autor");
        setDescription("Insira o título e autor da história");
        setIcon("writer");
        break;
      case 8:
        setTitle("Qual lição/assunto você quer ensinar?");
        setDescription("Que mensagem importante eles devem aprender?");
        setIcon("ensinar");
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
      {/* Conteúdo */}
      {stepForm === 1 && (
        <input
          value={age}
          min={0}
          max={20}
          className={styles.input}
          type="number"
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value)) {
              const numeric = parseInt(value, 10);
              if (value === "" || (numeric >= 0 && numeric <= 20)) {
                setAge(value);
              }
            }
          }}
          placeholder="Digite apenas números de 0 a 20"
          onKeyDown={(e) => {
            const allowedKeys = [
              "Backspace",
              "Delete",
              "ArrowLeft",
              "ArrowRight",
              "Tab",
            ];
            if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
              e.preventDefault();
            }
          }}
        />
      )}
      {stepForm === 2 && (
        <div className={styles.genderFlex}>
          <Select state={gender} setState={setGender} option={"Menino"} />
          <Select state={gender} setState={setGender} option={"Menina"} />
        </div>
      )}
      {stepForm === 3 && (
        <div className={styles.mainFlex}>
          <div className={styles.duoFlex}>
            <Select option={"animais"} state={like} setState={setLike} />
            <Select option={"astronomia"} state={like} setState={setLike} />
          </div>
          <div className={styles.duoFlex}>
            <Select option={"oceano"} state={like} setState={setLike} />
            <Select option={"dinossauros"} state={like} setState={setLike} />
          </div>
          <div className={styles.duoFlex}>
            <Select option={"princesa"} state={like} setState={setLike} />
            <Select option={"arte"} state={like} setState={setLike} />
          </div>
          <div className={styles.duoFlex}>
            <Select option={"natureza"} state={like} setState={setLike} />
            <Select option={"florestas"} state={like} setState={setLike} />
          </div>
          <div className={styles.duoFlex}>
            <Select option={"superherois"} state={like} setState={setLike} />
            <Select option={"carrinhos"} state={like} setState={setLike} />
          </div>
          <div className={styles.duoFlex}>
            <Select option={"ciência"} state={like} setState={setLike} />
          </div>
        </div>
      )}
      {stepForm === 4 && (
        <div className={styles.stepFourFlex}>
          <Select
            icon={"engracado"}
            option={"Engracada e Boba"}
            optionDescription={"Risos e gargalhadas do início ao fim"}
            state={historyTipe}
            setState={setHistoryTipe}
          />
          <Select
            icon={"aventura"}
            option={"Aventura e Emoção"}
            optionDescription={"Missões emocionantes e descobertas"}
            state={historyTipe}
            setState={setHistoryTipe}
          />
          <Select
            icon={"calmo"}
            option={"Suave e Calmante"}
            optionDescription={"Pacífica e relaxante"}
            state={historyTipe}
            setState={setHistoryTipe}
          />
          <Select
            icon={"magica"}
            option={"Mágica e Encantadora"}
            optionDescription={"Fantasia e mistério"}
            state={historyTipe}
            setState={setHistoryTipe}
          />
          <Select
            icon={"educativo"}
            option={"Educativa e Aprendizado"}
            optionDescription={"Fatos divertidos e conhecimento"}
            state={historyTipe}
            setState={setHistoryTipe}
          />
        </div>
      )}
      {stepForm === 5 && (
        <input
          value={pages}
          min={3}
          max={10}
          className={styles.input}
          type="number"
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value)) {
              const numeric = parseInt(value, 10);
              if (value === "" || (numeric >= 3 && numeric <= 10)) {
                setPages(value);
              }
            }
          }}
          placeholder="Digite apenas números de 3 a 10"
          onKeyDown={(e) => {
            const allowedKeys = [
              "Backspace",
              "Delete",
              "ArrowLeft",
              "ArrowRight",
              "Tab",
            ];
            if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
              e.preventDefault();
            }
          }}
        />
      )}

      {stepForm === 6 && (
        <div className={styles.contadorInput}>
          <p className={styles.contador}>{characterDetail.length} / 200</p>
          <textarea
            maxLength={200}
            minLength={10}
            required
            value={characterDetail}
            onChange={(e) => setCharacterDetail(e.target.value)}
            className={styles.textArea}
            placeholder="Alice era uma menina alegre que estava sempre sorrindo, seus olhos brilhavam com alegria e seus cabelos loiros caíam sobre seus ombros..."
            rows={5}
          />
        </div>
      )}

      {stepForm === 7 && (
        <div className={styles.flexTittleAuthor}>
          <div className={styles.contadorInput}>
            <p className={styles.contador}>{tittleHistory.length} / 20</p>
            <input
              maxLength={20}
              value={tittleHistory}
              className={styles.input}
              type="text"
              onChange={(e) => setTittleHistory(e.target.value)}
              placeholder="Título da história"
            />
          </div>
          <div className={styles.contadorInput}>
            <p className={styles.contador}>{authorHistory.length} / 20</p>
            <input
              maxLength={20}
              value={authorHistory}
              className={styles.input}
              type="text"
              onChange={(e) => setAuthorHistory(e.target.value)}
              placeholder="Autor da história"
            />
          </div>
        </div>
      )}

      {stepForm === 8 && (
        <div className={styles.contadorInput}>
          <p className={styles.contador}>{lesson.length} / 200</p>
          <textarea
            maxLength={200}
            minLength={10}
            required
            value={lesson}
            onChange={(e) => setLesson(e.target.value)}
            className={styles.textArea}
            placeholder="Conte mais sobre o que quer ensinar"
            rows={5}
          />
        </div>
      )}
      {/* Botões */}
      {stepForm === 1 &&
        (age === "" ? (
          <button
            className={styles.customButton}
            type="button"
            onClick={() => setStepForm(stepForm + 1)}
          >
            Pular
          </button>
        ) : (
          <button
            className={styles.customButton}
            type="button"
            onClick={() => setStepForm(stepForm + 1)}
          >
            Continuar
          </button>
        ))}
      {stepForm > 1 && stepForm < 8 && (
        <div className={styles.flexButton}>
          <button
            onClick={() => setStepForm(stepForm - 1)}
            className={styles.customButton}
            type="button"
          >
            Voltar
          </button>
          {(stepForm === 2 && gender === "") ||
          (stepForm === 3 && like === "") ||
          (stepForm === 4 && historyTipe === "") ||
          (stepForm === 5 && pages === "") ||
          (stepForm === 6 && characterDetail === "") ||
          (stepForm === 7 && tittleHistory === "") ? (
            <button
              onClick={() => setStepForm(stepForm + 1)}
              className={styles.customButton}
              type="button"
            >
              Pular
            </button>
          ) : (
            <button
              onClick={() => setStepForm(stepForm + 1)}
              className={styles.customButton}
              type="button"
            >
              Continuar
            </button>
          )}
        </div>
      )}
      {stepForm === 8 && (
        <div className={styles.flexButton}>
          <button
            onClick={() => setStepForm(stepForm - 1)}
            className={styles.customButton}
            type="button"
          >
            Voltar
          </button>
          <button className={styles.customButton} type="button">
            Criar história
          </button>
        </div>
      )}
      <p className={styles.stepFormDescription}>Passo {stepForm} de 8</p>
      <div className={styles.bar}>
        <div
          style={{ width: `${stepForm * 12.5}%` }}
          className={styles.filledBar}
        ></div>
      </div>
    </form>
  );
}

export default FormHistoryCreate;
