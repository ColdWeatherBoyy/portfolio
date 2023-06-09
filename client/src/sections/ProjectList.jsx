import React, { useState, useContext } from "react";
import { themeContext, headerHeightContext } from "../context/context";
import { Box, Image, Flex, IconButton, Grid } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import LogoIcons from "../components/LogoIcons";

const ImageCarousel = () => {
	const { setAlternateTheme, alternateTheme, light, dark } = useContext(themeContext);

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
			name: "Template",
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
			name: "Dead Inside Games (Class Project)",
			deployedLink: "https://dead-inside-games.herokuapp.com/",
			repoLink: "https://github.com/ColdWeatherBoyy/dead-inside-games",
		},
		{
			src: "/images/RectCitySoundsScreenshot.png",
			name: "City Sounds (Class Project)",
			deployedLink: "https://coldweatherboyy.github.io/city-sounds/",
			repoLink: "https://github.com/ColdWeatherBoyy/city-sounds",
		},
		{
			src: "/images/RectTweeterScreenshot.png",
			name: "Tweeter (Class Project)",
			deployedLink: "https://tweeter-usk.herokuapp.com/",
			repoLink: "https://github.com/BobbyCharms/tweeter",
		},
	];

	return (
		<Box
			p={5}
			borderRadius="xl"
			boxShadow="dark-lg"
			bg="white"
			mx="auto"
			width={{ base: "95%", lg: "50%" }}
			height="fit-content"
		>
			<Flex direction="column" width="100%" gap={5}>
				<Flex align="center" justify="space-around" width="100%" mb={4}>
					<IconButton
						bg={bgColor}
						color={textColor}
						boxShadow="2xl"
						icon={<ChevronLeftIcon />}
						onClick={nextImage}
						size="lg"
						ml={4}
						aria-label="Next Image"
						_hover={{ color: accentColor, transform: "scale(1.05)" }}
						_active={{
							color: accentColor,
							boxShadow: "inset 0px 0px 5px 5px rgba(0,0,0,0.75)",
							transform: "scale(0.95)",
						}}
					/>
					<Flex w="70%" justify="center" position="relative">
						<Image
							src={projects[currentImageIndex].src}
							alt={`Image ${currentImageIndex}`}
							w="100%"
							borderRadius="xl"
							boxShadow="dark-lg"
						/>
						<LogoIcons
							link={projects[currentImageIndex].repoLink}
							leftDirection="3"
							rightDirection="auto"
							imageSrc="/images/github-mark.svg"
							hoverImageSrc="/images/github-mark-white.svg"
						/>
						<LogoIcons
							link={projects[currentImageIndex].deployedLink}
							leftDirection="auto"
							rightDirection="3"
							imageSrc="/images/external-link-black.svg"
							hoverImageSrc="/images/external-link.svg"
						/>
					</Flex>
					<IconButton
						bg={bgColor}
						color={textColor}
						boxShadow="2xl"
						icon={<ChevronRightIcon />}
						onClick={nextImage}
						size="lg"
						ml={4}
						aria-label="Next Image"
						_hover={{ color: accentColor, transform: "scale(1.05)" }}
						_active={{
							color: accentColor,
							boxShadow: "inset 0px 0px 5px 5px rgba(0,0,0,0.75)",
							transform: "scale(0.95)",
						}}
					/>
				</Flex>
				<Flex
					justify="center"
					borderRadius="xl"
					p={4}
					boxShadow="inset 5px 5px 12px rgba(0, 0, 0, 0.2), inset -5px -5px 12px rgba(255, 255, 255, 0.4)"
				>
					{projects.map((image, index) => (
						<Image
							key={index}
							src={image.src}
							alt={`Thumbnail ${index}`}
							aspectRatio="1 / 1"
							boxSize="10%"
							objectFit="cover"
							mx={2}
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
							zIndex={1}
						/>
					))}
				</Flex>
			</Flex>
		</Box>
	);
};

export default ImageCarousel;
