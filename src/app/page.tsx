import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import TitleBar from "@/shared/TitleBar";
import banner from "@/images/listpage-banner.png";
import Image from "next/image";
import { Post } from "@/data/post";
import Link from "next/link";

const LandingPage = async () => {
	let token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsIm5hbWUiOiJ3cGN1c3RvbWVyIiwiaWF0IjoxNzA5NTI0NTQ3LCJleHAiOjE4NjcyMDQ1NDd9.MUtnWUPTBB3pKDrdNP610WRlwy9YpmRZdLalbO6vWq0";
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/posts/`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		}
	);

	const data: Post[] = await response.json();

	//
	const singleCard = (item: Post) => {
		return (
			<Link
				href={`/${item?.id}`}
				key={item?.id}
				className="cursor-pointer h-[320px] w-full bg-primaryColor text-secondaryColor  p-10 flex flex-col justify-end gap-3"
			>
				<div className="font-secondarycode text-sm font-light uppercase">
					skin care
				</div>
				<div className="font-primaryserif text-3xl">
					{item?.title?.rendered}
				</div>
			</Link>
		);
	};

	return (
		<div>
			<Header />
			<TitleBar title="Blogs" />
			<div className="container py-5">
				<div className="grid grid-cols-4">
					{data?.map((item) => singleCard(item))}
				</div>
				<div className="relative">
					<div className="absolute inset-0 bg-overlayColor/50"></div>
					<Image
						src={banner}
						className="w-full h-[40em] object-cover"
						alt="logo"
						width={1000}
						height={500}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default LandingPage;
