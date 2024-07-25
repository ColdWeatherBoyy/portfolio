import { Box, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { themeContext } from "../context/context";

function Header() {
	// Import of themeContext to detect which color theme to use and options for theme colorways
	const { textColor, bgColor } = useContext(themeContext);

	return (
		<Flex
			width="100vw"
			bg={bgColor}
			color={textColor}
			justify="center"
			py={2}
			gap={4}
			boxShadow="dark-lg"
			minH="5vh"
		>
			<Box>Welcome!</Box>
		</Flex>
	);
}

export default Header;
