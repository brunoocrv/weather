import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		bottom: 0;
		box-sizing: border-box;
	}


	body, button, textarea, input, html {
		background: '#ffffff';
		color: '#030712';

		font-family: 'Inter', sans-serif;
		font-size: 1rem;
	}
`;
