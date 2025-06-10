import styled from "styled-components";


export const Header = styled.div`
min-width: 100%;
min-height: 119px;
display: flex;
flex-direction: column;
padding: 30px;
justify-content: space-between;

.txtWelcome{
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #00000099;

    strong{
        color: #000000;
    }
}

.titlePage{
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #CC6237E5;
}
`