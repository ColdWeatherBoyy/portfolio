import React, { useContext } from "react";
import { themeContext } from "../context/context";
import { Flex, Link } from "@chakra-ui/react";

function Footer() {
	// Import of themeContext to detect which color theme to use
	const { alternateTheme, light, dark } = useContext(themeContext);

	// Constants for text and background colors, depending on the theme
	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;
	const accentColor = alternateTheme ? dark.accentColor : light.accentColor;

	// Function to handle resume download
	const handleResumeDownload = () => {
		const fileUrl = "/assets/EliasSZ_Resume_Portfolio.pdf";
		const link = document.createElement("a");
		link.href = fileUrl;
		link.download = "EliasSZ_Resume_Portfolio.pdf";
		link.click();
	};

	return (
		<Flex
			width="100%"
			bg={bgColor}
			color={textColor}
			py={2}
			boxShadow="dark-lg"
			justify="center"
		>
			<Flex gap={4} width="30%" justify="space-evenly">
				<Link
					isExternal
					href="https://www.github.com/coldweatherboyy"
					_hover={{ color: accentColor, textDecoration: "underline" }}
				>
					Github
				</Link>
				<Link
					isExternal
					href="https://www.linkedin.com/in/elias-sz/"
					_hover={{ color: accentColor, textDecoration: "underline" }}
				>
					LinkedIn
				</Link>
				<Link
					isExternal
					href="mailto:elias.spector.zabusky@gmail.com?subject=Wow, what a cool portfolio, Elias!"
					_hover={{ color: accentColor, textDecoration: "underline" }}
				>
					Email
				</Link>
				<Link
					onClick={handleResumeDownload}
					_hover={{ color: accentColor, textDecoration: "underline" }}
				>
					Resume
				</Link>
			</Flex>
		</Flex>
	);
}

export default Footer;
