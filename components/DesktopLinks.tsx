import { links } from "@/lib/constants";
import { NavLink } from "@/components/NavLink";

export const DesktopLinks = () => {
	return (
		<nav aria-label="External links" className="flex flex-col gap-4">
			<p className="text-sm font-semibold uppercase tracking-label text-accent">
				Me, Elsewhere
			</p>

			<ul className="flex flex-col gap-4">
				{links.map((link) => (
					<li key={link.label}>
						<NavLink
							href={link.href}
							label={link.label}
							external={link.external}
							download={link.label === "Resume"}
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};
