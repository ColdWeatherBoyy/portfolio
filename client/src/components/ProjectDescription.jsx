import React, { useContext } from "react";
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { themeContext } from "../context/context";

import LogoIcons from "./LogoIcons";

function ProjectDescription({ repoLink, deployedLink, name }) {
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
						py={2}
						justify="center"
						align="center"
						boxShadow="dark-lg"
					>
						<Text textAlign="center" color={textColor} fontSize="3xl">
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
				justify="space-between"
				align={{ base: "auto", lg: "center" }}
			>
				<LogoIcons link={repoLink} purpose="github" />
				{isLargerThanLg ? (
					<Flex
						bg={bgColor}
						borderRadius="full"
						px={3}
						py={2}
						justify="center"
						align="center"
						// w={{ base: "35%", lg: "auto" }}
						maxW="65%"
						minW="45%"
						w="fit-content"
						boxShadow="dark-lg"
					>
						<Text textAlign="center" color={textColor} fontSize="3xl" lineHeight="95%">
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
