import MobileNav from "@/components/MobileNav";

const Header = () => {
	return (
		<header className="flex flex-col gap-4 pt-16 md:pt-28">
			<div className="flex items-start justify-between">
				<div className="flex flex-col gap-4">
					<h1 className="font-display text-3xl font-light tracking-tight text-text md:text-5xl md:leading-[1.05]">
						Elias Spector-Zabusky
					</h1>
					<p className="text-sm font-medium uppercase tracking-label text-text-tertiary">
						Product-Oriented Software Engineer
					</p>
				</div>

				<MobileNav />
			</div>

			<div className="h-px w-40 bg-linear-to-r from-accent/80 to-border" />
		</header>
	);
};

export default Header;
