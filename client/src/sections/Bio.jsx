import React, { useContext } from "react";
import { themeContext } from "../context/context";
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

	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;
	const imageSrc = alternateTheme ? dark.image : light.image;

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
				<CardHeader pb={0}>
					<Heading size={{ base: "2xl", sm: "4xl" }}>About Me:</Heading>
				</CardHeader>

				<Divider my={4} orientation="horizontal" width="90%" alignSelf="center" />

				<CardBody pt={{ sm: 0, lg: 6 }}>
					<Text fontSize={{ base: "sm", md: "md" }} lineHeight={2}>
						As mentioned, I'm Elias{" "}
						<Text as="span" fontSize={{ base: "2xs", md: "2xs" }}>
							(Spector-Zabusky)
						</Text>
						. I'm a web developer and digital native working in the MERN stack and a
						professional musician (hover my photo for a surprise!). I'm a recent graduate
						of Columbia Engineering's Coding Boot Camp with a background in operations and
						project management. I'm passionate about building things that are useful and
						exciting and have a strong interest in backend development, databases, and AI.
					</Text>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default Intro;
