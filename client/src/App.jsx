import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import Bio from "./sections/Bio";
import ProjectList from "./sections/ProjectList";
import { Box, Grid, Flex } from "@chakra-ui/react";

function App() {
	return (
		<Grid templateColumns="1fr" templateRows="auto" bg="white" gap={10}>
			<Header />
			<Flex
				width="100%"
				direction={{ base: "column", lg: "row" }}
				gap={{ base: 6, lg: 0 }}
			>
				<Intro />
				<Bio />
			</Flex>
			<ProjectList />
			<Footer />
		</Grid>
	);
}

export default App;
