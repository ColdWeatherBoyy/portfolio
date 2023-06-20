import React, { useContext } from "react";
import { themeContext } from "../context/context";
import { Flex, Link } from "@chakra-ui/react";

function Footer() {
	// Import of themeContext to detect which color theme to use and options for theme colorways
	const { textColor, bgColor, accentColor } = useContext(themeContext);

	// Function to handle resume download
	const handleResumeDownload = () => {
		const fileUrl = "/assets/Spector-ZabuskyElias_Resume.pdf";
		const link = document.createElement("a");
		link.href = fileUrl;
		link.download = "Spector-ZabuskyElias_Resume.pdf";
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
