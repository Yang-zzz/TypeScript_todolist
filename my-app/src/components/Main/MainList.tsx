import React from "react";
import * as S from "./MainStyle";

interface Props {
  todoList: string[];
  setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
}
// 왓 인터페이스

const MainList: React.FC<Props> = ({ todoList, setTodoList }: Props) => {
  const deleteBtn = (index: number) => {
    const copy: string[] = [...todoList];
    copy.splice(index, 1);
    setTodoList(copy);
  };
  // 제네릭타입 탐구하기

  return (
    <S.ListUl>
      {todoList.map((x, index) => {
        return (
          <S.ListLi key={index}>
            <S.ListText>{x}</S.ListText>
            <S.ListLiBtnWrap>
              <S.ListEditBtn>수정</S.ListEditBtn>
              <S.ListDeleteBtn onClick={() =>{deleteBtn(index)}}>삭제</S.ListDeleteBtn>
            </S.ListLiBtnWrap>
          </S.ListLi>
        );
      })}
    </S.ListUl>
  );
};

export default MainList;
