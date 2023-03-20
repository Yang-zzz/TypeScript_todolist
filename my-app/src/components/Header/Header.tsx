import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCounter, minusCounter } from "../Store/module";
import { RootState } from "../Store/Store";
import { HeaderTitle, HeaderWrap } from "./HeaderStyle";

const Header:React.FC = () => {
  
  const count = useSelector((state:RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <HeaderWrap>
      <HeaderTitle>
        My ToDo List
        {count}
        <button onClick={() => dispatch(addCounter(5))}>+</button>
        <button onClick={() => dispatch(minusCounter(5))}>-</button>
      </HeaderTitle>
    </HeaderWrap>
  )
};

export default Header;
