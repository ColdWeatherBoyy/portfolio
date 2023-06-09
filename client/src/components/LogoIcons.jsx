import React, { useState } from "react";
import { Link, Box, Image } from "@chakra-ui/react";

function LogoIcons({ link, leftDirection, rightDirection, imageSrc, hoverImageSrc }) {
	const [hoverStatus, setHoverStatus] = useState(false);

	return (
		<Link
			href={link}
			position="absolute"
			bottom={3}
			left={leftDirection}
			right={rightDirection}
			cursor="pointer"
			boxShadow="xl"
			_active={{ boxShadow: "none", transform: "scale(.95)" }}
			transition="all .1s"
			borderRadius="full"
			w="10%"
		>
			<Image
				mx="0"
				bg={!hoverStatus ? "white" : "black"}
				borderRadius="full"
				src={!hoverStatus ? imageSrc : hoverImageSrc}
				aspectRatio="1 / 1"
				objectFit="cover"
				onMouseEnter={() => {
					setHoverStatus(true);
				}}
				onMouseLeave={() => {
					setHoverStatus(false);
				}}
			/>
		</Link>
	);
}

export default LogoIcons;
