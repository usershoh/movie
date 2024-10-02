import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

const ProviderConfig = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>{children}</BrowserRouter>
        </QueryClientProvider>
      </StrictMode>
    </>
  );
};

export default ProviderConfig;
