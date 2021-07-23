//import "nrcs-design-system/scss/nrcs-design-system.scss";
//import "!style-loader!css-loader!sass-loader!../src/scss/nrcs-design-system.scss";
import "!style-loader!css-loader!sass-loader!nrcs-design-system/scss/nrcs-design-system.scss";
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
