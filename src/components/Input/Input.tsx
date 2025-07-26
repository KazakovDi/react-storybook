import React, { useRef, useState } from "react";
import { Eye } from "../../shared/icons/Eye";
import { Cross } from "../../shared/icons/Cross";
import { EyeCrossed } from "../../shared/icons/EyeCrossed";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input = (props: MyInputProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const actualType =
    props.type === "password" ? (isHidden ? "password" : "text") : props.type;

  const toggleHiddenHandler = () => {
    if (inputRef.current) {
      inputRef.current.type =
        inputRef.current.type === "password" ? "text" : "password";
      setIsHidden((prev) => !prev);
    }
  };

  return (
    <div style={styles.inputContainer}>
      <input
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        style={styles.input}
        {...props}
        type={actualType}
      />
      <div style={styles.controls}>
        {props.type === "password" ? (
          <div style={styles.btn} onClick={toggleHiddenHandler}>
            {isHidden ? <EyeCrossed /> : <Eye />}
          </div>
        ) : null}

        {props.clearable ? (
          <div style={styles.btn} onClick={() => setValue("")}>
            <Cross />
          </div>
        ) : null}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  inputContainer: {
    marginTop: 50,
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "solid",
    outline: "none",
    borderRadius: 32,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
  },
  input: {
    border: "none",
    outline: "none",
    fontSize: 16,
  },
  controls: {
    gap: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
};
