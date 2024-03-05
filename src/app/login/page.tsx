import LoginBanner from "@/images/login-banner.png";
import Image from "next/image";
import LoginHandler from "./LoginHandler";
import Logo from "@/shared/Logo";
import Link from "next/link";

function LoginPage() {
	//
	const LoginSection = () => {
		return (
			<div className="pt-40 ">
				<h1 className="text-secondaryColor text-[32px] font-extrabold font-primaryserif tracking-wider">
					Login
				</h1>
				<div className="font-secondarycode text-secondaryColor">
					<LoginHandler />
				</div>
				<div className="text-secondaryColor flex justify-center gap-2 font-light text-[14px]">
					<span className="">LOGIN</span>
					<span className="">OR</span>
					<Link href={"/shop"} className="font-normal underline">
						SHOP
					</Link>
				</div>
			</div>
		);
	};

	return (
		<div className="bg-primaryColor h-[100vh]  w-full">
			<div className="h-full">
				<div className="flex gap-5 h-full ">
					<section className="w-[40%] pt-10 px-32">
						<div className="">
							<Logo colour="secondary" />
						</div>
						{/* Login section  */}
						{LoginSection()}
					</section>
					<section className="w-[60%] pt-20">
						<div className="h-full">
							<Image
								src={LoginBanner}
								className="w-full h-[90%] rounded-l-3xl overflow-hidden object-cover"
								alt="logo"
								width={1000}
								height={500}
							/>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
