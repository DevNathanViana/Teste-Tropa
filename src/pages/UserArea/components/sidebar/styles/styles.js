import styled from "styled-components";

export const LeftMenu = styled.div`
background-color: #ffffff;
min-width: 210px;
max-width: 210px;
min-height: 100%;
display: flex;
flex-direction: column;
border-right: 1px;
padding-top: 30px;
gap: 30px;
position: relative;
border: 1px solid rgb(207, 207, 207);

.logo{
    min-width: 100%;
    min-height: 24.94px;
    padding: 0 25px;
    display: flex;
    gap: 10px;
}

.userMenu {
    min-width: 210px;
    max-width: 210px;
    min-height: 182px;
    max-height: 100%;
    border-right: 1px;
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    bottom: 0;

    .linhaDivisoria{
        margin-bottom: 30%;
    }

    .dataUser{
        min-height: 42px;
        min-width:100%;
        max-width:  100%;
        display: flex;
        gap: 10px;
        padding: 1px;

        div{
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
            gap: 1px;

            text{
                min-width: 82px;
                font-size: 14px;
                font-weight: 500;
            }

            span{
                font-size: 11px;
                font-weight: 400;
                color: #00000080;
            }
        }

        img{
            min-width: 40px;
            max-width: 40px;
            min-height: 40px;
            max-height: 40px;
            border-radius: 15px;
            border: 2px solid #CC6237;
        }
    }
}

`

export const InteractionArea = styled.div`
min-width: 100%;    
max-width: 100%;    
display: flex;
flex-direction: column;

.divider{
        min-width: 160px;
        min-height: 2px;
}

.pagination{
min-width: 100%;
min-height:100%;
padding: 0px 15px;
display: flex;
flex-direction: column;
gap: 7px;


    .title{
        min-width: 100%;
        max-width: 100%;
        min-height: 15px;
        max-height: 15px;
        padding: 0px 10px 0px 10px;
        gap: 5px;


        text{
            font-size: 9px;
             line-height: 15px;
             letter-spacing: 12%;
             font-weight: 800;
             color: #A3A3A3;
        }
    }
}

`