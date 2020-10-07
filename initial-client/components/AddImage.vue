<template>
	<div class="flex">
		<label class="add-img-label">
			<input type="file" accept="image/*" multiple />
			Add Image
		</label>
	</div>
</template>

<script></script>

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
