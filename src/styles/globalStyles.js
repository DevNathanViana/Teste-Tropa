import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin :0;
    padding: 0;
    box-sizing: border-box;
    outline: none!important;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    scrollbar-width: none;
    overflow-y: auto;
    overflow-x: hidden;

    button {
      cursor: pointer;
    }
}

*:focus {
    outline: none !important;
}

#root {
  height: 100vh; 
  display: flex; 
}

body{
  background-color: #F9FBFF!important;
}

html, body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
}


`

