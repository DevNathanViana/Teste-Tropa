import { Actions, ButtonToPagination, ButtonViewPage, Content, ContentTable, FooterTable, HeaderTable, TableMain } from "./styles/styles"

function ContentPage() {

    const eventos = [
        {
            nome: "Clube do Laço Coração Pantaneiro",
            totalEquipes: 10,
            status: {
                texto: "Ativo",
                imgSrc: "/table/ativo-table.png",
                imgAlt: "ativo"
            },
            data: "09 a 11 de Junho",
        },
        {
            nome: "Clube do Laço Coração Pantaneiro",
            totalEquipes: 10,
            status: {
                texto: "Ativo",
                imgSrc: "/table/ativo-table.png",
                imgAlt: "ativo"
            },
            data: "09 a 11 de Junho",
        }
    ];


    return (
        <Content>
            <ContentTable>

                <HeaderTable>
                    <Actions>
                        <input placeholder='Bucar Eventos' type="text" />
                        <button>
                            <img src="/table/adicionar-table.png" alt="adicionar" />
                            Inserir novo
                        </button>
                    </Actions>
                </HeaderTable>

                <TableMain>
                    <thead>
                        <tr>
                            <th>Nome do evento</th>
                            <th>Total de Equipes</th>
                            <th>Status</th>
                            <th>Data</th>
                            <th className="options"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventos.map((evento) => (
                            <tr>
                                <td>{evento.nome}</td>
                                <td>{evento.totalEquipes}</td>
                                <td className="status"><img src={evento.status.imgSrc} alt={evento.status.imgAlt} />{evento.status.texto}</td>
                                <td>{evento.data}</td>
                                <td><img src="/table/mais-opcoes-table.png" alt="mais opções" /></td>
                            </tr>
                        ))}
                    </tbody>
                </TableMain>

                <FooterTable>
                    <ButtonToPagination >Anterior</ButtonToPagination>
                    <ButtonViewPage $bgColor={true}>1</ButtonViewPage>
                    <ButtonViewPage>2</ButtonViewPage>
                    <ButtonViewPage>3</ButtonViewPage>
                    <ButtonToPagination $bgColor={true}>Próxima</ButtonToPagination>
                </FooterTable>

            </ContentTable>
        </Content>
    )
}

export default ContentPage
