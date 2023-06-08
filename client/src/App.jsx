import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import ProjectList from "./sections/ProjectList";
import { Box } from "@chakra-ui/react";

function App() {
	return (
		<Box
			width="100vw"
			height="100vh"
			// bg={{ sm: "gray.800", md: "gray.400", lg: "gray.200" }}
		>
			<Header />
			<Intro />
			<ProjectList />
			<Footer />
		</Box>
	);
}

export default App;
