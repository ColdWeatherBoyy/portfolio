import React, { useContext } from "react";
import { Flex, Text, Box, useBreakpointValue, Slide } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { themeContext } from "../context/context";
import LogoIcons from "./LogoIcons";

function ProjectDescription({
	repoLink,
	deployedLink,
	name,
	description,
	isOpen,
	onToggle,
}) {
	// Import of themeContext to detect which color theme to use
	const { textColor, bgColor } = useContext(themeContext);
	// Use of Chakra's useBreakpointValue hook to determine if the screen is larger than its lg breakpoint
	const isLargerThanLg = useBreakpointValue({ base: false, lg: true });

	return (
		<>
			{/* Conditionally rendering the display depending on size of screen. First option for small screens */}
			{isLargerThanLg ? (
				<> </>
			) : (
				<Flex w="100%" justify="center" py={2}>
					<Flex
						bg={bgColor}
						borderRadius="full"
						px={4}
						justify="center"
						align="center"
						boxShadow="dark-lg"
						gap={6}
						onClick={onToggle}
						cursor="pointer"
						_active={{ boxShadow: "none" }}
						transition="box-shadow 0.3s"
					>
						<Text textAlign="center" color={textColor} fontSize="2xl">
							{name}
						</Text>
						<InfoOutlineIcon bg="white" borderRadius="full" boxSize={8} />
					</Flex>
				</Flex>
			)}
			<Flex
				position={{ sm: "auto", lg: "absolute" }}
				zIndex={2}
				px={3}
				width="100%"
				bottom={0}
				pb={3}
				justify="space-between"
				align={{ base: "auto", lg: "center" }}
			>
				{/* Use of LogoIcons component */}
				<LogoIcons link={repoLink} purpose="github" />
				{/* Second option for large screens */}
				{isLargerThanLg ? (
					<Flex
						bg={bgColor}
						borderRadius="full"
						px={3}
						py={1}
						justify="center"
						align="center"
						maxW="65%"
						minW="45%"
						boxShadow="dark-lg"
						gap={6}
						onClick={onToggle}
						cursor="pointer"
						_active={{ boxShadow: "none" }}
						transition="box-shadow 0.3s"
					>
						<Text textAlign="center" color={textColor} fontSize="3xl" lineHeight="100%">
							{name}
						</Text>
						<InfoOutlineIcon bg="white" borderRadius="full" boxSize={8} />
					</Flex>
				) : (
					<></>
				)}
				{/* Use of LogoIcons component */}
				<LogoIcons link={deployedLink} purpose="deployed" />
			</Flex>
			{/* Chakra's built in Slide component for transition animation */}
			<Slide direction="bottom" in={isOpen} onClick={onToggle} style={{ zIndex: 10 }}>
				<Box p="40px" color={textColor} bg={bgColor} mt="4" rounded="dark-lg" shadow="md">
					{description}
				</Box>
			</Slide>
		</>
	);
}

export default ProjectDescription;
