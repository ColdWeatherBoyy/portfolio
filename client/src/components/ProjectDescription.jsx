import React, { useState, useContext } from "react";
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { themeContext } from "../context/context";

import LogoIcons from "./LogoIcons";

function ProjectDescription({ repoLink, deployedLink, name }) {
	const { setAlternateTheme, alternateTheme, light, dark } = useContext(themeContext);
	const isLargerThanLg = useBreakpointValue({ base: false, lg: true });

	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;
	const accentColor = alternateTheme ? dark.accentColor : light.accentColor;

	return (
		<>
			{isLargerThanLg ? (
				<> </>
			) : (
				<Flex w="100%" justify="center">
					<Flex
						bg={bgColor}
						opacity="1"
						borderRadius="full"
						px={4}
						py={4}
						justify="center"
						align="center"
						boxShadow="dark-lg"
					>
						<Text
							textAlign="center"
							color={textColor}
							fontSize={{ base: "xl", lg: "3xl" }}
						>
							{name}
						</Text>
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
				justify={{ base: "space-around", lg: "space-between" }}
				align={{ base: "auto", lg: "center" }}
			>
				<LogoIcons link={repoLink} purpose="github" />
				{isLargerThanLg ? (
					<Flex
						bg={bgColor}
						opacity=".9"
						borderRadius="full"
						px={4}
						py={0}
						justify="center"
						align="center"
						w={{ base: "35%", lg: "auto" }}
						maxW={{ base: "35%", lg: "75%" }}
						boxShadow="dark-lg"
					>
						<Text
							textAlign="center"
							color={textColor}
							fontSize={{ base: "xl", lg: "3xl" }}
						>
							{name}
						</Text>
					</Flex>
				) : (
					<></>
				)}

				<LogoIcons link={deployedLink} purpose="deployed" />
			</Flex>
		</>
	);
}

export default ProjectDescription;
