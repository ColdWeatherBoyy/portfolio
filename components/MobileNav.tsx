"use client";

import { useState, useEffect, useCallback } from "react";
import { links } from "@/lib/constants";

const MobileNav = () => {
	const [open, setOpen] = useState(false);

	const close = useCallback(() => setOpen(false), []);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") close();
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open, close]);

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				aria-label="Open navigation menu"
				className="md:hidden mt-1 flex flex-col gap-1.25 p-2 -m-2"
			>
				<span className="block h-px w-4.5 bg-text-secondary" />
				<span className="block h-px w-4.5 bg-text-secondary" />
			</button>

			<div
				className={`fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
					open ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={close}
				aria-hidden="true"
			/>

			<nav
				className={`fixed top-0 right-0 z-50 flex h-dvh w-56 flex-col gap-8 border-l border-border bg-surface px-8 py-10 transition-transform duration-300 ease-out md:hidden ${
					open ? "translate-x-0" : "translate-x-full"
				}`}
				aria-label="Mobile navigation"
			>
				<button
					onClick={close}
					aria-label="Close navigation menu"
					className="self-end p-2 -m-2 text-text-tertiary hover:text-accent transition-colors"
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
					>
						<path d="M2 2l10 10M12 2L2 12" />
					</svg>
				</button>

				<p className="text-sm font-semibold uppercase tracking-label text-accent">
					Elsewhere
				</p>

				<ul className="flex flex-col gap-4">
					{links.map((link) => (
						<li key={link.label}>
							<a
								href={link.href}
								onClick={close}
								{...(link.external
									? { target: "_blank", rel: "noopener noreferrer" }
									: {})}
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
		</>
	);
};

export default MobileNav;
