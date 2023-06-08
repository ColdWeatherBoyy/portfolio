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
				justifyItems="center"
				textColor={textColor}
				height="100%"
				mx={6}
				bg={bgColor}
				boxShadow="dark-lg"
				pt={5}
			>
				<CardHeader pb={0} height={headerHeight + "px"}>
					<Heading size={{ base: "2xl", sm: "3xl" }}>About Me:</Heading>
				</CardHeader>

				<Divider
					color={accentColor}
					my={4}
					orientation="horizontal"
					width="90%"
					alignSelf="center"
				/>

				<CardBody pt="0">
					<Text fontSize={{ base: "sm", md: "md" }} lineHeight={2}>
						As mentioned, I'm Elias{" "}
						<Text as="span" fontSize={{ base: "2xs", md: "xs" }}>
							(Spector-Zabusky)
						</Text>
						, a web developer working in the MERN stack, and a recent graduate of Columbia
						Engineering's Coding Boot Camp. . I'm also a musician (hover my photo for a
						surprise!). I'm passionate about building things that are useful and exciting
						and have a strong interest in backend development, databases, and AI.
					</Text>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default Intro;
