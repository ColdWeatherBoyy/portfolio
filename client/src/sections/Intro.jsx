import React, { useContext, useEffect, useRef } from "react";
import { themeContext, headerHeightContext } from "../context/context";
import {
	Card,
	CardHeader,
	CardBody,
	Flex,
	Text,
	Heading,
	Divider,
	Image,
	Grid,
} from "@chakra-ui/react";

function Intro() {
	// Import of themeContext to detect which color theme to use and options for theme colorways
	const { setAlternateTheme, alternateTheme, textColor, bgColor, imageSrc, accentColor } =
		useContext(themeContext);
	// import of headerHeightContext to determine the height of this card header and pass it to the other card header in Bio
	const { setHeaderHeight } = useContext(headerHeightContext);

	// Ref for this card header, to determine its height
	const sectionHeaderRef = useRef(null);

	// UseEffect on page load to detect and set context for header height
	useEffect(() => {
		function handleResize() {
			setHeaderHeight(sectionHeaderRef.current.offsetHeight);
		}

		// call handleResize on page load
		handleResize();

		// event listener for window resize, which would change the height of the header
		window.addEventListener("resize", handleResize);

		// cleanup function to remove event listener
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// useEffect to test headerHeight context
	// useEffect(() => {
	// 	console.log(headerHeight);
	// }, [headerHeight]);

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
				width="100%"
			>
				<Grid
					templateColumns="repeat(2, 1fr)"
					alignItems="center"
					justifyItems="center"
					ref={sectionHeaderRef}
				>
					<CardHeader py={0}>
						<Heading size={{ base: "2xl", sm: "3xl" }}>Hey there!</Heading>
					</CardHeader>
					<Flex maxW={{ base: "35%", lg: "35%" }} direction="column" align="flex-end">
						<Image
							src={imageSrc}
							// fail safe to set headerHeight to height of header if image loads late and changes it
							onLoad={() => setHeaderHeight(sectionHeaderRef.current.offsetHeight)}
							// onClick to toggle theme
							onClick={() => setAlternateTheme(!alternateTheme)}
							alt="Picture of Elias"
							borderRadius="100%"
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
						<Text fontSize="2xs" alignSelf="flex-end">
							Click me!
						</Text>
					</Flex>
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
							You made it! Thanks for taking the time to visit my portfolio. Now that I
							have your attention...
						</Text>
						<Text alignSelf="center" fontSize={{ base: "sm", sm: "md" }}>
							I'm{" "}
							<Text as="b" fontSize={{ base: "xl", sm: "3xl" }}>
								{" "}
								Elias{" "}
							</Text>
							<Text as="span" fontSize="2xs">
								(the guy in that picture up there)
							</Text>
						</Text>
						<Text fontSize={{ base: "sm", md: "md" }} alignSelf="flex-end" maxW="50%">
							I'm friendly, and I'd love to chat with you - about tech, music, or anything
							else. Get in touch!
						</Text>
					</Flex>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default Intro;
