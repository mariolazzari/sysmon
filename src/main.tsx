import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";

const root = document.getElementById("root") as HTMLElement;
createRoot(root).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
  </ThemeProvider>
);
