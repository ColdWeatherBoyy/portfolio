const Bio = () => {
	return (
		<section aria-label="About" className="flex flex-col gap-4">
			<p className="text-sm font-semibold uppercase tracking-label text-accent">About</p>

			<div className="space-y-6">
				<p className="text-base leading-6 text-text-secondary">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur.
				</p>
				<p className="text-base leading-6 text-text-secondary">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>
		</section>
	);
};

export default Bio;
