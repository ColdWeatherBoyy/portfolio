import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import Bio from "./sections/Bio";
import ProjectList from "./sections/ProjectList";
import { Box, Grid, Flex } from "@chakra-ui/react";

function App() {
	return (
		<Grid
			templateColumns="1fr"
			templateRows=".1fr .5fr 1.75fr .1fr"
			width="100vw"
			height="100vh"
			bg="white"
			gap={6}
		>
			<Header />
			<Flex
				width="100%"
				direction={{ base: "column", lg: "row" }}
				gap={{ base: 6, lg: 0 }}
			>
				<Intro width={{ sm: "100%", lg: "50vw" }} />
				<Bio width={{ sm: "100%", lg: "50vw" }} />
			</Flex>
			<ProjectList />
			{/* <Footer /> */}
		</Grid>
	);
}

export default App;
