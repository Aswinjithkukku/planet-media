"use client";
import React from "react";
import { ReduxProvider } from "@/redux/provider";

function BasicLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<ReduxProvider>{children}</ReduxProvider>
		</div>
	);
}

export default BasicLayout;
