import NextLink from "next/link";
import { ElementType, ReactNode } from "react";

export const Link = ({
	href,
	children,
	external = true,
}: {
	href: string;
	children: ReactNode;
	external?: boolean;
}) => {
	let Element: ElementType = NextLink;
	if (external) {
		Element = "a";
	}
	return (
		<Element
			href={href}
			{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
			className="text-link hover:underline decoration-[0.5px] underline-offset-2"
		>
			{children}
		</Element>
	);
};
