import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  // todos: todo라는 객체를 여러 개 가지고 있는 배열!
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      {/* <header>헤더입니다.</header> */}
      <Header> 💖 My Todo List 💖 </Header>
      <main
        style={{
          padding: "20px",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        {/* 인풋을 만들어 입력하는 부분 */}
        {/* <section>
          제목: <input />
          내용: <input />
          <button>추가</button>
        </section> */}
        <Input setTodos={setTodos} />

        {/* todoList를 출력하는 부분 */}
        <TodoList isActive={true} todos={todos} setTodos={setTodos} />
        <TodoList isActive={false} todos={todos} setTodos={setTodos} />
      </main>

      <Footer>
        &nbsp;&nbsp;&nbsp; ❤️🧡💛💚💙💜 Have a special day! ❤️🧡💛💚💙💜
      </Footer>
      {/* <footer>푸터입니다.</footer> */}
    </div>
  );
}

export default App;

const initialState = [
  {
    title: "리액트 숙련",
    contents: "2강 다시보기",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "리액트 숙련 과제",
    contents: "제출하기",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "크리스마스 트리",
    contents: "주문하기",
    isDone: true,
    id: uuidv4(),
  },
];
