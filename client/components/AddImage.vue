<template>
	<div class="flex">
		<label class="add-img-label">
			<input type="file" accept="image/*" multiple @change="onImageSelection" />
			Add Image
		</label>
	</div>
</template>

<script>
export default {
	data() {
		return {
			urls: [],
		};
	},

	methods: {
		async onImageSelection(event) {
			await this.addImages(event.target.files);
		},

		async addImages(images) {
			for await (const result of this.$ipfs.addAll(images)) {
				if (result.path) {
					this.urls.push(`http://localhost:8080/ipfs/${result.path}`);
				}
			}

			this.$emit("onImgAddEvent", this.urls);
			this.urls = [];
		},
	},
};
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
