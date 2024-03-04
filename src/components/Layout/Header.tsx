import Logo from "@/shared/Logo";
import { BsHandbag } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";

const Header = () => {
	return (
		<div className="bg-secondaryColor font-secondarycode text-primaryColor">
			<div className="flex justify-between gap-2 py-4 max-w-screen-xl mx-auto">
				<div className="flex items-center gap-1">
					<span>
						<BsHandbag />
					</span>
					<span>Shop</span>
				</div>
				<div className="">
					<Logo colour="primary" />
				</div>
				<div className="flex items-center gap-1">
					{" "}
					<span>Login</span>
					<span>
						<IoExitOutline />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
