import React from "react";
import styles from "./ImagePlaceholder.module.css";

function ImagePlaceholder({ pageIndex }) {
  return (
    <div className={styles.imagePlaceholder}>
      <p className={styles.textPlaceholder}>
        Sua imagem da página {pageIndex}
        <br /> vai entrar aqui
      </p>
    </div>
  );
}

export default ImagePlaceholder;
