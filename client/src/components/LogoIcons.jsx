import React, { useState } from "react";
import { Link, Image, AspectRatio } from "@chakra-ui/react";

function LogoIcons({ link, purpose }) {
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
			boxShadow="xl"
			_active={{ boxShadow: "none", transform: "scale(.7)" }}
			transition="all .1s"
			borderRadius="full"
			alignItems="center"
			justifyContent="center"
			isExternal
			// transform={{ base: "scale(.5)", lg: "scale(.8)" }}
		>
			{purpose === "github" ? (
				<Image
					bg={!hoverStatus ? "white" : "black"}
					borderRadius="full"
					w={{ base: "10vw", lg: "5vw" }}
					src={!hoverStatus ? githubIcon.imageSrc : githubIcon.hoverImageSrc}
					onMouseEnter={() => {
						setHoverStatus(true);
					}}
					onMouseLeave={() => {
						setHoverStatus(false);
					}}
				/>
			) : (
				<Image
					bg={!hoverStatus ? "white" : "black"}
					borderRadius="full"
					w={{ base: "10vw", lg: "5vw" }}
					src={!hoverStatus ? externalLinkIcon.imageSrc : externalLinkIcon.hoverImageSrc}
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
