import React, { useContext } from "react";
import { themeContext } from "../context/context";
import { Box, Flex } from "@chakra-ui/react";

function Header() {
	const { alternateTheme, light, dark } = useContext(themeContext);

	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;
	const accentColor = alternateTheme ? dark.accentColor : light.accentColor;

	return (
		<Flex width="100%" bg={bgColor} color={textColor} justify="center" py={2} gap={4}>
			<Box>You made it!</Box>
		</Flex>
	);
}

export default Header;
