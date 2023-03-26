import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo, ToDosState } from "../Redux/module";
import { HeaderTitle, HeaderWrap } from "./HeaderStyle";

const Header:React.FC = () => {
  
  const todo = useSelector((state:ToDosState) => state);
  const disaptch = useDispatch();

  console.log(todo.todoItems);
  // 마찬가지로 undefined가 나오고 있다. 아마 store에 타입 지정을 안해서 그렇다고 나오는데, 관련하여 공부를 더 해봐야 될 것 같다.

  return (
    <>
    <HeaderWrap>
      <HeaderTitle>
        My ToDo List
        <button onClick={() => {disaptch(addTodo({id: Date.now(), text: "추가됩니다.", done: false}))}}>추가합니다</button>
      </HeaderTitle>
    </HeaderWrap>
    </>
  )
};

export default Header;
