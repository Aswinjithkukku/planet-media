import Button, { ButtonProps } from "./Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
	className = "",
	...args
}) => {
	return (
		<Button
			className={`disabled:bg-opacity-70  text-secondaryColor border border-secondaryColor ${className}`}
			{...args}
		/>
	);
};

export default ButtonPrimary;
