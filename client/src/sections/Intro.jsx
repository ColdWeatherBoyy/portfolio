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
		<Flex>
			<Card
				textColor={textColor}
				width={{ base: "100%", md: "50%", lg: "40%" }}
				mx={6}
				p={5}
				bg={bgColor}
				boxShadow="dark-lg"
			>
				<Grid templateColumns="repeat(2, 1fr)" alignItems="center" justifyItems="center">
					<CardHeader pb={0}>
						<Heading size={{ base: "2xl", sm: "4xl" }}>Hey!</Heading>
					</CardHeader>
					<Image
						src={imageSrc}
						onMouseEnter={() => setAlternateTheme(!alternateTheme)}
						onMouseLeave={() => setAlternateTheme(!alternateTheme)}
						onTouchStart={() => setAlternateTheme(!alternateTheme)}
						alt="Picture of Elias"
						borderRadius="50%"
						maxW="80%"
					/>
				</Grid>
				<Divider my={4} orientation="horizontal" width="90%" alignSelf="center" />

				<CardBody pt={0}>
					<Text fontSize={{ base: "sm", md: "md" }} maxW="50%">
						Now that I have your attention...
					</Text>
					<Heading textAlign="center" size={{ base: "md", sm: "lg" }} py={4}>
						I'm Elias <Text fontSize="2xs">(the guy in that picture up there)</Text>
					</Heading>
					<Text fontSize="xs" textAlign="right">
						Please hire me.
					</Text>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default Intro;
