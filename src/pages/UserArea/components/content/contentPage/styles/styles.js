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
  padding: 20px;
  display: flex;
  flex-direction: column;
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
  display: flex;
  align-items: center;
  justify-content: end;
  `
export const TableMain = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  thead tr, tbody tr {
    height: 39px; 
  }

  thead{
    color: #CC623780;
  font-weight: 500;
  font-size: 13px;
  font-family: 'Poppins', sans-serif !important;
  }

  tbody{
    color: #657593;
  font-weight: 400;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;

  tr{
    border-top: 1px solid #CC62371A;
    border-bottom: 1px solid #CC62371A;
  }

  .status{
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 9px;
    min-height: 39px;
    max-height: 39px;
  }
  }

  thead tr th, tbody tr td {
    padding: 0 20px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  }

  .options {
    width: 40px; 
  }
  `;

export const FooterTable = styled.div`
  min-width: 100%;
  min-height: 74px;
  max-height: 74px;
  padding: 10px 0;
  display: flex;
  gap: 10px;
  justify-content: end;
  align-items: end;
  `
export const ButtonToPagination = styled.button`
  background-color: ${({ $bgColor }) => ($bgColor ? "#CC6237" : "#F5F5F5")};
  color: ${({ $bgColor }) => ($bgColor ? "#fff" : "#000")};
  min-width: 75px;
  max-width: 75px;
  min-height: 35px;
  max-height: 35px;
  border: none;
  border-radius: 200px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  `
export const ButtonViewPage = styled.button`
  background-color: ${({ $bgColor }) => ($bgColor ? "#CC6237" : "#F5F5F5")};
  color: ${({ $bgColor }) => ($bgColor ? "#fff" : "#000")};
  min-width: 35px;
  max-width: 35px;
  min-height: 35px;
  max-height: 35px;
  border: none;
  border-radius: 200px;
  padding: 10px ;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 124px;
  min-height: 36px;
  border: none;
  border-radius: 33px;
  background-color: #CC6237;
  font-weight: 500;
  font-size: 13px;
  color: #ffffff;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

  `