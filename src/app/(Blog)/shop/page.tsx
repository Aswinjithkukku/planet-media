import Image from "next/image";
import React from "react";
import product from "@/images/image.png";
import TitleBar from "@/shared/TitleBar";

export interface ShopPageProps {}

const ShopPage: React.FC<ShopPageProps> = async ({}) => {
	//
	const basicAuthHeader =
		"Basic " +
		Buffer.from(
			process.env.NEXT_PUBLIC_USERNAME +
				":" +
				process.env.NEXT_PUBLIC_PASSWORD
		).toString("base64");

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/wc/v3/products`,
		{
			method: "GET",
			headers: {
				Authorization: basicAuthHeader,
				"Content-Type": "application/json",
			},
		}
	);

	const data = await response.json();

	return (
		<div>
			<TitleBar title="Shop" />
			<div className="container text-primaryColor font-secondarycode">
				<div className="grid grid-cols-2 gap-1 bg-primaryColor">
					{Array.from({ length: 6 }).map((_, ind) => (
						<div key={ind} className="relative h-[40em] w-full">
							<div className="absolute bottom-0 left-0 p-5 text-primaryColor font-secondarycode text-sm">
								<p className="text-xs">MIST</p>
								<h3 className="text-base">Hydrating Mist</h3>
								<p>$28</p>
							</div>
							<Image
								src={product}
								className="w-full h-full object-cover"
								alt="logo"
								width={1000}
								height={500}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ShopPage;
