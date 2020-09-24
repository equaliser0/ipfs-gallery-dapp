<template>
	<div class="flex">
		<label class="add-img-label">
			<input type="file" accept="image/*" multiple @change="onImageSelection" />
			Add Image
		</label>
	</div>
</template>

<script>
import { defineComponent, useContext, ref } from "@nuxtjs/composition-api";

export default defineComponent({
	emits: ["onImageSelection"],

	setup(_, { emit }) {
		const urls = ref([]);
		const { $ipfs } = useContext();

		async function onImageSelection(event) {
			await addImages(event.target.files);
		}

		async function addImages(images) {
			for await (const result of $ipfs.addAll(images)) {
				if (result.path) {
					urls.value.push(`http://localhost:8080/ipfs/${result.path}`);
				}
			}

			emit("onImgAddEvent", urls.value);
			urls.value = [];
		}

		return {
			urls,
			onImageSelection,
			addImages,
		};
	},
});
</script>

<style scoped>
.add-img-label {
	background-color: var(--accent);
	border-radius: 8px;
	padding: 8px 12px;
	cursor: pointer;
	margin-bottom: 50px;
	font-size: 0.75em;
	text-transform: uppercase;
	font-weight: bold;
}

.add-img-label:hover {
	background-color: #cf5e42;
}

.add-img-label:active {
	transform: scale(1.04);
}

input[type="file"] {
	display: none;
}
</style>
