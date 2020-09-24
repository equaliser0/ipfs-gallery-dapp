<template>
	<main class="flex fadeIn">
		<Header />
		<AddImage @onImgAddEvent="updateGallery" />
		<Gallery :img-urls="imgUrls" />
	</main>
</template>

<script>
import { defineComponent, useAsync, useContext } from "@nuxtjs/composition-api";

import Components from "@/components/index";

export default defineComponent({
	components: {
		...Components,
	},

	setup() {
		const { $ipfs } = useContext();

		const imgUrls = useAsync(() => getImgUrls());

		async function getImgUrls() {
			const cids = [];
			for await (const { cid, type } of $ipfs.pin.ls()) {
				if (type === "recursive") {
					cids.push(`http://localhost:8080/ipfs/${cid}`);
				}
			}

			return cids;
		}

		function updateGallery(urls) {
			for (const url of urls) {
				if (!this.imgUrls.includes(url)) {
					this.imgUrls.unshift(url);
				}
			}
		}

		return { imgUrls, updateGallery };
	},
});
</script>

<style scoped>
.flex {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
