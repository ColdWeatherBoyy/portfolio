import React, { useState } from "react";
import { Link, Image } from "@chakra-ui/react";

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
			_active={{ boxShadow: "none", transform: "scale(.95)" }}
			transition="all .1s"
			borderRadius="full"
			display="inline-flex"
			alignItems="center"
			justifyContent="center"
			w={{ base: "auto%", md: "fit-content", lg: "15%" }}
			transform={{ base: "scale(.75)", lg: "auto" }}
			isExternal
		>
			{purpose === "github" ? (
				<Image
					bg={!hoverStatus ? "white" : "black"}
					borderRadius="full"
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
