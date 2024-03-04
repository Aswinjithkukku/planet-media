import type { Metadata } from "next";
import { DM_Serif_Display, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import BasicLayout from "./basicLayout";

const serif_init = DM_Serif_Display({
	subsets: ["latin"],
	display: "swap",
	weight: ["400"],
	variable: "--font-dm-serif-display",
});
const code_init = Source_Code_Pro({
	subsets: ["latin"],
	display: "swap",
	weight: ["400"],
	variable: "--font-source-code-pro",
});
const keywordsList = [
	"skincare",
	"beauty",
	"natural skincare",
	"organic skincare",
	"skincare products",
	"pure skincare",
	"skincare routine",
	"skincare essentials",
	"skincare tips",
	"skincare treatments",
];
export const metadata: Metadata = {
	title: {
		default: `${process.env.NEXT_PUBLIC_PRIMARY_TTILE}`,
		template: `%s | ${process.env.NEXT_PUBLIC_PRIMARY_TTILE}`,
	},
	keywords: keywordsList,
	description: `Discover the purest skincare solutions with Pure Beauty Skin Care. Explore our range of ${keywordsList.join(
		", "
	)} and achieve radiant, healthy skin naturally.`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${serif_init.variable} ${code_init.variable}`}>
				<BasicLayout children={children} />
			</body>
		</html>
	);
}
