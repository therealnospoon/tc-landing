import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";
import path from "path"

const config = {
	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite : {
			resolve: {
				alias : {
					"@snifty": path.resolve("./@snifty"),
					"$stores": path.resolve("./src/stores"),
					"$components": path.resolve("./src/components"),
					"$routes": path.resolve("./src/routes"),
					"$util": path.resolve("./src/util"),
				}
			},

			// This lets us inmports
			// @snifty which is outside the /src folder
			server : {
				fs : {
					allow : ["@snifty"]
				}
			}
		}
	},

	emitCss: true,

	preprocess: preprocess({
		replace: [
			['process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV)]
		],
		
		defaults: {
			style: 'scss',
		},
	}),
};

export default config;
