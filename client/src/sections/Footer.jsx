import React, { useContext, useEffect, useRef } from "react";
import { themeContext, headerHeightContext } from "../context/context";
import { Box, Flex, Image } from "@chakra-ui/react";

function Footer() {
	const { setAlternateTheme, alternateTheme, light, dark } = useContext(themeContext);

	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;
	const imageSrc = alternateTheme ? dark.image : light.image;
	const accentColor = alternateTheme ? dark.accentColor : light.accentColor;

	return (
		<Flex width="100%" bg={bgColor} justify="center" align="flex-end">
			<Box>{/* Your footer content goes here */}</Box>
		</Flex>
	);
}

export default Footer;
