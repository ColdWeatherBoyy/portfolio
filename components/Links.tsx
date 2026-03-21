import { links } from "@/lib/constants";

const Links = () => {
	return (
		<nav aria-label="External links" className="flex flex-col gap-4">
			<p className="text-sm font-semibold uppercase tracking-label text-accent">
				Elsewhere
			</p>

			<ul className="flex flex-col gap-4">
				{links.map((link) => (
					<li key={link.label}>
						<a
							href={link.href}
							{...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
							{...(link.label === "Resume" ? { download: true } : {})}
							className="group inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-text"
						>
							<span className="inline-block h-px w-4 bg-text-tertiary transition-all duration-300 group-hover:w-8 group-hover:bg-accent" />
							<span className="transition-transform duration-300 group-hover:translate-x-0.5">
								{link.label}
							</span>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Links;
