import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Input.css";

function Input({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();

    if (!title) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!contents) {
      alert("내용을 입력해주세요.");
      return;
    }

    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };

    // 세팅된 title과 contents를 todos에 넣어주는 작업
    setTodos((prev) => {
      return [...prev, newTodo];
    });

    // 값 초기화
    setTitle("");
    setContents("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };
  return (
    <section className="input">
      <form onSubmit={handleSubmitClick}>
        title: <input value={title} onChange={handleTitleChange} />{" "}
        &nbsp;&nbsp;&nbsp; contents:{" "}
        <input value={contents} onChange={handleContentsChange} />
        &nbsp;&nbsp;&nbsp; <button>추가</button>
      </form>
    </section>
  );
}

export default Input;
