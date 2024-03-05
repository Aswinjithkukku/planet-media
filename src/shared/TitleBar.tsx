export interface TitleBarProps {
	title?: string;
}
const TitleBar: React.FC<TitleBarProps> = ({ title = "Title Bar" }) => {
	return (
		<div className=" py-8 bg-primaryColor rounded-b-xl font-primaryserif text-secondaryColor">
			<div className=" max-w-screen-xl mx-auto ">
				<h1 className="text-4xl tracking-wide">{title}</h1>
			</div>
		</div>
	);
};

export default TitleBar;
