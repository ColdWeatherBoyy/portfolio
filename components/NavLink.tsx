export const NavLink = ({
	href,
	label,
	external = false,
	download = false,
	onClick,
}: {
	href: string;
	label: string;
	external?: boolean;
	download?: boolean;
	onClick?: () => void;
}) => {
	return (
		<a
			href={href}
			{...(onClick ? { onClick } : {})}
			{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
			{...(download ? { download: true } : {})}
			className="group inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-text"
		>
			<span className="inline-block h-px w-4 bg-text-tertiary transition-all duration-300 group-hover:w-8 group-hover:bg-link" />
			<span className="transition-transform duration-300 group-hover:translate-x-0.5">
				{label}
			</span>
		</a>
	);
};
