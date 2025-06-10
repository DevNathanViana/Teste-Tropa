import styled from "styled-components";

export const ButtonToPagination = styled.div`
min-width: 180px;
max-width: 100%;
min-height: 35px;
max-height: 35px;
padding: 10px;
display: flex;
gap: 10px;
background-color: ${({ $bgColor }) => ($bgColor ? "#CC6237" : "trasparent")};
color: ${({ $bgColor }) => ($bgColor ? "#fff" : "#000")};
border-radius: 08px;

text{
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
}
`
export const ButtonToMenu = styled.div`
min-width: 160px;
max-width: 100%;
min-height: 35px;
max-height: 35px;
padding: 10px;
display: flex;
gap: 10px;

text{
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
}
`
