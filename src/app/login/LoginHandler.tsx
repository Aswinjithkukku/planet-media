"use client";

import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";

const LoginHandler = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};
	return (
		<div className="py-10">
			<form onSubmit={handleSubmit} className="space-y-14">
				<Input>USERNAME</Input>
				<Input>PASSWORD</Input>
				<ButtonPrimary className="w-full uppercase">
					LOGIN
				</ButtonPrimary>
			</form>
		</div>
	);
};

export default LoginHandler;
