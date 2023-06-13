import React, { useState } from "react";
import { Link, Image, AspectRatio } from "@chakra-ui/react";

function LogoIcons({ link, purpose }) {
	// State to keep track of hover status
	const [hoverStatus, setHoverStatus] = useState(false);

	// Constants for icons, to be used in the Image component for either theme
	const githubIcon = {
		imageSrc: "/images/github-mark.svg",
		hoverImageSrc: "/images/github-mark-white.svg",
	};

	const externalLinkIcon = {
		imageSrc: "/images/external-link-black.svg",
		hoverImageSrc: "/images/external-link.svg",
	};

	return (
		// External Link wrapping an Image component
		<Link
			href={link}
			boxShadow="xl"
			_active={{ boxShadow: "none", transform: "scale(.7)" }}
			transition="all .1s"
			borderRadius="full"
			alignItems="center"
			justifyContent="center"
			aria-label={purpose === "github" ? "Github link" : "External link"}
			isExternal
		>
			{/* Depending on the purpose prop, renders one or the other icon set from the above constants */}
			{purpose === "github" ? (
				<Image
					border={!hoverStatus ? "1px solid white" : "1px solid black"}
					bg={!hoverStatus ? "white" : "black"}
					borderRadius="full"
					w={{ base: "10vw", lg: "5vw" }}
					// use of hoverStatus state to determine which icon to render
					src={!hoverStatus ? githubIcon.imageSrc : githubIcon.hoverImageSrc}
					onMouseEnter={() => {
						setHoverStatus(true);
					}}
					onMouseLeave={() => {
						setHoverStatus(false);
					}}
					alt="Github icon"
				/>
			) : (
				<Image
					border={!hoverStatus ? "1px solid black" : "1px solid white"}
					bg={!hoverStatus ? "white" : "black"}
					borderRadius="full"
					w={{ base: "10vw", lg: "5vw" }}
					// use of hoverStatus state to determine which icon to render
					src={!hoverStatus ? externalLinkIcon.imageSrc : externalLinkIcon.hoverImageSrc}
					onMouseEnter={() => {
						setHoverStatus(true);
					}}
					onMouseLeave={() => {
						setHoverStatus(false);
					}}
					alt="External link icon"
				/>
			)}
		</Link>
	);
}

export default LogoIcons;
