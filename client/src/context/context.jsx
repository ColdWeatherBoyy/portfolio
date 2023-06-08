import React, { createContext, useState } from "react";
import { light, dark } from "./themeValues";

export const themeContext = createContext();
export const headerHeightContext = createContext();

export function ContextProvider({ children }) {
	const [alternateTheme, setAlternateTheme] = useState(true);
	const [headerHeight, setHeaderHeight] = useState("");

	return (
		<themeContext.Provider value={{ alternateTheme, setAlternateTheme, light, dark }}>
			<headerHeightContext.Provider value={{ headerHeight, setHeaderHeight }}>
				{children}
			</headerHeightContext.Provider>
		</themeContext.Provider>
	);
}
