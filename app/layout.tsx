import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	display: "swap",
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Elias Spector-Zabusky — Personal Page",
	description: "Personal page of Elias Spector-Zabusky.",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en" className={`${inter.variable} ${poppins.variable}`}>
			<body className="min-h-dvh">{children}</body>
		</html>
	);
};

export default RootLayout;
