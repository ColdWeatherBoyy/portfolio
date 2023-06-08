import React, { createContext, useState } from "react";
import { light, dark } from "./themeValues";

export const themeContext = createContext();

export function ContextProvider({ children }) {
	const [alternateTheme, setAlternateTheme] = useState(true);

	return (
		<themeContext.Provider value={{ alternateTheme, setAlternateTheme, light, dark }}>
			{children}
		</themeContext.Provider>
	);
}
