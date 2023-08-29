export const template = (data: { title: string; description: string; }) => `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Flow+Rounded&display=swap" rel="stylesheet">
	<style>
		:root {
			font-family: 'Flow Rounded', sans-serif;
			--colorA: rgb(37 43 72);
			--colorB: rgb(68 80 105);
			--colorC: rgb(91 154 139);
			--colorD: rgb(247 233 135);
		}

		:where(html) {
			height: 100%;
			background-color: var(--colorA);
			color: var(--colorD);
		}

		:where(body) {
			height: 100%;
			margin: 0;
		}

		:where(h1) {
			font-size: 10vmin;
			line-height: 1;
			margin-block: .1em;
		}

		:where(p) {
			font-size: 5vmin;
			line-height: 1.2;
			margin-block: .2em;
		}

		.centering-wrapper {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			place-items: center;
			place-content: center;
			text-align: center;
		}
	</style>
</head>
<body>
	<div class="centering-wrapper">
		<div class="wrapper">
			<h1>${ data.title }</h1>
			<p>${ data.description }</p>
		</div>
	</div>
</body>
</html>
`;
