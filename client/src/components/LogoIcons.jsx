import React, { useState } from "react";
import { Link, Image } from "@chakra-ui/react";
import { logoIcons } from "../constants/Constants";

function LogoIcons({ link, purpose }) {
	// State to keep track of hover status
	const [hoverStatus, setHoverStatus] = useState(false);

	// Depending on the purpose prop, defines icon constant one or the other icon set from the imported constants
	const icon = purpose === "github" ? logoIcons.githubIcon : logoIcons.externalLinkIcon;

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
			<Image
				border={!hoverStatus ? "1px solid white" : "1px solid black"}
				bg={!hoverStatus ? "white" : "black"}
				borderRadius="full"
				w={{ base: "10vw", lg: "5vw" }}
				// use of hoverStatus state to determine which icon set to render, utilizing constant above
				src={!hoverStatus ? icon.imageSrc : icon.hoverImageSrc}
				onMouseEnter={() => {
					setHoverStatus(true);
				}}
				onMouseLeave={() => {
					setHoverStatus(false);
				}}
				alt="Github icon"
			/>
		</Link>
	);
}

export default LogoIcons;
