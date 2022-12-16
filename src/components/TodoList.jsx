import React from "react";
import Todo from "./Todo";

function TodoList({ todos, isActive, setTodos }) {
  return (
    <>
      <h4>{isActive === true ? "Working.. 🏃‍♀️" : "Done!!! ✨"}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            // <div
            //   style={{
            //     border: "1px solid black",
            //   }}
            //   key={item.id}
            // >
            //   <h5>{item.title}</h5>
            //   <p>{item.contents}</p>
            //   <button>{isActive ? "완료" : "취소"}</button>
            //   <button>삭제</button>
            // </div>
            <Todo item={item} isActive={isActive} setTodos={setTodos} />
          );
        })}
    </>
  );
}

export default TodoList;
