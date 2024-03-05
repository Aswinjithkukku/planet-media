import { Post } from "@/data/post";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Textarea from "@/shared/Textarea";
import TitleBar from "@/shared/TitleBar";
import Image from "next/image";
import React from "react";

export interface PostDetailPageProps {
	params: { post: string };
}

const PostDetailPage: React.FC<PostDetailPageProps> = async ({ params }) => {
	//
	const { post } = params;

	let token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsIm5hbWUiOiJ3cGN1c3RvbWVyIiwiaWF0IjoxNzA5NTI0NTQ3LCJleHAiOjE4NjcyMDQ1NDd9.MUtnWUPTBB3pKDrdNP610WRlwy9YpmRZdLalbO6vWq0";
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/wp/v2/posts/${post}`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		}
	);

	const data: Post = await response.json();

	const imageResponse = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/wp/v2/media/${data.featured_media}`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		}
	);

	const image = await imageResponse.json();

	const renderCommentListingSection = () => {
		return (
			<div className="font-secondarycode text-secondaryColor text-sm space-y-5">
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 rounded-full bg-orange-500 flex justify-center items-center text-xl">
						C
					</div>
					<p className="">Candice Wu</p>
					<p className="font-thin text-xs">1 hour ago</p>
				</div>
				<p className="">
					Hi Orlando Diggs , let's meet today. I want to tell you
					about my ideas. Maybe there we can share toughts. I'll send
					you the link on Discord!
				</p>
			</div>
		);
	};

	const renderCommentSection = () => {
		return (
			<div className="m-10 rounded-3xl bg-primaryColor text-secondaryColor font-secondarycode p-10 space-y-10">
				<h2 className="text-xl font-bold">Comments</h2>
				<Textarea
					label="comments"
					placeholder="What are your thoughts??"
					className="border-secondaryColor border bg-transparent p-5 placeholder:text-secondaryColor placeholder:font-thin"
				/>
				<ButtonPrimary>POST A COMMENT</ButtonPrimary>
				<div className=" border-b border-secondaryColor" />

				{renderCommentListingSection()}
			</div>
		);
	};

	return (
		<div>
			<TitleBar title={data?.title?.rendered} />
			<div className="max-w-screen-xl mx-auto">
				<div className=" m-10 rounded-xl overflow-hidden">
					<Image
						src={image?.guid?.rendered}
						className="w-full h-[40em] object-cover"
						alt="logo"
						width={1000}
						height={500}
					/>
				</div>
				<div
					className="m-10  text-primaryColor font-secondarycode text-sm leading-loose"
					dangerouslySetInnerHTML={{
						__html: data?.content?.rendered,
					}}
				></div>
				{renderCommentSection()}
			</div>
		</div>
	);
};

export default PostDetailPage;
