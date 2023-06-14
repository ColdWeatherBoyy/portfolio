import React, { createContext, useState } from "react";
// Values for light and dark themes, stored externally for cleanliness
import { light, dark } from "../constants/themeValues";

// Creation of context for theme and header height
export const themeContext = createContext();
export const headerHeightContext = createContext();

// ContextProvider component to wrap around the entire app, with state for theme and header height
export function ContextProvider({ children }) {
	const [alternateTheme, setAlternateTheme] = useState(true);
	const [headerHeight, setHeaderHeight] = useState("");

	// Constants for text and background colors, depending on the theme
	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;
	const imageSrc = alternateTheme ? dark.image : light.image;
	const accentColor = alternateTheme ? dark.accentColor : light.accentColor;

	return (
		<themeContext.Provider
			value={{
				alternateTheme,
				setAlternateTheme,
				textColor,
				bgColor,
				imageSrc,
				accentColor,
				light,
				dark,
			}}
		>
			<headerHeightContext.Provider value={{ headerHeight, setHeaderHeight }}>
				{children}
			</headerHeightContext.Provider>
		</themeContext.Provider>
	);
}
