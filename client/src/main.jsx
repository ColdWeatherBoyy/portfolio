import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/poppins/400.css";
import "@fontsource/inter/400.css";
import theme from "./theme/theme.js";
import { ContextProvider } from "./context/context";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<ChakraProvider theme={theme}>
				<RouterProvider router={router} />
			</ChakraProvider>
		</ContextProvider>
	</React.StrictMode>
);
