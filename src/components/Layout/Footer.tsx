import Logo from "@/shared/Logo";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
	return (
		<footer className="bg-primaryColor text-secondaryColor font-secondarycode py-20">
			<div className="max-w-screen-xl mx-auto px-5 text-sm space-y-24">
				<div className="flex justify-between">
					<div className="">
						<Logo colour="secondary" />
					</div>
					<div className="flex gap-32">
						<div className="space-y-5">
							<p className="uppercase">ADDRESS</p>
							<p className="font-light text-[12px]">
								13 Brinkley Circuit Palmerston
							</p>
						</div>
						<div className="space-y-5">
							<p className="uppercase">SOCIAL MEDIA</p>
							<p className="font-light text-[12px] flex gap-5">
								<span className="">
									<FaInstagram />
								</span>
								<span className="">
									<FaFacebookF />
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="flex justify-between">
					<div className="">
						<p className="">© 2022 PURE BEAUTY. POWERED BY</p>
					</div>
					<div className="">ALL RIGHTS RESERVED.</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
