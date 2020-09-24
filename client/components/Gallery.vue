<template>
	<section>
		<transition-group name="list" tag="div" class="gallery-container">
			<div v-for="url in imgUrls" :key="url" class="gallery-img-wrapper">
				<img class="gallery-img" :src="url" alt="gallery image" />
				<div class="gallery-img-overlay" @click="openImageModal(url)">
					<img src="~/assets/link.png" alt="link icon" />
				</div>
			</div>
		</transition-group>
		<ImageModal
			v-if="showModal"
			:url="modalImageUrl"
			@close="closeImageModal()"
		/>
	</section>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import ImageModal from "./ImageModal";

export default defineComponent({
	components: {
		ImageModal,
	},

	props: {
		imgUrls: {
			type: Array,
			default: () => [],
		},
	},

	setup() {
		const showModal = ref(false);
		const modalImageUrl = ref("");

		function openImageModal(url) {
			showModal.value = true;
			modalImageUrl.value = url;
		}

		function closeImageModal() {
			showModal.value = false;
			modalImageUrl.value = "";
		}

		return {
			showModal,
			modalImageUrl,
			openImageModal,
			closeImageModal,
		};
	},
});
</script>

<style scoped>
.gallery-container {
	display: grid;
	grid-gap: 2em;
	grid-template-columns: repeat(auto-fill, 1fr);
	grid-auto-rows: 500px;
	width: 100%;
}

.gallery-img {
	object-fit: cover;
	width: 100%;
	height: 100%;
	border-radius: 20px;
}

.gallery-img-wrapper {
	position: relative;
	cursor: pointer;
	transition: all 1s;
}

.gallery-img-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	background-color: black;
	border-radius: 20px;
}

.gallery-img-overlay:hover {
	opacity: 0.5;
}

.gallery-img-overlay img {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%);
}

@media only screen and (min-width: 600px) {
	.gallery-container {
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 300px;
	}
}

@media only screen and (min-width: 1200px) {
	.gallery-container {
		width: 1200px;
		grid-template-columns: repeat(3, 1fr);
	}
}

.list-enter,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}

.list-leave-active {
	position: absolute;
}
</style>
