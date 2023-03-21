import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { HeaderTitle, HeaderWrap } from "./HeaderStyle";

const Header:React.FC = () => {
  


  return (
    <HeaderWrap>
      <HeaderTitle>
        My ToDo List
      </HeaderTitle>
    </HeaderWrap>
  )
};

export default Header;
