import React, { useContext } from "react";
import { themeContext, headerHeightContext } from "../context/context";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Flex,
	Text,
	Heading,
	Divider,
	Image,
	Grid,
} from "@chakra-ui/react";

function Intro() {
	const { setAlternateTheme, alternateTheme, light, dark } = useContext(themeContext);
	const { headerHeight, setHeaderHeight } = useContext(headerHeightContext);

	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;
	const accentColor = alternateTheme ? dark.accentColor : light.accentColor;

	return (
		<Flex width="100%">
			<Card
				textColor={textColor}
				height="100%"
				mx={6}
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
						As mentioned, I'm Elias{" "}
						<Text as="span" fontSize={{ base: "2xs", md: "xs" }}>
							(Spector-Zabusky)
						</Text>
						, a web developer working with the MERN stack, and a recent graduate of
						Columbia Engineering's Coding Boot Camp. I'm also a musician (hover my photo
						for a surprise!). I'm passionate about building things that are useful and
						exciting and have a strong interest in backend development, databases, and AI.
					</Text>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default Intro;
