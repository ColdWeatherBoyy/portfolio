import React, { useContext } from "react";
import { themeContext } from "../context/context";
import { Box, Flex } from "@chakra-ui/react";

function Header() {
	// Import of themeContext to detect which color theme to use
	const { alternateTheme, light, dark } = useContext(themeContext);

	// Constants for text and background colors, depending on the theme
	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;

	return (
		<Flex
			width="100%"
			bg={bgColor}
			color={textColor}
			justify="center"
			py={2}
			gap={4}
			boxShadow="dark-lg"
		>
			<Box>Welcome!</Box>
		</Flex>
	);
}

export default Header;
