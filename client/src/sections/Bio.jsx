import React, { useContext } from "react";
import { themeContext, headerHeightContext } from "../context/context";
import {
	Card,
	CardHeader,
	CardBody,
	Flex,
	Text,
	Heading,
	Divider,
} from "@chakra-ui/react";

function Intro() {
	// Import of themeContext to detect which color theme to use and options for theme colorways
	const { textColor, bgColor, accentColor } = useContext(themeContext);
	// import of headerHeightContext to determine the height of the header, to be base height of CardHeading on dynamic sizing of other, paired component (Intro)
	const { headerHeight } = useContext(headerHeightContext);

	return (
		<Flex width="100%">
			<Card
				textColor={textColor}
				height="100%"
				mx={4}
				bg={bgColor}
				boxShadow="dark-lg"
				pt={2}
				pb={3}
			>
				<Flex height={headerHeight + "px"} align="center">
					<CardHeader py={0}>
						<Heading size={{ base: "xl", sm: "2xl" }}>About Me:</Heading>
					</CardHeader>
				</Flex>

				<Divider
					color={accentColor}
					my={2}
					orientation="horizontal"
					width="90%"
					alignSelf="center"
				/>

				<CardBody py="0">
					<Text fontSize={{ base: "sm", md: "md" }} lineHeight={1.75}>
						As just mentioned, I'm Elias{" "}
						<Text as="span" fontSize={{ base: "2xs", md: "xs" }}>
							(Spector-Zabusky)
						</Text>
						, a software engineer and musician. I currently work as a Software Engineer
						for Engage Partners, Inc., working on their content generation extensions
						powered by generative AI, both having extended the functionality and design of
						their main product (
						<a
							href="https://click2.ai"
							target="_blank"
							style={{ textDecoration: "underline" }}
						>
							Click2.Ai
						</a>
						), and having led the development of their customized version (
						<a
							href="https://politicalscribe.org/"
							target="_blank"
							style={{ textDecoration: "underline" }}
						>
							Political Scribe
						</a>
						). I bring strong skills in creative problem-solving and collaboration to my
						technical work, built over many years in music and other industries. Let's
						chat! My contact info is below, and you can scroll through my projects to get
						a sense of other things I've been working on.
					</Text>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default Intro;
