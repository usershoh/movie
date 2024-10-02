import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

const ProviderConfig = ({ children }) => {
  return (
    <>
      <StrictMode>
        <BrowserRouter>{children}</BrowserRouter>
      </StrictMode>
    </>
  );
};

export default ProviderConfig;
