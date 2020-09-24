import IPFSHttpClient from "ipfs-http-client";
import { defineNuxtPlugin } from "@nuxtjs/composition-api";

export default defineNuxtPlugin((_, inject) => {
	const ipfs = IPFSHttpClient({
		host: "localhost",
		port: "5001",
		protocol: "http",
		timeout: 5000,
	});

	inject("ipfs", ipfs);
});
