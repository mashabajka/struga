import styles from "./Button.module.css";

type TBtn = {
  text: string;
  type?: string;
  align?: string;
  onClick?: () => void;
};

export default function Button({ text, type = "white", align, onClick }: TBtn) {
  return (
    <button
      onClick={onClick}
      className={styles.btn}
      style={{
        color: type === "white" ? "#f5e2c3" : "#171717",
        borderColor: type === "white" ? "#f5e2c3" : "#171717",
        alignSelf: align,
      }}
    >
      {text}
    </button>
  );
}
