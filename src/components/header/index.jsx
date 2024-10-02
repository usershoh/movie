import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between w-[80%] m-auto py-[20px]">
      <h2 className="text-[40px] cursor-pointer" onClick={() => navigate("/")}>
        Logo
      </h2>
      <div className="flex items-center">
        <button className="text-[22px] border rounded-l-[5px] w-[60px]">
          en
        </button>
        <button className="text-[22px] border rounded-r-[5px] w-[60px]">
          ru
        </button>
      </div>
    </header>
  );
};

export default Header;
