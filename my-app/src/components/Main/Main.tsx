import React from "react";
import * as S from "./MainStyle";
import MainList from "./MainList";
import { useState } from "react";

interface TodoItem{
  id: number;
  text: string;
  done: boolean;
}

interface ReduxState {
  todoItems: TodoItem[];
}

const Main: React.FC = () => {
  const [selected, setSelected] = useState("Doing");
  
  const [todoValue, setTodoValue] = useState<string>(""); //todoList Text
  const [todoList, setTodoList] = useState<string[]>([]);

  const typing = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const clickAddBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const copy: string[] = [...todoList];
    copy.push(todoValue);
    setTodoList(copy);
    setTodoValue("");
  };

  console.log(todoValue);
  console.log(todoList);

  return (
    <S.MainWrap>
      <S.MainHeader>
        <S.MainInput onChange={typing} value={todoValue} />
        <S.ListAddBtn onClick={clickAddBtn}>등록</S.ListAddBtn>
      </S.MainHeader>

      <MainList todoList={todoList} setTodoList={setTodoList} />
    </S.MainWrap>
  );
};

export default Main;
