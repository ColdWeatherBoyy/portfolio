export const projects = [
	{
		src: "/images/RectPhysicalTherapyTimersScreenshot.png",
		thumbnailSrc: "/images/RectPhysicalTherapyTimersScreenshotThumbnail.png",
		name: "PT Timers",
		deployedLink: "https://physicaltherapytimers.eliassz.com/",
		repoLink: "https://github.com/ColdWeatherBoyy/pt-timer",
		description:
			"Built-to-spec app for physical therapy patients to save custom exercise timers by length and consecutive repetitions, deployed with AWS Amplify.",
		stack: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"React",
			"AWS Cognito",
			"AWS DynamoDB",
			"AWS Amplify",
		],
		bullets: [
			"Implemented a state machine for timer status, enhancing UI/UX with dynamic, real-time audio-visual feedback.",
			"Integrated AWS Cognito for authentication and AWS DynamoDB for secure, per-user data management.",
		],
	},
	{
		src: "/images/RectChattitudeScreenshot.png",
		thumbnailSrc: "/images/RectChattitudeScreenshotThumbnail.png",
		name: "Chattitude",
		deployedLink: "https://chattitude.eliassz.com/",
		repoLink: "https://github.com/ColdWeatherBoyy/Chattitude",
		description:
			"A messaging app with a global chat for all users, account persistence and updateability, and chat history, deployed with Heroku.",
		stack: [
			"React",
			"JavaScript",
			"ChakraUI",
			"WebSockets",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Mongoose",
			"Heroku",
		],
		bullets: [
			"Used JWT, bcrypt, and HTTP-only cookies to build a secure, scalable, and XSS-resistant authentication system.",
			"Engineered WebSocket front/back-end handshake to monitor active users and connections in real-time.",
		],
	},
	{
		src: "/images/RectArtistRelationsScreenshot.png",
		thumbnailSrc: "/images/RectArtistRelationsScreenshotThumbnail.png",
		name: "Artist Relations",
		deployedLink: "https://artist-relations.eliassz.com/",
		repoLink: "https://github.com/ColdWeatherBoyy/artist_relations",
		description:
			"Designed to simplify the music discovery experience, this app allows you to search for an artist and see a list of similar artists, ranked by how many major streaming services relate them to the artist you searched for; deployed with Heroku.",
		stack: ["Python", "Flask", "Jinja2", "JavaScript", "Heroku"],
		bullets: [
			"Integrated Spotify, Tidal, Deezer, and Last.fm authenticated API endpoints to fetch artist data.",
			"Implemented search and discovery UI with Jinja2 templating and Flask routing.",
		],
	},
	{
		src: "/images/RectFRAiMEScreenshot.png",
		thumbnailSrc: "/images/RectFRAiMEScreenshotThumbnail.png",
		name: "FRAiME",
		deployedLink: "https://www.fraimed.art/",
		repoLink: "https://github.com/ColdWeatherBoyy/fraime ",
		description:
			"An eCommerce site concept, leveraging OpenAI’s text-to-image DALL-E API to allow users to generate unique art and order prints, deployed with AWS Amplify.",
		stack: [
			"Next.js",
			"React",
			"JavaScript",
			"Styled Components",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Mongoose",
			"AWS Cognito",
			"AWS Amplify",
		],
		bullets: [
			"Collaborated on the initial backend architecture; built majority of REST API endpoints and DB models.",
			"Improved state management to optimize DB usage by caching global data for faster access.",
		],
	},
	{
		src: "/images/RectDadaScreenshot.png",
		thumbnailSrc: "/images/RectDadaScreenshotThumbnail.png",
		name: "Dada Art Museum",
		deployedLink: "https://dada-museum.herokuapp.com/",
		repoLink: "https://github.com/ColdWeatherBoyy/dada-museum",
		description:
			"A sample site for a museum's homepage with a focus on responsive design, interactive features, and dynamic content, deployed with Heroku.",
		stack: [
			"React",
			"JavaScript",
			"Chakra UI",
			"Node.js",
			"Express.js",
			"Figma",
			"Heroku",
		],
		bullets: [
			"Designed reusable components for consistent site UX across desktop and mobile devices.",
			"Implemented random art feature, making calls to the Art Institute of Chicago’s API on click and page load.",
		],
	},
];

// Constants for icons, to be used in the Image component for either theme
export const logoIcons = {
	githubIcon: {
		imageSrc: "/images/github-mark.svg",
		hoverImageSrc: "/images/github-mark-white.svg",
		border: "1px solid white",
		hoverBorder: "1px solid black",
	},
	externalLinkIcon: {
		imageSrc: "/images/external-link-black.svg",
		hoverImageSrc: "/images/external-link.svg",
		border: "1px solid black",
		hoverBorder: "1px solid white",
	},
};
