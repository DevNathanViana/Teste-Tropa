import { Actions, Content, ContentTable, HeaderTable } from "./styles/styles"

function ContentPage() {

    return (
        <Content>
            <ContentTable>
                <HeaderTable><Actions><input placeholder='Bucar Eventos' type="text" /><button>Inserir novo</button></Actions></HeaderTable>
            </ContentTable>
        </Content>
    )
}

export default ContentPage
