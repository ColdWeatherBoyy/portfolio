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
						maxW="35%"
					/>
				</Grid>
				<Divider my={4} orientation="horizontal" width="90%" alignSelf="center" />

				<CardBody pt={0}>
					<Flex height="100%" direction="column" justify="space-between">
						<Text fontSize={{ base: "sm", md: "md" }} maxW="50%">
							Now that I have your attention...
						</Text>
						<Heading textAlign="center" size={{ base: "lg", sm: "xl" }} py={4}>
							I'm{" "}
							<Text as="span" color={accentColor}>
								Elias{" "}
							</Text>
							<Text as="span" fontSize="2xs">
								(the guy in that picture up there)
							</Text>
						</Heading>
						<Text fontSize="xs" textAlign="right">
							Please hire me.
						</Text>
					</Flex>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default Intro;
