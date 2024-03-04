import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	sizeClass?: string;
	fontClass?: string;
	rounded?: string;
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className = "",
			sizeClass = "h-11 px-4 py-3",
			fontClass = "",
			rounded = "",
			children,
			type = "text",
			...args
		},
		ref
	) => {
		return (
			<div className="flex flex-col">
				<label className="uppercase font-light text-sm">
					{children}
				</label>
				<input
					ref={ref}
					type={type}
					className={`h-8 bg-transparent border-b border-secondaryColor outline-none  ${rounded} ${fontClass} ${sizeClass} ${className}`}
					{...args}
				/>
			</div>
		);
	}
);

export default Input;
