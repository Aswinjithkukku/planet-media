import React, { TextareaHTMLAttributes } from "react";

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
}

// eslint-disable-next-line react/display-name
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className = "", label = "label", children, ...args }, ref) => {
		return (
			<div className="flex flex-col gap-2">
				<label className=" font-light text-sm pl-2">
					{label}
				</label>
				<textarea
					ref={ref}
					className={`block w-full text-sm rounded-2xl outline-none  ${className}`}
					rows={4}
					{...args}
				>
					{children}
				</textarea>
			</div>
		);
	}
);

export default Textarea;
