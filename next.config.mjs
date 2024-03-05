/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "wp.planetmedia.dev",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
