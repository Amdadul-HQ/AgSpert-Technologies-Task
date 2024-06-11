import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContextComponent from "./Context/ContextComponent";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextComponent>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </ContextComponent>
  </React.StrictMode>
);
