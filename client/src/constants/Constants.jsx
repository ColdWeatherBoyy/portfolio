export const projects = [
	{
		src: "/images/RectChattitudeScreenshot.png",
		thumbnailSrc: "/images/RectChattitudeScreenshotThumbnail.png",
		name: "Chattitude",
		deployedLink: "https://chattitude.eliassz.com/",
		repoLink: "https://github.com/ColdWeatherBoyy/Chattitude",
		description:
			"A messaging app with a global chat page for all users, account persistence and updateability, and chat history. ",
		stack: [
			"WebSockets",
			"React",
			"JavaScript",
			"Node.js",
			"ChakraUI",
			"MongoDB",
			"Mongoose",
			"Express.js",
		],
		bullets: [
			"Implemented user authentication using JWT, bcrypt, and HTTP-only cookies.",
			"Developed functionality for WebSocket front/back-end handshake to track active users and connections.",
			"Built systems for persisting accounts and chat history and connected them through REST API endpoints.",
		],
	},
	{
		src: "/images/RectFRAiMEScreenshot.png",
		thumbnailSrc: "/images/RectFRAiMEScreenshotThumbnail.png",
		name: "FRAiME",
		deployedLink: "https://www.fraimed.art/",
		repoLink: "https://github.com/ColdWeatherBoyy/fraime ",
		description:
			"An eCommerce site concept, leveraging OpenAI’s text-to-image DALL-E API to allow users to generate unique art and order prints.",
		stack: [
			"React",
			"Next.js",
			"JavaScript",
			"Node.js",
			"MongoDB",
			"Mongoose",
			"Express.js",
			"Styled Components",
			"AWS Amplify",
			"AWS Cognito",
		],
		bullets: [
			"Collaborated on the initial backend architecture; built majority of REST API endpoints and DB models.",
			"Improved state management to decrease DB calls by moving data from global context to caching.",
		],
	},
	{
		src: "/images/RectArtistRelationsScreenshot.png",
		thumbnailSrc: "/images/RectArtistRelationsScreenshotThumbnail.png",
		name: "Artist Relations",
		deployedLink: "https://artist-relations.eliassz.com/",
		repoLink: "https://github.com/ColdWeatherBoyy/artist_relations",
		description:
			"A streamlined web application designed to simplify the music discovery experience. Search for an artist and see a list of similar artists, ranked based on how many of the major streaming services (Spotify, Tidal, Deezer, and Last.fm) relate them to the artist you searched for.",
		stack: ["Python", "Flask", "Jinja2", "JavaScript", "HTML", "CSS"],
		bullets: [
			"Built API endpoints to authenticate and fetch necessary data from Spotify, Tidal, Deezer, and Last.fm.",
			"Implemented front-end search functionality and dynamic ranked artist display.",
		],
	},
	{
		src: "/images/RectHappiestHourScreenshot.png",
		thumbnailSrc: "/images/RectHappiestHourScreenshotThumbnail.png",
		name: "Happiest Hour",
		deployedLink: "https://happiest-hour-cb7f5c7640b4.herokuapp.com/",
		repoLink: "https://github.com/ColdWeatherBoyy/happiest-hour",
		description:
			"Single page application allowing a user to submit a zip code and receive the 12 highest rated bars in that area that advertise happy hour on Yelp.",
		stack: ["Node.js", "Express.js", "React", "JavaScript", "Bootstrap"],
		bullets: [
			"Built backend and integrated Yelp's API to fetch bar information.",
			"Collaborated on front-end implementation, particularly making the clock functional.",
		],
	},
	{
		src: "/images/RectDadaScreenshot.png",
		thumbnailSrc: "/images/RectDadaScreenshotThumbnail.png",
		name: "Dada Art Museum",
		deployedLink: "https://dada-museum.herokuapp.com/",
		repoLink: "https://github.com/ColdWeatherBoyy/dada-museum",
		description:
			"A sample museum's homepage with a focus on functional features and dynamic, engaging content.",
		stack: ["Node.js", "React", "Express.js", "Chakra UI", "Figma"],
		bullets: [
			"Built Current Exhibits and Featured Artist sections; designed reusable components for consistent site UX.",
			"Implemented random art feature, making calls to the Art Institute of Chicago’s API on click or page load.",
		],
	},
	{
		src: "/images/RectPortfolioScreenshot.png",
		thumbnailSrc: "/images/RectPortfolioScreenshotThumbnail.png",
		name: "Portfolio",
		deployedLink: "https://www.EliasSZ.com/",
		repoLink: "https://github.com/ColdWeatherBoyy/portfolio",
		description:
			"This portfolio that you're looking at right now! Built solo as a place to house my projects so far.",
		stack: ["React", "Chakra UI", "Vite", "Node.js", "Express.js", "Heroku"],
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
