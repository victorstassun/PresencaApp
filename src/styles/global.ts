import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Cabin Sketch', cursive;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    cursor: default;
  }
  
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
 
  button {
    cursor: pointer;
  }
  #iconNews, #iconRef, #iconDel {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;