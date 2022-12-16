import React from "react";

function Todo({ item, isActive, setTodos }) {
  // 삭제 버튼이 눌렸을 경우
  const handleDeleteButtonClick = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };

  const handleSwitchButtonClick = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#F0F8FF",
        border: "1px solid white",
        borderRadius: "10px",
        padding: "20px",
        marginTop: "10px",
        fontFamily: "EF_Diary",
      }}
      key={item.id}
    >
      <h5>{item.title}</h5>
      <p>{item.contents}</p>
      <button onClick={handleSwitchButtonClick}>
        {isActive ? "완료" : "취소"}
      </button>
      &nbsp;&nbsp;
      <button onClick={handleDeleteButtonClick}>삭제</button>
    </div>
  );
}

export default Todo;
