import React, { useState, useContext } from "react";
import { themeContext } from "../context/context";
import {
	Box,
	Image,
	Heading,
	Flex,
	IconButton,
	useBreakpointValue,
	Divider,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ProjectDescription from "../components/ProjectDescription";

const ImageCarousel = () => {
	const isLargerThanLg = useBreakpointValue({ base: false, lg: true });
	const { alternateTheme, light, dark } = useContext(themeContext);

	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;
	const accentColor = alternateTheme ? dark.accentColor : light.accentColor;

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? projects.length - 1 : prevIndex - 1
		);
	};

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === projects.length - 1 ? 0 : prevIndex + 1
		);
	};

	const projects = [
		{
			src: "/images/RectFRAiMEScreenshot.png",
			name: "FRAiME",
			deployedLink: "https://github.com",
			repoLink: "https://github.com",
		},
		{
			src: "/images/RectDadaScreenshot.png",
			name: "Dada Art Museum",
			deployedLink: "https://dada-museum.herokuapp.com/",
			repoLink: "https://github.com/ColdWeatherBoyy/dada-museum",
		},
		{
			src: "/images/RectTemplateScreenshot.png",
			name: "Vite React Template",
			deployedLink: "https://coldweatherboyy.github.io/vite-template/",
			repoLink: "https://github.com/ColdWeatherBoyy/vite-template",
		},
		{
			src: "/images/RectPortfolioTempScreenshot.png",
			name: "Portfolio",
			deployedLink: "https://github.com",
			repoLink: "https://github.com",
		},
		{
			src: "/images/RectDeadInsideScreenshot.png",
			name: "Dead Inside Games",
			deployedLink: "https://dead-inside-games.herokuapp.com/",
			repoLink: "https://github.com/ColdWeatherBoyy/dead-inside-games",
		},
		{
			src: "/images/RectCitySoundsScreenshot.png",
			name: "City Sounds",
			deployedLink: "https://coldweatherboyy.github.io/city-sounds/",
			repoLink: "https://github.com/ColdWeatherBoyy/city-sounds",
		},
		{
			src: "/images/RectTweeterScreenshot.png",
			name: "Tweeter",
			deployedLink: "https://tweeter-usk.herokuapp.com/",
			repoLink: "https://github.com/BobbyCharms/tweeter",
		},
	];

	return (
		<Flex width="100%" justify="center">
			<Box
				px={2}
				py={4}
				borderRadius="xl"
				boxShadow="dark-lg"
				bg="white"
				mx={4}
				width={{ base: "100%", lg: "60%" }}
				height="fit-content"
			>
				<Flex direction="column">
					<Heading px={5} color={bgColor} size={{ base: "xl", sm: "2xl" }}>
						Projects
					</Heading>
					<Divider
						borderColor={accentColor}
						my={{ base: 3, lg: 6 }}
						orientation="horizontal"
						width="90%"
						alignSelf="center"
					/>
				</Flex>
				<Flex direction="column" width="100%" gap={{ base: 0, lg: 5 }}>
					<Flex align="center" justify="space-around" width="100%" mb={4}>
						<IconButton
							bg={bgColor}
							color={textColor}
							boxShadow="2xl"
							icon={<ChevronLeftIcon />}
							onClick={prevImage}
							size={["xs", "md", "lg"]}
							mr={["1", "2", "4"]}
							aria-label="Next Image"
							_hover={{ color: accentColor, transform: "scale(1.05)" }}
							_active={{
								color: accentColor,
								boxShadow: "inset 0px 0px 5px 5px rgba(0,0,0,0.5)",
								transform: "scale(0.95)",
							}}
						/>
						<Flex w={{ base: "100%", lg: "70%" }} justify="center" position="relative">
							<Image
								src={projects[currentImageIndex].src}
								alt={`Image ${currentImageIndex}`}
								w="100%"
								borderRadius="xl"
								boxShadow="dark-lg"
								opacity=".85"
								_hover={{ opacity: "1" }}
								_active={{ opacity: "1" }}
							/>
							{isLargerThanLg ? (
								<ProjectDescription
									repoLink={projects[currentImageIndex].repoLink}
									deployedLink={projects[currentImageIndex].deployedLink}
									name={projects[currentImageIndex].name}
								/>
							) : (
								<></>
							)}
						</Flex>
						<IconButton
							bg={bgColor}
							color={textColor}
							boxShadow="2xl"
							icon={<ChevronRightIcon />}
							onClick={nextImage}
							size={["xs", "md", "lg"]}
							ml={["1", "2", "4"]}
							aria-label="Next Image"
							_hover={{ color: accentColor, transform: "scale(1.05)" }}
							_active={{
								color: accentColor,
								boxShadow: "inset 0px 0px 5px 5px rgba(0,0,0,0.5)",
								transform: "scale(0.95)",
							}}
						/>
					</Flex>
					{isLargerThanLg ? (
						<></>
					) : (
						<ProjectDescription
							repoLink={projects[currentImageIndex].repoLink}
							deployedLink={projects[currentImageIndex].deployedLink}
							name={projects[currentImageIndex].name}
						/>
					)}
					<Flex justify="center">
						<Flex
							h="100%"
							justify="space-evenly"
							borderRadius="xl"
							p={2}
							boxShadow="inset 5px 5px 12px rgba(0, 0, 0, 0.2), inset -5px -5px 12px rgba(255, 255, 255, 0.4)"
							gap={2}
						>
							{projects.map((image, index) => (
								<Image
									key={index}
									src={image.src}
									alt={`Thumbnail ${index}`}
									aspectRatio="1 / 1"
									boxSize="8%"
									objectFit="cover"
									opacity={index === currentImageIndex ? 1 : 0.6}
									transform={index === currentImageIndex ? "scale(1)" : "scale(.9)"}
									cursor="pointer"
									borderRadius="full"
									boxShadow="xl"
									border={index === currentImageIndex ? `.5px solid ${bgColor}` : "0px"}
									_hover={{
										boxShadow: "dark-lg",
										opacity: 1,
										transform: "scale(1.05)",
									}}
									_active={{
										boxShadow: "xl",
										opacity: 0.95,
										transform: "scale(1)",
									}}
									transition="box-shadow 0.3s, border 0.3s, transform 0.3s"
									onClick={() => setCurrentImageIndex(index)}
								/>
							))}
						</Flex>
					</Flex>
				</Flex>
			</Box>
		</Flex>
	);
};

export default ImageCarousel;
