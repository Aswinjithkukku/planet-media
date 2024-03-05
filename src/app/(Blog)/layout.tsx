import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
