<template>
	<div>
		<Nuxt />
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Rubik&display=swap");

:root {
	--primary: #f1faee;
	--secondary: #4ea8de;
	--accent: #ee6c4d;

	--primaryFont: "Rubik", sans-serif;
	--secondaryFont: "Amatic SC", "Times New Roman", serif;
}

html {
	font-family: var(--primaryFont);
	background-color: var(--secondary);
}

h1,
h2,
h3,
p,
label {
	color: var(--primary);
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

.fadeIn {
	animation: fadeIn 0.2s ease-in;
}
</style>
