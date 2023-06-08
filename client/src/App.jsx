import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import Bio from "./sections/Bio";
import ProjectList from "./sections/ProjectList";
import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";

function App() {
	return (
		<Grid
			templateColumns="1fr"
			templateRows="repeat(4, 1fr)"
			width="100vw"
			height="100vh"
		>
			<GridItem>
				<Header />
			</GridItem>
			<Flex width="100%" direction={{ sm: "column", lg: "row" }} gap={{ sm: 6, lg: 0 }}>
				<Intro width={{ sm: "100%", lg: "50vw" }} />
				<Bio width={{ sm: "100%", lg: "50vw" }} />
			</Flex>
			<GridItem>
				<ProjectList />
			</GridItem>
			<GridItem>
				<Footer />
			</GridItem>
		</Grid>
	);
}

export default App;
