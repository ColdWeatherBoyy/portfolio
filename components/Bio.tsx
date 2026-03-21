import { Link } from "@/components/Link";

export const Bio = () => {
	return (
		<section aria-label="About" className="flex flex-col gap-4">
			<p className="text-sm font-semibold uppercase tracking-label text-accent">
				About Me
			</p>

			<div className="space-y-6">
				<p className="text-base leading-6 text-text-secondary">
					Hey, I'm Elias. I'm a software engineer who likes working on product problems to
					balance what users actually want with what businesses actually need. Right now,
					I'm building{" "}
					<Link href="https://www.musubilabs.ai/policyai" external={true}>
						Policy AI
					</Link>{" "}
					at{" "}
					<Link href="https://www.musubilabs.ai/" external={true}>
						Musubi Labs
					</Link>
					.
				</p>
				<p className="text-base leading-6 text-text-secondary">
					I work most regularly within the JS ecosystem (e.g. Next.js, React, TypeScript,
					Node), and have been primarily frontend and product focused in my roles, but I
					enjoy working across the stack. I care a lot about the teams I work with and
					love collaborating within tech and across disciplines.
				</p>
				<p className="text-base leading-6 text-text-secondary">
					I'm also a musician, but that's a story for another time... I'm always open to
					connecting, feel free to reach out!
				</p>
			</div>
		</section>
	);
};
