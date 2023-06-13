import React, { useState, useContext, useEffect } from "react";
import {
	Flex,
	Text,
	Box,
	useBreakpointValue,
	useDisclosure,
	Slide,
} from "@chakra-ui/react";
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
	const { alternateTheme, light, dark } = useContext(themeContext);
	const isLargerThanLg = useBreakpointValue({ base: false, lg: true });

	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;

	return (
		<>
			{isLargerThanLg ? (
				<> </>
			) : (
				<Flex w="100%" justify="center">
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
						<Text textAlign="center" color={textColor} fontSize="3xl">
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
				<LogoIcons link={repoLink} purpose="github" />
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

				<LogoIcons link={deployedLink} purpose="deployed" />
			</Flex>
			<Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
				<Box p="40px" color={textColor} bg={bgColor} mt="4" rounded="dark-lg" shadow="md">
					{description}
				</Box>
			</Slide>
		</>
	);
}

export default ProjectDescription;
