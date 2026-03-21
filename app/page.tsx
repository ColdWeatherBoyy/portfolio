import { Header } from "@/components/Header";
import { Bio } from "@/components/Bio";
import { DesktopLinks } from "@/components/DesktopLinks";
import { Footer } from "@/components/Footer";

const Home = () => {
	return (
		<div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 md:gap-24 md:px-10">
			<Header />

			<div className="md:grid md:grid-cols-3 md:gap-32">
				<main className="md:col-span-2">
					<Bio />
				</main>

				<aside className="hidden md:block md:col-span-1">
					<DesktopLinks />
				</aside>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
