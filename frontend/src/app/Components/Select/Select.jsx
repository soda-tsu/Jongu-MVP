import Image from "next/image";
import styles from "./Select.module.css";

function Select({ state, setState, option, optionDescription, icon }) {
  function handleChoose() {
    if (state === option) {
      setState("");
      return;
    } else {
      setState(option);
    }
  }
  return (
    <div
      style={
        state === option && !icon
          ? {
              backgroundColor: "#f5f3ff",
              border: "2px solid #a855f7",
              color: "#7e22ce",
            }
          : state === option && icon
          ? {
              backgroundColor: "#f5f3ff",
              border: "2px solid #a855f7",
              color: "#7e22ce",
              justifyContent: "flex-start",
            }
          : icon
          ? {
              justifyContent: "flex-start",
            }
          : {}
      }
      onClick={handleChoose}
      className={state === "gender" ? styles.selectGender : styles.select}
    >
      {icon && (
        <Image src={`${icon}.png`} alt={option} width={40} height={40} />
      )}

      <div className={styles.selectIconFlex}>
        <h3 className={styles.selectTittle}>{option}</h3>
        {optionDescription && (
          <p className={styles.selectDescription}>{optionDescription}</p>
        )}
      </div>
    </div>
  );
}

export default Select;
