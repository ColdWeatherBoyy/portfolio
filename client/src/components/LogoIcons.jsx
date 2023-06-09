import React, { useState } from "react";
import { Link, Image } from "@chakra-ui/react";

function LogoIcons({ link, leftDirection, rightDirection, purpose }) {
	const [hoverStatus, setHoverStatus] = useState(false);

	const githubIcon = {
		imageSrc: "/images/github-mark.svg",
		hoverImageSrc: "/images/github-mark-white.svg",
	};

	const externalLinkIcon = {
		imageSrc: "/images/external-link-black.svg",
		hoverImageSrc: "/images/external-link.svg",
	};

	return (
		<Link
			href={link}
			cursor="pointer"
			boxShadow="xl"
			_active={{ boxShadow: "none", transform: "scale(.95)" }}
			transition="all .1s"
			borderRadius="full"
			w={{ base: "20%", lg: "10%" }}
			h={{ base: "20%", lg: "10%" }}
			width="fit-content"
		>
			{purpose === "github" ? (
				<Image
					mx="0"
					bg={!hoverStatus ? "white" : "black"}
					borderRadius="full"
					src={!hoverStatus ? githubIcon.imageSrc : githubIcon.hoverImageSrc}
					aspectRatio="1 / 1"
					objectFit="cover"
					onMouseEnter={() => {
						setHoverStatus(true);
					}}
					onMouseLeave={() => {
						setHoverStatus(false);
					}}
				/>
			) : (
				<Image
					mx="0"
					bg={!hoverStatus ? "white" : "black"}
					borderRadius="full"
					src={!hoverStatus ? externalLinkIcon.imageSrc : externalLinkIcon.hoverImageSrc}
					aspectRatio="1 / 1"
					objectFit="cover"
					onMouseEnter={() => {
						setHoverStatus(true);
					}}
					onMouseLeave={() => {
						setHoverStatus(false);
					}}
				/>
			)}
		</Link>
	);
}

export default LogoIcons;
