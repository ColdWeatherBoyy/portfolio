export const Footer = () => {
	return (
		<footer className="mt-auto flex flex-col gap-4 pb-12">
			<div className="h-px w-full bg-border" />
			<p className="text-xs tracking-wide text-text-tertiary">
				&copy; {new Date().getFullYear()} Elias Spector-Zabusky
			</p>
		</footer>
	);
};
