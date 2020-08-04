import IPFSHttpClient from "ipfs-http-client";

export default (_, inject) => {
	const ipfs = IPFSHttpClient({
		host: "localhost",
		port: "5001",
		protocol: "http",
		timeout: 5000,
	});

	inject("ipfs", ipfs);
};
