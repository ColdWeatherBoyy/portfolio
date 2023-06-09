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
			p={4}
			borderRadius="xl"
			boxShadow="dark-lg"
			bg="white"
			mx="auto"
			width={{ base: "95%", lg: "50%" }}
			height="fit-content"
		>
			<Flex direction="column" justify="space-around" width="100%">
				<Flex align="center" justify="space-around" width="100%" mb={4}>
					<IconButton
						bg={bgColor}
						color={textColor}
						boxShadow="dark-lg"
						icon={<ChevronLeftIcon />}
						onClick={prevImage}
						size="lg"
						mr={4}
						aria-label="Previous Image"
						_hover={{ color: accentColor }}
						_active={{
							color: accentColor,
							boxShadow: "inset 0px 0px 10px 5px rgba(0,0,0,0.75)",
							transform: "scale(0.9)",
						}}
					/>

					<Image
						src={images[currentImageIndex]}
						alt={`Image ${currentImageIndex}`}
						w="75%"
						h="25%"
						borderRadius="xl"
						boxShadow="dark-lg"
					/>
					<IconButton
						bg={bgColor}
						color={textColor}
						boxShadow="dark-lg"
						icon={<ChevronRightIcon />}
						onClick={nextImage}
						size="lg"
						ml={4}
						aria-label="Next Image"
						_hover={{ color: accentColor }}
						_active={{
							color: accentColor,
							boxShadow: "inset 0px 0px 10px 5px rgba(0,0,0,0.75)",
							transform: "scale(0.9)",
						}}
					/>
				</Flex>
				<Flex justify="center">
					{images.map((image, index) => (
						<Image
							key={index}
							src={image}
							alt={`Thumbnail ${index}`}
							boxSize="50px"
							objectFit="cover"
							mx={2}
							opacity={index === currentImageIndex ? 1 : 0.6}
							cursor="pointer"
							borderRadius="full"
							boxShadow="md"
							_hover={{ boxShadow: "xl" }}
							transition="box-shadow 0.3s"
							onClick={() => setCurrentImageIndex(index)}
						/>
					))}
				</Flex>
			</Flex>
		</Box>
	);
};

export default ImageCarousel;
