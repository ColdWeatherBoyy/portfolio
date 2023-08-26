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
						As just mentioned, I'm Elias
						<Text as="span" fontSize={{ base: "2xs", md: "xs" }}>
							(Spector-Zabusky)
						</Text>
						, a developer and musician working with the MERN stack, with an interest in
						backend development, full stack development, and product work. I'm a graduate
						of Columbia Engineering's Coding Boot Camp with experience in project
						management, operations, and the arts. I have strong skills in creative
						problem-solving and collaboration, partnered with a focus on flexibility,
						meticulousness, and iteration – skills built many years in music and other
						industries. I'm currently looking for a full-time position as a backend
						developer or full stack developer, though I'm open to other titles and roles.
						Let's chat! Contact info is below, and you can scroll through my projects to
						get a sense of what I've been working on.
					</Text>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default Intro;
