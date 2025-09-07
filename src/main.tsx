import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./pages/CounterPage";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>
);
