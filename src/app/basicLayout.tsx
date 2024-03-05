"use client";
import React from "react";
import { ReduxProvider } from "@/redux/provider";

function BasicLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-secondaryColor">
			<ReduxProvider>{children}</ReduxProvider>
		</div>
	);
}

export default BasicLayout;
