import React, { useContext, useEffect, useRef } from "react";
import { themeContext, headerHeightContext } from "../context/context";
import { Box, Flex, Image } from "@chakra-ui/react";

function Header() {
	const { setAlternateTheme, alternateTheme, light, dark } = useContext(themeContext);

	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;
	const imageSrc = alternateTheme ? dark.image : light.image;
	const accentColor = alternateTheme ? dark.accentColor : light.accentColor;

	return <Box width="100%" bg={bgColor}></Box>;
}

export default Header;
