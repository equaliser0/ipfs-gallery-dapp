<template>
	<main class="flex fadeIn">
		<Header />
		<AddImage @onImgAddEvent="updateGallery" />
		<Gallery :img-urls="imgUrls" />
	</main>
</template>

<script>
import Components from "@/components/index";

export default {
	components: {
		...Components,
	},

	async asyncData({ $ipfs }) {
		const imgUrls = [];

		for await (const { cid, type } of $ipfs.pin.ls()) {
			if (type === "recursive") {
				imgUrls.push(`http://localhost:8080/ipfs/${cid}`);
			}
		}

		return { imgUrls };
	},

	methods: {
		updateGallery(urls) {
			for (const url of urls) {
				if (!this.imgUrls.includes(url)) {
					this.imgUrls.unshift(url);
				}
			}
		},
	},
};
</script>

<style scoped>
.flex {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
