import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap');

*{
    margin :0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
    outline: none!important;
    text-decoration: none;
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

