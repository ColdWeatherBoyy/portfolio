import React, { useState, useContext } from "react";
import { themeContext, headerHeightContext } from "../context/context";
import { Box, Image, Flex, IconButton, Grid } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ImageCarousel = () => {
	const { setAlternateTheme, alternateTheme, light, dark } = useContext(themeContext);

	const textColor = alternateTheme ? dark.text : light.text;
	const bgColor = alternateTheme ? dark.bg : light.bg;
	const accentColor = alternateTheme ? dark.accentColor : light.accentColor;

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const images = [
		"/images/RectFRAiMEScreenshot.png",
		"/images/RectDadaScreenshot.png",
		"/images/RectTemplateScreenshot.png",
		"/images/RectPortfolioTempScreenshot.png",
		"/images/RectDeadInsideScreenshot.png",
		"/images/RectCitySoundsScreenshot.png",
		"/images/RectTweeterScreenshot.png",
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

					<Image
						src={images[currentImageIndex]}
						alt={`Image ${currentImageIndex}`}
						w="70%"
						borderRadius="xl"
						boxShadow="dark-lg"
					/>
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
					{images.map((image, index) => (
						<Image
							key={index}
							src={image}
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
