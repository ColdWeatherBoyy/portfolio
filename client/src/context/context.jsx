import React, { createContext, useState } from "react";
// Values for light and dark themes, stored externally for cleanliness
import { light, dark } from "./themeValues";

// Creation of context for theme and header height
export const themeContext = createContext();
export const headerHeightContext = createContext();

// ContextProvider component to wrap around the entire app, with state for theme and header height
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
