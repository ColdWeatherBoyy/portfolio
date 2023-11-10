export const projects = [
	{
		src: "/images/RectChattitudeScreenshot.png",
		thumbnailSrc: "/images/RectChattitudeScreenshotThumbnail.png",
		name: "Chattitude",
		deployedLink: "https://chattitude-44756dc57837.herokuapp.com/",
		repoLink: "https://github.com/ColdWeatherBoyy/Chattitude",
		description:
			"Full Stack Developer. Chattitude is a global messaging app. It offers a chat page for all users, full account persistence and updateability, and chat history.",
		stack: ["React", "WebSockets", "Node.js", "MongoDB", "Express", "ChakraUI"],
		bullets: [
			"Implemented user authentication using JWT, bcrypt, and HTTP-only cookies as a learning experience.",
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
			"Full Stack Developer. FRAiME is an in-development eCommerce site, leveraging OpenAI’s text-to-image DALL-E API to allow users to generate unique art and order prints.",
		stack: [
			"React",
			"Next.js",
			"Styled Components",
			"Node.js",
			"Express",
			"MongoDB",
			"Mongoose",
			"OpenAI API",
		],
		bullets: [
			"Co-planned the backend architecture; built majority of REST API endpoints and DB models.",
			"Improved state management to decrease DB calls by moving data from global context to caching.",
		],
	},
	{
		src: "/images/RectHappiestHourScreenshot.png",
		thumbnailSrc: "/images/RectHappiestHourScreenshotThumbnail.png",
		name: "Happiest Hour",
		deployedLink: "https://happiest-hour-cb7f5c7640b4.herokuapp.com/",
		repoLink: "https://github.com/ColdWeatherBoyy/happiest-hour",
		description:
			"Backend developer for this one-page site that prompts users to submit a zip code to receive the 12 highest-rated bars that advertise happy hour on Yelp in the vicinity. Contributed to frontend logic as well.",
		stack: ["Node.js", "Express", "React", "Yelp API", "Bootstrap"],
		bullets: [
			"Built full site backend, including the call to Yelp's API.",
			"Collaborated on frontend features and the communication/data flow between client and server. Contributed in particular to the working clock.",
		],
	},
	{
		src: "/images/RectDadaScreenshot.png",
		thumbnailSrc: "/images/RectDadaScreenshotThumbnail.png",
		name: "Dada Art Museum",
		deployedLink: "https://dada-museum.herokuapp.com/",
		repoLink: "https://github.com/ColdWeatherBoyy/dada-museum",
		description:
			"Co-designed and implemented UI for a sample museum's homepage with a focus on functional features and dynamic, engaging content. Took on role of Full Stack Developer, with a focus on frontend design.",
		stack: ["Node.js", "React", "Express", "Chakra UI"],
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
			"This portfolio that you're looking at right now! Builtsolo as a place to house my projects so far.",
		stack: ["React", "Chakra UI", "Vite", "Node.js", "Express"],
	},
	{
		src: "/images/RectCitySoundsScreenshot.png",
		thumbnailSrc: "/images/RectCitySoundsScreenshotThumbnail.png",
		name: "City Sounds",
		deployedLink: "https://city-sounds-esz.herokuapp.com/",
		repoLink: "https://github.com/ColdWeatherBoyy/city-sounds",
		description:
			"Class project. Allows the user to search top songs by country, making use of Deezer's API for song data.",
		stack: ["JavaScript", "HTML", "CSS", "Node.js", "Express"],
		bullets: [
			"Took on role of tech lead/project manager to help guide week-long project from concept to completion.",
			"Post-bootcamp, individually added on a backend server for a production-ready CORS policy solution.",
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
