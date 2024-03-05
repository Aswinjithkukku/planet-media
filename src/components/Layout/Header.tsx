import Logo from "@/shared/Logo";
import Link from "next/link";
import { BsHandbag } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";

const Header = () => {
	return (
		<div className="bg-secondaryColor font-secondarycode text-primaryColor">
			<div className="flex justify-between gap-2 py-4 max-w-screen-xl mx-auto">
				<Link href={"/shop"} className="flex items-center gap-1">
					<span>
						<BsHandbag />
					</span>
					<span>Shop</span>
				</Link>
				<div className="">
					<Logo colour="primary" />
				</div>
				<Link href={"/login"} className="flex items-center gap-1">
					{" "}
					<span>Logout</span>
					<span>
						<IoExitOutline />
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Header;
