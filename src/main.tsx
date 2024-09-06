import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/App";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<App />
		</ThemeProvider>
	</StrictMode>,
);
