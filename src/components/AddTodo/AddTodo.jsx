import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let savedText = text;
    savedText = savedText.trim();

    // 두글자 이하는 오입력으로 간주
    if (savedText.length <= 2) {
      setText("");
      return;
    }

    // 열글자 이상은 입력받지 않고 alert
    if (savedText.length > 10) {
      setText("");
      return;
    }

    onAdd({ id: uuidv4(), text: savedText, status: "active" });
    setText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}

export default AddTodo;
