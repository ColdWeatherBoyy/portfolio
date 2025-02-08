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
	Link,
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
					<Text fontSize={{ base: "sm", md: "md" }} lineHeight={1.75} marginBottom={2}>
						As just mentioned, I'm Elias{" "}
						<Text as="span" fontSize={{ base: "2xs", md: "xs" }}>
							(Spector-Zabusky)
						</Text>
						, a software engineer and musician. I'm currently working for the American
						Thoracic Society, leading their migration from Cascade CMS to Craft CMS and
						implemting a site design refresh, as well as contributing to their custom
						SCSS, Twig, JS LAMP codebase. I was also recently a Fullstack Software
						Engineer at
						<Link
							textDecoration={"underline"}
							textUnderlineOffset={3}
							isExternal
							_hover={{ color: accentColor, textDecoration: "underline" }}
							href="https://click2.ai/"
						>
							Click2.AI
						</Link>
						, developing a Chrome extension social media content generator powered by
						OpenAI's API.{" "}
					</Text>
					<Text fontSize={{ base: "sm", md: "md" }} lineHeight={1.75}>
						Take a look at some of my personal projects and freelance work, listed below,
						to get a better sense of me. Years in music and other industries have helped
						me build strong skills in collaboration, communication, and creative
						problem-solving which I bring to all the work I do. I'm looking for my next
						opportunity to join a supportive team that values growth, creativity, and
						collaboration. Let's chat! My contact info is below.
					</Text>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default Intro;
