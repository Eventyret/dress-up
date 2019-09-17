import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
  }
  body {
	font-family: 'Open Sans Condensed' !important;
	padding: 20px 60px;
  }
  a {
	text-decoration: none;
	color: #212121;
  }
`