import React, { useContext, useEffect, useRef } from "react";
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
	Box,
} from "@chakra-ui/react";

function Intro() {
	const { setAlternateTheme, alternateTheme, light, dark } = useContext(themeContext);
	const { headerHeight, setHeaderHeight } = useContext(headerHeightContext);

	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;
	const imageSrc = alternateTheme ? dark.image : light.image;
	const accentColor = alternateTheme ? dark.accentColor : light.accentColor;

	const sectionHeaderRef = useRef(null);

	useEffect(() => {
		function handleResize() {
			setHeaderHeight(sectionHeaderRef.current.offsetHeight);
		}

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		console.log(headerHeight);
	}, [headerHeight]);

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
				<Grid
					templateColumns="repeat(2, 1fr)"
					alignItems="center"
					justifyItems="center"
					ref={sectionHeaderRef}
				>
					<CardHeader py={0}>
						<Heading size={{ base: "xl", sm: "2xl" }}>Hey!</Heading>
					</CardHeader>
					<Image
						src={imageSrc}
						onLoad={() => setHeaderHeight(sectionHeaderRef.current.offsetHeight)}
						onClick={() => setAlternateTheme(!alternateTheme)}
						alt="Picture of Elias"
						borderRadius="100%"
						maxW="25%"
						cursor="pointer"
						_hover={{
							transform: "scale(1.03)",
							boxShadow: "lg",
						}}
						_active={{
							transform: "scale(0.97)",
							boxShadow: "inset 0px 0px 10px 5px rgba(0, 0, 0, 0.75)",
						}}
						transition="all 0.2s ease-in-out"
					/>
				</Grid>
				<Divider
					color={accentColor}
					my={2}
					orientation="horizontal"
					width="90%"
					alignSelf="center"
				/>

				<CardBody py={0}>
					<Flex height="100%" direction="column" justify="space-evenly">
						<Text fontSize={{ base: "sm", md: "md" }} maxW="50%">
							Now that I have your attention...
						</Text>
						<Text alignSelf="center" fontSize={{ base: "sm", sm: "md" }}>
							I'm{" "}
							<Text as="span" color={accentColor} fontSize={{ base: "xl", sm: "3xl" }}>
								{" "}
								Elias{" "}
							</Text>
							<Text as="span" fontSize="2xs">
								(the guy in that picture up there)
							</Text>
						</Text>
						<Text fontSize="xs" alignSelf="flex-end">
							Please hire me.
						</Text>
					</Flex>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default Intro;
