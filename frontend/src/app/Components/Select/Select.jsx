import Image from "next/image";
import styles from "./Select.module.css";

function Select({
  state,
  setState,
  option,
  optionDescription,
  icon,
  selected,
  setSelected,
}) {
  function handleChoose() {
    if (setSelected) {
      if (selected === option) {
        setSelected("");
        return;
      } else {
        setSelected(option);
      }
    }

    if (state === option) {
      setState("");
      return;
    } else {
      switch (option) {
        // Gênero
        case "Menino":
          setState(1);
          break;
        case "Menina":
          setState(2);
          break;
        // Interesses
        case "animais":
          setState(1);
          break;
        case "astronomia":
          setState(2);
          break;
        case "oceano":
          setState(3);
          break;
        case "dinossauros":
          setState(4);
          break;
        case "princesa":
          setState(5);
          break;
        case "arte":
          setState(6);
          break;
        case "natureza":
          setState(7);
          break;
        case "florestas":
          setState(8);
          break;
        case "superherois":
          setState(9);
          break;
        case "carrinhos":
          setState(10);
          break;
        case "ciência":
          setState(11);
          break;
        // Tipo de história
        case "Engraçada e Boba":
          setState(1);
          break;
        case "Aventura e Emoção":
          setState(2);
          break;
        case "Suave e Calmante":
          setState(3);
          break;
        case "Mágica e Encantadora":
          setState(4);
          break;
        case "Educativa e Aprendizado":
          setState(5);
          break;
      }
    }
  }
  return (
    <div
      style={
        selected === option && !icon
          ? {
              backgroundColor: "#f5f3ff",
              border: "2px solid #a855f7",
            }
          : selected === option && icon
          ? {
              backgroundColor: "#f5f3ff",
              border: "2px solid #a855f7",
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
        <h3
          style={
            selected === option && !icon
              ? {
                  color: "#7e22ce",
                }
              : selected === option && icon
              ? {
                  color: "#7e22ce",
                }
              : {}
          }
          className={styles.selectTittle}
        >
          {option}
        </h3>
        {optionDescription && (
          <p className={styles.selectDescription}>{optionDescription}</p>
        )}
      </div>
    </div>
  );
}

export default Select;
