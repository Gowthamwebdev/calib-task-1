import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "@/styles/global.scss";
import Navbar from "@/components/navbar/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Calibraint",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${manrope.variable} ${geistMono.variable}`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
