"use client";

import BtnLoader from "@/shared/BtnLoader";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import React, { useState } from "react";

const LoginHandler = () => {
	const [data, setData] = useState({
		username: "",
		password: "",
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();

			setIsLoading(true);
			setError("");
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/wp/v2/comments`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);
			const result = await response.json();

			if (!result.ok) {
				setError(result.message);
			}
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setError("Something went wrong!!");
		}
	};
	return (
		<div className="py-10">
			<form onSubmit={handleSubmit} className="space-y-14">
				<Input
					onChange={(e) =>
						setData({ ...data, username: e.target.value })
					}
					value={data.username}
					title="username"
					type="text"
				>
					USERNAME
				</Input>
				<Input
					onChange={(e) =>
						setData({ ...data, password: e.target.value })
					}
					value={data.password}
					title="password"
					type="password"
				>
					PASSWORD
				</Input>
				<ButtonPrimary type="submit" className="w-full uppercase">
					{isLoading ? <BtnLoader /> : "LOGIN"}
				</ButtonPrimary>
				{error ? <div className="py-2 text-xs">{error}</div> : ""}
			</form>
		</div>
	);
};

export default LoginHandler;
