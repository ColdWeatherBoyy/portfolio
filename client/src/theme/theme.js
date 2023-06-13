import { extendTheme } from "@chakra-ui/react";

// setting font for Chakra by extending the theme
const theme = extendTheme({
	fonts: {
		heading: "Poppins, sans-serif",
		body: "Inter, sans-serif",
	},
});

export default theme;
