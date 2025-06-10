import styled from "styled-components";

export const BaseBackground = styled.div`
min-width: 100vw;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.fade-out {
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.fade-in {
  opacity: 1;
  transition: opacity 0.3s ease-in;
}
`
export const MainContent = styled.div`
min-width: 756.5px;
max-width: 756.5px;
min-height: 498px;
max-height: 498px;
display: flex;
flex-direction: row;
background-color:rgb(255, 255, 255);
border-radius: 20px;
padding: 10px;
box-shadow: 0px 100px 200px rgba(0, 0, 0, 0.25);
position: relative;
`
export const AreaLogin = styled.div`
min-width: 339px;
min-height: 478px;
padding: 40px 20px;
gap: 20px;
`
export const ContentLogin = styled.div`
min-width: 299px;
min-height: 388px;
padding-bottom: 49px;
display: flex;
flex-direction: column;
gap: 35px;

.logo{
    min-width: 161px;
    max-width: 161px;
    min-height: 25px;
    max-height: 25px;
}

.text{
    min-height: 35px;
    min-width: 299px;
    max-width: 299px;
    justify-content: start;

    text{
    font-weight: 700;
    font-size: 26px;
    color: #CC6237;
}

span{
    min-height: 35px;
    font-weight: 400;
    font-size: 13px;
    color:rgba(42, 77, 142, 0.5);
}
}

`

export const Inputs = styled.div`
min-width: 299px;
max-width:299px;
min-height:200px;
max-height:200px;
display: flex;
flex-direction: column;
gap: 20px;

.input, .senha{
    min-width: 100%;
    max-width:100%;
    min-height: 60px;
    max-height: 60px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    div{
    min-width: 100%;
    max-width:100%;
    min-height: 40px;
    max-height: 40px;
    position: relative;
    cursor: pointer;

    img{
        position: absolute;
        top: 06px;
        right: 17px;
    }
}

}

button{
    background-color: #CC6237;
    color: #fff;
    min-width: 100%;
    max-width: 100%;
    min-height: 40px;
    max-height: 40px;
    border: none;
border-radius: 100px;
}

input {
    min-width: 100%;
    max-width:100%;
    min-height: 40px;
    max-height: 40px;
    border-radius: 100px;
    background-color: #F6F6F6;
    padding: 10px 20px;
    border: none;
    color: #657593;

    &::placeholder{
        color: #657593;
    }
}

label {
    min-width: 100%;
    max-width:100%;
    min-height: 15px;
    max-height: 15px;
    color: #CC6237;
    font-size: 13px;
    font-weight: 600;
}
`

export const ImagemLogin = styled.div`
min-width: 397.5px;
min-height: 478px;
display: flex;
justify-content: end;

div {
    background-color: #CC6237;
    min-width: 355.5px;
    max-width: 355.5px;
    min-height: 478px;
    border-radius: 20px;
    top: 10px;
}

img {
    top: 172px;
    left: 349px;
    position: absolute;
    object-fit: cover;
    min-width: 357px;
    max-width: 357px;
    min-height: 316px;
    max-height: 316px;
}
`