<template>
	<div class="modal">
		<img class="modal-img" alt="gallery image" />
		<span class="close-btn">&times;</span>
	</div>
</template>

<script></script>

<style scoped>
.modal {
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
}

.modal-img {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%);
	max-width: 600px;
	width: 100%;
	border: 3px solid white;
	border-radius: 4px;
	box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
	animation: fadeIn 0.3s ease-in;
}

.close-btn {
	position: absolute;
	top: 15px;
	right: 35px;
	color: #f1f1f1;
	font-size: 40px;
	font-weight: bold;
}

.close-btn:hover,
.close-btn:focus {
	color: white;
	text-decoration: none;
	cursor: pointer;
}

@media only screen and (max-width: 600px) {
	.modal-img {
		width: 100%;
	}
}
</style>
