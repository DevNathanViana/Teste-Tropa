import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;
`;

export const ContentTable = styled.div`
  width: 100%;
  min-height: 289px;
  max-height: 289px;
  padding: 20px;
  display: flex;
  gap: 10px;
  border: 1px solid rgb(207, 207, 207);
  border-radius: 10px;
  box-sizing: border-box; 
  background-color: #ffffff;
`;

export const HeaderTable = styled.div`
min-width: 100%;
min-height: 60px;
max-height: 60px;
`
export const Actions = styled.div`
min-width: auto;
min-height: 36px;
max-height: 36px;
display: flex;
justify-content: end;
gap: 10px;

input {
  background: url('/table/lupa-table.png') no-repeat 10px center;
  text-align: start;
  width: 203px;
  min-height: 36px;
  padding-left: 30px; 
  padding-right: 15px;
  border: none;
  border-radius: 33px;
  background-color: #F6F6F6;
  color: #333;

  &::placeholder {
    color: #999; 
    font-weight: 500;
    font-size: 13px;
  }
}

button{
    background: url('/table/adicionar-table.png') no-repeat 10px center;
    text-align: start;
    width: 124px;
    min-height: 36px;
    padding-left: 30px; 
    padding-right: 15px;
    border: none;
    border-radius: 33px;
    background-color: #CC6237;
    font-weight: 500;
    font-size: 13px;
    color: #ffffff;
    gap: 10px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
}

`