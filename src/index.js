import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import "./css/style.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
		<h2>hello index component</h2>
	</React.StrictMode>
);
