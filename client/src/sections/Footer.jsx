import React, { useContext } from "react";
import { themeContext } from "../context/context";
import { Button, Flex, Link } from "@chakra-ui/react";

function Footer() {
	const { alternateTheme, light, dark } = useContext(themeContext);

	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;
	const accentColor = alternateTheme ? dark.accentColor : light.accentColor;

	const handleResumeDownload = () => {
		const fileUrl = "/images/biopic.jpg";
		const link = document.createElement("a");
		link.href = fileUrl;
		link.download = "biopic.jpg";
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
